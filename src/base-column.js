/**** base-column.js | BaseColumn ****/
//==============================================================
import { ExtendError }      from 'logic-core';
import { Type }             from 'logic-core';
import { Util }             from 'logic-core';
import { MetaElement }      from 'logic-core';
import { MetaRegistry }     from 'logic-core';

var BaseColumn  = (function (_super) {
    /**
     * 컬럼 (최상위)
     * 
     * @abstract
     * @constructs BaseColumn
     * @extends MetaElement
     * @param {string} p_name 아이템명
     * @param {BaseEntity} [p_entity] 소유 BaseEntity
     * @param {object} [p_property] 프로퍼티 객체 (alias, default, label, _valueTypes)
     */
    function BaseColumn(p_name, p_entity, p_property) {
        _super.call(this, p_name);

        var $key            = p_name;
        var $value          = null;
        var $alias          = null;
        var _entity         = null;
        var _valueTypes     = this._type._VALUE_TYPE || [];
        var _default        = '';
        var label         = '';

        /**
         * 이 컬럼의 고유 키를 나타냅니다.
         * 
         * @member {string} BaseColumn#$key
         * @readonly
         * @private
         */
        Object.defineProperty(this, '$key', {
            get: function() { return $key; },
            set: function(nVal) { 
                if (_isString(nVal)) $key = nVal;
            },
            configurable: false,
            enumerable: false,
        });

        /**
         * 별칭 내부값
         * 
         * @member {string | number | boolean} BaseColumn#$value
         * @readonly
         * @private
         */
        Object.defineProperty(this, '$value', {
            get: function() { return $value; },
            set: function(nVal) { $value = nVal; },
            configurable: false,
            enumerable: false,
        });

        /**
         * 별칭 내부값
         * 
         * @member {string} BaseColumn#$alias
         * @readonly
         * @private
         */
        Object.defineProperty(this, '$alias', {
            get: function() { return $alias; },
            set: function(nVal) { 
                if (_isString(nVal)) $alias = nVal;
            },
            configurable: false,
            enumerable: false,
        });

        /**
         * 컬럼 소유 엔티티
         * 
         * @member {BaseEntity} BaseColumn#_entity
         * @protected
         */
        Object.defineProperty(this, '_entity', {
            get: function() { return _entity; },
            set: function(nVal) { 
                if (typeof nVal !== 'undefined' && !(nVal instanceof MetaElement && nVal.instanceOf('BaseEntity'))) {
                    throw new ExtendError(/EL05111/, null, [this.constructor.name]);
                }
                _entity = nVal;
            },
            configurable: false,
            enumerable: false
        });

        /**
         *  허용된 value의 타입 목록 (형식 검증 시 사용)
         * 
         * @member {any[]} BaseColumn#_valueTypes
         * @protected
         */
        Object.defineProperty(this, '_valueTypes', {
            get: function() { return _valueTypes; },
            set: function(nVal) { 
                var arr = [];
                if (!Array.isArray(nVal)) arr.push(nVal);
                else arr = nVal;
                _valueTypes = arr;  
            },
            configurable: false,
            enumerable: false
        });

        /**
         * 컬럼명, _name 과 동일
         * 
         * @member {string} BaseColumn#columnName
         */
        Object.defineProperty(this, 'columnName', {
            get: function() { return this._name; },
            set: function(nVal) { 
                if (nVal === this.columnName) return;
                if (typeof nVal !== 'string') throw new ExtendError(/EL05112/, null, [this.constructor.name, typeof nVal]); 
                if (_entity && _entity.columns.existColumnName(nVal)) throw new ExtendError(/EL05113/, null, [this.constructor.name, nVal]);
                if (_entity && _entity.columns.existAlias(nVal)) throw new ExtendError(/EL05114/, null, [this.constructor.name, nVal]);
                this._name = nVal;
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 아이템 별칭 (bind전송시, 데이터 수신후 설정시 활용함)  
         * 사용처 (기본값 = columnName )
         * - Bind-command-ajax._execBind() : 데이터 전송시  
         * - BaseBind.setValue(row) : 로우값 을 엔티티에 설정시  
         * - getValue() : row 에 활용함  
         * 
         * @member {string} BaseColumn#alias
         */
        Object.defineProperty(this, 'alias', {
            get: function() { return typeof $alias === 'string' ? $alias : this.columnName; },
            set: function(nVal) { 
                var entity = this._entity;
                var oldKey = this.$alias || this.columnName;

                if(typeof nVal !== 'string') throw new ExtendError(/EL05115/, null, [this.constructor.name, typeof nVal]); 
                if (entity && entity.columns.existAlias(nVal)) throw new ExtendError(/EL05116/, null, [this.constructor.name, nVal]);
                
                // 기존에 rows 에 기존 명칭이 존재하면 MetaRow 변경
                if (this._entity) {
                    for (var i = 0; i < this._entity.rows.count; i++) {
                        var row = this._entity.rows[i];
                        row._changeKey(oldKey, nVal);
                    }
                }
                $alias = nVal;
            },
            configurable: false,
            enumerable: true
        }); 

        /**
         * 컬럼 value 의 기본값 (내부속성)
         * 
         * @member {string | number | boolean} BaseColumn#default
         */
        Object.defineProperty(this, 'default', {
            get: function() { return _default; },
            set: function(nVal) { 
                if (this._valueTypes.length > 0) Type.matchType([this._valueTypes], nVal);
                _default = nVal;
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 컬럼 설명
         * 
         * @member {string} BaseColumn#label
         */
        Object.defineProperty(this, 'label', {
            get: function() { return label; },
            set: function(nVal) { 
                if(typeof nVal !== 'string') throw new ExtendError(/EL05117/, null, [this.constructor.name, typeof nVal]); 
                label = nVal; 
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 컬럼 값
         * 
         * @member {any} BaseColumn#value
         */
        Object.defineProperty(this, 'value', {
            get: function() { 
                return $value === null ? this.default : $value; 
            },
            set: function(nVal) {
                if (this._valueTypes.length > 0) Type.matchType([this._valueTypes], nVal);
                $value = nVal;
            },
            configurable: true,
            enumerable: true
        });

        /**
         * 컬럼 값
         * 
         * @member {any} BaseColumn#val
         */
        Object.defineProperty(this, 'val', {
            get: function() { return this.value; },
            set: function(nVal) { this.value = nVal;},
            configurable: true,
            enumerable: false
        });

        if (p_entity) _entity = p_entity;
        if (p_property) _load(this, p_property);
    }
    Util.inherits(BaseColumn, _super);

    BaseColumn._NS = 'Meta.Entity';     // namespace
    BaseColumn._PARAMS = ['columnName', '_entity'];    // creator parameter
    BaseColumn._KIND = 'abstract';
    BaseColumn._VALUE_TYPE = [];

    function _load(col, prop) {
        if (typeof prop === 'object') { 
            if (prop['_valueTypes']) col._valueTypes = prop['_valueTypes'];
            if (prop['columnName']) col.columnName = prop['columnName'];
            if (prop['alias']) col.alias = prop['alias'];
            if (prop['default']) col.default = prop['default'];
            if (prop['label']) col.label = prop['label'];
            if (prop['value']) col.value = prop['value'];
        }
        // if (['number', 'string', 'boolean'].indexOf(typeof prop) > -1) {  
        //     col['value'] = prop; 
        // }
    }

    // local function
    // function _isObject(obj) {    // 객체 여부
    //     if (typeof obj === 'object' && obj !== null) return true;
    //     return false;
    // }
    function _isString(obj) {    // 공백아닌 문자 여부
        if (typeof obj === 'string' && obj.length > 0) return true;
        return false;
    }

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.  
     * 
     * @param {number} p_mode 가져오기 옵션  
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)  
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_context] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    BaseColumn.prototype.getObject = function(p_mode, p_context) {
        var obj = _super.prototype.getObject.call(this, p_mode, p_context);
        var vOpt = p_mode || 0;
        // var owned = p_context ? [].concat(p_context, obj) : [].concat(obj);

        if (vOpt < 2 && vOpt > -1 && this._entity) {
            obj['_entity'] = MetaRegistry.createReferObject(this._entity);
        }
        obj['columnName'] = this.columnName;
        if (this.default !== '') obj['default'] = this.default;
        if (this.label !== '') obj['label'] = this.label;            
        if (this.$alias !== null) obj['$alias'] = this.$alias;
        // if (this.__GET$alias(this) !== null) obj['alias'] = this.__GET$alias(this);
        if (this.$value !== null) obj['$value'] = this.$value;
        return obj;                        
    };
    Object.defineProperty(BaseColumn.prototype, 'getObject', {
        enumerable: false
    });

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.  
     * 
     * @param {object} p_guidObj guid 타입의 객체
     * @param {object} [p_guidRootObj] 현재 객체를 설정하는 원본 guid 객체
     * 기본값은 p_guidObj 객체와 동일
     */
    BaseColumn.prototype.setObject  = function(p_guidObj, p_guidRootObj) {
        _super.prototype.setObject.call(this, p_guidObj, p_guidRootObj);
        
        var origin = p_guidRootObj ? p_guidRootObj : p_guidObj;
        var entity;

        if (p_guidObj['_entity']) {
            entity = MetaRegistry.findSetObject(p_guidObj['_entity']['$ref'], origin);
            if (!entity) throw new ExtendError(/EL05118/, null, [p_guidObj['name'], p_guidObj['_entity']['$ref']]);
            this._entity = entity;
        } 
        this.columnName = p_guidObj['columnName'];
        if (p_guidObj['default']) this.default = p_guidObj['default'];
        if (p_guidObj['label']) this.label = p_guidObj['label'];
        if (p_guidObj['$alias']) this.$alias = p_guidObj['$alias'];
        if (p_guidObj['$value']) this.$value = p_guidObj['$value'];
    };
    Object.defineProperty(BaseColumn.prototype, 'setObject', {
        enumerable: false
    });

    /** 
     * 컬럼 복제
     * 
     * @abstract 
     */
    BaseColumn.prototype.clone = function() {
        throw new ExtendError(/EL05119/, null, []);
    };
    Object.defineProperty(BaseColumn.prototype, 'clone', {
        enumerable: false
    });

    return BaseColumn;

}(MetaElement));

export default BaseColumn;
export { BaseColumn };