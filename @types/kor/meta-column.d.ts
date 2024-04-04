import BaseColumn           = require("./base-column");
import Observer             = require("logic-core/observer");
import BaseEntity           = require("./base-entity");

// import T                    = require("./T");


// declare type ValueType = string | number | boolean;

/**
 * 메타 컬럼
 */
declare class MetaColumn extends BaseColumn {

    /**
     * 메타 컬럼
     * @param name 컬럼명
     * @param entity 소유 BaseEntity
     * @param property 속성
     */
    constructor(name: string, entity?: BaseEntity, property?: object);   // TODO: prop.. 타입 분리

    /**
     * 이벤트 객체
     */
    $event: Observer;

    /**
     * 직접 접근 제한 !!
     */
    $value: ValueType;

    /**
     * 컬럼 value의 필수 여부
     */
    isNotNull: boolean;

    /**
     * 컬럼 value null 통과 여부 (기본값 = false)
     */
    isNullPass: boolean;

    /**
     *  컬럼 제약 조건 
     */
    constraints: (object | Function)[];   // TODO: 확인 필요

    /**
     * 컬럼 value  
     * get 우선순위 : 1. getter 있는 경우, 2. 내부값 $value  
     * set 우선순위 : 1. setter 있는 경우, 2. setter 리턴값이 없는 경우  
     */
    value: ValueType;

    /**
     * 컬럼의 value 의 getter
     */
    getter: ()=>ValueType;

    /**
     * 컬럼의 value 의 setter
     */
    setter: (value: ValueType)=>void;

    /**
     * 변경 이벤트 
     * @event MetaColumn#onChanged
     */
    onChanged: (newVal: ValueType, oldVal: ValueType, _this: this)=>void;

    /**
     * 
     * @param nVal 변경 값
     * @param oVal 기존 값
     * @listens  MetaColumn#onChanged
     */
    _onChanged(nVal: ValueType, oVal: ValueType);

    /**
     * 
     * @param property 
     */
    _load(property: object);    // TODO: object 타입 분리 필요

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

    /**
     * 제약조건을 추가  
     * @param regex 정규표현식
     * @param msg regexp 입력시
     * @param code regexp 입력시
     * @param condition <기본값 false> 성공/실패 조건
     */
    addConstraint(regex: RegExp, msg: string, code?: string, condition?: boolean);

    /**
     * 속성의 value에 유효성을 검사한다. (isNotnull, isNullPass, constraints 기준)
     * @param value 검사할 값
     */
    valid(value: ValueType): object | undefined;
}

export = MetaColumn;