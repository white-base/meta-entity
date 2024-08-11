/**
 * ES6 + CJS + JEST
 */
//==============================================================
// gobal defined
'use strict';
const {MetaObject}              = require('logic-core');
const {MetaElement}             = require('logic-core');
const {BaseColumn}              = require('../src/base-column');
const { MetaTable }             = require('../src/meta-table');
const { MetaView }              = require('../src/meta-view');
const { MetaRow }               = require('../src/meta-row');
const { MetaRegistry }          = require('logic-core');

let MetaObjectSub, MetaElementSub, ComplexElementSub, EmpytClass;

//==============================================================
// test
describe("[target: base-column.js]", () => {
    describe("BaseColumn :: 클래스", () => {
        beforeEach(() => {
            jest.resetModules();
            MetaRegistry.init();
        });

        describe("MetaObject._valueTypes: <value 타입 설정>", () => {
            it("- 설정 및 조회 ", () => {
                class SubClass extends BaseColumn {
                    constructor() {super('S1')}
                }
                SubClass._VALUE_TYPE = '';   // 커버리지
                const s1 = new SubClass();
                
                s1._valueTypes = String;
                expect(s1._valueTypes).toEqual([String])
                s1._valueTypes = [Number, String];
                expect(s1._valueTypes).toEqual([Number, String])
                s1.default = 10
                s1.default = 'STR'
                expect(()=> s1.default = {}).toThrow(/EL0130B/)
                s1.val = 10
                s1.value = 'STR'
                expect(()=> s1.value = {}).toThrow(/EL0130B/)

            });
            it("- 설정 및 조회 : _valueTypes 미 설정시 ", () => {
                class SubClass extends BaseColumn {
                    constructor() {super('S1')}
                }
                const s1 = new SubClass();
                s1.default = 10
                s1.default = 'STR'
                s1.default = {}
                s1.value = 10
                s1.value = 'STR'
                s1.value = {}
            });
        });
        describe("MetaObject.clone(): ? <추상 메소드 구현>", () => {
            it("- 상속하여 미구현시 ", () => {
                class SubClass extends BaseColumn {
                    constructor() {super('S1')}
                }
                const s1 = new SubClass();

                expect(()=> s1.clone()).toThrow(/EL05119/) 
            });
        });
        describe("BaseColumn() <생성자>", () => {
            it("- 객체 생성 속성 확인 ", () => {
                const obj1 = {aa: 1}

                expect(()=> new BaseColumn('o1', null, String)).toThrow(/EL03111/)
                expect(()=> new BaseColumn('o1', null, [String, Number])).toThrow(/EL03111/)
            });
            /**
             * valueTypes
             */
        });
        

        describe("예외 및 커버리지", () => {
            // it("- MetaObject.__SET_guid : 내부 setter ", () => {
            //     const i = new MetaObject();
                
            //     i.__SET$_guid(10, i);
            //     expect(i._guid).toBe(10);
            //     i.__SET$_guid(20);
            //     expect(i._guid).toBe(10);
            // });

        });
    });
});
