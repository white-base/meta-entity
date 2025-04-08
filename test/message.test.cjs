//==============================================================
// gobal defined

//==============================================================
// test
describe("CJS ENV TEST", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.resetModules();
        process.env.LANG = 'en_US.UTF-8';
    });
    describe("Message.get() : 메시지 얻기", () => {
        it("- 기본 영어", async () => {
            process.env.LANG = 'ko_KR.UTF-8'; // 한글 환경에서도 autoDetect()가 실행되지 않음
            // const {Message} = await import('../src/message');
            const {Message} = require('logic-entity');
            
            expect(Message.defaultLang).toBe('default')
            expect(Message.currentLang).toBe('default')
            expect(Message.get('KO')).toMatch(/There is no message for code. 'KO'/);
            expect(Message.get('EN')).toMatch(/OK/);
        });             
    });
    describe("Message.autoDetect() : 언어자동 설정", () => {
        it("- 한글", async () => {
            process.env.LANG = 'ko_KR.UTF-8';
            // const {Message} = await import('../src/message');
            const {Message} = require('logic-entity');
            await Message.autoDetect()
            
            expect(Message.defaultLang).toBe('default')
            expect(Message.currentLang).toBe('ko')
            expect(Message.get('KO')).toMatch(/OK/);
            expect(Message.get('EN')).toMatch(/OK/);
        });
    });
    describe("Message.changeLanguage() : 언어 변경", () => {
        it("- 언어 변경", async () => {
            const {Message} = require('logic-entity');
            await Message.changeLanguage('ko')

            expect(Message.currentLang).toBe('ko')
            expect(Message.getMessageByCode('KO')).toBe('OK')
        });
        it("- entity 언어 변경", async () => {
            const {Message} = require('logic-entity');
            await Message.changeLanguage('entity')

            expect(Message.currentLang).toBe('entity')
            expect(Message.getMessageByCode('ENTITY')).toBe('SUCCESS')
        });
        it("- core 언어 변경", async () => {
            const {Message} = require('logic-entity');
            await Message.changeLanguage('core')

            expect(Message.currentLang).toBe('core')
            expect(Message.getMessageByCode('CORE')).toBe('SUCCESS')
        });
        it("- 없는 언어 추가", async () => {
            const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})
            const {Message} = require('logic-entity');
            await Message.changeLanguage('jp')
            
            expect(Message.currentLang).toBe('jp')
            expect(warnSpy.mock.calls[0][0]).toBe("Path './locales/jp' does not have a file.")
        });
    });
});