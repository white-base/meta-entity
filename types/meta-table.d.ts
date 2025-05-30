import type { BaseEntity }                  from './base-entity.d.ts';
import type { ITransaction }                from './i-transaction.d.ts';
import type { MetaTableColumnCollection }   from './collection-meta-table-column.d.ts';
import type { MetaColumn }                  from './meta-column.d.ts';

/**
 * This class models database tables and manages the collection and table names of columns.  
 * You can also support transactions to commit or roll back changes.  
 */
declare class MetaTable extends BaseEntity implements ITransaction {

    /**
     * Creates a table entity with a given name.
     * 
     * @param name - Table name.
     */
    constructor(name: string);

    /**
     * Indicates the name of the table.
     */
    tableName: string;

   /**
    * Collection of columns in the table.
    */
    columns: MetaTableColumnCollection<MetaColumn>;

    /**
     * Returns objects in serialized form according to specific options. Circular references are replaced by values of '$ref'.
     * 
     * @param mode - Import option. (Default: 0)  
     * - 0 : Reference structure (_guid: Yes, $ref: Yes)  
     * - 1: Redundant structure (_guid: Yes, $ref: Yes)  
     * - 2: Non-tidal rescue (_guid: No, $ref: No)  
     * @param context - Top objects that currently own the object. (Default: {})
     * @returns Serialized object.
     * 
     * @example
     * const serializedObject = table.getObject(2);
     */
   getObject(mode?: number, context?: object | object[]): object;

    /**
     * Reflects a given serialized object to the current object. This action initializes the object.
     * 
     * @param guidObj - Object of the guid type to serialize.
     * @param guidRootObj - The source object setting the current object. (Default: oGuid)
     */
   setObject(guidObj: object, guidRootObj?: object): void; 

    /**
     * Creates and returns a deep copy of the current object.
     * 
     * @returns This is a replica of the current object.
     */
    clone(): this;

    /**
     * Copy the args column name after running the callback.
     * 
     * @param filter - filter function to select a column
     * @param cols - List of column names to copy
     * @returns {MetaView} The copied meta-view object.
     */
    copy(filter: Function, cols: string[]): this;

    /**
     * Copy the column name.
     * 
     * @param cols - List of column names to copy
     * @returns {MetaView} The copied meta-view object.
     */
    copy(...cols: string[]): this;

    /**
     * Copy the target column after the callback is executed.
     * 
     * @param filter - filter function to select a column
     * @returns {MetaView} The copied meta-view object.
     */
    copy(filter: Function): this;

    /**
     * Commit all changes to the current object.  
     * Permission to change: commit  
     */
    acceptChanges(): void;

    /**
     * Rolls back all changes to the current object.  
     * Cancel Changes: rollback  
     */
    rejectChanges(): void;

    /**
     * Returns a list of changes to the current object.
     * 
     * @returns This is a changed list.
     */
    getChanges(): object[];

}

export default MetaTable;
export { MetaTable };