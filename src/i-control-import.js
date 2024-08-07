/**** i-control-import.js | _L.Interface.IImportControl ****/
(function(_global) {
    'use strict';

    var isNode = typeof window !== 'undefined' ? false : true;
    //==============================================================
    // 1. import module
    if (isNode) {                                                               // strip:
        var _Message                    = require('./message-wrap').Message;    // strip:
        var _ExtendError                = require('logic-core').ExtendError;    // strip:
    }                                                                           // strip:
    var $Message                    = _global._L.Message;       // modify:
    var $ExtendError                = _global._L.ExtendError;   // modify:

    var Message                 = _Message              || $Message;            // strip:
    var ExtendError             = _ExtendError          || $ExtendError;        // strip:
    
    //==============================================================
    // 2. module dependency check
    if (typeof ExtendError === 'undefined') throw new Error(Message.get('ES011', ['ExtendError', 'extend-error']));

    //==============================================================
    // 3. module implementation   
    var IImportControl  = (function () {
        /**
         * 가져오기 제어 인터페이스 입니다.
         * @constructs _L.Interface.IImportControl
         * @interface
         */
        function IImportControl() {
        }
    
        IImportControl._NS = 'Interface';    // namespace
        IImportControl._KIND = 'interface';

        /**
         * 대상을 가져옵니다. (읽기)
         * @abstract
         */
        IImportControl.prototype.read  = function() {
            throw new ExtendError(/EL02221/, null, ['IImportControl']);
        };
    
        return IImportControl;
        
    }());

    //==============================================================
    // 4. module export
    if (isNode) exports.IImportControl  = IImportControl;    // strip:

    // create namespace
    _global._L.Interface                = _global._L.Interface || {};
        
    _global._L.IImportControl = IImportControl;
    _global._L.Interface.IImportControl = IImportControl;

}(typeof window !== 'undefined' ? window : global));