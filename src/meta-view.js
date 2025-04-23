/**** meta-view.js | MetaView ****/
//==============================================================
import { ExtendError }                  from 'logic-core';
import { Util }                         from 'logic-core';
import { MetaRegistry }                 from 'logic-core';
import { BaseEntity }                   from './base-entity.js';
import { MetaViewColumnCollection }     from './collection-meta-view-column.js';

var MetaView  = (function (_super) {
    /**
     * 메타 뷰
     * 
     * @constructs MetaView
     * @extends BaseEntity
     * @param {string} p_name 뷰이름
     * @param {BaseEntity} [p_baseEntity] 기본 엔티티, 컬럼 추가시 기본엔티티에 추가 된다.
     */
    function MetaView(p_name, p_baseEntity) {
        _super.call(this, p_name);

        var _baseEntity;
        var columns = new MetaViewColumnCollection(this);

        /**
         * 기본 엔티티  
         * null 으로 undefined  
         * 
         * @member {MetaViewColumnCollection} MetaView#_baseEntity
         * @protected
         */
        Object.defineProperty(this, '_baseEntity', {
            get: function() { return _baseEntity; },
            set: function(nVal) { 
                if (nVal === null || typeof nVal === 'undefined') {
                    _baseEntity = undefined;    // init
                    return;
                }
                if (!(nVal instanceof BaseEntity)) throw new ExtendError(/EL05434/, null, [this.constructor.name]);
                _baseEntity = nVal;
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 메타 뷰 이름
         * 
         * @member {string} MetaView#viewName
         */
        Object.defineProperty(this, 'viewName', {
            get: function() { return this._name; },
            set: function(nVal) { 
                if (nVal === this.viewName) return;
                if (typeof nVal !== 'string') throw new ExtendError(/EL05431/, null, [typeof nVal]);
                this._name = nVal;
            },
            configurable: false,
            enumerable: true
        });

        /**
         * 뷰의 컬럼 컬렉션
         * 
         * @member {MetaViewColumnCollection} MetaView#columns
         */
        Object.defineProperty(this, 'columns', {
            get: function() { return columns; },
            set: function(nVal) { 
                if (!(nVal instanceof MetaViewColumnCollection)) throw new ExtendError(/EL05432/, null, [this.constructor.name]);
                if (this.rows.count > 0) throw new ExtendError(/EL05433/, null, [this.constructor.name, this.rows.count ]);
                columns = nVal;
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
    MetaView.prototype.getObject = function(p_mode, p_context) {
        var obj = _super.prototype.getObject.call(this, p_mode, p_context);
        var vOpt = p_mode || 0;
        // var owned = p_context ? [].concat(p_context, obj) : [].concat(obj);
        // var origin = p_guidRootObj ? p_guidRootObj : obj;

        obj['viewName'] = this.viewName;
        if (vOpt < 2 && vOpt > -1 && this._baseEntity) {
            obj['_baseEntity'] = MetaRegistry.createReferObject(this._baseEntity);
        }
        return obj;                  
    };

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.  
     * 
     * @param {object} p_guidObj guid 타입의 객체
     * @param {object} [p_guidRootObj] 현재 객체를 설정하는 원본 guid 객체  
     * 기본값은 p_guidObj 객체와 동일
     */
    MetaView.prototype.setObject  = function(p_guidObj, p_guidRootObj) {
        _super.prototype.setObject.call(this, p_guidObj, p_guidRootObj);
        
        var origin = p_guidRootObj ? p_guidRootObj : p_guidObj;
        var metaSet;
        var baseEntity;

        if(p_guidObj['_metaSet']) {
            metaSet = MetaRegistry.findSetObject(p_guidObj['_metaSet']['$ref'], origin);
            if (!metaSet) throw new ExtendError(/EL05435/, null, [p_guidObj['_metaSet']['$ref']]);
            this._metaSet = metaSet;
        }
        // this.metaSet = mObj.metaSet;
        if (p_guidObj['_baseEntity']) {
            baseEntity = MetaRegistry.findSetObject(p_guidObj['_baseEntity']['$ref'], origin);
            if (!baseEntity) throw new ExtendError(/EL05436/, null, [p_guidObj['_baseEntity']['$ref']]);
            // this.__SET$_baseEntity(baseEntity, this);
            this._baseEntity = baseEntity;
        } 
        this.columns.setObject(p_guidObj['columns'], origin);
        this.rows.setObject(p_guidObj['rows'], origin);
        this.viewName = p_guidObj['viewName'];
    };
    /**
     * 객체 복제  
     * override  
     * 
     * @returns {MetaView}
     */
    MetaView.prototype.clone  = function() {
        var clone = new MetaView(this.viewName, this._baseEntity);  // 뷰를 복제하면 참조타입 >> 엔티티타입으로 변경

        for(var i = 0; i < this.columns.count; i++) {
            if (this.columns[i]._entity === this) clone.columns.add(this.columns[i].clone(clone));
            else clone.columns.add(this.columns[i].clone());
        }

        for(var k = 0; k < this.rows.count; k++) {
            clone.rows.add(this.rows[k].clone(clone));
        }
        return clone;
    };
    
    /**
     * 엔티티를 복사한다. (조회 후 복제)  
     * 
     * @param {overload}            type1
     * @param {function}            type1.p_filter 로우 필터 함수
     * @param {arguments<string>}   type1.p_args 컬럼명
     * @param {overload}            type2
     * @param {string}              type2.p_columns 컬럼명
     */
    MetaView.prototype.copy  = function(p_filter, p_args) {
        var args = Array.prototype.slice.call(arguments);
        // var _this = this;
        var items = [];
        var callback = null;
        var entity = new MetaView(this.viewName, this);
        // var orignal = this.clone();

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

export default MetaView;
export { MetaView };