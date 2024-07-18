const ExtendError                   = require('logic-core').ExtendError;
const Type                          = require('logic-core').Type;
const Util                          = require('logic-core').Util;
const EventEmitter                  = require('logic-core').EventEmitter;
// const Message                   = require('logic-core').Message;  NOTE: warp 하단에서 호출
const BaseCollection                = require('logic-core').BaseCollection;
const ArrayCollection               = require('logic-core').ArrayCollection;
const PropertyCollection            = require('logic-core').PropertyCollection;
const MetaObject                    = require('logic-core').MetaObject;
const MetaElement                   = require('logic-core').MetaElement;
const MetaRegistry                  = require('logic-core').MetaRegistry;
const NamespaceManager              = require('logic-core').NamespaceManager;
const IObject                       = require('logic-core').IObject;
const IMarshal                      = require('logic-core').IMarshal;
const ICollection                   = require('logic-core').ICollection;
const IPropertyCollection           = require('logic-core').IPropertyCollection;
const IElement                      = require('logic-core').IElement;
const IList                         = require('logic-core').IList;
const IListControl                  = require('logic-core').IListControl;
const ISerialize                    = require('logic-core').ISerialize;
const IArrayCollection              = require('logic-core').IArrayCollection;
// ################# local export #################
require('./src/message-code');
const Message                       = require('./src/message-wrap').Message;
const IExportControl                = require('./src/i-control-export').IExportControl;
const IGroupControl                 = require('./src/i-control-group').IGroupControl;
const IImportControl                = require('./src/i-control-import').IImportControl;
const ISchemaControl                = require('./src/i-control-schema').ISchemaControl;
const ITransaction                  = require('./src/i-transaction').ITransaction;
const TransactionQueue              = require('./src/trans-queue').TransactionQueue;
const TransactionCollection         = require('./src/collection-transaction').TransactionCollection;
const MetaRowCollection             = require('./src/meta-row').MetaRowCollection;
const MetaRow                       = require('./src/meta-row').MetaRow;
const BaseColumn                    = require('./src/base-column').BaseColumn;
const MetaColumn                    = require('./src/meta-column').MetaColumn;
const ObjectColumn                  = require('./src/object-column').ObjectColumn;
const BaseColumnCollection          = require('./src/collection-column').BaseColumnCollection;
const MetaViewColumnCollection      = require('./src/collection-column').MetaViewColumnCollection;
const MetaTableColumnCollection     = require('./src/collection-column').MetaTableColumnCollection;
const BaseEntity                    = require('./src/base-entity').BaseEntity;
const MetaTable                     = require('./src/meta-table').MetaTable;
const MetaTableCollection           = require('./src/meta-table').MetaTableCollection;
const MetaView                      = require('./src/meta-view').MetaView;
const MetaViewCollection            = require('./src/meta-view').MetaViewCollection;
const MetaSet                       = require('./src/meta-set').MetaSet;

module.exports = {
    Util: Util,
    Type: Type,
    EventEmitter: EventEmitter,
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
        EventEmitter: EventEmitter,
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