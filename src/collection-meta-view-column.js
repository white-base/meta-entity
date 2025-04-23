/**** collection-meta-view-column.js | MetaViewColumnCollection ****/
//==============================================================
import { ExtendError }              from 'logic-core';
import { Type }                     from 'logic-core';
import { Util }                     from 'logic-core';
import { MetaElement }              from 'logic-core';
import { BaseColumn }               from './base-column.js';
import { MetaRegistry }             from 'logic-core';
import { MetaColumn }               from './meta-column.js';
import { BaseColumnCollection }     from './base-column-collection.js';

var MetaViewColumnCollection  = (function (_super) {
    /**
     * 메타 뷰 컬럼 컬렉션
     * 
     * @constructs MetaViewColumnCollection
     * @extends BaseColumnCollection
     * @param {object} p_owner 소유자
     */
    function MetaViewColumnCollection(p_owner) {
        _super.call(this, p_owner, MetaColumn);

        /** 
         * 참조하는 엔티티 목록
         * 
         * @readonly
         * @member {array<BaseEntity>} MetaViewColumnCollection#_refEntities
         */
        Object.defineProperty(this, '_refEntities', {
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
    MetaViewColumnCollection.prototype.getObject = function(p_mode, p_context) {
        var obj = _super.prototype.getObject.call(this, p_mode, p_context);
        var vOpt = p_mode || 0;
        
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
     * 
     * @param {string | MetaColumn} p_column 컬럼
     * @param {BaseColumnCollection} [p_refCollection] 참조컬렉션
     * @return {number} 등록한 index
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
     * 
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
     * 
     * @param {BaseEntity} p_entity 추가할 컬럼이 포함된 엔티티
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

export default MetaViewColumnCollection;
export { MetaViewColumnCollection };