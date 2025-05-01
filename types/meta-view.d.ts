import type { BaseEntity }                  from './base-entity.d.ts';
import type { MetaViewColumnCollection }    from './collection-meta-view-column.d.ts';
import type { MetaColumn }                  from './meta-column.d.ts';

/**
 * This class models the views in the database, and manages the columns and underlying entities in the views.
 */
declare class MetaView extends BaseEntity {

    /**
     * Creates a meta view with a given name, and sets the default entity.
     * 
     * @param name - The name of the view.
     * @param baseEntity - Default entity, added to default entity when adding columns.
     */
    constructor(name: string, baseEntity?: BaseEntity);

    /**
     * Default entity.
     */
    protected _baseEntity: BaseEntity;

    /**
     * The name of the meta view.
     */
    viewName: string;

    /**
     * Collection of columns in the view.
     */
    columns: MetaViewColumnCollection<MetaColumn>;

    /**
     * Returns objects in serialized form according to specific options; cyclic references are replaced by $ref values.
     * 
     * @param mode - Import option. (Default: 0)  
     * - 0 : Reference structure (_guid: Yes, $ref: Yes)  
     * - 1: Redundant structure (_guid: Yes, $ref: Yes)  
     * - 2: Non-tidal rescue (_guid: No, $ref: No)  
     * @param context - Top objects that currently own the object. (Default: {})
     * @returns Serialized object.
     * 
     * @example
     * const serializedObject = metaView.getObject(2);
     */
    getObject(mode?: number, context?: object | object[]): object;

    /**
     * Sets the given serialized object to the current object. When set, the existing object is initialized.
     * 
     * @param guidObj - Object of the guid type to serialize.
     * @param guidRootObj - The source object setting the current object. (Default: oGuid)
     */
    setObject(guidObj: object, guidRootObj?: object): void;

    /**
     * Creates and returns a deep copy of the current meta view.
     * 
     * @returns This is a replica of the current meta view.
     */
    clone(): this;

    /**
     * Copy the args column name after running the callback.
     * 
     * @param filter - filter function to select a column
     * @param cols - List of column names to copy
     * @returns {MetaView} The copied meta-view object.
     */
    copy(filter: Function, cols: string[]): this;

    /**
     * Copy the column name.
     * 
     * @param cols - List of column names to copy
     * @returns {MetaView} The copied meta-view object.
     */
    copy(...cols: string[]): this;

    /**
     * Copy the target column after the callback is executed.
     * 
     * @param filter - filter function to select a column
     * @returns {MetaView} The copied meta-view object.
     */
    copy(filter: Function): this;
}

export default MetaView;
export { MetaView };