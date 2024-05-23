/**** meta-table.js | _L.Meta.Entity.MetaTable, _L.Meta.Entity.MetaTableCollection ****/
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
    if (isNode) {                                                                                   // strip:   
        var _Message                    = require('logic-core').Message;                            // strip:
        var _ExtendError                = require('logic-core').ExtendError;                        // strip:
        var _Type                       = require('logic-core').Type;                               // strip:
        var _Util                       = require('logic-core').Util;                               // strip:
        var _MetaRegistry               = require('logic-core').MetaRegistry;                       // strip:
        var _MetaObject                 = require('logic-core').MetaObject;                         // strip:
        var _BaseEntity                 = require('./base-entity').BaseEntity;                      // strip:
        var _ITransaction               = require('./i-transaction').ITransaction;                  // strip:
        var _PropertyCollection         = require('logic-core').PropertyCollection;                 // strip:
        var _MetaTableColumnCollection  = require('./collection-column').MetaTableColumnCollection; // strip:
    }                                                                                               // strip:
    var $Message                    = _global._L.Message;                       // modify:
    var $ExtendError                = _global._L.ExtendError;                   // modify:
    var $Type                       = _global._L.Type;                          // modify:
    var $Util                       = _global._L.Util;                          // modify:
    var $MetaRegistry               = _global._L.MetaRegistry;                  // modify:
    var $ITransaction               = _global._L.ITransaction;                  // modify:
    var $PropertyCollection         = _global._L.PropertyCollection;            // modify:
    var $MetaObject                 = _global._L.MetaObject;                    // modify:
    var $BaseEntity                 = _global._L.BaseEntity;                    // modify:
    var $MetaTableColumnCollection  = _global._L.MetaTableColumnCollection;     // modify:
    var $ExtendError                = _global._L.ExtendError;                   // modify:

    var Message                 = _Message              || $Message;                                // strip:
    var ExtendError             = _ExtendError          || $ExtendError;                            // strip:
    var Type                    = _Type                 || $Type;                                   // strip:
    var Util                    = _Util                 || $Util;                                   // strip:
    var ITransaction            = _ITransaction         || $ITransaction;                           // strip:
    var MetaRegistry            = _MetaRegistry         || $MetaRegistry;                           // strip:
    var MetaObject              = _MetaObject           || $MetaObject;                             // strip:
    var BaseEntity              = _BaseEntity           || $BaseEntity;                             // strip:
    var PropertyCollection      = _PropertyCollection   || $PropertyCollection;                     // strip:
    var MetaTableColumnCollection   = _MetaTableColumnCollection    || $MetaTableColumnCollection;  // strip:

    //==============================================================
    // 3. module dependency check
    if (typeof ExtendError === 'undefined') throw new Error(Message.get('ES011', ['ExtendError', 'extend-error']));
    if (typeof Type === 'undefined') throw new Error(Message.get('ES011', ['Type', 'type']));
    if (typeof Util === 'undefined') throw new Error(Message.get('ES011', ['Util', 'util']));
    if (typeof ITransaction === 'undefined') throw new Error(Message.get('ES011', ['ITransaction', 'i-transaction']));
    if (typeof MetaRegistry === 'undefined') throw new Error(Message.get('ES011', ['MetaRegistry', 'meta-registry']));
    if (typeof MetaObject === 'undefined') throw new Error(Message.get('ES011', ['MetaObject', 'meta-object']));
    if (typeof PropertyCollection === 'undefined') throw new Error(Message.get('ES011', ['PropertyCollection', 'collection-property']));
    if (typeof BaseEntity === 'undefined') throw new Error(Message.get('ES011', ['BaseEntity', 'base-entity']));
    if (typeof MetaTableColumnCollection === 'undefined') throw new Error(Message.get('ES011', ['MetaTableColumnCollection', 'meta-column']));

    //==============================================================
    // 4. module implementation   
    //--------------------------------------------------------------
    // implementation
    var MetaTable  = (function (_super) {
        /**
         * 테이블 엔티티
         * @constructs _L.Meta.Entity.MetaTable
         * @extends _L.Meta.Entity.BaseEntity
         * @param {string} p_name 테이블명
         */
        function MetaTable(p_name) {
            _super.call(this, p_name);

            var columns  = new MetaTableColumnCollection(this);

            /**
             * 테이블 이름
             * @member {string} _L.Meta.Entity.MetaTable#tableName
             */
            Object.defineProperty(this, 'tableName', 
            {
                get: function() { return this._name; },
                set: function(nVal) { 
                    if (nVal === this.tableName) return;
                    if (typeof nVal !== 'string') throw new ExtendError(/EL05411/, null, [typeof nVal]);
                    this.$name = nVal;
                },
                configurable: false,
                enumerable: true
            });

            /**
             * 엔티티의 아이템(속성) 컬렉션
             * @member {MetaTableColumnCollection} _L.Meta.Entity.MetaTable#columns
             */
            Object.defineProperty(this, 'columns', 
            {
                get: function() { return columns; },
                set: function(nVal) { 
                    if (!(nVal instanceof MetaTableColumnCollection)) throw new ExtendError(/EL05412/, null, []);
                    if (this.rows.count > 0) throw new ExtendError(/EL05413/, null, [this.constructor.name, this.rows.count]);
                    columns = nVal;
                },
                configurable: false,
                enumerable: true
            });
            
            Util.implements(MetaTable, this);       // strip:
        }
        Util.inherits(MetaTable, _super);
        
        MetaTable._UNION = [ITransaction];
        MetaTable._NS = 'Meta.Entity';      // namespace
        MetaTable._PARAMS = ['name'];       // creator parameter

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
        MetaTable.prototype.getObject = function(p_vOpt, p_owned) {
            var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
            var vOpt = p_vOpt || 0;
            var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);

            obj['tableName'] = this.tableName;
            return obj;                        
        };

        /**
         * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.   
         * @param {object} p_oGuid guid 타입의 객체
         * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
         * 기본값은 p_oGuid 객체와 동일
         */
        MetaTable.prototype.setObject  = function(p_oGuid, p_origin) {
            _super.prototype.setObject.call(this, p_oGuid, p_origin);
            
            var origin = p_origin ? p_origin : p_oGuid;
            var metaSet;

            if(p_oGuid['_metaSet']) {
                metaSet = MetaRegistry.findSetObject(p_oGuid['_metaSet']['$ref'], origin);
                if (!metaSet) throw new ExtendError(/EL05414/, null, [p_oGuid['_metaSet']['$ref']]);
                this._metaSet = metaSet;
            }
            this.columns.setObject(p_oGuid['columns'], origin);
            this.rows.setObject(p_oGuid['rows'], origin);
            this.tableName = p_oGuid['tableName'];
        };

        /**
         * 객체 복제
         * @returns {MetaTable}
         */
        MetaTable.prototype.clone  = function() {
            var clone = new MetaTable(this.tableName);
            
            // columns 복제본 추가
            for(var i = 0; i < this.columns.count; i++) {
                clone.columns.add(this.columns[i].clone(clone));
            }
            
            // rows 복제본 추가
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
        MetaTable.prototype.copy  = function(p_filter, p_args) {
            var args = Array.prototype.slice.call(arguments);
            var columnNames = [];
            var callback = null;
            var entity = new MetaTable(this.tableName, this);

            // 매개변수 구성
            if (typeof p_filter === 'function') {
                callback = p_filter;
                if (Array.isArray(p_args)) columnNames = p_args;
                else if (args.length > 1) columnNames = args.splice(1);
            } else if (Array.isArray(p_filter)) {
                columnNames = p_filter;
            } else {
                columnNames = args.splice(0);
            }

            return this._buildEntity(entity, callback, columnNames);
        };

        /**
         * 변경사항 허락 : commit
         */
        MetaTable.prototype.acceptChanges  = function() {
            this.rows.commit();
        };

        /**
         * 변경사항 취소 : rollback
         */
        MetaTable.prototype.rejectChanges  = function() {
            this.rows.rollback();
        };

        /**
         * 변경목록 얻기
         * @returns {array<object>}
         */
        MetaTable.prototype.getChanges  = function() {
            return this.rows._transQueue.select();
        };

        return MetaTable;
    
    }(BaseEntity));
    
    //--------------------------------------------------------------
    // implementation
     var MetaTableCollection  = (function (_super) {
        /**
         * 메타 테이블 컬렉션
         * @constructs _L.Meta.Entity.MetaTableCollection
         * @extends _L.Collection.PropertyCollection
         * @param {object} p_owner 소유자 
         */
        function MetaTableCollection(p_owner) {   // COVER:
            _super.call(this, p_owner);

            var _baseType = MetaTable;
            /**
             * 기본 생성 타입
             * @member {BaseColumnCollection} _L.Meta.Entity.MetaTableCollection#_baseType
             */
            Object.defineProperty(this, '_baseType', 
            {
                get: function() { return _baseType; },
                set: function(nVal) { 
                    if (!(typeof nVal === 'function')) throw new ExtendError(/EL05421/, null, [this.constructor.name, typeof nVal]);
                    // if (!(new nVal('temp') instanceof MetaTable)) throw new ExtendError('ES032', ['_baseType', 'MetaTable']);
                    if (!(Type.isProtoChain(nVal, MetaTable))) throw new ExtendError(/EL05422/, null, [this.constructor.name]);
                    _baseType = nVal;
                },
                configurable: false,
                enumerable: true
            });

            this._elemTypes = MetaTable;   // 컬렉션 타입 설정

            // 예약어 등록 
            this.$KEYWORD = ['_baseType', 'existTableName'];
        }
        Util.inherits(MetaTableCollection, _super);

        MetaTableCollection._NS = 'Meta.Entity';    // namespace
        MetaTableCollection._PARAMS = ['_owner'];  // creator parameter

        /**
         * 테이블 컬렉션에 엔티티 추가
         * @param {string | MetaTable} p_table 추가할 메타테이블
         * @returns {MetaTable} 등록한 아이템
         */
        MetaTableCollection.prototype.add  = function(p_table) { // COVER:
            var table;
            var key;

            if (typeof p_table === 'string' && p_table.length > 0) {      
                key  = p_table;
                table = new this._baseType(key);
                if (this._owner instanceof MetaObject && this._owner.instanceOf('MetaSet')) table._metaSet = this._owner;
                // table._metaSet = this._owner;

            } else if (p_table instanceof MetaTable) {
                key  = p_table.tableName;
                table = p_table;
                if (this._owner instanceof MetaObject && this._owner.instanceOf('MetaSet')) p_table._metaSet = this._owner;
                // p_table._metaSet = this._owner;
            } else throw new ExtendError(/EL05423/, null, [typeof any]);

            if (this.existTableName(key)) throw new ExtendError(/EL05424/, null, [key]);

            return _super.prototype.add.call(this, key, table);
        };

        /**
         * 테이블명 존재 유무
         * @param {string} p_key 테이블명
         * @returns {boolean}
         */
        MetaTableCollection.prototype.existTableName  = function(p_key) {
            for (var i = 0; this.count > i; i++) {
                if (this[i].tableName === p_key) return true;
            }
            return false;
        };
        
        return MetaTableCollection;
    
    }(PropertyCollection));

    //==============================================================
    // 5. module export
    if (isNode) {                                               // strip:
        exports.MetaTable = MetaTable;                          // strip:
        exports.MetaTableCollection = MetaTableCollection;      // strip:
    }                                                           // strip:
    
    _global._L.MetaTable = MetaTable;
    _global._L.MetaTableCollection = MetaTableCollection;
    _global._L.Meta.Entity.MetaTable = MetaTable;
    _global._L.Meta.Entity.MetaTableCollection = MetaTableCollection;

}(typeof window !== 'undefined' ? window : global));