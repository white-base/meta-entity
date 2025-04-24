/**** base-column-collection.js | BaseColumnCollection ****/
//==============================================================
import { ExtendError }          from 'logic-core';
import { Type }                 from 'logic-core';
import { Util }                 from 'logic-core';
import { MetaElement }          from 'logic-core';
import { PropertyCollection }   from 'logic-core';
import { BaseColumn }           from './base-column.js';

var BaseColumnCollection  = (function (_super) {
    /**
     * 컬럼 컬렉션 (최상위)
     * 
     * @abstract
     * @constructs BaseColumnCollection
     * @extends PropertyCollection
     * @param {object} p_owner 소유자 
     * @param {BaseColumn} [p_baseType] 기본 컬럼 타입
     */
    function BaseColumnCollection(p_owner, p_baseType) {
        _super.call(this, p_owner);
        
        var _baseType;

        /**
         * 기본 컬럼 타입
         * 
         * @member {typeof BaseColumn} BaseColumnCollection#_baseType
         */
        Object.defineProperty(this, '_baseType', {
            get: function() { return _baseType; },
            set: function(nVal) { 
                if (!(typeof nVal === 'function')) throw new ExtendError(/EL05141/, null, [this.constructor.name, typeof nVal]);
                // if (!(new nVal('temp') instanceof BaseColumn)) throw new ExtendError('ES032', ['_baseType', 'BaseColumn']);
                if (!(Type.isProtoChain(nVal, BaseColumn))) throw new ExtendError(/EL05142/, null, [this.constructor.name]);
                _baseType = nVal;
            },
            enumerable: false,
            configurable: false,
        });

        this._baseType = p_baseType;

        // 예약어 등록 
        this.$KEYWORD = ['_baseType', '_ownerIsEntity', 'initValue', 'existAlias'];
        this.$KEYWORD = ['existColumnName', 'alias', 'addValue'];
    }
    Util.inherits(BaseColumnCollection, _super);
    
    BaseColumnCollection._NS = 'Meta.Entity';                   // namespace
    BaseColumnCollection._PARAMS = ['_owner', '_baseType'];     // creator parameter
    BaseColumnCollection._KIND = 'abstract';


    /**
     * _owner 이 엔티티 여부를 확인합니다.
     * 
     * @returns {boolean}
     */
    BaseColumnCollection.prototype._ownerIsEntity = function() {
        return this._owner instanceof MetaElement && this._owner.instanceOf('BaseEntity');
    };
    Object.defineProperty(BaseColumnCollection.prototype, '_ownerIsEntity', {
        enumerable: false
    });


    /**
     * 컬렉션에 요소를 추가할 때 설정되는 기본 기술자입니다.
     * 
     * @protected
     * @param {number} p_idx 인덱스 번호
     * @param {number} [p_enum=true] 열거 가능 여부
     * @returns {PropertyDescriptor} 컬럼 접근을 위한 프로퍼티 기술자입니다.
     */
    BaseColumnCollection.prototype._getPropDescriptor = function(p_idx, p_enum) {
        if (typeof p_enum !== 'boolean') p_enum = true;
        return {
            get: function() { return this.$elements[p_idx]; },
            set: function(nVal) {
                // throw new ExtendError(/EL05148/, null, []);
                this.$elements[p_idx].value = nVal;
            },
            configurable: true,
            enumerable: p_enum,
        };
    };
    Object.defineProperty(BaseColumnCollection.prototype, '_getPropDescriptor', {
        enumerable: false
    });

    /**
     * 컬럼을 컬렉션에 추가
     * 
     * @param {string} p_name 컬럼명
     * @param {any} p_value 컬럼객체
     * @returns {number} 추가한 index 
     */
    BaseColumnCollection.prototype.add = function(p_name, p_value) {
        
        if (this._ownerIsEntity() && this._owner.rows.count > 0) throw new ExtendError(/EL05143/, null, [this._owner.rows.count]);
        if (this.existColumnName(p_name)) throw new ExtendError(/EL05144/, null, [this.constructor.name, p_name]);
        if (this.existAlias(p_name)) throw new ExtendError(/EL05145/, null, [this.constructor.name, p_name]); 
        
        return _super.prototype.add.call(this, p_name, p_value);
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'add', {
        enumerable: false
    });

    /**
     * 컬럼을 컬렉션에서 삭제
     * 
     * @param {number} p_idx 
     * @returns {boolean} 컬렉션에 로우가 존재할 경우 예외가 발생합니다.
     */
    BaseColumnCollection.prototype.removeAt = function(p_idx) {
        if (this._owner.rows.count > 0) throw new ExtendError(/EL05146/, null, [this._owner.rows.count]);
        return _super.prototype.removeAt.call(this, p_idx); 
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'removeAt', {
        enumerable: false
    });

    /**
     * 컬렉에 모든 value 값을 default 값으로 초기화
     */
    BaseColumnCollection.prototype.initValue  = function() {
        for (var i = 0; this.count > i; i++) {
            this[i].value = this[i].default;
        }
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'initValue', {
        enumerable: false
    });

    /**
     * 컬렉션에 별칭 이름(키)가 존재하는지 검사
     * 
     * @param {string} p_key 이름
     * @returns {boolean}
     */
    BaseColumnCollection.prototype.existAlias  = function(p_key) {
        for (var i = 0; this.count > i; i++) {
            if (this[i].alias === p_key) return true;
        }
        return false;
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'existAlias', {
        enumerable: false
    });

    /**
     * 컬렉션에 컬럼 이름(키)이 존재하는지 검사
     * 
     * @param {string} p_key 이름
     * @returns {boolean}
     */
    BaseColumnCollection.prototype.existColumnName  = function(p_key) {
        for (var i = 0; this.count > i; i++) {
            if (this[i].columnName === p_key) return true;
        }
        return false;
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'existColumnName', {
        enumerable: false
    });

    /**
     * 별칭에 대한 컬럼 객체 얻기
     * 
     * @param {string} p_key 키
     * @returns {BaseColumn | undefined}
     */
    BaseColumnCollection.prototype.alias  = function(p_key) {
        for (var i = 0; this.count > i; i++) {
            if (this[i].alias === p_key) return this[i];
        }
        return undefined;
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'alias', {
        enumerable: false
    });

    /**
     * 값을 기반으로 컬럼을 생성하여 추가합니다.  
     * 반드시 하위 클래스에서 구현해야 합니다.  
     * 
     * @abstract
     */
    BaseColumnCollection.prototype.addValue = function() {
        throw new ExtendError(/EL05147/, null, []);
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'addValue', {
        enumerable: false
    });

    return BaseColumnCollection;

}(PropertyCollection));

export default BaseColumnCollection;
export { BaseColumnCollection };