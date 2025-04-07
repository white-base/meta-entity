import BaseEntity               from './base-entity';
import MetaViewColumnCollection from './collection-meta-view-column';

/**
 * Meta View Class
 * 
 * This class models the views in the database, and manages the columns and underlying entities in the views.
 */
declare class MetaView extends BaseEntity {

    /**
     * Creates a meta view with a given name, and sets the default entity.
     * 
     * @param name - The name of the view.
     * @param baseEntity - Default entity, added to default entity when adding columns.
     */
    constructor(name: string, baseEntity: BaseEntity);

    /**
     * The name of the meta view.
     */
    viewName: string;

    /**
     * Collection of columns in the view.
     */
    columns: MetaViewColumnCollection;


    /**
     * Default entity.
     */
    _baseEntity: BaseEntity;

    /**
     * Returns objects in serialized form according to specific options; cyclic references are replaced by $ref values.
     * 
     * @param vOpt - Import option. (Default: 0)
     * - 0 : Reference structure (_guid: Yes, $ref: Yes)
     * - 1: Redundant structure (_guid: Yes, $ref: Yes)
     * - 2: Non-tidal rescue (_guid: No, $ref: No)
     * @param owned - Top objects that currently own the object. (Default: {})
     * @returns Serialized object.
     * 
     * @example
     * const serializedObject = metaView.getObject(2);
     */
    getObject(vOpt?: number, owned?: object | Array<object>): object;

    /**
     * Sets the given serialized object to the current object. When set, the existing object is initialized.
     * 
     * @param oGuid - Object of the guid type to serialize.
     * @param origin - The source object setting the current object. (Default: oGuid)
     */
    setObject(oGuid: object, origin?: object): void;    

    /**
     * Creates and returns a deep copy of the current meta view.
     * 
     * @returns This is a replica of the current meta view.
     */
    clone(): this;

    /**
     * Copy the args column name after running the callback.
     * 
     * @param filter - The filter function that selects the column.
     * @param args - List of column names to copy.
     * @returns {MetaView} The copied meta-view object.
     */
    copy(filter: Function, args: string[]): this;

    /**
     * Copy the args column name after the callback.
     * 
     * @param filter - The filter function that selects the column.
     * @param args - List of column names to copy.
     * @returns {MetaView} The copied meta-view object.
     */
    copy(filter: Function, ...args): this;

    /**
     * Copy the target column.
     * 
     * @param filter - The filter function that selects the column.
     * @returns {MetaView} The copied meta-view object.
     */
    copy(filter: string[]): this;

}

export = MetaView;