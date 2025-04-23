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

/** 메타 컬럼 타입 */
type MetaColumn = {
    /** 컬럼의 고유 키입니다. */
    _guid?: string,
    /** 기본값 입니다. */
    default?: string | number | boolean,
    /** 설명입니다. */
    caption?: string,
    /** 필수 여부입니다. */
    required?: boolean,
    /** 제약조건 입니다. */
    constraints?: {
        [key: string]: {
            [key: string]: any
        }
    },
    getter?: (v: any) => any,
    setter?: (v: any) => any,
    /** 별칭입니다. */
    alias?: string,
    /** 컬럼값 입니다. */
    value?: any,
};

/** 스타마 변환 타입 */
export type EnititySchema = {
    /** 스타마 변환 타입의 고유 키입니다. */
    _guid?: string,
    /** 기본 엔티티의 고유 키입니다. */
    _baseEntity?: string,
    /** 컬럼 정보입니다. */
    columns: {
        [key: string]: MetaColumn
    },
    /** 로우 정보입니다. */
    rows: {
        [key: number]: {
            [key: string]: ValueType
        }
    }
};

export type ValueType = string | number | boolean;
