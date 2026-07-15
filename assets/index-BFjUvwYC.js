var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e),f=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=o((()=>{p=`1.13.8`,m=typeof self==`object`&&self.self===self&&self||typeof global==`object`&&global.global===global&&global||Function(`return this`)()||{},h=Array.prototype,g=Object.prototype,_=typeof Symbol<`u`?Symbol.prototype:null,v=h.push,y=h.slice,b=g.toString,x=g.hasOwnProperty,S=typeof ArrayBuffer<`u`,C=typeof DataView<`u`,w=Array.isArray,T=Object.keys,E=Object.create,D=S&&ArrayBuffer.isView,O=isNaN,k=isFinite,A=!{toString:null}.propertyIsEnumerable(`toString`),j=[`valueOf`,`isPrototypeOf`,`toString`,`propertyIsEnumerable`,`hasOwnProperty`,`toLocaleString`],M=2**53-1}));function P(e,t){return t=t==null?e.length-1:+t,function(){for(var n=Math.max(arguments.length-t,0),r=Array(n),i=0;i<n;i++)r[i]=arguments[i+t];switch(t){case 0:return e.call(this,r);case 1:return e.call(this,arguments[0],r);case 2:return e.call(this,arguments[0],arguments[1],r)}var a=Array(t+1);for(i=0;i<t;i++)a[i]=arguments[i];return a[t]=r,e.apply(this,a)}}var F=o((()=>{}));function I(e){var t=typeof e;return t===`function`||t===`object`&&!!e}var L=o((()=>{}));function R(e){return e===null}var z=o((()=>{}));function B(e){return e===void 0}var ee=o((()=>{}));function V(e){return e===!0||e===!1||b.call(e)===`[object Boolean]`}var H=o((()=>{N()}));function te(e){return!!(e&&e.nodeType===1)}var ne=o((()=>{}));function U(e){var t=`[object `+e+`]`;return function(e){return b.call(e)===t}}var W=o((()=>{N()})),re,ie=o((()=>{W(),re=U(`String`)})),ae,G=o((()=>{W(),ae=U(`Number`)})),oe,se=o((()=>{W(),oe=U(`Date`)})),ce,le=o((()=>{W(),ce=U(`RegExp`)})),ue,de=o((()=>{W(),ue=U(`Error`)})),K,fe=o((()=>{W(),K=U(`Symbol`)})),pe,me=o((()=>{W(),pe=U(`ArrayBuffer`)})),he,ge,q,_e=o((()=>{W(),N(),he=U(`Function`),ge=m.document&&m.document.childNodes,typeof/./!=`function`&&typeof Int8Array!=`object`&&typeof ge!=`function`&&(he=function(e){return typeof e==`function`||!1}),q=he})),ve,ye=o((()=>{W(),ve=U(`Object`)})),be,xe,Se=o((()=>{N(),ye(),be=C&&(!/\[native code\]/.test(String(DataView))||ve(new DataView(new ArrayBuffer(8)))),xe=typeof Map<`u`&&ve(new Map)}));function Ce(e){return e!=null&&q(e.getInt8)&&pe(e.buffer)}var we,Te,Ee=o((()=>{W(),_e(),me(),Se(),we=U(`DataView`),Te=be?Ce:we})),De,Oe=o((()=>{N(),W(),De=w||U(`Array`)}));function ke(e,t){return e!=null&&x.call(e,t)}var Ae=o((()=>{N()})),je,Me,Ne=o((()=>{W(),Ae(),je=U(`Arguments`),(function(){je(arguments)||(je=function(e){return ke(e,`callee`)})})(),Me=je}));function Pe(e){return!K(e)&&k(e)&&!isNaN(parseFloat(e))}var Fe=o((()=>{N(),fe()}));function Ie(e){return ae(e)&&O(e)}var Le=o((()=>{N(),G()}));function Re(e){return function(){return e}}var ze=o((()=>{}));function Be(e){return function(t){var n=e(t);return typeof n==`number`&&n>=0&&n<=M}}var Ve=o((()=>{N()}));function He(e){return function(t){return t?.[e]}}var Ue=o((()=>{})),We,Ge=o((()=>{Ue(),We=He(`byteLength`)})),Ke,qe=o((()=>{Ve(),Ge(),Ke=Be(We)}));function Je(e){return D?D(e)&&!Te(e):Ke(e)&&Ye.test(b.call(e))}var Ye,Xe,Ze=o((()=>{N(),Ee(),ze(),qe(),Ye=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,Xe=S?Je:Re(!1)})),J,Qe=o((()=>{Ue(),J=He(`length`)}));function $e(e){for(var t={},n=e.length,r=0;r<n;++r)t[e[r]]=!0;return{contains:function(e){return t[e]===!0},push:function(n){return t[n]=!0,e.push(n)}}}function et(e,t){t=$e(t);var n=j.length,r=e.constructor,i=q(r)&&r.prototype||g,a=`constructor`;for(ke(e,a)&&!t.contains(a)&&t.push(a);n--;)a=j[n],a in e&&e[a]!==i[a]&&!t.contains(a)&&t.push(a)}var tt=o((()=>{N(),_e(),Ae()}));function Y(e){if(!I(e))return[];if(T)return T(e);var t=[];for(var n in e)ke(e,n)&&t.push(n);return A&&et(e,t),t}var nt=o((()=>{L(),N(),Ae(),tt()}));function rt(e){if(e==null)return!0;var t=J(e);return typeof t==`number`&&(De(e)||re(e)||Me(e))?t===0:J(Y(e))===0}var it=o((()=>{Qe(),Oe(),ie(),Ne(),nt()}));function at(e,t){var n=Y(t),r=n.length;if(e==null)return!r;for(var i=Object(e),a=0;a<r;a++){var o=n[a];if(t[o]!==i[o]||!(o in i))return!1}return!0}var ot=o((()=>{nt()}));function X(e){if(e instanceof X)return e;if(!(this instanceof X))return new X(e);this._wrapped=e}var st=o((()=>{N(),X.VERSION=p,X.prototype.value=function(){return this._wrapped},X.prototype.valueOf=X.prototype.toJSON=X.prototype.value,X.prototype.toString=function(){return String(this._wrapped)}}));function ct(e){return new Uint8Array(e.buffer||e,e.byteOffset||0,We(e))}var lt=o((()=>{Ge()}));function ut(e,t){for(var n=[{a:e,b:t}],r=[],i=[];n.length;){var a=n.pop();if(a===!0){r.pop(),i.pop();continue}if(e=a.a,t=a.b,e===t){if(e!==0||1/e==1/t)continue;return!1}if(e==null||t==null)return!1;if(e!==e){if(t!==t)continue;return!1}var o=typeof e;if(o!==`function`&&o!==`object`&&typeof t!=`object`)return!1;e instanceof X&&(e=e._wrapped),t instanceof X&&(t=t._wrapped);var s=b.call(e);if(s!==b.call(t))return!1;if(be&&s==`[object Object]`&&Te(e)){if(!Te(t))return!1;s=dt}switch(s){case`[object RegExp]`:case`[object String]`:if(``+e==``+t)continue;return!1;case`[object Number]`:n.push({a:+e,b:+t});continue;case`[object Date]`:case`[object Boolean]`:if(+e==+t)continue;return!1;case`[object Symbol]`:if(_.valueOf.call(e)===_.valueOf.call(t))continue;return!1;case`[object ArrayBuffer]`:case dt:n.push({a:ct(e),b:ct(t)});continue}var c=s===`[object Array]`;if(!c&&Xe(e)){if(We(e)!==We(t))return!1;if(e.buffer===t.buffer&&e.byteOffset===t.byteOffset)continue;c=!0}if(!c){if(typeof e!=`object`||typeof t!=`object`)return!1;var l=e.constructor,u=t.constructor;if(l!==u&&!(q(l)&&l instanceof l&&q(u)&&u instanceof u)&&`constructor`in e&&`constructor`in t)return!1}for(var d=r.length;d--;)if(r[d]===e){if(i[d]===t)break;return!1}if(!(d>=0))if(r.push(e),i.push(t),n.push(!0),c){if(d=e.length,d!==t.length)return!1;for(;d--;)n.push({a:e[d],b:t[d]})}else{var f=Y(e),p;if(d=f.length,Y(t).length!==d)return!1;for(;d--;){if(p=f[d],!ke(t,p))return!1;n.push({a:e[p],b:t[p]})}}}return!0}var dt,ft=o((()=>{st(),N(),Ge(),Ze(),_e(),Se(),Ee(),nt(),Ae(),lt(),dt=`[object DataView]`}));function pt(e){if(!I(e))return[];var t=[];for(var n in e)t.push(n);return A&&et(e,t),t}var mt=o((()=>{L(),N(),tt()}));function ht(e){var t=J(e);return function(n){if(n==null||J(pt(n)))return!1;for(var r=0;r<t;r++)if(!q(n[e[r]]))return!1;return e!==xt||!q(n[gt])}}var gt,_t,vt,yt,bt,xt,St,Ct=o((()=>{Qe(),_e(),mt(),gt=`forEach`,_t=`has`,vt=[`clear`,`delete`],yt=[`get`,_t,`set`],bt=vt.concat(gt,yt),xt=vt.concat(yt),St=[`add`].concat(vt,gt,_t)})),wt,Tt=o((()=>{W(),Se(),Ct(),wt=xe?ht(bt):U(`Map`)})),Et,Dt=o((()=>{W(),Se(),Ct(),Et=xe?ht(xt):U(`WeakMap`)})),Ot,kt=o((()=>{W(),Se(),Ct(),Ot=xe?ht(St):U(`Set`)})),At,jt=o((()=>{W(),At=U(`WeakSet`)}));function Mt(e){for(var t=Y(e),n=t.length,r=Array(n),i=0;i<n;i++)r[i]=e[t[i]];return r}var Nt=o((()=>{nt()}));function Pt(e){for(var t=Y(e),n=t.length,r=Array(n),i=0;i<n;i++)r[i]=[t[i],e[t[i]]];return r}var Ft=o((()=>{nt()}));function It(e){for(var t={},n=Y(e),r=0,i=n.length;r<i;r++)t[e[n[r]]]=n[r];return t}var Lt=o((()=>{nt()}));function Rt(e){var t=[];for(var n in e)q(e[n])&&t.push(n);return t.sort()}var zt=o((()=>{_e()}));function Bt(e,t){return function(n){var r=arguments.length;if(t&&(n=Object(n)),r<2||n==null)return n;for(var i=1;i<r;i++)for(var a=arguments[i],o=e(a),s=o.length,c=0;c<s;c++){var l=o[c];(!t||n[l]===void 0)&&(n[l]=a[l])}return n}}var Vt=o((()=>{})),Ht,Ut=o((()=>{Vt(),mt(),Ht=Bt(pt)})),Wt,Gt=o((()=>{Vt(),nt(),Wt=Bt(Y)})),Kt,qt=o((()=>{Vt(),mt(),Kt=Bt(pt,!0)}));function Jt(){return function(){}}function Yt(e){if(!I(e))return{};if(E)return E(e);var t=Jt();t.prototype=e;var n=new t;return t.prototype=null,n}var Xt=o((()=>{L(),N()}));function Zt(e,t){var n=Yt(e);return t&&Wt(n,t),n}var Qt=o((()=>{Xt(),Gt()}));function $t(e){return I(e)?De(e)?e.slice():Ht({},e):e}var en=o((()=>{L(),Oe(),Ut()}));function tn(e,t){return t(e),e}var nn=o((()=>{}));function rn(e){return De(e)?e:[e]}var an=o((()=>{st(),Oe(),X.toPath=rn}));function on(e){return X.toPath(e)}var sn=o((()=>{st(),an()}));function cn(e,t){for(var n=t.length,r=0;r<n;r++){if(e==null)return;e=e[t[r]]}return n?e:void 0}var ln=o((()=>{}));function un(e,t,n){var r=cn(e,on(t));return B(r)?n:r}var dn=o((()=>{sn(),ln(),ee()}));function fn(e,t){t=on(t);for(var n=t.length,r=0;r<n;r++){var i=t[r];if(!ke(e,i))return!1;e=e[i]}return!!n}var pn=o((()=>{Ae(),sn()}));function mn(e){return e}var hn=o((()=>{}));function gn(e){return e=Wt({},e),function(t){return at(t,e)}}var _n=o((()=>{Gt(),ot()}));function vn(e){return e=on(e),function(t){return cn(t,e)}}var yn=o((()=>{ln(),sn()}));function bn(e,t,n){if(t===void 0)return e;switch(n??3){case 1:return function(n){return e.call(t,n)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,a){return e.call(t,n,r,i,a)}}return function(){return e.apply(t,arguments)}}var xn=o((()=>{}));function Sn(e,t,n){return e==null?mn:q(e)?bn(e,t,n):I(e)&&!De(e)?gn(e):vn(e)}var Cn=o((()=>{hn(),_e(),L(),Oe(),_n(),yn(),xn()}));function wn(e,t){return Sn(e,t,1/0)}var Tn=o((()=>{st(),Cn(),X.iteratee=wn}));function En(e,t,n){return X.iteratee===wn?Sn(e,t,n):X.iteratee(e,t)}var Dn=o((()=>{st(),Cn(),Tn()}));function On(e,t,n){t=En(t,n);for(var r=Y(e),i=r.length,a={},o=0;o<i;o++){var s=r[o];a[s]=t(e[s],s,e)}return a}var kn=o((()=>{Dn(),nt()}));function An(){}var jn=o((()=>{}));function Mn(e){return e==null?An:function(t){return un(e,t)}}var Nn=o((()=>{jn(),dn()}));function Pn(e,t,n){var r=Array(Math.max(0,e));t=bn(t,n,1);for(var i=0;i<e;i++)r[i]=t(i);return r}var Fn=o((()=>{xn()}));function In(e,t){return t??(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))}var Ln=o((()=>{})),Rn,zn=o((()=>{Rn=Date.now||function(){return new Date().getTime()}}));function Bn(e){var t=function(t){return e[t]},n=`(?:`+Y(e).join(`|`)+`)`,r=RegExp(n),i=RegExp(n,`g`);return function(e){return e=e==null?``:``+e,r.test(e)?e.replace(i,t):e}}var Vn=o((()=>{nt()})),Hn,Un=o((()=>{Hn={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#x27;`,"`":`&#x60;`}})),Wn,Gn=o((()=>{Vn(),Un(),Wn=Bn(Hn)})),Kn,qn=o((()=>{Lt(),Un(),Kn=It(Hn)})),Jn,Yn=o((()=>{Vn(),qn(),Jn=Bn(Kn)})),Xn,Zn=o((()=>{st(),Xn=X.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g}}));function Qn(e){return`\\`+tr[e]}function $n(e,t,n){!t&&n&&(t=n),t=Kt({},t,X.templateSettings);var r=RegExp([(t.escape||er).source,(t.interpolate||er).source,(t.evaluate||er).source].join(`|`)+`|$`,`g`),i=0,a=`__p+='`;e.replace(r,function(t,n,r,o,s){return a+=e.slice(i,s).replace(nr,Qn),i=s+t.length,n?a+=`'+
((__t=(`+n+`))==null?'':_.escape(__t))+
'`:r?a+=`'+
((__t=(`+r+`))==null?'':__t)+
'`:o&&(a+=`';
`+o+`
__p+='`),t}),a+=`';
`;var o=t.variable;if(o){if(!rr.test(o))throw Error(`variable is not a bare identifier: `+o)}else a=`with(obj||{}){
`+a+`}
`,o=`obj`;a=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+a+`return __p;
`;var s;try{s=Function(o,`_`,a)}catch(e){throw e.source=a,e}var c=function(e){return s.call(this,e,X)};return c.source=`function(`+o+`){
`+a+`}`,c}var er,tr,nr,rr,ir=o((()=>{qt(),st(),Zn(),er=/(.)^/,tr={"'":`'`,"\\":`\\`,"\r":`r`,"\n":`n`,"\u2028":`u2028`,"\u2029":`u2029`},nr=/\\|'|\r|\n|\u2028|\u2029/g,rr=/^\s*(\w|\$)+\s*$/}));function ar(e,t,n){t=on(t);var r=t.length;if(!r)return q(n)?n.call(e):n;for(var i=0;i<r;i++){var a=e?.[t[i]];a===void 0&&(a=n,i=r),e=q(a)?a.call(e):a}return e}var or=o((()=>{_e(),sn()}));function sr(e){var t=++cr+``;return e?e+t:t}var cr,lr=o((()=>{cr=0}));function ur(e){var t=X(e);return t._chain=!0,t}var dr=o((()=>{st()}));function fr(e,t,n,r,i){if(!(r instanceof t))return e.apply(n,i);var a=Yt(e.prototype),o=e.apply(a,i);return I(o)?o:a}var pr=o((()=>{Xt(),L()})),mr,hr=o((()=>{F(),pr(),st(),mr=P(function(e,t){var n=mr.placeholder,r=function(){for(var i=0,a=t.length,o=Array(a),s=0;s<a;s++)o[s]=t[s]===n?arguments[i++]:t[s];for(;i<arguments.length;)o.push(arguments[i++]);return fr(e,r,this,this,o)};return r}),mr.placeholder=X})),gr,_r=o((()=>{F(),_e(),pr(),gr=P(function(e,t,n){if(!q(e))throw TypeError(`Bind must be called on a function`);var r=P(function(i){return fr(e,r,t,this,n.concat(i))});return r})})),vr,yr=o((()=>{Ve(),Qe(),vr=Be(J)}));function br(e,t,n){!t&&t!==0&&(t=1/0);for(var r=[],i=0,a=0,o=J(e)||0,s=[];;){if(a>=o){if(!s.length)break;var c=s.pop();a=c.i,e=c.v,o=J(e);continue}var l=e[a++];s.length>=t?r[i++]=l:vr(l)&&(De(l)||Me(l))?(s.push({i:a,v:e}),a=0,e=l,o=J(e)):n||(r[i++]=l)}return r}var xr=o((()=>{Qe(),yr(),Oe(),Ne()})),Sr,Cr=o((()=>{F(),xr(),_r(),Sr=P(function(e,t){t=br(t,!1,!1);var n=t.length;if(n<1)throw Error(`bindAll must be passed function names`);for(;n--;){var r=t[n];e[r]=gr(e[r],e)}return e})}));function wr(e,t){var n=function(r){var i=n.cache,a=``+(t?t.apply(this,arguments):r);return ke(i,a)||(i[a]=e.apply(this,arguments)),i[a]};return n.cache={},n}var Tr=o((()=>{Ae()})),Er,Dr=o((()=>{F(),Er=P(function(e,t,n){return setTimeout(function(){return e.apply(null,n)},t)})})),Or,kr=o((()=>{hr(),Dr(),st(),Or=mr(Er,X,1)}));function Ar(e,t,n){var r,i,a,o,s=0;n||={};var c=function(){s=n.leading===!1?0:Rn(),r=null,o=e.apply(i,a),r||(i=a=null)},l=function(){var l=Rn();!s&&n.leading===!1&&(s=l);var u=t-(l-s);return i=this,a=arguments,u<=0||u>t?(r&&=(clearTimeout(r),null),s=l,o=e.apply(i,a),r||(i=a=null)):!r&&n.trailing!==!1&&(r=setTimeout(c,u)),o};return l.cancel=function(){clearTimeout(r),s=0,r=i=a=null},l}var jr=o((()=>{zn()}));function Mr(e,t,n){var r,i,a,o,s,c=function(){var l=Rn()-i;t>l?r=setTimeout(c,t-l):(r=null,n||(o=e.apply(s,a)),r||(a=s=null))},l=P(function(l){return s=this,a=l,i=Rn(),r||(r=setTimeout(c,t),n&&(o=e.apply(s,a))),o});return l.cancel=function(){clearTimeout(r),r=a=s=null},l}var Nr=o((()=>{F(),zn()}));function Pr(e,t){return mr(t,e)}var Fr=o((()=>{hr()}));function Ir(e){return function(){return!e.apply(this,arguments)}}var Lr=o((()=>{}));function Rr(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}}var zr=o((()=>{}));function Br(e,t){return function(){if(--e<1)return t.apply(this,arguments)}}var Vr=o((()=>{}));function Hr(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}}var Ur=o((()=>{})),Wr,Gr=o((()=>{hr(),Ur(),Wr=mr(Hr,2)}));function Kr(e,t,n){t=En(t,n);for(var r=Y(e),i,a=0,o=r.length;a<o;a++)if(i=r[a],t(e[i],i,e))return i}var qr=o((()=>{Dn(),nt()}));function Jr(e){return function(t,n,r){n=En(n,r);for(var i=J(t),a=e>0?0:i-1;a>=0&&a<i;a+=e)if(n(t[a],a,t))return a;return-1}}var Yr=o((()=>{Dn(),Qe()})),Xr,Zr=o((()=>{Yr(),Xr=Jr(1)})),Qr,$r=o((()=>{Yr(),Qr=Jr(-1)}));function ei(e,t,n,r){n=En(n,r,1);for(var i=n(t),a=0,o=J(e);a<o;){var s=Math.floor((a+o)/2);n(e[s])<i?a=s+1:o=s}return a}var ti=o((()=>{Dn(),Qe()}));function ni(e,t,n){return function(r,i,a){var o=0,s=J(r);if(typeof a==`number`)e>0?o=a>=0?a:Math.max(a+s,o):s=a>=0?Math.min(a+1,s):a+s+1;else if(n&&a&&s)return a=n(r,i),r[a]===i?a:-1;if(i!==i)return a=t(y.call(r,o,s),Ie),a>=0?a+o:-1;for(a=e>0?o:s-1;a>=0&&a<s;a+=e)if(r[a]===i)return a;return-1}}var ri=o((()=>{Qe(),N(),Le()})),ii,ai=o((()=>{ti(),Zr(),ri(),ii=ni(1,Xr,ei)})),oi,si=o((()=>{$r(),ri(),oi=ni(-1,Qr)}));function ci(e,t,n){var r=(vr(e)?Xr:Kr)(e,t,n);if(r!==void 0&&r!==-1)return e[r]}var li=o((()=>{yr(),Zr(),qr()}));function ui(e,t){return ci(e,gn(t))}var di=o((()=>{li(),_n()}));function fi(e,t,n){t=bn(t,n);var r,i;if(vr(e))for(r=0,i=e.length;r<i;r++)t(e[r],r,e);else{var a=Y(e);for(r=0,i=a.length;r<i;r++)t(e[a[r]],a[r],e)}return e}var pi=o((()=>{xn(),yr(),nt()}));function mi(e,t,n){t=En(t,n);for(var r=!vr(e)&&Y(e),i=(r||e).length,a=Array(i),o=0;o<i;o++){var s=r?r[o]:o;a[o]=t(e[s],s,e)}return a}var hi=o((()=>{Dn(),yr(),nt()}));function gi(e){var t=function(t,n,r,i){var a=!vr(t)&&Y(t),o=(a||t).length,s=e>0?0:o-1;for(i||(r=t[a?a[s]:s],s+=e);s>=0&&s<o;s+=e){var c=a?a[s]:s;r=n(r,t[c],c,t)}return r};return function(e,n,r,i){var a=arguments.length>=3;return t(e,bn(n,i,4),r,a)}}var _i=o((()=>{yr(),nt(),xn()})),vi,yi=o((()=>{_i(),vi=gi(1)})),bi,xi=o((()=>{_i(),bi=gi(-1)}));function Si(e,t,n){var r=[];return t=En(t,n),fi(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r}var Ci=o((()=>{Dn(),pi()}));function wi(e,t,n){return Si(e,Ir(En(t)),n)}var Ti=o((()=>{Ci(),Lr(),Dn()}));function Ei(e,t,n){t=En(t,n);for(var r=!vr(e)&&Y(e),i=(r||e).length,a=0;a<i;a++){var o=r?r[a]:a;if(!t(e[o],o,e))return!1}return!0}var Di=o((()=>{Dn(),yr(),nt()}));function Oi(e,t,n){t=En(t,n);for(var r=!vr(e)&&Y(e),i=(r||e).length,a=0;a<i;a++){var o=r?r[a]:a;if(t(e[o],o,e))return!0}return!1}var ki=o((()=>{Dn(),yr(),nt()}));function Ai(e,t,n,r){return vr(e)||(e=Mt(e)),(typeof n!=`number`||r)&&(n=0),ii(e,t,n)>=0}var ji=o((()=>{yr(),Nt(),ai()})),Mi,Ni=o((()=>{F(),_e(),hi(),ln(),sn(),Mi=P(function(e,t,n){var r,i;return q(t)?i=t:(t=on(t),r=t.slice(0,-1),t=t[t.length-1]),mi(e,function(e){var a=i;if(!a){if(r&&r.length&&(e=cn(e,r)),e==null)return;a=e[t]}return a==null?a:a.apply(e,n)})})}));function Pi(e,t){return mi(e,vn(t))}var Fi=o((()=>{hi(),yn()}));function Ii(e,t){return Si(e,gn(t))}var Li=o((()=>{Ci(),_n()}));function Ri(e,t,n){var r=-1/0,i=-1/0,a,o;if(t==null||typeof t==`number`&&typeof e[0]!=`object`&&e!=null){e=vr(e)?e:Mt(e);for(var s=0,c=e.length;s<c;s++)a=e[s],a!=null&&a>r&&(r=a)}else t=En(t,n),fi(e,function(e,n,a){o=t(e,n,a),(o>i||o===-1/0&&r===-1/0)&&(r=e,i=o)});return r}var zi=o((()=>{yr(),Nt(),Dn(),pi()}));function Bi(e,t,n){var r=1/0,i=1/0,a,o;if(t==null||typeof t==`number`&&typeof e[0]!=`object`&&e!=null){e=vr(e)?e:Mt(e);for(var s=0,c=e.length;s<c;s++)a=e[s],a!=null&&a<r&&(r=a)}else t=En(t,n),fi(e,function(e,n,a){o=t(e,n,a),(o<i||o===1/0&&r===1/0)&&(r=e,i=o)});return r}var Vi=o((()=>{yr(),Nt(),Dn(),pi()}));function Hi(e){return e?De(e)?y.call(e):re(e)?e.match(Ui):vr(e)?mi(e,mn):Mt(e):[]}var Ui,Wi=o((()=>{Oe(),N(),ie(),yr(),hi(),hn(),Nt(),Ui=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g}));function Gi(e,t,n){if(t==null||n)return vr(e)||(e=Mt(e)),e[In(e.length-1)];var r=Hi(e),i=J(r);t=Math.max(Math.min(t,i),0);for(var a=i-1,o=0;o<t;o++){var s=In(o,a),c=r[o];r[o]=r[s],r[s]=c}return r.slice(0,t)}var Ki=o((()=>{yr(),Nt(),Qe(),Ln(),Wi()}));function qi(e){return Gi(e,1/0)}var Ji=o((()=>{Ki()}));function Yi(e,t,n){var r=0;return t=En(t,n),Pi(mi(e,function(e,n,i){return{value:e,index:r++,criteria:t(e,n,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index-t.index}),`value`)}var Xi=o((()=>{Dn(),Fi(),hi()}));function Zi(e,t){return function(n,r,i){var a=t?[[],[]]:{};return r=En(r,i),fi(n,function(t,i){e(a,t,r(t,i,n))}),a}}var Qi=o((()=>{Dn(),pi()})),$i,ea=o((()=>{Qi(),Ae(),$i=Zi(function(e,t,n){ke(e,n)?e[n].push(t):e[n]=[t]})})),ta,na=o((()=>{Qi(),ta=Zi(function(e,t,n){e[n]=t})})),ra,ia=o((()=>{Qi(),Ae(),ra=Zi(function(e,t,n){ke(e,n)?e[n]++:e[n]=1})})),aa,oa=o((()=>{Qi(),aa=Zi(function(e,t,n){e[+!n].push(t)},!0)}));function sa(e){return e==null?0:vr(e)?e.length:Y(e).length}var ca=o((()=>{yr(),nt()}));function la(e,t,n){return t in n}var ua=o((()=>{})),da,fa=o((()=>{F(),_e(),xn(),mt(),ua(),xr(),da=P(function(e,t){var n={},r=t[0];if(e==null)return n;q(r)?(t.length>1&&(r=bn(r,t[1])),t=pt(e)):(r=la,t=br(t,!1,!1),e=Object(e));for(var i=0,a=t.length;i<a;i++){var o=t[i],s=e[o];r(s,o,e)&&(n[o]=s)}return n})})),pa,ma=o((()=>{F(),_e(),Lr(),hi(),xr(),ji(),fa(),pa=P(function(e,t){var n=t[0],r;return q(n)?(n=Ir(n),t.length>1&&(r=t[1])):(t=mi(br(t,!1,!1),String),n=function(e,n){return!Ai(t,n)}),da(e,n,r)})}));function ha(e,t,n){return y.call(e,0,Math.max(0,e.length-(t==null||n?1:t)))}var ga=o((()=>{N()}));function _a(e,t,n){return e==null||e.length<1?t==null||n?void 0:[]:t==null||n?e[0]:ha(e,e.length-t)}var va=o((()=>{ga()}));function ya(e,t,n){return y.call(e,t==null||n?1:t)}var ba=o((()=>{N()}));function xa(e,t,n){return e==null||e.length<1?t==null||n?void 0:[]:t==null||n?e[e.length-1]:ya(e,Math.max(0,e.length-t))}var Sa=o((()=>{ba()}));function Ca(e){return Si(e,Boolean)}var wa=o((()=>{Ci()}));function Ta(e,t){return br(e,t,!1)}var Ea=o((()=>{xr()})),Da,Oa=o((()=>{F(),xr(),Ci(),ji(),Da=P(function(e,t){return t=br(t,!0,!0),Si(e,function(e){return!Ai(t,e)})})})),ka,Aa=o((()=>{F(),Oa(),ka=P(function(e,t){return Da(e,t)})}));function ja(e,t,n,r){V(t)||(r=n,n=t,t=!1),n!=null&&(n=En(n,r));for(var i=[],a=[],o=0,s=J(e);o<s;o++){var c=e[o],l=n?n(c,o,e):c;t&&!n?((!o||a!==l)&&i.push(c),a=l):n?Ai(a,l)||(a.push(l),i.push(c)):Ai(i,c)||i.push(c)}return i}var Ma=o((()=>{H(),Dn(),Qe(),ji()})),Na,Pa=o((()=>{F(),Ma(),xr(),Na=P(function(e){return ja(br(e,!0,!0))})}));function Fa(e){for(var t=[],n=arguments.length,r=0,i=J(e);r<i;r++){var a=e[r];if(!Ai(t,a)){var o;for(o=1;o<n&&Ai(arguments[o],a);o++);o===n&&t.push(a)}}return t}var Ia=o((()=>{Qe(),ji()}));function La(e){for(var t=e&&Ri(e,J).length||0,n=Array(t),r=0;r<t;r++)n[r]=Pi(e,r);return n}var Ra=o((()=>{zi(),Qe(),Fi()})),za,Ba=o((()=>{F(),Ra(),za=P(La)}));function Va(e,t){for(var n={},r=0,i=J(e);r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n}var Ha=o((()=>{Qe()}));function Ua(e,t,n){t??(t=e||0,e=0),n||=t<e?-1:1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=Array(r),a=0;a<r;a++,e+=n)i[a]=e;return i}var Wa=o((()=>{}));function Ga(e,t){if(t==null||t<1)return[];for(var n=[],r=0,i=e.length;r<i;)n.push(y.call(e,r,r+=t));return n}var Ka=o((()=>{N()}));function qa(e,t){return e._chain?X(t).chain():t}var Ja=o((()=>{st()}));function Ya(e){return fi(Rt(e),function(t){var n=X[t]=e[t];X.prototype[t]=function(){var e=[this._wrapped];return v.apply(e,arguments),qa(this,n.apply(X,e))}}),X}var Xa=o((()=>{st(),pi(),zt(),N(),Ja()})),Za,Qa=o((()=>{st(),pi(),N(),Ja(),fi([`pop`,`push`,`reverse`,`shift`,`sort`,`splice`,`unshift`],function(e){var t=h[e];X.prototype[e]=function(){var n=this._wrapped;return n!=null&&(t.apply(n,arguments),(e===`shift`||e===`splice`)&&n.length===0&&delete n[0]),qa(this,n)}}),fi([`concat`,`join`,`slice`],function(e){var t=h[e];X.prototype[e]=function(){var e=this._wrapped;return e!=null&&(e=t.apply(e,arguments)),qa(this,e)}}),Za=X})),$a=c({VERSION:()=>p,after:()=>Br,all:()=>Ei,allKeys:()=>pt,any:()=>Oi,assign:()=>Wt,before:()=>Hr,bind:()=>gr,bindAll:()=>Sr,chain:()=>ur,chunk:()=>Ga,clone:()=>$t,collect:()=>mi,compact:()=>Ca,compose:()=>Rr,constant:()=>Re,contains:()=>Ai,countBy:()=>ra,create:()=>Zt,debounce:()=>Mr,default:()=>Za,defaults:()=>Kt,defer:()=>Or,delay:()=>Er,detect:()=>ci,difference:()=>Da,drop:()=>ya,each:()=>fi,escape:()=>Wn,every:()=>Ei,extend:()=>Ht,extendOwn:()=>Wt,filter:()=>Si,find:()=>ci,findIndex:()=>Xr,findKey:()=>Kr,findLastIndex:()=>Qr,findWhere:()=>ui,first:()=>_a,flatten:()=>Ta,foldl:()=>vi,foldr:()=>bi,forEach:()=>fi,functions:()=>Rt,get:()=>un,groupBy:()=>$i,has:()=>fn,head:()=>_a,identity:()=>mn,include:()=>Ai,includes:()=>Ai,indexBy:()=>ta,indexOf:()=>ii,initial:()=>ha,inject:()=>vi,intersection:()=>Fa,invert:()=>It,invoke:()=>Mi,isArguments:()=>Me,isArray:()=>De,isArrayBuffer:()=>pe,isBoolean:()=>V,isDataView:()=>Te,isDate:()=>oe,isElement:()=>te,isEmpty:()=>rt,isEqual:()=>ut,isError:()=>ue,isFinite:()=>Pe,isFunction:()=>q,isMap:()=>wt,isMatch:()=>at,isNaN:()=>Ie,isNull:()=>R,isNumber:()=>ae,isObject:()=>I,isRegExp:()=>ce,isSet:()=>Ot,isString:()=>re,isSymbol:()=>K,isTypedArray:()=>Xe,isUndefined:()=>B,isWeakMap:()=>Et,isWeakSet:()=>At,iteratee:()=>wn,keys:()=>Y,last:()=>xa,lastIndexOf:()=>oi,map:()=>mi,mapObject:()=>On,matcher:()=>gn,matches:()=>gn,max:()=>Ri,memoize:()=>wr,methods:()=>Rt,min:()=>Bi,mixin:()=>Ya,negate:()=>Ir,noop:()=>An,now:()=>Rn,object:()=>Va,omit:()=>pa,once:()=>Wr,pairs:()=>Pt,partial:()=>mr,partition:()=>aa,pick:()=>da,pluck:()=>Pi,property:()=>vn,propertyOf:()=>Mn,random:()=>In,range:()=>Ua,reduce:()=>vi,reduceRight:()=>bi,reject:()=>wi,rest:()=>ya,restArguments:()=>P,result:()=>ar,sample:()=>Gi,select:()=>Si,shuffle:()=>qi,size:()=>sa,some:()=>Oi,sortBy:()=>Yi,sortedIndex:()=>ei,tail:()=>ya,take:()=>_a,tap:()=>tn,template:()=>$n,templateSettings:()=>Xn,throttle:()=>Ar,times:()=>Pn,toArray:()=>Hi,toPath:()=>rn,transpose:()=>La,unescape:()=>Jn,union:()=>Na,uniq:()=>ja,unique:()=>ja,uniqueId:()=>sr,unzip:()=>La,values:()=>Mt,where:()=>Ii,without:()=>ka,wrap:()=>Pr,zip:()=>za}),eo=o((()=>{N(),F(),L(),z(),ee(),H(),ne(),ie(),G(),se(),le(),de(),fe(),me(),Ee(),Oe(),_e(),Ne(),Fe(),Le(),Ze(),it(),ot(),ft(),Tt(),Dt(),kt(),jt(),nt(),mt(),Nt(),Ft(),Lt(),zt(),Ut(),Gt(),qt(),Qt(),en(),nn(),dn(),pn(),kn(),hn(),ze(),jn(),an(),yn(),Nn(),_n(),Fn(),Ln(),zn(),Gn(),Yn(),Zn(),ir(),or(),lr(),dr(),Tn(),hr(),_r(),Cr(),Tr(),Dr(),kr(),jr(),Nr(),Fr(),Lr(),zr(),Vr(),Ur(),Gr(),qr(),Zr(),$r(),ti(),ai(),si(),li(),di(),pi(),hi(),yi(),xi(),Ci(),Ti(),Di(),ki(),ji(),Ni(),Fi(),Li(),zi(),Vi(),Ji(),Ki(),Xi(),ea(),na(),ia(),oa(),Wi(),ca(),fa(),ma(),va(),ga(),Sa(),ba(),wa(),Ea(),Aa(),Ma(),Pa(),Ia(),Oa(),Ra(),Ba(),Ha(),Wa(),Ka(),Xa(),Qa()})),to,no=o((()=>{eo(),to=Ya($a),to._=to})),Z=c({VERSION:()=>p,after:()=>Br,all:()=>Ei,allKeys:()=>pt,any:()=>Oi,assign:()=>Wt,before:()=>Hr,bind:()=>gr,bindAll:()=>Sr,chain:()=>ur,chunk:()=>Ga,clone:()=>$t,collect:()=>mi,compact:()=>Ca,compose:()=>Rr,constant:()=>Re,contains:()=>Ai,countBy:()=>ra,create:()=>Zt,debounce:()=>Mr,default:()=>to,defaults:()=>Kt,defer:()=>Or,delay:()=>Er,detect:()=>ci,difference:()=>Da,drop:()=>ya,each:()=>fi,escape:()=>Wn,every:()=>Ei,extend:()=>Ht,extendOwn:()=>Wt,filter:()=>Si,find:()=>ci,findIndex:()=>Xr,findKey:()=>Kr,findLastIndex:()=>Qr,findWhere:()=>ui,first:()=>_a,flatten:()=>Ta,foldl:()=>vi,foldr:()=>bi,forEach:()=>fi,functions:()=>Rt,get:()=>un,groupBy:()=>$i,has:()=>fn,head:()=>_a,identity:()=>mn,include:()=>Ai,includes:()=>Ai,indexBy:()=>ta,indexOf:()=>ii,initial:()=>ha,inject:()=>vi,intersection:()=>Fa,invert:()=>It,invoke:()=>Mi,isArguments:()=>Me,isArray:()=>De,isArrayBuffer:()=>pe,isBoolean:()=>V,isDataView:()=>Te,isDate:()=>oe,isElement:()=>te,isEmpty:()=>rt,isEqual:()=>ut,isError:()=>ue,isFinite:()=>Pe,isFunction:()=>q,isMap:()=>wt,isMatch:()=>at,isNaN:()=>Ie,isNull:()=>R,isNumber:()=>ae,isObject:()=>I,isRegExp:()=>ce,isSet:()=>Ot,isString:()=>re,isSymbol:()=>K,isTypedArray:()=>Xe,isUndefined:()=>B,isWeakMap:()=>Et,isWeakSet:()=>At,iteratee:()=>wn,keys:()=>Y,last:()=>xa,lastIndexOf:()=>oi,map:()=>mi,mapObject:()=>On,matcher:()=>gn,matches:()=>gn,max:()=>Ri,memoize:()=>wr,methods:()=>Rt,min:()=>Bi,mixin:()=>Ya,negate:()=>Ir,noop:()=>An,now:()=>Rn,object:()=>Va,omit:()=>pa,once:()=>Wr,pairs:()=>Pt,partial:()=>mr,partition:()=>aa,pick:()=>da,pluck:()=>Pi,property:()=>vn,propertyOf:()=>Mn,random:()=>In,range:()=>Ua,reduce:()=>vi,reduceRight:()=>bi,reject:()=>wi,rest:()=>ya,restArguments:()=>P,result:()=>ar,sample:()=>Gi,select:()=>Si,shuffle:()=>qi,size:()=>sa,some:()=>Oi,sortBy:()=>Yi,sortedIndex:()=>ei,tail:()=>ya,take:()=>_a,tap:()=>tn,template:()=>$n,templateSettings:()=>Xn,throttle:()=>Ar,times:()=>Pn,toArray:()=>Hi,toPath:()=>rn,transpose:()=>La,unescape:()=>Jn,union:()=>Na,uniq:()=>ja,unique:()=>ja,uniqueId:()=>sr,unzip:()=>La,values:()=>Mt,where:()=>Ii,without:()=>ka,wrap:()=>Pr,zip:()=>za}),Q=o((()=>{no(),eo()})),ro=s(((e,t)=>{var n=(function(){return this===void 0})();if(n)t.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:n,propertyIsWritable:function(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return!!(!n||n.writable||n.set)}};else{var r={}.hasOwnProperty,i={}.toString,a={}.constructor.prototype,o=function(e){var t=[];for(var n in e)r.call(e,n)&&t.push(n);return t};t.exports={isArray:function(e){try{return i.call(e)===`[object Array]`}catch{return!1}},keys:o,names:o,defineProperty:function(e,t,n){return e[t]=n.value,e},getDescriptor:function(e,t){return{value:e[t]}},freeze:function(e){return e},getPrototypeOf:function(e){try{return Object(e).constructor.prototype}catch{return a}},isES5:n,propertyIsWritable:function(){return!0}}}})),$=s(((e,t)=>{var n=ro(),r=typeof navigator>`u`,i={e:{}},a,o=typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:e===void 0?null:e;function s(){try{var e=a;return a=null,e.apply(this,arguments)}catch(e){return i.e=e,i}}function c(e){return a=e,s}var l=function(e,t){var n={}.hasOwnProperty;function r(){for(var r in this.constructor=e,this.constructor$=t,t.prototype)n.call(t.prototype,r)&&r.charAt(r.length-1)!==`$`&&(this[r+`$`]=t.prototype[r])}return r.prototype=t.prototype,e.prototype=new r,e.prototype};function u(e){return e==null||e===!0||e===!1||typeof e==`string`||typeof e==`number`}function d(e){return typeof e==`function`||typeof e==`object`&&!!e}function f(e){return u(e)?Error(w(e)):e}function p(e,t){var n=e.length,r=Array(n+1),i;for(i=0;i<n;++i)r[i]=e[i];return r[i]=t,r}function m(e,t,r){if(n.isES5){var i=Object.getOwnPropertyDescriptor(e,t);if(i!=null)return i.get==null&&i.set==null?i.value:r}else return{}.hasOwnProperty.call(e,t)?e[t]:void 0}function h(e,t,r){if(u(e))return e;var i={value:r,configurable:!0,enumerable:!1,writable:!0};return n.defineProperty(e,t,i),e}function g(e){throw e}var _=(function(){var e=[Array.prototype,Object.prototype,Function.prototype],t=function(t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1};if(n.isES5){var r=Object.getOwnPropertyNames;return function(e){for(var i=[],a=Object.create(null);e!=null&&!t(e);){var o;try{o=r(e)}catch{return i}for(var s=0;s<o.length;++s){var c=o[s];if(!a[c]){a[c]=!0;var l=Object.getOwnPropertyDescriptor(e,c);l!=null&&l.get==null&&l.set==null&&i.push(c)}}e=n.getPrototypeOf(e)}return i}}else{var i={}.hasOwnProperty;return function(n){if(t(n))return[];var r=[];enumeration:for(var a in n)if(i.call(n,a))r.push(a);else{for(var o=0;o<e.length;++o)if(i.call(e[o],a))continue enumeration;r.push(a)}return r}}})(),v=/this\s*\.\s*\S+\s*=/;function y(e){try{if(typeof e==`function`){var t=n.names(e.prototype),r=n.isES5&&t.length>1,i=t.length>0&&!(t.length===1&&t[0]===`constructor`),a=v.test(e+``)&&n.names(e).length>0;if(r||i||a)return!0}return!1}catch{return!1}}function b(e){function t(){}t.prototype=e;for(var n=8;n--;)new t;return e}var x=/^[a-z$_][a-z$_0-9]*$/i;function S(e){return x.test(e)}function C(e,t,n){for(var r=Array(e),i=0;i<e;++i)r[i]=t+i+n;return r}function w(e){try{return e+``}catch{return`[no string representation]`}}function T(e){return typeof e==`object`&&!!e&&typeof e.message==`string`&&typeof e.name==`string`}function E(e){try{h(e,`isOperational`,!0)}catch{}}function D(e){return e==null?!1:e instanceof Error.__BluebirdErrorTypes__.OperationalError||e.isOperational===!0}function O(e){return T(e)&&n.propertyIsWritable(e,`stack`)}var k=(function(){return`stack`in Error()?function(e){return O(e)?e:Error(w(e))}:function(e){if(O(e))return e;try{throw Error(w(e))}catch(e){return e}}})();function A(e){return{}.toString.call(e)}function j(e,t,r){for(var i=n.names(e),a=0;a<i.length;++a){var o=i[a];if(r(o))try{n.defineProperty(t,o,n.getDescriptor(e,o))}catch{}}}var M=function(e){return n.isArray(e)?e:null};if(typeof Symbol<`u`&&Symbol.iterator){var N=typeof Array.from==`function`?function(e){return Array.from(e)}:function(e){for(var t=[],n=e[Symbol.iterator](),r;!(r=n.next()).done;)t.push(r.value);return t};M=function(e){return n.isArray(e)?e:e!=null&&typeof e[Symbol.iterator]==`function`?N(e):null}}var P=typeof process<`u`&&A(process).toLowerCase()===`[object process]`,F=typeof process<`u`&&!0;function I(e){return F?{}[e]:void 0}function L(){if(typeof Promise==`function`)try{var e=new Promise(function(){});if({}.toString.call(e)===`[object Promise]`)return Promise}catch{}}function R(e,t){return e.bind(t)}var z={isClass:y,isIdentifier:S,inheritedDataKeys:_,getDataPropertyOrDefault:m,thrower:g,isArray:n.isArray,asArray:M,notEnumerableProp:h,isPrimitive:u,isObject:d,isError:T,canEvaluate:r,errorObj:i,tryCatch:c,inherits:l,withAppended:p,maybeWrapAsError:f,toFastProperties:b,filledRange:C,toString:w,canAttachTrace:O,ensureErrorObject:k,originatesFromRejection:D,markAsOriginatingFromRejection:E,classString:A,copyDescriptors:j,hasDevTools:typeof chrome<`u`&&chrome&&typeof chrome.loadTimes==`function`,isNode:P,hasEnvVariables:F,env:I,global:o,getNativePromise:L,domainBind:R};z.isRecentNode=z.isNode&&(function(){var e=process.versions.node.split(`.`).map(Number);return e[0]===0&&e[1]>10||e[0]>0})(),z.isNode&&z.toFastProperties(process);try{throw Error()}catch(e){z.lastLineError=e}t.exports=z})),io=s(((e,t)=>{var n=$(),r,i=function(){throw Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`)},a=n.getNativePromise();if(n.isNode&&typeof MutationObserver>`u`){var o=global.setImmediate,s=process.nextTick;r=n.isRecentNode?function(e){o.call(global,e)}:function(e){s.call(process,e)}}else if(typeof a==`function`&&typeof a.resolve==`function`){var c=a.resolve();r=function(e){c.then(e)}}else r=typeof MutationObserver<`u`&&!(typeof window<`u`&&window.navigator&&(window.navigator.standalone||window.cordova))?(function(){var e=document.createElement(`div`),t={attributes:!0},n=!1,r=document.createElement(`div`);new MutationObserver(function(){e.classList.toggle(`foo`),n=!1}).observe(r,t);var i=function(){n||(n=!0,r.classList.toggle(`foo`))};return function(n){var r=new MutationObserver(function(){r.disconnect(),n()});r.observe(e,t),i()}})():typeof setImmediate<`u`?function(e){setImmediate(e)}:typeof setTimeout<`u`?function(e){setTimeout(e,0)}:i;t.exports=r})),ao=s(((e,t)=>{function n(e,t,n,r,i){for(var a=0;a<i;++a)n[a+r]=e[a+t],e[a+t]=void 0}function r(e){this._capacity=e,this._length=0,this._front=0}r.prototype._willBeOverCapacity=function(e){return this._capacity<e},r.prototype._pushOne=function(e){var t=this.length();this._checkCapacity(t+1);var n=this._front+t&this._capacity-1;this[n]=e,this._length=t+1},r.prototype.push=function(e,t,n){var r=this.length()+3;if(this._willBeOverCapacity(r)){this._pushOne(e),this._pushOne(t),this._pushOne(n);return}var i=this._front+r-3;this._checkCapacity(r);var a=this._capacity-1;this[i+0&a]=e,this[i+1&a]=t,this[i+2&a]=n,this._length=r},r.prototype.shift=function(){var e=this._front,t=this[e];return this[e]=void 0,this._front=e+1&this._capacity-1,this._length--,t},r.prototype.length=function(){return this._length},r.prototype._checkCapacity=function(e){this._capacity<e&&this._resizeTo(this._capacity<<1)},r.prototype._resizeTo=function(e){var t=this._capacity;this._capacity=e;var r=this._front+this._length&t-1;n(this,0,this,t,r)},t.exports=r})),oo=s(((e,t)=>{var n;try{throw Error()}catch(e){n=e}var r=io(),i=ao(),a=$();function o(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new i(16),this._normalQueue=new i(16),this._haveDrainedQueues=!1,this._trampolineEnabled=!0;var e=this;this.drainQueues=function(){e._drainQueues()},this._schedule=r}o.prototype.setScheduler=function(e){var t=this._schedule;return this._schedule=e,this._customScheduler=!0,t},o.prototype.hasCustomScheduler=function(){return this._customScheduler},o.prototype.enableTrampoline=function(){this._trampolineEnabled=!0},o.prototype.disableTrampolineIfNecessary=function(){a.hasDevTools&&(this._trampolineEnabled=!1)},o.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues},o.prototype.fatalError=function(e,t){t?(process.stderr.write(`Fatal `+(e instanceof Error?e.stack:e)+`
`),process.exit(2)):this.throwLater(e)},o.prototype.throwLater=function(e,t){if(arguments.length===1&&(t=e,e=function(){throw t}),typeof setTimeout<`u`)setTimeout(function(){e(t)},0);else try{this._schedule(function(){e(t)})}catch{throw Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`)}};function s(e,t,n){this._lateQueue.push(e,t,n),this._queueTick()}function c(e,t,n){this._normalQueue.push(e,t,n),this._queueTick()}function l(e){this._normalQueue._pushOne(e),this._queueTick()}a.hasDevTools?(o.prototype.invokeLater=function(e,t,n){this._trampolineEnabled?s.call(this,e,t,n):this._schedule(function(){setTimeout(function(){e.call(t,n)},100)})},o.prototype.invoke=function(e,t,n){this._trampolineEnabled?c.call(this,e,t,n):this._schedule(function(){e.call(t,n)})},o.prototype.settlePromises=function(e){this._trampolineEnabled?l.call(this,e):this._schedule(function(){e._settlePromises()})}):(o.prototype.invokeLater=s,o.prototype.invoke=c,o.prototype.settlePromises=l),o.prototype._drainQueue=function(e){for(;e.length()>0;){var t=e.shift();if(typeof t!=`function`){t._settlePromises();continue}var n=e.shift(),r=e.shift();t.call(n,r)}},o.prototype._drainQueues=function(){this._drainQueue(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,this._drainQueue(this._lateQueue)},o.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},o.prototype._reset=function(){this._isTickUsed=!1},t.exports=o,t.exports.firstLineError=n})),so=s(((e,t)=>{var n=ro(),r=n.freeze,i=$(),a=i.inherits,o=i.notEnumerableProp;function s(e,t){function n(r){if(!(this instanceof n))return new n(r);o(this,`message`,typeof r==`string`?r:t),o(this,`name`,e),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this)}return a(n,Error),n}var c,l,u=s(`Warning`,`warning`),d=s(`CancellationError`,`cancellation error`),f=s(`TimeoutError`,`timeout error`),p=s(`AggregateError`,`aggregate error`);try{c=TypeError,l=RangeError}catch{c=s(`TypeError`,`type error`),l=s(`RangeError`,`range error`)}for(var m=`join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse`.split(` `),h=0;h<m.length;++h)typeof Array.prototype[m[h]]==`function`&&(p.prototype[m[h]]=Array.prototype[m[h]]);n.defineProperty(p.prototype,`length`,{value:0,configurable:!1,writable:!0,enumerable:!0}),p.prototype.isOperational=!0;var g=0;p.prototype.toString=function(){var e=Array(g*4+1).join(` `),t=`
`+e+`AggregateError of:
`;g++,e=Array(g*4+1).join(` `);for(var n=0;n<this.length;++n){for(var r=this[n]===this?`[Circular AggregateError]`:this[n]+``,i=r.split(`
`),a=0;a<i.length;++a)i[a]=e+i[a];r=i.join(`
`),t+=r+`
`}return g--,t};function _(e){if(!(this instanceof _))return new _(e);o(this,`name`,`OperationalError`),o(this,`message`,e),this.cause=e,this.isOperational=!0,e instanceof Error?(o(this,`message`,e.message),o(this,`stack`,e.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}a(_,Error);var v=Error.__BluebirdErrorTypes__;v||(v=r({CancellationError:d,TimeoutError:f,OperationalError:_,RejectionError:_,AggregateError:p}),n.defineProperty(Error,`__BluebirdErrorTypes__`,{value:v,writable:!1,enumerable:!1,configurable:!1})),t.exports={Error,TypeError:c,RangeError:l,CancellationError:v.CancellationError,OperationalError:v.OperationalError,TimeoutError:v.TimeoutError,AggregateError:v.AggregateError,Warning:u}})),co=s(((e,t)=>{t.exports=function(e,t){var n=$(),r=n.errorObj,i=n.isObject;function a(n,a){if(i(n)){if(n instanceof e)return n;var o=s(n);if(o===r){a&&a._pushContext();var c=e.reject(o.e);return a&&a._popContext(),c}else if(typeof o==`function`){if(l(n)){var c=new e(t);return n._then(c._fulfill,c._reject,void 0,c,null),c}return u(n,o,a)}}return n}function o(e){return e.then}function s(e){try{return o(e)}catch(e){return r.e=e,r}}var c={}.hasOwnProperty;function l(e){try{return c.call(e,`_promise0`)}catch{return!1}}function u(i,a,o){var s=new e(t),c=s;o&&o._pushContext(),s._captureStackTrace(),o&&o._popContext();var l=!0,u=n.tryCatch(a).call(i,d,f);l=!1,s&&u===r&&(s._rejectCallback(u.e,!0,!0),s=null);function d(e){s&&=(s._resolveCallback(e),null)}function f(e){s&&=(s._rejectCallback(e,l,!0),null)}return c}return a}})),lo=s(((e,t)=>{t.exports=function(e,t,n,r,i){var a=$();a.isArray;function o(e){switch(e){case-2:return[];case-3:return{}}}function s(n){var r=this._promise=new e(t);n instanceof e&&r._propagateFrom(n,3),r._setOnCancel(this),this._values=n,this._length=0,this._totalResolved=0,this._init(void 0,-2)}return a.inherits(s,i),s.prototype.length=function(){return this._length},s.prototype.promise=function(){return this._promise},s.prototype._init=function t(i,s){var c=n(this._values,this._promise);if(c instanceof e){c=c._target();var l=c._bitField;if(this._values=c,!(l&50397184))return this._promise._setAsyncGuaranteed(),c._then(t,this._reject,void 0,this,s);if(l&33554432)c=c._value();else if(l&16777216)return this._reject(c._reason());else return this._cancel()}if(c=a.asArray(c),c===null){var u=r(`expecting an array or an iterable object but got `+a.classString(c)).reason();this._promise._rejectCallback(u,!1);return}if(c.length===0){s===-5?this._resolveEmptyArray():this._resolve(o(s));return}this._iterate(c)},s.prototype._iterate=function(t){var r=this.getActualLength(t.length);this._length=r,this._values=this.shouldCopyValues()?Array(r):this._values;for(var i=this._promise,a=!1,o=null,s=0;s<r;++s){var c=n(t[s],i);c instanceof e?(c=c._target(),o=c._bitField):o=null,a?o!==null&&c.suppressUnhandledRejections():o===null?a=this._promiseFulfilled(c,s):o&50397184?a=o&33554432?this._promiseFulfilled(c._value(),s):o&16777216?this._promiseRejected(c._reason(),s):this._promiseCancelled(s):(c._proxy(this,s),this._values[s]=c)}a||i._setAsyncGuaranteed()},s.prototype._isResolved=function(){return this._values===null},s.prototype._resolve=function(e){this._values=null,this._promise._fulfill(e)},s.prototype._cancel=function(){this._isResolved()||!this._promise._isCancellable()||(this._values=null,this._promise._cancel())},s.prototype._reject=function(e){this._values=null,this._promise._rejectCallback(e,!1)},s.prototype._promiseFulfilled=function(e,t){return this._values[t]=e,++this._totalResolved>=this._length?(this._resolve(this._values),!0):!1},s.prototype._promiseCancelled=function(){return this._cancel(),!0},s.prototype._promiseRejected=function(e){return this._totalResolved++,this._reject(e),!0},s.prototype._resultCancelled=function(){if(!this._isResolved()){var t=this._values;if(this._cancel(),t instanceof e)t.cancel();else for(var n=0;n<t.length;++n)t[n]instanceof e&&t[n].cancel()}},s.prototype.shouldCopyValues=function(){return!0},s.prototype.getActualLength=function(e){return e},s}})),uo=s(((e,t)=>{t.exports=function(e){var t=!1,n=[];e.prototype._promiseCreated=function(){},e.prototype._pushContext=function(){},e.prototype._popContext=function(){return null},e._peekContext=e.prototype._peekContext=function(){};function r(){this._trace=new r.CapturedTrace(a())}r.prototype._pushContext=function(){this._trace!==void 0&&(this._trace._promiseCreated=null,n.push(this._trace))},r.prototype._popContext=function(){if(this._trace!==void 0){var e=n.pop(),t=e._promiseCreated;return e._promiseCreated=null,t}return null};function i(){if(t)return new r}function a(){var e=n.length-1;if(e>=0)return n[e]}return r.CapturedTrace=null,r.create=i,r.deactivateLongStackTraces=function(){},r.activateLongStackTraces=function(){var n=e.prototype._pushContext,i=e.prototype._popContext,o=e._peekContext,s=e.prototype._peekContext,c=e.prototype._promiseCreated;r.deactivateLongStackTraces=function(){e.prototype._pushContext=n,e.prototype._popContext=i,e._peekContext=o,e.prototype._peekContext=s,e.prototype._promiseCreated=c,t=!1},t=!0,e.prototype._pushContext=r.prototype._pushContext,e.prototype._popContext=r.prototype._popContext,e._peekContext=e.prototype._peekContext=a,e.prototype._promiseCreated=function(){var e=this._peekContext();e&&e._promiseCreated==null&&(e._promiseCreated=this)}},r}})),fo=s(((e,t)=>{t.exports=function(e,t){var n=e._getDomain,r=e._async,i=so().Warning,a=$(),o=a.canAttachTrace,s,c,l=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,u=/\((?:timers\.js):\d+:\d+\)/,d=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,f=null,p=null,m=!1,h,g=!!(a.env(`BLUEBIRD_DEBUG`)!=0&&(a.env(`BLUEBIRD_DEBUG`)||a.env(`NODE_ENV`)===`development`)),_=!!(a.env(`BLUEBIRD_WARNINGS`)!=0&&(g||a.env(`BLUEBIRD_WARNINGS`))),v=!!(a.env(`BLUEBIRD_LONG_STACK_TRACES`)!=0&&(g||a.env(`BLUEBIRD_LONG_STACK_TRACES`))),y=a.env(`BLUEBIRD_W_FORGOTTEN_RETURN`)!=0&&(_||!!a.env(`BLUEBIRD_W_FORGOTTEN_RETURN`));e.prototype.suppressUnhandledRejections=function(){var e=this._target();e._bitField=e._bitField&-1048577|524288},e.prototype._ensurePossibleRejectionHandled=function(){this._bitField&524288||(this._setRejectionIsUnhandled(),r.invokeLater(this._notifyUnhandledRejection,this,void 0))},e.prototype._notifyUnhandledRejectionIsHandled=function(){re(`rejectionHandled`,s,void 0,this)},e.prototype._setReturnedNonUndefined=function(){this._bitField|=268435456},e.prototype._returnedNonUndefined=function(){return(this._bitField&268435456)!=0},e.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var e=this._settledValue();this._setUnhandledRejectionIsNotified(),re(`unhandledRejection`,c,e,this)}},e.prototype._setUnhandledRejectionIsNotified=function(){this._bitField|=262144},e.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField&=-262145},e.prototype._isUnhandledRejectionNotified=function(){return(this._bitField&262144)>0},e.prototype._setRejectionIsUnhandled=function(){this._bitField|=1048576},e.prototype._unsetRejectionIsUnhandled=function(){this._bitField&=-1048577,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},e.prototype._isRejectionUnhandled=function(){return(this._bitField&1048576)>0},e.prototype._warn=function(e,t,n){return B(e,t,n||this)},e.onPossiblyUnhandledRejection=function(e){var t=n();c=typeof e==`function`?t===null?e:a.domainBind(t,e):void 0},e.onUnhandledRejectionHandled=function(e){var t=n();s=typeof e==`function`?t===null?e:a.domainBind(t,e):void 0};var b=function(){};e.longStackTraces=function(){if(r.haveItemsQueued()&&!K.longStackTraces)throw Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);if(!K.longStackTraces&&G()){var n=e.prototype._captureStackTrace,i=e.prototype._attachExtraTrace;K.longStackTraces=!0,b=function(){if(r.haveItemsQueued()&&!K.longStackTraces)throw Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);e.prototype._captureStackTrace=n,e.prototype._attachExtraTrace=i,t.deactivateLongStackTraces(),r.enableTrampoline(),K.longStackTraces=!1},e.prototype._captureStackTrace=I,e.prototype._attachExtraTrace=L,t.activateLongStackTraces(),r.disableTrampolineIfNecessary()}},e.hasLongStackTraces=function(){return K.longStackTraces&&G()};var x=(function(){try{if(typeof CustomEvent==`function`){var e=new CustomEvent(`CustomEvent`);return a.global.dispatchEvent(e),function(e,t){var n=new CustomEvent(e.toLowerCase(),{detail:t,cancelable:!0});return!a.global.dispatchEvent(n)}}else if(typeof Event==`function`){var e=new Event(`CustomEvent`);return a.global.dispatchEvent(e),function(e,t){var n=new Event(e.toLowerCase(),{cancelable:!0});return n.detail=t,!a.global.dispatchEvent(n)}}else{var e=document.createEvent(`CustomEvent`);return e.initCustomEvent(`testingtheevent`,!1,!0,{}),a.global.dispatchEvent(e),function(e,t){var n=document.createEvent(`CustomEvent`);return n.initCustomEvent(e.toLowerCase(),!1,!0,t),!a.global.dispatchEvent(n)}}}catch{}return function(){return!1}})(),S=(function(){return a.isNode?function(){return process.emit.apply(process,arguments)}:a.global?function(e){var t=`on`+e.toLowerCase(),n=a.global[t];return n?(n.apply(a.global,[].slice.call(arguments,1)),!0):!1}:function(){return!1}})();function C(e,t){return{promise:t}}var w={promiseCreated:C,promiseFulfilled:C,promiseRejected:C,promiseResolved:C,promiseCancelled:C,promiseChained:function(e,t,n){return{promise:t,child:n}},warning:function(e,t){return{warning:t}},unhandledRejection:function(e,t,n){return{reason:t,promise:n}},rejectionHandled:C},T=function(e){var t=!1;try{t=S.apply(null,arguments)}catch(e){r.throwLater(e),t=!0}var n=!1;try{n=x(e,w[e].apply(null,arguments))}catch(e){r.throwLater(e),n=!0}return n||t};e.config=function(t){if(t=Object(t),`longStackTraces`in t&&(t.longStackTraces?e.longStackTraces():!t.longStackTraces&&e.hasLongStackTraces()&&b()),`warnings`in t){var n=t.warnings;K.warnings=!!n,y=K.warnings,a.isObject(n)&&`wForgottenReturn`in n&&(y=!!n.wForgottenReturn)}if(`cancellation`in t&&t.cancellation&&!K.cancellation){if(r.haveItemsQueued())throw Error(`cannot enable cancellation after promises are in use`);e.prototype._clearCancellationData=j,e.prototype._propagateFrom=M,e.prototype._onCancel=k,e.prototype._setOnCancel=A,e.prototype._attachCancellationCallback=O,e.prototype._execute=D,P=M,K.cancellation=!0}return`monitoring`in t&&(t.monitoring&&!K.monitoring?(K.monitoring=!0,e.prototype._fireEvent=T):!t.monitoring&&K.monitoring&&(K.monitoring=!1,e.prototype._fireEvent=E)),e};function E(){return!1}e.prototype._fireEvent=E,e.prototype._execute=function(e,t,n){try{e(t,n)}catch(e){return e}},e.prototype._onCancel=function(){},e.prototype._setOnCancel=function(e){},e.prototype._attachCancellationCallback=function(e){},e.prototype._captureStackTrace=function(){},e.prototype._attachExtraTrace=function(){},e.prototype._clearCancellationData=function(){},e.prototype._propagateFrom=function(e,t){};function D(e,t,n){var r=this;try{e(t,n,function(e){if(typeof e!=`function`)throw TypeError(`onCancel must be a function, got: `+a.toString(e));r._attachCancellationCallback(e)})}catch(e){return e}}function O(e){if(!this._isCancellable())return this;var t=this._onCancel();t===void 0?this._setOnCancel(e):a.isArray(t)?t.push(e):this._setOnCancel([t,e])}function k(){return this._onCancelField}function A(e){this._onCancelField=e}function j(){this._cancellationParent=void 0,this._onCancelField=void 0}function M(e,t){if(t&1){this._cancellationParent=e;var n=e._branchesRemainingToCancel;n===void 0&&(n=0),e._branchesRemainingToCancel=n+1}t&2&&e._isBound()&&this._setBoundTo(e._boundTo)}function N(e,t){t&2&&e._isBound()&&this._setBoundTo(e._boundTo)}var P=N;function F(){var t=this._boundTo;return t!==void 0&&t instanceof e?t.isFulfilled()?t.value():void 0:t}function I(){this._trace=new ue(this._peekContext())}function L(e,t){if(o(e)){var n=this._trace;if(n!==void 0&&t&&(n=n._parent),n!==void 0)n.attachExtraTrace(e);else if(!e.__stackCleaned__){var r=U(e);a.notEnumerableProp(e,`stack`,r.message+`
`+r.stack.join(`
`)),a.notEnumerableProp(e,`__stackCleaned__`,!0)}}}function R(e,t,n,r,i){if(e===void 0&&t!==null&&y){if(i!==void 0&&i._returnedNonUndefined()||!(r._bitField&65535))return;n&&(n+=` `);var a=``,o=``;if(t._trace){for(var s=t._trace.stack.split(`
`),c=te(s),l=c.length-1;l>=0;--l){var f=c[l];if(!u.test(f)){var p=f.match(d);p&&(a=`at `+p[1]+`:`+p[2]+`:`+p[3]+` `);break}}if(c.length>0){for(var m=c[0],l=0;l<s.length;++l)if(s[l]===m){l>0&&(o=`
`+s[l-1]);break}}}var h=`a promise was created in a `+n+`handler `+a+`but was not returned from it, see http://goo.gl/rRqMUw`+o;r._warn(h,!0,t)}}function z(e,t){var n=e+` is deprecated and will be removed in a future version.`;return t&&(n+=` Use `+t+` instead.`),B(n)}function B(t,n,r){if(K.warnings){var a=new i(t),o;if(n)r._attachExtraTrace(a);else if(K.longStackTraces&&(o=e._peekContext()))o.attachExtraTrace(a);else{var s=U(a);a.stack=s.message+`
`+s.stack.join(`
`)}T(`warning`,a)||W(a,``,!0)}}function ee(e,t){for(var n=0;n<t.length-1;++n)t[n].push(`From previous event:`),t[n]=t[n].join(`
`);return n<t.length&&(t[n]=t[n].join(`
`)),e+`
`+t.join(`
`)}function V(e){for(var t=0;t<e.length;++t)(e[t].length===0||t+1<e.length&&e[t][0]===e[t+1][0])&&(e.splice(t,1),t--)}function H(e){for(var t=e[0],n=1;n<e.length;++n){for(var r=e[n],i=t.length-1,a=t[i],o=-1,s=r.length-1;s>=0;--s)if(r[s]===a){o=s;break}for(var s=o;s>=0;--s){var c=r[s];if(t[i]===c)t.pop(),i--;else break}t=r}}function te(e){for(var t=[],n=0;n<e.length;++n){var r=e[n],i=r===`    (No stack trace)`||f.test(r),a=i&&oe(r);i&&!a&&(m&&r.charAt(0)!==` `&&(r=`    `+r),t.push(r))}return t}function ne(e){for(var t=e.stack.replace(/\s+$/g,``).split(`
`),n=0;n<t.length;++n){var r=t[n];if(r===`    (No stack trace)`||f.test(r))break}return n>0&&e.name!=`SyntaxError`&&(t=t.slice(n)),t}function U(e){var t=e.stack,n=e.toString();return t=typeof t==`string`&&t.length>0?ne(e):[`    (No stack trace)`],{message:n,stack:e.name==`SyntaxError`?t:te(t)}}function W(e,t,n){if(typeof console<`u`){var r;if(a.isObject(e)){var i=e.stack;r=t+p(i,e)}else r=t+String(e);typeof h==`function`?h(r,n):(typeof console.log==`function`||typeof console.log==`object`)&&console.log(r)}}function re(e,t,n,i){var a=!1;try{typeof t==`function`&&(a=!0,e===`rejectionHandled`?t(i):t(n,i))}catch(e){r.throwLater(e)}e===`unhandledRejection`?!T(e,n,i)&&!a&&W(n,`Unhandled rejection `):T(e,i)}function ie(e){var t;if(typeof e==`function`)t=`[function `+(e.name||`anonymous`)+`]`;else{if(t=e&&typeof e.toString==`function`?e.toString():a.toString(e),/\[object [a-zA-Z0-9$_]+\]/.test(t))try{t=JSON.stringify(e)}catch{}t.length===0&&(t=`(empty array)`)}return`(<`+ae(t)+`>, no stack trace)`}function ae(e){var t=41;return e.length<t?e:e.substr(0,t-3)+`...`}function G(){return typeof de==`function`}var oe=function(){return!1},se=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;function ce(e){var t=e.match(se);if(t)return{fileName:t[1],line:parseInt(t[2],10)}}function le(e,t){if(G()){for(var n=e.stack.split(`
`),r=t.stack.split(`
`),i=-1,a=-1,o,s,c=0;c<n.length;++c){var u=ce(n[c]);if(u){o=u.fileName,i=u.line;break}}for(var c=0;c<r.length;++c){var u=ce(r[c]);if(u){s=u.fileName,a=u.line;break}}i<0||a<0||!o||!s||o!==s||i>=a||(oe=function(e){if(l.test(e))return!0;var t=ce(e);return!!(t&&t.fileName===o&&i<=t.line&&t.line<=a)})}}function ue(e){this._parent=e,this._promisesCreated=0;var t=this._length=1+(e===void 0?0:e._length);de(this,ue),t>32&&this.uncycle()}a.inherits(ue,Error),t.CapturedTrace=ue,ue.prototype.uncycle=function(){var e=this._length;if(!(e<2)){for(var t=[],n={},r=0,i=this;i!==void 0;++r)t.push(i),i=i._parent;e=this._length=r;for(var r=e-1;r>=0;--r){var a=t[r].stack;n[a]===void 0&&(n[a]=r)}for(var r=0;r<e;++r){var o=n[t[r].stack];if(o!==void 0&&o!==r){o>0&&(t[o-1]._parent=void 0,t[o-1]._length=1),t[r]._parent=void 0,t[r]._length=1;var s=r>0?t[r-1]:this;o<e-1?(s._parent=t[o+1],s._parent.uncycle(),s._length=s._parent._length+1):(s._parent=void 0,s._length=1);for(var c=s._length+1,l=r-2;l>=0;--l)t[l]._length=c,c++;return}}}},ue.prototype.attachExtraTrace=function(e){if(!e.__stackCleaned__){this.uncycle();for(var t=U(e),n=t.message,r=[t.stack],i=this;i!==void 0;)r.push(te(i.stack.split(`
`))),i=i._parent;H(r),V(r),a.notEnumerableProp(e,`stack`,ee(n,r)),a.notEnumerableProp(e,`__stackCleaned__`,!0)}};var de=(function(){var e=/^\s*at\s*/,t=function(e,t){return typeof e==`string`?e:t.name!==void 0&&t.message!==void 0?t.toString():ie(t)};if(typeof Error.stackTraceLimit==`number`&&typeof Error.captureStackTrace==`function`){Error.stackTraceLimit+=6,f=e,p=t;var n=Error.captureStackTrace;return oe=function(e){return l.test(e)},function(e,t){Error.stackTraceLimit+=6,n(e,t),Error.stackTraceLimit-=6}}var r=Error();if(typeof r.stack==`string`&&r.stack.split(`
`)[0].indexOf(`stackDetection@`)>=0)return f=/@/,p=t,m=!0,function(e){e.stack=Error().stack};var i;try{throw Error()}catch(e){i=`stack`in e}return!(`stack`in r)&&i&&typeof Error.stackTraceLimit==`number`?(f=e,p=t,function(e){Error.stackTraceLimit+=6;try{throw Error()}catch(t){e.stack=t.stack}Error.stackTraceLimit-=6}):(p=function(e,t){return typeof e==`string`?e:(typeof t==`object`||typeof t==`function`)&&t.name!==void 0&&t.message!==void 0?t.toString():ie(t)},null)})([]);typeof console<`u`&&console.warn!==void 0&&(h=function(e){console.warn(e)},a.isNode&&process.stderr.isTTY?h=function(e,t){console.warn((t?`\x1B[33m`:`\x1B[31m`)+e+`\x1B[0m
`)}:!a.isNode&&typeof Error().stack==`string`&&(h=function(e,t){console.warn(`%c`+e,t?`color: darkorange`:`color: red`)}));var K={warnings:_,longStackTraces:!1,cancellation:!1,monitoring:!1};return v&&e.longStackTraces(),{longStackTraces:function(){return K.longStackTraces},warnings:function(){return K.warnings},cancellation:function(){return K.cancellation},monitoring:function(){return K.monitoring},propagateFromFunction:function(){return P},boundValueFunction:function(){return F},checkForgottenReturns:R,setBounds:le,warn:B,deprecated:z,CapturedTrace:ue,fireDomEvent:x,fireGlobalEvent:S}}})),po=s(((e,t)=>{t.exports=function(e,t){var n=$(),r=e.CancellationError,i=n.errorObj;function a(e,t,n){this.promise=e,this.type=t,this.handler=n,this.called=!1,this.cancelPromise=null}a.prototype.isFinallyHandler=function(){return this.type===0};function o(e){this.finallyHandler=e}o.prototype._resultCancelled=function(){s(this.finallyHandler)};function s(e,t){return e.cancelPromise==null?!1:(arguments.length>1?e.cancelPromise._reject(t):e.cancelPromise._cancel(),e.cancelPromise=null,!0)}function c(){return u.call(this,this.promise._target()._settledValue())}function l(e){if(!s(this,e))return i.e=e,i}function u(n){var a=this.promise,u=this.handler;if(!this.called){this.called=!0;var d=this.isFinallyHandler()?u.call(a._boundValue()):u.call(a._boundValue(),n);if(d!==void 0){a._setReturnedNonUndefined();var f=t(d,a);if(f instanceof e){if(this.cancelPromise!=null)if(f._isCancelled()){var p=new r(`late cancellation observer`);return a._attachExtraTrace(p),i.e=p,i}else f.isPending()&&f._attachCancellationCallback(new o(this));return f._then(c,l,void 0,this,void 0)}}}return a.isRejected()?(s(this),i.e=n,i):(s(this),n)}return e.prototype._passThrough=function(e,t,n,r){return typeof e==`function`?this._then(n,r,void 0,new a(this,t,e),void 0):this.then()},e.prototype.lastly=e.prototype.finally=function(e){return this._passThrough(e,0,u,u)},e.prototype.tap=function(e){return this._passThrough(e,1,u)},a}})),mo=s(((e,t)=>{t.exports=function(e){var t=$(),n=ro().keys,r=t.tryCatch,i=t.errorObj;function a(a,o,s){return function(c){var l=s._boundValue();predicateLoop:for(var u=0;u<a.length;++u){var d=a[u];if(d===Error||d!=null&&d.prototype instanceof Error){if(c instanceof d)return r(o).call(l,c)}else if(typeof d==`function`){var f=r(d).call(l,c);if(f===i)return f;if(f)return r(o).call(l,c)}else if(t.isObject(c)){for(var p=n(d),m=0;m<p.length;++m){var h=p[m];if(d[h]!=c[h])continue predicateLoop}return r(o).call(l,c)}}return e}}return a}})),ho=s(((e,t)=>{var n=$(),r=n.maybeWrapAsError,i=so().OperationalError,a=ro();function o(e){return e instanceof Error&&a.getPrototypeOf(e)===Error.prototype}var s=/^(?:name|message|stack|cause)$/;function c(e){var t;if(o(e)){t=new i(e),t.name=e.name,t.message=e.message,t.stack=e.stack;for(var r=a.keys(e),c=0;c<r.length;++c){var l=r[c];s.test(l)||(t[l]=e[l])}return t}return n.markAsOriginatingFromRejection(e),e}function l(e,t){return function(n,i){if(e!==null){if(n){var a=c(r(n));e._attachExtraTrace(a),e._reject(a)}else if(!t)e._fulfill(i);else{for(var o=arguments.length,s=Array(Math.max(o-1,0)),l=1;l<o;++l)s[l-1]=arguments[l];e._fulfill(s)}e=null}}}t.exports=l})),go=s(((e,t)=>{t.exports=function(e,t,n,r,i){var a=$(),o=a.tryCatch;e.method=function(n){if(typeof n!=`function`)throw new e.TypeError(`expecting a function but got `+a.classString(n));return function(){var r=new e(t);r._captureStackTrace(),r._pushContext();var a=o(n).apply(this,arguments),s=r._popContext();return i.checkForgottenReturns(a,s,`Promise.method`,r),r._resolveFromSyncValue(a),r}},e.attempt=e.try=function(n){if(typeof n!=`function`)return r(`expecting a function but got `+a.classString(n));var s=new e(t);s._captureStackTrace(),s._pushContext();var c;if(arguments.length>1){i.deprecated(`calling Promise.try with more than 1 argument`);var l=arguments[1],u=arguments[2];c=a.isArray(l)?o(n).apply(u,l):o(n).call(u,l)}else c=o(n)();var d=s._popContext();return i.checkForgottenReturns(c,d,`Promise.try`,s),s._resolveFromSyncValue(c),s},e.prototype._resolveFromSyncValue=function(e){e===a.errorObj?this._rejectCallback(e.e,!1):this._resolveCallback(e,!0)}}})),_o=s(((e,t)=>{t.exports=function(e,t,n,r){var i=!1,a=function(e,t){this._reject(t)},o=function(e,t){t.promiseRejectionQueued=!0,t.bindingPromise._then(a,a,null,this,e)},s=function(e,t){this._bitField&50397184||this._resolveCallback(t.target)},c=function(e,t){t.promiseRejectionQueued||this._reject(e)};e.prototype.bind=function(a){i||(i=!0,e.prototype._propagateFrom=r.propagateFromFunction(),e.prototype._boundValue=r.boundValueFunction());var l=n(a),u=new e(t);u._propagateFrom(this,1);var d=this._target();if(u._setBoundTo(l),l instanceof e){var f={promiseRejectionQueued:!1,promise:u,target:d,bindingPromise:l};d._then(t,o,void 0,u,f),l._then(s,c,void 0,u,f),u._setOnCancel(l)}else u._resolveCallback(d);return u},e.prototype._setBoundTo=function(e){e===void 0?this._bitField&=-2097153:(this._bitField|=2097152,this._boundTo=e)},e.prototype._isBound=function(){return(this._bitField&2097152)==2097152},e.bind=function(t,n){return e.resolve(n).bind(t)}}})),vo=s(((e,t)=>{t.exports=function(e,t,n,r){var i=$(),a=i.tryCatch,o=i.errorObj,s=e._async;e.prototype.break=e.prototype.cancel=function(){if(!r.cancellation())return this._warn(`cancellation is disabled`);for(var e=this,t=e;e._isCancellable();){if(!e._cancelBy(t)){t._isFollowing()?t._followee().cancel():t._cancelBranched();break}var n=e._cancellationParent;if(n==null||!n._isCancellable()){e._isFollowing()?e._followee().cancel():e._cancelBranched();break}else e._isFollowing()&&e._followee().cancel(),e._setWillBeCancelled(),t=e,e=n}},e.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--},e.prototype._enoughBranchesHaveCancelled=function(){return this._branchesRemainingToCancel===void 0||this._branchesRemainingToCancel<=0},e.prototype._cancelBy=function(e){return e===this?(this._branchesRemainingToCancel=0,this._invokeOnCancel(),!0):(this._branchHasCancelled(),this._enoughBranchesHaveCancelled()?(this._invokeOnCancel(),!0):!1)},e.prototype._cancelBranched=function(){this._enoughBranchesHaveCancelled()&&this._cancel()},e.prototype._cancel=function(){this._isCancellable()&&(this._setCancelled(),s.invoke(this._cancelPromises,this,void 0))},e.prototype._cancelPromises=function(){this._length()>0&&this._settlePromises()},e.prototype._unsetOnCancel=function(){this._onCancelField=void 0},e.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled()},e.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled()},e.prototype._doInvokeOnCancel=function(e,t){if(i.isArray(e))for(var n=0;n<e.length;++n)this._doInvokeOnCancel(e[n],t);else if(e!==void 0)if(typeof e==`function`){if(!t){var r=a(e).call(this._boundValue());r===o&&(this._attachExtraTrace(r.e),s.throwLater(r.e))}}else e._resultCancelled(this)},e.prototype._invokeOnCancel=function(){var e=this._onCancel();this._unsetOnCancel(),s.invoke(this._doInvokeOnCancel,this,e)},e.prototype._invokeInternalOnCancel=function(){this._isCancellable()&&(this._doInvokeOnCancel(this._onCancel(),!0),this._unsetOnCancel())},e.prototype._resultCancelled=function(){this.cancel()}}})),yo=s(((e,t)=>{t.exports=function(e){function t(){return this.value}function n(){throw this.reason}e.prototype.return=e.prototype.thenReturn=function(n){return n instanceof e&&n.suppressUnhandledRejections(),this._then(t,void 0,void 0,{value:n},void 0)},e.prototype.throw=e.prototype.thenThrow=function(e){return this._then(n,void 0,void 0,{reason:e},void 0)},e.prototype.catchThrow=function(e){if(arguments.length<=1)return this._then(void 0,n,void 0,{reason:e},void 0);var t=arguments[1];return this.caught(e,function(){throw t})},e.prototype.catchReturn=function(n){if(arguments.length<=1)return n instanceof e&&n.suppressUnhandledRejections(),this._then(void 0,t,void 0,{value:n},void 0);var r=arguments[1];return r instanceof e&&r.suppressUnhandledRejections(),this.caught(n,function(){return r})}}})),bo=s(((e,t)=>{t.exports=function(e){function t(e){e===void 0?(this._bitField=0,this._settledValueField=void 0):(e=e._target(),this._bitField=e._bitField,this._settledValueField=e._isFateSealed()?e._settledValue():void 0)}t.prototype._settledValue=function(){return this._settledValueField};var n=t.prototype.value=function(){if(!this.isFulfilled())throw TypeError(`cannot get fulfillment value of a non-fulfilled promise

    See http://goo.gl/MqrFmX
`);return this._settledValue()},r=t.prototype.error=t.prototype.reason=function(){if(!this.isRejected())throw TypeError(`cannot get rejection reason of a non-rejected promise

    See http://goo.gl/MqrFmX
`);return this._settledValue()},i=t.prototype.isFulfilled=function(){return(this._bitField&33554432)!=0},a=t.prototype.isRejected=function(){return(this._bitField&16777216)!=0},o=t.prototype.isPending=function(){return(this._bitField&50397184)==0},s=t.prototype.isResolved=function(){return(this._bitField&50331648)!=0};t.prototype.isCancelled=function(){return(this._bitField&8454144)!=0},e.prototype.__isCancelled=function(){return(this._bitField&65536)==65536},e.prototype._isCancelled=function(){return this._target().__isCancelled()},e.prototype.isCancelled=function(){return(this._target()._bitField&8454144)!=0},e.prototype.isPending=function(){return o.call(this._target())},e.prototype.isRejected=function(){return a.call(this._target())},e.prototype.isFulfilled=function(){return i.call(this._target())},e.prototype.isResolved=function(){return s.call(this._target())},e.prototype.value=function(){return n.call(this._target())},e.prototype.reason=function(){var e=this._target();return e._unsetRejectionIsUnhandled(),r.call(e)},e.prototype._value=function(){return this._settledValue()},e.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue()},e.PromiseInspection=t}})),xo=s(((e,t)=>{t.exports=function(e,t,n,r,i,a){var o=$(),s=o.canEvaluate,c=o.tryCatch,l=o.errorObj,u;if(s){for(var d=function(e){return Function(`value`,`holder`,`                             
            'use strict';                                                    
            holder.pIndex = value;                                           
            holder.checkFulfillment(this);                                   
            `.replace(/Index/g,e))},f=function(e){return Function(`promise`,`holder`,`                           
            'use strict';                                                    
            holder.pIndex = promise;                                         
            `.replace(/Index/g,e))},p=function(t){for(var n=Array(t),r=0;r<n.length;++r)n[r]=`this.p`+(r+1);var a=n.join(` = `)+` = null;`,o=`var promise;
`+n.map(function(e){return`                                                         
                promise = `+e+`;                                      
                if (promise instanceof Promise) {                            
                    promise.cancel();                                        
                }                                                            
            `}).join(`
`),s=n.join(`, `),u=`Holder$`+t,d=`return function(tryCatch, errorObj, Promise, async) {    
            'use strict';                                                    
            function [TheName](fn) {                                         
                [TheProperties]                                              
                this.fn = fn;                                                
                this.asyncNeeded = true;                                     
                this.now = 0;                                                
            }                                                                
                                                                             
            [TheName].prototype._callFunction = function(promise) {          
                promise._pushContext();                                      
                var ret = tryCatch(this.fn)([ThePassedArguments]);           
                promise._popContext();                                       
                if (ret === errorObj) {                                      
                    promise._rejectCallback(ret.e, false);                   
                } else {                                                     
                    promise._resolveCallback(ret);                           
                }                                                            
            };                                                               
                                                                             
            [TheName].prototype.checkFulfillment = function(promise) {       
                var now = ++this.now;                                        
                if (now === [TheTotal]) {                                    
                    if (this.asyncNeeded) {                                  
                        async.invoke(this._callFunction, this, promise);     
                    } else {                                                 
                        this._callFunction(promise);                         
                    }                                                        
                                                                             
                }                                                            
            };                                                               
                                                                             
            [TheName].prototype._resultCancelled = function() {              
                [CancellationCode]                                           
            };                                                               
                                                                             
            return [TheName];                                                
        }(tryCatch, errorObj, Promise, async);                               
        `;return d=d.replace(/\[TheName\]/g,u).replace(/\[TheTotal\]/g,t).replace(/\[ThePassedArguments\]/g,s).replace(/\[TheProperties\]/g,a).replace(/\[CancellationCode\]/g,o),Function(`tryCatch`,`errorObj`,`Promise`,`async`,d)(c,l,e,i)},m=[],h=[],g=[],_=0;_<8;++_)m.push(p(_+1)),h.push(d(_+1)),g.push(f(_+1));u=function(e){this._reject(e)}}e.join=function(){var i=arguments.length-1,c;if(i>0&&typeof arguments[i]==`function`&&(c=arguments[i],i<=8&&s)){var l=new e(r);l._captureStackTrace();for(var d=m[i-1],f=new d(c),p=h,_=0;_<i;++_){var v=n(arguments[_],l);if(v instanceof e){v=v._target();var y=v._bitField;y&50397184?y&33554432?p[_].call(l,v._value(),f):y&16777216?l._reject(v._reason()):l._cancel():(v._then(p[_],u,void 0,l,f),g[_](v,f),f.asyncNeeded=!1)}else p[_].call(l,v,f)}if(!l._isFateSealed()){if(f.asyncNeeded){var b=a();b!==null&&(f.fn=o.domainBind(b,f.fn))}l._setAsyncGuaranteed(),l._setOnCancel(f)}return l}var x=[...arguments];c&&x.pop();var l=new t(x).promise();return c===void 0?l:l.spread(c)}}})),So=s(((e,t)=>{t.exports=function(e,t,n,r,i,a){var o=e._getDomain,s=$(),c=s.tryCatch,l=s.errorObj,u=e._async;function d(e,t,n,r){this.constructor$(e),this._promise._captureStackTrace();var a=o();this._callback=a===null?t:s.domainBind(a,t),this._preservedValues=r===i?Array(this.length()):null,this._limit=n,this._inFlight=0,this._queue=[],u.invoke(this._asyncInit,this,void 0)}s.inherits(d,t),d.prototype._asyncInit=function(){this._init$(void 0,-2)},d.prototype._init=function(){},d.prototype._promiseFulfilled=function(t,n){var i=this._values,o=this.length(),s=this._preservedValues,u=this._limit;if(n<0){if(n=n*-1-1,i[n]=t,u>=1&&(this._inFlight--,this._drainQueue(),this._isResolved()))return!0}else{if(u>=1&&this._inFlight>=u)return i[n]=t,this._queue.push(n),!1;s!==null&&(s[n]=t);var d=this._promise,f=this._callback,p=d._boundValue();d._pushContext();var m=c(f).call(p,t,n,o),h=d._popContext();if(a.checkForgottenReturns(m,h,s===null?`Promise.map`:`Promise.filter`,d),m===l)return this._reject(m.e),!0;var g=r(m,this._promise);if(g instanceof e){g=g._target();var _=g._bitField;if(!(_&50397184))return u>=1&&this._inFlight++,i[n]=g,g._proxy(this,(n+1)*-1),!1;if(_&33554432)m=g._value();else if(_&16777216)return this._reject(g._reason()),!0;else return this._cancel(),!0}i[n]=m}return++this._totalResolved>=o?(s===null?this._resolve(i):this._filter(i,s),!0):!1},d.prototype._drainQueue=function(){for(var e=this._queue,t=this._limit,n=this._values;e.length>0&&this._inFlight<t;){if(this._isResolved())return;var r=e.pop();this._promiseFulfilled(n[r],r)}},d.prototype._filter=function(e,t){for(var n=t.length,r=Array(n),i=0,a=0;a<n;++a)e[a]&&(r[i++]=t[a]);r.length=i,this._resolve(r)},d.prototype.preservedValues=function(){return this._preservedValues};function f(t,r,i,a){if(typeof r!=`function`)return n(`expecting a function but got `+s.classString(r));var o=0;if(i!==void 0)if(typeof i==`object`&&i){if(typeof i.concurrency!=`number`)return e.reject(TypeError(`'concurrency' must be a number but it is `+s.classString(i.concurrency)));o=i.concurrency}else return e.reject(TypeError(`options argument must be an object but it is `+s.classString(i)));return o=typeof o==`number`&&isFinite(o)&&o>=1?o:0,new d(t,r,o,a).promise()}e.prototype.map=function(e,t){return f(this,e,t,null)},e.map=function(e,t,n,r){return f(e,t,n,r)}}})),Co=s(((e,t)=>{var n=Object.create;if(n){var r=n(null),i=n(null);r[` size`]=i[` size`]=0}t.exports=function(e){var t=$(),n=t.canEvaluate,a=t.isIdentifier,o,s,c=function(e){return Function(`ensureMethod`,`                                    
        return function(obj) {                                               
            'use strict'                                                     
            var len = this.length;                                           
            ensureMethod(obj, 'methodName');                                 
            switch(len) {                                                    
                case 1: return obj.methodName(this[0]);                      
                case 2: return obj.methodName(this[0], this[1]);             
                case 3: return obj.methodName(this[0], this[1], this[2]);    
                case 0: return obj.methodName();                             
                default:                                                     
                    return obj.methodName.apply(obj, this);                  
            }                                                                
        };                                                                   
        `.replace(/methodName/g,e))(d)},l=function(e){return Function(`obj`,`                                             
        'use strict';                                                        
        return obj.propertyName;                                             
        `.replace(`propertyName`,e))},u=function(e,t,n){var r=n[e];if(typeof r!=`function`){if(!a(e))return null;if(r=t(e),n[e]=r,n[` size`]++,n[` size`]>512){for(var i=Object.keys(n),o=0;o<256;++o)delete n[i[o]];n[` size`]=i.length-256}}return r};o=function(e){return u(e,c,r)},s=function(e){return u(e,l,i)};function d(n,r){var i;if(n!=null&&(i=n[r]),typeof i!=`function`){var a=`Object `+t.classString(n)+` has no method '`+t.toString(r)+`'`;throw new e.TypeError(a)}return i}function f(e){return d(e,this.pop()).apply(e,this)}e.prototype.call=function(e){for(var t=arguments.length,r=Array(Math.max(t-1,0)),i=1;i<t;++i)r[i-1]=arguments[i];if(n){var a=o(e);if(a!==null)return this._then(a,void 0,void 0,r,void 0)}return r.push(e),this._then(f,void 0,void 0,r,void 0)};function p(e){return e[this]}function m(e){var t=+this;return t<0&&(t=Math.max(0,t+e.length)),e[t]}e.prototype.get=function(e){var t=typeof e==`number`,r;if(t)r=m;else if(n){var i=s(e);r=i===null?p:i}else r=p;return this._then(r,void 0,void 0,e,void 0)}}})),wo=s(((e,t)=>{t.exports=function(e,t,n,r,i,a){var o=$(),s=so().TypeError,c=$().inherits,l=o.errorObj,u=o.tryCatch,d={};function f(e){setTimeout(function(){throw e},0)}function p(e){var t=n(e);return t!==e&&typeof e._isDisposable==`function`&&typeof e._getDisposer==`function`&&e._isDisposable()&&t._setDisposable(e._getDisposer()),t}function m(t,r){var a=0,o=t.length,s=new e(i);function c(){if(a>=o)return s._fulfill();var i=p(t[a++]);if(i instanceof e&&i._isDisposable()){try{i=n(i._getDisposer().tryDispose(r),t.promise)}catch(e){return f(e)}if(i instanceof e)return i._then(c,f,null,null,null)}c()}return c(),s}function h(e,t,n){this._data=e,this._promise=t,this._context=n}h.prototype.data=function(){return this._data},h.prototype.promise=function(){return this._promise},h.prototype.resource=function(){return this.promise().isFulfilled()?this.promise().value():d},h.prototype.tryDispose=function(e){var t=this.resource(),n=this._context;n!==void 0&&n._pushContext();var r=t===d?null:this.doDispose(t,e);return n!==void 0&&n._popContext(),this._promise._unsetDisposable(),this._data=null,r},h.isDisposer=function(e){return e!=null&&typeof e.resource==`function`&&typeof e.tryDispose==`function`};function g(e,t,n){this.constructor$(e,t,n)}c(g,h),g.prototype.doDispose=function(e,t){return this.data().call(e,e,t)};function _(e){return h.isDisposer(e)?(this.resources[this.index]._setDisposable(e),e.promise()):e}function v(e){this.length=e,this.promise=null,this[e-1]=null}v.prototype._resultCancelled=function(){for(var t=this.length,n=0;n<t;++n){var r=this[n];r instanceof e&&r.cancel()}},e.using=function(){var r=arguments.length;if(r<2)return t(`you must pass at least 2 arguments to Promise.using`);var i=arguments[r-1];if(typeof i!=`function`)return t(`expecting a function but got `+o.classString(i));var s,c=!0;r===2&&Array.isArray(arguments[0])?(s=arguments[0],r=s.length,c=!1):(s=arguments,r--);for(var d=new v(r),f=0;f<r;++f){var p=s[f];if(h.isDisposer(p)){var g=p;p=p.promise(),p._setDisposable(g)}else{var y=n(p);y instanceof e&&(p=y._then(_,null,null,{resources:d,index:f},void 0))}d[f]=p}for(var b=Array(d.length),f=0;f<b.length;++f)b[f]=e.resolve(d[f]).reflect();var x=e.all(b).then(function(e){for(var t=0;t<e.length;++t){var n=e[t];if(n.isRejected())return l.e=n.error(),l;if(!n.isFulfilled()){x.cancel();return}e[t]=n.value()}S._pushContext(),i=u(i);var r=c?i.apply(void 0,e):i(e),o=S._popContext();return a.checkForgottenReturns(r,o,`Promise.using`,S),r}),S=x.lastly(function(){return m(d,new e.PromiseInspection(x))});return d.promise=S,S._setOnCancel(d),S},e.prototype._setDisposable=function(e){this._bitField|=131072,this._disposer=e},e.prototype._isDisposable=function(){return(this._bitField&131072)>0},e.prototype._getDisposer=function(){return this._disposer},e.prototype._unsetDisposable=function(){this._bitField&=-131073,this._disposer=void 0},e.prototype.disposer=function(e){if(typeof e==`function`)return new g(e,this,r());throw new s}}})),To=s(((e,t)=>{t.exports=function(e,t,n){var r=$(),i=e.TimeoutError;function a(e){this.handle=e}a.prototype._resultCancelled=function(){clearTimeout(this.handle)};var o=function(e){return s(+this).thenReturn(e)},s=e.delay=function(r,i){var s,c;return i===void 0?(s=new e(t),c=setTimeout(function(){s._fulfill()},+r),n.cancellation()&&s._setOnCancel(new a(c)),s._captureStackTrace()):(s=e.resolve(i)._then(o,null,null,r,void 0),n.cancellation()&&i instanceof e&&s._setOnCancel(i)),s._setAsyncGuaranteed(),s};e.prototype.delay=function(e){return s(e,this)};var c=function(e,t,n){var a=typeof t==`string`?new i(t):t instanceof Error?t:new i(`operation timed out`);r.markAsOriginatingFromRejection(a),e._attachExtraTrace(a),e._reject(a),n?.cancel()};function l(e){return clearTimeout(this.handle),e}function u(e){throw clearTimeout(this.handle),e}e.prototype.timeout=function(e,t){e=+e;var r,i,o=new a(setTimeout(function(){r.isPending()&&c(r,t,i)},e));return n.cancellation()?(i=this.then(),r=i._then(l,u,void 0,o,void 0),r._setOnCancel(o)):r=this._then(l,u,void 0,o,void 0),r}}})),Eo=s(((e,t)=>{t.exports=function(e,t,n,r,i,a){var o=so().TypeError,s=$(),c=s.errorObj,l=s.tryCatch,u=[];function d(t,n,i){for(var a=0;a<n.length;++a){i._pushContext();var o=l(n[a])(t);if(i._popContext(),o===c){i._pushContext();var s=e.reject(c.e);return i._popContext(),s}var u=r(o,i);if(u instanceof e)return u}return null}function f(t,r,i,o){if(a.cancellation()){var s=new e(n),c=this._finallyPromise=new e(n);this._promise=s.lastly(function(){return c}),s._captureStackTrace(),s._setOnCancel(this)}else(this._promise=new e(n))._captureStackTrace();this._stack=o,this._generatorFunction=t,this._receiver=r,this._generator=void 0,this._yieldHandlers=typeof i==`function`?[i].concat(u):u,this._yieldedPromise=null,this._cancellationPhase=!1}s.inherits(f,i),f.prototype._isResolved=function(){return this._promise===null},f.prototype._cleanup=function(){this._promise=this._generator=null,a.cancellation()&&this._finallyPromise!==null&&(this._finallyPromise._fulfill(),this._finallyPromise=null)},f.prototype._promiseCancelled=function(){if(!this._isResolved()){var t=this._generator.return!==void 0,n;if(t)this._promise._pushContext(),n=l(this._generator.return).call(this._generator,void 0),this._promise._popContext();else{var r=new e.CancellationError(`generator .return() sentinel`);e.coroutine.returnSentinel=r,this._promise._attachExtraTrace(r),this._promise._pushContext(),n=l(this._generator.throw).call(this._generator,r),this._promise._popContext()}this._cancellationPhase=!0,this._yieldedPromise=null,this._continue(n)}},f.prototype._promiseFulfilled=function(e){this._yieldedPromise=null,this._promise._pushContext();var t=l(this._generator.next).call(this._generator,e);this._promise._popContext(),this._continue(t)},f.prototype._promiseRejected=function(e){this._yieldedPromise=null,this._promise._attachExtraTrace(e),this._promise._pushContext();var t=l(this._generator.throw).call(this._generator,e);this._promise._popContext(),this._continue(t)},f.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof e){var t=this._yieldedPromise;this._yieldedPromise=null,t.cancel()}},f.prototype.promise=function(){return this._promise},f.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._promiseFulfilled(void 0)},f.prototype._continue=function(t){var n=this._promise;if(t===c)return this._cleanup(),this._cancellationPhase?n.cancel():n._rejectCallback(t.e,!1);var i=t.value;if(t.done===!0)return this._cleanup(),this._cancellationPhase?n.cancel():n._resolveCallback(i);var a=r(i,this._promise);if(!(a instanceof e)&&(a=d(a,this._yieldHandlers,this._promise),a===null)){this._promiseRejected(new o(`A value %s was yielded that could not be treated as a promise

    See http://goo.gl/MqrFmX

`.replace(`%s`,i)+`From coroutine:
`+this._stack.split(`
`).slice(1,-7).join(`
`)));return}a=a._target();var s=a._bitField;s&50397184?s&33554432?e._async.invoke(this._promiseFulfilled,this,a._value()):s&16777216?e._async.invoke(this._promiseRejected,this,a._reason()):this._promiseCancelled():(this._yieldedPromise=a,a._proxy(this,null))},e.coroutine=function(e,t){if(typeof e!=`function`)throw new o(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);var n=Object(t).yieldHandler,r=f,i=Error().stack;return function(){var t=e.apply(this,arguments),a=new r(void 0,void 0,n,i),o=a.promise();return a._generator=t,a._promiseFulfilled(void 0),o}},e.coroutine.addYieldHandler=function(e){if(typeof e!=`function`)throw new o(`expecting a function but got `+s.classString(e));u.push(e)},e.spawn=function(n){if(a.deprecated(`Promise.spawn()`,`Promise.coroutine()`),typeof n!=`function`)return t(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);var r=new f(n,this),i=r.promise();return r._run(e.spawn),i}}})),Do=s(((e,t)=>{t.exports=function(e){var t=$(),n=e._async,r=t.tryCatch,i=t.errorObj;function a(e,a){var s=this;if(!t.isArray(e))return o.call(s,e,a);var c=r(a).apply(s._boundValue(),[null].concat(e));c===i&&n.throwLater(c.e)}function o(e,t){var a=this._boundValue(),o=e===void 0?r(t).call(a,null):r(t).call(a,null,e);o===i&&n.throwLater(o.e)}function s(e,t){var a=this;if(!e){var o=Error(e+``);o.cause=e,e=o}var s=r(t).call(a._boundValue(),e);s===i&&n.throwLater(s.e)}e.prototype.asCallback=e.prototype.nodeify=function(e,t){if(typeof e==`function`){var n=o;t!==void 0&&Object(t).spread&&(n=a),this._then(n,s,void 0,this,e)}return this}}})),Oo=s(((e,t)=>{t.exports=function(e,t){var n={},r=$(),i=ho(),a=r.withAppended,o=r.maybeWrapAsError,s=r.canEvaluate,c=so().TypeError,l=`Async`,u={__isPromisified__:!0},d=RegExp(`^(?:`+[`arity`,`length`,`name`,`arguments`,`caller`,`callee`,`prototype`,`__isPromisified__`].join(`|`)+`)$`),f=function(e){return r.isIdentifier(e)&&e.charAt(0)!==`_`&&e!==`constructor`};function p(e){return!d.test(e)}function m(e){try{return e.__isPromisified__===!0}catch{return!1}}function h(e,t,n){var i=r.getDataPropertyOrDefault(e,t+n,u);return i?m(i):!1}function g(e,t,n){for(var r=0;r<e.length;r+=2){var i=e[r];if(n.test(i)){for(var a=i.replace(n,``),o=0;o<e.length;o+=2)if(e[o]===a)throw new c(`Cannot promisify an API that has normal methods with '%s'-suffix

    See http://goo.gl/MqrFmX
`.replace(`%s`,t))}}}function _(e,t,n,i){for(var a=r.inheritedDataKeys(e),o=[],s=0;s<a.length;++s){var c=a[s],l=e[c],u=i===f||f(c,l,e);typeof l==`function`&&!m(l)&&!h(e,c,t)&&i(c,l,e,u)&&o.push(c,l)}return g(o,t,n),o}var v=function(e){return e.replace(/([$])/,`\\$`)},y,b=function(e){for(var t=[e],n=Math.max(0,e-1-3),r=e-1;r>=n;--r)t.push(r);for(var r=e+1;r<=3;++r)t.push(r);return t},x=function(e){return r.filledRange(e,`_arg`,``)},S=function(e){return r.filledRange(Math.max(e,3),`_arg`,``)},C=function(e){return typeof e.length==`number`?Math.max(Math.min(e.length,1024),0):0};y=function(s,c,l,u,d,f){var p=Math.max(0,C(u)-1),m=b(p),h=typeof s==`string`||c===n;function g(e){var t=x(e).join(`, `),n=e>0?`, `:``;return(h?`ret = callback.call(this, {{args}}, nodeback); break;
`:c===void 0?`ret = callback({{args}}, nodeback); break;
`:`ret = callback.call(receiver, {{args}}, nodeback); break;
`).replace(`{{args}}`,t).replace(`, `,n)}function _(){for(var e=``,t=0;t<m.length;++t)e+=`case `+m[t]+`:`+g(m[t]);return e+=`                                                             
        default:                                                             
            var args = new Array(len + 1);                                   
            var i = 0;                                                       
            for (var i = 0; i < len; ++i) {                                  
               args[i] = arguments[i];                                       
            }                                                                
            args[i] = nodeback;                                              
            [CodeForCall]                                                    
            break;                                                           
        `.replace(`[CodeForCall]`,h?`ret = callback.apply(this, args);
`:`ret = callback.apply(receiver, args);
`),e}var v=typeof s==`string`?`this != null ? this['`+s+`'] : fn`:`fn`,y=`'use strict';                                                
        var ret = function (Parameters) {                                    
            'use strict';                                                    
            var len = arguments.length;                                      
            var promise = new Promise(INTERNAL);                             
            promise._captureStackTrace();                                    
            var nodeback = nodebackForPromise(promise, `+f+`);   
            var ret;                                                         
            var callback = tryCatch([GetFunctionCode]);                      
            switch(len) {                                                    
                [CodeForSwitchCase]                                          
            }                                                                
            if (ret === errorObj) {                                          
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);
            }                                                                
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     
            return promise;                                                  
        };                                                                   
        notEnumerableProp(ret, '__isPromisified__', true);                   
        return ret;                                                          
    `.replace(`[CodeForSwitchCase]`,_()).replace(`[GetFunctionCode]`,v);return y=y.replace(`Parameters`,S(p)),Function(`Promise`,`fn`,`receiver`,`withAppended`,`maybeWrapAsError`,`nodebackForPromise`,`tryCatch`,`errorObj`,`notEnumerableProp`,`INTERNAL`,y)(e,u,c,a,o,i,r.tryCatch,r.errorObj,r.notEnumerableProp,t)};function w(s,c,l,u,d,f){var p=(function(){return this})(),m=s;typeof m==`string`&&(s=u);function h(){var r=c;c===n&&(r=this);var l=new e(t);l._captureStackTrace();var u=typeof m==`string`&&this!==p?this[m]:s,d=i(l,f);try{u.apply(r,a(arguments,d))}catch(e){l._rejectCallback(o(e),!0,!0)}return l._isFateSealed()||l._setAsyncGuaranteed(),l}return r.notEnumerableProp(h,`__isPromisified__`,!0),h}var T=s?y:w;function E(e,t,i,a,o){for(var s=_(e,t,RegExp(v(t)+`$`),i),c=0,l=s.length;c<l;c+=2){var u=s[c],d=s[c+1],f=u+t;if(a===T)e[f]=T(u,n,u,d,t,o);else{var p=a(d,function(){return T(u,n,u,d,t,o)});r.notEnumerableProp(p,`__isPromisified__`,!0),e[f]=p}}return r.toFastProperties(e),e}function D(e,t,n){return T(e,t,void 0,e,null,n)}e.promisify=function(e,t){if(typeof e!=`function`)throw new c(`expecting a function but got `+r.classString(e));if(m(e))return e;t=Object(t);var i=D(e,t.context===void 0?n:t.context,!!t.multiArgs);return r.copyDescriptors(e,i,p),i},e.promisifyAll=function(e,t){if(typeof e!=`function`&&typeof e!=`object`)throw new c(`the target of promisifyAll must be an object or a function

    See http://goo.gl/MqrFmX
`);t=Object(t);var n=!!t.multiArgs,i=t.suffix;typeof i!=`string`&&(i=l);var a=t.filter;typeof a!=`function`&&(a=f);var o=t.promisifier;if(typeof o!=`function`&&(o=T),!r.isIdentifier(i))throw RangeError(`suffix must be a valid identifier

    See http://goo.gl/MqrFmX
`);for(var s=r.inheritedDataKeys(e),u=0;u<s.length;++u){var d=e[s[u]];s[u]!==`constructor`&&r.isClass(d)&&(E(d.prototype,i,a,o,n),E(d,i,a,o,n))}return E(e,i,a,o,n)}}})),ko=s(((e,t)=>{t.exports=function(e,t,n,r){var i=$(),a=i.isObject,o=ro(),s;typeof Map==`function`&&(s=Map);var c=(function(){var e=0,t=0;function n(n,r){this[e]=n,this[e+t]=r,e++}return function(r){t=r.size,e=0;var i=Array(r.size*2);return r.forEach(n,i),i}})(),l=function(e){for(var t=new s,n=e.length/2|0,r=0;r<n;++r){var i=e[n+r],a=e[r];t.set(i,a)}return t};function u(e){var t=!1,n;if(s!==void 0&&e instanceof s)n=c(e),t=!0;else{var r=o.keys(e),i=r.length;n=Array(i*2);for(var a=0;a<i;++a){var l=r[a];n[a]=e[l],n[a+i]=l}}this.constructor$(n),this._isMap=t,this._init$(void 0,-3)}i.inherits(u,t),u.prototype._init=function(){},u.prototype._promiseFulfilled=function(e,t){if(this._values[t]=e,++this._totalResolved>=this._length){var n;if(this._isMap)n=l(this._values);else{n={};for(var r=this.length(),i=0,a=this.length();i<a;++i)n[this._values[i+r]]=this._values[i]}return this._resolve(n),!0}return!1},u.prototype.shouldCopyValues=function(){return!1},u.prototype.getActualLength=function(e){return e>>1};function d(t){var i,o=n(t);if(a(o))i=o instanceof e?o._then(e.props,void 0,void 0,void 0,void 0):new u(o).promise();else return r(`cannot await properties of a non-object

    See http://goo.gl/MqrFmX
`);return o instanceof e&&i._propagateFrom(o,2),i}e.prototype.props=function(){return d(this)},e.props=function(e){return d(e)}}})),Ao=s(((e,t)=>{t.exports=function(e,t,n,r){var i=$(),a=function(e){return e.then(function(t){return o(t,e)})};function o(o,s){var c=n(o);if(c instanceof e)return a(c);if(o=i.asArray(o),o===null)return r(`expecting an array or an iterable object but got `+i.classString(o));var l=new e(t);s!==void 0&&l._propagateFrom(s,3);for(var u=l._fulfill,d=l._reject,f=0,p=o.length;f<p;++f){var m=o[f];m===void 0&&!(f in o)||e.cast(m)._then(u,d,void 0,l,null)}return l}e.race=function(e){return o(e,void 0)},e.prototype.race=function(){return o(this,void 0)}}})),jo=s(((e,t)=>{t.exports=function(e,t,n,r,i,a){var o=e._getDomain,s=$(),c=s.tryCatch;function l(t,n,r,a){this.constructor$(t);var c=o();this._fn=c===null?n:s.domainBind(c,n),r!==void 0&&(r=e.resolve(r),r._attachCancellationCallback(this)),this._initialValue=r,this._currentCancellable=null,a===i?this._eachValues=Array(this._length):a===0?this._eachValues=null:this._eachValues=void 0,this._promise._captureStackTrace(),this._init$(void 0,-5)}s.inherits(l,t),l.prototype._gotAccum=function(e){this._eachValues!==void 0&&this._eachValues!==null&&e!==i&&this._eachValues.push(e)},l.prototype._eachComplete=function(e){return this._eachValues!==null&&this._eachValues.push(e),this._eachValues},l.prototype._init=function(){},l.prototype._resolveEmptyArray=function(){this._resolve(this._eachValues===void 0?this._initialValue:this._eachValues)},l.prototype.shouldCopyValues=function(){return!1},l.prototype._resolve=function(e){this._promise._resolveCallback(e),this._values=null},l.prototype._resultCancelled=function(t){if(t===this._initialValue)return this._cancel();this._isResolved()||(this._resultCancelled$(),this._currentCancellable instanceof e&&this._currentCancellable.cancel(),this._initialValue instanceof e&&this._initialValue.cancel())},l.prototype._iterate=function(t){this._values=t;var n,r,i=t.length;if(this._initialValue===void 0?(n=e.resolve(t[0]),r=1):(n=this._initialValue,r=0),this._currentCancellable=n,!n.isRejected())for(;r<i;++r){var a={accum:null,value:t[r],index:r,length:i,array:this};n=n._then(f,void 0,void 0,a,void 0)}this._eachValues!==void 0&&(n=n._then(this._eachComplete,void 0,void 0,this,void 0)),n._then(u,u,void 0,n,this)},e.prototype.reduce=function(e,t){return d(this,e,t,null)},e.reduce=function(e,t,n,r){return d(e,t,n,r)};function u(e,t){this.isFulfilled()?t._resolve(e):t._reject(e)}function d(e,t,r,i){return typeof t==`function`?new l(e,t,r,i).promise():n(`expecting a function but got `+s.classString(t))}function f(t){this.accum=t,this.array._gotAccum(t);var n=r(this.value,this.array._promise);return n instanceof e?(this.array._currentCancellable=n,n._then(p,void 0,void 0,this,void 0)):p.call(this,n)}function p(t){var n=this.array,r=n._promise,i=c(n._fn);r._pushContext();var o=n._eachValues===void 0?i.call(r._boundValue(),this.accum,t,this.index,this.length):i.call(r._boundValue(),t,this.index,this.length);o instanceof e&&(n._currentCancellable=o);var s=r._popContext();return a.checkForgottenReturns(o,s,n._eachValues===void 0?`Promise.reduce`:`Promise.each`,r),o}}})),Mo=s(((e,t)=>{t.exports=function(e,t,n){var r=e.PromiseInspection,i=$();function a(e){this.constructor$(e)}i.inherits(a,t),a.prototype._promiseResolved=function(e,t){return this._values[e]=t,++this._totalResolved>=this._length?(this._resolve(this._values),!0):!1},a.prototype._promiseFulfilled=function(e,t){var n=new r;return n._bitField=33554432,n._settledValueField=e,this._promiseResolved(t,n)},a.prototype._promiseRejected=function(e,t){var n=new r;return n._bitField=16777216,n._settledValueField=e,this._promiseResolved(t,n)},e.settle=function(e){return n.deprecated(`.settle()`,`.reflect()`),new a(e).promise()},e.prototype.settle=function(){return e.settle(this)}}})),No=s(((e,t)=>{t.exports=function(e,t,n){var r=$(),i=so().RangeError,a=so().AggregateError,o=r.isArray,s={};function c(e){this.constructor$(e),this._howMany=0,this._unwrap=!1,this._initialized=!1}r.inherits(c,t),c.prototype._init=function(){if(this._initialized){if(this._howMany===0){this._resolve([]);return}this._init$(void 0,-5);var e=o(this._values);!this._isResolved()&&e&&this._howMany>this._canPossiblyFulfill()&&this._reject(this._getRangeError(this.length()))}},c.prototype.init=function(){this._initialized=!0,this._init()},c.prototype.setUnwrap=function(){this._unwrap=!0},c.prototype.howMany=function(){return this._howMany},c.prototype.setHowMany=function(e){this._howMany=e},c.prototype._promiseFulfilled=function(e){return this._addFulfilled(e),this._fulfilled()===this.howMany()?(this._values.length=this.howMany(),this.howMany()===1&&this._unwrap?this._resolve(this._values[0]):this._resolve(this._values),!0):!1},c.prototype._promiseRejected=function(e){return this._addRejected(e),this._checkOutcome()},c.prototype._promiseCancelled=function(){return this._values instanceof e||this._values==null?this._cancel():(this._addRejected(s),this._checkOutcome())},c.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){for(var e=new a,t=this.length();t<this._values.length;++t)this._values[t]!==s&&e.push(this._values[t]);return e.length>0?this._reject(e):this._cancel(),!0}return!1},c.prototype._fulfilled=function(){return this._totalResolved},c.prototype._rejected=function(){return this._values.length-this.length()},c.prototype._addRejected=function(e){this._values.push(e)},c.prototype._addFulfilled=function(e){this._values[this._totalResolved++]=e},c.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},c.prototype._getRangeError=function(e){return new i(`Input array must contain at least `+this._howMany+` items but contains only `+e+` items`)},c.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0))};function l(e,t){if((t|0)!==t||t<0)return n(`expecting a positive integer

    See http://goo.gl/MqrFmX
`);var r=new c(e),i=r.promise();return r.setHowMany(t),r.init(),i}e.some=function(e,t){return l(e,t)},e.prototype.some=function(e){return l(this,e)},e._SomePromiseArray=c}})),Po=s(((e,t)=>{t.exports=function(e,t){var n=e.map;e.prototype.filter=function(e,r){return n(this,e,r,t)},e.filter=function(e,r,i){return n(e,r,i,t)}}})),Fo=s(((e,t)=>{t.exports=function(e,t){var n=e.reduce,r=e.all;function i(){return r(this)}function a(e,r){return n(e,r,t,t)}e.prototype.each=function(e){return n(this,e,t,0)._then(i,void 0,void 0,this,void 0)},e.prototype.mapSeries=function(e){return n(this,e,t,t)},e.each=function(e,r){return n(e,r,t,0)._then(i,void 0,void 0,e,void 0)},e.mapSeries=a}})),Io=s(((e,t)=>{t.exports=function(e){var t=e._SomePromiseArray;function n(e){var n=new t(e),r=n.promise();return n.setHowMany(1),n.setUnwrap(),n.init(),r}e.any=function(e){return n(e)},e.prototype.any=function(){return n(this)}}})),Lo=s(((e,t)=>{t.exports=function(){var e=function(){return new f(`circular promise resolution chain

    See http://goo.gl/MqrFmX
`)},n=function(){return new O.PromiseInspection(this._target())},r=function(e){return O.reject(new f(e))};function i(){}var a={},o=$(),s=o.isNode?function(){var e=process.domain;return e===void 0&&(e=null),e}:function(){return null};o.notEnumerableProp(O,`_getDomain`,s);var c=ro(),l=oo(),u=new l;c.defineProperty(O,`_async`,{value:u});var d=so(),f=O.TypeError=d.TypeError;O.RangeError=d.RangeError;var p=O.CancellationError=d.CancellationError;O.TimeoutError=d.TimeoutError,O.OperationalError=d.OperationalError,O.RejectionError=d.OperationalError,O.AggregateError=d.AggregateError;var m=function(){},h={},g={},_=co()(O,m),v=lo()(O,m,_,r,i),y=uo()(O),b=y.create,x=fo()(O,y);x.CapturedTrace;var S=po()(O,_),C=mo()(g),w=ho(),T=o.errorObj,E=o.tryCatch;function D(e,t){if(typeof t!=`function`)throw new f(`expecting a function but got `+o.classString(t));if(e.constructor!==O)throw new f(`the promise constructor cannot be invoked directly

    See http://goo.gl/MqrFmX
`)}function O(e){this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,e!==m&&(D(this,e),this._resolveFromExecutor(e)),this._promiseCreated(),this._fireEvent(`promiseCreated`,this)}O.prototype.toString=function(){return`[object Promise]`},O.prototype.caught=O.prototype.catch=function(e){var t=arguments.length;if(t>1){var n=Array(t-1),i=0,a;for(a=0;a<t-1;++a){var s=arguments[a];if(o.isObject(s))n[i++]=s;else return r(`expecting an object but got A catch statement predicate `+o.classString(s))}return n.length=i,e=arguments[a],this.then(void 0,C(n,e,this))}return this.then(void 0,e)},O.prototype.reflect=function(){return this._then(n,n,void 0,this,void 0)},O.prototype.then=function(e,t){if(x.warnings()&&arguments.length>0&&typeof e!=`function`&&typeof t!=`function`){var n=`.then() only accepts functions but was passed: `+o.classString(e);arguments.length>1&&(n+=`, `+o.classString(t)),this._warn(n)}return this._then(e,t,void 0,void 0,void 0)},O.prototype.done=function(e,t){this._then(e,t,void 0,void 0,void 0)._setIsFinal()},O.prototype.spread=function(e){return typeof e==`function`?this.all()._then(e,void 0,void 0,h,void 0):r(`expecting a function but got `+o.classString(e))},O.prototype.toJSON=function(){var e={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(e.fulfillmentValue=this.value(),e.isFulfilled=!0):this.isRejected()&&(e.rejectionReason=this.reason(),e.isRejected=!0),e},O.prototype.all=function(){return arguments.length>0&&this._warn(`.all() was passed arguments but it does not take any`),new v(this).promise()},O.prototype.error=function(e){return this.caught(o.originatesFromRejection,e)},O.getNewLibraryCopy=t.exports,O.is=function(e){return e instanceof O},O.fromNode=O.fromCallback=function(e){var t=new O(m);t._captureStackTrace();var n=arguments.length>1&&!!Object(arguments[1]).multiArgs,r=E(e)(w(t,n));return r===T&&t._rejectCallback(r.e,!0),t._isFateSealed()||t._setAsyncGuaranteed(),t},O.all=function(e){return new v(e).promise()},O.cast=function(e){var t=_(e);return t instanceof O||(t=new O(m),t._captureStackTrace(),t._setFulfilled(),t._rejectionHandler0=e),t},O.resolve=O.fulfilled=O.cast,O.reject=O.rejected=function(e){var t=new O(m);return t._captureStackTrace(),t._rejectCallback(e,!0),t},O.setScheduler=function(e){if(typeof e!=`function`)throw new f(`expecting a function but got `+o.classString(e));return u.setScheduler(e)},O.prototype._then=function(e,t,n,r,i){var a=i!==void 0,c=a?i:new O(m),l=this._target(),d=l._bitField;a||(c._propagateFrom(this,3),c._captureStackTrace(),r===void 0&&this._bitField&2097152&&(r=d&50397184?this._boundValue():l===this?void 0:this._boundTo),this._fireEvent(`promiseChained`,this,c));var f=s();if(d&50397184){var h,g,_=l._settlePromiseCtx;d&33554432?(g=l._rejectionHandler0,h=e):d&16777216?(g=l._fulfillmentHandler0,h=t,l._unsetRejectionIsUnhandled()):(_=l._settlePromiseLateCancellationObserver,g=new p(`late cancellation observer`),l._attachExtraTrace(g),h=t),u.invoke(_,l,{handler:f===null?h:typeof h==`function`&&o.domainBind(f,h),promise:c,receiver:r,value:g})}else l._addCallbacks(e,t,c,r,f);return c},O.prototype._length=function(){return this._bitField&65535},O.prototype._isFateSealed=function(){return(this._bitField&117506048)!=0},O.prototype._isFollowing=function(){return(this._bitField&67108864)==67108864},O.prototype._setLength=function(e){this._bitField=this._bitField&-65536|e&65535},O.prototype._setFulfilled=function(){this._bitField|=33554432,this._fireEvent(`promiseFulfilled`,this)},O.prototype._setRejected=function(){this._bitField|=16777216,this._fireEvent(`promiseRejected`,this)},O.prototype._setFollowing=function(){this._bitField|=67108864,this._fireEvent(`promiseResolved`,this)},O.prototype._setIsFinal=function(){this._bitField|=4194304},O.prototype._isFinal=function(){return(this._bitField&4194304)>0},O.prototype._unsetCancelled=function(){this._bitField&=-65537},O.prototype._setCancelled=function(){this._bitField|=65536,this._fireEvent(`promiseCancelled`,this)},O.prototype._setWillBeCancelled=function(){this._bitField|=8388608},O.prototype._setAsyncGuaranteed=function(){u.hasCustomScheduler()||(this._bitField|=134217728)},O.prototype._receiverAt=function(e){var t=e===0?this._receiver0:this[e*4-4+3];if(t!==a)return t===void 0&&this._isBound()?this._boundValue():t},O.prototype._promiseAt=function(e){return this[e*4-4+2]},O.prototype._fulfillmentHandlerAt=function(e){return this[e*4-4+0]},O.prototype._rejectionHandlerAt=function(e){return this[e*4-4+1]},O.prototype._boundValue=function(){},O.prototype._migrateCallback0=function(e){e._bitField;var t=e._fulfillmentHandler0,n=e._rejectionHandler0,r=e._promise0,i=e._receiverAt(0);i===void 0&&(i=a),this._addCallbacks(t,n,r,i,null)},O.prototype._migrateCallbackAt=function(e,t){var n=e._fulfillmentHandlerAt(t),r=e._rejectionHandlerAt(t),i=e._promiseAt(t),o=e._receiverAt(t);o===void 0&&(o=a),this._addCallbacks(n,r,i,o,null)},O.prototype._addCallbacks=function(e,t,n,r,i){var a=this._length();if(a>=65531&&(a=0,this._setLength(0)),a===0)this._promise0=n,this._receiver0=r,typeof e==`function`&&(this._fulfillmentHandler0=i===null?e:o.domainBind(i,e)),typeof t==`function`&&(this._rejectionHandler0=i===null?t:o.domainBind(i,t));else{var s=a*4-4;this[s+2]=n,this[s+3]=r,typeof e==`function`&&(this[s+0]=i===null?e:o.domainBind(i,e)),typeof t==`function`&&(this[s+1]=i===null?t:o.domainBind(i,t))}return this._setLength(a+1),a},O.prototype._proxy=function(e,t){this._addCallbacks(void 0,void 0,t,e,null)},O.prototype._resolveCallback=function(t,n){if(!(this._bitField&117506048)){if(t===this)return this._rejectCallback(e(),!1);var r=_(t,this);if(!(r instanceof O))return this._fulfill(t);n&&this._propagateFrom(r,2);var i=r._target();if(i===this){this._reject(e());return}var a=i._bitField;if(!(a&50397184)){var o=this._length();o>0&&i._migrateCallback0(this);for(var s=1;s<o;++s)i._migrateCallbackAt(this,s);this._setFollowing(),this._setLength(0),this._setFollowee(i)}else if(a&33554432)this._fulfill(i._value());else if(a&16777216)this._reject(i._reason());else{var c=new p(`late cancellation observer`);i._attachExtraTrace(c),this._reject(c)}}},O.prototype._rejectCallback=function(e,t,n){var r=o.ensureErrorObject(e),i=r===e;if(!i&&!n&&x.warnings()){var a=`a promise was rejected with a non-error: `+o.classString(e);this._warn(a,!0)}this._attachExtraTrace(r,t?i:!1),this._reject(e)},O.prototype._resolveFromExecutor=function(e){var t=this;this._captureStackTrace(),this._pushContext();var n=!0,r=this._execute(e,function(e){t._resolveCallback(e)},function(e){t._rejectCallback(e,n)});n=!1,this._popContext(),r!==void 0&&t._rejectCallback(r,!0)},O.prototype._settlePromiseFromHandler=function(e,t,n,r){var i=r._bitField;if(!(i&65536)){r._pushContext();var a;t===h?!n||typeof n.length!=`number`?(a=T,a.e=new f(`cannot .spread() a non-array: `+o.classString(n))):a=E(e).apply(this._boundValue(),n):a=E(e).call(t,n);var s=r._popContext();i=r._bitField,!(i&65536)&&(a===g?r._reject(n):a===T?r._rejectCallback(a.e,!1):(x.checkForgottenReturns(a,s,``,r,this),r._resolveCallback(a)))}},O.prototype._target=function(){for(var e=this;e._isFollowing();)e=e._followee();return e},O.prototype._followee=function(){return this._rejectionHandler0},O.prototype._setFollowee=function(e){this._rejectionHandler0=e},O.prototype._settlePromise=function(e,t,r,a){var o=e instanceof O,s=this._bitField,c=(s&134217728)!=0;s&65536?(o&&e._invokeInternalOnCancel(),r instanceof S&&r.isFinallyHandler()?(r.cancelPromise=e,E(t).call(r,a)===T&&e._reject(T.e)):t===n?e._fulfill(n.call(r)):r instanceof i?r._promiseCancelled(e):o||e instanceof v?e._cancel():r.cancel()):typeof t==`function`?o?(c&&e._setAsyncGuaranteed(),this._settlePromiseFromHandler(t,r,a,e)):t.call(r,a,e):r instanceof i?r._isResolved()||(s&33554432?r._promiseFulfilled(a,e):r._promiseRejected(a,e)):o&&(c&&e._setAsyncGuaranteed(),s&33554432?e._fulfill(a):e._reject(a))},O.prototype._settlePromiseLateCancellationObserver=function(e){var t=e.handler,n=e.promise,r=e.receiver,i=e.value;typeof t==`function`?n instanceof O?this._settlePromiseFromHandler(t,r,i,n):t.call(r,i,n):n instanceof O&&n._reject(i)},O.prototype._settlePromiseCtx=function(e){this._settlePromise(e.promise,e.handler,e.receiver,e.value)},O.prototype._settlePromise0=function(e,t,n){var r=this._promise0,i=this._receiverAt(0);this._promise0=void 0,this._receiver0=void 0,this._settlePromise(r,e,i,t)},O.prototype._clearCallbackDataAtIndex=function(e){var t=e*4-4;this[t+2]=this[t+3]=this[t+0]=this[t+1]=void 0},O.prototype._fulfill=function(t){var n=this._bitField;if(!((n&117506048)>>>16)){if(t===this){var r=e();return this._attachExtraTrace(r),this._reject(r)}this._setFulfilled(),this._rejectionHandler0=t,(n&65535)>0&&(n&134217728?this._settlePromises():u.settlePromises(this))}},O.prototype._reject=function(e){var t=this._bitField;if(!((t&117506048)>>>16)){if(this._setRejected(),this._fulfillmentHandler0=e,this._isFinal())return u.fatalError(e,o.isNode);(t&65535)>0?u.settlePromises(this):this._ensurePossibleRejectionHandled()}},O.prototype._fulfillPromises=function(e,t){for(var n=1;n<e;n++){var r=this._fulfillmentHandlerAt(n),i=this._promiseAt(n),a=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,a,t)}},O.prototype._rejectPromises=function(e,t){for(var n=1;n<e;n++){var r=this._rejectionHandlerAt(n),i=this._promiseAt(n),a=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,a,t)}},O.prototype._settlePromises=function(){var e=this._bitField,t=e&65535;if(t>0){if(e&16842752){var n=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,n,e),this._rejectPromises(t,n)}else{var r=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,r,e),this._fulfillPromises(t,r)}this._setLength(0)}this._clearCancellationData()},O.prototype._settledValue=function(){var e=this._bitField;if(e&33554432)return this._rejectionHandler0;if(e&16777216)return this._fulfillmentHandler0};function k(e){this.promise._resolveCallback(e)}function A(e){this.promise._rejectCallback(e,!1)}O.defer=O.pending=function(){return x.deprecated(`Promise.defer`,`new Promise`),{promise:new O(m),resolve:k,reject:A}},o.notEnumerableProp(O,`_makeSelfResolutionError`,e),go()(O,m,_,r,x),_o()(O,m,_,x),vo()(O,v,r,x),yo()(O),bo()(O),xo()(O,v,_,m,u,s),O.Promise=O,O.version=`3.4.7`,So()(O,v,r,_,m,x),Co()(O),wo()(O,r,_,b,m,x),To()(O,m,x),Eo()(O,r,m,_,i,x),Do()(O),Oo()(O,m),ko()(O,v,_,r),Ao()(O,m,_,r),jo()(O,v,r,_,m,x),Mo()(O,v,x),No()(O,v,r),Po()(O,m),Fo()(O,m),Io()(O),o.toFastProperties(O),o.toFastProperties(O.prototype);function j(e){var t=new O(m);t._fulfillmentHandler0=e,t._rejectionHandler0=e,t._promise0=e,t._receiver0=e}return j({a:1}),j({b:2}),j({c:3}),j(1),j(function(){}),j(void 0),j(!1),j(new O(m)),x.setBounds(l.firstLineError,o.lastLineError),O}})),Ro=s((e=>{var t=(Q(),d(Z)),n=Lo()();e.defer=r,e.when=n.resolve,e.resolve=n.resolve,e.all=n.all,e.props=n.props,e.reject=n.reject,e.promisify=n.promisify,e.mapSeries=n.mapSeries,e.attempt=n.attempt,e.nfcall=function(e){var t=Array.prototype.slice.call(arguments,1);return n.promisify(e).apply(null,t)},n.prototype.fail=n.prototype.caught,n.prototype.also=function(e){return this.then(function(r){var i=t.extend({},r,e(r));return n.props(i)})};function r(){var e,t,r=new n.Promise(function(n,r){e=n,t=r});return{resolve:e,reject:t,promise:r}}})),zo=s((e=>{var t=(Q(),d(Z)),n=e.types={document:`document`,paragraph:`paragraph`,run:`run`,text:`text`,tab:`tab`,checkbox:`checkbox`,hyperlink:`hyperlink`,noteReference:`noteReference`,image:`image`,note:`note`,commentReference:`commentReference`,comment:`comment`,table:`table`,tableRow:`tableRow`,tableCell:`tableCell`,break:`break`,bookmarkStart:`bookmarkStart`};function r(e,t){return t||={},{type:n.document,children:e,notes:t.notes||new p({}),comments:t.comments||[]}}function i(e,t){t||={};var r=t.indent||{};return{type:n.paragraph,children:e,styleId:t.styleId||null,styleName:t.styleName||null,numbering:t.numbering||null,alignment:t.alignment||null,indent:{start:r.start||null,end:r.end||null,firstLine:r.firstLine||null,hanging:r.hanging||null}}}function a(e,t){return t||={},{type:n.run,children:e,styleId:t.styleId||null,styleName:t.styleName||null,isBold:!!t.isBold,isUnderline:!!t.isUnderline,isItalic:!!t.isItalic,isStrikethrough:!!t.isStrikethrough,isAllCaps:!!t.isAllCaps,isSmallCaps:!!t.isSmallCaps,verticalAlignment:t.verticalAlignment||o.baseline,font:t.font||null,fontSize:t.fontSize||null,highlight:t.highlight||null}}var o={baseline:`baseline`,superscript:`superscript`,subscript:`subscript`};function s(e){return{type:n.text,value:e}}function c(){return{type:n.tab}}function l(e){return{type:n.checkbox,checked:e.checked}}function u(e,t){return{type:n.hyperlink,children:e,href:t.href,anchor:t.anchor,targetFrame:t.targetFrame}}function f(e){return{type:n.noteReference,noteType:e.noteType,noteId:e.noteId}}function p(e){this._notes=t.indexBy(e,function(e){return _(e.noteType,e.noteId)})}p.prototype.resolve=function(e){return this.findNoteByKey(_(e.noteType,e.noteId))},p.prototype.findNoteByKey=function(e){return this._notes[e]||null};function m(e){return{type:n.note,noteType:e.noteType,noteId:e.noteId,body:e.body}}function h(e){return{type:n.commentReference,commentId:e.commentId}}function g(e){return{type:n.comment,commentId:e.commentId,body:e.body,authorName:e.authorName,authorInitials:e.authorInitials}}function _(e,t){return e+`-`+t}function v(e){return{type:n.image,read:function(t){return t?e.readImage(t):e.readImage().then(function(e){return Buffer.from(e)})},readAsArrayBuffer:function(){return e.readImage()},readAsBase64String:function(){return e.readImage(`base64`)},readAsBuffer:function(){return e.readImage().then(function(e){return Buffer.from(e)})},altText:e.altText,contentType:e.contentType}}function y(e,t){return t||={},{type:n.table,children:e,styleId:t.styleId||null,styleName:t.styleName||null}}function b(e,t){return t||={},{type:n.tableRow,children:e,isHeader:t.isHeader||!1}}function x(e,t){return t||={},{type:n.tableCell,children:e,colSpan:t.colSpan==null?1:t.colSpan,rowSpan:t.rowSpan==null?1:t.rowSpan}}function S(e){return{type:n.break,breakType:e}}function C(e){return{type:n.bookmarkStart,name:e.name}}e.document=e.Document=r,e.paragraph=e.Paragraph=i,e.run=e.Run=a,e.text=e.Text=s,e.tab=e.Tab=c,e.checkbox=e.Checkbox=l,e.Hyperlink=u,e.noteReference=e.NoteReference=f,e.Notes=p,e.Note=m,e.commentReference=h,e.comment=g,e.Image=v,e.Table=y,e.TableRow=b,e.TableCell=x,e.lineBreak=S(`line`),e.pageBreak=S(`page`),e.columnBreak=S(`column`),e.BookmarkStart=C,e.verticalAlignment=o})),Bo=s((e=>{var t=(Q(),d(Z));e.Result=n,e.success=r,e.warning=i,e.error=a;function n(e,t){this.value=e,this.messages=t||[]}n.prototype.map=function(e){return new n(e(this.value),this.messages)},n.prototype.flatMap=function(e){var t=e(this.value);return new n(t.value,o([this,t]))},n.prototype.flatMapThen=function(e){var t=this;return e(this.value).then(function(e){return new n(e.value,o([t,e]))})},n.combine=function(e){return new n(t.flatten(t.pluck(e,`value`)),o(e))};function r(e){return new n(e,[])}function i(e){return{type:`warning`,message:e}}function a(e){return{type:`error`,message:e.message,error:e}}function o(e){var n=[];return t.flatten(t.pluck(e,`messages`),!0).forEach(function(e){s(n,e)||n.push(e)}),n}function s(e,n){return t.find(e,c.bind(null,n))!==void 0}function c(e,t){return e.type===t.type&&e.message===t.message}})),Vo=s((e=>{e.byteLength=c,e.toByteArray=u,e.fromByteArray=p;for(var t=[],n=[],r=typeof Uint8Array<`u`?Uint8Array:Array,i=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,a=0,o=i.length;a<o;++a)t[a]=i[a],n[i.charCodeAt(a)]=a;n[45]=62,n[95]=63;function s(e){var t=e.length;if(t%4>0)throw Error(`Invalid string. Length must be a multiple of 4`);var n=e.indexOf(`=`);n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function c(e){var t=s(e),n=t[0],r=t[1];return(n+r)*3/4-r}function l(e,t,n){return(t+n)*3/4-n}function u(e){var t,i=s(e),a=i[0],o=i[1],c=new r(l(e,a,o)),u=0,d=o>0?a-4:a,f;for(f=0;f<d;f+=4)t=n[e.charCodeAt(f)]<<18|n[e.charCodeAt(f+1)]<<12|n[e.charCodeAt(f+2)]<<6|n[e.charCodeAt(f+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=t&255;return o===2&&(t=n[e.charCodeAt(f)]<<2|n[e.charCodeAt(f+1)]>>4,c[u++]=t&255),o===1&&(t=n[e.charCodeAt(f)]<<10|n[e.charCodeAt(f+1)]<<4|n[e.charCodeAt(f+2)]>>2,c[u++]=t>>8&255,c[u++]=t&255),c}function d(e){return t[e>>18&63]+t[e>>12&63]+t[e>>6&63]+t[e&63]}function f(e,t,n){for(var r,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(e[a+2]&255),i.push(d(r));return i.join(``)}function p(e){for(var n,r=e.length,i=r%3,a=[],o=16383,s=0,c=r-i;s<c;s+=o)a.push(f(e,s,s+o>c?c:s+o));return i===1?(n=e[r-1],a.push(t[n>>2]+t[n<<4&63]+`==`)):i===2&&(n=(e[r-2]<<8)+e[r-1],a.push(t[n>>10]+t[n>>4&63]+t[n<<2&63]+`=`)),a.join(``)}})),Ho=s(((e,t)=>{(function(n){typeof e==`object`&&t!==void 0?t.exports=n():typeof define==`function`&&define.amd?define([],n):(typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:this).JSZip=n()})(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var c=typeof f==`function`&&f;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var l=Error(`Cannot find module '`+o+`'`);throw l.code=`MODULE_NOT_FOUND`,l}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return i(n||e)},u,u.exports,e,t,n,r)}return n[o].exports}for(var a=typeof f==`function`&&f,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){var r=e(`./utils`),i=e(`./support`),a=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;n.encode=function(e){for(var t,n,i,o,s,c,l,u=[],d=0,f=e.length,p=f,m=r.getTypeOf(e)!==`string`;d<e.length;)p=f-d,i=m?(t=e[d++],n=d<f?e[d++]:0,d<f?e[d++]:0):(t=e.charCodeAt(d++),n=d<f?e.charCodeAt(d++):0,d<f?e.charCodeAt(d++):0),o=t>>2,s=(3&t)<<4|n>>4,c=1<p?(15&n)<<2|i>>6:64,l=2<p?63&i:64,u.push(a.charAt(o)+a.charAt(s)+a.charAt(c)+a.charAt(l));return u.join(``)},n.decode=function(e){var t,n,r,o,s,c,l=0,u=0,d=`data:`;if(e.substr(0,d.length)===d)throw Error(`Invalid base64 input, it looks like a data url.`);var f,p=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,``)).length/4;if(e.charAt(e.length-1)===a.charAt(64)&&p--,e.charAt(e.length-2)===a.charAt(64)&&p--,p%1!=0)throw Error(`Invalid base64 input, bad content length.`);for(f=i.uint8array?new Uint8Array(0|p):Array(0|p);l<e.length;)t=a.indexOf(e.charAt(l++))<<2|(o=a.indexOf(e.charAt(l++)))>>4,n=(15&o)<<4|(s=a.indexOf(e.charAt(l++)))>>2,r=(3&s)<<6|(c=a.indexOf(e.charAt(l++))),f[u++]=t,s!==64&&(f[u++]=n),c!==64&&(f[u++]=r);return f}},{"./support":30,"./utils":32}],2:[function(e,t,n){var r=e(`./external`),i=e(`./stream/DataWorker`),a=e(`./stream/Crc32Probe`),o=e(`./stream/DataLengthProbe`);function s(e,t,n,r,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=n,this.compression=r,this.compressedContent=i}s.prototype={getContentWorker:function(){var e=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o(`data_length`)),t=this;return e.on(`end`,function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw Error(`Bug : uncompressed data size mismatch`)}),e},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo(`compressedSize`,this.compressedSize).withStreamInfo(`uncompressedSize`,this.uncompressedSize).withStreamInfo(`crc32`,this.crc32).withStreamInfo(`compression`,this.compression)}},s.createWorkerFrom=function(e,t,n){return e.pipe(new a).pipe(new o(`uncompressedSize`)).pipe(t.compressWorker(n)).pipe(new o(`compressedSize`)).withStreamInfo(`compression`,t)},t.exports=s},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,n){var r=e(`./stream/GenericWorker`);n.STORE={magic:`\0\0`,compressWorker:function(){return new r(`STORE compression`)},uncompressWorker:function(){return new r(`STORE decompression`)}},n.DEFLATE=e(`./flate`)},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,n){var r=e(`./utils`),i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t){return e!==void 0&&e.length?r.getTypeOf(e)===`string`?function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,t,n){var r=null;r=typeof Promise<`u`?Promise:e(`lie`),t.exports={Promise:r}},{lie:37}],7:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Uint32Array<`u`,i=e(`pako`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=r?`uint8array`:`array`;function c(e,t){o.call(this,`FlateWorker/`+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}n.magic=`\b\0`,a.inherits(c,o),c.prototype.processChunk=function(e){this.meta=e.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(s,e.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},n.compressWorker=function(e){return new c(`Deflate`,e)},n.uncompressWorker=function(){return new c(`Inflate`,{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,n){function r(e,t){var n,r=``;for(n=0;n<t;n++)r+=String.fromCharCode(255&e),e>>>=8;return r}function i(e,t,n,i,o,u){var d,f,p=e.file,m=e.compression,h=u!==s.utf8encode,g=a.transformTo(`string`,u(p.name)),_=a.transformTo(`string`,s.utf8encode(p.name)),v=p.comment,y=a.transformTo(`string`,u(v)),b=a.transformTo(`string`,s.utf8encode(v)),x=_.length!==p.name.length,S=b.length!==v.length,C=``,w=``,T=``,E=p.dir,D=p.date,O={crc32:0,compressedSize:0,uncompressedSize:0};t&&!n||(O.crc32=e.crc32,O.compressedSize=e.compressedSize,O.uncompressedSize=e.uncompressedSize);var k=0;t&&(k|=8),h||!x&&!S||(k|=2048);var A=0,j=0;E&&(A|=16),o===`UNIX`?(j=798,A|=function(e,t){var n=e;return e||(n=t?16893:33204),(65535&n)<<16}(p.unixPermissions,E)):(j=20,A|=function(e){return 63&(e||0)}(p.dosPermissions)),d=D.getUTCHours(),d<<=6,d|=D.getUTCMinutes(),d<<=5,d|=D.getUTCSeconds()/2,f=D.getUTCFullYear()-1980,f<<=4,f|=D.getUTCMonth()+1,f<<=5,f|=D.getUTCDate(),x&&(w=r(1,1)+r(c(g),4)+_,C+=`up`+r(w.length,2)+w),S&&(T=r(1,1)+r(c(y),4)+b,C+=`uc`+r(T.length,2)+T);var M=``;return M+=`
\0`,M+=r(k,2),M+=m.magic,M+=r(d,2),M+=r(f,2),M+=r(O.crc32,4),M+=r(O.compressedSize,4),M+=r(O.uncompressedSize,4),M+=r(g.length,2),M+=r(C.length,2),{fileRecord:l.LOCAL_FILE_HEADER+M+g+C,dirRecord:l.CENTRAL_FILE_HEADER+r(j,2)+M+r(y.length,2)+`\0\0\0\0`+r(A,4)+r(i,4)+g+C+y}}var a=e(`../utils`),o=e(`../stream/GenericWorker`),s=e(`../utf8`),c=e(`../crc32`),l=e(`../signature`);function u(e,t,n,r){o.call(this,`ZipFileWorker`),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=n,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(u,o),u.prototype.push=function(e){var t=e.meta.percent||0,n=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:n?(t+100*(n-r-1))/n:100}}))},u.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var n=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,n=i(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var n=this.bytesWritten-e,i=function(e,t,n,i,o){var s=a.transformTo(`string`,o(i));return l.CENTRAL_DIRECTORY_END+`\0\0\0\0`+r(e,2)+r(e,2)+r(t,4)+r(n,4)+r(s.length,2)+s}(this.dirRecords.length,n,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on(`error`,function(e){t.error(e)}),this},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var n=0;n<t.length;n++)try{t[n].error(e)}catch{}return!0},u.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,n){var r=e(`../compressions`),i=e(`./ZipFileWorker`);n.generateWorker=function(e,t,n){var a=new i(t.streamFiles,n,t.platform,t.encodeFileName),o=0;try{e.forEach(function(e,n){o++;var i=function(e,t){var n=e||t,i=r[n];if(!i)throw Error(n+` is not a valid compression method !`);return i}(n.options.compression,t.compression),s=n.options.compressionOptions||t.compressionOptions||{},c=n.dir,l=n.date;n._compressWorker(i,s).withStreamInfo(`file`,{name:e,dir:c,date:l,comment:n.comment||``,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions}).pipe(a)}),a.entriesCount=o}catch(e){a.error(e)}return a}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw Error(`The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`);this.files=Object.create(null),this.comment=null,this.root=``,this.clone=function(){var e=new r;for(var t in this)typeof this[t]!=`function`&&(e[t]=this[t]);return e}}(r.prototype=e(`./object`)).loadAsync=e(`./load`),r.support=e(`./support`),r.defaults=e(`./defaults`),r.version=`3.10.1`,r.loadAsync=function(e,t){return new r().loadAsync(e,t)},r.external=e(`./external`),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,n){var r=e(`./utils`),i=e(`./external`),a=e(`./utf8`),o=e(`./zipEntries`),s=e(`./stream/Crc32Probe`),c=e(`./nodejsUtils`);function l(e){return new i.Promise(function(t,n){var r=e.decompressed.getContentWorker().pipe(new s);r.on(`error`,function(e){n(e)}).on(`end`,function(){r.streamInfo.crc32===e.decompressed.crc32?t():n(Error(`Corrupted zip : CRC32 mismatch`))}).resume()})}t.exports=function(e,t){var n=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(e)?i.Promise.reject(Error(`JSZip can't accept a stream when loading a zip file.`)):r.prepareContent(`the loaded zip file`,e,!0,t.optimizedBinaryString,t.base64).then(function(e){var n=new o(t);return n.load(e),n}).then(function(e){var n=[i.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var a=0;a<r.length;a++)n.push(l(r[a]));return i.Promise.all(n)}).then(function(e){for(var i=e.shift(),a=i.files,o=0;o<a.length;o++){var s=a[o],c=s.fileNameStr,l=r.resolve(s.fileNameStr);n.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(n.file(l).unsafeOriginalName=c)}return i.zipComment.length&&(n.comment=i.zipComment),n})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,n){var r=e(`../utils`),i=e(`../stream/GenericWorker`);function a(e,t){i.call(this,`Nodejs stream input adapter for `+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(a,i),a.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on(`data`,function(e){t.push({data:e,meta:{percent:0}})}).on(`error`,function(e){t.isPaused?this.generatedError=e:t.error(e)}).on(`end`,function(){t.isPaused?t._upstreamEnded=!0:t.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,n){var r=e(`readable-stream`).Readable;function i(e,t,n){r.call(this,t),this._helper=e;var i=this;e.on(`data`,function(e,t){i.push(e)||i._helper.pause(),n&&n(t)}).on(`error`,function(e){i.emit(`error`,e)}).on(`end`,function(){i.push(null)})}e(`../utils`).inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,t,n){t.exports={isNode:typeof Buffer<`u`,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(typeof e==`number`)throw Error(`The "data" argument must not be a number`);return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&typeof e.on==`function`&&typeof e.pause==`function`&&typeof e.resume==`function`}}},{}],15:[function(e,t,n){function r(e,t,n){var r,i=a.getTypeOf(t),s=a.extend(n||{},c);s.date=s.date||new Date,s.compression!==null&&(s.compression=s.compression.toUpperCase()),typeof s.unixPermissions==`string`&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=h(e)),s.createFolders&&(r=m(e))&&g.call(this,r,!0);var d=i===`string`&&!1===s.binary&&!1===s.base64;n&&n.binary!==void 0||(s.binary=!d),(t instanceof l&&t.uncompressedSize===0||s.dir||!t||t.length===0)&&(s.base64=!1,s.binary=!0,t=``,s.compression=`STORE`,i=`string`);var _=null;_=t instanceof l||t instanceof o?t:f.isNode&&f.isStream(t)?new p(e,t):a.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var v=new u(e,_,s);this.files[e]=v}var i=e(`./utf8`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=e(`./stream/StreamHelper`),c=e(`./defaults`),l=e(`./compressedObject`),u=e(`./zipObject`),d=e(`./generate`),f=e(`./nodejsUtils`),p=e(`./nodejs/NodejsStreamInputAdapter`),m=function(e){e.slice(-1)===`/`&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf(`/`);return 0<t?e.substring(0,t):``},h=function(e){return e.slice(-1)!==`/`&&(e+=`/`),e},g=function(e,t){return t=t===void 0?c.createFolders:t,e=h(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function _(e){return Object.prototype.toString.call(e)===`[object RegExp]`}t.exports={load:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},forEach:function(e){var t,n,r;for(t in this.files)r=this.files[t],(n=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(n,r)},filter:function(e){var t=[];return this.forEach(function(n,r){e(n,r)&&t.push(r)}),t},file:function(e,t,n){if(arguments.length!==1)return e=this.root+e,r.call(this,e,t,n),this;if(_(e)){var i=e;return this.filter(function(e,t){return!t.dir&&i.test(e)})}var a=this.files[this.root+e];return a&&!a.dir?a:null},folder:function(e){if(!e)return this;if(_(e))return this.filter(function(t,n){return n.dir&&e.test(t)});var t=this.root+e,n=g.call(this,t),r=this.clone();return r.root=n.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||=(e.slice(-1)!==`/`&&(e+=`/`),this.files[e]),t&&!t.dir)delete this.files[e];else for(var n=this.filter(function(t,n){return n.name.slice(0,e.length)===e}),r=0;r<n.length;r++)delete this.files[n[r].name];return this},generate:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},generateInternalStream:function(e){var t,n={};try{if((n=a.extend(e||{},{streamFiles:!1,compression:`STORE`,compressionOptions:null,type:``,platform:`DOS`,comment:null,mimeType:`application/zip`,encodeFileName:i.utf8encode})).type=n.type.toLowerCase(),n.compression=n.compression.toUpperCase(),n.type===`binarystring`&&(n.type=`string`),!n.type)throw Error(`No output type specified.`);a.checkSupport(n.type),n.platform!==`darwin`&&n.platform!==`freebsd`&&n.platform!==`linux`&&n.platform!==`sunos`||(n.platform=`UNIX`),n.platform===`win32`&&(n.platform=`DOS`);var r=n.comment||this.comment||``;t=d.generateWorker(this,n,r)}catch(e){(t=new o(`error`)).error(e)}return new s(t,n.type||`string`,n.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e||={}).type||(e.type=`nodebuffer`),this.generateInternalStream(e).toNodejsStream(t)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,n){t.exports=e(`stream`)},{stream:void 0}],17:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.length-4;0<=a;--a)if(this.data[a]===t&&this.data[a+1]===n&&this.data[a+2]===r&&this.data[a+3]===i)return a-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&n===a[1]&&r===a[2]&&i===a[3]},i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,n){var r=e(`../utils`);function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw Error(`End of data reached (data length = `+this.length+`, asked index = `+e+`). Corrupted zip ?`)},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,n=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)n=(n<<8)+this.byteAt(t);return this.index+=e,n},readString:function(e){return r.transformTo(`string`,this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,n){var r=e(`./Uint8ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,n){var r=e(`./ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return new Uint8Array;var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,n){var r=e(`../utils`),i=e(`../support`),a=e(`./ArrayReader`),o=e(`./StringReader`),s=e(`./NodeBufferReader`),c=e(`./Uint8ArrayReader`);t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),t!==`string`||i.uint8array?t===`nodebuffer`?new s(e):i.uint8array?new c(r.transformTo(`uint8array`,e)):new a(r.transformTo(`array`,e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,n){n.LOCAL_FILE_HEADER=`PK`,n.CENTRAL_FILE_HEADER=`PK`,n.CENTRAL_DIRECTORY_END=`PK`,n.ZIP64_CENTRAL_DIRECTORY_LOCATOR=`PK\x07`,n.ZIP64_CENTRAL_DIRECTORY_END=`PK`,n.DATA_DESCRIPTOR=`PK\x07\b`},{}],24:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../utils`);function a(e){r.call(this,`ConvertWorker to `+e),this.destType=e}i.inherits(a,r),a.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../crc32`);function a(){r.call(this,`Crc32Probe`),this.withStreamInfo(`crc32`,0)}e(`../utils`).inherits(a,r),a.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataLengthProbe for `+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(a,i),a.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataWorker`);var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type=``,this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case`string`:e=this.data.substring(this.index,t);break;case`uint8array`:e=this.data.subarray(this.index,t);break;case`array`:case`nodebuffer`:e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,n){function r(e){this.name=e||`default`,this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit(`data`,e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit(`end`),this.cleanUp(),this.isFinished=!0}catch(e){this.emit(`error`,e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit(`error`,e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var n=0;n<this._listeners[e].length;n++)this._listeners[e][n].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.end()}),e.on(`error`,function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e=`Worker `+this.name;return this.previous?this.previous+` -> `+e:e}},t.exports=r},{}],29:[function(e,t,n){var r=e(`../utils`),i=e(`./ConvertWorker`),a=e(`./GenericWorker`),o=e(`../base64`),s=e(`../support`),c=e(`../external`),l=null;if(s.nodestream)try{l=e(`../nodejs/NodejsStreamOutputAdapter`)}catch{}function u(e,t){return new c.Promise(function(n,i){var a=[],s=e._internalType,c=e._outputType,l=e._mimeType;e.on(`data`,function(e,n){a.push(e),t&&t(n)}).on(`error`,function(e){a=[],i(e)}).on(`end`,function(){try{n(function(e,t,n){switch(e){case`blob`:return r.newBlob(r.transformTo(`arraybuffer`,t),n);case`base64`:return o.encode(t);default:return r.transformTo(e,t)}}(c,function(e,t){var n,r=0,i=null,a=0;for(n=0;n<t.length;n++)a+=t[n].length;switch(e){case`string`:return t.join(``);case`array`:return Array.prototype.concat.apply([],t);case`uint8array`:for(i=new Uint8Array(a),n=0;n<t.length;n++)i.set(t[n],r),r+=t[n].length;return i;case`nodebuffer`:return Buffer.concat(t);default:throw Error(`concat : unsupported type '`+e+`'`)}}(s,a),l))}catch(e){i(e)}a=[]}).resume()})}function d(e,t,n){var o=t;switch(t){case`blob`:case`arraybuffer`:o=`uint8array`;break;case`base64`:o=`string`}try{this._internalType=o,this._outputType=t,this._mimeType=n,r.checkSupport(o),this._worker=e.pipe(new i(o)),e.lock()}catch(e){this._worker=new a(`error`),this._worker.error(e)}}d.prototype={accumulate:function(e){return u(this,e)},on:function(e,t){var n=this;return e===`data`?this._worker.on(e,function(e){t.call(n,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,n)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport(`nodestream`),this._outputType!==`nodebuffer`)throw Error(this._outputType+` is not supported by this method`);return new l(this,{objectMode:this._outputType!==`nodebuffer`},e)}},t.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<`u`&&typeof Uint8Array<`u`,n.nodebuffer=typeof Buffer<`u`,n.uint8array=typeof Uint8Array<`u`,typeof ArrayBuffer>`u`)n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:`application/zip`}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=i.getBlob(`application/zip`).size===0}catch{n.blob=!1}}}try{n.nodestream=!!e(`readable-stream`).Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,n){for(var r=e(`./utils`),i=e(`./support`),a=e(`./nodejsUtils`),o=e(`./stream/GenericWorker`),s=Array(256),c=0;c<256;c++)s[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;s[254]=s[254]=1;function l(){o.call(this,`utf-8 decode`),this.leftOver=null}function u(){o.call(this,`utf-8 encode`)}n.utf8encode=function(e){return i.nodebuffer?a.newBufferFrom(e,`utf-8`):function(e){var t,n,r,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=i.uint8array?new Uint8Array(c):Array(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t}(e)},n.utf8decode=function(e){return i.nodebuffer?r.transformTo(`nodebuffer`,e).toString(`utf-8`):function(e){var t,n,i,a,o=e.length,c=Array(2*o);for(t=n=0;t<o;)if((i=e[t++])<128)c[n++]=i;else if(4<(a=s[i]))c[n++]=65533,t+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&t<o;)i=i<<6|63&e[t++],a--;1<a?c[n++]=65533:i<65536?c[n++]=i:(i-=65536,c[n++]=55296|i>>10&1023,c[n++]=56320|1023&i)}return c.length!==n&&(c.subarray?c=c.subarray(0,n):c.length=n),r.applyFromCharCode(c)}(e=r.transformTo(i.uint8array?`uint8array`:`array`,e))},r.inherits(l,o),l.prototype.processChunk=function(e){var t=r.transformTo(i.uint8array?`uint8array`:`array`,e.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var a=t;(t=new Uint8Array(a.length+this.leftOver.length)).set(this.leftOver,0),t.set(a,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+s[e[n]]>t?n:t}(t),c=t;o!==t.length&&(i.uint8array?(c=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(c=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:n.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=l,r.inherits(u,o),u.prototype.processChunk=function(e){this.push({data:n.utf8encode(e.data),meta:e.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,n){var r=e(`./support`),i=e(`./base64`),a=e(`./nodejsUtils`),o=e(`./external`);function s(e){return e}function c(e,t){for(var n=0;n<e.length;++n)t[n]=255&e.charCodeAt(n);return t}e(`setimmediate`),n.newBlob=function(e,t){n.checkSupport(`blob`);try{return new Blob([e],{type:t})}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch{throw Error(`Bug : can't construct the Blob.`)}}};var l={stringifyByChunk:function(e,t,n){var r=[],i=0,a=e.length;if(a<=n)return String.fromCharCode.apply(null,e);for(;i<a;)t===`array`||t===`nodebuffer`?r.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+n,a)))):r.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+n,a)))),i+=n;return r.join(``)},stringifyByChar:function(e){for(var t=``,n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function u(e){var t=65536,r=n.getTypeOf(e),i=!0;if(r===`uint8array`?i=l.applyCanBeUsed.uint8array:r===`nodebuffer`&&(i=l.applyCanBeUsed.nodebuffer),i)for(;1<t;)try{return l.stringifyByChunk(e,r,t)}catch{t=Math.floor(t/2)}return l.stringifyByChar(e)}function d(e,t){for(var n=0;n<e.length;n++)t[n]=e[n];return t}n.applyFromCharCode=u;var f={};f.string={string:s,array:function(e){return c(e,Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,a.allocBuffer(e.length))}},f.array={string:u,array:s,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(e)}},f.arraybuffer={string:function(e){return u(new Uint8Array(e))},array:function(e){return d(new Uint8Array(e),Array(e.byteLength))},arraybuffer:s,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(new Uint8Array(e))}},f.uint8array={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:s,nodebuffer:function(e){return a.newBufferFrom(e)}},f.nodebuffer={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return d(e,new Uint8Array(e.length))},nodebuffer:s},n.transformTo=function(e,t){return t||=``,e?(n.checkSupport(e),f[n.getTypeOf(t)][e](t)):t},n.resolve=function(e){for(var t=e.split(`/`),n=[],r=0;r<t.length;r++){var i=t[r];i===`.`||i===``&&r!==0&&r!==t.length-1||(i===`..`?n.pop():n.push(i))}return n.join(`/`)},n.getTypeOf=function(e){return typeof e==`string`?`string`:Object.prototype.toString.call(e)===`[object Array]`?`array`:r.nodebuffer&&a.isBuffer(e)?`nodebuffer`:r.uint8array&&e instanceof Uint8Array?`uint8array`:r.arraybuffer&&e instanceof ArrayBuffer?`arraybuffer`:void 0},n.checkSupport=function(e){if(!r[e.toLowerCase()])throw Error(e+` is not supported by this platform`)},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(e){var t,n,r=``;for(n=0;n<(e||``).length;n++)r+=`\\x`+((t=e.charCodeAt(n))<16?`0`:``)+t.toString(16).toUpperCase();return r},n.delay=function(e,t,n){setImmediate(function(){e.apply(n||null,t||[])})},n.inherits=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.extend=function(){var e,t,n={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&n[t]===void 0&&(n[t]=arguments[e][t]);return n},n.prepareContent=function(e,t,a,s,l){return o.Promise.resolve(t).then(function(e){return r.blob&&(e instanceof Blob||[`[object File]`,`[object Blob]`].indexOf(Object.prototype.toString.call(e))!==-1)&&typeof FileReader<`u`?new o.Promise(function(t,n){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){n(e.target.error)},r.readAsArrayBuffer(e)}):e}).then(function(t){var u=n.getTypeOf(t);return u?(u===`arraybuffer`?t=n.transformTo(`uint8array`,t):u===`string`&&(l?t=i.decode(t):a&&!0!==s&&(t=function(e){return c(e,r.uint8array?new Uint8Array(e.length):Array(e.length))}(t))),t):o.Promise.reject(Error(`Can't read the data of '`+e+`'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./signature`),o=e(`./zipEntry`),s=e(`./support`);function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw Error(`Corrupted zip or bug: unexpected signature (`+i.pretty(t)+`, expected `+i.pretty(e)+`)`)}},isSignature:function(e,t){var n=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(n),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=s.uint8array?`uint8array`:`array`,n=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(n)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,n,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),n=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:n}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw Error(`Multi-volumes zip are not supported`)},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw Error(`Corrupted zip or bug: expected `+this.centralDirRecords+` records in central dir, got `+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?Error(`Corrupted zip: can't find end of central directory`):Error(`Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`);this.reader.setIndex(e);var t=e;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error(`Corrupted zip: can't find the ZIP64 end of central directory locator`);if(this.reader.setIndex(e),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var n=this.centralDirOffset+this.centralDirSize;this.zip64&&(n+=20,n+=12+this.zip64EndOfCentralSize);var r=t-n;if(0<r)this.isSignature(t,a.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw Error(`Corrupted zip: missing `+Math.abs(r)+` bytes.`)},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./compressedObject`),o=e(`./crc32`),s=e(`./utf8`),c=e(`./compressions`),l=e(`./support`);function u(e,t){this.options=e,this.loadOptions=t}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(e){var t,n;if(e.skip(22),this.fileNameLength=e.readInt(2),n=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw Error(`Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`);if((t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod))===null)throw Error(`Corrupted zip : compression `+i.pretty(this.compressionMethod)+` unknown (inner file : `+i.transformTo(`string`,this.fileName)+`)`);this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw Error(`Encrypted zip are not supported`);e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),e==0&&(this.dosPermissions=63&this.externalFileAttributes),e==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!==`/`||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,n,r,i=e.index+this.extraFieldsLength;for(this.extraFields||={};e.index+4<i;)t=e.readInt(2),n=e.readInt(2),r=e.readData(n),this.extraFields[t]={id:t,length:n,value:r};e.setIndex(i)},handleUTF8:function(){var e=l.uint8array?`uint8array`:`array`;if(this.useUTF8())this.fileNameStr=s.utf8decode(this.fileName),this.fileCommentStr=s.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(t!==null)this.fileNameStr=t;else{var n=i.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var r=this.findExtraFieldUnicodeComment();if(r!==null)this.fileCommentStr=r;else{var a=i.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(a)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileName)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileComment)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null}},t.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,n){function r(e,t,n){this.name=e,this.dir=n.dir,this.date=n.date,this.comment=n.comment,this.unixPermissions=n.unixPermissions,this.dosPermissions=n.dosPermissions,this._data=t,this._dataBinary=n.binary,this.options={compression:n.compression,compressionOptions:n.compressionOptions}}var i=e(`./stream/StreamHelper`),a=e(`./stream/DataWorker`),o=e(`./utf8`),s=e(`./compressedObject`),c=e(`./stream/GenericWorker`);r.prototype={internalStream:function(e){var t=null,n=`string`;try{if(!e)throw Error(`No output type specified.`);var r=(n=e.toLowerCase())===`string`||n===`text`;n!==`binarystring`&&n!==`text`||(n=`string`),t=this._decompressWorker();var a=!this._dataBinary;a&&!r&&(t=t.pipe(new o.Utf8EncodeWorker)),!a&&r&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(e){(t=new c(`error`)).error(e)}return new i(t,n,``)},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||`nodebuffer`).toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof s&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var n=this._decompressWorker();return this._dataBinary||(n=n.pipe(new o.Utf8EncodeWorker)),s.createWorkerFrom(n,e,t)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var l=[`asText`,`asBinary`,`asNodeBuffer`,`asUint8Array`,`asArrayBuffer`],u=function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},d=0;d<l.length;d++)r.prototype[l[d]]=u;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,o=new i(u),s=e.document.createTextNode(``);o.observe(s,{characterData:!0}),n=function(){s.data=a=++a%2}}else if(e.setImmediate||e.MessageChannel===void 0)n=`document`in e&&`onreadystatechange`in e.document.createElement(`script`)?function(){var t=e.document.createElement(`script`);t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var c=new e.MessageChannel;c.port1.onmessage=u,n=function(){c.port2.postMessage(0)}}var l=[];function u(){var e,t;r=!0;for(var n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}r=!1}t.exports=function(e){l.push(e)!==1||r||n()}}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}],37:[function(e,t,n){var r=e(`immediate`);function i(){}var a={},o=[`REJECTED`],s=[`FULFILLED`],c=[`PENDING`];function l(e){if(typeof e!=`function`)throw TypeError(`resolver must be a function`);this.state=c,this.queue=[],this.outcome=void 0,e!==i&&p(this,e)}function u(e,t,n){this.promise=e,typeof t==`function`&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof n==`function`&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function d(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return a.reject(e,t)}r===e?a.reject(e,TypeError(`Cannot resolve promise with itself`)):a.resolve(e,r)})}function f(e){var t=e&&e.then;if(e&&(typeof e==`object`||typeof e==`function`)&&typeof t==`function`)return function(){t.apply(e,arguments)}}function p(e,t){var n=!1;function r(t){n||(n=!0,a.reject(e,t))}function i(t){n||(n=!0,a.resolve(e,t))}var o=m(function(){t(i,r)});o.status===`error`&&r(o.value)}function m(e,t){var n={};try{n.value=e(t),n.status=`success`}catch(e){n.status=`error`,n.value=e}return n}(t.exports=l).prototype.finally=function(e){if(typeof e!=`function`)return this;var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if(typeof e!=`function`&&this.state===s||typeof t!=`function`&&this.state===o)return this;var n=new this.constructor(i);return this.state===c?this.queue.push(new u(n,e,t)):d(n,this.state===s?e:t,this.outcome),n},u.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){d(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){a.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){d(this.promise,this.onRejected,e)},a.resolve=function(e,t){var n=m(f,t);if(n.status===`error`)return a.reject(e,n.value);var r=n.value;if(r)p(e,r);else{e.state=s,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},a.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:a.resolve(new this(i),e)},l.reject=function(e){var t=new this(i);return a.reject(t,e)},l.all=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=Array(n),s=0,c=-1,l=new this(i);++c<n;)u(e[c],c);return l;function u(e,i){t.resolve(e).then(function(e){o[i]=e,++s!==n||r||(r=!0,a.resolve(l,o))},function(e){r||(r=!0,a.reject(l,e))})}},l.race=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=-1,s=new this(i);++o<n;)c=e[o],t.resolve(c).then(function(e){r||(r=!0,a.resolve(s,e))},function(e){r||(r=!0,a.reject(s,e))});var c;return s}},{immediate:36}],38:[function(e,t,n){var r={};(0,e(`./lib/utils/common`).assign)(r,e(`./lib/deflate`),e(`./lib/inflate`),e(`./lib/zlib/constants`)),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,n){var r=e(`./zlib/deflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/messages`),s=e(`./zlib/zstream`),c=Object.prototype.toString,l=0,u=-1,d=0,f=8;function p(e){if(!(this instanceof p))return new p(e);this.options=i.assign({level:u,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:``},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==l)throw Error(o[n]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m;if(m=typeof t.dictionary==`string`?a.string2buf(t.dictionary):c.call(t.dictionary)===`[object ArrayBuffer]`?new Uint8Array(t.dictionary):t.dictionary,(n=r.deflateSetDictionary(this.strm,m))!==l)throw Error(o[n]);this._dict_set=!0}}function m(e,t){var n=new p(t);if(n.push(e,!0),n.err)throw n.msg||o[n.err];return n.result}p.prototype.push=function(e,t){var n,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,typeof e==`string`?s.input=a.string2buf(e):c.call(e)===`[object ArrayBuffer]`?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(s.avail_out===0&&(s.output=new i.Buf8(u),s.next_out=0,s.avail_out=u),(n=r.deflate(s,o))!==1&&n!==l)return this.onEnd(n),!(this.ended=!0);s.avail_out!==0&&(s.avail_in!==0||o!==4&&o!==2)||(this.options.to===`string`?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((0<s.avail_in||s.avail_out===0)&&n!==1);return o===4?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===l):o!==2||(this.onEnd(l),!(s.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Deflate=p,n.deflate=m,n.deflateRaw=function(e,t){return(t||={}).raw=!0,m(e,t)},n.gzip=function(e,t){return(t||={}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,n){var r=e(`./zlib/inflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/constants`),s=e(`./zlib/messages`),c=e(`./zlib/zstream`),l=e(`./zlib/gzheader`),u=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:``},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,t.windowBits);if(n!==o.Z_OK)throw Error(s[n]);this.header=new l,r.inflateGetHeader(this.strm,this.header)}function f(e,t){var n=new d(t);if(n.push(e,!0),n.err)throw n.msg||s[n.err];return n.result}d.prototype.push=function(e,t){var n,s,c,l,d,f,p=this.strm,m=this.options.chunkSize,h=this.options.dictionary,g=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,typeof e==`string`?p.input=a.binstring2buf(e):u.call(e)===`[object ArrayBuffer]`?p.input=new Uint8Array(e):p.input=e,p.next_in=0,p.avail_in=p.input.length;do{if(p.avail_out===0&&(p.output=new i.Buf8(m),p.next_out=0,p.avail_out=m),(n=r.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&h&&(f=typeof h==`string`?a.string2buf(h):u.call(h)===`[object ArrayBuffer]`?new Uint8Array(h):h,n=r.inflateSetDictionary(this.strm,f)),n===o.Z_BUF_ERROR&&!0===g&&(n=o.Z_OK,g=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),!(this.ended=!0);p.next_out&&(p.avail_out!==0&&n!==o.Z_STREAM_END&&(p.avail_in!==0||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||(this.options.to===`string`?(c=a.utf8border(p.output,p.next_out),l=p.next_out-c,d=a.buf2string(p.output,c),p.next_out=l,p.avail_out=m-l,l&&i.arraySet(p.output,p.output,c,l,0),this.onData(d)):this.onData(i.shrinkBuf(p.output,p.next_out)))),p.avail_in===0&&p.avail_out===0&&(g=!0)}while((0<p.avail_in||p.avail_out===0)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(p.avail_out=0))},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===o.Z_OK&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=d,n.inflate=f,n.inflateRaw=function(e,t){return(t||={}).raw=!0,f(e,t)},n.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Int32Array<`u`;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if(typeof n!=`object`)throw TypeError(n+`must be non-object`);for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){var t,n,r,i,a,o;for(t=r=0,n=e.length;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),t=i=0,n=e.length;t<n;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,t,n){var r=e(`./common`),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new r.Buf8(256),s=0;s<256;s++)o[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function c(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n=``,o=0;o<t;o++)n+=String.fromCharCode(e[o]);return n}o[254]=o[254]=1,n.string2buf=function(e){var t,n,i,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return c(e,e.length)},n.binstring2buf=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,r,i,a,s=t||e.length,l=Array(2*s);for(n=r=0;n<s;)if((i=e[n++])<128)l[r++]=i;else if(4<(a=o[i]))l[r++]=65533,n+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&n<s;)i=i<<6|63&e[n++],a--;1<a?l[r++]=65533:i<65536?l[r++]=i:(i-=65536,l[r++]=55296|i>>10&1023,l[r++]=56320|1023&i)}return c(l,r)},n.utf8border=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+o[e[n]]>t?n:t}},{"./common":41}],43:[function(e,t,n){t.exports=function(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;n!==0;){for(n-=o=2e3<n?2e3:n;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16|0}},{}],44:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,n){var r=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t,n,i){var a=r,o=i+n;e^=-1;for(var s=i;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}},{}],46:[function(e,t,n){var r,i=e(`../utils/common`),a=e(`./trees`),o=e(`./adler32`),s=e(`./crc32`),c=e(`./messages`),l=0,u=4,d=0,f=-2,p=-1,m=4,h=2,g=8,_=9,v=286,y=30,b=19,x=2*v+1,S=15,C=3,w=258,T=w+C+1,E=42,D=113,O=1,k=2,A=3,j=4;function M(e,t){return e.msg=c[t],t}function N(e){return(e<<1)-(4<e?9:0)}function P(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(i.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))}function I(e,t){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function L(e,t){e.pending_buf[e.pending++]=t}function R(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function z(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-T?e.strstart-(e.w_size-T):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+w,p=l[a+o-1],m=l[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do if(l[(n=t)+o]===m&&l[n+o-1]===p&&l[n]===l[a]&&l[++n]===l[a+1]){a+=2,n++;do;while(l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&a<f);if(r=w-(f-a),a=f-w,o<r){if(e.match_start=t,s<=(o=r))break;p=l[a+o-1],m=l[a+o]}}while((t=d[t&u])>c&&--i!=0);return o<=e.lookahead?o:e.lookahead}function B(e){var t,n,r,a,c,l,u,d,f,p,m=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-T)){for(i.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=n=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--n;);for(t=n=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--n;);a+=m}if(e.strm.avail_in===0)break;if(l=e.strm,u=e.window,d=e.strstart+e.lookahead,f=a,p=void 0,p=l.avail_in,f<p&&(p=f),n=p===0?0:(l.avail_in-=p,i.arraySet(u,l.input,l.next_in,p,d),l.state.wrap===1?l.adler=o(l.adler,u,p,d):l.state.wrap===2&&(l.adler=s(l.adler,u,p,d)),l.next_in+=p,l.total_in+=p,p),e.lookahead+=n,e.lookahead+e.insert>=C)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+C-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<C)););}while(e.lookahead<T&&e.strm.avail_in!==0)}function ee(e,t){for(var n,r;;){if(e.lookahead<T){if(B(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),n!==0&&e.strstart-n<=e.w_size-T&&(e.match_length=z(e,n)),e.match_length>=C)if(r=a._tr_tally(e,e.strstart-e.match_start,e.match_length-C),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=C){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function V(e,t){for(var n,r,i;;){if(e.lookahead<T){if(B(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=C-1,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-T&&(e.match_length=z(e,n),e.match_length<=5&&(e.strategy===1||e.match_length===C&&4096<e.strstart-e.match_start)&&(e.match_length=C-1)),e.prev_length>=C&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-C,r=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-C),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=C-1,e.strstart++,r&&(I(e,!1),e.strm.avail_out===0))return O}else if(e.match_available){if((r=a._tr_tally(e,0,e.window[e.strstart-1]))&&I(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return O}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&=(r=a._tr_tally(e,0,e.window[e.strstart-1]),0),e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function H(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function te(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*x),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*b+1)),P(this.dyn_ltree),P(this.dyn_dtree),P(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(S+1),this.heap=new i.Buf16(2*v+1),P(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),P(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ne(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=h,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?E:D,e.adler=t.wrap===2?0:1,t.last_flush=l,a._tr_init(t),d):M(e,f)}function U(e){var t=ne(e);return t===d&&function(e){e.window_size=2*e.w_size,P(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=C-1,e.match_available=0,e.ins_h=0}(e.state),t}function W(e,t,n,r,a,o){if(!e)return f;var s=1;if(t===p&&(t=6),r<0?(s=0,r=-r):15<r&&(s=2,r-=16),a<1||_<a||n!==g||r<8||15<r||t<0||9<t||o<0||m<o)return M(e,f);r===8&&(r=9);var c=new te;return(e.state=c).strm=e,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=a+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+C-1)/C),c.window=new i.Buf8(2*c.w_size),c.head=new i.Buf16(c.hash_size),c.prev=new i.Buf16(c.w_size),c.lit_bufsize=1<<a+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new i.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=o,c.method=n,U(e)}r=[new H(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(B(e),e.lookahead===0&&t===l)return O;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,I(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-T&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):(e.strstart>e.block_start&&(I(e,!1),e.strm.avail_out),O)}),new H(4,4,8,4,ee),new H(4,5,16,8,ee),new H(4,6,32,32,ee),new H(4,4,16,16,V),new H(8,16,32,32,V),new H(8,16,128,128,V),new H(8,32,128,256,V),new H(32,128,258,1024,V),new H(32,258,258,4096,V)],n.deflateInit=function(e,t){return W(e,t,g,15,8,0)},n.deflateInit2=W,n.deflateReset=U,n.deflateResetKeep=ne,n.deflateSetHeader=function(e,t){return e&&e.state&&e.state.wrap===2?(e.state.gzhead=t,d):f},n.deflate=function(e,t){var n,i,o,c;if(!e||!e.state||5<t||t<0)return e?M(e,f):f;if(i=e.state,!e.output||!e.input&&e.avail_in!==0||i.status===666&&t!==u)return M(e,e.avail_out===0?-5:f);if(i.strm=e,n=i.last_flush,i.last_flush=t,i.status===E)if(i.wrap===2)e.adler=0,L(i,31),L(i,139),L(i,8),i.gzhead?(L(i,+!!i.gzhead.text+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),L(i,255&i.gzhead.time),L(i,i.gzhead.time>>8&255),L(i,i.gzhead.time>>16&255),L(i,i.gzhead.time>>24&255),L(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),L(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(L(i,255&i.gzhead.extra.length),L(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=s(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(L(i,0),L(i,0),L(i,0),L(i,0),L(i,0),L(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),L(i,3),i.status=D);else{var p=g+(i.w_bits-8<<4)<<8;p|=(2<=i.strategy||i.level<2?0:i.level<6?1:i.level===6?2:3)<<6,i.strstart!==0&&(p|=32),p+=31-p%31,i.status=D,R(i,p),i.strstart!==0&&(R(i,e.adler>>>16),R(i,65535&e.adler)),e.adler=1}if(i.status===69)if(i.gzhead.extra){for(o=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending!==i.pending_buf_size));)L(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(i.status===73)if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,L(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.gzindex=0,i.status=91)}else i.status=91;if(i.status===91)if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,L(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.status=103)}else i.status=103;if(i.status===103&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&F(e),i.pending+2<=i.pending_buf_size&&(L(i,255&e.adler),L(i,e.adler>>8&255),e.adler=0,i.status=D)):i.status=D),i.pending!==0){if(F(e),e.avail_out===0)return i.last_flush=-1,d}else if(e.avail_in===0&&N(t)<=N(n)&&t!==u)return M(e,-5);if(i.status===666&&e.avail_in!==0)return M(e,-5);if(e.avail_in!==0||i.lookahead!==0||t!==l&&i.status!==666){var m=i.strategy===2?function(e,t){for(var n;;){if(e.lookahead===0&&(B(e),e.lookahead===0)){if(t===l)return O;break}if(e.match_length=0,n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):i.strategy===3?function(e,t){for(var n,r,i,o,s=e.window;;){if(e.lookahead<=w){if(B(e),e.lookahead<=w&&t===l)return O;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=C&&0<e.strstart&&(r=s[i=e.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){o=e.strstart+w;do;while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);e.match_length=w-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=C?(n=a._tr_tally(e,1,e.match_length-C),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):r[i.level].func(i,t);if(m!==A&&m!==j||(i.status=666),m===O||m===A)return e.avail_out===0&&(i.last_flush=-1),d;if(m===k&&(t===1?a._tr_align(i):t!==5&&(a._tr_stored_block(i,0,0,!1),t===3&&(P(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),F(e),e.avail_out===0))return i.last_flush=-1,d}return t===u?i.wrap<=0?1:(i.wrap===2?(L(i,255&e.adler),L(i,e.adler>>8&255),L(i,e.adler>>16&255),L(i,e.adler>>24&255),L(i,255&e.total_in),L(i,e.total_in>>8&255),L(i,e.total_in>>16&255),L(i,e.total_in>>24&255)):(R(i,e.adler>>>16),R(i,65535&e.adler)),F(e),0<i.wrap&&(i.wrap=-i.wrap),i.pending===0?1:d):d},n.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==E&&t!==69&&t!==73&&t!==91&&t!==103&&t!==D&&t!==666?M(e,f):(e.state=null,t===D?M(e,-3):d):f},n.deflateSetDictionary=function(e,t){var n,r,a,s,c,l,u,p,m=t.length;if(!e||!e.state||(s=(n=e.state).wrap)===2||s===1&&n.status!==E||n.lookahead)return f;for(s===1&&(e.adler=o(e.adler,t,m,0)),n.wrap=0,m>=n.w_size&&(s===0&&(P(n.head),n.strstart=0,n.block_start=0,n.insert=0),p=new i.Buf8(n.w_size),i.arraySet(p,t,m-n.w_size,n.w_size,0),t=p,m=n.w_size),c=e.avail_in,l=e.next_in,u=e.input,e.avail_in=m,e.next_in=0,e.input=t,B(n);n.lookahead>=C;){for(r=n.strstart,a=n.lookahead-(C-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+C-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--a;);n.strstart=r,n.lookahead=C-1,B(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=C-1,n.match_available=0,e.next_in=l,e.input=u,e.avail_in=c,n.wrap=s,d},n.deflateInfo=`pako deflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=``,this.comment=``,this.hcrc=0,this.done=!1}},{}],48:[function(e,t,n){t.exports=function(e,t){var n=e.state,r=e.next_in,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e.input,E;i=r+(e.avail_in-5),a=e.next_out,E=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),c=n.dmax,l=n.wsize,u=n.whave,d=n.wnext,f=n.window,p=n.hold,m=n.bits,h=n.lencode,g=n.distcode,_=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=h[p&_];t:for(;;){if(p>>>=b=y>>>24,m-=b,(b=y>>>16&255)==0)E[a++]=65535&y;else{if(!(16&b)){if(!(64&b)){y=h[(65535&y)+(p&(1<<b)-1)];continue t}if(32&b){n.mode=12;break e}e.msg=`invalid literal/length code`,n.mode=30;break e}x=65535&y,(b&=15)&&(m<b&&(p+=T[r++]<<m,m+=8),x+=p&(1<<b)-1,p>>>=b,m-=b),m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=g[p&v];r:for(;;){if(p>>>=b=y>>>24,m-=b,!(16&(b=y>>>16&255))){if(!(64&b)){y=g[(65535&y)+(p&(1<<b)-1)];continue r}e.msg=`invalid distance code`,n.mode=30;break e}if(S=65535&y,m<(b&=15)&&(p+=T[r++]<<m,(m+=8)<b&&(p+=T[r++]<<m,m+=8)),c<(S+=p&(1<<b)-1)){e.msg=`invalid distance too far back`,n.mode=30;break e}if(p>>>=b,m-=b,(b=a-o)<S){if(u<(b=S-b)&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break e}if(w=f,(C=0)===d){if(C+=l-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}}else if(d<b){if(C+=l+d-b,(b-=d)<x){for(x-=b;E[a++]=f[C++],--b;);if(C=0,d<x){for(x-=b=d;E[a++]=f[C++],--b;);C=a-S,w=E}}}else if(C+=d-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}for(;2<x;)E[a++]=w[C++],E[a++]=w[C++],E[a++]=w[C++],x-=3;x&&(E[a++]=w[C++],1<x&&(E[a++]=w[C++]))}else{for(C=a-S;E[a++]=E[C++],E[a++]=E[C++],E[a++]=E[C++],2<(x-=3););x&&(E[a++]=E[C++],1<x&&(E[a++]=E[C++]))}break}}break}}while(r<i&&a<s);r-=x=m>>3,p&=(1<<(m-=x<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=p,n.bits=m}},{}],49:[function(e,t,n){var r=e(`../utils/common`),i=e(`./adler32`),a=e(`./crc32`),o=e(`./inffast`),s=e(`./inftrees`),c=1,l=2,u=0,d=-2,f=1,p=852,m=592;function h(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg=``,t.wrap&&(e.adler=1&t.wrap),t.mode=f,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(p),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,u):d}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,_(e)):d}function y(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?d:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,v(e))):d}function b(e,t){var n,r;return e?(r=new g,(e.state=r).window=null,(n=y(e,t))!==u&&(e.state=null),n):d}var x,S,C=!0;function w(e){if(C){var t;for(x=new r.Buf32(512),S=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(c,e.lens,0,288,x,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(l,e.lens,0,32,S,0,e.work,{bits:5}),C=!1}e.lencode=x,e.lenbits=9,e.distcode=S,e.distbits=5}function T(e,t,n,i){var a,o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i<(a=o.wsize-o.wnext)&&(a=i),r.arraySet(o.window,t,n-i,a,o.wnext),(i-=a)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}n.inflateReset=v,n.inflateReset2=y,n.inflateResetKeep=_,n.inflateInit=function(e){return b(e,15)},n.inflateInit2=b,n.inflate=function(e,t){var n,p,m,g,_,v,y,b,x,S,C,E,D,O,k,A,j,M,N,P,F,I,L,R,z=0,B=new r.Buf8(4),ee=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return d;(n=e.state).mode===12&&(n.mode=13),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,S=v,C=y,I=u;e:for(;;)switch(n.mode){case f:if(n.wrap===0){n.mode=13;break}for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(2&n.wrap&&b===35615){B[n.check=0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0),x=b=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg=`incorrect header check`,n.mode=30;break}if((15&b)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(x-=4,F=8+(15&(b>>>=4)),n.wbits===0)n.wbits=F;else if(F>n.wbits){e.msg=`invalid window size`,n.mode=30;break}n.dmax=1<<F,e.adler=n.check=1,n.mode=512&b?10:12,x=b=0;break;case 2:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.flags=b,(255&n.flags)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(57344&n.flags){e.msg=`unknown header flags set`,n.mode=30;break}n.head&&(n.head.text=b>>8&1),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0,n.mode=3;case 3:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.time=b),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,B[2]=b>>>16&255,B[3]=b>>>24&255,n.check=a(n.check,B,4,0)),x=b=0,n.mode=4;case 4:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.xflags=255&b,n.head.os=b>>8),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0,n.mode=5;case 5:if(1024&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length=b,n.head&&(n.head.extra_len=b),512&n.flags&&(B[0]=255&b,B[1]=b>>>8&255,n.check=a(n.check,B,2,0)),x=b=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(v<(E=n.length)&&(E=v),E&&(n.head&&(F=n.head.extra_len-n.length,n.head.extra||(n.head.extra=Array(n.head.extra_len)),r.arraySet(n.head.extra,p,g,E,F)),512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,n.length-=E),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(v===0)break e;for(E=0;F=p[g+E++],n.head&&F&&n.length<65536&&(n.head.name+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(v===0)break e;for(E=0;F=p[g+E++],n.head&&F&&n.length<65536&&(n.head.comment+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(65535&n.check)){e.msg=`header crc mismatch`,n.mode=30;break}x=b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}e.adler=n.check=h(b),x=b=0,n.mode=11;case 11:if(n.havedict===0)return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,2;e.adler=n.check=1,n.mode=12;case 12:if(t===5||t===6)break e;case 13:if(n.last){b>>>=7&x,x-=7&x,n.mode=27;break}for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}switch(n.last=1&b,--x,3&(b>>>=1)){case 0:n.mode=14;break;case 1:if(w(n),n.mode=20,t!==6)break;b>>>=2,x-=2;break e;case 2:n.mode=17;break;case 3:e.msg=`invalid block type`,n.mode=30}b>>>=2,x-=2;break;case 14:for(b>>>=7&x,x-=7&x;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if((65535&b)!=(b>>>16^65535)){e.msg=`invalid stored block lengths`,n.mode=30;break}if(n.length=65535&b,x=b=0,n.mode=15,t===6)break e;case 15:n.mode=16;case 16:if(E=n.length){if(v<E&&(E=v),y<E&&(E=y),E===0)break e;r.arraySet(m,p,g,E,_),v-=E,g+=E,y-=E,_+=E,n.length-=E;break}n.mode=12;break;case 17:for(;x<14;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.nlen=257+(31&b),b>>>=5,x-=5,n.ndist=1+(31&b),b>>>=5,x-=5,n.ncode=4+(15&b),b>>>=4,x-=4,286<n.nlen||30<n.ndist){e.msg=`too many length or distance symbols`,n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.lens[ee[n.have++]]=7&b,b>>>=3,x-=3}for(;n.have<19;)n.lens[ee[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,L={bits:n.lenbits},I=s(0,n.lens,0,19,n.lencode,0,n.work,L),n.lenbits=L.bits,I){e.msg=`invalid code lengths set`,n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(z=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(j<16)b>>>=k,x-=k,n.lens[n.have++]=j;else{if(j===16){for(R=k+2;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b>>>=k,x-=k,n.have===0){e.msg=`invalid bit length repeat`,n.mode=30;break}F=n.lens[n.have-1],E=3+(3&b),b>>>=2,x-=2}else if(j===17){for(R=k+3;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=3+(7&(b>>>=k)),b>>>=3,x-=3}else{for(R=k+7;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=11+(127&(b>>>=k)),b>>>=7,x-=7}if(n.have+E>n.nlen+n.ndist){e.msg=`invalid bit length repeat`,n.mode=30;break}for(;E--;)n.lens[n.have++]=F}}if(n.mode===30)break;if(n.lens[256]===0){e.msg=`invalid code -- missing end-of-block`,n.mode=30;break}if(n.lenbits=9,L={bits:n.lenbits},I=s(c,n.lens,0,n.nlen,n.lencode,0,n.work,L),n.lenbits=L.bits,I){e.msg=`invalid literal/lengths set`,n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,L={bits:n.distbits},I=s(l,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,L),n.distbits=L.bits,I){e.msg=`invalid distances set`,n.mode=30;break}if(n.mode=20,t===6)break e;case 20:n.mode=21;case 21:if(6<=v&&258<=y){e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,o(e,C),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,n.mode===12&&(n.back=-1);break}for(n.back=0;A=(z=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(A&&!(240&A)){for(M=k,N=A,P=j;A=(z=n.lencode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&z,!(M+(k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,n.length=j,A===0){n.mode=26;break}if(32&A){n.back=-1,n.mode=12;break}if(64&A){e.msg=`invalid literal/length code`,n.mode=30;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(R=n.extra;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(z=n.distcode[b&(1<<n.distbits)-1])>>>16&255,j=65535&z,!((k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(!(240&A)){for(M=k,N=A,P=j;A=(z=n.distcode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&z,!(M+(k=z>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,64&A){e.msg=`invalid distance code`,n.mode=30;break}n.offset=j,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(R=n.extra;x<R;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg=`invalid distance too far back`,n.mode=30;break}n.mode=25;case 25:if(y===0)break e;if(E=C-y,n.offset>E){if((E=n.offset-E)>n.whave&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break}D=E>n.wnext?(E-=n.wnext,n.wsize-E):n.wnext-E,E>n.length&&(E=n.length),O=n.window}else O=m,D=_-n.offset,E=n.length;for(y<E&&(E=y),y-=E,n.length-=E;m[_++]=O[D++],--E;);n.length===0&&(n.mode=21);break;case 26:if(y===0)break e;m[_++]=n.length,y--,n.mode=21;break;case 27:if(n.wrap){for(;x<32;){if(v===0)break e;v--,b|=p[g++]<<x,x+=8}if(C-=y,e.total_out+=C,n.total+=C,C&&(e.adler=n.check=n.flags?a(n.check,m,C,_-C):i(n.check,m,C,_-C)),C=y,(n.flags?b:h(b))!==n.check){e.msg=`incorrect data check`,n.mode=30;break}x=b=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(4294967295&n.total)){e.msg=`incorrect length check`,n.mode=30;break}x=b=0}n.mode=29;case 29:I=1;break e;case 30:I=-3;break e;case 31:return-4;case 32:default:return d}return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,(n.wsize||C!==e.avail_out&&n.mode<30&&(n.mode<27||t!==4))&&T(e,e.output,e.next_out,C-e.avail_out)?(n.mode=31,-4):(S-=e.avail_in,C-=e.avail_out,e.total_in+=S,e.total_out+=C,n.total+=C,n.wrap&&C&&(e.adler=n.check=n.flags?a(n.check,m,C,e.next_out-C):i(n.check,m,C,e.next_out-C)),e.data_type=n.bits+(n.last?64:0)+(n.mode===12?128:0)+(n.mode===20||n.mode===15?256:0),(S==0&&C===0||t===4)&&I===u&&(I=-5),I)},n.inflateEnd=function(e){if(!e||!e.state)return d;var t=e.state;return t.window&&=null,e.state=null,u},n.inflateGetHeader=function(e,t){var n;return e&&e.state&&2&(n=e.state).wrap?((n.head=t).done=!1,u):d},n.inflateSetDictionary=function(e,t){var n,r=t.length;return e&&e.state?(n=e.state).wrap!==0&&n.mode!==11?d:n.mode===11&&i(1,t,r,0)!==n.check?-3:T(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):d},n.inflateInfo=`pako inflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,n){var r=e(`../utils/common`),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,c,l,u,d,f){var p,m,h,g,_,v,y,b,x,S=f.bits,C=0,w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,M=0,N=null,P=0,F=new r.Buf16(16),I=new r.Buf16(16),L=null,R=0;for(C=0;C<=15;C++)F[C]=0;for(w=0;w<c;w++)F[t[n+w]]++;for(D=S,E=15;1<=E&&F[E]===0;E--);if(E<D&&(D=E),E===0)return l[u++]=20971520,l[u++]=20971520,f.bits=1,0;for(T=1;T<E&&F[T]===0;T++);for(D<T&&(D=T),C=A=1;C<=15;C++)if(A<<=1,(A-=F[C])<0)return-1;if(0<A&&(e===0||E!==1))return-1;for(I[1]=0,C=1;C<15;C++)I[C+1]=I[C]+F[C];for(w=0;w<c;w++)t[n+w]!==0&&(d[I[t[n+w]]++]=w);if(v=e===0?(N=L=d,19):e===1?(N=i,P-=257,L=a,R-=257,256):(N=o,L=s,-1),C=T,_=u,k=w=M=0,h=-1,g=(j=1<<(O=D))-1,e===1&&852<j||e===2&&592<j)return 1;for(;;){for(y=C-k,x=d[w]<v?(b=0,d[w]):d[w]>v?(b=L[R+d[w]],N[P+d[w]]):(b=96,0),p=1<<C-k,T=m=1<<O;l[_+(M>>k)+(m-=p)]=y<<24|b<<16|x|0,m!==0;);for(p=1<<C-1;M&p;)p>>=1;if(p===0?M=0:(M&=p-1,M+=p),w++,--F[C]==0){if(C===E)break;C=t[n+d[w]]}if(D<C&&(M&g)!==h){for(k===0&&(k=D),_+=T,A=1<<(O=C-k);O+k<E&&!((A-=F[O+k])<=0);)O++,A<<=1;if(j+=1<<O,e===1&&852<j||e===2&&592<j)return 1;l[h=M&g]=D<<24|O<<16|_-u|0}}return M!==0&&(l[_+M]=C-k<<24|4194304),f.bits=D,0}},{"../utils/common":41}],51:[function(e,t,n){t.exports={2:`need dictionary`,1:`stream end`,0:``,"-1":`file error`,"-2":`stream error`,"-3":`data error`,"-4":`insufficient memory`,"-5":`buffer error`,"-6":`incompatible version`}},{}],52:[function(e,t,n){var r=e(`../utils/common`),i=0,a=1;function o(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,c=29,l=256,u=l+1+c,d=30,f=19,p=2*u+1,m=15,h=16,g=7,_=256,v=16,y=17,b=18,x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=Array(2*(u+2));o(T);var E=Array(2*d);o(E);var D=Array(512);o(D);var O=Array(256);o(O);var k=Array(c);o(k);var A,j,M,N=Array(d);function P(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function I(e){return e<256?D[e]:D[256+(e>>>7)]}function L(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function R(e,t,n){e.bi_valid>h-n?(e.bi_buf|=t<<e.bi_valid&65535,L(e,e.bi_buf),e.bi_buf=t>>h-e.bi_valid,e.bi_valid+=n-h):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function z(e,t,n){R(e,n[2*t],n[2*t+1])}function B(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function ee(e,t,n){var r,i,a=Array(m+1),o=0;for(r=1;r<=m;r++)a[r]=o=o+n[r-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];s!==0&&(e[2*i]=B(a[s]++,s))}}function V(e){var t;for(t=0;t<u;t++)e.dyn_ltree[2*t]=0;for(t=0;t<d;t++)e.dyn_dtree[2*t]=0;for(t=0;t<f;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*_]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function H(e){8<e.bi_valid?L(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function te(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function ne(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&te(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!te(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function U(e,t,n){var r,i,a,o,s=0;if(e.last_lit!==0)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,r===0?z(e,i,t):(z(e,(a=O[i])+l+1,t),(o=x[a])!==0&&R(e,i-=k[a],o),z(e,a=I(--r),n),(o=S[a])!==0&&R(e,r-=N[a],o)),s<e.last_lit;);z(e,_,t)}function W(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=p,n=0;n<c;n++)a[2*n]===0?a[2*n+1]=0:(e.heap[++e.heap_len]=l=n,e.depth[n]=0);for(;e.heap_len<2;)a[2*(i=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=l,n=e.heap_len>>1;1<=n;n--)ne(e,a,n);for(i=c;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],ne(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,ne(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,a,o,s,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,f=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,g=t.stat_desc.max_length,_=0;for(a=0;a<=m;a++)e.bl_count[a]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<p;n++)g<(a=c[2*c[2*(r=e.heap[n])+1]+1]+1)&&(a=g,_++),c[2*r+1]=a,l<r||(e.bl_count[a]++,o=0,h<=r&&(o=f[r-h]),s=c[2*r],e.opt_len+=s*(a+o),d&&(e.static_len+=s*(u[2*r+1]+o)));if(_!==0){do{for(a=g-1;e.bl_count[a]===0;)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[g]--,_-=2}while(0<_);for(a=g;a!==0;a--)for(r=e.bl_count[a];r!==0;)l<(i=e.heap[--n])||(c[2*i+1]!==a&&(e.opt_len+=(a-c[2*i+1])*c[2*i],c[2*i+1]=a),r--)}}(e,t),ee(a,l,e.bl_count)}function re(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<c&&i===o||(s<l?e.bl_tree[2*i]+=s:i===0?s<=10?e.bl_tree[2*y]++:e.bl_tree[2*b]++:(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*v]++),a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4))}function ie(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<c&&i===o)){if(s<l)for(;z(e,i,e.bl_tree),--s!=0;);else i===0?s<=10?(z(e,y,e.bl_tree),R(e,s-3,3)):(z(e,b,e.bl_tree),R(e,s-11,7)):(i!==a&&(z(e,i,e.bl_tree),s--),z(e,v,e.bl_tree),R(e,s-3,2));a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4)}}o(N);var ae=!1;function G(e,t,n,i){R(e,(s<<1)+ +!!i,3),function(e,t,n,i){H(e),i&&(L(e,n),L(e,~n)),r.arraySet(e.pending_buf,e.window,t,n,e.pending),e.pending+=n}(e,t,n,!0)}n._tr_init=function(e){ae||=(function(){var e,t,n,r,i,a=Array(m+1);for(r=n=0;r<c-1;r++)for(k[r]=n,e=0;e<1<<x[r];e++)O[n++]=r;for(O[n-1]=r,r=i=0;r<16;r++)for(N[r]=i,e=0;e<1<<S[r];e++)D[i++]=r;for(i>>=7;r<d;r++)for(N[r]=i<<7,e=0;e<1<<S[r]-7;e++)D[256+i++]=r;for(t=0;t<=m;t++)a[t]=0;for(e=0;e<=143;)T[2*e+1]=8,e++,a[8]++;for(;e<=255;)T[2*e+1]=9,e++,a[9]++;for(;e<=279;)T[2*e+1]=7,e++,a[7]++;for(;e<=287;)T[2*e+1]=8,e++,a[8]++;for(ee(T,u+1,a),e=0;e<d;e++)E[2*e+1]=5,E[2*e]=B(e,5);A=new P(T,x,l+1,u,m),j=new P(E,S,0,d,m),M=new P([],C,0,f,g)}(),!0),e.l_desc=new F(e.dyn_ltree,A),e.d_desc=new F(e.dyn_dtree,j),e.bl_desc=new F(e.bl_tree,M),e.bi_buf=0,e.bi_valid=0,V(e)},n._tr_stored_block=G,n._tr_flush_block=function(e,t,n,r){var o,s,c=0;0<e.level?(e.strm.data_type===2&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&e.dyn_ltree[2*t]!==0)return i;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return a;for(t=32;t<l;t++)if(e.dyn_ltree[2*t]!==0)return a;return i}(e)),W(e,e.l_desc),W(e,e.d_desc),c=function(e){var t;for(re(e,e.dyn_ltree,e.l_desc.max_code),re(e,e.dyn_dtree,e.d_desc.max_code),W(e,e.bl_desc),t=f-1;3<=t&&e.bl_tree[2*w[t]+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=o&&(o=s)):o=s=n+5,n+4<=o&&t!==-1?G(e,t,n,r):e.strategy===4||s===o?(R(e,2+ +!!r,3),U(e,T,E)):(R(e,4+ +!!r,3),function(e,t,n,r){var i;for(R(e,t-257,5),R(e,n-1,5),R(e,r-4,4),i=0;i<r;i++)R(e,e.bl_tree[2*w[i]+1],3);ie(e,e.dyn_ltree,t-1),ie(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),U(e,e.dyn_ltree,e.dyn_dtree)),V(e),r&&H(e)},n._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,t===0?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(O[n]+l+1)]++,e.dyn_dtree[2*I(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){R(e,2,3),z(e,_,T),function(e){e.bi_valid===16?(L(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=``,this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){(function(e,t){if(!e.setImmediate){var n,r,i,a,o=1,s={},c=!1,l=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,n={}.toString.call(e.process)===`[object process]`?function(e){process.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage(``,`*`),e.onmessage=n,t}}()?(a=`setImmediate$`+Math.random()+`$`,e.addEventListener?e.addEventListener(`message`,p,!1):e.attachEvent(`onmessage`,p),function(t){e.postMessage(a+t,`*`)}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},function(e){i.port2.postMessage(e)}):l&&`onreadystatechange`in l.createElement(`script`)?(r=l.documentElement,function(e){var t=l.createElement(`script`);t.onreadystatechange=function(){f(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(f,0,e)},u.setImmediate=function(e){typeof e!=`function`&&(e=Function(``+e));for(var t=Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];return s[o]={callback:e,args:t},n(o),o++},u.clearImmediate=d}function d(e){delete s[e]}function f(e){if(c)setTimeout(f,0,e);else{var n=s[e];if(n){c=!0;try{(function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}})(n)}finally{d(e),c=!1}}}}function p(t){t.source===e&&typeof t.data==`string`&&t.data.indexOf(a)===0&&f(+t.data.slice(a.length))}})(typeof self>`u`?e===void 0?this:e:self)}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}]},{},[10])(10)})})),Uo=s((e=>{var t=Vo(),n=Ho();e.openArrayBuffer=r,e.splitPath=i,e.joinPath=a;function r(e){return n.loadAsync(e).then(function(e){function n(t){return e.file(t)!==null}function r(n,r){return e.file(n).async(`uint8array`).then(function(e){return r===`base64`?t.fromByteArray(e):r?new TextDecoder(r).decode(e):e})}function i(t,n){e.file(t,n)}function a(){return e.generateAsync({type:`arraybuffer`})}return{exists:n,read:r,write:i,toArrayBuffer:a}})}function i(e){var t=e.lastIndexOf(`/`);return t===-1?{dirname:``,basename:e}:{dirname:e.substring(0,t),basename:e.substring(t+1)}}function a(){var e=Array.prototype.filter.call(arguments,function(e){return e}),t=[];return e.forEach(function(e){/^\//.test(e)?t=[e]:t.push(e)}),t.join(`/`)}})),Wo=s((e=>{var t=(Q(),d(Z));e.Element=r,e.element=function(e,t,n){return new r(e,t,n)},e.text=function(e){return{type:`text`,value:e}};var n=e.emptyElement={first:function(){return null},firstOrEmpty:function(){return n},attributes:{},children:[]};function r(e,t,n){this.type=`element`,this.name=e,this.attributes=t||{},this.children=n||[]}r.prototype.first=function(e){return t.find(this.children,function(t){return t.name===e})},r.prototype.firstOrEmpty=function(e){return this.first(e)||n},r.prototype.getElementsByTagName=function(e){return a(t.filter(this.children,function(t){return t.name===e}))},r.prototype.text=function(){if(this.children.length===0)return``;if(this.children.length!==1||this.children[0].type!==`text`)throw Error(`Not implemented`);return this.children[0].value};var i={getElementsByTagName:function(e){return a(t.flatten(this.map(function(t){return t.getElementsByTagName(e)},!0)))}};function a(e){return t.extend(e,i)}})),Go=s((e=>{function t(e,t,n){if(n===void 0&&(n=Array.prototype),e&&typeof n.find==`function`)return n.find.call(e,t);for(var r=0;r<e.length;r++)if(Object.prototype.hasOwnProperty.call(e,r)){var i=e[r];if(t.call(void 0,i,r,e))return i}}function n(e,t){return t===void 0&&(t=Object),t&&typeof t.freeze==`function`?t.freeze(e):e}function r(e,t){if(typeof e!=`object`||!e)throw TypeError(`target is not an object`);for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}var i=n({HTML:`text/html`,isHTML:function(e){return e===i.HTML},XML_APPLICATION:`application/xml`,XML_TEXT:`text/xml`,XML_XHTML_APPLICATION:`application/xhtml+xml`,XML_SVG_IMAGE:`image/svg+xml`}),a=n({HTML:`http://www.w3.org/1999/xhtml`,isHTML:function(e){return e===a.HTML},SVG:`http://www.w3.org/2000/svg`,XML:`http://www.w3.org/XML/1998/namespace`,XMLNS:`http://www.w3.org/2000/xmlns/`});e.assign=r,e.find=t,e.freeze=n,e.MIME_TYPE=i,e.NAMESPACE=a})),Ko=s((e=>{var t=Go(),n=t.find,r=t.NAMESPACE;function i(e){return e!==``}function a(e){return e?e.split(/[\t\n\f\r ]+/).filter(i):[]}function o(e,t){return e.hasOwnProperty(t)||(e[t]=!0),e}function s(e){if(!e)return[];var t=a(e);return Object.keys(t.reduce(o,{}))}function c(e){return function(t){return e&&e.indexOf(t)!==-1}}function l(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}function u(e,t){var n=e.prototype;if(!(n instanceof t)){function r(){}r.prototype=t.prototype,r=new r,l(n,r),e.prototype=n=r}n.constructor!=e&&(typeof e!=`function`&&console.error(`unknown Class:`+e),n.constructor=e)}var d={},f=d.ELEMENT_NODE=1,p=d.ATTRIBUTE_NODE=2,m=d.TEXT_NODE=3,h=d.CDATA_SECTION_NODE=4,g=d.ENTITY_REFERENCE_NODE=5,_=d.ENTITY_NODE=6,v=d.PROCESSING_INSTRUCTION_NODE=7,y=d.COMMENT_NODE=8,b=d.DOCUMENT_NODE=9,x=d.DOCUMENT_TYPE_NODE=10,S=d.DOCUMENT_FRAGMENT_NODE=11,C=d.NOTATION_NODE=12,w={},T={};w.INDEX_SIZE_ERR=(T[1]=`Index size error`,1),w.DOMSTRING_SIZE_ERR=(T[2]=`DOMString size error`,2);var E=w.HIERARCHY_REQUEST_ERR=(T[3]=`Hierarchy request error`,3);w.WRONG_DOCUMENT_ERR=(T[4]=`Wrong document`,4);var D=w.INVALID_CHARACTER_ERR=(T[5]=`Invalid character`,5);w.NO_DATA_ALLOWED_ERR=(T[6]=`No data allowed`,6),w.NO_MODIFICATION_ALLOWED_ERR=(T[7]=`No modification allowed`,7);var O=w.NOT_FOUND_ERR=(T[8]=`Not found`,8);w.NOT_SUPPORTED_ERR=(T[9]=`Not supported`,9);var k=w.INUSE_ATTRIBUTE_ERR=(T[10]=`Attribute in use`,10),A=w.INVALID_STATE_ERR=(T[11]=`Invalid state`,11);w.SYNTAX_ERR=(T[12]=`Syntax error`,12),w.INVALID_MODIFICATION_ERR=(T[13]=`Invalid modification`,13),w.NAMESPACE_ERR=(T[14]=`Invalid namespace`,14),w.INVALID_ACCESS_ERR=(T[15]=`Invalid access`,15);function j(e,t){if(t instanceof Error)var n=t;else n=this,Error.call(this,T[e]),this.message=T[e],Error.captureStackTrace&&Error.captureStackTrace(this,j);return n.code=e,t&&(this.message=this.message+`: `+t),n}j.prototype=Error.prototype,l(w,j);function M(){}M.prototype={length:0,item:function(e){return e>=0&&e<this.length?this[e]:null},toString:function(e,t,n){for(var r=!!n&&!!n.requireWellFormed,i=[],a=0;a<this.length;a++)Ae(this[a],i,e,t,null,r);return i.join(``)},filter:function(e){return Array.prototype.filter.call(this,e)},indexOf:function(e){return Array.prototype.indexOf.call(this,e)}};function N(e,t){this._node=e,this._refresh=t,P(this)}function P(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!==t){var n=e._refresh(e._node);if(Ne(e,`length`,n.length),!e.$$length||n.length<e.$$length)for(var r=n.length;r in e;r++)Object.prototype.hasOwnProperty.call(e,r)&&delete e[r];l(n,e),e._inc=t}}N.prototype.item=function(e){return P(this),this[e]||null},u(N,M);function F(){}function I(e,t){for(var n=e.length;n--;)if(e[n]===t)return n}function L(e,t,n,r){if(r?t[I(t,r)]=n:t[t.length++]=n,e){n.ownerElement=e;var i=e.ownerDocument;i&&(r&&U(i,e,r),ne(i,e,n))}}function R(e,t,n){var r=I(t,n);if(r>=0){for(var i=t.length-1;r<i;)t[r]=t[++r];if(t.length=i,e){var a=e.ownerDocument;a&&(U(a,e,n),n.ownerElement=null)}}else throw new j(O,Error(e.tagName+`@`+n))}F.prototype={length:0,item:M.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var n=this[t];if(n.nodeName==e)return n}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new j(k);var n=this.getNamedItem(e.nodeName);return L(this._ownerElement,this,e,n),n},setNamedItemNS:function(e){var t=e.ownerElement,n;if(t&&t!=this._ownerElement)throw new j(k);return n=this.getNamedItemNS(e.namespaceURI,e.localName),L(this._ownerElement,this,e,n),n},removeNamedItem:function(e){var t=this.getNamedItem(e);return R(this._ownerElement,this,t),t},removeNamedItemNS:function(e,t){var n=this.getNamedItemNS(e,t);return R(this._ownerElement,this,n),n},getNamedItemNS:function(e,t){for(var n=this.length;n--;){var r=this[n];if(r.localName==t&&r.namespaceURI==e)return r}return null}};function z(){}z.prototype={hasFeature:function(e,t){return!0},createDocument:function(e,t,n){var r=new te;if(r.implementation=this,r.childNodes=new M,r.doctype=n||null,n&&r.appendChild(n),t){var i=r.createElementNS(e,t);r.appendChild(i)}return r},createDocumentType:function(e,t,n){var r=new be;return r.name=e,r.nodeName=e,r.publicId=t||``,r.systemId=n||``,r}};function B(){}B.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return fe(this,e,t)},replaceChild:function(e,t){fe(this,e,t,K),t&&this.removeChild(t)},removeChild:function(e){return re(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return this.firstChild!=null},cloneNode:function(e){return Me(this.ownerDocument||this,this,e)},normalize:function(){H(this,null,{enter:function(e){for(var t=e.firstChild;t;){var n=t.nextSibling;n!==null&&n.nodeType===m&&t.nodeType===m?(e.removeChild(n),t.appendData(n.data)):t=n}return!0}})},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var n=t._nsMap;if(n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)&&n[r]===e)return r}t=t.nodeType==p?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var n=t._nsMap;if(n&&Object.prototype.hasOwnProperty.call(n,e))return n[e];t=t.nodeType==p?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){return this.lookupPrefix(e)==null}};function ee(e){return e==`<`&&`&lt;`||e==`>`&&`&gt;`||e==`&`&&`&amp;`||e==`"`&&`&quot;`||`&#`+e.charCodeAt()+`;`}l(d,B),l(d,B.prototype);function V(e,t){return H(e,null,{enter:function(e){return!t(e)||H.STOP}})===H.STOP}function H(e,t,n){for(var r=[{node:e,context:t,phase:H.ENTER}];r.length>0;){var i=r.pop();if(i.phase===H.ENTER){var a=n.enter(i.node,i.context);if(a===H.STOP)return H.STOP;if(r.push({node:i.node,context:a,phase:H.EXIT}),a==null)continue;for(var o=i.node.lastChild;o;)r.push({node:o,context:a,phase:H.ENTER}),o=o.previousSibling}else n.exit&&n.exit(i.node,i.context)}}H.STOP=Symbol(`walkDOM.STOP`),H.ENTER=0,H.EXIT=1;function te(){this.ownerDocument=this}function ne(e,t,n){e&&e._inc++,n.namespaceURI===r.XMLNS&&(t._nsMap[n.prefix?n.localName:``]=n.value)}function U(e,t,n,i){e&&e._inc++,n.namespaceURI===r.XMLNS&&delete t._nsMap[n.prefix?n.localName:``]}function W(e,t,n){if(e&&e._inc){e._inc++;var r=t.childNodes;if(n)r[r.length++]=n;else{for(var i=t.firstChild,a=0;i;)r[a++]=i,i=i.nextSibling;r.length=a,delete r[r.length]}}}function re(e,t){var n=t.previousSibling,r=t.nextSibling;return n?n.nextSibling=r:e.firstChild=r,r?r.previousSibling=n:e.lastChild=n,t.parentNode=null,t.previousSibling=null,t.nextSibling=null,W(e.ownerDocument,e),t}function ie(e){return e&&(e.nodeType===B.DOCUMENT_NODE||e.nodeType===B.DOCUMENT_FRAGMENT_NODE||e.nodeType===B.ELEMENT_NODE)}function ae(e){return e&&(oe(e)||se(e)||G(e)||e.nodeType===B.DOCUMENT_FRAGMENT_NODE||e.nodeType===B.COMMENT_NODE||e.nodeType===B.PROCESSING_INSTRUCTION_NODE)}function G(e){return e&&e.nodeType===B.DOCUMENT_TYPE_NODE}function oe(e){return e&&e.nodeType===B.ELEMENT_NODE}function se(e){return e&&e.nodeType===B.TEXT_NODE}function ce(e,t){var r=e.childNodes||[];if(n(r,oe)||G(t))return!1;var i=n(r,G);return!(t&&i&&r.indexOf(i)>r.indexOf(t))}function le(e,t){var r=e.childNodes||[];function i(e){return oe(e)&&e!==t}if(n(r,i))return!1;var a=n(r,G);return!(t&&a&&r.indexOf(a)>r.indexOf(t))}function ue(e,t,n){if(!ie(e))throw new j(E,`Unexpected parent node type `+e.nodeType);if(n&&n.parentNode!==e)throw new j(O,`child not in parent`);if(!ae(t)||G(t)&&e.nodeType!==B.DOCUMENT_NODE)throw new j(E,`Unexpected node type `+t.nodeType+` for parent node type `+e.nodeType)}function de(e,t,r){var i=e.childNodes||[],a=t.childNodes||[];if(t.nodeType===B.DOCUMENT_FRAGMENT_NODE){var o=a.filter(oe);if(o.length>1||n(a,se))throw new j(E,`More than one element or text in fragment`);if(o.length===1&&!ce(e,r))throw new j(E,`Element in fragment can not be inserted before doctype`)}if(oe(t)&&!ce(e,r))throw new j(E,`Only one element can be added and only after doctype`);if(G(t)){if(n(i,G))throw new j(E,`Only one doctype is allowed`);var s=n(i,oe);if(r&&i.indexOf(s)<i.indexOf(r))throw new j(E,`Doctype can only be inserted before an element`);if(!r&&s)throw new j(E,`Doctype can not be appended since element is present`)}}function K(e,t,r){var i=e.childNodes||[],a=t.childNodes||[];if(t.nodeType===B.DOCUMENT_FRAGMENT_NODE){var o=a.filter(oe);if(o.length>1||n(a,se))throw new j(E,`More than one element or text in fragment`);if(o.length===1&&!le(e,r))throw new j(E,`Element in fragment can not be inserted before doctype`)}if(oe(t)&&!le(e,r))throw new j(E,`Only one element can be added and only after doctype`);if(G(t)){function e(e){return G(e)&&e!==r}if(n(i,e))throw new j(E,`Only one doctype is allowed`);var s=n(i,oe);if(r&&i.indexOf(s)<i.indexOf(r))throw new j(E,`Doctype can only be inserted before an element`)}}function fe(e,t,n,r){ue(e,t,n),e.nodeType===B.DOCUMENT_NODE&&(r||de)(e,t,n);var i=t.parentNode;if(i&&i.removeChild(t),t.nodeType===S){var a=t.firstChild;if(a==null)return t;var o=t.lastChild}else a=o=t;var s=n?n.previousSibling:e.lastChild;a.previousSibling=s,o.nextSibling=n,s?s.nextSibling=a:e.firstChild=a,n==null?e.lastChild=o:n.previousSibling=o;do{a.parentNode=e;var c=e.ownerDocument||e;pe(a,c)}while(a!==o&&(a=a.nextSibling));return W(e.ownerDocument||e,e),t.nodeType==S&&(t.firstChild=t.lastChild=null),t}function pe(e,t){if(e.ownerDocument!==t){if(e.ownerDocument=t,e.nodeType===f&&e.attributes)for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);r&&(r.ownerDocument=t)}for(var i=e.firstChild;i;)pe(i,t),i=i.nextSibling}}function me(e,t){return t.parentNode&&t.parentNode.removeChild(t),t.parentNode=e,t.previousSibling=e.lastChild,t.nextSibling=null,t.previousSibling?t.previousSibling.nextSibling=t:e.firstChild=t,e.lastChild=t,W(e.ownerDocument,e,t),pe(t,e.ownerDocument||e),t}te.prototype={nodeName:`#document`,nodeType:b,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==S){for(var n=e.firstChild;n;){var r=n.nextSibling;this.insertBefore(n,t),n=r}return e}return fe(this,e,t),pe(e,this),this.documentElement===null&&e.nodeType===f&&(this.documentElement=e),e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),re(this,e)},replaceChild:function(e,t){fe(this,e,t,K),pe(e,this),t&&this.removeChild(t),oe(e)&&(this.documentElement=e)},importNode:function(e,t){return je(this,e,t)},getElementById:function(e){var t=null;return V(this.documentElement,function(n){if(n.nodeType==f&&n.getAttribute(`id`)==e)return t=n,!0}),t},getElementsByClassName:function(e){var t=s(e);return new N(this,function(n){var r=[];return t.length>0&&V(n.documentElement,function(i){if(i!==n&&i.nodeType===f){var a=i.getAttribute(`class`);if(a){var o=e===a;if(!o){var l=s(a);o=t.every(c(l))}o&&r.push(i)}}}),r})},createElement:function(e){var t=new he;t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.localName=e,t.childNodes=new M;var n=t.attributes=new F;return n._ownerElement=t,t},createDocumentFragment:function(){var e=new we;return e.ownerDocument=this,e.childNodes=new M,e},createTextNode:function(e){var t=new _e;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new ve;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){if(e.indexOf(`]]>`)!==-1)throw new j(D,`data contains "]]>"`);var t=new ye;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var n=new Te;return n.ownerDocument=this,n.tagName=n.nodeName=n.target=e,n.nodeValue=n.data=t,n},createAttribute:function(e){var t=new ge;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new Ce;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var n=new he,r=t.split(`:`),i=n.attributes=new F;return n.childNodes=new M,n.ownerDocument=this,n.nodeName=t,n.tagName=t,n.namespaceURI=e,r.length==2?(n.prefix=r[0],n.localName=r[1]):n.localName=t,i._ownerElement=n,n},createAttributeNS:function(e,t){var n=new ge,r=t.split(`:`);return n.ownerDocument=this,n.nodeName=t,n.name=t,n.namespaceURI=e,n.specified=!0,r.length==2?(n.prefix=r[0],n.localName=r[1]):n.localName=t,n}},u(te,B);function he(){this._nsMap={}}he.prototype={nodeType:f,hasAttribute:function(e){return this.getAttributeNode(e)!=null},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||``},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var n=this.ownerDocument.createAttribute(e);n.value=n.nodeValue=``+t,this.setAttributeNode(n)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===S?this.insertBefore(e,null):me(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);n&&this.removeAttributeNode(n)},hasAttributeNS:function(e,t){return this.getAttributeNodeNS(e,t)!=null},getAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);return n&&n.value||``},setAttributeNS:function(e,t,n){var r=this.ownerDocument.createAttributeNS(e,t);r.value=r.nodeValue=``+n,this.setAttributeNode(r)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new N(this,function(t){var n=[];return V(t,function(r){r!==t&&r.nodeType==f&&(e===`*`||r.tagName==e)&&n.push(r)}),n})},getElementsByTagNameNS:function(e,t){return new N(this,function(n){var r=[];return V(n,function(i){i!==n&&i.nodeType===f&&(e===`*`||i.namespaceURI===e)&&(t===`*`||i.localName==t)&&r.push(i)}),r})}},te.prototype.getElementsByTagName=he.prototype.getElementsByTagName,te.prototype.getElementsByTagNameNS=he.prototype.getElementsByTagNameNS,u(he,B);function ge(){}ge.prototype.nodeType=p,u(ge,B);function q(){}q.prototype={data:``,substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw Error(T[E])},deleteData:function(e,t){this.replaceData(e,t,``)},replaceData:function(e,t,n){var r=this.data.substring(0,e),i=this.data.substring(e+t);n=r+n+i,this.nodeValue=this.data=n,this.length=n.length}},u(q,B);function _e(){}_e.prototype={nodeName:`#text`,nodeType:m,splitText:function(e){var t=this.data,n=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var r=this.ownerDocument.createTextNode(n);return this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling),r}},u(_e,q);function ve(){}ve.prototype={nodeName:`#comment`,nodeType:y},u(ve,q);function ye(){}ye.prototype={nodeName:`#cdata-section`,nodeType:h},u(ye,q);function be(){}be.prototype.nodeType=x,u(be,B);function xe(){}xe.prototype.nodeType=C,u(xe,B);function Se(){}Se.prototype.nodeType=_,u(Se,B);function Ce(){}Ce.prototype.nodeType=g,u(Ce,B);function we(){}we.prototype.nodeName=`#document-fragment`,we.prototype.nodeType=S,u(we,B);function Te(){}Te.prototype.nodeType=v,u(Te,B);function Ee(){}Ee.prototype.serializeToString=function(e,t,n,r){return De.call(e,t,n,r)},B.prototype.toString=De;function De(e,t,n){var r=!!n&&!!n.requireWellFormed,i=[],a=this.nodeType==9&&this.documentElement||this,o=a.prefix,s=a.namespaceURI;if(s&&o==null){var o=a.lookupPrefix(s);if(o==null)var c=[{namespace:s,prefix:null}]}return Ae(this,i,e,t,c,r),i.join(``)}function Oe(e,t,n){var i=e.prefix||``,a=e.namespaceURI;if(!a||i===`xml`&&a===r.XML||a===r.XMLNS)return!1;for(var o=n.length;o--;){var s=n[o];if(s.prefix===i)return s.namespace!==a}return!0}function ke(e,t,n){e.push(` `,t,`="`,n.replace(/[<>&"\t\n\r]/g,ee),`"`)}function Ae(e,t,n,i,a,o){a||=[],H(e,{ns:a,isHTML:n},{enter:function(e,n){var a=n.ns,s=n.isHTML;if(i)if(e=i(e),e){if(typeof e==`string`)return t.push(e),null}else return null;switch(e.nodeType){case f:var c=e.attributes,l=c.length,u=e.tagName;s=r.isHTML(e.namespaceURI)||s;var d=u;if(!s&&!e.prefix&&e.namespaceURI){for(var _,C=0;C<c.length;C++)if(c.item(C).name===`xmlns`){_=c.item(C).value;break}if(!_)for(var w=a.length-1;w>=0;w--){var T=a[w];if(T.prefix===``&&T.namespace===e.namespaceURI){_=T.namespace;break}}if(_!==e.namespaceURI)for(var w=a.length-1;w>=0;w--){var T=a[w];if(T.namespace===e.namespaceURI){T.prefix&&(d=T.prefix+`:`+u);break}}}t.push(`<`,d);for(var E=a.slice(),D=0;D<l;D++){var O=c.item(D);O.prefix==`xmlns`?E.push({prefix:O.localName,namespace:O.value}):O.nodeName==`xmlns`&&E.push({prefix:``,namespace:O.value})}for(var D=0;D<l;D++){var O=c.item(D);if(Oe(O,s,E)){var k=O.prefix||``,M=O.namespaceURI;ke(t,k?`xmlns:`+k:`xmlns`,M),E.push({prefix:k,namespace:M})}var N=i?i(O):O;N&&(typeof N==`string`?t.push(N):ke(t,N.name,N.value))}if(u===d&&Oe(e,s,E)){var P=e.prefix||``,M=e.namespaceURI;ke(t,P?`xmlns:`+P:`xmlns`,M),E.push({prefix:P,namespace:M})}var F=e.firstChild;if(F||s&&!/^(?:meta|link|img|br|hr|input)$/i.test(u)){if(t.push(`>`),s&&/^script$/i.test(u)){for(;F;)F.data?t.push(F.data):Ae(F,t,s,i,E.slice(),o),F=F.nextSibling;return t.push(`</`,u,`>`),null}return{ns:E,isHTML:s,tag:d}}else return t.push(`/>`),null;case b:case S:return{ns:a.slice(),isHTML:s,tag:null};case p:return ke(t,e.name,e.value),null;case m:return t.push(e.data.replace(/[<&>]/g,ee)),null;case h:if(o&&e.data.indexOf(`]]>`)!==-1)throw new j(A,`The CDATASection data contains "]]>"`);return t.push(`<![CDATA[`,e.data.replace(/]]>/g,`]]]]><![CDATA[>`),`]]>`),null;case y:if(o&&e.data.indexOf(`-->`)!==-1)throw new j(A,`The comment node data contains "-->"`);return t.push(`<!--`,e.data,`-->`),null;case x:if(o){if(e.publicId&&!/^("[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%']*"|'[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%'"]*')$/.test(e.publicId))throw new j(A,`DocumentType publicId is not a valid PubidLiteral`);if(e.systemId&&!/^("[^"]*"|'[^']*')$/.test(e.systemId))throw new j(A,`DocumentType systemId is not a valid SystemLiteral`);if(e.internalSubset&&e.internalSubset.indexOf(`]>`)!==-1)throw new j(A,`DocumentType internalSubset contains "]>"`)}var I=e.publicId,L=e.systemId;if(t.push(`<!DOCTYPE `,e.name),I)t.push(` PUBLIC `,I),L&&L!=`.`&&t.push(` `,L),t.push(`>`);else if(L&&L!=`.`)t.push(` SYSTEM `,L,`>`);else{var R=e.internalSubset;R&&t.push(` [`,R,`]`),t.push(`>`)}return null;case v:if(o&&e.data.indexOf(`?>`)!==-1)throw new j(A,`The ProcessingInstruction data contains "?>"`);return t.push(`<?`,e.target,` `,e.data,`?>`),null;case g:return t.push(`&`,e.nodeName,`;`),null;default:return t.push(`??`,e.nodeName),null}},exit:function(e,n){n&&n.tag&&t.push(`</`,n.tag,`>`)}})}function je(e,t,n){var r;return H(t,null,{enter:function(t,i){var a=t.cloneNode(!1);return a.ownerDocument=e,a.parentNode=null,i===null?r=a:i.appendChild(a),t.nodeType===p||n?a:null}}),r}function Me(e,t,n){var r;return H(t,null,{enter:function(t,i){var a=new t.constructor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=t[o];typeof s!=`object`&&s!=a[o]&&(a[o]=s)}t.childNodes&&(a.childNodes=new M),a.ownerDocument=e;var c=n;switch(a.nodeType){case f:var l=t.attributes,u=a.attributes=new F,d=l.length;u._ownerElement=a;for(var m=0;m<d;m++)a.setAttributeNode(Me(e,l.item(m),!0));break;case p:c=!0}return i===null?r=a:i.appendChild(a),c?a:null}}),r}function Ne(e,t,n){e[t]=n}try{Object.defineProperty&&(Object.defineProperty(N.prototype,"length",{get:function(){return P(this),this.$$length}}),Object.defineProperty(B.prototype,"textContent",{get:function(){if(this.nodeType===f||this.nodeType===S){var e=[];return H(this,null,{enter:function(t){if(t.nodeType===f||t.nodeType===S)return!0;if(t.nodeType===v||t.nodeType===y)return null;e.push(t.nodeValue)}}),e.join(``)}return this.nodeValue},set:function(e){switch(this.nodeType){case f:case S:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:this.data=e,this.value=e,this.nodeValue=e}}}),Ne=function(e,t,n){e[`$$`+t]=n})}catch{}e.DocumentType=be,e.DOMException=j,e.DOMImplementation=z,e.Element=he,e.Node=B,e.NodeList=M,e.walkDOM=H,e.XMLSerializer=Ee})),qo=s((e=>{var t=Go().freeze;e.XML_ENTITIES=t({amp:`&`,apos:`'`,gt:`>`,lt:`<`,quot:`"`}),e.HTML_ENTITIES=t({Aacute:`Á`,aacute:`á`,Abreve:`Ă`,abreve:`ă`,ac:`∾`,acd:`∿`,acE:`∾̳`,Acirc:`Â`,acirc:`â`,acute:`´`,Acy:`А`,acy:`а`,AElig:`Æ`,aelig:`æ`,af:`⁡`,Afr:`𝔄`,afr:`𝔞`,Agrave:`À`,agrave:`à`,alefsym:`ℵ`,aleph:`ℵ`,Alpha:`Α`,alpha:`α`,Amacr:`Ā`,amacr:`ā`,amalg:`⨿`,AMP:`&`,amp:`&`,And:`⩓`,and:`∧`,andand:`⩕`,andd:`⩜`,andslope:`⩘`,andv:`⩚`,ang:`∠`,ange:`⦤`,angle:`∠`,angmsd:`∡`,angmsdaa:`⦨`,angmsdab:`⦩`,angmsdac:`⦪`,angmsdad:`⦫`,angmsdae:`⦬`,angmsdaf:`⦭`,angmsdag:`⦮`,angmsdah:`⦯`,angrt:`∟`,angrtvb:`⊾`,angrtvbd:`⦝`,angsph:`∢`,angst:`Å`,angzarr:`⍼`,Aogon:`Ą`,aogon:`ą`,Aopf:`𝔸`,aopf:`𝕒`,ap:`≈`,apacir:`⩯`,apE:`⩰`,ape:`≊`,apid:`≋`,apos:`'`,ApplyFunction:`⁡`,approx:`≈`,approxeq:`≊`,Aring:`Å`,aring:`å`,Ascr:`𝒜`,ascr:`𝒶`,Assign:`≔`,ast:`*`,asymp:`≈`,asympeq:`≍`,Atilde:`Ã`,atilde:`ã`,Auml:`Ä`,auml:`ä`,awconint:`∳`,awint:`⨑`,backcong:`≌`,backepsilon:`϶`,backprime:`‵`,backsim:`∽`,backsimeq:`⋍`,Backslash:`∖`,Barv:`⫧`,barvee:`⊽`,Barwed:`⌆`,barwed:`⌅`,barwedge:`⌅`,bbrk:`⎵`,bbrktbrk:`⎶`,bcong:`≌`,Bcy:`Б`,bcy:`б`,bdquo:`„`,becaus:`∵`,Because:`∵`,because:`∵`,bemptyv:`⦰`,bepsi:`϶`,bernou:`ℬ`,Bernoullis:`ℬ`,Beta:`Β`,beta:`β`,beth:`ℶ`,between:`≬`,Bfr:`𝔅`,bfr:`𝔟`,bigcap:`⋂`,bigcirc:`◯`,bigcup:`⋃`,bigodot:`⨀`,bigoplus:`⨁`,bigotimes:`⨂`,bigsqcup:`⨆`,bigstar:`★`,bigtriangledown:`▽`,bigtriangleup:`△`,biguplus:`⨄`,bigvee:`⋁`,bigwedge:`⋀`,bkarow:`⤍`,blacklozenge:`⧫`,blacksquare:`▪`,blacktriangle:`▴`,blacktriangledown:`▾`,blacktriangleleft:`◂`,blacktriangleright:`▸`,blank:`␣`,blk12:`▒`,blk14:`░`,blk34:`▓`,block:`█`,bne:`=⃥`,bnequiv:`≡⃥`,bNot:`⫭`,bnot:`⌐`,Bopf:`𝔹`,bopf:`𝕓`,bot:`⊥`,bottom:`⊥`,bowtie:`⋈`,boxbox:`⧉`,boxDL:`╗`,boxDl:`╖`,boxdL:`╕`,boxdl:`┐`,boxDR:`╔`,boxDr:`╓`,boxdR:`╒`,boxdr:`┌`,boxH:`═`,boxh:`─`,boxHD:`╦`,boxHd:`╤`,boxhD:`╥`,boxhd:`┬`,boxHU:`╩`,boxHu:`╧`,boxhU:`╨`,boxhu:`┴`,boxminus:`⊟`,boxplus:`⊞`,boxtimes:`⊠`,boxUL:`╝`,boxUl:`╜`,boxuL:`╛`,boxul:`┘`,boxUR:`╚`,boxUr:`╙`,boxuR:`╘`,boxur:`└`,boxV:`║`,boxv:`│`,boxVH:`╬`,boxVh:`╫`,boxvH:`╪`,boxvh:`┼`,boxVL:`╣`,boxVl:`╢`,boxvL:`╡`,boxvl:`┤`,boxVR:`╠`,boxVr:`╟`,boxvR:`╞`,boxvr:`├`,bprime:`‵`,Breve:`˘`,breve:`˘`,brvbar:`¦`,Bscr:`ℬ`,bscr:`𝒷`,bsemi:`⁏`,bsim:`∽`,bsime:`⋍`,bsol:`\\`,bsolb:`⧅`,bsolhsub:`⟈`,bull:`•`,bullet:`•`,bump:`≎`,bumpE:`⪮`,bumpe:`≏`,Bumpeq:`≎`,bumpeq:`≏`,Cacute:`Ć`,cacute:`ć`,Cap:`⋒`,cap:`∩`,capand:`⩄`,capbrcup:`⩉`,capcap:`⩋`,capcup:`⩇`,capdot:`⩀`,CapitalDifferentialD:`ⅅ`,caps:`∩︀`,caret:`⁁`,caron:`ˇ`,Cayleys:`ℭ`,ccaps:`⩍`,Ccaron:`Č`,ccaron:`č`,Ccedil:`Ç`,ccedil:`ç`,Ccirc:`Ĉ`,ccirc:`ĉ`,Cconint:`∰`,ccups:`⩌`,ccupssm:`⩐`,Cdot:`Ċ`,cdot:`ċ`,cedil:`¸`,Cedilla:`¸`,cemptyv:`⦲`,cent:`¢`,CenterDot:`·`,centerdot:`·`,Cfr:`ℭ`,cfr:`𝔠`,CHcy:`Ч`,chcy:`ч`,check:`✓`,checkmark:`✓`,Chi:`Χ`,chi:`χ`,cir:`○`,circ:`ˆ`,circeq:`≗`,circlearrowleft:`↺`,circlearrowright:`↻`,circledast:`⊛`,circledcirc:`⊚`,circleddash:`⊝`,CircleDot:`⊙`,circledR:`®`,circledS:`Ⓢ`,CircleMinus:`⊖`,CirclePlus:`⊕`,CircleTimes:`⊗`,cirE:`⧃`,cire:`≗`,cirfnint:`⨐`,cirmid:`⫯`,cirscir:`⧂`,ClockwiseContourIntegral:`∲`,CloseCurlyDoubleQuote:`”`,CloseCurlyQuote:`’`,clubs:`♣`,clubsuit:`♣`,Colon:`∷`,colon:`:`,Colone:`⩴`,colone:`≔`,coloneq:`≔`,comma:`,`,commat:`@`,comp:`∁`,compfn:`∘`,complement:`∁`,complexes:`ℂ`,cong:`≅`,congdot:`⩭`,Congruent:`≡`,Conint:`∯`,conint:`∮`,ContourIntegral:`∮`,Copf:`ℂ`,copf:`𝕔`,coprod:`∐`,Coproduct:`∐`,COPY:`©`,copy:`©`,copysr:`℗`,CounterClockwiseContourIntegral:`∳`,crarr:`↵`,Cross:`⨯`,cross:`✗`,Cscr:`𝒞`,cscr:`𝒸`,csub:`⫏`,csube:`⫑`,csup:`⫐`,csupe:`⫒`,ctdot:`⋯`,cudarrl:`⤸`,cudarrr:`⤵`,cuepr:`⋞`,cuesc:`⋟`,cularr:`↶`,cularrp:`⤽`,Cup:`⋓`,cup:`∪`,cupbrcap:`⩈`,CupCap:`≍`,cupcap:`⩆`,cupcup:`⩊`,cupdot:`⊍`,cupor:`⩅`,cups:`∪︀`,curarr:`↷`,curarrm:`⤼`,curlyeqprec:`⋞`,curlyeqsucc:`⋟`,curlyvee:`⋎`,curlywedge:`⋏`,curren:`¤`,curvearrowleft:`↶`,curvearrowright:`↷`,cuvee:`⋎`,cuwed:`⋏`,cwconint:`∲`,cwint:`∱`,cylcty:`⌭`,Dagger:`‡`,dagger:`†`,daleth:`ℸ`,Darr:`↡`,dArr:`⇓`,darr:`↓`,dash:`‐`,Dashv:`⫤`,dashv:`⊣`,dbkarow:`⤏`,dblac:`˝`,Dcaron:`Ď`,dcaron:`ď`,Dcy:`Д`,dcy:`д`,DD:`ⅅ`,dd:`ⅆ`,ddagger:`‡`,ddarr:`⇊`,DDotrahd:`⤑`,ddotseq:`⩷`,deg:`°`,Del:`∇`,Delta:`Δ`,delta:`δ`,demptyv:`⦱`,dfisht:`⥿`,Dfr:`𝔇`,dfr:`𝔡`,dHar:`⥥`,dharl:`⇃`,dharr:`⇂`,DiacriticalAcute:`´`,DiacriticalDot:`˙`,DiacriticalDoubleAcute:`˝`,DiacriticalGrave:"`",DiacriticalTilde:`˜`,diam:`⋄`,Diamond:`⋄`,diamond:`⋄`,diamondsuit:`♦`,diams:`♦`,die:`¨`,DifferentialD:`ⅆ`,digamma:`ϝ`,disin:`⋲`,div:`÷`,divide:`÷`,divideontimes:`⋇`,divonx:`⋇`,DJcy:`Ђ`,djcy:`ђ`,dlcorn:`⌞`,dlcrop:`⌍`,dollar:`$`,Dopf:`𝔻`,dopf:`𝕕`,Dot:`¨`,dot:`˙`,DotDot:`⃜`,doteq:`≐`,doteqdot:`≑`,DotEqual:`≐`,dotminus:`∸`,dotplus:`∔`,dotsquare:`⊡`,doublebarwedge:`⌆`,DoubleContourIntegral:`∯`,DoubleDot:`¨`,DoubleDownArrow:`⇓`,DoubleLeftArrow:`⇐`,DoubleLeftRightArrow:`⇔`,DoubleLeftTee:`⫤`,DoubleLongLeftArrow:`⟸`,DoubleLongLeftRightArrow:`⟺`,DoubleLongRightArrow:`⟹`,DoubleRightArrow:`⇒`,DoubleRightTee:`⊨`,DoubleUpArrow:`⇑`,DoubleUpDownArrow:`⇕`,DoubleVerticalBar:`∥`,DownArrow:`↓`,Downarrow:`⇓`,downarrow:`↓`,DownArrowBar:`⤓`,DownArrowUpArrow:`⇵`,DownBreve:`̑`,downdownarrows:`⇊`,downharpoonleft:`⇃`,downharpoonright:`⇂`,DownLeftRightVector:`⥐`,DownLeftTeeVector:`⥞`,DownLeftVector:`↽`,DownLeftVectorBar:`⥖`,DownRightTeeVector:`⥟`,DownRightVector:`⇁`,DownRightVectorBar:`⥗`,DownTee:`⊤`,DownTeeArrow:`↧`,drbkarow:`⤐`,drcorn:`⌟`,drcrop:`⌌`,Dscr:`𝒟`,dscr:`𝒹`,DScy:`Ѕ`,dscy:`ѕ`,dsol:`⧶`,Dstrok:`Đ`,dstrok:`đ`,dtdot:`⋱`,dtri:`▿`,dtrif:`▾`,duarr:`⇵`,duhar:`⥯`,dwangle:`⦦`,DZcy:`Џ`,dzcy:`џ`,dzigrarr:`⟿`,Eacute:`É`,eacute:`é`,easter:`⩮`,Ecaron:`Ě`,ecaron:`ě`,ecir:`≖`,Ecirc:`Ê`,ecirc:`ê`,ecolon:`≕`,Ecy:`Э`,ecy:`э`,eDDot:`⩷`,Edot:`Ė`,eDot:`≑`,edot:`ė`,ee:`ⅇ`,efDot:`≒`,Efr:`𝔈`,efr:`𝔢`,eg:`⪚`,Egrave:`È`,egrave:`è`,egs:`⪖`,egsdot:`⪘`,el:`⪙`,Element:`∈`,elinters:`⏧`,ell:`ℓ`,els:`⪕`,elsdot:`⪗`,Emacr:`Ē`,emacr:`ē`,empty:`∅`,emptyset:`∅`,EmptySmallSquare:`◻`,emptyv:`∅`,EmptyVerySmallSquare:`▫`,emsp:` `,emsp13:` `,emsp14:` `,ENG:`Ŋ`,eng:`ŋ`,ensp:` `,Eogon:`Ę`,eogon:`ę`,Eopf:`𝔼`,eopf:`𝕖`,epar:`⋕`,eparsl:`⧣`,eplus:`⩱`,epsi:`ε`,Epsilon:`Ε`,epsilon:`ε`,epsiv:`ϵ`,eqcirc:`≖`,eqcolon:`≕`,eqsim:`≂`,eqslantgtr:`⪖`,eqslantless:`⪕`,Equal:`⩵`,equals:`=`,EqualTilde:`≂`,equest:`≟`,Equilibrium:`⇌`,equiv:`≡`,equivDD:`⩸`,eqvparsl:`⧥`,erarr:`⥱`,erDot:`≓`,Escr:`ℰ`,escr:`ℯ`,esdot:`≐`,Esim:`⩳`,esim:`≂`,Eta:`Η`,eta:`η`,ETH:`Ð`,eth:`ð`,Euml:`Ë`,euml:`ë`,euro:`€`,excl:`!`,exist:`∃`,Exists:`∃`,expectation:`ℰ`,ExponentialE:`ⅇ`,exponentiale:`ⅇ`,fallingdotseq:`≒`,Fcy:`Ф`,fcy:`ф`,female:`♀`,ffilig:`ﬃ`,fflig:`ﬀ`,ffllig:`ﬄ`,Ffr:`𝔉`,ffr:`𝔣`,filig:`ﬁ`,FilledSmallSquare:`◼`,FilledVerySmallSquare:`▪`,fjlig:`fj`,flat:`♭`,fllig:`ﬂ`,fltns:`▱`,fnof:`ƒ`,Fopf:`𝔽`,fopf:`𝕗`,ForAll:`∀`,forall:`∀`,fork:`⋔`,forkv:`⫙`,Fouriertrf:`ℱ`,fpartint:`⨍`,frac12:`½`,frac13:`⅓`,frac14:`¼`,frac15:`⅕`,frac16:`⅙`,frac18:`⅛`,frac23:`⅔`,frac25:`⅖`,frac34:`¾`,frac35:`⅗`,frac38:`⅜`,frac45:`⅘`,frac56:`⅚`,frac58:`⅝`,frac78:`⅞`,frasl:`⁄`,frown:`⌢`,Fscr:`ℱ`,fscr:`𝒻`,gacute:`ǵ`,Gamma:`Γ`,gamma:`γ`,Gammad:`Ϝ`,gammad:`ϝ`,gap:`⪆`,Gbreve:`Ğ`,gbreve:`ğ`,Gcedil:`Ģ`,Gcirc:`Ĝ`,gcirc:`ĝ`,Gcy:`Г`,gcy:`г`,Gdot:`Ġ`,gdot:`ġ`,gE:`≧`,ge:`≥`,gEl:`⪌`,gel:`⋛`,geq:`≥`,geqq:`≧`,geqslant:`⩾`,ges:`⩾`,gescc:`⪩`,gesdot:`⪀`,gesdoto:`⪂`,gesdotol:`⪄`,gesl:`⋛︀`,gesles:`⪔`,Gfr:`𝔊`,gfr:`𝔤`,Gg:`⋙`,gg:`≫`,ggg:`⋙`,gimel:`ℷ`,GJcy:`Ѓ`,gjcy:`ѓ`,gl:`≷`,gla:`⪥`,glE:`⪒`,glj:`⪤`,gnap:`⪊`,gnapprox:`⪊`,gnE:`≩`,gne:`⪈`,gneq:`⪈`,gneqq:`≩`,gnsim:`⋧`,Gopf:`𝔾`,gopf:`𝕘`,grave:"`",GreaterEqual:`≥`,GreaterEqualLess:`⋛`,GreaterFullEqual:`≧`,GreaterGreater:`⪢`,GreaterLess:`≷`,GreaterSlantEqual:`⩾`,GreaterTilde:`≳`,Gscr:`𝒢`,gscr:`ℊ`,gsim:`≳`,gsime:`⪎`,gsiml:`⪐`,Gt:`≫`,GT:`>`,gt:`>`,gtcc:`⪧`,gtcir:`⩺`,gtdot:`⋗`,gtlPar:`⦕`,gtquest:`⩼`,gtrapprox:`⪆`,gtrarr:`⥸`,gtrdot:`⋗`,gtreqless:`⋛`,gtreqqless:`⪌`,gtrless:`≷`,gtrsim:`≳`,gvertneqq:`≩︀`,gvnE:`≩︀`,Hacek:`ˇ`,hairsp:` `,half:`½`,hamilt:`ℋ`,HARDcy:`Ъ`,hardcy:`ъ`,hArr:`⇔`,harr:`↔`,harrcir:`⥈`,harrw:`↭`,Hat:`^`,hbar:`ℏ`,Hcirc:`Ĥ`,hcirc:`ĥ`,hearts:`♥`,heartsuit:`♥`,hellip:`…`,hercon:`⊹`,Hfr:`ℌ`,hfr:`𝔥`,HilbertSpace:`ℋ`,hksearow:`⤥`,hkswarow:`⤦`,hoarr:`⇿`,homtht:`∻`,hookleftarrow:`↩`,hookrightarrow:`↪`,Hopf:`ℍ`,hopf:`𝕙`,horbar:`―`,HorizontalLine:`─`,Hscr:`ℋ`,hscr:`𝒽`,hslash:`ℏ`,Hstrok:`Ħ`,hstrok:`ħ`,HumpDownHump:`≎`,HumpEqual:`≏`,hybull:`⁃`,hyphen:`‐`,Iacute:`Í`,iacute:`í`,ic:`⁣`,Icirc:`Î`,icirc:`î`,Icy:`И`,icy:`и`,Idot:`İ`,IEcy:`Е`,iecy:`е`,iexcl:`¡`,iff:`⇔`,Ifr:`ℑ`,ifr:`𝔦`,Igrave:`Ì`,igrave:`ì`,ii:`ⅈ`,iiiint:`⨌`,iiint:`∭`,iinfin:`⧜`,iiota:`℩`,IJlig:`Ĳ`,ijlig:`ĳ`,Im:`ℑ`,Imacr:`Ī`,imacr:`ī`,image:`ℑ`,ImaginaryI:`ⅈ`,imagline:`ℐ`,imagpart:`ℑ`,imath:`ı`,imof:`⊷`,imped:`Ƶ`,Implies:`⇒`,in:`∈`,incare:`℅`,infin:`∞`,infintie:`⧝`,inodot:`ı`,Int:`∬`,int:`∫`,intcal:`⊺`,integers:`ℤ`,Integral:`∫`,intercal:`⊺`,Intersection:`⋂`,intlarhk:`⨗`,intprod:`⨼`,InvisibleComma:`⁣`,InvisibleTimes:`⁢`,IOcy:`Ё`,iocy:`ё`,Iogon:`Į`,iogon:`į`,Iopf:`𝕀`,iopf:`𝕚`,Iota:`Ι`,iota:`ι`,iprod:`⨼`,iquest:`¿`,Iscr:`ℐ`,iscr:`𝒾`,isin:`∈`,isindot:`⋵`,isinE:`⋹`,isins:`⋴`,isinsv:`⋳`,isinv:`∈`,it:`⁢`,Itilde:`Ĩ`,itilde:`ĩ`,Iukcy:`І`,iukcy:`і`,Iuml:`Ï`,iuml:`ï`,Jcirc:`Ĵ`,jcirc:`ĵ`,Jcy:`Й`,jcy:`й`,Jfr:`𝔍`,jfr:`𝔧`,jmath:`ȷ`,Jopf:`𝕁`,jopf:`𝕛`,Jscr:`𝒥`,jscr:`𝒿`,Jsercy:`Ј`,jsercy:`ј`,Jukcy:`Є`,jukcy:`є`,Kappa:`Κ`,kappa:`κ`,kappav:`ϰ`,Kcedil:`Ķ`,kcedil:`ķ`,Kcy:`К`,kcy:`к`,Kfr:`𝔎`,kfr:`𝔨`,kgreen:`ĸ`,KHcy:`Х`,khcy:`х`,KJcy:`Ќ`,kjcy:`ќ`,Kopf:`𝕂`,kopf:`𝕜`,Kscr:`𝒦`,kscr:`𝓀`,lAarr:`⇚`,Lacute:`Ĺ`,lacute:`ĺ`,laemptyv:`⦴`,lagran:`ℒ`,Lambda:`Λ`,lambda:`λ`,Lang:`⟪`,lang:`⟨`,langd:`⦑`,langle:`⟨`,lap:`⪅`,Laplacetrf:`ℒ`,laquo:`«`,Larr:`↞`,lArr:`⇐`,larr:`←`,larrb:`⇤`,larrbfs:`⤟`,larrfs:`⤝`,larrhk:`↩`,larrlp:`↫`,larrpl:`⤹`,larrsim:`⥳`,larrtl:`↢`,lat:`⪫`,lAtail:`⤛`,latail:`⤙`,late:`⪭`,lates:`⪭︀`,lBarr:`⤎`,lbarr:`⤌`,lbbrk:`❲`,lbrace:`{`,lbrack:`[`,lbrke:`⦋`,lbrksld:`⦏`,lbrkslu:`⦍`,Lcaron:`Ľ`,lcaron:`ľ`,Lcedil:`Ļ`,lcedil:`ļ`,lceil:`⌈`,lcub:`{`,Lcy:`Л`,lcy:`л`,ldca:`⤶`,ldquo:`“`,ldquor:`„`,ldrdhar:`⥧`,ldrushar:`⥋`,ldsh:`↲`,lE:`≦`,le:`≤`,LeftAngleBracket:`⟨`,LeftArrow:`←`,Leftarrow:`⇐`,leftarrow:`←`,LeftArrowBar:`⇤`,LeftArrowRightArrow:`⇆`,leftarrowtail:`↢`,LeftCeiling:`⌈`,LeftDoubleBracket:`⟦`,LeftDownTeeVector:`⥡`,LeftDownVector:`⇃`,LeftDownVectorBar:`⥙`,LeftFloor:`⌊`,leftharpoondown:`↽`,leftharpoonup:`↼`,leftleftarrows:`⇇`,LeftRightArrow:`↔`,Leftrightarrow:`⇔`,leftrightarrow:`↔`,leftrightarrows:`⇆`,leftrightharpoons:`⇋`,leftrightsquigarrow:`↭`,LeftRightVector:`⥎`,LeftTee:`⊣`,LeftTeeArrow:`↤`,LeftTeeVector:`⥚`,leftthreetimes:`⋋`,LeftTriangle:`⊲`,LeftTriangleBar:`⧏`,LeftTriangleEqual:`⊴`,LeftUpDownVector:`⥑`,LeftUpTeeVector:`⥠`,LeftUpVector:`↿`,LeftUpVectorBar:`⥘`,LeftVector:`↼`,LeftVectorBar:`⥒`,lEg:`⪋`,leg:`⋚`,leq:`≤`,leqq:`≦`,leqslant:`⩽`,les:`⩽`,lescc:`⪨`,lesdot:`⩿`,lesdoto:`⪁`,lesdotor:`⪃`,lesg:`⋚︀`,lesges:`⪓`,lessapprox:`⪅`,lessdot:`⋖`,lesseqgtr:`⋚`,lesseqqgtr:`⪋`,LessEqualGreater:`⋚`,LessFullEqual:`≦`,LessGreater:`≶`,lessgtr:`≶`,LessLess:`⪡`,lesssim:`≲`,LessSlantEqual:`⩽`,LessTilde:`≲`,lfisht:`⥼`,lfloor:`⌊`,Lfr:`𝔏`,lfr:`𝔩`,lg:`≶`,lgE:`⪑`,lHar:`⥢`,lhard:`↽`,lharu:`↼`,lharul:`⥪`,lhblk:`▄`,LJcy:`Љ`,ljcy:`љ`,Ll:`⋘`,ll:`≪`,llarr:`⇇`,llcorner:`⌞`,Lleftarrow:`⇚`,llhard:`⥫`,lltri:`◺`,Lmidot:`Ŀ`,lmidot:`ŀ`,lmoust:`⎰`,lmoustache:`⎰`,lnap:`⪉`,lnapprox:`⪉`,lnE:`≨`,lne:`⪇`,lneq:`⪇`,lneqq:`≨`,lnsim:`⋦`,loang:`⟬`,loarr:`⇽`,lobrk:`⟦`,LongLeftArrow:`⟵`,Longleftarrow:`⟸`,longleftarrow:`⟵`,LongLeftRightArrow:`⟷`,Longleftrightarrow:`⟺`,longleftrightarrow:`⟷`,longmapsto:`⟼`,LongRightArrow:`⟶`,Longrightarrow:`⟹`,longrightarrow:`⟶`,looparrowleft:`↫`,looparrowright:`↬`,lopar:`⦅`,Lopf:`𝕃`,lopf:`𝕝`,loplus:`⨭`,lotimes:`⨴`,lowast:`∗`,lowbar:`_`,LowerLeftArrow:`↙`,LowerRightArrow:`↘`,loz:`◊`,lozenge:`◊`,lozf:`⧫`,lpar:`(`,lparlt:`⦓`,lrarr:`⇆`,lrcorner:`⌟`,lrhar:`⇋`,lrhard:`⥭`,lrm:`‎`,lrtri:`⊿`,lsaquo:`‹`,Lscr:`ℒ`,lscr:`𝓁`,Lsh:`↰`,lsh:`↰`,lsim:`≲`,lsime:`⪍`,lsimg:`⪏`,lsqb:`[`,lsquo:`‘`,lsquor:`‚`,Lstrok:`Ł`,lstrok:`ł`,Lt:`≪`,LT:`<`,lt:`<`,ltcc:`⪦`,ltcir:`⩹`,ltdot:`⋖`,lthree:`⋋`,ltimes:`⋉`,ltlarr:`⥶`,ltquest:`⩻`,ltri:`◃`,ltrie:`⊴`,ltrif:`◂`,ltrPar:`⦖`,lurdshar:`⥊`,luruhar:`⥦`,lvertneqq:`≨︀`,lvnE:`≨︀`,macr:`¯`,male:`♂`,malt:`✠`,maltese:`✠`,Map:`⤅`,map:`↦`,mapsto:`↦`,mapstodown:`↧`,mapstoleft:`↤`,mapstoup:`↥`,marker:`▮`,mcomma:`⨩`,Mcy:`М`,mcy:`м`,mdash:`—`,mDDot:`∺`,measuredangle:`∡`,MediumSpace:` `,Mellintrf:`ℳ`,Mfr:`𝔐`,mfr:`𝔪`,mho:`℧`,micro:`µ`,mid:`∣`,midast:`*`,midcir:`⫰`,middot:`·`,minus:`−`,minusb:`⊟`,minusd:`∸`,minusdu:`⨪`,MinusPlus:`∓`,mlcp:`⫛`,mldr:`…`,mnplus:`∓`,models:`⊧`,Mopf:`𝕄`,mopf:`𝕞`,mp:`∓`,Mscr:`ℳ`,mscr:`𝓂`,mstpos:`∾`,Mu:`Μ`,mu:`μ`,multimap:`⊸`,mumap:`⊸`,nabla:`∇`,Nacute:`Ń`,nacute:`ń`,nang:`∠⃒`,nap:`≉`,napE:`⩰̸`,napid:`≋̸`,napos:`ŉ`,napprox:`≉`,natur:`♮`,natural:`♮`,naturals:`ℕ`,nbsp:`\xA0`,nbump:`≎̸`,nbumpe:`≏̸`,ncap:`⩃`,Ncaron:`Ň`,ncaron:`ň`,Ncedil:`Ņ`,ncedil:`ņ`,ncong:`≇`,ncongdot:`⩭̸`,ncup:`⩂`,Ncy:`Н`,ncy:`н`,ndash:`–`,ne:`≠`,nearhk:`⤤`,neArr:`⇗`,nearr:`↗`,nearrow:`↗`,nedot:`≐̸`,NegativeMediumSpace:`​`,NegativeThickSpace:`​`,NegativeThinSpace:`​`,NegativeVeryThinSpace:`​`,nequiv:`≢`,nesear:`⤨`,nesim:`≂̸`,NestedGreaterGreater:`≫`,NestedLessLess:`≪`,NewLine:`
`,nexist:`∄`,nexists:`∄`,Nfr:`𝔑`,nfr:`𝔫`,ngE:`≧̸`,nge:`≱`,ngeq:`≱`,ngeqq:`≧̸`,ngeqslant:`⩾̸`,nges:`⩾̸`,nGg:`⋙̸`,ngsim:`≵`,nGt:`≫⃒`,ngt:`≯`,ngtr:`≯`,nGtv:`≫̸`,nhArr:`⇎`,nharr:`↮`,nhpar:`⫲`,ni:`∋`,nis:`⋼`,nisd:`⋺`,niv:`∋`,NJcy:`Њ`,njcy:`њ`,nlArr:`⇍`,nlarr:`↚`,nldr:`‥`,nlE:`≦̸`,nle:`≰`,nLeftarrow:`⇍`,nleftarrow:`↚`,nLeftrightarrow:`⇎`,nleftrightarrow:`↮`,nleq:`≰`,nleqq:`≦̸`,nleqslant:`⩽̸`,nles:`⩽̸`,nless:`≮`,nLl:`⋘̸`,nlsim:`≴`,nLt:`≪⃒`,nlt:`≮`,nltri:`⋪`,nltrie:`⋬`,nLtv:`≪̸`,nmid:`∤`,NoBreak:`⁠`,NonBreakingSpace:`\xA0`,Nopf:`ℕ`,nopf:`𝕟`,Not:`⫬`,not:`¬`,NotCongruent:`≢`,NotCupCap:`≭`,NotDoubleVerticalBar:`∦`,NotElement:`∉`,NotEqual:`≠`,NotEqualTilde:`≂̸`,NotExists:`∄`,NotGreater:`≯`,NotGreaterEqual:`≱`,NotGreaterFullEqual:`≧̸`,NotGreaterGreater:`≫̸`,NotGreaterLess:`≹`,NotGreaterSlantEqual:`⩾̸`,NotGreaterTilde:`≵`,NotHumpDownHump:`≎̸`,NotHumpEqual:`≏̸`,notin:`∉`,notindot:`⋵̸`,notinE:`⋹̸`,notinva:`∉`,notinvb:`⋷`,notinvc:`⋶`,NotLeftTriangle:`⋪`,NotLeftTriangleBar:`⧏̸`,NotLeftTriangleEqual:`⋬`,NotLess:`≮`,NotLessEqual:`≰`,NotLessGreater:`≸`,NotLessLess:`≪̸`,NotLessSlantEqual:`⩽̸`,NotLessTilde:`≴`,NotNestedGreaterGreater:`⪢̸`,NotNestedLessLess:`⪡̸`,notni:`∌`,notniva:`∌`,notnivb:`⋾`,notnivc:`⋽`,NotPrecedes:`⊀`,NotPrecedesEqual:`⪯̸`,NotPrecedesSlantEqual:`⋠`,NotReverseElement:`∌`,NotRightTriangle:`⋫`,NotRightTriangleBar:`⧐̸`,NotRightTriangleEqual:`⋭`,NotSquareSubset:`⊏̸`,NotSquareSubsetEqual:`⋢`,NotSquareSuperset:`⊐̸`,NotSquareSupersetEqual:`⋣`,NotSubset:`⊂⃒`,NotSubsetEqual:`⊈`,NotSucceeds:`⊁`,NotSucceedsEqual:`⪰̸`,NotSucceedsSlantEqual:`⋡`,NotSucceedsTilde:`≿̸`,NotSuperset:`⊃⃒`,NotSupersetEqual:`⊉`,NotTilde:`≁`,NotTildeEqual:`≄`,NotTildeFullEqual:`≇`,NotTildeTilde:`≉`,NotVerticalBar:`∤`,npar:`∦`,nparallel:`∦`,nparsl:`⫽⃥`,npart:`∂̸`,npolint:`⨔`,npr:`⊀`,nprcue:`⋠`,npre:`⪯̸`,nprec:`⊀`,npreceq:`⪯̸`,nrArr:`⇏`,nrarr:`↛`,nrarrc:`⤳̸`,nrarrw:`↝̸`,nRightarrow:`⇏`,nrightarrow:`↛`,nrtri:`⋫`,nrtrie:`⋭`,nsc:`⊁`,nsccue:`⋡`,nsce:`⪰̸`,Nscr:`𝒩`,nscr:`𝓃`,nshortmid:`∤`,nshortparallel:`∦`,nsim:`≁`,nsime:`≄`,nsimeq:`≄`,nsmid:`∤`,nspar:`∦`,nsqsube:`⋢`,nsqsupe:`⋣`,nsub:`⊄`,nsubE:`⫅̸`,nsube:`⊈`,nsubset:`⊂⃒`,nsubseteq:`⊈`,nsubseteqq:`⫅̸`,nsucc:`⊁`,nsucceq:`⪰̸`,nsup:`⊅`,nsupE:`⫆̸`,nsupe:`⊉`,nsupset:`⊃⃒`,nsupseteq:`⊉`,nsupseteqq:`⫆̸`,ntgl:`≹`,Ntilde:`Ñ`,ntilde:`ñ`,ntlg:`≸`,ntriangleleft:`⋪`,ntrianglelefteq:`⋬`,ntriangleright:`⋫`,ntrianglerighteq:`⋭`,Nu:`Ν`,nu:`ν`,num:`#`,numero:`№`,numsp:` `,nvap:`≍⃒`,nVDash:`⊯`,nVdash:`⊮`,nvDash:`⊭`,nvdash:`⊬`,nvge:`≥⃒`,nvgt:`>⃒`,nvHarr:`⤄`,nvinfin:`⧞`,nvlArr:`⤂`,nvle:`≤⃒`,nvlt:`<⃒`,nvltrie:`⊴⃒`,nvrArr:`⤃`,nvrtrie:`⊵⃒`,nvsim:`∼⃒`,nwarhk:`⤣`,nwArr:`⇖`,nwarr:`↖`,nwarrow:`↖`,nwnear:`⤧`,Oacute:`Ó`,oacute:`ó`,oast:`⊛`,ocir:`⊚`,Ocirc:`Ô`,ocirc:`ô`,Ocy:`О`,ocy:`о`,odash:`⊝`,Odblac:`Ő`,odblac:`ő`,odiv:`⨸`,odot:`⊙`,odsold:`⦼`,OElig:`Œ`,oelig:`œ`,ofcir:`⦿`,Ofr:`𝔒`,ofr:`𝔬`,ogon:`˛`,Ograve:`Ò`,ograve:`ò`,ogt:`⧁`,ohbar:`⦵`,ohm:`Ω`,oint:`∮`,olarr:`↺`,olcir:`⦾`,olcross:`⦻`,oline:`‾`,olt:`⧀`,Omacr:`Ō`,omacr:`ō`,Omega:`Ω`,omega:`ω`,Omicron:`Ο`,omicron:`ο`,omid:`⦶`,ominus:`⊖`,Oopf:`𝕆`,oopf:`𝕠`,opar:`⦷`,OpenCurlyDoubleQuote:`“`,OpenCurlyQuote:`‘`,operp:`⦹`,oplus:`⊕`,Or:`⩔`,or:`∨`,orarr:`↻`,ord:`⩝`,order:`ℴ`,orderof:`ℴ`,ordf:`ª`,ordm:`º`,origof:`⊶`,oror:`⩖`,orslope:`⩗`,orv:`⩛`,oS:`Ⓢ`,Oscr:`𝒪`,oscr:`ℴ`,Oslash:`Ø`,oslash:`ø`,osol:`⊘`,Otilde:`Õ`,otilde:`õ`,Otimes:`⨷`,otimes:`⊗`,otimesas:`⨶`,Ouml:`Ö`,ouml:`ö`,ovbar:`⌽`,OverBar:`‾`,OverBrace:`⏞`,OverBracket:`⎴`,OverParenthesis:`⏜`,par:`∥`,para:`¶`,parallel:`∥`,parsim:`⫳`,parsl:`⫽`,part:`∂`,PartialD:`∂`,Pcy:`П`,pcy:`п`,percnt:`%`,period:`.`,permil:`‰`,perp:`⊥`,pertenk:`‱`,Pfr:`𝔓`,pfr:`𝔭`,Phi:`Φ`,phi:`φ`,phiv:`ϕ`,phmmat:`ℳ`,phone:`☎`,Pi:`Π`,pi:`π`,pitchfork:`⋔`,piv:`ϖ`,planck:`ℏ`,planckh:`ℎ`,plankv:`ℏ`,plus:`+`,plusacir:`⨣`,plusb:`⊞`,pluscir:`⨢`,plusdo:`∔`,plusdu:`⨥`,pluse:`⩲`,PlusMinus:`±`,plusmn:`±`,plussim:`⨦`,plustwo:`⨧`,pm:`±`,Poincareplane:`ℌ`,pointint:`⨕`,Popf:`ℙ`,popf:`𝕡`,pound:`£`,Pr:`⪻`,pr:`≺`,prap:`⪷`,prcue:`≼`,prE:`⪳`,pre:`⪯`,prec:`≺`,precapprox:`⪷`,preccurlyeq:`≼`,Precedes:`≺`,PrecedesEqual:`⪯`,PrecedesSlantEqual:`≼`,PrecedesTilde:`≾`,preceq:`⪯`,precnapprox:`⪹`,precneqq:`⪵`,precnsim:`⋨`,precsim:`≾`,Prime:`″`,prime:`′`,primes:`ℙ`,prnap:`⪹`,prnE:`⪵`,prnsim:`⋨`,prod:`∏`,Product:`∏`,profalar:`⌮`,profline:`⌒`,profsurf:`⌓`,prop:`∝`,Proportion:`∷`,Proportional:`∝`,propto:`∝`,prsim:`≾`,prurel:`⊰`,Pscr:`𝒫`,pscr:`𝓅`,Psi:`Ψ`,psi:`ψ`,puncsp:` `,Qfr:`𝔔`,qfr:`𝔮`,qint:`⨌`,Qopf:`ℚ`,qopf:`𝕢`,qprime:`⁗`,Qscr:`𝒬`,qscr:`𝓆`,quaternions:`ℍ`,quatint:`⨖`,quest:`?`,questeq:`≟`,QUOT:`"`,quot:`"`,rAarr:`⇛`,race:`∽̱`,Racute:`Ŕ`,racute:`ŕ`,radic:`√`,raemptyv:`⦳`,Rang:`⟫`,rang:`⟩`,rangd:`⦒`,range:`⦥`,rangle:`⟩`,raquo:`»`,Rarr:`↠`,rArr:`⇒`,rarr:`→`,rarrap:`⥵`,rarrb:`⇥`,rarrbfs:`⤠`,rarrc:`⤳`,rarrfs:`⤞`,rarrhk:`↪`,rarrlp:`↬`,rarrpl:`⥅`,rarrsim:`⥴`,Rarrtl:`⤖`,rarrtl:`↣`,rarrw:`↝`,rAtail:`⤜`,ratail:`⤚`,ratio:`∶`,rationals:`ℚ`,RBarr:`⤐`,rBarr:`⤏`,rbarr:`⤍`,rbbrk:`❳`,rbrace:`}`,rbrack:`]`,rbrke:`⦌`,rbrksld:`⦎`,rbrkslu:`⦐`,Rcaron:`Ř`,rcaron:`ř`,Rcedil:`Ŗ`,rcedil:`ŗ`,rceil:`⌉`,rcub:`}`,Rcy:`Р`,rcy:`р`,rdca:`⤷`,rdldhar:`⥩`,rdquo:`”`,rdquor:`”`,rdsh:`↳`,Re:`ℜ`,real:`ℜ`,realine:`ℛ`,realpart:`ℜ`,reals:`ℝ`,rect:`▭`,REG:`®`,reg:`®`,ReverseElement:`∋`,ReverseEquilibrium:`⇋`,ReverseUpEquilibrium:`⥯`,rfisht:`⥽`,rfloor:`⌋`,Rfr:`ℜ`,rfr:`𝔯`,rHar:`⥤`,rhard:`⇁`,rharu:`⇀`,rharul:`⥬`,Rho:`Ρ`,rho:`ρ`,rhov:`ϱ`,RightAngleBracket:`⟩`,RightArrow:`→`,Rightarrow:`⇒`,rightarrow:`→`,RightArrowBar:`⇥`,RightArrowLeftArrow:`⇄`,rightarrowtail:`↣`,RightCeiling:`⌉`,RightDoubleBracket:`⟧`,RightDownTeeVector:`⥝`,RightDownVector:`⇂`,RightDownVectorBar:`⥕`,RightFloor:`⌋`,rightharpoondown:`⇁`,rightharpoonup:`⇀`,rightleftarrows:`⇄`,rightleftharpoons:`⇌`,rightrightarrows:`⇉`,rightsquigarrow:`↝`,RightTee:`⊢`,RightTeeArrow:`↦`,RightTeeVector:`⥛`,rightthreetimes:`⋌`,RightTriangle:`⊳`,RightTriangleBar:`⧐`,RightTriangleEqual:`⊵`,RightUpDownVector:`⥏`,RightUpTeeVector:`⥜`,RightUpVector:`↾`,RightUpVectorBar:`⥔`,RightVector:`⇀`,RightVectorBar:`⥓`,ring:`˚`,risingdotseq:`≓`,rlarr:`⇄`,rlhar:`⇌`,rlm:`‏`,rmoust:`⎱`,rmoustache:`⎱`,rnmid:`⫮`,roang:`⟭`,roarr:`⇾`,robrk:`⟧`,ropar:`⦆`,Ropf:`ℝ`,ropf:`𝕣`,roplus:`⨮`,rotimes:`⨵`,RoundImplies:`⥰`,rpar:`)`,rpargt:`⦔`,rppolint:`⨒`,rrarr:`⇉`,Rrightarrow:`⇛`,rsaquo:`›`,Rscr:`ℛ`,rscr:`𝓇`,Rsh:`↱`,rsh:`↱`,rsqb:`]`,rsquo:`’`,rsquor:`’`,rthree:`⋌`,rtimes:`⋊`,rtri:`▹`,rtrie:`⊵`,rtrif:`▸`,rtriltri:`⧎`,RuleDelayed:`⧴`,ruluhar:`⥨`,rx:`℞`,Sacute:`Ś`,sacute:`ś`,sbquo:`‚`,Sc:`⪼`,sc:`≻`,scap:`⪸`,Scaron:`Š`,scaron:`š`,sccue:`≽`,scE:`⪴`,sce:`⪰`,Scedil:`Ş`,scedil:`ş`,Scirc:`Ŝ`,scirc:`ŝ`,scnap:`⪺`,scnE:`⪶`,scnsim:`⋩`,scpolint:`⨓`,scsim:`≿`,Scy:`С`,scy:`с`,sdot:`⋅`,sdotb:`⊡`,sdote:`⩦`,searhk:`⤥`,seArr:`⇘`,searr:`↘`,searrow:`↘`,sect:`§`,semi:`;`,seswar:`⤩`,setminus:`∖`,setmn:`∖`,sext:`✶`,Sfr:`𝔖`,sfr:`𝔰`,sfrown:`⌢`,sharp:`♯`,SHCHcy:`Щ`,shchcy:`щ`,SHcy:`Ш`,shcy:`ш`,ShortDownArrow:`↓`,ShortLeftArrow:`←`,shortmid:`∣`,shortparallel:`∥`,ShortRightArrow:`→`,ShortUpArrow:`↑`,shy:`­`,Sigma:`Σ`,sigma:`σ`,sigmaf:`ς`,sigmav:`ς`,sim:`∼`,simdot:`⩪`,sime:`≃`,simeq:`≃`,simg:`⪞`,simgE:`⪠`,siml:`⪝`,simlE:`⪟`,simne:`≆`,simplus:`⨤`,simrarr:`⥲`,slarr:`←`,SmallCircle:`∘`,smallsetminus:`∖`,smashp:`⨳`,smeparsl:`⧤`,smid:`∣`,smile:`⌣`,smt:`⪪`,smte:`⪬`,smtes:`⪬︀`,SOFTcy:`Ь`,softcy:`ь`,sol:`/`,solb:`⧄`,solbar:`⌿`,Sopf:`𝕊`,sopf:`𝕤`,spades:`♠`,spadesuit:`♠`,spar:`∥`,sqcap:`⊓`,sqcaps:`⊓︀`,sqcup:`⊔`,sqcups:`⊔︀`,Sqrt:`√`,sqsub:`⊏`,sqsube:`⊑`,sqsubset:`⊏`,sqsubseteq:`⊑`,sqsup:`⊐`,sqsupe:`⊒`,sqsupset:`⊐`,sqsupseteq:`⊒`,squ:`□`,Square:`□`,square:`□`,SquareIntersection:`⊓`,SquareSubset:`⊏`,SquareSubsetEqual:`⊑`,SquareSuperset:`⊐`,SquareSupersetEqual:`⊒`,SquareUnion:`⊔`,squarf:`▪`,squf:`▪`,srarr:`→`,Sscr:`𝒮`,sscr:`𝓈`,ssetmn:`∖`,ssmile:`⌣`,sstarf:`⋆`,Star:`⋆`,star:`☆`,starf:`★`,straightepsilon:`ϵ`,straightphi:`ϕ`,strns:`¯`,Sub:`⋐`,sub:`⊂`,subdot:`⪽`,subE:`⫅`,sube:`⊆`,subedot:`⫃`,submult:`⫁`,subnE:`⫋`,subne:`⊊`,subplus:`⪿`,subrarr:`⥹`,Subset:`⋐`,subset:`⊂`,subseteq:`⊆`,subseteqq:`⫅`,SubsetEqual:`⊆`,subsetneq:`⊊`,subsetneqq:`⫋`,subsim:`⫇`,subsub:`⫕`,subsup:`⫓`,succ:`≻`,succapprox:`⪸`,succcurlyeq:`≽`,Succeeds:`≻`,SucceedsEqual:`⪰`,SucceedsSlantEqual:`≽`,SucceedsTilde:`≿`,succeq:`⪰`,succnapprox:`⪺`,succneqq:`⪶`,succnsim:`⋩`,succsim:`≿`,SuchThat:`∋`,Sum:`∑`,sum:`∑`,sung:`♪`,Sup:`⋑`,sup:`⊃`,sup1:`¹`,sup2:`²`,sup3:`³`,supdot:`⪾`,supdsub:`⫘`,supE:`⫆`,supe:`⊇`,supedot:`⫄`,Superset:`⊃`,SupersetEqual:`⊇`,suphsol:`⟉`,suphsub:`⫗`,suplarr:`⥻`,supmult:`⫂`,supnE:`⫌`,supne:`⊋`,supplus:`⫀`,Supset:`⋑`,supset:`⊃`,supseteq:`⊇`,supseteqq:`⫆`,supsetneq:`⊋`,supsetneqq:`⫌`,supsim:`⫈`,supsub:`⫔`,supsup:`⫖`,swarhk:`⤦`,swArr:`⇙`,swarr:`↙`,swarrow:`↙`,swnwar:`⤪`,szlig:`ß`,Tab:`	`,target:`⌖`,Tau:`Τ`,tau:`τ`,tbrk:`⎴`,Tcaron:`Ť`,tcaron:`ť`,Tcedil:`Ţ`,tcedil:`ţ`,Tcy:`Т`,tcy:`т`,tdot:`⃛`,telrec:`⌕`,Tfr:`𝔗`,tfr:`𝔱`,there4:`∴`,Therefore:`∴`,therefore:`∴`,Theta:`Θ`,theta:`θ`,thetasym:`ϑ`,thetav:`ϑ`,thickapprox:`≈`,thicksim:`∼`,ThickSpace:`  `,thinsp:` `,ThinSpace:` `,thkap:`≈`,thksim:`∼`,THORN:`Þ`,thorn:`þ`,Tilde:`∼`,tilde:`˜`,TildeEqual:`≃`,TildeFullEqual:`≅`,TildeTilde:`≈`,times:`×`,timesb:`⊠`,timesbar:`⨱`,timesd:`⨰`,tint:`∭`,toea:`⤨`,top:`⊤`,topbot:`⌶`,topcir:`⫱`,Topf:`𝕋`,topf:`𝕥`,topfork:`⫚`,tosa:`⤩`,tprime:`‴`,TRADE:`™`,trade:`™`,triangle:`▵`,triangledown:`▿`,triangleleft:`◃`,trianglelefteq:`⊴`,triangleq:`≜`,triangleright:`▹`,trianglerighteq:`⊵`,tridot:`◬`,trie:`≜`,triminus:`⨺`,TripleDot:`⃛`,triplus:`⨹`,trisb:`⧍`,tritime:`⨻`,trpezium:`⏢`,Tscr:`𝒯`,tscr:`𝓉`,TScy:`Ц`,tscy:`ц`,TSHcy:`Ћ`,tshcy:`ћ`,Tstrok:`Ŧ`,tstrok:`ŧ`,twixt:`≬`,twoheadleftarrow:`↞`,twoheadrightarrow:`↠`,Uacute:`Ú`,uacute:`ú`,Uarr:`↟`,uArr:`⇑`,uarr:`↑`,Uarrocir:`⥉`,Ubrcy:`Ў`,ubrcy:`ў`,Ubreve:`Ŭ`,ubreve:`ŭ`,Ucirc:`Û`,ucirc:`û`,Ucy:`У`,ucy:`у`,udarr:`⇅`,Udblac:`Ű`,udblac:`ű`,udhar:`⥮`,ufisht:`⥾`,Ufr:`𝔘`,ufr:`𝔲`,Ugrave:`Ù`,ugrave:`ù`,uHar:`⥣`,uharl:`↿`,uharr:`↾`,uhblk:`▀`,ulcorn:`⌜`,ulcorner:`⌜`,ulcrop:`⌏`,ultri:`◸`,Umacr:`Ū`,umacr:`ū`,uml:`¨`,UnderBar:`_`,UnderBrace:`⏟`,UnderBracket:`⎵`,UnderParenthesis:`⏝`,Union:`⋃`,UnionPlus:`⊎`,Uogon:`Ų`,uogon:`ų`,Uopf:`𝕌`,uopf:`𝕦`,UpArrow:`↑`,Uparrow:`⇑`,uparrow:`↑`,UpArrowBar:`⤒`,UpArrowDownArrow:`⇅`,UpDownArrow:`↕`,Updownarrow:`⇕`,updownarrow:`↕`,UpEquilibrium:`⥮`,upharpoonleft:`↿`,upharpoonright:`↾`,uplus:`⊎`,UpperLeftArrow:`↖`,UpperRightArrow:`↗`,Upsi:`ϒ`,upsi:`υ`,upsih:`ϒ`,Upsilon:`Υ`,upsilon:`υ`,UpTee:`⊥`,UpTeeArrow:`↥`,upuparrows:`⇈`,urcorn:`⌝`,urcorner:`⌝`,urcrop:`⌎`,Uring:`Ů`,uring:`ů`,urtri:`◹`,Uscr:`𝒰`,uscr:`𝓊`,utdot:`⋰`,Utilde:`Ũ`,utilde:`ũ`,utri:`▵`,utrif:`▴`,uuarr:`⇈`,Uuml:`Ü`,uuml:`ü`,uwangle:`⦧`,vangrt:`⦜`,varepsilon:`ϵ`,varkappa:`ϰ`,varnothing:`∅`,varphi:`ϕ`,varpi:`ϖ`,varpropto:`∝`,vArr:`⇕`,varr:`↕`,varrho:`ϱ`,varsigma:`ς`,varsubsetneq:`⊊︀`,varsubsetneqq:`⫋︀`,varsupsetneq:`⊋︀`,varsupsetneqq:`⫌︀`,vartheta:`ϑ`,vartriangleleft:`⊲`,vartriangleright:`⊳`,Vbar:`⫫`,vBar:`⫨`,vBarv:`⫩`,Vcy:`В`,vcy:`в`,VDash:`⊫`,Vdash:`⊩`,vDash:`⊨`,vdash:`⊢`,Vdashl:`⫦`,Vee:`⋁`,vee:`∨`,veebar:`⊻`,veeeq:`≚`,vellip:`⋮`,Verbar:`‖`,verbar:`|`,Vert:`‖`,vert:`|`,VerticalBar:`∣`,VerticalLine:`|`,VerticalSeparator:`❘`,VerticalTilde:`≀`,VeryThinSpace:` `,Vfr:`𝔙`,vfr:`𝔳`,vltri:`⊲`,vnsub:`⊂⃒`,vnsup:`⊃⃒`,Vopf:`𝕍`,vopf:`𝕧`,vprop:`∝`,vrtri:`⊳`,Vscr:`𝒱`,vscr:`𝓋`,vsubnE:`⫋︀`,vsubne:`⊊︀`,vsupnE:`⫌︀`,vsupne:`⊋︀`,Vvdash:`⊪`,vzigzag:`⦚`,Wcirc:`Ŵ`,wcirc:`ŵ`,wedbar:`⩟`,Wedge:`⋀`,wedge:`∧`,wedgeq:`≙`,weierp:`℘`,Wfr:`𝔚`,wfr:`𝔴`,Wopf:`𝕎`,wopf:`𝕨`,wp:`℘`,wr:`≀`,wreath:`≀`,Wscr:`𝒲`,wscr:`𝓌`,xcap:`⋂`,xcirc:`◯`,xcup:`⋃`,xdtri:`▽`,Xfr:`𝔛`,xfr:`𝔵`,xhArr:`⟺`,xharr:`⟷`,Xi:`Ξ`,xi:`ξ`,xlArr:`⟸`,xlarr:`⟵`,xmap:`⟼`,xnis:`⋻`,xodot:`⨀`,Xopf:`𝕏`,xopf:`𝕩`,xoplus:`⨁`,xotime:`⨂`,xrArr:`⟹`,xrarr:`⟶`,Xscr:`𝒳`,xscr:`𝓍`,xsqcup:`⨆`,xuplus:`⨄`,xutri:`△`,xvee:`⋁`,xwedge:`⋀`,Yacute:`Ý`,yacute:`ý`,YAcy:`Я`,yacy:`я`,Ycirc:`Ŷ`,ycirc:`ŷ`,Ycy:`Ы`,ycy:`ы`,yen:`¥`,Yfr:`𝔜`,yfr:`𝔶`,YIcy:`Ї`,yicy:`ї`,Yopf:`𝕐`,yopf:`𝕪`,Yscr:`𝒴`,yscr:`𝓎`,YUcy:`Ю`,yucy:`ю`,Yuml:`Ÿ`,yuml:`ÿ`,Zacute:`Ź`,zacute:`ź`,Zcaron:`Ž`,zcaron:`ž`,Zcy:`З`,zcy:`з`,Zdot:`Ż`,zdot:`ż`,zeetrf:`ℨ`,ZeroWidthSpace:`​`,Zeta:`Ζ`,zeta:`ζ`,Zfr:`ℨ`,zfr:`𝔷`,ZHcy:`Ж`,zhcy:`ж`,zigrarr:`⇝`,Zopf:`ℤ`,zopf:`𝕫`,Zscr:`𝒵`,zscr:`𝓏`,zwj:`‍`,zwnj:`‌`}),e.entityMap=e.HTML_ENTITIES})),Jo=s((e=>{var t=Go().NAMESPACE,n=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,r=RegExp(`[\\-\\.0-9`+n.source.slice(1,-1)+`\\u00B7\\u0300-\\u036F\\u203F-\\u2040]`),i=RegExp(`^`+n.source+r.source+`*(?::`+n.source+r.source+`*)?$`),a=0,o=1,s=2,c=3,l=4,u=5,d=6,f=7;function p(e,t){this.message=e,this.locator=t,Error.captureStackTrace&&Error.captureStackTrace(this,p)}p.prototype=Error(),p.prototype.name=p.name;function m(){}m.prototype={parse:function(e,t,n){var r=this.domBuilder;r.startDocument(),x(t,t={}),h(e,t,n,r,this.errorHandler),r.endDocument()}};function h(e,n,r,i,a){function o(e){if(e>65535){e-=65536;var t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}else return String.fromCharCode(e)}function s(e){var t=e.slice(1,-1);return Object.hasOwnProperty.call(r,t)?r[t]:t.charAt(0)===`#`?o(parseInt(t.substr(1).replace(`x`,`0x`))):(a.error(`entity not found:`+e),e)}function c(t){if(t>T){var n=e.substring(T,t).replace(/&#?\w+;/g,s);m&&l(T),i.characters(n,0,t-T),T=t}}function l(t,n){for(;t>=d&&(n=f.exec(e));)u=n.index,d=u+n[0].length,m.lineNumber++;m.columnNumber=t-u+1}for(var u=0,d=0,f=/.*(?:\r\n?|\n)|.*$/g,m=i.locator,h=[{currentNSMap:n}],x={},T=0;;){try{var E=e.indexOf(`<`,T);if(E<0){if(!e.substr(T).match(/^\s*$/)){var D=i.doc,O=D.createTextNode(e.substr(T));D.appendChild(O),i.currentElement=O}return}switch(E>T&&c(E),e.charAt(E+1)){case`/`:var k=e.indexOf(`>`,E+3),A=e.substring(E+2,k).replace(/[ \t\n\r]+$/g,``),j=h.pop();k<0?(A=e.substring(E+2).replace(/[\s<].*/,``),a.error(`end tag name: `+A+` is not complete:`+j.tagName),k=E+1+A.length):A.match(/\s</)&&(A=A.replace(/[\s<].*/,``),a.error(`end tag name: `+A+` maybe not complete`),k=E+1+A.length);var M=j.localNSMap,N=j.tagName==A;if(N||j.tagName&&j.tagName.toLowerCase()==A.toLowerCase()){if(i.endElement(j.uri,j.localName,A),M)for(var P in M)Object.prototype.hasOwnProperty.call(M,P)&&i.endPrefixMapping(P);N||a.fatalError(`end tag name: `+A+` is not match the current start tagName:`+j.tagName)}else h.push(j);k++;break;case`?`:m&&l(E),k=C(e,E,i);break;case`!`:m&&l(E),k=S(e,E,i,a);break;default:m&&l(E);var F=new w,I=h[h.length-1].currentNSMap,k=_(e,E,F,I,s,a),L=F.length;if(!F.closed&&b(e,k,F.tagName,x)&&(F.closed=!0,r.nbsp||a.warning(`unclosed xml attribute`)),m&&L){for(var R=g(m,{}),z=0;z<L;z++){var B=F[z];l(B.offset),B.locator=g(m,{})}i.locator=R,v(F,i,I)&&h.push(F),i.locator=m}else v(F,i,I)&&h.push(F);t.isHTML(F.uri)&&!F.closed?k=y(e,k,F.tagName,s,i):k++}}catch(e){if(e instanceof p)throw e;a.error(`element parse error: `+e),k=-1}k>T?T=k:c(Math.max(E,T)+1)}}function g(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function _(e,n,r,i,p,m){function h(e,t,n){r.attributeNames.hasOwnProperty(e)&&m.fatalError(`Attribute `+e+` redefined`),r.addValue(e,t.replace(/[\t\n\r]/g,` `).replace(/&#?\w+;/g,p),n)}for(var g,_,v=++n,y=a;;){var b=e.charAt(v);switch(b){case`=`:if(y===o)g=e.slice(n,v),y=c;else if(y===s)y=c;else throw Error(`attribute equal must after attrName`);break;case`'`:case`"`:if(y===c||y===o)if(y===o&&(m.warning(`attribute value must after "="`),g=e.slice(n,v)),n=v+1,v=e.indexOf(b,n),v>0)_=e.slice(n,v),h(g,_,n-1),y=u;else throw Error(`attribute value no end '`+b+`' match`);else if(y==l)_=e.slice(n,v),h(g,_,n),m.warning(`attribute "`+g+`" missed start quot(`+b+`)!!`),n=v+1,y=u;else throw Error(`attribute value must after "="`);break;case`/`:switch(y){case a:r.setTagName(e.slice(n,v));case u:case d:case f:y=f,r.closed=!0;case l:case o:break;case s:r.closed=!0;break;default:throw Error(`attribute invalid close char('/')`)}break;case``:return m.error(`unexpected end of input`),y==a&&r.setTagName(e.slice(n,v)),v;case`>`:switch(y){case a:r.setTagName(e.slice(n,v));case u:case d:case f:break;case l:case o:_=e.slice(n,v),_.slice(-1)===`/`&&(r.closed=!0,_=_.slice(0,-1));case s:y===s&&(_=g),y==l?(m.warning(`attribute "`+_+`" missed quot(")!`),h(g,_,n)):((!t.isHTML(i[``])||!_.match(/^(?:disabled|checked|selected)$/i))&&m.warning(`attribute "`+_+`" missed value!! "`+_+`" instead!!`),h(_,_,n));break;case c:throw Error(`attribute value missed!!`)}return v;case``:b=` `;default:if(b<=` `)switch(y){case a:r.setTagName(e.slice(n,v)),y=d;break;case o:g=e.slice(n,v),y=s;break;case l:var _=e.slice(n,v);m.warning(`attribute "`+_+`" missed quot(")!!`),h(g,_,n);case u:y=d;break}else switch(y){case s:r.tagName,(!t.isHTML(i[``])||!g.match(/^(?:disabled|checked|selected)$/i))&&m.warning(`attribute "`+g+`" missed value!! "`+g+`" instead2!!`),h(g,g,n),n=v,y=o;break;case u:m.warning(`attribute space is required"`+g+`"!!`);case d:y=o,n=v;break;case c:y=l,n=v;break;case f:throw Error(`elements closed character '/' and '>' must be connected to`)}}v++}}function v(e,n,r){for(var i=e.tagName,a=null,o=e.length;o--;){var s=e[o],c=s.qName,l=s.value,u=c.indexOf(`:`);if(u>0)var d=s.prefix=c.slice(0,u),f=c.slice(u+1),p=d===`xmlns`&&f;else f=c,d=null,p=c===`xmlns`&&``;s.localName=f,p!==!1&&(a??(a={},x(r,r={})),r[p]=a[p]=l,s.uri=t.XMLNS,n.startPrefixMapping(p,l))}for(var o=e.length;o--;){s=e[o];var d=s.prefix;d&&(d===`xml`&&(s.uri=t.XML),d!==`xmlns`&&(s.uri=r[d||``]))}var u=i.indexOf(`:`);u>0?(d=e.prefix=i.slice(0,u),f=e.localName=i.slice(u+1)):(d=null,f=e.localName=i);var m=e.uri=r[d||``];if(n.startElement(m,f,i,e),e.closed){if(n.endElement(m,f,i),a)for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&n.endPrefixMapping(d)}else return e.currentNSMap=r,e.localNSMap=a,!0}function y(e,t,n,r,i){if(/^(?:script|textarea)$/i.test(n)){var a=e.indexOf(`</`+n+`>`,t),o=e.substring(t+1,a);if(/[&<]/.test(o))return/^script$/i.test(n)?(i.characters(o,0,o.length),a):(o=o.replace(/&#?\w+;/g,r),i.characters(o,0,o.length),a)}return t+1}function b(e,t,n,r){var i=r[n];return i??(i=e.lastIndexOf(`</`+n+`>`),i<t&&(i=e.lastIndexOf(`</`+n)),r[n]=i),i<t}function x(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}function S(e,t,n,r){switch(e.charAt(t+2)){case`-`:if(e.charAt(t+3)===`-`){var i=e.indexOf(`-->`,t+4);return i>t?(n.comment(e,t+4,i-t-4),i+3):(r.error(`Unclosed comment`),-1)}else return-1;default:if(e.substr(t+3,6)==`CDATA[`){var i=e.indexOf(`]]>`,t+9);return n.startCDATA(),n.characters(e,t+9,i-t-9),n.endCDATA(),i+3}var a=T(e,t),o=a.length;if(o>1&&/!doctype/i.test(a[0][0])){var s=a[1][0],c=!1,l=!1;o>3&&(/^public$/i.test(a[2][0])?(c=a[3][0],l=o>4&&a[4][0]):/^system$/i.test(a[2][0])&&(l=a[3][0]));var u=a[o-1];return n.startDTD(s,c,l),n.endDTD(),u.index+u[0].length}}return-1}function C(e,t,n){var r=e.indexOf(`?>`,t);if(r){var i=e.substring(t,r).match(/^<\?(\S*)\s*([\s\S]*?)$/);return i?(i[0].length,n.processingInstruction(i[1],i[2]),r+2):-1}return-1}function w(){this.attributeNames={}}w.prototype={setTagName:function(e){if(!i.test(e))throw Error(`invalid tagName:`+e);this.tagName=e},addValue:function(e,t,n){if(!i.test(e))throw Error(`invalid attribute:`+e);this.attributeNames[e]=this.length,this[this.length++]={qName:e,value:t,offset:n}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}};function T(e,t){var n,r=[],i=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(i.lastIndex=t,i.exec(e);n=i.exec(e);)if(r.push(n),n[1])return r}e.XMLReader=m,e.ParseError=p})),Yo=s((e=>{var t=Go(),n=Ko(),r=qo(),i=Jo(),a=n.DOMImplementation,o=t.NAMESPACE,s=i.ParseError,c=i.XMLReader;function l(e){return e.replace(/\r[\n\u0085]/g,`
`).replace(/[\r\u0085\u2028]/g,`
`)}function u(e){this.options=e||{locator:{}}}u.prototype.parseFromString=function(e,t){var n=this.options,i=new c,a=n.domBuilder||new f,s=n.errorHandler,u=n.locator,p=n.xmlns||{},m=/\/x?html?$/.test(t),h=m?r.HTML_ENTITIES:r.XML_ENTITIES;u&&a.setDocumentLocator(u),i.errorHandler=d(s,a,u),i.domBuilder=n.domBuilder||a,m&&(p[``]=o.HTML),p.xml=p.xml||o.XML;var g=n.normalizeLineEndings||l;return e&&typeof e==`string`?i.parse(g(e),p,h):i.errorHandler.error(`invalid doc source`),a.doc};function d(e,t,n){if(!e){if(t instanceof f)return t;e=t}var r={},i=e instanceof Function;n||={};function a(t){var a=e[t];!a&&i&&(a=e.length==2?function(n){e(t,n)}:e),r[t]=a&&function(e){a(`[xmldom `+t+`]	`+e+m(n))}||function(){}}return a(`warning`),a(`error`),a(`fatalError`),r}function f(){this.cdata=!1}function p(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}f.prototype={startDocument:function(){this.doc=new a().createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,n,r){var i=this.doc,a=i.createElementNS(e,n||t),o=r.length;g(this,a),this.currentElement=a,this.locator&&p(this.locator,a);for(var s=0;s<o;s++){var e=r.getURI(s),c=r.getValue(s),n=r.getQName(s),l=i.createAttributeNS(e,n);this.locator&&p(r.getLocator(s),l),l.value=l.nodeValue=c,a.setAttributeNode(l)}},endElement:function(e,t,n){var r=this.currentElement;r.tagName,this.currentElement=r.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var n=this.doc.createProcessingInstruction(e,t);this.locator&&p(this.locator,n),g(this,n)},ignorableWhitespace:function(e,t,n){},characters:function(e,t,n){if(e=h.apply(this,arguments),e){if(this.cdata)var r=this.doc.createCDATASection(e);else var r=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(r):/^\s*$/.test(e)&&this.doc.appendChild(r),this.locator&&p(this.locator,r)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,n){e=h.apply(this,arguments);var r=this.doc.createComment(e);this.locator&&p(this.locator,r),g(this,r)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,n){var r=this.doc.implementation;if(r&&r.createDocumentType){var i=r.createDocumentType(e,t,n);this.locator&&p(this.locator,i),g(this,i),this.doc.doctype=i}},warning:function(e){console.warn(`[xmldom warning]	`+e,m(this.locator))},error:function(e){console.error(`[xmldom error]	`+e,m(this.locator))},fatalError:function(e){throw new s(e,this.locator)}};function m(e){if(e)return`
@`+(e.systemId||``)+`#[line:`+e.lineNumber+`,col:`+e.columnNumber+`]`}function h(e,t,n){return typeof e==`string`?e.substr(t,n):e.length>=t+n||t?new java.lang.String(e,t,n)+``:e}`endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl`.replace(/\w+/g,function(e){f.prototype[e]=function(){return null}});function g(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}e.__DOMHandler=f,e.normalizeLineEndings=l,e.DOMParser=u})),Xo=s((e=>{var t=Ko();e.DOMImplementation=t.DOMImplementation,e.XMLSerializer=t.XMLSerializer,e.DOMParser=Yo().DOMParser})),Zo=s((e=>{var t=Xo(),n=Ko();function r(e){var n=null,r=new t.DOMParser({errorHandler:function(e,t){n={level:e,message:t}}}).parseFromString(e);if(n===null)return r;throw Error(n.level+`: `+n.message)}e.parseFromString=r,e.Node=n.Node})),Qo=s((e=>{var t=Ro(),n=(Q(),d(Z)),r=Zo(),i=Wo(),a=i.Element;e.readString=s;var o=r.Node;function s(e,s){s||={};try{var c=r.parseFromString(e,`text/xml`)}catch(e){return t.reject(e)}if(c.documentElement.tagName===`parsererror`)return t.resolve(Error(c.documentElement.textContent));function l(e){switch(e.nodeType){case o.ELEMENT_NODE:return u(e);case o.TEXT_NODE:return i.text(e.nodeValue)}}function u(e){var t=d(e),r=[];n.forEach(e.childNodes,function(e){var t=l(e);t&&r.push(t)});var i={};return n.forEach(e.attributes,function(e){i[d(e)]=e.value}),new a(t,i,r)}function d(e){if(e.namespaceURI){var t=s[e.namespaceURI];return(t?t+`:`:`{`+e.namespaceURI+`}`)+e.localName}else return e.localName}return t.resolve(l(c.documentElement))}})),$o=s(((e,t)=>{(function(){var e,n,r,i,a,o,s,c=[].slice,l={}.hasOwnProperty;e=function(){var e,t,n,r,i,o=arguments[0];if(i=2<=arguments.length?c.call(arguments,1):[],a(Object.assign))Object.assign.apply(null,arguments);else for(e=0,n=i.length;e<n;e++)if(r=i[e],r!=null)for(t in r)l.call(r,t)&&(o[t]=r[t]);return o},a=function(e){return!!e&&Object.prototype.toString.call(e)===`[object Function]`},o=function(e){var t;return!!e&&((t=typeof e)==`function`||t===`object`)},r=function(e){return a(Array.isArray)?Array.isArray(e):Object.prototype.toString.call(e)===`[object Array]`},i=function(e){var t;if(r(e))return!e.length;for(t in e)if(l.call(e,t))return!1;return!0},s=function(e){var t,n;return o(e)&&(n=Object.getPrototypeOf(e))&&(t=n.constructor)&&typeof t==`function`&&t instanceof t&&Function.prototype.toString.call(t)===Function.prototype.toString.call(Object)},n=function(e){return a(e.valueOf)?e.valueOf():e},t.exports.assign=e,t.exports.isFunction=a,t.exports.isObject=o,t.exports.isArray=r,t.exports.isEmpty=i,t.exports.isPlainObject=s,t.exports.getValue=n}).call(e)})),es=s(((e,t)=>{(function(){t.exports=(function(){function e(e,t,n){if(this.options=e.options,this.stringify=e.stringify,this.parent=e,t==null)throw Error(`Missing attribute name. `+this.debugInfo(t));if(n==null)throw Error(`Missing attribute value. `+this.debugInfo(t));this.name=this.stringify.attName(t),this.value=this.stringify.attValue(n)}return e.prototype.clone=function(){return Object.create(this)},e.prototype.toString=function(e){return this.options.writer.set(e).attribute(this)},e.prototype.debugInfo=function(e){return e||=this.name,e==null?`parent: <`+this.parent.name+`>`:`attribute: {`+e+`}, parent: <`+this.parent.name+`>`},e})()}).call(e)})),ts=s(((e,t)=>{(function(){var e,n,r,i,a,o,s=function(e,t){for(var n in t)c.call(t,n)&&(e[n]=t[n]);function r(){this.constructor=e}return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},c={}.hasOwnProperty;o=$o(),a=o.isObject,i=o.isFunction,r=o.getValue,n=ms(),e=es(),t.exports=(function(t){s(n,t);function n(e,t,r){if(n.__super__.constructor.call(this,e),t==null)throw Error(`Missing element name. `+this.debugInfo());this.name=this.stringify.eleName(t),this.attributes={},r!=null&&this.attribute(r),e.isDocument&&(this.isRoot=!0,this.documentObject=e,e.rootObject=this)}return n.prototype.clone=function(){var e,t,n=Object.create(this),r;for(t in n.isRoot&&(n.documentObject=null),n.attributes={},r=this.attributes,r)c.call(r,t)&&(e=r[t],n.attributes[t]=e.clone());return n.children=[],this.children.forEach(function(e){var t=e.clone();return t.parent=n,n.children.push(t)}),n},n.prototype.attribute=function(t,n){var o,s;if(t!=null&&(t=r(t)),a(t))for(o in t)c.call(t,o)&&(s=t[o],this.attribute(o,s));else i(n)&&(n=n.apply()),(!this.options.skipNullAttributes||n!=null)&&(this.attributes[t]=new e(this,t,n));return this},n.prototype.removeAttribute=function(e){var t,n,i;if(e==null)throw Error(`Missing attribute name. `+this.debugInfo());if(e=r(e),Array.isArray(e))for(n=0,i=e.length;n<i;n++)t=e[n],delete this.attributes[t];else delete this.attributes[e];return this},n.prototype.toString=function(e){return this.options.writer.set(e).element(this)},n.prototype.att=function(e,t){return this.attribute(e,t)},n.prototype.a=function(e,t){return this.attribute(e,t)},n})(n)}).call(e)})),ns=s(((e,t)=>{(function(){var e,n=function(e,t){for(var n in t)r.call(t,n)&&(e[n]=t[n]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r={}.hasOwnProperty;e=ms(),t.exports=(function(e){n(t,e);function t(e,n){if(t.__super__.constructor.call(this,e),n==null)throw Error(`Missing CDATA text. `+this.debugInfo());this.text=this.stringify.cdata(n)}return t.prototype.clone=function(){return Object.create(this)},t.prototype.toString=function(e){return this.options.writer.set(e).cdata(this)},t})(e)}).call(e)})),rs=s(((e,t)=>{(function(){var e,n=function(e,t){for(var n in t)r.call(t,n)&&(e[n]=t[n]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r={}.hasOwnProperty;e=ms(),t.exports=(function(e){n(t,e);function t(e,n){if(t.__super__.constructor.call(this,e),n==null)throw Error(`Missing comment text. `+this.debugInfo());this.text=this.stringify.comment(n)}return t.prototype.clone=function(){return Object.create(this)},t.prototype.toString=function(e){return this.options.writer.set(e).comment(this)},t})(e)}).call(e)})),is=s(((e,t)=>{(function(){var e,n,r=function(e,t){for(var n in t)i.call(t,n)&&(e[n]=t[n]);function r(){this.constructor=e}return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},i={}.hasOwnProperty;n=$o().isObject,e=ms(),t.exports=(function(e){r(t,e);function t(e,r,i,a){var o;t.__super__.constructor.call(this,e),n(r)&&(o=r,r=o.version,i=o.encoding,a=o.standalone),r||=`1.0`,this.version=this.stringify.xmlVersion(r),i!=null&&(this.encoding=this.stringify.xmlEncoding(i)),a!=null&&(this.standalone=this.stringify.xmlStandalone(a))}return t.prototype.toString=function(e){return this.options.writer.set(e).declaration(this)},t})(e)}).call(e)})),as=s(((e,t)=>{(function(){var e,n=function(e,t){for(var n in t)r.call(t,n)&&(e[n]=t[n]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r={}.hasOwnProperty;e=ms(),t.exports=(function(e){n(t,e);function t(e,n,r,i,a,o){if(t.__super__.constructor.call(this,e),n==null)throw Error(`Missing DTD element name. `+this.debugInfo());if(r==null)throw Error(`Missing DTD attribute name. `+this.debugInfo(n));if(!i)throw Error(`Missing DTD attribute type. `+this.debugInfo(n));if(!a)throw Error(`Missing DTD attribute default. `+this.debugInfo(n));if(a.indexOf(`#`)!==0&&(a=`#`+a),!a.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw Error(`Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. `+this.debugInfo(n));if(o&&!a.match(/^(#FIXED|#DEFAULT)$/))throw Error(`Default value only applies to #FIXED or #DEFAULT. `+this.debugInfo(n));this.elementName=this.stringify.eleName(n),this.attributeName=this.stringify.attName(r),this.attributeType=this.stringify.dtdAttType(i),this.defaultValue=this.stringify.dtdAttDefault(o),this.defaultValueType=a}return t.prototype.toString=function(e){return this.options.writer.set(e).dtdAttList(this)},t})(e)}).call(e)})),os=s(((e,t)=>{(function(){var e,n,r=function(e,t){for(var n in t)i.call(t,n)&&(e[n]=t[n]);function r(){this.constructor=e}return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},i={}.hasOwnProperty;n=$o().isObject,e=ms(),t.exports=(function(e){r(t,e);function t(e,r,i,a){if(t.__super__.constructor.call(this,e),i==null)throw Error(`Missing DTD entity name. `+this.debugInfo(i));if(a==null)throw Error(`Missing DTD entity value. `+this.debugInfo(i));if(this.pe=!!r,this.name=this.stringify.eleName(i),!n(a))this.value=this.stringify.dtdEntityValue(a);else{if(!a.pubID&&!a.sysID)throw Error(`Public and/or system identifiers are required for an external entity. `+this.debugInfo(i));if(a.pubID&&!a.sysID)throw Error(`System identifier is required for a public external entity. `+this.debugInfo(i));if(a.pubID!=null&&(this.pubID=this.stringify.dtdPubID(a.pubID)),a.sysID!=null&&(this.sysID=this.stringify.dtdSysID(a.sysID)),a.nData!=null&&(this.nData=this.stringify.dtdNData(a.nData)),this.pe&&this.nData)throw Error(`Notation declaration is not allowed in a parameter entity. `+this.debugInfo(i))}}return t.prototype.toString=function(e){return this.options.writer.set(e).dtdEntity(this)},t})(e)}).call(e)})),ss=s(((e,t)=>{(function(){var e,n=function(e,t){for(var n in t)r.call(t,n)&&(e[n]=t[n]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r={}.hasOwnProperty;e=ms(),t.exports=(function(e){n(t,e);function t(e,n,r){if(t.__super__.constructor.call(this,e),n==null)throw Error(`Missing DTD element name. `+this.debugInfo());r||=`(#PCDATA)`,Array.isArray(r)&&(r=`(`+r.join(`,`)+`)`),this.name=this.stringify.eleName(n),this.value=this.stringify.dtdElementValue(r)}return t.prototype.toString=function(e){return this.options.writer.set(e).dtdElement(this)},t})(e)}).call(e)})),cs=s(((e,t)=>{(function(){var e,n=function(e,t){for(var n in t)r.call(t,n)&&(e[n]=t[n]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r={}.hasOwnProperty;e=ms(),t.exports=(function(e){n(t,e);function t(e,n,r){if(t.__super__.constructor.call(this,e),n==null)throw Error(`Missing DTD notation name. `+this.debugInfo(n));if(!r.pubID&&!r.sysID)throw Error(`Public or system identifiers are required for an external entity. `+this.debugInfo(n));this.name=this.stringify.eleName(n),r.pubID!=null&&(this.pubID=this.stringify.dtdPubID(r.pubID)),r.sysID!=null&&(this.sysID=this.stringify.dtdSysID(r.sysID))}return t.prototype.toString=function(e){return this.options.writer.set(e).dtdNotation(this)},t})(e)}).call(e)})),ls=s(((e,t)=>{(function(){var e,n,r,i,a,o,s=function(e,t){for(var n in t)c.call(t,n)&&(e[n]=t[n]);function r(){this.constructor=e}return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},c={}.hasOwnProperty;o=$o().isObject,a=ms(),e=as(),r=os(),n=ss(),i=cs(),t.exports=(function(t){s(a,t);function a(e,t,n){var r,i;a.__super__.constructor.call(this,e),this.name=`!DOCTYPE`,this.documentObject=e,o(t)&&(r=t,t=r.pubID,n=r.sysID),n??(i=[t,n],n=i[0],t=i[1]),t!=null&&(this.pubID=this.stringify.dtdPubID(t)),n!=null&&(this.sysID=this.stringify.dtdSysID(n))}return a.prototype.element=function(e,t){var r=new n(this,e,t);return this.children.push(r),this},a.prototype.attList=function(t,n,r,i,a){var o=new e(this,t,n,r,i,a);return this.children.push(o),this},a.prototype.entity=function(e,t){var n=new r(this,!1,e,t);return this.children.push(n),this},a.prototype.pEntity=function(e,t){var n=new r(this,!0,e,t);return this.children.push(n),this},a.prototype.notation=function(e,t){var n=new i(this,e,t);return this.children.push(n),this},a.prototype.toString=function(e){return this.options.writer.set(e).docType(this)},a.prototype.ele=function(e,t){return this.element(e,t)},a.prototype.att=function(e,t,n,r,i){return this.attList(e,t,n,r,i)},a.prototype.ent=function(e,t){return this.entity(e,t)},a.prototype.pent=function(e,t){return this.pEntity(e,t)},a.prototype.not=function(e,t){return this.notation(e,t)},a.prototype.up=function(){return this.root()||this.documentObject},a})(a)}).call(e)})),us=s(((e,t)=>{(function(){var e,n=function(e,t){for(var n in t)r.call(t,n)&&(e[n]=t[n]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r={}.hasOwnProperty;e=ms(),t.exports=(function(e){n(t,e);function t(e,n){if(t.__super__.constructor.call(this,e),n==null)throw Error(`Missing raw text. `+this.debugInfo());this.value=this.stringify.raw(n)}return t.prototype.clone=function(){return Object.create(this)},t.prototype.toString=function(e){return this.options.writer.set(e).raw(this)},t})(e)}).call(e)})),ds=s(((e,t)=>{(function(){var e,n=function(e,t){for(var n in t)r.call(t,n)&&(e[n]=t[n]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r={}.hasOwnProperty;e=ms(),t.exports=(function(e){n(t,e);function t(e,n){if(t.__super__.constructor.call(this,e),n==null)throw Error(`Missing element text. `+this.debugInfo());this.value=this.stringify.eleText(n)}return t.prototype.clone=function(){return Object.create(this)},t.prototype.toString=function(e){return this.options.writer.set(e).text(this)},t})(e)}).call(e)})),fs=s(((e,t)=>{(function(){var e,n=function(e,t){for(var n in t)r.call(t,n)&&(e[n]=t[n]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r={}.hasOwnProperty;e=ms(),t.exports=(function(e){n(t,e);function t(e,n,r){if(t.__super__.constructor.call(this,e),n==null)throw Error(`Missing instruction target. `+this.debugInfo());this.target=this.stringify.insTarget(n),r&&(this.value=this.stringify.insValue(r))}return t.prototype.clone=function(){return Object.create(this)},t.prototype.toString=function(e){return this.options.writer.set(e).processingInstruction(this)},t})(e)}).call(e)})),ps=s(((e,t)=>{(function(){var e,n=function(e,t){for(var n in t)r.call(t,n)&&(e[n]=t[n]);function i(){this.constructor=e}return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r={}.hasOwnProperty;e=ms(),t.exports=(function(e){n(t,e);function t(e){t.__super__.constructor.call(this,e),this.isDummy=!0}return t.prototype.clone=function(){return Object.create(this)},t.prototype.toString=function(e){return``},t})(e)}).call(e)})),ms=s(((e,t)=>{(function(){var e,n,r,i,a,o,s,c,l,u,d,f,p,m,h={}.hasOwnProperty;m=$o(),p=m.isObject,f=m.isFunction,d=m.isEmpty,u=m.getValue,o=null,e=null,n=null,r=null,i=null,c=null,l=null,s=null,a=null,t.exports=(function(){function t(t){this.parent=t,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),this.children=[],o||(o=ts(),e=ns(),n=rs(),r=is(),i=ls(),c=us(),l=ds(),s=fs(),a=ps())}return t.prototype.element=function(e,t,n){var r,i,a,o,s,c=null,l,m,g,_,v;if(t===null&&n==null&&(g=[{},null],t=g[0],n=g[1]),t??={},t=u(t),p(t)||(_=[t,n],n=_[0],t=_[1]),e!=null&&(e=u(e)),Array.isArray(e))for(a=0,l=e.length;a<l;a++)i=e[a],c=this.element(i);else if(f(e))c=this.element(e.apply());else if(p(e)){for(s in e)if(h.call(e,s))if(v=e[s],f(v)&&(v=v.apply()),p(v)&&d(v)&&(v=null),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&s.indexOf(this.stringify.convertAttKey)===0)c=this.attribute(s.substr(this.stringify.convertAttKey.length),v);else if(!this.options.separateArrayItems&&Array.isArray(v))for(o=0,m=v.length;o<m;o++)i=v[o],r={},r[s]=i,c=this.element(r);else p(v)?(c=this.element(s),c.element(v)):c=this.element(s,v)}else c=this.options.skipNullNodes&&n===null?this.dummy():!this.options.ignoreDecorators&&this.stringify.convertTextKey&&e.indexOf(this.stringify.convertTextKey)===0?this.text(n):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&e.indexOf(this.stringify.convertCDataKey)===0?this.cdata(n):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&e.indexOf(this.stringify.convertCommentKey)===0?this.comment(n):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&e.indexOf(this.stringify.convertRawKey)===0?this.raw(n):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&e.indexOf(this.stringify.convertPIKey)===0?this.instruction(e.substr(this.stringify.convertPIKey.length),n):this.node(e,t,n);if(c==null)throw Error(`Could not create any elements with: `+e+`. `+this.debugInfo());return c},t.prototype.insertBefore=function(e,t,n){var r,i,a;if(this.isRoot)throw Error(`Cannot insert elements at root level. `+this.debugInfo(e));return i=this.parent.children.indexOf(this),a=this.parent.children.splice(i),r=this.parent.element(e,t,n),Array.prototype.push.apply(this.parent.children,a),r},t.prototype.insertAfter=function(e,t,n){var r,i,a;if(this.isRoot)throw Error(`Cannot insert elements at root level. `+this.debugInfo(e));return i=this.parent.children.indexOf(this),a=this.parent.children.splice(i+1),r=this.parent.element(e,t,n),Array.prototype.push.apply(this.parent.children,a),r},t.prototype.remove=function(){var e;if(this.isRoot)throw Error(`Cannot remove the root element. `+this.debugInfo());return e=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[e,e-e+1]),this.parent},t.prototype.node=function(e,t,n){var r,i;return e!=null&&(e=u(e)),t||={},t=u(t),p(t)||(i=[t,n],n=i[0],t=i[1]),r=new o(this,e,t),n!=null&&r.text(n),this.children.push(r),r},t.prototype.text=function(e){var t=new l(this,e);return this.children.push(t),this},t.prototype.cdata=function(t){var n=new e(this,t);return this.children.push(n),this},t.prototype.comment=function(e){var t=new n(this,e);return this.children.push(t),this},t.prototype.commentBefore=function(e){var t=this.parent.children.indexOf(this),n=this.parent.children.splice(t);return this.parent.comment(e),Array.prototype.push.apply(this.parent.children,n),this},t.prototype.commentAfter=function(e){var t=this.parent.children.indexOf(this),n=this.parent.children.splice(t+1);return this.parent.comment(e),Array.prototype.push.apply(this.parent.children,n),this},t.prototype.raw=function(e){var t=new c(this,e);return this.children.push(t),this},t.prototype.dummy=function(){var e=new a(this);return this.children.push(e),e},t.prototype.instruction=function(e,t){var n,r,i,a,o;if(e!=null&&(e=u(e)),t!=null&&(t=u(t)),Array.isArray(e))for(a=0,o=e.length;a<o;a++)n=e[a],this.instruction(n);else if(p(e))for(n in e)h.call(e,n)&&(r=e[n],this.instruction(n,r));else f(t)&&(t=t.apply()),i=new s(this,e,t),this.children.push(i);return this},t.prototype.instructionBefore=function(e,t){var n=this.parent.children.indexOf(this),r=this.parent.children.splice(n);return this.parent.instruction(e,t),Array.prototype.push.apply(this.parent.children,r),this},t.prototype.instructionAfter=function(e,t){var n=this.parent.children.indexOf(this),r=this.parent.children.splice(n+1);return this.parent.instruction(e,t),Array.prototype.push.apply(this.parent.children,r),this},t.prototype.declaration=function(e,t,n){var i=this.document(),a=new r(i,e,t,n);return i.children[0]instanceof r?i.children[0]=a:i.children.unshift(a),i.root()||i},t.prototype.doctype=function(e,t){var n,r=this.document(),a=new i(r,e,t),o,s,c,l,u,d=r.children,f;for(o=s=0,l=d.length;s<l;o=++s)if(n=d[o],n instanceof i)return r.children[o]=a,a;for(f=r.children,o=c=0,u=f.length;c<u;o=++c)if(n=f[o],n.isRoot)return r.children.splice(o,0,a),a;return r.children.push(a),a},t.prototype.up=function(){if(this.isRoot)throw Error(`The root node has no parent. Use doc() if you need to get the document object.`);return this.parent},t.prototype.root=function(){for(var e=this;e;)if(e.isDocument)return e.rootObject;else if(e.isRoot)return e;else e=e.parent},t.prototype.document=function(){for(var e=this;e;)if(e.isDocument)return e;else e=e.parent},t.prototype.end=function(e){return this.document().end(e)},t.prototype.prev=function(){for(var e=this.parent.children.indexOf(this);e>0&&this.parent.children[e-1].isDummy;)--e;if(e<1)throw Error(`Already at the first node. `+this.debugInfo());return this.parent.children[e-1]},t.prototype.next=function(){for(var e=this.parent.children.indexOf(this);e<this.parent.children.length-1&&this.parent.children[e+1].isDummy;)e+=1;if(e===-1||e===this.parent.children.length-1)throw Error(`Already at the last node. `+this.debugInfo());return this.parent.children[e+1]},t.prototype.importDocument=function(e){var t=e.root().clone();return t.parent=this,t.isRoot=!1,this.children.push(t),this},t.prototype.debugInfo=function(e){return e||=this.name,e==null&&!this.parent?.name?``:e==null?`parent: <`+this.parent.name+`>`:this.parent?.name?`node: <`+e+`>, parent: <`+this.parent.name+`>`:`node: <`+e+`>`},t.prototype.ele=function(e,t,n){return this.element(e,t,n)},t.prototype.nod=function(e,t,n){return this.node(e,t,n)},t.prototype.txt=function(e){return this.text(e)},t.prototype.dat=function(e){return this.cdata(e)},t.prototype.com=function(e){return this.comment(e)},t.prototype.ins=function(e,t){return this.instruction(e,t)},t.prototype.doc=function(){return this.document()},t.prototype.dec=function(e,t,n){return this.declaration(e,t,n)},t.prototype.dtd=function(e,t){return this.doctype(e,t)},t.prototype.e=function(e,t,n){return this.element(e,t,n)},t.prototype.n=function(e,t,n){return this.node(e,t,n)},t.prototype.t=function(e){return this.text(e)},t.prototype.d=function(e){return this.cdata(e)},t.prototype.c=function(e){return this.comment(e)},t.prototype.r=function(e){return this.raw(e)},t.prototype.i=function(e,t){return this.instruction(e,t)},t.prototype.u=function(){return this.up()},t.prototype.importXMLBuilder=function(e){return this.importDocument(e)},t})()}).call(e)})),hs=s(((e,t)=>{(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},n={}.hasOwnProperty;t.exports=(function(){function t(t){this.assertLegalChar=e(this.assertLegalChar,this);var r,i,a;for(r in t||={},this.noDoubleEncoding=t.noDoubleEncoding,i=t.stringify||{},i)n.call(i,r)&&(a=i[r],this[r]=a)}return t.prototype.eleName=function(e){return e=``+e||``,this.assertLegalChar(e)},t.prototype.eleText=function(e){return e=``+e||``,this.assertLegalChar(this.elEscape(e))},t.prototype.cdata=function(e){return e=``+e||``,e=e.replace(`]]>`,`]]]]><![CDATA[>`),this.assertLegalChar(e)},t.prototype.comment=function(e){if(e=``+e||``,e.match(/--/))throw Error(`Comment text cannot contain double-hypen: `+e);return this.assertLegalChar(e)},t.prototype.raw=function(e){return``+e||``},t.prototype.attName=function(e){return e=``+e||``},t.prototype.attValue=function(e){return e=``+e||``,this.attEscape(e)},t.prototype.insTarget=function(e){return``+e||``},t.prototype.insValue=function(e){if(e=``+e||``,e.match(/\?>/))throw Error(`Invalid processing instruction value: `+e);return e},t.prototype.xmlVersion=function(e){if(e=``+e||``,!e.match(/1\.[0-9]+/))throw Error(`Invalid version number: `+e);return e},t.prototype.xmlEncoding=function(e){if(e=``+e||``,!e.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))throw Error(`Invalid encoding: `+e);return e},t.prototype.xmlStandalone=function(e){return e?`yes`:`no`},t.prototype.dtdPubID=function(e){return``+e||``},t.prototype.dtdSysID=function(e){return``+e||``},t.prototype.dtdElementValue=function(e){return``+e||``},t.prototype.dtdAttType=function(e){return``+e||``},t.prototype.dtdAttDefault=function(e){return e==null?e:``+e||``},t.prototype.dtdEntityValue=function(e){return``+e||``},t.prototype.dtdNData=function(e){return``+e||``},t.prototype.convertAttKey=`@`,t.prototype.convertPIKey=`?`,t.prototype.convertTextKey=`#text`,t.prototype.convertCDataKey=`#cdata`,t.prototype.convertCommentKey=`#comment`,t.prototype.convertRawKey=`#raw`,t.prototype.assertLegalChar=function(e){var t=e.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/);if(t)throw Error(`Invalid character in string: `+e+` at index `+t.index);return e},t.prototype.elEscape=function(e){var t=this.noDoubleEncoding?/(?!&\S+;)&/g:/&/g;return e.replace(t,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\r/g,`&#xD;`)},t.prototype.attEscape=function(e){var t=this.noDoubleEncoding?/(?!&\S+;)&/g:/&/g;return e.replace(t,`&amp;`).replace(/</g,`&lt;`).replace(/"/g,`&quot;`).replace(/\t/g,`&#x9;`).replace(/\n/g,`&#xA;`).replace(/\r/g,`&#xD;`)},t})()}).call(e)})),gs=s(((e,t)=>{(function(){var e={}.hasOwnProperty;t.exports=(function(){function t(t){var n,r,i;for(n in t||={},this.pretty=t.pretty||!1,this.allowEmpty=t.allowEmpty??!1,this.pretty?(this.indent=t.indent??`  `,this.newline=t.newline??`
`,this.offset=t.offset??0,this.dontprettytextnodes=t.dontprettytextnodes??0):(this.indent=``,this.newline=``,this.offset=0,this.dontprettytextnodes=0),this.spacebeforeslash=t.spacebeforeslash??``,this.spacebeforeslash===!0&&(this.spacebeforeslash=` `),this.newlinedefault=this.newline,this.prettydefault=this.pretty,r=t.writer||{},r)e.call(r,n)&&(i=r[n],this[n]=i)}return t.prototype.set=function(t){var n,r,i;for(n in t||={},`pretty`in t&&(this.pretty=t.pretty),`allowEmpty`in t&&(this.allowEmpty=t.allowEmpty),this.pretty?(this.indent=`indent`in t?t.indent:`  `,this.newline=`newline`in t?t.newline:`
`,this.offset=`offset`in t?t.offset:0,this.dontprettytextnodes=`dontprettytextnodes`in t?t.dontprettytextnodes:0):(this.indent=``,this.newline=``,this.offset=0,this.dontprettytextnodes=0),this.spacebeforeslash=`spacebeforeslash`in t?t.spacebeforeslash:``,this.spacebeforeslash===!0&&(this.spacebeforeslash=` `),this.newlinedefault=this.newline,this.prettydefault=this.pretty,r=t.writer||{},r)e.call(r,n)&&(i=r[n],this[n]=i);return this},t.prototype.space=function(e){var t;return this.pretty?(t=(e||0)+this.offset+1,t>0?Array(t).join(this.indent):``):``},t})()}).call(e)})),_s=s(((e,t)=>{(function(){var e,n,r,i,a,o,s,c,l,u,d,f,p,m,h=function(e,t){for(var n in t)g.call(t,n)&&(e[n]=t[n]);function r(){this.constructor=e}return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},g={}.hasOwnProperty;s=is(),c=ls(),e=ns(),n=rs(),u=ts(),f=us(),p=ds(),d=fs(),l=ps(),r=as(),i=ss(),a=os(),o=cs(),m=gs(),t.exports=(function(t){h(m,t);function m(e){m.__super__.constructor.call(this,e)}return m.prototype.document=function(e){var t,r,i,a,o;for(this.textispresent=!1,a=``,o=e.children,r=0,i=o.length;r<i;r++)t=o[r],!(t instanceof l)&&(a+=(function(){switch(!1){case!(t instanceof s):return this.declaration(t);case!(t instanceof c):return this.docType(t);case!(t instanceof n):return this.comment(t);case!(t instanceof d):return this.processingInstruction(t);default:return this.element(t,0)}}).call(this));return this.pretty&&a.slice(-this.newline.length)===this.newline&&(a=a.slice(0,-this.newline.length)),a},m.prototype.attribute=function(e){return` `+e.name+`="`+e.value+`"`},m.prototype.cdata=function(e,t){return this.space(t)+`<![CDATA[`+e.text+`]]>`+this.newline},m.prototype.comment=function(e,t){return this.space(t)+`<!-- `+e.text+` -->`+this.newline},m.prototype.declaration=function(e,t){var n=this.space(t);return n+=`<?xml version="`+e.version+`"`,e.encoding!=null&&(n+=` encoding="`+e.encoding+`"`),e.standalone!=null&&(n+=` standalone="`+e.standalone+`"`),n+=this.spacebeforeslash+`?>`,n+=this.newline,n},m.prototype.docType=function(t,s){var c,l,u,f,p;if(s||=0,f=this.space(s),f+=`<!DOCTYPE `+t.root().name,t.pubID&&t.sysID?f+=` PUBLIC "`+t.pubID+`" "`+t.sysID+`"`:t.sysID&&(f+=` SYSTEM "`+t.sysID+`"`),t.children.length>0){for(f+=` [`,f+=this.newline,p=t.children,l=0,u=p.length;l<u;l++)c=p[l],f+=(function(){switch(!1){case!(c instanceof r):return this.dtdAttList(c,s+1);case!(c instanceof i):return this.dtdElement(c,s+1);case!(c instanceof a):return this.dtdEntity(c,s+1);case!(c instanceof o):return this.dtdNotation(c,s+1);case!(c instanceof e):return this.cdata(c,s+1);case!(c instanceof n):return this.comment(c,s+1);case!(c instanceof d):return this.processingInstruction(c,s+1);default:throw Error(`Unknown DTD node type: `+c.constructor.name)}}).call(this);f+=`]`}return f+=this.spacebeforeslash+`>`,f+=this.newline,f},m.prototype.element=function(t,r){var i,a,o,s,c,m,h,_,v,y,b,x,S;for(h in r||=0,S=!1,this.textispresent?(this.newline=``,this.pretty=!1):(this.newline=this.newlinedefault,this.pretty=this.prettydefault),x=this.space(r),_=``,_+=x+`<`+t.name,v=t.attributes,v)g.call(v,h)&&(i=v[h],_+=this.attribute(i));if(t.children.length===0||t.children.every(function(e){return e.value===``}))this.allowEmpty?_+=`></`+t.name+`>`+this.newline:_+=this.spacebeforeslash+`/>`+this.newline;else if(this.pretty&&t.children.length===1&&t.children[0].value!=null)_+=`>`,_+=t.children[0].value,_+=`</`+t.name+`>`+this.newline;else{if(this.dontprettytextnodes){for(y=t.children,o=0,c=y.length;o<c;o++)if(a=y[o],a.value!=null){this.textispresent++,S=!0;break}}for(this.textispresent&&(this.newline=``,this.pretty=!1,x=this.space(r)),_+=`>`+this.newline,b=t.children,s=0,m=b.length;s<m;s++)a=b[s],_+=(function(){switch(!1){case!(a instanceof e):return this.cdata(a,r+1);case!(a instanceof n):return this.comment(a,r+1);case!(a instanceof u):return this.element(a,r+1);case!(a instanceof f):return this.raw(a,r+1);case!(a instanceof p):return this.text(a,r+1);case!(a instanceof d):return this.processingInstruction(a,r+1);case!(a instanceof l):return``;default:throw Error(`Unknown XML node type: `+a.constructor.name)}}).call(this);S&&this.textispresent--,this.textispresent||(this.newline=this.newlinedefault,this.pretty=this.prettydefault),_+=x+`</`+t.name+`>`+this.newline}return _},m.prototype.processingInstruction=function(e,t){var n=this.space(t)+`<?`+e.target;return e.value&&(n+=` `+e.value),n+=this.spacebeforeslash+`?>`+this.newline,n},m.prototype.raw=function(e,t){return this.space(t)+e.value+this.newline},m.prototype.text=function(e,t){return this.space(t)+e.value+this.newline},m.prototype.dtdAttList=function(e,t){var n=this.space(t)+`<!ATTLIST `+e.elementName+` `+e.attributeName+` `+e.attributeType;return e.defaultValueType!==`#DEFAULT`&&(n+=` `+e.defaultValueType),e.defaultValue&&(n+=` "`+e.defaultValue+`"`),n+=this.spacebeforeslash+`>`+this.newline,n},m.prototype.dtdElement=function(e,t){return this.space(t)+`<!ELEMENT `+e.name+` `+e.value+this.spacebeforeslash+`>`+this.newline},m.prototype.dtdEntity=function(e,t){var n=this.space(t)+`<!ENTITY`;return e.pe&&(n+=` %`),n+=` `+e.name,e.value?n+=` "`+e.value+`"`:(e.pubID&&e.sysID?n+=` PUBLIC "`+e.pubID+`" "`+e.sysID+`"`:e.sysID&&(n+=` SYSTEM "`+e.sysID+`"`),e.nData&&(n+=` NDATA `+e.nData)),n+=this.spacebeforeslash+`>`+this.newline,n},m.prototype.dtdNotation=function(e,t){var n=this.space(t)+`<!NOTATION `+e.name;return e.pubID&&e.sysID?n+=` PUBLIC "`+e.pubID+`" "`+e.sysID+`"`:e.pubID?n+=` PUBLIC "`+e.pubID+`"`:e.sysID&&(n+=` SYSTEM "`+e.sysID+`"`),n+=this.spacebeforeslash+`>`+this.newline,n},m.prototype.openNode=function(e,t){var n,r,i,a;if(t||=0,e instanceof u){for(r in i=this.space(t)+`<`+e.name,a=e.attributes,a)g.call(a,r)&&(n=a[r],i+=this.attribute(n));return i+=(e.children?`>`:`/>`)+this.newline,i}else return i=this.space(t)+`<!DOCTYPE `+e.rootNodeName,e.pubID&&e.sysID?i+=` PUBLIC "`+e.pubID+`" "`+e.sysID+`"`:e.sysID&&(i+=` SYSTEM "`+e.sysID+`"`),i+=(e.children?` [`:`>`)+this.newline,i},m.prototype.closeNode=function(e,t){switch(t||=0,!1){case!(e instanceof u):return this.space(t)+`</`+e.name+`>`+this.newline;case!(e instanceof c):return this.space(t)+`]>`+this.newline}},m})(m)}).call(e)})),vs=s(((e,t)=>{(function(){var e,n,r,i,a=function(e,t){for(var n in t)o.call(t,n)&&(e[n]=t[n]);function r(){this.constructor=e}return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},o={}.hasOwnProperty;i=$o().isPlainObject,e=ms(),r=hs(),n=_s(),t.exports=(function(e){a(t,e);function t(e){t.__super__.constructor.call(this,null),this.name=`?xml`,e||={},e.writer||=new n,this.options=e,this.stringify=new r(e),this.isDocument=!0}return t.prototype.end=function(e){var t;return e?i(e)&&(t=e,e=this.options.writer.set(t)):e=this.options.writer,e.document(this)},t.prototype.toString=function(e){return this.options.writer.set(e).document(this)},t})(e)}).call(e)})),ys=s(((e,t)=>{(function(){var e,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x={}.hasOwnProperty;b=$o(),v=b.isObject,_=b.isFunction,y=b.isPlainObject,g=b.getValue,u=ts(),n=ns(),r=rs(),f=us(),h=ds(),d=fs(),c=is(),l=ls(),i=as(),o=os(),a=ss(),s=cs(),e=es(),m=hs(),p=_s(),t.exports=(function(){function t(e,t,n){var r;this.name=`?xml`,e||={},e.writer?y(e.writer)&&(r=e.writer,e.writer=new p(r)):e.writer=new p(e),this.options=e,this.writer=e.writer,this.stringify=new m(e),this.onDataCallback=t||function(){},this.onEndCallback=n||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,this.documentCompleted=!1,this.root=null}return t.prototype.node=function(e,t,n){var r,i;if(e==null)throw Error(`Missing node name.`);if(this.root&&this.currentLevel===-1)throw Error(`Document can only have one root node. `+this.debugInfo(e));return this.openCurrent(),e=g(e),t===null&&n==null&&(r=[{},null],t=r[0],n=r[1]),t??={},t=g(t),v(t)||(i=[t,n],n=i[0],t=i[1]),this.currentNode=new u(this,e,t),this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,n!=null&&this.text(n),this},t.prototype.element=function(e,t,n){return this.currentNode&&this.currentNode instanceof l?this.dtdElement.apply(this,arguments):this.node(e,t,n)},t.prototype.attribute=function(t,n){var r,i;if(!this.currentNode||this.currentNode.children)throw Error(`att() can only be used immediately after an ele() call in callback mode. `+this.debugInfo(t));if(t!=null&&(t=g(t)),v(t))for(r in t)x.call(t,r)&&(i=t[r],this.attribute(r,i));else _(n)&&(n=n.apply()),(!this.options.skipNullAttributes||n!=null)&&(this.currentNode.attributes[t]=new e(this,t,n));return this},t.prototype.text=function(e){var t;return this.openCurrent(),t=new h(this,e),this.onData(this.writer.text(t,this.currentLevel+1),this.currentLevel+1),this},t.prototype.cdata=function(e){var t;return this.openCurrent(),t=new n(this,e),this.onData(this.writer.cdata(t,this.currentLevel+1),this.currentLevel+1),this},t.prototype.comment=function(e){var t;return this.openCurrent(),t=new r(this,e),this.onData(this.writer.comment(t,this.currentLevel+1),this.currentLevel+1),this},t.prototype.raw=function(e){var t;return this.openCurrent(),t=new f(this,e),this.onData(this.writer.raw(t,this.currentLevel+1),this.currentLevel+1),this},t.prototype.instruction=function(e,t){var n,r,i,a,o;if(this.openCurrent(),e!=null&&(e=g(e)),t!=null&&(t=g(t)),Array.isArray(e))for(n=0,a=e.length;n<a;n++)r=e[n],this.instruction(r);else if(v(e))for(r in e)x.call(e,r)&&(i=e[r],this.instruction(r,i));else _(t)&&(t=t.apply()),o=new d(this,e,t),this.onData(this.writer.processingInstruction(o,this.currentLevel+1),this.currentLevel+1);return this},t.prototype.declaration=function(e,t,n){var r;if(this.openCurrent(),this.documentStarted)throw Error(`declaration() must be the first node.`);return r=new c(this,e,t,n),this.onData(this.writer.declaration(r,this.currentLevel+1),this.currentLevel+1),this},t.prototype.doctype=function(e,t,n){if(this.openCurrent(),e==null)throw Error(`Missing root node name.`);if(this.root)throw Error(`dtd() must come before the root node.`);return this.currentNode=new l(this,t,n),this.currentNode.rootNodeName=e,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,this},t.prototype.dtdElement=function(e,t){var n;return this.openCurrent(),n=new a(this,e,t),this.onData(this.writer.dtdElement(n,this.currentLevel+1),this.currentLevel+1),this},t.prototype.attList=function(e,t,n,r,a){var o;return this.openCurrent(),o=new i(this,e,t,n,r,a),this.onData(this.writer.dtdAttList(o,this.currentLevel+1),this.currentLevel+1),this},t.prototype.entity=function(e,t){var n;return this.openCurrent(),n=new o(this,!1,e,t),this.onData(this.writer.dtdEntity(n,this.currentLevel+1),this.currentLevel+1),this},t.prototype.pEntity=function(e,t){var n;return this.openCurrent(),n=new o(this,!0,e,t),this.onData(this.writer.dtdEntity(n,this.currentLevel+1),this.currentLevel+1),this},t.prototype.notation=function(e,t){var n;return this.openCurrent(),n=new s(this,e,t),this.onData(this.writer.dtdNotation(n,this.currentLevel+1),this.currentLevel+1),this},t.prototype.up=function(){if(this.currentLevel<0)throw Error(`The document node has no parent.`);return this.currentNode?(this.currentNode.children?this.closeNode(this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]),delete this.openTags[this.currentLevel],this.currentLevel--,this},t.prototype.end=function(){for(;this.currentLevel>=0;)this.up();return this.onEnd()},t.prototype.openCurrent=function(){if(this.currentNode)return this.currentNode.children=!0,this.openNode(this.currentNode)},t.prototype.openNode=function(e){if(!e.isOpen)return!this.root&&this.currentLevel===0&&e instanceof u&&(this.root=e),this.onData(this.writer.openNode(e,this.currentLevel),this.currentLevel),e.isOpen=!0},t.prototype.closeNode=function(e){if(!e.isClosed)return this.onData(this.writer.closeNode(e,this.currentLevel),this.currentLevel),e.isClosed=!0},t.prototype.onData=function(e,t){return this.documentStarted=!0,this.onDataCallback(e,t+1)},t.prototype.onEnd=function(){return this.documentCompleted=!0,this.onEndCallback()},t.prototype.debugInfo=function(e){return e==null?``:`node: <`+e+`>`},t.prototype.ele=function(){return this.element.apply(this,arguments)},t.prototype.nod=function(e,t,n){return this.node(e,t,n)},t.prototype.txt=function(e){return this.text(e)},t.prototype.dat=function(e){return this.cdata(e)},t.prototype.com=function(e){return this.comment(e)},t.prototype.ins=function(e,t){return this.instruction(e,t)},t.prototype.dec=function(e,t,n){return this.declaration(e,t,n)},t.prototype.dtd=function(e,t,n){return this.doctype(e,t,n)},t.prototype.e=function(e,t,n){return this.element(e,t,n)},t.prototype.n=function(e,t,n){return this.node(e,t,n)},t.prototype.t=function(e){return this.text(e)},t.prototype.d=function(e){return this.cdata(e)},t.prototype.c=function(e){return this.comment(e)},t.prototype.r=function(e){return this.raw(e)},t.prototype.i=function(e,t){return this.instruction(e,t)},t.prototype.att=function(){return this.currentNode&&this.currentNode instanceof l?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},t.prototype.a=function(){return this.currentNode&&this.currentNode instanceof l?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},t.prototype.ent=function(e,t){return this.entity(e,t)},t.prototype.pent=function(e,t){return this.pEntity(e,t)},t.prototype.not=function(e,t){return this.notation(e,t)},t})()}).call(e)})),bs=s(((e,t)=>{(function(){var e,n,r,i,a,o,s,c,l,u,d,f,p,m,h=function(e,t){for(var n in t)g.call(t,n)&&(e[n]=t[n]);function r(){this.constructor=e}return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},g={}.hasOwnProperty;s=is(),c=ls(),e=ns(),n=rs(),u=ts(),f=us(),p=ds(),d=fs(),l=ps(),r=as(),i=ss(),a=os(),o=cs(),m=gs(),t.exports=(function(t){h(m,t);function m(e,t){m.__super__.constructor.call(this,t),this.stream=e}return m.prototype.document=function(e){var t,r,i,a,o,u=e.children,f,p;for(r=0,a=u.length;r<a;r++)t=u[r],t.isLastRootNode=!1;for(e.children[e.children.length-1].isLastRootNode=!0,f=e.children,p=[],i=0,o=f.length;i<o;i++)if(t=f[i],!(t instanceof l))switch(!1){case!(t instanceof s):p.push(this.declaration(t));break;case!(t instanceof c):p.push(this.docType(t));break;case!(t instanceof n):p.push(this.comment(t));break;case!(t instanceof d):p.push(this.processingInstruction(t));break;default:p.push(this.element(t))}return p},m.prototype.attribute=function(e){return this.stream.write(` `+e.name+`="`+e.value+`"`)},m.prototype.cdata=function(e,t){return this.stream.write(this.space(t)+`<![CDATA[`+e.text+`]]>`+this.endline(e))},m.prototype.comment=function(e,t){return this.stream.write(this.space(t)+`<!-- `+e.text+` -->`+this.endline(e))},m.prototype.declaration=function(e,t){return this.stream.write(this.space(t)),this.stream.write(`<?xml version="`+e.version+`"`),e.encoding!=null&&this.stream.write(` encoding="`+e.encoding+`"`),e.standalone!=null&&this.stream.write(` standalone="`+e.standalone+`"`),this.stream.write(this.spacebeforeslash+`?>`),this.stream.write(this.endline(e))},m.prototype.docType=function(t,s){var c,l,u,f;if(s||=0,this.stream.write(this.space(s)),this.stream.write(`<!DOCTYPE `+t.root().name),t.pubID&&t.sysID?this.stream.write(` PUBLIC "`+t.pubID+`" "`+t.sysID+`"`):t.sysID&&this.stream.write(` SYSTEM "`+t.sysID+`"`),t.children.length>0){for(this.stream.write(` [`),this.stream.write(this.endline(t)),f=t.children,l=0,u=f.length;l<u;l++)switch(c=f[l],!1){case!(c instanceof r):this.dtdAttList(c,s+1);break;case!(c instanceof i):this.dtdElement(c,s+1);break;case!(c instanceof a):this.dtdEntity(c,s+1);break;case!(c instanceof o):this.dtdNotation(c,s+1);break;case!(c instanceof e):this.cdata(c,s+1);break;case!(c instanceof n):this.comment(c,s+1);break;case!(c instanceof d):this.processingInstruction(c,s+1);break;default:throw Error(`Unknown DTD node type: `+c.constructor.name)}this.stream.write(`]`)}return this.stream.write(this.spacebeforeslash+`>`),this.stream.write(this.endline(t))},m.prototype.element=function(t,r){var i,a,o,s,c,m,h,_;for(c in r||=0,_=this.space(r),this.stream.write(_+`<`+t.name),m=t.attributes,m)g.call(m,c)&&(i=m[c],this.attribute(i));if(t.children.length===0||t.children.every(function(e){return e.value===``}))this.allowEmpty?this.stream.write(`></`+t.name+`>`):this.stream.write(this.spacebeforeslash+`/>`);else if(this.pretty&&t.children.length===1&&t.children[0].value!=null)this.stream.write(`>`),this.stream.write(t.children[0].value),this.stream.write(`</`+t.name+`>`);else{for(this.stream.write(`>`+this.newline),h=t.children,o=0,s=h.length;o<s;o++)switch(a=h[o],!1){case!(a instanceof e):this.cdata(a,r+1);break;case!(a instanceof n):this.comment(a,r+1);break;case!(a instanceof u):this.element(a,r+1);break;case!(a instanceof f):this.raw(a,r+1);break;case!(a instanceof p):this.text(a,r+1);break;case!(a instanceof d):this.processingInstruction(a,r+1);break;case!(a instanceof l):break;default:throw Error(`Unknown XML node type: `+a.constructor.name)}this.stream.write(_+`</`+t.name+`>`)}return this.stream.write(this.endline(t))},m.prototype.processingInstruction=function(e,t){return this.stream.write(this.space(t)+`<?`+e.target),e.value&&this.stream.write(` `+e.value),this.stream.write(this.spacebeforeslash+`?>`+this.endline(e))},m.prototype.raw=function(e,t){return this.stream.write(this.space(t)+e.value+this.endline(e))},m.prototype.text=function(e,t){return this.stream.write(this.space(t)+e.value+this.endline(e))},m.prototype.dtdAttList=function(e,t){return this.stream.write(this.space(t)+`<!ATTLIST `+e.elementName+` `+e.attributeName+` `+e.attributeType),e.defaultValueType!==`#DEFAULT`&&this.stream.write(` `+e.defaultValueType),e.defaultValue&&this.stream.write(` "`+e.defaultValue+`"`),this.stream.write(this.spacebeforeslash+`>`+this.endline(e))},m.prototype.dtdElement=function(e,t){return this.stream.write(this.space(t)+`<!ELEMENT `+e.name+` `+e.value),this.stream.write(this.spacebeforeslash+`>`+this.endline(e))},m.prototype.dtdEntity=function(e,t){return this.stream.write(this.space(t)+`<!ENTITY`),e.pe&&this.stream.write(` %`),this.stream.write(` `+e.name),e.value?this.stream.write(` "`+e.value+`"`):(e.pubID&&e.sysID?this.stream.write(` PUBLIC "`+e.pubID+`" "`+e.sysID+`"`):e.sysID&&this.stream.write(` SYSTEM "`+e.sysID+`"`),e.nData&&this.stream.write(` NDATA `+e.nData)),this.stream.write(this.spacebeforeslash+`>`+this.endline(e))},m.prototype.dtdNotation=function(e,t){return this.stream.write(this.space(t)+`<!NOTATION `+e.name),e.pubID&&e.sysID?this.stream.write(` PUBLIC "`+e.pubID+`" "`+e.sysID+`"`):e.pubID?this.stream.write(` PUBLIC "`+e.pubID+`"`):e.sysID&&this.stream.write(` SYSTEM "`+e.sysID+`"`),this.stream.write(this.spacebeforeslash+`>`+this.endline(e))},m.prototype.endline=function(e){return e.isLastRootNode?``:this.newline},m})(m)}).call(e)})),xs=s(((e,t)=>{(function(){var e,n,r,i,a,o,s=$o();a=s.assign,o=s.isFunction,e=vs(),n=ys(),i=_s(),r=bs(),t.exports.create=function(t,n,r,i){var o,s;if(t==null)throw Error(`Root element needs a name.`);return i=a({},n,r,i),o=new e(i),s=o.element(t),i.headless||(o.declaration(i),(i.pubID!=null||i.sysID!=null)&&o.doctype(i)),s},t.exports.begin=function(t,r,i){var a;return o(t)&&(a=[t,r],r=a[0],i=a[1],t={}),r?new n(t,r,i):new e(t)},t.exports.stringWriter=function(e){return new i(e)},t.exports.streamWriter=function(e,t){return new r(e,t)}}).call(e)})),Ss=s((e=>{var t=(Q(),d(Z)),n=xs();e.writeString=r;function r(e,r){var a=t.invert(r),o={element:c,text:i};function s(e,t){return o[t.type](e,t)}function c(e,t){var n=e.element(l(t.name),t.attributes);t.children.forEach(function(e){s(n,e)})}function l(e){var t=/^\{(.*)\}(.*)$/.exec(e);if(t){var n=a[t[1]];return n+(n===``?``:`:`)+t[2]}else return e}function u(e){var i=n.create(l(e.name),{version:`1.0`,encoding:`UTF-8`,standalone:!0});return t.forEach(r,function(e,t){var n=`xmlns`+(t===``?``:`:`+t);i.attribute(n,e)}),e.children.forEach(function(e){s(i,e)}),i.end()}return u(e)}function i(e,t){e.text(t.value)}})),Cs=s((e=>{var t=Wo();e.Element=t.Element,e.element=t.element,e.emptyElement=t.emptyElement,e.text=t.text,e.readString=Qo().readString,e.writeString=Ss().writeString})),ws=s((e=>{var t=(Q(),d(Z)),n=Ro(),r=Cs();e.read=a,e.readXmlFromZipFile=o;var i={"http://schemas.openxmlformats.org/wordprocessingml/2006/main":`w`,"http://schemas.openxmlformats.org/officeDocument/2006/relationships":`r`,"http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing":`wp`,"http://schemas.openxmlformats.org/drawingml/2006/main":`a`,"http://schemas.openxmlformats.org/drawingml/2006/picture":`pic`,"http://purl.oclc.org/ooxml/wordprocessingml/main":`w`,"http://purl.oclc.org/ooxml/officeDocument/relationships":`r`,"http://purl.oclc.org/ooxml/drawingml/wordprocessingDrawing":`wp`,"http://purl.oclc.org/ooxml/drawingml/main":`a`,"http://purl.oclc.org/ooxml/drawingml/picture":`pic`,"http://schemas.openxmlformats.org/package/2006/content-types":`content-types`,"http://schemas.openxmlformats.org/package/2006/relationships":`relationships`,"http://schemas.openxmlformats.org/markup-compatibility/2006":`mc`,"urn:schemas-microsoft-com:vml":`v`,"urn:schemas-microsoft-com:office:word":`office-word`,"http://schemas.microsoft.com/office/word/2010/wordml":`wordml`};function a(e){return r.readString(e,i).then(function(e){return c(e)[0]})}function o(e,t){return e.exists(t)?e.read(t,`utf-8`).then(s).then(a):n.resolve(null)}function s(e){return e.replace(/^\uFEFF/g,``)}function c(e){return e.type===`element`?e.name===`mc:AlternateContent`?e.firstOrEmpty(`mc:Fallback`).children:(e.children=t.flatten(e.children.map(c,!0)),[e]):[e]}})),Ts=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{"Typeface name":`Symbol`,"Dingbat dec":`32`,"Dingbat hex":`20`,"Unicode dec":`32`,"Unicode hex":`20`},{"Typeface name":`Symbol`,"Dingbat dec":`33`,"Dingbat hex":`21`,"Unicode dec":`33`,"Unicode hex":`21`},{"Typeface name":`Symbol`,"Dingbat dec":`34`,"Dingbat hex":`22`,"Unicode dec":`8704`,"Unicode hex":`2200`},{"Typeface name":`Symbol`,"Dingbat dec":`35`,"Dingbat hex":`23`,"Unicode dec":`35`,"Unicode hex":`23`},{"Typeface name":`Symbol`,"Dingbat dec":`36`,"Dingbat hex":`24`,"Unicode dec":`8707`,"Unicode hex":`2203`},{"Typeface name":`Symbol`,"Dingbat dec":`37`,"Dingbat hex":`25`,"Unicode dec":`37`,"Unicode hex":`25`},{"Typeface name":`Symbol`,"Dingbat dec":`38`,"Dingbat hex":`26`,"Unicode dec":`38`,"Unicode hex":`26`},{"Typeface name":`Symbol`,"Dingbat dec":`39`,"Dingbat hex":`27`,"Unicode dec":`8717`,"Unicode hex":`220D`},{"Typeface name":`Symbol`,"Dingbat dec":`40`,"Dingbat hex":`28`,"Unicode dec":`40`,"Unicode hex":`28`},{"Typeface name":`Symbol`,"Dingbat dec":`41`,"Dingbat hex":`29`,"Unicode dec":`41`,"Unicode hex":`29`},{"Typeface name":`Symbol`,"Dingbat dec":`42`,"Dingbat hex":`2A`,"Unicode dec":`42`,"Unicode hex":`2A`},{"Typeface name":`Symbol`,"Dingbat dec":`43`,"Dingbat hex":`2B`,"Unicode dec":`43`,"Unicode hex":`2B`},{"Typeface name":`Symbol`,"Dingbat dec":`44`,"Dingbat hex":`2C`,"Unicode dec":`44`,"Unicode hex":`2C`},{"Typeface name":`Symbol`,"Dingbat dec":`45`,"Dingbat hex":`2D`,"Unicode dec":`8722`,"Unicode hex":`2212`},{"Typeface name":`Symbol`,"Dingbat dec":`46`,"Dingbat hex":`2E`,"Unicode dec":`46`,"Unicode hex":`2E`},{"Typeface name":`Symbol`,"Dingbat dec":`47`,"Dingbat hex":`2F`,"Unicode dec":`47`,"Unicode hex":`2F`},{"Typeface name":`Symbol`,"Dingbat dec":`48`,"Dingbat hex":`30`,"Unicode dec":`48`,"Unicode hex":`30`},{"Typeface name":`Symbol`,"Dingbat dec":`49`,"Dingbat hex":`31`,"Unicode dec":`49`,"Unicode hex":`31`},{"Typeface name":`Symbol`,"Dingbat dec":`50`,"Dingbat hex":`32`,"Unicode dec":`50`,"Unicode hex":`32`},{"Typeface name":`Symbol`,"Dingbat dec":`51`,"Dingbat hex":`33`,"Unicode dec":`51`,"Unicode hex":`33`},{"Typeface name":`Symbol`,"Dingbat dec":`52`,"Dingbat hex":`34`,"Unicode dec":`52`,"Unicode hex":`34`},{"Typeface name":`Symbol`,"Dingbat dec":`53`,"Dingbat hex":`35`,"Unicode dec":`53`,"Unicode hex":`35`},{"Typeface name":`Symbol`,"Dingbat dec":`54`,"Dingbat hex":`36`,"Unicode dec":`54`,"Unicode hex":`36`},{"Typeface name":`Symbol`,"Dingbat dec":`55`,"Dingbat hex":`37`,"Unicode dec":`55`,"Unicode hex":`37`},{"Typeface name":`Symbol`,"Dingbat dec":`56`,"Dingbat hex":`38`,"Unicode dec":`56`,"Unicode hex":`38`},{"Typeface name":`Symbol`,"Dingbat dec":`57`,"Dingbat hex":`39`,"Unicode dec":`57`,"Unicode hex":`39`},{"Typeface name":`Symbol`,"Dingbat dec":`58`,"Dingbat hex":`3A`,"Unicode dec":`58`,"Unicode hex":`3A`},{"Typeface name":`Symbol`,"Dingbat dec":`59`,"Dingbat hex":`3B`,"Unicode dec":`59`,"Unicode hex":`3B`},{"Typeface name":`Symbol`,"Dingbat dec":`60`,"Dingbat hex":`3C`,"Unicode dec":`60`,"Unicode hex":`3C`},{"Typeface name":`Symbol`,"Dingbat dec":`61`,"Dingbat hex":`3D`,"Unicode dec":`61`,"Unicode hex":`3D`},{"Typeface name":`Symbol`,"Dingbat dec":`62`,"Dingbat hex":`3E`,"Unicode dec":`62`,"Unicode hex":`3E`},{"Typeface name":`Symbol`,"Dingbat dec":`63`,"Dingbat hex":`3F`,"Unicode dec":`63`,"Unicode hex":`3F`},{"Typeface name":`Symbol`,"Dingbat dec":`64`,"Dingbat hex":`40`,"Unicode dec":`8773`,"Unicode hex":`2245`},{"Typeface name":`Symbol`,"Dingbat dec":`65`,"Dingbat hex":`41`,"Unicode dec":`913`,"Unicode hex":`391`},{"Typeface name":`Symbol`,"Dingbat dec":`66`,"Dingbat hex":`42`,"Unicode dec":`914`,"Unicode hex":`392`},{"Typeface name":`Symbol`,"Dingbat dec":`67`,"Dingbat hex":`43`,"Unicode dec":`935`,"Unicode hex":`3A7`},{"Typeface name":`Symbol`,"Dingbat dec":`68`,"Dingbat hex":`44`,"Unicode dec":`916`,"Unicode hex":`394`},{"Typeface name":`Symbol`,"Dingbat dec":`69`,"Dingbat hex":`45`,"Unicode dec":`917`,"Unicode hex":`395`},{"Typeface name":`Symbol`,"Dingbat dec":`70`,"Dingbat hex":`46`,"Unicode dec":`934`,"Unicode hex":`3A6`},{"Typeface name":`Symbol`,"Dingbat dec":`71`,"Dingbat hex":`47`,"Unicode dec":`915`,"Unicode hex":`393`},{"Typeface name":`Symbol`,"Dingbat dec":`72`,"Dingbat hex":`48`,"Unicode dec":`919`,"Unicode hex":`397`},{"Typeface name":`Symbol`,"Dingbat dec":`73`,"Dingbat hex":`49`,"Unicode dec":`921`,"Unicode hex":`399`},{"Typeface name":`Symbol`,"Dingbat dec":`74`,"Dingbat hex":`4A`,"Unicode dec":`977`,"Unicode hex":`3D1`},{"Typeface name":`Symbol`,"Dingbat dec":`75`,"Dingbat hex":`4B`,"Unicode dec":`922`,"Unicode hex":`39A`},{"Typeface name":`Symbol`,"Dingbat dec":`76`,"Dingbat hex":`4C`,"Unicode dec":`923`,"Unicode hex":`39B`},{"Typeface name":`Symbol`,"Dingbat dec":`77`,"Dingbat hex":`4D`,"Unicode dec":`924`,"Unicode hex":`39C`},{"Typeface name":`Symbol`,"Dingbat dec":`78`,"Dingbat hex":`4E`,"Unicode dec":`925`,"Unicode hex":`39D`},{"Typeface name":`Symbol`,"Dingbat dec":`79`,"Dingbat hex":`4F`,"Unicode dec":`927`,"Unicode hex":`39F`},{"Typeface name":`Symbol`,"Dingbat dec":`80`,"Dingbat hex":`50`,"Unicode dec":`928`,"Unicode hex":`3A0`},{"Typeface name":`Symbol`,"Dingbat dec":`81`,"Dingbat hex":`51`,"Unicode dec":`920`,"Unicode hex":`398`},{"Typeface name":`Symbol`,"Dingbat dec":`82`,"Dingbat hex":`52`,"Unicode dec":`929`,"Unicode hex":`3A1`},{"Typeface name":`Symbol`,"Dingbat dec":`83`,"Dingbat hex":`53`,"Unicode dec":`931`,"Unicode hex":`3A3`},{"Typeface name":`Symbol`,"Dingbat dec":`84`,"Dingbat hex":`54`,"Unicode dec":`932`,"Unicode hex":`3A4`},{"Typeface name":`Symbol`,"Dingbat dec":`85`,"Dingbat hex":`55`,"Unicode dec":`933`,"Unicode hex":`3A5`},{"Typeface name":`Symbol`,"Dingbat dec":`86`,"Dingbat hex":`56`,"Unicode dec":`962`,"Unicode hex":`3C2`},{"Typeface name":`Symbol`,"Dingbat dec":`87`,"Dingbat hex":`57`,"Unicode dec":`937`,"Unicode hex":`3A9`},{"Typeface name":`Symbol`,"Dingbat dec":`88`,"Dingbat hex":`58`,"Unicode dec":`926`,"Unicode hex":`39E`},{"Typeface name":`Symbol`,"Dingbat dec":`89`,"Dingbat hex":`59`,"Unicode dec":`936`,"Unicode hex":`3A8`},{"Typeface name":`Symbol`,"Dingbat dec":`90`,"Dingbat hex":`5A`,"Unicode dec":`918`,"Unicode hex":`396`},{"Typeface name":`Symbol`,"Dingbat dec":`91`,"Dingbat hex":`5B`,"Unicode dec":`91`,"Unicode hex":`5B`},{"Typeface name":`Symbol`,"Dingbat dec":`92`,"Dingbat hex":`5C`,"Unicode dec":`8756`,"Unicode hex":`2234`},{"Typeface name":`Symbol`,"Dingbat dec":`93`,"Dingbat hex":`5D`,"Unicode dec":`93`,"Unicode hex":`5D`},{"Typeface name":`Symbol`,"Dingbat dec":`94`,"Dingbat hex":`5E`,"Unicode dec":`8869`,"Unicode hex":`22A5`},{"Typeface name":`Symbol`,"Dingbat dec":`95`,"Dingbat hex":`5F`,"Unicode dec":`95`,"Unicode hex":`5F`},{"Typeface name":`Symbol`,"Dingbat dec":`96`,"Dingbat hex":`60`,"Unicode dec":`8254`,"Unicode hex":`203E`},{"Typeface name":`Symbol`,"Dingbat dec":`97`,"Dingbat hex":`61`,"Unicode dec":`945`,"Unicode hex":`3B1`},{"Typeface name":`Symbol`,"Dingbat dec":`98`,"Dingbat hex":`62`,"Unicode dec":`946`,"Unicode hex":`3B2`},{"Typeface name":`Symbol`,"Dingbat dec":`99`,"Dingbat hex":`63`,"Unicode dec":`967`,"Unicode hex":`3C7`},{"Typeface name":`Symbol`,"Dingbat dec":`100`,"Dingbat hex":`64`,"Unicode dec":`948`,"Unicode hex":`3B4`},{"Typeface name":`Symbol`,"Dingbat dec":`101`,"Dingbat hex":`65`,"Unicode dec":`949`,"Unicode hex":`3B5`},{"Typeface name":`Symbol`,"Dingbat dec":`102`,"Dingbat hex":`66`,"Unicode dec":`966`,"Unicode hex":`3C6`},{"Typeface name":`Symbol`,"Dingbat dec":`103`,"Dingbat hex":`67`,"Unicode dec":`947`,"Unicode hex":`3B3`},{"Typeface name":`Symbol`,"Dingbat dec":`104`,"Dingbat hex":`68`,"Unicode dec":`951`,"Unicode hex":`3B7`},{"Typeface name":`Symbol`,"Dingbat dec":`105`,"Dingbat hex":`69`,"Unicode dec":`953`,"Unicode hex":`3B9`},{"Typeface name":`Symbol`,"Dingbat dec":`106`,"Dingbat hex":`6A`,"Unicode dec":`981`,"Unicode hex":`3D5`},{"Typeface name":`Symbol`,"Dingbat dec":`107`,"Dingbat hex":`6B`,"Unicode dec":`954`,"Unicode hex":`3BA`},{"Typeface name":`Symbol`,"Dingbat dec":`108`,"Dingbat hex":`6C`,"Unicode dec":`955`,"Unicode hex":`3BB`},{"Typeface name":`Symbol`,"Dingbat dec":`109`,"Dingbat hex":`6D`,"Unicode dec":`956`,"Unicode hex":`3BC`},{"Typeface name":`Symbol`,"Dingbat dec":`110`,"Dingbat hex":`6E`,"Unicode dec":`957`,"Unicode hex":`3BD`},{"Typeface name":`Symbol`,"Dingbat dec":`111`,"Dingbat hex":`6F`,"Unicode dec":`959`,"Unicode hex":`3BF`},{"Typeface name":`Symbol`,"Dingbat dec":`112`,"Dingbat hex":`70`,"Unicode dec":`960`,"Unicode hex":`3C0`},{"Typeface name":`Symbol`,"Dingbat dec":`113`,"Dingbat hex":`71`,"Unicode dec":`952`,"Unicode hex":`3B8`},{"Typeface name":`Symbol`,"Dingbat dec":`114`,"Dingbat hex":`72`,"Unicode dec":`961`,"Unicode hex":`3C1`},{"Typeface name":`Symbol`,"Dingbat dec":`115`,"Dingbat hex":`73`,"Unicode dec":`963`,"Unicode hex":`3C3`},{"Typeface name":`Symbol`,"Dingbat dec":`116`,"Dingbat hex":`74`,"Unicode dec":`964`,"Unicode hex":`3C4`},{"Typeface name":`Symbol`,"Dingbat dec":`117`,"Dingbat hex":`75`,"Unicode dec":`965`,"Unicode hex":`3C5`},{"Typeface name":`Symbol`,"Dingbat dec":`118`,"Dingbat hex":`76`,"Unicode dec":`982`,"Unicode hex":`3D6`},{"Typeface name":`Symbol`,"Dingbat dec":`119`,"Dingbat hex":`77`,"Unicode dec":`969`,"Unicode hex":`3C9`},{"Typeface name":`Symbol`,"Dingbat dec":`120`,"Dingbat hex":`78`,"Unicode dec":`958`,"Unicode hex":`3BE`},{"Typeface name":`Symbol`,"Dingbat dec":`121`,"Dingbat hex":`79`,"Unicode dec":`968`,"Unicode hex":`3C8`},{"Typeface name":`Symbol`,"Dingbat dec":`122`,"Dingbat hex":`7A`,"Unicode dec":`950`,"Unicode hex":`3B6`},{"Typeface name":`Symbol`,"Dingbat dec":`123`,"Dingbat hex":`7B`,"Unicode dec":`123`,"Unicode hex":`7B`},{"Typeface name":`Symbol`,"Dingbat dec":`124`,"Dingbat hex":`7C`,"Unicode dec":`124`,"Unicode hex":`7C`},{"Typeface name":`Symbol`,"Dingbat dec":`125`,"Dingbat hex":`7D`,"Unicode dec":`125`,"Unicode hex":`7D`},{"Typeface name":`Symbol`,"Dingbat dec":`126`,"Dingbat hex":`7E`,"Unicode dec":`126`,"Unicode hex":`7E`},{"Typeface name":`Symbol`,"Dingbat dec":`160`,"Dingbat hex":`A0`,"Unicode dec":`8364`,"Unicode hex":`20AC`},{"Typeface name":`Symbol`,"Dingbat dec":`161`,"Dingbat hex":`A1`,"Unicode dec":`978`,"Unicode hex":`3D2`},{"Typeface name":`Symbol`,"Dingbat dec":`162`,"Dingbat hex":`A2`,"Unicode dec":`8242`,"Unicode hex":`2032`},{"Typeface name":`Symbol`,"Dingbat dec":`163`,"Dingbat hex":`A3`,"Unicode dec":`8804`,"Unicode hex":`2264`},{"Typeface name":`Symbol`,"Dingbat dec":`164`,"Dingbat hex":`A4`,"Unicode dec":`8260`,"Unicode hex":`2044`},{"Typeface name":`Symbol`,"Dingbat dec":`165`,"Dingbat hex":`A5`,"Unicode dec":`8734`,"Unicode hex":`221E`},{"Typeface name":`Symbol`,"Dingbat dec":`166`,"Dingbat hex":`A6`,"Unicode dec":`402`,"Unicode hex":`192`},{"Typeface name":`Symbol`,"Dingbat dec":`167`,"Dingbat hex":`A7`,"Unicode dec":`9827`,"Unicode hex":`2663`},{"Typeface name":`Symbol`,"Dingbat dec":`168`,"Dingbat hex":`A8`,"Unicode dec":`9830`,"Unicode hex":`2666`},{"Typeface name":`Symbol`,"Dingbat dec":`169`,"Dingbat hex":`A9`,"Unicode dec":`9829`,"Unicode hex":`2665`},{"Typeface name":`Symbol`,"Dingbat dec":`170`,"Dingbat hex":`AA`,"Unicode dec":`9824`,"Unicode hex":`2660`},{"Typeface name":`Symbol`,"Dingbat dec":`171`,"Dingbat hex":`AB`,"Unicode dec":`8596`,"Unicode hex":`2194`},{"Typeface name":`Symbol`,"Dingbat dec":`172`,"Dingbat hex":`AC`,"Unicode dec":`8592`,"Unicode hex":`2190`},{"Typeface name":`Symbol`,"Dingbat dec":`173`,"Dingbat hex":`AD`,"Unicode dec":`8593`,"Unicode hex":`2191`},{"Typeface name":`Symbol`,"Dingbat dec":`174`,"Dingbat hex":`AE`,"Unicode dec":`8594`,"Unicode hex":`2192`},{"Typeface name":`Symbol`,"Dingbat dec":`175`,"Dingbat hex":`AF`,"Unicode dec":`8595`,"Unicode hex":`2193`},{"Typeface name":`Symbol`,"Dingbat dec":`176`,"Dingbat hex":`B0`,"Unicode dec":`176`,"Unicode hex":`B0`},{"Typeface name":`Symbol`,"Dingbat dec":`177`,"Dingbat hex":`B1`,"Unicode dec":`177`,"Unicode hex":`B1`},{"Typeface name":`Symbol`,"Dingbat dec":`178`,"Dingbat hex":`B2`,"Unicode dec":`8243`,"Unicode hex":`2033`},{"Typeface name":`Symbol`,"Dingbat dec":`179`,"Dingbat hex":`B3`,"Unicode dec":`8805`,"Unicode hex":`2265`},{"Typeface name":`Symbol`,"Dingbat dec":`180`,"Dingbat hex":`B4`,"Unicode dec":`215`,"Unicode hex":`D7`},{"Typeface name":`Symbol`,"Dingbat dec":`181`,"Dingbat hex":`B5`,"Unicode dec":`8733`,"Unicode hex":`221D`},{"Typeface name":`Symbol`,"Dingbat dec":`182`,"Dingbat hex":`B6`,"Unicode dec":`8706`,"Unicode hex":`2202`},{"Typeface name":`Symbol`,"Dingbat dec":`183`,"Dingbat hex":`B7`,"Unicode dec":`8226`,"Unicode hex":`2022`},{"Typeface name":`Symbol`,"Dingbat dec":`184`,"Dingbat hex":`B8`,"Unicode dec":`247`,"Unicode hex":`F7`},{"Typeface name":`Symbol`,"Dingbat dec":`185`,"Dingbat hex":`B9`,"Unicode dec":`8800`,"Unicode hex":`2260`},{"Typeface name":`Symbol`,"Dingbat dec":`186`,"Dingbat hex":`BA`,"Unicode dec":`8801`,"Unicode hex":`2261`},{"Typeface name":`Symbol`,"Dingbat dec":`187`,"Dingbat hex":`BB`,"Unicode dec":`8776`,"Unicode hex":`2248`},{"Typeface name":`Symbol`,"Dingbat dec":`188`,"Dingbat hex":`BC`,"Unicode dec":`8230`,"Unicode hex":`2026`},{"Typeface name":`Symbol`,"Dingbat dec":`189`,"Dingbat hex":`BD`,"Unicode dec":`9168`,"Unicode hex":`23D0`},{"Typeface name":`Symbol`,"Dingbat dec":`190`,"Dingbat hex":`BE`,"Unicode dec":`9135`,"Unicode hex":`23AF`},{"Typeface name":`Symbol`,"Dingbat dec":`191`,"Dingbat hex":`BF`,"Unicode dec":`8629`,"Unicode hex":`21B5`},{"Typeface name":`Symbol`,"Dingbat dec":`192`,"Dingbat hex":`C0`,"Unicode dec":`8501`,"Unicode hex":`2135`},{"Typeface name":`Symbol`,"Dingbat dec":`193`,"Dingbat hex":`C1`,"Unicode dec":`8465`,"Unicode hex":`2111`},{"Typeface name":`Symbol`,"Dingbat dec":`194`,"Dingbat hex":`C2`,"Unicode dec":`8476`,"Unicode hex":`211C`},{"Typeface name":`Symbol`,"Dingbat dec":`195`,"Dingbat hex":`C3`,"Unicode dec":`8472`,"Unicode hex":`2118`},{"Typeface name":`Symbol`,"Dingbat dec":`196`,"Dingbat hex":`C4`,"Unicode dec":`8855`,"Unicode hex":`2297`},{"Typeface name":`Symbol`,"Dingbat dec":`197`,"Dingbat hex":`C5`,"Unicode dec":`8853`,"Unicode hex":`2295`},{"Typeface name":`Symbol`,"Dingbat dec":`198`,"Dingbat hex":`C6`,"Unicode dec":`8709`,"Unicode hex":`2205`},{"Typeface name":`Symbol`,"Dingbat dec":`199`,"Dingbat hex":`C7`,"Unicode dec":`8745`,"Unicode hex":`2229`},{"Typeface name":`Symbol`,"Dingbat dec":`200`,"Dingbat hex":`C8`,"Unicode dec":`8746`,"Unicode hex":`222A`},{"Typeface name":`Symbol`,"Dingbat dec":`201`,"Dingbat hex":`C9`,"Unicode dec":`8835`,"Unicode hex":`2283`},{"Typeface name":`Symbol`,"Dingbat dec":`202`,"Dingbat hex":`CA`,"Unicode dec":`8839`,"Unicode hex":`2287`},{"Typeface name":`Symbol`,"Dingbat dec":`203`,"Dingbat hex":`CB`,"Unicode dec":`8836`,"Unicode hex":`2284`},{"Typeface name":`Symbol`,"Dingbat dec":`204`,"Dingbat hex":`CC`,"Unicode dec":`8834`,"Unicode hex":`2282`},{"Typeface name":`Symbol`,"Dingbat dec":`205`,"Dingbat hex":`CD`,"Unicode dec":`8838`,"Unicode hex":`2286`},{"Typeface name":`Symbol`,"Dingbat dec":`206`,"Dingbat hex":`CE`,"Unicode dec":`8712`,"Unicode hex":`2208`},{"Typeface name":`Symbol`,"Dingbat dec":`207`,"Dingbat hex":`CF`,"Unicode dec":`8713`,"Unicode hex":`2209`},{"Typeface name":`Symbol`,"Dingbat dec":`208`,"Dingbat hex":`D0`,"Unicode dec":`8736`,"Unicode hex":`2220`},{"Typeface name":`Symbol`,"Dingbat dec":`209`,"Dingbat hex":`D1`,"Unicode dec":`8711`,"Unicode hex":`2207`},{"Typeface name":`Symbol`,"Dingbat dec":`210`,"Dingbat hex":`D2`,"Unicode dec":`174`,"Unicode hex":`AE`},{"Typeface name":`Symbol`,"Dingbat dec":`211`,"Dingbat hex":`D3`,"Unicode dec":`169`,"Unicode hex":`A9`},{"Typeface name":`Symbol`,"Dingbat dec":`212`,"Dingbat hex":`D4`,"Unicode dec":`8482`,"Unicode hex":`2122`},{"Typeface name":`Symbol`,"Dingbat dec":`213`,"Dingbat hex":`D5`,"Unicode dec":`8719`,"Unicode hex":`220F`},{"Typeface name":`Symbol`,"Dingbat dec":`214`,"Dingbat hex":`D6`,"Unicode dec":`8730`,"Unicode hex":`221A`},{"Typeface name":`Symbol`,"Dingbat dec":`215`,"Dingbat hex":`D7`,"Unicode dec":`8901`,"Unicode hex":`22C5`},{"Typeface name":`Symbol`,"Dingbat dec":`216`,"Dingbat hex":`D8`,"Unicode dec":`172`,"Unicode hex":`AC`},{"Typeface name":`Symbol`,"Dingbat dec":`217`,"Dingbat hex":`D9`,"Unicode dec":`8743`,"Unicode hex":`2227`},{"Typeface name":`Symbol`,"Dingbat dec":`218`,"Dingbat hex":`DA`,"Unicode dec":`8744`,"Unicode hex":`2228`},{"Typeface name":`Symbol`,"Dingbat dec":`219`,"Dingbat hex":`DB`,"Unicode dec":`8660`,"Unicode hex":`21D4`},{"Typeface name":`Symbol`,"Dingbat dec":`220`,"Dingbat hex":`DC`,"Unicode dec":`8656`,"Unicode hex":`21D0`},{"Typeface name":`Symbol`,"Dingbat dec":`221`,"Dingbat hex":`DD`,"Unicode dec":`8657`,"Unicode hex":`21D1`},{"Typeface name":`Symbol`,"Dingbat dec":`222`,"Dingbat hex":`DE`,"Unicode dec":`8658`,"Unicode hex":`21D2`},{"Typeface name":`Symbol`,"Dingbat dec":`223`,"Dingbat hex":`DF`,"Unicode dec":`8659`,"Unicode hex":`21D3`},{"Typeface name":`Symbol`,"Dingbat dec":`224`,"Dingbat hex":`E0`,"Unicode dec":`9674`,"Unicode hex":`25CA`},{"Typeface name":`Symbol`,"Dingbat dec":`225`,"Dingbat hex":`E1`,"Unicode dec":`12296`,"Unicode hex":`3008`},{"Typeface name":`Symbol`,"Dingbat dec":`226`,"Dingbat hex":`E2`,"Unicode dec":`174`,"Unicode hex":`AE`},{"Typeface name":`Symbol`,"Dingbat dec":`227`,"Dingbat hex":`E3`,"Unicode dec":`169`,"Unicode hex":`A9`},{"Typeface name":`Symbol`,"Dingbat dec":`228`,"Dingbat hex":`E4`,"Unicode dec":`8482`,"Unicode hex":`2122`},{"Typeface name":`Symbol`,"Dingbat dec":`229`,"Dingbat hex":`E5`,"Unicode dec":`8721`,"Unicode hex":`2211`},{"Typeface name":`Symbol`,"Dingbat dec":`230`,"Dingbat hex":`E6`,"Unicode dec":`9115`,"Unicode hex":`239B`},{"Typeface name":`Symbol`,"Dingbat dec":`231`,"Dingbat hex":`E7`,"Unicode dec":`9116`,"Unicode hex":`239C`},{"Typeface name":`Symbol`,"Dingbat dec":`232`,"Dingbat hex":`E8`,"Unicode dec":`9117`,"Unicode hex":`239D`},{"Typeface name":`Symbol`,"Dingbat dec":`233`,"Dingbat hex":`E9`,"Unicode dec":`9121`,"Unicode hex":`23A1`},{"Typeface name":`Symbol`,"Dingbat dec":`234`,"Dingbat hex":`EA`,"Unicode dec":`9122`,"Unicode hex":`23A2`},{"Typeface name":`Symbol`,"Dingbat dec":`235`,"Dingbat hex":`EB`,"Unicode dec":`9123`,"Unicode hex":`23A3`},{"Typeface name":`Symbol`,"Dingbat dec":`236`,"Dingbat hex":`EC`,"Unicode dec":`9127`,"Unicode hex":`23A7`},{"Typeface name":`Symbol`,"Dingbat dec":`237`,"Dingbat hex":`ED`,"Unicode dec":`9128`,"Unicode hex":`23A8`},{"Typeface name":`Symbol`,"Dingbat dec":`238`,"Dingbat hex":`EE`,"Unicode dec":`9129`,"Unicode hex":`23A9`},{"Typeface name":`Symbol`,"Dingbat dec":`239`,"Dingbat hex":`EF`,"Unicode dec":`9130`,"Unicode hex":`23AA`},{"Typeface name":`Symbol`,"Dingbat dec":`240`,"Dingbat hex":`F0`,"Unicode dec":`63743`,"Unicode hex":`F8FF`},{"Typeface name":`Symbol`,"Dingbat dec":`241`,"Dingbat hex":`F1`,"Unicode dec":`12297`,"Unicode hex":`3009`},{"Typeface name":`Symbol`,"Dingbat dec":`242`,"Dingbat hex":`F2`,"Unicode dec":`8747`,"Unicode hex":`222B`},{"Typeface name":`Symbol`,"Dingbat dec":`243`,"Dingbat hex":`F3`,"Unicode dec":`8992`,"Unicode hex":`2320`},{"Typeface name":`Symbol`,"Dingbat dec":`244`,"Dingbat hex":`F4`,"Unicode dec":`9134`,"Unicode hex":`23AE`},{"Typeface name":`Symbol`,"Dingbat dec":`245`,"Dingbat hex":`F5`,"Unicode dec":`8993`,"Unicode hex":`2321`},{"Typeface name":`Symbol`,"Dingbat dec":`246`,"Dingbat hex":`F6`,"Unicode dec":`9118`,"Unicode hex":`239E`},{"Typeface name":`Symbol`,"Dingbat dec":`247`,"Dingbat hex":`F7`,"Unicode dec":`9119`,"Unicode hex":`239F`},{"Typeface name":`Symbol`,"Dingbat dec":`248`,"Dingbat hex":`F8`,"Unicode dec":`9120`,"Unicode hex":`23A0`},{"Typeface name":`Symbol`,"Dingbat dec":`249`,"Dingbat hex":`F9`,"Unicode dec":`9124`,"Unicode hex":`23A4`},{"Typeface name":`Symbol`,"Dingbat dec":`250`,"Dingbat hex":`FA`,"Unicode dec":`9125`,"Unicode hex":`23A5`},{"Typeface name":`Symbol`,"Dingbat dec":`251`,"Dingbat hex":`FB`,"Unicode dec":`9126`,"Unicode hex":`23A6`},{"Typeface name":`Symbol`,"Dingbat dec":`252`,"Dingbat hex":`FC`,"Unicode dec":`9131`,"Unicode hex":`23AB`},{"Typeface name":`Symbol`,"Dingbat dec":`253`,"Dingbat hex":`FD`,"Unicode dec":`9132`,"Unicode hex":`23AC`},{"Typeface name":`Symbol`,"Dingbat dec":`254`,"Dingbat hex":`FE`,"Unicode dec":`9133`,"Unicode hex":`23AD`},{"Typeface name":`Webdings`,"Dingbat dec":`32`,"Dingbat hex":`20`,"Unicode dec":`32`,"Unicode hex":`20`},{"Typeface name":`Webdings`,"Dingbat dec":`33`,"Dingbat hex":`21`,"Unicode dec":`128375`,"Unicode hex":`1F577`},{"Typeface name":`Webdings`,"Dingbat dec":`34`,"Dingbat hex":`22`,"Unicode dec":`128376`,"Unicode hex":`1F578`},{"Typeface name":`Webdings`,"Dingbat dec":`35`,"Dingbat hex":`23`,"Unicode dec":`128370`,"Unicode hex":`1F572`},{"Typeface name":`Webdings`,"Dingbat dec":`36`,"Dingbat hex":`24`,"Unicode dec":`128374`,"Unicode hex":`1F576`},{"Typeface name":`Webdings`,"Dingbat dec":`37`,"Dingbat hex":`25`,"Unicode dec":`127942`,"Unicode hex":`1F3C6`},{"Typeface name":`Webdings`,"Dingbat dec":`38`,"Dingbat hex":`26`,"Unicode dec":`127894`,"Unicode hex":`1F396`},{"Typeface name":`Webdings`,"Dingbat dec":`39`,"Dingbat hex":`27`,"Unicode dec":`128391`,"Unicode hex":`1F587`},{"Typeface name":`Webdings`,"Dingbat dec":`40`,"Dingbat hex":`28`,"Unicode dec":`128488`,"Unicode hex":`1F5E8`},{"Typeface name":`Webdings`,"Dingbat dec":`41`,"Dingbat hex":`29`,"Unicode dec":`128489`,"Unicode hex":`1F5E9`},{"Typeface name":`Webdings`,"Dingbat dec":`42`,"Dingbat hex":`2A`,"Unicode dec":`128496`,"Unicode hex":`1F5F0`},{"Typeface name":`Webdings`,"Dingbat dec":`43`,"Dingbat hex":`2B`,"Unicode dec":`128497`,"Unicode hex":`1F5F1`},{"Typeface name":`Webdings`,"Dingbat dec":`44`,"Dingbat hex":`2C`,"Unicode dec":`127798`,"Unicode hex":`1F336`},{"Typeface name":`Webdings`,"Dingbat dec":`45`,"Dingbat hex":`2D`,"Unicode dec":`127895`,"Unicode hex":`1F397`},{"Typeface name":`Webdings`,"Dingbat dec":`46`,"Dingbat hex":`2E`,"Unicode dec":`128638`,"Unicode hex":`1F67E`},{"Typeface name":`Webdings`,"Dingbat dec":`47`,"Dingbat hex":`2F`,"Unicode dec":`128636`,"Unicode hex":`1F67C`},{"Typeface name":`Webdings`,"Dingbat dec":`48`,"Dingbat hex":`30`,"Unicode dec":`128469`,"Unicode hex":`1F5D5`},{"Typeface name":`Webdings`,"Dingbat dec":`49`,"Dingbat hex":`31`,"Unicode dec":`128470`,"Unicode hex":`1F5D6`},{"Typeface name":`Webdings`,"Dingbat dec":`50`,"Dingbat hex":`32`,"Unicode dec":`128471`,"Unicode hex":`1F5D7`},{"Typeface name":`Webdings`,"Dingbat dec":`51`,"Dingbat hex":`33`,"Unicode dec":`9204`,"Unicode hex":`23F4`},{"Typeface name":`Webdings`,"Dingbat dec":`52`,"Dingbat hex":`34`,"Unicode dec":`9205`,"Unicode hex":`23F5`},{"Typeface name":`Webdings`,"Dingbat dec":`53`,"Dingbat hex":`35`,"Unicode dec":`9206`,"Unicode hex":`23F6`},{"Typeface name":`Webdings`,"Dingbat dec":`54`,"Dingbat hex":`36`,"Unicode dec":`9207`,"Unicode hex":`23F7`},{"Typeface name":`Webdings`,"Dingbat dec":`55`,"Dingbat hex":`37`,"Unicode dec":`9194`,"Unicode hex":`23EA`},{"Typeface name":`Webdings`,"Dingbat dec":`56`,"Dingbat hex":`38`,"Unicode dec":`9193`,"Unicode hex":`23E9`},{"Typeface name":`Webdings`,"Dingbat dec":`57`,"Dingbat hex":`39`,"Unicode dec":`9198`,"Unicode hex":`23EE`},{"Typeface name":`Webdings`,"Dingbat dec":`58`,"Dingbat hex":`3A`,"Unicode dec":`9197`,"Unicode hex":`23ED`},{"Typeface name":`Webdings`,"Dingbat dec":`59`,"Dingbat hex":`3B`,"Unicode dec":`9208`,"Unicode hex":`23F8`},{"Typeface name":`Webdings`,"Dingbat dec":`60`,"Dingbat hex":`3C`,"Unicode dec":`9209`,"Unicode hex":`23F9`},{"Typeface name":`Webdings`,"Dingbat dec":`61`,"Dingbat hex":`3D`,"Unicode dec":`9210`,"Unicode hex":`23FA`},{"Typeface name":`Webdings`,"Dingbat dec":`62`,"Dingbat hex":`3E`,"Unicode dec":`128474`,"Unicode hex":`1F5DA`},{"Typeface name":`Webdings`,"Dingbat dec":`63`,"Dingbat hex":`3F`,"Unicode dec":`128499`,"Unicode hex":`1F5F3`},{"Typeface name":`Webdings`,"Dingbat dec":`64`,"Dingbat hex":`40`,"Unicode dec":`128736`,"Unicode hex":`1F6E0`},{"Typeface name":`Webdings`,"Dingbat dec":`65`,"Dingbat hex":`41`,"Unicode dec":`127959`,"Unicode hex":`1F3D7`},{"Typeface name":`Webdings`,"Dingbat dec":`66`,"Dingbat hex":`42`,"Unicode dec":`127960`,"Unicode hex":`1F3D8`},{"Typeface name":`Webdings`,"Dingbat dec":`67`,"Dingbat hex":`43`,"Unicode dec":`127961`,"Unicode hex":`1F3D9`},{"Typeface name":`Webdings`,"Dingbat dec":`68`,"Dingbat hex":`44`,"Unicode dec":`127962`,"Unicode hex":`1F3DA`},{"Typeface name":`Webdings`,"Dingbat dec":`69`,"Dingbat hex":`45`,"Unicode dec":`127964`,"Unicode hex":`1F3DC`},{"Typeface name":`Webdings`,"Dingbat dec":`70`,"Dingbat hex":`46`,"Unicode dec":`127981`,"Unicode hex":`1F3ED`},{"Typeface name":`Webdings`,"Dingbat dec":`71`,"Dingbat hex":`47`,"Unicode dec":`127963`,"Unicode hex":`1F3DB`},{"Typeface name":`Webdings`,"Dingbat dec":`72`,"Dingbat hex":`48`,"Unicode dec":`127968`,"Unicode hex":`1F3E0`},{"Typeface name":`Webdings`,"Dingbat dec":`73`,"Dingbat hex":`49`,"Unicode dec":`127958`,"Unicode hex":`1F3D6`},{"Typeface name":`Webdings`,"Dingbat dec":`74`,"Dingbat hex":`4A`,"Unicode dec":`127965`,"Unicode hex":`1F3DD`},{"Typeface name":`Webdings`,"Dingbat dec":`75`,"Dingbat hex":`4B`,"Unicode dec":`128739`,"Unicode hex":`1F6E3`},{"Typeface name":`Webdings`,"Dingbat dec":`76`,"Dingbat hex":`4C`,"Unicode dec":`128269`,"Unicode hex":`1F50D`},{"Typeface name":`Webdings`,"Dingbat dec":`77`,"Dingbat hex":`4D`,"Unicode dec":`127956`,"Unicode hex":`1F3D4`},{"Typeface name":`Webdings`,"Dingbat dec":`78`,"Dingbat hex":`4E`,"Unicode dec":`128065`,"Unicode hex":`1F441`},{"Typeface name":`Webdings`,"Dingbat dec":`79`,"Dingbat hex":`4F`,"Unicode dec":`128066`,"Unicode hex":`1F442`},{"Typeface name":`Webdings`,"Dingbat dec":`80`,"Dingbat hex":`50`,"Unicode dec":`127966`,"Unicode hex":`1F3DE`},{"Typeface name":`Webdings`,"Dingbat dec":`81`,"Dingbat hex":`51`,"Unicode dec":`127957`,"Unicode hex":`1F3D5`},{"Typeface name":`Webdings`,"Dingbat dec":`82`,"Dingbat hex":`52`,"Unicode dec":`128740`,"Unicode hex":`1F6E4`},{"Typeface name":`Webdings`,"Dingbat dec":`83`,"Dingbat hex":`53`,"Unicode dec":`127967`,"Unicode hex":`1F3DF`},{"Typeface name":`Webdings`,"Dingbat dec":`84`,"Dingbat hex":`54`,"Unicode dec":`128755`,"Unicode hex":`1F6F3`},{"Typeface name":`Webdings`,"Dingbat dec":`85`,"Dingbat hex":`55`,"Unicode dec":`128364`,"Unicode hex":`1F56C`},{"Typeface name":`Webdings`,"Dingbat dec":`86`,"Dingbat hex":`56`,"Unicode dec":`128363`,"Unicode hex":`1F56B`},{"Typeface name":`Webdings`,"Dingbat dec":`87`,"Dingbat hex":`57`,"Unicode dec":`128360`,"Unicode hex":`1F568`},{"Typeface name":`Webdings`,"Dingbat dec":`88`,"Dingbat hex":`58`,"Unicode dec":`128264`,"Unicode hex":`1F508`},{"Typeface name":`Webdings`,"Dingbat dec":`89`,"Dingbat hex":`59`,"Unicode dec":`127892`,"Unicode hex":`1F394`},{"Typeface name":`Webdings`,"Dingbat dec":`90`,"Dingbat hex":`5A`,"Unicode dec":`127893`,"Unicode hex":`1F395`},{"Typeface name":`Webdings`,"Dingbat dec":`91`,"Dingbat hex":`5B`,"Unicode dec":`128492`,"Unicode hex":`1F5EC`},{"Typeface name":`Webdings`,"Dingbat dec":`92`,"Dingbat hex":`5C`,"Unicode dec":`128637`,"Unicode hex":`1F67D`},{"Typeface name":`Webdings`,"Dingbat dec":`93`,"Dingbat hex":`5D`,"Unicode dec":`128493`,"Unicode hex":`1F5ED`},{"Typeface name":`Webdings`,"Dingbat dec":`94`,"Dingbat hex":`5E`,"Unicode dec":`128490`,"Unicode hex":`1F5EA`},{"Typeface name":`Webdings`,"Dingbat dec":`95`,"Dingbat hex":`5F`,"Unicode dec":`128491`,"Unicode hex":`1F5EB`},{"Typeface name":`Webdings`,"Dingbat dec":`96`,"Dingbat hex":`60`,"Unicode dec":`11156`,"Unicode hex":`2B94`},{"Typeface name":`Webdings`,"Dingbat dec":`97`,"Dingbat hex":`61`,"Unicode dec":`10004`,"Unicode hex":`2714`},{"Typeface name":`Webdings`,"Dingbat dec":`98`,"Dingbat hex":`62`,"Unicode dec":`128690`,"Unicode hex":`1F6B2`},{"Typeface name":`Webdings`,"Dingbat dec":`99`,"Dingbat hex":`63`,"Unicode dec":`11036`,"Unicode hex":`2B1C`},{"Typeface name":`Webdings`,"Dingbat dec":`100`,"Dingbat hex":`64`,"Unicode dec":`128737`,"Unicode hex":`1F6E1`},{"Typeface name":`Webdings`,"Dingbat dec":`101`,"Dingbat hex":`65`,"Unicode dec":`128230`,"Unicode hex":`1F4E6`},{"Typeface name":`Webdings`,"Dingbat dec":`102`,"Dingbat hex":`66`,"Unicode dec":`128753`,"Unicode hex":`1F6F1`},{"Typeface name":`Webdings`,"Dingbat dec":`103`,"Dingbat hex":`67`,"Unicode dec":`11035`,"Unicode hex":`2B1B`},{"Typeface name":`Webdings`,"Dingbat dec":`104`,"Dingbat hex":`68`,"Unicode dec":`128657`,"Unicode hex":`1F691`},{"Typeface name":`Webdings`,"Dingbat dec":`105`,"Dingbat hex":`69`,"Unicode dec":`128712`,"Unicode hex":`1F6C8`},{"Typeface name":`Webdings`,"Dingbat dec":`106`,"Dingbat hex":`6A`,"Unicode dec":`128745`,"Unicode hex":`1F6E9`},{"Typeface name":`Webdings`,"Dingbat dec":`107`,"Dingbat hex":`6B`,"Unicode dec":`128752`,"Unicode hex":`1F6F0`},{"Typeface name":`Webdings`,"Dingbat dec":`108`,"Dingbat hex":`6C`,"Unicode dec":`128968`,"Unicode hex":`1F7C8`},{"Typeface name":`Webdings`,"Dingbat dec":`109`,"Dingbat hex":`6D`,"Unicode dec":`128372`,"Unicode hex":`1F574`},{"Typeface name":`Webdings`,"Dingbat dec":`110`,"Dingbat hex":`6E`,"Unicode dec":`11044`,"Unicode hex":`2B24`},{"Typeface name":`Webdings`,"Dingbat dec":`111`,"Dingbat hex":`6F`,"Unicode dec":`128741`,"Unicode hex":`1F6E5`},{"Typeface name":`Webdings`,"Dingbat dec":`112`,"Dingbat hex":`70`,"Unicode dec":`128660`,"Unicode hex":`1F694`},{"Typeface name":`Webdings`,"Dingbat dec":`113`,"Dingbat hex":`71`,"Unicode dec":`128472`,"Unicode hex":`1F5D8`},{"Typeface name":`Webdings`,"Dingbat dec":`114`,"Dingbat hex":`72`,"Unicode dec":`128473`,"Unicode hex":`1F5D9`},{"Typeface name":`Webdings`,"Dingbat dec":`115`,"Dingbat hex":`73`,"Unicode dec":`10067`,"Unicode hex":`2753`},{"Typeface name":`Webdings`,"Dingbat dec":`116`,"Dingbat hex":`74`,"Unicode dec":`128754`,"Unicode hex":`1F6F2`},{"Typeface name":`Webdings`,"Dingbat dec":`117`,"Dingbat hex":`75`,"Unicode dec":`128647`,"Unicode hex":`1F687`},{"Typeface name":`Webdings`,"Dingbat dec":`118`,"Dingbat hex":`76`,"Unicode dec":`128653`,"Unicode hex":`1F68D`},{"Typeface name":`Webdings`,"Dingbat dec":`119`,"Dingbat hex":`77`,"Unicode dec":`9971`,"Unicode hex":`26F3`},{"Typeface name":`Webdings`,"Dingbat dec":`120`,"Dingbat hex":`78`,"Unicode dec":`10680`,"Unicode hex":`29B8`},{"Typeface name":`Webdings`,"Dingbat dec":`121`,"Dingbat hex":`79`,"Unicode dec":`8854`,"Unicode hex":`2296`},{"Typeface name":`Webdings`,"Dingbat dec":`122`,"Dingbat hex":`7A`,"Unicode dec":`128685`,"Unicode hex":`1F6AD`},{"Typeface name":`Webdings`,"Dingbat dec":`123`,"Dingbat hex":`7B`,"Unicode dec":`128494`,"Unicode hex":`1F5EE`},{"Typeface name":`Webdings`,"Dingbat dec":`124`,"Dingbat hex":`7C`,"Unicode dec":`9168`,"Unicode hex":`23D0`},{"Typeface name":`Webdings`,"Dingbat dec":`125`,"Dingbat hex":`7D`,"Unicode dec":`128495`,"Unicode hex":`1F5EF`},{"Typeface name":`Webdings`,"Dingbat dec":`126`,"Dingbat hex":`7E`,"Unicode dec":`128498`,"Unicode hex":`1F5F2`},{"Typeface name":`Webdings`,"Dingbat dec":`128`,"Dingbat hex":`80`,"Unicode dec":`128697`,"Unicode hex":`1F6B9`},{"Typeface name":`Webdings`,"Dingbat dec":`129`,"Dingbat hex":`81`,"Unicode dec":`128698`,"Unicode hex":`1F6BA`},{"Typeface name":`Webdings`,"Dingbat dec":`130`,"Dingbat hex":`82`,"Unicode dec":`128713`,"Unicode hex":`1F6C9`},{"Typeface name":`Webdings`,"Dingbat dec":`131`,"Dingbat hex":`83`,"Unicode dec":`128714`,"Unicode hex":`1F6CA`},{"Typeface name":`Webdings`,"Dingbat dec":`132`,"Dingbat hex":`84`,"Unicode dec":`128700`,"Unicode hex":`1F6BC`},{"Typeface name":`Webdings`,"Dingbat dec":`133`,"Dingbat hex":`85`,"Unicode dec":`128125`,"Unicode hex":`1F47D`},{"Typeface name":`Webdings`,"Dingbat dec":`134`,"Dingbat hex":`86`,"Unicode dec":`127947`,"Unicode hex":`1F3CB`},{"Typeface name":`Webdings`,"Dingbat dec":`135`,"Dingbat hex":`87`,"Unicode dec":`9975`,"Unicode hex":`26F7`},{"Typeface name":`Webdings`,"Dingbat dec":`136`,"Dingbat hex":`88`,"Unicode dec":`127938`,"Unicode hex":`1F3C2`},{"Typeface name":`Webdings`,"Dingbat dec":`137`,"Dingbat hex":`89`,"Unicode dec":`127948`,"Unicode hex":`1F3CC`},{"Typeface name":`Webdings`,"Dingbat dec":`138`,"Dingbat hex":`8A`,"Unicode dec":`127946`,"Unicode hex":`1F3CA`},{"Typeface name":`Webdings`,"Dingbat dec":`139`,"Dingbat hex":`8B`,"Unicode dec":`127940`,"Unicode hex":`1F3C4`},{"Typeface name":`Webdings`,"Dingbat dec":`140`,"Dingbat hex":`8C`,"Unicode dec":`127949`,"Unicode hex":`1F3CD`},{"Typeface name":`Webdings`,"Dingbat dec":`141`,"Dingbat hex":`8D`,"Unicode dec":`127950`,"Unicode hex":`1F3CE`},{"Typeface name":`Webdings`,"Dingbat dec":`142`,"Dingbat hex":`8E`,"Unicode dec":`128664`,"Unicode hex":`1F698`},{"Typeface name":`Webdings`,"Dingbat dec":`143`,"Dingbat hex":`8F`,"Unicode dec":`128480`,"Unicode hex":`1F5E0`},{"Typeface name":`Webdings`,"Dingbat dec":`144`,"Dingbat hex":`90`,"Unicode dec":`128738`,"Unicode hex":`1F6E2`},{"Typeface name":`Webdings`,"Dingbat dec":`145`,"Dingbat hex":`91`,"Unicode dec":`128176`,"Unicode hex":`1F4B0`},{"Typeface name":`Webdings`,"Dingbat dec":`146`,"Dingbat hex":`92`,"Unicode dec":`127991`,"Unicode hex":`1F3F7`},{"Typeface name":`Webdings`,"Dingbat dec":`147`,"Dingbat hex":`93`,"Unicode dec":`128179`,"Unicode hex":`1F4B3`},{"Typeface name":`Webdings`,"Dingbat dec":`148`,"Dingbat hex":`94`,"Unicode dec":`128106`,"Unicode hex":`1F46A`},{"Typeface name":`Webdings`,"Dingbat dec":`149`,"Dingbat hex":`95`,"Unicode dec":`128481`,"Unicode hex":`1F5E1`},{"Typeface name":`Webdings`,"Dingbat dec":`150`,"Dingbat hex":`96`,"Unicode dec":`128482`,"Unicode hex":`1F5E2`},{"Typeface name":`Webdings`,"Dingbat dec":`151`,"Dingbat hex":`97`,"Unicode dec":`128483`,"Unicode hex":`1F5E3`},{"Typeface name":`Webdings`,"Dingbat dec":`152`,"Dingbat hex":`98`,"Unicode dec":`10031`,"Unicode hex":`272F`},{"Typeface name":`Webdings`,"Dingbat dec":`153`,"Dingbat hex":`99`,"Unicode dec":`128388`,"Unicode hex":`1F584`},{"Typeface name":`Webdings`,"Dingbat dec":`154`,"Dingbat hex":`9A`,"Unicode dec":`128389`,"Unicode hex":`1F585`},{"Typeface name":`Webdings`,"Dingbat dec":`155`,"Dingbat hex":`9B`,"Unicode dec":`128387`,"Unicode hex":`1F583`},{"Typeface name":`Webdings`,"Dingbat dec":`156`,"Dingbat hex":`9C`,"Unicode dec":`128390`,"Unicode hex":`1F586`},{"Typeface name":`Webdings`,"Dingbat dec":`157`,"Dingbat hex":`9D`,"Unicode dec":`128441`,"Unicode hex":`1F5B9`},{"Typeface name":`Webdings`,"Dingbat dec":`158`,"Dingbat hex":`9E`,"Unicode dec":`128442`,"Unicode hex":`1F5BA`},{"Typeface name":`Webdings`,"Dingbat dec":`159`,"Dingbat hex":`9F`,"Unicode dec":`128443`,"Unicode hex":`1F5BB`},{"Typeface name":`Webdings`,"Dingbat dec":`160`,"Dingbat hex":`A0`,"Unicode dec":`128373`,"Unicode hex":`1F575`},{"Typeface name":`Webdings`,"Dingbat dec":`161`,"Dingbat hex":`A1`,"Unicode dec":`128368`,"Unicode hex":`1F570`},{"Typeface name":`Webdings`,"Dingbat dec":`162`,"Dingbat hex":`A2`,"Unicode dec":`128445`,"Unicode hex":`1F5BD`},{"Typeface name":`Webdings`,"Dingbat dec":`163`,"Dingbat hex":`A3`,"Unicode dec":`128446`,"Unicode hex":`1F5BE`},{"Typeface name":`Webdings`,"Dingbat dec":`164`,"Dingbat hex":`A4`,"Unicode dec":`128203`,"Unicode hex":`1F4CB`},{"Typeface name":`Webdings`,"Dingbat dec":`165`,"Dingbat hex":`A5`,"Unicode dec":`128466`,"Unicode hex":`1F5D2`},{"Typeface name":`Webdings`,"Dingbat dec":`166`,"Dingbat hex":`A6`,"Unicode dec":`128467`,"Unicode hex":`1F5D3`},{"Typeface name":`Webdings`,"Dingbat dec":`167`,"Dingbat hex":`A7`,"Unicode dec":`128366`,"Unicode hex":`1F56E`},{"Typeface name":`Webdings`,"Dingbat dec":`168`,"Dingbat hex":`A8`,"Unicode dec":`128218`,"Unicode hex":`1F4DA`},{"Typeface name":`Webdings`,"Dingbat dec":`169`,"Dingbat hex":`A9`,"Unicode dec":`128478`,"Unicode hex":`1F5DE`},{"Typeface name":`Webdings`,"Dingbat dec":`170`,"Dingbat hex":`AA`,"Unicode dec":`128479`,"Unicode hex":`1F5DF`},{"Typeface name":`Webdings`,"Dingbat dec":`171`,"Dingbat hex":`AB`,"Unicode dec":`128451`,"Unicode hex":`1F5C3`},{"Typeface name":`Webdings`,"Dingbat dec":`172`,"Dingbat hex":`AC`,"Unicode dec":`128450`,"Unicode hex":`1F5C2`},{"Typeface name":`Webdings`,"Dingbat dec":`173`,"Dingbat hex":`AD`,"Unicode dec":`128444`,"Unicode hex":`1F5BC`},{"Typeface name":`Webdings`,"Dingbat dec":`174`,"Dingbat hex":`AE`,"Unicode dec":`127917`,"Unicode hex":`1F3AD`},{"Typeface name":`Webdings`,"Dingbat dec":`175`,"Dingbat hex":`AF`,"Unicode dec":`127900`,"Unicode hex":`1F39C`},{"Typeface name":`Webdings`,"Dingbat dec":`176`,"Dingbat hex":`B0`,"Unicode dec":`127896`,"Unicode hex":`1F398`},{"Typeface name":`Webdings`,"Dingbat dec":`177`,"Dingbat hex":`B1`,"Unicode dec":`127897`,"Unicode hex":`1F399`},{"Typeface name":`Webdings`,"Dingbat dec":`178`,"Dingbat hex":`B2`,"Unicode dec":`127911`,"Unicode hex":`1F3A7`},{"Typeface name":`Webdings`,"Dingbat dec":`179`,"Dingbat hex":`B3`,"Unicode dec":`128191`,"Unicode hex":`1F4BF`},{"Typeface name":`Webdings`,"Dingbat dec":`180`,"Dingbat hex":`B4`,"Unicode dec":`127902`,"Unicode hex":`1F39E`},{"Typeface name":`Webdings`,"Dingbat dec":`181`,"Dingbat hex":`B5`,"Unicode dec":`128247`,"Unicode hex":`1F4F7`},{"Typeface name":`Webdings`,"Dingbat dec":`182`,"Dingbat hex":`B6`,"Unicode dec":`127903`,"Unicode hex":`1F39F`},{"Typeface name":`Webdings`,"Dingbat dec":`183`,"Dingbat hex":`B7`,"Unicode dec":`127916`,"Unicode hex":`1F3AC`},{"Typeface name":`Webdings`,"Dingbat dec":`184`,"Dingbat hex":`B8`,"Unicode dec":`128253`,"Unicode hex":`1F4FD`},{"Typeface name":`Webdings`,"Dingbat dec":`185`,"Dingbat hex":`B9`,"Unicode dec":`128249`,"Unicode hex":`1F4F9`},{"Typeface name":`Webdings`,"Dingbat dec":`186`,"Dingbat hex":`BA`,"Unicode dec":`128254`,"Unicode hex":`1F4FE`},{"Typeface name":`Webdings`,"Dingbat dec":`187`,"Dingbat hex":`BB`,"Unicode dec":`128251`,"Unicode hex":`1F4FB`},{"Typeface name":`Webdings`,"Dingbat dec":`188`,"Dingbat hex":`BC`,"Unicode dec":`127898`,"Unicode hex":`1F39A`},{"Typeface name":`Webdings`,"Dingbat dec":`189`,"Dingbat hex":`BD`,"Unicode dec":`127899`,"Unicode hex":`1F39B`},{"Typeface name":`Webdings`,"Dingbat dec":`190`,"Dingbat hex":`BE`,"Unicode dec":`128250`,"Unicode hex":`1F4FA`},{"Typeface name":`Webdings`,"Dingbat dec":`191`,"Dingbat hex":`BF`,"Unicode dec":`128187`,"Unicode hex":`1F4BB`},{"Typeface name":`Webdings`,"Dingbat dec":`192`,"Dingbat hex":`C0`,"Unicode dec":`128421`,"Unicode hex":`1F5A5`},{"Typeface name":`Webdings`,"Dingbat dec":`193`,"Dingbat hex":`C1`,"Unicode dec":`128422`,"Unicode hex":`1F5A6`},{"Typeface name":`Webdings`,"Dingbat dec":`194`,"Dingbat hex":`C2`,"Unicode dec":`128423`,"Unicode hex":`1F5A7`},{"Typeface name":`Webdings`,"Dingbat dec":`195`,"Dingbat hex":`C3`,"Unicode dec":`128377`,"Unicode hex":`1F579`},{"Typeface name":`Webdings`,"Dingbat dec":`196`,"Dingbat hex":`C4`,"Unicode dec":`127918`,"Unicode hex":`1F3AE`},{"Typeface name":`Webdings`,"Dingbat dec":`197`,"Dingbat hex":`C5`,"Unicode dec":`128379`,"Unicode hex":`1F57B`},{"Typeface name":`Webdings`,"Dingbat dec":`198`,"Dingbat hex":`C6`,"Unicode dec":`128380`,"Unicode hex":`1F57C`},{"Typeface name":`Webdings`,"Dingbat dec":`199`,"Dingbat hex":`C7`,"Unicode dec":`128223`,"Unicode hex":`1F4DF`},{"Typeface name":`Webdings`,"Dingbat dec":`200`,"Dingbat hex":`C8`,"Unicode dec":`128385`,"Unicode hex":`1F581`},{"Typeface name":`Webdings`,"Dingbat dec":`201`,"Dingbat hex":`C9`,"Unicode dec":`128384`,"Unicode hex":`1F580`},{"Typeface name":`Webdings`,"Dingbat dec":`202`,"Dingbat hex":`CA`,"Unicode dec":`128424`,"Unicode hex":`1F5A8`},{"Typeface name":`Webdings`,"Dingbat dec":`203`,"Dingbat hex":`CB`,"Unicode dec":`128425`,"Unicode hex":`1F5A9`},{"Typeface name":`Webdings`,"Dingbat dec":`204`,"Dingbat hex":`CC`,"Unicode dec":`128447`,"Unicode hex":`1F5BF`},{"Typeface name":`Webdings`,"Dingbat dec":`205`,"Dingbat hex":`CD`,"Unicode dec":`128426`,"Unicode hex":`1F5AA`},{"Typeface name":`Webdings`,"Dingbat dec":`206`,"Dingbat hex":`CE`,"Unicode dec":`128476`,"Unicode hex":`1F5DC`},{"Typeface name":`Webdings`,"Dingbat dec":`207`,"Dingbat hex":`CF`,"Unicode dec":`128274`,"Unicode hex":`1F512`},{"Typeface name":`Webdings`,"Dingbat dec":`208`,"Dingbat hex":`D0`,"Unicode dec":`128275`,"Unicode hex":`1F513`},{"Typeface name":`Webdings`,"Dingbat dec":`209`,"Dingbat hex":`D1`,"Unicode dec":`128477`,"Unicode hex":`1F5DD`},{"Typeface name":`Webdings`,"Dingbat dec":`210`,"Dingbat hex":`D2`,"Unicode dec":`128229`,"Unicode hex":`1F4E5`},{"Typeface name":`Webdings`,"Dingbat dec":`211`,"Dingbat hex":`D3`,"Unicode dec":`128228`,"Unicode hex":`1F4E4`},{"Typeface name":`Webdings`,"Dingbat dec":`212`,"Dingbat hex":`D4`,"Unicode dec":`128371`,"Unicode hex":`1F573`},{"Typeface name":`Webdings`,"Dingbat dec":`213`,"Dingbat hex":`D5`,"Unicode dec":`127779`,"Unicode hex":`1F323`},{"Typeface name":`Webdings`,"Dingbat dec":`214`,"Dingbat hex":`D6`,"Unicode dec":`127780`,"Unicode hex":`1F324`},{"Typeface name":`Webdings`,"Dingbat dec":`215`,"Dingbat hex":`D7`,"Unicode dec":`127781`,"Unicode hex":`1F325`},{"Typeface name":`Webdings`,"Dingbat dec":`216`,"Dingbat hex":`D8`,"Unicode dec":`127782`,"Unicode hex":`1F326`},{"Typeface name":`Webdings`,"Dingbat dec":`217`,"Dingbat hex":`D9`,"Unicode dec":`9729`,"Unicode hex":`2601`},{"Typeface name":`Webdings`,"Dingbat dec":`218`,"Dingbat hex":`DA`,"Unicode dec":`127784`,"Unicode hex":`1F328`},{"Typeface name":`Webdings`,"Dingbat dec":`219`,"Dingbat hex":`DB`,"Unicode dec":`127783`,"Unicode hex":`1F327`},{"Typeface name":`Webdings`,"Dingbat dec":`220`,"Dingbat hex":`DC`,"Unicode dec":`127785`,"Unicode hex":`1F329`},{"Typeface name":`Webdings`,"Dingbat dec":`221`,"Dingbat hex":`DD`,"Unicode dec":`127786`,"Unicode hex":`1F32A`},{"Typeface name":`Webdings`,"Dingbat dec":`222`,"Dingbat hex":`DE`,"Unicode dec":`127788`,"Unicode hex":`1F32C`},{"Typeface name":`Webdings`,"Dingbat dec":`223`,"Dingbat hex":`DF`,"Unicode dec":`127787`,"Unicode hex":`1F32B`},{"Typeface name":`Webdings`,"Dingbat dec":`224`,"Dingbat hex":`E0`,"Unicode dec":`127772`,"Unicode hex":`1F31C`},{"Typeface name":`Webdings`,"Dingbat dec":`225`,"Dingbat hex":`E1`,"Unicode dec":`127777`,"Unicode hex":`1F321`},{"Typeface name":`Webdings`,"Dingbat dec":`226`,"Dingbat hex":`E2`,"Unicode dec":`128715`,"Unicode hex":`1F6CB`},{"Typeface name":`Webdings`,"Dingbat dec":`227`,"Dingbat hex":`E3`,"Unicode dec":`128719`,"Unicode hex":`1F6CF`},{"Typeface name":`Webdings`,"Dingbat dec":`228`,"Dingbat hex":`E4`,"Unicode dec":`127869`,"Unicode hex":`1F37D`},{"Typeface name":`Webdings`,"Dingbat dec":`229`,"Dingbat hex":`E5`,"Unicode dec":`127864`,"Unicode hex":`1F378`},{"Typeface name":`Webdings`,"Dingbat dec":`230`,"Dingbat hex":`E6`,"Unicode dec":`128718`,"Unicode hex":`1F6CE`},{"Typeface name":`Webdings`,"Dingbat dec":`231`,"Dingbat hex":`E7`,"Unicode dec":`128717`,"Unicode hex":`1F6CD`},{"Typeface name":`Webdings`,"Dingbat dec":`232`,"Dingbat hex":`E8`,"Unicode dec":`9413`,"Unicode hex":`24C5`},{"Typeface name":`Webdings`,"Dingbat dec":`233`,"Dingbat hex":`E9`,"Unicode dec":`9855`,"Unicode hex":`267F`},{"Typeface name":`Webdings`,"Dingbat dec":`234`,"Dingbat hex":`EA`,"Unicode dec":`128710`,"Unicode hex":`1F6C6`},{"Typeface name":`Webdings`,"Dingbat dec":`235`,"Dingbat hex":`EB`,"Unicode dec":`128392`,"Unicode hex":`1F588`},{"Typeface name":`Webdings`,"Dingbat dec":`236`,"Dingbat hex":`EC`,"Unicode dec":`127891`,"Unicode hex":`1F393`},{"Typeface name":`Webdings`,"Dingbat dec":`237`,"Dingbat hex":`ED`,"Unicode dec":`128484`,"Unicode hex":`1F5E4`},{"Typeface name":`Webdings`,"Dingbat dec":`238`,"Dingbat hex":`EE`,"Unicode dec":`128485`,"Unicode hex":`1F5E5`},{"Typeface name":`Webdings`,"Dingbat dec":`239`,"Dingbat hex":`EF`,"Unicode dec":`128486`,"Unicode hex":`1F5E6`},{"Typeface name":`Webdings`,"Dingbat dec":`240`,"Dingbat hex":`F0`,"Unicode dec":`128487`,"Unicode hex":`1F5E7`},{"Typeface name":`Webdings`,"Dingbat dec":`241`,"Dingbat hex":`F1`,"Unicode dec":`128746`,"Unicode hex":`1F6EA`},{"Typeface name":`Webdings`,"Dingbat dec":`242`,"Dingbat hex":`F2`,"Unicode dec":`128063`,"Unicode hex":`1F43F`},{"Typeface name":`Webdings`,"Dingbat dec":`243`,"Dingbat hex":`F3`,"Unicode dec":`128038`,"Unicode hex":`1F426`},{"Typeface name":`Webdings`,"Dingbat dec":`244`,"Dingbat hex":`F4`,"Unicode dec":`128031`,"Unicode hex":`1F41F`},{"Typeface name":`Webdings`,"Dingbat dec":`245`,"Dingbat hex":`F5`,"Unicode dec":`128021`,"Unicode hex":`1F415`},{"Typeface name":`Webdings`,"Dingbat dec":`246`,"Dingbat hex":`F6`,"Unicode dec":`128008`,"Unicode hex":`1F408`},{"Typeface name":`Webdings`,"Dingbat dec":`247`,"Dingbat hex":`F7`,"Unicode dec":`128620`,"Unicode hex":`1F66C`},{"Typeface name":`Webdings`,"Dingbat dec":`248`,"Dingbat hex":`F8`,"Unicode dec":`128622`,"Unicode hex":`1F66E`},{"Typeface name":`Webdings`,"Dingbat dec":`249`,"Dingbat hex":`F9`,"Unicode dec":`128621`,"Unicode hex":`1F66D`},{"Typeface name":`Webdings`,"Dingbat dec":`250`,"Dingbat hex":`FA`,"Unicode dec":`128623`,"Unicode hex":`1F66F`},{"Typeface name":`Webdings`,"Dingbat dec":`251`,"Dingbat hex":`FB`,"Unicode dec":`128506`,"Unicode hex":`1F5FA`},{"Typeface name":`Webdings`,"Dingbat dec":`252`,"Dingbat hex":`FC`,"Unicode dec":`127757`,"Unicode hex":`1F30D`},{"Typeface name":`Webdings`,"Dingbat dec":`253`,"Dingbat hex":`FD`,"Unicode dec":`127759`,"Unicode hex":`1F30F`},{"Typeface name":`Webdings`,"Dingbat dec":`254`,"Dingbat hex":`FE`,"Unicode dec":`127758`,"Unicode hex":`1F30E`},{"Typeface name":`Webdings`,"Dingbat dec":`255`,"Dingbat hex":`FF`,"Unicode dec":`128330`,"Unicode hex":`1F54A`},{"Typeface name":`Wingdings`,"Dingbat dec":`32`,"Dingbat hex":`20`,"Unicode dec":`32`,"Unicode hex":`20`},{"Typeface name":`Wingdings`,"Dingbat dec":`33`,"Dingbat hex":`21`,"Unicode dec":`128393`,"Unicode hex":`1F589`},{"Typeface name":`Wingdings`,"Dingbat dec":`34`,"Dingbat hex":`22`,"Unicode dec":`9986`,"Unicode hex":`2702`},{"Typeface name":`Wingdings`,"Dingbat dec":`35`,"Dingbat hex":`23`,"Unicode dec":`9985`,"Unicode hex":`2701`},{"Typeface name":`Wingdings`,"Dingbat dec":`36`,"Dingbat hex":`24`,"Unicode dec":`128083`,"Unicode hex":`1F453`},{"Typeface name":`Wingdings`,"Dingbat dec":`37`,"Dingbat hex":`25`,"Unicode dec":`128365`,"Unicode hex":`1F56D`},{"Typeface name":`Wingdings`,"Dingbat dec":`38`,"Dingbat hex":`26`,"Unicode dec":`128366`,"Unicode hex":`1F56E`},{"Typeface name":`Wingdings`,"Dingbat dec":`39`,"Dingbat hex":`27`,"Unicode dec":`128367`,"Unicode hex":`1F56F`},{"Typeface name":`Wingdings`,"Dingbat dec":`40`,"Dingbat hex":`28`,"Unicode dec":`128383`,"Unicode hex":`1F57F`},{"Typeface name":`Wingdings`,"Dingbat dec":`41`,"Dingbat hex":`29`,"Unicode dec":`9990`,"Unicode hex":`2706`},{"Typeface name":`Wingdings`,"Dingbat dec":`42`,"Dingbat hex":`2A`,"Unicode dec":`128386`,"Unicode hex":`1F582`},{"Typeface name":`Wingdings`,"Dingbat dec":`43`,"Dingbat hex":`2B`,"Unicode dec":`128387`,"Unicode hex":`1F583`},{"Typeface name":`Wingdings`,"Dingbat dec":`44`,"Dingbat hex":`2C`,"Unicode dec":`128234`,"Unicode hex":`1F4EA`},{"Typeface name":`Wingdings`,"Dingbat dec":`45`,"Dingbat hex":`2D`,"Unicode dec":`128235`,"Unicode hex":`1F4EB`},{"Typeface name":`Wingdings`,"Dingbat dec":`46`,"Dingbat hex":`2E`,"Unicode dec":`128236`,"Unicode hex":`1F4EC`},{"Typeface name":`Wingdings`,"Dingbat dec":`47`,"Dingbat hex":`2F`,"Unicode dec":`128237`,"Unicode hex":`1F4ED`},{"Typeface name":`Wingdings`,"Dingbat dec":`48`,"Dingbat hex":`30`,"Unicode dec":`128448`,"Unicode hex":`1F5C0`},{"Typeface name":`Wingdings`,"Dingbat dec":`49`,"Dingbat hex":`31`,"Unicode dec":`128449`,"Unicode hex":`1F5C1`},{"Typeface name":`Wingdings`,"Dingbat dec":`50`,"Dingbat hex":`32`,"Unicode dec":`128462`,"Unicode hex":`1F5CE`},{"Typeface name":`Wingdings`,"Dingbat dec":`51`,"Dingbat hex":`33`,"Unicode dec":`128463`,"Unicode hex":`1F5CF`},{"Typeface name":`Wingdings`,"Dingbat dec":`52`,"Dingbat hex":`34`,"Unicode dec":`128464`,"Unicode hex":`1F5D0`},{"Typeface name":`Wingdings`,"Dingbat dec":`53`,"Dingbat hex":`35`,"Unicode dec":`128452`,"Unicode hex":`1F5C4`},{"Typeface name":`Wingdings`,"Dingbat dec":`54`,"Dingbat hex":`36`,"Unicode dec":`8987`,"Unicode hex":`231B`},{"Typeface name":`Wingdings`,"Dingbat dec":`55`,"Dingbat hex":`37`,"Unicode dec":`128430`,"Unicode hex":`1F5AE`},{"Typeface name":`Wingdings`,"Dingbat dec":`56`,"Dingbat hex":`38`,"Unicode dec":`128432`,"Unicode hex":`1F5B0`},{"Typeface name":`Wingdings`,"Dingbat dec":`57`,"Dingbat hex":`39`,"Unicode dec":`128434`,"Unicode hex":`1F5B2`},{"Typeface name":`Wingdings`,"Dingbat dec":`58`,"Dingbat hex":`3A`,"Unicode dec":`128435`,"Unicode hex":`1F5B3`},{"Typeface name":`Wingdings`,"Dingbat dec":`59`,"Dingbat hex":`3B`,"Unicode dec":`128436`,"Unicode hex":`1F5B4`},{"Typeface name":`Wingdings`,"Dingbat dec":`60`,"Dingbat hex":`3C`,"Unicode dec":`128427`,"Unicode hex":`1F5AB`},{"Typeface name":`Wingdings`,"Dingbat dec":`61`,"Dingbat hex":`3D`,"Unicode dec":`128428`,"Unicode hex":`1F5AC`},{"Typeface name":`Wingdings`,"Dingbat dec":`62`,"Dingbat hex":`3E`,"Unicode dec":`9991`,"Unicode hex":`2707`},{"Typeface name":`Wingdings`,"Dingbat dec":`63`,"Dingbat hex":`3F`,"Unicode dec":`9997`,"Unicode hex":`270D`},{"Typeface name":`Wingdings`,"Dingbat dec":`64`,"Dingbat hex":`40`,"Unicode dec":`128398`,"Unicode hex":`1F58E`},{"Typeface name":`Wingdings`,"Dingbat dec":`65`,"Dingbat hex":`41`,"Unicode dec":`9996`,"Unicode hex":`270C`},{"Typeface name":`Wingdings`,"Dingbat dec":`66`,"Dingbat hex":`42`,"Unicode dec":`128399`,"Unicode hex":`1F58F`},{"Typeface name":`Wingdings`,"Dingbat dec":`67`,"Dingbat hex":`43`,"Unicode dec":`128077`,"Unicode hex":`1F44D`},{"Typeface name":`Wingdings`,"Dingbat dec":`68`,"Dingbat hex":`44`,"Unicode dec":`128078`,"Unicode hex":`1F44E`},{"Typeface name":`Wingdings`,"Dingbat dec":`69`,"Dingbat hex":`45`,"Unicode dec":`9756`,"Unicode hex":`261C`},{"Typeface name":`Wingdings`,"Dingbat dec":`70`,"Dingbat hex":`46`,"Unicode dec":`9758`,"Unicode hex":`261E`},{"Typeface name":`Wingdings`,"Dingbat dec":`71`,"Dingbat hex":`47`,"Unicode dec":`9757`,"Unicode hex":`261D`},{"Typeface name":`Wingdings`,"Dingbat dec":`72`,"Dingbat hex":`48`,"Unicode dec":`9759`,"Unicode hex":`261F`},{"Typeface name":`Wingdings`,"Dingbat dec":`73`,"Dingbat hex":`49`,"Unicode dec":`128400`,"Unicode hex":`1F590`},{"Typeface name":`Wingdings`,"Dingbat dec":`74`,"Dingbat hex":`4A`,"Unicode dec":`9786`,"Unicode hex":`263A`},{"Typeface name":`Wingdings`,"Dingbat dec":`75`,"Dingbat hex":`4B`,"Unicode dec":`128528`,"Unicode hex":`1F610`},{"Typeface name":`Wingdings`,"Dingbat dec":`76`,"Dingbat hex":`4C`,"Unicode dec":`9785`,"Unicode hex":`2639`},{"Typeface name":`Wingdings`,"Dingbat dec":`77`,"Dingbat hex":`4D`,"Unicode dec":`128163`,"Unicode hex":`1F4A3`},{"Typeface name":`Wingdings`,"Dingbat dec":`78`,"Dingbat hex":`4E`,"Unicode dec":`128369`,"Unicode hex":`1F571`},{"Typeface name":`Wingdings`,"Dingbat dec":`79`,"Dingbat hex":`4F`,"Unicode dec":`127987`,"Unicode hex":`1F3F3`},{"Typeface name":`Wingdings`,"Dingbat dec":`80`,"Dingbat hex":`50`,"Unicode dec":`127985`,"Unicode hex":`1F3F1`},{"Typeface name":`Wingdings`,"Dingbat dec":`81`,"Dingbat hex":`51`,"Unicode dec":`9992`,"Unicode hex":`2708`},{"Typeface name":`Wingdings`,"Dingbat dec":`82`,"Dingbat hex":`52`,"Unicode dec":`9788`,"Unicode hex":`263C`},{"Typeface name":`Wingdings`,"Dingbat dec":`83`,"Dingbat hex":`53`,"Unicode dec":`127778`,"Unicode hex":`1F322`},{"Typeface name":`Wingdings`,"Dingbat dec":`84`,"Dingbat hex":`54`,"Unicode dec":`10052`,"Unicode hex":`2744`},{"Typeface name":`Wingdings`,"Dingbat dec":`85`,"Dingbat hex":`55`,"Unicode dec":`128326`,"Unicode hex":`1F546`},{"Typeface name":`Wingdings`,"Dingbat dec":`86`,"Dingbat hex":`56`,"Unicode dec":`10014`,"Unicode hex":`271E`},{"Typeface name":`Wingdings`,"Dingbat dec":`87`,"Dingbat hex":`57`,"Unicode dec":`128328`,"Unicode hex":`1F548`},{"Typeface name":`Wingdings`,"Dingbat dec":`88`,"Dingbat hex":`58`,"Unicode dec":`10016`,"Unicode hex":`2720`},{"Typeface name":`Wingdings`,"Dingbat dec":`89`,"Dingbat hex":`59`,"Unicode dec":`10017`,"Unicode hex":`2721`},{"Typeface name":`Wingdings`,"Dingbat dec":`90`,"Dingbat hex":`5A`,"Unicode dec":`9770`,"Unicode hex":`262A`},{"Typeface name":`Wingdings`,"Dingbat dec":`91`,"Dingbat hex":`5B`,"Unicode dec":`9775`,"Unicode hex":`262F`},{"Typeface name":`Wingdings`,"Dingbat dec":`92`,"Dingbat hex":`5C`,"Unicode dec":`128329`,"Unicode hex":`1F549`},{"Typeface name":`Wingdings`,"Dingbat dec":`93`,"Dingbat hex":`5D`,"Unicode dec":`9784`,"Unicode hex":`2638`},{"Typeface name":`Wingdings`,"Dingbat dec":`94`,"Dingbat hex":`5E`,"Unicode dec":`9800`,"Unicode hex":`2648`},{"Typeface name":`Wingdings`,"Dingbat dec":`95`,"Dingbat hex":`5F`,"Unicode dec":`9801`,"Unicode hex":`2649`},{"Typeface name":`Wingdings`,"Dingbat dec":`96`,"Dingbat hex":`60`,"Unicode dec":`9802`,"Unicode hex":`264A`},{"Typeface name":`Wingdings`,"Dingbat dec":`97`,"Dingbat hex":`61`,"Unicode dec":`9803`,"Unicode hex":`264B`},{"Typeface name":`Wingdings`,"Dingbat dec":`98`,"Dingbat hex":`62`,"Unicode dec":`9804`,"Unicode hex":`264C`},{"Typeface name":`Wingdings`,"Dingbat dec":`99`,"Dingbat hex":`63`,"Unicode dec":`9805`,"Unicode hex":`264D`},{"Typeface name":`Wingdings`,"Dingbat dec":`100`,"Dingbat hex":`64`,"Unicode dec":`9806`,"Unicode hex":`264E`},{"Typeface name":`Wingdings`,"Dingbat dec":`101`,"Dingbat hex":`65`,"Unicode dec":`9807`,"Unicode hex":`264F`},{"Typeface name":`Wingdings`,"Dingbat dec":`102`,"Dingbat hex":`66`,"Unicode dec":`9808`,"Unicode hex":`2650`},{"Typeface name":`Wingdings`,"Dingbat dec":`103`,"Dingbat hex":`67`,"Unicode dec":`9809`,"Unicode hex":`2651`},{"Typeface name":`Wingdings`,"Dingbat dec":`104`,"Dingbat hex":`68`,"Unicode dec":`9810`,"Unicode hex":`2652`},{"Typeface name":`Wingdings`,"Dingbat dec":`105`,"Dingbat hex":`69`,"Unicode dec":`9811`,"Unicode hex":`2653`},{"Typeface name":`Wingdings`,"Dingbat dec":`106`,"Dingbat hex":`6A`,"Unicode dec":`128624`,"Unicode hex":`1F670`},{"Typeface name":`Wingdings`,"Dingbat dec":`107`,"Dingbat hex":`6B`,"Unicode dec":`128629`,"Unicode hex":`1F675`},{"Typeface name":`Wingdings`,"Dingbat dec":`108`,"Dingbat hex":`6C`,"Unicode dec":`9899`,"Unicode hex":`26AB`},{"Typeface name":`Wingdings`,"Dingbat dec":`109`,"Dingbat hex":`6D`,"Unicode dec":`128318`,"Unicode hex":`1F53E`},{"Typeface name":`Wingdings`,"Dingbat dec":`110`,"Dingbat hex":`6E`,"Unicode dec":`9724`,"Unicode hex":`25FC`},{"Typeface name":`Wingdings`,"Dingbat dec":`111`,"Dingbat hex":`6F`,"Unicode dec":`128911`,"Unicode hex":`1F78F`},{"Typeface name":`Wingdings`,"Dingbat dec":`112`,"Dingbat hex":`70`,"Unicode dec":`128912`,"Unicode hex":`1F790`},{"Typeface name":`Wingdings`,"Dingbat dec":`113`,"Dingbat hex":`71`,"Unicode dec":`10065`,"Unicode hex":`2751`},{"Typeface name":`Wingdings`,"Dingbat dec":`114`,"Dingbat hex":`72`,"Unicode dec":`10066`,"Unicode hex":`2752`},{"Typeface name":`Wingdings`,"Dingbat dec":`115`,"Dingbat hex":`73`,"Unicode dec":`128927`,"Unicode hex":`1F79F`},{"Typeface name":`Wingdings`,"Dingbat dec":`116`,"Dingbat hex":`74`,"Unicode dec":`10731`,"Unicode hex":`29EB`},{"Typeface name":`Wingdings`,"Dingbat dec":`117`,"Dingbat hex":`75`,"Unicode dec":`9670`,"Unicode hex":`25C6`},{"Typeface name":`Wingdings`,"Dingbat dec":`118`,"Dingbat hex":`76`,"Unicode dec":`10070`,"Unicode hex":`2756`},{"Typeface name":`Wingdings`,"Dingbat dec":`119`,"Dingbat hex":`77`,"Unicode dec":`11049`,"Unicode hex":`2B29`},{"Typeface name":`Wingdings`,"Dingbat dec":`120`,"Dingbat hex":`78`,"Unicode dec":`8999`,"Unicode hex":`2327`},{"Typeface name":`Wingdings`,"Dingbat dec":`121`,"Dingbat hex":`79`,"Unicode dec":`11193`,"Unicode hex":`2BB9`},{"Typeface name":`Wingdings`,"Dingbat dec":`122`,"Dingbat hex":`7A`,"Unicode dec":`8984`,"Unicode hex":`2318`},{"Typeface name":`Wingdings`,"Dingbat dec":`123`,"Dingbat hex":`7B`,"Unicode dec":`127989`,"Unicode hex":`1F3F5`},{"Typeface name":`Wingdings`,"Dingbat dec":`124`,"Dingbat hex":`7C`,"Unicode dec":`127990`,"Unicode hex":`1F3F6`},{"Typeface name":`Wingdings`,"Dingbat dec":`125`,"Dingbat hex":`7D`,"Unicode dec":`128630`,"Unicode hex":`1F676`},{"Typeface name":`Wingdings`,"Dingbat dec":`126`,"Dingbat hex":`7E`,"Unicode dec":`128631`,"Unicode hex":`1F677`},{"Typeface name":`Wingdings`,"Dingbat dec":`127`,"Dingbat hex":`7F`,"Unicode dec":`9647`,"Unicode hex":`25AF`},{"Typeface name":`Wingdings`,"Dingbat dec":`128`,"Dingbat hex":`80`,"Unicode dec":`127243`,"Unicode hex":`1F10B`},{"Typeface name":`Wingdings`,"Dingbat dec":`129`,"Dingbat hex":`81`,"Unicode dec":`10112`,"Unicode hex":`2780`},{"Typeface name":`Wingdings`,"Dingbat dec":`130`,"Dingbat hex":`82`,"Unicode dec":`10113`,"Unicode hex":`2781`},{"Typeface name":`Wingdings`,"Dingbat dec":`131`,"Dingbat hex":`83`,"Unicode dec":`10114`,"Unicode hex":`2782`},{"Typeface name":`Wingdings`,"Dingbat dec":`132`,"Dingbat hex":`84`,"Unicode dec":`10115`,"Unicode hex":`2783`},{"Typeface name":`Wingdings`,"Dingbat dec":`133`,"Dingbat hex":`85`,"Unicode dec":`10116`,"Unicode hex":`2784`},{"Typeface name":`Wingdings`,"Dingbat dec":`134`,"Dingbat hex":`86`,"Unicode dec":`10117`,"Unicode hex":`2785`},{"Typeface name":`Wingdings`,"Dingbat dec":`135`,"Dingbat hex":`87`,"Unicode dec":`10118`,"Unicode hex":`2786`},{"Typeface name":`Wingdings`,"Dingbat dec":`136`,"Dingbat hex":`88`,"Unicode dec":`10119`,"Unicode hex":`2787`},{"Typeface name":`Wingdings`,"Dingbat dec":`137`,"Dingbat hex":`89`,"Unicode dec":`10120`,"Unicode hex":`2788`},{"Typeface name":`Wingdings`,"Dingbat dec":`138`,"Dingbat hex":`8A`,"Unicode dec":`10121`,"Unicode hex":`2789`},{"Typeface name":`Wingdings`,"Dingbat dec":`139`,"Dingbat hex":`8B`,"Unicode dec":`127244`,"Unicode hex":`1F10C`},{"Typeface name":`Wingdings`,"Dingbat dec":`140`,"Dingbat hex":`8C`,"Unicode dec":`10122`,"Unicode hex":`278A`},{"Typeface name":`Wingdings`,"Dingbat dec":`141`,"Dingbat hex":`8D`,"Unicode dec":`10123`,"Unicode hex":`278B`},{"Typeface name":`Wingdings`,"Dingbat dec":`142`,"Dingbat hex":`8E`,"Unicode dec":`10124`,"Unicode hex":`278C`},{"Typeface name":`Wingdings`,"Dingbat dec":`143`,"Dingbat hex":`8F`,"Unicode dec":`10125`,"Unicode hex":`278D`},{"Typeface name":`Wingdings`,"Dingbat dec":`144`,"Dingbat hex":`90`,"Unicode dec":`10126`,"Unicode hex":`278E`},{"Typeface name":`Wingdings`,"Dingbat dec":`145`,"Dingbat hex":`91`,"Unicode dec":`10127`,"Unicode hex":`278F`},{"Typeface name":`Wingdings`,"Dingbat dec":`146`,"Dingbat hex":`92`,"Unicode dec":`10128`,"Unicode hex":`2790`},{"Typeface name":`Wingdings`,"Dingbat dec":`147`,"Dingbat hex":`93`,"Unicode dec":`10129`,"Unicode hex":`2791`},{"Typeface name":`Wingdings`,"Dingbat dec":`148`,"Dingbat hex":`94`,"Unicode dec":`10130`,"Unicode hex":`2792`},{"Typeface name":`Wingdings`,"Dingbat dec":`149`,"Dingbat hex":`95`,"Unicode dec":`10131`,"Unicode hex":`2793`},{"Typeface name":`Wingdings`,"Dingbat dec":`150`,"Dingbat hex":`96`,"Unicode dec":`128610`,"Unicode hex":`1F662`},{"Typeface name":`Wingdings`,"Dingbat dec":`151`,"Dingbat hex":`97`,"Unicode dec":`128608`,"Unicode hex":`1F660`},{"Typeface name":`Wingdings`,"Dingbat dec":`152`,"Dingbat hex":`98`,"Unicode dec":`128609`,"Unicode hex":`1F661`},{"Typeface name":`Wingdings`,"Dingbat dec":`153`,"Dingbat hex":`99`,"Unicode dec":`128611`,"Unicode hex":`1F663`},{"Typeface name":`Wingdings`,"Dingbat dec":`154`,"Dingbat hex":`9A`,"Unicode dec":`128606`,"Unicode hex":`1F65E`},{"Typeface name":`Wingdings`,"Dingbat dec":`155`,"Dingbat hex":`9B`,"Unicode dec":`128604`,"Unicode hex":`1F65C`},{"Typeface name":`Wingdings`,"Dingbat dec":`156`,"Dingbat hex":`9C`,"Unicode dec":`128605`,"Unicode hex":`1F65D`},{"Typeface name":`Wingdings`,"Dingbat dec":`157`,"Dingbat hex":`9D`,"Unicode dec":`128607`,"Unicode hex":`1F65F`},{"Typeface name":`Wingdings`,"Dingbat dec":`158`,"Dingbat hex":`9E`,"Unicode dec":`8729`,"Unicode hex":`2219`},{"Typeface name":`Wingdings`,"Dingbat dec":`159`,"Dingbat hex":`9F`,"Unicode dec":`8226`,"Unicode hex":`2022`},{"Typeface name":`Wingdings`,"Dingbat dec":`160`,"Dingbat hex":`A0`,"Unicode dec":`11037`,"Unicode hex":`2B1D`},{"Typeface name":`Wingdings`,"Dingbat dec":`161`,"Dingbat hex":`A1`,"Unicode dec":`11096`,"Unicode hex":`2B58`},{"Typeface name":`Wingdings`,"Dingbat dec":`162`,"Dingbat hex":`A2`,"Unicode dec":`128902`,"Unicode hex":`1F786`},{"Typeface name":`Wingdings`,"Dingbat dec":`163`,"Dingbat hex":`A3`,"Unicode dec":`128904`,"Unicode hex":`1F788`},{"Typeface name":`Wingdings`,"Dingbat dec":`164`,"Dingbat hex":`A4`,"Unicode dec":`128906`,"Unicode hex":`1F78A`},{"Typeface name":`Wingdings`,"Dingbat dec":`165`,"Dingbat hex":`A5`,"Unicode dec":`128907`,"Unicode hex":`1F78B`},{"Typeface name":`Wingdings`,"Dingbat dec":`166`,"Dingbat hex":`A6`,"Unicode dec":`128319`,"Unicode hex":`1F53F`},{"Typeface name":`Wingdings`,"Dingbat dec":`167`,"Dingbat hex":`A7`,"Unicode dec":`9642`,"Unicode hex":`25AA`},{"Typeface name":`Wingdings`,"Dingbat dec":`168`,"Dingbat hex":`A8`,"Unicode dec":`128910`,"Unicode hex":`1F78E`},{"Typeface name":`Wingdings`,"Dingbat dec":`169`,"Dingbat hex":`A9`,"Unicode dec":`128961`,"Unicode hex":`1F7C1`},{"Typeface name":`Wingdings`,"Dingbat dec":`170`,"Dingbat hex":`AA`,"Unicode dec":`128965`,"Unicode hex":`1F7C5`},{"Typeface name":`Wingdings`,"Dingbat dec":`171`,"Dingbat hex":`AB`,"Unicode dec":`9733`,"Unicode hex":`2605`},{"Typeface name":`Wingdings`,"Dingbat dec":`172`,"Dingbat hex":`AC`,"Unicode dec":`128971`,"Unicode hex":`1F7CB`},{"Typeface name":`Wingdings`,"Dingbat dec":`173`,"Dingbat hex":`AD`,"Unicode dec":`128975`,"Unicode hex":`1F7CF`},{"Typeface name":`Wingdings`,"Dingbat dec":`174`,"Dingbat hex":`AE`,"Unicode dec":`128979`,"Unicode hex":`1F7D3`},{"Typeface name":`Wingdings`,"Dingbat dec":`175`,"Dingbat hex":`AF`,"Unicode dec":`128977`,"Unicode hex":`1F7D1`},{"Typeface name":`Wingdings`,"Dingbat dec":`176`,"Dingbat hex":`B0`,"Unicode dec":`11216`,"Unicode hex":`2BD0`},{"Typeface name":`Wingdings`,"Dingbat dec":`177`,"Dingbat hex":`B1`,"Unicode dec":`8982`,"Unicode hex":`2316`},{"Typeface name":`Wingdings`,"Dingbat dec":`178`,"Dingbat hex":`B2`,"Unicode dec":`11214`,"Unicode hex":`2BCE`},{"Typeface name":`Wingdings`,"Dingbat dec":`179`,"Dingbat hex":`B3`,"Unicode dec":`11215`,"Unicode hex":`2BCF`},{"Typeface name":`Wingdings`,"Dingbat dec":`180`,"Dingbat hex":`B4`,"Unicode dec":`11217`,"Unicode hex":`2BD1`},{"Typeface name":`Wingdings`,"Dingbat dec":`181`,"Dingbat hex":`B5`,"Unicode dec":`10026`,"Unicode hex":`272A`},{"Typeface name":`Wingdings`,"Dingbat dec":`182`,"Dingbat hex":`B6`,"Unicode dec":`10032`,"Unicode hex":`2730`},{"Typeface name":`Wingdings`,"Dingbat dec":`183`,"Dingbat hex":`B7`,"Unicode dec":`128336`,"Unicode hex":`1F550`},{"Typeface name":`Wingdings`,"Dingbat dec":`184`,"Dingbat hex":`B8`,"Unicode dec":`128337`,"Unicode hex":`1F551`},{"Typeface name":`Wingdings`,"Dingbat dec":`185`,"Dingbat hex":`B9`,"Unicode dec":`128338`,"Unicode hex":`1F552`},{"Typeface name":`Wingdings`,"Dingbat dec":`186`,"Dingbat hex":`BA`,"Unicode dec":`128339`,"Unicode hex":`1F553`},{"Typeface name":`Wingdings`,"Dingbat dec":`187`,"Dingbat hex":`BB`,"Unicode dec":`128340`,"Unicode hex":`1F554`},{"Typeface name":`Wingdings`,"Dingbat dec":`188`,"Dingbat hex":`BC`,"Unicode dec":`128341`,"Unicode hex":`1F555`},{"Typeface name":`Wingdings`,"Dingbat dec":`189`,"Dingbat hex":`BD`,"Unicode dec":`128342`,"Unicode hex":`1F556`},{"Typeface name":`Wingdings`,"Dingbat dec":`190`,"Dingbat hex":`BE`,"Unicode dec":`128343`,"Unicode hex":`1F557`},{"Typeface name":`Wingdings`,"Dingbat dec":`191`,"Dingbat hex":`BF`,"Unicode dec":`128344`,"Unicode hex":`1F558`},{"Typeface name":`Wingdings`,"Dingbat dec":`192`,"Dingbat hex":`C0`,"Unicode dec":`128345`,"Unicode hex":`1F559`},{"Typeface name":`Wingdings`,"Dingbat dec":`193`,"Dingbat hex":`C1`,"Unicode dec":`128346`,"Unicode hex":`1F55A`},{"Typeface name":`Wingdings`,"Dingbat dec":`194`,"Dingbat hex":`C2`,"Unicode dec":`128347`,"Unicode hex":`1F55B`},{"Typeface name":`Wingdings`,"Dingbat dec":`195`,"Dingbat hex":`C3`,"Unicode dec":`11184`,"Unicode hex":`2BB0`},{"Typeface name":`Wingdings`,"Dingbat dec":`196`,"Dingbat hex":`C4`,"Unicode dec":`11185`,"Unicode hex":`2BB1`},{"Typeface name":`Wingdings`,"Dingbat dec":`197`,"Dingbat hex":`C5`,"Unicode dec":`11186`,"Unicode hex":`2BB2`},{"Typeface name":`Wingdings`,"Dingbat dec":`198`,"Dingbat hex":`C6`,"Unicode dec":`11187`,"Unicode hex":`2BB3`},{"Typeface name":`Wingdings`,"Dingbat dec":`199`,"Dingbat hex":`C7`,"Unicode dec":`11188`,"Unicode hex":`2BB4`},{"Typeface name":`Wingdings`,"Dingbat dec":`200`,"Dingbat hex":`C8`,"Unicode dec":`11189`,"Unicode hex":`2BB5`},{"Typeface name":`Wingdings`,"Dingbat dec":`201`,"Dingbat hex":`C9`,"Unicode dec":`11190`,"Unicode hex":`2BB6`},{"Typeface name":`Wingdings`,"Dingbat dec":`202`,"Dingbat hex":`CA`,"Unicode dec":`11191`,"Unicode hex":`2BB7`},{"Typeface name":`Wingdings`,"Dingbat dec":`203`,"Dingbat hex":`CB`,"Unicode dec":`128618`,"Unicode hex":`1F66A`},{"Typeface name":`Wingdings`,"Dingbat dec":`204`,"Dingbat hex":`CC`,"Unicode dec":`128619`,"Unicode hex":`1F66B`},{"Typeface name":`Wingdings`,"Dingbat dec":`205`,"Dingbat hex":`CD`,"Unicode dec":`128597`,"Unicode hex":`1F655`},{"Typeface name":`Wingdings`,"Dingbat dec":`206`,"Dingbat hex":`CE`,"Unicode dec":`128596`,"Unicode hex":`1F654`},{"Typeface name":`Wingdings`,"Dingbat dec":`207`,"Dingbat hex":`CF`,"Unicode dec":`128599`,"Unicode hex":`1F657`},{"Typeface name":`Wingdings`,"Dingbat dec":`208`,"Dingbat hex":`D0`,"Unicode dec":`128598`,"Unicode hex":`1F656`},{"Typeface name":`Wingdings`,"Dingbat dec":`209`,"Dingbat hex":`D1`,"Unicode dec":`128592`,"Unicode hex":`1F650`},{"Typeface name":`Wingdings`,"Dingbat dec":`210`,"Dingbat hex":`D2`,"Unicode dec":`128593`,"Unicode hex":`1F651`},{"Typeface name":`Wingdings`,"Dingbat dec":`211`,"Dingbat hex":`D3`,"Unicode dec":`128594`,"Unicode hex":`1F652`},{"Typeface name":`Wingdings`,"Dingbat dec":`212`,"Dingbat hex":`D4`,"Unicode dec":`128595`,"Unicode hex":`1F653`},{"Typeface name":`Wingdings`,"Dingbat dec":`213`,"Dingbat hex":`D5`,"Unicode dec":`9003`,"Unicode hex":`232B`},{"Typeface name":`Wingdings`,"Dingbat dec":`214`,"Dingbat hex":`D6`,"Unicode dec":`8998`,"Unicode hex":`2326`},{"Typeface name":`Wingdings`,"Dingbat dec":`215`,"Dingbat hex":`D7`,"Unicode dec":`11160`,"Unicode hex":`2B98`},{"Typeface name":`Wingdings`,"Dingbat dec":`216`,"Dingbat hex":`D8`,"Unicode dec":`11162`,"Unicode hex":`2B9A`},{"Typeface name":`Wingdings`,"Dingbat dec":`217`,"Dingbat hex":`D9`,"Unicode dec":`11161`,"Unicode hex":`2B99`},{"Typeface name":`Wingdings`,"Dingbat dec":`218`,"Dingbat hex":`DA`,"Unicode dec":`11163`,"Unicode hex":`2B9B`},{"Typeface name":`Wingdings`,"Dingbat dec":`219`,"Dingbat hex":`DB`,"Unicode dec":`11144`,"Unicode hex":`2B88`},{"Typeface name":`Wingdings`,"Dingbat dec":`220`,"Dingbat hex":`DC`,"Unicode dec":`11146`,"Unicode hex":`2B8A`},{"Typeface name":`Wingdings`,"Dingbat dec":`221`,"Dingbat hex":`DD`,"Unicode dec":`11145`,"Unicode hex":`2B89`},{"Typeface name":`Wingdings`,"Dingbat dec":`222`,"Dingbat hex":`DE`,"Unicode dec":`11147`,"Unicode hex":`2B8B`},{"Typeface name":`Wingdings`,"Dingbat dec":`223`,"Dingbat hex":`DF`,"Unicode dec":`129128`,"Unicode hex":`1F868`},{"Typeface name":`Wingdings`,"Dingbat dec":`224`,"Dingbat hex":`E0`,"Unicode dec":`129130`,"Unicode hex":`1F86A`},{"Typeface name":`Wingdings`,"Dingbat dec":`225`,"Dingbat hex":`E1`,"Unicode dec":`129129`,"Unicode hex":`1F869`},{"Typeface name":`Wingdings`,"Dingbat dec":`226`,"Dingbat hex":`E2`,"Unicode dec":`129131`,"Unicode hex":`1F86B`},{"Typeface name":`Wingdings`,"Dingbat dec":`227`,"Dingbat hex":`E3`,"Unicode dec":`129132`,"Unicode hex":`1F86C`},{"Typeface name":`Wingdings`,"Dingbat dec":`228`,"Dingbat hex":`E4`,"Unicode dec":`129133`,"Unicode hex":`1F86D`},{"Typeface name":`Wingdings`,"Dingbat dec":`229`,"Dingbat hex":`E5`,"Unicode dec":`129135`,"Unicode hex":`1F86F`},{"Typeface name":`Wingdings`,"Dingbat dec":`230`,"Dingbat hex":`E6`,"Unicode dec":`129134`,"Unicode hex":`1F86E`},{"Typeface name":`Wingdings`,"Dingbat dec":`231`,"Dingbat hex":`E7`,"Unicode dec":`129144`,"Unicode hex":`1F878`},{"Typeface name":`Wingdings`,"Dingbat dec":`232`,"Dingbat hex":`E8`,"Unicode dec":`129146`,"Unicode hex":`1F87A`},{"Typeface name":`Wingdings`,"Dingbat dec":`233`,"Dingbat hex":`E9`,"Unicode dec":`129145`,"Unicode hex":`1F879`},{"Typeface name":`Wingdings`,"Dingbat dec":`234`,"Dingbat hex":`EA`,"Unicode dec":`129147`,"Unicode hex":`1F87B`},{"Typeface name":`Wingdings`,"Dingbat dec":`235`,"Dingbat hex":`EB`,"Unicode dec":`129148`,"Unicode hex":`1F87C`},{"Typeface name":`Wingdings`,"Dingbat dec":`236`,"Dingbat hex":`EC`,"Unicode dec":`129149`,"Unicode hex":`1F87D`},{"Typeface name":`Wingdings`,"Dingbat dec":`237`,"Dingbat hex":`ED`,"Unicode dec":`129151`,"Unicode hex":`1F87F`},{"Typeface name":`Wingdings`,"Dingbat dec":`238`,"Dingbat hex":`EE`,"Unicode dec":`129150`,"Unicode hex":`1F87E`},{"Typeface name":`Wingdings`,"Dingbat dec":`239`,"Dingbat hex":`EF`,"Unicode dec":`8678`,"Unicode hex":`21E6`},{"Typeface name":`Wingdings`,"Dingbat dec":`240`,"Dingbat hex":`F0`,"Unicode dec":`8680`,"Unicode hex":`21E8`},{"Typeface name":`Wingdings`,"Dingbat dec":`241`,"Dingbat hex":`F1`,"Unicode dec":`8679`,"Unicode hex":`21E7`},{"Typeface name":`Wingdings`,"Dingbat dec":`242`,"Dingbat hex":`F2`,"Unicode dec":`8681`,"Unicode hex":`21E9`},{"Typeface name":`Wingdings`,"Dingbat dec":`243`,"Dingbat hex":`F3`,"Unicode dec":`11012`,"Unicode hex":`2B04`},{"Typeface name":`Wingdings`,"Dingbat dec":`244`,"Dingbat hex":`F4`,"Unicode dec":`8691`,"Unicode hex":`21F3`},{"Typeface name":`Wingdings`,"Dingbat dec":`245`,"Dingbat hex":`F5`,"Unicode dec":`11009`,"Unicode hex":`2B01`},{"Typeface name":`Wingdings`,"Dingbat dec":`246`,"Dingbat hex":`F6`,"Unicode dec":`11008`,"Unicode hex":`2B00`},{"Typeface name":`Wingdings`,"Dingbat dec":`247`,"Dingbat hex":`F7`,"Unicode dec":`11011`,"Unicode hex":`2B03`},{"Typeface name":`Wingdings`,"Dingbat dec":`248`,"Dingbat hex":`F8`,"Unicode dec":`11010`,"Unicode hex":`2B02`},{"Typeface name":`Wingdings`,"Dingbat dec":`249`,"Dingbat hex":`F9`,"Unicode dec":`129196`,"Unicode hex":`1F8AC`},{"Typeface name":`Wingdings`,"Dingbat dec":`250`,"Dingbat hex":`FA`,"Unicode dec":`129197`,"Unicode hex":`1F8AD`},{"Typeface name":`Wingdings`,"Dingbat dec":`251`,"Dingbat hex":`FB`,"Unicode dec":`128502`,"Unicode hex":`1F5F6`},{"Typeface name":`Wingdings`,"Dingbat dec":`252`,"Dingbat hex":`FC`,"Unicode dec":`10003`,"Unicode hex":`2713`},{"Typeface name":`Wingdings`,"Dingbat dec":`253`,"Dingbat hex":`FD`,"Unicode dec":`128503`,"Unicode hex":`1F5F7`},{"Typeface name":`Wingdings`,"Dingbat dec":`254`,"Dingbat hex":`FE`,"Unicode dec":`128505`,"Unicode hex":`1F5F9`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`32`,"Dingbat hex":`20`,"Unicode dec":`32`,"Unicode hex":`20`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`33`,"Dingbat hex":`21`,"Unicode dec":`128394`,"Unicode hex":`1F58A`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`34`,"Dingbat hex":`22`,"Unicode dec":`128395`,"Unicode hex":`1F58B`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`35`,"Dingbat hex":`23`,"Unicode dec":`128396`,"Unicode hex":`1F58C`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`36`,"Dingbat hex":`24`,"Unicode dec":`128397`,"Unicode hex":`1F58D`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`37`,"Dingbat hex":`25`,"Unicode dec":`9988`,"Unicode hex":`2704`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`38`,"Dingbat hex":`26`,"Unicode dec":`9984`,"Unicode hex":`2700`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`39`,"Dingbat hex":`27`,"Unicode dec":`128382`,"Unicode hex":`1F57E`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`40`,"Dingbat hex":`28`,"Unicode dec":`128381`,"Unicode hex":`1F57D`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`41`,"Dingbat hex":`29`,"Unicode dec":`128453`,"Unicode hex":`1F5C5`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`42`,"Dingbat hex":`2A`,"Unicode dec":`128454`,"Unicode hex":`1F5C6`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`43`,"Dingbat hex":`2B`,"Unicode dec":`128455`,"Unicode hex":`1F5C7`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`44`,"Dingbat hex":`2C`,"Unicode dec":`128456`,"Unicode hex":`1F5C8`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`45`,"Dingbat hex":`2D`,"Unicode dec":`128457`,"Unicode hex":`1F5C9`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`46`,"Dingbat hex":`2E`,"Unicode dec":`128458`,"Unicode hex":`1F5CA`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`47`,"Dingbat hex":`2F`,"Unicode dec":`128459`,"Unicode hex":`1F5CB`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`48`,"Dingbat hex":`30`,"Unicode dec":`128460`,"Unicode hex":`1F5CC`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`49`,"Dingbat hex":`31`,"Unicode dec":`128461`,"Unicode hex":`1F5CD`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`50`,"Dingbat hex":`32`,"Unicode dec":`128203`,"Unicode hex":`1F4CB`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`51`,"Dingbat hex":`33`,"Unicode dec":`128465`,"Unicode hex":`1F5D1`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`52`,"Dingbat hex":`34`,"Unicode dec":`128468`,"Unicode hex":`1F5D4`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`53`,"Dingbat hex":`35`,"Unicode dec":`128437`,"Unicode hex":`1F5B5`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`54`,"Dingbat hex":`36`,"Unicode dec":`128438`,"Unicode hex":`1F5B6`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`55`,"Dingbat hex":`37`,"Unicode dec":`128439`,"Unicode hex":`1F5B7`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`56`,"Dingbat hex":`38`,"Unicode dec":`128440`,"Unicode hex":`1F5B8`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`57`,"Dingbat hex":`39`,"Unicode dec":`128429`,"Unicode hex":`1F5AD`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`58`,"Dingbat hex":`3A`,"Unicode dec":`128431`,"Unicode hex":`1F5AF`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`59`,"Dingbat hex":`3B`,"Unicode dec":`128433`,"Unicode hex":`1F5B1`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`60`,"Dingbat hex":`3C`,"Unicode dec":`128402`,"Unicode hex":`1F592`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`61`,"Dingbat hex":`3D`,"Unicode dec":`128403`,"Unicode hex":`1F593`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`62`,"Dingbat hex":`3E`,"Unicode dec":`128408`,"Unicode hex":`1F598`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`63`,"Dingbat hex":`3F`,"Unicode dec":`128409`,"Unicode hex":`1F599`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`64`,"Dingbat hex":`40`,"Unicode dec":`128410`,"Unicode hex":`1F59A`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`65`,"Dingbat hex":`41`,"Unicode dec":`128411`,"Unicode hex":`1F59B`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`66`,"Dingbat hex":`42`,"Unicode dec":`128072`,"Unicode hex":`1F448`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`67`,"Dingbat hex":`43`,"Unicode dec":`128073`,"Unicode hex":`1F449`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`68`,"Dingbat hex":`44`,"Unicode dec":`128412`,"Unicode hex":`1F59C`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`69`,"Dingbat hex":`45`,"Unicode dec":`128413`,"Unicode hex":`1F59D`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`70`,"Dingbat hex":`46`,"Unicode dec":`128414`,"Unicode hex":`1F59E`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`71`,"Dingbat hex":`47`,"Unicode dec":`128415`,"Unicode hex":`1F59F`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`72`,"Dingbat hex":`48`,"Unicode dec":`128416`,"Unicode hex":`1F5A0`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`73`,"Dingbat hex":`49`,"Unicode dec":`128417`,"Unicode hex":`1F5A1`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`74`,"Dingbat hex":`4A`,"Unicode dec":`128070`,"Unicode hex":`1F446`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`75`,"Dingbat hex":`4B`,"Unicode dec":`128071`,"Unicode hex":`1F447`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`76`,"Dingbat hex":`4C`,"Unicode dec":`128418`,"Unicode hex":`1F5A2`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`77`,"Dingbat hex":`4D`,"Unicode dec":`128419`,"Unicode hex":`1F5A3`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`78`,"Dingbat hex":`4E`,"Unicode dec":`128401`,"Unicode hex":`1F591`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`79`,"Dingbat hex":`4F`,"Unicode dec":`128500`,"Unicode hex":`1F5F4`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`80`,"Dingbat hex":`50`,"Unicode dec":`128504`,"Unicode hex":`1F5F8`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`81`,"Dingbat hex":`51`,"Unicode dec":`128501`,"Unicode hex":`1F5F5`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`82`,"Dingbat hex":`52`,"Unicode dec":`9745`,"Unicode hex":`2611`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`83`,"Dingbat hex":`53`,"Unicode dec":`11197`,"Unicode hex":`2BBD`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`84`,"Dingbat hex":`54`,"Unicode dec":`9746`,"Unicode hex":`2612`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`85`,"Dingbat hex":`55`,"Unicode dec":`11198`,"Unicode hex":`2BBE`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`86`,"Dingbat hex":`56`,"Unicode dec":`11199`,"Unicode hex":`2BBF`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`87`,"Dingbat hex":`57`,"Unicode dec":`128711`,"Unicode hex":`1F6C7`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`88`,"Dingbat hex":`58`,"Unicode dec":`10680`,"Unicode hex":`29B8`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`89`,"Dingbat hex":`59`,"Unicode dec":`128625`,"Unicode hex":`1F671`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`90`,"Dingbat hex":`5A`,"Unicode dec":`128628`,"Unicode hex":`1F674`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`91`,"Dingbat hex":`5B`,"Unicode dec":`128626`,"Unicode hex":`1F672`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`92`,"Dingbat hex":`5C`,"Unicode dec":`128627`,"Unicode hex":`1F673`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`93`,"Dingbat hex":`5D`,"Unicode dec":`8253`,"Unicode hex":`203D`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`94`,"Dingbat hex":`5E`,"Unicode dec":`128633`,"Unicode hex":`1F679`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`95`,"Dingbat hex":`5F`,"Unicode dec":`128634`,"Unicode hex":`1F67A`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`96`,"Dingbat hex":`60`,"Unicode dec":`128635`,"Unicode hex":`1F67B`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`97`,"Dingbat hex":`61`,"Unicode dec":`128614`,"Unicode hex":`1F666`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`98`,"Dingbat hex":`62`,"Unicode dec":`128612`,"Unicode hex":`1F664`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`99`,"Dingbat hex":`63`,"Unicode dec":`128613`,"Unicode hex":`1F665`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`100`,"Dingbat hex":`64`,"Unicode dec":`128615`,"Unicode hex":`1F667`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`101`,"Dingbat hex":`65`,"Unicode dec":`128602`,"Unicode hex":`1F65A`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`102`,"Dingbat hex":`66`,"Unicode dec":`128600`,"Unicode hex":`1F658`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`103`,"Dingbat hex":`67`,"Unicode dec":`128601`,"Unicode hex":`1F659`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`104`,"Dingbat hex":`68`,"Unicode dec":`128603`,"Unicode hex":`1F65B`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`105`,"Dingbat hex":`69`,"Unicode dec":`9450`,"Unicode hex":`24EA`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`106`,"Dingbat hex":`6A`,"Unicode dec":`9312`,"Unicode hex":`2460`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`107`,"Dingbat hex":`6B`,"Unicode dec":`9313`,"Unicode hex":`2461`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`108`,"Dingbat hex":`6C`,"Unicode dec":`9314`,"Unicode hex":`2462`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`109`,"Dingbat hex":`6D`,"Unicode dec":`9315`,"Unicode hex":`2463`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`110`,"Dingbat hex":`6E`,"Unicode dec":`9316`,"Unicode hex":`2464`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`111`,"Dingbat hex":`6F`,"Unicode dec":`9317`,"Unicode hex":`2465`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`112`,"Dingbat hex":`70`,"Unicode dec":`9318`,"Unicode hex":`2466`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`113`,"Dingbat hex":`71`,"Unicode dec":`9319`,"Unicode hex":`2467`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`114`,"Dingbat hex":`72`,"Unicode dec":`9320`,"Unicode hex":`2468`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`115`,"Dingbat hex":`73`,"Unicode dec":`9321`,"Unicode hex":`2469`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`116`,"Dingbat hex":`74`,"Unicode dec":`9471`,"Unicode hex":`24FF`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`117`,"Dingbat hex":`75`,"Unicode dec":`10102`,"Unicode hex":`2776`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`118`,"Dingbat hex":`76`,"Unicode dec":`10103`,"Unicode hex":`2777`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`119`,"Dingbat hex":`77`,"Unicode dec":`10104`,"Unicode hex":`2778`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`120`,"Dingbat hex":`78`,"Unicode dec":`10105`,"Unicode hex":`2779`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`121`,"Dingbat hex":`79`,"Unicode dec":`10106`,"Unicode hex":`277A`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`122`,"Dingbat hex":`7A`,"Unicode dec":`10107`,"Unicode hex":`277B`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`123`,"Dingbat hex":`7B`,"Unicode dec":`10108`,"Unicode hex":`277C`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`124`,"Dingbat hex":`7C`,"Unicode dec":`10109`,"Unicode hex":`277D`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`125`,"Dingbat hex":`7D`,"Unicode dec":`10110`,"Unicode hex":`277E`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`126`,"Dingbat hex":`7E`,"Unicode dec":`10111`,"Unicode hex":`277F`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`128`,"Dingbat hex":`80`,"Unicode dec":`9737`,"Unicode hex":`2609`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`129`,"Dingbat hex":`81`,"Unicode dec":`127765`,"Unicode hex":`1F315`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`130`,"Dingbat hex":`82`,"Unicode dec":`9789`,"Unicode hex":`263D`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`131`,"Dingbat hex":`83`,"Unicode dec":`9790`,"Unicode hex":`263E`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`132`,"Dingbat hex":`84`,"Unicode dec":`11839`,"Unicode hex":`2E3F`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`133`,"Dingbat hex":`85`,"Unicode dec":`10013`,"Unicode hex":`271D`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`134`,"Dingbat hex":`86`,"Unicode dec":`128327`,"Unicode hex":`1F547`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`135`,"Dingbat hex":`87`,"Unicode dec":`128348`,"Unicode hex":`1F55C`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`136`,"Dingbat hex":`88`,"Unicode dec":`128349`,"Unicode hex":`1F55D`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`137`,"Dingbat hex":`89`,"Unicode dec":`128350`,"Unicode hex":`1F55E`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`138`,"Dingbat hex":`8A`,"Unicode dec":`128351`,"Unicode hex":`1F55F`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`139`,"Dingbat hex":`8B`,"Unicode dec":`128352`,"Unicode hex":`1F560`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`140`,"Dingbat hex":`8C`,"Unicode dec":`128353`,"Unicode hex":`1F561`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`141`,"Dingbat hex":`8D`,"Unicode dec":`128354`,"Unicode hex":`1F562`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`142`,"Dingbat hex":`8E`,"Unicode dec":`128355`,"Unicode hex":`1F563`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`143`,"Dingbat hex":`8F`,"Unicode dec":`128356`,"Unicode hex":`1F564`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`144`,"Dingbat hex":`90`,"Unicode dec":`128357`,"Unicode hex":`1F565`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`145`,"Dingbat hex":`91`,"Unicode dec":`128358`,"Unicode hex":`1F566`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`146`,"Dingbat hex":`92`,"Unicode dec":`128359`,"Unicode hex":`1F567`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`147`,"Dingbat hex":`93`,"Unicode dec":`128616`,"Unicode hex":`1F668`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`148`,"Dingbat hex":`94`,"Unicode dec":`128617`,"Unicode hex":`1F669`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`149`,"Dingbat hex":`95`,"Unicode dec":`8901`,"Unicode hex":`22C5`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`150`,"Dingbat hex":`96`,"Unicode dec":`128900`,"Unicode hex":`1F784`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`151`,"Dingbat hex":`97`,"Unicode dec":`10625`,"Unicode hex":`2981`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`152`,"Dingbat hex":`98`,"Unicode dec":`9679`,"Unicode hex":`25CF`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`153`,"Dingbat hex":`99`,"Unicode dec":`9675`,"Unicode hex":`25CB`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`154`,"Dingbat hex":`9A`,"Unicode dec":`128901`,"Unicode hex":`1F785`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`155`,"Dingbat hex":`9B`,"Unicode dec":`128903`,"Unicode hex":`1F787`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`156`,"Dingbat hex":`9C`,"Unicode dec":`128905`,"Unicode hex":`1F789`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`157`,"Dingbat hex":`9D`,"Unicode dec":`8857`,"Unicode hex":`2299`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`158`,"Dingbat hex":`9E`,"Unicode dec":`10687`,"Unicode hex":`29BF`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`159`,"Dingbat hex":`9F`,"Unicode dec":`128908`,"Unicode hex":`1F78C`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`160`,"Dingbat hex":`A0`,"Unicode dec":`128909`,"Unicode hex":`1F78D`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`161`,"Dingbat hex":`A1`,"Unicode dec":`9726`,"Unicode hex":`25FE`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`162`,"Dingbat hex":`A2`,"Unicode dec":`9632`,"Unicode hex":`25A0`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`163`,"Dingbat hex":`A3`,"Unicode dec":`9633`,"Unicode hex":`25A1`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`164`,"Dingbat hex":`A4`,"Unicode dec":`128913`,"Unicode hex":`1F791`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`165`,"Dingbat hex":`A5`,"Unicode dec":`128914`,"Unicode hex":`1F792`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`166`,"Dingbat hex":`A6`,"Unicode dec":`128915`,"Unicode hex":`1F793`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`167`,"Dingbat hex":`A7`,"Unicode dec":`128916`,"Unicode hex":`1F794`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`168`,"Dingbat hex":`A8`,"Unicode dec":`9635`,"Unicode hex":`25A3`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`169`,"Dingbat hex":`A9`,"Unicode dec":`128917`,"Unicode hex":`1F795`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`170`,"Dingbat hex":`AA`,"Unicode dec":`128918`,"Unicode hex":`1F796`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`171`,"Dingbat hex":`AB`,"Unicode dec":`128919`,"Unicode hex":`1F797`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`172`,"Dingbat hex":`AC`,"Unicode dec":`128920`,"Unicode hex":`1F798`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`173`,"Dingbat hex":`AD`,"Unicode dec":`11049`,"Unicode hex":`2B29`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`174`,"Dingbat hex":`AE`,"Unicode dec":`11045`,"Unicode hex":`2B25`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`175`,"Dingbat hex":`AF`,"Unicode dec":`9671`,"Unicode hex":`25C7`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`176`,"Dingbat hex":`B0`,"Unicode dec":`128922`,"Unicode hex":`1F79A`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`177`,"Dingbat hex":`B1`,"Unicode dec":`9672`,"Unicode hex":`25C8`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`178`,"Dingbat hex":`B2`,"Unicode dec":`128923`,"Unicode hex":`1F79B`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`179`,"Dingbat hex":`B3`,"Unicode dec":`128924`,"Unicode hex":`1F79C`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`180`,"Dingbat hex":`B4`,"Unicode dec":`128925`,"Unicode hex":`1F79D`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`181`,"Dingbat hex":`B5`,"Unicode dec":`128926`,"Unicode hex":`1F79E`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`182`,"Dingbat hex":`B6`,"Unicode dec":`11050`,"Unicode hex":`2B2A`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`183`,"Dingbat hex":`B7`,"Unicode dec":`11047`,"Unicode hex":`2B27`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`184`,"Dingbat hex":`B8`,"Unicode dec":`9674`,"Unicode hex":`25CA`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`185`,"Dingbat hex":`B9`,"Unicode dec":`128928`,"Unicode hex":`1F7A0`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`186`,"Dingbat hex":`BA`,"Unicode dec":`9686`,"Unicode hex":`25D6`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`187`,"Dingbat hex":`BB`,"Unicode dec":`9687`,"Unicode hex":`25D7`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`188`,"Dingbat hex":`BC`,"Unicode dec":`11210`,"Unicode hex":`2BCA`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`189`,"Dingbat hex":`BD`,"Unicode dec":`11211`,"Unicode hex":`2BCB`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`190`,"Dingbat hex":`BE`,"Unicode dec":`11200`,"Unicode hex":`2BC0`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`191`,"Dingbat hex":`BF`,"Unicode dec":`11201`,"Unicode hex":`2BC1`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`192`,"Dingbat hex":`C0`,"Unicode dec":`11039`,"Unicode hex":`2B1F`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`193`,"Dingbat hex":`C1`,"Unicode dec":`11202`,"Unicode hex":`2BC2`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`194`,"Dingbat hex":`C2`,"Unicode dec":`11043`,"Unicode hex":`2B23`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`195`,"Dingbat hex":`C3`,"Unicode dec":`11042`,"Unicode hex":`2B22`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`196`,"Dingbat hex":`C4`,"Unicode dec":`11203`,"Unicode hex":`2BC3`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`197`,"Dingbat hex":`C5`,"Unicode dec":`11204`,"Unicode hex":`2BC4`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`198`,"Dingbat hex":`C6`,"Unicode dec":`128929`,"Unicode hex":`1F7A1`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`199`,"Dingbat hex":`C7`,"Unicode dec":`128930`,"Unicode hex":`1F7A2`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`200`,"Dingbat hex":`C8`,"Unicode dec":`128931`,"Unicode hex":`1F7A3`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`201`,"Dingbat hex":`C9`,"Unicode dec":`128932`,"Unicode hex":`1F7A4`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`202`,"Dingbat hex":`CA`,"Unicode dec":`128933`,"Unicode hex":`1F7A5`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`203`,"Dingbat hex":`CB`,"Unicode dec":`128934`,"Unicode hex":`1F7A6`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`204`,"Dingbat hex":`CC`,"Unicode dec":`128935`,"Unicode hex":`1F7A7`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`205`,"Dingbat hex":`CD`,"Unicode dec":`128936`,"Unicode hex":`1F7A8`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`206`,"Dingbat hex":`CE`,"Unicode dec":`128937`,"Unicode hex":`1F7A9`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`207`,"Dingbat hex":`CF`,"Unicode dec":`128938`,"Unicode hex":`1F7AA`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`208`,"Dingbat hex":`D0`,"Unicode dec":`128939`,"Unicode hex":`1F7AB`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`209`,"Dingbat hex":`D1`,"Unicode dec":`128940`,"Unicode hex":`1F7AC`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`210`,"Dingbat hex":`D2`,"Unicode dec":`128941`,"Unicode hex":`1F7AD`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`211`,"Dingbat hex":`D3`,"Unicode dec":`128942`,"Unicode hex":`1F7AE`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`212`,"Dingbat hex":`D4`,"Unicode dec":`128943`,"Unicode hex":`1F7AF`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`213`,"Dingbat hex":`D5`,"Unicode dec":`128944`,"Unicode hex":`1F7B0`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`214`,"Dingbat hex":`D6`,"Unicode dec":`128945`,"Unicode hex":`1F7B1`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`215`,"Dingbat hex":`D7`,"Unicode dec":`128946`,"Unicode hex":`1F7B2`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`216`,"Dingbat hex":`D8`,"Unicode dec":`128947`,"Unicode hex":`1F7B3`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`217`,"Dingbat hex":`D9`,"Unicode dec":`128948`,"Unicode hex":`1F7B4`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`218`,"Dingbat hex":`DA`,"Unicode dec":`128949`,"Unicode hex":`1F7B5`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`219`,"Dingbat hex":`DB`,"Unicode dec":`128950`,"Unicode hex":`1F7B6`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`220`,"Dingbat hex":`DC`,"Unicode dec":`128951`,"Unicode hex":`1F7B7`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`221`,"Dingbat hex":`DD`,"Unicode dec":`128952`,"Unicode hex":`1F7B8`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`222`,"Dingbat hex":`DE`,"Unicode dec":`128953`,"Unicode hex":`1F7B9`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`223`,"Dingbat hex":`DF`,"Unicode dec":`128954`,"Unicode hex":`1F7BA`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`224`,"Dingbat hex":`E0`,"Unicode dec":`128955`,"Unicode hex":`1F7BB`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`225`,"Dingbat hex":`E1`,"Unicode dec":`128956`,"Unicode hex":`1F7BC`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`226`,"Dingbat hex":`E2`,"Unicode dec":`128957`,"Unicode hex":`1F7BD`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`227`,"Dingbat hex":`E3`,"Unicode dec":`128958`,"Unicode hex":`1F7BE`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`228`,"Dingbat hex":`E4`,"Unicode dec":`128959`,"Unicode hex":`1F7BF`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`229`,"Dingbat hex":`E5`,"Unicode dec":`128960`,"Unicode hex":`1F7C0`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`230`,"Dingbat hex":`E6`,"Unicode dec":`128962`,"Unicode hex":`1F7C2`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`231`,"Dingbat hex":`E7`,"Unicode dec":`128964`,"Unicode hex":`1F7C4`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`232`,"Dingbat hex":`E8`,"Unicode dec":`128966`,"Unicode hex":`1F7C6`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`233`,"Dingbat hex":`E9`,"Unicode dec":`128969`,"Unicode hex":`1F7C9`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`234`,"Dingbat hex":`EA`,"Unicode dec":`128970`,"Unicode hex":`1F7CA`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`235`,"Dingbat hex":`EB`,"Unicode dec":`10038`,"Unicode hex":`2736`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`236`,"Dingbat hex":`EC`,"Unicode dec":`128972`,"Unicode hex":`1F7CC`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`237`,"Dingbat hex":`ED`,"Unicode dec":`128974`,"Unicode hex":`1F7CE`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`238`,"Dingbat hex":`EE`,"Unicode dec":`128976`,"Unicode hex":`1F7D0`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`239`,"Dingbat hex":`EF`,"Unicode dec":`128978`,"Unicode hex":`1F7D2`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`240`,"Dingbat hex":`F0`,"Unicode dec":`10041`,"Unicode hex":`2739`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`241`,"Dingbat hex":`F1`,"Unicode dec":`128963`,"Unicode hex":`1F7C3`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`242`,"Dingbat hex":`F2`,"Unicode dec":`128967`,"Unicode hex":`1F7C7`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`243`,"Dingbat hex":`F3`,"Unicode dec":`10031`,"Unicode hex":`272F`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`244`,"Dingbat hex":`F4`,"Unicode dec":`128973`,"Unicode hex":`1F7CD`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`245`,"Dingbat hex":`F5`,"Unicode dec":`128980`,"Unicode hex":`1F7D4`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`246`,"Dingbat hex":`F6`,"Unicode dec":`11212`,"Unicode hex":`2BCC`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`247`,"Dingbat hex":`F7`,"Unicode dec":`11213`,"Unicode hex":`2BCD`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`248`,"Dingbat hex":`F8`,"Unicode dec":`8251`,"Unicode hex":`203B`},{"Typeface name":`Wingdings 2`,"Dingbat dec":`249`,"Dingbat hex":`F9`,"Unicode dec":`8258`,"Unicode hex":`2042`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`32`,"Dingbat hex":`20`,"Unicode dec":`32`,"Unicode hex":`20`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`33`,"Dingbat hex":`21`,"Unicode dec":`11104`,"Unicode hex":`2B60`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`34`,"Dingbat hex":`22`,"Unicode dec":`11106`,"Unicode hex":`2B62`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`35`,"Dingbat hex":`23`,"Unicode dec":`11105`,"Unicode hex":`2B61`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`36`,"Dingbat hex":`24`,"Unicode dec":`11107`,"Unicode hex":`2B63`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`37`,"Dingbat hex":`25`,"Unicode dec":`11110`,"Unicode hex":`2B66`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`38`,"Dingbat hex":`26`,"Unicode dec":`11111`,"Unicode hex":`2B67`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`39`,"Dingbat hex":`27`,"Unicode dec":`11113`,"Unicode hex":`2B69`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`40`,"Dingbat hex":`28`,"Unicode dec":`11112`,"Unicode hex":`2B68`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`41`,"Dingbat hex":`29`,"Unicode dec":`11120`,"Unicode hex":`2B70`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`42`,"Dingbat hex":`2A`,"Unicode dec":`11122`,"Unicode hex":`2B72`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`43`,"Dingbat hex":`2B`,"Unicode dec":`11121`,"Unicode hex":`2B71`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`44`,"Dingbat hex":`2C`,"Unicode dec":`11123`,"Unicode hex":`2B73`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`45`,"Dingbat hex":`2D`,"Unicode dec":`11126`,"Unicode hex":`2B76`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`46`,"Dingbat hex":`2E`,"Unicode dec":`11128`,"Unicode hex":`2B78`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`47`,"Dingbat hex":`2F`,"Unicode dec":`11131`,"Unicode hex":`2B7B`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`48`,"Dingbat hex":`30`,"Unicode dec":`11133`,"Unicode hex":`2B7D`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`49`,"Dingbat hex":`31`,"Unicode dec":`11108`,"Unicode hex":`2B64`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`50`,"Dingbat hex":`32`,"Unicode dec":`11109`,"Unicode hex":`2B65`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`51`,"Dingbat hex":`33`,"Unicode dec":`11114`,"Unicode hex":`2B6A`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`52`,"Dingbat hex":`34`,"Unicode dec":`11116`,"Unicode hex":`2B6C`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`53`,"Dingbat hex":`35`,"Unicode dec":`11115`,"Unicode hex":`2B6B`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`54`,"Dingbat hex":`36`,"Unicode dec":`11117`,"Unicode hex":`2B6D`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`55`,"Dingbat hex":`37`,"Unicode dec":`11085`,"Unicode hex":`2B4D`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`56`,"Dingbat hex":`38`,"Unicode dec":`11168`,"Unicode hex":`2BA0`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`57`,"Dingbat hex":`39`,"Unicode dec":`11169`,"Unicode hex":`2BA1`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`58`,"Dingbat hex":`3A`,"Unicode dec":`11170`,"Unicode hex":`2BA2`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`59`,"Dingbat hex":`3B`,"Unicode dec":`11171`,"Unicode hex":`2BA3`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`60`,"Dingbat hex":`3C`,"Unicode dec":`11172`,"Unicode hex":`2BA4`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`61`,"Dingbat hex":`3D`,"Unicode dec":`11173`,"Unicode hex":`2BA5`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`62`,"Dingbat hex":`3E`,"Unicode dec":`11174`,"Unicode hex":`2BA6`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`63`,"Dingbat hex":`3F`,"Unicode dec":`11175`,"Unicode hex":`2BA7`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`64`,"Dingbat hex":`40`,"Unicode dec":`11152`,"Unicode hex":`2B90`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`65`,"Dingbat hex":`41`,"Unicode dec":`11153`,"Unicode hex":`2B91`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`66`,"Dingbat hex":`42`,"Unicode dec":`11154`,"Unicode hex":`2B92`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`67`,"Dingbat hex":`43`,"Unicode dec":`11155`,"Unicode hex":`2B93`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`68`,"Dingbat hex":`44`,"Unicode dec":`11136`,"Unicode hex":`2B80`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`69`,"Dingbat hex":`45`,"Unicode dec":`11139`,"Unicode hex":`2B83`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`70`,"Dingbat hex":`46`,"Unicode dec":`11134`,"Unicode hex":`2B7E`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`71`,"Dingbat hex":`47`,"Unicode dec":`11135`,"Unicode hex":`2B7F`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`72`,"Dingbat hex":`48`,"Unicode dec":`11140`,"Unicode hex":`2B84`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`73`,"Dingbat hex":`49`,"Unicode dec":`11142`,"Unicode hex":`2B86`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`74`,"Dingbat hex":`4A`,"Unicode dec":`11141`,"Unicode hex":`2B85`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`75`,"Dingbat hex":`4B`,"Unicode dec":`11143`,"Unicode hex":`2B87`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`76`,"Dingbat hex":`4C`,"Unicode dec":`11151`,"Unicode hex":`2B8F`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`77`,"Dingbat hex":`4D`,"Unicode dec":`11149`,"Unicode hex":`2B8D`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`78`,"Dingbat hex":`4E`,"Unicode dec":`11150`,"Unicode hex":`2B8E`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`79`,"Dingbat hex":`4F`,"Unicode dec":`11148`,"Unicode hex":`2B8C`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`80`,"Dingbat hex":`50`,"Unicode dec":`11118`,"Unicode hex":`2B6E`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`81`,"Dingbat hex":`51`,"Unicode dec":`11119`,"Unicode hex":`2B6F`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`82`,"Dingbat hex":`52`,"Unicode dec":`9099`,"Unicode hex":`238B`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`83`,"Dingbat hex":`53`,"Unicode dec":`8996`,"Unicode hex":`2324`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`84`,"Dingbat hex":`54`,"Unicode dec":`8963`,"Unicode hex":`2303`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`85`,"Dingbat hex":`55`,"Unicode dec":`8997`,"Unicode hex":`2325`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`86`,"Dingbat hex":`56`,"Unicode dec":`9251`,"Unicode hex":`2423`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`87`,"Dingbat hex":`57`,"Unicode dec":`9085`,"Unicode hex":`237D`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`88`,"Dingbat hex":`58`,"Unicode dec":`8682`,"Unicode hex":`21EA`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`89`,"Dingbat hex":`59`,"Unicode dec":`11192`,"Unicode hex":`2BB8`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`90`,"Dingbat hex":`5A`,"Unicode dec":`129184`,"Unicode hex":`1F8A0`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`91`,"Dingbat hex":`5B`,"Unicode dec":`129185`,"Unicode hex":`1F8A1`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`92`,"Dingbat hex":`5C`,"Unicode dec":`129186`,"Unicode hex":`1F8A2`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`93`,"Dingbat hex":`5D`,"Unicode dec":`129187`,"Unicode hex":`1F8A3`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`94`,"Dingbat hex":`5E`,"Unicode dec":`129188`,"Unicode hex":`1F8A4`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`95`,"Dingbat hex":`5F`,"Unicode dec":`129189`,"Unicode hex":`1F8A5`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`96`,"Dingbat hex":`60`,"Unicode dec":`129190`,"Unicode hex":`1F8A6`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`97`,"Dingbat hex":`61`,"Unicode dec":`129191`,"Unicode hex":`1F8A7`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`98`,"Dingbat hex":`62`,"Unicode dec":`129192`,"Unicode hex":`1F8A8`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`99`,"Dingbat hex":`63`,"Unicode dec":`129193`,"Unicode hex":`1F8A9`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`100`,"Dingbat hex":`64`,"Unicode dec":`129194`,"Unicode hex":`1F8AA`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`101`,"Dingbat hex":`65`,"Unicode dec":`129195`,"Unicode hex":`1F8AB`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`102`,"Dingbat hex":`66`,"Unicode dec":`129104`,"Unicode hex":`1F850`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`103`,"Dingbat hex":`67`,"Unicode dec":`129106`,"Unicode hex":`1F852`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`104`,"Dingbat hex":`68`,"Unicode dec":`129105`,"Unicode hex":`1F851`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`105`,"Dingbat hex":`69`,"Unicode dec":`129107`,"Unicode hex":`1F853`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`106`,"Dingbat hex":`6A`,"Unicode dec":`129108`,"Unicode hex":`1F854`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`107`,"Dingbat hex":`6B`,"Unicode dec":`129109`,"Unicode hex":`1F855`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`108`,"Dingbat hex":`6C`,"Unicode dec":`129111`,"Unicode hex":`1F857`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`109`,"Dingbat hex":`6D`,"Unicode dec":`129110`,"Unicode hex":`1F856`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`110`,"Dingbat hex":`6E`,"Unicode dec":`129112`,"Unicode hex":`1F858`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`111`,"Dingbat hex":`6F`,"Unicode dec":`129113`,"Unicode hex":`1F859`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`112`,"Dingbat hex":`70`,"Unicode dec":`9650`,"Unicode hex":`25B2`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`113`,"Dingbat hex":`71`,"Unicode dec":`9660`,"Unicode hex":`25BC`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`114`,"Dingbat hex":`72`,"Unicode dec":`9651`,"Unicode hex":`25B3`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`115`,"Dingbat hex":`73`,"Unicode dec":`9661`,"Unicode hex":`25BD`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`116`,"Dingbat hex":`74`,"Unicode dec":`9664`,"Unicode hex":`25C0`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`117`,"Dingbat hex":`75`,"Unicode dec":`9654`,"Unicode hex":`25B6`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`118`,"Dingbat hex":`76`,"Unicode dec":`9665`,"Unicode hex":`25C1`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`119`,"Dingbat hex":`77`,"Unicode dec":`9655`,"Unicode hex":`25B7`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`120`,"Dingbat hex":`78`,"Unicode dec":`9699`,"Unicode hex":`25E3`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`121`,"Dingbat hex":`79`,"Unicode dec":`9698`,"Unicode hex":`25E2`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`122`,"Dingbat hex":`7A`,"Unicode dec":`9700`,"Unicode hex":`25E4`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`123`,"Dingbat hex":`7B`,"Unicode dec":`9701`,"Unicode hex":`25E5`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`124`,"Dingbat hex":`7C`,"Unicode dec":`128896`,"Unicode hex":`1F780`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`125`,"Dingbat hex":`7D`,"Unicode dec":`128898`,"Unicode hex":`1F782`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`126`,"Dingbat hex":`7E`,"Unicode dec":`128897`,"Unicode hex":`1F781`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`128`,"Dingbat hex":`80`,"Unicode dec":`128899`,"Unicode hex":`1F783`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`129`,"Dingbat hex":`81`,"Unicode dec":`11205`,"Unicode hex":`2BC5`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`130`,"Dingbat hex":`82`,"Unicode dec":`11206`,"Unicode hex":`2BC6`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`131`,"Dingbat hex":`83`,"Unicode dec":`11207`,"Unicode hex":`2BC7`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`132`,"Dingbat hex":`84`,"Unicode dec":`11208`,"Unicode hex":`2BC8`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`133`,"Dingbat hex":`85`,"Unicode dec":`11164`,"Unicode hex":`2B9C`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`134`,"Dingbat hex":`86`,"Unicode dec":`11166`,"Unicode hex":`2B9E`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`135`,"Dingbat hex":`87`,"Unicode dec":`11165`,"Unicode hex":`2B9D`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`136`,"Dingbat hex":`88`,"Unicode dec":`11167`,"Unicode hex":`2B9F`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`137`,"Dingbat hex":`89`,"Unicode dec":`129040`,"Unicode hex":`1F810`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`138`,"Dingbat hex":`8A`,"Unicode dec":`129042`,"Unicode hex":`1F812`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`139`,"Dingbat hex":`8B`,"Unicode dec":`129041`,"Unicode hex":`1F811`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`140`,"Dingbat hex":`8C`,"Unicode dec":`129043`,"Unicode hex":`1F813`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`141`,"Dingbat hex":`8D`,"Unicode dec":`129044`,"Unicode hex":`1F814`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`142`,"Dingbat hex":`8E`,"Unicode dec":`129046`,"Unicode hex":`1F816`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`143`,"Dingbat hex":`8F`,"Unicode dec":`129045`,"Unicode hex":`1F815`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`144`,"Dingbat hex":`90`,"Unicode dec":`129047`,"Unicode hex":`1F817`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`145`,"Dingbat hex":`91`,"Unicode dec":`129048`,"Unicode hex":`1F818`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`146`,"Dingbat hex":`92`,"Unicode dec":`129050`,"Unicode hex":`1F81A`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`147`,"Dingbat hex":`93`,"Unicode dec":`129049`,"Unicode hex":`1F819`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`148`,"Dingbat hex":`94`,"Unicode dec":`129051`,"Unicode hex":`1F81B`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`149`,"Dingbat hex":`95`,"Unicode dec":`129052`,"Unicode hex":`1F81C`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`150`,"Dingbat hex":`96`,"Unicode dec":`129054`,"Unicode hex":`1F81E`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`151`,"Dingbat hex":`97`,"Unicode dec":`129053`,"Unicode hex":`1F81D`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`152`,"Dingbat hex":`98`,"Unicode dec":`129055`,"Unicode hex":`1F81F`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`153`,"Dingbat hex":`99`,"Unicode dec":`129024`,"Unicode hex":`1F800`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`154`,"Dingbat hex":`9A`,"Unicode dec":`129026`,"Unicode hex":`1F802`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`155`,"Dingbat hex":`9B`,"Unicode dec":`129025`,"Unicode hex":`1F801`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`156`,"Dingbat hex":`9C`,"Unicode dec":`129027`,"Unicode hex":`1F803`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`157`,"Dingbat hex":`9D`,"Unicode dec":`129028`,"Unicode hex":`1F804`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`158`,"Dingbat hex":`9E`,"Unicode dec":`129030`,"Unicode hex":`1F806`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`159`,"Dingbat hex":`9F`,"Unicode dec":`129029`,"Unicode hex":`1F805`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`160`,"Dingbat hex":`A0`,"Unicode dec":`129031`,"Unicode hex":`1F807`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`161`,"Dingbat hex":`A1`,"Unicode dec":`129032`,"Unicode hex":`1F808`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`162`,"Dingbat hex":`A2`,"Unicode dec":`129034`,"Unicode hex":`1F80A`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`163`,"Dingbat hex":`A3`,"Unicode dec":`129033`,"Unicode hex":`1F809`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`164`,"Dingbat hex":`A4`,"Unicode dec":`129035`,"Unicode hex":`1F80B`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`165`,"Dingbat hex":`A5`,"Unicode dec":`129056`,"Unicode hex":`1F820`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`166`,"Dingbat hex":`A6`,"Unicode dec":`129058`,"Unicode hex":`1F822`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`167`,"Dingbat hex":`A7`,"Unicode dec":`129060`,"Unicode hex":`1F824`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`168`,"Dingbat hex":`A8`,"Unicode dec":`129062`,"Unicode hex":`1F826`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`169`,"Dingbat hex":`A9`,"Unicode dec":`129064`,"Unicode hex":`1F828`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`170`,"Dingbat hex":`AA`,"Unicode dec":`129066`,"Unicode hex":`1F82A`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`171`,"Dingbat hex":`AB`,"Unicode dec":`129068`,"Unicode hex":`1F82C`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`172`,"Dingbat hex":`AC`,"Unicode dec":`129180`,"Unicode hex":`1F89C`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`173`,"Dingbat hex":`AD`,"Unicode dec":`129181`,"Unicode hex":`1F89D`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`174`,"Dingbat hex":`AE`,"Unicode dec":`129182`,"Unicode hex":`1F89E`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`175`,"Dingbat hex":`AF`,"Unicode dec":`129183`,"Unicode hex":`1F89F`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`176`,"Dingbat hex":`B0`,"Unicode dec":`129070`,"Unicode hex":`1F82E`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`177`,"Dingbat hex":`B1`,"Unicode dec":`129072`,"Unicode hex":`1F830`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`178`,"Dingbat hex":`B2`,"Unicode dec":`129074`,"Unicode hex":`1F832`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`179`,"Dingbat hex":`B3`,"Unicode dec":`129076`,"Unicode hex":`1F834`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`180`,"Dingbat hex":`B4`,"Unicode dec":`129078`,"Unicode hex":`1F836`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`181`,"Dingbat hex":`B5`,"Unicode dec":`129080`,"Unicode hex":`1F838`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`182`,"Dingbat hex":`B6`,"Unicode dec":`129082`,"Unicode hex":`1F83A`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`183`,"Dingbat hex":`B7`,"Unicode dec":`129081`,"Unicode hex":`1F839`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`184`,"Dingbat hex":`B8`,"Unicode dec":`129083`,"Unicode hex":`1F83B`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`185`,"Dingbat hex":`B9`,"Unicode dec":`129176`,"Unicode hex":`1F898`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`186`,"Dingbat hex":`BA`,"Unicode dec":`129178`,"Unicode hex":`1F89A`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`187`,"Dingbat hex":`BB`,"Unicode dec":`129177`,"Unicode hex":`1F899`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`188`,"Dingbat hex":`BC`,"Unicode dec":`129179`,"Unicode hex":`1F89B`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`189`,"Dingbat hex":`BD`,"Unicode dec":`129084`,"Unicode hex":`1F83C`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`190`,"Dingbat hex":`BE`,"Unicode dec":`129086`,"Unicode hex":`1F83E`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`191`,"Dingbat hex":`BF`,"Unicode dec":`129085`,"Unicode hex":`1F83D`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`192`,"Dingbat hex":`C0`,"Unicode dec":`129087`,"Unicode hex":`1F83F`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`193`,"Dingbat hex":`C1`,"Unicode dec":`129088`,"Unicode hex":`1F840`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`194`,"Dingbat hex":`C2`,"Unicode dec":`129090`,"Unicode hex":`1F842`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`195`,"Dingbat hex":`C3`,"Unicode dec":`129089`,"Unicode hex":`1F841`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`196`,"Dingbat hex":`C4`,"Unicode dec":`129091`,"Unicode hex":`1F843`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`197`,"Dingbat hex":`C5`,"Unicode dec":`129092`,"Unicode hex":`1F844`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`198`,"Dingbat hex":`C6`,"Unicode dec":`129094`,"Unicode hex":`1F846`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`199`,"Dingbat hex":`C7`,"Unicode dec":`129093`,"Unicode hex":`1F845`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`200`,"Dingbat hex":`C8`,"Unicode dec":`129095`,"Unicode hex":`1F847`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`201`,"Dingbat hex":`C9`,"Unicode dec":`11176`,"Unicode hex":`2BA8`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`202`,"Dingbat hex":`CA`,"Unicode dec":`11177`,"Unicode hex":`2BA9`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`203`,"Dingbat hex":`CB`,"Unicode dec":`11178`,"Unicode hex":`2BAA`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`204`,"Dingbat hex":`CC`,"Unicode dec":`11179`,"Unicode hex":`2BAB`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`205`,"Dingbat hex":`CD`,"Unicode dec":`11180`,"Unicode hex":`2BAC`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`206`,"Dingbat hex":`CE`,"Unicode dec":`11181`,"Unicode hex":`2BAD`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`207`,"Dingbat hex":`CF`,"Unicode dec":`11182`,"Unicode hex":`2BAE`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`208`,"Dingbat hex":`D0`,"Unicode dec":`11183`,"Unicode hex":`2BAF`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`209`,"Dingbat hex":`D1`,"Unicode dec":`129120`,"Unicode hex":`1F860`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`210`,"Dingbat hex":`D2`,"Unicode dec":`129122`,"Unicode hex":`1F862`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`211`,"Dingbat hex":`D3`,"Unicode dec":`129121`,"Unicode hex":`1F861`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`212`,"Dingbat hex":`D4`,"Unicode dec":`129123`,"Unicode hex":`1F863`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`213`,"Dingbat hex":`D5`,"Unicode dec":`129124`,"Unicode hex":`1F864`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`214`,"Dingbat hex":`D6`,"Unicode dec":`129125`,"Unicode hex":`1F865`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`215`,"Dingbat hex":`D7`,"Unicode dec":`129127`,"Unicode hex":`1F867`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`216`,"Dingbat hex":`D8`,"Unicode dec":`129126`,"Unicode hex":`1F866`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`217`,"Dingbat hex":`D9`,"Unicode dec":`129136`,"Unicode hex":`1F870`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`218`,"Dingbat hex":`DA`,"Unicode dec":`129138`,"Unicode hex":`1F872`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`219`,"Dingbat hex":`DB`,"Unicode dec":`129137`,"Unicode hex":`1F871`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`220`,"Dingbat hex":`DC`,"Unicode dec":`129139`,"Unicode hex":`1F873`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`221`,"Dingbat hex":`DD`,"Unicode dec":`129140`,"Unicode hex":`1F874`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`222`,"Dingbat hex":`DE`,"Unicode dec":`129141`,"Unicode hex":`1F875`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`223`,"Dingbat hex":`DF`,"Unicode dec":`129143`,"Unicode hex":`1F877`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`224`,"Dingbat hex":`E0`,"Unicode dec":`129142`,"Unicode hex":`1F876`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`225`,"Dingbat hex":`E1`,"Unicode dec":`129152`,"Unicode hex":`1F880`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`226`,"Dingbat hex":`E2`,"Unicode dec":`129154`,"Unicode hex":`1F882`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`227`,"Dingbat hex":`E3`,"Unicode dec":`129153`,"Unicode hex":`1F881`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`228`,"Dingbat hex":`E4`,"Unicode dec":`129155`,"Unicode hex":`1F883`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`229`,"Dingbat hex":`E5`,"Unicode dec":`129156`,"Unicode hex":`1F884`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`230`,"Dingbat hex":`E6`,"Unicode dec":`129157`,"Unicode hex":`1F885`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`231`,"Dingbat hex":`E7`,"Unicode dec":`129159`,"Unicode hex":`1F887`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`232`,"Dingbat hex":`E8`,"Unicode dec":`129158`,"Unicode hex":`1F886`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`233`,"Dingbat hex":`E9`,"Unicode dec":`129168`,"Unicode hex":`1F890`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`234`,"Dingbat hex":`EA`,"Unicode dec":`129170`,"Unicode hex":`1F892`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`235`,"Dingbat hex":`EB`,"Unicode dec":`129169`,"Unicode hex":`1F891`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`236`,"Dingbat hex":`EC`,"Unicode dec":`129171`,"Unicode hex":`1F893`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`237`,"Dingbat hex":`ED`,"Unicode dec":`129172`,"Unicode hex":`1F894`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`238`,"Dingbat hex":`EE`,"Unicode dec":`129174`,"Unicode hex":`1F896`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`239`,"Dingbat hex":`EF`,"Unicode dec":`129173`,"Unicode hex":`1F895`},{"Typeface name":`Wingdings 3`,"Dingbat dec":`240`,"Dingbat hex":`F0`,"Unicode dec":`129175`,"Unicode hex":`1F897`}]})),Es=s((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.hex=e.dec=e.codePoint=void 0;for(var n=t(Ts()),r={},i=String.fromCodePoint?String.fromCodePoint:p,a=0,o=n.default;a<o.length;a++){var s=o[a],c=parseInt(s[`Unicode dec`],10),l={codePoint:c,string:i(c)};r[s[`Typeface name`].toUpperCase()+`_`+s[`Dingbat dec`]]=l}function u(e,t){return r[e.toUpperCase()+`_`+t]}e.codePoint=u;function d(e,t){return u(e,parseInt(t,10))}e.dec=d;function f(e,t){return u(e,parseInt(t,16))}e.hex=f;function p(e){if(e<=65535)return String.fromCharCode(e);var t=Math.floor((e-65536)/1024)+55296,n=(e-65536)%1024+56320;return String.fromCharCode(t,n)}})),Ds=s((e=>{var t=(Q(),d(Z));e.paragraph=n,e.run=r,e._elements=a,e._elementsOfType=i,e.getDescendantsOfType=o,e.getDescendants=s;function n(e){return i(`paragraph`,e)}function r(e){return i(`run`,e)}function i(e,t){return a(function(n){return n.type===e?t(n):n})}function a(e){return function n(r){if(r.children){var i=t.map(r.children,n);r=t.extend(r,{children:i})}return e(r)}}function o(e,t){return s(e).filter(function(e){return e.type===t})}function s(e){var t=[];return c(e,function(e){t.push(e)}),t}function c(e,t){e.children&&e.children.forEach(function(e){c(e,t),t(e)})}})),Os=s((e=>{e.uriToZipEntryName=t,e.replaceFragment=n;function t(e,t){return t.charAt(0)===`/`?t.substr(1):e+`/`+t}function n(e,t){var n=e.indexOf(`#`);return n!==-1&&(e=e.substring(0,n)),e+`#`+t}})),ks=s((e=>{e.createBodyReader=l,e._readNumberingProperties=f;var t=Es(),n=(Q(),d(Z)),r=zo(),i=Bo().Result,a=Bo().warning,o=Cs(),s=Ds(),c=Os();function l(e){return{readXmlElement:function(t){return new u(e).readXmlElement(t)},readXmlElements:function(t){return new u(e).readXmlElements(t)}}}function u(e){var i=[],l=[],u=[],d=e.relationships,x=e.contentTypes,S=e.docxFile,C=e.files,w=e.numbering,T=e.styles;function E(e){return b(e.map(D))}function D(e){if(e.type===`element`){var t=re[e.name];if(t)return t(e);if(!Object.prototype.hasOwnProperty.call(m,e.name))return h([a(`An unrecognised element was ignored: `+e.name)])}return g()}function O(e){return F(e).map(function(t){return{type:`paragraphProperties`,styleId:t.styleId,styleName:t.name,alignment:e.firstOrEmpty(`w:jc`).attributes[`w:val`],numbering:f(t.styleId,e.firstOrEmpty(`w:numPr`),w),indent:k(e.firstOrEmpty(`w:ind`))}})}function k(e){return{start:e.attributes[`w:start`]||e.attributes[`w:left`],end:e.attributes[`w:end`]||e.attributes[`w:right`],firstLine:e.attributes[`w:firstLine`],hanging:e.attributes[`w:hanging`]}}function A(e){return I(e).map(function(t){var n=e.firstOrEmpty(`w:sz`).attributes[`w:val`],r=/^[0-9]+$/.test(n)?parseInt(n,10)/2:null;return{type:`runProperties`,styleId:t.styleId,styleName:t.name,verticalAlignment:e.firstOrEmpty(`w:vertAlign`).attributes[`w:val`],font:e.firstOrEmpty(`w:rFonts`).attributes[`w:ascii`],fontSize:r,isBold:M(e.first(`w:b`)),isUnderline:j(e.first(`w:u`)),isItalic:M(e.first(`w:i`)),isStrikethrough:M(e.first(`w:strike`)),isAllCaps:M(e.first(`w:caps`)),isSmallCaps:M(e.first(`w:smallCaps`)),highlight:P(e.firstOrEmpty(`w:highlight`).attributes[`w:val`])}})}function j(e){if(e){var t=e.attributes[`w:val`];return t!==void 0&&t!==`false`&&t!==`0`&&t!==`none`}else return!1}function M(e){if(e){var t=e.attributes[`w:val`];return t!==`false`&&t!==`0`}else return!1}function N(e){return e!==`false`&&e!==`0`}function P(e){return!e||e===`none`?null:e}function F(e){return R(e,`w:pStyle`,`Paragraph`,T.findParagraphStyleById)}function I(e){return R(e,`w:rStyle`,`Run`,T.findCharacterStyleById)}function L(e){return R(e,`w:tblStyle`,`Table`,T.findTableStyleById)}function R(e,t,n,r){var i=[],a=e.first(t),o=null,s=null;if(a&&(o=a.attributes[`w:val`],o)){var c=r(o);c?s=c.name:i.push(ge(n,o))}return v({styleId:o,name:s},i)}function z(e){var t=e.attributes[`w:fldCharType`];if(t===`begin`)i.push({type:`begin`,fldChar:e}),l=[];else if(t===`end`){var n=i.pop();if(n.type===`begin`&&(n=ee(n)),n.type===`checkbox`)return _(r.checkbox({checked:n.checked}))}else if(t===`separate`){var a=ee(i.pop());i.push(a)}return g()}function B(){var e=n.last(i.filter(function(e){return e.type===`hyperlink`}));return e?e.options:null}function ee(e){return V(l.join(``),e.type===`begin`?e.fldChar:o.emptyElement)}function V(e,t){var n=/^\s*HYPERLINK\s+(\\l\s+)?(?:"(.*)"|([^\\]\S*))/.exec(e);if(n){var r=n[2]===void 0?n[3]:n[2];return{type:`hyperlink`,options:n[1]===void 0?{href:r}:{anchor:r}}}if(/\s*FORMCHECKBOX\s*/.exec(e)){var i=t.firstOrEmpty(`w:ffData`).firstOrEmpty(`w:checkBox`);return{type:`checkbox`,checked:M(i.first(`w:checked`)??i.first(`w:default`))}}return{type:`unknown`}}function H(e){return l.push(e.text()),g()}function te(e){var n=e.attributes[`w:font`],i=e.attributes[`w:char`],o=t.hex(n,i);return o==null&&/^F0..$/.test(i)&&(o=t.hex(n,i.substring(2))),o==null?h([a(`A w:sym element with an unsupported character was ignored: char `+i+` in font `+n)]):_(new r.Text(o.string))}function ne(e){return function(t){var n=t.attributes[`w:id`];return _(new r.NoteReference({noteType:e,noteId:n}))}}function U(e){return _(r.commentReference({commentId:e.attributes[`w:id`]}))}function W(e){return E(e.children)}var re={"w:p":function(e){var t=e.firstOrEmpty(`w:pPr`);if(t.firstOrEmpty(`w:rPr`).first(`w:del`))return e.children.forEach(function(e){u.push(e)}),g();var n=e.children;return u.length>0&&(n=u.concat(n),u=[]),y.map(O(t),E(n),function(e,t){return new r.Paragraph(t,e)}).insertExtra()},"w:r":function(e){return y.map(A(e.firstOrEmpty(`w:rPr`)),E(e.children),function(e,t){var n=B();return n!==null&&(t=[new r.Hyperlink(t,n)]),new r.Run(t,e)})},"w:fldChar":z,"w:instrText":H,"w:t":function(e){return _(new r.Text(e.text()))},"w:tab":function(e){return _(new r.Tab)},"w:noBreakHyphen":function(){return _(new r.Text(`‑`))},"w:softHyphen":function(e){return _(new r.Text(`­`))},"w:sym":te,"w:hyperlink":function(e){var t=e.attributes[`r:id`],i=e.attributes[`w:anchor`];return E(e.children).map(function(a){function o(t){var i=e.attributes[`w:tgtFrame`]||null;return new r.Hyperlink(a,n.extend({targetFrame:i},t))}if(t){var s=d.findTargetByRelationshipId(t);return i&&(s=c.replaceFragment(s,i)),o({href:s})}else if(i)return o({anchor:i});else return a})},"w:tbl":ie,"w:tr":G,"w:tc":oe,"w:footnoteReference":ne(`footnote`),"w:endnoteReference":ne(`endnote`),"w:commentReference":U,"w:br":function(e){var t=e.attributes[`w:type`];return t==null||t===`textWrapping`?_(r.lineBreak):t===`page`?_(r.pageBreak):t===`column`?_(r.columnBreak):h([a(`Unsupported break type: `+t)])},"w:bookmarkStart":function(e){var t=e.attributes[`w:name`];return t===`_GoBack`?g():_(new r.BookmarkStart({name:t}))},"mc:AlternateContent":function(e){return W(e.firstOrEmpty(`mc:Fallback`))},"w:sdt":function(e){return E(e.firstOrEmpty(`w:sdtContent`).children).map(function(t){var n=e.firstOrEmpty(`w:sdtPr`).first(`wordml:checkbox`);if(n){var i=n.first(`wordml:checked`),a=!!i&&N(i.attributes[`wordml:val`]),o=r.checkbox({checked:a}),c=!1,l=t.map(s._elementsOfType(r.types.text,function(e){return e.value.length>0&&!c?(c=!0,o):e}));return c?l:o}else return t})},"w:ins":W,"w:object":W,"w:smartTag":W,"w:drawing":W,"w:pict":function(e){return W(e).toExtra()},"v:roundrect":W,"v:shape":W,"v:textbox":W,"w:txbxContent":W,"wp:inline":ue,"wp:anchor":ue,"v:imagedata":pe,"v:group":W,"v:rect":W};return{readXmlElement:D,readXmlElements:E};function ie(e){var t=ae(e.firstOrEmpty(`w:tblPr`));return E(e.children).flatMap(ce).flatMap(function(e){return t.map(function(t){return r.Table(e,t)})})}function ae(e){return L(e).map(function(e){return{styleId:e.styleId,styleName:e.name}})}function G(e){var t=e.firstOrEmpty(`w:trPr`);if(t.first(`w:del`))return g();var n=!!t.first(`w:tblHeader`);return E(e.children).map(function(e){return r.TableRow(e,{isHeader:n})})}function oe(e){return E(e.children).map(function(t){var n=e.firstOrEmpty(`w:tcPr`),i=n.firstOrEmpty(`w:gridSpan`).attributes[`w:val`],a=i?parseInt(i,10):1,o=r.TableCell(t,{colSpan:a});return o._vMerge=se(n),o})}function se(e){var t=e.first(`w:vMerge`);if(t){var n=t.attributes[`w:val`];return n===`continue`||!n}else return null}function ce(e){if(n.any(e,function(e){return e.type!==r.types.tableRow}))return le(e),v(e,[a(`unexpected non-row element in table, cell merging may be incorrect`)]);if(n.any(e,function(e){return n.any(e.children,function(e){return e.type!==r.types.tableCell})}))return le(e),v(e,[a(`unexpected non-cell element in table row, cell merging may be incorrect`)]);var t={};return e.forEach(function(e){var n=0;e.children.forEach(function(e){e._vMerge&&t[n]?t[n].rowSpan++:(t[n]=e,e._vMerge=!1),n+=e.colSpan})}),e.forEach(function(e){e.children=e.children.filter(function(e){return!e._vMerge}),e.children.forEach(function(e){delete e._vMerge})}),_(e)}function le(e){e.forEach(function(e){s.getDescendantsOfType(e,r.types.tableCell).forEach(function(e){delete e._vMerge})})}function ue(e){return b(e.getElementsByTagName(`a:graphic`).getElementsByTagName(`a:graphicData`).getElementsByTagName(`pic:pic`).getElementsByTagName(`pic:blipFill`).getElementsByTagName(`a:blip`).map(de.bind(null,e)))}function de(e,t){var n=e.firstOrEmpty(`wp:docPr`),i=n.attributes,o=K(i.descr)?i.title:i.descr,s=fe(t);return s===null?h([a(`Could not find image file for a:blip element`)]):he(s,o).map(function(e){var t=n.firstOrEmpty(`a:hlinkClick`).attributes[`r:id`];if(t){var i=d.findTargetByRelationshipId(t);return new r.Hyperlink([e],{href:i})}else return e})}function K(e){return e==null||/^\s*$/.test(e)}function fe(e){var t=e.attributes[`r:embed`],n=e.attributes[`r:link`];if(t)return me(t);if(n){var r=d.findTargetByRelationshipId(n);return{path:r,read:C.read.bind(C,r)}}else return null}function pe(e){var t=e.attributes[`r:id`];return t?he(me(t),e.attributes[`o:title`]):h([a(`A v:imagedata element without a relationship ID was ignored`)])}function me(e){var t=c.uriToZipEntryName(`word`,d.findTargetByRelationshipId(e));return{path:t,read:S.read.bind(S,t)}}function he(e,t){var n=x.findContentType(e.path);return v(r.Image({readImage:e.read,altText:t,contentType:n}),p[n]?[]:a(`Image of type `+n+` is unlikely to display in web browsers`))}function ge(e,t){return a(e+` style with ID `+t+` was referenced but not defined in the document`)}}function f(e,t,n){var r=t.firstOrEmpty(`w:ilvl`).attributes[`w:val`],i=t.firstOrEmpty(`w:numId`).attributes[`w:val`];if(r!==void 0&&i!==void 0)return n.findLevel(i,r);if(e!=null){var a=n.findLevelByParagraphStyleId(e);if(a!=null)return a}return i===void 0?null:n.findLevel(i,`0`)}var p={"image/png":!0,"image/gif":!0,"image/jpeg":!0,"image/svg+xml":!0,"image/tiff":!0},m={"office-word:wrap":!0,"v:shadow":!0,"v:shapetype":!0,"w:annotationRef":!0,"w:bookmarkEnd":!0,"w:sectPr":!0,"w:proofErr":!0,"w:lastRenderedPageBreak":!0,"w:commentRangeStart":!0,"w:commentRangeEnd":!0,"w:del":!0,"w:footnoteRef":!0,"w:endnoteRef":!0,"w:pPr":!0,"w:rPr":!0,"w:tblPr":!0,"w:tblGrid":!0,"w:trPr":!0,"w:tcPr":!0};function h(e){return new y(null,null,e)}function g(){return new y(null)}function _(e){return new y(e)}function v(e,t){return new y(e,null,t)}function y(e,t,n){this.value=e||[],this.extra=t||[],this._result=new i({element:this.value,extra:t},n),this.messages=this._result.messages}y.prototype.toExtra=function(){return new y(null,x(this.extra,this.value),this.messages)},y.prototype.insertExtra=function(){var e=this.extra;return e&&e.length?new y(x(this.value,e),null,this.messages):this},y.prototype.map=function(e){var t=this._result.map(function(t){return e(t.element)});return new y(t.value,this.extra,t.messages)},y.prototype.flatMap=function(e){var t=this._result.flatMap(function(t){return e(t.element)._result});return new y(t.value.element,x(this.extra,t.value.extra),t.messages)},y.map=function(e,t,n){return new y(n(e.value,t.value),x(e.extra,t.extra),e.messages.concat(t.messages))};function b(e){var t=i.combine(n.pluck(e,`_result`));return new y(n.flatten(n.pluck(t.value,`element`)),n.filter(n.flatten(n.pluck(t.value,`extra`)),S),t.messages)}function x(e,t){return n.flatten([e,t])}function S(e){return e}})),As=s((e=>{e.DocumentXmlReader=r;var t=zo(),n=Bo().Result;function r(e){var r=e.bodyReader;function i(i){var a=i.first(`w:body`);if(a==null)throw Error(`Could not find the body element: are you sure this is a docx file?`);var o=r.readXmlElements(a.children).map(function(n){return new t.Document(n,{notes:e.notes,comments:e.comments})});return new n(o.value,o.messages)}return{convertXmlToDocument:i}}})),js=s((e=>{e.readRelationships=t,e.defaultValue=new n([]),e.Relationships=n;function t(e){var t=[];return e.children.forEach(function(e){if(e.name===`relationships:Relationship`){var n={relationshipId:e.attributes.Id,target:e.attributes.Target,type:e.attributes.Type};t.push(n)}}),new n(t)}function n(e){var t={};e.forEach(function(e){t[e.relationshipId]=e.target});var n={};return e.forEach(function(e){n[e.type]||(n[e.type]=[]),n[e.type].push(e.target)}),{findTargetByRelationshipId:function(e){return t[e]},findTargetsByType:function(e){return n[e]||[]}}}})),Ms=s((e=>{e.readContentTypesFromXml=n;var t={png:`png`,gif:`gif`,jpeg:`jpeg`,jpg:`jpeg`,tif:`tiff`,tiff:`tiff`,bmp:`bmp`};e.defaultContentTypes=r({},{});function n(e){var t={},n={};return e.children.forEach(function(e){if(e.name===`content-types:Default`&&(t[e.attributes.Extension]=e.attributes.ContentType),e.name===`content-types:Override`){var r=e.attributes.PartName;r.charAt(0)===`/`&&(r=r.substring(1)),n[r]=e.attributes.ContentType}}),r(n,t)}function r(e,n){return{findContentType:function(r){var i=e[r];if(i)return i;var a=r.split(`.`),o=a[a.length-1];if(n.hasOwnProperty(o))return n[o];var s=t[o.toLowerCase()];return s?`image/`+s:null}}}})),Ns=s((e=>{var t=(Q(),d(Z));e.readNumberingXml=r,e.Numbering=n,e.defaultNumbering=new n({},{});function n(e,n,r){var i=t.flatten(t.values(n).map(function(e){return t.values(e.levels)})),a=t.indexBy(i.filter(function(e){return e.paragraphStyleId!=null}),`paragraphStyleId`);function o(t,i){var a=e[t];if(a){var s=n[a.abstractNumId];return s?s.numStyleLink==null?n[a.abstractNumId].levels[i]:o(r.findNumberingStyleById(s.numStyleLink).numId,i):null}else return null}function s(e){return a[e]||null}return{findLevel:o,findLevelByParagraphStyleId:s}}function r(e,t){if(!t||!t.styles)throw Error(`styles is missing`);var r=i(e);return new n(o(e,r),r,t.styles)}function i(e){var t={};return e.getElementsByTagName(`w:abstractNum`).forEach(function(e){var n=e.attributes[`w:abstractNumId`];t[n]=a(e)}),t}function a(e){var t={},n=null;return e.getElementsByTagName(`w:lvl`).forEach(function(e){var r=e.attributes[`w:ilvl`],i=e.firstOrEmpty(`w:numFmt`).attributes[`w:val`]!==`bullet`,a=e.firstOrEmpty(`w:pStyle`).attributes[`w:val`];r===void 0?n={isOrdered:i,level:`0`,paragraphStyleId:a}:t[r]={isOrdered:i,level:r,paragraphStyleId:a}}),n!==null&&t[n.level]===void 0&&(t[n.level]=n),{levels:t,numStyleLink:e.firstOrEmpty(`w:numStyleLink`).attributes[`w:val`]}}function o(e){var t={};return e.getElementsByTagName(`w:num`).forEach(function(e){var n=e.attributes[`w:numId`];t[n]={abstractNumId:e.first(`w:abstractNumId`).attributes[`w:val`]}}),t}})),Ps=s((e=>{e.readStylesXml=n,e.Styles=t,e.defaultStyles=new t({},{});function t(e,t,n,r){return{findParagraphStyleById:function(t){return e[t]},findCharacterStyleById:function(e){return t[e]},findTableStyleById:function(e){return n[e]},findNumberingStyleById:function(e){return r[e]}}}t.EMPTY=new t({},{},{},{});function n(e){var n={},i={},a={},o={},s={paragraph:n,character:i,table:a,numbering:o};return e.getElementsByTagName(`w:style`).forEach(function(e){var t=r(e),n=s[t.type];n&&n[t.styleId]===void 0&&(n[t.styleId]=t)}),new t(n,i,a,o)}function r(e){var t=e.attributes[`w:type`];return t===`numbering`?a(t,e):{type:t,styleId:o(e),name:i(e)}}function i(e){var t=e.first(`w:name`);return t?t.attributes[`w:val`]:null}function a(e,t){var n=o(t);return{type:e,numId:t.firstOrEmpty(`w:pPr`).firstOrEmpty(`w:numPr`).firstOrEmpty(`w:numId`).attributes[`w:val`],styleId:n}}function o(e){return e.attributes[`w:styleId`]}})),Fs=s((e=>{var t=zo(),n=Bo().Result;e.createFootnotesReader=r.bind(e,`footnote`),e.createEndnotesReader=r.bind(e,`endnote`);function r(e,r){function i(t){return n.combine(t.getElementsByTagName(`w:`+e).filter(a).map(o))}function a(e){var t=e.attributes[`w:type`];return t!==`continuationSeparator`&&t!==`separator`}function o(n){var i=n.attributes[`w:id`];return r.readXmlElements(n.children).map(function(n){return t.Note({noteType:e,noteId:i,body:n})})}return i}})),Is=s((e=>{var t=zo(),n=Bo().Result;function r(e){function r(e){return n.combine(e.getElementsByTagName(`w:comment`).map(i))}function i(n){var r=n.attributes[`w:id`];function i(e){return(n.attributes[e]||``).trim()||null}return e.readXmlElements(n.children).map(function(e){return t.comment({commentId:r,body:e,authorName:i(`w:author`),authorInitials:i(`w:initials`)})})}return r}e.createCommentsReader=r})),Ls=s((e=>{var t=Ro();e.Files=n;function n(){function e(e){return t.reject(Error(`could not open external image: '`+e+`'
cannot open linked files from a web browser`))}return{read:e}}})),Rs=s((e=>{e.read=h,e._findPartPaths=g;var t=Ro(),n=zo(),r=Bo().Result,i=Uo(),a=ws().readXmlFromZipFile,o=ks().createBodyReader,s=As().DocumentXmlReader,c=js(),l=Ms(),u=Ns(),d=Ps(),f=Fs(),p=Is(),m=Ls().Files;function h(e,i,a){i||={},a||={};var o=new m({externalFileAccess:a.externalFileAccess,relativeToFile:i.path});return t.props({contentTypes:S(e),partPaths:g(e),docxFile:e,files:o}).also(function(t){return{styles:w(e,t.partPaths.styles)}}).also(function(t){return{numbering:C(e,t.partPaths.numbering,t.styles)}}).also(function(e){return{footnotes:b(e.partPaths.footnotes,e,function(e,t){return t?f.createFootnotesReader(e)(t):new r([])}),endnotes:b(e.partPaths.endnotes,e,function(e,t){return t?f.createEndnotesReader(e)(t):new r([])}),comments:b(e.partPaths.comments,e,function(e,t){return t?p.createCommentsReader(e)(t):new r([])})}}).also(function(e){return{notes:e.footnotes.flatMap(function(t){return e.endnotes.map(function(e){return new n.Notes(t.concat(e))})})}}).then(function(e){return b(e.partPaths.mainDocument,e,function(t,n){return e.notes.flatMap(function(r){return e.comments.flatMap(function(e){return new s({bodyReader:t,notes:r,comments:e}).convertXmlToDocument(n)})})})})}function g(e){return T(e).then(function(t){var n=_({docxFile:e,relationships:t,relationshipType:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument`,basePath:``,fallbackPath:`word/document.xml`});if(!e.exists(n))throw Error(`Could not find main document part. Are you sure this is a valid .docx file?`);return y({filename:x(n),readElement:c.readRelationships,defaultValue:c.defaultValue})(e).then(function(t){function r(r){return _({docxFile:e,relationships:t,relationshipType:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/`+r,basePath:i.splitPath(n).dirname,fallbackPath:`word/`+r+`.xml`})}return{mainDocument:n,comments:r(`comments`),endnotes:r(`endnotes`),footnotes:r(`footnotes`),numbering:r(`numbering`),styles:r(`styles`)}})})}function _(e){var t=e.docxFile,n=e.relationships,r=e.relationshipType,a=e.basePath,o=e.fallbackPath,s=n.findTargetsByType(r).map(function(e){return v(i.joinPath(a,e),`/`)}).filter(function(e){return t.exists(e)});return s.length===0?o:s[0]}function v(e,t){return e.substring(0,t.length)===t?e.substring(t.length):e}function y(e){return function(t){return a(t,e.filename).then(function(t){return t?e.readElement(t):e.defaultValue})}}function b(e,t,n){return y({filename:x(e),readElement:c.readRelationships,defaultValue:c.defaultValue})(t.docxFile).then(function(r){var i=new o({relationships:r,contentTypes:t.contentTypes,docxFile:t.docxFile,numbering:t.numbering,styles:t.styles,files:t.files});return a(t.docxFile,e).then(function(e){return n(i,e)})})}function x(e){var t=i.splitPath(e);return i.joinPath(t.dirname,`_rels`,t.basename+`.rels`)}var S=y({filename:`[Content_Types].xml`,readElement:l.readContentTypesFromXml,defaultValue:l.defaultContentTypes});function C(e,t,n){return y({filename:t,readElement:function(e){return u.readNumberingXml(e,{styles:n})},defaultValue:u.defaultNumbering})(e)}function w(e,t){return y({filename:t,readElement:d.readStylesXml,defaultValue:d.defaultStyles})(e)}var T=y({filename:`_rels/.rels`,readElement:c.readRelationships,defaultValue:c.defaultValue})})),zs=s((e=>{var t=(Q(),d(Z)),n=Ro(),r=Cs();e.writeStyleMap=s,e.readStyleMap=f;var i=`http://schemas.zwobble.org/mammoth/style-map`,a=`mammoth/style-map`,o=`/`+a;function s(e,t){return e.write(a,t),c(e).then(function(){return l(e)})}function c(e){var t=`word/_rels/document.xml.rels`,n=`http://schemas.openxmlformats.org/package/2006/relationships`,a=`{`+n+`}Relationship`;return e.read(t,`utf8`).then(r.readString).then(function(s){var c=s.children;u(c,a,`Id`,{Id:`rMammothStyleMap`,Type:i,Target:o});var l={"":n};return e.write(t,r.writeString(s,l))})}function l(e){var t=`[Content_Types].xml`,n=`http://schemas.openxmlformats.org/package/2006/content-types`,i=`{`+n+`}Override`;return e.read(t,`utf8`).then(r.readString).then(function(a){var s=a.children;u(s,i,`PartName`,{PartName:o,ContentType:`text/prs.mammoth.style-map`});var c={"":n};return e.write(t,r.writeString(a,c))})}function u(e,n,i,a){var o=t.find(e,function(e){return e.name===n&&e.attributes[i]===a[i]});o?o.attributes=a:e.push(r.element(n,a))}function f(e){return e.exists(a)?e.read(a,`utf8`):n.resolve(null)}})),Bs=s((e=>{var t=Us();function n(e,n,r){return i(t.element(e,n,{fresh:!1}),r)}function r(e,n,r){return i(t.element(e,n,{fresh:!0}),r)}function i(e,t){return{type:`element`,tag:e,children:t||[]}}function a(e){return{type:`text`,value:e}}e.freshElement=r,e.nonFreshElement=n,e.elementWithTag=i,e.text=a,e.forceWrite={type:`forceWrite`};var o={br:!0,hr:!0,img:!0,input:!0};function s(e){return e.children.length===0&&o[e.tag.tagName]}e.isVoidElement=s})),Vs=s(((e,t)=>{var n=(Q(),d(Z)),r=Bs();function i(e){return a(f(e))}function a(e){var t=[];return e.map(o).forEach(function(e){u(t,e)}),t}function o(e){return s[e.type](e)}var s={element:c,text:l,forceWrite:l};function c(e){return r.elementWithTag(e.tag,a(e.children))}function l(e){return e}function u(e,t){var n=e[e.length-1];t.type===`element`&&!t.tag.fresh&&n&&n.type===`element`&&t.tag.matchesElement(n.tag)?(t.tag.separator&&u(n.children,r.text(t.tag.separator)),t.children.forEach(function(e){u(n.children,e)})):e.push(t)}function f(e){return p(e,function(e){return m[e.type](e)})}function p(e,t){return n.flatten(n.map(e,t),!0)}var m={element:g,text:_,forceWrite:h};function h(e){return[e]}function g(e){var t=f(e.children);return t.length===0&&!r.isVoidElement(e)?[]:[r.elementWithTag(e.tag,t)]}function _(e){return e.value.length===0?[]:[e]}t.exports=i})),Hs=s((e=>{var t=Bs();e.freshElement=t.freshElement,e.nonFreshElement=t.nonFreshElement,e.elementWithTag=t.elementWithTag,e.text=t.text,e.forceWrite=t.forceWrite,e.simplify=Vs();function n(e,t){t.forEach(function(t){r(e,t)})}function r(e,t){i[t.type](e,t)}var i={element:a,text:o,forceWrite:function(){}};function a(e,r){t.isVoidElement(r)?e.selfClosing(r.tag.tagName,r.tag.attributes):(e.open(r.tag.tagName,r.tag.attributes),n(e,r.children),e.close(r.tag.tagName))}function o(e,t){e.text(t.value)}e.write=n})),Us=s((e=>{var t=(Q(),d(Z)),n=Hs();e.topLevelElement=r,e.elements=i,e.element=o;function r(e,t){return i([o(e,t,{fresh:!0})])}function i(e){return new a(e.map(function(e){return t.isString(e)?o(e):e}))}function a(e){this._elements=e}a.prototype.wrap=function(e){for(var t=e(),n=this._elements.length-1;n>=0;n--)t=this._elements[n].wrapNodes(t);return t};function o(e,t,n){return n||={},new s(e,t,n)}function s(e,n,r){var i={};t.isArray(e)?(e.forEach(function(e){i[e]=!0}),e=e[0]):i[e]=!0,this.tagName=e,this.tagNames=i,this.attributes=n||{},this.fresh=r.fresh,this.separator=r.separator}s.prototype.matchesElement=function(e){return this.tagNames[e.tagName]&&t.isEqual(this.attributes||{},e.attributes||{})},s.prototype.wrap=function(e){return this.wrapNodes(e())},s.prototype.wrapNodes=function(e){return[n.elementWithTag(this,e)]},e.empty=i([]),e.ignore={wrap:function(){return[]}}})),Ws=s((e=>{var t=(Q(),d(Z)),n=Ro(),r=Hs();e.imgElement=i;function i(e){return function(i,a){return n.when(e(i)).then(function(e){var n={};return i.altText&&(n.alt=i.altText),t.extend(n,e),[r.freshElement(`img`,n)]})}}e.inline=e.imgElement,e.dataUri=i(function(e){return e.readAsBase64String().then(function(t){return{src:`data:`+e.contentType+`;base64,`+t}})})})),Gs=s((e=>{var t=(Q(),d(Z));e.writer=n;function n(e){return e||={},e.prettyPrint?i():a()}var r={div:!0,p:!0,ul:!0,li:!0};function i(){var e=0,n=[],i=!0,o=!1,s=a();function c(t,a){r[t]&&m(),n.push(t),s.open(t,a),r[t]&&e++,i=!1}function l(t){r[t]&&(e--,m()),n.pop(),s.close(t)}function u(e){p();var t=h()?e:e.replace(`
`,`
  `);s.text(t)}function d(e,t){m(),s.selfClosing(e,t)}function f(){return n.length===0||r[n[n.length-1]]}function p(){o||=(m(),!0)}function m(){if(o=!1,!i&&f()&&!h()){s._append(`
`);for(var t=0;t<e;t++)s._append(`  `)}}function h(){return t.some(n,function(e){return e===`pre`})}return{asString:s.asString,open:c,close:l,text:u,selfClosing:d}}function a(){var e=[];function n(t,n){var r=a(n);e.push(`<`+t+r+`>`)}function r(t){e.push(`</`+t+`>`)}function i(t,n){var r=a(n);e.push(`<`+t+r+` />`)}function a(e){return t.map(e,function(e,t){return` `+t+`="`+s(e)+`"`}).join(``)}function c(t){e.push(o(t))}function l(t){e.push(t)}function u(){return e.join(``)}return{asString:u,open:n,close:r,text:c,selfClosing:i,_append:l}}function o(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function s(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}})),Ks=s((e=>{var t=(Q(),d(Z));function n(e){return r(e,e)}function r(e,t){return function(){return{start:e,end:t}}}function i(e){var t=e.href||``;return t?{start:`[`,end:`](`+t+`)`,anchorPosition:`before`}:{}}function a(e){var t=e.src||``,n=e.alt||``;return t||n?{start:`![`+n+`](`+t+`)`}:{}}function o(e){return function(t,n){return{start:n?`
`:``,end:n?``:`
`,list:{isOrdered:e.isOrdered,indent:n?n.indent+1:0,count:0}}}}function s(e,t,n){t||={indent:0,isOrdered:!1,count:0},t.count++,n.hasClosed=!1;var r=t.isOrdered?t.count+`.`:`-`;return{start:l(`	`,t.indent)+r+` `,end:function(){if(!n.hasClosed)return n.hasClosed=!0,`
`}}}var c={p:r(``,`

`),br:r(``,`  
`),ul:o({isOrdered:!1}),ol:o({isOrdered:!0}),li:s,strong:n(`__`),em:n(`*`),a:i,img:a};(function(){for(var e=1;e<=6;e++)c[`h`+e]=r(l(`#`,e)+` `,`

`)})();function l(e,t){return Array(t+1).join(e)}function u(){var e=[],n=[],r=null,i={};function a(t,a){a||={};var s=(c[t]||function(){return{}})(a,r,i);n.push({end:s.end,list:r}),s.list&&(r=s.list);var l=s.anchorPosition===`before`;l&&o(a),e.push(s.start||``),l||o(a)}function o(t){t.id&&e.push(`<a id="`+t.id+`"></a>`)}function s(i){var a=n.pop();r=a.list;var o=t.isFunction(a.end)?a.end():a.end;e.push(o||``)}function l(e,t){a(e,t),s(e)}function u(t){e.push(f(t))}function d(){return e.join(``)}return{asString:d,open:a,close:s,text:u,selfClosing:l}}e.writer=u;function f(e){return e.replace(/\\/g,`\\\\`).replace(/([\`\*_\{\}\[\]\(\)\#\+\-\.\!])/g,`\\$1`)}})),qs=s((e=>{var t=Gs(),n=Ks();e.writer=r;function r(e){return e||={},e.outputFormat===`markdown`?n.writer():t.writer(e)}})),Js=s((e=>{var t=(Q(),d(Z)),n=Ro(),r=zo(),i=Us(),a=Bo(),o=Ws(),s=Hs(),c=qs();e.DocumentConverter=l;function l(e){return{convertToHtml:function(n){return new u(e,t.indexBy(n.type===r.types.document?n.comments:[],`commentId`)).convertToHtml(n)}}}function u(e,l){var u=1,d=[],f=[];e=t.extend({ignoreEmptyParagraphs:!0},e);var v=e.idPrefix===void 0?``:e.idPrefix,y=e.ignoreEmptyParagraphs,b=i.topLevelElement(`p`),x=e.styleMap||[];function S(r){var i=[],o=w(r,i,{}),l=[];g(o,function(e){e.type===`deferred`&&l.push(e)});var u={};return n.mapSeries(l,function(e){return e.value().then(function(t){u[e.id]=t})}).then(function(){function n(e){return h(e,function(e){return e.type===`deferred`?u[e.id]:e.children?[t.extend({},e,{children:n(e.children)})]:[e]})}var r=c.writer({prettyPrint:e.prettyPrint,outputFormat:e.outputFormat});return s.write(r,s.simplify(n(o))),new a.Result(r.asString(),i)})}function C(e,t,n){return h(e,function(e){return w(e,t,n)})}function w(e,t,n){if(!n)throw Error(`options not set`);var r=U[e.type];return r?r(e,t,n):[]}function T(e,t,n){return E(e,t).wrap(function(){var r=C(e.children,t,n);return y?r:[s.forceWrite].concat(r)})}function E(e,t){var n=A(e);return n?n.to:(e.styleId&&t.push(m(`paragraph`,e)),b)}function D(e,t,n){var a=function(){return C(e.children,t,n)},o=[];if(e.highlight!==null){var s=k({type:`highlight`,color:e.highlight});s&&o.push(s)}e.isSmallCaps&&o.push(O(`smallCaps`)),e.isAllCaps&&o.push(O(`allCaps`)),e.isStrikethrough&&o.push(O(`strikethrough`,`s`)),e.isUnderline&&o.push(O(`underline`)),e.verticalAlignment===r.verticalAlignment.subscript&&o.push(i.element(`sub`,{},{fresh:!1})),e.verticalAlignment===r.verticalAlignment.superscript&&o.push(i.element(`sup`,{},{fresh:!1})),e.isItalic&&o.push(O(`italic`,`em`)),e.isBold&&o.push(O(`bold`,`strong`));var c=i.empty,l=A(e);return l?c=l.to:e.styleId&&t.push(m(`run`,e)),o.push(c),o.forEach(function(e){a=e.wrap.bind(e,a)}),a()}function O(e,t){return k({type:e})||(t?i.element(t,{},{fresh:!1}):i.empty)}function k(e,t){var n=A(e);return n?n.to:t}function A(e){for(var t=0;t<x.length;t++)if(x[t].from.matches(e))return x[t]}function j(e){return function(t,r){return n.attempt(function(){return e(t,r)}).caught(function(e){return r.push(a.error(e)),[]})}}function M(e){return P(e.noteType,e.noteId)}function N(e){return F(e.noteType,e.noteId)}function P(e,t){return I(e+`-`+t)}function F(e,t){return I(e+`-ref-`+t)}function I(e){return v+e}var L=i.elements([i.element(`table`,{},{fresh:!0})]);function R(e,t,n){return k(e,L).wrap(function(){return z(e,t,n)})}function z(e,n,i){var a=t.findIndex(e.children,function(e){return!e.type===r.types.tableRow||!e.isHeader});a===-1&&(a=e.children.length);var o;if(a===0)o=C(e.children,n,t.extend({},i,{isTableHeader:!1}));else{var c=C(e.children.slice(0,a),n,t.extend({},i,{isTableHeader:!0})),l=C(e.children.slice(a),n,t.extend({},i,{isTableHeader:!1}));o=[s.freshElement(`thead`,{},c),s.freshElement(`tbody`,{},l)]}return[s.forceWrite].concat(o)}function B(e,t,n){var r=C(e.children,t,n);return[s.freshElement(`tr`,{},[s.forceWrite].concat(r))]}function ee(e,t,n){var r=n.isTableHeader?`th`:`td`,i=C(e.children,t,n),a={};return e.colSpan!==1&&(a.colspan=e.colSpan.toString()),e.rowSpan!==1&&(a.rowspan=e.rowSpan.toString()),[s.freshElement(r,a,[s.forceWrite].concat(i))]}function V(e,t,n){return k(e,i.ignore).wrap(function(){var t=l[e.commentId],n=f.length+1,r=`[`+_(t)+n+`]`;return f.push({label:r,comment:t}),[s.freshElement(`a`,{href:`#`+P(`comment`,e.commentId),id:F(`comment`,e.commentId)},[s.text(r)])]})}function H(e,t,n){var r=e.label,i=e.comment,a=C(i.body,t,n).concat([s.nonFreshElement(`p`,{},[s.text(` `),s.freshElement(`a`,{href:`#`+F(`comment`,i.commentId)},[s.text(`↑`)])])]);return[s.freshElement(`dt`,{id:P(`comment`,i.commentId)},[s.text(`Comment `+r)]),s.freshElement(`dd`,{},a)]}function te(e,t,n){return ne(e).wrap(function(){return[]})}function ne(e){var t=A(e);return t?t.to:e.breakType===`line`?i.topLevelElement(`br`):i.empty}var U={document:function(e,t,n){var r=C(e.children,t,n),i=C(d.map(function(t){return e.notes.resolve(t)}),t,n);return r.concat([s.freshElement(`ol`,{},i),s.freshElement(`dl`,{},h(f,function(e){return H(e,t,n)}))])},paragraph:T,run:D,text:function(e,t,n){return[s.text(e.value)]},tab:function(e,t,n){return[s.text(`	`)]},hyperlink:function(e,t,n){var r={href:e.anchor?`#`+I(e.anchor):e.href};e.targetFrame!=null&&(r.target=e.targetFrame);var i=C(e.children,t,n);return[s.nonFreshElement(`a`,r,i)]},checkbox:function(e){var t={type:`checkbox`};return e.checked&&(t.checked=`checked`),[s.freshElement(`input`,t)]},bookmarkStart:function(e,t,n){return[s.freshElement(`a`,{id:I(e.name)},[s.forceWrite])]},noteReference:function(e,t,n){d.push(e);var r=s.freshElement(`a`,{href:`#`+M(e),id:N(e)},[s.text(`[`+u+++`]`)]);return[s.freshElement(`sup`,{},[r])]},note:function(e,t,n){var r=C(e.body,t,n),a=s.elementWithTag(i.element(`p`,{},{fresh:!1}),[s.text(` `),s.freshElement(`a`,{href:`#`+N(e)},[s.text(`↑`)])]),o=r.concat([a]);return s.freshElement(`li`,{id:M(e)},o)},commentReference:V,comment:H,image:p(j(e.convertImage||o.dataUri)),table:R,tableRow:B,tableCell:ee,break:te};return{convertToHtml:S}}var f=1;function p(e){return function(t,n,r){return[{type:`deferred`,id:f++,value:function(){return e(t,n,r)}}]}}function m(e,t){return a.warning(`Unrecognised `+e+` style: '`+t.styleName+`' (Style ID: `+t.styleId+`)`)}function h(e,n){return t.flatten(e.map(n),!0)}function g(e,t){e.forEach(function(e){t(e),e.children&&g(e.children,t)})}var _=e.commentAuthorLabel=function(e){return e.authorInitials||``}})),Ys=s((e=>{var t=zo();function n(e){if(e.type===`text`)return e.value;if(e.type===t.types.tab)return`	`;var r=e.type===`paragraph`?`

`:``;return(e.children||[]).map(n).join(``)+r}e.convertElementToRawText=n})),Xs=s(((e,t)=>{var n=t.exports=function(e,t){this._tokens=e,this._startIndex=t||0};n.prototype.head=function(){return this._tokens[this._startIndex]},n.prototype.tail=function(e){return new n(this._tokens,this._startIndex+1)},n.prototype.toArray=function(){return this._tokens.slice(this._startIndex)},n.prototype.end=function(){return this._tokens[this._tokens.length-1]},n.prototype.to=function(e){var t=this.head().source,n=e.head()||e.end();return t.to(n.source)}})),Zs=s((e=>{var t=Xs();e.Parser=function(e){return{parseTokens:function(e,n){return e(new t(n))}}}})),Qs=s((e=>{e.none=Object.create({value:function(){throw Error(`Called value on none`)},isNone:function(){return!0},isSome:function(){return!1},map:function(){return e.none},flatMap:function(){return e.none},filter:function(){return e.none},toArray:function(){return[]},orElse:t,valueOrElse:t});function t(e){return typeof e==`function`?e():e}e.some=function(e){return new n(e)};var n=function(e){this._value=e};n.prototype.value=function(){return this._value},n.prototype.isNone=function(){return!1},n.prototype.isSome=function(){return!0},n.prototype.map=function(e){return new n(e(this._value))},n.prototype.flatMap=function(e){return e(this._value)},n.prototype.filter=function(t){return t(this._value)?this:e.none},n.prototype.toArray=function(){return[this._value]},n.prototype.orElse=function(e){return this},n.prototype.valueOrElse=function(e){return this._value},e.isOption=function(t){return t===e.none||t instanceof n},e.fromNullable=function(t){return t==null?e.none:new n(t)}})),$s=s(((e,t)=>{t.exports={failure:function(e,t){if(e.length<1)throw Error(`Failure must have errors`);return new n({status:`failure`,remaining:t,errors:e})},error:function(e,t){if(e.length<1)throw Error(`Failure must have errors`);return new n({status:`error`,remaining:t,errors:e})},success:function(e,t,r){return new n({status:`success`,value:e,source:r,remaining:t,errors:[]})},cut:function(e){return new n({status:`cut`,remaining:e,errors:[]})}};var n=function(e){this._value=e.value,this._status=e.status,this._hasValue=e.value!==void 0,this._remaining=e.remaining,this._source=e.source,this._errors=e.errors};n.prototype.map=function(e){return this._hasValue?new n({value:e(this._value,this._source),status:this._status,remaining:this._remaining,source:this._source,errors:this._errors}):this},n.prototype.changeRemaining=function(e){return new n({value:this._value,status:this._status,remaining:e,source:this._source,errors:this._errors})},n.prototype.isSuccess=function(){return this._status===`success`||this._status===`cut`},n.prototype.isFailure=function(){return this._status===`failure`},n.prototype.isError=function(){return this._status===`error`},n.prototype.isCut=function(){return this._status===`cut`},n.prototype.value=function(){return this._value},n.prototype.remaining=function(){return this._remaining},n.prototype.source=function(){return this._source},n.prototype.errors=function(){return this._errors}})),ec=s((e=>{e.error=function(e){return new t(e)};var t=function(e){this.expected=e.expected,this.actual=e.actual,this._location=e.location};t.prototype.describe=function(){return(this._location?this._location.describe()+`:
`:``)+`Expected `+this.expected+`
but got `+this.actual},t.prototype.lineNumber=function(){return this._location.lineNumber()},t.prototype.characterNumber=function(){return this._location.characterNumber()}})),tc=s((e=>{e.fromArray=function(e){var n=0,r=function(){return n<e.length};return new t({hasNext:r,next:function(){if(r())return e[n++];throw Error(`No more elements`)}})};var t=function(e){this._iterator=e};t.prototype.map=function(e){var n=this._iterator;return new t({hasNext:function(){return n.hasNext()},next:function(){return e(n.next())}})},t.prototype.filter=function(e){var n=this._iterator,r=!1,i=!1,a,o=function(){if(!r)for(r=!0,i=!1;n.hasNext()&&!i;)a=n.next(),i=e(a)};return new t({hasNext:function(){return o(),i},next:function(){o();var e=a;return r=!1,e}})},t.prototype.first=function(){var e=this._iterator;return this._iterator.hasNext()?e.next():null},t.prototype.toArray=function(){for(var e=[];this._iterator.hasNext();)e.push(this._iterator.next());return e}})),nc=s((e=>{var t=(Q(),d(Z)),n=Qs(),r=$s(),i=ec(),a=tc();e.token=function(e,t){var n=t!==void 0;return function(i){var a=i.head();return a&&a.name===e&&(!n||a.value===t)?r.success(a.value,i.tail(),a.source):f(i,u({name:e,value:t}))}},e.tokenOfType=function(t){return e.token(t)},e.firstOf=function(e,n){return t.isArray(n)||(n=Array.prototype.slice.call(arguments,1)),function(t){return a.fromArray(n).map(function(e){return e(t)}).filter(function(e){return e.isSuccess()||e.isError()}).first()||f(t,e)}},e.then=function(e,t){return function(n){var r=e(n);return r.map||console.log(r),r.map(t)}},e.sequence=function(){var n=Array.prototype.slice.call(arguments,0),i=function(i){var a=t.foldl(n,function(e,t){var n=e.result,a=e.hasCut;if(!n.isSuccess())return{result:n,hasCut:a};var o=t(n.remaining());if(o.isCut())return{result:n,hasCut:!0};if(o.isSuccess()){var s=t.isCaptured?n.value().withValue(t,o.value()):n.value(),c=o.remaining(),l=i.to(c);return{result:r.success(s,c,l),hasCut:a}}else if(a)return{result:r.error(o.errors(),o.remaining()),hasCut:a};else return{result:o,hasCut:a}},{result:r.success(new o,i),hasCut:!1}).result,s=i.to(a.remaining());return a.map(function(t){return t.withValue(e.sequence.source,s)})};i.head=function(){var r=t.find(n,a);return e.then(i,e.sequence.extract(r))},i.map=function(t){return e.then(i,function(e){return t.apply(this,e.toArray())})};function a(e){return e.isCaptured}return i};var o=function(e,t){this._values=e||{},this._valuesArray=t||[]};o.prototype.withValue=function(e,n){if(e.captureName&&e.captureName in this._values)throw Error(`Cannot add second value for capture "`+e.captureName+`"`);var r=t.clone(this._values);return r[e.captureName]=n,new o(r,this._valuesArray.concat([n]))},o.prototype.get=function(e){if(e.captureName in this._values)return this._values[e.captureName];throw Error(`No value for capture "`+e.captureName+`"`)},o.prototype.toArray=function(){return this._valuesArray},e.sequence.capture=function(e,t){var n=function(){return e.apply(this,arguments)};return n.captureName=t,n.isCaptured=!0,n},e.sequence.extract=function(e){return function(t){return t.get(e)}},e.sequence.applyValues=function(e){var t=Array.prototype.slice.call(arguments,1);return function(n){var r=t.map(function(e){return n.get(e)});return e.apply(this,r)}},e.sequence.source={captureName:`☃source☃`},e.sequence.cut=function(){return function(e){return r.cut(e)}},e.optional=function(e){return function(t){var i=e(t);return i.isSuccess()?i.map(n.some):i.isFailure()?r.success(n.none,t):i}},e.zeroOrMoreWithSeparator=function(e,t){return l(e,t,!1)},e.oneOrMoreWithSeparator=function(e,t){return l(e,t,!0)};var s=e.zeroOrMore=function(e){return function(t){for(var n=[],i;(i=e(t))&&i.isSuccess();)t=i.remaining(),n.push(i.value());return i.isError()?i:r.success(n,t)}};e.oneOrMore=function(t){return e.oneOrMoreWithSeparator(t,c)};function c(e){return r.success(null,e)}var l=function(t,n,i){return function(a){var o=t(a);if(o.isSuccess()){var c=e.sequence.capture(t,`main`),l=s(e.then(e.sequence(n,c),e.sequence.extract(c)))(o.remaining());return r.success([o.value()].concat(l.value()),l.remaining())}else if(i||o.isError())return o;else return r.success([],a)}};e.leftAssociative=function(t,n,i){var a=i?[{func:i,rule:n}]:n;a=a.map(function(t){return e.then(t.rule,function(e){return function(n,r){return t.func(n,e,r)}})});var o=e.firstOf.apply(null,[`rules`].concat(a));return function(e){var n=e,i=t(e);if(!i.isSuccess())return i;for(var a=o(i.remaining());a.isSuccess();){var s=a.remaining(),c=n.to(a.remaining()),l=a.value();i=r.success(l(i.value(),c),s,c),a=o(i.remaining())}return a.isError()?a:i}},e.leftAssociative.firstOf=function(){return Array.prototype.slice.call(arguments,0)},e.nonConsuming=function(e){return function(t){return e(t).changeRemaining(t)}};var u=function(e){return e.value?e.name+` "`+e.value+`"`:e.name};function f(e,t){var n,a=e.head();return n=a?i.error({expected:t,actual:u(a),location:a.source}):i.error({expected:t,actual:`end of tokens`}),r.failure([n],e)}})),rc=s(((e,t)=>{t.exports=function(e,t){return{asString:function(){return e},range:function(r,i){return new n(e,t,r,i)}}};var n=function(e,t,n,r){this._string=e,this._description=t,this._startIndex=n,this._endIndex=r};n.prototype.to=function(e){return new n(this._string,this._description,this._startIndex,e._endIndex)},n.prototype.describe=function(){var e=this._position();return(this._description?this._description+`
`:``)+`Line number: `+e.lineNumber+`
Character number: `+e.characterNumber},n.prototype.lineNumber=function(){return this._position().lineNumber},n.prototype.characterNumber=function(){return this._position().characterNumber},n.prototype._position=function(){for(var e=this,t=0,n=function(){return e._string.indexOf(`
`,t)},r=1;n()!==-1&&n()<this._startIndex;)t=n()+1,r+=1;var i=this._startIndex-t+1;return{lineNumber:r,characterNumber:i}}})),ic=s(((e,t)=>{t.exports=function(e,t,n){this.name=e,this.value=t,n&&(this.source=n)}})),ac=s((e=>{var t=nc(),n=$s();e.parser=function(e,n,a){var o={rule:u,leftAssociative:d,rightAssociative:f},s=new r(a.map(l)),c=t.firstOf(e,n);function l(e){return{name:e.name,rule:i(e.ruleBuilder.bind(null,o))}}function u(){return p(s)}function d(e){return p(s.untilExclusive(e))}function f(e){return p(s.untilInclusive(e))}function p(e){return m.bind(null,e)}function m(e,t){var n=c(t);return n.isSuccess()?e.apply(n):n}return o};function r(e){function i(t){return new r(e.slice(0,o().indexOf(t)))}function a(t){return new r(e.slice(0,o().indexOf(t)+1))}function o(){return e.map(function(e){return e.name})}function s(e){for(var t,r;;)if(t=c(e.remaining()),t.isSuccess())r=e.source().to(t.source()),e=n.success(t.value()(e.value(),r),t.remaining(),r);else if(t.isFailure())return e;else return t}function c(n){return t.firstOf(`infix`,e.map(function(e){return e.rule}))(n)}return{apply:s,untilExclusive:i,untilInclusive:a}}e.infix=function(t,n){function r(r){return e.infix(t,function(e){var t=n(e);return function(e){return t(e).map(function(e){return function(t,n){return r(t,e,n)}})}})}return{name:t,ruleBuilder:n,map:r}};var i=function(e){var t;return function(n){return t||=e(),t(n)}}})),oc=s((e=>{var t=ic(),n=rc();e.RegexTokeniser=r;function r(e){e=e.map(function(e){return{name:e.name,regex:new RegExp(e.regex.source,`g`)}});function r(e,t){for(var r=new n(e,t),o=0,s=[];o<e.length;){var c=i(e,o,r);o=c.endIndex,s.push(c.token)}return s.push(a(e,r)),s}function i(n,r,i){for(var a=0;a<e.length;a++){var o=e[a].regex;o.lastIndex=r;var s=o.exec(n);if(s){var c=r+s[0].length;if(s.index===r&&c>r){var l=s[1],u=new t(e[a].name,l,i.range(r,c));return{token:u,endIndex:c}}}}var c=r+1,u=new t(`unrecognisedCharacter`,n.substring(r,c),i.range(r,c));return{token:u,endIndex:c}}function a(e,n){return new t(`end`,null,n.range(e.length,e.length))}return{tokenise:r}}})),sc=s((e=>{e.Parser=Zs().Parser,e.rules=nc(),e.errors=ec(),e.results=$s(),e.StringSource=rc(),e.Token=ic(),e.bottomUp=ac(),e.RegexTokeniser=oc().RegexTokeniser,e.rule=function(e){var t;return function(n){return t||=e(),t(n)}}})),cc=s((e=>{e.paragraph=t,e.run=n,e.table=r,e.bold=new a(`bold`),e.italic=new a(`italic`),e.underline=new a(`underline`),e.strikethrough=new a(`strikethrough`),e.allCaps=new a(`allCaps`),e.smallCaps=new a(`smallCaps`),e.highlight=i,e.commentReference=new a(`commentReference`),e.lineBreak=new s({breakType:`line`}),e.pageBreak=new s({breakType:`page`}),e.columnBreak=new s({breakType:`column`}),e.equalTo=l,e.startsWith=u;function t(e){return new a(`paragraph`,e)}function n(e){return new a(`run`,e)}function r(e){return new a(`table`,e)}function i(e){return new o(e)}function a(e,t){t||={},this._elementType=e,this._styleId=t.styleId,this._styleName=t.styleName,t.list&&(this._listIndex=t.list.levelIndex,this._listIsOrdered=t.list.isOrdered)}a.prototype.matches=function(e){return e.type===this._elementType&&(this._styleId===void 0||e.styleId===this._styleId)&&(this._styleName===void 0||e.styleName&&this._styleName.operator(this._styleName.operand,e.styleName))&&(this._listIndex===void 0||c(e,this._listIndex,this._listIsOrdered))&&(this._breakType===void 0||this._breakType===e.breakType)};function o(e){e||={},this._color=e.color}o.prototype.matches=function(e){return e.type===`highlight`&&(this._color===void 0||e.color===this._color)};function s(e){e||={},this._breakType=e.breakType}s.prototype.matches=function(e){return e.type===`break`&&(this._breakType===void 0||e.breakType===this._breakType)};function c(e,t,n){return e.numbering&&e.numbering.level==t&&e.numbering.isOrdered==n}function l(e){return{operator:d,operand:e}}function u(e){return{operator:f,operand:e}}function d(e,t){return e.toUpperCase()===t.toUpperCase()}function f(e,t){return t.toUpperCase().indexOf(e.toUpperCase())===0}})),lc=s((e=>{var t=sc().RegexTokeniser;e.tokenise=r;var n=`'((?:\\\\.|[^'])*)`;function r(e){var r=`(?:[a-zA-Z\\-_]|\\\\.)`;return new t([{name:`identifier`,regex:RegExp(`(`+r+`(?:`+r+`|[0-9])*)`)},{name:`dot`,regex:/\./},{name:`colon`,regex:/:/},{name:`gt`,regex:/>/},{name:`whitespace`,regex:/\s+/},{name:`arrow`,regex:/=>/},{name:`equals`,regex:/=/},{name:`startsWith`,regex:/\^=/},{name:`open-paren`,regex:/\(/},{name:`close-paren`,regex:/\)/},{name:`open-square-bracket`,regex:/\[/},{name:`close-square-bracket`,regex:/\]/},{name:`string`,regex:RegExp(n+`'`)},{name:`unterminated-string`,regex:new RegExp(n)},{name:`integer`,regex:/([0-9]+)/},{name:`choice`,regex:/\|/},{name:`bang`,regex:/(!)/}]).tokenise(e)}})),uc=s((e=>{var t=(Q(),d(Z)),n=sc(),r=cc(),i=Us(),a=lc().tokenise,o=Bo();e.readHtmlPath=f,e.readDocumentMatcher=l,e.readStyle=s;function s(e){return S(T,e)}function c(){return n.rules.sequence(n.rules.sequence.capture(u()),n.rules.tokenOfType(`whitespace`),n.rules.tokenOfType(`arrow`),n.rules.sequence.capture(n.rules.optional(n.rules.sequence(n.rules.tokenOfType(`whitespace`),n.rules.sequence.capture(p())).head())),n.rules.tokenOfType(`end`)).map(function(e,t){return{from:e,to:t.valueOrElse(i.empty)}})}function l(e){return S(u(),e)}function u(){var e=n.rules.sequence,i=function(e,t){return n.rules.then(n.rules.token(`identifier`,e),function(){return t})},a=i(`p`,r.paragraph),o=i(`r`,r.run),s=n.rules.firstOf(`p or r or table`,a,o),c=n.rules.sequence(n.rules.tokenOfType(`dot`),n.rules.sequence.cut(),n.rules.sequence.capture(m)).map(function(e){return{styleId:e}}),l=n.rules.firstOf(`style name matcher`,n.rules.then(n.rules.sequence(n.rules.tokenOfType(`equals`),n.rules.sequence.cut(),n.rules.sequence.capture(g)).head(),function(e){return{styleName:r.equalTo(e)}}),n.rules.then(n.rules.sequence(n.rules.tokenOfType(`startsWith`),n.rules.sequence.cut(),n.rules.sequence.capture(g)).head(),function(e){return{styleName:r.startsWith(e)}})),u=n.rules.sequence(n.rules.tokenOfType(`open-square-bracket`),n.rules.sequence.cut(),n.rules.token(`identifier`,`style-name`),n.rules.sequence.capture(l),n.rules.tokenOfType(`close-square-bracket`)).head(),d=n.rules.firstOf(`list type`,i(`ordered-list`,{isOrdered:!0}),i(`unordered-list`,{isOrdered:!1})),f=e(n.rules.tokenOfType(`colon`),e.capture(d),e.cut(),n.rules.tokenOfType(`open-paren`),e.capture(h),n.rules.tokenOfType(`close-paren`)).map(function(e,t){return{list:{isOrdered:e.isOrdered,levelIndex:t-1}}});function p(e){var r=n.rules.firstOf.apply(n.rules.firstOf,[`matcher suffix`].concat(e)),i=n.rules.zeroOrMore(r);return n.rules.then(i,function(e){var n={};return e.forEach(function(e){t.extend(n,e)}),n})}var _=e(e.capture(s),e.capture(p([c,u,f]))).map(function(e,t){return e(t)}),v=e(n.rules.token(`identifier`,`table`),e.capture(p([c,u]))).map(function(e){return r.table(e)}),y=i(`b`,r.bold),b=i(`i`,r.italic),x=i(`u`,r.underline),S=i(`strike`,r.strikethrough),C=i(`all-caps`,r.allCaps),w=i(`small-caps`,r.smallCaps),T=e(n.rules.token(`identifier`,`highlight`),n.rules.sequence.capture(n.rules.optional(n.rules.sequence(n.rules.tokenOfType(`open-square-bracket`),n.rules.sequence.cut(),n.rules.token(`identifier`,`color`),n.rules.tokenOfType(`equals`),n.rules.sequence.capture(g),n.rules.tokenOfType(`close-square-bracket`)).head()))).map(function(e){return r.highlight({color:e.valueOrElse(void 0)})}),E=i(`comment-reference`,r.commentReference),D=e(n.rules.token(`identifier`,`br`),e.cut(),n.rules.tokenOfType(`open-square-bracket`),n.rules.token(`identifier`,`type`),n.rules.tokenOfType(`equals`),e.capture(g),n.rules.tokenOfType(`close-square-bracket`)).map(function(e){switch(e){case`line`:return r.lineBreak;case`page`:return r.pageBreak;case`column`:return r.columnBreak;default:}});return n.rules.firstOf(`element type`,_,v,y,b,x,S,C,w,T,E,D)}function f(e){return S(p(),e)}function p(){var e=n.rules.sequence.capture,t=n.rules.tokenOfType(`whitespace`),r=n.rules.then(n.rules.optional(n.rules.sequence(n.rules.tokenOfType(`colon`),n.rules.token(`identifier`,`fresh`))),function(e){return e.map(function(){return!0}).valueOrElse(!1)}),a=n.rules.then(n.rules.optional(n.rules.sequence(n.rules.tokenOfType(`colon`),n.rules.token(`identifier`,`separator`),n.rules.tokenOfType(`open-paren`),e(g),n.rules.tokenOfType(`close-paren`)).head()),function(e){return e.valueOrElse(``)}),o=n.rules.oneOrMoreWithSeparator(m,n.rules.tokenOfType(`choice`)),s=n.rules.sequence(e(o),e(n.rules.zeroOrMore(x)),e(r),e(a)).map(function(e,t,n,r){var a={},o={};return t.forEach(function(e){e.append&&a[e.name]?a[e.name]+=` `+e.value:a[e.name]=e.value}),n&&(o.fresh=!0),r&&(o.separator=r),i.element(e,a,o)});return n.rules.firstOf(`html path`,n.rules.then(n.rules.tokenOfType(`bang`),function(){return i.ignore}),n.rules.then(n.rules.zeroOrMoreWithSeparator(s,n.rules.sequence(t,n.rules.tokenOfType(`gt`),t)),i.elements))}var m=n.rules.then(n.rules.tokenOfType(`identifier`),v),h=n.rules.tokenOfType(`integer`),g=n.rules.then(n.rules.tokenOfType(`string`),v),_={n:`
`,r:`\r`,t:`	`};function v(e){return e.replace(/\\(.)/g,function(e,t){return _[t]||t})}var y=n.rules.sequence(n.rules.tokenOfType(`open-square-bracket`),n.rules.sequence.cut(),n.rules.sequence.capture(m),n.rules.tokenOfType(`equals`),n.rules.sequence.capture(g),n.rules.tokenOfType(`close-square-bracket`)).map(function(e,t){return{name:e,value:t,append:!1}}),b=n.rules.sequence(n.rules.tokenOfType(`dot`),n.rules.sequence.cut(),n.rules.sequence.capture(m)).map(function(e){return{name:`class`,value:e,append:!0}}),x=n.rules.firstOf(`attribute or class`,y,b);function S(e,t){var r=a(t),i=n.Parser().parseTokens(e,r);return i.isSuccess()?o.success(i.value()):new o.Result(null,[o.warning(C(t,i))])}function C(e,t){return`Did not understand this style mapping, so ignored it: `+e+`
`+t.errors().map(w).join(`
`)}function w(e){return`Error was at character number `+e.characterNumber()+`: Expected `+e.expected+` but got `+e.actual}var T=c()})),dc=s((e=>{e.readOptions=i;var t=(Q(),d(Z)),n=e._defaultStyleMap=`p.Heading1 => h1:fresh,p.Heading2 => h2:fresh,p.Heading3 => h3:fresh,p.Heading4 => h4:fresh,p.Heading5 => h5:fresh,p.Heading6 => h6:fresh,p[style-name='Heading 1'] => h1:fresh,p[style-name='Heading 2'] => h2:fresh,p[style-name='Heading 3'] => h3:fresh,p[style-name='Heading 4'] => h4:fresh,p[style-name='Heading 5'] => h5:fresh,p[style-name='Heading 6'] => h6:fresh,p[style-name='heading 1'] => h1:fresh,p[style-name='heading 2'] => h2:fresh,p[style-name='heading 3'] => h3:fresh,p[style-name='heading 4'] => h4:fresh,p[style-name='heading 5'] => h5:fresh,p[style-name='heading 6'] => h6:fresh,p.Heading => h1:fresh,p[style-name='Heading'] => h1:fresh,r[style-name='Strong'] => strong,p[style-name='footnote text'] => p:fresh,r[style-name='footnote reference'] =>,p[style-name='endnote text'] => p:fresh,r[style-name='endnote reference'] =>,p[style-name='annotation text'] => p:fresh,r[style-name='annotation reference'] =>,p[style-name='Footnote'] => p:fresh,r[style-name='Footnote anchor'] =>,p[style-name='Endnote'] => p:fresh,r[style-name='Endnote anchor'] =>,p:unordered-list(1) => ul > li:fresh,p:unordered-list(2) => ul|ol > li > ul > li:fresh,p:unordered-list(3) => ul|ol > li > ul|ol > li > ul > li:fresh,p:unordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh,p:unordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh,p:ordered-list(1) => ol > li:fresh,p:ordered-list(2) => ul|ol > li > ol > li:fresh,p:ordered-list(3) => ul|ol > li > ul|ol > li > ol > li:fresh,p:ordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh,p:ordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh,r[style-name='Hyperlink'] =>,p[style-name='Normal'] => p:fresh,p.Body => p:fresh,p[style-name='Body'] => p:fresh`.split(`,`),r=e._standardOptions={externalFileAccess:!1,transformDocument:o,includeDefaultStyleMap:!0,includeEmbeddedStyleMap:!0};function i(e){return e||={},t.extend({},r,e,{customStyleMap:a(e.styleMap),readStyleMap:function(){var e=this.customStyleMap;return this.includeEmbeddedStyleMap&&(e=e.concat(a(this.embeddedStyleMap))),this.includeDefaultStyleMap&&(e=e.concat(n)),e}})}function a(e){return e?t.isString(e)?e.split(`
`).map(function(e){return e.trim()}).filter(function(e){return e!==``&&e.charAt(0)!==`#`}):e:[]}function o(e){return e}})),fc=s((e=>{var t=Ro(),n=Uo();e.openZip=r;function r(e){return e.arrayBuffer?t.resolve(n.openArrayBuffer(e.arrayBuffer)):t.reject(Error(`Could not find file in options`))}})),pc=s((e=>{var t=Us(),n=Hs();e.element=r;function r(e){return function(r){return n.elementWithTag(t.element(e),[r])}}})),mc=s((e=>{var t=(Q(),d(Z)),n=Rs(),r=zs(),i=Js().DocumentConverter;Ys().convertElementToRawText;var a=uc().readStyle,o=dc().readOptions,s=fc(),c=Bo().Result;e.convertToHtml=l,e.images=Ws(),e.transforms=Ds(),e.underline=pc();function l(e,t){return u(e,t)}function u(e,t){return t=o(t),s.openZip(e).tap(function(e){return r.readStyleMap(e).then(function(e){t.embeddedStyleMap=e})}).then(function(r){return n.read(r,e,t).then(function(e){return e.map(t.transformDocument)}).then(function(e){return f(e,t)})})}function f(e,n){var r=p(n.readStyleMap()),a=new i(t.extend({},n,{styleMap:r.value}));return e.flatMapThen(function(e){return r.flatMapThen(function(t){return a.convertToHtml(e)})})}function p(e){return c.combine((e||[]).map(a)).map(function(e){return e.filter(function(e){return!!e})})}})),hc=u(Ho(),1),gc=u(mc(),1),_c=`<?xml version="1.0" encoding="utf-8"?>
<!-- Beta Version 070708 -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
		xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
		xmlns="http://www.w3.org/1998/Math/MathML"
		xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
		version="3.0"
                exclude-result-prefixes="m w">
	<!-- %% Global Definitions -->

	<!-- Every single unicode character that is recognized by OMML as an operator -->
	<xsl:variable name="sOperators"
                 select="concat(      '!&#34;#&amp;()+,-./:',           ';&lt;=&gt;?@[\\]^_{',           '|}~¡¦¬¯°±²³·¹¿',           '×÷̀́̂̃̄̅̆̇̈̉',           '̊̋̌̍̎̏̐̑̒̓̔̕',           '̡̛̖̗̘̙̜̝̞̟̠̚',           '̢̧̨̣̤̥̦̩̪̫̬̭',           '̴̵̶̷̸̮̯̰̱̲̳̿',           '         ‐‒–',           '—‖†‡•․‥…′″‴‼',           '⁀⁄⁎⁏⁐⁗⁡⁢⁣⁰⁴⁵',           '⁶⁷⁸⁹⁺⁻⁼⁽⁾₀₁₂',           '₃₄₅₆₇₈₉₊₋₌₍₎',           '⃒⃓⃘⃙⃚⃐⃑⃔⃕⃖⃗⃛',           '⃜⃝⃞⃟⃠⃡⃤⃥⃦⃨⃧⃩',           '⃪⅀ࡢ←↑→↓↔↕↖↗↘↙',           '↚↛↜↝↞↟↠↡↢↣↤↥',           '↦↧↨↩↪↫↬↭↮↯↰↱',           '↲↳↶↷↺↻↼↽↾↿⇀⇁',           '⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍',           '⇎⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙',           '⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥',           '⇦⇧⇨⇩⇳⇴⇵⇶⇷⇸⇹⇺',           '⇻⇼⇽⇾⇿∀∁∂∃∄∆∇',           '∈∉∊∋∌∍∏∐∑−∓∔',           '∕∖∗∘∙√∛∜∝∣∤∥',           '∦∧∨∩∪∫∬∭∮∯∰∱',           '∲∳∴∵∶∷∸∹∺∻∼∽',           '∾≀≁≂≃≄≅≆≇≈≉≊',           '≋≌≍≎≏≐≑≒≓≔≕≖',           '≗≘≙≚≛≜≝≞≟≠≡≢',           '≣≤≥≦≧≨≩≪≫≬≭≮',           '≯≰≱≲≳≴≵≶≷≸≹≺',           '≻≼≽≾≿⊀⊁⊂⊃⊄⊅⊆',           '⊇⊈⊉⊊⊋⊌⊍⊎⊏⊐⊑⊒',           '⊓⊔⊕⊖⊗⊘⊙⊚⊛⊜⊝⊞',           '⊟⊠⊡⊢⊣⊥⊦⊧⊨⊩⊪⊫',           '⊬⊭⊮⊯⊰⊱⊲⊳⊴⊵⊶⊷',           '⊸⊹⊺⊻⊼⊽⋀⋁⋂⋃⋄⋅',           '⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑',           '⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝',           '⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩',           '⋪⋫⋬⋭⋮⋯⋰⋱⋲⋳⋴⋵',           '⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿⌅⌆',           '⌈⌉⌊⌋⌜⌝⌞⌟⌢⌣〈〉',           '⌽⌿⎰⎱⏜⏝⏞⏟⏠│├┤',           '┬┴▁█▒■□▭▲△▴▵',           '▶▷▸▹▼▽▾▿◀◁◂◃',           '◄◅◊○◦◫◬◸◹◺◻◼',           '◽◾◿★☆❲❳⟑⟒⟓⟔⟕',           '⟖⟗⟘⟙⟚⟛⟜⟝⟞⟟⟠⟡',           '⟢⟣⟤⟥⟦⟧⟨⟩⟪⟫⟰⟱',           '⟲⟳⟴⟵⟶⟷⟸⟹⟺⟻⟼⟽',           '⟾⟿⤀⤁⤂⤃⤄⤅⤆⤇⤈⤉',           '⤊⤋⤌⤍⤎⤏⤐⤑⤒⤓⤔⤕',           '⤖⤗⤘⤙⤚⤛⤜⤝⤞⤟⤠⤡',           '⤢⤣⤤⤥⤦⤧⤨⤩⤪⤫⤬⤭',           '⤮⤯⤰⤱⤲⤳⤴⤵⤶⤷⤸⤹',           '⤺⤻⤼⤽⤾⤿⥀⥁⥂⥃⥄⥅',           '⥆⥇⥈⥉⥊⥋⥌⥍⥎⥏⥐⥑',           '⥒⥓⥔⥕⥖⥗⥘⥙⥚⥛⥜⥝',           '⥞⥟⥠⥡⥢⥣⥤⥥⥦⥧⥨⥩',           '⥪⥫⥬⥭⥮⥯⥰⥱⥲⥳⥴⥵',           '⥶⥷⥸⥹⥺⥻⥼⥽⥾⥿⦀⦂',           '⦃⦄⦅⦆⦇⦈⦉⦊⦋⦌⦍⦎',           '⦏⦐⦑⦒⦓⦔⦕⦖⦗⦘⦙⦚',           '⦶⦷⦸⦹⧀⧁⧄⧅⧆⧇⧈⧎',           '⧏⧐⧑⧒⧓⧔⧕⧖⧗⧘⧙⧚',           '⧛⧟⧡⧢⧣⧤⧥⧦⧫⧴⧵⧶',           '⧷⧸⧹⧺⧻⧼⧽⧾⧿⨀⨁⨂',           '⨃⨄⨅⨆⨇⨈⨉⨊⨋⨌⨍⨎',           '⨏⨐⨑⨒⨓⨔⨕⨖⨗⨘⨙⨚',           '⨛⨜⨝⨞⨟⨠⨡⨢⨣⨤⨥⨦',           '⨧⨨⨩⨪⨫⨬⨭⨮⨯⨰⨱⨲',           '⨳⨴⨵⨶⨷⨸⨹⨺⨻⨼⨽⨾',           '⨿⩀⩁⩂⩃⩄⩅⩆⩇⩈⩉⩊',           '⩋⩌⩍⩎⩏⩐⩑⩒⩓⩔⩕⩖',           '⩗⩘⩙⩚⩛⩜⩝⩞⩟⩠⩡⩢',           '⩣⩤⩥⩦⩧⩨⩩⩪⩫⩬⩭⩮',           '⩯⩰⩱⩲⩳⩴⩵⩶⩷⩸⩹⩺',           '⩻⩼⩽⩾⩿⪀⪁⪂⪃⪄⪅⪆',           '⪇⪈⪉⪊⪋⪌⪍⪎⪏⪐⪑⪒',           '⪓⪔⪕⪖⪗⪘⪙⪚⪛⪜⪝⪞',           '⪟⪠⪡⪢⪣⪤⪥⪦⪧⪨⪩⪪',           '⪫⪬⪭⪮⪯⪰⪱⪲⪳⪴⪵⪶',           '⪷⪸⪹⪺⪻⪼⪽⪾⪿⫀⫁⫂',           '⫃⫄⫅⫆⫇⫈⫉⫊⫋⫌⫍⫎',           '⫏⫐⫑⫒⫓⫔⫕⫖⫗⫘⫙⫚',           '⫛⫝̸⫝⫞⫟⫠⫢⫣⫤⫥⫦⫧',           '⫨⫩⫪⫫⫬⫭⫮⫯⫰⫲⫳⫴',           '⫵⫶⫷⫸⫹⫺⫻⫼⫽⫾⫿⬄',           '⬆⬇⬌⬍〔〕〖〗〘〙！＆',           '（）＋，－．／：；＜＝＞',           '？＠［＼］＾＿｛｜｝')"/>

	  <!-- A string of '-'s repeated exactly as many times as the operators above -->
	<xsl:variable name="sMinuses">
		    <xsl:call-template name="SRepeatChar">
			      <xsl:with-param name="cchRequired" select="string-length($sOperators)"/>
			      <xsl:with-param name="ch" select="'-'"/>
		    </xsl:call-template>
	  </xsl:variable>

	  <!-- Every single unicode character that is recognized by OMML as a number -->
	<xsl:variable name="sNumbers" select="'0123456789'"/>

	  <!-- A string of '0's repeated exactly as many times as the list of numbers above -->
	<xsl:variable name="sZeros">
		    <xsl:call-template name="SRepeatChar">
			      <xsl:with-param name="cchRequired" select="string-length($sNumbers)"/>
			      <xsl:with-param name="ch" select="'0'"/>
		    </xsl:call-template>
	  </xsl:variable>

	  <!-- %%Template: SReplace

		Replace all occurences of sOrig in sInput with sReplacement
		and return the resulting string. -->
	<xsl:template name="SReplace">
		    <xsl:param name="sInput"/>
		    <xsl:param name="sOrig"/>
		    <xsl:param name="sReplacement"/>

		    <xsl:choose>
			      <xsl:when test="not(contains($sInput, $sOrig))">
				        <xsl:value-of select="$sInput"/>
			      </xsl:when>
			      <xsl:otherwise>
				        <xsl:variable name="sBefore" select="substring-before($sInput, $sOrig)"/>
				        <xsl:variable name="sAfter" select="substring-after($sInput, $sOrig)"/>
				        <xsl:variable name="sAfterProcessed">
					          <xsl:call-template name="SReplace">
						            <xsl:with-param name="sInput" select="$sAfter"/>
						            <xsl:with-param name="sOrig" select="$sOrig"/>
						            <xsl:with-param name="sReplacement" select="$sReplacement"/>
					          </xsl:call-template>
				        </xsl:variable>

				        <xsl:value-of select="concat($sBefore, concat($sReplacement, $sAfterProcessed))"/>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>

	  <!-- Templates -->
	<!--
	    <xsl:template match="/">
	    <math>
	    <xsl:apply-templates select="*" />
	    </math>
	</xsl:template>
	-->
	<xsl:template match="m:borderBox">

		<!-- Get Lowercase versions of properties -->
		<xsl:variable name="sLowerCaseHideTop"
                    select="translate(m:borderBoxPr[last()]/m:hideTop[last()]/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                 'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="sLowerCaseHideBot"
                    select="translate(m:borderBoxPr[last()]/m:hideBot[last()]/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                 'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="sLowerCaseHideLeft"
                    select="translate(m:borderBoxPr[last()]/m:hideLeft[last()]/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                 'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="sLowerCaseHideRight"
                    select="translate(m:borderBoxPr[last()]/m:hideRight[last()]/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                 'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="sLowerCaseStrikeH"
                    select="translate(m:borderBoxPr[last()]/m:strikeH[last()]/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                 'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="sLowerCaseStrikeV"
                    select="translate(m:borderBoxPr[last()]/m:strikeV[last()]/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                 'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="sLowerCaseStrikeBLTR"
                    select="translate(m:borderBoxPr[last()]/m:strikeBLTR[last()]/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                 'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="sLowerCaseStrikeTLBR"
                    select="translate(m:borderBoxPr[last()]/m:strikeTLBR[last()]/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                 'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="fHideTop">
			      <xsl:choose>
				        <xsl:when test="$sLowerCaseHideTop='on'">
					          <xsl:text>1</xsl:text>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:text>0</xsl:text>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="fHideBot">
			      <xsl:choose>
				        <xsl:when test="$sLowerCaseHideBot='on'">
					          <xsl:text>1</xsl:text>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:text>0</xsl:text>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="fHideLeft">
			      <xsl:choose>
				        <xsl:when test="$sLowerCaseHideLeft='on'">
					          <xsl:text>1</xsl:text>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:text>0</xsl:text>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="fHideRight">
			      <xsl:choose>
				        <xsl:when test="$sLowerCaseHideRight='on'">
					          <xsl:text>1</xsl:text>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:text>0</xsl:text>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="fStrikeH">
			      <xsl:choose>
				        <xsl:when test="$sLowerCaseStrikeH='on'">
					          <xsl:text>1</xsl:text>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:text>0</xsl:text>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="fStrikeV">
			      <xsl:choose>
				        <xsl:when test="$sLowerCaseStrikeV='on'">
					          <xsl:text>1</xsl:text>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:text>0</xsl:text>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="fStrikeBLTR">
			      <xsl:choose>
				        <xsl:when test="$sLowerCaseStrikeBLTR='on'">
					          <xsl:text>1</xsl:text>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:text>0</xsl:text>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="fStrikeTLBR">
			      <xsl:choose>
				        <xsl:when test="$sLowerCaseStrikeTLBR='on'">
					          <xsl:text>1</xsl:text>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:text>0</xsl:text>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>

		    <menclose>
			      <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
				        <xsl:with-param name="fHideTop" select="$fHideTop"/>
				        <xsl:with-param name="fHideBot" select="$fHideBot"/>
				        <xsl:with-param name="fHideLeft" select="$fHideLeft"/>
				        <xsl:with-param name="fHideRight" select="$fHideRight"/>
				        <xsl:with-param name="fStrikeH" select="$fStrikeH"/>
				        <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
				        <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
				        <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
			      </xsl:call-template>
			      <xsl:apply-templates select="m:e[1]"/>
		    </menclose>
	  </xsl:template>

	  <xsl:template match="*">
		    <xsl:apply-templates select="*"/>
	  </xsl:template>

	  <xsl:template match="m:acc">
		    <mover>
			      <xsl:attribute name="accent">true</xsl:attribute>
			      <mrow>
				        <xsl:apply-templates select="m:e[1]"/>
			      </mrow>
			      <xsl:variable name="chAcc">
				        <xsl:choose>
					          <xsl:when test="not(m:accPr[last()]/m:chr)">
						            <xsl:value-of select="'̂'"/>
					          </xsl:when>
					          <xsl:otherwise>
						            <xsl:value-of select="substring(m:accPr/m:chr/@m:val,1,1)"/>
					          </xsl:otherwise>
				        </xsl:choose>
			      </xsl:variable>
			      <xsl:call-template name="ParseMt">
				        <xsl:with-param name="sToParse" select="$chAcc"/>
				        <xsl:with-param name="scr" select="m:e[1]/*/m:rPr[last()]/m:scr/@m:val"/>
				        <xsl:with-param name="sty" select="m:e[1]/*/m:rPr[last()]/m:sty/@m:val"/>
				        <xsl:with-param name="nor" select="m:e[1]/*/m:rPr[last()]/m:nor/@m:val"/>
			      </xsl:call-template>
		    </mover>
	  </xsl:template>

	  <xsl:template match="m:sPre">
		    <mmultiscripts>
			      <mrow>
				        <xsl:apply-templates select="m:e[1]"/>
			      </mrow>
			      <mprescripts/>
			      <mrow>
				        <xsl:apply-templates select="m:sub[1]"/>
			      </mrow>
			      <mrow>
				        <xsl:apply-templates select="m:sup[1]"/>
			      </mrow>
		    </mmultiscripts>
	  </xsl:template>

	  <xsl:template match="m:m">
		    <mtable>
			      <xsl:call-template name="CreateMathMLMatrixAttr">
				        <xsl:with-param name="mcJc" select="m:mPr[last()]/m:mcs/m:mc/m:mcPr[last()]/m:mcJc/@m:val"/>
			      </xsl:call-template>
			      <xsl:for-each select="m:mr">
				        <mtr>
					          <xsl:for-each select="m:e">
						            <mtd>
							              <xsl:apply-templates select="."/>
						            </mtd>
					          </xsl:for-each>
				        </mtr>
			      </xsl:for-each>
		    </mtable>
	  </xsl:template>

	  <xsl:template name="CreateMathMLMatrixAttr">
		    <xsl:param name="mcJc"/>
		    <xsl:variable name="sLowerCaseMcjc"
                    select="translate($mcJc, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                 'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:choose>
			      <xsl:when test="$sLowerCaseMcjc='left'">
				        <xsl:attribute name="columnalign">left</xsl:attribute>
			      </xsl:when>
			      <xsl:when test="$sLowerCaseMcjc='right'">
				        <xsl:attribute name="columnalign">right</xsl:attribute>
			      </xsl:when>
		    </xsl:choose>
	  </xsl:template>

	  <xsl:template match="m:phant">
		    <xsl:variable name="sLowerCaseZeroWidVal"
                    select="translate(m:phantPr[last()]/m:zeroWid[last()]/@m:val,                                                           'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                           'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="sLowerCaseZeroAscVal"
                    select="translate(m:phantPr[last()]/m:zeroAsc[last()]/@m:val,                                                         'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                         'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="sLowerCaseZeroDescVal"
                    select="translate(m:phantPr[last()]/m:zeroDesc[last()]/@m:val,                                                         'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                         'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="sLowerCaseShowVal"
                    select="translate(m:phantPr[last()]/m:show[last()]/@m:val,                                                         'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                         'abcdefghijklmnopqrstuvwxyz')"/>


		    <!-- The following properties default to 'yes' unless the last value equals 'no' or there isn't any node for 
         the property -->

		<xsl:variable name="fZeroWid">
			      <xsl:choose>
				        <xsl:when test="count(m:phantPr[last()]/m:zeroWid[last()]) = 0">0</xsl:when>
				        <xsl:when test="$sLowerCaseZeroWidVal = 'off'">0</xsl:when>
				        <xsl:otherwise>1</xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="fZeroAsc">
			      <xsl:choose>
				        <xsl:when test="count(m:phantPr[last()]/m:zeroAsc[last()]) = 0">0</xsl:when>
				        <xsl:when test="$sLowerCaseZeroAscVal = 'off'">0</xsl:when>
				        <xsl:otherwise>1</xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="fZeroDesc">
			      <xsl:choose>
				        <xsl:when test="count(m:phantPr[last()]/m:zeroDesc[last()]) = 0">0</xsl:when>
				        <xsl:when test="$sLowerCaseZeroDescVal = 'off'">0</xsl:when>
				        <xsl:otherwise>1</xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>

		    <!-- The show property defaults to 'on' unless there exists a show property and its value is 'off' -->

		<xsl:variable name="fShow">
			      <xsl:choose>
				        <xsl:when test="$sLowerCaseShowVal = 'off'">0</xsl:when>
				        <xsl:otherwise>1</xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>

		    <xsl:choose>
			<!-- Show the phantom contents, therefore, just use mpadded. -->
			<xsl:when test="$fShow = 1">
				        <xsl:element name="mpadded">
					          <xsl:call-template name="CreateMpaddedAttributes">
						            <xsl:with-param name="fZeroWid" select="$fZeroWid"/>
						            <xsl:with-param name="fZeroAsc" select="$fZeroAsc"/>
						            <xsl:with-param name="fZeroDesc" select="$fZeroDesc"/>
					          </xsl:call-template>
					          <mrow>
						            <xsl:apply-templates select="m:e"/>
					          </mrow>
				        </xsl:element>
			      </xsl:when>
			      <!-- Don't show phantom contents, but don't smash anything, therefore, just 
           use mphantom -->
			<xsl:when test="$fZeroWid=0 and $fZeroAsc=0 and $fZeroDesc=0">
				        <xsl:element name="mphantom">
					          <mrow>
						            <xsl:apply-templates select="m:e"/>
					          </mrow>
				        </xsl:element>
			      </xsl:when>
			      <!-- Combination -->
			<xsl:otherwise>
				        <xsl:element name="mphantom">
					          <xsl:element name="mpadded">
						            <xsl:call-template name="CreateMpaddedAttributes">
							              <xsl:with-param name="fZeroWid" select="$fZeroWid"/>
							              <xsl:with-param name="fZeroAsc" select="$fZeroAsc"/>
							              <xsl:with-param name="fZeroDesc" select="$fZeroDesc"/>
						            </xsl:call-template>
						            <mrow>
							              <xsl:apply-templates select="m:e"/>
						            </mrow>
					          </xsl:element>
				        </xsl:element>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>

	  <xsl:template name="CreateMpaddedAttributes">
		    <xsl:param name="fZeroWid"/>
		    <xsl:param name="fZeroAsc"/>
		    <xsl:param name="fZeroDesc"/>

		    <xsl:if test="$fZeroWid=1">
			      <xsl:attribute name="width">0</xsl:attribute>
		    </xsl:if>
		    <xsl:if test="$fZeroAsc=1">
			      <xsl:attribute name="height">0</xsl:attribute>
		    </xsl:if>
		    <xsl:if test="$fZeroDesc=1">
			      <xsl:attribute name="depth">0</xsl:attribute>
		    </xsl:if>
	  </xsl:template>



	  <xsl:template match="m:rad">
		    <xsl:variable name="sLowerCaseDegHide"
                    select="translate(m:radPr[last()]/m:degHide/@m:val,                                                              'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                              'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:choose>
			      <xsl:when test="$sLowerCaseDegHide='on'">
				        <msqrt>
					          <xsl:apply-templates select="m:e[1]"/>
				        </msqrt>
			      </xsl:when>
			      <xsl:otherwise>
				        <mroot>
					          <mrow>
						            <xsl:apply-templates select="m:e[1]"/>
					          </mrow>
					          <mrow>
						            <xsl:apply-templates select="m:deg[1]"/>
					          </mrow>
				        </mroot>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>

	  <!-- %%Template match m:nary 
		Process an n-ary. 
		
		Decides, based on which arguments are supplied, between
		using an mo, msup, msub, or msubsup for the n-ary operator		
	-->
	<xsl:template match="m:nary">
		    <xsl:variable name="sLowerCaseSubHide">
			      <xsl:choose>
				        <xsl:when test="count(m:naryPr[last()]/m:subHide) = 0">
					          <xsl:text>off</xsl:text>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:value-of select="translate(m:naryPr[last()]/m:subHide/@m:val,                                     'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                     'abcdefghijklmnopqrstuvwxyz')"/>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="sLowerCaseSupHide">
			      <xsl:choose>
				        <xsl:when test="count(m:naryPr[last()]/m:supHide) = 0">
					          <xsl:text>off</xsl:text>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:value-of select="translate(m:naryPr[last()]/m:supHide/@m:val,                                     'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                     'abcdefghijklmnopqrstuvwxyz')"/>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="sLowerCaseLimLoc">
			      <xsl:value-of select="translate(m:naryPr[last()]/m:limLoc/@m:val,                                     'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                     'abcdefghijklmnopqrstuvwxyz')"/>
		    </xsl:variable>
		    <xsl:variable name="fLimLocSubSup">
			      <xsl:choose>
				        <xsl:when test="count(m:naryPr[last()]/m:limLoc)=0 or $sLowerCaseLimLoc='subsup'">1</xsl:when>
				        <xsl:otherwise>0</xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:choose>
			      <xsl:when test="not($sLowerCaseSupHide='off') and                     not($sLowerCaseSubHide='off')">
				        <mo>
					          <xsl:choose>
						            <xsl:when test="not(m:naryPr[last()]/m:chr/@m:val) or                                m:naryPr[last()]/m:chr/@m:val=''">
							              <xsl:text>&#x222b;</xsl:text>
						            </xsl:when>
						            <xsl:otherwise>
							              <xsl:value-of select="m:naryPr[last()]/m:chr/@m:val"/>
						            </xsl:otherwise>
					          </xsl:choose>
				        </mo>
			      </xsl:when>
			      <xsl:when test="not($sLowerCaseSubHide='off')">
				        <xsl:choose>
					          <xsl:when test="$fLimLocSubSup=1">
						            <msup>
							              <mo>
								                <xsl:choose>
									                  <xsl:when test="not(m:naryPr[last()]/m:chr/@m:val) or                                            m:naryPr[last()]/m:chr/@m:val=''">
										                    <xsl:text>&#x222b;</xsl:text>
									                  </xsl:when>
									                  <xsl:otherwise>
										                    <xsl:value-of select="m:naryPr[last()]/m:chr/@m:val"/>
									                  </xsl:otherwise>
								                </xsl:choose>
							              </mo>
							              <mrow>
								                <xsl:apply-templates select="m:sup[1]"/>
							              </mrow>
						            </msup>
					          </xsl:when>
					          <xsl:otherwise>
						            <mover>
							              <mo>
								                <xsl:choose>
									                  <xsl:when test="not(m:naryPr[last()]/m:chr/@m:val) or                                            m:naryPr[last()]/m:chr/@m:val=''">
										                    <xsl:text>&#x222b;</xsl:text>
									                  </xsl:when>
									                  <xsl:otherwise>
										                    <xsl:value-of select="m:naryPr[last()]/m:chr/@m:val"/>
									                  </xsl:otherwise>
								                </xsl:choose>
							              </mo>
							              <mrow>
								                <xsl:apply-templates select="m:sup[1]"/>
							              </mrow>
						            </mover>
					          </xsl:otherwise>
				        </xsl:choose>
			      </xsl:when>
			      <xsl:when test="not($sLowerCaseSupHide='off')">
				        <xsl:choose>
					          <xsl:when test="$fLimLocSubSup=1">
						            <msub>
							              <mo>
								                <xsl:choose>
									                  <xsl:when test="not(m:naryPr[last()]/m:chr/@m:val) or                                            m:naryPr[last()]/m:chr/@m:val=''">
										                    <xsl:text>&#x222b;</xsl:text>
									                  </xsl:when>
									                  <xsl:otherwise>
										                    <xsl:value-of select="m:naryPr[last()]/m:chr/@m:val"/>
									                  </xsl:otherwise>
								                </xsl:choose>
							              </mo>
							              <mrow>
								                <xsl:apply-templates select="m:sub[1]"/>
							              </mrow>
						            </msub>
					          </xsl:when>
					          <xsl:otherwise>
						            <munder>
							              <mo>
								                <xsl:choose>
									                  <xsl:when test="not(m:naryPr[last()]/m:chr/@m:val) or                            m:naryPr[last()]/m:chr/@m:val=''">
										                    <xsl:text>&#x222b;</xsl:text>
									                  </xsl:when>
									                  <xsl:otherwise>
										                    <xsl:value-of select="m:naryPr[last()]/m:chr/@m:val"/>
									                  </xsl:otherwise>
								                </xsl:choose>
							              </mo>
							              <mrow>
								                <xsl:apply-templates select="m:sub[1]"/>
							              </mrow>
						            </munder>
					          </xsl:otherwise>
				        </xsl:choose>
			      </xsl:when>
			      <xsl:otherwise>
				        <xsl:choose>
					          <xsl:when test="$fLimLocSubSup=1">
						            <msubsup>
							              <mo>
								                <xsl:choose>
									                  <xsl:when test="not(m:naryPr[last()]/m:chr/@m:val) or                                            m:naryPr[last()]/m:chr/@m:val=''">
										                    <xsl:text>&#x222b;</xsl:text>
									                  </xsl:when>
									                  <xsl:otherwise>
										                    <xsl:value-of select="m:naryPr[last()]/m:chr/@m:val"/>
									                  </xsl:otherwise>
								                </xsl:choose>
							              </mo>
							              <mrow>
								                <xsl:apply-templates select="m:sub[1]"/>
							              </mrow>
							              <mrow>
								                <xsl:apply-templates select="m:sup[1]"/>
							              </mrow>
						            </msubsup>
					          </xsl:when>
					          <xsl:otherwise>
						            <munderover>
							              <mo>
								                <xsl:choose>
									                  <xsl:when test="not(m:naryPr[last()]/m:chr/@m:val) or                                            m:naryPr[last()]/m:chr/@m:val=''">
										                    <xsl:text>&#x222b;</xsl:text>
									                  </xsl:when>
									                  <xsl:otherwise>
										                    <xsl:value-of select="m:naryPr[last()]/m:chr/@m:val"/>
									                  </xsl:otherwise>
								                </xsl:choose>
							              </mo>
							              <mrow>
								                <xsl:apply-templates select="m:sub[1]"/>
							              </mrow>
							              <mrow>
								                <xsl:apply-templates select="m:sup[1]"/>
							              </mrow>
						            </munderover>
					          </xsl:otherwise>
				        </xsl:choose>
			      </xsl:otherwise>
		    </xsl:choose>
		    <mrow>
			      <xsl:apply-templates select="m:e[1]"/>
		    </mrow>
	  </xsl:template>

	  <xsl:template match="m:limLow">
		    <munder>
			      <mrow>
				        <xsl:apply-templates select="m:e[1]"/>
			      </mrow>
			      <mrow>
				        <xsl:apply-templates select="m:lim[1]"/>
			      </mrow>
		    </munder>
	  </xsl:template>

	  <xsl:template match="m:limUpp">
		    <mover>
			      <mrow>
				        <xsl:apply-templates select="m:e[1]"/>
			      </mrow>
			      <mrow>
				        <xsl:apply-templates select="m:lim[1]"/>
			      </mrow>
		    </mover>
	  </xsl:template>

	  <xsl:template match="m:sSub">
		    <msub>
			      <mrow>
				        <xsl:apply-templates select="m:e[1]"/>
			      </mrow>
			      <mrow>
				        <xsl:apply-templates select="m:sub[1]"/>
			      </mrow>
		    </msub>
	  </xsl:template>

	  <xsl:template match="m:sSup">
		    <msup>
			      <mrow>
				        <xsl:apply-templates select="m:e[1]"/>
			      </mrow>
			      <mrow>
				        <xsl:apply-templates select="m:sup[1]"/>
			      </mrow>
		    </msup>
	  </xsl:template>

	  <xsl:template match="m:sSubSup">
		    <msubsup>
			      <mrow>
				        <xsl:apply-templates select="m:e[1]"/>
			      </mrow>
			      <mrow>
				        <xsl:apply-templates select="m:sub[1]"/>
			      </mrow>
			      <mrow>
				        <xsl:apply-templates select="m:sup[1]"/>
			      </mrow>
		    </msubsup>
	  </xsl:template>

	  <xsl:template match="m:groupChr">
		    <xsl:variable name="ndLastGroupChrPr" select="m:groupChrPr[last()]"/>
		    <xsl:variable name="sLowerCasePos"
                    select="translate($ndLastGroupChrPr/m:pos/@m:val,                                                         'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                         'abcdefghijklmnopqrstuvwxyz')"/>

		    <xsl:variable name="sLowerCaseVertJc"
                    select="translate($ndLastGroupChrPr/m:vertJc/@m:val,                                                         'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                         'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="ndLastChr" select="$ndLastGroupChrPr/m:chr"/>

		    <xsl:variable name="chr">
			      <xsl:choose>
				        <xsl:when test="$ndLastChr and (not($ndLastChr/@m:val) or string-length($ndLastChr/@m:val) = 0)"/>
				        <xsl:when test="string-length($ndLastChr/@m:val) &gt;= 1">
					          <xsl:value-of select="substring($ndLastChr/@m:val,1,1)"/>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:text>&amp;#x023DF;</xsl:text>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:choose>
			      <xsl:when test="$sLowerCasePos = 'top'">
				        <xsl:choose>
					          <xsl:when test="$sLowerCaseVertJc = 'bot'">
						            <mover accent="false">
							              <mrow>
								                <xsl:apply-templates select="m:e[1]"/>
							              </mrow>
							              <mo>
								                <xsl:value-of disable-output-escaping="yes" select="$chr"/>
							              </mo>
						            </mover>
					          </xsl:when>
					          <xsl:otherwise>
						            <munder accentunder="false">
							              <mo>
								                <xsl:value-of disable-output-escaping="yes" select="$chr"/>
							              </mo>
							              <mrow>
								                <xsl:apply-templates select="m:e[1]"/>
							              </mrow>
						            </munder>
					          </xsl:otherwise>
				        </xsl:choose>
			      </xsl:when>
			      <xsl:otherwise>
				        <xsl:choose>
					          <xsl:when test="$sLowerCaseVertJc = 'bot'">
						            <mover accent="false">
							              <mo>
								                <xsl:value-of disable-output-escaping="yes" select="$chr"/>
							              </mo>
							              <mrow>
								                <xsl:apply-templates select="m:e[1]"/>
							              </mrow>
						            </mover>
					          </xsl:when>
					          <xsl:otherwise>
						            <munder accentunder="false">
							              <mrow>
								                <xsl:apply-templates select="m:e[1]"/>
							              </mrow>
							              <mo>
								                <xsl:value-of disable-output-escaping="yes" select="$chr"/>
							              </mo>
						            </munder>
					          </xsl:otherwise>
				        </xsl:choose>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>

	  <xsl:template name="fName">
		    <xsl:for-each select="m:fName/*">
			      <xsl:apply-templates select="."/>
		    </xsl:for-each>
	  </xsl:template>

	  <xsl:template match="m:func">
		    <mrow>
			      <mrow>
				        <xsl:call-template name="fName"/>
			      </mrow>
			      <mo>⁡</mo>
			      <mrow>
				        <xsl:apply-templates select="m:e"/>
			      </mrow>
		    </mrow>
	  </xsl:template>

	  <!-- %%Template: match m:f 
		
		m:f maps directly to mfrac. 
	-->
	<xsl:template match="m:f">
		    <xsl:variable name="sLowerCaseType"
                    select="translate(m:fPr[last()]/m:type/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:choose>
			      <xsl:when test="$sLowerCaseType='lin'">
				        <mrow>
					          <mrow>
						            <xsl:apply-templates select="m:num[1]"/>
					          </mrow>
					          <mo>/</mo>
					          <mrow>
						            <xsl:apply-templates select="m:den[1]"/>
					          </mrow>
				        </mrow>
			      </xsl:when>
			      <xsl:otherwise>
				        <mfrac>
					          <xsl:call-template name="CreateMathMLFracProp">
						            <xsl:with-param name="type" select="$sLowerCaseType"/>
					          </xsl:call-template>
					          <mrow>
						            <xsl:apply-templates select="m:num[1]"/>
					          </mrow>
					          <mrow>
						            <xsl:apply-templates select="m:den[1]"/>
					          </mrow>
				        </mfrac>
			      </xsl:otherwise>
		    </xsl:choose>

	  </xsl:template>


	  <!-- %%Template: CreateMathMLFracProp 
		
			Make fraction properties based on supplied parameters.
			OMML differentiates between a linear fraction and a skewed
			one. For MathML, we write both as bevelled.
	-->
	<xsl:template name="CreateMathMLFracProp">
		    <xsl:param name="type"/>
		    <xsl:variable name="sLowerCaseType"
                    select="translate($type, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')"/>

		    <xsl:if test="$sLowerCaseType='skw' or $sLowerCaseType='lin'">
			      <xsl:attribute name="bevelled">true</xsl:attribute>
		    </xsl:if>
		    <xsl:if test="$sLowerCaseType='nobar'">
			      <xsl:attribute name="linethickness">0pt</xsl:attribute>
		    </xsl:if>
		    <xsl:choose>
			      <xsl:when test="sLowerCaseNumJc='right'">
				        <xsl:attribute name="numalign">right</xsl:attribute>
			      </xsl:when>
			      <xsl:when test="sLowerCaseNumJc='left'">
				        <xsl:attribute name="numalign">left</xsl:attribute>
			      </xsl:when>
		    </xsl:choose>
		    <xsl:choose>
			      <xsl:when test="sLowerCaseDenJc='right'">
				        <xsl:attribute name="numalign">right</xsl:attribute>
			      </xsl:when>
			      <xsl:when test="sLowerCaseDenJc='left'">
				        <xsl:attribute name="numalign">left</xsl:attribute>
			      </xsl:when>
		    </xsl:choose>
	  </xsl:template>

	  <!-- %%Template: match m:e | m:den | m:num | m:lim | m:sup | m:sub 
		
		These element delinate parts of an expression (like the numerator).  -->
	<xsl:template match="m:e | m:den | m:num | m:lim | m:sup | m:sub">
		    <xsl:choose>

			<!-- If there is no scriptLevel specified, just call through -->
			<xsl:when test="not(m:argPr[last()]/m:scrLvl/@m:val)">
				        <xsl:apply-templates select="*"/>
			      </xsl:when>

			      <!-- Otherwise, create an mstyle and set the script level -->
			<xsl:otherwise>
				        <mstyle>
					          <xsl:attribute name="scriptlevel">
						            <xsl:value-of select="m:argPr[last()]/m:scrLvl/@m:val"/>
					          </xsl:attribute>
					          <xsl:apply-templates select="*"/>
				        </mstyle>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>

	  <xsl:template match="m:bar">
		    <xsl:variable name="sLowerCasePos"
                    select="translate(m:barPr/m:pos/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                           'abcdefghijklmnopqrstuvwxyz')"/>

		    <xsl:variable name="fTop">

			      <xsl:choose>
				        <xsl:when test="$sLowerCasePos='top'">1</xsl:when>
				        <xsl:otherwise>0</xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:choose>
			      <xsl:when test="$fTop=1">
				        <mover>
					          <mrow>
						            <xsl:apply-templates select="m:e[1]"/>
					          </mrow>
					          <mo>
						            <xsl:text>&#x000AF;</xsl:text>
					          </mo>
				        </mover>
			      </xsl:when>
			      <xsl:otherwise>
				        <munder>
					          <mrow>
						            <xsl:apply-templates select="m:e[1]"/>
					          </mrow>
					          <mo>
						            <xsl:text>&#x00332;</xsl:text>
					          </mo>
				        </munder>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>

	  <!-- %%Template match m:d

		Process a delimiter. 
	-->
	<xsl:template match="m:d">
		    <mfenced>
			<!-- open: default is '(' for both OMML and MathML -->
			<xsl:if test="m:dPr[1]/m:begChr/@m:val and not(m:dPr[1]/m:begChr/@m:val ='(')">
				        <xsl:attribute name="open">
					          <xsl:value-of select="m:dPr[1]/m:begChr/@m:val"/>
				        </xsl:attribute>
			      </xsl:if>

			      <!-- close: default is ')' for both OMML and MathML -->
			<xsl:if test="m:dPr[1]/m:endChr/@m:val and not(m:dPr[1]/m:endChr/@m:val =')')">
				        <xsl:attribute name="close">
					          <xsl:value-of select="m:dPr[1]/m:endChr/@m:val"/>
				        </xsl:attribute>
			      </xsl:if>

			      <!-- separator: the default is ',' for MathML, and '|' for OMML -->
			<xsl:choose>
				<!-- Matches MathML default. Write nothing -->
				<xsl:when test="m:dPr[1]/m:sepChr/@m:val = ','"/>

				        <!-- OMML default: | -->
				<xsl:when test="not(m:dPr[1]/m:sepChr/@m:val)">
					          <xsl:attribute name="separators">
						            <xsl:value-of select="'|'"/>
					          </xsl:attribute>
				        </xsl:when>

				        <xsl:otherwise>
					          <xsl:attribute name="separators">
						            <xsl:value-of select="m:dPr[1]/m:sepChr/@m:val"/>
					          </xsl:attribute>
				        </xsl:otherwise>
			      </xsl:choose>

			      <!-- now write all the children. Put each one into an mrow
			just in case it produces multiple runs, etc -->
			<xsl:for-each select="m:e">
				        <mrow>
					          <xsl:apply-templates select="."/>
				        </mrow>
			      </xsl:for-each>
		    </mfenced>
	  </xsl:template>

	  <xsl:template match="m:r">
		    <xsl:variable name="sLowerCaseNor"
                    select="translate(child::m:rPr[last()]/m:nor/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                           'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:variable name="sLowerCaseLit"
                    select="translate(child::m:rPr[child::m:lit][last()]/@m:val, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                                           'abcdefghijklmnopqrstuvwxyz')"/>

		    <xsl:variable name="fNor">
			      <xsl:choose>
				        <xsl:when test="$sLowerCaseNor='off' or count(child::m:rPr[last()]/m:nor) = 0">0</xsl:when>
				        <xsl:otherwise>1</xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>
		    <xsl:variable name="fLit">
			      <xsl:choose>
				        <xsl:when test="not(child::m:rPr[child::m:lit][last()]) or $sLowerCaseLit='off'">0</xsl:when>
				        <xsl:otherwise>1</xsl:otherwise>
			      </xsl:choose>
		    </xsl:variable>

		    <xsl:choose>
			      <xsl:when test="$fNor=1">
				        <xsl:choose>
					          <xsl:when test="$fLit=1">
						            <maction actiontype="lit">
							              <mtext>
									<xsl:call-template name="checkDirectFormatting"/>
								                <xsl:value-of select=".//m:t"/>
							              </mtext>
						            </maction>
					          </xsl:when>
					          <xsl:otherwise>
						            <mtext>
									<xsl:call-template name="checkDirectFormatting"/>
							              <xsl:value-of select=".//m:t"/>
						            </mtext>
					          </xsl:otherwise>
				        </xsl:choose>
			      </xsl:when>
			      <xsl:otherwise>
				        <xsl:choose>
					          <xsl:when test="$fLit=1">
						            <maction actiontype="lit">
							              <xsl:for-each select=".//m:t">
								                <xsl:call-template name="ParseMt">
									                  <xsl:with-param name="sToParse" select="text()"/>
									                  <xsl:with-param name="scr" select="../m:rPr[last()]/m:scr/@m:val"/>
									                  <xsl:with-param name="sty" select="../m:rPr[last()]/m:sty/@m:val"/>
									                  <xsl:with-param name="nor" select="../m:rPr[last()]/m:nor/@m:val"/>
								                </xsl:call-template>
							              </xsl:for-each>
						            </maction>
					          </xsl:when>
					          <xsl:otherwise>
						            <xsl:for-each select=".//m:t">
							              <xsl:call-template name="ParseMt">
								                <xsl:with-param name="sToParse" select="text()"/>
								                <xsl:with-param name="scr" select="../m:rPr[last()]/m:scr/@m:val"/>
								                <xsl:with-param name="sty" select="../m:rPr[last()]/m:sty/@m:val"/>
								                <xsl:with-param name="nor" select="../m:rPr[last()]/m:nor/@m:val"/>
							              </xsl:call-template>
						            </xsl:for-each>
					          </xsl:otherwise>
				        </xsl:choose>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>


	  <xsl:template name="CreateTokenAttributes">
		    <xsl:param name="scr"/>
		    <xsl:param name="sty"/>
		    <xsl:param name="nor"/>
		    <xsl:param name="nCharToPrint"/>
		    <xsl:param name="sTokenType"/>
		    <xsl:variable name="sLowerCaseNor"
                    select="translate($nor, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                                               'abcdefghijklmnopqrstuvwxyz')"/>
		    <xsl:choose>
			      <xsl:when test="$sLowerCaseNor = 'on'">
				        <xsl:attribute name="mathvariant">normal</xsl:attribute>
			      </xsl:when>
			      <xsl:otherwise>
				        <xsl:variable name="mathvariant">
					          <xsl:choose>
						<!-- numbers don't care -->
						<xsl:when test="$sTokenType='mn'"/>

						            <xsl:when test="$scr='monospace'">monospace</xsl:when>
						            <xsl:when test="$scr='sans-serif' and $sty='i'">sans-serif-italic</xsl:when>
						            <xsl:when test="$scr='sans-serif' and $sty='b'">bold-sans-serif</xsl:when>
						            <xsl:when test="$scr='sans-serif' and $sty='bi'">sans-serif-bold-italic</xsl:when>
						            <xsl:when test="$scr='sans-serif'">sans-serif</xsl:when>
						            <xsl:when test="$scr='fraktur' and $sty='b'">bold-fraktur</xsl:when>
						            <xsl:when test="$scr='fraktur'">fraktur</xsl:when>
						            <xsl:when test="$scr='double-struck'">double-struck</xsl:when>
						            <xsl:when test="$scr='script' and $sty='b'">bold-script</xsl:when>
						            <xsl:when test="$scr='script'">script</xsl:when>
						            <xsl:when test="($scr='roman' or not($scr) or $scr='') and $sty='b'">bold</xsl:when>
						            <xsl:when test="($scr='roman' or not($scr) or $scr='') and $sty='i'">italic</xsl:when>
						            <xsl:when test="($scr='roman' or not($scr) or $scr='') and $sty='p'">normal</xsl:when>
						            <xsl:when test="($scr='roman' or not($scr) or $scr='') and $sty='bi'">bold-italic</xsl:when>
						            <xsl:otherwise/>
					          </xsl:choose>
				        </xsl:variable>
				        <xsl:variable name="fontweight">
					          <xsl:choose>
						            <xsl:when test="$sty='b' or $sty='bi'">bold</xsl:when>
						            <xsl:otherwise>normal</xsl:otherwise>
					          </xsl:choose>
				        </xsl:variable>
				        <xsl:variable name="fontstyle">
					          <xsl:choose>
						            <xsl:when test="$sty='p' or $sty='b'">normal</xsl:when>
						            <xsl:otherwise>italic</xsl:otherwise>
					          </xsl:choose>
				        </xsl:variable>

				        <!-- Writing of attributes begins here -->
				<xsl:choose>
					<!-- Don't write mathvariant for operators unless they want to be normal -->
					<xsl:when test="$sTokenType='mo' and $mathvariant!='normal'"/>

					          <!-- A single character within an mi is already italics, don't write -->
					<xsl:when test="$sTokenType='mi' and $nCharToPrint=1 and ($mathvariant='' or $mathvariant='italic')"/>

					          <xsl:when test="$sTokenType='mi' and $nCharToPrint &gt; 1 and ($mathvariant='' or $mathvariant='italic')">
						            <xsl:attribute name="mathvariant">
							              <xsl:value-of select="'italic'"/>
						            </xsl:attribute>
					          </xsl:when>
					          <xsl:when test="$mathvariant!='italic' and $mathvariant!=''">
						            <xsl:attribute name="mathvariant">
							              <xsl:value-of select="$mathvariant"/>
						            </xsl:attribute>
					          </xsl:when>
					          <xsl:otherwise>
						            <xsl:if test="not($sTokenType='mi' and $nCharToPrint=1) and $fontstyle='italic'">
							              <xsl:attribute name="fontstyle">italic</xsl:attribute>
						            </xsl:if>
						            <xsl:if test="$fontweight='bold'">
							              <xsl:attribute name="fontweight">bold</xsl:attribute>
						            </xsl:if>
					          </xsl:otherwise>
				        </xsl:choose>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>

	  <xsl:template match="m:eqArr">
		    <mtable>
			      <xsl:for-each select="m:e">
				        <mtr>
					          <mtd>
						            <xsl:choose>
							              <xsl:when test="m:argPr[last()]/m:scrLvl/@m:val!='0' or                   not(m:argPr[last()]/m:scrLvl/@m:val)  or                   m:argPr[last()]/m:scrLvl/@m:val=''">
								                <mrow>
									                  <maligngroup/>
									                  <xsl:call-template name="CreateEqArrRow">
										                    <xsl:with-param name="align" select="1"/>
										                    <xsl:with-param name="ndCur" select="*[1]"/>
									                  </xsl:call-template>
								                </mrow>
							              </xsl:when>
							              <xsl:otherwise>
								                <mstyle>
									                  <xsl:attribute name="scriptlevel">
										                    <xsl:value-of select="m:argPr[last()]/m:scrLvl/@m:val"/>
									                  </xsl:attribute>
									                  <maligngroup/>
									                  <xsl:call-template name="CreateEqArrRow">
										                    <xsl:with-param name="align" select="1"/>
										                    <xsl:with-param name="ndCur" select="*[1]"/>
									                  </xsl:call-template>
								                </mstyle>
							              </xsl:otherwise>
						            </xsl:choose>
					          </mtd>
				        </mtr>
			      </xsl:for-each>
		    </mtable>
	  </xsl:template>

	  <xsl:template name="CreateEqArrRow">
		    <xsl:param name="align"/>
		    <xsl:param name="ndCur"/>
		    <xsl:variable name="sAllMt">
			      <xsl:for-each select="$ndCur/m:t">
				        <xsl:value-of select="."/>
			      </xsl:for-each>
		    </xsl:variable>
		    <xsl:choose>
			      <xsl:when test="$ndCur/self::m:r">
				        <xsl:call-template name="ParseEqArrMr">
					          <xsl:with-param name="sToParse" select="$sAllMt"/>
					          <xsl:with-param name="scr" select="../m:rPr[last()]/m:scr/@m:val"/>
					          <xsl:with-param name="sty" select="../m:rPr[last()]/m:sty/@m:val"/>
					          <xsl:with-param name="nor" select="../m:rPr[last()]/m:nor/@m:val"/>
					          <xsl:with-param name="align" select="$align"/>
				        </xsl:call-template>
			      </xsl:when>
			      <xsl:otherwise>
				        <xsl:apply-templates select="$ndCur"/>
			      </xsl:otherwise>
		    </xsl:choose>
		    <xsl:if test="count($ndCur/following-sibling::*) &gt; 0">
			      <xsl:variable name="cAmp">
				        <xsl:call-template name="CountAmp">
					          <xsl:with-param name="sAllMt" select="$sAllMt"/>
					          <xsl:with-param name="cAmp" select="0"/>
				        </xsl:call-template>
			      </xsl:variable>
			      <xsl:call-template name="CreateEqArrRow">
				        <xsl:with-param name="align" select="($align+($cAmp mod 2)) mod 2"/>
				        <xsl:with-param name="ndCur" select="$ndCur/following-sibling::*[1]"/>
			      </xsl:call-template>
		    </xsl:if>
	  </xsl:template>

	  <xsl:template name="CountAmp">
		    <xsl:param name="sAllMt"/>
		    <xsl:param name="cAmp"/>
		    <xsl:choose>
			      <xsl:when test="string-length(substring-after($sAllMt, '&amp;')) &gt; 0 or                     substring($sAllMt, string-length($sAllMt))='&amp;'">
				        <xsl:call-template name="CountAmp">
					          <xsl:with-param name="sAllMt" select="substring-after($sAllMt, '&amp;')"/>
					          <xsl:with-param name="cAmp" select="$cAmp+1"/>
				        </xsl:call-template>
			      </xsl:when>
			      <xsl:otherwise>
				        <xsl:value-of select="$cAmp"/>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>

	  <!-- %%Template: ParseEqArrMr
			
			Similar to ParseMt, but this one has to do more for an equation array. 
      In equation arrays &amp; is a special character which denotes alignment.
      
      The &amp; in an equation works by alternating between meaning insert alignment spacing
      and insert alignment mark.  For each equation in the equation array
      there is an implied align space at the beginning of the equation.  Within each equation,
      the first &amp; means alignmark, the second, align space, the third, alignmark, etc.
      
      For this reason when parsing m:r's in equation arrays it is important to keep track of what
      the next ampersand will mean.
      
      $align=0 => Omml's align space, which is similar to MathML's maligngroup.
      $align=1 => Omml's alignment mark, which is similar to MathML's malignmark.
	-->
	<xsl:template name="ParseEqArrMr">
		    <xsl:param name="sToParse"/>
		    <xsl:param name="sty"/>
		    <xsl:param name="scr"/>
		    <xsl:param name="nor"/>
		    <xsl:param name="align"/>

		    <xsl:if test="string-length($sToParse) &gt; 0">
			      <xsl:choose>
				        <xsl:when test="substring($sToParse,1,1) = '&amp;'">
					          <xsl:choose>
						            <xsl:when test="$align=0">
							              <maligngroup/>
						            </xsl:when>
						            <xsl:when test="$align=1">
							              <malignmark/>
						            </xsl:when>
					          </xsl:choose>
					          <xsl:call-template name="ParseEqArrMr">
						            <xsl:with-param name="sToParse" select="substring($sToParse,2)"/>
						            <xsl:with-param name="scr" select="$scr"/>
						            <xsl:with-param name="sty" select="$sty"/>
						            <xsl:with-param name="nor" select="$nor"/>
						            <xsl:with-param name="align">
							              <xsl:choose>
								                <xsl:when test="$align=1">0</xsl:when>
								                <xsl:otherwise>1</xsl:otherwise>
							              </xsl:choose>
						            </xsl:with-param>
					          </xsl:call-template>
				        </xsl:when>
				        <xsl:otherwise>
					          <xsl:variable name="sRepNumWith0">
						            <xsl:call-template name="SReplaceNumWithZero">
							              <xsl:with-param name="sToParse" select="$sToParse"/>
						            </xsl:call-template>
					          </xsl:variable>
					          <xsl:variable name="sRepOperWith-">
						            <xsl:call-template name="SReplaceOperWithMinus">
							              <xsl:with-param name="sToParse" select="$sRepNumWith0"/>
						            </xsl:call-template>
					          </xsl:variable>

					          <xsl:variable name="iFirstOper"
                             select="string-length($sRepOperWith-) - string-length(substring-after($sRepOperWith-, '-'))"/>
					          <xsl:variable name="iFirstNum"
                             select="string-length($sRepOperWith-) - string-length(substring-after($sRepOperWith-, '0'))"/>
					          <xsl:variable name="iFirstAmp"
                             select="string-length($sRepOperWith-) - string-length(substring-after($sRepOperWith-, '&amp;'))"/>
					          <xsl:variable name="fNumAtPos1">
						            <xsl:choose>
							              <xsl:when test="substring($sRepOperWith-,1,1)='0'">1</xsl:when>
							              <xsl:otherwise>0</xsl:otherwise>
						            </xsl:choose>
					          </xsl:variable>
					          <xsl:variable name="fOperAtPos1">
						            <xsl:choose>
							              <xsl:when test="substring($sRepOperWith-,1,1)='-'">1</xsl:when>
							              <xsl:otherwise>0</xsl:otherwise>
						            </xsl:choose>
					          </xsl:variable>
					          <xsl:choose>

						<!-- Case I: The string begins with neither a number, nor an operator -->
						<xsl:when test="$fNumAtPos1='0' and $fOperAtPos1='0'">
							              <mi>
								                <xsl:call-template name="CreateTokenAttributes">
									                  <xsl:with-param name="scr" select="$scr"/>
									                  <xsl:with-param name="sty" select="$sty"/>
									                  <xsl:with-param name="nor" select="$nor"/>
									                  <xsl:with-param name="nCharToPrint" select="1"/>
									                  <xsl:with-param name="sTokenType" select="'mi'"/>
								                </xsl:call-template>
								                <xsl:value-of select="substring($sToParse,1,1)"/>
							              </mi>
							              <xsl:call-template name="ParseEqArrMr">
								                <xsl:with-param name="sToParse" select="substring($sToParse, 2)"/>
								                <xsl:with-param name="scr" select="$scr"/>
								                <xsl:with-param name="sty" select="$sty"/>
								                <xsl:with-param name="nor" select="$nor"/>
								                <xsl:with-param name="align" select="$align"/>
							              </xsl:call-template>
						            </xsl:when>

						            <!-- Case II: There is an operator at position 1 -->
						<xsl:when test="$fOperAtPos1='1'">
							              <mo>
								                <xsl:call-template name="CreateTokenAttributes">
									                  <xsl:with-param name="scr"/>
									                  <xsl:with-param name="sty"/>
									                  <xsl:with-param name="nor" select="$nor"/>
									                  <xsl:with-param name="sTokenType" select="'mo'"/>
								                </xsl:call-template>
								                <xsl:value-of select="substring($sToParse,1,1)"/>
							              </mo>
							              <xsl:call-template name="ParseEqArrMr">
								                <xsl:with-param name="sToParse" select="substring($sToParse, 2)"/>
								                <xsl:with-param name="scr" select="$scr"/>
								                <xsl:with-param name="sty" select="$sty"/>
								                <xsl:with-param name="nor" select="$nor"/>
								                <xsl:with-param name="align" select="$align"/>
							              </xsl:call-template>
						            </xsl:when>

						            <!-- Case III: There is a number at position 1 -->
						<xsl:otherwise>
							              <xsl:variable name="sConsecNum">
								                <xsl:call-template name="SNumStart">
									                  <xsl:with-param name="sToParse" select="$sToParse"/>
									                  <xsl:with-param name="sPattern" select="$sRepNumWith0"/>
								                </xsl:call-template>
							              </xsl:variable>
							              <mn>
								                <xsl:call-template name="CreateTokenAttributes">
									                  <xsl:with-param name="scr"/>
									                  <xsl:with-param name="sty" select="'p'"/>
									                  <xsl:with-param name="nor" select="$nor"/>
									                  <xsl:with-param name="sTokenType" select="'mn'"/>
								                </xsl:call-template>
								                <xsl:value-of select="$sConsecNum"/>
							              </mn>
							              <xsl:call-template name="ParseEqArrMr">
								                <xsl:with-param name="sToParse" select="substring-after($sToParse, $sConsecNum)"/>
								                <xsl:with-param name="scr" select="$scr"/>
								                <xsl:with-param name="sty" select="$sty"/>
								                <xsl:with-param name="nor" select="$nor"/>
								                <xsl:with-param name="align" select="$align"/>
							              </xsl:call-template>
						            </xsl:otherwise>
					          </xsl:choose>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:if>
	  </xsl:template>

	  <!-- %%Template: ParseMt

			Produce a run of text. Technically, OMML makes no distinction 
			between numbers, operators, and other characters in a run. For 
			MathML we need to break these into mi, mn, or mo elements. 
			
			See also ParseEqArrMr
	-->
	<xsl:template name="ParseMt">
		    <xsl:param name="sToParse"/>
		    <xsl:param name="sty"/>
		    <xsl:param name="scr"/>
		    <xsl:param name="nor"/>
		    <xsl:if test="string-length($sToParse) &gt; 0">
			      <xsl:variable name="sRepNumWith0">
				        <xsl:call-template name="SReplaceNumWithZero">
					          <xsl:with-param name="sToParse" select="$sToParse"/>
				        </xsl:call-template>
			      </xsl:variable>
			      <xsl:variable name="sRepOperWith-">
				        <xsl:call-template name="SReplaceOperWithMinus">
					          <xsl:with-param name="sToParse" select="$sRepNumWith0"/>
				        </xsl:call-template>
			      </xsl:variable>

			      <xsl:variable name="iFirstOper"
                       select="string-length($sRepOperWith-) - string-length(substring-after($sRepOperWith-, '-'))"/>
			      <xsl:variable name="iFirstNum"
                       select="string-length($sRepOperWith-) - string-length(substring-after($sRepOperWith-, '0'))"/>
			      <xsl:variable name="fNumAtPos1">
				        <xsl:choose>
					          <xsl:when test="substring($sRepOperWith-,1,1)='0'">1</xsl:when>
					          <xsl:otherwise>0</xsl:otherwise>
				        </xsl:choose>
			      </xsl:variable>
			      <xsl:variable name="fOperAtPos1">
				        <xsl:choose>
					          <xsl:when test="substring($sRepOperWith-,1,1)='-'">1</xsl:when>
					          <xsl:otherwise>0</xsl:otherwise>
				        </xsl:choose>
			      </xsl:variable>

			      <xsl:choose>

				<!-- Case I: The string begins with neither a number, nor an operator -->
				<xsl:when test="$fOperAtPos1='0' and $fNumAtPos1='0'">
					          <xsl:variable name="nCharToPrint">
						            <xsl:choose>
							              <xsl:when test="ancestor::m:fName">
								                <xsl:choose>
									                  <xsl:when test="($iFirstOper=$iFirstNum) and             ($iFirstOper=string-length($sToParse)) and                        (substring($sRepOperWith-, string-length($sRepOperWith-))!='0') and                         (substring($sRepOperWith-, string-length($sRepOperWith-))!='-')">
										                    <xsl:value-of select="string-length($sToParse)"/>
									                  </xsl:when>
									                  <xsl:when test="$iFirstOper &lt; $iFirstNum">
										                    <xsl:value-of select="$iFirstOper - 1"/>
									                  </xsl:when>
									                  <xsl:otherwise>
										                    <xsl:value-of select="$iFirstNum - 1"/>
									                  </xsl:otherwise>
								                </xsl:choose>
							              </xsl:when>
							              <xsl:otherwise>1</xsl:otherwise>
						            </xsl:choose>
					          </xsl:variable>

					          <mi>
						            <xsl:call-template name="CreateTokenAttributes">
							              <xsl:with-param name="scr" select="$scr"/>
							              <xsl:with-param name="sty" select="$sty"/>
							              <xsl:with-param name="nor" select="$nor"/>
							              <xsl:with-param name="nCharToPrint" select="$nCharToPrint"/>
							              <xsl:with-param name="sTokenType" select="'mi'"/>
						            </xsl:call-template>
						            <xsl:value-of select="substring($sToParse, 1, $nCharToPrint)"/>
					          </mi>
					          <xsl:call-template name="ParseMt">
						            <xsl:with-param name="sToParse" select="substring($sToParse, $nCharToPrint+1)"/>
						            <xsl:with-param name="scr" select="$scr"/>
						            <xsl:with-param name="sty" select="$sty"/>
						            <xsl:with-param name="nor" select="$nor"/>
					          </xsl:call-template>
				        </xsl:when>

				        <!-- Case II: There is an operator at position 1 -->
				<xsl:when test="$fOperAtPos1='1'">
					          <mo>
						            <xsl:call-template name="CreateTokenAttributes">
							              <xsl:with-param name="scr"/>
							              <xsl:with-param name="sty"/>
							              <xsl:with-param name="nor" select="$nor"/>
							              <xsl:with-param name="sTokenType" select="'mo'"/>
						            </xsl:call-template>
						            <xsl:value-of select="substring($sToParse,1,1)"/>
					          </mo>
					          <xsl:call-template name="ParseMt">
						            <xsl:with-param name="sToParse" select="substring($sToParse, 2)"/>
						            <xsl:with-param name="scr" select="$scr"/>
						            <xsl:with-param name="sty" select="$sty"/>
						            <xsl:with-param name="nor" select="$nor"/>
					          </xsl:call-template>
				        </xsl:when>

				        <!-- Case III: There is a number at position 1 -->
				<xsl:otherwise>
					          <xsl:variable name="sConsecNum">
						            <xsl:call-template name="SNumStart">
							              <xsl:with-param name="sToParse" select="$sToParse"/>
							              <xsl:with-param name="sPattern" select="$sRepNumWith0"/>
						            </xsl:call-template>
					          </xsl:variable>
					          <mn>
						            <xsl:call-template name="CreateTokenAttributes">
							              <xsl:with-param name="scr" select="$scr"/>
							              <xsl:with-param name="sty" select="'p'"/>
							              <xsl:with-param name="nor" select="$nor"/>
							              <xsl:with-param name="sTokenType" select="'mn'"/>
						            </xsl:call-template>
						            <xsl:value-of select="$sConsecNum"/>
					          </mn>
					          <xsl:call-template name="ParseMt">
						            <xsl:with-param name="sToParse" select="substring-after($sToParse, $sConsecNum)"/>
						            <xsl:with-param name="scr" select="$scr"/>
						            <xsl:with-param name="sty" select="$sty"/>
						            <xsl:with-param name="nor" select="$nor"/>
					          </xsl:call-template>
				        </xsl:otherwise>
			      </xsl:choose>
		    </xsl:if>
	  </xsl:template>

	  <!-- %%Template: SNumStart 
	
		Return the longest substring of sToParse starting from the 
		start of sToParse that is a number. In addition, it takes the
		pattern string, which is sToParse with all of its numbers 
		replaced with a 0. sPattern should be the same length 
		as sToParse		
	-->
	<xsl:template name="SNumStart">
		    <xsl:param name="sToParse" select="''"/>
		    <!-- if we don't get anything, take the string itself -->
		<xsl:param name="sPattern" select="'$sToParse'"/>


		    <xsl:choose>
			<!-- the pattern says this is a number, recurse with the rest -->
			<xsl:when test="substring($sPattern, 1, 1) = '0'">
				        <xsl:call-template name="SNumStart">
					          <xsl:with-param name="sToParse" select="$sToParse"/>
					          <xsl:with-param name="sPattern" select="substring($sPattern, 2)"/>
				        </xsl:call-template>
			      </xsl:when>

			      <!-- the pattern says we've run out of numbers. Take as many
				characters from sToParse as we shaved off sPattern -->
			<xsl:otherwise>
				        <xsl:value-of select="substring($sToParse, 1, string-length($sToParse) - string-length($sPattern))"/>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>

	  <!-- %%Template SRepeatCharAcc
	
			The core of SRepeatChar with an accumulator. The current
			string is in param $acc, and we will double and recurse,
			if we're less than half of the required length or else just 
			add the right amount of characters to the accumulator and
			return
	-->
	<xsl:template name="SRepeatCharAcc">
		    <xsl:param name="cchRequired" select="1"/>
		    <xsl:param name="ch" select="'-'"/>
		    <xsl:param name="acc" select="$ch"/>

		    <xsl:variable name="cchAcc" select="string-length($acc)"/>
		    <xsl:choose>
			      <xsl:when test="(2 * $cchAcc) &lt; $cchRequired">
				        <xsl:call-template name="SRepeatCharAcc">
					          <xsl:with-param name="cchRequired" select="$cchRequired"/>
					          <xsl:with-param name="ch" select="$ch"/>
					          <xsl:with-param name="acc" select="concat($acc, $acc)"/>
				        </xsl:call-template>
			      </xsl:when>

			      <xsl:otherwise>
				        <xsl:value-of select="concat($acc, substring($acc, 1, $cchRequired - $cchAcc))"/>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>


	  <!-- %%Template SRepeatChar
	
			Generates a string nchRequired long by repeating the given character ch
	-->
	<xsl:template name="SRepeatChar">
		    <xsl:param name="cchRequired" select="1"/>
		    <xsl:param name="ch" select="'-'"/>

		    <xsl:call-template name="SRepeatCharAcc">
			      <xsl:with-param name="cchRequired" select="$cchRequired"/>
			      <xsl:with-param name="ch" select="$ch"/>
			      <xsl:with-param name="acc" select="$ch"/>
		    </xsl:call-template>
	  </xsl:template>

	  <!-- %%Template SReplaceOperWithMinus
	
		Go through the given string and replace every instance
		of an operator with a minus '-'. This helps quickly identify
		the first instance of an operator.  
	-->
	<xsl:template name="SReplaceOperWithMinus">
		    <xsl:param name="sToParse" select="''"/>

		    <xsl:value-of select="translate($sToParse, $sOperators, $sMinuses)"/>
	  </xsl:template>

	  <!-- %%Template SReplaceNumWithZero
	
		Go through the given string and replace every instance
		of an number with a zero '0'. This helps quickly identify
		the first occurence of a number. 
		
		Considers the '.' and ',' part of a number iff they are sandwiched 
		between two other numbers. 0.3 will be recognized as a number,
		x.3 will not be. Since these characters can also be an operator, this 
		should be called before SReplaceOperWithMinus.
	-->
	<xsl:template name="SReplaceNumWithZero">
		    <xsl:param name="sToParse" select="''"/>

		    <!-- First do a simple replace. Numbers will all be come 0's.
			After this point, the pattern involving the . or , that 
			we are looking for will become 0.0 or 0,0 -->
		<xsl:variable name="sSimpleReplace" select="translate($sToParse, $sNumbers, $sZeros)"/>

		    <!-- And then, replace 0.0 with just 000. This means that the . will 
			become part of the number -->
		<xsl:variable name="sReplacePeriod">
			      <xsl:call-template name="SReplace">
				        <xsl:with-param name="sInput" select="$sSimpleReplace"/>
				        <xsl:with-param name="sOrig" select="'0.0'"/>
				        <xsl:with-param name="sReplacement" select="'000'"/>
			      </xsl:call-template>
		    </xsl:variable>

		    <!-- And then, replace 0,0 with just 000. This means that the , will 
			become part of the number -->
		<xsl:call-template name="SReplace">
			      <xsl:with-param name="sInput" select="$sReplacePeriod"/>
			      <xsl:with-param name="sOrig" select="'0,0'"/>
			      <xsl:with-param name="sReplacement" select="'000'"/>
		    </xsl:call-template>
	  </xsl:template>

	  <!-- Template to translate Word's borderBox properties into the menclose notation attribute
       The initial call to this SHOULD NOT pass an sAttribute.  Subsequent calls to 
       CreateMencloseNotationAttrFromBorderBoxAttr by CreateMencloseNotationAttrFromBorderBoxAttr will
       update the sAttribute as appropriate.
       
       CreateMencloseNotationAttrFromBorderBoxAttr looks at each attribute (fHideTop, fHideBot, etc.) one at a time
       in the order they are listed and passes a modified sAttribute to CreateMencloseNotationAttrFromBorderBoxAttr.
       Each successive call to CreateMencloseNotationAttrFromBorderBoxAttr knows which attribute to look at because 
       the previous call should have omitted passing the attribute it just analyzed.  This is why as you read lower 
       and lower in the template that each call to CreateMencloseNotationAttrFromBorderBoxAttr has fewer and fewer attributes.
       -->
	<xsl:template name="CreateMencloseNotationAttrFromBorderBoxAttr">
		    <xsl:param name="fHideTop"/>
		    <xsl:param name="fHideBot"/>
		    <xsl:param name="fHideLeft"/>
		    <xsl:param name="fHideRight"/>
		    <xsl:param name="fStrikeH"/>
		    <xsl:param name="fStrikeV"/>
		    <xsl:param name="fStrikeBLTR"/>
		    <xsl:param name="fStrikeTLBR"/>
		    <xsl:param name="sAttribute"/>

		    <xsl:choose>
			      <xsl:when test="string-length($sAttribute) = 0">
				        <xsl:choose>
					          <xsl:when test="string-length($fHideTop) &gt; 0                       and string-length($fHideBot) &gt; 0                        and string-length($fHideLeft) &gt; 0                       and string-length($fHideRight) &gt; 0">

						            <xsl:choose>
							              <xsl:when test="$fHideTop = 0                                and $fHideBot = 0                               and $fHideLeft = 0                                and $fHideRight = 0">
								<!-- We can use 'box' instead of top, bot, left, and right.  Therefore,
                  replace sAttribute with 'box' and begin analyzing params fStrikeH
                  and below. -->
								<xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fStrikeH" select="$fStrikeH"/>
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute">
										                    <xsl:text>box</xsl:text>
									                  </xsl:with-param>
								                </xsl:call-template>
							              </xsl:when>
							              <xsl:otherwise>
								<!-- Can't use 'box', theremore, must analyze all attributes -->
								<xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fHideTop" select="$fHideTop"/>
									                  <xsl:with-param name="fHideBot" select="$fHideBot"/>
									                  <xsl:with-param name="fHideLeft" select="$fHideLeft"/>
									                  <xsl:with-param name="fHideRight" select="$fHideRight"/>
									                  <xsl:with-param name="fStrikeH" select="$fStrikeH"/>
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute">
										<!-- Assume using all four (left right top bottom).  Subsequent calls
                         will remove the sides which aren't to be includes. -->
										<xsl:text>left right top bottom</xsl:text>
									                  </xsl:with-param>
								                </xsl:call-template>
							              </xsl:otherwise>
						            </xsl:choose>
					          </xsl:when>
				        </xsl:choose>
			      </xsl:when>
			      <xsl:otherwise>
				        <xsl:choose>
					          <xsl:when test="string-length($fHideTop) &gt; 0">
						            <xsl:choose>
							              <xsl:when test="$fHideTop=1">
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fHideBot" select="$fHideBot"/>
									                  <xsl:with-param name="fHideLeft" select="$fHideLeft"/>
									                  <xsl:with-param name="fHideRight" select="$fHideRight"/>
									                  <xsl:with-param name="fStrikeH" select="$fStrikeH"/>
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute">
										                    <xsl:call-template name="SReplace">
											                      <xsl:with-param name="sInput" select="$sAttribute"/>
											                      <xsl:with-param name="sOrig" select="'top'"/>
											                      <xsl:with-param name="sReplacement" select="''"/>
										                    </xsl:call-template>
									                  </xsl:with-param>
								                </xsl:call-template>
							              </xsl:when>
							              <xsl:otherwise>
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fHideBot" select="$fHideBot"/>
									                  <xsl:with-param name="fHideLeft" select="$fHideLeft"/>
									                  <xsl:with-param name="fHideRight" select="$fHideRight"/>
									                  <xsl:with-param name="fStrikeH" select="$fStrikeH"/>
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute" select="$sAttribute"/>
								                </xsl:call-template>
							              </xsl:otherwise>
						            </xsl:choose>
					          </xsl:when>
					          <xsl:when test="string-length($fHideBot) &gt; 0">
						            <xsl:choose>
							              <xsl:when test="$fHideBot=1">
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fHideLeft" select="$fHideLeft"/>
									                  <xsl:with-param name="fHideRight" select="$fHideRight"/>
									                  <xsl:with-param name="fStrikeH" select="$fStrikeH"/>
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute">
										                    <xsl:call-template name="SReplace">
											                      <xsl:with-param name="sInput" select="$sAttribute"/>
											                      <xsl:with-param name="sOrig" select="'bottom'"/>
											                      <xsl:with-param name="sReplacement" select="''"/>
										                    </xsl:call-template>
									                  </xsl:with-param>
								                </xsl:call-template>
							              </xsl:when>
							              <xsl:otherwise>
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fHideLeft" select="$fHideLeft"/>
									                  <xsl:with-param name="fHideRight" select="$fHideRight"/>
									                  <xsl:with-param name="fStrikeH" select="$fStrikeH"/>
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute" select="$sAttribute"/>
								                </xsl:call-template>
							              </xsl:otherwise>
						            </xsl:choose>
					          </xsl:when>
					          <xsl:when test="string-length($fHideLeft) &gt; 0">
						            <xsl:choose>
							              <xsl:when test="$fHideLeft=1">
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fHideRight" select="$fHideRight"/>
									                  <xsl:with-param name="fStrikeH" select="$fStrikeH"/>
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute">
										                    <xsl:call-template name="SReplace">
											                      <xsl:with-param name="sInput" select="$sAttribute"/>
											                      <xsl:with-param name="sOrig" select="'left'"/>
											                      <xsl:with-param name="sReplacement" select="''"/>
										                    </xsl:call-template>
									                  </xsl:with-param>
								                </xsl:call-template>
							              </xsl:when>
							              <xsl:otherwise>
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fHideRight" select="$fHideRight"/>
									                  <xsl:with-param name="fStrikeH" select="$fStrikeH"/>
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute" select="$sAttribute"/>
								                </xsl:call-template>
							              </xsl:otherwise>
						            </xsl:choose>
					          </xsl:when>
					          <xsl:when test="string-length($fHideRight) &gt; 0">
						            <xsl:choose>
							              <xsl:when test="$fHideRight=1">
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fStrikeH" select="$fStrikeH"/>
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute">
										                    <xsl:call-template name="SReplace">
											                      <xsl:with-param name="sInput" select="$sAttribute"/>
											                      <xsl:with-param name="sOrig" select="'right'"/>
											                      <xsl:with-param name="sReplacement" select="''"/>
										                    </xsl:call-template>
									                  </xsl:with-param>
								                </xsl:call-template>
							              </xsl:when>
							              <xsl:otherwise>
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fStrikeH" select="$fStrikeH"/>
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute" select="$sAttribute"/>
								                </xsl:call-template>
							              </xsl:otherwise>
						            </xsl:choose>
					          </xsl:when>
					          <xsl:when test="string-length($fStrikeH) &gt; 0">
						            <xsl:choose>
							              <xsl:when test="$fStrikeH=1">
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute" select="concat($sAttribute, ' horizontalstrike')"/>
								                </xsl:call-template>
							              </xsl:when>
							              <xsl:otherwise>
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fStrikeV" select="$fStrikeV"/>
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute" select="$sAttribute"/>
								                </xsl:call-template>
							              </xsl:otherwise>
						            </xsl:choose>
					          </xsl:when>
					          <xsl:when test="string-length($fStrikeV) &gt; 0">
						            <xsl:choose>
							              <xsl:when test="$fStrikeV=1">
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute" select="concat($sAttribute, ' verticalstrike')"/>
								                </xsl:call-template>
							              </xsl:when>
							              <xsl:otherwise>
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fStrikeBLTR" select="$fStrikeBLTR"/>
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute" select="$sAttribute"/>
								                </xsl:call-template>
							              </xsl:otherwise>
						            </xsl:choose>
					          </xsl:when>
					          <xsl:when test="string-length($fStrikeBLTR) &gt; 0">
						            <xsl:choose>
							              <xsl:when test="$fStrikeBLTR=1">
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute" select="concat($sAttribute, ' updiagonalstrike')"/>
								                </xsl:call-template>
							              </xsl:when>
							              <xsl:otherwise>
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="fStrikeTLBR" select="$fStrikeTLBR"/>
									                  <xsl:with-param name="sAttribute" select="$sAttribute"/>
								                </xsl:call-template>
							              </xsl:otherwise>
						            </xsl:choose>
					          </xsl:when>
					          <xsl:when test="string-length($fStrikeTLBR) &gt; 0">
						            <xsl:choose>
							              <xsl:when test="$fStrikeTLBR=1">
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="sAttribute" select="concat($sAttribute, ' downdiagonalstrike')"/>
								                </xsl:call-template>
							              </xsl:when>
							              <xsl:otherwise>
								                <xsl:call-template name="CreateMencloseNotationAttrFromBorderBoxAttr">
									                  <xsl:with-param name="sAttribute" select="$sAttribute"/>
								                </xsl:call-template>
							              </xsl:otherwise>
						            </xsl:choose>
					          </xsl:when>
					          <xsl:otherwise>
						            <xsl:attribute name="notation">
							              <xsl:value-of select="normalize-space($sAttribute)"/>
						            </xsl:attribute>
					          </xsl:otherwise>
				        </xsl:choose>
			      </xsl:otherwise>
		    </xsl:choose>
	  </xsl:template>


	  <xsl:template name="checkDirectFormatting">
	    <xsl:if test="w:rPr/w:rFonts/@w:ascii and not(w:rPr/w:rFonts/@w:ascii='Cambria Math')">
	      <xsl:attribute name="fontfamily" select="w:rPr/w:rFonts/@w:ascii"/>
	    </xsl:if>
	    <xsl:choose>
	      <xsl:when test="w:rPr/w:b[not(@w:val='0')]">
		<xsl:attribute name="fontweight">bold</xsl:attribute>
	      </xsl:when>
	      <xsl:when test="w:rPr/w:b[@w:val='0']">
		<xsl:attribute name="fontweight">normal</xsl:attribute>
	      </xsl:when>
	    </xsl:choose>
	    <xsl:choose>
	      <xsl:when test="w:rPr/w:i[not(@w:val='0')]">
		<xsl:attribute name="fontstyle">italic</xsl:attribute>
	      </xsl:when>
	      <xsl:when test="w:rPr/w:i[@w:val='0']">
		<xsl:attribute name="fontstyle">upright</xsl:attribute>
	      </xsl:when>
	    </xsl:choose>
	  </xsl:template>
</xsl:stylesheet>`;async function vc(e){let t=new hc.default;await t.loadAsync(e);let n=t.file(`word/document.xml`);if(!n)return{buffer:e,mathMap:new Map};let r=await n.async(`string`),i=new DOMParser,a=i.parseFromString(r,`application/xml`),o=i.parseFromString(_c,`application/xml`),s=new XSLTProcessor;s.importStylesheet(o);let c=new Map,l=0,u=Array.from(a.getElementsByTagName(`m:oMath`));for(let e of u){let t=s.transformToFragment(e,document);if(t){let n=document.createElement(`div`);n.appendChild(t);let r=`<math xmlns="http://www.w3.org/1998/Math/MathML">${n.innerHTML}</math>`,i=`[[MATH_${l++}]]`;c.set(i,r);let o=`http://schemas.openxmlformats.org/wordprocessingml/2006/main`,s=a.createElementNS(o,`w:r`),u=a.createElementNS(o,`w:t`);u.textContent=i,s.appendChild(u),e.parentNode&&e.parentNode.replaceChild(s,e)}}let d=new XMLSerializer().serializeToString(a);return t.file(`word/document.xml`,d),{buffer:await t.generateAsync({type:`arraybuffer`}),mathMap:c}}async function yc(e){let{buffer:t,mathMap:n}=await vc(e);return gc.convertToHtml({arrayBuffer:t}).then(function(e){let t=e.value,r=e.messages;return console.log(`Mammoth messages:`,r),{html:t,mathMap:n}}).catch(function(e){throw console.error(`Error converting DOCX to HTML:`,e),e})}function bc(e){let t=new DOMParser().parseFromString(e,`text/html`),n=[],r=null,i=Array.from(t.body.querySelectorAll(`p, h1, h2, h3, h4, h5, h6, li, td`));for(let e=0;e<i.length;e++){let t=i[e],a=t.cloneNode(!0);a.querySelectorAll(`ol, ul`).forEach(e=>e.remove());let o=a.textContent.trim(),s=a.innerHTML.trim(),c=a.querySelector(`img`)!==null;if(!o&&!c)continue;let l=o.match(/^[\*\s]*\(?([a-zA-Z])[\.\)]\s+(.*)/),u=t.querySelector(`ol, ul`)!==null;if((l||t.tagName===`LI`&&!u)&&r){if(n.length===0&&r.options.length===0&&r._rawBlocks){let e=/^((Q|Question)\s*)?\d+[\.\:\)]?\s+/i,t=r._rawBlocks,n=-1;for(let r=0;r<t.length;r++){let i=t[r].plainText.replace(/<[^>]+>/g,``).trim();if(e.test(i)||t[r].tagName===`LI`){n=r;break}}if(n>0){let e=t.slice(n).map(e=>e.htmlContent);r.text=e.join(`<br/>`)}}let e=s;if(l){let t=o.substring(0,o.indexOf(l[2])),n=document.createElement(`div`);n.innerHTML=e;let r=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,null,!1).nextNode();if(r){let e=r.textContent.trim(),n=t.trim();e.startsWith(n)?r.textContent=r.textContent.replace(n,``).trimStart():e===n&&(r.textContent=``)}e=n.innerHTML}let i=!1;if(e.includes(`{{ANS}}`)?(i=!0,e=e.replace(`{{ANS}}`,``).trim()):o.includes(`{{ANS}}`)&&(i=!0),!i&&(i=t.querySelector(`strong`)!==null||t.querySelector(`b`)!==null||t.querySelector(`em`)!==null||o.includes(`*`),o.startsWith(`*`))){let t=document.createElement(`div`);t.innerHTML=e;let n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,null,!1).nextNode();n&&n.textContent.includes(`*`)&&(n.textContent=n.textContent.replace(`*`,``).trimStart()),e=t.innerHTML}r.options.push({text:e,isCorrect:i})}else r&&r.options.length>0&&(n.push(r),r=null),r?(r.text+=`<br/>`+s,r._rawBlocks.push({plainText:o,htmlContent:s,tagName:t.tagName})):r={id:`q_`+Math.random().toString(36).substr(2,9),text:s,options:[],_rawBlocks:[{plainText:o,htmlContent:s,tagName:t.tagName}]}}return r&&r.options.length>0&&n.push(r),n}var xc=s(((e,t)=>{(function(t,n){typeof define==`function`&&define.amd?define([],n):e===void 0?(n(),t.FileSaver={exports:{}}.exports):n()})(e,function(){function e(e,t){return t===void 0?t={autoBom:!1}:typeof t!=`object`&&(console.warn(`Deprecated: Expected third argument to be a object`),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function n(e,t,n){var r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){s(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function r(e){var t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{var t=document.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:void 0,o=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=a.saveAs||(typeof window!=`object`||window!==a?function(){}:`download`in HTMLAnchorElement.prototype&&!o?function(e,t,o){var s=a.URL||a.webkitURL,c=document.createElement(`a`);t=t||e.name||`download`,c.download=t,c.rel=`noopener`,typeof e==`string`?(c.href=e,c.origin===location.origin?i(c):r(c.href)?n(e,t,o):i(c,c.target=`_blank`)):(c.href=s.createObjectURL(e),setTimeout(function(){s.revokeObjectURL(c.href)},4e4),setTimeout(function(){i(c)},0))}:`msSaveOrOpenBlob`in navigator?function(t,a,o){if(a=a||t.name||`download`,typeof t!=`string`)navigator.msSaveOrOpenBlob(e(t,o),a);else if(r(t))n(t,a,o);else{var s=document.createElement(`a`);s.href=t,s.target=`_blank`,setTimeout(function(){i(s)})}}:function(e,t,r,i){if(i||=open(``,`_blank`),i&&(i.document.title=i.document.body.innerText=`downloading...`),typeof e==`string`)return n(e,t,r);var s=e.type===`application/octet-stream`,c=/constructor/i.test(a.HTMLElement)||a.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c||o)&&typeof FileReader<`u`){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),i?i.location.href=e:location=e,i=null},u.readAsDataURL(e)}else{var d=a.URL||a.webkitURL,f=d.createObjectURL(e);i?i.location=f:location.href=f,i=null,setTimeout(function(){d.revokeObjectURL(f)},4e4)}});a.saveAs=s.saveAs=s,t!==void 0&&(t.exports=s)})}))(),Sc=`<?xml version = "1.0" encoding = "UTF-8"?>\r
<!--\r
	IPR, License and Distribution Notices\r
	This machine readable file is derived from IMS specification IMS Content Packaging XML Binding v1.1.4\r
	found at http://www.imsglobal.org/content/packaging/ and the original IMS schema binding or code base \r
	http://www.imsglobal.org/content/packaging/cpv1p1p4/imscp_bindv1p1p4.html.\r
	\r
	Recipients of this document are requested to submit, with their comments, notification of any relevant patent \r
	claims or other intellectual property rights of which they may be aware that might be infringed by the schema \r
	binding contained in this document.\r
	\r
	IMS takes no position regarding the validity or scope of any intellectual property or other rights that might be \r
	claimed to pertain to the implementation or use of the technology described in this document or the extent to \r
	which any license under such rights might or might not be available; neither does it represent that it has made \r
	any effort to identify any such rights. Information on IMS’s procedures with respect to rights in IMS specifications \r
	can be found at the IMS Intellectual Property Rights web page: http://www.imsglobal.org/ipr/imsipr_policyFinal.pdf.\r
	\r
	Copyright © IMS Global Learning Consortium 1999-2007. All Rights Reserved.\r
	\r
	License Notice for Users\r
	Users of products or services that include this document are hereby granted a worldwide, royalty-free, \r
	non-exclusive license to use this document.\r
	\r
	Distribution Notice for Developers\r
	Developers of products or services that provide distribution of this document as is or with modifications are \r
	required to register with the IMS community on the IMS website as described in the following two paragraphs:\r
	\r
	- If you wish to distribute this document as is, with no modifications, you are hereby granted permission to copy, \r
	display and distribute the contents of this document in any medium for any purpose without fee or royalty provided \r
	that you include this IPR, License and Distribution notice in its entirety on ALL copies, or portions thereof, that you \r
	make and you complete a valid license registration with IMS and receive an email from IMS granting the license. \r
	To register, follow the instructions on the IMS website: http://www.imsglobal.org/specificationdownload.cfm. Once \r
	registered you are granted permission to transfer unlimited distribution rights of this document for the purposes \r
	of third-party or other distribution of your product or service that incorporates this document as long as this IPR, \r
	License and Distribution notice remains in place in its entirety.\r
	\r
	- If you wish to create and distribute a derived work from this document, you are hereby granted permission to copy, \r
	display and distribute the contents of the derived work in any medium for any purpose without fee or royalty provided \r
	that you include this IPR, License and Distribution notice in its entirety on ALL copies, or portions thereof, that you \r
	make and you complete a valid profile registration with IMS and receive an email from IMS granting the license. To \r
	register, follow the instructions on the IMS website: http://www.imsglobal.org/profile/. Once registered you are \r
	granted permission to transfer unlimited distribution rights of the derived work for the purposes of third-party or \r
	other distribution of your product or service that incorporates the derived work as long as this IPR, License and \r
	Distribution notice remains in place in its entirety.\r
	\r
	The limited permissions granted above are perpetual and will not be revoked by IMS or its successors or assigns.\r
	\r
	THIS SPECIFICATION IS BEING OFFERED WITHOUT ANY WARRANTY WHATSOEVER, AND IN PARTICULAR, \r
	ANY WARRANTY OF NONINFRINGEMENT IS EXPRESSLY DISCLAIMED. ANY USE OF THIS SPECIFICATION \r
	SHALL BE MADE ENTIRELY AT THE IMPLEMENTER’S OWN RISK, AND NEITHER THE CONSORTIUM, NOR \r
	ANY OF ITS MEMBERS OR SUBMITTERS, SHALL HAVE ANY LIABILITY WHATSOEVER TO ANY IMPLEMENTER \r
	OR THIRD PARTY FOR ANY DAMAGES OF ANY NATURE WHATSOEVER, DIRECTLY OR INDIRECTLY, ARISING \r
	FROM THE USE OF THIS SPECIFICATION.\r
-->\r
<!--Generated by Turbo XML 2.3.1.100. Conforms to w3c http://www.w3.org/2001/XMLSchema-->\r
<xsd:schema xmlns = "http://www.imsglobal.org/xsd/imscp_v1p1"\r
	 targetNamespace = "http://www.imsglobal.org/xsd/imscp_v1p1"\r
	 xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"\r
	 xmlns:xsd = "http://www.w3.org/2001/XMLSchema"\r
	 version = "IMS CP 1.1.4"\r
	 elementFormDefault = "qualified">\r
	<xsd:import namespace = "http://www.w3.org/XML/1998/namespace" schemaLocation = "http://www.w3.org/2001/xml.xsd"/>\r
\r
	<!-- ******************** -->\r
	\r
	\r
	<!-- ** Change History ** -->\r
	\r
	\r
	<!-- ******************** -->\r
	<xsd:annotation>\r
	<xsd:documentation xml:lang = "en">DRAFT XSD for IMS Content Packaging version 1.1 DRAFT                </xsd:documentation>\r
	<xsd:documentation> Copyright (c) 2001 IMS GLC, Inc.                                                    </xsd:documentation>\r
	<xsd:documentation>2000-04-21, Adjustments by T.D. Wason from CP 1.0.                                   </xsd:documentation>\r
	<xsd:documentation>2001-02-22, T.D.Wason: Modify for 2000-10-24 XML-Schema version.                     </xsd:documentation>\r
	<xsd:documentation> Modified to support extension.                                                      </xsd:documentation>\r
	<xsd:documentation>2001-03-12, T.D.Wason: Change filename, target and meta-data namespaces              </xsd:documentation>\r
	<xsd:documentation> and meta-data filename.                                                             </xsd:documentation>\r
	<xsd:documentation> Add meta-data to itemType, fileType and organizationType.                           </xsd:documentation>\r
	<xsd:documentation> Do not define namespaces for xml in XML instances generated from this xsd.          </xsd:documentation>\r
	<xsd:documentation> Imports IMS meta-data xsd, lower case element names.                                </xsd:documentation>\r
	<xsd:documentation> This XSD provides a reference to the IMS meta-data root element as imsmd:record     </xsd:documentation>\r
	<xsd:documentation> If the IMS meta-data is to be used in the XML instance then the instance            </xsd:documentation>\r
	<xsd:documentation> must definean IMS meta-data prefix with a namespace.                                </xsd:documentation>\r
	<xsd:documentation> The meta-data targetNamespace should be used.                                       </xsd:documentation>\r
	<xsd:documentation> </xsd:documentation>\r
	<xsd:documentation>2001-03-20, Thor Anderson: Remove manifestref, change resourceref back to            </xsd:documentation>\r
	<xsd:documentation> identifierref, change manifest back to contained by manifest.                       </xsd:documentation>\r
	<xsd:documentation> </xsd:documentation>\r
	<xsd:documentation> --Tom Wason: manifest may contain _none_ or more manifests.                         </xsd:documentation>\r
	<xsd:documentation>2001-04-13 Tom Wason: corrected attirbute name structure.  Was misnamed type.        </xsd:documentation>\r
	<xsd:documentation> </xsd:documentation>\r
	<xsd:documentation>2001-05-14 Schawn Thropp: Made all complexType extensible with the group.any         </xsd:documentation>\r
	<xsd:documentation> Added the anyAttribute to all complexTypes.                                         </xsd:documentation>\r
	<xsd:documentation> Changed the href attribute on the fileType and resourceType to xsd:string           </xsd:documentation>\r
	<xsd:documentation> Changed the maxLength of the href, identifierref, parameters, structure             </xsd:documentation>\r
	<xsd:documentation> attributes to match the Information model.                                          </xsd:documentation>\r
	<xsd:documentation> </xsd:documentation>\r
	<xsd:documentation>2001-07-25 Schawn Thropp: Changed the namespace for the Schema of Schemas to     </xsd:documentation>\r
	<xsd:documentation> the 5/2/2001 W3C XML Schema Recommendation.                                         </xsd:documentation>\r
	<xsd:documentation> attributeGroup attr.imsmd deleted, was not used anywhere.                           </xsd:documentation>\r
	<xsd:documentation> Any attribute declarations that have use = "default"                                </xsd:documentation>\r
	<xsd:documentation> changed to use="optional" - attr.structure.req.                                     </xsd:documentation>\r
	<xsd:documentation> Any attribute declarations that have value="somevalue" changed to                   </xsd:documentation>\r
	<xsd:documentation> default="somevalue" - attr.structure.req (hierarchical).                            </xsd:documentation>\r
	<xsd:documentation> Removed references to IMS MD Version 1.1.                                           </xsd:documentation>\r
	<xsd:documentation> Modified attribute group "attr.resourcetype.req" to change use from optional        </xsd:documentation>\r
	<xsd:documentation> to required to match the information model.  As a result the default value          </xsd:documentation>\r
	<xsd:documentation> also needed to be removed                                                           </xsd:documentation>\r
	<xsd:documentation> Name change for XSD.  Changed to match version of CP Spec                           </xsd:documentation>\r
	<xsd:documentation> </xsd:documentation>\r
	<xsd:documentation> 2001-11-04 Chris Moffatt:                                                           </xsd:documentation>\r
	<xsd:documentation>  1. Refer to the xml namespace using the "x" abbreviation instead of "xml".         </xsd:documentation>\r
	<xsd:documentation>     This changes enables the schema to work with commercial XML Tools               </xsd:documentation>\r
	<xsd:documentation>  2. Revert to original IMS CP version 1.1 namespace.                                </xsd:documentation>\r
	<xsd:documentation>     i.e. "http://www.imsglobal.org/xsd/imscp_v1p1"                                  </xsd:documentation>\r
	<xsd:documentation>     This change done to support the decision to only change the XML namespace with  </xsd:documentation>\r
	<xsd:documentation>     major revisions of the specification i.e. where the information model or binding</xsd:documentation>\r
	<xsd:documentation>     changes (as opposed to addressing bugs or omissions). A stable namespace is     </xsd:documentation>\r
	<xsd:documentation>     necessary to the increasing number of implementors.                             </xsd:documentation>\r
	<xsd:documentation>  3. Changed name of schema file to "imscp_v1p1p3.xsd" and                           </xsd:documentation>\r
	<xsd:documentation>     version attribute to "IMS CP 1.1.3" to reflect minor version change             </xsd:documentation>\r
	<xsd:documentation>       </xsd:documentation>\r
	<xsd:documentation>2003-03-21 Schawn Thropp                                                             </xsd:documentation>\r
	<xsd:documentation>The following updates were made to the Version 1.1.3 "Public Draft" version:         </xsd:documentation>\r
	<xsd:documentation>  1. Updated name of schema file (imscp_v1p1.xsd) to match to IMS naming guideance   </xsd:documentation>\r
	<xsd:documentation>  2. Updated the import statement to reference the xml.xsd found at                  </xsd:documentation>\r
	<xsd:documentation>       "http://www.w3.org/2001/03/xml.xsd".  This is the current W3C schema          </xsd:documentation>\r
	<xsd:documentation>        recommended by the W3C to reference.                                         </xsd:documentation>\r
	<xsd:documentation>  3. Removed all maxLength's facets.  The maxLength facets was an incorrect binding  </xsd:documentation>\r
	<xsd:documentation>     implementation.  These lengths were supposed, according to the information      </xsd:documentation>\r
	<xsd:documentation>     model, to be treated as smallest permitted maximums.                            </xsd:documentation>\r
	<xsd:documentation>  4. Added the variations content model to support the addition in the information   </xsd:documentation>\r
	<xsd:documentation>     model.                                                                          </xsd:documentation>\r
	<xsd:documentation>            </xsd:documentation>\r
	<xsd:documentation> 2004-09-14 Alex Jackl, IMS Global:                                                           </xsd:documentation>\r
	<xsd:documentation>  1. Added "xmlns:xsi" declaration                    </xsd:documentation>\r
	<xsd:documentation>  2. Changed elementFormDefault to "qualified"           </xsd:documentation>\r
	<xsd:documentation>  3. Changed version attribute to "IMS CP 1.1.4" to reflect minor version change             </xsd:documentation>\r
	 <xsd:documentation>  4. Changed Process Content Values to "lax" from "strict"            </xsd:documentation>\r
	 <xsd:documentation>  5. Added attribute extension to  metadataType        </xsd:documentation>	 \r
	<xsd:documentation>  6. Corrected documentation title placement     </xsd:documentation>	\r
	<xsd:documentation>  7. Changed xsd namespace schema location from "http://www.w3.org/2001/03/xml.xsd" to "http://www.w3.org/2001/xml.xsd" </xsd:documentation>\r
	<xsd:documentation>  8. Changed item multiplicity to "1 to many"</xsd:documentation>\r
		\r
	</xsd:annotation>\r
\r
	<!-- ******************** -->\r
	\r
	\r
	<!-- ** Attribute Declarations** -->\r
	\r
	\r
	<!-- ******************** -->\r
\r
	<xsd:attributeGroup name = "attr.base">\r
		<xsd:attribute ref = "xml:base"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.default">\r
		<xsd:attribute name = "default" type = "xsd:IDREF"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.href">\r
		<xsd:attribute name = "href" type = "xsd:anyURI"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.href.req">\r
		<xsd:attribute name = "href" use = "required" type = "xsd:anyURI"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.identifier.req">\r
		<xsd:attribute name = "identifier" use = "required" type = "xsd:ID"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.identifier">\r
		<xsd:attribute name = "identifier" type = "xsd:ID"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.isvisible">\r
		<xsd:attribute name = "isvisible" type = "xsd:boolean"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.parameters">\r
		<xsd:attribute name = "parameters" type = "xsd:string"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.identifierref">\r
		<xsd:attribute name = "identifierref" type = "xsd:string"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.identifierref.req">\r
		<xsd:attribute name = "identifierref" use = "required" type = "xsd:string"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.resourcetype.req">\r
		<xsd:attribute name = "type" use = "required" type = "xsd:string"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.structure.req">\r
		<xsd:attribute name = "structure" default = "hierarchical" type = "xsd:string"/>\r
	</xsd:attributeGroup>\r
	<xsd:attributeGroup name = "attr.version">\r
		<xsd:attribute name = "version" type = "xsd:string"/>\r
	</xsd:attributeGroup>\r
	<xsd:group name = "grp.any">\r
		<xsd:annotation>\r
		<xsd:documentation>Any namespaced element from any namespace may be included within an "any" element.  The namespace for the imported element must be defined in the instance, and the schema must be imported.  </xsd:documentation>\r
		</xsd:annotation>\r
		<xsd:sequence>\r
			<xsd:any namespace = "##other" processContents = "lax" minOccurs = "0" maxOccurs = "unbounded"/>\r
		</xsd:sequence>\r
	</xsd:group>\r
	\r
\r
	\r
	<!-- ************************** -->\r
	\r
	\r
	<!-- ** Element Declarations ** -->\r
	\r
	\r
	<!-- ************************** -->\r
	\r
	<xsd:element name = "dependency" type = "dependencyType"/>\r
	<xsd:element name = "file" type = "fileType"/>\r
	<xsd:element name = "item" type = "itemType"/>\r
	<xsd:element name = "manifest" type = "manifestType"/>\r
	<xsd:element name = "metadata" type = "metadataType"/>\r
	<xsd:element name = "organization" type = "organizationType"/>\r
	<xsd:element name = "organizations" type = "organizationsType"/>\r
	<xsd:element name = "resource" type = "resourceType"/>\r
	<xsd:element name = "resources" type = "resourcesType"/>\r
	<xsd:element name = "schema" type = "schemaType"/>\r
	<xsd:element name = "schemaversion" type = "schemaversionType"/>\r
	<xsd:element name = "title" type = "titleType"/>\r
	\r
	<!-- ******************* -->\r
	\r
	\r
	<!-- ** Complex Types ** -->\r
	\r
	\r
	<!-- ******************* -->\r
	\r
	\r
	<!-- **************** -->\r
	\r
	\r
	<!-- ** dependency ** -->\r
	\r
	\r
	<!-- **************** -->\r
	\r
	<xsd:complexType name = "dependencyType">\r
		<xsd:sequence>\r
			<xsd:group ref = "grp.any"/>\r
		</xsd:sequence>\r
		<xsd:attributeGroup ref = "attr.identifierref.req"/>\r
		<xsd:anyAttribute namespace = "##other" processContents = "strict"/>\r
	</xsd:complexType>\r
	\r
	<!-- ********** -->\r
	\r
	\r
	<!-- ** file ** -->\r
	\r
	\r
	<!-- ********** -->\r
	\r
	<xsd:complexType name = "fileType">\r
		<xsd:sequence>\r
			<xsd:element ref = "metadata" minOccurs = "0"/>\r
			<xsd:group ref = "grp.any"/>\r
		</xsd:sequence>\r
		<xsd:attributeGroup ref = "attr.href.req"/>\r
		<xsd:anyAttribute namespace = "##other" processContents = "lax"/>\r
	</xsd:complexType>\r
	\r
	<!-- ********** -->\r
	\r
	\r
	<!-- ** item ** -->\r
	\r
	\r
	<!-- ********** -->\r
	\r
	<xsd:complexType name = "itemType">\r
		<xsd:sequence>\r
			<xsd:element ref = "title" minOccurs = "0"/>\r
			<xsd:element ref = "item" minOccurs = "0" maxOccurs = "unbounded"/>\r
			<xsd:element ref = "metadata" minOccurs = "0"/>\r
			<xsd:group ref = "grp.any"/>\r
		</xsd:sequence>\r
		<xsd:attributeGroup ref = "attr.identifier.req"/>\r
		<xsd:attributeGroup ref = "attr.identifierref"/>\r
		<xsd:attributeGroup ref = "attr.isvisible"/>\r
		<xsd:attributeGroup ref = "attr.parameters"/>\r
		<xsd:anyAttribute namespace = "##other" processContents = "lax"/>\r
	</xsd:complexType>\r
	\r
	<!-- ************** -->\r
	\r
	\r
	<!-- ** manifest ** -->\r
	\r
	\r
	<!-- ************** -->\r
	\r
	<xsd:complexType name = "manifestType">\r
		<xsd:sequence>\r
			<xsd:element ref = "metadata" minOccurs = "0"/>\r
			<xsd:element ref = "organizations"/>\r
			<xsd:element ref = "resources"/>\r
			<xsd:element ref = "manifest" minOccurs = "0" maxOccurs = "unbounded"/>\r
			<xsd:group ref = "grp.any"/>\r
		</xsd:sequence>\r
		<xsd:attributeGroup ref = "attr.identifier.req"/>\r
		<xsd:attributeGroup ref = "attr.version"/>\r
		<xsd:attribute ref = "xml:base"/>\r
		<xsd:anyAttribute namespace = "##other" processContents = "lax"/>\r
	</xsd:complexType>\r
	\r
	<!-- ************** -->\r
	\r
	\r
	<!-- ** metadata ** -->\r
	\r
	\r
	<!-- ************** -->\r
	\r
	<xsd:complexType name = "metadataType">\r
		<xsd:sequence>\r
			<xsd:element ref = "schema" minOccurs = "0"/>\r
			<xsd:element ref = "schemaversion" minOccurs = "0"/>\r
			<xsd:group ref = "grp.any"/>\r
		</xsd:sequence>\r
		<xsd:anyAttribute namespace = "##other" processContents = "lax"/>\r
	</xsd:complexType>\r
	\r
	<!-- ******************* -->\r
	\r
	\r
	<!-- ** organizations ** -->\r
	\r
	\r
	<!-- ******************* -->\r
	\r
	<xsd:complexType name = "organizationsType">\r
		<xsd:sequence>\r
			<xsd:element ref = "organization" minOccurs = "0" maxOccurs = "unbounded"/>\r
			<xsd:group ref = "grp.any"/>\r
		</xsd:sequence>\r
		<xsd:attributeGroup ref = "attr.default"/>\r
		<xsd:anyAttribute namespace = "##other" processContents = "lax"/>\r
	</xsd:complexType>\r
	\r
	<!-- ****************** -->\r
	\r
	\r
	<!-- ** organization ** -->\r
	\r
	\r
	<!-- ****************** -->\r
	\r
	<xsd:complexType name = "organizationType">\r
		<xsd:sequence>\r
			<xsd:element ref = "title" minOccurs = "0"/>\r
			<xsd:element ref = "item" maxOccurs = "unbounded"/>\r
			<xsd:element ref = "metadata" minOccurs = "0"/>\r
			<xsd:group ref = "grp.any"/>\r
		</xsd:sequence>\r
		<xsd:attributeGroup ref = "attr.identifier.req"/>\r
		<xsd:attributeGroup ref = "attr.structure.req"/>\r
		<xsd:anyAttribute namespace = "##other" processContents = "lax"/>\r
	</xsd:complexType>\r
	\r
	<!-- *************** -->\r
	\r
	\r
	<!-- ** resources ** -->\r
	\r
	\r
	<!-- *************** -->\r
	\r
	<xsd:complexType name = "resourcesType">\r
		<xsd:sequence>\r
			<xsd:element ref = "resource" minOccurs = "0" maxOccurs = "unbounded"/>\r
			<xsd:group ref = "grp.any"/>\r
		</xsd:sequence>\r
		<xsd:attributeGroup ref = "attr.base"/>\r
		<xsd:anyAttribute namespace = "##other" processContents = "lax"/>\r
	</xsd:complexType>\r
	\r
	<!-- ************** -->\r
	\r
	\r
	<!-- ** resource ** -->\r
	\r
	\r
	<!-- ************** -->\r
	\r
	<xsd:complexType name = "resourceType">\r
		<xsd:sequence>\r
			<xsd:element ref = "metadata" minOccurs = "0"/>\r
			<xsd:element ref = "file" minOccurs = "0" maxOccurs = "unbounded"/>\r
			<xsd:element ref = "dependency" minOccurs = "0" maxOccurs = "unbounded"/>\r
			<xsd:group ref = "grp.any"/>\r
		</xsd:sequence>\r
		<xsd:attributeGroup ref = "attr.identifier.req"/>\r
		<xsd:attributeGroup ref = "attr.resourcetype.req"/>\r
		<xsd:attributeGroup ref = "attr.base"/>\r
		<xsd:attributeGroup ref = "attr.href"/>\r
		<xsd:anyAttribute namespace = "##other" processContents = "lax"/>\r
	</xsd:complexType>\r
	\r
	\r
	<!-- ****************** -->\r
	\r
	\r
	<!-- ** Simple Types ** -->\r
	\r
	\r
	<!-- ****************** -->\r
	\r
	<xsd:simpleType name = "schemaType">\r
		<xsd:restriction base = "xsd:string"/>\r
	</xsd:simpleType>\r
	<xsd:simpleType name = "schemaversionType">\r
		<xsd:restriction base = "xsd:string"/>\r
	</xsd:simpleType>\r
	<xsd:simpleType name = "titleType">\r
		<xsd:restriction base = "xsd:string"/>\r
	</xsd:simpleType>\r
\r
<!-- Copyright (2) 2004 IMS Global Learning Consortium, Inc. -->\r
	\r
</xsd:schema>`,Cc=`<?xml version="1.0" encoding="UTF-8"?>\r
<!-- edited with XMLSPY v5 rel. 3 U (http://www.xmlspy.com) by Karl (NA) -->\r
<xs:schema targetNamespace="http://www.imsglobal.org/xsd/imsmd_v1p2" xmlns:x="http://www.w3.org/XML/1998/namespace" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.imsglobal.org/xsd/imsmd_v1p2" xmlns:tsd="http://namespaces.softwareag.com/tamino/TaminoSchemaDefinition" xmlns:sql="urn:schemas-microsoft-com:mapping-schema" elementFormDefault="qualified" version="IMS MD 1.2.3">\r
	<xs:annotation>\r
		<xs:appinfo>\r
			<tsd:schemaInfo name="lom">\r
				<tsd:collection name="lom"/>\r
				<tsd:doctype name="lom">\r
					<tsd:logical>\r
						<tsd:content>closed</tsd:content>\r
					</tsd:logical>\r
				</tsd:doctype>\r
			</tsd:schemaInfo>\r
		</xs:appinfo>\r
	</xs:annotation>\r
	<xs:import namespace="http://www.w3.org/XML/1998/namespace" schemaLocation="ims_xml.xsd"/>\r
	<!-- ******************** -->\r
	<!-- ** Change History ** -->\r
	<!-- ******************** -->\r
	<xs:annotation>\r
		<xs:documentation>2001-04-26 T.D.Wason. IMS meta-data 1.2 XML-Schema.                                  </xs:documentation>\r
		<xs:documentation>2001-06-07 S.E.Thropp. Changed the multiplicity on all elements to match the         </xs:documentation>\r
		<xs:documentation>Final 1.2 Binding Specification.                                                     </xs:documentation>\r
		<xs:documentation>Changed all elements that use the langstringType to a multiplicy of 1 or more        </xs:documentation>\r
		<xs:documentation>Changed centity in the contribute element to have a multiplicity of 0 or more.       </xs:documentation>\r
		<xs:documentation>Changed the requirement element to have a multiplicity of 0 or more.                 </xs:documentation>\r
		<xs:documentation> 2001-07-25 Schawn Thropp.  Updates to bring the XSD up to speed with the W3C        </xs:documentation>\r
		<xs:documentation> XML Schema Recommendation.  The following changes were made: Change the             </xs:documentation>\r
		<xs:documentation> namespace to reference the 5/2/2001 W3C XML Schema Recommendation,the base          </xs:documentation>\r
		<xs:documentation> type for the durtimeType, simpleType, was changed from timeDuration to duration.    </xs:documentation>\r
		<xs:documentation> Any attribute declarations that have use="default" had to change to use="optional"  </xs:documentation>\r
		<xs:documentation> - attr.type.  Any attribute declarations that have value ="somevalue" had to change </xs:documentation>\r
		<xs:documentation> to default = "somevalue" - attr.type (URI)                                          </xs:documentation>\r
		<xs:documentation> 2001-09-04 Schawn Thropp                                                            </xs:documentation>\r
		<xs:documentation> Changed the targetNamespace and namespace of schema to reflect version change       </xs:documentation>\r
		<xs:documentation> 2001-11-04 Chris Moffatt:                                                           </xs:documentation>\r
		<xs:documentation>  1. Changes to enable the schema to work with commercial XML Tools                  </xs:documentation>\r
		<xs:documentation>     a. Refer to the xml namespace using the "x" abbreviation instead of "xml"       </xs:documentation>\r
		<xs:documentation>     b. Remove unecessary non-deterministic constructs from schema.                  </xs:documentation>\r
		<xs:documentation>        i.e. change occurrences of "#any" to "#other"                                </xs:documentation>\r
		<xs:documentation>  2. Revert to original IMS MD version 1.2 namespace.                                </xs:documentation>\r
		<xs:documentation>     i.e. "http://www.imsglobal.org/xsd/imsmd_v1p2"                                  </xs:documentation>\r
		<xs:documentation>     This change done to support the decision to only change the XML namespace with  </xs:documentation>\r
		<xs:documentation>     major revisions of the specification ie. where the information model or binding </xs:documentation>\r
		<xs:documentation>     changes (as opposed to addressing bugs or omissions). A stable namespace is     </xs:documentation>\r
		<xs:documentation>     necessary to the increasing number of implementors.                             </xs:documentation>\r
		<xs:documentation>  3. Changed name of schema file to "imsmd_v1p2p2.xsd" and                           </xs:documentation>\r
		<xs:documentation>     version attribute to "IMS MD 1.2.3" to reflect minor version change             </xs:documentation>\r
	</xs:annotation>\r
	<!-- *************************** -->\r
	<!-- ** Attribute Declaration ** -->\r
	<!-- *************************** -->\r
	<xs:attributeGroup name="attr.type">\r
		<xs:attribute name="type" use="optional" default="URI">\r
			<xs:simpleType>\r
				<xs:restriction base="xs:string">\r
					<xs:enumeration value="URI"/>\r
					<xs:enumeration value="TEXT"/>\r
				</xs:restriction>\r
			</xs:simpleType>\r
		</xs:attribute>\r
	</xs:attributeGroup>\r
	<xs:group name="grp.any">\r
		<xs:annotation>\r
			<xs:documentation>Any namespaced element from any namespace may be used for an &quot;any&quot; element.  The namespace for the imported element must be defined in the instance, and the schema must be imported.  </xs:documentation>\r
		</xs:annotation>\r
		<xs:sequence>\r
			<xs:any namespace="##other" processContents="strict" minOccurs="0" maxOccurs="unbounded"/>\r
		</xs:sequence>\r
	</xs:group>\r
	<!-- ************************* -->\r
	<!-- ** Element Declaration ** -->\r
	<!-- ************************* -->\r
	<xs:element name="aggregationlevel" type="aggregationlevelType"/>\r
	<xs:element name="annotation" type="annotationType"/>\r
	<xs:element name="catalogentry" type="catalogentryType"/>\r
	<xs:element name="catalog" type="catalogType"/>\r
	<xs:element name="centity" type="centityType"/>\r
	<xs:element name="classification" type="classificationType"/>\r
	<xs:element name="context" type="contextType"/>\r
	<xs:element name="contribute" type="contributeType"/>\r
	<xs:element name="copyrightandotherrestrictions" type="copyrightandotherrestrictionsType"/>\r
	<xs:element name="cost" type="costType"/>\r
	<xs:element name="coverage" type="coverageType"/>\r
	<xs:element name="date" type="dateType"/>\r
	<xs:element name="datetime" type="datetimeType"/>\r
	<xs:element name="description" type="descriptionType"/>\r
	<xs:element name="difficulty" type="difficultyType"/>\r
	<xs:element name="educational" type="educationalType"/>\r
	<xs:element name="entry" type="entryType"/>\r
	<xs:element name="format" type="formatType"/>\r
	<xs:element name="general" type="generalType"/>\r
	<xs:element name="identifier" type="xs:string"/>\r
	<xs:element name="intendedenduserrole" type="intendedenduserroleType"/>\r
	<xs:element name="interactivitylevel" type="interactivitylevelType"/>\r
	<xs:element name="interactivitytype" type="interactivitytypeType"/>\r
	<xs:element name="keyword" type="keywordType"/>\r
	<xs:element name="kind" type="kindType"/>\r
	<xs:element name="langstring" type="langstringType"/>\r
	<xs:element name="language" type="xs:string"/>\r
	<xs:element name="learningresourcetype" type="learningresourcetypeType"/>\r
	<xs:element name="lifecycle" type="lifecycleType"/>\r
	<xs:element name="location" type="locationType"/>\r
	<xs:element name="lom" type="lomType"/>\r
	<xs:element name="maximumversion" type="minimumversionType"/>\r
	<xs:element name="metadatascheme" type="metadataschemeType"/>\r
	<xs:element name="metametadata" type="metametadataType"/>\r
	<xs:element name="minimumversion" type="maximumversionType"/>\r
	<xs:element name="name" type="nameType"/>\r
	<xs:element name="purpose" type="purposeType"/>\r
	<xs:element name="relation" type="relationType"/>\r
	<xs:element name="requirement" type="requirementType"/>\r
	<xs:element name="resource" type="resourceType"/>\r
	<xs:element name="rights" type="rightsType"/>\r
	<xs:element name="role" type="roleType"/>\r
	<xs:element name="semanticdensity" type="semanticdensityType"/>\r
	<xs:element name="size" type="sizeType"/>\r
	<xs:element name="source" type="sourceType"/>\r
	<xs:element name="status" type="statusType"/>\r
	<xs:element name="structure" type="structureType"/>\r
	<xs:element name="taxon" type="taxonType"/>\r
	<xs:element name="taxonpath" type="taxonpathType"/>\r
	<xs:element name="technical" type="technicalType"/>\r
	<xs:element name="title" type="titleType"/>\r
	<xs:element name="type" type="typeType"/>\r
	<xs:element name="typicalagerange" type="typicalagerangeType"/>\r
	<xs:element name="typicallearningtime" type="typicallearningtimeType"/>\r
	<xs:element name="value" type="valueType"/>\r
	<xs:element name="person" type="personType"/>\r
	<xs:element name="vcard" type="xs:string"/>\r
	<xs:element name="version" type="versionType"/>\r
	<xs:element name="installationremarks" type="installationremarksType"/>\r
	<xs:element name="otherplatformrequirements" type="otherplatformrequirementsType"/>\r
	<xs:element name="duration" type="durationType"/>\r
	<xs:element name="id" type="idType"/>\r
	<!-- ******************* -->\r
	<!-- ** Complex Types ** -->\r
	<!-- ******************* -->\r
	<xs:complexType name="aggregationlevelType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="annotationType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="person" minOccurs="0"/>\r
			<xs:element ref="date" minOccurs="0"/>\r
			<xs:element ref="description" minOccurs="0"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="catalogentryType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="catalog"/>\r
			<xs:element ref="entry"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="centityType">\r
		<xs:sequence>\r
			<xs:element ref="vcard"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="classificationType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="purpose" minOccurs="0"/>\r
			<xs:element ref="taxonpath" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="description" minOccurs="0"/>\r
			<xs:element ref="keyword" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="contextType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="contributeType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="role"/>\r
			<xs:element ref="centity" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="date" minOccurs="0"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="copyrightandotherrestrictionsType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="costType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="coverageType">\r
		<xs:sequence>\r
			<xs:element ref="langstring" maxOccurs="unbounded"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="dateType">\r
		<xs:sequence>\r
			<xs:element ref="datetime" minOccurs="0"/>\r
			<xs:element ref="description" minOccurs="0"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="descriptionType">\r
		<xs:sequence>\r
			<xs:element ref="langstring" maxOccurs="unbounded"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="difficultyType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="durationType">\r
		<xs:sequence>\r
			<xs:element ref="datetime" minOccurs="0"/>\r
			<xs:element ref="description" minOccurs="0"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="educationalType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="interactivitytype" minOccurs="0"/>\r
			<xs:element ref="learningresourcetype" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="interactivitylevel" minOccurs="0"/>\r
			<xs:element ref="semanticdensity" minOccurs="0"/>\r
			<xs:element ref="intendedenduserrole" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="context" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="typicalagerange" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="difficulty" minOccurs="0"/>\r
			<xs:element ref="typicallearningtime" minOccurs="0"/>\r
			<xs:element ref="description" minOccurs="0"/>\r
			<xs:element ref="language" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="entryType">\r
		<xs:sequence>\r
			<xs:element ref="langstring" maxOccurs="unbounded"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="generalType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="identifier" minOccurs="0"/>\r
			<xs:element ref="title" minOccurs="0"/>\r
			<xs:element ref="catalogentry" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="language" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="description" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="keyword" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="coverage" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="structure" minOccurs="0"/>\r
			<xs:element ref="aggregationlevel" minOccurs="0"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="installationremarksType">\r
		<xs:sequence>\r
			<xs:element ref="langstring" maxOccurs="unbounded"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="intendedenduserroleType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="interactivitylevelType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="interactivitytypeType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="keywordType">\r
		<xs:sequence>\r
			<xs:element ref="langstring" maxOccurs="unbounded"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="kindType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="langstringType">\r
		<xs:simpleContent>\r
			<xs:extension base="xs:string">\r
				<xs:attribute ref="x:lang"/>\r
			</xs:extension>\r
		</xs:simpleContent>\r
	</xs:complexType>\r
	<xs:complexType name="learningresourcetypeType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="lifecycleType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="version" minOccurs="0"/>\r
			<xs:element ref="status" minOccurs="0"/>\r
			<xs:element ref="contribute" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="locationType">\r
		<xs:simpleContent>\r
			<xs:extension base="xs:string">\r
				<xs:attributeGroup ref="attr.type"/>\r
			</xs:extension>\r
		</xs:simpleContent>\r
	</xs:complexType>\r
	<xs:complexType name="lomType">\r
		<xs:sequence>\r
			<xs:element ref="general" minOccurs="0"/>\r
			<xs:element ref="lifecycle" minOccurs="0"/>\r
			<xs:element ref="metametadata" minOccurs="0"/>\r
			<xs:element ref="technical" minOccurs="0"/>\r
			<xs:element ref="educational" minOccurs="0"/>\r
			<xs:element ref="rights" minOccurs="0"/>\r
			<xs:element ref="relation" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="annotation" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="classification" minOccurs="0" maxOccurs="unbounded"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="metametadataType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="identifier" minOccurs="0"/>\r
			<xs:element ref="catalogentry" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="contribute" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="metadatascheme" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="language" minOccurs="0"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="nameType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="otherplatformrequirementsType">\r
		<xs:sequence>\r
			<xs:element ref="langstring" maxOccurs="unbounded"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="personType">\r
		<xs:sequence>\r
			<xs:element ref="vcard"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="purposeType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="relationType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="kind" minOccurs="0"/>\r
			<xs:element ref="resource" minOccurs="0"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="requirementType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="type" minOccurs="0"/>\r
			<xs:element ref="name" minOccurs="0"/>\r
			<xs:element ref="minimumversion" minOccurs="0"/>\r
			<xs:element ref="maximumversion" minOccurs="0"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="resourceType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="identifier" minOccurs="0"/>\r
			<xs:element ref="description" minOccurs="0"/>\r
			<xs:element ref="catalogentry" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="rightsType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="cost" minOccurs="0"/>\r
			<xs:element ref="copyrightandotherrestrictions" minOccurs="0"/>\r
			<xs:element ref="description" minOccurs="0"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="roleType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="semanticdensityType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="sourceType">\r
		<xs:sequence>\r
			<xs:element ref="langstring"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="statusType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="stringType">\r
		<xs:simpleContent>\r
			<xs:extension base="xs:string">\r
				<xs:attribute ref="x:lang"/>\r
			</xs:extension>\r
		</xs:simpleContent>\r
	</xs:complexType>\r
	<xs:complexType name="structureType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="taxonpathType">\r
		<xs:sequence>\r
			<xs:element ref="source" minOccurs="0"/>\r
			<xs:element ref="taxon" minOccurs="0"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="taxonType">\r
		<xs:sequence>\r
			<xs:element ref="id" minOccurs="0"/>\r
			<xs:element ref="entry" minOccurs="0"/>\r
			<xs:element ref="taxon" minOccurs="0"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="technicalType" mixed="true">\r
		<xs:sequence>\r
			<xs:element ref="format" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="size" minOccurs="0"/>\r
			<xs:element ref="location" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="requirement" minOccurs="0" maxOccurs="unbounded"/>\r
			<xs:element ref="installationremarks" minOccurs="0"/>\r
			<xs:element ref="otherplatformrequirements" minOccurs="0"/>\r
			<xs:element ref="duration" minOccurs="0"/>\r
			<xs:group ref="grp.any"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="titleType">\r
		<xs:sequence>\r
			<xs:element ref="langstring" maxOccurs="unbounded"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="typeType">\r
		<xs:sequence>\r
			<xs:element ref="source"/>\r
			<xs:element ref="value"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="typicalagerangeType">\r
		<xs:sequence>\r
			<xs:element ref="langstring" maxOccurs="unbounded"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="typicallearningtimeType">\r
		<xs:sequence>\r
			<xs:element ref="datetime" minOccurs="0"/>\r
			<xs:element ref="description" minOccurs="0"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="valueType">\r
		<xs:sequence>\r
			<xs:element ref="langstring"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<xs:complexType name="versionType">\r
		<xs:sequence>\r
			<xs:element ref="langstring" maxOccurs="unbounded"/>\r
		</xs:sequence>\r
	</xs:complexType>\r
	<!-- ****************** -->\r
	<!-- ** Simple Types ** -->\r
	<!-- ****************** -->\r
	<xs:simpleType name="formatType">\r
		<xs:restriction base="xs:string"/>\r
	</xs:simpleType>\r
	<xs:simpleType name="sizeType">\r
		<xs:restriction base="xs:int"/>\r
	</xs:simpleType>\r
	<xs:simpleType name="datetimeType">\r
		<xs:restriction base="xs:string"/>\r
	</xs:simpleType>\r
	<xs:simpleType name="idType">\r
		<xs:restriction base="xs:string"/>\r
	</xs:simpleType>\r
	<xs:simpleType name="metadataschemeType">\r
		<xs:restriction base="xs:string"/>\r
	</xs:simpleType>\r
	<xs:simpleType name="catalogType">\r
		<xs:restriction base="xs:string"/>\r
	</xs:simpleType>\r
	<xs:simpleType name="minimumversionType">\r
		<xs:restriction base="xs:string"/>\r
	</xs:simpleType>\r
	<xs:simpleType name="maximumversionType">\r
		<xs:restriction base="xs:string"/>\r
	</xs:simpleType>\r
</xs:schema>\r
`,wc=`<?xml version = "1.0" encoding = "UTF-8"?>
<xs:schema xmlns = "http://www.imsglobal.org/xsd/ims_qtiasiv1p2"
	 targetNamespace = "http://www.imsglobal.org/xsd/ims_qtiasiv1p2"
	 xmlns:xs = "http://www.w3.org/2001/XMLSchema"
	 version = "IMS QTI ASI 1.2.1"
	 elementFormDefault = "qualified">
	<xs:import namespace = "http://www.w3.org/XML/1998/namespace" schemaLocation = "http://www.w3.org/2001/xml.xsd"/>
	<xs:annotation>
		<xs:documentation>
			XSD Data File Information
			-------------------------
			Author:         Colin Smythe
			Date:           25th January, 2008
			Version:        1.0
			Status:         Draft
			Description:    This is the XSD for the IMS ASI Question and Test Interoperability v1.2.1 specification.
							This defines how questions (Items) and Tests (Assessments) are to be exchanged.  It
							includes the definition of the item, section, assessment and objectbank structures.
			
			History:        This is the first attempt to create the XSD description of the QTIv1.2.1 specification.
			
			Copyright:      2005-2008 (c) IMS Global Learning Consortium Inc.  All Rights Reserved.
							IMS Global Learning Consortium, Inc. (IMS GLC) is publishing the information
							contained in this binding ("Specification") for purposes of scientific
							experimental and scholarly collaboration only.  IMS GLC makes no warranty or 
							representation regarding the accuracy or completeness of the Specification.
							This material is provided on an "As Is" and "As Available basis".
							The Specification is at all times subject to change and revision without
							notice. It is your sole responsibility to evaluate the usefulness, accuracy
							and completeness of the Specification as it relates to you.  IMS GLC would
							appreciate receiving your comments and suggestions.  Please contact IMS GLC
							through our website at: http://www.imsglobal.org.	
		</xs:documentation>
	</xs:annotation>

	<!-- ****************** -->
	<!-- ** Root Element ** -->
	<!-- ****************** -->
	
	<xs:element name = "questestinterop" type = "questestinteropType"/>
	
	<!-- ************************** -->
	<!-- ** Element Declarations ** -->
	<!-- ************************** -->
	
	<xs:element name = "altmaterial" type = "altmaterialType"/>
	<xs:element name = "and" type = "andType"/>
	<xs:element name = "and_objects" type = "and_objectsType"/>
	<xs:element name = "and_selection" type = "and_selectionType"/>
	<xs:element name = "and_test" type = "and_testType"/>
	<xs:element name = "assessfeedback" type = "assessfeedbackType"/>
	<xs:element name = "assessment" type = "assessmentType"/>
	<xs:element name = "assessmentcontrol" type = "assessmentcontrolType"/>
	<xs:element name = "assessproc_extension" type = "assessproc_extensionType"/>
	<xs:element name = "conditionvar" type = "conditionvarType"/>
	<xs:element name = "decvar" type = "decvarType"/>
	<xs:element name = "displayfeedback" type = "displayfeedbackType"/>
	<xs:element name = "duration" type = "xs:string"/>
	<xs:element name = "durequal" type = "durequalType"/>
	<xs:element name = "durgt" type = "durgtType"/>
	<xs:element name = "durgte" type = "durgteType"/>
	<xs:element name = "durlt" type = "durltType"/>
	<xs:element name = "durlte" type = "durlteType"/>
	<xs:element name = "fieldentry" type = "xs:string"/>
	<xs:element name = "fieldlabel" type = "xs:string"/>
	<xs:element name = "flow" type = "flowType"/>
	<xs:element name = "flow_label" type = "flow_labelType"/>
	<xs:element name = "flow_mat" type = "flow_matType"/>
	<xs:element name = "hint" type = "hintType"/>
	<xs:element name = "hintmaterial" type = "hintmaterialType"/>
	<xs:element name = "interpretvar" type = "interpretvarType"/>
	<xs:element name = "item" type = "itemType"/>
	<xs:element name = "itemcontrol" type = "itemcontrolType"/>
	<xs:element name = "itemfeedback" type = "itemfeedbackType"/>
	<xs:element name = "itemmetadata" type = "itemmetadataType"/>
	<xs:element name = "itempostcondition" type = "xs:string"/>
	<xs:element name = "itemprecondition" type = "xs:string"/>
	<xs:element name = "itemproc_extension" type = "itemproc_extensionType"/>
	<xs:element name = "itemref" type = "itemrefType"/>
	<xs:element name = "itemrubric" type = "itemrubricType"/>
	<xs:element name = "map_input" type = "map_inputType"/>
	<xs:element name = "map_output" type = "map_outputType"/>
	<xs:element name = "mat_extension" type = "mat_extensionType"/>
	<xs:element name = "matapplet" type = "matappletType"/>
	<xs:element name = "matapplication" type = "matapplicationType"/>
	<xs:element name = "mataudio" type = "mataudioType"/>
	<xs:element name = "matbreak" type = "matbreakType"/>
	<xs:element name = "matemtext" type = "matemtextType"/>
	<xs:element name = "material" type = "materialType"/>
	<xs:element name = "material_ref" type = "material_refType"/>
	<xs:element name = "matimage" type = "matimageType"/>
	<xs:element name = "matref" type = "matrefType"/>
	<xs:element name = "mattext" type = "mattextType"/>
	<xs:element name = "matvideo" type = "matvideoType"/>
	<xs:element name = "not" type = "notType"/>
	<xs:element name = "not_objects" type = "not_objectsType"/>
	<xs:element name = "not_selection" type = "not_selectionType"/>
	<xs:element name = "not_test" type = "not_testType"/>
	<xs:element name = "objectbank" type = "objectbankType"/>
	<xs:element name = "objectives" type = "objectivesType"/>
	<xs:element name = "objects_condition" type = "objects_conditionType"/>
	<xs:element name = "objects_parameter" type = "objects_parameterType"/>
	<xs:element name = "objectscond_extension" type = "xs:string"/>
	<xs:element name = "or" type = "orType"/>
	<xs:element name = "or_objects" type = "or_objectsType"/>
	<xs:element name = "or_selection" type = "or_selectionType"/>
	<xs:element name = "or_test" type = "or_testType"/>
	<xs:element name = "order" type = "orderType"/>
	<xs:element name = "order_extension" type = "order_extensionType"/>
	<xs:element name = "other" type = "xs:string"/>
	<xs:element name = "outcomes" type = "outcomesType"/>
	<xs:element name = "outcomes_feedback_test" type = "outcomes_feedback_testType"/>
	<xs:element name = "outcomes_metadata" type = "outcomes_metadataType"/>
	<xs:element name = "outcomes_processing" type = "outcomes_processingType"/>
	<xs:element name = "presentation" type = "presentationType"/>
	<xs:element name = "presentation_material" type = "presentation_materialType"/>
	<xs:element name = "processing_parameter" type = "processing_parameterType"/>
	<xs:element name = "qmd_computerscored" type = "xs:string"/>
	<xs:element name = "qmd_feedbackpermitted" type = "xs:string"/>
	<xs:element name = "qmd_hintspermitted" type = "xs:string"/>
	<xs:element name = "qmd_itemtype" type = "xs:string"/>
	<xs:element name = "qmd_levelofdifficulty" type = "xs:string"/>
	<xs:element name = "qmd_material" type = "xs:string"/>
	<xs:element name = "qmd_maximumscore" type = "xs:string"/>
	<xs:element name = "qmd_renderingtype" type = "xs:string"/>
	<xs:element name = "qmd_responsetype" type = "xs:string"/>
	<xs:element name = "qmd_scoringpermitted" type = "xs:string"/>
	<xs:element name = "qmd_solutionspermitted" type = "xs:string"/>
	<xs:element name = "qmd_status" type = "xs:string"/>
	<xs:element name = "qmd_timedependence" type = "xs:string"/>
	<xs:element name = "qmd_timelimit" type = "xs:string"/>
	<xs:element name = "qmd_toolvendor" type = "xs:string"/>
	<xs:element name = "qmd_topic" type = "xs:string"/>
	<xs:element name = "qmd_typeofsolution" type = "xs:string"/>
	<xs:element name = "qmd_weighting" type = "xs:string"/>
	<xs:element name = "qticomment" type = "qticommentType"/>
	<xs:element name = "qtimetadata" type = "qtimetadataType"/>
	<xs:element name = "qtimetadatafield" type = "qtimetadatafieldType"/>
	<xs:element name = "reference" type = "referenceType"/>
	<xs:element name = "render_choice" type = "render_choiceType"/>
	<xs:element name = "render_fib" type = "render_fibType"/>
	<xs:element name = "render_hotspot" type = "render_hotspotType"/>
	<xs:element name = "render_slider" type = "render_sliderType"/>
	<xs:element name = "respcond_extension" type = "respcond_extensionType"/>
	<xs:element name = "respcondition" type = "respconditionType"/>
	<xs:element name = "render_extension" type = "render_extensionType"/>
	<xs:element name = "response_extension" type = "response_extensionType"/>
	<xs:element name = "response_grp" type = "response_grpType"/>
	<xs:element name = "response_labelType" type = "response_labelType"/>
	<xs:element name = "response_lid" type = "response_lidType"/>
	<xs:element name = "response_na" type = "response_naType"/>
	<xs:element name = "response_num" type = "response_numType"/>
	<xs:element name = "response_str" type = "response_strType"/>
	<xs:element name = "response_xy" type = "response_xyType"/>
	<xs:element name = "resprocessing" type = "resprocessingType"/>
	<xs:element name = "rubric" type = "rubricType"/>
	<xs:element name = "section" type = "sectionType"/>
	<xs:element name = "sectioncontrol" type = "sectioncontrolType"/>
	<xs:element name = "sectionfeedback" type = "sectionfeedbackType"/>
	<xs:element name = "sectionproc_extension" type = "sectionproc_extensionType"/>
	<xs:element name = "sectionpostcondition" type = "xs:string"/>
	<xs:element name = "sectionprecondition" type = "xs:string"/>
	<xs:element name = "sectionref" type = "sectionrefType"/>
	<xs:element name = "selection" type = "selectionType"/>
	<xs:element name = "selection_extension" type = "selection_extensionType"/>
	<xs:element name = "selection_metadata" type = "selection_metadataType"/>
	<xs:element name = "selection_number" type = "xs:string"/>
	<xs:element name = "selection_ordering" type = "selection_orderingType"/>
	<xs:element name = "sequence_parameter" type = "sequence_parameterType"/>
	<xs:element name = "setvar" type = "setvarType"/>
	<xs:element name = "solution" type = "solutionType"/>
	<xs:element name = "solutionmaterial" type = "solutionmaterialType"/>
	<xs:element name = "sourcebank_ref" type = "xs:string"/>
	<xs:element name = "test_variable" type = "test_variableType"/>
	<xs:element name = "unanswered" type = "unansweredType"/>
	<xs:element name = "var_extension" type = "var_extensionType"/>
	<xs:element name = "varequal" type = "varequalType"/>
	<xs:element name = "vargt" type = "vargtType"/>
	<xs:element name = "vargte" type = "vargteType"/>
	<xs:element name = "variable_test" type = "variable_testType"/>
	<xs:element name = "varinside" type = "varinsideType"/>
	<xs:element name = "varlt" type = "varltType"/>
	<xs:element name = "varlte" type = "varlteType"/>
	<xs:element name = "varsubset" type = "varsubsetType"/>
	<xs:element name = "varsubstring" type = "varsubstringType"/>
	<xs:element name = "vocabulary" type = "vocabularyType"/>
	
	<!-- ******************************* -->
	<!-- ** Complex Type Declarations ** -->
	<!-- ******************************* -->
		
	<!-- ***************** -->
	<!-- ** altmaterial ** -->
	<!-- ***************** -->
	
	<xs:complexType name = "altmaterialType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:choice maxOccurs = "unbounded">
				<xs:element name = "mattext" type = "mattextType"/>
				<xs:element name = "matemtext" type = "matemtextType"/>
				<xs:element name = "matimage" type = "matimageType"/>
				<xs:element name = "mataudio" type = "mataudioType"/>
				<xs:element name = "matvideo" type = "matvideoType"/>
				<xs:element name = "matapplet" type = "matappletType"/>
				<xs:element name = "matapplication" type = "matapplicationType"/>
				<xs:element name = "matref" type = "matrefType"/>
				<xs:element ref = "matbreak"/>
				<xs:element ref = "mat_extension"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute ref = "xml:lang"/>
	</xs:complexType>
	
	<!-- ********* -->	
	<!-- ** and ** -->	
	<!-- ********* -->
	
	<xs:complexType name = "andType">
		<xs:choice maxOccurs = "unbounded">
			<xs:element name = "not" type = "notType"/>
			<xs:element name = "and" type = "andType"/>
			<xs:element name = "or" type = "orType"/>
			<xs:element name = "unanswered" type = "unansweredType"/>
			<xs:element ref = "other"/>
			<xs:element name = "varequal" type = "varequalType"/>
			<xs:element name = "varlt" type = "varltType"/>
			<xs:element name = "varlte" type = "varlteType"/>
			<xs:element name = "vargt" type = "vargtType"/>
			<xs:element name = "vargte" type = "vargteType"/>
			<xs:element name = "varsubset" type = "varsubsetType"/>
			<xs:element name = "varinside" type = "varinsideType"/>
			<xs:element name = "varsubstring" type = "varsubstringType"/>
			<xs:element name = "durequal" type = "durequalType"/>
			<xs:element name = "durlt" type = "durltType"/>
			<xs:element name = "durlte" type = "durlteType"/>
			<xs:element name = "durgt" type = "durgtType"/>
			<xs:element name = "durgte" type = "durgteType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ***************** -->
	<!-- ** and_objects ** -->
	<!-- ***************** -->
	
	<xs:complexType name = "and_objectsType">
		<xs:choice maxOccurs = "unbounded">
			<xs:element name = "outcomes_metadata" type = "outcomes_metadataType"/>
			<xs:element name = "and_objects" type = "and_objectsType"/>
			<xs:element name = "or_objects" type = "or_objectsType"/>
			<xs:element name = "not_objects" type = "not_objectsType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ******************* -->
	<!-- ** and_selection ** -->
	<!-- ******************* -->
	
	<xs:complexType name = "and_selectionType">
		<xs:choice maxOccurs = "unbounded">
			<xs:element name = "selection_metadata" type = "selection_metadataType"/>
			<xs:element name = "and_selection" type = "and_selectionType"/>
			<xs:element name = "or_selection" type = "or_selectionType"/>
			<xs:element name = "not_selection" type = "not_selectionType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ************** -->	
	<!-- ** and_test ** -->	
	<!-- ************** -->
	
	<xs:complexType name = "and_testType">
		<xs:choice maxOccurs = "unbounded">
			<xs:element name = "variable_test" type = "variable_testType"/>
			<xs:element name = "and_test" type = "and_testType"/>
			<xs:element name = "or_test" type = "or_testType"/>
			<xs:element name = "not_test" type = "not_testType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ******************** -->	
	<!-- ** assessfeedback ** -->	
	<!-- ******************** -->
	
	<xs:complexType name = "assessfeedbackType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:choice>
				<xs:element name = "material" type = "materialType" maxOccurs = "unbounded"/>
				<xs:element name = "flow_mat" type = "flow_matType" maxOccurs = "unbounded"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "view" default = "All">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "All"/>
					<xs:enumeration value = "Administrator"/>
					<xs:enumeration value = "AdminAuthority"/>
					<xs:enumeration value = "Assessor"/>
					<xs:enumeration value = "Author"/>
					<xs:enumeration value = "Candidate"/>
					<xs:enumeration value = "InvigilatorProctor"/>
					<xs:enumeration value = "Psychometrician"/>
					<xs:enumeration value = "Scorer"/>
					<xs:enumeration value = "Tutor"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
		<xs:attribute name = "title" type = "xs:string"/>
	</xs:complexType>
	
	<!-- **************** -->
	<!-- ** assessment ** -->
	<!-- **************** -->
	
	<xs:complexType name = "assessmentType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:element ref = "duration" minOccurs = "0"/>
			<xs:element name = "qtimetadata" type = "qtimetadataType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "objectives" type = "objectivesType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "assessmentcontrol" type = "assessmentcontrolType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "rubric" type = "rubricType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "presentation_material" type = "presentation_materialType" minOccurs = "0"/>
			<xs:element name = "outcomes_processing" type = "outcomes_processingType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "assessproc_extension" minOccurs = "0"/>
			<xs:element name = "assessfeedback" type = "assessfeedbackType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "selection_ordering" type = "selection_orderingType" minOccurs = "0"/>
			<xs:element name = "reference" type = "referenceType" minOccurs = "0"/>
			<xs:choice maxOccurs = "unbounded">
				<xs:element name = "sectionref" type = "sectionrefType"/>
				<xs:element name = "section" type = "sectionType"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
		<xs:attribute name = "title" type = "xs:string"/>
		<xs:attribute ref = "xml:lang"/>
	</xs:complexType>
	
	<!-- *********************** -->	
	<!-- ** assessmentcontrol ** -->		
	<!-- *********************** -->
	
	<xs:complexType name = "assessmentcontrolType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
		</xs:sequence>
		<xs:attribute name = "hintswitch" default = "Yes">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "solutionswitch" default = "Yes">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "view" default = "All">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "All"/>
					<xs:enumeration value = "Administrator"/>
					<xs:enumeration value = "AdminAuthority"/>
					<xs:enumeration value = "Assessor"/>
					<xs:enumeration value = "Author"/>
					<xs:enumeration value = "Candidate"/>
					<xs:enumeration value = "InvigilatorProctor"/>
					<xs:enumeration value = "Psychometrician"/>
					<xs:enumeration value = "Scorer"/>
					<xs:enumeration value = "Tutor"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "feedbackswitch" default = "Yes">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- ************************** -->	
	<!-- ** assessproc_extension ** -->	
	<!-- ************************** -->
	
	<xs:complexType name = "assessproc_extensionType" mixed = "true">
		<xs:sequence>
			<xs:any namespace = "##any" processContents = "lax" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:anyAttribute namespace = "http://www.w3.org/2001/XMLSchema" processContents = "lax"/>
	</xs:complexType>
	
	<!-- ****************** -->	
	<!-- ** conditionvar ** -->	
	<!-- ****************** -->
	
	<xs:complexType name = "conditionvarType">
		<xs:choice maxOccurs = "unbounded">
			<xs:element name = "not" type = "notType"/>
			<xs:element name = "and" type = "andType"/>
			<xs:element name = "or" type = "orType"/>
			<xs:element name = "unanswered" type = "unansweredType"/>
			<xs:element ref = "other"/>
			<xs:element name = "varequal" type = "varequalType"/>
			<xs:element name = "varlt" type = "varltType"/>
			<xs:element name = "varlte" type = "varlteType"/>
			<xs:element name = "vargt" type = "vargtType"/>
			<xs:element name = "vargte" type = "vargteType"/>
			<xs:element name = "varsubset" type = "varsubsetType"/>
			<xs:element name = "varinside" type = "varinsideType"/>
			<xs:element name = "varsubstring" type = "varsubstringType"/>
			<xs:element name = "durequal" type = "durequalType"/>
			<xs:element name = "durlt" type = "durltType"/>
			<xs:element name = "durlte" type = "durlteType"/>
			<xs:element name = "durgt" type = "durgtType"/>
			<xs:element name = "durgte" type = "durgteType"/>
			<xs:element ref = "var_extension"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ************ -->	
	<!-- ** decvar ** -->	
	<!-- ************ -->
	
	<xs:complexType name = "decvarType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "varname" default = "SCORE" type = "xs:string"/>
				<xs:attribute name = "vartype" default = "Integer">
					<xs:simpleType>
						<xs:restriction base = "xs:NMTOKEN">
							<xs:enumeration value = "Integer"/>
							<xs:enumeration value = "String"/>
							<xs:enumeration value = "Decimal"/>
							<xs:enumeration value = "Scientific"/>
							<xs:enumeration value = "Boolean"/>
							<xs:enumeration value = "Enumerated"/>
							<xs:enumeration value = "Set"/>
						</xs:restriction>
					</xs:simpleType>
				</xs:attribute>
				<xs:attribute name = "defaultval" type = "xs:string"/>
				<xs:attribute name = "minvalue" type = "xs:string"/>
				<xs:attribute name = "maxvalue" type = "xs:string"/>
				<xs:attribute name = "members" type = "xs:string"/>
				<xs:attribute name = "cutvalue" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ********************* -->	
	<!-- ** displayfeedback ** -->	
	<!-- ********************* -->
	
	<xs:complexType name = "displayfeedbackType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "feedbacktype" default = "Response">
					<xs:simpleType>
						<xs:restriction base = "xs:NMTOKEN">
							<xs:enumeration value = "Response"/>
							<xs:enumeration value = "Solution"/>
							<xs:enumeration value = "Hint"/>
						</xs:restriction>
					</xs:simpleType>
				</xs:attribute>
				<xs:attribute name = "linkrefid" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************** -->	
	<!-- ** durequal ** -->	
	<!-- ************** -->
	
	<xs:complexType name = "durequalType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "index" type = "xs:string"/>
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- *********** -->	
	<!-- ** durgt ** -->	
	<!-- *********** -->
	
	<xs:complexType name = "durgtType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "index" type = "xs:string"/>
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************ -->	
	<!-- ** durgte ** -->	
	<!-- ************ -->
	
	<xs:complexType name = "durgteType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "index" type = "xs:string"/>
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- *********** -->	
	<!-- ** durlt ** -->	
	<!-- *********** -->
	
	<xs:complexType name = "durltType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "index" type = "xs:string"/>
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************ -->	
	<!-- ** durlte ** -->	
	<!-- ************ -->
	
	<xs:complexType name = "durlteType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "index" type = "xs:string"/>
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ********** -->	
	<!-- ** flow ** -->	
	<!-- ********** -->
	
	<xs:complexType name = "flowType">
		<xs:sequence>
			<xs:element ref = "qticomment" minOccurs = "0"/>
			<xs:choice maxOccurs = "unbounded">
				<xs:element name = "flow" type = "flowType"/>
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
				<xs:element name = "response_lid" type = "response_lidType"/>
				<xs:element name = "response_xy" type = "response_xyType"/>
				<xs:element name = "response_str" type = "response_strType"/>
				<xs:element name = "response_num" type = "response_numType"/>
				<xs:element name = "response_grp" type = "response_grpType"/>
				<xs:element ref = "response_extension"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "class" default = "Block" type = "xs:string"/>
	</xs:complexType>
	
	<!-- **************** -->	
	<!-- ** flow_label ** -->
	<!-- **************** -->
	
	<xs:complexType name = "flow_labelType">
		<xs:sequence>
			<xs:element ref = "qticomment" minOccurs = "0"/>
			<xs:choice maxOccurs = "unbounded">
				<xs:element name = "flow_label" type = "flow_labelType"/>
				<xs:element name = "response_label" type = "response_labelType"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "class" default = "Block" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ************** -->	
	<!-- ** flow_mat ** -->	
	<!-- ************** -->
	
	<xs:complexType name = "flow_matType">
		<xs:sequence>
			<xs:element ref = "qticomment" minOccurs = "0"/>
			<xs:choice maxOccurs = "unbounded">
				<xs:element name = "flow_mat" type = "flow_matType"/>
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "class" default = "Block" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ********** -->
	<!-- ** hint ** -->
	<!-- ********** -->
	
	<xs:complexType name = "hintType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:element name = "hintmaterial" type = "hintmaterialType" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:attribute name = "feedbackstyle" default = "Complete">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Complete"/>
					<xs:enumeration value = "Incremental"/>
					<xs:enumeration value = "Multilevel"/>
					<xs:enumeration value = "Proprietary"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- ****************** -->	
	<!-- ** hintmaterial ** -->	
	<!-- ****************** -->
	
	<xs:complexType name = "hintmaterialType">
		<xs:choice>
			<xs:element name = "material" type = "materialType" maxOccurs = "unbounded"/>
			<xs:element name = "flow_mat" type = "flow_matType" maxOccurs = "unbounded"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ****************** -->	
	<!-- ** interpretvar ** -->	
	<!-- ****************** -->
	
	<xs:complexType name = "interpretvarType">
		<xs:choice>
			<xs:element name = "material" type = "materialType"/>
			<xs:element name = "material_ref" type = "material_refType"/>
		</xs:choice>
		<xs:attribute name = "view" default = "All">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "All"/>
					<xs:enumeration value = "Administrator"/>
					<xs:enumeration value = "AdminAuthority"/>
					<xs:enumeration value = "Assessor"/>
					<xs:enumeration value = "Author"/>
					<xs:enumeration value = "Candidate"/>
					<xs:enumeration value = "InvigilatorProctor"/>
					<xs:enumeration value = "Psychometrician"/>
					<xs:enumeration value = "Scorer"/>
					<xs:enumeration value = "Tutor"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "varname" default = "SCORE" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ********** -->	
	<!-- ** item ** -->	
	<!-- ********** -->
	
	<xs:complexType name = "itemType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:element ref = "duration" minOccurs = "0"/>
			<xs:element name = "itemmetadata" type = "itemmetadataType" minOccurs = "0"/>
			<xs:element name = "objectives" type = "objectivesType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "itemcontrol" type = "itemcontrolType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "itemprecondition" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "itempostcondition" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:choice minOccurs = "0" maxOccurs = "unbounded">
				<xs:element name = "itemrubric" type = "itemrubricType"/>
				<xs:element name = "rubric" type = "rubricType"/>
			</xs:choice>
			<xs:element name = "presentation" type = "presentationType" minOccurs = "0"/>
			<xs:element name = "resprocessing" type = "resprocessingType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "itemproc_extension" minOccurs = "0"/>
			<xs:element name = "itemfeedback" type = "itemfeedbackType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "reference" type = "referenceType" minOccurs = "0"/>
		</xs:sequence>
		<xs:attribute name = "maxattempts" type = "xs:string"/>
		<xs:attribute name = "label" type = "xs:string"/>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
		<xs:attribute name = "title" type = "xs:string"/>
		<xs:attribute ref = "xml:lang"/>
	</xs:complexType>
	
	<!-- ***************** -->	
	<!-- ** itemcontrol ** -->	
	<!-- ***************** -->
	
	<xs:complexType name = "itemcontrolType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
		</xs:sequence>
		<xs:attribute name = "feedbackswitch" default = "Yes">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "hintswitch" default = "Yes">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "solutionswitch" default = "Yes">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "view" default = "All">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "All"/>
					<xs:enumeration value = "Administrator"/>
					<xs:enumeration value = "AdminAuthority"/>
					<xs:enumeration value = "Assessor"/>
					<xs:enumeration value = "Author"/>
					<xs:enumeration value = "Candidate"/>
					<xs:enumeration value = "InvigilatorProctor"/>
					<xs:enumeration value = "Psychometrician"/>
					<xs:enumeration value = "Scorer"/>
					<xs:enumeration value = "Tutor"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- ****************** -->	
	<!-- ** itemfeedback ** -->	
	<!-- ****************** -->
	
	<xs:complexType name = "itemfeedbackType">
		<xs:choice maxOccurs = "unbounded">
			<xs:choice>
				<xs:element name = "flow_mat" type = "flow_matType"/>
				<xs:element name = "material" type = "materialType"/>
			</xs:choice>
			<xs:element name = "solution" type = "solutionType"/>
			<xs:element name = "hint" type = "hintType"/>
		</xs:choice>
		<xs:attribute name = "view" default = "All">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "All"/>
					<xs:enumeration value = "Administrator"/>
					<xs:enumeration value = "AdminAuthority"/>
					<xs:enumeration value = "Assessor"/>
					<xs:enumeration value = "Author"/>
					<xs:enumeration value = "Candidate"/>
					<xs:enumeration value = "InvigilatorProctor"/>
					<xs:enumeration value = "Psychometrician"/>
					<xs:enumeration value = "Scorer"/>
					<xs:enumeration value = "Tutor"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
		<xs:attribute name = "title" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ****************** -->	
	<!-- ** itemmetadata ** -->	
	<!-- ****************** -->
	
	<xs:complexType name = "itemmetadataType">
		<xs:sequence>
			<xs:element name = "qtimetadata" type = "qtimetadataType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "qmd_computerscored" minOccurs = "0"/>
			<xs:element ref = "qmd_feedbackpermitted" minOccurs = "0"/>
			<xs:element ref = "qmd_hintspermitted" minOccurs = "0"/>
			<xs:element ref = "qmd_itemtype" minOccurs = "0"/>
			<xs:element ref = "qmd_levelofdifficulty" minOccurs = "0"/>
			<xs:element ref = "qmd_maximumscore" minOccurs = "0"/>
			<xs:element ref = "qmd_renderingtype" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "qmd_responsetype" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "qmd_scoringpermitted" minOccurs = "0"/>
			<xs:element ref = "qmd_solutionspermitted" minOccurs = "0"/>
			<xs:element ref = "qmd_status" minOccurs = "0"/>
			<xs:element ref = "qmd_timedependence" minOccurs = "0"/>
			<xs:element ref = "qmd_timelimit" minOccurs = "0"/>
			<xs:element ref = "qmd_toolvendor" minOccurs = "0"/>
			<xs:element ref = "qmd_topic" minOccurs = "0"/>
			<xs:element ref = "qmd_weighting" minOccurs = "0"/>
			<xs:element ref = "qmd_material" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "qmd_typeofsolution" minOccurs = "0"/>
		</xs:sequence>
	</xs:complexType>
	
	<!-- ************************ -->	
	<!-- ** itemproc_extension ** -->	
	<!-- ************************ -->
	
	<xs:complexType name = "itemproc_extensionType" mixed = "true">
		<xs:sequence>
			<xs:any namespace = "##any" processContents = "lax" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:anyAttribute namespace = "http://www.w3.org/2001/XMLSchema" processContents = "lax"/>
	</xs:complexType>
	
	<!-- ************* -->	
	<!-- ** itemref ** -->	
	<!-- ************* -->
	
	<xs:complexType name = "itemrefType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "linkrefid" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- **************** -->	
	<!-- ** itemrubric ** -->	
	<!-- **************** -->
	
	<xs:complexType name = "itemrubricType">
		<xs:sequence>
			<xs:element name = "material" type = "materialType"/>
		</xs:sequence>
		<xs:attribute name = "view" default = "All">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "All"/>
					<xs:enumeration value = "Administrator"/>
					<xs:enumeration value = "AdminAuthority"/>
					<xs:enumeration value = "Assessor"/>
					<xs:enumeration value = "Author"/>
					<xs:enumeration value = "Candidate"/>
					<xs:enumeration value = "InvigilatorProctor"/>
					<xs:enumeration value = "Psychometrician"/>
					<xs:enumeration value = "Scorer"/>
					<xs:enumeration value = "Tutor"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- *************** -->	
	<!-- ** map_input ** -->	
	<!-- *************** -->
	
	<xs:complexType name = "map_inputType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "varname" default = "SCORE" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- **************** -->	
	<!-- ** map_output ** -->	
	<!-- **************** -->
	
	<xs:complexType name = "map_outputType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "varname" default = "SCORE" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ******************* -->	
	<!-- ** mat_extension ** -->	
	<!-- ******************* -->
	
	<xs:complexType name = "mat_extensionType" mixed = "true">
		<xs:sequence>
			<xs:any namespace = "##any" processContents = "lax" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:anyAttribute namespace = "http://www.w3.org/2001/XMLSchema" processContents = "lax"/>
	</xs:complexType>
	
	<!-- *************** -->	
	<!-- ** matapplet ** -->	
	<!-- *************** -->
	
	<xs:complexType name = "matappletType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "label" type = "xs:string"/>
				<xs:attribute name = "uri" type = "xs:string"/>
				<xs:attribute name = "y0" type = "xs:string"/>
				<xs:attribute name = "height" type = "xs:string"/>
				<xs:attribute name = "width" type = "xs:string"/>
				<xs:attribute name = "x0" type = "xs:string"/>
				<xs:attribute name = "embedded" default = "base64" type = "xs:string"/>
				<xs:attribute name = "entityref" type = "xs:ENTITY"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ******************** -->	
	<!-- ** matapplication ** -->	
	<!-- ******************** -->
	
	<xs:complexType name = "matapplicationType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "apptype" type = "xs:string"/>
				<xs:attribute name = "label" type = "xs:string"/>
				<xs:attribute name = "uri" type = "xs:string"/>
				<xs:attribute name = "embedded" default = "base64" type = "xs:string"/>
				<xs:attribute name = "entityref" type = "xs:ENTITY"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************** -->	
	<!-- ** mataudio ** -->	
	<!-- ************** -->
	
	<xs:complexType name = "mataudioType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "audiotype" default = "audio/base" type = "xs:string"/>
				<xs:attribute name = "label" type = "xs:string"/>
				<xs:attribute name = "uri" type = "xs:string"/>
				<xs:attribute name = "embedded" default = "base64" type = "xs:string"/>
				<xs:attribute name = "entityref" type = "xs:ENTITY"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************** -->	
	<!-- ** matbreak ** -->	
	<!-- ************** -->
	
	<xs:complexType name = "matbreakType"/>
	
	<!-- *************** -->	
	<!-- ** matemtext ** -->	
	<!-- *************** -->
	
	<xs:complexType name = "matemtextType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "texttype" default = "text/plain" type = "xs:string"/>
				<xs:attribute name = "label" type = "xs:string"/>
				<xs:attribute name = "charset" default = "ascii-us" type = "xs:string"/>
				<xs:attribute name = "uri" type = "xs:string"/>
				<xs:attribute ref = "xml:space" default = "default"/>
				<xs:attribute ref = "xml:lang"/>
				<xs:attribute name = "entityref" type = "xs:ENTITY"/>
				<xs:attribute name = "width" type = "xs:string"/>
				<xs:attribute name = "height" type = "xs:string"/>
				<xs:attribute name = "y0" type = "xs:string"/>
				<xs:attribute name = "x0" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************** -->	
	<!-- ** material ** -->	
	<!-- ************** -->
	
	<xs:complexType name = "materialType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:choice maxOccurs = "unbounded">
				<xs:element name = "mattext" type = "mattextType"/>
				<xs:element name = "matemtext" type = "matemtextType"/>
				<xs:element name = "matimage" type = "matimageType"/>
				<xs:element name = "mataudio" type = "mataudioType"/>
				<xs:element name = "matvideo" type = "matvideoType"/>
				<xs:element name = "matapplet" type = "matappletType"/>
				<xs:element name = "matapplication" type = "matapplicationType"/>
				<xs:element name = "matref" type = "matrefType"/>
				<xs:element ref = "matbreak"/>
				<xs:element ref = "mat_extension"/>
			</xs:choice>
			<xs:element name = "altmaterial" type = "altmaterialType" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:attribute name = "label" type = "xs:string"/>
		<xs:attribute ref = "xml:lang"/>
	</xs:complexType>
	
	<!-- ****************** -->	
	<!-- ** material_ref ** -->	
	<!-- ****************** -->
	
	<xs:complexType name = "material_refType">
		<xs:attribute name = "linkrefid" use = "required" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ************** -->	
	<!-- ** matimage ** -->	
	<!-- ************** -->
	
	<xs:complexType name = "matimageType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "imagtype" default = "image/jpeg" type = "xs:string"/>
				<xs:attribute name = "label" type = "xs:string"/>
				<xs:attribute name = "height" type = "xs:string"/>
				<xs:attribute name = "uri" type = "xs:string"/>
				<xs:attribute name = "embedded" default = "base64" type = "xs:string"/>
				<xs:attribute name = "width" type = "xs:string"/>
				<xs:attribute name = "y0" type = "xs:string"/>
				<xs:attribute name = "x0" type = "xs:string"/>
				<xs:attribute name = "entityref" type = "xs:ENTITY"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************ -->	
	<!-- ** matref ** -->	
	<!-- ************ -->
	
	<xs:complexType name = "matrefType">
		<xs:attribute name = "linkrefid" use = "required" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ************* -->	
	<!-- ** mattext ** -->	
	<!-- ************* -->
	
	<xs:complexType name = "mattextType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "texttype" default = "text/plain" type = "xs:string"/>
				<xs:attribute name = "label" type = "xs:string"/>
				<xs:attribute name = "charset" default = "ascii-us" type = "xs:string"/>
				<xs:attribute name = "uri" type = "xs:string"/>
				<xs:attribute ref = "xml:space" default = "default"/>
				<xs:attribute ref = "xml:lang"/>
				<xs:attribute name = "entityref" type = "xs:ENTITY"/>
				<xs:attribute name = "width" type = "xs:string"/>
				<xs:attribute name = "height" type = "xs:string"/>
				<xs:attribute name = "y0" type = "xs:string"/>
				<xs:attribute name = "x0" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************** -->
	<!-- ** matvideo ** -->	
	<!-- ************** -->
	
	<xs:complexType name = "matvideoType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "videotype" default = "video/avi" type = "xs:string"/>
				<xs:attribute name = "label" type = "xs:string"/>
				<xs:attribute name = "uri" type = "xs:string"/>
				<xs:attribute name = "width" type = "xs:string"/>
				<xs:attribute name = "height" type = "xs:string"/>
				<xs:attribute name = "y0" type = "xs:string"/>
				<xs:attribute name = "x0" type = "xs:string"/>
				<xs:attribute name = "embedded" default = "base64" type = "xs:string"/>
				<xs:attribute name = "entityref" type = "xs:ENTITY"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ********* -->	
	<!-- ** not ** -->	
	<!-- ********* -->
	
	<xs:complexType name = "notType">
		<xs:choice>
			<xs:element name = "and" type = "andType"/>
			<xs:element name = "or" type = "orType"/>
			<xs:element name = "not" type = "notType"/>
			<xs:element name = "unanswered" type = "unansweredType"/>
			<xs:element ref = "other"/>
			<xs:element name = "varequal" type = "varequalType"/>
			<xs:element name = "varlt" type = "varltType"/>
			<xs:element name = "varlte" type = "varlteType"/>
			<xs:element name = "vargt" type = "vargtType"/>
			<xs:element name = "vargte" type = "vargteType"/>
			<xs:element name = "varsubset" type = "varsubsetType"/>
			<xs:element name = "varinside" type = "varinsideType"/>
			<xs:element name = "varsubstring" type = "varsubstringType"/>
			<xs:element name = "durequal" type = "durequalType"/>
			<xs:element name = "durlt" type = "durltType"/>
			<xs:element name = "durlte" type = "durlteType"/>
			<xs:element name = "durgt" type = "durgtType"/>
			<xs:element name = "durgte" type = "durgteType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ***************** -->	
	<!-- ** not_objects ** -->	
	<!-- ***************** -->
	
	<xs:complexType name = "not_objectsType">
		<xs:choice>
			<xs:element name = "outcomes_metadata" type = "outcomes_metadataType"/>
			<xs:element name = "and_objects" type = "and_objectsType"/>
			<xs:element name = "or_objects" type = "or_objectsType"/>
			<xs:element name = "not_objects" type = "not_objectsType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ******************* -->	
	<!-- ** not_selection ** -->	
	<!-- ******************* -->
	
	<xs:complexType name = "not_selectionType">
		<xs:choice>
			<xs:element name = "selection_metadata" type = "selection_metadataType"/>
			<xs:element name = "and_selection" type = "and_selectionType"/>
			<xs:element name = "or_selection" type = "or_selectionType"/>
			<xs:element name = "not_selection" type = "not_selectionType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ************** -->	
	<!-- ** not_test ** -->	
	<!-- ************** -->
	
	<xs:complexType name = "not_testType">
		<xs:choice>
			<xs:element name = "variable_test" type = "variable_testType"/>
			<xs:element name = "and_test" type = "and_testType"/>
			<xs:element name = "or_test" type = "or_testType"/>
			<xs:element name = "not_test" type = "not_testType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- **************** -->	
	<!-- ** objectbank ** -->	
	<!-- **************** -->
	
	<xs:complexType name = "objectbankType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:element name = "qtimetadata" type = "qtimetadataType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:choice maxOccurs = "unbounded">
				<xs:element name = "section" type = "sectionType"/>
				<xs:element name = "item" type = "itemType"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
	</xs:complexType>
	
	<!-- **************** -->	
	<!-- ** objectives ** -->	
	<!-- **************** -->
	
	<xs:complexType name = "objectivesType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:choice>
				<xs:element name = "material" type = "materialType" maxOccurs = "unbounded"/>
				<xs:element name = "flow_mat" type = "flow_matType" maxOccurs = "unbounded"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "view" default = "All">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "All"/>
					<xs:enumeration value = "Administrator"/>
					<xs:enumeration value = "AdminAuthority"/>
					<xs:enumeration value = "Assessor"/>
					<xs:enumeration value = "Author"/>
					<xs:enumeration value = "Candidate"/>
					<xs:enumeration value = "InvigilatorProctor"/>
					<xs:enumeration value = "Psychometrician"/>
					<xs:enumeration value = "Scorer"/>
					<xs:enumeration value = "Tutor"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- *********************** -->	
	<!-- ** objects_condition ** -->	
	<!-- *********************** -->
	
	<xs:complexType name = "objects_conditionType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:choice minOccurs = "0">
				<xs:element name = "outcomes_metadata" type = "outcomes_metadataType"/>
				<xs:element name = "and_objects" type = "and_objectsType"/>
				<xs:element name = "or_objects" type = "or_objectsType"/>
				<xs:element name = "not_objects" type = "not_objectsType"/>
			</xs:choice>
			<xs:element name = "objects_parameter" type = "objects_parameterType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "map_input" type = "map_inputType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "objectscond_extension" minOccurs = "0"/>
		</xs:sequence>
	</xs:complexType>
	
	<!-- *********************** -->	
	<!-- ** objects_parameter ** -->	
	<!-- *********************** -->
	
	<xs:complexType name = "objects_parameterType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "pname" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ******** -->	
	<!-- ** or ** -->	
	<!-- ******** -->
	
	<xs:complexType name = "orType">
		<xs:choice maxOccurs = "unbounded">
			<xs:element name = "not" type = "notType"/>
			<xs:element name = "and" type = "andType"/>
			<xs:element name = "or" type = "orType"/>
			<xs:element name = "unanswered" type = "unansweredType"/>
			<xs:element ref = "other"/>
			<xs:element name = "varequal" type = "varequalType"/>
			<xs:element name = "varlt" type = "varltType"/>
			<xs:element name = "varlte" type = "varlteType"/>
			<xs:element name = "vargt" type = "vargtType"/>
			<xs:element name = "vargte" type = "vargteType"/>
			<xs:element name = "varsubset" type = "varsubsetType"/>
			<xs:element name = "varinside" type = "varinsideType"/>
			<xs:element name = "varsubstring" type = "varsubstringType"/>
			<xs:element name = "durequal" type = "durequalType"/>
			<xs:element name = "durlt" type = "durltType"/>
			<xs:element name = "durlte" type = "durlteType"/>
			<xs:element name = "durgt" type = "durgtType"/>
			<xs:element name = "durgte" type = "durgteType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- **************** -->	
	<!-- ** or_objects ** -->	
	<!-- **************** -->
	
	<xs:complexType name = "or_objectsType">
		<xs:choice maxOccurs = "unbounded">
			<xs:element name = "outcomes_metadata" type = "outcomes_metadataType"/>
			<xs:element name = "and_objects" type = "and_objectsType"/>
			<xs:element name = "or_objects" type = "or_objectsType"/>
			<xs:element name = "not_objects" type = "not_objectsType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ****************** -->	
	<!-- ** or_selection ** -->	
	<!-- ****************** -->
	
	<xs:complexType name = "or_selectionType">
		<xs:choice maxOccurs = "unbounded">
			<xs:element name = "selection_metadata" type = "selection_metadataType"/>
			<xs:element name = "and_selection" type = "and_selectionType"/>
			<xs:element name = "or_selection" type = "or_selectionType"/>
			<xs:element name = "not_selection" type = "not_selectionType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ************* -->	
	<!-- ** or_test ** -->	
	<!-- ************* -->
	
	<xs:complexType name = "or_testType">
		<xs:choice maxOccurs = "unbounded">
			<xs:element name = "variable_test" type = "variable_testType"/>
			<xs:element name = "and_test" type = "and_testType"/>
			<xs:element name = "or_test" type = "or_testType"/>
			<xs:element name = "not_test" type = "not_testType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- *********** -->	
	<!-- ** order ** -->	
	<!-- *********** -->
	
	<xs:complexType name = "orderType">
		<xs:sequence>
			<xs:element ref = "order_extension" minOccurs = "0"/>
		</xs:sequence>
		<xs:attribute name = "order_type" use = "required" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ********************* -->	
	<!-- ** order_extension ** -->	
	<!-- ********************* -->
	
	<xs:complexType name = "order_extensionType" mixed = "true">
		<xs:sequence>
			<xs:any namespace = "##any" processContents = "lax" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:anyAttribute namespace = "http://www.w3.org/2001/XMLSchema" processContents = "lax"/>
	</xs:complexType>
	
	<!-- ************** -->
	<!-- ** outcomes ** -->	
	<!-- ************** -->
	
	<xs:complexType name = "outcomesType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:sequence maxOccurs = "unbounded">
				<xs:element name = "decvar" type = "decvarType"/>
				<xs:element name = "interpretvar" type = "interpretvarType" minOccurs = "0" maxOccurs = "unbounded"/>
			</xs:sequence>
		</xs:sequence>
	</xs:complexType>
	
	<!-- **************************** -->	
	<!-- ** outcomes_feedback_test ** -->	
	<!-- **************************** -->
	
	<xs:complexType name = "outcomes_feedback_testType">
		<xs:sequence>
			<xs:element name = "test_variable" type = "test_variableType"/>
			<xs:element name = "displayfeedback" type = "displayfeedbackType" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:attribute name = "title" type = "xs:string"/>
	</xs:complexType>
	
	<!-- *********************** -->	
	<!-- ** outcomes_metadata ** -->	
	<!-- *********************** -->
	
	<xs:complexType name = "outcomes_metadataType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "mdname" use = "required" type = "xs:string"/>
				<xs:attribute name = "mdoperator" use = "required">
					<xs:simpleType>
						<xs:restriction base = "xs:NMTOKEN">
							<xs:enumeration value = "EQ"/>
							<xs:enumeration value = "NEQ"/>
							<xs:enumeration value = "LT"/>
							<xs:enumeration value = "LTE"/>
							<xs:enumeration value = "GT"/>
							<xs:enumeration value = "GTE"/>
						</xs:restriction>
					</xs:simpleType>
				</xs:attribute>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************************* -->	
	<!-- ** outcomes_processing ** -->	
	<!-- ************************* -->
	
	<xs:complexType name = "outcomes_processingType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:element name = "outcomes" type = "outcomesType"/>
			<xs:element name = "objects_condition" type = "objects_conditionType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "processing_parameter" type = "processing_parameterType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "map_output" type = "map_outputType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "outcomes_feedback_test" type = "outcomes_feedback_testType" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:attribute name = "scoremodel" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ****************** -->	
	<!-- ** presentation ** -->	
	<!-- ****************** -->
	
	<xs:complexType name = "presentationType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:choice>
				<xs:element name = "flow" type = "flowType"/>
				<xs:choice maxOccurs = "unbounded">
					<xs:element name = "material" type = "materialType"/>
					<xs:element name = "response_lid" type = "response_lidType"/>
					<xs:element name = "response_xy" type = "response_xyType"/>
					<xs:element name = "response_str" type = "response_strType"/>
					<xs:element name = "response_num" type = "response_numType"/>
					<xs:element name = "response_grp" type = "response_grpType"/>
					<xs:element ref = "response_extension"/>
				</xs:choice>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "label" type = "xs:string"/>
		<xs:attribute ref = "xml:lang"/>
		<xs:attribute name = "y0" type = "xs:string"/>
		<xs:attribute name = "x0" type = "xs:string"/>
		<xs:attribute name = "width" type = "xs:string"/>
		<xs:attribute name = "height" type = "xs:string"/>
	</xs:complexType>
	
	<!-- *************************** -->	
	<!-- ** presentation_material ** -->	
	<!-- *************************** -->
	
	<xs:complexType name = "presentation_materialType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:element name = "flow_mat" type = "flow_matType" maxOccurs = "unbounded"/>
		</xs:sequence>
	</xs:complexType>
	
	<!-- ************************** -->	
	<!-- ** processing_parameter ** -->	
	<!-- ************************** -->
	
	<xs:complexType name = "processing_parameterType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "pname" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- **************** -->	
	<!-- ** qticomment ** -->	
	<!-- **************** -->
	
	<xs:complexType name = "qticommentType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute ref = "xml:lang"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ***************** -->	
	<!-- ** qtimetadata ** -->	
	<!-- ***************** -->
	
	<xs:complexType name = "qtimetadataType">
		<xs:sequence>
			<xs:element name = "vocabulary" type = "vocabularyType" minOccurs = "0"/>
			<xs:element name = "qtimetadatafield" type = "qtimetadatafieldType" maxOccurs = "unbounded"/>
		</xs:sequence>
	</xs:complexType>
	
	<!-- ********************** -->	
	<!-- ** qtimetadatafield ** -->	
	<!-- ********************** -->
	
	<xs:complexType name = "qtimetadatafieldType">
		<xs:sequence>
			<xs:element ref = "fieldlabel"/>
			<xs:element ref = "fieldentry"/>
		</xs:sequence>
		<xs:attribute ref = "xml:lang"/>
	</xs:complexType>
	
	<!-- ********************* -->	
	<!-- ** questestinterop ** -->	
	<!-- ********************* -->
	
	<xs:complexType name = "questestinteropType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:choice>
				<xs:element name = "objectbank" type = "objectbankType"/>
				<xs:element name = "assessment" type = "assessmentType"/>
				<xs:choice maxOccurs = "unbounded">
					<xs:element name = "section" type = "sectionType"/>
					<xs:element name = "item" type = "itemType"/>
				</xs:choice>
			</xs:choice>
		</xs:sequence>
	</xs:complexType>
	
	<!-- *************** -->	
	<!-- ** reference ** -->	
	<!-- *************** -->
	
	<xs:complexType name = "referenceType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:choice maxOccurs = "unbounded">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "mattext" type = "mattextType"/>
				<xs:element name = "matemtext" type = "matemtextType"/>
				<xs:element name = "matimage" type = "matimageType"/>
				<xs:element name = "mataudio" type = "mataudioType"/>
				<xs:element name = "matvideo" type = "matvideoType"/>
				<xs:element name = "matapplet" type = "matappletType"/>
				<xs:element name = "matapplication" type = "matapplicationType"/>
				<xs:element ref = "matbreak"/>
				<xs:element ref = "mat_extension"/>
			</xs:choice>
		</xs:sequence>
	</xs:complexType>
	
	<!-- ******************* -->	
	<!-- ** render_choice ** -->	
	<!-- ******************* -->
	
	<xs:complexType name = "render_choiceType">
		<xs:sequence>
			<xs:choice minOccurs = "0" maxOccurs = "unbounded">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
				<xs:element name = "response_label" type = "response_labelType"/>
				<xs:element name = "flow_label" type = "flow_labelType"/>
			</xs:choice>
			<xs:element ref = "response_na" minOccurs = "0"/>
		</xs:sequence>
		<xs:attribute name = "shuffle" default = "No">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "minnumber" type = "xs:string"/>
		<xs:attribute name = "maxnumber" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ********************** -->	
	<!-- ** render_extension ** -->	
	<!-- ********************** -->
	
	<xs:complexType name = "render_extensionType" mixed = "true">
		<xs:sequence>
			<xs:any namespace = "##any" processContents = "lax" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:anyAttribute namespace = "http://www.w3.org/2001/XMLSchema" processContents = "lax"/>
	</xs:complexType>
	
	<!-- **************** -->	
	<!-- ** render_fib ** -->	
	<!-- **************** -->
	
	<xs:complexType name = "render_fibType">
		<xs:sequence>
			<xs:choice minOccurs = "0" maxOccurs = "unbounded">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
				<xs:element name = "response_label" type = "response_labelType"/>
				<xs:element name = "flow_label" type = "flow_labelType"/>
			</xs:choice>
			<xs:element ref = "response_na" minOccurs = "0"/>
		</xs:sequence>
		<xs:attribute name = "encoding" default = "UTF_8" type = "xs:string"/>
		<xs:attribute name = "fibtype" default = "String">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "String"/>
					<xs:enumeration value = "Integer"/>
					<xs:enumeration value = "Decimal"/>
					<xs:enumeration value = "Scientific"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "rows" type = "xs:string"/>
		<xs:attribute name = "maxchars" type = "xs:string"/>
		<xs:attribute name = "prompt">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Box"/>
					<xs:enumeration value = "Dashline"/>
					<xs:enumeration value = "Asterisk"/>
					<xs:enumeration value = "Underline"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "columns" type = "xs:string"/>
		<xs:attribute name = "charset" default = "ascii-us" type = "xs:string"/>
		<xs:attribute name = "maxnumber" type = "xs:string"/>
		<xs:attribute name = "minnumber" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ******************** -->	
	<!-- ** render_hotspot ** -->	
	<!-- ******************** -->
	
	<xs:complexType name = "render_hotspotType">
		<xs:sequence>
			<xs:choice minOccurs = "0" maxOccurs = "unbounded">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
				<xs:element name = "response_label" type = "response_labelType"/>
				<xs:element name = "flow_label" type = "flow_labelType"/>
			</xs:choice>
			<xs:element ref = "response_na" minOccurs = "0"/>
		</xs:sequence>
		<xs:attribute name = "maxnumber" type = "xs:string"/>
		<xs:attribute name = "minnumber" type = "xs:string"/>
		<xs:attribute name = "showdraw" default = "No">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- ******************* -->	
	<!-- ** render_slider ** -->	
	<!-- ******************* -->
	
	<xs:complexType name = "render_sliderType">
		<xs:sequence>
			<xs:choice minOccurs = "0" maxOccurs = "unbounded">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
				<xs:element name = "response_label" type = "response_labelType"/>
				<xs:element name = "flow_label" type = "flow_labelType"/>
			</xs:choice>
			<xs:element ref = "response_na" minOccurs = "0"/>
		</xs:sequence>
		<xs:attribute name = "orientation" default = "Horizontal">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Horizontal"/>
					<xs:enumeration value = "Vertical"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "lowerbound" use = "required" type = "xs:string"/>
		<xs:attribute name = "upperbound" use = "required" type = "xs:string"/>
		<xs:attribute name = "step" type = "xs:string"/>
		<xs:attribute name = "startval" type = "xs:string"/>
		<xs:attribute name = "steplabel" default = "No">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "maxnumber" type = "xs:string"/>
		<xs:attribute name = "minnumber" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ************************ -->	
	<!-- ** respcond_extension ** -->	
	<!-- ************************ -->
	
	<xs:complexType name = "respcond_extensionType" mixed = "true">
		<xs:sequence>
			<xs:any namespace = "##any" processContents = "lax" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:anyAttribute namespace = "http://www.w3.org/2001/XMLSchema" processContents = "lax"/>
	</xs:complexType>
	
	<!-- ******************* -->
	<!-- ** respcondition ** -->
	<!-- ******************* -->
	
	<xs:complexType name = "respconditionType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:element name = "conditionvar" type = "conditionvarType"/>
			<xs:element name = "setvar" type = "setvarType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "displayfeedback" type = "displayfeedbackType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "respcond_extension" minOccurs = "0"/>
		</xs:sequence>
		<xs:attribute name = "continue" default = "No">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "title" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ************************ -->
	<!-- ** response_extension ** -->	
	<!-- ************************ -->
	
	<xs:complexType name = "response_extensionType" mixed = "true">
		<xs:sequence>
			<xs:any namespace = "##any" processContents = "lax" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:anyAttribute namespace = "http://www.w3.org/2001/XMLSchema" processContents = "lax"/>
	</xs:complexType>
	
	<!-- ****************** -->	
	<!-- ** response_grp ** -->
	<!-- ****************** -->
	
	<xs:complexType name = "response_grpType">
		<xs:sequence>
			<xs:choice minOccurs = "0">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
			</xs:choice>
			<xs:choice>
				<xs:element name = "render_choice" type = "render_choiceType"/>
				<xs:element name = "render_hotspot" type = "render_hotspotType"/>
				<xs:element name = "render_slider" type = "render_sliderType"/>
				<xs:element name = "render_fib" type = "render_fibType"/>
				<xs:element ref = "render_extension"/>
			</xs:choice>
			<xs:choice minOccurs = "0">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "rcardinality" default = "Single">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Single"/>
					<xs:enumeration value = "Multiple"/>
					<xs:enumeration value = "Ordered"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
		<xs:attribute name = "rtiming" default = "No">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- ************************ -->
	<!-- ** response_labelType ** -->
	<!-- ************************ -->
	
	<xs:complexType name = "response_labelType" mixed = "true">
		<xs:choice minOccurs = "0" maxOccurs = "unbounded">
			<xs:element name = "qticomment" type = "qticommentType"/>
			<xs:element name = "material" type = "materialType"/>
			<xs:element name = "material_ref" type = "material_refType"/>
			<xs:element name = "flow_mat" type = "flow_matType"/>
		</xs:choice>
		<xs:attribute name = "rshuffle" default = "Yes">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "rarea" default = "Ellipse">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Ellipse"/>
					<xs:enumeration value = "Rectangle"/>
					<xs:enumeration value = "Bounded"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "rrange" default = "Exact">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Exact"/>
					<xs:enumeration value = "Range"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "labelrefid" type = "xs:string"/>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
		<xs:attribute name = "match_group" type = "xs:string"/>
		<xs:attribute name = "match_max" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ****************** -->
	<!-- ** response_lid ** -->
	<!-- ****************** -->
	
	<xs:complexType name = "response_lidType">
		<xs:sequence>
			<xs:choice minOccurs = "0">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
			</xs:choice>
			<xs:choice>
				<xs:element name = "render_choice" type = "render_choiceType"/>
				<xs:element name = "render_hotspot" type = "render_hotspotType"/>
				<xs:element name = "render_slider" type = "render_sliderType"/>
				<xs:element name = "render_fib" type = "render_fibType"/>
				<xs:element ref = "render_extension"/>
			</xs:choice>
			<xs:choice minOccurs = "0">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "rcardinality" default = "Single">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Single"/>
					<xs:enumeration value = "Multiple"/>
					<xs:enumeration value = "Ordered"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "rtiming" default = "No">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ***************** -->
	<!-- ** response_na ** -->
	<!-- ***************** -->
	
	<xs:complexType name = "response_naType"/>
	
	<!-- ****************** -->
	<!-- ** response_num ** -->
	<!-- ****************** -->
	
	<xs:complexType name = "response_numType">
		<xs:sequence>
			<xs:choice minOccurs = "0">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
			</xs:choice>
			<xs:choice>
				<xs:element name = "render_choice" type = "render_choiceType"/>
				<xs:element name = "render_hotspot" type = "render_hotspotType"/>
				<xs:element name = "render_slider" type = "render_sliderType"/>
				<xs:element name = "render_fib" type = "render_fibType"/>
				<xs:element ref = "render_extension"/>
			</xs:choice>
			<xs:choice minOccurs = "0">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "numtype" default = "Integer">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Integer"/>
					<xs:enumeration value = "Decimal"/>
					<xs:enumeration value = "Scientific"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "rcardinality" default = "Single">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Single"/>
					<xs:enumeration value = "Multiple"/>
					<xs:enumeration value = "Ordered"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
		<xs:attribute name = "rtiming" default = "No">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- ****************** -->
	<!-- ** response_str ** -->	
	<!-- ****************** -->
	
	<xs:complexType name = "response_strType">
		<xs:sequence>
			<xs:choice minOccurs = "0">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
			</xs:choice>
			<xs:choice>
				<xs:element name = "render_choice" type = "render_choiceType"/>
				<xs:element name = "render_hotspot" type = "render_hotspotType"/>
				<xs:element name = "render_slider" type = "render_sliderType"/>
				<xs:element name = "render_fib" type = "render_fibType"/>
				<xs:element ref = "render_extension"/>
			</xs:choice>
			<xs:choice minOccurs = "0">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "rcardinality" default = "Single">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Single"/>
					<xs:enumeration value = "Multiple"/>
					<xs:enumeration value = "Ordered"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
		<xs:attribute name = "rtiming" default = "No">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- ***************** -->
	<!-- ** response_xy ** -->
	<!-- ***************** -->
	
	<xs:complexType name = "response_xyType">
		<xs:sequence>
			<xs:choice minOccurs = "0">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
			</xs:choice>
			<xs:choice>
				<xs:element name = "render_choice" type = "render_choiceType"/>
				<xs:element name = "render_hotspot" type = "render_hotspotType"/>
				<xs:element name = "render_slider" type = "render_sliderType"/>
				<xs:element name = "render_fib" type = "render_fibType"/>
				<xs:element ref = "render_extension"/>
			</xs:choice>
			<xs:choice minOccurs = "0">
				<xs:element name = "material" type = "materialType"/>
				<xs:element name = "material_ref" type = "material_refType"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "rcardinality" default = "Single">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Single"/>
					<xs:enumeration value = "Multiple"/>
					<xs:enumeration value = "Ordered"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "rtiming" default = "No">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ******************* -->	
	<!-- ** resprocessing ** -->
	<!-- ******************* -->
	
	<xs:complexType name = "resprocessingType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:element name = "outcomes" type = "outcomesType"/>
			<xs:choice maxOccurs = "unbounded">
				<xs:element name = "respcondition" type = "respconditionType"/>
				<xs:element ref = "itemproc_extension"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "scoremodel" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ************ -->
	<!-- ** rubric ** -->
	<!-- ************ -->
	
	<xs:complexType name = "rubricType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:choice>
				<xs:element name = "material" type = "materialType" maxOccurs = "unbounded"/>
				<xs:element name = "flow_mat" type = "flow_matType" maxOccurs = "unbounded"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "view" default = "All">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "All"/>
					<xs:enumeration value = "Administrator"/>
					<xs:enumeration value = "AdminAuthority"/>
					<xs:enumeration value = "Assessor"/>
					<xs:enumeration value = "Author"/>
					<xs:enumeration value = "Candidate"/>
					<xs:enumeration value = "InvigilatorProctor"/>
					<xs:enumeration value = "Psychometrician"/>
					<xs:enumeration value = "Scorer"/>
					<xs:enumeration value = "Tutor"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- ************* -->	
	<!-- ** section ** -->
	<!-- ************* -->
	
	<xs:complexType name = "sectionType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:element ref = "duration" minOccurs = "0"/>
			<xs:element name = "qtimetadata" type = "qtimetadataType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "objectives" type = "objectivesType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "sectioncontrol" type = "sectioncontrolType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "sectionprecondition" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "sectionpostcondition" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "rubric" type = "rubricType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "presentation_material" type = "presentation_materialType" minOccurs = "0"/>
			<xs:element name = "outcomes_processing" type = "outcomes_processingType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element ref = "sectionproc_extension" minOccurs = "0"/>
			<xs:element name = "sectionfeedback" type = "sectionfeedbackType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "selection_ordering" type = "selection_orderingType" minOccurs = "0"/>
			<xs:element name = "reference" type = "referenceType" minOccurs = "0"/>
			<xs:choice minOccurs = "0" maxOccurs = "unbounded">
				<xs:element name = "itemref" type = "itemrefType"/>
				<xs:element name = "item" type = "itemType"/>
				<xs:element name = "sectionref" type = "sectionrefType"/>
				<xs:element name = "section" type = "sectionType"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
		<xs:attribute name = "title" type = "xs:string"/>
		<xs:attribute ref = "xml:lang"/>
	</xs:complexType>
	
	<!-- ******************** -->
	<!-- ** sectioncontrol ** -->
	<!-- ******************** -->
	
	<xs:complexType name = "sectioncontrolType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
		</xs:sequence>
		<xs:attribute name = "feedbackswitch" default = "Yes">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "hintswitch" default = "Yes">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "solutionswitch" default = "Yes">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Yes"/>
					<xs:enumeration value = "No"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "view" default = "All">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "All"/>
					<xs:enumeration value = "Administrator"/>
					<xs:enumeration value = "AdminAuthority"/>
					<xs:enumeration value = "Assessor"/>
					<xs:enumeration value = "Author"/>
					<xs:enumeration value = "Candidate"/>
					<xs:enumeration value = "InvigilatorProctor"/>
					<xs:enumeration value = "Psychometrician"/>
					<xs:enumeration value = "Scorer"/>
					<xs:enumeration value = "Tutor"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- ********************* -->
	<!-- ** sectionfeedback ** -->	
	<!-- ********************* -->
	
	<xs:complexType name = "sectionfeedbackType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:choice>
				<xs:element name = "material" type = "materialType" maxOccurs = "unbounded"/>
				<xs:element name = "flow_mat" type = "flow_matType" maxOccurs = "unbounded"/>
			</xs:choice>
		</xs:sequence>
		<xs:attribute name = "view" default = "All">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "All"/>
					<xs:enumeration value = "Administrator"/>
					<xs:enumeration value = "AdminAuthority"/>
					<xs:enumeration value = "Assessor"/>
					<xs:enumeration value = "Author"/>
					<xs:enumeration value = "Candidate"/>
					<xs:enumeration value = "InvigilatorProctor"/>
					<xs:enumeration value = "Psychometrician"/>
					<xs:enumeration value = "Scorer"/>
					<xs:enumeration value = "Tutor"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
		<xs:attribute name = "ident" use = "required" type = "xs:string"/>
		<xs:attribute name = "title" type = "xs:string"/>
	</xs:complexType>
	
	<!-- *************************** -->	
	<!-- ** sectionproc_extension ** -->	
	<!-- *************************** -->
	
	<xs:complexType name = "sectionproc_extensionType" mixed = "true">
		<xs:sequence>
			<xs:any namespace = "##any" processContents = "lax" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:anyAttribute namespace = "http://www.w3.org/2001/XMLSchema" processContents = "lax"/>
	</xs:complexType>
	
	<!-- **************** -->
	<!-- ** sectionref ** -->
	<!-- **************** -->
	
	<xs:complexType name = "sectionrefType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "linkrefid" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- *************** -->
	<!-- ** selection ** -->
	<!-- *************** -->
	
	<xs:complexType name = "selectionType">
		<xs:sequence>
			<xs:element ref = "sourcebank_ref" minOccurs = "0"/>
			<xs:element ref = "selection_number" minOccurs = "0"/>
			<xs:element name = "selection_metadata" type = "selection_metadataType" minOccurs = "0"/>
			<xs:choice minOccurs = "0">
				<xs:element name = "and_selection" type = "and_selectionType"/>
				<xs:element name = "or_selection" type = "or_selectionType"/>
				<xs:element name = "not_selection" type = "not_selectionType"/>
				<xs:element ref = "selection_extension"/>
			</xs:choice>
		</xs:sequence>
	</xs:complexType>
	
	<!-- ************************* -->
	<!-- ** selection_extension ** -->	
	<!-- ************************* -->
	
	<xs:complexType name = "selection_extensionType" mixed = "true">
		<xs:sequence>
			<xs:any namespace = "##any" processContents = "lax" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:anyAttribute namespace = "http://www.w3.org/2001/XMLSchema" processContents = "lax"/>
	</xs:complexType>
	
	<!-- ************************ -->
	<!-- ** selection_metadata ** -->
	<!-- ************************ -->
	
	<xs:complexType name = "selection_metadataType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "mdname" use = "required" type = "xs:string"/>
				<xs:attribute name = "mdoperator" use = "required">
					<xs:simpleType>
						<xs:restriction base = "xs:NMTOKEN">
							<xs:enumeration value = "EQ"/>
							<xs:enumeration value = "NEQ"/>
							<xs:enumeration value = "LT"/>
							<xs:enumeration value = "LTE"/>
							<xs:enumeration value = "GT"/>
							<xs:enumeration value = "GTE"/>
						</xs:restriction>
					</xs:simpleType>
				</xs:attribute>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************************ -->
	<!-- ** selection_ordering ** -->
	<!-- ************************ -->
	
	<xs:complexType name = "selection_orderingType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:element name = "sequence_parameter" type = "sequence_parameterType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "selection" type = "selectionType" minOccurs = "0" maxOccurs = "unbounded"/>
			<xs:element name = "order" type = "orderType" minOccurs = "0"/>
		</xs:sequence>
		<xs:attribute name = "sequence_type" type = "xs:string"/>
	</xs:complexType>
	
	<!-- ************************ -->
	<!-- ** sequence_parameter ** -->
	<!-- ************************ -->
	
	<xs:complexType name = "sequence_parameterType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "pname" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************ -->
	<!-- ** setvar ** -->
	<!-- ************ -->
	
	<xs:complexType name = "setvarType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "varname" default = "SCORE" type = "xs:string"/>
				<xs:attribute name = "action" default = "Set">
					<xs:simpleType>
						<xs:restriction base = "xs:NMTOKEN">
							<xs:enumeration value = "Set"/>
							<xs:enumeration value = "Add"/>
							<xs:enumeration value = "Subtract"/>
							<xs:enumeration value = "Multiply"/>
							<xs:enumeration value = "Divide"/>
						</xs:restriction>
					</xs:simpleType>
				</xs:attribute>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************** -->
	<!-- ** solution ** -->
	<!-- ************** -->
	
	<xs:complexType name = "solutionType">
		<xs:sequence>
			<xs:element name = "qticomment" type = "qticommentType" minOccurs = "0"/>
			<xs:element name = "solutionmaterial" type = "solutionmaterialType" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:attribute name = "feedbackstyle" default = "Complete">
			<xs:simpleType>
				<xs:restriction base = "xs:NMTOKEN">
					<xs:enumeration value = "Complete"/>
					<xs:enumeration value = "Incremental"/>
					<xs:enumeration value = "Multilevel"/>
					<xs:enumeration value = "Proprietary"/>
				</xs:restriction>
			</xs:simpleType>
		</xs:attribute>
	</xs:complexType>
	
	<!-- ********************** -->
	<!-- ** solutionmaterial ** -->
	<!-- ********************** -->
	
	<xs:complexType name = "solutionmaterialType">
		<xs:choice>
			<xs:element name = "material" type = "materialType" maxOccurs = "unbounded"/>
			<xs:element name = "flow_mat" type = "flow_matType" maxOccurs = "unbounded"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- ******************* -->
	<!-- ** test_variable ** -->
	<!-- ******************* -->
	
	<xs:complexType name = "test_variableType">
		<xs:choice>
			<xs:element name = "variable_test" type = "variable_testType"/>
			<xs:element name = "and_test" type = "and_testType"/>
			<xs:element name = "or_test" type = "or_testType"/>
			<xs:element name = "not_test" type = "not_testType"/>
		</xs:choice>
	</xs:complexType>
	
	<!-- **************** -->
	<!-- ** unanswered ** -->
	<!-- **************** -->
	
	<xs:complexType name = "unansweredType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ******************* -->
	<!-- ** var_extension ** -->
	<!-- ******************* -->
	
	<xs:complexType name = "var_extensionType" mixed = "true">
		<xs:sequence>
			<xs:any namespace = "##any" processContents = "lax" minOccurs = "0" maxOccurs = "unbounded"/>
		</xs:sequence>
		<xs:anyAttribute namespace = "http://www.w3.org/2001/XMLSchema" processContents = "lax"/>
	</xs:complexType>
	
	<!-- ************** -->
	<!-- ** varequal ** -->
	<!-- ************** -->
	
	<xs:complexType name = "varequalType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "case" default = "No">
					<xs:simpleType>
						<xs:restriction base = "xs:NMTOKEN">
							<xs:enumeration value = "Yes"/>
							<xs:enumeration value = "No"/>
						</xs:restriction>
					</xs:simpleType>
				</xs:attribute>
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
				<xs:attribute name = "index" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- *********** -->
	<!-- ** vargt ** -->
	<!-- *********** -->
	
	<xs:complexType name = "vargtType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
				<xs:attribute name = "index" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************ -->
	<!-- ** vargte ** -->
	<!-- ************ -->
	
	<xs:complexType name = "vargteType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
				<xs:attribute name = "index" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ******************* -->	
	<!-- ** variable_test ** -->
	<!-- ******************* -->
	
	<xs:complexType name = "variable_testType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "varname" default = "SCORE" type = "xs:string"/>
				<xs:attribute name = "testoperator" use = "required">
					<xs:simpleType>
						<xs:restriction base = "xs:NMTOKEN">
							<xs:enumeration value = "EQ"/>
							<xs:enumeration value = "NEQ"/>
							<xs:enumeration value = "LT"/>
							<xs:enumeration value = "LTE"/>
							<xs:enumeration value = "GT"/>
							<xs:enumeration value = "GTE"/>
						</xs:restriction>
					</xs:simpleType>
				</xs:attribute>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- *************** -->
	<!-- ** varinside ** -->
	<!-- *************** -->
	
	<xs:complexType name = "varinsideType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "areatype" use = "required">
					<xs:simpleType>
						<xs:restriction base = "xs:NMTOKEN">
							<xs:enumeration value = "Ellipse"/>
							<xs:enumeration value = "Rectangle"/>
							<xs:enumeration value = "Bounded"/>
						</xs:restriction>
					</xs:simpleType>
				</xs:attribute>
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
				<xs:attribute name = "index" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- *********** -->
	<!-- ** varlt ** -->
	<!-- *********** -->
	
	<xs:complexType name = "varltType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
				<xs:attribute name = "index" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ************ -->
	<!-- ** varlte ** -->
	<!-- ************ -->
	
	<xs:complexType name = "varlteType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
				<xs:attribute name = "index" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- *************** -->
	<!-- ** varsubset ** -->
	<!-- *************** -->
	
	<xs:complexType name = "varsubsetType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
				<xs:attribute name = "setmatch" default = "Exact">
					<xs:simpleType>
						<xs:restriction base = "xs:NMTOKEN">
							<xs:enumeration value = "Exact"/>
							<xs:enumeration value = "Partial"/>
						</xs:restriction>
					</xs:simpleType>
				</xs:attribute>
				<xs:attribute name = "index" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- ****************** -->
	<!-- ** varsubstring ** -->
	<!-- ****************** -->
	
	<xs:complexType name = "varsubstringType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "index" type = "xs:string"/>
				<xs:attribute name = "respident" use = "required" type = "xs:string"/>
				<xs:attribute name = "case" default = "No">
					<xs:simpleType>
						<xs:restriction base = "xs:NMTOKEN">
							<xs:enumeration value = "Yes"/>
							<xs:enumeration value = "No"/>
						</xs:restriction>
					</xs:simpleType>
				</xs:attribute>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
	
	<!-- **************** -->
	<!-- ** vocabulary ** -->
	<!-- **************** -->
	
	<xs:complexType name = "vocabularyType">
		<xs:simpleContent>
			<xs:extension base = "xs:string">
				<xs:attribute name = "uri" type = "xs:string"/>
				<xs:attribute name = "entityref" type = "xs:ENTITY"/>
				<xs:attribute name = "vocab_type" type = "xs:string"/>
			</xs:extension>
		</xs:simpleContent>
	</xs:complexType>
</xs:schema>`;async function Tc(e,t){let n=new hc.default,r=`quiz_`+Math.random().toString(36).substr(2,9),i=t.replace(`.docx`,``)||`Imported Quiz`,a=[],o=0,s=/src="data:(image\/[^;]+);base64,([^"]+)"/g;e.forEach(e=>{e.text=e.text.replace(s,(e,t,n)=>{let r=t.split(`/`)[1]||`png`,i=`image_${o++}.${r}`;return a.push({filename:i,base64:n}),`src="images/${i}"`}),e.options.forEach(e=>{e.text=e.text.replace(s,(e,t,n)=>{let r=t.split(`/`)[1]||`png`,i=`image_${o++}.${r}`;return a.push({filename:i,base64:n}),`src="images/${i}"`})})});let c=Dc(r,i,e),l=n.folder(r);if(l.file(`${r}.xml`,c),a.length>0){let e=l.folder(`images`);a.forEach(t=>{e.file(t.filename,t.base64,{base64:!0})})}let u=Ec(r,i,a);n.file(`imsmanifest.xml`,u);let d=n.folder(`XSD_Files`);d.file(`imscp_v1p1.xsd`,Sc),d.file(`imsmd_v1p2p2.xsd`,Cc),d.file(`ims_qtiasiv1p2p1.xsd`,wc),(0,xc.saveAs)(await n.generateAsync({type:`blob`}),`${i.replace(/\s+/g,`_`)}_QTI_1.2.zip`)}function Ec(e,t,n=[]){let r=`<file href="${e}/${e}.xml"/>\n`;return n.forEach(t=>{r+=`            <file href="${e}/images/${t.filename}"/>\n`}),`<?xml version="1.0" encoding="UTF-8"?>
<manifest xmlns="http://www.imsglobal.org/xsd/imscp_v1p1" 
          xmlns:imsmd="http://www.imsglobal.org/xsd/imsmd_v1p2" 
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
          identifier="manifest_${e}"
          xsi:schemaLocation="http://www.imsglobal.org/xsd/imscp_v1p1 http://www.imsglobal.org/xsd/imscp_v1p1.xsd 
                              http://www.imsglobal.org/xsd/imsmd_v1p2 http://www.imsglobal.org/xsd/imsmd_v1p2p2.xsd">
    <metadata>
        <schema>IMS Content</schema>
        <schemaversion>1.1.3</schemaversion>
        <imsmd:lom>
            <imsmd:general>
                <imsmd:title>
                    <imsmd:langstring xml:lang="en-US">${t}</imsmd:langstring>
                </imsmd:title>
            </imsmd:general>
        </imsmd:lom>
    </metadata>
    <organizations/>
    <resources>
        <resource identifier="${e}" type="imsqti_xmlv1p2" href="${e}/${e}.xml">
            ${r.trim()}
        </resource>
    </resources>
</manifest>`}function Dc(e,t,n){let r=``;return n.forEach((e,t)=>{r+=Oc(e,t)}),`<?xml version="1.0" encoding="UTF-8"?>
<questestinterop xmlns="http://www.imsglobal.org/xsd/ims_qtiasiv1p2" 
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                 xsi:schemaLocation="http://www.imsglobal.org/xsd/ims_qtiasiv1p2 http://www.imsglobal.org/xsd/ims_qtiasiv1p2p1.xsd">
    <assessment ident="${e}" title="${t}">
        <section ident="root_section">
${r}
        </section>
    </assessment>
</questestinterop>`}function Oc(e,t){let n=`item_${t+1}`,r=`choice_0`,i=``;return e.options.forEach((e,t)=>{let n=`choice_${t}`;e.isCorrect&&(r=n),i+=`
                        <response_label ident="${n}">
                            <material>
                                <mattext texttype="text/html"><![CDATA[${e.text}]]></mattext>
                            </material>
                        </response_label>`}),`
            <item ident="${n}" title="Question ${t+1}">
                <itemmetadata>
                    <qtimetadata>
                        <qtimetadatafield>
                            <fieldlabel>question_type</fieldlabel>
                            <fieldentry>multiple_choice_question</fieldentry>
                        </qtimetadatafield>
                    </qtimetadata>
                </itemmetadata>
                <presentation>
                    <material>
                        <mattext texttype="text/html"><![CDATA[${e.text}]]></mattext>
                    </material>
                    <response_lid ident="response1" rcardinality="Single">
                        <render_choice>
${i}
                        </render_choice>
                    </response_lid>
                </presentation>
                <resprocessing>
                    <outcomes>
                        <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
                    </outcomes>
                    <respcondition continue="No">
                        <conditionvar>
                            <varequal respident="response1">${r}</varequal>
                        </conditionvar>
                        <setvar action="Set" varname="SCORE">100</setvar>
                    </respcondition>
                </resprocessing>
            </item>`}var kc=null,Ac=[],jc=document.getElementById(`dropzone`),Mc=document.getElementById(`fileInput`),Nc=document.getElementById(`fileInfo`),Pc=document.getElementById(`fileName`),Fc=document.getElementById(`removeFile`),Ic=document.getElementById(`previewSection`),Lc=document.getElementById(`instructionsSection`),Rc=document.getElementById(`previewContainer`),zc=document.getElementById(`questionCount`),Bc=document.getElementById(`exportBtn`),Vc=document.getElementById(`debugSection`),Hc=document.getElementById(`debugHtml`),Uc=document.getElementById(`toast`),Wc=document.getElementById(`toastMessage`);jc.addEventListener(`dragover`,e=>{e.preventDefault(),jc.classList.add(`dragover`)}),jc.addEventListener(`dragleave`,()=>{jc.classList.remove(`dragover`)}),jc.addEventListener(`drop`,e=>{e.preventDefault(),jc.classList.remove(`dragover`),e.dataTransfer.files.length>0&&Gc(e.dataTransfer.files[0])}),jc.addEventListener(`click`,()=>{Mc.click()}),Mc.addEventListener(`change`,e=>{e.target.files.length>0&&Gc(e.target.files[0])}),Fc.addEventListener(`click`,()=>{Kc()}),Bc.addEventListener(`click`,Yc);function Gc(e){e.name.toLowerCase().endsWith(`.docx`)?(kc=e,Pc.textContent=e.name,jc.classList.add(`hidden`),Lc.classList.add(`hidden`),Nc.classList.remove(`hidden`),Ic.classList.add(`hidden`),Ac=[],qc()):Xc(`Please upload a .docx file.`,`error`)}function Kc(){kc=null,Ac=[],Mc.value=``,jc.classList.remove(`hidden`),Lc.classList.remove(`hidden`),Nc.classList.add(`hidden`),Ic.classList.add(`hidden`)}function qc(){if(!kc)return;Xc(`Parsing document...`,`success`);let e=new FileReader;e.onload=async function(e){try{let t=e.target.result,{html:n,mathMap:r}=await yc(t);Ac=bc(n),Ac.forEach(e=>{r.forEach((t,n)=>{e.text=e.text.replace(n,t),e.options.forEach(e=>{e.text=e.text.replace(n,t)})})}),Jc(Ac,n),Xc(`Document parsed successfully!`)}catch(e){console.error(e),Xc(`Error processing document. Check console for details.`,`error`)}},e.readAsArrayBuffer(kc)}function Jc(e,t){if(Rc.innerHTML=``,Vc.classList.remove(`hidden`),Hc.value=t||`No HTML generated.`,e.length===0){Rc.innerHTML=`<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No questions could be identified. Please ensure your document follows the expected formatting.</p>`,Bc.disabled=!0,zc.textContent=`0`,Ic.classList.remove(`hidden`);return}zc.textContent=e.length,Bc.disabled=!1,e.forEach((e,t)=>{let n=document.createElement(`div`);n.className=`question-card`;let r=document.createElement(`div`);r.className=`question-header-container`;let i=document.createElement(`div`);i.className=`question-text`;let a=document.createElement(`strong`);a.textContent=`Q${t+1}: `;let o=document.createElement(`span`);o.innerHTML=e.text,o.contentEditable=!0,o.className=`editable-text`,o.addEventListener(`input`,()=>{e.text=o.innerHTML}),i.appendChild(a),i.appendChild(o),r.appendChild(i);let s=e.options.some(e=>e.isCorrect),c=document.createElement(`span`);c.className=`badge warning hidden`,c.textContent=`Missing Correct Answer`,r.appendChild(c),s||c.classList.remove(`hidden`),n.appendChild(r);let l=document.createElement(`ul`);l.className=`options-list`,e.options.forEach((n,r)=>{let i=document.createElement(`li`);i.className=`option-item ${n.isCorrect?`correct`:``}`;let a=document.createElement(`label`);a.className=`radio-wrapper`;let o=document.createElement(`input`);o.type=`radio`,o.name=`q_${t}_correct`,o.checked=n.isCorrect;let s=document.createElement(`span`);s.className=`radio-custom`,a.appendChild(o),a.appendChild(s),o.addEventListener(`change`,()=>{e.options.forEach(e=>e.isCorrect=!1),n.isCorrect=!0,Array.from(l.children).forEach(e=>e.classList.remove(`correct`)),i.classList.add(`correct`),c.classList.add(`hidden`)});let u=document.createElement(`div`);u.className=`option-content editable-text`,u.contentEditable=!0,u.innerHTML=n.text,u.addEventListener(`input`,()=>{n.text=u.innerHTML}),i.appendChild(a),i.appendChild(u),l.appendChild(i)}),n.appendChild(l),Rc.appendChild(n)}),Ic.classList.remove(`hidden`),window.MathJax&&window.MathJax.typesetPromise([Rc]).catch(e=>console.log(`MathJax error:`,e))}function Yc(){Ac.length>0&&kc&&(Tc(Ac,kc.name),Xc(`QTI Package generated successfully!`))}function Xc(e,t=`success`){Wc.textContent=e,t===`error`?Uc.classList.add(`error`):Uc.classList.remove(`error`),Uc.classList.remove(`hidden`),Uc.offsetWidth,Uc.classList.add(`show`),setTimeout(()=>{Uc.classList.remove(`show`),setTimeout(()=>Uc.classList.add(`hidden`),300)},3e3)}