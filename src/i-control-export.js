/**** i-control-export.js | _L.Interface.IExportControl ****/
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
    var IExportControl  = (function () {
        /**
         * 내보내기 제어 인터페이스 입니다.
         * @constructs _L.Interface.IExportControl
         * @interface
         */
        function IExportControl() {
        }
    
        IExportControl._NS = 'Interface';    // namespace
        IExportControl._KIND = 'interface';

        /**
         * 대상을 내보냅니다. (쓰기)
         * @returns {any}
         * @abstract
         */
        IExportControl.prototype.write  = function() {
            throw new ExtendError(/EL02211/, null, ['IExportControl']);
        };
    
        return IExportControl;
        
    }());

    //==============================================================
    // 4. module export
    if (isNode) exports.IExportControl = IExportControl;    // strip:

    _global._L.Interface            = _global._L.Interface || {};
    
    _global._L.IExportControl = IExportControl;
    _global._L.Interface.IExportControl = IExportControl;

}(typeof window !== 'undefined' ? window : global));