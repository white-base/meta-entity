/**** meta-row.js | MetaRow ****/
//==============================================================
import { ExtendError } from 'logic-core';
import { Type } from 'logic-core';
import { Util } from 'logic-core';
import { EventEmitter } from 'logic-core';
import { MetaObject } from 'logic-core';
import { IList } from 'logic-core';
import { MetaRegistry } from 'logic-core';

var MetaRow  = (function (_super) {
    /**
     * 메타 로우
     * @constructs _L.Meta.Entity.MetaRow
     * @extends _L.Meta.MetaObject
     * @param {BaseEntity} p_entity 소유하는 엔티티
     */
    function MetaRow(p_entity) {
        _super.call(this);
        
        // private
        var $event  = new EventEmitter(this);
        var $elements = [];
        var $keys = [];

        // protected
        // var _this   = this;
        var _entity  = null;

        /**
         * 내부 변수 접근
         * @member {Array<string>} _L.Meta.Entity.MetaRow#$elements
         * @readonly
         * @private
         */
        Object.defineProperty(this, '$elements', {
            get: function() { return $elements; },
            set: function(nVal) { $elements = nVal; },
            configurable: false,
            enumerable: false,
        });


        /** 
         * 이벤트 객체
         * @private 
         * @member {EventEmitter} _L.Meta.Entity.MetaRow#$event  
         */
        Object.defineProperty(this, '$event', {
            get: function() { return $event; },
            configurable: false,
            enumerable: false,
        });

        // /** 
        //  * 로우 요소값 
        //  * @readonly
        //  * @member {Array<any>} _L.Meta.Entity.MetaRow#$elements  
        //  */
        // Object.defineProperty(this, '$elements', 
        // {
        //     get: function() {
        //         var arr = [];
        //         for (var i = 0; i < $elements.length; i++) arr.push($elements[i]);
        //         return arr;
        //     },
        //     configurable: false,
        //     enumerable: false,
        // });

        /** 
         * 요소 키
         * @readonly
         * @member {Array<string>} _L.Meta.Entity.MetaRow#$keys  
         */
        Object.defineProperty(this, '$keys', {
            get: function() {
                // var arr = [];
                // for (var i = 0; i < $keys.length; i++) arr.push($keys[i]);
                // return arr;
                return $keys;
            },
            configurable: false,
            enumerable: false,
        });

        /**
         * 로우의 소유 엔티티
         * @readonly
         * @member {BaseEntity} _L.Meta.Entity.MetaRow#_entity
         */
        Object.defineProperty(this, '_entity', {
            get: function() { return _entity; },
            configurable: false,
            enumerable: false
        });

        /**
         * 컬렉션 목록 
         * @readonly
         * @member {Array<any>}  _L.Meta.Entity.MetaRow#_list  
         */
        Object.defineProperty(this, '_list', {
            get: function() {
                var arr = [];
                for (var i = 0; i < $elements.length; i++) arr.push($elements[i]);
                return arr;
            },
            configurable: false,
            enumerable: false,
        });            
        
        /**
         * 컬랙션 갯수 
         * @readonly
         * @member {Number} _L.Meta.Entity.MetaRow#count 
         */
        Object.defineProperty(this, 'count', {
            get: function() { return $elements.length; },
            configurable: false,
            enumerable: false
        });

        /**
         * 변경전 이벤트 
         * @event _L.Meta.Entity.MetaRow#onChanged 
         * @param {function}    p_callback
         * @param {number}      p_callback.p_idx  index
         * @param {any}         p_callback.p_nValue 신규 값
         * @param {any}         p_callback.p_oValue 기존 값
         * @param {this}        p_callback.p_this 로우 객체
         */
        Object.defineProperty(this, 'onChanging', {
            set: function(fun) { this.$event.on('onChanging', fun); },
            configurable: false,
            enumerable: false,
        });
        
        /**
         * 변경후 이벤트 
         * @event _L.Meta.Entity.MetaRow#onChanged 
         * @param {function}    p_callback
         * @param {number}      p_callback.p_idx  index
         * @param {any}         p_callback.p_nValue 신규 값
         * @param {any}         p_callback.p_oValue 기존 값
         * @param {this}        p_callback.p_this 로우 객체
         */
        Object.defineProperty(this, 'onChanged', {
            set: function(fun) { this.$event.on('onChanged', fun); },
            configurable: false,
            enumerable: false,
        });

        // inner variable access
        // this.__GET$elements = function(call) {
        //     if (call instanceof MetaRow) return $elements;
        // }
        // this.__GET$_keys = function(call) {
        //     if (call instanceof MetaRow) return _keys;
        // };
        // this.__SET$elements = function(val, call) {
        //     if (call instanceof MetaRow) $elements = val;
        // }
        // this.__SET$_keys = function(val, call) {
        //     if (call instanceof MetaRow) _keys = val;
        // };
        // this.__SET$_entity = function(val, call) {
        //     if (call instanceof MetaRow) _entity = val;
        // };
        
        // BaseEntity 등록 & order(순서) 값 계산
        if (!(p_entity instanceof MetaObject && p_entity.instanceOf('BaseEntity'))) {
            throw new ExtendError(/EL05211/, null, []);
        }
        
        // 설정
        _entity = p_entity;

        for (var i = 0; i < _entity.columns.count; i++) {
            var idx = $elements.length;
            var alias = _entity.columns[i].alias;
            $elements.push(_entity.columns[i].default);  // 기본값 등록
            $keys.push(alias);
            Object.defineProperty(this, [i], this._getPropDescriptor(idx, false));
            Object.defineProperty(this, alias, this._getPropDescriptor(idx));
        }

        

        Util.implements(MetaRow, this);         // strip:
    }
    Util.inherits(MetaRow, _super);
    
    MetaRow._UNION = [IList];
    MetaRow._NS = 'Meta.Entity';
    MetaRow._PARAMS = ['_entity'];

    // local function
    function _isString(obj) {    // 공백아닌 문자 여부
        if (typeof obj === 'string' && obj.length > 0) return true;
        return false;
    }
    
    /**
     * TODO:
     * @param {*} p_idx 
     * @param {*} p_enum 
     * @returns 
     */
    MetaRow.prototype._getPropDescriptor = function(p_idx, p_enum) {
        if (typeof p_enum !== 'boolean') p_enum = true;
        return {
            get: function() { return this.$elements[p_idx]; },
            set: function(nVal) {
                var oldValue = this.$elements[p_idx];
                var column;
                // 엔티티 항상 존재함
                column = this._entity.columns[p_idx];
                if (column && column._valueTypes.length > 0) Type.matchType([column._valueTypes], nVal);
                // 트렌젹션 처리 => 함수로 추출 검토
                if (this._entity && !this._entity.rows.autoChanges) {
                    var etc = 'idx:'+ p_idx +', new:' + nVal + ', old:'+ oldValue;
                    var pos = this._entity.rows.indexOf(this);
                    if (pos > -1) {     // 컬력션에 포힘때 : 변경시점에 큐에 추가
                        this._entity.rows._transQueue.update(pos, this, this.clone(), etc);
                    }
                }
                // 이벤트 및 처리
                this._onChanging(p_idx, nVal, oldValue);
                this.$elements[p_idx] = nVal;
                this._onChanged(p_idx, nVal, oldValue);

            },
            configurable: true,
            enumerable: p_enum
        };
    };
    Object.defineProperty(MetaRow.prototype, '_getPropDescriptor', {
        enumerable: false
    });

    /**
     * 속성명 변경
     * @param {string} [p_entity] 대상의 엔티티 기준으로 생성
     * @returns {MetaRow}
     */
    MetaRow.prototype._changeKey  = function(p_oldKey, p_newKey) {
        var idx;

        // 타입 검사
        if (!_isString(p_oldKey)) throw new ExtendError(/EL05214/, null, ['oldKey']);
        if (!_isString(p_newKey)) throw new ExtendError(/EL05214/, null, ['newKey']);

        
        // 새로운 키 중복 검사
        if (this.$keys.indexOf(p_oldKey) < 0) throw new ExtendError(/EL05215/, null, [p_oldKey]);  // 기존에 키가 존재하지 않습니다. TODO:
        if (this.$keys.indexOf(p_newKey) > -1) throw new ExtendError(/EL05216/, null, [p_newKey]); // 교체할 키가 기존 키와 중복됩니다. TODO:

        // 기존 idx 조회
        idx = this.$keys.indexOf(p_oldKey);

        // 기존 제거 및 설정
        delete this[p_oldKey];
        Object.defineProperty(this, p_newKey, this._getPropDescriptor(idx));

        // $keys 값 교체
        this.$keys.splice(idx, 1, p_newKey); 
    };
    Object.defineProperty(MetaRow.prototype, '_changeKey', {
        enumerable: false
    });


    // function $getPropDescriptor(p_idx, p_enum) {
    //     if (typeof p_enum !== 'boolean') p_enum = true;
    //     return {
    //         get: function() { return this.$elements[p_idx]; },
    //         set: function(nVal) {
    //             var oldValue = this.$elements[p_idx];
    //             var column;
    //             // 엔티티 항상 존재함
    //             column = this._entity.columns[p_idx];
    //             if (column && column._valueTypes.length > 0) Type.matchType([column._valueTypes], nVal);
    //             // 트렌젹션 처리 => 함수로 추출 검토
    //             if (this._entity && !this._entity.rows.autoChanges) {
    //                 var etc = 'idx:'+ p_idx +', new:' + nVal + ', old:'+ oldValue;
    //                 var pos = this._entity.rows.indexOf(this);
    //                 if (pos > -1) {     // 컬력션에 포힘때 : 변경시점에 큐에 추가
    //                     this._entity.rows._transQueue.update(pos, this, this.clone(), etc);
    //                 }
    //             }
    //             // 이벤트 및 처리
    //             this._onChanging(p_idx, nVal, oldValue);
    //             this.$elements[p_idx] = nVal;
    //             this._onChanged(p_idx, nVal, oldValue);

    //         },
    //         configurable: false,
    //         enumerable: p_enum
    //     };
    // }
    
    /**
     * 로우 요소 변경전 이벤트
     * @param {*} p_idx 인덱스
     * @param {*} p_nValue 변경 값
     * @param {*} p_oValue 기존 값
     * @listens _L.Meta.Entity.MetaColumn#_onChanged
     */
    MetaRow.prototype._onChanging = function(p_idx, p_nValue, p_oValue) {
        this.$event.emit('onChanging', p_idx, p_nValue, p_oValue, this);
    };
    Object.defineProperty(MetaRow.prototype, '_onChanging', {
        enumerable: false
    });

    /**
     * 로우 요소 변경후 이벤트
     * @param {*} p_idx 인덱스
     * @param {*} p_nValue 변경 값
     * @param {*} p_oValue 기존 값
     * @listens _L.Meta.Entity.MetaColumn#_onChanged
     */
    MetaRow.prototype._onChanged = function(p_idx, p_nValue, p_oValue) {
        this.$event.emit('onChanged', p_idx, p_nValue, p_oValue, this);
    };
    Object.defineProperty(MetaRow.prototype, '_onChanged', {
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
    MetaRow.prototype.getObject = function(p_vOpt, p_owned) {
        var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
        var vOpt = p_vOpt || 0;
        var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);

        if (!Type.deepEqual(this.$event.$storage, {})) {
            obj['$storage'] = this.$event.$storage;
        }
        if (vOpt < 2 && vOpt > -1 && this._entity) {
            obj['_entity'] = MetaRegistry.createReferObject(this._entity);
        }
        obj['_elem'] = [];
        for (var i = 0; i < this._list.length; i++) {
            var elem = this._list[i];
            if (elem instanceof MetaObject) {
                if (MetaRegistry.hasGuidObject(elem, owned)) {
                    obj['_elem'].push(MetaRegistry.createReferObject(elem));
                } else obj['_elem'].push(elem.getObject(vOpt, owned));
            } else obj['_elem'].push(elem);
        }
        obj['_key'] = [];
        for (var k = 0; k < this.$keys.length; k++) {
            var key = this.$keys[k];
            obj['_key'].push(key);
        }
        return obj;                        
    };
    Object.defineProperty(MetaRow.prototype, 'getObject', {
        enumerable: false
    });

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.   
     * @param {object} p_oGuid guid 타입의 객체
     * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
     * 기본값은 p_oGuid 객체와 동일
     */
    MetaRow.prototype.setObject  = function(p_oGuid, p_origin) {
        _super.prototype.setObject.call(this, p_oGuid, p_origin);
        
        var origin = p_origin ? p_origin : p_oGuid;
        // var entity;
        
        if (p_oGuid['_elem'].length !== p_oGuid['_key'].length) throw new ExtendError(/EL05212/, null, [p_oGuid['_elem'].length, p_oGuid['_key'].length]);

        if (p_oGuid['$storage']) {
            this.$event.$storage = p_oGuid['$storage'];
        }
        for(var i = 0; i < p_oGuid['_elem'].length; i++) {
            var elem = p_oGuid['_elem'][i];
            if (MetaRegistry.isGuidObject(elem)) {
                var obj = MetaRegistry.createMetaObject(elem, origin);
                obj.setObject(elem, origin);
                this.$elements[i] = obj;
            } else if (elem['$ref']) {
                var meta = MetaRegistry.findSetObject(elem['$ref'], origin);
                if (!meta) throw new ExtendError(/EL05213/, null, [i, elem['$ref']]);
                this.$elements[i] = meta;   
            } else this.$elements[i] = elem;   
        }
    };
    Object.defineProperty(MetaRow.prototype, 'setObject', {
        enumerable: false
    });

    /**
     * 객체 복제
     * @param {BaseEntity} [p_entity] 대상의 엔티티 기준으로 생성
     * @returns {MetaRow}
     */
    MetaRow.prototype.clone  = function(p_entity) {
        var entity = p_entity || this._entity;
        var clone = new MetaRow(entity);
        var obj = this.getObject();

        if (obj.$storage) {
            clone.$event.$storage = obj.$storage;
        }
        clone.$elements = Util.deepCopy(obj._elem);
        return clone;
    };
    Object.defineProperty(MetaRow.prototype, 'clone', {
        enumerable: false
    });

    


    
    return MetaRow;

}(MetaObject));

export default MetaRow;
export { MetaRow };