/**** collection-meta-table.js | MetaTableCollection ****/
//==============================================================
import { ExtendError } from 'logic-core';
import { Util } from 'logic-core';
import { Type } from 'logic-core';
import { MetaObject } from 'logic-core';
import { PropertyCollection } from 'logic-core';
import { MetaTable } from './meta-table.js';

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
        Object.defineProperty(this, '_baseType', {
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

export default MetaTableCollection;
export { MetaTableCollection };