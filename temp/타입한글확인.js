import {MetaColumn} from 'logic-entity/ko';
import {ObjectColumn} from 'logic-entity';
import {MetaElement} from 'logic-entity';

import {ArrayCollection} from 'logic-core/ko';
import {PropertyCollection} from 'logic-core';

var a =  new MetaColumn('column1');
var b =  new ObjectColumn('column1');

a._name;
a.columnName;

b._name;
b.columnName;

var c =  new ArrayCollection();
var d =  new PropertyCollection();
var e =  new MetaElement('element1');

c.clear();
d.clear();

e._name;
console.log('a');
