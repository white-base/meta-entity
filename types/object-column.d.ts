import type { BaseColumn }          from './base-column.d.ts';
import type { BaseEntity }          from './base-entity.d.ts';

/**
 * The 'Object Column' class inherits the 'Base Column' to define a column that addresses object properties.  
 * This class provides properties loading, serializing and setting of columns, and replicating columns.  
 */
declare class ObjectColumn extends BaseColumn {

    /**
     * Creates an object 'ObjectColumn'.
     * 
     * @param name - The name of the object column.
     * @param entity - 'BaseEntity' object that owns this column.
     * @param prop - Properties of the object column.
     */
    constructor(name: string, entity?: BaseEntity, prop?: object);
    
    /**
     * Loads the properties of the object.
     * 
     * @param prop - Property object to load.
     * 
     * @example
     * objectColumn._load ({key: 'value'}); // Load the property and apply it to the column
     */
    _load(prop: object): void; // TODO: type conversion

    /**
     * Converts the current 'Object Column' object to a serialized GUID type object.  
     * In the serialization process, the cyclic reference is replaced by the value '$ref'.  
     * 
     * @param mode - Serialization option.  
     *   - '0': Convert to a reference structure (including '_guid' and '$ref')  
     *   - '1': Converting to a redundant structure (including '_guid' and '$ref')  
     *   - '2': Conversion to non-coordinated structure (excluding '_guid' and '$ref')  
     * @param context - The parent objects that currently own the object. You can receive an object or array of objects.
     * @returns Serialized object.
     * 
     * @example
     * const serialized = objectColumn.getObject(1); // Import serialized objects into reference structures
     */
    getObject(mode?: number, context?: object | object[]): object;

    /**
     * Sets the serialized GUID type object to the current 'Object Column' object.  
     * During this process, the object is initialized.  
     * 
     * @param guidObj - object of serialized GUID type.
     * @param guidRootObj - This is the original object that sets the current object. Default is 'oGuid'.
     * 
     * @example
     * objectColumn.setObject(serializedObject); // Set serialized objects to the current column
     */
    setObject(guidObj: object, guidRootObj?: object): void;

    /**
     * Replicate the 'Object Column' object to create a new object.
     * 
     * @param entity - The entity to be replicated, if not specified, will be replicated to the current entity.
     * @returns Replicated 'ObjectColumn' object.
     * 
     * @example
     * const clone = objectColumn.clone(); // Replicate columns to current entity
     * const clusteredWithEntity = objectColumn.clone; // Replicate columns to specified entities
     */
    clone(entity?: BaseEntity): this;

}

export default ObjectColumn;
export { ObjectColumn };