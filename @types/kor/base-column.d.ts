import MetaElemet           = require("logic-core/meta-element");
import BaseEntity           = require("./base-entity");

/**
 * 기본 컬럼
 */
declare abstract class BaseColumn extends MetaElemet {

    /**
     * 키본 컬럼을 생성합니다. (컬럼 최상위)
     * @param name 컬럼명
     * @param entity 소유한 엔티티(table, view)
     */
    constructor(name: string, entity: BaseEntity);

    /**
     * 컬럼 컬렉션의 키
     */
    $key: string;

    /**
     * 별칭 내부값
     */
    $alias: string;

    /**
     *  컬럼 소유 엔티티
     */
    _entity: BaseEntity;

    /**
     * value 타입 설정
     */
    _valueTypes: any;

    /**
     * 컬럼명, _name 과 동일
     */
    columnName: string;

    /**
     * 아이템 별칭 (bind전송시, 데이터 수신후 설정시 활용함)  
     * 사용처 (기본값 = columnName )
     * - Bind-command-ajax._execBind() : 데이터 전송시  
     * - BaseBind.setValue(row) : 로우값 을 엔티티에 설정시  
     * - getValue() : row 에 활용함  
     */
    alias: string;

    /**
     *  컬럼 value 의 기본값 (내부속성)
     */
    default: string | number | boolean;

    /**
     * 컬럼 설명
     */
    caption: string;

    /**
     * 컬럼 값
     */
    value: any;     // TODO: default 와 일치해야할듯

    /**
     * 기본컬럼 객체를 직렬화(guid 타입) 객체로 얻습니다.  
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
     * 직렬화(guid 타입) 객체를 기본컬럼 객체에 설정합니다.  
     * (객체는 초기화 된다.)
     * @param oGuid 직렬화 할 guid 타입의 객체
     * @param origin [p_origin=p_oGuid] 현재 객체를 설정하는 원본 객체  
     */
    setObject(oGuid: object, origin?: object);

    
    abstract clone();
}

export = BaseColumn;