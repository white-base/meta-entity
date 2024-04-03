import TransactionCollection    = require("./collection-transaction");
import MetaRow                  = require("./meta-row");

declare class MetaRowCollection extends TransactionCollection {

    /**
     * 로우 컬렉션
     * @param owner 소유자
     */
    constructor(owner: object);
    
    /**
     * 프로퍼티 기술자 설정
     * @param idx 인덱스
     */
    _getPropDescriptor(idx: number);

    /**
     * MetaRow 추가 idx 를 기준으로 검사한다.
     * @param row 추가할 MetaRow
     * @param isCheck 유효성 검사 여부 (기본값 = false)
     */
    add(row: MetaRow, isCheck?: boolean): number;

    /**
     * pos 위치에 추가
     * @param pos 추가할 위치 인덱스
     * @param row 추가할 MetaRow
     * @param isCheck 유효성 검사 여부 (기본값 = false)
     */
    insertAt(pos: number, row: MetaRow, isCheck?: boolean): boolean;

}

export = MetaRowCollection;