/**
 * ES6 + CJS + JEST
 */
//==============================================================
// gobal defined
// 'use strict';

import { jest } from '@jest/globals';

import {MetaObject}             from 'logic-core';
import {MetaElement}            from 'logic-core';
import {BaseEntity}             from '../src/base-entity';
import {IObject}                from 'logic-core';
import {IMarshal}               from 'logic-core';
import {Util}                   from 'logic-core';
import { MetaTable }            from '../src/meta-table';
import { MetaView }             from '../src/meta-view';
import { MetaRow }              from '../src/meta-row';
import { BaseColumn }           from '../src/base-column';
import { MetaColumn }           from '../src/meta-column';
import { Message }              from '../src/message-wrap';

//==============================================================
// test
describe("[target: meta-column.js ]", () => {
    beforeAll(() => {
        // jest.resetModules();
    });
    describe("MetaColumn :: 클래스", () => {
        describe("MetaColumn.columnName", () => {
            it("- this.columnName : 컬럼명 변경시 메타명 변경 ", () => {
                var item1 = new MetaColumn('c1');
                
                expect(item1.columnName).toBe('c1');
                expect(item1._name).toBe('c1');
                // 변경
                item1.columnName = 'ii1';
                expect(item1.columnName).toBe('ii1');
                expect(item1._name).toBe('ii1');
            });
        });
        describe("MetaColumn() <생성자>", () => {
            it("- new MetaColumn(name, null, property) : 생성시 속성 설정 ", () => {
                var item1 = new MetaColumn('c1', null, {
                    // type: 'text',
                    // size: 100,
                    default: 'D1',
                    caption: 'C1',
                    required: true,
                    constraints: [
                        { regex: /\D/, msg: 'message', code: 'C1', return: true },         // true : 충족조건
                        { regex: /[0-9]{5}/, msg: 'message', code: 'C2', return: false }   // false : 통과조건
                    ],   
                    // order: 1000,
                    // increase: 10,
                    value: 'V1'
                });
        
                // expect(item1.type).toBe('text');
                // expect(item1.size).toBe(100);
                expect(item1.default).toBe('D1');
                expect(item1.caption).toBe('C1');
                expect(item1.required).toBe(true);
                expect(item1.constraints.length).toBe(2);
                // expect(item1.order).toBe(1000);
                // expect(item1.increase).toBe(10);
                expect(item1.value).toBe('V1');
            });
            it("- new MetaColumn(name, null, ) : 생성시 value 등록 ", () => {
                var c1 = new MetaColumn('c1', null, 1);
                var c2 = new MetaColumn('c2', null, 'str');
                var c3 = new MetaColumn('c2', null, true);

                expect(c1.value).toBe(1);
                expect(c2.value).toBe('str');
                expect(c3.value).toBe(true);
            });
        });
        describe("MetaObject.getTypes() : arr<fun> <타입 얻기>", () => {
            it("- getTypes() : array<function> ", () => {
                const c = new MetaColumn('C1');
                const types = c.getTypes();
        
                expect(types[0]).toBe(MetaColumn);
                expect(types[1]).toBe(BaseColumn);
                expect(types[2]).toBe(MetaElement);
                expect(types[3]).toBe(MetaObject);
                expect(types[4]).toBe(Object);
                expect(types.length).toBe(5);
            });
            // it("- getTypeNames() : array<string> ", () => {
            //     const c = new MetaColumn();
            //     const typeNames = c.getTypeNames();
        
            //     expect(typeNames[0]).toBe('Object');
            //     expect(typeNames[1]).toBe('MetaObject');
            //     expect(typeNames[2]).toBe('MetaElement');
            //     expect(typeNames[3]).toBe('MetaColumn');
            //     expect(typeNames.length).toBe(4);
            // });
        });
        describe("MetaObject.instanceOf(str | fun) : arr<fun> <인스턴스 유무 검사>", () => {
            it("- instanceOf(string) : 상위 함수(클래스, 인터페이스) 검사 ", () => {
                const c = new MetaColumn('C');
        
                expect(c.instanceOf('IObject')).toBe(true);
                expect(c.instanceOf('IMarshal')).toBe(true);
                expect(c.instanceOf('Object')).toBe(true);
                expect(c.instanceOf('MetaObject')).toBe(true);
                expect(c.instanceOf('MetaElement')).toBe(true);
                expect(c.instanceOf('BaseColumn')).toBe(true);
                expect(c.instanceOf('MetaColumn')).toBe(true);
                // false
                expect(c.instanceOf('Array')).toBe(false);
                expect(c.instanceOf('String')).toBe(false);
            });
            it("- instanceOf(function) : 상위 함수(클래스, 인터페이스) 검사 ", () => {
                const c = new MetaColumn('C1');
        
                expect(c.instanceOf(IObject)).toBe(true);
                expect(c.instanceOf(IMarshal)).toBe(true);
                expect(c.instanceOf(Object)).toBe(true);
                expect(c.instanceOf(MetaObject)).toBe(true);
                expect(c.instanceOf(MetaElement)).toBe(true);
                expect(c.instanceOf(BaseColumn)).toBe(true);
                expect(c.instanceOf(MetaColumn)).toBe(true);
                // false
                expect(c.instanceOf(Array)).toBe(false);
                expect(c.instanceOf(String)).toBe(false);
            });
        });
        describe("this.onChanged <변경후 이벤트>", () => {
            it("- onChanged : 변경 이벤트 ", () => {
                var item1 = new MetaColumn('c1');
                var evt;
                item1.onChanged = function(val) {evt = val};
                item1.value = 10;
        
                expect(item1.value).toBe(10);
                expect(evt).toBe(10);
                
            });
        });
        describe("this.addConstraint(regexp, msg, code, return) <제약조건 등록>", () => {
            it("- addConstraint(regexp, msg, code, return) : 제약조건 등록 ", () => {   // REVIEW: 검사해야함
                var item1 = new MetaColumn('c1');
                item1.addConstraint(/10/, '10 시작...', 100, true);
                item1.addConstraint(/[0-9]{5}/, '5자리 이하만...', 200, false);
                item1.addConstraint(/\D/, '5자리 이하만...', 300);   // return 기본값 = false
        
                expect(item1.constraints.length).toBe(3);
                expect(item1.constraints[0].code).toBe(100);
                expect(item1.constraints[1].code).toBe(200);
                expect(item1.constraints[2].code).toBe(300);
            });
        });
        describe("this.getter <value 겟터>", () => {
            it("- getter : value getter 만 설정 ", () => {
                var item1 = new MetaColumn('c1');
                var item_value = 10;
                item1.value = 'V1';
                item1.getter = function() { return item_value; };
        
                expect(item1.value).toBe(10);
            });
        });
        describe("this.setter <value 셋터>", () => {
            it("- setter : value setter 만 등록 ", () => {
                var item1 = new MetaColumn('c1');
                var item_value = 10;
                item1.value = 'V1';
                item1.setter = function(val) { item_value = val; };
                item1.value = 'V11';
        
                expect(item1.value).toBe('V11');
                expect(item_value).toBe('V11');
            });
            it("- setter : 내부값과 와부값이 다른 경우 ", () => {
                var item1 = new MetaColumn('c1');
                var item_value = 10;
                item1.value = 'V1';
                item1.setter = function(val) { item_value = val + 'R'; };
                item1.value = 'V11';
        
                expect(item1.value).toBe('V11');
                expect(item_value).toBe('V11R');
            });
            it("- setter : 리턴이 있는 경우 ", () => {
                var item1 = new MetaColumn('c1');
                var item_value = 10;
                item1.value = 'V1';
                item1.setter = function(val) { return item_value = val + 'R'; };
                item1.value = 'V11';
                
                expect(item1.value).toBe('V11R');
                expect(item_value).toBe('V11R');
            });
        });
        describe("this.geter/setter <value 갯터/셋터>", () => {
            it("- getter/setter ", () => {
                var item1 = new MetaColumn('c1');
                var item_value = 10;
                item1.val = 'V1';
                item1.getter = function() { return item_value; }
                item1.setter = function(val) { item_value = val; };
                item1.val = 'V11';
        
                expect(item1.val).toBe('V11');
                expect(item_value).toBe('V11');
            });
        });
        
        
        describe("MetaObject.equal() <객체 비교>", () => {
            it("- equal() : $event ", () => {
                var c1 = new MetaColumn('C1');
                var c2 = new MetaColumn('C1');
                var fun1 = function(){return 'Fun1'};

                expect(c1.equal(c2)).toBe(true);
                c1.onChanged = fun1;
                expect(c1.equal(c2)).toBe(false);
            });
            it("- equal() : 각각 생성 비교 ", () => {
                var c1 = new MetaColumn('C1');
                var c2 = new MetaColumn('C1');

                expect(c1.equal(c2)).toBe(true);
            });
            it("- equal() : 각각 테이블에서 생성 비교 ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T1');
                table1.columns.addValue('c1', 'V1');
                table2.columns.addValue('c1', 'V1');
                const c1 = table1.columns['c1'];
                const c2 = table1.columns['c1'];

                expect(c1.equal(c2)).toBe(true);
            });
            it("- equal() : 각각 테이블에서 생성 비교 ", () => {
                var table1 = new MetaTable('T1');
                var table2 = new MetaTable('T2');   // 테이블명 다름
                var table3 = new MetaTable('T1');   // row 추가
                var table4 = new MetaTable('T1');
                table1.columns.addValue('c1', 'V1');
                table2.columns.addValue('c1', 'V1');
                table3.columns.addValue('c1', 'V1');
                table4.columns.addValue('c1', 'V1');
                table3.rows.add(table3.newRow()); 
                const c1 = table1.columns['c1'];
                const c2 = table2.columns['c1'];
                const c3 = table3.columns['c1'];
                const c4 = table3.columns['c1'];

                expect(c1.equal(c2)).toBe(true);
                expect(c1.equal(c3)).toBe(true);
                // 테이블 비교
                expect(table1.equal(table2)).toBe(false);
                expect(table1.equal(table3)).toBe(false);
                expect(table1.equal(table4)).toBe(true);
                
            });
            it("- equal() : 속성들 비교 ", () => {
                var prop1 = {
                    default: 'D1',
                    caption: 'C1',
                    required: true,
                    constraints: [
                        { regex: /\D/, msg: 'message', code: 'C1', return: true },
                    ],   
                    value: 'V1'
                };
                var prop2 = {   // default 빠짐
                    caption: 'C1',
                    required: true,
                    constraints: [
                        { regex: /\D/, msg: 'message', code: 'C1', return: true },
                    ],   
                    value: 'V1'
                };
                var prop3 = {   // caption 빠짐
                    default: 'D1',
                    required: true,
                    constraints: [
                        { regex: /\D/, msg: 'message', code: 'C1', return: true },
                    ],   
                    value: 'V1'
                };
                var prop4 = {   // required 빠짐
                    default: 'D1',
                    caption: 'C1',
                    constraints: [
                        { regex: /\D/, msg: 'message', code: 'C1', return: true },
                    ],   
                    value: 'V1'
                };
                var prop5 = {   // constraints 대문자
                    default: 'D1',
                    caption: 'C1',
                    required: true,
                    constraints: [
                        { regex: /\D/, msg: 'MESSAGE', code: 'C1', return: true },  // 다른 위치
                    ],   
                    value: 'V1'
                };
                var prop6 = {   // value 빠짐
                    default: 'D1',
                    caption: 'C1',
                    required: true,
                    constraints: [
                        { regex: /\D/, msg: 'message', code: 'C1', return: true },
                    ],   
                };

                var c1 = new MetaColumn('C1', null, prop1);
                var c2 = new MetaColumn('C1',null, prop1);
                var c3 = new MetaColumn('C1',null, prop2);
                var c4 = new MetaColumn('C1',null, prop3);
                var c5 = new MetaColumn('C1',null, prop4);
                var c6 = new MetaColumn('C1',null, prop5);
                var c7 = new MetaColumn('C1',null, prop6);

                expect(c1.equal(c2)).toBe(true);
                expect(c1.equal(c3)).toBe(false);
                expect(c1.equal(c4)).toBe(false);
                expect(c1.equal(c5)).toBe(false);
                expect(c1.equal(c6)).toBe(false);
                expect(c1.equal(c7)).toBe(false);
            });
            it("- equal() : setter 로 비교 ", () => {
                var c1 = new MetaColumn('C1');
                var c2 = new MetaColumn('C1');
                var c3 = new MetaColumn('C1');
                var c4 = new MetaColumn('C1');
                var c5 = new MetaColumn('C1');
                var fun1 = function() {return 1};
                var fun2 = function() {return 1};   // fun1 내용은 같음, 주소는 다름
                var fun3 = function() {return 2};   // 내용 다름
                c1.setter = fun1;
                c2.setter = fun1;
                c3.setter = fun2;
                c4.setter = fun3;

                expect(c1.equal(c2)).toBe(true);
                expect(c1.equal(c3)).toBe(true);
                expect(c1.equal(c4)).toBe(false);
            });
            it("- equal() : getter 로 비교 ", () => {
                var c1 = new MetaColumn('C1');
                var c2 = new MetaColumn('C1');
                var c3 = new MetaColumn('C1');
                var c4 = new MetaColumn('C1');
                var c5 = new MetaColumn('C1');
                var fun1 = function() {return 1};
                var fun2 = function() {return 1};   // fun1 내용은 같음, 주소는 다름
                var fun3 = function() {return 2};   // 내용 다름
                c1.getter = fun1;
                c2.getter = fun1;
                c3.getter = fun2;
                c4.getter = fun3;

                expect(c1.equal(c2)).toBe(true);
                expect(c1.equal(c3)).toBe(true);
                expect(c1.equal(c4)).toBe(false);
            });
        });
        describe("MetaColumn.MetaColumn(): obj<Guid> <객체 얻기>", () => {
            it("- getObject(1 | 2) : 직렬화 객체 얻기 ", () => {
                const prop1 = {
                    default: 'D1',
                    caption: 'C1',
                    required: true,
                    constraints: [
                        { regex: /\D/, msg: 'message', code: 'C1', return: true },
                    ],   
                    value: 'V1'
                };
                const c1 = new MetaColumn('c1', null, prop1);
                const obj1 = c1.getObject();
                const obj2 = c1.getObject(1);

                expect(obj1).toEqual(obj2);
                expect(obj1._guid).toBe(c1._guid);
                expect(obj1._type).toBe('Meta.Entity.MetaColumn');
                expect(obj1.caption).toBe('C1');
                expect(obj1.columnName).toBe('c1');
                expect(obj1.constraints).toEqual(prop1.constraints);
                expect(obj1.default).toBe('D1');
                expect(obj1.required).toBe(true);
                expect(obj1.name).toBe('c1');
                expect(obj1.$value).toBe('V1');
                expect(obj1._entity).toBe(undefined);
                /**
                 * MEMO:
                 * - 컬럼 getObject() 객체 확인
                 * - 참조가 없으면, getObject(1) 과 동일 확임
                 */
            });
            it("- getObject(1 | 2) : 직렬화 객체 얻기, 엔티티 참조 ", () => {
                const t1 = new MetaTable('T1')
                const prop1 = {
                    default: 'D1',
                    caption: 'C1',
                    required: true,
                    constraints: [
                        { regex: /\D/, msg: 'message', code: 'C1', return: true },
                    ],   
                    value: 'V1'
                };
                const c1 = new MetaColumn('c1', t1, prop1);
                const obj1 = c1.getObject();
                const obj2 = c1.getObject(1);

                expect(obj1).toEqual(obj2);
                expect(obj1._guid).toBe(c1._guid);
                expect(obj1._type).toBe('Meta.Entity.MetaColumn');
                expect(obj1.caption).toBe('C1');
                expect(obj1.columnName).toBe('c1');
                expect(obj1.constraints).toEqual(prop1.constraints);
                expect(obj1.default).toBe('D1');
                expect(obj1.required).toBe(true);
                expect(obj1.name).toBe('c1');
                expect(obj1.$value).toBe('V1');
                expect(obj1._entity.$ref).toBe(t1._guid);
                /**
                 * MEMO:
                 * - entity 참조가 있어도 getObject(0), getObject(1) 은 동일함
                 */
            });
            it("- getObject(2) : 직렬화 객체 얻기, 엔티티 참조 ", () => {
                const t1 = new MetaTable('T1')
                const prop1 = {
                    default: 'D1',
                    caption: 'C1',
                    required: true,
                    constraints: [
                        { regex: /\D/, msg: 'message', code: 'C1', return: true },
                    ],   
                    value: 'V1'
                };
                const c1 = new MetaColumn('c1', t1, prop1);
                const obj1 = c1.getObject(2);

                expect(obj1._type).toBe('Meta.Entity.MetaColumn');
                expect(obj1.caption).toBe('C1');
                expect(obj1.columnName).toBe('c1');
                expect(obj1.constraints).toEqual(prop1.constraints);
                expect(obj1.default).toBe('D1');
                expect(obj1.required).toBe(true);
                expect(obj1.name).toBe('c1');
                expect(obj1.$value).toBe('V1');
                /**
                 * MEMO:
                 * - _entity, _guid 가 없는 개체 확인
                 */
            });
        });
        describe("MetaColumn.setObject(mObj) <객체 설정>", () => {
            it("- setObject() : 직렬화 객체 설정 ", () => {
                const t1 = new MetaTable('T1')
                const fun1 = function() { /** */}
                const fun2 = function() { /** */}
                const prop1 = {
                    default: 'D1',
                    caption: 'C1',
                    alias: 'cc1',
                    required: true,
                    constraints: [
                        { regex: /\D/, msg: 'message', code: 'C1', return: true },
                    ],   
                    value: 'V1',
                    getter: fun1,
                    setter: fun2,
                };
                const c1 = new MetaColumn('c1', null, prop1);
                var aa = c1.$value;
                const c2 = new MetaColumn('c2', t1, prop1);
                const fun3 = function(){return 'F1'}
                c1.onChanged = fun3;
                const obj1 = c1.getObject();
                const obj2 = c2.getObject();    // 엔티티 존재함
                const cc1 = new MetaColumn('CC2');
                const cc2 = new MetaColumn('CC2');
                cc1.setObject(obj1);

                expect(()=>cc2.setObject(obj2)).toThrow(/EL05118/);
                expect(cc1.equal(c1)).toBe(true);
                expect(cc1._type).toBe(c1._type);
                expect(cc1.caption).toBe(c1.caption);
                expect(cc1.alias).toBe(c1.alias);
                expect(cc1.columnName).toBe(c1.columnName);
                expect(cc1.constraints).toEqual(c1.constraints);
                expect(cc1.default).toBe(c1.default);
                expect(cc1.required).toBe(c1.required);
                // expect(cc1.optional).toBe(c1.optional);
                expect(cc1.name).toBe(c1.name);
                expect(cc1.value).toBe(c1.value);
                expect(cc1.getter).toBe(c1.getter);
                expect(cc1.setter).toBe(c1.setter);
                expect(cc1.$event.$storage.onChanged).toBeDefined()
                /**
                 * MEMO:
                 * - equal() 및 세부 내용 확인
                 * - 참조가 있는 column 예외 확인
                 */
            });
        });

        describe("MetaColumn.clone() <복제>", () => {
            it("- clone() : 복제 ", () => {
                var table = new MetaTable('T1');
                var fun1 = function() {return 'F1'}
                var fun2 = function() {return 'F2'}
                var item1 = new MetaColumn('c1', table, {
                    // type: 'text',
                    // size: 100,
                    default: 'D1',
                    caption: 'C1',
                    required: true,
                    // optional: true,
                    constraints: [
                        { regex: /\D/, msg: 'message', code: 'C1', return: true },         // true : 충족조건
                        { regex: /[0-9]{5}/, msg: 'message', code: 'C2', return: false }   // false : 통과조건
                    ],   
                    // order: 1000,
                    // increase: 10,
                    value: 'V1',
                    getter: fun1,
                    setter: fun2,
                });            
                var item2 = item1.clone();
        
                // item1
                expect(item1._entity.tableName).toBe('T1');
                expect(item1.default).toBe('D1');
                expect(item1.caption).toBe('C1');
                expect(item1.required).toBe(true);
                // expect(item1.optional).toBe(false);
                expect(item1.constraints.length).toBe(2);
                expect(item1.value).toBe('F1');
                // item2
                expect(item2._entity.tableName).toBe('T1');
                expect(item2.default).toBe('D1');
                expect(item2.caption).toBe('C1');
                expect(item2.required).toBe(true);
                expect(item2.constraints.length).toBe(2);
                expect(item2.value).toBe('F1');
                expect(item2.getter).toBe(fun1);
                expect(item2.setter).toBe(fun2);
                // 비교
                expect(item1 === item2).toBe(false);
                expect(item1.equal(item2)).toBe(true);
            });
        });
        describe("MetaColumn.addContraint(regex, msg, code, condition) <제약조건 추가>", () => {
            it("- addContraint(value, mss, code) : 제약조건 추가 ", () => {
                var c1 = new MetaColumn('c1');
                c1.addConstraint(/10/, '10 시작...', 100, true);
                c1.addConstraint(/[0-9]{5}/, '5자리 이하만...', 200, false);
                c1.addConstraint(/\D/, '숫자만...', 300);   // return 기본값 = false
        
                expect(c1.constraints.length).toBe(3);
                c1.constraints = {regex:/10/, msg: 'sss'};
                expect(c1.constraints.length).toBe(1);
                expect(()=> c1.constraints = {reg:/10/, msg: 'sss'}).toThrow(/EL05133/);
                expect(()=> c1.addConstraint('str', 'sss')).toThrow(/EL05136/);
                expect(()=> c1.addConstraint(/reg/,  10)).toThrow(/EL05137/);

                /**
                 * MEMO:
                 * - addContraint() 통해서 추가하면 추가되고, constraints 직접 설정하면 갱신한다(기존 지워짐).
                 * - 잘못된 필수 속성 없을시 예외 확인
                 */
            });
        });

        describe("MetaColumn.valid(value) <제약조건 검사>", () => {
            it("- valid(value): return  <제약조건 검사> ", () => {     // REVIEW: r_result => 존재시 object 이어야함, 검사 추가
                var item1 = new MetaColumn('c1');
                item1.required = true;

                item1.addConstraint(/10/, '10 시작...', 'C100', true);            // 매칭
                item1.addConstraint(/[0-9]{5}/, '5자리 이하만...', 'C200', false);  // 미매칭
                item1.addConstraint(/\D/, '숫자가 아님...', 'C300', false);
                // true
                expect(item1.valid('10')).toBe(undefined);
                expect(item1.valid('1000')).toBe(undefined);
                // false
                expect(item1.valid('')).toBeDefined();        // 실패 : 10로 시작을 안해서
                expect(item1.valid('10000')).toBeDefined();   // 실패 : 5자리 이상
                expect(item1.valid('100a')).toBeDefined();    // 실패 : 문자가 들어가서
            });
            it("- valid(value) : required 여부 ", () => {
                var item1 = new MetaColumn('c1');
                item1.required = false;
                var item2 = new MetaColumn('c2');
                item2.required = true;     // 공백허용 안함
                var result1 = {};
                var result2 = {};
        
                expect(item1.valid('')).not.toBeDefined();
                expect(item2.valid('')).toBeDefined();
            });
            it("- valid(value) : required ", () => {
                var item1 = new MetaColumn('c1');
                item1.required      = false;
                // item1.optional     = true;
                var item2 = new MetaColumn('c2');
                item2.required     = true;     // 공백 불가
                // item2.optional    = true;     
                var result1 = {};
                var result2 = {};
        
                expect(item1.valid('')).toBe(undefined);
                expect(item2.valid('')).toBeDefined();
            });
            it("- valid(value) : required ", () => {
                var item1 = new MetaColumn('c1');
                item1.required = false;
                var result;
                var fun1 = function(c, v) { 
                    result = v;
                    return true;
                }
                item1.addConstraint(fun1);
        
                expect(item1.valid('10')).toBe(undefined);
            });
            it("- valid(value) : required, return  = undefined ", () => {
                var item1 = new MetaColumn('c1');
                item1.required = false;
                var result;
                var fun1 = function(c, v) { 
                    return;
                }
                item1.addConstraint(fun1);
        
                expect(item1.valid('10')).toBe(undefined);
            });
            it("- valid(value) : required, return  = {msg:..} ", () => {
                var item1 = new MetaColumn('c1');
                item1.required = false;
                var result;
                var fun1 = function(c, v) { 
                    return {msg: 'err', code: 'c1' };
                }
                item1.addConstraint(fun1);
        
                expect(item1.valid('10')).toEqual({msg: 'err', code: 'c1', value: '10' });
            });
            it("- valid(value) : required, return  = {msg:..} ", () => {
                var item1 = new MetaColumn('c1');
                item1.required = false;
                var result;
                var fun1 = function(c, v) { 
                    return false;
                }
                item1.addConstraint(fun1);
        
                expect(item1.valid('10')).toBeDefined();
            });
            it("- valid(value): return  <제약조건 검사> ", () => {
                var item1 = new MetaColumn('c1');
                item1.required = false;
                // item1.optional = false;

                // var item2 = new MetaColumn('c2');
                // // item2.required = false;
                // item2.optional = true;

                var item3 = new MetaColumn('c3');
                item3.required = true;
                // item3.optional = false;

                // var item4 = new MetaColumn('c4');
                // item4.required = true;
                // item4.optional = false;

                // item1.default = 10
                // item1.addConstraint(/10/, '10 시작...', 100, true);

                // expect(item1.valid()).toBe(undefined); 
                expect(item1.valid('Yes')).toBe(undefined); 
                expect(item1.valid()).toBe(undefined); 
                // expect(item2.valid('Yes')).toBe(undefined); 
                // expect(item2.valid('')).toBe(undefined); 
                expect(item3.valid('Yes')).toBe(undefined); 
                expect(item3.valid()).not.toBe(undefined); 
                // expect(item4.valid('Yes')).toBe(undefined); 
                // expect(item4.valid()).not.toBe(undefined); 
                // expect(item5.valid('Yes')).toBe(undefined); 
                // expect(item5.valid()).toBe(undefined); 
                // expect(item6.valid('Yes')).toBe(undefined); 
                // expect(item6.valid()).toBe(undefined); 
            });

        });
        describe("커버리지 및 예외 ", () => {
            it("- 예외", () => {   
                const c1 = new MetaColumn('c1');

                expect(()=>c1._entity = 0).toThrow(/EL05111/)
                expect(()=>c1.default = {}).toThrow(/EL01127/)
                expect(()=>c1.value = {}).toThrow(/EL01127/)

            });
            it("- 예외 : 설정 1", () => {   
                const c1 = new MetaColumn('c1');
                c1.$value = 'INNER'
                expect(c1.$value).toBe('INNER')
            });

            it("- 조회 : COVER", () => {   
                const c1 = new MetaColumn('c1');
                
                c1.$key = 'cc1';
                c1.$key = 10
                expect(c1.$key).toBe('cc1')
                // c1.$alias = 
                
                c1.$value = 'VV'
                // c1.__SET$$value('VV');     // 무시됨
                expect(c1.$value).toBe('VV')
                // expect(c1.$$value()).toBe(undefined)

                expect(c1.alias).toBe('c1')
                expect(c1.$alias).toBe(null)
                c1.$alias = 'a'
                expect(c1.alias).toBe('a')
                c1.$alias = 10
                expect(c1.alias).toBe('a')
                // expect(c1.__GET$alias(c1)).toBe(null)

            });
            it("- 커버리지 : 조건검사 ", () => {   
                MetaColumn._VALUE_TYPE = [];
                const c1 = new MetaColumn('c1');
                c1.value = {};

            });
        });

    });
    
    // describe("< setValue(row) >", () => {
    //     it("-  ", () => {
            
    //     });
    // });
});

/**
 * 테스트가 허술해 보임
 * REVIEW: getter/setter 를 새롭게 정립하여서 테스트를 갱신햐야함
 */