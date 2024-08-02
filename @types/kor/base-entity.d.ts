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
 * 기본 엔티티 클래스 (최상위)
 * 
 * 이 클래스는 데이터베이스의 엔티티(예: 테이블, 뷰 등)를 모델링하며, 컬럼과 로우 데이터를 관리합니다.
 * 다양한 인터페이스를 구현하여 트랜잭션, 직렬화, 스키마 변환 등을 지원합니다.
 */
declare abstract class BaseEntity extends MetaElemet 
    implements IGroupControl, IExportControl, IImportControl, ISchemaControl, ISerialize {  

    /**
     * 주어진 이름으로 엔티티를 생성합니다.
     * @param name - 엔티티명
     */
    constructor(name: string);

    /**
     * 엔티티가 소속되어 있는 메테셋 입니다.
     */
    _metaSet: MetaSet;

    /**
     * 엔티티의 아이템(속성) 컬렉션 입니다.
     * @readonly
     */
    columns: BaseColumnCollection;

    /**
     * 엔티티의 데이터(로우) 컬렉션 입니다.
     * @readonly
     */
    rows: MetaRowCollection;

    /**
     * 주어진 직렬화 객체를 스키마 객체로 변환합니다.
     * @param oGuid - getObject()로 얻은 객체
     * @returns 변환된 스키마 객체
     */
    static transformSchema(oGuid: object): object;  // TODO: 세부 타입으로 정의 필요

    /**
     * 주어진 엔티티에 로우를 생성하고 설정합니다.
     * @param entity - 빌드 대상 엔티티
     * @param callback - 로우 생성 후 호출될 콜백
     * @param items - 선택할 로우명, [] 또는 undefined 시 전체 선택
     * @returns 생성된 엔티티
     */
    _buildEntity(entity: BaseEntity, callback: Function, items: string[]): BaseEntity;

    /**
     * 주어진 옵션에 따라 엔티티를 읽어옵니다.
     * @param entity - 대상 엔티티
     * @param option - 읽기 옵션
     */
    _readEntity(entity: BaseEntity, option: number);

    /**
     * 주어진 객체에서 스키마 정보를 읽어옵니다.
     * @param obj - 대상 객체
     * @param createRow - 컬럼이 없을 경우 로우 이름의 컬럼 생성 여부 (기본값: false)
     * @param origin - 원본 객체
     */
    _readSchema(obj: object, createRow?: boolean, origin?: object);

    /**
     * 기본 엔티티 객체를 직렬화(guid 타입) 객체로 반환
     * 
     * 객체를 특정 옵션에 따라 직렬화된 형태로 반환합니다. 순환 참조는 $ref 값으로 대체됩니다.
     * @param vOpt - 가져오기 옵션 (기본값: 0)
     * - 0 : 참조 구조 (_guid: Yes, $ref: Yes)
     * - 1 : 중복 구조 (_guid: Yes, $ref: Yes)
     * - 2 : 비참조 구조 (_guid: No, $ref: No)
     * @param owned - 현재 객체를 소유하는 상위 객체들 (기본값: {})
     * @returns 직렬화된 객체
     * @example
     * const serializedObject = entity.getObject(2);
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;


    /**
     * 엔티티의 모든 데이터를 초기화합니다.
     */
    clear();

    /**
     * 엔티티의 컬럼 및 데이터를 초기화합니다.
     */
    reset();

    /**
     * 컬럼 구조에 맞는 새로운 로우를 생성하여 반환합니다.
     * @returns 생성된 MetaRow 객체
     */
    newRow(): MetaRow;

    /**
     * 컬럼의 value 값을 MetaRow 타입 객체로 반환합니다.
     * @returns 컬럼의 값이 설정된 MetaRow 객체
     */
    getValue(): MetaRow;

    /**
     * MetaRow 값을 컬럼의 value에 설정합니다.
     * @param row - 설정할 MetaRow 객체
     */
    setValue(row: MetaRow);

    /**
     * 주어진 엔티티와 현재 엔티티를 병합합니다.
     * @param target - 병합할 대상 엔티티
     * @param option - 병합 옵션 (TODO: 타입 정의 필요)
     * @param matchType - 로우 유효성 검사 유무 (기본값: false)
     */
    merge(target: BaseEntity, option: number, matchType?: boolean);

    /**
     * 주어진 콜백 함수에 따라 로우를 조회합니다.
     * @param callback - 조회 조건을 정의하는 콜백 함수
     * @returns 조회된 엔티티
     */
    select(callback: Function): BaseEntity; // TODO: 함수 세부로 정의 필요

    /**
     * 주어진 필터 조건에 맞는 로우를 조회합니다.
     * @param filter 필터 조건
     * @param args 필터에 설정할 컬럼명
     */
    select(filter: string[], ...args): BaseEntity;

    /**
     * 지정한 컬럼에 맞는 로우를 조회합니다.
     * @param args 컬럼 지정
     */
    select(...args): BaseEntity;

    /**
     * 주어진 객체를 현재 엔티티로 불러옵니다. 기존 데이터를 초기화하고 새로운 데이터를 로드합니다.
     * @param obj - 불러올 대상 객체
     * @param parse - 파서 함수 (옵션)
     */
    load(obj: object | string, parse?: Function);

    /**
     * 현재 엔티티를 직렬화된 문자열로 출력합니다.
     * @param vOpt - 옵션 (0, 1, 2)
     * @param stringify - 사용자 정의 파서 함수 (옵션)
     * @param space - 출력 시 사용할 공백 문자열 (옵션)
     * @returns 직렬화된 문자열
     */
    output(vOpt: number, stringify?: Function, space?: string): string;

    /**
     * 주어진 객체를 엔티티로 읽어옵니다. JSON 스키마 규칙을 따릅니다.
     * @param obj - 읽어올 대상 객체
     * @param option - 읽기 옵션 (기본값: 3) (TODO: 타입 정의 필요)
     * @example
     * var schema1 = { table: { columns: {}, rows: {} }}
     * var schema1 = { columns: {...}, rows: {} }
     */
    read(obj: object, option: number);

    /**
     * 주어진 스키마 객체를 현재 엔티티로 읽어옵니다.
     * @param obj  object<Schema> | object<Guid> 읽어올 스키마 객체
     * @param createRow true일 경우, row[0] 기준으로 컬럼을 추가 (기본값: false)
     */
    readSchema(obj: object, createRow?: boolean) : void;

    /**
     * 주어진 객체에서 존재하는 로우만 읽어옵니다.
     * @param obj - 읽어올 객체
     */
    readData(obj: object): void;

    /**
     * 현재 엔티티를 스키마 타입의 객체로 변환하여 반환합니다.
     * @param vOpt - 옵션 (기본값: 0)
     * @returns 스키마 타입의 객체
     */
    write(vOpt?: number): object;

    /**
     * 현재 엔티티의 스키마를 스키마 타입의 객체로 변환하여 반환합니다.
     * @param vOpt - 옵션 (기본값: 0)
     * @returns 스키마 타입의 객체
     */
    writeSchema(vOpt?: number): object;

    /**
     * 현재 엔티티의 데이터를 스키마 타입의 객체로 변환하여 반환합니다.
     * @param vOpt - 옵션 (기본값: 0)
     * @returns 스키마 타입의 객체
     */
    writeData(vOpt?: number): object;

    /**
     * 현재 엔티티의 깊은 복사본을 생성하여 반환합니다.
     * @returns 복제된 엔티티 객체
     */
    abstract clone(): this;

    /**
     * 현재 엔티티의 복사본을 생성하여 반환합니다.
     * @returns 복사된 엔티티 객체
     */
    abstract copy(...args): this;
}

export = BaseEntity;