/**** meta-row.js | _L.Meta.Entity.MetaRow, _L.Meta.Entity.MetaRowCollection ****/

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
        var _Type                       = require('logic-core').Type;
        var _Util                       = require('logic-core').Util;
        var _Observer                   = require('logic-core').Observer;
        var _IList                      = require('logic-core').IList;
        var _MetaObject                 = require('logic-core').MetaObject;
        var _TransactionCollection      = require('./collection-transaction').TransactionCollection;
        var _MetaRegistry               = require('logic-core').MetaRegistry;
    } else {    // COVER:
        var $Message                    = _global._L.Message;
        var $ExtendError                = _global._L.ExtendError;
        var $Type                       = _global._L.Type;
        var $Util                       = _global._L.Util;
        var $Observer                   = _global._L.Observer;
        var $MetaObject                 = _global._L.MetaObject;
        var $IList                      = _global._L.IList;
        var $TransactionCollection      = _global._L.TransactionCollection;
        var $MetaRegistry               = _global._L.MetaRegistry;
    }
    var Message                 = _Message              || $Message;
    var ExtendError             = _ExtendError          || $ExtendError;
    var Type                    = _Type                 || $Type;
    var Util                    = _Util                 || $Util;
    var Observer                = _Observer             || $Observer;
    var IList                   = _IList                || $IList;
    var MetaObject              = _MetaObject           || $MetaObject;
    var TransactionCollection   = _TransactionCollection|| $TransactionCollection;
    var MetaRegistry            = _MetaRegistry         || $MetaRegistry;

    //==============================================================
    // 3. module dependency check
    if (typeof ExtendError === 'undefined') throw new Error(Message.get('ES011', ['ExtendError', 'extend-error']));
    if (typeof Type === 'undefined') throw new Error(Message.get('ES011', ['Type', 'type']));
    if (typeof Util === 'undefined') throw new Error(Message.get('ES011', ['Util', 'util']));
    if (typeof Observer === 'undefined') throw new Error(Message.get('ES011', ['Observer', 'observer']));
    if (typeof IList === 'undefined') throw new Error(Message.get('ES011', ['IList', 'i-list']));
    if (typeof MetaRegistry === 'undefined') throw new Error(Message.get('ES011', ['MetaRegistry', 'meta-registry']));
    if (typeof MetaObject === 'undefined') throw new Error(Message.get('ES011', ['MetaObject', 'meta-object']));
    if (typeof TransactionCollection === 'undefined') throw new Error(Message.get('ES011', ['TransactionCollection', 'collection-transaction']));

    //==============================================================
    // 4. module implementation   
    var MetaRow  = (function (_super) {
        /**
         * 메타 로우
         * @constructs _L.Meta.Entity.MetaRow
         * @extends _L.Meta.MetaObject
         * @param {BaseEntity} p_entity 소유하는 엔티티
         */
        function MetaRow(p_entity) {
            _super.call(this);
            
            var __event  = new Observer(this);
            var _entity  = null;
            var _elements = [];
            var _keys = [];
            var _this   = this;

            /**
             * 내부 변수 접근
             * @member {string} _L.Meta.Entity.MetaRow#$_elements
             * @readonly
             * @private
             */
            Object.defineProperty(this, '$_elements',
            {
                get: function() { return _elements; },
                set: function(nVal) { _elements = nVal; },
                configurable: false,
                enumerable: false,
            });


            /** 
             * 이벤트 객체
             * @private 
             * @member {Object} _L.Meta.Entity.MetaRow#__event  
             */
            Object.defineProperty(this, '__event', 
            {
                get: function() { return __event; },
                configurable: false,
                enumerable: false,
            });

            
            /**
             * 로우의 소유 엔티티
             * @readonly
             * @member {BaseEntity} _L.Meta.Entity.MetaRow#_entity
             */
            Object.defineProperty(this, '_entity', 
            {
                get: function() { return _entity; },
                configurable: false,
                enumerable: false
            });

            /** 
             * 로우 요소값 
             * @readonly
             * @member {Array<any>} _L.Meta.Entity.MetaRow#_elements  
             */
            Object.defineProperty(this, '_elements', 
            {
                get: function() {
                    var arr = [];
                    for (var i = 0; i < _elements.length; i++) arr.push(_elements[i]);
                    return arr;
                },
                configurable: false,
                enumerable: false,
            });

            /** 
             * 요소 키
             * @readonly
             * @member {Array<string>} _L.Meta.Entity.MetaRow#_keys  
             */
            Object.defineProperty(this, '_keys',
            {
                get: function() {
                    var arr = [];
                    for (var i = 0; i < _keys.length; i++) arr.push(_keys[i]);
                    return arr;
                },
                configurable: false,
                enumerable: false,
            });

            /**
             * 컬렉션 목록 
             * @readonly
             * @member {Array<any>}  _L.Meta.Entity.MetaRow#list  
             */
            Object.defineProperty(this, 'list', 
            {
                get: function() {
                    var arr = [];
                    for (var i = 0; i < _elements.length; i++) arr.push(_elements[i]);
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
            Object.defineProperty(this, 'count', 
            {
                get: function() { return _elements.length; },
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
            Object.defineProperty(this, 'onChanging', 
            {
                set: function(fun) { this.__event.subscribe(fun, 'onChanging'); },
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
                set: function(fun) { this.__event.subscribe(fun, 'onChanged'); },
                configurable: false,
                enumerable: false,
            });

            // inner variable access
            // this.__GET$_elements = function(call) {
            //     if (call instanceof MetaRow) return _elements;
            // }
            // this.__GET$_keys = function(call) {
            //     if (call instanceof MetaRow) return _keys;
            // };
            // this.__SET$_elements = function(val, call) {
            //     if (call instanceof MetaRow) _elements = val;
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
                var idx = _elements.length;
                var alias = _entity.columns[i].alias;
                _elements.push(_entity.columns[i].default);  // 기본값 등록
                _keys.push(alias);
                Object.defineProperty(this, [i], getPropDescriptor(idx));
                Object.defineProperty(this, alias, getPropDescriptor(idx));
            }

            function getPropDescriptor(p_idx) {
                return {
                    get: function() { return _elements[p_idx]; },
                    set: function(nVal) { 
                        var oldValue = _elements[p_idx];
                        var column;
                        // 엔티티 항상 존재함
                        column = _entity.columns[p_idx];
                        if (column && column._valueTypes.length > 0) Type.matchType([column._valueTypes], nVal);
                        // 트렌젹션 처리 => 함수로 추출 검토
                        if (_entity && !_entity.rows.autoChanges) {
                            var etc = 'idx:'+ p_idx +', new:' + nVal + ', old:'+ oldValue;
                            var pos = _entity.rows.indexOf(this);
                            if (pos > -1) {     // 컬력션에 포힘때 : 변경시점에 큐에 추가
                                _entity.rows._transQueue.update(pos, this, this.clone(), etc);
                            }
                        }
                        // 이벤트 및 처리
                        _this._onChanging(p_idx, nVal, oldValue);
                        _elements[p_idx] = nVal;
                        _this._onChanged(p_idx, nVal, oldValue);

                    },
                    enumerable: true,
                    configurable: false
                };
            }

            Util.implements(MetaRow, this);
        }
        Util.inherits(MetaRow, _super);
        
        MetaRow._UNION = [IList];
        MetaRow._NS = 'Meta.Entity';
        MetaRow._PARAMS = ['_entity'];

        /**
         * 로우 요소 변경전 이벤트
         * @listens _L.Meta.Entity.MetaColumn#_onChanged
         */
        MetaRow.prototype._onChanging = function(p_idx, p_nValue, p_oValue) {
            this.__event.publish('onChanging', p_idx, p_nValue, p_oValue, this);
        };

        /**
         * 로우 요소 변경후 이벤트
         * @listens _L.Meta.Entity.MetaColumn#_onChanged
         */
        MetaRow.prototype._onChanged = function(p_idx, p_nValue, p_oValue) {
            this.__event.publish('onChanged', p_idx, p_nValue, p_oValue, this);
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
        MetaRow.prototype.getObject = function(p_vOpt, p_owned) {
            var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
            var vOpt = p_vOpt || 0;
            var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);

            if (!Type.deepEqual(this.__event.$subscribers, this.__event._getInitObject())) {
                obj['$subscribers'] = this.__event.$subscribers;
            }
            if (vOpt < 2 && vOpt > -1 && this._entity) {
                obj['_entity'] = MetaRegistry.createReferObject(this._entity);
            }
            obj['_elem'] = [];
            for (var i = 0; i < this.list.length; i++) {
                var elem = this.list[i];
                if (elem instanceof MetaObject) {
                    if (MetaRegistry.hasGuidObject(elem, owned)) {
                        obj['_elem'].push(MetaRegistry.createReferObject(elem));
                    } else obj['_elem'].push(elem.getObject(vOpt, owned));
                } else obj['_elem'].push(elem);
            }
            obj['_key'] = [];
            for (var i = 0; i < this._keys.length; i++) {
                var key = this._keys[i];
                obj['_key'].push(key);
            }
            return obj;                        
        };

        /**
         * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.   
         * @param {object} p_oGuid guid 타입의 객체
         * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
         * 기본값은 p_oGuid 객체와 동일
         */
        MetaRow.prototype.setObject  = function(p_oGuid, p_origin) {
            _super.prototype.setObject.call(this, p_oGuid, p_origin);
            
            var origin = p_origin ? p_origin : p_oGuid;
            var entity;
            
            if (p_oGuid['_elem'].length !== p_oGuid['_key'].length) throw new ExtendError(/EL05212/, null, [p_oGuid['_elem'].length, p_oGuid['_key'].length]);

            if (p_oGuid['$subscribers']) {
                this.__event.$subscribers = p_oGuid['$subscribers'];
            }
            for(var i = 0; i < p_oGuid['_elem'].length; i++) {
                var elem = p_oGuid['_elem'][i];
                if (MetaRegistry.isGuidObject(elem)) {
                    var obj = MetaRegistry.createMetaObject(elem, origin);
                    obj.setObject(elem, origin);
                    this.$_elements[i] = obj;
                } else if (elem['$ref']) {
                    var meta = MetaRegistry.findSetObject(elem['$ref'], origin);
                    if (!meta) throw new ExtendError(/EL05213/, null, [i, elem['$ref']]);
                    this.$_elements[i] = meta;   
                } else this.$_elements[i] = elem;   
            }
        };

       /**
         * 객체 복제
         * @param {BaseEntity} [p_entity] 대상의 엔티티 기준으로 생성
         * @returns {MetaRow}
         */
        MetaRow.prototype.clone  = function(p_entity) {
            var entity = p_entity || this._entity;
            var clone = new MetaRow(entity);
            var obj = this.getObject();

            if (obj.$subscribers) {
                clone.__event.$subscribers = obj.$subscribers;
            }
            clone.$_elements = Util.deepCopy(obj._elem);
            return clone;
        };
        
        return MetaRow;
    
    }(MetaObject));
    
    //---------------------------------------
    var MetaRowCollection  = (function (_super) {
        /**
         * 로우 컬렉션
         * @constructs _L.Meta.Entity.MetaRowCollection
         * @extends _L.Collection.TransactionCollection
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
         * @protected
         * @param {number} p_idx 인덱스
         */
        MetaRowCollection.prototype._getPropDescriptor = function(p_idx) {
            return {
                get: function() { return this._elements[p_idx]; },
                set: function(nVal) {
                    if (this._elemTypes.length > 0) Type.matchType([this._elemTypes], nVal);
                    if (nVal._entity !== this._owner) throw new ExtendError(/EL05221/, null, [this.constructor.name]);
                    this._transQueue.update(p_idx, nVal, this._elements[p_idx]); 
                    this.$_elements[p_idx] = nVal;
                },
                configurable: true,
                enumerable: true,
            };
        };

        /**
         * MetaRow 추가 idx 를 기준으로 검사한다.
         * @param {MetaRow} p_row 
         * @param {boolean} [p_isCheck] true: 검사 진행, false: 검사 안함
         * @returns {number}
         */
        MetaRowCollection.prototype.add  = function(p_row, p_isCheck) {
            return this.insertAt(this._elements.length, p_row, p_isCheck);
        };

        /**
         * pos 위치에 추가
         * @param {number} p_pos 
         * @param {MetaRow} p_row 
         * @param {boolean} [p_isCheck] 유효성 검사 여부 
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

        return MetaRowCollection;
        
    }(TransactionCollection));

    //==============================================================
    // 5. module export
    if (isNode) {     
        exports.MetaRow = MetaRow;
        exports.MetaRowCollection = MetaRowCollection;
    } else {
        _global._L.MetaRow = MetaRow;
        _global._L.MetaRowCollection = MetaRowCollection;
        _global._L.Meta.Entity.MetaRow = MetaRow;                       // namespace
        _global._L.Meta.Entity.MetaRowCollection = MetaRowCollection;   // namespace
    }

}(typeof window !== 'undefined' ? window : global));