import type { MetaElement }         from 'logic-core/ko';
import type { BaseEntity }          from './base-entity.d.ts';

/**
 * 컬럼의 최상위 추상 클래스입니다.   
 * 컬럼명, 별칭, 기본값, 현재값 등의 속성을 포함하며, 유효성 검사 및 객체 직렬화 기능을 제공합니다.  
 */
declare abstract class BaseColumn extends MetaElement {
    
    /**
     * `BaseColumn` 객체를 생성합니다.
     * 
     * @param name - 컬럼의 이름
     * @param entity - 컬럼을 소유한 엔티티
     */
    constructor(name: string, entity: BaseEntity);

    /**
     * 이 컬럼의 고유 키를 나타냅니다.
     */
    $key: string;

    /**
     * 컬럼 value 의 내부값입니다.  
     * `value`와 연동되며 setter 또는 getter 동작에 따라 저장되는 값입니다.  
     */
    $value: any;

    /**
     * 컬럼의 별칭을 나타냅니다.  
     */
    $alias: string;

    /**
     * 컬럼을 소유한 엔티티입니다.
     */
    protected _entity: BaseEntity;

    /**
     * 허용된 'value'의 타입 배열입니다.
     */
    protected _valueTypes: any[];

    /**
     * 컬럼의 이름입니다.
     */
    columnName: string;

    /**
     * 컬럼의 별칭입니다.
     */
    alias: string;

    /**
     *  컬럼 값의 기본값입니다. 컬럼이 초기화될 때 사용됩니다.
     */
    default: string | number | boolean;

    /**
     * 컬럼 설명입니다.
     */
    caption: string;

    /**
     * 컬럼의 현재 값을 가져오거나 설정합니다.
     */
    value: any;     // TODO: default 와 일치해야할듯

    /**
     * 컬럼의 현재 값을 가져오거나 설정합니다.
     */
    val: any;

    /**
     * 객체를 GUID 타입의 객체 리터럴로 변환합니다.
     * 
     * @param mode - 가져오기 모드  
     * mode=0 : 참조 구조(_guid:Yes, $ref:Yes)  
     * mode=1 : 중복 구조(_guid:Yes, $ref:Yes)  
     * mode=2 : 비침조 구조(_guid:No,  $ref:No)   
     * @param context - 현재 객체를 포함(소유)하는 상위 객체
     * @returns GUID 타입의 객체 리터럴
     * 
     * @example
     * const serialized = column.getObject(0);
     */
    getObject(mode?: number, context?: object | object[]): object;

    /**
     * GUID 타입의 객체 리터럴을 인스턴스 객체로 변환하여 설정합니다.
     * 
     * @param guidObj - 설정할 GUID 타입의 객체 리터럴
     * @param guidRootObj - 변환 과정에서 참조되는 초기 GUID 리터럴 객체  
     * 
     * @example
     * column.setObject(serializedObject);
     */
    setObject(guidObj: object, guidRootObj?: object): void;

    /**
     * 현재 컬럼 객체의 복제본을 생성합니다. 반드시 하위 클래스에서 구현해야 합니다.  
     * 
     * @returns 현재 객체의 복제본입니다.
     */
    abstract clone(): this;
}

export default BaseColumn;
export { BaseColumn };