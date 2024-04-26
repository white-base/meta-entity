/**
 * ES6 + CJS + JEST
 */
//==============================================================
// gobal defined
'use strict';
const {MetaObject}                  = require('logic-core');
const {MetaElement}                 = require('logic-core');
const {BaseEntity}                  = require('../src/base-entity');
const {IObject}                     = require('logic-core');
const {IMarshal}                    = require('logic-core');
const { MetaTable, MetaTableCollection }                 = require('../src/meta-table');
const { MetaView }                  = require('../src/meta-view');
const {Util}                        = require('logic-core');
const { MetaRow }                   = require('../src/meta-row');
const { MetaColumn }                = require('../src/meta-column');
const { MetaTableColumnCollection } = require('../src/collection-column');
const {ObjectColumn}                = require('../src/object-column');
const  {MetaSet}                    = require('../src/meta-set');
const { replacer, reviver, stringify, parse }              = require('telejson');
const {MetaRegistry}                = require('logic-core');
// const { loadNamespace } = require('../src/load-namespace');

//==============================================================
// test
describe("[target: meta-table.js]", () => {
    describe("MetaTable :: 클래스", () => {
        beforeEach(() => {
            jest.resetModules();
            MetaRegistry.init();
        });
        describe("<테이블 등록후 속성 검사>", () => {
            it("- 테이블 등록후 속성 검사 ", () => {
                const table1 = new MetaTable('T1');
                const table2 = new MetaTable('T2');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns['i1'].value = 'R1';
                table1.columns['i2'].value = 'R2';
                table2.columns.add('i1');
                table2.columns.add(table1.columns['i2']); // 내부 복제됨
        
                // table1
                expect(table1.columns['i1'].value).toBe('R1');
                expect(table1.columns['i2'].value).toBe('R2');
                expect(table1.tableName).toBe('T1');
                expect(table1.columns['i1']._entity.tableName).toBe('T1');
                expect(table1.columns['i2']._entity.tableName).toBe('T1');
                // table2
                expect(table2.columns['i1'].value).toBe(null);
                expect(table2.columns['i2'].value).toBe('R2');
                expect(table2.tableName).toBe('T2');
                expect(table2.columns['i1']._entity.tableName).toBe('T2');
                expect(table2.columns['i2']._entity.tableName).toBe('T2');
            });
        });
        describe("MetaTable.tableName <테이블명>", () => {
            it("- this.tableName : 조회 ", () => {
                var table1 = new MetaTable('T1');
        
                expect(table1._name).toBe('T1');
                expect(table1.tableName).toBe('T1');
            });
            it("- this.tableName : 수정 ", () => {
                var table1 = new MetaTable('T1');
                table1.tableName = 'T2';

                expect(table1._name).toBe('T2');
                expect(table1.tableName).toBe('T2');
            });
            it("- 예외 : 자른자료형 ", () => {
                var table1 = new MetaTable('T1');
                expect(()=> table1.tableName = {}).toThrow(/EL05411/)
            });
        });
        describe("MetaTable.columns <컬럼 속성>", () => {
            it("- this.columns : 타입 조회 ", () => {
                var table1 = new MetaTable('T1');
        
                expect(table1.columns.instanceOf('MetaTableColumnCollection')).toBe(true);
            });
            it("- 예외 : 다른타입 ", () => {
                var table1 = new MetaTable('T1');
                expect(()=> table1.columns = {}).toThrow(/EL05412/)
            });
            it("- 예외 : row 존재시 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.rows.add(table1.newRow())
                var col = new MetaTableColumnCollection(table1);

                expect(()=> table1.columns = col).toThrow(/EL05413/)
            });
        });
        describe("MetaObject.equal() <객체 비교>", () => {
            it("- equal() : 생성 후 비교 ", () => {
                const c1 = new MetaTable('T1');
                const c2 = new MetaTable('T1');
                
                expect(c1.equal(c2)).toBe(true);
                expect(c1._guid === c2._guid).toBe(false)
                expect(c1 === c2).toBe(false);
            });
            it("- equal() : 이름이 다른 경우 ", () => {
                const c1 = new MetaTable('T1');
                const c2 = new MetaTable('T2');
                
                expect(c1.equal(c2)).toBe(false);
            });
            it("- equal() : columns 추가 후 비교 ", () => {
                const c1 = new MetaTable('T1');
                const c2 = new MetaTable('T1');
                c2.columns.add('a1');

                expect(c1.equal(c2)).toBe(false);
            });
            it("- equal() : rows 추가 후 비교 ", () => {
                const c1 = new MetaTable('T1');
                const c2 = new MetaTable('T1');
                c1.columns.add('a1');
                c2.columns.add('a1');

                expect(c1.equal(c2)).toBe(true);
                // row 추가
                var row = c1.newRow();
                row['a1'] = 'R1';
                c1.rows.add(row);
                expect(c1.equal(c2)).toBe(false);
            });
        });
        describe("MetaObject.getTypes() : arr<func> <타입 조회>", () => {
            it("- getTypes() : array<function> ", () => {
                const c = new MetaTable('C');
                const types = c.getTypes();
        
                expect(types[0]).toBe(MetaTable);
                expect(types[1]).toBe(BaseEntity);
                expect(types[2]).toBe(MetaElement);
                expect(types[3]).toBe(MetaObject);
                expect(types[4]).toBe(Object);
                expect(types.length).toBe(5);
            });
            // it("- getTypeNames() : array<string> ", () => {
            //     const c = new MetaTable();
            //     const typeNames = c.getTypeNames();
        
            //     expect(typeNames[4]).toBe('Object');
            //     expect(typeNames[3]).toBe('MetaObject');
            //     expect(typeNames[2]).toBe('MetaElement');
            //     expect(typeNames[1]).toBe('BaseEntity');
            //     expect(typeNames[0]).toBe('MetaTable');
            //     expect(typeNames.length).toBe(5);
            // });
        });
        describe("MetaObject.instanceOf(string): bool <상위 함수(클래스, 인터페이스) 검사>", () => {
            it("- instanceOf(string) : 상위 함수(클래스, 인터페이스) 검사 ", () => {
                const c = new MetaTable('C');
        
                expect(c.instanceOf('IObject')).toBe(true);
                expect(c.instanceOf('IMarshal')).toBe(true);
                expect(c.instanceOf('Object')).toBe(true);
                expect(c.instanceOf('MetaObject')).toBe(true);
                expect(c.instanceOf('MetaElement')).toBe(true);
                expect(c.instanceOf('BaseEntity')).toBe(true);
                expect(c.instanceOf('MetaTable')).toBe(true);
                // false
                expect(c.instanceOf('Array')).toBe(false);
                expect(c.instanceOf('String')).toBe(false);
            });
            it("- instanceOf(function) : 상위 함수(클래스, 인터페이스) 검사 ", () => {
                const c = new MetaTable('C');
        
                expect(c.instanceOf(IObject)).toBe(true);
                expect(c.instanceOf(IMarshal)).toBe(true);
                expect(c.instanceOf(Object)).toBe(true);
                expect(c.instanceOf(MetaObject)).toBe(true);
                expect(c.instanceOf(MetaElement)).toBe(true);
                expect(c.instanceOf(BaseEntity)).toBe(true);
                expect(c.instanceOf(MetaTable)).toBe(true);
                // false
                expect(c.instanceOf(Array)).toBe(false);
                expect(c.instanceOf(String)).toBe(false);
            });
        });
        describe("BaseEntity.clear() : <지우기 (rows)>", () => {
            it("- clear() : 지우기 (rows) ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                var row = table1.newRow();
                row['i1'] = 'R1';
                row['i2'] = 'R2';
                table1.rows.add(row);
                table1.clear();
        
                expect(table1.columns.count).toBe(2);
                expect(table1.rows.count).toBe(0);
            });
        });
        describe("BaseEntity.reset() <지우기 (rows, columns)>", () => {
            it("- reset() : 지우기 (rows, columns) ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                var row = table1.newRow();
                row['i1'] = 'R1';
                row['i2'] = 'R2';
                table1.rows.add(row);
                table1.reset();
        
                expect(table1.columns.count).toBe(0);
                expect(table1.rows.count).toBe(0);
            });
        });        
        describe("BaseEntity.newRow(): Row <MetaRow 생성>", () => {
            it("- newRow() : MetaRow 생성 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns.add('i3');
                var row = table1.newRow();
                row['i1'] = 'R1';
        
                expect(row['i1']).toBeDefined();
                expect(row['i2']).toBeDefined();
                expect(row['i3']).toBeDefined();
                expect(row[0]).toBeDefined();
                expect(row[1]).toBeDefined();
                expect(row[2]).toBeDefined();
                expect(row['i1']).toBe('R1');
                expect(row[0]).toBe('R1');
                expect(row['0']).toBe('R1');        
            });
        });
        describe("BaseEntity.getValue(): row <value 얻기>", () => {
            it("- getValue() : row 얻기(단일) ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns.add('i3');
                table1.columns['i1'].value = 'R1';
                table1.columns['i2'].value = 'R2';
                table1.columns['i3'].value = 'R3';
                var row = table1.getValue();
        
                expect(row['i1']).toBe('R1');
                expect(row['i2']).toBe('R2');
                expect(row['i3']).toBe('R3');
                expect(row[0]).toBe('R1');
                expect(row[1]).toBe('R2');
                expect(row[2]).toBe('R3');
            });
            it("- getValue() : row 얻기(단일), 별칭 사용 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns.add('i3');
                table1.columns['i2'].alias = 'ii2';    // 별칭
                table1.columns['i3'].alias = 'ii3';    // 별칭
                table1.columns['i1'].value = 'R1';
                table1.columns['i2'].value = 'R2';
                table1.columns['i3'].value = 'R3';
                var row = table1.getValue();
        
                expect(row['i1']).toBe('R1');
                expect(row['ii2']).toBe('R2');
                expect(row['ii3']).toBe('R3');
                expect(row[0]).toBe('R1');
                expect(row[1]).toBe('R2');
                expect(row[2]).toBe('R3');
            });
        });
        describe("BaseEntity.setValue(row) <value 설정>", () => {
            it("- setValue(row) : row 설정(단일) ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns.add('i3');
                var row = table1.newRow();
                row['i1'] = 'R1';
                row['i2'] = 'R2';
                row['i3'] = 'R3';
                table1.setValue(row);
                
                expect(table1.columns['i1'].value).toBe('R1');
                expect(table1.columns['i2'].value).toBe('R2');
                expect(table1.columns['i3'].value).toBe('R3');
            });
            it("- setValue(row) :row 설정(단일), 별칭 사용 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns.add('i3');
                table1.columns['i2'].alias = 'ii2';    // 별칭
                table1.columns['i3'].alias = 'ii3';    // 별칭
                var row = table1.newRow();
                row['i1'] = 'R1';
                row['i2'] = 'R2';
                row['ii3'] = 'RR3';
                table1.setValue(row);
        
                expect(table1.columns['i1'].value).toBe('R1');
                expect(table1.columns['i2'].value).toBe('');
                expect(table1.columns['i3'].value).toBe('RR3');
            });
            it("- 예외 : 타입 실패 ", () => {
                var table1 = new MetaTable('T1');
                expect(()=> table1.setValue({})).toThrow(/EL05333/)
            });
        });
        
        describe("BaseEntity.merge(entity, opt) <병합>", () => {
            it("- merge() : opt = 0 (같은 구조) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json1, 3);
                table2.merge(table1, 0);
    
                expect(table2.columns.count).toBe(2);
                expect(table2.rows.count).toBe(4);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.columns['i2'].caption).toBe('C2');
                expect(table2.rows[0]['i1']).toBe('R1');
                expect(table2.rows[0]['i2']).toBe('R2');
                expect(table2.rows[1]['i1']).toBe('R10');
                expect(table2.rows[1]['i2']).toBe('R20');
                expect(table2.rows[2]['i1']).toBe('R1');
                expect(table2.rows[2]['i2']).toBe('R2');
                expect(table2.rows[3]['i1']).toBe('R10');
                expect(table2.rows[3]['i2']).toBe('R20');
            });
            it("- merge() : opt = 0 (다른 구조) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                var json2 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i3: { caption: 'C3'},
                    },
                    rows: [
                        { i1: 'R1', i3: 'R3' },
                        { i1: 'R10', i3: 'R30' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
                table1.merge(table2, 0);
    
                expect(table1.columns.count).toBe(2);
                expect(table1.rows.count).toBe(4);
                expect(table1.columns['i1'].caption).toBe('C1');
                expect(table1.columns['i2'].caption).toBe('C2');
                expect(table1.rows[0]['i1']).toBe('R1');
                expect(table1.rows[0]['i2']).toBe('R2');
                expect(table1.rows[1]['i1']).toBe('R10');
                expect(table1.rows[1]['i2']).toBe('R20');
                expect(table1.rows[2]['i1']).toBe('R1');
                expect(table1.rows[2]['i2']).toBe(null);
                expect(table1.rows[3]['i1']).toBe('R10');
                expect(table1.rows[3]['i2']).toBe(null);
                /**
                 * MEMO: row 기준으로 병합할때, 나닌 컬럼은 무시되며, 없는 rows 는 null 확인
                 */
            });
            it("- merge() : opt = 1 (다른 구조) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                var json2 = { 
                    columns: {
                        i3: { caption: 'C3'},
                        i4: { caption: 'C4'},
                    },
                    rows: [
                        { i3: 'R3', i4: 'R4' },
                        // { i3: 'R30', i4: 'R40' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
                table1.merge(table2, 1);
    
                expect(table1.columns.count).toBe(4);
                expect(table1.rows.count).toBe(2);
                expect(table1.columns['i1'].caption).toBe('C1');
                expect(table1.columns['i2'].caption).toBe('C2');
                expect(table1.columns['i3'].caption).toBe('C3');
                expect(table1.columns['i4'].caption).toBe('C4');
                expect(table1.rows[0]['i1']).toBe('R1');
                expect(table1.rows[0]['i2']).toBe('R2');
                expect(table1.rows[0]['i3']).toBe('R3');
                expect(table1.rows[0]['i4']).toBe('R4');
                expect(table1.rows[1]['i1']).toBe('R10');
                expect(table1.rows[1]['i2']).toBe('R20');
                expect(table1.rows[1]['i3']).toBe(null);
                expect(table1.rows[1]['i4']).toBe(null);
            });
            it("- merge() : opt = 1 (타겟 별칭 사용) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                var json2 = { 
                    columns: {
                        i2: { caption: 'CC2'},
                        i4: { caption: 'C4'},
                    },
                    rows: [
                        { i2: 'R2', i4: 'R4' },
                        { i2: 'R20', i4: 'R40' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
                table2.columns['i2'].alias = 'ii2'; // 별칭 처리
                table1.merge(table2, 1);
    
                expect(table1.columns.count).toBe(4);
                expect(table1.rows.count).toBe(2);
                expect(table1.columns['i1'].caption).toBe('C1');
                expect(table1.columns['i2'].caption).toBe('C2');
                expect(table1.columns['ii2'].caption).toBe('CC2');
                expect(table1.columns['i4'].caption).toBe('C4');
                expect(table1.rows[0]['i1']).toBe('R1');
                expect(table1.rows[0]['i2']).toBe('R2');
                expect(table1.rows[0]['ii2']).toBe('R2');
                expect(table1.rows[0]['i4']).toBe('R4');
                expect(table1.rows[1]['i1']).toBe('R10');
                expect(table1.rows[1]['i2']).toBe('R20');
                expect(table1.rows[1]['ii2']).toBe('R20');
                expect(table1.rows[1]['i4']).toBe('R40');
            });

            it("- merge() : opt = 1 (원본 별칭 사용) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                var json2 = { 
                    columns: {
                        i3: { caption: 'C3'},
                        i4: { caption: 'C4'},
                    },
                    rows: [
                        { i3: 'R3', i4: 'R4' },
                        { i3: 'R30', i4: 'R40' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
                table1.columns['i1'].alias = 'ii1'; // 별칭 처리
                table1.merge(table2, 1);
    
                expect(table1.columns.count).toBe(4);
                expect(table1.rows.count).toBe(2);
                expect(table1.columns.alias('ii1').caption).toBe('C1');
                expect(table1.columns['i2'].caption).toBe('C2');
                expect(table1.columns['i3'].caption).toBe('C3');
                expect(table1.columns['i4'].caption).toBe('C4');
                expect(table1.rows[0]['ii1']).toBe('R1');   // 별칭 접근
                expect(table1.rows[0]['i2']).toBe('R2');
                expect(table1.rows[0]['i3']).toBe('R3');
                expect(table1.rows[0]['i4']).toBe('R4');
                expect(table1.rows[1]['ii1']).toBe('R10');  // 별칭 접근
                expect(table1.rows[1]['i2']).toBe('R20');
                expect(table1.rows[1]['i3']).toBe('R30');
                expect(table1.rows[1]['i4']).toBe('R40');
            });
            it("- merge() : opt = 1 (예외 : 컬럼 중복 1) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                var json2 = { 
                    columns: {
                        i1: { caption: 'C3'},
                        i4: { caption: 'C4'},
                    },
                    rows: [
                        { i1: 'R3', i4: 'R4' },
                        { i1: 'R30', i4: 'R40' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
    
                expect(() => table1.merge(table2, 1)).toThrow('EL05343');
            });
            it("- merge() : opt = 1 (예외 : 컬럼 중복 2) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                var json2 = { 
                    columns: {
                        i3: { caption: 'C3'},
                        i4: { caption: 'C4'},
                    },
                    rows: [
                        { i3: 'R3', i4: 'R4' },
                        { i3: 'R30', i4: 'R40' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
                table2.columns['i3'].alias = 'i1'; // 별칭 처리
    
                expect(() => table1.merge(table2, 1)).toThrow('EL05343');
            });
            it("- merge() : opt = 1 (예외 : 별칭 중복 1) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                var json2 = { 
                    columns: {
                        ii1: { caption: 'C3'},
                        i4: { caption: 'C4'},
                    },
                    rows: [
                        { ii1: 'R3', i4: 'R4' },
                        { ii1: 'R30', i4: 'R40' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
                table1.columns['i1'].alias = 'ii1';
    
                expect(() => table1.merge(table2, 1)).toThrow('EL05344');
            });
            it("- merge() : opt = 1 (예외 : 컬럼 중복 2) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                var json2 = { 
                    columns: {
                        i3: { caption: 'C3'},
                        i4: { caption: 'C4'},
                    },
                    rows: [
                        { i3: 'R3', i4: 'R4' },
                        { i3: 'R30', i4: 'R40' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
                table1.columns['i1'].alias = 'ii1';
                table2.columns['i3'].alias = 'ii1';
    
                expect(() => table1.merge(table2, 1)).toThrow('EL05344');
            });
            it("- merge() : opt = 2 (다른 구조) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                var json2 = { 
                    columns: {
                        i2: { caption: 'C2'},
                        i3: { caption: 'C3'},
                    },
                    rows: [
                        { i2: 'R200', i3: 'R300' },
                        { i2: 'R2000', i3: 'R3000' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
                table1.merge(table2, 2);
    
                expect(table1.columns.count).toBe(3);
                expect(table1.rows.count).toBe(4);
                expect(table1.columns['i1'].caption).toBe('C1');
                expect(table1.columns['i2'].caption).toBe('C2');
                expect(table1.columns['i3'].caption).toBe('C3');
                expect(table1.rows[0]['i1']).toBe('R1');
                expect(table1.rows[0]['i2']).toBe('R2');
                expect(table1.rows[0]['i3']).toBe(null);
                expect(table1.rows[1]['i1']).toBe('R10');
                expect(table1.rows[1]['i2']).toBe('R20');
                expect(table1.rows[1]['i3']).toBe(null);
                expect(table1.rows[2]['i1']).toBe(null);
                expect(table1.rows[2]['i2']).toBe('R200');
                expect(table1.rows[2]['i3']).toBe('R300');
                expect(table1.rows[3]['i1']).toBe(null);
                expect(table1.rows[3]['i2']).toBe('R2000');
                expect(table1.rows[3]['i3']).toBe('R3000');
            });
            it("- merge() : opt = 3 (다른 구조, 로우 길이 다름) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                var json2 = { 
                    columns: {
                        i3: { caption: 'C3'},
                        i4: { caption: 'C4'},
                    },
                    rows: [
                        { i3: 'R3', i4: 'R4' },
                        { i3: 'R30', i4: 'R40' },
                        { i3: 'R300', i4: 'R400' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
                table1.merge(table2, 3);
    
                expect(table1.columns.count).toBe(4);
                expect(table1.rows.count).toBe(3);
                expect(table1.columns['i1'].caption).toBe('C1');
                expect(table1.columns['i2'].caption).toBe('C2');
                expect(table1.columns['i3'].caption).toBe('C3');
                expect(table1.columns['i4'].caption).toBe('C4');
                expect(table1.rows[0]['i1']).toBe('R1');
                expect(table1.rows[0]['i2']).toBe('R2');
                expect(table1.rows[0]['i3']).toBe('R3');
                expect(table1.rows[0]['i4']).toBe('R4');
                expect(table1.rows[1]['i1']).toBe('R10');
                expect(table1.rows[1]['i2']).toBe('R20');
                expect(table1.rows[1]['i3']).toBe('R30');
                expect(table1.rows[1]['i4']).toBe('R40');
                expect(table1.rows[2]['i1']).toBe(null);
                expect(table1.rows[2]['i2']).toBe(null);
                expect(table1.rows[2]['i3']).toBe('R300');
                expect(table1.rows[2]['i4']).toBe('R400');
            });
            it("- merge() : opt = 3 (다른 구조, 로우 길이 같음)", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                var json2 = { 
                    columns: {
                        i3: { caption: 'C3'},
                        i4: { caption: 'C4'},
                    },
                    rows: [
                        { i3: 'R3', i4: 'R4' },
                        { i3: 'R30', i4: 'R40' },
                    ]
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
                table1.merge(table2, 3);
    
                expect(table1.columns.count).toBe(4);
                expect(table1.rows.count).toBe(2);
                expect(table1.rows[0]['i1']).toBe('R1');
                expect(table1.rows[0]['i2']).toBe('R2');
                expect(table1.rows[0]['i3']).toBe('R3');
                expect(table1.rows[0]['i4']).toBe('R4');
                expect(table1.rows[1]['i1']).toBe('R10');
                expect(table1.rows[1]['i2']).toBe('R20');
                expect(table1.rows[1]['i3']).toBe('R30');
                expect(table1.rows[1]['i4']).toBe('R40');
            });
            it("- 예외 : merge() : opt = 3 별칭 충돌 ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1', alias: 'ii1'},
                        i2: { caption: 'C2'},
                    },
                };
                var json2 = { 
                    columns: {
                        ii1: { caption: 'CC2'},
                        i4: { caption: 'C4'},
                    },
                };
                table1.read(json1, 3);
                table2.read(json2, 3);
                
                expect(()=> table1.merge(table2, 3)).toThrow(/EL05346/)
            });
            it("- 예외 : target, opt 타입 실패 ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                
                expect(()=> table1.merge({})).toThrow(/EL05341/)
                expect(()=> table1.merge(table2, 'ERR')).toThrow(/EL05342/)
            });
        });
    
        describe("BaseEntity.select(filter, args) <엔티티 조회>", () => {
            it("- select() : 기본값 조회 ", () => {
                var table1 = new MetaTable('T1');
                // var json1 = { 
                //     columns: {
                //         i1: { caption: 'C1'},
                //         i2: { caption: 'C2'},
                //     },
                //     rows: [
                //         { i1: 1, i2: 2 },
                //         { i1: 10, i2: 20 },
                //     ]
                // };
                // table1.load(json1, 3);
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns['i1'].caption = 'C1';
                table1.columns['i2'].caption = 'C2';
                var row = table1.newRow();
                row['i1'] = 1;
                row['i2'] = 2;
                table1.rows.add(row);
                var row = table1.newRow();
                row['i1'] = 10;
                row['i2'] = 20;
                table1.rows.add(row);

                // 초기화하여서 다시 임으로 불러와야함
                MetaRegistry.ns.add('Meta.Entity.MetaView', MetaView);
                var table2 = table1.select();
    
                expect(table2.columns.count).toBe(2);
                expect(table2.rows.count).toBe(2);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.columns['i2'].caption).toBe('C2');
                expect(table2.rows[0]['i1']).toBe(1);
                expect(table2.rows[0]['i2']).toBe(2);
                expect(table2.rows[1]['i1']).toBe(10);
                expect(table2.rows[1]['i2']).toBe(20);
                // 참조 검사
                expect(table2.columns['i1'] === table1.columns['i1']).toBe(true);
                expect(table2.columns['i2'] === table1.columns['i2']).toBe(true);
                expect(table2.instanceOf(MetaView)).toBe(true);
            });
            it("- select(filter) : 필터 설정 ", () => {
                var table1 = new MetaTable('T1');
                // var json1 = { 
                //     columns: {
                //         i1: { caption: 'C1'},
                //         i2: { caption: 'C2'},
                //     },
                //     rows: [
                //         { i1: 1, i2: 2 },
                //         { i1: 10, i2: 20 },
                //     ]
                // };
                // table1.load(json1, 3);
                // setter 방식
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns['i1'].caption = 'C1';
                table1.columns['i2'].caption = 'C2';
                var row = table1.newRow();
                row['i1'] = 1;
                row['i2'] = 2;
                table1.rows.add(row);
                var row = table1.newRow();
                row['i1'] = 10;
                row['i2'] = 20;
                table1.rows.add(row);

                MetaRegistry.ns.add('Meta.Entity.MetaView', MetaView);
                var fun1 = function(row) { return row['i1'] < 10}
                // var table2 = table1.select([], row => row['i1'] < 10);
                var table2 = table1.select(fun1);
                
                expect(table2.columns.count).toBe(2);
                expect(table2.rows.count).toBe(1);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.columns['i2'].caption).toBe('C2');
                expect(table2.rows[0]['i1']).toBe(1);
                expect(table2.rows[0]['i2']).toBe(2);
            });
            it("- select(itmms) : 아이템 설정", () => {
                var table1 = new MetaTable('T1');
                // var json1 = { 
                //     columns: {
                //         i1: { caption: 'C1'},
                //         i2: { caption: 'C2'},
                //     },
                //     rows: [
                //         { i1: 1, i2: 2 },
                //         { i1: 10, i2: 20 },
                //     ]
                // };
                // table1.load(json1, 3);
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns['i1'].caption = 'C1';
                table1.columns['i2'].caption = 'C2';
                var row = table1.newRow();
                row['i1'] = 1;
                row['i2'] = 2;
                table1.rows.add(row);
                var row = table1.newRow();
                row['i1'] = 10;
                row['i2'] = 20;
                table1.rows.add(row);
                MetaRegistry.ns.add('Meta.Entity.MetaView', MetaView);
                var table2 = table1.select('i1');
                var table3 = table1.select(row => row['i1'] < 10, ['i1']);
                var table4 = table1.select(row => row['i1'] < 10, 'i1');
    
                expect(table4.equal(table3)).toBe(true);
                expect(table2.columns.count).toBe(1);
                expect(table2.rows.count).toBe(2);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.rows[0]['i1']).toBe(1);
                expect(table2.rows[1]['i1']).toBe(10);
            });
            // it("- select(itmms) : 아이템 설정", () => {
            //     // MetaRegistry.ns.add('Meta.Entity.MetaView', MetaView);
            //     var view1 = new MetaView('temp')
            //     var table1 = new MetaTable('T1');
            //     table1.columns.add('i1');
            //     table1.columns.add('i2');
            //     var row = table1.newRow();
            //     row['i1'] = 1;
            //     row['i2'] = 2;
            //     table1.rows.add(row);
            //     var table2 = table1.select('i1', 'i3');
            // });

            it("- select(itmms) : 예외 <초기화>", () => {
                var table1 = new MetaTable('T1');
                MetaRegistry.init();

                expect(()=> table1.select('i1')).toThrow(/EL05335/)
                expect(()=> table1.select('i1')).toThrow(/EL05336/)
            });
            // it("- select(itmms) : 예외 <callback>", () => {
            //     var table1 = new MetaTable('T1');
            //     MetaRegistry.ns.add('Meta.Entity.MetaView', MetaView);
            //     expect(()=> table1.select('i1', 'ERR')).toThrow(/ES021/)
            // });
            // it("- select(itmms) : 예외 <columnName>", () => {
            //     var table1 = new MetaTable('T1');
            //     MetaRegistry.ns.add('Meta.Entity.MetaView', MetaView);
            //     expect(()=> table1.select(100)).toThrow(/ES021/)
            // });
        });
        describe("BaseEntity.load(rObj | mObj) <가져오기>", () => {
            it("- load(rObj) : rObj 가져오기 ", () => {
                var table1 = new MetaTable('TT1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns['i1'].caption = 'C1';
                table1.columns['i2'].caption = 'C2';
                var row = table1.newRow();
                row['i1'] = 'R1';
                row['i2'] = 'R2';
                table1.rows.add(row);
                var row = table1.newRow();
                row['i1'] = 'R10';
                row['i2'] = 'R20';
                table1.rows.add(row);
                var row = table1.newRow();
                row['i1'] = 'R100';
                row['i2'] = 'R200';
                table1.rows.add(row);
                var rObj = table1.getObject();
                // MetaRegistry.init();
                // MetaRegistry.registerClass('Meta.Entity', 'MetaRow', MetaRow);
                // loadNamespace();    // init() 초기화하여 불러와야함
                var table2 = new MetaTable('T2');
                table2.load(rObj);
        
                // table1
                expect(table1.tableName).toBe('TT1');
                expect(table1.columns.count).toBe(2);
                expect(table1.columns['i1'].caption).toBe('C1');
                expect(table1.columns['i2'].caption).toBe('C2');
                expect(table1.rows.count).toBe(3);
                // table2
                expect(table2.tableName).toBe('TT1');
                expect(table2.columns.count).toBe(2);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.columns['i2'].caption).toBe('C2');
                expect(table2.rows.count).toBe(3);
                expect(table2.rows[0]['i1']).toBe('R1');
                expect(table2.rows[0]['i2']).toBe('R2');
                expect(table2.rows[1]['i1']).toBe('R10');
                expect(table2.rows[1]['i2']).toBe('R20');
                expect(table2.rows[2]['i1']).toBe('R100');
                expect(table2.rows[2]['i2']).toBe('R200');
            });
            it("- load(rObj) : string 가져오기 ", () => {
                var table1 = new MetaTable('TT1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns['i1'].caption = 'C1';
                table1.columns['i2'].caption = 'C2';
                var row = table1.newRow();
                row['i1'] = 'R1';
                row['i2'] = 'R2';
                table1.rows.add(row);
                var row = table1.newRow();
                
                // 예외 검사
                // table1.rows._elemTypes.push(String);                
                // MetaRegistry.registerClass('', 'String', String);
                
                var str = table1.output(0, stringify, '\t');

                // 강제로 초기화 후, ns에 대상 등록 후 생성
                MetaRegistry.init();
                MetaRegistry.registerClass(MetaRow, 'Meta.Entity', 'MetaRow');
                MetaRegistry.registerClass(MetaColumn, 'Meta.Entity', 'MetaColumn');
                var table2 = new MetaTable('T2');
                table2.load(str, parse);
        
                // table1
                expect(table1.tableName).toBe('TT1');
                expect(table1.columns.count).toBe(2);
                expect(table1.columns['i1'].caption).toBe('C1');
                expect(table1.columns['i2'].caption).toBe('C2');
                expect(table1.rows.count).toBe(1);
                // table2
                expect(table2.tableName).toBe('TT1');
                expect(table2.columns.count).toBe(2);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.columns['i2'].caption).toBe('C2');
                expect(table2.rows.count).toBe(1);
                expect(table2.rows[0]['i1']).toBe('R1');
                expect(table2.rows[0]['i2']).toBe('R2');
            });
            it("- load(entity) : 예외(엔티티는 삽입 불가) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table2.columns.add('i1');
                var row = table1.newRow();
                row['i1'] = 'R1';
                row['i2'] = 'R2';
                table1.rows.add(row);
    
                expect(() => table2.load(table1)).toThrow('EL05351');
                expect(() => table2.load(table1)).toThrow('EL05353'); // catch
            });
            it("- load(entity) : 커버리지 ", () => {
                var table1 = new MetaTable('T1');
                
                expect(() => table1.load(null)).toThrow('EL05352');
            });
        });
        describe("BaseEntity.output(stringify?, space?, vOpt?): str <엔티티 출력>", () => {
            it("- output() : getObject() 결과 비교  ", () => {
                const table1 = new MetaTable('T1');
                table1.columns.add('c1');
                const c1 = table1.columns['c1'];
                const str1 = table1.output();
                const rObj = table1.getObject();
                const str2 = JSON.stringify(rObj);

                expect(str1).toBe(str2);
            });
        });
        describe("BaseEntity._readEntity(): <엔티티 읽기>", () => {
            it("- 예외 및 커버리지  ", () => {
                // const prop1 = {
                //     default: 1, caption: 'C1', isNotNull: true, isNullPass: true,
                //     constraints: [{regex: /reg/, msg: 'msg' }],
                //     setter: function() { /** s */ },
                //     getter: function() { /** g */ }
                // }
                const table1 = new MetaTable('T1');
                const table2 = new MetaTable('T2');
                // const table3 = new MetaTable('T3');
                // const table4 = new MetaTable('T4');
                // table1.columns.add(new MetaColumn('c1', table1, prop1));
                // table1.rows.add(table1.newRow());
                // table1.rows[0]['c1'] = 'R1'
                // table4.read(table1)     // 3
                // table2.read(table1, 1)
                // table3.read(table1, 2)


                expect(()=> table1._readEntity({})).toThrow(/EL05324/)

                expect(()=> table1._readEntity(table2, '!!')).toThrow(/EL05325/)
                expect(()=> table1._readEntity(table2, '!!')).toThrow(/EL05326/)
            });
        });

        describe("BaseEntity.read(obj | rObj, opt) <JSON 읽기>", () => {
            it("- read(oGuid) : 객체 읽기  ", () => {
                const prop1 = {
                    default: 1, caption: 'C1', isNotNull: true, isNullPass: true,
                    constraints: [{regex: /reg/, msg: 'msg' }],
                    setter: function() { /** s */ },
                    getter: function() { /** g */ }
                }
                const table1 = new MetaTable('T1');
                const table2 = new MetaTable('T2');
                const table3 = new MetaTable('T3');
                const table4 = new MetaTable('T4');
                table1.columns.add(new MetaColumn('c1', table1, prop1));
                table1.rows.add(table1.newRow());
                table1.rows[0]['c1'] = 'R1'
                const gObj1 = table1.getObject();
                table2.read(gObj1) // opt = 3
                // table3.read(gObj1, 1)
                // table4.read(gObj1, 2)

                expect(table2.columns.count).toBe(1);
                expect(table2.rows.count).toBe(1);
            });
            it("- read(entity) : 객체 읽기  ", () => {
                const prop1 = {
                    default: 1, caption: 'C1', isNotNull: true, isNullPass: true,
                    constraints: [{regex: /reg/, msg: 'msg' }],
                    setter: function() { /** s */ },
                    getter: function() { /** g */ }
                }
                const table1 = new MetaTable('T1');
                const table2 = new MetaTable('T1');
                const table3 = new MetaTable('T3');
                const table4 = new MetaTable('T4');
                table1.columns.add(new MetaColumn('c1', table1, prop1));
                table1.rows.add(table1.newRow());
                table1.rows[0]['c1'] = 'R1'
                table2.read(table1) // opt = 3
                table3.read(table1, 1)
                table4.read(table1, 2)

                expect(table2.columns.count).toBe(1);
                expect(table2.rows.count).toBe(1);
            });
            it("- read(entity) : 예외  ", () => {
                const table1 = new MetaTable('T1');
                const table2 = new MetaTable('T2');
                const table3 = new MetaTable('T3');
                table1.columns.add(new MetaColumn('c1', table1));
                table2.columns.add(new MetaColumn('c2', table2));
                table3.columns.add(new MetaColumn('c1', table3));
                table1.rows.add(table1.newRow());
                table2.rows.add(table2.newRow());

                expect(()=> table2.read(table1) ).toThrow(/EL05327/)
                expect(()=> table3.read(table1) ).toThrow(/EL05328/)
            });
            it("- read(oSch, opt) : obj 읽기", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var table3 = new MetaTable('T3');
                var table4 = new MetaTable('T4');
                var table5 = new MetaTable('T5');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                        { i1: 'R100', i2: 'R200' },
                    ]
                };
                var json2 = { 
                    entity: {
                        columns: {
                            i1: { caption: 'C1'},
                        },
                    }
                };
                expect(()=> table1.read(json1, 0)).toThrow('EL05356')
                expect(()=> table1.read(json1, 0)).toThrow('EL05357')     // catch 
                expect(()=> table1.read(json1, 'ERR')).toThrow('EL05355')
                table2.read(json1, 1);  // 스키마 가져오기
                table3.read(json1, 2);  // 데이터 가져오기
                table4.read(json1, 3);  // 스키마 + 데이터 가져오기
                table5.read(json2, 1);  // 스키마 가져오기
                table5.read(json1, 2);  // 스키마 + 데이터 가져오기
        
                // table1
                expect(table1.columns.count).toBe(0);
                expect(table1.rows.count).toBe(0);
                // table2
                expect(table2.columns.count).toBe(2);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.columns['i2'].caption).toBe('C2');
                expect(table2.rows.count).toBe(0);
                // table3
                expect(table3.columns.count).toBe(0);
                expect(table3.rows.count).toBe(0);
                // table4
                expect(table4.columns.count).toBe(2);
                expect(table4.columns['i1'].caption).toBe('C1');
                expect(table4.columns['i2'].caption).toBe('C2');
                expect(table4.rows.count).toBe(3);
                expect(table4.rows[0]['i1']).toBe('R1');
                expect(table4.rows[0]['i2']).toBe('R2');
                expect(table4.rows[1]['i1']).toBe('R10');
                expect(table4.rows[1]['i2']).toBe('R20');
                expect(table4.rows[2]['i1']).toBe('R100');
                expect(table4.rows[2]['i2']).toBe('R200');
                // table5
                expect(table5.columns.count).toBe(1);
                expect(table5.columns['i1'].caption).toBe('C1');
                expect(table5.rows.count).toBe(3);
                expect(table5.rows[0]['i1']).toBe('R1');
                expect(table5.rows[0]['i2']).toBe(undefined);
                expect(table5.rows[1]['i1']).toBe('R10');
                expect(table5.rows[1]['i2']).toBe(undefined);
                expect(table5.rows[2]['i1']).toBe('R100');
                expect(table5.rows[2]['i2']).toBe(undefined);
            });
            it("- read(rObj, opt) : obj<ref> 가져오기", () => {
                var table0 = new MetaTable('T0');
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var table3 = new MetaTable('T3');
                var table4 = new MetaTable('T4');
                var table5 = new MetaTable('T5');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                        { i1: 'R100', i2: 'R200' },
                    ]
                };
                var json2 = { 
                    table: {
                        columns: {
                            i1: { caption: 'C1'},
                        },
                    }
                };
                table0.read(json1);  // 아무 동작 안함
                const rObj = table0.getObject();
                expect(()=> table1.read(rObj, 0)).toThrow('EL05356')
                table2.read(rObj, 1);  // 스키마 가져오기
                table3.read(rObj, 2);  // 데이터 가져오기
                table4.read(rObj, 3);  // 스키마 + 데이터 가져오기
                table5.read(json2, 1);  // 스키마 가져오기
                table5.read(rObj, 2);  // 데이터 가져오기
        
                // table1
                expect(table1.columns.count).toBe(0);
                expect(table1.rows.count).toBe(0);
                // table2
                expect(table2.columns.count).toBe(2);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.columns['i2'].caption).toBe('C2');
                expect(table2.rows.count).toBe(0);
                // table3
                expect(table3.columns.count).toBe(0);
                expect(table3.rows.count).toBe(0);
                // table4
                expect(table4.columns.count).toBe(2);
                expect(table4.columns['i1'].caption).toBe('C1');
                expect(table4.columns['i2'].caption).toBe('C2');
                expect(table4.rows.count).toBe(3);
                expect(table4.rows[0]['i1']).toBe('R1');
                expect(table4.rows[0]['i2']).toBe('R2');
                expect(table4.rows[1]['i1']).toBe('R10');
                expect(table4.rows[1]['i2']).toBe('R20');
                expect(table4.rows[2]['i1']).toBe('R100');
                expect(table4.rows[2]['i2']).toBe('R200');
                // table5
                expect(table5.columns.count).toBe(1);
                expect(table5.columns['i1'].caption).toBe('C1');
                expect(table5.rows.count).toBe(3);
                expect(table5.rows[0]['i1']).toBe('R1');
                expect(table5.rows[0]['i2']).toBe(undefined);
                expect(table5.rows[1]['i1']).toBe('R10');
                expect(table5.rows[1]['i2']).toBe(undefined);
                expect(table5.rows[2]['i1']).toBe('R100');
                expect(table5.rows[2]['i2']).toBe(undefined);
            });
            it("- read(oSch) : obj<Schema> 가져오기", () => {
                var table1 = new MetaTable('T1');
                const json1 = {
                    _guid: '__T1',
                    // name: 'T1',
                    columns: {
                        $key: ['c1', 'c2'],
                        c1: { 
                            _entity: {$ref: '__T1'},
                            _guid: '__C1',
                            caption: 'C1', alias: 'ii1'
                        },
                        c2: { 
                            _guid: '__C2',
                            caption: 'C2'
                        },
                    },
                    rows: [
                        { ii1: 'R1', i2: 'R2' },
                        { ii1: 'R10', i2: 'R20' },
                    ]
                }
                table1.read(json1, 3);

                expect(table1.columns['c1']._entity.equal(table1)).toBe(true);
            });
            it("- read(oSch) : 빈 스키마 가져오기", () => {
                var table1 = new MetaTable('T1');
                const json1 = {
                    columns: {
                        c1: null,
                    },
                }
                table1.read(json1, 3);

                expect(table1.columns.count).toBe(0);
            });
            it("- 예외 : 스키마 참조연결 실패", () => {
                var table1 = new MetaTable('T1');
                const json1 = {
                    _guid: '__T1',
                    // name: 'T1',
                    columns: {
                        $key: ['c1', 'c2'],
                        c1: { 
                            _entity: {$ref: 'ERR'},
                            _guid: '__C1',
                            caption: 'C1', alias: 'ii1'
                        },
                        c2: { 
                            _guid: '__C2',
                            caption: 'C2'
                        },
                    },
                    rows: [
                        { ii1: 'R1', i2: 'R2' },
                        { ii1: 'R10', i2: 'R20' },
                    ]
                }
                expect(()=> table1.read(json1, 3)).toThrow(/EL0532D/)
            });

        });

        describe("BaseEntity.readSchema(obj) <column 읽기(스키마)>", () => {

            it("- readSchema(obj) : column 읽기(스키마) ", () => {
                var table1 = new MetaTable('T1');
                var json1 = { 
                    name: 'T1',
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    }
                };
                table1.readSchema(json1);
        
                // table1
                expect(table1.columns.count).toBe(2);
                expect(table1.columns['i1'].caption).toBe('C1');
                expect(table1.columns['i2'].caption).toBe('C2');
                expect(table1.columns[0].caption).toBe('C1');
                expect(table1.columns[1].caption).toBe('C2');
            });
            
            it("- readSchema(json) : 읽기 순서 변경 ", () => {
                var table1 = new MetaTable('T1');
                var json1 = { 
                    name: 'T1',
                    columns: {
                        $key: ['i2', 'i1'],
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    }
                };
                table1.readSchema(json1);
        
                // table1
                expect(table1.columns.count).toBe(2);
                expect(table1.columns['i2'].caption).toBe('C2');
                expect(table1.columns['i1'].caption).toBe('C1');
                expect(table1.columns[0].caption).toBe('C2');
                expect(table1.columns[1].caption).toBe('C1');
            });
            it("- readSchema(JSON) : 중복 예외 ", () => {
                var table1 = new MetaTable('T1');
                var json1 = { columns: {
                    i1: { caption: 'C1'},
                    i2: { caption: 'C2'},
                    }
                };
                table1.columns.addValue('i1', '');
    
                expect(() => table1.readSchema(json1)).toThrow('EL0532E');
            });
            it("- readSchema(JSON) : 예외(row 존재) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                    },
                    rows: [
                        { i1: 'R1'},
                    ]
                };
                var json2 = { columns: {
                    i2: { caption: 'C2'},
                    }
                };
                table1.read(json1, 3);  // 스키마 + 데이터 가져오기
    
                expect(() => table1.readSchema(json2)).toThrow('EL0532B');
            });
            it("- readSchema(JSON, isReadRow) : column 읽기(스키마) ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');
                var table3 = new MetaTable('T3');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    }
                };
                var json2 = { 
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                    ]
                };
                var json3 = { columns: {
                        i1: { caption: 'C1'},
                    },
                    rows: { i1: 'R1', i2: 'R2' },
                    
                };
                table1.readSchema(json1, true);
                table2.readSchema(json2, true);
                table3.readSchema(json3, true);
        
                // table1
                expect(table1.columns.count).toBe(2);
                expect(table1.columns['i1'].caption).toBe('C1');
                expect(table1.columns['i2'].caption).toBe('C2');
                // table2
                expect(table2.columns.count).toBe(2);
                // table3
                expect(table3.columns.count).toBe(2);
                expect(table3.columns['i1'].caption).toBe('C1');
            });
            it("- readSchema(obj) : entiry가 아닌 meta 객체 넣기 <예외>", () => {
                var e1  = new MetaElement('E1')
                var table1 = new MetaTable('T1');
                const g1 = e1.getObject();
                
                expect(()=> table1.readSchema(g1)).toThrow(/EL05331/)
                expect(()=> table1.readSchema(g1)).toThrow(/EL05332/)
            });

        });
        
        describe("BaseEntity.readData() : <row 읽기(데이터)>", () => {
            it("- readData() : row 가져오기(데이터) ", () => {
                var table1 = new MetaTable('T1');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                        { i1: 'R100', i2: 'R200' },
                    ]
                };
                table1.readSchema(json1);
                table1.readData(json1);
        
                // table1
                expect(table1.columns.count).toBe(2);
                expect(table1.columns['i1'].caption).toBe('C1');
                expect(table1.columns['i2'].caption).toBe('C2');
                expect(table1.rows.count).toBe(3);
                expect(table1.rows[0]['i1']).toBe('R1');
                expect(table1.rows[0]['i2']).toBe('R2');
                expect(table1.rows[1]['i1']).toBe('R10');
                expect(table1.rows[1]['i2']).toBe('R20');
                expect(table1.rows[2]['i1']).toBe('R100');
                expect(table1.rows[2]['i2']).toBe('R200');
            });
            it("- readSchema(obj) : entiry가 아닌 meta 객체 넣기 <예외>", () => {
                var e1  = new MetaElement('E1')
                var table1 = new MetaTable('T1');
                const g1 = e1.getObject();
                
                expect(()=> table1.readData(g1)).toThrow(/EL05331/)
            });
        });
        describe("BaseEntity.write(): obj <쓰기>", () => {
            it("- 스키마/데이터 내보내기 (columns/rows) ", () => {
                var table1 = new MetaTable('T1');
                var json1 = { 
                    columns: {
                        i1: { 
                            caption: 'C1', alias: 'ii1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { ii1: 'R1', i2: 'R2' },
                        { ii1: 'R10', i2: 'R20' },
                    ]
                };
                table1.read(json1, 3);
                const json2 = {
                    _guid: table1._guid,
                    // name: 'T1',
                    columns: {
                        $key: ['i1', 'i2'],
                        i1: { 
                            _guid: table1.columns.i1._guid,
                            caption: 'C1', alias: 'ii1'
                        },
                        i2: { 
                            _guid: table1.columns.i2._guid,
                            caption: 'C2'
                        },
                    },
                    rows: [
                        { ii1: 'R1', i2: 'R2' },
                        { ii1: 'R10', i2: 'R20' },
                    ]
                }
                const obj = table1.write(0);

                expect(obj).toEqual(json2);
            });
        });
        
        describe("BaseEntity.writeSchema(): obj <쓰기>", () => {
            it("- 스키마 내보내기 (columns) ", () => {
                var table1 = new MetaTable('T1');
                var json1 = { 
                    columns: {
                        i1: { 
                            caption: 'C1', alias: 'ii1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                table1.read(json1, 3);
                const json2 = {
                    _guid: table1._guid,
                    // name: 'T1',
                    columns: {
                        $key: ['i1', 'i2'],
                        i1: { 
                            _guid: table1.columns.i1._guid,
                            caption: 'C1', alias: 'ii1'
                        },
                        i2: { 
                            _guid: table1.columns.i2._guid,
                            caption: 'C2'
                        },
                    },
                    rows: []
                }
                const obj = table1.writeSchema(1);

                expect(obj).toEqual(json2);
            });
        });
        describe("BaseEntity.writeData(): obj <쓰기>", () => {
            it("- 스키마 내보내기 (columns) ", () => {
                var table1 = new MetaTable('T1');
                var json1 = { 
                    columns: {
                        i1: { caption: 'C1'},
                        i2: { caption: 'C2'},
                    },
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                };
                const json2 = {
                    // name: 'T1',
                    columns: {},
                    rows: [
                        { i1: 'R1', i2: 'R2' },
                        { i1: 'R10', i2: 'R20' },
                    ]
                }
                table1.read(json1, 3);
                const obj = table1.writeData(2);

                expect(obj).toEqual(json2);
            });
        });

        

        describe("MetaTable.getObject(): obj<ref> <객체 얻기>", () => {
            it("- getObject() : 직렬화 객체 얻기 ", () => {
                const a1 = new MetaTable('T1');
                a1.columns.add('a1');
                a1.columns.add('a2');
                var row = a1.newRow();
                row['a1'] = 'R1';
                row['a2'] = 'R2';
                a1.rows.add(row);
                const obj = a1.getObject();

                expect(obj._type === 'Meta.Entity.MetaTable').toBe(true);
                expect(obj.name === 'T1').toBe(true);
                expect(obj.tableName === 'T1').toBe(true);
                expect(obj.columns._elem[0]._type === 'Meta.Entity.MetaColumn').toBe(true);
                expect(obj.columns._elem[0].name === 'a1').toBe(true);
                expect(obj.columns._elem[0].columnName === 'a1').toBe(true);
                expect(obj.columns._elem[1]._type === 'Meta.Entity.MetaColumn').toBe(true);
                expect(obj.columns._elem[1].name === 'a2').toBe(true);
                expect(obj.columns._elem[1].columnName === 'a2').toBe(true);
                expect(obj.columns._key).toEqual(['a1', 'a2']);
                expect(obj.rows._elem[0]._type === 'Meta.Entity.MetaRow').toBe(true);
                expect(obj.rows._elem[0]._elem).toEqual(['R1', 'R2']);
                expect(obj.rows._elem[0]._key).toEqual(['a1', 'a2']);
            });
            it("- getObject() : value, default 메타 객체 ", () => {
                const e1 = new MetaElement('E1')
                const a1 = new MetaTable('T1');
                a1.columns._baseType = ObjectColumn
                a1.columns.add('a1');
                a1.columns.add('a2');
                a1.columns['a1'].value = e1;
                // a1.columns['a1'].default = e1;
                a1.columns['a2'].value = e1;
                a1.columns['a2'].default = e1;
                const obj1 = a1.getObject();
                const obj2 = a1.columns.getObject();

                expect(obj1.columns).toEqual(obj2);
                expect(obj1.columns._elem[0]._type === 'Meta.Entity.ObjectColumn').toBe(true);
                expect(obj1.columns._elem[0].name === 'a1').toBe(true);
                expect(obj1.columns._elem[0].value).toEqual(e1.getObject())
                expect(obj1.columns._elem[1]._type === 'Meta.Entity.ObjectColumn').toBe(true);
                expect(obj1.columns._elem[1].name === 'a2').toBe(true);
                expect(obj1.columns._elem[1].value).toEqual({$ref: e1._guid})
                expect(obj1.columns._elem[1].value).toEqual({$ref: e1._guid})
                expect(obj1.columns._key).toEqual(['a1', 'a2']);
            });
            it("- 커버리지 : origin 전달 ", () => {
                const a1 = new MetaTable('T1');
                const obj1 = a1.getObject(0, a1);

                expect(obj1.name).toBe('T1')
            });
        });
        describe("MetaTable.setObject(mObj) <객체 설정>", () => {
            it("- setObject() : 직렬화 객체 설정 ", () => {
                const a1 = new MetaTable('T1');
                a1.columns.add('a1');
                a1.columns.add('a2');
                var row = a1.newRow();
                row['a1'] = 'R1';
                row['a2'] = 'R2';
                a1.rows.add(row);
                const rObj = a1.getObject();
                // 참조 변환 > 객체 초기화 > 네임스페이스 로드
                const mObj = MetaRegistry.transformRefer(rObj);  
                // MetaRegistry.init();
                // loadNamespace(); 
                const a2 = new MetaTable('T2');
                a2.setObject(mObj);
                const obj = a2.getObject();

                expect(a2 !== a1).toBe(true);
                expect(obj._type === 'Meta.Entity.MetaTable').toBe(true);
                expect(obj.name === 'T1').toBe(true);
                expect(obj.tableName === 'T1').toBe(true);
                expect(obj.columns._elem[0]._type === 'Meta.Entity.MetaColumn').toBe(true);
                expect(obj.columns._elem[0].name === 'a1').toBe(true);
                expect(obj.columns._elem[0].columnName === 'a1').toBe(true);
                expect(obj.columns._elem[1]._type === 'Meta.Entity.MetaColumn').toBe(true);
                expect(obj.columns._elem[1].name === 'a2').toBe(true);
                expect(obj.columns._elem[1].columnName === 'a2').toBe(true);
                expect(obj.columns._key).toEqual(['a1', 'a2']);
                expect(obj.rows._elem[0]._type === 'Meta.Entity.MetaRow').toBe(true);
                expect(obj.rows._elem[0]._elem).toEqual(['R1', 'R2']);
                expect(obj.rows._elem[0]._key).toEqual(['a1', 'a2']);
            });
            it("- 예외 : _metaSet 없음 ", () => {
                const s1 = new MetaSet('S1')
                const t1 = new MetaTable('T1');
                const t2 = new MetaTable('T2');
                t1._metaSet = s1
                const g1 = t1.getObject();
                
                expect(()=> t2.setObject(g1)).toThrow(/EL05414/)
            });
        });

        describe("MetaTable.clone(): Row <복제>", () => {
            it("- clone() : 복제 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns['i2'].caption = 'C1';
                var row = table1.newRow();
                row['i1'] = 'R1';
                row['i2'] = 'R2';
                table1.rows.add(row);
                var table2 = table1.clone();
        
                // table1
                expect(table1.tableName).toBe('T1');
                expect(table1.columns.count).toBe(2);
                expect(table1.rows.count).toBe(1);
                expect(table1.columns['i2'].caption).toBe('C1');
                expect(table1.rows[0]['i1']).toBe('R1');
                expect(table1.rows[0]['i2']).toBe('R2');
                // table2
                expect(table2.tableName).toBe('T1');
                expect(table2.columns.count).toBe(2);
                expect(table2.rows.count).toBe(1);
                expect(table2.columns['i2'].caption).toBe('C1');
                expect(table2.rows[0]['i1']).toBe('R1');
                expect(table2.rows[0]['i2']).toBe('R2');
                // 비교
                expect(table1 === table2).toBe(false);
                expect(table1.columns === table2.columns).toBe(false);
                expect(table1.columns['i1'] === table2.columns['i1']).toBe(false);
                expect(table1.columns['i2'] === table2.columns['i2']).toBe(false);
                expect(table1.rows[0] === table2.rows[0]).toBe(false);
            });
        });
        describe("MetaTable.copy(filter, args) <테이블 복사>", () => {
            it("- copy() : 기본값 조회 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns['i1'].caption = 'C1';
                table1.columns['i2'].caption = 'C2';
                var row = table1.newRow();
                row['i1'] = 1;
                row['i2'] = 2;
                table1.rows.add(row);
                var row = table1.newRow();
                row['i1'] = 10;
                row['i2'] = 20;
                table1.rows.add(row);

                var table2 = table1.copy();
    
                expect(table2.columns.count).toBe(2);
                expect(table2.rows.count).toBe(2);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.columns['i2'].caption).toBe('C2');
                expect(table2.rows[0]['i1']).toBe(1);
                expect(table2.rows[0]['i2']).toBe(2);
                expect(table2.rows[1]['i1']).toBe(10);
                expect(table2.rows[1]['i2']).toBe(20);
                // 참조 검사
                expect(table2 === table1).toBe(false);
                expect(table2.columns['i1'] === table1.columns['i1']).toBe(false);
                expect(table2.columns['i2'] === table1.columns['i2']).toBe(false);
                expect(table2.instanceOf(MetaTable)).toBe(true);
            });
            it("- copy(filter) : 필터 설정 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns['i1'].caption = 'C1';
                table1.columns['i2'].caption = 'C2';
                var row = table1.newRow();
                row['i1'] = 1;
                row['i2'] = 2;
                table1.rows.add(row);
                var row = table1.newRow();
                row['i1'] = 10;
                row['i2'] = 20;
                table1.rows.add(row);

                var table2 = table1.copy(row => row['i1'] < 10);
    
                expect(table2.columns.count).toBe(2);
                expect(table2.rows.count).toBe(1);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.columns['i2'].caption).toBe('C2');
                expect(table2.rows[0]['i1']).toBe(1);
                expect(table2.rows[0]['i2']).toBe(2);
            });
            it("- copy(itmms) : 아이템 설정", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns['i1'].caption = 'C1';
                table1.columns['i2'].caption = 'C2';
                var row = table1.newRow();
                row['i1'] = 1;
                row['i2'] = 2;
                table1.rows.add(row);
                var row = table1.newRow();
                row['i1'] = 10;
                row['i2'] = 20;
                table1.rows.add(row);

                var table2 = table1.copy('i1');
                var table3 = table1.copy(['i2']);
    
                expect(table2.tableName).toBe('T1');
                expect(table2.columns.count).toBe(1);
                expect(table2.rows.count).toBe(2);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.rows[0]['i1']).toBe(1);
                expect(table2.rows[1]['i1']).toBe(10);
                // table3
                expect(table3.tableName).toBe('T1');
                expect(table3.columns.count).toBe(1);
                expect(table3.rows.count).toBe(2);
                expect(table3.columns['i2'].caption).toBe('C2');
                expect(table3.rows[0]['i2']).toBe(2);
                expect(table3.rows[1]['i2']).toBe(20);
            });
            
            it("- copy(itmms) : 아이템 설정", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                table1.columns.add('i2');
                table1.columns['i1'].caption = 'C1';
                table1.columns['i2'].caption = 'C2';
                var row = table1.newRow();
                row['i1'] = 1;
                row['i2'] = 2;
                table1.rows.add(row);
                var row = table1.newRow();
                row['i1'] = 10;
                row['i2'] = 20;
                table1.rows.add(row);

                var table2 = table1.copy(row => row['i1'] < 10, 'i1');
                var table3 = table1.copy(row => row['i1'] < 10, ['i1']);
    
                expect(table2.tableName).toBe('T1');
                expect(table2.columns.count).toBe(1);
                expect(table2.rows.count).toBe(1);
                expect(table2.columns['i1'].caption).toBe('C1');
                expect(table2.rows[0]['i1']).toBe(1);
                // table3
                expect(table3.tableName).toBe('T1');
                expect(table3.columns.count).toBe(1);
                expect(table3.rows.count).toBe(1);
                expect(table3.columns['i1'].caption).toBe('C1');
                expect(table3.rows[0]['i1']).toBe(1);
            });
            it("- 예외 및 커버리지", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('i1');
                var row = table1.newRow();
                row['i1'] = 1;
                table1.rows.add(row);

                expect(()=> table1.copy([{}])).toThrow(/EL05321/)
                expect(()=> table1.copy('i2')).toThrow(/EL05322/)

                expect(()=> table1.copy('i2')).toThrow(/EL05323/)
            });

            /// SKIP
            // it.skip("- copy(filter, start) : 엔티티 복사 ", () => {
            //     var table1 = new MetaTable('T1');
            //     var filter = {
            //         __except: ['i1'],                   // 제외
            //         i2: { caption: 'C3' }  // 속성 오버라이딩(필터)
            //     };
            //     table1.columns.add('i1');
            //     table1.columns.add('i2');
            //     var row = table1.newRow();
            //     row['i1'] = 'R1';
            //     row['i2'] = 'R2';
            //     table1.rows.add(row);
            //     var row = table1.newRow();
            //     row['i1'] = 'R10';
            //     row['i2'] = 'R20';
            //     table1.rows.add(row);
            //     var row = table1.newRow();
            //     row['i1'] = 'R100';
            //     row['i2'] = 'R200';
            //     table1.rows.add(row);
            //     var table2 = table1.copy(filter, 1);
            //     table1.columns['i2'].caption = 'C30';  // 복사후 덮어쓰기 REVIEW:
        
            //     // table1
            //     expect(table1.columns.count).toBe(2);
            //     expect(table1.rows.count).toBe(3);
            //     expect(table1.rows[0][0]).toBe('R1');
            //     expect(table1.rows[0][1]).toBe('R2');
            //     expect(table1.rows[0]['i1']).toBe('R1');
            //     expect(table1.rows[0]['i2']).toBe('R2');
            //     expect(table1.columns['i2'].caption).toBe('C30');
            //     // 비교
            //     expect(table1.columns['i2'] !== table2.columns['i2']).toBe(true);
            //     // table2
            //     expect(table2.columns.count).toBe(1);
            //     expect(table2.rows.count).toBe(2);
            //     expect(table2.rows[0][0]).toBe('R20');
            //     expect(table2.rows[1][0]).toBe('R200');
            //     expect(table2.rows[0]['i2']).toBe('R20');
            //     expect(table2.rows[1]['i2']).toBe('R200');
            // });
        });


        describe("MetaTable.acceptChanges() <변경 허락 : 커밋>", () => {
            it("- hasChanges : 변경 유무", () => {
                var table1 = new MetaTable('T1');
                table1.rows.autoChanges = false;
                table1.columns.add('i1');
    
                // 초기
                expect(table1.rows.hasChanges).toBe(false);
                // 변경후
                var row = table1.newRow();
                row[0] = 'R1';
                table1.rows.add(row);
                expect(table1.rows.hasChanges).toBe(true);
                // 커밋 후
                table1.acceptChanges();
                expect(table1.rows.hasChanges).toBe(false);
            });
        });
        describe("MetaTable.rejectChanges() <변경 거부>", () => {
            it("- add() : 추가 후 롤백", () => {
                var table1 = new MetaTable('T1');
                table1.rows.autoChanges = false;
                table1.columns.add('i1');
    
                // 초기                
                var row = table1.newRow();
                row[0] = 'R1';
                table1.rows.add(row);
                expect(table1.rows.count).toBe(1);
                expect(table1.rows[0][0]).toBe('R1');
                // 롤백 후
                table1.rejectChanges();
                expect(table1.rows.count).toBe(0);
            });
        });

        describe("MetaTable.getChanges() <변경 내역 조회>", () => {
            it("- add(), remove() : 등록 -> 삭제 -> 조회 ", () => {
                var table1 = new MetaTable('T1');
                table1.rows.autoChanges = false;
                table1.columns.add('i1');
                
                var row1 = table1.newRow();
                row1[0] = 'R1';
                var row2 = table1.newRow();
                row2[0] = 'R2';
                var row3 = table1.newRow();
                row3[0] = 'R3';
    
                table1.rows.add(row1);
                table1.rows.add(row2);
                table1.rows.add(row3);
                table1.rows.remove(row2);

                // 등록 확인
                expect(table1.rows[0][0]).toBe('R1');
                expect(table1.rows[1][0]).toBe('R3');
                // 변경 내역 조회
                var changes2 = [
                    {cmd: 'I', pos: 0, ref: row1, clone: null },
                    {cmd: 'I', pos: 1, ref: row2, clone: null },
                    {cmd: 'I', pos: 2, ref: row3, clone: null },
                    {cmd: 'D', pos: 1, ref: null, clone: row2 },
                ];
                var changes = table1.getChanges();

                expect(changes[0].cmd === changes2[0].cmd 
                    && changes[0].pos === changes2[0].pos 
                    && changes[0].ref === changes2[0].ref 
                    && changes[0].clone === changes2[0].clone).toBe(true);
                expect(changes[1].cmd === changes2[1].cmd 
                    && changes[1].pos === changes2[1].pos 
                    && changes[1].ref === changes2[1].ref 
                    && changes[1].clone === changes2[1].clone).toBe(true);
                expect(changes[2].cmd === changes2[2].cmd 
                    && changes[2].pos === changes2[2].pos 
                    && changes[2].ref === changes2[2].ref 
                    && changes[2].clone === changes2[2].clone).toBe(true);
                expect(changes[3].cmd === changes2[3].cmd 
                    && changes[3].pos === changes2[3].pos 
                    && changes[3].ref === changes2[3].ref 
                    && changes[3].clone === changes2[3].clone).toBe(true);
            });
        });

        describe("예외 및 커버리지", () => {
            it("- BaseEntity._metaSet : 예외 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns = new MetaTableColumnCollection(table1)
            });

        });
        
    });
    describe("MetaTableCollection :: 클래스", () => {
        beforeAll(() => {
            // jest.resetModules();
        });
        describe("MetaTableCollection._baseType <테이블 타입>", () => {
            it("- this._baseType ", () => {
                class SubClass extends MetaTable {
                    constructor(name) { super(name)}
                }
                const set1 = new MetaSet('S1');
                set1.tables._baseType = SubClass
                set1.tables.add('T1');
                
                expect(set1.tables['T1'].tableName).toBe('T1');
                expect(set1.tables['T1']._type.name).toBe('SubClass');
            });
            it("- 예외 ", () => {
                const set1 = new MetaSet('S1');
                
                expect(()=> set1.tables._baseType = {}).toThrow(/EL05421/)
                expect(()=> set1.tables._baseType = MetaView).toThrow(/EL05422/)
            });
        });
        describe("MetaTableCollection.add() <테이블 추가>", () => {
            it("- tables.add() : 테이블 추가", () => {
                const set1 = new MetaSet('S1');
                const table1 = new MetaTable('t1')
                set1.tables.add(table1);
                
                expect(set1.tables.count).toBe(1);
            });
            it("- add() : 뷰 추가", () => {
                const set1 = new MetaSet('S1');
                const veiw1 = new MetaView('V1');
                set1.views.add(veiw1);
                
                expect(set1.views.count).toBe(1);
            });
            it("- 예외 : 다른 타입", () => {
                const set1 = new MetaSet('S1');
                set1.tables.add('T1');
                
                expect(()=> set1.tables.add({})).toThrow(/EL05423/)
                // expect(()=> set1.tables.add()).toThrow(/ES051/)
                expect(()=> set1.tables.add('T1')).toThrow(/EL05424/)
            });
            it("- tables.add() : 독립적으로 사용", () => {
                const tables = new MetaTableCollection();
                tables.add('t1');
                tables.add(new MetaTable('t2'));
                
                expect(tables.count).toBe(2);
                expect(tables.t1._metaSet).toBe(null);
                expect(tables.t2._metaSet).toBe(null);
            });
        });
        describe("output(), load()", () => {
            it("- 참조뷰 ", () => {
                const set1  = new MetaSet('S1');
                set1.views.add('V1');
                set1.views.add('V2', set1.views['V1']);
                set1.views.add('V3');
                set1.views['V1'].columns.add('c1');
                set1.views['V2'].columns.add('c2');
                set1.views['V3'].columns.add('c3', set1.views['V2'].columns);
                const v1 = set1.views['V1'];
                const v2 = set1.views['V2'];
                const v3 = set1.views['V3'];
                const str = set1.output(0,stringify, '\t');
                const set2 = new MetaSet('S2');
                const view = new MetaView('V');
                set2.load(str, parse);
                const vv1 = set2.views['V1'];
                const vv2 = set2.views['V2'];
                const vv3 = set2.views['V3'];              

                expect(()=> view.load(v1.output(0, stringify, '\t'))).toThrow('EL05435')
                expect(()=> view.load(v2.output(0, stringify, '\t'))).toThrow('EL05435')
                expect(()=> view.load(v3.output(0, stringify, '\t'))).toThrow('EL05435')
                expect(v1.columns.count).toBe(3)
                expect(v2.columns.count).toBe(2)
                expect(v3.columns.count).toBe(1)
                expect(vv1.columns.count).toBe(3)
                expect(vv2.columns.count).toBe(2)
                expect(vv3.columns.count).toBe(1)
                expect(vv1._metaSet === set2).toBe(true)
                expect(vv2._metaSet === set2).toBe(true)
                expect(vv3._metaSet === set2).toBe(true)
                expect(vv1.columns['c1']._entity === vv1).toBe(true)
                expect(vv2.columns['c2']._entity === vv1).toBe(true)
                expect(vv3.columns['c3']._entity === vv1).toBe(true)
                expect(vv1.equal(v1)).toBe(true)
                expect(vv2.equal(v2)).toBe(true)
                expect(vv3.equal(v3)).toBe(true)
            });
        });
    });
});
