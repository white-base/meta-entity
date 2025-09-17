import type { BaseColumnCollection }    from './base-column-collection.d.ts';
import type { BaseEntity }              from './base-entity.d.ts';
import type { MetaColumn }              from './meta-column.d.ts';
import type { BaseColumn }              from './base-column.d.ts';

/**
 * The 'MetaView Column Collection' class defines the collection that manages the meta-view column.  
 * This class provides the ability to add meta columns, to serialize and manage reference collections.  
 */
type MetaViewColumnCollection<T> = {

    /**
     * List of entities referenced by this collection. Each entity is of type 'BaseEntity'.
     * 
     * @example
     * constructions = collection._refEntities; // Get list of entities
     */
    _refEntities: BaseEntity[];

    /**
     * Converts the current 'MetaView ColumnCollection' object to a serialized object.   
     * In the serialization process, the cyclic reference is replaced by the value '$ref'.  
     * 
     * @param vOpt - Specifies the import option.  
     *   - '0': Convert to a reference structure (including '_guid' and '$ref')  
     *   - '1': Converting to a redundant structure (including '_guid' and '$ref')  
     *   - '2': Conversion to non-coordinated structure (excluding '_guid' and '$ref')  
     * @param owned - The parent objects that currently own the object. You can receive an object or array of objects.
     * @returns Serialized object.
     * 
     * @example
     * const serialized = collection.getObject(2); // Get objects serialized in a non-coordinated structure
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * Adds or sets a column to the collection. When a column is added, actions related to the reference collection are performed.  
     * - When adding a column with 'entity': a reference is added.  
     * - If you add a column without 'entity', register yourself as the owner.  
     * - If a column exists in the collection: 'columns' object is ignored and registers a reference to the returned object.  
     * - If there is no column in the collection: Set 'entity' in the collection; only the top is registered when a reference recursive call is made.  
     * 
     * @param column - The column to be added. You can receive the 'MetaColumn' object or column name (string).
     * @param property - Column properties or reference collection.
     * @param refCollection - Reference collection. Object of type 'BaseColumnCollection'.
     * @returns The index of the added column. The index represents the location of the column within the collection.
     * 
     * @example
     * const index = collection.add(new MetaColumn("price"), property); // `MetaColumn` 객체로 컬럼 추가
     * const index = collection.add("quantity", refCollection); // Add column with string (column name)
     */
    add(column: MetaColumn | string, property?: object | BaseColumnCollection<BaseColumn>, refCollection?: BaseColumnCollection<BaseColumn>): number;
    
    /**
     * Creates a new column with a name and value and adds it to the collection.
     * 
     * @param name - The name of the column you want to add.
     * @param value - Default value for the column. You can receive string, numeric, or Boolean values.
     * @param refCollection - Reference collection. Object of type 'BaseColumnCollection'.
     * @returns Index of the newly added column.
     * 
     * @example
     * const index = collection.addValue ("discount", 10, refCollection"); // Add column with name and value
     */
    addValue(name: string, value: string | number | boolean, refCollection: BaseColumnCollection<BaseColumn>): number;

    /**
     * Adds all columns of a given entity to the collection.
     * 
     * @param entity - The entity to be added to the collection. The object of type 'BaseEntity'.
     * 
     * @example
     * collection.addEntity(entity); // Add all columns of a given entity
     */
    addEntity(entity: BaseEntity): void;
    
} & BaseColumnCollection<T>;

export interface MetaViewColumnCollectionConstructor {
    /**
     * Creates a 'MetaView ColumnCollection' object.  
     * This object creates a collection that manages columns in the meta view.  
     * 
     * @param owner - Specifies the owner object of this collection.
     */
    new <T = MetaColumn>(owner: object): MetaViewColumnCollection<T>;
}

declare const MetaViewColumnCollection: MetaViewColumnCollectionConstructor;

export default MetaViewColumnCollection;
export { MetaViewColumnCollection };