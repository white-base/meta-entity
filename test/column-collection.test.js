/**
 * ES6 + CJS + JEST
 */
//==============================================================
// gobal defined
// 'use strict';
import { jest } from '@jest/globals';

import {MetaObject}              from 'logic-core';
import {MetaElement}             from 'logic-core';
import {BaseEntity}              from '../src/base-entity';
import {IObject}                 from 'logic-core';
import {IMarshal}                from 'logic-core';
import {Util}                    from 'logic-core';
import { BaseColumn }            from '../src/base-column';
import { MetaTable }             from '../src/meta-table';
import { MetaView }              from '../src/meta-view';
import { MetaViewCollection }    from '../src/meta-view';
import { MetaRow }               from '../src/meta-row';
import { BaseColumnCollection }  from '../src/collection-column';
import { MetaViewColumnCollection }      from '../src/collection-column';
import { MetaTableColumnCollection }     from '../src/collection-column';
import { MetaColumn }            from '../src/meta-column';

//==============================================================
// test
describe("[target: column-collection.js]", () => {
    describe("BaseColumnCollection :: 클래스", () => {
        beforeAll(() => {
            // jest.resetModules();
        });
        describe("BaseColumnCollection.initValue() <컬럼 value 초기화>", () => {
            it("- initValue(entity) : 컬렉션 전체값 초기화 ", () => {
                var view1 = new MetaView('T1');
                view1.columns.addValue('c1', 'V1');
                view1.columns.addValue('c2', 'V2');
                view1.columns.initValue();
        
                // view1
                expect(view1.viewName).toBe('T1');
                expect(view1.columns.count).toBe(2);
                expect(view1.columns['c1'].value).toBe('');
                expect(view1.columns['c2'].value).toBe('');   // REVIEW: default 값을 기준으로 초기화?
            });
            it("- initValue(entity) : 컬렉션 전체값 초기화, 빈 컬렉션 ", () => {
                var view1 = new MetaViewColumnCollection();
                view1.addValue('c1', 'V1');
                view1.addValue('c2', 'V2');
                view1.initValue();
        
                // view1
                expect(view1.count).toBe(2);
                expect(view1['c1'].value).toBe('');
                expect(view1['c2'].value).toBe('');
            });
        });

        describe("BaseColumnCollection.existAlias(key): bool <별칭 유무 검사>", () => {
            it("- existAlias(key) : 기본값 ", () => {
                var view1 = new MetaView('T1');
                view1.cols.addValue('c1', 'V1');
                view1.cols.addValue('c2', 'V2');
                
                // view1.columns.existAlias('a1');
                // view1.existAlias('a1');
                // set1.existTableName(key);
                // set1.tables.existTableName(key);

                expect(view1.columns.count).toBe(2);
                expect(view1.columns['c1'].alias).toBe('c1');
                expect(view1.columns['c2'].alias).toBe('c2');
                expect(view1.columns.existAlias('c1')).toBe(true);
                expect(view1.columns.existAlias('c2')).toBe(true);
                expect(view1.columns.existAlias('c3')).toBe(false);
            });
            it("- existAlias(key) : 변경 ", () => {
                var view1 = new MetaView('T1');
                view1.columns.addValue('c1', 'V1');
                view1.columns.addValue('c2', 'V2');
                view1.columns['c2'].alias = 'c3';
    
                expect(view1.columns.count).toBe(2);
                expect(view1.columns['c1'].alias).toBe('c1');
                expect(view1.columns['c2'].alias).toBe('c3');
                expect(view1.columns.existAlias('c1')).toBe(true);
                expect(view1.columns.existAlias('c2')).toBe(false);
                expect(view1.columns.existAlias('c3')).toBe(true);
            });
            it("- existAlias(key) : 스위칭 ", () => {
                var view1 = new MetaView('T1');
                view1.columns.addValue('c1', 'V1');
                view1.columns.addValue('c2', 'V2');
                view1.columns['c1'].alias = 'i';  // 임시 이름 변경
                view1.columns['c2'].alias = 'c1';
                view1.columns['c1'].alias = 'c2';
    
                expect(view1.columns.count).toBe(2);
                expect(view1.columns['c1'].alias).toBe('c2');
                expect(view1.columns['c2'].alias).toBe('c1');
                expect(view1.columns.existAlias('c1')).toBe(true);
                expect(view1.columns.existAlias('c2')).toBe(true);
                expect(view1.columns.existAlias('c3')).toBe(false);
            });
        });
        describe("BaseColumnCollection.alias(key): MetaColumn <별칭으로 조회> ", () => {
            it("- alias(key) : 별칭으로 조회 하기 ", () => {
                var view1 = new MetaView('T1');
                view1.columns.addValue('c1', 'V1');
                view1.columns.addValue('c2', 'V2');
                view1.columns['c1'].alias = 'a1';
                view1.columns['c2'].alias = 'a2';
        
                expect(view1.columns.count).toBe(2);
                expect(view1.columns['c1'].alias).toBe('a1');
                expect(view1.columns['c2'].alias).toBe('a2');
                expect(view1.columns.existAlias('a1')).toBe(true);
                expect(view1.columns.existAlias('a2')).toBe(true);
                expect(view1.columns.existAlias('a3')).toBe(false);
                
                expect(view1.columns['c1'] === view1.columns.alias('a1')).toBe(true);
                expect(view1.columns['c2'] === view1.columns.alias('a2')).toBe(true)

            });
        });
        describe("예외, COVER ", () => {
            it("- 강제로  addValue() 제거  ", () => {
                class TempCollection extends BaseColumnCollection {
                    constructor(p_owner){
                        super(p_owner, MetaColumn) 
                    }
                }
                var temp1  = new TempCollection();

                expect(()=> temp1.addValue('c1', 'V1')).toThrow(/EL05147/)
            });
            it("- _baseType 설정 : 예외  ", () => {
                const t1 = new MetaTable('T1');

                expect(()=> t1.columns._baseType = 10).toThrow(/EL05141/)
                expect(()=> t1.columns._baseType = MetaElement).toThrow(/EL05142/)
            });
        });

    });
    describe("MetaTableColumnCollection :: 클래스", () => {
        describe("BaseColumnCollection.removeAt(idx) <컬럼 삭제>", () => {
            it("- removeAt(name) : 아이템명으로 삭제 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('c1');
                table1.columns.add('c2');
                table1.columns.removeAt(1)

                expect(table1.columns.count).toBe(1);
            });
            it("- removeAt(name) : 예외 <rows 존재시> ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('c1');
                table1.columns.add('c2');
                table1.rows.add(table1.newRow());

                expect(table1.columns.count).toBe(2);
                expect(table1.rows.count).toBe(1);
                expect(()=>table1.columns.removeAt(1)).toThrow(/EL05146/)
            });
        });
        describe("BaseColumnCollection.addValue(name, value) <이름과 값으로 컬럼 추가>", () => {
            it("- addValue(value, value) : 아이템명 + 값 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.addValue('c1', 'V1');
                table1.columns.addValue('c2', 'V2');
        
                expect(table1.columns.count).toBe(2);
                var aa = table1.columns['c1'].value
                expect(table1.columns['c1'].value).toBe('V1');
                expect(table1.columns['c2'].value).toBe('V2');
            });
            it("- addValue(?, ?) : 예외 ", () => {
                var table1 = new MetaTable('T1');

                expect(() => table1.columns.addValue('c1', {})).toThrow(/EL0130B/);
                expect(() => table1.columns.addValue('c1', /reg/)).toThrow(/EL0130B/);
                expect(()=> table1.columns.addValue(10)).toThrow(/EL05152/)
                expect(()=> table1.columns.addValue({})).toThrow(/EL05152/)
            });
        });
        describe("MetaTableColumnCollection.add(name | column) <컬럼 추가>", () => {
            it("- add(name) : 아이템명으로 추가 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('c1');
                table1.columns.add('c2');
    
                expect(table1.columns.count).toBe(2);
            });
            it("- add(name) : MetaTableColumnCollection 에서 추가  ", () => {
                var extColumns = new MetaTableColumnCollection();
                extColumns.add('c1');
                extColumns.add(new MetaColumn('c2'));
    
                expect(extColumns.count).toBe(2);
                expect(extColumns.c1 instanceof MetaColumn).toBe(true);
                expect(extColumns.c1._entity).toBe(null);
                expect(extColumns.c2._entity).toBe(null);
            });
            it("- add(item) : 아이템 객체로 추가 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add(new MetaColumn('c1'));
                table1.columns.add('c2');
                table1.columns['c2'].caption = 'C1';
                var table2 = new MetaTable('T2');
                table2.columns.add(table1.columns['c2']);
                table1.columns['c2'].caption = 'C2';
    
                // table1
                expect(table1.columns.count).toBe(2);
                expect(table1.columns['c2'].caption).toBe('C2');
                expect(table1.columns['c2']._entity.tableName).toBe('T1');
                // table2
                expect(table2.columns.count).toBe(1);
                expect(table2.columns['c2'].caption).toBe('C1');
                expect(table2.columns['c2']._entity.tableName).toBe('T2');
            });
            it("- add(name) : 로우 존재시 컬럼 추가/제거 예외 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('c1');
                table1.columns.add('c2');
                var row1 = table1.newRow();
                row1['c1'] = 'R1';
                row1['c2'] = 'R2';
                table1.rows.add(row1);

                expect(() => table1.columns.add('c3')).toThrow(/EL05143/);
                expect(() => table1.columns.removeAt(0) ).toThrow(/EL05146/);
                expect(() => table1.columns.remove(table1.columns['c2'])).toThrow(/EL05146/);
            });
            it("- add(?) : 예외 ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('aa');

                expect(() => table1.columns['aa'] = 10).toThrow(/EL05148/);
                expect(() => table1.columns.add(1)).toThrow(/EL05151/);
                expect(() => table1.columns.add({})).toThrow(/EL05151/);
                expect(() => table1.columns.add(/err/)).toThrow(/EL05151/);
            });
            it("- add(?) : 예외 <별칭과 중복> ", () => {
                var table1 = new MetaTable('T1');
                table1.columns.add('c1');
                table1.columns.add('c2');
                table1.columns['c2'].alias = 'cc2'

                expect(() => table1.columns.add('cc2')).toThrow(/EL05145/);
                expect(() => table1.columns.add('')).toThrow(/EL03122/);
            });

        });
        describe("for in 열거 속성 검사", () => {
            it("- for in", () => {
                var arr = [];
                var table1 = new MetaTable('T1');
                table1.columns.add('c1');
                for (var prop in table1.columns) {
                    arr.push(prop);
                }
            
                expect(arr.length).toBe(1);
            });
        });

    });
    describe("MetaViewColumnCollection :: 테이블", () => {
        describe("BaseColumnCollection.addValue(name, value) <이름과 값으로 컬럼 추가>", () => {
            it("- addValue(name, value) : 아이템명 + 값 ", () => {
                var view1 = new MetaView('T1');        // 독립형 생성
                var view2 = new MetaView('T2', view1);    // 참조형 생성
                var view3 = new MetaView('T3');      // 독립형 생성
                view1.columns.add('c1');                   // 아이템 추가
                view1.columns.add('c2');
                view1.columns.addValue('c3', 'V3');
                view1.columns['c1'].caption = 'C1';
                view1.columns['c2'].caption = 'C2';
                view2.columns.add(view1.columns['c1']);         // 중복 삽입 : 기존값 리턴
                view2.columns.add('c2');                     // 중복 삽입 : 기존값 리턴
                view2.columns.add('c3');                      
                view2.columns.add('c4', view3.columns);      // 참조형에 참조컬렉션 지정
                view2.columns['c3'].caption = 'C3';       // 참조에 속성 덮어씀
                view2.columns['c4'].caption = 'C4';
    
                // view1
                expect(view1.viewName).toBe('T1');
                expect(view1.columns.count).toBe(3);
                expect(view1.columns['c1'].caption).toBe('C1');
                expect(view1.columns['c2'].caption).toBe('C2');
                expect(view1.columns['c3'].caption).toBe('C3');
                expect(view1.columns['c3'].value).toBe('V3');
                // view2
                expect(view2.viewName).toBe('T2');
                expect(view2.columns.count).toBe(4);
                expect(view2.columns['c1'].caption).toBe('C1');
                expect(view2.columns['c2'].caption).toBe('C2');
                expect(view2.columns['c3'].caption).toBe('C3');
                expect(view1.columns['c3'].value).toBe('V3');
                // view3
                expect(view3.viewName).toBe('T3');
                expect(view3.columns.count).toBe(1);
                expect(view3.columns['c4'].caption).toBe('C4');
                // view1 기준 비교
                expect(view1.columns['c1']).toEqual(view2.columns['c1']);
                expect(view1.columns['c2']).toEqual(view2.columns['c2']);
                expect(view1.columns['c3']).toEqual(view2.columns['c3']);
                // view2 기준 비교
                expect(view2.columns['c1']).toEqual(view1.columns['c1']);
                expect(view2.columns['c2']).toEqual(view1.columns['c2']);
                expect(view2.columns['c3']).toEqual(view1.columns['c3']);
                expect(view2.columns['c4']).toEqual(view3.columns['c4']);
                // view3 기준 비교
                expect(view3.columns['c4']).toEqual(view2.columns['c4']);
            });
            it("- addValue() : 켈렉션 교체로, 타입 제한 해지 ", () => {
                class SubColumn extends BaseColumn {
                    constructor(name, entity, prop) {
                        super(name, entity);
                        if (prop && prop['value']) this.value = prop['value']
                    }
                }
                SubColumn._VALUE_TYPE = [];
                var view1 = new MetaView('T1');
                // var arr = Util.getTypes(SubColumn);
                view1.columns._baseType = SubColumn;
                view1.columns.addValue('c1', /reg/)
                view1.columns.addValue('c2', {})
                
                expect(view1.columns['c1'].value).toEqual(/reg/)
                expect(view1.columns['c2'].value).toEqual({})
            });
            it("- addValue(?, ?) : 예외 ", () => {
                var view1 = new MetaView('T1');

                expect(()=> view1.columns.addValue('c2', {})).toThrow(/EL0130B/)
                expect(()=> view1.columns.addValue('c2', /reg/)).toThrow(/EL0130B/)
                expect(()=> view1.columns.addValue(10, 10)).toThrow(/EL05163/)
            });
        });
        describe("MetaViewColumnCollection.add(name, baseCollection) <컬럼 추가>", () => {
            it("- add(name) : 추가 ", () => {
                var view1 = new MetaView('T1');        // 독립형 생성
                view1.columns.add('c1');                   // 아이템 추가
                view1.columns.add('c2');
                view1.columns['c2'].caption = 'C1';
                var view2 = new MetaView('T2');       // 독립형 생성
                view2.columns.add(view1.columns['c1']);      // 참조 아이템 추가
                view2.columns.add('c2');                  
                view2.columns.add('c3', view1.columns);      // 컬렉션 지정 추가
                view2.columns['c1'].value = 'V1';
                view2.columns['c2'].caption = 'C2';
                view2.columns['c3'].caption = 'C3';
    
                // view1
                expect(view1.viewName).toBe('T1');
                expect(view1.columns.count).toBe(3);
                expect(view1.columns['c1'].value).toBe('V1');
                expect(view1.columns['c2'].caption).toBe('C1');
                expect(view1.columns['c3'].caption).toBe('C3');
                // view2
                expect(view2.viewName).toBe('T2');
                expect(view2.columns.count).toBe(3);
                expect(view2.columns['c1'].value).toBe('V1');
                expect(view2.columns['c2'].caption).toBe('C2');
                expect(view2.columns['c3'].caption).toBe('C3');
            });
            it("- add(name, baseCollection) : 추가 ", () => {
                var t1 = new MetaTable('T1');
                var v1 = new MetaView('V1');
                v1.columns.add('aa', t1.columns);
                v1.columns.add('bb');

                expect(v1.columns.count).toBe(2);
                expect(t1.columns.count).toBe(1);
            });
            it("- add(name, baseCollection) : baseEntity 설정된 MetaView에 추가 ", () => {
                var t1 = new MetaTable('T1');
                var t2 = new MetaTable('T2');
                var v1 = new MetaView('V1');
                v1._baseEntity = t1;
                v1.columns.add('aa');
                v1.columns.add('bb');
                v1.columns.add('cc', t2.columns);

                expect(v1.columns.count).toBe(3);
                expect(t1.columns.count).toBe(2);
                expect(t2.columns.count).toBe(1);
            });            
            it("- add(name, baseCollection) : baseEntity 설정된 뷰에 추가 ", () => {
                var t1 = new MetaTable('T1');
                var t2 = new MetaTable('T2');
                var v1 = new MetaView('V1');
                var v2 = new MetaView('V2');
                v1._baseEntity = t1;
                v2._baseEntity = v1;
                v2.columns.add('aa');
                v2.columns.add('bb');
                v2.columns.add('cc', t2.columns);

                expect(t1.columns.count).toBe(2);
                expect(t2.columns.count).toBe(1);
                expect(v1.columns.count).toBe(2);
                expect(v2.columns.count).toBe(3);
            });

            it("- add(?, ?) : 예외 ", () => {
                var view1 = new MetaView('T1');

                expect(()=> view1.columns.add('c2', {})).toThrow(/EL05161/)
                expect(()=> view1.columns.add('c2', 10)).toThrow(/EL05161/)
                expect(()=> view1.columns.add(10)).toThrow(/EL05162/)
                expect(()=> view1.columns.add({})).toThrow(/EL05162/)
            });
        });

        describe("MetaViewColumnCollection.addEntity(entity) <엔티티의 전체 컬럼 추가>", () => {
            it("- addEntity(entity) : 엔티티의 컬렉션 모두 추가 ", () => {
                var view1 = new MetaView('T1');
                var view2 = new MetaView('T2');
                view1.columns.addValue('c1', 'V1');
                view1.columns.addValue('c2', 'V2');
                view2.columns.addEntity(view1);
        
                // view1
                expect(view1.viewName).toBe('T1');
                expect(view1.columns.count).toBe(2);
                expect(view1.columns['c1'].value).toBe('V1');
                expect(view1.columns['c2'].value).toBe('V2');
                // view2
                expect(view2.viewName).toBe('T2');
                expect(view2.columns.count).toBe(2);
                expect(view2.columns['c1'].value).toBe('V1');
                expect(view2.columns['c2'].value).toBe('V2');
                // 비교
                expect(view1.columns['c1']).toEqual(view2.columns['c1']);
                expect(view1.columns['c2']).toEqual(view2.columns['c2']);
                expect(view1.columns !== view2.columns).toBe(true);
            });
            it("- addEntity(?) : 예외, COVER ", () => {
                var view1 = new MetaView('T1');
                view1.columns.add('c1');
                view1.columns.add('c2');
                view1.columns['c1'].alias = 'cc1'
                
                expect(()=> view1.columns['c2'].columnName = 'cc1').toThrow(/EL05114/)
                expect(()=> view1.columns['c1'].columnName = 10).toThrow(/EL05112/)
                expect(()=> view1.columns['c1'].columnName = {}).toThrow(/EL05112/)
                expect(()=> view1.columns['c1'].alias = 10).toThrow(/EL05115/)
                expect(()=> view1.columns['c1'].alias = {}).toThrow(/EL05115/)
                expect(()=> view1.columns['c1'].caption = 10).toThrow(/EL05117/)
                expect(()=> view1.columns['c1'].caption = {}).toThrow(/EL05117/)
                expect(()=> view1.columns['c1'].required = 10).toThrow(/EL05131/)
                expect(()=> view1.columns['c1'].required = {}).toThrow(/EL05131/)
                // expect(()=> view1.columns['c1'].optional = 10).toThrow(/EL05132/)
                // expect(()=> view1.columns['c1'].optional = {}).toThrow(/EL05132/)
                expect(()=> view1.columns['c1'].getter = 10).toThrow(/EL05134/)
                expect(()=> view1.columns['c1'].getter = {}).toThrow(/EL05134/)
                expect(()=> view1.columns['c1'].setter = 10).toThrow(/EL05135/)
                expect(()=> view1.columns['c1'].setter = {}).toThrow(/EL05135/)
                expect(()=> view1.columns.addEntity(10)).toThrow(/EL05164/)
                expect(()=> view1.columns.addEntity({})).toThrow(/EL05164/)
            });
        });
        describe("for in 열거 속성 검사", () => {
            it("- for in", () => {
                var arr = [];
                var view1 = new MetaView('T1');
                view1.columns.add('c1');
                for (var prop in view1.columns) {
                    arr.push(prop);
                }
            
                expect(arr.length).toBe(1);
            });
        });

    });


});


// describe("< setValue(row) >", () => {
//     it("-  ", () => {
        
//     });
// });

