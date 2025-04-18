/**** i-control-schema.js | ISchemaControl ****/
//==============================================================
import { ExtendError }      from 'logic-core';

/**
 * 스키마 제어 인터페이스 입니다.
 * 
 * @interface
 * @constructs ISchemaControl
 */
class ISchemaControl {

    static _NS = 'Interface';    // namespace
    static _KIND = 'interface';
    
    constructor() {
    }

    /**
     * 스키마를 가져옵니다.
     * 
     * @abstract
     */
    readSchema() {
        throw new ExtendError(/EL02241/, null, ['ISchemaControl']);
    }

    /**
     * 스키마를 내보냅니다.
     * 
     * @returns {any}
     * @abstract
     */
    writeSchema() {
        throw new ExtendError(/EL02242/, null, ['ISchemaControl']);
    }
}

export default ISchemaControl;
export { ISchemaControl };