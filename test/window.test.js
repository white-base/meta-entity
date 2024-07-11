/**
 * @jest-environment jsdom
 */
//==============================================================
// gobal defined
'use strict';

//==============================================================
// test
describe("[L.*]", () => {
    describe("[Common.*]", () => {
        describe("message-wrap.js <Message>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
            });
            it("- 예외 : 전체 로딩이 인된경우", () => {
                expect(() => require('../src/message-wrap')).toThrow(/Cannot read properties/);
            });
            it("- 로딩 성공 ", () => {
                require('logic-core');
                delete global._L.Common
                require('../src/message-code');
                require('../src/message-wrap');
        
                expect(global._L.Message).toBeDefined();
                // expect(global._L.Common.Message).toBeDefined();
            });
        });
        describe("message-code.js <messageCode>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
            });
            it("- 로딩 성공 ", () => {
                require('../src/message-code');
        
                expect(global._L.messageCode.entity).toBeDefined();
            });
        });
    });
    describe("[Collection.*]", () => {
        describe("trans-queue.js <TransactionQueue>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
            });
            it("- 예외 : 전체 로딩이 인된경우", () => {
                expect(() => require('../src/trans-queue')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;
                expect(() => require('../src/trans-queue')).toThrow(/ExtendError/);
            });
            it("- 예외 : Util 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.Util;
                
                expect(() => require('../src/trans-queue')).toThrow(/Util/);
            });
            it("- 예외 : ArrayCollection 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ArrayCollection;
        
                expect(() => require('../src/trans-queue')).toThrow(/ArrayCollection/);
            });
            it("- 예외 : MetaObject 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.MetaObject;
        
                expect(() => require('../src/trans-queue')).toThrow(/MetaObject/);
            });
    
            it("- 로딩 성공 ", () => {
                require('logic-core');
                delete global._L.Collection
                require('../src/trans-queue');
        
                expect(global._L.TransactionQueue).toBeDefined();
                expect(global._L.Collection.TransactionQueue).toBeDefined();
            });
            
        });
        describe("collection-transaction.js <TransactionCollection>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
            });
            it("- 예외 : 전체 로딩이 인된경우", () => {
                expect(() => require('../src/collection-transaction')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;
                
                expect(() => require('../src/collection-transaction')).toThrow(/ExtendError/);
            });
            it("- 예외 : Type 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.Type;
                
                expect(() => require('../src/collection-transaction')).toThrow(/Type/);
            });
            it("- 예외 : Util 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.Util;
    
                expect(() => require('../src/collection-transaction')).toThrow(/Util/);
            });
            it("- 예외 : ArrayCollection 로딩이 인된 경우", () => {
                require('logic-core');
                delete global._L.ArrayCollection;
    
                expect(() => require('../src/collection-transaction')).toThrow(/ArrayCollection/);
            });
            it("- 예외 : TransactionQueue 로딩이 인된 경우", () => {
                require('logic-core');
                
                expect(() => require('../src/collection-transaction')).toThrow(/TransactionQueue/);
            });
            it("- 로딩 성공 ", () => {
                require('logic-core');
                require('../src/trans-queue');
                delete global._L.Collection
                require('../src/collection-transaction');
        
                expect(global._L.TransactionCollection).toBeDefined();
                expect(global._L.Collection.TransactionCollection).toBeDefined();
            });
            
        });
    });
    describe("[Inteface.*]", () => {
        describe("load: i-transaction.js <ITransaction>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
            });
            it("- 예외 : 전체 로딩이 인된경우", () => {
                expect(() => require('../src/i-transaction')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/i-transaction')).toThrow(/ExtendError/);
            });
            it("- namespace : ITransaction ", () => {
                require('logic-core');
                delete global._L.Interface
                require('../src/i-transaction');
                
                expect(global._L.ITransaction).toBeDefined();
                expect(global._L.Interface.ITransaction).toBeDefined();
            });
        });
        describe("load: i-control-import.js <IImportControl>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
            });
            it("- 예외 : 전체 로딩이 인된경우", () => {
                expect(() => require('../src/i-control-import')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/i-control-import')).toThrow(/ExtendError/);
            });
            it("- namespace : IImportControl ", () => {
                require('logic-core');
                delete global._L.Interface
                require('../src/i-control-import');
                
                expect(global._L.IImportControl).toBeDefined();
                expect(global._L.Interface.IImportControl).toBeDefined();
            });
        });
        describe("load: i-control-group.js <IGroupControl>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
            });
            it("- 예외 : 전체 로딩이 인된경우", () => {
                expect(() => require('../src/i-control-group')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/i-control-group')).toThrow(/ExtendError/);
            });
            it("- namespace : IGroupControl ", () => {
                require('logic-core');
                delete global._L.Interface
                require('../src/i-control-group');
                
                expect(global._L.IGroupControl).toBeDefined();
                expect(global._L.Interface.IGroupControl).toBeDefined();
            });
        });
        describe("load: i-control-export.js <IExportControl>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
            });
            it("- 예외 : 전체 로딩이 인된경우", () => {
                expect(() => require('../src/i-control-export')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/i-control-export')).toThrow(/ExtendError/);
            });
            it("- namespace : IExportControl ", () => {
                require('logic-core');
                delete global._L.Interface
                require('../src/i-control-export');
                
                expect(global._L.IExportControl).toBeDefined();
                expect(global._L.Interface.IExportControl).toBeDefined();
            });
        });
        describe("load: i-control-schema.js <ISchemaControl>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
            });
            it("- 예외 : 전체 로딩이 인된경우", () => {
                expect(() => require('../src/i-control-schema')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/i-control-schema')).toThrow(/ExtendError/);
            });
            it("- namespace : IList ", () => {
                require('logic-core');
                delete global._L.Interface
                require('../src/i-control-schema');
                
                expect(global._L.ISchemaControl).toBeDefined();
                expect(global._L.Interface.ISchemaControl).toBeDefined();
            });
        });        
    });
    describe("[Meta.Entity.*]", () => {
        describe("load: collection-column.js <BaseColumnCollection, MetaTableColumnCollection, MetaViewColumnCollection>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
                });
            it("- 예외 : 전체 로딩 안할 때", () => {
                expect(() => require('../src/collection-column')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;
                
                expect(() => require('../src/collection-column')).toThrow(/ExtendError/);
            });
            it("- 예외 : Type 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.Type;

                expect(() => require('../src/collection-column')).toThrow(/Type/);
            });
            it("- 예외 : Util 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Util;
                
                expect(() => require('../src/collection-column')).toThrow(/Util/);
            });
            it("- 예외 : MetaRegistry 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.MetaRegistry;

                expect(() => require('../src/collection-column')).toThrow(/MetaRegistry/); 
            });
            it("- 예외 : MetaElement 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.MetaElement;
        
                expect(() => require('../src/collection-column')).toThrow(/MetaElement/);
            });
            it("- 예외 : BaseColumn 로딩이 안 된 경우", () => {
                require('logic-core');
        
                expect(() => require('../src/collection-column')).toThrow(/BaseColumn/);
            });
            it("- 예외 : PropertyCollection 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/base-column');
                delete global._L.PropertyCollection;
        
                expect(() => require('../src/collection-column')).toThrow(/PropertyCollection/);
            });
            it("- 예외 : MetaColumn 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/base-column');
        
                expect(() => require('../src/collection-column')).toThrow(/MetaColumn/);
            });

            it("- 로딩 성공 ", () => {
                require('logic-core');
                require('../src/base-column');
                require('../src/meta-column');
                delete global._L.Meta
                require('../src/collection-column');
        
                expect(global._L.BaseColumnCollection).toBeDefined();  
                expect(global._L.Meta.Entity.BaseColumnCollection).toBeDefined();
            });
        });
        describe("load: base-entity.js <BaseEntity>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
                });
            it("- 예외 : 전체 로딩 안할 때", () => {
                expect(() => require('../src/base-entity')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/base-entity')).toThrow(/ExtendError/);
            });
            it("- 예외 : Util 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Util;

                expect(() => require('../src/base-entity')).toThrow(/Util/);
            });
            it("- 예외 : IGroupControl 로딩이 안 된 경우", () => {
                require('logic-core');
        
                expect(() => require('../src/base-entity')).toThrow(/IGroupControl/);
            });
            
            it("- 예외 : ISchemaControl 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-group');
        
                expect(() => require('../src/base-entity')).toThrow(/ISchemaControl/);
            });
            it("- 예외 : IImportControl 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-group');
                require('../src/i-control-schema');
        
                expect(() => require('../src/base-entity')).toThrow(/IImportControl/);
            });
            it("- 예외 : IExportControl 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
        
                expect(() => require('../src/base-entity')).toThrow(/IExportControl/);
            });
            it("- 예외 : ISerialize 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                delete global._L.ISerialize;
        
                expect(() => require('../src/base-entity')).toThrow(/ISerialize/);
            });
            it("- 예외 : MetaRegistry 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                delete global._L.MetaRegistry;
        
                expect(() => require('../src/base-entity')).toThrow(/MetaRegistry/);
            });
            it("- 예외 : MetaObject 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                delete global._L.MetaObject;
        
                expect(() => require('../src/base-entity')).toThrow(/MetaObject/);
            });
            it("- 예외 : MetaElement 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                delete global._L.MetaElement;
        
                expect(() => require('../src/base-entity')).toThrow(/MetaElement/);
            });
            it("- 예외 : MetaRowCollection 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                
                expect(() => require('../src/base-entity')).toThrow(/MetaRowCollection/);
            });
            it("- 예외 : MetaRow 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/trans-queue');
                require('../src/collection-transaction');
                require('../src/meta-row');
                delete global._L.MetaRow;
        
                expect(() => require('../src/base-entity')).toThrow(/MetaRow/);
            });
            it("- 예외 : BaseColumnCollection 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/trans-queue');
                require('../src/collection-transaction');
                require('../src/meta-row');
        
                expect(() => require('../src/base-entity')).toThrow(/BaseColumnCollection/);
            });
            
            it("- 로딩 성공 ", () => {
                require('logic-core');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/trans-queue');
                require('../src/collection-transaction');
                require('../src/meta-row');
                require('../src/base-column');
                require('../src/meta-column');
                require('../src/collection-column');
                delete global._L.Meta
                require('../src/base-entity');
        
                expect(global._L.BaseEntity).toBeDefined();
                expect(global._L.Meta.Entity.BaseEntity).toBeDefined();
            });
            
        });
        describe("load: meta-table.js <MetaTable, MetaTableCollection>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
                });
            it("- 예외 : 전체 로딩 안할 때", () => {
                expect(() => require('../src/meta-table')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/meta-table')).toThrow(/ExtendError/);
            });
            it("- 예외 : Type 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.Type;
                
                expect(() => require('../src/meta-table')).toThrow(/Type/);
            });
            it("- 예외 : Util 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Util;
                
                expect(() => require('../src/meta-table')).toThrow(/Util/);
            });
            it("- 예외 : ITransaction 로딩이 안 된 경우", () => {
                require('logic-core');

                expect(() => require('../src/meta-table')).toThrow(/ITransaction/);
            });
            it("- 예외 : MetaRegistry 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-transaction');
                delete global._L.MetaRegistry;

                expect(() => require('../src/meta-table')).toThrow(/MetaRegistry/);
            });
            it("- 예외 : MetaObject 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-transaction');
                delete global._L.MetaObject;

                expect(() => require('../src/meta-table')).toThrow(/MetaObject/);
            });
            it("- 예외 : PropertyCollection 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-transaction');
                delete global._L.PropertyCollection;
        
                expect(() => require('../src/meta-table')).toThrow(/PropertyCollection/);
            });
            it("- 예외 : BaseEntity 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-transaction');
        
                expect(() => require('../src/meta-table')).toThrow(/BaseEntity/);
            });
            it("- 예외 : MetaTableColumnCollection 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-transaction');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/trans-queue');
                require('../src/collection-transaction');
                require('../src/meta-row');
                require('../src/base-column');
                require('../src/meta-column');
                require('../src/collection-column');
                require('../src/base-entity');
                delete global._L.MetaTableColumnCollection;

                expect(() => require('../src/meta-table')).toThrow(/MetaTableColumnCollection/);
            });
            it("- 로딩 성공 ", () => {
                require('logic-core');
                require('../src/i-transaction');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/trans-queue');
                require('../src/collection-transaction');
                require('../src/meta-row');
                require('../src/base-column');
                require('../src/meta-column');
                require('../src/collection-column');
                require('../src/base-entity');
                delete global._L.Meta
                require('../src/meta-table');
        
                expect(global._L.MetaTable).toBeDefined();
                expect(global._L.Meta.Entity.MetaTable).toBeDefined();
            });
        });
        describe("load: meta-view.js <MetaView, MetaViewCollection>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
                });
            it("- 예외 : 전체 로딩 안할 때", () => {
                expect(() => require('../src/meta-view')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/meta-view')).toThrow(/ExtendError/);
            });
            it("- 예외 : Type 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.Type;
                
                expect(() => require('../src/meta-view')).toThrow(/Type/);
            });
            it("- 예외 : Util 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Util;
        
                expect(() => require('../src/meta-view')).toThrow(/Util/);
            });
            it("- 예외 : MetaRegistry 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-transaction');
                delete global._L.MetaRegistry;

        
                expect(() => require('../src/meta-view')).toThrow(/MetaRegistry/);
            });
            it("- 예외 : MetaObject 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-transaction');
                delete global._L.MetaObject;
        
                expect(() => require('../src/meta-view')).toThrow(/MetaObject/);
            });
            it("- 예외 : PropertyCollection 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-transaction');
                delete global._L.PropertyCollection;
        
                expect(() => require('../src/meta-view')).toThrow(/PropertyCollection/);
            });
            
            it("- 예외 : BaseEntity 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-transaction');
        
                expect(() => require('../src/meta-view')).toThrow(/BaseEntity/);
            });
            it("- 예외 : MetaViewColumnCollection 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-transaction');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/trans-queue');
                require('../src/collection-transaction');
                require('../src/meta-row');
                require('../src/base-column');
                require('../src/meta-column');
                require('../src/collection-column');
                require('../src/base-entity');
                delete global._L.MetaViewColumnCollection;
        
                expect(() => require('../src/meta-view')).toThrow(/MetaViewColumnCollection/);
            });
            it("- 로딩 성공 ", () => {
                require('logic-core');
                require('../src/i-transaction');
                require('../src/i-control-group');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/trans-queue');
                require('../src/collection-transaction');
                require('../src/meta-row');
                require('../src/base-column');
                require('../src/meta-column');
                require('../src/collection-column');
                require('../src/base-entity');
                delete global._L.Meta
                require('../src/meta-view');
        
                expect(global._L.MetaView).toBeDefined();
                expect(global._L.Meta.Entity.MetaView).toBeDefined();
            });
        });
        describe("load: meta-set.js <MetaSet>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
                });
            it("- 예외 : 전체 로딩 안할 때", () => {
                expect(() => require('../src/meta-set')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/meta-set')).toThrow(/ExtendError/);
            });
            it("- 예외 : Util 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Util;
                
                expect(() => require('../src/meta-set')).toThrow(/Util/);
            });
            
            it("- 예외 : ISchemaControl 로딩이 안 된 경우", () => {
                require('logic-core');
        
                expect(() => require('../src/meta-set')).toThrow(/ISchemaControl/);
            });
            it("- 예외 : IImportControl 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-schema');
        
                expect(() => require('../src/meta-set')).toThrow(/IImportControl/);
            });
            it("- 예외 : IExportControl 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-schema');
                require('../src/i-control-import');
        
                expect(() => require('../src/meta-set')).toThrow(/IExportControl/);
            });
            it("- 예외 : ISerialize 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                delete global._L.ISerialize;

                expect(() => require('../src/meta-set')).toThrow(/ISerialize/);
            });
            it("- 예외 : ITransaction 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
        
                expect(() => require('../src/meta-set')).toThrow(/ITransaction/);
            });
            it("- 예외 : MetaRegistry 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/i-transaction');
                delete global._L.MetaRegistry;

                expect(() => require('../src/meta-set')).toThrow(/MetaRegistry/);
            });
            it("- 예외 : MetaElement 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/i-transaction');
                delete global._L.MetaElement;
        
                expect(() => require('../src/meta-set')).toThrow(/MetaElement/);
            });
            it("- 예외 : BaseEntity 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/i-transaction');
        
                expect(() => require('../src/meta-set')).toThrow(/BaseEntity/);
            });
            it("- 예외 : MetaTableCollection 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/i-control-group');
                require('../src/i-transaction');
                require('../src/trans-queue');
                require('../src/collection-transaction');
                require('../src/meta-row');
                require('../src/base-column');
                require('../src/meta-column');
                require('../src/collection-column');
                require('../src/base-entity');
        
                expect(() => require('../src/meta-set')).toThrow(/MetaTableCollection/);
            });
            it("- 예외 : MetaViewCollection 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/i-control-group');
                require('../src/i-transaction');
                require('../src/trans-queue');
                require('../src/collection-transaction');
                require('../src/meta-row');
                require('../src/base-column');
                require('../src/meta-column');
                require('../src/collection-column');
                require('../src/base-entity');
                require('../src/meta-table');
        
                expect(() => require('../src/meta-set')).toThrow(/MetaViewCollection/);
            });
            it("- 로딩 성공 ", () => {
                require('logic-core');
                require('../src/i-control-schema');
                require('../src/i-control-import');
                require('../src/i-control-export');
                require('../src/i-control-group');
                require('../src/i-transaction');
                require('../src/trans-queue');
                require('../src/collection-transaction');
                require('../src/meta-row');
                require('../src/base-column');
                require('../src/meta-column');
                require('../src/collection-column');
                require('../src/base-entity');
                require('../src/meta-table');
                require('../src/meta-view');
                delete global._L.Meta
                require('../src/meta-set');
        
                expect(global._L.MetaSet).toBeDefined();  
                expect(global._L.Meta.Entity.MetaSet).toBeDefined();
            });
        });
        describe("load: base-column.js <BaseColumn>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
                });
            it("- 예외 : 전체 로딩 안할 때", () => {
                expect(() => require('../src/base-column')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/base-column')).toThrow(/ExtendError/);
            });
            it("- 예외 : Type 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.Type;
                
                expect(() => require('../src/base-column')).toThrow(/Type/);
            });
            it("- 예외 : Util 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Util;
                
                expect(() => require('../src/base-column')).toThrow(/Util/);
            });
            it("- 예외 : MetaRegistry 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.MetaRegistry;
        
                expect(() => require('../src/base-column')).toThrow(/MetaRegistry/);
            });
    
            it("- 예외 : MetaElement 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.MetaElement;
        
                expect(() => require('../src/base-column')).toThrow(/MetaElement/);
            });
            
            it("- 로딩 성공 ", () => {
                require('logic-core');
                delete global._L.Meta
                require('../src/base-column');
        
                expect(global._L.BaseColumn).toBeDefined();  
                expect(global._L.Meta.Entity.BaseColumn).toBeDefined();
            });
        });
        describe("load: meta-column.js <MetaColumn>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
                });
            it("- 예외 : 전체 로딩 안할 때", () => {
                expect(() => require('../src/meta-column')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/meta-column')).toThrow(/ExtendError/);
            });
            it("- 예외 : Type 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.Type;
                
                expect(() => require('../src/meta-column')).toThrow(/Type/);
            });
            it("- 예외 : Util 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Util;
                
                expect(() => require('../src/meta-column')).toThrow(/Util/);
            });
            it("- 예외 : Observer 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Observer;
        
                expect(() => require('../src/meta-column')).toThrow(/Observer/);
            });
            it("- 예외 : BaseColumn 로딩이 안 된 경우", () => {
                require('logic-core');
        
                expect(() => require('../src/meta-column')).toThrow(/BaseColumn/); 
            });
           
            it("- 로딩 성공 ", () => {
                require('logic-core');
                require('../src/base-column');
                delete global._L.Meta
                require('../src/meta-column');
        
                expect(global._L.MetaColumn).toBeDefined();  
                expect(global._L.Meta.Entity.MetaColumn).toBeDefined();
            });
        });
        describe("load: object-column.js <ObjectColumn>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
                });
            it("- 예외 : 전체 로딩 안할 때", () => {
                expect(() => require('../src/object-column')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/object-column')).toThrow(/ExtendError/);
            });
            it("- 예외 : Util 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Util;
                
                expect(() => require('../src/object-column')).toThrow(/Util/);
            });
            it("- 예외 : Observer 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Observer;
        
                expect(() => require('../src/object-column')).toThrow(/Observer/);
            });
            it("- 예외 : MetaRegistry 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.MetaRegistry;
        
                expect(() => require('../src/object-column')).toThrow(/MetaRegistry/);
            });
    
            it("- 예외 : MetaObject 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.MetaObject;
        
                expect(() => require('../src/object-column')).toThrow(/MetaObject/);
            });
    
            it("- 예외 : MetaElement 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.MetaElement;
        
                expect(() => require('../src/object-column')).toThrow(/MetaElement/);
            });
            it("- 예외 : BaseColumn 로딩이 안 된 경우", () => {
                require('logic-core');
        
                expect(() => require('../src/object-column')).toThrow(/BaseColumn/);
            });
            it("- 예외 : PropertyCollection 로딩이 안 된 경우", () => {
                require('logic-core');
                require('../src/base-column');
                delete global._L.PropertyCollection;
        
                expect(() => require('../src/object-column')).toThrow(/PropertyCollection/);
            });
            it("- 로딩 성공 ", () => {
                require('logic-core');
                require('../src/base-column');
                delete global._L.Meta
                require('../src/object-column');
        
                expect(global._L.ObjectColumn).toBeDefined();  
                expect(global._L.Meta.Entity.ObjectColumn).toBeDefined();
            });
        });
        describe("load: meta-row.js <MetaRow>", () => {
            beforeEach(() => {
                jest.resetModules();
                global._L = null;
                });
            it("- 예외 : 전체 로딩 안할 때", () => {
                expect(() => require('../src/meta-row')).toThrow(/Cannot read properties/);
            });
            it("- 예외 : ExtendError 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.ExtendError;

                expect(() => require('../src/meta-row')).toThrow(/ExtendError/);
            });
            it("- 예외 : Type 로딩이 인된경우", () => {
                require('logic-core');
                delete global._L.Type;
                
                expect(() => require('../src/meta-row')).toThrow(/Type/);
            });
            it("- 예외 : Util 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Util;
                
                expect(() => require('../src/meta-row')).toThrow(/Util/);
            });
            it("- 예외 : Observer 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.Observer;
        
                expect(() => require('../src/meta-row')).toThrow(/Observer/);
            });
            
            it("- 예외 : IList 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.IList;
        
                expect(() => require('../src/meta-row')).toThrow(/IList/);
            });
            it("- 예외 : MetaRegistry 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.MetaRegistry;
        
                expect(() => require('../src/meta-row')).toThrow(/MetaRegistry/);
            });
    
            it("- 예외 : MetaObject 로딩이 안 된 경우", () => {
                require('logic-core');
                delete global._L.MetaObject;
        
                expect(() => require('../src/meta-row')).toThrow(/MetaObject/);
            });
            it("- 예외 : TransactionCollection 로딩이 안 된 경우", () => {
                require('logic-core');
        
                expect(() => require('../src/meta-row')).toThrow(/TransactionCollection/);
            });
            
            it("- 로딩 성공 ", () => {
                require('logic-core');
                require('../src/trans-queue');
                require('../src/collection-transaction');
                delete global._L.Meta
                require('../src/meta-row');
        
                expect(global._L.MetaRow).toBeDefined();  
                expect(global._L.Meta.Entity.MetaRow).toBeDefined();
            });
        });
        
    });
});

