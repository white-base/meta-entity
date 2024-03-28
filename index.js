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
    
    },
}

// ################# local export #################
var BaseColumn                  = require('./src/base-column').BaseColumn;
var BaseEntity                  = require('./src/base-entity').BaseEntity;
var BaseColumnCollection        = require('./src/collection-column').BaseColumnCollection;
var MetaViewColumnCollection    = require('./src/collection-column').MetaViewColumnCollection;
var MetaTableColumnCollection   = require('./src/collection-column').MetaTableColumnCollection;
var TransactionCollection       = require('./src/collection-transaction').TransactionCollection;
var IExportControl              = require('./src/i-control-export').IExportControl;
var IGroupControl               = require('./src/i-control-group').IGroupControl;
var IImportControl              = require('./src/i-control-import').IImportControl;
var ISchemaControl              = require('./src/i-control-schema').ISchemaControl;
var ITransaction                = require('./src/i-transaction').ITransaction;
var MetaColumn                  = require('./src/meta-column').MetaColumn;
var MetaRow                     = require('./src/meta-row').MetaRow;
var MetaRowCollection           = require('./src/meta-row').MetaRowCollection;
var MetaSet                     = require('./src/meta-set').MetaSet;
var MetaTable                   = require('./src/meta-table').MetaTable;
var MetaTableCollection         = require('./src/meta-table').MetaTableCollection;
var MetaView                    = require('./src/meta-view').MetaView;
var MetaViewCollection          = require('./src/meta-view').MetaViewCollection;
var ObjectColumn                = require('./src/object-column').ObjectColumn;
var TransactionQueue            = require('./src/trans-queue').TransactionQueue;

module.exports = {
    BaseColumn: BaseColumn,
    BaseEntity: BaseEntity,
    BaseColumnCollection: BaseColumnCollection,
    MetaViewColumnCollection: MetaViewColumnCollection,
    MetaTableColumnCollection: MetaTableColumnCollection,
    TransactionCollection: TransactionCollection,
    IExportControl: IExportControl,
    IGroupControl: IGroupControl,
    IImportControl: IImportControl,
    ISchemaControl: ISchemaControl,
    ITransaction: ITransaction,
    MetaColumn: MetaColumn,
    MetaRow: MetaRow,
    MetaRowCollection: MetaRowCollection,
    MetaSet: MetaSet,
    MetaTable: MetaTable,
    MetaTableCollection: MetaTableCollection,
    MetaView: MetaView,
    MetaViewCollection: MetaViewCollection,
    ObjectColumn: ObjectColumn,
    TransactionQueue: TransactionQueue,
    // namespace
    Collection: {
        TransactionCollection: TransactionCollection,
        TransactionQueue: TransactionQueue,
    },
    Meta: {
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
        IExportControl: IExportControl,
        IGroupControl: IGroupControl,
        IImportControl: IImportControl,
        ISchemaControl: ISchemaControl,
        ITransaction: ITransaction,
    },
}