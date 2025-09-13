/**** code-rule-registry.js | MetaRegistry ****/
//==============================================================
// import Message from './message.js';    
import ExtendError          from './extend-error.js';    
import Util                 from './util.js';
import NamespaceManager     from './namespace-manager.js';
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

    // var define
    var 
    // var _list = [];
    // var namespace = new CodeRuleRegistry();
    var _storage = new PropertyCollection();

    /**
     * List of meta objects.  
     * 
     * @member {any[]} CodeRuleRegistry#_list
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
     * Total number of currently registered meta objects.  
     * 
     * @member {number} MetaRegistry#count
     * @readonly
     */
    Object.defineProperty(MetaRegistry, 'count', {
        get: function() { return _storage.count(); },
        configurable: false,
        enumerable: true,
    });        

    // /**
    //  * Namespace manager for meta objects.  
    //  * 
    //  * @member {NamespaceManager} MetaRegistry#instance
    //  * @readonly
    //  */
    // Object.defineProperty(MetaRegistry, 'instance', {
    //     get: function() { return namespace; },
    //     configurable: false,
    //     enumerable: true,
    // });

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
     * Initializes registered meta objects and namespaces.  
     */
    CodeRuleRegistry.init = function() {
        _storage.clear();
    };

    /**
     * Register the meta object and register the creator in the namespace.  
     * An exception occurs if an object is already registered.   
     * Register if there is no creator in the Namespace.  
     * 
     * @param {MetaObject} p_meta Meta object to register
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
            throw new ExtendError(/EL03210/, null, [typeof p_ns]);  // TODO:
        }
        if (!_isObject(p_rules) || !(p_rules instanceof Array)) {
            throw new ExtendError(/EL04323/, null, [typeof p_rules]); // TODO:
        }
        _storage.add(p_ns, p_rules);
    };

    CodeRuleRegistry.release = function(p_ns) {
        if (!_isString(p_ns)) return false;
        var idx = _storage.keyToIndex(p_ns);
        if (idx < 0) return false;
        _storage.removeAt(idx);
        return true;
    };


    CodeRuleRegistry.has = function(p_ns) {
        if (!_isString(p_ns)) return false;
        return _storage.keyToIndex(p_ns) >= 0;
    };
    

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