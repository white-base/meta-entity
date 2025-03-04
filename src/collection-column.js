/**** collection-column.js | _L.Meta.Entity.BaseColumnCollection, MetaViewColumnCollection, MetaTableColumnCollection ****/
(function(_global) {
    'use strict';

    var isNode = typeof window !== 'undefined' ? false : true;
    //==============================================================
    // 1. import module
    if (isNode) {                                                                   // strip:
        var _Message                    = require('./message-wrap').Message;        // strip:
        var _ExtendError                = require('logic-core').ExtendError;        // strip:
        var _Type                       = require('logic-core').Type;               // strip:
        var _Util                       = require('logic-core').Util;               // strip:
        var _MetaElement                = require('logic-core').MetaElement;        // strip:
        var _BaseColumn                 = require('./base-column').BaseColumn;      // strip:
        var _PropertyCollection         = require('logic-core').PropertyCollection; // strip:
        var _MetaRegistry               = require('logic-core').MetaRegistry;       // strip:
        var _MetaColumn                 = require('./meta-column').MetaColumn;      // strip:
    }                                                                               // strip:
    var $Message                    = _global._L.Message;               // modify:
    var $ExtendError                = _global._L.ExtendError;           // modify:
    var $Type                       = _global._L.Type;                  // modify:
    var $Util                       = _global._L.Util;                  // modify:
    var $MetaElement                = _global._L.MetaElement;           // modify:
    var $BaseColumn                 = _global._L.BaseColumn;            // modify:
    var $PropertyCollection         = _global._L.PropertyCollection;    // modify:
    var $MetaRegistry               = _global._L.MetaRegistry;          // modify:
    var $MetaColumn                 = _global._L.MetaColumn;            // modify:

    var Message                 = _Message              || $Message;                // strip:
    var ExtendError             = _ExtendError          || $ExtendError;            // strip:
    var Type                    = _Type                 || $Type;                   // strip:
    var Util                    = _Util                 || $Util;                   // strip:
    var MetaRegistry            = _MetaRegistry         || $MetaRegistry;           // strip:
    var MetaElement             = _MetaElement          || $MetaElement;            // strip:
    var BaseColumn              = _BaseColumn           || $BaseColumn;             // strip:
    var PropertyCollection      = _PropertyCollection   || $PropertyCollection;     // strip:
    var MetaColumn              = _MetaColumn           || $MetaColumn;             // strip:

    //==============================================================
    // 2. module dependency check
    if (typeof ExtendError === 'undefined') throw new Error(Message.get('ES011', ['ExtendError', 'extend-error']));
    if (typeof Type === 'undefined') throw new Error(Message.get('ES011', ['Type', 'type']));
    if (typeof Util === 'undefined') throw new Error(Message.get('ES011', ['Util', 'util']));
    // if (typeof Observer === 'undefined') throw new Error(Message.get('ES011', ['Observer', 'observer']));
    if (typeof MetaRegistry === 'undefined') throw new Error(Message.get('ES011', ['MetaRegistry', 'meta-registry']));
    if (typeof MetaElement === 'undefined') throw new Error(Message.get('ES011', ['MetaElement', 'meta-element']));
    if (typeof BaseColumn === 'undefined') throw new Error(Message.get('ES011', ['BaseColumn', 'base-column']));
    if (typeof PropertyCollection === 'undefined') throw new Error(Message.get('ES011', ['PropertyCollection', 'collection-property']));
    if (typeof MetaColumn === 'undefined') throw new Error(Message.get('ES011', ['MetaColumn', 'meta-column']));
    
    //==============================================================
    // 3. module implementation
    var BaseColumnCollection  = (function (_super) {
        /**
         * 컬럼 컬렉션 (최상위)
         * @abstract
         * @constructs _L.Meta.Entity.BaseColumnCollection
         * @extends _L.Collection.PropertyCollection
         * @param {object} p_owner 소유자 
         * @param {BaseColumn} [p_baseType] 기본 컬럼 타입
         */
        function BaseColumnCollection(p_owner, p_baseType) {
            _super.call(this, p_owner);
            
            var _baseType;

            /**
             * 기본 컬럼 타입
             * @member {BaseColumn} _L.Meta.Entity.BaseColumnCollection#_baseType
             */
            Object.defineProperty(this, '_baseType', 
            {
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

            // this._baseType = p_baseType || MetaColumn;
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
         * this._onwer 이 엔티티 여부를 확인합니다.
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
         * @protected
         * @param {number} p_idx 인덱스 번호
         */
        BaseColumnCollection.prototype._getPropDescriptor = function(p_idx, p_enum) {
            if (typeof p_enum !== 'boolean') p_enum = true;
            return {
                get: function() { return this.$elements[p_idx]; },
                set: function(nVal) {
                    throw new ExtendError(/EL05148/, null, []);
                    // var oVal = this.$elements[p_idx];
                    // if (this._elemTypes.length > 0) Type.matchType([this._elemTypes], nVal);
                    // this._onChanging(p_idx, nVal, oVal);  // before event
                    // this.$elements[p_idx] = nVal;
                    // this._onChanged(p_idx, nVal, oVal);   // after event
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
         * @param {number} p_idx 
         * @returns {boolean}
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
         * @param {string} p_key 키
         * @returns {BaseColumn | undefined}
         */
        BaseColumnCollection.prototype.alias  = function(p_key) {
            for (var i = 0; this.count > i; i++) {
                if (this[i].alias === p_key) return this[i];
            }
        };
        Object.defineProperty(BaseColumnCollection.prototype, 'alias', {
            enumerable: false
        });

        /** @abstract */
        BaseColumnCollection.prototype.addValue = function() {
            throw new ExtendError(/EL05147/, null, []);
        };
        Object.defineProperty(BaseColumnCollection.prototype, 'addValue', {
            enumerable: false
        });

        return BaseColumnCollection;
    
    }(PropertyCollection));

    var MetaTableColumnCollection  = (function (_super) {
        /**
         * 테이블 컬럼 컬렉션  
         * 참조 컬럼은 독립적으로 가진다 (참조 금지)
         * @constructs _L.Meta.Entity.MetaTableColumnCollection
         * @extends _L.Meta.Entity.BaseColumnCollection
         * @param {object} p_owner 소유자
         */
        function MetaTableColumnCollection(p_owner) {
            _super.call(this, p_owner, MetaColumn);

            // 예약어 등록 
            this.$KEYWORD = ['addValue'];
        }
        Util.inherits(MetaTableColumnCollection, _super);

        MetaTableColumnCollection._NS = 'Meta.Entity';          // namespace
        MetaTableColumnCollection._PARAMS = ['_owner'];         // creator parameter

        /**
         * 테이블 컬렉션에 컬럼 추가
         * @param {string | BaseColumn} p_column 컬럼명, 매타컬럼
         * @returns {number} 등록한 index
         */
        MetaTableColumnCollection.prototype.add  = function(p_column) {
            var column;
            var key;

            if (typeof p_column === 'string') {      
                key  = p_column;
                if (this._ownerIsEntity()) column = new this._baseType(key, this._owner);
                else column = new this._baseType(key);
                
            } else if (p_column instanceof BaseColumn) {
                key  = p_column.columnName;
                if (this._ownerIsEntity() && p_column._owner !== this._owner) {
                    column = p_column.clone(this._owner);
                } else column = p_column;
                // if (this._ownerIsEntity()) column = p_column.clone(this._owner);
                // else column = p_column.clone();
                
            } else {
                throw new ExtendError(/EL05151/, null, [typeof p_column]); 
            }

            return _super.prototype.add.call(this, key, column);
        };
        Object.defineProperty(MetaTableColumnCollection.prototype, 'add', {
            enumerable: false
        });

        /**
         * 이름과 값으로 컬렉션에 추가 (내부에서 생성)
         * @param {string} p_name 컬럼명
         * @param {string | number | boolean} p_value 값
         * @returns {BaseColumn} 추가한 컬럼 객체
         */
        MetaTableColumnCollection.prototype.addValue  = function(p_name, p_value) {
            var item;
            var property = {};
            var _valueTypes = this._baseType._VALUE_TYPE;

            if (typeof p_name !== 'string') throw new ExtendError(/EL05152/, null, [typeof p_name]);
            if (_valueTypes.length > 0) Type.matchType([_valueTypes], p_value);
            
            property = { value: p_value };
            item = new this._baseType(p_name, this._owner, property);

            return this[this.add(item)];
        };
        Object.defineProperty(MetaTableColumnCollection.prototype, 'addValue', {
            enumerable: false
        });

        return MetaTableColumnCollection;
    
    }(BaseColumnCollection));
    
    var MetaViewColumnCollection  = (function (_super) {
        /**
         * 메타 뷰 컬럼 컬렉션
         * @constructs _L.Meta.Entity.MetaViewColumnCollection
         * @extends _L.Meta.Entity.BaseColumnCollection
         * @param {object} p_owner 소유자
         */
        function MetaViewColumnCollection(p_owner) {
            _super.call(this, p_owner, MetaColumn);

            /** 
             * 참조하는 엔티티 목록
             * @readonly
             * @member {array<BaseEntity>} _L.Meta.Entity.MetaViewColumnCollection#_refEntities
             */
            Object.defineProperty(this, '_refEntities', 
            {
                get: function() { 
                    var arr = [];
                    for (var i = 0; i < this.count; i++) {
                        var column = this[i];
                        if (this._owner !== column._entity && arr.indexOf(column._entity) < 0) {
                            arr.push(column._entity);
                        }
                    }
                    return arr; 
                },
                configurable: false,
                enumerable: false
            });

            // 예약어 등록 
            this.$KEYWORD = ['_refEntities', 'addValue', 'addEntity'];
        }
        Util.inherits(MetaViewColumnCollection, _super);

        MetaViewColumnCollection._NS = 'Meta.Entity';                       // namespace
        MetaViewColumnCollection._PARAMS = ['_owner', '_baseCollection'];   // creator parameter

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
        MetaViewColumnCollection.prototype.getObject = function(p_vOpt, p_owned) {
            var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
            var vOpt = p_vOpt || 0;
            
            if (vOpt === 0) {   // 참조로 바꿈
                for (var i = 0; i < obj['_elem'].length; i++) {
                    var elem = obj['_elem'][i];
                    if (vOpt < 2 && vOpt > -1 && elem['_entity'] && elem['_entity']['$ref'] !== this._owner._guid) {
                        var rObj = MetaRegistry.createReferObject(elem); // 소유자가 아니면 참조 리턴
                        obj['_elem'][i] = rObj;
                    }
                }
            }
            return obj;                  
        };
        Object.defineProperty(MetaViewColumnCollection.prototype, 'getObject', {
            enumerable: false
        });

        /**
         * 뷰컬렉션에 컬럼을 추가(등록/설정)한다.  
         * - entity가 있는 컬럼을 추가할 경우 : 참조가 추가되는 것이다.  
         *      + collection 존재할 경우 최상위 컬렉션에도 참조가 등록된다.  
         * - entity가 없는 컬럼을 추가할 경우 : 자신을 소유자로 등록한다.  
         * - collection에 컬럼이 존재할 경우 : columns 객체는 무시되고, 리턴한 객체의 참조를 등록한다.  
         * - collection에 컬럼이 없을 경우 : 컬렉션에 entity를 설정한다.(참조 재귀호출시 최상위만 등록됨)  
         *      + collection 존재할 경우 entity 항상 존재한다.  
         * - entity가 있는 컬럼을 추가할 경우 : 참조가 추가되는 것이다.
         * - entity가 없는 컬럼을 추가할 경우 : 자신을 소유자로 등록한다.
         * - collection에 컬럼이 존재할 경우 : columns 객체는 무시되고, 리턴한 객체의 참조를 등록한다.
         * - collection에 컬럼이 없을 경우 : 컬렉션에 entity를 설정한다.(참조 재귀호출시 최상위만 등록됨)
         * @param {string | MetaColumn} p_column 컬럼
         * @param {BaseColumnCollection} [p_refCollection] 참조컬렉션
         */
        MetaViewColumnCollection.prototype.add  = function(p_column, p_refCollection) {
            var collection;
            var key;
            var column;

            if (p_refCollection && !(p_refCollection instanceof BaseColumnCollection)) {
                throw new ExtendError(/EL05161/, null, []);
            }

            if (p_column instanceof BaseColumn) {
                key = p_column.columnName;
                column = p_column;
            } else if (typeof p_column === 'string') {
                key = p_column;
                column = new this._baseType(key, this._owner);
            } else throw new ExtendError(/EL05162/, null, [typeof p_column]);

            // baseCollection & refCollection 존재하는 경우
            if (p_refCollection instanceof BaseColumnCollection) {                                  
                collection = p_refCollection;
            } else if (this._owner && this._owner._baseEntity && this._owner._baseEntity.columns) { 
                collection = this._owner._baseEntity.columns;
            }
            
            // 컬렉션이 있는 경우 : _entity 항상 존재
            if (collection) {
                if (collection.contains(collection[key])) {
                    column = collection[key];   // 기존에 존재하면 참조 가져옴
                } else {                                                
                    collection.add(p_column);      // 없으면 컬렉션에 추가(owner 설정됨)
                    column = collection[key];
                }
            }
            if (!column._entity && this._ownerIsEntity()) column._entity = this._owner;
            // if (!column._entity) column._entity = this._owner;

            return _super.prototype.add.call(this, key, column);
        };
        Object.defineProperty(MetaViewColumnCollection.prototype, 'add', {
            enumerable: false
        });

        /**
         *  이름과 값으로 컬럼 생성하여 컬렉션에 추가
         * @param {string} p_name 컬럼명
         * @param {string | number | boolean} p_value 값
         * @param {BaseColumnCollection} [p_refCollection]
         * @returns {MetaColumn}
         */
        MetaViewColumnCollection.prototype.addValue  = function(p_name, p_value, p_refCollection) {
            var item;
            var property = {};
            var _valueTypes = this._baseType._VALUE_TYPE;

            if (typeof p_name !== 'string') throw new ExtendError(/EL05163/, null, [typeof p_name]);
            if (_valueTypes.length > 0) Type.matchType([_valueTypes], p_value);
            
            property = { value: p_value };
            item = new this._baseType(p_name, null, property);

            return this[this.add(item, p_refCollection)];
        };
        Object.defineProperty(MetaViewColumnCollection.prototype, 'addValue', {
            enumerable: false
        });

        /**
         * 엔티티의 모든 컬럼을 추가
         * @param {BaseEntity} p_entity 
         */
        MetaViewColumnCollection.prototype.addEntity  = function(p_entity) {
            if (typeof p_entity !== 'undefined' && !(p_entity instanceof MetaElement && p_entity.instanceOf('BaseEntity'))) {
                throw new ExtendError(/EL05164/, null, []);
            }

            for (var i = 0; p_entity.columns.count > i; i++) {
                this.add(p_entity.columns[i]);
            }
        };
        Object.defineProperty(MetaViewColumnCollection.prototype, 'addEntity', {
            enumerable: false
        });
        
        return MetaViewColumnCollection;
    
    }(BaseColumnCollection));

    //==============================================================
    // 4. module export
    if (isNode) exports.BaseColumnCollection = BaseColumnCollection;            // strip:
    if (isNode) exports.MetaViewColumnCollection = MetaViewColumnCollection;    // strip:
    if (isNode) exports.MetaTableColumnCollection = MetaTableColumnCollection;  // strip:

    // create namespace
    _global._L.Meta                 = _global._L.Meta || {};
    _global._L.Meta.Entity          = _global._L.Meta.Entity || {};

    _global._L.BaseColumnCollection = BaseColumnCollection;
    _global._L.MetaViewColumnCollection = MetaViewColumnCollection;
    _global._L.MetaTableColumnCollection = MetaTableColumnCollection;
    _global._L.Meta.Entity.BaseColumnCollection = BaseColumnCollection;
    _global._L.Meta.Entity.MetaViewColumnCollection = MetaViewColumnCollection;
    _global._L.Meta.Entity.MetaTableColumnCollection = MetaTableColumnCollection;

}(typeof window !== 'undefined' ? window : global));