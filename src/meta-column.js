/**** meta-column.js | _L.Meta.Entity.MetaColumn ****/
(function(_global) {
    'use strict';

    var isNode = typeof window !== 'undefined' ? false : true;
    //==============================================================
    // 1. import module
    if (isNode) {                                                               // strip:
        var _Message                    = require('./message-wrap').Message;    // strip:
        var _ExtendError                = require('logic-core').ExtendError;    // strip:
        var _Type                       = require('logic-core').Type;           // strip:
        var _Util                       = require('logic-core').Util;           // strip:
        var _EventEmitter               = require('logic-core').EventEmitter;   // strip:
        var _BaseColumn                 = require('./base-column').BaseColumn;  // strip:
    }                                                                           // strip:
    var $Message                    = _global._L.Message;       // modify:
    var $ExtendError                = _global._L.ExtendError;   // modify:
    var $Type                       = _global._L.Type;          // modify:
    var $Util                       = _global._L.Util;          // modify:
    var $EventEmitter               = _global._L.EventEmitter;  // modify:
    var $BaseColumn                 = _global._L.BaseColumn;    // modify:

    var Message                 = _Message              || $Message;            // strip:
    var ExtendError             = _ExtendError          || $ExtendError;        // strip:
    var Type                    = _Type                 || $Type;               // strip:
    var Util                    = _Util                 || $Util;               // strip:
    var EventEmitter            = _EventEmitter         || $EventEmitter;       // strip:
    var BaseColumn              = _BaseColumn           || $BaseColumn;         // strip:

    //==============================================================
    // 2. module dependency check
    if (typeof ExtendError === 'undefined') throw new Error(Message.get('ES011', ['ExtendError', 'extend-error']));
    if (typeof Type === 'undefined') throw new Error(Message.get('ES011', ['Type', 'type']));
    if (typeof Util === 'undefined') throw new Error(Message.get('ES011', ['Util', 'util']));
    if (typeof EventEmitter === 'undefined') throw new Error(Message.get('ES011', ['EventEmitter', 'event-emitter']));
    if (typeof BaseColumn === 'undefined') throw new Error(Message.get('ES011', ['BaseColumn', 'base-column']));

    //==============================================================
    // 3. module implementation
    //--------------------------------------------------------------
    // implementation   
    var MetaColumn  = (function (_super) {
        /**
         * 메타 컬럼
         * @constructs _L.Meta.Entity.MetaColumn
         * @extends _L.Meta.Entity.BaseColumn
         * @param {string} p_name 컬럼명
         * @param {BaseEntity} [p_entity] 소유 BaseEntity
         * @param {object} [p_property] 
         * @param {object} p_property.default 기본값
         * @param {boolean} p_property.required 필수 유무
         * @param {array<object.function>} p_property.constraints 제약조건
         * @param {string | number | boolean} p_property.value value 값
         * @param {function} p_property.getter 겟터
         * @param {function} p_property.setter 셋터
         * @param {string} p_property.alias 별칭
         * @param {function} p_property.onChanged value 변경 후 이벤트
         */
        function MetaColumn(p_name, p_entity, p_property) {
            _super.call(this, p_name, p_entity);

            var $event          = new EventEmitter(this);
            var required       = false;
            // var optional      = false;
            var constraints     = [];
            var getter          = null;
            var setter          = null;

            /** 
             * 이벤트 객체
             * @private
             * @member {EventEmitter} _L.Meta.Entity.MetaColumn#$event  
             */
            Object.defineProperty(this, '$event', 
            {
                get: function() { return $event; },
                configurable: false,
                enumerable: false,
            });        

            /**
             * 컬럼 value의 필수 여부
             * @member {boolean} _L.Meta.Entity.MetaColumn#required
             */
            Object.defineProperty(this, 'required', 
            {
                get: function() { return required },
                set: function(nVal) { 
                    if(typeof nVal !== 'boolean') throw new ExtendError(/EL05131/, null, [this.constructor.name, typeof nVal]);
                    required = nVal; 
                },
                configurable: false,
                enumerable: true
            });
            
            /**
             * 컬럼 제약 조건 
             * @member {array<object | function>} _L.Meta.Entity.MetaColumn#constraints
             * @example
             * var c = {
             *  regex: /aa/,
             *  msg: '매칭메세지',  // return이 true면 성공시 메세지, false 실패시 메세지
             *  condition: ture     // 매칭시 성공
             * };
             */
            Object.defineProperty(this, 'constraints', 
            {
                get: function() { return constraints; },
                set: function(nVal) { 
                    var list = [];
                    constraints = [];
                    if (Array.isArray(nVal))  list = nVal;
                    else list.push(nVal);
                    for(var i = 0; list.length > i; i++) {
                        if (!(typeof list[i] === 'function' || (typeof list[i].regex === 'object' && typeof list[i].msg === 'string'))) {
                            throw new ExtendError(/EL05133/, null, [this.constructor.name, i, typeof nVal.regex, typeof nVal.msg]);
                         }
                    }
                    constraints = list;
                },
                configurable: false,
                enumerable: true
            });
            
            /**
             * 컬럼 value  
             * get 우선순위 : 1. getter 있는 경우, 2. 내부값 $value  
             * set 우선순위 : 1. setter 있는 경우, 2. setter 리턴값이 없는 경우  
             * REVIEW: 정리표 보고 수정 필요!!
             * @member {string | number | boolean} _L.Meta.Entity.MetaColumn#value
             */
            Object.defineProperty(this, 'value', 
            {
                get: function() { 
                    var __val;
                    // 우선순위 : 1
                    if (typeof getter === 'function' ) {
                        __val = getter.call(this);
                        if (this.$value !== null && this.$value !== __val) {
                            this._onChanged(__val, this.$value);    // 검사 및 이벤트 발생
                            this.$value = __val;   // 내부에 저장
                        }
                    // 우선순위 : 2
                    } else __val = this.$value;
                    /**
                     * 분기 처리값 '__val' 없는경우 (null, undefined)
                     *  - this.$value 초기화 되지 않은 경우
                     *  - getter 리턴이 없는 경우
                     */
                    // if (typeof __val === 'undefined' || __val === null) __val = this.$value || this.default;  REVIEW: 제거 대상
                    if (typeof __val === 'undefined' || __val === null) __val = this.$value;  
                    return __val; 
                },
                set:  function(val) { 
                    var __val, _val;
                    var _oldVal = this.$value;
                    if (typeof setter === 'function' ) _val = setter.call(this, val);
                    // settter 의 리턴이 여부
                    __val = typeof _val !== 'undefined' ? _val : val;
                    __val = __val === null ? '' : __val;  // null 등록 오류 처리
                    if (this._valueTypes.length > 0) Type.matchType([this._valueTypes], __val);
                    this.$value = __val;
                    if (_oldVal !== __val && __val) this._onChanged(__val, _oldVal);    // 검사 및 이벤트 발생
                },
                configurable: true, // 재정의 허용
                enumerable: true
            });

            /**
             * 컬럼의 value 의 getter
             * @member {Function} _L.Meta.Entity.MetaColumn#getter
             */
            Object.defineProperty(this, 'getter', 
            {
                get: function() { return getter; },
                set: function(val) { 
                    if(typeof val !== 'function') throw new ExtendError(/EL05134/, null, [this.constructor.name, typeof val]);
                    getter = val;
                },
                configurable: false,
                enumerable: true
            });

            /**
             * 컬럼의 value 의 setter
             * @member {Function} _L.Meta.Entity.MetaColumn#setter
             */
            Object.defineProperty(this, 'setter', 
            {
                get: function() { return setter; },
                set: function(val) { 
                    if(typeof val !== 'function') throw new ExtendError(/EL05135/, null, [this.constructor.name, typeof val]);
                    setter = val;
                },
                configurable: false,
                enumerable: true
            });

            /**
             * 변경 이벤트 
             * @event _L.Meta.Entity.MetaColumn#onChanged 
             * @param {function}    p_callback
             * @param {any}         p_callback.p_nValue 신규 value 값
             * @param {any}         p_callback.p_oValue 기존 value 값
             * @param {MetaColumn}  p_callback.p_this this(컬럼객체)
             */
            Object.defineProperty(this, 'onChanged', 
            {
                set: function(fun) {
                    this.$event.on('onChanged', fun);
                },
                configurable: false,
                enumerable: false,
            });
            
            if (p_property) this._load(p_property);
        }
        Util.inherits(MetaColumn, _super);

        MetaColumn._NS = 'Meta.Entity';                                 // namespace
        MetaColumn._PARAMS = ['columnName', '_entity'];    // creator parameter    // 
        MetaColumn._VALUE_TYPE = [String, Number, Boolean];

        /**
         * onChanged 이벤트를 발생합니다.
         * @param {*} p_nValue 변경 값
         * @param {*} p_oValue 기존 값
         * @listens _L.Meta.Entity.MetaColumn#_onChanged
         */
        MetaColumn.prototype._onChanged = function(p_nValue, p_oValue) {
            p_oValue = p_oValue || this.$value;
            this.$event.emit('onChanged', p_nValue, p_oValue, this);
        };

        /**
         * 프로퍼티 객체로 속성 로드
         * @param {object} p_property 
         */
        MetaColumn.prototype._load = function(p_property) {
            if (typeof p_property === 'object' ) {
                for(var prop in p_property) {
                    // if (p_property.hasOwnProperty(prop) &&
                    if (Object.prototype.hasOwnProperty.call(p_property, prop) &&
                        ['_valueTypes', 'alias', 'default', 'caption', 'value', 
                        'required', 'constraints', 'getter', 'setter'].indexOf(prop) > -1) {
                        this[prop] = p_property[prop];
                    }
                }
            }
            if (['number', 'string', 'boolean'].indexOf(typeof p_property) > -1) {  
                this['value'] = p_property; 
            }
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
         * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
         * @returns {object}  
         */
        MetaColumn.prototype.getObject = function(p_vOpt, p_owned) {
            var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
            var vOpt = p_vOpt || 0;
            var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);

            if (!Type.deepEqual(this.$event.$storage, {})) {
                obj['$storage'] = this.$event.$storage;
            }
            if (this.required !== false) obj['required'] = this.required;
            // if (this.optional !== false) obj['optional'] = this.optional;
            if (this.constraints.length > 0) obj['constraints'] = Util.deepCopy(this.constraints);
            if (this.getter !== null) obj['getter'] = this.getter;
            if (this.setter !== null) obj['setter'] = this.setter;
            // if (this.value !== null) obj['value'] = this.value;    // 오버라이딩
            return obj;                        
        };

        /**
         * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.   
         * @param {object} p_oGuid guid 타입의 객체
         * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
         * 기본값은 p_oGuid 객체와 동일
         */
        MetaColumn.prototype.setObject  = function(p_oGuid, p_origin) {
            _super.prototype.setObject.call(this, p_oGuid, p_origin);
            
            var origin = p_origin ? p_origin : p_oGuid;
            var entity;

            if (p_oGuid['$storage']) {
                this.$event.$storage = p_oGuid['$storage'];
            }
            if (p_oGuid['required']) this.required = p_oGuid['required'];
            // if (p_oGuid['optional']) this.optional = p_oGuid['optional'];
            if (p_oGuid['constraints']) this.constraints = p_oGuid['constraints'];
            if (p_oGuid['getter']) this.getter = p_oGuid['getter'];
            if (p_oGuid['setter']) this.setter = p_oGuid['setter'];
            // if (p_oGuid['value']) this.value = p_oGuid['value'];
        };

        /**
         * 컬럼 복제
         * @param {BaseEntity} [p_entity] 지정한 엔티티로 복제
         * @returns {MetaColumn}
         */
        MetaColumn.prototype.clone = function(p_entity) {
            var clone;
            // var rObj = this.getObject();
            var entity = p_entity ? p_entity : this._entity;
            
            clone = new MetaColumn(this.columnName, entity);
            
            // BaseColumn
            if (this['default']) clone.default = this['default'];
            if (this['caption']) clone.caption = this['caption'];
            if (this['$alias']) clone.$alias = this['$alias'];
            if (this['$value']) clone.$value = this['$value'];
            
            // MetaColumn
            if (this['required']) clone.required = this['required'];
            if (this['constraints']) clone.constraints = this['constraints'];
            if (this['getter']) clone.getter = this['getter'];
            if (this['setter']) clone.setter = this['setter'];
            
            return clone;
        };

        /**
         * 제약조건을 추가  
         * 
         * REVIEW: 정규식으로 반대 조건을 모두 나열 할수 있으므로, 항상 실패조건을 하는게 맞을지? 검토
         * @param {Regexp} p_regex 정규표현식
         * @param {string} p_msg  regexp 입력시
         * @param {string} [p_code] regexp 입력시
         * @param {boolean} [p_condition] <기본값 false> 성공/실패 조건
         * @param {boolean} p_condition.false 실패조건이며<기본값>, 정규식이 매칭이 안되야 한다.
         * @param {boolean} p_condition.true 성공조건이며 정규식이 매칭이되어야 성공(통화)  
         */
        MetaColumn.prototype.addConstraint = function(p_regex, p_msg, p_code, p_condition) {
            p_condition = typeof p_condition === 'boolean' ? p_condition : true;

            var constraint = {};
            if (typeof p_regex === 'function') {
                this.constraints.push(p_regex);
                return;
            }
            if (!(p_regex instanceof RegExp)) throw new ExtendError(/EL05136/, null, []);
            if (!(typeof p_msg === 'string')) throw new ExtendError(/EL05137/, null, [typeof p_msg]);    

            constraint.regex = p_regex;
            constraint.msg = p_msg;
            constraint.code = p_code;
            constraint.condition = p_condition;
            
            this.constraints.push(constraint);
        };
        
        /**
         * 속성의 value에 유효성을 검사한다. (isNotnull, optional, constraints 기준)
         * TODO: number, boolean 형이 입력될경우, 기본 제약 조건 valueTypes 검사여부 검토?, 예외가 아니고 메세지로 표현?
         * @param {string | number | boolean} p_value 검사할 값
         * @param {object} result 메세지는 참조(객체)형 으로 전달
         * @param {number} p_option 1. required 참조 | 2: null검사 진행   |  3: null검사 무시
         * @returns {object | undefined} 리턴값이 없으면 검사 성공
         */
        MetaColumn.prototype.valid = function(p_value) {
            var result = {};
            var match;
            var value = null;
            
            result.value = p_value;
            result.msg = '';
            result.code = '';
            p_value = p_value || '';

            value = typeof p_value === 'number' ? String(p_value) : p_value;  // number 형 변환

            // 1. 기본값 얻기 문자열로 변경
            value = value.trim();

            // 2. 통과조건 검사
            if (this.required === false /* && this.optional === true */ && value.length === 0) return;
            if (this.required === false && this.constraints.length === 0 ) return;
            if (this.required === true && this.constraints.length === 0 && value.length > 0) return;
            
            // 3. 실패조건 검사
            if (this.required === true && this.constraints.length === 0 && value.length === 0) {
                result.msg   = Message.get('EL05138', [this.name]);
                result.code  = 0;
                return result;
            }

            // 4. 제약조건 검사
            for(var i = 0; this.constraints.length > i; i++) {
                if (typeof this.constraints[i] === 'function') {
                    // return this.constraints[i].call(this, this, value);     // 함수형 제약조건 REVIEW: 제거대상 

                    // 함수는 false 또는 object 타입의 경우 실패로 처리
                    var funReturn = this.constraints[i].call(this, value, this);     // 함수형 제약조건
                    if (funReturn === true || typeof funReturn === 'undefined') continue;
                    
                    if (typeof funReturn === 'object' && typeof funReturn.msg === 'string') {
                        result.msg   = funReturn.msg;
                        result.code  = funReturn.code;
                    } else {
                        result.msg = Message.get('EL05139', [this.name]);
                    }
                    return result;

                } else {
                    match = value.match(this.constraints[i].regex);
                    if ((this.constraints[i].condition === false && match !== null) ||    // 실패 조건
                        (this.constraints[i].condition === true && match === null)) {     // 성공 조건
                        result.msg   = Message.get('ES056', [this.name, this.constraints[i].msg]);
                        result.code  = this.constraints[i].code;
                        return result;
                    }
                }
            }            
            return;
        };

        return MetaColumn;
    
    }(BaseColumn));

    //==============================================================
    // 4. module export
    if (isNode) exports.MetaColumn  = MetaColumn;        // strip:

    // create namespace
    _global._L.Meta                 = _global._L.Meta || {};
    _global._L.Meta.Entity          = _global._L.Meta.Entity || {};

    _global._L.MetaColumn = MetaColumn;
    _global._L.Meta.Entity.MetaColumn = MetaColumn;

}(typeof window !== 'undefined' ? window : global));