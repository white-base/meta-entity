/**
 * Schema control interface.
 */
declare interface ISchemaControl {

    /**
     * Gets the schema.
     */
    readSchema(...args);

    /**
     * Export the schema. 
     */
    writeSchema(...args);
}

export default ISchemaControl;
export { ISchemaControl };