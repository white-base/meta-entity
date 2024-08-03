import MetaElemet           = require("logic-core/meta-element");
import BaseEntity           = require("./base-entity");

/**
 * `BaseColumn` 클래스는 데이터베이스 또는 유사한 데이터 구조의 기본 컬럼을 정의합니다.
 * 이 추상 클래스는 컬럼의 이름, 별칭, 기본값 및 기타 속성을 관리하는 기능을 제공합니다.
 */
declare abstract class BaseColumn extends MetaElemet {

    /**
     * `BaseColumn` 객체를 생성합니다.
     * @param name - 컬럼의 이름을 지정합니다.
     * @param entity - 이 컬럼이 속한 엔티티를 지정합니다. `BaseEntity` 타입의 객체여야 합니다.
     */
    constructor(name: string, entity: BaseEntity);

    /**
     * 이 컬럼의 고유 키를 나타냅니다.
     */
    $key: string;

    /**
     * 컬럼의 별칭을 나타냅니다. 별칭은 컬럼의 다른 이름으로 사용됩니다.
     */
    $alias: string;

    /**
     * 이 컬럼이 속한 엔티티를 나타냅니다. `BaseEntity` 타입의 객체입니다.
     */
    _entity: BaseEntity;

    /**
     * 컬럼의 값 타입을 정의합니다. 이 속성은 컬럼 값의 타입을 설정하는 데 사용됩니다.
     */
    _valueTypes: any;

    /**
     * 컬럼의 이름을 나타냅니다. `_name`과 동일합니다.
     */
    columnName: string;

    /**
     * 컬럼의 별칭을 설정하거나 가져옵니다. 별칭은 데이터 전송 및 로우값 설정 시 사용됩니다.
     * 사용처 (기본값 = columnName )
     * - Bind-command-ajax._execBind() : 데이터 전송시  
     * - BaseBind.setValue(row) : 로우값 을 엔티티에 설정시  
     * - getValue() : row 에 활용함  
     */
    alias: string;

    /**
     *  컬럼의 기본값을 설정합니다.
     */
    default: string | number | boolean;

    /**
     * 컬럼에 대한 설명을 제공합니다.
     */
    caption: string;

    /**
     * 컬럼의 현재 값을 가져오거나 설정합니다.
     */
    value: any;     // TODO: default 와 일치해야할듯

    /**
     * 현재 컬럼 객체를 직렬화된 객체로 변환합니다. 이 과정에서 순환 참조는 `$ref` 값으로 대체됩니다.
     * @param vOpt - 가져오기 옵션을 지정합니다.
     *   - `0`: 참조 구조로 변환 (`_guid`와 `$ref` 포함)
     *   - `1`: 중복 구조로 변환 (`_guid`와 `$ref` 포함)
     *   - `2`: 비침조 구조로 변환 (`_guid`와 `$ref` 제외)
     * @param owned - 현재 객체를 소유하는 상위 객체들입니다. 객체 또는 객체 배열을 받을 수 있습니다.
     * @returns 직렬화된 객체입니다.
     * 
     * @example
     * const serialized = column.getObject(0);
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * 직렬화된 `guid` 타입의 객체를 사용하여 현재 컬럼 객체를 설정합니다.
     * 이 과정에서 현재 객체는 초기화됩니다.
     * @param oGuid - 직렬화된 `guid` 타입의 객체입니다.
     * @param origin - 현재 객체를 설정하는 원본 객체입니다. 기본값은 `oGuid`입니다.
     * 
     * @example
     * column.setObject(serializedObject);
     */
    setObject(oGuid: object, origin?: object);

    
    /**
     * 현재 컬럼 객체의 복제본을 생성합니다. 이 메서드는 추상 메서드로, 서브클래스에서 구현되어야 합니다.
     * @returns 현재 객체의 복제본입니다.
     */
    abstract clone(): this;
}

export = BaseColumn;