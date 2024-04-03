import BaseEntity           = require("./base-column");
import ITransaction         = require("./i-transaction");
import MetaTableCollection  = require("./collection-meta-table");

/**
 * 테이블 엔티티
 */
declare class MetaTable extends BaseEntity implements ITransaction {

    /**
     * 테이블 엔티티
     * @param name 테이블명
     */
    constructor(name: string);

    /**
     * 테이블 이름
     */
    tableName: string;

    /**
     * 엔티티의 아이템(속성) 컬렉션
     */
    columns: MetaTableCollection;

    /**
     * 현재 객체를 직렬화(guid 타입) 객체로 얻습니다. 
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
     * 객체 복제
     */
    clone(): this;

    /**
     * 콜백 실행 후 args 컬럼명을 복사한다.
     * @param filter 
     * @param args 
     */
    copy(filter: Function, args: string[]);

    /**
     * 콜백 실행 후 args 컬럼명을 복사한다.
     * @param filter 
     * @param args 
     */
    copy(filter: Function, ...args);

    /**
     * 대상 컬럼을 복사한다.
     * @param filter 
     */
    copy(filter: string[]);

    /**
     * 변경사항 허락 : commit
     */
    acceptChanges();

    /**
     * 변경사항 취소 : rollback
     */
    rejectChanges();

    /**
     * 변경목록 얻기
     */
    getChanges(): object[];
}

export = MetaTable;