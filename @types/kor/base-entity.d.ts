import MetaElemet           = require("logic-core/meta-element");
import IGroupControl        = require("./i-control-group");
import IExportControl       = require("./i-control-export");
import IImportControl       = require("./i-control-import");
import ISchemaControl       = require("./i-control-schema");
import ISerialize           = require("logic-core/i-serialize");
import MetaSet              = require("./meta-set");
import BaseColumnCollection = require("./base-column-collection");
import MetaRowCollection    = require("./collection-meta-row");
import MetaRow              = require("./meta-row");

/**
 * 기본 엔티티 (최상위)
 */
declare abstract class BaseEntity extends MetaElemet 
    implements IGroupControl, IExportControl, IImportControl, ISchemaControl, ISerialize {  

    /**
     * 
     * @param name 
     */
    constructor(name: string);

    /**
     * 엔티티의 아이템(속성) 컬렉션
     */
    _metaSet: MetaSet;

    /**
     * 엔티티의 아이템(속성) 컬렉션
     * @readonly
     */
    columns: BaseColumnCollection;

    /**
     * 엔티티의 데이터(로우) 컬렉션
     * @readonly
     */
    rows: MetaRowCollection;

    /**
     * 엔티티 스카마 객체로 변환
     * @param oGuid getObject()로 얻은 객체
     */
    static transformSchema(oGuid: object): object;  // TODO: 세부 타입으로 정의 필요

    /**
     * 엔티티 대상에 로우 만들기
     * @param entity 빌드 대상 엔티티
     * @param callback 로우 대상 조회 콜백
     * @param items 선택할 로우명 , [] 또는 undefined 시 전체 선택
     */
    _buildEntity(entity: BaseEntity, callback: Function, items: string[]): BaseEntity;

    /**
     * BaseEntity 읽기(로드)
     * @param entity 대상 엔티티
     * @param option 옵션
     */
    _readEntity(entity: BaseEntity, option: number);

    /**
     * 스키마 읽기
     * @param obj  대상 객체
     * @param createRow 기본값 = false, 컬럼이 없을경우 로우이름의 컬럼 생성 여부
     * @param origin 원본 객체
     */
    _readSchema(obj: object, createRow?: boolean, origin?: object);

    /**
     * 기본엔티티 객체를 직렬화(guid 타입) 객체로 얻습니다.  
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
     * rows(데이터) 초기화 한다
     */
    clear();

    /**
     * columns, rows(데이터)를 초기화 한다
     */
    reset();

    /**
     * 새로운 MetaRow 를 추가한다.
     * @returns columns 구조의 row를 생성
     */
    newRow(): MetaRow;

    /**
     * 컬럼의 value 값을 MetaRow 타입 객체로 얻기
     */
    getValue(): MetaRow;

    /**
     *  MetaRow 의 값을 컬럼의 value에 설정한다.
     * @param row 로우
     */
    setValue(row: MetaRow);

    /**
     * 엔티티(테이블/뷰)와 병합
     * @param target 병할할 대상
     * @param option 옵션 TODO: 타입으로 분리 필요
     * @param matchType 로우 유효성 검사 유무 (기본:false)
     */
    merge(target: BaseEntity, option: number, matchType?: boolean);

    /**
     * 엔티티의 지정한 컬럼과 조건의 row 를 조회
     * @param callback 콜백함수
     */
    select(callback: Function): BaseEntity; // TODO: 함수 세부로 정의 필요

    /**
     * 엔티티의 지정한 컬럼과 조건의 row 를 조회
     * @param filter 필터
     * @param args filter 설정시 컬럼명
     */
    select(filter: string[], ...args): BaseEntity;

    /**
     * 엔티티의 지정한 컬럼과 조건의 row 를 조회
     * @param args filter 설정시 컬럼명
     */
    select(...args): BaseEntity;


    /**
     * 객체(직렬화) 로드
     * 불러오기/가져오기 (!! 병합용도가 아님)
     * 기존을 초기화 하고 불러오는 역활
     * @param obj 불러오기 대상
     * @param parse 파서
     */
    load(obj: object | string, parse?: Function);

    /**
     * 객체 출력(직렬화)
     * @param vOpt  옵션 (0, 1, 2)
     * @param stringify 파서출력 사용자 함수
     * @param space 공백
     */
    output(vOpt: number, stringify?: Function, space?: string): string;

    /**
     * object 로 읽기   
     * JSON 스키마 규칙   
     * { table: { columns: {}, rows: {} }}   
     * { columns: {...}, rows: {} }
     * @param obj mObject 또는 rObject 또는 entity
     * @param option 기본값  = 3    TODO: 타입으로 분리 필요
     */
    read(obj: object, option: number);

    /**
     *  없으면 빈 컬럼을 생성해야 하는지?  
     * 이경우에 대해서 명료하게 처리햐야함 !!  
     * @param obj  object<Schema> | object<Guid>
     * @param createRow true 이면, row[0] 기준으로 컬럼을 추가함
     */
    readSchema(obj: object, createRow?: boolean);

    /**
     * 존재하는 로우만 읽기
     * @param obj 읽을 객체
     */
    readData(obj: object);

    /**
     * 엔티티를 컬럼과 로우를 스키마 타입의 객체로 쓰기(내보내기)
     * @param vOpt 기본 = 0
     */
    write(vOpt?: number): object;

    /**
     * 엔티티 스키마(컬럼)을 스키마 타입의 객체로 쓰기
     * @param vOpt 기본 = 0
     */
    writeSchema(vOpt?: number): object;

    /**
     *  엔티티 데이터(로우)를 스키마 타입의 객체로 쓰기
     * @param vOpt 기본 = 0
     */
    writeData(vOpt?: number): object;

    /**
     * 엔티티 복제
     * @returns 복제한 객체
     */
    abstract clone(): this;

    /**
     *  엔티티 복사
     * @returns 복사한 뷰 객체
     */
    abstract copy(): this;
}

export = BaseEntity;