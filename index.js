/// <reference path="./types/en/index.d.ts" />

// import { Message } from 'logic-core';
import { ExtendError } from 'logic-core';
import { Type } from 'logic-core';
import { Util } from 'logic-core';
import { EventEmitter } from 'logic-core';
import { IObject } from 'logic-core';
import { IMarshal } from 'logic-core';
import { ICollection } from 'logic-core';
import { IPropertyCollection } from 'logic-core';
import { IElement } from 'logic-core';
import { IList } from 'logic-core';
import { IListControl } from 'logic-core';
import { ISerialize } from 'logic-core';
import { IArrayCollection } from 'logic-core';
import { NamespaceManager } from 'logic-core';
import { MetaRegistry } from 'logic-core';
import { MetaObject } from 'logic-core';
import { MetaElement } from 'logic-core';
import { BaseCollection  } from 'logic-core';
import { ArrayCollection } from 'logic-core';
import { PropertyCollection } from 'logic-core';

import { Message } from './src/message-wrap.js'; 
import { IExportControl } from './src/i-control-export.js'; 
import { IGroupControl } from './src/i-control-group.js'; 
import { IImportControl } from './src/i-control-import.js'; 
import { ISchemaControl } from './src/i-control-schema.js'; 
import { ITransaction } from './src/i-transaction.js'; 
import { TransactionQueue } from './src/trans-queue.js'; 
import { TransactionCollection } from './src/collection-transaction.js'; 
import { MetaRowCollection } from './src/meta-row.js'; 
import { MetaRow } from './src/meta-row.js'; 
import { BaseColumn } from './src/base-column.js'; 
import { MetaColumn } from './src/meta-column.js'; 
import { ObjectColumn } from './src/object-column.js'; 
import { BaseColumnCollection } from './src/collection-column.js'; 
import { MetaViewColumnCollection } from './src/collection-column.js';  
import { MetaTableColumnCollection } from './src/meta-table.js'; 
import { BaseEntity } from './src/base-entity.js'; 
import { MetaTable } from './src/meta-table.js'; 
import { MetaTableCollection } from './src/meta-table.js'; 
import { MetaView } from './src/meta-view.js'; 
import { MetaViewCollection } from'./src/meta-view.js'; 
import { MetaSet } from './src/meta-set.js'; 

export { 
    ExtendError,
    Type,
    Util,
    EventEmitter,
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
    PropertyCollection
}
// meta-entity
export { 
    Message,
    IExportControl,
    IGroupControl,
    IImportControl,
    ISchemaControl,
    ITransaction,
    TransactionQueue,
    TransactionCollection,
    MetaRowCollection,
    MetaRow,
    BaseColumn,
    MetaColumn,
    ObjectColumn,
    BaseColumnCollection,
    MetaViewColumnCollection,
    MetaTableColumnCollection,
    BaseEntity,
    MetaTable,
    MetaTableCollection,
    MetaView,
    MetaViewCollection,
    MetaSet
}