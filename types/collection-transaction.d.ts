import type { ArrayCollection }         from 'logic-core';
import type { TransactionQueue }        from './trans-queue.d.ts';

/**
 * The 'Transaction Collection' class manages transaction-based collections.  
 * This class provides the ability to apply transaction queues to collections and manage changes.  
 */
declare class TransactionCollection<T> extends ArrayCollection<T> {

    /**
     * Creates a 'Transaction Collection' object.  
     * This object creates and manages transaction-based collections.  
     * 
     * @param owner - Specifies the owner object of this collection.
     */
    constructor(owner: object);

    /**
     * The object that manages the transaction queue.  
     * This queue is used to process transaction operations sequentially.  
     */
    _transQueue: TransactionQueue;

    /**
     * Indicates whether the automatic change feature is enabled.  
     * The default is set to 'false', and automatically sets whether or not the changes are applied.  
     */
    autoChanges: boolean;
    
    /**
     * Indicates whether the collection has been changed.
     * 'True' means that there are changes to the collection.
     */
    hasChanges: boolean;

    /**
     * Returns the property descriptor for the specified index.
     * 
     * @param idx - Index to get the property technician.
     * @returns Property descriptor object for the specified index.
     * 
     * @example
     * const descriptor = collection._getPropDescriptor(0); // Get Property descriptor for index 0
     */
    _getPropDescriptor(idx: number): object;

    /**
     * Converts the current 'TransactionCollection' object to a serialized object.  
     * In the serialization process, the cyclic reference is replaced by the value '$ref'.  
     * 
     * @param vOpt - Specifies the serialization option.  
     *   - '0': Convert to a reference structure (including '_guid' and '$ref')  
     *   - '1': Converting to a redundant structure (including '_guid' and '$ref')  
     *   - '2': Conversion to non-coordinated structure (excluding '_guid' and '$ref')  
     * @param owned - The parent objects that currently own the object. You can receive an object or array of objects.
     * @returns Serialized object.
     * 
     * @example
     * const serialized = collection.getObject(2); // import serialized objects in a non-coordinated structure
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * Sets the serialized object to the current 'Transaction Collection' object.  
     * During this process, the object is initialized.  
     * 
     * @param oGuid - object of serialized GUID type.
     * @param origin - This is the original object that sets the current object. Default is 'oGuid'.
     * 
     * @example
     * collection.setObject(serializedObject); // Set serialized objects to the current collection
     */
    setObject(oGuid: object, origin?: object);

    /**
     * Deletes an element from the specified location.
     * 
     * @param pos - The index location of the element to be deleted.
     * @returns This is the value of 'boolean' indicating successful deletion, 'true' if deletion is successful, and 'false' if it fails.
     * 
     * @example
     * const success = collection.removeAt(2); // delete element of index 2
     */
    removeAt(pos: number): boolean;

    /**
     * Initializes all elements of the collection.  
     * The collection is empty, and all elements are deleted.  
     */
    clear(): boolean;

    /**
     * Adds an element to the specified location.
     * 
     * @param pos - The location of the index to which you want to add the element.
     * @param elem - The element to add.
     * @param desc - Property descriptor object.
     * @returns The value of 'boolean' to indicate whether the  element has been added successfully; 'true' to add and 'false' to fail.
     * 
     * @example
     * const success = collection.insertAt(1, newItem, descriptor); // Add element to index 1
     */
    insertAt(pos: number, elem: any, desc: PropertyDescriptor): boolean;

    /**
     * Commit to reflect changes to the collection.   
     * This method applies all operations in the transaction queue.  
     */
    commit(): void;

    /**
     * Rolls back changes to the collection to the previous state.  
     * This method cancels all operations in the transaction queue.  
     */
    rollback(): void;

}

export default TransactionCollection;
export { TransactionCollection };