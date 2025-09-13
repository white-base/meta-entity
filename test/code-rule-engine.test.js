//==============================================================
// gobal defined
import { jest } from '@jest/globals';

// 'use strict';
import {MetaObject}              from 'logic-core';
import {MetaElement}             from 'logic-core';
import {BaseEntity}              from '../src/base-entity';
import {IObject}                 from 'logic-core';
import {IMarshal}                from 'logic-core';
import { Util }                  from 'logic-core';
import { MetaTable }             from '../src/meta-table';
import { MetaView }              from '../src/meta-view';
import { MetaRow }               from '../src/meta-row';
import { MetaColumn }            from '../src/meta-column';
import { ObjectColumn }          from '../src/object-column';
import { BaseColumn }            from '../src/base-column';
import { CodeRuleEngine }        from '../src/code-rule-engine';


//==============================================================
// test
describe("[target: code-rule-engine.js]", () => {
    describe("CodeRuleEngine :: 클래스", () => {
        beforeAll(() => {
            // jest.resetModules();
        });
        describe("CodeRuleEngine.describe <설명>", () => {
            it("- this._entity ", () => {

                var cr = new CodeRuleEngine();
                var rule = [
                    { match: 'M', desc: '남성' },
                    { match: 'W', desc: '여성' }
                ]

                var res1 = cr.describe(rule);
                var res2 = cr.describe(rule, 'M');
                var res3 = cr.describe(rule, 'W');
                var res4 = cr.describe(rule, 'X');
                
                expect(res1).toBeNull();
                expect(res2).toBe('남성');
                expect(res3).toBe('여성');
                expect(res4).toBeNull();

                // var table1 = new MetaTable('T1');
                // table1.columns.addValue('c1', 'V1');
                // table1.columns.addValue('c2', 'V2');
                // var row1 = new MetaRow(table1);
                
                // expect(()=> row1._entity = {}).toThrow(/ES032/) 
                // expect(()=> row1._entity = table1).toThrow(/ES045/) // count 존재
            });
        });
        
    });
    
});

// describe("< setValue(row) >", () => {
//     it("-  ", () => {
        
//     });
// });

