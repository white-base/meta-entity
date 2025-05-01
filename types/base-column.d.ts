import type { MetaElement }         from 'logic-core';
import type { BaseEntity }          from './base-entity.d.ts';

/**
 * The 'BaseColumn' class defines the default column for a database or similar data structure.  
 * This abstract class provides the ability to manage the names, aliases, defaults, and other properties of a column.  
 */
declare abstract class BaseColumn extends MetaElement {

    /**
     * Creates a 'Base Column' object.
     * 
     * @param name - Specifies the name of the column.
     * @param entity - Specifies the entity to which this column belongs. It must be of type 'BaseEntity'.
     */
    constructor(name: string, entity: BaseEntity);

    /**
     * Indicates the unique key for this column.
     */
    $key: string;

    /**
     * Internal value of the column value.
     */
    $value: string;

    /**
     * Indicates the alias for the column. The alias is used as another name for the column.
     */
    $alias: string;

    /**
     * Indicates the entity to which this column belongs. Object of type 'BaseEntity'.
     */
    protected _entity: BaseEntity;

    /**
     * Defines the value type for the column. This property is used to set the value type for the column.
     */
    protected _valueTypes: any;

    /**
     * Indicates the name of the column. Same as '_name'.
     */
    columnName: string;

    /**
     * Sets or imports aliases for columns. Aliases are used to transfer data and set low values.  
     * Where to use (default = columnName)  
     * - Bind-command-ajax._execBind(): When transmitting data  
     * - BaseBind.setValue(row): When setting a low value to an entity  
     * - getValue(): Used for row  
     */
    alias: string;

    /**
     *  Sets the default value for the column.
     */
    default: string | number | boolean;

    /**
     * Provides a description of the column.
     */
    caption: string;

    /**
     * Gets or sets the current value of the column.
     */
    value: any; // TODO: Must match default

    /**
     * Gets or sets the current value of the column.
     */
    val: any;    
    
    /**
     * Converts the current column object to a serialized object, which replaces the cyclic reference with the value '$ref'.
     * 
     * @param mode - Specifies the import option.  
     *   - '0': Convert to a reference structure (including '_guid' and '$ref')  
     *   - '1': Converting to a redundant structure (including '_guid' and '$ref')  
     *   - '2': Conversion to non-coordinated structure (excluding '_guid' and '$ref')  
     * @param context - The parent objects that currently own the object. You can receive an object or array of objects.
     * @returns Serialized object.
     * 
     * @example
     * const serialized = column.getObject(0);
     */
    getObject(mode?: number, context?: object | object[]): object;
    
    /**
     * Set the current column object using the serialized 'guid' type of object.  
     * In this process, the current object is initialized.  
     * 
     * @param guidObj - This is a serialized 'guid' type of object.  
     * @param guidRootObj - This is the original object that sets the current object. Default is 'oGuid'.  
     * 
     * @example
     * column.setObject(serializedObject);
     */
    setObject(guidObj: object, guidRootObj?: object): void;

    
    /**
     * Creates a replica of the current column object. This method is an abstract method that must be implemented in a subclass.
     * 
     * @returns This is a replica of the current object.
     */
    abstract clone(): this;
}

export default BaseColumn;
export { BaseColumn };