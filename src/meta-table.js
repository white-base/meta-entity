/**** meta-table.js | MetaTable ****/
//==============================================================
import { ExtendError } from 'logic-core';
import { Util } from 'logic-core';
// import { Type } from 'logic-core';
import { MetaRegistry } from 'logic-core';
// import { MetaObject } from 'logic-core';
// import { PropertyCollection } from 'logic-core';
import { ITransaction } from './i-transaction.js';
import { BaseEntity } from './base-entity.js';
import { MetaTableColumnCollection } from './collection-meta-table-column.js';

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
        Object.defineProperty(this, 'tableName', {
            get: function() { return this._name; },
            set: function(nVal) { 
                if (nVal === this.tableName) return;
                if (typeof nVal !== 'string') throw new ExtendError(/EL05411/, null, [typeof nVal]);
                this._name = nVal;
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 엔티티의 아이템(속성) 컬렉션
         * @member {MetaTableColumnCollection} _L.Meta.Entity.MetaTable#columns
         */
        Object.defineProperty(this, 'columns', {
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
        // var vOpt = p_vOpt || 0;
        // var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);

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
        for(var k = 0; k < this.rows.count; k++) {
            clone.rows.add(this.rows[k].clone(clone));
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

export default MetaTable;
export { MetaTable };