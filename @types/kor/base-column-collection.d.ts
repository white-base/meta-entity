import PropertyCollection   = require("logic-core/collection-property");
import BaseColumn   = require("./base-column");


/**
 * 컬럼 기본 컬렉션을 나타내는 추상 클래스입니다.
 * 이 클래스는 다양한 컬럼들을 관리하고 조작하는 기능을 제공합니다.
 * @extends PropertyCollection
 */
declare abstract class BaseColumnCollection extends PropertyCollection {

    /**
     * 컬럼 기본 컬렉션을 생성합니다.
     * @param {object} owner 컬렉션의 소유자입니다.
     * @param {BaseColumn} baseType 기본 컬럼 타입입니다.
     */
    constructor(onwer: object, baseType: BaseColumn);

    /**
     * 기본 컬럼 타입을 저장합니다.
     * @protected
     */
    _baseType: BaseColumn;

    /**
     * this._owner가 엔티티인지 여부를 확인합니다.
     * @protected
     * @returns {boolean} 엔티티 여부를 나타내는 불리언 값입니다.
     */
    _ownerIsEntity(): boolean;

    /**
     * 컬럼을 컬렉션에 추가합니다.
     * @param {string} name - 컬럼 이름입니다.
     * @param {any} value - 컬럼 값입니다.
     * @returns {number} 추가된 컬럼의 인덱스입니다.
     */
    add(name: string, value: any): number;

    /**
     * 지정한 인덱스의 컬럼을 컬렉션에서 삭제합니다.
     * @param {number} index - 삭제할 컬럼의 인덱스입니다.
     * @returns {boolean} 삭제 성공 여부입니다.
     */
    removeAt(index: number): boolean;

    /**
     * 컬렉션에 있는 모든 컬럼 값을 기본 값으로 초기화합니다.
     */
    initValue(): void;

    /**
     * 컬렉션에 별칭 이름(키)이 존재하는지 검사합니다.
     * @param {string} key - 별칭 이름입니다.
     * @returns {boolean} 별칭 이름 존재 여부입니다.
     */
    existAlias(key: string): boolean;

    /**
     * 컬렉션에 컬럼 이름(키)이 존재하는지 검사합니다.
     * @param {string} key - 컬럼 이름입니다.
     * @returns {boolean} 컬럼 이름 존재 여부입니다.
     */
    existColumnName(key: string): boolean;

    /**
     * 별칭에 대한 컬럼 객체를 얻습니다.
     * @param {string} key - 별칭 이름입니다.
     * @returns {BaseColumn | undefined} 별칭에 해당하는 컬럼 객체입니다. 존재하지 않으면 `undefined`입니다.
     */
    alias(key: string): BaseColumn | undefined;

    /**
     * 값을 추가하는 추상 메서드입니다. 서브 클래스에서 구체적인 구현을 제공해야 합니다.
     * @param {...any[]} args - 추가할 값들입니다.
     */
    abstract addValue(...args): void;
}

export = BaseColumnCollection;