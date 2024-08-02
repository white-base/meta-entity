import MetaElemet           = require("logic-core/meta-element");
import ISerialize           = require("logic-core/i-serialize");
import ISchemaControl       = require("./i-control-schema");
import IExportControl       = require("./i-control-export");
import IImportControl       = require("./i-control-import");
import ITransaction         = require("./i-transaction");
import MetaTableCollection  = require("./collection-meta-table");
import MetaViewCollection   = require("./collection-meta-view");

/**
 * `MetaSet` 클래스는 메타 데이터 집합을 관리하며, 테이블과 뷰의 컬렉션을 포함합니다.
 * 이 클래스는 데이터의 직렬화, 스키마 변환, 데이터 로딩 및 저장 등의 기능을 제공합니다.
 */
declare class MetaSet extends MetaElemet 
    implements ISerialize, ISchemaControl, IExportControl, IImportControl, ITransaction {

    /**
     * `MetaSet` 객체를 생성합니다.
     * @param name - 메타셋의 이름입니다.
     */
    constructor(name: string);

    /**
     * 메타셋의 이름입니다.
     */
    setName: string;

    /**
     * 메타 테이블의 컬렉션입니다.
     */
    tables: MetaTableCollection;

    /**
     * 메타 뷰의 컬렉션입니다.
     */
    views: MetaViewCollection;

    /**
     * 트랜잭션 자동 변경 사용 여부입니다. 기본값은 `false`입니다.
     */
    autoChanges: boolean;

    /**
     * 메타셋을 스키마 객체로 변환합니다.
     * @param oGuid - `getObject()`로 얻은 직렬화된 객체입니다.
     * @returns 변환된 스키마 객체입니다.
     * @example
     * const schema = MetaSet.transformSchema(serializedObject);
     */
    static transformSchema(oGuid: object): object;

    /**
     * 현재 `MetaSet` 객체를 직렬화된 GUID 타입의 객체로 변환합니다.
     * 직렬화 과정에서 순환 참조는 `$ref` 값으로 대체됩니다.
     * @param vOpt - 직렬화 옵션을 지정합니다.
     *   - `0`: 참조 구조로 변환 (`_guid`와 `$ref` 포함)
     *   - `1`: 중복 구조로 변환 (`_guid`와 `$ref` 포함)
     *   - `2`: 비침조 구조로 변환 (`_guid`와 `$ref` 제외)
     * @param owned - 현재 객체를 소유하는 상위 객체들입니다. 객체 또는 객체 배열을 받을 수 있습니다.
     * @returns 직렬화된 객체입니다.
     * @example
     * const serialized = metaSet.getObject(2); // 비침조 구조로 직렬화된 객체 가져오기
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * 직렬화된 GUID 타입의 객체를 현재 `MetaSet` 객체에 설정합니다.
     * 이 과정에서 객체가 초기화됩니다.
     * @param oGuid - 직렬화된 GUID 타입의 객체입니다.
     * @param origin - 현재 객체를 설정하는 원본 객체입니다. 기본값은 `oGuid`입니다.
     * @example
     * metaSet.setObject(serializedObject); // 직렬화된 객체를 현재 메타셋에 설정
     */
    setObject(oGuid: object, origin?: object);

    /**
     * 현재 `MetaSet` 객체를 복제하여 새로운 객체를 생성합니다.
     * @returns 복제된 `MetaSet` 객체입니다.
     * @example
     * const clone = metaSet.clone();
     */
    clone(): this;

    /**
     * 모든 뷰와 모든 테이블의 로우를 초기화합니다.
     * @example
     * metaSet.clear(); // 모든 뷰와 테이블의 행을 초기화
     */
    clear();

    /**
     * 전체 초기화 작업을 수행합니다.
     * @example
     * metaSet.reset(); // 메타셋을 전체적으로 초기화
     */
    reset();

    /**
     * 데이터를 불러오거나 가져옵니다. (병합 용도가 아님)
     * 기존의 데이터를 초기화하고 새로운 데이터를 불러옵니다.
     * @param obj - 불러올 데이터입니다. 객체 또는 문자열을 받을 수 있습니다.
     * @param parse - 선택적인 파서 함수입니다.
     * @example
     * metaSet.load(dataObject, JSON.parse); // 데이터 객체를 불러오기
     */
    load(obj: object | string, parse?: Function);

    /**
     * 메타셋 객체를 출력(직렬화)합니다.
     * @param vOpt - 직렬화 옵션입니다.
     *   - `0`: 참조 구조로 출력
     *   - `1`: 중복 구조로 출력
     *   - `2`: 비침조 구조로 출력
     * @param stringify - 선택적인 직렬화 함수입니다. 기본값은 `JSON.stringify`입니다.
     * @param space - 선택적인 공백 문자열입니다. 기본값은 `undefined`입니다.
     * @returns 직렬화된 문자열입니다.
     * @example
     * const jsonString = metaSet.output(2, JSON.stringify, '  '); // 직렬화된 문자열 출력
     */
    output(vOpt?: number, stringify?: Function, space?: string): string;

    /**
     * 객체를 읽어와 메타셋을 로딩합니다.
     * JSON 스키마 규칙을 따릅니다.
     * @param obj - 메타셋 객체, 엔티티 또는 기타 객체입니다.
     * @param opt - 선택적인 옵션입니다. 기본값은 `3`입니다.
     * @example
     * metaSet.read(dataObject, 3); // 데이터 객체를 읽어와 메타셋 로딩
     */
    read(obj: object, opt: number); // TODO: obj 타입으로 분리 필요

    /**
     * 스키마를 읽어와서 메타셋에 적용합니다.
     * 없으면 빈 컬럼을 생성해야 하는지 여부를 설정합니다.
     * @param obj - 스키마 객체 또는 GUID 객체입니다.
     * @param createRow - `true`이면, 첫 번째 행을 기준으로 컬럼을 추가합니다.
     * @example
     * metaSet.readSchema(schemaObject, true); // 스키마를 읽어 메타셋에 적용
     */
    readSchema(obj: object, createRow?: boolean);   // TODO: obj 타입으로 분리 필요

    /**
     * 데이터를 읽어와서 메타셋의 로우를 설정합니다.
     * @param obj - 읽을 데이터입니다.
     * @example
     * metaSet.readData(dataObject); // 데이터 객체를 읽어 메타셋의 행을 설정
     */
    readData(obj: object);

    /**
     * 메타셋을 스키마 타입의 객체로 내보냅니다.
     * @param vOpt - 내보내기 옵션입니다.
     * @returns 내보낸 스키마 객체입니다.
     * @example
     * const schemaObject = metaSet.write(1); // 메타셋을 스키마 객체로 내보내기
     */
    write(vOpt?: number): object;   // TODO: object 타입 분리

    /**
     * 메타셋의 스키마(컬럼)를 스키마 타입의 객체로 내보냅니다.
     * @param vOpt - 내보내기 옵션입니다.
     * @returns 내보낸 스키마 객체입니다.
     * @example
     * const schemaObject = metaSet.writeSchema(1); // 스키마(컬럼)를 스키마 객체로 내보내기
     */
    writeSchema(vOpt?: number): object;   // TODO: object 타입 분리

    /**
     * 메타셋의 데이터(로우)를 스키마 타입의 객체로 내보냅니다.
     * @param vOpt - 내보내기 옵션입니다.
     * @returns 내보낸 데이터 객체입니다.
     * @example
     * const dataObject = metaSet.writeData(1); // 데이터(로우)를 스키마 객체로 내보내기
     */
    writeData(vOpt?: number): object;   // TODO: object 타입 분리

    
    /**
     * 메타셋의 변경사항을 허락하고 커밋합니다.
     * @example
     * metaSet.acceptChanges(); // 변경사항을 커밋
     */
    acceptChanges();

    /**
     * 메타셋의 변경사항을 취소합니다.
     * @example
     * metaSet.rejectChanges(); // 변경사항을 취소
     */
    rejectChanges();

    /**
     * 메타셋에 변경 사항이 있는지 확인합니다.
     * @returns 변경 사항이 있으면 `true`, 없으면 `false`를 반환합니다.
     * @example
     * const hasChanges = metaSet.hasChanges(); // 변경 사항 유무 확인
     */
    hasChanges(): boolean;


}

export = MetaSet;