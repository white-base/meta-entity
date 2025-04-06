/**** message.js | _L.Common.Message ****/
//==============================================================
import  defaultCode  from './locales/default.json';
import  { Message }  from 'logic-core';

const localesPath = './locales';    // 상대 경로

Message.importMessage(defaultCode, localesPath);

export default Message;
export { Message };