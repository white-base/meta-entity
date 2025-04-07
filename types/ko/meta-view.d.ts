import type BaseEntity               from './base-entity.d.ts';
import type MetaViewColumnCollection from './collection-meta-view-column.d.ts';
import type MetaColumn    from './meta-column.d.ts';

/**
 * 메타 뷰 클래스
 * 
 * 이 클래스는 데이터베이스의 뷰를 모델링하며, 뷰의 컬럼과 기본 엔티티를 관리합니다.
 */
declare class MetaView extends BaseEntity {

    /**
     * 주어진 이름으로 메타 뷰를 생성하며, 기본 엔티티를 설정합니다.
     * 
     * @param name - 뷰 이름입니다.
     * @param baseEntity - 기본 엔티티, 컬럼 추가 시 기본 엔티티에 추가 됩니다.
     */
    constructor(name: string, baseEntity: BaseEntity);

    /**
     * 메타 뷰 이름 입니다.
     */
    viewName: string;

    /**
     * 뷰의 컬럼 컬렉션 입니다.
     */
    columns: MetaViewColumnCollection<MetaColumn>;

    /**
     * 기본 엔티티 입니다.
     */
    _baseEntity: BaseEntity;

    /**
     * 객체를 특정 옵션에 따라 직렬화된 형태로 반환합니다. 순환 참조는 $ref 값으로 대체됩니다.
     * 
     * @param vOpt - 가져오기 옵션입니다. (기본값: 0)
     * - 0 : 참조 구조 (_guid: Yes, $ref: Yes)
     * - 1 : 중복 구조 (_guid: Yes, $ref: Yes)
     * - 2 : 비참조 구조 (_guid: No, $ref: No)
     * @param owned - 현재 객체를 소유하는 상위 객체들입니다. (기본값: {})
     * @returns 직렬화된 객체입니다.
     * 
     * @example
     * const serializedObject = metaView.getObject(2);
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * 주어진 직렬화 객체를 현재 객체로 설정합니다. 설정 시 기존 객체는 초기화됩니다.
     * 
     * @param oGuid - 직렬화할 guid 타입의 객체입니다.
     * @param origin - 현재 객체를 설정하는 원본 객체입니다. (기본값: oGuid)
     */
    setObject(oGuid: object, origin?: object): void;    

    /**
     * 현재 메타 뷰의 깊은 복사본을 생성하여 반환합니다.
     * 
     * @returns 현재 메타 뷰의 복제본입니다.
     */
    clone(): this;

    /**
     * 콜백 실행 후 args 컬럼명을 복사합니다.
     * 
     * @param filter - 컬럼을 선택하는 필터 함수입니다.
     * @param args - 복사할 컬럼명 목록입니다.
     * @returns {MetaView} 복사된 메타 뷰 객체입니다.
     */
    copy(filter: Function, args: string[]): this;

    /**
     * 콜백 실행 후 args 컬럼명을 복사한다.
     * 
     * @param filter - 컬럼을 선택하는 필터 함수입니다.
     * @param args - 복사할 컬럼명 목록입니다.
     * @returns {MetaView} 복사된 메타 뷰 객체입니다.
     */
    copy(filter: Function, ...args): this;

    /**
     * 대상 컬럼을 복사한다.
     * 
     * @param filter - 컬럼을 선택하는 필터 함수입니다.
     * @returns {MetaView} 복사된 메타 뷰 객체입니다.
     */
    copy(filter: string[]): this;

}

export default MetaView;
export { MetaView };