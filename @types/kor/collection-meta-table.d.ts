import PropertyCollection       = require("logic-core/collection-property");
// import T                        = require("logic-core/T");

import MetaTable                = require("./meta-table");

/**
 * 메타 테이블 컬렉션
 */
declare class MetaTableCollection extends PropertyCollection {

    /**
     * 메타 테이블 컬렉션
     * @param owner 소유자
     */
    constructor(owner: object);

    /**
     * 테이블 컬렉션에 엔티티 추가
     * @param table 추가할 메타테이블
     */
    add(table: string | MetaTable): number;

    /**
     * 테이블명 존재 유무
     * @param key 테이블명
     */
    existTablename(key: string): boolean;
}

export = MetaTableCollection;