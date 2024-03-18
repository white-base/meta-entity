/**** i-transaction.js | _L.Interface.ITransaction ****/

(function(_global) {
    'use strict';

    var isNode = typeof window !== 'undefined' ? false : true;

    //==============================================================
    // 1. namespace declaration
    _global._L                      = _global._L || {};
    _global._L.Interface            = _global._L.Interface || {};    
    
    //==============================================================
    // 2. import module
    if (isNode) {     
        var _Message                    = require('logic-core').Message;
        var _ExtendError                = require('logic-core').ExtendError;
    } else {
        var $Message                    = _global._L.Message;
        var $ExtendError                = _global._L.ExtendError;
    }
    var Message                 = _Message              || $Message;
    var ExtendError             = _ExtendError          || $ExtendError;

    //==============================================================
    // 3. module dependency check
    if (typeof ExtendError === 'undefined') throw new Error(Message.get('ES011', ['ExtendError', 'extend-error']));

    //==============================================================
    // 4. module implementation   
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
            throw new ExtendError(/EL02361/, null, ['ITransaction']);
        };

        /**
         * 변경을 거부합니다. (rollback)
         * @abstract
         */
        ITransaction.prototype.rejectChanges  = function() {
            throw new ExtendError(/EL02362/, null, ['ITransaction']);
        };

        return ITransaction;
        
    }());

    //==============================================================
    // 5. module export
    if (isNode) {     
        exports.ITransaction = ITransaction;
    } else {
        _global._L.ITransaction = ITransaction;
        _global._L.Interface.ITransaction = ITransaction;     // namespace
    }

}(typeof window !== 'undefined' ? window : global));