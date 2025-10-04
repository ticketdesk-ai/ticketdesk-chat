var nm = Object.defineProperty;
var rm = (e, t, n) => t in e ? nm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var W = (e, t, n) => rm(e, typeof t != "symbol" ? t + "" : t, n);
function Nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Td = { exports: {} }, b = {};
var ao = Symbol.for("react.element"), om = Symbol.for("react.portal"), lm = Symbol.for("react.fragment"), im = Symbol.for("react.strict_mode"), sm = Symbol.for("react.profiler"), um = Symbol.for("react.provider"), am = Symbol.for("react.context"), cm = Symbol.for("react.forward_ref"), dm = Symbol.for("react.suspense"), fm = Symbol.for("react.memo"), pm = Symbol.for("react.lazy"), ga = Symbol.iterator;
function hm(e) {
  return e === null || typeof e != "object" ? null : (e = ga && e[ga] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Md = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Rd = Object.assign, jd = {};
function lr(e, t, n) {
  this.props = e, this.context = t, this.refs = jd, this.updater = n || Md;
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
lr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function zd() {
}
zd.prototype = lr.prototype;
function nu(e, t, n) {
  this.props = e, this.context = t, this.refs = jd, this.updater = n || Md;
}
var ru = nu.prototype = new zd();
ru.constructor = nu;
Rd(ru, lr.prototype);
ru.isPureReactComponent = !0;
var va = Array.isArray, Fd = Object.prototype.hasOwnProperty, ou = { current: null }, Ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dd(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t) Fd.call(t, r) && !Ld.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: ao, type: e, key: l, ref: i, props: o, _owner: ou.current };
}
function mm(e, t) {
  return { $$typeof: ao, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function lu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ao;
}
function ym(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var wa = /\/+/g;
function mi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ym("" + e.key) : t.toString(36);
}
function Vo(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (l) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ao:
        case om:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + mi(i, 0) : r, va(o) ? (n = "", e != null && (n = e.replace(wa, "$&/") + "/"), Vo(o, t, n, "", function(a) {
    return a;
  })) : o != null && (lu(o) && (o = mm(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(wa, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", va(e)) for (var s = 0; s < e.length; s++) {
    l = e[s];
    var u = r + mi(l, s);
    i += Vo(l, t, n, u, o);
  }
  else if (u = hm(e), typeof u == "function") for (e = u.call(e), s = 0; !(l = e.next()).done; ) l = l.value, u = r + mi(l, s++), i += Vo(l, t, n, u, o);
  else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function go(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Vo(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function gm(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null }, Bo = { transition: null }, vm = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: Bo, ReactCurrentOwner: ou };
function Od() {
  throw Error("act(...) is not supported in production builds of React.");
}
b.Children = { map: go, forEach: function(e, t, n) {
  go(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return go(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return go(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!lu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
b.Component = lr;
b.Fragment = lm;
b.Profiler = sm;
b.PureComponent = nu;
b.StrictMode = im;
b.Suspense = dm;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vm;
b.act = Od;
b.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Rd({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = ou.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (u in t) Fd.call(t, u) && !Ld.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: ao, type: e.type, key: o, ref: l, props: r, _owner: i };
};
b.createContext = function(e) {
  return e = { $$typeof: am, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: um, _context: e }, e.Consumer = e;
};
b.createElement = Dd;
b.createFactory = function(e) {
  var t = Dd.bind(null, e);
  return t.type = e, t;
};
b.createRef = function() {
  return { current: null };
};
b.forwardRef = function(e) {
  return { $$typeof: cm, render: e };
};
b.isValidElement = lu;
b.lazy = function(e) {
  return { $$typeof: pm, _payload: { _status: -1, _result: e }, _init: gm };
};
b.memo = function(e, t) {
  return { $$typeof: fm, type: e, compare: t === void 0 ? null : t };
};
b.startTransition = function(e) {
  var t = Bo.transition;
  Bo.transition = {};
  try {
    e();
  } finally {
    Bo.transition = t;
  }
};
b.unstable_act = Od;
b.useCallback = function(e, t) {
  return Te.current.useCallback(e, t);
};
b.useContext = function(e) {
  return Te.current.useContext(e);
};
b.useDebugValue = function() {
};
b.useDeferredValue = function(e) {
  return Te.current.useDeferredValue(e);
};
b.useEffect = function(e, t) {
  return Te.current.useEffect(e, t);
};
b.useId = function() {
  return Te.current.useId();
};
b.useImperativeHandle = function(e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
b.useInsertionEffect = function(e, t) {
  return Te.current.useInsertionEffect(e, t);
};
b.useLayoutEffect = function(e, t) {
  return Te.current.useLayoutEffect(e, t);
};
b.useMemo = function(e, t) {
  return Te.current.useMemo(e, t);
};
b.useReducer = function(e, t, n) {
  return Te.current.useReducer(e, t, n);
};
b.useRef = function(e) {
  return Te.current.useRef(e);
};
b.useState = function(e) {
  return Te.current.useState(e);
};
b.useSyncExternalStore = function(e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
b.useTransition = function() {
  return Te.current.useTransition();
};
b.version = "18.3.1";
Td.exports = b;
var T = Td.exports;
const _t = /* @__PURE__ */ Nd(T);
var Id = { exports: {} }, Je = {}, Ad = { exports: {} }, Ud = {};
(function(e) {
  function t(E, O) {
    var A = E.length;
    E.push(O);
    e: for (; 0 < A; ) {
      var ue = A - 1 >>> 1, pe = E[ue];
      if (0 < o(pe, O)) E[ue] = O, E[A] = pe, A = ue;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var O = E[0], A = E.pop();
    if (A !== O) {
      E[0] = A;
      e: for (var ue = 0, pe = E.length, mo = pe >>> 1; ue < mo; ) {
        var un = 2 * (ue + 1) - 1, hi = E[un], an = un + 1, yo = E[an];
        if (0 > o(hi, A)) an < pe && 0 > o(yo, hi) ? (E[ue] = yo, E[an] = A, ue = an) : (E[ue] = hi, E[un] = A, ue = un);
        else if (an < pe && 0 > o(yo, A)) E[ue] = yo, E[an] = A, ue = an;
        else break e;
      }
    }
    return O;
  }
  function o(E, O) {
    var A = E.sortIndex - O.sortIndex;
    return A !== 0 ? A : E.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var i = Date, s = i.now();
    e.unstable_now = function() {
      return i.now() - s;
    };
  }
  var u = [], a = [], p = 1, h = null, m = 3, v = !1, y = !1, x = !1, k = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(E) {
    for (var O = n(a); O !== null; ) {
      if (O.callback === null) r(a);
      else if (O.startTime <= E) r(a), O.sortIndex = O.expirationTime, t(u, O);
      else break;
      O = n(a);
    }
  }
  function w(E) {
    if (x = !1, f(E), !y) if (n(u) !== null) y = !0, ne(C);
    else {
      var O = n(a);
      O !== null && se(w, O.startTime - E);
    }
  }
  function C(E, O) {
    y = !1, x && (x = !1, d(M), M = -1), v = !0;
    var A = m;
    try {
      for (f(O), h = n(u); h !== null && (!(h.expirationTime > O) || E && !G()); ) {
        var ue = h.callback;
        if (typeof ue == "function") {
          h.callback = null, m = h.priorityLevel;
          var pe = ue(h.expirationTime <= O);
          O = e.unstable_now(), typeof pe == "function" ? h.callback = pe : h === n(u) && r(u), f(O);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var mo = !0;
      else {
        var un = n(a);
        un !== null && se(w, un.startTime - O), mo = !1;
      }
      return mo;
    } finally {
      h = null, m = A, v = !1;
    }
  }
  var $ = !1, P = null, M = -1, B = 5, L = -1;
  function G() {
    return !(e.unstable_now() - L < B);
  }
  function H() {
    if (P !== null) {
      var E = e.unstable_now();
      L = E;
      var O = !0;
      try {
        O = P(!0, E);
      } finally {
        O ? j() : ($ = !1, P = null);
      }
    } else $ = !1;
  }
  var j;
  if (typeof c == "function") j = function() {
    c(H);
  };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(), F = z.port2;
    z.port1.onmessage = H, j = function() {
      F.postMessage(null);
    };
  } else j = function() {
    k(H, 0);
  };
  function ne(E) {
    P = E, $ || ($ = !0, j());
  }
  function se(E, O) {
    M = k(function() {
      E(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    y || v || (y = !0, ne(C));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(E) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = m;
    }
    var A = m;
    m = O;
    try {
      return E();
    } finally {
      m = A;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, O) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var A = m;
    m = E;
    try {
      return O();
    } finally {
      m = A;
    }
  }, e.unstable_scheduleCallback = function(E, O, A) {
    var ue = e.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? ue + A : ue) : A = ue, E) {
      case 1:
        var pe = -1;
        break;
      case 2:
        pe = 250;
        break;
      case 5:
        pe = 1073741823;
        break;
      case 4:
        pe = 1e4;
        break;
      default:
        pe = 5e3;
    }
    return pe = A + pe, E = { id: p++, callback: O, priorityLevel: E, startTime: A, expirationTime: pe, sortIndex: -1 }, A > ue ? (E.sortIndex = A, t(a, E), n(u) === null && E === n(a) && (x ? (d(M), M = -1) : x = !0, se(w, A - ue))) : (E.sortIndex = pe, t(u, E), y || v || (y = !0, ne(C))), E;
  }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function(E) {
    var O = m;
    return function() {
      var A = m;
      m = O;
      try {
        return E.apply(this, arguments);
      } finally {
        m = A;
      }
    };
  };
})(Ud);
Ad.exports = Ud;
var wm = Ad.exports;
var xm = T, Ge = wm;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var bd = /* @__PURE__ */ new Set(), Wr = {};
function Mn(e, t) {
  Zn(e, t), Zn(e + "Capture", t);
}
function Zn(e, t) {
  for (Wr[e] = t, e = 0; e < t.length; e++) bd.add(t[e]);
}
var Tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), es = Object.prototype.hasOwnProperty, km = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xa = {}, ka = {};
function Sm(e) {
  return es.call(ka, e) ? !0 : es.call(xa, e) ? !1 : km.test(e) ? ka[e] = !0 : (xa[e] = !0, !1);
}
function Cm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _m(e, t, n, r) {
  if (t === null || typeof t > "u" || Cm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Me(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  we[e] = new Me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  we[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  we[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  we[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  we[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  we[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  we[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  we[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  we[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var iu = /[\-:]([a-z])/g;
function su(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    iu,
    su
  );
  we[t] = new Me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(iu, su);
  we[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(iu, su);
  we[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  we[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  we[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uu(e, t, n, r) {
  var o = we.hasOwnProperty(t) ? we[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_m(t, n, o, r) && (n = null), r || o === null ? Sm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vo = Symbol.for("react.element"), Fn = Symbol.for("react.portal"), Ln = Symbol.for("react.fragment"), au = Symbol.for("react.strict_mode"), ts = Symbol.for("react.profiler"), Wd = Symbol.for("react.provider"), Vd = Symbol.for("react.context"), cu = Symbol.for("react.forward_ref"), ns = Symbol.for("react.suspense"), rs = Symbol.for("react.suspense_list"), du = Symbol.for("react.memo"), At = Symbol.for("react.lazy"), Bd = Symbol.for("react.offscreen"), Sa = Symbol.iterator;
function cr(e) {
  return e === null || typeof e != "object" ? null : (e = Sa && e[Sa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var le = Object.assign, yi;
function Cr(e) {
  if (yi === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    yi = t && t[1] || "";
  }
  return `
` + yi + e;
}
var gi = !1;
function vi(e, t) {
  if (!e || gi) return "";
  gi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (a) {
        var r = a;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (a) {
        r = a;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var o = a.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, s = l.length - 1; 1 <= i && 0 <= s && o[i] !== l[s]; ) s--;
      for (; 1 <= i && 0 <= s; i--, s--) if (o[i] !== l[s]) {
        if (i !== 1 || s !== 1)
          do
            if (i--, s--, 0 > s || o[i] !== l[s]) {
              var u = `
` + o[i].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= i && 0 <= s);
        break;
      }
    }
  } finally {
    gi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function Em(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr("Lazy");
    case 13:
      return Cr("Suspense");
    case 19:
      return Cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = vi(e.type, !1), e;
    case 11:
      return e = vi(e.type.render, !1), e;
    case 1:
      return e = vi(e.type, !0), e;
    default:
      return "";
  }
}
function os(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ln:
      return "Fragment";
    case Fn:
      return "Portal";
    case ts:
      return "Profiler";
    case au:
      return "StrictMode";
    case ns:
      return "Suspense";
    case rs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Vd:
      return (e.displayName || "Context") + ".Consumer";
    case Wd:
      return (e._context.displayName || "Context") + ".Provider";
    case cu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case du:
      return t = e.displayName || null, t !== null ? t : os(e.type) || "Memo";
    case At:
      t = e._payload, e = e._init;
      try {
        return os(e(t));
      } catch {
      }
  }
  return null;
}
function $m(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return os(t);
    case 8:
      return t === au ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function tn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Hd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Pm(e) {
  var t = Hd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, l.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function wo(e) {
  e._valueTracker || (e._valueTracker = Pm(e));
}
function Qd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Hd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function fl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ls(e, t) {
  var n = t.checked;
  return le({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ca(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = tn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Yd(e, t) {
  t = t.checked, t != null && uu(e, "checked", t, !1);
}
function is(e, t) {
  Yd(e, t);
  var n = tn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ss(e, t.type, n) : t.hasOwnProperty("defaultValue") && ss(e, t.type, tn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _a(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ss(e, t, n) {
  (t !== "number" || fl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _r = Array.isArray;
function Qn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + tn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function us(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return le({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ea(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (_r(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: tn(n) };
}
function Xd(e, t) {
  var n = tn(t.value), r = tn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Kd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function as(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Kd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xo, Gd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (xo = xo || document.createElement("div"), xo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Nm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rr).forEach(function(e) {
  Nm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Rr[t] = Rr[e];
  });
});
function Jd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Rr.hasOwnProperty(e) && Rr[e] ? ("" + t).trim() : t + "px";
}
function Zd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Jd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Tm = le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function cs(e, t) {
  if (t) {
    if (Tm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function ds(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fs = null;
function fu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ps = null, Yn = null, Xn = null;
function Pa(e) {
  if (e = po(e)) {
    if (typeof ps != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Gl(t), ps(e.stateNode, e.type, t));
  }
}
function qd(e) {
  Yn ? Xn ? Xn.push(e) : Xn = [e] : Yn = e;
}
function ef() {
  if (Yn) {
    var e = Yn, t = Xn;
    if (Xn = Yn = null, Pa(e), t) for (e = 0; e < t.length; e++) Pa(t[e]);
  }
}
function tf(e, t) {
  return e(t);
}
function nf() {
}
var wi = !1;
function rf(e, t, n) {
  if (wi) return e(t, n);
  wi = !0;
  try {
    return tf(e, t, n);
  } finally {
    wi = !1, (Yn !== null || Xn !== null) && (nf(), ef());
  }
}
function Br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var hs = !1;
if (Tt) try {
  var dr = {};
  Object.defineProperty(dr, "passive", { get: function() {
    hs = !0;
  } }), window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr);
} catch {
  hs = !1;
}
function Mm(e, t, n, r, o, l, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var jr = !1, pl = null, hl = !1, ms = null, Rm = { onError: function(e) {
  jr = !0, pl = e;
} };
function jm(e, t, n, r, o, l, i, s, u) {
  jr = !1, pl = null, Mm.apply(Rm, arguments);
}
function zm(e, t, n, r, o, l, i, s, u) {
  if (jm.apply(this, arguments), jr) {
    if (jr) {
      var a = pl;
      jr = !1, pl = null;
    } else throw Error(S(198));
    hl || (hl = !0, ms = a);
  }
}
function Rn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function of(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Na(e) {
  if (Rn(e) !== e) throw Error(S(188));
}
function Fm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Rn(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Na(o), e;
        if (l === r) return Na(o), t;
        l = l.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = o, r = l;
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          i = !0, n = o, r = l;
          break;
        }
        if (s === r) {
          i = !0, r = o, n = l;
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (s === r) {
            i = !0, r = l, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function lf(e) {
  return e = Fm(e), e !== null ? sf(e) : null;
}
function sf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var uf = Ge.unstable_scheduleCallback, Ta = Ge.unstable_cancelCallback, Lm = Ge.unstable_shouldYield, Dm = Ge.unstable_requestPaint, ae = Ge.unstable_now, Om = Ge.unstable_getCurrentPriorityLevel, pu = Ge.unstable_ImmediatePriority, af = Ge.unstable_UserBlockingPriority, ml = Ge.unstable_NormalPriority, Im = Ge.unstable_LowPriority, cf = Ge.unstable_IdlePriority, Ql = null, wt = null;
function Am(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function") try {
    wt.onCommitFiberRoot(Ql, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ct = Math.clz32 ? Math.clz32 : Wm, Um = Math.log, bm = Math.LN2;
function Wm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Um(e) / bm | 0) | 0;
}
var ko = 64, So = 4194304;
function Er(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? r = Er(s) : (l &= i, l !== 0 && (r = Er(l)));
  } else i = n & ~o, i !== 0 ? r = Er(i) : l !== 0 && (r = Er(l));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ct(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Vm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Bm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - ct(l), s = 1 << i, u = o[i];
    u === -1 ? (!(s & n) || s & r) && (o[i] = Vm(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s;
  }
}
function ys(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function df() {
  var e = ko;
  return ko <<= 1, !(ko & 4194240) && (ko = 64), e;
}
function xi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function co(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ct(t), e[t] = n;
}
function Hm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ct(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function hu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Q = 0;
function ff(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var pf, mu, hf, mf, yf, gs = !1, Co = [], Yt = null, Xt = null, Kt = null, Hr = /* @__PURE__ */ new Map(), Qr = /* @__PURE__ */ new Map(), bt = [], Qm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ma(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yt = null;
      break;
    case "dragenter":
    case "dragleave":
      Xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      Hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qr.delete(t.pointerId);
  }
}
function fr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = po(t), t !== null && mu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Ym(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Yt = fr(Yt, e, t, n, r, o), !0;
    case "dragenter":
      return Xt = fr(Xt, e, t, n, r, o), !0;
    case "mouseover":
      return Kt = fr(Kt, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return Hr.set(l, fr(Hr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, Qr.set(l, fr(Qr.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function gf(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = Rn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = of(n), t !== null) {
          e.blockedOn = t, yf(e.priority, function() {
            hf(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ho(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fs = r, n.target.dispatchEvent(r), fs = null;
    } else return t = po(n), t !== null && mu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ra(e, t, n) {
  Ho(e) && n.delete(t);
}
function Xm() {
  gs = !1, Yt !== null && Ho(Yt) && (Yt = null), Xt !== null && Ho(Xt) && (Xt = null), Kt !== null && Ho(Kt) && (Kt = null), Hr.forEach(Ra), Qr.forEach(Ra);
}
function pr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, gs || (gs = !0, Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, Xm)));
}
function Yr(e) {
  function t(o) {
    return pr(o, e);
  }
  if (0 < Co.length) {
    pr(Co[0], e);
    for (var n = 1; n < Co.length; n++) {
      var r = Co[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Yt !== null && pr(Yt, e), Xt !== null && pr(Xt, e), Kt !== null && pr(Kt, e), Hr.forEach(t), Qr.forEach(t), n = 0; n < bt.length; n++) r = bt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bt.length && (n = bt[0], n.blockedOn === null); ) gf(n), n.blockedOn === null && bt.shift();
}
var Kn = Lt.ReactCurrentBatchConfig, gl = !0;
function Km(e, t, n, r) {
  var o = Q, l = Kn.transition;
  Kn.transition = null;
  try {
    Q = 1, yu(e, t, n, r);
  } finally {
    Q = o, Kn.transition = l;
  }
}
function Gm(e, t, n, r) {
  var o = Q, l = Kn.transition;
  Kn.transition = null;
  try {
    Q = 4, yu(e, t, n, r);
  } finally {
    Q = o, Kn.transition = l;
  }
}
function yu(e, t, n, r) {
  if (gl) {
    var o = vs(e, t, n, r);
    if (o === null) Mi(e, t, r, vl, n), Ma(e, r);
    else if (Ym(o, e, t, n, r)) r.stopPropagation();
    else if (Ma(e, r), t & 4 && -1 < Qm.indexOf(e)) {
      for (; o !== null; ) {
        var l = po(o);
        if (l !== null && pf(l), l = vs(e, t, n, r), l === null && Mi(e, t, r, vl, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Mi(e, t, r, null, n);
  }
}
var vl = null;
function vs(e, t, n, r) {
  if (vl = null, e = fu(r), e = vn(e), e !== null) if (t = Rn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = of(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return vl = e, null;
}
function vf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Om()) {
        case pu:
          return 1;
        case af:
          return 4;
        case ml:
        case Im:
          return 16;
        case cf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null, gu = null, Qo = null;
function wf() {
  if (Qo) return Qo;
  var e, t = gu, n = t.length, r, o = "value" in Vt ? Vt.value : Vt.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++) ;
  return Qo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Yo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _o() {
  return !0;
}
function ja() {
  return !1;
}
function Ze(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? _o : ja, this.isPropagationStopped = ja, this;
  }
  return le(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _o);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _o);
  }, persist: function() {
  }, isPersistent: _o }), t;
}
var ir = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, vu = Ze(ir), fo = le({}, ir, { view: 0, detail: 0 }), Jm = Ze(fo), ki, Si, hr, Yl = le({}, fo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== hr && (hr && e.type === "mousemove" ? (ki = e.screenX - hr.screenX, Si = e.screenY - hr.screenY) : Si = ki = 0, hr = e), ki);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Si;
} }), za = Ze(Yl), Zm = le({}, Yl, { dataTransfer: 0 }), qm = Ze(Zm), e0 = le({}, fo, { relatedTarget: 0 }), Ci = Ze(e0), t0 = le({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), n0 = Ze(t0), r0 = le({}, ir, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), o0 = Ze(r0), l0 = le({}, ir, { data: 0 }), Fa = Ze(l0), i0 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, s0 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, u0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function a0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = u0[e]) ? !!t[e] : !1;
}
function wu() {
  return a0;
}
var c0 = le({}, fo, { key: function(e) {
  if (e.key) {
    var t = i0[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Yo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? s0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wu, charCode: function(e) {
  return e.type === "keypress" ? Yo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Yo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), d0 = Ze(c0), f0 = le({}, Yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), La = Ze(f0), p0 = le({}, fo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wu }), h0 = Ze(p0), m0 = le({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), y0 = Ze(m0), g0 = le({}, Yl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), v0 = Ze(g0), w0 = [9, 13, 27, 32], xu = Tt && "CompositionEvent" in window, zr = null;
Tt && "documentMode" in document && (zr = document.documentMode);
var x0 = Tt && "TextEvent" in window && !zr, xf = Tt && (!xu || zr && 8 < zr && 11 >= zr), Da = " ", Oa = !1;
function kf(e, t) {
  switch (e) {
    case "keyup":
      return w0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Sf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function k0(e, t) {
  switch (e) {
    case "compositionend":
      return Sf(t);
    case "keypress":
      return t.which !== 32 ? null : (Oa = !0, Da);
    case "textInput":
      return e = t.data, e === Da && Oa ? null : e;
    default:
      return null;
  }
}
function S0(e, t) {
  if (Dn) return e === "compositionend" || !xu && kf(e, t) ? (e = wf(), Qo = gu = Vt = null, Dn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var C0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!C0[e.type] : t === "textarea";
}
function Cf(e, t, n, r) {
  qd(r), t = wl(t, "onChange"), 0 < t.length && (n = new vu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Fr = null, Xr = null;
function _0(e) {
  Ff(e, 0);
}
function Xl(e) {
  var t = An(e);
  if (Qd(t)) return e;
}
function E0(e, t) {
  if (e === "change") return t;
}
var _f = !1;
if (Tt) {
  var _i;
  if (Tt) {
    var Ei = "oninput" in document;
    if (!Ei) {
      var Aa = document.createElement("div");
      Aa.setAttribute("oninput", "return;"), Ei = typeof Aa.oninput == "function";
    }
    _i = Ei;
  } else _i = !1;
  _f = _i && (!document.documentMode || 9 < document.documentMode);
}
function Ua() {
  Fr && (Fr.detachEvent("onpropertychange", Ef), Xr = Fr = null);
}
function Ef(e) {
  if (e.propertyName === "value" && Xl(Xr)) {
    var t = [];
    Cf(t, Xr, e, fu(e)), rf(_0, t);
  }
}
function $0(e, t, n) {
  e === "focusin" ? (Ua(), Fr = t, Xr = n, Fr.attachEvent("onpropertychange", Ef)) : e === "focusout" && Ua();
}
function P0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xl(Xr);
}
function N0(e, t) {
  if (e === "click") return Xl(t);
}
function T0(e, t) {
  if (e === "input" || e === "change") return Xl(t);
}
function M0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ft = typeof Object.is == "function" ? Object.is : M0;
function Kr(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!es.call(t, o) || !ft(e[o], t[o])) return !1;
  }
  return !0;
}
function ba(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wa(e, t) {
  var n = ba(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ba(n);
  }
}
function $f(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $f(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Pf() {
  for (var e = window, t = fl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fl(e.document);
  }
  return t;
}
function ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function R0(e) {
  var t = Pf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && $f(n.ownerDocument.documentElement, n)) {
    if (r !== null && ku(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Wa(n, l);
        var i = Wa(
          n,
          r
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var j0 = Tt && "documentMode" in document && 11 >= document.documentMode, On = null, ws = null, Lr = null, xs = !1;
function Va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xs || On == null || On !== fl(r) || (r = On, "selectionStart" in r && ku(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Lr && Kr(Lr, r) || (Lr = r, r = wl(ws, "onSelect"), 0 < r.length && (t = new vu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = On)));
}
function Eo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var In = { animationend: Eo("Animation", "AnimationEnd"), animationiteration: Eo("Animation", "AnimationIteration"), animationstart: Eo("Animation", "AnimationStart"), transitionend: Eo("Transition", "TransitionEnd") }, $i = {}, Nf = {};
Tt && (Nf = document.createElement("div").style, "AnimationEvent" in window || (delete In.animationend.animation, delete In.animationiteration.animation, delete In.animationstart.animation), "TransitionEvent" in window || delete In.transitionend.transition);
function Kl(e) {
  if ($i[e]) return $i[e];
  if (!In[e]) return e;
  var t = In[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nf) return $i[e] = t[n];
  return e;
}
var Tf = Kl("animationend"), Mf = Kl("animationiteration"), Rf = Kl("animationstart"), jf = Kl("transitionend"), zf = /* @__PURE__ */ new Map(), Ba = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function on(e, t) {
  zf.set(e, t), Mn(t, [e]);
}
for (var Pi = 0; Pi < Ba.length; Pi++) {
  var Ni = Ba[Pi], z0 = Ni.toLowerCase(), F0 = Ni[0].toUpperCase() + Ni.slice(1);
  on(z0, "on" + F0);
}
on(Tf, "onAnimationEnd");
on(Mf, "onAnimationIteration");
on(Rf, "onAnimationStart");
on("dblclick", "onDoubleClick");
on("focusin", "onFocus");
on("focusout", "onBlur");
on(jf, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
Mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), L0 = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
function Ha(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, zm(r, t, void 0, e), e.currentTarget = null;
}
function Ff(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var s = r[i], u = s.instance, a = s.currentTarget;
        if (s = s.listener, u !== l && o.isPropagationStopped()) break e;
        Ha(o, s, a), l = u;
      }
      else for (i = 0; i < r.length; i++) {
        if (s = r[i], u = s.instance, a = s.currentTarget, s = s.listener, u !== l && o.isPropagationStopped()) break e;
        Ha(o, s, a), l = u;
      }
    }
  }
  if (hl) throw e = ms, hl = !1, ms = null, e;
}
function J(e, t) {
  var n = t[Es];
  n === void 0 && (n = t[Es] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Lf(t, e, 2, !1), n.add(r));
}
function Ti(e, t, n) {
  var r = 0;
  t && (r |= 4), Lf(n, e, r, t);
}
var $o = "_reactListening" + Math.random().toString(36).slice(2);
function Gr(e) {
  if (!e[$o]) {
    e[$o] = !0, bd.forEach(function(n) {
      n !== "selectionchange" && (L0.has(n) || Ti(n, !1, e), Ti(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$o] || (t[$o] = !0, Ti("selectionchange", !1, t));
  }
}
function Lf(e, t, n, r) {
  switch (vf(t)) {
    case 1:
      var o = Km;
      break;
    case 4:
      o = Gm;
      break;
    default:
      o = yu;
  }
  n = o.bind(null, t, n, e), o = void 0, !hs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Mi(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var s = r.stateNode.containerInfo;
      if (s === o || s.nodeType === 8 && s.parentNode === o) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var u = i.tag;
        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
        i = i.return;
      }
      for (; s !== null; ) {
        if (i = vn(s), i === null) return;
        if (u = i.tag, u === 5 || u === 6) {
          r = l = i;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  rf(function() {
    var a = l, p = fu(n), h = [];
    e: {
      var m = zf.get(e);
      if (m !== void 0) {
        var v = vu, y = e;
        switch (e) {
          case "keypress":
            if (Yo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = d0;
            break;
          case "focusin":
            y = "focus", v = Ci;
            break;
          case "focusout":
            y = "blur", v = Ci;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ci;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = za;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = qm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = h0;
            break;
          case Tf:
          case Mf:
          case Rf:
            v = n0;
            break;
          case jf:
            v = y0;
            break;
          case "scroll":
            v = Jm;
            break;
          case "wheel":
            v = v0;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = o0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = La;
        }
        var x = (t & 4) !== 0, k = !x && e === "scroll", d = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var w = f.stateNode;
          if (f.tag === 5 && w !== null && (f = w, d !== null && (w = Br(c, d), w != null && x.push(Jr(c, w, f)))), k) break;
          c = c.return;
        }
        0 < x.length && (m = new v(m, y, null, n, p), h.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== fs && (y = n.relatedTarget || n.fromElement) && (vn(y) || y[Mt])) break e;
        if ((v || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = a, y = y ? vn(y) : null, y !== null && (k = Rn(y), y !== k || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = a), v !== y)) {
          if (x = za, w = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = La, w = "onPointerLeave", d = "onPointerEnter", c = "pointer"), k = v == null ? m : An(v), f = y == null ? m : An(y), m = new x(w, c + "leave", v, n, p), m.target = k, m.relatedTarget = f, w = null, vn(p) === a && (x = new x(d, c + "enter", y, n, p), x.target = f, x.relatedTarget = k, w = x), k = w, v && y) t: {
            for (x = v, d = y, c = 0, f = x; f; f = jn(f)) c++;
            for (f = 0, w = d; w; w = jn(w)) f++;
            for (; 0 < c - f; ) x = jn(x), c--;
            for (; 0 < f - c; ) d = jn(d), f--;
            for (; c--; ) {
              if (x === d || d !== null && x === d.alternate) break t;
              x = jn(x), d = jn(d);
            }
            x = null;
          }
          else x = null;
          v !== null && Qa(h, m, v, x, !1), y !== null && k !== null && Qa(h, k, y, x, !0);
        }
      }
      e: {
        if (m = a ? An(a) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file") var C = E0;
        else if (Ia(m)) if (_f) C = T0;
        else {
          C = P0;
          var $ = $0;
        }
        else (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = N0);
        if (C && (C = C(e, a))) {
          Cf(h, C, n, p);
          break e;
        }
        $ && $(e, m, a), e === "focusout" && ($ = m._wrapperState) && $.controlled && m.type === "number" && ss(m, "number", m.value);
      }
      switch ($ = a ? An(a) : window, e) {
        case "focusin":
          (Ia($) || $.contentEditable === "true") && (On = $, ws = a, Lr = null);
          break;
        case "focusout":
          Lr = ws = On = null;
          break;
        case "mousedown":
          xs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xs = !1, Va(h, n, p);
          break;
        case "selectionchange":
          if (j0) break;
        case "keydown":
        case "keyup":
          Va(h, n, p);
      }
      var P;
      if (xu) e: {
        switch (e) {
          case "compositionstart":
            var M = "onCompositionStart";
            break e;
          case "compositionend":
            M = "onCompositionEnd";
            break e;
          case "compositionupdate":
            M = "onCompositionUpdate";
            break e;
        }
        M = void 0;
      }
      else Dn ? kf(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M && (xf && n.locale !== "ko" && (Dn || M !== "onCompositionStart" ? M === "onCompositionEnd" && Dn && (P = wf()) : (Vt = p, gu = "value" in Vt ? Vt.value : Vt.textContent, Dn = !0)), $ = wl(a, M), 0 < $.length && (M = new Fa(M, e, null, n, p), h.push({ event: M, listeners: $ }), P ? M.data = P : (P = Sf(n), P !== null && (M.data = P)))), (P = x0 ? k0(e, n) : S0(e, n)) && (a = wl(a, "onBeforeInput"), 0 < a.length && (p = new Fa("onBeforeInput", "beforeinput", null, n, p), h.push({ event: p, listeners: a }), p.data = P));
    }
    Ff(h, t);
  });
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = Br(e, n), l != null && r.unshift(Jr(e, l, o)), l = Br(e, t), l != null && r.push(Jr(e, l, o))), e = e.return;
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qa(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n, u = s.alternate, a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 && a !== null && (s = a, o ? (u = Br(n, l), u != null && i.unshift(Jr(n, u, s))) : o || (u = Br(n, l), u != null && i.push(Jr(n, u, s)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var D0 = /\r\n?/g, O0 = /\u0000|\uFFFD/g;
function Ya(e) {
  return (typeof e == "string" ? e : "" + e).replace(D0, `
`).replace(O0, "");
}
function Po(e, t, n) {
  if (t = Ya(t), Ya(e) !== t && n) throw Error(S(425));
}
function xl() {
}
var ks = null, Ss = null;
function Cs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _s = typeof setTimeout == "function" ? setTimeout : void 0, I0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Xa = typeof Promise == "function" ? Promise : void 0, A0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xa < "u" ? function(e) {
  return Xa.resolve(null).then(e).catch(U0);
} : _s;
function U0(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ri(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Yr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Yr(t);
}
function Gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ka(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sr = Math.random().toString(36).slice(2), vt = "__reactFiber$" + sr, Zr = "__reactProps$" + sr, Mt = "__reactContainer$" + sr, Es = "__reactEvents$" + sr, b0 = "__reactListeners$" + sr, W0 = "__reactHandles$" + sr;
function vn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Mt] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ka(e); e !== null; ) {
        if (n = e[vt]) return n;
        e = Ka(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function po(e) {
  return e = e[vt] || e[Mt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Gl(e) {
  return e[Zr] || null;
}
var $s = [], Un = -1;
function ln(e) {
  return { current: e };
}
function q(e) {
  0 > Un || (e.current = $s[Un], $s[Un] = null, Un--);
}
function K(e, t) {
  Un++, $s[Un] = e.current, e.current = t;
}
var nn = {}, Ee = ln(nn), Oe = ln(!1), En = nn;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return nn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n) o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ie(e) {
  return e = e.childContextTypes, e != null;
}
function kl() {
  q(Oe), q(Ee);
}
function Ga(e, t, n) {
  if (Ee.current !== nn) throw Error(S(168));
  K(Ee, t), K(Oe, n);
}
function Df(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(S(108, $m(e) || "Unknown", o));
  return le({}, n, r);
}
function Sl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || nn, En = Ee.current, K(Ee, e), K(Oe, Oe.current), !0;
}
function Ja(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = Df(e, t, En), r.__reactInternalMemoizedMergedChildContext = e, q(Oe), q(Ee), K(Ee, e)) : q(Oe), K(Oe, n);
}
var Et = null, Jl = !1, ji = !1;
function Of(e) {
  Et === null ? Et = [e] : Et.push(e);
}
function V0(e) {
  Jl = !0, Of(e);
}
function sn() {
  if (!ji && Et !== null) {
    ji = !0;
    var e = 0, t = Q;
    try {
      var n = Et;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Et = null, Jl = !1;
    } catch (o) {
      throw Et !== null && (Et = Et.slice(e + 1)), uf(pu, sn), o;
    } finally {
      Q = t, ji = !1;
    }
  }
  return null;
}
var bn = [], Wn = 0, Cl = null, _l = 0, qe = [], et = 0, $n = null, $t = 1, Pt = "";
function fn(e, t) {
  bn[Wn++] = _l, bn[Wn++] = Cl, Cl = e, _l = t;
}
function If(e, t, n) {
  qe[et++] = $t, qe[et++] = Pt, qe[et++] = $n, $n = e;
  var r = $t;
  e = Pt;
  var o = 32 - ct(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - ct(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, $t = 1 << 32 - ct(t) + o | n << o | r, Pt = l + e;
  } else $t = 1 << l | n << o | r, Pt = e;
}
function Su(e) {
  e.return !== null && (fn(e, 1), If(e, 1, 0));
}
function Cu(e) {
  for (; e === Cl; ) Cl = bn[--Wn], bn[Wn] = null, _l = bn[--Wn], bn[Wn] = null;
  for (; e === $n; ) $n = qe[--et], qe[et] = null, Pt = qe[--et], qe[et] = null, $t = qe[--et], qe[et] = null;
}
var Ke = null, Xe = null, te = !1, ut = null;
function Af(e, t) {
  var n = tt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Za(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ke = e, Xe = Gt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ke = e, Xe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = $n !== null ? { id: $t, overflow: Pt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ke = e, Xe = null, !0) : !1;
    default:
      return !1;
  }
}
function Ps(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ns(e) {
  if (te) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!Za(e, t)) {
        if (Ps(e)) throw Error(S(418));
        t = Gt(n.nextSibling);
        var r = Ke;
        t && Za(e, t) ? Af(r, n) : (e.flags = e.flags & -4097 | 2, te = !1, Ke = e);
      }
    } else {
      if (Ps(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, te = !1, Ke = e;
    }
  }
}
function qa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ke = e;
}
function No(e) {
  if (e !== Ke) return !1;
  if (!te) return qa(e), te = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Cs(e.type, e.memoizedProps)), t && (t = Xe)) {
    if (Ps(e)) throw Uf(), Error(S(418));
    for (; t; ) Af(e, t), t = Gt(t.nextSibling);
  }
  if (qa(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = Gt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = Ke ? Gt(e.stateNode.nextSibling) : null;
  return !0;
}
function Uf() {
  for (var e = Xe; e; ) e = Gt(e.nextSibling);
}
function er() {
  Xe = Ke = null, te = !1;
}
function _u(e) {
  ut === null ? ut = [e] : ut.push(e);
}
var B0 = Lt.ReactCurrentBatchConfig;
function mr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var o = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var s = o.refs;
        i === null ? delete s[l] : s[l] = i;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function To(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ec(e) {
  var t = e._init;
  return t(e._payload);
}
function bf(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? (d.deletions = [c], d.flags |= 16) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function o(d, c) {
    return d = en(d, c), d.index = 0, d.sibling = null, d;
  }
  function l(d, c, f) {
    return d.index = f, e ? (f = d.alternate, f !== null ? (f = f.index, f < c ? (d.flags |= 2, c) : f) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, f, w) {
    return c === null || c.tag !== 6 ? (c = Ai(f, d.mode, w), c.return = d, c) : (c = o(c, f), c.return = d, c);
  }
  function u(d, c, f, w) {
    var C = f.type;
    return C === Ln ? p(d, c, f.props.children, w, f.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === At && ec(C) === c.type) ? (w = o(c, f.props), w.ref = mr(d, c, f), w.return = d, w) : (w = el(f.type, f.key, f.props, null, d.mode, w), w.ref = mr(d, c, f), w.return = d, w);
  }
  function a(d, c, f, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = Ui(f, d.mode, w), c.return = d, c) : (c = o(c, f.children || []), c.return = d, c);
  }
  function p(d, c, f, w, C) {
    return c === null || c.tag !== 7 ? (c = _n(f, d.mode, w, C), c.return = d, c) : (c = o(c, f), c.return = d, c);
  }
  function h(d, c, f) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ai("" + c, d.mode, f), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case vo:
          return f = el(c.type, c.key, c.props, null, d.mode, f), f.ref = mr(d, null, c), f.return = d, f;
        case Fn:
          return c = Ui(c, d.mode, f), c.return = d, c;
        case At:
          var w = c._init;
          return h(d, w(c._payload), f);
      }
      if (_r(c) || cr(c)) return c = _n(c, d.mode, f, null), c.return = d, c;
      To(d, c);
    }
    return null;
  }
  function m(d, c, f, w) {
    var C = c !== null ? c.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return C !== null ? null : s(d, c, "" + f, w);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case vo:
          return f.key === C ? u(d, c, f, w) : null;
        case Fn:
          return f.key === C ? a(d, c, f, w) : null;
        case At:
          return C = f._init, m(
            d,
            c,
            C(f._payload),
            w
          );
      }
      if (_r(f) || cr(f)) return C !== null ? null : p(d, c, f, w, null);
      To(d, f);
    }
    return null;
  }
  function v(d, c, f, w, C) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return d = d.get(f) || null, s(c, d, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case vo:
          return d = d.get(w.key === null ? f : w.key) || null, u(c, d, w, C);
        case Fn:
          return d = d.get(w.key === null ? f : w.key) || null, a(c, d, w, C);
        case At:
          var $ = w._init;
          return v(d, c, f, $(w._payload), C);
      }
      if (_r(w) || cr(w)) return d = d.get(f) || null, p(c, d, w, C, null);
      To(c, w);
    }
    return null;
  }
  function y(d, c, f, w) {
    for (var C = null, $ = null, P = c, M = c = 0, B = null; P !== null && M < f.length; M++) {
      P.index > M ? (B = P, P = null) : B = P.sibling;
      var L = m(d, P, f[M], w);
      if (L === null) {
        P === null && (P = B);
        break;
      }
      e && P && L.alternate === null && t(d, P), c = l(L, c, M), $ === null ? C = L : $.sibling = L, $ = L, P = B;
    }
    if (M === f.length) return n(d, P), te && fn(d, M), C;
    if (P === null) {
      for (; M < f.length; M++) P = h(d, f[M], w), P !== null && (c = l(P, c, M), $ === null ? C = P : $.sibling = P, $ = P);
      return te && fn(d, M), C;
    }
    for (P = r(d, P); M < f.length; M++) B = v(P, d, M, f[M], w), B !== null && (e && B.alternate !== null && P.delete(B.key === null ? M : B.key), c = l(B, c, M), $ === null ? C = B : $.sibling = B, $ = B);
    return e && P.forEach(function(G) {
      return t(d, G);
    }), te && fn(d, M), C;
  }
  function x(d, c, f, w) {
    var C = cr(f);
    if (typeof C != "function") throw Error(S(150));
    if (f = C.call(f), f == null) throw Error(S(151));
    for (var $ = C = null, P = c, M = c = 0, B = null, L = f.next(); P !== null && !L.done; M++, L = f.next()) {
      P.index > M ? (B = P, P = null) : B = P.sibling;
      var G = m(d, P, L.value, w);
      if (G === null) {
        P === null && (P = B);
        break;
      }
      e && P && G.alternate === null && t(d, P), c = l(G, c, M), $ === null ? C = G : $.sibling = G, $ = G, P = B;
    }
    if (L.done) return n(
      d,
      P
    ), te && fn(d, M), C;
    if (P === null) {
      for (; !L.done; M++, L = f.next()) L = h(d, L.value, w), L !== null && (c = l(L, c, M), $ === null ? C = L : $.sibling = L, $ = L);
      return te && fn(d, M), C;
    }
    for (P = r(d, P); !L.done; M++, L = f.next()) L = v(P, d, M, L.value, w), L !== null && (e && L.alternate !== null && P.delete(L.key === null ? M : L.key), c = l(L, c, M), $ === null ? C = L : $.sibling = L, $ = L);
    return e && P.forEach(function(H) {
      return t(d, H);
    }), te && fn(d, M), C;
  }
  function k(d, c, f, w) {
    if (typeof f == "object" && f !== null && f.type === Ln && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case vo:
          e: {
            for (var C = f.key, $ = c; $ !== null; ) {
              if ($.key === C) {
                if (C = f.type, C === Ln) {
                  if ($.tag === 7) {
                    n(d, $.sibling), c = o($, f.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if ($.elementType === C || typeof C == "object" && C !== null && C.$$typeof === At && ec(C) === $.type) {
                  n(d, $.sibling), c = o($, f.props), c.ref = mr(d, $, f), c.return = d, d = c;
                  break e;
                }
                n(d, $);
                break;
              } else t(d, $);
              $ = $.sibling;
            }
            f.type === Ln ? (c = _n(f.props.children, d.mode, w, f.key), c.return = d, d = c) : (w = el(f.type, f.key, f.props, null, d.mode, w), w.ref = mr(d, c, f), w.return = d, d = w);
          }
          return i(d);
        case Fn:
          e: {
            for ($ = f.key; c !== null; ) {
              if (c.key === $) if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                n(d, c.sibling), c = o(c, f.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = Ui(f, d.mode, w), c.return = d, d = c;
          }
          return i(d);
        case At:
          return $ = f._init, k(d, c, $(f._payload), w);
      }
      if (_r(f)) return y(d, c, f, w);
      if (cr(f)) return x(d, c, f, w);
      To(d, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(d, c.sibling), c = o(c, f), c.return = d, d = c) : (n(d, c), c = Ai(f, d.mode, w), c.return = d, d = c), i(d)) : n(d, c);
  }
  return k;
}
var tr = bf(!0), Wf = bf(!1), El = ln(null), $l = null, Vn = null, Eu = null;
function $u() {
  Eu = Vn = $l = null;
}
function Pu(e) {
  var t = El.current;
  q(El), e._currentValue = t;
}
function Ts(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Gn(e, t) {
  $l = e, Eu = Vn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (De = !0), e.firstContext = null);
}
function rt(e) {
  var t = e._currentValue;
  if (Eu !== e) if (e = { context: e, memoizedValue: t, next: null }, Vn === null) {
    if ($l === null) throw Error(S(308));
    Vn = e, $l.dependencies = { lanes: 0, firstContext: e };
  } else Vn = Vn.next = e;
  return t;
}
var wn = null;
function Nu(e) {
  wn === null ? wn = [e] : wn.push(e);
}
function Vf(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Nu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Rt(e, r);
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ut = !1;
function Tu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Bf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, V & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Rt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Nu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Rt(e, n);
}
function Xo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hu(e, n);
  }
}
function tc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? o = l = i : l = l.next = i, n = n.next;
      } while (n !== null);
      l === null ? o = l = t : l = l.next = t;
    } else o = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Pl(e, t, n, r) {
  var o = e.updateQueue;
  Ut = !1;
  var l = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s, a = u.next;
    u.next = null, i === null ? l = a : i.next = a, i = u;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, s = p.lastBaseUpdate, s !== i && (s === null ? p.firstBaseUpdate = a : s.next = a, p.lastBaseUpdate = u));
  }
  if (l !== null) {
    var h = o.baseState;
    i = 0, p = a = u = null, s = l;
    do {
      var m = s.lane, v = s.eventTime;
      if ((r & m) === m) {
        p !== null && (p = p.next = {
          eventTime: v,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var y = e, x = s;
          switch (m = t, v = n, x.tag) {
            case 1:
              if (y = x.payload, typeof y == "function") {
                h = y.call(v, h, m);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = x.payload, m = typeof y == "function" ? y.call(v, h, m) : y, m == null) break e;
              h = le({}, h, m);
              break e;
            case 2:
              Ut = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [s] : m.push(s));
      } else v = { eventTime: v, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, p === null ? (a = p = v, u = h) : p = p.next = v, i |= m;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        m = s, s = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (!0);
    if (p === null && (u = h), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = p, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    Nn |= i, e.lanes = i, e.memoizedState = h;
  }
}
function nc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(S(191, o));
      o.call(r);
    }
  }
}
var ho = {}, xt = ln(ho), qr = ln(ho), eo = ln(ho);
function xn(e) {
  if (e === ho) throw Error(S(174));
  return e;
}
function Mu(e, t) {
  switch (K(eo, t), K(qr, e), K(xt, ho), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : as(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = as(t, e);
  }
  q(xt), K(xt, t);
}
function nr() {
  q(xt), q(qr), q(eo);
}
function Hf(e) {
  xn(eo.current);
  var t = xn(xt.current), n = as(t, e.type);
  t !== n && (K(qr, e), K(xt, n));
}
function Ru(e) {
  qr.current === e && (q(xt), q(qr));
}
var re = ln(0);
function Nl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var zi = [];
function ju() {
  for (var e = 0; e < zi.length; e++) zi[e]._workInProgressVersionPrimary = null;
  zi.length = 0;
}
var Ko = Lt.ReactCurrentDispatcher, Fi = Lt.ReactCurrentBatchConfig, Pn = 0, oe = null, de = null, he = null, Tl = !1, Dr = !1, to = 0, H0 = 0;
function Se() {
  throw Error(S(321));
}
function zu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ft(e[n], t[n])) return !1;
  return !0;
}
function Fu(e, t, n, r, o, l) {
  if (Pn = l, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ko.current = e === null || e.memoizedState === null ? K0 : G0, e = n(r, o), Dr) {
    l = 0;
    do {
      if (Dr = !1, to = 0, 25 <= l) throw Error(S(301));
      l += 1, he = de = null, t.updateQueue = null, Ko.current = J0, e = n(r, o);
    } while (Dr);
  }
  if (Ko.current = Ml, t = de !== null && de.next !== null, Pn = 0, he = de = oe = null, Tl = !1, t) throw Error(S(300));
  return e;
}
function Lu() {
  var e = to !== 0;
  return to = 0, e;
}
function gt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return he === null ? oe.memoizedState = he = e : he = he.next = e, he;
}
function ot() {
  if (de === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = he === null ? oe.memoizedState : he.next;
  if (t !== null) he = t, de = e;
  else {
    if (e === null) throw Error(S(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, he === null ? oe.memoizedState = he = e : he = he.next = e;
  }
  return he;
}
function no(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Li(e) {
  var t = ot(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = de, o = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = l.next, l.next = i;
    }
    r.baseQueue = o = l, n.pending = null;
  }
  if (o !== null) {
    l = o.next, r = r.baseState;
    var s = i = null, u = null, a = l;
    do {
      var p = a.lane;
      if ((Pn & p) === p) u !== null && (u = u.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var h = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (s = u = h, i = r) : u = u.next = h, oe.lanes |= p, Nn |= p;
      }
      a = a.next;
    } while (a !== null && a !== l);
    u === null ? i = r : u.next = s, ft(r, t.memoizedState) || (De = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, oe.lanes |= l, Nn |= l, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Di(e) {
  var t = ot(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    ft(l, t.memoizedState) || (De = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function Qf() {
}
function Yf(e, t) {
  var n = oe, r = ot(), o = t(), l = !ft(r.memoizedState, o);
  if (l && (r.memoizedState = o, De = !0), r = r.queue, Du(Gf.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || he !== null && he.memoizedState.tag & 1) {
    if (n.flags |= 2048, ro(9, Kf.bind(null, n, r, o, t), void 0, null), me === null) throw Error(S(349));
    Pn & 30 || Xf(n, t, o);
  }
  return o;
}
function Xf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Kf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Jf(t) && Zf(e);
}
function Gf(e, t, n) {
  return n(function() {
    Jf(t) && Zf(e);
  });
}
function Jf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function Zf(e) {
  var t = Rt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function rc(e) {
  var t = gt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: no, lastRenderedState: e }, t.queue = e, e = e.dispatch = X0.bind(null, oe, e), [t.memoizedState, e];
}
function ro(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function qf() {
  return ot().memoizedState;
}
function Go(e, t, n, r) {
  var o = gt();
  oe.flags |= e, o.memoizedState = ro(1 | t, n, void 0, r === void 0 ? null : r);
}
function Zl(e, t, n, r) {
  var o = ot();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (de !== null) {
    var i = de.memoizedState;
    if (l = i.destroy, r !== null && zu(r, i.deps)) {
      o.memoizedState = ro(t, n, l, r);
      return;
    }
  }
  oe.flags |= e, o.memoizedState = ro(1 | t, n, l, r);
}
function oc(e, t) {
  return Go(8390656, 8, e, t);
}
function Du(e, t) {
  return Zl(2048, 8, e, t);
}
function ep(e, t) {
  return Zl(4, 2, e, t);
}
function tp(e, t) {
  return Zl(4, 4, e, t);
}
function np(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function rp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Zl(4, 4, np.bind(null, t, e), n);
}
function Ou() {
}
function op(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function lp(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ip(e, t, n) {
  return Pn & 21 ? (ft(n, t) || (n = df(), oe.lanes |= n, Nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, De = !0), e.memoizedState = n);
}
function Q0(e, t) {
  var n = Q;
  Q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Fi.transition;
  Fi.transition = {};
  try {
    e(!1), t();
  } finally {
    Q = n, Fi.transition = r;
  }
}
function sp() {
  return ot().memoizedState;
}
function Y0(e, t, n) {
  var r = qt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, up(e)) ap(t, n);
  else if (n = Vf(e, t, n, r), n !== null) {
    var o = Ne();
    dt(n, e, r, o), cp(n, t, r);
  }
}
function X0(e, t, n) {
  var r = qt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (up(e)) ap(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var i = t.lastRenderedState, s = l(i, n);
      if (o.hasEagerState = !0, o.eagerState = s, ft(s, i)) {
        var u = t.interleaved;
        u === null ? (o.next = o, Nu(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Vf(e, t, o, r), n !== null && (o = Ne(), dt(n, e, r, o), cp(n, t, r));
  }
}
function up(e) {
  var t = e.alternate;
  return e === oe || t !== null && t === oe;
}
function ap(e, t) {
  Dr = Tl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function cp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hu(e, n);
  }
}
var Ml = { readContext: rt, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, K0 = { readContext: rt, useCallback: function(e, t) {
  return gt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: rt, useEffect: oc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Go(
    4194308,
    4,
    np.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Go(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Go(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = gt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = gt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Y0.bind(null, oe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = gt();
  return e = { current: e }, t.memoizedState = e;
}, useState: rc, useDebugValue: Ou, useDeferredValue: function(e) {
  return gt().memoizedState = e;
}, useTransition: function() {
  var e = rc(!1), t = e[0];
  return e = Q0.bind(null, e[1]), gt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = oe, o = gt();
  if (te) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), me === null) throw Error(S(349));
    Pn & 30 || Xf(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, oc(Gf.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, ro(9, Kf.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = gt(), t = me.identifierPrefix;
  if (te) {
    var n = Pt, r = $t;
    n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = to++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = H0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, G0 = {
  readContext: rt,
  useCallback: op,
  useContext: rt,
  useEffect: Du,
  useImperativeHandle: rp,
  useInsertionEffect: ep,
  useLayoutEffect: tp,
  useMemo: lp,
  useReducer: Li,
  useRef: qf,
  useState: function() {
    return Li(no);
  },
  useDebugValue: Ou,
  useDeferredValue: function(e) {
    var t = ot();
    return ip(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = Li(no)[0], t = ot().memoizedState;
    return [e, t];
  },
  useMutableSource: Qf,
  useSyncExternalStore: Yf,
  useId: sp,
  unstable_isNewReconciler: !1
}, J0 = { readContext: rt, useCallback: op, useContext: rt, useEffect: Du, useImperativeHandle: rp, useInsertionEffect: ep, useLayoutEffect: tp, useMemo: lp, useReducer: Di, useRef: qf, useState: function() {
  return Di(no);
}, useDebugValue: Ou, useDeferredValue: function(e) {
  var t = ot();
  return de === null ? t.memoizedState = e : ip(t, de.memoizedState, e);
}, useTransition: function() {
  var e = Di(no)[0], t = ot().memoizedState;
  return [e, t];
}, useMutableSource: Qf, useSyncExternalStore: Yf, useId: sp, unstable_isNewReconciler: !1 };
function it(e, t) {
  if (e && e.defaultProps) {
    t = le({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ms(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : le({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ql = { isMounted: function(e) {
  return (e = e._reactInternals) ? Rn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), o = qt(e), l = Nt(r, o);
  l.payload = t, n != null && (l.callback = n), t = Jt(e, l, o), t !== null && (dt(t, e, o, r), Xo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), o = qt(e), l = Nt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Jt(e, l, o), t !== null && (dt(t, e, o, r), Xo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ne(), r = qt(e), o = Nt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Jt(e, o, r), t !== null && (dt(t, e, r, n), Xo(t, e, r));
} };
function lc(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Kr(n, r) || !Kr(o, l) : !0;
}
function dp(e, t, n) {
  var r = !1, o = nn, l = t.contextType;
  return typeof l == "object" && l !== null ? l = rt(l) : (o = Ie(t) ? En : Ee.current, r = t.contextTypes, l = (r = r != null) ? qn(e, o) : nn), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ql, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function ic(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ql.enqueueReplaceState(t, t.state, null);
}
function Rs(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Tu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = rt(l) : (l = Ie(t) ? En : Ee.current, o.context = qn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Ms(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ql.enqueueReplaceState(o, o.state, null), Pl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function rr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Em(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Oi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function js(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Z0 = typeof WeakMap == "function" ? WeakMap : Map;
function fp(e, t, n) {
  n = Nt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    jl || (jl = !0, Ws = r), js(e, t);
  }, n;
}
function pp(e, t, n) {
  n = Nt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      js(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    js(e, t), typeof r != "function" && (Zt === null ? Zt = /* @__PURE__ */ new Set([this]) : Zt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function sc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Z0();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = fy.bind(null, e, t, n), t.then(e, e));
}
function uc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ac(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, Jt(n, t, 1))), n.lanes |= 1), e);
}
var q0 = Lt.ReactCurrentOwner, De = !1;
function $e(e, t, n, r) {
  t.child = e === null ? Wf(t, null, n, r) : tr(t, e.child, n, r);
}
function cc(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return Gn(t, o), r = Fu(e, t, n, r, l, o), n = Lu(), e !== null && !De ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (te && n && Su(t), t.flags |= 1, $e(e, t, r, o), t.child);
}
function dc(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !Hu(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, hp(e, t, l, r, o)) : (e = el(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Kr, n(i, r) && e.ref === t.ref) return jt(e, t, o);
  }
  return t.flags |= 1, e = en(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function hp(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Kr(l, r) && e.ref === t.ref) if (De = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (De = !0);
    else return t.lanes = e.lanes, jt(e, t, o);
  }
  return zs(e, t, n, r, o);
}
function mp(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Hn, Ve), Ve |= n;
  else {
    if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Hn, Ve), Ve |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, K(Hn, Ve), Ve |= r;
  }
  else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, K(Hn, Ve), Ve |= r;
  return $e(e, t, o, n), t.child;
}
function yp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function zs(e, t, n, r, o) {
  var l = Ie(n) ? En : Ee.current;
  return l = qn(t, l), Gn(t, o), n = Fu(e, t, n, r, l, o), r = Lu(), e !== null && !De ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (te && r && Su(t), t.flags |= 1, $e(e, t, n, o), t.child);
}
function fc(e, t, n, r, o) {
  if (Ie(n)) {
    var l = !0;
    Sl(t);
  } else l = !1;
  if (Gn(t, o), t.stateNode === null) Jo(e, t), dp(t, n, r), Rs(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, s = t.memoizedProps;
    i.props = s;
    var u = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = rt(a) : (a = Ie(n) ? En : Ee.current, a = qn(t, a));
    var p = n.getDerivedStateFromProps, h = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== a) && ic(t, i, r, a), Ut = !1;
    var m = t.memoizedState;
    i.state = m, Pl(t, r, i, o), u = t.memoizedState, s !== r || m !== u || Oe.current || Ut ? (typeof p == "function" && (Ms(t, n, p, r), u = t.memoizedState), (s = Ut || lc(t, n, s, r, m, u, a)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = a, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Bf(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : it(t.type, s), i.props = a, h = t.pendingProps, m = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = rt(u) : (u = Ie(n) ? En : Ee.current, u = qn(t, u));
    var v = n.getDerivedStateFromProps;
    (p = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== h || m !== u) && ic(t, i, r, u), Ut = !1, m = t.memoizedState, i.state = m, Pl(t, r, i, o);
    var y = t.memoizedState;
    s !== h || m !== y || Oe.current || Ut ? (typeof v == "function" && (Ms(t, n, v, r), y = t.memoizedState), (a = Ut || lc(t, n, a, r, m, y, u) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = u, r = a) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Fs(e, t, n, r, l, o);
}
function Fs(e, t, n, r, o, l) {
  yp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Ja(t, n, !1), jt(e, t, l);
  r = t.stateNode, q0.current = t;
  var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = tr(t, e.child, null, l), t.child = tr(t, null, s, l)) : $e(e, t, s, l), t.memoizedState = r.state, o && Ja(t, n, !0), t.child;
}
function gp(e) {
  var t = e.stateNode;
  t.pendingContext ? Ga(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ga(e, t.context, !1), Mu(e, t.containerInfo);
}
function pc(e, t, n, r, o) {
  return er(), _u(o), t.flags |= 256, $e(e, t, n, r), t.child;
}
var Ls = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ds(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vp(e, t, n) {
  var r = t.pendingProps, o = re.current, l = !1, i = (t.flags & 128) !== 0, s;
  if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(re, o & 1), e === null)
    return Ns(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = ni(i, r, 0, null), e = _n(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ds(n), t.memoizedState = Ls, e) : Iu(t, i));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return ey(e, t, i, r, s, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = en(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = en(s, l) : (l = _n(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Ds(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Ls, r;
  }
  return l = e.child, e = l.sibling, r = en(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Iu(e, t) {
  return t = ni({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Mo(e, t, n, r) {
  return r !== null && _u(r), tr(t, e.child, null, n), e = Iu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ey(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Oi(Error(S(422))), Mo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = ni({ mode: "visible", children: r.children }, o, 0, null), l = _n(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && tr(t, e.child, null, i), t.child.memoizedState = Ds(i), t.memoizedState = Ls, l);
  if (!(t.mode & 1)) return Mo(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, l = Error(S(419)), r = Oi(l, r, void 0), Mo(e, t, i, r);
  }
  if (s = (i & e.childLanes) !== 0, De || s) {
    if (r = me, r !== null) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Rt(e, o), dt(r, e, o, -1));
    }
    return Bu(), r = Oi(Error(S(421))), Mo(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = py.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Xe = Gt(o.nextSibling), Ke = t, te = !0, ut = null, e !== null && (qe[et++] = $t, qe[et++] = Pt, qe[et++] = $n, $t = e.id, Pt = e.overflow, $n = t), t = Iu(t, r.children), t.flags |= 4096, t);
}
function hc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ts(e.return, t, n);
}
function Ii(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function wp(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if ($e(e, t, r.children, n), r = re.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && hc(e, n, t);
      else if (e.tag === 19) hc(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (K(re, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Nl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ii(t, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Nl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Ii(t, !0, n, null, l);
      break;
    case "together":
      Ii(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Jo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Nn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = en(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ty(e, t, n) {
  switch (t.tag) {
    case 3:
      gp(t), er();
      break;
    case 5:
      Hf(t);
      break;
    case 1:
      Ie(t.type) && Sl(t);
      break;
    case 4:
      Mu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      K(El, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? vp(e, t, n) : (K(re, re.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
      K(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return wp(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(re, re.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, mp(e, t, n);
  }
  return jt(e, t, n);
}
var xp, Os, kp, Sp;
xp = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Os = function() {
};
kp = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, xn(xt.current);
    var l = null;
    switch (n) {
      case "input":
        o = ls(e, o), r = ls(e, r), l = [];
        break;
      case "select":
        o = le({}, o, { value: void 0 }), r = le({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = us(e, o), r = us(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xl);
    }
    cs(n, r);
    var i;
    n = null;
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var s = o[a];
      for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Wr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (s = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
        for (i in s) !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in u) u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
      } else n || (l || (l = []), l.push(
        a,
        n
      )), n = u;
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (l = l || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Wr.hasOwnProperty(a) ? (u != null && a === "onScroll" && J("scroll", e), l || s === u || (l = [])) : (l = l || []).push(a, u));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Sp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!te) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function ny(e, t, n) {
  var r = t.pendingProps;
  switch (Cu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ce(t), null;
    case 1:
      return Ie(t.type) && kl(), Ce(t), null;
    case 3:
      return r = t.stateNode, nr(), q(Oe), q(Ee), ju(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (No(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && (Hs(ut), ut = null))), Os(e, t), Ce(t), null;
    case 5:
      Ru(t);
      var o = xn(eo.current);
      if (n = t.type, e !== null && t.stateNode != null) kp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return Ce(t), null;
        }
        if (e = xn(xt.current), No(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[vt] = t, r[Zr] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < $r.length; o++) J($r[o], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J(
                "error",
                r
              ), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              Ca(r, l), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, J("invalid", r);
              break;
            case "textarea":
              Ea(r, l), J("invalid", r);
          }
          cs(n, l), o = null;
          for (var i in l) if (l.hasOwnProperty(i)) {
            var s = l[i];
            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Po(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Po(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : Wr.hasOwnProperty(i) && s != null && i === "onScroll" && J("scroll", r);
          }
          switch (n) {
            case "input":
              wo(r), _a(r, l, !0);
              break;
            case "textarea":
              wo(r), $a(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = xl);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[vt] = t, e[Zr] = r, xp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = ds(n, r), n) {
              case "dialog":
                J("cancel", e), J("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < $r.length; o++) J($r[o], e);
                o = r;
                break;
              case "source":
                J("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                J(
                  "error",
                  e
                ), J("load", e), o = r;
                break;
              case "details":
                J("toggle", e), o = r;
                break;
              case "input":
                Ca(e, r), o = ls(e, r), J("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = le({}, r, { value: void 0 }), J("invalid", e);
                break;
              case "textarea":
                Ea(e, r), o = us(e, r), J("invalid", e);
                break;
              default:
                o = r;
            }
            cs(n, o), s = o;
            for (l in s) if (s.hasOwnProperty(l)) {
              var u = s[l];
              l === "style" ? Zd(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Gd(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Vr(e, u) : typeof u == "number" && Vr(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Wr.hasOwnProperty(l) ? u != null && l === "onScroll" && J("scroll", e) : u != null && uu(e, l, u, i));
            }
            switch (n) {
              case "input":
                wo(e), _a(e, r, !1);
                break;
              case "textarea":
                wo(e), $a(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + tn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? Qn(e, !!r.multiple, l, !1) : r.defaultValue != null && Qn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = xl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) Sp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = xn(eo.current), xn(xt.current), No(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (l = r.nodeValue !== n) && (e = Ke, e !== null)) switch (e.tag) {
            case 3:
              Po(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Po(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          l && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
      }
      return Ce(t), null;
    case 13:
      if (q(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (te && Xe !== null && t.mode & 1 && !(t.flags & 128)) Uf(), er(), t.flags |= 98560, l = !1;
        else if (l = No(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(S(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
            l[vt] = t;
          } else er(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ce(t), l = !1;
        } else ut !== null && (Hs(ut), ut = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? fe === 0 && (fe = 3) : Bu())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
    case 4:
      return nr(), Os(e, t), e === null && Gr(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return Pu(t.type._context), Ce(t), null;
    case 17:
      return Ie(t.type) && kl(), Ce(t), null;
    case 19:
      if (q(re), l = t.memoizedState, l === null) return Ce(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) yr(l, !1);
      else {
        if (fe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Nl(e), i !== null) {
            for (t.flags |= 128, yr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(re, re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        l.tail !== null && ae() > or && (t.flags |= 128, r = !0, yr(l, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Nl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !te) return Ce(t), null;
        } else 2 * ae() - l.renderingStartTime > or && n !== 1073741824 && (t.flags |= 128, r = !0, yr(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ae(), t.sibling = null, n = re.current, K(re, r ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
    case 22:
    case 23:
      return Vu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ve & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function ry(e, t) {
  switch (Cu(t), t.tag) {
    case 1:
      return Ie(t.type) && kl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return nr(), q(Oe), q(Ee), ju(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ru(t), null;
    case 13:
      if (q(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        er();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return q(re), null;
    case 4:
      return nr(), null;
    case 10:
      return Pu(t.type._context), null;
    case 22:
    case 23:
      return Vu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ro = !1, _e = !1, oy = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function Bn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ie(e, t, r);
  }
  else n.current = null;
}
function Is(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var mc = !1;
function ly(e, t) {
  if (ks = gl, e = Pf(), ku(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, l = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, l.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, s = -1, u = -1, a = 0, p = 0, h = e, m = null;
        t: for (; ; ) {
          for (var v; h !== n || o !== 0 && h.nodeType !== 3 || (s = i + o), h !== l || r !== 0 && h.nodeType !== 3 || (u = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (v = h.firstChild) !== null; )
            m = h, h = v;
          for (; ; ) {
            if (h === e) break t;
            if (m === n && ++a === o && (s = i), m === l && ++p === r && (u = i), (v = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = v;
        }
        n = s === -1 || u === -1 ? null : { start: s, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ss = { focusedElem: e, selectionRange: n }, gl = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
  else for (; N !== null; ) {
    t = N;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var x = y.memoizedProps, k = y.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? x : it(t.type, x), k);
            d.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var f = t.stateNode.containerInfo;
          f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(S(163));
      }
    } catch (w) {
      ie(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, N = e;
      break;
    }
    N = t.return;
  }
  return y = mc, mc = !1, y;
}
function Or(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && Is(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ei(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function As(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Cp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Cp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[Zr], delete t[Es], delete t[b0], delete t[W0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function _p(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || _p(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Us(e, t, n), e = e.sibling; e !== null; ) Us(e, t, n), e = e.sibling;
}
function bs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (bs(e, t, n), e = e.sibling; e !== null; ) bs(e, t, n), e = e.sibling;
}
var ye = null, st = !1;
function Dt(e, t, n) {
  for (n = n.child; n !== null; ) Ep(e, t, n), n = n.sibling;
}
function Ep(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function") try {
    wt.onCommitFiberUnmount(Ql, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      _e || Bn(n, t);
    case 6:
      var r = ye, o = st;
      ye = null, Dt(e, t, n), ye = r, st = o, ye !== null && (st ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null && (st ? (e = ye, n = n.stateNode, e.nodeType === 8 ? Ri(e.parentNode, n) : e.nodeType === 1 && Ri(e, n), Yr(e)) : Ri(ye, n.stateNode));
      break;
    case 4:
      r = ye, o = st, ye = n.stateNode.containerInfo, st = !0, Dt(e, t, n), ye = r, st = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!_e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && Is(n, t, i), o = o.next;
        } while (o !== r);
      }
      Dt(e, t, n);
      break;
    case 1:
      if (!_e && (Bn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        ie(n, t, s);
      }
      Dt(e, t, n);
      break;
    case 21:
      Dt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (_e = (r = _e) || n.memoizedState !== null, Dt(e, t, n), _e = r) : Dt(e, t, n);
      break;
    default:
      Dt(e, t, n);
  }
}
function gc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new oy()), t.forEach(function(r) {
      var o = hy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function lt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var l = e, i = t, s = i;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            ye = s.stateNode, st = !1;
            break e;
          case 3:
            ye = s.stateNode.containerInfo, st = !0;
            break e;
          case 4:
            ye = s.stateNode.containerInfo, st = !0;
            break e;
        }
        s = s.return;
      }
      if (ye === null) throw Error(S(160));
      Ep(l, i, o), ye = null, st = !1;
      var u = o.alternate;
      u !== null && (u.return = null), o.return = null;
    } catch (a) {
      ie(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) $p(t, e), t = t.sibling;
}
function $p(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (lt(t, e), pt(e), r & 4) {
        try {
          Or(3, e, e.return), ei(3, e);
        } catch (x) {
          ie(e, e.return, x);
        }
        try {
          Or(5, e, e.return);
        } catch (x) {
          ie(e, e.return, x);
        }
      }
      break;
    case 1:
      lt(t, e), pt(e), r & 512 && n !== null && Bn(n, n.return);
      break;
    case 5:
      if (lt(t, e), pt(e), r & 512 && n !== null && Bn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Vr(o, "");
        } catch (x) {
          ie(e, e.return, x);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          s === "input" && l.type === "radio" && l.name != null && Yd(o, l), ds(s, i);
          var a = ds(s, l);
          for (i = 0; i < u.length; i += 2) {
            var p = u[i], h = u[i + 1];
            p === "style" ? Zd(o, h) : p === "dangerouslySetInnerHTML" ? Gd(o, h) : p === "children" ? Vr(o, h) : uu(o, p, h, a);
          }
          switch (s) {
            case "input":
              is(o, l);
              break;
            case "textarea":
              Xd(o, l);
              break;
            case "select":
              var m = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!l.multiple;
              var v = l.value;
              v != null ? Qn(o, !!l.multiple, v, !1) : m !== !!l.multiple && (l.defaultValue != null ? Qn(
                o,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : Qn(o, !!l.multiple, l.multiple ? [] : "", !1));
          }
          o[Zr] = l;
        } catch (x) {
          ie(e, e.return, x);
        }
      }
      break;
    case 6:
      if (lt(t, e), pt(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (x) {
          ie(e, e.return, x);
        }
      }
      break;
    case 3:
      if (lt(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Yr(t.containerInfo);
      } catch (x) {
        ie(e, e.return, x);
      }
      break;
    case 4:
      lt(t, e), pt(e);
      break;
    case 13:
      lt(t, e), pt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (bu = ae())), r & 4 && gc(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (_e = (a = _e) || p, lt(t, e), _e = a) : lt(t, e), pt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !p && e.mode & 1) for (N = e, p = e.child; p !== null; ) {
          for (h = N = p; N !== null; ) {
            switch (m = N, v = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Or(4, m, m.return);
                break;
              case 1:
                Bn(m, m.return);
                var y = m.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (x) {
                    ie(r, n, x);
                  }
                }
                break;
              case 5:
                Bn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  wc(h);
                  continue;
                }
            }
            v !== null ? (v.return = m, N = v) : wc(h);
          }
          p = p.sibling;
        }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                o = h.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = h.stateNode, u = h.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Jd("display", i));
              } catch (x) {
                ie(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (p === null) try {
              h.stateNode.nodeValue = a ? "" : h.memoizedProps;
            } catch (x) {
              ie(e, e.return, x);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), h = h.return;
          }
          p === h && (p = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      lt(t, e), pt(e), r & 4 && gc(e);
      break;
    case 21:
      break;
    default:
      lt(
        t,
        e
      ), pt(e);
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_p(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Vr(o, ""), r.flags &= -33);
          var l = yc(e);
          bs(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, s = yc(e);
          Us(e, s, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (u) {
      ie(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function iy(e, t, n) {
  N = e, Pp(e);
}
function Pp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var o = N, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Ro;
      if (!i) {
        var s = o.alternate, u = s !== null && s.memoizedState !== null || _e;
        s = Ro;
        var a = _e;
        if (Ro = i, (_e = u) && !a) for (N = o; N !== null; ) i = N, u = i.child, i.tag === 22 && i.memoizedState !== null ? xc(o) : u !== null ? (u.return = i, N = u) : xc(o);
        for (; l !== null; ) N = l, Pp(l), l = l.sibling;
        N = o, Ro = s, _e = a;
      }
      vc(e);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, N = l) : vc(e);
  }
}
function vc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            _e || ei(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !_e) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = t.updateQueue;
            l !== null && nc(t, l, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              nc(t, i, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var a = t.alternate;
              if (a !== null) {
                var p = a.memoizedState;
                if (p !== null) {
                  var h = p.dehydrated;
                  h !== null && Yr(h);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(S(163));
        }
        _e || t.flags & 512 && As(t);
      } catch (m) {
        ie(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function wc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function xc(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ei(4, t);
          } catch (u) {
            ie(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ie(t, o, u);
            }
          }
          var l = t.return;
          try {
            As(t);
          } catch (u) {
            ie(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            As(t);
          } catch (u) {
            ie(t, i, u);
          }
      }
    } catch (u) {
      ie(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, N = s;
      break;
    }
    N = t.return;
  }
}
var sy = Math.ceil, Rl = Lt.ReactCurrentDispatcher, Au = Lt.ReactCurrentOwner, nt = Lt.ReactCurrentBatchConfig, V = 0, me = null, ce = null, ve = 0, Ve = 0, Hn = ln(0), fe = 0, oo = null, Nn = 0, ti = 0, Uu = 0, Ir = null, Le = null, bu = 0, or = 1 / 0, Ct = null, jl = !1, Ws = null, Zt = null, jo = !1, Bt = null, zl = 0, Ar = 0, Vs = null, Zo = -1, qo = 0;
function Ne() {
  return V & 6 ? ae() : Zo !== -1 ? Zo : Zo = ae();
}
function qt(e) {
  return e.mode & 1 ? V & 2 && ve !== 0 ? ve & -ve : B0.transition !== null ? (qo === 0 && (qo = df()), qo) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : vf(e.type)), e) : 1;
}
function dt(e, t, n, r) {
  if (50 < Ar) throw Ar = 0, Vs = null, Error(S(185));
  co(e, n, r), (!(V & 2) || e !== me) && (e === me && (!(V & 2) && (ti |= n), fe === 4 && Wt(e, ve)), Ae(e, r), n === 1 && V === 0 && !(t.mode & 1) && (or = ae() + 500, Jl && sn()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  Bm(e, t);
  var r = yl(e, e === me ? ve : 0);
  if (r === 0) n !== null && Ta(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ta(n), t === 1) e.tag === 0 ? V0(kc.bind(null, e)) : Of(kc.bind(null, e)), A0(function() {
      !(V & 6) && sn();
    }), n = null;
    else {
      switch (ff(r)) {
        case 1:
          n = pu;
          break;
        case 4:
          n = af;
          break;
        case 16:
          n = ml;
          break;
        case 536870912:
          n = cf;
          break;
        default:
          n = ml;
      }
      n = Lp(n, Np.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Np(e, t) {
  if (Zo = -1, qo = 0, V & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (Jn() && e.callbackNode !== n) return null;
  var r = yl(e, e === me ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Fl(e, r);
  else {
    t = r;
    var o = V;
    V |= 2;
    var l = Mp();
    (me !== e || ve !== t) && (Ct = null, or = ae() + 500, Cn(e, t));
    do
      try {
        cy();
        break;
      } catch (s) {
        Tp(e, s);
      }
    while (!0);
    $u(), Rl.current = l, V = o, ce !== null ? t = 0 : (me = null, ve = 0, t = fe);
  }
  if (t !== 0) {
    if (t === 2 && (o = ys(e), o !== 0 && (r = o, t = Bs(e, o))), t === 1) throw n = oo, Cn(e, 0), Wt(e, r), Ae(e, ae()), n;
    if (t === 6) Wt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !uy(o) && (t = Fl(e, r), t === 2 && (l = ys(e), l !== 0 && (r = l, t = Bs(e, l))), t === 1)) throw n = oo, Cn(e, 0), Wt(e, r), Ae(e, ae()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          pn(e, Le, Ct);
          break;
        case 3:
          if (Wt(e, r), (r & 130023424) === r && (t = bu + 500 - ae(), 10 < t)) {
            if (yl(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ne(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = _s(pn.bind(null, e, Le, Ct), t);
            break;
          }
          pn(e, Le, Ct);
          break;
        case 4:
          if (Wt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - ct(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * sy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _s(pn.bind(null, e, Le, Ct), r);
            break;
          }
          pn(e, Le, Ct);
          break;
        case 5:
          pn(e, Le, Ct);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ae(e, ae()), e.callbackNode === n ? Np.bind(null, e) : null;
}
function Bs(e, t) {
  var n = Ir;
  return e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256), e = Fl(e, t), e !== 2 && (t = Le, Le = n, t !== null && Hs(t)), e;
}
function Hs(e) {
  Le === null ? Le = e : Le.push.apply(Le, e);
}
function uy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], l = o.getSnapshot;
        o = o.value;
        try {
          if (!ft(l(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Wt(e, t) {
  for (t &= ~Uu, t &= ~ti, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ct(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function kc(e) {
  if (V & 6) throw Error(S(327));
  Jn();
  var t = yl(e, 0);
  if (!(t & 1)) return Ae(e, ae()), null;
  var n = Fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ys(e);
    r !== 0 && (t = r, n = Bs(e, r));
  }
  if (n === 1) throw n = oo, Cn(e, 0), Wt(e, t), Ae(e, ae()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, pn(e, Le, Ct), Ae(e, ae()), null;
}
function Wu(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    V = n, V === 0 && (or = ae() + 500, Jl && sn());
  }
}
function Tn(e) {
  Bt !== null && Bt.tag === 0 && !(V & 6) && Jn();
  var t = V;
  V |= 1;
  var n = nt.transition, r = Q;
  try {
    if (nt.transition = null, Q = 1, e) return e();
  } finally {
    Q = r, nt.transition = n, V = t, !(V & 6) && sn();
  }
}
function Vu() {
  Ve = Hn.current, q(Hn);
}
function Cn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, I0(n)), ce !== null) for (n = ce.return; n !== null; ) {
    var r = n;
    switch (Cu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && kl();
        break;
      case 3:
        nr(), q(Oe), q(Ee), ju();
        break;
      case 5:
        Ru(r);
        break;
      case 4:
        nr();
        break;
      case 13:
        q(re);
        break;
      case 19:
        q(re);
        break;
      case 10:
        Pu(r.type._context);
        break;
      case 22:
      case 23:
        Vu();
    }
    n = n.return;
  }
  if (me = e, ce = e = en(e.current, null), ve = Ve = t, fe = 0, oo = null, Uu = ti = Nn = 0, Le = Ir = null, wn !== null) {
    for (t = 0; t < wn.length; t++) if (n = wn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, l = n.pending;
      if (l !== null) {
        var i = l.next;
        l.next = o, r.next = i;
      }
      n.pending = r;
    }
    wn = null;
  }
  return e;
}
function Tp(e, t) {
  do {
    var n = ce;
    try {
      if ($u(), Ko.current = Ml, Tl) {
        for (var r = oe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Tl = !1;
      }
      if (Pn = 0, he = de = oe = null, Dr = !1, to = 0, Au.current = null, n === null || n.return === null) {
        fe = 1, oo = t, ce = null;
        break;
      }
      e: {
        var l = e, i = n.return, s = n, u = t;
        if (t = ve, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, p = s, h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m ? (p.updateQueue = m.updateQueue, p.memoizedState = m.memoizedState, p.lanes = m.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var v = uc(i);
          if (v !== null) {
            v.flags &= -257, ac(v, i, s, l, t), v.mode & 1 && sc(l, a, t), t = v, u = a;
            var y = t.updateQueue;
            if (y === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              sc(l, a, t), Bu();
              break e;
            }
            u = Error(S(426));
          }
        } else if (te && s.mode & 1) {
          var k = uc(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), ac(k, i, s, l, t), _u(rr(u, s));
            break e;
          }
        }
        l = u = rr(u, s), fe !== 4 && (fe = 2), Ir === null ? Ir = [l] : Ir.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var d = fp(l, u, t);
              tc(l, d);
              break e;
            case 1:
              s = u;
              var c = l.type, f = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Zt === null || !Zt.has(f)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var w = pp(l, s, t);
                tc(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      jp(n);
    } catch (C) {
      t = C, ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Mp() {
  var e = Rl.current;
  return Rl.current = Ml, e === null ? Ml : e;
}
function Bu() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4), me === null || !(Nn & 268435455) && !(ti & 268435455) || Wt(me, ve);
}
function Fl(e, t) {
  var n = V;
  V |= 2;
  var r = Mp();
  (me !== e || ve !== t) && (Ct = null, Cn(e, t));
  do
    try {
      ay();
      break;
    } catch (o) {
      Tp(e, o);
    }
  while (!0);
  if ($u(), V = n, Rl.current = r, ce !== null) throw Error(S(261));
  return me = null, ve = 0, fe;
}
function ay() {
  for (; ce !== null; ) Rp(ce);
}
function cy() {
  for (; ce !== null && !Lm(); ) Rp(ce);
}
function Rp(e) {
  var t = Fp(e.alternate, e, Ve);
  e.memoizedProps = e.pendingProps, t === null ? jp(e) : ce = t, Au.current = null;
}
function jp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ry(n, t), n !== null) {
        n.flags &= 32767, ce = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        fe = 6, ce = null;
        return;
      }
    } else if (n = ny(n, t, Ve), n !== null) {
      ce = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function pn(e, t, n) {
  var r = Q, o = nt.transition;
  try {
    nt.transition = null, Q = 1, dy(e, t, n, r);
  } finally {
    nt.transition = o, Q = r;
  }
  return null;
}
function dy(e, t, n, r) {
  do
    Jn();
  while (Bt !== null);
  if (V & 6) throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (Hm(e, l), e === me && (ce = me = null, ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jo || (jo = !0, Lp(ml, function() {
    return Jn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = nt.transition, nt.transition = null;
    var i = Q;
    Q = 1;
    var s = V;
    V |= 4, Au.current = null, ly(e, n), $p(n, e), R0(Ss), gl = !!ks, Ss = ks = null, e.current = n, iy(n), Dm(), V = s, Q = i, nt.transition = l;
  } else e.current = n;
  if (jo && (jo = !1, Bt = e, zl = o), l = e.pendingLanes, l === 0 && (Zt = null), Am(n.stateNode), Ae(e, ae()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (jl) throw jl = !1, e = Ws, Ws = null, e;
  return zl & 1 && e.tag !== 0 && Jn(), l = e.pendingLanes, l & 1 ? e === Vs ? Ar++ : (Ar = 0, Vs = e) : Ar = 0, sn(), null;
}
function Jn() {
  if (Bt !== null) {
    var e = ff(zl), t = nt.transition, n = Q;
    try {
      if (nt.transition = null, Q = 16 > e ? 16 : e, Bt === null) var r = !1;
      else {
        if (e = Bt, Bt = null, zl = 0, V & 6) throw Error(S(331));
        var o = V;
        for (V |= 4, N = e.current; N !== null; ) {
          var l = N, i = l.child;
          if (N.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (N = a; N !== null; ) {
                  var p = N;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Or(8, p, l);
                  }
                  var h = p.child;
                  if (h !== null) h.return = p, N = h;
                  else for (; N !== null; ) {
                    p = N;
                    var m = p.sibling, v = p.return;
                    if (Cp(p), p === a) {
                      N = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = v, N = m;
                      break;
                    }
                    N = v;
                  }
                }
              }
              var y = l.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var k = x.sibling;
                    x.sibling = null, x = k;
                  } while (x !== null);
                }
              }
              N = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) i.return = l, N = i;
          else e: for (; N !== null; ) {
            if (l = N, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                Or(9, l, l.return);
            }
            var d = l.sibling;
            if (d !== null) {
              d.return = l.return, N = d;
              break e;
            }
            N = l.return;
          }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          i = N;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) f.return = i, N = f;
          else e: for (i = c; N !== null; ) {
            if (s = N, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  ei(9, s);
              }
            } catch (C) {
              ie(s, s.return, C);
            }
            if (s === i) {
              N = null;
              break e;
            }
            var w = s.sibling;
            if (w !== null) {
              w.return = s.return, N = w;
              break e;
            }
            N = s.return;
          }
        }
        if (V = o, sn(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
          wt.onPostCommitFiberRoot(Ql, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Q = n, nt.transition = t;
    }
  }
  return !1;
}
function Sc(e, t, n) {
  t = rr(n, t), t = fp(e, t, 1), e = Jt(e, t, 1), t = Ne(), e !== null && (co(e, 1, t), Ae(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) Sc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Sc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zt === null || !Zt.has(r))) {
        e = rr(n, e), e = pp(t, e, 1), t = Jt(t, e, 1), e = Ne(), t !== null && (co(t, 1, e), Ae(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function fy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & n, me === e && (ve & n) === n && (fe === 4 || fe === 3 && (ve & 130023424) === ve && 500 > ae() - bu ? Cn(e, 0) : Uu |= n), Ae(e, t);
}
function zp(e, t) {
  t === 0 && (e.mode & 1 ? (t = So, So <<= 1, !(So & 130023424) && (So = 4194304)) : t = 1);
  var n = Ne();
  e = Rt(e, t), e !== null && (co(e, t, n), Ae(e, n));
}
function py(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), zp(e, n);
}
function hy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), zp(e, n);
}
var Fp;
Fp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Oe.current) De = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return De = !1, ty(e, t, n);
    De = !!(e.flags & 131072);
  }
  else De = !1, te && t.flags & 1048576 && If(t, _l, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Jo(e, t), e = t.pendingProps;
      var o = qn(t, Ee.current);
      Gn(t, n), o = Fu(null, t, r, e, o, n);
      var l = Lu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(r) ? (l = !0, Sl(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Tu(t), o.updater = ql, t.stateNode = o, o._reactInternals = t, Rs(t, r, e, n), t = Fs(null, t, r, !0, l, n)) : (t.tag = 0, te && l && Su(t), $e(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Jo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = yy(r), e = it(r, e), o) {
          case 0:
            t = zs(null, t, r, e, n);
            break e;
          case 1:
            t = fc(null, t, r, e, n);
            break e;
          case 11:
            t = cc(null, t, r, e, n);
            break e;
          case 14:
            t = dc(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : it(r, o), zs(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : it(r, o), fc(e, t, r, o, n);
    case 3:
      e: {
        if (gp(t), e === null) throw Error(S(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, Bf(e, t), Pl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
          o = rr(Error(S(423)), t), t = pc(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = rr(Error(S(424)), t), t = pc(e, t, r, n, o);
          break e;
        } else for (Xe = Gt(t.stateNode.containerInfo.firstChild), Ke = t, te = !0, ut = null, n = Wf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (er(), r === o) {
            t = jt(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Hf(t), e === null && Ns(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Cs(r, o) ? i = null : l !== null && Cs(r, l) && (t.flags |= 32), yp(e, t), $e(e, t, i, n), t.child;
    case 6:
      return e === null && Ns(t), null;
    case 13:
      return vp(e, t, n);
    case 4:
      return Mu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tr(t, null, r, n) : $e(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : it(r, o), cc(e, t, r, o, n);
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, K(El, r._currentValue), r._currentValue = i, l !== null) if (ft(l.value, i)) {
          if (l.children === o.children && !Oe.current) {
            t = jt(e, t, n);
            break e;
          }
        } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
          var s = l.dependencies;
          if (s !== null) {
            i = l.child;
            for (var u = s.firstContext; u !== null; ) {
              if (u.context === r) {
                if (l.tag === 1) {
                  u = Nt(-1, n & -n), u.tag = 2;
                  var a = l.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var p = a.pending;
                    p === null ? u.next = u : (u.next = p.next, p.next = u), a.pending = u;
                  }
                }
                l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Ts(
                  l.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
          else if (l.tag === 18) {
            if (i = l.return, i === null) throw Error(S(341));
            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Ts(i, n, t), i = l.sibling;
          } else i = l.child;
          if (i !== null) i.return = l;
          else for (i = l; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (l = i.sibling, l !== null) {
              l.return = i.return, i = l;
              break;
            }
            i = i.return;
          }
          l = i;
        }
        $e(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Gn(t, n), o = rt(o), r = r(o), t.flags |= 1, $e(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = it(r, t.pendingProps), o = it(r.type, o), dc(e, t, r, o, n);
    case 15:
      return hp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : it(r, o), Jo(e, t), t.tag = 1, Ie(r) ? (e = !0, Sl(t)) : e = !1, Gn(t, n), dp(t, r, o), Rs(t, r, o, n), Fs(null, t, r, !0, e, n);
    case 19:
      return wp(e, t, n);
    case 22:
      return mp(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Lp(e, t) {
  return uf(e, t);
}
function my(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function tt(e, t, n, r) {
  return new my(e, t, n, r);
}
function Hu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function yy(e) {
  if (typeof e == "function") return Hu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === cu) return 11;
    if (e === du) return 14;
  }
  return 2;
}
function en(e, t) {
  var n = e.alternate;
  return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function el(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function") Hu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Ln:
      return _n(n.children, o, l, t);
    case au:
      i = 8, o |= 8;
      break;
    case ts:
      return e = tt(12, n, t, o | 2), e.elementType = ts, e.lanes = l, e;
    case ns:
      return e = tt(13, n, t, o), e.elementType = ns, e.lanes = l, e;
    case rs:
      return e = tt(19, n, t, o), e.elementType = rs, e.lanes = l, e;
    case Bd:
      return ni(n, o, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Wd:
          i = 10;
          break e;
        case Vd:
          i = 9;
          break e;
        case cu:
          i = 11;
          break e;
        case du:
          i = 14;
          break e;
        case At:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = tt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function _n(e, t, n, r) {
  return e = tt(7, e, r, t), e.lanes = n, e;
}
function ni(e, t, n, r) {
  return e = tt(22, e, r, t), e.elementType = Bd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ai(e, t, n) {
  return e = tt(6, e, null, t), e.lanes = n, e;
}
function Ui(e, t, n) {
  return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function gy(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xi(0), this.expirationTimes = xi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Qu(e, t, n, r, o, l, i, s, u) {
  return e = new gy(e, t, n, s, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = tt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Tu(l), e;
}
function vy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Dp(e) {
  if (!e) return nn;
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return Df(e, n, t);
  }
  return t;
}
function Op(e, t, n, r, o, l, i, s, u) {
  return e = Qu(n, r, !0, e, o, l, i, s, u), e.context = Dp(null), n = e.current, r = Ne(), o = qt(n), l = Nt(r, o), l.callback = t ?? null, Jt(n, l, o), e.current.lanes = o, co(e, o, r), Ae(e, r), e;
}
function ri(e, t, n, r) {
  var o = t.current, l = Ne(), i = qt(o);
  return n = Dp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Jt(o, t, i), e !== null && (dt(e, o, i, l), Xo(e, o, i)), i;
}
function Ll(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yu(e, t) {
  Cc(e, t), (e = e.alternate) && Cc(e, t);
}
function wy() {
  return null;
}
var Ip = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Xu(e) {
  this._internalRoot = e;
}
oi.prototype.render = Xu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  ri(e, t, null, null);
};
oi.prototype.unmount = Xu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function() {
      ri(null, e, null, null);
    }), t[Mt] = null;
  }
};
function oi(e) {
  this._internalRoot = e;
}
oi.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = mf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++) ;
    bt.splice(n, 0, e), n === 0 && gf(e);
  }
};
function Ku(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function li(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _c() {
}
function xy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var a = Ll(i);
        l.call(a);
      };
    }
    var i = Op(t, r, e, 0, null, !1, !1, "", _c);
    return e._reactRootContainer = i, e[Mt] = i.current, Gr(e.nodeType === 8 ? e.parentNode : e), Tn(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var a = Ll(u);
      s.call(a);
    };
  }
  var u = Qu(e, 0, !1, null, null, !1, !1, "", _c);
  return e._reactRootContainer = u, e[Mt] = u.current, Gr(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
    ri(t, u, n, r);
  }), u;
}
function ii(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var u = Ll(i);
        s.call(u);
      };
    }
    ri(t, i, e, o);
  } else i = xy(n, t, e, o, r);
  return Ll(i);
}
pf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Er(t.pendingLanes);
        n !== 0 && (hu(t, n | 1), Ae(t, ae()), !(V & 6) && (or = ae() + 500, sn()));
      }
      break;
    case 13:
      Tn(function() {
        var r = Rt(e, 1);
        if (r !== null) {
          var o = Ne();
          dt(r, e, 1, o);
        }
      }), Yu(e, 1);
  }
};
mu = function(e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      dt(t, e, 134217728, n);
    }
    Yu(e, 134217728);
  }
};
hf = function(e) {
  if (e.tag === 13) {
    var t = qt(e), n = Rt(e, t);
    if (n !== null) {
      var r = Ne();
      dt(n, e, t, r);
    }
    Yu(e, t);
  }
};
mf = function() {
  return Q;
};
yf = function(e, t) {
  var n = Q;
  try {
    return Q = e, t();
  } finally {
    Q = n;
  }
};
ps = function(e, t, n) {
  switch (t) {
    case "input":
      if (is(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Gl(r);
            if (!o) throw Error(S(90));
            Qd(r), is(r, o);
          }
        }
      }
      break;
    case "textarea":
      Xd(e, n);
      break;
    case "select":
      t = n.value, t != null && Qn(e, !!n.multiple, t, !1);
  }
};
tf = Wu;
nf = Tn;
var ky = { usingClientEntryPoint: !1, Events: [po, An, Gl, qd, ef, Wu] }, gr = { findFiberByHostInstance: vn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sy = { bundleType: gr.bundleType, version: gr.version, rendererPackageName: gr.rendererPackageName, rendererConfig: gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = lf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: gr.findFiberByHostInstance || wy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zo.isDisabled && zo.supportsFiber) try {
    Ql = zo.inject(Sy), wt = zo;
  } catch {
  }
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ky;
Je.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ku(t)) throw Error(S(200));
  return vy(e, t, null, n);
};
Je.createRoot = function(e, t) {
  if (!Ku(e)) throw Error(S(299));
  var n = !1, r = "", o = Ip;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Qu(e, 1, !1, null, null, n, !1, r, o), e[Mt] = t.current, Gr(e.nodeType === 8 ? e.parentNode : e), new Xu(t);
};
Je.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = lf(t), e = e === null ? null : e.stateNode, e;
};
Je.flushSync = function(e) {
  return Tn(e);
};
Je.hydrate = function(e, t, n) {
  if (!li(t)) throw Error(S(200));
  return ii(null, e, t, !0, n);
};
Je.hydrateRoot = function(e, t, n) {
  if (!Ku(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Ip;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Op(t, null, e, 1, n ?? null, o, !1, l, i), e[Mt] = t.current, Gr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new oi(t);
};
Je.render = function(e, t, n) {
  if (!li(t)) throw Error(S(200));
  return ii(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function(e) {
  if (!li(e)) throw Error(S(40));
  return e._reactRootContainer ? (Tn(function() {
    ii(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Mt] = null;
    });
  }), !0) : !1;
};
Je.unstable_batchedUpdates = Wu;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!li(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return ii(e, t, n, !1, r);
};
Je.version = "18.3.1-next-f1338f8080-20240426";
function Ap() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap);
    } catch (e) {
      console.error(e);
    }
}
Ap(), Id.exports = Je;
var Up = Id.exports, Gu, Ec = Up;
Gu = Ec.createRoot, Ec.hydrateRoot;
var Cy = Object.defineProperty, _y = (e, t, n) => t in e ? Cy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Fo = (e, t, n) => _y(e, typeof t != "symbol" ? t + "" : t, n);
const Ey = {
  stringify: (e) => e ? "true" : "false",
  parse: (e) => /^[ty1-9]/i.test(e)
}, $y = {
  stringify: (e) => e.name,
  parse: (e, t, n) => {
    const r = (() => {
      if (typeof window < "u" && e in window)
        return window[e];
      if (typeof global < "u" && e in global)
        return global[e];
    })();
    return typeof r == "function" ? r.bind(n) : void 0;
  }
}, Py = {
  stringify: (e) => JSON.stringify(e),
  parse: (e) => JSON.parse(e)
};
function Ny(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, n, r) => `${n}-${r.toLowerCase()}`
  );
}
function bp(e) {
  return e.replace(/[-:]([a-z])/g, (t, n) => `${n.toUpperCase()}`);
}
const Ty = {
  stringify: (e) => e.name,
  parse: (e, t, n) => {
    const r = (() => {
      const o = bp(t);
      if (typeof n < "u" && o in n.container)
        return n.container[o];
    })();
    return typeof r == "function" ? r.bind(n) : void 0;
  }
}, My = {
  stringify: (e) => `${e}`,
  parse: (e) => parseFloat(e)
}, Ry = {
  stringify: (e) => e,
  parse: (e) => e
}, bi = {
  string: Ry,
  number: My,
  boolean: Ey,
  function: $y,
  method: Ty,
  json: Py
}, vr = Symbol.for("r2wc.render"), Lo = Symbol.for("r2wc.connected"), cn = Symbol.for("r2wc.context"), Ue = Symbol.for("r2wc.props");
function jy(e, t, n) {
  var r, o, l;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []), t.events || (t.events = []);
  const i = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props), s = Array.isArray(t.events) ? t.events.slice() : Object.keys(t.events), u = {}, a = {}, p = {}, h = {};
  for (const v of i) {
    u[v] = Array.isArray(t.props) ? "string" : t.props[v];
    const y = Ny(v);
    p[v] = y, h[y] = v;
  }
  for (const v of s)
    a[v] = Array.isArray(t.events) ? {} : t.events[v];
  class m extends HTMLElement {
    constructor() {
      super(), Fo(this, l, !0), Fo(this, o), Fo(this, r, {}), Fo(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[Ue].container = this.container;
      for (const y of i) {
        const x = p[y], k = this.getAttribute(x), d = u[y], c = d ? bi[d] : null;
        if (d === "method") {
          const f = bp(x);
          Object.defineProperty(this[Ue].container, f, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[Ue][f];
            },
            set(w) {
              this[Ue][f] = w, this[vr]();
            }
          }), this[Ue][y] = c.parse(k, x, this);
        }
        c != null && c.parse && k && (this[Ue][y] = c.parse(k, x, this));
      }
      for (const y of s)
        this[Ue][y] = (x) => {
          const k = y.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(k, { detail: x, ...a[y] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(h);
    }
    connectedCallback() {
      this[Lo] = !0, this[vr]();
    }
    disconnectedCallback() {
      this[Lo] = !1, this[cn] && n.unmount(this[cn]), delete this[cn];
    }
    attributeChangedCallback(y, x, k) {
      const d = h[y], c = u[d], f = c ? bi[c] : null;
      d in u && f != null && f.parse && k && (this[Ue][d] = f.parse(k, y, this), this[vr]());
    }
    [(l = Lo, o = cn, r = Ue, vr)]() {
      this[Lo] && (this[cn] ? n.update(this[cn], this[Ue]) : this[cn] = n.mount(
        this.container,
        e,
        this[Ue]
      ));
    }
  }
  for (const v of i) {
    const y = p[v], x = u[v];
    Object.defineProperty(m.prototype, v, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Ue][v];
      },
      set(k) {
        this[Ue][v] = k;
        const d = x ? bi[x] : null;
        if (d != null && d.stringify) {
          const c = d.stringify(k, y, this);
          this.getAttribute(y) !== c && this.setAttribute(y, c);
        } else
          this[vr]();
      }
    });
  }
  return m;
}
function zy(e, t, n) {
  const r = Gu(e), o = _t.createElement(t, n);
  return r.render(o), {
    root: r,
    ReactComponent: t
  };
}
function Fy({ root: e, ReactComponent: t }, n) {
  const r = _t.createElement(t, n);
  e.render(r);
}
function Ly({ root: e }) {
  e.unmount();
}
function Dy(e, t = {}) {
  return jy(e, t, { mount: zy, update: Fy, unmount: Ly });
}
var Wp = { exports: {} }, si = {};
var Oy = T, Iy = Symbol.for("react.element"), Ay = Symbol.for("react.fragment"), Uy = Object.prototype.hasOwnProperty, by = Oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Wy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vp(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Uy.call(t, r) && !Wy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Iy, type: e, key: l, ref: i, props: o, _owner: by.current };
}
si.Fragment = Ay;
si.jsx = Vp;
si.jsxs = Vp;
Wp.exports = si;
var g = Wp.exports;
var Vy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const By = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ee = (e, t) => {
  const n = T.forwardRef(
    ({
      color: r = "currentColor",
      size: o = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: i,
      className: s = "",
      children: u,
      ...a
    }, p) => T.createElement(
      "svg",
      {
        ref: p,
        ...Vy,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: i ? Number(l) * 24 / Number(o) : l,
        className: ["lucide", `lucide-${By(e)}`, s].join(" "),
        ...a
      },
      [
        ...t.map(([h, m]) => T.createElement(h, m)),
        ...Array.isArray(u) ? u : [u]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
const Bp = ee("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Hy = ee("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Qy = ee("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Yy = ee("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
const Xy = ee("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Ky = ee("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Gy = ee("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
const Jy = ee("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const Hp = ee("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
const Zy = ee("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
const qy = ee("MicOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const eg = ee("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const tg = ee("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const ng = ee("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
const rg = ee("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
const $c = ee("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);
const Pc = ee("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
const og = ee("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const lg = ee("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
const ig = ee("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
const sg = ee("Smile", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const ug = ee("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const ag = ee("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
const cg = ee("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const Qp = ee("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function dg({ isOpen: e, onClick: t, config: n }) {
  const r = `
    fixed bottom-6 right-6 p-4 text-white shadow-lg transition-all duration-300
    ${n.shape === "round" ? "rounded-full" : "rounded-lg"}
  `;
  return /* @__PURE__ */ g.jsx(
    "button",
    {
      onClick: t,
      style: { backgroundColor: n.color },
      className: r,
      children: e ? /* @__PURE__ */ g.jsx(Qp, { className: "h-6 w-6" }) : /* @__PURE__ */ g.jsx(Hp, { className: "h-6 w-6" })
    }
  );
}
const Do = 43200, Nc = 1440, Tc = Symbol.for("constructDateFrom");
function Ju(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Tc in e ? e[Tc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function rn(e, t) {
  return Ju(e, e);
}
let fg = {};
function pg() {
  return fg;
}
function Mc(e) {
  const t = rn(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Zu(e, ...t) {
  const n = Ju.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function tl(e, t) {
  const n = +rn(e) - +rn(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function hg(e) {
  return Ju(e, Date.now());
}
function mg(e, t, n) {
  const [r, o] = Zu(
    n == null ? void 0 : n.in,
    e,
    t
  ), l = r.getFullYear() - o.getFullYear(), i = r.getMonth() - o.getMonth();
  return l * 12 + i;
}
function yg(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function gg(e, t) {
  return +rn(e) - +rn(t);
}
function vg(e, t) {
  const n = rn(e);
  return n.setHours(23, 59, 59, 999), n;
}
function wg(e, t) {
  const n = rn(e), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function xg(e, t) {
  const n = rn(e);
  return +vg(n) == +wg(n);
}
function kg(e, t, n) {
  const [r, o, l] = Zu(
    n == null ? void 0 : n.in,
    e,
    e,
    t
  ), i = tl(o, l), s = Math.abs(
    mg(o, l)
  );
  if (s < 1) return 0;
  o.getMonth() === 1 && o.getDate() > 27 && o.setDate(30), o.setMonth(o.getMonth() - i * s);
  let u = tl(o, l) === -i;
  xg(r) && s === 1 && tl(r, l) === 1 && (u = !1);
  const a = i * (s - +u);
  return a === 0 ? 0 : a;
}
function Sg(e, t, n) {
  const r = gg(e, t) / 1e3;
  return yg(n == null ? void 0 : n.roundingMethod)(r);
}
const Cg = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, _g = (e, t, n) => {
  let r;
  const o = Cg[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Wi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Eg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, $g = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Pg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ng = {
  date: Wi({
    formats: Eg,
    defaultWidth: "full"
  }),
  time: Wi({
    formats: $g,
    defaultWidth: "full"
  }),
  dateTime: Wi({
    formats: Pg,
    defaultWidth: "full"
  })
}, Tg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Mg = (e, t, n, r) => Tg[e];
function wr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const l = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[l];
  };
}
const Rg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, jg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, zg = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Fg = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Lg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Dg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Og = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Ig = {
  ordinalNumber: Og,
  era: wr({
    values: Rg,
    defaultWidth: "wide"
  }),
  quarter: wr({
    values: jg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: wr({
    values: zg,
    defaultWidth: "wide"
  }),
  day: wr({
    values: Fg,
    defaultWidth: "wide"
  }),
  dayPeriod: wr({
    values: Lg,
    defaultWidth: "wide",
    formattingValues: Dg,
    defaultFormattingWidth: "wide"
  })
};
function xr(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], l = t.match(o);
    if (!l)
      return null;
    const i = l[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? Ug(s, (h) => h.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      Ag(s, (h) => h.test(i))
    );
    let a;
    a = e.valueCallback ? e.valueCallback(u) : u, a = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(a)
    ) : a;
    const p = t.slice(i.length);
    return { value: a, rest: p };
  };
}
function Ag(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Ug(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function bg(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], l = t.match(e.parsePattern);
    if (!l) return null;
    let i = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const Wg = /^(\d+)(th|st|nd|rd)?/i, Vg = /\d+/i, Bg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Hg = {
  any: [/^b/i, /^(a|c)/i]
}, Qg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Yg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Xg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Kg = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Gg = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Jg = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Zg = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, qg = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, e1 = {
  ordinalNumber: bg({
    matchPattern: Wg,
    parsePattern: Vg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: xr({
    matchPatterns: Bg,
    defaultMatchWidth: "wide",
    parsePatterns: Hg,
    defaultParseWidth: "any"
  }),
  quarter: xr({
    matchPatterns: Qg,
    defaultMatchWidth: "wide",
    parsePatterns: Yg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xr({
    matchPatterns: Xg,
    defaultMatchWidth: "wide",
    parsePatterns: Kg,
    defaultParseWidth: "any"
  }),
  day: xr({
    matchPatterns: Gg,
    defaultMatchWidth: "wide",
    parsePatterns: Jg,
    defaultParseWidth: "any"
  }),
  dayPeriod: xr({
    matchPatterns: Zg,
    defaultMatchWidth: "any",
    parsePatterns: qg,
    defaultParseWidth: "any"
  })
}, t1 = {
  code: "en-US",
  formatDistance: _g,
  formatLong: Ng,
  formatRelative: Mg,
  localize: Ig,
  match: e1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function n1(e, t, n) {
  const r = pg(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? t1, l = 2520, i = tl(e, t);
  if (isNaN(i)) throw new RangeError("Invalid time value");
  const s = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: i
  }), [u, a] = Zu(
    n == null ? void 0 : n.in,
    ...i > 0 ? [t, e] : [e, t]
  ), p = Sg(a, u), h = (Mc(a) - Mc(u)) / 1e3, m = Math.round((p - h) / 60);
  let v;
  if (m < 2)
    return n != null && n.includeSeconds ? p < 5 ? o.formatDistance("lessThanXSeconds", 5, s) : p < 10 ? o.formatDistance("lessThanXSeconds", 10, s) : p < 20 ? o.formatDistance("lessThanXSeconds", 20, s) : p < 40 ? o.formatDistance("halfAMinute", 0, s) : p < 60 ? o.formatDistance("lessThanXMinutes", 1, s) : o.formatDistance("xMinutes", 1, s) : m === 0 ? o.formatDistance("lessThanXMinutes", 1, s) : o.formatDistance("xMinutes", m, s);
  if (m < 45)
    return o.formatDistance("xMinutes", m, s);
  if (m < 90)
    return o.formatDistance("aboutXHours", 1, s);
  if (m < Nc) {
    const y = Math.round(m / 60);
    return o.formatDistance("aboutXHours", y, s);
  } else {
    if (m < l)
      return o.formatDistance("xDays", 1, s);
    if (m < Do) {
      const y = Math.round(m / Nc);
      return o.formatDistance("xDays", y, s);
    } else if (m < Do * 2)
      return v = Math.round(m / Do), o.formatDistance("aboutXMonths", v, s);
  }
  if (v = kg(a, u), v < 12) {
    const y = Math.round(m / Do);
    return o.formatDistance("xMonths", y, s);
  } else {
    const y = v % 12, x = Math.trunc(v / 12);
    return y < 3 ? o.formatDistance("aboutXYears", x, s) : y < 9 ? o.formatDistance("overXYears", x, s) : o.formatDistance("almostXYears", x + 1, s);
  }
}
function r1(e, t) {
  return n1(e, hg(e), t);
}
function o1({
  onClose: e,
  onToggleMaximize: t,
  isMaximized: n,
  isConnected: r,
  operators: o,
  lastActive: l,
  currentView: i,
  onBackToChat: s,
  onStartNewChat: u,
  onEndChat: a,
  onViewRecentChats: p,
  config: h
}) {
  const [m, v] = T.useState(!1), y = () => {
    switch (i) {
      case "recent-chats":
        return "Recent chats";
      default:
        return h.name;
    }
  }, x = () => o.length > 0 ? "Online" : l ? `Last active ${r1(l, {
    addSuffix: !0
  })}` : "Offline", k = i !== "chat", d = i === "chat";
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      style: { backgroundColor: h.color },
      className: "p-6 rounded-t-lg text-white",
      children: /* @__PURE__ */ g.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-3", children: [
          k && /* @__PURE__ */ g.jsx(
            "button",
            {
              onClick: s,
              className: "p-1 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ g.jsx(Hy, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("h3", { className: "font-semibold text-lg", children: y() }),
            d && /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
              /* @__PURE__ */ g.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full ${o.length > 0 ? "bg-green-400" : "bg-red-400"}`
                }
              ),
              /* @__PURE__ */ g.jsx("p", { className: "text-sm opacity-90", children: x() })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ g.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ g.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ g.jsx(
            "button",
            {
              onClick: () => v(!m),
              className: "p-2 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ g.jsx(ng, { className: "h-4 w-4" })
            }
          ),
          m && /* @__PURE__ */ g.jsxs("div", { className: "absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-48 z-50", children: [
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                onClick: () => {
                  u(), v(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ g.jsx(og, { className: "h-4 w-4" }),
                  "Start New Chat"
                ]
              }
            ),
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                onClick: () => {
                  a(), v(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ g.jsx(lg, { className: "h-4 w-4" }),
                  "End Chat"
                ]
              }
            ),
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                onClick: () => {
                  p(), v(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ g.jsx(Zy, { className: "h-4 w-4" }),
                  "View Recent Chats"
                ]
              }
            ),
            /* @__PURE__ */ g.jsx("hr", {}),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                onClick: () => {
                  t(), v(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: n ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                  /* @__PURE__ */ g.jsx(tg, { className: "h-4 w-4" }),
                  " Minimize"
                ] }) : /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                  /* @__PURE__ */ g.jsx(Jy, { className: "h-4 w-4" }),
                  " Maximize"
                ] })
              }
            ),
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                onClick: () => {
                  e(), v(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ g.jsx(Qp, { className: "h-4 w-4" }),
                  " Close"
                ]
              }
            )
          ] })
        ] }) })
      ] })
    }
  );
}
function l1({
  status: e,
  timestamp: t,
  onRetry: n
}) {
  const r = (l) => new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }).format(new Date(l)), o = () => {
    switch (e) {
      case "sent":
        return /* @__PURE__ */ g.jsx(Ky, { className: "w-3 h-3 text-gray-500" });
      case "read":
        return /* @__PURE__ */ g.jsx(Xy, { className: "w-3 h-3 text-blue-500" });
      case "failed":
        return /* @__PURE__ */ g.jsx(Bp, { className: "w-3 h-3 text-red-500" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-end gap-1 text-xs text-gray-500", children: [
    /* @__PURE__ */ g.jsx("span", { children: r(t) }),
    e && o(),
    e === "failed" && n && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsx("span", { className: "text-red-500", children: "Not sent" }),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          onClick: n,
          className: "text-blue-500 hover:text-blue-700 underline ml-1",
          children: "Retry"
        }
      )
    ] })
  ] });
}
function Yp({ onSubmit: e, config: t }) {
  var a;
  const n = (t.fields || []).reduce((p, h) => (p[h] = "", p), {}), [r, o] = T.useState(n), [l, i] = T.useState(!1), s = (p, h) => {
    o((m) => ({ ...m, [p]: h }));
  }, u = async (p) => {
    p.preventDefault(), i(!0);
    try {
      e(r);
    } finally {
      i(!1);
    }
  };
  return /* @__PURE__ */ g.jsx("div", { className: "py-2", children: /* @__PURE__ */ g.jsx("form", { onSubmit: u, className: "flex items-center gap-3", children: /* @__PURE__ */ g.jsxs("div", { className: "flex-1 flex items-center gap-2", children: [
    (a = t.fields) == null ? void 0 : a.map((p) => /* @__PURE__ */ g.jsx(
      "input",
      {
        type: p === "email" ? "email" : "text",
        value: r[p],
        onChange: (h) => s(p, h.target.value),
        placeholder: `Your ${p}`,
        className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50",
        style: { "--tw-ring-color": t.color },
        disabled: l,
        required: !0
      },
      p
    )),
    /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "submit",
        style: {
          backgroundColor: t.color
        },
        className: "px-3 py-2 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-1",
        children: /* @__PURE__ */ g.jsx(Qy, { className: "h-4 w-4" })
      }
    )
  ] }) }) });
}
function i1({
  messages: e,
  onRetryMessage: t,
  onFormSubmit: n,
  config: r
}) {
  const o = T.useRef(null);
  T.useEffect(() => {
    var i;
    (i = o.current) == null || i.scrollIntoView({ behavior: "smooth" });
  }, [e]);
  const l = (i) => {
    var s, u, a;
    if ((s = i.file) != null && s.url) {
      const p = (u = i.file.type) == null ? void 0 : u.startsWith("image/"), h = (a = i.file.type) == null ? void 0 : a.startsWith("audio/");
      return p ? /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsx(
        "img",
        {
          src: i.file.url,
          alt: i.file.name,
          className: "max-w-xs rounded-lg mb-2"
        }
      ) }) : h ? /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsxs("audio", { controls: !0, className: "max-w-xs mb-2 p-2 max-w-[200px]", children: [
        /* @__PURE__ */ g.jsx("source", { src: i.file.url, type: i.file.type }),
        "Your browser does not support the audio element."
      ] }) }) : /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsx(
        "a",
        {
          href: i.file.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-blue-500 hover:text-blue-700 underline",
          download: !0,
          children: i.file.name
        }
      ) });
    } else if (i.type === "form")
      return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
        /* @__PURE__ */ g.jsx("span", { children: i.content }),
        /* @__PURE__ */ g.jsx(Yp, { onSubmit: n, config: r })
      ] });
    return i.content;
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-4", children: [
    e.map((i, s) => /* @__PURE__ */ g.jsx(
      "div",
      {
        className: `flex ${i.from === "user" ? "justify-end" : "justify-start"}`,
        children: /* @__PURE__ */ g.jsxs("div", { className: "flex flex-col gap-1 overflow-hidden", children: [
          /* @__PURE__ */ g.jsx(
            "div",
            {
              className: `rounded-2xl ${i.type === "text" || i.type === "form" ? i.from === "user" ? "p-4 bg-blue-500 text-white rounded-br-sm" : "p-4 bg-gray-100 text-gray-800 rounded-bl-sm" : ""}`,
              children: l(i)
            }
          ),
          /* @__PURE__ */ g.jsx("div", { className: "px-2", children: /* @__PURE__ */ g.jsx(
            l1,
            {
              status: i.from === "user" ? i.status : void 0,
              timestamp: i.timestamp,
              onRetry: i.status === "failed" ? () => t(i.id) : void 0
            }
          ) })
        ] })
      },
      i.id || s
    )),
    /* @__PURE__ */ g.jsx("div", { ref: o })
  ] });
}
const s1 = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😝",
  "😜",
  "🤪",
  "🤨",
  "🧐",
  "🤓",
  "😎",
  "🤩",
  "🥳",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "☹️",
  "😣",
  "😖",
  "😫",
  "😩",
  "🥺",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "👍",
  "👎",
  "👌",
  "✌️",
  "🤞",
  "🤟",
  "🤘",
  "🤙",
  "👈",
  "👉",
  "👆",
  "🖕",
  "👇",
  "☝️",
  "👋",
  "🤚",
  "🖐️",
  "✋",
  "🖖",
  "👏",
  "🙌",
  "🤲",
  "🤝",
  "🙏",
  "✍️",
  "💪",
  "🦾",
  "🦿",
  "🦵",
  "🦶",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🖤",
  "🤍",
  "🤎",
  "💔",
  "❣️",
  "💕",
  "💞",
  "💓",
  "💗",
  "💖",
  "💘",
  "💝",
  "💟",
  "☮️"
];
function u1({ onEmojiSelect: e, onClose: t }) {
  return /* @__PURE__ */ g.jsx("div", { className: "absolute bottom-full left-0 mb-2 bg-white border rounded-lg shadow-lg p-3 w-64 max-h-48 overflow-y-auto z-50", children: /* @__PURE__ */ g.jsx("div", { className: "grid grid-cols-8 gap-1", children: s1.map((n, r) => /* @__PURE__ */ g.jsx(
    "button",
    {
      onClick: () => {
        e(n), t();
      },
      className: "p-2 hover:bg-gray-100 rounded text-lg transition-colors",
      children: n
    },
    r
  )) }) });
}
function a1({ onAudioRecorded: e, config: t }) {
  const [n, r] = T.useState(!1), [o, l] = T.useState(!1), [i, s] = T.useState(0), [u, a] = T.useState(null), [p, h] = T.useState(!1), [m, v] = T.useState(null), y = T.useRef(null), x = T.useRef([]), k = T.useRef(null), d = T.useRef(null), c = T.useRef(null);
  T.useEffect(() => () => {
    k.current && clearInterval(k.current), c.current && c.current.getTracks().forEach((H) => H.stop());
  }, []);
  const f = async () => {
    try {
      const H = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      return c.current = H, v(!0), !0;
    } catch (H) {
      return console.error("Microphone permission denied:", H), v(!1), !1;
    }
  }, w = async () => {
    if (!(!await f() || !c.current))
      try {
        x.current = [];
        const j = new MediaRecorder(c.current, {
          mimeType: "audio/webm;codecs=opus"
        });
        y.current = j, j.ondataavailable = (z) => {
          z.data.size > 0 && x.current.push(z.data);
        }, j.onstop = () => {
          const z = new Blob(x.current, {
            type: "audio/webm;codecs=opus"
          });
          a(z), c.current && (c.current.getTracks().forEach((F) => F.stop()), c.current = null);
        }, j.start(100), r(!0), s(0), k.current = setInterval(() => {
          s((z) => z + 1);
        }, 1e3);
      } catch (j) {
        console.error("Error starting recording:", j);
      }
  }, C = () => {
    y.current && y.current.state === "recording" && (y.current.pause(), l(!0), k.current && clearInterval(k.current));
  }, $ = () => {
    y.current && y.current.state === "paused" && (y.current.resume(), l(!1), k.current = setInterval(() => {
      s((H) => H + 1);
    }, 1e3));
  }, P = () => {
    y.current && y.current.state !== "inactive" && (y.current.stop(), r(!1), l(!1), k.current && clearInterval(k.current));
  }, M = () => {
    if (u && !p) {
      const H = URL.createObjectURL(u);
      d.current = new Audio(H), d.current.onended = () => {
        h(!1), URL.revokeObjectURL(H);
      }, d.current.play(), h(!0);
    } else d.current && p && (d.current.pause(), h(!1));
  }, B = () => {
    if (u) {
      const H = new File([u], "recording.wav", {
        type: "audio/wav"
      });
      e(H), a(null), s(0), h(!1);
    }
  }, L = () => {
    n && P(), a(null), s(0), h(!1), c.current && (c.current.getTracks().forEach((H) => H.stop()), c.current = null);
  }, G = (H) => {
    const j = Math.floor(H / 60), z = H % 60;
    return `${j}:${z.toString().padStart(2, "0")}`;
  };
  return m === !1 ? /* @__PURE__ */ g.jsx(
    "button",
    {
      type: "button",
      onClick: f,
      className: "p-2 text-gray-400 hover:text-gray-600 transition-colors",
      title: "Microphone access denied. Click to retry.",
      children: /* @__PURE__ */ g.jsx(qy, { className: "h-5 w-5" })
    }
  ) : n || u ? /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ g.jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full animate-pulse" }),
      /* @__PURE__ */ g.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: G(i) })
    ] }),
    u && /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ g.jsx(
        "button",
        {
          onClick: M,
          className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
          title: p ? "Pause" : "Play",
          children: p ? /* @__PURE__ */ g.jsx($c, { className: "h-4 w-4" }) : /* @__PURE__ */ g.jsx(Pc, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ g.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: G(i) })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-1", children: [
      n && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
        /* @__PURE__ */ g.jsx(
          "button",
          {
            onClick: o ? $ : C,
            className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
            title: o ? "Resume" : "Pause",
            children: o ? /* @__PURE__ */ g.jsx(Pc, { className: "h-4 w-4" }) : /* @__PURE__ */ g.jsx($c, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ g.jsx(
          "button",
          {
            onClick: P,
            className: "p-1 text-red-600 hover:text-red-800 transition-colors",
            title: "Stop recording",
            children: /* @__PURE__ */ g.jsx(ug, { className: "h-4 w-4" })
          }
        )
      ] }),
      u && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
        /* @__PURE__ */ g.jsx(
          "button",
          {
            onClick: B,
            style: { backgroundColor: t.color },
            className: "px-2 py-1 text-white text-xs rounded hover:opacity-90 transition-opacity",
            title: "Send audio",
            children: "Send"
          }
        ),
        /* @__PURE__ */ g.jsx(
          "button",
          {
            onClick: L,
            className: "p-1 text-gray-600 hover:text-red-600 transition-colors",
            title: "Delete recording",
            children: /* @__PURE__ */ g.jsx(ag, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ g.jsx(
    "button",
    {
      type: "button",
      onClick: w,
      className: "p-2 text-gray-500 hover:text-gray-700 transition-colors",
      title: "Record audio message",
      children: /* @__PURE__ */ g.jsx(eg, { className: "h-5 w-5" })
    }
  );
}
function c1({
  chatbotId: e,
  selectedSession: t,
  config: n,
  onSendMessage: r
}) {
  const [o, l] = T.useState(""), [i, s] = T.useState(!1), u = T.useRef(null), [a, p] = T.useState(!1), h = (d) => {
    if (d.preventDefault(), o.trim()) {
      const c = {
        from: "user",
        content: o.trim(),
        type: "text",
        timestamp: Date.now(),
        status: "sent"
      };
      r(c), l("");
    }
  }, m = (d) => {
    l((c) => c + d);
  }, v = async (d) => {
    const c = new FormData();
    c.append("file", d);
    const f = await fetch(
      `https://api.ticketdesk.ai/v1/uploader?session_id=${t == null ? void 0 : t.session_id}&site_id=${e}`,
      {
        method: "POST",
        body: c
      }
    ), w = await f.json();
    if (!f.ok)
      throw new Error(w.message);
    return w;
  }, y = async (d) => {
    p(!0);
    try {
      const c = await v(d), f = {
        from: "user",
        content: d.name,
        type: d.type === "audio/wav" ? "audio" : d.type.startsWith("image/") ? "image" : "file",
        timestamp: Date.now(),
        status: "sent",
        file: c
      };
      r(f);
    } catch (c) {
      console.error("File upload failed:", c);
    } finally {
      p(!1), u.current && (u.current.value = "");
    }
  }, x = (d) => {
    var f;
    const c = (f = d.target.files) == null ? void 0 : f[0];
    c && y(c);
  }, k = async (d) => {
    const f = Array.from(d.clipboardData.items)[0];
    if (f.type.indexOf("image") !== -1 || f.kind === "file") {
      d.preventDefault();
      const w = f.getAsFile();
      w && y(w);
    }
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "border-t bg-white", children: [
    /* @__PURE__ */ g.jsx("form", { onSubmit: h, className: "p-4 pb-2 relative", children: /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ g.jsx(
        "input",
        {
          type: "text",
          value: o,
          onChange: (d) => l(d.target.value),
          placeholder: "Send a message...",
          className: "flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50",
          style: { "--tw-ring-color": n.color },
          onPaste: k,
          disabled: a
        }
      ),
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "submit",
          style: { backgroundColor: n.color },
          className: "p-3 text-white rounded-full hover:opacity-90 transition-opacity",
          disabled: !o.trim(),
          children: /* @__PURE__ */ g.jsx(ig, { className: "h-5 w-5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ g.jsxs("div", { className: "px-4 pb-1 flex items-center justify-between gap-2 relative", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ g.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var d;
              return (d = u.current) == null ? void 0 : d.click();
            },
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors",
            title: "Upload file",
            children: /* @__PURE__ */ g.jsx(rg, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ g.jsx(a1, { onAudioRecorded: y, config: n }),
        /* @__PURE__ */ g.jsx(
          "button",
          {
            type: "button",
            onClick: () => s(!i),
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full",
            children: /* @__PURE__ */ g.jsx(sg, { className: "h-4 w-4" })
          }
        ),
        i && /* @__PURE__ */ g.jsx(
          u1,
          {
            onEmojiSelect: m,
            onClose: () => s(!1)
          }
        ),
        a && /* @__PURE__ */ g.jsx("span", { className: "text-sm text-gray-700", children: "Uploading..." })
      ] }),
      /* @__PURE__ */ g.jsx("div", { className: "flex-1 flex justify-end", children: /* @__PURE__ */ g.jsxs(
        "a",
        {
          href: "https://ticketdesk.ai/?utm_source=chat-widget&utm_medium=referral&utm_campaign=powered-by",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-xs text-gray-500 hover:text-gray-700 transition-colors",
          children: [
            "Powered by ",
            /* @__PURE__ */ g.jsx("span", { className: "font-semibold", children: "Ticketdesk AI" })
          ]
        }
      ) }),
      /* @__PURE__ */ g.jsx(
        "input",
        {
          type: "file",
          ref: u,
          onChange: x,
          className: "hidden",
          accept: "image/*,audio/*,.pdf,.doc,.docx,.txt,.xls,.xlsx,.csv,.tsv,.xlsm"
        }
      )
    ] })
  ] });
}
function d1({
  sessions: e,
  onLoadSession: t
}) {
  const n = (o) => {
    const l = new Date(o), s = ((/* @__PURE__ */ new Date()).getTime() - l.getTime()) / (1e3 * 60 * 60);
    return s < 24 ? l.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : s < 168 ? l.toLocaleDateString("en-US", { weekday: "short" }) : l.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }, r = (o) => {
    switch (o) {
      case "active":
        return "text-green-600 bg-green-100";
      case "resolved":
        return "text-gray-600 bg-gray-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };
  return /* @__PURE__ */ g.jsx("div", { className: "flex-1 overflow-y-auto", children: e.length === 0 ? /* @__PURE__ */ g.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-gray-500", children: [
    /* @__PURE__ */ g.jsx(Hp, { className: "h-12 w-12 mb-4 opacity-50" }),
    /* @__PURE__ */ g.jsx("p", { children: "No recent chats found" })
  ] }) : /* @__PURE__ */ g.jsx("div", { className: "divide-y", children: e.map((o) => /* @__PURE__ */ g.jsxs(
    "button",
    {
      onClick: () => t(o.session_id),
      className: "w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left",
      children: [
        /* @__PURE__ */ g.jsx("div", { className: "flex-shrink-0", children: o.last_message_from === "user" ? /* @__PURE__ */ g.jsx(cg, { className: "h-8 w-8 text-gray-400" }) : /* @__PURE__ */ g.jsx(Yy, { className: "h-8 w-8 text-indigo-500" }) }),
        /* @__PURE__ */ g.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ g.jsxs("div", { className: "flex justify-start items-center gap-3 mb-1", children: [
            /* @__PURE__ */ g.jsx("span", { className: "font-medium truncate", children: o.last_message_from === "user" ? "You" : o.last_message_from }),
            /* @__PURE__ */ g.jsx("span", { className: "text-xs text-gray-500", children: n(o.updated_at) })
          ] }),
          /* @__PURE__ */ g.jsx("p", { className: "text-sm text-gray-600 truncate", children: o.last_message })
        ] }),
        /* @__PURE__ */ g.jsx(
          "span",
          {
            className: `px-2 py-1 rounded-full text-xs font-medium ${r(
              o.state
            )}`,
            children: o.state
          }
        )
      ]
    },
    o.session_id
  )) }) });
}
function f1({ onFormSubmit: e, config: t }) {
  const [n, r] = T.useState(!1);
  return /* @__PURE__ */ g.jsx("div", { className: "px-6 py-3 bg-yellow-50 border-t border-yellow-200", children: n ? /* @__PURE__ */ g.jsx(
    Yp,
    {
      config: t,
      onSubmit: (o) => {
        e(o), r(!1);
      }
    }
  ) : /* @__PURE__ */ g.jsxs(
    "button",
    {
      className: "w-full flex items-center gap-2 text-left text-yellow-800 hover:text-yellow-900 transition-colors group",
      onClick: () => r(!0),
      children: [
        /* @__PURE__ */ g.jsx(Bp, { className: "h-4 w-4 text-yellow-600" }),
        /* @__PURE__ */ g.jsx("span", { className: "text-sm flex-1", children: "Click here to set your email to get notifications" }),
        /* @__PURE__ */ g.jsx(Gy, { className: "h-4 w-4 text-yellow-600 group-hover:text-yellow-700" })
      ]
    }
  ) });
}
function p1({
  chatbotId: e,
  isOpen: t,
  isMaximized: n,
  isConnected: r,
  config: o,
  messages: l,
  sessions: i,
  operators: s,
  lastActive: u,
  selectedSession: a,
  onStartNewChat: p,
  onEndChat: h,
  onLoadSession: m,
  onGetRecentChats: v,
  onUpdateProfile: y,
  onClose: x,
  onToggleMaximize: k,
  onSendMessage: d,
  onRetryMessage: c
}) {
  const [f, w] = T.useState(
    "chat"
  );
  if (!t) return null;
  const C = n ? "fixed inset-4 w-auto h-auto max-w-none max-h-none min-h-0" : "fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[75vh] max-h-[800px] min-h-[400px]", $ = () => {
    w("recent-chats"), v();
  }, P = () => {
    w("chat");
  }, M = (G) => {
    m(G), w("chat");
  }, B = (G) => {
    y(G), w("chat");
  }, L = a && !a.email && l.filter((G) => G.from === "user").length > 1;
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: `${C} bg-white rounded-lg shadow-2xl flex flex-col animate-slide-up z-50`,
      children: [
        /* @__PURE__ */ g.jsx(
          o1,
          {
            onClose: x,
            onToggleMaximize: k,
            isMaximized: n,
            isConnected: r,
            operators: s,
            lastActive: u,
            currentView: f,
            onBackToChat: P,
            onStartNewChat: p,
            onEndChat: h,
            onViewRecentChats: $,
            config: o
          }
        ),
        f === "chat" && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
          /* @__PURE__ */ g.jsx(
            i1,
            {
              messages: l,
              onRetryMessage: c,
              onFormSubmit: B,
              config: o
            }
          ),
          L && /* @__PURE__ */ g.jsx(f1, { config: o, onFormSubmit: B }),
          /* @__PURE__ */ g.jsx(
            c1,
            {
              chatbotId: e,
              config: o,
              selectedSession: a,
              onSendMessage: d
            }
          )
        ] }),
        f === "recent-chats" && /* @__PURE__ */ g.jsx(
          d1,
          {
            sessions: i,
            onLoadSession: M,
            config: o
          }
        )
      ]
    }
  );
}
(!globalThis.EventTarget || !globalThis.Event) && console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var Xp = class extends Event {
  // biome-ignore lint/suspicious/noExplicitAny: vibes
  constructor(t, n) {
    super("error", n);
    W(this, "message");
    W(this, "error");
    this.message = t.message, this.error = t;
  }
}, Kp = class extends Event {
  // biome-ignore lint/style/useDefaultParameterLast: legacy
  // biome-ignore lint/suspicious/noExplicitAny: legacy
  constructor(t = 1e3, n = "", r) {
    super("close", r);
    W(this, "code");
    W(this, "reason");
    W(this, "wasClean", !0);
    this.code = t, this.reason = n;
  }
}, Vi = {
  Event,
  ErrorEvent: Xp,
  CloseEvent: Kp
};
function h1(e, t) {
  if (!e)
    throw new Error(t);
}
function m1(e) {
  return new e.constructor(e.type, e);
}
function y1(e) {
  return "data" in e ? new MessageEvent(e.type, e) : "code" in e || "reason" in e ? new Kp(
    // @ts-expect-error we need to fix event/listener types
    e.code || 1999,
    // @ts-expect-error we need to fix event/listener types
    e.reason || "unknown reason",
    e
  ) : "error" in e ? new Xp(e.error, e) : new Event(e.type, e);
}
var Rc, g1 = typeof process < "u" && typeof ((Rc = process.versions) == null ? void 0 : Rc.node) < "u" && typeof document > "u", Oo = g1 ? y1 : m1, dn = {
  maxReconnectionDelay: 1e4,
  minReconnectionDelay: 1e3 + Math.random() * 4e3,
  minUptime: 5e3,
  reconnectionDelayGrowFactor: 1.3,
  connectionTimeout: 4e3,
  maxRetries: Number.POSITIVE_INFINITY,
  maxEnqueuedMessages: Number.POSITIVE_INFINITY,
  startClosed: !1,
  debug: !1
}, jc = !1, v1 = class hn extends EventTarget {
  constructor(n, r, o = {}) {
    super();
    W(this, "_ws");
    W(this, "_retryCount", -1);
    W(this, "_uptimeTimeout");
    W(this, "_connectTimeout");
    W(this, "_shouldReconnect", !0);
    W(this, "_connectLock", !1);
    W(this, "_binaryType", "blob");
    W(this, "_closeCalled", !1);
    W(this, "_messageQueue", []);
    W(this, "_debugLogger", console.log.bind(console));
    W(this, "_url");
    W(this, "_protocols");
    W(this, "_options");
    /**
     * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
     */
    W(this, "onclose", null);
    /**
     * An event listener to be called when an error occurs
     */
    W(this, "onerror", null);
    /**
     * An event listener to be called when a message is received from the server
     */
    W(this, "onmessage", null);
    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data
     */
    W(this, "onopen", null);
    W(this, "_handleOpen", (n) => {
      this._debug("open event");
      const { minUptime: r = dn.minUptime } = this._options;
      clearTimeout(this._connectTimeout), this._uptimeTimeout = setTimeout(() => this._acceptOpen(), r), h1(this._ws, "WebSocket is not defined"), this._ws.binaryType = this._binaryType, this._messageQueue.forEach((o) => {
        var l;
        return (l = this._ws) == null ? void 0 : l.send(o);
      }), this._messageQueue = [], this.onopen && this.onopen(n), this.dispatchEvent(Oo(n));
    });
    W(this, "_handleMessage", (n) => {
      this._debug("message event"), this.onmessage && this.onmessage(n), this.dispatchEvent(Oo(n));
    });
    W(this, "_handleError", (n) => {
      this._debug("error event", n.message), this._disconnect(void 0, n.message === "TIMEOUT" ? "timeout" : void 0), this.onerror && this.onerror(n), this._debug("exec error listeners"), this.dispatchEvent(Oo(n)), this._connect();
    });
    W(this, "_handleClose", (n) => {
      this._debug("close event"), this._clearTimeouts(), this._shouldReconnect && this._connect(), this.onclose && this.onclose(n), this.dispatchEvent(Oo(n));
    });
    this._url = n, this._protocols = r, this._options = o, this._options.startClosed && (this._shouldReconnect = !1), this._options.debugLogger && (this._debugLogger = this._options.debugLogger), this._connect();
  }
  static get CONNECTING() {
    return 0;
  }
  static get OPEN() {
    return 1;
  }
  static get CLOSING() {
    return 2;
  }
  static get CLOSED() {
    return 3;
  }
  get CONNECTING() {
    return hn.CONNECTING;
  }
  get OPEN() {
    return hn.OPEN;
  }
  get CLOSING() {
    return hn.CLOSING;
  }
  get CLOSED() {
    return hn.CLOSED;
  }
  get binaryType() {
    return this._ws ? this._ws.binaryType : this._binaryType;
  }
  set binaryType(n) {
    this._binaryType = n, this._ws && (this._ws.binaryType = n);
  }
  /**
   * Returns the number or connection retries
   */
  get retryCount() {
    return Math.max(this._retryCount, 0);
  }
  /**
   * The number of bytes of data that have been queued using calls to send() but not yet
   * transmitted to the network. This value resets to zero once all queued data has been sent.
   * This value does not reset to zero when the connection is closed; if you keep calling send(),
   * this will continue to climb. Read only
   */
  get bufferedAmount() {
    return this._messageQueue.reduce((r, o) => (typeof o == "string" ? r += o.length : o instanceof Blob ? r += o.size : r += o.byteLength, r), 0) + (this._ws ? this._ws.bufferedAmount : 0);
  }
  /**
   * The extensions selected by the server. This is currently only the empty string or a list of
   * extensions as negotiated by the connection
   */
  get extensions() {
    return this._ws ? this._ws.extensions : "";
  }
  /**
   * A string indicating the name of the sub-protocol the server selected;
   * this will be one of the strings specified in the protocols parameter when creating the
   * WebSocket object
   */
  get protocol() {
    return this._ws ? this._ws.protocol : "";
  }
  /**
   * The current state of the connection; this is one of the Ready state constants
   */
  get readyState() {
    return this._ws ? this._ws.readyState : this._options.startClosed ? hn.CLOSED : hn.CONNECTING;
  }
  /**
   * The URL as resolved by the constructor
   */
  get url() {
    return this._ws ? this._ws.url : "";
  }
  /**
   * Whether the websocket object is now in reconnectable state
   */
  get shouldReconnect() {
    return this._shouldReconnect;
  }
  /**
   * Closes the WebSocket connection or connection attempt, if any. If the connection is already
   * CLOSED, this method does nothing
   */
  close(n = 1e3, r) {
    if (this._closeCalled = !0, this._shouldReconnect = !1, this._clearTimeouts(), !this._ws) {
      this._debug("close enqueued: no ws instance");
      return;
    }
    if (this._ws.readyState === this.CLOSED) {
      this._debug("close: already closed");
      return;
    }
    this._ws.close(n, r);
  }
  /**
   * Closes the WebSocket connection or connection attempt and connects again.
   * Resets retry counter;
   */
  reconnect(n, r) {
    this._shouldReconnect = !0, this._closeCalled = !1, this._retryCount = -1, !this._ws || this._ws.readyState === this.CLOSED ? this._connect() : (this._disconnect(n, r), this._connect());
  }
  /**
   * Enqueue specified data to be transmitted to the server over the WebSocket connection
   */
  send(n) {
    if (this._ws && this._ws.readyState === this.OPEN)
      this._debug("send", n), this._ws.send(n);
    else {
      const { maxEnqueuedMessages: r = dn.maxEnqueuedMessages } = this._options;
      this._messageQueue.length < r && (this._debug("enqueue", n), this._messageQueue.push(n));
    }
  }
  _debug(...n) {
    this._options.debug && this._debugLogger("RWS>", ...n);
  }
  _getNextDelay() {
    const {
      reconnectionDelayGrowFactor: n = dn.reconnectionDelayGrowFactor,
      minReconnectionDelay: r = dn.minReconnectionDelay,
      maxReconnectionDelay: o = dn.maxReconnectionDelay
    } = this._options;
    let l = 0;
    return this._retryCount > 0 && (l = r * n ** (this._retryCount - 1), l > o && (l = o)), this._debug("next delay", l), l;
  }
  _wait() {
    return new Promise((n) => {
      setTimeout(n, this._getNextDelay());
    });
  }
  _getNextProtocols(n) {
    if (!n) return Promise.resolve(null);
    if (typeof n == "string" || Array.isArray(n))
      return Promise.resolve(n);
    if (typeof n == "function") {
      const r = n();
      if (!r) return Promise.resolve(null);
      if (typeof r == "string" || Array.isArray(r))
        return Promise.resolve(r);
      if (r.then)
        return r;
    }
    throw Error("Invalid protocols");
  }
  _getNextUrl(n) {
    if (typeof n == "string")
      return Promise.resolve(n);
    if (typeof n == "function") {
      const r = n();
      if (typeof r == "string")
        return Promise.resolve(r);
      if (r.then)
        return r;
    }
    throw Error("Invalid URL");
  }
  _connect() {
    if (this._connectLock || !this._shouldReconnect)
      return;
    this._connectLock = !0;
    const {
      maxRetries: n = dn.maxRetries,
      connectionTimeout: r = dn.connectionTimeout
    } = this._options;
    if (this._retryCount >= n) {
      this._debug("max retries reached", this._retryCount, ">=", n);
      return;
    }
    this._retryCount++, this._debug("connect", this._retryCount), this._removeListeners(), this._wait().then(
      () => Promise.all([
        this._getNextUrl(this._url),
        this._getNextProtocols(this._protocols || null)
      ])
    ).then(([o, l]) => {
      if (this._closeCalled) {
        this._connectLock = !1;
        return;
      }
      !this._options.WebSocket && typeof WebSocket > "u" && !jc && (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`), jc = !0);
      const i = this._options.WebSocket || WebSocket;
      this._debug("connect", { url: o, protocols: l }), this._ws = l ? new i(o, l) : new i(o), this._ws.binaryType = this._binaryType, this._connectLock = !1, this._addListeners(), this._connectTimeout = setTimeout(
        () => this._handleTimeout(),
        r
      );
    }).catch((o) => {
      this._connectLock = !1, this._handleError(new Vi.ErrorEvent(Error(o.message), this));
    });
  }
  _handleTimeout() {
    this._debug("timeout event"), this._handleError(new Vi.ErrorEvent(Error("TIMEOUT"), this));
  }
  _disconnect(n = 1e3, r) {
    if (this._clearTimeouts(), !!this._ws) {
      this._removeListeners();
      try {
        (this._ws.readyState === this.OPEN || this._ws.readyState === this.CONNECTING) && this._ws.close(n, r), this._handleClose(new Vi.CloseEvent(n, r, this));
      } catch {
      }
    }
  }
  _acceptOpen() {
    this._debug("accept open"), this._retryCount = 0;
  }
  _removeListeners() {
    this._ws && (this._debug("removeListeners"), this._ws.removeEventListener("open", this._handleOpen), this._ws.removeEventListener("close", this._handleClose), this._ws.removeEventListener("message", this._handleMessage), this._ws.removeEventListener("error", this._handleError));
  }
  _addListeners() {
    this._ws && (this._debug("addListeners"), this._ws.addEventListener("open", this._handleOpen), this._ws.addEventListener("close", this._handleClose), this._ws.addEventListener("message", this._handleMessage), this._ws.addEventListener("error", this._handleError));
  }
  _clearTimeouts() {
    clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout);
  }
};
var w1 = (e) => e[1] !== null && e[1] !== void 0;
function x1() {
  if (typeof crypto < "u" && crypto.randomUUID)
    return crypto.randomUUID();
  let e = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(), t = typeof performance < "u" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    let r = Math.random() * 16;
    return e > 0 ? (r = (e + r) % 16 | 0, e = Math.floor(e / 16)) : (r = (t + r) % 16 | 0, t = Math.floor(t / 16)), (n === "x" ? r : r & 3 | 8).toString(16);
  });
}
function Gp(e, t, n = {}) {
  const {
    host: r,
    path: o,
    protocol: l,
    room: i,
    party: s,
    basePath: u,
    prefix: a,
    query: p
  } = e;
  let h = r.replace(/^(http|https|ws|wss):\/\//, "");
  if (h.endsWith("/") && (h = h.slice(0, -1)), o != null && o.startsWith("/"))
    throw new Error("path must not start with a slash");
  const m = s ?? "main", v = o ? `/${o}` : "", y = l || (h.startsWith("localhost:") || h.startsWith("127.0.0.1:") || h.startsWith("192.168.") || h.startsWith("10.") || h.startsWith("172.") && h.split(".")[1] >= "16" && h.split(".")[1] <= "31" || h.startsWith("[::ffff:7f00:1]:") ? (
    // http / ws
    t
  ) : (
    // https / wss
    `${t}s`
  )), x = `${y}://${h}/${u || `${a || "parties"}/${m}/${i}`}${v}`, k = (c = {}) => `${x}?${new URLSearchParams([
    ...Object.entries(n),
    ...Object.entries(c).filter(w1)
  ])}`, d = typeof p == "function" ? async () => k(await p()) : k(p);
  return {
    host: h,
    path: v,
    room: i,
    name: m,
    protocol: y,
    partyUrl: x,
    urlProvider: d
  };
}
var k1 = class extends v1 {
  constructor(t) {
    var n, r;
    const o = zc(t);
    super(o.urlProvider, o.protocols, o.socketOptions);
    W(this, "_pk");
    W(this, "_pkurl");
    W(this, "name");
    W(this, "room");
    W(this, "host");
    W(this, "path");
    this.partySocketOptions = t, this.setWSProperties(o), t.disableNameValidation || ((n = t.party) != null && n.includes("/") && console.warn(
      `PartySocket: party name "${t.party}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`
    ), (r = t.room) != null && r.includes("/") && console.warn(
      `PartySocket: room name "${t.room}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`
    ));
  }
  updateProperties(t) {
    const n = zc({
      ...this.partySocketOptions,
      ...t,
      host: t.host ?? this.host,
      room: t.room ?? this.room,
      path: t.path ?? this.path
    });
    this._url = n.urlProvider, this._protocols = n.protocols, this._options = n.socketOptions, this.setWSProperties(n);
  }
  setWSProperties(t) {
    const { _pk: n, _pkurl: r, name: o, room: l, host: i, path: s } = t;
    this._pk = n, this._pkurl = r, this.name = o, this.room = l, this.host = i, this.path = s;
  }
  reconnect(t, n) {
    if (!this.room || !this.host)
      throw new Error(
        "The room and host must be set before connecting, use `updateProperties` method to set them or pass them to the constructor."
      );
    super.reconnect(t, n);
  }
  get id() {
    return this._pk;
  }
  /**
   * Exposes the static PartyKit room URL without applying query parameters.
   * To access the currently connected WebSocket url, use PartySocket#url.
   */
  get roomUrl() {
    return this._pkurl;
  }
  // a `fetch` method that uses (almost) the same options as `PartySocket`
  static async fetch(t, n) {
    const r = Gp(t, "http"), o = typeof r.urlProvider == "string" ? r.urlProvider : await r.urlProvider();
    return (t.fetch ?? fetch)(o, n);
  }
};
function zc(e) {
  const {
    id: t,
    host: n,
    path: r,
    party: o,
    room: l,
    protocol: i,
    query: s,
    protocols: u,
    ...a
  } = e, p = t || x1(), h = Gp(e, "ws", { _pk: p });
  return {
    _pk: p,
    _pkurl: h.partyUrl,
    name: h.name,
    room: h.room,
    host: h.host,
    path: h.path,
    protocols: u,
    socketOptions: a,
    urlProvider: h.urlProvider
  };
}
var S1 = (e, t) => {
  const n = T.useRef(t);
  n.current = t, T.useEffect(() => {
    const r = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onOpen) == null ? void 0 : a.call(u, s);
    }, o = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onMessage) == null ? void 0 : a.call(u, s);
    }, l = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onClose) == null ? void 0 : a.call(u, s);
    }, i = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onError) == null ? void 0 : a.call(u, s);
    };
    return e.addEventListener("open", r), e.addEventListener("close", l), e.addEventListener("error", i), e.addEventListener("message", o), () => {
      e.removeEventListener("open", r), e.removeEventListener("close", l), e.removeEventListener("error", i), e.removeEventListener("message", o);
    };
  }, [e]);
}, C1 = (e) => [
  e.startClosed,
  e.minUptime,
  e.maxRetries,
  e.connectionTimeout,
  e.maxEnqueuedMessages,
  e.maxReconnectionDelay,
  e.minReconnectionDelay,
  e.reconnectionDelayGrowFactor,
  e.debug
];
function _1({
  options: e,
  createSocket: t,
  createSocketMemoKey: n
}) {
  const r = n(e), o = T.useMemo(() => e, [r]), [l, i] = T.useState(
    () => (
      // only connect on first mount
      t({ ...o, startClosed: !0 })
    )
  ), s = T.useRef(null), u = T.useRef(t);
  return u.current = t, T.useEffect(() => {
    if (s.current === l) {
      const a = u.current({
        ...o,
        // when reconnecting because of options change, we always reconnect
        // (startClosed only applies to initial mount)
        startClosed: !1
      });
      i(a);
    } else
      return !s.current && o.startClosed !== !0 && l.reconnect(), s.current = l, () => {
        l.close();
      };
  }, [l, o]), l;
}
function E1(e) {
  const { host: t, ...n } = e, r = _1({
    options: {
      host: t || (typeof window < "u" ? window.location.host : "dummy-domain.com"),
      ...n
    },
    createSocket: (o) => new k1(o),
    createSocketMemoKey: (o) => JSON.stringify([
      // NOTE: if query is defined as a function, the socket
      // won't reconnect when you change the function identity
      o.query,
      o.id,
      o.host,
      o.room,
      o.party,
      o.path,
      o.protocol,
      o.protocols,
      o.basePath,
      o.prefix,
      ...C1(o)
    ])
  });
  return S1(r, e), r;
}
const Fc = (e, t) => {
  try {
    localStorage.setItem(e, t);
  } catch (n) {
    console.warn("Failed to save to localStorage:", n);
  }
}, Io = (e) => {
  try {
    return localStorage.getItem(e);
  } catch (t) {
    return console.warn("Failed to read from localStorage:", t), null;
  }
}, kr = () => "m_" + crypto.randomUUID();
function $1({ chatbotId: e }) {
  var H;
  const [t, n] = T.useState({
    name: "Chat with us",
    color: "#3b82f6",
    shape: "round",
    welcome_message: "Hi there!"
  }), [r, o] = T.useState(!0), [l, i] = T.useState([]), [s, u] = T.useState(null), [a, p] = T.useState(null), [h, m] = T.useState([]), [v, y] = T.useState([]), [x, k] = T.useState(), [d, c] = T.useState(
    null
  ), f = E1({
    host: "https://api.ticketdesk.ai",
    party: "chatroom",
    room: e,
    onOpen() {
      const j = Io(`ti_${e}_session_id`), F = {
        type: "session:join",
        client_id: Io(`ti_${e}_client_id`),
        session_id: j
      };
      f.send(JSON.stringify(F));
    },
    onMessage(j) {
      const { type: z, data: F } = JSON.parse(j.data);
      z === "session:joined" ? (F.session_id && (u(F.session_id), Fc(`ti_${e}_session_id`, F.session_id)), F.client_id && (p(F.client_id), Fc(`ti_${e}_client_id`, F.client_id)), i(F.messages || []), c(F.session), F.operators && y(F.operators), F.last_active && k(F.last_active), n({
        color: "#3b82f6",
        shape: "round",
        welcome_message: "Hi! How can I help you today?",
        ...F.config
      }), o(!1)) : z === "session:list" ? m(F.sessions) : z === "message:recieved" ? i((ne) => [...ne, F.message]) : z === "operator:list" ? F.operators && y(F.operators) : z === "message:read" ? i(
        (ne) => ne.map(
          (se) => se.id === F.message_id ? { ...se, status: F.status } : se
        )
      ) : console.log("Unhandled message type:", z, F);
    },
    onClose() {
    },
    onError(j) {
      console.error(j);
    }
  });
  T.useEffect(() => {
    const j = Io(`ti_${e}_session_id`), z = Io(`ti_${e}_client_id`);
    if (j && u(j), z && p(z), t != null && t.welcome_message) {
      const F = {
        id: kr(),
        from: "agent",
        content: t == null ? void 0 : t.welcome_message,
        type: "text",
        timestamp: Date.now()
      };
      i([F]);
    }
  }, [e, t == null ? void 0 : t.welcome_message]);
  const w = T.useCallback(
    (j) => {
      if (!s || !a) {
        console.log("No session details yet, cannot send message");
        return;
      }
      if (j.id = kr(), i((z) => {
        var ne;
        const F = [...z, j];
        return d && ((ne = t.fields) != null && ne.length) && !d.email && !z.find((se) => se.type === "form") && setTimeout(() => {
          const se = {
            id: kr(),
            from: "agent",
            content: "What is your email address?",
            type: "form",
            fields: ["email"],
            timestamp: Date.now()
          };
          i((E) => [...E, se]);
        }, 1e3), F;
      }), f) {
        const z = {
          type: "message:new",
          session_id: s,
          client_id: a,
          message: j
        };
        f.send(JSON.stringify(z));
      }
    },
    [s, a, f, d, (H = t.fields) == null ? void 0 : H.length]
  ), C = T.useCallback(
    async (j) => {
      if (!s || !a) {
        console.log("No session details yet, cannot send file");
        return;
      }
      const z = {
        id: kr(),
        from: "user",
        content: `Uploading ${j.name}...`,
        type: "file",
        timestamp: Date.now(),
        status: f ? "sent" : "failed",
        file: {
          name: j.name,
          type: j.type
        }
      };
      i((F) => [...F, z]);
      try {
        const F = new FormData();
        F.append("file", j), F.append("chatbotId", e), F.append("session_id", s), F.append("client_id", a), await new Promise((se) => setTimeout(se, 1e3));
        const ne = URL.createObjectURL(j);
        if (i(
          (se) => se.map(
            (E) => E.id === z.id ? {
              ...E,
              content: "",
              status: "sent",
              file: {
                ...E.file,
                url: ne
              }
            } : E
          )
        ), f) {
          const se = {
            type: "message:file",
            session_id: s,
            client_id: a,
            message: {
              id: z.id,
              from: "user",
              type: "file",
              timestamp: Date.now(),
              file: {
                name: j.name,
                type: j.type,
                url: ne
              }
            }
          };
          f.send(JSON.stringify(se));
        }
      } catch (F) {
        console.log("Error", F), i(
          (ne) => ne.map(
            (se) => se.id === z.id ? {
              ...se,
              status: "failed",
              content: `Failed to upload ${j.name}`
            } : se
          )
        );
      }
    },
    [f, s, a, e]
  ), $ = T.useCallback(() => {
    if (f) {
      i([]), u(null);
      const j = {
        type: "session:new",
        client_id: a
      };
      f.send(JSON.stringify(j)), t != null && t.welcome_message && setTimeout(() => {
        const z = {
          id: kr(),
          from: "agent",
          content: t.welcome_message,
          type: "text",
          timestamp: Date.now()
        };
        i([z]);
      }, 100);
    }
  }, [f, a, t == null ? void 0 : t.welcome_message]), P = T.useCallback(() => {
    if (f && s) {
      const j = {
        type: "session:end",
        session_id: s,
        client_id: a
      };
      f.send(JSON.stringify(j));
    }
  }, [f, s, a]), M = T.useCallback(
    (j) => {
      if (f) {
        const z = {
          type: "session:join",
          session_id: j,
          client_id: a
        };
        f.send(JSON.stringify(z)), u(j);
      }
    },
    [f, a]
  ), B = T.useCallback(() => {
    if (f && a) {
      const j = {
        type: "session:list",
        client_id: a
      };
      f.send(JSON.stringify(j));
    }
  }, [f, a]), L = T.useCallback(
    (j) => {
      if (f && a) {
        const z = {
          type: "session:update",
          client_id: a,
          session_id: s,
          data: j
        };
        f.send(JSON.stringify(z));
      }
      c(
        (z) => z && {
          ...z,
          ...j
        }
      );
    },
    [f, a, s]
  ), G = T.useCallback(
    (j) => {
      if (!s || !a) {
        console.log("No session details yet, cannot retry message");
        return;
      }
      const z = l.find((F) => F.id === j);
      if (z && z.from === "user")
        if (i(
          (F) => F.map(
            (ne) => ne.id === j ? { ...ne, status: "sent" } : ne
          )
        ), f)
          if (z.file) {
            const F = {
              type: "message:file",
              session_id: s,
              client_id: a,
              message: {
                id: z.id,
                from: "user",
                type: "file",
                timestamp: Date.now(),
                file: z.file
              }
            };
            f.send(JSON.stringify(F));
          } else {
            const F = {
              type: "message:new",
              session_id: s,
              client_id: a,
              message: {
                id: z.id,
                from: "user",
                content: z.content,
                type: "text",
                timestamp: Date.now()
              }
            };
            f.send(JSON.stringify(F));
          }
        else
          i(
            (F) => F.map(
              (ne) => ne.id === j ? { ...ne, status: "failed" } : ne
            )
          );
    },
    [l, s, a, f]
  );
  return {
    messages: l,
    sendMessage: w,
    sendFile: C,
    retryMessage: G,
    startNewChat: $,
    endCurrentChat: P,
    loadSession: M,
    getRecentChats: B,
    updateProfile: L,
    sessions: h,
    selectedSession: d,
    isConnected: !!f,
    operators: v,
    lastActive: x,
    isLoading: r,
    config: t,
    sessionId: s,
    clientId: a
  };
}
var ur = {};
var Jp = T;
function D(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ze = Object.prototype.hasOwnProperty, P1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Lc = {}, Dc = {};
function Zp(e) {
  return ze.call(Dc, e) ? !0 : ze.call(Lc, e) ? !1 : P1.test(e) ? Dc[e] = !0 : (Lc[e] = !0, !1);
}
function Re(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  xe[e] = new Re(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  xe[t] = new Re(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  xe[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  xe[e] = new Re(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  xe[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  xe[e] = new Re(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  xe[e] = new Re(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  xe[e] = new Re(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  xe[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qu = /[\-:]([a-z])/g;
function ea(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    qu,
    ea
  );
  xe[t] = new Re(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(qu, ea);
  xe[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(qu, ea);
  xe[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  xe[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  xe[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var nl = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, N1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(nl).forEach(function(e) {
  N1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), nl[t] = nl[e];
  });
});
var T1 = /["'&<>]/;
function Pe(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = T1.exec(e);
  if (t) {
    var n = "", r, o = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      o !== r && (n += e.substring(o, r)), o = r + 1, n += t;
    }
    e = o !== r ? n + e.substring(o, r) : n;
  }
  return e;
}
var M1 = /([A-Z])/g, R1 = /^ms-/, Qs = Array.isArray;
function kt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function j1(e, t, n) {
  switch (t) {
    case "select":
      return kt(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return kt(2, null);
    case "math":
      return kt(3, null);
    case "foreignObject":
      return kt(1, null);
    case "table":
      return kt(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return kt(5, null);
    case "colgroup":
      return kt(7, null);
    case "tr":
      return kt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? kt(1, null) : e;
}
var Oc = /* @__PURE__ */ new Map();
function qp(e, t, n) {
  if (typeof n != "object") throw Error(D(62));
  t = !0;
  for (var r in n) if (ze.call(n, r)) {
    var o = n[r];
    if (o != null && typeof o != "boolean" && o !== "") {
      if (r.indexOf("--") === 0) {
        var l = Pe(r);
        o = Pe(("" + o).trim());
      } else {
        l = r;
        var i = Oc.get(l);
        i !== void 0 || (i = Pe(l.replace(M1, "-$1").toLowerCase().replace(R1, "-ms-")), Oc.set(l, i)), l = i, o = typeof o == "number" ? o === 0 || ze.call(nl, r) ? "" + o : o + "px" : Pe(("" + o).trim());
      }
      t ? (t = !1, e.push(' style="', l, ":", o)) : e.push(";", l, ":", o);
    }
  }
  t || e.push('"');
}
function be(e, t, n, r) {
  switch (n) {
    case "style":
      qp(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
    if (t = xe.hasOwnProperty(n) ? xe[n] : null, t !== null) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (n = t.attributeName, t.type) {
        case 3:
          r && e.push(" ", n, '=""');
          break;
        case 4:
          r === !0 ? e.push(" ", n, '=""') : r !== !1 && e.push(" ", n, '="', Pe(r), '"');
          break;
        case 5:
          isNaN(r) || e.push(" ", n, '="', Pe(r), '"');
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(" ", n, '="', Pe(r), '"');
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(" ", n, '="', Pe(r), '"');
      }
    } else if (Zp(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(" ", n, '="', Pe(r), '"');
    }
  }
}
function rl(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(D(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(D(61));
    t = t.__html, t != null && e.push("" + t);
  }
}
function z1(e) {
  var t = "";
  return Jp.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Bi(e, t, n, r) {
  e.push(ht(n));
  var o = n = null, l;
  for (l in t) if (ze.call(t, l)) {
    var i = t[l];
    if (i != null) switch (l) {
      case "children":
        n = i;
        break;
      case "dangerouslySetInnerHTML":
        o = i;
        break;
      default:
        be(e, r, l, i);
    }
  }
  return e.push(">"), rl(e, o, n), typeof n == "string" ? (e.push(Pe(n)), null) : n;
}
var F1 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ic = /* @__PURE__ */ new Map();
function ht(e) {
  var t = Ic.get(e);
  if (t === void 0) {
    if (!F1.test(e)) throw Error(D(65, e));
    t = "<" + e, Ic.set(e, t);
  }
  return t;
}
function L1(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(ht("select"));
      var l = null, i = null;
      for (p in n) if (ze.call(n, p)) {
        var s = n[p];
        if (s != null) switch (p) {
          case "children":
            l = s;
            break;
          case "dangerouslySetInnerHTML":
            i = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            be(e, r, p, s);
        }
      }
      return e.push(">"), rl(e, i, l), l;
    case "option":
      i = o.selectedValue, e.push(ht("option"));
      var u = s = null, a = null, p = null;
      for (l in n) if (ze.call(n, l)) {
        var h = n[l];
        if (h != null) switch (l) {
          case "children":
            s = h;
            break;
          case "selected":
            a = h;
            break;
          case "dangerouslySetInnerHTML":
            p = h;
            break;
          case "value":
            u = h;
          default:
            be(e, r, l, h);
        }
      }
      if (i != null) if (n = u !== null ? "" + u : z1(s), Qs(i)) {
        for (r = 0; r < i.length; r++)
          if ("" + i[r] === n) {
            e.push(' selected=""');
            break;
          }
      } else "" + i === n && e.push(' selected=""');
      else a && e.push(' selected=""');
      return e.push(">"), rl(e, p, s), s;
    case "textarea":
      e.push(ht("textarea")), p = i = l = null;
      for (s in n) if (ze.call(n, s) && (u = n[s], u != null)) switch (s) {
        case "children":
          p = u;
          break;
        case "value":
          l = u;
          break;
        case "defaultValue":
          i = u;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(D(91));
        default:
          be(
            e,
            r,
            s,
            u
          );
      }
      if (l === null && i !== null && (l = i), e.push(">"), p != null) {
        if (l != null) throw Error(D(92));
        if (Qs(p) && 1 < p.length) throw Error(D(93));
        l = "" + p;
      }
      return typeof l == "string" && l[0] === `
` && e.push(`
`), l !== null && e.push(Pe("" + l)), null;
    case "input":
      e.push(ht("input")), u = p = s = l = null;
      for (i in n) if (ze.call(n, i) && (a = n[i], a != null)) switch (i) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(D(399, "input"));
        case "defaultChecked":
          u = a;
          break;
        case "defaultValue":
          s = a;
          break;
        case "checked":
          p = a;
          break;
        case "value":
          l = a;
          break;
        default:
          be(e, r, i, a);
      }
      return p !== null ? be(e, r, "checked", p) : u !== null && be(e, r, "checked", u), l !== null ? be(e, r, "value", l) : s !== null && be(e, r, "value", s), e.push("/>"), null;
    case "menuitem":
      e.push(ht("menuitem"));
      for (var m in n) if (ze.call(n, m) && (l = n[m], l != null)) switch (m) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(D(400));
        default:
          be(e, r, m, l);
      }
      return e.push(">"), null;
    case "title":
      e.push(ht("title")), l = null;
      for (h in n) if (ze.call(n, h) && (i = n[h], i != null)) switch (h) {
        case "children":
          l = i;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(D(434));
        default:
          be(e, r, h, i);
      }
      return e.push(">"), l;
    case "listing":
    case "pre":
      e.push(ht(t)), i = l = null;
      for (u in n) if (ze.call(n, u) && (s = n[u], s != null)) switch (u) {
        case "children":
          l = s;
          break;
        case "dangerouslySetInnerHTML":
          i = s;
          break;
        default:
          be(e, r, u, s);
      }
      if (e.push(">"), i != null) {
        if (l != null) throw Error(D(60));
        if (typeof i != "object" || !("__html" in i)) throw Error(D(61));
        n = i.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(`
`, n) : e.push("" + n));
      }
      return typeof l == "string" && l[0] === `
` && e.push(`
`), l;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(ht(t));
      for (var v in n) if (ze.call(n, v) && (l = n[v], l != null)) switch (v) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(D(399, t));
        default:
          be(e, r, v, l);
      }
      return e.push("/>"), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Bi(
        e,
        n,
        t,
        r
      );
    case "html":
      return o.insertionMode === 0 && e.push("<!DOCTYPE html>"), Bi(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Bi(e, n, t, r);
      e.push(ht(t)), i = l = null;
      for (a in n) if (ze.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          l = s;
          break;
        case "dangerouslySetInnerHTML":
          i = s;
          break;
        case "style":
          qp(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          Zp(a) && typeof s != "function" && typeof s != "symbol" && e.push(" ", a, '="', Pe(s), '"');
      }
      return e.push(">"), rl(e, i, l), l;
  }
}
function Ac(e, t, n) {
  if (e.push('<!--$?--><template id="'), n === null) throw Error(D(395));
  return e.push(n), e.push('"></template>');
}
function D1(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return e.push('<div hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 2:
      return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 3:
      return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 4:
      return e.push('<table hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 5:
      return e.push('<table hidden><tbody id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 6:
      return e.push('<table hidden><tr id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 7:
      return e.push('<table hidden><colgroup id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    default:
      throw Error(D(397));
  }
}
function O1(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push("</div>");
    case 2:
      return e.push("</svg>");
    case 3:
      return e.push("</math>");
    case 4:
      return e.push("</table>");
    case 5:
      return e.push("</tbody></table>");
    case 6:
      return e.push("</tr></table>");
    case 7:
      return e.push("</colgroup></table>");
    default:
      throw Error(D(397));
  }
}
var I1 = /[<\u2028\u2029]/g;
function Hi(e) {
  return JSON.stringify(e).replace(I1, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function A1(e, t) {
  return t = t === void 0 ? "" : t, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: t + "P:", segmentPrefix: t + "S:", boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
}
function Uc(e, t, n, r) {
  return n.generateStaticMarkup ? (e.push(Pe(t)), !1) : (t === "" ? e = r : (r && e.push("<!-- -->"), e.push(Pe(t)), e = !0), e);
}
var Ur = Object.assign, U1 = Symbol.for("react.element"), eh = Symbol.for("react.portal"), th = Symbol.for("react.fragment"), nh = Symbol.for("react.strict_mode"), rh = Symbol.for("react.profiler"), oh = Symbol.for("react.provider"), lh = Symbol.for("react.context"), ih = Symbol.for("react.forward_ref"), sh = Symbol.for("react.suspense"), uh = Symbol.for("react.suspense_list"), ah = Symbol.for("react.memo"), ta = Symbol.for("react.lazy"), b1 = Symbol.for("react.scope"), W1 = Symbol.for("react.debug_trace_mode"), V1 = Symbol.for("react.legacy_hidden"), B1 = Symbol.for("react.default_value"), bc = Symbol.iterator;
function Ys(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case th:
      return "Fragment";
    case eh:
      return "Portal";
    case rh:
      return "Profiler";
    case nh:
      return "StrictMode";
    case sh:
      return "Suspense";
    case uh:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case lh:
      return (e.displayName || "Context") + ".Consumer";
    case oh:
      return (e._context.displayName || "Context") + ".Provider";
    case ih:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ah:
      return t = e.displayName || null, t !== null ? t : Ys(e.type) || "Memo";
    case ta:
      t = e._payload, e = e._init;
      try {
        return Ys(e(t));
      } catch {
      }
  }
  return null;
}
var ch = {};
function Wc(e, t) {
  if (e = e.contextTypes, !e) return ch;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var kn = null;
function ui(e, t) {
  if (e !== t) {
    e.context._currentValue2 = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(D(401));
    } else {
      if (n === null) throw Error(D(401));
      ui(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function dh(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && dh(e);
}
function fh(e) {
  var t = e.parent;
  t !== null && fh(t), e.context._currentValue2 = e.value;
}
function ph(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(D(402));
  e.depth === t.depth ? ui(e, t) : ph(e, t);
}
function hh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(D(402));
  e.depth === n.depth ? ui(e, n) : hh(e, n), t.context._currentValue2 = t.value;
}
function Dl(e) {
  var t = kn;
  t !== e && (t === null ? fh(e) : e === null ? dh(t) : t.depth === e.depth ? ui(t, e) : t.depth > e.depth ? ph(t, e) : hh(t, e), kn = e);
}
var Vc = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function Bc(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = Vc, e.props = n, e.state = o;
  var l = { queue: [], replace: !1 };
  e._reactInternals = l;
  var i = t.contextType;
  if (e.context = typeof i == "object" && i !== null ? i._currentValue2 : r, i = t.getDerivedStateFromProps, typeof i == "function" && (i = i(n, o), o = i == null ? o : Ur({}, o, i), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && Vc.enqueueReplaceState(e, e.state, null), l.queue !== null && 0 < l.queue.length) if (t = l.queue, i = l.replace, l.queue = null, l.replace = !1, i && t.length === 1) e.state = t[0];
  else {
    for (l = i ? t[0] : e.state, o = !0, i = i ? 1 : 0; i < t.length; i++) {
      var s = t[i];
      s = typeof s == "function" ? s.call(e, l, n, r) : s, s != null && (o ? (o = !1, l = Ur({}, l, s)) : Ur(l, s));
    }
    e.state = l;
  }
  else l.queue = null;
}
var H1 = { id: 1, overflow: "" };
function Xs(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - ol(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - ol(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    return l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, { id: 1 << 32 - ol(t) + o | n << o | r, overflow: l + e };
  }
  return { id: 1 << l | n << o | r, overflow: e };
}
var ol = Math.clz32 ? Math.clz32 : X1, Q1 = Math.log, Y1 = Math.LN2;
function X1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Q1(e) / Y1 | 0) | 0;
}
function K1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var G1 = typeof Object.is == "function" ? Object.is : K1, zt = null, na = null, ll = null, Y = null, Pr = !1, Ol = !1, lo = 0, Ht = null, ai = 0;
function mn() {
  if (zt === null) throw Error(D(321));
  return zt;
}
function Hc() {
  if (0 < ai) throw Error(D(312));
  return { memoizedState: null, queue: null, next: null };
}
function ra() {
  return Y === null ? ll === null ? (Pr = !1, ll = Y = Hc()) : (Pr = !0, Y = ll) : Y.next === null ? (Pr = !1, Y = Y.next = Hc()) : (Pr = !0, Y = Y.next), Y;
}
function oa() {
  na = zt = null, Ol = !1, ll = null, ai = 0, Y = Ht = null;
}
function mh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qc(e, t, n) {
  if (zt = mn(), Y = ra(), Pr) {
    var r = Y.queue;
    if (t = r.dispatch, Ht !== null && (n = Ht.get(r), n !== void 0)) {
      Ht.delete(r), r = Y.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return Y.memoizedState = r, [r, t];
    }
    return [Y.memoizedState, t];
  }
  return e = e === mh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, Y.memoizedState = e, e = Y.queue = { last: null, dispatch: null }, e = e.dispatch = J1.bind(null, zt, e), [Y.memoizedState, e];
}
function Yc(e, t) {
  if (zt = mn(), Y = ra(), t = t === void 0 ? null : t, Y !== null) {
    var n = Y.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!G1(t[o], r[o])) {
          r = !1;
          break e;
        }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return e = e(), Y.memoizedState = [e, t], e;
}
function J1(e, t, n) {
  if (25 <= ai) throw Error(D(301));
  if (e === zt) if (Ol = !0, e = { action: n, next: null }, Ht === null && (Ht = /* @__PURE__ */ new Map()), n = Ht.get(t), n === void 0) Ht.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function Z1() {
  throw Error(D(394));
}
function Ao() {
}
var Xc = { readContext: function(e) {
  return e._currentValue2;
}, useContext: function(e) {
  return mn(), e._currentValue2;
}, useMemo: Yc, useReducer: Qc, useRef: function(e) {
  zt = mn(), Y = ra();
  var t = Y.memoizedState;
  return t === null ? (e = { current: e }, Y.memoizedState = e) : t;
}, useState: function(e) {
  return Qc(mh, e);
}, useInsertionEffect: Ao, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return Yc(function() {
    return e;
  }, t);
}, useImperativeHandle: Ao, useEffect: Ao, useDebugValue: Ao, useDeferredValue: function(e) {
  return mn(), e;
}, useTransition: function() {
  return mn(), [
    !1,
    Z1
  ];
}, useId: function() {
  var e = na.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - ol(e) - 1)).toString(32) + t;
  var n = il;
  if (n === null) throw Error(D(404));
  return t = lo++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return mn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(D(407));
  return n();
} }, il = null, Qi = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function q1(e) {
  return console.error(e), null;
}
function Nr() {
}
function ev(e, t, n, r, o, l, i, s, u) {
  var a = [], p = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: p, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? q1 : o, onAllReady: Nr, onShellReady: i === void 0 ? Nr : i, onShellError: Nr, onFatalError: Nr }, n = Il(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = la(t, e, null, n, p, ch, null, H1), a.push(e), t;
}
function la(e, t, n, r, o, l, i, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && vh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: l, context: i, treeContext: s };
  return o.add(u), u;
}
function Il(e, t, n, r, o, l) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: l };
}
function io(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function Al(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, e.destination.destroy(t)) : (e.status = 1, e.fatalError = t);
}
function Kc(e, t, n, r, o) {
  for (zt = {}, na = t, lo = 0, e = n(r, o); Ol; ) Ol = !1, lo = 0, ai += 1, Y = null, e = n(r, o);
  return oa(), e;
}
function Gc(e, t, n, r) {
  var o = n.render(), l = r.childContextTypes;
  if (l != null) {
    var i = t.legacyContext;
    if (typeof n.getChildContext != "function") r = i;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in l)) throw Error(D(108, Ys(r) || "Unknown", s));
      r = Ur({}, i, n);
    }
    t.legacyContext = r, Be(e, t, o), t.legacyContext = i;
  } else Be(e, t, o);
}
function Jc(e, t) {
  if (e && e.defaultProps) {
    t = Ur({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ks(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = Wc(n, t.legacyContext);
    var l = n.contextType;
    l = new n(r, typeof l == "object" && l !== null ? l._currentValue2 : o), Bc(l, n, r, o), Gc(e, t, l, n);
  } else {
    l = Wc(n, t.legacyContext), o = Kc(e, t, n, r, l);
    var i = lo !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) Bc(o, n, r, l), Gc(e, t, o, n);
    else if (i) {
      r = t.treeContext, t.treeContext = Xs(r, 1, 0);
      try {
        Be(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else Be(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, l = L1(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, i = o.formatContext, o.formatContext = j1(i, n, r), Gs(e, t, l), o.formatContext = i, n) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        o.chunks.push("</", n, ">");
    }
    o.lastPushedText = !1;
  } else {
    switch (n) {
      case V1:
      case W1:
      case nh:
      case rh:
      case th:
        Be(e, t, r.children);
        return;
      case uh:
        Be(e, t, r.children);
        return;
      case b1:
        throw Error(D(343));
      case sh:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, l = r.fallback, r = r.children, i = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: i, errorDigest: null }, u = Il(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Il(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (Gs(
              e,
              t,
              r
            ), e.responseState.generateStaticMarkup || a.lastPushedText && a.textEmbedded && a.chunks.push("<!-- -->"), a.status = 1, Ul(s, a), s.pendingTasks === 0) break e;
          } catch (p) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = io(e, p);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = la(e, l, n, u, i, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case ih:
        if (r = Kc(e, t, n.render, r, o), lo !== 0) {
          n = t.treeContext, t.treeContext = Xs(n, 1, 0);
          try {
            Be(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Be(e, t, r);
        return;
      case ah:
        n = n.type, r = Jc(n, r), Ks(e, t, n, r, o);
        return;
      case oh:
        if (o = r.children, n = n._context, r = r.value, l = n._currentValue2, n._currentValue2 = r, i = kn, kn = r = { parent: i, depth: i === null ? 0 : i.depth + 1, context: n, parentValue: l, value: r }, t.context = r, Be(e, t, o), e = kn, e === null) throw Error(D(403));
        r = e.parentValue, e.context._currentValue2 = r === B1 ? e.context._defaultValue : r, e = kn = e.parent, t.context = e;
        return;
      case lh:
        r = r.children, r = r(n._currentValue2), Be(e, t, r);
        return;
      case ta:
        o = n._init, n = o(n._payload), r = Jc(n, r), Ks(
          e,
          t,
          n,
          r,
          void 0
        );
        return;
    }
    throw Error(D(130, n == null ? n : typeof n, ""));
  }
}
function Be(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case U1:
        Ks(e, t, n.type, n.props, n.ref);
        return;
      case eh:
        throw Error(D(257));
      case ta:
        var r = n._init;
        n = r(n._payload), Be(e, t, n);
        return;
    }
    if (Qs(n)) {
      Zc(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = bc && n[bc] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        Zc(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = Uc(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = Uc(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function Zc(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var l = t.treeContext;
    t.treeContext = Xs(l, r, o);
    try {
      Gs(e, t, n[o]);
    } finally {
      t.treeContext = l;
    }
  }
}
function Gs(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, l = t.context;
  try {
    return Be(e, t, n);
  } catch (u) {
    if (oa(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var i = t.blockedSegment, s = Il(e, i.chunks.length, null, i.formatContext, i.lastPushedText, !0);
      i.children.push(s), i.lastPushedText = !1, e = la(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = l, Dl(l);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = l, Dl(l), u;
  }
}
function tv(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, gh(this, t, e);
}
function yh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(D(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return yh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Ul(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Ul(e, n);
  } else e.completedSegments.push(t);
}
function gh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(D(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Nr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Ul(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(tv, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Ul(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function vh(e) {
  if (e.status !== 2) {
    var t = kn, n = Qi.current;
    Qi.current = Xc;
    var r = il;
    il = e.responseState;
    try {
      var o = e.pingedTasks, l;
      for (l = 0; l < o.length; l++) {
        var i = o[l], s = e, u = i.blockedSegment;
        if (u.status === 0) {
          Dl(i.context);
          try {
            Be(s, i, i.node), s.responseState.generateStaticMarkup || u.lastPushedText && u.textEmbedded && u.chunks.push("<!-- -->"), i.abortSet.delete(i), u.status = 1, gh(s, i.blockedBoundary, u);
          } catch (y) {
            if (oa(), typeof y == "object" && y !== null && typeof y.then == "function") {
              var a = i.ping;
              y.then(a, a);
            } else {
              i.abortSet.delete(i), u.status = 4;
              var p = i.blockedBoundary, h = y, m = io(s, h);
              if (p === null ? Al(s, h) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = m, p.parentFlushed && s.clientRenderedBoundaries.push(p))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var v = s.onAllReady;
                v();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, l), e.destination !== null && ia(e, e.destination);
    } catch (y) {
      io(e, y), Al(e, y);
    } finally {
      il = r, Qi.current = n, n === Xc && Dl(t);
    }
  }
}
function Uo(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, t.push('<template id="'), t.push(e.placeholderPrefix), e = r.toString(16), t.push(e), t.push('"></template>');
    case 1:
      n.status = 2;
      var o = !0;
      r = n.chunks;
      var l = 0;
      n = n.children;
      for (var i = 0; i < n.length; i++) {
        for (o = n[i]; l < o.index; l++) t.push(r[l]);
        o = ci(e, t, o);
      }
      for (; l < r.length - 1; l++) t.push(r[l]);
      return l < r.length && (o = t.push(r[l])), o;
    default:
      throw Error(D(390));
  }
}
function ci(e, t, n) {
  var r = n.boundary;
  if (r === null) return Uo(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) return e.responseState.generateStaticMarkup || (r = r.errorDigest, t.push("<!--$!-->"), t.push("<template"), r && (t.push(' data-dgst="'), r = Pe(r), t.push(r), t.push('"')), t.push("></template>")), Uo(e, t, n), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
  if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, l = o.nextSuspenseID++;
    return o = o.boundaryPrefix + l.toString(16), r = r.id = o, Ac(t, e.responseState, r), Uo(e, t, n), t.push("<!--/$-->");
  }
  if (r.byteSize > e.progressiveChunkSize) return r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), Ac(t, e.responseState, r.id), Uo(e, t, n), t.push("<!--/$-->");
  if (e.responseState.generateStaticMarkup || t.push("<!--$-->"), n = r.completedSegments, n.length !== 1) throw Error(D(391));
  return ci(e, t, n[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
}
function qc(e, t, n) {
  return D1(t, e.responseState, n.formatContext, n.id), ci(e, t, n), O1(t, n.formatContext);
}
function ed(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) wh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), r === null) throw Error(D(395));
  return n = n.toString(16), t.push(r), t.push('","'), t.push(e.segmentPrefix), t.push(n), t.push('")<\/script>');
}
function wh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(D(392));
    return qc(e, t, r);
  }
  return qc(e, t, r), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), o = o.toString(16), t.push(o), t.push('","'), t.push(e.placeholderPrefix), t.push(o), t.push('")<\/script>');
}
function ia(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      ci(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var o = e.clientRenderedBoundaries, l;
    for (l = 0; l < o.length; l++) {
      var i = o[l];
      r = t;
      var s = e.responseState, u = i.id, a = i.errorDigest, p = i.errorMessage, h = i.errorComponentStack;
      if (r.push(s.startInlineScript), s.sentClientRenderFunction ? r.push('$RX("') : (s.sentClientRenderFunction = !0, r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), u === null) throw Error(D(395));
      if (r.push(u), r.push('"'), a || p || h) {
        r.push(",");
        var m = Hi(a || "");
        r.push(m);
      }
      if (p || h) {
        r.push(",");
        var v = Hi(p || "");
        r.push(v);
      }
      if (h) {
        r.push(",");
        var y = Hi(h);
        r.push(y);
      }
      if (!r.push(")<\/script>")) {
        e.destination = null, l++, o.splice(0, l);
        return;
      }
    }
    o.splice(0, l);
    var x = e.completedBoundaries;
    for (l = 0; l < x.length; l++) if (!ed(e, t, x[l])) {
      e.destination = null, l++, x.splice(0, l);
      return;
    }
    x.splice(0, l);
    var k = e.partialBoundaries;
    for (l = 0; l < k.length; l++) {
      var d = k[l];
      e: {
        o = e, i = t;
        var c = d.completedSegments;
        for (s = 0; s < c.length; s++) if (!wh(o, i, d, c[s])) {
          s++, c.splice(0, s);
          var f = !1;
          break e;
        }
        c.splice(0, s), f = !0;
      }
      if (!f) {
        e.destination = null, l++, k.splice(0, l);
        return;
      }
    }
    k.splice(0, l);
    var w = e.completedBoundaries;
    for (l = 0; l < w.length; l++) if (!ed(e, t, w[l])) {
      e.destination = null, l++, w.splice(0, l);
      return;
    }
    w.splice(0, l);
  } finally {
    e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null);
  }
}
function nv(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return yh(r, e, t);
    }), n.clear(), e.destination !== null && ia(e, e.destination);
  } catch (r) {
    io(e, r), Al(e, r);
  }
}
function rv() {
}
function xh(e, t, n, r) {
  var o = !1, l = null, i = "", s = { push: function(a) {
    return a !== null && (i += a), !0;
  }, destroy: function(a) {
    o = !0, l = a;
  } }, u = !1;
  if (e = ev(e, A1(n, t ? t.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, rv, void 0, function() {
    u = !0;
  }), vh(e), nv(e, r), e.status === 1) e.status = 2, s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      ia(e, s);
    } catch (a) {
      io(e, a), Al(e, a);
    }
  }
  if (o) throw l;
  if (!u) throw Error(D(426));
  return i;
}
ur.renderToNodeStream = function() {
  throw Error(D(207));
};
ur.renderToStaticMarkup = function(e, t) {
  return xh(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
ur.renderToStaticNodeStream = function() {
  throw Error(D(208));
};
ur.renderToString = function(e, t) {
  return xh(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
ur.version = "18.3.1";
var sa = {};
var kh = T;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var He = null, Qe = 0;
function R(e, t) {
  if (t.length !== 0) if (512 < t.length) 0 < Qe && (e.enqueue(new Uint8Array(He.buffer, 0, Qe)), He = new Uint8Array(512), Qe = 0), e.enqueue(t);
  else {
    var n = He.length - Qe;
    n < t.length && (n === 0 ? e.enqueue(He) : (He.set(t.subarray(0, n), Qe), e.enqueue(He), t = t.subarray(n)), He = new Uint8Array(512), Qe = 0), He.set(t, Qe), Qe += t.length;
  }
}
function Z(e, t) {
  return R(e, t), !0;
}
function td(e) {
  He && 0 < Qe && (e.enqueue(new Uint8Array(He.buffer, 0, Qe)), He = null, Qe = 0);
}
var Sh = new TextEncoder();
function U(e) {
  return Sh.encode(e);
}
function _(e) {
  return Sh.encode(e);
}
function Ch(e, t) {
  typeof e.error == "function" ? e.error(t) : e.close();
}
var Fe = Object.prototype.hasOwnProperty, ov = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, nd = {}, rd = {};
function _h(e) {
  return Fe.call(rd, e) ? !0 : Fe.call(nd, e) ? !1 : ov.test(e) ? rd[e] = !0 : (nd[e] = !0, !1);
}
function je(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ke[e] = new je(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ke[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ke[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ke[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ke[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ke[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ke[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ke[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ke[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ua = /[\-:]([a-z])/g;
function aa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ua,
    aa
  );
  ke[t] = new je(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ua, aa);
  ke[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ua, aa);
  ke[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ke[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ke[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var sl = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, lv = ["Webkit", "ms", "Moz", "O"];
Object.keys(sl).forEach(function(e) {
  lv.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), sl[t] = sl[e];
  });
});
var iv = /["'&<>]/;
function ge(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = iv.exec(e);
  if (t) {
    var n = "", r, o = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      o !== r && (n += e.substring(o, r)), o = r + 1, n += t;
    }
    e = o !== r ? n + e.substring(o, r) : n;
  }
  return e;
}
var sv = /([A-Z])/g, uv = /^ms-/, Js = Array.isArray, av = _("<script>"), cv = _("<\/script>"), dv = _('<script src="'), fv = _('<script type="module" src="'), od = _('" async=""><\/script>'), pv = /(<\/|<)(s)(cript)/gi;
function hv(e, t, n, r) {
  return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
}
function mv(e, t, n, r, o) {
  e = e === void 0 ? "" : e, t = t === void 0 ? av : _('<script nonce="' + ge(t) + '">');
  var l = [];
  if (n !== void 0 && l.push(t, U(("" + n).replace(pv, hv)), cv), r !== void 0) for (n = 0; n < r.length; n++) l.push(dv, U(ge(r[n])), od);
  if (o !== void 0) for (r = 0; r < o.length; r++) l.push(fv, U(ge(o[r])), od);
  return { bootstrapChunks: l, startInlineScript: t, placeholderPrefix: _(e + "P:"), segmentPrefix: _(e + "S:"), boundaryPrefix: e + "B:", idPrefix: e, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
}
function mt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function yv(e) {
  return mt(e === "http://www.w3.org/2000/svg" ? 2 : e === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
}
function gv(e, t, n) {
  switch (t) {
    case "select":
      return mt(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return mt(2, null);
    case "math":
      return mt(3, null);
    case "foreignObject":
      return mt(1, null);
    case "table":
      return mt(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return mt(5, null);
    case "colgroup":
      return mt(7, null);
    case "tr":
      return mt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? mt(1, null) : e;
}
var ca = _("<!-- -->");
function ld(e, t, n, r) {
  return t === "" ? r : (r && e.push(ca), e.push(U(ge(t))), !0);
}
var id = /* @__PURE__ */ new Map(), vv = _(' style="'), sd = _(":"), wv = _(";");
function Eh(e, t, n) {
  if (typeof n != "object") throw Error(I(62));
  t = !0;
  for (var r in n) if (Fe.call(n, r)) {
    var o = n[r];
    if (o != null && typeof o != "boolean" && o !== "") {
      if (r.indexOf("--") === 0) {
        var l = U(ge(r));
        o = U(ge(("" + o).trim()));
      } else {
        l = r;
        var i = id.get(l);
        i !== void 0 || (i = _(ge(l.replace(sv, "-$1").toLowerCase().replace(uv, "-ms-"))), id.set(l, i)), l = i, o = typeof o == "number" ? o === 0 || Fe.call(sl, r) ? U("" + o) : U(o + "px") : U(ge(("" + o).trim()));
      }
      t ? (t = !1, e.push(vv, l, sd, o)) : e.push(wv, l, sd, o);
    }
  }
  t || e.push(yn);
}
var Ot = _(" "), zn = _('="'), yn = _('"'), ud = _('=""');
function We(e, t, n, r) {
  switch (n) {
    case "style":
      Eh(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
    if (t = ke.hasOwnProperty(n) ? ke[n] : null, t !== null) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (n = U(t.attributeName), t.type) {
        case 3:
          r && e.push(Ot, n, ud);
          break;
        case 4:
          r === !0 ? e.push(Ot, n, ud) : r !== !1 && e.push(Ot, n, zn, U(ge(r)), yn);
          break;
        case 5:
          isNaN(r) || e.push(Ot, n, zn, U(ge(r)), yn);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(Ot, n, zn, U(ge(r)), yn);
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(Ot, n, zn, U(ge(r)), yn);
      }
    } else if (_h(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(Ot, U(n), zn, U(ge(r)), yn);
    }
  }
}
var It = _(">"), ad = _("/>");
function ul(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(I(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(I(61));
    t = t.__html, t != null && e.push(U("" + t));
  }
}
function xv(e) {
  var t = "";
  return kh.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
var Yi = _(' selected=""');
function Xi(e, t, n, r) {
  e.push(yt(n));
  var o = n = null, l;
  for (l in t) if (Fe.call(t, l)) {
    var i = t[l];
    if (i != null) switch (l) {
      case "children":
        n = i;
        break;
      case "dangerouslySetInnerHTML":
        o = i;
        break;
      default:
        We(e, r, l, i);
    }
  }
  return e.push(It), ul(e, o, n), typeof n == "string" ? (e.push(U(ge(n))), null) : n;
}
var Ki = _(`
`), kv = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, cd = /* @__PURE__ */ new Map();
function yt(e) {
  var t = cd.get(e);
  if (t === void 0) {
    if (!kv.test(e)) throw Error(I(65, e));
    t = _("<" + e), cd.set(e, t);
  }
  return t;
}
var Sv = _("<!DOCTYPE html>");
function Cv(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(yt("select"));
      var l = null, i = null;
      for (p in n) if (Fe.call(n, p)) {
        var s = n[p];
        if (s != null) switch (p) {
          case "children":
            l = s;
            break;
          case "dangerouslySetInnerHTML":
            i = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            We(e, r, p, s);
        }
      }
      return e.push(It), ul(e, i, l), l;
    case "option":
      i = o.selectedValue, e.push(yt("option"));
      var u = s = null, a = null, p = null;
      for (l in n) if (Fe.call(n, l)) {
        var h = n[l];
        if (h != null) switch (l) {
          case "children":
            s = h;
            break;
          case "selected":
            a = h;
            break;
          case "dangerouslySetInnerHTML":
            p = h;
            break;
          case "value":
            u = h;
          default:
            We(e, r, l, h);
        }
      }
      if (i != null) if (n = u !== null ? "" + u : xv(s), Js(i)) {
        for (r = 0; r < i.length; r++)
          if ("" + i[r] === n) {
            e.push(Yi);
            break;
          }
      } else "" + i === n && e.push(Yi);
      else a && e.push(Yi);
      return e.push(It), ul(e, p, s), s;
    case "textarea":
      e.push(yt("textarea")), p = i = l = null;
      for (s in n) if (Fe.call(n, s) && (u = n[s], u != null)) switch (s) {
        case "children":
          p = u;
          break;
        case "value":
          l = u;
          break;
        case "defaultValue":
          i = u;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(I(91));
        default:
          We(e, r, s, u);
      }
      if (l === null && i !== null && (l = i), e.push(It), p != null) {
        if (l != null) throw Error(I(92));
        if (Js(p) && 1 < p.length) throw Error(I(93));
        l = "" + p;
      }
      return typeof l == "string" && l[0] === `
` && e.push(Ki), l !== null && e.push(U(ge("" + l))), null;
    case "input":
      e.push(yt("input")), u = p = s = l = null;
      for (i in n) if (Fe.call(n, i) && (a = n[i], a != null)) switch (i) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(I(399, "input"));
        case "defaultChecked":
          u = a;
          break;
        case "defaultValue":
          s = a;
          break;
        case "checked":
          p = a;
          break;
        case "value":
          l = a;
          break;
        default:
          We(e, r, i, a);
      }
      return p !== null ? We(
        e,
        r,
        "checked",
        p
      ) : u !== null && We(e, r, "checked", u), l !== null ? We(e, r, "value", l) : s !== null && We(e, r, "value", s), e.push(ad), null;
    case "menuitem":
      e.push(yt("menuitem"));
      for (var m in n) if (Fe.call(n, m) && (l = n[m], l != null)) switch (m) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(I(400));
        default:
          We(e, r, m, l);
      }
      return e.push(It), null;
    case "title":
      e.push(yt("title")), l = null;
      for (h in n) if (Fe.call(n, h) && (i = n[h], i != null)) switch (h) {
        case "children":
          l = i;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(I(434));
        default:
          We(e, r, h, i);
      }
      return e.push(It), l;
    case "listing":
    case "pre":
      e.push(yt(t)), i = l = null;
      for (u in n) if (Fe.call(n, u) && (s = n[u], s != null)) switch (u) {
        case "children":
          l = s;
          break;
        case "dangerouslySetInnerHTML":
          i = s;
          break;
        default:
          We(e, r, u, s);
      }
      if (e.push(It), i != null) {
        if (l != null) throw Error(I(60));
        if (typeof i != "object" || !("__html" in i)) throw Error(I(61));
        n = i.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(Ki, U(n)) : e.push(U("" + n)));
      }
      return typeof l == "string" && l[0] === `
` && e.push(Ki), l;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(yt(t));
      for (var v in n) if (Fe.call(n, v) && (l = n[v], l != null)) switch (v) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(I(399, t));
        default:
          We(e, r, v, l);
      }
      return e.push(ad), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Xi(e, n, t, r);
    case "html":
      return o.insertionMode === 0 && e.push(Sv), Xi(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Xi(e, n, t, r);
      e.push(yt(t)), i = l = null;
      for (a in n) if (Fe.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          l = s;
          break;
        case "dangerouslySetInnerHTML":
          i = s;
          break;
        case "style":
          Eh(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          _h(a) && typeof s != "function" && typeof s != "symbol" && e.push(Ot, U(a), zn, U(ge(s)), yn);
      }
      return e.push(It), ul(e, i, l), l;
  }
}
var _v = _("</"), Ev = _(">"), $v = _('<template id="'), Pv = _('"></template>'), Nv = _("<!--$-->"), Tv = _('<!--$?--><template id="'), Mv = _('"></template>'), Rv = _("<!--$!-->"), jv = _("<!--/$-->"), zv = _("<template"), Fv = _('"'), Lv = _(' data-dgst="');
_(' data-msg="');
_(' data-stck="');
var Dv = _("></template>");
function dd(e, t, n) {
  if (R(e, Tv), n === null) throw Error(I(395));
  return R(e, n), Z(e, Mv);
}
var Ov = _('<div hidden id="'), Iv = _('">'), Av = _("</div>"), Uv = _('<svg aria-hidden="true" style="display:none" id="'), bv = _('">'), Wv = _("</svg>"), Vv = _('<math aria-hidden="true" style="display:none" id="'), Bv = _('">'), Hv = _("</math>"), Qv = _('<table hidden id="'), Yv = _('">'), Xv = _("</table>"), Kv = _('<table hidden><tbody id="'), Gv = _('">'), Jv = _("</tbody></table>"), Zv = _('<table hidden><tr id="'), qv = _('">'), ew = _("</tr></table>"), tw = _('<table hidden><colgroup id="'), nw = _('">'), rw = _("</colgroup></table>");
function ow(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return R(e, Ov), R(e, t.segmentPrefix), R(e, U(r.toString(16))), Z(e, Iv);
    case 2:
      return R(e, Uv), R(e, t.segmentPrefix), R(e, U(r.toString(16))), Z(e, bv);
    case 3:
      return R(e, Vv), R(e, t.segmentPrefix), R(e, U(r.toString(16))), Z(e, Bv);
    case 4:
      return R(e, Qv), R(e, t.segmentPrefix), R(e, U(r.toString(16))), Z(e, Yv);
    case 5:
      return R(e, Kv), R(e, t.segmentPrefix), R(e, U(r.toString(16))), Z(e, Gv);
    case 6:
      return R(e, Zv), R(e, t.segmentPrefix), R(e, U(r.toString(16))), Z(e, qv);
    case 7:
      return R(
        e,
        tw
      ), R(e, t.segmentPrefix), R(e, U(r.toString(16))), Z(e, nw);
    default:
      throw Error(I(397));
  }
}
function lw(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return Z(e, Av);
    case 2:
      return Z(e, Wv);
    case 3:
      return Z(e, Hv);
    case 4:
      return Z(e, Xv);
    case 5:
      return Z(e, Jv);
    case 6:
      return Z(e, ew);
    case 7:
      return Z(e, rw);
    default:
      throw Error(I(397));
  }
}
var iw = _('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), sw = _('$RS("'), uw = _('","'), aw = _('")<\/script>'), cw = _('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), dw = _('$RC("'), fw = _('","'), pw = _('")<\/script>'), hw = _('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), mw = _('$RX("'), yw = _('"'), gw = _(")<\/script>"), Gi = _(","), vw = /[<\u2028\u2029]/g;
function Ji(e) {
  return JSON.stringify(e).replace(vw, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
var br = Object.assign, ww = Symbol.for("react.element"), $h = Symbol.for("react.portal"), Ph = Symbol.for("react.fragment"), Nh = Symbol.for("react.strict_mode"), Th = Symbol.for("react.profiler"), Mh = Symbol.for("react.provider"), Rh = Symbol.for("react.context"), jh = Symbol.for("react.forward_ref"), zh = Symbol.for("react.suspense"), Fh = Symbol.for("react.suspense_list"), Lh = Symbol.for("react.memo"), da = Symbol.for("react.lazy"), xw = Symbol.for("react.scope"), kw = Symbol.for("react.debug_trace_mode"), Sw = Symbol.for("react.legacy_hidden"), Cw = Symbol.for("react.default_value"), fd = Symbol.iterator;
function Zs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ph:
      return "Fragment";
    case $h:
      return "Portal";
    case Th:
      return "Profiler";
    case Nh:
      return "StrictMode";
    case zh:
      return "Suspense";
    case Fh:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Rh:
      return (e.displayName || "Context") + ".Consumer";
    case Mh:
      return (e._context.displayName || "Context") + ".Provider";
    case jh:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Lh:
      return t = e.displayName || null, t !== null ? t : Zs(e.type) || "Memo";
    case da:
      t = e._payload, e = e._init;
      try {
        return Zs(e(t));
      } catch {
      }
  }
  return null;
}
var Dh = {};
function pd(e, t) {
  if (e = e.contextTypes, !e) return Dh;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var Sn = null;
function di(e, t) {
  if (e !== t) {
    e.context._currentValue = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(I(401));
    } else {
      if (n === null) throw Error(I(401));
      di(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function Oh(e) {
  e.context._currentValue = e.parentValue, e = e.parent, e !== null && Oh(e);
}
function Ih(e) {
  var t = e.parent;
  t !== null && Ih(t), e.context._currentValue = e.value;
}
function Ah(e, t) {
  if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(I(402));
  e.depth === t.depth ? di(e, t) : Ah(e, t);
}
function Uh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(I(402));
  e.depth === n.depth ? di(e, n) : Uh(e, n), t.context._currentValue = t.value;
}
function bl(e) {
  var t = Sn;
  t !== e && (t === null ? Ih(e) : e === null ? Oh(t) : t.depth === e.depth ? di(t, e) : t.depth > e.depth ? Ah(t, e) : Uh(t, e), Sn = e);
}
var hd = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function md(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = hd, e.props = n, e.state = o;
  var l = { queue: [], replace: !1 };
  e._reactInternals = l;
  var i = t.contextType;
  if (e.context = typeof i == "object" && i !== null ? i._currentValue : r, i = t.getDerivedStateFromProps, typeof i == "function" && (i = i(n, o), o = i == null ? o : br({}, o, i), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && hd.enqueueReplaceState(e, e.state, null), l.queue !== null && 0 < l.queue.length) if (t = l.queue, i = l.replace, l.queue = null, l.replace = !1, i && t.length === 1) e.state = t[0];
  else {
    for (l = i ? t[0] : e.state, o = !0, i = i ? 1 : 0; i < t.length; i++) {
      var s = t[i];
      s = typeof s == "function" ? s.call(e, l, n, r) : s, s != null && (o ? (o = !1, l = br({}, l, s)) : br(l, s));
    }
    e.state = l;
  }
  else l.queue = null;
}
var _w = { id: 1, overflow: "" };
function qs(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - al(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - al(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    return l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, { id: 1 << 32 - al(t) + o | n << o | r, overflow: l + e };
  }
  return { id: 1 << l | n << o | r, overflow: e };
}
var al = Math.clz32 ? Math.clz32 : Pw, Ew = Math.log, $w = Math.LN2;
function Pw(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ew(e) / $w | 0) | 0;
}
function Nw(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Tw = typeof Object.is == "function" ? Object.is : Nw, Ft = null, fa = null, cl = null, X = null, Tr = !1, Wl = !1, so = 0, Qt = null, fi = 0;
function gn() {
  if (Ft === null) throw Error(I(321));
  return Ft;
}
function yd() {
  if (0 < fi) throw Error(I(312));
  return { memoizedState: null, queue: null, next: null };
}
function pa() {
  return X === null ? cl === null ? (Tr = !1, cl = X = yd()) : (Tr = !0, X = cl) : X.next === null ? (Tr = !1, X = X.next = yd()) : (Tr = !0, X = X.next), X;
}
function ha() {
  fa = Ft = null, Wl = !1, cl = null, fi = 0, X = Qt = null;
}
function bh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function gd(e, t, n) {
  if (Ft = gn(), X = pa(), Tr) {
    var r = X.queue;
    if (t = r.dispatch, Qt !== null && (n = Qt.get(r), n !== void 0)) {
      Qt.delete(r), r = X.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return X.memoizedState = r, [r, t];
    }
    return [X.memoizedState, t];
  }
  return e = e === bh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, X.memoizedState = e, e = X.queue = { last: null, dispatch: null }, e = e.dispatch = Mw.bind(null, Ft, e), [X.memoizedState, e];
}
function vd(e, t) {
  if (Ft = gn(), X = pa(), t = t === void 0 ? null : t, X !== null) {
    var n = X.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!Tw(t[o], r[o])) {
          r = !1;
          break e;
        }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return e = e(), X.memoizedState = [e, t], e;
}
function Mw(e, t, n) {
  if (25 <= fi) throw Error(I(301));
  if (e === Ft) if (Wl = !0, e = { action: n, next: null }, Qt === null && (Qt = /* @__PURE__ */ new Map()), n = Qt.get(t), n === void 0) Qt.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function Rw() {
  throw Error(I(394));
}
function bo() {
}
var wd = { readContext: function(e) {
  return e._currentValue;
}, useContext: function(e) {
  return gn(), e._currentValue;
}, useMemo: vd, useReducer: gd, useRef: function(e) {
  Ft = gn(), X = pa();
  var t = X.memoizedState;
  return t === null ? (e = { current: e }, X.memoizedState = e) : t;
}, useState: function(e) {
  return gd(bh, e);
}, useInsertionEffect: bo, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return vd(function() {
    return e;
  }, t);
}, useImperativeHandle: bo, useEffect: bo, useDebugValue: bo, useDeferredValue: function(e) {
  return gn(), e;
}, useTransition: function() {
  return gn(), [!1, Rw];
}, useId: function() {
  var e = fa.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - al(e) - 1)).toString(32) + t;
  var n = dl;
  if (n === null) throw Error(I(404));
  return t = so++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return gn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(I(407));
  return n();
} }, dl = null, Zi = kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function jw(e) {
  return console.error(e), null;
}
function Mr() {
}
function zw(e, t, n, r, o, l, i, s, u) {
  var a = [], p = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: p, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? jw : o, onAllReady: l === void 0 ? Mr : l, onShellReady: i === void 0 ? Mr : i, onShellError: s === void 0 ? Mr : s, onFatalError: u === void 0 ? Mr : u }, n = Vl(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = ma(t, e, null, n, p, Dh, null, _w), a.push(e), t;
}
function ma(e, t, n, r, o, l, i, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && Bh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: l, context: i, treeContext: s };
  return o.add(u), u;
}
function Vl(e, t, n, r, o, l) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: l };
}
function uo(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function Bl(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, Ch(e.destination, t)) : (e.status = 1, e.fatalError = t);
}
function xd(e, t, n, r, o) {
  for (Ft = {}, fa = t, so = 0, e = n(r, o); Wl; ) Wl = !1, so = 0, fi += 1, X = null, e = n(r, o);
  return ha(), e;
}
function kd(e, t, n, r) {
  var o = n.render(), l = r.childContextTypes;
  if (l != null) {
    var i = t.legacyContext;
    if (typeof n.getChildContext != "function") r = i;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in l)) throw Error(I(108, Zs(r) || "Unknown", s));
      r = br({}, i, n);
    }
    t.legacyContext = r, Ye(e, t, o), t.legacyContext = i;
  } else Ye(e, t, o);
}
function Sd(e, t) {
  if (e && e.defaultProps) {
    t = br({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function eu(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = pd(n, t.legacyContext);
    var l = n.contextType;
    l = new n(r, typeof l == "object" && l !== null ? l._currentValue : o), md(l, n, r, o), kd(e, t, l, n);
  } else {
    l = pd(n, t.legacyContext), o = xd(e, t, n, r, l);
    var i = so !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) md(o, n, r, l), kd(e, t, o, n);
    else if (i) {
      r = t.treeContext, t.treeContext = qs(r, 1, 0);
      try {
        Ye(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else Ye(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, l = Cv(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, i = o.formatContext, o.formatContext = gv(i, n, r), tu(e, t, l), o.formatContext = i, n) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        o.chunks.push(_v, U(n), Ev);
    }
    o.lastPushedText = !1;
  } else {
    switch (n) {
      case Sw:
      case kw:
      case Nh:
      case Th:
      case Ph:
        Ye(e, t, r.children);
        return;
      case Fh:
        Ye(e, t, r.children);
        return;
      case xw:
        throw Error(I(343));
      case zh:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, l = r.fallback, r = r.children, i = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: i, errorDigest: null }, u = Vl(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Vl(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (tu(
              e,
              t,
              r
            ), a.lastPushedText && a.textEmbedded && a.chunks.push(ca), a.status = 1, Hl(s, a), s.pendingTasks === 0) break e;
          } catch (p) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = uo(e, p);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = ma(e, l, n, u, i, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case jh:
        if (r = xd(e, t, n.render, r, o), so !== 0) {
          n = t.treeContext, t.treeContext = qs(n, 1, 0);
          try {
            Ye(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Ye(e, t, r);
        return;
      case Lh:
        n = n.type, r = Sd(n, r), eu(e, t, n, r, o);
        return;
      case Mh:
        if (o = r.children, n = n._context, r = r.value, l = n._currentValue, n._currentValue = r, i = Sn, Sn = r = { parent: i, depth: i === null ? 0 : i.depth + 1, context: n, parentValue: l, value: r }, t.context = r, Ye(e, t, o), e = Sn, e === null) throw Error(I(403));
        r = e.parentValue, e.context._currentValue = r === Cw ? e.context._defaultValue : r, e = Sn = e.parent, t.context = e;
        return;
      case Rh:
        r = r.children, r = r(n._currentValue), Ye(e, t, r);
        return;
      case da:
        o = n._init, n = o(n._payload), r = Sd(n, r), eu(e, t, n, r, void 0);
        return;
    }
    throw Error(I(
      130,
      n == null ? n : typeof n,
      ""
    ));
  }
}
function Ye(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case ww:
        eu(e, t, n.type, n.props, n.ref);
        return;
      case $h:
        throw Error(I(257));
      case da:
        var r = n._init;
        n = r(n._payload), Ye(e, t, n);
        return;
    }
    if (Js(n)) {
      Cd(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = fd && n[fd] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        Cd(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = ld(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = ld(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function Cd(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var l = t.treeContext;
    t.treeContext = qs(l, r, o);
    try {
      tu(e, t, n[o]);
    } finally {
      t.treeContext = l;
    }
  }
}
function tu(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, l = t.context;
  try {
    return Ye(e, t, n);
  } catch (u) {
    if (ha(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var i = t.blockedSegment, s = Vl(e, i.chunks.length, null, i.formatContext, i.lastPushedText, !0);
      i.children.push(s), i.lastPushedText = !1, e = ma(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = l, bl(l);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = l, bl(l), u;
  }
}
function Fw(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, Vh(this, t, e);
}
function Wh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.close())) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(I(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return Wh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Hl(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Hl(e, n);
  } else e.completedSegments.push(t);
}
function Vh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(I(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Mr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Hl(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Fw, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Hl(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function Bh(e) {
  if (e.status !== 2) {
    var t = Sn, n = Zi.current;
    Zi.current = wd;
    var r = dl;
    dl = e.responseState;
    try {
      var o = e.pingedTasks, l;
      for (l = 0; l < o.length; l++) {
        var i = o[l], s = e, u = i.blockedSegment;
        if (u.status === 0) {
          bl(i.context);
          try {
            Ye(s, i, i.node), u.lastPushedText && u.textEmbedded && u.chunks.push(ca), i.abortSet.delete(i), u.status = 1, Vh(s, i.blockedBoundary, u);
          } catch (y) {
            if (ha(), typeof y == "object" && y !== null && typeof y.then == "function") {
              var a = i.ping;
              y.then(a, a);
            } else {
              i.abortSet.delete(i), u.status = 4;
              var p = i.blockedBoundary, h = y, m = uo(s, h);
              if (p === null ? Bl(s, h) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = m, p.parentFlushed && s.clientRenderedBoundaries.push(p))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var v = s.onAllReady;
                v();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, l), e.destination !== null && ya(e, e.destination);
    } catch (y) {
      uo(e, y), Bl(e, y);
    } finally {
      dl = r, Zi.current = n, n === wd && bl(t);
    }
  }
}
function Wo(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, R(t, $v), R(t, e.placeholderPrefix), e = U(r.toString(16)), R(t, e), Z(t, Pv);
    case 1:
      n.status = 2;
      var o = !0;
      r = n.chunks;
      var l = 0;
      n = n.children;
      for (var i = 0; i < n.length; i++) {
        for (o = n[i]; l < o.index; l++) R(t, r[l]);
        o = pi(e, t, o);
      }
      for (; l < r.length - 1; l++) R(t, r[l]);
      return l < r.length && (o = Z(t, r[l])), o;
    default:
      throw Error(I(390));
  }
}
function pi(e, t, n) {
  var r = n.boundary;
  if (r === null) return Wo(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) r = r.errorDigest, Z(t, Rv), R(t, zv), r && (R(t, Lv), R(t, U(ge(r))), R(t, Fv)), Z(t, Dv), Wo(e, t, n);
  else if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, l = o.nextSuspenseID++;
    o = _(o.boundaryPrefix + l.toString(16)), r = r.id = o, dd(t, e.responseState, r), Wo(e, t, n);
  } else if (r.byteSize > e.progressiveChunkSize) r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), dd(t, e.responseState, r.id), Wo(e, t, n);
  else {
    if (Z(t, Nv), n = r.completedSegments, n.length !== 1) throw Error(I(391));
    pi(e, t, n[0]);
  }
  return Z(t, jv);
}
function _d(e, t, n) {
  return ow(t, e.responseState, n.formatContext, n.id), pi(e, t, n), lw(t, n.formatContext);
}
function Ed(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) Hh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, R(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? R(t, dw) : (e.sentCompleteBoundaryFunction = !0, R(t, cw)), r === null) throw Error(I(395));
  return n = U(n.toString(16)), R(t, r), R(t, fw), R(t, e.segmentPrefix), R(t, n), Z(t, pw);
}
function Hh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(I(392));
    return _d(e, t, r);
  }
  return _d(e, t, r), e = e.responseState, R(t, e.startInlineScript), e.sentCompleteSegmentFunction ? R(t, sw) : (e.sentCompleteSegmentFunction = !0, R(t, iw)), R(t, e.segmentPrefix), o = U(o.toString(16)), R(t, o), R(t, uw), R(t, e.placeholderPrefix), R(t, o), Z(t, aw);
}
function ya(e, t) {
  He = new Uint8Array(512), Qe = 0;
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      pi(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) R(t, r[n]);
      n < r.length && Z(t, r[n]);
    }
    var o = e.clientRenderedBoundaries, l;
    for (l = 0; l < o.length; l++) {
      var i = o[l];
      r = t;
      var s = e.responseState, u = i.id, a = i.errorDigest, p = i.errorMessage, h = i.errorComponentStack;
      if (R(r, s.startInlineScript), s.sentClientRenderFunction ? R(r, mw) : (s.sentClientRenderFunction = !0, R(
        r,
        hw
      )), u === null) throw Error(I(395));
      R(r, u), R(r, yw), (a || p || h) && (R(r, Gi), R(r, U(Ji(a || "")))), (p || h) && (R(r, Gi), R(r, U(Ji(p || "")))), h && (R(r, Gi), R(r, U(Ji(h)))), Z(r, gw);
    }
    o.splice(0, l);
    var m = e.completedBoundaries;
    for (l = 0; l < m.length; l++) Ed(e, t, m[l]);
    m.splice(0, l), td(t), He = new Uint8Array(512), Qe = 0;
    var v = e.partialBoundaries;
    for (l = 0; l < v.length; l++) {
      var y = v[l];
      e: {
        o = e, i = t;
        var x = y.completedSegments;
        for (s = 0; s < x.length; s++) if (!Hh(
          o,
          i,
          y,
          x[s]
        )) {
          s++, x.splice(0, s);
          var k = !1;
          break e;
        }
        x.splice(0, s), k = !0;
      }
      if (!k) {
        e.destination = null, l++, v.splice(0, l);
        return;
      }
    }
    v.splice(0, l);
    var d = e.completedBoundaries;
    for (l = 0; l < d.length; l++) Ed(e, t, d[l]);
    d.splice(0, l);
  } finally {
    td(t), e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.close();
  }
}
function $d(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return Wh(r, e, t);
    }), n.clear(), e.destination !== null && ya(e, e.destination);
  } catch (r) {
    uo(e, r), Bl(e, r);
  }
}
sa.renderToReadableStream = function(e, t) {
  return new Promise(function(n, r) {
    var o, l, i = new Promise(function(p, h) {
      l = p, o = h;
    }), s = zw(e, mv(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), yv(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, l, function() {
      var p = new ReadableStream({ type: "bytes", pull: function(h) {
        if (s.status === 1) s.status = 2, Ch(h, s.fatalError);
        else if (s.status !== 2 && s.destination === null) {
          s.destination = h;
          try {
            ya(s, h);
          } catch (m) {
            uo(s, m), Bl(s, m);
          }
        }
      }, cancel: function() {
        $d(s);
      } }, { highWaterMark: 0 });
      p.allReady = i, n(p);
    }, function(p) {
      i.catch(function() {
      }), r(p);
    }, o);
    if (t && t.signal) {
      var u = t.signal, a = function() {
        $d(s, u.reason), u.removeEventListener("abort", a);
      };
      u.addEventListener("abort", a);
    }
    Bh(s);
  });
};
sa.version = "18.3.1";
var ar, Qh;
ar = ur, Qh = sa;
ar.version;
var Lw = ar.renderToString;
ar.renderToStaticMarkup;
ar.renderToNodeStream;
ar.renderToStaticNodeStream;
Qh.renderToReadableStream;
var Yh = { exports: {} }, Dw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Ow = Dw, Iw = Ow;
function Xh() {
}
function Kh() {
}
Kh.resetWarningCache = Xh;
var Aw = function() {
  function e(r, o, l, i, s, u) {
    if (u !== Iw) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw a.name = "Invariant Violation", a;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Kh,
    resetWarningCache: Xh
  };
  return n.PropTypes = n, n;
};
Yh.exports = Aw();
var Uw = Yh.exports;
const at = /* @__PURE__ */ Nd(Uw);
var bw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gh(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var Ww = Gh(function(e) {
  (function(t) {
    var n = function(k, d, c) {
      if (!u(d) || p(d) || h(d) || m(d) || s(d)) return d;
      var f, w = 0, C = 0;
      if (a(d)) for (f = [], C = d.length; w < C; w++) f.push(n(k, d[w], c));
      else for (var $ in f = {}, d) Object.prototype.hasOwnProperty.call(d, $) && (f[k($, c)] = n(k, d[$], c));
      return f;
    }, r = function(k) {
      return v(k) ? k : (k = k.replace(/[\-_\s]+(.)?/g, function(d, c) {
        return c ? c.toUpperCase() : "";
      })).substr(0, 1).toLowerCase() + k.substr(1);
    }, o = function(k) {
      var d = r(k);
      return d.substr(0, 1).toUpperCase() + d.substr(1);
    }, l = function(k, d) {
      return function(c, f) {
        var w = (f = f || {}).separator || "_", C = f.split || /(?=[A-Z])/;
        return c.split(C).join(w);
      }(k, d).toLowerCase();
    }, i = Object.prototype.toString, s = function(k) {
      return typeof k == "function";
    }, u = function(k) {
      return k === Object(k);
    }, a = function(k) {
      return i.call(k) == "[object Array]";
    }, p = function(k) {
      return i.call(k) == "[object Date]";
    }, h = function(k) {
      return i.call(k) == "[object RegExp]";
    }, m = function(k) {
      return i.call(k) == "[object Boolean]";
    }, v = function(k) {
      return (k -= 0) == k;
    }, y = function(k, d) {
      var c = d && "process" in d ? d.process : d;
      return typeof c != "function" ? k : function(f, w) {
        return c(f, k, w);
      };
    }, x = { camelize: r, decamelize: l, pascalize: o, depascalize: l, camelizeKeys: function(k, d) {
      return n(y(r, d), k);
    }, decamelizeKeys: function(k, d) {
      return n(y(l, d), k, d);
    }, pascalizeKeys: function(k, d) {
      return n(y(o, d), k);
    }, depascalizeKeys: function() {
      return this.decamelizeKeys.apply(this, arguments);
    } };
    e.exports ? e.exports = x : t.humps = x;
  })(bw);
}).decamelize, Vw = function(e) {
  if (Array.isArray(e)) return e;
}, Bw = function(e, t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) {
    var n = [], r = !0, o = !1, l = void 0;
    try {
      for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0) ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        r || s.return == null || s.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}, Pd = function(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}, Hw = function(e, t) {
  if (e) {
    if (typeof e == "string") return Pd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pd(e, t) : void 0;
  }
}, Qw = function() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}, Yw = function(e, t) {
  return Vw(e) || Bw(e, t) || Hw(e, t) || Qw();
}, Jh = Gh(function(e) {
  function t() {
    return e.exports = t = Object.assign || function(n) {
      for (var r = 1; r < arguments.length; r++) {
        var o = arguments[r];
        for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (n[l] = o[l]);
      }
      return n;
    }, t.apply(this, arguments);
  }
  e.exports = t;
}), Xw = function(e, t) {
  if (e == null) return {};
  var n, r, o = {}, l = Object.keys(e);
  for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
  return o;
}, Zh = function(e, t) {
  if (e == null) return {};
  var n, r, o = Xw(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}, Kw = T.createContext(null);
function qh(e) {
  var t = e.children, n = t === void 0 ? "" : t, r = Zh(e, ["children"]);
  return typeof n != "string" && (n = Lw(n)), _t.createElement("template", Jh({}, r, { dangerouslySetInnerHTML: { __html: n } }));
}
function em(e) {
  var t = e.root, n = e.children;
  return Up.createPortal(n === void 0 ? null : n, t);
}
function Gw(e) {
  var t = T.forwardRef(function(n, r) {
    var o, l, i = n.mode, s = i === void 0 ? "open" : i, u = n.delegatesFocus, a = u !== void 0 && u, p = n.styleSheets, h = p === void 0 ? [] : p, m = n.ssr, v = m !== void 0 && m, y = n.children, x = Zh(n, ["mode", "delegatesFocus", "styleSheets", "ssr", "children"]), k = (l = T.useRef((o = r) && o.current), T.useEffect(function() {
      o && (o.current = l.current);
    }, [o]), l), d = T.useState(null), c = Yw(d, 2), f = c[0], w = c[1], C = "node_".concat(s).concat(a);
    return T.useLayoutEffect(function() {
      if (k.current) try {
        if (typeof r == "function" && r(k.current), v) {
          var $ = k.current.shadowRoot;
          return void w($);
        }
        var P = k.current.attachShadow({ mode: s, delegatesFocus: a });
        h.length > 0 && (P.adoptedStyleSheets = h), w(P);
      } catch (M) {
        (function(B) {
          var L = B.error, G = B.styleSheets, H = B.root;
          switch (L.name) {
            case "NotSupportedError":
              G.length > 0 && (H.adoptedStyleSheets = G);
              break;
            default:
              throw L;
          }
        })({ error: M, styleSheets: h, root: f });
      }
    }, [r, k, h]), _t.createElement(_t.Fragment, null, _t.createElement(e.tag, Jh({ key: C, ref: k }, x), (f || v) && _t.createElement(Kw.Provider, { value: f }, v ? _t.createElement(qh, { shadowroot: s, shadowrootmode: s }, e.render({ root: f, ssr: v, children: y })) : _t.createElement(em, { root: f }, e.render({ root: f, ssr: v, children: y })))));
  });
  return t.propTypes = { mode: at.oneOf(["open", "closed"]), delegatesFocus: at.bool, styleSheets: at.arrayOf(at.instanceOf(globalThis.CSSStyleSheet)), ssr: at.bool, children: at.node }, t;
}
qh.propTypes = { children: at.oneOfType([at.string, at.node]) }, em.propTypes = { root: at.object.isRequired, children: at.node };
var qi = /* @__PURE__ */ new Map();
function Jw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "core", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(r) {
    return r.children;
  };
  return new Proxy(e, { get: function(r, o) {
    var l = Ww(o, { separator: "-" }), i = "".concat(t, "-").concat(l);
    return qi.has(i) || qi.set(i, Gw({ tag: l, render: n })), qi.get(i);
  } });
}
var Zw = Jw();
const qw = '@keyframes slide-up{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}input{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}input::-moz-placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input::placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input:disabled{cursor:not-allowed;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.\\!container{width:100%!important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-4{top:1rem;right:1rem;bottom:1rem;left:1rem}.bottom-24{bottom:6rem}.bottom-6{bottom:1.5rem}.bottom-full{bottom:100%}.left-0{left:0}.right-0{right:0}.right-6{right:1.5rem}.top-full{top:100%}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-12{height:3rem}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[75vh\\]{height:75vh}.h-auto{height:auto}.h-full{height:100%}.max-h-48{max-height:12rem}.max-h-\\[800px\\]{max-height:800px}.max-h-none{max-height:none}.min-h-0{min-height:0px}.min-h-\\[400px\\]{min-height:400px}.min-h-screen{min-height:100vh}.w-12{width:3rem}.w-2{width:.5rem}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-8{width:2rem}.w-\\[400px\\]{width:400px}.w-auto{width:auto}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-48{min-width:12rem}.min-w-\\[32px\\]{min-width:32px}.max-w-3xl{max-width:48rem}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[calc\\(100vw-3rem\\)\\]{max-width:calc(100vw - 3rem)}.max-w-none{max-width:none}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.animate-slide-up{animation:slide-up .3s ease-out}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre{white-space:pre}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-bl-sm{border-bottom-left-radius:.125rem}.rounded-br-sm{border-bottom-right-radius:.125rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-yellow-200{--tw-border-opacity: 1;border-color:rgb(254 240 138 / var(--tw-border-opacity, 1))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity, 1))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity, 1))}.bg-green-400{--tw-bg-opacity: 1;background-color:rgb(74 222 128 / var(--tw-bg-opacity, 1))}.bg-red-400{--tw-bg-opacity: 1;background-color:rgb(248 113 113 / var(--tw-bg-opacity, 1))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity, 1))}.bg-yellow-50{--tw-bg-opacity: 1;background-color:rgb(254 252 232 / var(--tw-bg-opacity, 1))}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-blue-500{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-green-300{--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-indigo-500{--tw-text-opacity: 1;color:rgb(99 102 241 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-600{--tw-text-opacity: 1;color:rgb(202 138 4 / var(--tw-text-opacity, 1))}.text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}.hover\\:text-blue-700:hover{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-700:hover{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.hover\\:text-gray-800:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.hover\\:text-red-600:hover{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.hover\\:text-red-800:hover{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.hover\\:text-yellow-900:hover{--tw-text-opacity: 1;color:rgb(113 63 18 / var(--tw-text-opacity, 1))}.hover\\:opacity-90:hover{opacity:.9}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-opacity-50:focus{--tw-ring-opacity: .5}.disabled\\:opacity-50:disabled{opacity:.5}.group:hover .group-hover\\:text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity, 1))}';
function ex(e) {
  return e.replace(/:root\b/g, ":host").replaceAll("((-webkit-hyphens:none)) and ", "").replaceAll("(-webkit-hyphens: none) and ", "");
}
function tm({ chatbotId: e }) {
  const [t, n] = T.useState(!1), [r, o] = T.useState(!1), {
    messages: l,
    sendMessage: i,
    retryMessage: s,
    startNewChat: u,
    endCurrentChat: a,
    loadSession: p,
    getRecentChats: h,
    updateProfile: m,
    sessions: v,
    selectedSession: y,
    isConnected: x,
    isLoading: k,
    config: d,
    operators: c,
    lastActive: f
  } = $1({
    chatbotId: e
  });
  return k === !0 || !d ? null : /* @__PURE__ */ g.jsxs(Zw.div, { children: [
    /* @__PURE__ */ g.jsx("style", { children: ex(qw) }),
    /* @__PURE__ */ g.jsx(
      dg,
      {
        isOpen: t,
        onClick: () => n(!t),
        config: d
      }
    ),
    /* @__PURE__ */ g.jsx(
      p1,
      {
        chatbotId: e,
        isOpen: t,
        isMaximized: r,
        isConnected: x,
        config: d,
        operators: c,
        lastActive: f,
        messages: l,
        sessions: v,
        selectedSession: y,
        onStartNewChat: u,
        onEndChat: a,
        onLoadSession: p,
        onGetRecentChats: h,
        onUpdateProfile: m,
        onClose: () => n(!1),
        onToggleMaximize: () => o(!r),
        onSendMessage: i,
        onRetryMessage: s
      }
    )
  ] });
}
let Sr = null, St = null;
function tx(e) {
  St || (St = document.createElement("div"), St.id = "ticketdesk-ai", St.setAttribute("style", "color-scheme: light;"), document.body.appendChild(St));
  const t = () => {
    Sr && (Sr.unmount(), Sr = null), St && (St.remove(), St = null);
  };
  return Sr = Gu(St), Sr.render(/* @__PURE__ */ g.jsx(tm, { chatbotId: e })), { close: t };
}
const nx = Dy(tm, {
  props: {
    chatbotId: "string"
  }
});
customElements.define("ticketdesk-chatbot", nx);
window.ticketdesk = {
  initChatbot: tx
};
window.TICKETDESK_CHATBOT_ID && window.ticketdesk.initChatbot(window.TICKETDESK_CHATBOT_ID);
