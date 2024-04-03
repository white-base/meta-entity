import ArrayCollection          = require("logic-core/collection-array");
import T                        = require("logic-core/T");
import TransactionQueue         = require("./trans-queue");

/**
 * 트랜젝션 컬렉션 클래스
 */
declare class TransactionCollection extends ArrayCollection {

    /**
     * 트랜젝션 컬렉션 클래스
     * @param owner 소유객체
     */
    constructor(owner: object);

    /**
     *  트렌젝션 큐
     */
    _transQueue: TransactionQueue;

    /**
     * 자동 변경 유무 (기본값: 사용 false)
     */
    autoChanges: boolean;
    
    /**
     * 변경 유무
     */
    hasChanges: boolean;

    /**
     * 트랜젝션 컬렉션 프로퍼티 기술자 
     * @param idx 
     */
    _getPropDescriptor(idx: number): object;

    /**
     * 트랜젝션컬렉션 객체를 직렬화(guid 타입) 객체로 얻습니다.  
     * (순환참조는 $ref 값으로 대체된다.) 
     * @param vOpt [p_vOpt=0] 가져오기 옵션
     * - opt=0 : 참조 구조(_guid:Yes, $ref:Yes)  
     * - opt=1 : 중복 구조(_guid:Yes, $ref:Yes)  
     * - opt=2 : 비침조 구조(_guid:No,  $ref:No) 
     * @param owned [p_owned={}] 현재 객체를 소유하는 상위 객체들
     * @example
     * a.getObject(2) == b.getObject(2
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * 직렬화(guid 타입) 객체를 현재 객체에 설정합니다.  
     * (객체는 초기화 된다.)
     * @param oGuid 직렬화 할 guid 타입의 객체
     * @param origin [p_origin=p_oGuid] 현재 객체를 설정하는 원본 객체  
     */
    setObject(oGuid: object, origin?: object);

    /**
     * 지정 위치에 요소 삭제
     * @param pos 인덱스 위치
     */
    removeAt(pos: number): boolean;

    /**
     * 전체 초기화
     */
    clear();

    /**
     * 지정 위치에 요소 추가
     * @param pos 인덱스 위치
     * @param elem 요소
     * @param desc 프로퍼티 기술자 객체
     */
    insertAt(pos: number, elem: any, desc: T.PropertyDescriptor): boolean;

    /**
     * 변경사항 반영
     */
    commit();

    /**
     * 변경사항 이전으로 복귀
     */
    rollback();
}

export = TransactionCollection;