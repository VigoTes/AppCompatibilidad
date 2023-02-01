/**
 * core-js 2.5.7
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2018 Denis Pushkarev
 */
!function(e,i,Jt){"use strict";!function(r){var e={};function __webpack_require__(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=r,__webpack_require__.c=e,__webpack_require__.d=function(t,n,r){__webpack_require__.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(t){var n=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};return __webpack_require__.d(n,"a",n),n},__webpack_require__.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=124)}([function(t,n,r){var v=r(2),g=r(26),y=r(11),d=r(12),_=r(18),b="prototype",S=function(t,n,r){var e,i,o,u,c=t&S.F,f=t&S.G,a=t&S.P,s=t&S.B,l=f?v:t&S.S?v[n]||(v[n]={}):(v[n]||{})[b],h=f?g:g[n]||(g[n]={}),p=h[b]||(h[b]={});for(e in f&&(r=n),r)o=((i=!c&&l&&l[e]!==Jt)?l:r)[e],u=s&&i?_(o,v):a&&"function"==typeof o?_(Function.call,o):o,l&&d(l,e,o,t&S.U),h[e]!=o&&y(h,e,u),a&&p[e]!=o&&(p[e]=o)};v.core=g,S.F=1,S.G=2,S.S=4,S.P=8,S.B=16,S.W=32,S.U=64,S.R=128,t.exports=S},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof i&&(i=r)},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(49)("wks"),i=r(33),o=r(2).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){t.exports=!r(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var i=r(1),o=r(90),u=r(21),c=Object.defineProperty;n.f=r(6)?Object.defineProperty:function defineProperty(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(23),i=Math.min;t.exports=function(t){return 0<t?i(e(t),9007199254740991):0}},function(t,n,r){var e=r(22);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(7),i=r(32);t.exports=r(6)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var o=r(2),u=r(11),c=r(14),f=r(33)("src"),e="toString",i=Function[e],a=(""+i).split(e);r(26).inspectSource=function(t){return i.call(t)},(t.exports=function(t,n,r,e){var i="function"==typeof r;i&&(c(r,"name")||u(r,"name",n)),t[n]!==r&&(i&&(c(r,f)||u(r,f,t[n]?""+t[n]:a.join(String(n)))),t===o?t[n]=r:e?t[n]?t[n]=r:u(t,n,r):(delete t[n],u(t,n,r)))})(Function.prototype,e,function toString(){return"function"==typeof this&&this[f]||i.call(this)})},function(t,n,r){var e=r(0),i=r(3),u=r(22),c=/"/g,o=function(t,n,r,e){var i=String(u(t)),o="<"+n;return""!==r&&(o+=" "+r+'="'+String(e).replace(c,"&quot;")+'"'),o+">"+i+"</"+n+">"};t.exports=function(n,t){var r={};r[n]=t(o),e(e.P+e.F*i(function(){var t=""[n]('"');return t!==t.toLowerCase()||3<t.split('"').length}),"String",r)}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(46),i=r(22);t.exports=function(t){return e(i(t))}},function(t,n,r){var e=r(47),i=r(32),o=r(15),u=r(21),c=r(14),f=r(90),a=Object.getOwnPropertyDescriptor;n.f=r(6)?a:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),f)try{return a(t,n)}catch(r){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(14),i=r(9),o=r(66)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var o=r(10);t.exports=function(e,i,t){if(o(e),i===Jt)return e;switch(t){case 1:return function(t){return e.call(i,t)};case 2:return function(t,n){return e.call(i,t,n)};case 3:return function(t,n,r){return e.call(i,t,n,r)}}return function(){return e.apply(i,arguments)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(3);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,r){var i=r(4);t.exports=function(t,n){if(!i(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!i(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!i(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(t==Jt)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?e:r)(t)}},function(t,n,r){var i=r(0),o=r(26),u=r(3);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],e={};e[t]=n(r),i(i.S+i.F*u(function(){r(1)}),"Object",e)}},function(t,n,r){var b=r(18),S=r(46),m=r(9),x=r(8),e=r(83);t.exports=function(l,t){var h=1==l,p=2==l,v=3==l,g=4==l,y=6==l,d=5==l||y,_=t||e;return function(t,n,r){for(var e,i,o=m(t),u=S(o),c=b(n,r,3),f=x(u.length),a=0,s=h?_(t,f):p?_(t,0):Jt;a<f;a++)if((d||a in u)&&(i=c(e=u[a],a,o),l))if(h)s[a]=i;else if(i)switch(l){case 3:return!0;case 5:return e;case 6:return a;case 2:s.push(e)}else if(g)return!1;return y?-1:v||g?g:s}}},function(t,n){var r=t.exports={version:"2.5.7"};"number"==typeof e&&(e=r)},function(t,n,r){if(r(6)){var y=r(30),d=r(2),_=r(3),b=r(0),S=r(60),e=r(89),h=r(18),m=r(39),i=r(32),x=r(11),o=r(41),u=r(23),w=r(8),E=r(117),c=r(35),f=r(21),a=r(14),O=r(48),M=r(4),p=r(9),v=r(80),P=r(36),F=r(17),I=r(37).f,g=r(82),s=r(33),l=r(5),A=r(25),k=r(50),N=r(57),j=r(85),R=r(44),T=r(54),L=r(38),D=r(84),C=r(106),U=r(7),W=r(16),G=U.f,V=W.f,B=d.RangeError,z=d.TypeError,q=d.Uint8Array,K="ArrayBuffer",J="Shared"+K,Y="BYTES_PER_ELEMENT",H="prototype",X=Array[H],Z=e.ArrayBuffer,$=e.DataView,Q=A(0),tt=A(2),nt=A(3),rt=A(4),et=A(5),it=A(6),ot=k(!0),ut=k(!1),ct=j.values,ft=j.keys,at=j.entries,st=X.lastIndexOf,lt=X.reduce,ht=X.reduceRight,pt=X.join,vt=X.sort,gt=X.slice,yt=X.toString,dt=X.toLocaleString,_t=l("iterator"),bt=l("toStringTag"),St=s("typed_constructor"),mt=s("def_constructor"),xt=S.CONSTR,wt=S.TYPED,Et=S.VIEW,Ot="Wrong length!",Mt=A(1,function(t,n){return kt(N(t,t[mt]),n)}),Pt=_(function(){return 1===new q(new Uint16Array([1]).buffer)[0]}),Ft=!!q&&!!q[H].set&&_(function(){new q(1).set({})}),It=function(t,n){var r=u(t);if(r<0||r%n)throw B("Wrong offset!");return r},At=function(t){if(M(t)&&wt in t)return t;throw z(t+" is not a typed array!")},kt=function(t,n){if(!(M(t)&&St in t))throw z("It is not a typed array constructor!");return new t(n)},Nt=function(t,n){return jt(N(t,t[mt]),n)},jt=function(t,n){for(var r=0,e=n.length,i=kt(t,e);r<e;)i[r]=n[r++];return i},Rt=function(t,n,r){G(t,n,{get:function(){return this._d[r]}})},Tt=function from(t){var n,r,e,i,o,u,c=p(t),f=arguments.length,a=1<f?arguments[1]:Jt,s=a!==Jt,l=g(c);if(l!=Jt&&!v(l)){for(u=l.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(s&&2<f&&(a=h(a,arguments[2],2)),n=0,r=w(c.length),i=kt(this,r);n<r;n++)i[n]=s?a(c[n],n):c[n];return i},Lt=function of(){for(var t=0,n=arguments.length,r=kt(this,n);t<n;)r[t]=arguments[t++];return r},Dt=!!q&&_(function(){dt.call(new q(1))}),Ct=function toLocaleString(){return dt.apply(Dt?gt.call(At(this)):At(this),arguments)},Ut={copyWithin:function copyWithin(t,n){return C.call(At(this),t,n,2<arguments.length?arguments[2]:Jt)},every:function every(t){return rt(At(this),t,1<arguments.length?arguments[1]:Jt)},fill:function fill(t){return D.apply(At(this),arguments)},filter:function filter(t){return Nt(this,tt(At(this),t,1<arguments.length?arguments[1]:Jt))},find:function find(t){return et(At(this),t,1<arguments.length?arguments[1]:Jt)},findIndex:function findIndex(t){return it(At(this),t,1<arguments.length?arguments[1]:Jt)},forEach:function forEach(t){Q(At(this),t,1<arguments.length?arguments[1]:Jt)},indexOf:function indexOf(t){return ut(At(this),t,1<arguments.length?arguments[1]:Jt)},includes:function includes(t){return ot(At(this),t,1<arguments.length?arguments[1]:Jt)},join:function join(t){return pt.apply(At(this),arguments)},lastIndexOf:function lastIndexOf(t){return st.apply(At(this),arguments)},map:function map(t){return Mt(At(this),t,1<arguments.length?arguments[1]:Jt)},reduce:function reduce(t){return lt.apply(At(this),arguments)},reduceRight:function reduceRight(t){return ht.apply(At(this),arguments)},reverse:function reverse(){for(var t,n=this,r=At(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return nt(At(this),t,1<arguments.length?arguments[1]:Jt)},sort:function sort(t){return vt.call(At(this),t)},subarray:function subarray(t,n){var r=At(this),e=r.length,i=c(t,e);return new(N(r,r[mt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,w((n===Jt?e:c(n,e))-i))}},Wt=function slice(t,n){return Nt(this,gt.call(At(this),t,n))},Gt=function set(t){At(this);var n=It(arguments[1],1),r=this.length,e=p(t),i=w(e.length),o=0;if(r<i+n)throw B(Ot);for(;o<i;)this[n+o]=e[o++]},Vt={entries:function entries(){return at.call(At(this))},keys:function keys(){return ft.call(At(this))},values:function values(){return ct.call(At(this))}},Bt=function(t,n){return M(t)&&t[wt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},zt=function getOwnPropertyDescriptor(t,n){return Bt(t,n=f(n,!0))?i(2,t[n]):V(t,n)},qt=function defineProperty(t,n,r){return!(Bt(t,n=f(n,!0))&&M(r)&&a(r,"value"))||a(r,"get")||a(r,"set")||r.configurable||a(r,"writable")&&!r.writable||a(r,"enumerable")&&!r.enumerable?G(t,n,r):(t[n]=r.value,t)};xt||(W.f=zt,U.f=qt),b(b.S+b.F*!xt,"Object",{getOwnPropertyDescriptor:zt,defineProperty:qt}),_(function(){yt.call({})})&&(yt=dt=function toString(){return pt.call(this)});var Kt=o({},Ut);o(Kt,Vt),x(Kt,_t,Vt.values),o(Kt,{slice:Wt,set:Gt,constructor:function(){},toString:yt,toLocaleString:Ct}),Rt(Kt,"buffer","b"),Rt(Kt,"byteOffset","o"),Rt(Kt,"byteLength","l"),Rt(Kt,"length","e"),G(Kt,bt,{get:function(){return this[wt]}}),t.exports=function(t,l,n,o){var h=t+((o=!!o)?"Clamped":"")+"Array",r="get"+t,u="set"+t,p=d[h],c=p||{},e=p&&F(p),i={},f=p&&p[H],v=function(t,i){G(t,i,{get:function(){return(t=this._d).v[r](i*l+t.o,Pt);var t},set:function(t){return n=i,r=t,e=this._d,o&&(r=(r=Math.round(r))<0?0:255<r?255:255&r),void e.v[u](n*l+e.o,r,Pt);var n,r,e},enumerable:!0})};!p||!S.ABV?(p=n(function(t,n,r,e){m(t,p,h,"_d");var i,o,u,c,f=0,a=0;if(M(n)){if(!(n instanceof Z||(c=O(n))==K||c==J))return wt in n?jt(p,n):Tt.call(p,n);i=n,a=It(r,l);var s=n.byteLength;if(e===Jt){if(s%l)throw B(Ot);if((o=s-a)<0)throw B(Ot)}else if(s<(o=w(e)*l)+a)throw B(Ot);u=o/l}else u=E(n),i=new Z(o=u*l);for(x(t,"_d",{b:i,o:a,l:o,e:u,v:new $(i)});f<u;)v(t,f++)}),f=p[H]=P(Kt),x(f,"constructor",p)):_(function(){p(1)})&&_(function(){new p(-1)})&&T(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=n(function(t,n,r,e){var i;return m(t,p,h),M(n)?n instanceof Z||(i=O(n))==K||i==J?e!==Jt?new c(n,It(r,l),e):r!==Jt?new c(n,It(r,l)):new c(n):wt in n?jt(p,n):Tt.call(p,n):new c(E(n))}),Q(e!==Function.prototype?I(c).concat(I(e)):I(c),function(t){t in p||x(p,t,c[t])}),p[H]=f,y||(f.constructor=p));var a=f[_t],s=!!a&&("values"==a.name||a.name==Jt),g=Vt.values;x(p,St,!0),x(f,wt,h),x(f,Et,!0),x(f,mt,p),(o?new p(1)[bt]==h:bt in f)||G(f,bt,{get:function(){return h}}),b(b.G+b.W+b.F*((i[h]=p)!=c),i),b(b.S,h,{BYTES_PER_ELEMENT:l}),b(b.S+b.F*_(function(){c.of.call(p,1)}),h,{from:Tt,of:Lt}),Y in f||x(f,Y,l),b(b.P,h,Ut),L(h),b(b.P+b.F*Ft,h,{set:Gt}),b(b.P+b.F*!s,h,Vt),y||f.toString==yt||(f.toString=yt),b(b.P+b.F*_(function(){new p(1).slice()}),h,{slice:Wt}),b(b.P+b.F*(_(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!_(function(){f.toLocaleString.call([1,2])})),h,{toLocaleString:Ct}),R[h]=s?a:g,y||s||x(f,_t,g)}}else t.exports=function(){}},function(t,n,r){var o=r(111),e=r(0),i=r(49)("metadata"),u=i.store||(i.store=new(r(114))),c=function(t,n,r){var e=u.get(t);if(!e){if(!r)return Jt;u.set(t,e=new o)}var i=e.get(n);if(!i){if(!r)return Jt;e.set(n,i=new o)}return i};t.exports={store:u,map:c,has:function(t,n,r){var e=c(n,r,!1);return e!==Jt&&e.has(t)},get:function(t,n,r){var e=c(n,r,!1);return e===Jt?Jt:e.get(t)},set:function(t,n,r,e){c(r,e,!0).set(t,n)},keys:function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},key:function(t){return t===Jt||"symbol"==typeof t?t:String(t)},exp:function(t){e(e.S,"Reflect",t)}}},function(t,n,r){var e=r(33)("meta"),i=r(4),o=r(14),u=r(7).f,c=0,f=Object.isExtensible||function(){return!0},a=!r(3)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!o(t,e)&&s(t),t}}},function(t,n){t.exports=!1},function(t,n,r){var e=r(5)("unscopables"),i=Array.prototype;i[e]==Jt&&r(11)(i,e,{}),t.exports=function(t){i[e][t]=!0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(t===Jt?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(92),i=r(67);t.exports=Object.keys||function keys(t){return e(t,i)}},function(t,n,r){var e=r(23),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var i=e(1),o=e(93),u=e(67),c=e(66)("IE_PROTO"),f=function(){},a="prototype",s=function(){var t,n=e(64)("iframe"),r=u.length;for(n.style.display="none",e(68).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s[a][u[r]];return s()};t.exports=Object.create||function create(t,n){var r;return null!==t?(f[a]=i(t),r=new f,f[a]=null,r[c]=t):r=s(),n===Jt?r:o(r,n)}},function(t,n,r){var e=r(92),i=r(67).concat("length","prototype");n.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},function(t,n,r){var e=r(2),i=r(7),o=r(6),u=r(5)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||e!==Jt&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var h=r(18),p=r(104),v=r(80),g=r(1),y=r(8),d=r(82),_={},b={};(n=t.exports=function(t,n,r,e,i){var o,u,c,f,a=i?function(){return t}:d(t),s=h(r,e,n?2:1),l=0;if("function"!=typeof a)throw TypeError(t+" is not iterable!");if(v(a)){for(o=y(t.length);l<o;l++)if((f=n?s(g(u=t[l])[0],u[1]):s(t[l]))===_||f===b)return f}else for(c=a.call(t);!(u=c.next()).done;)if((f=p(c,s,u.value,n))===_||f===b)return f}).BREAK=_,n.RETURN=b},function(t,n,r){var i=r(12);t.exports=function(t,n,r){for(var e in n)i(t,e,n[e],r);return t}},function(t,n,r){var e=r(7).f,i=r(14),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var u=r(0),e=r(22),c=r(3),f=r(71),i="["+f+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),s=function(t,n,r){var e={},i=c(function(){return!!f[t]()||"​"!="​"[t]()}),o=e[t]=i?n(l):f[t];r&&(e[r]=o),u(u.P+u.F*i,"String",e)},l=s.trim=function(t,n){return t=String(e(t)),1&n&&(t=t.replace(o,"")),2&n&&(t=t.replace(a,"")),t};t.exports=s},function(t,n){t.exports={}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,r){var e=r(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var i=r(19),o=r(5)("toStringTag"),u="Arguments"==i(function(){return arguments}());t.exports=function(t){var n,r,e;return t===Jt?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=Object(t),o))?r:u?i(n):"Object"==(e=i(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e=r(26),i=r(2),o="__core-js_shared__",u=i[o]||(i[o]={});(t.exports=function(t,n){return u[t]||(u[t]=n!==Jt?n:{})})("versions",[]).push({version:e.version,mode:r(30)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var f=r(15),a=r(8),s=r(35);t.exports=function(c){return function(t,n,r){var e,i=f(t),o=a(i.length),u=s(r,o);if(c&&n!=n){for(;u<o;)if((e=i[u++])!=e)return!0}else for(;u<o;u++)if((c||u in i)&&i[u]===n)return c||u||0;return!c&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(19);t.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},function(t,n,r){var e=r(4),i=r(19),o=r(5)("match");t.exports=function(t){var n;return e(t)&&((n=t[o])!==Jt?!!n:"RegExp"==i(t))}},function(t,n,r){var o=r(5)("iterator"),u=!1;try{var e=[7][o]();e["return"]=function(){u=!0},Array.from(e,function(){throw 2})}catch(c){}t.exports=function(t,n){if(!n&&!u)return!1;var r=!1;try{var e=[7],i=e[o]();i.next=function(){return{done:r=!0}},e[o]=function(){return i},t(e)}catch(c){}return r}},function(t,n,r){var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){var c=r(11),f=r(12),a=r(3),s=r(22),l=r(5);t.exports=function(n,t,r){var e=l(n),i=r(s,e,""[n]),o=i[0],u=i[1];a(function(){var t={};return t[e]=function(){return 7},7!=""[n](t)})&&(f(String.prototype,n,o),c(RegExp.prototype,e,2==t?function(t,n){return u.call(t,this,n)}:function(t){return u.call(t,this)}))}},function(t,n,r){var i=r(1),o=r(10),u=r(5)("species");t.exports=function(t,n){var r,e=i(t).constructor;return e===Jt||(r=i(e)[u])==Jt?n:o(r)}},function(t,n,r){var e=r(2).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){var d=r(2),_=r(0),b=r(12),S=r(41),m=r(29),x=r(40),w=r(39),E=r(4),O=r(3),M=r(54),P=r(42),F=r(70);t.exports=function(e,t,n,r,i,o){var u=d[e],c=u,f=i?"set":"add",a=c&&c.prototype,s={},l=function(t){var r=a[t];b(a,t,"delete"==t?function(t){return!(o&&!E(t))&&r.call(this,0===t?0:t)}:"has"==t?function has(t){return!(o&&!E(t))&&r.call(this,0===t?0:t)}:"get"==t?function get(t){return o&&!E(t)?Jt:r.call(this,0===t?0:t)}:"add"==t?function add(t){return r.call(this,0===t?0:t),this}:function set(t,n){return r.call(this,0===t?0:t,n),this})};if("function"==typeof c&&(o||a.forEach&&!O(function(){(new c).entries().next()}))){var h=new c,p=h[f](o?{}:-0,1)!=h,v=O(function(){h.has(1)}),g=M(function(t){new c(t)}),y=!o&&O(function(){for(var t=new c,n=5;n--;)t[f](n,n);return!t.has(-0)});g||(((c=t(function(t,n){w(t,c,e);var r=F(new u,t,c);return n!=Jt&&x(n,i,r[f],r),r})).prototype=a).constructor=c),(v||y)&&(l("delete"),l("has"),i&&l("get")),(y||p)&&l(f),o&&a.clear&&delete a.clear}else c=r.getConstructor(t,e,i,f),S(c.prototype,n),m.NEED=!0;return P(c,e),_(_.G+_.W+_.F*((s[e]=c)!=u),s),o||r.setStrong(c,e,i),c}},function(t,n,r){for(var e,i=r(2),o=r(11),u=r(33),c=u("typed_array"),f=u("view"),a=!(!i.ArrayBuffer||!i.DataView),s=a,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,f,!0)):s=!1;t.exports={ABV:a,CONSTR:s,TYPED:c,VIEW:f}},function(t,n,r){t.exports=r(30)||!r(3)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(2)[t]})},function(t,n,r){var e=r(0);t.exports=function(t){e(e.S,t,{of:function of(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,r){var e=r(0),u=r(10),c=r(18),f=r(40);t.exports=function(t){e(e.S,t,{from:function from(t){var n,r,e,i,o=arguments[1];return u(this),(n=o!==Jt)&&u(o),t==Jt?new this:(r=[],n?(e=0,i=c(o,arguments[2],2),f(t,!1,function(t){r.push(i(t,e++))})):f(t,!1,r.push,r),new this(r))}})}},function(t,n,r){var e=r(4),i=r(2).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){var e=r(2),i=r(26),o=r(30),u=r(91),c=r(7).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(49)("keys"),i=r(33);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(2).document;t.exports=e&&e.documentElement},function(t,n,i){var r=i(4),e=i(1),o=function(t,n){if(e(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,e){try{(e=i(18)(Function.call,i(16).f(Object.prototype,"__proto__").set,2))(t,[]),r=!(t instanceof Array)}catch(n){r=!0}return function setPrototypeOf(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):Jt),check:o}},function(t,n,r){var o=r(4),u=r(69).set;t.exports=function(t,n,r){var e,i=n.constructor;return i!==r&&"function"==typeof i&&(e=i.prototype)!==r.prototype&&o(e)&&u&&u(t,e),t}},function(t,n){t.exports="\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){var i=r(23),o=r(22);t.exports=function repeat(t){var n=String(o(this)),r="",e=i(t);if(e<0||e==Infinity)throw RangeError("Count can't be negative");for(;0<e;(e>>>=1)&&(n+=n))1&e&&(r+=n);return r}},function(t,n){t.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var r=Math.expm1;t.exports=!r||22025.465794806718<r(10)||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function expm1(t){return 0==(t=+t)?t:-1e-6<t&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n,r){var f=r(23),a=r(22);t.exports=function(c){return function(t,n){var r,e,i=String(a(t)),o=f(n),u=i.length;return o<0||u<=o?c?"":Jt:(r=i.charCodeAt(o))<55296||56319<r||o+1===u||(e=i.charCodeAt(o+1))<56320||57343<e?c?i.charAt(o):r:c?i.slice(o,o+2):e-56320+(r-55296<<10)+65536}}},function(t,n,r){var e=r(53),i=r(22);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){var i=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[i]=!1,!"/./"[t](n)}catch(e){}}return!0}},function(t,n,r){var b=r(30),S=r(0),m=r(12),x=r(11),w=r(44),E=r(79),O=r(42),M=r(17),P=r(5)("iterator"),F=!([].keys&&"next"in[].keys()),I="values",A=function(){return this};t.exports=function(t,n,r,e,i,o,u){E(r,n,e);var c,f,a,s=function(t){if(!F&&t in v)return v[t];switch(t){case"keys":return function keys(){return new r(this,t)};case I:return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},l=n+" Iterator",h=i==I,p=!1,v=t.prototype,g=v[P]||v["@@iterator"]||i&&v[i],y=g||s(i),d=i?h?s("entries"):y:Jt,_="Array"==n&&v.entries||g;if(_&&(a=M(_.call(new t)))!==Object.prototype&&a.next&&(O(a,l,!0),b||"function"==typeof a[P]||x(a,P,A)),h&&g&&g.name!==I&&(p=!0,y=function values(){return g.call(this)}),b&&!u||!F&&!p&&v[P]||x(v,P,y),w[n]=y,w[l]=A,i)if(c={values:h?y:s(I),keys:o?y:s("keys"),entries:d},u)for(f in c)f in v||m(v,f,c[f]);else S(S.P+S.F*(F||p),n,c);return c}},function(t,n,r){var e=r(36),i=r(32),o=r(42),u={};r(11)(u,r(5)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){var e=r(44),i=r(5)("iterator"),o=Array.prototype;t.exports=function(t){return t!==Jt&&(e.Array===t||o[i]===t)}},function(t,n,r){var e=r(7),i=r(32);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,r){var e=r(48),i=r(5)("iterator"),o=r(44);t.exports=r(26).getIteratorMethod=function(t){if(t!=Jt)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(208);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var c=r(9),f=r(35),a=r(8);t.exports=function fill(t){for(var n=c(this),r=a(n.length),e=arguments.length,i=f(1<e?arguments[1]:Jt,r),o=2<e?arguments[2]:Jt,u=o===Jt?r:f(o,r);i<u;)n[i++]=t;return n}},function(t,n,r){var e=r(31),i=r(107),o=r(44),u=r(15);t.exports=r(78)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||t.length<=r?(this._t=Jt,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n,r){var e,i,o,u=r(18),c=r(97),f=r(68),a=r(64),s=r(2),l=s.process,h=s.setImmediate,p=s.clearImmediate,v=s.MessageChannel,g=s.Dispatch,y=0,d={},_="onreadystatechange",b=function(){var t=+this;if(d.hasOwnProperty(t)){var n=d[t];delete d[t],n()}},S=function(t){b.call(t.data)};h&&p||(h=function setImmediate(t){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);return d[++y]=function(){c("function"==typeof t?t:Function(t),n)},e(y),y},p=function clearImmediate(t){delete d[t]},"process"==r(19)(l)?e=function(t){l.nextTick(u(b,t,1))}:g&&g.now?e=function(t){g.now(u(b,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=S,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",S,!1)):e=_ in a("script")?function(t){f.appendChild(a("script"))[_]=function(){f.removeChild(this),b.call(t)}}:function(t){setTimeout(u(b,t,1),0)}),t.exports={set:h,clear:p}},function(t,n,r){var c=r(2),f=r(86).set,a=c.MutationObserver||c.WebKitMutationObserver,s=c.process,l=c.Promise,h="process"==r(19)(s);t.exports=function(){var e,i,o,t=function(){var t,n;for(h&&(t=s.domain)&&t.exit();e;){n=e.fn,e=e.next;try{n()}catch(r){throw e?o():i=Jt,r}}i=Jt,t&&t.enter()};if(h)o=function(){s.nextTick(t)};else if(!a||c.navigator&&c.navigator.standalone)if(l&&l.resolve){var n=l.resolve(Jt);o=function(){n.then(t)}}else o=function(){f.call(c,t)};else{var r=!0,u=document.createTextNode("");new a(t).observe(u,{characterData:!0}),o=function(){u.data=r=!r}}return function(t){var n={fn:t,next:Jt};i&&(i.next=n),e||(e=n,o()),i=n}}},function(t,n,r){var i=r(10);function PromiseCapability(t){var r,e;this.promise=new t(function(t,n){if(r!==Jt||e!==Jt)throw TypeError("Bad Promise constructor");r=t,e=n}),this.resolve=i(r),this.reject=i(e)}t.exports.f=function(t){return new PromiseCapability(t)}},function(t,n,r){var e=r(2),i=r(6),o=r(30),u=r(60),c=r(11),f=r(41),a=r(3),s=r(39),l=r(23),h=r(8),p=r(117),v=r(37).f,g=r(7).f,y=r(84),d=r(42),_="ArrayBuffer",b="DataView",S="prototype",m="Wrong index!",x=e[_],w=e[b],E=e.Math,O=e.RangeError,M=e.Infinity,P=x,F=E.abs,I=E.pow,A=E.floor,k=E.log,N=E.LN2,j="byteLength",R="byteOffset",T=i?"_b":"buffer",L=i?"_l":j,D=i?"_o":R;function packIEEE754(t,n,r){var e,i,o,u=new Array(r),c=8*r-n-1,f=(1<<c)-1,a=f>>1,s=23===n?I(2,-24)-I(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=F(t))!=t||t===M?(i=t!=t?1:0,e=f):(e=A(k(t)/N),t*(o=I(2,-e))<1&&(e--,o*=2),2<=(t+=1<=e+a?s/o:s*I(2,1-a))*o&&(e++,o/=2),f<=e+a?(i=0,e=f):1<=e+a?(i=(t*o-1)*I(2,n),e+=a):(i=t*I(2,a-1)*I(2,n),e=0));8<=n;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;0<c;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function unpackIEEE754(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,f=r-1,a=t[f--],s=127&a;for(a>>=7;0<c;s=256*s+t[f],f--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;0<c;e=256*e+t[f],f--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:a?-M:M;e+=I(2,n),s-=u}return(a?-1:1)*e*I(2,s-n)}function unpackI32(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function packI8(t){return[255&t]}function packI16(t){return[255&t,t>>8&255]}function packI32(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function packF64(t){return packIEEE754(t,52,8)}function packF32(t){return packIEEE754(t,23,4)}function addGetter(t,n,r){g(t[S],n,{get:function(){return this[r]}})}function get(t,n,r,e){var i=p(+r);if(t[L]<i+n)throw O(m);var o=i+t[D],u=t[T]._b.slice(o,o+n);return e?u:u.reverse()}function set(t,n,r,e,i,o){var u=p(+r);if(t[L]<u+n)throw O(m);for(var c=t[T]._b,f=u+t[D],a=e(+i),s=0;s<n;s++)c[f+s]=a[o?s:n-s-1]}if(u.ABV){if(!a(function(){x(1)})||!a(function(){new x(-1)})||a(function(){return new x,new x(1.5),new x(NaN),x.name!=_})){for(var C,U=(x=function ArrayBuffer(t){return s(this,x),new P(p(t))})[S]=P[S],W=v(P),G=0;G<W.length;)(C=W[G++])in x||c(x,C,P[C]);o||(U.constructor=x)}var V=new w(new x(2)),B=w[S].setInt8;V.setInt8(0,2147483648),V.setInt8(1,2147483649),!V.getInt8(0)&&V.getInt8(1)||f(w[S],{setInt8:function setInt8(t,n){B.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){B.call(this,t,n<<24>>24)}},!0)}else x=function ArrayBuffer(t){s(this,x,_);var n=p(t);this._b=y.call(new Array(n),0),this[L]=n},w=function DataView(t,n,r){s(this,w,b),s(t,x,b);var e=t[L],i=l(n);if(i<0||e<i)throw O("Wrong offset!");if(e<i+(r=r===Jt?e-i:h(r)))throw O("Wrong length!");this[T]=t,this[D]=i,this[L]=r},i&&(addGetter(x,j,"_l"),addGetter(w,"buffer","_b"),addGetter(w,j,"_l"),addGetter(w,R,"_o")),f(w[S],{getInt8:function getInt8(t){return get(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return get(this,1,t)[0]},getInt16:function getInt16(t){var n=get(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=get(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return unpackI32(get(this,4,t,arguments[1]))},getUint32:function getUint32(t){return unpackI32(get(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return unpackIEEE754(get(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return unpackIEEE754(get(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){set(this,1,t,packI8,n)},setUint8:function setUint8(t,n){set(this,1,t,packI8,n)},setInt16:function setInt16(t,n){set(this,2,t,packI16,n,arguments[2])},setUint16:function setUint16(t,n){set(this,2,t,packI16,n,arguments[2])},setInt32:function setInt32(t,n){set(this,4,t,packI32,n,arguments[2])},setUint32:function setUint32(t,n){set(this,4,t,packI32,n,arguments[2])},setFloat32:function setFloat32(t,n){set(this,4,t,packF32,n,arguments[2])},setFloat64:function setFloat64(t,n){set(this,8,t,packF64,n,arguments[2])}});d(x,_),d(w,b),c(w[S],u.VIEW,!0),n[_]=x,n[b]=w},function(t,n,r){t.exports=!r(6)&&!r(3)(function(){return 7!=Object.defineProperty(r(64)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){n.f=r(5)},function(t,n,r){var u=r(14),c=r(15),f=r(50)(!1),a=r(66)("IE_PROTO");t.exports=function(t,n){var r,e=c(t),i=0,o=[];for(r in e)r!=a&&u(e,r)&&o.push(r);for(;i<n.length;)u(e,r=n[i++])&&(~f(o,r)||o.push(r));return o}},function(t,n,r){var u=r(7),c=r(1),f=r(34);t.exports=r(6)?Object.defineProperties:function defineProperties(t,n){c(t);for(var r,e=f(n),i=e.length,o=0;o<i;)u.f(t,r=e[o++],n[r]);return t}},function(t,n,r){var e=r(15),i=r(37).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(n){return u.slice()}}(t):i(e(t))}},function(t,n,r){var h=r(34),p=r(51),v=r(47),g=r(9),y=r(46),i=Object.assign;t.exports=!i||r(3)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=i({},t)[r]||Object.keys(i({},n)).join("")!=e})?function assign(t,n){for(var r=g(t),e=arguments.length,i=1,o=p.f,u=v.f;i<e;)for(var c,f=y(arguments[i++]),a=o?h(f).concat(o(f)):h(f),s=a.length,l=0;l<s;)u.call(f,c=a[l++])&&(r[c]=f[c]);return r}:i},function(t,n,r){var o=r(10),u=r(4),c=r(97),f=[].slice,a={};t.exports=Function.bind||function bind(n){var r=o(this),e=f.call(arguments,1),i=function(){var t=e.concat(
  f.call(arguments));return this instanceof i?function(t,n,r){if(!(n in a)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";a[n]=Function("F,a","return new F("+e.join(",")+")")}return a[n](t,r)}(r,t.length,t):c(r,t,n)};return u(r.prototype)&&(i.prototype=r.prototype),i}},function(t,n){t.exports=function(t,n,r){var e=r===Jt;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){var e=r(19);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(4),i=Math.floor;t.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n,r){var e=r(2).parseFloat,i=r(43).trim;t.exports=1/e(r(71)+"-0")!=-Infinity?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(2).parseInt,i=r(43).trim,o=r(71),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n){t.exports=Math.log1p||function log1p(t){return-1e-8<(t=+t)&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){var o=r(73),e=Math.pow,u=e(2,-52),c=e(2,-23),f=e(2,127)*(2-c),a=e(2,-126);t.exports=Math.fround||function fround(t){var n,r,e=Math.abs(t),i=o(t);return e<a?i*(e/a/c+1/u-1/u)*a*c:f<(r=(n=(1+c/u)*e)-(n-e))||r!=r?i*Infinity:i*r}},function(t,n,r){var u=r(1);t.exports=function(t,n,r,e){try{return e?n(u(r)[0],r[1]):n(r)}catch(o){var i=t["return"];throw i!==Jt&&u(i.call(t)),o}}},function(t,n,r){var s=r(10),l=r(9),h=r(46),p=r(8);t.exports=function(t,n,r,e,i){s(n);var o=l(t),u=h(o),c=p(o.length),f=i?c-1:0,a=i?-1:1;if(r<2)for(;;){if(f in u){e=u[f],f+=a;break}if(f+=a,i?f<0:c<=f)throw TypeError("Reduce of empty array with no initial value")}for(;i?0<=f:f<c;f+=a)f in u&&(e=n(e,u[f],f,o));return e}},function(t,n,r){var a=r(9),s=r(35),l=r(8);t.exports=[].copyWithin||function copyWithin(t,n){var r=a(this),e=l(r.length),i=s(t,e),o=s(n,e),u=2<arguments.length?arguments[2]:Jt,c=Math.min((u===Jt?e:s(u,e))-o,e-i),f=1;for(o<i&&i<o+c&&(f=-1,o+=c-1,i+=c-1);0<c--;)o in r?r[i]=r[o]:delete r[i],i+=f,o+=f;return r}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){r(6)&&"g"!=/./g.flags&&r(7).f(RegExp.prototype,"flags",{configurable:!0,get:r(55)})},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(n){return{e:!0,v:n}}}},function(t,n,r){var e=r(1),i=r(4),o=r(88);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(112),i=r(45);t.exports=r(59)("Map",function(t){return function Map(){return t(this,0<arguments.length?arguments[0]:Jt)}},{get:function get(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function set(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){var u=r(7).f,c=r(36),f=r(41),a=r(18),s=r(39),l=r(40),e=r(78),i=r(107),o=r(38),h=r(6),p=r(29).fastKey,v=r(45),g=h?"_s":"size",y=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,o,r,e){var i=t(function(t,n){s(t,i,o,"_i"),t._t=o,t._i=c(null),t._f=Jt,t._l=Jt,t[g]=0,n!=Jt&&l(n,r,t[e],t)});return f(i.prototype,{clear:function clear(){for(var t=v(this,o),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=Jt),delete n[r.i];t._f=t._l=Jt,t[g]=0},"delete":function(t){var n=v(this,o),r=y(n,t);if(r){var e=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=e),e&&(e.p=i),n._f==r&&(n._f=e),n._l==r&&(n._l=i),n[g]--}return!!r},forEach:function forEach(t){v(this,o);for(var n,r=a(t,1<arguments.length?arguments[1]:Jt,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function has(t){return!!y(v(this,o),t)}}),h&&u(i.prototype,"size",{get:function(){return v(this,o)[g]}}),i},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:Jt,r:!1},t._f||(t._f=o),e&&(e.n=o),t[g]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,r,n){e(t,r,function(t,n){this._t=v(t,r),this._k=n,this._l=Jt},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?i(0,"keys"==n?r.k:"values"==n?r.v:[r.k,r.v]):(t._t=Jt,i(1))},n?"entries":"values",!n,!0),o(r)}}},function(t,n,r){var e=r(112),i=r(45);t.exports=r(59)("Set",function(t){return function Set(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){var o,e=r(25)(0),u=r(12),i=r(29),c=r(95),f=r(115),a=r(4),s=r(3),l=r(45),h="WeakMap",p=i.getWeak,v=Object.isExtensible,g=f.ufstore,y={},d=function(t){return function WeakMap(){return t(this,0<arguments.length?arguments[0]:Jt)}},_={get:function get(t){if(a(t)){var n=p(t);return!0===n?g(l(this,h)).get(t):n?n[this._i]:Jt}},set:function set(t,n){return f.def(l(this,h),t,n)}},b=t.exports=r(59)(h,d,_,f,!0,!0);s(function(){return 7!=(new b).set((Object.freeze||Object)(y),7).get(y)})&&(c((o=f.getConstructor(d,h)).prototype,_),i.NEED=!0,e(["delete","has","get","set"],function(e){var t=b.prototype,i=t[e];u(t,e,function(t,n){if(a(t)&&!v(t)){this._f||(this._f=new o);var r=this._f[e](t,n);return"set"==e?this:r}return i.call(this,t,n)})}))},function(t,n,r){var u=r(41),c=r(29).getWeak,i=r(1),f=r(4),a=r(39),s=r(40),e=r(25),l=r(14),h=r(45),o=e(5),p=e(6),v=0,g=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},d=function(t,n){return o(t.a,function(t){return t[0]===n})};y.prototype={get:function(t){var n=d(this,t);if(n)return n[1]},has:function(t){return!!d(this,t)},set:function(t,n){var r=d(this,t);r?r[1]=n:this.a.push([t,n])},"delete":function(n){var t=p(this.a,function(t){return t[0]===n});return~t&&this.a.splice(t,1),!!~t}},t.exports={getConstructor:function(t,r,e,i){var o=t(function(t,n){a(t,o,r,"_i"),t._t=r,t._i=v++,n!=(t._l=Jt)&&s(n,e,t[i],t)});return u(o.prototype,{"delete":function(t){if(!f(t))return!1;var n=c(t);return!0===n?g(h(this,r))["delete"](t):n&&l(n,this._i)&&delete n[this._i]},has:function has(t){if(!f(t))return!1;var n=c(t);return!0===n?g(h(this,r)).has(t):n&&l(n,this._i)}}),o},def:function(t,n,r){var e=c(i(n),!0);return!0===e?g(t).set(n,r):e[t._i]=r,t},ufstore:g}},function(t,n,r){var e=r(37),i=r(51),o=r(1),u=r(2).Reflect;t.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(23),i=r(8);t.exports=function(t){if(t===Jt)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){var p=r(52),v=r(4),g=r(8),y=r(18),d=r(5)("isConcatSpreadable");t.exports=function flattenIntoArray(t,n,r,e,i,o,u,c){for(var f,a,s=i,l=0,h=!!u&&y(u,c,3);l<e;){if(l in r){if(f=h?h(r[l],l,n):r[l],a=!1,v(f)&&(a=(a=f[d])!==Jt?!!a:p(f)),a&&0<o)s=flattenIntoArray(t,n,f,g(f.length),s,o-1)-1;else{if(9007199254740991<=s)throw TypeError();t[s]=f}s++}l++}return s}},function(t,n,r){var s=r(8),l=r(72),h=r(22);t.exports=function(t,n,r,e){var i=String(h(t)),o=i.length,u=r===Jt?" ":String(r),c=s(n);if(c<=o||""==u)return i;var f=c-o,a=l.call(u,Math.ceil(f/u.length));return f<a.length&&(a=a.slice(0,f)),e?a+i:i+a}},function(t,n,r){var f=r(34),a=r(15),s=r(47).f;t.exports=function(c){return function(t){for(var n,r=a(t),e=f(r),i=e.length,o=0,u=[];o<i;)s.call(r,n=e[o++])&&u.push(c?[n,r[n]]:r[n]);return u}}},function(t,n,r){var e=r(48),i=r(122);t.exports=function(t){return function toJSON(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,n,r){var e=r(40);t.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},function(t,n){t.exports=Math.scale||function scale(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===Infinity||t===-Infinity?t:(t-n)*(i-e)/(r-n)+e}},function(t,n,r){r(125),r(127),r(128),r(129),r(130),r(131),r(132),r(133),r(134),r(135),r(136),r(137),r(138),r(139),r(140),r(141),r(143),r(144),r(145),r(146),r(147),r(148),r(149),r(150),r(151),r(152),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(167),r(168),r(169),r(170),r(171),r(172),r(173),r(174),r(175),r(176),r(177),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(200),r(201),r(202),r(203),r(204),r(205),r(206),r(207),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(85),r(221),r(222),r(223),r(108),r(224),r(225),r(226),r(227),r(228),r(111),r(113),r(114),r(229),r(230),r(231),r(232),r(233),r(234),r(235),r(236),r(237),r(238),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(248),r(249),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),t.exports=r(320)},function(t,n,r){var e=r(2),u=r(14),i=r(6),o=r(0),c=r(12),f=r(29).KEY,a=r(3),s=r(49),l=r(42),h=r(33),p=r(5),v=r(91),g=r(65),y=r(126),d=r(52),_=r(1),b=r(4),S=r(15),m=r(21),x=r(32),w=r(36),E=r(94),O=r(16),M=r(7),P=r(34),F=O.f,I=M.f,A=E.f,k=e.Symbol,N=e.JSON,j=N&&N.stringify,R="prototype",T=p("_hidden"),L=p("toPrimitive"),D={}.propertyIsEnumerable,C=s("symbol-registry"),U=s("symbols"),W=s("op-symbols"),G=Object[R],V="function"==typeof k,B=e.QObject,z=!B||!B[R]||!B[R].findChild,q=i&&a(function(){return 7!=w(I({},"a",{get:function(){return I(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=F(G,n);e&&delete G[n],I(t,n,r),e&&t!==G&&I(G,n,e)}:I,K=function(t){var n=U[t]=w(k[R]);return n._k=t,n},J=V&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},Y=function defineProperty(t,n,r){return t===G&&Y(W,n,r),_(t),n=m(n,!0),_(r),u(U,n)?(r.enumerable?(u(t,T)&&t[T][n]&&(t[T][n]=!1),r=w(r,{enumerable:x(0,!1)})):(u(t,T)||I(t,T,x(1,{})),t[T][n]=!0),q(t,n,r)):I(t,n,r)},H=function defineProperties(t,n){_(t);for(var r,e=y(n=S(n)),i=0,o=e.length;i<o;)Y(t,r=e[i++],n[r]);return t},X=function propertyIsEnumerable(t){var n=D.call(this,t=m(t,!0));return!(this===G&&u(U,t)&&!u(W,t))&&(!(n||!u(this,t)||!u(U,t)||u(this,T)&&this[T][t])||n)},Z=function getOwnPropertyDescriptor(t,n){if(t=S(t),n=m(n,!0),t!==G||!u(U,n)||u(W,n)){var r=F(t,n);return!r||!u(U,n)||u(t,T)&&t[T][n]||(r.enumerable=!0),r}},$=function getOwnPropertyNames(t){for(var n,r=A(S(t)),e=[],i=0;i<r.length;)u(U,n=r[i++])||n==T||n==f||e.push(n);return e},Q=function getOwnPropertySymbols(t){for(var n,r=t===G,e=A(r?W:S(t)),i=[],o=0;o<e.length;)!u(U,n=e[o++])||r&&!u(G,n)||i.push(U[n]);return i};V||(c((k=function Symbol(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var n=h(0<arguments.length?arguments[0]:Jt),r=function(t){this===G&&r.call(W,t),u(this,T)&&u(this[T],n)&&(this[T][n]=!1),q(this,n,x(1,t))};return i&&z&&q(G,n,{configurable:!0,set:r}),K(n)})[R],"toString",function toString(){return this._k}),O.f=Z,M.f=Y,r(37).f=E.f=$,r(47).f=X,r(51).f=Q,i&&!r(30)&&c(G,"propertyIsEnumerable",X,!0),v.f=function(t){return K(p(t))}),o(o.G+o.W+o.F*!V,{Symbol:k});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;nt<tt.length;)p(tt[nt++]);for(var rt=P(p.store),et=0;et<rt.length;)g(rt[et++]);o(o.S+o.F*!V,"Symbol",{"for":function(t){return u(C,t+="")?C[t]:C[t]=k(t)},keyFor:function keyFor(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var n in C)if(C[n]===t)return n},useSetter:function(){z=!0},useSimple:function(){z=!1}}),o(o.S+o.F*!V,"Object",{create:function create(t,n){return n===Jt?w(t):H(w(t),n)},defineProperty:Y,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:Q}),N&&o(o.S+o.F*(!V||a(function(){var t=k();return"[null]"!=j([t])||"{}"!=j({a:t})||"{}"!=j(Object(t))})),"JSON",{stringify:function stringify(t){for(var n,r,e=[t],i=1;i<arguments.length;)e.push(arguments[i++]);if(r=n=e[1],(b(n)||t!==Jt)&&!J(t))return d(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!J(n))return n}),e[1]=n,j.apply(N,e)}}),k[R][L]||r(11)(k[R],L,k[R].valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){var c=r(34),f=r(51),a=r(47);t.exports=function(t){var n=c(t),r=f.f;if(r)for(var e,i=r(t),o=a.f,u=0;u<i.length;)o.call(t,e=i[u++])&&n.push(e);return n}},function(t,n,r){var e=r(0);e(e.S+e.F*!r(6),"Object",{defineProperty:r(7).f})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(6),"Object",{defineProperties:r(93)})},function(t,n,r){var e=r(15),i=r(16).f;r(24)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(36)})},function(t,n,r){var e=r(9),i=r(17);r(24)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},function(t,n,r){var e=r(9),i=r(34);r(24)("keys",function(){return function keys(t){return i(e(t))}})},function(t,n,r){r(24)("getOwnPropertyNames",function(){return r(94).f})},function(t,n,r){var e=r(4),i=r(29).onFreeze;r(24)("freeze",function(n){return function freeze(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4),i=r(29).onFreeze;r(24)("seal",function(n){return function seal(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4),i=r(29).onFreeze;r(24)("preventExtensions",function(n){return function preventExtensions(t){return n&&e(t)?n(i(t)):t}})},function(t,n,r){var e=r(4);r(24)("isFrozen",function(n){return function isFrozen(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(4);r(24)("isSealed",function(n){return function isSealed(t){return!e(t)||!!n&&n(t)}})},function(t,n,r){var e=r(4);r(24)("isExtensible",function(n){return function isExtensible(t){return!!e(t)&&(!n||n(t))}})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(95)})},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(142)})},function(t,n){t.exports=Object.is||function is(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(69).set})},function(t,n,r){var e=r(48),i={};i[r(5)("toStringTag")]="z",i+""!="[object z]"&&r(12)(Object.prototype,"toString",function toString(){return"[object "+e(this)+"]"},!0)},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(96)})},function(t,n,r){var e=r(7).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(6)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){var e=r(4),i=r(17),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(7).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(2),i=r(14),o=r(19),u=r(70),s=r(21),c=r(3),f=r(37).f,a=r(16).f,l=r(7).f,h=r(43).trim,p="Number",v=e[p],g=v,y=v.prototype,d=o(r(36)(y))==p,_="trim"in String.prototype,b=function(t){var n=s(t,!1);if("string"==typeof n&&2<n.length){var r,e,i,o=(n=_?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,c=n.slice(2),f=0,a=c.length;f<a;f++)if((u=c.charCodeAt(f))<48||i<u)return NaN;return parseInt(c,e)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function Number(t){var n=arguments.length<1?0:t,r=this;return r instanceof v&&(d?c(function(){y.valueOf.call(r)}):o(r)!=p)?u(new g(b(n)),r,v):b(n)};for(var S,m=r(6)?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;x<m.length;x++)i(g,S=m[x])&&!i(v,S)&&l(v,S,a(g,S));(v.prototype=y).constructor=v,r(12)(e,p,v)}},function(t,n,r){var e=r(0),a=r(23),s=r(98),l=r(72),i=1..toFixed,o=Math.floor,u=[0,0,0,0,0,0],h="Number.toFixed: incorrect invocation!",p=function(t,n){for(var r=-1,e=n;++r<6;)u[r]=(e+=t*u[r])%1e7,e=o(e/1e7)},v=function(t){for(var n=6,r=0;0<=--n;)u[n]=o((r+=u[n])/t),r=r%t*1e7},g=function(){for(var t=6,n="";0<=--t;)if(""!==n||0===t||0!==u[t]){var r=String(u[t]);n=""===n?r:n+l.call("0",7-r.length)+r}return n},y=function(t,n,r){return 0===n?r:n%2==1?y(t,n-1,r*t):y(t*t,n/2,r)};e(e.P+e.F*(!!i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(3)(function(){i.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,i,o=s(this,h),u=a(t),c="",f="0";if(u<0||20<u)throw RangeError(h);if(o!=o)return"NaN";if(o<=-1e21||1e21<=o)return String(o);if(o<0&&(c="-",o=-o),1e-21<o)if(r=(n=function(t){for(var n=0,r=t;4096<=r;)n+=12,r/=4096;for(;2<=r;)n+=1,r/=2;return n}(o*y(2,69,1))-69)<0?o*y(2,-n,1):o/y(2,n,1),r*=4503599627370496,0<(n=52-n)){for(p(0,r),e=u;7<=e;)p(1e7,0),e-=7;for(p(y(10,e,1),0),e=n-1;23<=e;)v(1<<23),e-=23;v(1<<e),p(1,1),v(2),f=g()}else p(0,r),p(1<<-n,0),f=g()+l.call("0",u);return f=0<u?c+((i=f.length)<=u?"0."+l.call("0",u-i)+f:f.slice(0,i-u)+"."+f.slice(i-u)):c+f}})},function(t,n,r){var e=r(0),i=r(3),o=r(98),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,Jt)})||!i(function(){u.call({})})),"Number",{toPrecision:function toPrecision(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return t===Jt?u.call(n):u.call(n,t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){var e=r(0),i=r(2).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(99)})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},function(t,n,r){var e=r(0),i=r(99),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0),i=r(100);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0),i=r(101);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(101);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){var e=r(0),i=r(100);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){var e=r(0),i=r(102),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(Infinity)==Infinity),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:94906265.62425156<t?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){var e=r(0),i=Math.asinh;e(e.S+e.F*!(i&&0<1/i(0)),"Math",{asinh:function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=r(73);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0),i=r(74);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(103)})},function(t,n,r){var e=r(0),f=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,i=0,o=0,u=arguments.length,c=0;o<u;)c<(r=f(arguments[o++]))?(i=i*(e=c/r)*e+1,c=r):i+=0<r?(e=r/c)*e:r;return c===Infinity?Infinity:c*Math.sqrt(i)}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(3)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function imul(t,n){var r=65535,e=+t,i=+n,o=r&e,u=r&i;return 0|o*u+((r&e>>>16)*u+o*(r&i>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function log10(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(102)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(73)})},function(t,n,r){var e=r(0),i=r(74),o=Math.exp;e(e.S+e.F*r(3)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0),i=r(74),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==Infinity?1:r==Infinity?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function trunc(t){return(0<t?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),o=r(35),u=String.fromCharCode,i=String.fromCodePoint;e(e.S+e.F*(!!i&&1!=i.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,i=0;i<e;){if(n=+arguments[i++],o(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?u(n):u(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0),u=r(15),c=r(8);e(e.S,"String",{raw:function raw(t){for(var n=u(t.raw),r=c(n.length),e=arguments.length,i=[],o=0;o<r;)i.push(String(n[o++])),o<e&&i.push(String(arguments[o]));return i.join("")}})},function(t,n,r){r(43)("trim",function(t){return function trim(){return t(this,3)}})},function(t,n,r){var e=r(0),i=r(75)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},function(t,n,r){var e=r(0),u=r(8),c=r(76),f="endsWith",a=""[f];e(e.P+e.F*r(77)(f),"String",{endsWith:function endsWith(t){var n=c(this,t,f),r=1<arguments.length?arguments[1]:Jt,e=u(n.length),i=r===Jt?e:Math.min(u(r),e),o=String(t);return a?a.call(n,o,i):n.slice(i-o.length,i)===o}})},function(t,n,r){var e=r(0),i=r(76),o="includes";e(e.P+e.F*r(77)(o),"String",{includes:function includes(t){return!!~i(this,t,o).indexOf(t,1<arguments.length?arguments[1]:Jt)}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(72)})},function(t,n,r){var e=r(0),i=r(8),o=r(76),u="startsWith",c=""[u];e(e.P+e.F*r(77)(u),"String",{startsWith:function startsWith(t){var n=o(this,t,u),r=i(Math.min(1<arguments.length?arguments[1]:Jt,n.length)),e=String(t);return c?c.call(n,e,r):n.slice(r,r+e.length)===e}})},function(t,n,r){var e=r(75)(!0);r(78)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return n.length<=r?{value:Jt,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){r(13)("anchor",function(n){return function anchor(t){return n(this,"a","name",t)}})},function(t,n,r){r(13)("big",function(t){return function big(){return t(this,"big","","")}})},function(t,n,r){r(13)("blink",function(t){return function blink(){return t(this,"blink","","")}})},function(t,n,r){r(13)("bold",function(t){return function bold(){return t(this,"b","","")}})},function(t,n,r){r(13)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},function(t,n,r){r(13)("fontcolor",function(n){return function fontcolor(t){return n(this,"font","color",t)}})},function(t,n,r){r(13)("fontsize",function(n){return function fontsize(t){return n(this,"font","size",t)}})},function(t,n,r){r(13)("italics",function(t){return function italics(){return t(this,"i","","")}})},function(t,n,r){r(13)("link",function(n){return function link(t){return n(this,"a","href",t)}})},function(t,n,r){r(13)("small",function(t){return function small(){return t(this,"small","","")}})},function(t,n,r){r(13)("strike",function(t){return function strike(){return t(this,"strike","","")}})},function(t,n,r){r(13)("sub",function(t){return function sub(){return t(this,"sub","","")}})},function(t,n,r){r(13)("sup",function(t){return function sup(){return t(this,"sup","","")}})},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(52)})},function(t,n,r){var h=r(18),e=r(0),p=r(9),v=r(104),g=r(80),y=r(8),d=r(81),_=r(82);e(e.S+e.F*!r(54)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,r,e,i,o=p(t),u="function"==typeof this?this:Array,c=arguments.length,f=1<c?arguments[1]:Jt,a=f!==Jt,s=0,l=_(o);if(a&&(f=h(f,2<c?arguments[2]:Jt,2)),l==Jt||u==Array&&g(l))for(r=new u(n=y(o.length));s<n;s++)d(r,s,a?f(o[s],s):o[s]);else for(i=l.call(o),r=new u;!(e=i.next()).done;s++)d(r,s,a?v(i,f,[e.value,s],!0):e.value);return r.length=s,r}})},function(t,n,r){var e=r(0),i=r(81);e(e.S+e.F*r(3)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);t<n;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,r){var e=r(0),i=r(15),o=[].join;e(e.P+e.F*(r(46)!=Object||!r(20)(o)),"Array",{join:function join(t){return o.call(i(this),t===Jt?",":t)}})},function(t,n,r){var e=r(0),i=r(68),a=r(19),s=r(35),l=r(8),h=[].slice;e(e.P+e.F*r(3)(function(){i&&h.call(i)}),"Array",{slice:function slice(t,n){var r=l(this.length),e=a(this);if(n=n===Jt?r:n,"Array"==e)return h.call(this,t,n);for(var i=s(t,r),o=s(n,r),u=l(o-i),c=new Array(u),f=0;f<u;f++)c[f]="String"==e?this.charAt(i+f):this[i+f];return c}})},function(t,n,r){var e=r(0),i=r(10),o=r(9),u=r(3),c=[].sort,f=[1,2,3];e(e.P+e.F*(u(function(){f.sort(Jt)})||!u(function(){f.sort(null)})||!r(20)(c)),"Array",{sort:function sort(t){return t===Jt?c.call(o(this)):c.call(o(this),i(t))}})},function(t,n,r){var e=r(0),i=r(25)(0),o=r(20)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(4),i=r(52),o=r(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=Jt),e(n)&&null===(n=n[o])&&(n=Jt)),n===Jt?Array:n}},function(t,n,r){var e=r(0),i=r(25)(1);e(e.P+e.F*!r(20)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(2);e(e.P+e.F*!r(20)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(3);e(e.P+e.F*!r(20)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(4);e(e.P+e.F*!r(20)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(105);e(e.P+e.F*!r(20)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){var e=r(0),i=r(105);e(e.P+e.F*!r(20)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){var e=r(0),i=r(50)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(20)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(15),o=r(23),u=r(8),c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(f||!r(20)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(f)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(1<arguments.length&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);0<=e;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(106)}),r(31)("copyWithin")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(84)}),r(31)("fill")},function(t,n,r){var e=r(0),i=r(25)(5),o="find",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{find:function find(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)(o)},function(t,n,r){var e=r(0),i=r(25)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function findIndex(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)(o)},function(t,n,r){r(38)("Array")},function(t,n,r){var e=r(2),o=r(70),i=r(7).f,u=r(37).f,c=r(53),f=r(55),a=e.RegExp,s=a,l=a.prototype,h=/a/g,p=/a/g,v=new a(h)!==h;if(r(6)&&(!v||r(3)(function(){return p[r(5)("match")]=!1,a(h)!=h||a(p)==p||"/a/i"!=a(h,"i")}))){a=function RegExp(t,n){var r=this instanceof a,e=c(t),i=n===Jt;return!r&&e&&t.constructor===a&&i?t:o(v?new s(e&&!i?t.source:t,n):s((e=t instanceof a)?t.source:t,e&&i?f.call(t):n),r?this:l,a)};for(var g=function(n){n in a||i(a,n,{configurable:!0,get:function(){return s[n]},set:function(t){s[n]=t}})},y=u(s),d=0;d<y.length;)g(y[d++]);(l.constructor=a).prototype=l,r(12)(e,"RegExp",a)}r(38)("RegExp")},function(t,n,r){r(108);var e=r(1),i=r(55),o=r(6),u="toString",c=/./[u],f=function(t){r(12)(RegExp.prototype,u,t,!0)};r(3)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?f(function toString(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):Jt)}):c.name!=u&&f(function toString(){return c.call(this)})},function(t,n,r){r(56)("match",1,function(e,i,t){return[function match(t){var n=e(this),r=t==Jt?Jt:t[i];return r!==Jt?r.call(t,n):new RegExp(t)[i](String(n))},t]})},function(t,n,r){r(56)("replace",2,function(i,o,u){return[function replace(t,n){var r=i(this),e=t==Jt?Jt:t[o];return e!==Jt?e.call(t,r,n):u.call(String(r),t,n)},u]})},function(t,n,r){r(56)("search",1,function(e,i,t){return[function search(t){var n=e(this),r=t==Jt?Jt:t[i];return r!==Jt?r.call(t,n):new RegExp(t)[i](String(n))},t]})},function(t,n,r){r(56)("split",2,function(i,o,u){var p=r(53),v=u,g=[].push,t="split",y="length",d="lastIndex";if("c"=="abbc"[t](/(b)*/)[1]||4!="test"[t](/(?:)/,-1)[y]||2!="ab"[t](/(?:ab)*/)[y]||4!="."[t](/(.?)(.?)/)[y]||1<"."[t](/()()/)[y]||""[t](/.?/)[y]){var _=/()??/.exec("")[1]===Jt;u=function(t,n){var r=String(this);if(t===Jt&&0===n)return[];if(!p(t))return v.call(r,t,n);var e,i,o,u,c,f=[],a=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),s=0,l=n===Jt?4294967295:n>>>0,h=new RegExp(t.source,a+"g");for(_||(e=new RegExp("^"+h.source+"$(?!\\s)",a));(i=h.exec(r))&&!(s<(o=i.index+i[0][y])&&(f.push(r.slice(s,i.index)),!_&&1<i[y]&&i[0].replace(e,function(){for(c=1;c<arguments[y]-2;c++)arguments[c]===Jt&&(i[c]=Jt)}),1<i[y]&&i.index<r[y]&&g.apply(f,i.slice(1)),u=i[0][y],s=o,l<=f[y]));)h[d]===i.index&&h[d]++;return s===r[y]?!u&&h.test("")||f.push(""):f.push(r.slice(s)),l<f[y]?f.slice(0,l):f}}else"0"[t](Jt,0)[y]&&(u=function(t,n){return t===Jt&&0===n?[]:v.call(this,t,n)});return[function split(t,n){var r=i(this),e=t==Jt?Jt:t[o];return e!==Jt?e.call(t,r,n):u.call(String(r),t,n)},u]})},function(t,n,e){var r,i,o,u,c=e(30),f=e(2),a=e(18),s=e(48),l=e(0),h=e(4),p=e(10),v=e(39),g=e(40),y=e(57),d=e(86).set,_=e(87)(),b=e(88),S=e(109),m=e(58),x=e(110),w="Promise",E=f.TypeError,O=f.process,M=O&&O.versions,P=M&&M.v8||"",F=f[w],I="process"==s(O),A=function(){},k=i=b.f,N=!!function(){try{var t=F.resolve(1),n=(t.constructor={})[e(5)("species")]=function(t){t(A,A)};return(I||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof n&&0!==P.indexOf("6.6")&&-1===m.indexOf("Chrome/66")}catch(r){}}(),j=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},R=function(l,r){if(!l._n){l._n=!0;var e=l._c;_(function(){for(var a=l._v,s=1==l._s,t=0,n=function(t){var n,r,e,i=s?t.ok:t.fail,o=t.resolve,u=t.reject,c=t.domain;try{i?(s||(2==l._h&&D(l),l._h=1),!0===i?n=a:(c&&c.enter(),n=i(a),c&&(c.exit(),e=!0)),n===t.promise?u(E("Promise-chain cycle")):(r=j(n))?r.call(n,o,u):o(n)):u(a)}catch(f){c&&!e&&c.exit(),u(f)}};t<e.length;)n(e[t++]);l._c=[],l._n=!1,r&&!l._h&&T(l)})}},T=function(o){d.call(f,function(){var t,n,r,e=o._v,i=L(o);if(i&&(t=S(function(){I?O.emit("unhandledRejection",e,o):(n=f.onunhandledrejection)?n({promise:o,reason:e}):(r=f.console)&&r.error&&r.error("Unhandled promise rejection",e)}),o._h=I||L(o)?2:1),o._a=Jt,i&&t.e)throw t.v})},L=function(t){
  return 1!==t._h&&0===(t._a||t._c).length},D=function(n){d.call(f,function(){var t;I?O.emit("rejectionHandled",n):(t=f.onrejectionhandled)&&t({promise:n,reason:n._v})})},C=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},U=function(r){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===r)throw E("Promise can't be resolved itself");(e=j(r))?_(function(){var t={_w:i,_d:!1};try{e.call(r,a(U,t,1),a(C,t,1))}catch(n){C.call(t,n)}}):(i._v=r,i._s=1,R(i,!1))}catch(t){C.call({_w:i,_d:!1},t)}}};N||(F=function Promise(t){v(this,F,w,"_h"),p(t),r.call(this);try{t(a(U,this,1),a(C,this,1))}catch(n){C.call(this,n)}},(r=function Promise(t){this._c=[],this._a=Jt,this._s=0,this._d=!1,this._v=Jt,this._h=0,this._n=!1}).prototype=e(41)(F.prototype,{then:function then(t,n){var r=k(y(this,F));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=I?O.domain:Jt,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},"catch":function(t){return this.then(Jt,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=a(U,t,1),this.reject=a(C,t,1)},b.f=k=function(t){return t===F||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!N,{Promise:F}),e(42)(F,w),e(38)(w),u=e(26)[w],l(l.S+l.F*!N,w,{reject:function reject(t){var n=k(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!N),w,{resolve:function resolve(t){return x(c&&this===u?F:this,t)}}),l(l.S+l.F*!(N&&e(54)(function(t){F.all(t)["catch"](A)})),w,{all:function all(t){var u=this,n=k(u),c=n.resolve,f=n.reject,r=S(function(){var e=[],i=0,o=1;g(t,!1,function(t){var n=i++,r=!1;e.push(Jt),o++,u.resolve(t).then(function(t){r||(r=!0,e[n]=t,--o||c(e))},f)}),--o||c(e)});return r.e&&f(r.v),n.promise},race:function race(t){var n=this,r=k(n),e=r.reject,i=S(function(){g(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},function(t,n,r){var e=r(115),i=r(45),o="WeakSet";r(59)(o,function(t){return function WeakSet(){return t(this,0<arguments.length?arguments[0]:Jt)}},{add:function add(t){return e.def(i(this,o),t,!0)}},e,!1,!0)},function(t,n,r){var e=r(0),o=r(10),u=r(1),c=(r(2).Reflect||{}).apply,f=Function.apply;e(e.S+e.F*!r(3)(function(){c(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=o(t),i=u(r);return c?c(e,n,i):f.call(e,n,i)}})},function(t,n,r){var e=r(0),c=r(36),f=r(10),a=r(1),s=r(4),i=r(3),l=r(96),h=(r(2).Reflect||{}).construct,p=i(function(){function F(){}return!(h(function(){},[],F)instanceof F)}),v=!i(function(){h(function(){})});e(e.S+e.F*(p||v),"Reflect",{construct:function construct(t,n){f(t),a(n);var r=arguments.length<3?t:f(arguments[2]);if(v&&!p)return h(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(l.apply(t,e))}var i=r.prototype,o=c(s(i)?i:Object.prototype),u=Function.apply.call(t,o,n);return s(u)?u:o}})},function(t,n,r){var i=r(7),e=r(0),o=r(1),u=r(21);e(e.S+e.F*r(3)(function(){Reflect.defineProperty(i.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return i.f(t,n,r),!0}catch(e){return!1}}})},function(t,n,r){var e=r(0),i=r(16).f,o=r(1);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,r){var e=r(0),i=r(1),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};r(79)(o,"Object",function(){var t,n=this._k;do{if(n.length<=this._i)return{value:Jt,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(t){return new o(t)}})},function(t,n,r){var o=r(16),u=r(17),c=r(14),e=r(0),f=r(4),a=r(1);e(e.S,"Reflect",{get:function get(t,n){var r,e,i=arguments.length<3?t:arguments[2];return a(t)===i?t[n]:(r=o.f(t,n))?c(r,"value")?r.value:r.get!==Jt?r.get.call(i):Jt:f(e=u(t))?get(e,n,i):void 0}})},function(t,n,r){var e=r(16),i=r(0),o=r(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(0),i=r(17),o=r(1);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function has(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(1),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(116)})},function(t,n,r){var e=r(0),i=r(1),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(n){return!1}}})},function(t,n,r){var c=r(7),f=r(16),a=r(17),s=r(14),e=r(0),l=r(32),h=r(1),p=r(4);e(e.S,"Reflect",{set:function set(t,n,r){var e,i,o=arguments.length<4?t:arguments[3],u=f.f(h(t),n);if(!u){if(p(i=a(t)))return set(i,n,r,o);u=l(0)}if(s(u,"value")){if(!1===u.writable||!p(o))return!1;if(e=f.f(o,n)){if(e.get||e.set||!1===e.writable)return!1;e.value=r,c.f(o,n,e)}else c.f(o,n,l(0,r));return!0}return u.set!==Jt&&(u.set.call(o,r),!0)}})},function(t,n,r){var e=r(0),i=r(69);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(r){return!1}}})},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){var e=r(0),i=r(9),o=r(21);e(e.P+e.F*r(3)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},function(t,n,r){var e=r(0),i=r(247);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){var e=r(3),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return 9<t?t:"0"+t};t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function toISOString(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":9999<n?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(99<r?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=Date.prototype,i="Invalid Date",o="toString",u=e[o],c=e.getTime;new Date(NaN)+""!=i&&r(12)(e,o,function toString(){var t=c.call(this);return t==t?u.call(this):i})},function(t,n,r){var e=r(5)("toPrimitive"),i=Date.prototype;e in i||r(11)(i,e,r(250))},function(t,n,r){var e=r(1),i=r(21);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},function(t,n,r){var e=r(0),i=r(60),o=r(89),a=r(1),s=r(35),l=r(8),u=r(4),c=r(2).ArrayBuffer,h=r(57),p=o.ArrayBuffer,v=o.DataView,f=i.ABV&&c.isView,g=p.prototype.slice,y=i.VIEW,d="ArrayBuffer";e(e.G+e.W+e.F*(c!==p),{ArrayBuffer:p}),e(e.S+e.F*!i.CONSTR,d,{isView:function isView(t){return f&&f(t)||u(t)&&y in t}}),e(e.P+e.U+e.F*r(3)(function(){return!new p(2).slice(1,Jt).byteLength}),d,{slice:function slice(t,n){if(g!==Jt&&n===Jt)return g.call(a(this),t);for(var r=a(this).byteLength,e=s(t,r),i=s(n===Jt?r:n,r),o=new(h(this,p))(l(i-e)),u=new v(this),c=new v(o),f=0;e<i;)c.setUint8(f++,u.getUint8(e++));return o}}),r(38)(d)},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(60).ABV,{DataView:r(89).DataView})},function(t,n,r){r(27)("Int8",1,function(e){return function Int8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint8",1,function(e){return function Uint8Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint8",1,function(e){return function Uint8ClampedArray(t,n,r){return e(this,t,n,r)}},!0)},function(t,n,r){r(27)("Int16",2,function(e){return function Int16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint16",2,function(e){return function Uint16Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Int32",4,function(e){return function Int32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Uint32",4,function(e){return function Uint32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Float32",4,function(e){return function Float32Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){r(27)("Float64",8,function(e){return function Float64Array(t,n,r){return e(this,t,n,r)}})},function(t,n,r){var e=r(0),i=r(50)(!0);e(e.P,"Array",{includes:function includes(t){return i(this,t,1<arguments.length?arguments[1]:Jt)}}),r(31)("includes")},function(t,n,r){var e=r(0),i=r(118),o=r(9),u=r(8),c=r(10),f=r(83);e(e.P,"Array",{flatMap:function flatMap(t){var n,r,e=o(this);return c(t),n=u(e.length),r=f(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(31)("flatMap")},function(t,n,r){var e=r(0),i=r(118),o=r(9),u=r(8),c=r(23),f=r(83);e(e.P,"Array",{flatten:function flatten(){var t=arguments[0],n=o(this),r=u(n.length),e=f(n,0);return i(e,n,n,r,0,t===Jt?1:c(t)),e}}),r(31)("flatten")},function(t,n,r){var e=r(0),i=r(75)(!0);e(e.P,"String",{at:function at(t){return i(this,t)}})},function(t,n,r){var e=r(0),i=r(119),o=r(58);e(e.P+e.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padStart:function padStart(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!0)}})},function(t,n,r){var e=r(0),i=r(119),o=r(58);e(e.P+e.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padEnd:function padEnd(t){return i(this,t,1<arguments.length?arguments[1]:Jt,!1)}})},function(t,n,r){r(43)("trimLeft",function(t){return function trimLeft(){return t(this,1)}},"trimStart")},function(t,n,r){r(43)("trimRight",function(t){return function trimRight(){return t(this,2)}},"trimEnd")},function(t,n,r){var e=r(0),i=r(22),o=r(8),u=r(53),c=r(55),f=RegExp.prototype,a=function(t,n){this._r=t,this._s=n};r(79)(a,"RegExp String",function next(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function matchAll(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in f?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new a(e,n)}})},function(t,n,r){r(65)("asyncIterator")},function(t,n,r){r(65)("observable")},function(t,n,r){var e=r(0),f=r(116),a=r(15),s=r(16),l=r(81);e(e.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,r,e=a(t),i=s.f,o=f(e),u={},c=0;c<o.length;)(r=i(e,n=o[c++]))!==Jt&&l(u,n,r);return u}})},function(t,n,r){var e=r(0),i=r(120)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(120)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(7);r(6)&&e(e.P+r(61),"Object",{__defineGetter__:function __defineGetter__(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(7);r(6)&&e(e.P+r(61),"Object",{__defineSetter__:function __defineSetter__(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(21),u=r(17),c=r(16).f;r(6)&&e(e.P+r(61),"Object",{__lookupGetter__:function __lookupGetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},function(t,n,r){var e=r(0),i=r(9),o=r(21),u=r(17),c=r(16).f;r(6)&&e(e.P+r(61),"Object",{__lookupSetter__:function __lookupSetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},function(t,n,r){var e=r(0);e(e.P+e.R,"Map",{toJSON:r(121)("Map")})},function(t,n,r){var e=r(0);e(e.P+e.R,"Set",{toJSON:r(121)("Set")})},function(t,n,r){r(62)("Map")},function(t,n,r){r(62)("Set")},function(t,n,r){r(62)("WeakMap")},function(t,n,r){r(62)("WeakSet")},function(t,n,r){r(63)("Map")},function(t,n,r){r(63)("Set")},function(t,n,r){r(63)("WeakMap")},function(t,n,r){r(63)("WeakSet")},function(t,n,r){var e=r(0);e(e.G,{global:r(2)})},function(t,n,r){var e=r(0);e(e.S,"System",{global:r(2)})},function(t,n,r){var e=r(0),i=r(19);e(e.S,"Error",{isError:function isError(t){return"Error"===i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clamp:function clamp(t,n,r){return Math.min(r,Math.max(n,t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,n,r){var e=r(0),i=180/Math.PI;e(e.S,"Math",{degrees:function degrees(t){return t*i}})},function(t,n,r){var e=r(0),o=r(123),u=r(103);e(e.S,"Math",{fscale:function fscale(t,n,r,e,i){return u(o(t,n,r,e,i))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{iaddh:function iaddh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)+(e>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{isubh:function isubh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)-(e>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{imulh:function imulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,f=(u*o>>>0)+(i*o>>>16);return u*c+(f>>16)+((i*c>>>0)+(65535&f)>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,n,r){var e=r(0),i=Math.PI/180;e(e.S,"Math",{radians:function radians(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{scale:r(123)})},function(t,n,r){var e=r(0);e(e.S,"Math",{umulh:function umulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,f=(u*o>>>0)+(i*o>>>16);return u*c+(f>>>16)+((i*c>>>0)+(65535&f)>>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{signbit:function signbit(t){return(t=+t)!=t?t:0==t?1/t==Infinity:0<t}})},function(t,n,r){var e=r(0),i=r(26),o=r(2),u=r(57),c=r(110);e(e.P+e.R,"Promise",{"finally":function(n){var r=u(this,i.Promise||o.Promise),t="function"==typeof n;return this.then(t?function(t){return c(r,n()).then(function(){return t})}:n,t?function(t){return c(r,n()).then(function(){throw t})}:n)}})},function(t,n,r){var e=r(0),i=r(88),o=r(109);e(e.S,"Promise",{"try":function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},function(t,n,r){var e=r(28),i=r(1),o=e.key,u=e.set;e.exp({defineMetadata:function defineMetadata(t,n,r,e){u(t,n,i(r),o(e))}})},function(t,n,r){var e=r(28),o=r(1),u=e.key,c=e.map,f=e.store;e.exp({deleteMetadata:function deleteMetadata(t,n){var r=arguments.length<3?Jt:u(arguments[2]),e=c(o(n),r,!1);if(e===Jt||!e["delete"](t))return!1;if(e.size)return!0;var i=f.get(n);return i["delete"](r),!!i.size||f["delete"](n)}})},function(t,n,r){var e=r(28),i=r(1),o=r(17),u=e.has,c=e.get,f=e.key,a=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?a(t,e,r):Jt};e.exp({getMetadata:function getMetadata(t,n){return a(t,i(n),arguments.length<3?Jt:f(arguments[2]))}})},function(t,n,r){var o=r(113),u=r(122),e=r(28),i=r(1),c=r(17),f=e.keys,a=e.key,s=function(t,n){var r=f(t,n),e=c(t);if(null===e)return r;var i=s(e,n);return i.length?r.length?u(new o(r.concat(i))):i:r};e.exp({getMetadataKeys:function getMetadataKeys(t){return s(i(t),arguments.length<2?Jt:a(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.get,u=e.key;e.exp({getOwnMetadata:function getOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(t){return o(i(t),arguments.length<2?Jt:u(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(17),u=e.has,c=e.key,f=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&f(t,e,r)};e.exp({hasMetadata:function hasMetadata(t,n){return f(t,i(n),arguments.length<3?Jt:c(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.has,u=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(t,n){return o(t,i(n),arguments.length<3?Jt:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(10),u=e.key,c=e.set;e.exp({metadata:function metadata(r,e){return function decorator(t,n){c(r,e,(n!==Jt?i:o)(t),u(n))}}})},function(t,n,r){var e=r(0),i=r(87)(),o=r(2).process,u="process"==r(19)(o);e(e.G,{asap:function asap(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},function(t,n,r){var e=r(0),o=r(2),u=r(26),i=r(87)(),c=r(5)("observable"),f=r(10),a=r(1),s=r(39),l=r(41),h=r(11),p=r(40),v=p.RETURN,g=function(t){return null==t?Jt:f(t)},y=function(t){var n=t._c;n&&(t._c=Jt,n())},d=function(t){return t._o===Jt},_=function(t){d(t)||(t._o=Jt,y(t))},b=function(t,n){a(t),this._c=Jt,this._o=t,t=new S(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:f(r),this._c=r)}catch(i){return void t.error(i)}d(this)&&y(this)};b.prototype=l({},{unsubscribe:function unsubscribe(){_(this)}});var S=function(t){this._s=t};S.prototype=l({},{next:function next(t){var n=this._s;if(!d(n)){var r=n._o;try{var e=g(r.next);if(e)return e.call(r,t)}catch(i){try{_(n)}finally{throw i}}}},error:function error(t){var n=this._s;if(d(n))throw t;var r=n._o;n._o=Jt;try{var e=g(r.error);if(!e)throw t;t=e.call(r,t)}catch(i){try{y(n)}finally{throw i}}return y(n),t},complete:function complete(t){var n=this._s;if(!d(n)){var r=n._o;n._o=Jt;try{var e=g(r.complete);t=e?e.call(r,t):Jt}catch(i){try{y(n)}finally{throw i}}return y(n),t}}});var m=function Observable(t){s(this,m,"Observable","_f")._f=f(t)};l(m.prototype,{subscribe:function subscribe(t){return new b(t,this._f)},forEach:function forEach(i){var n=this;return new(u.Promise||o.Promise)(function(t,r){f(i);var e=n.subscribe({next:function(t){try{return i(t)}catch(n){r(n),e.unsubscribe()}},error:r,complete:t})})}}),l(m,{from:function from(e){var t="function"==typeof this?this:m,n=g(a(e)[c]);if(n){var r=a(n.call(e));return r.constructor===t?r:new t(function(t){return r.subscribe(t)})}return new t(function(n){var r=!1;return i(function(){if(!r){try{if(p(e,!1,function(t){if(n.next(t),r)return v})===v)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function of(){for(var t=0,n=arguments.length,e=new Array(n);t<n;)e[t]=arguments[t++];return new("function"==typeof this?this:m)(function(n){var r=!1;return i(function(){if(!r){for(var t=0;t<e.length;++t)if(n.next(e[t]),r)return;n.complete()}}),function(){r=!0}})}}),h(m.prototype,c,function(){return this}),e(e.G,{Observable:m}),r(38)("Observable")},function(t,n,r){var e=r(0),i=r(86);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){for(var e=r(85),i=r(34),o=r(12),u=r(2),c=r(11),f=r(44),a=r(5),s=a("iterator"),l=a("toStringTag"),h=f.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),g=0;g<v.length;g++){var y,d=v[g],_=p[d],b=u[d],S=b&&b.prototype;if(S&&(S[s]||c(S,s,h),S[l]||c(S,l,d),f[d]=h,_))for(y in e)S[y]||o(S,y,e[y],!0)}},function(t,n,r){var e=r(2),i=r(0),o=r(58),u=[].slice,c=/MSIE .\./.test(o),f=function(i){return function(t,n){var r=2<arguments.length,e=!!r&&u.call(arguments,2);return i(r?function(){("function"==typeof t?t:Function(t)).apply(this,e)}:t,n)}};i(i.G+i.B+i.F*c,{setTimeout:f(e.setTimeout),setInterval:f(e.setInterval)})}]),"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):i.core=e}(1,1);
  //# sourceMappingURL=shim.min.js.map



  (function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
      module.exports = factory();
    else if(typeof define === 'function' && define.amd)
      define([], factory);
    else if(typeof exports === 'object')
      exports["layoutBase"] = factory();
    else
      root["layoutBase"] = factory();
  })(this, function() {
  return /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// identity function for calling harmony imports with the correct context
  /******/ 	__webpack_require__.i = function(value) { return value; };
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, {
  /******/ 				configurable: false,
  /******/ 				enumerable: true,
  /******/ 				get: getter
  /******/ 			});
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = 28);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  function LayoutConstants() {}
  
  /**
   * Layout Quality: 0:draft, 1:default, 2:proof
   */
  LayoutConstants.QUALITY = 1;
  
  /**
   * Default parameters
   */
  LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED = false;
  LayoutConstants.DEFAULT_INCREMENTAL = false;
  LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT = true;
  LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT = false;
  LayoutConstants.DEFAULT_ANIMATION_PERIOD = 50;
  LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false;
  
  // -----------------------------------------------------------------------------
  // Section: General other constants
  // -----------------------------------------------------------------------------
  /*
   * Margins of a graph to be applied on bouding rectangle of its contents. We
   * assume margins on all four sides to be uniform.
   */
  LayoutConstants.DEFAULT_GRAPH_MARGIN = 15;
  
  /*
   * Whether to consider labels in node dimensions or not
   */
  LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = false;
  
  /*
   * Default dimension of a non-compound node.
   */
  LayoutConstants.SIMPLE_NODE_SIZE = 40;
  
  /*
   * Default dimension of a non-compound node.
   */
  LayoutConstants.SIMPLE_NODE_HALF_SIZE = LayoutConstants.SIMPLE_NODE_SIZE / 2;
  
  /*
   * Empty compound node size. When a compound node is empty, its both
   * dimensions should be of this value.
   */
  LayoutConstants.EMPTY_COMPOUND_NODE_SIZE = 40;
  
  /*
   * Minimum length that an edge should take during layout
   */
  LayoutConstants.MIN_EDGE_LENGTH = 1;
  
  /*
   * World boundaries that layout operates on
   */
  LayoutConstants.WORLD_BOUNDARY = 1000000;
  
  /*
   * World boundaries that random positioning can be performed with
   */
  LayoutConstants.INITIAL_WORLD_BOUNDARY = LayoutConstants.WORLD_BOUNDARY / 1000;
  
  /*
   * Coordinates of the world center
   */
  LayoutConstants.WORLD_CENTER_X = 1200;
  LayoutConstants.WORLD_CENTER_Y = 900;
  
  module.exports = LayoutConstants;
  
  /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var LGraphObject = __webpack_require__(2);
  var IGeometry = __webpack_require__(8);
  var IMath = __webpack_require__(9);
  
  function LEdge(source, target, vEdge) {
    LGraphObject.call(this, vEdge);
  
    this.isOverlapingSourceAndTarget = false;
    this.vGraphObject = vEdge;
    this.bendpoints = [];
    this.source = source;
    this.target = target;
  }
  
  LEdge.prototype = Object.create(LGraphObject.prototype);
  
  for (var prop in LGraphObject) {
    LEdge[prop] = LGraphObject[prop];
  }
  
  LEdge.prototype.getSource = function () {
    return this.source;
  };
  
  LEdge.prototype.getTarget = function () {
    return this.target;
  };
  
  LEdge.prototype.isInterGraph = function () {
    return this.isInterGraph;
  };
  
  LEdge.prototype.getLength = function () {
    return this.length;
  };
  
  LEdge.prototype.isOverlapingSourceAndTarget = function () {
    return this.isOverlapingSourceAndTarget;
  };
  
  LEdge.prototype.getBendpoints = function () {
    return this.bendpoints;
  };
  
  LEdge.prototype.getLca = function () {
    return this.lca;
  };
  
  LEdge.prototype.getSourceInLca = function () {
    return this.sourceInLca;
  };
  
  LEdge.prototype.getTargetInLca = function () {
    return this.targetInLca;
  };
  
  LEdge.prototype.getOtherEnd = function (node) {
    if (this.source === node) {
      return this.target;
    } else if (this.target === node) {
      return this.source;
    } else {
      throw "Node is not incident with this edge";
    }
  };
  
  LEdge.prototype.getOtherEndInGraph = function (node, graph) {
    var otherEnd = this.getOtherEnd(node);
    var root = graph.getGraphManager().getRoot();
  
    while (true) {
      if (otherEnd.getOwner() == graph) {
        return otherEnd;
      }
  
      if (otherEnd.getOwner() == root) {
        break;
      }
  
      otherEnd = otherEnd.getOwner().getParent();
    }
  
    return null;
  };
  
  LEdge.prototype.updateLength = function () {
    var clipPointCoordinates = new Array(4);
  
    this.isOverlapingSourceAndTarget = IGeometry.getIntersection(this.target.getRect(), this.source.getRect(), clipPointCoordinates);
  
    if (!this.isOverlapingSourceAndTarget) {
      this.lengthX = clipPointCoordinates[0] - clipPointCoordinates[2];
      this.lengthY = clipPointCoordinates[1] - clipPointCoordinates[3];
  
      if (Math.abs(this.lengthX) < 1.0) {
        this.lengthX = IMath.sign(this.lengthX);
      }
  
      if (Math.abs(this.lengthY) < 1.0) {
        this.lengthY = IMath.sign(this.lengthY);
      }
  
      this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
    }
  };
  
  LEdge.prototype.updateLengthSimple = function () {
    this.lengthX = this.target.getCenterX() - this.source.getCenterX();
    this.lengthY = this.target.getCenterY() - this.source.getCenterY();
  
    if (Math.abs(this.lengthX) < 1.0) {
      this.lengthX = IMath.sign(this.lengthX);
    }
  
    if (Math.abs(this.lengthY) < 1.0) {
      this.lengthY = IMath.sign(this.lengthY);
    }
  
    this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
  };
  
  module.exports = LEdge;
  
  /***/ }),
  /* 2 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  function LGraphObject(vGraphObject) {
    this.vGraphObject = vGraphObject;
  }
  
  module.exports = LGraphObject;
  
  /***/ }),
  /* 3 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var LGraphObject = __webpack_require__(2);
  var Integer = __webpack_require__(10);
  var RectangleD = __webpack_require__(13);
  var LayoutConstants = __webpack_require__(0);
  var RandomSeed = __webpack_require__(16);
  var PointD = __webpack_require__(5);
  
  function LNode(gm, loc, size, vNode) {
    //Alternative constructor 1 : LNode(LGraphManager gm, Point loc, Dimension size, Object vNode)
    if (size == null && vNode == null) {
      vNode = loc;
    }
  
    LGraphObject.call(this, vNode);
  
    //Alternative constructor 2 : LNode(Layout layout, Object vNode)
    if (gm.graphManager != null) gm = gm.graphManager;
  
    this.estimatedSize = Integer.MIN_VALUE;
    this.inclusionTreeDepth = Integer.MAX_VALUE;
    this.vGraphObject = vNode;
    this.edges = [];
    this.graphManager = gm;
  
    if (size != null && loc != null) this.rect = new RectangleD(loc.x, loc.y, size.width, size.height);else this.rect = new RectangleD();
  }
  
  LNode.prototype = Object.create(LGraphObject.prototype);
  for (var prop in LGraphObject) {
    LNode[prop] = LGraphObject[prop];
  }
  
  LNode.prototype.getEdges = function () {
    return this.edges;
  };
  
  LNode.prototype.getChild = function () {
    return this.child;
  };
  
  LNode.prototype.getOwner = function () {
    //  if (this.owner != null) {
    //    if (!(this.owner == null || this.owner.getNodes().indexOf(this) > -1)) {
    //      throw "assert failed";
    //    }
    //  }
  
    return this.owner;
  };
  
  LNode.prototype.getWidth = function () {
    return this.rect.width;
  };
  
  LNode.prototype.setWidth = function (width) {
    this.rect.width = width;
  };
  
  LNode.prototype.getHeight = function () {
    return this.rect.height;
  };
  
  LNode.prototype.setHeight = function (height) {
    this.rect.height = height;
  };
  
  LNode.prototype.getCenterX = function () {
    return this.rect.x + this.rect.width / 2;
  };
  
  LNode.prototype.getCenterY = function () {
    return this.rect.y + this.rect.height / 2;
  };
  
  LNode.prototype.getCenter = function () {
    return new PointD(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
  };
  
  LNode.prototype.getLocation = function () {
    return new PointD(this.rect.x, this.rect.y);
  };
  
  LNode.prototype.getRect = function () {
    return this.rect;
  };
  
  LNode.prototype.getDiagonal = function () {
    return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
  };
  
  /**
   * This method returns half the diagonal length of this node.
   */
  LNode.prototype.getHalfTheDiagonal = function () {
    return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
  };
  
  LNode.prototype.setRect = function (upperLeft, dimension) {
    this.rect.x = upperLeft.x;
    this.rect.y = upperLeft.y;
    this.rect.width = dimension.width;
    this.rect.height = dimension.height;
  };
  
  LNode.prototype.setCenter = function (cx, cy) {
    this.rect.x = cx - this.rect.width / 2;
    this.rect.y = cy - this.rect.height / 2;
  };
  
  LNode.prototype.setLocation = function (x, y) {
    this.rect.x = x;
    this.rect.y = y;
  };
  
  LNode.prototype.moveBy = function (dx, dy) {
    this.rect.x += dx;
    this.rect.y += dy;
  };
  
  LNode.prototype.getEdgeListToNode = function (to) {
    var edgeList = [];
    var edge;
    var self = this;
  
    self.edges.forEach(function (edge) {
  
      if (edge.target == to) {
        if (edge.source != self) throw "Incorrect edge source!";
  
        edgeList.push(edge);
      }
    });
  
    return edgeList;
  };
  
  LNode.prototype.getEdgesBetween = function (other) {
    var edgeList = [];
    var edge;
  
    var self = this;
    self.edges.forEach(function (edge) {
  
      if (!(edge.source == self || edge.target == self)) throw "Incorrect edge source and/or target";
  
      if (edge.target == other || edge.source == other) {
        edgeList.push(edge);
      }
    });
  
    return edgeList;
  };
  
  LNode.prototype.getNeighborsList = function () {
    var neighbors = new Set();
  
    var self = this;
    self.edges.forEach(function (edge) {
  
      if (edge.source == self) {
        neighbors.add(edge.target);
      } else {
        if (edge.target != self) {
          throw "Incorrect incidency!";
        }
  
        neighbors.add(edge.source);
      }
    });
  
    return neighbors;
  };
  
  LNode.prototype.withChildren = function () {
    var withNeighborsList = new Set();
    var childNode;
    var children;
  
    withNeighborsList.add(this);
  
    if (this.child != null) {
      var nodes = this.child.getNodes();
      for (var i = 0; i < nodes.length; i++) {
        childNode = nodes[i];
        children = childNode.withChildren();
        children.forEach(function (node) {
          withNeighborsList.add(node);
        });
      }
    }
  
    return withNeighborsList;
  };
  
  LNode.prototype.getNoOfChildren = function () {
    var noOfChildren = 0;
    var childNode;
  
    if (this.child == null) {
      noOfChildren = 1;
    } else {
      var nodes = this.child.getNodes();
      for (var i = 0; i < nodes.length; i++) {
        childNode = nodes[i];
  
        noOfChildren += childNode.getNoOfChildren();
      }
    }
  
    if (noOfChildren == 0) {
      noOfChildren = 1;
    }
    return noOfChildren;
  };
  
  LNode.prototype.getEstimatedSize = function () {
    if (this.estimatedSize == Integer.MIN_VALUE) {
      throw "assert failed";
    }
    return this.estimatedSize;
  };
  
  LNode.prototype.calcEstimatedSize = function () {
    if (this.child == null) {
      return this.estimatedSize = (this.rect.width + this.rect.height) / 2;
    } else {
      this.estimatedSize = this.child.calcEstimatedSize();
      this.rect.width = this.estimatedSize;
      this.rect.height = this.estimatedSize;
  
      return this.estimatedSize;
    }
  };
  
  LNode.prototype.scatter = function () {
    var randomCenterX;
    var randomCenterY;
  
    var minX = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
    var maxX = LayoutConstants.INITIAL_WORLD_BOUNDARY;
    randomCenterX = LayoutConstants.WORLD_CENTER_X + RandomSeed.nextDouble() * (maxX - minX) + minX;
  
    var minY = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
    var maxY = LayoutConstants.INITIAL_WORLD_BOUNDARY;
    randomCenterY = LayoutConstants.WORLD_CENTER_Y + RandomSeed.nextDouble() * (maxY - minY) + minY;
  
    this.rect.x = randomCenterX;
    this.rect.y = randomCenterY;
  };
  
  LNode.prototype.updateBounds = function () {
    if (this.getChild() == null) {
      throw "assert failed";
    }
    if (this.getChild().getNodes().length != 0) {
      // wrap the children nodes by re-arranging the boundaries
      var childGraph = this.getChild();
      childGraph.updateBounds(true);
  
      this.rect.x = childGraph.getLeft();
      this.rect.y = childGraph.getTop();
  
      this.setWidth(childGraph.getRight() - childGraph.getLeft());
      this.setHeight(childGraph.getBottom() - childGraph.getTop());
  
      // Update compound bounds considering its label properties    
      if (LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS) {
  
        var width = childGraph.getRight() - childGraph.getLeft();
        var height = childGraph.getBottom() - childGraph.getTop();
  
        if (this.labelWidth) {
          if (this.labelPosHorizontal == "left") {
            this.rect.x -= this.labelWidth;
            this.setWidth(width + this.labelWidth);
          } else if (this.labelPosHorizontal == "center" && this.labelWidth > width) {
            this.rect.x -= (this.labelWidth - width) / 2;
            this.setWidth(this.labelWidth);
          } else if (this.labelPosHorizontal == "right") {
            this.setWidth(width + this.labelWidth);
          }
        }
  
        if (this.labelHeight) {
          if (this.labelPosVertical == "top") {
            this.rect.y -= this.labelHeight;
            this.setHeight(height + this.labelHeight);
          } else if (this.labelPosVertical == "center" && this.labelHeight > height) {
            this.rect.y -= (this.labelHeight - height) / 2;
            this.setHeight(this.labelHeight);
          } else if (this.labelPosVertical == "bottom") {
            this.setHeight(height + this.labelHeight);
          }
        }
      }
    }
  };
  
  LNode.prototype.getInclusionTreeDepth = function () {
    if (this.inclusionTreeDepth == Integer.MAX_VALUE) {
      throw "assert failed";
    }
    return this.inclusionTreeDepth;
  };
  
  LNode.prototype.transform = function (trans) {
    var left = this.rect.x;
  
    if (left > LayoutConstants.WORLD_BOUNDARY) {
      left = LayoutConstants.WORLD_BOUNDARY;
    } else if (left < -LayoutConstants.WORLD_BOUNDARY) {
      left = -LayoutConstants.WORLD_BOUNDARY;
    }
  
    var top = this.rect.y;
  
    if (top > LayoutConstants.WORLD_BOUNDARY) {
      top = LayoutConstants.WORLD_BOUNDARY;
    } else if (top < -LayoutConstants.WORLD_BOUNDARY) {
      top = -LayoutConstants.WORLD_BOUNDARY;
    }
  
    var leftTop = new PointD(left, top);
    var vLeftTop = trans.inverseTransformPoint(leftTop);
  
    this.setLocation(vLeftTop.x, vLeftTop.y);
  };
  
  LNode.prototype.getLeft = function () {
    return this.rect.x;
  };
  
  LNode.prototype.getRight = function () {
    return this.rect.x + this.rect.width;
  };
  
  LNode.prototype.getTop = function () {
    return this.rect.y;
  };
  
  LNode.prototype.getBottom = function () {
    return this.rect.y + this.rect.height;
  };
  
  LNode.prototype.getParent = function () {
    if (this.owner == null) {
      return null;
    }
  
    return this.owner.getParent();
  };
  
  module.exports = LNode;
  
  /***/ }),
  /* 4 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var LayoutConstants = __webpack_require__(0);
  
  function FDLayoutConstants() {}
  
  //FDLayoutConstants inherits static props in LayoutConstants
  for (var prop in LayoutConstants) {
    FDLayoutConstants[prop] = LayoutConstants[prop];
  }
  
  FDLayoutConstants.MAX_ITERATIONS = 2500;
  
  FDLayoutConstants.DEFAULT_EDGE_LENGTH = 50;
  FDLayoutConstants.DEFAULT_SPRING_STRENGTH = 0.45;
  FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = 4500.0;
  FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = 0.4;
  FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1.0;
  FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8;
  FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5;
  FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true;
  FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true;
  FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3;
  FDLayoutConstants.COOLING_ADAPTATION_FACTOR = 0.33;
  FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT = 1000;
  FDLayoutConstants.ADAPTATION_UPPER_NODE_LIMIT = 5000;
  FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100.0;
  FDLayoutConstants.MAX_NODE_DISPLACEMENT = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3;
  FDLayoutConstants.MIN_REPULSION_DIST = FDLayoutConstants.DEFAULT_EDGE_LENGTH / 10.0;
  FDLayoutConstants.CONVERGENCE_CHECK_PERIOD = 100;
  FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1;
  FDLayoutConstants.MIN_EDGE_LENGTH = 1;
  FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD = 10;
  
  module.exports = FDLayoutConstants;
  
  /***/ }),
  /* 5 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  function PointD(x, y) {
    if (x == null && y == null) {
      this.x = 0;
      this.y = 0;
    } else {
      this.x = x;
      this.y = y;
    }
  }
  
  PointD.prototype.getX = function () {
    return this.x;
  };
  
  PointD.prototype.getY = function () {
    return this.y;
  };
  
  PointD.prototype.setX = function (x) {
    this.x = x;
  };
  
  PointD.prototype.setY = function (y) {
    this.y = y;
  };
  
  PointD.prototype.getDifference = function (pt) {
    return new DimensionD(this.x - pt.x, this.y - pt.y);
  };
  
  PointD.prototype.getCopy = function () {
    return new PointD(this.x, this.y);
  };
  
  PointD.prototype.translate = function (dim) {
    this.x += dim.width;
    this.y += dim.height;
    return this;
  };
  
  module.exports = PointD;
  
  /***/ }),
  /* 6 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var LGraphObject = __webpack_require__(2);
  var Integer = __webpack_require__(10);
  var LayoutConstants = __webpack_require__(0);
  var LGraphManager = __webpack_require__(7);
  var LNode = __webpack_require__(3);
  var LEdge = __webpack_require__(1);
  var RectangleD = __webpack_require__(13);
  var Point = __webpack_require__(12);
  var LinkedList = __webpack_require__(11);
  
  function LGraph(parent, obj2, vGraph) {
    LGraphObject.call(this, vGraph);
    this.estimatedSize = Integer.MIN_VALUE;
    this.margin = LayoutConstants.DEFAULT_GRAPH_MARGIN;
    this.edges = [];
    this.nodes = [];
    this.isConnected = false;
    this.parent = parent;
  
    if (obj2 != null && obj2 instanceof LGraphManager) {
      this.graphManager = obj2;
    } else if (obj2 != null && obj2 instanceof Layout) {
      this.graphManager = obj2.graphManager;
    }
  }
  
  LGraph.prototype = Object.create(LGraphObject.prototype);
  for (var prop in LGraphObject) {
    LGraph[prop] = LGraphObject[prop];
  }
  
  LGraph.prototype.getNodes = function () {
    return this.nodes;
  };
  
  LGraph.prototype.getEdges = function () {
    return this.edges;
  };
  
  LGraph.prototype.getGraphManager = function () {
    return this.graphManager;
  };
  
  LGraph.prototype.getParent = function () {
    return this.parent;
  };
  
  LGraph.prototype.getLeft = function () {
    return this.left;
  };
  
  LGraph.prototype.getRight = function () {
    return this.right;
  };
  
  LGraph.prototype.getTop = function () {
    return this.top;
  };
  
  LGraph.prototype.getBottom = function () {
    return this.bottom;
  };
  
  LGraph.prototype.isConnected = function () {
    return this.isConnected;
  };
  
  LGraph.prototype.add = function (obj1, sourceNode, targetNode) {
    if (sourceNode == null && targetNode == null) {
      var newNode = obj1;
      if (this.graphManager == null) {
        throw "Graph has no graph mgr!";
      }
      if (this.getNodes().indexOf(newNode) > -1) {
        throw "Node already in graph!";
      }
      newNode.owner = this;
      this.getNodes().push(newNode);
  
      return newNode;
    } else {
      var newEdge = obj1;
      if (!(this.getNodes().indexOf(sourceNode) > -1 && this.getNodes().indexOf(targetNode) > -1)) {
        throw "Source or target not in graph!";
      }
  
      if (!(sourceNode.owner == targetNode.owner && sourceNode.owner == this)) {
        throw "Both owners must be this graph!";
      }
  
      if (sourceNode.owner != targetNode.owner) {
        return null;
      }
  
      // set source and target
      newEdge.source = sourceNode;
      newEdge.target = targetNode;
  
      // set as intra-graph edge
      newEdge.isInterGraph = false;
  
      // add to graph edge list
      this.getEdges().push(newEdge);
  
      // add to incidency lists
      sourceNode.edges.push(newEdge);
  
      if (targetNode != sourceNode) {
        targetNode.edges.push(newEdge);
      }
  
      return newEdge;
    }
  };
  
  LGraph.prototype.remove = function (obj) {
    var node = obj;
    if (obj instanceof LNode) {
      if (node == null) {
        throw "Node is null!";
      }
      if (!(node.owner != null && node.owner == this)) {
        throw "Owner graph is invalid!";
      }
      if (this.graphManager == null) {
        throw "Owner graph manager is invalid!";
      }
      // remove incident edges first (make a copy to do it safely)
      var edgesToBeRemoved = node.edges.slice();
      var edge;
      var s = edgesToBeRemoved.length;
      for (var i = 0; i < s; i++) {
        edge = edgesToBeRemoved[i];
  
        if (edge.isInterGraph) {
          this.graphManager.remove(edge);
        } else {
          edge.source.owner.remove(edge);
        }
      }
  
      // now the node itself
      var index = this.nodes.indexOf(node);
      if (index == -1) {
        throw "Node not in owner node list!";
      }
  
      this.nodes.splice(index, 1);
    } else if (obj instanceof LEdge) {
      var edge = obj;
      if (edge == null) {
        throw "Edge is null!";
      }
      if (!(edge.source != null && edge.target != null)) {
        throw "Source and/or target is null!";
      }
      if (!(edge.source.owner != null && edge.target.owner != null && edge.source.owner == this && edge.target.owner == this)) {
        throw "Source and/or target owner is invalid!";
      }
  
      var sourceIndex = edge.source.edges.indexOf(edge);
      var targetIndex = edge.target.edges.indexOf(edge);
      if (!(sourceIndex > -1 && targetIndex > -1)) {
        throw "Source and/or target doesn't know this edge!";
      }
  
      edge.source.edges.splice(sourceIndex, 1);
  
      if (edge.target != edge.source) {
        edge.target.edges.splice(targetIndex, 1);
      }
  
      var index = edge.source.owner.getEdges().indexOf(edge);
      if (index == -1) {
        throw "Not in owner's edge list!";
      }
  
      edge.source.owner.getEdges().splice(index, 1);
    }
  };
  
  LGraph.prototype.updateLeftTop = function () {
    var top = Integer.MAX_VALUE;
    var left = Integer.MAX_VALUE;
    var nodeTop;
    var nodeLeft;
    var margin;
  
    var nodes = this.getNodes();
    var s = nodes.length;
  
    for (var i = 0; i < s; i++) {
      var lNode = nodes[i];
      nodeTop = lNode.getTop();
      nodeLeft = lNode.getLeft();
  
      if (top > nodeTop) {
        top = nodeTop;
      }
  
      if (left > nodeLeft) {
        left = nodeLeft;
      }
    }
  
    // Do we have any nodes in this graph?
    if (top == Integer.MAX_VALUE) {
      return null;
    }
  
    if (nodes[0].getParent().paddingLeft != undefined) {
      margin = nodes[0].getParent().paddingLeft;
    } else {
      margin = this.margin;
    }
  
    this.left = left - margin;
    this.top = top - margin;
  
    // Apply the margins and return the result
    return new Point(this.left, this.top);
  };
  
  LGraph.prototype.updateBounds = function (recursive) {
    // calculate bounds
    var left = Integer.MAX_VALUE;
    var right = -Integer.MAX_VALUE;
    var top = Integer.MAX_VALUE;
    var bottom = -Integer.MAX_VALUE;
    var nodeLeft;
    var nodeRight;
    var nodeTop;
    var nodeBottom;
    var margin;
  
    var nodes = this.nodes;
    var s = nodes.length;
    for (var i = 0; i < s; i++) {
      var lNode = nodes[i];
  
      if (recursive && lNode.child != null) {
        lNode.updateBounds();
      }
      nodeLeft = lNode.getLeft();
      nodeRight = lNode.getRight();
      nodeTop = lNode.getTop();
      nodeBottom = lNode.getBottom();
  
      if (left > nodeLeft) {
        left = nodeLeft;
      }
  
      if (right < nodeRight) {
        right = nodeRight;
      }
  
      if (top > nodeTop) {
        top = nodeTop;
      }
  
      if (bottom < nodeBottom) {
        bottom = nodeBottom;
      }
    }
  
    var boundingRect = new RectangleD(left, top, right - left, bottom - top);
    if (left == Integer.MAX_VALUE) {
      this.left = this.parent.getLeft();
      this.right = this.parent.getRight();
      this.top = this.parent.getTop();
      this.bottom = this.parent.getBottom();
    }
  
    if (nodes[0].getParent().paddingLeft != undefined) {
      margin = nodes[0].getParent().paddingLeft;
    } else {
      margin = this.margin;
    }
  
    this.left = boundingRect.x - margin;
    this.right = boundingRect.x + boundingRect.width + margin;
    this.top = boundingRect.y - margin;
    this.bottom = boundingRect.y + boundingRect.height + margin;
  };
  
  LGraph.calculateBounds = function (nodes) {
    var left = Integer.MAX_VALUE;
    var right = -Integer.MAX_VALUE;
    var top = Integer.MAX_VALUE;
    var bottom = -Integer.MAX_VALUE;
    var nodeLeft;
    var nodeRight;
    var nodeTop;
    var nodeBottom;
  
    var s = nodes.length;
  
    for (var i = 0; i < s; i++) {
      var lNode = nodes[i];
      nodeLeft = lNode.getLeft();
      nodeRight = lNode.getRight();
      nodeTop = lNode.getTop();
      nodeBottom = lNode.getBottom();
  
      if (left > nodeLeft) {
        left = nodeLeft;
      }
  
      if (right < nodeRight) {
        right = nodeRight;
      }
  
      if (top > nodeTop) {
        top = nodeTop;
      }
  
      if (bottom < nodeBottom) {
        bottom = nodeBottom;
      }
    }
  
    var boundingRect = new RectangleD(left, top, right - left, bottom - top);
  
    return boundingRect;
  };
  
  LGraph.prototype.getInclusionTreeDepth = function () {
    if (this == this.graphManager.getRoot()) {
      return 1;
    } else {
      return this.parent.getInclusionTreeDepth();
    }
  };
  
  LGraph.prototype.getEstimatedSize = function () {
    if (this.estimatedSize == Integer.MIN_VALUE) {
      throw "assert failed";
    }
    return this.estimatedSize;
  };
  
  LGraph.prototype.calcEstimatedSize = function () {
    var size = 0;
    var nodes = this.nodes;
    var s = nodes.length;
  
    for (var i = 0; i < s; i++) {
      var lNode = nodes[i];
      size += lNode.calcEstimatedSize();
    }
  
    if (size == 0) {
      this.estimatedSize = LayoutConstants.EMPTY_COMPOUND_NODE_SIZE;
    } else {
      this.estimatedSize = size / Math.sqrt(this.nodes.length);
    }
  
    return this.estimatedSize;
  };
  
  LGraph.prototype.updateConnected = function () {
    var self = this;
    if (this.nodes.length == 0) {
      this.isConnected = true;
      return;
    }
  
    var queue = new LinkedList();
    var visited = new Set();
    var currentNode = this.nodes[0];
    var neighborEdges;
    var currentNeighbor;
    var childrenOfNode = currentNode.withChildren();
    childrenOfNode.forEach(function (node) {
      queue.push(node);
      visited.add(node);
    });
  
    while (queue.length !== 0) {
      currentNode = queue.shift();
  
      // Traverse all neighbors of this node
      neighborEdges = currentNode.getEdges();
      var size = neighborEdges.length;
      for (var i = 0; i < size; i++) {
        var neighborEdge = neighborEdges[i];
        currentNeighbor = neighborEdge.getOtherEndInGraph(currentNode, this);
  
        // Add unvisited neighbors to the list to visit
        if (currentNeighbor != null && !visited.has(currentNeighbor)) {
          var childrenOfNeighbor = currentNeighbor.withChildren();
  
          childrenOfNeighbor.forEach(function (node) {
            queue.push(node);
            visited.add(node);
          });
        }
      }
    }
  
    this.isConnected = false;
  
    if (visited.size >= this.nodes.length) {
      var noOfVisitedInThisGraph = 0;
  
      visited.forEach(function (visitedNode) {
        if (visitedNode.owner == self) {
          noOfVisitedInThisGraph++;
        }
      });
  
      if (noOfVisitedInThisGraph == this.nodes.length) {
        this.isConnected = true;
      }
    }
  };
  
  module.exports = LGraph;
  
  /***/ }),
  /* 7 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var LGraph;
  var LEdge = __webpack_require__(1);
  
  function LGraphManager(layout) {
    LGraph = __webpack_require__(6); // It may be better to initilize this out of this function but it gives an error (Right-hand side of 'instanceof' is not callable) now.
    this.layout = layout;
  
    this.graphs = [];
    this.edges = [];
  }
  
  LGraphManager.prototype.addRoot = function () {
    var ngraph = this.layout.newGraph();
    var nnode = this.layout.newNode(null);
    var root = this.add(ngraph, nnode);
    this.setRootGraph(root);
    return this.rootGraph;
  };
  
  LGraphManager.prototype.add = function (newGraph, parentNode, newEdge, sourceNode, targetNode) {
    //there are just 2 parameters are passed then it adds an LGraph else it adds an LEdge
    if (newEdge == null && sourceNode == null && targetNode == null) {
      if (newGraph == null) {
        throw "Graph is null!";
      }
      if (parentNode == null) {
        throw "Parent node is null!";
      }
      if (this.graphs.indexOf(newGraph) > -1) {
        throw "Graph already in this graph mgr!";
      }
  
      this.graphs.push(newGraph);
  
      if (newGraph.parent != null) {
        throw "Already has a parent!";
      }
      if (parentNode.child != null) {
        throw "Already has a child!";
      }
  
      newGraph.parent = parentNode;
      parentNode.child = newGraph;
  
      return newGraph;
    } else {
      //change the order of the parameters
      targetNode = newEdge;
      sourceNode = parentNode;
      newEdge = newGraph;
      var sourceGraph = sourceNode.getOwner();
      var targetGraph = targetNode.getOwner();
  
      if (!(sourceGraph != null && sourceGraph.getGraphManager() == this)) {
        throw "Source not in this graph mgr!";
      }
      if (!(targetGraph != null && targetGraph.getGraphManager() == this)) {
        throw "Target not in this graph mgr!";
      }
  
      if (sourceGraph == targetGraph) {
        newEdge.isInterGraph = false;
        return sourceGraph.add(newEdge, sourceNode, targetNode);
      } else {
        newEdge.isInterGraph = true;
  
        // set source and target
        newEdge.source = sourceNode;
        newEdge.target = targetNode;
  
        // add edge to inter-graph edge list
        if (this.edges.indexOf(newEdge) > -1) {
          throw "Edge already in inter-graph edge list!";
        }
  
        this.edges.push(newEdge);
  
        // add edge to source and target incidency lists
        if (!(newEdge.source != null && newEdge.target != null)) {
          throw "Edge source and/or target is null!";
        }
  
        if (!(newEdge.source.edges.indexOf(newEdge) == -1 && newEdge.target.edges.indexOf(newEdge) == -1)) {
          throw "Edge already in source and/or target incidency list!";
        }
  
        newEdge.source.edges.push(newEdge);
        newEdge.target.edges.push(newEdge);
  
        return newEdge;
      }
    }
  };
  
  LGraphManager.prototype.remove = function (lObj) {
    if (lObj instanceof LGraph) {
      var graph = lObj;
      if (graph.getGraphManager() != this) {
        throw "Graph not in this graph mgr";
      }
      if (!(graph == this.rootGraph || graph.parent != null && graph.parent.graphManager == this)) {
        throw "Invalid parent node!";
      }
  
      // first the edges (make a copy to do it safely)
      var edgesToBeRemoved = [];
  
      edgesToBeRemoved = edgesToBeRemoved.concat(graph.getEdges());
  
      var edge;
      var s = edgesToBeRemoved.length;
      for (var i = 0; i < s; i++) {
        edge = edgesToBeRemoved[i];
        graph.remove(edge);
      }
  
      // then the nodes (make a copy to do it safely)
      var nodesToBeRemoved = [];
  
      nodesToBeRemoved = nodesToBeRemoved.concat(graph.getNodes());
  
      var node;
      s = nodesToBeRemoved.length;
      for (var i = 0; i < s; i++) {
        node = nodesToBeRemoved[i];
        graph.remove(node);
      }
  
      // check if graph is the root
      if (graph == this.rootGraph) {
        this.setRootGraph(null);
      }
  
      // now remove the graph itself
      var index = this.graphs.indexOf(graph);
      this.graphs.splice(index, 1);
  
      // also reset the parent of the graph
      graph.parent = null;
    } else if (lObj instanceof LEdge) {
      edge = lObj;
      if (edge == null) {
        throw "Edge is null!";
      }
      if (!edge.isInterGraph) {
        throw "Not an inter-graph edge!";
      }
      if (!(edge.source != null && edge.target != null)) {
        throw "Source and/or target is null!";
      }
  
      // remove edge from source and target nodes' incidency lists
  
      if (!(edge.source.edges.indexOf(edge) != -1 && edge.target.edges.indexOf(edge) != -1)) {
        throw "Source and/or target doesn't know this edge!";
      }
  
      var index = edge.source.edges.indexOf(edge);
      edge.source.edges.splice(index, 1);
      index = edge.target.edges.indexOf(edge);
      edge.target.edges.splice(index, 1);
  
      // remove edge from owner graph manager's inter-graph edge list
  
      if (!(edge.source.owner != null && edge.source.owner.getGraphManager() != null)) {
        throw "Edge owner graph or owner graph manager is null!";
      }
      if (edge.source.owner.getGraphManager().edges.indexOf(edge) == -1) {
        throw "Not in owner graph manager's edge list!";
      }
  
      var index = edge.source.owner.getGraphManager().edges.indexOf(edge);
      edge.source.owner.getGraphManager().edges.splice(index, 1);
    }
  };
  
  LGraphManager.prototype.updateBounds = function () {
    this.rootGraph.updateBounds(true);
  };
  
  LGraphManager.prototype.getGraphs = function () {
    return this.graphs;
  };
  
  LGraphManager.prototype.getAllNodes = function () {
    if (this.allNodes == null) {
      var nodeList = [];
      var graphs = this.getGraphs();
      var s = graphs.length;
      for (var i = 0; i < s; i++) {
        nodeList = nodeList.concat(graphs[i].getNodes());
      }
      this.allNodes = nodeList;
    }
    return this.allNodes;
  };
  
  LGraphManager.prototype.resetAllNodes = function () {
    this.allNodes = null;
  };
  
  LGraphManager.prototype.resetAllEdges = function () {
    this.allEdges = null;
  };
  
  LGraphManager.prototype.resetAllNodesToApplyGravitation = function () {
    this.allNodesToApplyGravitation = null;
  };
  
  LGraphManager.prototype.getAllEdges = function () {
    if (this.allEdges == null) {
      var edgeList = [];
      var graphs = this.getGraphs();
      var s = graphs.length;
      for (var i = 0; i < graphs.length; i++) {
        edgeList = edgeList.concat(graphs[i].getEdges());
      }
  
      edgeList = edgeList.concat(this.edges);
  
      this.allEdges = edgeList;
    }
    return this.allEdges;
  };
  
  LGraphManager.prototype.getAllNodesToApplyGravitation = function () {
    return this.allNodesToApplyGravitation;
  };
  
  LGraphManager.prototype.setAllNodesToApplyGravitation = function (nodeList) {
    if (this.allNodesToApplyGravitation != null) {
      throw "assert failed";
    }
  
    this.allNodesToApplyGravitation = nodeList;
  };
  
  LGraphManager.prototype.getRoot = function () {
    return this.rootGraph;
  };
  
  LGraphManager.prototype.setRootGraph = function (graph) {
    if (graph.getGraphManager() != this) {
      throw "Root not in this graph mgr!";
    }
  
    this.rootGraph = graph;
    // root graph must have a root node associated with it for convenience
    if (graph.parent == null) {
      graph.parent = this.layout.newNode("Root node");
    }
  };
  
  LGraphManager.prototype.getLayout = function () {
    return this.layout;
  };
  
  LGraphManager.prototype.isOneAncestorOfOther = function (firstNode, secondNode) {
    if (!(firstNode != null && secondNode != null)) {
      throw "assert failed";
    }
  
    if (firstNode == secondNode) {
      return true;
    }
    // Is second node an ancestor of the first one?
    var ownerGraph = firstNode.getOwner();
    var parentNode;
  
    do {
      parentNode = ownerGraph.getParent();
  
      if (parentNode == null) {
        break;
      }
  
      if (parentNode == secondNode) {
        return true;
      }
  
      ownerGraph = parentNode.getOwner();
      if (ownerGraph == null) {
        break;
      }
    } while (true);
    // Is first node an ancestor of the second one?
    ownerGraph = secondNode.getOwner();
  
    do {
      parentNode = ownerGraph.getParent();
  
      if (parentNode == null) {
        break;
      }
  
      if (parentNode == firstNode) {
        return true;
      }
  
      ownerGraph = parentNode.getOwner();
      if (ownerGraph == null) {
        break;
      }
    } while (true);
  
    return false;
  };
  
  LGraphManager.prototype.calcLowestCommonAncestors = function () {
    var edge;
    var sourceNode;
    var targetNode;
    var sourceAncestorGraph;
    var targetAncestorGraph;
  
    var edges = this.getAllEdges();
    var s = edges.length;
    for (var i = 0; i < s; i++) {
      edge = edges[i];
  
      sourceNode = edge.source;
      targetNode = edge.target;
      edge.lca = null;
      edge.sourceInLca = sourceNode;
      edge.targetInLca = targetNode;
  
      if (sourceNode == targetNode) {
        edge.lca = sourceNode.getOwner();
        continue;
      }
  
      sourceAncestorGraph = sourceNode.getOwner();
  
      while (edge.lca == null) {
        edge.targetInLca = targetNode;
        targetAncestorGraph = targetNode.getOwner();
  
        while (edge.lca == null) {
          if (targetAncestorGraph == sourceAncestorGraph) {
            edge.lca = targetAncestorGraph;
            break;
          }
  
          if (targetAncestorGraph == this.rootGraph) {
            break;
          }
  
          if (edge.lca != null) {
            throw "assert failed";
          }
          edge.targetInLca = targetAncestorGraph.getParent();
          targetAncestorGraph = edge.targetInLca.getOwner();
        }
  
        if (sourceAncestorGraph == this.rootGraph) {
          break;
        }
  
        if (edge.lca == null) {
          edge.sourceInLca = sourceAncestorGraph.getParent();
          sourceAncestorGraph = edge.sourceInLca.getOwner();
        }
      }
  
      if (edge.lca == null) {
        throw "assert failed";
      }
    }
  };
  
  LGraphManager.prototype.calcLowestCommonAncestor = function (firstNode, secondNode) {
    if (firstNode == secondNode) {
      return firstNode.getOwner();
    }
    var firstOwnerGraph = firstNode.getOwner();
  
    do {
      if (firstOwnerGraph == null) {
        break;
      }
      var secondOwnerGraph = secondNode.getOwner();
  
      do {
        if (secondOwnerGraph == null) {
          break;
        }
  
        if (secondOwnerGraph == firstOwnerGraph) {
          return secondOwnerGraph;
        }
        secondOwnerGraph = secondOwnerGraph.getParent().getOwner();
      } while (true);
  
      firstOwnerGraph = firstOwnerGraph.getParent().getOwner();
    } while (true);
  
    return firstOwnerGraph;
  };
  
  LGraphManager.prototype.calcInclusionTreeDepths = function (graph, depth) {
    if (graph == null && depth == null) {
      graph = this.rootGraph;
      depth = 1;
    }
    var node;
  
    var nodes = graph.getNodes();
    var s = nodes.length;
    for (var i = 0; i < s; i++) {
      node = nodes[i];
      node.inclusionTreeDepth = depth;
  
      if (node.child != null) {
        this.calcInclusionTreeDepths(node.child, depth + 1);
      }
    }
  };
  
  LGraphManager.prototype.includesInvalidEdge = function () {
    var edge;
    var edgesToRemove = [];
  
    var s = this.edges.length;
    for (var i = 0; i < s; i++) {
      edge = this.edges[i];
  
      if (this.isOneAncestorOfOther(edge.source, edge.target)) {
        edgesToRemove.push(edge);
      }
    }
  
    // Remove invalid edges from graph manager
    for (var i = 0; i < edgesToRemove.length; i++) {
      this.remove(edgesToRemove[i]);
    }
  
    // Invalid edges are cleared, so return false
    return false;
  };
  
  module.exports = LGraphManager;
  
  /***/ }),
  /* 8 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * This class maintains a list of static geometry related utility methods.
   *
   *
   * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
   */
  
  var Point = __webpack_require__(12);
  
  function IGeometry() {}
  
  /**
   * This method calculates *half* the amount in x and y directions of the two
   * input rectangles needed to separate them keeping their respective
   * positioning, and returns the result in the input array. An input
   * separation buffer added to the amount in both directions. We assume that
   * the two rectangles do intersect.
   */
  IGeometry.calcSeparationAmount = function (rectA, rectB, overlapAmount, separationBuffer) {
    if (!rectA.intersects(rectB)) {
      throw "assert failed";
    }
  
    var directions = new Array(2);
  
    this.decideDirectionsForOverlappingNodes(rectA, rectB, directions);
  
    overlapAmount[0] = Math.min(rectA.getRight(), rectB.getRight()) - Math.max(rectA.x, rectB.x);
    overlapAmount[1] = Math.min(rectA.getBottom(), rectB.getBottom()) - Math.max(rectA.y, rectB.y);
  
    // update the overlapping amounts for the following cases:
    if (rectA.getX() <= rectB.getX() && rectA.getRight() >= rectB.getRight()) {
      /* Case x.1:
      *
      * rectA
      * 	|                       |
      * 	|        _________      |
      * 	|        |       |      |
      * 	|________|_______|______|
      * 			 |       |
      *           |       |
      *        rectB
      */
      overlapAmount[0] += Math.min(rectB.getX() - rectA.getX(), rectA.getRight() - rectB.getRight());
    } else if (rectB.getX() <= rectA.getX() && rectB.getRight() >= rectA.getRight()) {
      /* Case x.2:
      *
      * rectB
      * 	|                       |
      * 	|        _________      |
      * 	|        |       |      |
      * 	|________|_______|______|
      * 			 |       |
      *           |       |
      *        rectA
      */
      overlapAmount[0] += Math.min(rectA.getX() - rectB.getX(), rectB.getRight() - rectA.getRight());
    }
    if (rectA.getY() <= rectB.getY() && rectA.getBottom() >= rectB.getBottom()) {
      /* Case y.1:
       *          ________ rectA
       *         |
       *         |
       *   ______|____  rectB
       *         |    |
       *         |    |
       *   ______|____|
       *         |
       *         |
       *         |________
       *
       */
      overlapAmount[1] += Math.min(rectB.getY() - rectA.getY(), rectA.getBottom() - rectB.getBottom());
    } else if (rectB.getY() <= rectA.getY() && rectB.getBottom() >= rectA.getBottom()) {
      /* Case y.2:
      *          ________ rectB
      *         |
      *         |
      *   ______|____  rectA
      *         |    |
      *         |    |
      *   ______|____|
      *         |
      *         |
      *         |________
      *
      */
      overlapAmount[1] += Math.min(rectA.getY() - rectB.getY(), rectB.getBottom() - rectA.getBottom());
    }
  
    // find slope of the line passes two centers
    var slope = Math.abs((rectB.getCenterY() - rectA.getCenterY()) / (rectB.getCenterX() - rectA.getCenterX()));
    // if centers are overlapped
    if (rectB.getCenterY() === rectA.getCenterY() && rectB.getCenterX() === rectA.getCenterX()) {
      // assume the slope is 1 (45 degree)
      slope = 1.0;
    }
  
    var moveByY = slope * overlapAmount[0];
    var moveByX = overlapAmount[1] / slope;
    if (overlapAmount[0] < moveByX) {
      moveByX = overlapAmount[0];
    } else {
      moveByY = overlapAmount[1];
    }
    // return half the amount so that if each rectangle is moved by these
    // amounts in opposite directions, overlap will be resolved
    overlapAmount[0] = -1 * directions[0] * (moveByX / 2 + separationBuffer);
    overlapAmount[1] = -1 * directions[1] * (moveByY / 2 + separationBuffer);
  };
  
  /**
   * This method decides the separation direction of overlapping nodes
   *
   * if directions[0] = -1, then rectA goes left
   * if directions[0] = 1,  then rectA goes right
   * if directions[1] = -1, then rectA goes up
   * if directions[1] = 1,  then rectA goes down
   */
  IGeometry.decideDirectionsForOverlappingNodes = function (rectA, rectB, directions) {
    if (rectA.getCenterX() < rectB.getCenterX()) {
      directions[0] = -1;
    } else {
      directions[0] = 1;
    }
  
    if (rectA.getCenterY() < rectB.getCenterY()) {
      directions[1] = -1;
    } else {
      directions[1] = 1;
    }
  };
  
  /**
   * This method calculates the intersection (clipping) points of the two
   * input rectangles with line segment defined by the centers of these two
   * rectangles. The clipping points are saved in the input double array and
   * whether or not the two rectangles overlap is returned.
   */
  IGeometry.getIntersection2 = function (rectA, rectB, result) {
    //result[0-1] will contain clipPoint of rectA, result[2-3] will contain clipPoint of rectB
    var p1x = rectA.getCenterX();
    var p1y = rectA.getCenterY();
    var p2x = rectB.getCenterX();
    var p2y = rectB.getCenterY();
  
    //if two rectangles intersect, then clipping points are centers
    if (rectA.intersects(rectB)) {
      result[0] = p1x;
      result[1] = p1y;
      result[2] = p2x;
      result[3] = p2y;
      return true;
    }
    //variables for rectA
    var topLeftAx = rectA.getX();
    var topLeftAy = rectA.getY();
    var topRightAx = rectA.getRight();
    var bottomLeftAx = rectA.getX();
    var bottomLeftAy = rectA.getBottom();
    var bottomRightAx = rectA.getRight();
    var halfWidthA = rectA.getWidthHalf();
    var halfHeightA = rectA.getHeightHalf();
    //variables for rectB
    var topLeftBx = rectB.getX();
    var topLeftBy = rectB.getY();
    var topRightBx = rectB.getRight();
    var bottomLeftBx = rectB.getX();
    var bottomLeftBy = rectB.getBottom();
    var bottomRightBx = rectB.getRight();
    var halfWidthB = rectB.getWidthHalf();
    var halfHeightB = rectB.getHeightHalf();
  
    //flag whether clipping points are found
    var clipPointAFound = false;
    var clipPointBFound = false;
  
    // line is vertical
    if (p1x === p2x) {
      if (p1y > p2y) {
        result[0] = p1x;
        result[1] = topLeftAy;
        result[2] = p2x;
        result[3] = bottomLeftBy;
        return false;
      } else if (p1y < p2y) {
        result[0] = p1x;
        result[1] = bottomLeftAy;
        result[2] = p2x;
        result[3] = topLeftBy;
        return false;
      } else {
        //not line, return null;
      }
    }
    // line is horizontal
    else if (p1y === p2y) {
        if (p1x > p2x) {
          result[0] = topLeftAx;
          result[1] = p1y;
          result[2] = topRightBx;
          result[3] = p2y;
          return false;
        } else if (p1x < p2x) {
          result[0] = topRightAx;
          result[1] = p1y;
          result[2] = topLeftBx;
          result[3] = p2y;
          return false;
        } else {
          //not valid line, return null;
        }
      } else {
        //slopes of rectA's and rectB's diagonals
        var slopeA = rectA.height / rectA.width;
        var slopeB = rectB.height / rectB.width;
  
        //slope of line between center of rectA and center of rectB
        var slopePrime = (p2y - p1y) / (p2x - p1x);
        var cardinalDirectionA = void 0;
        var cardinalDirectionB = void 0;
        var tempPointAx = void 0;
        var tempPointAy = void 0;
        var tempPointBx = void 0;
        var tempPointBy = void 0;
  
        //determine whether clipping point is the corner of nodeA
        if (-slopeA === slopePrime) {
          if (p1x > p2x) {
            result[0] = bottomLeftAx;
            result[1] = bottomLeftAy;
            clipPointAFound = true;
          } else {
            result[0] = topRightAx;
            result[1] = topLeftAy;
            clipPointAFound = true;
          }
        } else if (slopeA === slopePrime) {
          if (p1x > p2x) {
            result[0] = topLeftAx;
            result[1] = topLeftAy;
            clipPointAFound = true;
          } else {
            result[0] = bottomRightAx;
            result[1] = bottomLeftAy;
            clipPointAFound = true;
          }
        }
  
        //determine whether clipping point is the corner of nodeB
        if (-slopeB === slopePrime) {
          if (p2x > p1x) {
            result[2] = bottomLeftBx;
            result[3] = bottomLeftBy;
            clipPointBFound = true;
          } else {
            result[2] = topRightBx;
            result[3] = topLeftBy;
            clipPointBFound = true;
          }
        } else if (slopeB === slopePrime) {
          if (p2x > p1x) {
            result[2] = topLeftBx;
            result[3] = topLeftBy;
            clipPointBFound = true;
          } else {
            result[2] = bottomRightBx;
            result[3] = bottomLeftBy;
            clipPointBFound = true;
          }
        }
  
        //if both clipping points are corners
        if (clipPointAFound && clipPointBFound) {
          return false;
        }
  
        //determine Cardinal Direction of rectangles
        if (p1x > p2x) {
          if (p1y > p2y) {
            cardinalDirectionA = this.getCardinalDirection(slopeA, slopePrime, 4);
            cardinalDirectionB = this.getCardinalDirection(slopeB, slopePrime, 2);
          } else {
            cardinalDirectionA = this.getCardinalDirection(-slopeA, slopePrime, 3);
            cardinalDirectionB = this.getCardinalDirection(-slopeB, slopePrime, 1);
          }
        } else {
          if (p1y > p2y) {
            cardinalDirectionA = this.getCardinalDirection(-slopeA, slopePrime, 1);
            cardinalDirectionB = this.getCardinalDirection(-slopeB, slopePrime, 3);
          } else {
            cardinalDirectionA = this.getCardinalDirection(slopeA, slopePrime, 2);
            cardinalDirectionB = this.getCardinalDirection(slopeB, slopePrime, 4);
          }
        }
        //calculate clipping Point if it is not found before
        if (!clipPointAFound) {
          switch (cardinalDirectionA) {
            case 1:
              tempPointAy = topLeftAy;
              tempPointAx = p1x + -halfHeightA / slopePrime;
              result[0] = tempPointAx;
              result[1] = tempPointAy;
              break;
            case 2:
              tempPointAx = bottomRightAx;
              tempPointAy = p1y + halfWidthA * slopePrime;
              result[0] = tempPointAx;
              result[1] = tempPointAy;
              break;
            case 3:
              tempPointAy = bottomLeftAy;
              tempPointAx = p1x + halfHeightA / slopePrime;
              result[0] = tempPointAx;
              result[1] = tempPointAy;
              break;
            case 4:
              tempPointAx = bottomLeftAx;
              tempPointAy = p1y + -halfWidthA * slopePrime;
              result[0] = tempPointAx;
              result[1] = tempPointAy;
              break;
          }
        }
        if (!clipPointBFound) {
          switch (cardinalDirectionB) {
            case 1:
              tempPointBy = topLeftBy;
              tempPointBx = p2x + -halfHeightB / slopePrime;
              result[2] = tempPointBx;
              result[3] = tempPointBy;
              break;
            case 2:
              tempPointBx = bottomRightBx;
              tempPointBy = p2y + halfWidthB * slopePrime;
              result[2] = tempPointBx;
              result[3] = tempPointBy;
              break;
            case 3:
              tempPointBy = bottomLeftBy;
              tempPointBx = p2x + halfHeightB / slopePrime;
              result[2] = tempPointBx;
              result[3] = tempPointBy;
              break;
            case 4:
              tempPointBx = bottomLeftBx;
              tempPointBy = p2y + -halfWidthB * slopePrime;
              result[2] = tempPointBx;
              result[3] = tempPointBy;
              break;
          }
        }
      }
    return false;
  };
  
  /**
   * This method returns in which cardinal direction does input point stays
   * 1: North
   * 2: East
   * 3: South
   * 4: West
   */
  IGeometry.getCardinalDirection = function (slope, slopePrime, line) {
    if (slope > slopePrime) {
      return line;
    } else {
      return 1 + line % 4;
    }
  };
  
  /**
   * This method calculates the intersection of the two lines defined by
   * point pairs (s1,s2) and (f1,f2).
   */
  IGeometry.getIntersection = function (s1, s2, f1, f2) {
    if (f2 == null) {
      return this.getIntersection2(s1, s2, f1);
    }
  
    var x1 = s1.x;
    var y1 = s1.y;
    var x2 = s2.x;
    var y2 = s2.y;
    var x3 = f1.x;
    var y3 = f1.y;
    var x4 = f2.x;
    var y4 = f2.y;
    var x = void 0,
        y = void 0; // intersection point
    var a1 = void 0,
        a2 = void 0,
        b1 = void 0,
        b2 = void 0,
        c1 = void 0,
        c2 = void 0; // coefficients of line eqns.
    var denom = void 0;
  
    a1 = y2 - y1;
    b1 = x1 - x2;
    c1 = x2 * y1 - x1 * y2; // { a1*x + b1*y + c1 = 0 is line 1 }
  
    a2 = y4 - y3;
    b2 = x3 - x4;
    c2 = x4 * y3 - x3 * y4; // { a2*x + b2*y + c2 = 0 is line 2 }
  
    denom = a1 * b2 - a2 * b1;
  
    if (denom === 0) {
      return null;
    }
  
    x = (b1 * c2 - b2 * c1) / denom;
    y = (a2 * c1 - a1 * c2) / denom;
  
    return new Point(x, y);
  };
  
  /**
   * This method finds and returns the angle of the vector from the + x-axis
   * in clockwise direction (compatible w/ Java coordinate system!).
   */
  IGeometry.angleOfVector = function (Cx, Cy, Nx, Ny) {
    var C_angle = void 0;
  
    if (Cx !== Nx) {
      C_angle = Math.atan((Ny - Cy) / (Nx - Cx));
  
      if (Nx < Cx) {
        C_angle += Math.PI;
      } else if (Ny < Cy) {
        C_angle += this.TWO_PI;
      }
    } else if (Ny < Cy) {
      C_angle = this.ONE_AND_HALF_PI; // 270 degrees
    } else {
      C_angle = this.HALF_PI; // 90 degrees
    }
  
    return C_angle;
  };
  
  /**
   * This method checks whether the given two line segments (one with point
   * p1 and p2, the other with point p3 and p4) intersect at a point other
   * than these points.
   */
  IGeometry.doIntersect = function (p1, p2, p3, p4) {
    var a = p1.x;
    var b = p1.y;
    var c = p2.x;
    var d = p2.y;
    var p = p3.x;
    var q = p3.y;
    var r = p4.x;
    var s = p4.y;
    var det = (c - a) * (s - q) - (r - p) * (d - b);
  
    if (det === 0) {
      return false;
    } else {
      var lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
      var gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
      return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
    }
  };
  
  /**
   * This method checks and calculates the intersection of 
   * a line segment and a circle.
   */
  IGeometry.findCircleLineIntersections = function (Ex, Ey, Lx, Ly, Cx, Cy, r) {
  
    // E is the starting point of the ray,
    // L is the end point of the ray,
    // C is the center of sphere you're testing against
    // r is the radius of that sphere
  
    // Compute:
    // d = L - E ( Direction vector of ray, from start to end )
    // f = E - C ( Vector from center sphere to ray start )
  
    // Then the intersection is found by..
    // P = E + t * d
    // This is a parametric equation:
    // Px = Ex + tdx
    // Py = Ey + tdy
  
    // get a, b, c values
    var a = (Lx - Ex) * (Lx - Ex) + (Ly - Ey) * (Ly - Ey);
    var b = 2 * ((Ex - Cx) * (Lx - Ex) + (Ey - Cy) * (Ly - Ey));
    var c = (Ex - Cx) * (Ex - Cx) + (Ey - Cy) * (Ey - Cy) - r * r;
  
    // get discriminant
    var disc = b * b - 4 * a * c;
    if (disc >= 0) {
      // insert into quadratic formula
      var t1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var t2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var intersections = null;
      if (t1 >= 0 && t1 <= 1) {
        // t1 is the intersection, and it's closer than t2
        // (since t1 uses -b - discriminant)
        // Impale, Poke
        return [t1];
      }
  
      // here t1 didn't intersect so we are either started
      // inside the sphere or completely past it
      if (t2 >= 0 && t2 <= 1) {
        // ExitWound
        return [t2];
      }
  
      return intersections;
    } else return null;
  };
  
  // -----------------------------------------------------------------------------
  // Section: Class Constants
  // -----------------------------------------------------------------------------
  /**
   * Some useful pre-calculated constants
   */
  IGeometry.HALF_PI = 0.5 * Math.PI;
  IGeometry.ONE_AND_HALF_PI = 1.5 * Math.PI;
  IGeometry.TWO_PI = 2.0 * Math.PI;
  IGeometry.THREE_PI = 3.0 * Math.PI;
  
  module.exports = IGeometry;
  
  /***/ }),
  /* 9 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  function IMath() {}
  
  /**
   * This method returns the sign of the input value.
   */
  IMath.sign = function (value) {
    if (value > 0) {
      return 1;
    } else if (value < 0) {
      return -1;
    } else {
      return 0;
    }
  };
  
  IMath.floor = function (value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  };
  
  IMath.ceil = function (value) {
    return value < 0 ? Math.floor(value) : Math.ceil(value);
  };
  
  module.exports = IMath;
  
  /***/ }),
  /* 10 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  function Integer() {}
  
  Integer.MAX_VALUE = 2147483647;
  Integer.MIN_VALUE = -2147483648;
  
  module.exports = Integer;
  
  /***/ }),
  /* 11 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  var nodeFrom = function nodeFrom(value) {
    return { value: value, next: null, prev: null };
  };
  
  var add = function add(prev, node, next, list) {
    if (prev !== null) {
      prev.next = node;
    } else {
      list.head = node;
    }
  
    if (next !== null) {
      next.prev = node;
    } else {
      list.tail = node;
    }
  
    node.prev = prev;
    node.next = next;
  
    list.length++;
  
    return node;
  };
  
  var _remove = function _remove(node, list) {
    var prev = node.prev,
        next = node.next;
  
  
    if (prev !== null) {
      prev.next = next;
    } else {
      list.head = next;
    }
  
    if (next !== null) {
      next.prev = prev;
    } else {
      list.tail = prev;
    }
  
    node.prev = node.next = null;
  
    list.length--;
  
    return node;
  };
  
  var LinkedList = function () {
    function LinkedList(vals) {
      var _this = this;
  
      _classCallCheck(this, LinkedList);
  
      this.length = 0;
      this.head = null;
      this.tail = null;
  
      if (vals != null) {
        vals.forEach(function (v) {
          return _this.push(v);
        });
      }
    }
  
    _createClass(LinkedList, [{
      key: "size",
      value: function size() {
        return this.length;
      }
    }, {
      key: "insertBefore",
      value: function insertBefore(val, otherNode) {
        return add(otherNode.prev, nodeFrom(val), otherNode, this);
      }
    }, {
      key: "insertAfter",
      value: function insertAfter(val, otherNode) {
        return add(otherNode, nodeFrom(val), otherNode.next, this);
      }
    }, {
      key: "insertNodeBefore",
      value: function insertNodeBefore(newNode, otherNode) {
        return add(otherNode.prev, newNode, otherNode, this);
      }
    }, {
      key: "insertNodeAfter",
      value: function insertNodeAfter(newNode, otherNode) {
        return add(otherNode, newNode, otherNode.next, this);
      }
    }, {
      key: "push",
      value: function push(val) {
        return add(this.tail, nodeFrom(val), null, this);
      }
    }, {
      key: "unshift",
      value: function unshift(val) {
        return add(null, nodeFrom(val), this.head, this);
      }
    }, {
      key: "remove",
      value: function remove(node) {
        return _remove(node, this);
      }
    }, {
      key: "pop",
      value: function pop() {
        return _remove(this.tail, this).value;
      }
    }, {
      key: "popNode",
      value: function popNode() {
        return _remove(this.tail, this);
      }
    }, {
      key: "shift",
      value: function shift() {
        return _remove(this.head, this).value;
      }
    }, {
      key: "shiftNode",
      value: function shiftNode() {
        return _remove(this.head, this);
      }
    }, {
      key: "get_object_at",
      value: function get_object_at(index) {
        if (index <= this.length()) {
          var i = 1;
          var current = this.head;
          while (i < index) {
            current = current.next;
            i++;
          }
          return current.value;
        }
      }
    }, {
      key: "set_object_at",
      value: function set_object_at(index, value) {
        if (index <= this.length()) {
          var i = 1;
          var current = this.head;
          while (i < index) {
            current = current.next;
            i++;
          }
          current.value = value;
        }
      }
    }]);
  
    return LinkedList;
  }();
  
  module.exports = LinkedList;
  
  /***/ }),
  /* 12 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /*
   *This class is the javascript implementation of the Point.java class in jdk
   */
  function Point(x, y, p) {
    this.x = null;
    this.y = null;
    if (x == null && y == null && p == null) {
      this.x = 0;
      this.y = 0;
    } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
      this.x = x;
      this.y = y;
    } else if (x.constructor.name == 'Point' && y == null && p == null) {
      p = x;
      this.x = p.x;
      this.y = p.y;
    }
  }
  
  Point.prototype.getX = function () {
    return this.x;
  };
  
  Point.prototype.getY = function () {
    return this.y;
  };
  
  Point.prototype.getLocation = function () {
    return new Point(this.x, this.y);
  };
  
  Point.prototype.setLocation = function (x, y, p) {
    if (x.constructor.name == 'Point' && y == null && p == null) {
      p = x;
      this.setLocation(p.x, p.y);
    } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
      //if both parameters are integer just move (x,y) location
      if (parseInt(x) == x && parseInt(y) == y) {
        this.move(x, y);
      } else {
        this.x = Math.floor(x + 0.5);
        this.y = Math.floor(y + 0.5);
      }
    }
  };
  
  Point.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
  };
  
  Point.prototype.translate = function (dx, dy) {
    this.x += dx;
    this.y += dy;
  };
  
  Point.prototype.equals = function (obj) {
    if (obj.constructor.name == "Point") {
      var pt = obj;
      return this.x == pt.x && this.y == pt.y;
    }
    return this == obj;
  };
  
  Point.prototype.toString = function () {
    return new Point().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
  };
  
  module.exports = Point;
  
  /***/ }),
  /* 13 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  function RectangleD(x, y, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  
    if (x != null && y != null && width != null && height != null) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  }
  
  RectangleD.prototype.getX = function () {
    return this.x;
  };
  
  RectangleD.prototype.setX = function (x) {
    this.x = x;
  };
  
  RectangleD.prototype.getY = function () {
    return this.y;
  };
  
  RectangleD.prototype.setY = function (y) {
    this.y = y;
  };
  
  RectangleD.prototype.getWidth = function () {
    return this.width;
  };
  
  RectangleD.prototype.setWidth = function (width) {
    this.width = width;
  };
  
  RectangleD.prototype.getHeight = function () {
    return this.height;
  };
  
  RectangleD.prototype.setHeight = function (height) {
    this.height = height;
  };
  
  RectangleD.prototype.getRight = function () {
    return this.x + this.width;
  };
  
  RectangleD.prototype.getBottom = function () {
    return this.y + this.height;
  };
  
  RectangleD.prototype.intersects = function (a) {
    if (this.getRight() < a.x) {
      return false;
    }
  
    if (this.getBottom() < a.y) {
      return false;
    }
  
    if (a.getRight() < this.x) {
      return false;
    }
  
    if (a.getBottom() < this.y) {
      return false;
    }
  
    return true;
  };
  
  RectangleD.prototype.getCenterX = function () {
    return this.x + this.width / 2;
  };
  
  RectangleD.prototype.getMinX = function () {
    return this.getX();
  };
  
  RectangleD.prototype.getMaxX = function () {
    return this.getX() + this.width;
  };
  
  RectangleD.prototype.getCenterY = function () {
    return this.y + this.height / 2;
  };
  
  RectangleD.prototype.getMinY = function () {
    return this.getY();
  };
  
  RectangleD.prototype.getMaxY = function () {
    return this.getY() + this.height;
  };
  
  RectangleD.prototype.getWidthHalf = function () {
    return this.width / 2;
  };
  
  RectangleD.prototype.getHeightHalf = function () {
    return this.height / 2;
  };
  
  module.exports = RectangleD;
  
  /***/ }),
  /* 14 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
  
  function UniqueIDGeneretor() {}
  
  UniqueIDGeneretor.lastID = 0;
  
  UniqueIDGeneretor.createID = function (obj) {
    if (UniqueIDGeneretor.isPrimitive(obj)) {
      return obj;
    }
    if (obj.uniqueID != null) {
      return obj.uniqueID;
    }
    obj.uniqueID = UniqueIDGeneretor.getString();
    UniqueIDGeneretor.lastID++;
    return obj.uniqueID;
  };
  
  UniqueIDGeneretor.getString = function (id) {
    if (id == null) id = UniqueIDGeneretor.lastID;
    return "Object#" + id + "";
  };
  
  UniqueIDGeneretor.isPrimitive = function (arg) {
    var type = typeof arg === "undefined" ? "undefined" : _typeof(arg);
    return arg == null || type != "object" && type != "function";
  };
  
  module.exports = UniqueIDGeneretor;
  
  /***/ }),
  /* 15 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
  
  var LayoutConstants = __webpack_require__(0);
  var LGraphManager = __webpack_require__(7);
  var LNode = __webpack_require__(3);
  var LEdge = __webpack_require__(1);
  var LGraph = __webpack_require__(6);
  var PointD = __webpack_require__(5);
  var Transform = __webpack_require__(17);
  var Emitter = __webpack_require__(29);
  
  function Layout(isRemoteUse) {
    Emitter.call(this);
  
    //Layout Quality: 0:draft, 1:default, 2:proof
    this.layoutQuality = LayoutConstants.QUALITY;
    //Whether layout should create bendpoints as needed or not
    this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
    //Whether layout should be incremental or not
    this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
    //Whether we animate from before to after layout node positions
    this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
    //Whether we animate the layout process or not
    this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
    //Number iterations that should be done between two successive animations
    this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
    /**
     * Whether or not leaf nodes (non-compound nodes) are of uniform sizes. When
     * they are, both spring and repulsion forces between two leaf nodes can be
     * calculated without the expensive clipping point calculations, resulting
     * in major speed-up.
     */
    this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
    /**
     * This is used for creation of bendpoints by using dummy nodes and edges.
     * Maps an LEdge to its dummy bendpoint path.
     */
    this.edgeToDummyNodes = new Map();
    this.graphManager = new LGraphManager(this);
    this.isLayoutFinished = false;
    this.isSubLayout = false;
    this.isRemoteUse = false;
  
    if (isRemoteUse != null) {
      this.isRemoteUse = isRemoteUse;
    }
  }
  
  Layout.RANDOM_SEED = 1;
  
  Layout.prototype = Object.create(Emitter.prototype);
  
  Layout.prototype.getGraphManager = function () {
    return this.graphManager;
  };
  
  Layout.prototype.getAllNodes = function () {
    return this.graphManager.getAllNodes();
  };
  
  Layout.prototype.getAllEdges = function () {
    return this.graphManager.getAllEdges();
  };
  
  Layout.prototype.getAllNodesToApplyGravitation = function () {
    return this.graphManager.getAllNodesToApplyGravitation();
  };
  
  Layout.prototype.newGraphManager = function () {
    var gm = new LGraphManager(this);
    this.graphManager = gm;
    return gm;
  };
  
  Layout.prototype.newGraph = function (vGraph) {
    return new LGraph(null, this.graphManager, vGraph);
  };
  
  Layout.prototype.newNode = function (vNode) {
    return new LNode(this.graphManager, vNode);
  };
  
  Layout.prototype.newEdge = function (vEdge) {
    return new LEdge(null, null, vEdge);
  };
  
  Layout.prototype.checkLayoutSuccess = function () {
    return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
  };
  
  Layout.prototype.runLayout = function () {
    this.isLayoutFinished = false;
  
    if (this.tilingPreLayout) {
      this.tilingPreLayout();
    }
  
    this.initParameters();
    var isLayoutSuccessfull;
  
    if (this.checkLayoutSuccess()) {
      isLayoutSuccessfull = false;
    } else {
      isLayoutSuccessfull = this.layout();
    }
  
    if (LayoutConstants.ANIMATE === 'during') {
      // If this is a 'during' layout animation. Layout is not finished yet. 
      // We need to perform these in index.js when layout is really finished.
      return false;
    }
  
    if (isLayoutSuccessfull) {
      if (!this.isSubLayout) {
        this.doPostLayout();
      }
    }
  
    if (this.tilingPostLayout) {
      this.tilingPostLayout();
    }
  
    this.isLayoutFinished = true;
  
    return isLayoutSuccessfull;
  };
  
  /**
   * This method performs the operations required after layout.
   */
  Layout.prototype.doPostLayout = function () {
    //assert !isSubLayout : "Should not be called on sub-layout!";
    // Propagate geometric changes to v-level objects
    if (!this.incremental) {
      this.transform();
    }
    this.update();
  };
  
  /**
   * This method updates the geometry of the target graph according to
   * calculated layout.
   */
  Layout.prototype.update2 = function () {
    // update bend points
    if (this.createBendsAsNeeded) {
      this.createBendpointsFromDummyNodes();
  
      // reset all edges, since the topology has changed
      this.graphManager.resetAllEdges();
    }
  
    // perform edge, node and root updates if layout is not called
    // remotely
    if (!this.isRemoteUse) {
      // update all edges
      var edge;
      var allEdges = this.graphManager.getAllEdges();
      for (var i = 0; i < allEdges.length; i++) {
        edge = allEdges[i];
        //      this.update(edge);
      }
  
      // recursively update nodes
      var node;
      var nodes = this.graphManager.getRoot().getNodes();
      for (var i = 0; i < nodes.length; i++) {
        node = nodes[i];
        //      this.update(node);
      }
  
      // update root graph
      this.update(this.graphManager.getRoot());
    }
  };
  
  Layout.prototype.update = function (obj) {
    if (obj == null) {
      this.update2();
    } else if (obj instanceof LNode) {
      var node = obj;
      if (node.getChild() != null) {
        // since node is compound, recursively update child nodes
        var nodes = node.getChild().getNodes();
        for (var i = 0; i < nodes.length; i++) {
          update(nodes[i]);
        }
      }
  
      // if the l-level node is associated with a v-level graph object,
      // then it is assumed that the v-level node implements the
      // interface Updatable.
      if (node.vGraphObject != null) {
        // cast to Updatable without any type check
        var vNode = node.vGraphObject;
  
        // call the update method of the interface
        vNode.update(node);
      }
    } else if (obj instanceof LEdge) {
      var edge = obj;
      // if the l-level edge is associated with a v-level graph object,
      // then it is assumed that the v-level edge implements the
      // interface Updatable.
  
      if (edge.vGraphObject != null) {
        // cast to Updatable without any type check
        var vEdge = edge.vGraphObject;
  
        // call the update method of the interface
        vEdge.update(edge);
      }
    } else if (obj instanceof LGraph) {
      var graph = obj;
      // if the l-level graph is associated with a v-level graph object,
      // then it is assumed that the v-level object implements the
      // interface Updatable.
  
      if (graph.vGraphObject != null) {
        // cast to Updatable without any type check
        var vGraph = graph.vGraphObject;
  
        // call the update method of the interface
        vGraph.update(graph);
      }
    }
  };
  
  /**
   * This method is used to set all layout parameters to default values
   * determined at compile time.
   */
  Layout.prototype.initParameters = function () {
    if (!this.isSubLayout) {
      this.layoutQuality = LayoutConstants.QUALITY;
      this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
      this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
      this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
      this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
      this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
      this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
    }
  
    if (this.animationDuringLayout) {
      this.animationOnLayout = false;
    }
  };
  
  Layout.prototype.transform = function (newLeftTop) {
    if (newLeftTop == undefined) {
      this.transform(new PointD(0, 0));
    } else {
      // create a transformation object (from Eclipse to layout). When an
      // inverse transform is applied, we get upper-left coordinate of the
      // drawing or the root graph at given input coordinate (some margins
      // already included in calculation of left-top).
  
      var trans = new Transform();
      var leftTop = this.graphManager.getRoot().updateLeftTop();
  
      if (leftTop != null) {
        trans.setWorldOrgX(newLeftTop.x);
        trans.setWorldOrgY(newLeftTop.y);
  
        trans.setDeviceOrgX(leftTop.x);
        trans.setDeviceOrgY(leftTop.y);
  
        var nodes = this.getAllNodes();
        var node;
  
        for (var i = 0; i < nodes.length; i++) {
          node = nodes[i];
          node.transform(trans);
        }
      }
    }
  };
  
  Layout.prototype.positionNodesRandomly = function (graph) {
  
    if (graph == undefined) {
      //assert !this.incremental;
      this.positionNodesRandomly(this.getGraphManager().getRoot());
      this.getGraphManager().getRoot().updateBounds(true);
    } else {
      var lNode;
      var childGraph;
  
      var nodes = graph.getNodes();
      for (var i = 0; i < nodes.length; i++) {
        lNode = nodes[i];
        childGraph = lNode.getChild();
  
        if (childGraph == null) {
          lNode.scatter();
        } else if (childGraph.getNodes().length == 0) {
          lNode.scatter();
        } else {
          this.positionNodesRandomly(childGraph);
          lNode.updateBounds();
        }
      }
    }
  };
  
  /**
   * This method returns a list of trees where each tree is represented as a
   * list of l-nodes. The method returns a list of size 0 when:
   * - The graph is not flat or
   * - One of the component(s) of the graph is not a tree.
   */
  Layout.prototype.getFlatForest = function () {
    var flatForest = [];
    var isForest = true;
  
    // Quick reference for all nodes in the graph manager associated with
    // this layout. The list should not be changed.
    var allNodes = this.graphManager.getRoot().getNodes();
  
    // First be sure that the graph is flat
    var isFlat = true;
  
    for (var i = 0; i < allNodes.length; i++) {
      if (allNodes[i].getChild() != null) {
        isFlat = false;
      }
    }
  
    // Return empty forest if the graph is not flat.
    if (!isFlat) {
      return flatForest;
    }
  
    // Run BFS for each component of the graph.
  
    var visited = new Set();
    var toBeVisited = [];
    var parents = new Map();
    var unProcessedNodes = [];
  
    unProcessedNodes = unProcessedNodes.concat(allNodes);
  
    // Each iteration of this loop finds a component of the graph and
    // decides whether it is a tree or not. If it is a tree, adds it to the
    // forest and continued with the next component.
  
    while (unProcessedNodes.length > 0 && isForest) {
      toBeVisited.push(unProcessedNodes[0]);
  
      // Start the BFS. Each iteration of this loop visits a node in a
      // BFS manner.
      while (toBeVisited.length > 0 && isForest) {
        //pool operation
        var currentNode = toBeVisited[0];
        toBeVisited.splice(0, 1);
        visited.add(currentNode);
  
        // Traverse all neighbors of this node
        var neighborEdges = currentNode.getEdges();
  
        for (var i = 0; i < neighborEdges.length; i++) {
          var currentNeighbor = neighborEdges[i].getOtherEnd(currentNode);
  
          // If BFS is not growing from this neighbor.
          if (parents.get(currentNode) != currentNeighbor) {
            // We haven't previously visited this neighbor.
            if (!visited.has(currentNeighbor)) {
              toBeVisited.push(currentNeighbor);
              parents.set(currentNeighbor, currentNode);
            }
            // Since we have previously visited this neighbor and
            // this neighbor is not parent of currentNode, given
            // graph contains a component that is not tree, hence
            // it is not a forest.
            else {
                isForest = false;
                break;
              }
          }
        }
      }
  
      // The graph contains a component that is not a tree. Empty
      // previously found trees. The method will end.
      if (!isForest) {
        flatForest = [];
      }
      // Save currently visited nodes as a tree in our forest. Reset
      // visited and parents lists. Continue with the next component of
      // the graph, if any.
      else {
          var temp = [].concat(_toConsumableArray(visited));
          flatForest.push(temp);
          //flatForest = flatForest.concat(temp);
          //unProcessedNodes.removeAll(visited);
          for (var i = 0; i < temp.length; i++) {
            var value = temp[i];
            var index = unProcessedNodes.indexOf(value);
            if (index > -1) {
              unProcessedNodes.splice(index, 1);
            }
          }
          visited = new Set();
          parents = new Map();
        }
    }
  
    return flatForest;
  };
  
  /**
   * This method creates dummy nodes (an l-level node with minimal dimensions)
   * for the given edge (one per bendpoint). The existing l-level structure
   * is updated accordingly.
   */
  Layout.prototype.createDummyNodesForBendpoints = function (edge) {
    var dummyNodes = [];
    var prev = edge.source;
  
    var graph = this.graphManager.calcLowestCommonAncestor(edge.source, edge.target);
  
    for (var i = 0; i < edge.bendpoints.length; i++) {
      // create new dummy node
      var dummyNode = this.newNode(null);
      dummyNode.setRect(new Point(0, 0), new Dimension(1, 1));
  
      graph.add(dummyNode);
  
      // create new dummy edge between prev and dummy node
      var dummyEdge = this.newEdge(null);
      this.graphManager.add(dummyEdge, prev, dummyNode);
  
      dummyNodes.add(dummyNode);
      prev = dummyNode;
    }
  
    var dummyEdge = this.newEdge(null);
    this.graphManager.add(dummyEdge, prev, edge.target);
  
    this.edgeToDummyNodes.set(edge, dummyNodes);
  
    // remove real edge from graph manager if it is inter-graph
    if (edge.isInterGraph()) {
      this.graphManager.remove(edge);
    }
    // else, remove the edge from the current graph
    else {
        graph.remove(edge);
      }
  
    return dummyNodes;
  };
  
  /**
   * This method creates bendpoints for edges from the dummy nodes
   * at l-level.
   */
  Layout.prototype.createBendpointsFromDummyNodes = function () {
    var edges = [];
    edges = edges.concat(this.graphManager.getAllEdges());
    edges = [].concat(_toConsumableArray(this.edgeToDummyNodes.keys())).concat(edges);
  
    for (var k = 0; k < edges.length; k++) {
      var lEdge = edges[k];
  
      if (lEdge.bendpoints.length > 0) {
        var path = this.edgeToDummyNodes.get(lEdge);
  
        for (var i = 0; i < path.length; i++) {
          var dummyNode = path[i];
          var p = new PointD(dummyNode.getCenterX(), dummyNode.getCenterY());
  
          // update bendpoint's location according to dummy node
          var ebp = lEdge.bendpoints.get(i);
          ebp.x = p.x;
          ebp.y = p.y;
  
          // remove the dummy node, dummy edges incident with this
          // dummy node is also removed (within the remove method)
          dummyNode.getOwner().remove(dummyNode);
        }
  
        // add the real edge to graph
        this.graphManager.add(lEdge, lEdge.source, lEdge.target);
      }
    }
  };
  
  Layout.transform = function (sliderValue, defaultValue, minDiv, maxMul) {
    if (minDiv != undefined && maxMul != undefined) {
      var value = defaultValue;
  
      if (sliderValue <= 50) {
        var minValue = defaultValue / minDiv;
        value -= (defaultValue - minValue) / 50 * (50 - sliderValue);
      } else {
        var maxValue = defaultValue * maxMul;
        value += (maxValue - defaultValue) / 50 * (sliderValue - 50);
      }
  
      return value;
    } else {
      var a, b;
  
      if (sliderValue <= 50) {
        a = 9.0 * defaultValue / 500.0;
        b = defaultValue / 10.0;
      } else {
        a = 9.0 * defaultValue / 50.0;
        b = -8 * defaultValue;
      }
  
      return a * sliderValue + b;
    }
  };
  
  /**
   * This method finds and returns the center of the given nodes, assuming
   * that the given nodes form a tree in themselves.
   */
  Layout.findCenterOfTree = function (nodes) {
    var list = [];
    list = list.concat(nodes);
  
    var removedNodes = [];
    var remainingDegrees = new Map();
    var foundCenter = false;
    var centerNode = null;
  
    if (list.length == 1 || list.length == 2) {
      foundCenter = true;
      centerNode = list[0];
    }
  
    for (var i = 0; i < list.length; i++) {
      var node = list[i];
      var degree = node.getNeighborsList().size;
      remainingDegrees.set(node, node.getNeighborsList().size);
  
      if (degree == 1) {
        removedNodes.push(node);
      }
    }
  
    var tempList = [];
    tempList = tempList.concat(removedNodes);
  
    while (!foundCenter) {
      var tempList2 = [];
      tempList2 = tempList2.concat(tempList);
      tempList = [];
  
      for (var i = 0; i < list.length; i++) {
        var node = list[i];
  
        var index = list.indexOf(node);
        if (index >= 0) {
          list.splice(index, 1);
        }
  
        var neighbours = node.getNeighborsList();
  
        neighbours.forEach(function (neighbour) {
          if (removedNodes.indexOf(neighbour) < 0) {
            var otherDegree = remainingDegrees.get(neighbour);
            var newDegree = otherDegree - 1;
  
            if (newDegree == 1) {
              tempList.push(neighbour);
            }
  
            remainingDegrees.set(neighbour, newDegree);
          }
        });
      }
  
      removedNodes = removedNodes.concat(tempList);
  
      if (list.length == 1 || list.length == 2) {
        foundCenter = true;
        centerNode = list[0];
      }
    }
  
    return centerNode;
  };
  
  /**
   * During the coarsening process, this layout may be referenced by two graph managers
   * this setter function grants access to change the currently being used graph manager
   */
  Layout.prototype.setGraphManager = function (gm) {
    this.graphManager = gm;
  };
  
  module.exports = Layout;
  
  /***/ }),
  /* 16 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  function RandomSeed() {}
  // adapted from: https://stackoverflow.com/a/19303725
  RandomSeed.seed = 1;
  RandomSeed.x = 0;
  
  RandomSeed.nextDouble = function () {
    RandomSeed.x = Math.sin(RandomSeed.seed++) * 10000;
    return RandomSeed.x - Math.floor(RandomSeed.x);
  };
  
  module.exports = RandomSeed;
  
  /***/ }),
  /* 17 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var PointD = __webpack_require__(5);
  
  function Transform(x, y) {
    this.lworldOrgX = 0.0;
    this.lworldOrgY = 0.0;
    this.ldeviceOrgX = 0.0;
    this.ldeviceOrgY = 0.0;
    this.lworldExtX = 1.0;
    this.lworldExtY = 1.0;
    this.ldeviceExtX = 1.0;
    this.ldeviceExtY = 1.0;
  }
  
  Transform.prototype.getWorldOrgX = function () {
    return this.lworldOrgX;
  };
  
  Transform.prototype.setWorldOrgX = function (wox) {
    this.lworldOrgX = wox;
  };
  
  Transform.prototype.getWorldOrgY = function () {
    return this.lworldOrgY;
  };
  
  Transform.prototype.setWorldOrgY = function (woy) {
    this.lworldOrgY = woy;
  };
  
  Transform.prototype.getWorldExtX = function () {
    return this.lworldExtX;
  };
  
  Transform.prototype.setWorldExtX = function (wex) {
    this.lworldExtX = wex;
  };
  
  Transform.prototype.getWorldExtY = function () {
    return this.lworldExtY;
  };
  
  Transform.prototype.setWorldExtY = function (wey) {
    this.lworldExtY = wey;
  };
  
  /* Device related */
  
  Transform.prototype.getDeviceOrgX = function () {
    return this.ldeviceOrgX;
  };
  
  Transform.prototype.setDeviceOrgX = function (dox) {
    this.ldeviceOrgX = dox;
  };
  
  Transform.prototype.getDeviceOrgY = function () {
    return this.ldeviceOrgY;
  };
  
  Transform.prototype.setDeviceOrgY = function (doy) {
    this.ldeviceOrgY = doy;
  };
  
  Transform.prototype.getDeviceExtX = function () {
    return this.ldeviceExtX;
  };
  
  Transform.prototype.setDeviceExtX = function (dex) {
    this.ldeviceExtX = dex;
  };
  
  Transform.prototype.getDeviceExtY = function () {
    return this.ldeviceExtY;
  };
  
  Transform.prototype.setDeviceExtY = function (dey) {
    this.ldeviceExtY = dey;
  };
  
  Transform.prototype.transformX = function (x) {
    var xDevice = 0.0;
    var worldExtX = this.lworldExtX;
    if (worldExtX != 0.0) {
      xDevice = this.ldeviceOrgX + (x - this.lworldOrgX) * this.ldeviceExtX / worldExtX;
    }
  
    return xDevice;
  };
  
  Transform.prototype.transformY = function (y) {
    var yDevice = 0.0;
    var worldExtY = this.lworldExtY;
    if (worldExtY != 0.0) {
      yDevice = this.ldeviceOrgY + (y - this.lworldOrgY) * this.ldeviceExtY / worldExtY;
    }
  
    return yDevice;
  };
  
  Transform.prototype.inverseTransformX = function (x) {
    var xWorld = 0.0;
    var deviceExtX = this.ldeviceExtX;
    if (deviceExtX != 0.0) {
      xWorld = this.lworldOrgX + (x - this.ldeviceOrgX) * this.lworldExtX / deviceExtX;
    }
  
    return xWorld;
  };
  
  Transform.prototype.inverseTransformY = function (y) {
    var yWorld = 0.0;
    var deviceExtY = this.ldeviceExtY;
    if (deviceExtY != 0.0) {
      yWorld = this.lworldOrgY + (y - this.ldeviceOrgY) * this.lworldExtY / deviceExtY;
    }
    return yWorld;
  };
  
  Transform.prototype.inverseTransformPoint = function (inPoint) {
    var outPoint = new PointD(this.inverseTransformX(inPoint.x), this.inverseTransformY(inPoint.y));
    return outPoint;
  };
  
  module.exports = Transform;
  
  /***/ }),
  /* 18 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
  
  var Layout = __webpack_require__(15);
  var FDLayoutConstants = __webpack_require__(4);
  var LayoutConstants = __webpack_require__(0);
  var IGeometry = __webpack_require__(8);
  var IMath = __webpack_require__(9);
  
  function FDLayout() {
    Layout.call(this);
  
    this.useSmartIdealEdgeLengthCalculation = FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
    this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
    this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
    this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
    this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
    this.displacementThresholdPerNode = 3.0 * FDLayoutConstants.DEFAULT_EDGE_LENGTH / 100;
    this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
    this.initialCoolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
    this.totalDisplacement = 0.0;
    this.oldTotalDisplacement = 0.0;
    this.maxIterations = FDLayoutConstants.MAX_ITERATIONS;
  }
  
  FDLayout.prototype = Object.create(Layout.prototype);
  
  for (var prop in Layout) {
    FDLayout[prop] = Layout[prop];
  }
  
  FDLayout.prototype.initParameters = function () {
    Layout.prototype.initParameters.call(this, arguments);
  
    this.totalIterations = 0;
    this.notAnimatedIterations = 0;
  
    this.useFRGridVariant = FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;
  
    this.grid = [];
  };
  
  FDLayout.prototype.calcIdealEdgeLengths = function () {
    var edge;
    var originalIdealLength;
    var lcaDepth;
    var source;
    var target;
    var sizeOfSourceInLca;
    var sizeOfTargetInLca;
  
    var allEdges = this.getGraphManager().getAllEdges();
    for (var i = 0; i < allEdges.length; i++) {
      edge = allEdges[i];
  
      originalIdealLength = edge.idealLength;
  
      if (edge.isInterGraph) {
        source = edge.getSource();
        target = edge.getTarget();
  
        sizeOfSourceInLca = edge.getSourceInLca().getEstimatedSize();
        sizeOfTargetInLca = edge.getTargetInLca().getEstimatedSize();
  
        if (this.useSmartIdealEdgeLengthCalculation) {
          edge.idealLength += sizeOfSourceInLca + sizeOfTargetInLca - 2 * LayoutConstants.SIMPLE_NODE_SIZE;
        }
  
        lcaDepth = edge.getLca().getInclusionTreeDepth();
  
        edge.idealLength += originalIdealLength * FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (source.getInclusionTreeDepth() + target.getInclusionTreeDepth() - 2 * lcaDepth);
      }
    }
  };
  
  FDLayout.prototype.initSpringEmbedder = function () {
  
    var s = this.getAllNodes().length;
    if (this.incremental) {
      if (s > FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) {
        this.coolingFactor = Math.max(this.coolingFactor * FDLayoutConstants.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (s - FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) / (FDLayoutConstants.ADAPTATION_UPPER_NODE_LIMIT - FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - FDLayoutConstants.COOLING_ADAPTATION_FACTOR));
      }
      this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL;
    } else {
      if (s > FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) {
        this.coolingFactor = Math.max(FDLayoutConstants.COOLING_ADAPTATION_FACTOR, 1.0 - (s - FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) / (FDLayoutConstants.ADAPTATION_UPPER_NODE_LIMIT - FDLayoutConstants.ADAPTATION_LOWER_NODE_LIMIT) * (1 - FDLayoutConstants.COOLING_ADAPTATION_FACTOR));
      } else {
        this.coolingFactor = 1.0;
      }
      this.initialCoolingFactor = this.coolingFactor;
      this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT;
    }
  
    this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations);
  
    // Reassign this attribute by using new constant value
    this.displacementThresholdPerNode = 3.0 * FDLayoutConstants.DEFAULT_EDGE_LENGTH / 100;
    this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length;
  
    this.repulsionRange = this.calcRepulsionRange();
  };
  
  FDLayout.prototype.calcSpringForces = function () {
    var lEdges = this.getAllEdges();
    var edge;
  
    for (var i = 0; i < lEdges.length; i++) {
      edge = lEdges[i];
  
      this.calcSpringForce(edge, edge.idealLength);
    }
  };
  
  FDLayout.prototype.calcRepulsionForces = function () {
    var gridUpdateAllowed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var forceToNodeSurroundingUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
    var i, j;
    var nodeA, nodeB;
    var lNodes = this.getAllNodes();
    var processedNodeSet;
  
    if (this.useFRGridVariant) {
      if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && gridUpdateAllowed) {
        this.updateGrid();
      }
  
      processedNodeSet = new Set();
  
      // calculate repulsion forces between each nodes and its surrounding
      for (i = 0; i < lNodes.length; i++) {
        nodeA = lNodes[i];
        this.calculateRepulsionForceOfANode(nodeA, processedNodeSet, gridUpdateAllowed, forceToNodeSurroundingUpdate);
        processedNodeSet.add(nodeA);
      }
    } else {
      for (i = 0; i < lNodes.length; i++) {
        nodeA = lNodes[i];
  
        for (j = i + 1; j < lNodes.length; j++) {
          nodeB = lNodes[j];
  
          // If both nodes are not members of the same graph, skip.
          if (nodeA.getOwner() != nodeB.getOwner()) {
            continue;
          }
  
          this.calcRepulsionForce(nodeA, nodeB);
        }
      }
    }
  };
  
  FDLayout.prototype.calcGravitationalForces = function () {
    var node;
    var lNodes = this.getAllNodesToApplyGravitation();
  
    for (var i = 0; i < lNodes.length; i++) {
      node = lNodes[i];
      this.calcGravitationalForce(node);
    }
  };
  
  FDLayout.prototype.moveNodes = function () {
    var lNodes = this.getAllNodes();
    var node;
  
    for (var i = 0; i < lNodes.length; i++) {
      node = lNodes[i];
      node.move();
    }
  };
  
  FDLayout.prototype.calcSpringForce = function (edge, idealLength) {
    var sourceNode = edge.getSource();
    var targetNode = edge.getTarget();
  
    var length;
    var springForce;
    var springForceX;
    var springForceY;
  
    // Update edge length
    if (this.uniformLeafNodeSizes && sourceNode.getChild() == null && targetNode.getChild() == null) {
      edge.updateLengthSimple();
    } else {
      edge.updateLength();
  
      if (edge.isOverlapingSourceAndTarget) {
        return;
      }
    }
  
    length = edge.getLength();
  
    if (length == 0) return;
  
    // Calculate spring forces
    springForce = edge.edgeElasticity * (length - idealLength);
  
    // Project force onto x and y axes
    springForceX = springForce * (edge.lengthX / length);
    springForceY = springForce * (edge.lengthY / length);
  
    // Apply forces on the end nodes
    sourceNode.springForceX += springForceX;
    sourceNode.springForceY += springForceY;
    targetNode.springForceX -= springForceX;
    targetNode.springForceY -= springForceY;
  };
  
  FDLayout.prototype.calcRepulsionForce = function (nodeA, nodeB) {
    var rectA = nodeA.getRect();
    var rectB = nodeB.getRect();
    var overlapAmount = new Array(2);
    var clipPoints = new Array(4);
    var distanceX;
    var distanceY;
    var distanceSquared;
    var distance;
    var repulsionForce;
    var repulsionForceX;
    var repulsionForceY;
  
    if (rectA.intersects(rectB)) // two nodes overlap
      {
        // calculate separation amount in x and y directions
        IGeometry.calcSeparationAmount(rectA, rectB, overlapAmount, FDLayoutConstants.DEFAULT_EDGE_LENGTH / 2.0);
  
        repulsionForceX = 2 * overlapAmount[0];
        repulsionForceY = 2 * overlapAmount[1];
  
        var childrenConstant = nodeA.noOfChildren * nodeB.noOfChildren / (nodeA.noOfChildren + nodeB.noOfChildren);
  
        // Apply forces on the two nodes
        nodeA.repulsionForceX -= childrenConstant * repulsionForceX;
        nodeA.repulsionForceY -= childrenConstant * repulsionForceY;
        nodeB.repulsionForceX += childrenConstant * repulsionForceX;
        nodeB.repulsionForceY += childrenConstant * repulsionForceY;
      } else // no overlap
      {
        // calculate distance
  
        if (this.uniformLeafNodeSizes && nodeA.getChild() == null && nodeB.getChild() == null) // simply base repulsion on distance of node centers
          {
            distanceX = rectB.getCenterX() - rectA.getCenterX();
            distanceY = rectB.getCenterY() - rectA.getCenterY();
          } else // use clipping points
          {
            IGeometry.getIntersection(rectA, rectB, clipPoints);
  
            distanceX = clipPoints[2] - clipPoints[0];
            distanceY = clipPoints[3] - clipPoints[1];
          }
  
        // No repulsion range. FR grid variant should take care of this.
        if (Math.abs(distanceX) < FDLayoutConstants.MIN_REPULSION_DIST) {
          distanceX = IMath.sign(distanceX) * FDLayoutConstants.MIN_REPULSION_DIST;
        }
  
        if (Math.abs(distanceY) < FDLayoutConstants.MIN_REPULSION_DIST) {
          distanceY = IMath.sign(distanceY) * FDLayoutConstants.MIN_REPULSION_DIST;
        }
  
        distanceSquared = distanceX * distanceX + distanceY * distanceY;
        distance = Math.sqrt(distanceSquared);
  
        // Here we use half of the nodes' repulsion values for backward compatibility
        repulsionForce = (nodeA.nodeRepulsion / 2 + nodeB.nodeRepulsion / 2) * nodeA.noOfChildren * nodeB.noOfChildren / distanceSquared;
  
        // Project force onto x and y axes
        repulsionForceX = repulsionForce * distanceX / distance;
        repulsionForceY = repulsionForce * distanceY / distance;
  
        // Apply forces on the two nodes    
        nodeA.repulsionForceX -= repulsionForceX;
        nodeA.repulsionForceY -= repulsionForceY;
        nodeB.repulsionForceX += repulsionForceX;
        nodeB.repulsionForceY += repulsionForceY;
      }
  };
  
  FDLayout.prototype.calcGravitationalForce = function (node) {
    var ownerGraph;
    var ownerCenterX;
    var ownerCenterY;
    var distanceX;
    var distanceY;
    var absDistanceX;
    var absDistanceY;
    var estimatedSize;
    ownerGraph = node.getOwner();
  
    ownerCenterX = (ownerGraph.getRight() + ownerGraph.getLeft()) / 2;
    ownerCenterY = (ownerGraph.getTop() + ownerGraph.getBottom()) / 2;
    distanceX = node.getCenterX() - ownerCenterX;
    distanceY = node.getCenterY() - ownerCenterY;
    absDistanceX = Math.abs(distanceX) + node.getWidth() / 2;
    absDistanceY = Math.abs(distanceY) + node.getHeight() / 2;
  
    if (node.getOwner() == this.graphManager.getRoot()) // in the root graph
      {
        estimatedSize = ownerGraph.getEstimatedSize() * this.gravityRangeFactor;
  
        if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
          node.gravitationForceX = -this.gravityConstant * distanceX;
          node.gravitationForceY = -this.gravityConstant * distanceY;
        }
      } else // inside a compound
      {
        estimatedSize = ownerGraph.getEstimatedSize() * this.compoundGravityRangeFactor;
  
        if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
          node.gravitationForceX = -this.gravityConstant * distanceX * this.compoundGravityConstant;
          node.gravitationForceY = -this.gravityConstant * distanceY * this.compoundGravityConstant;
        }
      }
  };
  
  FDLayout.prototype.isConverged = function () {
    var converged;
    var oscilating = false;
  
    if (this.totalIterations > this.maxIterations / 3) {
      oscilating = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
    }
  
    converged = this.totalDisplacement < this.totalDisplacementThreshold;
  
    this.oldTotalDisplacement = this.totalDisplacement;
  
    return converged || oscilating;
  };
  
  FDLayout.prototype.animate = function () {
    if (this.animationDuringLayout && !this.isSubLayout) {
      if (this.notAnimatedIterations == this.animationPeriod) {
        this.update();
        this.notAnimatedIterations = 0;
      } else {
        this.notAnimatedIterations++;
      }
    }
  };
  
  //This method calculates the number of children (weight) for all nodes
  FDLayout.prototype.calcNoOfChildrenForAllNodes = function () {
    var node;
    var allNodes = this.graphManager.getAllNodes();
  
    for (var i = 0; i < allNodes.length; i++) {
      node = allNodes[i];
      node.noOfChildren = node.getNoOfChildren();
    }
  };
  
  // -----------------------------------------------------------------------------
  // Section: FR-Grid Variant Repulsion Force Calculation
  // -----------------------------------------------------------------------------
  
  FDLayout.prototype.calcGrid = function (graph) {
  
    var sizeX = 0;
    var sizeY = 0;
  
    sizeX = parseInt(Math.ceil((graph.getRight() - graph.getLeft()) / this.repulsionRange));
    sizeY = parseInt(Math.ceil((graph.getBottom() - graph.getTop()) / this.repulsionRange));
  
    var grid = new Array(sizeX);
  
    for (var i = 0; i < sizeX; i++) {
      grid[i] = new Array(sizeY);
    }
  
    for (var i = 0; i < sizeX; i++) {
      for (var j = 0; j < sizeY; j++) {
        grid[i][j] = new Array();
      }
    }
  
    return grid;
  };
  
  FDLayout.prototype.addNodeToGrid = function (v, left, top) {
  
    var startX = 0;
    var finishX = 0;
    var startY = 0;
    var finishY = 0;
  
    startX = parseInt(Math.floor((v.getRect().x - left) / this.repulsionRange));
    finishX = parseInt(Math.floor((v.getRect().width + v.getRect().x - left) / this.repulsionRange));
    startY = parseInt(Math.floor((v.getRect().y - top) / this.repulsionRange));
    finishY = parseInt(Math.floor((v.getRect().height + v.getRect().y - top) / this.repulsionRange));
  
    for (var i = startX; i <= finishX; i++) {
      for (var j = startY; j <= finishY; j++) {
        this.grid[i][j].push(v);
        v.setGridCoordinates(startX, finishX, startY, finishY);
      }
    }
  };
  
  FDLayout.prototype.updateGrid = function () {
    var i;
    var nodeA;
    var lNodes = this.getAllNodes();
  
    this.grid = this.calcGrid(this.graphManager.getRoot());
  
    // put all nodes to proper grid cells
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];
      this.addNodeToGrid(nodeA, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
    }
  };
  
  FDLayout.prototype.calculateRepulsionForceOfANode = function (nodeA, processedNodeSet, gridUpdateAllowed, forceToNodeSurroundingUpdate) {
  
    if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && gridUpdateAllowed || forceToNodeSurroundingUpdate) {
      var surrounding = new Set();
      nodeA.surrounding = new Array();
      var nodeB;
      var grid = this.grid;
  
      for (var i = nodeA.startX - 1; i < nodeA.finishX + 2; i++) {
        for (var j = nodeA.startY - 1; j < nodeA.finishY + 2; j++) {
          if (!(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length)) {
            for (var k = 0; k < grid[i][j].length; k++) {
              nodeB = grid[i][j][k];
  
              // If both nodes are not members of the same graph, 
              // or both nodes are the same, skip.
              if (nodeA.getOwner() != nodeB.getOwner() || nodeA == nodeB) {
                continue;
              }
  
              // check if the repulsion force between
              // nodeA and nodeB has already been calculated
              if (!processedNodeSet.has(nodeB) && !surrounding.has(nodeB)) {
                var distanceX = Math.abs(nodeA.getCenterX() - nodeB.getCenterX()) - (nodeA.getWidth() / 2 + nodeB.getWidth() / 2);
                var distanceY = Math.abs(nodeA.getCenterY() - nodeB.getCenterY()) - (nodeA.getHeight() / 2 + nodeB.getHeight() / 2);
  
                // if the distance between nodeA and nodeB 
                // is less then calculation range
                if (distanceX <= this.repulsionRange && distanceY <= this.repulsionRange) {
                  //then add nodeB to surrounding of nodeA
                  surrounding.add(nodeB);
                }
              }
            }
          }
        }
      }
  
      nodeA.surrounding = [].concat(_toConsumableArray(surrounding));
    }
    for (i = 0; i < nodeA.surrounding.length; i++) {
      this.calcRepulsionForce(nodeA, nodeA.surrounding[i]);
    }
  };
  
  FDLayout.prototype.calcRepulsionRange = function () {
    return 0.0;
  };
  
  module.exports = FDLayout;
  
  /***/ }),
  /* 19 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var LEdge = __webpack_require__(1);
  var FDLayoutConstants = __webpack_require__(4);
  
  function FDLayoutEdge(source, target, vEdge) {
    LEdge.call(this, source, target, vEdge);
  
    // Ideal length and elasticity value for this edge
    this.idealLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
    this.edgeElasticity = FDLayoutConstants.DEFAULT_SPRING_STRENGTH;
  }
  
  FDLayoutEdge.prototype = Object.create(LEdge.prototype);
  
  for (var prop in LEdge) {
    FDLayoutEdge[prop] = LEdge[prop];
  }
  
  module.exports = FDLayoutEdge;
  
  /***/ }),
  /* 20 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var LNode = __webpack_require__(3);
  var FDLayoutConstants = __webpack_require__(4);
  
  function FDLayoutNode(gm, loc, size, vNode) {
    // alternative constructor is handled inside LNode
    LNode.call(this, gm, loc, size, vNode);
  
    // Repulsion value of this node
    this.nodeRepulsion = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH;
  
    //Spring, repulsion and gravitational forces acting on this node
    this.springForceX = 0;
    this.springForceY = 0;
    this.repulsionForceX = 0;
    this.repulsionForceY = 0;
    this.gravitationForceX = 0;
    this.gravitationForceY = 0;
    //Amount by which this node is to be moved in this iteration
    this.displacementX = 0;
    this.displacementY = 0;
  
    //Start and finish grid coordinates that this node is fallen into
    this.startX = 0;
    this.finishX = 0;
    this.startY = 0;
    this.finishY = 0;
  
    //Geometric neighbors of this node
    this.surrounding = [];
  }
  
  FDLayoutNode.prototype = Object.create(LNode.prototype);
  
  for (var prop in LNode) {
    FDLayoutNode[prop] = LNode[prop];
  }
  
  FDLayoutNode.prototype.setGridCoordinates = function (_startX, _finishX, _startY, _finishY) {
    this.startX = _startX;
    this.finishX = _finishX;
    this.startY = _startY;
    this.finishY = _finishY;
  };
  
  module.exports = FDLayoutNode;
  
  /***/ }),
  /* 21 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  function DimensionD(width, height) {
    this.width = 0;
    this.height = 0;
    if (width !== null && height !== null) {
      this.height = height;
      this.width = width;
    }
  }
  
  DimensionD.prototype.getWidth = function () {
    return this.width;
  };
  
  DimensionD.prototype.setWidth = function (width) {
    this.width = width;
  };
  
  DimensionD.prototype.getHeight = function () {
    return this.height;
  };
  
  DimensionD.prototype.setHeight = function (height) {
    this.height = height;
  };
  
  module.exports = DimensionD;
  
  /***/ }),
  /* 22 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var UniqueIDGeneretor = __webpack_require__(14);
  
  function HashMap() {
    this.map = {};
    this.keys = [];
  }
  
  HashMap.prototype.put = function (key, value) {
    var theId = UniqueIDGeneretor.createID(key);
    if (!this.contains(theId)) {
      this.map[theId] = value;
      this.keys.push(key);
    }
  };
  
  HashMap.prototype.contains = function (key) {
    var theId = UniqueIDGeneretor.createID(key);
    return this.map[key] != null;
  };
  
  HashMap.prototype.get = function (key) {
    var theId = UniqueIDGeneretor.createID(key);
    return this.map[theId];
  };
  
  HashMap.prototype.keySet = function () {
    return this.keys;
  };
  
  module.exports = HashMap;
  
  /***/ }),
  /* 23 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var UniqueIDGeneretor = __webpack_require__(14);
  
  function HashSet() {
    this.set = {};
  }
  ;
  
  HashSet.prototype.add = function (obj) {
    var theId = UniqueIDGeneretor.createID(obj);
    if (!this.contains(theId)) this.set[theId] = obj;
  };
  
  HashSet.prototype.remove = function (obj) {
    delete this.set[UniqueIDGeneretor.createID(obj)];
  };
  
  HashSet.prototype.clear = function () {
    this.set = {};
  };
  
  HashSet.prototype.contains = function (obj) {
    return this.set[UniqueIDGeneretor.createID(obj)] == obj;
  };
  
  HashSet.prototype.isEmpty = function () {
    return this.size() === 0;
  };
  
  HashSet.prototype.size = function () {
    return Object.keys(this.set).length;
  };
  
  //concats this.set to the given list
  HashSet.prototype.addAllTo = function (list) {
    var keys = Object.keys(this.set);
    var length = keys.length;
    for (var i = 0; i < length; i++) {
      list.push(this.set[keys[i]]);
    }
  };
  
  HashSet.prototype.size = function () {
    return Object.keys(this.set).length;
  };
  
  HashSet.prototype.addAll = function (list) {
    var s = list.length;
    for (var i = 0; i < s; i++) {
      var v = list[i];
      this.add(v);
    }
  };
  
  module.exports = HashSet;
  
  /***/ }),
  /* 24 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  // Some matrix (1d and 2d array) operations
  function Matrix() {}
  
  /**
   * matrix multiplication
   * array1, array2 and result are 2d arrays
   */
  Matrix.multMat = function (array1, array2) {
    var result = [];
  
    for (var i = 0; i < array1.length; i++) {
      result[i] = [];
      for (var j = 0; j < array2[0].length; j++) {
        result[i][j] = 0;
        for (var k = 0; k < array1[0].length; k++) {
          result[i][j] += array1[i][k] * array2[k][j];
        }
      }
    }
    return result;
  };
  
  /**
   * matrix transpose
   * array and result are 2d arrays
   */
  Matrix.transpose = function (array) {
    var result = [];
  
    for (var i = 0; i < array[0].length; i++) {
      result[i] = [];
      for (var j = 0; j < array.length; j++) {
        result[i][j] = array[j][i];
      }
    }
  
    return result;
  };
  
  /**
   * multiply array with constant
   * array and result are 1d arrays
   */
  Matrix.multCons = function (array, constant) {
    var result = [];
  
    for (var i = 0; i < array.length; i++) {
      result[i] = array[i] * constant;
    }
  
    return result;
  };
  
  /**
   * substract two arrays
   * array1, array2 and result are 1d arrays
   */
  Matrix.minusOp = function (array1, array2) {
    var result = [];
  
    for (var i = 0; i < array1.length; i++) {
      result[i] = array1[i] - array2[i];
    }
  
    return result;
  };
  
  /**
   * dot product of two arrays with same size
   * array1 and array2 are 1d arrays
   */
  Matrix.dotProduct = function (array1, array2) {
    var product = 0;
  
    for (var i = 0; i < array1.length; i++) {
      product += array1[i] * array2[i];
    }
  
    return product;
  };
  
  /**
   * magnitude of an array
   * array is 1d array
   */
  Matrix.mag = function (array) {
    return Math.sqrt(this.dotProduct(array, array));
  };
  
  /**
   * normalization of an array
   * array and result are 1d array
   */
  Matrix.normalize = function (array) {
    var result = [];
    var magnitude = this.mag(array);
  
    for (var i = 0; i < array.length; i++) {
      result[i] = array[i] / magnitude;
    }
  
    return result;
  };
  
  /**
   * multiply an array with centering matrix
   * array and result are 1d array
   */
  Matrix.multGamma = function (array) {
    var result = [];
    var sum = 0;
  
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    sum *= -1 / array.length;
  
    for (var _i = 0; _i < array.length; _i++) {
      result[_i] = sum + array[_i];
    }
    return result;
  };
  
  /**
   * a special matrix multiplication
   * result = 0.5 * C * INV * C^T * array
   * array and result are 1d, C and INV are 2d arrays
   */
  Matrix.multL = function (array, C, INV) {
    var result = [];
    var temp1 = [];
    var temp2 = [];
  
    // multiply by C^T
    for (var i = 0; i < C[0].length; i++) {
      var sum = 0;
      for (var j = 0; j < C.length; j++) {
        sum += -0.5 * C[j][i] * array[j];
      }
      temp1[i] = sum;
    }
    // multiply the result by INV
    for (var _i2 = 0; _i2 < INV.length; _i2++) {
      var _sum = 0;
      for (var _j = 0; _j < INV.length; _j++) {
        _sum += INV[_i2][_j] * temp1[_j];
      }
      temp2[_i2] = _sum;
    }
    // multiply the result by C
    for (var _i3 = 0; _i3 < C.length; _i3++) {
      var _sum2 = 0;
      for (var _j2 = 0; _j2 < C[0].length; _j2++) {
        _sum2 += C[_i3][_j2] * temp2[_j2];
      }
      result[_i3] = _sum2;
    }
  
    return result;
  };
  
  module.exports = Matrix;
  
  /***/ }),
  /* 25 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  /**
   * A classic Quicksort algorithm with Hoare's partition
   * - Works also on LinkedList objects
   *
   * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
   */
  
  var LinkedList = __webpack_require__(11);
  
  var Quicksort = function () {
      function Quicksort(A, compareFunction) {
          _classCallCheck(this, Quicksort);
  
          if (compareFunction !== null || compareFunction !== undefined) this.compareFunction = this._defaultCompareFunction;
  
          var length = void 0;
          if (A instanceof LinkedList) length = A.size();else length = A.length;
  
          this._quicksort(A, 0, length - 1);
      }
  
      _createClass(Quicksort, [{
          key: '_quicksort',
          value: function _quicksort(A, p, r) {
              if (p < r) {
                  var q = this._partition(A, p, r);
                  this._quicksort(A, p, q);
                  this._quicksort(A, q + 1, r);
              }
          }
      }, {
          key: '_partition',
          value: function _partition(A, p, r) {
              var x = this._get(A, p);
              var i = p;
              var j = r;
              while (true) {
                  while (this.compareFunction(x, this._get(A, j))) {
                      j--;
                  }while (this.compareFunction(this._get(A, i), x)) {
                      i++;
                  }if (i < j) {
                      this._swap(A, i, j);
                      i++;
                      j--;
                  } else return j;
              }
          }
      }, {
          key: '_get',
          value: function _get(object, index) {
              if (object instanceof LinkedList) return object.get_object_at(index);else return object[index];
          }
      }, {
          key: '_set',
          value: function _set(object, index, value) {
              if (object instanceof LinkedList) object.set_object_at(index, value);else object[index] = value;
          }
      }, {
          key: '_swap',
          value: function _swap(A, i, j) {
              var temp = this._get(A, i);
              this._set(A, i, this._get(A, j));
              this._set(A, j, temp);
          }
      }, {
          key: '_defaultCompareFunction',
          value: function _defaultCompareFunction(a, b) {
              return b > a;
          }
      }]);
  
      return Quicksort;
  }();
  
  module.exports = Quicksort;
  
  /***/ }),
  /* 26 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  // Singular Value Decomposition implementation
  function SVD() {};
  
  /* Below singular value decomposition (svd) code including hypot function is adopted from https://github.com/dragonfly-ai/JamaJS
     Some changes are applied to make the code compatible with the fcose code and to make it independent from Jama.
     Input matrix is changed to a 2D array instead of Jama matrix. Matrix dimensions are taken according to 2D array instead of using Jama functions.
     An object that includes singular value components is created for return. 
     The types of input parameters of the hypot function are removed. 
     let is used instead of var for the variable initialization.
  */
  /*
                                 Apache License
                             Version 2.0, January 2004
                          http://www.apache.org/licenses/
  
     TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
  
     1. Definitions.
  
        "License" shall mean the terms and conditions for use, reproduction,
        and distribution as defined by Sections 1 through 9 of this document.
  
        "Licensor" shall mean the copyright owner or entity authorized by
        the copyright owner that is granting the License.
  
        "Legal Entity" shall mean the union of the acting entity and all
        other entities that control, are controlled by, or are under common
        control with that entity. For the purposes of this definition,
        "control" means (i) the power, direct or indirect, to cause the
        direction or management of such entity, whether by contract or
        otherwise, or (ii) ownership of fifty percent (50%) or more of the
        outstanding shares, or (iii) beneficial ownership of such entity.
  
        "You" (or "Your") shall mean an individual or Legal Entity
        exercising permissions granted by this License.
  
        "Source" form shall mean the preferred form for making modifications,
        including but not limited to software source code, documentation
        source, and configuration files.
  
        "Object" form shall mean any form resulting from mechanical
        transformation or translation of a Source form, including but
        not limited to compiled object code, generated documentation,
        and conversions to other media types.
  
        "Work" shall mean the work of authorship, whether in Source or
        Object form, made available under the License, as indicated by a
        copyright notice that is included in or attached to the work
        (an example is provided in the Appendix below).
  
        "Derivative Works" shall mean any work, whether in Source or Object
        form, that is based on (or derived from) the Work and for which the
        editorial revisions, annotations, elaborations, or other modifications
        represent, as a whole, an original work of authorship. For the purposes
        of this License, Derivative Works shall not include works that remain
        separable from, or merely link (or bind by name) to the interfaces of,
        the Work and Derivative Works thereof.
  
        "Contribution" shall mean any work of authorship, including
        the original version of the Work and any modifications or additions
        to that Work or Derivative Works thereof, that is intentionally
        submitted to Licensor for inclusion in the Work by the copyright owner
        or by an individual or Legal Entity authorized to submit on behalf of
        the copyright owner. For the purposes of this definition, "submitted"
        means any form of electronic, verbal, or written communication sent
        to the Licensor or its representatives, including but not limited to
        communication on electronic mailing lists, source code control systems,
        and issue tracking systems that are managed by, or on behalf of, the
        Licensor for the purpose of discussing and improving the Work, but
        excluding communication that is conspicuously marked or otherwise
        designated in writing by the copyright owner as "Not a Contribution."
  
        "Contributor" shall mean Licensor and any individual or Legal Entity
        on behalf of whom a Contribution has been received by Licensor and
        subsequently incorporated within the Work.
  
     2. Grant of Copyright License. Subject to the terms and conditions of
        this License, each Contributor hereby grants to You a perpetual,
        worldwide, non-exclusive, no-charge, royalty-free, irrevocable
        copyright license to reproduce, prepare Derivative Works of,
        publicly display, publicly perform, sublicense, and distribute the
        Work and such Derivative Works in Source or Object form.
  
     3. Grant of Patent License. Subject to the terms and conditions of
        this License, each Contributor hereby grants to You a perpetual,
        worldwide, non-exclusive, no-charge, royalty-free, irrevocable
        (except as stated in this section) patent license to make, have made,
        use, offer to sell, sell, import, and otherwise transfer the Work,
        where such license applies only to those patent claims licensable
        by such Contributor that are necessarily infringed by their
        Contribution(s) alone or by combination of their Contribution(s)
        with the Work to which such Contribution(s) was submitted. If You
        institute patent litigation against any entity (including a
        cross-claim or counterclaim in a lawsuit) alleging that the Work
        or a Contribution incorporated within the Work constitutes direct
        or contributory patent infringement, then any patent licenses
        granted to You under this License for that Work shall terminate
        as of the date such litigation is filed.
  
     4. Redistribution. You may reproduce and distribute copies of the
        Work or Derivative Works thereof in any medium, with or without
        modifications, and in Source or Object form, provided that You
        meet the following conditions:
  
        (a) You must give any other recipients of the Work or
            Derivative Works a copy of this License; and
  
        (b) You must cause any modified files to carry prominent notices
            stating that You changed the files; and
  
        (c) You must retain, in the Source form of any Derivative Works
            that You distribute, all copyright, patent, trademark, and
            attribution notices from the Source form of the Work,
            excluding those notices that do not pertain to any part of
            the Derivative Works; and
  
        (d) If the Work includes a "NOTICE" text file as part of its
            distribution, then any Derivative Works that You distribute must
            include a readable copy of the attribution notices contained
            within such NOTICE file, excluding those notices that do not
            pertain to any part of the Derivative Works, in at least one
            of the following places: within a NOTICE text file distributed
            as part of the Derivative Works; within the Source form or
            documentation, if provided along with the Derivative Works; or,
            within a display generated by the Derivative Works, if and
            wherever such third-party notices normally appear. The contents
            of the NOTICE file are for informational purposes only and
            do not modify the License. You may add Your own attribution
            notices within Derivative Works that You distribute, alongside
            or as an addendum to the NOTICE text from the Work, provided
            that such additional attribution notices cannot be construed
            as modifying the License.
  
        You may add Your own copyright statement to Your modifications and
        may provide additional or different license terms and conditions
        for use, reproduction, or distribution of Your modifications, or
        for any such Derivative Works as a whole, provided Your use,
        reproduction, and distribution of the Work otherwise complies with
        the conditions stated in this License.
  
     5. Submission of Contributions. Unless You explicitly state otherwise,
        any Contribution intentionally submitted for inclusion in the Work
        by You to the Licensor shall be under the terms and conditions of
        this License, without any additional terms or conditions.
        Notwithstanding the above, nothing herein shall supersede or modify
        the terms of any separate license agreement you may have executed
        with Licensor regarding such Contributions.
  
     6. Trademarks. This License does not grant permission to use the trade
        names, trademarks, service marks, or product names of the Licensor,
        except as required for reasonable and customary use in describing the
        origin of the Work and reproducing the content of the NOTICE file.
  
     7. Disclaimer of Warranty. Unless required by applicable law or
        agreed to in writing, Licensor provides the Work (and each
        Contributor provides its Contributions) on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
        implied, including, without limitation, any warranties or conditions
        of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
        PARTICULAR PURPOSE. You are solely responsible for determining the
        appropriateness of using or redistributing the Work and assume any
        risks associated with Your exercise of permissions under this License.
  
     8. Limitation of Liability. In no event and under no legal theory,
        whether in tort (including negligence), contract, or otherwise,
        unless required by applicable law (such as deliberate and grossly
        negligent acts) or agreed to in writing, shall any Contributor be
        liable to You for damages, including any direct, indirect, special,
        incidental, or consequential damages of any character arising as a
        result of this License or out of the use or inability to use the
        Work (including but not limited to damages for loss of goodwill,
        work stoppage, computer failure or malfunction, or any and all
        other commercial damages or losses), even if such Contributor
        has been advised of the possibility of such damages.
  
     9. Accepting Warranty or Additional Liability. While redistributing
        the Work or Derivative Works thereof, You may choose to offer,
        and charge a fee for, acceptance of support, warranty, indemnity,
        or other liability obligations and/or rights consistent with this
        License. However, in accepting such obligations, You may act only
        on Your own behalf and on Your sole responsibility, not on behalf
        of any other Contributor, and only if You agree to indemnify,
        defend, and hold each Contributor harmless for any liability
        incurred by, or claims asserted against, such Contributor by reason
        of your accepting any such warranty or additional liability.
  
     END OF TERMS AND CONDITIONS
  
     APPENDIX: How to apply the Apache License to your work.
  
        To apply the Apache License to your work, attach the following
        boilerplate notice, with the fields enclosed by brackets "{}"
        replaced with your own identifying information. (Don't include
        the brackets!)  The text should be enclosed in the appropriate
        comment syntax for the file format. We also recommend that a
        file or class name and description of purpose be included on the
        same "printed page" as the copyright notice for easier
        identification within third-party archives.
  
     Copyright {yyyy} {name of copyright owner}
  
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
  
         http://www.apache.org/licenses/LICENSE-2.0
  
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
  */
  
  SVD.svd = function (A) {
    this.U = null;
    this.V = null;
    this.s = null;
    this.m = 0;
    this.n = 0;
    this.m = A.length;
    this.n = A[0].length;
    var nu = Math.min(this.m, this.n);
    this.s = function (s) {
      var a = [];
      while (s-- > 0) {
        a.push(0);
      }return a;
    }(Math.min(this.m + 1, this.n));
    this.U = function (dims) {
      var allocate = function allocate(dims) {
        if (dims.length == 0) {
          return 0;
        } else {
          var array = [];
          for (var i = 0; i < dims[0]; i++) {
            array.push(allocate(dims.slice(1)));
          }
          return array;
        }
      };
      return allocate(dims);
    }([this.m, nu]);
    this.V = function (dims) {
      var allocate = function allocate(dims) {
        if (dims.length == 0) {
          return 0;
        } else {
          var array = [];
          for (var i = 0; i < dims[0]; i++) {
            array.push(allocate(dims.slice(1)));
          }
          return array;
        }
      };
      return allocate(dims);
    }([this.n, this.n]);
    var e = function (s) {
      var a = [];
      while (s-- > 0) {
        a.push(0);
      }return a;
    }(this.n);
    var work = function (s) {
      var a = [];
      while (s-- > 0) {
        a.push(0);
      }return a;
    }(this.m);
    var wantu = true;
    var wantv = true;
    var nct = Math.min(this.m - 1, this.n);
    var nrt = Math.max(0, Math.min(this.n - 2, this.m));
    for (var k = 0; k < Math.max(nct, nrt); k++) {
      if (k < nct) {
        this.s[k] = 0;
        for (var i = k; i < this.m; i++) {
          this.s[k] = SVD.hypot(this.s[k], A[i][k]);
        }
        ;
        if (this.s[k] !== 0.0) {
          if (A[k][k] < 0.0) {
            this.s[k] = -this.s[k];
          }
          for (var _i = k; _i < this.m; _i++) {
            A[_i][k] /= this.s[k];
          }
          ;
          A[k][k] += 1.0;
        }
        this.s[k] = -this.s[k];
      }
      for (var j = k + 1; j < this.n; j++) {
        if (function (lhs, rhs) {
          return lhs && rhs;
        }(k < nct, this.s[k] !== 0.0)) {
          var t = 0;
          for (var _i2 = k; _i2 < this.m; _i2++) {
            t += A[_i2][k] * A[_i2][j];
          }
          ;
          t = -t / A[k][k];
          for (var _i3 = k; _i3 < this.m; _i3++) {
            A[_i3][j] += t * A[_i3][k];
          }
          ;
        }
        e[j] = A[k][j];
      }
      ;
      if (function (lhs, rhs) {
        return lhs && rhs;
      }(wantu, k < nct)) {
        for (var _i4 = k; _i4 < this.m; _i4++) {
          this.U[_i4][k] = A[_i4][k];
        }
        ;
      }
      if (k < nrt) {
        e[k] = 0;
        for (var _i5 = k + 1; _i5 < this.n; _i5++) {
          e[k] = SVD.hypot(e[k], e[_i5]);
        }
        ;
        if (e[k] !== 0.0) {
          if (e[k + 1] < 0.0) {
            e[k] = -e[k];
          }
          for (var _i6 = k + 1; _i6 < this.n; _i6++) {
            e[_i6] /= e[k];
          }
          ;
          e[k + 1] += 1.0;
        }
        e[k] = -e[k];
        if (function (lhs, rhs) {
          return lhs && rhs;
        }(k + 1 < this.m, e[k] !== 0.0)) {
          for (var _i7 = k + 1; _i7 < this.m; _i7++) {
            work[_i7] = 0.0;
          }
          ;
          for (var _j = k + 1; _j < this.n; _j++) {
            for (var _i8 = k + 1; _i8 < this.m; _i8++) {
              work[_i8] += e[_j] * A[_i8][_j];
            }
            ;
          }
          ;
          for (var _j2 = k + 1; _j2 < this.n; _j2++) {
            var _t = -e[_j2] / e[k + 1];
            for (var _i9 = k + 1; _i9 < this.m; _i9++) {
              A[_i9][_j2] += _t * work[_i9];
            }
            ;
          }
          ;
        }
        if (wantv) {
          for (var _i10 = k + 1; _i10 < this.n; _i10++) {
            this.V[_i10][k] = e[_i10];
          };
        }
      }
    };
    var p = Math.min(this.n, this.m + 1);
    if (nct < this.n) {
      this.s[nct] = A[nct][nct];
    }
    if (this.m < p) {
      this.s[p - 1] = 0.0;
    }
    if (nrt + 1 < p) {
      e[nrt] = A[nrt][p - 1];
    }
    e[p - 1] = 0.0;
    if (wantu) {
      for (var _j3 = nct; _j3 < nu; _j3++) {
        for (var _i11 = 0; _i11 < this.m; _i11++) {
          this.U[_i11][_j3] = 0.0;
        }
        ;
        this.U[_j3][_j3] = 1.0;
      };
      for (var _k = nct - 1; _k >= 0; _k--) {
        if (this.s[_k] !== 0.0) {
          for (var _j4 = _k + 1; _j4 < nu; _j4++) {
            var _t2 = 0;
            for (var _i12 = _k; _i12 < this.m; _i12++) {
              _t2 += this.U[_i12][_k] * this.U[_i12][_j4];
            };
            _t2 = -_t2 / this.U[_k][_k];
            for (var _i13 = _k; _i13 < this.m; _i13++) {
              this.U[_i13][_j4] += _t2 * this.U[_i13][_k];
            };
          };
          for (var _i14 = _k; _i14 < this.m; _i14++) {
            this.U[_i14][_k] = -this.U[_i14][_k];
          };
          this.U[_k][_k] = 1.0 + this.U[_k][_k];
          for (var _i15 = 0; _i15 < _k - 1; _i15++) {
            this.U[_i15][_k] = 0.0;
          };
        } else {
          for (var _i16 = 0; _i16 < this.m; _i16++) {
            this.U[_i16][_k] = 0.0;
          };
          this.U[_k][_k] = 1.0;
        }
      };
    }
    if (wantv) {
      for (var _k2 = this.n - 1; _k2 >= 0; _k2--) {
        if (function (lhs, rhs) {
          return lhs && rhs;
        }(_k2 < nrt, e[_k2] !== 0.0)) {
          for (var _j5 = _k2 + 1; _j5 < nu; _j5++) {
            var _t3 = 0;
            for (var _i17 = _k2 + 1; _i17 < this.n; _i17++) {
              _t3 += this.V[_i17][_k2] * this.V[_i17][_j5];
            };
            _t3 = -_t3 / this.V[_k2 + 1][_k2];
            for (var _i18 = _k2 + 1; _i18 < this.n; _i18++) {
              this.V[_i18][_j5] += _t3 * this.V[_i18][_k2];
            };
          };
        }
        for (var _i19 = 0; _i19 < this.n; _i19++) {
          this.V[_i19][_k2] = 0.0;
        };
        this.V[_k2][_k2] = 1.0;
      };
    }
    var pp = p - 1;
    var iter = 0;
    var eps = Math.pow(2.0, -52.0);
    var tiny = Math.pow(2.0, -966.0);
    while (p > 0) {
      var _k3 = void 0;
      var kase = void 0;
      for (_k3 = p - 2; _k3 >= -1; _k3--) {
        if (_k3 === -1) {
          break;
        }
        if (Math.abs(e[_k3]) <= tiny + eps * (Math.abs(this.s[_k3]) + Math.abs(this.s[_k3 + 1]))) {
          e[_k3] = 0.0;
          break;
        }
      };
      if (_k3 === p - 2) {
        kase = 4;
      } else {
        var ks = void 0;
        for (ks = p - 1; ks >= _k3; ks--) {
          if (ks === _k3) {
            break;
          }
          var _t4 = (ks !== p ? Math.abs(e[ks]) : 0.0) + (ks !== _k3 + 1 ? Math.abs(e[ks - 1]) : 0.0);
          if (Math.abs(this.s[ks]) <= tiny + eps * _t4) {
            this.s[ks] = 0.0;
            break;
          }
        };
        if (ks === _k3) {
          kase = 3;
        } else if (ks === p - 1) {
          kase = 1;
        } else {
          kase = 2;
          _k3 = ks;
        }
      }
      _k3++;
      switch (kase) {
        case 1:
          {
            var f = e[p - 2];
            e[p - 2] = 0.0;
            for (var _j6 = p - 2; _j6 >= _k3; _j6--) {
              var _t5 = SVD.hypot(this.s[_j6], f);
              var cs = this.s[_j6] / _t5;
              var sn = f / _t5;
              this.s[_j6] = _t5;
              if (_j6 !== _k3) {
                f = -sn * e[_j6 - 1];
                e[_j6 - 1] = cs * e[_j6 - 1];
              }
              if (wantv) {
                for (var _i20 = 0; _i20 < this.n; _i20++) {
                  _t5 = cs * this.V[_i20][_j6] + sn * this.V[_i20][p - 1];
                  this.V[_i20][p - 1] = -sn * this.V[_i20][_j6] + cs * this.V[_i20][p - 1];
                  this.V[_i20][_j6] = _t5;
                };
              }
            };
          };
          break;
        case 2:
          {
            var _f = e[_k3 - 1];
            e[_k3 - 1] = 0.0;
            for (var _j7 = _k3; _j7 < p; _j7++) {
              var _t6 = SVD.hypot(this.s[_j7], _f);
              var _cs = this.s[_j7] / _t6;
              var _sn = _f / _t6;
              this.s[_j7] = _t6;
              _f = -_sn * e[_j7];
              e[_j7] = _cs * e[_j7];
              if (wantu) {
                for (var _i21 = 0; _i21 < this.m; _i21++) {
                  _t6 = _cs * this.U[_i21][_j7] + _sn * this.U[_i21][_k3 - 1];
                  this.U[_i21][_k3 - 1] = -_sn * this.U[_i21][_j7] + _cs * this.U[_i21][_k3 - 1];
                  this.U[_i21][_j7] = _t6;
                };
              }
            };
          };
          break;
        case 3:
          {
            var scale = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[p - 1]), Math.abs(this.s[p - 2])), Math.abs(e[p - 2])), Math.abs(this.s[_k3])), Math.abs(e[_k3]));
            var sp = this.s[p - 1] / scale;
            var spm1 = this.s[p - 2] / scale;
            var epm1 = e[p - 2] / scale;
            var sk = this.s[_k3] / scale;
            var ek = e[_k3] / scale;
            var b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2.0;
            var c = sp * epm1 * (sp * epm1);
            var shift = 0.0;
            if (function (lhs, rhs) {
              return lhs || rhs;
            }(b !== 0.0, c !== 0.0)) {
              shift = Math.sqrt(b * b + c);
              if (b < 0.0) {
                shift = -shift;
              }
              shift = c / (b + shift);
            }
            var _f2 = (sk + sp) * (sk - sp) + shift;
            var g = sk * ek;
            for (var _j8 = _k3; _j8 < p - 1; _j8++) {
              var _t7 = SVD.hypot(_f2, g);
              var _cs2 = _f2 / _t7;
              var _sn2 = g / _t7;
              if (_j8 !== _k3) {
                e[_j8 - 1] = _t7;
              }
              _f2 = _cs2 * this.s[_j8] + _sn2 * e[_j8];
              e[_j8] = _cs2 * e[_j8] - _sn2 * this.s[_j8];
              g = _sn2 * this.s[_j8 + 1];
              this.s[_j8 + 1] = _cs2 * this.s[_j8 + 1];
              if (wantv) {
                for (var _i22 = 0; _i22 < this.n; _i22++) {
                  _t7 = _cs2 * this.V[_i22][_j8] + _sn2 * this.V[_i22][_j8 + 1];
                  this.V[_i22][_j8 + 1] = -_sn2 * this.V[_i22][_j8] + _cs2 * this.V[_i22][_j8 + 1];
                  this.V[_i22][_j8] = _t7;
                };
              }
              _t7 = SVD.hypot(_f2, g);
              _cs2 = _f2 / _t7;
              _sn2 = g / _t7;
              this.s[_j8] = _t7;
              _f2 = _cs2 * e[_j8] + _sn2 * this.s[_j8 + 1];
              this.s[_j8 + 1] = -_sn2 * e[_j8] + _cs2 * this.s[_j8 + 1];
              g = _sn2 * e[_j8 + 1];
              e[_j8 + 1] = _cs2 * e[_j8 + 1];
              if (wantu && _j8 < this.m - 1) {
                for (var _i23 = 0; _i23 < this.m; _i23++) {
                  _t7 = _cs2 * this.U[_i23][_j8] + _sn2 * this.U[_i23][_j8 + 1];
                  this.U[_i23][_j8 + 1] = -_sn2 * this.U[_i23][_j8] + _cs2 * this.U[_i23][_j8 + 1];
                  this.U[_i23][_j8] = _t7;
                };
              }
            };
            e[p - 2] = _f2;
            iter = iter + 1;
          };
          break;
        case 4:
          {
            if (this.s[_k3] <= 0.0) {
              this.s[_k3] = this.s[_k3] < 0.0 ? -this.s[_k3] : 0.0;
              if (wantv) {
                for (var _i24 = 0; _i24 <= pp; _i24++) {
                  this.V[_i24][_k3] = -this.V[_i24][_k3];
                };
              }
            }
            while (_k3 < pp) {
              if (this.s[_k3] >= this.s[_k3 + 1]) {
                break;
              }
              var _t8 = this.s[_k3];
              this.s[_k3] = this.s[_k3 + 1];
              this.s[_k3 + 1] = _t8;
              if (wantv && _k3 < this.n - 1) {
                for (var _i25 = 0; _i25 < this.n; _i25++) {
                  _t8 = this.V[_i25][_k3 + 1];
                  this.V[_i25][_k3 + 1] = this.V[_i25][_k3];
                  this.V[_i25][_k3] = _t8;
                };
              }
              if (wantu && _k3 < this.m - 1) {
                for (var _i26 = 0; _i26 < this.m; _i26++) {
                  _t8 = this.U[_i26][_k3 + 1];
                  this.U[_i26][_k3 + 1] = this.U[_i26][_k3];
                  this.U[_i26][_k3] = _t8;
                };
              }
              _k3++;
            };
            iter = 0;
            p--;
          };
          break;
      }
    };
    var result = { U: this.U, V: this.V, S: this.s };
    return result;
  };
  
  // sqrt(a^2 + b^2) without under/overflow.
  SVD.hypot = function (a, b) {
    var r = void 0;
    if (Math.abs(a) > Math.abs(b)) {
      r = b / a;
      r = Math.abs(a) * Math.sqrt(1 + r * r);
    } else if (b != 0) {
      r = a / b;
      r = Math.abs(b) * Math.sqrt(1 + r * r);
    } else {
      r = 0.0;
    }
    return r;
  };
  
  module.exports = SVD;
  
  /***/ }),
  /* 27 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  /**
   *   Needleman-Wunsch algorithm is an procedure to compute the optimal global alignment of two string
   *   sequences by S.B.Needleman and C.D.Wunsch (1970).
   *
   *   Aside from the inputs, you can assign the scores for,
   *   - Match: The two characters at the current index are same.
   *   - Mismatch: The two characters at the current index are different.
   *   - Insertion/Deletion(gaps): The best alignment involves one letter aligning to a gap in the other string.
   */
  
  var NeedlemanWunsch = function () {
      function NeedlemanWunsch(sequence1, sequence2) {
          var match_score = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var mismatch_penalty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
          var gap_penalty = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  
          _classCallCheck(this, NeedlemanWunsch);
  
          this.sequence1 = sequence1;
          this.sequence2 = sequence2;
          this.match_score = match_score;
          this.mismatch_penalty = mismatch_penalty;
          this.gap_penalty = gap_penalty;
  
          // Just the remove redundancy
          this.iMax = sequence1.length + 1;
          this.jMax = sequence2.length + 1;
  
          // Grid matrix of scores
          this.grid = new Array(this.iMax);
          for (var i = 0; i < this.iMax; i++) {
              this.grid[i] = new Array(this.jMax);
  
              for (var j = 0; j < this.jMax; j++) {
                  this.grid[i][j] = 0;
              }
          }
  
          // Traceback matrix (2D array, each cell is an array of boolean values for [`Diag`, `Up`, `Left`] positions)
          this.tracebackGrid = new Array(this.iMax);
          for (var _i = 0; _i < this.iMax; _i++) {
              this.tracebackGrid[_i] = new Array(this.jMax);
  
              for (var _j = 0; _j < this.jMax; _j++) {
                  this.tracebackGrid[_i][_j] = [null, null, null];
              }
          }
  
          // The aligned sequences (return multiple possibilities)
          this.alignments = [];
  
          // Final alignment score
          this.score = -1;
  
          // Calculate scores and tracebacks
          this.computeGrids();
      }
  
      _createClass(NeedlemanWunsch, [{
          key: "getScore",
          value: function getScore() {
              return this.score;
          }
      }, {
          key: "getAlignments",
          value: function getAlignments() {
              return this.alignments;
          }
  
          // Main dynamic programming procedure
  
      }, {
          key: "computeGrids",
          value: function computeGrids() {
              // Fill in the first row
              for (var j = 1; j < this.jMax; j++) {
                  this.grid[0][j] = this.grid[0][j - 1] + this.gap_penalty;
                  this.tracebackGrid[0][j] = [false, false, true];
              }
  
              // Fill in the first column
              for (var i = 1; i < this.iMax; i++) {
                  this.grid[i][0] = this.grid[i - 1][0] + this.gap_penalty;
                  this.tracebackGrid[i][0] = [false, true, false];
              }
  
              // Fill the rest of the grid
              for (var _i2 = 1; _i2 < this.iMax; _i2++) {
                  for (var _j2 = 1; _j2 < this.jMax; _j2++) {
                      // Find the max score(s) among [`Diag`, `Up`, `Left`]
                      var diag = void 0;
                      if (this.sequence1[_i2 - 1] === this.sequence2[_j2 - 1]) diag = this.grid[_i2 - 1][_j2 - 1] + this.match_score;else diag = this.grid[_i2 - 1][_j2 - 1] + this.mismatch_penalty;
  
                      var up = this.grid[_i2 - 1][_j2] + this.gap_penalty;
                      var left = this.grid[_i2][_j2 - 1] + this.gap_penalty;
  
                      // If there exists multiple max values, capture them for multiple paths
                      var maxOf = [diag, up, left];
                      var indices = this.arrayAllMaxIndexes(maxOf);
  
                      // Update Grids
                      this.grid[_i2][_j2] = maxOf[indices[0]];
                      this.tracebackGrid[_i2][_j2] = [indices.includes(0), indices.includes(1), indices.includes(2)];
                  }
              }
  
              // Update alignment score
              this.score = this.grid[this.iMax - 1][this.jMax - 1];
          }
  
          // Gets all possible valid sequence combinations
  
      }, {
          key: "alignmentTraceback",
          value: function alignmentTraceback() {
              var inProcessAlignments = [];
  
              inProcessAlignments.push({ pos: [this.sequence1.length, this.sequence2.length],
                  seq1: "",
                  seq2: ""
              });
  
              while (inProcessAlignments[0]) {
                  var current = inProcessAlignments[0];
                  var directions = this.tracebackGrid[current.pos[0]][current.pos[1]];
  
                  if (directions[0]) {
                      inProcessAlignments.push({ pos: [current.pos[0] - 1, current.pos[1] - 1],
                          seq1: this.sequence1[current.pos[0] - 1] + current.seq1,
                          seq2: this.sequence2[current.pos[1] - 1] + current.seq2
                      });
                  }
                  if (directions[1]) {
                      inProcessAlignments.push({ pos: [current.pos[0] - 1, current.pos[1]],
                          seq1: this.sequence1[current.pos[0] - 1] + current.seq1,
                          seq2: '-' + current.seq2
                      });
                  }
                  if (directions[2]) {
                      inProcessAlignments.push({ pos: [current.pos[0], current.pos[1] - 1],
                          seq1: '-' + current.seq1,
                          seq2: this.sequence2[current.pos[1] - 1] + current.seq2
                      });
                  }
  
                  if (current.pos[0] === 0 && current.pos[1] === 0) this.alignments.push({ sequence1: current.seq1,
                      sequence2: current.seq2
                  });
  
                  inProcessAlignments.shift();
              }
  
              return this.alignments;
          }
  
          // Helper Functions
  
      }, {
          key: "getAllIndexes",
          value: function getAllIndexes(arr, val) {
              var indexes = [],
                  i = -1;
              while ((i = arr.indexOf(val, i + 1)) !== -1) {
                  indexes.push(i);
              }
              return indexes;
          }
      }, {
          key: "arrayAllMaxIndexes",
          value: function arrayAllMaxIndexes(array) {
              return this.getAllIndexes(array, Math.max.apply(null, array));
          }
      }]);
  
      return NeedlemanWunsch;
  }();
  
  module.exports = NeedlemanWunsch;
  
  /***/ }),
  /* 28 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var layoutBase = function layoutBase() {
    return;
  };
  
  layoutBase.FDLayout = __webpack_require__(18);
  layoutBase.FDLayoutConstants = __webpack_require__(4);
  layoutBase.FDLayoutEdge = __webpack_require__(19);
  layoutBase.FDLayoutNode = __webpack_require__(20);
  layoutBase.DimensionD = __webpack_require__(21);
  layoutBase.HashMap = __webpack_require__(22);
  layoutBase.HashSet = __webpack_require__(23);
  layoutBase.IGeometry = __webpack_require__(8);
  layoutBase.IMath = __webpack_require__(9);
  layoutBase.Integer = __webpack_require__(10);
  layoutBase.Point = __webpack_require__(12);
  layoutBase.PointD = __webpack_require__(5);
  layoutBase.RandomSeed = __webpack_require__(16);
  layoutBase.RectangleD = __webpack_require__(13);
  layoutBase.Transform = __webpack_require__(17);
  layoutBase.UniqueIDGeneretor = __webpack_require__(14);
  layoutBase.Quicksort = __webpack_require__(25);
  layoutBase.LinkedList = __webpack_require__(11);
  layoutBase.LGraphObject = __webpack_require__(2);
  layoutBase.LGraph = __webpack_require__(6);
  layoutBase.LEdge = __webpack_require__(1);
  layoutBase.LGraphManager = __webpack_require__(7);
  layoutBase.LNode = __webpack_require__(3);
  layoutBase.Layout = __webpack_require__(15);
  layoutBase.LayoutConstants = __webpack_require__(0);
  layoutBase.NeedlemanWunsch = __webpack_require__(27);
  layoutBase.Matrix = __webpack_require__(24);
  layoutBase.SVD = __webpack_require__(26);
  
  module.exports = layoutBase;
  
  /***/ }),
  /* 29 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  function Emitter() {
    this.listeners = [];
  }
  
  var p = Emitter.prototype;
  
  p.addListener = function (event, callback) {
    this.listeners.push({
      event: event,
      callback: callback
    });
  };
  
  p.removeListener = function (event, callback) {
    for (var i = this.listeners.length; i >= 0; i--) {
      var l = this.listeners[i];
  
      if (l.event === event && l.callback === callback) {
        this.listeners.splice(i, 1);
      }
    }
  };
  
  p.emit = function (event, data) {
    for (var i = 0; i < this.listeners.length; i++) {
      var l = this.listeners[i];
  
      if (event === l.event) {
        l.callback(data);
      }
    }
  };
  
  module.exports = Emitter;
  
  /***/ })
  /******/ ]);
  });




  (function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
      module.exports = factory(require("layout-base"));
    else if(typeof define === 'function' && define.amd)
      define(["layout-base"], factory);
    else if(typeof exports === 'object')
      exports["avsdfBase"] = factory(require("layout-base"));
    else
      root["avsdfBase"] = factory(root["layoutBase"]);
  })(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
  return /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// identity function for calling harmony imports with the correct context
  /******/ 	__webpack_require__.i = function(value) { return value; };
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, {
  /******/ 				configurable: false,
  /******/ 				enumerable: true,
  /******/ 				get: getter
  /******/ 			});
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = 6);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ (function(module, exports) {
  
  module.exports = __WEBPACK_EXTERNAL_MODULE_0__;
  
  /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * This class implements data and functionality required for AVSDF layout per
   * circle.
   *
   *
   * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
   */
  
  var LGraph = __webpack_require__(0).LGraph;
  
  // -----------------------------------------------------------------------------
  // Section: Initializations
  // -----------------------------------------------------------------------------
  
  function AVSDFCircle(parent, graphMgr, vObject) {
      LGraph.call(this, parent, graphMgr, vObject);
      this.inOrder = undefined;
      this.currentIndex = 0;
      this.nodeSeparation = undefined;
      this.stack = [];
      this.perimeter = 0;
      this.centerX = 0;
      this.centerY = 0;
      this.radius = 0;
  }
  
  AVSDFCircle.prototype = Object.create(LGraph.prototype);
  
  for (var property in LGraph) {
      AVSDFCircle[property] = LGraph[property];
  }
  
  AVSDFCircle.prototype.initOrdering = function () {
      this.inOrder = [];
  };
  
  // -----------------------------------------------------------------------------
  // Section: Accessor Functions
  // -----------------------------------------------------------------------------
  
  // This function returns the array in which the nodes of this circle are kept in order.
  AVSDFCircle.prototype.getOrder = function () {
      return this.inOrder;
  };
  
  // This function returns the x-coordinate of the center of this circle.
  AVSDFCircle.prototype.getCenterX = function () {
      return this.centerX;
  };
  
  // This function returns the y-coordinate of the center of this circle.
  AVSDFCircle.prototype.getCenterY = function () {
      return this.centerY;
  };
  
  // This function returns the radius of this circle.
  AVSDFCircle.prototype.getRadius = function () {
      return this.radius;
  };
  
  // This function returns the total number of vertices of this circle.
  AVSDFCircle.prototype.getSize = function () {
      return this.getNodes().length;
  };
  
  // This function calculates and returns the total number of crossings in this
  // circle by adding up the crossing number of individual nodes on it.
  AVSDFCircle.prototype.getTotalCrossingOfCircle = function () {
      var self = this;
      var crossingNumber = 0;
  
      for (var node in self.inOrder) {
          var nodeCrossing = node.getTotalCrossingOfEdges();
          if (nodeCrossing === -1) {
              return -1;
          }
          crossingNumber += nodeCrossing;
      }
  
      return crossingNumber / 4;
  };
  
  // This function checks whether or not all of the vertices of this circle are
  // assigned an index on the circle.
  AVSDFCircle.prototype.hasFinishedOrdering = function () {
      return this.currentIndex === this.getNodes().length;
  };
  
  // This function returns the node separation of this circle.
  AVSDFCircle.prototype.getNodeSeparation = function () {
      return this.nodeSeparation;
  };
  
  // This function sets the node separation of this circle.
  AVSDFCircle.prototype.setNodeSeparation = function (nodeSeparation) {
      this.nodeSeparation = nodeSeparation;
  };
  
  // -----------------------------------------------------------------------------
  // Section: Remaining Functions
  // -----------------------------------------------------------------------------
  
  // This function traverses the vertices of this circle and corrects the angle
  // of the vertices with respect to their circle indices.
  AVSDFCircle.prototype.correctAngles = function () {
      var self = this;
      self.currentIndex = 0;
  
      self.inOrder.forEach(function (node) {
          return self.putInOrder(node);
      });
  };
  
  // This function puts the given node on the circle in the current order and
  // sets its angle appropriately.
  AVSDFCircle.prototype.putInOrder = function (node) {
      var self = this;
  
      var nodes = self.getNodes();
  
      // Note that id attribute of a node is added before
      // AVSDFLayout is called
      var found = false;
      for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].id == node.id) {
              found = true;
              break;
          }
      }
  
      if (!found) {
          throw "The node must be a member of LGraph";
      }
  
      self.inOrder[self.currentIndex] = node;
      node.setIndex(self.currentIndex);
  
      if (self.currentIndex === 0) {
          node.setAngle(0.0);
      } else {
          node.setAngle(self.inOrder[self.currentIndex - 1].getAngle() + 2 * Math.PI * (node.getDiagonal() / 2 + self.nodeSeparation + self.inOrder[self.currentIndex - 1].getDiagonal() / 2) / self.perimeter);
      }
  
      self.currentIndex++;
  };
  
  // This function returns the next node to be placed on this circle with
  // respect to the AVSDF algorithm.
  AVSDFCircle.prototype.findNodeToPlace = function () {
      var self = this;
      var sDegreeNode = undefined;
  
      // Find the smallest degree vertex if the stack is empty
      if (self.stack.length === 0) {
          sDegreeNode = self.findUnorderedSmallestDegreeNode();
      }
      // Find the first vertex in the stack not yet placed
      else {
              var foundUnorderNode = false;
  
              while (!foundUnorderNode && !(self.stack.length === 0)) {
                  sDegreeNode = self.stack.pop();
                  foundUnorderNode = !sDegreeNode.isOrdered();
              }
  
              if (!foundUnorderNode) {
                  sDegreeNode = undefined;
              }
          }
  
      // If no unordered vertex is found in the stack, find one
      // from the remaining ones
      if (sDegreeNode === undefined) {
          sDegreeNode = self.findUnorderedSmallestDegreeNode();
      }
  
      // Add the unordered neighbors of this node to the stack
      if (sDegreeNode !== undefined) {
          var neighbors = sDegreeNode.getNeighborsSortedByDegree();
  
          for (var i = neighbors.length - 1; i >= 0; i--) {
              var neighbor = neighbors[i];
  
              if (!neighbor.isOrdered()) // Check here for possible error
                  {
                      self.stack.push(neighbor);
                  }
          }
      }
  
      return sDegreeNode;
  };
  
  // This function calculates the radius of this circle with respect to the sizes
  // of the vertices and the node separation parameter.
  AVSDFCircle.prototype.calculateRadius = function () {
      var self = this;
      var totalDiagonal = 0;
  
      self.getNodes().forEach(function (node) {
          return totalDiagonal += Math.sqrt(node.getWidth() * node.getWidth() + node.getHeight() * node.getHeight());
      });
  
      self.perimeter = totalDiagonal + self.getNodes().length * self.nodeSeparation;
      var radius = self.perimeter / (2 * Math.PI);
  
      // Check here for possible error
  
      self.getParent().setWidth(2 * radius);
      self.getParent().setHeight(2 * radius);
      self.getParent().setCenter(self.getParent().getWidth(), self.getParent().getHeight());
  
      self.centerX = self.getParent().getCenterX();
      self.centerY = self.getParent().getCenterY();
      self.radius = self.getParent().getHeight() / 2;
  };
  
  // This function calculates the total number of crossings of all vertices of
  // this circle.
  AVSDFCircle.prototype.calculateEdgeCrossingsOfNodes = function () {
      this.getNodes().forEach(function (node) {
          return node.calculateTotalCrossing();
      });
  };
  
  // This function sets the index of each vertex to its position in inOrder
  // array. Note that index of a node can be different from its place in the
  // array due to crossing reduction phase of the AVSDF algorithm. It loads
  // old index values to vertices due to an increase in the number of
  // crossings with the new indices.
  AVSDFCircle.prototype.loadOldIndicesOfNodes = function () {
      //this.inOrder.forEach( (node,index) => node.setIndex(index));
      var self = this;
      for (var i = 0; i < this.inOrder.length; i++) {
          self.inOrder[i].setIndex(i);
      }
  };
  
  // This function sets the position of each node in inOrder array to its index.
  // Note that index of a node can be different from its place in the inOrder
  // array due to crossing reduction phase of the AVSDF algorithm. This function
  // puts the nodes to their new index values in inOrder array due to a
  // decrease in the number of crossings with the new indices.
  AVSDFCircle.prototype.reOrderVertices = function () {
      var self = this;
      this.getNodes().forEach(function (node) {
          return self.inOrder[node.getIndex()] = node;
      });
  };
  
  // This function finds and returns the unordered smallest degree vertex on
  // this circle.
  AVSDFCircle.prototype.findUnorderedSmallestDegreeNode = function () {
      var minDegree = Number.MAX_SAFE_INTEGER;
      var sDegreeNode = void 0;
  
      this.getNodes().forEach(function (node) {
          if (node.getDegree() < minDegree && !node.isOrdered()) {
              minDegree = node.getDegree();
              sDegreeNode = node;
          }
      });
  
      return sDegreeNode;
  };
  
  module.exports = AVSDFCircle;
  
  /***/ }),
  /* 2 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var LayoutConstants = __webpack_require__(0).LayoutConstants;
  
  function AVSDFConstants() {}
  
  // AVSDFConstants inherits properties in LayoutConstants
  for (var prop in LayoutConstants) {
      AVSDFConstants[prop] = LayoutConstants[prop];
  }
  
  AVSDFConstants.DEFAULT_NODE_SEPARATION = 60;
  
  module.exports = AVSDFConstants;
  
  /***/ }),
  /* 3 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * This class implements data and functionality required for AVSDF layout per
   * edge.
   *
  
   * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
   */
  
  var LEdge = __webpack_require__(0).LEdge;
  
  // -----------------------------------------------------------------------------
  // Section: Initializations
  // -----------------------------------------------------------------------------
  
  function AVSDFEdge(source, target, vEdge) {
      LEdge.call(this, source, target, vEdge);
  }
  
  AVSDFEdge.prototype = Object.create(LEdge.prototype);
  
  for (var properties in LEdge) {
      AVSDFEdge[properties] = LEdge[properties];
  }
  
  // -----------------------------------------------------------------------------
  // Section: Accessor Functions
  // -----------------------------------------------------------------------------
  
  // The function getOtherEnd returns the other end of this edge.
  AVSDFEdge.prototype.getOtherEnd = function (node) {
      return LEdge.prototype.getOtherEnd(node);
  };
  
  // -----------------------------------------------------------------------------
  // Section: Remaining Functions
  // -----------------------------------------------------------------------------
  
  // This function checks whether this edge crosses with the input edge. It
  // returns false, if any of the vertices those edges are incident to are not
  // yet placed on the circle.
  AVSDFEdge.prototype.crossesWithEdge = function (otherEdge) {
      var self = this;
      var sourcePos = self.getSource().getIndex();
      var targetPos = self.getTarget().getIndex();
      var otherSourcePos = otherEdge.getSource().getIndex();
      var otherTargetPos = otherEdge.getTarget().getIndex();
  
      // if any of the vertices those two edges are not yet placed
      if (sourcePos === -1 || targetPos === -1 || otherSourcePos === -1 || otherTargetPos === -1) {
          return false;
      }
  
      var otherSourceDist = otherEdge.getSource().getCircDistWithTheNode(self.getSource());
      var otherTargetDist = otherEdge.getTarget().getCircDistWithTheNode(self.getSource());
      var thisTargetDist = self.getTarget().getCircDistWithTheNode(self.getSource());
  
      if (thisTargetDist < Math.max(otherSourceDist, otherTargetDist) && thisTargetDist > Math.min(otherSourceDist, otherTargetDist) && otherTargetDist !== 0 && otherSourceDist !== 0) {
          return true;
      }
  
      return false;
  };
  
  // This function returns 1 if this edge crosses with the input edge, 0
  // otherwise.
  AVSDFEdge.prototype.crossingWithEdge = function (otherEdge) {
      var self = this;
      var result = self.crossesWithEdge(otherEdge);
  
      return result ? 1 : 0;
  };
  
  // This function calculates the total number of crossings of this edge with
  // all the edges given in the input list.
  AVSDFEdge.prototype.calculateTotalCrossingWithList = function (edgeList) {
      var self = this;
      var totalCrossing = 0;
  
      edgeList.forEach(function (edge) {
          return totalCrossing += self.crossingWithEdge(edge);
      });
  
      return totalCrossing;
  };
  
  module.exports = AVSDFEdge;
  
  /***/ }),
  /* 4 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * This class implements data and functionality required for AVSDF layout per
   * node.
   *
   *
   * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
   */
  
  var LNode = __webpack_require__(0).LNode;
  var Quicksort = __webpack_require__(0).Quicksort;
  
  // -----------------------------------------------------------------------------
  // Section: Initializations
  // -----------------------------------------------------------------------------
  
  function AVSDFNode(gm, vNode, loc, size) {
      // Constructor 1: AVSDFNode(gm, vNode, loc, size)
      if (loc !== undefined && size !== undefined) {
          LNode.call(this, gm, vNode, loc, size);
      }
      // Constructor 2: AVSDFNode(gm, vNode)
      else {
              LNode.call(this, gm, vNode);
          }
  
      // Angle of this node on the owner circle in radians
      this.angle = 0;
  
      // Index of this node on the owner circle
      this.circleIndex = -1;
  
      // Total number of crossings of the edges this node is incident to
      this.totalCrossingOfEdges = -1;
  
      // Whether the current edge crossing number is valid or it needs to be
      // recalculated
      this.isCrossingNumberValid = false;
  }
  
  AVSDFNode.prototype = Object.create(LNode.prototype);
  for (var properties in LNode) {
      AVSDFNode[properties] = LNode[properties];
  }
  
  // -----------------------------------------------------------------------------
  // Section: Accessor Functions
  // -----------------------------------------------------------------------------
  
  // This function returns the circle this node is owned by.
  AVSDFNode.prototype.getCircle = function () {
      return this.getOwner();
  };
  
  // This function sets the index of this node on the circle, and sets the
  // crossing number invalid. Due to the index change of the node; it needs to
  // be recalculated.
  AVSDFNode.prototype.setIndex = function (index) {
      this.circleIndex = index;
      this.isCrossingNumberValid = false;
  };
  
  // This function returns the index of this node in the ordering of its owner
  // circle. Here -1 means that the vertex is not yet placed on its owner
  //circle.
  AVSDFNode.prototype.getIndex = function () {
      return this.circleIndex;
  };
  
  // This function returns the array of the neigbors of this node sorted in
  // ascending order.
  AVSDFNode.prototype.getNeighborsSortedByDegree = function () {
      var self = this;
  
      var result = Array.from(self.getNeighborsList());
      result = result.filter(function (node) {
          return node.getIndex() === -1;
      });
  
      result.sort(function (a, b) {
          return a.getDegree() - b.getDegree();
      });
  
      return result;
  };
  
  // This function returns the degree of this node.
  AVSDFNode.prototype.getDegree = function () {
      return this.getEdges().length;
  };
  
  // This function returns whether or not this node is currently placed on its
  // owner circle.
  AVSDFNode.prototype.isOrdered = function () {
      return this.getIndex() > -1;
  };
  
  // This function sets the angle of this node w.r.t. its owner circle. Here
  // the angle value is in radian.
  AVSDFNode.prototype.setAngle = function (angle) {
      this.angle = angle;
  };
  
  // This function returns the angle of this node w.r.t. its owner circle. Here
  // the angle value is in radian.
  AVSDFNode.prototype.getAngle = function () {
      return this.angle;
  };
  
  // This function returns the index difference of this node with the input
  // node. Note that the index difference cannot be negative if both nodes are
  // placed on the circle. Here -1 means at least one of the nodes are not yet
  // placed on the circle.
  AVSDFNode.prototype.getCircDistWithTheNode = function (refNode) {
      var self = this;
      var otherIndex = refNode.getIndex();
  
      if (otherIndex === -1 || self.getIndex() === -1) {
          return -1;
      }
  
      var diff = self.getIndex() - otherIndex;
  
      if (diff < 0) {
          diff += self.getCircle().getSize();
      }
  
      return diff;
  };
  
  // This function finds the number of edge crossings between the edges of
  // this node and the edges of the input one.
  AVSDFNode.prototype.getCrossingNumberWithNode = function (otherNode) {
      var self = this;
      var totalCrossing = 0;
  
      self.getEdges().forEach(function (edge) {
          otherNode.getEdges().forEach(function (otherEdge) {
              totalCrossing += edge.crossingWithEdge(otherEdge);
          });
      });
  
      return totalCrossing;
  };
  
  // This function returns the total number of edge crossings. If the previously
  // calculated value is not valid due to an index change on the circle, then
  // a recalculation is performed.
  AVSDFNode.prototype.getTotalCrossingOfEdges = function () {
      var self = this;
  
      if (!self.isCrossingNumberValid) {
          self.calculateTotalCrossing();
          self.isCrossingNumberValid = true;
      }
  
      return self.totalCrossingOfEdges;
  };
  
  // -----------------------------------------------------------------------------
  // Section: Remaining Functions
  // -----------------------------------------------------------------------------
  
  // This function calculates the total number of crossings the edges of this
  // node cause.
  AVSDFNode.prototype.calculateTotalCrossing = function () {
      var self = this;
      var temp_crossing_count = 0;
      var temp_edge_list = [];
      temp_edge_list.push.apply(temp_edge_list, self.getCircle().getEdges());
      temp_edge_list = temp_edge_list.filter(function (ele) {
          return self.getEdges().indexOf(ele) < 0;
      });
  
      self.getEdges().forEach(function (edge) {
          return temp_crossing_count += edge.calculateTotalCrossingWithList(temp_edge_list);
      });
  
      self.totalCrossingOfEdges = temp_crossing_count;
  };
  
  module.exports = AVSDFNode;
  
  /***/ }),
  /* 5 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * This class implements the overall layout process for the AVSDF algorithm
   * (Circular Drawing Algorithm by He and Sykora).
   *
   *
   * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
   */
  
  var Layout = __webpack_require__(0).Layout;
  var AVSDFConstants = __webpack_require__(2);
  var AVSDFCircle = __webpack_require__(1);
  var AVSDFNode = __webpack_require__(4);
  var AVSDFEdge = __webpack_require__(3);
  
  // -----------------------------------------------------------------------------
  // Section: Initializations
  // -----------------------------------------------------------------------------
  
  // Constructor
  function AVSDFLayout() {
      Layout.call(this);
      this.nodeSeparation = AVSDFConstants.DEFAULT_NODE_SEPARATION;
  }
  
  AVSDFLayout.prototype = Object.create(Layout.prototype);
  
  for (var property in Layout) {
      AVSDFLayout[property] = Layout[property];
  }
  
  AVSDFLayout.prototype.newGraph = function (vObject) {
      this.avsdfCircle = new AVSDFCircle(null, this.graphManager, vObject);
  
      return this.avsdfCircle;
  };
  
  AVSDFLayout.prototype.newNode = function (vNode) {
      return new AVSDFNode(this.graphManager, vNode);
  };
  
  AVSDFLayout.prototype.newEdge = function (vEdge) {
      return new AVSDFEdge(null, null, vEdge);
  };
  
  // -----------------------------------------------------------------------------
  // Section: Accessor Functions
  // -----------------------------------------------------------------------------
  
  // This function returns the position data for all nodes
  AVSDFLayout.prototype.getPositionsData = function () {
      var allNodes = this.graphManager.getAllNodes();
      var pData = {};
  
      for (var i = 0; i < allNodes.length; i++) {
          var rect = allNodes[i].rect;
          var id = allNodes[i].id;
  
          pData[id] = {
              id: id,
              x: rect.getCenterX(),
              y: rect.getCenterY(),
              w: rect.width,
              h: rect.height
          };
      }
  
      return pData;
  };
  
  // -----------------------------------------------------------------------------
  // Section: Layout Related
  // -----------------------------------------------------------------------------
  
  /**
   * This function performs layout on constructed l-level graph.
   * It returns true on success, false otherwise.
   * Important!: If you want to see the results of this function then, after this function is called, you have to calculate
   * and set the positions of every node. To do this call updateNodeCoordinates. However, updateNodeAngles on the other
   * hand is not needed (redundant) for this function.
   */
  AVSDFLayout.prototype.layout = function () {
      var self = this;
  
      // Check if graph contains any compound structures
      if (self.graphManager.getGraphs().length > 1) {
          return false;
      }
  
      var clusterGraph = this.avsdfCircle; // Fixed reference, but now it is a bit redundant
  
      clusterGraph.setNodeSeparation(this.nodeSeparation);
      clusterGraph.calculateRadius();
      clusterGraph.initOrdering();
  
      while (!clusterGraph.hasFinishedOrdering()) {
          var node = clusterGraph.findNodeToPlace();
          clusterGraph.putInOrder(node);
      }
  
      return true;
  };
  
  // This function updates the angle (in radians) property of AVSDFNode elements in the circle
  AVSDFLayout.prototype.updateNodeAngles = function () {
      this.graphManager.getRoot().correctAngles(); //AVSDFCircle object
  };
  
  // This function traverses the vertices of the graph and sets their correct coordinates with respect to the owner circle.
  AVSDFLayout.prototype.updateNodeCoordinates = function () {
      var clusterGraph = this.graphManager.getRoot();
  
      clusterGraph.getNodes().forEach(function (node) {
          node.setCenter(clusterGraph.getCenterX() + clusterGraph.getRadius() * Math.cos(node.getAngle()), clusterGraph.getCenterY() + clusterGraph.getRadius() * Math.sin(node.getAngle()));
      });
  };
  
  // -----------------------------------------------------------------------------
  // Section: Post Processing
  // -----------------------------------------------------------------------------
  
  /**
   * This method implements the post processing step of the algorithm, which
   * tries to minimize the number of edges further with respect to the local
   * adjusting algorithm described by He and Sykora.
   */
  AVSDFLayout.prototype.initPostProcess = function () {
      this.avsdfCircle.calculateEdgeCrossingsOfNodes();
  
      var list = this.avsdfCircle.getNodes();
  
      list.sort(function (a, b) {
          return b.getTotalCrossingOfEdges() - a.getTotalCrossingOfEdges();
      });
  
      return list;
  };
  
  AVSDFLayout.prototype.oneStepPostProcess = function (node) {
      var self = this;
  
      var currentCrossingNumber = node.getTotalCrossingOfEdges();
      var newCrossingNumber = void 0;
  
      var neighbours = Array.from(node.getNeighborsList());
  
      for (var j = 0; j < neighbours.length; j++) {
          var neighbour = neighbours[j];
  
          var oldIndex = node.getIndex();
          var newIndex = (neighbour.getIndex() + 1) % self.avsdfCircle.getSize();
  
          if (oldIndex !== newIndex) {
              node.setIndex(newIndex);
  
              if (oldIndex < node.getIndex()) {
                  oldIndex += self.avsdfCircle.getSize();
              }
  
              var index = node.getIndex();
  
              while (index < oldIndex) {
                  var temp = self.avsdfCircle.getOrder()[index % self.avsdfCircle.getSize()];
                  temp.setIndex((temp.getIndex() + 1) % self.avsdfCircle.getSize());
                  index += 1;
              }
  
              node.calculateTotalCrossing();
              newCrossingNumber = node.getTotalCrossingOfEdges();
  
              if (newCrossingNumber >= currentCrossingNumber) {
                  self.avsdfCircle.loadOldIndicesOfNodes();
              } else {
                  self.avsdfCircle.reOrderVertices();
                  currentCrossingNumber = newCrossingNumber;
              }
          }
      }
  };
  
  module.exports = AVSDFLayout;
  
  /***/ }),
  /* 6 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var avsdfBase = {};
  
  avsdfBase.layoutBase = __webpack_require__(0);
  avsdfBase.AVSDFConstants = __webpack_require__(2);
  avsdfBase.AVSDFEdge = __webpack_require__(3);
  avsdfBase.AVSDFCircle = __webpack_require__(1);
  avsdfBase.AVSDFLayout = __webpack_require__(5);
  avsdfBase.AVSDFNode = __webpack_require__(4);
  
  module.exports = avsdfBase;
  
  /***/ })
  /******/ ]);
  });




  (function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
      module.exports = factory(require("avsdf-base"));
    else if(typeof define === 'function' && define.amd)
      define(["avsdf-base"], factory);
    else if(typeof exports === 'object')
      exports["cytoscapeAvsdf"] = factory(require("avsdf-base"));
    else
      root["cytoscapeAvsdf"] = factory(root["avsdfBase"]);
  })(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
  return /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// identity function for calling harmony imports with the correct context
  /******/ 	__webpack_require__.i = function(value) { return value; };
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, {
  /******/ 				configurable: false,
  /******/ 				enumerable: true,
  /******/ 				get: getter
  /******/ 			});
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = 3);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ (function(module, exports) {
  
  module.exports = __WEBPACK_EXTERNAL_MODULE_0__;
  
  /***/ }),
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  // Simple, internal Object.assign() polyfill for options objects etc.
  
  module.exports = Object.assign != null ? Object.assign.bind(Object) : function (tgt) {
    for (var _len = arguments.length, srcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      srcs[_key - 1] = arguments[_key];
    }
  
    srcs.forEach(function (src) {
      Object.keys(src).forEach(function (k) {
        return tgt[k] = src[k];
      });
    });
  
    return tgt;
  };
  
  /***/ }),
  /* 2 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   *
   * Choose the type of layout that best suits your usecase as a starting point.
   *
   * A discrete layout is one that algorithmically sets resultant positions.  It
   * does not have intermediate positions.
   *
   * A continuous layout is one that updates positions continuously, like a force-
   * directed / physics simulation layout.
   */
  
  module.exports = __webpack_require__(4);
  
  /***/ }),
  /* 3 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var impl = __webpack_require__(2);
  
  // registers the extension on a cytoscape lib ref
  var register = function register(cytoscape) {
    if (!cytoscape) {
      return;
    } // can't register if cytoscape unspecified
  
    cytoscape('layout', 'avsdf', impl); // register with cytoscape.js
  };
  
  if (typeof cytoscape !== 'undefined') {
    // expose to global cytoscape (i.e. window.cytoscape)
    register(cytoscape);
  }
  
  module.exports = register;
  
  /***/ }),
  /* 4 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  /**
   * This class implements the overall layout process for the
   * Adjacent Vertex with Smallest Degree First (AVSDF) algorithm.
   * (Circular Drawing Algorithm by Hongmei He & Ondrej Sýkora).
   *
   * @author Doruk Çakmakçı
   * @author Alihan Okka
   *
   * Copyright: i-Vis (Information Visualization) Research Lab, Bilkent University, 2019 - present
  */
  
  // cytosscape.js-avsdf REQUIRES avsdf-base library elements
  var AVSDFLayout = __webpack_require__(0).AVSDFLayout;
  var AVSDFNode = __webpack_require__(0).AVSDFNode;
  var AVSDFConstants = __webpack_require__(0).AVSDFConstants;
  var PointD = __webpack_require__(0).layoutBase.PointD;
  var DimensionD = __webpack_require__(0).layoutBase.DimensionD;
  
  // Cytoscape-extention template requirements
  // More details can be found in NPM 'slush-cytoscape-extension' package
  var assign = __webpack_require__(1);
  var ContinuousLayout = __webpack_require__(6);
  
  var isFn = function isFn(fn) {
    return typeof fn === 'function';
  };
  var optFn = function optFn(opt, ele) {
    if (isFn(opt)) {
      return opt(ele);
    } else {
      return opt;
    }
  };
  
  var defaults = {
    ready: function ready() {}, // Called on `layoutready`
    stop: function stop() {}, // Called on `layoutstop`
    refresh: 30, // number of ticks per frame; higher is faster but more jerky
    fit: true, // Whether to fit the network view after when done
    padding: 10, // Padding on fit
    randomize: false, // Whether to enable incremental mode
    animate: 'end', // Type of layout animation. The option set is {'during', 'end', false}
    animationDuration: 500, // Duration for animate:end
    nodeSeparation: 60 // How apart the nodes are
  };
  
  /**
   *  This is the main class that does all the functionality.
   *  The class is utilized by functions in the continuous-base folder.
   */
  
  var AVSDF = function (_ContinuousLayout) {
    _inherits(AVSDF, _ContinuousLayout);
  
    function AVSDF(options) {
      _classCallCheck(this, AVSDF);
  
      // Whether node separation value is used
      var _this = _possibleConstructorReturn(this, (AVSDF.__proto__ || Object.getPrototypeOf(AVSDF)).call(this, assign({}, defaults, options)));
  
      if (options.nodeSeparation != null) AVSDFConstants.DEFAULT_NODE_SEPARATION = options.nodeSeparation;else AVSDFConstants.DEFAULT_NODE_SEPARATION = defaults.nodeSeparation;
      return _this;
    }
  
    /**
     *  Initializing AVSDF elements and arranging the nodes of the graph around the circle
     */
  
  
    _createClass(AVSDF, [{
      key: 'prerun',
      value: function prerun() {
        var state = this.state; // options object combined with current state
  
        // Initialize AVSDF elements and their requirements
        var avsdfLayout = this.avsdfLayout = new AVSDFLayout();
        var graphManager = this.graphManager = avsdfLayout.newGraphManager();
        var root = this.root = graphManager.addRoot();
        var nodes = state.nodes;
        var edges = state.edges;
  
        // Getting nodes of cytoscape and converting it to AVSDF structure
        this.idToLNode = {};
        this.processChildrenList(root, nodes, avsdfLayout);
  
        // Getting edges of cytoscape and transfering it to GraphManager
        for (var i = 0; i < edges.length; i++) {
          var edge = edges[i];
          var sourceNode = this.idToLNode[edge.data("source")];
          var targetNode = this.idToLNode[edge.data("target")];
          if (sourceNode !== targetNode && sourceNode.getEdgesBetween(targetNode).length === 0) {
            var e1 = graphManager.add(avsdfLayout.newEdge(), sourceNode, targetNode);
            e1.id = edge.id();
          }
        }
  
        // Running the AVSDF layout.
        // Note: This function doesn't do post-processing. Plus, nodes have to be positioned.
        // See AVSDFLayout for details.
        avsdfLayout.layout();
  
        // We need to calculate the initial circle position if we want to render it
        avsdfLayout.updateNodeCoordinates();
  
        // Post process is iterated over the sorted list of vertex degrees (descending)
        this.sortedByDegreeList = avsdfLayout.initPostProcess();
      }
  
      /**
       *  Runs this in each iteration
       */
  
    }, {
      key: 'tick',
      value: function tick() {
        var _this2 = this;
  
        var state = this.state;
        var self = this;
  
        // This function is used for getting coordinates from AVSDF elements and passing it to cytoscape
        var positions = this.avsdfLayout.getPositionsData();
        state.nodes.forEach(function (n) {
          var s = _this2.getScratch(n);
  
          // example : put node at random position
          s.x = positions[n.data('id')].x;
          s.y = positions[n.data('id')].y;
        });
  
        if (state.tickIndex >= state.nodes.size()) return true;
  
        this.avsdfLayout.oneStepPostProcess(this.sortedByDegreeList[state.tickIndex]);
        this.avsdfLayout.updateNodeAngles();
        this.avsdfLayout.updateNodeCoordinates();
      }
  
      /**
       *  Runs this function after the layout is done ticking
       */
  
    }, {
      key: 'postrun',
      value: function postrun() {}
  
      /**
       *  Clean up any object refs that could prevent garbage collection, etc.
       */
  
    }, {
      key: 'destroy',
      value: function destroy() {
        _get(AVSDF.prototype.__proto__ || Object.getPrototypeOf(AVSDF.prototype), 'destroy', this).call(this);
        return this;
      }
  
      /**
       *  Transition from cytoscape nodes to AVSDF elements
       */
  
    }, {
      key: 'processChildrenList',
      value: function processChildrenList(parent, children, layout) {
        var size = children.length;
        for (var i = 0; i < size; i++) {
          var theChild = children[i];
          var theNode = void 0;
  
          //Label dimensions are NOT included when calculating node dimensions
          var dimensions = theChild.layoutDimensions({
            nodeDimensionsIncludeLabels: false
          });
  
          if (theChild.outerWidth() != null && theChild.outerHeight() != null) {
            theNode = parent.add(new AVSDFNode(layout.graphManager, null, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
          } else {
            theNode = parent.add(new AVSDFNode(this.graphManager));
          }
  
          // Attach id to the layout node
          theNode.id = theChild.data("id");
  
          // Attach the paddings of cy node to layout node
          theNode.paddingLeft = parseInt(theChild.css('padding'));
          theNode.paddingTop = parseInt(theChild.css('padding'));
          theNode.paddingRight = parseInt(theChild.css('padding'));
          theNode.paddingBottom = parseInt(theChild.css('padding'));
  
          // Map the layout node
          this.idToLNode[theChild.data("id")] = theNode;
  
          if (isNaN(theNode.rect.x)) {
            theNode.rect.x = 0;
          }
  
          if (isNaN(theNode.rect.y)) {
            theNode.rect.y = 0;
          }
        }
      }
    }]);
  
    return AVSDF;
  }(ContinuousLayout);
  
  module.exports = AVSDF;
  
  /***/ }),
  /* 5 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  // general default options for force-directed layout
  
  module.exports = Object.freeze({
    animate: true, // whether to show the layout as it's running; special 'end' value makes the layout animate like a discrete layout
    refresh: 10, // number of ticks per frame; higher is faster but more jerky
    maxIterations: 1000, // max iterations before the layout will bail out
    ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
    fit: true, // on every layout reposition of nodes, fit the viewport
    padding: 30, // padding around the simulation
    boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  
    // layout event callbacks
    ready: function ready() {}, // on layoutready
    stop: function stop() {}, // on layoutstop
  
    // positioning options
    randomize: false, // use random node positions at beginning of layout
  
    // infinite layout options
    infinite: false // overrides all other options for a forces-all-the-time mode
  });
  
  /***/ }),
  /* 6 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  /**
   A generic continuous layout class
   */
  
  var assign = __webpack_require__(1);
  var defaults = __webpack_require__(5);
  var makeBoundingBox = __webpack_require__(7);
  
  var _require = __webpack_require__(8),
      setInitialPositionState = _require.setInitialPositionState,
      refreshPositions = _require.refreshPositions,
      getNodePositionData = _require.getNodePositionData;
  
  var _require2 = __webpack_require__(9),
      multitick = _require2.multitick;
  
  var Layout = function () {
    function Layout(options) {
      _classCallCheck(this, Layout);
  
      var o = this.options = assign({}, defaults, options);
  
      var s = this.state = assign({}, o, {
        layout: this,
        nodes: o.eles.nodes(),
        edges: o.eles.edges(),
        tickIndex: 0,
        firstUpdate: true
      });
  
      s.animateEnd = o.animate && o.animate === 'end';
      s.animateContinuously = o.animate && !s.animateEnd;
    }
  
    _createClass(Layout, [{
      key: 'getScratch',
      value: function getScratch(el) {
        var name = this.state.name;
        var scratch = el.scratch(name);
  
        if (!scratch) {
          scratch = {};
  
          el.scratch(name, scratch);
        }
  
        return scratch;
      }
    }, {
      key: 'run',
      value: function run() {
        var l = this;
        var s = this.state;
  
        s.tickIndex = 0;
        s.firstUpdate = true;
        s.startTime = Date.now();
        s.running = true;
  
        s.currentBoundingBox = makeBoundingBox(s.boundingBox, s.cy);
  
        if (s.ready) {
          l.one('ready', s.ready);
        }
        if (s.stop) {
          l.one('stop', s.stop);
        }
  
        s.nodes.forEach(function (n) {
          return setInitialPositionState(n, s);
        });
  
        l.prerun(s);
  
        if (s.animateContinuously) {
          var ungrabify = function ungrabify(node) {
            if (!s.ungrabifyWhileSimulating) {
              return;
            }
  
            var grabbable = getNodePositionData(node, s).grabbable = node.grabbable();
  
            if (grabbable) {
              node.ungrabify();
            }
          };
  
          var regrabify = function regrabify(node) {
            if (!s.ungrabifyWhileSimulating) {
              return;
            }
  
            var grabbable = getNodePositionData(node, s).grabbable;
  
            if (grabbable) {
              node.grabify();
            }
          };
  
          var updateGrabState = function updateGrabState(node) {
            return getNodePositionData(node, s).grabbed = node.grabbed();
          };
  
          var onGrab = function onGrab(_ref) {
            var target = _ref.target;
  
            updateGrabState(target);
          };
  
          var onFree = onGrab;
  
          var onDrag = function onDrag(_ref2) {
            var target = _ref2.target;
  
            var p = getNodePositionData(target, s);
            var tp = target.position();
  
            p.x = tp.x;
            p.y = tp.y;
          };
  
          var listenToGrab = function listenToGrab(node) {
            node.on('grab', onGrab);
            node.on('free', onFree);
            node.on('drag', onDrag);
          };
  
          var unlistenToGrab = function unlistenToGrab(node) {
            node.removeListener('grab', onGrab);
            node.removeListener('free', onFree);
            node.removeListener('drag', onDrag);
          };
  
          var fit = function fit() {
            if (s.fit && s.animateContinuously) {
              s.cy.fit(s.padding);
            }
          };
  
          var onNotDone = function onNotDone() {
            refreshPositions(s.nodes, s);
            fit();
  
            requestAnimationFrame(_frame);
          };
  
          var _frame = function _frame() {
            multitick(s, onNotDone, _onDone);
          };
  
          var _onDone = function _onDone() {
            refreshPositions(s.nodes, s);
            fit();
  
            s.nodes.forEach(function (n) {
              regrabify(n);
              unlistenToGrab(n);
            });
  
            s.running = false;
  
            l.emit('layoutstop');
          };
  
          l.emit('layoutstart');
  
          s.nodes.forEach(function (n) {
            ungrabify(n);
            listenToGrab(n);
          });
  
          _frame(); // kick off
        } else {
          var done = false;
          var _onNotDone = function _onNotDone() {};
          var _onDone2 = function _onDone2() {
            return done = true;
          };
  
          while (!done) {
            multitick(s, _onNotDone, _onDone2);
          }
  
          s.eles.layoutPositions(this, s, function (node) {
            var pd = getNodePositionData(node, s);
  
            return { x: pd.x, y: pd.y };
          });
        }
  
        l.postrun(s);
  
        return this; // chaining
      }
    }, {
      key: 'prerun',
      value: function prerun() {}
    }, {
      key: 'postrun',
      value: function postrun() {}
    }, {
      key: 'tick',
      value: function tick() {}
    }, {
      key: 'stop',
      value: function stop() {
        this.state.running = false;
  
        return this; // chaining
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        return this; // chaining
      }
    }]);
  
    return Layout;
  }();
  
  module.exports = Layout;
  
  /***/ }),
  /* 7 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  module.exports = function (bb, cy) {
    if (bb == null) {
      bb = { x1: 0, y1: 0, w: cy.width(), h: cy.height() };
    } else {
      // copy
      bb = { x1: bb.x1, x2: bb.x2, y1: bb.y1, y2: bb.y2, w: bb.w, h: bb.h };
    }
  
    if (bb.x2 == null) {
      bb.x2 = bb.x1 + bb.w;
    }
    if (bb.w == null) {
      bb.w = bb.x2 - bb.x1;
    }
    if (bb.y2 == null) {
      bb.y2 = bb.y1 + bb.h;
    }
    if (bb.h == null) {
      bb.h = bb.y2 - bb.y1;
    }
  
    return bb;
  };
  
  /***/ }),
  /* 8 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var assign = __webpack_require__(1);
  
  var setInitialPositionState = function setInitialPositionState(node, state) {
    var p = node.position();
    var bb = state.currentBoundingBox;
    var scratch = node.scratch(state.name);
  
    if (scratch == null) {
      scratch = {};
  
      node.scratch(state.name, scratch);
    }
  
    assign(scratch, state.randomize ? {
      x: bb.x1 + Math.round(Math.random() * bb.w),
      y: bb.y1 + Math.round(Math.random() * bb.h)
    } : {
      x: p.x,
      y: p.y
    });
  
    scratch.locked = node.locked();
  };
  
  var getNodePositionData = function getNodePositionData(node, state) {
    return node.scratch(state.name);
  };
  
  var refreshPositions = function refreshPositions(nodes, state) {
    nodes.positions(function (node) {
      var scratch = node.scratch(state.name);
  
      return {
        x: scratch.x,
        y: scratch.y
      };
    });
  };
  
  module.exports = { setInitialPositionState: setInitialPositionState, getNodePositionData: getNodePositionData, refreshPositions: refreshPositions };
  
  /***/ }),
  /* 9 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  var nop = function nop() {};
  
  var tick = function tick(state) {
    var s = state;
    var l = state.layout;
  
    var tickIndicatesDone = l.tick(s);
  
    if (s.firstUpdate) {
      if (s.animateContinuously) {
        // indicate the initial positions have been set
        s.layout.emit('layoutready');
      }
      s.firstUpdate = false;
    }
  
    s.tickIndex++;
  
    var duration = Date.now() - s.startTime;
  
    return !s.infinite && tickIndicatesDone;
  };
  
  var multitick = function multitick(state) {
    var onNotDone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nop;
    var onDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nop;
  
    var done = false;
    var s = state;
  
    for (var i = 0; i < s.refresh; i++) {
      done = !s.running || tick(s);
  
      if (done) {
        break;
      }
    }
  
    if (!done) {
      onNotDone();
    } else {
      onDone();
    }
  };
  
  module.exports = { tick: tick, multitick: multitick };
  
  /***/ })
  /******/ ]);
  });