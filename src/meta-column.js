/**** meta-column.js | MetaColumn ****/
//==============================================================
import { ExtendError }          from 'logic-core';
import { Type }                 from 'logic-core';
import { Util }                 from 'logic-core';
import { EventEmitter }         from 'logic-core';
import { BaseColumn }           from './base-column.js';
import { Message }              from './message-wrap.js';

var MetaColumn  = (function (_super) {
    /**
     * 메타 컬럼
     * 
     * @constructs MetaColumn
     * @extends BaseColumn
     * @param {string} p_name 컬럼명
     * @param {BaseEntity} [p_entity] 소유 BaseEntity
     * @param {object} [p_property] 초기 속성 설정 객체
     * @param {string | number | boolean} [p_property.value] 초기값
     * @param {string} [p_property.alias] 별칭
     * @param {string | number | boolean} [p_property.default] 기본값
     * @param {boolean} [p_property.required] 필수 여부
     * @param {array<object | function>} [p_property.constraints] 제약조건
     * @param {function} [p_property.getter] getter 함수
     * @param {function} [p_property.setter] setter 함수
     * @param {function} [p_property.onChanged] 변경 이벤트 바인딩
      */
    function MetaColumn(p_name, p_entity, p_property) {
        _super.call(this, p_name, p_entity);

        var $event          = new EventEmitter(this);
        var required        = false;
        // var optional      = false;
        var constraints     = [];
        var getter          = null;
        var setter          = null;
        var kind            = [];
        var readOnly        = false;
        var visible         = true;
        var description     = '';
        var order           = 0;
        var displayFormat   = null;
        var codeRule        = null;   // codeRule 객체

        /** 
         * 이벤트 객체
         * 
         * @private
         * @member {EventEmitter} MetaColumn#$event  
         */
        Object.defineProperty(this, '$event', {
            get: function() { return $event; },
            configurable: false,
            enumerable: false,
        });

        /**
         * 컬럼 value의 필수 여부
         * @member {boolean} MetaColumn#required
         */
        Object.defineProperty(this, 'required', {
            get: function() { return required; },
            set: function(nVal) { 
                if(typeof nVal !== 'boolean') throw new ExtendError(/EL05131/, null, [this.constructor.name, typeof nVal]);
                required = nVal; 
            },
            configurable: false,
            enumerable: true
        });
        
        /**
         * 컬럼 제약 조건 
         * 
         * @member {array<object | function>} MetaColumn#constraints
         * 
         * @example
         * var c = {
         *  regex: /aa/,
         *  msg: '매칭메세지',  // return이 true면 성공시 메세지, false 실패시 메세지
         *  match: ture     // 매칭시 성공
         * };
         */
        Object.defineProperty(this, 'constraints', {
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
         * 
         * @member {string | number | boolean} MetaColumn#value
         */
        Object.defineProperty(this, 'value', {
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
                // if (typeof __val === 'undefined' || __val === null) __val = this.$value;  
                if (typeof __val === 'undefined' || __val === null) __val = this.default;

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
         * 
         * @member {Function} MetaColumn#getter
         */
        Object.defineProperty(this, 'getter', {
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
         * 
         * @member {Function} MetaColumn#setter
         */
        Object.defineProperty(this, 'setter', {
            get: function() { return setter; },
            set: function(val) { 
                if(typeof val !== 'function') throw new ExtendError(/EL05135/, null, [this.constructor.name, typeof val]);
                setter = val;
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 컬럼의 종류
         * 
         * @member {array<string>} MetaColumn#kind
         */
        Object.defineProperty(this, 'kind', {
            get: function() { return kind; },
            set: function(nVal) { 
                var list = [];
                if (Array.isArray(nVal))  list = nVal;
                else list.push(nVal);
                for(var i = 0; list.length > i; i++) {
                    if (!( typeof list[i] === 'string')) {
                        throw new ExtendError(/EL05132/, null, [this.constructor.name, i, typeof list[i]]);
                    }
                }
                kind = list;
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 읽기 전용 여부
         * @member {boolean} MetaColumn#readOnly
         */
        Object.defineProperty(this, 'readOnly', {
            get: function() { return readOnly; },
            set: function(nVal) { 
                if(typeof nVal !== 'boolean') throw new ExtendError(/EL0513B/, null, [this.constructor.name, typeof nVal]);
                readOnly = nVal; 
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 화면 표시 여부
         * @member {boolean} MetaColumn#visible
         */
        Object.defineProperty(this, 'visible', {
            get: function() { return visible; },
            set: function(nVal) { 
                if(typeof nVal !== 'boolean') throw new ExtendError(/EL0513C/, null, [this.constructor.name, typeof nVal]);
                visible = nVal; 
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 컬럼 설명
         * @member {string} MetaColumn#description
         */
        Object.defineProperty(this, 'description', {
            get: function() { return description; },
            set: function(nVal) { 
                if(typeof nVal !== 'string') throw new ExtendError(/EL0513D/, null, [this.constructor.name, typeof nVal]);
                description = nVal; 
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 화면 표시 순서
         * @member {number} MetaColumn#order
         */
        Object.defineProperty(this, 'order', {
            get: function() { return order; },
            set: function(nVal) { 
                if(typeof nVal !== 'number') throw new ExtendError(/EL0513E/, null, [this.constructor.name, typeof nVal]);
                order = nVal; 
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 화면 표시 형식 함수
         * @member {function} MetaColumn#displayFormat
         */
        Object.defineProperty(this, 'displayFormat', {
            get: function() { return displayFormat; },
            set: function(nVal) { 
                if(typeof nVal !== 'function') throw new ExtendError(/EL0513F/, null, [this.constructor.name, typeof nVal]);
                displayFormat = nVal; 
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 변경 이벤트 
         * 
         * @event MetaColumn#onChanged 
         * @param {function}    p_callback
         * @param {any}         p_callback.p_nValue 신규 value 값
         * @param {any}         p_callback.p_oValue 기존 value 값
         * @param {MetaColumn}  p_callback.p_this this(컬럼객체)
         */
        Object.defineProperty(this, 'onChanged', {
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
     * 
     * @param {*} p_nValue 변경 값
     * @param {*} p_oValue 기존 값
     * @protected
     * @listens MetaColumn#_onChanged
     */
    MetaColumn.prototype._onChanged = function(p_nValue, p_oValue) {
        p_oValue = p_oValue || this.$value;
        this.$event.emit('onChanged', p_nValue, p_oValue, this);
    };
    Object.defineProperty(MetaColumn.prototype, '_onChanged', {
        enumerable: false
    });
    
    /**
     * 프로퍼티 객체로 속성 로드
     * 
     * @protected
     * @param {object} p_property 
     */
    MetaColumn.prototype._load = function(p_property) {
        if (typeof p_property === 'object' ) {
            for(var prop in p_property) {
                // if (p_property.hasOwnProperty(prop) &&
                if (Object.prototype.hasOwnProperty.call(p_property, prop) &&
                ['_valueTypes', 'alias', 'default', 'label', 'value', 
                    'required', 'constraints', 'getter', 'setter', 'kind',
                    'readOnly', 'visible', 'description', 'order'
                ].indexOf(prop) > -1) {
                    this[prop] = p_property[prop];
                }
            }
        }
        if (['number', 'string', 'boolean'].indexOf(typeof p_property) > -1) {  
            this['value'] = p_property; 
        }
    };
    Object.defineProperty(MetaColumn.prototype, '_load', {
        enumerable: false
    });

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
    MetaColumn.prototype.getObject = function(p_mode, p_context) {
        var obj = _super.prototype.getObject.call(this, p_mode, p_context);
        // var vOpt = p_mode || 0;
        // var owned = p_context ? [].concat(p_context, obj) : [].concat(obj);

        if (!Type.deepEqual(this.$event.$storage, {})) {
            obj['$storage'] = this.$event.$storage;
        }
        if (this.required !== false) obj['required'] = this.required;
        // if (this.optional !== false) obj['optional'] = this.optional;
        if (this.constraints.length > 0) obj['constraints'] = Util.deepCopy(this.constraints);
        if (this.getter !== null) obj['getter'] = this.getter;
        if (this.setter !== null) obj['setter'] = this.setter;
        if (this.kind.length > 0) obj['kind'] = Util.deepCopy(this.kind);
        if (this.readOnly !== false) obj['readOnly'] = this.readOnly;
        if (this.visible !== true) obj['visible'] = this.visible;
        if (this.description !== '') obj['description'] = this.description;
        if (this.order !== 0) obj['order'] = this.order;
        // if (this.value !== null) obj['value'] = this.value;    // 오버라이딩
        return obj;                        
    };
    Object.defineProperty(MetaColumn.prototype, 'getObject', {
        enumerable: false
    });

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.  
     * 
     * @param {object} p_guidObj guid 타입의 객체
     * @param {object} [p_guidRootObj] 현재 객체를 설정하는 원본 guid 객체  
     * 기본값은 p_guidObj 객체와 동일
     */
    MetaColumn.prototype.setObject  = function(p_guidObj, p_guidRootObj) {
        _super.prototype.setObject.call(this, p_guidObj, p_guidRootObj);
        
        // var origin = p_guidRootObj ? p_guidRootObj : p_guidObj;
        // var entity;

        if (p_guidObj['$storage']) {
            this.$event.$storage = p_guidObj['$storage'];
        }
        if (p_guidObj['required']) this.required = p_guidObj['required'];
        // if (p_guidObj['optional']) this.optional = p_guidObj['optional'];
        if (p_guidObj['constraints']) this.constraints = p_guidObj['constraints'];
        if (p_guidObj['getter']) this.getter = p_guidObj['getter'];
        if (p_guidObj['setter']) this.setter = p_guidObj['setter'];
        if (p_guidObj['kind']) this.kind = p_guidObj['kind'];
        if (p_guidObj['readOnly']) this.readOnly = p_guidObj['readOnly'];
        if (p_guidObj['visible'] === false) this.visible = p_guidObj['visible'];
        if (p_guidObj['description']) this.description = p_guidObj['description'];
        if (p_guidObj['order']) this.order = p_guidObj['order'];
        // value 는 오버라이딩 되지 않도록 제거
        // if (p_guidObj['value']) this.value = p_guidObj['value'];
    };
    Object.defineProperty(MetaColumn.prototype, 'setObject', {
        enumerable: false
    });

    /**
     * 컬럼 복제
     * 
     * @param {BaseEntity} [p_entity] 지정한 엔티티로 복제
     * @returns {MetaColumn}
     */
    MetaColumn.prototype.clone = function(p_entity) {
        var clone;
        // var rObj = this.getObject();
        var entity = p_entity ? p_entity : this._entity;
        
        clone = new MetaColumn(this.columnName, entity);
        
        // BaseColumn
        if (this['default'] !== '') clone.default = this['default'];
        if (this['label'] !== '') clone.label = this['label'];
        if (this['$alias'] !== null) clone.$alias = this['$alias'];
        if (this['$value'] !== null) clone.$value = this['$value'];
        
        // MetaColumn
        if (this['required']) clone.required = this['required'];
        // REVIEW: 배열 깊은 복제 해야 하는지 확인 필요
        if (this['constraints']) clone.constraints = this['constraints'];
        // REVIEW: 함수 깊은 복사 확인 필요
        if (this['getter']) clone.getter = this['getter'];
        if (this['setter']) clone.setter = this['setter'];
        if (this['kind']) clone.kind = this['kind'];
        if (this['readOnly']) clone.readOnly = this['readOnly'];
        if (this['visible'] === false) clone.visible = this['visible'];
        if (this['description']) clone.description = this['description'];
        if (this['order']) clone.order = this['order'];
        
        return clone;
    };
    Object.defineProperty(MetaColumn.prototype, 'clone', {
        enumerable: false
    });

    /**
     * 제약조건을 추가  
     * REVIEW: 정규식으로 반대 조건을 모두 나열 할수 있으므로, 항상 실패조건을 하는게 맞을지? 검토  
     * 
     * @param {Regexp | Function} p_regex 정규표현식
     * @param {string} [p_msg]  regexp 입력시
     * @param {string} [p_code] regexp 입력시
     * @param {boolean} [p_match] <기본값 false> 성공/실패 조건
     * @param {boolean} p_match.false 실패조건이며<기본값>, 정규식이 매칭이 안되야 한다.
     * @param {boolean} p_match.true 성공조건이며 정규식이 매칭이되어야 성공(통화)  
     */
    MetaColumn.prototype.addConstraint = function(p_regex, p_msg, p_code, p_match) {
        p_match = typeof p_match === 'boolean' ? p_match : true;

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
        constraint.match = p_match;
        
        this.constraints.push(constraint);
    };
    Object.defineProperty(MetaColumn.prototype, 'addConstraint', {
        enumerable: false
    });
    
    /**
     * 속성의 value에 유효성을 검사한다. (isNotnull, optional, constraints 기준)  
     * TODO: number, boolean 형이 입력될경우, 기본 제약 조건 valueTypes 검사여부 검토?, 예외가 아니고 메세지로 표현?  
     * 
     * @param {string | number | boolean} p_value 검사할 값
     * @returns {object | undefined} 리턴값이 없으면 검사 성공
     */
    MetaColumn.prototype.valid = function(p_value) {
        var result = {};
        var value = null;
        
        result.value = p_value;
        result.msg = '';
        result.code = '';
        p_value = p_value || '';

        value = typeof p_value === 'number' ? String(p_value) : p_value;  // number 형 변환

        // 1. 기본값 얻기 문자열로 변경
        value = value.trim();

        // 2. 통과조건 검사
        if (this.required === false /* && this.optional === true */ && value.length === 0) return undefined;
        if (this.required === false && this.constraints.length === 0 ) return undefined;
        if (this.required === true && this.constraints.length === 0 && value.length > 0) return undefined;
        
        // 3. 실패조건 검사
        if (this.required === true && this.constraints.length === 0 && value.length === 0) {
            result.msg   = Message.get('EL05138', [this.columnName]);
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
                    result.msg = Message.get('EL05139', [this.columnName]);
                }
                return result;

            } else {
                var matchResult = value.match(this.constraints[i].regex);
                var match = typeof this.constraints[i].match === 'boolean' ? this.constraints[i].match : true;

                if ((match === false && matchResult !== null) ||    // 실패 조건
                    (match === true && matchResult === null)) {     // 성공 조건
                    result.msg   = Message.get('EL0513A', [this.columnName, this.constraints[i].msg]);
                    result.code  = this.constraints[i].code;
                    return result;
                }
            }
        }            
        return undefined;
    };
    Object.defineProperty(MetaColumn.prototype, 'valid', {
        enumerable: false
    });

    MetaColumn.prototype.codeText = function (p_value) {
        var text = p_value;
        if (this.codeRule && typeof this.codeRule.codeText === 'function') {
            text = this.codeRule.codeText(p_value);
        }
        return text;
    };
    Object.defineProperty(MetaColumn.prototype, 'codeText', {
        enumerable: false
    });

    MetaColumn.prototype.toDisplay = function (value, opts) {
    var v = value;
    // 1) normalize
    if (v == null) v = '';
    // 2) code 매핑
    if (this.codeRule) v = this.codeText(v);
    // 3) 포맷 적용
    if (typeof this.displayFormat === 'function') v = this.displayFormat.call(this, v, this, opts);
    return String(v);
    };
    Object.defineProperty(MetaColumn.prototype, 'toDisplay', {
        enumerable: false
    });

    return MetaColumn;

}(BaseColumn));

export default MetaColumn;
export { MetaColumn };