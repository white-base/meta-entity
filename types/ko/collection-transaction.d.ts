import type { ArrayCollection }         from 'logic-core/ko';
import type { TransactionQueue }        from './trans-queue.d.ts';

/**
 * `TransactionCollection` 클래스는 트랜잭션 기반의 컬렉션을 관리합니다.  
 * 이 클래스는 컬렉션에 트랜잭션 큐를 적용하고, 변경 사항을 관리하는 기능을 제공합니다.  
 */
type TransactionCollection<T> = {

    /**
     * 트랜잭션 큐를 관리하는 객체입니다.  
     * 이 큐는 트랜잭션 작업을 순차적으로 처리하는 데 사용됩니다.  
     */
    readonly _transQueue: TransactionQueue;

    /**
     * 자동 변경 기능의 사용 여부를 나타냅니다.  
     * 기본값은 `false`로 설정되어 있으며, 자동으로 변경 사항을 적용할지 여부를 설정합니다.  
     */
    autoChanges: boolean;
    
    /**
     * 컬렉션의 변경 여부를 나타냅니다.  
     * `true`일 경우 컬렉션에 변경 사항이 있음을 의미합니다.  
     */
    readonly hasChanges: boolean;

    /**
     * 지정된 인덱스에 대한 프로퍼티 기술자를 반환합니다.
     * 
     * @param idx - 프로퍼티 기술자를 가져올 인덱스
     * @returns 지정된 인덱스에 대한 프로퍼티 기술자 객체입니다.
     * 
     * @example
     * const descriptor = collection._getPropDescriptor(0); // 인덱스 0의 프로퍼티 기술자 가져오기
     */
    _getPropDescriptor(idx: number): PropertyDescriptor;

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
     * const serialized = collection.getObject(2); // 비침조 구조로 직렬화된 객체 가져오기
     */

    /**
     * GUID 타입의 객체 리터럴을 인스턴스 객체로 변환하여 설정합니다.
     * 
     * @param guidObj - 설정할 GUID 타입의 객체 리터럴
     * @param guidRootObj - 변환 과정에서 참조되는 초기 GUID 리터럴 객체 
     * 
     * @example
     * collection.setObject(serializedObject); // 직렬화된 객체를 현재 컬렉션에 설정
     */
    setObject(guidObj: object, guidRootObj?: object): void;

    /**
     * 지정된 위치에서 요소를 삭제합니다.
     * 
     * @param pos - 삭제할 요소의 인덱스 위치입니다.
     * @returns 삭제 성공 여부를 나타내는 `boolean` 값입니다. 삭제가 성공하면 `true`, 실패하면 `false`입니다.
     * 
     * @example
     * const success = collection.removeAt(2); // 인덱스 2의 요소 삭제
     */
    removeAt(pos: number): boolean;

    /**
     * 컬렉션의 모든 요소를 초기화합니다.  
     * 컬렉션이 비워지고, 모든 요소가 삭제됩니다.  
     */
    clear(): boolean;

    /**
     * 지정된 위치에 요소를 추가합니다.
     * 
     * @param pos - 요소를 추가할 인덱스 위치입니다.
     * @param elem - 추가할 요소입니다.
     * @param desc - 프로퍼티 기술자 객체입니다.
     * @returns 요소 추가 성공 여부를 나타내는 `boolean` 값입니다. 추가가 성공하면 `true`, 실패하면 `false`입니다.
     * 
     * @example
     * const success = collection.insertAt(1, newItem, descriptor); // 인덱스 1에 요소 추가
     */
    insertAt(pos: number, elem: any, desc: PropertyDescriptor): boolean;

    /**
     * 컬렉션에 대한 변경 사항을 반영하여 커밋합니다.  
     * 이 메서드는 트랜잭션 큐에 있는 모든 작업을 적용합니다.  
     */
    commit(): void;

    /**
     * 컬렉션에 대한 변경 사항을 이전 상태로 롤백합니다.  
     * 이 메서드는 트랜잭션 큐에 있는 모든 작업을 취소합니다.  
     */
    rollback(): void;

} & ArrayCollection<T>;

export interface TransactionCollectionConstructor {
    /**
     * `TransactionCollection` 객체를 생성합니다.  
     * 이 객체는 트랜잭션 기반의 컬렉션을 생성하고 관리합니다.  
     * 
     * @param owner - 이 컬렉션의 소유자 객체
     */
    new <T>(owner: object): TransactionCollection<T>;
}
  
declare const TransactionCollection: TransactionCollectionConstructor

export default TransactionCollection;
export { TransactionCollection };