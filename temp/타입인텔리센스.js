var entity    = require('logic-entity');
const { MetaColumn } = require('../src/meta-column');
const { MetaTable } = require('../src/meta-table');



var aa = new entity.ArrayCollection();

var bb = entity.Message.get('aa');

var cc = new entity.MetaTable('aa');

cc.columns.removeAt(1)
cc.columns.existColumnName('aa')

// aa.$descriptor