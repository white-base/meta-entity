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
var MetaRegistry                = require('logic-core').MetaRegistry;
var NamespaceManager            = require('logic-core').NamespaceManager;
var IObject                     = require('logic-core').IObject;
var IMarshal                    = require('logic-core').IMarshal;
var ICollection                 = require('logic-core').ICollection;
var IPropertyCollection         = require('logic-core').IPropertyCollection;
var IElement                    = require('logic-core').IElement;
var IList                       = require('logic-core').IList;
var IListControl                = require('logic-core').IListControl;
var ISerialize                  = require('logic-core').ISerialize;
var IArrayCollection            = require('logic-core').IArrayCollection;
// ################# local export #################
var IExportControl              = require('./src/i-control-export').IExportControl;
var IGroupControl               = require('./src/i-control-group').IGroupControl;
var IImportControl              = require('./src/i-control-import').IImportControl;
var ISchemaControl              = require('./src/i-control-schema').ISchemaControl;
var ITransaction                = require('./src/i-transaction').ITransaction;
var TransactionQueue            = require('./src/trans-queue').TransactionQueue;
var TransactionCollection       = require('./src/collection-transaction').TransactionCollection;
var MetaRowCollection           = require('./src/meta-row').MetaRowCollection;
var MetaRow                     = require('./src/meta-row').MetaRow;
var BaseColumn                  = require('./src/base-column').BaseColumn;
var MetaColumn                  = require('./src/meta-column').MetaColumn;
var ObjectColumn                = require('./src/object-column').ObjectColumn;
var BaseColumnCollection        = require('./src/collection-column').BaseColumnCollection;
var MetaViewColumnCollection    = require('./src/collection-column').MetaViewColumnCollection;
var MetaTableColumnCollection   = require('./src/collection-column').MetaTableColumnCollection;
var BaseEntity                  = require('./src/base-entity').BaseEntity;
var MetaTable                   = require('./src/meta-table').MetaTable;
var MetaTableCollection         = require('./src/meta-table').MetaTableCollection;
var MetaView                    = require('./src/meta-view').MetaView;
var MetaViewCollection          = require('./src/meta-view').MetaViewCollection;
var MetaSet                     = require('./src/meta-set').MetaSet;

module.exports = {
    Util: Util,
    Type: Type,
    Observer: Observer,
    ExtendError: ExtendError,
    Message: Message,
    IObject: IObject,
    IMarshal: IMarshal,
    ICollection: ICollection,
    IPropertyCollection: IPropertyCollection,
    IElement: IElement,
    IList: IList,
    IListControl: IListControl,
    ISerialize: ISerialize,
    IArrayCollection: IArrayCollection,
    MetaObject: MetaObject,
    MetaElement: MetaElement,
    NamespaceManager: NamespaceManager,
    MetaRegistry: MetaRegistry,
    BaseCollection: BaseCollection,
    ArrayCollection: ArrayCollection,
    PropertyCollection: PropertyCollection,
    // #### local ####
    IExportControl: IExportControl,
    IGroupControl: IGroupControl,
    IImportControl: IImportControl,
    ISchemaControl: ISchemaControl,
    ITransaction: ITransaction,
    TransactionQueue: TransactionQueue,
    TransactionCollection: TransactionCollection,
    MetaRowCollection: MetaRowCollection,
    MetaRow: MetaRow,
    BaseColumn: BaseColumn,
    MetaColumn: MetaColumn,
    ObjectColumn: ObjectColumn,
    BaseColumnCollection: BaseColumnCollection,
    MetaViewColumnCollection: MetaViewColumnCollection,
    MetaTableColumnCollection: MetaTableColumnCollection,
    BaseEntity: BaseEntity,
    MetaTable: MetaTable,
    MetaTableCollection: MetaTableCollection,
    MetaView: MetaView,
    MetaViewCollection: MetaViewCollection,
    MetaSet: MetaSet,
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
        // #### local ####
        TransactionCollection: TransactionCollection,
        TransactionQueue: TransactionQueue,
    },
    Meta: {
        MetaObject: MetaObject,
        MetaElement: MetaElement,
        MetaRegistry: MetaRegistry,
        NamespaceManager: NamespaceManager,
        // #### local ####
        Entity: {
            BaseColumn: BaseColumn,
            BaseEntity: BaseEntity,
            BaseColumnCollection: BaseColumnCollection,
            MetaViewColumnCollection: MetaViewColumnCollection,
            MetaTableColumnCollection: MetaTableColumnCollection,
            TransactionCollection: TransactionCollection,
            MetaColumn: MetaColumn,
            MetaRow: MetaRow,
            MetaRowCollection: MetaRowCollection,
            MetaSet: MetaSet,
            MetaTable: MetaTable,
            MetaTableCollection: MetaTableCollection,
            MetaView: MetaView,
            MetaViewCollection: MetaViewCollection,
        }        
    },
    Interface: {
        IObject: IObject,
        IMarshal: IMarshal,
        ICollection: ICollection,
        IPropertyCollection: IPropertyCollection,
        IElement: IElement,
        IList: IList,
        IListControl: IListControl,
        ISerialize: ISerialize,
        IArrayCollection: IArrayCollection,
        // #### local ####
        IExportControl: IExportControl,
        IGroupControl: IGroupControl,
        IImportControl: IImportControl,
        ISchemaControl: ISchemaControl,
        ITransaction: ITransaction,    
    },
}