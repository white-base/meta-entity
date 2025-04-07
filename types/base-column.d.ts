import {MetaElement}            from 'logic-core';
import BaseEntity               from './base-entity';

/**
 * The 'BaseColumn' class defines the default column for a database or similar data structure.
 * This abstract class provides the ability to manage the names, aliases, defaults, and other properties of a column.
 */
declare abstract class BaseColumn extends MetaElement {

    /**
     * Creates a 'Base Column' object.
     * 
     * @paramname - Specifies the name of the column.
     * @paramentity - Specifies the entity to which this column belongs. It must be of type 'BaseEntity'.
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
    _entity: BaseEntity;

    /**
     * Defines the value type for the column. This property is used to set the value type for the column.
     */
    _valueTypes: any;

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
     * Converts the current column object to a serialized object, which replaces the cyclic reference with the value '$ref'.
     * 
     * @paramvOpt - Specifies the import option.
     *   - '0': Convert to a reference structure (including '_guid' and '$ref')
     *   - '1': Converting to a redundant structure (including '_guid' and '$ref')
     *   - '2': Conversion to non-coordinated structure (excluding '_guid' and '$ref')
     * @paramowned - The parent objects that currently own the object. You can receive an object or array of objects.
     * @returns Serialized object.
     * 
     * @example
     * const serialized = column.getObject(0);
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * 직렬화된 `guid` 타입의 객체를 사용하여 현재 컬럼 객체를 설정합니다.
     * 이 과정에서 현재 객체는 초기화됩니다.
     * 
     * @param oGuid - 직렬화된 `guid` 타입의 객체입니다.
     * @param origin - 현재 객체를 설정하는 원본 객체입니다. 기본값은 `oGuid`입니다.
     * 
     * @example
     * column.setObject(serializedObject);
     */
    setObject(oGuid: object, origin?: object);

    
    /**
     * 현재 컬럼 객체의 복제본을 생성합니다. 이 메서드는 추상 메서드로, 서브클래스에서 구현되어야 합니다.
     * 
     * @returns 현재 객체의 복제본입니다.
     */
    abstract clone(): this;

    /**
     * Set the current column object using the serialized 'guid' type of object.
     * In this process, the current object is initialized.
     * 
     * @paramoGuid - This is a serialized 'guid' type of object.
     * @paramorigin - This is the original object that sets the current object. Default is 'oGuid'.
     * 
     * @example
     * column.setObject(serializedObject);
     */
    setObject(oGuid: object, origin?: object);

    
    /**
     * Creates a replica of the current column object. This method is an abstract method that must be implemented in a subclass.
     * 
     * @returns This is a replica of the current object.
     */
    abstract clone(): this;
}

export default BaseColumn;
export { BaseColumn };