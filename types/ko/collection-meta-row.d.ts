import TransactionCollection    = require("./collection-transaction");
import MetaRow                  = require("./meta-row");

declare class MetaRowCollection extends TransactionCollection {

    /**
     * `MetaRowCollection` 클래스의 생성자입니다.
     * 이 클래스는 `MetaRow` 객체들을 관리하는 컬렉션을 제공합니다.
     * 
     * @param owner - 이 컬렉션의 소유자 객체입니다.
     */
    constructor(owner: object);
    
    /**
     * 지정된 인덱스의 프로퍼티 기술자를 가져옵니다.
     * 
     * @param idx - 프로퍼티 기술자를 가져올 인덱스입니다.
     * @returns 지정된 인덱스의 프로퍼티 기술자입니다.
     */
    _getPropDescriptor(idx: number): PropertyDescriptor;

    
    /** @deprecated */
    add(elem: any, desc?: PropertyDescriptor): number;

    /**
     * `MetaRow` 객체를 컬렉션에 추가합니다.
     * 
     * @param row - 추가할 `MetaRow` 객체입니다.
     * @param isCheck - 유효성 검사를 수행할지 여부를 지정합니다. 기본값은 `false`입니다.
     * @returns 추가된 `MetaRow` 객체의 인덱스입니다.
     */
    add(row: MetaRow, isCheck?: boolean): number;

    
    /** @deprecated */
    insertAt(pos: number, elem: any, desc?: PropertyDescriptor): boolean;
    
    /**
     * 컬렉션의 지정된 위치에 `MetaRow` 객체를 삽입합니다.
     * 
     * @param pos - `MetaRow` 객체를 삽입할 위치의 인덱스입니다.
     * @param row - 삽입할 `MetaRow` 객체입니다.
     * @param isCheck - 유효성 검사를 수행할지 여부를 지정합니다. 기본값은 `false`입니다.
     * @returns 삽입 성공 여부를 나타냅니다.
     */
    insertAt(pos: number, row: MetaRow, isCheck?: boolean): boolean;
}

export = MetaRowCollection;