import type { MetaObject }          from 'logic-core';
import type { EventEmitter }        from 'logic-core';
import type { BaseEntity }          from './base-entity.d.ts';
import type { MetaObjectType }      from "./T.d.ts";

/**
 * The 'MetaRow' class represents each row of the data table and manages the events associated with the data.  
 * This class handles tasks such as adding, modifying, or deleting data and informs you of changes through events.  
 */
type MetaRow = MetaObjectType & {

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
     * The element key in the row.
     */
    readonly $keys: string[];

    /**
     * Returns the entity to which this 'MetaRow' belongs.
     */
    readonly _entity: BaseEntity;

    /**
     * Returns a list of elements in a row.
     */
    readonly _list: any[];

    /**
     * Returns the number of elements in the row.
     */
    readonly count: number;

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
    onChanging: (idx: number, nVal: any, oVal: any, _this: MetaRow) => void;

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
    onChanged: (idx: number, nVal: any, oVal: any, _this: MetaRow) => void;

    /**
     * Returns the property descriptor for the specified index.
     * 
     * @param idx - Index to get property technician
     * @param enumerable - whether it can be enumerated (default: true)
     * @returns Property descriptor object for the specified index.
     */
    _getPropDescriptor(idx: number, enumerable?: boolean): PropertyDescriptor;

    /**
     * Change the internal '$key'.
     * @paramoldKey Existing Key
     * @param newKey NewKey
     */
    _changeKey(oldKey: string, newKey: string): void;

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
     * @param mode - Specifies the serialization option.  
     *   - '0': Convert to a reference structure (including '_guid' and '$ref')  
     *   - '1': Converting to a redundant structure (including '_guid' and '$ref')  
     *   - '2': Conversion to non-coordinated structure (excluding '_guid' and '$ref')  
     * @param context - The parent objects that currently own the object. You can receive an object or array of objects.
     * @returns Serialized object.
     * 
     * @example
     * const serialized = row.getObject(2); // import serialized objects in a non-coordinated structure
     */
    getObject(mode?: number, context?: object | object[]): object;

    /**
     * Sets the serialized GUID type object to the current 'MetaRow' object.  
     * During this process, the object is initialized.  
     * 
     * @param guidObj - object of serialized GUID type.
     * @param guidRootObj - This is the original object that sets the current object. Default is 'oGuid'.
     * 
     * @example
     * row.setObject(serializedObject); // set serialized objects in current row
     */
    setObject(guidObj: object, guidRootObj?: object): void;

    /**
     * Create a new object by replicating the current 'MetaRow' object.
     * 
     * @param entity - 'BaseEntity' of the target to be replicated. (Optional)
     * @returns Replicated 'MetaRow' object.
     * 
     * @example
     * const clone = row.clone(entity);
     */
    clone(entity?: BaseEntity): MetaRow;

} & {
    [key: string | number]: string | number | boolean | object | Function;
};

export interface MetaRowConstructor {
    /**
     * Creates a 'MetaRow' object.
     * 
     * @param entity - This is the 'BaseEntity' object to which 'MetaRow' belongs.
     * 
     * @example
     * const row = new MetaRow(entity);
     */
    new (entity: BaseEntity): MetaRow;
}

declare const MetaRow: MetaRowConstructor;

export default MetaRow;
export { MetaRow };