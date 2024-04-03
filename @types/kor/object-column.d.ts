import BaseColumn           = require("./base-column");
import BaseEntity           = require("./base-entity");

/**
 * 객체 컬럼
 */
declare class ObjectColumn extends BaseColumn {

    /**
     * 객체 컬럼
     * @param name 객체컬럼명
     * @param entity 소유 BaseEntity
     * @param prop 속성
     */
    constructor(name: string, entity: BaseEntity, prop: object);
    
    /**
     * 프로퍼티 객체로 속성 로드
     * @param prop 속성
     */
    _load(prop: object);    // TODO: 타입변환

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
     *  컬럼 복제
     * @param entity 지정한 엔티티로 복제
     */
    clone(entity?: BaseEntity): this;
}

export = ObjectColumn;