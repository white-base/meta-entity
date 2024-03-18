/**** meta-view.js | _L.Meta.Entity.MetaView, _L.Meta.Entity.MetaViewCollection ****/

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
        var _PropertyCollection         = require('logic-core').PropertyCollection;
        var _MetaObject                 = require('logic-core').MetaObject;
        var _BaseEntity                 = require('./base-entity').BaseEntity;
        var _MetaRegistry               = require('logic-core').MetaRegistry;
        var _MetaViewColumnCollection   = require('./collection-column').MetaViewColumnCollection;
    } else {
        var $Message                    = _global._L.Message;
        var $ExtendError                = _global._L.ExtendError;
        var $Type                       = _global._L.Type;
        var $Util                       = _global._L.Util;
        var $PropertyCollection         = _global._L.PropertyCollection;
        var $MetaObject                 = _global._L.MetaObject;
        var $BaseEntity                 = _global._L.BaseEntity;
        var $MetaRegistry               = _global._L.MetaRegistry;
        var $MetaViewColumnCollection   = _global._L.MetaViewColumnCollection;
    }
    var Message                 = _Message              || $Message;
    var ExtendError             = _ExtendError          || $ExtendError;
    var Type                    = _Type                 || $Type;
    var Util                    = _Util                 || $Util;
    var PropertyCollection      = _PropertyCollection   || $PropertyCollection;
    var MetaObject              = _MetaObject           || $MetaObject;
    var BaseEntity              = _BaseEntity           || $BaseEntity;
    var MetaRegistry            = _MetaRegistry         || $MetaRegistry;
    var MetaViewColumnCollection= _MetaViewColumnCollection || $MetaViewColumnCollection;

    //==============================================================
    // 3. module dependency check
    if (typeof ExtendError === 'undefined') throw new Error(Message.get('ES011', ['ExtendError', 'extend-error']));
    if (typeof Type === 'undefined') throw new Error(Message.get('ES011', ['Type', 'type']));
    if (typeof Util === 'undefined') throw new Error(Message.get('ES011', ['Util', 'util']));
    if (typeof MetaRegistry === 'undefined') throw new Error(Message.get('ES011', ['MetaRegistry', 'meta-registry']));
    if (typeof MetaObject === 'undefined') throw new Error(Message.get('ES011', ['MetaObject', 'meta-object']));
    if (typeof PropertyCollection === 'undefined') throw new Error(Message.get('ES011', ['PropertyCollection', 'collection-property']));
    if (typeof BaseEntity === 'undefined') throw new Error(Message.get('ES011', ['BaseEntity', 'base-entity']));
    if (typeof MetaViewColumnCollection === 'undefined') throw new Error(Message.get('ES011', ['MetaViewColumnCollection', 'meta-column']));

    //==============================================================
    // 4. module implementation   
    var MetaView  = (function (_super) {
        /**
         * 메타 뷰
         * @constructs _L.Meta.Entity.MetaView
         * @extends _L.Meta.Entity.BaseEntity
         * @param {string} p_name 
         * @param {BaseEntity?} p_baseEntity 기본 엔티티, 컬럼 추가시 기본엔티티에 추가 된다.
         */
        function MetaView(p_name, p_baseEntity) {
            _super.call(this, p_name);

            var _baseEntity;
            var columns = new MetaViewColumnCollection(this);
            /**
             * 메타 뷰 이름
             * @member {string} _L.Meta.Entity.MetaView#viewName
             */
            Object.defineProperty(this, 'viewName', 
            {
                get: function() { return this._name; },
                set: function(nVal) { 
                    if (nVal === this.viewName) return;
                    if (typeof nVal !== 'string') throw new ExtendError(/EL05431/, null, [typeof nVal]);
                    this.__SET$_name(nVal, this);
                },
                configurable: false,
                enumerable: true
            });

            /**
             * 뷰의 컬럼 컬렉션
             * @member {MetaViewColumnCollection} _L.Meta.Entity.MetaView#columns
             */
            Object.defineProperty(this, 'columns', 
            {
                get: function() { return columns; },
                set: function(nVal) { 
                    if (!(nVal instanceof MetaViewColumnCollection)) throw new ExtendError(/EL05432/, null, [this.constructor.name]);
                    if (this.rows.count > 0) throw new ExtendError(/EL05433/, null, [this.constructor.name, this.rows.count ]);
                    columns = nVal;
                },
                configurable: false,
                enumerable: true
            });
           
            /**
             * 기본 엔티티
             * @member {MetaViewColumnCollection} _L.Meta.Entity.MetaView#_baseEntity
             */
            Object.defineProperty(this, '_baseEntity', 
            {
                get: function() { return _baseEntity; },
                set: function(nVal) { 
                    if (!(nVal instanceof BaseEntity)) throw new ExtendError(/EL05434/, null, [this.constructor.name]);
                    _baseEntity = nVal;
                },
                configurable: false,
                enumerable: true
            });

            if (p_baseEntity) this._baseEntity = p_baseEntity;
            
        }
        Util.inherits(MetaView, _super);

        MetaView._NS = 'Meta.Entity';                   // namespace
        MetaView._PARAMS = ['name', '_baseEntity'];     // creator parameter

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
        MetaView.prototype.getObject = function(p_vOpt, p_owned) {
            var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
            var vOpt = p_vOpt || 0;
            var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);
            // var origin = p_origin ? p_origin : obj;

            obj['viewName'] = this.viewName;
            if (vOpt < 2 && vOpt > -1 && this._baseEntity) {
                obj['_baseEntity'] = MetaRegistry.createReferObject(this._baseEntity);
            }
            return obj;                  
        };

        /**
         * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.  
         * @param {object} p_oGuid guid 타입의 객체
         * @param {object?} p_origin 현재 객체를 설정하는 원본 guid 객체  
         * 기본값은 p_oGuid 객체와 동일
         */
        MetaView.prototype.setObject  = function(p_oGuid, p_origin) {
            _super.prototype.setObject.call(this, p_oGuid, p_origin);
            
            var origin = p_origin ? p_origin : p_oGuid;
            var metaSet;
            var baseEntity;

            if(p_oGuid['_metaSet']) {
                metaSet = MetaRegistry.findSetObject(p_oGuid['_metaSet']['$ref'], origin);
                if (!metaSet) throw new ExtendError(/EL05435/, null, [p_oGuid['_metaSet']['$ref']]);
                this._metaSet = metaSet;
            }
            // this.metaSet = mObj.metaSet;
            if (p_oGuid['_baseEntity']) {
                baseEntity = MetaRegistry.findSetObject(p_oGuid['_baseEntity']['$ref'], origin);
                if (!baseEntity) throw new ExtendError(/EL05436/, null, [p_oGuid['_baseEntity']['$ref']]);
                // this.__SET$_baseEntity(baseEntity, this);
                this._baseEntity = baseEntity;
            } 
            this.columns.setObject(p_oGuid['columns'], origin);
            this.rows.setObject(p_oGuid['rows'], origin);
            this.viewName = p_oGuid['viewName'];
        };
        /**
         * 객체 복제
         * override
         * @returns {MetaView}
         */
        MetaView.prototype.clone  = function() {
            var clone = new MetaView(this.viewName, this._baseEntity);  // 뷰를 복제하면 참조타입 >> 엔티티타입으로 변경

            for(var i = 0; i < this.columns.count; i++) {
                if (this.columns[i]._entity === this) clone.columns.add(this.columns[i].clone(clone));
                else clone.columns.add(this.columns[i].clone());
            }

            for(var i = 0; i < this.rows.count; i++) {
                clone.rows.add(this.rows[i].clone(clone));
            }
            return clone;
        };
        
        /**
         * 엔티티를 복사한다. (조회 후 복제)
         * @param {overload}            type1
         * @param {function}            type1.p_filter 로우 필터 함수
         * @param {arguments<string>}   type1.p_args 컬럼명
         * @param {overload}            type2
         * @param {string}              type2.p_columns 컬럼명
         */
        MetaView.prototype.copy  = function(p_filter, p_args) {
            var args = Array.prototype.slice.call(arguments);
            var _this = this;
            var items = [];
            var callback = null;
            var entity = new MetaView(this.viewName, this);
            var orignal = this.clone();

            // 매개변수 구성
            if (typeof p_filter === 'function') {
                callback = p_filter;
                if (Array.isArray(p_args)) items = p_args;
                else if (args.length > 1) items = args.splice(1);
            } else if (Array.isArray(p_filter)) {
                items = p_filter;
            } else {
                items = args.splice(0);
            }

            return this._buildEntity(entity, callback, items);
        };

        
        return MetaView;
    
    }(BaseEntity));
    
    //--------------------------------------------------------------
    // implementation
    var MetaViewCollection  = (function (_super) {
        /**
         * 뷰 엔티티 컬렉션
         * @constructs _L.Meta.Entity.MetaViewCollection
         * @extends _L.Meta.Entity.PropertyCollection
         * @param {object} p_owner 소유자 
         */
        function MetaViewCollection(p_owner) {    // COVER:
            _super.call(this, p_owner);

            var _baseType = MetaView;

            /**
             * 기본 생성 타입
             * @member {BaseColumnCollection} _L.Meta.Entity.MetaViewCollection#_baseType
             */
            Object.defineProperty(this, '_baseType', 
            {
                get: function() { return _baseType; },
                set: function(nVal) { 
                    if (!(typeof nVal === 'function')) throw new ExtendError(/EL05441/, null, [typeof nVal]);
                    // if (!(new nVal('temp') instanceof MetaView)) throw new ExtendError('ES032', ['_baseType', 'MetaView']);
                    if (!(Type.isProtoChain(nVal, MetaView))) throw new ExtendError(/EL05442/, null, [this.constructor.name]);
                    _baseType = nVal;
                },
                configurable: false,
                enumerable: true
            });

            this._elemTypes = MetaView;   // 컬렉션타입 설정
        }
        Util.inherits(MetaViewCollection, _super);

        MetaViewCollection._NS = 'Meta.Entity';    // namespace
        MetaViewCollection._PARAMS = ['_owner'];  // creator parameter

        /**
         * 뷰 컬렉션에 뷰 엔티티를 추가한다.
         * @param {string | MetaView} p_obj 
         * @param {BaseColumnCollection?} p_baseEntity
         * @returns {MetaView} 등록한 아이템
         * @example
         *  - string                    : 생성후   string      이름으로 등록 
         *  - string, colltion          : 생성후   string      이름으로  등록 (collection보냄)
         *  - entityView                :         entityView  이름으로 등록
         *  - entityView, collection    :         entityView  이름으로 등록 (collection보냄) => 오류발생
         */
        MetaViewCollection.prototype.add  = function(p_obj, p_baseEntity) {    // COVER:
            var view;
            var key;

            if (p_obj instanceof MetaView && p_baseEntity) {
                throw new ExtendError(/EL05443/, null, []);
            }
            if (p_baseEntity && !(p_baseEntity instanceof BaseEntity)) {
                throw new ExtendError(/EL05444/, null, []);
            }

            if (typeof p_obj === 'string') {      
                key  = p_obj;
                view = new this._baseType(key, p_baseEntity);
                view._metaSet = this._owner;
            } else if (p_obj instanceof MetaView) {
                key  = p_obj.viewName;
                view = p_obj;
                p_obj._metaSet = this._owner;
            } else throw new ExtendError(/EL05445/, null, [typeof p_obj]);

            if (this.existViewName(key)) throw new ExtendError(/EL05446/, null, [key]);

            return _super.prototype.add.call(this, key, view);
        };

        MetaViewCollection.prototype.existViewName  = function(p_key) {
            for (var i = 0; this.count > i; i++) {
                if (this[i].viewName === p_key) return true;
            }
            return false;
        };

        return MetaViewCollection;
    
    }(PropertyCollection));

    //==============================================================
    // 5. module export
    if (isNode) {     
        exports.MetaView = MetaView;
        exports.MetaViewCollection = MetaViewCollection;
    } else {
        _global._L.MetaView = MetaView;
        _global._L.MetaViewCollection = MetaViewCollection;
        // namespace
        _global._L.Meta.Entity.MetaView = MetaView;
        _global._L.Meta.Entity.MetaViewCollection = MetaViewCollection;
    }

}(typeof window !== 'undefined' ? window : global));