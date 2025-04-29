import type { MetaObject }          from 'logic-core';
import type { EventEmitter }        from 'logic-core';
import type { BaseEntity }          from './base-entity.d.ts';

/**
 * The 'MetaRow' class represents each row of the data table and manages the events associated with the data.  
 * This class handles tasks such as adding, modifying, or deleting data and informs you of changes through events.  
 */
declare class MetaRow extends MetaObject {

    /**
     * Creates a 'MetaRow' object.
     * 
     * @param entity - This is the 'BaseEntity' object to which 'MetaRow' belongs.
     * 
     * @example
     * const row = new MetaRow(entity);
     */
    constructor(entity: BaseEntity);

    /**
     * As an internal variable, store the elements of the row.
     * 
     * @private
     */
    $elements: any[];

    /**
     * An event object that handles events, such as changing the data in a row.
     * 
     * @private
     */
    $event: EventEmitter;

    /**
     * Returns the entity to which this 'MetaRow' belongs.
     * 
     * @readonly
     * @returns The object 'BaseEntity' that owns this row.
     */
    _entity: BaseEntity;

    /**
     * Returns the element key in the row.
     * 
     * @readonly
     * @returns The key arrangement of the  element.
     */
    $keys: string[];

    /**
     * Returns a list of elements in a row.
     * 
     * @readonly
     * @Returns An array of elements.
     */
    _list: any[];

    /**
     * Returns the number of elements in the row.
     * 
     * @readonly
     * @returns The total number of elements.
     */
    count: number;

    /**
     * Event before element change.
     * 
     * @event MetaRow#onChanging
     * @param idx - Index where the change occurred.
     * @param nVal - This is the new value to be changed.
     * @param oVal - Existing value.
     * @param _this - The object that caused the event.
     * 
     * @example
     * row.onChanging = (idx, nVal, oVal, _this) => { console.log('Value is about to change'); };
     */
    onChanging: (idx: number, nVal: any, oVal: any, _this: this) => void;

    /**
     * Event after element change.
     * 
     * @event MetaRow#onChanged
     * @param idx - Index where the change occurred.
     * @param nVal - This is a newly changed value.
     * @param oVal - This is the previous value.
     * @param _this - The object that caused the event.
     * 
     * @example
     * row.onChanged = (idx, nVal, oVal, _this) => { console.log('Value has changed'); };
     */
    onChanged: (idx: number, nVal: any, oVal: any, _this: this) => void;

    /**
     * Processes events before element changes.
     * 
     * @param idx - Index where the change occurred.
     * @param nVal - This is the new value to be changed.
     * @param oVal - Existing value.
     * @listens MetaRow#onChanging
     */
    _onChanging(idx: number, nVal: any, oVal: any): void;

    /**
     * Processes events after element changes.
     * 
     * @param idx - Index where the change occurred.
     * @param nVal - This is a newly changed value.
     * @param oVal - This is the previous value.
     * @listens MetaRow#onChanged
     */
    _onChanged(idx: number, nVal: any, oVal: any): void;

    /**
     * Converts the current 'MetaRow' object to a serialized GUID type object.  
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
     * const serialized = row.getObject(2); // import serialized objects in a non-coordinated structure
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * Sets the serialized GUID type object to the current 'MetaRow' object.  
     * During this process, the object is initialized.  
     * 
     * @param oGuid - object of serialized GUID type.
     * @param origin - This is the original object that sets the current object. Default is 'oGuid'.
     * 
     * @example
     * row.setObject(serializedObject); // set serialized objects in current row
     */
    setObject(oGuid: object, origin?: object): void;

    /**
     * Create a new object by replicating the current 'MetaRow' object.
     * 
     * @param entity - 'BaseEntity' of the target to be replicated. (Optional)
     * @returns Replicated 'MetaRow' object.
     * 
     * @example
     * const clone = row.clone(entity);
     */
    clone(entity?: BaseEntity): this;

}

export default MetaRow;
export { MetaRow };