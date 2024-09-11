/**** message-code.js | _L.messageCode.entity ****/
(function(_global) {
    'use strict';

    var isNode = typeof window !== 'undefined' ? false : true;
    //==============================================================
    // 1. import module
    //==============================================================
    // 2. module dependency check
    //==============================================================
    var messageCode = {
        en: {
            // Interface.*.
            // i-control-export.js
            EL02210: '',
            EL02211: 'write(opt): object is an abstract method. [$1] must be implemented',
            // i-control-import.js
            EL02220: '',
            EL02221: 'read(object) is an abstract method. [$1] must be implemented',
            // i-control-group.js
            EL02230: '',
            EL02231: 'merge(any, opt) is an abstract method. [$1] must be implemented,',
            EL02232: 'Copy(filter) is an abstract method. [$1] must be implemented,',
            // i-control-schema.js
            EL02240: '',
            EL02241: 'readSchema(json) is an abstract method. [$1] must be implemented',
            EL02242: 'writeSchema(opt): object is an abstract method. [$1] must be implemented',
            // i-transaction.js
            EL02250: '',
            EL02251: 'AcceptChanges() is an abstract method. [$1] must be implemented',
            EL02252: 'rejectChanges() is an abstract method. [$1] must be implemented',
            // Meta.Entity.*.
            EL05100: '',
            // BaseColumn
            EL05110: '',
            EL05111: '$1._entity value is not an instance of [MetaElement]',
            EL05112: '$1.columnName is of type \'string\'. typeof columnName = \'$2\'',
            EL05113: 'Existing $1.columnName\'$2\'',
            EL05114: 'Could not set columnName because $1.alias \'$2\' already exists',
            EL05115: '$1.alias is of type \'string\'. typeofalias = \'$2\'',
            EL05116: 'Existing $1.alias \'$2\'',
            EL05117: '$1.caption is of type \'string\'. typeofcaption = \'$2\'',
            EL05118: 'setObject(oGuid, origin); oGuid.[\'_entity\'] guid not found. name = $1, guid = $2',
            EL05119: 'clone() is an abstract method. It must be inherited and implemented.',
            // ObjectColumn
            EL05120: '',
            EL05121: '_load(prop); prop is of type \'object\', type of prop = \'$2\'',
            EL05122: 'setObject(oGuid, origin); oGuid.[\'default\'] guid not found: guid = $1',
            EL05123: 'setObject(oGuid, origin); oGuid.[\'value\'] guid not found: guid = $1',
            // MetaColumn
            EL05130: '',
            EL05131: '$1.required is of type \'boolean\', type of = \'$2\'',
            EL05132: '$1.isNullPass is of type \'boolean\'. typeofisNullPass = \'$2\'', // TODO: removed
            EL05133: 'The array element of $1.constraits is of type \'function\' | {regex: RegExp, msg: string}. typeof [$2].regex = \'$3\', [$2].msg = \'$4\'',
            EL05134: '$1.getter is of type \'function\', type of getter = \'$2\'',
            EL05135: '$1.setter is of type \'function\', type of setter = \'$2\'',
            EL05136: 'addConstraint (regex, msg, code, condition); regex is not a RegExp instance',
            EL05137: 'addConstraint(regex, msg, code, condition); msg 는 \'string\' 타입입니다. typeof msg = \'$1\'',
            // BaseColumnCollection
            EL05140: '',
            EL05141: '$1._baseType is of type \'function\', type of getter = \'$2\'',
            EL05142: 'The prototype of $1._baseType [BaseColumn] must be connected (inheritance), ',
            EL05143: 'add(name, vlaue); cannot add columnColleciton because _onwer rows exist. _onwer.rows.count = $1',
            EL05144: 'add(name, vlaue); cannot be added because \'$2\' exists in $1',
            EL05145: 'add(name, vlaue); cannot be added because alias \'$2\' exists in $1',
            EL05146: 'removeAt(idx); cannot remove columnColleciton because _onwer rows exist. _onwer.rows.count = $1',
            EL05147: 'addValue(name, value) is an abstract method. Must be implemented',
            // MetaTableColumnCollection
            EL05150: '',
            EL05151: 'add(any); any 는 \'string\' | [BaseColumn] 타입입니다. typeof any = $1',
            EL05152: 'addValue(name, value); name 은 \'string\' 타입입니다. typeof name = $1',
            // MetaViewColumnCollection
            EL05160: '',
            EL05161: 'add(any, refCol); refCol value is not of type [BaseColumnCollection',
            EL05162: 'add(any, refCol); any 는 \'string\' | [BaseColumn] 타입입니다. typeof any = $1',
            EL05163: 'addValue(name, value, refCol); name 은 \'string\' 타입입니다. typeof name = $1',
            EL05164: 'addEntity(entity); entity value is not of type [BaseEntity',
            // 
            EL05200: '',
            // MetaRow
            EL05210: '',
            EL05211: '$1.constructor(entity) value is not of type [BaseEntity',
            EL05212: 'setObject(oGuid, origin); oGuid[\'_elem\'].length = $1 length and oGuid[\'_key\'].length = $2 length are different.',
            EL05213: 'setObject(oGuid, origin); oGuid[\'_elem\'][$1] guid not found. guid = $2',
            // MetaRowCollection
            EL05220: '',
            EL05221: 'The target\'s _entity object and $1._onwer object must be the same',
            EL05222: 'insertAt(pos, row, isCheck); row is not type [MetaRow]',
            EL05223: 'insertAt(pos, row, isCheck); row\'s _entity object and $1._onwer object must be the same',
            EL05224: 'Validation of insertAt(pos, row, isCheck);row[$1] failed msg = \'$2\'',
            // base-entity.js
            EL05300: '',
            // property
            EL05310: '',
            EL05311: '$1._mestaset value is not of type [MetaSet]',
            EL05312: 'The $1.column property must be redefined,',
            // private method :: _buildEntity, _readEntity, _readSchema - 14
            EL05320: '',
            EL05321: '_buildEntity(entity, cb, items); items[$1] 가 \'string\' It\'s not type. typeof items[$1] = $2',
            EL05322: '_buildEntity(entity, cb, items); column name \'$1\' exists in this.column and cannot be added.',
            EL05323: '_buildEntity (entity, cb, items); row creation for entity failed',
            EL05324: '_readEntity(entity, opt); entity is not of type [BaseEntity',
            EL05325: '_readEntity(entity, opt); opt is not of type \'number\'. type of opt = $1',
            EL05326: '_readEntity(entity, opt); entity read failed. opt = $1',
            EL05327: '_readEntity(entity, opt); this.rows exists and cannot load column.opt = $1',
            EL05328: '_readEntity(entity, opt); column name \'$1\' exists in this.column and cannot be added',
            EL05329: '_readSchema(obj, isRow, origin); obj._baseEntity guid not found. guid = $1',
            EL0532A: '_readSchema (obj, isRow, origin); Schema read failed',
            EL0532B: '_readSchema(obj, isRow, origin); this.rows exists and cannot be added to column',
            EL0532C: '_readSchema(obj, isRow, origin); this.columns[$1] guid not found.guid = $2',
            EL0532D: '_readSchema(obj, isRow, origin); this.columns[$1]._entity guid를 not found. guid = $2',
            EL0532E: '_readSchema(obj, isRow, origin); column name \'$1\' exists in this.column and cannot be added',
            // method :: transformSchema(static), setValue, clone, select - 7, : getValue, clear, reset, newRow, getObject, setObject
            EL05330: '',
            EL05331: 'BaseEntity.transformSchema(oGuid); oGuid is not a schema object. oGuid = {column: $1,rows: $2}',
            EL05332: 'BaseEntity.transformSchema(oGuid); schema conversion failed',
            EL05333: 'setValue(row);row is not of type [MetaRow',
            EL05334: 'Row setting failed for setValue(row); columns',
            EL05335: 'select (filter, ...); recited from MetaRegistry.namespace to fetch \'$1\'',
            EL05336: 'select(filter, ...); lookup failed',
            EL05337: 'clone() is an abstract method. Must be implemented',
            EL05338: 'validate(); validation can be performed if all columns are MetaColumn type.',
            // merge, copy - 8
            EL05340: '',
            EL05341: 'merge(target, opt, isMath); target is not of type [BaseEntity]',
            EL05342: 'merge(target, opt, isMath); opt is not of type \'number\'. type of opt = $1',
            EL05343: 'merge(target, opt, isMath); opt = 1, target.columns[$1].name = \'$2\' 이 column name 에 존재합니다.',
            EL05344: 'merge(target, opt, isMath); opt = 1, target.columns[$1].name = \'$2\' 이 column alias 에 존재합니다.',
            EL05345: 'merge(target, opt, isMath); opt = 3, target.columns[$1].name = \'$2\' 이 columns name 에 존재합니다.',
            EL05346: 'merge(target, opt, isMath); opt = 3, target.columns[$1].name = \'$2\' 이 columns alias 에 존재합니다.',
            EL05347: 'merge(target, opt, isMath); merge failed. opt = $1',
            EL05348: 'copy() is an abstract method. must be implemented',
            // load, read, readSchema, readDate - 12
            EL05350: '',
            EL05351: 'load(obj, pas); type [BaseEntity] obj cannot be loaded',
            EL05352: 'load(obj, pas); obj is not of type \'object\' (except null) type of obj = $1',
            EL05353: 'load(obj, pas); load failed',
            EL05354: 'read(obj, opt); obj is not of type \'object\' (except null) type of obj = $1',
            EL05355: 'read(obj, opt); opt is not of type \'number\'. type of opt = $1',
            EL05356: 'read(obj, opt); opt values are not in the range (1-3). obj = $1',
            EL05357: 'read(obj, opt); read failed',
            EL05358: 'readSchema(obj, isCreate, origin); obj is not of type \'object\' (except null) type of obj = $1',
            EL05359: 'readSchema(obj, isCreate, origin); obj is not a schema object. obj = {column: $1,rows: $2}',
            EL0535A: 'readSchema (obj, isCreate, origin); skami read failed',
            EL0535B: 'readData(obj); obj is not of type \'object\' (except null) type of obj = $1',
            EL0535C: 'readData(obj); obj is not a schema object. obj = {columns: $1,rows: $2}',
            EL0535D: 'readData(obj); data read failed',
            // output, write, writeSchema, writeData
            EL05360: '',
            EL05361: '',
            //
            EL05400: '',
            // MetaTable
            EL05410: '',
            EL05411: '$1.tableName value is not of type \'string\. typeoftableName = $2',
            EL05412: '$1.column value is not of type [MetaTableCollection]',
            EL05413: '$1.rows exists and cannot set columns.rows.count = $2',
            EL05414: 'setObject(oGuid, origin); oGuid.[\'_metaSet\'] guid not found: guid = $1',
            // MetaTableColleciton
            EL05420: '',
            EL05421: '$1._baseType value is not function type. typeof_baseType = $2',
            EL05422: 'The prototype of $1._baseType [MetaTable] must be connected. (Inheritance)',
            EL05423: 'add(any); any is \'string\' | [MetaTable] type. typeofany = $1',
            EL05424: 'add(any); tableName = \'$1\' existing',
            // MetaView
            EL05430: '',
            EL05431: '$1.viewName value is not of type \'string\. typeofviewName = $2',
            EL05432: '$1.column value is not of type [MetaViewCollection]',
            EL05433: '$1.rows exists and cannot set columns.rows.count = $2',
            EL05434: '$1._baseEntity value is not of type [BaseEntity]',
            EL05435: 'setObject(oGuid, origin); oGuid.[\'_metaSet\'] guid not found: guid = $1',
            EL05436: 'setObject(oGuid, origin); oGuid.[\'_baseEntivity\'] guid not found: guid = $1',
            // MetaViewColleciton
            EL05440: '',
            EL05441: '$1._baseType value is not of type \'function\'. typeof_baseType = $2',
            EL05442: 'The prototype of $1._baseType [MetaView] must be connected (inheritance), ',
            EL05443: 'You cannot enter obj and baseEntity of type [MetaView] at the same time',
            EL05444: 'add(obj, baseEntity); baseEntity is not type [BaseEntity]',
            EL05445: 'add(obj, baseEntity); obj is \'string\' | [MetaView] type. typeof obj = $1',
            EL05446: 'add(obj, baseEntity); viewName = \'$1\' existing',
            // MetaSet
            EL05450: '',
            EL05451: '$1.setName value is not of type \'string\. typeofsetName = $2',
            EL05452: '$1.autoChanges value is not of type \'boolean\. typeofsetName = $2',
            EL05453: 'MetaSet.transformSchema(oGuid); oGuid is not a schema object: oGuid = {tables:..., views:...}',
            EL05454: 'load(obj, pas); type [MetaSet] obj cannot be loaded',
            EL05455: 'load(obj, pas); obj is not of type \'object\' (except null) type of obj = $1',
            EL05456: 'read(obj, opt); obj is not of type \'object\' (except null) type of obj = $1',
            EL05457: 'read(obj, opt); opt is not of type \'number\. type of opt = $1',
            EL05458: 'readSchema(obj, isCreate); obj is not of type \'object\' (except null) type of obj = $1',
            EL05459: 'readSchema(obj, isCreate); obj is not a schema object. obj = {tables: $1, views: $2}',
            EL0545A: 'readData(obj); obj is not of type \'object\' (except null) type of obj = $1',
            EL0545B: 'readData(obj); obj is not a schema object.',
            // Warn
            WS011: '[$1] Destination [$2] cannot be deleted,'
        },
        ko: {
            // Interface.*
            // i-control-export.js
            EL02210: '',
            EL02211: 'write(opt): object 은 추상메소드 입니다. [$1] 을 구현해야 합니다.',
            // i-control-import.js
            EL02220: '',
            EL02221: 'read(object) 은 추상메소드 입니다. [$1] 을 구현해야 합니다.',
            // i-control-group.js
            EL02230: '',
            EL02231: 'merge(any, opt) 은 추상메소드 입니다. [$1] 을 구현해야 합니다.',
            EL02232: 'copy(filter) 은 추상메소드 입니다. [$1] 을 구현해야 합니다.',
            // i-control-schema.js
            EL02240: '',
            EL02241: 'readSchema(json) 은 추상메소드 입니다. [$1] 을 구현해야 합니다.',
            EL02242: 'writeSchema(opt): object 은 추상메소드 입니다. [$1] 을 구현해야 합니다.',
            // i-transaction.js
            EL02250: '',
            EL02251: 'acceptChanges() 은 추상메소드 입니다. [$1] 을 구현해야 합니다.',
            EL02252: 'rejectChanges() 은 추상메소드 입니다. [$1] 을 구현해야 합니다.',
            // Meta.Entity.*
            EL05100: '',
            // BaseColumn
            EL05110: '',
            EL05111: '$1._entity 값이 [MetaElement] 인스턴스가 아닙니다.',
            EL05112: '$1.columnName 는 \'string\' 타입입니다. typeof columnName = \'$2\'',
            EL05113: '기존에 $1.columnName \'$2\'이 존재합니다.',
            EL05114: '기존에 $1.alias \'$2\'이 존재하여 columnName 을 설정할 수 없습니다.',
            EL05115: '$1.alias 는 \'string\' 타입입니다. typeof alias = \'$2\'',
            EL05116: '기존에 $1.alias \'$2\'이 존재합니다.',
            EL05117: '$1.caption 는 \'string\' 타입입니다. typeof caption = \'$2\'',
            EL05118: 'setObject(oGuid, origin); oGuid.[\'_entity\'] guid 를 찾을 수 없습니다. name = $1, guid = $2' ,
            EL05119: 'clone() 은 추상메소드 입니다. 상속해서 구현해야 합니다.',
            // ObjectColumn
            EL05120: '',
            EL05121: '_load(prop); prop 는 \'object\' 타입입니다. typeof prop = \'$2\'',
            EL05122: 'setObject(oGuid, origin); oGuid.[\'default\'] guid 를 찾을 수 없습니다. guid = $1' ,
            EL05123: 'setObject(oGuid, origin); oGuid.[\'value\'] guid 를 찾을 수 없습니다. guid = $1' ,
            // MetaColumn
            EL05130: '',
            EL05131: '$1.required 는 \'boolean\' 타입입니다. typeof required = \'$2\'',
            EL05132: '$1.isNullPass 는 \'boolean\' 타입입니다. typeof isNullPass = \'$2\'',  //  TODO: 제거됨
            EL05133: '$1.constraints 의 배열 요소는 \'function\' | {regex: RegExp, msg: string} 타입입니다. typeof [$2].regex = \'$3\', [$2].msg = \'$4\'',
            EL05134: '$1.getter 는 \'function\' 타입입니다. typeof getter = \'$2\'',
            EL05135: '$1.setter 는 \'function\' 타입입니다. typeof setter = \'$2\'',
            EL05136: 'addConstraint(regex, msg, code, condition); regex 는 RegExp 인스턴스가 아닙니다.',
            EL05137: 'addConstraint(regex, msg, code, condition); msg 는 \'string\' 타입입니다. typeof msg = \'$1\'',
            // BaseColumnCollection
            EL05140: '',
            EL05141: '$1._baseType 는 \'function\' 타입입니다. typeof getter = \'$2\'',
            EL05142: '$1._baseType [BaseColumn]의 prototype 이 연결되어 있어야 합니다.(상속)',
            EL05143: 'add(name, vlaue); _onwer 의 rows 가 존재하여 columnColleciton 을 추가할 수 없습니다. _onwer.rows.count = $1',
            EL05144: 'add(name, vlaue); $1 에 \'$2\' 존재하여 추가할 수 없습니다.',
            EL05145: 'add(name, vlaue); $1 에 alias \'$2\'이 존재하여 추가할 수 없습니다.',
            EL05146: 'removeAt(idx); _onwer 의 rows 가 존재하여 columnColleciton 을 제거할 수 없습니다. _onwer.rows.count  = $1',
            EL05147: 'addValue(name, value) 은 추상메소드 입니다. 구현해야 합니다.',
            // MetaTableColumnCollection
            EL05150: '',
            EL05151: 'add(any); any 는 \'string\' | [BaseColumn] 타입입니다. typeof any = $1',
            EL05152: 'addValue(name, value); name 은 \'string\' 타입입니다. typeof name = $1',
            // MetaViewColumnCollection
            EL05160: '',
            EL05161: 'add(any, refCol); refCol 값이 [BaseColumnCollection] 타입이 아닙니다.',
            EL05162: 'add(any, refCol); any 는 \'string\' | [BaseColumn] 타입입니다. typeof any = $1',
            EL05163: 'addValue(name, value, refCol); name 은 \'string\' 타입입니다. typeof name = $1',
            EL05164: 'addEntity(entity); entity 값이 [BaseEntity] 타입이 아닙니다.',
            // 
            EL05200: '',
            // MetaRow
            EL05210: '',
            EL05211: '$1.constructor(entity) 값이 [BaseEntity] 타입이 아닙니다.',
            EL05212: 'setObject(oGuid, origin); oGuid[\'_elem\'].length = $1 길이와 oGuid[\'_key\'].length = $2 길이가 서로 다릅니다.',
            EL05213: 'setObject(oGuid, origin); oGuid[\'_elem\'][$1] guid 를 찾을 수 없습니다. guid = $2',
            // MetaRowCollection
            EL05220: '',
            EL05221: 'target의 _entity 객체와 $1._onwer 객체가 같이야 합니다.',
            EL05222: 'insertAt(pos, row, isCheck); row 는 [MetaRow] 타입이 아닙니다.',
            EL05223: 'insertAt(pos, row, isCheck); row 의 _entity 객체와 $1._onwer 객체가 같이야 합니다.',
            EL05224: 'insertAt(pos, row, isCheck); row[$1] 의 유효성 검사(valid)가 실패하였습니다. fail msg = \'$2\'',
            // base-entity.js
            EL05300: '',
            // property
            EL05310: '',
            EL05311: '$1._mestaset 값은 [MetaSet] 타입이 아닙니다.',
            EL05312: '$1.columns 속성을 재정의해야 합니다.',
            // private method :: _buildEntity, _readEntity, _readSchema - 14
            EL05320: '',
            EL05321: '_buildEntity(entity, cb, items); items[$1] 가 \'string\' 타입이 아닙니다. typeof items[$1] = $2',
            EL05322: '_buildEntity(entity, cb, items); this.columns 에 \'$1\' 컬럼명이 존재하여 추가할 수 없습니다.',
            EL05323: '_buildEntity(entity, cb, items); entity 에 대한 row 생성이 실패하였습니다.',
            EL05324: '_readEntity(entity, opt); entity 가 [BaseEntity] 타입이 아닙니다.',
            EL05325: '_readEntity(entity, opt); opt 가 \'number\' 타입이 아닙니다. typeof opt = $1',
            EL05326: '_readEntity(entity, opt); entity 읽기가 실패하였습니다. opt = $1',
            EL05327: '_readEntity(entity, opt); this.rows 가 존재하여 컬럼을 load 할 수 없습니다. opt = $1',
            EL05328: '_readEntity(entity, opt); this.columns 에 \'$1\' 컬럼명이 존재하여 추가할 수 없습니다.',
            EL05329: '_readSchema(obj, isRow, origin); obj._baseEntity guid를 찾을 수 없습니다. guid = $1',
            EL0532A: '_readSchema(obj, isRow, origin); 스키마 읽기가 실패하였습니다.',
            EL0532B: '_readSchema(obj, isRow, origin); this.rows 가 존재하여 컬럼을 추가 할 수 없습니다.',
            EL0532C: '_readSchema(obj, isRow, origin); this.columns[$1] guid를 찾을 수 없습니다. guid = $2',
            EL0532D: '_readSchema(obj, isRow, origin); this.columns[$1]._entity guid를 찾을 수 없습니다. guid = $2',
            EL0532E: '_readSchema(obj, isRow, origin); this.columns 에 \'$1\' 컬럼명이 존재하여 추가할 수 없습니다.',
            // method :: transformSchema(static), setValue, clone, select - 7, 예외 없음 : getValue, clear, reset, newRow, getObject, setObject
            EL05330: '',
            EL05331: 'BaseEntity.transformSchema(oGuid); oGuid 는 스키마 객체가 아닙니다. oGuid = {columns: $1, rows: $2}',
            EL05332: 'BaseEntity.transformSchema(oGuid); 스키마 변환이 실패하였습니다.',
            EL05333: 'setValue(row); row 가 [MetaRow] 타입이 아닙니다.',
            EL05334: 'setValue(row); columns 에 row 설정이 실패하였습니다.',
            EL05335: 'select(filter, ...); MetaRegistry.namespace 에서 \'$1\' 가져오는데 싪패하였습니다.',
            EL05336: 'select(filter, ...); 조회가 실패하였습니다.',
            EL05337: 'clone() 은 추상메소드 입니다. 구현해야 합니다.',
            EL05338: 'validate(); 모든 컬럼이 MetaColumn 타입일 경우 유효성 검사를 수행할 수 있습니다. ',
            // merge, copy - 8
            EL05340: '',
            EL05341: 'merge(target, opt, isMath); target 이 [BaseEntity] 타입이 아닙니다.',
            EL05342: 'merge(target, opt, isMath); opt 이 \'number\' 타입이 아닙니다. typeof opt = $1',
            EL05343: 'merge(target, opt, isMath); opt = 1, target.columns[$1].name = \'$2\' 이 column name 에 존재합니다.',
            EL05344: 'merge(target, opt, isMath); opt = 1, target.columns[$1].name = \'$2\' 이 column alias 에 존재합니다.',
            EL05345: 'merge(target, opt, isMath); opt = 3, target.columns[$1].name = \'$2\' 이 columns name 에 존재합니다.',
            EL05346: 'merge(target, opt, isMath); opt = 3, target.columns[$1].name = \'$2\' 이 columns alias 에 존재합니다.',
            EL05347: 'merge(target, opt, isMath); 병합이 실패하였습니다. opt = $1',
            EL05348: 'copy() 은 추상메소드 입니다. 구현해야 합니다.',
            // load, read, readSchema, readDate - 12
            EL05350: '',
            EL05351: 'load(obj, parse); [BaseEntity] 타입의 obj 는 로드할 수 없습니다.',
            EL05352: 'load(obj, parse); obj 가 \'object\' 타입이 아닙니다.(null제외) typeof obj = $1',
            EL05353: 'load(obj, parse); 로드가 실패하였습니다.',
            EL05354: 'read(obj, opt); obj 가 \'object\' 타입이 아닙니다.(null제외) typeof obj = $1',
            EL05355: 'read(obj, opt); opt 이 \'number\' 타입이 아닙니다. typeof opt = $1',
            EL05356: 'read(obj, opt); opt 값은 범위(1 ~ 3)가 아닙니다. obj = $1',
            EL05357: 'read(obj, opt); 읽기가 실패하였습니다.',
            EL05358: 'readSchema(obj, isCreate, origin); obj 가 \'object\' 타입이 아닙니다.(null제외) typeof obj = $1',
            EL05359: 'readSchema(obj, isCreate, origin); obj 는 스키마 객체가 아닙니다. obj = {columns: $1, rows: $2}',
            EL0535A: 'readSchema(obj, isCreate, origin); 스카미 읽기가 실패하였습니다.',
            EL0535B: 'readData(obj); obj 가 \'object\' 타입이 아닙니다.(null제외) typeof obj = $1',
            EL0535C: 'readData(obj); obj 는 스키마 객체가 아닙니다. obj = {columns: $1, rows: $2}',
            EL0535D: 'readData(obj); 데이터 읽기가 실패하였습니다.',
            // output, write, writeSchema, writeData
            EL05360: '',
            EL05361: '',
            //
            EL05400: '',
            // MetaTable
            EL05410: '',
            EL05411: '$1.tableName 값은 \'string\' 타입이 아닙니다. typeof tableName = $2',
            EL05412: '$1.columns 값이 [MetaTableColumnCollection] 타입이 아닙니다.',
            EL05413: '$1.rows 존재하여 columns 을 설정할 수 없습니다. rows.count = $2',
            EL05414: 'setObject(oGuid, origin); oGuid.[\'_metaSet\'] guid 를 찾을 수 없습니다. guid = $1',
            // MetaTableColleciton
            EL05420: '',
            EL05421: '$1._baseType 값은 function 타입이 아닙니다. typeof _baseType = $2',
            EL05422: '$1._baseType [MetaTable]의 prototype 이 연결되어 있어야 합니다.(상속)',
            EL05423: 'add(any); any 는 \'string\' | [MetaTable] 타입만 가능합니다. typeof any = $1',
            EL05424: 'add(any); tableName = \'$1\'이 기존에 존재합니다.',
            // MetaView
            EL05430: '',
            EL05431: '$1.viewName 값은 \'string\' 타입이 아닙니다. typeof viewName = $2',
            EL05432: '$1.columns 값은 [MetaViewColumnCollection] 타입이 아닙니다.',
            EL05433: '$1.rows 존재하여 columns 을 설정할 수 없습니다. rows.count = $2',
            EL05434: '$1._baseEntity 값은 [BaseEntity] 타입이 아닙니다.',
            EL05435: 'setObject(oGuid, origin); oGuid.[\'_metaSet\'] guid 를 찾을 수 없습니다. guid = $1' ,
            EL05436: 'setObject(oGuid, origin); oGuid.[\'_baseEntity\'] guid 를 찾을 수 없습니다. guid = $1' ,
            // MetaViewColleciton
            EL05440: '',
            EL05441: '$1._baseType 값은 \'function\' 타입이 아닙니다. typeof _baseType = $2',
            EL05442: '$1._baseType [MetaView]의 prototype 이 연결되어 있어야 합니다.(상속)',
            EL05443: 'add(obj, baseEntity); [MetaView] 타입의 obj와  baseEntity 를 동시에 입력할 수 없습니다.',
            EL05444: 'add(obj, baseEntity); baseEntity 는 [BaseEntity] 타입이 아닙니다.',
            EL05445: 'add(obj, baseEntity); obj 는 \'string\' | [MetaView] 타입만 가능합니다. typeof obj = $1',
            EL05446: 'add(obj, baseEntity); viewName = \'$1\'이 기존에 존재합니다.',
            // MetaSet
            EL05450: '',
            EL05451: '$1.setName 값은 \'string\' 타입이 아닙니다. typeof setName = $2',
            EL05452: '$1.autoChanges 값은 \'boolean\' 타입이 아닙니다. typeof setName = $2',
            EL05453: 'MetaSet.transformSchema(oGuid); oGuid 는 스키마 객체가 아닙니다. oGuid = {tables: .., views: ..}',
            EL05454: 'load(obj, parse); [MetaSet] 타입의 obj 는 로드할 수 없습니다.',
            EL05455: 'load(obj, parse); obj 가 \'object\' 타입이 아닙니다.(null제외) typeof obj = $1',
            EL05456: 'read(obj, opt); obj 가 \'object\' 타입이 아닙니다.(null제외) typeof obj = $1',
            EL05457: 'read(obj, opt); opt 이 \'number\' 타입이 아닙니다. typeof opt = $1',
            EL05458: 'readSchema(obj, isCreate); obj 가 \'object\' 타입이 아닙니다.(null제외) typeof obj = $1',
            EL05459: 'readSchema(obj, isCreate); obj 는 스키마 객체가 아닙니다. obj = {tables: $1, views: $2}',
            EL0545A: 'readData(obj); obj 가 \'object\' 타입이 아닙니다.(null제외) typeof obj = $1',
            EL0545B: 'readData(obj); obj 는 스키마 객체가 아닙니다. obj = {tables: $1, views: $2}',
            // Warn
            WS011: '[$1] 대상 [$2]는 삭제 할 수 없습니다.',

        }
    };

    //==============================================================
    // 4. module export
    if (isNode) exports.messageCode = messageCode;    // strip:

    // create namespace
    _global._L                      = _global._L || {};
    _global._L.messageCode          = _global._L.message || {};

    _global._L.messageCode.entity   = messageCode;

}(typeof window !== 'undefined' ? window : global));