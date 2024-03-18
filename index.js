/**
 * ES5
 */
var ExtendError                 = require('logic-core').ExtendError;
var Type                        = require('logic-core').Type;
var Util                        = require('logic-core').Util;
var Observer                    = require('logic-core').Observer;
var Message                     = require('logic-core').Message;
var BaseCollection              = require('logic-core').BaseCollection;
var ArrayCollection             = require('logic-core').ArrayCollection;
var PropertyCollection          = require('logic-core').PropertyCollection;
var MetaObject                  = require('logic-core').MetaObject;
var MetaElement                 = require('logic-core').MetaElement;
var BaseEntity                  = require('./src/base-entity').BaseEntity;
var MetaView                    = require('./src/meta-view').MetaView;
var MetaViewCollection          = require('./src/meta-view').MetaViewCollection;
var MetaTable                   = require('./src/meta-table').MetaTable;
var MetaTableCollection         = require('./src/meta-table').MetaTableCollection;
var MetaColumn                  = require('./src/meta-column').MetaColumn;
var BaseColumnCollection        = require('./src/collection-column').BaseColumnCollection;
var MetaViewColumnCollection    = require('./src/collection-column').MetaViewColumnCollection;
var MetaTableColumnCollection   = require('./src/collection-column').MetaTableColumnCollection;
var MetaRow                     = require('./src/meta-row').MetaRow;
var MetaRowCollection           = require('./src/meta-row').MetaRowCollection;
var MetaRegistry                = require('logic-core').MetaRegistry;
var NamespaceManager            = require('logic-core').NamespaceManager;
var IObject                     = require('logic-core').IObject;
var IMarshal                    = require('logic-core').IMarshal;
var ICollection                 = require('logic-core').ICollection;
var IPropertyCollection         = require('logic-core').IPropertyCollection;
var IExportControl              = require('./src/i-control-export').IExportControl;
var IGroupControl               = require('./src/i-control-group').IGroupControl;
var IImportControl              = require('./src/i-control-import').IImportControl;
var IElement                    = require('logic-core').IElement;
var IList                       = require('logic-core').IList;
var IListControl                = require('logic-core').IListControl;
var ISchemaControl              = require('./src/i-control-schema').ISchemaControl;
var ITransaction                = require('./src/i-transaction').ITransaction;
var ISerialize                  = require('logic-core').ISerialize;
var IArrayCollection            = require('logic-core').IArrayCollection;

module.exports = {
    Util: Util,
    Type: Type,
    Observer: Observer,
    ExtendError: ExtendError,
    Message: Message,
    BaseCollection: BaseCollection,
    ArrayCollection: ArrayCollection,
    PropertyCollection: PropertyCollection,
    MetaObject: MetaObject,
    MetaElement: MetaElement,
    BaseEntity: BaseEntity,
    MetaView: MetaView,
    MetaViewCollection: MetaViewCollection,
    MetaTable: MetaTable,
    MetaTableCollection: MetaTableCollection,
    MetaColumn: MetaColumn,
    BaseColumnCollection: BaseColumnCollection,
    MetaViewColumnCollection: MetaViewColumnCollection,
    MetaTableColumnCollection: MetaTableColumnCollection,
    MetaRow: MetaRow,
    MetaRowCollection: MetaRowCollection,
    MetaRegistry: MetaRegistry,
    NamespaceManager: NamespaceManager,
    IObject: IObject,
    IMarshal: IMarshal,
    ICollection: ICollection,
    IPropertyCollection: IPropertyCollection,
    IExportControl: IExportControl,
    IGroupControl: IGroupControl,
    IImportControl: IImportControl,
    IElement: IElement,
    IList: IList,
    IListControl: IListControl,
    ISchemaControl: ISchemaControl,
    ITransaction: ITransaction,
    ISerialize: ISerialize,
    IArrayCollection: IArrayCollection,
    // namespace
    Common: {
        Util: Util,
        Type: Type,
        Observer: Observer,
        ExtendError: ExtendError,
        Message: Message,
    },
    Collection: {
        BaseCollection: BaseCollection,
        ArrayCollection: ArrayCollection,
        PropertyCollection: PropertyCollection,
    },
    Meta: {
        MetaObject: MetaObject,
        MetaElement: MetaElement,
        MetaRegistry: MetaRegistry,
        NamespaceManager: NamespaceManager,        
        Entity: {
            BaseEntity: BaseEntity,
            MetaView: MetaView,
            MetaViewCollection: MetaViewCollection,
            MetaTable: MetaTable,
            MetaTableCollection: MetaTableCollection,
            MetaColumn: MetaColumn,
            BaseColumnCollection: BaseColumnCollection,
            MetaViewColumnCollection: MetaViewColumnCollection,
            MetaTableColumnCollection: MetaTableColumnCollection,
            MetaRow: MetaRow,
            MetaRowCollection: MetaRowCollection,
        }
    },
    Interface: {
        IObject: IObject,
        IMarshal: IMarshal,
        ICollection: ICollection,
        IPropertyCollection: IPropertyCollection,
        IExportControl: IExportControl,
        IGroupControl: IGroupControl,
        IImportControl: IImportControl,
        IElement: IElement,
        IList: IList,
        IListControl: IListControl,
        ISchemaControl: ISchemaControl,
        ITransaction: ITransaction,
        ISerialize: ISerialize,
        IArrayCollection: IArrayCollection,
    
    },
}