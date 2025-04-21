import type { MetaObject }          from 'logic-core/ko';
import type { EventEmitter }        from 'logic-core/ko';
import type { BaseEntity }          from './base-entity.d.ts';

/**
 * `MetaRow` 클래스는 데이터 테이블의 각 행(row)을 나타내며, 데이터와 관련된 이벤트를 관리합니다.  
 * 이 클래스는 데이터의 추가, 수정, 삭제와 같은 작업을 처리하고 이벤트를 통해 변경 사항을 알립니다.  
 */
declare class MetaRow extends MetaObject {

    /**
     * `MetaRow` 객체를 생성합니다.
     * 
     * @param entity - 소속된 `BaseEntity` 객체
     * 
     * @example
     * const row = new MetaRow(entity);
     */
    constructor(entity: BaseEntity);

    /**
     * 내부 변수로, 행의 요소들을 저장합니다.
     * 
     * @private
     */
    $elements: any[];

    /**
     * 이벤트 객체로, 행의 데이터 변경과 같은 이벤트를 처리합니다.
     * 
     * @private
     */
    $event: EventEmitter;

    /**
     * 이 `MetaRow`가 소속된 엔티티를 반환합니다.
     * 
     * @readonly
     * @returns 이 행을 소유하는 `BaseEntity` 객체입니다.
     */
    _entity: BaseEntity;

    /**
     * 행의 요소 키를 반환합니다.
     * 
     * @readonly
     * @returns 요소의 키 배열입니다.
     */
    $keys: string[];

    /**
     * 행의 요소들을 목록을 반환합니다.
     * 
     * @readonly
     * @returns 요소들의 배열입니다.
     */
    _list: any[];

    /**
     * 행의 요소 개수를 반환합니다.
     * 
     * @readonly
     * @returns 요소의 총 개수입니다.
     */
    count: number;

    /**
     * 요소 변경 전 이벤트입니다.
     * 
     * @event MetaRow#onChanging
     * @param idx - 변경이 발생한 인덱스
     * @param nVal - 새로 변경될 값
     * @param oVal - 기존의 값.
     * @param _this - 이벤트를 발생시킨 객체
     * 
     * @example
     * row.onChanging = (idx, nVal, oVal, _this) => { console.log('Value is about to change'); };
     */
    onChanging: (idx: number, nVal: any, oVal: any, _this: this) => void;

    /**
     * 요소 변경 후 이벤트입니다.
     * 
     * @event MetaRow#onChanged
     * @param idx - 변경이 발생한 인덱스
     * @param nVal - 새로 변경된 값
     * @param oVal - 이전의 값
     * @param _this - 이벤트를 발생시킨 객체입니다.
     * 
     * @example
     * row.onChanged = (idx, nVal, oVal, _this) => { console.log('Value has changed'); };
     */
    onChanged: (idx: number, nVal: any, oVal: any, _this: this) => void;

    /**
     * 요소 변경 전 이벤트를 처리합니다.
     * 
     * @param idx - 변경이 발생한 인덱스
     * @param nVal - 새로 변경될 값
     * @param oVal - 기존의 값
     * @listens MetaRow#onChanging
     */
    _onChanging(idx: number, nVal: any, oVal: any): void;

    /**
     * 요소 변경 후 이벤트를 처리합니다.
     * 
     * @param idx - 변경이 발생한 인덱스
     * @param nVal - 새로 변경된 값
     * @param oVal - 이전의 값
     * @listens MetaRow#onChanged
     */
    _onChanged(idx: number, nVal: any, oVal: any): void;

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
     * const serialized = row.getObject(2); // 비침조 구조로 직렬화된 객체 가져오기
     */
    getObject(mode?: number, context?: object | object[]): object;

    /**
     * GUID 타입의 객체 리터럴을 인스턴스 객체로 변환하여 설정합니다.
     * 
     * @param guidObj - 설정할 GUID 타입의 객체 리터럴
     * @param guidRootObj - 변환 과정에서 참조되는 초기 GUID 리터럴 객체  
     * 
     * @example
     * row.setObject(serializedObject); // 직렬화된 객체를 현재 행에 설정
     */
    setObject(guidObj: object, origguidRootObjin?: object): void;

    /**
     * 현재 `MetaRow` 객체를 복제하여 새로운 객체를 생성합니다.
     * 
     * @param entity - 복제할 대상의 엔티티 (옵션)
     * @returns 복제된 `MetaRow` 객체입니다.
     * 
     * @example
     * const clone = row.clone(entity);
     */
    clone(entity?: BaseEntity): this;
}

export default MetaRow;
export { MetaRow };