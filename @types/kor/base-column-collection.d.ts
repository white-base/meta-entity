import PropertyCollection   = require("logic-core/collection-property");
import BaseColumn   = require("./base-column");


/**
 * 컬럼 기본 컬렉션
 */
declare abstract class BaseColumnCollection extends PropertyCollection {

    /**
     * 컬럼 기본 컬렉션을 생성합니다.
     * @param onwer 소유자
     * @param baseType 기본 컬럼 타입
     */
    constructor(onwer: object, baseType: BaseColumn);

    /**
     * 기본 컬럼 타입
     */
    _baseType: BaseColumn;

    /**
     * this._onwer 이 엔티티 여부를 확인합니다.
     */
    _ownerIsEntity(): boolean;

    /**
     * 컬럼을 컬렉션에 추가
     * @param name 이름
     * @param value 값
     */
    add(name: string, value: any): number;

    /**
     * 컬럼을 컬렉션에서 삭제
     * @param index 인덱스
     */
    removeAt(index: number): boolean;

    /**
     * 컬렉에 모든 value 값을 default 값으로 초기화
     */
    initValue();

    /**
     * 컬렉션에 별칭 이름(키)가 존재하는지 검사
     * @param key 키
     */
    existAlias(key: string): boolean;

    /**
     * 컬렉션에 컬럼 이름(키)이 존재하는지 검사
     * @param key 키
     */
    existColumnName(key: string): boolean;

    /**
     * 별칭에 대한 컬럼 객체 얻기
     * @param key 키
     */
    alias(key: string): BaseColumn | undefined;

    /**
     * 
     */
    abstract addValue(...args);
}

export = BaseColumnCollection;