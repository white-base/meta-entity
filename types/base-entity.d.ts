import type { MetaElement }             from 'logic-core';
import type { ISerialize }              from 'logic-core';
import type { IGroupControl }           from './i-control-group.d.ts';
import type { IExportControl }          from './i-control-export.d.ts';
import type { IImportControl }          from './i-control-import.d.ts';
import type { ISchemaControl }          from './i-control-schema.d.ts';
import type { MetaSet }                 from './meta-set.d.ts';
import type { BaseColumnCollection }    from './base-column-collection.d.ts';
import type { MetaRowCollection }       from './collection-meta-row.d.ts';
import type { MetaRow }                 from './meta-row.d.ts';
import type { MetaView }                from './meta-view.d.ts';
import type { BaseColumn }              from './base-column.d.ts';

/**
 * This class models entities in the database (e.g., tables, views, etc.), and manages column and raw data.  
 * It implements various interfaces to support transactions, serialization, schema conversion, and more.  
 */
declare abstract class BaseEntity extends MetaElement 
    implements IGroupControl, IExportControl, IImportControl, ISchemaControl, ISerialize {

    /**
     * Creates an entity with a given name.
     * 
     * @param name - The entity name.
     */
    constructor(name: string);

    /**
     * Metaset to which the entity belongs.
     */
    protected _metaSet: MetaSet;

    /**
     * The collection of items (properties) for the entity.
     * 
     * @readonly
     */
    columns: any;

    /**
     * Alias of property 'columns'.
     */
    cols: any;

    /**
     * Data (low) collection of entities.
     */
    readonly rows: MetaRowCollection<MetaRow>;

    /**
     * Converts a given serialization object to a schema object.
     * 
     * @param oGuid - object obtained from getObject().
     * @returns The transformed schema object.
     */
    static transformSchema (oGuid: object): object; // TODO: Defined as detailed type

    /**
     * Creates and sets rows for a given entity.
     * 
     * @param entity - The entity to be built.
     * @param callback - Callback to be called after row generation.
     * @param items - Row name to select, [], or full selection when undefined.
     * @returns The created entity.
     */
    protected _buildEntity(entity: BaseEntity, callback: Function, items: string[]): BaseEntity;

    /**
     * Read the entity according to the given option.
     * 
     * @param entity - Destination entity.
     * @param option - Read option.
     */
    protected _readEntity(entity: BaseEntity, option: number): void;

    /**
     * Reads schema information from a given object.
     * 
     * @param obj - Destination object.
     * @param createRow - Whether to create a column with a row name if there is no column (default: false)
     * @param origin - Original object.
     */
    protected _readSchema(obj: object, createRow?: boolean, origin?: object): void;

    /**
     * Returns objects in serialized form according to specific options; cyclic references are replaced by $ref values.
     * 
     * @param mode - Import option. (Default: 0)  
     * - 0 : Reference structure (_guid: Yes, $ref: Yes)  
     * - 1: Redundant structure (_guid: Yes, $ref: Yes)  
     * - 2: Non-tidal rescue (_guid: No, $ref: No)  
     * @param context - Top objects that currently own the object. (Default: {})
     * @returns Serialized object.
     * 
     * @example
     * const serializedObject = entity.getObject(2);
     */
    getObject(mode?: number, context?: object | Array<object>): object;

    /**
     * Initializes all data in the entity.
     */
    clear(): void;

    /**
     * Initializes the entity's columns and data.
     */
    reset(): void;

    /**
     * Creates and returns a new row that matches the column structure.
     * 
     * @returns The MetaRow object created.
     */
    newRow(): MetaRow;

    /**
     * Returns the value of the column as a MetaRow type object.
     * 
     * @returns The MetaRow object with the value of the column set.
     */
    getValue(): MetaRow;

    /**
     * Set the MetaRow value to the value in the column.
     * 
     * @param row - MetaRow object to set.
     */
    setValue(row: MetaRow): void;

    /**
     * Merges the given entity with the current entity.
     * 
     * @param target - Destination entity to merge.
     * @param option - Merge option. (TODO: type definition required)
     * @param matchType - Whether or not a row validation exists. (Default: false)
     */
    merge(target: BaseEntity, option: number, matchType?: boolean): void;

    /**
     * Query rows according to the given callback function.
     * 
     * @param filter - A callback function that defines the query conditions.
     * @returns This is the searched entity.
     */
    select(filter:Function): MetaView; // TODO: Defined as function detail

    /**
     * Query rows that meet the given filter conditions.
     * 
     * @param filter - Filter conditions.
     * @param cols - The name of the column to be set for the filter.
     * @returns This is the searched entity.
     */
    select(filter: Function, ...cols: string[]): MetaView;

    /**
     * Enquires rows that match the specified column.
     * 
     * @param cols - column specification.
     * @returns This is the searched entity.
     */
    select(...cols: string[]): MetaView;

    /**
     * Gets the given object to the current entity. Initializes existing data and loads new data.
     * 
     * @param obj - the object to be imported.
     * @param parse - parser function. (Optional)
     */
    load(obj: object | string, parse?: Function): void;

    /**
     * Outputs the current entity as a serialized string.
     * 
     * @param vOpt - Optional. (0, 1, 2)
     * @param stringify - This is a custom parser function. (Optional)
     * @param space - A blank string to use in the output. (Optional)
     * @returns Serialized string.
     */
    output(vOpt: number, stringify?: Function, space?: string): string;

    /**
     * Reads the given object as an entity. Follow JSON schema rules.
     * 
     * @param obj - object to be read.
     * @param option - Read option. (Default: 3) (TODO: type definition required)
     * 
     * @example
     * var schema1 = { 
	 *    table: { 
	 *	    columns: {}, 
	 *	    rows: {} 
	 *   }
     * };
     * 
     * var schema1 = { 
     *  columns: {...}, 
     *  rows: {} 
     * };
     */
    read(obj: object, option: number): void;

    /**
     * Reads the given schema object as the current entity.
     * 
     * @param obj - Schema object to read.
     * @param createRow - If true, add columns by row[0] (default: false)
     */
    readSchema(obj: object, createRow?: boolean) : void;

    /**
     * Reads only rows that exist on a given object.
     * 
     * @param obj - The object to be read.
     */
    readData(obj: object): void;

    /**
     * Returns the current entity by converting it to an object of schema type.
     * 
     * @param vOpt - Optional. (Default: 0)
     * @returns The object of the  schema type.
     */
    write(vOpt?: number): object;

    /**
     * Returns the schema of the current entity by converting it to an object of schema type.
     * 
     * @param vOpt - Optional. (Default: 0)
     * @returns The object of the schema type.
     */
    writeSchema(vOpt?: number): object;

    /**
     * Returns data from the current entity by converting it to an object of schema type.
     * 
     * @param vOpt - Optional. (Default: 0)
     * @returns The object of the  schema type.
     */
    writeData(vOpt?: number): object;

    /**
     * Validates the MetaColumn included in the columns collection.  
     * - Validates the value based on required properties and constructs.  
     * 
     * @returns Returns the validation results of the entire column.
     */
    validate(): boolean;

    /**
     * Creates and returns a deep copy of the current entity.
     * 
     * @returns This is a replicated entity object.
     */
    abstract clone(): this;

    /**
     * Creates and returns a copy of the current entity.
     * 
     * @returns The copied entity object.
     */
    abstract copy(...args: any[]): this;

}

export default BaseEntity;
export { BaseEntity };