import type { PropertyCollection }          from 'logic-core/ko';
import type { MetaView }                    from './meta-view.d.ts';

/**
 * `MetaViewCollection` 클래스는 뷰 엔티티를 관리하는 컬렉션을 정의합니다.  
 * 이 클래스는 메타 뷰를 추가하고, 컬렉션에 있는 뷰의 존재 여부를 확인하는 기능을 제공합니다.  
 */
type MetaViewCollection<T = MetaView> = {

    /**
     * 기본 생성 타입으로 사용되는 생성자 함수입니다.  
     */
    _baseType: typeof MetaView;

    /**
     * 컬렉션에 MetaView 객체를 추가합니다.  
     *  - string                    : 생성후   string      이름으로 등록   
     *  - string, colltion          : 생성후   string      이름으로  등록 (collection보냄)  
     *  - entityView                :         entityView  이름으로 등록  
     *  - entityView, collection    :         entityView  이름으로 등록 (collection보냄) => 오류발생   
     * 
     * @param view - 뷰 이름 또는 MetaView 객체
     * @param baseEntity - 컬럼 소유 엔티티 (문자열로 생성할 경우에만 허용)
     * @returns 추가된 뷰의 인덱스입니다. 인덱스는 컬렉션 내에서 뷰의 위치를 나타냅니다.
     * 
     * @example
     * const index1 = collection.add("viewName", baseCollection); // 문자열(뷰 이름)으로 뷰 추가
     * const index2 = collection.add(new MetaView("viewName"), baseCollection); // `MetaView` 객체로 뷰 추가
     */
    add(view: string | MetaView, baseEntity?: MetaView): number;

    /**
     * 지정된 뷰 이름이 컬렉션에 존재하는지 여부를 확인합니다.
     * 
     * @param key - 확인할 뷰 이름
     * @returns 존재 시 true, 존재하지 않으면 false 를 반환합니다.
     * 
     * @example
     * const exists = collection.existViewName("viewName"); // 뷰 이름 "viewName"의 존재 여부 확인
     */
    existViewName(key: string): boolean;

} & PropertyCollection<T>;

export interface MetaViewCollectionConstructor {
    /**
     * `MetaViewCollection` 객체를 생성합니다.  
     * 이 객체는 뷰 엔티티를 관리하는 컬렉션을 생성합니다.  
     * 
     * @param owner - 이 컬렉션의 소유자 객체
     */
    new <T = MetaView>(owner: object): MetaViewCollection<T>;
}
  
declare const MetaViewCollection: MetaViewCollectionConstructor;

export default MetaViewCollection;
export { MetaViewCollection };