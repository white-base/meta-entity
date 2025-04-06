/**** i-control-import.js | _L.Interface.IImportControl ****/
//==============================================================
import { ExtendError } from 'logic-core';

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

export default IImportControl;
export { IImportControl };