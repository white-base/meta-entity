/*! Logic Core v1.0.1 Copyright (c) 2025  and contributors */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global._L = {}));
})(this, (function (exports) { 'use strict';

  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t, "prototype", {
      writable: false
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: true
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = false, next;
              return next.value = t, next.done = true, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = true;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  var ES010 = "Other errors";
  var ES011 = "Failed to get module ['$1']";
  var ES012 = "Failed to get function ['$1'()";
  var ES013 = "[$1] failed to process [$2]";
  var ES021 = "[$1] can only be of type [$2]";
  var ES022 = "[$1] is an unprocessable typo";
  var ES023 = "[$1] is not type [$2]";
  var ES031 = "[$1] is not an object";
  var ES032 = "[$1] is not an instance of [$2]";
  var ES033 = "The object in [$1] is different from [$2]";
  var ES041 = "[$1] is duplicated with [$2]";
  var ES042 = "[$2] exists in [$1] and cannot measure [$3]";
  var ES043 = "[$1] cannot be added because [$1] exists in [$1] ";
  var ES044 = "[$1] is a reserved word ";
  var ES051 = "Required value [$1] not found";
  var ES052 = "[$1] requires [$2]";
  var ES053 = "[$2] does not exist in [$1]";
  var ES054 = "[$1] cannot be blanked";
  var ES061 = "Exceeded the range [$2] of [$1]";
  var ES062 = "[$1] cannot be less than [$2]";
  var ES063 = "[$1] and [$2] have different lengths";
  var ES064 = "and(&) condition check failed. $1";
  var ES065 = "Or(|) condition check failed. $1";
  var ES066 = "[$1] ranges from [$2] to [$3]";
  var EL01100 = "----- util-type.js match -----";
  var EL01101 = "Type match: You must specify a detailed type of $1.$1: $2";
  var EL01102 = "Type match : target is not type '$1'. tarType : $2";
  var EL01103 = "Type match: cannot handle type";
  var EL01110 = "----- match array -----";
  var EL01111 = "Array match: target is not array type. tarType: $1";
  var EL01112 = "Array match : array(_ANY_) type must have at least one element of target array. target.length = $1";
  var EL01113 = "Array match: target array is less than array(_SEQ_) type length. extType.length = $1, target.length = $2";
  var EL01114 = "Array match: array(_SEQ_) [$1]th literal type is different from target value. extType[$1] = $2, target[$1] = $3";
  var EL01115 = "Array match: array(_SEQ_) [$1]th type check failed. extType[$1] = $2";
  var EL01116 = "Array match : array(_REQ_) type must have at least one element of target array. target.length = $1";
  var EL01117 = "Array match : array($1) is the type of array that cannot be handled";
  var EL01118 = "Array match: array element check failed. extType: $1, tarType: $2";
  var EL01120 = "----- match choice -----";
  var EL01121 = "Choice match: 'undefined' is not available for choice(_ANY_) type";
  var EL01122 = "Choice match: 'undefined' only for choice(_NON_) type";
  var EL01123 = "Choice match: Error instance only for choice(_ERR_) type";
  var EL01124 = "Choice match: choice(_EUM_) type details can only be literal. extType[$1]: $2";
  var EL01125 = "Choice match: the first subtype of choice(_DEF_) type is literal only. extType[0]: $1";
  var EL01126 = "Choice match : choice($1) is a type of choice that cannot be handled";
  var EL01127 = "Choice match: choice detailed type check failed. extType: $1, tarType: $2";
  var EL01130 = "----- match class -----";
  var EL01131 = "Class match: Inspection failed after creating class type as union type (opt = 1)";
  var EL01132 = "Class match: target is not an instance of [$1]";
  var EL01133 = "Class match: target is not class, object, or union type. tarType: $1";
  var EL01140 = "----- match union -----";
  var EL01141 = "Union match: target is not union type. tarType: $1";
  var EL01142 = "Union match: target['$1'] key does not exist. extType['$1'] = $2";
  var EL01143 = "Union match: '$1' type check failed";
  var EL01150 = "----- match function -----";
  var EL01151 = "Function match: target is not function type. tarType: $1";
  var EL01152 = "Function match: declared extType.name = '$1' and target name do not match: function.name = '$2'";
  var EL01153 = "Function match : declared extType.func, target.func is not function type";
  var EL01154 = "Function match: extType.func and target.func are different (proto check)";
  var EL01155 = "Function match: You must set the params or return object of the target. extType.param = $1, extType.return = $2";
  var EL01156 = "Function match: params acceptance test denied. <array(_SEQ_) conversion>";
  var EL01157 = "Function Match: Return Acceptance Test Denied";
  var EL01200 = "----- allow -----";
  var EL01201 = "Type allowed: You must specify a subtype of $1.$1: $2";
  var EL01202 = "Type allowed: different from type 1 literal value. extType = $2, tarType = $3";
  var EL01203 = "Type allowed: not type $1. tarType = $2";
  var EL01204 = "Type allowed: type not processable";
  var EL01210 = "----- allow array -----";
  var EL01211 = "Array permit: Not array type. tarType: $1";
  var EL01212 = "Type allowed: array(_ALL_, _OPT_) type is not allowed for array(_ANY_) type. tarType: $1";
  var EL01213 = "Allow array: Only array(_SEQ_) type is allowed for array(_SEQ_) type. tarType: $1";
  var EL01214 = "Array permit: tarType must be equal to or greater than the length of array(_SEQ_) type of extType.length = $1, target.length = $2";
  var EL01215 = "Array Allowance: array(_SEQ_) [$1]th type check failed";
  var EL01216 = "Allow array : Do not allow array(_ALL_, _ANY_, _OPT_) type for array(_REQ_). tarType: $2";
  var EL01217 = "Allow array: Do not allow array(_ALL_, _ANY_) type for array(_OPT_). tarType: $2";
  var EL01218 = "Allow array : array($1) is the type of array that cannot be handled";
  var EL01219 = "Array element check failed. extType: $1, tarType: $2";
  var EL01220 = "----- allow choice -----";
  var EL01221 = "Choice allowed: do not allow choice(_ERR_) type for choice(_ALL_). tarType: $1";
  var EL01222 = "Choice allowed: 'undefined' type is not allowed for choice(_ANY_) type";
  var EL01223 = "Choice allowed: choice(_NON_, _ERR_) type is not allowed for choice(_ANY_) type. tarType: $1";
  var EL01224 = "Choice allowed: only choice(_NON_) type and choice(_NON_) type. tarType: $1";
  var EL01225 = "Choice allowed: choice(_ERR_) type and choice(_ERR_) type only. tarType: $1";
  var EL01226 = "Choice allowed: do not allow choice(_ALL_, _ANY_, _OPT_, _NON_, _ERR_) type for choice(_REQ_). tarType: $1";
  var EL01227 = "Choice allowed: do not allow choice(_ALL_, _ANY_, _NON_, _ERR_) type for choice(_OPT_). tarType: $1";
  var EL01228 = "Choice allowed: choice(_EUM_) type and choice(_EUM_) type only";
  var EL01229 = "Choice allowed: choice(_EUM_) subtype can only be literal. extType[$1]: $2";
  var EL0122A = "Choice allowed: the subtype of tarType choice(_EUM_) can only be literal. tarType[$1]: $2";
  var EL0122B = "Choice allowed: choice(_DEF_) type and choice(_DEF_) type only";
  var EL0122C = "Choice allowed: the first subtype of extType choice(_DEF_) is literal only. extType[0]: $1";
  var EL0122D = "Choice allowed: the first subtype of tarType choice(_DEF_) is literal only. tarType[0]: $1";
  var EL0122E = "Choice allowed: choice($1) is a type of choice that cannot be handled";
  var EL0122F = "Choice allowed: tarType[$1] = $3, no extType allowed. extType = $2";
  var EL01230 = "----- allow class -----";
  var EL01231 = "Class allowed: ExtType, tarType class failed after creating a union type. (opt = 1)";
  var EL01232 = "Class allowed: class to class denied. (opt = $1)";
  var EL01233 = "Class allowed: Inspection failed after creating tarType class type as union type (opt = 1)";
  var EL01234 = "Class allowed: class to union denied. (opt = $1)";
  var EL01235 = "Class allowed: tarType is not class, union type. tarType: $1";
  var EL01240 = "----- allow union -----";
  var EL01241 = "Union allowed: tarType is not a union type. tarType: $1";
  var EL01242 = "Union allowed: tarType['$1'] key does not exist. extType['$1'] = $2";
  var EL01243 = "Union allowed: Type '$1' check failed";
  var EL01250 = "----- allow function -----";
  var EL01251 = "Allow function : tarType is not function type. tarType : $1";
  var EL01252 = "Function allowed: declared extType.name = '$1' and target name do not match: function.name = '$2'";
  var EL01253 = "Function allowed: declared extType.func, target.func is not of function type";
  var EL01254 = "Function allowed: extType.func and target.func are different (proto check)";
  var EL01255 = "Function permit: params or return object of tarType must be set. extType.param = $1, extType.return = $2";
  var EL01256 = "Function permit: params permit test denied. <array(_SEQ_) conversion>";
  var EL01257 = "Function Permitted: Return Permitted Test Denied";
  var EL01300 = "----- util-type.js -----";
  var EL01301 = "Parcing check: function is not a rule: '$1'";
  var EL01302 = "Parcing inspection: function has no argument, body content. '$1'";
  var EL01303 = "Parcing inspection: function parsing failed $1";
  var EL01304 = "Type check: [$1] is a special type to handle";
  var EL01305 = "Type check: array($1) type is a specular type that cannot be handled";
  var EL01306 = "Type check: choice($1) type is a special type that cannot be handled";
  var EL01307 = "Type check: array($1) type is a type that cannot be handled";
  var EL01308 = "Type check: choice($1) type is a type that cannot be handled";
  var EL01309 = "REVIEW:";
  var EL0130A = "Type allowed: allowType (extType, tarType) scan failed";
  var EL0130B = "Type match: matchtype (extType, target) check failed";
  var EL0130C = "ctor is not function type. type aperture = $1";
  var EL01400 = "----- util.js -----";
  var EL01401 = "implements(ctor, obj, args..); ctor is not of type <function> == '$1'";
  var EL01402 = "implements(ctor, obj, args..); obj is not of type <object> type of obj == '$1'";
  var EL01403 = "implements(ctor, obj, args..); args[$1] is not type <function>. type of args[$1] == '$2'";
  var EL01404 = "[$1] must implement type [$2]. $1._KIND = '$3'";
  var EL01405 = "isImplementOf(target); target is of type <function, string> only. type of target = '$1'";
  var EL01500 = "----- etc -----";
  var EL01501 = "$1.$events is obejct type. type of $events $2";
  var EL01502 = "$1.isLog is boolean type. type isLog $2";
  var EL01503 = "on(event, listener); event is not of type <string> type of event == '$1'";
  var EL01504 = "on(event, listener); listener is not of type <function> type of listener == '$1'";
  var EL01505 = "once(event, listener); event is not of string type. typeof event == '$1'";
  var EL01506 = "once(event, listener); listener 는 <function> 타입이 아닙니다. typeof listener == '$1'";
  var EL01507 = "off(event, listener); event is not of type <string> type of event == '$1'";
  var EL01508 = "off(event, listener); listener 는 <function> 타입이 아닙니다. typeof listener == '$1'";
  var EL01509 = "emit(event); event is not of type <string> type of event == '$1'";
  var EL01510 = "";
  var EL02100 = "----- Interface.* -----";
  var EL02110 = "----- i-object.js -----";
  var EL02111 = "getType(): array<function> is an abstract method. [$1] must be implemented";
  var EL02112 = "instanceOf(any): boolean is an abstract method. [$1] must be implemented";
  var EL02113 = "equal(any): boolena is an abstract method. [$1] must be implemented";
  var EL02120 = "----- i-marshal.js -----";
  var EL02121 = "getObject(opt?, origin?) : object is abstract method. [$1] must be implemented";
  var EL02122 = "setObject(mObj) is an abstract method. [$1] must be implemented";
  var EL02130 = "----- i-element.js -----";
  var EL02131 = "clone(): object is an abstract method. [$1] must be implemented";
  var EL02140 = "----- i-list.js -----";
  var EL02150 = "----- i-control-list.js -----";
  var EL02151 = "add(key) is an abstract method. [$1] must be implemented";
  var EL02152 = "del(key) is an abstract method. [$1] must be implemented";
  var EL02153 = "has(key): boolean is an abstract method. [$1] must be implemented";
  var EL02154 = "find(any): any is an abstract method. [$1] must be implemented";
  var EL02160 = "----- i-collection.js -----";
  var EL02161 = "add(any): boolean is an abstract method. [$1] must be implemented";
  var EL02162 = "remove(elem): boolean is an abstract method. [$1] must be implemented";
  var EL02163 = "cantains(any): boolean is an abstract method. [$1] must be implemented";
  var EL02164 = "indexOf(any): number is an abstract method. [$1] must be implemented";
  var EL02170 = "----- i-collection-array.js -----";
  var EL02171 = "insertAt(pos, val, ..): boolean is an abstract method. [$1] must be implemented";
  var EL02180 = "----- i-collection-property.js -----";
  var EL02181 = "indexToKey(idx): string is an abstract method. [$1] must be implemented";
  var EL02190 = "----- i-serialize.js -----";
  var EL02191 = "output(opt, ...): string is an abstract method. [$1] must be implemented";
  var EL02192 = "load(any, ...) is an abstract method. [$1] must be implemented";
  var EL02300 = "----- Meta.Entity.* -----";
  var EL03100 = "----- Meta.* -----";
  var EL03110 = "----- meta-object.js -----";
  var EL03111 = "You cannot create abstract, interface, enum type. $1['_KIND'] = '$2'";
  var EL03112 = "setObject(oGuid, origin); oGuid 는 'object' 타입입니다. typeof oGuid = '$1'";
  var EL03113 = "setObject(oGuid, origin); different namespaces. this._type = $1, oGuid._type = $2";
  var EL03114 = "setObject(oGuid, origin); origin 은 Guid 객체가 아닙니다. origin._type = '$1', origin._guid = '$2'";
  var EL03120 = "----- meta-element.js -----";
  var EL03121 = "$name;val is of type 'string'. type of valve = '$1'";
  var EL03122 = "$name; val.length must be greater than 0";
  var EL03200 = "----- meta-registry.js -----";
  var EL03211 = "register(meta); the meta to register is not a Guide object. meta._type = '$1', meta._guid = '$2'";
  var EL03212 = "register(meta); meta._guid to register is already registered. meta._guid = '$1'";
  var EL03213 = "release(meta); the meta to release is string(guid) | object(guid) type only. type of meta = '$1'";
  var EL03220 = "----- create -----";
  var EL03221 = "createMetaObject(oGuid, origin); oGuid can only be of type 'object'. typeof oGuid = '$1'";
  var EL03222 = "createMetaObject(oGuid, origin); oGuid._type 은 'string' 타입만 가능합니다.(length > 0) typeof oGuid._type = '$1'";
  var EL03223 = "createMetaObject(oGuid, origin); origin can only be of type 'object'. typeof origin = '$1'";
  var EL03224 = "createMetaObject(oGuid, origin);[$1] Namespace is not of type 'function'. type of coClass = '$2'";
  var EL03225 = "createReferObject(meta); meta can only be of type 'object'. type of meta = '$1'";
  var EL03226 = "createReferObject(meta); meta._guid 은 'string' 타입만 가능합니다.(length > 0) typeof meta._guid = '$1'";
  var EL03227 = "createNsReferObject(fun); fun is not type 'function'. type of fun = '$1'";
  var EL03230 = "----- ns Class -----";
  var EL03231 = "register Class(fun, ns, key); fun is not of type 'function'. type of fun = '$1'";
  var EL03232 = "registerClass(fun, ns, key); ns is not of type 'string'. typeofns = '$1'";
  var EL03233 = "register Class(fun, ns, key); key is not of type 'string'. type of key = '$1'";
  var EL03234 = "releaseClass(fullName); fullName 은 'string' 타입만 가능합니다.(length > 0) typeof fullName = '$1'";
  var EL03235 = "findClass(fun); fun is not type 'function'. type of fun = '$1'";
  var EL03236 = "getClass(fullName); fullName can only be of type 'string' (length > 0) type of fullName = '$1'";
  var EL03240 = "----- set, transform, load -----";
  var EL03241 = "setMetaObject(oGuid, meta); oGuid can only be of type 'object'. typeof oGuid = '$1'";
  var EL0324 = "setMetaObject(oGuid, meta); meta can only be of type 'object'. type of meta = '$1'";
  var EL03243 = "setMetaObject(meta); meta._guid can only be of type 'string' (length > 0) type of meta._guid = '$1'";
  var EL03244 = "transformRefer(oGuid); oGuid can only be of type 'object'. type oGuid = '$1'";
  var EL03245 = "transformRefer(oGuid); $1['$2']['$ns'] is not of type 'function'";
  var EL03246 = "loadMetaObject(str, path?); str is only of type 'string'. typeof str = '$1'";
  var EL03247 = "loadMetaObject(str, path?); The object parsed str is not a Guide object. obj._type = '$1', obj._guid = '$2'";
  var EL03250 = "----- has, valid, find -----";
  var EL03251 = "validObject(oGuid); oGuid is only of type 'object'. typeof oGuid = '$1'";
  var EL03252 = "hasGuidObject(oGuid, origin); guid can only be of type 'string' (length > 0) type of guid = '$1'";
  var EL03253 = "hasGuidObject(oGuid, origin); origin[$1]는 'object' 타입이 아닙니다. typeof origin[$1] = '$2'";
  var EL03254 = "hasRefer(oGuid); oGuid can only be of type 'object'. typeof oGuid = '$1'";
  var EL03255 = "hasRefer(oGuid); oGuid is not a Guide object. oGuid._type = '$1', oGuid._guid = '$2'";
  var EL03256 = "findSetObject(oGuid, origin); [ oGuid._guid | oGuid ]는 'string' 타입만 가능합니다.(length > 0) guid = '$1'";
  var EL03257 = "findSetObject(oGuid, origin); origin can only be of type 'object'. typeof origin = '$1'";
  var EL03300 = "----- namespace-manager.js -----";
  var EL03310 = "----- private function, proterty -----";
  var EL03311 = "NamespaceManager.allowOverlap 은  'boolean' 타입만 가능합니다. typeof allowOverlap = $1";
  var EL03312 = "_getArray(ns); ns is not a valid namespace name rule. ns = $1";
  var EL03313 = "_getArray(ns); ns type is 'string', 'array<string>' only typeofns = $1";
  var EL03314 = "_getArray(ns); ns[$1] is not type 'string'. typeofns[$1] = $2";
  var EL03315 = "_getArray(ns); ns[$1] is not a valid name rule. ns[$1] = $1";
  var EL03320 = "----- addNamespace, delNamespace, path -----";
  var EL0321 = "addNamespace(ns); addition of namespace failed";
  var EL03322 = "delNamespace(ns); Namespace deletion failed";
  var EL0323 = "path(ns); failed to get the namespace path";
  var EL03330 = "----- add, del -----";
  var EL03331 = "add(fullName,lem); [$1] is not a valid name rule";
  var EL03332 = "add(fullName,lem);lem is already registered. Allow duplicate [this.allowOverlap = 'true']";
  var EL03333 = "add(fullName,lem); failed to register elements in the namespace";
  var EL03334 = "del(fullName); Failed to delete element in Namespace";
  var EL03340 = "----- getPath, output, load -----";
  var EL03341 = "getPath(elem); no element value. typeoflem = $1";
  var EL03342 = "output (stringify, space); Namespace export failed. $1";
  var EL03343 = "load(str, path); str is not type 'string'. typeofstr = $1";
  var EL03344 = "load(str, path); Namespace loading failed. $1";
  var EL04100 = "----- Collection.* -----";
  var EL04110 = "----- base-collection.js -----";
  var EL04111 = "_remove(idx): boolean is an abstract method. Must be implemented";
  var EL04112 = "setObject(oGuid, origin); _owner connection of oGuid failed. guid = $1";
  var EL04113 = "removeAt(idx); idx is not type 'number'. typeof idx = $1";
  var EL04114 = "add(any): number is an abstract method. must be implemented";
  var EL04115 = "clear() is an abstract method. must be implemented";
  var EL04116 = "map(callback); callback is not function type. type of callback = $1";
  var EL04117 = "filter(callback); callback is not function type. type of callback = $1";
  var EL04118 = "reduce(callback); callback is not function type. type of callback = $1";
  var EL04119 = "find(callback); callback is not function type. type of callback = $1";
  var EL041110 = "forEach(callback); callback is not function type. type of callback = $1";
  var EL041111 = "Some(callback); callback is not function type. type of callback = $1";
  var EL041112 = "Every(callback); callback is not function type. type of callback = $1";
  var EL041113 = "findIndex(callback); callback 이 function 타입이 아닙니다. typeof callback = $1";
  var EL04200 = "";
  var EL04210 = "----- collection-array.js -----";
  var EL04211 = "_elements connection failed for setObject(oGuid, origin); oGuid['_elem'][$1]: guid = $2";
  var EL04212 = "insertAt(pos, value, desc); pos is not type 'number'. typeof pos = $1";
  var EL04213 = "insertAt(pos, value, desc); pos cannot be greater than this.count.pos = $1, count = $2";
  var EL04214 = "insertAt(pos, value, desc); pos cannot be less than 0. pos = $1";
  var EL04215 = "insertAt(pos, value, desc); registration failed. pos = $1, value = $2";
  var EL04220 = "----- collection-property.js -----";
  var EL04221 = "setObject(oGuid, origin); oGuid['_lem'].length = $1 length and oGuid['_key'].length = $2 length are different";
  var EL04222 = "setObject(oGuid, origin); oGuid['_elem'].length = $1 length and oGuid['_desc'].length = $2 length are different";
  var EL04223 = "setObject(oGuid, origin); oGuid._elem[$1] guid not found. guid = $2";
  var EL04224 = "indexOf(obj, isKey); if the index value is found by key, obj must be of type 'string'. typeof obj = $1";
  var EL04225 = "add(name, value, desc); name is not of type 'string'. type of name = $1";
  var EL04226 = "add(name, value, desc); name = '$1' is not valid for name rule. Rule = '$2'";
  var EL04227 = "add(name, value, desc); name = '$1' is the reserved word";
  var EL04228 = "add(name, value, desc); name = '$1' is duplicated with existing name";
  var EL04229 = "add(name, value, desc); addition failed. name = '$1', value = '$2'";
  var EL0422A = "indexToKey(idx); idx is not of type 'number'. typeof idx = $1";
  var EL0422B = "exists(key); key is not of type 'string' (length > 0) type of key = $1";
  var EL04300 = "";
  var EL04310 = "----- collection-transaction.js -----";
  var EL04311 = "$1.autoChanges 는 'boolean' 타입입니다. typeof aucoChanges = '$2'";
  var EL04320 = "----- trans-queue.js -----";
  var EL04321 = "collection value is not an instance that inherited [MetaObject]";
  var EL04322 = "collection is not an instance of [ArrayCollection]";
  var EL04323 = "rollback(); '$1' is an unprocessable cmd";
  var WS011 = "[$1] Destination [$2] cannot be deleted";
  var EN = "OK";
  var defaultCode$1 = {
  	ES010: ES010,
  	ES011: ES011,
  	ES012: ES012,
  	ES013: ES013,
  	ES021: ES021,
  	ES022: ES022,
  	ES023: ES023,
  	ES031: ES031,
  	ES032: ES032,
  	ES033: ES033,
  	ES041: ES041,
  	ES042: ES042,
  	ES043: ES043,
  	ES044: ES044,
  	ES051: ES051,
  	ES052: ES052,
  	ES053: ES053,
  	ES054: ES054,
  	ES061: ES061,
  	ES062: ES062,
  	ES063: ES063,
  	ES064: ES064,
  	ES065: ES065,
  	ES066: ES066,
  	EL01100: EL01100,
  	EL01101: EL01101,
  	EL01102: EL01102,
  	EL01103: EL01103,
  	EL01110: EL01110,
  	EL01111: EL01111,
  	EL01112: EL01112,
  	EL01113: EL01113,
  	EL01114: EL01114,
  	EL01115: EL01115,
  	EL01116: EL01116,
  	EL01117: EL01117,
  	EL01118: EL01118,
  	EL01120: EL01120,
  	EL01121: EL01121,
  	EL01122: EL01122,
  	EL01123: EL01123,
  	EL01124: EL01124,
  	EL01125: EL01125,
  	EL01126: EL01126,
  	EL01127: EL01127,
  	EL01130: EL01130,
  	EL01131: EL01131,
  	EL01132: EL01132,
  	EL01133: EL01133,
  	EL01140: EL01140,
  	EL01141: EL01141,
  	EL01142: EL01142,
  	EL01143: EL01143,
  	EL01150: EL01150,
  	EL01151: EL01151,
  	EL01152: EL01152,
  	EL01153: EL01153,
  	EL01154: EL01154,
  	EL01155: EL01155,
  	EL01156: EL01156,
  	EL01157: EL01157,
  	EL01200: EL01200,
  	EL01201: EL01201,
  	EL01202: EL01202,
  	EL01203: EL01203,
  	EL01204: EL01204,
  	EL01210: EL01210,
  	EL01211: EL01211,
  	EL01212: EL01212,
  	EL01213: EL01213,
  	EL01214: EL01214,
  	EL01215: EL01215,
  	EL01216: EL01216,
  	EL01217: EL01217,
  	EL01218: EL01218,
  	EL01219: EL01219,
  	EL01220: EL01220,
  	EL01221: EL01221,
  	EL01222: EL01222,
  	EL01223: EL01223,
  	EL01224: EL01224,
  	EL01225: EL01225,
  	EL01226: EL01226,
  	EL01227: EL01227,
  	EL01228: EL01228,
  	EL01229: EL01229,
  	EL0122A: EL0122A,
  	EL0122B: EL0122B,
  	EL0122C: EL0122C,
  	EL0122D: EL0122D,
  	EL0122E: EL0122E,
  	EL0122F: EL0122F,
  	EL01230: EL01230,
  	EL01231: EL01231,
  	EL01232: EL01232,
  	EL01233: EL01233,
  	EL01234: EL01234,
  	EL01235: EL01235,
  	EL01240: EL01240,
  	EL01241: EL01241,
  	EL01242: EL01242,
  	EL01243: EL01243,
  	EL01250: EL01250,
  	EL01251: EL01251,
  	EL01252: EL01252,
  	EL01253: EL01253,
  	EL01254: EL01254,
  	EL01255: EL01255,
  	EL01256: EL01256,
  	EL01257: EL01257,
  	EL01300: EL01300,
  	EL01301: EL01301,
  	EL01302: EL01302,
  	EL01303: EL01303,
  	EL01304: EL01304,
  	EL01305: EL01305,
  	EL01306: EL01306,
  	EL01307: EL01307,
  	EL01308: EL01308,
  	EL01309: EL01309,
  	EL0130A: EL0130A,
  	EL0130B: EL0130B,
  	EL0130C: EL0130C,
  	EL01400: EL01400,
  	EL01401: EL01401,
  	EL01402: EL01402,
  	EL01403: EL01403,
  	EL01404: EL01404,
  	EL01405: EL01405,
  	EL01500: EL01500,
  	EL01501: EL01501,
  	EL01502: EL01502,
  	EL01503: EL01503,
  	EL01504: EL01504,
  	EL01505: EL01505,
  	EL01506: EL01506,
  	EL01507: EL01507,
  	EL01508: EL01508,
  	EL01509: EL01509,
  	EL01510: EL01510,
  	EL02100: EL02100,
  	EL02110: EL02110,
  	EL02111: EL02111,
  	EL02112: EL02112,
  	EL02113: EL02113,
  	EL02120: EL02120,
  	EL02121: EL02121,
  	EL02122: EL02122,
  	EL02130: EL02130,
  	EL02131: EL02131,
  	EL02140: EL02140,
  	EL02150: EL02150,
  	EL02151: EL02151,
  	EL02152: EL02152,
  	EL02153: EL02153,
  	EL02154: EL02154,
  	EL02160: EL02160,
  	EL02161: EL02161,
  	EL02162: EL02162,
  	EL02163: EL02163,
  	EL02164: EL02164,
  	EL02170: EL02170,
  	EL02171: EL02171,
  	EL02180: EL02180,
  	EL02181: EL02181,
  	EL02190: EL02190,
  	EL02191: EL02191,
  	EL02192: EL02192,
  	EL02300: EL02300,
  	EL03100: EL03100,
  	EL03110: EL03110,
  	EL03111: EL03111,
  	EL03112: EL03112,
  	EL03113: EL03113,
  	EL03114: EL03114,
  	EL03120: EL03120,
  	EL03121: EL03121,
  	EL03122: EL03122,
  	EL03200: EL03200,
  	EL03211: EL03211,
  	EL03212: EL03212,
  	EL03213: EL03213,
  	EL03220: EL03220,
  	EL03221: EL03221,
  	EL03222: EL03222,
  	EL03223: EL03223,
  	EL03224: EL03224,
  	EL03225: EL03225,
  	EL03226: EL03226,
  	EL03227: EL03227,
  	EL03230: EL03230,
  	EL03231: EL03231,
  	EL03232: EL03232,
  	EL03233: EL03233,
  	EL03234: EL03234,
  	EL03235: EL03235,
  	EL03236: EL03236,
  	EL03240: EL03240,
  	EL03241: EL03241,
  	EL0324: EL0324,
  	EL03243: EL03243,
  	EL03244: EL03244,
  	EL03245: EL03245,
  	EL03246: EL03246,
  	EL03247: EL03247,
  	EL03250: EL03250,
  	EL03251: EL03251,
  	EL03252: EL03252,
  	EL03253: EL03253,
  	EL03254: EL03254,
  	EL03255: EL03255,
  	EL03256: EL03256,
  	EL03257: EL03257,
  	EL03300: EL03300,
  	EL03310: EL03310,
  	EL03311: EL03311,
  	EL03312: EL03312,
  	EL03313: EL03313,
  	EL03314: EL03314,
  	EL03315: EL03315,
  	EL03320: EL03320,
  	EL0321: EL0321,
  	EL03322: EL03322,
  	EL0323: EL0323,
  	EL03330: EL03330,
  	EL03331: EL03331,
  	EL03332: EL03332,
  	EL03333: EL03333,
  	EL03334: EL03334,
  	EL03340: EL03340,
  	EL03341: EL03341,
  	EL03342: EL03342,
  	EL03343: EL03343,
  	EL03344: EL03344,
  	EL04100: EL04100,
  	EL04110: EL04110,
  	EL04111: EL04111,
  	EL04112: EL04112,
  	EL04113: EL04113,
  	EL04114: EL04114,
  	EL04115: EL04115,
  	EL04116: EL04116,
  	EL04117: EL04117,
  	EL04118: EL04118,
  	EL04119: EL04119,
  	EL041110: EL041110,
  	EL041111: EL041111,
  	EL041112: EL041112,
  	EL041113: EL041113,
  	EL04200: EL04200,
  	EL04210: EL04210,
  	EL04211: EL04211,
  	EL04212: EL04212,
  	EL04213: EL04213,
  	EL04214: EL04214,
  	EL04215: EL04215,
  	EL04220: EL04220,
  	EL04221: EL04221,
  	EL04222: EL04222,
  	EL04223: EL04223,
  	EL04224: EL04224,
  	EL04225: EL04225,
  	EL04226: EL04226,
  	EL04227: EL04227,
  	EL04228: EL04228,
  	EL04229: EL04229,
  	EL0422A: EL0422A,
  	EL0422B: EL0422B,
  	EL04300: EL04300,
  	EL04310: EL04310,
  	EL04311: EL04311,
  	EL04320: EL04320,
  	EL04321: EL04321,
  	EL04322: EL04322,
  	EL04323: EL04323,
  	WS011: WS011,
  	EN: EN
  };

  var _Message;
  // import {osLocale} from 'os-locale';

  var localesPath$1 = './locales'; // 상대 경로

  // inner function
  function _isObject$2(obj) {
    return obj && _typeof(obj) === 'object' && !Array.isArray(obj);
  }
  function _isString(obj) {
    // 공백아닌 문자 여부
    if (typeof obj === 'string' && obj.length > 0) return true;
    return false;
  }
  function _deepMerge(target, source) {
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        var targetValue = target[key];
        var sourceValue = source[key];
        if (_isObject$2(sourceValue)) {
          if (!_isObject$2(targetValue)) {
            target[key] = {};
          }
          target[key] = _deepMerge(target[key], sourceValue);
        } else {
          target[key] = sourceValue;
        }
      }
    }
    return target;
  }
  function _loadJSON(_x) {
    return _loadJSON2.apply(this, arguments);
  }
  function _loadJSON2() {
    _loadJSON2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(filePath) {
      var isNode, isESM, response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            isNode = typeof process !== 'undefined' && process.versions !== null && process.versions.node !== null && globalThis.isDOM !== true;
            isESM = isNode && (typeof require === 'undefined' || globalThis.isESM === true); // REVIEW: test hack
            _context3.prev = 2;
            if (!isESM) {
              _context3.next = 9;
              break;
            }
            _context3.next = 6;
            return import(filePath);
          case 6:
            return _context3.abrupt("return", _context3.sent["default"]);
          case 9:
            if (!isNode) {
              _context3.next = 13;
              break;
            }
            return _context3.abrupt("return", require(filePath));
          case 13:
            _context3.next = 15;
            return fetch(filePath);
          case 15:
            response = _context3.sent;
            _context3.next = 18;
            return response.json();
          case 18:
            return _context3.abrupt("return", _context3.sent);
          case 19:
            _context3.next = 24;
            break;
          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](2);
            return _context3.abrupt("return", undefined);
          case 24:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 21]]);
    }));
    return _loadJSON2.apply(this, arguments);
  }
  function _getLocale() {
    var locale = '';
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      var _navigator$languages;
      // 브라우저 환경
      var lang = ((_navigator$languages = navigator.languages) === null || _navigator$languages === void 0 ? void 0 : _navigator$languages[0]) || navigator.language || Intl.DateTimeFormat().resolvedOptions().locale;
      locale = lang.split(/[_-]/)[0]; // "ko-KR" -> "ko"
    } else if (typeof process !== 'undefined') {
      // Node.js 환경
      var rawLocale = process.env.LANG || process.env.LC_ALL || process.env.LANGUAGE;
      if (rawLocale) {
        locale = rawLocale.split(/[:_.]/)[0].replace('_', '-'); // "ko_KR.UTF-8" -> "ko"
      }
    }
    return locale || 'en';
  }
  function _replacePlaceholders(p_template, p_values) {
    var namedValues = {},
      indexedValues = [];
    if (Array.isArray(p_values)) indexedValues = p_values;else if (_typeof(p_values) === 'object') namedValues = p_values;

    // `${변수명}` 치환
    p_template = p_template.replace(/\$\{(\w+)\}/g, function (match, key) {
      return namedValues.hasOwnProperty(key) ? namedValues[key] : match;
    });
    // `$1, $2` 치환
    p_template = p_template.replace(/\$(\d+)/g, function (match, index) {
      var i = parseInt(index, 10) - 1;
      return indexedValues[i] !== undefined ? indexedValues[i] : match;
    });
    return p_template;
  }

  /**
   * 'Message' is a class that manages messages and codes.  
   */
  var Message = /*#__PURE__*/function () {
    function Message() {
      _classCallCheck(this, Message);
    }
    return _createClass(Message, null, [{
      key: "getMessageByCode",
      value:
      /**
       * Returns a message that corresponds to the message code.  
       * 
       * @param {string} p_code Message code
       * @returns {string} Message String
       */
      function getMessageByCode(p_code) {
        var _this$$storage$lang$t, _this$$storage$lang$t2;
        var value = ((_this$$storage$lang$t = this.$storage.lang[this.currentLang]) === null || _this$$storage$lang$t === void 0 ? void 0 : _this$$storage$lang$t[p_code]) || ((_this$$storage$lang$t2 = this.$storage.lang[this.defaultLang]) === null || _this$$storage$lang$t2 === void 0 ? void 0 : _this$$storage$lang$t2[p_code]);
        return typeof value === 'number' ? String(value) : value;
      }
    }, {
      key: "importMessage",
      value:
      /**
       * Add the message code to the storage.  
       * 
       * @param {object} p_msg Message Object
       * @param {string} p_path Message file path
       */
      function importMessage(p_msg, p_path) {
        // let locale;

        if (_isObject$2(p_msg)) {
          _deepMerge(this.$storage.lang["default"], p_msg);
          if (_isString(p_path)) this.$storage.path.push(p_path);
        }

        // locale = _getLocale();
        // if (locale === 'en') locale = 'default';
        // else await Message.changeLanguage(locale);
      }
    }, {
      key: "changeLanguage",
      value: (
      /**
       * Change the language.  
       * 
       * @param {string} p_lang language code
       */
      function () {
        var _changeLanguage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(p_lang) {
          var i, localPath, msg;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                this.currentLang = p_lang;
                if (!(p_lang === 'default')) {
                  _context.next = 3;
                  break;
                }
                return _context.abrupt("return");
              case 3:
                i = 0;
              case 4:
                if (!(i < this.$storage.path.length)) {
                  _context.next = 14;
                  break;
                }
                localPath = this.$storage.path[i];
                _context.next = 8;
                return _loadJSON("".concat(localPath, "/").concat(p_lang, ".json"));
              case 8:
                msg = _context.sent;
                this.$storage.lang[p_lang] = this.$storage.lang[p_lang] || {};
                // if (typeof $storage.lang[p_lang] === 'undefined') $storage.lang[p_lang] = {};

                if (_typeof(msg) === 'object') _deepMerge(this.$storage.lang[p_lang], msg);else console.warn("Path '".concat(localPath, "/").concat(p_lang, "' does not have a file."));
              case 11:
                i++;
                _context.next = 4;
                break;
              case 14:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function changeLanguage(_x2) {
          return _changeLanguage.apply(this, arguments);
        }
        return changeLanguage;
      }()
      /**
       * Returns a string corresponding to the given message code.  
       * 
       * @param {string} p_code Message code
       * @param {object | string[]} p_values Value to replace in message
       * @returns {string} 메시지
       */
      )
    }, {
      key: "get",
      value: function get(p_code, p_values) {
        var msg = Message.getMessageByCode(p_code);
        var result;
        if (typeof msg === 'undefined') {
          return "There is no message for code. '".concat(p_code, "'");
        }
        result = _replacePlaceholders(msg, p_values);
        return $intro(p_code) + result;

        // inner funciton
        function $intro(code) {
          var intro = '';
          var firstChar = code.substring(0, 1);
          if (firstChar === 'E') intro = 'Error';else if (firstChar === 'W') intro = 'Warn';
          return intro + ' [' + code + '] ';
        }
      }
    }, {
      key: "resetLang",
      value:
      /**
       * Initialize the language.  
       */
      function resetLang() {
        // let locale;
        this.currentLang = this.defaultLang;
        // if (this.autoDetect) {
        //     locale = _getLocale();
        //     if (locale === 'en') locale = 'default';
        //     await Message.changeLanguage(locale);
        // }
      }

      /**
       * Set the current language by automatically detecting the language.  
       */
    }, {
      key: "autoDetect",
      value: (function () {
        var _autoDetect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var locale;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                locale = _getLocale(); // internal function
                // let locale = await osLocale(); // external function
                // locale = locale.split(/[_-]/)[0];
                if (locale === 'en') locale = 'default';
                _context2.next = 4;
                return Message.changeLanguage(locale);
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function autoDetect() {
          return _autoDetect.apply(this, arguments);
        }
        return autoDetect;
      }())
    }]);
  }(); // console.log('Before import');
  // (async () => {
  //     await Message.importMessage(defaultCode, localesPath);
  // })();
  // async function main() {
  //     await (async () => {
  //     await Message.importMessage(defaultCode, localesPath);
  //     // await Messagde.importMessage(...);
  //     })(); // ← IIFE가 반환하는 promise를 여기서 await
  //     console.log('importMessage가 끝난 후 실행됨');
  // }
  //  main();
  // await Message.importMessage(defaultCode, localesPath);
  // console.log('After import');
  _Message = Message;
  /**
   * Namespace path. ('Common')
   */
  _defineProperty(Message, "_NS", 'Common');
  /**
   * Internal repository that stores message code.  
   */
  _defineProperty(Message, "$storage", {
    lang: {
      "default": {}
    },
    path: []
  });
  /**
   * Sets whether automatic language detection is enabled. Default is true.  
   */
  // static autoDetect = true;
  /**
   * Set the default language. Default is 'default'.  
   */
  _defineProperty(Message, "defaultLang", 'default');
  /**
   * Sets the current language. Default is 'default'.  
   */
  _defineProperty(Message, "currentLang", _Message.defaultLang);
  Message.importMessage(defaultCode$1, localesPath$1);

  // inner function 
  function _buildMessageProp(obj) {
    var msg = '';
    for (var prop in obj) {
      if (typeof obj[prop] === 'string') msg += prop + ' : ' + obj[prop] + '\n';else continue;
    }
    return msg;
  }
  function _buildMsgQueue(queue) {
    var msg = '';
    var queue_cnt = queue.length;
    for (var i = queue_cnt; i > 0; i--) {
      var mark = '';
      for (var j = i; j <= queue_cnt; j++) {
        mark += '#';
      }
      msg += '' + mark + ' ' + queue[i - 1] + '\n';
    }
    return msg;
  }
  var ExtendError = /*#__PURE__*/function (_Error) {
    /**
     * Use user messages to create an ExtendError instance.  
     *
     * @param {string} msg Error message string
     * @param {ExtendError | object | null} causeOrProp Error message by existing ExtendError, Error object or property
     *
     * @example
     * throw new ExtendError("Custom error message");
     * throw new ExtendError("Custom error message", error);
     * throw new ExtendError("Custom error message", { style: "required" });
     */

    /**
     * Create an instance of 'ExtendError' using the message code and substitution value.  
     *
     * @param {RegExp} msgPattern Code value of regular expression type
     * @param {ExtendError | object | null} causeOrProp Error message by existing ExtendError, Error object or property
     * @param {string[]} placeholders Array of strings containing substitution values such as '$1' and '$2' in the
     *
     * @example
     * // For messages that do not have a substitution value
     * throw new ExtendError(/EL01504/);
     * throw new ExtendError(/EL01504/, error);
     * throw new ExtendError(/EL01504/, { style: "required" });
     * // For messages with substitution values
     * throw new ExtendError(/EL01504/, undefined, ['value1', 'value2']);
     * throw new ExtendError(/EL01504/, error, ['value1', 'value2']););
     * throw new ExtendError(/EL01504/, { style: "required" }, ['value1', 'value2']);
     */
    function ExtendError(p_msg, p_prop, p_codeVal) {
      var _this;
      _classCallCheck(this, ExtendError);
      _this = _callSuper(this, ExtendError);
      // namespace
      /**
       * Save previously generated messages.  
       * 
       * @member {string[]} ExtendError#queue
       */
      _defineProperty(_this, "queue", []);
      /**
       * Error message related to property type.  
       * 
       * @member {object} ExtendError#prop
       */
      _defineProperty(_this, "prop", {});
      var _build = '';
      var _prop;
      var _queue = [];
      var _msg;
      if (p_prop instanceof ExtendError) {
        _queue = p_prop.queue;
        _prop = p_prop.prop;
      } else if (p_prop instanceof Error) {
        _queue.push(p_prop.message);
      } else if (_typeof(p_prop) === 'object' && p_prop !== null) {
        _prop = p_prop;
      }
      if (typeof p_msg === 'string') {
        _msg = p_msg;
      } else if (p_msg instanceof RegExp) {
        _msg = Message.get(p_msg.source, p_codeVal);
      } else _msg = '';
      _build = _msg + '\n';
      if (_prop) _build += _buildMessageProp(_prop);
      if (_queue.length > 0) _build += _buildMsgQueue(_queue);
      _this.message = _build;
      _this.queue = _queue;
      _this.queue.push(_msg);
      return _this;
    }

    /**
     * Converts error messages into strings.  
     * 
     * @return error message string
     */
    _inherits(ExtendError, _Error);
    return _createClass(ExtendError, [{
      key: "toString",
      value: function toString() {
        return 'ExtendError : ' + this.message;
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(Error));
  _defineProperty(ExtendError, "_NS", 'Common');

  var _global$1 = globalThis;
  var OLD_ENV$1 = _global$1.OLD_ENV ? _global$1.OLD_ENV : false; // 커버리지 테스트 역활

  /**
   * This is a type module.
   */
  var Type = {};

  /**
   * object 와 new 생성한 사용자 함수를 제외한 객쳐 여부  
   * 
   * @param {*} obj 
   * @returns {boolean}
   */
  function _isPrimitiveObj(obj) {
    // REVIEW: 정리 필요, 의미적으로 명료하게..
    if (_typeof(obj) === 'object' && obj !== null && (obj instanceof RegExp || obj instanceof Date)) {
      return true;
    }
    return false;
  }

  /**
   * 최상위 object 이거나 사용자 함수에서 생성한 객체 여부  
   * 
   * @param {*} obj 
   * @returns {boolean}
   */
  function _isObject$1(obj) {
    // REVIEW: 정리 필요, 의미적으로 명료하게
    if (_typeof(obj) === 'object' && obj !== null && !_isPrimitiveObj(obj)) {
      return true;
    }
    return false;
  }

  /**
   * 공백객체 인지 확인  
   * 
   * @param {*} obj 검사대상
   * @returns {boolean}
   */
  function _isEmptyObj(obj) {
    if (_isObject$1(obj) && Object.keys(obj).length === 0 && getAllProperties(obj).length === 0) return true;
    return false;
  }

  /**
   * 공백이 아닌 객체 (prototype 및 속성 있는것)  
   * 
   * @param {*} obj 대상 
   * @returns {boolean}
   */
  function _isFillObj(obj) {
    if (_isObject$1(obj) && getAllProperties(obj).length > 0) return true;
    return false;
  }

  /**
   * 내장함수 유무  
   * 
   * @param {*} obj 
   * @returns {boolean}
   */
  function _isBuiltFunction(obj) {
    if (typeof obj === 'function' && (obj === Number || obj === String || obj === Boolean || obj === Object || obj === Array || obj === Function || obj === RegExp || obj === Date || obj === Symbol || obj === BigInt)) return true;
    return false;
  }

  /**
   * 첫문자 대문자 여부  
   * 
   * @param {string} strValue 
   * @returns {boolean}
   */
  function _isUpper(strValue) {
    var firstStr = strValue.charAt(0);
    if (firstStr === '') return false;
    if (firstStr === firstStr.toUpperCase()) return true;
    return false;
  }

  /**
   * 리터럴 여부  
   * number, string, boolean, bigint, RexExp instance  
   * 
   * @param {*} obj 
   * @returns {boolean}
   */
  function _isLiteral(obj) {
    if (typeof obj === 'number') return true;
    if (typeof obj === 'string') return true;
    if (typeof obj === 'boolean') return true;
    if (typeof obj === 'bigint') return true;
    if (obj instanceof RegExp) return true;
    return false;
  }

  /**
   * 리터럴값 비교  
   * number, string, boolean, bigint, RexExp instance  
   * 
   * @param {*} obj1 
   * @param {*} obj2 
   * @returns {boolean}
   */
  function _equalLiternal(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (obj1 instanceof RegExp && obj2 instanceof RegExp && obj1.source === obj2.source) return true;
    return false;
  }

  /**
   * function 생성하는 생성자
   * @param {*} type 
   * @returns {object}
   */
  var _creator = function _creator(type) {
    return new type();
  };

  /**
   * 타임명 얻기  
   * 
   * @param {*} obj 
   * @returns {string}
   */
  function _typeName(obj) {
    return obj['name'];
  }

  /**
   * kind 코드, 대문자로 얻기 '_any_'...  
   * 
   * @param {*} val 
   * @returns {string}
   */
  function _getKeyCode(val) {
    var reg = /^_[a-zA-Z]+_/;
    var result;
    if (typeof val !== 'string') return '';
    result = reg.exec(val);
    if (result !== null) return result[0].toUpperCase();
    return '';
  }

  // 배열 구조 분해 할당을 해제 
  function restoreArrowFunction(transformedCode) {
    // 1. 화살표 함수의 매개변수와 본문 전체를 추출
    var regex = /\((.*?)\)\s*=>\s*\{([\s\S]*)\}/;
    var match = transformedCode.match(regex);

    // 특별히 `_ref => { ... }` 형태도 대응할 수 있도록 추가 처리
    //  -> _ref => { let [String] = _ref; return Number; }
    //  -> 실제로는 ( _ref ) => { ... } 형태로 통일
    if (!match) {
      // 혹시 _ref => { ... } 형태라면, 강제로 괄호를 넣어 재시도
      var altRegex = /^(.*?)\s*=>\s*\{([\s\S]*)\}/;
      var altMatch = transformedCode.match(altRegex);
      if (!altMatch) {
        throw new Error('Invalid arrow function format.');
      }
      // altMatch[1] = "_ref"
      // altMatch[2] = "let [String] = _ref; return Number;"
      var altParams = altMatch[1].trim();
      var altBody = altMatch[2].trim();

      // 화살표 함수 형태 통일:  ( _ref ) => { ... }
      return restoreArrowFunction("(".concat(altParams, ") => {").concat(altBody, "}"));
    }

    // 2. 매개변수와 함수 본문 부분 분리
    var params = match[1].trim(); // 함수의 매개변수 부분
    var body = match[2].trim(); // 함수 본문

    // 3. 구조 분해 할당 패턴 (객체/배열 모두 대응) - 여러 줄(줄바꿈)도 허용
    //    예: let { aa: String } = _ref5;  또는 let [[{ bb: Number }]] = _ref6;
    var paramAssignments = body.match(/let\s+(\{[\s\S]*?\}|\[[\s\S]*?\])\s*=\s*(\w+);/g) || [];

    // 4. 찾아낸 구조 분해 할당들을 순회하며 매개변수( _ref5, _ref6 등 )를 원래 형태로 치환
    paramAssignments.forEach(function (assign) {
      // - parts[1]: { aa: String } 또는 [String] 등 (줄바꿈 포함 가능)
      // - parts[2]: _ref5, _ref6 등
      var parts = assign.match(/let\s+(\{[\s\S]*?\}|\[[\s\S]*?\])\s*=\s*(\w+);/);
      if (parts) {
        var extractedParam = parts[1].trim(); // 원래 구조
        var originalParam = parts[2].trim(); // 변환된 변수명 (_ref5 등)

        // 매개변수 목록에 있던 _ref5 등을 { aa: String } 등으로 치환
        var re = new RegExp("\\b".concat(originalParam, "\\b"), 'g');
        params = params.replace(re, extractedParam);
      }
    });

    // 5. return 문이 있다면 반환값을 추출
    //    예: return Number; -> "Number"
    var returnStatementMatch = body.match(/return\s+(.*?);/);
    var returnType = returnStatementMatch ? returnStatementMatch[1].trim() : '';

    // 6. 최종 복원 – return 문이 있다면 { return ... } 형태로, 없으면 { } 로
    if (returnType) {
      // 불필요한 공백 없애기 위해 파라메터 부분도 스페이스 정리
      params = params.replace(/\s+/g, '');
      return "(".concat(params, ")=>{return ").concat(returnType, "}");
    } else {
      params = params.replace(/\s+/g, '');
      return "(".concat(params, ")=>{}");
    }
  }

  /**
   * 함수 규칙   
   * - (params 내부에는 '()' 입력 금지)  
   * - 참조형 타입 금지 : new Function() 시점에 자동 해석됨  
   * 
   * @param {*} funBody 
   * @returns {object}
   */
  function _parseFunc(funBody) {
    var syntax1 = /\([,_\[\]{:}\w\s]*\)\s*(?:=>)?\s*{\s*.*\s*.*\s*}/; // 제한 규칙
    var syntax2 = /(\(.*\)|\w+)\s*(?:=>).*/;
    var regFunc1 = /(?:function\s)?\(([\[\]{:}\s\w,]*)\)\s*(?:=>)?\s*{(?:\s*return\s+|\s*)?([\[\]{:}\s\w,]*);?\s*}/;
    var regFunc2 = /\(?([\[\]{:}\s\w,]*)\)?\s*(?:=>)\s*{?(?:\s*return\s+|\s*)?([\[\]\s\w,]*);?\s*}?/;
    var arrFunc;
    var result = {
      params: [],
      "return": undefined
    };
    var arrParam = [];
    var arrRetrun;

    // 배열 구조 분해 할당을 해제 
    if (/\blet\b/.test(funBody)) funBody = restoreArrowFunction(funBody);
    funBody = $skipComment(funBody);
    try {
      if (syntax1.test(funBody)) arrFunc = regFunc1.exec(funBody);else if (syntax2.test(funBody)) arrFunc = regFunc2.exec(funBody);else throw new ExtendError(/EL01301/, null, [funBody]);
      if (arrFunc === null) throw new ExtendError(/EL01302/, null, [funBody]);
      arrParam = new Function('return [' + arrFunc[1] + ']')();
      result['params'] = arrParam;
      if (arrFunc[2] !== '') arrRetrun = new Function('return ' + arrFunc[2])();
      result['return'] = arrRetrun;
    } catch (error) {
      throw new ExtendError(/EL01303/, error, ['']);
    }
    return result;

    // inner function
    function $skipComment(body) {
      // 주석 제거 comment
      var rBody = body;
      var bloackComment = /\/\*[^](.*?)\*\//g;
      var lineComment = /\/\/[^](.*?)(\n|$)/g;
      rBody = rBody.replace(bloackComment, '');
      rBody = rBody.replace(lineComment, '');
      return rBody;
    }
  }

  /**
   * 타입 여부  
   * 
   * @param {string} name 
   * @returns {boolean}
   */
  function _hasType(name) {
    var arr = [];
    if (typeof name !== 'string') return false;
    arr = arr.concat(['null', 'undefined', 'number', 'string', 'boolean']);
    arr = arr.concat(['array', 'function', 'object']);
    arr = arr.concat(['choice', 'union', 'class']);
    arr = arr.concat(['symbol', 'bigint', 'regexp']);
    arr = arr.concat(['etc']); // 예외 오류 코드 검출 

    return arr.indexOf(name) > -1;
  }

  /**
   * 타입 여부  
   * 
   * @param {string} name 
   * @returns {boolean}
   */
  function _isLeafType(name) {
    var arr = [];
    arr = arr.concat(['null', 'undefined', 'number', 'string', 'boolean']);
    arr = arr.concat(['symbol', 'bigint', 'regexp', 'object']);
    return arr.indexOf(name) > -1;
  }

  /**
   * choice type kind 여부  
   * 
   * @param {string} name 
   * @returns {boolean}
   */
  function _hasKindChoice(name) {
    var arr = [];
    if (typeof name !== 'string') return false;
    arr = arr.concat(['_ALL_', '_ANY_', '_NON_', '_ERR_']);
    arr = arr.concat(['_REQ_', '_OPT_', '_DEF_', '_EUM_']);
    arr = arr.concat(['_ETC_']); // 예외 오류 코드 검출 

    return arr.indexOf(name) > -1;
  }

  /**
   * choice type kind 여부  
   * 
   * @param {string} name 
   * @returns {boolean}
   */
  function _hasKindArray(name) {
    var arr = [];
    if (typeof name !== 'string') return false;
    arr = arr.concat(['_ALL_', '_ANY_']);
    arr = arr.concat(['_REQ_', '_OPT_', '_SEQ_']);
    arr = arr.concat(['_ETC_']); // 예외 오류 코드 검출 

    return arr.indexOf(name) > -1;
  }

  /**
   * Query all properties of the object.
   * 
   * @param {object} obj  Object to look up properties (except Object)
   * @param {boolean?} hasObj Whether to include properties of 'Object'
   * @returns {array<string>} Property Name Arrangement
   */
  function getAllProperties(obj, hasObj) {
    var allProps = [],
      cur = obj;
    var is = hasObj || false;
    do {
      var props = Object.getOwnPropertyNames(cur);
      for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        if (allProps.indexOf(prop) === -1 && (is || !Object.prototype.hasOwnProperty(prop))) allProps.push(prop);
      }
    } while (cur = Object.getPrototypeOf(cur));
    return allProps;
  }
  Type.getAllProperties = getAllProperties;

  /**
   * Compare the two objects to see if they are the same (except Prototype)  
   * 
   * @param {any} obj1 Source object
   * @param {any} obj2 Object to compare
   * @returns {boolean} Whether the two objects are the same ('true' or 'false')
   */
  function deepEqual(obj1, obj2) {
    // 두 객체가 동일한 참조를 가지면 true를 반환
    if (obj1 === obj2) return true;

    // 두 객체 중 하나가 null이거나 타입이 다르면 false를 반환
    if (obj1 === null || obj2 === null || _typeof(obj1) !== _typeof(obj2)) return false;

    // 함수 비교
    if (typeof obj1 === 'function' && typeof obj2 === 'function') {
      return obj1.toString() === obj2.toString();
    }

    // 원시 값 비교
    if (_typeof(obj1) !== 'object' || _typeof(obj2) !== 'object') return false;

    // 배열 비교
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) return false;
      for (var i = 0; i < obj1.length; i++) {
        if (!deepEqual(obj1[i], obj2[i])) return false;
      }
      return true;
    }

    // 객체 비교
    // var keys1 = Object.keys(obj1);
    // var keys2 = Object.keys(obj2);
    var keys1 = Object.getOwnPropertyNames(obj1);
    var keys2 = Object.getOwnPropertyNames(obj2);
    if (keys1.length !== keys2.length) return false;
    for (var j = 0; j < keys1.length; j++) {
      var key = keys1[j];
      if (keys2.indexOf(key) === -1 || !deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
  }
  Type.deepEqual = deepEqual;

  // function deepEqual(obj1, obj2) {
  //     if (obj1 === obj2) return true;
  //     if (typeof obj1 !== typeof obj2) return false;
  //     if ($_isPrimitiveType(obj1) && !(obj1 === obj2)) return false;
  //     if (typeof obj1 === 'function' && !$equalFunction(obj1, obj2)) return false;

  //     if (Array.isArray(obj1)) {
  //         if (obj1.length !== obj2.length) return false;
  //         for (var i = 0; i < obj1.length; i++) {
  //             var val1 = obj1[i];
  //             var val2 = obj2[i];
  //             if (!deepEqual(val1, val2)) return false;
  //         }
  //     } else {
  //         if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  //         for (var key in obj1) {
  //             if (Object.prototype.hasOwnProperty.call(obj1, key)) {
  //                 var val1 = obj1[key];
  //                 var val2 = obj2[key];
  //                 if (!deepEqual(val1, val2)) return false;
  //             }
  //         }
  //     }
  //     return true;
  //     // inner function
  //     function $equalFunction(fun1, fun2) {
  //         // if (typeof fun1 !== 'function') return false;
  //         // if (typeof fun2 !== 'function') return false;
  //         if (fun1 === fun2 || fun1.toString() === fun2.toString()) return true;
  //         return false;
  //     }
  //     function $_isPrimitiveType(obj) {
  //         if (typeof obj === 'string' || typeof obj === 'number' 
  //             || typeof obj === 'boolean' || typeof obj === 'undefined' || typeof obj === 'bigint') return true;
  //         return false;
  //     }
  // }

  /**
   * Gets the type of the given function (generator). (Can include '_UNION')  
   * The returned arrays are included in order from the specified function.  
   * 
   * @param {function} ctor Generator function or class
   * @param {boolean} [hasUnion= true] whether '_UNION' is included (default: 'true')
   * @returns {array<function>} Array function type
   */
  function getTypes(ctor, hasUnion) {
    var arr = [];
    var tempArr = [];
    var union;
    var proto;
    hasUnion = hasUnion === false ? false : true;
    if (typeof ctor !== 'function') throw new ExtendError(/EL0130C/, null, [_typeof(ctor)]);
    arr.push(ctor);
    proto = $getPrototype(ctor);
    if (proto !== Function.prototype) {
      arr = arr.concat(getTypes(proto, hasUnion));
    }
    if (hasUnion) {
      union = ctor['_UNION'] || [];
      for (var i = 0; i < union.length; i++) {
        arr = arr.concat(getTypes(union[i], hasUnion));
      }
    }
    for (var j = 0; j < arr.length; j++) {
      var idx = tempArr.indexOf(arr[j]);
      if (idx < 0) tempArr.push(arr[j]);
    }
    return tempArr;

    // innner function
    function $getPrototype(ctor) {
      // if (ctor.hasOwnProperty('super')) return ctor.super;
      if (Object.prototype.hasOwnProperty.call(ctor, 'super')) return ctor["super"];
      return !OLD_ENV$1 && typeof Object.getPrototypeOf === 'function' ? Object.getPrototypeOf(ctor) : ctor.__proto__;
    }
  }
  Type.getTypes = getTypes;

  /**
   * Verify that the prototype (inheritance) chain of the function type contains the specified target.  
   * 
   * @param {function} ctor Generator function or class
   * @param {function | string} target To be examined (generator function or class name)
   * @returns {boolean} whether to be included in the prototype chain ('true' or 'false')
   */
  function isProtoChain(ctor, target) {
    var arr;
    if (typeof ctor !== 'function') return false;
    if (!(typeof target === 'function' || typeof target === 'string')) return false;
    arr = getTypes(ctor, false);
    for (var i = 0; i < arr.length; i++) {
      if (typeof target === 'string') {
        if (target === arr[i].name) return true;
      } else {
        if (target === arr[i]) return true;
      }
    }
    return false;
  }
  Type.isProtoChain = isProtoChain;

  /**
   * Verify that the given function type is included in the prototype (inheritance) chain or is of type '_UNION'.  
   * 
   * @param {function} ctor Generator function or class
   * @param {function | string} target To be examined (generator function or class name)
   * @returns {boolean} Prototype chain or type '_UNION' ('true' or 'false')
   */
  function hasType(ctor, target) {
    var arr;
    if (typeof ctor !== 'function') return false;
    if (!(typeof target === 'function' || typeof target === 'string')) return false;
    arr = getTypes(ctor);
    for (var i = 0; i < arr.length; i++) {
      if (typeof target === 'string') {
        if (target === arr[i].name) return true;
      } else {
        if (target === arr[i]) return true;
      }
    }
    return false;
  }
  Type.hasType = hasType;

  /**
   * Returns extension information of the target type in JSON format.  
   * Analyze the internal properties of the object to transform all properties into the format 'typeObject()'.  
   * 
   * @param {*} target Target type
   * @returns {object} converted extension type object
   * @example
   * var obj = {
   *      $ype: '',
   *      default: null,                  // string, number, boolean, regexp
   *      kind: '',                       // array, choice
   *      creator: null, _instance: {},   // class
   *      _prop: {},                      // union
   *      params: [], return: null,       // function
   *      name: name, func: null,
   * }
   */
  function typeObject(target) {
    var obj = {};
    var typeObj = _isObject$1(target) && target['$type'] ? target : extendType(target);
    var leafType = ['null', 'undefined', 'number', 'string', 'boolean', 'symbol', 'bigi¡nt', 'object', 'regexp'];
    obj['$type'] = typeObj['$type'];
    if (typeObj['default'] !== null && typeof typeObj['default'] !== 'undefined') obj['default'] = typeObj['default'];
    if (typeObj['kind'] !== null && typeof typeObj['kind'] !== 'undefined') obj['kind'] = typeObj['kind'];
    if (typeObj['params']) obj['params'] = typeObj['params'];
    if (typeObj['return']) obj['return'] = typeObj['return'];
    if (typeObj['creator']) obj['creator'] = typeObj['creator'];
    if (typeObj['_instance']) obj['_instance'] = typeObj['_instance'];
    if (leafType.indexOf(obj['$type']) > -1) {
      if (typeObj['default']) obj['default'] = typeObj['default'];
      return obj;
    }
    if (obj['$type'] === 'array' || obj['$type'] === 'choice') {
      obj['list'] = [];
      for (var i = 0; i < typeObj['list'].length; i++) {
        obj['list'][i] = typeObject(typeObj['list'][i]);
      }
    }
    if (obj['$type'] === 'function') {
      for (var j = 0; j < obj['params'].length; j++) {
        obj['params'][j] = typeObject(typeObj['params'][j]);
      }
      if (typeObj['return']) obj['return'] = typeObject(typeObj['return']);
    }
    if (obj['$type'] === 'class') {
      if (typeof typeObj['ref'] === 'function') {
        obj['creator'] = typeObj['ref'].name;
        var temp = _creator(typeObj['ref']);
        obj['_instance'] = typeObject(temp);
      }
    }
    if (obj['$type'] === 'union') {
      obj['_prop'] = {};
      var temp2 = typeObj['ref'] || typeObj['_prop'];
      var list = getAllProperties(temp2);
      for (var k = 0; k < list.length; k++) {
        var key = list[k];
        if (key === '_interface' || key === 'isImplementOf') continue; // 예약어
        obj['_prop'][key] = typeObject(temp2[key]);
      }
    }
    return obj;
  }
  Type.typeObject = typeObject;

  /**
   * Returns the extension type name of the target object.  
   * 
   * @param {*} target Target object
   * @returns {string} extended type name
   */
  function typeOf(target) {
    return extendType(target)['$type'];
  }
  Type.typeOf = typeOf;

  /**
   * Returns the extension type of the target object.  
   * 
   * @param {any} target Target object
   * @returns {object} extended type object
   * @example
   * var singleType = ['undefined', 'null', 'number', 'string', 'boolean', 'regexp', 'object', 'symbol'];
   * var unionType = ['array', 'choice', 'function', 'class', 'union'];
   */
  function extendType(target) {
    var obj = {
      $type: '',
      ref: undefined
    };
    obj.toString = function () {
      var temp = '';
      var arr = [];
      if (this['$type'] === 'array' || this['$type'] === 'choice') {
        for (var i = 0; i < this['list'].length; i++) {
          var _type = extendType(this['list'][i]);
          if (_type['default'] && _type['default'] !== null) {
            var def;
            if (_type['$type'] === 'string') def = '\'' + _type['default'] + '\'';else def = _type['default'];
            arr.push(_type['$type'] + '(' + def + ')');
          } else arr.push(_type['$type']);
        }
        if (this['kind'] === '_OPT_' || this['kind'] === '_REQ_' || this['kind'] === '_SEQ_' || this['kind'] === '_EUM_' || this['kind'] === '_DEF_') {
          temp = this['$type'] + '(' + this['kind'] + ')[' + arr.join(', ') + ']';
        } else temp = this['$type'] + '(' + this['kind'] + ')';
      } else {
        temp = this['$type'];
        if (this['default'] && this['default'] !== null) {
          if (this['$type'] === 'string') temp += '(\'' + this['default'] + '\')';else temp += '(' + this['default'] + ')';
        }
      }
      return temp;
    };
    // special type
    if (_typeof(target) === 'object' && target !== null && target['$type']) {
      obj['$type'] = target['$type'];
      if (target['default']) obj['default'] = target['default'];
      if (target['kind']) obj['kind'] = target['kind'];
      if (target['ref']) obj['ref'] = target['ref'];
      if (target['list']) obj['list'] = target['list'];
      if (target['name']) obj['name'] = target['name'];
      if (target['func']) obj['func'] = target['func'];
      if (target['params']) obj['params'] = target['params'];
      if (target['return']) obj['return'] = target['return'];
      if (!_hasType(obj['$type'])) throw new ExtendError(/EL01304/, null, [obj['$type']]);
      if (obj['$type'] === 'array') {
        obj['kind'] = obj['kind'] || '_ALL_';
        if (!_hasKindArray(obj['kind'])) throw new ExtendError(/EL01305/, null, [obj['kind']]);
      }
      if (obj['$type'] === 'choice') {
        if (!_hasKindChoice(obj['kind'])) throw new ExtendError(/EL01306/, null, [obj['kind']]);
      }
      return obj;
    } else {
      obj['ref'] = target;
    }

    // step : operation
    if (target === null) {
      obj['$type'] = 'null';
    } else if (target === Number) {
      obj['$type'] = 'number';
      obj['default'] = null;
    } else if (target === String) {
      obj['$type'] = 'string';
      obj['default'] = null;
    } else if (target === Boolean) {
      obj['$type'] = 'boolean';
      obj['default'] = null;
    } else if (target === Array) {
      obj['$type'] = 'array';
      obj['kind'] = '_ALL_';
      obj['list'] = [];
    } else if (target === Function) {
      obj['$type'] = 'function';
      obj['params'] = [];
    } else if (target === Object) {
      obj['$type'] = 'object';
    } else if (target === RegExp) {
      obj['$type'] = 'regexp';
      obj['default'] = null;
    } else if (target === Symbol) {
      // ES6+
      obj['$type'] = 'symbol';
    } else if (target === BigInt) {
      // ES6+
      obj['$type'] = 'bigint';
      obj['default'] = null;
    } else if (target instanceof RegExp) {
      obj['$type'] = 'regexp';
      obj['default'] = target;
      // step : typeof
    } else if (typeof target === 'undefined') {
      obj['$type'] = 'undefined';
    } else if (typeof target === 'number') {
      obj['$type'] = 'number';
      obj['default'] = target;
    } else if (typeof target === 'string') {
      obj['$type'] = 'string';
      obj['default'] = target;
    } else if (typeof target === 'boolean') {
      obj['$type'] = 'boolean';
      obj['default'] = target;
    } else if (typeof target === 'bigint') {
      // ES6+
      obj['$type'] = 'bigint';
      obj['default'] = target;
    } else if (_typeof(target) === 'symbol') {
      // ES6+
      obj['$type'] = 'symbol';
      // step : function
    } else if (typeof target === 'function') {
      var kind = target['_KIND'];
      if (kind) {
        kind = kind.toLowerCase();
        if (kind === 'function') obj['$type'] = 'function';else obj['$type'] = 'class'; // class, interface, abstract
      } else obj['$type'] = _isUpper(target.name) ? 'class' : 'function';
      if (obj['$type'] === 'function') {
        try {
          var funcType = target['_TYPE'] ? target['_TYPE'] : _parseFunc(target.toString());
          obj['params'] = funcType['params'];
          obj['return'] = funcType['return'];
        } catch (_err) {
          obj['params'] = [];
        }
      }
      // step : array
    } else if (Array.isArray(target)) {
      if (target.length === 1 && Array.isArray(target[0])) {
        obj['$type'] = 'choice';
        if (target[0].length === 0) obj['kind'] = '_ANY_';else obj['kind'] = _getKeyCode(target[0][0]);
        obj['list'] = obj['kind'] ? target[0].slice(1) : target[0];
      } else {
        obj['$type'] = 'array';
        if (target.length === 0) obj['kind'] = '_ANY_';else obj['kind'] = _getKeyCode(target[0]);
        obj['list'] = obj['kind'] ? target.slice(1) : target;
      }
      if (!obj['kind']) obj['kind'] = '_OPT_';
      // kind 검사
      if (obj['$type'] === 'array' && !_hasKindArray(obj['kind'])) throw new ExtendError(/EL01307/, null, [obj['kind']]);
      if (obj['$type'] === 'choice' && !_hasKindChoice(obj['kind'])) throw new ExtendError(/EL01308/, null, [obj['kind']]);

      // step : object
    } else if (_isFillObj(target) || _isEmptyObj(target)) {
      obj['$type'] = 'union';

      // REVIEW:  기타 모든 함수는 object 로 처리한다. 더 좋은 방법이 있으면 대체 한다.
    } else {
      // } else if(_isPrimitiveObj(type)) {
      obj['$type'] = 'object';
    }
    // } else throw new ExtendError(/EL01309/, null, []);    // REVIEW: 커버리지 확인시 주석 처리
    return obj;
  }
  Type.extendType = extendType;

  /**
   * 원본타입에 대상타입이 덮어쓰기가 허용 가능한지 검사합니다.  
   * 원본타입에 대상타입으로 캐스팅이 가능하지 확인합니다.
   * @param {any} extType 원본 타입
   * @param {any} tarType 대상 타입
   * @param {number} opt 허용옵션 : 0 = 기본, 1 = 타입생성 비교 
   * @param {string?} pathName '' 공백시 성공
   * @returns {throw?}
   */
  function _execAllow(extType, tarType, opt, pathName) {
    var eType = extendType(extType);
    var tType = extendType(tarType);
    var prop = {};
    var sExt = eType.toString(),
      sTar = tType.toString();
    pathName = pathName ? pathName : 'extType';
    if (pathName !== 'extType' || !pathName) prop['error path'] = pathName;
    opt = opt || 0;

    // if (_isObject(eType['ref']) && _isObject(tType['ref']) && deepEqual(eType, tType)) return; // REVIEW: 필요없어  보이지만 잠시 남겨둠
    // origin seq, opt 필수 검사
    if (eType['kind']) {
      if ((eType['kind'] === '_SEQ_' || eType['kind'] === '_OPT_' || eType['kind'] === '_REQ_' || eType['kind'] === '_EUM_' || eType['kind'] === '_DEF_') && eType['list'].length === 0) {
        throw new ExtendError(/EL01201/, prop, ['extType', sExt]);
      }
    }
    // tarType seq, opt 필수 검사
    if (tType['kind']) {
      if ((tType['kind'] === '_SEQ_' || tType['kind'] === '_OPT_' || tType['kind'] === '_REQ_' || tType['kind'] === '_EUM_' || tType['kind'] === '_DEF_') && tType['list'].length === 0) {
        throw new ExtendError(/EL01201/, prop, ['tarType', sTar]);
      }
    }
    //  원본은 초이스가 아니고, tarType choice 의 인 경우
    if (eType['$type'] !== 'choice' && tType['$type'] === 'choice') {
      var choType = {
        $type: 'choice',
        kind: '_REQ_',
        list: [extType]
      };
      _execAllow(choType, tarType, opt, pathName);
      return;
    }
    // check allow type
    if (_isLeafType(eType['$type'])) {
      if (typeof eType['default'] !== 'undefined' && eType['default'] !== null && !_equalLiternal(eType['default'], tType['default'])) {
        throw new ExtendError(/EL01202/, prop, [eType['$type'], eType, tType]);
      }
      if (eType['$type'] !== tType['$type']) throw new ExtendError(/EL01203/, prop, [eType['$type'], tType['$type']]);
    } else if (eType['$type'] === 'array') $arrayAllow();else if (eType['$type'] === 'choice') $choiceAllow();else if (eType['$type'] === 'class') $classAllow();else if (eType['$type'] === 'union') $unionAllow();else if (eType['$type'] === 'function') $functionAllow();else throw new ExtendError(/EL01204/, prop, []);

    // inner function
    function $arrayAllow() {
      if (tType['$type'] !== 'array' || !Array.isArray(tType['list'])) throw new ExtendError(/EL01211/, prop, [tType['$type']]);

      // _ALL_ (all)
      if (eType['kind'] === '_ALL_') {
        return;

        // _ANY_ (any)
      } else if (eType['kind'] === '_ANY_') {
        if (tType['kind'] === '_ANY_') return;
        if (tType['kind'] === '_ALL_' || tType['kind'] === '_OPT_') {
          throw new ExtendError(/EL01212/, prop, [sTar]);
        }
        return;

        // _SEQ_ (sequence)
      } else if (eType['kind'] === '_SEQ_') {
        if (eType['kind'] !== tType['kind']) throw new ExtendError(/EL01213/, prop, [tType]);
        if (eType['list'].length > tType['list'].length) {
          throw new ExtendError(/EL01214/, prop, [eType.list.length, tType.list.length]);
        }

        // element check
        for (var i = 0; i < eType['list'].length; i++) {
          try {
            _execAllow(eType['list'][i], tType['list'][i], opt, pathName);
          } catch (error) {
            throw new ExtendError(/EL01215/, error, [i]);
          }
        }
        return;

        // _REQ_ (require)
      } else if (eType['kind'] === '_REQ_') {
        if (tType['kind'] === '_ALL_' || tType['kind'] === '_ANY_' || tType['kind'] === '_OPT_') {
          throw new ExtendError(/EL01216/, prop, [eType['$type'], sTar]);
        }

        // _OPT_ (option)
      } else if (eType['kind'] === '_OPT_') {
        if (tType['kind'] === '_ALL_' || tType['kind'] === '_ANY_') {
          throw new ExtendError(/EL01217/, prop, [eType['$type'], sTar]);
        }

        // _ETC_
      } else {
        throw new ExtendError(/EL01218/, prop, [eType['kind']]);
      }

      // element check
      for (var k = 0; k < tType['list'].length; k++) {
        var success = false;
        for (var j = 0; j < eType['list'].length; j++) {
          try {
            if (success) break;
            if (extendType(tType['list'][k])['$type'] === 'choice' && extendType(eType['list'][j])['$type'] !== 'choice') {
              var oriChoice = {
                $type: 'choice',
                kind: '_OPT_',
                list: eType['list']
              };
              _execAllow(oriChoice, tType['list'][k], opt, pathName);
            } else {
              _execAllow(eType['list'][j], tType['list'][k], opt, pathName);
            }
            success = true;
          } catch (error) {
            continue;
          }
        }
        if (!success) throw new ExtendError(/EL01219/, prop, [eType, tType]);
      }
    }
    function $choiceAllow() {
      // _ALL_ (all)
      if (eType['kind'] === '_ALL_') {
        if (tType['$type'] === tType['$type'] && tType['kind'] === '_ERR_') {
          throw new ExtendError(/EL01221/, prop, [eType['$type'], sTar]);
        }
        return;

        // _ANY_ (any)
      } else if (eType['kind'] === '_ANY_') {
        if (tType['$type'] === 'undefined') throw new ExtendError(/EL01222/, prop, ['_ANY_', 'undefined']);
        if (eType['$type'] === tType['$type'] && (tType['kind'] === '_ALL_' || tType['kind'] === '_OPT_' || tType['kind'] === '_ERR_' || tType['kind'] === '_NON_')) {
          throw new ExtendError(/EL01223/, prop, [sTar]);
        }
        return;

        // _NON_ 
      } else if (eType['kind'] === '_NON_') {
        if (eType['$type'] !== tType['$type'] || eType['kind'] !== tType['kind']) {
          // 4
          throw new ExtendError(/EL01224/, prop, [sTar]);
        }
        return;

        // _ERR_ (error)
      } else if (eType['kind'] === '_ERR_') {
        if (eType['$type'] !== tType['$type'] || eType['kind'] !== tType['kind']) {
          // 5
          throw new ExtendError(/EL01225/, prop, [sTar]);
        }
        return;

        // _REQ_ (require)
      } else if (eType['kind'] === '_REQ_') {
        if (eType['$type'] === tType['$type'] && (tType['kind'] === '_ALL_' || tType['kind'] === '_ANY_' || tType['kind'] === '_OPT_' || tType['kind'] === '_NON_' || tType['kind'] === '_ERR_')) {
          // 6
          throw new ExtendError(/EL01226/, prop, [sTar]);
        }

        // _OPT_ (option)
      } else if (eType['kind'] === '_OPT_') {
        if (tType['$type'] === 'undefined') return;
        if (eType['$type'] === tType['$type'] && (tType['kind'] === '_ALL_' || tType['kind'] === '_ANY_' || tType['kind'] === '_NON_' || tType['kind'] === '_ERR_')) {
          // 7
          throw new ExtendError(/EL01227/, prop, [sTar]);
        }

        // _EUN_ (enumeration)
      } else if (eType['kind'] === '_EUM_') {
        if (eType['$type'] !== tType['$type'] || eType['kind'] !== tType['kind']) {
          throw new ExtendError(/EL01228/, prop, []);
        }
        for (var i = 0; i < eType['list'].length; i++) {
          if (!_isLiteral(eType['list'][i])) throw new ExtendError(/EL01229/, prop, [i, extendType(eType['list'][i])]);
        }
        for (var j = 0; j < tType['list'].length; j++) {
          if (!_isLiteral(tType['list'][j])) throw new ExtendError(/EL0122A/, prop, [j, extendType(tType['list'][j])]);
        }

        // _DEF_ (default)
      } else if (eType['kind'] === '_DEF_') {
        if (eType['$type'] !== tType['$type'] || eType['kind'] !== tType['kind']) {
          throw new ExtendError(/EL0122B/, prop, []);
        }
        if (!_isLiteral(eType['list'][0])) throw new ExtendError(/EL0122C/, prop, [extendType(eType['list'][0])]);
        if (!_isLiteral(tType['list'][0])) throw new ExtendError(/EL0122D/, prop, [extendType(tType['list'][0])]);

        // _ETC_
      } else {
        throw new ExtendError(/EL0122E/, prop, [eType['kind']]);
      }

      // element check
      var arrTarget = tType['kind'] ? tType['list'] : [tarType];
      for (var m = 0; m < arrTarget.length; m++) {
        var success = false;
        for (var n = 0; n < eType['list'].length; n++) {
          try {
            if (success) continue;
            _execAllow(eType['list'][n], arrTarget[m], opt, pathName);
            success = true;
          } catch (error) {
            continue;
          }
        }
        if (!success) throw new ExtendError(/EL0122F/, prop, [m, eType, extendType(arrTarget[m])['$type']]);
      }
    }
    function $classAllow() {
      var oriObj;
      var tarObj;
      if (tType['$type'] === 'class') {
        // # class to class
        if (isProtoChain(tType['ref'], eType['ref'])) return undefined; // 1.proto check
        if (opt === 1) {
          try {
            // 생성비교
            oriObj = new eType['ref']();
            tarObj = new tType['ref']();
            return _execAllow(oriObj, tarObj, opt, pathName);
          } catch (error) {
            throw new ExtendError(/EL01231/, error, []);
          }
        }
        throw new ExtendError(/EL01232/, prop, [opt]);
      } else if (tType['$type'] === 'union') {
        // # class to union
        if (opt === 1) {
          try {
            // 생성비교
            oriObj = new eType['ref']();
            return _execAllow(oriObj, tType['ref'], opt, pathName);
          } catch (error) {
            throw new ExtendError(/EL01233/, error, []);
          }
        }
        throw new ExtendError(/EL01234/, prop, [opt]);
      }
      throw new ExtendError(/EL01235/, prop, [tType]);
    }
    function $unionAllow() {
      var list;
      if (tType['$type'] !== 'union') throw new ExtendError(/EL01241/, prop, [tType]);
      list = getAllProperties(eType['ref']);
      for (var i = 0; i < list.length; i++) {
        var key = list[i];
        if (!(key in tType['ref'])) throw new ExtendError(/EL01242/, prop, [key, typeOf(extType[key])]);
        try {
          _execAllow(eType['ref'][key], tType['ref'][key], opt, pathName);
        } catch (error) {
          throw new ExtendError(/EL01243/, error, [key]);
        }
      }
    }
    function $functionAllow() {
      if (tType['$type'] !== 'function') throw new ExtendError(/EL01251/, prop, [tType]);
      if (eType['ref'] === Function) return;
      // special type check
      if (eType['name']) {
        if (eType['name'] === tarType.name || eType['name'] === tType['name'] || tType['func'] && eType['name'] === tType['func'].name) return;
        throw new ExtendError(/EL01252/, prop, [eType['name'], tType.name]);
      }
      if (eType['func']) {
        if (typeof tType['func'] !== 'function') throw new ExtendError(/EL01253/, prop, []);
        if (isProtoChain(tType['func'], eType['func'])) return;
        throw new ExtendError(/EL01254/, prop, []);
      }
      if (!eType['return'] && (!eType['params'] || eType['params'].length === 0)) return;
      if (typeof tType['params'] === 'undefined' && typeof tType['return'] === 'undefined') {
        throw new ExtendError(/EL01255/, prop, [extendType(eType.params), typeOf(eType["return"])]);
      }
      if (Array.isArray(eType['params']) && eType['params'].length > 0) {
        try {
          // params check
          _execAllow(['_SEQ_'].concat(eType['params']), ['_SEQ_'].concat(tType['params']), opt, pathName);
        } catch (error) {
          throw new ExtendError(/EL01256/, error, []);
        }
      }
      if (eType['return']) {
        try {
          // return check
          _execAllow(eType['return'], tType['return'], opt, pathName);
        } catch (error) {
          throw new ExtendError(/EL01257/, error, []);
        }
      }
    }
  }

  /**
   * 타입을 검사하여 메세지를 리턴
   * @param {any} extType 검사할 타입 , extType 
   * @param {any} target 검사대상
   * @param {number} [opt] 허용옵션 : 0 = 기본, 1 = 타입생성 비교 
   * @param {string} [pathName] '' 공백시 성공
   * @throws {ExtendError}
   */
  function _execMatch(extType, target, opt, pathName) {
    var eType = extendType(extType);
    var tType = extendType(target);
    var prop = {};
    var sExt = eType.toString(),
      sTar = tType.toString();
    pathName = pathName ? pathName : 'extType';
    if (pathName !== 'extType') prop['error path'] = pathName; // TODO: 'target' 명칭의 중복 수정필요
    opt = opt || 0;

    // seq, opt 필수 검사
    if (eType['kind']) {
      if ((eType['kind'] === '_SEQ_' || eType['kind'] === '_OPT_' || eType['kind'] === '_REQ_' || eType['kind'] === '_EUM_' || eType['kind'] === '_DEF_') && (typeof eType['ref'] === 'undefined' || eType['list'].length === 0)) {
        throw new ExtendError(/EL01101/, prop, ['extType', sExt]);
      }
    }

    // check match type
    if (eType['$type'] === 'null') {
      if (target !== null) throw new ExtendError(/EL01102/, prop, ['null', sTar]);
    } else if (eType['$type'] === 'undefined') {
      if (typeof target !== 'undefined') throw new ExtendError(/EL01102/, prop, ['undefined', sTar]);
    } else if (eType['$type'] === 'string') {
      if (typeof eType['default'] === 'string' && typeof target === 'undefined') target = eType['default'];
      if (typeof target !== 'string') throw new ExtendError(/EL01102/, prop, ['string', sTar]);
    } else if (eType['$type'] === 'number') {
      if (typeof eType['default'] === 'number' && typeof target === 'undefined') target = eType['default'];
      if (typeof target !== 'number') throw new ExtendError(/EL01102/, prop, ['number', sTar]);
    } else if (eType['$type'] === 'boolean') {
      if (typeof eType['default'] === 'boolean' && typeof target === 'undefined') target = eType['default'];
      if (typeof target !== 'boolean') throw new ExtendError(/EL01102/, prop, ['boolean', sTar]);
    } else if (eType['$type'] === 'bigint') {
      // ES6+
      if (typeof eType['default'] === 'bigint' && typeof target === 'undefined') target = eType['default'];
      if (typeof target !== 'bigint') throw new ExtendError(/EL01102/, prop, ['bigint', sTar]);
    } else if (eType['$type'] === 'symbol') {
      // ES6+
      if (_typeof(target) !== 'symbol') throw new ExtendError(/EL01102/, prop, ['symbol', sTar]);
    } else if (eType['$type'] === 'regexp') {
      if (eType['default'] && eType['default'] !== null && typeof target === 'undefined') target = eType['default'];
      if (!(target instanceof RegExp)) throw new ExtendError(/EL01102/, prop, ['regexp', sTar]);
    } else if (eType['$type'] === 'object') {
      if (tType['$type'] !== 'object') throw new ExtendError(/EL01102/, prop, ['object', sTar]);
    } else if (eType['$type'] === 'array') $arrayMatch();else if (eType['$type'] === 'choice') $choiceMatch();else if (eType['$type'] === 'class') $classMatch();else if (eType['$type'] === 'union') $unionMatch();else if (eType['$type'] === 'function') $functionMatch();else throw new ExtendError(/EL01103/, prop, []);

    // inner function
    function $arrayMatch() {
      if (!Array.isArray(target)) throw new ExtendError(/EL01111/, prop, [sTar]);

      // _ALL_ (all)
      if (eType['kind'] === '_ALL_') {
        return;

        // _ANY_ (any)
      } else if (eType['kind'] === '_ANY_') {
        if (target.length === 0) throw new ExtendError(/EL01112/, prop, [target.length]);
        return;

        // _SEQ_ (sequence)
      } else if (eType['kind'] === '_SEQ_') {
        if (eType['list'].length > target.length) throw new ExtendError(/EL01113/, prop, [eType['list'].length, tType['list'].length]); // REVIEW: 세부정보 표현
        for (var i = 0; i < eType['list'].length; i++) {
          var _elem = eType['list'][i];
          var _tar = tType['list'][i];
          if (_isLiteral(_elem)) {
            if (!_equalLiternal(_elem, _tar)) throw new ExtendError(/EL01114/, prop, [i, _elem, _tar]);
          } else {
            try {
              _execMatch(_elem, _tar, opt, pathName);
            } catch (error) {
              throw new ExtendError(/EL01115/, error, [i, typeOf(_elem)]);
            }
          }
        }
        return;

        // _REQ_ (require)
      } else if (eType['kind'] === '_REQ_') {
        if (target.length === 0) throw new ExtendError(/EL01116/, prop, [target.length]);

        // _OPT_ (option)
      } else if (eType['kind'] === '_OPT_') {
        if (Array.isArray(target) && target.length === 0) return;

        // _ETC_
      } else {
        throw new ExtendError(/EL01117/, prop, [eType['kind']]);
      }

      // element check
      for (var k = 0; k < target.length; k++) {
        var tar = target[k];
        var success = false;
        for (var j = 0; j < eType['list'].length; j++) {
          try {
            var elem = eType['list'][j];
            if (_isLiteral(elem)) {
              if (_equalLiternal(elem, tar)) {
                success = true;
                break;
              }
            } else {
              _execMatch(elem, tar, opt, pathName); // REVIEW: pathName + '['+i+']'  이렇게 들어가야 함
              success = true;
              break;
            }
          } catch (error) {
            continue;
          }
        }
        if (!success) {
          throw new ExtendError(/EL01118/, prop, [eType.toString(), tType.toString()]);
        }
      }
    }
    function $choiceMatch() {
      // _ALL_ (all)
      if (eType['kind'] === '_ALL_') {
        return undefined;

        // _ANY_ (any)
      } else if (eType['kind'] === '_ANY_') {
        if (typeof target !== 'undefined') return undefined;
        throw new ExtendError(/EL01121/, prop, []);

        // _NON_ (none)
      } else if (eType['kind'] === '_NON_') {
        if (typeof target === 'undefined') return undefined;
        throw new ExtendError(/EL01122/, []);

        // _ERR_ (error)
      } else if (eType['kind'] === '_ERR_') {
        if (target instanceof Error) return undefined;
        throw new ExtendError(/EL01123/, []);

        // _REQ_ (require)
      } else if (eType['kind'] === '_REQ_') ; else if (eType['kind'] === '_OPT_') {
        if (typeof target === 'undefined') return undefined;

        // _EUN_ (enumeration)
      } else if (eType['kind'] === '_EUM_') {
        for (var i = 0; i < eType['list'].length; i++) {
          if (!_isLiteral(eType['list'][i])) throw new ExtendError(/EL01124/, prop, [i, typeOf(eType['list'][i])]);
        }

        // _DEF_ (default)
      } else if (eType['kind'] === '_DEF_') {
        if (!_isLiteral(eType['list'][0])) throw new ExtendError(/EL01125/, prop, [typeOf(eType['list'][0])]);
        if (typeof target === 'undefined') {
          target = eType['list'][0];
          return undefined;
        }
        // _IDX_ (index)
        // } else if (eType['kind'] === '_IDX_') {
        /**
         * POINT:
         * - 검사
         *  + target object 검사
         *  -\+ 파라메터 2개 검사
         * 
         * - 인덱스 타입 목록 추출
         * 
         * - 초이스로 변환
         *  + 허용타입들 + 
         * 
         * this.command = [['_AND_',  { aa: 1 }, ClassA ]]
         * [['_IDX_', String]]
         * [['_KEY_', Number, String, '리터럴']]
         * 
         * this.command = [['_AND_', [['_IDX_', String]], [['_KEY_', Number, String, '리터럴']] ]]
         * 
         * 마지막에 리턴 및 실패 처리
         */

        /**
         * - 검사
         *  + 타겟의 object 여부 검사
         *  + 파라메터 1개 이상 검사
         * - 조건문 처리
         *  + 둘다 성공해야 성공
         */
        // POINT: 개발 해야함
        // if (eType['list'].length === 0) throw new ExtendError('TODO: IDX 는 검사 타입이 없습니다. 하나이상 있어야 합니다.', prop, []);
        // if (tType['$type'] !== 'union') throw new ExtendError('TODO: IDX 는 검사 대상이 object(union) 타입만 가능합니다.', prop, ['object', sTar]);

        // for(var i = 0; i < eType['list'].length; i++) {
        //     var _elem   = eType['list'][i];

        //     // var _tar    = tType['list'][i];
        //     try {
        //         _execMatch(_elem, target);
        //     } catch (error) {
        //         throw new ExtendError('TODO: ', error, []);
        //     }

        // }

        // _ETC_
      } else {
        throw new ExtendError(/EL01126/, prop, [eType['kind']]);
      }

      // element check
      for (var j = 0; j < eType['list'].length; j++) {
        try {
          var elem = eType['list'][j];
          if (_isLiteral(elem)) {
            if (_equalLiternal(elem, target)) return undefined;
          } else {
            return _execMatch(elem, target, opt, pathName);
          }
        } catch (error) {
          continue;
        }
      }
      throw new ExtendError(/EL01127/, prop, [eType, tType]);
    }
    function $classMatch() {
      if (tType['$type'] === 'class') {
        // # class to class
        if (typeof eType['ref'] === 'undefined') return undefined; // 전역 클래스 타입
        if (isProtoChain(tType['ref'], eType['ref'])) return undefined;
      } else if (_typeof(target) === 'object') {
        // # class to typeof 'object'
        if (target instanceof extType) return undefined;
        if (!_isBuiltFunction(extType) && target !== null && opt === 1) {
          try {
            var subPath = pathName === 'extType' ? '<instance>' : pathName + '<instance>';
            return _execMatch(_creator(extType), target, opt, subPath);
          } catch (error) {
            throw new ExtendError(/EL01131/, error);
          }
        }
        throw new ExtendError(/EL01132/, prop, [_typeName(extType)]);
      }
      throw new ExtendError(/EL01133/, prop, [tType]);
    }
    function $unionMatch() {
      var list;
      if (tType['$type'] !== 'union') throw new ExtendError(/EL01141/, prop, [tType]);
      list = getAllProperties(eType.ref);
      for (var i = 0; i < list.length; i++) {
        var key = list[i];
        var listDefType = extendType(extType[key]);
        // REVIEW: for 위쪽으로 이동 검토!
        if (key === '_interface' || key === 'isImplementOf') continue; // 예약어
        // REVIEW: 재귀로 구현 체크
        // default 설정
        if (typeof listDefType['default'] !== 'undefined' && listDefType['default'] !== null && typeof target[key] === 'undefined') target[key] = listDefType['default'];
        // POINT:
        // if (target !== null && !(key in target)) throw new ExtendError(/EL01142/, prop, [key, typeOf(extType[key])]);    
        try {
          var subPath = pathName + '[\'' + key + '\']';
          _execMatch(extType[key], target[key], opt, subPath);
        } catch (error) {
          throw new ExtendError(/EL01143/, error, [key]);
        }
      }
    }
    function $functionMatch() {
      if (tType['$type'] !== 'function') throw new ExtendError(/EL01151/, prop, [tType]);
      if (eType['ref'] === Function) return;
      // special type check
      if (eType['name']) {
        if (eType['name'] === target.name || eType['name'] === tType['name'] || tType['func'] && eType['name'] === tType['func'].name) return;
        throw new ExtendError(/EL01152/, prop, [eType['name'], target.name]);
      }
      if (eType['func']) {
        if (typeof tType['func'] !== 'function') throw new ExtendError(/EL01153/, prop, []);
        if (isProtoChain(tType['func'], eType['func'])) return;
        throw new ExtendError(/EL01154/, prop, []);
      }
      if (!eType['return'] && (!eType['params'] || eType['params'].length === 0)) return;
      if (typeof tType['params'] === 'undefined' && typeof tType['return'] === 'undefined') {
        throw new ExtendError(/EL01155/, prop, [extendType(eType.params), typeOf(eType["return"])]);
      }
      // params check
      if (Array.isArray(eType['params']) && eType['params'].length > 0) {
        try {
          _execAllow(['_SEQ_'].concat(eType['params']), ['_SEQ_'].concat(tType['params']), opt, pathName);
        } catch (error) {
          throw new ExtendError(/EL01156/, error, []);
        }
      }
      // return check
      if (eType['return']) {
        try {
          _execAllow(eType['return'], tType['return'], opt, pathName);
        } catch (error) {
          throw new ExtendError(/EL01157/, prop, []);
        }
      }
    }
  }

  /**
   * Verify that the extension type allows the target type.  
   * 
   * @param {any} extType Extension Type
   * @param {any} tarType What type to check
   * @param {number} [opt=0] Allow option (0 = Keep existing, 1 = Create class type)
   * @returns {throw?} Exception occurs if extension type does not allow target type
   */
  function allowType(extType, tarType, opt) {
    try {
      _execAllow(extType, tarType, opt);
    } catch (error) {
      throw new ExtendError(/EL0130A/, error);
    }
  }
  Type.allowType = allowType;

  /**
   * Verify that the extension type matches the target.  
   * 
   * @param {any} extType Extension Type
   * @param {any} target For inspection
   * @param {number} [opt=0] Allow option (0 = Keep existing, 1 = Create class type)
   * @returns {throw?} Exception occurs when failing
   */
  function matchType(extType, target, opt) {
    try {
      _execMatch(extType, target, opt);
    } catch (error) {
      throw new ExtendError(/EL0130B/, error);
    }
  }
  Type.matchType = matchType;

  /**
   * Determine whether the extension type allows the target type.  
   * 
   * @param {any} extType Extension Type
   * @param {any} target Type to be examined
   * @param {number} opt Allow option (0 = Keep existing, 1 = Create class type)
   * @returns {boolean} whether to allow ('true' or 'false')
   */
  function isAllowType(extType, target, opt) {
    try {
      _execAllow(extType, target, opt);
    } catch (error) {
      return false;
    }
    return true;
  }
  Type.isAllowType = isAllowType;

  /**
   * Verify that the extension type matches the target.  
   * 
   * @param {any} extType Extension Type
   * @param {any} target Type to be examined
   * @param {number} [opt] Allow option (0 = Keep existing, 1 = Create class type)
   * @returns {boolean} Match or not ('true' or 'false')
   */
  function isMatchType(extType, target, opt) {
    try {
      _execMatch(extType, target, opt);
      return true;
    } catch (error) {
      return false;
    }
  }
  Type.isMatchType = isMatchType;

  var _global = globalThis;
  var OLD_ENV = _global.OLD_ENV ? _global.OLD_ENV : false; // 커버리지 테스트 역활

  /**
   * This is a utility module.
   */
  var Util = {};

  // local function
  function _isObject(obj) {
    return obj !== null && _typeof(obj) === 'object';
  }

  // polyfill
  if (!Array.isArray || OLD_ENV) {
    Array.isArray = function (p_obj) {
      return Object.prototype.toString.call(p_obj) === '[object Array]';
    };
  }
  // REVIEW: 제거해둠, 대부분은 keys 는 기본으로 정의되어 있음
  // if (!Object.keys) {
  //     Object.keys = (function () {
  //         var hasOwnProperty = Object.prototype.hasOwnProperty;
  //         var hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString');
  //         var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
  //         var dontEnumsLength = dontEnums.length;
  //         return function (obj) {
  //             if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new Error('Object.keys called on non-object');
  //             var result = [];
  //             for (var prop in obj) if (hasOwnProperty.call(obj, prop)) result.push(prop);
  //             if (hasDontEnumBug) {
  //               for (var i=0; i < dontEnumsLength; i++) {
  //                 if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
  //               }
  //             }
  //             return result;
  //         }
  //     })()
  // };

  /**
   * Returns the nested depth of the array.  
   * REVIEW: 필요성 검토 필요!
   * 
   * @param {array} p_elem Array elements
   * @param {number} p_depts Current depth (default: 0)
   * @returns {number} Maximum nested depth of array
   */
  Util.getArrayDepth = function getArrayDepth(p_elem, p_depts) {
    var MAX = 10;
    var level = 0;
    p_depts = p_depts || 0;
    if (p_elem instanceof Array && MAX > p_depts) {
      level++;
      p_depts++;
      level = level + getArrayDepth(p_elem[0], p_depts);
    }
    return level;
  };

  /**
   * Creates a 36-digit GUID.  
   * 
   * @returns {string} GUID string generated
   */
  Util.createGuid = function createGuid() {
    function _p8(s) {
      var p = (Math.random().toString(16) + '000000000').substring(2, 10);
      return s ? '-' + p.substring(0, 4) + '-' + p.substring(4, 8) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
  };

  /**
   * Deep copy of the object (except prototype)  
   * 
   * @param {object} p_target Destination object to copy
   * @returns {object} copied object
   */
  Util.deepCopy = function deepCopy(p_target) {
    var nobj;
    if (!_isObject(p_target)) {
      return p_target;
    }
    if (p_target instanceof RegExp) return p_target;

    // 객체인지 배열인지 판단
    nobj = Array.isArray(p_target) ? [] : {};
    if (Array.isArray(p_target)) {
      for (var i = 0; i < p_target.length; i++) {
        nobj[i] = deepCopy(p_target[i]);
      }
    } else {
      for (var key in p_target) {
        if (Object.prototype.hasOwnProperty.call(p_target, key)) {
          nobj[key] = deepCopy(p_target[key]);
        }
      }
    }
    return nobj;
  };

  /**
   * Sets the specified creator to inherit the parent creator.   
   * 
   * @function
   * @param {function | object} ctor generator function or object
   * @param {function | object} superCtor Parent generator function or object
   */
  Util.inherits = function () {
    if (typeof Object.create === 'function' && !OLD_ENV) {
      // implementation from standard node.js 'Util' module
      return function (ctor, superCtor) {
        if (superCtor) {
          ctor["super"] = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              writable: true,
              configurable: true,
              enumerable: false
            }
          });
        }
      };
    } else {
      // old school shim for old browsers
      return function (ctor, superCtor) {
        if (superCtor) {
          ctor["super"] = superCtor;
          var TempCtor = function TempCtor() {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }();

  /**
   * Verify that the object implements the specified interface.  
   * Verify that the 'obj' object created with 'ctor' implements the interface provided by 'interfaces'.  
   * If 'ctor._KIND' is 'Interface', use 'allowType()' to confirm.  
   * Otherwise, use 'matchType()' to confirm.  
   * 
   * @name implements
   * @function
   * @param {function} p_ctor Generator to be examined
   * @param {object} p_obj object to be examined
   * @param {function?} args List of interfaces to check
   */
  Util["implements"] = function (p_ctor, p_obj) {
    var _interface = [];
    var addCnt = 0;
    if (typeof p_ctor !== 'function') throw new ExtendError(/EL01401/, null, [_typeof(p_ctor)]);
    if (!_isObject(p_obj)) throw new ExtendError(/EL01402/, null, [_typeof(p_obj)]);
    if (typeof p_obj._interface === 'undefined') {
      Object.defineProperty(p_obj, '_interface', {
        get: function get() {
          return _interface;
        },
        configurable: false,
        enumerable: false
      });
    }
    if (!p_ctor['_UNION']) p_ctor['_UNION'] = [];
    for (var i = 2; i < arguments.length; i++) {
      if (typeof arguments[i] === 'function') {
        if (p_obj._interface.indexOf(arguments[i]) < 0) {
          // 중복 검사 
          p_obj._interface.push(arguments[i]);
          addCnt++;
        }
      } else throw new ExtendError(/EL01403/, null, [i - 2, _typeof(arguments[i])]);
    }
    for (var j = 0; j < p_ctor['_UNION'].length; j++) {
      if (p_obj._interface.indexOf(p_ctor['_UNION'][j]) < 0) {
        // 인터페이스 중복 검사 후 등록
        p_obj._interface.push(p_ctor['_UNION'][j]);
        addCnt++;
      }
    }
    try {
      var beginIdx = p_obj._interface.length - addCnt;
      for (var k = beginIdx; k < p_obj._interface.length; k++) {
        if (p_ctor['_KIND'] === 'interface') {
          // 인터페이스 타입과 분리
          Type.allowType(p_obj._interface[k], p_obj, 1);
        } else Type.matchType(p_obj._interface[k], p_obj, 1);
      }
    } catch (error) {
      throw new ExtendError(/EL01404/, error, [$typeName(p_obj), $typeName(p_obj._interface[i]), p_ctor['_KIND'] || 'class']);
    }
    if (typeof p_obj.isImplementOf === 'undefined') {
      // 내부 메소드 설정
      Object.defineProperty(p_obj, 'isImplementOf', {
        value: $isImplementOf,
        configurable: false,
        enumerable: false
      });
    }

    // inner function
    function $isImplementOf(target) {
      if (typeof target === 'function') {
        for (var i = 0; i < this._interface.length; i++) {
          if (this._interface[i] === target) return true;
        }
      } else if (typeof target === 'string') {
        for (var j = 0; j < this._interface.length; j++) {
          if (this._interface[j].name === target) return true;
        }
      } else throw new ExtendError(/EL01405/, null, [_typeof(target)]);
      return false;
    }
    function $typeName(obj) {
      var proto;
      var constructor;
      if (typeof obj === 'function') {
        return obj.name;
      } else if (_typeof(obj) === 'object') {
        proto = !OLD_ENV && Object.getPrototypeOf ? Object.getPrototypeOf(obj) : obj.__proto__;
        constructor = proto.constructor;
        return constructor.name;
      } else return 'unknown name';
    }
  };

  // import Util from './util.js';
  // import Message from './message.js';

  var EventEmitter = function () {
    /**
     * Creates an instance of the class 'EventEmitter'.
     * @constructs EventEmitter
     */
    function EventEmitter() {
      var $storage = {};
      var isLog = false;

      /**
       * Internal object that stores registered events.  
       * 
       * @private
       * @member {object}  EventEmitter#$subscribers  
       */
      Object.defineProperty(this, '$storage', {
        get: function get() {
          return $storage;
        },
        set: function set(nVal) {
          if (!_isObject(nVal)) throw new ExtendError(/EL01501/, null, [this.constructor.name, nVal]);
          $storage = nVal;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * Array that stores registered event names.  
       * 
       * @protected
       * @member {object}  EventEmitter#_list  
       */
      Object.defineProperty(this, '_list', {
        get: function get() {
          return Object.keys(this.$storage);
        },
        configurable: false,
        enumerable: false
      });

      /**
       * Array that stores registered event names.
       * 
       * @member {boolean}  EventEmitter#isLog  
       */
      Object.defineProperty(this, 'isLog', {
        get: function get() {
          return isLog;
        },
        set: function set(nVal) {
          if (typeof nVal !== 'boolean') throw new ExtendError(/EL01502/, null, [this.constructor.name, nVal]);
          isLog = nVal;
        }
      });
    }
    EventEmitter._NS = 'Common'; // namespace

    // local function
    function _isString(obj) {
      // 공백 아닌 문자 여부
      if (typeof obj === 'string' && obj.length > 0) return true;
      return false;
    }
    function _isObject(obj) {
      // 객체 여부
      if (_typeof(obj) === 'object' && obj !== null) return true;
      return false;
    }

    /**
     * Adds a listener (function) for the event.  
     * 
     * @param {string} p_event Event Name
     * @param {function} p_listener Listener function
     */
    EventEmitter.prototype.on = function (p_event, p_listener) {
      if (!_isString(p_event)) throw new ExtendError(/EL01503/, null, [_typeof(p_event)]);
      if (typeof p_listener !== 'function') throw new ExtendError(/EL01504/, null, [_typeof(p_listener)]);
      if (_typeof(this.$storage[p_event]) !== 'object') {
        this.$storage[p_event] = [];
      }
      if (this.$storage[p_event].indexOf(p_listener) === -1) {
        this.$storage[p_event].push(p_listener);
      }
      // this.$storage[p_event].push(p_listener);
    };
    /** Alias for method 'on(). */
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

    /**
     * Adds a one-time function for the event.  
     * 
     * @param {string} p_event Event Name
     * @param {function} p_listener Listener function
     */
    EventEmitter.prototype.once = function (p_event, p_listener) {
      var self = this;
      if (!_isString(p_event)) throw new ExtendError(/EL01505/, null, [_typeof(p_event)]);
      if (typeof p_listener !== 'function') throw new ExtendError(/EL01506/, null, [_typeof(p_listener)]);
      function onceListener() {
        self.off(p_event, onceListener);
        p_listener.apply(self, arguments);
      }
      this.on(p_event, onceListener);
    };

    /**
     * Removes the listener (function) of the specified event.  
     * 
     * @param {string} p_event Event Name
     * @param {function} p_listener Listener function
     */
    EventEmitter.prototype.off = function (p_event, p_listener) {
      if (!_isString(p_event)) throw new ExtendError(/EL01507/, null, [_typeof(p_event)]);
      if (typeof p_listener !== 'function') throw new ExtendError(/EL01508/, null, [_typeof(p_listener)]);
      if (_typeof(this.$storage[p_event]) === 'object') {
        var idx = this.$storage[p_event].indexOf(p_listener);
        if (idx > -1) {
          this.$storage[p_event].splice(idx, 1);
        }
      }
    };
    /** Alias of method 'off()'. */
    EventEmitter.prototype.removeListener = EventEmitter.prototype.off; // 별칭

    /**
     * Remove all events or all listeners registered for a particular event.  
     * @param {string} [p_event] Name of the event to be removed (Remove all events if omitted)
     */
    EventEmitter.prototype.removeAllListeners = function (p_event) {
      if (!p_event) {
        this.$storage = {}; // 초기화
      }
      if (_typeof(this.$storage[p_event]) === 'object') {
        delete this.$storage[p_event];
      }
    };

    /**
     * Runs the listener (function) of the registered event.  
     * 
     * @param {string} p_event Event Name
     * @returns {boolean | undefined}  'true' listener execution successful, 'false' execution failed, 'undefined' listener no
     */
    EventEmitter.prototype.emit = function (p_event) {
      var args = [].slice.call(arguments, 1);
      var listeners = [];
      // var isListener = false;
      var isReturn;
      if (!_isString(p_event)) throw new ExtendError(/EL01509/, null, [_typeof(p_event)]);
      if (_typeof(this.$storage[p_event]) === 'object') {
        listeners = this.$storage[p_event].slice();
        for (var i = 0; i < listeners.length; i++) {
          isReturn = listeners[i].apply(this, args);
          if (isReturn === false) return false;
        }
      }
      if (this.isLog) console.log('[' + p_event + '] 이벤트가 밸생하였습니다.');
      return listeners.length > 0 ? true : undefined;
    };
    return EventEmitter;
  }();

  /**** i-object.js | IObject ****/
  //==============================================================    
  // import Message from './message.js';    
  var IObject = function () {
    /**
     * Object interface.  
     * 
     * @constructs IObject 
     * @interface
     */
    function IObject() {}
    IObject._NS = 'Interface'; // namespace
    IObject._KIND = 'interface';

    /**
     * Returns a list of types of objects.  
     * 
     * @returns {Function[]} Arrangement of types of objects
     * @abstract
     */
    IObject.prototype.getTypes = function () {
      throw new ExtendError(/EL02111/, null, ['IObject']);
    };

    /**
     * Verify that the object is an instance of a particular class or interface.  
     * 
     * @returns {boolean} Instance or 'true' if it's an instance or 'false' if it's not
     * @abstract
     */
    IObject.prototype.instanceOf = function () {
      throw new ExtendError(/EL02112/, null, ['IObject']);
    };

    /**
     * Compare that the object is the same as the given object.  
     * 
     * @returns {boolean} If two objects are the same, 'true', or 'false'
     * @abstract
     */
    IObject.prototype.equal = function () {
      throw new ExtendError(/EL02113/, null, ['IObject']);
    };
    return IObject;
  }();

  /**** i-marshal.js | IMarshal ****/
  //==============================================================
  // import Message from './message.js';    
  var IMarshal = function () {
    /**
     * Object control interface.  
     * 
     * @interface
     */
    function IMarshal() {
      /**
       * Internal property that stores the unique identifier of the object.  
       * 
       * @member {string} IMarshal#_guid
       */
      this._guid = String;

      /**
       * Internal property that stores the creator type of the object.  
       * 
       * @member {string} IMarshal#_type REVIEW:
       */
      this._type = [['_req_', Function, {
        $type: 'class'
      }]];
    }
    IMarshal._NS = 'Interface'; // namespace
    IMarshal._KIND = 'interface';

    /**
     * Returns the object literal.  
     * 
     * @abstract
     */
    IMarshal.prototype.getObject = function () {
      throw new ExtendError(/EL02121/, null, ['IMarshal']);
    };

    /**
     * Set the object literal by converting it to an instance.  
     * 
     * @abstract
     */
    IMarshal.prototype.setObject = function () {
      throw new ExtendError(/EL02122/, null, ['IMarshal']);
    };
    return IMarshal;
  }();

  /**** i-collection.js | ICollection ****/
  //==============================================================
  // import Message from './message.js';
  var ICollection = function () {
    /**
     * This is the collection interface.
     * @constructs ICollection
     * @interface
     */
    function ICollection() {}
    ICollection._KIND = 'interface';
    ICollection._NS = 'Interface'; // namespace

    /**
     * Add an element to the collection.  
     * 
     * @abstract
     */
    ICollection.prototype.add = function () {
      throw new ExtendError(/EL02161/, null, ['ICollection']);
    };

    /**
     * Remove an element from the collection.  
     * 
     * @abstract
     */
    ICollection.prototype.remove = function () {
      throw new ExtendError(/EL02162/, null, ['ICollection']);
    };

    /**
     * Verify that an element exists in the collection.  
     * 
     * @returns {boolean} If the element exists, it is 'true', otherwise it is 'false'
     * @abstract
     */
    ICollection.prototype.contains = function () {
      throw new ExtendError(/EL02163/, null, ['ICollection']);
    };

    /**
     * Returns the index of an element in the collection.  
     * 
     * @returns {number}  index of element, '-1' without element
     * @abstract
     */
    ICollection.prototype.indexOf = function () {
      throw new ExtendError(/EL02164/, null, ['ICollection']);
    };
    return ICollection;
  }();

  /**** i-collection-property.js | IPropertyCollection ****/
  //==============================================================
  // import Message from './message.js';    
  var IPropertyCollection = function (_super) {
    /**
     * This is the property collection interface.  
     * 
     * @constructs IPropertyCollection
     * @interface
     * @extends  ICollection
     */
    function IPropertyCollection() {
      _super.call(this);
    }
    Util.inherits(IPropertyCollection, _super);
    IPropertyCollection._KIND = 'interface';
    IPropertyCollection._NS = 'Interface'; // namespace

    /**
     * Returns the property key for the specified index.  
     * 
     * @returns {boolean} Property key for that index
     * @abstract
     */
    IPropertyCollection.prototype.indexToKey = function () {
      throw new ExtendError(/EL02181/, null, ['IPropertyCollection']);
    };
    return IPropertyCollection;
  }(ICollection);

  /**** i-element.js | IElement ****/
  //==============================================================
  // import Message from './message.js';    
  var IElement = function () {
    /**
     * Element (independent) interface.  
     * @constructs IElement
     * @interface
     */
    function IElement() {
      /**
       * Internal property that stores the name of the element.  
       * 
       * @member {string} IElement#_name
       */
      this._name = String;
    }
    IElement._NS = 'Interface'; // namespace
    IElement._KIND = 'interface';

    /**
     * Creates a copy of the current element.  
     * 
     * @returns {object} Replicated Elements
     * @abstract
     */
    IElement.prototype.clone = function () {
      throw new ExtendError(/EL02131/, null, ['IElement']);
    };
    return IElement;
  }();

  /**** i-list.js | IList ****/
  //==============================================================
  // import Message from './message.js';    
  // import ExtendError from './extend-error.js';  

  var IList = function () {
    /**
     * List interface.  
     * 
     * @constructs IList
     * @interface
     */
    function IList() {
      /**
       * An internal array that stores the data in the list.  
       * 
       * @member {array} IList#_list
       */
      this._list = Array;

      /**
       * Returns the number of lists.  
       * 
       * @member {number} IList#count
       */
      this.count = Number;
    }
    IList._NS = 'Interface'; // namespace
    IList._KIND = 'interface';
    return IList;
  }();

  /**** i-control-list.js | IListControl ****/
  //==============================================================
  // import Message from './message.js';    
  var IListControl = function () {
    /**
     * List control interface.  
     * 
     * @constructs IListControl
     * @interface
     */
    function IListControl() {}
    IListControl._NS = 'Interface'; // namespace
    IListControl._KIND = 'interface';

    /**
     * Add an element to the list.  
     * 
     * @abstract
     */
    IListControl.prototype.add = function () {
      throw new ExtendError(/EL02151/, null, ['IListControl']);
    };

    /**
     * Remove an element from the list.  
     * 
     * @abstract
     */
    IListControl.prototype.del = function () {
      throw new ExtendError(/EL02152/, null, ['IListControl']);
    };

    /**
     * Verify that an element exists in the list.  
     * 
     * @returns {boolean} If the element exists, it is 'true', otherwise it is 'false'
     * @abstract
     */
    IListControl.prototype.has = function () {
      throw new ExtendError(/EL02153/, null, ['IListControl']);
    };

    /**
     * Search for elements in the list.  
     * 
     * @abstract
     */
    IListControl.prototype.find = function () {
      throw new ExtendError(/EL02154/, null, ['IListControl']);
    };
    return IListControl;
  }();

  /**** i-serialize.js | ISerialize ****/
  //==============================================================
  // import Message from './message.js';    
  var ISerialize = function () {
    /**
     * Interface for serialization and deserialization.  
     * @constructs ISerialize
     * @interface
     */
    function ISerialize() {}
    ISerialize._NS = 'Interface'; // namespace
    ISerialize._KIND = 'interface';

    /**
     * Serialize objects, convert them into strings (such as JSON), and export them.  
     * 
     * @returns {string} Serialized String
     * @abstract
     */
    ISerialize.prototype.output = function () {
      throw new ExtendError(/EL02191/, null, ['ISerialize']);
    };

    /**
     * Restore objects by loading serialized data.  
     * 
     * @abstract
     */
    ISerialize.prototype.load = function () {
      throw new ExtendError(/EL02192/, null, ['ISerialize']);
    };
    return ISerialize;
  }();

  /**** i-collection-array.js | IArrayCollection ****/
  //==============================================================
  // import Message from './message.js';    
  var IArrayCollection = function (_super) {
    /**
     * Array collection interface.  
     * 
     * @extends ICollection
     */
    function IArrayCollection() {
      _super.call(this);
    }
    Util.inherits(IArrayCollection, _super);
    IArrayCollection._KIND = 'interface';
    IArrayCollection._NS = 'Interface'; // namespace

    /**
     * Adds an element to the specified location.  
     * 
     * @abstract
     */
    IArrayCollection.prototype.insertAt = function () {
      throw new ExtendError(/EL02171/, null, ['IArrayCollection']);
    };
    return IArrayCollection;
  }(ICollection);

  // import ISerialize from './i-serialize.js';

  var NamespaceManager = function () {
    /**
     * Create a Namespace Manager.  
     * 
     * @constructs NamespaceManager
     */
    function NamespaceManager() {
      var $storage = this.$createNsRefer();
      var _elemTypes = [];
      var allowOverlap = false;

      /**
       * Namespace repository  
       * 
       * @member {string} NamespaceManager#$storage
       * @readonly
       * @private
       */
      Object.defineProperty(this, '$storage', {
        get: function get() {
          return $storage;
        },
        set: function set(nVal) {
          $storage = nVal;
        },
        configurable: false,
        enumerable: false
      });

      /** 
       * Namespace element type list.  
       * Allow all types if empty.  
       * 
       * @member {array<any>}  NamespaceManager#_elemTypes  
       * @protected
       */
      Object.defineProperty(this, '_elemTypes', {
        get: function get() {
          return _elemTypes;
        },
        set: function set(val) {
          var arrType = Array.isArray(val) ? val : Array.prototype.slice.call(arguments, 0);
          _elemTypes = arrType;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * Namespace element list.  
       * 
       * @member {array<string>}  NamespaceManager#_list
       * @readonly
       */
      Object.defineProperty(this, '_list', {
        get: function get() {
          var storage = this.$storage;
          var arr = [];
          var stack = [];
          findElement(storage);
          return arr;

          // inner function
          function findElement(target) {
            for (var prop in target) {
              if (prop === '_type') continue;
              var ns = target[prop];
              stack.push(prop);
              if (!ns['_type']) {
                arr.push(stack.join('.'));
              } else findElement(ns);
              stack.pop();
            }
          }
        },
        configurable: false,
        enumerable: true
      });

      /**
       * Total number of Namespace elements.  
       * 
       * @member {number} NamespaceManager#count 
       * @readonly
       */
      Object.defineProperty(this, 'count', {
        get: function get() {
          return this._list.length;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * Set whether to allow duplicate element registration.  
       * Default is 'false' and does not allow duplication.  
       * 
       * @member {boolean} NamespaceManager#allowOverlap
       */
      Object.defineProperty(this, 'allowOverlap', {
        get: function get() {
          return allowOverlap;
        },
        set: function set(val) {
          if (typeof val !== 'boolean') throw new ExtendError(/EL03311/, null, [_typeof(val)]);
          allowOverlap = val;
        },
        configurable: false,
        enumerable: true
      });

      // inner variable access
      // this.__SET$storage = function(val, call) {
      //     if (call instanceof NamespaceManager) $storage = val;
      // }

      this._$KEYWORD = ['namespace', 'ns', 'NS', '_type']; // 금지단어

      Util["implements"](NamespaceManager, this); // strip:
    }
    NamespaceManager._UNION = [IList, IListControl];
    NamespaceManager._NS = 'Meta';

    // local function
    function _isString(obj) {
      // 공백아닌 문자 여부
      if (typeof obj === 'string' && obj.length > 0) return true;
      return false;
    }
    function _validNamespace(nsName) {
      // 네임스페이스 이름 검사
      var regex = /^[_a-zA-Z]([.]?[_0-9a-zA-Z])*$/;
      return regex.test(nsName);
    }
    function _validName(sName) {
      // 이름 검사
      var regex = /^[_a-zA-Z]([_0-9a-zA-Z])*$/;
      return regex.test(sName);
    }
    function _getArray(ns) {
      // 네임스페이스 문자열 배열로 얻기
      var sections = [];
      if (ns === '') return sections;
      if (typeof ns === 'string') {
        if (!_validNamespace(ns)) throw new ExtendError(/EL03312/, null, [ns]);
        sections = ns.split('.');
      } else if (Array.isArray(ns)) {
        sections = ns;
      } else throw new ExtendError(/EL03313/, null, [_typeof(ns)]);
      for (var i = 0; i < sections.length; i++) {
        var sName = sections[i];
        if (!_isString(sName)) throw new ExtendError(/EL03314/, null, [i, _typeof(sName)]);
        if (!_validName(sName)) throw new ExtendError(/EL03315/, null, [i, sName]);
      }
      return sections;
    }

    /**
     * Creates a storage initialization object.  
     * 
     * @returns {object} initialized namespace type object { _type: 'ns'}
     * @private
     */
    NamespaceManager.prototype.$createNsRefer = function () {
      return {
        _type: 'ns'
      };
    };

    /**
     * Returns the Namespace path object.  
     * 
     * @param {string | object} p_elem Factors to obtain the path
     * @returns {object} Namespace path object {ns: '...', key: '...'}
     * @protected
     */
    NamespaceManager.prototype._getPathObject = function (p_elem) {
      var fullName;
      var arr;
      var key;
      var nsPath;
      var obj = {};
      if (_isString(p_elem)) fullName = p_elem;else fullName = this.getPath(p_elem);
      if (typeof fullName !== 'string') return undefined;
      arr = fullName.split('.');
      key = arr.pop();
      nsPath = arr.join('.');
      obj['ns'] = nsPath;
      obj['key'] = key;
      return obj;
    };

    /**
     * Initialize the namespace.  
     */
    NamespaceManager.prototype.init = function () {
      this.$storage = this.$createNsRefer();
    };

    /**
     * Add a path to the Namespace.  
     * 
     * @param {string | array<string>} p_ns Namespace name, path in the form of a string or array separated by a dot ('.')
     */
    NamespaceManager.prototype.addNamespace = function (p_ns) {
      var parent = this.$storage;
      var sections;
      try {
        sections = _getArray(p_ns);
        if (this._$KEYWORD.indexOf(sections[0]) > -1) sections = sections.slice(1); // 최상위 에약어 제거

        for (var i = 0; i < sections.length; i += 1) {
          // var sName = sections[i];
          if (typeof parent[sections[i]] === 'undefined') {
            parent[sections[i]] = this.$createNsRefer();
          }
          parent = parent[sections[i]];
        }
      } catch (error) {
        throw new ExtendError(/EL03321/, error, []);
      }
    };

    /**
     * Delete the path in the Namespace.  
     * 
     * @param {string | array<string>} p_ns Namespace name, path in the form of a string or array separated by a dot ('.')
     */
    NamespaceManager.prototype.delNamespace = function (p_ns) {
      var parent = this.$storage;
      var sections;
      try {
        sections = _getArray(p_ns);
        for (var i = 0; i < sections.length; i += 1) {
          var sName = sections[i];
          if (parent[sName] && parent[sName]['_type'] === 'ns') {
            if (i === sections.length - 1) delete parent[sName];else parent = parent[sName];
          } else return;
        }
      } catch (error) {
        throw new ExtendError(/EL03322/, error, []);
      }
    };

    /**
     * Returns the path object of the namespace.  
     * 
     * @param {string | sting[]} p_ns Namespace name, path in the form of a string or array separated by a dot ('.')
     * @returns {object} path object
     */
    NamespaceManager.prototype.path = function (p_ns) {
      var parent = this.$storage;
      var sections;
      if (!p_ns) return parent;
      try {
        sections = _getArray(p_ns);
        for (var i = 0; i < sections.length; i += 1) {
          var sName = sections[i];
          if (parent[sName] && parent[sName]['_type'] === 'ns') {
            if (i === sections.length - 1) return parent[sName];
            parent = parent[sName];
          } else return undefined;
        }
        return undefined;
      } catch (error) {
        throw new ExtendError(/EL03323/, error, []);
      }
    };

    /**
     * Adds an element to the specified namespace path.  
     * 
     * @param {string} p_fullName Full path to the Namespace
     * @param {any} p_elem Functions, classes, or objects to be added
     */
    NamespaceManager.prototype.add = function (p_fullName, p_elem) {
      var parent = this.$storage;
      var sections;
      var oPath;
      var key;
      var ns;
      try {
        oPath = this._getPathObject(p_fullName);
        key = oPath['key'];
        ns = oPath['ns'];
        sections = _getArray(ns);
        if (this._elemTypes.length > 0) Type.matchType([this._elemTypes], p_elem); // []로 감싸서 choice 타입으로 변환됨
        if (!_validName(key)) throw new ExtendError(/EL03331/, null, [key]);
        if (!this.allowOverlap && this.getPath(p_elem)) {
          throw new ExtendError(/EL03332/, null, []);
        }
        if (sections.length === 0) {
          // 최상위 등록
          parent[key] = p_elem;
          return;
        } else this.addNamespace(ns);
        for (var i = 0; i < sections.length; i += 1) {
          var sName = sections[i];
          if (i === sections.length - 1) {
            parent[sName][key] = p_elem;
          } else parent = parent[sName];
        }
      } catch (error) {
        throw new ExtendError(/EL03333/, error, []);
      }
    };

    /**
     * Deletes an element from the specified namespace path.  
     * 
     * @param {string} p_fullname Full path to the Namespace
     * @returns {boolean} Successful deletion ('true' or 'false')
     */
    NamespaceManager.prototype.del = function (p_fullName) {
      var parent = this.$storage;
      var sections;
      try {
        sections = _getArray(p_fullName);
        for (var i = 0; i < sections.length; i += 1) {
          var sName = sections[i];
          if (parent[sName]) {
            if (i === sections.length - 1) {
              delete parent[sName];
              return true;
            } else parent = parent[sName];
          } else return false;
        }
        return false;
      } catch (error) {
        throw new ExtendError(/EL03334/, error, []);
      }
    };

    /**
     * Verify that the specified element exists in the Namespace.  
     * 
     * @param {string | any} p_elem Function, class, or object to check
     * @returns {boolean} Existence ('true' or 'false')
     */
    NamespaceManager.prototype.has = function (p_elem) {
      if (_isString(p_elem) && this.find(p_elem)) return true;else if (typeof this.getPath(p_elem) === 'string') return true;
      return false;
    };

    /**
     * Retrieves elements from the specified namespace path.  
     * 
     * @param {string | array<string>} p_fullName Full path to the Namespace
     * @returns {(object | function)?} Found elements
     */
    NamespaceManager.prototype.find = function (p_fullName) {
      var parent = this.$storage;
      var sections;
      try {
        sections = _getArray(p_fullName); // try undefined
        for (var i = 0; i < sections.length; i += 1) {
          var sName = sections[i];
          if (parent[sName]) {
            if (i === sections.length - 1) return parent[sName];else parent = parent[sName];
          } else return undefined;
        }
        return undefined;
      } catch (error) {
        return undefined;
      }
    };

    /**
     * Returns the path of the specified element in the Namespace.  
     * (Route of the first element in case of redundancy)  
     * @param {any} p_elem Elements to find (function or object)
     * @returns {string?} The path of the element, 'undefined' if not found
     */
    NamespaceManager.prototype.getPath = function (p_elem) {
      var namespace = this.$storage;
      var stack = [];
      if (!p_elem) throw new ExtendError(/EL03341/, null, [_typeof(p_elem)]);
      if ($findElement(namespace)) {
        return stack.join('.');
      } else return undefined;

      // inner function
      function $findElement(target) {
        for (var prop in target) {
          var obj = target[prop];
          if (obj === 'ns') continue;
          if (obj && obj['_type'] === 'ns') {
            stack.push(prop);
            if ($findElement(obj)) return true;
          } else {
            if (obj === p_elem) {
              stack.push(prop);
              return true;
            }
          }
        }
        stack.pop();
        return false;
      }
    };

    /**
     * Serialize the namespace repository and convert it into a string.  
     * To convert the function to JSON, you must specify a separate 'stringify' function.  
     * 
     * @param {function?} p_stringify JSON Stringify function (optional)
     * @param {string?} p_space Setting the blank to apply at the output
     * @returns {string} serialized string
     */
    NamespaceManager.prototype.output = function (p_stringify, p_space) {
      var arr = [];
      var obj;
      var str;
      var temp = {
        list: arr
      };
      try {
        for (var i = 0; i < this._list.length; i++) {
          var fullName = this._list[i];
          var fun = this.find(fullName);
          var nObj = this._getPathObject(fullName);
          obj = {
            ns: nObj.ns,
            key: nObj.key,
            full: fullName,
            elem: fun
          };
          arr.push(obj);
        }
        if (typeof p_stringify === 'function') str = p_stringify(temp, {
          space: p_space
        });else str = JSON.stringify(temp, null, p_space);
        return str;
      } catch (error) {
        throw new ExtendError(/EL03342/, error, [error]);
      }
    };

    /**
     * Parsing serialized strings and fetching them to the Namespace repository.  
     * @param {string} p_str serialized string
     * @param {function?} p_parse  JSON parser function
     */
    NamespaceManager.prototype.load = function (p_str, p_parse) {
      var arr = [];
      if (!_isString(p_str)) throw new ExtendError(/EL03343/, null, [_typeof(p_str)]);
      try {
        if (typeof p_parse === 'function') arr = p_parse(p_str);else arr = JSON.parse(p_str, null);
        this.init();
        for (var i = 0; i < arr['list'].length; i++) {
          var o = arr['list'][i];
          var fun = o['elem'];
          this.add(o['full'], fun);
        }
      } catch (error) {
        throw new ExtendError(/EL03344/, error, [error.message]);
      }
    };
    return NamespaceManager;
  }();

  var MetaRegistry = function () {
    /**
     * 'MetaRegistry' is a class responsible for registering and managing meta objects.  
     * 
     * @constructs MetaRegistry
     * @static
     */
    function MetaRegistry() {}
    MetaRegistry._NS = 'Meta'; // namespace

    // var define
    var _list = [];
    var namespace = new NamespaceManager();

    /**
     * List of meta objects.  
     * 
     * @member {any[]} MetaRegistry#_list
     * @readonly
     */
    Object.defineProperty(MetaRegistry, '_list', {
      get: function get() {
        var arr = [];
        for (var i = 0; i < _list.length; i++) arr.push(_list[i]);
        return arr;
      },
      configurable: false,
      enumerable: true
    });

    /**
     * Total number of currently registered meta objects.  
     * 
     * @member {number} MetaRegistry#count
     * @readonly
     */
    Object.defineProperty(MetaRegistry, 'count', {
      get: function get() {
        return _list.length;
      },
      configurable: false,
      enumerable: true
    });

    /**
     * Namespace manager for meta objects.  
     * 
     * @member {NamespaceManager} MetaRegistry#namespace
     * @readonly
     */
    Object.defineProperty(MetaRegistry, 'namespace', {
      get: function get() {
        return namespace;
      },
      configurable: false,
      enumerable: true
    });

    // local function
    function _isBuiltFunction(obj) {
      // 내장함수 여부
      if (typeof obj === 'function' && (obj === Number || obj === String || obj === Boolean || obj === Function || obj === Object || obj === Array || obj === RegExp || obj === Date || obj === Symbol || obj === BigInt)) return true;
      return false;
    }
    function _isObject(obj) {
      // 객체 여부
      if (_typeof(obj) === 'object' && obj !== null) return true;
      return false;
    }
    function _isString(obj) {
      // 공백아닌 문자 여부
      if (typeof obj === 'string' && obj.length > 0) return true;
      return false;
    }
    function _getGuidList(oGuid, arr) {
      //객체 배열 리턴
      arr = arr || [];
      if (MetaRegistry.isGuidObject(oGuid)) arr.push(oGuid);
      if (Array.isArray(oGuid)) {
        for (var i = 0; i < oGuid.length; i++) {
          if (_isObject(oGuid[i])) _getGuidList(oGuid[i], arr);
        }
      } else if (_isObject(oGuid)) {
        for (var prop in oGuid) {
          if (_isObject(oGuid[prop])) _getGuidList(oGuid[prop], arr);
        }
      }
      return arr;
    }

    /**
     * Initializes registered meta objects and namespaces.  
     */
    MetaRegistry.init = function () {
      _list.length = 0;
      this.namespace.init();
    };

    /**
     * Register the meta object and register the creator in the namespace.  
     * An exception occurs if an object is already registered.   
     * Register if there is no creator in the Namespace.  
     * 
     * @param {MetaObject} p_meta Meta object to register
     */
    MetaRegistry.register = function (p_meta) {
      var _ns;
      var key;
      var type;
      // var fullName;

      if (!this.isMetaObject(p_meta)) throw new ExtendError(/EL03211/, null, [p_meta._type, p_meta._guid]);
      if (this.has(p_meta)) throw new ExtendError(/EL03212/, null, [p_meta._guid]);
      _ns = p_meta['_ns'] || '';
      type = p_meta['_type'];
      key = type.name;
      // fullName    = p_meta['_ns'] && p_meta['_ns'].length > 0 ?  _ns +'.'+key : key;

      _list.push(p_meta); // 객체 등록
      this.registerClass(type, _ns, key); // 클래스 등록
    };

    /**
     * Undoes the meta object in the registry.  
     * 
     * @param {MetaObject | string} p_meta Meta object or GUID string
     * @returns {boolean} successful removal ('true' or 'false')
     */
    MetaRegistry.release = function (p_meta) {
      var guid;
      if (_typeof(p_meta) !== 'object' && typeof p_meta !== 'string') {
        throw new ExtendError(/EL03213/, null, [_typeof(p_meta)]);
      }
      guid = typeof p_meta === 'string' ? p_meta : p_meta['_guid'];
      if (!_isString(guid)) return false;
      for (var i = 0; i < _list.length; i++) {
        if (_list[i]['_guid'] === guid) {
          _list.splice(i, 1);
          return true;
        }
      }
      return false;
    };

    /**
     * Check if the registry has a meta object.  
     * 
     * @param {object | string} p_oGuid  Object of type GUID or GUID string
     * @returns {boolean} Existence ('true' or 'false')
     */
    MetaRegistry.has = function (p_oGuid) {
      var guid = _isObject(p_oGuid) ? p_oGuid['_guid'] : p_oGuid;
      if (!_isString(guid)) return false;
      for (var i = 0; i < _list.length; i++) {
        if (_list[i]['_guid'] === guid) return true;
      }
      return false;
    };

    /**
     * Locate the meta object in the registry.  
     * 
     * @param {object | string} p_oGuid Object of type GUID or GUID string
     * @returns {MetaObject?} meta object found, 'undefined' if not found
     */
    MetaRegistry.find = function (p_oGuid) {
      var guid = _isObject(p_oGuid) ? p_oGuid['_guid'] : p_oGuid;
      if (!_isString(guid)) return undefined;
      for (var i = 0; i < _list.length; i++) {
        if (_list[i]['_guid'] === guid) return _list[i];
      }
      return undefined;
    };

    /**
     * Checks for meta objects.  
     * 
     * @param {object} p_target Target object
     * @returns {boolean} Whether it is a meta object ('true' or 'false')
     */
    MetaRegistry.isMetaObject = function (p_target) {
      if (!_isObject(p_target)) return false;
      if (_isString(p_target['_guid']) && typeof p_target['_type'] === 'function') return true;
      return false;
    };

    /**
     * Creates a meta object of a GUID object.  
     * 
     * @param {object} p_oGuid GUID type object
     * @param {object} [p_origin=p_oGuid] Initial GUID literal object
     * @returns {MetaObject} created meta object
     */
    MetaRegistry.createMetaObject = function (p_oGuid, p_origin) {
      var origin = p_origin ? p_origin : p_oGuid;
      var args = [null];
      var type;
      var ns;
      var fullName;
      var coClass;
      var params;
      if (!_isObject(p_oGuid)) throw new ExtendError(/EL03221/, null, [_typeof(p_oGuid)]);
      if (!_isString(p_oGuid['_type'])) throw new ExtendError(/EL03222/, null, [_typeof(p_oGuid['_type'])]);
      if (!_isObject(origin)) throw new ExtendError(/EL03223/, null, [_typeof(origin)]);
      type = p_oGuid['_type'];
      ns = p_oGuid['_ns'] || '';
      fullName = ns !== '' ? [ns, type].join('.') : type;
      coClass = this.getClass(fullName);
      if (typeof coClass !== 'function') throw new ExtendError(/EL03224/, null, [fullName, _typeof(coClass)]);

      // params = coClass.hasOwnProperty('_PARAMS') ? coClass['_PARAMS'] : []; // arr
      params = Object.prototype.hasOwnProperty.call(coClass, '_PARAMS') ? coClass['_PARAMS'] : []; // arr
      for (var i = 0; i < params.length; i++) {
        var argName = params[i];
        var prop = p_oGuid[argName];
        var obj;
        obj = _isObject(prop) && prop['$ref'] ? this.findSetObject(prop['$ref'], origin) : prop;
        if (p_oGuid[argName]) args.push(obj);
      }
      return new (Function.prototype.bind.apply(coClass, args))();
    };

    /**
     * Creates a reference object for a GUID object.  
     * 
     * @param {MetaObject} p_meta Meta object
     * @returns {object} created reference object ('{$ref: 'guid value'}')
     * @example
     * var meta = new MetaElement('m1');
     * obj.onwer = MetaRegistry.createReferObject(meta);
     * console.log(obj.onwer);          // { $ref : '5337877c-49d6-9add-f35a-7bd31d510d4f' }
     */
    MetaRegistry.createReferObject = function (p_meta) {
      if (!_isObject(p_meta)) throw new ExtendError(/EL03225/, null, [_typeof(p_meta)]);
      if (!_isString(p_meta['_guid'])) throw new ExtendError(/EL03226/, null, [_typeof(p_meta['_guid'])]);
      return {
        $ref: p_meta['_guid']
      };
    };

    /**
     * Register the function in the Namespace and create a reference object.  
     * 
     * @param {function} p_target Function or constructor
     * @returns {object} created namespace reference object ('{$ns: 'Meta.MetaElement'}')
     * @example
     * var meta = new MetaElement('m1');
     * obj.onwer = MetaRegistry.createReferObject(meta);
     * console.log(obj);                // {onwer: {$ns: 'Meta.MetaElement'}}
     */
    MetaRegistry.createNsReferObject = function (p_target) {
      var fullName;
      var ns, key;
      if (typeof p_target !== 'function') throw new ExtendError(/EL03227/, null, [_typeof(p_target)]);
      if (!this.findClass(p_target)) {
        ns = p_target['_NS'] || '';
        key = p_target.name;
        this.registerClass(p_target, ns, key);
      }
      fullName = this.findClass(p_target);
      return {
        $ns: fullName
      };
    };

    /**
     * Set the GUID of the meta object in the GUID object.  
     * - oGuid.$set = meta._guid  
     * 
     * @param {object} p_oGuid GUID type object
     * @param {MetaObject} p_meta Meta object
     * @returns {object} set object
     * @example
     * var meta = new MetaElement('m1');    // meta.guid = '5337877c-49d6-9add-f35a-7bd31d510d4f'
     * var obj = { name: 'm2' };
     * MetaRegistry.setMetaObject(obj, meta);
     * console.log(obj);                    // {name: 'm2, $set: '5337877c-49d6-9add-f35a-7bd31d510d4f'}
     */
    MetaRegistry.setMetaObject = function (p_oGuid, p_meta) {
      if (!_isObject(p_oGuid)) throw new ExtendError(/EL03241/, null, [_typeof(p_oGuid)]);
      if (!_isObject(p_meta)) throw new ExtendError(/EL03242/, null, [_typeof(p_meta)]);
      if (!_isString(p_meta['_guid'])) throw new ExtendError(/EL03243/, null, [_typeof(p_meta['_guid'])]);
      p_oGuid['$set'] = p_meta['_guid'];
      return p_oGuid;
    };

    /**
     * Validates the GUID object.  
     * 1. Check if the object has duplicate GUID values  
     * 2. Determine if an object has a '$ref' value  
     * 3. Determine if an object has a '$ns' value  
     * 4. Check the number of '_key' and '_elem' of objects   
     * 
     * @param {object} p_oGuid GUID object to be inspected
     * @returns {boolean} Inspection result ('true' or 'false')
     */
    MetaRegistry.validObject = function (p_oGuid) {
      var _this = this;
      var arrObj;
      if (!_isObject(p_oGuid)) throw new ExtendError(/EL03251/, null, [_typeof(p_oGuid)]);
      arrObj = _getGuidList(p_oGuid);
      if (!$validUniqueGuid() || !$validReference(p_oGuid) || !$validCollection(p_oGuid)) return false;
      return true;

      // inner function
      function $findGuid(guid, arr) {
        // guid 조회
        for (var i = 0; i < arr.length; i++) {
          if (arr[i]['_guid'] === guid) return arr[i];
        }
        return undefined;
      }
      function $validReference(oGuid) {
        // 참조 검사
        if (oGuid['$ref'] && !$findGuid(oGuid['$ref'], arrObj)) return false;
        if (oGuid['$set'] && !$findGuid(oGuid['$set'], arrObj)) return false;
        if (oGuid['$ns'] && !_this.getClass(oGuid['$ns'])) return false;
        if (Array.isArray(oGuid)) {
          for (var i = 0; i < oGuid.length; i++) {
            if (_isObject(oGuid[i]) && !$validReference(oGuid[i])) return false;
          }
        } else {
          for (var prop in oGuid) {
            if (_isObject(oGuid[prop]) && !$validReference(oGuid[prop])) return false;
          }
        }
        return true;
      }
      function $validCollection(oGuid) {
        // 컬렉션 검사
        if (Array.isArray(oGuid['_elem']) && Array.isArray(oGuid['_key'])) {
          if (oGuid['_elem'].length !== oGuid['_key'].length) return false;
        }
        if (Array.isArray(oGuid)) {
          for (var i = 0; i < oGuid.length; i++) {
            if (_isObject(oGuid[i]) && !$validCollection(oGuid[i])) return false;
          }
        } else {
          for (var prop in p_oGuid) {
            if (_isObject(oGuid[prop]) && !$validCollection(oGuid[prop])) return false;
          }
        }
        return true;
      }
      function $validUniqueGuid() {
        // guid 유일한 값인지 검사
        for (var i = 0; i < arrObj.length; i++) {
          for (var j = 0; j < arrObj.length; j++) {
            if (arrObj[i]['_guid'] === arrObj[j]['_guid'] && i !== j) return false; // 중복
          }
        }
        return true;
      }
    };

    /**
     * Verify that the target object is a GUID object.  
     * @param {object} p_target Object to be checked
     * @returns {boolean} Guid object(`true` or `false`)
     */
    MetaRegistry.isGuidObject = function (p_target) {
      if (!_isObject(p_target)) return false;
      if (_isString(p_target['_guid']) && _isString(p_target['_type'])) return true;
      return false;
    };

    /**
     * Verify that the source object contains a GUID object.  
     * 
     * @param {string| object} p_oGuid GUID object or GUID string to check
     * @param {object | array<object>} p_origin  GUID literal object of query
     * @returns {boolean} whether to include ('true' or 'false')
     */
    MetaRegistry.hasGuidObject = function (p_oGuid, p_origin) {
      var guid = _isObject(p_oGuid) ? p_oGuid['_guid'] : p_oGuid;
      var arrOrigin = [];
      if (!_isString(guid)) throw new ExtendError(/EL03252/, null, [_typeof(guid)]);
      if (Array.isArray(p_origin)) arrOrigin = p_origin;else arrOrigin.push(p_origin);
      for (var i = 0; i < arrOrigin.length; i++) {
        var origin = arrOrigin[i];
        var arrObj = _getGuidList(origin);
        if (!_isObject(origin)) throw new ExtendError(/EL03253/, null, [i, _typeof(guid)]);
        for (var j = 0; j < arrObj.length; j++) {
          if (arrObj[j]._guid === guid) return true;
        }
      }
      return false;
    };

    /**
     * Verify that the GUID object contains a reference type element.  
     * Reference types are '$ref' and '$ns'.  
     * 
     * @param {object} p_oGuid GUID object to check
     * @returns {boolean} whether to include ('true' or 'false')
     */
    MetaRegistry.hasRefer = function (p_oGuid) {
      if (!_isObject(p_oGuid)) throw new ExtendError(/EL03254/, null, [_typeof(p_oGuid)]);
      if (!this.isGuidObject(p_oGuid)) throw new ExtendError(/EL03255/, null, [p_oGuid['_type'], p_oGuid['_guid']]);
      return $hasRefer(p_oGuid);

      // inner function
      function $hasRefer(oGuid) {
        // 참조 포함 여부
        if (Array.isArray(oGuid)) {
          for (var i = 0; i < oGuid.length; i++) {
            if (_typeof(oGuid[i]) === 'object' && $hasRefer(oGuid[i])) return true;
          }
        } else {
          if (oGuid['$ref'] && _isString(oGuid['$ref'])) return true;
          if (oGuid['$ns'] && _isString(oGuid['$ns'])) return true;
          for (var prop in oGuid) {
            if (_isObject(oGuid[prop]) && $hasRefer(oGuid[prop])) return true;
          }
        }
        return false;
      }
    };

    /**
     * Retrieves the set GUID object from the repository.  
     * 
     * @param {string | object} p_oGuid GUID object or GUID string to look up
     * @param {object} p_origin GUID literal object with query target
     * @returns {MetaObject} meta-objects viewed
     */
    MetaRegistry.findSetObject = function (p_oGuid, p_origin) {
      var guid = _isObject(p_oGuid) ? p_oGuid['_guid'] : p_oGuid;
      var origin = p_origin;
      if (!_isString(guid)) throw new ExtendError(/EL03256/, null, [guid]);
      if (!_isObject(origin)) throw new ExtendError(/EL03257/, null, [_typeof(origin)]);
      return $findObject(origin);

      // inner finction
      function $findObject(oGuid) {
        // 객체 조회
        var result;
        if (Array.isArray(oGuid)) {
          for (var i = 0; i < oGuid.length; i++) {
            if (_typeof(oGuid[i]) === 'object') {
              result = $findObject(oGuid[i]);
              if (result) return result;
            }
          }
        } else {
          if (oGuid['_guid'] && oGuid['_guid'] === guid) {
            result = oGuid['$set'] ? MetaRegistry.find(oGuid['$set']) : undefined;
            return result;
          }
          for (var prop in oGuid) {
            if (_typeof(oGuid[prop]) === 'object') {
              result = $findObject(oGuid[prop]);
              if (result) return result;
            }
          }
        }
        return result;
      }
    };

    /**
     * Converts the reference element value of a GUID object to a real object reference.  
     * To be converted: '$ns' is converted to '[Object Object]'.  
     * @param {object} p_oGuid GUID object to convert
     * @returns {object} converted meta object
     */
    MetaRegistry.transformRefer = function (p_oGuid) {
      var _this = this;
      var arrObj;
      var clone;
      if (!_isObject(p_oGuid)) throw new ExtendError(/EL03244/, null, [_typeof(p_oGuid)]);
      arrObj = _getGuidList(p_oGuid);
      clone = Util.deepCopy(p_oGuid);
      $linkReference(clone, arrObj);
      return clone;

      // inner function
      function $linkReference(oGuid, arr, parentName) {
        // 참조 연결
        parentName = parentName || '';
        if (Array.isArray(oGuid)) {
          for (var i = 0; i < oGuid.length; i++) {
            if (_typeof(oGuid[i]) === 'object') $linkReference(oGuid[i], arr);
          }
        } else {
          for (var prop in oGuid) {
            if (_isObject(oGuid[prop])) {
              if (oGuid[prop]['$ns']) {
                var ns = _this.getClass(oGuid[prop]['$ns']);
                if (typeof ns !== 'function') throw new ExtendError(/EL03245/, null, [parentName, prop]);
                oGuid[prop] = ns; // function 타입 연결
              } else $linkReference(oGuid[prop], arr, parentName ? parentName + '.' + prop : prop);
            }
          }
        }
      }
    };

    /**
     * Register the creator or object in the specified namespace.  
     * It registers after performing duplicate checks, and does not store built-in functions (Array, String, Number, etc.).  
     * 
     * @param {function | object} p_target To be registered (class creator or object)
     * @param {string} p_ns Namespace name (separated by a dot '.')
     * @param {string} p_key Destination name (class name or function name), otherwise the last name of the namespace applies.
     */
    MetaRegistry.registerClass = function (p_target, p_ns, p_key) {
      var fullName;
      if (!(_isObject(p_target) || typeof p_target === 'function')) throw new ExtendError(/EL03231/, null, [_typeof(p_target)]);
      if (p_ns && typeof p_ns !== 'string') throw new ExtendError(/EL03232/, null, [_typeof(p_ns)]);
      if (p_key && !_isString(p_key)) throw new ExtendError(/EL03233/, null, [_typeof(p_key)]);
      if (p_key) fullName = p_ns.length > 0 ? p_ns + '.' + p_key : p_key;else fullName = p_ns;
      if (_isBuiltFunction(p_target)) return; // 내장함수 제외
      if (typeof globalThis[fullName] === 'function') return;
      if (!this.namespace.find(fullName)) this.namespace.add(fullName, p_target); // 중복 검사 후 등록
    };

    /**
     * Undoes the registered item in the Namespace.  
     * 
     * @param {string} p_fullName full path to the namespace ('string')
     * @returns {boolean} Successful deletion ('true' or 'false')
     */
    MetaRegistry.releaseClass = function (p_fullName) {
      if (!_isString(p_fullName)) throw new ExtendError(/EL03234/, null, [_typeof(p_fullName)]);
      if (typeof globalThis[p_fullName] === 'function') return true; // 내장함수 & 전역 함수
      return this.namespace.del(p_fullName);
    };

    /**
     * Finds the specified constructor or object in the Namespace and returns the entire path.  
     * 
     * @param {function} p_target Creator or object
     * @returns {string?} Namespace Full path, 'undefined' if not found
     */
    MetaRegistry.findClass = function (p_target) {
      var fullName;
      if (typeof p_target !== 'function') throw new ExtendError(/EL03235/, null, [_typeof(p_target)]);
      fullName = p_target.name;
      if (typeof globalThis[fullName] === 'function') return fullName; // 내장함수 & 전역 함수
      return this.namespace.getPath(p_target);
    };

    /**
     * Returns a generator or object corresponding to the entire path specified in the Namespace.  
     * 
     * @param {string} p_fullName Full path to the Namespace
     * @returns {(object | function)?} corresponding object or creator, 'undefined' if not found
     */
    MetaRegistry.getClass = function (p_fullName) {
      if (!_isString(p_fullName)) throw new ExtendError(/EL03236/, null, [_typeof(p_fullName)]);
      if (typeof globalThis[p_fullName] === 'function') return globalThis[p_fullName]; // 내장함수 & 전역 함수
      return this.namespace.find(p_fullName);
    };

    /**
     * Pars the serialized JSON string to convert it to 'MetaObject'.  
     * REVIEW: 필요성 재검토 필요  
     * @param {string} p_str serialized JSON string
     * @param {function?} p_parse JSON parser function (default is 'JSON.parse')
     * @returns {MetaObject} converted meta object
     */
    MetaRegistry.loadMetaObject = function (p_str, p_parse) {
      var obj = p_str;
      var oGuid;
      var meta;
      if (typeof p_str !== 'string') throw new ExtendError(/EL03246/, null, [typeof str === "undefined" ? "undefined" : _typeof(str)]);
      obj = typeof p_parse === 'function' ? p_parse(obj) : JSON.parse(obj, null);
      if (this.has(obj)) return this.find(obj['_guid']); // 객체가 존재할 경우
      if (!this.isGuidObject(obj)) throw new ExtendError(/EL03247/, null, [obj['_type'], obj['_guid']]);
      oGuid = this.transformRefer(obj);
      meta = this.createMetaObject(oGuid);
      meta.setObject(oGuid);
      return meta;
    };
    return MetaRegistry;
  }();

  var MetaObject = function () {
    /**
     * Creates an instance of the MetaObject class.  
     * 
     * @constructs MetaObject
     * @implements {IObject}
     * @implements {IMarshal}
     */
    function MetaObject() {
      var _guid;
      var _ns;

      /**
       * Internal property that stores the unique identifier of the object.  
       * 
       * @readonly
       * @member {string} MetaObject#_guid 
       * @example
       * var obj = MetaObject();
       * console.log(obj._guid);      // '5337877c-49d6-9add-f35a-7bd31d510d4f' unique key code
       */
      Object.defineProperty(this, '_guid', {
        get: function get() {
          if (!_guid) _guid = Util.createGuid();
          return _guid;
        },
        set: function set(nVal) {
          _guid = nVal;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * Internal property that refers to the generator function of the object.  
       * 
       * @readonly
       * @member {function} MetaObject#_type 
       * @example
       * var obj = new MetaObject();
       * obj._type === MetaObject;        // true
       * console.log(typeof obj._type);   // 'function'
       */
      Object.defineProperty(this, '_type', {
        get: function get() {
          var proto = this.__proto__ || Object.getPrototypeOf(this);
          return proto.constructor;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * Indicates the object name space.  
       * If '_type.NS' is not statically defined, use the parent's namespace as the default.  
       */
      Object.defineProperty(this, '_ns', {
        get: function get() {
          return _ns;
        },
        set: function set(nVal) {
          _ns = nVal;
        },
        configurable: false,
        enumerable: false
      });

      // 추상클래스 검사
      if (Object.prototype.hasOwnProperty.call(this._type, '_KIND')) {
        // if (this._type.hasOwnProperty('_KIND')) {
        var kind = this._type['_KIND'].toLowerCase();
        if (['abstract', 'interface', 'enum', 'function'].indexOf(kind) > -1) {
          throw new ExtendError(/EL03111/, null, [this._type.name, kind]);
        }
      }

      // _NS 선언이 없으면 부모의 것을 기본으로 사용!
      if (this._type && this._type._NS) this._ns = this._type._NS;
      MetaRegistry.register(this);
      Util["implements"](MetaObject, this); // strip:
    }
    MetaObject._UNION = [IObject, IMarshal];
    MetaObject._NS = 'Meta';
    MetaObject._PARAMS = [];

    // local function
    function _isObject(obj) {
      // 객체 여부
      if (_typeof(obj) === 'object' && obj !== null) return true;
      return false;
    }
    function _compare(p_obj1, p_obj2) {
      // 객체 비교
      if (p_obj1 === p_obj2) return true;else if (p_obj1 instanceof MetaObject && p_obj2 instanceof MetaObject) {
        var obj1 = p_obj1.getObject(2); // _guid, $ref 제외 객체
        var obj2 = p_obj2.getObject(2);
        return Type.deepEqual(obj1, obj2);
      } else if (_isObject(p_obj1) && _isObject(p_obj2)) {
        return Type.deepEqual(p_obj1, p_obj2);
      } else return false;
    }

    /**
     * Compare the current object with the specified object.  
     * However, the '_guid' property is excluded from the comparison.  
     * 
     * @param {object} p_target To compare
     * @returns {boolean} If two objects are the same, 'true', or 'false'
     * @example
     * var meta1 = new MetaObject();
     * var meta2 = new MetaObject();
     * meta1.equal(meta2);      // true
     * meta2.equal(meat1);      // true
     * meta1 === meta2;         // false
     * 
     * var obj1 = {a: 1};
     * var obj2 = {a: 1};
     * this.equal(obj1, obj2);  // true
     */
    MetaObject.prototype.equal = function (p_target) {
      return _compare(this, p_target);
    };
    Object.defineProperty(MetaObject.prototype, 'equal', {
      enumerable: false
    });

    /**
     * Returns the creators of the current object and all the creators of the prototype chain to the array.  
     * 
     * @returns {array<function>} Array of generator functions (includes first defined constructors sequentially)
     * @example
     * var obj = new MetaObject();
     * var arr = obj.getTypes();
     * arr[0] === MetaObject;   // true
     * arr[1] === Object;       // true
     * console.log(arr.length); // 2
     * 
     * var elem = new MetaElement('e1');   // Inherited MetaObject 
     * var arr = elem.getTypes();
     * arr[0] === MetaElement;  // true
     * arr[1] === MetaObject;   // true
     * arr[2] === Object;       // true
     * console.log(arr.length); // 3
     */
    MetaObject.prototype.getTypes = function () {
      return parentFunction(this);

      // inner function
      function parentFunction(obj) {
        var list = [];
        var proto = obj.__proto__ || Object.getPrototypeOf(obj);
        if (proto) {
          list.push(proto.constructor);
          list = list.concat(parentFunction(proto));
        }
        return list;
      }
    };
    Object.defineProperty(MetaObject.prototype, 'getTypes', {
      enumerable: false
    });

    /**
     * Verify that the object is an instance of a particular class.  
     * You can also examine the defined interface type (including '_UNION').  
     * 
     * @param {Function | string} p_target Class constructor function or class name (string)
     * @returns {boolean} Whether there is an instance of the specified class ('true' or 'false')
     * @example
     * var obj = new MetaObject();
     * obj.instanceOf('MetaObject');    // true
     * obj.instanceOf('Object');        // true
     * obj.instanceOf(MetaObject);      // true
     * obj.instanceOf(Object);          // true
     * obj.instanceOf(String);          // false
     * 
     * var elem = new MetaElement('e1');// Inherited MetaObject 
     * obj.instanceOf('MetaElement');   // true
     * obj.instanceOf('MetaObject');    // true
     * obj.instanceOf('Object');        // true
     * obj.instanceOf(MetaElement);     // true
     * obj.instanceOf(MetaObject);      // true
     * obj.instanceOf(Object);          // true
     * obj.instanceOf(String);          // false
     */
    MetaObject.prototype.instanceOf = function (p_target) {
      var _this = this;
      var unionTypes = this._interface || this._type._UNION;
      // var unionTypes = this._type['_UNION'] || [];
      // var unionTypes = this._interface || [];
      // var thisTypes = this.getTypes();

      if (typeof p_target === 'string') return $$findFunctionName(p_target);
      if (typeof p_target === 'function') return $findFunction(p_target);
      return false;

      // inner function
      function $findFunction(fun) {
        var types = _this.getTypes();
        for (var i = 0; i < types.length; i++) {
          if (fun === types[i]) return true;
        }
        for (var k = 0; k < unionTypes.length; k++) {
          if (fun === unionTypes[k]) return true;
        }
        return false;
      }
      function $$findFunctionName(funName) {
        var types = _this.getTypes();
        for (var i = 0; i < types.length; i++) {
          if (funName === types[i].name) return true;
        }
        for (var k = 0; k < unionTypes.length; k++) {
          if (funName === unionTypes[k].name) return true;
        }
        return false;
      }
    };
    Object.defineProperty(MetaObject.prototype, 'instanceOf', {
      enumerable: false
    });

    /**
     * Returns the object as an object literal of type GUID.  
     * 
     * @param {number} [p_vOpt=0] Import mode  
     * mode=0 : reference structure (_guid:Yes, $ref:Yes)  
     * mode=1: Redundant structure (_guid:Yes, $ref:Yes)  
     * mode=2 : non-coordinated structure (_guid: No, $ref: No)  
     * @param {object | array<object>} [p_owned={}] Parent object that contains (owns) the current object
     * @returns {object} Guid type object literal
     * @example
     * a.getObject(2) == b.getObject(2)   
     */
    MetaObject.prototype.getObject = function (p_vOpt) {
      var vOpt = p_vOpt || 0;
      var obj = {};
      // var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);

      if (vOpt < 2 && vOpt > -1) obj['_guid'] = this._guid;
      obj['_type'] = this._type._NS ? this._type._NS + '.' + this._type.name : this._type.name;
      return obj;
    };
    Object.defineProperty(MetaObject.prototype, 'getObject', {
      enumerable: false
    });

    /**
     * Set up a GUID type object literal by converting it to an instance object.  
     * 
     * @param {object} p_oGuid object literal of type of GUID to set
     * @param {object} [p_origin=p_oGuid] Initial GUID literal object referenced during conversion
     */
    MetaObject.prototype.setObject = function (p_oGuid, p_origin) {
      var origin = p_origin ? p_origin : p_oGuid;
      var fullName = this._type._NS ? this._type._NS + '.' + this._type.name : this._type.name;
      if (!_isObject(p_oGuid)) throw new ExtendError(/EL03112/, null, [_typeof(p_oGuid)]);
      if (p_oGuid['_type'] !== fullName) throw new ExtendError(/EL03113/, null, [p_oGuid['_type'], fullName]);
      if (MetaRegistry.isGuidObject(origin)) {
        if (!origin['__TRANSFORM_REFER']) {
          origin = MetaRegistry.transformRefer(origin);
          origin['__TRANSFORM_REFER'] = true;
        }
      } else throw new ExtendError(/EL03114/, null, [p_origin._type, p_origin._guid]);
      MetaRegistry.setMetaObject(p_oGuid, this); // $set attach
    };
    Object.defineProperty(MetaObject.prototype, 'setObject', {
      enumerable: false
    });
    return MetaObject;
  }();

  var MetaElement = function (_super) {
    /**
     * Creates an instance of the MetaElement class.  
     * 
     * @constructs MetaElement
     * @extends MetaObject
     * @implements {IElement}
     * @param {string} p_name Name of the element
     */
    function MetaElement(p_name) {
      _super.call(this);
      var _name;

      /**
       * Internal property that stores the name of the element.  
       * 
       * @readonly
       * @member {string} MetaElement#_name
       */
      Object.defineProperty(this, '_name', {
        get: function get() {
          return _name;
        },
        set: function set(nVal) {
          if (typeof nVal !== 'string') throw new ExtendError(/EL03121/, null, [typeof val === "undefined" ? "undefined" : _typeof(val)]);
          if (nVal.length === 0) throw new ExtendError(/EL03122/, null, []);
          _name = nVal;
        },
        configurable: false,
        enumerable: false
      });
      this._name = p_name;
      Util["implements"](MetaElement, this); // strip:
    }
    Util.inherits(MetaElement, _super);
    MetaElement._UNION = [IElement];
    MetaElement._NS = 'Meta'; // namespace
    MetaElement._PARAMS = ['name']; // creator parameter

    /**
     * Returns the object as an object literal of type GUID.  
     * 
     * @param {number} [p_vOpt=0] Import mode  
     * mode=0 : reference structure (_guid:Yes, $ref:Yes)  
     * mode=1: Redundant structure (_guid:Yes, $ref:Yes)  
     * mode=2 : non-coordinated structure (_guid: No, $ref: No)  
     * @param {object | array<object>} [p_owned={}] Parent object that contains (owns) the current object  
     * @returns {object}  Guid type object literal
     * @example
     * a.getObject(2) == b.getObject(2)   
     */
    MetaElement.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      // var vOpt = p_vOpt || 0;
      // var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);

      obj['name'] = this._name;
      return obj;
    };
    Object.defineProperty(MetaElement.prototype, 'getObject', {
      enumerable: false
    });

    /**
     * Set up a GUID type object literal by converting it to an instance object.  
     * 
     * @param {object} p_oGuid object literal of the type of GUID to be set
     * @param {object} [p_origin=p_oGuid] Initial GUID literal object referenced during conversion
     */
    MetaElement.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      // var origin = p_origin ? p_origin : p_oGuid;
      this._name = p_oGuid['name'];
      // this.__SET$_name(p_oGuid['name'], this);
    };
    Object.defineProperty(MetaElement.prototype, 'setObject', {
      enumerable: false
    });

    /**
     * Creates a replica of the current object.  
     * 
     * @returns {MetaElement} Replicated Objects
     */
    MetaElement.prototype.clone = function () {
      var clone = new MetaElement(this._name);
      return clone;
    };
    Object.defineProperty(MetaElement.prototype, 'clone', {
      enumerable: false
    });
    return MetaElement;
  }(MetaObject);

  var BaseCollection = function (_super) {
    /**
    * The creator that creates the collection.  
    * This is an abstract class, and you must create an instance through inheritance.  
    * 
    * @abstract
    * @extends MetaObject
    * @constructs BaseCollection
    * @implements {ICollection}
    * @implements {IList}
    * @param {object} [p_owner] Objects that own this collection
    */
    function BaseCollection(p_owner) {
      _super.call(this);

      // private variable
      var $KEYWORD = [];
      var $event = new EventEmitter();
      var $elements = [];
      var $descriptors = [];

      // protected variable
      var _owner;
      var _elemTypes = [];

      /** 
       * List of strings used as reserved words in the collection.  
       * 
       * @private
       * @member {array<string>}  BaseCollection#$KEYWORD
       */
      Object.defineProperty(this, '$KEYWORD', {
        get: function get() {
          return $KEYWORD;
        },
        set: function set(newVal) {
          $KEYWORD = $KEYWORD.concat(newVal);
        },
        // REVIEW: 예약어 중복
        configurable: false,
        enumerable: false
      });

      /** 
       * Object that handles events. Used to register and generate various events in the collection.
       * 
       * @private
       * @member {EventEmitter} BaseCollection#$event  
       */
      Object.defineProperty(this, '$event', {
        get: function get() {
          return $event;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * An arrangement that stores elements of a collection.
       * 
       * @private
       * @member {string} BaseCollection#$elements
       */
      Object.defineProperty(this, '$elements', {
        get: function get() {
          return $elements;
        },
        set: function set(nVal) {
          $elements = nVal;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * A descriptor array that defines the getter and setter methods for each collection element.  
       * 
       * @private
       * @member {string} BaseCollection#$descriptors
       */
      Object.defineProperty(this, '$descriptors', {
        get: function get() {
          return $descriptors;
        },
        set: function set(nVal) {
          $descriptors = nVal;
        },
        configurable: false,
        enumerable: false
      });

      /** 
       * Owned object of the collection.  
       * 
       * @protected 
       * @member {object} BaseCollection#_owner  
       */
      Object.defineProperty(this, '_owner', {
        get: function get() {
          return _owner;
        },
        set: function set(val) {
          _owner = val;
        },
        configurable: false,
        enumerable: false
      });

      /** 
       * Defines the type constraints for the collection element.  
       * 
       * @protected 
       * @member {array<any>}  BaseCollection#_elemTypes  
       */
      Object.defineProperty(this, '_elemTypes', {
        get: function get() {
          return _elemTypes;
        },
        set: function set(val) {
          var arrType = Array.isArray(val) ? val : Array.prototype.slice.call(arguments, 0);
          var reg = /^_[a-zA-Z]+_/;
          var arr1 = arrType.length > 0 && typeof arrType[0] === 'string' ? arrType[0] : '';

          // var result;
          if (arrType.length > 0 && reg.exec(arr1) === null) {
            arrType = ['_req_'].concat(arrType);
          }

          // result = reg.exec(val);
          // if (result !== null) return result[0].toUpperCase();
          _elemTypes = arrType;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * An array that stores a list of elements in a collection.  
       * 
       * @protected 
       * @readonly
       * @member {Array}  BaseCollection#_list  
       */
      Object.defineProperty(this, '_list', {
        get: function get() {
          var arr = [];
          for (var i = 0; i < $elements.length; i++) arr.push(this.$elements[i]);
          return arr;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * Returns the number of elements in the collection.  
       * 
       * @readonly
       * @member {number} BaseCollection#count 
       */
      Object.defineProperty(this, 'count', {
        get: function get() {
          return this.$elements.length;
        },
        enumerable: false,
        configurable: false
      });

      /**
       * Returns the number of elements in the collection.  
       * @readonly
       * @member {number} BaseCollection#length 
       */
      Object.defineProperty(this, 'length', {
        get: function get() {
          return this.$elements.length;
        },
        enumerable: false,
        configurable: false
      });

      /**
       * Event handler called before adding an element to a collection.  
       * 
       * @event BaseCollection#onAdd
       * @param {function}    p_callback
       * @param {any}         p_callback.p_elem Elements to add
       * @param {number}      p_callback.p_idx Index of the element to be added
       * @param {this}        p_callback.p_this Current collection objects
       */
      Object.defineProperty(this, 'onAdd', {
        set: function set(fun) {
          this.$event.on('add', fun);
        },
        configurable: false,
        enumerable: false
      });

      /** 
       * Event handler that is called after an element is added.  
       * 
       * @event BaseCollection#onAdded
       * @param {function}    p_callback
       * @param {any}         p_callback.p_elem Added elements
       * @param {number}      p_callback.p_idx Index of added element
       * @param {this}        p_callback.p_this Current collection objects
       */
      Object.defineProperty(this, 'onAdded', {
        set: function set(fun) {
          this.$event.on('added', fun);
        },
        configurable: false,
        enumerable: false
      });

      /** 
       * Event handler called before removing an element.  
       * 
       * @event BaseCollection#onRemove
       * @param {function}    p_callback
       * @param {any}         p_callback.p_elem Elements to be removed
       * @param {number}      p_callback.p_idx Index of the element to be removed
       * @param {this}        p_callback.p_this Current collection objects
       */
      Object.defineProperty(this, 'onRemove', {
        set: function set(fun) {
          this.$event.on('remove', fun);
        },
        configurable: false,
        enumerable: false
      });

      /** 
       * Event handler that is called after the element is removed.  
       * 
       * @event BaseCollection#onRemoved
       * @param {function}    p_callback
       * @param {any}         p_callback.p_elem Removed elements
       * @param {number}      p_callback.p_idx Index of removed element
       * @param {this}        p_callback.p_this Current collection objects
       */
      Object.defineProperty(this, 'onRemoved', {
        set: function set(fun) {
          this.$event.on('removed', fun);
        },
        configurable: false,
        enumerable: false
      });

      /** 
      * Event handler called before deleting all elements.  
      * 
      * @event BaseCollection#onClear
      * @param {function}    p_callback
      * @param {this}        p_callback.p_this Current collection objects
      */
      Object.defineProperty(this, 'onClear', {
        set: function set(fun) {
          this.$event.on('clear', fun);
        },
        configurable: false,
        enumerable: false
      });

      /** 
       * Event handler that is called after all elements are deleted.  
       * 
       * @event BaseCollection#onCleared
       * @param {function}    p_callback
       * @param {this}        p_callback.p_this Current collection objects
       */
      Object.defineProperty(this, 'onCleared', {
        set: function set(fun) {
          this.$event.on('cleared', fun);
        },
        configurable: false,
        enumerable: false
      });

      /** 
       * Event handler called before the element changes.  
       * 
       * @event BaseCollection#onChanging 
       * @param {function}    p_callback
       * @param {number}      p_callback.p_nextValue New value to be changed
       * @param {any}         p_callback.prevValue Existing value
       * @param {any}         p_callback.index Index of the element to be changed
       * @param {this}        p_callback.p_this Current collection objects
       */
      Object.defineProperty(this, 'onChanging', {
        set: function set(fun) {
          this.$event.on('changing', fun);
        },
        configurable: false,
        enumerable: false
      });

      /** 
       * Event handler that is called after an element changes.  
       * 
       * @event BaseCollection#onChanged 
       * @param {function}    p_callback
       * @param {any}         p_callback.p_nextValue New value changed
       * @param {any}         p_callback.p_prevValue Existing value
       * @param {number}      p_callback.p_index Index of changed element
       * @param {this}        p_callback.p_this Current collection objects
       */
      Object.defineProperty(this, 'onChanged', {
        set: function set(fun) {
          this.$event.on('changed', fun);
        },
        configurable: false,
        enumerable: false
      });

      // object settging
      this._owner = p_owner || null;

      // 예약어 등록
      this.$KEYWORD = ['$event', '_owner', '$elements', '$descriptors', '_elemTypes', '_list', 'count', 'length', '$KEYWORD'];
      this.$KEYWORD = ['onAdd', 'onAdded', 'onRemove', 'onRemoved', 'onClear', 'onCleared', 'onChanging', 'onChanged'];
      this.$KEYWORD = ['_onAdd', '_onAdded', '_onRemove', '_onRemoved', '_onClear', '_onCleared', '_onChanging', '_onChanged'];
      this.$KEYWORD = ['_getPropDescriptor', 'getObject', 'setObject', '_guid', '_type'];
      this.$KEYWORD = ['_remove', 'remove', 'removeAt', 'contains', 'indexOf', 'add', 'clear'];
      Util["implements"](BaseCollection, this); // strip:
    }
    Util.inherits(BaseCollection, _super);
    BaseCollection._UNION = [ICollection, IList];
    BaseCollection._NS = 'Collection';
    BaseCollection._PARAMS = ['_owner'];
    BaseCollection._KIND = 'abstract';

    /**
     * Internal method that runs before adding an element.  
     * 
     * @param {any} p_elem .Elements to be added
     * @param {number} p_idx Where the element will be added
     * @listens BaseCollection#onAdd
     */
    BaseCollection.prototype._onAdd = function (p_elem, p_idx) {
      return this.$event.emit('add', p_elem, p_idx, this);
    };
    Object.defineProperty(BaseCollection.prototype, '_onAdd', {
      enumerable: false
    });

    /**
     * Internal method that runs after an element is added.  
     * @param {any} p_elem Added elements
     * @param {number} p_idx Location where the element was added
     * @listens BaseCollection#onAdded
     */
    BaseCollection.prototype._onAdded = function (p_elem, p_idx) {
      return this.$event.emit('added', p_elem, p_idx, this);
    };
    Object.defineProperty(BaseCollection.prototype, '_onAdded', {
      enumerable: false
    });

    /**
     * Internal method that runs before removing an element.  
     * 
     * @param {any} p_elem Elements to be removed
     * @param {number} p_idx Where the element will be removed
     * @listens BaseCollection#onRemove
     */
    BaseCollection.prototype._onRemove = function (p_elem, p_idx) {
      return this.$event.emit('remove', p_elem, p_idx, this);
    };
    Object.defineProperty(BaseCollection.prototype, '_onRemove', {
      enumerable: false
    });

    /**
     * Internal method that runs after the element is removed.  
     * 
     * @param {any} p_elem Removed elements
     * @param {number} p_idx Where the element was removed
     * @listens BaseCollection#onRemoved
     */
    BaseCollection.prototype._onRemoved = function (p_elem, p_idx) {
      return this.$event.emit('removed', p_elem, p_idx, this);
    };
    Object.defineProperty(BaseCollection.prototype, '_onRemoved', {
      enumerable: false
    });

    /** 
     * Internal method that runs before deleting all elements.
     * 
     * @listens BaseCollection#onClear
     */
    BaseCollection.prototype._onClear = function () {
      return this.$event.emit('clear', this);
    };
    Object.defineProperty(BaseCollection.prototype, '_onClear', {
      enumerable: false
    });

    /** 
     * Internal method that runs after all elements are deleted.  
     * 
     * @listens BaseCollection#onCleared
     */
    BaseCollection.prototype._onCleared = function () {
      return this.$event.emit('cleared', this);
    };
    Object.defineProperty(BaseCollection.prototype, '_onCleared', {
      enumerable: false
    });

    /** 
     * Internal method that runs before the element changes.
     * 
     * @param {any} p_nVal New value to be changed
     * @param {any} p_oVal Existing value
     * @param {number} p_idx Location of the element to be changed
     * @listens BaseCollection#onChanging
     */
    BaseCollection.prototype._onChanging = function (p_nVal, p_oVal, p_idx) {
      return this.$event.emit('changing', p_nVal, p_oVal, p_idx, this);
    };
    Object.defineProperty(BaseCollection.prototype, '_onChanging', {
      enumerable: false
    });

    /** 
     * Internal method that runs after the element changes.  
     * 
     * @param {any} p_nVal New value changed
     * @param {any} p_oVal Existing value
     * @param {number} p_idx Location of changed element
     * @listens BaseCollection#onChanged
     */
    BaseCollection.prototype._onChanged = function (p_nVal, p_oVal, p_idx) {
      return this.$event.emit('changed', p_nVal, p_oVal, p_idx, this);
    };
    Object.defineProperty(BaseCollection.prototype, '_onChanged', {
      enumerable: false
    });

    /**
     * Internal method to set the attribute descriptor for a particular index.  
     * 
     * @protected
     * @param {number} p_idx Where to specify properties
     * @param {boolean} p_enum whether the property is enumerable
     */
    BaseCollection.prototype._getPropDescriptor = function (p_idx, p_enum) {
      if (typeof p_enum !== 'boolean') p_enum = true;
      return {
        get: function get() {
          return this.$elements[p_idx];
        },
        set: function set(nVal) {
          var oVal = this.$elements[p_idx];
          if (this._elemTypes.length > 0) Type.matchType([this._elemTypes], nVal);
          this._onChanging(nVal, oVal, p_idx); // before event
          this.$elements[p_idx] = nVal;
          this._onChanged(nVal, oVal, p_idx); // after event
        },
        configurable: true,
        enumerable: p_enum
      };
    };
    Object.defineProperty(BaseCollection.prototype, '_getPropDescriptor', {
      enumerable: false
    });

    /** 
     * Internal method to remove elements from the collection.  
     * 
     * @abstract 
     */
    BaseCollection.prototype._remove = function () {
      throw new ExtendError(/EL04111/, null, []);
    };
    Object.defineProperty(BaseCollection.prototype, '_remove', {
      enumerable: false
    });

    /**
     * Returns the object as an object literal of type GUID.  
     * 
     * @param {number} [p_vOpt=0] Import mode  
     * mode=0 : reference structure(_guid:Yes, $ref:Yes)  
     * mode=1 : Redundant structure(_guid:Yes, $ref:Yes)  
     * mode=2 : non-coordinated structure(_guid:No,  $ref:No)   
     * @param {object | array<object>} [p_owned={}] Parent object that contains (owns) the current object
     * @returns {object}  Guid type object literal
     * @example
     * a.getObject(2) == b.getObject(2)   
     */
    BaseCollection.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      var vOpt = p_vOpt || 0;
      // var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);
      var _elems = [];
      if (!Type.deepEqual(this.$event['$storage'], {})) {
        obj['$storage'] = this.$event.$storage;
      }
      if (vOpt < 2 && vOpt > -1 && this._owner) {
        obj['_owner'] = MetaRegistry.createReferObject(this._owner);
      }
      for (var i = 0; i < this._elemTypes.length; i++) {
        var elem = this._elemTypes[i];
        if (typeof elem === 'function') _elems.push(MetaRegistry.createNsReferObject(elem));else _elems.push(elem);
      }
      obj['_elemTypes'] = _elems;
      return obj;
    };
    Object.defineProperty(BaseCollection.prototype, 'getObject', {
      enumerable: false
    });

    /**
     * Set up a GUID type object literal by converting it to an instance object.
     * 
     * @param {object} p_oGuid Object literal of type of GUID to set
     * @param {object} [p_origin=p_oGuid] Initial GUID literal object referenced during conversion
     */
    BaseCollection.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      var owner;
      var origin = p_origin ? p_origin : p_oGuid;
      this.clear();
      if (p_oGuid['$storage']) {
        this.$event.$storage = p_oGuid['$storage'];
      }
      if (p_oGuid['_owner']) {
        owner = MetaRegistry.findSetObject(p_oGuid['_owner']['$ref'], origin);
        if (!owner) throw new ExtendError(/EL04112/, null, [p_oGuid['_owner']['$ref']]); // Branch:
        this._owner = owner;
      }
      if (Array.isArray(p_oGuid['_elemTypes']) && p_oGuid['_elemTypes'].length > 0) {
        this._elemTypes = p_oGuid['_elemTypes'];
      }
    };
    Object.defineProperty(BaseCollection.prototype, 'setObject', {
      enumerable: false
    });

    /**
     * Remove the element from the collection.  
     * 
     * @param {any} p_elem Elements to be removed
     * @returns {number} Index of removed element. If element does not exist, return -1
     */
    BaseCollection.prototype.remove = function (p_elem) {
      var idx = this.$elements.indexOf(p_elem);
      if (idx >= 0 && this.removeAt(idx)) return idx;
      return -1;
    };
    Object.defineProperty(BaseCollection.prototype, 'remove', {
      enumerable: false
    });

    /**
     * Remove the element in the specified location.
     * 
     * @param {number} p_pos Where to remove
     * @returns {boolean} Element Removal Successful
     */
    BaseCollection.prototype.removeAt = function (p_pos) {
      var elem;
      if (typeof p_pos !== 'number') throw new ExtendError(/EL04113/, null, [_typeof(p_pos)]);
      if (p_pos < 0) return false;
      elem = this.$elements[p_pos];
      if (this.$elements.length > p_pos) {
        // this._onRemove(p_pos, elem);
        if (this._onRemove(elem, p_pos) === false) return false;
        if (!this._remove(p_pos)) return false;
        this._onRemoved(elem, p_pos);
        return true;
      }
      return false;
    };
    Object.defineProperty(BaseCollection.prototype, 'removeAt', {
      enumerable: false
    });

    /**
     * Verify that a particular element exists in the collection.  
     * 
     * @param {any} p_elem Factors to check
     * @returns {boolean} Element Existence
     */
    BaseCollection.prototype.contains = function (p_elem) {
      return this.$elements.indexOf(p_elem) > -1;
    };
    Object.defineProperty(BaseCollection.prototype, 'contains', {
      enumerable: false
    });

    /**
     * Returns the index of an element.  
     * 
     * @param {any} p_elem Elements to search for
     * @returns {number} Index of element, return -1 if element is missing
     */
    BaseCollection.prototype.indexOf = function (p_elem) {
      return this.$elements.indexOf(p_elem);
    };
    Object.defineProperty(BaseCollection.prototype, 'indexOf', {
      enumerable: false
    });

    /** 
     * Adds an element to the collection.
     * 
     * @abstract 
     */
    BaseCollection.prototype.add = function () {
      throw new ExtendError(/EL04114/, null, []);
    };
    Object.defineProperty(BaseCollection.prototype, 'add', {
      enumerable: false
    });

    /**
     * Initialize the collection.  
     * 
     * @abstract 
     */
    BaseCollection.prototype.clear = function () {
      throw new ExtendError(/EL04115/, null, []);
    };
    Object.defineProperty(BaseCollection.prototype, 'clear', {
      enumerable: false
    });
    return BaseCollection;
  }(MetaObject);

  var ArrayCollection = function (_super) {
    /**
     * Creates an instance of an ArrayCollection class.  
     * 
     * @constructs ArrayCollection
     * @implements {IArrayCollection}
     * @extends BaseCollection
     * @param {object} [p_owner] Objects that own this collection
     */
    function ArrayCollection(p_owner) {
      _super.call(this, p_owner);
      this.$KEYWORD = ['insertAt'];
      Util["implements"](ArrayCollection, this); // strip:
    }
    Util.inherits(ArrayCollection, _super);
    ArrayCollection._UNION = [IArrayCollection];
    ArrayCollection._NS = 'Collection'; // namespace
    ArrayCollection._PARAMS = ['_owner']; // creator parameter

    // local function
    function _isObject(obj) {
      // 객체 여부
      if (_typeof(obj) === 'object' && obj !== null) return true;
      return false;
    }

    /**
     * Internal method to remove the specified element from the collection.  
     * 
     * @protected
     * @param {number} p_pos Index of the element to be removed
     * @returns {boolean} Success or failure
     */
    ArrayCollection.prototype._remove = function (p_pos) {
      var count = this.count - 1; // [idx] 포인트 이동

      this.$elements.splice(p_pos, 1);
      this.$descriptors.splice(p_pos, 1);
      if (p_pos < count) {
        for (var i = p_pos; i < count; i++) {
          // 참조 변경(이동)
          var desc = this.$descriptors[i] ? this.$descriptors[i] : this._getPropDescriptor(i);
          Object.defineProperty(this, [i], desc);
        }
        delete this[count]; // 마지막 idx 삭제
      } else {
        delete this[p_pos]; // idx 삭제 (끝일 경우)
      }
      return true;
    };
    Object.defineProperty(ArrayCollection.prototype, '_remove', {
      enumerable: false
    });

    /**
     * Returns the object as an object literal of type GUID.  
     * 
     * @param {number} [p_vOpt=0] Import mode  
     * mode=0 : reference structure (_guid:Yes, $ref:Yes)  
     * mode=1: Redundant structure (_guid:Yes, $ref:Yes)  
     * mode=2 : non-coordinated structure (_guid: No, $ref: No)  
     * @param {object | array<object>} [p_owned={}] Parent object that contains (owns) the current object
     * @returns {object}  Guid type object literal 
     * @example
     * a.getObject(2) == b.getObject(2)   
     */
    ArrayCollection.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      var vOpt = p_vOpt || 0;
      var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);
      if (this.$descriptors.length > 0) {
        obj['_desc'] = [];
        for (var i = 0; i < this.$descriptors.length; i++) {
          obj['_desc'].push(this.$descriptors[i]);
        }
      }
      obj['_elem'] = [];
      for (var j = 0; j < this.$elements.length; j++) {
        var elem = this.$elements[j];
        if (elem instanceof MetaObject) {
          if (MetaRegistry.hasGuidObject(elem, owned)) {
            obj['_elem'].push(MetaRegistry.createReferObject(elem));
          } else obj['_elem'].push(elem.getObject(vOpt, owned));
        } else obj['_elem'].push(elem);
      }
      return obj;
    };
    Object.defineProperty(ArrayCollection.prototype, 'getObject', {
      enumerable: false
    });

    /**
     * Set up a GUID type object literal by converting it to an instance object.   
     * 
     * @param {object} p_oGuid object literal of the type of GUID to be set
     * @param {object} [p_origin=p_oGuid] Initial GUID literal object referenced during conversion
     */
    ArrayCollection.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      var origin = p_origin ? p_origin : p_oGuid;
      if (Array.isArray(p_oGuid['_desc']) && p_oGuid['_desc'].length > 0) {
        for (var i = 0; i < p_oGuid['_desc'].length; i++) {
          this.$descriptors.push(p_oGuid['_desc'][i]);
        }
      }
      for (var j = 0; j < p_oGuid['_elem'].length; j++) {
        Object.defineProperty(this, [j], this._getPropDescriptor(j));
      }
      for (var k = 0; k < p_oGuid['_elem'].length; k++) {
        var elem = p_oGuid['_elem'][k];
        if (MetaRegistry.isGuidObject(elem)) {
          var obj = MetaRegistry.createMetaObject(elem, origin);
          obj.setObject(elem, origin);
          this.$elements.push(obj);
        } else if (elem['$ref']) {
          var meta = MetaRegistry.findSetObject(elem['$ref'], origin);
          if (!meta) throw new ExtendError(/EL04211/, null, [k, elem['$ref']]);
          this.$elements.push(meta);
        } else this.$elements.push(elem);
      }
    };
    Object.defineProperty(ArrayCollection.prototype, 'setObject', {
      enumerable: false
    });

    /**
     * Adds an element to the collection.  
     * 
     * @param {any} p_elem Elements to add
     * @param {object} [p_desc] Property descriptor object for element
     * @returns {number} Location of the added element
     */
    ArrayCollection.prototype.add = function (p_elem, p_desc) {
      var pos = this.count;
      this.insertAt(pos, p_elem, p_desc);
      return pos;
    };
    Object.defineProperty(ArrayCollection.prototype, 'add', {
      enumerable: false
    });

    /**
     * Initialize the collection.  
     * Empty the $elements and $descriptors arrays upon initialization.  
     * 
     * @returns {boolean} Additional success
     */
    ArrayCollection.prototype.clear = function () {
      try {
        if (this._onClear() === false) return false;
        for (var i = 0; i < this.count; i++) delete this[i];
        this.$elements = [];
        this.$descriptors = [];
        this._onCleared(); // event
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    };
    Object.defineProperty(ArrayCollection.prototype, 'clear', {
      enumerable: false
    });

    /**
     * Adds an element to the specified location.  
     * 
     * @param {number} p_pos Where to add
     * @param {any} p_elem Elements to add
     * @param {object} [p_desc] Property descriptor object for element
     * @returns {boolean} Additional success
     */
    ArrayCollection.prototype.insertAt = function (p_pos, p_elem, p_desc) {
      try {
        var index = this.count;
        if (typeof p_pos !== 'number') throw new ExtendError(/EL04212/, null, [_typeof(p_pos)]);
        if (index < p_pos) throw new ExtendError(/EL04213/, null, [p_pos, index]);
        if (p_pos < 0) throw new ExtendError(/EL04214/, null, [p_pos]);
        if (this._elemTypes.length > 0) Type.matchType([this._elemTypes], p_elem);
        if (_isObject(p_desc) && p_desc.configurable === false) {
          console.warn(Message.get('WS011', ['configurable = false', 'element']));
          // Message.warn('WS011', ['configurable = false', 'element']); 
        }
        if (_isObject(p_desc) && p_desc.writable === false) {
          console.warn(Message.get('WS011', ['writable = false', 'element']));
          // Message.warn('WS011', ['writable = false', 'element']);
        }
        if (this._onAdd(p_elem, p_pos) === false) return false;

        // data process
        this.$elements.splice(p_pos, 0, p_elem);
        this.$descriptors.splice(p_pos, 0, p_desc);
        // property define
        if (_isObject(p_desc)) {
          Object.defineProperty(this, [p_pos], p_desc);
        } else {
          Object.defineProperty(this, [p_pos], this._getPropDescriptor(p_pos));
        }
        // reindexing
        for (var i = p_pos + 1; i < this.count; i++) {
          var desc = this.$descriptors[i] ? this.$descriptors[i] : this._getPropDescriptor(i);
          Object.defineProperty(this, [i], desc);
        }
        this._onAdded(p_elem, p_pos);
        return true;
      } catch (error) {
        throw new ExtendError(/EL04215/, error, [p_pos, p_elem]);
      }
    };
    Object.defineProperty(ArrayCollection.prototype, 'insertAt', {
      enumerable: false
    });

    /**
     * Returns the result of executing the function provided to all elements to the new array.  
     * 
     * @param {Function} callback callback function to convert, (elem: T, index: number, list: T[]) => U
     * @param {any} thisArg Object to use as this inside the callback function
     * @returns  {Array} Array of converted elements
     */
    ArrayCollection.prototype.map = function (callback, thisArg) {
      var newArr = [];
      if (typeof callback !== 'function') throw new ExtendError(/EL04116/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        newArr[i] = callback.call(thisArg || this, this[i], i, this._list);
      }
      return newArr;
    };
    Object.defineProperty(ArrayCollection.prototype, 'map', {
      enumerable: false
    });

    /**
     * Returns a new array containing only elements that satisfy the conditions of the provided function.  
     * 
     * @param {Function} callback callback function to filter, (elem: T, index: number, list: T[]) => boolean
     * @param {any} thisArg Object to use as this inside the callback function
     * @returns  {Array} Array of filtered elements
     */
    ArrayCollection.prototype.filter = function (callback, thisArg) {
      var newArr = [];
      if (typeof callback !== 'function') throw new ExtendError(/EL04117/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        if (callback.call(thisArg || this, this[i], i, this._list)) {
          newArr.push(this[i]);
        }
      }
      return newArr;
    };
    Object.defineProperty(ArrayCollection.prototype, 'filter', {
      enumerable: false
    });

    /**
     * Returns the accumulated results by executing the reducer function provided to all elements.  
     * 
     * @param {Function} callback callback function to be reduced, (acc: U, element: T, index: number, list: T[]) => U
     * @param {any} initialValue Initial value
     * @returns  {any} Accumulated final result value
     */
    ArrayCollection.prototype.reduce = function (callback, initialValue) {
      var acc = initialValue;
      if (typeof callback !== 'function') throw new ExtendError(/EL04118/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        acc = acc ? callback(acc, this[i], i, this._list) : this[i];
      }
      return acc;
    };
    Object.defineProperty(ArrayCollection.prototype, 'reduce', {
      enumerable: false
    });

    /**
     * Returns the first element that matches the conditions of the provided function.  
     * 
     * @param {Function} callback Callback function to be searched, (elem: T, index: number, list: T[]) => boolean
     * @param {any} thisArg Object to use as this inside the callback function
     * @returns  {any} The first element that satisfies the condition, 'undefined' if not found
     */
    ArrayCollection.prototype.find = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new ExtendError(/EL04119/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        if (callback.call(thisArg || this, this[i], i, this._list)) {
          return this[i];
        }
      }
      return undefined;
    };
    Object.defineProperty(ArrayCollection.prototype, 'find', {
      enumerable: false
    });

    /**
     * Run the function provided for all elements.  
     * 
     * @param {Function} callback Callback function to run, (elem: T, index: number, list: T[]) => void
     * @param {any} thisArg Object to use as this inside the callback function
     */
    ArrayCollection.prototype.forEach = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new ExtendError(/EL041110/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg || this, this[i], i, this._list);
      }
    };
    Object.defineProperty(ArrayCollection.prototype, 'forEach', {
      enumerable: false
    });

    /**
     * Verify that at least one element matches the conditions of the provided function.  
     * 
     * @param {Function} callback Callback function to be examined, (elem: T, index: number, list: T[]) => boolean
     * @param {any} thisArg Object to use as this inside the callback function
     * @returns  {boolean} 'true' if more than one element satisfies the condition, or 'false' if not
     */
    ArrayCollection.prototype.some = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new ExtendError(/EL041111/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        if (callback.call(thisArg || this, this[i], i, this._list)) return true;
      }
      return false;
    };
    Object.defineProperty(ArrayCollection.prototype, 'some', {
      enumerable: false
    });

    /**
     * Verify that all elements satisfy the conditions of the provided function.  
     * 
     * @param {Function} callback Callback function to be examined, (elem: T, index: number, list: T[]) => boolean
     * @param {any} thisArg Object to use as this inside the callback function
     * @returns  {boolean}  'true' if all elements meet the conditions, 'false' otherwise
     */
    ArrayCollection.prototype.every = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new ExtendError(/EL041112/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        if (!callback.call(thisArg || this, this[i], i, this._list)) return false;
      }
      return true;
    };
    Object.defineProperty(ArrayCollection.prototype, 'every', {
      enumerable: false
    });

    /**
     * Returns the index of the first element that matches the conditions of the provided function.  
     * 
     * @param {Function} callback Callback function to be examined, (elem: T, index: number, list: T[]) => boolean
     * @param {any} thisArg Object to use as this inside the callback function
     * @returns  {any} Index of the first element that satisfies the condition, if not found '-1'
     */
    ArrayCollection.prototype.findIndex = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new ExtendError(/EL041113/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        if (callback.call(thisArg || this, this[i], i, this._list)) {
          return i;
        }
      }
      return -1;
    };
    Object.defineProperty(ArrayCollection.prototype, 'findIndex', {
      enumerable: false
    });
    return ArrayCollection;
  }(BaseCollection);

  var PropertyCollection = function (_super) {
    /**
     * Creates an instance of the class 'PropertyCollection'.  
     * 
     * @constructs PropertyCollection
     * @implements {IPropertyCollection}
     * @extends BaseCollection
     * @param {object} p_owner Objects that own this collection
     */
    function PropertyCollection(p_owner) {
      _super.call(this, p_owner);
      var $keys = [];

      /**
       * Returns all key values in the collection to an array.
       * 
       * @member {string} PropertyCollection#$keys
       * @readonly
       * @private
       */
      Object.defineProperty(this, '$keys', {
        get: function get() {
          return $keys;
        },
        set: function set(nVal) {
          $keys = nVal;
        },
        configurable: false,
        enumerable: false
      });

      // /** 
      //  * 컬렉션 요소의 키값들
      //  * @readonly
      //  * @member {array<string>} PropertyCollection#_keys 
      //  */
      // Object.defineProperty(this, '_keys',
      // {
      //     get: function() {
      //         var arr = [];
      //         for (var i = 0; i < _keys.length; i++) arr.push(_keys[i]);
      //         return arr;
      //     },
      //     configurable: false,
      //     enumerable: false
      // });

      // 예약어 등록 
      this.$KEYWORD = ['$keys', 'indexOf', 'exists', 'indexToKey'];
      Util["implements"](PropertyCollection, this); // strip:
    }
    Util.inherits(PropertyCollection, _super);
    PropertyCollection._UNION = [IPropertyCollection];
    PropertyCollection._NS = 'Collection'; // namespace
    PropertyCollection._PARAMS = ['_owner']; // creator parameter

    // local function
    function _isObject(obj) {
      // 객체 여부
      if (_typeof(obj) === 'object' && obj !== null) return true;
      return false;
    }
    function _isString(obj) {
      // 공백아닌 문자 여부
      if (typeof obj === 'string' && obj.length > 0) return true;
      return false;
    }

    /**
     * Internal method to remove the specified element from the collection.  
     * 
     * @protected
     * @param {number} p_pos Location of the element to be removed
     * @returns {boolean} Removal successful
     */
    PropertyCollection.prototype._remove = function (p_pos) {
      var count = this.count - 1;
      var propName = this.indexToKey(p_pos); // number 검사함

      delete this[propName]; // 프로퍼티 삭제

      this.$elements.splice(p_pos, 1);
      this.$keys.splice(p_pos, 1);
      this.$descriptors.splice(p_pos, 1);
      if (p_pos < count) {
        // 참조 자료 변경
        for (var i = p_pos; i < count; i++) {
          // var desc = this.$descriptors[i] ? this.$descriptors[i] : this._getPropDescriptor(i);
          propName = this.indexToKey(i);
          Object.defineProperty(this, [i], this.$descriptors[i] ? this.$descriptors[i] : this._getPropDescriptor(i, false));
          Object.defineProperty(this, propName, this.$descriptors[i] ? this.$descriptors[i] : this._getPropDescriptor(i));
        }
        delete this[count]; // 마지막 idx 삭제
      } else {
        delete this[p_pos]; // idx 삭제 (끝일 경우)
      }
      return true;
    };
    Object.defineProperty(PropertyCollection.prototype, '_remove', {
      enumerable: false
    });

    /**
     * Returns the object as an object literal of type GUID.  
     * 
     * @param {number} [p_vOpt=0] Import mode
     * mode=0 : reference structure (_guid:Yes, $ref:Yes)  
     * mode=1: Redundant structure (_guid:Yes, $ref:Yes)  
     * mode=2 : non-coordinated structure (_guid: No, $ref: No)  
     * @param {object | array<object>} [p_owned={}] Parent object that contains (owns) the current object
     * @returns {object}  Guid type object literal
     * @example
     * a.getObject(2) == b.getObject(2)   
     */
    PropertyCollection.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      var vOpt = p_vOpt || 0;
      var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);
      if (this.$descriptors.length > 0) {
        obj['_desc'] = [];
        for (var i = 0; i < this.$descriptors.length; i++) {
          obj['_desc'].push(this.$descriptors[i]);
        }
      }
      obj['_elem'] = [];
      for (var j = 0; j < this.count; j++) {
        var elem = this.$elements[j];
        if (elem instanceof MetaObject) {
          if (MetaRegistry.hasGuidObject(elem, owned)) {
            obj['_elem'].push(MetaRegistry.createReferObject(elem));
          } else obj['_elem'].push(elem.getObject(vOpt, owned));
        } else obj['_elem'].push(elem);
      }
      obj['_key'] = [];
      for (var k = 0; k < this.$keys.length; k++) {
        var key = this.$keys[k];
        obj['_key'].push(key);
      }
      return obj;
    };
    Object.defineProperty(PropertyCollection.prototype, 'getObject', {
      enumerable: false
    });

    /**
     * Set up a GUID type object literal by converting it to an instance object.  
     * 
     * @param {object} p_oGuid Object literal of the type of GUID to be set
     * @param {object} [p_origin=p_oGuid] Initial GUID literal object referenced during conversion
     */
    PropertyCollection.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      var origin = p_origin ? p_origin : p_oGuid;
      if (p_oGuid['_elem'].length !== p_oGuid['_key'].length) throw new ExtendError(/EL04221/, null, [p_oGuid['_elem'].length, p_oGuid['_key'].length]);
      if (Array.isArray(p_oGuid['_desc']) && p_oGuid['_desc'].length > 0) {
        if (p_oGuid['_elem'].length !== p_oGuid['_desc'].length) throw new ExtendError(/EL04222/, null, [p_oGuid['_elem'].length, p_oGuid['_desc'].length]);
        for (var i = 0; i < p_oGuid['_desc'].length; i++) {
          this.$descriptors.push(p_oGuid['_desc'][i]);
        }
      }
      this.$keys = [];
      for (var j = 0; j < p_oGuid['_key'].length; j++) {
        var key = p_oGuid['_key'][j];
        this.$keys.push(key);
        Object.defineProperty(this, [j], this._getPropDescriptor(j, false));
        Object.defineProperty(this, key, this._getPropDescriptor(j));
      }
      for (var k = 0; k < p_oGuid['_elem'].length; k++) {
        var elem = p_oGuid['_elem'][k];
        if (MetaRegistry.isGuidObject(elem)) {
          var obj = MetaRegistry.createMetaObject(elem, origin);
          obj.setObject(elem, origin);
          this.$elements.push(obj);
        } else if (elem['$ref']) {
          var meta = MetaRegistry.findSetObject(elem['$ref'], origin);
          if (!meta) throw new ExtendError(/EL04223/, null, [k, elem['$ref']]);
          this.$elements.push(meta);
        } else this.$elements.push(elem);
      }
    };
    Object.defineProperty(PropertyCollection.prototype, 'setObject', {
      enumerable: false
    });

    // /**
    //  * 프로퍼티 컬렉션의 인덱스 값을 조회합니다.
    //  * @param {string | any} p_target 키 또는 요소
    //  * @param {boolean} [p_isKey=false] 키로 조회 여부
    //  * @returns {number} 없을시 -1
    //  */
    // PropertyCollection.prototype.indexOf = function(p_target, p_isKey) {
    //     var isKey = p_isKey || false;

    //     if (!isKey) return this.$elements.indexOf(p_target);
    //     else {
    //         if (!_isString(p_target))  throw new ExtendError(/EL04224/, null, [typeof p_target]);
    //         return this.$keys.indexOf(p_target);
    //     }
    // };

    /**
     * Adds an element to the collection.  
     * 
     * @param {string} p_key Key of the element
     * @param {any} [p_elem] Elements to add
     * @param {object} [p_desc] Property descriptor object for element
     * @returns {number} Location of the added element
     */
    PropertyCollection.prototype.add = function (p_key, p_elem, p_desc) {
      try {
        var index = this.count;
        var regex = /^[a-zA-Z_][a-zA-Z0-9_]*/;
        // var types = ['_req_'];

        // types = [types.concat(this._elemTypes)];

        if (!_isString(p_key)) throw new ExtendError(/EL04225/, null, [p_key]);
        if (!regex.test(p_key)) throw new ExtendError(/EL04226/, null, [p_key, regex.source]);
        if (this.$KEYWORD.indexOf(p_key) > -1) throw new ExtendError(/EL04227/, null, [p_key]);
        if (this.exists(p_key)) throw new ExtendError(/EL04228/, null, [p_key]);
        if (this._elemTypes.length > 0) Type.matchType([this._elemTypes], p_elem);
        // if (this._elemTypes.length > 0) Util.matchType(types, p_elem);
        if (_isObject(p_desc) && p_desc.configurable === false) {
          console.warn(Message.get('WS011', ['configurable = true', 'element']));
          // Message.warn('WS011', ['configurable = true', 'element']);
        }
        if (_isObject(p_desc) && p_desc.writable === false) {
          console.warn(Message.get('WS011', ['writable = true', 'element']));
          // Message.warn('WS011', ['writable = true', 'element']);
        }

        // this._onAdd(index, p_elem);
        if (this._onAdd(p_elem, index) === false) return -1;

        // data process
        this.$elements.push(p_elem);
        this.$keys.push(p_key);
        this.$descriptors.push(p_desc);
        // property define
        if (_isObject(p_desc)) {
          Object.defineProperty(this, [index], p_desc);
          Object.defineProperty(this, p_key, p_desc);
        } else {
          Object.defineProperty(this, [index], this._getPropDescriptor(index, false));
          Object.defineProperty(this, p_key, this._getPropDescriptor(index));
        }
        this._onAdded(p_elem, index);
        return index;
      } catch (error) {
        throw new ExtendError(/EL04229/, error, [p_key, p_elem]);
      }
    };
    Object.defineProperty(PropertyCollection.prototype, 'add', {
      enumerable: false
    });

    /**
     * Initialize the collection.  
     * Empty $elements, $descripts, and $keys at initialization.  
     * 
     * @returns {boolean} Additional success
     */
    PropertyCollection.prototype.clear = function () {
      try {
        if (this._onClear() === false) return false;
        for (var i = 0; i < this.count; i++) {
          var propName = this.indexToKey(i);
          delete this[i];
          delete this[propName];
        }
        this.$elements = [];
        this.$descriptors = [];
        this.$keys = [];
        this._onCleared();
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    };
    Object.defineProperty(PropertyCollection.prototype, 'clear', {
      enumerable: false
    });

    /**
     * Query the index based on the key.  
     * 
     * @param {string} p_key Key to view
     * @returns {number} Index corresponding to key, return '-1' if not present
     */
    PropertyCollection.prototype.keyToIndex = function (p_key) {
      if (!_isString(p_key)) throw new ExtendError(/EL04224/, null, [_typeof(p_key)]);
      return this.$keys.indexOf(p_key);
    };
    Object.defineProperty(PropertyCollection.prototype, 'keyToIndex', {
      enumerable: false
    });

    /**
     * Query the key based on the index value.  
     * 
     * @param {number} p_idx Index to view
     * @returns {string} Key values for that index
     */
    PropertyCollection.prototype.indexToKey = function (p_idx) {
      if (typeof p_idx !== 'number') throw new ExtendError(/EL0422A/, null, [_typeof(p_idx)]);
      return this.$keys[p_idx];
    };
    Object.defineProperty(PropertyCollection.prototype, 'indexToKey', {
      enumerable: false
    });

    /**
     * Verify that the specified key exists in the collection.  
     * 
     * @param {string} p_key Key value to check
     * @returns {boolean} If the key exists, it is 'true', otherwise it is 'false'
     */
    PropertyCollection.prototype.exists = function (p_key) {
      if (!_isString(p_key)) throw new ExtendError(/EL0422B/, null, [_typeof(p_key)]);
      return Object.prototype.hasOwnProperty.call(this, p_key);
    };
    Object.defineProperty(PropertyCollection.prototype, 'exists', {
      enumerable: false
    });

    /**
     * Returns the result of executing the function provided to all elements to the new array.  
     * 
     * @param {Function} callback Callback function to convert, (elem: T, index: number, key: string, list: T[]) => U
     * @param {any} thisArg Objects to use as this inside the callback function
     * @returns  {Array} New arrangement of transformed elements
     */
    PropertyCollection.prototype.map = function (callback, thisArg) {
      var newArr = [];
      if (typeof callback !== 'function') throw new ExtendError(/EL04116/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        var key = this.indexToKey(i);
        newArr[i] = callback.call(thisArg || this, this[i], i, key, this._list);
      }
      return newArr;
    };
    Object.defineProperty(PropertyCollection.prototype, 'map', {
      enumerable: false
    });

    /**
     * Returns a new array containing only elements that satisfy the conditions of the provided function.  
     * 
     * @param {Function} callback Callback function to filter, (elem: T, index: number, key: string, list: T[]) => boolean
     * @param {any} thisArg Objects to use as this inside the callback function
     * @returns  {Array} Array of filtered elements
     */
    PropertyCollection.prototype.filter = function (callback, thisArg) {
      var newArr = [];
      if (typeof callback !== 'function') throw new ExtendError(/EL04117/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        var key = this.indexToKey(i);
        if (callback.call(thisArg || this, this[i], i, key, this._list)) {
          newArr.push(this[i]);
        }
      }
      return newArr;
    };
    Object.defineProperty(PropertyCollection.prototype, 'filter', {
      enumerable: false
    });

    /**
     * Returns the accumulated results by executing the reducer function provided to all elements.  
     * 
     * @param {Function} callback callback function to be reduced, (acc: U, element: T, index: number, key: string, list: T[]) => U
     * @param {any} initialValue Initial value
     * @returns  {any} Array of filtered elements
     */
    PropertyCollection.prototype.reduce = function (callback, initialValue) {
      var acc = initialValue;
      if (typeof callback !== 'function') throw new ExtendError(/EL04118/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        var key = this.indexToKey(i);
        acc = acc ? callback(acc, this[i], i, key, this._list) : this[i];
      }
      return acc;
    };
    Object.defineProperty(PropertyCollection.prototype, 'reduce', {
      enumerable: false
    });

    /**
     * Returns the first element that matches the conditions of the provided function.
     * 
     * @param {Function} callback Callback function to be searched, (elem: T, index: number, key: string, list: T[]) => boolean
     * @param {any} thisArg Object to use as this inside the callback function
     * @returns  {any} The first element that satisfies the condition, 'undefined' if not found
     */
    PropertyCollection.prototype.find = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new ExtendError(/EL04119/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        var key = this.indexToKey(i);
        if (callback.call(thisArg || this, this[i], i, key, this._list)) {
          return this[i];
        }
      }
      return undefined;
    };
    Object.defineProperty(PropertyCollection.prototype, 'find', {
      enumerable: false
    });

    /**
     * Run the function provided for all elements.  
     * 
     * @param {Function} callback callback function to be executed, (elem: T, index: number, key: string, list: T[]) => void
     * @param {any} thisArg Object to use as this inside the callback function
     */
    PropertyCollection.prototype.forEach = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new ExtendError(/EL041110/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        var key = this.indexToKey(i);
        callback.call(thisArg || this, this[i], i, key, this._list);
      }
    };
    Object.defineProperty(PropertyCollection.prototype, 'forEach', {
      enumerable: false
    });

    /**
     * Verify that at least one element matches the conditions of the provided function.  
     * 
     * @param {Function} callback Callback function to be examined, (elem: T, index: number, key: string, list: T[]) => boolean
     * @param {any} thisArg Object to use as this inside the callback function
     * @returns  {boolean}  'true' if more than one element satisfies the condition, or 'false' if not
     */
    PropertyCollection.prototype.some = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new ExtendError(/EL041111/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        var key = this.indexToKey(i);
        if (callback.call(thisArg || this, this[i], i, key, this._list)) return true;
      }
      return false;
    };
    Object.defineProperty(PropertyCollection.prototype, 'some', {
      enumerable: false
    });

    /**
     * Verify that all elements satisfy the conditions of the provided function.  
     * 
     * @param {Function} callback Callback function to be examined, (elem: T, index: number, key: string, list: T[]) => boolean
     * @param {any} thisArg Object to use as this inside the callback function
     * @returns  {boolean} 'true' if all elements meet the conditions, 'false' otherwise
     */
    PropertyCollection.prototype.every = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new ExtendError(/EL041112/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        var key = this.indexToKey(i);
        if (!callback.call(thisArg || this, this[i], i, key, this._list)) return false;
      }
      return true;
    };
    Object.defineProperty(PropertyCollection.prototype, 'every', {
      enumerable: false
    });

    /**
     * Returns the index of the first element that matches the conditions of the provided function.  
     * 
     * @param {Function} callback Callback function to be examined, (elem: T, index: number, key: string, list: T[]) => boolean
     * @param {any} thisArg Object to use as this inside the callback function
     * @returns  {any} Index of the first element that satisfies the condition, if not found '-1'
     */
    PropertyCollection.prototype.findIndex = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new ExtendError(/EL041113/, null, [_typeof(callback)]);
      for (var i = 0; i < this.length; i++) {
        var key = this.indexToKey(i);
        if (callback.call(thisArg || this, this[i], i, key, this._list)) {
          return i;
        }
      }
      return -1;
    };
    Object.defineProperty(PropertyCollection.prototype, 'findIndex', {
      enumerable: false
    });
    return PropertyCollection;
  }(BaseCollection);

  var EL02200 = "---- Interface.* ----";
  var EL02210 = "---- i-control-export.js ----";
  var EL02211 = "write(opt): object is an abstract method. '$1' must be implemented";
  var EL02220 = "---- i-control-import.js ----";
  var EL02221 = "read(object) is an abstract method. '$1' must be implemented";
  var EL02230 = "---- i-control-group.js ----";
  var EL02231 = "merge(any, opt) is an abstract method. '$1' must be implemented,";
  var EL02232 = "Copy(filter) is an abstract method. '$1' must be implemented,";
  var EL02240 = "---- i-control-schema.js ----";
  var EL02241 = "readSchema(json) is an abstract method. '$1' must be implemented";
  var EL02242 = "writeSchema(opt): object is an abstract method. '$1' must be implemented";
  var EL02250 = "---- i-transaction.js ----";
  var EL02251 = "AcceptChanges() is an abstract method. '$1' must be implemented";
  var EL02252 = "rejectChanges() is an abstract method. '$1' must be implemented";
  var EL05100 = "---- Meta.Entity.* ----";
  var EL05110 = "---- BaseColumn ----";
  var EL05111 = "$1._entity value is not an instance of [MetaElement]";
  var EL05112 = "$1.columnName is of type 'string'. typeof columnName = '$2'";
  var EL05113 = "Existing $1.columnName'$2'";
  var EL05114 = "Could not set columnName because $1.alias '$2' already exists";
  var EL05115 = "$1.alias is of type 'string'. typeofalias = '$2'";
  var EL05116 = "Existing $1.alias '$2'";
  var EL05117 = "$1.caption is of type 'string'. typeofcaption = '$2'";
  var EL05118 = "setObject(oGuid, origin); oGuid.['_entity'] guid not found. name = '$1', guid = '$2'";
  var EL05119 = "clone() is an abstract method. It must be inherited and implemented.";
  var EL05120 = "---- ObjectColumn ----";
  var EL05121 = "_load(prop); prop is of type 'object', type of prop = '$2'";
  var EL05122 = "setObject(oGuid, origin); oGuid.['default'] guid not found: guid = '$1'";
  var EL05123 = "setObject(oGuid, origin); oGuid.['value'] guid not found: guid = '$1'";
  var EL05130 = "---- MetaColumn ----";
  var EL05131 = "$1.required is of type 'boolean', type of = '$2'";
  var EL05132 = "$1.isNullPass is of type 'boolean'. typeofisNullPass = '$2' TODO: removed";
  var EL05133 = "The array element of $1.constraits is of type 'function' | {regex: RegExp, msg: string}. typeof [$2].regex = '$3', [$2].msg = '$4'";
  var EL05134 = "$1.getter is of type 'function', type of getter = '$2'";
  var EL05135 = "$1.setter is of type 'function', type of setter = '$2'";
  var EL05136 = "addConstraint (regex, msg, code, condition); regex is not a RegExp instance";
  var EL05137 = "addConstraint(regex, msg, code, condition); msg 는 'string' 타입입니다. typeof msg = '$1'";
  var EL05138 = "valid(value); value is a required value. columnName = '$1' ";
  var EL05139 = "valid(value); function constraint failed. columnName = '$1' ";
  var EL0513A = "valid(value); regular expression constraint failed. Column name = '$1', msg = '$2'";
  var EL05140 = "---- BaseColumnCollection ----";
  var EL05141 = "$1._baseType is of type 'function', type of getter = '$2'";
  var EL05142 = "The prototype of $1._baseType [BaseColumn] must be connected (inheritance), ";
  var EL05143 = "add(name, vlaue); cannot add columnColleciton because _onwer rows exist. _onwer.rows.count = '$1'";
  var EL05144 = "add(name, vlaue); cannot be added because '$2' exists in '$1'";
  var EL05145 = "add(name, vlaue); cannot be added because alias '$2' exists in '$1'";
  var EL05146 = "removeAt(idx); cannot remove columnColleciton because _onwer rows exist. _onwer.rows.count = '$1'";
  var EL05147 = "addValue(name, value) is an abstract method. Must be implemented";
  var EL05148 = "Column collection cannot use setter property. Add(), remove() method must be used";
  var EL05150 = "---- MetaTableColumnCollection ----";
  var EL05151 = "add(any); any 는 'string' | [BaseColumn] 타입입니다. typeof any = '$1'";
  var EL05152 = "addValue(name, value); name 은 'string' 타입입니다. typeof name = '$1'";
  var EL05160 = "---- MetaViewColumnCollection ----";
  var EL05161 = "add(any, refCol); refCol value is not of type [BaseColumnCollection";
  var EL05162 = "add(any, refCol); any 는 'string' | [BaseColumn] 타입입니다. typeof any = '$1'";
  var EL05163 = "addValue(name, value, refCol); name 은 'string' 타입입니다. typeof name = '$1'";
  var EL05164 = "addEntity(entity); entity value is not of type [BaseEntity";
  var EL05200 = "";
  var EL05210 = "---- MetaRow ----";
  var EL05211 = "$1.constructor(entity) value is not of type [BaseEntity";
  var EL05212 = "setObject(oGuid, origin); oGuid['_elem'].length = '$1' length and oGuid['_key'].length = '$2' length are different.";
  var EL05213 = "setObject(oGuid, origin); oGuid['_elem']['$1'] guid not found. guid = '$2'";
  var EL05214 = "changeKey(oldKey, newKey); parameter '$1' is not of type 'string'";
  var EL05215 = "changeKey(oldKey, newKey); existing key does not exist. '$1'";
  var EL05216 = "changeKey(oldKey, newKey); the key to be replaced overlaps with the existing key.'$1'";
  var EL05220 = "---- MetaRowCollection ----";
  var EL05221 = "The target's _entity object and $1._onwer object must be the same";
  var EL05222 = "insertAt(pos, row, isCheck); row is not type [MetaRow]";
  var EL05223 = "insertAt(pos, row, isCheck); row's _entity object and $1._onwer object must be the same";
  var EL05224 = "Validation of insertAt(pos, row, isCheck);row['$1'] failed msg = '$2'";
  var EL05300 = "---- base-entity.js ----";
  var EL05310 = "---- property ----";
  var EL05311 = "$1._mestaset value is not of type [MetaSet]";
  var EL05312 = "The $1.column property must be redefined,";
  var EL05320 = "---- private method :: _buildEntity, _readEntity, _readSchema - 14 ----";
  var EL05321 = "_buildEntity(entity, cb, items); items['$1'] 가 'string' It's not type. typeof items['$1'] = '$2'";
  var EL05322 = "_buildEntity(entity, cb, items); column name '$1' exists in this.column and cannot be added.";
  var EL05323 = "_buildEntity (entity, cb, items); row creation for entity failed";
  var EL05324 = "_readEntity(entity, opt); entity is not of type [BaseEntity";
  var EL05325 = "_readEntity(entity, opt); opt is not of type 'number'. type of opt = '$1'";
  var EL05326 = "_readEntity(entity, opt); entity read failed. opt = '$1'";
  var EL05327 = "_readEntity(entity, opt); this.rows exists and cannot load column.opt = '$1'";
  var EL05328 = "_readEntity(entity, opt); column name '$1' exists in this.column and cannot be added";
  var EL05329 = "_readSchema(obj, isRow, origin); obj._baseEntity guid not found. guid = '$1'";
  var EL0532A = "_readSchema (obj, isRow, origin); Schema read failed";
  var EL0532B = "_readSchema(obj, isRow, origin); this.rows exists and cannot be added to column";
  var EL0532C = "_readSchema(obj, isRow, origin); this.columns['$1'] guid not found.guid = '$2'";
  var EL0532D = "_readSchema(obj, isRow, origin); this.columns['$1']._entity guid를 not found. guid = '$2'";
  var EL0532E = "_readSchema(obj, isRow, origin); column name '$1' exists in this.column and cannot be added";
  var EL05330 = "---- method :: transformSchema(static), setValue, clone, select - 7, : getValue, clear, reset, newRow, getObject, setObject ----";
  var EL05331 = "BaseEntity.transformSchema(oGuid); oGuid is not a schema object. oGuid = {column: $1,rows: $2}";
  var EL05332 = "BaseEntity.transformSchema(oGuid); schema conversion failed";
  var EL05333 = "setValue(row);row is not of type [MetaRow";
  var EL05334 = "Row setting failed for setValue(row); columns";
  var EL05335 = "select (filter, ...); recited from MetaRegistry.namespace to fetch '$1'";
  var EL05336 = "select(filter, ...); lookup failed";
  var EL05337 = "clone() is an abstract method. Must be implemented";
  var EL05338 = "validate(); validation can be performed if all columns are MetaColumn type.";
  var EL05340 = "---- merge, copy - 8 ----";
  var EL05341 = "merge(target, opt, isMath); target is not of type [BaseEntity]";
  var EL05342 = "merge(target, opt, isMath); opt is not of type 'number'. type of opt = '$1'";
  var EL05343 = "merge(target, opt, isMath); opt = 1, target.columns['$1'].name = '$2' 이 column name 에 존재합니다.";
  var EL05344 = "merge(target, opt, isMath); opt = 1, target.columns['$1'].name = '$2' 이 column alias 에 존재합니다.";
  var EL05345 = "merge(target, opt, isMath); opt = 3, target.columns['$1'].name = '$2' 이 columns name 에 존재합니다.";
  var EL05346 = "merge(target, opt, isMath); opt = 3, target.columns['$1'].name = '$2' 이 columns alias 에 존재합니다.";
  var EL05347 = "merge(target, opt, isMath); merge failed. opt = '$1'";
  var EL05348 = "copy() is an abstract method. must be implemented";
  var EL05350 = "---- load, read, readSchema, readDate - 12 ----";
  var EL05351 = "load(obj, pas); type [BaseEntity] obj cannot be loaded";
  var EL05352 = "load(obj, pas); obj is not of type 'object' (except null) type of obj = '$1'";
  var EL05353 = "load(obj, pas); load failed";
  var EL05354 = "read(obj, opt); obj is not of type 'object' (except null) type of obj = '$1'";
  var EL05355 = "read(obj, opt); opt is not of type 'number'. type of opt = '$1'";
  var EL05356 = "read(obj, opt); opt values are not in the range (1-3). obj = '$1'";
  var EL05357 = "read(obj, opt); read failed";
  var EL05358 = "readSchema(obj, isCreate, origin); obj is not of type 'object' (except null) type of obj = '$1'";
  var EL05359 = "readSchema(obj, isCreate, origin); obj is not a schema object. obj = {column: $1,rows: $2}";
  var EL0535A = "readSchema (obj, isCreate, origin); skami read failed";
  var EL0535B = "readData(obj); obj is not of type 'object' (except null) type of obj = '$1'";
  var EL0535C = "readData(obj); obj is not a schema object. obj = {columns: $1,rows: $2}";
  var EL0535D = "readData(obj); data read failed";
  var EL05360 = "---- output, write, writeSchema, writeData - 4 ----";
  var EL05361 = "";
  var EL05400 = "";
  var EL05410 = "---- MetaTable ----";
  var EL05411 = "$1.tableName value is not of type 'string'. typeoftableName = '$2'";
  var EL05412 = "$1.column value is not of type [MetaTableCollection]";
  var EL05413 = "$1.rows exists and cannot set columns.rows.count = '$2'";
  var EL05414 = "setObject(oGuid, origin); oGuid.['_metaSet'] guid not found: guid = '$1'";
  var EL05420 = "---- MetaTableColleciton ----";
  var EL05421 = "$1._baseType value is not function type. typeof_baseType = '$2'";
  var EL05422 = "The prototype of $1._baseType [MetaTable] must be connected. (Inheritance)";
  var EL05423 = "add(any); any is 'string' | [MetaTable] type. typeofany = '$1'";
  var EL05424 = "add(any); tableName = '$1' existing";
  var EL05430 = "---- MetaView ----";
  var EL05431 = "$1.viewName value is not of type 'string'. typeofviewName = '$2'";
  var EL05432 = "$1.column value is not of type [MetaViewCollection]";
  var EL05433 = "$1.rows exists and cannot set columns.rows.count = '$2'";
  var EL05434 = "$1._baseEntity value is not of type [BaseEntity]";
  var EL05435 = "setObject(oGuid, origin); oGuid.['_metaSet'] guid not found: guid = '$1'";
  var EL05436 = "setObject(oGuid, origin); oGuid.['_baseEntivity'] guid not found: guid = '$1'";
  var EL05440 = "---- MetaViewColleciton ----";
  var EL05441 = "$1._baseType value is not of type 'function'. typeof_baseType = '$2'";
  var EL05442 = "The prototype of $1._baseType [MetaView] must be connected (inheritance), ";
  var EL05443 = "You cannot enter obj and baseEntity of type [MetaView] at the same time";
  var EL05444 = "add(obj, baseEntity); baseEntity is not type [BaseEntity]";
  var EL05445 = "add(obj, baseEntity); obj is 'string' | [MetaView] type. typeof obj = '$1'";
  var EL05446 = "add(obj, baseEntity); viewName = '$1' existing";
  var EL05450 = "---- MetaSet ----";
  var EL05451 = "$1.setName value is not of type 'string'. typeofsetName = '$2'";
  var EL05452 = "$1.autoChanges value is not of type 'boolean'. typeofsetName = '$2'";
  var EL05453 = "MetaSet.transformSchema(oGuid); oGuid is not a schema object: oGuid = {tables:..., views:...}";
  var EL05454 = "load(obj, pas); type [MetaSet] obj cannot be loaded";
  var EL05455 = "load(obj, pas); obj is not of type 'object' (except null) type of obj = '$1'";
  var EL05456 = "read(obj, opt); obj is not of type 'object' (except null) type of obj = '$1'";
  var EL05457 = "read(obj, opt); opt is not of type 'number'. type of opt = '$1'";
  var EL05458 = "readSchema(obj, isCreate); obj is not of type 'object' (except null) type of obj = '$1'";
  var EL05459 = "readSchema(obj, isCreate); obj is not a schema object. obj = {tables: $1, views: $2}";
  var EL0545A = "readData(obj); obj is not of type 'object' (except null) type of obj = '$1'";
  var EL0545B = "readData(obj); obj is not a schema object.";
  var defaultCode = {
  	EL02200: EL02200,
  	EL02210: EL02210,
  	EL02211: EL02211,
  	EL02220: EL02220,
  	EL02221: EL02221,
  	EL02230: EL02230,
  	EL02231: EL02231,
  	EL02232: EL02232,
  	EL02240: EL02240,
  	EL02241: EL02241,
  	EL02242: EL02242,
  	EL02250: EL02250,
  	EL02251: EL02251,
  	EL02252: EL02252,
  	EL05100: EL05100,
  	EL05110: EL05110,
  	EL05111: EL05111,
  	EL05112: EL05112,
  	EL05113: EL05113,
  	EL05114: EL05114,
  	EL05115: EL05115,
  	EL05116: EL05116,
  	EL05117: EL05117,
  	EL05118: EL05118,
  	EL05119: EL05119,
  	EL05120: EL05120,
  	EL05121: EL05121,
  	EL05122: EL05122,
  	EL05123: EL05123,
  	EL05130: EL05130,
  	EL05131: EL05131,
  	EL05132: EL05132,
  	EL05133: EL05133,
  	EL05134: EL05134,
  	EL05135: EL05135,
  	EL05136: EL05136,
  	EL05137: EL05137,
  	EL05138: EL05138,
  	EL05139: EL05139,
  	EL0513A: EL0513A,
  	EL05140: EL05140,
  	EL05141: EL05141,
  	EL05142: EL05142,
  	EL05143: EL05143,
  	EL05144: EL05144,
  	EL05145: EL05145,
  	EL05146: EL05146,
  	EL05147: EL05147,
  	EL05148: EL05148,
  	EL05150: EL05150,
  	EL05151: EL05151,
  	EL05152: EL05152,
  	EL05160: EL05160,
  	EL05161: EL05161,
  	EL05162: EL05162,
  	EL05163: EL05163,
  	EL05164: EL05164,
  	EL05200: EL05200,
  	EL05210: EL05210,
  	EL05211: EL05211,
  	EL05212: EL05212,
  	EL05213: EL05213,
  	EL05214: EL05214,
  	EL05215: EL05215,
  	EL05216: EL05216,
  	EL05220: EL05220,
  	EL05221: EL05221,
  	EL05222: EL05222,
  	EL05223: EL05223,
  	EL05224: EL05224,
  	EL05300: EL05300,
  	EL05310: EL05310,
  	EL05311: EL05311,
  	EL05312: EL05312,
  	EL05320: EL05320,
  	EL05321: EL05321,
  	EL05322: EL05322,
  	EL05323: EL05323,
  	EL05324: EL05324,
  	EL05325: EL05325,
  	EL05326: EL05326,
  	EL05327: EL05327,
  	EL05328: EL05328,
  	EL05329: EL05329,
  	EL0532A: EL0532A,
  	EL0532B: EL0532B,
  	EL0532C: EL0532C,
  	EL0532D: EL0532D,
  	EL0532E: EL0532E,
  	EL05330: EL05330,
  	EL05331: EL05331,
  	EL05332: EL05332,
  	EL05333: EL05333,
  	EL05334: EL05334,
  	EL05335: EL05335,
  	EL05336: EL05336,
  	EL05337: EL05337,
  	EL05338: EL05338,
  	EL05340: EL05340,
  	EL05341: EL05341,
  	EL05342: EL05342,
  	EL05343: EL05343,
  	EL05344: EL05344,
  	EL05345: EL05345,
  	EL05346: EL05346,
  	EL05347: EL05347,
  	EL05348: EL05348,
  	EL05350: EL05350,
  	EL05351: EL05351,
  	EL05352: EL05352,
  	EL05353: EL05353,
  	EL05354: EL05354,
  	EL05355: EL05355,
  	EL05356: EL05356,
  	EL05357: EL05357,
  	EL05358: EL05358,
  	EL05359: EL05359,
  	EL0535A: EL0535A,
  	EL0535B: EL0535B,
  	EL0535C: EL0535C,
  	EL0535D: EL0535D,
  	EL05360: EL05360,
  	EL05361: EL05361,
  	EL05400: EL05400,
  	EL05410: EL05410,
  	EL05411: EL05411,
  	EL05412: EL05412,
  	EL05413: EL05413,
  	EL05414: EL05414,
  	EL05420: EL05420,
  	EL05421: EL05421,
  	EL05422: EL05422,
  	EL05423: EL05423,
  	EL05424: EL05424,
  	EL05430: EL05430,
  	EL05431: EL05431,
  	EL05432: EL05432,
  	EL05433: EL05433,
  	EL05434: EL05434,
  	EL05435: EL05435,
  	EL05436: EL05436,
  	EL05440: EL05440,
  	EL05441: EL05441,
  	EL05442: EL05442,
  	EL05443: EL05443,
  	EL05444: EL05444,
  	EL05445: EL05445,
  	EL05446: EL05446,
  	EL05450: EL05450,
  	EL05451: EL05451,
  	EL05452: EL05452,
  	EL05453: EL05453,
  	EL05454: EL05454,
  	EL05455: EL05455,
  	EL05456: EL05456,
  	EL05457: EL05457,
  	EL05458: EL05458,
  	EL05459: EL05459,
  	EL0545A: EL0545A,
  	EL0545B: EL0545B
  };

  /**** message.js | _L.Common.Message ****/
  //==============================================================
  var localesPath = './locales'; // 상대 경로

  Message.importMessage(defaultCode, localesPath);

  /**** i-control-export.js | _L.Interface.IExportControl ****/
  //==============================================================
  var IExportControl = function () {
    /**
     * 내보내기 제어 인터페이스 입니다.
     * @constructs _L.Interface.IExportControl
     * @interface
     */
    function IExportControl() {}
    IExportControl._NS = 'Interface'; // namespace
    IExportControl._KIND = 'interface';

    /**
     * 대상을 내보냅니다. (쓰기)
     * @returns {any}
     * @abstract
     */
    IExportControl.prototype.write = function () {
      throw new ExtendError(/EL02211/, null, ['IExportControl']);
    };
    return IExportControl;
  }();

  /**** i-control-group.js | _L.Interface.IGroupControl ****/
  //==============================================================
  var IGroupControl = function () {
    /**
     * 그룹 제어 인터페이스 입니다.
     * @constructs _L.Interface.IGroupControl
     * @interface
     */
    function IGroupControl() {}
    IGroupControl._NS = 'Interface'; // namespace
    IGroupControl._KIND = 'interface';

    /**
     * 병합합니다.
     * @abstract
     */
    IGroupControl.prototype.merge = function () {
      throw new ExtendError(/EL02231/, null, ['IGroupControl']);
    };

    /**
     * 복사합니다.
     * @returns {any}
     * @abstract
     */
    IGroupControl.prototype.copy = function () {
      throw new ExtendError(/EL02232/, null, ['IGroupControl']);
    };
    return IGroupControl;
  }();

  /**** i-control-import.js | _L.Interface.IImportControl ****/
  //==============================================================
  var IImportControl = function () {
    /**
     * 가져오기 제어 인터페이스 입니다.
     * @constructs _L.Interface.IImportControl
     * @interface
     */
    function IImportControl() {}
    IImportControl._NS = 'Interface'; // namespace
    IImportControl._KIND = 'interface';

    /**
     * 대상을 가져옵니다. (읽기)
     * @abstract
     */
    IImportControl.prototype.read = function () {
      throw new ExtendError(/EL02221/, null, ['IImportControl']);
    };
    return IImportControl;
  }();

  /**** i-control-schema.js | _L.Interface.ISchemaControl ****/
  //==============================================================
  var ISchemaControl = function () {
    /**
     * 스키마 제어 인터페이스 입니다.
     * @constructs _L.Interface.ISchemaControl
     * @interface
     */
    function ISchemaControl() {}
    ISchemaControl._NS = 'Interface'; // namespace
    ISchemaControl._KIND = 'interface';

    /**
     * 스키마를 가져옵니다.
     * @abstract
     */
    ISchemaControl.prototype.readSchema = function () {
      throw new ExtendError(/EL02241/, null, ['ISchemaControl']);
    };

    /**
     * 스키마를 내보냅니다. 
     * @returns {any}
     * @abstract
     */
    ISchemaControl.prototype.writeSchema = function () {
      throw new ExtendError(/EL02242/, null, ['ISchemaControl']);
    };
    return ISchemaControl;
  }();

  /**** i-transaction.js | _L.Interface.ITransaction ****/
  //==============================================================
  var ITransaction = function () {
    /**
     * 트렌젝션 인터페이스 입니다.
     * @constructs _L.Interface.ITransaction
     * @interface
     */
    function ITransaction() {}
    ITransaction._NS = 'Interface'; // namespace
    ITransaction._KIND = 'interface';

    /**
     * 변경을 수락합니다. (commit)
     * @abstract
     */
    ITransaction.prototype.acceptChanges = function () {
      throw new ExtendError(/EL02251/, null, ['ITransaction']);
    };

    /**
     * 변경을 거부합니다. (rollback)
     * @abstract
     */
    ITransaction.prototype.rejectChanges = function () {
      throw new ExtendError(/EL02252/, null, ['ITransaction']);
    };
    return ITransaction;
  }();

  /**** trans-queue.js | _L.Collection.TransactionQueue ****/
  //==============================================================
  var TransactionQueue = function () {
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
      Object.defineProperty(this, 'queue', {
        get: function get() {
          return queue;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 대상 컬랙션
       * @member {Number} _L.Collection.TransactionQueue#count 
       */
      Object.defineProperty(this, 'collection', {
        get: function get() {
          return collection;
        },
        set: function set(nVal) {
          if (!(nVal instanceof MetaObject)) {
            throw new ExtendError(/EL04321/, null, []);
          }
          if (!nVal.instanceOf(ArrayCollection)) {
            throw new ExtendError(/EL04322/, null, []);
          }
          collection = nVal;
        },
        configurable: false,
        enumerable: true
      });
      this.collection = p_collection;
    }
    TransactionQueue._NS = 'Collection'; // namespace
    TransactionQueue._PARAMS = ['_owner']; // creator parameter

    /**
     * 초기화
     */
    TransactionQueue.prototype.init = function () {
      this.queue.length = 0;
    };

    /**
     * 커밋
     */
    TransactionQueue.prototype.commit = function () {
      this.init();
    };

    /**
     * 롤백
     */
    TransactionQueue.prototype.rollback = function () {
      var pos, obj;
      for (var i = this.queue.length - 1; i >= 0; i--) {
        obj = this.queue[i];
        if (obj.cmd === 'I') {
          // pos = this.collection.indexOf(obj.ref);
          pos = obj.pos;
          this.collection.removeAt(pos);
        } else if (obj.cmd === 'D') {
          pos = obj.pos;
          this.collection.insertAt(pos, obj.clone);
        } else if (obj.cmd === 'U') {
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
    TransactionQueue.prototype.insert = function (p_pos, p_target, p_etc) {
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
    TransactionQueue.prototype["delete"] = function (p_pos, p_clone, p_etc) {
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
    TransactionQueue.prototype.update = function (p_pos, p_target, p_clone, p_etc) {
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
    TransactionQueue.prototype.select = function () {
      return this.queue;
    };
    return TransactionQueue;
  }();

  var TransactionCollection = function (_super) {
    /**
     * 트랜젝션 컬렉션 클래스
     * @constructs _L.Collection.TransactionCollection
     * @extends _L.Collection.ArrayCollection
     * @param {object} p_owner 소유객체
     */
    function TransactionCollection(p_owner) {
      _super.call(this, p_owner);
      var _transQueue = new TransactionQueue(this);
      var autoChanges = false;

      /**
       * 트렌젝션 큐
       * @readonly
       * @member {TransactionQueue} _L.Collection.TransactionCollection#_transQueue
       */
      Object.defineProperty(this, '_transQueue', {
        get: function get() {
          return _transQueue;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * 자동 변경 유무 (기본값: 사용 false)
       * @member {boolean} _L.Collection.TransactionCollection#autoChanges
       */
      Object.defineProperty(this, 'autoChanges', {
        get: function get() {
          return autoChanges;
        },
        set: function set(nVal) {
          if (typeof nVal !== 'boolean') {
            throw new ExtendError(/EL04311/, null, [this.constructor.name, _typeof(nVal)]);
          }
          autoChanges = nVal;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * 변경 유무
       * @readonly
       * @member {TransactionCollection} _L.Collection.TransactionCollection#hasChanges
       */
      Object.defineProperty(this, 'hasChanges', {
        get: function get() {
          return _transQueue.queue.length > 0;
        },
        configurable: false,
        enumerable: false
      });

      // 예약어 등록 
      this.$KEYWORD = ['_transQueue', 'autoChanges', 'hasChanges'];
      this.$KEYWORD = ['commit', 'rollback'];
    }
    Util.inherits(TransactionCollection, _super);
    TransactionCollection._NS = 'Collection'; // namespace
    TransactionCollection._PARAMS = ['_owner']; // creator parameter

    /**
     * 트랜젝션 컬렉션 프로퍼티 기술자 
     * @protected
     * @param {number} p_idx 인덱스
     */
    TransactionCollection.prototype._getPropDescriptor = function (p_idx) {
      return {
        get: function get() {
          return this.$elements[p_idx];
        },
        set: function set(nVal) {
          if (this._elemTypes.length > 0) Type.matchType([this._elemTypes], nVal);
          this._transQueue.update(p_idx, nVal, this.$elements[p_idx]);
          this.$elements[p_idx] = nVal;
        },
        configurable: true,
        enumerable: true
      };
    };
    Object.defineProperty(TransactionCollection.prototype, '_getPropDescriptor', {
      enumerable: false
    });

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.
     * @param {number} p_vOpt 가져오기 옵션
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    TransactionCollection.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      if (this.autoChanges !== false) obj['autoChanges'] = this.autoChanges;
      return obj;
    };
    Object.defineProperty(TransactionCollection.prototype, 'getObject', {
      enumerable: false
    });

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.   
     * @param {object} p_oGuid guid 타입의 객체
     * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
     * 기본값은 p_oGuid 객체와 동일
     */
    TransactionCollection.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      this._transQueue.init();
      if (p_oGuid['autoChanges']) this.autoChanges = p_oGuid['autoChanges'];
    };
    Object.defineProperty(TransactionCollection.prototype, 'setObject', {
      enumerable: false
    });

    /**
     * 지정 위치에 요소 삭제
     * @param {number} p_pos 인덱스 위치
     * @returns {boolean}
     */
    TransactionCollection.prototype.removeAt = function (p_pos) {
      if (!this.autoChanges) this._transQueue["delete"](p_pos, this[p_pos]);
      return _super.prototype.removeAt.call(this, p_pos);
    };
    Object.defineProperty(TransactionCollection.prototype, 'removeAt', {
      enumerable: false
    });

    /**
     * 전체 초기화
     */
    TransactionCollection.prototype.clear = function () {
      _super.prototype.clear.call(this);
      this._transQueue.init();
    };
    Object.defineProperty(TransactionCollection.prototype, 'clear', {
      enumerable: false
    });

    /**
     * 지정 위치에 요소 추가
     * @param {number} p_pos 인덱스 위치
     * @param {any} p_elem 요소
     * @param {object} [p_desc] 프로퍼티 기술자 객체
     * @returns {boolean}
     */
    TransactionCollection.prototype.insertAt = function (p_pos, p_elem, p_desc) {
      if (!this.autoChanges) this._transQueue.insert(p_pos, p_elem);
      return _super.prototype.insertAt.call(this, p_pos, p_elem, p_desc);
    };
    Object.defineProperty(TransactionCollection.prototype, 'insertAt', {
      enumerable: false
    });

    /**
     * 변경사항 반영
     */
    TransactionCollection.prototype.commit = function () {
      this._transQueue.commit();
    };
    Object.defineProperty(TransactionCollection.prototype, 'commit', {
      enumerable: false
    });

    /**
     * 변경사항 이전으로 복귀
     */
    TransactionCollection.prototype.rollback = function () {
      this._transQueue.rollback();
    };
    Object.defineProperty(TransactionCollection.prototype, 'rollback', {
      enumerable: false
    });
    return TransactionCollection;
  }(ArrayCollection);

  /**** meta-row.js | MetaRow ****/
  //==============================================================
  var MetaRow = function (_super) {
    /**
     * 메타 로우
     * @constructs _L.Meta.Entity.MetaRow
     * @extends _L.Meta.MetaObject
     * @param {BaseEntity} p_entity 소유하는 엔티티
     */
    function MetaRow(p_entity) {
      _super.call(this);

      // private
      var $event = new EventEmitter(this);
      var $elements = [];
      var $keys = [];
      var _entity = null;

      /**
       * 내부 변수 접근
       * @member {Array<string>} _L.Meta.Entity.MetaRow#$elements
       * @readonly
       * @private
       */
      Object.defineProperty(this, '$elements', {
        get: function get() {
          return $elements;
        },
        set: function set(nVal) {
          $elements = nVal;
        },
        configurable: false,
        enumerable: false
      });

      /** 
       * 이벤트 객체
       * @private 
       * @member {EventEmitter} _L.Meta.Entity.MetaRow#$event  
       */
      Object.defineProperty(this, '$event', {
        get: function get() {
          return $event;
        },
        configurable: false,
        enumerable: false
      });

      // /** 
      //  * 로우 요소값 
      //  * @readonly
      //  * @member {Array<any>} _L.Meta.Entity.MetaRow#$elements  
      //  */
      // Object.defineProperty(this, '$elements', 
      // {
      //     get: function() {
      //         var arr = [];
      //         for (var i = 0; i < $elements.length; i++) arr.push($elements[i]);
      //         return arr;
      //     },
      //     configurable: false,
      //     enumerable: false,
      // });

      /** 
       * 요소 키
       * @readonly
       * @member {Array<string>} _L.Meta.Entity.MetaRow#$keys  
       */
      Object.defineProperty(this, '$keys', {
        get: function get() {
          // var arr = [];
          // for (var i = 0; i < $keys.length; i++) arr.push($keys[i]);
          // return arr;
          return $keys;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * 로우의 소유 엔티티
       * @readonly
       * @member {BaseEntity} _L.Meta.Entity.MetaRow#_entity
       */
      Object.defineProperty(this, '_entity', {
        get: function get() {
          return _entity;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * 컬렉션 목록 
       * @readonly
       * @member {Array<any>}  _L.Meta.Entity.MetaRow#_list  
       */
      Object.defineProperty(this, '_list', {
        get: function get() {
          var arr = [];
          for (var i = 0; i < $elements.length; i++) arr.push($elements[i]);
          return arr;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * 컬랙션 갯수 
       * @readonly
       * @member {Number} _L.Meta.Entity.MetaRow#count 
       */
      Object.defineProperty(this, 'count', {
        get: function get() {
          return $elements.length;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * 변경전 이벤트 
       * @event _L.Meta.Entity.MetaRow#onChanged 
       * @param {function}    p_callback
       * @param {number}      p_callback.p_idx  index
       * @param {any}         p_callback.p_nValue 신규 값
       * @param {any}         p_callback.p_oValue 기존 값
       * @param {this}        p_callback.p_this 로우 객체
       */
      Object.defineProperty(this, 'onChanging', {
        set: function set(fun) {
          this.$event.on('onChanging', fun);
        },
        configurable: false,
        enumerable: false
      });

      /**
       * 변경후 이벤트 
       * @event _L.Meta.Entity.MetaRow#onChanged 
       * @param {function}    p_callback
       * @param {number}      p_callback.p_idx  index
       * @param {any}         p_callback.p_nValue 신규 값
       * @param {any}         p_callback.p_oValue 기존 값
       * @param {this}        p_callback.p_this 로우 객체
       */
      Object.defineProperty(this, 'onChanged', {
        set: function set(fun) {
          this.$event.on('onChanged', fun);
        },
        configurable: false,
        enumerable: false
      });

      // inner variable access
      // this.__GET$elements = function(call) {
      //     if (call instanceof MetaRow) return $elements;
      // }
      // this.__GET$_keys = function(call) {
      //     if (call instanceof MetaRow) return _keys;
      // };
      // this.__SET$elements = function(val, call) {
      //     if (call instanceof MetaRow) $elements = val;
      // }
      // this.__SET$_keys = function(val, call) {
      //     if (call instanceof MetaRow) _keys = val;
      // };
      // this.__SET$_entity = function(val, call) {
      //     if (call instanceof MetaRow) _entity = val;
      // };

      // BaseEntity 등록 & order(순서) 값 계산
      if (!(p_entity instanceof MetaObject && p_entity.instanceOf('BaseEntity'))) {
        throw new ExtendError(/EL05211/, null, []);
      }

      // 설정
      _entity = p_entity;
      for (var i = 0; i < _entity.columns.count; i++) {
        var idx = $elements.length;
        var alias = _entity.columns[i].alias;
        $elements.push(_entity.columns[i]["default"]); // 기본값 등록
        $keys.push(alias);
        Object.defineProperty(this, [i], this._getPropDescriptor(idx, false));
        Object.defineProperty(this, alias, this._getPropDescriptor(idx));
      }
      Util["implements"](MetaRow, this); // strip:
    }
    Util.inherits(MetaRow, _super);
    MetaRow._UNION = [IList];
    MetaRow._NS = 'Meta.Entity';
    MetaRow._PARAMS = ['_entity'];

    // local function
    function _isString(obj) {
      // 공백아닌 문자 여부
      if (typeof obj === 'string' && obj.length > 0) return true;
      return false;
    }

    /**
     * TODO:
     * @param {*} p_idx 
     * @param {*} p_enum 
     * @returns 
     */
    MetaRow.prototype._getPropDescriptor = function (p_idx, p_enum) {
      if (typeof p_enum !== 'boolean') p_enum = true;
      return {
        get: function get() {
          return this.$elements[p_idx];
        },
        set: function set(nVal) {
          var oldValue = this.$elements[p_idx];
          var column;
          // 엔티티 항상 존재함
          column = this._entity.columns[p_idx];
          if (column && column._valueTypes.length > 0) Type.matchType([column._valueTypes], nVal);
          // 트렌젹션 처리 => 함수로 추출 검토
          if (this._entity && !this._entity.rows.autoChanges) {
            var etc = 'idx:' + p_idx + ', new:' + nVal + ', old:' + oldValue;
            var pos = this._entity.rows.indexOf(this);
            if (pos > -1) {
              // 컬력션에 포힘때 : 변경시점에 큐에 추가
              this._entity.rows._transQueue.update(pos, this, this.clone(), etc);
            }
          }
          // 이벤트 및 처리
          this._onChanging(p_idx, nVal, oldValue);
          this.$elements[p_idx] = nVal;
          this._onChanged(p_idx, nVal, oldValue);
        },
        configurable: true,
        enumerable: p_enum
      };
    };
    Object.defineProperty(MetaRow.prototype, '_getPropDescriptor', {
      enumerable: false
    });

    /**
     * 속성명 변경
     * @param {string} [p_entity] 대상의 엔티티 기준으로 생성
     * @returns {MetaRow}
     */
    MetaRow.prototype._changeKey = function (p_oldKey, p_newKey) {
      var idx;

      // 타입 검사
      if (!_isString(p_oldKey)) throw new ExtendError(/EL05214/, null, ['oldKey']);
      if (!_isString(p_newKey)) throw new ExtendError(/EL05214/, null, ['newKey']);

      // 새로운 키 중복 검사
      if (this.$keys.indexOf(p_oldKey) < 0) throw new ExtendError(/EL05215/, null, [p_oldKey]); // 기존에 키가 존재하지 않습니다. TODO:
      if (this.$keys.indexOf(p_newKey) > -1) throw new ExtendError(/EL05216/, null, [p_newKey]); // 교체할 키가 기존 키와 중복됩니다. TODO:

      // 기존 idx 조회
      idx = this.$keys.indexOf(p_oldKey);

      // 기존 제거 및 설정
      delete this[p_oldKey];
      Object.defineProperty(this, p_newKey, this._getPropDescriptor(idx));

      // $keys 값 교체
      this.$keys.splice(idx, 1, p_newKey);
    };
    Object.defineProperty(MetaRow.prototype, '_changeKey', {
      enumerable: false
    });

    // function $getPropDescriptor(p_idx, p_enum) {
    //     if (typeof p_enum !== 'boolean') p_enum = true;
    //     return {
    //         get: function() { return this.$elements[p_idx]; },
    //         set: function(nVal) {
    //             var oldValue = this.$elements[p_idx];
    //             var column;
    //             // 엔티티 항상 존재함
    //             column = this._entity.columns[p_idx];
    //             if (column && column._valueTypes.length > 0) Type.matchType([column._valueTypes], nVal);
    //             // 트렌젹션 처리 => 함수로 추출 검토
    //             if (this._entity && !this._entity.rows.autoChanges) {
    //                 var etc = 'idx:'+ p_idx +', new:' + nVal + ', old:'+ oldValue;
    //                 var pos = this._entity.rows.indexOf(this);
    //                 if (pos > -1) {     // 컬력션에 포힘때 : 변경시점에 큐에 추가
    //                     this._entity.rows._transQueue.update(pos, this, this.clone(), etc);
    //                 }
    //             }
    //             // 이벤트 및 처리
    //             this._onChanging(p_idx, nVal, oldValue);
    //             this.$elements[p_idx] = nVal;
    //             this._onChanged(p_idx, nVal, oldValue);

    //         },
    //         configurable: false,
    //         enumerable: p_enum
    //     };
    // }

    /**
     * 로우 요소 변경전 이벤트
     * @param {*} p_idx 인덱스
     * @param {*} p_nValue 변경 값
     * @param {*} p_oValue 기존 값
     * @listens _L.Meta.Entity.MetaColumn#_onChanged
     */
    MetaRow.prototype._onChanging = function (p_idx, p_nValue, p_oValue) {
      this.$event.emit('onChanging', p_idx, p_nValue, p_oValue, this);
    };
    Object.defineProperty(MetaRow.prototype, '_onChanging', {
      enumerable: false
    });

    /**
     * 로우 요소 변경후 이벤트
     * @param {*} p_idx 인덱스
     * @param {*} p_nValue 변경 값
     * @param {*} p_oValue 기존 값
     * @listens _L.Meta.Entity.MetaColumn#_onChanged
     */
    MetaRow.prototype._onChanged = function (p_idx, p_nValue, p_oValue) {
      this.$event.emit('onChanged', p_idx, p_nValue, p_oValue, this);
    };
    Object.defineProperty(MetaRow.prototype, '_onChanged', {
      enumerable: false
    });

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.
     * @param {number} p_vOpt 가져오기 옵션
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    MetaRow.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      var vOpt = p_vOpt || 0;
      var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);
      if (!Type.deepEqual(this.$event.$storage, {})) {
        obj['$storage'] = this.$event.$storage;
      }
      if (vOpt < 2 && vOpt > -1 && this._entity) {
        obj['_entity'] = MetaRegistry.createReferObject(this._entity);
      }
      obj['_elem'] = [];
      for (var i = 0; i < this._list.length; i++) {
        var elem = this._list[i];
        if (elem instanceof MetaObject) {
          if (MetaRegistry.hasGuidObject(elem, owned)) {
            obj['_elem'].push(MetaRegistry.createReferObject(elem));
          } else obj['_elem'].push(elem.getObject(vOpt, owned));
        } else obj['_elem'].push(elem);
      }
      obj['_key'] = [];
      for (var i = 0; i < this.$keys.length; i++) {
        var key = this.$keys[i];
        obj['_key'].push(key);
      }
      return obj;
    };
    Object.defineProperty(MetaRow.prototype, 'getObject', {
      enumerable: false
    });

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.   
     * @param {object} p_oGuid guid 타입의 객체
     * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
     * 기본값은 p_oGuid 객체와 동일
     */
    MetaRow.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      var origin = p_origin ? p_origin : p_oGuid;
      if (p_oGuid['_elem'].length !== p_oGuid['_key'].length) throw new ExtendError(/EL05212/, null, [p_oGuid['_elem'].length, p_oGuid['_key'].length]);
      if (p_oGuid['$storage']) {
        this.$event.$storage = p_oGuid['$storage'];
      }
      for (var i = 0; i < p_oGuid['_elem'].length; i++) {
        var elem = p_oGuid['_elem'][i];
        if (MetaRegistry.isGuidObject(elem)) {
          var obj = MetaRegistry.createMetaObject(elem, origin);
          obj.setObject(elem, origin);
          this.$elements[i] = obj;
        } else if (elem['$ref']) {
          var meta = MetaRegistry.findSetObject(elem['$ref'], origin);
          if (!meta) throw new ExtendError(/EL05213/, null, [i, elem['$ref']]);
          this.$elements[i] = meta;
        } else this.$elements[i] = elem;
      }
    };
    Object.defineProperty(MetaRow.prototype, 'setObject', {
      enumerable: false
    });

    /**
     * 객체 복제
     * @param {BaseEntity} [p_entity] 대상의 엔티티 기준으로 생성
     * @returns {MetaRow}
     */
    MetaRow.prototype.clone = function (p_entity) {
      var entity = p_entity || this._entity;
      var clone = new MetaRow(entity);
      var obj = this.getObject();
      if (obj.$storage) {
        clone.$event.$storage = obj.$storage;
      }
      clone.$elements = Util.deepCopy(obj._elem);
      return clone;
    };
    Object.defineProperty(MetaRow.prototype, 'clone', {
      enumerable: false
    });
    return MetaRow;
  }(MetaObject);

  /**** collection-meta-row.js | MetaTableCollection ****/
  //==============================================================
  var MetaRowCollection = function (_super) {
    /**
     * 로우 컬렉션
     * @constructs _L.Meta.Entity.MetaRowCollection
     * @extends _L.Collection.TransactionCollection
     * @param {object} [p_owner] 소유자 
     */
    function MetaRowCollection(p_owner) {
      _super.call(this, p_owner);
      this._elemTypes = MetaRow; // 컬렉션타입 설정
      this.autoChanges = true; // 트랜젝션 기본 해제 해제입니다.
    }
    Util.inherits(MetaRowCollection, _super);
    MetaRowCollection._NS = 'Meta.Entity'; // namespace
    MetaRowCollection._PARAMS = ['_owner']; // creator parameter

    /**
     * 프로퍼티 기술자 설정
     * @protected
     * @param {number} p_idx 인덱스
     */
    MetaRowCollection.prototype._getPropDescriptor = function (p_idx) {
      return {
        get: function get() {
          return this.$elements[p_idx];
        },
        set: function set(nVal) {
          if (this._elemTypes.length > 0) Type.matchType([this._elemTypes], nVal);
          if (nVal._entity !== this._owner) throw new ExtendError(/EL05221/, null, [this.constructor.name]);
          this._transQueue.update(p_idx, nVal, this.$elements[p_idx]);
          this.$elements[p_idx] = nVal;
        },
        configurable: true,
        enumerable: true
      };
    };
    Object.defineProperty(MetaRowCollection.prototype, '_getPropDescriptor', {
      enumerable: false
    });

    /**
     * MetaRow 추가 idx 를 기준으로 검사한다.
     * @param {MetaRow} p_row 추가할 MetaRow
     * @param {boolean} [p_isCheck] 유효성 검사 여부 (기본값 = false)
     * @returns {number}
     */
    MetaRowCollection.prototype.add = function (p_row, p_isCheck) {
      var pos = this.$elements.length;
      this.insertAt(pos, p_row, p_isCheck); // TODO: try 문으로 묶음 필요
      return pos;
    };
    Object.defineProperty(MetaRowCollection.prototype, 'add', {
      enumerable: false
    });

    /**
     * pos 위치에 추가
     * @param {number} p_pos 추가할 위치 인덱스
     * @param {MetaRow} p_row 추가할 MetaRow
     * @param {boolean} [p_isCheck] 유효성 검사 여부 (기본값 = false)
     * @returns {boolean}
     */
    MetaRowCollection.prototype.insertAt = function (p_pos, p_row, p_isCheck) {
      var isCheck = p_isCheck || false;
      var result;
      var entity = p_row._entity;
      if (!(p_row instanceof MetaRow)) throw new ExtendError(/EL05222/, null, []);
      if (entity._guid !== this._owner._guid) throw new ExtendError(/EL05223/, null, [this.constructor.name]);

      // valid 검사
      if (isCheck === true) {
        for (var i = 0; i < p_row.count; i++) {
          result = entity.columns[i].valid(p_row[i]); // TODO: try 조건으로 변경 하면 하위 메세지 호출함
          if (result) {
            throw new ExtendError(/EL05224/, null, [i, result.msg]);
          }
        }
      }
      return _super.prototype.insertAt.call(this, p_pos, p_row);
    };
    Object.defineProperty(MetaRowCollection.prototype, 'insertAt', {
      enumerable: false
    });
    return MetaRowCollection;
  }(TransactionCollection);

  var BaseColumn = function (_super) {
    /**
     * 컬럼 (최상위)
     * @abstract
     * @constructs _L.Meta.Entity.BaseColumn
     * @extends _L.Meta.MetaElement
     * @param {string} p_name 아이템명
     * @param {BaseEntity} [p_entity] 소유 BaseEntity
     */
    function BaseColumn(p_name, p_entity) {
      _super.call(this, p_name);
      var $key = p_name;
      var $value = null;
      var $alias = null;
      var _entity = null;
      var _valueTypes = this._type._VALUE_TYPE || [];
      var _default = '';
      var caption = '';
      /**
       * 컬럼 컬렉션의 키
       * @member {string} _L.Meta.Entity.BaseColumn#$key
       * @readonly
       * @private
       */
      Object.defineProperty(this, '$key', {
        get: function get() {
          return $key;
        },
        set: function set(nVal) {
          if (_isString(nVal)) $key = nVal;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * 별칭 내부값
       * @member {string | number | boolean} _L.Meta.Entity.BaseColumn#$value
       * @readonly
       * @private
       */
      Object.defineProperty(this, '$value', {
        get: function get() {
          return $value;
        },
        set: function set(nVal) {
          $value = nVal;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * 별칭 내부값
       * @member {string} _L.Meta.Entity.BaseColumn#$alias
       * @readonly
       * @private
       */
      Object.defineProperty(this, '$alias', {
        get: function get() {
          return $alias;
        },
        set: function set(nVal) {
          if (_isString(nVal)) $alias = nVal;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * 컬럼 소유 엔티티
       * @member {BaseEntity} _L.Meta.Entity.BaseColumn#_entity
       * @protected
       */
      Object.defineProperty(this, '_entity', {
        get: function get() {
          return _entity;
        },
        set: function set(nVal) {
          if (typeof nVal !== 'undefined' && !(nVal instanceof MetaElement && nVal.instanceOf('BaseEntity'))) {
            throw new ExtendError(/EL05111/, null, [this.constructor.name]);
          }
          _entity = nVal;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * value 타입 설정
       * @member {any} _L.Meta.Entity.BaseColumn#_valueTypes
       * @protected
       */
      Object.defineProperty(this, '_valueTypes', {
        get: function get() {
          return _valueTypes;
        },
        set: function set(nVal) {
          var arr = [];
          if (!Array.isArray(nVal)) arr.push(nVal);else arr = nVal;
          _valueTypes = arr;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 컬럼명, _name 과 동일
       * @member {string} _L.Meta.Entity.BaseColumn#columnName
       */
      Object.defineProperty(this, 'columnName', {
        get: function get() {
          return this._name;
        },
        set: function set(nVal) {
          if (nVal === this.columnName) return;
          if (typeof nVal !== 'string') throw new ExtendError(/EL05112/, null, [this.constructor.name, _typeof(nVal)]);
          if (_entity && _entity.columns.existColumnName(nVal)) throw new ExtendError(/EL05113/, null, [this.constructor.name, nVal]);
          if (_entity && _entity.columns.existAlias(nVal)) throw new ExtendError(/EL05114/, null, [this.constructor.name, nVal]);
          this._name = nVal;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 아이템 별칭 (bind전송시, 데이터 수신후 설정시 활용함)  
       * 사용처 (기본값 = columnName )
       * - Bind-command-ajax._execBind() : 데이터 전송시  
       * - BaseBind.setValue(row) : 로우값 을 엔티티에 설정시  
       * - getValue() : row 에 활용함  
       * @member {string} _L.Meta.Entity.BaseColumn#alias
       */
      Object.defineProperty(this, 'alias', {
        get: function get() {
          return typeof $alias === 'string' ? $alias : this.columnName;
        },
        set: function set(nVal) {
          var entity = this._entity;
          var oldKey = this.$alias || this.columnName;
          if (typeof nVal !== 'string') throw new ExtendError(/EL05115/, null, [this.constructor.name, _typeof(nVal)]);
          if (entity && entity.columns.existAlias(nVal)) throw new ExtendError(/EL05116/, null, [this.constructor.name, nVal]);

          // 기존에 rows 에 기존 명칭이 존재하면 MetaRow 변경
          if (this._entity) {
            for (var i = 0; i < this._entity.rows.count; i++) {
              var row = this._entity.rows[i];
              row._changeKey(oldKey, nVal);
            }
          }
          $alias = nVal;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 컬럼 value 의 기본값 (내부속성)
       * @member {string | number | boolean} _L.Meta.Entity.BaseColumn#default
       */
      Object.defineProperty(this, 'default', {
        get: function get() {
          return _default;
        },
        set: function set(nVal) {
          if (this._valueTypes.length > 0) Type.matchType([this._valueTypes], nVal);
          _default = nVal;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 컬럼 설명
       * @member {string} _L.Meta.Entity.BaseColumn#caption
       */
      Object.defineProperty(this, 'caption', {
        get: function get() {
          return caption;
        },
        set: function set(nVal) {
          if (typeof nVal !== 'string') throw new ExtendError(/EL05117/, null, [this.constructor.name, _typeof(nVal)]);
          caption = nVal;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 컬럼 값
       * @member {any} _L.Meta.Entity.BaseColumn#value
       */
      Object.defineProperty(this, 'value', {
        get: function get() {
          return $value === null ? this["default"] : $value;
        },
        set: function set(nVal) {
          if (this._valueTypes.length > 0) Type.matchType([this._valueTypes], nVal);
          $value = nVal;
        },
        configurable: true,
        enumerable: true
      });

      /**
       * value 별칭
       * this.value
       * @member {object} _L.Meta.Entity.BaseColumn#val 
       */
      Object.defineProperty(this, 'val', {
        get: function get() {
          return this.value;
        },
        set: function set(nVal) {
          this.value = nVal;
        },
        configurable: true,
        enumerable: false
      });
      if (p_entity) _entity = p_entity;
    }
    Util.inherits(BaseColumn, _super);
    BaseColumn._NS = 'Meta.Entity'; // namespace
    BaseColumn._PARAMS = ['columnName', '_entity']; // creator parameter
    BaseColumn._KIND = 'abstract';
    BaseColumn._VALUE_TYPE = [];

    // local funciton
    // function _isObject(obj) {    // 객체 여부
    //     if (typeof obj === 'object' && obj !== null) return true;
    //     return false;
    // }
    function _isString(obj) {
      // 공백아닌 문자 여부
      if (typeof obj === 'string' && obj.length > 0) return true;
      return false;
    }

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.
     * @param {number} p_vOpt 가져오기 옵션
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    BaseColumn.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      var vOpt = p_vOpt || 0;
      if (vOpt < 2 && vOpt > -1 && this._entity) {
        obj['_entity'] = MetaRegistry.createReferObject(this._entity);
      }
      obj['columnName'] = this.columnName;
      if (this["default"] !== '') obj['default'] = this["default"];
      if (this.caption !== '') obj['caption'] = this.caption;
      if (this.$alias !== null) obj['$alias'] = this.$alias;
      // if (this.__GET$alias(this) !== null) obj['alias'] = this.__GET$alias(this);
      if (this.$value !== null) obj['$value'] = this.$value;
      return obj;
    };

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.   
     * @param {object} p_oGuid guid 타입의 객체
     * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
     * 기본값은 p_oGuid 객체와 동일
     */
    BaseColumn.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      var origin = p_origin ? p_origin : p_oGuid;
      var entity;
      if (p_oGuid['_entity']) {
        entity = MetaRegistry.findSetObject(p_oGuid['_entity']['$ref'], origin);
        if (!entity) throw new ExtendError(/EL05118/, null, [p_oGuid['name'], p_oGuid['_entity']['$ref']]);
        this._entity = entity;
      }
      this.columnName = p_oGuid['columnName'];
      if (p_oGuid['default']) this["default"] = p_oGuid['default'];
      if (p_oGuid['caption']) this.caption = p_oGuid['caption'];
      if (p_oGuid['$alias']) this.$alias = p_oGuid['$alias'];
      if (p_oGuid['$value']) this.$value = p_oGuid['$value'];
    };

    /** 
     * 컬럼 복제
     * @abstract 
     */
    BaseColumn.prototype.clone = function () {
      throw new ExtendError(/EL05119/, null, []);
    };
    return BaseColumn;
  }(MetaElement);

  var MetaColumn = function (_super) {
    /**
     * 메타 컬럼
     * @constructs _L.Meta.Entity.MetaColumn
     * @extends _L.Meta.Entity.BaseColumn
     * @param {string} p_name 컬럼명
     * @param {BaseEntity} [p_entity] 소유 BaseEntity
     * @param {object} [p_property] 
     * @param {object} p_property.default 기본값
     * @param {boolean} p_property.required 필수 유무
     * @param {array<object.function>} p_property.constraints 제약조건
     * @param {string | number | boolean} p_property.value value 값
     * @param {function} p_property.getter 겟터
     * @param {function} p_property.setter 셋터
     * @param {string} p_property.alias 별칭
     * @param {function} p_property.onChanged value 변경 후 이벤트
     */
    function MetaColumn(p_name, p_entity, p_property) {
      _super.call(this, p_name, p_entity);
      var $event = new EventEmitter(this);
      var required = false;
      // var optional      = false;
      var constraints = [];
      var getter = null;
      var setter = null;

      /** 
       * 이벤트 객체
       * @private
       * @member {EventEmitter} _L.Meta.Entity.MetaColumn#$event  
       */
      Object.defineProperty(this, '$event', {
        get: function get() {
          return $event;
        },
        configurable: false,
        enumerable: false
      });

      /**
       * 컬럼 value의 필수 여부
       * @member {boolean} _L.Meta.Entity.MetaColumn#required
       */
      Object.defineProperty(this, 'required', {
        get: function get() {
          return required;
        },
        set: function set(nVal) {
          if (typeof nVal !== 'boolean') throw new ExtendError(/EL05131/, null, [this.constructor.name, _typeof(nVal)]);
          required = nVal;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 컬럼 제약 조건 
       * @member {array<object | function>} _L.Meta.Entity.MetaColumn#constraints
       * @example
       * var c = {
       *  regex: /aa/,
       *  msg: '매칭메세지',  // return이 true면 성공시 메세지, false 실패시 메세지
       *  condition: ture     // 매칭시 성공
       * };
       */
      Object.defineProperty(this, 'constraints', {
        get: function get() {
          return constraints;
        },
        set: function set(nVal) {
          var list = [];
          constraints = [];
          if (Array.isArray(nVal)) list = nVal;else list.push(nVal);
          for (var i = 0; list.length > i; i++) {
            if (!(typeof list[i] === 'function' || _typeof(list[i].regex) === 'object' && typeof list[i].msg === 'string')) {
              throw new ExtendError(/EL05133/, null, [this.constructor.name, i, _typeof(nVal.regex), _typeof(nVal.msg)]);
            }
          }
          constraints = list;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 컬럼 value  
       * get 우선순위 : 1. getter 있는 경우, 2. 내부값 $value  
       * set 우선순위 : 1. setter 있는 경우, 2. setter 리턴값이 없는 경우  
       * REVIEW: 정리표 보고 수정 필요!!
       * @member {string | number | boolean} _L.Meta.Entity.MetaColumn#value
       */
      Object.defineProperty(this, 'value', {
        get: function get() {
          var __val;
          // 우선순위 : 1
          if (typeof getter === 'function') {
            __val = getter.call(this);
            if (this.$value !== null && this.$value !== __val) {
              this._onChanged(__val, this.$value); // 검사 및 이벤트 발생
              this.$value = __val; // 내부에 저장
            }
            // 우선순위 : 2
          } else __val = this.$value;
          /**
           * 분기 처리값 '__val' 없는경우 (null, undefined)
           *  - this.$value 초기화 되지 않은 경우
           *  - getter 리턴이 없는 경우
           */
          // if (typeof __val === 'undefined' || __val === null) __val = this.$value || this.default;  REVIEW: 제거 대상
          // if (typeof __val === 'undefined' || __val === null) __val = this.$value;  
          if (typeof __val === 'undefined' || __val === null) __val = this["default"];
          return __val;
        },
        set: function set(val) {
          var __val, _val;
          var _oldVal = this.$value;
          if (typeof setter === 'function') _val = setter.call(this, val);
          // settter 의 리턴이 여부
          __val = typeof _val !== 'undefined' ? _val : val;
          __val = __val === null ? '' : __val; // null 등록 오류 처리
          if (this._valueTypes.length > 0) Type.matchType([this._valueTypes], __val);
          this.$value = __val;
          if (_oldVal !== __val && __val) this._onChanged(__val, _oldVal); // 검사 및 이벤트 발생
        },
        configurable: true,
        // 재정의 허용
        enumerable: true
      });

      /**
       * 컬럼의 value 의 getter
       * @member {Function} _L.Meta.Entity.MetaColumn#getter
       */
      Object.defineProperty(this, 'getter', {
        get: function get() {
          return getter;
        },
        set: function set(val) {
          if (typeof val !== 'function') throw new ExtendError(/EL05134/, null, [this.constructor.name, _typeof(val)]);
          getter = val;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 컬럼의 value 의 setter
       * @member {Function} _L.Meta.Entity.MetaColumn#setter
       */
      Object.defineProperty(this, 'setter', {
        get: function get() {
          return setter;
        },
        set: function set(val) {
          if (typeof val !== 'function') throw new ExtendError(/EL05135/, null, [this.constructor.name, _typeof(val)]);
          setter = val;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 변경 이벤트 
       * @event _L.Meta.Entity.MetaColumn#onChanged 
       * @param {function}    p_callback
       * @param {any}         p_callback.p_nValue 신규 value 값
       * @param {any}         p_callback.p_oValue 기존 value 값
       * @param {MetaColumn}  p_callback.p_this this(컬럼객체)
       */
      Object.defineProperty(this, 'onChanged', {
        set: function set(fun) {
          this.$event.on('onChanged', fun);
        },
        configurable: false,
        enumerable: false
      });
      if (p_property) this._load(p_property);
    }
    Util.inherits(MetaColumn, _super);
    MetaColumn._NS = 'Meta.Entity'; // namespace
    MetaColumn._PARAMS = ['columnName', '_entity']; // creator parameter    // 
    MetaColumn._VALUE_TYPE = [String, Number, Boolean];

    /**
     * onChanged 이벤트를 발생합니다.
     * @param {*} p_nValue 변경 값
     * @param {*} p_oValue 기존 값
     * @listens _L.Meta.Entity.MetaColumn#_onChanged
     */
    MetaColumn.prototype._onChanged = function (p_nValue, p_oValue) {
      p_oValue = p_oValue || this.$value;
      this.$event.emit('onChanged', p_nValue, p_oValue, this);
    };

    /**
     * 프로퍼티 객체로 속성 로드
     * @param {object} p_property 
     */
    MetaColumn.prototype._load = function (p_property) {
      if (_typeof(p_property) === 'object') {
        for (var prop in p_property) {
          // if (p_property.hasOwnProperty(prop) &&
          if (Object.prototype.hasOwnProperty.call(p_property, prop) && ['_valueTypes', 'alias', 'default', 'caption', 'value', 'required', 'constraints', 'getter', 'setter'].indexOf(prop) > -1) {
            this[prop] = p_property[prop];
          }
        }
      }
      if (['number', 'string', 'boolean'].indexOf(_typeof(p_property)) > -1) {
        this['value'] = p_property;
      }
    };

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.
     * @param {number} p_vOpt 가져오기 옵션
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    MetaColumn.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      if (!Type.deepEqual(this.$event.$storage, {})) {
        obj['$storage'] = this.$event.$storage;
      }
      if (this.required !== false) obj['required'] = this.required;
      // if (this.optional !== false) obj['optional'] = this.optional;
      if (this.constraints.length > 0) obj['constraints'] = Util.deepCopy(this.constraints);
      if (this.getter !== null) obj['getter'] = this.getter;
      if (this.setter !== null) obj['setter'] = this.setter;
      // if (this.value !== null) obj['value'] = this.value;    // 오버라이딩
      return obj;
    };

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.   
     * @param {object} p_oGuid guid 타입의 객체
     * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
     * 기본값은 p_oGuid 객체와 동일
     */
    MetaColumn.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      if (p_oGuid['$storage']) {
        this.$event.$storage = p_oGuid['$storage'];
      }
      if (p_oGuid['required']) this.required = p_oGuid['required'];
      // if (p_oGuid['optional']) this.optional = p_oGuid['optional'];
      if (p_oGuid['constraints']) this.constraints = p_oGuid['constraints'];
      if (p_oGuid['getter']) this.getter = p_oGuid['getter'];
      if (p_oGuid['setter']) this.setter = p_oGuid['setter'];
      // if (p_oGuid['value']) this.value = p_oGuid['value'];
    };

    /**
     * 컬럼 복제
     * @param {BaseEntity} [p_entity] 지정한 엔티티로 복제
     * @returns {MetaColumn}
     */
    MetaColumn.prototype.clone = function (p_entity) {
      var clone;
      // var rObj = this.getObject();
      var entity = p_entity ? p_entity : this._entity;
      clone = new MetaColumn(this.columnName, entity);

      // BaseColumn
      if (this['default'] !== '') clone["default"] = this['default'];
      if (this['caption'] !== '') clone.caption = this['caption'];
      if (this['$alias'] !== null) clone.$alias = this['$alias'];
      if (this['$value'] !== null) clone.$value = this['$value'];

      // MetaColumn
      if (this['required']) clone.required = this['required'];
      // REVIEW: 배열 깊은 복제 해야 하는지 확인 필요
      if (this['constraints']) clone.constraints = this['constraints'];
      // REVIEW: 함수 깊은 복사 확인 필요
      if (this['getter']) clone.getter = this['getter'];
      if (this['setter']) clone.setter = this['setter'];
      return clone;
    };

    /**
     * 제약조건을 추가  
     * 
     * REVIEW: 정규식으로 반대 조건을 모두 나열 할수 있으므로, 항상 실패조건을 하는게 맞을지? 검토
     * @param {Regexp} p_regex 정규표현식
     * @param {string} p_msg  regexp 입력시
     * @param {string} [p_code] regexp 입력시
     * @param {boolean} [p_condition] <기본값 false> 성공/실패 조건
     * @param {boolean} p_condition.false 실패조건이며<기본값>, 정규식이 매칭이 안되야 한다.
     * @param {boolean} p_condition.true 성공조건이며 정규식이 매칭이되어야 성공(통화)  
     */
    MetaColumn.prototype.addConstraint = function (p_regex, p_msg, p_code, p_condition) {
      p_condition = typeof p_condition === 'boolean' ? p_condition : true;
      var constraint = {};
      if (typeof p_regex === 'function') {
        this.constraints.push(p_regex);
        return;
      }
      if (!(p_regex instanceof RegExp)) throw new ExtendError(/EL05136/, null, []);
      if (!(typeof p_msg === 'string')) throw new ExtendError(/EL05137/, null, [_typeof(p_msg)]);
      constraint.regex = p_regex;
      constraint.msg = p_msg;
      constraint.code = p_code;
      constraint.condition = p_condition;
      this.constraints.push(constraint);
    };

    /**
     * 속성의 value에 유효성을 검사한다. (isNotnull, optional, constraints 기준)
     * TODO: number, boolean 형이 입력될경우, 기본 제약 조건 valueTypes 검사여부 검토?, 예외가 아니고 메세지로 표현?
     * @param {string | number | boolean} p_value 검사할 값
     * @param {object} result 메세지는 참조(객체)형 으로 전달
     * @param {number} p_option 1. required 참조 | 2: null검사 진행   |  3: null검사 무시
     * @returns {object | undefined} 리턴값이 없으면 검사 성공
     */
    MetaColumn.prototype.valid = function (p_value) {
      var result = {};
      var match;
      var value = null;
      result.value = p_value;
      result.msg = '';
      result.code = '';
      p_value = p_value || '';
      value = typeof p_value === 'number' ? String(p_value) : p_value; // number 형 변환

      // 1. 기본값 얻기 문자열로 변경
      value = value.trim();

      // 2. 통과조건 검사
      if (this.required === false /* && this.optional === true */ && value.length === 0) return;
      if (this.required === false && this.constraints.length === 0) return;
      if (this.required === true && this.constraints.length === 0 && value.length > 0) return;

      // 3. 실패조건 검사
      if (this.required === true && this.constraints.length === 0 && value.length === 0) {
        result.msg = Message.get('EL05138', [this.name]);
        result.code = 0;
        return result;
      }

      // 4. 제약조건 검사
      for (var i = 0; this.constraints.length > i; i++) {
        if (typeof this.constraints[i] === 'function') {
          // return this.constraints[i].call(this, this, value);     // 함수형 제약조건 REVIEW: 제거대상 

          // 함수는 false 또는 object 타입의 경우 실패로 처리
          var funReturn = this.constraints[i].call(this, value, this); // 함수형 제약조건
          if (funReturn === true || typeof funReturn === 'undefined') continue;
          if (_typeof(funReturn) === 'object' && typeof funReturn.msg === 'string') {
            result.msg = funReturn.msg;
            result.code = funReturn.code;
          } else {
            result.msg = Message.get('EL05139', [this.name]);
          }
          return result;
        } else {
          match = value.match(this.constraints[i].regex);
          if (this.constraints[i].condition === false && match !== null ||
          // 실패 조건
          this.constraints[i].condition === true && match === null) {
            // 성공 조건
            result.msg = Message.get('EL0513A', [this.name, this.constraints[i].msg]);
            result.code = this.constraints[i].code;
            return result;
          }
        }
      }
      return;
    };
    return MetaColumn;
  }(BaseColumn);

  var ObjectColumn = function (_super) {
    /**
     * 객체 컬럼
     * @constructs _L.Meta.Entity.ObjectColumn
     * @extends _L.Meta.Entity.BaseColumn
     * @param {string} p_name 객체컬럼명
     * @param {BaseEntity} [p_entity] 소유 BaseEntity
     * @param {object} [p_property] 
     * @param {object} p_property.default 기본값
     * @param {string} p_property.caption 설명
     * @param {object} p_property.value value 값
     * @param {string} p_property.alias 별칭
     */
    function ObjectColumn(p_name, p_entity, p_property) {
      _super.call(this, p_name, p_entity);
      if (p_property) this._load(p_property);
    }
    Util.inherits(ObjectColumn, _super);
    ObjectColumn._NS = 'Meta.Entity'; // namespace
    ObjectColumn._PARAMS = ['columnName', '_entity', '_property']; // creator parameter
    ObjectColumn._VALUE_TYPE = [{}]; // union type

    /**
     *  프로퍼티 객체로 속성 로드
     * @param {object} p_prop 속성
     */
    ObjectColumn.prototype._load = function (p_prop) {
      if (_typeof(p_prop) === 'object') {
        for (var prop in p_prop) {
          // if (p_property.hasOwnProperty(prop) &&
          if (Object.prototype.hasOwnProperty.call(p_prop, prop) && ['default', 'caption', 'value', 'alias'].indexOf(prop) > -1) {
            this[prop] = p_prop[prop];
          }
        }
      } else throw new ExtendError(/EL05121/, null, ['p_prop', 'object']);
    };

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.
     * @param {number} p_vOpt 가져오기 옵션
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    ObjectColumn.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      var vOpt = p_vOpt || 0;
      var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);
      var defValue = this["default"];
      var $value = this.$value;
      if (defValue instanceof MetaObject) {
        if (MetaRegistry.hasGuidObject(defValue, owned)) {
          obj['default'] = MetaRegistry.createReferObject(defValue);
        } else obj['default'] = defValue.getObject(vOpt, owned);
      }

      // $value 재정의
      if ($value instanceof MetaObject) {
        if (MetaRegistry.hasGuidObject($value, owned)) {
          obj['$value'] = MetaRegistry.createReferObject($value);
        } else obj['$value'] = $value.getObject(vOpt, owned);
      }
      return obj;
    };

    /**
     * 현재 객체를 guid 객체로 설정한다.
     * override
     * @param {object} p_oGuid 레벨 옵션
     * @param {object} p_origin 설정 원본 객체
     */
    ObjectColumn.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      var origin = p_origin ? p_origin : p_oGuid;
      var elem;

      // 주의! defuault 설정후 value 설정 :getObject() 와 동일
      elem = p_oGuid['default'];
      if (_typeof(elem) === 'object' && elem !== null) {
        if (MetaRegistry.isGuidObject(elem)) {
          var obj = MetaRegistry.createMetaObject(elem, origin);
          obj.setObject(elem, origin);
          this['default'] = obj;
        } else if (elem['$ref']) {
          var meta = MetaRegistry.findSetObject(elem['$ref'], origin);
          if (!meta) throw new ExtendError(/EL05122/, null, [elem['$ref']]);
          this['default'] = meta;
        }
      }
      elem = p_oGuid['$value'];
      if (_typeof(elem) === 'object' && elem !== null) {
        if (MetaRegistry.isGuidObject(elem)) {
          var obj = MetaRegistry.createMetaObject(elem, origin);
          obj.setObject(elem, origin);
          this.$value = obj;
        } else if (elem['$ref']) {
          var meta = MetaRegistry.findSetObject(elem['$ref'], origin);
          if (!meta) throw new ExtendError(/EL05123/, null, [elem['$ref']]);
          this.$value = meta;
        }
      }
    };

    /**
     * 객체 복제
     * override
     * @param {BaseEntity} [p_entity] 지정한 엔티티로 복제
     * @returns {ObjectColumn}
     */
    ObjectColumn.prototype.clone = function (p_entity) {
      var clone;
      var entity = p_entity ? p_entity : this._entity;
      clone = new ObjectColumn(this.columnName, entity);
      if (this['$value']) clone.$value = this.$value;
      if (this['$alias']) clone.$alias = this['$alias'];
      if (this['default']) clone["default"] = this['default'];
      if (this['caption']) clone.caption = this['caption'];
      return clone;
    };
    return ObjectColumn;
  }(BaseColumn);

  var BaseColumnCollection = function (_super) {
    /**
     * 컬럼 컬렉션 (최상위)
     * @abstract
     * @constructs _L.Meta.Entity.BaseColumnCollection
     * @extends _L.Collection.PropertyCollection
     * @param {object} p_owner 소유자 
     * @param {BaseColumn} [p_baseType] 기본 컬럼 타입
     */
    function BaseColumnCollection(p_owner, p_baseType) {
      _super.call(this, p_owner);
      var _baseType;

      /**
       * 기본 컬럼 타입
       * @member {BaseColumn} _L.Meta.Entity.BaseColumnCollection#_baseType
       */
      Object.defineProperty(this, '_baseType', {
        get: function get() {
          return _baseType;
        },
        set: function set(nVal) {
          if (!(typeof nVal === 'function')) throw new ExtendError(/EL05141/, null, [this.constructor.name, _typeof(nVal)]);
          // if (!(new nVal('temp') instanceof BaseColumn)) throw new ExtendError('ES032', ['_baseType', 'BaseColumn']);
          if (!Type.isProtoChain(nVal, BaseColumn)) throw new ExtendError(/EL05142/, null, [this.constructor.name]);
          _baseType = nVal;
        },
        enumerable: false,
        configurable: false
      });

      // this._baseType = p_baseType || MetaColumn;
      this._baseType = p_baseType;

      // 예약어 등록 
      this.$KEYWORD = ['_baseType', '_ownerIsEntity', 'initValue', 'existAlias'];
      this.$KEYWORD = ['existColumnName', 'alias', 'addValue'];
    }
    Util.inherits(BaseColumnCollection, _super);
    BaseColumnCollection._NS = 'Meta.Entity'; // namespace
    BaseColumnCollection._PARAMS = ['_owner', '_baseType']; // creator parameter
    BaseColumnCollection._KIND = 'abstract';

    /**
     * this._onwer 이 엔티티 여부를 확인합니다.
     * @returns {boolean}
     */
    BaseColumnCollection.prototype._ownerIsEntity = function () {
      return this._owner instanceof MetaElement && this._owner.instanceOf('BaseEntity');
    };
    Object.defineProperty(BaseColumnCollection.prototype, '_ownerIsEntity', {
      enumerable: false
    });

    /**
     * 컬렉션에 요소를 추가할 때 설정되는 기본 기술자입니다.
     * @protected
     * @param {number} p_idx 인덱스 번호
     */
    BaseColumnCollection.prototype._getPropDescriptor = function (p_idx, p_enum) {
      if (typeof p_enum !== 'boolean') p_enum = true;
      return {
        get: function get() {
          return this.$elements[p_idx];
        },
        set: function set(nVal) {
          throw new ExtendError(/EL05148/, null, []);
          // var oVal = this.$elements[p_idx];
          // if (this._elemTypes.length > 0) Type.matchType([this._elemTypes], nVal);
          // this._onChanging(p_idx, nVal, oVal);  // before event
          // this.$elements[p_idx] = nVal;
          // this._onChanged(p_idx, nVal, oVal);   // after event
        },
        configurable: true,
        enumerable: p_enum
      };
    };
    Object.defineProperty(BaseColumnCollection.prototype, '_getPropDescriptor', {
      enumerable: false
    });

    /**
     * 컬럼을 컬렉션에 추가
     * @param {string} p_name 컬럼명
     * @param {any} p_value 컬럼객체
     * @returns {number} 추가한 index 
     */
    BaseColumnCollection.prototype.add = function (p_name, p_value) {
      if (this._ownerIsEntity() && this._owner.rows.count > 0) throw new ExtendError(/EL05143/, null, [this._owner.rows.count]);
      if (this.existColumnName(p_name)) throw new ExtendError(/EL05144/, null, [this.constructor.name, p_name]);
      if (this.existAlias(p_name)) throw new ExtendError(/EL05145/, null, [this.constructor.name, p_name]);
      return _super.prototype.add.call(this, p_name, p_value);
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'add', {
      enumerable: false
    });

    /**
     * 컬럼을 컬렉션에서 삭제
     * @param {number} p_idx 
     * @returns {boolean}
     */
    BaseColumnCollection.prototype.removeAt = function (p_idx) {
      if (this._owner.rows.count > 0) throw new ExtendError(/EL05146/, null, [this._owner.rows.count]);
      return _super.prototype.removeAt.call(this, p_idx);
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'removeAt', {
      enumerable: false
    });

    /**
     * 컬렉에 모든 value 값을 default 값으로 초기화
     */
    BaseColumnCollection.prototype.initValue = function () {
      for (var i = 0; this.count > i; i++) {
        this[i].value = this[i]["default"];
      }
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'initValue', {
      enumerable: false
    });

    /**
     * 컬렉션에 별칭 이름(키)가 존재하는지 검사
     * @param {string} p_key 이름
     * @returns {boolean}
     */
    BaseColumnCollection.prototype.existAlias = function (p_key) {
      for (var i = 0; this.count > i; i++) {
        if (this[i].alias === p_key) return true;
      }
      return false;
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'existAlias', {
      enumerable: false
    });

    /**
     * 컬렉션에 컬럼 이름(키)이 존재하는지 검사
     * @param {string} p_key 이름
     * @returns {boolean}
     */
    BaseColumnCollection.prototype.existColumnName = function (p_key) {
      for (var i = 0; this.count > i; i++) {
        if (this[i].columnName === p_key) return true;
      }
      return false;
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'existColumnName', {
      enumerable: false
    });

    /**
     * 별칭에 대한 컬럼 객체 얻기
     * @param {string} p_key 키
     * @returns {BaseColumn | undefined}
     */
    BaseColumnCollection.prototype.alias = function (p_key) {
      for (var i = 0; this.count > i; i++) {
        if (this[i].alias === p_key) return this[i];
      }
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'alias', {
      enumerable: false
    });

    /** @abstract */
    BaseColumnCollection.prototype.addValue = function () {
      throw new ExtendError(/EL05147/, null, []);
    };
    Object.defineProperty(BaseColumnCollection.prototype, 'addValue', {
      enumerable: false
    });
    return BaseColumnCollection;
  }(PropertyCollection);

  var MetaViewColumnCollection = function (_super) {
    /**
     * 메타 뷰 컬럼 컬렉션
     * @constructs _L.Meta.Entity.MetaViewColumnCollection
     * @extends _L.Meta.Entity.BaseColumnCollection
     * @param {object} p_owner 소유자
     */
    function MetaViewColumnCollection(p_owner) {
      _super.call(this, p_owner, MetaColumn);

      /** 
       * 참조하는 엔티티 목록
       * @readonly
       * @member {array<BaseEntity>} _L.Meta.Entity.MetaViewColumnCollection#_refEntities
       */
      Object.defineProperty(this, '_refEntities', {
        get: function get() {
          var arr = [];
          for (var i = 0; i < this.count; i++) {
            var column = this[i];
            if (this._owner !== column._entity && arr.indexOf(column._entity) < 0) {
              arr.push(column._entity);
            }
          }
          return arr;
        },
        configurable: false,
        enumerable: false
      });

      // 예약어 등록 
      this.$KEYWORD = ['_refEntities', 'addValue', 'addEntity'];
    }
    Util.inherits(MetaViewColumnCollection, _super);
    MetaViewColumnCollection._NS = 'Meta.Entity'; // namespace
    MetaViewColumnCollection._PARAMS = ['_owner', '_baseCollection']; // creator parameter

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.
     * @param {number} p_vOpt 가져오기 옵션
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    MetaViewColumnCollection.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      var vOpt = p_vOpt || 0;
      if (vOpt === 0) {
        // 참조로 바꿈
        for (var i = 0; i < obj['_elem'].length; i++) {
          var elem = obj['_elem'][i];
          if (vOpt < 2 && vOpt > -1 && elem['_entity'] && elem['_entity']['$ref'] !== this._owner._guid) {
            var rObj = MetaRegistry.createReferObject(elem); // 소유자가 아니면 참조 리턴
            obj['_elem'][i] = rObj;
          }
        }
      }
      return obj;
    };
    Object.defineProperty(MetaViewColumnCollection.prototype, 'getObject', {
      enumerable: false
    });

    /**
     * 뷰컬렉션에 컬럼을 추가(등록/설정)한다.  
     * - entity가 있는 컬럼을 추가할 경우 : 참조가 추가되는 것이다.  
     *      + collection 존재할 경우 최상위 컬렉션에도 참조가 등록된다.  
     * - entity가 없는 컬럼을 추가할 경우 : 자신을 소유자로 등록한다.  
     * - collection에 컬럼이 존재할 경우 : columns 객체는 무시되고, 리턴한 객체의 참조를 등록한다.  
     * - collection에 컬럼이 없을 경우 : 컬렉션에 entity를 설정한다.(참조 재귀호출시 최상위만 등록됨)  
     *      + collection 존재할 경우 entity 항상 존재한다.  
     * - entity가 있는 컬럼을 추가할 경우 : 참조가 추가되는 것이다.
     * - entity가 없는 컬럼을 추가할 경우 : 자신을 소유자로 등록한다.
     * - collection에 컬럼이 존재할 경우 : columns 객체는 무시되고, 리턴한 객체의 참조를 등록한다.
     * - collection에 컬럼이 없을 경우 : 컬렉션에 entity를 설정한다.(참조 재귀호출시 최상위만 등록됨)
     * @param {string | MetaColumn} p_column 컬럼
     * @param {BaseColumnCollection} [p_refCollection] 참조컬렉션
     */
    MetaViewColumnCollection.prototype.add = function (p_column, p_refCollection) {
      var collection;
      var key;
      var column;
      if (p_refCollection && !(p_refCollection instanceof BaseColumnCollection)) {
        throw new ExtendError(/EL05161/, null, []);
      }
      if (p_column instanceof BaseColumn) {
        key = p_column.columnName;
        column = p_column;
      } else if (typeof p_column === 'string') {
        key = p_column;
        column = new this._baseType(key, this._owner);
      } else throw new ExtendError(/EL05162/, null, [_typeof(p_column)]);

      // baseCollection & refCollection 존재하는 경우
      if (p_refCollection instanceof BaseColumnCollection) {
        collection = p_refCollection;
      } else if (this._owner && this._owner._baseEntity && this._owner._baseEntity.columns) {
        collection = this._owner._baseEntity.columns;
      }

      // 컬렉션이 있는 경우 : _entity 항상 존재
      if (collection) {
        if (collection.contains(collection[key])) {
          column = collection[key]; // 기존에 존재하면 참조 가져옴
        } else {
          collection.add(p_column); // 없으면 컬렉션에 추가(owner 설정됨)
          column = collection[key];
        }
      }
      if (!column._entity && this._ownerIsEntity()) column._entity = this._owner;
      // if (!column._entity) column._entity = this._owner;

      return _super.prototype.add.call(this, key, column);
    };
    Object.defineProperty(MetaViewColumnCollection.prototype, 'add', {
      enumerable: false
    });

    /**
     *  이름과 값으로 컬럼 생성하여 컬렉션에 추가
     * @param {string} p_name 컬럼명
     * @param {string | number | boolean} p_value 값
     * @param {BaseColumnCollection} [p_refCollection]
     * @returns {MetaColumn}
     */
    MetaViewColumnCollection.prototype.addValue = function (p_name, p_value, p_refCollection) {
      var item;
      var property = {};
      var _valueTypes = this._baseType._VALUE_TYPE;
      if (typeof p_name !== 'string') throw new ExtendError(/EL05163/, null, [_typeof(p_name)]);
      if (_valueTypes.length > 0) Type.matchType([_valueTypes], p_value);
      property = {
        value: p_value
      };
      item = new this._baseType(p_name, null, property);
      return this[this.add(item, p_refCollection)];
    };
    Object.defineProperty(MetaViewColumnCollection.prototype, 'addValue', {
      enumerable: false
    });

    /**
     * 엔티티의 모든 컬럼을 추가
     * @param {BaseEntity} p_entity 
     */
    MetaViewColumnCollection.prototype.addEntity = function (p_entity) {
      if (typeof p_entity !== 'undefined' && !(p_entity instanceof MetaElement && p_entity.instanceOf('BaseEntity'))) {
        throw new ExtendError(/EL05164/, null, []);
      }
      for (var i = 0; p_entity.columns.count > i; i++) {
        this.add(p_entity.columns[i]);
      }
    };
    Object.defineProperty(MetaViewColumnCollection.prototype, 'addEntity', {
      enumerable: false
    });
    return MetaViewColumnCollection;
  }(BaseColumnCollection);

  var MetaTableColumnCollection = function (_super) {
    /**
     * 테이블 컬럼 컬렉션  
     * 참조 컬럼은 독립적으로 가진다 (참조 금지)
     * @constructs _L.Meta.Entity.MetaTableColumnCollection
     * @extends _L.Meta.Entity.BaseColumnCollection
     * @param {object} p_owner 소유자
     */
    function MetaTableColumnCollection(p_owner) {
      _super.call(this, p_owner, MetaColumn);

      // 예약어 등록 
      this.$KEYWORD = ['addValue'];
    }
    Util.inherits(MetaTableColumnCollection, _super);
    MetaTableColumnCollection._NS = 'Meta.Entity'; // namespace
    MetaTableColumnCollection._PARAMS = ['_owner']; // creator parameter

    /**
     * 테이블 컬렉션에 컬럼 추가
     * @param {string | BaseColumn} p_column 컬럼명, 매타컬럼
     * @returns {number} 등록한 index
     */
    MetaTableColumnCollection.prototype.add = function (p_column) {
      var column;
      var key;
      if (typeof p_column === 'string') {
        key = p_column;
        if (this._ownerIsEntity()) column = new this._baseType(key, this._owner);else column = new this._baseType(key);
      } else if (p_column instanceof BaseColumn) {
        key = p_column.columnName;
        if (this._ownerIsEntity() && p_column._owner !== this._owner) {
          column = p_column.clone(this._owner);
        } else column = p_column;
        // if (this._ownerIsEntity()) column = p_column.clone(this._owner);
        // else column = p_column.clone();
      } else {
        throw new ExtendError(/EL05151/, null, [_typeof(p_column)]);
      }
      return _super.prototype.add.call(this, key, column);
    };
    Object.defineProperty(MetaTableColumnCollection.prototype, 'add', {
      enumerable: false
    });

    /**
     * 이름과 값으로 컬렉션에 추가 (내부에서 생성)
     * @param {string} p_name 컬럼명
     * @param {string | number | boolean} p_value 값
     * @returns {BaseColumn} 추가한 컬럼 객체
     */
    MetaTableColumnCollection.prototype.addValue = function (p_name, p_value) {
      var item;
      var property = {};
      var _valueTypes = this._baseType._VALUE_TYPE;
      if (typeof p_name !== 'string') throw new ExtendError(/EL05152/, null, [_typeof(p_name)]);
      if (_valueTypes.length > 0) Type.matchType([_valueTypes], p_value);
      property = {
        value: p_value
      };
      item = new this._baseType(p_name, this._owner, property);
      return this[this.add(item)];
    };
    Object.defineProperty(MetaTableColumnCollection.prototype, 'addValue', {
      enumerable: false
    });
    return MetaTableColumnCollection;
  }(BaseColumnCollection);

  var BaseEntity = function (_super) {
    /**
     * 기본 엔티티 (최상위)
     * @abstract
     * @constructs _L.Meta.Entity.BaseEntity
     * @extends _L.Meta.MetaElement
     * @implements {_L.Interface.IGroupControl}
     * @implements {_L.Interface.ISchemaControl}
     * @implements {_L.Interface.IImportControl}
     * @implements {_L.Interface.IExportControl}
     * @implements {_L.Interface.ISerialize}
     * @param {string} p_name 
     */
    function BaseEntity(p_name) {
      _super.call(this, p_name);
      var _metaSet = null;
      var rows = new MetaRowCollection(this);

      /**
       * 엔티티의 아이템(속성) 컬렉션
       * @member {MetaSet} _L.Meta.Entity.BaseEntity#_metaSet
       */
      Object.defineProperty(this, '_metaSet', {
        get: function get() {
          return _metaSet;
        },
        set: function set(nVal) {
          if (!(nVal instanceof MetaElement && nVal.instanceOf('MetaSet'))) {
            throw new ExtendError(/EL05311/, null, [this.constructor.name]);
          }
          _metaSet = nVal;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 엔티티의 아이템(속성) 컬렉션
       * @readonly
       * @member {BaseColumnCollection} _L.Meta.Entity.BaseEntity#columns
       */
      Object.defineProperty(this, 'columns', {
        get: function get() {
          throw new ExtendError(/EL05312/, null, [this.constructor.name]);
        },
        configurable: true,
        // 하위에서 재정의 해야함
        enumerable: true
      });

      /**
       * columns 별칭
       * @member {object} _L.Meta.Entity.BaseEntity#cols 
       */
      Object.defineProperty(this, 'cols', {
        get: function get() {
          return this.columns;
        },
        set: function set(nVal) {
          this.columns = nVal;
        },
        configurable: true,
        enumerable: false
      });

      /**
       * 엔티티의 데이터(로우) 컬렉션
       * @readonly
       * @member {MetaRowCollection} _L.Meta.Entity.BaseEntity#rows
       */
      Object.defineProperty(this, 'rows', {
        get: function get() {
          return rows;
        },
        configurable: false,
        enumerable: true
      });
      Util["implements"](BaseEntity, this); // strip:
    }
    Util.inherits(BaseEntity, _super);
    BaseEntity._UNION = [IGroupControl, ISchemaControl, IImportControl, IExportControl, ISerialize];
    BaseEntity._NS = 'Meta.Entity'; // namespace
    BaseEntity._PARAMS = ['name']; // creator parameter
    BaseEntity._KIND = 'abstract';

    // local funciton
    function _isObject(obj) {
      // 객체 여부
      if (_typeof(obj) === 'object' && obj !== null) return true;
      return false;
    }
    function _isString(obj) {
      // 공백아닌 문자 여부
      if (typeof obj === 'string' && obj.length > 0) return true;
      return false;
    }
    function _isSchema(obj) {
      // 객체 여부
      if (!_isObject(obj)) return false;
      if (_isObject(obj['columns']) || _isObject(obj['rows'])) return true;
      return false;
    }

    /**
     * 엔티티 스카마 객체로 변환
     * @param {object} p_oGuid getObject()로 얻은 객체
     * @static
     * @returns {object}
     */
    BaseEntity.transformSchema = function (p_oGuid) {
      var obj = {};
      var oGuid = p_oGuid;
      try {
        if (!_isSchema(p_oGuid)) {
          throw new ExtendError(/EL05331/, null, [p_oGuid.columns, p_oGuid.rows]);
        }
        if (oGuid['_guid']) obj['_guid'] = oGuid['_guid'];
        if (oGuid['_baseEntity']) obj['_baseEntity'] = oGuid['_baseEntity'];
        obj['columns'] = $transformColumn(oGuid['columns'], oGuid);
        obj['rows'] = $transformRow(oGuid['rows'], oGuid);
      } catch (error) {
        throw new ExtendError(/EL05332/, error, []);
      }
      return obj;

      // inner funciton
      function $transformColumn(oGuid, origin) {
        var obj = {};
        for (var i = 0; i < oGuid['_elem'].length; i++) {
          var column = oGuid['_elem'][i];
          var key = oGuid['_key'][i];
          obj[key] = {};
          if (column['$ref']) obj[key] = column;else {
            if (column['_entity'] && column['_entity']['$ref'] !== origin['_guid']) {
              obj[key]._entity = {};
              obj[key]._entity['$ref'] = column['_entity']['$ref'];
            }
            if (typeof column._guid !== 'undefined') obj[key]._guid = column['_guid'];
            if (typeof column["default"] !== 'undefined') obj[key]["default"] = column['default'];
            if (typeof column.caption !== 'undefined') obj[key].caption = column['caption'];
            if (typeof column.required !== 'undefined') obj[key].required = column['required'];
            // if (column.optional) obj[key].optional = column['optional'];
            if (Array.isArray(column.constraints)) {
              obj[key]['constraints'] = Util.deepCopy(column['constraints']);
            }
            if (typeof column.getter !== 'undefined') obj[key].getter = column['getter'];
            if (typeof column.setter !== 'undefined') obj[key].setter = column['setter'];
            if (typeof column.$alias !== 'undefined') obj[key].alias = column['$alias'];
            if (typeof column.$value !== 'undefined') obj[key].value = column['$value'];
          }
        }
        obj['$key'] = oGuid['_key'];
        return obj;
      }
      function $transformRow(oGuid) {
        var arr = [];
        for (var i = 0; i < oGuid['_elem'].length; i++) {
          var rows = oGuid['_elem'][i];
          var obj = {};
          for (var ii = 0; ii < rows['_elem'].length; ii++) {
            var row = rows['_elem'][ii];
            var key = rows['_key'][ii];
            obj[key] = row;
          }
          arr.push(obj);
        }
        return arr;
      }
    };

    /**
     * 엔티티 대상에 로우 만들기
     * @protected
     * @param {BaseEntity} p_entity 빌드 대상 엔티티
     * @param {function} p_callback 로우 대상 조회 콜백
     * @param {array<string>} p_items 선택할 로우명 , [] 또는 undefined 시 전체 선택    TODO: 필수 선택 여부 확인 필요
     * @returns {BaseEntity}
     */
    BaseEntity.prototype._buildEntity = function (p_entity, p_callback, p_items) {
      var orignal = this.clone();
      var columnName;
      var column;
      try {
        // columns 구성
        if (p_items.length === 0) {
          for (var i = 0; i < this.columns.count; i++) {
            p_entity.columns.add(this.columns[i]); // 참조로 등록
          }
        } else {
          for (var i = 0; i < p_items.length; i++) {
            columnName = p_items[i];
            if (!_isString(columnName)) throw new ExtendError(/EL05321/, null, [i, _typeof(columnName)]);
            if (!this.columns.exists(columnName)) throw new ExtendError(/EL05322/, null, [columnName]);
            column = this.columns.alias(columnName);
            p_entity.columns.add(column);
          }
        }

        // rows 등록
        for (var i = 0; i < orignal.rows.count; i++) {
          if (!p_callback || typeof p_callback === 'function' && p_callback.call(this, orignal.rows[i], i, p_entity)) {
            p_entity.rows.add($createRow(orignal.rows[i]));
          }
        }
        return p_entity;
      } catch (error) {
        throw new ExtendError(/EL05323/, error, []);
      }

      // inner function
      function $createRow(row) {
        var alias, newRow;
        newRow = p_entity.newRow();
        for (var ii = 0; ii < p_entity.columns.count; ii++) {
          alias = p_entity.columns[ii].alias;
          newRow[alias] = row[alias];
        }
        return newRow;
      }
    };

    /**
     * BaseEntity 읽기(로드)
     * @protected
     * @param {BaseEntity} p_object 대상 엔티티
     * @param {number} p_option 옵션
     */
    BaseEntity.prototype._readEntity = function (p_entity, p_option) {
      var opt = p_option || 3;
      var _this = this;
      try {
        if (!(p_entity instanceof BaseEntity)) throw new ExtendError(/EL05324/, null, []);
        if (typeof opt !== 'number') throw new ExtendError(/EL05325/, null, [_typeof(opt)]);
        if (opt % 2 === 1) $loadColumn(); // opt: 1, 3
        if (Math.floor(opt / 2) >= 1) $loadRow(); // opt: 2, 3
        return;
      } catch (error) {
        throw new ExtendError(/EL05326/, error, [opt]);
      }

      // inner function
      function $loadColumn() {
        if (_this.rows.count > 0) throw new ExtendError(/EL05327/, null, [opt]);
        for (var i = 0; i < p_entity.columns.count; i++) {
          var column = p_entity.columns[i].clone();
          var key = p_entity.columns.indexToKey(i);
          if (_this.columns.exists(key)) throw new ExtendError(/EL05328/, null, [key]);
          _this.columns.add(column);
        }
      }
      function $loadRow() {
        // 컬럼 기준으로 로우를 가져온다.
        for (var i = 0; i < p_entity.rows.count; i++) {
          var row = _this.newRow(this);
          for (var ii = 0; ii < _this.columns.count; ii++) {
            var key = _this.columns.indexToKey(ii);
            row[key] = p_entity.rows[i][key];
          }
          _this.rows.add(row);
        }
      }
    };

    /**
     * 스키마 읽기
     * @param {object} p_obj 대상 객체
     * @param {boolean} [p_createRow=false] 기본값 = false, 컬럼이 없을경우 로우이름의 컬럼 생성 여부
     * @param {object} [p_origin] 원본 객체
     */
    BaseEntity.prototype._readSchema = function (p_obj, p_isCreateRow, p_origin) {
      var _this = this;
      var obj = p_obj;
      var columns;
      var rows = [];
      var Column = this.columns._baseType;
      var origin = p_origin ? p_origin : p_obj;
      try {
        if (obj['_guid']) MetaRegistry.setMetaObject(obj, this);
        if (obj._baseEntity && obj._baseEntity['$ref']) {
          obj['_baseEntity'] = MetaRegistry.findSetObject(obj._baseEntity['$ref'], origin);
          if (!obj['_baseEntity']) throw new ExtendError(/EL05329/, null, [obj._baseEntity['$ref']]);
        }
        columns = obj['columns'];
        if (columns) {
          // 1. $key 인덱스 기준으로 컬럼명 추출
          if (columns['$key'] && Array.isArray(columns['$key'])) {
            for (var i = 0; i < columns['$key'].length; i++) {
              $addColumn(columns['$key'][i], columns);
            }
            // 2. 무작위로 컬럼명 추출
          } else for (var key in columns) $addColumn(key, columns);
        }
        // opt
        if (p_isCreateRow === true && obj['rows']) {
          // rows = obj['rows'];
          if (Array.isArray(obj['rows'])) rows = obj['rows'];else rows.push(obj['rows']);
          if (Array.isArray(rows) && rows.length > 0 && _typeof(rows[0]) === 'object') {
            for (var key in rows[0]) {
              // rows[0] 기준
              if (Object.prototype.hasOwnProperty.call(rows[0], key) && !this.columns.existAlias(key)) {
                var prop = rows[0][key];
                if (!this.columns.exists(key)) {
                  var column = new Column(key, this);
                  this.columns.add(column);
                }
              }
            }
          }
        }
      } catch (error) {
        throw new ExtendError(/EL0532A/, error, []);
      }

      // innner function
      function $addColumn(key, columns) {
        var column;
        if (!_isObject(columns[key])) columns[key] = {
          value: columns[key]
        };
        // REVIEW: 조건문 필요성 검토
        if (_isObject(columns[key])) {
          if (_this.rows.count > 0) throw new ExtendError(/EL0532B/, null, []);
          var prop = columns[key];
          var obj = {};
          if (_isObject(prop) && prop['$ref']) {
            column = MetaRegistry.findSetObject(prop['$ref'], origin);
            if (!column) throw new ExtendError(/EL0532C/, null, [key, prop['$ref']]);
          } else {
            if (_isObject(prop['_entity']) && prop['_entity']['$ref']) {
              prop['_entity'] = MetaRegistry.findSetObject(prop['_entity']['$ref'], origin);
              if (!prop['_entity']) throw new ExtendError(/EL0532D/, null, [key, '_entity']);
            }
            for (var p in prop) obj[p] = prop[p];
            column = new Column(key, null, obj);
          }
          if (prop['_guid']) MetaRegistry.setMetaObject(prop, column);
          if (_this.columns.exists(key)) throw new ExtendError(/EL0532E/, null, [key]);
          _this.columns.add(column);
        }
      }
    };

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.
     * @param {number} p_vOpt 가져오기 옵션
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    BaseEntity.prototype.getObject = function (p_vOpt, p_owned) {
      var obj;
      var vOpt = p_vOpt || 0;
      var owned;
      obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);
      if (vOpt < 2 && vOpt > -1 && this._metaSet) {
        obj['_metaSet'] = MetaRegistry.createReferObject(this._metaSet);
      }
      obj['columns'] = this.columns.getObject(vOpt, owned);
      obj['rows'] = this.rows.getObject(vOpt, owned);
      return obj;
    };

    /** 
     * rows(데이터) 초기화 한다
     */
    BaseEntity.prototype.clear = function () {
      this.rows.clear();
    };

    /** 
     * columns, rows(데이터)를 초기화 한다
     */
    BaseEntity.prototype.reset = function () {
      this.rows.clear();
      this.columns.clear();
    };

    /**
     * 새로운 MetaRow 를 추가한다.
     * @returns {MetaRow} columns 구조의 row를 생성
     */
    BaseEntity.prototype.newRow = function () {
      return new MetaRow(this);
    };

    /**
     * 컬럼의 value 값을 MetaRow 타입 객체로 얻기
     * @returns {MetaRow}
     */
    BaseEntity.prototype.getValue = function () {
      var row = this.newRow();
      for (var i = 0; this.columns.count > i; i++) {
        var value = this.columns[i].value;
        row[i] = value === null ? this.columns[i]["default"] : value;
      }
      return row;
    };

    /**
     * MetaRow 의 값을 컬럼의 value에 설정한다.
     * @param {MetaRow} p_row 로우
     */
    BaseEntity.prototype.setValue = function (p_row) {
      var alias = '';
      try {
        if (!(p_row instanceof MetaRow)) throw new ExtendError(/EL05333/, null, []);
        for (var i = 0; this.columns.count > i; i++) {
          alias = this.columns[i].alias; // 별칭이 없을시 name 설정됨
          this.columns[i].value = p_row[alias];
        }
      } catch (error) {
        throw new ExtendError(/EL05334/, error, []);
      }
    };

    /**
     * 엔티티(테이블/뷰)와 병합
     * @param {BaseEntity} p_target 병할할 대상
     * @param {object} p_option 옵션
     * @param {object} p_option.0 로우(idx) 기준 병합, 초과 컬럼은 무시됨 <**>   
     * @param {object} p_option.1 컬럼(key) 기준 병합, 초과 로우는 무시됨
     * @param {object} p_option.2 로우(idx) 기준 병합, 초과 컬럼은 채워짐
     * @param {object} p_option.3 컬럼(key) 기준 병합, 초과 로우는 채워짐 
     * @param {boolean} [p_matchType] 로우 유효성 검사 유무 (기본:false)
     */
    BaseEntity.prototype.merge = function (p_target, p_option, p_matchType) {
      var _this = this;
      var opt = p_option || 0;
      var alias, newRow, tarRow, tarRows, tarColumns;
      var tempRows = [],
        clone;
      var target;
      try {
        // 1. 유효성 검사
        if (!(p_target instanceof BaseEntity)) throw new ExtendError(/EL05341/, null, []);
        if (typeof p_option !== 'number') throw new ExtendError(/EL05342/, null, [_typeof(p_option)]);

        // 2. 타겟 복제본 만들기
        target = p_target.clone();

        // opt = 0
        if (opt === 0) $mergeByRow();
        // opt = 1
        if (opt === 1) $mergeByColumn();
        // opt = 2
        if (opt === 2) $mergeByRowFill();
        // opt = 3
        if (opt === 3) $mergeByColumnFill();
      } catch (error) {
        throw new ExtendError(/EL05347/, error, [opt]);
      }

      // innner function
      function $mergeByRow() {
        // opt = 0
        // 3-1. 로우 임시 저장 및 초기화 
        for (var i = 0; i < _this.rows.count; i++) {
          tempRows.push(_this.rows[i].clone());
        }
        _this.rows.clear();
        // 3-2. 원본 row 추가
        for (var i = 0; i < tempRows.length; i++) {
          newRow = _this.newRow();
          for (var ii = 0; ii < _this.columns.count; ii++) {
            alias = _this.columns[ii].alias;
            if (tempRows[i][alias]) newRow[alias] = tempRows[i][alias];
          }
          _this.rows.add(newRow, p_matchType);
        }
        // 3-3. 타겟 row 추가
        tarRows = target.rows;
        for (var i = 0; i < tarRows.count; i++) {
          newRow = _this.newRow();
          tarRow = tarRows[i];
          for (var ii = 0; ii < _this.columns.count; ii++) {
            alias = _this.columns[ii].alias;
            if (tarRow[alias]) newRow[alias] = tarRow[alias];
          }
          _this.rows.add(newRow, p_matchType);
        }
      }
      function $mergeByColumn() {
        // opt = 1
        tarColumns = target.columns;
        tarRows = target.rows;
        // 3-1. 컬럼 중복 검사
        for (var i = 0; i < tarColumns.count; i++) {
          alias = tarColumns[i].alias;
          if (_this.columns.exists(alias)) throw new ExtendError(/EL05343/, null, [i, alias]);
          if (_this.columns.existAlias(alias)) throw new ExtendError(/EL05344/, null, [i, alias]);
        }
        // 3-2. 로우 임시 저장 및 초기화 
        for (var i = 0; i < _this.rows.count; i++) {
          tempRows.push(_this.rows[i].clone());
        }
        _this.rows.clear();
        // 3-3. 컬럼 추가
        for (var i = 0; i < tarColumns.count; i++) {
          clone = tarColumns[i].clone(_this);
          var key = tarColumns[i].alias;
          clone.columnName = key;
          clone.$key = key;
          // clone.__SET$$key(key, clone);
          _this.columns.add(clone);
        }
        // 3-4. 로우 추가 (기준:idx)
        for (var i = 0; i < tempRows.length; i++) {
          newRow = _this.newRow();
          for (var ii = 0; ii < _this.columns.count; ii++) {
            alias = _this.columns[ii].alias;
            if (tempRows[i][alias]) {
              // 원본 로우
              newRow[alias] = tempRows[i][alias];
              continue;
            } else if (tarRows[i] && tarRows[i][alias]) newRow[alias] = tarRows[i][alias]; // 타겟 로우
          }
          _this.rows.add(newRow, p_matchType);
        }
      }
      function $mergeByRowFill() {
        // opt = 2
        tarColumns = target.columns;
        tarRows = target.rows;
        // 3-1. 로우 임시 저장 및 초기화 
        for (var i = 0; i < _this.rows.count; i++) {
          tempRows.push(_this.rows[i].clone());
        }
        _this.rows.clear();
        // 3-2. 컬럼 추가
        for (var i = 0; i < tarColumns.count; i++) {
          alias = tarColumns[i].alias;
          if (!_this.columns.exists(alias)) {
            clone = tarColumns[i].clone(_this);
            clone.name = alias;
            _this.columns.add(clone);
          }
        }
        // 3-3. 로우 추가 : 원본
        for (var i = 0; i < tempRows.length; i++) {
          newRow = _this.newRow();
          for (var ii = 0; ii < _this.columns.count; ii++) {
            alias = _this.columns[ii].alias;
            if (tempRows[i][alias]) newRow[alias] = tempRows[i][alias];
          }
          _this.rows.add(newRow, p_matchType);
        }
        // 3-4. 로우 추가 : 타겟
        for (var i = 0; i < tarRows.count; i++) {
          newRow = _this.newRow();
          for (var ii = 0; ii < _this.columns.count; ii++) {
            alias = _this.columns[ii].alias;
            if (tarRows[i][alias]) newRow[alias] = tarRows[i][alias];
          }
          _this.rows.add(newRow, p_matchType);
        }
      }
      function $mergeByColumnFill() {
        // opt = 3
        tarColumns = target.columns;
        tarRows = target.rows;
        // 3-1. 컬럼 중복 검사
        for (var i = 0; i < tarColumns.count; i++) {
          alias = tarColumns[i].alias;
          if (_this.columns.exists(alias)) throw new ExtendError(/EL05345/, null, [i, alias]);
          if (_this.columns.existAlias(alias)) throw new ExtendError(/EL05346/, null, [i, alias]);
        }
        // 3-2. 로우 임시 저장 및 초기화 
        for (var i = 0; i < _this.rows.count; i++) {
          tempRows.push(_this.rows[i].clone());
        }
        _this.rows.clear();
        // 3-3. 컬럼 추가
        for (var i = 0; i < tarColumns.count; i++) {
          clone = tarColumns[i].clone(_this);
          clone.columnName = tarColumns[i].alias;
          _this.columns.add(clone);
        }
        // 3-4. 로우 추가 (idx)
        for (var i = 0; i < tempRows.length; i++) {
          newRow = _this.newRow();
          for (var ii = 0; ii < _this.columns.count; ii++) {
            alias = _this.columns[ii].alias;
            if (tempRows[i][alias]) {
              // 원본 로우
              newRow[alias] = tempRows[i][alias];
              continue;
            } else newRow[alias] = tarRows[i][alias]; // 타겟 로우
          }
          _this.rows.add(newRow, p_matchType);
        }
        // 3-5. 타겟 로우가 클 경우 로우 추가
        if (tempRows.length < tarRows.count) {
          for (var i = tempRows.length; i < tarRows.count; i++) {
            newRow = _this.newRow();
            for (var ii = 0; ii < _this.columns.count; ii++) {
              alias = _this.columns[ii].alias;
              if (tarRows[i][alias]) newRow[alias] = tarRows[i][alias];
            }
            _this.rows.add(newRow, p_matchType);
          }
        }
      }
    };

    /**
     * 엔티티의 지정한 컬럼과 조건의 row 를 조회
     * @param {function | array<string>| arguments<string>} p_filter 필터
     * @param {array<string> | arguments<string>} [p_args] filter 설정시 컬럼명
     * @returns {MetaRow[]}
     */
    BaseEntity.prototype.select = function (p_filter, p_args) {
      var args = Array.prototype.slice.call(arguments);
      var MetaView;
      var columnNames = [];
      var callback;
      var view;
      var selectList = [];
      try {
        args = Array.prototype.slice.call(arguments);
        MetaView = MetaRegistry.namespace.find('Meta.Entity.MetaView');
        if (!MetaView) throw new ExtendError(/EL05335/, null, ['Meta.Entity.MetaView']);
        view = new MetaView('select');

        // 매개변수 구성
        if (typeof p_filter === 'function') {
          callback = p_filter;
          if (Array.isArray(p_args)) columnNames = p_args;else if (args.length > 1) columnNames = args.splice(1);
        } else if (Array.isArray(p_filter)) {
          columnNames = p_filter;
        } else {
          columnNames = args.splice(0);
        }
        // 엔티티 빌드
        // return this._buildEntity(view, callback, columnNames);

        this._buildEntity(view, callback, columnNames);
        for (var i = 0; i < view.rows.count; i++) {
          selectList.push(view.rows[i]);
        }
        return selectList;
      } catch (error) {
        throw new ExtendError(/EL05336/, error, []);
      }
    };

    /**
     * 객체(직렬화) 로드
     * 불러오기/가져오기 (!! 병합용도가 아님)
     * 기존을 초기화 하고 불러오는 역활
     * @param {object | string} p_obj 불러오기 대상
     * @param {function} [p_parse] 파서
     */
    BaseEntity.prototype.load = function (p_obj, p_parse) {
      var obj = p_obj;
      try {
        if (p_obj instanceof BaseEntity) throw new ExtendError(/EL05351/, null, []);
        if (typeof obj === 'string') {
          if (typeof p_parse === 'function') obj = p_parse(obj);else obj = JSON.parse(obj, null);
        }
        if (!_isObject(obj)) throw new ExtendError(/EL05352/, null, [_typeof(obj)]);
        this.setObject(obj);
      } catch (error) {
        throw new ExtendError(/EL05353/, error, []);
      }
    };

    // BaseEntity.prototype.load._TYPE = { params: String };

    /**
     * 객체 출력(직렬화)
     * @param {number} [p_vOpt] 옵션 (0, 1, 2)
     * @param {function} [p_stringify] 파서출력 사용자 함수
     * @param {string} [p_space] 공백
     * @returns {string}
     */
    BaseEntity.prototype.output = function (p_vOpt, p_stringify, p_space) {
      var rObj;
      var str;
      rObj = this.getObject(p_vOpt);
      if (typeof p_stringify === 'function') str = p_stringify(rObj, {
        space: p_space
      });else str = JSON.stringify(rObj, null, p_space);
      return str;
    };

    /**
     * object 로 읽기   
     * JSON 스키마 규칙   
     * { table: { columns: {}, rows: {} }}   
     * { columns: {...}, rows: {} }
     * @param {object} p_obj mObject 또는 rObject 또는 entity
     * @param {number} [p_option] 기본값  = 3
     * @param {number} p_option.1 컬럼(구조)만 가져온다. 
     * @param {number} p_option.2 로우(데이터)만 가져온다 (컬럼 참조)  
     * @param {number} p_option.3 컬럼/로우를 가져온다. 로우만 존재하면 로우 이름의 빈 컬럼을 생성한다. 
     */
    BaseEntity.prototype.read = function (p_obj, p_option) {
      var entity = null;
      var opt = typeof p_option === 'undefined' ? 3 : p_option;
      try {
        if (!_isObject(p_obj)) throw new ExtendError(/EL05354/, null, [_typeof(p_obj)]);
        if (typeof opt !== 'number') throw new ExtendError(/EL05355/, null, [_typeof(opt)]);
        if (opt <= 0 || opt > 3) throw new ExtendError(/EL05356/, null, [opt]);
        if (p_obj instanceof BaseEntity) {
          this._readEntity(p_obj, p_option);
        } else {
          // REVIEW: entity, table 필요성 검토
          if (p_obj['entity']) entity = p_obj['entity'];else if (p_obj['table']) entity = p_obj['table'];else entity = p_obj;

          // 스키마 및 데이터 읽기
          if (opt % 2 === 1) this.readSchema(entity, opt === 3 ? true : false); // opt: 1, 3
          if (Math.floor(opt / 2) >= 1) this.readData(entity); // opt: 2, 3
        }
      } catch (error) {
        throw new ExtendError(/EL05357/, error, []);
      }
    };

    /**
     * 없으면 빈 컬럼을 생성해야 하는지?  
     * 이경우에 대해서 명료하게 처리햐야함 !!  
     * @param {object} p_obj object<Schema> | object<Guid>
     * @param {boolean} [p_createRow] true 이면, row[0] 기준으로 컬럼을 추가함
     */
    BaseEntity.prototype.readSchema = function (p_obj, p_createRow) {
      var obj = p_obj;
      try {
        if (!_isObject(p_obj)) throw new ExtendError(/EL05358/, null, [_typeof(p_obj)]);
        if (MetaRegistry.isGuidObject(p_obj)) {
          if (MetaRegistry.hasRefer(p_obj)) obj = MetaRegistry.transformRefer(p_obj);
          obj = BaseEntity.transformSchema(obj); // gObj >> sObj<요약>
        }
        if (!_isSchema(obj)) throw new ExtendError(/EL05359/, null, [obj.columns, obj.rows]);
        if (obj.viewName) this.viewName = obj.viewName;
        if (obj.tableName) this.tableName = obj.tableName;
        this._readSchema(obj, p_createRow);
      } catch (error) {
        throw new ExtendError(/EL0535A/, error, []);
      }
    };

    /**
     * 존재하는 로우만 읽기
     * @param {object} p_obj 읽을 객체
     */
    BaseEntity.prototype.readData = function (p_obj) {
      var obj = p_obj;
      var rows = [];
      try {
        if (!_isObject(p_obj)) throw new ExtendError(/EL0535B/, null, [_typeof(p_obj)]);
        if (MetaRegistry.isGuidObject(p_obj)) {
          if (MetaRegistry.hasRefer(p_obj)) obj = MetaRegistry.transformRefer(p_obj);
          obj = BaseEntity.transformSchema(p_obj);
        }
        if (!_isSchema(obj)) throw new ExtendError(/EL0535C/, null, [obj.columns, obj.rows]);
        if (Array.isArray(obj['rows'])) rows = obj['rows'];else rows.push(obj['rows']);
        for (var i = 0; i < rows.length && this.columns.count > 0; i++) {
          var row = this.newRow(this);
          for (var key in rows[i]) {
            if (Object.prototype.hasOwnProperty.call(row, key)) row[key] = rows[i][key];
          }
          this.rows.add(row);
        }
      } catch (error) {
        throw new ExtendError(/EL0535D/, error, []);
      }
    };

    /**
     * 엔티티를 컬럼과 로우를 스키마 타입의 객체로 쓰기(내보내기)
     * @param {number} p_vOpt 기본 = 0
     * @returns {object} 스키마 타입
     */
    BaseEntity.prototype.write = function (p_vOpt) {
      var vOpt = p_vOpt || 0;
      var oGuid;
      oGuid = this.getObject(vOpt);
      return BaseEntity.transformSchema(oGuid);
    };

    /**
     * 엔티티 스키마(컬럼)을 스키마 타입의 객체로 쓰기
     * @param {number} [p_vOpt] 기본 = 0
     * @returns {object} 스키마 타입
     */
    BaseEntity.prototype.writeSchema = function (p_vOpt) {
      var vOpt = p_vOpt || 0;
      var schema;
      schema = this.write(vOpt);
      delete schema.rows;
      return schema;
    };

    /**
     * 엔티티 데이터(로우)를 스키마 타입의 객체로 쓰기
     * @param {number} p_vOpt 기본 = 0
     * @returns {object} 스키마 타입
     */
    BaseEntity.prototype.writeData = function (p_vOpt) {
      var vOpt = p_vOpt || 0;
      var schema;
      schema = this.write(vOpt);
      delete schema.columns;
      return schema;
    };

    /** 
     * columns 컬렉션에 포함된 MetaColumn의 유효성을 검사합니다. 
     * column.valid() 메서드는 required 속성과 constraints를 기준으로 value 값의 유효성을 확인합니다.
     *  
     * @returns {boolean} 모든 컬럼이 유효성 검사를 통과한 경우 true 
     */
    BaseEntity.prototype.validate = function () {
      // 컬럼 타입 검사
      var typeCheck = this.columns.every(function (elem) {
        if (elem instanceof MetaColumn) return true;
      });
      if (!typeCheck) throw new ExtendError(/EL05338/, null, []);
      if (this.columns.every(function (elem) {
        if (typeof elem.valid(elem.value) === 'undefined') return true;
      })) return true;else return false;
    };

    /** 
     * 엔티티 복제
     * @abstract 
     * @returns {BaseEntity} 복제한 객체
     */
    BaseEntity.prototype.clone = function () {
      throw new ExtendError(/EL05337/, null, []);
    };

    /** 
     * 엔티티 복사
     * @abstract 
     * @returns {BaseEntity} 복사한 뷰 객체
     */
    BaseEntity.prototype.copy = function () {
      throw new ExtendError(/EL05348/, null, []);
    };
    return BaseEntity;
  }(MetaElement);

  var MetaTableCollection = function (_super) {
    /**
     * 메타 테이블 컬렉션
     * @constructs _L.Meta.Entity.MetaTableCollection
     * @extends _L.Collection.PropertyCollection
     * @param {object} p_owner 소유자 
     */
    function MetaTableCollection(p_owner) {
      // COVER:
      _super.call(this, p_owner);
      var _baseType = MetaTable;
      /**
       * 기본 생성 타입
       * @member {BaseColumnCollection} _L.Meta.Entity.MetaTableCollection#_baseType
       */
      Object.defineProperty(this, '_baseType', {
        get: function get() {
          return _baseType;
        },
        set: function set(nVal) {
          if (!(typeof nVal === 'function')) throw new ExtendError(/EL05421/, null, [this.constructor.name, _typeof(nVal)]);
          // if (!(new nVal('temp') instanceof MetaTable)) throw new ExtendError('ES032', ['_baseType', 'MetaTable']);
          if (!Type.isProtoChain(nVal, MetaTable)) throw new ExtendError(/EL05422/, null, [this.constructor.name]);
          _baseType = nVal;
        },
        configurable: false,
        enumerable: true
      });
      this._elemTypes = MetaTable; // 컬렉션 타입 설정

      // 예약어 등록 
      this.$KEYWORD = ['_baseType', 'existTableName'];
    }
    Util.inherits(MetaTableCollection, _super);
    MetaTableCollection._NS = 'Meta.Entity'; // namespace
    MetaTableCollection._PARAMS = ['_owner']; // creator parameter

    /**
     * 테이블 컬렉션에 엔티티 추가
     * @param {string | MetaTable} p_table 추가할 메타테이블
     * @returns {MetaTable} 등록한 아이템
     */
    MetaTableCollection.prototype.add = function (p_table) {
      // COVER:
      var table;
      var key;
      if (typeof p_table === 'string' && p_table.length > 0) {
        key = p_table;
        table = new this._baseType(key);
        if (this._owner instanceof MetaObject && this._owner.instanceOf('MetaSet')) table._metaSet = this._owner;
        // table._metaSet = this._owner;
      } else if (p_table instanceof MetaTable) {
        key = p_table.tableName;
        table = p_table;
        if (this._owner instanceof MetaObject && this._owner.instanceOf('MetaSet')) p_table._metaSet = this._owner;
        // p_table._metaSet = this._owner;
      } else throw new ExtendError(/EL05423/, null, [typeof any === "undefined" ? "undefined" : _typeof(any)]);
      if (this.existTableName(key)) throw new ExtendError(/EL05424/, null, [key]);
      return _super.prototype.add.call(this, key, table);
    };

    /**
     * 테이블명 존재 유무
     * @param {string} p_key 테이블명
     * @returns {boolean}
     */
    MetaTableCollection.prototype.existTableName = function (p_key) {
      for (var i = 0; this.count > i; i++) {
        if (this[i].tableName === p_key) return true;
      }
      return false;
    };
    return MetaTableCollection;
  }(PropertyCollection);

  var MetaTable = function (_super) {
    /**
     * 테이블 엔티티
     * @constructs _L.Meta.Entity.MetaTable
     * @extends _L.Meta.Entity.BaseEntity
     * @param {string} p_name 테이블명
     */
    function MetaTable(p_name) {
      _super.call(this, p_name);
      var columns = new MetaTableColumnCollection(this);

      /**
       * 테이블 이름
       * @member {string} _L.Meta.Entity.MetaTable#tableName
       */
      Object.defineProperty(this, 'tableName', {
        get: function get() {
          return this._name;
        },
        set: function set(nVal) {
          if (nVal === this.tableName) return;
          if (typeof nVal !== 'string') throw new ExtendError(/EL05411/, null, [_typeof(nVal)]);
          this._name = nVal;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 엔티티의 아이템(속성) 컬렉션
       * @member {MetaTableColumnCollection} _L.Meta.Entity.MetaTable#columns
       */
      Object.defineProperty(this, 'columns', {
        get: function get() {
          return columns;
        },
        set: function set(nVal) {
          if (!(nVal instanceof MetaTableColumnCollection)) throw new ExtendError(/EL05412/, null, []);
          if (this.rows.count > 0) throw new ExtendError(/EL05413/, null, [this.constructor.name, this.rows.count]);
          columns = nVal;
        },
        configurable: false,
        enumerable: true
      });
      Util["implements"](MetaTable, this); // strip:
    }
    Util.inherits(MetaTable, _super);
    MetaTable._UNION = [ITransaction];
    MetaTable._NS = 'Meta.Entity'; // namespace
    MetaTable._PARAMS = ['name']; // creator parameter

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.
     * @param {number} p_vOpt 가져오기 옵션
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    MetaTable.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      obj['tableName'] = this.tableName;
      return obj;
    };

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.   
     * @param {object} p_oGuid guid 타입의 객체
     * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
     * 기본값은 p_oGuid 객체와 동일
     */
    MetaTable.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      var origin = p_origin ? p_origin : p_oGuid;
      var metaSet;
      if (p_oGuid['_metaSet']) {
        metaSet = MetaRegistry.findSetObject(p_oGuid['_metaSet']['$ref'], origin);
        if (!metaSet) throw new ExtendError(/EL05414/, null, [p_oGuid['_metaSet']['$ref']]);
        this._metaSet = metaSet;
      }
      this.columns.setObject(p_oGuid['columns'], origin);
      this.rows.setObject(p_oGuid['rows'], origin);
      this.tableName = p_oGuid['tableName'];
    };

    /**
     * 객체 복제
     * @returns {MetaTable}
     */
    MetaTable.prototype.clone = function () {
      var clone = new MetaTable(this.tableName);

      // columns 복제본 추가
      for (var i = 0; i < this.columns.count; i++) {
        clone.columns.add(this.columns[i].clone(clone));
      }

      // rows 복제본 추가
      for (var i = 0; i < this.rows.count; i++) {
        clone.rows.add(this.rows[i].clone(clone));
      }
      return clone;
    };

    /**
     * 엔티티를 복사한다. (조회 후 복제)
     * @param {overload}            type1
     * @param {function}            type1.p_filter 로우 필터 함수
     * @param {arguments<string>}   type1.p_args 컬럼명
     * @param {overload}            type2
     * @param {string}              type2.p_columns 컬럼명
     */
    MetaTable.prototype.copy = function (p_filter, p_args) {
      var args = Array.prototype.slice.call(arguments);
      var columnNames = [];
      var callback = null;
      var entity = new MetaTable(this.tableName);

      // 매개변수 구성
      if (typeof p_filter === 'function') {
        callback = p_filter;
        if (Array.isArray(p_args)) columnNames = p_args;else if (args.length > 1) columnNames = args.splice(1);
      } else if (Array.isArray(p_filter)) {
        columnNames = p_filter;
      } else {
        columnNames = args.splice(0);
      }
      return this._buildEntity(entity, callback, columnNames);
    };

    /**
     * 변경사항 허락 : commit
     */
    MetaTable.prototype.acceptChanges = function () {
      this.rows.commit();
    };

    /**
     * 변경사항 취소 : rollback
     */
    MetaTable.prototype.rejectChanges = function () {
      this.rows.rollback();
    };

    /**
     * 변경목록 얻기
     * @returns {array<object>}
     */
    MetaTable.prototype.getChanges = function () {
      return this.rows._transQueue.select();
    };
    return MetaTable;
  }(BaseEntity);

  var MetaView = function (_super) {
    /**
     * 메타 뷰
     * @constructs _L.Meta.Entity.MetaView
     * @extends _L.Meta.Entity.BaseEntity
     * @param {string} p_name 뷰이름
     * @param {BaseEntity} [p_baseEntity] 기본 엔티티, 컬럼 추가시 기본엔티티에 추가 된다.
     */
    function MetaView(p_name, p_baseEntity) {
      _super.call(this, p_name);
      var _baseEntity;
      var columns = new MetaViewColumnCollection(this);
      /**
       * 메타 뷰 이름
       * @member {string} _L.Meta.Entity.MetaView#viewName
       */
      Object.defineProperty(this, 'viewName', {
        get: function get() {
          return this._name;
        },
        set: function set(nVal) {
          if (nVal === this.viewName) return;
          if (typeof nVal !== 'string') throw new ExtendError(/EL05431/, null, [_typeof(nVal)]);
          this._name = nVal;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 뷰의 컬럼 컬렉션
       * @member {MetaViewColumnCollection} _L.Meta.Entity.MetaView#columns
       */
      Object.defineProperty(this, 'columns', {
        get: function get() {
          return columns;
        },
        set: function set(nVal) {
          if (!(nVal instanceof MetaViewColumnCollection)) throw new ExtendError(/EL05432/, null, [this.constructor.name]);
          if (this.rows.count > 0) throw new ExtendError(/EL05433/, null, [this.constructor.name, this.rows.count]);
          columns = nVal;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 기본 엔티티
       * null 으로 undefined 
       * @member {MetaViewColumnCollection} _L.Meta.Entity.MetaView#_baseEntity
       */
      Object.defineProperty(this, '_baseEntity', {
        get: function get() {
          return _baseEntity;
        },
        set: function set(nVal) {
          if (nVal === null || typeof nVal === 'undefined') {
            _baseEntity = undefined; // init
            return;
          }
          if (!(nVal instanceof BaseEntity)) throw new ExtendError(/EL05434/, null, [this.constructor.name]);
          _baseEntity = nVal;
        },
        configurable: false,
        enumerable: true
      });
      if (p_baseEntity) this._baseEntity = p_baseEntity;
    }
    Util.inherits(MetaView, _super);
    MetaView._NS = 'Meta.Entity'; // namespace
    MetaView._PARAMS = ['name', '_baseEntity']; // creator parameter

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.
     * @param {number} p_vOpt 가져오기 옵션
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    MetaView.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      var vOpt = p_vOpt || 0;
      // var origin = p_origin ? p_origin : obj;

      obj['viewName'] = this.viewName;
      if (vOpt < 2 && vOpt > -1 && this._baseEntity) {
        obj['_baseEntity'] = MetaRegistry.createReferObject(this._baseEntity);
      }
      return obj;
    };

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.  
     * @param {object} p_oGuid guid 타입의 객체
     * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
     * 기본값은 p_oGuid 객체와 동일
     */
    MetaView.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      var origin = p_origin ? p_origin : p_oGuid;
      var metaSet;
      var baseEntity;
      if (p_oGuid['_metaSet']) {
        metaSet = MetaRegistry.findSetObject(p_oGuid['_metaSet']['$ref'], origin);
        if (!metaSet) throw new ExtendError(/EL05435/, null, [p_oGuid['_metaSet']['$ref']]);
        this._metaSet = metaSet;
      }
      // this.metaSet = mObj.metaSet;
      if (p_oGuid['_baseEntity']) {
        baseEntity = MetaRegistry.findSetObject(p_oGuid['_baseEntity']['$ref'], origin);
        if (!baseEntity) throw new ExtendError(/EL05436/, null, [p_oGuid['_baseEntity']['$ref']]);
        // this.__SET$_baseEntity(baseEntity, this);
        this._baseEntity = baseEntity;
      }
      this.columns.setObject(p_oGuid['columns'], origin);
      this.rows.setObject(p_oGuid['rows'], origin);
      this.viewName = p_oGuid['viewName'];
    };
    /**
     * 객체 복제
     * override
     * @returns {MetaView}
     */
    MetaView.prototype.clone = function () {
      var clone = new MetaView(this.viewName, this._baseEntity); // 뷰를 복제하면 참조타입 >> 엔티티타입으로 변경

      for (var i = 0; i < this.columns.count; i++) {
        if (this.columns[i]._entity === this) clone.columns.add(this.columns[i].clone(clone));else clone.columns.add(this.columns[i].clone());
      }
      for (var i = 0; i < this.rows.count; i++) {
        clone.rows.add(this.rows[i].clone(clone));
      }
      return clone;
    };

    /**
     * 엔티티를 복사한다. (조회 후 복제)
     * @param {overload}            type1
     * @param {function}            type1.p_filter 로우 필터 함수
     * @param {arguments<string>}   type1.p_args 컬럼명
     * @param {overload}            type2
     * @param {string}              type2.p_columns 컬럼명
     */
    MetaView.prototype.copy = function (p_filter, p_args) {
      var args = Array.prototype.slice.call(arguments);
      var items = [];
      var callback = null;
      var entity = new MetaView(this.viewName, this);
      this.clone();

      // 매개변수 구성
      if (typeof p_filter === 'function') {
        callback = p_filter;
        if (Array.isArray(p_args)) items = p_args;else if (args.length > 1) items = args.splice(1);
      } else if (Array.isArray(p_filter)) {
        items = p_filter;
      } else {
        items = args.splice(0);
      }
      return this._buildEntity(entity, callback, items);
    };
    return MetaView;
  }(BaseEntity);

  var MetaViewCollection = function (_super) {
    /**
     * 뷰 엔티티 컬렉션
     * @constructs _L.Meta.Entity.MetaViewCollection
     * @extends _L.Meta.Entity.PropertyCollection
     * @param {object} p_owner 소유자 
     */
    function MetaViewCollection(p_owner) {
      // COVER:
      _super.call(this, p_owner);
      var _baseType = MetaView;

      /**
       * 기본 생성 타입
       * @member {MetaView} _L.Meta.Entity.MetaViewCollection#_baseType
       */
      Object.defineProperty(this, '_baseType', {
        get: function get() {
          return _baseType;
        },
        set: function set(nVal) {
          if (!(typeof nVal === 'function')) throw new ExtendError(/EL05441/, null, [_typeof(nVal)]);
          // if (!(new nVal('temp') instanceof MetaView)) throw new ExtendError('ES032', ['_baseType', 'MetaView']);
          if (!Type.isProtoChain(nVal, MetaView)) throw new ExtendError(/EL05442/, null, [this.constructor.name]);
          _baseType = nVal;
        },
        configurable: false,
        enumerable: true
      });
      this._elemTypes = MetaView; // 컬렉션타입 설정

      // 예약어 등록 
      this.$KEYWORD = ['_baseType', 'existViewName'];
    }
    Util.inherits(MetaViewCollection, _super);
    MetaViewCollection._NS = 'Meta.Entity'; // namespace
    MetaViewCollection._PARAMS = ['_owner']; // creator parameter

    /**
     * 뷰 컬렉션에 뷰 엔티티를 추가한다.
     * @param {string | MetaView} p_view 추가할 뷰
     * @param {BaseColumnCollection} [p_baseEntity] 기본 컬럼 컬렉션
     * @returns {MetaView} 등록한 아이템
     * @example
     *  - string                    : 생성후   string      이름으로 등록 
     *  - string, colltion          : 생성후   string      이름으로  등록 (collection보냄)
     *  - entityView                :         entityView  이름으로 등록
     *  - entityView, collection    :         entityView  이름으로 등록 (collection보냄) => 오류발생
     */
    MetaViewCollection.prototype.add = function (p_view, p_baseEntity) {
      // COVER:
      var view;
      var key;
      if (p_view instanceof MetaView && p_baseEntity) {
        throw new ExtendError(/EL05443/, null, []);
      }
      if (p_baseEntity && !(p_baseEntity instanceof BaseEntity)) {
        throw new ExtendError(/EL05444/, null, []);
      }
      if (typeof p_view === 'string') {
        key = p_view;
        view = new this._baseType(key, p_baseEntity);
        if (this._owner instanceof MetaObject && this._owner.instanceOf('MetaSet')) view._metaSet = this._owner;
        // view._metaSet = this._owner;
      } else if (p_view instanceof MetaView) {
        key = p_view.viewName;
        view = p_view;
        if (this._owner instanceof MetaObject && this._owner.instanceOf('MetaSet')) p_view._metaSet = this._owner;
        // p_view._metaSet = this._owner;
      } else throw new ExtendError(/EL05445/, null, [_typeof(p_view)]);
      if (this.existViewName(key)) throw new ExtendError(/EL05446/, null, [key]);
      return _super.prototype.add.call(this, key, view);
    };

    /**
     * 메타뷰가 존재하는지 확인합니다.
     * @param {string} p_key 뷰이름
     * @returns 
     */
    MetaViewCollection.prototype.existViewName = function (p_key) {
      for (var i = 0; this.count > i; i++) {
        if (this[i].viewName === p_key) return true;
      }
      return false;
    };
    return MetaViewCollection;
  }(PropertyCollection);

  var MetaSet = function (_super) {
    /**
     * 메타셋
     * @constructs _L.Meta.Entity.MetaSet
     * @extends _L.Meta.MetaElement
     * @implements {_L.Interface.ISchemaControl}
     * @implements {_L.Interface.IImportControl}
     * @implements {_L.Interface.IExportControl}
     * @implements {_L.Interface.ITransaction}
     * @implements {_L.Interface.ISerialize}
     * @param {string} p_name 메타셋 이름
     */
    function MetaSet(p_name) {
      _super.call(this, p_name);
      var tables = new MetaTableCollection(this);
      var views = new MetaViewCollection(this);

      /**
       * 테이블 이름
       * @member {string} _L.Meta.Entity.MetaSet#setName
       */
      Object.defineProperty(this, 'setName', {
        get: function get() {
          return this._name;
        },
        set: function set(nVal) {
          if (typeof nVal !== 'string') throw new ExtendError(/EL05451/, null, [this.constructor.name, _typeof(nVal)]);
          this._name = nVal;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 메타 테이블 컬렉션
       * @readonly
       * @member {MetaTableCollection} _L.Meta.Entity.MetaSet#tables
       */
      Object.defineProperty(this, 'tables', {
        get: function get() {
          return tables;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 메타 뷰 컬렉션
       * @readonly
       * @member {MetaViewCollection} _L.Meta.Entity.MetaSet#views
       */
      Object.defineProperty(this, 'views', {
        get: function get() {
          return views;
        },
        configurable: false,
        enumerable: true
      });

      /**
       * 트랜젝션 사용 유무 (기본값: 사용 false)
       * @member {boolean}  _L.Meta.Entity.MetaSet#autoChanges
       */
      Object.defineProperty(this, 'autoChanges', {
        set: function set(nVal) {
          if (typeof nVal !== 'boolean') {
            throw new ExtendError(/EL05452/, null, [this.constructor.name, _typeof(nVal)]);
          }
          for (var i = 0; i < this.tables.count; i++) {
            this.tables[i].rows.autoChanges = nVal;
          }
        },
        configurable: false,
        enumerable: true
      });
      Util["implements"](MetaSet, this); // strip:
    }
    Util.inherits(MetaSet, _super);
    MetaSet._UNION = [ISchemaControl, IImportControl, IExportControl, ITransaction, ISerialize];
    MetaSet._NS = 'Meta.Entity'; // namespace
    MetaSet._PARAMS = ['name']; // creator parameter

    // local funciton
    function _isObject(obj) {
      if (_typeof(obj) === 'object' && obj !== null) return true;
      return false;
    }
    function _isSchema(obj) {
      // 객체 여부
      if (!_isObject(obj)) return false;
      if (_isObject(obj['tables']) || _isObject(obj['views'])) return true;
      return false;
    }

    /**
     * 메타셋 스카마 객체로 변환
     * @param {object} p_oGuid getObject()로 얻은 객체
     * @returns {object}
     */
    MetaSet.transformSchema = function (p_oGuid) {
      var obj = {};
      if (!_isSchema(p_oGuid)) {
        throw new ExtendError(/EL05453/, null, []);
      }
      obj['name'] = p_oGuid['name'];
      obj['tables'] = $transformTable(p_oGuid['tables']);
      obj['views'] = $transformView(p_oGuid['views']);
      return obj;

      // inner function
      function $transformTable(p_oGuid) {
        var obj = {};
        for (var i = 0; i < p_oGuid['_elem'].length; i++) {
          var table = p_oGuid['_elem'][i];
          var key = p_oGuid['_key'][i];
          obj[key] = BaseEntity.transformSchema(table);
        }
        obj['$key'] = p_oGuid['_key'];
        return obj;
      }
      function $transformView(p_oGuid) {
        var obj = {};
        for (var i = 0; i < p_oGuid['_elem'].length; i++) {
          var view = p_oGuid['_elem'][i];
          var key = p_oGuid['_key'][i];
          obj[key] = BaseEntity.transformSchema(view);
        }
        obj['$key'] = p_oGuid['_key'];
        return obj;
      }
    };

    /**
     * 현재 객체의 guid 타입의 객체를 가져옵니다.  
     * - 순환참조는 $ref 값으로 대체된다.
     * @param {number} p_vOpt 가져오기 옵션
     * - opt = 0 : 참조 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 1 : 소유 구조의 객체 (_guid: Yes, $ref: Yes)  
     * - opt = 2 : 소유 구조의 객체 (_guid: No,  $ref: No)   
     * 객체 비교 : equal(a, b)  
     * a.getObject(2) == b.getObject(2)   
     * @param {object | array<object>} [p_owned] 현재 객체를 소유하는 상위 객체들
     * @returns {object}  
     */
    MetaSet.prototype.getObject = function (p_vOpt, p_owned) {
      var obj = _super.prototype.getObject.call(this, p_vOpt, p_owned);
      var vOpt = p_vOpt || 0;
      var owned = p_owned ? [].concat(p_owned, obj) : [].concat(obj);
      obj['setName'] = this.setName;
      obj['tables'] = this.tables.getObject(vOpt, owned);
      obj['views'] = this.views.getObject(vOpt, owned);
      return obj;
    };

    /**
     * 현재 객체를 초기화 후, 지정한 guid 타입의 객체를 사용하여 설정합니다.   
     * @param {object} p_oGuid guid 타입의 객체
     * @param {object} [p_origin] 현재 객체를 설정하는 원본 guid 객체  
     * 기본값은 p_oGuid 객체와 동일
     */
    MetaSet.prototype.setObject = function (p_oGuid, p_origin) {
      _super.prototype.setObject.call(this, p_oGuid, p_origin);
      var origin = p_origin ? p_origin : p_oGuid;
      this.setName = p_oGuid['setName'];
      this.tables.setObject(p_oGuid['tables'], origin);
      this.views.setObject(p_oGuid['views'], origin);
    };

    /**
     * 메타셋 복제
     * @returns {MetaSet}
     */
    MetaSet.prototype.clone = function () {
      var clone = new MetaSet(this.setName);
      for (var i = 0; i < this.tables.count; i++) {
        clone.tables.add(this.tables[i].clone());
      }
      for (var i = 0; i < this.views.count; i++) {
        clone.views.add(this.views[i].clone());
      }
      return clone;
    };

    /**
     * 모든 view 와 모든 table 의 row 를 초기화
     */
    MetaSet.prototype.clear = function () {
      for (var i = 0; i < this.tables.count; i++) this.tables[i].clear();
      for (var i = 0; i < this.views.count; i++) this.views[i].clear();
    };

    /**
     * 전체 초기화
     */
    MetaSet.prototype.reset = function () {
      this.tables.clear();
      this.views.clear();
    };

    /**
     * 불러오기/가져오기 (!! 병합용도가 아님)
     * 기존을 초기화 하고 불러오는 역활
     * @param {object | string} p_obj 불러오기 대상
     * @param {function} [p_parse] 파서
     */
    MetaSet.prototype.load = function (p_obj, p_parse) {
      var obj = p_obj;
      if (p_obj instanceof MetaSet) throw new ExtendError(/ES022/, null, []);
      if (typeof obj === 'string') {
        if (typeof p_parse === 'function') obj = p_parse(obj);else obj = JSON.parse(obj, null);
      }
      if (!_isObject(obj)) throw new ExtendError(/EL05455/, null, [_typeof(obj)]);
      this.setObject(obj);
    };

    // MetaSet.prototype.load._TYPE = { params: String };

    /**
     * 메타셋 객체 출력(직렬화)
     * @param {number} [p_vOpt] 옵션 (0, 1, 2)
     * @param {function} [p_stringify] 파서출력 함수
     * @param {string} [p_space] 공백
     * @returns {string}
     */
    MetaSet.prototype.output = function (p_vOpt, p_stringify, p_space) {
      var rObj = this.getObject(p_vOpt);
      var str;
      if (typeof p_stringify === 'function') str = p_stringify(rObj, {
        space: p_space
      });else str = JSON.stringify(rObj, null, p_space);
      return str;
    };

    /**
     * object 로 로딩하기   
     * JSON 스키마 규칙   
     * { table: { columns: {}, rows: {} }}   
     * { columns: {...}, rows: {} }
     * @param {object} p_obj mObject 또는 rObject 또는 entity
     * @param {Number} [p_option=3] 기본값  = 3
     * @param {Number} p_option.1 컬럼(구조)만 가져온다. 
     * @param {Number} p_option.2 로우(데이터)만 가져온다 (컬럼 참조)  
     * @param {Number} p_option.3 컬럼/로우를 가져온다. 로우만 존재하면 로우 이름의 빈 컬럼을 생성한다. 
     */
    MetaSet.prototype.read = function (p_obj, p_opt) {
      var opt = typeof p_opt === 'undefined' ? 3 : p_opt;
      var entity;
      if (_typeof(p_obj) !== 'object' || p_obj === null) throw new ExtendError(/EL05456/, null, [_typeof(p_obj)]);
      if (typeof opt !== 'number') throw new ExtendError(/EL05457/, null, [_typeof(opt)]);
      if (p_obj instanceof MetaSet) {
        this.setName = p_obj.setName;
        for (var i = 0; i < p_obj.tables.count; i++) {
          var key = p_obj.tables.indexToKey(i);
          if (this.tables.keyToIndex(key) < 0) this.tables.add(key);
          entity = this.tables[key];
          entity._readEntity(p_obj.tables[key], p_opt);
        }
        for (var i = 0; i < p_obj.views.count; i++) {
          var key = p_obj.views.indexToKey(i);
          if (this.views.keyToIndex(key) < 0) this.views.add(key);
          entity = this.views[key];
          entity._readEntity(p_obj.views[key], p_opt);
        }
      } else {
        if (opt % 2 === 1) this.readSchema(p_obj, opt === 3 ? true : false); // opt: 1, 3
        if (Math.floor(opt / 2) >= 1) this.readData(p_obj); // opt: 2, 3
      }
    };

    /**
     * 없으면 빈 컬럼을 생성해야 하는지?  
     * 이경우에 대해서 명료하게 처리햐야함 !!  
     * @param {object} p_obj object<Schema> | object<Guid>
     * @param {boolean} p_createRow true 이면, row[0] 기준으로 컬럼을 추가함
     */
    MetaSet.prototype.readSchema = function (p_obj, p_createRow) {
      var metaSet = null;
      var obj;
      var entity;
      if (!_isObject(p_obj)) throw new ExtendError(/EL05458/, null, [_typeof(p_obj)]);
      metaSet = p_obj['metaSet'] || p_obj['dataSet'] || p_obj;
      if (MetaRegistry.isGuidObject(metaSet)) {
        // if (MetaRegistry.hasRefer(metaSet)) metaSet = MetaRegistry.transformRefer(metaSet);  // 참조가 기본 존재함
        metaSet = MetaRegistry.transformRefer(metaSet);
        obj = MetaSet.transformSchema(metaSet);
      } else obj = metaSet;
      if (!_isSchema(obj)) throw new ExtendError(/EL05459/, null, [obj.tables, obj.views]);
      if (obj['tables']) {
        entity = obj['tables'];
        if (entity['$key'] && Array.isArray(entity['$key'])) {
          for (var i = 0; i < entity['$key'].length; i++) {
            $addEntity(entity['$key'][i], entity, this.tables);
          }
        } else for (var key in entity) $addEntity(key, entity, this.tables);
      }
      if (obj['views']) {
        entity = obj['views'];
        if (entity['$key'] && Array.isArray(entity['$key'])) {
          for (var i = 0; i < entity['$key'].length; i++) {
            $addEntity(entity['$key'][i], entity, this.views);
          }
        } else for (var key in entity) $addEntity(key, entity, this.views);
      }
      return;

      // inner funciton
      function $addEntity(key, p_collec, p_baseCollec) {
        var prop = p_collec[key];
        if (!p_baseCollec.exists(key)) p_baseCollec.add(key);
        MetaRegistry.setMetaObject(prop, p_baseCollec[key]);
        p_baseCollec[key]._readSchema(p_collec[key], p_createRow, obj);
      }
    };

    /**
     * row 들을 불러 온다
     * @param {object} p_obj 읽을 데이터
     */
    MetaSet.prototype.readData = function (p_obj) {
      var metaSet = null;
      var obj;
      if (!_isObject(p_obj)) throw new ExtendError(/EL0545A/, null, [_typeof(p_obj)]);
      metaSet = p_obj['metaSet'] || p_obj['dataSet'] || p_obj;
      if (MetaRegistry.isGuidObject(metaSet)) {
        // if (MetaRegistry.hasRefer(metaSet)) metaSet = MetaRegistry.transformRefer(metaSet);
        metaSet = MetaRegistry.transformRefer(metaSet);
        obj = MetaSet.transformSchema(metaSet);
      } else obj = metaSet;
      if (!_isSchema(obj)) throw new ExtendError(/EL0545B/, null, [obj.tables, obj.views]);
      if (_isObject(obj['tables'])) $createRow(obj['tables'], this.tables);
      if (_isObject(obj['views'])) $createRow(obj['views'], this.views);
      function $createRow(p_entity, p_collec) {
        for (var key in p_entity) {
          if (Object.prototype.hasOwnProperty.call(p_entity, key) && p_collec.exists(key)) {
            p_collec[key].readData(p_entity[key]);
          }
        }
      }
    };

    /**
     * 메타셋을 스키마 타입의 객체로 쓰기(내보내기)
     * @param {number} p_vOpt 옵션
     * @returns {object} 스키마 타입
     */
    MetaSet.prototype.write = function (p_vOpt) {
      var oGuid = this.getObject(p_vOpt);
      return MetaSet.transformSchema(oGuid);
    };

    /**
     * 메타셋 스키마(컬럼)을 스키마 타입의 객체로 쓰기
     * @param {number} p_vOpt 옵션
     * @returns {object} 스키마 타입
     */
    MetaSet.prototype.writeSchema = function (p_vOpt) {
      var vOpt = p_vOpt || 0;
      var schema = this.write(vOpt);
      for (var prop in schema.tables) {
        if (prop.indexOf('$') < 0) schema.tables[prop].rows = [];
      }
      for (var prop in schema.views) {
        if (prop.indexOf('$') < 0) schema.views[prop].rows = [];
      }
      return schema;
    };

    /**
     * 메타셋 데이터(로우)를 스키마 타입의 객체로 쓰기
     * @param {number} p_vOpt 옵션
     * @returns {object} 스키마 타입
     */
    MetaSet.prototype.writeData = function (p_vOpt) {
      var vOpt = p_vOpt || 0;
      var schema = this.write(vOpt);
      for (var prop in schema.tables) {
        if (prop.indexOf('$') < 0) schema.tables[prop].columns = {};
      }
      for (var prop in schema.views) {
        if (prop.indexOf('$') < 0) schema.views[prop].columns = {};
      }
      return schema;
    };

    /**
     * 메타테이블의 변경사항 허락 : commit
     */
    MetaSet.prototype.acceptChanges = function () {
      for (var i = 0; i < this.tables.count; i++) {
        this.tables[i].acceptChanges();
      }
    };

    /**
     * 메타테이블의 변경사항 취소 : rollback
     */
    MetaSet.prototype.rejectChanges = function () {
      for (var i = 0; i < this.tables.count; i++) {
        this.tables[i].rejectChanges();
      }
    };

    /**
     * 메타테이블들의 변경 유무
     * @returns {boolean} 변경 여부
     */
    MetaSet.prototype.hasChanges = function () {
      for (var i = 0; i < this.tables.count; i++) {
        var table = this.tables[i];
        if (table.getChanges().length > 0) return true;
      }
      return false;
    };
    return MetaSet;
  }(MetaElement);

  exports.ArrayCollection = ArrayCollection;
  exports.BaseCollection = BaseCollection;
  exports.BaseColumn = BaseColumn;
  exports.BaseColumnCollection = BaseColumnCollection;
  exports.BaseEntity = BaseEntity;
  exports.EventEmitter = EventEmitter;
  exports.ExtendError = ExtendError;
  exports.IArrayCollection = IArrayCollection;
  exports.ICollection = ICollection;
  exports.IElement = IElement;
  exports.IExportControl = IExportControl;
  exports.IGroupControl = IGroupControl;
  exports.IImportControl = IImportControl;
  exports.IList = IList;
  exports.IListControl = IListControl;
  exports.IMarshal = IMarshal;
  exports.IObject = IObject;
  exports.IPropertyCollection = IPropertyCollection;
  exports.ISchemaControl = ISchemaControl;
  exports.ISerialize = ISerialize;
  exports.ITransaction = ITransaction;
  exports.Message = Message;
  exports.MetaColumn = MetaColumn;
  exports.MetaElement = MetaElement;
  exports.MetaObject = MetaObject;
  exports.MetaRegistry = MetaRegistry;
  exports.MetaRow = MetaRow;
  exports.MetaRowCollection = MetaRowCollection;
  exports.MetaSet = MetaSet;
  exports.MetaTable = MetaTable;
  exports.MetaTableCollection = MetaTableCollection;
  exports.MetaTableColumnCollection = MetaTableColumnCollection;
  exports.MetaView = MetaView;
  exports.MetaViewCollection = MetaViewCollection;
  exports.MetaViewColumnCollection = MetaViewColumnCollection;
  exports.NamespaceManager = NamespaceManager;
  exports.ObjectColumn = ObjectColumn;
  exports.PropertyCollection = PropertyCollection;
  exports.TransactionCollection = TransactionCollection;
  exports.TransactionQueue = TransactionQueue;
  exports.Type = Type;
  exports.Util = Util;

}));
//# sourceMappingURL=logic-entity.js.map
