/**** message.js | _L.Common.Message ****/
//==============================================================
import  { Message }         from 'logic-core';
import  defaultCode         from './locales/default.json';

const localesPath = './locales';    // 상대 경로

Message.importMessage(defaultCode, localesPath);

export default Message;
export { Message };