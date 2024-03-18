/**** object-column.js | _L.Meta.Entity.ObjectColumn ****/

(function(_global) {
    'use strict';

    var isNode = typeof window !== 'undefined' ? false : true;

    //==============================================================
    // 1. namespace declaration
    _global._L                      = _global._L || {};
    _global._L.Meta                 = _global._L.Meta || {};
    _global._L.Meta.Entity          = _global._L.Meta.Entity || {};

    //==============================================================
    // 2. import module
    if (isNode) {     
        var _Message                    = require('logic-core').Message;
        var _ExtendError                = require('logic-core').ExtendError;
        var _Util                       = require('logic-core').Util;
        var _Observer                   = require('logic-core').Observer;
        var _MetaObject                 = require('logic-core').MetaObject;
        var _MetaElement                = require('logic-core').MetaElement;
        var _BaseColumn                 = require('./base-column').BaseColumn;
        var _PropertyCollection         = require('logic-core').PropertyCollection;
        var _MetaRegistry               = require('logic-core').MetaRegistry;
    } else {
        var $Message                    = _global._L.Message;
        var $ExtendError                = _global._L.ExtendError;
        var $Util                       = _global._L.Util;
        var $Observer                   = _global._L.Observer;
        var $MetaObject                 = _global._L.MetaObject;
        var $MetaElement                = _global._L.MetaElement;
        var $BaseColumn                 = _global._L.BaseColumn;
        var $PropertyCollection         = _global._L.PropertyCollection;
        var $MetaRegistry               = _global._L.MetaRegistry;
    }
    var Message                 = _Message              || $Message;
    var ExtendError             = _ExtendError          || $ExtendError;
    var Util                    = _Util                 || $Util;
    var Observer                = _Observer             || $Observer;
    var MetaRegistry            = _MetaRegistry         || $MetaRegistry;
    var MetaObject              = _MetaObject           || $MetaObject;
    var MetaElement             = _MetaElement          || $MetaElement;
    var BaseColumn              = _BaseColumn           || $BaseColumn;
    var PropertyCollection      = _PropertyCollection   || $PropertyCollection;

    //==============================================================
    // 3. module dependency check
    if (typeof ExtendError === 'undefined') throw new Error(Message.get('ES011', ['ExtendError', 'extend-error']));
    if (typeof Util === 'undefined') throw new Error(Message.get('ES011', ['Util', 'util']));
    if (typeof Observer === 'undefined') throw new Error(Message.get('ES011', ['Observer', 'observer']));
    if (typeof MetaRegistry === 'undefined') throw new Error(Message.get('ES011', ['MetaRegistry', 'meta-registry']));
    if (typeof MetaObject === 'undefined') throw new Error(Message.get('ES011', ['MetaObject', 'meta-object']));
    if (typeof MetaElement === 'undefined') throw new Error(Message.get('ES011', ['MetaElement', 'meta-element']));
    if (typeof BaseColumn === 'undefined') throw new Error(Message.get('ES011', ['BaseColumn', 'base-column']));
    if (typeof PropertyCollection === 'undefined') throw new Error(Message.get('ES011', ['PropertyCollection', 'collection-property']));

    //==============================================================
    // 4. module implementation
    //--------------------------------------------------------------
    // implementation   
    var ObjectColumn  = (function (_super) {
        /**
         * 객체 컬럼
         * @constructs _L.Meta.Entity.ObjectColumn
         * @extends _L.Meta.Entity.BaseColumn
         * @param {string} p_name 객체컬럼명
         * @param {BaseEntity?} p_entity 소유 BaseEntity
         * @param {object?} p_property 
         * @param {object?} p_property.default 기본값
         * @param {string?} p_property.caption 설명
         * @param {object?} p_property.value value 값
         * @param {string?} p_property.alias 별칭
         */
        function ObjectColumn(p_name, p_entity, p_property) {
            _super.call(this, p_name, p_entity);

            if (p_property) this._load(p_property);
        }
        Util.inherits(ObjectColumn, _super);

        ObjectColumn._NS = 'Meta.Entity';     // namespace
        ObjectColumn._PARAMS = ['columnName', '_entity', '_property'];    // creator parameter
        ObjectColumn._VALUE_TYPE = [{}];    // union type


        /**
         *  프로퍼티 객체로 속성 로드
         * @param {object} p_prop 
         */
        ObjectColumn.prototype._load = function(p_prop) {
            if (typeof p_prop === 'object' ) {
                for(var prop in p_prop) {
                    // if (p_property.hasOwnProperty(prop) &&
                    if (Object.prototype.hasOwnProperty.call(p_prop, prop) &&
                        ['default', 'caption', 'value', 'alias'].indexOf(prop) > -1) {
                        this[prop] = p_prop[prop];
                    }
                }
            } else throw new ExtendError(/EL05121/, null, ['p_prop', 'object']);
        };

        /**
         * 현재 객체의 guid 타입의 객체를 가져옵니다.  
         * - 순환참조는 $ref 값으로 대체된다.
         * @param {number} p_vOpt 가져오기 옵션
         * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
         * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
         * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
         * 객체 비교 : equal(a, b)  
         * a.getObject(2) == b.getObject(2)   
         * @param {(object | array<object>)?} p_owned 현재 객체를 소유하는 상위 객체들
         * @returns {object}  
         */
        ObjectColumn.prototype.getObject = function(p_vOpt, p_owned) {
            var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
            var vOpt = p_vOpt || 0;
            var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);
            var defValue = this.default;
            var value = this.value;

            if (defValue instanceof MetaObject) {
                if (MetaRegistry.hasGuidObject(defValue, owned)) {
                    obj['default'] = MetaRegistry.createReferObject(defValue);
                } else obj['default'] = defValue.getObject(vOpt, owned);
            }

            if (value instanceof MetaObject) {
                if (MetaRegistry.hasGuidObject(value, owned)) {
                    obj['value'] = MetaRegistry.createReferObject(value);
                } else obj['value'] = value.getObject(vOpt, owned);
            }
            return obj;                        
        };

        /**
         * 현재 객체를 guid 객체로 설정한다.
         * override
         * @param {object} p_oGuid 레벨 옵션
         * @param {object} p_origin 설정 원본 객체
         */
        ObjectColumn.prototype.setObject  = function(p_oGuid, p_origin) {
            _super.prototype.setObject.call(this, p_oGuid, p_origin);
            
            var origin = p_origin ? p_origin : p_oGuid;
            var elem;

            // 주의! defuault 설정후 value 설정 :getObject() 와 동일
            elem = p_oGuid['default'];
            if (typeof elem === 'object' && elem !== null) {
                if (MetaRegistry.isGuidObject(elem)) {
                    var obj = MetaRegistry.createMetaObject(elem, origin);
                    obj.setObject(elem, origin);
                    this['default'] = obj;
                
                } else if (elem['$ref']) {
                    var meta = MetaRegistry.findSetObject(elem['$ref'], origin);
                    if (!meta) throw new ExtendError(/EL05122/, null, [elem['$ref']]);
                    this['default'] = meta;
                }
            }

            elem = p_oGuid['value'];
            if (typeof elem === 'object' && elem !== null) {
                if (MetaRegistry.isGuidObject(elem)) {
                    var obj = MetaRegistry.createMetaObject(elem, origin);
                    obj.setObject(elem, origin);
                    this.value = obj;
                
                } else if (elem['$ref']) {
                    var meta = MetaRegistry.findSetObject(elem['$ref'], origin);
                    if (!meta) throw new ExtendError(/EL05123/, null, [elem['$ref']]);
                    this.value = meta;
                }
            }
        };

        /**
         * 객체 복제
         * override
         * @param {BaseEntity?} p_entity 지정한 엔티티로 복제
         * @returns {ObjectColumn}
         */
        ObjectColumn.prototype.clone = function(p_entity) {
            var clone;
            var rObj = this.getObject();
            var entity = p_entity ? p_entity : this._entity;

            clone = new ObjectColumn(this.columnName, entity);

            if (rObj['default']) clone.default = this['default'];
            if (rObj['caption']) clone.caption = rObj['caption'];
            if (rObj['alias']) clone.alias = rObj['alias'];
            if (rObj['value']) clone.value = this.value;

            return clone;
        };

        return ObjectColumn;
    
    }(BaseColumn));

    //==============================================================
    // 5. module export
    if (isNode) {     
        exports.ObjectColumn                                = ObjectColumn;

    } else {
        _global._L.ObjectColumn                              = ObjectColumn;
        _global._L.Meta.Entity.ObjectColumn                  = ObjectColumn;    // namespace
    }

}(typeof window !== 'undefined' ? window : global));