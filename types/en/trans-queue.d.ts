import {IArrayCollection}   from "logic-core";

/**
 * The 'Transaction Queue' class provides the ability to store and manage transaction tasks in a queue.
 * Queues are used to perform transaction operations on a given collection of 'IArayCollection'.
 */
declare class TransactionQueue {

    /**
     * Creates a 'TransactionQueue' object.
     * 
     * @param collection - Indicates the collection of arrays to be managed in the transaction queue. You must implement the 'IArayCollection' interface.
     */
    constructor(collection: IArrayCollection);

    /**
     * List of transactions stored in the queue.
     * 
     * @readonly
     */
    queue: object[];

    /**
     * The collection of targets that the transaction queue will work on.
     * 
     * @readonly
     */
    collection: IArrayCollection;

    /**
     * Initializes the transaction queue.
     * Sets the state of the queue to its initial state.
     * 
     * @example
     * transactionQueue.init(); // Initialize the queue to leave it empty
     */
    init(): void;

    /**
     * Commit the transaction task stored in the current queue.
     * All tasks stored in the commit queue are reflected in the actual collection.
     * 
     * @example
     * TransactionQueue.commit(); // Reflect all jobs stored in the queue to the collection
     */
    commit(): void;

    /**
     * Rolls back transaction operations stored in the current queue.
     * All jobs saved in the rollback queue are canceled, and the collection is restored to its original state.
     * 
     * @example
     * transactionQueue.rollback(); // Cancel all operations stored in the queue and restore them to their original state
     */
    rollback(): void;

    /**
     * Adds a new transaction task to the queue.
     * 
     * @param pos - The index of the location in the queue to which you want to add the task.
     * @param target - Destination object to be added to the queue.
     * @param etc - Other relevant data, may contain additional information as needed.
     * 
     * @example
     * transactionQueue.insert(0, targetObject, additionalData); // Add action to index 0 location
     */
    insert(pos: number, target: object, etc: any): void;

    /**
     * Delete the transaction task from the queue.
     * 
     * @param pos - The location index within the queue to be deleted.
     * @param clone - Replica of the job to be deleted.
     * @param etc - Other relevant data, may contain additional information as needed.
     * 
     * @example
     * transactionQueue.delete(1, clusteredObject, additionalData); // Delete jobs at index 1 location
     */
    delete(pos: number, clone: object, etc: any): void;

    /**
     * Modify the transaction task in the queue.
     * 
     * @param pos - The index of locations in the queue to be modified.
     * @param target - The object to be modified.
     * @param clone - This is a replica of the pre-modification operation.
     * @param etc - Other relevant data, may contain additional information as needed.
     * 
     * @example
     * transactionQueue.update(2, updatedObject, clonedObject, additionalData); // 인덱스 2 위치의 작업 수정
     */
    update(pos: number, target: object, clone: object, etc: any): void;

    /**
     * Inquires the history of changes in the queue.
     * 
     * @returns List of all transaction tasks currently stored in the queue.
     * 
     * @example
     * const changes = transactionQueue.select(); // View all changes in the queue
     */
    select(): object[];

}

export = TransactionQueue;