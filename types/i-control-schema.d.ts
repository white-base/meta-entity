/**
 * Schema control interface.
 */
declare interface ISchemaControl {

    /**
     * Gets the schema.
     */
    readSchema(...args: any[]): void;

    /**
     * Export the schema. 
     */
    writeSchema(...args: any[]): void;
}

export default ISchemaControl;
export { ISchemaControl };