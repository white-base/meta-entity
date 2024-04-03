import PropertyCollection           = require("logic-core/collection-property");
import MetaView           = require("./meta-view");
import BaseColumnCollection = require("./base-column-collection");

/**
 * 뷰 엔티티 컬렉션
 */
declare class MetaViewCollection extends PropertyCollection {

    /**
     * 뷰 엔티티 컬렉션
     * @param owner 소유자
     */
    constructor(owner: object);

    /**
     * 기본 생성 타입
     */
    _baseType: MetaView;

    /**
     * 뷰 컬렉션에 뷰 엔티티를 추가한다.
     * @param view 추가할 뷰
     * @param baseEntity 기본 컬럼 컬렉션
     * @example
     *  - string                    : 생성후   string      이름으로 등록 
     *  - string, colltion          : 생성후   string      이름으로  등록 (collection보냄)
     *  - entityView                :         entityView  이름으로 등록
     *  - entityView, collection    :         entityView  이름으로 등록 (collection보냄) => 오류발생 
     */
    add(view: string | MetaView, baseEntity: BaseColumnCollection): number;

    /**
     * 메타뷰가 존재하는지 확인합니다.
     * @param key 뷰이름
     */
    existViewName(key: string): boolean;

}

export = MetaViewCollection;