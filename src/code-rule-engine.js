/**** code-rule-engine.js | CodeRuleEngine ****/
//==============================================================
import { ExtendError }              from 'logic-core';
import { MetaObject }               from 'logic-core';
// import { ArrayCollection }          from 'logic-core';

var CodeRuleEngine  = (function () {
    /**
     * 코드 규칙 엔진
     * 
     * @constructs CodeRuleEngine
     * @param {ArrayCollection} p_collection 배열컬렉션
     */
    function CodeRuleEngine(p_collection) {

        var rules = [];
        var collection;

        /**
         * 규칙
         * 
         * @readonly
         * @member {array<object>} CodeRuleEngine#rules
         */
        Object.defineProperty(this, 'rules', {
            get: function() { return rules; },
            configurable: false,
            enumerable: true
        });
        
        /**
         * 대상 컬랙션
         * 
         * @member {Number} TransactionQueue#count 
         */
        Object.defineProperty(this, 'collection', {
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

    CodeRuleEngine._NS = 'Meta.Entity';    // namespace
    CodeRuleEngine._PARAMS = ['_owner'];  // creator parameter




    return CodeRuleEngine;

}());

export default CodeRuleEngine;
export { CodeRuleEngine };