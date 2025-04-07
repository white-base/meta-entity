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
     * @param name - 객체 컬럼의 이름입니다.
     * @param entity - 이 컬럼을 소유하는 `BaseEntity` 객체입니다.
     * @param prop - 객체 컬럼의 속성입니다.
     */
    constructor(name: string, entity: BaseEntity, prop: object);
    
    /**
     * 객체의 속성을 로딩합니다.
     * 
     * @param prop - 로드할 속성 객체입니다.
     * 
     * @example
     * objectColumn._load({ key: 'value' }); // 속성을 로드하여 컬럼에 적용
     */
    _load(prop: object): void;    // TODO: 타입변환

    /**
     * 현재 `ObjectColumn` 객체를 직렬화된 GUID 타입의 객체로 변환합니다.  
     * 직렬화 과정에서 순환 참조는 `$ref` 값으로 대체됩니다.  
     * 
     * @param vOpt - 직렬화 옵션입니다.  
     *   - `0`: 참조 구조로 변환 (`_guid`와 `$ref` 포함)  
     *   - `1`: 중복 구조로 변환 (`_guid`와 `$ref` 포함)  
     *   - `2`: 비침조 구조로 변환 (`_guid`와 `$ref` 제외)  
     * @param owned - 현재 객체를 소유하는 상위 객체들입니다. 객체 또는 객체 배열을 받을 수 있습니다.
     * @returns 직렬화된 객체입니다.
     * 
     * @example
     * const serialized = objectColumn.getObject(1); // 참조 구조로 직렬화된 객체 가져오기
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * 직렬화된 GUID 타입의 객체를 현재 `ObjectColumn` 객체에 설정합니다.  
     * 이 과정에서 객체가 초기화됩니다.  
     * 
     * @param oGuid - 직렬화된 GUID 타입의 객체입니다.
     * @param origin - 현재 객체를 설정하는 원본 객체입니다. 기본값은 `oGuid`입니다.
     * 
     * @example
     * objectColumn.setObject(serializedObject); // 직렬화된 객체를 현재 컬럼에 설정
     */
    setObject(oGuid: object, origin?: object): void;    

    /**
     * `ObjectColumn` 객체를 복제하여 새로운 객체를 생성합니다.
     * 
     * @param entity - 복제할 엔티티입니다. 지정하지 않으면 현재 엔티티로 복제됩니다.
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