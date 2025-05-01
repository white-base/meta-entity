import type { PropertyCollection }  from 'logic-core';
import type { BaseColumn }          from './base-column.d.ts';

/**
 * An abstract class that represents the column default collection.
 * This class provides the ability to manage and manipulate various columns.
 * 
 * @extends PropertyCollection
 */
type BaseColumnCollection<T> = PropertyCollection<T> & {

    /**
     * Save the default column type.
     * 
     * @protected
     */
    _baseType: typeof BaseColumn;

    /**
     * Verify that this._owner is an entity.
     * 
     * @protected
     * @returns {boolean} Bullion value indicating whether the entity exists.
     */
    _ownerIsEntity(): boolean;

    /**
     * Returns the property descriptor for the collection index.
     * 
     * @paramidx Index Number
     * @paramenumerable enumeration availability (default: true)
     * @returns Property technician for column access.
     */
    _getPropDescriptor(idx: number, enumerable?: boolean): PropertyDescriptor;

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
    addValue(...args: unknown[]): unknown;
};

export interface BaseColumnCollectionConstructor {
    /**
     * Creates a column default collection.
     * 
     * @param owner Owner of the  collection.
     * @param baseType Default column type.
     */
    new <T>(owner: object, baseType: T): BaseColumnCollection<T>;
}
  
declare const BaseColumnCollection: BaseColumnCollectionConstructor;

export default BaseColumnCollection;
export { BaseColumnCollection };