/**** i-transaction.js | ITransaction ****/
//==============================================================
import { ExtendError }      from 'logic-core';

/**
 * 트렌젝션 인터페이스 입니다.
 * 
 * @interface
 * @constructs _L.Interface.ITransaction
 */
class ITransaction {
    
    static _NS = 'Interface';    // namespace
    static _KIND = 'interface';
    
    constructor() {
    }

    /**
     * 변경을 수락합니다. (commit)
     * 
     * @abstract
     */
    acceptChanges() {
        throw new ExtendError(/EL02251/, null, ['ITransaction']);
    }

    /**
     * 변경을 거부합니다. (rollback)
     * 
     * @abstract
     */
    rejectChanges() {
        throw new ExtendError(/EL02252/, null, ['ITransaction']);
    }
}

export default ITransaction;
export { ITransaction };