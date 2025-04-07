/**
 * 트렌젝션 인터페이스 입니다.
 */
declare interface ITransaction {

    /**
     * 변경을 수락합니다. (commit)
     */
    acceptChanges()

    /**
     * 변경을 거부합니다. (rollback)
     */
    rejectChanges()

}

export default ITransaction;
export { ITransaction };