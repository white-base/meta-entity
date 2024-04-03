import MetaElemet           = require("logic-core/meta-element");
import ISerialize           = require("logic-core/i-serialize");
import ISchemaControl       = require("./i-control-schema");
import IExportControl       = require("./i-control-export");
import IImportControl       = require("./i-control-import");
import ITransaction         = require("./i-transaction");
import MetaTableCollection  = require("./collection-meta-table");
import MetaViewCollection   = require("./collection-meta-view");

/**
 * 메타셋
 */
declare class MetaSet extends MetaElemet 
    implements ISerialize, ISchemaControl, IExportControl, IImportControl, ITransaction {

    /**
     * 메타셋
     * @param name 메타셋 이름
     */
    constructor(name: string);

    /**
     * 테이블 이름
     */
    setName: string;

    /**
     * 메타 테이블 컬렉션
     */
    tables: MetaTableCollection;

    /**
     * 메타 뷰 컬렉션
     */
    views: MetaViewCollection;

    /**
     * 트랜젝션 사용 유무 (기본값: 사용 false)
     */
    autoChanges: boolean;

    /**
     * 메타셋 스카마 객체로 변환
     * @param oGuid getObject()로 얻은 객체
     */
    static transformSchema(oGuid: object): object;

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
     * 메타셋 복제
     */
    clone(): this;

    /**
     * 모든 view 와 모든 table 의 row 를 초기화
     */
    clear();

    /**
     * 전체 초기화
     */
    reset();

    /**
     *  불러오기/가져오기 (!! 병합용도가 아님) 
     * 기존을 초기화 하고 불러오는 역활
     * @param obj  불러오기 대상
     * @param parse 파서
     */
    load(obj: object | string, parse?: Function);

    /**
     * 메타셋 객체 출력(직렬화)
     * @param vOpt  옵션 (0, 1, 2)
     * @param stringify 파서출력 함수
     * @param space 공백
     */
    output(vOpt?: number, stringify?: Function, space?: string): string;

    /**
     * object 로 로딩하기   
     * JSON 스키마 규칙   
     * { table: { columns: {}, rows: {} }}   
     * { columns: {...}, rows: {} }
     * @param obj mObject 또는 rObject 또는 entity
     * @param opt 기본값  = 3
     */
    read(obj: object, opt: number); // TODO: obj 타입으로 분리 필요

    /**
     * 없으면 빈 컬럼을 생성해야 하는지?   이경우에 대해서 명료하게 처리햐야함 !!  
     * @param obj object<Schema> | object<Guid>
     * @param createRow true 이면, row[0] 기준으로 컬럼을 추가함
     */
    readSchema(obj: object, createRow?: boolean);   // TODO: obj 타입으로 분리 필요

    /**
     * row 들을 불러 온다
     * @param obj  읽을 데이터
     */
    readData(obj: object);

    /**
     * 메타셋을 스키마 타입의 객체로 쓰기(내보내기)
     * @param vOpt 옵션
     */
    write(vOpt?: number): object;   // TODO: object 타입 분리

    /**
     * 메타셋 스키마(컬럼)을 스키마 타입의 객체로 쓰기
     * @param vOpt 옵션
     */
    writeSchema(vOpt?: number): object;   // TODO: object 타입 분리

    /**
     * 메타셋 데이터(로우)를 스키마 타입의 객체로 쓰기
     * @param vOpt  옵션
     */
    writeData(vOpt?: number): object;   // TODO: object 타입 분리

    /**
     *  메타테이블의 변경사항 허락 : commit
     */
    acceptChanges();

    /**
     * 메타테이블의 변경사항 취소 : rollback
     */
    rejectChanges();

    /**
     * 메타테이블들의 변경 유무
     */
    hasChanges(): boolean;


}

export = MetaSet;