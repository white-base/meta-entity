/**** i-control-schema.js | _L.Interface.ISchemaControl ****/
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
    var ISchemaControl  = (function () {
        /**
         * 스키마 제어 인터페이스 입니다.
         * @constructs _L.Interface.ISchemaControl
         * @interface
         */
        function ISchemaControl() {
        }

        ISchemaControl._NS = 'Interface';    // namespace
        ISchemaControl._KIND = 'interface';

        /**
         * 스키마를 가져옵니다.
         * @abstract
         */
        ISchemaControl.prototype.readSchema  = function() {
            throw new ExtendError(/EL02241/, null, ['ISchemaControl']);
        };

        /**
         * 스키마를 내보냅니다. 
         * @returns {any}
         * @abstract
         */
        ISchemaControl.prototype.writeSchema  = function() {
            throw new ExtendError(/EL02242/, null, ['ISchemaControl']);
        };
    
        return ISchemaControl;
        
    }());

    //==============================================================
    // 4. module export
    if (isNode) exports.ISchemaControl  = ISchemaControl;    // strip:

    // create namespace
    _global._L.Interface                = _global._L.Interface || {};
        
    _global._L.ISchemaControl = ISchemaControl;
    _global._L.Interface.ISchemaControl = ISchemaControl;
    
}(typeof window !== 'undefined' ? window : global));