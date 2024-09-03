/**
 * 스키마 제어 인터페이스 입니다.
 */
declare interface ISchemaControl {

    /**
     * 스키마를 가져옵니다.
     */
    readSchema(...args);

    /**
     * 스키마를 내보냅니다. 
     */
    writeSchema(...args);
}

export = ISchemaControl;