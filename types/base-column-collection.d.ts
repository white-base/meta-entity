import type { PropertyCollection }  from 'logic-core';
import type { BaseColumn }          from './base-column.d.ts';

/**
 * An abstract class that represents the column default collection.
 * This class provides the ability to manage and manipulate various columns.
 * 
 * @extends PropertyCollection
 */
declare abstract class BaseColumnCollection<T> extends PropertyCollection<T> {

    /**
     * Creates a column default collection.
     * 
     * @param owner Owner of the  collection.
     * @param baseType Default column type.
     */
    constructor(owner: object, baseType: BaseColumn);

    /**
     * Save the default column type.
     * 
     * @protected
     */
    _baseType: BaseColumn;

    /**
     * Verify that this._owner is an entity.
     * 
     * @protected
     * @returns {boolean} Bullion value indicating whether the entity exists.
     */
    _ownerIsEntity(): boolean;

    /**
     * Adds a column to the collection.
     * 
     * @param name - The name of the column.
     * @param value - column value.
     * @returns Index of the added column.
     */
    add(name: string, value: any): number;

    /**
     * Deletes the column for the specified index from the collection.
     * 
     * @param index - Index of the column to be deleted.
     * @returns Deletion successful.
     */
    removeAt(index: number): boolean;

    /**
     * Initializes all column values in the collection to their default values.
     */
    initValue(): void;

    /**
     * Examine whether an alias name (key) exists in the collection.
     * 
     * @param key - alias name.
     * @returns Alias name exists.
     */
    existAlias(key: string): boolean;

    /**
     * Examine whether a column name (key) exists in the collection.
     * 
     * @param key - the name of the column.
     * @returns column name exists.
     */
    existColumnName(key: string): boolean;

    /**
     * Obtain column objects for aliases.
     * 
     * @param key - alias name.
     * @returns The column object corresponding to the alias, if it does not exist, is 'undefined'.
     */
    alias(key: string): BaseColumn | undefined;

    /**
     * Abstract method to add values. Subclasses must provide a specific implementation.
     * 
     * @param args - Values to add.
     */
    abstract addValue(...args): void;
    
}

export default BaseColumnCollection;
export { BaseColumnCollection };