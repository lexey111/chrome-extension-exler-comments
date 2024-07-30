"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c;
  var s;
  var a;
  var h = {};
  var p = [];
  var v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function d(n2, l3) {
    for (var u3 in l3) n2[u3] = l3[u3];
    return n2;
  }
  function w(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function _(l3, u3, t3) {
    var i4, o3, r3, f3 = {};
    for (r3 in u3) "key" == r3 ? i4 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (r3 in l3.defaultProps) void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return g(l3, f3, i4, o3, null);
  }
  function g(n2, t3, i4, o3, r3) {
    var f3 = { type: n2, props: t3, key: i4, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function x(n2, l3) {
    if (null == l3) return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) return u3.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
  }
  function P() {
    var n2, u3, t3, o3, r3, e3, c3, s3;
    for (i.sort(f); n2 = i.shift(); ) n2.__d && (u3 = i.length, o3 = void 0, e3 = (r3 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((o3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), O(t3.__P, o3, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [e3] : null, c3, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s3), o3.__v = r3.__v, o3.__.__k[o3.__i] = o3, j(c3, o3, s3), o3.__e != e3 && C(o3)), i.length > u3 && i.sort(f));
    P.__r = 0;
  }
  function S(n2, l3, u3, t3, i4, o3, r3, f3, e3, c3, s3) {
    var a3, v3, y3, d3, w4, _3 = t3 && t3.__k || p, g4 = l3.length;
    for (u3.__d = e3, $(u3, l3, _3), e3 = u3.__d, a3 = 0; a3 < g4; a3++) null != (y3 = u3.__k[a3]) && "boolean" != typeof y3 && "function" != typeof y3 && (v3 = -1 === y3.__i ? h : _3[y3.__i] || h, y3.__i = a3, O(n2, y3, v3, i4, o3, r3, f3, e3, c3, s3), d3 = y3.__e, y3.ref && v3.ref != y3.ref && (v3.ref && N(v3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w4 && null != d3 && (w4 = d3), 65536 & y3.__u || v3.__k === y3.__k ? (e3 && "string" == typeof y3.type && !n2.contains(e3) && (e3 = x(v3)), e3 = I(y3, e3, n2)) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
    u3.__d = e3, u3.__e = w4;
  }
  function $(n2, l3, u3) {
    var t3, i4, o3, r3, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++) r3 = t3 + a3, null != (i4 = n2.__k[t3] = null == (i4 = l3[t3]) || "boolean" == typeof i4 || "function" == typeof i4 ? null : "string" == typeof i4 || "number" == typeof i4 || "bigint" == typeof i4 || i4.constructor == String ? g(null, i4, null, null, null) : y(i4) ? g(k, { children: i4 }, null, null, null) : void 0 === i4.constructor && i4.__b > 0 ? g(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4) ? (i4.__ = n2, i4.__b = n2.__b + 1, f3 = L(i4, u3, r3, s3), i4.__i = f3, o3 = null, -1 !== f3 && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i4.type && (i4.__u |= 65536)) : f3 !== r3 && (f3 == r3 - 1 ? a3 = f3 - r3 : f3 == r3 + 1 ? a3++ : f3 > r3 ? s3 > e3 - r3 ? a3 += f3 - r3 : a3-- : f3 < r3 && a3++, f3 !== t3 + a3 && (i4.__u |= 65536))) : (o3 = u3[r3]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3, false), u3[r3] = null, s3--);
    if (s3) for (t3 = 0; t3 < c3; t3++) null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3));
  }
  function I(n2, l3, u3) {
    var t3, i4;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i4 = 0; t3 && i4 < t3.length; i4++) t3[i4] && (t3[i4].__ = n2, l3 = I(t3[i4], l3, u3));
      return l3;
    }
    n2.__e != l3 && (u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 === l3.nodeType);
    return l3;
  }
  function H(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (y(n2) ? n2.some(function(n3) {
      H(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function L(n2, l3, u3, t3) {
    var i4 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i4 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u)) return u3;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0)) for (; r3 >= 0 || f3 < l3.length; ) {
      if (r3 >= 0) {
        if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type) return r3;
        r3--;
      }
      if (f3 < l3.length) {
        if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type) return f3;
        f3++;
      }
    }
    return -1;
  }
  function T(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || v.test(l3) ? u3 : u3 + "px";
  }
  function A(n2, l3, u3, t3, i4) {
    var o3;
    n: if ("style" === l3) if ("string" == typeof u3) n2.style.cssText = u3;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u3 && l3 in u3 || T(n2.style, l3, "");
      if (u3) for (l3 in u3) t3 && u3[l3] === t3[l3] || T(n2.style, l3, u3[l3]);
    }
    else if ("o" === l3[0] && "n" === l3[1]) o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
    else {
      if ("http://www.w3.org/2000/svg" == i4) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
        n2[l3] = null == u3 ? "" : u3;
        break n;
      } catch (n3) {
      }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
    }
  }
  function F(n2) {
    return function(u3) {
      if (this.l) {
        var t3 = this.l[u3.type + n2];
        if (null == u3.t) u3.t = e++;
        else if (u3.t < t3.u) return;
        return t3(l.event ? l.event(u3) : u3);
      }
    };
  }
  function O(n2, u3, t3, i4, o3, r3, f3, e3, c3, s3) {
    var a3, h3, p3, v3, w4, _3, g4, m3, x3, C4, M3, P3, $3, I2, H3, L3, T4 = u3.type;
    if (void 0 !== u3.constructor) return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n: if ("function" == typeof T4) try {
      if (m3 = u3.props, x3 = "prototype" in T4 && T4.prototype.render, C4 = (a3 = T4.contextType) && i4[a3.__c], M3 = a3 ? C4 ? C4.props.value : a3.__ : i4, t3.__c ? g4 = (h3 = u3.__c = t3.__c).__ = h3.__E : (x3 ? u3.__c = h3 = new T4(m3, M3) : (u3.__c = h3 = new b(m3, M3), h3.constructor = T4, h3.render = q), C4 && C4.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = M3, h3.__n = i4, p3 = h3.__d = true, h3.__h = [], h3._sb = []), x3 && null == h3.__s && (h3.__s = h3.state), x3 && null != T4.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T4.getDerivedStateFromProps(m3, h3.__s))), v3 = h3.props, w4 = h3.state, h3.__v = u3, p3) x3 && null == T4.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x3 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (x3 && null == T4.getDerivedStateFromProps && m3 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m3, M3), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m3, h3.__s, M3) || u3.__v === t3.__v)) {
          for (u3.__v !== t3.__v && (h3.props = m3, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
            n3 && (n3.__ = u3);
          }), P3 = 0; P3 < h3._sb.length; P3++) h3.__h.push(h3._sb[P3]);
          h3._sb = [], h3.__h.length && f3.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(m3, h3.__s, M3), x3 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(v3, w4, _3);
        });
      }
      if (h3.context = M3, h3.props = m3, h3.__P = n2, h3.__e = false, $3 = l.__r, I2 = 0, x3) {
        for (h3.state = h3.__s, h3.__d = false, $3 && $3(u3), a3 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++) h3.__h.push(h3._sb[H3]);
        h3._sb = [];
      } else do {
        h3.__d = false, $3 && $3(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++I2 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i4 = d(d({}, i4), h3.getChildContext())), x3 && !p3 && null != h3.getSnapshotBeforeUpdate && (_3 = h3.getSnapshotBeforeUpdate(v3, w4)), S(n2, y(L3 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? L3 : [L3], u3, t3, i4, o3, r3, f3, e3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && f3.push(h3), g4 && (h3.__E = h3.__ = null);
    } catch (n3) {
      u3.__v = null, c3 || null != r3 ? (u3.__e = e3, u3.__u |= c3 ? 160 : 32, r3[r3.indexOf(e3)] = null) : (u3.__e = t3.__e, u3.__k = t3.__k), l.__e(n3, u3, t3);
    }
    else null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = z(t3.__e, u3, t3, i4, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function j(n2, u3, t3) {
    u3.__d = void 0;
    for (var i4 = 0; i4 < t3.length; i4++) N(t3[i4], t3[++i4], t3[++i4]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function z(l3, u3, t3, i4, o3, r3, f3, e3, c3) {
    var s3, a3, p3, v3, d3, _3, g4, m3 = t3.props, k3 = u3.props, b2 = u3.type;
    if ("svg" === b2 ? o3 = "http://www.w3.org/2000/svg" : "math" === b2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != r3) {
      for (s3 = 0; s3 < r3.length; s3++) if ((d3 = r3[s3]) && "setAttribute" in d3 == !!b2 && (b2 ? d3.localName === b2 : 3 === d3.nodeType)) {
        l3 = d3, r3[s3] = null;
        break;
      }
    }
    if (null == l3) {
      if (null === b2) return document.createTextNode(k3);
      l3 = document.createElementNS(o3, b2, k3.is && k3), r3 = null, e3 = false;
    }
    if (null === b2) m3 === k3 || e3 && l3.data === k3 || (l3.data = k3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), m3 = t3.props || h, !e3 && null != r3) for (m3 = {}, s3 = 0; s3 < l3.attributes.length; s3++) m3[(d3 = l3.attributes[s3]).name] = d3.value;
      for (s3 in m3) if (d3 = m3[s3], "children" == s3) ;
      else if ("dangerouslySetInnerHTML" == s3) p3 = d3;
      else if ("key" !== s3 && !(s3 in k3)) {
        if ("value" == s3 && "defaultValue" in k3 || "checked" == s3 && "defaultChecked" in k3) continue;
        A(l3, s3, null, d3, o3);
      }
      for (s3 in k3) d3 = k3[s3], "children" == s3 ? v3 = d3 : "dangerouslySetInnerHTML" == s3 ? a3 = d3 : "value" == s3 ? _3 = d3 : "checked" == s3 ? g4 = d3 : "key" === s3 || e3 && "function" != typeof d3 || m3[s3] === d3 || A(l3, s3, d3, m3[s3], o3);
      if (a3) e3 || p3 && (a3.__html === p3.__html || a3.__html === l3.innerHTML) || (l3.innerHTML = a3.__html), u3.__k = [];
      else if (p3 && (l3.innerHTML = ""), S(l3, y(v3) ? v3 : [v3], u3, t3, i4, "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : o3, r3, f3, r3 ? r3[0] : t3.__k && x(t3, 0), e3, c3), null != r3) for (s3 = r3.length; s3--; ) null != r3[s3] && w(r3[s3]);
      e3 || (s3 = "value", void 0 !== _3 && (_3 !== l3[s3] || "progress" === b2 && !_3 || "option" === b2 && _3 !== m3[s3]) && A(l3, s3, _3, m3[s3], o3), s3 = "checked", void 0 !== g4 && g4 !== l3[s3] && A(l3, s3, g4, m3[s3], o3));
    }
    return l3;
  }
  function N(n2, u3, t3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function V(n2, u3, t3) {
    var i4, o3;
    if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || N(i4, null, u3)), null != (i4 = n2.__c)) {
      if (i4.componentWillUnmount) try {
        i4.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
      i4.base = i4.__P = null;
    }
    if (i4 = n2.__k) for (o3 = 0; o3 < i4.length; o3++) i4[o3] && V(i4[o3], u3, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function B(u3, t3, i4) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i4) ? null : i4 && i4.__k || t3.__k, f3 = [], e3 = [], O(t3, u3 = (!o3 && i4 || t3).__k = _(k, null, [u3]), r3 || h, h, t3.namespaceURI, !o3 && i4 ? [i4] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i4 ? i4 : r3 ? r3.__e : t3.firstChild, o3, e3), j(f3, u3, e3);
  }
  function G(n2, l3) {
    var u3 = { __c: l3 = "__cC" + a++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, t3;
      return this.getChildContext || (u4 = [], (t3 = {})[l3] = this, this.getChildContext = function() {
        return t3;
      }, this.componentWillUnmount = function() {
        u4 = null;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(function(n5) {
          n5.__e = true, M(n5);
        });
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4 && u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  n = p.slice, l = { __e: function(n2, l3, u3, t3) {
    for (var i4, o3, r3; l3 = l3.__; ) if ((i4 = l3.__c) && !i4.__) try {
      if ((o3 = i4.constructor) && null != o3.getDerivedStateFromError && (i4.setState(o3.getDerivedStateFromError(n2)), r3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, t3 || {}), r3 = i4.__d), r3) return i4.__E = i4;
    } catch (l4) {
      n2 = l4;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, b.prototype.setState = function(n2, l3) {
    var u3;
    u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

  // node_modules/preact/devtools/dist/devtools.module.js
  var i2;
  null != (i2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0) && i2.__PREACT_DEVTOOLS__ && i2.__PREACT_DEVTOOLS__.attachPreact("10.22.1", l, { Fragment: k, Component: b });

  // src/i18n/ua.ts
  var UA = {
    title: "Exler's site | \u0432\u043E\u0433\u043D\u0435\u0433\u0430\u0441\u043D\u0438\u043A \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456\u0432",
    enable_processing: "\u0423\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u043E\u0431\u0440\u043E\u0431\u043A\u0443",
    has_been_hidden: "\u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u043E",
    total: "\u0432\u0441\u044C\u043E\u0433\u043E \u043E\u0431\u0440\u043E\u0431\u043B\u0435\u043D\u043E",
    in_current_session: "\u0412 \u043F\u043E\u0442\u043E\u0447\u043D\u0456\u0439 \u0441\u0435\u0441\u0456\u0457",
    for_all_time: "\u0417\u0430 \u0432\u0435\u0441\u044C \u0447\u0430\u0441",
    reset_stat: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443",
    settings: "\u041D\u0430\u043B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F",
    hide_mode: "\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u0438\u0445\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F",
    select_mode: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u043F\u0440\u0438\u0445\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F:",
    select_mode_default: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439 (\u043F\u0440\u043E\u0441\u0442\u0435 \u0440\u043E\u0437\u043C\u0438\u0442\u0442\u044F)",
    select_mode_collapse: "\u0421\u0445\u043B\u043E\u043F\u0443\u0432\u0430\u043D\u043D\u044F",
    select_mode_overlay: "\u041F\u0435\u0440\u0435\u043A\u0440\u0438\u0442\u0442\u044F",
    preview: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434",
    open_settings_page: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430\u043B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F...",
    rules: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430",
    no_rules: '\u041F\u043E\u043A\u0438 \u0449\u043E \u043D\u0435\u043C\u0430\u0454 \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 "\u0414\u043E\u0434\u0430\u0442\u0438" \u043D\u0438\u0436\u0447\u0435, \u0449\u043E\u0431 \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043F\u0435\u0440\u0448\u0435.',
    add_rule: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u043E",
    cancel: "\u0412\u0456\u0434\u043C\u0456\u043D\u0430",
    save: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
    create: "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438",
    user_placeholder: "\u0413\u0440\u0438\u0446\u044C \u042F\u043A\u043E\u0432\u0438\u0447 \u0412\u0430\u0440\u0435\u043D\u0438\u043A",
    user_name_nick: "\u0406\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 (\u043D\u0456\u043A)",
    create_record: "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441",
    save_record: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u0430\u043F\u0438\u0441",
    hide_from: '\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 "\u0432\u0456\u0434 \u043A\u043E\u0433\u043E"',
    hide_to: '\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 "\u043A\u043E\u043C\u0443"',
    only_negative: "\u0422\u0456\u043B\u044C\u043A\u0438 \u044F\u043A\u0449\u043E \u0431\u0430\u043B\u0430\u043D\u0441 +/- \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u0439",
    please_select_from_to: '\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C "\u0432\u0456\u0434 \u043A\u043E\u0433\u043E", "\u043A\u043E\u043C\u0443" \u0430\u0431\u043E \u043E\u0431\u0438\u0434\u0432\u0430 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0438',
    user_already_exists: "\u0426\u0435 \u0456\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0432\u0436\u0435 \u0456\u0441\u043D\u0443\u0454 \u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0445",
    delete: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
    confirm: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F",
    are_you_sure: "\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441?"
  };

  // src/i18n/en.ts
  var EN = {
    title: "Exler's site | comments fire extinguisher",
    enable_processing: "Enable processing",
    has_been_hidden: "was hidden",
    total: "processed total",
    in_current_session: "In current session",
    for_all_time: "For all the time",
    reset_stat: "Reset statistics",
    settings: "Settings",
    hide_mode: "Hide mode",
    select_mode: "Select mode:",
    select_mode_default: "Default (simple blur)",
    select_mode_collapse: "Collapse",
    select_mode_overlay: "Overlay",
    preview: "Preview",
    open_settings_page: "Open settings page...",
    rules: "Rules",
    no_rules: 'Nothing has been created yet. Please click the "Add" button below to create your first one.',
    add_rule: "Add rule",
    cancel: "Cancel",
    save: "Save",
    create: "Create",
    user_placeholder: "John Doe",
    user_name_nick: "User name (nickname)",
    create_record: "Create record",
    save_record: "Save record",
    hide_from: 'Hide if "from"',
    hide_to: 'Hide if "to"',
    only_negative: "Only if negative +/- balance",
    please_select_from_to: "Please select From, To, or both",
    user_already_exists: "This user name already exists in rules",
    delete: "Delete",
    confirm: "Confirm",
    are_you_sure: "Are you sure you want to delete record?"
  };

  // src/i18n/ru.ts
  var RU = {
    title: "Exler's site | \u043E\u0433\u043D\u0435\u0442\u0443\u0448\u0438\u0442\u0435\u043B\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432",
    enable_processing: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443",
    has_been_hidden: "\u0441\u043A\u0440\u044B\u0442\u043E",
    total: "\u0432\u0441\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E",
    in_current_session: "\u0412 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438",
    for_all_time: "\u0417\u0430 \u0432\u0441\u0451 \u0432\u0440\u0435\u043C\u044F",
    reset_stat: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443",
    settings: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    hide_mode: "\u0420\u0435\u0436\u0438\u043C \u0441\u043A\u0440\u044B\u0442\u0438\u044F",
    select_mode: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043C \u0441\u043A\u0440\u044B\u0442\u0438\u044F:",
    select_mode_default: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 (\u043F\u0440\u043E\u0441\u0442\u043E\u0435 \u0440\u0430\u0437\u043C\u044B\u0442\u0438\u0435)",
    select_mode_collapse: "\u0421\u0445\u043B\u043E\u043F\u044B\u0432\u0430\u043D\u0438\u0435",
    select_mode_overlay: "\u041D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    preview: "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",
    open_settings_page: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438...",
    rules: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430",
    no_rules: '\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C" \u043D\u0438\u0436\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u043E\u0435.',
    add_rule: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E",
    cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
    save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
    create: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C",
    user_placeholder: "\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432",
    user_name_nick: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F (\u043D\u0438\u043A)",
    create_record: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C",
    save_record: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C",
    hide_from: '\u0421\u043A\u0440\u044B\u0442\u044C \u0435\u0441\u043B\u0438 "\u043E\u0442 \u043A\u043E\u0433\u043E"',
    hide_to: '\u0421\u043A\u0440\u044B\u0442\u044C \u0435\u0441\u043B\u0438 "\u043A\u043E\u043C\u0443"',
    only_negative: "\u0422\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 +/- \u0431\u0430\u043B\u0430\u043D\u0441",
    please_select_from_to: '\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 "\u041E\u0442 \u043A\u043E\u0433\u043E", "\u041A\u043E\u043C\u0443" \u0438\u043B\u0438 \u043E\u0431\u0430 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430',
    user_already_exists: "\u042D\u0442\u043E \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0445",
    delete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    confirm: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",
    are_you_sure: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C?"
  };

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i3;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m = c2.unmount;
  var s2 = c2.__;
  function d2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
  }
  function h2(n2) {
    return o2 = 1, p2(D, n2);
  }
  function p2(n2, u3, i4) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i4 ? i4(u3) : D(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        })) return !c3 || c3.call(this, n3, t3, r3);
        var i5 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i5 = true);
          }
        }), !(!i5 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function y2(n2, u3) {
    var i4 = d2(t2++, 3);
    !c2.__s && C2(i4.__H, u3) && (i4.__ = n2, i4.i = u3, r2.__H.__h.push(i4));
  }
  function T2(n2, r3) {
    var u3 = d2(t2++, 7);
    return C2(u3.__H, r3) && (u3.__ = n2(), u3.__H = r3, u3.__h = n2), u3.__;
  }
  function q2(n2, t3) {
    return o2 = 8, T2(function() {
      return n2;
    }, t3);
  }
  function x2(n2) {
    var u3 = r2.context[n2.__c], i4 = d2(t2++, 9);
    return i4.c = n2, u3 ? (null == i4.__ && (i4.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t3) {
      n2.__H.__h = [], c2.__e(t3, n2.__v);
    }
  }
  c2.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
  }, c2.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i4 = (r2 = n2.__c).__H;
    i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
    })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n2) {
    v2 && v2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i3 === c2.requestAnimationFrame || ((i3 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.i = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], c2.__e(r3, n3.__v);
      }
    }), l2 && l2(n2, t3);
  }, c2.unmount = function(n2) {
    m && m(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3) n2[e3] = t3[e3];
    return n2;
  }
  function E2(n2, t3) {
    for (var e3 in n2) if ("__source" !== e3 && !(e3 in t3)) return true;
    for (var r3 in t3) if ("__source" !== r3 && n2[r3] !== t3[r3]) return true;
    return false;
  }
  function C3(n2, t3) {
    this.props = n2, this.context = t3;
  }
  (C3.prototype = new b()).isPureReactComponent = true, C3.prototype.shouldComponentUpdate = function(n2, t3) {
    return E2(this.props, n2) || E2(this.state, t3);
  };
  var R = l.__b;
  l.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
  };
  var w3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var M2 = l.__e;
  l.__e = function(n2, t3, e3, r3) {
    if (n2.then) {
      for (var u3, o3 = t3; o3 = o3.__; ) if ((u3 = o3.__c) && u3.__c) return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
    }
    M2(n2, t3, e3, r3);
  };
  var T3 = l.unmount;
  function A3(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return A3(n3, t3, e3);
    })), n2;
  }
  function D3(n2, t3, e3) {
    return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return D3(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function L2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function O2(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function U() {
    this.u = null, this.o = null;
  }
  l.unmount = function(n2) {
    var t3 = n2.__c;
    t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), T3 && T3(n2);
  }, (L2.prototype = new b()).__c = function(n2, t3) {
    var e3 = t3.__c, r3 = this;
    null == r3.t && (r3.t = []), r3.t.push(e3);
    var u3 = O2(r3.__v), o3 = false, i4 = function() {
      o3 || (o3 = true, e3.__R = null, u3 ? u3(c3) : c3());
    };
    e3.__R = i4;
    var c3 = function() {
      if (!--r3.__u) {
        if (r3.state.__a) {
          var n3 = r3.state.__a;
          r3.__v.__k[0] = D3(n3, n3.__c.__P, n3.__c.__O);
        }
        var t4;
        for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); ) t4.forceUpdate();
      }
    };
    r3.__u++ || 32 & t3.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i4, i4);
  }, L2.prototype.componentWillUnmount = function() {
    this.t = [];
  }, L2.prototype.render = function(n2, e3) {
    if (this.__b) {
      if (this.__v.__k) {
        var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
        this.__v.__k[0] = A3(this.__b, r3, o3.__O = o3.__P);
      }
      this.__b = null;
    }
    var i4 = e3.__a && _(k, null, n2.fallback);
    return i4 && (i4.__u &= -33), [_(k, null, e3.__a ? null : n2.children), i4];
  };
  var V2 = function(n2, t3, e3) {
    if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size)) for (e3 = n2.u; e3; ) {
      for (; e3.length > 3; ) e3.pop()();
      if (e3[1] < e3[0]) break;
      n2.u = e3 = e3[2];
    }
  };
  (U.prototype = new b()).__a = function(n2) {
    var t3 = this, e3 = O2(t3.__v), r3 = t3.o.get(n2);
    return r3[0]++, function(u3) {
      var o3 = function() {
        t3.props.revealOrder ? (r3.push(u3), V2(t3, n2, r3)) : u3();
      };
      e3 ? e3(o3) : o3();
    };
  }, U.prototype.render = function(n2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t3 = H(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
    for (var e3 = t3.length; e3--; ) this.o.set(t3[e3], this.u = [1, 0, this.u]);
    return n2.children;
  }, U.prototype.componentDidUpdate = U.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t3, e3) {
      V2(n2, e3, t3);
    });
  };
  var z3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var B3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var H2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var Z = /[A-Z0-9]/g;
  var Y = "undefined" != typeof document;
  var $2 = function(n2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
  };
  b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
    Object.defineProperty(b.prototype, t3, { configurable: true, get: function() {
      return this["UNSAFE_" + t3];
    }, set: function(n2) {
      Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
    } });
  });
  var J = l.event;
  function K() {
  }
  function Q() {
    return this.cancelBubble;
  }
  function X() {
    return this.defaultPrevented;
  }
  l.event = function(n2) {
    return J && (n2 = J(n2)), n2.persist = K, n2.isPropagationStopped = Q, n2.isDefaultPrevented = X, n2.nativeEvent = n2;
  };
  var nn;
  var tn = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var en = l.vnode;
  l.vnode = function(n2) {
    "string" == typeof n2.type && function(n3) {
      var t3 = n3.props, e3 = n3.type, u3 = {};
      for (var o3 in t3) {
        var i4 = t3[o3];
        if (!("value" === o3 && "defaultValue" in t3 && null == i4 || Y && "children" === o3 && "noscript" === e3 || "class" === o3 || "className" === o3)) {
          var c3 = o3.toLowerCase();
          "defaultValue" === o3 && "value" in t3 && null == t3.value ? o3 = "value" : "download" === o3 && true === i4 ? i4 = "" : "translate" === c3 && "no" === i4 ? i4 = false : "ondoubleclick" === c3 ? o3 = "ondblclick" : "onchange" !== c3 || "input" !== e3 && "textarea" !== e3 || $2(t3.type) ? "onfocus" === c3 ? o3 = "onfocusin" : "onblur" === c3 ? o3 = "onfocusout" : H2.test(o3) ? o3 = c3 : -1 === e3.indexOf("-") && B3.test(o3) ? o3 = o3.replace(Z, "-$&").toLowerCase() : null === i4 && (i4 = void 0) : c3 = o3 = "oninput", "oninput" === c3 && u3[o3 = c3] && (o3 = "oninputCapture"), u3[o3] = i4;
        }
      }
      "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = H(t3.children).forEach(function(n4) {
        n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
      })), "select" == e3 && null != u3.defaultValue && (u3.value = H(t3.children).forEach(function(n4) {
        n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
      })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", tn)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
    }(n2), n2.$$typeof = z3, en && en(n2);
  };
  var rn = l.__r;
  l.__r = function(n2) {
    rn && rn(n2), nn = n2.__c;
  };
  var un = l.diffed;
  l.diffed = function(n2) {
    un && un(n2);
    var t3 = n2.props, e3 = n2.__e;
    null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), nn = null;
  };

  // src/consts/storage-keys.consts.ts
  var onOffStorageKey = "activeState";
  var languageStorageKey = "activeLanguage";
  var statStorageKey = "stat";
  var allTimeStatStorageKey = "all_stat";
  var settingsPageStorageKey = "settings_page";
  var hideModeStorageKey = "hide_mode";

  // src/i18n/hooks/useLanguage.tsx
  var getLanguageState = async () => {
    const storedLanguage = await chrome.storage.sync.get([languageStorageKey]);
    let actual = "EN";
    if (LANGUAGE_CODES.includes(storedLanguage[languageStorageKey])) {
      actual = storedLanguage[languageStorageKey];
    }
    return actual;
  };
  var useLanguage = () => {
    const [activeLanguage, setActiveLanguage] = h2(null);
    y2(() => {
      const processCurrentState = async () => {
        const actual = await getLanguageState();
        setActiveLanguage(actual);
      };
      const handleStateChanges = (changes, areaName) => {
        if (areaName === "sync" && changes?.[languageStorageKey]?.newValue) {
          void processCurrentState();
        }
      };
      chrome.storage.onChanged.addListener(handleStateChanges);
      void processCurrentState();
      return () => {
        chrome.storage.onChanged.removeListener(handleStateChanges);
      };
    }, [setActiveLanguage]);
    const setLanguage = q2(async (lang) => {
      void chrome.storage.sync.set({ [languageStorageKey]: lang });
      setActiveLanguage(lang);
    }, [setActiveLanguage]);
    return {
      activeLanguage,
      setLanguage
    };
  };

  // src/i18n/components/language-selector.component.tsx
  var LanguageSelector = () => {
    const { activeLanguage, setLanguage } = useLanguage();
    return /* @__PURE__ */ _("span", { className: "language-selector" }, /* @__PURE__ */ _("ul", null, LANGUAGE_CODES.map((code) => /* @__PURE__ */ _("li", { key: code }, /* @__PURE__ */ _(
      "a",
      {
        href: "#",
        onClick: () => setLanguage(code),
        className: code === activeLanguage ? "active" : ""
      },
      code
    )))));
  };

  // src/i18n/components/language.context.tsx
  var LanguageContext = G({
    langCode: "EN",
    translate: (code) => code
  });

  // src/i18n/components/language-aware.wrapper.tsx
  var LanguageAwareWrapper = ({ children }) => {
    const { activeLanguage } = useLanguage();
    const translate = q2((code) => {
      return LANG_DATA[activeLanguage || "EN"][code] || code;
    }, [activeLanguage]);
    return /* @__PURE__ */ _(LanguageContext.Provider, { value: { langCode: activeLanguage || "EN", translate } }, children);
  };

  // src/i18n/components/i18n.component.tsx
  var I18n = ({ code }) => {
    const { langCode, translate } = x2(LanguageContext);
    if (!code || !langCode) {
      return /* @__PURE__ */ _("span", null, "...");
    }
    const text = T2(() => translate(code), [code, langCode]);
    return /* @__PURE__ */ _("span", null, text);
  };

  // src/i18n/index.ts
  var LANGUAGE_CODES = ["EN", "UA", "RU"];
  var LANG_DATA = {
    EN,
    UA,
    RU
  };

  // src/pages/components/popup/go-settings.component.tsx
  var getStoredTabId = async () => {
    const currentMayBeSettings = await chrome.storage.sync.get([settingsPageStorageKey]);
    return isNaN(Number(currentMayBeSettings[settingsPageStorageKey])) ? -1 : Number(currentMayBeSettings[settingsPageStorageKey]);
  };
  var GoSettings = () => {
    const goSettings = q2(async (e3) => {
      e3.preventDefault();
      e3.stopPropagation();
      const tabs = await chrome.tabs.query({});
      const existingTabId = await getStoredTabId();
      const existingTab = existingTabId ? tabs.find((tab) => tab.id === existingTabId) : void 0;
      if (existingTab && existingTab.id) {
        await chrome.tabs.update(existingTab.id, { active: true });
      } else {
        chrome.tabs.create({ "url": "settings.html" }, (tab) => {
          chrome.tabs.update(tab.id, { active: true });
        });
      }
      window.close();
      return false;
    }, []);
    return /* @__PURE__ */ _("a", { href: "#", onClick: goSettings }, /* @__PURE__ */ _(I18n, { code: "open_settings_page" }));
  };

  // src/pages/components/shared/reset-stat.component.tsx
  var ResetStat = () => {
    const resetStat = q2(async () => {
      await chrome.storage.sync.set({ [statStorageKey]: { processed: 0, total: 0 } });
      await chrome.storage.sync.set({ [allTimeStatStorageKey]: { processed: 0, total: 0 } });
    }, []);
    return /* @__PURE__ */ _("div", { class: "reset-stat-container" }, /* @__PURE__ */ _("a", { href: "#", onClick: resetStat }, /* @__PURE__ */ _(I18n, { code: "reset_stat" })));
  };

  // src/pages/components/shared/stat-table.component.tsx
  var StatTable = () => {
    const [stat, setStat] = h2({ processed: 0, total: 0 });
    const [allStat, setAllStat] = h2({ processed: 0, total: 0 });
    y2(() => {
      const processCurrentStat = async () => {
        const storedStat = await chrome.storage.sync.get([statStorageKey]);
        setStat({
          processed: storedStat?.[statStorageKey]?.processed ?? 0,
          total: storedStat?.[statStorageKey]?.total ?? 0
        });
        const storedAllStat = await chrome.storage.sync.get([allTimeStatStorageKey]);
        setAllStat({
          processed: storedAllStat?.[allTimeStatStorageKey]?.processed ?? 0,
          total: storedAllStat?.[allTimeStatStorageKey]?.total ?? 0
        });
      };
      const handleLangChanges = (changes, areaName) => {
        if (areaName === "sync" && changes?.[statStorageKey]?.newValue) {
          void processCurrentStat();
        }
      };
      chrome.storage.onChanged.addListener(handleLangChanges);
      void processCurrentStat();
      return () => {
        chrome.storage.onChanged.removeListener(handleLangChanges);
      };
    }, [setStat, setAllStat]);
    return /* @__PURE__ */ _("div", { className: "extension-stat" }, /* @__PURE__ */ _("table", null, /* @__PURE__ */ _("thead", null, /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("th", null, /* @__PURE__ */ _(I18n, { code: "has_been_hidden" })), /* @__PURE__ */ _("th", null, /* @__PURE__ */ _(I18n, { code: "total" })))), /* @__PURE__ */ _("tbody", null, /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", { colSpan: 2 }, /* @__PURE__ */ _(I18n, { code: "in_current_session" }))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, stat.processed), /* @__PURE__ */ _("td", null, stat.total)), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", { colSpan: 2 }, /* @__PURE__ */ _(I18n, { code: "for_all_time" }))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, allStat.processed), /* @__PURE__ */ _("td", null, allStat.total)))), /* @__PURE__ */ _(ResetStat, null));
  };

  // src/pages/hooks/useOnOff.tsx
  var getOnOffState = async () => {
    const storedState = await chrome.storage.sync.get([onOffStorageKey]);
    return storedState[onOffStorageKey] !== "off";
  };
  var useOnOff = () => {
    const [on, setOn] = h2(null);
    y2(() => {
      const processCurrentState = async () => {
        const actual = await getOnOffState();
        setOn(actual);
      };
      const handleStateChanges = (changes, areaName) => {
        if (areaName === "sync" && changes?.[onOffStorageKey]?.newValue) {
          void processCurrentState();
        }
      };
      chrome.storage.onChanged.addListener(handleStateChanges);
      void processCurrentState();
      return () => {
        chrome.storage.onChanged.removeListener(handleStateChanges);
      };
    }, [setOn]);
    const toggleOnOffState = q2(async () => {
      const actual = await getOnOffState();
      await chrome.storage.sync.set({ [onOffStorageKey]: actual ? "off" : "on" });
    }, []);
    return {
      on,
      toggleOnOffState
    };
  };

  // src/pages/hooks/useHideMode.tsx
  var getHideModeState = async () => {
    const storedState = await chrome.storage.sync.get([hideModeStorageKey]);
    let actual = "default";
    if (storedState[hideModeStorageKey] === "collapse") {
      actual = "collapse";
    }
    if (storedState[hideModeStorageKey] === "overlay") {
      actual = "overlay";
    }
    return actual;
  };
  var useHideMode = () => {
    const [_hideMode, set_HideMode] = h2(null);
    y2(() => {
      const processCurrentState = async () => {
        const actual = await getHideModeState();
        set_HideMode(actual);
      };
      const handleStateChanges = (changes, areaName) => {
        if (areaName === "sync" && changes?.[hideModeStorageKey]?.newValue) {
          void processCurrentState();
        }
      };
      chrome.storage.onChanged.addListener(handleStateChanges);
      void processCurrentState();
      return () => {
        chrome.storage.onChanged.removeListener(handleStateChanges);
      };
    }, [set_HideMode]);
    const setHideMode = q2(async (mode) => {
      void chrome.storage.sync.set({ [hideModeStorageKey]: mode });
      set_HideMode(mode);
    }, [set_HideMode]);
    return {
      hideMode: _hideMode,
      setHideMode
    };
  };

  // src/pages/components/popup/current-hide-mode.component.tsx
  var CurrentHideMode = () => {
    const { hideMode } = useHideMode();
    const modeName = hideMode === "overlay" ? "overlay" : hideMode === "collapse" ? "collapse" : "blur";
    return /* @__PURE__ */ _("span", { className: "tag" }, modeName);
  };

  // src/pages/components/shared/switch.component.tsx
  var Switch = ({ on, onChange, title, titleKey, children }) => {
    if (typeof on !== "boolean") {
      return /* @__PURE__ */ _("div", { className: "switch-container" }, /* @__PURE__ */ _("label", { className: "switch" }, /* @__PURE__ */ _("span", { className: "slider round" })), "...");
    }
    const handleChange = q2((e3) => {
      e3.preventDefault();
      onChange(e3.target?.checked);
      return false;
    }, [onChange]);
    const handleToggle = q2(() => {
      onChange(!on);
    }, [onChange, on]);
    return /* @__PURE__ */ _("div", { className: "switch-container" }, /* @__PURE__ */ _("label", { className: "switch" }, /* @__PURE__ */ _("input", { type: "checkbox", checked: on, onChange: handleChange }), /* @__PURE__ */ _("span", { className: "slider round" })), /* @__PURE__ */ _("div", { onClick: handleToggle, className: "switch-label" }, titleKey && /* @__PURE__ */ _(I18n, { code: titleKey }), title, children));
  };

  // src/pages/components/shared/on-off.component.tsx
  var OnOff = () => {
    const { on, toggleOnOffState } = useOnOff();
    return /* @__PURE__ */ _(
      Switch,
      {
        on,
        onChange: toggleOnOffState,
        titleKey: "enable_processing"
      },
      /* @__PURE__ */ _(CurrentHideMode, null)
    );
  };

  // src/pages/popup.page.tsx
  var PopupPage = () => {
    const { on } = useOnOff();
    y2(() => {
      if (!on) {
        document.body.classList.add("disabled");
      } else {
        document.body.classList.remove("disabled");
      }
    }, [on]);
    return /* @__PURE__ */ _(LanguageAwareWrapper, null, /* @__PURE__ */ _("h1", null, /* @__PURE__ */ _(I18n, { code: "title" }), /* @__PURE__ */ _("span", { className: "language-selector" }, /* @__PURE__ */ _(LanguageSelector, null))), /* @__PURE__ */ _(OnOff, null), /* @__PURE__ */ _(StatTable, null), /* @__PURE__ */ _(GoSettings, null));
  };

  // src/popup.tsx
  var popupContainer = document.getElementById("popup");
  var Popup = /* @__PURE__ */ _(PopupPage, null);
  B(Popup, popupContainer);
})();
