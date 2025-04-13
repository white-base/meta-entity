/**** i-control-group.js | IGroupControl ****/
//==============================================================
import { ExtendError }      from 'logic-core';

/**
 * 그룹 제어 인터페이스 입니다.
 * 
 * @interface
 * @constructs _L.Interface.IGroupControl
 */
class IGroupControl {

    static _NS = 'Interface';    // namespace
    static _KIND = 'interface';
    
    constructor() {
    }

    /**
     * 병합합니다.
     * 
     * @abstract
     */
    merge() {
        throw new ExtendError(/EL02231/, null, ['IGroupControl']);
    }

    /**
     * 복사합니다.
     * 
     * @returns {any}
     * @abstract
     */
    copy() {
        throw new ExtendError(/EL02232/, null, ['IGroupControl']);
    }
}

export default IGroupControl;
export { IGroupControl };