import type { MetaElement }             from 'logic-core/ko';
import type { ISerialize }              from 'logic-core/ko';
import type { IGroupControl }           from './i-control-group.d.ts';
import type { IExportControl }          from './i-control-export.d.ts';
import type { IImportControl }          from './i-control-import.d.ts';
import type { ISchemaControl }          from './i-control-schema.d.ts';
import type { MetaSet }                 from './meta-set.d.ts';
import type { BaseColumnCollection }    from './base-column-collection.d.ts';
import type { MetaRowCollection }       from './collection-meta-row.d.ts';
import type { MetaRow }                 from './meta-row.d.ts';
import type { MetaView }                from './meta-view.d.ts';
import type { BaseColumn }              from './base-column.d.ts';
import type { EnititySchema }           from './T.d.ts';

/**
 * 엔티티의 최상위 추상 클래스입니다.  
 * 컬럼과 로우 컬렉션을 포함하며, 복제, 병합, 검증, 직렬화, 역직렬화 기능을 제공합니다.  
 */
declare abstract class BaseEntity extends MetaElement 
    implements IGroupControl, IExportControl, IImportControl, ISchemaControl, ISerialize {
    
    /**
     * 주어진 이름으로 엔티티를 생성합니다.
     * 
     * @param name - 엔티티명
     */
    constructor(name: string);

    /**
     * 이 엔티티가 포함된 메타셋입니다.
     */
    protected _metaSet: MetaSet;

    /**
     * 이 엔티티가 소유한 컬럼 컬렉션입니다.  
     * 하위 클래스에서 재정의해야 합니다.  
     */
    columns: any;

    /**
     * `columns` 속성의 별칭입니다.
     */
    cols: any;

    /**
     *  이 엔티티가 소유한 로우 컬렉션입니다.  
     */
    readonly rows: MetaRowCollection<MetaRow>;

    /**
     * 직렬화 객체를 스키마 객체로 변환합니다.
     * 
     * @param oGuid - getObject()로 얻은 객체
     * @returns 변환된 스키마 객체입니다.
     */
    static transformSchema(oGuid: object): EnititySchema;

    /**
     * 주어진 엔티티에 로우를 생성하고 설정합니다.
     * 
     * @param entity - 빌드 대상 엔티티
     * @param callback - 로우 생성 후 호출될 콜백함수
     * @param items - 선택할 로우명, [] 또는 undefined 는 전체 로우
     * @returns 생성된 엔티티입니다.
     */
    protected _buildEntity(entity: BaseEntity, callback: Function, items: string[]): BaseEntity;

    /**
     * 주어진 옵션에 따라 엔티티를 읽어옵니다.
     * 
     * @param entity - 대상 엔티티
     * @param option - 읽기 옵션
     */
    protected _readEntity(entity: BaseEntity, option: number): void;

    /**
     * 주어진 객체에서 스키마 정보를 읽어옵니다.
     * 
     * @param obj - 대상 객체
     * @param createRow - 컬럼이 없을 경우 로우 이름의 컬럼 생성 여부 (기본값: false)
     * @param origin - 원본 객체
     */
    protected _readSchema(obj: object, createRow?: boolean, origin?: object): void;

    /**
     * 객체를 GUID 타입의 객체 리터럴로 변환합니다.
     * 
     * @param mode - 가져오기 모드  
     * mode=0 : 참조 구조(_guid:Yes, $ref:Yes)  
     * mode=1 : 중복 구조(_guid:Yes, $ref:Yes)  
     * mode=2 : 비침조 구조(_guid:No,  $ref:No)   
     * @param context - 현재 객체를 포함(소유)하는 상위 객체
     * @returns GUID 타입의 객체 리터럴
     * 
     * @example
     * const serializedObject = entity.getObject(2);
     */
    getObject(mode?: number, context?: object | Array<object>): object;


    /**
     * 로우 컬렉션을 초기화합니다.
     */
    clear(): void;

    /**
     * 컬럼과 로우를 모두 초기화합니다.
     */
    reset(): void;

    /**
     * 컬럼 구조에 맞는 새로운 로우를 생성하여 반환합니다.
     * 
     * @returns 생성된 MetaRow 객체입니다.
     */
    newRow(): MetaRow;

    /**
     * 컬럼의 value 값을 MetaRow 타입 객체로 반환합니다.
     * 
     * @returns 컬럼의 값이 설정된 MetaRow 객체입니다.
     */
    getValue(): MetaRow;

    /**
     * MetaRow 값을 컬럼의 value에 설정합니다.
     * 
     * @param row - 설정할 MetaRow 객체입니다.
     */
    setValue(row: MetaRow): void;

    /**
     * 주어진 엔티티와 현재 엔티티를 병합합니다.
     * 
     * @param target - 병합할 대상 엔티티
     * @param option - 병합 옵션 (TODO: 타입 정의 필요)
     * @param matchType - 로우 유효성 검사 유무 (기본값: false)
     */
    merge(target: BaseEntity, option: number, matchType?: boolean): void;

    /**
     * 주어진 콜백 함수에 따라 로우를 조회합니다.
     * 
     * @param filter - 조회 조건을 정의하는 콜백 함수입니다.
     * @returns 조회된 엔티티입니다.
     */
    select(filter: Function): MetaView; // TODO: 함수 세부로 정의 필요

    /**
     * 주어진 필터 조건에 맞는 로우를 조회합니다.
     * 
     * @param filter - 필터 조건
     * @param cols - 필터에 설정할 컬럼명
     * @returns 조회된 엔티티입니다.
     */
    select(filter: Function, ...cols: string[]): MetaView;

    /**
     * 지정한 컬럼에 맞는 로우를 조회합니다.
     * 
     * @param cols - 컬럼명
     * @returns 조회된 엔티티입니다.
     */
    select(...cols: string[]): MetaView;

    /**
     * 주어진 객체를 현재 엔티티로 불러옵니다. 기존 데이터를 초기화하고 새로운 데이터를 로드합니다.
     * 
     * @param obj - 불러올 대상 객체
     * @param parse - 파서 함수 (선택)
     */
    load(obj: object | string, parse?: Function): void;

    /**
     * 현재 엔티티를 직렬화된 문자열로 출력합니다.
     * 
     * @param vOpt - 출력 옵션 (0, 1, 2)
     * @param stringify -  사용자 정의 파서 함수 (선택)
     * @param space -  출력 시 사용할 공백 문자열 (선택)
     * @returns 직렬화된 문자열입니다.
     */
    output(vOpt: number, stringify?: Function, space?: string): string;

    /**
     * 주어진 객체를 엔티티로 읽어옵니다. JSON 스키마 규칙을 따릅니다.
     * 
     * @param obj - 읽어올 대상 객체
     * @param option - 읽기 옵션 (기본값: 3) (TODO: 타입 정의 필요)
     * 
     * @example
     * var schema1 = { 
	 *    table: { 
	 *	    columns: {}, 
	 *	    rows: {} 
	 *   }
     * };
     * 
     * var schema1 = { 
     *  columns: {...}, 
     *  rows: {} 
     * };
     */
    read(obj: object, option: number): void;

    /**
     * 주어진 스키마 객체를 현재 엔티티로 읽어옵니다.
     * 
     * @param obj - 읽어올 스키마 객체
     * @param createRow - true일 경우, row[0] 기준으로 컬럼을 추가 (기본값: false)
     */
    readSchema(obj: object, createRow?: boolean) : void;

    /**
     * 주어진 객체에서 존재하는 로우만 읽어옵니다.
     * 
     * @param obj - 읽어올 객체
     */
    readData(obj: object): void;

    /**
     * 현재 엔티티를 스키마 타입의 객체로 변환하여 반환합니다.
     * 
     * @param vOpt - 쓰기 옵션 (기본값: 0)
     * @returns 스키마 타입의 객체입니다.
     */
    write(vOpt?: number): object;

    /**
     * 현재 엔티티의 스키마를 스키마 타입의 객체로 변환하여 반환합니다.
     * 
     * @param vOpt - 쓰기 옵션 (기본값: 0)
     * @returns 스키마 타입의 객체입니다.
     */
    writeSchema(vOpt?: number): object;

    /**
     * 현재 엔티티의 데이터를 스키마 타입의 객체로 변환하여 반환합니다.
     * 
     * @param vOpt - 쓰기 옵션 (기본값: 0)
     * @returns 스키마 타입의 객체입니다.
     */
    writeData(vOpt?: number): object;

    /**
     * columns 컬렉션에 포함된 MetaColumn의 유효성을 검사합니다.   
     * - required 속성과 constraints 를 기준으로 value 값의 유효성을 검사합니다.  
     * 
     * @returns 전체컬럼의 유효성 검사 결과를 반환합니다.
     */
    validate(): boolean;

    /**
     * 현재 엔티티의 깊은 복사본을 생성하여 반환합니다.
     * 
     * @returns 복제된 엔티티 객체입니다.
     */
    abstract clone(): this;

    /**
     * 현재 엔티티의 복사본을 생성하여 반환합니다.
     * 
     * @returns 복사된 엔티티 객체입니다.
     */
    abstract copy(...args: any[]): this;
}

export default BaseEntity;
export { BaseEntity };