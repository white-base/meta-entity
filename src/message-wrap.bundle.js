/**** message-wrap-bundle.js | Message ****/
//==============================================================
import { Message }          from 'logic-core';
import defaultCode          from './locales/default.js';
// import defaultCode          from './locales/default.json' with { type: 'json' };
// cjs 
const isNode = typeof globalThis.isDOM === 'boolean' ? !globalThis.isDOM :  typeof process !== 'undefined' && process.versions !== null && process.versions.node !== null;
let localesPath = './locales';

function absolutePath(localPath) {
    try {
        const path = require('path');
        return path.resolve(__dirname, localPath);
    } catch (error) {
        return localPath;  // Fallback to the original path
    }
}

if (isNode) {  // REVIEW: cjs module & node
    localesPath = absolutePath(localesPath);
}

Message.importMessage(defaultCode, localesPath);

export default Message;
export { Message };