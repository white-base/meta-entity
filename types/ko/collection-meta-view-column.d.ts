import type { BaseColumnCollection }    from './base-column-collection.d.ts';
import type { BaseEntity }              from './base-entity.d.ts';
import type { MetaColumn }              from './meta-column.d.ts';
import type { BaseColumn }              from './base-column.d.ts';

/**
 * `MetaViewColumnCollection` 클래스는 메타 뷰 컬럼을 관리하는 컬렉션을 정의합니다.  
 * 이 클래스는 메타 컬럼을 추가하고, 직렬화 및 참조 컬렉션을 관리하는 기능을 제공합니다.  
 */
declare class MetaViewColumnCollection<T> extends BaseColumnCollection<T> {

    /**
     * `MetaViewColumnCollection` 객체를 생성합니다.  
     * 이 객체는 메타 뷰의 컬럼을 관리하는 컬렉션을 생성합니다.  
     * 
     * @param owner - 이 컬렉션의 소유자 객체
     */
    constructor(owner: object);

    /**
     * 이 컬렉션이 참조하는 엔티티 목록입니다. 각 엔티티는 `BaseEntity` 타입입니다.
     * 
     * @example
     * const entities = collection._refEntities; // 엔티티 목록을 가져옴
     */
    protected _refEntities: BaseEntity[];

    /**
     * 객체를 GUID 타입의 객체 리터럴로 반환합니다.
     * 
     * @param mode - 가져오기 모드  
     * mode=0 : 참조 구조(_guid:Yes, $ref:Yes)  
     * mode=1 : 중복 구조(_guid:Yes, $ref:Yes)  
     * mode=2 : 비침조 구조(_guid:No,  $ref:No)   
     * @param context - 현재 객체를 포함(소유)하는 상위 객체
     * @returns GUID 타입의 객체 리터럴
     * 
     * @example
     * const serialized = collection.getObject(2); // 비침조 구조로 직렬화된 객체를 가져옴
     */
    getObject(mode?: number, context?: object | Array<object>): object;

    /**
     * 컬럼을 컬렉션에 추가하거나 설정합니다. 컬럼이 추가될 때, 참조 컬렉션과 관련된 동작이 수행됩니다.  
     * - `entity`가 있는 컬럼을 추가할 경우: 참조가 추가됩니다.  
     * - `entity`가 없는 컬럼을 추가할 경우: 자신을 소유자로 등록합니다.  
     * - 컬렉션에 컬럼이 존재할 경우: `columns` 객체는 무시되고, 리턴한 객체의 참조를 등록합니다.  
     * - 컬렉션에 컬럼이 없을 경우: 컬렉션에 `entity`를 설정합니다. 참조 재귀 호출 시 최상위만 등록됩니다.  
     * 
     * @param column - 추가할 컬럼 객체 또는 컬럼명
     * @param refCollection - 참조 컬렉션
     * @returns 추가된 컬럼의 인덱스입니다. 인덱스는 컬렉션 내에서 컬럼의 위치를 나타냅니다.
     * 
     * @example
     * const index = collection.add(new MetaColumn("price"), refCollection); // `MetaColumn` 객체로 컬럼 추가
     * const index = collection.add("quantity", refCollection); // 문자열(컬럼명)으로 컬럼 추가
     */
    add(column: MetaColumn | string, refCollection?: BaseColumnCollection<BaseColumn>): number;

    /**
     * 이름과 값으로 새 컬럼을 생성하고 컬렉션에 추가합니다.
     * 
     * @param name - 새로 추가할 컬럼명
     * @param value - 컬럼의 기본값 (문자열, 숫자 또는 불리언)
     * @param refCollection - 참조 컬렉션
     * @returns 새로 추가된 컬럼의 인덱스입니다.
     * 
     * @example
     * const index = collection.addValue("discount", 10, refCollection); // 이름과 값으로 컬럼 추가
     */
    addValue(name: string, value: string | number | boolean, refCollection?: BaseColumnCollection<BaseColumn>): MetaColumn;

    /**
     * 주어진 엔티티의 모든 컬럼을 컬렉션에 추가합니다.
     * 
     * @param entity - 추가할 컬럼이 포함된 엔티티
     * 
     * @example
     * collection.addEntity(entity); // 주어진 엔티티의 모든 컬럼을 추가
     */
    addEntity(entity: BaseEntity): void;
}

export default MetaViewColumnCollection;
export { MetaViewColumnCollection };