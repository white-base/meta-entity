import type { EventEmitter }        from 'logic-core';
import type { BaseColumn }          from './base-column.d.ts';
import type { BaseEntity }          from './base-entity.d.ts';
import type { ValueType }           from './T.d.ts';

/**
 * The 'MetaColumn' class defines a data column and manages meta information for that column.  
 * This class provides the ability to set and process values, constraints, events, and more for a column.  
 */
declare class MetaColumn extends BaseColumn {

    /**
     * Create 'MetaColumn' object.
     * 
     * @param name - Specifies the name of the column.
     * @param entity - The 'BaseEntity' object to which this column belongs. (Optional)
     * @param property - The object that defines the additional properties of the column. (Optional)
     * 
     * @example
     * const column = new MetaColumn('name', entity, { required: true });
     */
    constructor(name: string, entity?: BaseEntity, property?: object);   // TODO: prop.. 타입 분리

    /**
     * An event object that handles events, such as changing the column value.
     */
    $event: EventEmitter;

    /**
     * Limits direct access to values in a column.  
     * This property controls the setting and change of values inside.  
     * 
     * @override
     */
    $value: any;

    /**
     * Sets whether a column value is required.  
     * If the value must exist, it is 'true', otherwise it is 'false'.  
     */
    required: boolean;

    /**
     * Sets the constraints for the column.  
     * Constraints can be set in the form of objects or functions.  
     */
    constraints: (object | Function)[];   // TODO: 확인 필요

    /**
     * Gets or sets the value of the column.  
     * - 'getter': Returns the value if defined.  
     * - 'setter': Set or change the value.  
     * Get priority: 1. If there is getter, 2. Internal value $value  
     * set priority: 1. if there is setter, 2. if there is no setter return value  
     */
    value: ValueType;

    /**
     * Getter function of column value.
     * 
     * @returnsCurrent value of the column.
     * 
     * @example
     * const value = column.getter(); // get column values
     */
    getter: () => ValueType;

    /**
     * Setter function of column value.
     * 
     * @param value - This is the value to set.
     * 
     * @example
     * column.setter ('newValue'); // set column value
     */
    setter: (value: ValueType) => void;

    /**
     * The kind of the column.
     */
    kind: string[];

    /**
     * Whether the column is read-only.
     */
    readOnly: boolean;

    /**
     * Whether the column is visible.
     */
    visible: boolean;

    /**
     * Description of the column.
     */
    description: string;

    /**
     * The order of the column.
     */
    order: number;


    /**
     * The event that occurs when the column value changes.
     * 
     * @event MetaColumn#onChanged
     * @param newVal - New value.
     * @param oldVal - Previous value.
     * @param _this - The object that caused the event.
     * 
     * @example
     * column.onChanged = function(newVal, oldVal, _this) { 
     *  console.log('Value changed'); 
     * };
     */
    onChanged: (newVal: ValueType, oldVal: ValueType, _this: this) => void;

    /**
     * Internal method called when the value changes.
     * 
     * @param nVal - New value.
     * @param oVal - Existing value.
     * @listens MetaColumn#onChanged
     */
    _onChanged(nVal: ValueType, oVal: ValueType): void;

    /**
     * Load the properties of the column.
     * 
     * @param property - Property object to load.
     * 
     * @example
     * column._load({ required: true, constraints: [...] });
     */
    _load(property: object): void; // TODO: object type separation required

    /**
     * Converts the current 'MetaColumn' object to a serialized object.  
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
     * const serialized = column.getObject(2); // import serialized objects in a non-coordinated structure
     */
    getObject(mode?: number, context?: object | object[]): object;

    /**
     * Sets the serialized object to the current 'MetaColumn' object.  
     * During this process, the object is initialized.  
     * 
     * @param guidObj - object of serialized GUID type.
     * @param guidRootObj - This is the original object that sets the current object. Default is 'oGuid'.
     * 
     * @example
     * column.setObject(serializedObject); // set serialized object to current column
     */
    setObject(guidObj: object, guidRootObj?: object): void;

    /**
     * Replicate the current column to create a new 'MetaColumn' object.
     * 
     * @param entity - 'BaseEntity' of the target to be replicated. (Optional)
     * @returns Replicated 'MetaColumn' object.
     * 
     * @example
     * const clone = column.clone(entity);
     */
    clone(entity?: BaseEntity): this;

    /**
     * Add constraints.
     * 
     * @param callback - callback function that examines constraints
     */
    addConstraint(callback: Function): void;
    
    /**
     * Add constraints.
     * 
     * @param regex - Regular expression to apply.
     * @param msg - Message to display when regular expression fails.
     * @param code - Code for failure of regular expression. (Optional)
     * @param match - The condition that determines whether a constraint is successful/failed. Default is 'false'.
     * 
     * @example
     * column.addConstraint(/^\d+$/, 'Value must be a number');
     */
    addConstraint(regex: RegExp, msg: string, code?: string, match?: boolean): void;

    /**
     * Check that the value of the property is valid.  
     * Validates based on 'required' and 'constructions'.  
     * 
     * @param value - This is the value to be inspected.
     * @returns Returns the object if it is invalid, and returns 'undefined' if it is valid.
     * 
     * @example
     * const validationResult = column.valid('valueToCheck');
     */
    valid(value: ValueType): object | undefined;
    
}

export default MetaColumn;
export { MetaColumn };