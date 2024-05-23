/**** trans-queue.js | _L.Collection.TransactionQueue ****/
(function(_global) {
    'use strict';

    var isNode = typeof window !== 'undefined' ? false : true;

    //==============================================================
    // 1. namespace declaration
    _global._L                      = _global._L || {};
    _global._L.Collection           = _global._L.Collection || {};

    //==============================================================
    // 2. import module
    if (isNode) {                                                                   // strip:
        var _Message                    = require('logic-core').Message;            // strip:
        var _ExtendError                = require('logic-core').ExtendError;        // strip:
        var _Util                       = require('logic-core').Util;               // strip:
        var _MetaObject                 = require('logic-core').MetaObject;         // strip:
        var _ArrayCollection            = require('logic-core').ArrayCollection;    // strip:
    }                                                                               // strip:
    var $Message                    = _global._L.Message;               // modify:
    var $ExtendError                = _global._L.ExtendError;           // modify:
    var $Util                       = _global._L.Util;                  // modify:
    var $MetaObject                 = _global._L.MetaObject;            // modify:
    var $ArrayCollection            = _global._L.ArrayCollection;       // modify:

    var Message                 = _Message              || $Message;                // strip:
    var ExtendError             = _ExtendError          || $ExtendError;            // strip:
    var Util                    = _Util                 || $Util;                   // strip:
    var MetaObject              = _MetaObject           || $MetaObject;             // strip:
    var ArrayCollection         = _ArrayCollection      || $ArrayCollection;        // strip:

    //==============================================================
    // 3. module dependency check
    if (typeof ExtendError === 'undefined') throw new Error(Message.get('ES011', ['ExtendError', 'extend-error']));
    if (typeof Util === 'undefined') throw new Error(Message.get('ES011', ['Util', 'util']));
    if (typeof ArrayCollection === 'undefined') throw new Error(Message.get('ES011', ['ArrayCollection', 'i-collection-array']));
    if (typeof MetaObject === 'undefined') throw new Error(Message.get('ES011', ['MetaObject', 'meta-object']));

    //==============================================================
    // 4. module implementation   
    var TransactionQueue  = (function () {
        /**
         * 트랜젝션 큐
         * @constructs _L.Collection.TransactionQueue
         * @param {ArrayCollection} p_collection 배열컬렉션
         */
        function TransactionQueue(p_collection) {
            
            var queue = [];
            var collection;

            /**
             * 큐 목록
             * @readonly
             * @member {array<object>} _L.Collection.TransactionQueue#queue
             */
            Object.defineProperty(this, 'queue', 
            {
                get: function() { return queue; },
                configurable: false,
                enumerable: true
            });
            
            /**
             * 대상 컬랙션
             * @member {Number} _L.Collection.TransactionQueue#count 
             */
            Object.defineProperty(this, 'collection', 
            {
                get: function() { return collection; },
                set: function(nVal) { 
                    if (!(nVal instanceof MetaObject)) {
                        throw new ExtendError(/EL04321/, null, []);
                    }
                    if (!(nVal.instanceOf(ArrayCollection))) {
                        throw new ExtendError(/EL04322/, null, []);
                    }
                    collection = nVal;
                },
                configurable: false,
                enumerable: true
            });

            this.collection = p_collection;
        }

        TransactionQueue._NS = 'Collection';    // namespace
        TransactionQueue._PARAMS = ['_owner'];  // creator parameter

        /**
         * 초기화
         */
        TransactionQueue.prototype.init  = function() {
            this.queue.length = 0;
        };

        /**
         * 커밋
         */
        TransactionQueue.prototype.commit  = function() {
            this.init();
        };

        /**
         * 롤백
         */
        TransactionQueue.prototype.rollback  = function() {
            var pos, obj;
            
            for (var i = this.queue.length - 1; i >= 0; i--) {
                obj = this.queue[i];
                if(obj.cmd === 'I') {
                    // pos = this.collection.indexOf(obj.ref);
                    pos = obj.pos;
                    this.collection.removeAt(pos);
                } else if(obj.cmd === 'D') {
                    pos = obj.pos;
                    this.collection.insertAt(pos, obj.clone);
                } else if(obj.cmd === 'U') {
                    // pos = this.collection.indexOf(obj.ref);
                    pos = obj.pos;
                    this.collection.removeAt(pos);
                    this.collection.insertAt(pos, obj.clone);
                } else throw new ExtendError(/EL04323/, null, [obj.cmd]);
            }
            this.init();
        };

        /**
         * 추가
         * @param {number} p_pos 위치
         * @param {object} p_target 대상
         * @param {string} p_etc 기타
         */
        TransactionQueue.prototype.insert  = function(p_pos, p_target, p_etc) {
            this.queue.push({
                cmd: 'I',
                pos: p_pos,
                ref: p_target,
                clone: null,
                etc: p_etc || ''
            });
        };
        
        /**
         * 삭제
         * @param {number} p_pos 위치
         * @param {object} p_clone 복제한 객체
         * @param {string} p_etc 기타
         */
        TransactionQueue.prototype.delete  = function(p_pos, p_clone, p_etc) {
            this.queue.push({
                cmd: 'D',
                pos: p_pos,
                ref: null,
                clone: p_clone,
                etc: p_etc || ''
            });
        };

        /**
         * 수정
         * @param {number} p_pos 위치
         * @param {object} p_target 대상
         * @param {object} p_clone 복제한 객체
         * @param {string} p_etc 기타
         */
        TransactionQueue.prototype.update  = function(p_pos, p_target, p_clone, p_etc) {
            this.queue.push({
                cmd: 'U',
                pos: p_pos,
                ref: p_target,
                clone: p_clone,
                etc: p_etc || ''
            });
        };
        
        /**
         * 변경 내역 조회
         * @returns {array<object>}
         */
        TransactionQueue.prototype.select  = function() {
            return this.queue;
        };

        return TransactionQueue;
    
    }());
    
    //==============================================================
    // 5. module export
    if (isNode) exports.TransactionQueue = TransactionQueue;    // strip:
        
    _global._L.TransactionQueue = TransactionQueue;
    _global._L.Collection.TransactionQueue = TransactionQueue;

}(typeof window !== 'undefined' ? window : global));