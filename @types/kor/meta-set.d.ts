import MetaElemet           = require("logic-core/meta-element");
import ISerialize           = require("logic-core/i-serialize");
import ISchemaControl       = require("./i-control-schema");
import IExportControl       = require("./i-control-export");
import IImportControl       = require("./i-control-import");
import ITransaction         = require("./i-transaction");

declare class MetaSet extends MetaElemet 
    // implements ISerialize, ISchemaControl, IExportControl, IImportControl, ITransaction {
{
}

export = MetaSet;