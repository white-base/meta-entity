import type { EventEmitter }        from 'logic-core/ko';
import type { BaseColumn }          from './base-column.d.ts';
import type { BaseEntity }          from './base-entity.d.ts';
import type { ValueType }           from './T.d.ts';

/**
 * `MetaColumn` 클래스는 데이터 컬럼을 정의하며, 해당 컬럼에 대한 메타 정보를 관리합니다.  
 * 이 클래스는 컬럼의 값, 제약 조건, 이벤트 등을 설정하고 처리할 수 있는 기능을 제공합니다.  
 */
declare class MetaColumn extends BaseColumn {

    /**
     * `MetaColumn` 객체를 생성합니다.
     * 
     * @param name - 컬럼의 이름
     * @param entity - 이 컬럼이 소속된 엔티티
     * @param property - 컬럼의 추가적인 속성 객체 (옵션)
     * 
     * @example
     * const column = new MetaColumn('name', entity, { required: true });
     */
    constructor(name: string, entity?: BaseEntity, property?: object);   // TODO: prop.. 타입 분리

    /**
     * 이벤트 객체로, 컬럼 값의 변경과 같은 이벤트를 처리합니다.
     */
    private $event: EventEmitter;

    /**
     * 컬럼의 값에 직접 접근을 제한합니다.  
     * 이 속성은 내부에서 값의 설정과 변경을 제어합니다.  
     * 
     * @override
     */
    $value: ValueType;

    /**
     * 컬럼 값의 필수 여부를 설정합니다.  
     * 값이 반드시 존재해야 하는 경우 `true`, 그렇지 않은 경우 `false`입니다.  
     */
    required: boolean;

    /**
     * 컬럼의 제약 조건을 설정합니다.  
     * 제약 조건은 객체 또는 함수 형태로 설정할 수 있습니다.  
     */
    constraints: (object | Function)[];   // TODO: 확인 필요

    /**
     * 컬럼의 값을 가져오거나 설정합니다.  
     * - `getter`: 값이 정의된 경우 반환합니다.  
     * - `setter`: 값을 설정하거나 변경합니다.  
     * get 우선순위 : 1. getter 있는 경우, 2. 내부값 $value   
     * set 우선순위 : 1. setter 있는 경우, 2. setter 리턴값이 없는 경우  
     */
    value: ValueType;

    /**
     * 컬럼 값의 getter 함수입니다.
     * 
     * @returns 컬럼의 현재 값입니다.
     * 
     * @example
     * const value = column.getter(); // 컬럼 값 가져오기
     */
    getter: () => ValueType;

    /**
     * 컬럼 값의 setter 함수입니다.
     * 
     * @param value - 설정할 값
     * 
     * @example
     * column.setter('newValue'); // 컬럼 값 설정
     */
    setter: (value: ValueType) => void;

    /**
     * 컬럼 값이 변경될 때 발생하는 이벤트입니다.
     * 
     * @event MetaColumn#onChanged
     * @param newVal - 변경될 새로운 값
     * @param oldVal - 이전 값
     * @param _this - 이벤트를 발생시킨 객체
     * 
     * @example
     * column.onChanged = function(newVal, oldVal, _this) { 
     *  console.log('Value changed'); 
     * };
     */
    onChanged: (newVal: ValueType, oldVal: ValueType, _this: this) => void;

    /**
     * 값이 변경될 때 호출되는 내부 메서드입니다.
     * 
     * @param nVal - 변경될 새로운 값
     * @param oVal - 기존 값
     * @listens MetaColumn#onChanged
     */
    protected _onChanged(nVal: ValueType, oVal: ValueType): void;

    /**
     * 컬럼의 속성을 로드합니다.
     * 
     * @param property - 로드할 속성 객체
     * 
     * @example
     * column._load({ required: true, constraints: [...] });
     */
    protected _load(property: object): void;    // TODO: object 타입 분리 필요

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
     * const serialized = column.getObject(2); // 비침조 구조로 직렬화된 객체 가져오기
     */
    getObject(mode?: number, context?: object | object[]): object;

    /**
     * GUID 타입의 객체 리터럴을 인스턴스 객체로 변환하여 설정합니다.
     * 
     * @param guidObj - 설정할 GUID 타입의 객체 리터럴
     * @param guidRootObj - 변환 과정에서 참조되는 초기 GUID 리터럴 객체  
     * 
     * @example
     * column.setObject(serializedObject); // 직렬화된 객체를 현재 컬럼에 설정
     */
    setObject(guidObj: object, guidRootObj?: object): void;

    /**
     * 현재 컬럼을 복제하여 새로운 `MetaColumn` 객체를 생성합니다.
     * 
     * @param entity - 복제할 대상의 엔티티 (옵션)
     * @returns 복제된 `MetaColumn` 객체입니다.
     * 
     * @example
     * const clone = column.clone(entity);
     */
    clone(entity?: BaseEntity): this;

    /**
     * 제약 조건을 추가합니다.
     * 
     * @param callback - 제약 조건을 검사하는 콜백 함수
     */
    addConstraint(callback: Function): void;

    /**
     * 제약 조건을 추가합니다.
     * 
     * @param regex - 적용할 정규 표현식
     * @param msg - 정규 표현식 실패 시 표시할 메시지
     * @param code - 정규 표현식 실패 시 코드 (옵션)
     * @param condition - 제약 조건의 성공/실패 여부를 결정하는 조건 (기본값은 `true`)
     * 
     * @example
     * column.addConstraint(/^\d+$/, 'Value must be a number');
     */
    addConstraint(regex: RegExp, msg: string, code?: string, condition?: boolean): void;

    /**
     * 속성의 값이 유효한지 검사합니다.  
     * `required` 및 `constraints`를 기준으로 유효성을 검사합니다.  
     * 
     * @param value - 검사할 값
     * @returns 유효하지 않은 경우 객체를 반환하며, 유효한 경우 `undefined`를 반환합니다.
     * 
     * @example
     * const validationResult = column.valid('valueToCheck');
     */
    valid(value: ValueType): object | undefined;
}

export default MetaColumn;
export { MetaColumn };