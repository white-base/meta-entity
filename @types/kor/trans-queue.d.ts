// import MetaElemet           = require("logic-core/meta-element");
import IArrayCollection           = require("logic-core/i-collction-array");

/**
 * `TransactionQueue` 클래스는 트랜잭션 작업을 큐에 저장하고 관리하는 기능을 제공합니다.
 * 큐는 주어진 `IArrayCollection` 컬렉션에 대해 트랜잭션 작업을 수행할 때 사용됩니다.
 */
declare class TransactionQueue {

    /**
     * `TransactionQueue` 객체를 생성합니다.
     * 
     * @param collection - 트랜잭션 큐에서 관리할 배열 컬렉션을 나타냅니다. `IArrayCollection` 인터페이스를 구현해야 합니다.
     */
    constructor(collection: IArrayCollection);

    /**
     * 큐에 저장된 트랜잭션 목록입니다.
     * 
     * @readonly
     */
    queue: object[];

    /**
     * 트랜잭션 큐가 작업할 대상 컬렉션입니다.
     * 
     * @readonly
     */
    collection: IArrayCollection;

    /**
     * 트랜잭션 큐를 초기화합니다.
     * 큐의 상태를 초기 상태로 설정합니다.
     * 
     * @example
     * transactionQueue.init(); // 큐를 초기화하여 빈 상태로 설정
     */
    init(): void;

    /**
     * 현재 큐에 저장된 트랜잭션 작업을 커밋합니다.
     * 커밋 시 큐에 저장된 모든 작업이 실제 컬렉션에 반영됩니다.
     * 
     * @example
     * transactionQueue.commit(); // 큐에 저장된 모든 작업을 컬렉션에 반영
     */
    commit(): void;

    /**
     * 현재 큐에 저장된 트랜잭션 작업을 롤백합니다.
     * 롤백 시 큐에 저장된 모든 작업이 취소되고, 컬렉션은 원래 상태로 복원됩니다.
     * 
     * @example
     * transactionQueue.rollback(); // 큐에 저장된 모든 작업을 취소하고 원래 상태로 복원
     */
    rollback(): void;

    /**
     * 큐에 새로운 트랜잭션 작업을 추가합니다.
     * 
     * @param pos - 작업을 추가할 큐 내의 위치 인덱스입니다.
     * @param target - 큐에 추가할 대상 객체입니다.
     * @param etc - 기타 관련 데이터입니다. 필요에 따라 추가적인 정보를 포함할 수 있습니다.
     * 
     * @example
     * transactionQueue.insert(0, targetObject, additionalData); // 인덱스 0 위치에 작업 추가
     */
    insert(pos: number, target: object, etc: any): void;

    /**
     * 큐에서 트랜잭션 작업을 삭제합니다.
     * 
     * @param pos - 삭제할 큐 내의 위치 인덱스입니다.
     * @param clone - 삭제할 작업의 복제본입니다.
     * @param etc - 기타 관련 데이터입니다. 필요에 따라 추가적인 정보를 포함할 수 있습니다.
     * 
     * @example
     * transactionQueue.delete(1, clonedObject, additionalData); // 인덱스 1 위치의 작업 삭제
     */
    delete(pos: number, clone: object, etc: any): void;

    /**
     * 큐에 있는 트랜잭션 작업을 수정합니다.
     * 
     * @param pos - 수정할 큐 내의 위치 인덱스입니다.
     * @param target - 수정할 대상 객체입니다.
     * @param clone - 수정 전 작업의 복제본입니다.
     * @param etc - 기타 관련 데이터입니다. 필요에 따라 추가적인 정보를 포함할 수 있습니다.
     * 
     * @example
     * transactionQueue.update(2, updatedObject, clonedObject, additionalData); // 인덱스 2 위치의 작업 수정
     */
    update(pos: number, target: object, clone: object, etc: any): void;

    /**
     * 큐의 변경 내역을 조회합니다.
     * 
     * @returns 현재 큐에 저장된 모든 트랜잭션 작업 목록입니다.
     * 
     * @example
     * const changes = transactionQueue.select(); // 큐의 모든 변경 내역을 조회
     */
    select(): object[];
}

export = TransactionQueue;