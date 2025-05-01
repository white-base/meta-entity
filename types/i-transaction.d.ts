/**
 * This is the transmission interface.
 */
declare interface ITransaction {

    /**
     * Accept the change. (commit)
     */
    acceptChanges(): void

    /**
     * Reject the change (rollback)
     */
    rejectChanges(): void

}

export default ITransaction;
export { ITransaction };