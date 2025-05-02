import type { PropertyCollection }      from 'logic-core/ko';
import type { MetaTable }               from './meta-table.d.ts';

/**
 * `MetaTableCollection` 클래스는 메타 테이블을 관리하는 컬렉션을 정의합니다.  
 * 이 클래스는 메타 테이블 객체를 추가하고, 컬렉션에 있는 테이블의 존재 여부를 확인하는 기능을 제공합니다.  
 */
type MetaTableCollection<T = MetaTable> = {

    /**
     * 컬렉션 추가에 사용되는 메타 테이블의 기본 생성자입니다.
     */
    _baseType: typeof MetaTable;

    /**
     * 테이블명을 문자열로 지정하거나 MetaTable 인스턴스를 전달하여 컬렉션에 추가합니다.
     * 
     * @param table - 추가할 메타 테이블 또는 테이블명
     * @returns 추가된 테이블의 인덱스
     * 
     * @example
     * const index = collection.add("users"); // 문자열(테이블명)으로 메타 테이블 추가
     * const index = collection.add(new MetaTable("products")); // `MetaTable` 객체로 추가
     */
    add(table: string | MetaTable): number;

    /**
     * 지정된 테이블명이 컬렉션에 존재하는지 여부를 확인합니다.
     * 
     * @param key - 확인할 테이블명
     * @returns 테이블명이 컬렉션에 존재하면 `true`, 그렇지 않으면 `false`를 반환합니다.
     * 
     * @example
     * const exists = collection.existTablename("users"); // 테이블명 "users"의 존재 여부 확인
     */
    existTablename(key: string): boolean;

} & PropertyCollection<T>;

export interface MetaTableCollectionConstructor {
    /**
     * `MetaTableCollection` 객체를 생성합니다.  
     * 이 객체는 메타 테이블을 관리하는 컬렉션을 생성합니다.  
     * 
     * @param owner - 이 컬렉션의 소유자 객체
     */
    new <T = MetaTable>(owner: object): MetaTableCollection<T>;
}
  
declare const MetaTableCollection: MetaTableCollectionConstructor;

export default MetaTableCollection;
export { MetaTableCollection };