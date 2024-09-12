import {PropertyCollection}     from 'logic-core';
import BaseColumn               from './base-column';

/**
 * An abstract class that represents the column default collection.
 * This class provides the ability to manage and manipulate various columns.
 * @extends PropertyCollection
 */
declare abstract class BaseColumnCollection extends PropertyCollection {

    /**
     * Creates a column default collection.
     * 
     * @param {object} owner Owner of the  collection.
     * @param {BaseColumn} BaseType Default column type.
     */
    constructor(onwer: object, baseType: BaseColumn);

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
     * @param {string} name - The name of the column.
     * @param {any} value - column value.
     * @returns {number} Index of the added column.
     */
    add(name: string, value: any): number;

    /**
     * Deletes the column for the specified index from the collection.
     * 
     * @param {number} index - Index of the column to be deleted.
     * @returns {booklan} Deletion successful.
     */
    removeAt(index: number): boolean;

    /**
     * Initializes all column values in the collection to their default values.
     */
    initValue(): void;

    /**
     * Examine whether an alias name (key) exists in the collection.
     * 
     * @param {string} key - alias name.
     * @returns {boolean} Alias name exists.
     */
    existAlias(key: string): boolean;

    /**
     * Examine whether a column name (key) exists in the collection.
     * 
     * @param {string} key - the name of the column.
     * @returns {booklan} column name exists.
     */
    existColumnName(key: string): boolean;

    /**
     * Obtain column objects for aliases.
     * 
     * @param {string} key - alias name.
     * @returns {BaseColumn | undefined} The column object corresponding to the alias, if it does not exist, is 'undefined'.
     */
    alias(key: string): BaseColumn | undefined;

    /**
     * Abstract method to add values. Subclasses must provide a specific implementation.
     * 
     * @param {...any[]} args - Values to add.
     */
    abstract addValue(...args): void;
    
}

export = BaseColumnCollection;