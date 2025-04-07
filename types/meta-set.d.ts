import {MetaElement}            from "logic-core";
import {ISerialize}             from "logic-core";
import ISchemaControl           from './i-control-schema';
import IExportControl           from './i-control-export';
import IImportControl           from './i-control-import';
import ITransaction             from './i-transaction';
import MetaTableCollection      from './collection-meta-table';
import MetaViewCollection       from './collection-meta-view';

/**
 * The 'MetaSet' class manages metadata sets and includes a collection of tables and views.
 * This class provides features such as serialization of data, schema conversion, data loading and storage, and more.
 */
declare class MetaSet extends MetaElement 
    implements ISerialize, ISchemaControl, IExportControl, IImportControl, ITransaction {

        /**
     * Creates a 'MetaSet' object.
     * 
     * @param name - Name of the meta set.
     */
    constructor(name: string);

    /**
     * Name of the meta set.
     */
    setName: string;

    /**
     * A collection of meta tables.
     */
    tables: MetaTableCollection;

    /**
     * This is a collection of meta-views.
     */
    views: MetaViewCollection;

    /**
     * Enable automatic transaction change. Default is 'false'.
     */
    autoChanges: boolean;

    /**
     * Converts the meta set to a schema object.
     * 
     * @param oGuid - serialized object obtained by 'getObject()'.
     * @returns The transformed schema object.
     * 
     * @example
     * const schema = MetaSet.transformSchema(serializedObject);
     */
    static transformSchema(oGuid: object): object;

    /**
     * Converts the current 'MetaSet' object to a serialized GUID type object.
     * In the serialization process, the cyclic reference is replaced by the value '$ref'.
     * 
     * @param vOpt - Specifies the serialization option.
     *   - '0': Convert to a reference structure (including '_guid' and '$ref')
     *   - '1': Converting to a redundant structure (including '_guid' and '$ref')
     *   - '2': Conversion to non-coordinated structure (excluding '_guid' and '$ref')
     * @param owned - The parent objects that currently own the object. You can receive an object or array of objects.
     * @returns Serialized object.
     * 
     * @example
     * const serialized = metaSet.getObject(2); // Import serialized objects in a non-coordinated structure
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * Sets the serialized GUID type object to the current 'MetaSet' object.
     * During this process, the object is initialized.
     * 
     * @param oGuid - object of serialized GUID type.
     * @param origin - This is the original object that sets the current object. Default is 'oGuid'.
     * 
     * @example
     * metaSet.setObject(serializedObject); // Set serialized objects to the current meta set
     */
    setObject(oGuid: object, origin?: object): void;

    /**
     * Create a new object by replicating the current 'MetaSet' object.
     * 
     * @returns Replicated 'MetaSet' object.
     * 
     * @example
     * const clone = metaSet.clone();
     */
    clone(): this;

    /**
     * Initializes the rows of all views and all tables.
     * 
     * @example
     * metaSet.clear(); // Initialize rows of all views and tables
     */
    clear(): void;

    /**
     * Performs a full initialization operation.
     * 
     * @example
     * metaSet.reset(); // initializing the metaset globally
     */
    reset(): void;

    /**
     * Import or import data (not for merge purposes)
     * Initialize existing data and import new data.
     * 
     * @param obj - Data to be retrieved. You can receive an object or string.
     * @param parse - Optional parser function.
     * 
     * @example
     * metaSet.load (dataObject, JSON.path); // import data object
     */
    load(obj: object | string, parse?: Function): void;

    /**
     * Output (serialize) the meta set object.
     * 
     * @param vOpt - Serialization option.
     *   - '0': Output to reference structure
     *   - '1': Output in duplicate structure
     *   - '2': Output in a non-coordinated structure
     * @param stringify - Optional serialization function. Default is 'JSON.stringify'.
     * @param space - Optional blank string; default is 'undefined'.
     * @returns Serialized string.
     * 
     * @example
     * const jsonString = metaSet.output(2, JSON.stringify, ''); // serialized string output
     */
    output(vOpt?: number, stringify?: Function, space?: string): string;

    /**
     * Read the object and load the meta set.
     * Follow JSON schema rules.
     * 
     * @param obj - Metaset objects, entities, or other objects.
     * @param opt - Optional; default is '3'.
     * 
     * @example
     * metaSet.read(dataObject, 3); // read data objects and load the meta set
     */
    read (obj: object, opt: number): void; // TODO: need to be separated into obj type

    /**
     * Read the schema and apply it to the meta set.
     * If not, set whether an empty column should be created.
     * 
     * @param obj - Schema object or GUID object.
     * @param createRow - If 'true', add a column based on the first row.
     * 
     * @example
     * metaSet.readSchema(schemaObject, true); // Read schema and apply to metaset
     */
    readSchema (obj: object, createRow?: boolean): void; // TODO: need to separate into obj type

    /**
     * Read the data to set the row of the meta set.
     * 
     * @param obj - Data to read.
     * 
     * @example
     * metaSet.readData(dataObject); // Set the row of the metaset by reading the data object
     */
    readData(obj: object): void;

    /**
     * Export the meta set as an object of schema type.
     * 
     * @param vOpt - Export option.
     * @returns Exported schema object.
     * 
     * @example
     * const schemaObject = metaSet.write(1); // Exporting the meta set as schema object
     */
    write(vOpt?: number): object;   // TODO: object 타입 분리

    /**
     * Export the schema (column) of the meta set as an object of schema type.
     * 
     * @param vOpt - Export option.
     * @returnsExported schema object.
     * 
     * @example
     * const schemaObject = metaSet.writeSchema(1); // Export schema (column) as schema object
     */
    writeSchema(vOpt?: number): object;   // TODO: object 타입 분리

    /**
     * Export the data (low) of the meta set as an object of schema type.
     * 
     * @param vOpt - Export option.
     * @returns The exported data object.
     * 
     * @example
     * const dataObject = metaSet.writeData(1); // Export data (low) as schema object
     */
    writeData(vOpt?: number): object;   // TODO: object 타입 분리

    
    /**
     * Allow and commit changes to the meta set.
     * 
     * @example
     * metaSet.acceptChanges(); // Commit changes
     */
    acceptChanges(): void;

    /**
     * Cancel the changes to the meta set.
     * 
     * @example
     * metaSet.rejectChanges(); // Cancel the changes
     */
    rejectChanges(): void;

    /**
     * Verify that there are changes to the meta set.
     * 
     * @returns Return 'true' if there is any change or 'false' if there is no change.
     * 
     * @example
     * const hasChanges = metaSet.hasChanges(); // Check if there are any changes
     */
    hasChanges(): boolean;

}

export = MetaSet;