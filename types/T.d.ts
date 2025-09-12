// export interface PropertyDescriptor {
//     configurable?: boolean;
//     enumerable?: boolean;
//     value?: any;
//     writable?: boolean;
//     get?(): any;
//     set?(v: any): void;
// }
// export type OnFunc = (idx: number, elem: any, _this: object)=> void;

// export type Iprop = {[key: string]: string}

// export type RefObject = { $ref: string /** 2333-234234-... */ };

// export type NsObject = { $ns: string /** Meta.MetaObject */ };

// export type SetObject = { $set: string/** guid */};

// export type NsTypeObject = { _type: 'ns' };

// export type PathObject = { ns: string, key: string };

// export interface MessageObject {
//     /** 메세지 */
//     msg: string;

//     /** 긴 메세지 */
//     long: string;
// }

// declare type ValueType = string | number | boolean;

// export {};

import type { MetaObject }      from "logic-core";

/**
* Type of MetaObject class.
*/
export type MetaObjectType = InstanceType<typeof MetaObject>;

/** Meta column type */
type MetaColumn = {
    /** Unique key for column. */
    _guid?: string,
    /** Default: */
    default?: string | number | boolean,
    /** Description. */
    label?: string,
    /** Required. */
    required?: boolean,
    /** Constraints. */
    constraints?: {
        [key: string]: {
            [key: string]: any
        }
    },
    getter?: (v: any) => any,
    setter?: (v: any) => any,
    /** Alias. */
    alias?: string,
    /** Column value. */
    value?: any,
};

/** Stama conversion type */
export type EnititySchema = {
    /** Unique key of the stama conversion type. */
    _guid?: string,
    /** Unique key for the default entity. */
    _baseEntity?: string,
    /** Column information. */
    columns: {
        [key: string]: MetaColumn
    },
    /** Raw information. */
    rows: {
        [key: number]: {
            [key: string]: ValueType
        }
    }
};

export type ValueType = string | number | boolean;
