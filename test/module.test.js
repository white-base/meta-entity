//==============================================================
// gobal defined
import { jest } from '@jest/globals';

//==============================================================
/**
 * 'logic-core'
 * 'dist/logic-core.esm.js'
 */
describe("esm", () => {
    beforeEach(() => {
        jest.resetModules();
        jest.restoreAllMocks();
        globalThis.isESM = true
    });
    describe("logic-entity 모듈", () => {
        it("- 기본", async () => {
            const { MetaTable, MetaView } = await import('logic-entity');
            const p = new MetaTable('t1');
            const a = new MetaView('t2');
            
            expect(typeof MetaTable === 'function').toBe(true);
            expect(typeof MetaView === 'function').toBe(true);
        });
    });
    describe("dist/logic-entity.esm.js 모듈", () => {
        it("- 기본", async () => {
            const { MetaTable, MetaView } = await import('../dist/logic-entity.esm.js');
            const p = new MetaTable('t1');
            const a = new MetaView('t2');
            
            expect(typeof MetaTable === 'function').toBe(true);
            expect(typeof MetaView === 'function').toBe(true);
        });
    });
});
