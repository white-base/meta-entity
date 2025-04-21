import type { PropertyCollection }  from 'logic-core/ko';

/**
 * 컬럼 컬렉션의 최상위 추상 클래스입니다.  
 * 컬럼을 추가하거나 제거하고, 별칭(alias) 또는 컬럼명을 기준으로 존재 여부를 검사하는 기능을 제공합니다.  
 * 
 * @extends PropertyCollection
 */
declare abstract class BaseColumnCollection<T> extends PropertyCollection<T> {
    
    /**
     * 컬럼 기본 컬렉션을 생성합니다.
     * 
     * @param owner 컬렉션의 소유자
     * @param baseType 기본 컬럼 타입
     */
    constructor(owner: object, baseType: T);

    /**
     * 기본 컬럼 생성자 타입입니다.
     * 
     * @protected
     */
    _baseType: T;

    /**
     * 컬렉션의 소유자가 엔티티(BaseEntity)인지 여부를 반환합니다.  
     * 
     * @protected
     * @returns 엔티티에 소속된 경우 true입니다.
     */
    _ownerIsEntity(): boolean;

    
    /**
     * 컬렉션 인덱스에 대한 프로퍼티 기술자를 반환합니다.
     * 
     * @param idx 인덱스
     * @param enumerable 열거 가능 여부 (기본: true)
     * @returns 컬럼 접근을 위한 프로퍼티 기술자입니다.
     */
    _getPropDescriptor(idx: number, enumerable: boolean): PropertyDescriptor;
    
    /**
     * 컬렉션에 컬럼을 추가합니다.
     * 
     * @param name - 컬럼명
     * @param value - 컬럼값
     * @returns 추가된 컬럼의 인덱스입니다.
     * @throws 동일한 이름 또는 별칭이 존재할 경우 예외가 발생합니다.
     */
    add(name: string, value: any): number;

    /**
     * 지정한 인덱스의 컬럼을 컬렉션에서 삭제합니다.
     * 
     * @param index - 삭제할 컬럼의 인덱스
     * @returns 삭제 성공 여부입니다.
     * @throws 컬렉션에 로우가 존재할 경우 예외가 발생합니다.
     */
    removeAt(index: number): boolean;

    /**
     * 컬렉션에 있는 모든 컬럼 값을 기본 값으로 초기화합니다.
     */
    initValue(): void;

    /**
     * 컬렉션에 별칭 이름(키)이 존재하는지 검사합니다.
     * 
     * @param key - 별칭 이름
     * @returns 별칭 이름 존재 여부입니다.
     */
    existAlias(key: string): boolean;

    /**
     * 컬럼명이 컬렉션에 존재하는지 확인합니다.
     * 
     * @param key - 컬럼명
     * @returns 컬럼 이름 존재 여부입니다.
     */
    existColumnName(key: string): boolean;

    /**
     * 별칭(alias)에 해당하는 컬럼을 반환합니다.
     * 
     * @param key - 별칭 이름
     * @returns 별칭에 해당하는 컬럼 객체입니다. 존재하지 않으면 `undefined`입니다.
     */
    alias(key: string): T | undefined;

    /**
     * 값을 기반으로 컬럼을 생성하여 추가합니다.  
     * 반드시 하위 클래스에서 구현해야 합니다.  
     * 
     * @param args - 인자
     */
    abstract addValue(...args): void;
}

export default BaseColumnCollection;
export { BaseColumnCollection };