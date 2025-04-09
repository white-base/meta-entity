//==============================================================
// gobal defined
const fs = require('fs');
const path = require('path');

//==============================================================
/**
 * 'logic-core'
 * 'dist/logic-core.browser.cjs' : cjs
 * 'dist/logic-core.js' : umd
 */
describe("cjs", () => {
    beforeEach(() => {
        jest.resetModules();
        jest.restoreAllMocks();
        globalThis.isDOM = true;
    });
    describe("logic-entity 모듈", () => {
        it("- 기본", async () => {
            const { PropertyCollection, MetaView } = require('logic-entity');   // dist/logic-core.node.cjs
            const p = new PropertyCollection();
            const a = new MetaView('v1');
            
            expect(typeof PropertyCollection === 'function').toBe(true);
            expect(typeof MetaView === 'function').toBe(true);
        });
    });
    describe("dist/logic-entity.browser.cjs 모듈", () => {
        it("- 기본", async () => {
            const { PropertyCollection, MetaView } = require('../dist/logic-entity.browser.cjs');
            const p = new PropertyCollection();
            const a = new MetaView('v1');
            
            expect(typeof PropertyCollection === 'function').toBe(true);
            expect(typeof MetaView === 'function').toBe(true);
        });
    });
    describe("dist/logic-entity.js umd", () => {
        it("- script 실행", () => {
            const umdCode = fs.readFileSync(path.resolve(__dirname, '../dist/logic-entity.js'), 'utf8');
            const script = new Function('global', umdCode + '; return global._L;');
            globalThis._L = script(global);
            const { PropertyCollection, MetaView } = _L;
            const p = new PropertyCollection();
            const a = new MetaView('v1');
            
            expect(typeof PropertyCollection === 'function').toBe(true);
            expect(typeof MetaView === 'function').toBe(true);
        });
        it("- require", async () => {
            await import('../dist/logic-entity.js');
            const { PropertyCollection, MetaView } = globalThis._L;

            expect(typeof PropertyCollection === 'function').toBe(true);
            expect(typeof MetaView === 'function').toBe(true);
        });
    });
});


