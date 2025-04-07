/**** i-control-schema.js | _L.Interface.ISchemaControl ****/
//==============================================================
import { ExtendError }      from 'logic-core';

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

export default ISchemaControl;
export { ISchemaControl };