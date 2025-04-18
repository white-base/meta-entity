/**** collection-meta-table-column.js | MetaTableColumnCollection ****/
//==============================================================
import { ExtendError }              from 'logic-core';
import { Type }                     from 'logic-core';
import { Util }                     from 'logic-core';
import { BaseColumn }               from './base-column.js';
import { MetaColumn }               from './meta-column.js';
import { BaseColumnCollection }     from './base-column-collection.js';

var MetaTableColumnCollection  = (function (_super) {
    /**
     * 테이블 컬럼 컬렉션    
     * 참조 컬럼은 독립적으로 가진다 (참조 금지)  
     * 
     * @constructs MetaTableColumnCollection
     * @extends BaseColumnCollection
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
     * 
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
     * 
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


export default MetaTableColumnCollection;
export { MetaTableColumnCollection };