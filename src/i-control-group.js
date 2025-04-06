/**** i-control-group.js | _L.Interface.IGroupControl ****/
//==============================================================
import { ExtendError } from 'logic-core';

var IGroupControl  = (function () {
    /**
     * 그룹 제어 인터페이스 입니다.
     * @constructs _L.Interface.IGroupControl
     * @interface
     */
    function IGroupControl() {
    }

    IGroupControl._NS = 'Interface';    // namespace
    IGroupControl._KIND = 'interface';

    /**
     * 병합합니다.
     * @abstract
     */
    IGroupControl.prototype.merge  = function() {
        throw new ExtendError(/EL02231/, null, ['IGroupControl']);
    };

    /**
     * 복사합니다.
     * @returns {any}
     * @abstract
     */
    IGroupControl.prototype.copy  = function() {
        throw new ExtendError(/EL02232/, null, ['IGroupControl']);
    };

    return IGroupControl;
    
}());

export default IGroupControl;
export { IGroupControl };