/// <reference path="T.d.ts" />

import ExtendError          = require("logic-core/extend-error");
import EventEmitter         = require("logic-core/event-emitter");
import Util                 = require("logic-core/util");
import Type                 = require("logic-core/type");
import Message              = require("logic-core/message");
import IObject              = require("logic-core/i-object");
import IMarshal             = require("logic-core/i-marshal");
import ICollection          = require("logic-core/i-collection");
import IPropertyCollection  = require("logic-core/i-collection-property");
import IElement             = require("logic-core/i-element");
import IList                = require("logic-core/i-list");
import IListControl         = require("logic-core/i-control-list");
import ISerialize           = require("logic-core/i-serialize");
import IArrayCollection     = require("logic-core/i-collction-array");
import NamespaceManager     = require("logic-core/namespace-manager");
import MetaRegistry         = require("logic-core/meta-registry");
import MetaObject           = require("logic-core/meta-object");
import MetaElement          = require("logic-core/meta-element");
import BaseCollection       = require("logic-core/base-collection");
import ArrayCollection      = require("logic-core/collection-array");
import PropertyCollection   = require("logic-core/collection-property");

// ################# local export #################
import BaseColumn               = require("./base-column");
import BaseEntity               = require("./base-entity");
import BaseColumnCollection     = require("./base-column-collection");
import TransactionCollection    = require("./collection-transaction");
import IExportControl           = require("./i-control-export");
import IGroupControl            = require("./i-control-group");
import IImportControl           = require("./i-control-import");
import ISchemaControl           = require("./i-control-schema");
import ITransaction             = require("./i-transaction");
import MetaColumn               = require("./meta-column");
import MetaRow                  = require("./meta-row");
import MetaRowCollection        = require("./collection-meta-row");
import MetaSet                  = require("./meta-set");
import MetaTable                = require("./meta-table");
import MetaTableCollection      = require("./collection-meta-table");
import MetaView                 = require("./meta-view");
import MetaViewCollection       = require("./collection-meta-view");
import MetaTableColumnCollection= require("./collection-meta-table-column");
import MetaViewColumnCollection = require("./collection-meta-view-column");
import ObjectColumn             = require("./object-column");
import TransactionQueue         = require("./trans-queue");

export {
    // Core_T,
    ExtendError,
    EventEmitter,
    Util,
    Type,
    Message,
    IObject,
    IMarshal,
    ICollection,
    IPropertyCollection,
    IElement,
    IList,
    IListControl,
    ISerialize,
    IArrayCollection,
    NamespaceManager,
    MetaRegistry,
    MetaObject,
    MetaElement,
    BaseCollection,
    ArrayCollection,
    PropertyCollection,
    // local
    BaseColumn,
    BaseEntity,
    BaseColumnCollection,
    TransactionCollection,
    IExportControl,
    IGroupControl,
    IImportControl,
    ISchemaControl,
    ITransaction,
    MetaColumn,
    MetaRow,
    MetaSet,
    MetaTable,
    MetaView,
    ObjectColumn,
    TransactionQueue,
    MetaRowCollection,
    MetaTableCollection,
    MetaViewCollection,
    MetaTableColumnCollection,
    MetaViewColumnCollection
};
export namespace Common {
    /** Util 네임스페이스 TODO: */
    let Util;
    /** Type 네임스페이스 TODO: */
    let Type;
}
export namespace Interface {
    var IObject : IObject;
    var IMarshal : IMarshal;
    var ICollection : ICollection;
    var IPropertyCollection : IPropertyCollection;
    var IElement : IElement;
    var IList : IList;
    var IListControl : IListControl;
    var ISerialize : ISerialize;
    var IArrayCollection : IArrayCollection;
    // local
    var IExportControl : IExportControl;
    var IGroupControl : IGroupControl;
    var IImportControl : IImportControl;
    var ISchemaControl : ISchemaControl;
    var ITransaction : ITransaction;
}
export namespace Collection {
    var BaseCollection : BaseCollection;
    var ArrayCollection : ArrayCollection;
    var PropertyCollection : PropertyCollection;
    // local
    var TransactionCollection : TransactionCollection;
    var TransactionQueue : TransactionQueue;
}
export namespace Meta {
    var NamespaceManager : NamespaceManager;
    var MetaRegistry : MetaRegistry;
    var MetaObject : MetaObject;
    var MetaElement : MetaElement;
}
export namespace Meta.Entity {
    var BaseColumn : BaseColumn;
    var BaseEntity : BaseEntity;
    var BaseColumnCollection : BaseColumnCollection;
    var MetaColumn : MetaColumn;
    var MetaRow : MetaRow;
    var MetaSet : MetaSet;
    var MetaTable : MetaTable;
    var MetaView : MetaView;
    var ObjectColumn : ObjectColumn;
    var MetaRowCollection : MetaRowCollection;
    var MetaTableCollection : MetaTableCollection;
    var MetaViewCollection : MetaViewCollection;
    var MetaTableColumnCollection : MetaTableColumnCollection;
    var MetaViewColumnCollection : MetaViewColumnCollection;

}


