import {MetaColumn} from 'logic-entity/ko';
import {ObjectColumn} from 'logic-entity';
import {MetaElement} from 'logic-entity';
import {MetaTableCollection, MetaViewCollection} from 'logic-entity/ko';
import {MetaTable, MetaView} from 'logic-entity/ko';

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




console.log('ArrayCollection', c);



var c1 = new MetaTableCollection();
var c2 = new MetaViewCollection();
c1.add('t1');
c1['t1'].cols._elemTypes
c1[0]._name

c2.add('v1');
c2['v1'].cols._elemTypes
c2[0]._name

var t1 = new MetaTable('t1');
var v1 = new MetaView('v1');

t1._name;
t1.cols.add('c1');
t1.cols['c1'].columnName;
t1.cols[0]._name;
t1.cols[0].columnName;
t1.rows.add(new t1.newRow());
t1.rows[0]['c1'].at(0);
t1.rows[0][0].at(0);
t1.rows[0].clone();
// t1.rows[0].

v1.cols.add('c1');
v1.rows.add(new v1.newRow());
v1.rows[0]['c1']
v1.rows[0].clone();
  
// t1.rows[0]['c1']
// t1.rows[0]
// t1.rows[0]


console.log('a');