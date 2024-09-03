import BaseEntity                   from './base-entity';
import ITransaction                 from './i-transaction';
import MetaTableColumnCollection    from './collection-meta-table-column';

/**
 * 테이블 엔티티 클래스
 * 
 * 이 클래스는 데이터베이스 테이블을 모델링하며, 컬럼의 컬렉션과 테이블 이름을 관리합니다.
 * 또한, 트랜잭션을 지원하여 변경 사항을 커밋하거나 롤백할 수 있습니다.
 */
declare class MetaTable extends BaseEntity implements ITransaction {

    /**
     * 주어진 이름으로 테이블 엔티티를 생성합니다.
     * 
     * @param name - 테이블명입니다.
     */
    constructor(name: string);

    /**
     * 테이블의 이름을 나타냅니다.
     */
    tableName: string;

   /**
    * 테이블의 컬럼 컬렉션 입니다.
    */
    columns: MetaTableColumnCollection;

    /**
     * 객체를 특정 옵션에 따라 직렬화된 형태로 반환합니다. 순환 참조는 `$ref` 값으로 대체됩니다.
     * 
     * @param vOpt - 가져오기 옵션입니다. (기본값: 0)
     * - 0 : 참조 구조(_guid: Yes, $ref: Yes)
     * - 1 : 중복 구조(_guid: Yes, $ref: Yes)
     * - 2 : 비참조 구조(_guid: No, $ref: No)
     * @param owned - 현재 객체를 소유하는 상위 객체들입니다. (기본값: {})
     * @returns 직렬화된 객체입니다.
     * 
     * @example
     * const serializedObject = table.getObject(2);
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * 주어진 직렬화된 객체를 현재 객체에 반영합니다. 이 작업은 객체를 초기화합니다.
     * 
     * @param oGuid - 직렬화할 guid 타입의 객체입니다.
     * @param origin - 현재 객체를 설정하는 원본 객체입니다. (기본값: oGuid)
     */
    setObject(oGuid: object, origin?: object);    

    /**
     * 현재 객체의 깊은 복사본을 생성하여 반환합니다.
     * 
     * @returns 현재 객체의 복제본입니다.
     */
    clone(): this;

    /**
     * 콜백 실행 후 cols 컬럼명을 복사합니다.
     * 
     * @param filter - 컬럼을 선택하는 필터 함수입니다.
     * @param cols - 복사할 컬럼명 목록입니다.
     * @returns {MetaTable} 복사된 메타 테이블 객체입니다.
     */
    copy(filter: Function, cols: string[]): this;

    /**
     * 콜백 실행 후 cols 컬럼명을 복사한다.
     * 
     * @param cols - 복사할 컬럼명 목록입니다.
     * @returns {MetaTable} 복사된 메타 테이블 객체입니다.
     */
    copy(...cols): this;

    /**
     * 대상 컬럼을 복사한다.
     * 
     * @param filter - 컬럼을 선택하는 필터 함수입니다.
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
     * @returns 변경된 목록입니다.
     */
    getChanges(): object[];
}

export = MetaTable;