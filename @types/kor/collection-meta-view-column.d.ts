import BaseColumnCollection           = require("./base-column-collection");
import BaseEntity           = require("./base-entity");
import MetaColumn           = require("./meta-column");

/**
 * 메타 뷰 컬럼 컬렉션
 */
declare class MetaViewColumnCollection extends BaseColumnCollection {

    /**
     * 메타 뷰 컬럼 컬렉션
     * @param owner 소유자
     */
    constructor(owner: object);

    /**
     * 참조하는 엔티티 목록
     */
    _refEntities: BaseEntity[];

    /**
     * 메타뷰컬럼컬렉션 객체를 직렬화(guid 타입) 객체로 얻습니다.  
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
     * 뷰컬렉션에 컬럼을 추가(등록/설정)한다.  
     * - entity가 있는 컬럼을 추가할 경우 : 참조가 추가되는 것이다.  
     *      + collection 존재할 경우 최상위 컬렉션에도 참조가 등록된다.  
     * - entity가 없는 컬럼을 추가할 경우 : 자신을 소유자로 등록한다.  
     * - collection에 컬럼이 존재할 경우 : columns 객체는 무시되고, 리턴한 객체의 참조를 등록한다.  
     * - collection에 컬럼이 없을 경우 : 컬렉션에 entity를 설정한다.(참조 재귀호출시 최상위만 등록됨)  
     *      + collection 존재할 경우 entity 항상 존재한다.  
     * - entity가 있는 컬럼을 추가할 경우 : 참조가 추가되는 것이다.
     * - entity가 없는 컬럼을 추가할 경우 : 자신을 소유자로 등록한다.
     * - collection에 컬럼이 존재할 경우 : columns 객체는 무시되고, 리턴한 객체의 참조를 등록한다.
     * - collection에 컬럼이 없을 경우 : 컬렉션에 entity를 설정한다.(참조 재귀호출시 최상위만 등록됨)
     * @param column 컬럼
     * @param refCollection 참조컬렉션
     */
    add(column: MetaColumn | string, refCollection: BaseColumnCollection): number;

    /**
     * 이름과 값으로 컬럼 생성하여 컬렉션에 추가
     * @param name 컬럼명
     * @param value 값
     * @param refCollection 참조컬렉션
     */
    addValue(name: string, value: string | number | boolean, refCollection: BaseColumnCollection): number;

    /**
     * 엔티티의 모든 컬럼을 추가
     * @param entity 
     */
    addEntity(entity: BaseEntity);

}

export = MetaViewColumnCollection;