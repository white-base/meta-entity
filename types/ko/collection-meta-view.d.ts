import {PropertyCollection}           from "logic-core";
import MetaView           = require("./meta-view");
import BaseColumnCollection = require("./base-column-collection");

/**
 * `MetaViewCollection` 클래스는 뷰 엔티티를 관리하는 컬렉션을 정의합니다.
 * 이 클래스는 메타 뷰를 추가하고, 컬렉션에 있는 뷰의 존재 여부를 확인하는 기능을 제공합니다.
 */
declare class MetaViewCollection extends PropertyCollection {

    /**
     * `MetaViewCollection` 객체를 생성합니다.
     * 이 객체는 뷰 엔티티를 관리하는 컬렉션을 생성합니다.
     * 
     * @param owner - 이 컬렉션의 소유자 객체를 지정합니다.
     */
    constructor(owner: object);

    /**
     * 기본 생성 타입으로 사용되는 `MetaView` 객체입니다.
     * 이 속성은 뷰 엔티티의 기본 타입을 정의합니다.
     */
    _baseType: MetaView;

    /**
     * 뷰 엔티티를 컬렉션에 추가합니다. 추가할 뷰는 뷰 이름(문자열) 또는 `MetaView` 객체일 수 있습니다.
     *  - string                    : 생성후   string      이름으로 등록 
     *  - string, colltion          : 생성후   string      이름으로  등록 (collection보냄)
     *  - entityView                :         entityView  이름으로 등록
     *  - entityView, collection    :         entityView  이름으로 등록 (collection보냄) => 오류발생 
     * 
     * @param view - 추가할 뷰입니다. 뷰 이름(문자열) 또는 `MetaView` 타입의 객체를 받을 수 있습니다.
     * @param baseEntity - 기본 컬럼 컬렉션입니다. `BaseColumnCollection` 타입의 객체입니다.
     * @returns 추가된 뷰의 인덱스입니다. 인덱스는 컬렉션 내에서 뷰의 위치를 나타냅니다.
     * 
     * @example
     * const index1 = collection.add("viewName", baseCollection); // 문자열(뷰 이름)으로 뷰 추가
     * const index2 = collection.add(new MetaView("viewName"), baseCollection); // `MetaView` 객체로 뷰 추가
     */
    add(view: string | MetaView, baseEntity: BaseColumnCollection): number;

    /**
     * 지정된 뷰 이름이 컬렉션에 존재하는지 여부를 확인합니다.
     * 
     * @param key - 확인할 뷰 이름입니다.
     * @returns 뷰 이름이 컬렉션에 존재하면 `true`, 그렇지 않으면 `false`를 반환합니다.
     * 
     * @example
     * const exists = collection.existViewName("viewName"); // 뷰 이름 "viewName"의 존재 여부 확인
     */
    existViewName(key: string): boolean;

}

export = MetaViewCollection;