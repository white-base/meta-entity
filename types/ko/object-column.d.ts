import type { BaseColumn }          from './base-column.d.ts';
import type { BaseEntity }          from './base-entity.d.ts';

/**
 * `ObjectColumn` 클래스는 `BaseColumn`을 상속하여 객체 속성을 다루는 컬럼을 정의합니다.  
 * 이 클래스는 컬럼의 속성 로딩, 직렬화 및 설정, 그리고 컬럼 복제 기능을 제공합니다.  
 */
declare class ObjectColumn extends BaseColumn {

    /**
     * `ObjectColumn` 객체를 생성합니다.
     * 
     * @param name - 객체 컬럼의 이름
     * @param entity - 이 컬럼을 소유하는 엔티티
     * @param prop - 객체 컬럼의 속성
     */
    constructor(name: string, entity?: BaseEntity, prop?: object);  // TODO: prop.. 타입 분리
    
    /**
     * 객체의 속성을 로딩합니다.
     * 
     * @param prop - 로드할 속성 객체
     * 
     * @example
     * objectColumn._load({ key: 'value' }); // 속성을 로드하여 컬럼에 적용
     */
    protected _load(prop: object): void;    // TODO: 타입변환

    /**
     * 객체를 GUID 타입의 객체 리터럴로 반환합니다.
     * 
     * @param mode - 가져오기 모드  
     * mode=0 : 참조 구조(_guid:Yes, $ref:Yes)  
     * mode=1 : 중복 구조(_guid:Yes, $ref:Yes)  
     * mode=2 : 비침조 구조(_guid:No,  $ref:No)   
     * @param context - 현재 객체를 포함(소유)하는 상위 객체
     * @returns GUID 타입의 객체 리터럴
     */
    getObject(mode?: number, context?: object | object[]): object;

    /**
     * GUID 타입의 객체 리터럴을 인스턴스 객체로 변환하여 설정합니다.
     * 
     * @param guidObj - 설정할 GUID 타입의 객체 리터럴
     * @param guidRootObj - 변환 과정에서 참조되는 초기 GUID 리터럴 객체  
     */
    setObject(guidObj: object, guidRootObj?: object): void;

    /**
     * `ObjectColumn` 객체를 복제하여 새로운 객체를 생성합니다.
     * 
     * @param entity - 복제할 엔티티 (지정하지 않으면 현재 엔티티)
     * @returns 복제된 `ObjectColumn` 객체입니다.
     * 
     * @example
     * const clone = objectColumn.clone(); // 현재 엔티티로 컬럼 복제
     * const clonedWithEntity = objectColumn.clone(newEntity); // 지정한 엔티티로 컬럼 복제
     */
    clone(entity?: BaseEntity): this;
}

export default ObjectColumn;
export { ObjectColumn };