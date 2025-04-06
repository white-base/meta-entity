/**** i-transaction.js | _L.Interface.ITransaction ****/
//==============================================================
import { ExtendError } from 'logic-core';

var ITransaction  = (function () {
    /**
     * 트렌젝션 인터페이스 입니다.
     * @constructs _L.Interface.ITransaction
     * @interface
     */
    function ITransaction() {
    }

    ITransaction._NS = 'Interface';    // namespace
    ITransaction._KIND = 'interface';

    /**
     * 변경을 수락합니다. (commit)
     * @abstract
     */
    ITransaction.prototype.acceptChanges  = function() {
        throw new ExtendError(/EL02251/, null, ['ITransaction']);
    };

    /**
     * 변경을 거부합니다. (rollback)
     * @abstract
     */
    ITransaction.prototype.rejectChanges  = function() {
        throw new ExtendError(/EL02252/, null, ['ITransaction']);
    };

    return ITransaction;
    
}());

export default ITransaction;
export { ITransaction };