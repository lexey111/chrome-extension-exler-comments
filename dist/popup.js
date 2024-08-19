"use strict";(()=>{var Z,d,Re,kt,T,Ne,Oe,fe,ge,pe,de,Ae,W={},Ie=[],Nt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q=Array.isArray;function I(e,t){for(var o in t)e[o]=t[o];return e}function Te(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,o){var n,r,a,i={};for(a in t)a=="key"?n=t[a]:a=="ref"?r=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?Z.call(arguments,2):o),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return J(e,i,n,r,null)}function J(e,t,o,n,r){var a={type:e,props:t,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Re,__i:-1,__u:0};return r==null&&d.vnode!=null&&d.vnode(a),a}function R(e){return e.children}function E(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__i+1):null;for(var o;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null)return o.__e;return typeof e.type=="function"?H(e):null}function He(e){var t,o;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null){e.__e=e.__c.base=o.__e;break}return He(e)}}function me(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!Y.__r++||Ne!==d.debounceRendering)&&((Ne=d.debounceRendering)||Oe)(Y)}function Y(){var e,t,o,n,r,a,i,l;for(T.sort(fe);e=T.shift();)e.__d&&(t=T.length,n=void 0,a=(r=(o=e).__v).__e,i=[],l=[],o.__P&&((n=I({},r)).__v=r.__v+1,d.vnode&&d.vnode(n),ve(o.__P,n,r,o.__n,o.__P.namespaceURI,32&r.__u?[a]:null,i,a??H(r),!!(32&r.__u),l),n.__v=r.__v,n.__.__k[n.__i]=n,De(i,n,l),n.__e!=a&&He(n)),T.length>t&&T.sort(fe));Y.__r=0}function Me(e,t,o,n,r,a,i,l,u,c,p){var s,m,f,S,N,x=n&&n.__k||Ie,h=t.length;for(o.__d=u,Lt(o,t,x),u=o.__d,s=0;s<h;s++)(f=o.__k[s])!=null&&typeof f!="boolean"&&typeof f!="function"&&(m=f.__i===-1?W:x[f.__i]||W,f.__i=s,ve(e,f,m,r,a,i,l,u,c,p),S=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&ye(m.ref,null,f),p.push(f.ref,f.__c||S,f)),N==null&&S!=null&&(N=S),65536&f.__u||m.__k===f.__k?(u&&typeof f.type=="string"&&!e.contains(u)&&(u=H(m)),u=Ue(f,u,e)):typeof f.type=="function"&&f.__d!==void 0?u=f.__d:S&&(u=S.nextSibling),f.__d=void 0,f.__u&=-196609);o.__d=u,o.__e=N}function Lt(e,t,o){var n,r,a,i,l,u=t.length,c=o.length,p=c,s=0;for(e.__k=[],n=0;n<u;n++)i=n+s,(r=e.__k[n]=(r=t[n])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?J(null,r,null,null,null):Q(r)?J(R,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?J(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,l=Pt(r,o,i,p),r.__i=l,a=null,l!==-1&&(p--,(a=o[l])&&(a.__u|=131072)),a==null||a.__v===null?(l==-1&&s--,typeof r.type!="function"&&(r.__u|=65536)):l!==i&&(l==i-1?s=l-i:l==i+1?s++:l>i?p>u-i?s+=l-i:s--:l<i&&s++,l!==n+s&&(r.__u|=65536))):(a=o[i])&&a.key==null&&a.__e&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=H(a)),he(a,a,!1),o[i]=null,p--);if(p)for(n=0;n<c;n++)(a=o[n])!=null&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=H(a)),he(a,a))}function Ue(e,t,o){var n,r;if(typeof e.type=="function"){for(n=e.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=e,t=Ue(n[r],t,o));return t}e.__e!=t&&(o.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function B(e,t){return t=t||[],e==null||typeof e=="boolean"||(Q(e)?e.some(function(o){B(o,t)}):t.push(e)),t}function Pt(e,t,o,n){var r=e.key,a=e.type,i=o-1,l=o+1,u=t[o];if(u===null||u&&r==u.key&&a===u.type&&!(131072&u.__u))return o;if(n>(u!=null&&!(131072&u.__u)?1:0))for(;i>=0||l<t.length;){if(i>=0){if((u=t[i])&&!(131072&u.__u)&&r==u.key&&a===u.type)return i;i--}if(l<t.length){if((u=t[l])&&!(131072&u.__u)&&r==u.key&&a===u.type)return l;l++}}return-1}function Le(e,t,o){t[0]==="-"?e.setProperty(t,o??""):e[t]=o==null?"":typeof o!="number"||Nt.test(t)?o:o+"px"}function j(e,t,o,n,r){var a;e:if(t==="style")if(typeof o=="string")e.style.cssText=o;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)o&&t in o||Le(e.style,t,"");if(o)for(t in o)n&&o[t]===n[t]||Le(e.style,t,o[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=o,o?n?o.u=n.u:(o.u=ge,e.addEventListener(t,a?de:pe,a)):e.removeEventListener(t,a?de:pe,a);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&o==1?"":o))}}function Pe(e){return function(t){if(this.l){var o=this.l[t.type+e];if(t.t==null)t.t=ge++;else if(t.t<o.u)return;return o(d.event?d.event(t):t)}}}function ve(e,t,o,n,r,a,i,l,u,c){var p,s,m,f,S,N,x,h,v,K,A,G,V,ke,z,ce,P=t.type;if(t.constructor!==void 0)return null;128&o.__u&&(u=!!(32&o.__u),a=[l=t.__e=o.__e]),(p=d.__b)&&p(t);e:if(typeof P=="function")try{if(h=t.props,v="prototype"in P&&P.prototype.render,K=(p=P.contextType)&&n[p.__c],A=p?K?K.props.value:p.__:n,o.__c?x=(s=t.__c=o.__c).__=s.__E:(v?t.__c=s=new P(h,A):(t.__c=s=new E(h,A),s.constructor=P,s.render=Ot),K&&K.sub(s),s.props=h,s.state||(s.state={}),s.context=A,s.__n=n,m=s.__d=!0,s.__h=[],s._sb=[]),v&&s.__s==null&&(s.__s=s.state),v&&P.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=I({},s.__s)),I(s.__s,P.getDerivedStateFromProps(h,s.__s))),f=s.props,S=s.state,s.__v=t,m)v&&P.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),v&&s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(v&&P.getDerivedStateFromProps==null&&h!==f&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(h,A),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(h,s.__s,A)===!1||t.__v===o.__v)){for(t.__v!==o.__v&&(s.props=h,s.state=s.__s,s.__d=!1),t.__e=o.__e,t.__k=o.__k,t.__k.forEach(function(q){q&&(q.__=t)}),G=0;G<s._sb.length;G++)s.__h.push(s._sb[G]);s._sb=[],s.__h.length&&i.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(h,s.__s,A),v&&s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(f,S,N)})}if(s.context=A,s.props=h,s.__P=e,s.__e=!1,V=d.__r,ke=0,v){for(s.state=s.__s,s.__d=!1,V&&V(t),p=s.render(s.props,s.state,s.context),z=0;z<s._sb.length;z++)s.__h.push(s._sb[z]);s._sb=[]}else do s.__d=!1,V&&V(t),p=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++ke<25);s.state=s.__s,s.getChildContext!=null&&(n=I(I({},n),s.getChildContext())),v&&!m&&s.getSnapshotBeforeUpdate!=null&&(N=s.getSnapshotBeforeUpdate(f,S)),Me(e,Q(ce=p!=null&&p.type===R&&p.key==null?p.props.children:p)?ce:[ce],t,o,n,r,a,i,l,u,c),s.base=t.__e,t.__u&=-161,s.__h.length&&i.push(s),x&&(s.__E=s.__=null)}catch(q){t.__v=null,u||a!=null?(t.__e=l,t.__u|=u?160:32,a[a.indexOf(l)]=null):(t.__e=o.__e,t.__k=o.__k),d.__e(q,t,o)}else a==null&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=Rt(o.__e,t,o,n,r,a,i,u,c);(p=d.diffed)&&p(t)}function De(e,t,o){t.__d=void 0;for(var n=0;n<o.length;n++)ye(o[n],o[++n],o[++n]);d.__c&&d.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(a){a.call(r)})}catch(a){d.__e(a,r.__v)}})}function Rt(e,t,o,n,r,a,i,l,u){var c,p,s,m,f,S,N,x=o.props,h=t.props,v=t.type;if(v==="svg"?r="http://www.w3.org/2000/svg":v==="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(c=0;c<a.length;c++)if((f=a[c])&&"setAttribute"in f==!!v&&(v?f.localName===v:f.nodeType===3)){e=f,a[c]=null;break}}if(e==null){if(v===null)return document.createTextNode(h);e=document.createElementNS(r,v,h.is&&h),a=null,l=!1}if(v===null)x===h||l&&e.data===h||(e.data=h);else{if(a=a&&Z.call(e.childNodes),x=o.props||W,!l&&a!=null)for(x={},c=0;c<e.attributes.length;c++)x[(f=e.attributes[c]).name]=f.value;for(c in x)if(f=x[c],c!="children"){if(c=="dangerouslySetInnerHTML")s=f;else if(c!=="key"&&!(c in h)){if(c=="value"&&"defaultValue"in h||c=="checked"&&"defaultChecked"in h)continue;j(e,c,null,f,r)}}for(c in h)f=h[c],c=="children"?m=f:c=="dangerouslySetInnerHTML"?p=f:c=="value"?S=f:c=="checked"?N=f:c==="key"||l&&typeof f!="function"||x[c]===f||j(e,c,f,x[c],r);if(p)l||s&&(p.__html===s.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(s&&(e.innerHTML=""),Me(e,Q(m)?m:[m],t,o,n,v==="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,i,a?a[0]:o.__k&&H(o,0),l,u),a!=null)for(c=a.length;c--;)a[c]!=null&&Te(a[c]);l||(c="value",S!==void 0&&(S!==e[c]||v==="progress"&&!S||v==="option"&&S!==x[c])&&j(e,c,S,x[c],r),c="checked",N!==void 0&&N!==e[c]&&j(e,c,N,x[c],r))}return e}function ye(e,t,o){try{typeof e=="function"?e(t):e.current=t}catch(n){d.__e(n,o)}}function he(e,t,o){var n,r;if(d.unmount&&d.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||ye(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){d.__e(a,t)}n.base=n.__P=null}if(n=e.__k)for(r=0;r<n.length;r++)n[r]&&he(n[r],t,o||typeof e.type!="function");o||e.__e==null||Te(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function Ot(e,t,o){return this.constructor(e,o)}function Ce(e,t,o){var n,r,a,i;d.__&&d.__(e,t),r=(n=typeof o=="function")?null:o&&o.__k||t.__k,a=[],i=[],ve(t,e=(!n&&o||t).__k=_(R,null,[e]),r||W,W,t.namespaceURI,!n&&o?[o]:r?null:t.firstChild?Z.call(t.childNodes):null,a,!n&&o?o:r?r.__e:t.firstChild,n,i),De(a,e,i)}function X(e,t){var o={__c:t="__cC"+Ae++,__:e,Consumer:function(n,r){return n.children(r)},Provider:function(n){var r,a;return this.getChildContext||(r=[],(a={})[t]=this,this.getChildContext=function(){return a},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&r.some(function(l){l.__e=!0,me(l)})},this.sub=function(i){r.push(i);var l=i.componentWillUnmount;i.componentWillUnmount=function(){r&&r.splice(r.indexOf(i),1),l&&l.call(i)}}),n.children}};return o.Provider.__=o.Consumer.contextType=o}Z=Ie.slice,d={__e:function(e,t,o,n){for(var r,a,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(e)),i=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,n||{}),i=r.__d),i)return r.__E=r}catch(l){e=l}throw e}},Re=0,kt=function(e){return e!=null&&e.constructor==null},E.prototype.setState=function(e,t){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=I({},this.state),typeof e=="function"&&(e=e(I({},o),this.props)),e&&I(o,e),e!=null&&this.__v&&(t&&this._sb.push(t),me(this))},E.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),me(this))},E.prototype.render=R,T=[],Oe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fe=function(e,t){return e.__v.__b-t.__v.__b},Y.__r=0,ge=0,pe=Pe(!1),de=Pe(!0),Ae=0;var be;(be=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0)!=null&&be.__PREACT_DEVTOOLS__&&be.__PREACT_DEVTOOLS__.attachPreact("10.22.1",d,{Fragment:R,Component:E});var Fe={title:"Exler's site | \u0432\u043E\u0433\u043D\u0435\u0433\u0430\u0441\u043D\u0438\u043A \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456\u0432",enable_processing:"\u0423\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u043E\u0431\u0440\u043E\u0431\u043A\u0443",statistics:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",has_been_hidden:"\u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u043E",total:"\u0432\u0441\u044C\u043E\u0433\u043E \u043E\u0431\u0440\u043E\u0431\u043B\u0435\u043D\u043E",in_current_session:"\u0412 \u043F\u043E\u0442\u043E\u0447\u043D\u0456\u0439 \u0441\u0435\u0441\u0456\u0457",for_all_time:"\u0417\u0430 \u0432\u0435\u0441\u044C \u0447\u0430\u0441",reset_stat:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443",settings:"\u041D\u0430\u043B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F",hide_mode:"\u0420\u0435\u0436\u0438\u043C \u043F\u0440\u0438\u0445\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F",select_mode:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u043F\u0440\u0438\u0445\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F:",select_mode_default:"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439 (\u043F\u0440\u043E\u0441\u0442\u0435 \u0440\u043E\u0437\u043C\u0438\u0442\u0442\u044F)",select_mode_collapse:"\u0421\u0445\u043B\u043E\u043F\u0443\u0432\u0430\u043D\u043D\u044F",select_mode_overlay:"\u041F\u0435\u0440\u0435\u043A\u0440\u0438\u0442\u0442\u044F",preview:"\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434",open_settings_page:"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430\u043B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F...",rules:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430",no_rules:'\u041F\u043E\u043A\u0438 \u0449\u043E \u043D\u0435\u043C\u0430\u0454 \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 "\u0414\u043E\u0434\u0430\u0442\u0438" \u043D\u0438\u0436\u0447\u0435, \u0449\u043E\u0431 \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043F\u0435\u0440\u0448\u0435.',no_rules_popup:'\u041D\u0435\u043C\u0430\u0454 \u043F\u0440\u0430\u0432\u0438\u043B \u0434\u043B\u044F \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430\u043B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F" \u043D\u0438\u0436\u0447\u0435, \u0449\u043E\u0431 \u0437\u0430\u0434\u0430\u0442\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430.',add_rule:"\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u043E",cancel:"\u0412\u0456\u0434\u043C\u0456\u043D\u0430",save:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",create:"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438",user_placeholder:"\u0413\u0440\u0438\u0446\u044C \u042F\u043A\u043E\u0432\u0438\u0447 \u0412\u0430\u0440\u0435\u043D\u0438\u043A",user_name_nick:"\u0406\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 (\u043D\u0456\u043A)",create_record:"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441",save_record:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u0430\u043F\u0438\u0441",hide_from:'\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 "\u0432\u0456\u0434 \u043A\u043E\u0433\u043E"',hide_to:'\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 "\u043A\u043E\u043C\u0443"',only_negative:"\u0422\u0456\u043B\u044C\u043A\u0438 \u044F\u043A\u0449\u043E \u0431\u0430\u043B\u0430\u043D\u0441 +/- \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u0439",please_select_from_to:'\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044C "\u0432\u0456\u0434 \u043A\u043E\u0433\u043E", "\u043A\u043E\u043C\u0443" \u0430\u0431\u043E \u043E\u0431\u0438\u0434\u0432\u0430 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0438',user_already_exists:"\u0426\u0435 \u0456\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0432\u0436\u0435 \u0456\u0441\u043D\u0443\u0454 \u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0445",delete:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",confirm:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F",are_you_sure:"\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441?",star_user_hint:`\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0456\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 "*" \u0442\u0430 "\u0422\u0456\u043B\u044C\u043A\u0438 \u044F\u043A\u0449\u043E \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u0439...", \u0449\u043E\u0431 \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0432\u0441\u0456 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456 \u0437 \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u043C \u0431\u0430\u043B\u0430\u043D\u0441\u043E\u043C`,mode_blur:"\u0440\u043E\u0437\u043C\u0438\u0432\u0430\u043D\u043D\u044F",mode_overlay:"\u043F\u0435\u0440\u0435\u043A\u0440\u0438\u0442\u0442\u044F",mode_collapse:"\u0437\u0433\u043E\u0440\u0442\u0430\u043D\u043D\u044F"};var Ke={title:"Exler's site | comments fire extinguisher",enable_processing:"Enable processing",statistics:"Statistics",has_been_hidden:"was hidden",total:"processed total",in_current_session:"In current session",for_all_time:"For all the time",reset_stat:"Reset statistics",settings:"Settings",hide_mode:"Hide mode",select_mode:"Select mode:",select_mode_default:"Default (simple blur)",select_mode_collapse:"Collapse",select_mode_overlay:"Overlay",preview:"Preview",open_settings_page:"Open settings page...",rules:"Rules",no_rules:'Nothing has been created yet. Please click the "Add" button below to create your first one.',no_rules_popup:'No rules to process. Please click "Open settings page" below to create your first one.',add_rule:"Add rule",cancel:"Cancel",save:"Save",create:"Create",user_placeholder:"John Doe",user_name_nick:"User name (nickname)",create_record:"Create record",save_record:"Save record",hide_from:'Hide if "from"',hide_to:'Hide if "to"',only_negative:"Only if negative +/- balance",please_select_from_to:"Please select From, To, or both",user_already_exists:"This user name already exists in rules",delete:"Delete",confirm:"Confirm",are_you_sure:"Are you sure you want to delete record?",star_user_hint:'You can use username "*" and "Only if negative..." to hide all comments with a negative balance',mode_blur:"blur",mode_overlay:"overlay",mode_collapse:"collapse"};var Ve={title:"Exler's site | \u043E\u0433\u043D\u0435\u0442\u0443\u0448\u0438\u0442\u0435\u043B\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432",enable_processing:"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443",statistics:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",has_been_hidden:"\u0441\u043A\u0440\u044B\u0442\u043E",total:"\u0432\u0441\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E",in_current_session:"\u0412 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438",for_all_time:"\u0417\u0430 \u0432\u0441\u0451 \u0432\u0440\u0435\u043C\u044F",reset_stat:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",hide_mode:"\u0420\u0435\u0436\u0438\u043C \u0441\u043A\u0440\u044B\u0442\u0438\u044F",select_mode:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043C \u0441\u043A\u0440\u044B\u0442\u0438\u044F:",select_mode_default:"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 (\u043F\u0440\u043E\u0441\u0442\u043E\u0435 \u0440\u0430\u0437\u043C\u044B\u0442\u0438\u0435)",select_mode_collapse:"\u0421\u0445\u043B\u043E\u043F\u044B\u0432\u0430\u043D\u0438\u0435",select_mode_overlay:"\u041D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u0435",preview:"\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",open_settings_page:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438...",rules:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430",no_rules:'\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C" \u043D\u0438\u0436\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u043E\u0435.',no_rules_popup:'\u041D\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B \u0434\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438" \u043D\u0438\u0436\u0435 \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u0430.',add_rule:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E",cancel:"\u041E\u0442\u043C\u0435\u043D\u0430",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",create:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C",user_placeholder:"\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432",user_name_nick:"\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F (\u043D\u0438\u043A)",create_record:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C",save_record:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C",hide_from:'\u0421\u043A\u0440\u044B\u0442\u044C \u0435\u0441\u043B\u0438 "\u043E\u0442 \u043A\u043E\u0433\u043E"',hide_to:'\u0421\u043A\u0440\u044B\u0442\u044C \u0435\u0441\u043B\u0438 "\u043A\u043E\u043C\u0443"',only_negative:"\u0422\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 +/- \u0431\u0430\u043B\u0430\u043D\u0441",please_select_from_to:'\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 "\u041E\u0442 \u043A\u043E\u0433\u043E", "\u041A\u043E\u043C\u0443" \u0438\u043B\u0438 \u043E\u0431\u0430 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430',user_already_exists:"\u042D\u0442\u043E \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u0445",delete:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",confirm:"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",are_you_sure:"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C?",star_user_hint:'\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F "*" \u0438 "\u0422\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439...", \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u0441 \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0431\u0430\u043B\u0430\u043D\u0441\u043E\u043C',mode_blur:"\u0440\u0430\u0437\u043C\u044B\u0442\u0438\u0435",mode_overlay:"\u0448\u0442\u043E\u0440\u043A\u0430",mode_collapse:"\u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435"};var M,g,Se,We,te=0,Ye=[],y=d,Be=y.__b,$e=y.__r,Ge=y.diffed,ze=y.__c,qe=y.unmount,je=y.__;function oe(e,t){y.__h&&y.__h(g,e,te||t),te=0;var o=g.__H||(g.__H={__:[],__h:[]});return e>=o.__.length&&o.__.push({}),o.__[e]}function w(e){return te=1,Ze(Xe,e)}function Ze(e,t,o){var n=oe(M++,2);if(n.t=e,!n.__c&&(n.__=[o?o(t):Xe(void 0,t),function(l){var u=n.__N?n.__N[0]:n.__[0],c=n.t(u,l);u!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=g,!g.u)){var r=function(l,u,c){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(m){return!!m.__c});if(p.every(function(m){return!m.__N}))return!a||a.call(this,l,u,c);var s=!1;return p.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(s=!0)}}),!(!s&&n.__c.props===l)&&(!a||a.call(this,l,u,c))};g.u=!0;var a=g.shouldComponentUpdate,i=g.componentWillUpdate;g.componentWillUpdate=function(l,u,c){if(this.__e){var p=a;a=void 0,r(l,u,c),a=p}i&&i.call(this,l,u,c)},g.shouldComponentUpdate=r}return n.__N||n.__}function k(e,t){var o=oe(M++,3);!y.__s&&Qe(o.__H,t)&&(o.__=e,o.i=t,g.__H.__h.push(o))}function ne(e,t){var o=oe(M++,7);return Qe(o.__H,t)&&(o.__=e(),o.__H=t,o.__h=e),o.__}function C(e,t){return te=8,ne(function(){return e},t)}function we(e){var t=g.context[e.__c],o=oe(M++,9);return o.c=e,t?(o.__==null&&(o.__=!0,t.sub(g)),t.props.value):e.__}function At(){for(var e;e=Ye.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ee),e.__H.__h.forEach(xe),e.__H.__h=[]}catch(t){e.__H.__h=[],y.__e(t,e.__v)}}y.__b=function(e){g=null,Be&&Be(e)},y.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),je&&je(e,t)},y.__r=function(e){$e&&$e(e),M=0;var t=(g=e.__c).__H;t&&(Se===g?(t.__h=[],g.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.i=o.__N=void 0})):(t.__h.forEach(ee),t.__h.forEach(xe),t.__h=[],M=0)),Se=g},y.diffed=function(e){Ge&&Ge(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ye.push(t)!==1&&We===y.requestAnimationFrame||((We=y.requestAnimationFrame)||It)(At)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.i=void 0})),Se=g=null},y.__c=function(e,t){t.some(function(o){try{o.__h.forEach(ee),o.__h=o.__h.filter(function(n){return!n.__||xe(n)})}catch(n){t.some(function(r){r.__h&&(r.__h=[])}),t=[],y.__e(n,o.__v)}}),ze&&ze(e,t)},y.unmount=function(e){qe&&qe(e);var t,o=e.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{ee(n)}catch(r){t=r}}),o.__H=void 0,t&&y.__e(t,o.__v))};var Je=typeof requestAnimationFrame=="function";function It(e){var t,o=function(){clearTimeout(n),Je&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(o,100);Je&&(t=requestAnimationFrame(o))}function ee(e){var t=g,o=e.__c;typeof o=="function"&&(e.__c=void 0,o()),g=t}function xe(e){var t=g;e.__c=e.__(),g=t}function Qe(e,t){return!e||e.length!==t.length||t.some(function(o,n){return o!==e[n]})}function Xe(e,t){return typeof t=="function"?t(e):t}function Ht(e,t){for(var o in t)e[o]=t[o];return e}function et(e,t){for(var o in e)if(o!=="__source"&&!(o in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function tt(e,t){this.props=e,this.context=t}(tt.prototype=new E).isPureReactComponent=!0,tt.prototype.shouldComponentUpdate=function(e,t){return et(this.props,e)||et(this.state,t)};var ot=d.__b;d.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ot&&ot(e)};var go=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var Mt=d.__e;d.__e=function(e,t,o,n){if(e.then){for(var r,a=t;a=a.__;)if((r=a.__c)&&r.__c)return t.__e==null&&(t.__e=o.__e,t.__k=o.__k),r.__c(e,t)}Mt(e,t,o,n)};var nt=d.unmount;function lt(e,t,o){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=Ht({},e)).__c!=null&&(e.__c.__P===o&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return lt(n,t,o)})),e}function ut(e,t,o){return e&&o&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return ut(n,t,o)}),e.__c&&e.__c.__P===t&&(e.__e&&o.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=o)),e}function Ee(){this.__u=0,this.t=null,this.__b=null}function ct(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function re(){this.u=null,this.o=null}d.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),nt&&nt(e)},(Ee.prototype=new E).__c=function(e,t){var o=t.__c,n=this;n.t==null&&(n.t=[]),n.t.push(o);var r=ct(n.__v),a=!1,i=function(){a||(a=!0,o.__R=null,r?r(l):l())};o.__R=i;var l=function(){if(!--n.__u){if(n.state.__a){var u=n.state.__a;n.__v.__k[0]=ut(u,u.__c.__P,u.__c.__O)}var c;for(n.setState({__a:n.__b=null});c=n.t.pop();)c.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(i,i)},Ee.prototype.componentWillUnmount=function(){this.t=[]},Ee.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var o=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=lt(this.__b,o,n.__O=n.__P)}this.__b=null}var r=t.__a&&_(R,null,e.fallback);return r&&(r.__u&=-33),[_(R,null,t.__a?null:e.children),r]};var rt=function(e,t,o){if(++o[1]===o[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(o=e.u;o;){for(;o.length>3;)o.pop()();if(o[1]<o[0])break;e.u=o=o[2]}};(re.prototype=new E).__a=function(e){var t=this,o=ct(t.__v),n=t.o.get(e);return n[0]++,function(r){var a=function(){t.props.revealOrder?(n.push(r),rt(t,e,n)):r()};o?o(a):a()}},re.prototype.render=function(e){this.u=null,this.o=new Map;var t=B(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var o=t.length;o--;)this.o.set(t[o],this.u=[1,0,this.u]);return e.children},re.prototype.componentDidUpdate=re.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,o){rt(e,o,t)})};var Ut=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Dt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ft=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Kt=/[A-Z0-9]/g,Vt=typeof document<"u",Wt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};E.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(E.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var at=d.event;function Bt(){}function $t(){return this.cancelBubble}function Gt(){return this.defaultPrevented}d.event=function(e){return at&&(e=at(e)),e.persist=Bt,e.isPropagationStopped=$t,e.isDefaultPrevented=Gt,e.nativeEvent=e};var ft,zt={enumerable:!1,configurable:!0,get:function(){return this.class}},st=d.vnode;d.vnode=function(e){typeof e.type=="string"&&function(t){var o=t.props,n=t.type,r={};for(var a in o){var i=o[a];if(!(a==="value"&&"defaultValue"in o&&i==null||Vt&&a==="children"&&n==="noscript"||a==="class"||a==="className")){var l=a.toLowerCase();a==="defaultValue"&&"value"in o&&o.value==null?a="value":a==="download"&&i===!0?i="":l==="translate"&&i==="no"?i=!1:l==="ondoubleclick"?a="ondblclick":l!=="onchange"||n!=="input"&&n!=="textarea"||Wt(o.type)?l==="onfocus"?a="onfocusin":l==="onblur"?a="onfocusout":Ft.test(a)?a=l:n.indexOf("-")===-1&&Dt.test(a)?a=a.replace(Kt,"-$&").toLowerCase():i===null&&(i=void 0):l=a="oninput",l==="oninput"&&r[a=l]&&(a="oninputCapture"),r[a]=i}}n=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=B(o.children).forEach(function(u){u.props.selected=r.value.indexOf(u.props.value)!=-1})),n=="select"&&r.defaultValue!=null&&(r.value=B(o.children).forEach(function(u){u.props.selected=r.multiple?r.defaultValue.indexOf(u.props.value)!=-1:r.defaultValue==u.props.value})),o.class&&!o.className?(r.class=o.class,Object.defineProperty(r,"className",zt)):(o.className&&!o.class||o.class&&o.className)&&(r.class=r.className=o.className),t.props=r}(e),e.$$typeof=Ut,st&&st(e)};var _t=d.__r;d.__r=function(e){_t&&_t(e),ft=e.__c};var it=d.diffed;d.diffed=function(e){it&&it(e);var t=e.props,o=e.__e;o!=null&&e.type==="textarea"&&"value"in t&&t.value!==o.value&&(o.value=t.value==null?"":t.value),ft=null};var $="activeState",U="activeLanguage",L="stat",O="all_stat",ae="settings_page",D="hide_mode",F="rules";var qt=async()=>{let e=await chrome.storage.sync.get([U]),t="EN";return _e.includes(e[U])&&(t=e[U]),t},se=()=>{let[e,t]=w(null);k(()=>{let n=async()=>{let a=await qt();t(a)},r=(a,i)=>{i==="sync"&&a?.[U]?.newValue&&n()};return chrome.storage.onChanged.addListener(r),n(),()=>{chrome.storage.onChanged.removeListener(r)}},[t]);let o=C(async n=>{chrome.storage.sync.set({[U]:n}),t(n)},[t]);return{activeLanguage:e,setLanguage:o}};var pt=()=>{let{activeLanguage:e,setLanguage:t}=se();return _("span",{className:"language-selector"},_("ul",null,_e.map(o=>_("li",{key:o},_("a",{href:"#",onClick:()=>t(o),className:o===e?"active":""},o)))))};var ie=X({langCode:"EN",translate:e=>e});var dt=({children:e})=>{let{activeLanguage:t}=se(),o=C(n=>mt[t||"EN"][n]||n,[t]);return _(ie.Provider,{value:{langCode:t||"EN",translate:o}},e)};var b=({code:e,className:t})=>{let{langCode:o,translate:n}=we(ie);if(!e||!o)return _("span",null,"...");let r=ne(()=>n(e),[e,o]);return _("span",{className:t||""},r)};var _e=["EN","UA","RU"],mt={EN:Ke,UA:Fe,RU:Ve};var jt=async()=>{let e=await chrome.storage.sync.get([ae]);return isNaN(Number(e[ae]))?-1:Number(e[ae])},ht=()=>{let e=C(async t=>{t.preventDefault(),t.stopPropagation();let o=await chrome.tabs.query({}),n=await jt(),r=n?o.find(a=>a.id===n):void 0;return r&&r.id?await chrome.tabs.update(r.id,{active:!0}):chrome.tabs.create({url:"settings.html"},a=>{chrome.tabs.update(a.id,{active:!0})}),window.close(),!1},[]);return _("a",{href:"#",onClick:e},_(b,{code:"open_settings_page"}))};var gt=()=>{let e=C(async()=>{await chrome.storage.sync.set({[L]:{processed:0,total:0}}),await chrome.storage.sync.set({[O]:{processed:0,total:0}})},[]);return _("div",{class:"reset-stat-container"},_("a",{href:"#",onClick:e},_(b,{code:"reset_stat"})))};var vt=()=>{let[e,t]=w({processed:0,total:0}),[o,n]=w({processed:0,total:0}),[r,a]=w(0),[i,l]=w(0);return k(()=>{let u=async()=>{let p=await chrome.storage.sync.get([L]);t({processed:p?.[L]?.processed??0,total:p?.[L]?.total??0});let s=(p?.[L]?.processed??0)>0&&(p?.[L]?.total??!1)?p?.[L]?.processed/p?.[L]?.total*100:0;a(()=>s);let m=await chrome.storage.sync.get([O]);n({processed:m?.[O]?.processed??0,total:m?.[O]?.total??0});let f=(m?.[O]?.processed??0)>0&&(m?.[O]?.total??!1)?m?.[O]?.processed/m?.[O]?.total*100:0;l(()=>f)},c=(p,s)=>{s==="sync"&&p?.[L]?.newValue&&u()};return chrome.storage.onChanged.addListener(c),u(),()=>{chrome.storage.onChanged.removeListener(c)}},[t,n]),_("div",{className:"extension-stat"},_("table",null,_("thead",null,_("tr",null,_("th",null,_(b,{code:"has_been_hidden"})),_("th",null,_(b,{code:"total"})))),_("tbody",null,_("tr",null,_("td",{colSpan:2},_(b,{code:"in_current_session"}))),_("tr",null,_("td",null,e.processed),_("td",null,e.total)),_("tr",null,_("td",{colSpan:2},_("div",{className:"progress"},_("span",{style:{width:r+"%"}}),_("i",null,r.toFixed(1),"%")))),_("tr",null,_("td",{colSpan:2},_(b,{code:"for_all_time"}))),_("tr",null,_("td",null,o.processed),_("td",null,o.total)),_("tr",null,_("td",{colSpan:2},_("div",{className:"progress"},_("span",{style:{width:i+"%"}}),_("i",null,i.toFixed(1),"%")))))),_(gt,null))};var yt=async()=>(await chrome.storage.sync.get([$]))[$]!=="off",le=()=>{let[e,t]=w(null);k(()=>{let n=async()=>{let a=await yt();t(a)},r=(a,i)=>{i==="sync"&&a?.[$]?.newValue&&n()};return chrome.storage.onChanged.addListener(r),n(),()=>{chrome.storage.onChanged.removeListener(r)}},[t]);let o=C(async()=>{let n=await yt();await chrome.storage.sync.set({[$]:n?"off":"on"})},[]);return{on:e,toggleOnOffState:o}};var Jt=async()=>{let e=await chrome.storage.sync.get([D]),t="default";return e[D]==="collapse"&&(t="collapse"),e[D]==="overlay"&&(t="overlay"),t},Ct=()=>{let[e,t]=w(null);k(()=>{let n=async()=>{let a=await Jt();t(a)},r=(a,i)=>{i==="sync"&&a?.[D]?.newValue&&n()};return chrome.storage.onChanged.addListener(r),n(),()=>{chrome.storage.onChanged.removeListener(r)}},[t]);let o=C(async n=>{chrome.storage.sync.set({[D]:n}),t(n)},[t]);return{hideMode:e,setHideMode:o}};var bt=()=>{let{hideMode:e}=Ct();return _(b,{className:"tag",code:e==="overlay"?"mode_overlay":e==="collapse"?"mode_collapse":"mode_blur"})};var St=({on:e,disabled:t,onChange:o,title:n,titleKey:r,children:a})=>{if(typeof e!="boolean")return _("div",{className:"switch-container"},_("label",{className:"switch"},_("span",{className:"slider round"})),"...");let i=C(u=>(u.preventDefault(),o?.(u.target?.checked),!1),[o]),l=C(()=>{o?.(!e)},[o,e]);return _("div",{className:"switch-container"+(t?" disabled":"")},_("label",{className:"switch"},_("input",{type:"checkbox",checked:e,onChange:i,disabled:t}),_("span",{className:"slider round"})),_("div",{onClick:l,className:"switch-label"},r&&_(b,{code:r}),n,a))};var xt={id:"default",user:"*",onlyNegativeBalance:!0,hideFrom:!1,hideTo:!1};var Yt=async()=>{let e=await chrome.storage.sync.get([F]),t=[];try{t=e[F]?JSON.parse(e[F]):[{...xt}]}catch(o){console.error(o)}return t},ue=()=>{let[e,t]=w([]);k(()=>{let n=async()=>{let a=await Yt();t(a)},r=(a,i)=>{i==="sync"&&a?.[F]?.newValue&&n()};return chrome.storage.onChanged.addListener(r),n(),()=>{chrome.storage.onChanged.removeListener(r)}},[t]);let o=C(async n=>{chrome.storage.sync.set({[F]:JSON.stringify(n)}),t(n)},[t]);return{rules:e,setRules:o}};var wt=()=>{let{on:e,toggleOnOffState:t}=le(),{rules:o}=ue();return _(St,{on:e,onChange:t,titleKey:"enable_processing"},_(bt,null),o.length>0&&_("span",{className:"tag"},_(b,{code:"rules"}),": ",o.length))};var Et=()=>{let{on:e}=le(),{rules:t}=ue();return k(()=>{e?document.body.classList.remove("disabled"):document.body.classList.add("disabled")},[e]),_(dt,null,_("h1",null,_(b,{code:"title"}),_("span",{className:"language-selector"},_(pt,null))),_(wt,null),t.length>0&&_(vt,null),t.length===0&&_("div",{className:"no-rules-info"},_(b,{code:"no_rules_popup"})),_(ht,null))};var Zt=document.getElementById("popup"),Qt=_(Et,null);Ce(Qt,Zt);})();
