
process.env.LANG = 'ko_US.UTF-8';

const {Message} = require('logic-core');
Message.autoDetect()

// var Message;
// (async () => {
//     Message = await import('logic-core');
//     console.log('Message', Message.$storage);
// }
// )();

// const {Message} = await import('logic-core');



console.log('Message', Message.$storage);
