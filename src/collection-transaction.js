/**** collection-transaction.js | _L.Collection.TransactionCollection ****/
//==============================================================
import { ExtendError }          from 'logic-core';
import { Type }                 from 'logic-core';
import { Util }                 from 'logic-core';
import { ArrayCollection }      from 'logic-core';
import { TransactionQueue }     from './trans-queue.js';

var TransactionCollection  = (function (_super) {
    /**
     * 트랜젝션 컬렉션 클래스
     * @constructs _L.Collection.TransactionCollection
     * @extends _L.Collection.ArrayCollection
     * @param {object} p_owner 소유객체
     */
    function TransactionCollection(p_owner) {
        _super.call(this, p_owner);

        var _transQueue = new TransactionQueue(this);
        var autoChanges = false;

        /**
         * 트렌젝션 큐
         * @readonly
         * @member {TransactionQueue} _L.Collection.TransactionCollection#_transQueue
         */
        Object.defineProperty(this, '_transQueue', {
            get: function() { return _transQueue; },
            configurable: false,
            enumerable: false
        });

        /**
         * 자동 변경 유무 (기본값: 사용 false)
         * @member {boolean} _L.Collection.TransactionCollection#autoChanges
         */
        Object.defineProperty(this, 'autoChanges', {
            get: function() { return autoChanges; },
            set: function(nVal) { 
                if (typeof nVal !== 'boolean') {
                    throw new ExtendError(/EL04311/, null, [this.constructor.name ,typeof nVal]);
                }
                autoChanges = nVal;
            },
            configurable: false,
            enumerable: false
        });

        /**
         * 변경 유무
         * @readonly
         * @member {TransactionCollection} _L.Collection.TransactionCollection#hasChanges
         */
        Object.defineProperty(this, 'hasChanges', {
            get: function() { return _transQueue.queue.length > 0; },
            configurable: false,
            enumerable: false
        });

        // 예약어 등록 
        this.$KEYWORD = ['_transQueue', 'autoChanges', 'hasChanges'];
        this.$KEYWORD = ['commit', 'rollback'];

    }
    Util.inherits(TransactionCollection, _super);

    TransactionCollection._NS = 'Collection';      // namespace
    TransactionCollection._PARAMS = ['_owner'];    // creator parameter

    /**
     * 트랜젝션 컬렉션 프로퍼티 기술자 
     * @protected
     * @param {number} p_idx 인덱스
     */
    TransactionCollection.prototype._getPropDescriptor = function(p_idx) {
        return {
            get: function() { return this.$elements[p_idx]; },
            set: function(nVal) {
                if (this._elemTypes.length > 0) Type.matchType([this._elemTypes], nVal);
                this._transQueue.update(p_idx, nVal, this.$elements[p_idx]); 
                this.$elements[p_idx] = nVal;
            },
            configurable: true,
            enumerable: true,
        };
    };
    Object.defineProperty(TransactionCollection.prototype, '_getPropDescriptor', {
        enumerable: false
    });

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.
     * @param {number} p_vOpt 가져오기 옵션
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    TransactionCollection.prototype.getObject = function(p_vOpt, p_owned) {
        var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
        // var vOpt = p_vOpt || 0;
        // var origin = p_origin ? p_origin : obj;
        // var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);

        if (this.autoChanges !== false) obj['autoChanges'] = this.autoChanges;
        return obj;                        
    };
    Object.defineProperty(TransactionCollection.prototype, 'getObject', {
        enumerable: false
    });

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.   
     * @param {object} p_oGuid guid 타입의 객체
     * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
     * 기본값은 p_oGuid 객체와 동일
     */
    TransactionCollection.prototype.setObject  = function(p_oGuid, p_origin) {
        _super.prototype.setObject.call(this, p_oGuid, p_origin);
        this._transQueue.init();
        if (p_oGuid['autoChanges']) this.autoChanges = p_oGuid['autoChanges'];
    };
    Object.defineProperty(TransactionCollection.prototype, 'setObject', {
        enumerable: false
    });

    /**
     * 지정 위치에 요소 삭제
     * @param {number} p_pos 인덱스 위치
     * @returns {boolean}
     */
    TransactionCollection.prototype.removeAt = function(p_pos) {
        if (!this.autoChanges) this._transQueue.delete(p_pos, this[p_pos]);
        return _super.prototype.removeAt.call(this, p_pos);
    };
    Object.defineProperty(TransactionCollection.prototype, 'removeAt', {
        enumerable: false
    });

    /**
     * 전체 초기화
     */
    TransactionCollection.prototype.clear = function() {
        _super.prototype.clear.call(this);
        this._transQueue.init();
    };
    Object.defineProperty(TransactionCollection.prototype, 'clear', {
        enumerable: false
    });

    /**
     * 지정 위치에 요소 추가
     * @param {number} p_pos 인덱스 위치
     * @param {any} p_elem 요소
     * @param {object} [p_desc] 프로퍼티 기술자 객체
     * @returns {boolean}
     */
    TransactionCollection.prototype.insertAt = function(p_pos, p_elem, p_desc) {
        if (!this.autoChanges) this._transQueue.insert(p_pos, p_elem);
        return _super.prototype.insertAt.call(this, p_pos, p_elem, p_desc);
    };
    Object.defineProperty(TransactionCollection.prototype, 'insertAt', {
        enumerable: false
    });

    /**
     * 변경사항 반영
     */
    TransactionCollection.prototype.commit = function() {
        this._transQueue.commit();
    };
    Object.defineProperty(TransactionCollection.prototype, 'commit', {
        enumerable: false
    });

    /**
     * 변경사항 이전으로 복귀
     */
    TransactionCollection.prototype.rollback = function() {
        this._transQueue.rollback();
    };
    Object.defineProperty(TransactionCollection.prototype, 'rollback', {
        enumerable: false
    });

    return TransactionCollection;

}(ArrayCollection));

export default TransactionCollection;
export { TransactionCollection };