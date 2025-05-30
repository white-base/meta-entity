import type { TransactionCollection }   from './collection-transaction.d.ts';
import type { MetaRow }                 from './meta-row.d.ts';

type MetaRowCollection<T> = {
    
    /**
     * Gets the property descriptor for the specified index.
     * 
     * @param idx - Index to get the property technician.
     * @returns Property technician for the specified index.
     */
    _getPropDescriptor(idx: number): PropertyDescriptor;

    
    /** @deprecated */
    add(elem: any, desc?: PropertyDescriptor): number;

    /**
     * Add the 'MetaRow' object to the collection.
     * 
     * @param row - 'MetaRow' object to be added.
     * @param isCheck - Specifies whether to perform a validation; the default is 'false'.
     * @returns Index of the added 'MetaRow' object.
     */
    add(row: MetaRow, isCheck?: boolean): number;

    
    /** @deprecated */
    insertAt(pos: number, elem: any, desc?: PropertyDescriptor): boolean;
    
    /**
     * Insert the 'MetaRow' object at the specified location in the collection.
     * 
     * @param pos - Index of the location where the 'MetaRow' object is to be inserted.
     * @param row - 'MetaRow' object to insert.
     * @param isCheck - Specifies whether to perform a validation; the default is 'false'.
     * @returns Indicates whether the insertion is successful or not.
     */
    insertAt(pos: number, row: MetaRow, isCheck?: boolean): boolean;
    
} & TransactionCollection<T>;

export interface MetaRowCollectionConstructor {
    /**
     * The creator of the class 'MetaRowCollection'.  
     * This class provides a collection to manage 'MetaRow' objects.  
     * 
     * @param owner - Owner object of this collection.
     */
    new <T>(owner: object): MetaRowCollection<T>;
}
  
declare const MetaRowCollection: MetaRowCollectionConstructor;

export default MetaRowCollection;
export { MetaRowCollection };