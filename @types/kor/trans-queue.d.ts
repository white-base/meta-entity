// import MetaElemet           = require("logic-core/meta-element");
import IArrayCollection           = require("logic-core/i-collction-array");

/**
 * 트랜젝션 큐
 */
declare class TransactionQueue {

    /**
     * 트랜젝션 큐
     * @param collection 배열컬렉션
     */
    constructor(collection: IArrayCollection);

    /**
     * 큐 목록
     */
    queue: object[];

    /**
     * 대상 컬랙션
     */
    collection: IArrayCollection;

    /**
     * 초기화
     */
    init();

    /**
     * 커밋
     */
    commit();

    /**
     * 롤백
     */
    rollback();

    /**
     * 추가
     * @param pos 위치
     * @param target 대상
     * @param etc 기타
     */
    insert(pos: number, target: object, etc: any);

    /**
     * 삭제
     * @param pos 위치
     * @param clone 복제한 객체
     * @param etc 기타
     */
    delete(pos: number, clone: object, etc: any);

    /**
     * 수정
     * @param pos 위치
     * @param target 대상
     * @param clone 복제한 객체
     * @param etc 기타
     */
    update(pos: number, target: object, clone: object, etc: any);

    /**
     * 변경 내역 조회
     */
    select(): object[];
}

export = TransactionQueue;