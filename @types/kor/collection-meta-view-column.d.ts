import BaseColumnCollection           = require("./base-column-collection");
import BaseEntity           = require("./base-entity");
import MetaColumn           = require("./meta-column");

/**
 * `MetaViewColumnCollection` 클래스는 메타 뷰 컬럼을 관리하는 컬렉션을 정의합니다.
 * 이 클래스는 메타 컬럼을 추가하고, 직렬화 및 참조 컬렉션을 관리하는 기능을 제공합니다.
 */
declare class MetaViewColumnCollection extends BaseColumnCollection {

    /**
     * `MetaViewColumnCollection` 객체를 생성합니다.
     * 이 객체는 메타 뷰의 컬럼을 관리하는 컬렉션을 생성합니다.
     * 
     * @param owner - 이 컬렉션의 소유자 객체를 지정합니다.
     */
    constructor(owner: object);

    /**
     * 이 컬렉션이 참조하는 엔티티 목록입니다. 각 엔티티는 `BaseEntity` 타입입니다.
     * 
     * @example
     * const entities = collection._refEntities; // 엔티티 목록을 가져옴
     */
    _refEntities: BaseEntity[];

    /**
     * 현재 `MetaViewColumnCollection` 객체를 직렬화된 객체로 변환합니다. 
     * 직렬화 과정에서 순환 참조는 `$ref` 값으로 대체됩니다.
     * 
     * @param vOpt - 가져오기 옵션을 지정합니다.
     *   - `0`: 참조 구조로 변환 (`_guid`와 `$ref` 포함)
     *   - `1`: 중복 구조로 변환 (`_guid`와 `$ref` 포함)
     *   - `2`: 비침조 구조로 변환 (`_guid`와 `$ref` 제외)
     * @param owned - 현재 객체를 소유하는 상위 객체들입니다. 객체 또는 객체 배열을 받을 수 있습니다.
     * @returns 직렬화된 객체입니다.
     * 
     * @example
     * const serialized = collection.getObject(2); // 비침조 구조로 직렬화된 객체를 가져옴
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * 컬럼을 컬렉션에 추가하거나 설정합니다. 컬럼이 추가될 때, 참조 컬렉션과 관련된 동작이 수행됩니다.
     * - `entity`가 있는 컬럼을 추가할 경우: 참조가 추가됩니다.
     * - `entity`가 없는 컬럼을 추가할 경우: 자신을 소유자로 등록합니다.
     * - 컬렉션에 컬럼이 존재할 경우: `columns` 객체는 무시되고, 리턴한 객체의 참조를 등록합니다.
     * - 컬렉션에 컬럼이 없을 경우: 컬렉션에 `entity`를 설정합니다. 참조 재귀 호출 시 최상위만 등록됩니다.
     * 
     * @param column - 추가할 컬럼입니다. `MetaColumn` 객체 또는 컬럼명(문자열)을 받을 수 있습니다.
     * @param refCollection - 참조 컬렉션입니다. `BaseColumnCollection` 타입의 객체입니다.
     * @returns 추가된 컬럼의 인덱스입니다. 인덱스는 컬렉션 내에서 컬럼의 위치를 나타냅니다.
     * 
     * @example
     * const index = collection.add(new MetaColumn("price"), refCollection); // `MetaColumn` 객체로 컬럼 추가
     * const index = collection.add("quantity", refCollection); // 문자열(컬럼명)으로 컬럼 추가
     */
    add(column: MetaColumn | string, refCollection: BaseColumnCollection): number;

    /**
     * 이름과 값으로 새 컬럼을 생성하고 컬렉션에 추가합니다.
     * 
     * @param name - 새로 추가할 컬럼의 이름입니다.
     * @param value - 컬럼의 기본값입니다. 문자열, 숫자 또는 불리언 값을 받을 수 있습니다.
     * @param refCollection - 참조 컬렉션입니다. `BaseColumnCollection` 타입의 객체입니다.
     * @returns 새로 추가된 컬럼의 인덱스입니다.
     * 
     * @example
     * const index = collection.addValue("discount", 10, refCollection); // 이름과 값으로 컬럼 추가
     */
    addValue(name: string, value: string | number | boolean, refCollection: BaseColumnCollection): number;

    /**
     * 주어진 엔티티의 모든 컬럼을 컬렉션에 추가합니다.
     * 
     * @param entity - 컬렉션에 추가할 엔티티입니다. `BaseEntity` 타입의 객체입니다.
     * 
     * @example
     * collection.addEntity(entity); // 주어진 엔티티의 모든 컬럼을 추가
     */
    addEntity(entity: BaseEntity): void;
}

export = MetaViewColumnCollection;