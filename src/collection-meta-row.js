/**** collection-meta-row.js | MetaTableCollection ****/
//==============================================================
import { ExtendError }              from 'logic-core';
import { Type }                     from 'logic-core';
import { Util }                     from 'logic-core';
import { TransactionCollection }    from './collection-transaction.js';
import { MetaRow }                  from './meta-row.js';

var MetaRowCollection  = (function (_super) {
    /**
     * 로우 컬렉션
     * 
     * @constructs MetaRowCollection
     * @extends TransactionCollection
     * @param {object} [p_owner] 소유자 
     */
    function MetaRowCollection(p_owner) {
        _super.call(this, p_owner);

        this._elemTypes = MetaRow;   // 컬렉션타입 설정
        this.autoChanges = true;    // 트랜젝션 기본 해제 해제입니다.
    }
    Util.inherits(MetaRowCollection, _super);

    MetaRowCollection._NS = 'Meta.Entity';    // namespace
    MetaRowCollection._PARAMS = ['_owner'];  // creator parameter

    /**
     * 프로퍼티 기술자 설정
     * 
     * @protected
     * @param {number} p_idx 인덱스
     */
    MetaRowCollection.prototype._getPropDescriptor = function(p_idx) {
        return {
            get: function() { return this.$elements[p_idx]; },
            set: function(nVal) {
                if (this._elemTypes.length > 0) Type.matchType([this._elemTypes], nVal);
                if (nVal._entity !== this._owner) throw new ExtendError(/EL05221/, null, [this.constructor.name]);
                this._transQueue.update(p_idx, nVal, this.$elements[p_idx]); 
                this.$elements[p_idx] = nVal;
            },
            configurable: true,
            enumerable: true,
        };
    };
    Object.defineProperty(MetaRowCollection.prototype, '_getPropDescriptor', {
        enumerable: false
    });

    /**
     * MetaRow 추가 idx 를 기준으로 검사한다.
     * 
     * @param {MetaRow} p_row 추가할 MetaRow
     * @param {boolean} [p_isCheck] 유효성 검사 여부 (기본값 = false)
     * @returns {number}
     */
    MetaRowCollection.prototype.add  = function(p_row, p_isCheck) {
        var pos = this.$elements.length;
        this.insertAt(pos, p_row, p_isCheck);  // TODO: try 문으로 묶음 필요
        return pos;
    };
    Object.defineProperty(MetaRowCollection.prototype, 'add', {
        enumerable: false
    });

    /**
     * pos 위치에 추가
     * 
     * @param {number} p_pos 추가할 위치 인덱스
     * @param {MetaRow} p_row 추가할 MetaRow
     * @param {boolean} [p_isCheck] 유효성 검사 여부 (기본값 = false)
     * @returns {boolean}
     */
    MetaRowCollection.prototype.insertAt  = function(p_pos, p_row, p_isCheck) {
        var isCheck = p_isCheck || false;
        var result;
        var entity = p_row._entity;

        if (!(p_row instanceof MetaRow )) throw new ExtendError(/EL05222/, null, []);
        if (entity._guid !== this._owner._guid) throw new ExtendError(/EL05223/, null, [this.constructor.name]);
        
        // valid 검사
        if (isCheck === true) {
            for (let i = 0; i < p_row.count; i++) {
                result = entity.columns[i].valid(p_row[i]);     // TODO: try 조건으로 변경 하면 하위 메세지 호출함
                if(result) {
                    throw new ExtendError(/EL05224/, null, [i, result.msg]);
                }
            }
        }
        return _super.prototype.insertAt.call(this, p_pos, p_row);
    };
    Object.defineProperty(MetaRowCollection.prototype, 'insertAt', {
        enumerable: false
    });

    return MetaRowCollection;
    
}(TransactionCollection));

export default MetaRowCollection;
export { MetaRowCollection };