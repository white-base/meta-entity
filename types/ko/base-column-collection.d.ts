import type { PropertyCollection }  from 'logic-core/ko';
import type { BaseColumn }          from './base-column.d.ts';

/**
 * 컬럼 기본 컬렉션을 나타내는 추상 클래스입니다.  
 * 이 클래스는 다양한 컬럼들을 관리하고 조작하는 기능을 제공합니다.  
 * @extends PropertyCollection
 */
declare abstract class BaseColumnCollection<T> extends PropertyCollection<T> {

    /**
     * 컬럼 기본 컬렉션을 생성합니다.
     * 
     * @param owner 컬렉션의 소유자입니다.
     * @param baseType 기본 컬럼 타입입니다.
     */
    constructor(owner: object, baseType: BaseColumn);

    /**
     * 기본 컬럼 타입을 저장합니다.
     * 
     * @protected
     */
    _baseType: BaseColumn;

    /**
     * this._owner가 엔티티인지 여부를 확인합니다.
     * 
     * @protected
     * @returns 엔티티 여부를 나타내는 불리언 값입니다.
     */
    _ownerIsEntity(): boolean;

    
    /**
     * 특정 인덱스의 속성 디스크립터를 설정하는 내부 메서드입니다.
     * 
     * @param idx 인덱스 번호
     * @param enumerable 열거 가능 여부
     */
    _getPropDescriptor(idx: number, enumerable: boolean): PropertyDescriptor;
    
    /**
     * 컬럼을 컬렉션에 추가합니다.
     * 
     * @param name - 컬럼 이름입니다.
     * @param value - 컬럼 값입니다.
     * @returns 추가된 컬럼의 인덱스입니다.
     */
    add(name: string, value: any): number;

    /**
     * 지정한 인덱스의 컬럼을 컬렉션에서 삭제합니다.
     * 
     * @param index - 삭제할 컬럼의 인덱스입니다.
     * @returns 삭제 성공 여부입니다.
     */
    removeAt(index: number): boolean;

    /**
     * 컬렉션에 있는 모든 컬럼 값을 기본 값으로 초기화합니다.
     */
    initValue(): void;

    /**
     * 컬렉션에 별칭 이름(키)이 존재하는지 검사합니다.
     * 
     * @param key - 별칭 이름입니다.
     * @returns 별칭 이름 존재 여부입니다.
     */
    existAlias(key: string): boolean;

    /**
     * 컬렉션에 컬럼 이름(키)이 존재하는지 검사합니다.
     * 
     * @param key - 컬럼 이름입니다.
     * @returns 컬럼 이름 존재 여부입니다.
     */
    existColumnName(key: string): boolean;

    /**
     * 별칭에 대한 컬럼 객체를 얻습니다.
     * 
     * @param key - 별칭 이름입니다.
     * @returns 별칭에 해당하는 컬럼 객체입니다. 존재하지 않으면 `undefined`입니다.
     */
    alias(key: string): BaseColumn | undefined;

    /**
     * 값을 추가하는 추상 메서드입니다. 서브 클래스에서 구체적인 구현을 제공해야 합니다.
     * 
     * @param args - 추가할 값들입니다.
     */
    abstract addValue(...args): void;
}

export default BaseColumnCollection;
export { BaseColumnCollection };