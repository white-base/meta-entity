import MetaObject           = require("logic-core/meta-object");
import BaseEntity           =  require("./base-entity");
import Observer             = require("logic-core/observer");

/**
 * 메타 로우
 */
declare class MetaRow extends MetaObject {

    /**
     * 메타 로우
     * @param entity 소유하는 엔티티
     */
    constructor(entity: BaseEntity);

    /**
     * 내부 변수 접근
     * @private
     */
    $elements: any[];

    /**
     * 이벤트 객체
     * @private
     */
    $event: Observer;

    /**
     *  로우의 소유 엔티티
     * @readonly
     */
    _entity: BaseEntity;

    /**
     * 로우 요소값 
     * @readonly
     */
    _elements: any[];

    /**
     * 요소 키
     * @readonly
     */
    _keys: string[];

    /**
     * 컬렉션 목록 
     * @readonly
     */
    list: any[];

    /**
     * 컬랙션 갯수 
     * @readonly
     */
    count: number;

    /**
     * 변경전 이벤트 
     * @event MetaRow#onChanging
     */
    onChanging: (idx: number, nVal: any, oVal: any, _this: this)=>void;

    /**
     * 변경후 이벤트 
     * @event MetaRow#onChanged
     */
    onChanged: (idx: number, nVal: any, oVal: any, _this: this)=>void;

    /**
     * 로우 요소 변경전 이벤트
     * @param idx 인덱스
     * @param nVal 변경 값
     * @param oVal 기존 값
     * @listens MetaRow#_onChanging
     */
    _onChanging(idx: number, nVal: any, oVal: any);

    /**
     * 로우 요소 변경후 이벤트
     * @param idx 인덱스
     * @param nVal 변경 값
     * @param oVal 기존 값
     * @listens MetaRow#_onChanged
     */
    _onChanged(idx: number, nVal: any, oVal: any);

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
     * @param entity 대상의 엔티티 기준으로 생성
     */
    clone(entity?: BaseEntity): this;

}

export = MetaRow;