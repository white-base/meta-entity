/**** message-wrap.js | Message ****/
//==============================================================
import { Message }          from 'logic-core';
// import defaultCode          from './locales/default.json' with { type: 'json' };
import defaultCode          from './locales/default.js';

// import { fileURLToPath }    from 'url';
// import { dirname, resolve } from 'path';

// const isNode = typeof process !== 'undefined' && process.versions !== null && process.versions.node !== null && globalThis.isDOM !== true;
const isNode = typeof globalThis.isDOM === 'boolean' ? !globalThis.isDOM :  typeof process !== 'undefined' && process.versions !== null && process.versions.node !== null;
// const isESM = isNode && (typeof require === 'undefined' || globalThis.isESM === true);   // REVIEW: test hack

let localesPath = './locales';    // 상대 경로

async function absolutePath(localPath) {
    try {
        const { fileURLToPath } = await import('url');
        const path = await import('path');
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        
        return path.resolve(__dirname, localesPath);
    } catch (error) {
        return localPath;  // Fallback to the original path
    }
}


if (isNode) {  // REVIEW: esm module & node
    localesPath = await absolutePath(localesPath);
}

Message.importMessage(defaultCode, localesPath);

export default Message;
export { Message };