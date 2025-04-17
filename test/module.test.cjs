//==============================================================
// gobal defined
const fs = require('fs');
const path = require('path');

//==============================================================
/**
 * 'logic-core'
 * 'dist/logic-core.node.cjs'
 * 'dist/logic-core.js' : umd
 */
describe("cjs", () => {
    beforeEach(() => {
        jest.resetModules();
        jest.restoreAllMocks();
    });
    describe("logic-entity 모듈", () => {
        it("- 기본", async () => {
            const { PropertyCollection, MetaView } = require('logic-entity');
            const p = new PropertyCollection();
            const a = new MetaView('v1');
            
            expect(typeof PropertyCollection === 'function').toBe(true);
            expect(typeof MetaView === 'function').toBe(true);
        });
    });
    describe("dist/logic-entity.node.cjs 모듈", () => {
        it("- 기본", async () => {
            const { PropertyCollection, MetaView } = require('../dist/logic-entity.node.cjs');
            const p = new PropertyCollection();
            const a = new MetaView('v1');
            
            expect(typeof PropertyCollection === 'function').toBe(true);
            expect(typeof MetaView === 'function').toBe(true);
        });
    });
    describe("dist/logic-entity.js umd", () => {
        it("- script 실행", () => {
            const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})
            const umdCode = fs.readFileSync(path.resolve(__dirname, '../dist/logic-entity.js'), 'utf8');
            const script = new Function('global', umdCode + '; return global._L;');
            globalThis._L = script(global);
            const { PropertyCollection, MetaView } = _L;
            const p = new PropertyCollection();
            const a = new MetaView('v1');
            
            expect(typeof PropertyCollection === 'function').toBe(true);
            expect(typeof MetaView === 'function').toBe(true);
            // expect(warnSpy.mock.calls[0][0]).toBe("Path './locales/ko.json' does not have a file.")
        });
        it("- require", async () => {
            await import('../dist/logic-entity.js');
            const { PropertyCollection, MetaView } = globalThis._L;

            expect(typeof PropertyCollection === 'function').toBe(true);
            expect(typeof MetaView === 'function').toBe(true);
        });
    });
});