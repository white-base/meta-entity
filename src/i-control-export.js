/**** i-control-export.js | IExportControl ****/
//==============================================================
import { ExtendError }      from 'logic-core';


/**
 * 내보내기 제어 인터페이스 입니다.
 * 
 * @interface
 * @constructs IExportControl
 */
class IExportControl {

    static _NS = 'Interface';    // namespace
    static _KIND = 'interface';
    
    constructor() {
    }

    /**
     * 대상을 내보냅니다. (쓰기)
     * 
     * @returns {any}
     * @abstract
     */
    write() {
        throw new ExtendError(/EL02211/, null, ['IExportControl']);
    }
}

export default IExportControl;
export { IExportControl };