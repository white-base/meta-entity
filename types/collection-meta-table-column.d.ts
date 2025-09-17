import type { BaseColumnCollection }    from './base-column-collection.d.ts';
import type { BaseColumn }              from './base-column.d.ts';
import type { MetaColumn }              from './meta-column.d.ts';

/**
 * The 'MetaTableCollection' class defines the collection that manages the columns in the table.  
 * This class provides additional and management capabilities for columns.  
 */
type MetaTableColumnCollection<T> = {

    /**
     * Adds a column to the collection.  
     * The column can be the column name or the object 'BaseColumn'.  
     * 
     * @param column - This column is to be added. You can receive an object of the type string (column name) or 'Base Column'.
     * @param property - Column properties (optional, only used when `column` is a string)
     * @returns Index of the added column.
     * 
     * @example
     * const index = collection.add("user_id"); // add as string (column name)
     * const index = collection.add(new BaseColumn("user_name", entity)); // BaseColumn 객체로 추가
     */
    add(column: string | BaseColumn, property?: object): number;

    /**
     * Add a new column to the collection using the name and value. The column is created internally.
     * 
     * @param name - The name of the column to be added.
     * @param value - Default value for the column. You can receive string, numeric, or Boolean values.
     * @returns This is the newly created 'BaseColumn' object.
     * 
     * @example
     * const column = collection.addValue("user_age", 30); // Add column with name and value
     */
    addValue(name: string, value: string | number | boolean): BaseColumn;
    
} & BaseColumnCollection<T>;

export interface MetaTableColumnCollectionConstructor {
    /**
     * Creates a 'MetaTableCollection' object.  
     * This object creates a collection that manages the columns in the table.  
     * 
     * @param owner - Specifies the owner object of this collection.
     */
    new <T = MetaColumn>(owner: object): MetaTableColumnCollection<T>;
}
  
declare const MetaTableColumnCollection: MetaTableColumnCollectionConstructor;

export default MetaTableColumnCollection;
export { MetaTableColumnCollection };