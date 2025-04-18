/**** i-control-import.js | IImportControl ****/
//==============================================================
import { ExtendError }      from 'logic-core';

/**
 * 가져오기 제어 인터페이스 입니다.
 * 
 * @interface
 * @constructs IImportControl
 */
class IImportControl {

    static _NS = 'Interface';    // namespace
    static _KIND = 'interface';
    
    constructor() {
    }

    /**
     * 대상을 가져옵니다. (읽기)
     * 
     * @abstract
     */
    read() {
        throw new ExtendError(/EL02221/, null, ['IImportControl']);
    }
}

export default IImportControl;
export { IImportControl };