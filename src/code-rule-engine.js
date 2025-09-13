/**** code-rule-engine.js | CodeRuleEngine ****/
//==============================================================
import { ExtendError }              from 'logic-core';
import { MetaObject }               from 'logic-core';
import { Util }                 from 'logic-core';

// import { ArrayCollection }          from 'logic-core';

var CodeRuleEngine  = (function (_super) {
    /**
     * 코드 규칙 엔진
     * 
     * @constructs CodeRuleEngine
     * @param {ArrayCollection} p_collection 배열컬렉션
     */
    function CodeRuleEngine(p_collection) {

        // var rules = [];
        // var collection;

        // /**
        //  * 규칙
        //  * 
        //  * @readonly
        //  * @member {array<object>} CodeRuleEngine#rules
        //  */
        // Object.defineProperty(this, 'rules', {
        //     get: function() { return rules; },
        //     configurable: false,
        //     enumerable: true
        // });
        
        // /**
        //  * 대상 컬랙션
        //  * 
        //  * @member {Number} TransactionQueue#count 
        //  */
        // Object.defineProperty(this, 'collection', {
        //     get: function() { return collection; },
        //     set: function(nVal) { 
        //         if (!(nVal instanceof MetaObject)) {
        //             throw new ExtendError(/EL04321/, null, []);
        //         }
        //         if (!(nVal.instanceOf(ArrayCollection))) {
        //             throw new ExtendError(/EL04322/, null, []);
        //         }
        //         collection = nVal;
        //     },
        //     configurable: false,
        //     enumerable: true
        // });

        // this.collection = p_collection;
    }
    Util.inherits(MetaObject, _super);


    CodeRuleEngine._NS = 'Meta.Entity';    // namespace
    CodeRuleEngine._PARAMS = ['_owner'];  // creator parameter

    CodeRuleEngine.prototype.describe = function (codeRule, value) {
        if (!codeRule) return null;

        // 네임스페이스 문자열
        if (typeof codeRule === 'string') {
        var rules = CodeRuleRegistry.instance().get(codeRule);
        return this._applyRules(rules, value);
        }
        // 규칙 배열
        if (Object.prototype.toString.call(codeRule) === '[object Array]') {
        return this._applyRules(codeRule, value);
        }
        // 단일 규칙 객체
        if (this._isRuleObject(codeRule)) {
        return this._applyRule(codeRule, value);
        }
        return null;
    };

    CodeRuleEngine.prototype._applyRules = function (rules, value) {
        if (!rules || Object.prototype.toString.call(rules) !== '[object Array]') return null;
        for (var i = 0; i < rules.length; i++) {
        var out = this._applyRule(rules[i], value);
        if (out != null) return out; // 첫 매칭
        }
        return null;
    };

    CodeRuleEngine.prototype._applyRule = function (rule, value) {
        if (!this._isRuleObject(rule)) return null;
        var m = rule.match;

        // 문자열/숫자 정확 일치
        if (typeof m === 'string' || typeof m === 'number') {
        return String(value) === String(m) ? String(rule.desc) : null;
        }

        // 정규식 매칭 + 캡처 치환
        if (m instanceof RegExp) {
        var s = String(value);
        var match = s.match(m);
        if (!match) return null;
        return String(rule.desc).replace(/\$\{(\d+)\}/g, function (_, g) {
            var idx = parseInt(g, 10);
            return match[idx] != null ? String(match[idx]) : '';
        });
        }

        return null;
    };

    CodeRuleEngine.prototype._isRuleObject = function (o) {
        return o && typeof o === 'object' &&
            Object.prototype.hasOwnProperty.call(o, 'match') &&
            Object.prototype.hasOwnProperty.call(o, 'desc');
    };

    // /**
    //  * 문자열/숫자 규칙만 수집하여 [{ value, label }] 반환
    //  * @param {Object} opts
    //  *   - dedupe {boolean}: 중복 제거 (기본 true)
    //  *   - includeEmpty {boolean}: 첫 옵션 빈 값 추가 (기본 false)
    //  *   - emptyLabel {string}: 빈 값 라벨 (기본 '선택')
    //  */
    // CodeRuleEngine.prototype.getCodeList = function (opts) {
    //     opts = opts || {};
    //     var dedupe = (typeof opts.dedupe === 'boolean') ? opts.dedupe : true;
    //     var includeEmpty = !!opts.includeEmpty;
    //     var emptyLabel = (typeof opts.emptyLabel === 'string') ? opts.emptyLabel : '선택';

    //     var rules = this._resolveRules();
    //     var out = [];

    //     if (includeEmpty) out.push({ value: '', label: emptyLabel });
    //     if (!rules) return out;

    //     var seen = {};
    //     for (var i = 0; i < rules.length; i++) {
    //     var r = rules[i];
    //     if (!r || typeof r !== 'object') continue;
    //     var m = r.match;
    //     if (typeof m === 'string' || typeof m === 'number') {
    //         var v = String(m);
    //         if (dedupe && seen[v]) continue;
    //         seen[v] = true;
    //         out.push({ value: v, label: String(r.desc) });
    //     }
    //     // RegExp 규칙은 옵션 후보에서 제외(명세)
    //     }
    //     return out;
    // };

    // CodeRuleEngine.prototype._resolveRules = function () {
    //     if (!this.codeRule) return null;

    //     if (typeof this.codeRule === 'string') {
    //     return CodeRuleRegistry.instance().get(this.codeRule);
    //     }
    //     if (Object.prototype.toString.call(this.codeRule) === '[object Array]') {
    //     return this.codeRule;
    //     }
    //     if (this.codeRule && typeof this.codeRule === 'object' &&
    //         Object.prototype.hasOwnProperty.call(this.codeRule, 'match') &&
    //         Object.prototype.hasOwnProperty.call(this.codeRule, 'desc')) {
    //     return [ this.codeRule ];
    //     }
    //     return null;
    // };


    return CodeRuleEngine;

}(MetaObject));

export default CodeRuleEngine;
export { CodeRuleEngine };