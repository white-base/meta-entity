/**
 * This is the transmission interface.
 */
declare interface ITransaction {

    /**
     * Accept the change. (commit)
     */
    acceptChanges()

    /**
     * Reject the change (rollback)
     */
    rejectChanges()

}

export = ITransaction;