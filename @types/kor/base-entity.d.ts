import MetaElemet           = require("logic-core/meta-element");
import IGroupControl        = require("./i-control-group");
import IExportControl       = require("./i-control-export");
import IImportControl       = require("./i-control-import");
import ISchemaControl       = require("./i-control-schema");
import ISerialize           = require("logic-core/i-serialize");

declare class BaseEntity extends MetaElemet 
    // implements IGroupControl, IExportControl, IImportControl, ISchemaControl, ISerialize {
{

}

export = BaseEntity;