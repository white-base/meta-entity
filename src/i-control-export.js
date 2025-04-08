/**** i-control-export.js | IExportControl ****/
//==============================================================
import { ExtendError }      from 'logic-core';

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

export default IExportControl;
export { IExportControl };