import type { BaseEntity }                  from './base-entity.d.ts';
import type { ITransaction }                from './i-transaction.d.ts';
import type { MetaTableColumnCollection }   from './collection-meta-table-column.d.ts';
import type { MetaColumn }                  from './meta-column.d.ts';

/**
 * 이 클래스는 데이터베이스 테이블을 모델링하며, 컬럼의 컬렉션과 테이블 이름을 관리합니다.  
 * 또한, 트랜잭션을 지원하여 변경 사항을 커밋하거나 롤백할 수 있습니다.  
 */
declare class MetaTable extends BaseEntity implements ITransaction {

    /**
     * 주어진 이름으로 테이블 엔티티를 생성합니다.
     * 
     * @param name - 테이블명
     */
    constructor(name: string);

    /**
     * 테이블의 이름을 나타냅니다.
     */
    tableName: string;

   /**
    * 테이블의 컬럼 컬렉션 입니다.
    */
    columns: MetaTableColumnCollection<MetaColumn>;

   /**
     * 객체를 GUID 타입의 객체 리터럴로 반환합니다.
     * 
     * @param mode - 가져오기 모드  
     * mode=0 : 참조 구조(_guid:Yes, $ref:Yes)  
     * mode=1 : 중복 구조(_guid:Yes, $ref:Yes)  
     * mode=2 : 비침조 구조(_guid:No,  $ref:No)   
     * @param context - 현재 객체를 포함(소유)하는 상위 객체
     * @returns GUID 타입의 객체 리터럴
     */
   getObject(mode?: number, context?: object | object[]): object;

   /**
    * GUID 타입의 객체 리터럴을 인스턴스 객체로 변환하여 설정합니다.
    * 
    * @param guidObj - 설정할 GUID 타입의 객체 리터럴
    * @param guidRootObj - 변환 과정에서 참조되는 초기 GUID 리터럴 객체  
    */
   setObject(guidObj: object, guidRootObj?: object): void; 

    /**
     * 현재 객체의 깊은 복사본을 생성하여 반환합니다.
     * 
     * @returns 현재 객체의 복제본
     */
    clone(): this;

    /**
     * 콜백 실행 후 cols 컬럼명을 복사합니다.
     * 
     * @param filter - 컬럼을 선택하는 필터 함수
     * @param cols - 복사할 컬럼명 목록
     * @returns {MetaTable} 복사된 메타 테이블 객체입니다.
     */
    copy(filter: Function, cols: string[]): this;

    /**
     * 콜백 실행 후 cols 컬럼명을 복사한다.
     * 
     * @param cols - 복사할 컬럼명 목록
     * @returns {MetaTable} 복사된 메타 테이블 객체입니다.
     */
    copy(...cols): this;

    /**
     * 대상 컬럼을 복사한다.
     * 
     * @param filter - 컬럼을 선택하는 필터 함수
     * @returns {MetaTable} 복사된 메타 테이블 객체입니다.
     */
    copy(filter: string[]): this;

    /**
     * 현재 객체에 대한 모든 변경 사항을 커밋합니다.  
     * 변경사항 허락 : commit  
     */
    acceptChanges(): void;

    /**
     * 현재 객체에 대한 모든 변경 사항을 롤백합니다.  
     * 변경사항 취소 : rollback  
     */
    rejectChanges(): void;

    /**
     * 현재 객체에 대한 변경 사항 목록을 반환합니다.  
     * 
     * @returns 변경된 목록입니다.
     */
    getChanges(): object[];
}

export default MetaTable;
export { MetaTable };