import type { PropertyCollection }      from 'logic-core';
import type { MetaTable }               from './meta-table.d.ts';

/**
 * The 'MetaTableCollection' class defines the collection that manages the meta table.  
 * This class provides the ability to add meta-table objects and check the existence of tables in the collection.  
 */
type MetaTableCollection<T = MetaTable> = PropertyCollection<T> & {

    /**
     * Default creator of the meta table used to add collections.
     */
    _baseType: typeof MetaTable;

    /**
     * Adds a meta table to the collection. The table you want to add can be a table name (string) or 'MetaTable' object.
     * 
     * @param table - Metatable to add. You can receive a string (table name) or an object of type 'MetaTable'.
     * @returns The index of the added table. The index represents the position of the table within the collection.
     * 
     * @example
     * const index = collection.add("user"); // Add meta table with string (table name)
     * const index = collection.add(new MetaTable("products")); // `MetaTable` 객체로 추가
     */
    add(table: string | MetaTable): number;

    /**
     * Verify that the specified table name exists in the collection.
     * 
     * @param key - table name to check.
     * @returns Returns 'true' if the table name exists in the collection, or 'false'.
     * 
     * @example
     * constexists = collection.existTablename("user"); // Check the existence of the table name "user"
     */
    existTablename(key: string): boolean;
};

export interface MetaTableCollectionConstructor {
    /**
     * Creates a 'MetaTableCollection' object.  
     * This object creates a collection that manages the meta table.  
     * 
     * @param owner - Specifies the owner object of this collection.
     */
    new <T = MetaTable>(owner: object): MetaTableCollection<T>;
}

declare const MetaTableCollection: MetaTableCollectionConstructor;

export default MetaTableCollection;
export { MetaTableCollection };