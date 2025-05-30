/**** collection-meta-view.js | MetaViewCollection ****/
//==============================================================
import { ExtendError }              from 'logic-core';
import { Util }                     from 'logic-core';
import { Type }                     from 'logic-core';
import { PropertyCollection }       from 'logic-core';
import { MetaObject }               from 'logic-core';
import { BaseEntity }               from './base-entity.js';
import { MetaView }                 from './meta-view.js';

var MetaViewCollection  = (function (_super) {
    /**
     * 뷰 엔티티 컬렉션
     * 
     * @constructs MetaViewCollection
     * @extends PropertyCollection
     * @param {object} p_owner 소유자 
     */
    function MetaViewCollection(p_owner) {    // COVER:
        _super.call(this, p_owner);

        var _baseType = MetaView;

        /**
         * 기본 생성 타입
         * 
         * @member {MetaView} MetaViewCollection#_baseType
         */
        Object.defineProperty(this, '_baseType', {
            get: function() { return _baseType; },
            set: function(nVal) { 
                if (!(typeof nVal === 'function')) throw new ExtendError(/EL05441/, null, [typeof nVal]);
                if (!(Type.isProtoChain(nVal, MetaView))) throw new ExtendError(/EL05442/, null, [this.constructor.name]);
                _baseType = nVal;
            },
            configurable: false,
            enumerable: true
        });

        this._elemType = MetaView;   // 컬렉션타입 설정

        // 예약어 등록 
        this.$KEYWORD = ['_baseType', 'existViewName'];
    }
    Util.inherits(MetaViewCollection, _super);

    MetaViewCollection._NS = 'Meta.Entity';    // namespace
    MetaViewCollection._PARAMS = ['_owner'];  // creator parameter

    /**
     * 컬렉션에 MetaView 객체를 추가합니다.
     * 
     * @param {string | MetaView} p_view 추가할 뷰
     * @param {BaseColumnCollection} [p_baseEntity] 기본 컬럼 컬렉션
     * @returns {number} 추가된 뷰의 인덱스입니다.
     * 
     * @example
     *  - string                    : 생성후   string      이름으로 등록 
     *  - string, colltion          : 생성후   string      이름으로  등록 (collection보냄)
     *  - entityView                :         entityView  이름으로 등록
     *  - entityView, collection    :         entityView  이름으로 등록 (collection보냄) => 오류발생
     */
    MetaViewCollection.prototype.add  = function(p_view, p_baseEntity) {    // COVER:
        var view;
        var key;

        if (p_view instanceof MetaView && p_baseEntity) {
            throw new ExtendError(/EL05443/, null, []);
        }
        if (p_baseEntity && !(p_baseEntity instanceof BaseEntity)) {
            throw new ExtendError(/EL05444/, null, []);
        }

        if (typeof p_view === 'string') {      
            key  = p_view;
            view = new this._baseType(key, p_baseEntity);
            if (this._owner instanceof MetaObject && this._owner.instanceOf('MetaSet')) view._metaSet = this._owner;
            // view._metaSet = this._owner;
        } else if (p_view instanceof MetaView) {
            key  = p_view.viewName;
            view = p_view;
            if (this._owner instanceof MetaObject && this._owner.instanceOf('MetaSet')) p_view._metaSet = this._owner;
            // p_view._metaSet = this._owner;
        } else throw new ExtendError(/EL05445/, null, [typeof p_view]);

        if (this.existViewName(key)) throw new ExtendError(/EL05446/, null, [key]);

        return _super.prototype.add.call(this, key, view);
    };

    /**
     * 메타뷰가 존재하는지 확인합니다.
     * 
     * @param {string} p_key 뷰이름
     * @returns {boolean} 존재여부
     */
    MetaViewCollection.prototype.existViewName  = function(p_key) {
        for (var i = 0; this.count > i; i++) {
            if (this[i].viewName === p_key) return true;
        }
        return false;
    };

    return MetaViewCollection;

}(PropertyCollection));

export default MetaViewCollection;
export { MetaViewCollection };