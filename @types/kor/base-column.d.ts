import MetaElemet           = require("logic-core/meta-element");

declare class BaseColumn extends MetaElemet {

    /**
     * 컬럼 컬렉션의 키
     */
    __key: string;
}

export = BaseColumn;