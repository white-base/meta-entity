//==============================================================
// gobal defined
import { EventEmitter } from 'logic-entity';
import { ExtendError } from 'logic-entity';
import { Util } from 'logic-entity';
import { Type } from 'logic-entity';
import { IObject } from 'logic-entity';
import { IMarshal } from 'logic-entity';
import { ICollection } from 'logic-entity';
import { IPropertyCollection } from 'logic-entity';

import { IElement } from 'logic-entity';
import { IList } from 'logic-entity';
import { IListControl } from 'logic-entity';
import { ISerialize } from 'logic-entity';
import { IArrayCollection } from 'logic-entity';
import { NamespaceManager } from 'logic-entity';
import { MetaRegistry } from 'logic-entity';
import { MetaObject } from 'logic-entity';
import { MetaElement } from 'logic-entity';
import { BaseCollection  } from 'logic-entity';
import { ArrayCollection } from 'logic-entity';
import { PropertyCollection } from 'logic-entity';

import { Message } from 'logic-entity'; 
import { IExportControl } from 'logic-entity'; 
import { IGroupControl } from 'logic-entity'; 
import { IImportControl } from 'logic-entity'; 
import { ISchemaControl } from 'logic-entity'; 
import { ITransaction } from 'logic-entity'; 
import { TransactionQueue } from 'logic-entity'; 
import { TransactionCollection } from 'logic-entity'; 
import { MetaRowCollection } from 'logic-entity'; 
import { MetaRow } from 'logic-entity'; 
import { BaseColumn } from 'logic-entity'; 
import { MetaColumn } from 'logic-entity'; 
import { ObjectColumn } from 'logic-entity'; 
import { BaseColumnCollection } from 'logic-entity'; 
import { MetaViewColumnCollection } from 'logic-entity'; 
import { MetaTableColumnCollection } from 'logic-entity'; 
import { BaseEntity } from 'logic-entity'; 
import { MetaTable } from 'logic-entity'; 
import { MetaTableCollection } from 'logic-entity'; 
import { MetaView } from 'logic-entity'; 
import { MetaViewCollection } from 'logic-entity'; 
import { MetaSet } from 'logic-entity'; 

//==============================================================
// test
describe("[target: index.js]", () => {
    describe('Observer, ExtendError, Util', () => {
        it('- _L.*  ', () => {
            expect(typeof EventEmitter).toBe('function');
            expect(typeof ExtendError).toBe('function');
            expect(typeof Util).toBe('object');
            expect(typeof Type).toBe('object');
            expect(typeof IObject).toBe('function');
            expect(typeof IMarshal).toBe('function');
            expect(typeof ICollection).toBe('function');
            expect(typeof IPropertyCollection).toBe('function');
            expect(typeof IElement).toBe('function');
            expect(typeof IList).toBe('function');
            expect(typeof IListControl).toBe('function');
            expect(typeof ISerialize).toBe('function');
            expect(typeof IArrayCollection).toBe('function');
            expect(typeof IExportControl).toBe('function');
            expect(typeof IGroupControl).toBe('function');
            expect(typeof IImportControl).toBe('function');
            expect(typeof ISchemaControl).toBe('function');
            expect(typeof ITransaction).toBe('function');
            expect(typeof TransactionQueue).toBe('function');
            expect(typeof TransactionCollection).toBe('function');
            expect(typeof BaseCollection).toBe('function');
            expect(typeof ArrayCollection).toBe('function');
            expect(typeof PropertyCollection).toBe('function');
            expect(typeof Message).toBe('function');
            expect(typeof MetaObject).toBe('function');
            expect(typeof MetaElement).toBe('function');
            expect(typeof MetaRegistry).toBe('function');
            expect(typeof NamespaceManager).toBe('function');
            expect(typeof BaseEntity).toBe('function');
            expect(typeof MetaView).toBe('function');
            expect(typeof MetaViewCollection).toBe('function');
            expect(typeof MetaTable).toBe('function');
            expect(typeof MetaTableCollection).toBe('function');
            expect(typeof MetaColumn).toBe('function');
            expect(typeof ObjectColumn).toBe('function');
            expect(typeof BaseColumnCollection).toBe('function');
            expect(typeof MetaViewColumnCollection).toBe('function');
            expect(typeof MetaTableColumnCollection).toBe('function');
            expect(typeof MetaRow).toBe('function');
            expect(typeof BaseColumn).toBe('function');
            expect(typeof MetaRowCollection).toBe('function');
            expect(typeof MetaSet).toBe('function');
        });
    });
});

