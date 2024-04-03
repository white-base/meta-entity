
// @ts-check

var Util                        = require('logic-core').Util;
var Observer                    = require('logic-core').Observer;
var Message                     = require('logic-core').Message;


var MetaObject                  = require('logic-core').MetaObject;
// var IObject                     = require('logic-core').IObject;
// var IElement                    = require('logic-core').IElement;
var IElement                    = require('logic-core').Interface.IElement;
var IObject                    = require('logic-core').Interface.IObject;
// var {IElement}                    = require('logic-core').Interface;
// var TElement                    = require('logic-core');

// var IElement2                    = require('logic-core/IElement');
// var IElement3                    = require('logic-core/i-element');
var ExtendError                 = require('logic-core').ExtendError;
var PropertyCollection          = require('logic-core').PropertyCollection;
var MetaRegistry                = require('logic-core').MetaRegistry;

var MetaElement                 = require('logic-core').MetaElement;
// var MetaTable                   = require('../src/meta-table').MetaTable;

// var entity = require('../');

var C = require('logic-entity');
// var C = require('../');

var a2 = new C.MetaTable('a2');
var a1 = new C.MetaRowCollection(a2);
var a3 = new C.MetaRow(a2);
// a1.add(10); // OK  오류 되야함
a1.add(a3, true);   // OK


// a1.add(new C.MetaRow(a2), true);

Function._TYPE = {
    // params: [],
    // return: null,
    $type: 'string',
    // kind: '_ANY_',
    // default: 
}

function Func() {

}

Func._KIND;
Func._TYPE;

var iii = new C.MetaTable('ff')

// var ii = new BaseEntity()   // 나부

// var i2 = new Observer({})
// var i3 = new MetaElement('d')
// var i4 = Message.get()

var i5 = new MetaObject()
var i6 = new IObject()
var i7 = new PropertyCollection({})
var i8 = new IElement();


var str = "aa";

// str.substr()
// i6.

// MetaRegistry.setMetaObject

// i7.add('a', null, {get: aa})

// i5.getObject()

// var i7 = new ExtendError('ss', {a: 2})



console.log(0);
