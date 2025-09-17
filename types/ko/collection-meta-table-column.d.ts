import type { BaseColumnCollection }    from './base-column-collection.d.ts';
import type { BaseColumn }              from './base-column.d.ts';
import type { MetaColumn }              from './meta-column.d.ts';

/**
 * `MetaTableColumnCollection` 클래스는 테이블의 컬럼을 관리하는 컬렉션을 정의합니다.  
 * 이 클래스는 컬럼의 추가 및 관리 기능을 제공합니다.  
 */
type MetaTableColumnCollection<T> = {

    /**
     * 컬럼을 컬렉션에 추가합니다.  
     * 컬럼은 컬럼명 또는 `BaseColumn` 객체일 수 있습니다.  
     * 
     * @param column - 추가할 컬럼 또는 컬럼명
     * @param property - 컬럼 속성 (선택 사항, `column`이 문자열일 때만 사용)
     * @returns 추가된 컬럼의 인덱스입니다.
     * 
     * @example
     * const index = collection.add("user_id"); // 문자열(컬럼명)으로 추가
     * const index = collection.add(new BaseColumn("user_name", entity)); // BaseColumn 객체로 추가
     */
    add(column: string | BaseColumn, property?: object): number;

    /**
     * 이름과 값을 사용하여 컬렉션에 새 컬럼을 추가합니다. 컬럼은 내부에서 생성됩니다.
     * 
     * @param name - 추가할 컬럼명
     * @param value - 컬럼의 초기 값 (문자열, 숫자 또는 불리언)
     * @returns 추가된 `BaseColumn` 객체입니다.
     * 
     * @example
     * const column = collection.addValue("user_age", 30); // 이름과 값으로 컬럼 추가
     */
    addValue(name: string, value: string | number | boolean): BaseColumn; 

} & BaseColumnCollection<T>;

export interface MetaTableColumnCollectionConstructor {
    /**
     * `MetaTableColumnCollection` 객체를 생성합니다.  
     * 이 객체는 테이블의 컬럼을 관리하는 컬렉션을 생성합니다.  
     * 
     * @param owner - 이 컬렉션의 소유자 객체
     */
    new <T = MetaColumn>(owner: object): MetaTableColumnCollection<T>;
}
  
declare const MetaTableColumnCollection: MetaTableColumnCollectionConstructor;

export default MetaTableColumnCollection;
export { MetaTableColumnCollection };