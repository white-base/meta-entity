import type { BaseEntity }                  from './base-entity.d.ts';
import type { MetaViewColumnCollection }    from './collection-meta-view-column.d.ts';
import type { MetaColumn }                  from './meta-column.d.ts';

/**
 * 이 클래스는 데이터베이스의 뷰를 모델링하며, 뷰의 컬럼과 기본 엔티티를 관리합니다.
 */
declare class MetaView extends BaseEntity {

    /**
     * 주어진 이름으로 메타 뷰를 생성하며, 기본 엔티티를 설정합니다.
     * 
     * @param name - 뷰 이름입
     * @param baseEntity - 기본 엔티티
     */
    constructor(name: string, baseEntity?: BaseEntity);

    /**
     * 컬럼 생성 시 기본적으로 참조되는 엔티티입니다.
     */
    protected _baseEntity: BaseEntity;

    /**
     * 메타 뷰 이름 입니다.
     */
    viewName: string;

    /**
     * 뷰의 컬럼 컬렉션 입니다.
     */
    columns: MetaViewColumnCollection<MetaColumn>;

    /**
    * 테이블의 컬럼 컬렉션 입니다.
    */
    cols: MetaViewColumnCollection<MetaColumn>;   

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
     * 현재 메타 뷰의 깊은 복사본을 생성하여 반환합니다.
     * 
     * @returns 현재 메타 뷰의 복제본
     */
    clone(): this;

    /**
     * 콜백 실행 후 args 컬럼명을 복사합니다.
     * 
     * @param filter - 컬럼을 선택하는 필터 함수
     * @param cols - 복사할 컬럼명 목록
     * @returns {MetaView} 복사된 메타 뷰 객체입니다.
     */
    copy(filter: Function, cols: string[]): this;

    /**
     * 컬럼명을 복사한다.
     * 
     * @param cols - 복사할 컬럼명 목록
     * @returns {MetaView} 복사된 메타 뷰 객체입니다.
     */
    copy(...cols: string[]): this;

    /**
     * 콜백 실행 후 대상 컬럼을 복사한다.
     * 
     * @param filter - 컬럼을 선택하는 필터 함수
     * @returns {MetaView} 복사된 메타 뷰 객체입니다.
     */
    copy(filter: Function): this;
}

export default MetaView;
export { MetaView };