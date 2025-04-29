import type { PropertyCollection }          from 'logic-core';
import type { MetaView }                    from './meta-view.d.ts';

/**
 * The 'MetaView Collection' class defines the collection that manages the view entity.  
 * This class provides the ability to add meta-views and check the presence of views in the collection.  
 */
type MetaViewCollection<T = MetaView> = PropertyCollection<T> & {

    /**
     * 'MetaView' object used as the default generation type.  
     * This property defines the default type of view entity.  
     */
    _baseType: MetaView;

    /**
     * Adds a view entity to the collection. The view to be added may be a view name (string) or 'MetaView' object.  
     *  - String: Register as the name of the string after generation  
     *  - String, Collection: Registered under the name of the string after generation (collection sent)  
     *  - entityView: Register as an entityView name  
     *  - entityView, collection: Register with entityView name (collection sent) => Error occurs  
     * 
     * @param view - View to be added. You can receive objects of the type 'MetaView' or the name of the view (string).
     * @param baseEntity - Default column collection. Object of type 'BaseColumnCollection'.
     * @returns The index of the added view. The index represents the location of the view within the collection.
     * 
     * @example
     * const index1 = collection.add("viewName", baseCollection); // Add a view with a string (view name)
     * const index2 = collection.add(new MetaView("viewName"), baseCollection); // `MetaView` 객체로 뷰 추가
     */
    add(view: string | MetaView, baseEntity: MetaView): number;

    /**
     * Determines whether the specified view name exists in the collection.
     * 
     * @param key - The name of the view to check.
     * @returns Returns 'true' if the view name exists in the collection, or 'false'.
     * 
     * @example
     * constructs = collection.existViewName("viewName"); // Check the existence of the view name "viewName"
     */
    existViewName(key: string): boolean;

};

export interface MetaViewCollectionConstructor {
    /**
     * Creates a 'MetaViewCollection' object.  
     * This object creates a collection that manages view entities.  
     * 
     * @param owner - Specifies the owner object of this collection.
     */
    new <T = MetaView>(owner: object): MetaViewCollection<T>;
}

declare const MetaViewCollection: MetaViewCollectionConstructor;

export default MetaViewCollection;
export { MetaViewCollection };