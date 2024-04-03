import BaseColumnCollection           = require("./base-column-collection");
import BaseColumn           = require("./base-column");

/**
 * 테이블 컬럼 컬렉션
 */
declare class MetaTableColumnCollection extends BaseColumnCollection {

    /**
     * 테이블 컬럼 컬렉션  
     * @param owner 
     */
    constructor(owner: object);

    /** @deprecated */
    add(name: string, value: any): number;

    /**
     * 테이블 컬렉션에 컬럼 추가
     * @param column 컬럼명, 매타컬럼
     */
    add(column: string | BaseColumn): number;

    /**
     * 이름과 값으로 컬렉션에 추가 (내부에서 생성)
     * @param name 컬럼명
     * @param value 값
     */
    addValue(name: string, value: string | number | boolean): BaseColumn; 

}

export = MetaTableColumnCollection;