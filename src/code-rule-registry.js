/**** code-rule-registry.js | MetaRegistry ****/
//==============================================================
// import Message from './message.js';    
import { ExtendError }          from 'logic-core';
// import Util                 from './util.js';
import { PropertyCollection } from 'logic-core';

var CodeRuleRegistry = (function () {
    /**
     * 'CodeRuleRegistry' is a class responsible for registering and managing code rules.
     *
     * @constructs CodeRuleRegistry
     * @static
     */
    function CodeRuleRegistry() { 
    }
    CodeRuleRegistry._NS = 'Meta.Entity';    // namespace

    var _storage = new PropertyCollection();

    /**
     * Internal storage for registered meta objects.  
     * 
     * @member {PropertyCollection} CodeRuleRegistry#_storage
     * @readonly
     */
    Object.defineProperty(CodeRuleRegistry, '_storage', {
        get: function() { 
            return _storage;
        },
        configurable: false,
        enumerable: true,
    });

    /**
     * Number of registered meta objects.  
     * 
     * @member {Number} CodeRuleRegistry#count
     * @readonly
     */
    Object.defineProperty(CodeRuleRegistry, 'count', {
        get: function() { return _storage.count(); },
        configurable: false,
        enumerable: true,
    });

    // local function
    function _isObject(obj) {    // 객체 여부
        if (typeof obj === 'object' && obj !== null) return true;
        return false;
    }

    function _isString(obj) {    // 공백아닌 문자 여부
        if (typeof obj === 'string' && obj.length > 0) return true;
        return false;
    }

    /**
     * initialize the registry by clearing all registered code rules.
     */
    CodeRuleRegistry.init = function() {
        _storage.clear();
    };

    /**
     * Register code rules in the registry.
     * @param {*} p_ns Namespace string or an object containing multiple namespace-rule pairs.
     * @param {*} p_rules Array of code rules if p_ns is a string.
     * @returns 
     */
    CodeRuleRegistry.register = function(p_ns, p_rules) {

        if (_isObject(p_ns)) {
            for (var key in p_ns) {
                if (p_ns.hasOwnProperty(key)) {
                    this.register(key, p_ns[key]);
                }
            }
            return;
        }

        if (!_isString(p_ns)) {
            throw new ExtendError(/EL05461/, null, [typeof p_ns]);
        }
        if (!_isObject(p_rules) || !(p_rules instanceof Array)) {
            throw new ExtendError(/EL05462/, null, [typeof p_rules]);
        }
        _storage.add(p_ns, p_rules);
    };

    /**
     * Release code rules from the registry.
     * @param {*} p_ns Namespace string to release.
     * @returns {Boolean} True if the namespace was found and released, false otherwise.
     */
    CodeRuleRegistry.release = function(p_ns) {
        if (!_isString(p_ns)) return false;
        var idx = _storage.keyToIndex(p_ns);
        if (idx < 0) return false;
        _storage.removeAt(idx);
        return true;
    };


    /**
     * Check if a namespace is registered.
     * @param {*} p_ns Namespace string to check.
     * @returns {Boolean} True if the namespace is registered, false otherwise.
     */
    CodeRuleRegistry.has = function(p_ns) {
        if (!_isString(p_ns)) return false;
        return _storage.keyToIndex(p_ns) >= 0;
    };
    

    /**
     * Find code rules by namespace.
     * @param {*} p_ns Namespace string to find.
     * @returns {Array|undefined} Array of code rules if found, undefined otherwise.
     */
    CodeRuleRegistry.find = function(p_ns) {
        if (!_isString(p_ns)) return undefined;
        var idx = _storage.keyToIndex(p_ns);
        if (idx < 0) return undefined;
        return _storage[idx];
    };

    return CodeRuleRegistry;
}());

export default CodeRuleRegistry;
export { CodeRuleRegistry };