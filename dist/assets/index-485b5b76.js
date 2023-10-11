var V9=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var CQ=V9((NQ,vd)=>{function q9(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var G9=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vs={},Q9={get exports(){return Vs},set exports(e){Vs=e}},Pc={},C={},K9={get exports(){return C},set exports(e){C=e}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pl=Symbol.for("react.element"),Z9=Symbol.for("react.portal"),J9=Symbol.for("react.fragment"),X9=Symbol.for("react.strict_mode"),e8=Symbol.for("react.profiler"),t8=Symbol.for("react.provider"),n8=Symbol.for("react.context"),r8=Symbol.for("react.forward_ref"),i8=Symbol.for("react.suspense"),o8=Symbol.for("react.memo"),a8=Symbol.for("react.lazy"),Oy=Symbol.iterator;function s8(e){return e===null||typeof e!="object"?null:(e=Oy&&e[Oy]||e["@@iterator"],typeof e=="function"?e:null)}var ub={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},db=Object.assign,cb={};function Ha(e,t,n){this.props=e,this.context=t,this.refs=cb,this.updater=n||ub}Ha.prototype.isReactComponent={};Ha.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ha.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fb(){}fb.prototype=Ha.prototype;function sg(e,t,n){this.props=e,this.context=t,this.refs=cb,this.updater=n||ub}var lg=sg.prototype=new fb;lg.constructor=sg;db(lg,Ha.prototype);lg.isPureReactComponent=!0;var _y=Array.isArray,hb=Object.prototype.hasOwnProperty,ug={current:null},pb={key:!0,ref:!0,__self:!0,__source:!0};function gb(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)hb.call(t,r)&&!pb.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Pl,type:e,key:o,ref:a,props:i,_owner:ug.current}}function l8(e,t){return{$$typeof:Pl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dg(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pl}function u8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ky=/\/+/g;function Yf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?u8(""+e.key):t.toString(36)}function Bu(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Pl:case Z9:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Yf(a,0):r,_y(i)?(n="",e!=null&&(n=e.replace(ky,"$&/")+"/"),Bu(i,t,n,"",function(d){return d})):i!=null&&(dg(i)&&(i=l8(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ky,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",_y(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+Yf(o,l);a+=Bu(o,t,n,u,i)}else if(u=s8(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+Yf(o,l++),a+=Bu(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function tu(e,t,n){if(e==null)return e;var r=[],i=0;return Bu(e,r,"","",function(o){return t.call(n,o,i++)}),r}function d8(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ft={current:null},Hu={transition:null},c8={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:Hu,ReactCurrentOwner:ug};$e.Children={map:tu,forEach:function(e,t,n){tu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tu(e,function(){t++}),t},toArray:function(e){return tu(e,function(t){return t})||[]},only:function(e){if(!dg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$e.Component=Ha;$e.Fragment=J9;$e.Profiler=e8;$e.PureComponent=sg;$e.StrictMode=X9;$e.Suspense=i8;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c8;$e.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=db({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ug.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)hb.call(t,u)&&!pb.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Pl,type:e.type,key:i,ref:o,props:r,_owner:a}};$e.createContext=function(e){return e={$$typeof:n8,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:t8,_context:e},e.Consumer=e};$e.createElement=gb;$e.createFactory=function(e){var t=gb.bind(null,e);return t.type=e,t};$e.createRef=function(){return{current:null}};$e.forwardRef=function(e){return{$$typeof:r8,render:e}};$e.isValidElement=dg;$e.lazy=function(e){return{$$typeof:a8,_payload:{_status:-1,_result:e},_init:d8}};$e.memo=function(e,t){return{$$typeof:o8,type:e,compare:t===void 0?null:t}};$e.startTransition=function(e){var t=Hu.transition;Hu.transition={};try{e()}finally{Hu.transition=t}};$e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$e.useCallback=function(e,t){return Ft.current.useCallback(e,t)};$e.useContext=function(e){return Ft.current.useContext(e)};$e.useDebugValue=function(){};$e.useDeferredValue=function(e){return Ft.current.useDeferredValue(e)};$e.useEffect=function(e,t){return Ft.current.useEffect(e,t)};$e.useId=function(){return Ft.current.useId()};$e.useImperativeHandle=function(e,t,n){return Ft.current.useImperativeHandle(e,t,n)};$e.useInsertionEffect=function(e,t){return Ft.current.useInsertionEffect(e,t)};$e.useLayoutEffect=function(e,t){return Ft.current.useLayoutEffect(e,t)};$e.useMemo=function(e,t){return Ft.current.useMemo(e,t)};$e.useReducer=function(e,t,n){return Ft.current.useReducer(e,t,n)};$e.useRef=function(e){return Ft.current.useRef(e)};$e.useState=function(e){return Ft.current.useState(e)};$e.useSyncExternalStore=function(e,t,n){return Ft.current.useSyncExternalStore(e,t,n)};$e.useTransition=function(){return Ft.current.useTransition()};$e.version="18.2.0";(function(e){e.exports=$e})(K9);const ne=lb(C),rp=q9({__proto__:null,default:ne},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f8=C,h8=Symbol.for("react.element"),p8=Symbol.for("react.fragment"),g8=Object.prototype.hasOwnProperty,m8=f8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y8={key:!0,ref:!0,__self:!0,__source:!0};function mb(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)g8.call(t,r)&&!y8.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:h8,type:e,key:o,ref:a,props:i,_owner:m8.current}}Pc.Fragment=p8;Pc.jsx=mb;Pc.jsxs=mb;(function(e){e.exports=Pc})(Q9);const ro=Vs.Fragment,s=Vs.jsx,y=Vs.jsxs;var ip={},xd={},v8={get exports(){return xd},set exports(e){xd=e}},Jt={},op={},x8={get exports(){return op},set exports(e){op=e}},yb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,_){var k=z.length;z.push(_);e:for(;0<k;){var U=k-1>>>1,D=z[U];if(0<i(D,_))z[U]=_,z[k]=D,k=U;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var _=z[0],k=z.pop();if(k!==_){z[0]=k;e:for(var U=0,D=z.length,H=D>>>1;U<H;){var V=2*(U+1)-1,ie=z[V],I=V+1,G=z[I];if(0>i(ie,k))I<D&&0>i(G,ie)?(z[U]=G,z[I]=k,U=I):(z[U]=ie,z[V]=k,U=V);else if(I<D&&0>i(G,k))z[U]=G,z[I]=k,U=I;else break e}}return _}function i(z,_){var k=z.sortIndex-_.sortIndex;return k!==0?k:z.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],d=[],f=1,h=null,m=3,x=!1,v=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(z){for(var _=n(d);_!==null;){if(_.callback===null)r(d);else if(_.startTime<=z)r(d),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(d)}}function S(z){if(w=!1,$(z),!v)if(n(u)!==null)v=!0,ee(P);else{var _=n(d);_!==null&&re(S,_.startTime-z)}}function P(z,_){v=!1,w&&(w=!1,p(R),R=-1),x=!0;var k=m;try{for($(_),h=n(u);h!==null&&(!(h.expirationTime>_)||z&&!se());){var U=h.callback;if(typeof U=="function"){h.callback=null,m=h.priorityLevel;var D=U(h.expirationTime<=_);_=e.unstable_now(),typeof D=="function"?h.callback=D:h===n(u)&&r(u),$(_)}else r(u);h=n(u)}if(h!==null)var H=!0;else{var V=n(d);V!==null&&re(S,V.startTime-_),H=!1}return H}finally{h=null,m=k,x=!1}}var N=!1,T=null,R=-1,W=5,L=-1;function se(){return!(e.unstable_now()-L<W)}function M(){if(T!==null){var z=e.unstable_now();L=z;var _=!0;try{_=T(!0,z)}finally{_?j():(N=!1,T=null)}}else N=!1}var j;if(typeof g=="function")j=function(){g(M)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,F=X.port2;X.port1.onmessage=M,j=function(){F.postMessage(null)}}else j=function(){b(M,0)};function ee(z){T=z,N||(N=!0,j())}function re(z,_){R=b(function(){z(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,ee(P))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var k=m;m=_;try{return z()}finally{m=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,_){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var k=m;m=z;try{return _()}finally{m=k}},e.unstable_scheduleCallback=function(z,_,k){var U=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?U+k:U):k=U,z){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=k+D,z={id:f++,callback:_,priorityLevel:z,startTime:k,expirationTime:D,sortIndex:-1},k>U?(z.sortIndex=k,t(d,z),n(u)===null&&z===n(d)&&(w?(p(R),R=-1):w=!0,re(S,k-U))):(z.sortIndex=D,t(u,z),v||x||(v=!0,ee(P))),z},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(z){var _=m;return function(){var k=m;m=_;try{return z.apply(this,arguments)}finally{m=k}}}})(yb);(function(e){e.exports=yb})(x8);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vb=C,Kt=op;function Q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xb=new Set,qs={};function fo(e,t){Na(e,t),Na(e+"Capture",t)}function Na(e,t){for(qs[e]=t,e=0;e<t.length;e++)xb.add(t[e])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ap=Object.prototype.hasOwnProperty,b8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ny={},Ey={};function $8(e){return ap.call(Ey,e)?!0:ap.call(Ny,e)?!1:b8.test(e)?Ey[e]=!0:(Ny[e]=!0,!1)}function w8(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function S8(e,t,n,r){if(t===null||typeof t>"u"||w8(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Dt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){bt[e]=new Dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];bt[t]=new Dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){bt[e]=new Dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){bt[e]=new Dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){bt[e]=new Dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){bt[e]=new Dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){bt[e]=new Dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){bt[e]=new Dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){bt[e]=new Dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var cg=/[\-:]([a-z])/g;function fg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cg,fg);bt[t]=new Dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cg,fg);bt[t]=new Dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cg,fg);bt[t]=new Dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){bt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){bt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function hg(e,t,n,r){var i=bt.hasOwnProperty(t)?bt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(S8(t,n,i,r)&&(n=null),r||i===null?$8(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Er=vb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nu=Symbol.for("react.element"),Xo=Symbol.for("react.portal"),ea=Symbol.for("react.fragment"),pg=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),bb=Symbol.for("react.provider"),$b=Symbol.for("react.context"),gg=Symbol.for("react.forward_ref"),lp=Symbol.for("react.suspense"),up=Symbol.for("react.suspense_list"),mg=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),wb=Symbol.for("react.offscreen"),Iy=Symbol.iterator;function is(e){return e===null||typeof e!="object"?null:(e=Iy&&e[Iy]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,Vf;function ks(e){if(Vf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vf=t&&t[1]||""}return`
`+Vf+e}var qf=!1;function Gf(e,t){if(!e||qf)return"";qf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{qf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ks(e):""}function C8(e){switch(e.tag){case 5:return ks(e.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return e=Gf(e.type,!1),e;case 11:return e=Gf(e.type.render,!1),e;case 1:return e=Gf(e.type,!0),e;default:return""}}function dp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ea:return"Fragment";case Xo:return"Portal";case sp:return"Profiler";case pg:return"StrictMode";case lp:return"Suspense";case up:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $b:return(e.displayName||"Context")+".Consumer";case bb:return(e._context.displayName||"Context")+".Provider";case gg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mg:return t=e.displayName||null,t!==null?t:dp(e.type)||"Memo";case Br:t=e._payload,e=e._init;try{return dp(e(t))}catch{}}return null}function P8(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dp(t);case 8:return t===pg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O8(e){var t=Sb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ru(e){e._valueTracker||(e._valueTracker=O8(e))}function Cb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sb(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cp(e,t){var n=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ty(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pb(e,t){t=t.checked,t!=null&&hg(e,"checked",t,!1)}function fp(e,t){Pb(e,t);var n=gi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hp(e,t.type,n):t.hasOwnProperty("defaultValue")&&hp(e,t.type,gi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ay(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hp(e,t,n){(t!=="number"||bd(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ns=Array.isArray;function ma(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Q(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ry(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Q(92));if(Ns(n)){if(1<n.length)throw Error(Q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gi(n)}}function Ob(e,t){var n=gi(t.value),r=gi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fy(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _b(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gp(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_b(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var iu,kb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(iu=iu||document.createElement("div"),iu.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=iu.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_8=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(e){_8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rs[t]=Rs[e]})});function Nb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rs.hasOwnProperty(e)&&Rs[e]?(""+t).trim():t+"px"}function Eb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var k8=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mp(e,t){if(t){if(k8[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Q(62))}}function yp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vp=null;function yg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xp=null,ya=null,va=null;function Dy(e){if(e=kl(e)){if(typeof xp!="function")throw Error(Q(280));var t=e.stateNode;t&&(t=Ec(t),xp(e.stateNode,e.type,t))}}function Ib(e){ya?va?va.push(e):va=[e]:ya=e}function Tb(){if(ya){var e=ya,t=va;if(va=ya=null,Dy(e),t)for(e=0;e<t.length;e++)Dy(t[e])}}function Ab(e,t){return e(t)}function Rb(){}var Qf=!1;function Fb(e,t,n){if(Qf)return e(t,n);Qf=!0;try{return Ab(e,t,n)}finally{Qf=!1,(ya!==null||va!==null)&&(Rb(),Tb())}}function Qs(e,t){var n=e.stateNode;if(n===null)return null;var r=Ec(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var bp=!1;if(Sr)try{var os={};Object.defineProperty(os,"passive",{get:function(){bp=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{bp=!1}function N8(e,t,n,r,i,o,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var Fs=!1,$d=null,wd=!1,$p=null,E8={onError:function(e){Fs=!0,$d=e}};function I8(e,t,n,r,i,o,a,l,u){Fs=!1,$d=null,N8.apply(E8,arguments)}function T8(e,t,n,r,i,o,a,l,u){if(I8.apply(this,arguments),Fs){if(Fs){var d=$d;Fs=!1,$d=null}else throw Error(Q(198));wd||(wd=!0,$p=d)}}function ho(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Db(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function My(e){if(ho(e)!==e)throw Error(Q(188))}function A8(e){var t=e.alternate;if(!t){if(t=ho(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return My(i),e;if(o===r)return My(i),t;o=o.sibling}throw Error(Q(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(Q(189))}}if(n.alternate!==r)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function Mb(e){return e=A8(e),e!==null?jb(e):null}function jb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jb(e);if(t!==null)return t;e=e.sibling}return null}var Lb=Kt.unstable_scheduleCallback,jy=Kt.unstable_cancelCallback,R8=Kt.unstable_shouldYield,F8=Kt.unstable_requestPaint,tt=Kt.unstable_now,D8=Kt.unstable_getCurrentPriorityLevel,vg=Kt.unstable_ImmediatePriority,zb=Kt.unstable_UserBlockingPriority,Sd=Kt.unstable_NormalPriority,M8=Kt.unstable_LowPriority,Ub=Kt.unstable_IdlePriority,Oc=null,Zn=null;function j8(e){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Oc,e,void 0,(e.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:U8,L8=Math.log,z8=Math.LN2;function U8(e){return e>>>=0,e===0?32:31-(L8(e)/z8|0)|0}var ou=64,au=4194304;function Es(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cd(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Es(l):(o&=a,o!==0&&(r=Es(o)))}else a=n&~i,a!==0?r=Es(a):o!==0&&(r=Es(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rn(t),i=1<<n,r|=e[n],t&=~i;return r}function B8(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H8(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Rn(o),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=B8(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function wp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bb(){var e=ou;return ou<<=1,!(ou&4194240)&&(ou=64),e}function Kf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ol(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rn(t),e[t]=n}function W8(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ee=0;function Hb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wb,bg,Yb,Vb,qb,Sp=!1,su=[],ei=null,ti=null,ni=null,Ks=new Map,Zs=new Map,Yr=[],Y8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ly(e,t){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":Ks.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(t.pointerId)}}function as(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=kl(t),t!==null&&bg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function V8(e,t,n,r,i){switch(t){case"focusin":return ei=as(ei,e,t,n,r,i),!0;case"dragenter":return ti=as(ti,e,t,n,r,i),!0;case"mouseover":return ni=as(ni,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ks.set(o,as(Ks.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Zs.set(o,as(Zs.get(o)||null,e,t,n,r,i)),!0}return!1}function Gb(e){var t=Vi(e.target);if(t!==null){var n=ho(t);if(n!==null){if(t=n.tag,t===13){if(t=Db(n),t!==null){e.blockedOn=t,qb(e.priority,function(){Yb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vp=r,n.target.dispatchEvent(r),vp=null}else return t=kl(n),t!==null&&bg(t),e.blockedOn=n,!1;t.shift()}return!0}function zy(e,t,n){Wu(e)&&n.delete(t)}function q8(){Sp=!1,ei!==null&&Wu(ei)&&(ei=null),ti!==null&&Wu(ti)&&(ti=null),ni!==null&&Wu(ni)&&(ni=null),Ks.forEach(zy),Zs.forEach(zy)}function ss(e,t){e.blockedOn===t&&(e.blockedOn=null,Sp||(Sp=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,q8)))}function Js(e){function t(i){return ss(i,e)}if(0<su.length){ss(su[0],e);for(var n=1;n<su.length;n++){var r=su[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ei!==null&&ss(ei,e),ti!==null&&ss(ti,e),ni!==null&&ss(ni,e),Ks.forEach(t),Zs.forEach(t),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)Gb(n),n.blockedOn===null&&Yr.shift()}var xa=Er.ReactCurrentBatchConfig,Pd=!0;function G8(e,t,n,r){var i=Ee,o=xa.transition;xa.transition=null;try{Ee=1,$g(e,t,n,r)}finally{Ee=i,xa.transition=o}}function Q8(e,t,n,r){var i=Ee,o=xa.transition;xa.transition=null;try{Ee=4,$g(e,t,n,r)}finally{Ee=i,xa.transition=o}}function $g(e,t,n,r){if(Pd){var i=Cp(e,t,n,r);if(i===null)ah(e,t,r,Od,n),Ly(e,r);else if(V8(i,e,t,n,r))r.stopPropagation();else if(Ly(e,r),t&4&&-1<Y8.indexOf(e)){for(;i!==null;){var o=kl(i);if(o!==null&&Wb(o),o=Cp(e,t,n,r),o===null&&ah(e,t,r,Od,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ah(e,t,r,null,n)}}var Od=null;function Cp(e,t,n,r){if(Od=null,e=yg(r),e=Vi(e),e!==null)if(t=ho(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Db(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Od=e,null}function Qb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D8()){case vg:return 1;case zb:return 4;case Sd:case M8:return 16;case Ub:return 536870912;default:return 16}default:return 16}}var Gr=null,wg=null,Yu=null;function Kb(){if(Yu)return Yu;var e,t=wg,n=t.length,r,i="value"in Gr?Gr.value:Gr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Yu=i.slice(e,1<r?1-r:void 0)}function Vu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lu(){return!0}function Uy(){return!1}function Xt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?lu:Uy,this.isPropagationStopped=Uy,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lu)},persist:function(){},isPersistent:lu}),t}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sg=Xt(Wa),_l=Qe({},Wa,{view:0,detail:0}),K8=Xt(_l),Zf,Jf,ls,_c=Qe({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ls&&(ls&&e.type==="mousemove"?(Zf=e.screenX-ls.screenX,Jf=e.screenY-ls.screenY):Jf=Zf=0,ls=e),Zf)},movementY:function(e){return"movementY"in e?e.movementY:Jf}}),By=Xt(_c),Z8=Qe({},_c,{dataTransfer:0}),J8=Xt(Z8),X8=Qe({},_l,{relatedTarget:0}),Xf=Xt(X8),e6=Qe({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),t6=Xt(e6),n6=Qe({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r6=Xt(n6),i6=Qe({},Wa,{data:0}),Hy=Xt(i6),o6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l6(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=s6[e])?!!t[e]:!1}function Cg(){return l6}var u6=Qe({},_l,{key:function(e){if(e.key){var t=o6[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cg,charCode:function(e){return e.type==="keypress"?Vu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d6=Xt(u6),c6=Qe({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wy=Xt(c6),f6=Qe({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cg}),h6=Xt(f6),p6=Qe({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),g6=Xt(p6),m6=Qe({},_c,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y6=Xt(m6),v6=[9,13,27,32],Pg=Sr&&"CompositionEvent"in window,Ds=null;Sr&&"documentMode"in document&&(Ds=document.documentMode);var x6=Sr&&"TextEvent"in window&&!Ds,Zb=Sr&&(!Pg||Ds&&8<Ds&&11>=Ds),Yy=String.fromCharCode(32),Vy=!1;function Jb(e,t){switch(e){case"keyup":return v6.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ta=!1;function b6(e,t){switch(e){case"compositionend":return Xb(t);case"keypress":return t.which!==32?null:(Vy=!0,Yy);case"textInput":return e=t.data,e===Yy&&Vy?null:e;default:return null}}function $6(e,t){if(ta)return e==="compositionend"||!Pg&&Jb(e,t)?(e=Kb(),Yu=wg=Gr=null,ta=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zb&&t.locale!=="ko"?null:t.data;default:return null}}var w6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w6[e.type]:t==="textarea"}function e4(e,t,n,r){Ib(r),t=_d(t,"onChange"),0<t.length&&(n=new Sg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ms=null,Xs=null;function S6(e){c4(e,0)}function kc(e){var t=ia(e);if(Cb(t))return e}function C6(e,t){if(e==="change")return t}var t4=!1;if(Sr){var eh;if(Sr){var th="oninput"in document;if(!th){var Gy=document.createElement("div");Gy.setAttribute("oninput","return;"),th=typeof Gy.oninput=="function"}eh=th}else eh=!1;t4=eh&&(!document.documentMode||9<document.documentMode)}function Qy(){Ms&&(Ms.detachEvent("onpropertychange",n4),Xs=Ms=null)}function n4(e){if(e.propertyName==="value"&&kc(Xs)){var t=[];e4(t,Xs,e,yg(e)),Fb(S6,t)}}function P6(e,t,n){e==="focusin"?(Qy(),Ms=t,Xs=n,Ms.attachEvent("onpropertychange",n4)):e==="focusout"&&Qy()}function O6(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kc(Xs)}function _6(e,t){if(e==="click")return kc(t)}function k6(e,t){if(e==="input"||e==="change")return kc(t)}function N6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mn=typeof Object.is=="function"?Object.is:N6;function el(e,t){if(Mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ap.call(t,i)||!Mn(e[i],t[i]))return!1}return!0}function Ky(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zy(e,t){var n=Ky(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ky(n)}}function r4(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?r4(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function i4(){for(var e=window,t=bd();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bd(e.document)}return t}function Og(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function E6(e){var t=i4(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&r4(n.ownerDocument.documentElement,n)){if(r!==null&&Og(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Zy(n,o);var a=Zy(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var I6=Sr&&"documentMode"in document&&11>=document.documentMode,na=null,Pp=null,js=null,Op=!1;function Jy(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Op||na==null||na!==bd(r)||(r=na,"selectionStart"in r&&Og(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),js&&el(js,r)||(js=r,r=_d(Pp,"onSelect"),0<r.length&&(t=new Sg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=na)))}function uu(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ra={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},nh={},o4={};Sr&&(o4=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Nc(e){if(nh[e])return nh[e];if(!ra[e])return e;var t=ra[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in o4)return nh[e]=t[n];return e}var a4=Nc("animationend"),s4=Nc("animationiteration"),l4=Nc("animationstart"),u4=Nc("transitionend"),d4=new Map,Xy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(e,t){d4.set(e,t),fo(t,[e])}for(var rh=0;rh<Xy.length;rh++){var ih=Xy[rh],T6=ih.toLowerCase(),A6=ih[0].toUpperCase()+ih.slice(1);$i(T6,"on"+A6)}$i(a4,"onAnimationEnd");$i(s4,"onAnimationIteration");$i(l4,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(u4,"onTransitionEnd");Na("onMouseEnter",["mouseout","mouseover"]);Na("onMouseLeave",["mouseout","mouseover"]);Na("onPointerEnter",["pointerout","pointerover"]);Na("onPointerLeave",["pointerout","pointerover"]);fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R6=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function e2(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,T8(r,t,void 0,e),e.currentTarget=null}function c4(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;e2(i,l,d),o=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;e2(i,l,d),o=u}}}if(wd)throw e=$p,wd=!1,$p=null,e}function je(e,t){var n=t[Ip];n===void 0&&(n=t[Ip]=new Set);var r=e+"__bubble";n.has(r)||(f4(t,e,2,!1),n.add(r))}function oh(e,t,n){var r=0;t&&(r|=4),f4(n,e,r,t)}var du="_reactListening"+Math.random().toString(36).slice(2);function tl(e){if(!e[du]){e[du]=!0,xb.forEach(function(n){n!=="selectionchange"&&(R6.has(n)||oh(n,!1,e),oh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[du]||(t[du]=!0,oh("selectionchange",!1,t))}}function f4(e,t,n,r){switch(Qb(t)){case 1:var i=G8;break;case 4:i=Q8;break;default:i=$g}n=i.bind(null,t,n,e),i=void 0,!bp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ah(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Vi(l),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Fb(function(){var d=o,f=yg(n),h=[];e:{var m=d4.get(e);if(m!==void 0){var x=Sg,v=e;switch(e){case"keypress":if(Vu(n)===0)break e;case"keydown":case"keyup":x=d6;break;case"focusin":v="focus",x=Xf;break;case"focusout":v="blur",x=Xf;break;case"beforeblur":case"afterblur":x=Xf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=By;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=J8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=h6;break;case a4:case s4:case l4:x=t6;break;case u4:x=g6;break;case"scroll":x=K8;break;case"wheel":x=y6;break;case"copy":case"cut":case"paste":x=r6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Wy}var w=(t&4)!==0,b=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var g=d,$;g!==null;){$=g;var S=$.stateNode;if($.tag===5&&S!==null&&($=S,p!==null&&(S=Qs(g,p),S!=null&&w.push(nl(g,S,$)))),b)break;g=g.return}0<w.length&&(m=new x(m,v,null,n,f),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==vp&&(v=n.relatedTarget||n.fromElement)&&(Vi(v)||v[Cr]))break e;if((x||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=d,v=v?Vi(v):null,v!==null&&(b=ho(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if(w=By,S="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=Wy,S="onPointerLeave",p="onPointerEnter",g="pointer"),b=x==null?m:ia(x),$=v==null?m:ia(v),m=new w(S,g+"leave",x,n,f),m.target=b,m.relatedTarget=$,S=null,Vi(f)===d&&(w=new w(p,g+"enter",v,n,f),w.target=$,w.relatedTarget=b,S=w),b=S,x&&v)t:{for(w=x,p=v,g=0,$=w;$;$=yo($))g++;for($=0,S=p;S;S=yo(S))$++;for(;0<g-$;)w=yo(w),g--;for(;0<$-g;)p=yo(p),$--;for(;g--;){if(w===p||p!==null&&w===p.alternate)break t;w=yo(w),p=yo(p)}w=null}else w=null;x!==null&&t2(h,m,x,w,!1),v!==null&&b!==null&&t2(h,b,v,w,!0)}}e:{if(m=d?ia(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var P=C6;else if(qy(m))if(t4)P=k6;else{P=O6;var N=P6}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=_6);if(P&&(P=P(e,d))){e4(h,P,n,f);break e}N&&N(e,m,d),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&hp(m,"number",m.value)}switch(N=d?ia(d):window,e){case"focusin":(qy(N)||N.contentEditable==="true")&&(na=N,Pp=d,js=null);break;case"focusout":js=Pp=na=null;break;case"mousedown":Op=!0;break;case"contextmenu":case"mouseup":case"dragend":Op=!1,Jy(h,n,f);break;case"selectionchange":if(I6)break;case"keydown":case"keyup":Jy(h,n,f)}var T;if(Pg)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ta?Jb(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Zb&&n.locale!=="ko"&&(ta||R!=="onCompositionStart"?R==="onCompositionEnd"&&ta&&(T=Kb()):(Gr=f,wg="value"in Gr?Gr.value:Gr.textContent,ta=!0)),N=_d(d,R),0<N.length&&(R=new Hy(R,e,null,n,f),h.push({event:R,listeners:N}),T?R.data=T:(T=Xb(n),T!==null&&(R.data=T)))),(T=x6?b6(e,n):$6(e,n))&&(d=_d(d,"onBeforeInput"),0<d.length&&(f=new Hy("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:d}),f.data=T))}c4(h,t)})}function nl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _d(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Qs(e,n),o!=null&&r.unshift(nl(e,o,i)),o=Qs(e,t),o!=null&&r.push(nl(e,o,i))),e=e.return}return r}function yo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function t2(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Qs(n,o),u!=null&&a.unshift(nl(n,u,l))):i||(u=Qs(n,o),u!=null&&a.push(nl(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var F6=/\r\n?/g,D6=/\u0000|\uFFFD/g;function n2(e){return(typeof e=="string"?e:""+e).replace(F6,`
`).replace(D6,"")}function cu(e,t,n){if(t=n2(t),n2(e)!==t&&n)throw Error(Q(425))}function kd(){}var _p=null,kp=null;function Np(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ep=typeof setTimeout=="function"?setTimeout:void 0,M6=typeof clearTimeout=="function"?clearTimeout:void 0,r2=typeof Promise=="function"?Promise:void 0,j6=typeof queueMicrotask=="function"?queueMicrotask:typeof r2<"u"?function(e){return r2.resolve(null).then(e).catch(L6)}:Ep;function L6(e){setTimeout(function(){throw e})}function sh(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Js(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Js(t)}function ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function i2(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ya=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ya,rl="__reactProps$"+Ya,Cr="__reactContainer$"+Ya,Ip="__reactEvents$"+Ya,z6="__reactListeners$"+Ya,U6="__reactHandles$"+Ya;function Vi(e){var t=e[qn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cr]||n[qn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=i2(e);e!==null;){if(n=e[qn])return n;e=i2(e)}return t}e=n,n=e.parentNode}return null}function kl(e){return e=e[qn]||e[Cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ia(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Q(33))}function Ec(e){return e[rl]||null}var Tp=[],oa=-1;function wi(e){return{current:e}}function ze(e){0>oa||(e.current=Tp[oa],Tp[oa]=null,oa--)}function Me(e,t){oa++,Tp[oa]=e.current,e.current=t}var mi={},kt=wi(mi),Bt=wi(!1),io=mi;function Ea(e,t){var n=e.type.contextTypes;if(!n)return mi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(e){return e=e.childContextTypes,e!=null}function Nd(){ze(Bt),ze(kt)}function o2(e,t,n){if(kt.current!==mi)throw Error(Q(168));Me(kt,t),Me(Bt,n)}function h4(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Q(108,P8(e)||"Unknown",i));return Qe({},n,r)}function Ed(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mi,io=kt.current,Me(kt,e),Me(Bt,Bt.current),!0}function a2(e,t,n){var r=e.stateNode;if(!r)throw Error(Q(169));n?(e=h4(e,t,io),r.__reactInternalMemoizedMergedChildContext=e,ze(Bt),ze(kt),Me(kt,e)):ze(Bt),Me(Bt,n)}var hr=null,Ic=!1,lh=!1;function p4(e){hr===null?hr=[e]:hr.push(e)}function B6(e){Ic=!0,p4(e)}function Si(){if(!lh&&hr!==null){lh=!0;var e=0,t=Ee;try{var n=hr;for(Ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}hr=null,Ic=!1}catch(i){throw hr!==null&&(hr=hr.slice(e+1)),Lb(vg,Si),i}finally{Ee=t,lh=!1}}return null}var aa=[],sa=0,Id=null,Td=0,ln=[],un=0,oo=null,gr=1,mr="";function Ui(e,t){aa[sa++]=Td,aa[sa++]=Id,Id=e,Td=t}function g4(e,t,n){ln[un++]=gr,ln[un++]=mr,ln[un++]=oo,oo=e;var r=gr;e=mr;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var o=32-Rn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gr=1<<32-Rn(t)+i|n<<i|r,mr=o+e}else gr=1<<o|n<<i|r,mr=e}function _g(e){e.return!==null&&(Ui(e,1),g4(e,1,0))}function kg(e){for(;e===Id;)Id=aa[--sa],aa[sa]=null,Td=aa[--sa],aa[sa]=null;for(;e===oo;)oo=ln[--un],ln[un]=null,mr=ln[--un],ln[un]=null,gr=ln[--un],ln[un]=null}var Qt=null,Gt=null,Ye=!1,En=null;function m4(e,t){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function s2(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qt=e,Gt=ri(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qt=e,Gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=oo!==null?{id:gr,overflow:mr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qt=e,Gt=null,!0):!1;default:return!1}}function Ap(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rp(e){if(Ye){var t=Gt;if(t){var n=t;if(!s2(e,t)){if(Ap(e))throw Error(Q(418));t=ri(n.nextSibling);var r=Qt;t&&s2(e,t)?m4(r,n):(e.flags=e.flags&-4097|2,Ye=!1,Qt=e)}}else{if(Ap(e))throw Error(Q(418));e.flags=e.flags&-4097|2,Ye=!1,Qt=e}}}function l2(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function fu(e){if(e!==Qt)return!1;if(!Ye)return l2(e),Ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Np(e.type,e.memoizedProps)),t&&(t=Gt)){if(Ap(e))throw y4(),Error(Q(418));for(;t;)m4(e,t),t=ri(t.nextSibling)}if(l2(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Gt=ri(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Gt=null}}else Gt=Qt?ri(e.stateNode.nextSibling):null;return!0}function y4(){for(var e=Gt;e;)e=ri(e.nextSibling)}function Ia(){Gt=Qt=null,Ye=!1}function Ng(e){En===null?En=[e]:En.push(e)}var H6=Er.ReactCurrentBatchConfig;function kn(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ad=wi(null),Rd=null,la=null,Eg=null;function Ig(){Eg=la=Rd=null}function Tg(e){var t=Ad.current;ze(Ad),e._currentValue=t}function Fp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ba(e,t){Rd=e,Eg=la=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ut=!0),e.firstContext=null)}function gn(e){var t=e._currentValue;if(Eg!==e)if(e={context:e,memoizedValue:t,next:null},la===null){if(Rd===null)throw Error(Q(308));la=e,Rd.dependencies={lanes:0,firstContext:e}}else la=la.next=e;return t}var qi=null;function Ag(e){qi===null?qi=[e]:qi.push(e)}function v4(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ag(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pr(e,r)}function Pr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Hr=!1;function Rg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function x4(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function br(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ii(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pr(e,n)}return i=r.interleaved,i===null?(t.next=t,Ag(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pr(e,n)}function qu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xg(e,n)}}function u2(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fd(e,t,n,r){var i=e.updateQueue;Hr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;a=0,f=d=u=null,l=o;do{var m=l.lane,x=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(m=t,x=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(x,h,m);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(x,h,m):v,m==null)break e;h=Qe({},h,m);break e;case 2:Hr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=x,u=h):f=f.next=x,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(u=h),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);so|=a,e.lanes=a,e.memoizedState=h}}function d2(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Q(191,i));i.call(r)}}}var b4=new vb.Component().refs;function Dp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tc={isMounted:function(e){return(e=e._reactInternals)?ho(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=At(),i=ai(e),o=br(r,i);o.payload=t,n!=null&&(o.callback=n),t=ii(e,o,i),t!==null&&(Fn(t,e,i,r),qu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=At(),i=ai(e),o=br(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ii(e,o,i),t!==null&&(Fn(t,e,i,r),qu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),r=ai(e),i=br(n,r);i.tag=2,t!=null&&(i.callback=t),t=ii(e,i,r),t!==null&&(Fn(t,e,r,n),qu(t,e,r))}};function c2(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!el(n,r)||!el(i,o):!0}function $4(e,t,n){var r=!1,i=mi,o=t.contextType;return typeof o=="object"&&o!==null?o=gn(o):(i=Ht(t)?io:kt.current,r=t.contextTypes,o=(r=r!=null)?Ea(e,i):mi),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Tc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function f2(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Tc.enqueueReplaceState(t,t.state,null)}function Mp(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=b4,Rg(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gn(o):(o=Ht(t)?io:kt.current,i.context=Ea(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Dp(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Tc.enqueueReplaceState(i,i.state,null),Fd(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function us(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var r=n.stateNode}if(!r)throw Error(Q(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===b4&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,e))}return e}function hu(e,t){throw e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function h2(e){var t=e._init;return t(e._payload)}function w4(e){function t(p,g){if(e){var $=p.deletions;$===null?(p.deletions=[g],p.flags|=16):$.push(g)}}function n(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(p,g){return p=si(p,g),p.index=0,p.sibling=null,p}function o(p,g,$){return p.index=$,e?($=p.alternate,$!==null?($=$.index,$<g?(p.flags|=2,g):$):(p.flags|=2,g)):(p.flags|=1048576,g)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,g,$,S){return g===null||g.tag!==6?(g=gh($,p.mode,S),g.return=p,g):(g=i(g,$),g.return=p,g)}function u(p,g,$,S){var P=$.type;return P===ea?f(p,g,$.props.children,S,$.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Br&&h2(P)===g.type)?(S=i(g,$.props),S.ref=us(p,g,$),S.return=p,S):(S=Xu($.type,$.key,$.props,null,p.mode,S),S.ref=us(p,g,$),S.return=p,S)}function d(p,g,$,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==$.containerInfo||g.stateNode.implementation!==$.implementation?(g=mh($,p.mode,S),g.return=p,g):(g=i(g,$.children||[]),g.return=p,g)}function f(p,g,$,S,P){return g===null||g.tag!==7?(g=eo($,p.mode,S,P),g.return=p,g):(g=i(g,$),g.return=p,g)}function h(p,g,$){if(typeof g=="string"&&g!==""||typeof g=="number")return g=gh(""+g,p.mode,$),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case nu:return $=Xu(g.type,g.key,g.props,null,p.mode,$),$.ref=us(p,null,g),$.return=p,$;case Xo:return g=mh(g,p.mode,$),g.return=p,g;case Br:var S=g._init;return h(p,S(g._payload),$)}if(Ns(g)||is(g))return g=eo(g,p.mode,$,null),g.return=p,g;hu(p,g)}return null}function m(p,g,$,S){var P=g!==null?g.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return P!==null?null:l(p,g,""+$,S);if(typeof $=="object"&&$!==null){switch($.$$typeof){case nu:return $.key===P?u(p,g,$,S):null;case Xo:return $.key===P?d(p,g,$,S):null;case Br:return P=$._init,m(p,g,P($._payload),S)}if(Ns($)||is($))return P!==null?null:f(p,g,$,S,null);hu(p,$)}return null}function x(p,g,$,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get($)||null,l(g,p,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nu:return p=p.get(S.key===null?$:S.key)||null,u(g,p,S,P);case Xo:return p=p.get(S.key===null?$:S.key)||null,d(g,p,S,P);case Br:var N=S._init;return x(p,g,$,N(S._payload),P)}if(Ns(S)||is(S))return p=p.get($)||null,f(g,p,S,P,null);hu(g,S)}return null}function v(p,g,$,S){for(var P=null,N=null,T=g,R=g=0,W=null;T!==null&&R<$.length;R++){T.index>R?(W=T,T=null):W=T.sibling;var L=m(p,T,$[R],S);if(L===null){T===null&&(T=W);break}e&&T&&L.alternate===null&&t(p,T),g=o(L,g,R),N===null?P=L:N.sibling=L,N=L,T=W}if(R===$.length)return n(p,T),Ye&&Ui(p,R),P;if(T===null){for(;R<$.length;R++)T=h(p,$[R],S),T!==null&&(g=o(T,g,R),N===null?P=T:N.sibling=T,N=T);return Ye&&Ui(p,R),P}for(T=r(p,T);R<$.length;R++)W=x(T,p,R,$[R],S),W!==null&&(e&&W.alternate!==null&&T.delete(W.key===null?R:W.key),g=o(W,g,R),N===null?P=W:N.sibling=W,N=W);return e&&T.forEach(function(se){return t(p,se)}),Ye&&Ui(p,R),P}function w(p,g,$,S){var P=is($);if(typeof P!="function")throw Error(Q(150));if($=P.call($),$==null)throw Error(Q(151));for(var N=P=null,T=g,R=g=0,W=null,L=$.next();T!==null&&!L.done;R++,L=$.next()){T.index>R?(W=T,T=null):W=T.sibling;var se=m(p,T,L.value,S);if(se===null){T===null&&(T=W);break}e&&T&&se.alternate===null&&t(p,T),g=o(se,g,R),N===null?P=se:N.sibling=se,N=se,T=W}if(L.done)return n(p,T),Ye&&Ui(p,R),P;if(T===null){for(;!L.done;R++,L=$.next())L=h(p,L.value,S),L!==null&&(g=o(L,g,R),N===null?P=L:N.sibling=L,N=L);return Ye&&Ui(p,R),P}for(T=r(p,T);!L.done;R++,L=$.next())L=x(T,p,R,L.value,S),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?R:L.key),g=o(L,g,R),N===null?P=L:N.sibling=L,N=L);return e&&T.forEach(function(M){return t(p,M)}),Ye&&Ui(p,R),P}function b(p,g,$,S){if(typeof $=="object"&&$!==null&&$.type===ea&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case nu:e:{for(var P=$.key,N=g;N!==null;){if(N.key===P){if(P=$.type,P===ea){if(N.tag===7){n(p,N.sibling),g=i(N,$.props.children),g.return=p,p=g;break e}}else if(N.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Br&&h2(P)===N.type){n(p,N.sibling),g=i(N,$.props),g.ref=us(p,N,$),g.return=p,p=g;break e}n(p,N);break}else t(p,N);N=N.sibling}$.type===ea?(g=eo($.props.children,p.mode,S,$.key),g.return=p,p=g):(S=Xu($.type,$.key,$.props,null,p.mode,S),S.ref=us(p,g,$),S.return=p,p=S)}return a(p);case Xo:e:{for(N=$.key;g!==null;){if(g.key===N)if(g.tag===4&&g.stateNode.containerInfo===$.containerInfo&&g.stateNode.implementation===$.implementation){n(p,g.sibling),g=i(g,$.children||[]),g.return=p,p=g;break e}else{n(p,g);break}else t(p,g);g=g.sibling}g=mh($,p.mode,S),g.return=p,p=g}return a(p);case Br:return N=$._init,b(p,g,N($._payload),S)}if(Ns($))return v(p,g,$,S);if(is($))return w(p,g,$,S);hu(p,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,g!==null&&g.tag===6?(n(p,g.sibling),g=i(g,$),g.return=p,p=g):(n(p,g),g=gh($,p.mode,S),g.return=p,p=g),a(p)):n(p,g)}return b}var Ta=w4(!0),S4=w4(!1),Nl={},Jn=wi(Nl),il=wi(Nl),ol=wi(Nl);function Gi(e){if(e===Nl)throw Error(Q(174));return e}function Fg(e,t){switch(Me(ol,t),Me(il,e),Me(Jn,Nl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gp(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gp(t,e)}ze(Jn),Me(Jn,t)}function Aa(){ze(Jn),ze(il),ze(ol)}function C4(e){Gi(ol.current);var t=Gi(Jn.current),n=gp(t,e.type);t!==n&&(Me(il,e),Me(Jn,n))}function Dg(e){il.current===e&&(ze(Jn),ze(il))}var qe=wi(0);function Dd(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uh=[];function Mg(){for(var e=0;e<uh.length;e++)uh[e]._workInProgressVersionPrimary=null;uh.length=0}var Gu=Er.ReactCurrentDispatcher,dh=Er.ReactCurrentBatchConfig,ao=0,Ge=null,st=null,ft=null,Md=!1,Ls=!1,al=0,W6=0;function wt(){throw Error(Q(321))}function jg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mn(e[n],t[n]))return!1;return!0}function Lg(e,t,n,r,i,o){if(ao=o,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gu.current=e===null||e.memoizedState===null?G6:Q6,e=n(r,i),Ls){o=0;do{if(Ls=!1,al=0,25<=o)throw Error(Q(301));o+=1,ft=st=null,t.updateQueue=null,Gu.current=K6,e=n(r,i)}while(Ls)}if(Gu.current=jd,t=st!==null&&st.next!==null,ao=0,ft=st=Ge=null,Md=!1,t)throw Error(Q(300));return e}function zg(){var e=al!==0;return al=0,e}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ge.memoizedState=ft=e:ft=ft.next=e,ft}function mn(){if(st===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=ft===null?Ge.memoizedState:ft.next;if(t!==null)ft=t,st=e;else{if(e===null)throw Error(Q(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ft===null?Ge.memoizedState=ft=e:ft=ft.next=e}return ft}function sl(e,t){return typeof t=="function"?t(e):t}function ch(e){var t=mn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=st,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,u=null,d=o;do{var f=d.lane;if((ao&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=h,a=r):u=u.next=h,Ge.lanes|=f,so|=f}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=l,Mn(r,t.memoizedState)||(Ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ge.lanes|=o,so|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fh(e){var t=mn(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Mn(o,t.memoizedState)||(Ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function P4(){}function O4(e,t){var n=Ge,r=mn(),i=t(),o=!Mn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ut=!0),r=r.queue,Ug(N4.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,ll(9,k4.bind(null,n,r,i,t),void 0,null),ht===null)throw Error(Q(349));ao&30||_4(n,t,i)}return i}function _4(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function k4(e,t,n,r){t.value=n,t.getSnapshot=r,E4(t)&&I4(e)}function N4(e,t,n){return n(function(){E4(t)&&I4(e)})}function E4(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mn(e,n)}catch{return!0}}function I4(e){var t=Pr(e,1);t!==null&&Fn(t,e,1,-1)}function p2(e){var t=Vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:e},t.queue=e,e=e.dispatch=q6.bind(null,Ge,e),[t.memoizedState,e]}function ll(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function T4(){return mn().memoizedState}function Qu(e,t,n,r){var i=Vn();Ge.flags|=e,i.memoizedState=ll(1|t,n,void 0,r===void 0?null:r)}function Ac(e,t,n,r){var i=mn();r=r===void 0?null:r;var o=void 0;if(st!==null){var a=st.memoizedState;if(o=a.destroy,r!==null&&jg(r,a.deps)){i.memoizedState=ll(t,n,o,r);return}}Ge.flags|=e,i.memoizedState=ll(1|t,n,o,r)}function g2(e,t){return Qu(8390656,8,e,t)}function Ug(e,t){return Ac(2048,8,e,t)}function A4(e,t){return Ac(4,2,e,t)}function R4(e,t){return Ac(4,4,e,t)}function F4(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function D4(e,t,n){return n=n!=null?n.concat([e]):null,Ac(4,4,F4.bind(null,t,e),n)}function Bg(){}function M4(e,t){var n=mn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function j4(e,t){var n=mn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function L4(e,t,n){return ao&21?(Mn(n,t)||(n=Bb(),Ge.lanes|=n,so|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ut=!0),e.memoizedState=n)}function Y6(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var r=dh.transition;dh.transition={};try{e(!1),t()}finally{Ee=n,dh.transition=r}}function z4(){return mn().memoizedState}function V6(e,t,n){var r=ai(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},U4(e))B4(t,n);else if(n=v4(e,t,n,r),n!==null){var i=At();Fn(n,e,r,i),H4(n,t,r)}}function q6(e,t,n){var r=ai(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(U4(e))B4(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Mn(l,a)){var u=t.interleaved;u===null?(i.next=i,Ag(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=v4(e,t,i,r),n!==null&&(i=At(),Fn(n,e,r,i),H4(n,t,r))}}function U4(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function B4(e,t){Ls=Md=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function H4(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xg(e,n)}}var jd={readContext:gn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},G6={readContext:gn,useCallback:function(e,t){return Vn().memoizedState=[e,t===void 0?null:t],e},useContext:gn,useEffect:g2,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qu(4194308,4,F4.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qu(4,2,e,t)},useMemo:function(e,t){var n=Vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=V6.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=Vn();return e={current:e},t.memoizedState=e},useState:p2,useDebugValue:Bg,useDeferredValue:function(e){return Vn().memoizedState=e},useTransition:function(){var e=p2(!1),t=e[0];return e=Y6.bind(null,e[1]),Vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,i=Vn();if(Ye){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),ht===null)throw Error(Q(349));ao&30||_4(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,g2(N4.bind(null,r,o,e),[e]),r.flags|=2048,ll(9,k4.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Vn(),t=ht.identifierPrefix;if(Ye){var n=mr,r=gr;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=al++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=W6++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q6={readContext:gn,useCallback:M4,useContext:gn,useEffect:Ug,useImperativeHandle:D4,useInsertionEffect:A4,useLayoutEffect:R4,useMemo:j4,useReducer:ch,useRef:T4,useState:function(){return ch(sl)},useDebugValue:Bg,useDeferredValue:function(e){var t=mn();return L4(t,st.memoizedState,e)},useTransition:function(){var e=ch(sl)[0],t=mn().memoizedState;return[e,t]},useMutableSource:P4,useSyncExternalStore:O4,useId:z4,unstable_isNewReconciler:!1},K6={readContext:gn,useCallback:M4,useContext:gn,useEffect:Ug,useImperativeHandle:D4,useInsertionEffect:A4,useLayoutEffect:R4,useMemo:j4,useReducer:fh,useRef:T4,useState:function(){return fh(sl)},useDebugValue:Bg,useDeferredValue:function(e){var t=mn();return st===null?t.memoizedState=e:L4(t,st.memoizedState,e)},useTransition:function(){var e=fh(sl)[0],t=mn().memoizedState;return[e,t]},useMutableSource:P4,useSyncExternalStore:O4,useId:z4,unstable_isNewReconciler:!1};function Ra(e,t){try{var n="",r=t;do n+=C8(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function hh(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z6=typeof WeakMap=="function"?WeakMap:Map;function W4(e,t,n){n=br(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zd||(zd=!0,Gp=r),jp(e,t)},n}function Y4(e,t,n){n=br(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){jp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){jp(e,t),typeof r!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function m2(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z6;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=c7.bind(null,e,t,n),t.then(e,e))}function y2(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function v2(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=br(-1,1),t.tag=2,ii(n,t,1))),n.lanes|=1),e)}var J6=Er.ReactCurrentOwner,Ut=!1;function It(e,t,n,r){t.child=e===null?S4(t,null,n,r):Ta(t,e.child,n,r)}function x2(e,t,n,r,i){n=n.render;var o=t.ref;return ba(t,i),r=Lg(e,t,n,r,o,i),n=zg(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(Ye&&n&&_g(t),t.flags|=1,It(e,t,r,i),t.child)}function b2(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Kg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,V4(e,t,o,r,i)):(e=Xu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:el,n(a,r)&&e.ref===t.ref)return Or(e,t,i)}return t.flags|=1,e=si(o,r),e.ref=t.ref,e.return=t,t.child=e}function V4(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(el(o,r)&&e.ref===t.ref)if(Ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ut=!0);else return t.lanes=e.lanes,Or(e,t,i)}return Lp(e,t,n,r,i)}function q4(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(da,Yt),Yt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(da,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Me(da,Yt),Yt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Me(da,Yt),Yt|=r;return It(e,t,i,n),t.child}function G4(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lp(e,t,n,r,i){var o=Ht(n)?io:kt.current;return o=Ea(t,o),ba(t,i),n=Lg(e,t,n,r,o,i),r=zg(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(Ye&&r&&_g(t),t.flags|=1,It(e,t,n,i),t.child)}function $2(e,t,n,r,i){if(Ht(n)){var o=!0;Ed(t)}else o=!1;if(ba(t,i),t.stateNode===null)Ku(e,t),$4(t,n,r),Mp(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=gn(d):(d=Ht(n)?io:kt.current,d=Ea(t,d));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&f2(t,a,r,d),Hr=!1;var m=t.memoizedState;a.state=m,Fd(t,r,a,i),u=t.memoizedState,l!==r||m!==u||Bt.current||Hr?(typeof f=="function"&&(Dp(t,n,f,r),u=t.memoizedState),(l=Hr||c2(t,n,l,r,m,u,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,x4(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:kn(t.type,l),a.props=d,h=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=gn(u):(u=Ht(n)?io:kt.current,u=Ea(t,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||m!==u)&&f2(t,a,r,u),Hr=!1,m=t.memoizedState,a.state=m,Fd(t,r,a,i);var v=t.memoizedState;l!==h||m!==v||Bt.current||Hr?(typeof x=="function"&&(Dp(t,n,x,r),v=t.memoizedState),(d=Hr||c2(t,n,d,r,m,v,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return zp(e,t,n,r,o,i)}function zp(e,t,n,r,i,o){G4(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&a2(t,n,!1),Or(e,t,o);r=t.stateNode,J6.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ta(t,e.child,null,o),t.child=Ta(t,null,l,o)):It(e,t,l,o),t.memoizedState=r.state,i&&a2(t,n,!0),t.child}function Q4(e){var t=e.stateNode;t.pendingContext?o2(e,t.pendingContext,t.pendingContext!==t.context):t.context&&o2(e,t.context,!1),Fg(e,t.containerInfo)}function w2(e,t,n,r,i){return Ia(),Ng(i),t.flags|=256,It(e,t,n,r),t.child}var Up={dehydrated:null,treeContext:null,retryLane:0};function Bp(e){return{baseLanes:e,cachePool:null,transitions:null}}function K4(e,t,n){var r=t.pendingProps,i=qe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Me(qe,i&1),e===null)return Rp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Dc(a,r,0,null),e=eo(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bp(n),t.memoizedState=Up,e):Hg(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return X6(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=si(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=si(l,o):(o=eo(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Bp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Up,r}return o=e.child,e=o.sibling,r=si(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hg(e,t){return t=Dc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pu(e,t,n,r){return r!==null&&Ng(r),Ta(t,e.child,null,n),e=Hg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function X6(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=hh(Error(Q(422))),pu(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Dc({mode:"visible",children:r.children},i,0,null),o=eo(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ta(t,e.child,null,a),t.child.memoizedState=Bp(a),t.memoizedState=Up,o);if(!(t.mode&1))return pu(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(Q(419)),r=hh(o,r,void 0),pu(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ut||l){if(r=ht,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pr(e,i),Fn(r,e,i,-1))}return Qg(),r=hh(Error(Q(421))),pu(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=f7.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Gt=ri(i.nextSibling),Qt=t,Ye=!0,En=null,e!==null&&(ln[un++]=gr,ln[un++]=mr,ln[un++]=oo,gr=e.id,mr=e.overflow,oo=t),t=Hg(t,r.children),t.flags|=4096,t)}function S2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fp(e.return,t,n)}function ph(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Z4(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(It(e,t,r.children,n),r=qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&S2(e,n,t);else if(e.tag===19)S2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(qe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Dd(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ph(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Dd(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ph(t,!0,n,null,o);break;case"together":ph(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ku(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Or(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),so|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=si(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=si(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function e7(e,t,n){switch(t.tag){case 3:Q4(t),Ia();break;case 5:C4(t);break;case 1:Ht(t.type)&&Ed(t);break;case 4:Fg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Me(Ad,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(qe,qe.current&1),t.flags|=128,null):n&t.child.childLanes?K4(e,t,n):(Me(qe,qe.current&1),e=Or(e,t,n),e!==null?e.sibling:null);Me(qe,qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Z4(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(qe,qe.current),r)break;return null;case 22:case 23:return t.lanes=0,q4(e,t,n)}return Or(e,t,n)}var J4,Hp,X4,e$;J4=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hp=function(){};X4=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gi(Jn.current);var o=null;switch(n){case"input":i=cp(e,i),r=cp(e,r),o=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),o=[];break;case"textarea":i=pp(e,i),r=pp(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=kd)}mp(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(qs.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(qs.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&je("scroll",e),o||l===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};e$=function(e,t,n,r){n!==r&&(t.flags|=4)};function ds(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function t7(e,t,n){var r=t.pendingProps;switch(kg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return Ht(t.type)&&Nd(),St(t),null;case 3:return r=t.stateNode,Aa(),ze(Bt),ze(kt),Mg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,En!==null&&(Zp(En),En=null))),Hp(e,t),St(t),null;case 5:Dg(t);var i=Gi(ol.current);if(n=t.type,e!==null&&t.stateNode!=null)X4(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Q(166));return St(t),null}if(e=Gi(Jn.current),fu(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qn]=t,r[rl]=o,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<Is.length;i++)je(Is[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":Ty(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":Ry(r,o),je("invalid",r)}mp(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&cu(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&cu(r.textContent,l,e),i=["children",""+l]):qs.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&je("scroll",r)}switch(n){case"input":ru(r),Ay(r,o,!0);break;case"textarea":ru(r),Fy(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=kd)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_b(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qn]=t,e[rl]=r,J4(e,t,!1,!1),t.stateNode=e;e:{switch(a=yp(n,r),n){case"dialog":je("cancel",e),je("close",e),i=r;break;case"iframe":case"object":case"embed":je("load",e),i=r;break;case"video":case"audio":for(i=0;i<Is.length;i++)je(Is[i],e);i=r;break;case"source":je("error",e),i=r;break;case"img":case"image":case"link":je("error",e),je("load",e),i=r;break;case"details":je("toggle",e),i=r;break;case"input":Ty(e,r),i=cp(e,r),je("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),je("invalid",e);break;case"textarea":Ry(e,r),i=pp(e,r),je("invalid",e);break;default:i=r}mp(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?Eb(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kb(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Gs(e,u):typeof u=="number"&&Gs(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qs.hasOwnProperty(o)?u!=null&&o==="onScroll"&&je("scroll",e):u!=null&&hg(e,o,u,a))}switch(n){case"input":ru(e),Ay(e,r,!1);break;case"textarea":ru(e),Fy(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gi(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ma(e,!!r.multiple,o,!1):r.defaultValue!=null&&ma(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=kd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return St(t),null;case 6:if(e&&t.stateNode!=null)e$(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Q(166));if(n=Gi(ol.current),Gi(Jn.current),fu(t)){if(r=t.stateNode,n=t.memoizedProps,r[qn]=t,(o=r.nodeValue!==n)&&(e=Qt,e!==null))switch(e.tag){case 3:cu(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cu(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=t,t.stateNode=r}return St(t),null;case 13:if(ze(qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ye&&Gt!==null&&t.mode&1&&!(t.flags&128))y4(),Ia(),t.flags|=98560,o=!1;else if(o=fu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Q(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Q(317));o[qn]=t}else Ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),o=!1}else En!==null&&(Zp(En),En=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?lt===0&&(lt=3):Qg())),t.updateQueue!==null&&(t.flags|=4),St(t),null);case 4:return Aa(),Hp(e,t),e===null&&tl(t.stateNode.containerInfo),St(t),null;case 10:return Tg(t.type._context),St(t),null;case 17:return Ht(t.type)&&Nd(),St(t),null;case 19:if(ze(qe),o=t.memoizedState,o===null)return St(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ds(o,!1);else{if(lt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Dd(e),a!==null){for(t.flags|=128,ds(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(qe,qe.current&1|2),t.child}e=e.sibling}o.tail!==null&&tt()>Fa&&(t.flags|=128,r=!0,ds(o,!1),t.lanes=4194304)}else{if(!r)if(e=Dd(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ds(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ye)return St(t),null}else 2*tt()-o.renderingStartTime>Fa&&n!==1073741824&&(t.flags|=128,r=!0,ds(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=tt(),t.sibling=null,n=qe.current,Me(qe,r?n&1|2:n&1),t):(St(t),null);case 22:case 23:return Gg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Yt&1073741824&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),null;case 24:return null;case 25:return null}throw Error(Q(156,t.tag))}function n7(e,t){switch(kg(t),t.tag){case 1:return Ht(t.type)&&Nd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Aa(),ze(Bt),ze(kt),Mg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Dg(t),null;case 13:if(ze(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(qe),null;case 4:return Aa(),null;case 10:return Tg(t.type._context),null;case 22:case 23:return Gg(),null;case 24:return null;default:return null}}var gu=!1,Pt=!1,r7=typeof WeakSet=="function"?WeakSet:Set,de=null;function ua(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ze(e,t,r)}else n.current=null}function Wp(e,t,n){try{n()}catch(r){Ze(e,t,r)}}var C2=!1;function i7(e,t){if(_p=Pd,e=i4(),Og(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,f=0,h=e,m=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++d===i&&(l=a),m===o&&++f===r&&(u=a),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kp={focusedElem:e,selectionRange:n},Pd=!1,de=t;de!==null;)if(t=de,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,de=e;else for(;de!==null;){t=de;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,b=v.memoizedState,p=t.stateNode,g=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:kn(t.type,w),b);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var $=t.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(S){Ze(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,de=e;break}de=t.return}return v=C2,C2=!1,v}function zs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Wp(t,n,o)}i=i.next}while(i!==r)}}function Rc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function t$(e){var t=e.alternate;t!==null&&(e.alternate=null,t$(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qn],delete t[rl],delete t[Ip],delete t[z6],delete t[U6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function n$(e){return e.tag===5||e.tag===3||e.tag===4}function P2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||n$(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kd));else if(r!==4&&(e=e.child,e!==null))for(Vp(e,t,n),e=e.sibling;e!==null;)Vp(e,t,n),e=e.sibling}function qp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qp(e,t,n),e=e.sibling;e!==null;)qp(e,t,n),e=e.sibling}var vt=null,Nn=!1;function Dr(e,t,n){for(n=n.child;n!==null;)r$(e,t,n),n=n.sibling}function r$(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Oc,n)}catch{}switch(n.tag){case 5:Pt||ua(n,t);case 6:var r=vt,i=Nn;vt=null,Dr(e,t,n),vt=r,Nn=i,vt!==null&&(Nn?(e=vt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(Nn?(e=vt,n=n.stateNode,e.nodeType===8?sh(e.parentNode,n):e.nodeType===1&&sh(e,n),Js(e)):sh(vt,n.stateNode));break;case 4:r=vt,i=Nn,vt=n.stateNode.containerInfo,Nn=!0,Dr(e,t,n),vt=r,Nn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Wp(n,t,a),i=i.next}while(i!==r)}Dr(e,t,n);break;case 1:if(!Pt&&(ua(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ze(n,t,l)}Dr(e,t,n);break;case 21:Dr(e,t,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,Dr(e,t,n),Pt=r):Dr(e,t,n);break;default:Dr(e,t,n)}}function O2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new r7),t.forEach(function(r){var i=h7.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $n(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:vt=l.stateNode,Nn=!1;break e;case 3:vt=l.stateNode.containerInfo,Nn=!0;break e;case 4:vt=l.stateNode.containerInfo,Nn=!0;break e}l=l.return}if(vt===null)throw Error(Q(160));r$(o,a,i),vt=null,Nn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Ze(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)i$(t,e),t=t.sibling}function i$(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($n(t,e),Bn(e),r&4){try{zs(3,e,e.return),Rc(3,e)}catch(w){Ze(e,e.return,w)}try{zs(5,e,e.return)}catch(w){Ze(e,e.return,w)}}break;case 1:$n(t,e),Bn(e),r&512&&n!==null&&ua(n,n.return);break;case 5:if($n(t,e),Bn(e),r&512&&n!==null&&ua(n,n.return),e.flags&32){var i=e.stateNode;try{Gs(i,"")}catch(w){Ze(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Pb(i,o),yp(l,a);var d=yp(l,o);for(a=0;a<u.length;a+=2){var f=u[a],h=u[a+1];f==="style"?Eb(i,h):f==="dangerouslySetInnerHTML"?kb(i,h):f==="children"?Gs(i,h):hg(i,f,h,d)}switch(l){case"input":fp(i,o);break;case"textarea":Ob(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?ma(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?ma(i,!!o.multiple,o.defaultValue,!0):ma(i,!!o.multiple,o.multiple?[]:"",!1))}i[rl]=o}catch(w){Ze(e,e.return,w)}}break;case 6:if($n(t,e),Bn(e),r&4){if(e.stateNode===null)throw Error(Q(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Ze(e,e.return,w)}}break;case 3:if($n(t,e),Bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(t.containerInfo)}catch(w){Ze(e,e.return,w)}break;case 4:$n(t,e),Bn(e);break;case 13:$n(t,e),Bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Vg=tt())),r&4&&O2(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Pt=(d=Pt)||f,$n(t,e),Pt=d):$n(t,e),Bn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(de=e,f=e.child;f!==null;){for(h=de=f;de!==null;){switch(m=de,x=m.child,m.tag){case 0:case 11:case 14:case 15:zs(4,m,m.return);break;case 1:ua(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Ze(r,n,w)}}break;case 5:ua(m,m.return);break;case 22:if(m.memoizedState!==null){k2(h);continue}}x!==null?(x.return=m,de=x):k2(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Nb("display",a))}catch(w){Ze(e,e.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){Ze(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$n(t,e),Bn(e),r&4&&O2(e);break;case 21:break;default:$n(t,e),Bn(e)}}function Bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(n$(n)){var r=n;break e}n=n.return}throw Error(Q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gs(i,""),r.flags&=-33);var o=P2(e);qp(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=P2(e);Vp(e,l,a);break;default:throw Error(Q(161))}}catch(u){Ze(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function o7(e,t,n){de=e,o$(e)}function o$(e,t,n){for(var r=(e.mode&1)!==0;de!==null;){var i=de,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||gu;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Pt;l=gu;var d=Pt;if(gu=a,(Pt=u)&&!d)for(de=i;de!==null;)a=de,u=a.child,a.tag===22&&a.memoizedState!==null?N2(i):u!==null?(u.return=a,de=u):N2(i);for(;o!==null;)de=o,o$(o),o=o.sibling;de=i,gu=l,Pt=d}_2(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,de=o):_2(e)}}function _2(e){for(;de!==null;){var t=de;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pt||Rc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&d2(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}d2(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Js(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Pt||t.flags&512&&Yp(t)}catch(m){Ze(t,t.return,m)}}if(t===e){de=null;break}if(n=t.sibling,n!==null){n.return=t.return,de=n;break}de=t.return}}function k2(e){for(;de!==null;){var t=de;if(t===e){de=null;break}var n=t.sibling;if(n!==null){n.return=t.return,de=n;break}de=t.return}}function N2(e){for(;de!==null;){var t=de;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rc(4,t)}catch(u){Ze(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ze(t,i,u)}}var o=t.return;try{Yp(t)}catch(u){Ze(t,o,u)}break;case 5:var a=t.return;try{Yp(t)}catch(u){Ze(t,a,u)}}}catch(u){Ze(t,t.return,u)}if(t===e){de=null;break}var l=t.sibling;if(l!==null){l.return=t.return,de=l;break}de=t.return}}var a7=Math.ceil,Ld=Er.ReactCurrentDispatcher,Wg=Er.ReactCurrentOwner,pn=Er.ReactCurrentBatchConfig,Pe=0,ht=null,ot=null,xt=0,Yt=0,da=wi(0),lt=0,ul=null,so=0,Fc=0,Yg=0,Us=null,zt=null,Vg=0,Fa=1/0,dr=null,zd=!1,Gp=null,oi=null,mu=!1,Qr=null,Ud=0,Bs=0,Qp=null,Zu=-1,Ju=0;function At(){return Pe&6?tt():Zu!==-1?Zu:Zu=tt()}function ai(e){return e.mode&1?Pe&2&&xt!==0?xt&-xt:H6.transition!==null?(Ju===0&&(Ju=Bb()),Ju):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:Qb(e.type)),e):1}function Fn(e,t,n,r){if(50<Bs)throw Bs=0,Qp=null,Error(Q(185));Ol(e,n,r),(!(Pe&2)||e!==ht)&&(e===ht&&(!(Pe&2)&&(Fc|=n),lt===4&&Vr(e,xt)),Wt(e,r),n===1&&Pe===0&&!(t.mode&1)&&(Fa=tt()+500,Ic&&Si()))}function Wt(e,t){var n=e.callbackNode;H8(e,t);var r=Cd(e,e===ht?xt:0);if(r===0)n!==null&&jy(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&jy(n),t===1)e.tag===0?B6(E2.bind(null,e)):p4(E2.bind(null,e)),j6(function(){!(Pe&6)&&Si()}),n=null;else{switch(Hb(r)){case 1:n=vg;break;case 4:n=zb;break;case 16:n=Sd;break;case 536870912:n=Ub;break;default:n=Sd}n=h$(n,a$.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function a$(e,t){if(Zu=-1,Ju=0,Pe&6)throw Error(Q(327));var n=e.callbackNode;if($a()&&e.callbackNode!==n)return null;var r=Cd(e,e===ht?xt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bd(e,r);else{t=r;var i=Pe;Pe|=2;var o=l$();(ht!==e||xt!==t)&&(dr=null,Fa=tt()+500,Xi(e,t));do try{u7();break}catch(l){s$(e,l)}while(1);Ig(),Ld.current=o,Pe=i,ot!==null?t=0:(ht=null,xt=0,t=lt)}if(t!==0){if(t===2&&(i=wp(e),i!==0&&(r=i,t=Kp(e,i))),t===1)throw n=ul,Xi(e,0),Vr(e,r),Wt(e,tt()),n;if(t===6)Vr(e,r);else{if(i=e.current.alternate,!(r&30)&&!s7(i)&&(t=Bd(e,r),t===2&&(o=wp(e),o!==0&&(r=o,t=Kp(e,o))),t===1))throw n=ul,Xi(e,0),Vr(e,r),Wt(e,tt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Q(345));case 2:Bi(e,zt,dr);break;case 3:if(Vr(e,r),(r&130023424)===r&&(t=Vg+500-tt(),10<t)){if(Cd(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){At(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ep(Bi.bind(null,e,zt,dr),t);break}Bi(e,zt,dr);break;case 4:if(Vr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Rn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=tt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*a7(r/1960))-r,10<r){e.timeoutHandle=Ep(Bi.bind(null,e,zt,dr),r);break}Bi(e,zt,dr);break;case 5:Bi(e,zt,dr);break;default:throw Error(Q(329))}}}return Wt(e,tt()),e.callbackNode===n?a$.bind(null,e):null}function Kp(e,t){var n=Us;return e.current.memoizedState.isDehydrated&&(Xi(e,t).flags|=256),e=Bd(e,t),e!==2&&(t=zt,zt=n,t!==null&&Zp(t)),e}function Zp(e){zt===null?zt=e:zt.push.apply(zt,e)}function s7(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Mn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vr(e,t){for(t&=~Yg,t&=~Fc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rn(t),r=1<<n;e[n]=-1,t&=~r}}function E2(e){if(Pe&6)throw Error(Q(327));$a();var t=Cd(e,0);if(!(t&1))return Wt(e,tt()),null;var n=Bd(e,t);if(e.tag!==0&&n===2){var r=wp(e);r!==0&&(t=r,n=Kp(e,r))}if(n===1)throw n=ul,Xi(e,0),Vr(e,t),Wt(e,tt()),n;if(n===6)throw Error(Q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bi(e,zt,dr),Wt(e,tt()),null}function qg(e,t){var n=Pe;Pe|=1;try{return e(t)}finally{Pe=n,Pe===0&&(Fa=tt()+500,Ic&&Si())}}function lo(e){Qr!==null&&Qr.tag===0&&!(Pe&6)&&$a();var t=Pe;Pe|=1;var n=pn.transition,r=Ee;try{if(pn.transition=null,Ee=1,e)return e()}finally{Ee=r,pn.transition=n,Pe=t,!(Pe&6)&&Si()}}function Gg(){Yt=da.current,ze(da)}function Xi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,M6(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(kg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nd();break;case 3:Aa(),ze(Bt),ze(kt),Mg();break;case 5:Dg(r);break;case 4:Aa();break;case 13:ze(qe);break;case 19:ze(qe);break;case 10:Tg(r.type._context);break;case 22:case 23:Gg()}n=n.return}if(ht=e,ot=e=si(e.current,null),xt=Yt=t,lt=0,ul=null,Yg=Fc=so=0,zt=Us=null,qi!==null){for(t=0;t<qi.length;t++)if(n=qi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}qi=null}return e}function s$(e,t){do{var n=ot;try{if(Ig(),Gu.current=jd,Md){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Md=!1}if(ao=0,ft=st=Ge=null,Ls=!1,al=0,Wg.current=null,n===null||n.return===null){lt=1,ul=t,ot=null;break}e:{var o=e,a=n.return,l=n,u=t;if(t=xt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=y2(a);if(x!==null){x.flags&=-257,v2(x,a,l,o,t),x.mode&1&&m2(o,d,t),t=x,u=d;var v=t.updateQueue;if(v===null){var w=new Set;w.add(u),t.updateQueue=w}else v.add(u);break e}else{if(!(t&1)){m2(o,d,t),Qg();break e}u=Error(Q(426))}}else if(Ye&&l.mode&1){var b=y2(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),v2(b,a,l,o,t),Ng(Ra(u,l));break e}}o=u=Ra(u,l),lt!==4&&(lt=2),Us===null?Us=[o]:Us.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=W4(o,u,t);u2(o,p);break e;case 1:l=u;var g=o.type,$=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(oi===null||!oi.has($)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Y4(o,l,t);u2(o,S);break e}}o=o.return}while(o!==null)}d$(n)}catch(P){t=P,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(1)}function l$(){var e=Ld.current;return Ld.current=jd,e===null?jd:e}function Qg(){(lt===0||lt===3||lt===2)&&(lt=4),ht===null||!(so&268435455)&&!(Fc&268435455)||Vr(ht,xt)}function Bd(e,t){var n=Pe;Pe|=2;var r=l$();(ht!==e||xt!==t)&&(dr=null,Xi(e,t));do try{l7();break}catch(i){s$(e,i)}while(1);if(Ig(),Pe=n,Ld.current=r,ot!==null)throw Error(Q(261));return ht=null,xt=0,lt}function l7(){for(;ot!==null;)u$(ot)}function u7(){for(;ot!==null&&!R8();)u$(ot)}function u$(e){var t=f$(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?d$(e):ot=t,Wg.current=null}function d$(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=n7(n,t),n!==null){n.flags&=32767,ot=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lt=6,ot=null;return}}else if(n=t7(n,t,Yt),n!==null){ot=n;return}if(t=t.sibling,t!==null){ot=t;return}ot=t=e}while(t!==null);lt===0&&(lt=5)}function Bi(e,t,n){var r=Ee,i=pn.transition;try{pn.transition=null,Ee=1,d7(e,t,n,r)}finally{pn.transition=i,Ee=r}return null}function d7(e,t,n,r){do $a();while(Qr!==null);if(Pe&6)throw Error(Q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Q(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(W8(e,o),e===ht&&(ot=ht=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mu||(mu=!0,h$(Sd,function(){return $a(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=pn.transition,pn.transition=null;var a=Ee;Ee=1;var l=Pe;Pe|=4,Wg.current=null,i7(e,n),i$(n,e),E6(kp),Pd=!!_p,kp=_p=null,e.current=n,o7(n),F8(),Pe=l,Ee=a,pn.transition=o}else e.current=n;if(mu&&(mu=!1,Qr=e,Ud=i),o=e.pendingLanes,o===0&&(oi=null),j8(n.stateNode),Wt(e,tt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zd)throw zd=!1,e=Gp,Gp=null,e;return Ud&1&&e.tag!==0&&$a(),o=e.pendingLanes,o&1?e===Qp?Bs++:(Bs=0,Qp=e):Bs=0,Si(),null}function $a(){if(Qr!==null){var e=Hb(Ud),t=pn.transition,n=Ee;try{if(pn.transition=null,Ee=16>e?16:e,Qr===null)var r=!1;else{if(e=Qr,Qr=null,Ud=0,Pe&6)throw Error(Q(331));var i=Pe;for(Pe|=4,de=e.current;de!==null;){var o=de,a=o.child;if(de.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(de=d;de!==null;){var f=de;switch(f.tag){case 0:case 11:case 15:zs(8,f,o)}var h=f.child;if(h!==null)h.return=f,de=h;else for(;de!==null;){f=de;var m=f.sibling,x=f.return;if(t$(f),f===d){de=null;break}if(m!==null){m.return=x,de=m;break}de=x}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}de=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,de=a;else e:for(;de!==null;){if(o=de,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zs(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,de=p;break e}de=o.return}}var g=e.current;for(de=g;de!==null;){a=de;var $=a.child;if(a.subtreeFlags&2064&&$!==null)$.return=a,de=$;else e:for(a=g;de!==null;){if(l=de,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Rc(9,l)}}catch(P){Ze(l,l.return,P)}if(l===a){de=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,de=S;break e}de=l.return}}if(Pe=i,Si(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Oc,e)}catch{}r=!0}return r}finally{Ee=n,pn.transition=t}}return!1}function I2(e,t,n){t=Ra(n,t),t=W4(e,t,1),e=ii(e,t,1),t=At(),e!==null&&(Ol(e,1,t),Wt(e,t))}function Ze(e,t,n){if(e.tag===3)I2(e,e,n);else for(;t!==null;){if(t.tag===3){I2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(oi===null||!oi.has(r))){e=Ra(n,e),e=Y4(t,e,1),t=ii(t,e,1),e=At(),t!==null&&(Ol(t,1,e),Wt(t,e));break}}t=t.return}}function c7(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&n,ht===e&&(xt&n)===n&&(lt===4||lt===3&&(xt&130023424)===xt&&500>tt()-Vg?Xi(e,0):Yg|=n),Wt(e,t)}function c$(e,t){t===0&&(e.mode&1?(t=au,au<<=1,!(au&130023424)&&(au=4194304)):t=1);var n=At();e=Pr(e,t),e!==null&&(Ol(e,t,n),Wt(e,n))}function f7(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),c$(e,n)}function h7(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Q(314))}r!==null&&r.delete(t),c$(e,n)}var f$;f$=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Bt.current)Ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ut=!1,e7(e,t,n);Ut=!!(e.flags&131072)}else Ut=!1,Ye&&t.flags&1048576&&g4(t,Td,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ku(e,t),e=t.pendingProps;var i=Ea(t,kt.current);ba(t,n),i=Lg(null,t,r,e,i,n);var o=zg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ht(r)?(o=!0,Ed(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rg(t),i.updater=Tc,t.stateNode=i,i._reactInternals=t,Mp(t,r,e,n),t=zp(null,t,r,!0,o,n)):(t.tag=0,Ye&&o&&_g(t),It(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ku(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=g7(r),e=kn(r,e),i){case 0:t=Lp(null,t,r,e,n);break e;case 1:t=$2(null,t,r,e,n);break e;case 11:t=x2(null,t,r,e,n);break e;case 14:t=b2(null,t,r,kn(r.type,e),n);break e}throw Error(Q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),Lp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),$2(e,t,r,i,n);case 3:e:{if(Q4(t),e===null)throw Error(Q(387));r=t.pendingProps,o=t.memoizedState,i=o.element,x4(e,t),Fd(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ra(Error(Q(423)),t),t=w2(e,t,r,n,i);break e}else if(r!==i){i=Ra(Error(Q(424)),t),t=w2(e,t,r,n,i);break e}else for(Gt=ri(t.stateNode.containerInfo.firstChild),Qt=t,Ye=!0,En=null,n=S4(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ia(),r===i){t=Or(e,t,n);break e}It(e,t,r,n)}t=t.child}return t;case 5:return C4(t),e===null&&Rp(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Np(r,i)?a=null:o!==null&&Np(r,o)&&(t.flags|=32),G4(e,t),It(e,t,a,n),t.child;case 6:return e===null&&Rp(t),null;case 13:return K4(e,t,n);case 4:return Fg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ta(t,null,r,n):It(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),x2(e,t,r,i,n);case 7:return It(e,t,t.pendingProps,n),t.child;case 8:return It(e,t,t.pendingProps.children,n),t.child;case 12:return It(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Me(Ad,r._currentValue),r._currentValue=a,o!==null)if(Mn(o.value,a)){if(o.children===i.children&&!Bt.current){t=Or(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=br(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Fp(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(Q(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Fp(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}It(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ba(t,n),i=gn(i),r=r(i),t.flags|=1,It(e,t,r,n),t.child;case 14:return r=t.type,i=kn(r,t.pendingProps),i=kn(r.type,i),b2(e,t,r,i,n);case 15:return V4(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),Ku(e,t),t.tag=1,Ht(r)?(e=!0,Ed(t)):e=!1,ba(t,n),$4(t,r,i),Mp(t,r,i,n),zp(null,t,r,!0,e,n);case 19:return Z4(e,t,n);case 22:return q4(e,t,n)}throw Error(Q(156,t.tag))};function h$(e,t){return Lb(e,t)}function p7(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(e,t,n,r){return new p7(e,t,n,r)}function Kg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function g7(e){if(typeof e=="function")return Kg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gg)return 11;if(e===mg)return 14}return 2}function si(e,t){var n=e.alternate;return n===null?(n=fn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xu(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Kg(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ea:return eo(n.children,i,o,t);case pg:a=8,i|=8;break;case sp:return e=fn(12,n,t,i|2),e.elementType=sp,e.lanes=o,e;case lp:return e=fn(13,n,t,i),e.elementType=lp,e.lanes=o,e;case up:return e=fn(19,n,t,i),e.elementType=up,e.lanes=o,e;case wb:return Dc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bb:a=10;break e;case $b:a=9;break e;case gg:a=11;break e;case mg:a=14;break e;case Br:a=16,r=null;break e}throw Error(Q(130,e==null?e:typeof e,""))}return t=fn(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function eo(e,t,n,r){return e=fn(7,e,r,t),e.lanes=n,e}function Dc(e,t,n,r){return e=fn(22,e,r,t),e.elementType=wb,e.lanes=n,e.stateNode={isHidden:!1},e}function gh(e,t,n){return e=fn(6,e,null,t),e.lanes=n,e}function mh(e,t,n){return t=fn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function m7(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kf(0),this.expirationTimes=Kf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zg(e,t,n,r,i,o,a,l,u){return e=new m7(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=fn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rg(o),e}function y7(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function p$(e){if(!e)return mi;e=e._reactInternals;e:{if(ho(e)!==e||e.tag!==1)throw Error(Q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Q(171))}if(e.tag===1){var n=e.type;if(Ht(n))return h4(e,n,t)}return t}function g$(e,t,n,r,i,o,a,l,u){return e=Zg(n,r,!0,e,i,o,a,l,u),e.context=p$(null),n=e.current,r=At(),i=ai(n),o=br(r,i),o.callback=t??null,ii(n,o,i),e.current.lanes=i,Ol(e,i,r),Wt(e,r),e}function Mc(e,t,n,r){var i=t.current,o=At(),a=ai(i);return n=p$(n),t.context===null?t.context=n:t.pendingContext=n,t=br(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ii(i,t,a),e!==null&&(Fn(e,i,a,o),qu(e,i,a)),a}function Hd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function T2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jg(e,t){T2(e,t),(e=e.alternate)&&T2(e,t)}function v7(){return null}var m$=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xg(e){this._internalRoot=e}jc.prototype.render=Xg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));Mc(e,t,null,null)};jc.prototype.unmount=Xg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lo(function(){Mc(null,e,null,null)}),t[Cr]=null}};function jc(e){this._internalRoot=e}jc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yr.length&&t!==0&&t<Yr[n].priority;n++);Yr.splice(n,0,e),n===0&&Gb(e)}};function em(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function A2(){}function x7(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Hd(a);o.call(d)}}var a=g$(t,r,e,0,null,!1,!1,"",A2);return e._reactRootContainer=a,e[Cr]=a.current,tl(e.nodeType===8?e.parentNode:e),lo(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Hd(u);l.call(d)}}var u=Zg(e,0,!1,null,null,!1,!1,"",A2);return e._reactRootContainer=u,e[Cr]=u.current,tl(e.nodeType===8?e.parentNode:e),lo(function(){Mc(t,u,n,r)}),u}function zc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var u=Hd(a);l.call(u)}}Mc(t,a,e,i)}else a=x7(n,t,e,i,r);return Hd(a)}Wb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Es(t.pendingLanes);n!==0&&(xg(t,n|1),Wt(t,tt()),!(Pe&6)&&(Fa=tt()+500,Si()))}break;case 13:lo(function(){var r=Pr(e,1);if(r!==null){var i=At();Fn(r,e,1,i)}}),Jg(e,1)}};bg=function(e){if(e.tag===13){var t=Pr(e,134217728);if(t!==null){var n=At();Fn(t,e,134217728,n)}Jg(e,134217728)}};Yb=function(e){if(e.tag===13){var t=ai(e),n=Pr(e,t);if(n!==null){var r=At();Fn(n,e,t,r)}Jg(e,t)}};Vb=function(){return Ee};qb=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}};xp=function(e,t,n){switch(t){case"input":if(fp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ec(r);if(!i)throw Error(Q(90));Cb(r),fp(r,i)}}}break;case"textarea":Ob(e,n);break;case"select":t=n.value,t!=null&&ma(e,!!n.multiple,t,!1)}};Ab=qg;Rb=lo;var b7={usingClientEntryPoint:!1,Events:[kl,ia,Ec,Ib,Tb,qg]},cs={findFiberByHostInstance:Vi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$7={bundleType:cs.bundleType,version:cs.version,rendererPackageName:cs.rendererPackageName,rendererConfig:cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mb(e),e===null?null:e.stateNode},findFiberByHostInstance:cs.findFiberByHostInstance||v7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Oc=yu.inject($7),Zn=yu}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b7;Jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!em(t))throw Error(Q(200));return y7(e,t,null,n)};Jt.createRoot=function(e,t){if(!em(e))throw Error(Q(299));var n=!1,r="",i=m$;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zg(e,1,!1,null,null,n,!1,r,i),e[Cr]=t.current,tl(e.nodeType===8?e.parentNode:e),new Xg(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=Mb(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return lo(e)};Jt.hydrate=function(e,t,n){if(!Lc(t))throw Error(Q(200));return zc(null,e,t,!0,n)};Jt.hydrateRoot=function(e,t,n){if(!em(e))throw Error(Q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=m$;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=g$(t,null,e,1,n??null,i,!1,o,a),e[Cr]=t.current,tl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jc(t)};Jt.render=function(e,t,n){if(!Lc(t))throw Error(Q(200));return zc(null,e,t,!1,n)};Jt.unmountComponentAtNode=function(e){if(!Lc(e))throw Error(Q(40));return e._reactRootContainer?(lo(function(){zc(null,null,e,!1,function(){e._reactRootContainer=null,e[Cr]=null})}),!0):!1};Jt.unstable_batchedUpdates=qg;Jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Lc(n))throw Error(Q(200));if(e==null||e._reactInternals===void 0)throw Error(Q(38));return zc(e,t,n,!1,r)};Jt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Jt})(v8);var R2=xd;ip.createRoot=R2.createRoot,ip.hydrateRoot=R2.hydrateRoot;var Wd={},w7={get exports(){return Wd},set exports(e){Wd=e}},Fe={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=60103,Bc=60106,El=60107,Il=60108,Tl=60114,Al=60109,Rl=60110,Fl=60112,Dl=60113,tm=60120,Ml=60115,jl=60116,y$=60121,v$=60122,x$=60117,b$=60129,$$=60131;if(typeof Symbol=="function"&&Symbol.for){var mt=Symbol.for;Uc=mt("react.element"),Bc=mt("react.portal"),El=mt("react.fragment"),Il=mt("react.strict_mode"),Tl=mt("react.profiler"),Al=mt("react.provider"),Rl=mt("react.context"),Fl=mt("react.forward_ref"),Dl=mt("react.suspense"),tm=mt("react.suspense_list"),Ml=mt("react.memo"),jl=mt("react.lazy"),y$=mt("react.block"),v$=mt("react.server.block"),x$=mt("react.fundamental"),b$=mt("react.debug_trace_mode"),$$=mt("react.legacy_hidden")}function zn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Uc:switch(e=e.type,e){case El:case Tl:case Il:case Dl:case tm:return e;default:switch(e=e&&e.$$typeof,e){case Rl:case Fl:case jl:case Ml:case Al:return e;default:return t}}case Bc:return t}}}var S7=Al,C7=Uc,P7=Fl,O7=El,_7=jl,k7=Ml,N7=Bc,E7=Tl,I7=Il,T7=Dl;Fe.ContextConsumer=Rl;Fe.ContextProvider=S7;Fe.Element=C7;Fe.ForwardRef=P7;Fe.Fragment=O7;Fe.Lazy=_7;Fe.Memo=k7;Fe.Portal=N7;Fe.Profiler=E7;Fe.StrictMode=I7;Fe.Suspense=T7;Fe.isAsyncMode=function(){return!1};Fe.isConcurrentMode=function(){return!1};Fe.isContextConsumer=function(e){return zn(e)===Rl};Fe.isContextProvider=function(e){return zn(e)===Al};Fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Uc};Fe.isForwardRef=function(e){return zn(e)===Fl};Fe.isFragment=function(e){return zn(e)===El};Fe.isLazy=function(e){return zn(e)===jl};Fe.isMemo=function(e){return zn(e)===Ml};Fe.isPortal=function(e){return zn(e)===Bc};Fe.isProfiler=function(e){return zn(e)===Tl};Fe.isStrictMode=function(e){return zn(e)===Il};Fe.isSuspense=function(e){return zn(e)===Dl};Fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===El||e===Tl||e===b$||e===Il||e===Dl||e===tm||e===$$||typeof e=="object"&&e!==null&&(e.$$typeof===jl||e.$$typeof===Ml||e.$$typeof===Al||e.$$typeof===Rl||e.$$typeof===Fl||e.$$typeof===x$||e.$$typeof===y$||e[0]===v$)};Fe.typeOf=zn;(function(e){e.exports=Fe})(w7);function A7(e){function t(D,H,V,ie,I){for(var G=0,Y=0,Oe=0,me=0,ge,he,Ne=0,De=0,fe,O=fe=ge=0,E=0,A=0,oe=0,K=0,q=V.length,ae=q-1,ve,le="",Ae="",rs="",Oi="",rn;E<q;){if(he=V.charCodeAt(E),E===ae&&Y+me+Oe+G!==0&&(Y!==0&&(he=Y===47?10:47),me=Oe=G=0,q++,ae++),Y+me+Oe+G===0){if(E===ae&&(0<A&&(le=le.replace(m,"")),0<le.trim().length)){switch(he){case 32:case 9:case 59:case 13:case 10:break;default:le+=V.charAt(E)}he=59}switch(he){case 123:for(le=le.trim(),ge=le.charCodeAt(0),fe=1,K=++E;E<q;){switch(he=V.charCodeAt(E)){case 123:fe++;break;case 125:fe--;break;case 47:switch(he=V.charCodeAt(E+1)){case 42:case 47:e:{for(O=E+1;O<ae;++O)switch(V.charCodeAt(O)){case 47:if(he===42&&V.charCodeAt(O-1)===42&&E+2!==O){E=O+1;break e}break;case 10:if(he===47){E=O+1;break e}}E=O}}break;case 91:he++;case 40:he++;case 34:case 39:for(;E++<ae&&V.charCodeAt(E)!==he;);}if(fe===0)break;E++}switch(fe=V.substring(K,E),ge===0&&(ge=(le=le.replace(h,"").trim()).charCodeAt(0)),ge){case 64:switch(0<A&&(le=le.replace(m,"")),he=le.charCodeAt(1),he){case 100:case 109:case 115:case 45:A=H;break;default:A=ee}if(fe=t(H,A,fe,he,I+1),K=fe.length,0<z&&(A=n(ee,le,oe),rn=l(3,fe,A,H,j,M,K,he,I,ie),le=A.join(""),rn!==void 0&&(K=(fe=rn.trim()).length)===0&&(he=0,fe="")),0<K)switch(he){case 115:le=le.replace(N,a);case 100:case 109:case 45:fe=le+"{"+fe+"}";break;case 107:le=le.replace(g,"$1 $2"),fe=le+"{"+fe+"}",fe=F===1||F===2&&o("@"+fe,3)?"@-webkit-"+fe+"@"+fe:"@"+fe;break;default:fe=le+fe,ie===112&&(fe=(Ae+=fe,""))}else fe="";break;default:fe=t(H,n(H,le,oe),fe,ie,I+1)}rs+=fe,fe=oe=A=O=ge=0,le="",he=V.charCodeAt(++E);break;case 125:case 59:if(le=(0<A?le.replace(m,""):le).trim(),1<(K=le.length))switch(O===0&&(ge=le.charCodeAt(0),ge===45||96<ge&&123>ge)&&(K=(le=le.replace(" ",":")).length),0<z&&(rn=l(1,le,H,D,j,M,Ae.length,ie,I,ie))!==void 0&&(K=(le=rn.trim()).length)===0&&(le="\0\0"),ge=le.charCodeAt(0),he=le.charCodeAt(1),ge){case 0:break;case 64:if(he===105||he===99){Oi+=le+V.charAt(E);break}default:le.charCodeAt(K-1)!==58&&(Ae+=i(le,ge,he,le.charCodeAt(2)))}oe=A=O=ge=0,le="",he=V.charCodeAt(++E)}}switch(he){case 13:case 10:Y===47?Y=0:1+ge===0&&ie!==107&&0<le.length&&(A=1,le+="\0"),0<z*k&&l(0,le,H,D,j,M,Ae.length,ie,I,ie),M=1,j++;break;case 59:case 125:if(Y+me+Oe+G===0){M++;break}default:switch(M++,ve=V.charAt(E),he){case 9:case 32:if(me+G+Y===0)switch(Ne){case 44:case 58:case 9:case 32:ve="";break;default:he!==32&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:me+Y+G===0&&(A=oe=1,ve="\f"+ve);break;case 108:if(me+Y+G+X===0&&0<O)switch(E-O){case 2:Ne===112&&V.charCodeAt(E-3)===58&&(X=Ne);case 8:De===111&&(X=De)}break;case 58:me+Y+G===0&&(O=E);break;case 44:Y+Oe+me+G===0&&(A=1,ve+="\r");break;case 34:case 39:Y===0&&(me=me===he?0:me===0?he:me);break;case 91:me+Y+Oe===0&&G++;break;case 93:me+Y+Oe===0&&G--;break;case 41:me+Y+G===0&&Oe--;break;case 40:if(me+Y+G===0){if(ge===0)switch(2*Ne+3*De){case 533:break;default:ge=1}Oe++}break;case 64:Y+Oe+me+G+O+fe===0&&(fe=1);break;case 42:case 47:if(!(0<me+G+Oe))switch(Y){case 0:switch(2*he+3*V.charCodeAt(E+1)){case 235:Y=47;break;case 220:K=E,Y=42}break;case 42:he===47&&Ne===42&&K+2!==E&&(V.charCodeAt(K+2)===33&&(Ae+=V.substring(K,E+1)),ve="",Y=0)}}Y===0&&(le+=ve)}De=Ne,Ne=he,E++}if(K=Ae.length,0<K){if(A=H,0<z&&(rn=l(2,Ae,A,D,j,M,K,ie,I,ie),rn!==void 0&&(Ae=rn).length===0))return Oi+Ae+rs;if(Ae=A.join(",")+"{"+Ae+"}",F*X!==0){switch(F!==2||o(Ae,2)||(X=0),X){case 111:Ae=Ae.replace(S,":-moz-$1")+Ae;break;case 112:Ae=Ae.replace($,"::-webkit-input-$1")+Ae.replace($,"::-moz-$1")+Ae.replace($,":-ms-input-$1")+Ae}X=0}}return Oi+Ae+rs}function n(D,H,V){var ie=H.trim().split(b);H=ie;var I=ie.length,G=D.length;switch(G){case 0:case 1:var Y=0;for(D=G===0?"":D[0]+" ";Y<I;++Y)H[Y]=r(D,H[Y],V).trim();break;default:var Oe=Y=0;for(H=[];Y<I;++Y)for(var me=0;me<G;++me)H[Oe++]=r(D[me]+" ",ie[Y],V).trim()}return H}function r(D,H,V){var ie=H.charCodeAt(0);switch(33>ie&&(ie=(H=H.trim()).charCodeAt(0)),ie){case 38:return H.replace(p,"$1"+D.trim());case 58:return D.trim()+H.replace(p,"$1"+D.trim());default:if(0<1*V&&0<H.indexOf("\f"))return H.replace(p,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+H}function i(D,H,V,ie){var I=D+";",G=2*H+3*V+4*ie;if(G===944){D=I.indexOf(":",9)+1;var Y=I.substring(D,I.length-1).trim();return Y=I.substring(0,D).trim()+Y+";",F===1||F===2&&o(Y,1)?"-webkit-"+Y+Y:Y}if(F===0||F===2&&!o(I,1))return I;switch(G){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(se,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return Y=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Y+"-webkit-"+I+"-ms-flex-pack"+Y+I;case 1005:return v.test(I)?I.replace(x,":-webkit-")+I.replace(x,":-moz-")+I:I;case 1e3:switch(Y=I.substring(13).trim(),H=Y.indexOf("-")+1,Y.charCodeAt(0)+Y.charCodeAt(H)){case 226:Y=I.replace(P,"tb");break;case 232:Y=I.replace(P,"tb-rl");break;case 220:Y=I.replace(P,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+Y+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(H=(I=D).length-10,Y=(I.charCodeAt(H)===33?I.substring(0,H):I).substring(D.indexOf(":",7)+1).trim(),G=Y.charCodeAt(0)+(Y.charCodeAt(7)|0)){case 203:if(111>Y.charCodeAt(8))break;case 115:I=I.replace(Y,"-webkit-"+Y)+";"+I;break;case 207:case 102:I=I.replace(Y,"-webkit-"+(102<G?"inline-":"")+"box")+";"+I.replace(Y,"-webkit-"+Y)+";"+I.replace(Y,"-ms-"+Y+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return Y=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+Y+"-ms-flex-"+Y+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace(R,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace(R,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(L.test(D)===!0)return(Y=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?i(D.replace("stretch","fill-available"),H,V,ie).replace(":fill-available",":stretch"):I.replace(Y,"-webkit-"+Y)+I.replace(Y,"-moz-"+Y.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,V+ie===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+I}return I}function o(D,H){var V=D.indexOf(H===1?":":"{"),ie=D.substring(0,H!==3?V:10);return V=D.substring(V+1,D.length-1),_(H!==2?ie:ie.replace(W,"$1"),V,H)}function a(D,H){var V=i(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return V!==H+";"?V.replace(T," or ($1)").substring(4):"("+H+")"}function l(D,H,V,ie,I,G,Y,Oe,me,ge){for(var he=0,Ne=H,De;he<z;++he)switch(De=re[he].call(f,D,Ne,V,ie,I,G,Y,Oe,me,ge)){case void 0:case!1:case!0:case null:break;default:Ne=De}if(Ne!==H)return Ne}function u(D){switch(D){case void 0:case null:z=re.length=0;break;default:if(typeof D=="function")re[z++]=D;else if(typeof D=="object")for(var H=0,V=D.length;H<V;++H)u(D[H]);else k=!!D|0}return u}function d(D){return D=D.prefix,D!==void 0&&(_=null,D?typeof D!="function"?F=1:(F=2,_=D):F=0),d}function f(D,H){var V=D;if(33>V.charCodeAt(0)&&(V=V.trim()),U=V,V=[U],0<z){var ie=l(-1,H,V,V,j,M,0,0,0,0);ie!==void 0&&typeof ie=="string"&&(H=ie)}var I=t(ee,V,H,0,0);return 0<z&&(ie=l(-2,I,V,V,j,M,I.length,0,0,0),ie!==void 0&&(I=ie)),U="",X=0,M=j=1,I}var h=/^\0+/g,m=/[\0\r\f]/g,x=/: */g,v=/zoo|gra/,w=/([,: ])(transform)/g,b=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,$=/::(place)/g,S=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,R=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,se=/([^-])(image-set\()/,M=1,j=1,X=0,F=1,ee=[],re=[],z=0,_=null,k=0,U="";return f.use=u,f.set=d,e!==void 0&&d(e),f}var R7={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function F7(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var D7=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,F2=F7(function(e){return D7.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Jp={},M7={get exports(){return Jp},set exports(e){Jp=e}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt=typeof Symbol=="function"&&Symbol.for,nm=pt?Symbol.for("react.element"):60103,rm=pt?Symbol.for("react.portal"):60106,Hc=pt?Symbol.for("react.fragment"):60107,Wc=pt?Symbol.for("react.strict_mode"):60108,Yc=pt?Symbol.for("react.profiler"):60114,Vc=pt?Symbol.for("react.provider"):60109,qc=pt?Symbol.for("react.context"):60110,im=pt?Symbol.for("react.async_mode"):60111,Gc=pt?Symbol.for("react.concurrent_mode"):60111,Qc=pt?Symbol.for("react.forward_ref"):60112,Kc=pt?Symbol.for("react.suspense"):60113,j7=pt?Symbol.for("react.suspense_list"):60120,Zc=pt?Symbol.for("react.memo"):60115,Jc=pt?Symbol.for("react.lazy"):60116,L7=pt?Symbol.for("react.block"):60121,z7=pt?Symbol.for("react.fundamental"):60117,U7=pt?Symbol.for("react.responder"):60118,B7=pt?Symbol.for("react.scope"):60119;function en(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nm:switch(e=e.type,e){case im:case Gc:case Hc:case Yc:case Wc:case Kc:return e;default:switch(e=e&&e.$$typeof,e){case qc:case Qc:case Jc:case Zc:case Vc:return e;default:return t}}case rm:return t}}}function w$(e){return en(e)===Gc}Ie.AsyncMode=im;Ie.ConcurrentMode=Gc;Ie.ContextConsumer=qc;Ie.ContextProvider=Vc;Ie.Element=nm;Ie.ForwardRef=Qc;Ie.Fragment=Hc;Ie.Lazy=Jc;Ie.Memo=Zc;Ie.Portal=rm;Ie.Profiler=Yc;Ie.StrictMode=Wc;Ie.Suspense=Kc;Ie.isAsyncMode=function(e){return w$(e)||en(e)===im};Ie.isConcurrentMode=w$;Ie.isContextConsumer=function(e){return en(e)===qc};Ie.isContextProvider=function(e){return en(e)===Vc};Ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nm};Ie.isForwardRef=function(e){return en(e)===Qc};Ie.isFragment=function(e){return en(e)===Hc};Ie.isLazy=function(e){return en(e)===Jc};Ie.isMemo=function(e){return en(e)===Zc};Ie.isPortal=function(e){return en(e)===rm};Ie.isProfiler=function(e){return en(e)===Yc};Ie.isStrictMode=function(e){return en(e)===Wc};Ie.isSuspense=function(e){return en(e)===Kc};Ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Hc||e===Gc||e===Yc||e===Wc||e===Kc||e===j7||typeof e=="object"&&e!==null&&(e.$$typeof===Jc||e.$$typeof===Zc||e.$$typeof===Vc||e.$$typeof===qc||e.$$typeof===Qc||e.$$typeof===z7||e.$$typeof===U7||e.$$typeof===B7||e.$$typeof===L7)};Ie.typeOf=en;(function(e){e.exports=Ie})(M7);var om=Jp,H7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},W7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Y7={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},S$={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},am={};am[om.ForwardRef]=Y7;am[om.Memo]=S$;function D2(e){return om.isMemo(e)?S$:am[e.$$typeof]||H7}var V7=Object.defineProperty,q7=Object.getOwnPropertyNames,M2=Object.getOwnPropertySymbols,G7=Object.getOwnPropertyDescriptor,Q7=Object.getPrototypeOf,j2=Object.prototype;function C$(e,t,n){if(typeof t!="string"){if(j2){var r=Q7(t);r&&r!==j2&&C$(e,r,n)}var i=q7(t);M2&&(i=i.concat(M2(t)));for(var o=D2(e),a=D2(t),l=0;l<i.length;++l){var u=i[l];if(!W7[u]&&!(n&&n[u])&&!(a&&a[u])&&!(o&&o[u])){var d=G7(t,u);try{V7(e,u,d)}catch{}}}}return e}var K7=C$;function yr(){return(yr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var L2=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Xp=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Wd.typeOf(e)},Yd=Object.freeze([]),li=Object.freeze({});function dl(e){return typeof e=="function"}function z2(e){return e.displayName||e.name||"Component"}function sm(e){return e&&typeof e.styledComponentId=="string"}var Da=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",lm=typeof window<"u"&&"HTMLElement"in window,Z7=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY);function Ll(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var J7=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Ll(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),d=0,f=r.length;d<f;d++)this.tag.insertRule(u,r[d])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ed=new Map,Vd=new Map,Hs=1,vu=function(e){if(ed.has(e))return ed.get(e);for(;Vd.has(Hs);)Hs++;var t=Hs++;return ed.set(e,t),Vd.set(t,e),t},X7=function(e){return Vd.get(e)},eS=function(e,t){t>=Hs&&(Hs=t+1),ed.set(e,t),Vd.set(t,e)},tS="style["+Da+'][data-styled-version="5.3.6"]',nS=new RegExp("^"+Da+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),rS=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},iS=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(nS);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(eS(d,u),rS(e,d,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}},oS=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},P$=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var u=l.childNodes,d=u.length;d>=0;d--){var f=u[d];if(f&&f.nodeType===1&&f.hasAttribute(Da))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Da,"active"),r.setAttribute("data-styled-version","5.3.6");var a=oS();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},aS=function(){function e(n){var r=this.element=P$(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var u=o[a];if(u.ownerNode===i)return u}Ll(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),sS=function(){function e(n){var r=this.element=P$(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),lS=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),U2=lm,uS={isServer:!lm,useCSSOMInjection:!Z7},O$=function(){function e(n,r,i){n===void 0&&(n=li),r===void 0&&(r={}),this.options=yr({},uS,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&lm&&U2&&(U2=!1,function(o){for(var a=document.querySelectorAll(tS),l=0,u=a.length;l<u;l++){var d=a[l];d&&d.getAttribute(Da)!=="active"&&(iS(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(n){return vu(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(yr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new lS(a):o?new aS(a):new sS(a),new J7(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(vu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(vu(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(vu(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=X7(a);if(l!==void 0){var u=n.names.get(l),d=r.getGroup(a);if(u&&d&&u.size){var f=Da+".g"+a+'[id="'+l+'"]',h="";u!==void 0&&u.forEach(function(m){m.length>0&&(h+=m+",")}),o+=""+d+f+'{content:"'+h+`"}/*!sc*/
`}}}return o}(this)},e}(),dS=/(a)(d)/gi,B2=function(e){return String.fromCharCode(e+(e>25?39:97))};function e1(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=B2(t%52)+n;return(B2(t%52)+n).replace(dS,"$1-$2")}var ca=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_$=function(e){return ca(5381,e)};function cS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(dl(n)&&!sm(n))return!1}return!0}var fS=_$("5.3.6"),hS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&cS(t),this.componentId=n,this.baseHash=ca(fS,n),this.baseStyle=r,O$.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Ma(this.rules,t,n,r).join(""),l=e1(ca(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var u=r(a,"."+l,void 0,i);n.insertRules(i,l,u)}o.push(l),this.staticRulesId=l}else{for(var d=this.rules.length,f=ca(this.baseHash,r.hash),h="",m=0;m<d;m++){var x=this.rules[m];if(typeof x=="string")h+=x;else if(x){var v=Ma(x,t,n,r),w=Array.isArray(v)?v.join(""):v;f=ca(f,w+m),h+=w}}if(h){var b=e1(f>>>0);if(!n.hasNameForId(i,b)){var p=r(h,"."+b,void 0,i);n.insertRules(i,b,p)}o.push(b)}}return o.join(" ")},e}(),pS=/^\s*\/\/.*$/gm,gS=[":","[",".","#"];function mS(e){var t,n,r,i,o=e===void 0?li:e,a=o.options,l=a===void 0?li:a,u=o.plugins,d=u===void 0?Yd:u,f=new A7(l),h=[],m=function(w){function b(p){if(p)try{w(p+"}")}catch{}}return function(p,g,$,S,P,N,T,R,W,L){switch(p){case 1:if(W===0&&g.charCodeAt(0)===64)return w(g+";"),"";break;case 2:if(R===0)return g+"/*|*/";break;case 3:switch(R){case 102:case 112:return w($[0]+g),"";default:return g+(L===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(b)}}}(function(w){h.push(w)}),x=function(w,b,p){return b===0&&gS.indexOf(p[n.length])!==-1||p.match(i)?w:"."+t};function v(w,b,p,g){g===void 0&&(g="&");var $=w.replace(pS,""),S=b&&p?p+" "+b+" { "+$+" }":$;return t=g,n=b,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(p||!b?"":b,S)}return f.use([].concat(d,[function(w,b,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,x))},m,function(w){if(w===-2){var b=h;return h=[],b}}])),v.hash=d.length?d.reduce(function(w,b){return b.name||Ll(15),ca(w,b.name)},5381).toString():"",v}var k$=ne.createContext();k$.Consumer;var N$=ne.createContext(),yS=(N$.Consumer,new O$),t1=mS();function vS(){return C.useContext(k$)||yS}function xS(){return C.useContext(N$)||t1}var bS=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=t1);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Ll(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=t1),this.name+t.hash},e}(),$S=/([A-Z])/,wS=/([A-Z])/g,SS=/^ms-/,CS=function(e){return"-"+e.toLowerCase()};function H2(e){return $S.test(e)?e.replace(wS,CS).replace(SS,"-ms-"):e}var W2=function(e){return e==null||e===!1||e===""};function Ma(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=Ma(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(W2(e))return"";if(sm(e))return"."+e.styledComponentId;if(dl(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!t)return e;var u=e(t);return Ma(u,t,n,r)}var d;return e instanceof bS?n?(e.inject(n,r),e.getName(r)):e:Xp(e)?function f(h,m){var x,v,w=[];for(var b in h)h.hasOwnProperty(b)&&!W2(h[b])&&(Array.isArray(h[b])&&h[b].isCss||dl(h[b])?w.push(H2(b)+":",h[b],";"):Xp(h[b])?w.push.apply(w,f(h[b],b)):w.push(H2(b)+": "+(x=b,(v=h[b])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||x in R7?String(v).trim():v+"px")+";"));return m?[m+" {"].concat(w,["}"]):w}(e):e.toString()}var Y2=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function PS(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return dl(e)||Xp(e)?Y2(Ma(L2(Yd,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Y2(Ma(L2(e,n)))}var OS=function(e,t,n){return n===void 0&&(n=li),e.theme!==n.theme&&e.theme||t||n.theme},_S=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kS=/(^-|-$)/g;function yh(e){return e.replace(_S,"-").replace(kS,"")}var NS=function(e){return e1(_$(e)>>>0)};function xu(e){return typeof e=="string"&&!0}var n1=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},ES=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function IS(e,t,n){var r=e[n];n1(t)&&n1(r)?E$(r,t):e[n]=t}function E$(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(n1(a))for(var l in a)ES(l)&&IS(e,a[l],l)}return e}var I$=ne.createContext();I$.Consumer;var vh={};function T$(e,t,n){var r=sm(e),i=!xu(e),o=t.attrs,a=o===void 0?Yd:o,l=t.componentId,u=l===void 0?function(g,$){var S=typeof g!="string"?"sc":yh(g);vh[S]=(vh[S]||0)+1;var P=S+"-"+NS("5.3.6"+S+vh[S]);return $?$+"-"+P:P}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(g){return xu(g)?"styled."+g:"Styled("+z2(g)+")"}(e):d,h=t.displayName&&t.componentId?yh(t.displayName)+"-"+t.componentId:t.componentId||u,m=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(g,$,S){return e.shouldForwardProp(g,$,S)&&t.shouldForwardProp(g,$,S)}:e.shouldForwardProp);var v,w=new hS(n,h,r?e.componentStyle:void 0),b=w.isStatic&&a.length===0,p=function(g,$){return function(S,P,N,T){var R=S.attrs,W=S.componentStyle,L=S.defaultProps,se=S.foldedComponentIds,M=S.shouldForwardProp,j=S.styledComponentId,X=S.target,F=function(ie,I,G){ie===void 0&&(ie=li);var Y=yr({},I,{theme:ie}),Oe={};return G.forEach(function(me){var ge,he,Ne,De=me;for(ge in dl(De)&&(De=De(Y)),De)Y[ge]=Oe[ge]=ge==="className"?(he=Oe[ge],Ne=De[ge],he&&Ne?he+" "+Ne:he||Ne):De[ge]}),[Y,Oe]}(OS(P,C.useContext(I$),L)||li,P,R),ee=F[0],re=F[1],z=function(ie,I,G,Y){var Oe=vS(),me=xS(),ge=I?ie.generateAndInjectStyles(li,Oe,me):ie.generateAndInjectStyles(G,Oe,me);return ge}(W,T,ee),_=N,k=re.$as||P.$as||re.as||P.as||X,U=xu(k),D=re!==P?yr({},P,{},re):P,H={};for(var V in D)V[0]!=="$"&&V!=="as"&&(V==="forwardedAs"?H.as=D[V]:(M?M(V,F2,k):!U||F2(V))&&(H[V]=D[V]));return P.style&&re.style!==P.style&&(H.style=yr({},P.style,{},re.style)),H.className=Array.prototype.concat(se,j,z!==j?z:null,P.className,re.className).filter(Boolean).join(" "),H.ref=_,C.createElement(k,H)}(v,g,$,b)};return p.displayName=f,(v=ne.forwardRef(p)).attrs=m,v.componentStyle=w,v.displayName=f,v.shouldForwardProp=x,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Yd,v.styledComponentId=h,v.target=r?e.target:e,v.withComponent=function(g){var $=t.componentId,S=function(N,T){if(N==null)return{};var R,W,L={},se=Object.keys(N);for(W=0;W<se.length;W++)R=se[W],T.indexOf(R)>=0||(L[R]=N[R]);return L}(t,["componentId"]),P=$&&$+"-"+(xu(g)?g:yh(z2(g)));return T$(g,yr({},S,{attrs:m,componentId:P}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?E$({},e.defaultProps,g):g}}),v.toString=function(){return"."+v.styledComponentId},i&&K7(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var r1=function(e){return function t(n,r,i){if(i===void 0&&(i=li),!Wd.isValidElementType(r))return Ll(1,String(r));var o=function(){return n(r,i,PS.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,yr({},i,{},a))},o.attrs=function(a){return t(n,r,yr({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(T$,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){r1[e]=r1(e)});const c=r1;var A$={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},V2=ne.createContext&&ne.createContext(A$),ui=globalThis&&globalThis.__assign||function(){return ui=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ui.apply(this,arguments)},TS=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function R$(e){return e&&e.map(function(t,n){return ne.createElement(t.tag,ui({key:n},t.attr),R$(t.child))})}function we(e){return function(t){return ne.createElement(AS,ui({attr:ui({},e.attr)},t),R$(e.child))}}function AS(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=TS(e,["attr","size","title"]),l=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),ne.createElement("svg",ui({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:ui(ui({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&ne.createElement("title",null,o),e.children)};return V2!==void 0?ne.createElement(V2.Consumer,null,function(n){return t(n)}):t(A$)}function RS(e){return we({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(e)}function FS(e){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function DS(e){return we({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"}}]})(e)}function cn(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}function MS(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"}}]})(e)}function q2(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]})(e)}function jS(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z"}}]})(e)}function LS(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"}}]})(e)}function zS(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"}}]})(e)}function US(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm122.7-533.4c18.7-18.7 49.1-18.7 67.9 0 18.7 18.7 18.7 49.1 0 67.9-18.7 18.7-49.1 18.7-67.9 0-18.7-18.7-18.7-49.1 0-67.9zm283.8 282.9l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"}}]})(e)}function Va(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]})(e)}function BS(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 0 0-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 0 0-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z"}}]})(e)}function ja(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"}},{tag:"path",attr:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"}}]})(e)}function La(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]})(e)}function HS(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M668.6 320c0-4.4-3.6-8-8-8h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.5-1.1.9-2.4.9-3.7zM157.9 504.2a352.7 352.7 0 0 1 103.5-242.4c32.5-32.5 70.3-58.1 112.4-75.9 43.6-18.4 89.9-27.8 137.6-27.8 47.8 0 94.1 9.3 137.6 27.8 42.1 17.8 79.9 43.4 112.4 75.9 10 10 19.3 20.5 27.9 31.4l-50 39.1a8 8 0 0 0 3 14.1l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3l-47.8 37.4C770.7 146.3 648.6 82 511.5 82 277 82 86.3 270.1 82 503.8a8 8 0 0 0 8 8.2h60c4.3 0 7.8-3.5 7.9-7.8zM934 512h-60c-4.3 0-7.9 3.5-8 7.8a352.7 352.7 0 0 1-103.5 242.4 352.57 352.57 0 0 1-112.4 75.9c-43.6 18.4-89.9 27.8-137.6 27.8s-94.1-9.3-137.6-27.8a352.57 352.57 0 0 1-112.4-75.9c-10-10-19.3-20.5-27.9-31.4l49.9-39.1a8 8 0 0 0-3-14.1l-156.8-38.3c-5-1.2-9.9 2.6-9.9 7.7l-.8 161.7c0 6.7 7.7 10.5 12.9 6.3l47.8-37.4C253.3 877.7 375.4 942 512.5 942 747 942 937.7 753.9 942 520.2a8 8 0 0 0-8-8.2z"}}]})(e)}function WS(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]})(e)}function YS(e){return we({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M635 771.7c-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 0 1-59.1-84.7H232v201h560V687h-97.9c-11.6 32.8-32 62.3-59.1 84.7z"}},{tag:"path",attr:{d:"M320 501h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attr:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v201zm0-264H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v488z"}},{tag:"path",attr:{d:"M320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]})(e)}const F$=()=>s("div",{children:s(qS,{children:y(VS,{children:[y(wu,{children:[s($u,{children:"Categories"}),y(bu,{children:[s(jt,{children:"Home Appliances and Founiture"}),s(jt,{children:"Food Items"})]})]}),y(wu,{children:[s($u,{children:"Important Links"}),y(bu,{children:[s(jt,{children:"Terms & Conditions"}),s(jt,{children:"Return & Exchange"}),s(jt,{children:"Shipping & Deliveries"}),s(jt,{children:"Privacy Policies"})]})]}),y(wu,{children:[s($u,{children:"Information"}),y(bu,{children:[s(jt,{children:"About Us"}),s(jt,{children:"Contact Us"}),s(jt,{children:"Blog"}),s(jt,{children:"Stories"}),s(jt,{children:"FAQ"})]})]}),y(wu,{children:[s($u,{children:"Socials"}),y(bu,{children:[y(jt,{children:[s("span",{children:s(RS,{size:"16px"})}),"Facebook"]}),y(jt,{children:[s("span",{children:s(FS,{size:"16px"})}),"Twitter"]}),y(jt,{children:[s("span",{children:s(zS,{size:"16px"})}),"Instagram"]})]})]})]})})}),jt=c.div`
  font-size: 14px;
  font-weight: 700;
  color: #4a4747;
  margin-bottom: 10px;

  span{
    margin-right: 10px;
  }

  @media (max-width: 685px){
    font-size: 12px;
    font-weight: 600px;
  }
`,bu=c.div``,$u=c.div`
  font-size: 25px;
  font-weight: 800;
  color: #232121;
  margin-bottom: 20px;


  @media (max-width: 763px){
    font-size: 20px;
    font-weight: 700px;
  }
`,wu=c.div`
  margin: 5px;

  @media (max-width: 763px){
    margin: 10px;
  }
`,VS=c.div`
  width: 95%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* background-color: gold; */

  @media (max-width: 763px){
    justify-content: center;
  }
  @media (max-width: 500px){
   text-align: center;
  }
`,qS=c.div`
  width: 100%;
  border-top: 2px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  /* background-color: gold; */

`;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cl(){return cl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cl.apply(this,arguments)}var Kr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kr||(Kr={}));const G2="popstate";function GS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return i1("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fl(i)}return KS(t,n,null,e)}function at(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function QS(){return Math.random().toString(36).substr(2,8)}function Q2(e,t){return{usr:e.state,key:e.key,idx:t}}function i1(e,t,n,r){return n===void 0&&(n=null),cl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qa(t):t,{state:n,key:t&&t.key||r||QS()})}function fl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qa(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function KS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Kr.Pop,u=null,d=f();d==null&&(d=0,a.replaceState(cl({},a.state,{idx:d}),""));function f(){return(a.state||{idx:null}).idx}function h(){l=Kr.Pop;let b=f(),p=b==null?null:b-d;d=b,u&&u({action:l,location:w.location,delta:p})}function m(b,p){l=Kr.Push;let g=i1(w.location,b,p);n&&n(g,b),d=f()+1;let $=Q2(g,d),S=w.createHref(g);try{a.pushState($,"",S)}catch{i.location.assign(S)}o&&u&&u({action:l,location:w.location,delta:1})}function x(b,p){l=Kr.Replace;let g=i1(w.location,b,p);n&&n(g,b),d=f();let $=Q2(g,d),S=w.createHref(g);a.replaceState($,"",S),o&&u&&u({action:l,location:w.location,delta:0})}function v(b){let p=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof b=="string"?b:fl(b);return at(p,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,p)}let w={get action(){return l},get location(){return e(i,a)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(G2,h),u=b,()=>{i.removeEventListener(G2,h),u=null}},createHref(b){return t(i,b)},createURL:v,encodeLocation(b){let p=v(b);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:x,go(b){return a.go(b)}};return w}var K2;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(K2||(K2={}));function ZS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?qa(t):t,i=j$(r.pathname||"/",n);if(i==null)return null;let o=D$(e);JS(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=sC(o[l],dC(i));return a}function D$(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(at(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=di([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(at(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),D$(o.children,t,f,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:oC(d,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let u of M$(o.path))i(o,a,u)}),t}function M$(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=M$(r.join("/")),l=[];return l.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...a),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function JS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:aC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const XS=/^:\w+$/,eC=3,tC=2,nC=1,rC=10,iC=-2,Z2=e=>e==="*";function oC(e,t){let n=e.split("/"),r=n.length;return n.some(Z2)&&(r+=iC),t&&(r+=tC),n.filter(i=>!Z2(i)).reduce((i,o)=>i+(XS.test(o)?eC:o===""?nC:rC),r)}function aC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function sC(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=lC({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d);if(!f)return null;Object.assign(r,f.params);let h=l.route;o.push({params:r,pathname:di([i,f.pathname]),pathnameBase:pC(di([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=di([i,f.pathnameBase]))}return o}function lC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=uC(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,f,h)=>{if(f==="*"){let m=l[h]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return d[f]=cC(l[h]||"",f),d},{}),pathname:o,pathnameBase:a,pattern:e}}function uC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),um(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function dC(e){try{return decodeURI(e)}catch(t){return um(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cC(e,t){try{return decodeURIComponent(e)}catch(n){return um(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function j$(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function um(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qa(e):e;return{pathname:n?n.startsWith("/")?n:hC(n,t):t,search:gC(r),hash:mC(i)}}function hC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xh(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function L$(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function z$(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=qa(e):(i=cl({},e),at(!i.pathname||!i.pathname.includes("?"),xh("?","pathname","search",i)),at(!i.pathname||!i.pathname.includes("#"),xh("#","pathname","hash",i)),at(!i.search||!i.search.includes("#"),xh("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let h=t.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}l=h>=0?t[h]:"/"}let u=fC(i,l),d=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const di=e=>e.join("/").replace(/\/\/+/g,"/"),pC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function o1(){return o1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o1.apply(this,arguments)}function vC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const xC=typeof Object.is=="function"?Object.is:vC,{useState:bC,useEffect:$C,useLayoutEffect:wC,useDebugValue:SC}=rp;function CC(e,t,n){const r=t(),[{inst:i},o]=bC({inst:{value:r,getSnapshot:t}});return wC(()=>{i.value=r,i.getSnapshot=t,bh(i)&&o({inst:i})},[e,r,t]),$C(()=>(bh(i)&&o({inst:i}),e(()=>{bh(i)&&o({inst:i})})),[e]),SC(r),r}function bh(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!xC(n,r)}catch{return!0}}function PC(e,t,n){return t()}const OC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_C=!OC,kC=_C?PC:CC;"useSyncExternalStore"in rp&&(e=>e.useSyncExternalStore)(rp);const U$=C.createContext(null),Xc=C.createContext(null),zl=C.createContext(null),ef=C.createContext(null),po=C.createContext({outlet:null,matches:[]}),B$=C.createContext(null);function NC(e,t){let{relative:n}=t===void 0?{}:t;Ga()||at(!1);let{basename:r,navigator:i}=C.useContext(zl),{hash:o,pathname:a,search:l}=dm(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:di([r,a])),i.createHref({pathname:u,search:l,hash:o})}function Ga(){return C.useContext(ef)!=null}function Ul(){return Ga()||at(!1),C.useContext(ef).location}function nt(){Ga()||at(!1);let{basename:e,navigator:t}=C.useContext(zl),{matches:n}=C.useContext(po),{pathname:r}=Ul(),i=JSON.stringify(L$(n).map(l=>l.pathnameBase)),o=C.useRef(!1);return C.useEffect(()=>{o.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let d=z$(l,JSON.parse(i),r,u.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:di([e,d.pathname])),(u.replace?t.replace:t.push)(d,u.state,u)},[e,t,i,r])}function H$(){let{matches:e}=C.useContext(po),t=e[e.length-1];return t?t.params:{}}function dm(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(po),{pathname:i}=Ul(),o=JSON.stringify(L$(r).map(a=>a.pathnameBase));return C.useMemo(()=>z$(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function cm(e,t){Ga()||at(!1);let{navigator:n}=C.useContext(zl),r=C.useContext(Xc),{matches:i}=C.useContext(po),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ul(),d;if(t){var f;let w=typeof t=="string"?qa(t):t;l==="/"||(f=w.pathname)!=null&&f.startsWith(l)||at(!1),d=w}else d=u;let h=d.pathname||"/",m=l==="/"?h:h.slice(l.length)||"/",x=ZS(e,{pathname:m}),v=AC(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:di([l,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:di([l,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&v?C.createElement(ef.Provider,{value:{location:o1({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Kr.Pop}},v):v}function EC(){let e=MC(),t=yC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}class IC extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(po.Provider,{value:this.props.routeContext},C.createElement(B$.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function TC(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(U$);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(po.Provider,{value:t},r)}function AC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||at(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let u=a.route.id?i==null?void 0:i[a.route.id]:null,d=n?a.route.errorElement||C.createElement(EC,null):null,f=t.concat(r.slice(0,l+1)),h=()=>C.createElement(TC,{match:a,routeContext:{outlet:o,matches:f}},u?d:a.route.element!==void 0?a.route.element:o);return n&&(a.route.errorElement||l===0)?C.createElement(IC,{location:n.location,component:d,error:u,children:h(),routeContext:{outlet:null,matches:f}}):h()},null)}var J2;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(J2||(J2={}));var qd;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(qd||(qd={}));function RC(e){let t=C.useContext(Xc);return t||at(!1),t}function FC(e){let t=C.useContext(po);return t||at(!1),t}function DC(e){let t=FC(),n=t.matches[t.matches.length-1];return n.route.id||at(!1),n.route.id}function MC(){var e;let t=C.useContext(B$),n=RC(qd.UseRouteError),r=DC(qd.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function jC(e){let{to:t,replace:n,state:r,relative:i}=e;Ga()||at(!1);let o=C.useContext(Xc),a=nt();return C.useEffect(()=>{o&&o.navigation.state!=="idle"||a(t,{replace:n,state:r,relative:i})}),null}function Hi(e){at(!1)}function LC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Kr.Pop,navigator:o,static:a=!1}=e;Ga()&&at(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=qa(r));let{pathname:d="/",search:f="",hash:h="",state:m=null,key:x="default"}=r,v=C.useMemo(()=>{let w=j$(d,l);return w==null?null:{pathname:w,search:f,hash:h,state:m,key:x}},[l,d,f,h,m,x]);return v==null?null:C.createElement(zl.Provider,{value:u},C.createElement(ef.Provider,{children:n,value:{location:v,navigationType:i}}))}function zC(e){let{children:t,location:n}=e,r=C.useContext(U$),i=r&&!t?r.router.routes:a1(t);return cm(i,n)}var X2;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(X2||(X2={}));new Promise(()=>{});function a1(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,a1(r.props.children,t));return}r.type!==Hi&&at(!1),!r.props.index||!r.props.children||at(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=a1(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gd(){return Gd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gd.apply(this,arguments)}function W$(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function UC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function BC(e,t){return e.button===0&&(!t||t==="_self")&&!UC(e)}const HC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],WC=["aria-current","caseSensitive","className","end","style","to","children"];function YC(e){let{basename:t,children:n,window:r}=e,i=C.useRef();i.current==null&&(i.current=GS({window:r,v5Compat:!0}));let o=i.current,[a,l]=C.useState({action:o.action,location:o.location});return C.useLayoutEffect(()=>o.listen(l),[o]),C.createElement(LC,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const VC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bl=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:u,to:d,preventScrollReset:f}=t,h=W$(t,HC),m=typeof d=="string"?d:fl(d),x=/^[a-z+]+:\/\//i.test(m)||m.startsWith("//"),v=m,w=!1;if(VC&&x){let $=new URL(window.location.href),S=m.startsWith("//")?new URL($.protocol+m):new URL(m);S.origin===$.origin?v=S.pathname+S.search+S.hash:w=!0}let b=NC(v,{relative:i}),p=qC(v,{replace:a,state:l,target:u,preventScrollReset:f,relative:i});function g($){r&&r($),$.defaultPrevented||p($)}return C.createElement("a",Gd({},h,{href:x?m:b,onClick:w||o?r:g,ref:n,target:u}))}),be=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:u,children:d}=t,f=W$(t,WC),h=dm(u,{relative:f.relative}),m=Ul(),x=C.useContext(Xc),{navigator:v}=C.useContext(zl),w=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,b=m.pathname,p=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(b=b.toLowerCase(),p=p?p.toLowerCase():null,w=w.toLowerCase());let g=b===w||!a&&b.startsWith(w)&&b.charAt(w.length)==="/",$=p!=null&&(p===w||!a&&p.startsWith(w)&&p.charAt(w.length)==="/"),S=g?r:void 0,P;typeof o=="function"?P=o({isActive:g,isPending:$}):P=[o,g?"active":null,$?"pending":null].filter(Boolean).join(" ");let N=typeof l=="function"?l({isActive:g,isPending:$}):l;return C.createElement(Bl,Gd({},f,{"aria-current":S,className:P,ref:n,style:N,to:u}),typeof d=="function"?d({isActive:g,isPending:$}):d)});var ev;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ev||(ev={}));var tv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tv||(tv={}));function qC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=nt(),u=Ul(),d=dm(e,{relative:a});return C.useCallback(f=>{if(BC(f,n)){f.preventDefault();let h=r!==void 0?r:fl(u)===fl(d);l(e,{replace:h,state:i,preventScrollReset:o,relative:a})}},[u,l,d,r,i,n,e,o,a])}const GC=()=>s("div",{children:s(JC,{children:y(ZC,{children:[s(KC,{children:"WHY YOU SHOULD SELL ON CROSS AFRICA"}),y(QC,{children:[s(vo,{children:"SELL MORE PRODUCTS"}),s(vo,{children:"SELL MORE PRODUCTS"}),s(vo,{children:"SELL MORE PRODUCTS"}),s(vo,{children:"SELL MORE PRODUCTS"}),s(vo,{children:"SELL MORE PRODUCTS"}),s(vo,{children:"SELL MORE PRODUCTS"})]})]})})}),vo=c.button`
  padding: 10px 20px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`,QC=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`,KC=c.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 70px;
  text-align: center;
`,ZC=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  min-height: 100%;
`,JC=c.div`
  width: 100%;
  background-color: #902a75;
`,XC=()=>s("div",{children:s(iP,{children:y(rP,{children:[s(nP,{children:"GET STARTED TODAY"}),s(tP,{children:"Join the fast, trusted and best selling platformin Africa"}),s(eP,{to:"/auth",children:"Start Selling Today"})]})})}),eP=c(be)`
    padding: 15px 70px;
    border: #D975C0;
    background-color: #D975C0;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`,tP=c.div`
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 15px;
  text-align: center;
`,nP=c.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
    text-align: center;
`,rP=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
`,iP=c.div`
  width: 100%;
  /* background-color: #f6c8ea; */
`,oP=()=>s("div",{children:s(aP,{children:y(sP,{children:[y(lP,{to:"/",children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),y(uP,{children:[s(nv,{to:"/auth",bd:"",bg:"ffff",hbg:"",hbd:"fff",children:"Sign Up"}),s(nv,{to:"/auth/signin",bd:"fgf",bg:"",hbg:"fff",hbd:"",children:"Log In"})]})]})})}),aP=c.div`
  width: 100%;
  /* background-color: #f8ecf5; */
  /* max-width: 2040px; */
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0px;
  z-index: 1;
`,sP=c.div`
  width: 95%;
  height: 85px;
  display: flex;
  justify-content: space-between;
`,lP=c(be)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  text-decoration: none;
  /* margin-bottom: 10px; */

  img {
    height: 50px;
    width: 50px;
  }

  div {
    font-weight: 700;
    font-size: 17px;
    color: white;
  }
`,uP=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 350px;
`,nv=c(be)`
  padding: 10px 40px;
  border: ${({bd:e})=>e===""?"0px":"1px solid #D975C0"};
  background-color: ${({bg:e})=>e===""?"transparent":"#D975C0"};
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 345ms ease-in;
  text-decoration: none;
  margin: 10px;

  :hover {
    background-color: ${({hbg:e})=>e===""?"transparent":"#D975C0"};
    border: ${({hbd:e})=>e===""?"0px":"1px solid #D975C0"};
  }
`,dP=()=>y(ro,{children:[s(oP,{}),y("div",{children:[s(mP,{children:y(gP,{children:[y(pP,{children:[s(hP,{children:"ANYONE CAN SELL ON CROSS AFRICA"}),s(fP,{children:"Become a merchant and sell to thousands of people across africa"}),s(cP,{to:"/auth",children:"Start Selling Today"})]}),s(GC,{}),s(XC,{})]})}),s(F$,{})]})]}),cP=c(be)`
  padding: 15px 70px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`,fP=c.div`
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 15px;
  text-align: center;
`,hP=c.div`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
`,pP=c.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  /* z-index: -1; */
  /* background-color: #f4caca; */
  background-image: linear-gradient(
      to bottom,
      rgba(23, 23, 24, 0.52),
      rgba(9, 0, 8, 0.73)
    ),
    url("/Frame 114.png");
`,gP=c.div``,mP=c.div`
  width: 100%;
`,yP=()=>s("div",{children:s(SP,{children:y(wP,{children:[y($P,{children:["Buying & Selling made easy ",s("div",{children:"accross Africa!"})]}),y(bP,{children:[s(sv,{children:s(xP,{children:y(av,{children:[s(ov,{children:"Mobile Phones."}),s(iv,{children:"Buying made easy, get used phones, laptops, chargers etc.. at the comfort of your home"}),s(be,{to:"/phone",style:{textDecoration:"none",color:"white"},children:s(rv,{children:"Buy Now"})})]})})}),s(sv,{children:s(vP,{children:y(av,{children:[s(ov,{children:"Food & Groceries."}),s(iv,{children:"Buying made easy, food and groceries are all available, get them all at the comfort of your home."}),s(be,{to:"/food",style:{textDecoration:"none",color:"white"},children:s(rv,{children:"Buy Now"})})]})})})]})]})})}),rv=c.button`
  margin-bottom: 20px;
  border: 0px;
  outline: none;
  background: #ee65cc;
  padding: 10px 30px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`,vP=c.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 115.png");
  background-repeat: no-repeat;
  background-size: cover;
`,xP=c.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0px 18px;
  margin: 0 -17px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(61, 61, 62, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("/Frame 113.png");
  background-repeat: no-repeat;
  background-size: cover;
`,iv=c.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`,ov=c.div`
  font-size: 35px;
  font-weight: 400;
  margin-bottom: 20px;
`,av=c.div`
  /* background-color: gold; */
  margin-bottom: 20px;
  height: 227px;
  width: 400px;
`,sv=c.div`
  width: 550px;
  height: 650px;
  color: white;
  padding: 0px 18px;
  margin: 10px 0px;

  display: flex;
  align-items: flex-end;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
  }
  @media (max-width: 1300px){
    width: 500px;
  }
  @media (max-width: 1190px){
    width: 450px;
  }
  @media (max-width: 1080px){
    width: 400px;
  }
  @media (max-width: 980px){
    margin: 10px;
    width: 100%;
  }
`,bP=c.div`
  width: 100%;
  /* background-color: gold; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 980px){
    justify-content: center;
  }
`,$P=c.div`
  /* background-color: gold; */
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  /* width: 300px; */
  /* color: ; */
`,wP=c.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`,SP=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
`,CP={version:4,country_calling_codes:{1:["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],880:["BD"],886:["TW"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},countries:{AC:["247","00","(?:[01589]\\d|[46])\\d{4}",[5,6]],AD:["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],AE:["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],AF:["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],AG:["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([457]\\d{6})$|1","268$1",0,"268"],AI:["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2457]\\d{6})$|1","264$1",0,"264"],AL:["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],AM:["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],AO:["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],AR:["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],AS:["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"([267]\\d{6})$|1","684$1",0,"684"],AT:["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,[["(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],AW:["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],AX:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],AZ:["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],BA:["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],BB:["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","246$1",0,"246"],BD:["880","00","[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|22"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],BE:["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],BF:["226","00","[025-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]]],BG:["359","00","00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9,12],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],BH:["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[047]"]]]],BI:["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],BJ:["229","00","[24-689]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-689]"]]]],BL:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:2[7-9]|5[12]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],BM:["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","441$1",0,"441"],BN:["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],BO:["591","00(?:1\\d)?","(?:[2-467]\\d\\d|8001)\\d{5}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]"]],["(\\d{8})","$1",["[67]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],BQ:["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],BS:["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([3-8]\\d{6})$|1","242$1",0,"242"],BT:["975","00","[17]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]]],BW:["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-79]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]]],BY:["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],BZ:["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],CA:["1","011","(?:[2-8]\\d|90)\\d{8}|3\\d{6}",[7,10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",[10]],["",[10]],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",[10]],["900[2-9]\\d{6}",[10]],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}",[10]],0,["310\\d{4}",[7]],0,["600[2-9]\\d{6}",[10]]]],CC:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CD:["243","00","[189]\\d{8}|[1-68]\\d{6}",[7,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],"0"],CF:["236","00","(?:[27]\\d{3}|8776)\\d{4}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]]],CG:["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],CH:["41","00","8\\d{11}|[2-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],CI:["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]]],CK:["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],CL:["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],CM:["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]]],CN:["86","00|1(?:[12]\\d|79)\\d\\d00","1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","10(?:10|9[56])|2[0-57-9](?:100|9[56])"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"(1(?:[12]\\d|79)\\d\\d)|0",0,0,0,0,"00"],CO:["57","00(?:4(?:[14]4|56)|[579])","(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}",[10,11],[["(\\d{3})(\\d{7})","$1 $2",["6"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3[0-357]|91"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0(4(?:[14]4|56)|[579])?"],CR:["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],CU:["53","119","[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["5"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],CV:["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],CW:["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],CX:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:79[01]|83[0-389]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[016-9]|7[02-8]|8[0-24-9]|9[0-27-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CY:["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],CZ:["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],DE:["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[0568]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],DJ:["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],DK:["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],DM:["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","767$1",0,"767"],DO:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9"],DZ:["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],EC:["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],EE:["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],EG:["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[189]"],"0$1"]],"0"],EH:["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,"528[89]"],ER:["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],ES:["34","00","[5-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]]],ET:["251","00","(?:11|[2-579]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-579]"],"0$1"]],"0"],FI:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["[12]00|[368]|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[1245]|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],FJ:["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],FK:["500","00","[2-7]\\d{4}",[5]],FM:["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],FO:["298","00","[2-9]\\d{5}",[6],[["(\\d{6})","$1",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],FR:["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],GA:["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],0,0,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1"],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,0,0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-579])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-246-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],GD:["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","473$1",0,"473"],GE:["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],GF:["594","00","[56]94\\d{6}|(?:80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]|9[47]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],"0"],GG:["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"([25-9]\\d{5})$|0","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],GH:["233","00","(?:[235]\\d{3}|800)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],"0"],GI:["350","00","(?:[25]\\d|60)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],GL:["299","00","(?:19|[2-689]\\d|70)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]]],GM:["220","00","[2-9]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],GN:["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],GP:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],GQ:["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],GR:["30","00","5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",[10,11,12],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3,4})(\\d{5})","$1 $2 $3",["8"]]]],GT:["502","00","(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],GU:["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"([3-9]\\d{6})$|1","671$1",0,"671"],GW:["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],GY:["592","001","9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-46-9]"]]]],HK:["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],HN:["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],HR:["385","00","(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",[6,7,8,9],[["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],HT:["509","00","(?:[2-489]\\d|55)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]]],HU:["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06"],ID:["62","00[89]","(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],IE:["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],IL:["972","0(?:0|1[2-9])","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],IM:["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([25-8]\\d{5})$|0","1624$1",0,"74576|(?:16|7[56])24"],IN:["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],IO:["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],IQ:["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],IR:["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],IS:["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],IT:["39","00","0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",[6,7,8,9,10,11],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],0,0,0,0,0,0,[["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[1-9]\\d{8}|3[2-9]\\d{7}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],0,0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],JE:["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([0-24-8]\\d{5})$|0","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],["56\\d{8}"]]],JM:["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],JO:["962","00","(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],JP:["81","010","00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"]],"0"],KE:["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],KG:["996","00","8\\d{9}|(?:[235-8]\\d|99)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],KH:["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],KI:["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],KM:["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],KN:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","869$1",0,"869"],KP:["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],KR:["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],KW:["965","00","18\\d{5}|(?:[2569]\\d|41)\\d{6}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[245]"]]]],KY:["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","345$1",0,"345"],KZ:["7","810","(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",[10,14],0,"8",0,0,0,0,"33|7",0,"8~10"],LA:["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30[013-9]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],LB:["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0"],LC:["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"([2-8]\\d{6})$|1","758$1",0,"758"],LI:["423","00","[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"(1001)|0"],LK:["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],LR:["231","00","(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[4-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23578]"],"0$1"]],"0"],LS:["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],LT:["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(8-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",1]],"8",0,"[08]"],LU:["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],LV:["371","00","(?:[268]\\d|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]]],LY:["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],MA:["212","00","[5-8]\\d{8}",[9],[["(\\d{5})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29[1289]|389)","529(?:1[1-46-9]|2[013-8]|90)|5(?:298|389)[0-46-9]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],["(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|892","5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],["(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],"0",0,0,0,0,0,[["5293[01]\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|9[0-289])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[0189]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|2[0-2]|6[0-8]|8[0-3]))\\d{6}"],["80\\d{7}"],["89\\d{7}"],0,0,0,0,["592(?:4[0-2]|93)\\d{4}"]]],MC:["377","00","(?:[3489]|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],"0"],MD:["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],ME:["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],MF:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"],["80[0-5]\\d{6}"],0,0,0,0,0,["9(?:(?:395|76[018])\\d|475[01])\\d{4}"]]],MG:["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"([24-9]\\d{6})$|0","20$1"],MH:["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],MK:["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],ML:["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],MM:["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],MN:["976","001","[12]\\d{7,9}|[5-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],MO:["853","00","0800\\d{3}|(?:28|[68]\\d)\\d{6}",[7,8],[["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],MP:["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","670$1",0,"670"],MQ:["596","00","596\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],MR:["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],MS:["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"([34]\\d{6})$|1","664$1",0,"664"],MT:["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],MU:["230","0(?:0|[24-7]0|3[03])","(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["[57]"]],["(\\d{5})(\\d{5})","$1 $2",["8"]]],0,0,0,0,0,0,0,"020"],MV:["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[34679]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],MW:["265","00","(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],"0"],MX:["52","0[09]","1(?:(?:[27]2|44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}",[10,11],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],0,1],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],0,1],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],0,1]],"01",0,"0(?:[12]|4[45])|1",0,0,0,0,"00"],MY:["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],MZ:["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],NA:["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],NC:["687","00","(?:050|[2-57-9]\\d\\d)\\d{3}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]]],NE:["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[04]"]]]],NF:["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],NG:["234","009","(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",[7,8,10,11,12,13,14],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],NI:["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],NL:["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",[5,6,7,8,9,10,11],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],"0"],NO:["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[489]|59"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],NP:["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],NR:["674","00","(?:444|(?:55|8\\d)\\d|666)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[4-68]"]]]],NU:["683","00","(?:[47]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],NZ:["64","0(?:0|161)","[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-579]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|[89]0","50(?:[0367]|88)|[89]0"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[59]|80"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7|86"],"0$1"]],"0",0,0,0,0,0,0,"00"],OM:["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],PA:["507","00","(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10,11],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]]],PE:["51","00|19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,"00"," Anexo "],PF:["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],PG:["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],PH:["63","00","(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],PK:["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],PL:["48","00","(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],PM:["508","00","[45]\\d{5}|(?:708|80\\d)\\d{6}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],PR:["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],PS:["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],PT:["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]]],PW:["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],PY:["595","00","59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-6])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0"],QA:["974","00","800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",[7,8,9,11],[["(\\d{3})(\\d{4})","$1 $2",["2[16]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]]],RE:["262","00","(?:26|[689]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"],"0$1"]],"0",0,0,0,0,0,[["26(?:2\\d\\d|3(?:0\\d|1[0-3]))\\d{4}"],["(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|6[0-6]|7[0-27]|8[0-8]|9[0-479]))|9(?:399[0-2]|4790|76(?:2[27]|3[0-37]|9\\d)))\\d{4}"],["80\\d{7}"],["89[1-37-9]\\d{6}"],0,0,0,0,0,["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],RO:["40","00","(?:[2378]\\d|90)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[237-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],RS:["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],RU:["7","810","8\\d{13}|[347-9]\\d{9}",[10,14],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",1],["(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],"8",0,0,0,0,"3[04-689]|[489]",0,"8~10"],RW:["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]]],"0"],SA:["966","00","92\\d{7}|(?:[15]|8\\d)\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],SB:["677","0[01]","(?:[1-6]|[7-9]\\d\\d)\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],SC:["248","010|0[0-2]","800\\d{4}|(?:[249]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],SD:["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],SE:["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],SG:["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-6]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],SH:["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],SI:["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],SJ:["47","00","0\\d{4}|(?:[489]\\d|[57]9)\\d{6}",[5,8],0,0,0,0,0,0,"79"],SK:["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],"0"],SL:["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],SM:["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],SN:["221","00","(?:[378]\\d|93)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],SO:["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d)(\\d{7})","$1 $2",["(?:2|90)4|[67]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3478]|64|90"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|6(?:0[5-7]|[1-35-9])|9[2-9]"]]],"0"],SR:["597","00","(?:[2-5]|68|[78]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]]],SS:["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],ST:["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],SV:["503","00","[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[267]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],SX:["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"(5\\d{6})$|1","721$1",0,"721"],SY:["963","00","[1-39]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",1]],"0"],SZ:["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],TA:["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],TC:["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"([2-479]\\d{6})$|1","649$1",0,"649"],TD:["235","00|16","(?:22|[69]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],0,0,0,0,0,0,0,"00"],TG:["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],TH:["66","00[1-9]","(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",[8,9,10,13],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],TJ:["992","810","(?:00|[1-57-9]\\d)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[0-57-9]"]]],0,0,0,0,0,0,0,"8~10"],TK:["690","00","[2-47]\\d{3,6}",[4,5,6,7]],TL:["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],TM:["993","810","[1-6]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],TN:["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],TO:["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]]],TR:["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0"],TT:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-46-8]\\d{6})$|1","868$1",0,"868"],TV:["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],TW:["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],TZ:["255","00[056]","(?:[25-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["5"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],UA:["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],UG:["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],"0"],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:47220[01]|5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|4[46]))|57200))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[0-2]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]],UY:["598","0(?:0|1[3-9]\\d)","(?:0004|4)\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",[7,8,10,13],[["(\\d{3})(\\d{4})","$1 $2",["405|8|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[124]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["4"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["0"]]],"0",0,0,0,0,0,0,"00"," int. "],UZ:["998","810","(?:33|[5-79]\\d|88)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[35-9]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],VA:["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],0,0,0,0,0,0,"06698"],VC:["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","784$1",0,"784"],VE:["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],VG:["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-578]\\d{6})$|1","284$1",0,"284"],VI:["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","340$1",0,"340"],VN:["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",1],["(\\d{4})(\\d{4,6})","$1 $2",["1"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],VU:["678","00","[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]]],WF:["681","00","(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[478]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],WS:["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],XK:["383","00","[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],"0"],YE:["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],YT:["262","00","(?:(?:(?:26|63)9|80\\d)\\d\\d|93980)\\d{4}",[9],0,"0",0,0,0,0,"269|63|9398"],ZA:["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],ZM:["260","00","800\\d{6}|(?:21|63|[79]\\d)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],"0"],ZW:["263","00","2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",[5,6,7,8,9,10],[["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],"0"]},nonGeographic:{800:["800",0,"(?:00|[1-9]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["\\d"]]],0,0,0,0,0,0,[0,0,["(?:00|[1-9]\\d)\\d{6}"]]],808:["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],870:["870",0,"7\\d{11}|[35-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],878:["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],881:["881",0,"[0-36-9]\\d{8}",[9],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-36-9]"]]],0,0,0,0,0,0,[0,["[0-36-9]\\d{8}"]]],882:["882",0,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["49"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|51"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",[7,8,9,10,12]],0,0,0,0,0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],883:["883",0,"(?:[1-4]\\d|51)\\d{6,10}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[013-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],888:["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],979:["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}};var J={},PP={get exports(){return J},set exports(e){J=e}},OP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_P=OP,kP=_P;function Y$(){}function V$(){}V$.resetWarningCache=Y$;var NP=function(){function e(r,i,o,a,l,u){if(u!==kP){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:V$,resetWarningCache:Y$};return n.PropTypes=n,n};PP.exports=NP();var s1={},EP={get exports(){return s1},set exports(e){s1=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var l=n.apply(null,o);l&&r.push(l)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var u in o)t.call(o,u)&&o[u]&&r.push(u)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(EP);const Qd=s1;function IP(e,t,n){switch(n){case"Backspace":t>0&&(e=e.slice(0,t-1)+e.slice(t),t--);break;case"Delete":e=e.slice(0,t)+e.slice(t+1);break}return{value:e,caret:t}}function TP(e,t,n){for(var r="",i=0,o=0;o<e.length;){var a=n(e[o],r);a!==void 0&&(r+=a,t!==void 0&&(t===o?i=r.length-1:t>o&&(i=r.length))),o++}t===void 0&&(i=r.length);var l={value:r,caret:i};return l}function AP(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=RP(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RP(e,t){if(e){if(typeof e=="string")return lv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lv(e,t)}}function lv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l1(e,t){for(var n=0,r=AP(t.split("")),i;!(i=r()).done;){var o=i.value;o===e&&n++}return n}function FP(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"x",r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:" ",i=e.length,o=l1("(",e),a=l1(")",e),l=o-a;l>0&&i<t.length;)e+=t[i].replace(n,r),t[i]===")"&&l--,i++;return e}function DP(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=MP(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MP(e,t){if(e){if(typeof e=="string")return uv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return uv(e,t)}}function uv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jP(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"x",n=arguments.length>2?arguments[2]:void 0;if(!e)return function(i){return{text:i}};var r=l1(t,e);return function(i){if(!i)return{text:"",template:e};for(var o=0,a="",l=DP(e.split("")),u;!(u=l()).done;){var d=u.value;if(d!==t){a+=d;continue}if(a+=i[o],o++,o===i.length&&i.length<r)break}return n&&(a=FP(a,e)),{text:a,template:e}}}function LP(e,t,n){typeof n=="string"&&(n=jP(n));var r=n(e)||{},i=r.text,o=r.template;if(i===void 0&&(i=e),o)if(t===void 0)t=i.length;else{for(var a=0,l=!1,u=-1;a<i.length&&a<o.length;){if(i[a]!==o[a]){if(t===0){l=!0,t=a;break}u=a,t--}a++}l||(t=u+1)}return{text:i,caret:t}}function zP(e){return e.hasAttribute("readonly")}function UP(e){if(e.selectionStart!==e.selectionEnd)return{start:e.selectionStart,end:e.selectionEnd}}var dv={Backspace:8,Delete:46};function BP(e){switch(e.keyCode){case dv.Backspace:return"Backspace";case dv.Delete:return"Delete"}}function HP(e){return e.selectionStart}function q$(e,t){t!==void 0&&(WP()?setTimeout(function(){return e.setSelectionRange(t,t)},0):e.setSelectionRange(t,t))}function WP(){if(typeof navigator<"u")return YP.test(navigator.userAgent)}var YP=/Android/i;function VP(e,t,n,r,i){u1(t,n,r,void 0,i)}function qP(e,t,n,r,i){if(!zP(t)){var o=BP(e);switch(o){case"Delete":case"Backspace":e.preventDefault();var a=UP(t);return a?(GP(t,a),u1(t,n,r,void 0,i)):u1(t,n,r,o,i)}}}function GP(e,t){var n=e.value;n=n.slice(0,t.start)+n.slice(t.end),e.value=n,q$(e,t.start)}function u1(e,t,n,r,i){var o=TP(e.value,HP(e),t),a=o.value,l=o.caret;if(r){var u=IP(a,l,r);a=u.value,l=u.caret}var d=LP(a,l,n),f=d.text;l=d.caret,e.value=f,q$(e,l),i(a)}var QP=["value","parse","format","inputComponent","onChange","onKeyDown"];function d1(){return d1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d1.apply(this,arguments)}function KP(e,t){if(e==null)return{};var n=ZP(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ZP(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function hl(e,t){var n=e.value,r=e.parse,i=e.format,o=e.inputComponent,a=e.onChange,l=e.onKeyDown,u=KP(e,QP),d=C.useRef(),f=C.useCallback(function(x){d.current=x,t&&(typeof t=="function"?t(x):t.current=x)},[t]),h=C.useCallback(function(x){return VP(x,d.current,r,i,a)},[d,r,i,a]),m=C.useCallback(function(x){return l&&l(x),qP(x,d.current,r,i,a)},[d,r,i,a,l]);return ne.createElement(o,d1({},u,{ref:f,value:i(XP(n)?"":n).text,onKeyDown:m,onChange:h}))}hl=ne.forwardRef(hl);hl.propTypes={parse:J.func.isRequired,format:J.func.isRequired,inputComponent:J.elementType.isRequired,type:J.string.isRequired,value:J.string,onChange:J.func.isRequired,onKeyDown:J.func,onCut:J.func,onPaste:J.func};hl.defaultProps={inputComponent:"input",type:"text"};const JP=hl;function XP(e){return e==null}function c1(e){return c1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c1(e)}function cv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function eO(e,t,n){return t&&cv(e.prototype,t),n&&cv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function tO(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nO(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pl(e,t)}function rO(e){var t=Q$();return function(){var r=gl(e),i;if(t){var o=gl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return iO(this,i)}}function iO(e,t){if(t&&(c1(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return G$(e)}function G$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f1(e){var t=typeof Map=="function"?new Map:void 0;return f1=function(r){if(r===null||!oO(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return td(r,arguments,gl(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),pl(i,r)},f1(e)}function td(e,t,n){return Q$()?td=Reflect.construct:td=function(i,o,a){var l=[null];l.push.apply(l,o);var u=Function.bind.apply(i,l),d=new u;return a&&pl(d,a.prototype),d},td.apply(null,arguments)}function Q$(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function oO(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function pl(e,t){return pl=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},pl(e,t)}function gl(e){return gl=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},gl(e)}var pr=function(e){nO(n,e);var t=rO(n);function n(r){var i;return tO(this,n),i=t.call(this,r),Object.setPrototypeOf(G$(i),n.prototype),i.name=i.constructor.name,i}return eO(n)}(f1(Error)),fm=2,aO=17,sO=3,Rt="0-9０-９٠-٩۰-۹",lO="-‐-―−ー－",uO="／/",dO="．.",cO="  ­​⁠　",fO="()（）［］\\[\\]",hO="~⁓∼～",Dn="".concat(lO).concat(uO).concat(dO).concat(cO).concat(fO).concat(hO),tf="+＋";function fv(e,t){e=e.split("-"),t=t.split("-");for(var n=e[0].split("."),r=t[0].split("."),i=0;i<3;i++){var o=Number(n[i]),a=Number(r[i]);if(o>a)return 1;if(a>o)return-1;if(!isNaN(o)&&isNaN(a))return 1;if(isNaN(o)&&!isNaN(a))return-1}return e[1]&&t[1]?e[1]>t[1]?1:e[1]<t[1]?-1:0:!e[1]&&t[1]?1:e[1]&&!t[1]?-1:0}function Kd(e){return Kd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kd(e)}function nf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rf(e,t,n){return t&&hv(e.prototype,t),n&&hv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var pO="1.2.0",gO="1.7.35",pv=" ext. ",mO=/^\d+$/,gt=function(){function e(t){nf(this,e),bO(t),this.metadata=t,Z$.call(this,t)}return rf(e,[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter(function(n){return n!=="001"})}},{key:"getCountryMetadata",value:function(n){return this.metadata.countries[n]}},{key:"nonGeographic",value:function(){if(!(this.v1||this.v2||this.v3))return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(n){return this.getCountryMetadata(n)!==void 0}},{key:"hasCallingCode",value:function(n){if(this.getCountryCodesForCallingCode(n))return!0;if(this.nonGeographic()){if(this.nonGeographic()[n])return!0}else{var r=this.countryCallingCodes()[n];if(r&&r.length===1&&r[0]==="001")return!0}}},{key:"isNonGeographicCallingCode",value:function(n){return this.nonGeographic()?!!this.nonGeographic()[n]:!this.getCountryCodesForCallingCode(n)}},{key:"country",value:function(n){return this.selectNumberingPlan(n)}},{key:"selectNumberingPlan",value:function(n,r){if(n&&mO.test(n)&&(r=n,n=null),n&&n!=="001"){if(!this.hasCountry(n))throw new Error("Unknown country: ".concat(n));this.numberingPlan=new gv(this.getCountryMetadata(n),this)}else if(r){if(!this.hasCallingCode(r))throw new Error("Unknown calling code: ".concat(r));this.numberingPlan=new gv(this.getNumberingPlanMetadata(r),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(n){var r=this.countryCallingCodes()[n];if(r)return r.length===1&&r[0].length===3?void 0:r}},{key:"getCountryCodeForCallingCode",value:function(n){var r=this.getCountryCodesForCallingCode(n);if(r)return r[0]}},{key:"getNumberingPlanMetadata",value:function(n){var r=this.getCountryCodeForCallingCode(n);if(r)return this.getCountryMetadata(r);if(this.nonGeographic()){var i=this.nonGeographic()[n];if(i)return i}else{var o=this.countryCallingCodes()[n];if(o&&o.length===1&&o[0]==="001")return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(n){return this.numberingPlan.type(n)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(n){return this.selectNumberingPlan(n)}},{key:"hasSelectedNumberingPlan",value:function(){return this.numberingPlan!==void 0}}]),e}(),gv=function(){function e(t,n){nf(this,e),this.globalMetadataObject=n,this.metadata=t,Z$.call(this,n.metadata)}return rf(e,[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"IDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(n){return n[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var n=this,r=this._getFormats(this.metadata)||this._getFormats(this.getDefaultCountryMetadataForRegion())||[];return r.map(function(i){return new yO(i,n)})}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(n){return n[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return this.types()&&this.types().length===0?!1:!!this.types()}},{key:"type",value:function(n){if(this.hasTypes()&&mv(this.types(),n))return new xO(mv(this.types(),n),this)}},{key:"ext",value:function(){return this.v1||this.v2?pv:this.metadata[13]||pv}}]),e}(),yO=function(){function e(t,n){nf(this,e),this._format=t,this.metadata=n}return rf(e,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!!(this.nationalPrefixFormattingRule()&&!vO.test(this.nationalPrefixFormattingRule()))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}]),e}(),vO=/^\(?\$1\)?$/,xO=function(){function e(t,n){nf(this,e),this.type=t,this.metadata=n}return rf(e,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}]),e}();function mv(e,t){switch(t){case"FIXED_LINE":return e[0];case"MOBILE":return e[1];case"TOLL_FREE":return e[2];case"PREMIUM_RATE":return e[3];case"PERSONAL_NUMBER":return e[4];case"VOICEMAIL":return e[5];case"UAN":return e[6];case"PAGER":return e[7];case"VOIP":return e[8];case"SHARED_COST":return e[9]}}function bO(e){if(!e)throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!$h(e)||!$h(e.countries))throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat($h(e)?"an object of shape: { "+Object.keys(e).join(", ")+" }":"a "+$O(e)+": "+e,"."))}var $h=function(t){return Kd(t)==="object"},$O=function(t){return Kd(t)};function Ci(e,t){if(t=new gt(t),t.hasCountry(e))return t.country(e).countryCallingCode();throw new Error("Unknown country: ".concat(e))}function K$(e,t){return t.countries[e]!==void 0}function Z$(e){var t=e.version;typeof t=="number"?(this.v1=t===1,this.v2=t===2,this.v3=t===3,this.v4=t===4):t?fv(t,pO)===-1?this.v2=!0:fv(t,gO)===-1?this.v3=!0:this.v4=!0:this.v1=!0}var wO=";ext=",xo=function(t){return"([".concat(Rt,"]{1,").concat(t,"})")};function J$(e){var t="20",n="15",r="9",i="6",o="[  \\t,]*",a="[:\\.．]?[  \\t,-]*",l="#?",u="(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)",d="(?:[xｘ#＃~～]|int|ｉｎｔ)",f="[- ]+",h="[  \\t]*",m="(?:,{2}|;)",x=wO+xo(t),v=o+u+a+xo(t)+l,w=o+d+a+xo(r)+l,b=f+xo(i)+"#",p=h+m+a+xo(n)+l,g=h+"(?:,)+"+a+xo(r)+l;return x+"|"+v+"|"+w+"|"+b+"|"+p+"|"+g}var SO="["+Rt+"]{"+fm+"}",CO="["+tf+"]{0,1}(?:["+Dn+"]*["+Rt+"]){3,}["+Dn+Rt+"]*",PO=new RegExp("^["+tf+"]{0,1}(?:["+Dn+"]*["+Rt+"]){1,2}$","i"),OO=CO+"(?:"+J$()+")?",_O=new RegExp("^"+SO+"$|^"+OO+"$","i");function kO(e){return e.length>=fm&&_O.test(e)}function NO(e){return PO.test(e)}var yv=new RegExp("(?:"+J$()+")$","i");function EO(e){var t=e.search(yv);if(t<0)return{};for(var n=e.slice(0,t),r=e.match(yv),i=1;i<r.length;){if(r[i])return{number:n,ext:r[i]};i++}}function IO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=TO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TO(e,t){if(e){if(typeof e=="string")return vv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vv(e,t)}}function vv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var AO={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"};function X$(e){return AO[e]}function Zd(e){for(var t="",n=IO(e.split("")),r;!(r=n()).done;){var i=r.value,o=X$(i);o&&(t+=o)}return t}function RO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=FO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FO(e,t){if(e){if(typeof e=="string")return xv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xv(e,t)}}function xv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h1(e){for(var t="",n=RO(e.split("")),r;!(r=n()).done;){var i=r.value;t+=ew(i,t)||""}return t}function ew(e,t){return e==="+"?t?void 0:"+":X$(e)}function DO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=MO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MO(e,t){if(e){if(typeof e=="string")return bv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bv(e,t)}}function bv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jO(e,t){for(var n=e.slice(),r=DO(t),i;!(i=r()).done;){var o=i.value;e.indexOf(o)<0&&n.push(o)}return n.sort(function(a,l){return a-l})}function of(e,t){return tw(e,void 0,t)}function tw(e,t,n){var r=n.type(t),i=r&&r.possibleLengths()||n.possibleLengths();if(!i)return"IS_POSSIBLE";if(t==="FIXED_LINE_OR_MOBILE"){if(!n.type("FIXED_LINE"))return tw(e,"MOBILE",n);var o=n.type("MOBILE");o&&(i=jO(i,o.possibleLengths()))}else if(t&&!r)return"INVALID_LENGTH";var a=e.length,l=i[0];return l===a?"IS_POSSIBLE":l>a?"TOO_SHORT":i[i.length-1]<a?"TOO_LONG":i.indexOf(a,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"}function LO(e,t,n){if(t===void 0&&(t={}),n=new gt(n),t.v2){if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}else{if(!e.phone)return!1;if(e.country){if(!n.hasCountry(e.country))throw new Error("Unknown country: ".concat(e.country));n.country(e.country)}else{if(!e.countryCallingCode)throw new Error("Invalid phone number object passed");n.selectNumberingPlan(e.countryCallingCode)}}if(n.possibleLengths())return nw(e.phone||e.nationalNumber,n);if(e.countryCallingCode&&n.isNonGeographicCallingCode(e.countryCallingCode))return!0;throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')}function nw(e,t){switch(of(e,t)){case"IS_POSSIBLE":return!0;default:return!1}}function _r(e,t){return e=e||"",new RegExp("^(?:"+t+")$").test(e)}function zO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=UO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UO(e,t){if(e){if(typeof e=="string")return $v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $v(e,t)}}function $v(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var BO=["MOBILE","PREMIUM_RATE","TOLL_FREE","SHARED_COST","VOIP","PERSONAL_NUMBER","PAGER","UAN","VOICEMAIL"];function hm(e,t,n){if(t=t||{},!!e.country){n=new gt(n),n.selectNumberingPlan(e.country,e.countryCallingCode);var r=t.v2?e.nationalNumber:e.phone;if(_r(r,n.nationalNumberPattern())){if(wh(r,"FIXED_LINE",n))return n.type("MOBILE")&&n.type("MOBILE").pattern()===""||!n.type("MOBILE")||wh(r,"MOBILE",n)?"FIXED_LINE_OR_MOBILE":"FIXED_LINE";for(var i=zO(BO),o;!(o=i()).done;){var a=o.value;if(wh(r,a,n))return a}}}}function wh(e,t,n){return t=n.type(t),!t||!t.pattern()||t.possibleLengths()&&t.possibleLengths().indexOf(e.length)<0?!1:_r(e,t.pattern())}function HO(e,t,n){if(t=t||{},n=new gt(n),n.selectNumberingPlan(e.country,e.countryCallingCode),n.hasTypes())return hm(e,t,n.metadata)!==void 0;var r=t.v2?e.nationalNumber:e.phone;return _r(r,n.nationalNumberPattern())}function WO(e,t,n){var r=new gt(n),i=r.getCountryCodesForCallingCode(e);return i?i.filter(function(o){return YO(t,o,n)}):[]}function YO(e,t,n){var r=new gt(n);return r.selectNumberingPlan(t),r.numberingPlan.possibleLengths().indexOf(e.length)>=0}function rw(e){return e.replace(new RegExp("[".concat(Dn,"]+"),"g")," ").trim()}var iw=/(\$\d)/;function ow(e,t,n){var r=n.useInternationalFormat,i=n.withNationalPrefix;n.carrierCode,n.metadata;var o=e.replace(new RegExp(t.pattern()),r?t.internationalFormat():i&&t.nationalPrefixFormattingRule()?t.format().replace(iw,t.nationalPrefixFormattingRule()):t.format());return r?rw(o):o}var VO=/^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;function qO(e,t,n){var r=new gt(n);if(r.selectNumberingPlan(e,t),r.defaultIDDPrefix())return r.defaultIDDPrefix();if(VO.test(r.IDDPrefix()))return r.IDDPrefix()}function GO(e){var t=e.number,n=e.ext;if(!t)return"";if(t[0]!=="+")throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');return"tel:".concat(t).concat(n?";ext="+n:"")}function QO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=KO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KO(e,t){if(e){if(typeof e=="string")return wv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wv(e,t)}}function wv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Sv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Cv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sv(Object(n),!0).forEach(function(r){ZO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZO(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Pv={formatExtension:function(t,n,r){return"".concat(t).concat(r.ext()).concat(n)}};function JO(e,t,n,r){if(n?n=Cv(Cv({},Pv),n):n=Pv,r=new gt(r),e.country&&e.country!=="001"){if(!r.hasCountry(e.country))throw new Error("Unknown country: ".concat(e.country));r.country(e.country)}else if(e.countryCallingCode)r.selectNumberingPlan(e.countryCallingCode);else return e.phone||"";var i=r.countryCallingCode(),o=n.v2?e.nationalNumber:e.phone,a;switch(t){case"NATIONAL":return o?(a=Jd(o,e.carrierCode,"NATIONAL",r,n),Sh(a,e.ext,r,n.formatExtension)):"";case"INTERNATIONAL":return o?(a=Jd(o,null,"INTERNATIONAL",r,n),a="+".concat(i," ").concat(a),Sh(a,e.ext,r,n.formatExtension)):"+".concat(i);case"E.164":return"+".concat(i).concat(o);case"RFC3966":return GO({number:"+".concat(i).concat(o),ext:e.ext});case"IDD":if(!n.fromCountry)return;var l=e_(o,e.carrierCode,i,n.fromCountry,r);return Sh(l,e.ext,r,n.formatExtension);default:throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t,'"'))}}function Jd(e,t,n,r,i){var o=XO(r.formats(),e);return o?ow(e,o,{useInternationalFormat:n==="INTERNATIONAL",withNationalPrefix:!(o.nationalPrefixIsOptionalWhenFormattingInNationalFormat()&&i&&i.nationalPrefix===!1),carrierCode:t,metadata:r}):e}function XO(e,t){for(var n=QO(e),r;!(r=n()).done;){var i=r.value;if(i.leadingDigitsPatterns().length>0){var o=i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length-1];if(t.search(o)!==0)continue}if(_r(t,i.pattern()))return i}}function Sh(e,t,n,r){return t?r(e,t,n):e}function e_(e,t,n,r,i){var o=Ci(r,i.metadata);if(o===n){var a=Jd(e,t,"NATIONAL",i);return n==="1"?n+" "+a:a}var l=qO(r,void 0,i.metadata);if(l)return"".concat(l," ").concat(n," ").concat(Jd(e,null,"INTERNATIONAL",i))}function Ov(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ov(Object(n),!0).forEach(function(r){t_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ov(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function t_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r_(e,t,n){return t&&kv(e.prototype,t),n&&kv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var aw=function(){function e(t,n,r){if(n_(this,e),!t)throw new TypeError("`country` or `countryCallingCode` not passed");if(!n)throw new TypeError("`nationalNumber` not passed");if(!r)throw new TypeError("`metadata` not passed");var i=o_(t,r),o=i.country,a=i.countryCallingCode;this.country=o,this.countryCallingCode=a,this.nationalNumber=n,this.number="+"+this.countryCallingCode+this.nationalNumber,this.metadata=r}return r_(e,[{key:"setExt",value:function(n){this.ext=n}},{key:"getPossibleCountries",value:function(){return this.country?[this.country]:WO(this.countryCallingCode,this.nationalNumber,this.metadata)}},{key:"isPossible",value:function(){return LO(this,{v2:!0},this.metadata)}},{key:"isValid",value:function(){return HO(this,{v2:!0},this.metadata)}},{key:"isNonGeographic",value:function(){var n=new gt(this.metadata);return n.isNonGeographicCallingCode(this.countryCallingCode)}},{key:"isEqual",value:function(n){return this.number===n.number&&this.ext===n.ext}},{key:"getType",value:function(){return hm(this,{v2:!0},this.metadata)}},{key:"format",value:function(n,r){return JO(this,n,r?_v(_v({},r),{},{v2:!0}):{v2:!0},this.metadata)}},{key:"formatNational",value:function(n){return this.format("NATIONAL",n)}},{key:"formatInternational",value:function(n){return this.format("INTERNATIONAL",n)}},{key:"getURI",value:function(n){return this.format("RFC3966",n)}}]),e}(),i_=function(t){return/^[A-Z]{2}$/.test(t)};function o_(e,t){var n,r,i=new gt(t);return i_(e)?(n=e,i.selectNumberingPlan(n),r=i.countryCallingCode()):r=e,{country:n,countryCallingCode:r}}var a_=new RegExp("(["+Rt+"])");function sw(e,t,n,r){if(t){var i=new gt(r);i.selectNumberingPlan(t,n);var o=new RegExp(i.IDDPrefix());if(e.search(o)===0){e=e.slice(e.match(o)[0].length);var a=e.match(a_);if(!(a&&a[1]!=null&&a[1].length>0&&a[1]==="0"))return e}}}function p1(e,t){if(e&&t.numberingPlan.nationalPrefixForParsing()){var n=new RegExp("^(?:"+t.numberingPlan.nationalPrefixForParsing()+")"),r=n.exec(e);if(r){var i,o,a=r.length-1,l=a>0&&r[a];if(t.nationalPrefixTransformRule()&&l)i=e.replace(n,t.nationalPrefixTransformRule()),a>1&&(o=r[1]);else{var u=r[0];i=e.slice(u.length),l&&(o=r[1])}var d;if(l){var f=e.indexOf(r[1]),h=e.slice(0,f);h===t.numberingPlan.nationalPrefix()&&(d=t.numberingPlan.nationalPrefix())}else d=r[0];return{nationalNumber:i,nationalPrefix:d,carrierCode:o}}}return{nationalNumber:e}}function g1(e,t){var n=p1(e,t),r=n.carrierCode,i=n.nationalNumber;if(i!==e){if(!s_(e,i,t))return{nationalNumber:e};if(t.possibleLengths()&&!l_(i,t))return{nationalNumber:e}}return{nationalNumber:i,carrierCode:r}}function s_(e,t,n){return!(_r(e,n.nationalNumberPattern())&&!_r(t,n.nationalNumberPattern()))}function l_(e,t){switch(of(e,t)){case"TOO_SHORT":case"INVALID_LENGTH":return!1;default:return!0}}function lw(e,t,n,r){var i=t?Ci(t,r):n;if(e.indexOf(i)===0){r=new gt(r),r.selectNumberingPlan(t,n);var o=e.slice(i.length),a=g1(o,r),l=a.nationalNumber,u=g1(e,r),d=u.nationalNumber;if(!_r(d,r.nationalNumberPattern())&&_r(l,r.nationalNumberPattern())||of(d,r)==="TOO_LONG")return{countryCallingCode:i,number:o}}return{number:e}}function uw(e,t,n,r){if(!e)return{};var i;if(e[0]!=="+"){var o=sw(e,t,n,r);if(o&&o!==e)i=!0,e="+"+o;else{if(t||n){var a=lw(e,t,n,r),l=a.countryCallingCode,u=a.number;if(l)return{countryCallingCodeSource:"FROM_NUMBER_WITHOUT_PLUS_SIGN",countryCallingCode:l,number:u}}return{number:e}}}if(e[1]==="0")return{};r=new gt(r);for(var d=2;d-1<=sO&&d<=e.length;){var f=e.slice(1,d);if(r.hasCallingCode(f))return r.selectNumberingPlan(f),{countryCallingCodeSource:i?"FROM_NUMBER_WITH_IDD":"FROM_NUMBER_WITH_PLUS_SIGN",countryCallingCode:f,number:e.slice(d)};d++}return{}}function u_(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=d_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d_(e,t){if(e){if(typeof e=="string")return Nv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nv(e,t)}}function Nv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c_(e,t,n){n=new gt(n);for(var r=u_(e),i;!(i=r()).done;){var o=i.value;if(n.country(o),n.leadingDigits()){if(t&&t.search(n.leadingDigits())===0)return o}else if(hm({phone:t,country:o},void 0,n.metadata))return o}}var f_=!1;function dw(e,t,n){if(f_&&n.isNonGeographicCallingCode(e))return"001";var r=n.getCountryCodesForCallingCode(e);if(r)return r.length===1?r[0]:c_(r,t,n.metadata)}var cw="+",h_="[\\-\\.\\(\\)]?",Ev="(["+Rt+"]|"+h_+")",p_="^\\"+cw+Ev+"*["+Rt+"]"+Ev+"*$",g_=new RegExp(p_,"g"),m1=Rt,m_="["+m1+"]+((\\-)*["+m1+"])*",y_="a-zA-Z",v_="["+y_+"]+((\\-)*["+m1+"])*",x_="^("+m_+"\\.)*"+v_+"\\.?$",b_=new RegExp(x_,"g"),Iv="tel:",y1=";phone-context=",$_=";isub=";function w_(e){var t=e.indexOf(y1);if(t<0)return null;var n=t+y1.length;if(n>=e.length)return"";var r=e.indexOf(";",n);return r>=0?e.substring(n,r):e.substring(n)}function S_(e){return e===null?!0:e.length===0?!1:g_.test(e)||b_.test(e)}function C_(e,t){var n=t.extractFormattedPhoneNumber,r=w_(e);if(!S_(r))throw new pr("NOT_A_NUMBER");var i;if(r===null)i=n(e)||"";else{i="",r.charAt(0)===cw&&(i+=r);var o=e.indexOf(Iv),a;o>=0?a=o+Iv.length:a=0;var l=e.indexOf(y1);i+=e.substring(a,l)}var u=i.indexOf($_);if(u>0&&(i=i.substring(0,u)),i!=="")return i}var P_=250,O_=new RegExp("["+tf+Rt+"]"),__=new RegExp("[^"+Rt+"#]+$");function k_(e,t,n){if(t=t||{},n=new gt(n),t.defaultCountry&&!n.hasCountry(t.defaultCountry))throw t.v2?new pr("INVALID_COUNTRY"):new Error("Unknown country: ".concat(t.defaultCountry));var r=E_(e,t.v2,t.extract),i=r.number,o=r.ext,a=r.error;if(!i){if(t.v2)throw a==="TOO_SHORT"?new pr("TOO_SHORT"):new pr("NOT_A_NUMBER");return{}}var l=T_(i,t.defaultCountry,t.defaultCallingCode,n),u=l.country,d=l.nationalNumber,f=l.countryCallingCode,h=l.countryCallingCodeSource,m=l.carrierCode;if(!n.hasSelectedNumberingPlan()){if(t.v2)throw new pr("INVALID_COUNTRY");return{}}if(!d||d.length<fm){if(t.v2)throw new pr("TOO_SHORT");return{}}if(d.length>aO){if(t.v2)throw new pr("TOO_LONG");return{}}if(t.v2){var x=new aw(f,d,n.metadata);return u&&(x.country=u),m&&(x.carrierCode=m),o&&(x.ext=o),x.__countryCallingCodeSource=h,x}var v=(t.extended?n.hasSelectedNumberingPlan():u)?_r(d,n.nationalNumberPattern()):!1;return t.extended?{country:u,countryCallingCode:f,carrierCode:m,valid:v,possible:v?!0:!!(t.extended===!0&&n.possibleLengths()&&nw(d,n)),phone:d,ext:o}:v?I_(u,d,o):{}}function N_(e,t,n){if(e){if(e.length>P_){if(n)throw new pr("TOO_LONG");return}if(t===!1)return e;var r=e.search(O_);if(!(r<0))return e.slice(r).replace(__,"")}}function E_(e,t,n){var r=C_(e,{extractFormattedPhoneNumber:function(a){return N_(a,n,t)}});if(!r)return{};if(!kO(r))return NO(r)?{error:"TOO_SHORT"}:{};var i=EO(r);return i.ext?i:{number:r}}function I_(e,t,n){var r={country:e,phone:t};return n&&(r.ext=n),r}function T_(e,t,n,r){var i=uw(h1(e),t,n,r.metadata),o=i.countryCallingCodeSource,a=i.countryCallingCode,l=i.number,u;if(a)r.selectNumberingPlan(a);else if(l&&(t||n))r.selectNumberingPlan(t,n),t&&(u=t),a=n||Ci(t,r.metadata);else return{};if(!l)return{countryCallingCodeSource:o,countryCallingCode:a};var d=g1(h1(l),r),f=d.nationalNumber,h=d.carrierCode,m=dw(a,f,r);return m&&(u=m,m==="001"||r.country(u)),{country:u,countryCallingCode:a,countryCallingCodeSource:o,nationalNumber:f,carrierCode:h}}function Tv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Av(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tv(Object(n),!0).forEach(function(r){A_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function A_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R_(e,t,n){return k_(e,Av(Av({},t),{},{v2:!0}),n)}function v1(e){return v1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v1(e)}function Rv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function F_(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rv(Object(n),!0).forEach(function(r){D_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function D_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M_(e,t){return U_(e)||z_(e,t)||L_(e,t)||j_()}function j_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L_(e,t){if(e){if(typeof e=="string")return Fv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fv(e,t)}}function Fv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function U_(e){if(Array.isArray(e))return e}function B_(e){var t=Array.prototype.slice.call(e),n=M_(t,4),r=n[0],i=n[1],o=n[2],a=n[3],l,u,d;if(typeof r=="string")l=r;else throw new TypeError("A text for parsing must be a string.");if(!i||typeof i=="string")a?(u=o,d=a):(u=void 0,d=o),i&&(u=F_({defaultCountry:i},u));else if(H_(i))o?(u=i,d=o):d=i;else throw new Error("Invalid second argument: ".concat(i));return{text:l,options:u,metadata:d}}var H_=function(t){return v1(t)==="object"};function Dv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dv(Object(n),!0).forEach(function(r){W_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function W_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y_(e,t,n){t&&t.defaultCountry&&!K$(t.defaultCountry,n)&&(t=Mv(Mv({},t),{},{defaultCountry:void 0}));try{return R_(e,t,n)}catch(r){if(!(r instanceof pr))throw r}}function V_(){var e=B_(arguments),t=e.text,n=e.options,r=e.metadata;return Y_(t,n,r)}function q_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G_(e,t,n){return t&&jv(e.prototype,t),n&&jv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Q_=function(){function e(t){var n=t.onCountryChange,r=t.onCallingCodeChange;q_(this,e),this.onCountryChange=n,this.onCallingCodeChange=r}return G_(e,[{key:"reset",value:function(n){var r=n.country,i=n.callingCode;this.international=!1,this.IDDPrefix=void 0,this.missingPlus=void 0,this.callingCode=void 0,this.digits="",this.resetNationalSignificantNumber(),this.initCountryAndCallingCode(r,i)}},{key:"resetNationalSignificantNumber",value:function(){this.nationalSignificantNumber=this.getNationalDigits(),this.nationalSignificantNumberMatchesInput=!0,this.nationalPrefix=void 0,this.carrierCode=void 0,this.complexPrefixBeforeNationalSignificantNumber=void 0}},{key:"update",value:function(n){for(var r=0,i=Object.keys(n);r<i.length;r++){var o=i[r];this[o]=n[o]}}},{key:"initCountryAndCallingCode",value:function(n,r){this.setCountry(n),this.setCallingCode(r)}},{key:"setCountry",value:function(n){this.country=n,this.onCountryChange(n)}},{key:"setCallingCode",value:function(n){this.callingCode=n,this.onCallingCodeChange(n,this.country)}},{key:"startInternationalNumber",value:function(n,r){this.international=!0,this.initCountryAndCallingCode(n,r)}},{key:"appendDigits",value:function(n){this.digits+=n}},{key:"appendNationalSignificantNumberDigits",value:function(n){this.nationalSignificantNumber+=n}},{key:"getNationalDigits",value:function(){return this.international?this.digits.slice((this.IDDPrefix?this.IDDPrefix.length:0)+(this.callingCode?this.callingCode.length:0)):this.digits}},{key:"getDigitsWithoutInternationalPrefix",value:function(){return this.international&&this.IDDPrefix?this.digits.slice(this.IDDPrefix.length):this.digits}}]),e}();function K_(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Z_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z_(e,t){if(e){if(typeof e=="string")return Lv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lv(e,t)}}function Lv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _n="x",Ch=new RegExp(_n);function nd(e,t){if(t<1)return"";for(var n="";t>1;)t&1&&(n+=e),t>>=1,e+=e;return n+e}function zv(e,t){return e[t]===")"&&t++,J_(e.slice(0,t))}function J_(e){for(var t=[],n=0;n<e.length;)e[n]==="("?t.push(n):e[n]===")"&&t.pop(),n++;var r=0,i="";t.push(e.length);for(var o=0,a=t;o<a.length;o++){var l=a[o];i+=e.slice(r,l),r=l+1}return i}function X_(e,t,n){for(var r=K_(n.split("")),i;!(i=r()).done;){var o=i.value;if(e.slice(t+1).search(Ch)<0)return;t=e.search(Ch),e=e.replace(Ch,o)}return[e,t]}function ek(e,t,n){var r=n.metadata,i=n.shouldTryNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix,a=new RegExp("^(?:".concat(t.pattern(),")$"));if(a.test(e.nationalSignificantNumber))return nk(e,t,{metadata:r,shouldTryNationalPrefixFormattingRule:i,getSeparatorAfterNationalPrefix:o})}function tk(e,t){return of(e,t)==="IS_POSSIBLE"}function nk(e,t,n){var r=n.metadata,i=n.shouldTryNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix;if(e.nationalSignificantNumber,e.international,e.nationalPrefix,e.carrierCode,i(t)){var a=Uv(e,t,{useNationalPrefixFormattingRule:!0,getSeparatorAfterNationalPrefix:o,metadata:r});if(a)return a}return Uv(e,t,{useNationalPrefixFormattingRule:!1,getSeparatorAfterNationalPrefix:o,metadata:r})}function Uv(e,t,n){var r=n.metadata,i=n.useNationalPrefixFormattingRule,o=n.getSeparatorAfterNationalPrefix,a=ow(e.nationalSignificantNumber,t,{carrierCode:e.carrierCode,useInternationalFormat:e.international,withNationalPrefix:i,metadata:r});if(i||(e.nationalPrefix?a=e.nationalPrefix+o(t)+a:e.complexPrefixBeforeNationalSignificantNumber&&(a=e.complexPrefixBeforeNationalSignificantNumber+" "+a)),rk(a,e))return a}function rk(e,t){return Zd(e)===t.getNationalDigits()}function ik(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ok(e,t,n){return t&&Bv(e.prototype,t),n&&Bv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var ak=function(){function e(){ik(this,e)}return ok(e,[{key:"parse",value:function(n){if(this.context=[{or:!0,instructions:[]}],this.parsePattern(n),this.context.length!==1)throw new Error("Non-finalized contexts left when pattern parse ended");var r=this.context[0],i=r.branches,o=r.instructions;if(i)return{op:"|",args:i.concat([Ph(o)])};if(o.length===0)throw new Error("Pattern is required");return o.length===1?o[0]:o}},{key:"startContext",value:function(n){this.context.push(n)}},{key:"endContext",value:function(){this.context.pop()}},{key:"getContext",value:function(){return this.context[this.context.length-1]}},{key:"parsePattern",value:function(n){if(!n)throw new Error("Pattern is required");var r=n.match(uk);if(!r){if(lk.test(n))throw new Error("Illegal characters found in a pattern: ".concat(n));this.getContext().instructions=this.getContext().instructions.concat(n.split(""));return}var i=r[1],o=n.slice(0,r.index),a=n.slice(r.index+i.length);switch(i){case"(?:":o&&this.parsePattern(o),this.startContext({or:!0,instructions:[],branches:[]});break;case")":if(!this.getContext().or)throw new Error('")" operator must be preceded by "(?:" operator');if(o&&this.parsePattern(o),this.getContext().instructions.length===0)throw new Error('No instructions found after "|" operator in an "or" group');var l=this.getContext(),u=l.branches;u.push(Ph(this.getContext().instructions)),this.endContext(),this.getContext().instructions.push({op:"|",args:u});break;case"|":if(!this.getContext().or)throw new Error('"|" operator can only be used inside "or" groups');if(o&&this.parsePattern(o),!this.getContext().branches)if(this.context.length===1)this.getContext().branches=[];else throw new Error('"branches" not found in an "or" group context');this.getContext().branches.push(Ph(this.getContext().instructions)),this.getContext().instructions=[];break;case"[":o&&this.parsePattern(o),this.startContext({oneOfSet:!0});break;case"]":if(!this.getContext().oneOfSet)throw new Error('"]" operator must be preceded by "[" operator');this.endContext(),this.getContext().instructions.push({op:"[]",args:sk(o)});break;default:throw new Error("Unknown operator: ".concat(i))}a&&this.parsePattern(a)}}]),e}();function sk(e){for(var t=[],n=0;n<e.length;){if(e[n]==="-"){if(n===0||n===e.length-1)throw new Error("Couldn't parse a one-of set pattern: ".concat(e));for(var r=e[n-1].charCodeAt(0)+1,i=e[n+1].charCodeAt(0)-1,o=r;o<=i;)t.push(String.fromCharCode(o)),o++}else t.push(e[n]);n++}return t}var lk=/[\(\)\[\]\?\:\|]/,uk=new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");function Ph(e){return e.length===1?e[0]:e}function Hv(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=dk(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dk(e,t){if(e){if(typeof e=="string")return Wv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wv(e,t)}}function Wv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fk(e,t,n){return t&&Yv(e.prototype,t),n&&Yv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var hk=function(){function e(t){ck(this,e),this.matchTree=new ak().parse(t)}return fk(e,[{key:"match",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.allowOverflow;if(!n)throw new Error("String is required");var o=x1(n.split(""),this.matchTree,!0);if(o&&o.match&&delete o.matchedChars,!(o&&o.overflow&&!i))return o}}]),e}();function x1(e,t,n){if(typeof t=="string"){var r=e.join("");return t.indexOf(r)===0?e.length===t.length?{match:!0,matchedChars:e}:{partialMatch:!0}:r.indexOf(t)===0?n&&e.length>t.length?{overflow:!0}:{match:!0,matchedChars:e.slice(0,t.length)}:void 0}if(Array.isArray(t)){for(var i=e.slice(),o=0;o<t.length;){var a=t[o],l=x1(i,a,n&&o===t.length-1);if(l){if(l.overflow)return l;if(l.match){if(i=i.slice(l.matchedChars.length),i.length===0)return o===t.length-1?{match:!0,matchedChars:e}:{partialMatch:!0}}else{if(l.partialMatch)return{partialMatch:!0};throw new Error(`Unsupported match result:
`.concat(JSON.stringify(l,null,2)))}}else return;o++}return n?{overflow:!0}:{match:!0,matchedChars:e.slice(0,e.length-i.length)}}switch(t.op){case"|":for(var u,d=Hv(t.args),f;!(f=d()).done;){var h=f.value,m=x1(e,h,n);if(m){if(m.overflow)return m;if(m.match)return{match:!0,matchedChars:m.matchedChars};if(m.partialMatch)u=!0;else throw new Error(`Unsupported match result:
`.concat(JSON.stringify(m,null,2)))}}return u?{partialMatch:!0}:void 0;case"[]":for(var x=Hv(t.args),v;!(v=x()).done;){var w=v.value;if(e[0]===w)return e.length===1?{match:!0,matchedChars:e}:n?{overflow:!0}:{match:!0,matchedChars:[w]}}return;default:throw new Error("Unsupported instruction tree: ".concat(t))}}function Vv(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=pk(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pk(e,t){if(e){if(typeof e=="string")return qv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qv(e,t)}}function qv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function mk(e,t,n){return t&&Gv(e.prototype,t),n&&Gv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var b1="9",yk=15,vk=nd(b1,yk),xk=/[- ]/,bk=function(){return/\[([^\[\]])*\]/g},$k=function(){return/\d(?=[^,}][^,}])/g},wk=new RegExp("["+Dn+"]*\\$1["+Dn+"]*(\\$\\d["+Dn+"]*)*$"),Qv=3,Sk=function(){function e(t){t.state;var n=t.metadata;gk(this,e),this.metadata=n,this.resetFormat()}return mk(e,[{key:"resetFormat",value:function(){this.chosenFormat=void 0,this.template=void 0,this.nationalNumberTemplate=void 0,this.populatedNationalNumberTemplate=void 0,this.populatedNationalNumberTemplatePosition=-1}},{key:"reset",value:function(n,r){this.resetFormat(),n?(this.isNANP=n.callingCode()==="1",this.matchingFormats=n.formats(),r.nationalSignificantNumber&&this.narrowDownMatchingFormats(r)):(this.isNANP=void 0,this.matchingFormats=[])}},{key:"format",value:function(n,r){var i=this;if(tk(r.nationalSignificantNumber,this.metadata))for(var o=Vv(this.matchingFormats),a;!(a=o()).done;){var l=a.value,u=ek(r,l,{metadata:this.metadata,shouldTryNationalPrefixFormattingRule:function(f){return i.shouldTryNationalPrefixFormattingRule(f,{international:r.international,nationalPrefix:r.nationalPrefix})},getSeparatorAfterNationalPrefix:function(f){return i.getSeparatorAfterNationalPrefix(f)}});if(u)return this.resetFormat(),this.chosenFormat=l,this.setNationalNumberTemplate(u.replace(/\d/g,_n),r),this.populatedNationalNumberTemplate=u,this.populatedNationalNumberTemplatePosition=this.template.lastIndexOf(_n),u}return this.formatNationalNumberWithNextDigits(n,r)}},{key:"formatNationalNumberWithNextDigits",value:function(n,r){var i=this.chosenFormat,o=this.chooseFormat(r);if(o)return o===i?this.formatNextNationalNumberDigits(n):this.formatNextNationalNumberDigits(r.getNationalDigits())}},{key:"narrowDownMatchingFormats",value:function(n){var r=this,i=n.nationalSignificantNumber,o=n.nationalPrefix,a=n.international,l=i,u=l.length-Qv;u<0&&(u=0),this.matchingFormats=this.matchingFormats.filter(function(d){return r.formatSuits(d,a,o)&&r.formatMatches(d,l,u)}),this.chosenFormat&&this.matchingFormats.indexOf(this.chosenFormat)===-1&&this.resetFormat()}},{key:"formatSuits",value:function(n,r,i){return!(i&&!n.usesNationalPrefix()&&!n.nationalPrefixIsOptionalWhenFormattingInNationalFormat()||!r&&!i&&n.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())}},{key:"formatMatches",value:function(n,r,i){var o=n.leadingDigitsPatterns().length;if(o===0)return!0;i=Math.min(i,o-1);var a=n.leadingDigitsPatterns()[i];if(r.length<Qv)try{return new hk(a).match(r,{allowOverflow:!0})!==void 0}catch(l){return console.error(l),!0}return new RegExp("^(".concat(a,")")).test(r)}},{key:"getFormatFormat",value:function(n,r){return r?n.internationalFormat():n.format()}},{key:"chooseFormat",value:function(n){for(var r=this,i=function(){var d=a.value;return r.chosenFormat===d?"break":wk.test(r.getFormatFormat(d,n.international))?r.createTemplateForFormat(d,n)?(r.chosenFormat=d,"break"):(r.matchingFormats=r.matchingFormats.filter(function(f){return f!==d}),"continue"):"continue"},o=Vv(this.matchingFormats.slice()),a;!(a=o()).done;){var l=i();if(l==="break")break}return this.chosenFormat||this.resetFormat(),this.chosenFormat}},{key:"createTemplateForFormat",value:function(n,r){if(!(n.pattern().indexOf("|")>=0)){var i=this.getTemplateForFormat(n,r);if(i)return this.setNationalNumberTemplate(i,r),!0}}},{key:"getSeparatorAfterNationalPrefix",value:function(n){return this.isNANP||n&&n.nationalPrefixFormattingRule()&&xk.test(n.nationalPrefixFormattingRule())?" ":""}},{key:"getInternationalPrefixBeforeCountryCallingCode",value:function(n,r){var i=n.IDDPrefix,o=n.missingPlus;return i?r&&r.spacing===!1?i:i+" ":o?"":"+"}},{key:"getTemplate",value:function(n){if(this.template){for(var r=-1,i=0,o=n.international?this.getInternationalPrefixBeforeCountryCallingCode(n,{spacing:!1}):"";i<o.length+n.getDigitsWithoutInternationalPrefix().length;)r=this.template.indexOf(_n,r+1),i++;return zv(this.template,r+1)}}},{key:"setNationalNumberTemplate",value:function(n,r){this.nationalNumberTemplate=n,this.populatedNationalNumberTemplate=n,this.populatedNationalNumberTemplatePosition=-1,r.international?this.template=this.getInternationalPrefixBeforeCountryCallingCode(r).replace(/[\d\+]/g,_n)+nd(_n,r.callingCode.length)+" "+n:this.template=n}},{key:"getTemplateForFormat",value:function(n,r){var i=r.nationalSignificantNumber,o=r.international,a=r.nationalPrefix,l=r.complexPrefixBeforeNationalSignificantNumber,u=n.pattern();u=u.replace(bk(),"\\d").replace($k(),"\\d");var d=vk.match(u)[0];if(!(i.length>d.length)){var f=new RegExp("^"+u+"$"),h=i.replace(/\d/g,b1);f.test(h)&&(d=h);var m=this.getFormatFormat(n,o),x;if(this.shouldTryNationalPrefixFormattingRule(n,{international:o,nationalPrefix:a})){var v=m.replace(iw,n.nationalPrefixFormattingRule());if(Zd(n.nationalPrefixFormattingRule())===(a||"")+Zd("$1")&&(m=v,x=!0,a))for(var w=a.length;w>0;)m=m.replace(/\d/,_n),w--}var b=d.replace(new RegExp(u),m).replace(new RegExp(b1,"g"),_n);return x||(l?b=nd(_n,l.length)+" "+b:a&&(b=nd(_n,a.length)+this.getSeparatorAfterNationalPrefix(n)+b)),o&&(b=rw(b)),b}}},{key:"formatNextNationalNumberDigits",value:function(n){var r=X_(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition,n);if(!r){this.resetFormat();return}return this.populatedNationalNumberTemplate=r[0],this.populatedNationalNumberTemplatePosition=r[1],zv(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition+1)}},{key:"shouldTryNationalPrefixFormattingRule",value:function(n,r){var i=r.international,o=r.nationalPrefix;if(n.nationalPrefixFormattingRule()){var a=n.usesNationalPrefix();if(a&&o||!a&&!i)return!0}}}]),e}();function fw(e,t){return _k(e)||Ok(e,t)||Pk(e,t)||Ck()}function Ck(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pk(e,t){if(e){if(typeof e=="string")return Kv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kv(e,t)}}function Kv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ok(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function _k(e){if(Array.isArray(e))return e}function kk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Nk(e,t,n){return t&&Zv(e.prototype,t),n&&Zv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Ek="["+Dn+Rt+"]+",Ik=new RegExp("^"+Ek+"$","i"),Tk="(?:["+tf+"]["+Dn+Rt+"]*|["+Dn+Rt+"]+)",Ak=new RegExp("[^"+Dn+Rt+"]+.*$"),Rk=/[^\d\[\]]/,Fk=function(){function e(t){var n=t.defaultCountry,r=t.defaultCallingCode,i=t.metadata,o=t.onNationalSignificantNumberChange;kk(this,e),this.defaultCountry=n,this.defaultCallingCode=r,this.metadata=i,this.onNationalSignificantNumberChange=o}return Nk(e,[{key:"input",value:function(n,r){var i=jk(n),o=fw(i,2),a=o[0],l=o[1],u=Zd(a),d;return l&&(r.digits||(r.startInternationalNumber(),u||(d=!0))),u&&this.inputDigits(u,r),{digits:u,justLeadingPlus:d}}},{key:"inputDigits",value:function(n,r){var i=r.digits,o=i.length<3&&i.length+n.length>=3;if(r.appendDigits(n),o&&this.extractIddPrefix(r),this.isWaitingForCountryCallingCode(r)){if(!this.extractCountryCallingCode(r))return}else r.appendNationalSignificantNumberDigits(n);r.international||this.hasExtractedNationalSignificantNumber||this.extractNationalSignificantNumber(r.getNationalDigits(),function(a){return r.update(a)})}},{key:"isWaitingForCountryCallingCode",value:function(n){var r=n.international,i=n.callingCode;return r&&!i}},{key:"extractCountryCallingCode",value:function(n){var r=uw("+"+n.getDigitsWithoutInternationalPrefix(),this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),i=r.countryCallingCode,o=r.number;if(i)return n.setCallingCode(i),n.update({nationalSignificantNumber:o}),!0}},{key:"reset",value:function(n){if(n){this.hasSelectedNumberingPlan=!0;var r=n._nationalPrefixForParsing();this.couldPossiblyExtractAnotherNationalSignificantNumber=r&&Rk.test(r)}else this.hasSelectedNumberingPlan=void 0,this.couldPossiblyExtractAnotherNationalSignificantNumber=void 0}},{key:"extractNationalSignificantNumber",value:function(n,r){if(this.hasSelectedNumberingPlan){var i=p1(n,this.metadata),o=i.nationalPrefix,a=i.nationalNumber,l=i.carrierCode;if(a!==n)return this.onExtractedNationalNumber(o,l,a,n,r),!0}}},{key:"extractAnotherNationalSignificantNumber",value:function(n,r,i){if(!this.hasExtractedNationalSignificantNumber)return this.extractNationalSignificantNumber(n,i);if(this.couldPossiblyExtractAnotherNationalSignificantNumber){var o=p1(n,this.metadata),a=o.nationalPrefix,l=o.nationalNumber,u=o.carrierCode;if(l!==r)return this.onExtractedNationalNumber(a,u,l,n,i),!0}}},{key:"onExtractedNationalNumber",value:function(n,r,i,o,a){var l,u,d=o.lastIndexOf(i);if(d>=0&&d===o.length-i.length){u=!0;var f=o.slice(0,d);f!==n&&(l=f)}a({nationalPrefix:n,carrierCode:r,nationalSignificantNumber:i,nationalSignificantNumberMatchesInput:u,complexPrefixBeforeNationalSignificantNumber:l}),this.hasExtractedNationalSignificantNumber=!0,this.onNationalSignificantNumberChange()}},{key:"reExtractNationalSignificantNumber",value:function(n){if(this.extractAnotherNationalSignificantNumber(n.getNationalDigits(),n.nationalSignificantNumber,function(r){return n.update(r)}))return!0;if(this.extractIddPrefix(n))return this.extractCallingCodeAndNationalSignificantNumber(n),!0;if(this.fixMissingPlus(n))return this.extractCallingCodeAndNationalSignificantNumber(n),!0}},{key:"extractIddPrefix",value:function(n){var r=n.international,i=n.IDDPrefix,o=n.digits;if(n.nationalSignificantNumber,!(r||i)){var a=sw(o,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata);if(a!==void 0&&a!==o)return n.update({IDDPrefix:o.slice(0,o.length-a.length)}),this.startInternationalNumber(n,{country:void 0,callingCode:void 0}),!0}}},{key:"fixMissingPlus",value:function(n){if(!n.international){var r=lw(n.digits,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),i=r.countryCallingCode;if(r.number,i)return n.update({missingPlus:!0}),this.startInternationalNumber(n,{country:n.country,callingCode:i}),!0}}},{key:"startInternationalNumber",value:function(n,r){var i=r.country,o=r.callingCode;n.startInternationalNumber(i,o),n.nationalSignificantNumber&&(n.resetNationalSignificantNumber(),this.onNationalSignificantNumberChange(),this.hasExtractedNationalSignificantNumber=void 0)}},{key:"extractCallingCodeAndNationalSignificantNumber",value:function(n){this.extractCountryCallingCode(n)&&this.extractNationalSignificantNumber(n.getNationalDigits(),function(r){return n.update(r)})}}]),e}();function Dk(e){var t=e.search(Tk);if(!(t<0)){e=e.slice(t);var n;return e[0]==="+"&&(n=!0,e=e.slice(1)),e=e.replace(Ak,""),n&&(e="+"+e),e}}function Mk(e){var t=Dk(e)||"";return t[0]==="+"?[t.slice(1),!0]:[t]}function jk(e){var t=Mk(e),n=fw(t,2),r=n[0],i=n[1];return Ik.test(r)||(r=""),[r,i]}function $1(e){return $1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$1(e)}function Lk(e,t){return Hk(e)||Bk(e,t)||Uk(e,t)||zk()}function zk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Uk(e,t){if(e){if(typeof e=="string")return Jv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jv(e,t)}}function Jv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Bk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function Hk(e){if(Array.isArray(e))return e}function Wk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Yk(e,t,n){return t&&Xv(e.prototype,t),n&&Xv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Qa=function(){function e(t,n){Wk(this,e),this.metadata=new gt(n);var r=this.getCountryAndCallingCode(t),i=Lk(r,2),o=i[0],a=i[1];this.defaultCountry=o,this.defaultCallingCode=a,this.reset()}return Yk(e,[{key:"getCountryAndCallingCode",value:function(n){var r,i;return n&&($1(n)==="object"?(r=n.defaultCountry,i=n.defaultCallingCode):r=n),r&&!this.metadata.hasCountry(r)&&(r=void 0),[r,i]}},{key:"input",value:function(n){var r=this.parser.input(n,this.state),i=r.digits,o=r.justLeadingPlus;if(o)this.formattedOutput="+";else if(i){this.determineTheCountryIfNeeded(),this.state.nationalSignificantNumber&&this.formatter.narrowDownMatchingFormats(this.state);var a;if(this.metadata.hasSelectedNumberingPlan()&&(a=this.formatter.format(i,this.state)),a===void 0&&this.parser.reExtractNationalSignificantNumber(this.state)){this.determineTheCountryIfNeeded();var l=this.state.getNationalDigits();l&&(a=this.formatter.format(l,this.state))}this.formattedOutput=a?this.getFullNumber(a):this.getNonFormattedNumber()}return this.formattedOutput}},{key:"reset",value:function(){var n=this;return this.state=new Q_({onCountryChange:function(i){n.country=i},onCallingCodeChange:function(i,o){n.metadata.selectNumberingPlan(o,i),n.formatter.reset(n.metadata.numberingPlan,n.state),n.parser.reset(n.metadata.numberingPlan)}}),this.formatter=new Sk({state:this.state,metadata:this.metadata}),this.parser=new Fk({defaultCountry:this.defaultCountry,defaultCallingCode:this.defaultCallingCode,metadata:this.metadata,state:this.state,onNationalSignificantNumberChange:function(){n.determineTheCountryIfNeeded(),n.formatter.reset(n.metadata.numberingPlan,n.state)}}),this.state.reset({country:this.defaultCountry,callingCode:this.defaultCallingCode}),this.formattedOutput="",this}},{key:"isInternational",value:function(){return this.state.international}},{key:"getCallingCode",value:function(){if(this.isInternational())return this.state.callingCode}},{key:"getCountryCallingCode",value:function(){return this.getCallingCode()}},{key:"getCountry",value:function(){var n=this.state.digits;if(n)return this._getCountry()}},{key:"_getCountry",value:function(){var n=this.state.country;return n}},{key:"determineTheCountryIfNeeded",value:function(){(!this.state.country||this.isCountryCallingCodeAmbiguous())&&this.determineTheCountry()}},{key:"getFullNumber",value:function(n){var r=this;if(this.isInternational()){var i=function(l){return r.formatter.getInternationalPrefixBeforeCountryCallingCode(r.state,{spacing:!!l})+l},o=this.state.callingCode;return i(o?n?"".concat(o," ").concat(n):o:"".concat(this.state.getDigitsWithoutInternationalPrefix()))}return n}},{key:"getNonFormattedNationalNumberWithPrefix",value:function(){var n=this.state,r=n.nationalSignificantNumber,i=n.complexPrefixBeforeNationalSignificantNumber,o=n.nationalPrefix,a=r,l=i||o;return l&&(a=l+a),a}},{key:"getNonFormattedNumber",value:function(){var n=this.state.nationalSignificantNumberMatchesInput;return this.getFullNumber(n?this.getNonFormattedNationalNumberWithPrefix():this.state.getNationalDigits())}},{key:"getNonFormattedTemplate",value:function(){var n=this.getNonFormattedNumber();if(n)return n.replace(/[\+\d]/g,_n)}},{key:"isCountryCallingCodeAmbiguous",value:function(){var n=this.state.callingCode,r=this.metadata.getCountryCodesForCallingCode(n);return r&&r.length>1}},{key:"determineTheCountry",value:function(){this.state.setCountry(dw(this.isInternational()?this.state.callingCode:this.defaultCallingCode,this.state.nationalSignificantNumber,this.metadata))}},{key:"getNumberValue",value:function(){var n=this.state,r=n.digits,i=n.callingCode,o=n.country,a=n.nationalSignificantNumber;if(r){if(this.isInternational())return i?"+"+i+a:"+"+r;if(o||i){var l=o?this.metadata.countryCallingCode():i;return"+"+l+a}}}},{key:"getNumber",value:function(){var n=this.state,r=n.nationalSignificantNumber,i=n.carrierCode,o=n.callingCode,a=this._getCountry();if(r&&!(!a&&!o)){var l=new aw(a||o,r,this.metadata.metadata);return i&&(l.carrierCode=i),l}}},{key:"isPossible",value:function(){var n=this.getNumber();return n?n.isPossible():!1}},{key:"isValid",value:function(){var n=this.getNumber();return n?n.isValid():!1}},{key:"getNationalNumber",value:function(){return this.state.nationalSignificantNumber}},{key:"getChars",value:function(){return(this.state.international?"+":"")+this.state.digits}},{key:"getTemplate",value:function(){return this.formatter.getTemplate(this.state)||this.getNonFormattedTemplate()||""}}]),e}();function ex(e){return new gt(e).getCountries()}function Vk(e,t,n){return n||(n=t,t=void 0),new Qa(t,n).input(e)}function hw(e){var t=e.country,n=e.international,r=e.withCountryCallingCode,i=e.metadata;return t&&n&&!r?"+".concat(Ci(t,i)):""}function w1(e,t){return t&&(e=e.slice(t.length),e[0]===" "&&(e=e.slice(1))),e}var qk=["country","international","withCountryCallingCode","metadata"];function S1(){return S1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S1.apply(this,arguments)}function Gk(e,t){if(e==null)return{};var n=Qk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Qk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Kk(e){function t(n,r){var i=n.country,o=n.international,a=n.withCountryCallingCode,l=n.metadata,u=Gk(n,qk),d=C.useCallback(function(f){var h=new Qa(i,l),m=hw({country:i,international:o,withCountryCallingCode:a,metadata:l}),x=h.input(m+f),v=h.getTemplate();return m&&(x=w1(x,m),v&&(v=w1(v,m))),{text:x,template:v}},[i,l]);return ne.createElement(JP,S1({},u,{ref:r,parse:ew,format:d}))}return t=ne.forwardRef(t),t.propTypes={value:J.string.isRequired,onChange:J.func.isRequired,country:J.string,international:J.bool,withCountryCallingCode:J.bool,metadata:J.object.isRequired},t.defaultProps={metadata:e},t}const Zk=Kk();var Jk=["value","onChange","country","international","withCountryCallingCode","metadata","inputComponent"];function C1(){return C1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C1.apply(this,arguments)}function Xk(e,t){if(e==null)return{};var n=eN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function eN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tN(e){function t(n,r){var i=n.value,o=n.onChange,a=n.country,l=n.international,u=n.withCountryCallingCode,d=n.metadata,f=n.inputComponent,h=Xk(n,Jk),m=hw({country:a,international:l,withCountryCallingCode:u,metadata:d}),x=C.useCallback(function(v){var w=h1(v.target.value);if(w===i){var b=tx(m,w,a,d);b.indexOf(v.target.value)===0&&(w=w.slice(0,-1))}o(w)},[m,i,o,a,d]);return ne.createElement(f,C1({},h,{ref:r,value:tx(m,i,a,d),onChange:x}))}return t=ne.forwardRef(t),t.propTypes={value:J.string.isRequired,onChange:J.func.isRequired,country:J.string,international:J.bool,withCountryCallingCode:J.bool,metadata:J.object.isRequired,inputComponent:J.elementType.isRequired},t.defaultProps={metadata:e,inputComponent:"input"},t}const nN=tN();function tx(e,t,n,r){return w1(Vk(e+t,n,r),e)}function rN(e){return nx(e[0])+nx(e[1])}function nx(e){return String.fromCodePoint(127462-65+e.toUpperCase().charCodeAt(0))}var iN=["value","onChange","options"],oN=["value","options","className","iconComponent","getIconAspectRatio","arrowComponent","unicodeFlags"];function aN(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=sN(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sN(e,t){if(e){if(typeof e=="string")return rx(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rx(e,t)}}function rx(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xd(){return Xd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xd.apply(this,arguments)}function pw(e,t){if(e==null)return{};var n=lN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function lN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function gw(e){var t=e.value,n=e.onChange,r=e.options,i=pw(e,iN),o=C.useCallback(function(a){var l=a.target.value;n(l==="ZZ"?void 0:l)},[n]);return C.useMemo(function(){return mw(r,t)},[r,t]),ne.createElement("select",Xd({},i,{value:t||"ZZ",onChange:o}),r.map(function(a){var l=a.value,u=a.label,d=a.divider;return ne.createElement("option",{key:d?"|":l||"ZZ",value:d?"|":l||"ZZ",disabled:!!d,style:d?uN:void 0},u)}))}gw.propTypes={value:J.string,onChange:J.func.isRequired,options:J.arrayOf(J.shape({value:J.string,label:J.string,divider:J.bool})).isRequired};var uN={fontSize:"1px",backgroundColor:"currentColor",color:"inherit"};function pm(e){var t=e.value,n=e.options,r=e.className,i=e.iconComponent;e.getIconAspectRatio;var o=e.arrowComponent,a=e.unicodeFlags,l=pw(e,oN),u=C.useMemo(function(){return mw(n,t)},[n,t]);return ne.createElement("div",{className:"PhoneInputCountry"},ne.createElement(gw,Xd({},l,{value:t,options:n,className:Qd("PhoneInputCountrySelect",r)})),a&&t&&ne.createElement("div",{className:"PhoneInputCountryIconUnicode"},rN(t)),!(a&&t)&&ne.createElement(i,{"aria-hidden":!0,country:t,label:u&&u.label,aspectRatio:a?1:void 0}),ne.createElement(o,null))}pm.propTypes={iconComponent:J.elementType,arrowComponent:J.elementType.isRequired,unicodeFlags:J.bool};pm.defaultProps={arrowComponent:function(){return ne.createElement("div",{className:"PhoneInputCountrySelectArrow"})}};function mw(e,t){for(var n=aN(e),r;!(r=n()).done;){var i=r.value;if(!i.divider&&i.value===t)return i}}var dN=["country","countryName","flags","flagUrl"];function P1(){return P1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P1.apply(this,arguments)}function cN(e,t){if(e==null)return{};var n=fN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function gm(e){var t=e.country,n=e.countryName,r=e.flags,i=e.flagUrl,o=cN(e,dN);return r&&r[t]?r[t]({title:n}):ne.createElement("img",P1({},o,{alt:n,role:n?void 0:"presentation",src:i.replace("{XX}",t).replace("{xx}",t.toLowerCase())}))}gm.propTypes={country:J.string.isRequired,countryName:J.string.isRequired,flags:J.objectOf(J.elementType),flagUrl:J.string.isRequired};var hN=["aspectRatio"],pN=["title"],gN=["title"];function ec(){return ec=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ec.apply(this,arguments)}function mm(e,t){if(e==null)return{};var n=mN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function mN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function af(e){var t=e.aspectRatio,n=mm(e,hN);return t===1?ne.createElement(vw,n):ne.createElement(yw,n)}af.propTypes={title:J.string.isRequired,aspectRatio:J.number};function yw(e){var t=e.title,n=mm(e,pN);return ne.createElement("svg",ec({},n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 75 50"}),ne.createElement("title",null,t),ne.createElement("g",{className:"PhoneInputInternationalIconGlobe",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"},ne.createElement("path",{strokeLinecap:"round",d:"M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3"}),ne.createElement("path",{d:"M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3"}),ne.createElement("line",{x1:"26",y1:"25",x2:"74",y2:"25"}),ne.createElement("line",{x1:"50",y1:"1",x2:"50",y2:"49"}),ne.createElement("path",{strokeLinecap:"round",d:"M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8"}),ne.createElement("path",{strokeLinecap:"round",d:"M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2"})),ne.createElement("path",{className:"PhoneInputInternationalIconPhone",stroke:"none",fill:"currentColor",d:"M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z"}))}yw.propTypes={title:J.string.isRequired};function vw(e){var t=e.title,n=mm(e,gN);return ne.createElement("svg",ec({},n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"}),ne.createElement("title",null,t),ne.createElement("g",{className:"PhoneInputInternationalIconGlobe",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeLinecap:"round"},ne.createElement("path",{d:"M8.45,13A21.44,21.44,0,1,1,37.08,41.56"}),ne.createElement("path",{d:"M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21"}),ne.createElement("path",{d:"M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86"}),ne.createElement("path",{d:"M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54"}),ne.createElement("line",{x1:"27.8",y1:"0.85",x2:"27.8",y2:"34.61"}),ne.createElement("line",{x1:"15.2",y1:"22.23",x2:"49.15",y2:"22.23"})),ne.createElement("path",{className:"PhoneInputInternationalIconPhone",stroke:"transparent",fill:"currentColor",d:"M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z"}))}vw.propTypes={title:J.string.isRequired};function yN(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=vN(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vN(e,t){if(e){if(typeof e=="string")return ix(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ix(e,t)}}function ix(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xN(e,t){if(!t)return e;for(var n=[],r=[],i=n,o=yN(t),a;!(a=o()).done;){var l=a.value;l==="|"?i.push({divider:!0}):l==="..."||l==="…"?i=r:function(){var u=void 0;l==="🌐"?u=void 0:u=l;var d=e.indexOf(e.filter(function(h){return h.value===u})[0]),f=e[d];e.splice(d,1),i.push(f)}()}return n.concat(e).concat(r)}function bN(e,t){if(e&&(e=e.filter(function(n){switch(n){case"🌐":case"|":case"...":case"…":return!0;default:return sf(n,t)}}),e.length>0))return e}function sf(e,t){return K$(e,t)?!0:(console.error("Country not found: ".concat(e)),!1)}function xw(e,t){return e&&(e=e.filter(function(n){return sf(n,t)}),e.length===0&&(e=void 0)),e}var $N=["country","label","aspectRatio"];function O1(){return O1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O1.apply(this,arguments)}function wN(e,t){if(e==null)return{};var n=SN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function SN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function bw(e){var t=e.flags,n=e.flagUrl,r=e.flagComponent,i=e.internationalIcon;function o(a){var l=a.country,u=a.label,d=a.aspectRatio,f=wN(a,$N),h=i===af?d:void 0;return ne.createElement("div",O1({},f,{className:Qd("PhoneInputCountryIcon",{"PhoneInputCountryIcon--square":h===1,"PhoneInputCountryIcon--border":l})}),l?ne.createElement(r,{country:l,countryName:u,flags:t,flagUrl:n,className:"PhoneInputCountryIconImg"}):ne.createElement(i,{title:u,aspectRatio:h,className:"PhoneInputCountryIconImg"}))}return o.propTypes={country:J.string,label:J.string.isRequired,aspectRatio:J.number},o}bw({flagUrl:"https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",flagComponent:gm,internationalIcon:af});var $w=J.shape({country_calling_codes:J.object.isRequired,countries:J.object.isRequired}),ww=J.objectOf(J.string);function ci(e,t){var n="+"+Ci(e,t);return n}function CN(e){var t=e.value,n=e.phoneNumber,r=e.defaultCountry,i=e.getAnyCountry,o=e.countries,a=e.required,l=e.metadata,u;return n&&n.country?u=n.country:r&&(!t||Ow(t,r,l))&&(u=r),o&&o.indexOf(u)<0&&(u=void 0),!u&&a&&o&&o.length>0&&(u=i()),u}function PN(e){var t=e.countries,n=e.countryNames,r=e.addInternationalOption,i=e.compareStringsLocales,o=e.compareStrings;o||(o=TN);var a=t.map(function(l){return{value:l,label:n[l]||l}});return a.sort(function(l,u){return o(l.label,u.label,i)}),r&&a.unshift({label:n.ZZ}),a}function Sw(e,t){return V_(e||"",t)}function ON(e){return e.formatNational().replace(/\D/g,"")}function _N(e,t){var n=t.prevCountry,r=t.newCountry,i=t.metadata,o=t.useNationalFormat;if(n===r)return e;if(!e)return o?"":ci(r,i);if(r){if(e[0]==="+"){if(o)return e.indexOf("+"+Ci(r,i))===0?AN(e,r,i):"";if(n){var a=ci(r,i);return e.indexOf(a)===0?e:a}else{var l=ci(r,i);return e.indexOf(l)===0?e:l}}}else if(e[0]!=="+")return fa(e,n,i)||"";return e}function fa(e,t,n){if(e){if(e[0]==="+"){if(e==="+")return;var r=new Qa(t,n);return r.input(e),r.getNumberValue()}if(t){var i=Pw(e,t,n);return"+".concat(Ci(t,n)).concat(i||"")}}}function kN(e,t,n){var r=Pw(e,t,n);if(r){var i=r.length-NN(t,n);if(i>0)return e.slice(0,e.length-i)}return e}function NN(e,t){return t=new gt(t),t.selectNumberingPlan(e),t.numberingPlan.possibleLengths()[t.numberingPlan.possibleLengths().length-1]}function Cw(e,t){var n=t.country,r=t.countries,i=t.required,o=t.metadata;if(e==="+")return n;var a=IN(e,o);return a&&(!r||r.indexOf(a)>=0)?a:n&&!i&&!Ow(e,n,o)?void 0:n}function EN(e,t){var n=t.prevPhoneDigits,r=t.country,i=t.defaultCountry,o=t.countryRequired,a=t.getAnyCountry,l=t.countries,u=t.international,d=t.limitMaxLength,f=t.countryCallingCodeEditable,h=t.metadata;if(u&&f===!1){var m=ci(r,h);if(e.indexOf(m)!==0){var x;return e&&e[0]!=="+"?(e=m+e,x=fa(e,r,h)):e=m,{phoneDigits:e,value:x,country:r}}}u===!1&&r&&e&&e[0]==="+"&&(e=ox(e,r,h)),e&&r&&d&&(e=kN(e,r,h)),e&&e[0]!=="+"&&(!r||u)&&(e="+"+e),!e&&n&&n[0]==="+"&&(u?r=void 0:r=i),e==="+"&&n&&n[0]==="+"&&n.length>1&&(r=void 0);var v;return e&&(e[0]==="+"&&(e==="+"||r&&ci(r,h).indexOf(e)===0)?v=void 0:v=fa(e,r,h)),v&&(r=Cw(v,{country:r,countries:l,metadata:h}),u===!1&&r&&e&&e[0]==="+"&&(e=ox(e,r,h),v=fa(e,r,h))),!r&&o&&(r=i||a()),{phoneDigits:e,country:r,value:v}}function ox(e,t,n){if(e.indexOf(ci(t,n))===0){var r=new Qa(t,n);r.input(e);var i=r.getNumber();return i?i.formatNational().replace(/\D/g,""):""}else return e.replace(/\D/g,"")}function IN(e,t){var n=new Qa(null,t);return n.input(e),n.getCountry()}function TN(e,t,n){return String.prototype.localeCompare?e.localeCompare(t,n):e<t?-1:e>t?1:0}function AN(e,t,n){if(t){var r="+"+Ci(t,n);if(e.length<r.length){if(r.indexOf(e)===0)return""}else if(e.indexOf(r)===0)return e.slice(r.length)}for(var i=0,o=Object.keys(n.country_calling_codes);i<o.length;i++){var a=o[i];if(e.indexOf(a)===1)return e.slice(1+a.length)}return""}function Pw(e,t,n){var r=new Qa(t,n);r.input(e);var i=r.getNumber();return i&&i.nationalNumber}function Ow(e,t,n){for(var r=ci(t,n),i=0;i<e.length&&i<r.length;){if(e[i]!==r[i])return!1;i++}return!0}function _w(e){var t=e.value,n=e.phoneNumber,r=e.defaultCountry,i=e.international,o=e.useNationalFormat,a=e.metadata;return(i===!1||o)&&n&&n.country?ON(n):!t&&i&&r?ci(r,a):t}function ax(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Su(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ax(Object(n),!0).forEach(function(r){RN(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ax(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RN(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FN(e,t,n){var r=e.metadata,i=e.countries,o=e.defaultCountry,a=e.value,l=e.reset,u=e.international,d=e.displayInitialValueAsLocalNumber,f=e.initialValueFormat,h=t.defaultCountry,m=t.value,x=t.reset;n.country;var v=n.value,w=n.hasUserSelectedACountry,b=function(W){return _w(Su(Su({},W),{},{international:u,useNationalFormat:d||f==="national",metadata:r}))};if(l!==x)return{phoneDigits:b({value:void 0,defaultCountry:o}),value:void 0,country:o,hasUserSelectedACountry:void 0};if(o!==h){var p=!o||sf(o,r),g=!v||u&&v===b({value:void 0,defaultCountry:h}),$=!a&&g;if(!w&&p&&$)return{country:o,phoneDigits:b({value:void 0,defaultCountry:o}),value:void 0}}if(!sx(a,m)&&!sx(a,v)){var S,P;if(a){S=Sw(a,r);var N=xw(i,r);S&&S.country?(!N||N.indexOf(S.country)>=0)&&(P=S.country):P=Cw(a,{country:void 0,countries:N,metadata:r})}var T;return a||(T={hasUserSelectedACountry:void 0}),Su(Su({},T),{},{phoneDigits:b({phoneNumber:S,value:a,defaultCountry:o}),value:a,country:a?P:o})}}function sx(e,t){return e===null&&(e=void 0),t===null&&(t=void 0),e===t}function _1(e){return _1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_1(e)}var DN=["name","disabled","readOnly","autoComplete","style","className","inputRef","inputComponent","numberInputProps","smartCaret","countrySelectComponent","countrySelectProps","containerComponent","defaultCountry","countries","countryOptionsOrder","labels","flags","flagComponent","flagUrl","addInternationalOption","internationalIcon","displayInitialValueAsLocalNumber","initialValueFormat","onCountryChange","limitMaxLength","countryCallingCodeEditable","focusInputOnCountrySelection","reset","metadata","international","locales"];function lx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function MN(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lx(Object(n),!0).forEach(function(r){Pn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ml.apply(this,arguments)}function jN(e,t){if(e==null)return{};var n=LN(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function LN(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ux(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function UN(e,t,n){return t&&ux(e.prototype,t),n&&ux(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function BN(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k1(e,t)}function k1(e,t){return k1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},k1(e,t)}function HN(e){var t=YN();return function(){var r=tc(e),i;if(t){var o=tc(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return WN(this,i)}}function WN(e,t){if(t&&(_1(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Cn(e)}function Cn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function YN(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function tc(e){return tc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},tc(e)}function Pn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var VN=function(e){BN(n,e);var t=HN(n);function n(r){var i;zN(this,n),i=t.call(this,r),Pn(Cn(i),"setInputRef",function(p){i.inputRef.current=p;var g=i.props.inputRef;g&&(typeof g=="function"?g(p):g.current=p)}),Pn(Cn(i),"isCountrySupportedWithError",function(p){var g=i.props.metadata;return sf(p,g)}),Pn(Cn(i),"onCountryChange",function(p){var g=i.props,$=g.international,S=g.metadata,P=g.onChange,N=g.focusInputOnCountrySelection,T=i.state,R=T.phoneDigits,W=T.country,L=_N(R,{prevCountry:W,newCountry:p,metadata:S,useNationalFormat:!$}),se=fa(L,p,S);N&&i.inputRef.current.focus(),i.setState({country:p,hasUserSelectedACountry:!0,phoneDigits:L,value:se},function(){P(se)})}),Pn(Cn(i),"onChange",function(p){var g=i.props,$=g.defaultCountry,S=g.onChange,P=g.addInternationalOption,N=g.international,T=g.limitMaxLength,R=g.countryCallingCodeEditable,W=g.metadata,L=i.state,se=L.countries,M=L.phoneDigits,j=L.country,X=EN(p,{prevPhoneDigits:M,country:j,countryRequired:!P,defaultCountry:$,getAnyCountry:function(){return i.getFirstSupportedCountry({countries:se})},countries:se,international:N,limitMaxLength:T,countryCallingCodeEditable:R,metadata:W}),F=X.phoneDigits,ee=X.country,re=X.value,z={phoneDigits:F,value:re,country:ee};R===!1&&!re&&F===i.state.phoneDigits&&(z.forceRerender={}),i.setState(z,function(){return S(re)})}),Pn(Cn(i),"_onFocus",function(){return i.setState({isFocused:!0})}),Pn(Cn(i),"_onBlur",function(){return i.setState({isFocused:!1})}),Pn(Cn(i),"onFocus",function(p){i._onFocus();var g=i.props.onFocus;g&&g(p)}),Pn(Cn(i),"onBlur",function(p){var g=i.props.onBlur;i._onBlur(),g&&g(p)}),Pn(Cn(i),"onCountryFocus",function(p){i._onFocus();var g=i.props.countrySelectProps;if(g){var $=g.onFocus;$&&$(p)}}),Pn(Cn(i),"onCountryBlur",function(p){i._onBlur();var g=i.props.countrySelectProps;if(g){var $=g.onBlur;$&&$(p)}}),i.inputRef=ne.createRef();var o=i.props,a=o.value;o.labels;var l=o.international,u=o.addInternationalOption,d=o.displayInitialValueAsLocalNumber,f=o.initialValueFormat,h=o.metadata,m=i.props,x=m.defaultCountry,v=m.countries;x&&(i.isCountrySupportedWithError(x)||(x=void 0)),v=xw(v,h);var w=Sw(a,h);i.CountryIcon=bw(i.props);var b=CN({value:a,phoneNumber:w,defaultCountry:x,required:!u,countries:v||ex(h),getAnyCountry:function(){return i.getFirstSupportedCountry({countries:v})},metadata:h});return i.state={props:i.props,country:b,countries:v,phoneDigits:_w({value:a,phoneNumber:w,defaultCountry:x,international:l,useNationalFormat:d||f==="national",metadata:h}),value:a},i}return UN(n,[{key:"componentDidMount",value:function(){var i=this.props.onCountryChange,o=this.props.defaultCountry,a=this.state.country;i&&(o&&(this.isCountrySupportedWithError(o)||(o=void 0)),a!==o&&i(a))}},{key:"componentDidUpdate",value:function(i,o){var a=this.props.onCountryChange,l=this.state.country;a&&l!==o.country&&a(l)}},{key:"getCountrySelectOptions",value:function(i){var o=i.countries,a=this.props,l=a.international,u=a.countryCallingCodeEditable,d=a.countryOptionsOrder,f=a.addInternationalOption,h=a.labels,m=a.locales,x=a.metadata;return this.useMemoCountrySelectOptions(function(){return xN(PN({countries:o||ex(x),countryNames:h,addInternationalOption:l&&u===!1?!1:f,compareStringsLocales:m}),bN(d,x))},[o,d,f,h,x])}},{key:"useMemoCountrySelectOptions",value:function(i,o){return(!this.countrySelectOptionsMemoDependencies||!GN(o,this.countrySelectOptionsMemoDependencies))&&(this.countrySelectOptionsMemo=i(),this.countrySelectOptionsMemoDependencies=o),this.countrySelectOptionsMemo}},{key:"getFirstSupportedCountry",value:function(i){var o=i.countries,a=this.getCountrySelectOptions({countries:o});return a[0].value}},{key:"render",value:function(){var i=this.props,o=i.name,a=i.disabled,l=i.readOnly,u=i.autoComplete,d=i.style,f=i.className;i.inputRef;var h=i.inputComponent,m=i.numberInputProps,x=i.smartCaret,v=i.countrySelectComponent,w=i.countrySelectProps,b=i.containerComponent;i.defaultCountry,i.countries,i.countryOptionsOrder;var p=i.labels;i.flags,i.flagComponent,i.flagUrl,i.addInternationalOption,i.internationalIcon,i.displayInitialValueAsLocalNumber,i.initialValueFormat,i.onCountryChange,i.limitMaxLength,i.countryCallingCodeEditable,i.focusInputOnCountrySelection,i.reset;var g=i.metadata;i.international,i.locales;var $=jN(i,DN),S=this.state,P=S.country,N=S.countries,T=S.phoneDigits,R=S.isFocused,W=x?Zk:nN,L=this.getCountrySelectOptions({countries:N});return ne.createElement(b,{style:d,className:Qd(f,"PhoneInput",{"PhoneInput--focus":R,"PhoneInput--disabled":a,"PhoneInput--readOnly":l})},ne.createElement(v,ml({name:o?"".concat(o,"Country"):void 0,"aria-label":p.country},w,{value:P,options:L,onChange:this.onCountryChange,onFocus:this.onCountryFocus,onBlur:this.onCountryBlur,disabled:a||w&&w.disabled,readOnly:l||w&&w.readOnly,iconComponent:this.CountryIcon})),ne.createElement(W,ml({ref:this.setInputRef,type:"tel",autoComplete:u},m,$,{name:o,metadata:g,country:P,value:T||"",onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,disabled:a,readOnly:l,inputComponent:h,className:Qd("PhoneInputInput",m&&m.className,$.className)})))}}],[{key:"getDerivedStateFromProps",value:function(i,o){return MN({props:i},FN(i,o.props,o))}}]),n}(ne.PureComponent),ym=ne.forwardRef(function(e,t){return ne.createElement(VN,ml({},e,{inputRef:t}))});ym.propTypes={value:J.string,onChange:J.func.isRequired,onFocus:J.func,onBlur:J.func,disabled:J.bool,readOnly:J.bool,autoComplete:J.string.isRequired,initialValueFormat:J.oneOf(["national"]),displayInitialValueAsLocalNumber:J.bool,defaultCountry:J.string,countries:J.arrayOf(J.string),labels:ww.isRequired,locales:J.oneOfType([J.string,J.arrayOf(J.string)]),flagUrl:J.string.isRequired,flags:J.objectOf(J.elementType),flagComponent:J.elementType.isRequired,addInternationalOption:J.bool.isRequired,internationalIcon:J.elementType.isRequired,countryOptionsOrder:J.arrayOf(J.string),style:J.object,className:J.string,countrySelectComponent:J.elementType.isRequired,countrySelectProps:J.object,inputComponent:J.elementType.isRequired,containerComponent:J.elementType.isRequired,numberInputProps:J.object,smartCaret:J.bool.isRequired,international:J.bool,limitMaxLength:J.bool.isRequired,countryCallingCodeEditable:J.bool.isRequired,metadata:$w.isRequired,onCountryChange:J.func,focusInputOnCountrySelection:J.bool.isRequired};ym.defaultProps={autoComplete:"tel",countrySelectComponent:pm,flagComponent:gm,flagUrl:"https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg",internationalIcon:af,inputComponent:"input",containerComponent:"div",reset:J.any,smartCaret:!0,addInternationalOption:!0,limitMaxLength:!1,countryCallingCodeEditable:!0,focusInputOnCountrySelection:!0};const qN=ym;function GN(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;){if(e[n]!==t[n])return!1;n++}return!0}const QN={ext:"ext.",country:"Phone number country",phone:"Phone",AB:"Abkhazia",AC:"Ascension Island",AD:"Andorra",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia",BQ:"Bonaire, Sint Eustatius and Saba",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos (Keeling) Islands",CD:"Congo, Democratic Republic of the",CF:"Central African Republic",CG:"Congo",CH:"Switzerland",CI:"Cote d'Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CW:"Curaçao",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Federated States of Micronesia",FO:"Faroe Islands",FR:"France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin (French Part)",MG:"Madagascar",MH:"Marshall Islands",MK:"North Macedonia",ML:"Mali",MM:"Myanmar",MN:"Mongolia",MO:"Macao",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"New Zealand",OM:"Oman",OS:"South Ossetia",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn",PR:"Puerto Rico",PS:"Palestine",PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"Reunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",SS:"South Sudan",ST:"Sao Tome and Principe",SV:"El Salvador",SX:"Sint Maarten",SY:"Syria",SZ:"Swaziland",TA:"Tristan da Cunha",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Holy See (Vatican City State)",VC:"Saint Vincent and the Grenadines",VE:"Venezuela",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WS:"Samoa",XK:"Kosovo",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"International"};function N1(){return N1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N1.apply(this,arguments)}function kw(e){var t=ne.forwardRef(function(n,r){return ne.createElement(qN,N1({ref:r},n))});return t.propTypes={metadata:$w.isRequired,labels:ww.isRequired},t.defaultProps={metadata:e,labels:QN},t}kw();const vm=kw(CP);function Nw(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ew}=Object.prototype,{getPrototypeOf:xm}=Object,bm=(e=>t=>{const n=Ew.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ir=e=>(e=e.toLowerCase(),t=>bm(t)===e),lf=e=>t=>typeof t===e,{isArray:Ka}=Array,yl=lf("undefined");function KN(e){return e!==null&&!yl(e)&&e.constructor!==null&&!yl(e.constructor)&&yi(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Iw=Ir("ArrayBuffer");function ZN(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Iw(e.buffer),t}const JN=lf("string"),yi=lf("function"),Tw=lf("number"),$m=e=>e!==null&&typeof e=="object",XN=e=>e===!0||e===!1,rd=e=>{if(bm(e)!=="object")return!1;const t=xm(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},eE=Ir("Date"),tE=Ir("File"),nE=Ir("Blob"),rE=Ir("FileList"),iE=e=>$m(e)&&yi(e.pipe),oE=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ew.call(e)===t||yi(e.toString)&&e.toString()===t)},aE=Ir("URLSearchParams"),sE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Hl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ka(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function Aw(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Rw=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Fw=e=>!yl(e)&&e!==Rw;function E1(){const{caseless:e}=Fw(this)&&this||{},t={},n=(r,i)=>{const o=e&&Aw(t,i)||i;rd(t[o])&&rd(r)?t[o]=E1(t[o],r):rd(r)?t[o]=E1({},r):Ka(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Hl(arguments[r],n);return t}const lE=(e,t,n,{allOwnKeys:r}={})=>(Hl(t,(i,o)=>{n&&yi(i)?e[o]=Nw(i,n):e[o]=i},{allOwnKeys:r}),e),uE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),dE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},cE=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&xm(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},fE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},hE=e=>{if(!e)return null;if(Ka(e))return e;let t=e.length;if(!Tw(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&xm(Uint8Array)),gE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},mE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},yE=Ir("HTMLFormElement"),vE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),dx=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),xE=Ir("RegExp"),Dw=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Hl(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},bE=e=>{Dw(e,(t,n)=>{if(yi(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(yi(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},$E=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Ka(e)?r(e):r(String(e).split(t)),n},wE=()=>{},SE=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Oh="abcdefghijklmnopqrstuvwxyz",cx="0123456789",Mw={DIGIT:cx,ALPHA:Oh,ALPHA_DIGIT:Oh+Oh.toUpperCase()+cx},CE=(e=16,t=Mw.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function PE(e){return!!(e&&yi(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const OE=e=>{const t=new Array(10),n=(r,i)=>{if($m(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Ka(r)?[]:{};return Hl(r,(a,l)=>{const u=n(a,i+1);!yl(u)&&(o[l]=u)}),t[i]=void 0,o}}return r};return n(e,0)},B={isArray:Ka,isArrayBuffer:Iw,isBuffer:KN,isFormData:oE,isArrayBufferView:ZN,isString:JN,isNumber:Tw,isBoolean:XN,isObject:$m,isPlainObject:rd,isUndefined:yl,isDate:eE,isFile:tE,isBlob:nE,isRegExp:xE,isFunction:yi,isStream:iE,isURLSearchParams:aE,isTypedArray:pE,isFileList:rE,forEach:Hl,merge:E1,extend:lE,trim:sE,stripBOM:uE,inherits:dE,toFlatObject:cE,kindOf:bm,kindOfTest:Ir,endsWith:fE,toArray:hE,forEachEntry:gE,matchAll:mE,isHTMLForm:yE,hasOwnProperty:dx,hasOwnProp:dx,reduceDescriptors:Dw,freezeMethods:bE,toObjectSet:$E,toCamelCase:vE,noop:wE,toFiniteNumber:SE,findKey:Aw,global:Rw,isContextDefined:Fw,ALPHABET:Mw,generateString:CE,isSpecCompliantForm:PE,toJSONObject:OE};function Ce(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}B.inherits(Ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const jw=Ce.prototype,Lw={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Lw[e]={value:e}});Object.defineProperties(Ce,Lw);Object.defineProperty(jw,"isAxiosError",{value:!0});Ce.from=(e,t,n,r,i,o)=>{const a=Object.create(jw);return B.toFlatObject(e,a,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),Ce.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const _E=null;function I1(e){return B.isPlainObject(e)||B.isArray(e)}function zw(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function fx(e,t,n){return e?e.concat(t).map(function(i,o){return i=zw(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function kE(e){return B.isArray(e)&&!e.some(I1)}const NE=B.toFlatObject(B,{},null,function(t){return/^is[A-Z]/.test(t)});function uf(e,t,n){if(!B.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,b){return!B.isUndefined(b[w])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,a=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(t);if(!B.isFunction(i))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(B.isDate(v))return v.toISOString();if(!u&&B.isBlob(v))throw new Ce("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(v)||B.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,w,b){let p=v;if(v&&!b&&typeof v=="object"){if(B.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(B.isArray(v)&&kE(v)||(B.isFileList(v)||B.endsWith(w,"[]"))&&(p=B.toArray(v)))return w=zw(w),p.forEach(function($,S){!(B.isUndefined($)||$===null)&&t.append(a===!0?fx([w],S,o):a===null?w:w+"[]",d($))}),!1}return I1(v)?!0:(t.append(fx(b,w,o),d(v)),!1)}const h=[],m=Object.assign(NE,{defaultVisitor:f,convertValue:d,isVisitable:I1});function x(v,w){if(!B.isUndefined(v)){if(h.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(v),B.forEach(v,function(p,g){(!(B.isUndefined(p)||p===null)&&i.call(t,p,B.isString(g)?g.trim():g,w,m))===!0&&x(p,w?w.concat(g):[g])}),h.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return x(e),t}function hx(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function wm(e,t){this._pairs=[],e&&uf(e,this,t)}const Uw=wm.prototype;Uw.append=function(t,n){this._pairs.push([t,n])};Uw.toString=function(t){const n=t?function(r){return t.call(this,r,hx)}:hx;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function EE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Bw(e,t,n){if(!t)return e;const r=n&&n.encode||EE,i=n&&n.serialize;let o;if(i?o=i(t,n):o=B.isURLSearchParams(t)?t.toString():new wm(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class IE{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,function(r){r!==null&&t(r)})}}const px=IE,Hw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},TE=typeof URLSearchParams<"u"?URLSearchParams:wm,AE=typeof FormData<"u"?FormData:null,RE=typeof Blob<"u"?Blob:null,FE=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),DE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Qn={isBrowser:!0,classes:{URLSearchParams:TE,FormData:AE,Blob:RE},isStandardBrowserEnv:FE,isStandardBrowserWebWorkerEnv:DE,protocols:["http","https","file","blob","url","data"]};function ME(e,t){return uf(e,new Qn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Qn.isNode&&B.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function jE(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function LE(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Ww(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),u=o>=n.length;return a=!a&&B.isArray(i)?i.length:a,u?(B.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!B.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&B.isArray(i[a])&&(i[a]=LE(i[a])),!l)}if(B.isFormData(e)&&B.isFunction(e.entries)){const n={};return B.forEachEntry(e,(r,i)=>{t(jE(r),i,n,0)}),n}return null}const zE={"Content-Type":void 0};function UE(e,t,n){if(B.isString(e))try{return(t||JSON.parse)(e),B.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const df={transitional:Hw,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=B.isObject(t);if(o&&B.isHTMLForm(t)&&(t=new FormData(t)),B.isFormData(t))return i&&i?JSON.stringify(Ww(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ME(t,this.formSerializer).toString();if((l=B.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return uf(l?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),UE(t)):t}],transformResponse:[function(t){const n=this.transitional||df.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&B.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?Ce.from(l,Ce.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qn.classes.FormData,Blob:Qn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};B.forEach(["delete","get","head"],function(t){df.headers[t]={}});B.forEach(["post","put","patch"],function(t){df.headers[t]=B.merge(zE)});const Sm=df,BE=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),HE=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&BE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},gx=Symbol("internals");function fs(e){return e&&String(e).trim().toLowerCase()}function id(e){return e===!1||e==null?e:B.isArray(e)?e.map(id):String(e)}function WE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const YE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function _h(e,t,n,r,i){if(B.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!B.isString(t)){if(B.isString(r))return t.indexOf(r)!==-1;if(B.isRegExp(r))return r.test(t)}}function VE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function qE(e,t){const n=B.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class cf{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,u,d){const f=fs(u);if(!f)throw new Error("header name must be a non-empty string");const h=B.findKey(i,f);(!h||i[h]===void 0||d===!0||d===void 0&&i[h]!==!1)&&(i[h||u]=id(l))}const a=(l,u)=>B.forEach(l,(d,f)=>o(d,f,u));return B.isPlainObject(t)||t instanceof this.constructor?a(t,n):B.isString(t)&&(t=t.trim())&&!YE(t)?a(HE(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=fs(t),t){const r=B.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return WE(i);if(B.isFunction(n))return n.call(this,i,r);if(B.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=fs(t),t){const r=B.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||_h(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=fs(a),a){const l=B.findKey(r,a);l&&(!n||_h(r,r[l],l,n))&&(delete r[l],i=!0)}}return B.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||_h(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return B.forEach(this,(i,o)=>{const a=B.findKey(r,o);if(a){n[a]=id(i),delete n[o];return}const l=t?VE(o):String(o).trim();l!==o&&delete n[o],n[l]=id(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return B.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&B.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[gx]=this[gx]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=fs(a);r[l]||(qE(i,a),r[l]=!0)}return B.isArray(t)?t.forEach(o):o(t),this}}cf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.freezeMethods(cf.prototype);B.freezeMethods(cf);const $r=cf;function kh(e,t){const n=this||Sm,r=t||n,i=$r.from(r.headers);let o=r.data;return B.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Yw(e){return!!(e&&e.__CANCEL__)}function Wl(e,t,n){Ce.call(this,e??"canceled",Ce.ERR_CANCELED,t,n),this.name="CanceledError"}B.inherits(Wl,Ce,{__CANCEL__:!0});function GE(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Ce("Request failed with status code "+n.status,[Ce.ERR_BAD_REQUEST,Ce.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const QE=Qn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,l){const u=[];u.push(n+"="+encodeURIComponent(r)),B.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),B.isString(o)&&u.push("path="+o),B.isString(a)&&u.push("domain="+a),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function KE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ZE(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Vw(e,t){return e&&!KE(t)?ZE(e,t):t}const JE=Qn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=B.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function XE(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function eI(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(u){const d=Date.now(),f=r[o];a||(a=d),n[i]=u,r[i]=d;let h=o,m=0;for(;h!==i;)m+=n[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),d-a<t)return;const x=f&&d-f;return x?Math.round(m*1e3/x):void 0}}function mx(e,t){let n=0;const r=eI(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,u=r(l),d=o<=a;n=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&d?(a-o)/u:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const tI=typeof XMLHttpRequest<"u",nI=tI&&function(e){return new Promise(function(n,r){let i=e.data;const o=$r.from(e.headers).normalize(),a=e.responseType;let l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}B.isFormData(i)&&(Qn.isStandardBrowserEnv||Qn.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let d=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(x+":"+v))}const f=Vw(e.baseURL,e.url);d.open(e.method.toUpperCase(),Bw(f,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function h(){if(!d)return;const x=$r.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),w={data:!a||a==="text"||a==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:x,config:e,request:d};GE(function(p){n(p),u()},function(p){r(p),u()},w),d=null}if("onloadend"in d?d.onloadend=h:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(h)},d.onabort=function(){d&&(r(new Ce("Request aborted",Ce.ECONNABORTED,e,d)),d=null)},d.onerror=function(){r(new Ce("Network Error",Ce.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Hw;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new Ce(v,w.clarifyTimeoutError?Ce.ETIMEDOUT:Ce.ECONNABORTED,e,d)),d=null},Qn.isStandardBrowserEnv){const x=(e.withCredentials||JE(f))&&e.xsrfCookieName&&QE.read(e.xsrfCookieName);x&&o.set(e.xsrfHeaderName,x)}i===void 0&&o.setContentType(null),"setRequestHeader"in d&&B.forEach(o.toJSON(),function(v,w){d.setRequestHeader(w,v)}),B.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),a&&a!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",mx(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",mx(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=x=>{d&&(r(!x||x.type?new Wl(null,e,d):x),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const m=XE(f);if(m&&Qn.protocols.indexOf(m)===-1){r(new Ce("Unsupported protocol "+m+":",Ce.ERR_BAD_REQUEST,e));return}d.send(i||null)})},od={http:_E,xhr:nI};B.forEach(od,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const rI={getAdapter:e=>{e=B.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=B.isString(n)?od[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Ce(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(B.hasOwnProp(od,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!B.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:od};function Nh(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Wl(null,e)}function yx(e){return Nh(e),e.headers=$r.from(e.headers),e.data=kh.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),rI.getAdapter(e.adapter||Sm.adapter)(e).then(function(r){return Nh(e),r.data=kh.call(e,e.transformResponse,r),r.headers=$r.from(r.headers),r},function(r){return Yw(r)||(Nh(e),r&&r.response&&(r.response.data=kh.call(e,e.transformResponse,r.response),r.response.headers=$r.from(r.response.headers))),Promise.reject(r)})}const vx=e=>e instanceof $r?e.toJSON():e;function za(e,t){t=t||{};const n={};function r(d,f,h){return B.isPlainObject(d)&&B.isPlainObject(f)?B.merge.call({caseless:h},d,f):B.isPlainObject(f)?B.merge({},f):B.isArray(f)?f.slice():f}function i(d,f,h){if(B.isUndefined(f)){if(!B.isUndefined(d))return r(void 0,d,h)}else return r(d,f,h)}function o(d,f){if(!B.isUndefined(f))return r(void 0,f)}function a(d,f){if(B.isUndefined(f)){if(!B.isUndefined(d))return r(void 0,d)}else return r(void 0,f)}function l(d,f,h){if(h in t)return r(d,f);if(h in e)return r(void 0,d)}const u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(d,f)=>i(vx(d),vx(f),!0)};return B.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const h=u[f]||i,m=h(e[f],t[f],f);B.isUndefined(m)&&h!==l||(n[f]=m)}),n}const qw="1.3.5",Cm={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Cm[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xx={};Cm.transitional=function(t,n,r){function i(o,a){return"[Axios v"+qw+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new Ce(i(a," has been removed"+(n?" in "+n:"")),Ce.ERR_DEPRECATED);return n&&!xx[a]&&(xx[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function iI(e,t,n){if(typeof e!="object")throw new Ce("options must be an object",Ce.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],u=l===void 0||a(l,o,e);if(u!==!0)throw new Ce("option "+o+" must be "+u,Ce.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ce("Unknown option "+o,Ce.ERR_BAD_OPTION)}}const T1={assertOptions:iI,validators:Cm},Mr=T1.validators;class nc{constructor(t){this.defaults=t,this.interceptors={request:new px,response:new px}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=za(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&T1.assertOptions(r,{silentJSONParsing:Mr.transitional(Mr.boolean),forcedJSONParsing:Mr.transitional(Mr.boolean),clarifyTimeoutError:Mr.transitional(Mr.boolean)},!1),i!=null&&(B.isFunction(i)?n.paramsSerializer={serialize:i}:T1.assertOptions(i,{encode:Mr.function,serialize:Mr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&B.merge(o.common,o[n.method]),a&&B.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=$r.concat(a,o);const l=[];let u=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(u=u&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const d=[];this.interceptors.response.forEach(function(w){d.push(w.fulfilled,w.rejected)});let f,h=0,m;if(!u){const v=[yx.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,d),m=v.length,f=Promise.resolve(n);h<m;)f=f.then(v[h++],v[h++]);return f}m=l.length;let x=n;for(h=0;h<m;){const v=l[h++],w=l[h++];try{x=v(x)}catch(b){w.call(this,b);break}}try{f=yx.call(this,x)}catch(v){return Promise.reject(v)}for(h=0,m=d.length;h<m;)f=f.then(d[h++],d[h++]);return f}getUri(t){t=za(this.defaults,t);const n=Vw(t.baseURL,t.url);return Bw(n,t.params,t.paramsSerializer)}}B.forEach(["delete","get","head","options"],function(t){nc.prototype[t]=function(n,r){return this.request(za(r||{},{method:t,url:n,data:(r||{}).data}))}});B.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(za(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}nc.prototype[t]=n(),nc.prototype[t+"Form"]=n(!0)});const ad=nc;class Pm{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new Wl(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Pm(function(i){t=i}),cancel:t}}}const oI=Pm;function aI(e){return function(n){return e.apply(null,n)}}function sI(e){return B.isObject(e)&&e.isAxiosError===!0}const A1={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(A1).forEach(([e,t])=>{A1[t]=e});const lI=A1;function Gw(e){const t=new ad(e),n=Nw(ad.prototype.request,t);return B.extend(n,ad.prototype,t,{allOwnKeys:!0}),B.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Gw(za(e,i))},n}const dt=Gw(Sm);dt.Axios=ad;dt.CanceledError=Wl;dt.CancelToken=oI;dt.isCancel=Yw;dt.VERSION=qw;dt.toFormData=uf;dt.AxiosError=Ce;dt.Cancel=dt.CanceledError;dt.all=function(t){return Promise.all(t)};dt.spread=aI;dt.isAxiosError=sI;dt.mergeConfig=za;dt.AxiosHeaders=$r;dt.formToJSON=e=>Ww(B.isHTMLForm(e)?new FormData(e):e);dt.HttpStatusCode=lI;dt.default=dt;const Xe=dt,tr="https://crossbackend.onrender.com",uI=async({firstName:e,lastName:t,email:n,companyName:r,phoneNum:i,password:o})=>{await Xe.post(`${tr}/api/seler/register`,{firstName:e,lastName:t,email:n,companyName:r,phoneNum:i,password:o}).then(a=>{localStorage.setItem("user",JSON.stringify(a.data.data))})},dI=async e=>{await Xe.post(`${tr}/api/user/register`,e).then(t=>{localStorage.setItem("user",JSON.stringify(t.data.data))})},cI=async({email:e,password:t})=>{await Xe.post(`${tr}/api/user/login`,{email:e,password:t}).then(n=>{localStorage.setItem("user",JSON.stringify(n.data.data))})},fI=async({email:e,password:t})=>{await Xe.post(`${tr}/api/seler/signInUser`,{email:e,password:t}).then(n=>{localStorage.setItem("user",JSON.stringify(n.data.data))})},hI=async({id:e,otp:t})=>{await Xe.patch(`${tr}/api/user/${e}/verify2`,{otp:t}).then(n=>{console.log(n.data)})},pI=async({id:e,otp:t})=>{await Xe.patch(`${tr}/api/user/${e}/verify`,{otp:t}).then(n=>{console.log(n.data)})},gI=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.patch(`${tr}/api/seler/${e}/update`,t,n).then(r=>{console.log(r.data)}).catch(r=>{console.log(r)})},mI=async({id:e,gender:t,DateOfBirth:n,country:r})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{gender:t,DateOfBirth:n,country:r}).then(i=>{})},yI=async({id:e,address:t,address2:n,shippingFrom:r,codePostal:i,shopName:o,city:a})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{address:t,address2:n,shippingFrom:r,codePostal:i,shopName:o,city:a}).then(l=>{})},vI=async({id:e,bankName:t,accountName:n,accNumber:r,completed:i})=>{await Xe.patch(`${tr}/api/seler/${e}/updateuser`,{bankName:t,accountName:n,accNumber:r,completed:i}).then(o=>{})};function go(e){this._maxSize=e,this.clear()}go.prototype.clear=function(){this._size=0,this._values=Object.create(null)};go.prototype.get=function(e){return this._values[e]};go.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var xI=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Qw=/^\d+$/,bI=/^\d/,$I=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,wI=/^\s*(['"]?)(.*?)(\1)\s*$/,Om=512,bx=new go(Om),$x=new go(Om),wx=new go(Om),to={Cache:go,split:R1,normalizePath:Eh,setter:function(e){var t=Eh(e);return $x.get(e)||$x.set(e,function(r,i){for(var o=0,a=t.length,l=r;o<a-1;){var u=t[o];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;l=l[t[o++]]}l[t[o]]=i})},getter:function(e,t){var n=Eh(e);return wx.get(e)||wx.set(e,function(i){for(var o=0,a=n.length;o<a;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(_m(n)||Qw.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){SI(Array.isArray(e)?e:R1(e),t,n)}};function Eh(e){return bx.get(e)||bx.set(e,R1(e).map(function(t){return t.replace(wI,"$2")}))}function R1(e){return e.match(xI)||[""]}function SI(e,t,n){var r=e.length,i,o,a,l;for(o=0;o<r;o++)i=e[o],i&&(OI(i)&&(i='"'+i+'"'),l=_m(i),a=!l&&/^\d+$/.test(i),t.call(n,i,l,a,o,e))}function _m(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function CI(e){return e.match(bI)&&!e.match(Qw)}function PI(e){return $I.test(e)}function OI(e){return!_m(e)&&(CI(e)||PI(e))}const _I=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,ff=e=>e.match(_I)||[],hf=e=>e[0].toUpperCase()+e.slice(1),km=(e,t)=>ff(e).join(t).toLowerCase(),Kw=e=>ff(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),kI=e=>hf(Kw(e)),NI=e=>km(e,"_"),EI=e=>km(e,"-"),II=e=>hf(km(e," ")),TI=e=>ff(e).map(hf).join(" ");var Ih={words:ff,upperFirst:hf,camelCase:Kw,pascalCase:kI,snakeCase:NI,kebabCase:EI,sentenceCase:II,titleCase:TI},rc={},AI={get exports(){return rc},set exports(e){rc=e}};AI.exports=function(e){return Zw(RI(e),e)};rc.array=Zw;function Zw(e,t){var n=e.length,r=new Array(n),i={},o=n,a=FI(t),l=DI(e);for(t.forEach(function(d){if(!l.has(d[0])||!l.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||u(e[o],o,new Set);return r;function u(d,f,h){if(h.has(d)){var m;try{m=", node was:"+JSON.stringify(d)}catch{m=""}throw new Error("Cyclic dependency"+m)}if(!l.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!i[f]){i[f]=!0;var x=a.get(d)||new Set;if(x=Array.from(x),f=x.length){h.add(d);do{var v=x[--f];u(v,l.get(v),h)}while(f);h.delete(d)}r[--n]=d}}}function RI(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function FI(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function DI(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}const MI=Object.prototype.toString,jI=Error.prototype.toString,LI=RegExp.prototype.toString,zI=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",UI=/^Symbol\((.*)\)(.*)$/;function BI(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Sx(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return BI(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return zI.call(e).replace(UI,"Symbol($1)");const r=MI.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+jI.call(e)+"]":r==="RegExp"?LI.call(e):null}function wa(e,t){let n=Sx(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=Sx(this[r],t);return o!==null?o:i},2)}function Jw(e){return e==null?[]:[].concat(e)}let HI=/\$\{\s*(\w+)\s*\}/g;class Vt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(HI,(i,o)=>wa(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Jw(t).forEach(o=>{Vt.isError(o)?(this.errors.push(...o.errors),this.inner=this.inner.concat(o.inner.length?o.inner:o)):this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,Vt)}}let cr={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${wa(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${wa(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${wa(n,!0)}\``+i}},On={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Ur={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},F1={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},D1={isValue:"${path} field must be ${value}"},M1={noUnknown:"${path} field has unspecified keys: ${unknown}"},WI={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:cr,string:On,number:Ur,date:F1,object:M1,array:WI,boolean:D1});const Nm=e=>e&&e.__isYupSchema__;class ic{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,a=typeof r=="function"?r:(...l)=>l.every(u=>u===r);return new ic(t,(l,u)=>{var d;let f=a(...l)?i:o;return(d=f==null?void 0:f(u))!=null?d:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!Nm(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Cu={context:"$",value:"."};function Xw(e,t){return new Pi(e,t)}class Pi{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Cu.context,this.isValue=this.key[0]===Cu.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Cu.context:this.isValue?Cu.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&to.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Pi.prototype.__isYupRef=!0;const hn=e=>e==null;function bo(e){function t({value:n,path:r="",options:i,originalValue:o,schema:a},l,u){const{name:d,test:f,params:h,message:m,skipAbsent:x}=e;let{parent:v,context:w,abortEarly:b=a.spec.abortEarly}=i;function p(L){return Pi.isRef(L)?L.getValue(n,v,w):L}function g(L={}){const se=Object.assign({value:n,originalValue:o,label:a.spec.label,path:L.path||r,spec:a.spec},h,L.params);for(const j of Object.keys(se))se[j]=p(se[j]);const M=new Vt(Vt.formatError(L.message||m,se),n,se.path,L.type||d);return M.params=se,M}const $=b?l:u;let S={path:r,parent:v,type:d,from:i.from,createError:g,resolve:p,options:i,originalValue:o,schema:a};const P=L=>{Vt.isError(L)?$(L):L?u(null):$(g())},N=L=>{Vt.isError(L)?$(L):l(L)},T=x&&hn(n);if(!i.sync){try{Promise.resolve(T?!0:f.call(S,n,S)).then(P,N)}catch(L){N(L)}return}let R;try{var W;if(R=T?!0:f.call(S,n,S),typeof((W=R)==null?void 0:W.then)=="function")throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(L){N(L);return}P(R)}return t.OPTIONS=e,t}function YI(e,t,n,r=n){let i,o,a;return t?(to.forEach(t,(l,u,d)=>{let f=u?l.slice(1,l.length-1):l;e=e.resolve({context:r,parent:i,value:n});let h=e.type==="tuple",m=d?parseInt(f,10):0;if(e.innerType||h){if(h&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&m>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[m],e=h?e.spec.types[m]:e.innerType}if(!d){if(!e.fields||!e.fields[f])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=n,n=n&&n[f],e=e.fields[f]}o=f,a=u?"["+l+"]":"."+l}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class oc extends Set{describe(){const t=[];for(const n of this.values())t.push(Pi.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new oc(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ha(e,t=new Map){if(Nm(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=ha(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,ha(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(ha(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=ha(i,t)}else throw Error(`Unable to clone ${e}`);return n}class yn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new oc,this._blacklist=new oc,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(cr.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ha(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&hn(o))return o;let a=wa(t),l=wa(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(l!==a?`result of cast: ${l}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault()),r}_validate(t,n={},r,i){let{path:o,originalValue:a=t,strict:l=this.spec.strict}=n,u=t;l||(u=this._cast(u,Object.assign({assert:!1},n)));let d=[];for(let f of Object.values(this.internalTests))f&&d.push(f);this.runTests({path:o,value:u,originalValue:a,options:n,tests:d},r,f=>{if(f.length)return i(f,u);this.runTests({path:o,value:u,originalValue:a,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:a,originalValue:l,path:u,options:d}=t,f=w=>{i||(i=!0,n(w,a))},h=w=>{i||(i=!0,r(w,a))},m=o.length,x=[];if(!m)return h([]);let v={value:a,originalValue:l,path:u,options:d,schema:this};for(let w=0;w<o.length;w++){const b=o[w];b(v,f,function(g){g&&(x=x.concat(g)),--m<=0&&h(x)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:a}){const l=t??n;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof l=="number";let d=r[l];const f=Object.assign({},a,{strict:!0,parent:r,value:d,originalValue:o[l],key:void 0,[u?"index":"key"]:l,path:u||l.includes(".")?`${i||""}[${d?l:`"${l}"`}]`:(i?`${i}.`:"")+t});return(h,m,x)=>this.resolve(f)._validate(d,f,m,x)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((i,o)=>r._validate(t,n,(a,l)=>{Vt.isError(a)&&(a.value=l),o(a)},(a,l)=>{a.length?o(new Vt(a,l)):i(l)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),i;return r._validate(t,Object.assign({},n,{sync:!0}),(o,a)=>{throw Vt.isError(o)&&(o.value=a),o},(o,a)=>{if(o.length)throw new Vt(o,t);i=a}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Vt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Vt.isError(r))return!1;throw r}}_getDefault(){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this):ha(t)}getDefault(t){return this.resolve(t||{})._getDefault()}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=bo({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=bo({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=cr.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=cr.notNull){return this.nullability(!1,t)}required(t=cr.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=cr.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=bo(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Jw(t).map(o=>new Pi(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new ic(i,n):ic.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=bo({message:t,name:"typeError",test(r){return!hn(r)&&!this.schema._typeCheck(r)?this.createError({params:{type:this.schema.type}}):!0}}),n}oneOf(t,n=cr.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=bo({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),r}notOneOf(t,n=cr.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=bo({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:a}=n.spec;return{meta:i,label:r,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,d,f)=>f.findIndex(h=>h.name===u.name)===d)}}}yn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])yn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:a}=YI(this,t,n,r.context);return a[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])yn.prototype[e]=yn.prototype.oneOf;for(const e of["not","nope"])yn.prototype[e]=yn.prototype.notOneOf;function e5(){return new t5}class t5 extends yn{constructor(){super({type:"boolean",check(t){return t instanceof Boolean&&(t=t.valueOf()),typeof t=="boolean"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(r.spec.coerce&&!r.isType(t)){if(/^(true|1)$/i.test(String(t)))return!0;if(/^(false|0)$/i.test(String(t)))return!1}return t})})}isTrue(t=D1.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"true"},test(n){return hn(n)||n===!0}})}isFalse(t=D1.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"false"},test(n){return hn(n)||n===!1}})}default(t){return super.default(t)}defined(t){return super.defined(t)}optional(){return super.optional()}required(t){return super.required(t)}notRequired(){return super.notRequired()}nullable(){return super.nullable()}nonNullable(t){return super.nonNullable(t)}strip(t){return super.strip(t)}}e5.prototype=t5.prototype;let VI=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,qI=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,GI=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,QI=e=>hn(e)||e===e.trim(),KI={}.toString();function Ot(){return new n5}class n5 extends yn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===KI?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||cr.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=On.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=On.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=On.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||On.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=On.email){return this.matches(VI,{name:"email",message:t,excludeEmptyString:!0})}url(t=On.url){return this.matches(qI,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=On.uuid){return this.matches(GI,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=On.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:QI})}lowercase(t=On.lowercase){return this.transform(n=>hn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hn(n)||n===n.toLowerCase()})}uppercase(t=On.uppercase){return this.transform(n=>hn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hn(n)||n===n.toUpperCase()})}}Ot.prototype=n5.prototype;let ZI=e=>e!=+e;function Em(){return new r5}class r5 extends yn{constructor(){super({type:"number",check(t){return t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&!ZI(t)}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce)return t;let i=t;if(typeof i=="string"){if(i=i.replace(/\s/g,""),i==="")return NaN;i=+i}return r.isType(i)?i:parseFloat(i)})})}min(t,n=Ur.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r>=this.resolve(t)}})}max(t,n=Ur.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(r){return r<=this.resolve(t)}})}lessThan(t,n=Ur.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:t},skipAbsent:!0,test(r){return r<this.resolve(t)}})}moreThan(t,n=Ur.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:t},skipAbsent:!0,test(r){return r>this.resolve(t)}})}positive(t=Ur.positive){return this.moreThan(0,t)}negative(t=Ur.negative){return this.lessThan(0,t)}integer(t=Ur.integer){return this.test({name:"integer",message:t,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(t=>hn(t)?t:t|0)}round(t){var n;let r=["ceil","floor","round","trunc"];if(t=((n=t)==null?void 0:n.toLowerCase())||"round",t==="trunc")return this.truncate();if(r.indexOf(t.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>hn(i)?i:Math[t](i))}}Em.prototype=r5.prototype;var JI=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function XI(e){var t=[1,4,5,6,7,10,11],n=0,r,i;if(i=JI.exec(e)){for(var o=0,a;a=t[o];++o)i[a]=+i[a]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?r=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),r=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let eT=new Date(""),tT=e=>Object.prototype.toString.call(e)==="[object Date]";class pf extends yn{constructor(){super({type:"date",check(t){return tT(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)?t:(t=XI(t),isNaN(t)?pf.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Pi.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=F1.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=F1.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}pf.INVALID_DATE=eT;pf.prototype;function nT(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([a,l])=>`${a}-${l}`));function o(a,l){let u=to.split(a)[0];r.add(u),i.has(`${l}-${u}`)||n.push([l,u])}for(const a of Object.keys(e)){let l=e[a];r.add(a),Pi.isRef(l)&&l.isSibling?o(l.path,a):Nm(l)&&"deps"in l&&l.deps.forEach(u=>o(u,a))}return rc.array(Array.from(r),n).reverse()}function Cx(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function i5(e){return(t,n)=>Cx(e,t)-Cx(e,n)}const rT=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function sd(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=sd(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=sd(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(sd)}):"optional"in e?e.optional():e}const iT=(e,t)=>{const n=[...to.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=to.getter(to.join(n),!0)(e);return!!(i&&r in i)};let Px=e=>Object.prototype.toString.call(e)==="[object Object]";function oT(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const aT=i5([]);function Yl(e){return new o5(e)}class o5 extends yn{constructor(t){super({type:"object",check(n){return Px(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=aT,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault();if(!this._typeCheck(i))return i;let o=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(i).filter(h=>!this._nodes.includes(h))),u={},d=Object.assign({},n,{parent:u,__validating:n.__validating||!1}),f=!1;for(const h of l){let m=o[h],x=h in i;if(m){let v,w=i[h];d.path=(n.path?`${n.path}.`:"")+h,m=m.resolve({value:w,context:n.context,parent:u});let b=m instanceof yn?m.spec:void 0,p=b==null?void 0:b.strict;if(b!=null&&b.strip){f=f||h in i;continue}v=!n.__validating||!p?m.cast(i[h],d):i[h],v!==void 0&&(u[h]=v)}else x&&!a&&(u[h]=i[h]);(x!==h in u||u[h]!==i[h])&&(f=!0)}return f?u:i}_validate(t,n={},r,i){let{from:o=[],originalValue:a=t,recursive:l=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(u,d)=>{if(!l||!Px(d)){i(u,d);return}a=a||d;let f=[];for(let h of this._nodes){let m=this.fields[h];!m||Pi.isRef(m)||f.push(m.asNestedTest({options:n,key:h,parent:d,parentPath:n.path,originalParent:a}))}this.runTests({tests:f,value:d,originalValue:a,options:n},r,h=>{i(h.sort(this._sortErrors).concat(u),d)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?o:a}return n.withMutation(i=>i.setFields(r,this._excludedEdges))}_getDefault(){if("default"in this.spec)return super._getDefault();if(!this._nodes.length)return;let t={};return this._nodes.forEach(n=>{const r=this.fields[n];t[n]=r&&"getDefault"in r?r.getDefault():void 0}),t}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=nT(t,n),r._sortErrors=i5(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return sd(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let i=to.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return iT(o,t)&&(a=Object.assign({},o),r||delete a[t],a[n]=i(o)),a})}json(){return this.transform(rT)}noUnknown(t=!0,n=M1.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=oT(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=M1.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Ih.camelCase)}snakeCase(){return this.transformKeys(Ih.snakeCase)}constantCase(){return this.transformKeys(t=>Ih.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[i,o]of Object.entries(this.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),n.fields[i]=o.describe(a)}return n}}Yl.prototype=o5.prototype;var Vl=e=>e.type==="checkbox",pa=e=>e instanceof Date,Tt=e=>e==null;const a5=e=>typeof e=="object";var ct=e=>!Tt(e)&&!Array.isArray(e)&&a5(e)&&!pa(e),sT=e=>ct(e)&&e.target?Vl(e.target)?e.target.checked:e.target.value:e,lT=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,uT=(e,t)=>e.has(lT(t)),dT=e=>{const t=e.constructor&&e.constructor.prototype;return ct(t)&&t.hasOwnProperty("isPrototypeOf")},Im=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Wi(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Im&&(e instanceof Blob||e instanceof FileList))&&(n||ct(e)))if(t=n?[]:{},!Array.isArray(e)&&!dT(e))t=e;else for(const r in e)t[r]=Wi(e[r]);else return e;return t}var ql=e=>Array.isArray(e)?e.filter(Boolean):[],it=e=>e===void 0,ce=(e,t,n)=>{if(!t||!ct(e))return n;const r=ql(t.split(/[,[\].]+?/)).reduce((i,o)=>Tt(i)?i:i[o],e);return it(r)||r===e?it(e[t])?n:e[t]:r};const Ox={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},In={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},or={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ne.createContext(null);var cT=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==In.all&&(t._proxyFormState[a]=!r||In.all),n&&(n[a]=!0),e[a]}});return i},an=e=>ct(e)&&!Object.keys(e).length,fT=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return an(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||In.all))},Th=e=>Array.isArray(e)?e:[e];function hT(e){const t=ne.useRef(e);t.current=e,ne.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Kn=e=>typeof e=="string",pT=(e,t,n,r,i)=>Kn(e)?(r&&t.watch.add(e),ce(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),ce(n,o))):(r&&(t.watchAll=!0),n),Tm=e=>/^\w*$/.test(e),s5=e=>ql(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Le(e,t,n){let r=-1;const i=Tm(t)?[t]:s5(t),o=i.length,a=o-1;for(;++r<o;){const l=i[r];let u=n;if(r!==a){const d=e[l];u=ct(d)||Array.isArray(d)?d:isNaN(+i[r+1])?{}:[]}e[l]=u,e=e[l]}return e}var l5=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{};const j1=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=ce(e,r);if(i){const{_f:o,...a}=i;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else ct(a)&&j1(a,t)}}};var _x=e=>({isOnSubmit:!e||e===In.onSubmit,isOnBlur:e===In.onBlur,isOnChange:e===In.onChange,isOnAll:e===In.all,isOnTouch:e===In.onTouched}),kx=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),gT=(e,t,n)=>{const r=ql(ce(e,n));return Le(r,"root",t[n]),Le(e,n,r),e},Sa=e=>typeof e=="boolean",Am=e=>e.type==="file",Zr=e=>typeof e=="function",ac=e=>{if(!Im)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ld=e=>Kn(e),Rm=e=>e.type==="radio",sc=e=>e instanceof RegExp;const Nx={value:!1,isValid:!1},Ex={value:!0,isValid:!0};var u5=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!it(e[0].attributes.value)?it(e[0].value)||e[0].value===""?Ex:{value:e[0].value,isValid:!0}:Ex:Nx}return Nx};const Ix={isValid:!1,value:null};var d5=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Ix):Ix;function Tx(e,t,n="validate"){if(ld(e)||Array.isArray(e)&&e.every(ld)||Sa(e)&&!e)return{type:n,message:ld(e)?e:"",ref:t}}var $o=e=>ct(e)&&!sc(e)?e:{value:e,message:""},Ax=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:l,maxLength:u,minLength:d,min:f,max:h,pattern:m,validate:x,name:v,valueAsNumber:w,mount:b,disabled:p}=e._f,g=ce(t,v);if(!b||p)return{};const $=a?a[0]:o,S=M=>{r&&$.reportValidity&&($.setCustomValidity(Sa(M)?"":M||""),$.reportValidity())},P={},N=Rm(o),T=Vl(o),R=N||T,W=(w||Am(o))&&it(o.value)&&it(g)||ac(o)&&o.value===""||g===""||Array.isArray(g)&&!g.length,L=l5.bind(null,v,n,P),se=(M,j,X,F=or.maxLength,ee=or.minLength)=>{const re=M?j:X;P[v]={type:M?F:ee,message:re,ref:o,...L(M?F:ee,re)}};if(i?!Array.isArray(g)||!g.length:l&&(!R&&(W||Tt(g))||Sa(g)&&!g||T&&!u5(a).isValid||N&&!d5(a).isValid)){const{value:M,message:j}=ld(l)?{value:!!l,message:l}:$o(l);if(M&&(P[v]={type:or.required,message:j,ref:$,...L(or.required,j)},!n))return S(j),P}if(!W&&(!Tt(f)||!Tt(h))){let M,j;const X=$o(h),F=$o(f);if(!Tt(g)&&!isNaN(g)){const ee=o.valueAsNumber||g&&+g;Tt(X.value)||(M=ee>X.value),Tt(F.value)||(j=ee<F.value)}else{const ee=o.valueAsDate||new Date(g),re=k=>new Date(new Date().toDateString()+" "+k),z=o.type=="time",_=o.type=="week";Kn(X.value)&&g&&(M=z?re(g)>re(X.value):_?g>X.value:ee>new Date(X.value)),Kn(F.value)&&g&&(j=z?re(g)<re(F.value):_?g<F.value:ee<new Date(F.value))}if((M||j)&&(se(!!M,X.message,F.message,or.max,or.min),!n))return S(P[v].message),P}if((u||d)&&!W&&(Kn(g)||i&&Array.isArray(g))){const M=$o(u),j=$o(d),X=!Tt(M.value)&&g.length>+M.value,F=!Tt(j.value)&&g.length<+j.value;if((X||F)&&(se(X,M.message,j.message),!n))return S(P[v].message),P}if(m&&!W&&Kn(g)){const{value:M,message:j}=$o(m);if(sc(M)&&!g.match(M)&&(P[v]={type:or.pattern,message:j,ref:o,...L(or.pattern,j)},!n))return S(j),P}if(x){if(Zr(x)){const M=await x(g,t),j=Tx(M,$);if(j&&(P[v]={...j,...L(or.validate,j.message)},!n))return S(j.message),P}else if(ct(x)){let M={};for(const j in x){if(!an(M)&&!n)break;const X=Tx(await x[j](g,t),$,j);X&&(M={...X,...L(j,X.message)},S(X.message),n&&(P[v]=M))}if(!an(M)&&(P[v]={ref:$,...M},!n))return P}}return S(!0),P};function mT(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=it(e)?r++:e[t[r++]];return e}function yT(e){for(const t in e)if(!it(e[t]))return!1;return!0}function yt(e,t){const n=Array.isArray(t)?t:Tm(t)?[t]:s5(t),r=n.length===1?e:mT(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(ct(r)&&an(r)||Array.isArray(r)&&yT(r))&&yt(e,n.slice(0,-1)),e}function Ah(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var lc=e=>Tt(e)||!a5(e);function Qi(e,t){if(lc(e)||lc(t))return e===t;if(pa(e)&&pa(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(pa(o)&&pa(a)||ct(o)&&ct(a)||Array.isArray(o)&&Array.isArray(a)?!Qi(o,a):o!==a)return!1}}return!0}var c5=e=>e.type==="select-multiple",vT=e=>Rm(e)||Vl(e),Rh=e=>ac(e)&&e.isConnected,f5=e=>{for(const t in e)if(Zr(e[t]))return!0;return!1};function uc(e,t={}){const n=Array.isArray(e);if(ct(e)||n)for(const r in e)Array.isArray(e[r])||ct(e[r])&&!f5(e[r])?(t[r]=Array.isArray(e[r])?[]:{},uc(e[r],t[r])):Tt(e[r])||(t[r]=!0);return t}function h5(e,t,n){const r=Array.isArray(e);if(ct(e)||r)for(const i in e)Array.isArray(e[i])||ct(e[i])&&!f5(e[i])?it(t)||lc(n[i])?n[i]=Array.isArray(e[i])?uc(e[i],[]):{...uc(e[i])}:h5(e[i],Tt(t)?{}:t[i],n[i]):n[i]=!Qi(e[i],t[i]);return n}var Fh=(e,t)=>h5(e,t,uc(t)),p5=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>it(e)?e:t?e===""?NaN:e&&+e:n&&Kn(e)?new Date(e):r?r(e):e;function Dh(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Am(t)?t.files:Rm(t)?d5(e.refs).value:c5(t)?[...t.selectedOptions].map(({value:n})=>n):Vl(t)?u5(e.refs).value:p5(it(t.value)?e.ref.value:t.value,e)}var xT=(e,t,n,r)=>{const i={};for(const o of e){const a=ce(t,o);a&&Le(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},hs=e=>it(e)?e:sc(e)?e.source:ct(e)?sc(e.value)?e.value.source:e.value:e,bT=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Rx(e,t,n){const r=ce(e,n);if(r||Tm(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=ce(t,o),l=ce(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var $T=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,wT=(e,t)=>!ql(ce(e,t)).length&&yt(e,t);const ST={mode:In.onSubmit,reValidateMode:In.onChange,shouldFocusError:!0};function CT(e={},t){let n={...ST,...e},r={submitCount:0,isDirty:!1,isLoading:Zr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},o=ct(n.defaultValues)||ct(n.values)?Wi(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Wi(o),l={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d,f=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Ah(),array:Ah(),state:Ah()},x=e.resetOptions&&e.resetOptions.keepDirtyValues,v=_x(n.mode),w=_x(n.reValidateMode),b=n.criteriaMode===In.all,p=O=>E=>{clearTimeout(f),f=setTimeout(O,E)},g=async O=>{if(h.isValid||O){const E=n.resolver?an((await W()).errors):await se(i,!0);E!==r.isValid&&m.state.next({isValid:E})}},$=O=>h.isValidating&&m.state.next({isValidating:O}),S=(O,E=[],A,oe,K=!0,q=!0)=>{if(oe&&A){if(l.action=!0,q&&Array.isArray(ce(i,O))){const ae=A(ce(i,O),oe.argA,oe.argB);K&&Le(i,O,ae)}if(q&&Array.isArray(ce(r.errors,O))){const ae=A(ce(r.errors,O),oe.argA,oe.argB);K&&Le(r.errors,O,ae),wT(r.errors,O)}if(h.touchedFields&&q&&Array.isArray(ce(r.touchedFields,O))){const ae=A(ce(r.touchedFields,O),oe.argA,oe.argB);K&&Le(r.touchedFields,O,ae)}h.dirtyFields&&(r.dirtyFields=Fh(o,a)),m.state.next({name:O,isDirty:j(O,E),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Le(a,O,E)},P=(O,E)=>{Le(r.errors,O,E),m.state.next({errors:r.errors})},N=(O,E,A,oe)=>{const K=ce(i,O);if(K){const q=ce(a,O,it(A)?ce(o,O):A);it(q)||oe&&oe.defaultChecked||E?Le(a,O,E?q:Dh(K._f)):ee(O,q),l.mount&&g()}},T=(O,E,A,oe,K)=>{let q=!1,ae=!1;const ve={name:O};if(!A||oe){h.isDirty&&(ae=r.isDirty,r.isDirty=ve.isDirty=j(),q=ae!==ve.isDirty);const le=Qi(ce(o,O),E);ae=ce(r.dirtyFields,O),le?yt(r.dirtyFields,O):Le(r.dirtyFields,O,!0),ve.dirtyFields=r.dirtyFields,q=q||h.dirtyFields&&ae!==!le}if(A){const le=ce(r.touchedFields,O);le||(Le(r.touchedFields,O,A),ve.touchedFields=r.touchedFields,q=q||h.touchedFields&&le!==A)}return q&&K&&m.state.next(ve),q?ve:{}},R=(O,E,A,oe)=>{const K=ce(r.errors,O),q=h.isValid&&Sa(E)&&r.isValid!==E;if(e.delayError&&A?(d=p(()=>P(O,A)),d(e.delayError)):(clearTimeout(f),d=null,A?Le(r.errors,O,A):yt(r.errors,O)),(A?!Qi(K,A):K)||!an(oe)||q){const ae={...oe,...q&&Sa(E)?{isValid:E}:{},errors:r.errors,name:O};r={...r,...ae},m.state.next(ae)}$(!1)},W=async O=>n.resolver(a,n.context,xT(O||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),L=async O=>{const{errors:E}=await W();if(O)for(const A of O){const oe=ce(E,A);oe?Le(r.errors,A,oe):yt(r.errors,A)}else r.errors=E;return E},se=async(O,E,A={valid:!0})=>{for(const oe in O){const K=O[oe];if(K){const{_f:q,...ae}=K;if(q){const ve=u.array.has(q.name),le=await Ax(K,a,b,n.shouldUseNativeValidation&&!E,ve);if(le[q.name]&&(A.valid=!1,E))break;!E&&(ce(le,q.name)?ve?gT(r.errors,le,q.name):Le(r.errors,q.name,le[q.name]):yt(r.errors,q.name))}ae&&await se(ae,E,A)}}return A.valid},M=()=>{for(const O of u.unMount){const E=ce(i,O);E&&(E._f.refs?E._f.refs.every(A=>!Rh(A)):!Rh(E._f.ref))&&I(O)}u.unMount=new Set},j=(O,E)=>(O&&E&&Le(a,O,E),!Qi(U(),o)),X=(O,E,A)=>pT(O,u,{...l.mount?a:it(E)?o:Kn(O)?{[O]:E}:E},A,E),F=O=>ql(ce(l.mount?a:o,O,e.shouldUnregister?ce(o,O,[]):[])),ee=(O,E,A={})=>{const oe=ce(i,O);let K=E;if(oe){const q=oe._f;q&&(!q.disabled&&Le(a,O,p5(E,q)),K=ac(q.ref)&&Tt(E)?"":E,c5(q.ref)?[...q.ref.options].forEach(ae=>ae.selected=K.includes(ae.value)):q.refs?Vl(q.ref)?q.refs.length>1?q.refs.forEach(ae=>(!ae.defaultChecked||!ae.disabled)&&(ae.checked=Array.isArray(K)?!!K.find(ve=>ve===ae.value):K===ae.value)):q.refs[0]&&(q.refs[0].checked=!!K):q.refs.forEach(ae=>ae.checked=ae.value===K):Am(q.ref)?q.ref.value="":(q.ref.value=K,q.ref.type||m.values.next({name:O,values:{...a}})))}(A.shouldDirty||A.shouldTouch)&&T(O,K,A.shouldTouch,A.shouldDirty,!0),A.shouldValidate&&k(O)},re=(O,E,A)=>{for(const oe in E){const K=E[oe],q=`${O}.${oe}`,ae=ce(i,q);(u.array.has(O)||!lc(K)||ae&&!ae._f)&&!pa(K)?re(q,K,A):ee(q,K,A)}},z=(O,E,A={})=>{const oe=ce(i,O),K=u.array.has(O),q=Wi(E);Le(a,O,q),K?(m.array.next({name:O,values:{...a}}),(h.isDirty||h.dirtyFields)&&A.shouldDirty&&m.state.next({name:O,dirtyFields:Fh(o,a),isDirty:j(O,q)})):oe&&!oe._f&&!Tt(q)?re(O,q,A):ee(O,q,A),kx(O,u)&&m.state.next({...r}),m.values.next({name:O,values:{...a}}),!l.mount&&t()},_=async O=>{const E=O.target;let A=E.name,oe=!0;const K=ce(i,A),q=()=>E.type?Dh(K._f):sT(O);if(K){let ae,ve;const le=q(),Ae=O.type===Ox.BLUR||O.type===Ox.FOCUS_OUT,rs=!bT(K._f)&&!n.resolver&&!ce(r.errors,A)&&!K._f.deps||$T(Ae,ce(r.touchedFields,A),r.isSubmitted,w,v),Oi=kx(A,u,Ae);Le(a,A,le),Ae?(K._f.onBlur&&K._f.onBlur(O),d&&d(0)):K._f.onChange&&K._f.onChange(O);const rn=T(A,le,Ae,!1),W9=!an(rn)||Oi;if(!Ae&&m.values.next({name:A,type:O.type,values:{...a}}),rs)return h.isValid&&g(),W9&&m.state.next({name:A,...Oi?{}:rn});if(!Ae&&Oi&&m.state.next({...r}),$(!0),n.resolver){const{errors:Cy}=await W([A]),Y9=Rx(r.errors,i,A),Py=Rx(Cy,i,Y9.name||A);ae=Py.error,A=Py.name,ve=an(Cy)}else ae=(await Ax(K,a,b,n.shouldUseNativeValidation))[A],oe=isNaN(le)||le===ce(a,A,le),oe&&(ae?ve=!1:h.isValid&&(ve=await se(i,!0)));oe&&(K._f.deps&&k(K._f.deps),R(A,ve,ae,rn))}},k=async(O,E={})=>{let A,oe;const K=Th(O);if($(!0),n.resolver){const q=await L(it(O)?O:K);A=an(q),oe=O?!K.some(ae=>ce(q,ae)):A}else O?(oe=(await Promise.all(K.map(async q=>{const ae=ce(i,q);return await se(ae&&ae._f?{[q]:ae}:ae)}))).every(Boolean),!(!oe&&!r.isValid)&&g()):oe=A=await se(i);return m.state.next({...!Kn(O)||h.isValid&&A!==r.isValid?{}:{name:O},...n.resolver||!O?{isValid:A}:{},errors:r.errors,isValidating:!1}),E.shouldFocus&&!oe&&j1(i,q=>q&&ce(r.errors,q),O?K:u.mount),oe},U=O=>{const E={...o,...l.mount?a:{}};return it(O)?E:Kn(O)?ce(E,O):O.map(A=>ce(E,A))},D=(O,E)=>({invalid:!!ce((E||r).errors,O),isDirty:!!ce((E||r).dirtyFields,O),isTouched:!!ce((E||r).touchedFields,O),error:ce((E||r).errors,O)}),H=O=>{O&&Th(O).forEach(E=>yt(r.errors,E)),m.state.next({errors:O?r.errors:{}})},V=(O,E,A)=>{const oe=(ce(i,O,{_f:{}})._f||{}).ref;Le(r.errors,O,{...E,ref:oe}),m.state.next({name:O,errors:r.errors,isValid:!1}),A&&A.shouldFocus&&oe&&oe.focus&&oe.focus()},ie=(O,E)=>Zr(O)?m.values.subscribe({next:A=>O(X(void 0,E),A)}):X(O,E,!0),I=(O,E={})=>{for(const A of O?Th(O):u.mount)u.mount.delete(A),u.array.delete(A),E.keepValue||(yt(i,A),yt(a,A)),!E.keepError&&yt(r.errors,A),!E.keepDirty&&yt(r.dirtyFields,A),!E.keepTouched&&yt(r.touchedFields,A),!n.shouldUnregister&&!E.keepDefaultValue&&yt(o,A);m.values.next({values:{...a}}),m.state.next({...r,...E.keepDirty?{isDirty:j()}:{}}),!E.keepIsValid&&g()},G=(O,E={})=>{let A=ce(i,O);const oe=Sa(E.disabled);return Le(i,O,{...A||{},_f:{...A&&A._f?A._f:{ref:{name:O}},name:O,mount:!0,...E}}),u.mount.add(O),A?oe&&Le(a,O,E.disabled?void 0:ce(a,O,Dh(A._f))):N(O,!0,E.value),{...oe?{disabled:E.disabled}:{},...n.shouldUseNativeValidation?{required:!!E.required,min:hs(E.min),max:hs(E.max),minLength:hs(E.minLength),maxLength:hs(E.maxLength),pattern:hs(E.pattern)}:{},name:O,onChange:_,onBlur:_,ref:K=>{if(K){G(O,E),A=ce(i,O);const q=it(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,ae=vT(q),ve=A._f.refs||[];if(ae?ve.find(le=>le===q):q===A._f.ref)return;Le(i,O,{_f:{...A._f,...ae?{refs:[...ve.filter(Rh),q,...Array.isArray(ce(o,O))?[{}]:[]],ref:{type:q.type,name:O}}:{ref:q}}}),N(O,!1,void 0,q)}else A=ce(i,O,{}),A._f&&(A._f.mount=!1),(n.shouldUnregister||E.shouldUnregister)&&!(uT(u.array,O)&&l.action)&&u.unMount.add(O)}}},Y=()=>n.shouldFocusError&&j1(i,O=>O&&ce(r.errors,O),u.mount),Oe=(O,E)=>async A=>{A&&(A.preventDefault&&A.preventDefault(),A.persist&&A.persist());let oe=Wi(a);if(m.state.next({isSubmitting:!0}),n.resolver){const{errors:K,values:q}=await W();r.errors=K,oe=q}else await se(i);yt(r.errors,"root"),an(r.errors)?(m.state.next({errors:{}}),await O(oe,A)):(E&&await E({...r.errors},A),Y(),setTimeout(Y)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:an(r.errors),submitCount:r.submitCount+1,errors:r.errors})},me=(O,E={})=>{ce(i,O)&&(it(E.defaultValue)?z(O,ce(o,O)):(z(O,E.defaultValue),Le(o,O,E.defaultValue)),E.keepTouched||yt(r.touchedFields,O),E.keepDirty||(yt(r.dirtyFields,O),r.isDirty=E.defaultValue?j(O,ce(o,O)):j()),E.keepError||(yt(r.errors,O),h.isValid&&g()),m.state.next({...r}))},ge=(O,E={})=>{const A=O||o,oe=Wi(A),K=O&&!an(O)?oe:o;if(E.keepDefaultValues||(o=A),!E.keepValues){if(E.keepDirtyValues||x)for(const q of u.mount)ce(r.dirtyFields,q)?Le(K,q,ce(a,q)):z(q,ce(K,q));else{if(Im&&it(O))for(const q of u.mount){const ae=ce(i,q);if(ae&&ae._f){const ve=Array.isArray(ae._f.refs)?ae._f.refs[0]:ae._f.ref;if(ac(ve)){const le=ve.closest("form");if(le){le.reset();break}}}}i={}}a=e.shouldUnregister?E.keepDefaultValues?Wi(o):{}:oe,m.array.next({values:{...K}}),m.values.next({values:{...K}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!h.isValid||!!E.keepIsValid,l.watch=!!e.shouldUnregister,m.state.next({submitCount:E.keepSubmitCount?r.submitCount:0,isDirty:E.keepDirty?r.isDirty:!!(E.keepDefaultValues&&!Qi(O,o)),isSubmitted:E.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:E.keepDirtyValues?r.dirtyFields:E.keepDefaultValues&&O?Fh(o,O):{},touchedFields:E.keepTouched?r.touchedFields:{},errors:E.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},he=(O,E)=>ge(Zr(O)?O(a):O,E);return{control:{register:G,unregister:I,getFieldState:D,_executeSchema:W,_getWatch:X,_getDirty:j,_updateValid:g,_removeUnmounted:M,_updateFieldArray:S,_getFieldArray:F,_reset:ge,_resetDefaultValues:()=>Zr(n.defaultValues)&&n.defaultValues().then(O=>{he(O,n.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:O=>{r={...r,...O}},_subjects:m,_proxyFormState:h,get _fields(){return i},get _formValues(){return a},get _state(){return l},set _state(O){l=O},get _defaultValues(){return o},get _names(){return u},set _names(O){u=O},get _formState(){return r},set _formState(O){r=O},get _options(){return n},set _options(O){n={...n,...O}}},trigger:k,register:G,handleSubmit:Oe,watch:ie,setValue:z,getValues:U,reset:he,resetField:me,clearErrors:H,unregister:I,setError:V,setFocus:(O,E={})=>{const A=ce(i,O),oe=A&&A._f;if(oe){const K=oe.refs?oe.refs[0]:oe.ref;K.focus&&(K.focus(),E.shouldSelect&&K.select())}},getFieldState:D}}function gf(e={}){const t=ne.useRef(),[n,r]=ne.useState({isDirty:!1,isValidating:!1,isLoading:Zr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Zr(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...CT(e,()=>r(o=>({...o}))),formState:n});const i=t.current.control;return i._options=e,hT({subject:i._subjects.state,next:o=>{fT(o,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),ne.useEffect(()=>{e.values&&!Qi(e.values,i._defaultValues)?i._reset(e.values,i._options.resetOptions):i._resetDefaultValues()},[e.values,i]),ne.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=cT(n,i),t.current}var Fx=function(e,t,n){if(e&&"reportValidity"in e){var r=ce(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},g5=function(e,t){var n=function(i){var o=t.fields[i];o&&o.ref&&"reportValidity"in o.ref?Fx(o.ref,i,e):o.refs&&o.refs.forEach(function(a){return Fx(a,i,e)})};for(var r in t.fields)n(r)},PT=function(e,t){t.shouldUseNativeValidation&&g5(e,t);var n={};for(var r in e){var i=ce(t.fields,r);Le(n,r,Object.assign(e[r]||{},{ref:i&&i.ref}))}return n},mf=function(e,t,n){return t===void 0&&(t={}),n===void 0&&(n={}),function(r,i,o){try{return Promise.resolve(function(a,l){try{var u=(t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:i}))).then(function(d){return o.shouldUseNativeValidation&&g5({},o),{values:n.raw?r:d,errors:{}}}))}catch(d){return l(d)}return u&&u.then?u.then(void 0,l):u}(0,function(a){if(!a.inner)throw a;return{values:{},errors:PT((l=a,u=!o.shouldUseNativeValidation&&o.criteriaMode==="all",(l.inner||[]).reduce(function(d,f){if(d[f.path]||(d[f.path]={message:f.message,type:f.type}),u){var h=d[f.path].types,m=h&&h[f.type];d[f.path]=l5(f.path,u,d,f.type,m?[].concat(m,f.message):f.message)}return d},{})),o)};var l,u}))}catch(a){return Promise.reject(a)}}};class Za{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.push(t),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(n=>n!==t),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}const vl=typeof window>"u"||"Deno"in window;function sn(){}function OT(e,t){return typeof e=="function"?e(t):e}function L1(e){return typeof e=="number"&&e>=0&&e!==1/0}function m5(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Ts(e,t,n){return Gl(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function _T(e,t,n){return Gl(e)?typeof t=="function"?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:typeof e=="function"?{...t,mutationFn:e}:{...e}}function Wr(e,t,n){return Gl(e)?[{...t,queryKey:e},n]:[e||{},t]}function Dx(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:a,stale:l}=e;if(Gl(a)){if(r){if(t.queryHash!==Fm(a,t.options))return!1}else if(!dc(t.queryKey,a))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||typeof i<"u"&&i!==t.state.fetchStatus||o&&!o(t))}function Mx(e,t){const{exact:n,fetching:r,predicate:i,mutationKey:o}=e;if(Gl(o)){if(!t.options.mutationKey)return!1;if(n){if(Ki(t.options.mutationKey)!==Ki(o))return!1}else if(!dc(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Fm(e,t){return((t==null?void 0:t.queryKeyHashFn)||Ki)(e)}function Ki(e){return JSON.stringify(e,(t,n)=>U1(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function dc(e,t){return y5(e,t)}function y5(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!y5(e[n],t[n])):!1}function v5(e,t){if(e===t)return e;const n=jx(e)&&jx(t);if(n||U1(e)&&U1(t)){const r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,a=n?[]:{};let l=0;for(let u=0;u<o;u++){const d=n?u:i[u];a[d]=v5(e[d],t[d]),a[d]===e[d]&&l++}return r===o&&l===r?e:a}return t}function z1(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function jx(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function U1(e){if(!Lx(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!Lx(n)||!n.hasOwnProperty("isPrototypeOf"))}function Lx(e){return Object.prototype.toString.call(e)==="[object Object]"}function Gl(e){return Array.isArray(e)}function x5(e){return new Promise(t=>{setTimeout(t,e)})}function zx(e){x5(0).then(e)}function kT(){if(typeof AbortController=="function")return new AbortController}function B1(e,t,n){return n.isDataEqual!=null&&n.isDataEqual(e,t)?e:typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?v5(e,t):t}class NT extends Za{constructor(){super(),this.setup=t=>{if(!vl&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(t){this.focused=t,t&&this.onFocus()}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const cc=new NT;class ET extends Za{constructor(){super(),this.setup=t=>{if(!vl&&window.addEventListener){const n=()=>t();return window.addEventListener("online",n,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(t){this.online=t,t&&this.onOnline()}onOnline(){this.listeners.forEach(t=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const fc=new ET;function IT(e){return Math.min(1e3*2**e,3e4)}function yf(e){return(e??"online")==="online"?fc.isOnline():!0}class b5{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function ud(e){return e instanceof b5}function $5(e){let t=!1,n=0,r=!1,i,o,a;const l=new Promise((b,p)=>{o=b,a=p}),u=b=>{r||(x(new b5(b)),e.abort==null||e.abort())},d=()=>{t=!0},f=()=>{t=!1},h=()=>!cc.isFocused()||e.networkMode!=="always"&&!fc.isOnline(),m=b=>{r||(r=!0,e.onSuccess==null||e.onSuccess(b),i==null||i(),o(b))},x=b=>{r||(r=!0,e.onError==null||e.onError(b),i==null||i(),a(b))},v=()=>new Promise(b=>{i=p=>{const g=r||!h();return g&&b(p),g},e.onPause==null||e.onPause()}).then(()=>{i=void 0,r||e.onContinue==null||e.onContinue()}),w=()=>{if(r)return;let b;try{b=e.fn()}catch(p){b=Promise.reject(p)}Promise.resolve(b).then(m).catch(p=>{var g,$;if(r)return;const S=(g=e.retry)!=null?g:3,P=($=e.retryDelay)!=null?$:IT,N=typeof P=="function"?P(n,p):P,T=S===!0||typeof S=="number"&&n<S||typeof S=="function"&&S(n,p);if(t||!T){x(p);return}n++,e.onFail==null||e.onFail(n,p),x5(N).then(()=>{if(h())return v()}).then(()=>{t?x(p):w()})})};return yf(e.networkMode)?w():v().then(w),{promise:l,cancel:u,continue:()=>(i==null?void 0:i())?l:Promise.resolve(),cancelRetry:d,continueRetry:f}}const Dm=console;function TT(){let e=[],t=0,n=f=>{f()},r=f=>{f()};const i=f=>{let h;t++;try{h=f()}finally{t--,t||l()}return h},o=f=>{t?e.push(f):zx(()=>{n(f)})},a=f=>(...h)=>{o(()=>{f(...h)})},l=()=>{const f=e;e=[],f.length&&zx(()=>{r(()=>{f.forEach(h=>{n(h)})})})};return{batch:i,batchCalls:a,schedule:o,setNotifyFunction:f=>{n=f},setBatchNotifyFunction:f=>{r=f}}}const Je=TT();class w5{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),L1(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t??(vl?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class AT extends w5{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||Dm,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||RT(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,n){const r=B1(this.state.data,t,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){this.dispatch({type:"setState",state:t,setStateOptions:n})}cancel(t){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(t),r?r.then(sn).catch(sn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!m5(this.state.dataUpdatedAt,t)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.indexOf(t)!==-1&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const x=this.observers.find(v=>v.options.queryFn);x&&this.setOptions(x.options)}Array.isArray(this.options.queryKey);const a=kT(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},u=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>{if(a)return this.abortSignalConsumed=!0,a.signal}})};u(l);const d=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn"),f={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:d};if(u(f),(r=this.options.behavior)==null||r.onFetch(f),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=f.fetchOptions)==null?void 0:i.meta)){var h;this.dispatch({type:"fetch",meta:(h=f.fetchOptions)==null?void 0:h.meta})}const m=x=>{if(ud(x)&&x.silent||this.dispatch({type:"error",error:x}),!ud(x)){var v,w,b,p;(v=(w=this.cache.config).onError)==null||v.call(w,x,this),(b=(p=this.cache.config).onSettled)==null||b.call(p,this.state.data,x,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=$5({fn:f.fetchFn,abort:a==null?void 0:a.abort.bind(a),onSuccess:x=>{var v,w,b,p;if(typeof x>"u"){m(new Error("undefined"));return}this.setData(x),(v=(w=this.cache.config).onSuccess)==null||v.call(w,x,this),(b=(p=this.cache.config).onSettled)==null||b.call(p,x,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:m,onFail:(x,v)=>{this.dispatch({type:"failed",failureCount:x,error:v})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:f.options.retry,retryDelay:f.options.retryDelay,networkMode:f.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const n=r=>{var i,o;switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=t.meta)!=null?i:null,fetchStatus:yf(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=t.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const a=t.error;return ud(a)&&a.revert&&this.revertState?{...this.revertState}:{...r,error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:a,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Je.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function RT(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class FT extends Za{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,n,r){var i;const o=n.queryKey,a=(i=n.queryHash)!=null?i:Fm(o,n);let l=this.get(a);return l||(l=new AT({cache:this,logger:t.getLogger(),queryKey:o,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(l)),l}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(r=>r!==t),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){Je.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,n){const[r]=Wr(t,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>Dx(r,i))}findAll(t,n){const[r]=Wr(t,n);return Object.keys(r).length>0?this.queries.filter(i=>Dx(r,i)):this.queries}notify(t){Je.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Je.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){Je.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class DT extends w5{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||Dm,this.observers=[],this.state=t.state||S5(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.indexOf(t)===-1&&(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(n=>n!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,n;return(t=(n=this.retryer)==null?void 0:n.continue())!=null?t:this.execute()}async execute(){const t=()=>{var T;return this.retryer=$5({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(R,W)=>{this.dispatch({type:"failed",failureCount:R,error:W})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(T=this.options.retry)!=null?T:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,a,l,u,d,f;if(!n){var h,m,x,v;this.dispatch({type:"loading",variables:this.options.variables}),await((h=(m=this.mutationCache.config).onMutate)==null?void 0:h.call(m,this.state.variables,this));const R=await((x=(v=this.options).onMutate)==null?void 0:x.call(v,this.state.variables));R!==this.state.context&&this.dispatch({type:"loading",context:R,variables:this.state.variables})}const T=await t();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,T,this.state.variables,this.state.context,this)),await((o=(a=this.options).onSuccess)==null?void 0:o.call(a,T,this.state.variables,this.state.context)),await((l=(u=this.mutationCache.config).onSettled)==null?void 0:l.call(u,T,null,this.state.variables,this.state.context,this)),await((d=(f=this.options).onSettled)==null?void 0:d.call(f,T,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:T}),T}catch(T){try{var w,b,p,g,$,S,P,N;throw await((w=(b=this.mutationCache.config).onError)==null?void 0:w.call(b,T,this.state.variables,this.state.context,this)),await((p=(g=this.options).onError)==null?void 0:p.call(g,T,this.state.variables,this.state.context)),await(($=(S=this.mutationCache.config).onSettled)==null?void 0:$.call(S,void 0,T,this.state.variables,this.state.context,this)),await((P=(N=this.options).onSettled)==null?void 0:P.call(N,void 0,T,this.state.variables,this.state.context)),T}finally{this.dispatch({type:"error",error:T})}}}dispatch(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!yf(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...r,...t.state}}};this.state=n(this.state),Je.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function S5(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class MT extends Za{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,n,r){const i=new DT({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(n=>n!==t),this.notify({type:"removed",mutation:t})}clear(){Je.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(n=>Mx(t,n))}findAll(t){return this.mutations.filter(n=>Mx(t,n))}notify(t){Je.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return Je.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(sn)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function jT(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,o,a;const l=(t=e.fetchOptions)==null||(n=t.meta)==null?void 0:n.refetchPage,u=(r=e.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,d=u==null?void 0:u.pageParam,f=(u==null?void 0:u.direction)==="forward",h=(u==null?void 0:u.direction)==="backward",m=((o=e.state.data)==null?void 0:o.pages)||[],x=((a=e.state.data)==null?void 0:a.pageParams)||[];let v=x,w=!1;const b=N=>{Object.defineProperty(N,"signal",{enumerable:!0,get:()=>{var T;if((T=e.signal)!=null&&T.aborted)w=!0;else{var R;(R=e.signal)==null||R.addEventListener("abort",()=>{w=!0})}return e.signal}})},p=e.options.queryFn||(()=>Promise.reject("Missing queryFn")),g=(N,T,R,W)=>(v=W?[T,...v]:[...v,T],W?[R,...N]:[...N,R]),$=(N,T,R,W)=>{if(w)return Promise.reject("Cancelled");if(typeof R>"u"&&!T&&N.length)return Promise.resolve(N);const L={queryKey:e.queryKey,pageParam:R,meta:e.options.meta};b(L);const se=p(L);return Promise.resolve(se).then(j=>g(N,R,j,W))};let S;if(!m.length)S=$([]);else if(f){const N=typeof d<"u",T=N?d:Ux(e.options,m);S=$(m,N,T)}else if(h){const N=typeof d<"u",T=N?d:LT(e.options,m);S=$(m,N,T,!0)}else{v=[];const N=typeof e.options.getNextPageParam>"u";S=(l&&m[0]?l(m[0],0,m):!0)?$([],N,x[0]):Promise.resolve(g([],x[0],m[0]));for(let R=1;R<m.length;R++)S=S.then(W=>{if(l&&m[R]?l(m[R],R,m):!0){const se=N?x[R]:Ux(e.options,W);return $(W,N,se)}return Promise.resolve(g(W,x[R],m[R]))})}return S.then(N=>({pages:N,pageParams:v}))}}}}function Ux(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function LT(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}class zT{constructor(t={}){this.queryCache=t.queryCache||new FT,this.mutationCache=t.mutationCache||new MT,this.logger=t.logger||Dm,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=cc.subscribe(()=>{cc.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=fc.subscribe(()=>{fc.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,n;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(t,n){const[r]=Wr(t,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state.data}ensureQueryData(t,n,r){const i=Ts(t,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(t,n,r){const i=this.queryCache.find(t),o=i==null?void 0:i.state.data,a=OT(n,o);if(typeof a>"u")return;const l=Ts(t),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(a,{...r,manual:!0})}setQueriesData(t,n,r){return Je.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state}removeQueries(t,n){const[r]=Wr(t,n),i=this.queryCache;Je.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(t,n,r){const[i,o]=Wr(t,n,r),a=this.queryCache,l={type:"active",...i};return Je.batch(()=>(a.findAll(i).forEach(u=>{u.reset()}),this.refetchQueries(l,o)))}cancelQueries(t,n,r){const[i,o={}]=Wr(t,n,r);typeof o.revert>"u"&&(o.revert=!0);const a=Je.batch(()=>this.queryCache.findAll(i).map(l=>l.cancel(o)));return Promise.all(a).then(sn).catch(sn)}invalidateQueries(t,n,r){const[i,o]=Wr(t,n,r);return Je.batch(()=>{var a,l;if(this.queryCache.findAll(i).forEach(d=>{d.invalidate()}),i.refetchType==="none")return Promise.resolve();const u={...i,type:(a=(l=i.refetchType)!=null?l:i.type)!=null?a:"active"};return this.refetchQueries(u,o)})}refetchQueries(t,n,r){const[i,o]=Wr(t,n,r),a=Je.batch(()=>this.queryCache.findAll(i).filter(u=>!u.isDisabled()).map(u=>{var d;return u.fetch(void 0,{...o,cancelRefetch:(d=o==null?void 0:o.cancelRefetch)!=null?d:!0,meta:{refetchPage:i.refetchPage}})}));let l=Promise.all(a).then(sn);return o!=null&&o.throwOnError||(l=l.catch(sn)),l}fetchQuery(t,n,r){const i=Ts(t,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const a=this.queryCache.build(this,o);return a.isStaleByTime(o.staleTime)?a.fetch(o):Promise.resolve(a.state.data)}prefetchQuery(t,n,r){return this.fetchQuery(t,n,r).then(sn).catch(sn)}fetchInfiniteQuery(t,n,r){const i=Ts(t,n,r);return i.behavior=jT(),this.fetchQuery(i)}prefetchInfiniteQuery(t,n,r){return this.fetchInfiniteQuery(t,n,r).then(sn).catch(sn)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,n){const r=this.queryDefaults.find(i=>Ki(t)===Ki(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:t,defaultOptions:n})}getQueryDefaults(t){if(!t)return;const n=this.queryDefaults.find(r=>dc(t,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(t,n){const r=this.mutationDefaults.find(i=>Ki(t)===Ki(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:t,defaultOptions:n})}getMutationDefaults(t){if(!t)return;const n=this.mutationDefaults.find(r=>dc(t,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Fm(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class UT extends Za{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Bx(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return H1(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return H1(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),z1(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const o=this.hasListeners();o&&Hx(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(n),o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const a=this.computeRefetchInterval();o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(sn)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),vl||this.currentResult.isStale||!L1(this.options.staleTime))return;const n=m5(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(vl||this.options.enabled===!1||!L1(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||cc.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const r=this.currentQuery,i=this.options,o=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,u=t!==r,d=u?t.state:this.currentQueryInitialState,f=u?this.currentResult:this.previousQueryResult,{state:h}=t;let{dataUpdatedAt:m,error:x,errorUpdatedAt:v,fetchStatus:w,status:b}=h,p=!1,g=!1,$;if(n._optimisticResults){const R=this.hasListeners(),W=!R&&Bx(t,n),L=R&&Hx(t,r,n,i);(W||L)&&(w=yf(t.options.networkMode)?"fetching":"paused",m||(b="loading")),n._optimisticResults==="isRestoring"&&(w="idle")}if(n.keepPreviousData&&!h.dataUpdatedAt&&f!=null&&f.isSuccess&&b!=="error")$=f.data,m=f.dataUpdatedAt,b=f.status,p=!0;else if(n.select&&typeof h.data<"u")if(o&&h.data===(a==null?void 0:a.data)&&n.select===this.selectFn)$=this.selectResult;else try{this.selectFn=n.select,$=n.select(h.data),$=B1(o==null?void 0:o.data,$,n),this.selectResult=$,this.selectError=null}catch(R){this.selectError=R}else $=h.data;if(typeof n.placeholderData<"u"&&typeof $>"u"&&b==="loading"){let R;if(o!=null&&o.isPlaceholderData&&n.placeholderData===(l==null?void 0:l.placeholderData))R=o.data;else if(R=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof R<"u")try{R=n.select(R),this.selectError=null}catch(W){this.selectError=W}typeof R<"u"&&(b="success",$=B1(o==null?void 0:o.data,R,n),g=!0)}this.selectError&&(x=this.selectError,$=this.selectResult,v=Date.now(),b="error");const S=w==="fetching",P=b==="loading",N=b==="error";return{status:b,fetchStatus:w,isLoading:P,isSuccess:b==="success",isError:N,isInitialLoading:P&&S,data:$,dataUpdatedAt:m,error:x,errorUpdatedAt:v,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>d.dataUpdateCount||h.errorUpdateCount>d.errorUpdateCount,isFetching:S,isRefetching:S&&!P,isLoadingError:N&&h.dataUpdatedAt===0,isPaused:w==="paused",isPlaceholderData:g,isPreviousData:p,isRefetchError:N&&h.dataUpdatedAt!==0,isStale:Mm(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,z1(r,n))return;this.currentResult=r;const i={cache:!0},o=()=>{if(!n)return!0;const{notifyOnChangeProps:a}=this.options;if(a==="all"||!a&&!this.trackedProps.size)return!0;const l=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&l.add("error"),Object.keys(this.currentResult).some(u=>{const d=u;return this.currentResult[d]!==n[d]&&l.has(d)})};(t==null?void 0:t.listeners)!==!1&&o()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!ud(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Je.batch(()=>{if(t.onSuccess){var n,r,i,o;(n=(r=this.options).onSuccess)==null||n.call(r,this.currentResult.data),(i=(o=this.options).onSettled)==null||i.call(o,this.currentResult.data,null)}else if(t.onError){var a,l,u,d;(a=(l=this.options).onError)==null||a.call(l,this.currentResult.error),(u=(d=this.options).onSettled)==null||u.call(d,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(f=>{f(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function BT(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Bx(e,t){return BT(e,t)||e.state.dataUpdatedAt>0&&H1(e,t,t.refetchOnMount)}function H1(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Mm(e,t)}return!1}function Hx(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Mm(e,n)}function Mm(e,t){return e.isStaleByTime(t.staleTime)}let HT=class extends Za{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=this.client.defaultMutationOptions(t),z1(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:S5(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Je.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,r,i,o;(n=(r=this.mutateOptions).onSuccess)==null||n.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(i=(o=this.mutateOptions).onSettled)==null||i.call(o,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var a,l,u,d;(a=(l=this.mutateOptions).onError)==null||a.call(l,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(u=(d=this.mutateOptions).onSettled)==null||u.call(d,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(f=>{f(this.currentResult)})})}};var hc={},WT={get exports(){return hc},set exports(e){hc=e}},C5={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=C;function YT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var VT=typeof Object.is=="function"?Object.is:YT,qT=Ua.useState,GT=Ua.useEffect,QT=Ua.useLayoutEffect,KT=Ua.useDebugValue;function ZT(e,t){var n=t(),r=qT({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return QT(function(){i.value=n,i.getSnapshot=t,Mh(i)&&o({inst:i})},[e,n,t]),GT(function(){return Mh(i)&&o({inst:i}),e(function(){Mh(i)&&o({inst:i})})},[e]),KT(n),n}function Mh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!VT(e,n)}catch{return!0}}function JT(e,t){return t()}var XT=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?JT:ZT;C5.useSyncExternalStore=Ua.useSyncExternalStore!==void 0?Ua.useSyncExternalStore:XT;(function(e){e.exports=C5})(WT);const P5=hc.useSyncExternalStore,Wx=C.createContext(void 0),O5=C.createContext(!1);function _5(e,t){return e||(t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Wx),window.ReactQueryClientContext):Wx)}const Mt=({context:e}={})=>{const t=C.useContext(_5(e,C.useContext(O5)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},eA=({client:e,children:t,context:n,contextSharing:r=!1})=>{C.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const i=_5(n,r);return C.createElement(O5.Provider,{value:!n&&r},C.createElement(i.Provider,{value:e},t))},k5=C.createContext(!1),tA=()=>C.useContext(k5);k5.Provider;function nA(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const rA=C.createContext(nA()),iA=()=>C.useContext(rA);function N5(e,t){return typeof e=="function"?e(...t):!!e}const oA=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},aA=e=>{C.useEffect(()=>{e.clearReset()},[e])},sA=({result:e,errorResetBoundary:t,useErrorBoundary:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&N5(n,[e.error,r]),lA=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},uA=(e,t)=>e.isLoading&&e.isFetching&&!t,dA=(e,t,n)=>(e==null?void 0:e.suspense)&&uA(t,n),cA=(e,t,n)=>t.fetchOptimistic(e).then(({data:r})=>{e.onSuccess==null||e.onSuccess(r),e.onSettled==null||e.onSettled(r,null)}).catch(r=>{n.clearReset(),e.onError==null||e.onError(r),e.onSettled==null||e.onSettled(void 0,r)});function fA(e,t){const n=Mt({context:e.context}),r=tA(),i=iA(),o=n.defaultQueryOptions(e);o._optimisticResults=r?"isRestoring":"optimistic",o.onError&&(o.onError=Je.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=Je.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=Je.batchCalls(o.onSettled)),lA(o),oA(o,i),aA(i);const[a]=C.useState(()=>new t(n,o)),l=a.getOptimisticResult(o);if(P5(C.useCallback(u=>r?()=>{}:a.subscribe(Je.batchCalls(u)),[a,r]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),C.useEffect(()=>{a.setOptions(o,{listeners:!1})},[o,a]),dA(o,l,r))throw cA(o,a,i);if(sA({result:l,errorResetBoundary:i,useErrorBoundary:o.useErrorBoundary,query:a.getCurrentQuery()}))throw l.error;return o.notifyOnChangeProps?l:a.trackResult(l)}function Ke(e,t,n){const r=Ts(e,t,n);return fA(r,UT)}function $t(e,t,n){const r=_T(e,t,n),i=Mt({context:r.context}),[o]=C.useState(()=>new HT(i,r));C.useEffect(()=>{o.setOptions(r)},[o,r]);const a=P5(C.useCallback(u=>o.subscribe(Je.batchCalls(u)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),l=C.useCallback((u,d)=>{o.mutate(u,d).catch(hA)},[o]);if(a.error&&N5(o.options.useErrorBoundary,[a.error]))throw a.error;return{...a,mutate:l,mutateAsync:a.mutate}}function hA(){}const pA=()=>{var x,v,w,b,p,g,$;const[e,t]=C.useState(),[n,r]=C.useState(!0),i=n!==!0,o=nt(),a=Yl({firstName:Ot().required("This field cannot be empty"),lastName:Ot().required("This field cannot be empty"),email:Ot().email("this is not a valid email").required("This field cannot be empty"),phoneNum:Em().required("This field cannot be empty"),companyName:Ot().required("This field cannot be empty"),password:Ot().required("This field cannot be empty"),confirmPassword:Ot().oneOf([Xw("password"),null],"Password must match")}).required(),{handleSubmit:l,formState:{errors:u},reset:d,register:f}=gf({resolver:mf(a)}),h=$t({mutationKey:["createseler"],mutationFn:uI,onSuccess:S=>{console.log(S),o("/auth/personalinfo")},onError:S=>{alert(S.message)}}),m=l(S=>{h.mutate(S)});return s("div",{children:s($A,{children:y(bA,{children:[s(xA,{children:"Seller Account"}),s(vA,{children:"Please enter every necessary information"}),y(yA,{onSubmit:m,children:[y(Ei,{children:[s(Ni,{children:"Full Name"}),s(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(wo,{placeholder:"Full Name",...f("firstName")})}),s(_i,{children:(u==null?void 0:u.firstName)&&((x=u==null?void 0:u.firstName)==null?void 0:x.message)})]}),y(Ei,{children:[s(Ni,{children:"Last Name"}),s(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(wo,{placeholder:"Last Name",...f("lastName")})}),s(_i,{children:(u==null?void 0:u.lastName)&&((v=u==null?void 0:u.lastName)==null?void 0:v.message)})]}),y(Ei,{children:[s(Ni,{children:"Email Address"}),s(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(wo,{placeholder:"Email Address",...f("email")})}),s(_i,{children:(u==null?void 0:u.email)&&((w=u==null?void 0:u.email)==null?void 0:w.message)})]}),y(Ei,{children:[s(Ni,{children:"Company Name"}),s(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(wo,{placeholder:"Company Name",...f("companyName")})}),s(_i,{children:(u==null?void 0:u.companyName)&&((b=u==null?void 0:u.companyName)==null?void 0:b.message)})]}),y(Ei,{children:[s(Ni,{children:"Phone Number"}),s(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(vm,{className:"phone",defaultCountry:"NG",...f("phoneNum"),placeholder:"Phone Number",value:e,onChange:t})}),s(_i,{children:(u==null?void 0:u.phoneNum)&&((p=u==null?void 0:u.phoneNum)==null?void 0:p.message)})]}),y(Ei,{children:[s(Ni,{children:"Password"}),y(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(wo,{placeholder:"Password",type:n?"password":"text",id:"pass",...f("password")}),s(Yx,{onClick:()=>{r(i)},children:n===!1?s(La,{}):s(ja,{})})]}),s(_i,{children:(u==null?void 0:u.password)&&((g=u==null?void 0:u.password)==null?void 0:g.message)})]}),y(Ei,{children:[s(Ni,{children:"Confirm Password"}),y(ki,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(wo,{placeholder:"Confirm Password",type:n?"password":"text",id:"pass",...f("confirmPassword")}),s(Yx,{onClick:()=>{r(i)},children:n===!1?s(La,{}):s(ja,{})})]}),s(_i,{children:(u==null?void 0:u.confirmPassword)&&(($=u==null?void 0:u.confirmPassword)==null?void 0:$.message)})]}),s(mA,{type:"submit",disabled:h.status==="loading",children:h.status==="loading"?"Loading...":"Continue"}),y(gA,{children:["Already have an account?"," ",s(be,{to:"/auth/signin",style:{textDecoration:"none"},children:s("span",{children:"LogIn"})})]})]})]})})})};c.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`;const gA=c.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,mA=c.button`
    width: 360px;
    height: 40px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
        font-size: 16px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,_i=c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,Yx=c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,ki=c.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    .PhoneInputInput {
    width: 300px;
    height: 30px;
    outline: none;
    border: 0px;
  }

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,wo=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,Ni=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Ei=c.div`
    margin-bottom: 10px;
`,yA=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,vA=c.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,xA=c.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,bA=c.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
    /* background-color: gold; */

    /* @media (max-width: 370px){
        width: 90%;
    } */
`,$A=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,wA=()=>{var h,m;const e=nt(),t=Yl({email:Ot().email("this is not a valid email").required("This field cannot be empty"),password:Ot().required("This field cannot be empty")}).required(),[n,r]=C.useState(!0),i=n!==!0,{handleSubmit:o,formState:{errors:a},reset:l,register:u}=gf({resolver:mf(t)}),d=$t({mutationKey:["seller"],mutationFn:fI,onSuccess:x=>{e("/seller-dashboard")},onError:x=>{console.log(x.message)}}),f=o(x=>{d.mutate(x)});return s("div",{children:s(IA,{children:y(EA,{children:[s(NA,{children:"Seller Account"}),s(kA,{children:"Please enter every necessary information"}),y(_A,{onSubmit:f,children:[y(Kx,{children:[s(Qx,{children:"Email Address"}),s(qx,{style:{border:`${a!=null&&a.email?"1px solid red":"1px solid lightgray"}`},children:s(Gx,{placeholder:"Email Address",type:"email",...u("email")})}),s(Vx,{children:(a==null?void 0:a.email)&&((h=a==null?void 0:a.email)==null?void 0:h.message)})]}),y(Kx,{children:[s(Qx,{children:"Password"}),y(qx,{style:{border:`${a!=null&&a.password?"1px solid red":"1px solid lightgray"}`},children:[s(Gx,{placeholder:"Password",type:n?"password":"text",id:"pass",...u("password")}),s(OA,{onClick:()=>{r(i)},children:n===!1?s(La,{}):s(ja,{})})]}),s(Vx,{children:(a==null?void 0:a.password)&&((m=a==null?void 0:a.password)==null?void 0:m.message)})]}),s(SA,{children:"Forget Password?"}),s(PA,{type:"submit",disabled:d.status==="loading",children:d.status==="loading"?"Loading...":"Continue"}),y(CA,{children:["Don't have an account? ",s(be,{to:"/auth",style:{textDecoration:"none"},children:s("span",{children:"Sign Up"})})]})]})]})})})},SA=c.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 360px;
`,CA=c.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,PA=c.button`
    width: 360px;
    height: 50px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;
`,Vx=c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,OA=c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,qx=c.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
`,Gx=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,Qx=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Kx=c.div`
    margin-bottom: 10px;
`,_A=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,kA=c.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,NA=c.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,EA=c.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
`,IA=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,TA="/assets/camera-91f8abb7.png",AA=()=>{const e=nt(),[t,n]=C.useState(TA),[r,i]=C.useState(""),[o,a]=C.useState(""),[l,u]=C.useState(""),[d,f]=C.useState(""),h=b=>{const p=b.target.files[0],g=URL.createObjectURL(p);n(g),i(p)},m=b=>{const p=b.target.files[0];f(p)},x=$t({mutationFn:gI,onSuccess:b=>{console.log(b),e("/auth/bankdetails")},onError:b=>{console.log(b.message)}}),v=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(HA,{children:y(BA,{children:[s(UA,{children:"Business Information"}),s(zA,{children:"Enter every necessary details to create your own seller account"}),y(LA,{onSubmit:b=>{b.preventDefault();const p=v._id,g=new FormData;g.append("IDtype",l),g.append("CACNumber",o),g.append("avatar",r),g.append("avatar",d),x.mutate({id:p,formData:g})},type:"multipart/form-data",children:[y(zh,{children:[s(Lh,{children:"Business owner or legal representative ID type"}),s(jh,{children:y(RA,{value:l,onChange:b=>{u(b.target.value)},children:[s("option",{children:"Select ID type"}),s("option",{children:"NIN"}),s("option",{children:"BVN"})]})})]}),y(zh,{children:[s(Lh,{children:"Upload a copy of your valid ID card"}),s(jh,{children:s(Zx,{type:"file",id:"pass",onChange:m})})]}),y(zh,{children:[s(Lh,{children:"CAC Registration Number"}),s(jh,{children:s(Zx,{placeholder:"NIN OR BVN",type:"number",value:o,onChange:b=>{a(b.target.value)}})})]}),y(MA,{children:[s(FA,{type:"file",onChange:h}),s(DA,{src:t})]}),s(jA,{type:"submit",disabled:x.status==="loading",children:x.status==="loading"?"Loading...":"Continue"})]})]})})})},RA=c.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`,FA=c.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* opacity: 0px; */
    display: none;
`,DA=c.img`
    
    /* background-color: gold; */
    width: 80%;
    height: 70%;
    border-radius: 5px;
`,MA=c.label`
    width: 220px;
    height: 220px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,jA=c.button`
    width: 360px;
    height: 50px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;
`;c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`;const jh=c.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
`,Zx=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
    ::-webkit-outer-spin-button{
    appearance: none;
  }
  ::-webkit-inner-spin-button{
    appearance: none;
  }
`,Lh=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,zh=c.div`
    margin-bottom: 10px;
`,LA=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,zA=c.div`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    width: 300px;
    margin-bottom: 20px;

`,UA=c.div`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
`,BA=c.div`
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
`,HA=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;function WA(e){return we({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"}}]})(e)}function YA(e){return we({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(e)}function VA(e){return we({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"}},{tag:"path",attr:{d:"M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"}}]})(e)}function qA(e){return we({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]})(e)}var W1={},GA={get exports(){return W1},set exports(e){W1=e}},E5={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf=C,QA=hc;function KA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ZA=typeof Object.is=="function"?Object.is:KA,JA=QA.useSyncExternalStore,XA=vf.useRef,eR=vf.useEffect,tR=vf.useMemo,nR=vf.useDebugValue;E5.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=XA(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=tR(function(){function u(x){if(!d){if(d=!0,f=x,x=r(x),i!==void 0&&a.hasValue){var v=a.value;if(i(v,x))return h=v}return h=x}if(v=h,ZA(f,x))return v;var w=r(x);return i!==void 0&&i(v,w)?v:(f=x,h=w)}var d=!1,f,h,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,i]);var l=JA(e,o[0],o[1]);return eR(function(){a.hasValue=!0,a.value=l},[l]),nR(l),l};(function(e){e.exports=E5})(GA);function rR(e){e()}let I5=rR;const iR=e=>I5=e,oR=()=>I5,vi=C.createContext(null);function T5(){return C.useContext(vi)}const aR=()=>{throw new Error("uSES not initialized!")};let A5=aR;const sR=e=>{A5=e},lR=(e,t)=>e===t;function uR(e=vi){const t=e===vi?T5:()=>C.useContext(e);return function(r,i=lR){const{store:o,subscription:a,getServerState:l}=t(),u=A5(a.addNestedSub,o.getState,l||o.getState,r,i);return C.useDebugValue(u),u}}const xi=uR();var Jx={},dR={get exports(){return Jx},set exports(e){Jx=e}},Te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=Symbol.for("react.element"),Lm=Symbol.for("react.portal"),xf=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),wf=Symbol.for("react.provider"),Sf=Symbol.for("react.context"),cR=Symbol.for("react.server_context"),Cf=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),Of=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),kf=Symbol.for("react.lazy"),fR=Symbol.for("react.offscreen"),R5;R5=Symbol.for("react.module.reference");function vn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case jm:switch(e=e.type,e){case xf:case $f:case bf:case Pf:case Of:return e;default:switch(e=e&&e.$$typeof,e){case cR:case Sf:case Cf:case kf:case _f:case wf:return e;default:return t}}case Lm:return t}}}Te.ContextConsumer=Sf;Te.ContextProvider=wf;Te.Element=jm;Te.ForwardRef=Cf;Te.Fragment=xf;Te.Lazy=kf;Te.Memo=_f;Te.Portal=Lm;Te.Profiler=$f;Te.StrictMode=bf;Te.Suspense=Pf;Te.SuspenseList=Of;Te.isAsyncMode=function(){return!1};Te.isConcurrentMode=function(){return!1};Te.isContextConsumer=function(e){return vn(e)===Sf};Te.isContextProvider=function(e){return vn(e)===wf};Te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jm};Te.isForwardRef=function(e){return vn(e)===Cf};Te.isFragment=function(e){return vn(e)===xf};Te.isLazy=function(e){return vn(e)===kf};Te.isMemo=function(e){return vn(e)===_f};Te.isPortal=function(e){return vn(e)===Lm};Te.isProfiler=function(e){return vn(e)===$f};Te.isStrictMode=function(e){return vn(e)===bf};Te.isSuspense=function(e){return vn(e)===Pf};Te.isSuspenseList=function(e){return vn(e)===Of};Te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xf||e===$f||e===bf||e===Pf||e===Of||e===fR||typeof e=="object"&&e!==null&&(e.$$typeof===kf||e.$$typeof===_f||e.$$typeof===wf||e.$$typeof===Sf||e.$$typeof===Cf||e.$$typeof===R5||e.getModuleId!==void 0)};Te.typeOf=vn;(function(e){e.exports=Te})(dR);function hR(){const e=oR();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Xx={notify(){},get:()=>[]};function pR(e,t){let n,r=Xx;function i(h){return u(),r.subscribe(h)}function o(){r.notify()}function a(){f.onStateChange&&f.onStateChange()}function l(){return!!n}function u(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=hR())}function d(){n&&(n(),n=void 0,r.clear(),r=Xx)}const f={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:l,trySubscribe:u,tryUnsubscribe:d,getListeners:()=>r};return f}const gR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mR=gR?C.useLayoutEffect:C.useEffect;function yR({store:e,context:t,children:n,serverState:r}){const i=C.useMemo(()=>{const l=pR(e);return{store:e,subscription:l,getServerState:r?()=>r:void 0}},[e,r]),o=C.useMemo(()=>e.getState(),[e]);mR(()=>{const{subscription:l}=i;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[i,o]);const a=t||vi;return ne.createElement(a.Provider,{value:i},n)}function F5(e=vi){const t=e===vi?T5:()=>C.useContext(e);return function(){const{store:r}=t();return r}}const vR=F5();function xR(e=vi){const t=e===vi?vR:F5(e);return function(){return t().dispatch}}const Ja=xR();sR(W1.useSyncExternalStoreWithSelector);iR(xd.unstable_batchedUpdates);function Tn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function bi(e){return!!e&&!!e[We]}function kr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===kR}(e)||Array.isArray(e)||!!e[a3]||!!(!((t=e.constructor)===null||t===void 0)&&t[a3])||zm(e)||Um(e))}function uo(e,t,n){n===void 0&&(n=!1),Xa(e)===0?(n?Object.keys:Pa)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Xa(e){var t=e[We];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:zm(e)?2:Um(e)?3:0}function Ca(e,t){return Xa(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function bR(e,t){return Xa(e)===2?e.get(t):e[t]}function D5(e,t,n){var r=Xa(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function M5(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function zm(e){return OR&&e instanceof Map}function Um(e){return _R&&e instanceof Set}function Yi(e){return e.o||e.t}function Bm(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=L5(e);delete t[We];for(var n=Pa(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Hm(e,t){return t===void 0&&(t=!1),Wm(e)||bi(e)||!kr(e)||(Xa(e)>1&&(e.set=e.add=e.clear=e.delete=$R),Object.freeze(e),t&&uo(e,function(n,r){return Hm(r,!0)},!0)),e}function $R(){Tn(2)}function Wm(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Xn(e){var t=G1[e];return t||Tn(18,e),t}function wR(e,t){G1[e]||(G1[e]=t)}function Y1(){return xl}function Uh(e,t){t&&(Xn("Patches"),e.u=[],e.s=[],e.v=t)}function pc(e){V1(e),e.p.forEach(SR),e.p=null}function V1(e){e===xl&&(xl=e.l)}function e3(e){return xl={p:[],l:xl,h:e,m:!0,_:0}}function SR(e){var t=e[We];t.i===0||t.i===1?t.j():t.g=!0}function Bh(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Xn("ES5").S(t,e,r),r?(n[We].P&&(pc(t),Tn(4)),kr(e)&&(e=gc(t,e),t.l||mc(t,e)),t.u&&Xn("Patches").M(n[We].t,e,t.u,t.s)):e=gc(t,n,[]),pc(t),t.u&&t.v(t.u,t.s),e!==j5?e:void 0}function gc(e,t,n){if(Wm(t))return t;var r=t[We];if(!r)return uo(t,function(l,u){return t3(e,r,t,l,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return mc(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Bm(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),uo(o,function(l,u){return t3(e,r,i,l,u,n,a)}),mc(e,i,!1),n&&e.u&&Xn("Patches").N(r,n,e.u,e.s)}return r.o}function t3(e,t,n,r,i,o,a){if(bi(i)){var l=gc(e,i,o&&t&&t.i!==3&&!Ca(t.R,r)?o.concat(r):void 0);if(D5(n,r,l),!bi(l))return;e.m=!1}else a&&n.add(i);if(kr(i)&&!Wm(i)){if(!e.h.D&&e._<1)return;gc(e,i),t&&t.A.l||mc(e,i)}}function mc(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Hm(t,n)}function Hh(e,t){var n=e[We];return(n?Yi(n):e)[t]}function n3(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function qr(e){e.P||(e.P=!0,e.l&&qr(e.l))}function Wh(e){e.o||(e.o=Bm(e.t))}function q1(e,t,n){var r=zm(t)?Xn("MapSet").F(t,n):Um(t)?Xn("MapSet").T(t,n):e.O?function(i,o){var a=Array.isArray(i),l={i:a?1:0,A:o?o.A:Y1(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},u=l,d=bl;a&&(u=[l],d=As);var f=Proxy.revocable(u,d),h=f.revoke,m=f.proxy;return l.k=m,l.j=h,m}(t,n):Xn("ES5").J(t,n);return(n?n.A:Y1()).p.push(r),r}function CR(e){return bi(e)||Tn(22,e),function t(n){if(!kr(n))return n;var r,i=n[We],o=Xa(n);if(i){if(!i.P&&(i.i<4||!Xn("ES5").K(i)))return i.t;i.I=!0,r=r3(n,o),i.I=!1}else r=r3(n,o);return uo(r,function(a,l){i&&bR(i.t,a)===l||D5(r,a,t(l))}),o===3?new Set(r):r}(e)}function r3(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Bm(e)}function PR(){function e(o,a){var l=i[o];return l?l.enumerable=a:i[o]=l={configurable:!0,enumerable:a,get:function(){var u=this[We];return bl.get(u,o)},set:function(u){var d=this[We];bl.set(d,o,u)}},l}function t(o){for(var a=o.length-1;a>=0;a--){var l=o[a][We];if(!l.P)switch(l.i){case 5:r(l)&&qr(l);break;case 4:n(l)&&qr(l)}}}function n(o){for(var a=o.t,l=o.k,u=Pa(l),d=u.length-1;d>=0;d--){var f=u[d];if(f!==We){var h=a[f];if(h===void 0&&!Ca(a,f))return!0;var m=l[f],x=m&&m[We];if(x?x.t!==h:!M5(m,h))return!0}}var v=!!a[We];return u.length!==Pa(a).length+(v?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var l=Object.getOwnPropertyDescriptor(a,a.length-1);if(l&&!l.get)return!0;for(var u=0;u<a.length;u++)if(!a.hasOwnProperty(u))return!0;return!1}var i={};wR("ES5",{J:function(o,a){var l=Array.isArray(o),u=function(f,h){if(f){for(var m=Array(h.length),x=0;x<h.length;x++)Object.defineProperty(m,""+x,e(x,!0));return m}var v=L5(h);delete v[We];for(var w=Pa(v),b=0;b<w.length;b++){var p=w[b];v[p]=e(p,f||!!v[p].enumerable)}return Object.create(Object.getPrototypeOf(h),v)}(l,o),d={i:l?5:4,A:a?a.A:Y1(),P:!1,I:!1,R:{},l:a,t:o,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,We,{value:d,writable:!0}),u},S:function(o,a,l){l?bi(a)&&a[We].A===o&&t(o.p):(o.u&&function u(d){if(d&&typeof d=="object"){var f=d[We];if(f){var h=f.t,m=f.k,x=f.R,v=f.i;if(v===4)uo(m,function($){$!==We&&(h[$]!==void 0||Ca(h,$)?x[$]||u(m[$]):(x[$]=!0,qr(f)))}),uo(h,function($){m[$]!==void 0||Ca(m,$)||(x[$]=!1,qr(f))});else if(v===5){if(r(f)&&(qr(f),x.length=!0),m.length<h.length)for(var w=m.length;w<h.length;w++)x[w]=!1;else for(var b=h.length;b<m.length;b++)x[b]=!0;for(var p=Math.min(m.length,h.length),g=0;g<p;g++)m.hasOwnProperty(g)||(x[g]=!0),x[g]===void 0&&u(m[g])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var i3,xl,Ym=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",OR=typeof Map<"u",_R=typeof Set<"u",o3=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",j5=Ym?Symbol.for("immer-nothing"):((i3={})["immer-nothing"]=!0,i3),a3=Ym?Symbol.for("immer-draftable"):"__$immer_draftable",We=Ym?Symbol.for("immer-state"):"__$immer_state",kR=""+Object.prototype.constructor,Pa=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,L5=Object.getOwnPropertyDescriptors||function(e){var t={};return Pa(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},G1={},bl={get:function(e,t){if(t===We)return e;var n=Yi(e);if(!Ca(n,t))return function(i,o,a){var l,u=n3(o,a);return u?"value"in u?u.value:(l=u.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!kr(r)?r:r===Hh(e.t,t)?(Wh(e),e.o[t]=q1(e.A.h,r,e)):r},has:function(e,t){return t in Yi(e)},ownKeys:function(e){return Reflect.ownKeys(Yi(e))},set:function(e,t,n){var r=n3(Yi(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Hh(Yi(e),t),o=i==null?void 0:i[We];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(M5(n,i)&&(n!==void 0||Ca(e.t,t)))return!0;Wh(e),qr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Hh(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Wh(e),qr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Yi(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Tn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Tn(12)}},As={};uo(bl,function(e,t){As[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),As.deleteProperty=function(e,t){return As.set.call(this,e,t,void 0)},As.set=function(e,t,n){return bl.set.call(this,e[0],t,n,e[0])};var NR=function(){function e(n){var r=this;this.O=o3,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var l=o;o=i;var u=r;return function(w){var b=this;w===void 0&&(w=l);for(var p=arguments.length,g=Array(p>1?p-1:0),$=1;$<p;$++)g[$-1]=arguments[$];return u.produce(w,function(S){var P;return(P=o).call.apply(P,[b,S].concat(g))})}}var d;if(typeof o!="function"&&Tn(6),a!==void 0&&typeof a!="function"&&Tn(7),kr(i)){var f=e3(r),h=q1(r,i,void 0),m=!0;try{d=o(h),m=!1}finally{m?pc(f):V1(f)}return typeof Promise<"u"&&d instanceof Promise?d.then(function(w){return Uh(f,a),Bh(w,f)},function(w){throw pc(f),w}):(Uh(f,a),Bh(d,f))}if(!i||typeof i!="object"){if((d=o(i))===void 0&&(d=i),d===j5&&(d=void 0),r.D&&Hm(d,!0),a){var x=[],v=[];Xn("Patches").M(i,d,x,v),a(x,v)}return d}Tn(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(d){for(var f=arguments.length,h=Array(f>1?f-1:0),m=1;m<f;m++)h[m-1]=arguments[m];return r.produceWithPatches(d,function(x){return i.apply(void 0,[x].concat(h))})};var a,l,u=r.produce(i,o,function(d,f){a=d,l=f});return typeof Promise<"u"&&u instanceof Promise?u.then(function(d){return[d,a,l]}):[u,a,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){kr(n)||Tn(8),bi(n)&&(n=CR(n));var r=e3(this),i=q1(this,n,void 0);return i[We].C=!0,V1(r),i},t.finishDraft=function(n,r){var i=n&&n[We],o=i.A;return Uh(o,r),Bh(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!o3&&Tn(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=Xn("Patches").$;return bi(n)?a(n,r):this.produce(n,function(l){return a(l,r)})},e}(),Zt=new NR,z5=Zt.produce;Zt.produceWithPatches.bind(Zt);Zt.setAutoFreeze.bind(Zt);Zt.setUseProxies.bind(Zt);Zt.applyPatches.bind(Zt);Zt.createDraft.bind(Zt);Zt.finishDraft.bind(Zt);function $l(e){return $l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$l(e)}function ER(e,t){if($l(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if($l(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function IR(e){var t=ER(e,"string");return $l(t)==="symbol"?t:String(t)}function TR(e,t,n){return t=IR(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s3(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function l3(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s3(Object(n),!0).forEach(function(r){TR(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s3(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ct(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var u3=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Yh=function(){return Math.random().toString(36).substring(7).split("").join(".")},yc={INIT:"@@redux/INIT"+Yh(),REPLACE:"@@redux/REPLACE"+Yh(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Yh()}};function AR(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Vm(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ct(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ct(1));return n(Vm)(e,t)}if(typeof e!="function")throw new Error(Ct(2));var i=e,o=t,a=[],l=a,u=!1;function d(){l===a&&(l=a.slice())}function f(){if(u)throw new Error(Ct(3));return o}function h(w){if(typeof w!="function")throw new Error(Ct(4));if(u)throw new Error(Ct(5));var b=!0;return d(),l.push(w),function(){if(b){if(u)throw new Error(Ct(6));b=!1,d();var g=l.indexOf(w);l.splice(g,1),a=null}}}function m(w){if(!AR(w))throw new Error(Ct(7));if(typeof w.type>"u")throw new Error(Ct(8));if(u)throw new Error(Ct(9));try{u=!0,o=i(o,w)}finally{u=!1}for(var b=a=l,p=0;p<b.length;p++){var g=b[p];g()}return w}function x(w){if(typeof w!="function")throw new Error(Ct(10));i=w,m({type:yc.REPLACE})}function v(){var w,b=h;return w={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(Ct(11));function $(){g.next&&g.next(f())}$();var S=b($);return{unsubscribe:S}}},w[u3]=function(){return this},w}return m({type:yc.INIT}),r={dispatch:m,subscribe:h,getState:f,replaceReducer:x},r[u3]=v,r}function RR(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:yc.INIT});if(typeof r>"u")throw new Error(Ct(12));if(typeof n(void 0,{type:yc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ct(13))})}function FR(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{RR(n)}catch(l){a=l}return function(u,d){if(u===void 0&&(u={}),a)throw a;for(var f=!1,h={},m=0;m<o.length;m++){var x=o[m],v=n[x],w=u[x],b=v(w,d);if(typeof b>"u")throw d&&d.type,new Error(Ct(14));h[x]=b,f=f||b!==w}return f=f||o.length!==Object.keys(u).length,f?h:u}}function vc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function DR(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Ct(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},l=t.map(function(u){return u(a)});return o=vc.apply(void 0,l)(i.dispatch),l3(l3({},i),{},{dispatch:o})}}}function U5(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(l){return typeof l=="function"?l(i,o,e):a(l)}}};return t}var B5=U5();B5.withExtraArgument=U5;const d3=B5;var H5=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),MR=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(d){return function(f){return u([d,f])}}function u(d){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=d[0]&2?i.return:d[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,d[1])).done)return o;switch(i=0,o&&(d=[d[0]&2,o.value]),d[0]){case 0:case 1:o=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,i=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!o||d[1]>o[0]&&d[1]<o[3])){n.label=d[1];break}if(d[0]===6&&n.label<o[1]){n.label=o[1],o=d;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(d);break}o[2]&&n.ops.pop(),n.trys.pop();continue}d=t.call(e,n)}catch(f){d=[6,f],i=0}finally{r=o=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}},Ba=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},jR=Object.defineProperty,LR=Object.defineProperties,zR=Object.getOwnPropertyDescriptors,c3=Object.getOwnPropertySymbols,UR=Object.prototype.hasOwnProperty,BR=Object.prototype.propertyIsEnumerable,f3=function(e,t,n){return t in e?jR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},fi=function(e,t){for(var n in t||(t={}))UR.call(t,n)&&f3(e,n,t[n]);if(c3)for(var r=0,i=c3(t);r<i.length;r++){var n=i[r];BR.call(t,n)&&f3(e,n,t[n])}return e},Vh=function(e,t){return LR(e,zR(t))},HR=function(e,t,n){return new Promise(function(r,i){var o=function(u){try{l(n.next(u))}catch(d){i(d)}},a=function(u){try{l(n.throw(u))}catch(d){i(d)}},l=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(o,a)};l((n=n.apply(e,t)).next())})},WR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?vc:vc.apply(null,arguments)};function YR(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var VR=function(e){H5(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ba([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ba([void 0],n.concat(this))))},t}(Array),qR=function(e){H5(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ba([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ba([void 0],n.concat(this))))},t}(Array);function Q1(e){return kr(e)?z5(e,function(){}):e}function GR(e){return typeof e=="boolean"}function QR(){return function(t){return KR(t)}}function KR(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new VR;return n&&(GR(n)?r.push(d3):r.push(d3.withExtraArgument(n.extraArgument))),r}var ZR=!0;function JR(e){var t=QR(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,l=n.devTools,u=l===void 0?!0:l,d=n.preloadedState,f=d===void 0?void 0:d,h=n.enhancers,m=h===void 0?void 0:h,x;if(typeof i=="function")x=i;else if(YR(i))x=FR(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=a;typeof v=="function"&&(v=v(t));var w=DR.apply(void 0,v),b=vc;u&&(b=WR(fi({trace:!ZR},typeof u=="object"&&u)));var p=new qR(w),g=p;Array.isArray(m)?g=Ba([w],m):typeof m=="function"&&(g=m(p));var $=b.apply(void 0,g);return Vm(x,f,$)}function hi(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return fi(fi({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function W5(e){var t={},n=[],r,i={addCase:function(o,a){var l=typeof o=="string"?o:o.type;if(l in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[l]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function XR(e){return typeof e=="function"}function eF(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?W5(t):[t,n,r],o=i[0],a=i[1],l=i[2],u;if(XR(e))u=function(){return Q1(e())};else{var d=Q1(e);u=function(){return d}}function f(h,m){h===void 0&&(h=u());var x=Ba([o[m.type]],a.filter(function(v){var w=v.matcher;return w(m)}).map(function(v){var w=v.reducer;return w}));return x.filter(function(v){return!!v}).length===0&&(x=[l]),x.reduce(function(v,w){if(w)if(bi(v)){var b=v,p=w(b,m);return p===void 0?v:p}else{if(kr(v))return z5(v,function(g){return w(g,m)});var p=w(v,m);if(p===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return v},h)}return f.getInitialState=u,f}function tF(e,t){return e+"/"+t}function nF(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Q1(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},l={};i.forEach(function(f){var h=r[f],m=tF(t,f),x,v;"reducer"in h?(x=h.reducer,v=h.prepare):x=h,o[f]=x,a[m]=x,l[f]=v?hi(m,v):hi(m)});function u(){var f=typeof e.extraReducers=="function"?W5(e.extraReducers):[e.extraReducers],h=f[0],m=h===void 0?{}:h,x=f[1],v=x===void 0?[]:x,w=f[2],b=w===void 0?void 0:w,p=fi(fi({},m),a);return eF(n,function(g){for(var $ in p)g.addCase($,p[$]);for(var S=0,P=v;S<P.length;S++){var N=P[S];g.addMatcher(N.matcher,N.reducer)}b&&g.addDefaultCase(b)})}var d;return{name:t,reducer:function(f,h){return d||(d=u()),d(f,h)},actions:l,caseReducers:o,getInitialState:function(){return d||(d=u()),d.getInitialState()}}}var rF="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",iF=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=rF[Math.random()*64|0];return t},oF=["name","message","stack","code"],qh=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),h3=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),aF=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=oF;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=hi(t+"/fulfilled",function(d,f,h,m){return{payload:d,meta:Vh(fi({},m||{}),{arg:h,requestId:f,requestStatus:"fulfilled"})}}),o=hi(t+"/pending",function(d,f,h){return{payload:void 0,meta:Vh(fi({},h||{}),{arg:f,requestId:d,requestStatus:"pending"})}}),a=hi(t+"/rejected",function(d,f,h,m,x){return{payload:m,error:(r&&r.serializeError||aF)(d||"Rejected"),meta:Vh(fi({},x||{}),{arg:h,requestId:f,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(d==null?void 0:d.name)==="AbortError",condition:(d==null?void 0:d.name)==="ConditionError"})}}),l=typeof AbortController<"u"?AbortController:function(){function d(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return d.prototype.abort=function(){},d}();function u(d){return function(f,h,m){var x=r!=null&&r.idGenerator?r.idGenerator(d):iF(),v=new l,w;function b(g){w=g,v.abort()}var p=function(){return HR(this,null,function(){var g,$,S,P,N,T,R;return MR(this,function(W){switch(W.label){case 0:return W.trys.push([0,4,,5]),P=(g=r==null?void 0:r.condition)==null?void 0:g.call(r,d,{getState:h,extra:m}),lF(P)?[4,P]:[3,2];case 1:P=W.sent(),W.label=2;case 2:if(P===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return N=new Promise(function(L,se){return v.signal.addEventListener("abort",function(){return se({name:"AbortError",message:w||"Aborted"})})}),f(o(x,d,($=r==null?void 0:r.getPendingMeta)==null?void 0:$.call(r,{requestId:x,arg:d},{getState:h,extra:m}))),[4,Promise.race([N,Promise.resolve(n(d,{dispatch:f,getState:h,extra:m,requestId:x,signal:v.signal,abort:b,rejectWithValue:function(L,se){return new qh(L,se)},fulfillWithValue:function(L,se){return new h3(L,se)}})).then(function(L){if(L instanceof qh)throw L;return L instanceof h3?i(L.payload,x,d,L.meta):i(L,x,d)})])];case 3:return S=W.sent(),[3,5];case 4:return T=W.sent(),S=T instanceof qh?a(null,x,d,T.payload,T.meta):a(T,x,d),[3,5];case 5:return R=r&&!r.dispatchConditionRejection&&a.match(S)&&S.meta.condition,R||f(S),[2,S]}})})}();return Object.assign(p,{abort:b,requestId:x,arg:d,unwrap:function(){return p.then(sF)}})}}return Object.assign(u,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function sF(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function lF(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var qm="listenerMiddleware";hi(qm+"/add");hi(qm+"/removeAll");hi(qm+"/remove");var p3;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);PR();const uF={user:null,product:[],cartItem:[],qty:0,totalPrice:0},Y5=nF({name:"userAuth",initialState:uF,reducers:{addProduct:(e,{payload:t})=>{e.product=t},addToCart:(e,{payload:t})=>{const n=e.cartItem.findIndex(r=>r._id===t._id);n>=0?e.cartItem[n].qty+=1:e.cartItem.push({...t,qty:1}),e.qty+=1,e.totalPrice+=t.qty*t.price},removeCart:(e,{payload:t})=>{const n=e.cartItem.findIndex(r=>r._id===t._id);e.cartItem[n].qty>1?e.cartItem[n].qty-=1:e.cartItem=e.cartItem.filter(r=>r._id!==t._id),e.qty-=1,e.totalPrice-=t.price},removeFromCart:(e,{payload:t})=>{e.cartItem=e.cartItem.filter(n=>n._id!==t._id)},removeAllCart:e=>{e.cartItem=[],e.qty=0},total:(e,{payload:t})=>{const{totalCost:n,totalItems:r}=e.cart.reduce((i,o)=>{const{price:a,QTY:l}=o,u=a*l;return i.totalItems+=l,i.totalCost+=u,i},{totalCost:0,totalItems:0});e.MyTotalQTY=r,e.MyTotalCost=n},signOut:e=>{e.user=null}}}),{signOut:_Q,addProduct:kQ,addToCart:co,removeCart:Nf,removeAllCart:dF,removeFromCart:cF}=Y5.actions,fF=Y5.reducer,hF=({id:e,avatar:t,data:n,qty:r})=>{const i=xi(l=>l.reducers.cartItem),o=i==null?void 0:i.find(l=>(l==null?void 0:l._id)===e),a=Ja();return s(IF,{children:s(NF,{children:y(EF,{children:[s(pF,{children:t==null?void 0:t.map((l,u)=>s(_F,{children:s(OF,{children:s("img",{src:l.url})})},u))}),y(kF,{children:[y(PF,{children:[y(CF,{children:[s(wF,{children:s("span",{children:"Select Country"})}),y(SF,{children:[" ",s("div",{children:s(jS,{})}),s("span",{children:s(cn,{})})]})]}),y(Jh,{children:[s(Kh,{children:s("div",{children:s(WA,{})})}),y(Zh,{children:[s(Qh,{children:"Door Delivery"}),y(Gh,{children:["Every Delivery will be at",s("br",{})," your preferred location,",s("br",{})," after 15days of ordering."]})]})]}),y(Jh,{children:[s(Kh,{children:s("div",{children:s(qA,{})})}),y(Zh,{children:[s(Qh,{children:"Minimum order"}),y(Gh,{children:["#50,000 worth of item",s("br",{}),"is the minimum"]})]})]}),y(Jh,{children:[s(Kh,{children:s("div",{children:s(VA,{})})}),y(Zh,{children:[s(Qh,{children:"Payment Method"}),y(Gh,{children:["All Items will be delivered",s("br",{})," after Payment"]})]})]})]}),y($F,{children:[s(vF,{children:"Quantity"}),(o==null?void 0:o.qty)>=1?y(xF,{children:[s(gF,{onClick:()=>a(co(n)),children:"+"}),s(mF,{children:o==null?void 0:o.qty}),s(yF,{disabled:(o==null?void 0:o.qty)<=0,onClick:()=>a(Nf(n)),children:"-"})]}):s(bF,{children:s("button",{onClick:()=>a(co(n)),children:"Add To Cart"})})]})]})]})})})},pF=c.div`

  @media (max-width: 1076px){
    display: flex;
    overflow-x: auto;
  }
`,gF=c.button`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`,mF=c.div`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  
`,yF=c.button`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

`,vF=c.div`
  font-size: 22px;
  font-weight: 700;
  font-family: poppins;
`,xF=c.div`
  width: 70%;
  height: 125px;
  display: flex;
  cursor: pointer;

  align-items: center;
  justify-content: space-between;
`,bF=c.div`
  width: 90%;

  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 20px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,$F=c.div`
  width: 100%;
  height: 195px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1100px) {
    align-items: center;
  }
`,wF=c.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  span {
    font-size: 22px;
    font-weight: 700;
    font-family: poppins;
  }
`,SF=c.div`
  font-weight: 700;
  width: 95%;
  padding: 0 10px;
  display: flex;
  border: 1.7px solid black;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  // background-color: gold;
  height: 30px;

  span {
    margin-left: 10px;
    position: relative;
    bottom: -3px;
    cursor: pointer;
  }
  div {
  }
`,Gh=c.div`
  font-size: 15px;
  font-weight: 500;
  font-family: poppins;
`,Qh=c.div`
  font-size: 25px;
  margin-bottom: 15px;
  font-weight: 500;
  font-family: poppins;
`,Kh=c.div`
  width: 100px;
  border-radius: 5px;
  div {
    font-size: 62px;
  }
`,Zh=c.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`,CF=c.div`
  width: 90%;
  height: 70px;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,Jh=c.div`
  width: 90%;
  height: 120px;
  border-bottom: 1.5px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`,PF=c.div`
  border: 1.8px solid black;
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;c.div`
  width: 450px;
  height: 330px;
  background-color: burlywood;
  border-radius: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;const OF=c.div`
  width: 450px;
  height: 330px;
  /* background-color: brown; */
  border-radius: 5px;
  margin: 10px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 5px;

    object-fit: cover;
  }

  @media (max-width: 768px){
    width: 300px;
    height: 300px;
  }
`,_F=c.div`
  width: 450px;
  /* flex: 1; */
  padding: 50px 0;
`,kF=c.div`
  width: 550px;
  /* flex: 1; */
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 0;
`,NF=c.div`
  width: 95%;
  /* height: 95%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;c.div`
  width: 100%;
  height: 120px;
  border: 2px solid black;
`;const EF=c.div`
  width: 100%;
  flex-wrap: wrap;
  /* height: 970px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`,IF=c.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`,TF=({description:e})=>s(MF,{children:s(DF,{children:y(AF,{children:[s(RF,{children:"Product Details"}),s(FF,{children:e})]})})});c.div`
  width: 300px;
  height: 300px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;c.div`
  background-color: #cdc8c8;
  border-radius: 5px;
  width: 250px;
  height: 260px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;c.div`
  font-size: 13px;
  font-weight: 500;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
  }
`;c.div`
  font-size: 13px;
  font-weight: 500;
`;c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;c.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;const AF=c.div`
  width: 94%;
  border: 1.8px solid black;
  border-radius: 3px;
  padding: 0 30px;
`,RF=c.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`,FF=c.div`
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0;
`;c.div`
  width: 94%;
  /* height: 350px; */

  border: 1.8px solid black;
  padding: 0 30px;
  border-radius: 3px;
`;c.div`
  font-size: 22px;
  font-weight: 700;
  font-family: poppins;
`;const DF=c.div`
  width: 95%;
  /* height: 595px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,MF=c.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`,jF=({name:e,price:t})=>s(HF,{children:y(WF,{children:[y(LF,{children:[y(g3,{children:[s("span",{children:"Home"}),s("div",{children:s(q2,{})})]}),y(g3,{children:[s("span",{children:"All Items"})," ",s("div",{children:s(q2,{})})]})]}),s(zF,{children:e}),s(UF,{}),y(BF,{children:["₦",t]})]})}),LF=c.div`
  display: flex;
  width: 122px;
  align-items: center;
  justify-content: space-between;
`,g3=c.div`
  display: flex;
  span {
    font-size: 13px;
    font-weight: 500;
    margin-top: 10px;
  }

  div {
    margin-top: 10px;
  }
`,zF=c.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
`,UF=c.div``,BF=c.div`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
`,HF=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`,WF=c.div`
  width: 93.5%;
  border: 1.8px solid black;
  padding: 0 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`,YF=({id:e,index:t,name:n,price:r,img:i,data:o})=>{const a=xi(d=>d.reducers.cartItem),l=a==null?void 0:a.find(d=>(d==null?void 0:d._id)===e),u=Ja();return s(ro,{children:y(XF,{children:[s(m3,{to:`/detail/${e}`,children:s(KF,{children:s("img",{src:i})})}),y(VF,{children:[y(m3,{to:`/detail/${e}`,children:[s(ZF,{children:n}),y(JF,{children:["₦",r]})]}),s(QF,{children:(l==null?void 0:l.qty)>=1?y(qF,{children:[s(y3,{onClick:()=>u(co(o)),children:"+"}),s("span",{children:l==null?void 0:l.qty}),s(y3,{onClick:()=>u(Nf(o)),children:"-"})]}):s(GF,{onClick:()=>u(co(o)),children:"ADD TO CART"})})]})]},t)})},m3=c(be)`
  text-decoration: none;
  color: black;
`,VF=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (max-width: 730px){
    width: 200px;
  }
  @media (max-width: 550px){
    width: 170px;
  }
  @media (max-width: 440px){
    width: 150px;
  }
  @media (max-width: 417px){
    width: 130px;
  }
  @media (max-width: 380px){
    width: 120px;
  }
  @media (max-width: 314px){
    width: 100px;
  }
`,qF=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,y3=c.button`
  padding: 13px 20px;
  border: 0px;
  border-radius: 2px;
  outline: none;

  background-color: #d975c0;
  color: white;
  cursor: pointer
`,GF=c.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-weight: 800;
  outline: none;
  border: 0px;
  background-color: #d975c0;
  color: white;
  cursor: pointer;
  @media (max-width: 370px){
    font-size: 12px;
  }
`,QF=c.div`
  /* display: none; */
  margin-bottom: 10px;
`,KF=c.div`
  /* background-color: #cdc8c8; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 270px;
  height: 230px;
  margin: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  @media (max-width: 730px){
    width: 200px;
    height: 200px;
  }
  @media (max-width: 550px){
    width: 170px;
    height: 220px;
  }
  @media (max-width: 440px){
    width: 150px;
    height: 220px;
  }
  @media (max-width: 417px){
    width: 130px;
    height: 200px;
  }
  @media (max-width: 380px){
    width: 120px;
    height: 200px;
  }
  @media (max-width: 350px){
    width: 110px;
    height: 200px;
  }
  @media (max-width: 314px){
    width: 100px;
    height: 160px;
  }
`,ZF=c.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
    cursor: pointer;
  }
  @media (max-width: 550px){
    font-size: 12px;
  }
  @media (max-width: 314px){
    font-size: 10px;
  }
`,JF=c.div`
  font-size: 13px;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
`,XF=c.div`
  /* width: 300px; */
  flex: 1 0 100px;
  box-sizing: border-box;
  /* height: 350px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 10px;
  /* background-color: gold; */
`,Zi=({id:e,index:t,name:n,price:r,img:i,data:o})=>{const a=xi(h=>h.reducers.cartItem),l=a==null?void 0:a.find(h=>(h==null?void 0:h._id)===e),[u,d]=C.useState(!1),f=Ja();return C.useEffect(()=>{const h=()=>{const m=window.innerWidth<=768;d(m)};return h(),window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}}),s(ro,{children:u?s(YF,{img:i,id:e,index:t,name:n,price:r,data:o}):y(aD,{children:[s(v3,{to:`/detail/${e}`,children:s(rD,{children:s("img",{src:i})})}),y(eD,{children:[y(v3,{to:`/detail/${e}`,children:[s(iD,{children:n}),y(oD,{children:["₦",r]})]}),s(V5,{children:(l==null?void 0:l.qty)>=1?y(tD,{children:[s(x3,{onClick:()=>f(co(o)),children:"+"}),s("span",{children:l==null?void 0:l.qty}),s(x3,{onClick:()=>f(Nf(o)),children:"-"})]}):s(nD,{onClick:()=>f(co(o)),children:"ADD TO CART"})})]})]},t)})},v3=c(be)`
  text-decoration: none;
  color: black;
`,eD=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`,tD=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,x3=c.button`
  padding: 13px 20px;
  border: 0px;
  border-radius: 2px;
  outline: none;

  background-color: #d975c0;
  color: white;
  cursor: pointer
`,nD=c.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-weight: 800;
  outline: none;
  border: 0px;
  background-color: #d975c0;
  color: white;
  cursor: pointer;
`,V5=c.div`
  display: none;
`,rD=c.div`
  /* background-color: #cdc8c8; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 230px;
  height: 220px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  @media (max-width: 550px){
    width: 170px;
    height: 220px;
  }
  @media (max-width: 440px){
    width: 150px;
    height: 220px;
  }
  @media (max-width: 380px){
    width: 120px;
    height: 200px;
  }
  @media (max-width: 314px){
    width: 100px;
    height: 160px;
  }
`,iD=c.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
    cursor: pointer;
  }
  @media (max-width: 550px){
    font-size: 12px;
  }
  @media (max-width: 314px){
    font-size: 10px;
  }
`,oD=c.div`
  font-size: 13px;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
`,aD=c.div`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 10px;

  :hover{
    ${V5}{
      display: block;
      width: 100%;
    }
  }

  @media (max-width: 600px){
    width: 180px;
    height: 270px;
  }
  @media (max-width: 530px){
    width: 170px;
    height: 270px;
  }
  @media (max-width: 440px){
    width: 150px;
    height: 100%;
  }
  @media (max-width: 380px){
    width: 120px;
  }
  @media (max-width: 314px){
    width: 100px;
  }
`,Tr="https://crossbackend.onrender.com",Ql=async e=>(await Xe.get(`${Tr}/api/product/${e}/seller`)).data.data,sD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/phone`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},lD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/cloth`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},uD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/electronics`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},dD=async({id:e,formData:t})=>{const n={"content-type":"multipart/form-data"};await Xe.post(`${Tr}/api/product/${e}/create/food`,t,n).then(r=>{localStorage.setItem("product",JSON.stringify(r.data.data)),console.log(r.data)})},cD=async({id:e,tag_No:t,quantity:n,startDate:r,endDate:i,active:o})=>{await Xe.patch(`${Tr}/api/product/${e}/update`,{id:e,tag_No:t,quantity:n,startDate:r,endDate:i,active:o}).then(a=>{localStorage.setItem("product",JSON.stringify(a.data.data)),console.log(a.data)})},es=async()=>await Xe.get(`${Tr}/api/product`).then(t=>t.data.data),fD=async e=>(await Xe.get(`${Tr}/api/product/${e}`)).data.data,hD=async({ids:e,quantities:t})=>{const n=await Xe.patch(`${Tr}/api/product/order`,{ids:e,quantities:t});return console.log(n),n.data.data},pD=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:es}),[t,n]=C.useState(0),r=e==null?void 0:e.filter(u=>u.status==="approved"),i=8,o=t*i,a=r==null?void 0:r.slice(o,o+i);var l=Intl.NumberFormat();return s(vD,{children:y(yD,{children:[s(mD,{children:a==null?void 0:a.map((u,d)=>s(Zi,{id:u._id,name:u.name,price:l.format(u==null?void 0:u.price),img:u==null?void 0:u.avatar[0].url}))}),s(gD,{to:"/phone",children:s("button",{children:"See All"})})]})})},gD=c.div`
  width: 97%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    /* width: 9%; */
    background-color: #d975c0;
    color: white;
    font-size: 12px;
    padding: 8px 10px;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,mD=c.div`
  margin-top: 10px;
  width: 100%;
  /* height: 360px; */
  display: flex;
  align-items: center;
  overflow-x: auto;
`,yD=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 2px;

  
`,vD=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,xD=()=>{const{id:e}=H$();Ja();const{data:t}=Ke({queryKey:["products",e],queryFn:()=>fD(e)});var n=Intl.NumberFormat();return s(bD,{children:y($D,{children:[s(jF,{name:t==null?void 0:t.name,price:n.format(t==null?void 0:t.price)}),s(hF,{id:e,qty:t==null?void 0:t.quantity,avatar:t==null?void 0:t.avatar,data:t}),s(TF,{description:t==null?void 0:t.description}),s(pD,{})]})})},bD=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,$D=c.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`,Gm=({index:e,name:t,price:n,shippingFee:r,totalPrice:i,subtotal:o,qty:a,id:l,avatar:u})=>{var d=Intl.NumberFormat();return s("div",{children:y(kD,{children:[y(S3,{children:[y(_D,{children:[s(OD,{children:a}),s(PD,{src:u})]}),y(CD,{children:[s(SD,{children:t}),y(Xh,{children:["₦",n]})]})]}),s(w3,{}),s(S3,{children:y(wD,{children:[y(b3,{children:[s($3,{children:"Subtotal"}),y(Xh,{children:["₦",o]})]}),y(b3,{children:[s($3,{children:"Shipping Fee"}),y(Xh,{children:["₦",d.format(r*a)]})]})]})}),s(w3,{})]},l)})},wD=c.div``,b3=c.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,Xh=c.div`
  font-weight: 700;
`,$3=c.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,SD=c.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,CD=c.div`
  margin-left: 20px;
`,w3=c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,PD=c.img`
  width: 100px;
  height: 100px;
  background-color: gold;
  border-radius: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`,OD=c.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d975c0;
  color: white;
  position: relative;
  left: 85px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`,_D=c.div`
  margin-right: 20px;
`,S3=c.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
`,kD=c.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,ND=()=>s("div",{children:s(LD,{children:y(jD,{children:[s(MD,{children:y(DD,{children:[y(n0,{children:[s(t0,{children:"Contact"}),y(e0,{children:[s(_3,{placeholder:"email"}),s("span",{children:"Chance"})]})]}),y(n0,{children:[s(t0,{children:"Address"}),y(e0,{children:[s(_3,{placeholder:"Address"}),s("span",{children:"Chance"})]})]}),y(n0,{children:[s(t0,{children:"Payment Method"}),s(e0,{children:y(FD,{children:[y(O3,{children:[s(P3,{bg:"fff"}),s(C3,{children:"Pay on delivery"})]}),s(RD,{}),y(O3,{children:[s(P3,{bg:""}),s(C3,{children:"Pay on delivery"})]})]})})]}),y(AD,{children:[y(TD,{children:[s("span",{children:s(DS,{})}),s("div",{children:"Return to Information"})]}),s(ID,{children:"Complete Order"})]})]})}),s(ED,{children:s(Gm,{})})]})})}),ED=c.div`
    flex: 1;
    height: 100vh;
    border-left: 3px solid lightgray;
    /* background-color: blue; */
`,ID=c.button`
    padding: 15px 20px;
    border: #D975C0;
    background-color: #D975C0;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`,TD=c.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        font-weight: 600;
        /* margin-left: 10px; */
        color: #3c3c3c;
    }
    span{
        margin-top: 5px;
    }
`,AD=c.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    margin-top: 30px;
`,RD=c.div`
    width: 100%;
    background-color: lightgray;
    height: 2px;
    margin: 10px 0px;
`,C3=c.div`
    font-weight: 700;
    margin-right: 20px;
`,P3=c.div`
    border: 1px solid black;
    background-color: ${({bg:e})=>e?"#D975C0":"transparent"};
    border-radius: 50%;
    height: 25px;
    width: 25px;
    cursor: pointer;
`,O3=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,FD=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,_3=c.input`
    width: 90%;
    height: 30px;
    border: 0px;
    outline: none;
    margin-left: 10px;

`,e0=c.div`
    border: 1px solid gray;
    width: 100%;
    /* height: 40px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px 0px;

    span{
        color: blue;
        margin-left: 10px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        width: 100px;
    }
`,t0=c.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`,n0=c.div`
    margin: 10px;
`,DD=c.div`
    width: 90%;
    margin-top: 20px;
`,MD=c.div`
    flex: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
    /* background-color: gold; */
`,jD=c.div`
    width: 95%;
    display: flex;
`,LD=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,zD=()=>s(UD,{children:y(BD,{children:[s(HD,{children:s(Va,{fontSize:"50px",color:"green"})}),y(YD,{children:["Account Information has been",s("br",{})," received and will be reviewed ",s("br",{}),"shortly."]}),s(WD,{to:"/auth/signin",children:s("button",{children:"Start Selling"})})]})}),UD=c.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 30px; */
  padding-top: 80px;
`,BD=c.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,HD=c.div``,WD=c(Bl)`
  width: 40%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,YD=c.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,VD=()=>s(qD,{children:y(GD,{children:[s(QD,{children:s(Va,{fontSize:"50px",color:"green"})}),y(ZD,{children:["You have successfully created",s("br",{})," an account"]}),s(KD,{to:"/business",children:s("button",{children:"Continue"})})]})}),qD=c.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,GD=c.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,QD=c.div``,KD=c(Bl)`
  width: 40%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,ZD=c.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,JD=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:es}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r);o==null||o.filter(d=>d.category==="phone"&&d.status==="approved"),o==null||o.filter(d=>d.category==="electronics"&&d.status==="approved");const a=o==null?void 0:o.filter(d=>d.category==="food"&&d.status==="approved"),l=o==null?void 0:o.filter(d=>d.category==="clothing"&&d.status==="approved");console.log(l);var u=Intl.NumberFormat();return s(rM,{children:y(nM,{children:[s(eM,{children:"Foodstuffs"}),s(tM,{children:a==null?void 0:a.map((d,f)=>s(Zi,{id:d._id,index:f,name:d.name,price:u.format(d==null?void 0:d.price),img:d==null?void 0:d.avatar[0].url,data:d}))}),s(XD,{to:"/food",children:s("button",{children:"See All"})})]})})},XD=c(be)`
  width: 97%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  button {
    background-color: #d975c0;
    color: white;
    font-size: 12px;
    padding: 8px 15px;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,eM=c.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,tM=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,nM=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 2px;

  
`,rM=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,iM=()=>s(oM,{children:y(aM,{children:[s(sM,{children:s(LS,{fontSize:"50px",color:"red"})}),s(uM,{children:"Incorrect OTP number, please try again"}),s(lM,{to:"/auth/verify",children:s("button",{children:"Try again"})})]})}),oM=c.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,aM=c.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,sM=c.div``,lM=c(be)`
  width: 40%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,uM=c.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,Qm=[{name:"Nigeria",flag:"https://cdn-icons-png.flaticon.com/512/8603/8603374.png"},{name:"Ghana",flag:"https://cdn-icons-png.flaticon.com/512/8603/8603142.png"}],q5="https://crossbackend.onrender.com",nr=async e=>(await Xe.get(`${q5}/api/order`)).data.data,dM=e=>Xe.get(`${q5}/api/order/${e}`).then(n=>n.data.data),cM="https://crossbackend.onrender.com",fM=()=>{const e=nt();var t=Intl.NumberFormat();const n=xi(G=>G.reducers.cartItem),r=xi(G=>G.reducers.qty),i=n==null?void 0:n.reduce((G,Y)=>G+Y.qty*Y.price+Y.shippingFee*Y.qty,0),o=n==null?void 0:n.reduce((G,Y)=>G+Y.qty*Y.shippingFee,0),[a,l]=C.useState(Qm);let[u,d]=C.useState(0);const[f,h]=C.useState(""),[m,x]=C.useState(""),[v,w]=C.useState(""),[b,p]=C.useState(""),[g,$]=C.useState(""),[S,P]=C.useState(""),[N,T]=C.useState(""),[R,W]=C.useState(""),[L,se]=C.useState(""),[M,j]=C.useState(),[X,F]=C.useState(!1),[ee,re]=C.useState(!1),[z,_]=C.useState("Payment before delivery"),[k,U]=C.useState([]),D=()=>{const G=n.map(Y=>({productID:Y._id,sellerID:Y.user,qty:Y.qty,price:Y.price}));U(G)},H=()=>{d(()=>u+1),u>=a.length-1&&d(()=>u=0)},V=()=>{w(a[u].name)},ie=$t({mutationKey:["order"],mutationFn:async({firstName:G,lastName:Y,email:Oe,phone_No:me,payment_method:ge,country:he,Localgovt:Ne,state:De,apartment:fe,nearestBusStop:O,products:E,subtotal:A,totalQty:oe,address:K,shippingFee:q})=>{await Xe.post(`${cM}/api/order/create`,{firstName:G,lastName:Y,email:Oe,phone_No:me,payment_method:ge,country:he,Localgovt:Ne,state:De,apartment:fe,nearestBusStop:O,products:E,subtotal:A,totalQty:oe,address:K,shippingFee:q}).then(ae=>{e("/finishshipping"),console.log(ae.data),localStorage.setItem("order",JSON.stringify(ae.data.data))}).catch(ae=>{console.log(ae)})},onError:G=>{console.log(G)}}),I=G=>{G.preventDefault(),(m.length==0||b.length==0||f.length==0||v.length==0||!z||N.length==0||S.length==0||L.length==0||k.length==0||S.length==0)&&(re(!0),alert("All inputs most be filed ")),ie.mutate({firstName:m,lastName:b,email:f,phone_No:M,payment_method:z,country:v,Localgovt:R,state:N,apartment:S,nearestBusStop:L,products:k,subtotal:i,totalQty:r,address:g,shippingFee:o})};return C.useEffect(()=>{V(),D()},[u]),s("div",{children:s(NM,{children:y(kM,{children:[s(_M,{children:y(OM,{onSubmit:I,children:[y(N3,{children:[s(i0,{children:"Contact Information"}),s(Hn,{children:"Email"}),s(Wn,{children:s(ar,{placeholder:"email",value:f,onChange:G=>h(G.target.value)})})]}),y(N3,{children:[s(i0,{children:"Payment Method"}),s(Wn,{children:y(PM,{children:[X?y(ps,{onClick:()=>{F(!1),_("Payment before delivery")},children:[s(Ou,{bg:"fff"}),s(Pu,{children:"Payment on delivery"})]}):y(ps,{onClick:()=>{F(!0),_("Payment on delivery")},children:[s(Ou,{bg:""}),s(Pu,{children:"Payment on delivery"})]}),s(CM,{}),X?y(ps,{onClick:()=>{F(!1),_("Payment before delivery")},children:[s(Ou,{bg:""}),s(Pu,{children:"Payment before delivery"})]}):y(ps,{onClick:()=>{F(!0),_("Payment on delivery")},children:[s(Ou,{bg:"fff"}),s(Pu,{children:"Payment before delivery"})]})]})})]}),y(_u,{children:[s(i0,{children:"Shipping Address"}),s(Hn,{children:"Country"}),y(xM,{children:[" ",s(yM,{src:a[u].flag}),s(vM,{onClick:H,children:s(cn,{})})]})]}),y(E3,{children:[y(k3,{children:[s(Hn,{children:"First Name"}),s(Wn,{children:s(ar,{placeholder:"First Name",value:m,onChange:G=>x(G.target.value)})})]}),y(k3,{children:[s(Hn,{children:"Last Name"}),s(Wn,{children:s(ar,{placeholder:"Last Name",value:b,onChange:G=>p(G.target.value)})})]})]}),y(_u,{children:[s(Hn,{children:"Address"}),s(Wn,{children:s(ar,{placeholder:"Address",value:g,onChange:G=>$(G.target.value)})})]}),y(_u,{children:[s(Hn,{children:"Apartment, Suite etc.... (Optional)"}),s(Wn,{children:s(ar,{placeholder:"Apartment, Suite etc....",value:S,onChange:G=>P(G.target.value)})})]}),y(E3,{children:[y(r0,{children:[s(Hn,{children:"State"}),s(Wn,{children:s(ar,{placeholder:"Lagos",value:N,onChange:G=>T(G.target.value)})})]}),y(r0,{children:[s(Hn,{children:"LGA"}),s(Wn,{children:s(ar,{placeholder:"Ajeromi",value:R,onChange:G=>W(G.target.value)})})]}),y(r0,{children:[s(Hn,{children:"Nearest B/Stop"}),s(Wn,{children:s(ar,{placeholder:"OJA",value:L,onChange:G=>se(G.target.value)})})]})]}),y(_u,{children:[s(Hn,{children:"Phone number"}),s(Wn,{children:s(ar,{placeholder:"Phone number",type:"number",value:M,onChange:G=>j(G.target.value)})})]}),y(SM,{children:[y(wM,{children:[s("span",{children:s(MS,{})}),s("div",{onClick:()=>{e(-1)},children:"Return to Cart"})]}),s($M,{type:"submit",disabled:ie.status==="loading",children:ie.status==="loading"?"Loading...":"Continue"})]})]})}),y(bM,{children:[n==null?void 0:n.map((G,Y)=>s(Gm,{index:Y,name:G.name,price:t.format(G.price),shippingFee:G==null?void 0:G.shippingFee,totalPrice:t.format(i),subtotal:t.format(G.price*G.qty),qty:G.qty,avatar:G.avatar[0].url,id:G._id})),s(mM,{children:s(ps,{children:y(hM,{children:[s(gM,{children:"Total"}),y(pM,{children:["₦",t.format(i)]})]})})})]})]})})})},hM=c.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,pM=c.div`
  font-weight: 700;
`,gM=c.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,mM=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: gold; */
  margin-left: 15px;
  width: 90%;
`,yM=c.img`
  width: 40px;
`,vM=c.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,k3=c.div`
  width: 45%;
`,r0=c.div`
  width: 30%;
`,xM=c.div`
  font-weight: 700;
  width: 95%;
  padding: 10px 10px;
  display: flex;
  border: 1.7px solid grey;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  // background-color: gold;
  height: 30px;

  span {
    margin-left: 10px;
    position: relative;
    bottom: -3px;
    cursor: pointer;
  }
  div {
  }
`,Hn=c.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
`,bM=c.div`
  flex: 1;

  @media (max-width: 768px ){
    display: none;
  }
  /* background-color: blue; */
`,$M=c.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`,wM=c.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`,SM=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-top: 30px;

  span {
    margin-top: 5px;
  }
`,CM=c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,Pu=c.div`
  font-weight: 700;
  margin-right: 20px;
`,Ou=c.div`
  border: 1px solid black;
  background-color: ${({bg:e})=>e?"#D975C0":"transparent"};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  cursor: pointer;
`,ps=c.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,PM=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,ar=c.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  /* margin-right: 20px; */
`,Wn=c.div`
  border: 1px solid gray;
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px 0px;

  span {
    color: blue;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100px;
  }
`,i0=c.div`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 14px;
`,N3=c.div`
  margin-bottom: 50px;
`,_u=c.div`
  margin-bottom: 20px;
`,E3=c.div`
  margin-bottom: 20px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`,OM=c.form`
  width: 90%;
  margin-top: 20px;
`,_M=c.div`
  flex: 1;
  border-right: 2px solid lightgray;
  display: flex;
  justify-content: center;
  /* background-color: gold; */
`,kM=c.div`
  width: 95%;
  display: flex;
`,NM=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,EM=({index:e,totalPrice:t,subtotal:n,props:r})=>{var o,a,l,u,d,f;var i=Intl.NumberFormat();return s("div",{children:y(MM,{children:[y(R3,{children:[y(DM,{children:[s(FM,{children:r.qty}),s(RM,{src:(a=(o=r==null?void 0:r.productID)==null?void 0:o.avatar[0])==null?void 0:a.url})]}),y(AM,{children:[s(TM,{children:(l=r==null?void 0:r.productID)==null?void 0:l.name}),y(o0,{children:["₦ ",i.format((u=r==null?void 0:r.productID)==null?void 0:u.price)]})]})]}),s(A3,{}),s(R3,{children:y(IM,{children:[y(I3,{children:[s(T3,{children:"Subtotal"}),y(o0,{children:["₦",i.format((r==null?void 0:r.qty)*((d=r==null?void 0:r.productID)==null?void 0:d.price))]})]}),y(I3,{children:[s(T3,{children:"Shipping Fee"}),y(o0,{children:["₦ ",i.format((f=r==null?void 0:r.productID)==null?void 0:f.shippingFee)]})]})]})}),s(A3,{})]},e)})},IM=c.div``,I3=c.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,o0=c.div`
  font-weight: 700;
`,T3=c.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,TM=c.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,AM=c.div`
  margin-left: 20px;
`,A3=c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,RM=c.img`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`,FM=c.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d975c0;
  color: white;
  position: relative;
  left: 85px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`,DM=c.div`
  margin-right: 20px;
`,R3=c.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
`,MM=c.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,jM=()=>{var h,m,x;const e=Ja(),t=nt(),n=JSON.parse(localStorage.getItem("order")),r=xi(v=>v.reducers.cartItem),i=n==null?void 0:n._id,{data:o}=Ke({queryKey:["order",i],queryFn:()=>dM(i)});var a=Intl.NumberFormat();const l=$t({mutationKey:["products"],mutationFn:hD,onSuccess:()=>{t("/payment-review"),e(dF(r)),localStorage.removeItem("order")}}),u=(h=n==null?void 0:n.products)==null?void 0:h.map(v=>v==null?void 0:v.productID),d=(m=n==null?void 0:n.products)==null?void 0:m.map(v=>v==null?void 0:v.qty),f=()=>{l.mutate({ids:u,quantities:d})};return s("div",{children:s(rj,{children:y(nj,{children:[y(tj,{children:[y(YM,{children:[s(VM,{children:s(Va,{fontSize:"32px",color:"white"})}),y(qM,{children:[y(GM,{children:[" ","Order ",s("span",{children:o==null?void 0:o.order_No})]}),y(QM,{children:[" ","Thank you ",s("span",{children:o==null?void 0:o.firstName})]})]})]}),y(ej,{children:[y(c0,{children:[s(d0,{children:"Confirmation"}),s(u0,{children:s(F3,{children:"Your order will be shipped immediately"})})]}),y(c0,{children:[s(d0,{children:"Shipping Update"}),s(u0,{children:s(F3,{children:"You will get shipping and delivery update by email"})})]}),y(c0,{children:[s(d0,{children:"Customer Information"}),s(u0,{children:y(XM,{children:[y(l0,{children:[s(s0,{children:"Contact Information"}),s(a0,{children:o==null?void 0:o.email})]}),y(l0,{children:[s(s0,{children:"Shipping Address"}),s(a0,{children:o==null?void 0:o.address})]}),y(l0,{children:[s(s0,{children:"Payment Method"}),s(a0,{children:o==null?void 0:o.payment_method})]})]})})]}),s(JM,{children:s(ZM,{onClick:f,children:"Complete Shipping"})})]})]}),y(KM,{children:[(x=o==null?void 0:o.products)==null?void 0:x.map((v,w)=>s(EM,{index:w,totalPrice:a.format(o==null?void 0:o.subtotal),subtotal:o==null?void 0:o.totalQty,props:v})),s(WM,{children:s(LM,{children:y(zM,{children:[s(BM,{children:"Total"}),y(UM,{children:["₦",a.format(o==null?void 0:o.subtotal)]})]})})}),s(HM,{})]})]})})})},LM=c.div``,zM=c.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`,UM=c.div`
  font-weight: 700;
`,BM=c.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`,HM=c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`,WM=c.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
  margin-left: 25px;
`,YM=c.div`
  display: flex;
  padding: 0 10px;
`,VM=c.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d975c0;
  border-radius: 7px;
`,qM=c.div`
  padding: 3px 10px;
`,GM=c.div`
  font-weight: lighter;
  font-size: 12px;
`,QM=c.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
`,F3=c.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
`,KM=c.div`
  flex: 1;
  border-left: 3px solid lightgray;
  /* background-color: blue; */

  @media (max-width: 700px){
    display: none;
  }
`,ZM=c.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;c.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`;const JM=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  margin-top: 30px;
`;c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;const a0=c.div`
  font-weight: 500;
  margin-right: 20px;
`,s0=c.div`
  font-weight: 700;
`,l0=c.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,XM=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;c.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  margin-left: 10px;
`;const u0=c.div`
  border: 1px solid gray;
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  border-radius: 5px;
  padding: 10px 0px;

  span {
    color: blue;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100px;
  }
`,d0=c.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,c0=c.div`
  margin: 10px;
`,ej=c.div`
  width: 90%;
  margin-top: 20px;
`,tj=c.div`
  flex: 1;
  /* height: 90vh; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: gold; */
`,nj=c.div`
  width: 95%;
  display: flex;
`,rj=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;var D3=function(e){return typeof e=="object"&&e!==null},G5=function(e){var t=e.value,n=t===void 0?"":t,r=e.numInputs,i=r===void 0?4:r,o=e.onChange,a=e.renderInput,l=e.shouldAutoFocus,u=l===void 0?!1:l,d=e.inputType,f=d===void 0?"text":d,h=e.renderSeparator,m=e.placeholder,x=e.containerStyle,v=e.inputStyle,w=ne.useState(0),b=w[0],p=w[1],g=ne.useRef([]),$=function(){return n?n.toString().split(""):[]},S=f==="number"||f==="tel";ne.useEffect(function(){g.current=g.current.slice(0,i)},[i]),ne.useEffect(function(){var F;u&&((F=g.current[0])===null||F===void 0||F.focus())},[u]);var P=function(){if(typeof m=="string"){if(m.length===i)return m;m.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},N=function(F){var ee=S?!isNaN(Number(F)):typeof F=="string";return ee&&F.trim().length===1},T=function(F){var ee=F.target.value;if(N(ee))M(ee),se(b+1);else{var re=F.nativeEvent;re.data===null&&re.inputType==="deleteContentBackward"&&(F.preventDefault(),M(""),se(b-1))}},R=function(F){return function(ee){p(ee),F.target.select()}},W=function(){p(b-1)},L=function(F){var ee=$();F.code==="Backspace"?(F.preventDefault(),M(""),se(b-1)):F.code==="Delete"?(F.preventDefault(),M("")):F.code==="ArrowLeft"?(F.preventDefault(),se(b-1)):F.code==="ArrowRight"||F.key===ee[b]?(F.preventDefault(),se(b+1)):(F.code==="Spacebar"||F.code==="Space"||F.code==="ArrowUp"||F.code==="ArrowDown")&&F.preventDefault()},se=function(F){var ee,re,z=Math.max(Math.min(i-1,F),0);g.current[z]&&((ee=g.current[z])===null||ee===void 0||ee.focus(),(re=g.current[z])===null||re===void 0||re.select(),p(z))},M=function(F){var ee=$();ee[b]=F[0],j(ee)},j=function(F){var ee=F.join("");o(ee)},X=function(F){var ee;F.preventDefault();var re=$(),z=b,_=F.clipboardData.getData("text/plain").slice(0,i-b).split("");if(!(S&&_.some(function(U){return isNaN(Number(U))}))){for(var k=0;k<i;++k)k>=b&&_.length>0&&(re[k]=(ee=_.shift())!==null&&ee!==void 0?ee:"",z++);se(z),j(re)}};return ne.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},D3(x)&&x),className:typeof x=="string"?x:void 0},Array.from({length:i},function(F,ee){return ee}).map(function(F){var ee,re,z;return ne.createElement(ne.Fragment,{key:F},a({value:(ee=$()[F])!==null&&ee!==void 0?ee:"",placeholder:(z=(re=P())===null||re===void 0?void 0:re[F])!==null&&z!==void 0?z:void 0,ref:function(_){return g.current[F]=_},onChange:T,onFocus:function(_){return R(_)(F)},onBlur:W,onKeyDown:L,onPaste:X,autoComplete:"off",maxLength:1,"aria-label":"Please enter OTP character ".concat(F+1),style:Object.assign({width:"1em",textAlign:"center"},D3(v)&&v),className:typeof v=="string"?v:void 0,type:f},F),F<i-1&&(typeof h=="function"?h(F):h))}))};const ij=()=>{const e=nt(),[t,n]=C.useState(""),r=JSON.parse(localStorage.getItem("user")),i=$t({mutationFn:pI,onSuccess:()=>{r.isSeller===!0&&e("/auth/personalinfo")},onError:()=>{e("/auth/otperror")}});return s(oj,{children:y(aj,{children:[s(sj,{children:"OTP Verification!"}),s(uj,{children:"Please enter the OTP you received"}),s(G5,{style:{border:"1px solid gold"},value:t,onChange:n,numInputs:6,renderSeparator:s("span",{children:" "}),renderInput:a=>s("input",{...a}),containerStyle:"containerStyle",inputStyle:"inputStyle",width:"70px"}),s(lj,{children:s("button",{onClick:()=>{const a=r._id;i.mutate({id:a,otp:t})},children:"Enter"})})]})})},oj=c.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`,aj=c.div`
  /* width: 280px; */
  /* height: 150px; */
  /* border: 1.8px solid #d975c0; */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;

  .just-display{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,sj=c.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`,lj=c.div`
  width: 40%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,uj=c.div`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;c.input`
  width: 2rem;
  height: 2rem;
  border: 2px solid #d975c0;
  outline: none;
  margin: 5px;

  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  ::-webkit-outer-spin-button{
    appearance: none;
  }
  ::-webkit-inner-spin-button{
    appearance: none;
  }

`;const dj=()=>{const e=nt(),[t,n]=C.useState(""),[r,i]=C.useState(""),[o,a]=C.useState(""),l=$t({mutationFn:vI,onSuccess:f=>{console.log(f),e("/auth/review")},onError:f=>{console.log(f.message)}}),u=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(mj,{children:y(gj,{children:[s(pj,{children:"Provide Bank Details"}),y(hj,{children:["Enter every necessary details to create",s("br",{})," your own seller account"," "]}),y(fj,{onSubmit:f=>{f.preventDefault();const h=u._id,m=!0,x=parseInt(o);l.mutate({id:h,bankName:t,accountName:r,accNumber:x,completed:m})},children:[y(g0,{children:[s(p0,{children:"Bank"}),s(f0,{children:s(h0,{placeholder:"Bank",value:t,onChange:f=>n(f.target.value)})})]}),y(g0,{children:[s(p0,{children:"Account Name"}),s(f0,{children:s(h0,{placeholder:"Account Name",value:r,onChange:f=>i(f.target.value)})})]}),y(g0,{children:[s(p0,{children:"Account Number"}),s(f0,{children:s(h0,{placeholder:"Account Number",type:"number",value:o,onChange:f=>a(f.target.value)})})]}),s(cj,{type:"submit",children:l.status==="Loading..."?"Loadding":"Continue"})]})]})})})},cj=c.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`;c.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const f0=c.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`,h0=c.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
  /* margin-bottom: 5px; */
  /* padding-left: 10px;
    padding-right: 10px; */
  ::-webkit-outer-spin-button{
    appearance: none;
  }
  ::-webkit-inner-spin-button{
    appearance: none;
  }
`,p0=c.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,g0=c.div`
  margin-bottom: 10px;
`,fj=c.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,hj=c.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,pj=c.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,gj=c.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,mj=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,yj=()=>{const e=nt(),[t,n]=C.useState(Qm);let[r,i]=C.useState(0);const[o,a]=C.useState(""),[l,u]=C.useState("Default"),[d,f]=C.useState("123456"),[h,m]=C.useState(""),[x,v]=C.useState(""),[w,b]=C.useState(""),p=()=>{i(()=>r+1),r>=t.length-1&&i(()=>r=0)},g=()=>{b(t[r].name)},$=$t({mutationFn:yI,onSuccess:N=>{console.log(N),e("/auth/information")},onError:N=>{console.log(N.message)}});C.useEffect(()=>{g()},[r]);const S=JSON.parse(localStorage.getItem("user")),P=N=>{N.preventDefault();const T=S._id,R=parseInt(d);$.mutate({id:T,address:o,address2:l,shippingFrom:w,codePostal:R,shopName:h,city:x})};return console.log(w),s("div",{children:s(Pj,{children:y(Cj,{children:[s(Sj,{children:"Business Information "}),y(wj,{children:["Enter every necessary details to create your own seller account"," "]}),y($j,{onSubmit:P,children:[y(Po,{children:[s(Co,{children:"Shop Name *"}),s(So,{children:s(gs,{value:h,onChange:N=>m(N.target.value)})})]}),y(Po,{children:[s(Co,{children:"Postal code/Zip code"}),s(So,{children:s(gs,{type:"number",value:d,onChange:N=>f(N.target.value)})})]}),y(Po,{children:[s(Co,{children:"Address *"}),s(So,{children:s(gs,{value:o,onChange:N=>a(N.target.value)})})]}),y(Po,{children:[s(Co,{children:"Address 2"}),s(So,{children:s(gs,{value:l,onChange:N=>u(N.target.value)})})]}),y(Po,{children:[s(Co,{children:"City / Town"}),s(So,{children:s(gs,{value:x,onChange:N=>v(N.target.value)})})]}),y(Po,{children:[s(Co,{children:"What country are you shipping from?"}),y(So,{children:[s(vj,{src:t[r].flag}),s(bj,{onClick:p,children:s(cn,{})})]})]}),s(xj,{type:"submit",children:$.status==="loading"?"Loading...":"Continue"})]})]})})})},vj=c.img`
  width: 40px;
`,xj=c.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`;c.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const bj=c.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,So=c.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`,gs=c.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
  /* margin-bottom: 5px; */
  /* padding-left: 10px;
    padding-right: 10px; */
    ::-webkit-outer-spin-button{
    appearance: none;
  }
  ::-webkit-inner-spin-button{
    appearance: none;
  }
`,Co=c.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,Po=c.div`
  margin-bottom: 10px;
`,$j=c.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,wj=c.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,Sj=c.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,Cj=c.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,Pj=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Oj=()=>{const e=nt(),[t,n]=C.useState(Qm);let[r,i]=C.useState(0),[o,a]=C.useState(!1);const[l,u]=C.useState(""),[d,f]=C.useState(""),[h,m]=C.useState(""),x=()=>{if(o===!0)return a(()=>o=!1);a(()=>o=!0)},v=()=>{i(()=>r+1),r>=t.length-1&&i(()=>r=0)},w=()=>{m(t[r].name)},b=$t({mutationFn:mI,onSuccess:$=>{console.log($),e("/auth/businessinfo")},onError:$=>{console.log($.message)}});C.useEffect(()=>{w()},[r]);const p=JSON.parse(localStorage.getItem("user"));return s("div",{children:s(Mj,{children:y(Dj,{children:[s(Fj,{children:"Personal Details "}),s(Rj,{children:"Almost there, just few more details"}),y(Aj,{onSubmit:$=>{$.preventDefault();const S=p._id;b.mutate({id:S,gender:l,DateOfBirth:d,country:h})},children:[y(v0,{children:[s(y0,{children:"Date of Birth"}),s(m0,{children:s(Tj,{placeholder:"04/19/1999",type:"date",value:d,onChange:$=>{f($.target.value)}})})]}),y(v0,{children:[s(y0,{children:"Gender"}),s(m0,{children:y(_j,{value:l,onChange:$=>{u($.target.value)},children:[s("option",{children:"Select"}),s("option",{children:"Male"}),s("option",{children:"Female"}),s("option",{children:"Other"})]})})]}),y(v0,{children:[s(y0,{children:"Country"}),y(m0,{children:[s(Ej,{src:t[r].flag}),s(Ij,{onClick:v,children:s(cn,{})})]})]}),o?s(M3,{bg:"",type:"submit",children:b.status==="loading"?"Loading...":"Continue"}):s(M3,{bg:"fff",disabled:!0,children:"Continue"}),y(Nj,{children:[" ",s(kj,{type:"checkbox",onClick:x}),"Don't have an account? ",s("span",{children:"Terms and Conditions"})]})]})]})})})},_j=c.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`,kj=c.input`
  margin-right: 10px;
  cursor: pointer;
`,Nj=c.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,Ej=c.img`
  width: 40px;
`,M3=c.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color:${({bg:e})=>e===""?"#D975C0":"#c4c4c4"};
  border-radius: 5px;
  color: ${({bg:e})=>e===""?"white":"black"};
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`;c.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;const Ij=c.div`
  cursor: pointer;
`,m0=c.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;

  /* input{
    display: none;
  } */
`,Tj=c.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
`,y0=c.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`,v0=c.div`
  margin-bottom: 10px;
`,Aj=c.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Rj=c.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`,Fj=c.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`,Dj=c.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`,Mj=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;function jj(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"}}]})(e)}function Lj(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"}}]})(e)}function zj(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"}},{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}}]})(e)}function Uj(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"}}]})(e)}function Ef(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}}]})(e)}function Kl(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function Bj(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}const Hj=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:es}),[t,n]=C.useState(0),r=e==null?void 0:e.filter(l=>l.status==="approved"),i=8,o=t*i,a=r==null?void 0:r.slice(o,o+i);return s(Yj,{children:y(Wj,{children:[s(qj,{children:"Featured "}),s(Kj,{children:a==null?void 0:a.map((l,u)=>s(Qj,{children:s(Gj,{children:s(Vj,{src:l==null?void 0:l.avatar[0].url})})},u))})]})})},Wj=c.div`
  width: 93%;
  /* height: 200px; */
  overflow-x: auto;
  -ms-overflow-style: none;
  background: #D9D9D9;
`,Yj=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`,Vj=c.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  background-color: gold;
  margin: 20px;
`,qj=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 10px;
`,Gj=c.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`;c.div`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
`;c.tr``;const Qj=c.tr`
 
`,Kj=c.div`
  width: 78rem;
  /* height: 150px; */
  /* padding: 0px 20px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* overflow-x: scroll; */
`,Zj=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:es}),[t,n]=C.useState(0),r=8,i=t*r,o=e==null?void 0:e.slice(i,i+r),a=o==null?void 0:o.filter(h=>h.category==="phone"&&h.status==="approved"),l=o==null?void 0:o.filter(h=>h.category==="electronics"&&h.status==="approved"),u=o==null?void 0:o.filter(h=>h.category==="food"&&h.status==="approved"),d=o==null?void 0:o.filter(h=>h.category==="clothing"&&h.status==="approved");var f=Intl.NumberFormat();return y(Jj,{children:[s(Hj,{}),y(Iu,{children:[s(Nu,{children:"Mobiles"}),s(Eu,{children:a==null?void 0:a.map((h,m)=>s(Zi,{id:h._id,name:h.name,price:f.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url,data:h}))}),s(ku,{to:"/phone",children:s("button",{children:"See All"})})]}),y(Iu,{children:[s(Nu,{children:"Home Appliances"}),s(Eu,{children:l==null?void 0:l.map((h,m)=>s(Zi,{id:h._id,name:h.name,price:f.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url,data:h}))}),s(ku,{to:"/electronics",children:s("button",{children:"See All"})})]}),y(Iu,{children:[s(Nu,{children:"Accessories"}),s(Eu,{children:d==null?void 0:d.map((h,m)=>s(Zi,{id:h._id,name:h.name,price:f.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url,data:h}))}),s(ku,{to:"/clothing",children:s("button",{children:"See All"})})]}),y(Iu,{children:[s(Nu,{children:"Foodstuffs"}),s(Eu,{children:u==null?void 0:u.map((h,m)=>s(Zi,{id:h._id,name:h.name,price:f.format(h==null?void 0:h.price),img:h==null?void 0:h.avatar[0].url,data:h}))}),s(ku,{to:"/food",children:s("button",{children:"See All"})})]})]})},ku=c(be)`
  width: 97%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  button {
    width: 9%;
    background-color: #d975c0;
    color: white;
    font-size: 12px;
    padding: 8px 0;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,Nu=c.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`,Eu=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`,Iu=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;

  
`,Jj=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;function Xj(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}}]})(e)}function Ii(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21.9 8.89l-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zm-2.99-3.9l1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52L9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41a1.42 1.42 0 01-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z"}}]})(e)}function eL(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18 7h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h15v4zM4 9v10h16V9H4zm0-4v2h12V5H4zm11 8h3v2h-3v-2z"}}]}]})(e)}function tL(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"}}]}]})(e)}function nL(e){return we({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 6.5v3c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-15c-0.276 0-0.5 0.224-0.5 0.5z"}}]})(e)}const rL=()=>{C.useState();const e=nt(),t=JSON.parse(localStorage.getItem("user")),n=xi(l=>l.reducers.cartItem),r=n==null?void 0:n.reduce((l,u)=>l+u.qty*u.price,0),i=Ja(),o=()=>{t?r>=5e4?e("/checkout"):alert("You must have a total price of ₦50,000 to perform this action"):e("/login-user")};var a=Intl.NumberFormat();return s("div",{children:s(xL,{children:y(vL,{children:[y(hL,{children:[s(mL,{children:"Shopping Cart"}),n==null?void 0:n.map((l,u)=>y(fL,{children:[y(cL,{children:[y(lL,{children:[s(dL,{src:l.avatar[0].url}),s(uL,{children:l.name})]}),y(sL,{children:["₦",a.format(l.price*l.qty)]})]}),y(aL,{children:[y(oL,{onClick:()=>i(cF(l)),children:[s("span",{children:s(Xj,{size:"20px"})}),"Remove"]}),y(iL,{children:[s(j3,{onClick:()=>i(co(l)),children:s(tL,{fontWeight:"700"})}),s("span",{children:l.qty}),s(j3,{onClick:()=>i(Nf(l)),children:s(nL,{})})]})]})]},u))]}),s(yL,{children:y(gL,{children:[s("span",{children:"SUBTOTAL"}),y("div",{children:["₦",a.format(r)]}),s(pL,{onClick:o,children:" Checkout"})]})})]})})})},j3=c.button`
  padding: 10px 15px;
  border: 0px;
  border-radius: 2px;
  outline: none;

  background-color: #e8559e;
  color: white;
  cursor: pointer
`,iL=c.div`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

`,oL=c.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  color: #e8559e;
  cursor: pointer;
  span{
    margin-right: 5px;
  }
`,aL=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,sL=c.div`
  font-size: 17px;
  font-weight: 700;

  @media (max-width: 768px){
    font-size: 14px;
  }

  @media (max-width: 400px){
    font-size: 12px;
    font-weight: 600;
  }
`,lL=c.div`
  display: flex;
  /* background-color: gold; */
  margin-right: 10px;
`,uL=c.div`
  font-size: 17px;
  font-weight: 700;

  @media (max-width: 768px){
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 400px){
    font-size: 12px;
    font-weight: 600;
  }
`,dL=c.img`
  /* background-color: gold; */
  width: 90px;
  height: 90px;
  margin-right: 20px;

  @media (max-width: 400px){
    width: 60px;
    height: 60px;
  }
`,cL=c.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`,fL=c.div`
  margin-bottom: 20px;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`,hL=c.div`
  width: 90%;
  background-color: white;
`;c.div`
  width: 130px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;const pL=c.button`
  padding: 12px 35px;
  border: 0;
  outline: none;
  background-color: #e8559e;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`,gL=c.div`
  width: 150px;
  margin-right: 34px;
  span {
    font-size: 18px;
    font-weight: 700;
  }

  div {
    font-size: 13px;
    font-weight: 500;
    margin: 8px 0;
  }
`,mL=c.div`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 40px;
  margin-left: 15px;
  margin-top: 10px;
`,yL=c.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1.9px solid grey;
  padding: 20px 0;
`,vL=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`,xL=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  background-color: #F1F1F2;
`,bL=()=>{const{data:e}=Ke({queryKey:["products"],queryFn:es}),{id:t}=H$(),[n,r]=C.useState(0),i=20,o=n*i,a=e==null?void 0:e.slice(o,o+i),l=a==null?void 0:a.filter(f=>f.category===t||f.name===t||f.brand===t),u=l==null?void 0:l.filter(f=>f.status==="approved");var d=Intl.NumberFormat();return s(SL,{children:s(wL,{children:s($L,{children:u==null?void 0:u.map((f,h)=>s(Zi,{id:f._id,name:f.name,price:d.format(f==null?void 0:f.price),img:f==null?void 0:f.avatar[0].url,data:f}))})})})};c.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;

  @media (max-width: 380px){
    font-size: 18px;
  }
`;const $L=c.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px){
    justify-content: space-between;
  }
`,wL=c.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: white;

  @media (max-width: 768px){
    width: 95%;
  }
  
`,SL=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  /* background-color: #f1f1f2; */
`,CL=()=>s("div",{children:s(ML,{children:y(DL,{children:[y(FL,{children:[y(PL,{children:[s(OL,{children:s(Va,{fontSize:"32px",color:"white"})}),y(_L,{children:[y(kL,{children:[" ","Order ",s("span",{children:"05432"})]}),y(NL,{children:[" ","Thank you ",s("span",{children:"Manel"})]})]})]}),y(RL,{children:[y(C0,{children:[s(S0,{children:"Contact"}),s(w0,{children:s(L3,{children:"You@example.com"})})]}),y(C0,{children:[s(S0,{children:"Shipping Update"}),s(w0,{children:s(L3,{children:"You will get shipping and delivery update by email"})})]}),y(C0,{children:[s(S0,{children:"Customer Information"}),s(w0,{children:y(AL,{children:[y($0,{children:[s(b0,{children:"Contact Information"}),s(x0,{children:"pay@gmail.com"})]}),y($0,{children:[s(b0,{children:"Shipping Address"}),s(x0,{children:"Location"})]}),y($0,{children:[s(b0,{children:"Payment Method"}),s(x0,{children:"Location"})]})]})})]}),s(TL,{children:s(IL,{children:"Complete Shipping"})})]})]}),s(EL,{children:s(Gm,{})})]})})}),PL=c.div`
  display: flex;
  padding: 0 10px;
`,OL=c.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d975c0;
  border-radius: 7px;
`,_L=c.div`
  padding: 3px 10px;
`,kL=c.div`
  font-weight: lighter;
  font-size: 12px;
`,NL=c.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
`,L3=c.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
`,EL=c.div`
  flex: 1;
  height: 100vh;
  border-left: 3px solid lightgray;
  /* background-color: blue; */
`,IL=c.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;c.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`;const TL=c.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  margin-top: 30px;
`;c.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;const x0=c.div`
  font-weight: 500;
  margin-right: 20px;
`,b0=c.div`
  font-weight: 700;
`,$0=c.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,AL=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;c.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  margin-left: 10px;
`;const w0=c.div`
  border: 1px solid gray;
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  border-radius: 5px;
  padding: 10px 0px;

  span {
    color: blue;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100px;
  }
`,S0=c.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`,C0=c.div`
  margin: 10px;
`,RL=c.div`
  width: 90%;
  margin-top: 20px;
`,FL=c.div`
  flex: 1;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: gold; */
`,DL=c.div`
  width: 95%;
  display: flex;
`,ML=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`,jL=()=>s(LL,{children:y(zL,{children:[s(UL,{children:s(Va,{fontSize:"50px",color:"green"})}),y(HL,{children:["Your Order As Been Received",s("br",{})," SuccessFully"]}),s(BL,{to:"/allItems",children:s("button",{children:"Continue"})})]})}),LL=c.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,zL=c.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`,UL=c.div``,BL=c(Bl)`
  width: 40%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,HL=c.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,WL=()=>cm([{path:"/",children:[{index:!0,element:s(yP,{})},{path:"/auth",children:[{index:!0,element:s(pA,{})},{path:"signin",element:s(wA,{})},{path:"verify",element:s(ij,{})},{path:"information",element:s(AA,{})},{path:"bankdetails",element:s(dj,{})},{path:"businessinfo",element:s(yj,{})},{path:"personalInfo",element:s(Oj,{})},{path:"review",element:s(zD,{})},{path:"acct-review",element:s(VD,{})},{path:"otperror",element:s(iM,{})}]},{path:"/allitems",element:s(JD,{})},{path:"/payment-review",element:s(jL,{})},{path:"/featured",element:s(Zj,{})},{path:"/:id",element:s(bL,{})},{path:"/checkout",element:s(fM,{})},{path:"/finishshipping",element:s(jM,{})},{path:"/ready-to-ship",element:s(CL,{})},{path:"/cart",element:s(rL,{})},{path:"/detail/:id",element:s(xD,{})},{path:"/payment",children:[{index:!0,element:s(ND,{})}]}]}]);function P0(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function YL(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}const VL=({myRef:e})=>{const t=JSON.parse(localStorage.getItem("user"));return s("div",{children:y(qL,{ref:e,children:[s(jr,{to:"/electronics",children:"Electronics"}),s(jr,{to:"/phone",children:"Mobile Phones"}),s(jr,{to:"/clothing",children:"Clothing & Fashion"}),s(jr,{to:"/food",children:"Food & Groceries"}),s(jr,{to:"/allitems",children:"All Products"}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),s("br",{}),t?s(ro,{children:s(jr,{to:"/",onClick:()=>{localStorage.removeItem("user")},children:"Log Out"})}):y("div",{children:[s(jr,{to:"/signup-user",children:"Create Account"}),s(jr,{to:"/seller-page",children:"Create Seller"})]})]})})},qL=c.div`
 display: none;

 @media (max-width: 1000px){
  width: 250px;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* background-color: gold; */
  border-radius: 5px;

  position: fixed;
  top: 0px;
  /* left: 150px; */
  left: -1000px;
  z-index: 1111;
  transition: all 350ms ease-in-out;

  ::before{
    content: "";
    position: fixed;
    width: 100%;
    height: 100vh;
    /* background-color: #6a69649a; */
    z-index: -1;
  }
  div{
    display: flex;
    flex-direction: column;
  }
 }
`,jr=c(be)`
  width: 95%;
  line-height: 4;
  padding-left: 10px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  font-weight: 700;
  transition: all 350ms ease-in-out;
  text-decoration: none;
  color: black;
  :hover {
    background-color: lightgray;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }
`,z3=({setshow_search:e})=>{const{data:t}=Ke({queryKey:["products"],queryFn:es}),[n,r]=C.useState(0),i=t==null?void 0:t.filter(x=>x.status==="approved"),o=20,a=n*o,l=i==null?void 0:i.slice(a,a+o),[u,d]=C.useState(),f=["name","brand","category"],h=x=>{const v=x==null?void 0:x.filter(w=>f.some(b=>{const p=w[b];return typeof p=="string"&&p.toLowerCase().includes(u==null?void 0:u.toLowerCase())}));return u&&v!=null&&v.length?v:null},m=h(l);return y(KL,{children:[y(QL,{children:[s("span",{onClick:()=>e(!1),children:s(jj,{size:"30px",color:"white"})}),y(JL,{children:[s("input",{placeholder:"Search by name or brand",value:u,onChange:x=>d(x.target.value)}),s("button",{onClick:()=>{h(l)},children:s(Kl,{})})]})]}),s("div",{children:m==null?void 0:m.map((x,v)=>s(ZL,{onClick:()=>{e(!1)},children:s(GL,{to:`/${x.name}`,onClick:()=>{d("")},children:x.name})},x._id))})]})},GL=c(be)`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  /* border-bottom: 1px solid lightgray; */
  padding: 10px 5px;

  :hover{
    color: #d975c0;
    background-color: lightgray;
  }
`,QL=c.div`
  display: flex;
`,KL=c.div`

  @media (max-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: column;

    span{
      height: 60px;
      /* background-color: gold; */
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 15px 10px 5px;
      cursor: pointer;
    }
  }
`,ZL=c.div`
  width: 400px;
  max-height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  border: 1px solid #d975c0;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  overflow-y: auto;

  @media (max-width: 768px){
    position: relative;
    top: 20px;
    width: 100%;
    border: 0;
    border-radius: 0px;
  }
`,JL=c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: white;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
    background-color: transparent;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;
    cursor: pointer;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    margin-right: 10px;
    input{
      width: 95%;
    }
  }
`,XL=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(!1),[a,l]=C.useState(!1),[u,d]=C.useState(!1),f=JSON.parse(localStorage.getItem("user")),h=C.useRef(),m=xi(p=>p.reducers.cartItem),x=nt(),v=()=>{localStorage.removeItem("user"),x("/")},w=()=>{h.current.style.left="0px",o(!0)},b=()=>{h.current.style.left="-1000px",o(!1)};return y("div",{children:[s(sz,{children:y(lz,{children:[s(dz,{to:"/",children:y(uz,{children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]})}),y(cz,{children:[y(ms,{onMouseOver:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[s("div",{children:"Categories"}),s("span",{children:s(cn,{})})]}),e?y(az,{onMouseOver:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:[s(be,{to:"/electronics",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Electronics"})}),s(be,{to:"/phone",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Mobile Phones"})}),s(be,{to:"/clothing",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Clothing & Fashion"})}),s(be,{to:"/food",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Food & Groceries"})})]}):null,s(rz,{children:s(z3,{})}),y(ms,{onMouseOver:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:[s("div",{children:" Account"}),s("span",{children:s(cn,{})})]}),n?s(oz,{onMouseOver:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:f?s(ro,{children:s(wn,{onClick:v,children:"Log Out"})}):y(ro,{children:[s(be,{to:"/signup-user",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Create Account"})}),s(be,{to:"/seller-page",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Create Seller"})})]})}):null,y(ms,{onClick:()=>{d(!0)},children:[s("div",{children:"Search"}),s("span",{children:s(YL,{})})]}),y(ms,{children:[s(be,{to:"/cart",style:{textDecoration:"none",color:"black"},children:s("div",{children:" Cart"})}),s(be,{to:"/cart",style:{textDecoration:"none",color:"black"},children:y("span",{children:[s(YA,{color:"black"}),m.length>0?s(iz,{children:m.length}):null]})})]}),y(ms,{children:[s("div",{children:"Help"}),s("span",{children:s(zj,{})})]}),s(tz,{children:s(P0,{size:"20px",onMouseOver:()=>{l(!0)},onMouseLeave:()=>{l(!1)}})}),a?y(ez,{onMouseOver:()=>{l(!0)},onMouseLeave:()=>{l(!1)},children:[s(be,{to:"/electronics",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Electronics"})}),s(be,{to:"/phone",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Mobile Phones"})}),s(be,{to:"/clothing",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Clothing & Fashion"})}),s(be,{to:"/food",style:{textDecoration:"none",width:"100%"},children:s(wn,{children:"Food & Groceries"})})]}):null,s(fz,{children:i?s(P0,{size:"20px",onClick:b}):s(P0,{size:"20px",onClick:w})}),s("div",{onClick:b,children:s(VL,{myRef:h})})]})]})}),u?s(nz,{children:s(z3,{setshow_search:d})}):null]})},ez=c.div`
  width: 210px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  /* border: 1px solid blue; */
  border-radius: 5px;

  position: absolute;
  top: 65px;
  /* left: 60%; */
  right: 40px;
  z-index: 1111;
  @media (max-width: 768px) {
    display: none;
  }
`,tz=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;    
  @media (max-width: 1000px) {
      display: none;
  }
`,nz=c.div`
  display: none;

  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0px;


  }
`,rz=c.div`
  @media (max-width:768px) {
    display: none;
  } 
`,iz=c.main`
  color: white;
  position: absolute;
  font-size: 10px;
  font-weight: 500;
  background-color: red;
  border-radius: 50%;
  /* padding: 5px; */
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -5px;
  right: -5px;
`,wn=c.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;

  :hover {
    background-color: lightgray;
  }
`,oz=c.div`
  width: 210px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  /* border: 1px solid blue; */
  border-radius: 5px;

  position: absolute;
  top: 60px;
  left: 60%;
  right: 40%;
  z-index: 1111;
  @media (max-width: 768px) {
    display: none;
  }
`,az=c.div`
  width: 210px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 70px;
  /* left: 150px; */
  z-index: 1111;

  @media (max-width: 768px) {
    display: none;
  }
`,sz=c.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;

  @media (max-width: 768px) {
    height: 70px;
  }
`,lz=c.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`,uz=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,dz=c(be)`
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  margin-right: 30px;
  flex: 0.2 0.3 auto;
  text-decoration: none;
  color: black;
  /* background: gold; */
  /* margin-bottom: 10px; */
 
  img {
    height: 60px;
    width: 60px;
  }

  div {
    font-weight: 700;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
      width: 40px;
    }
  }

  @media (max-width: 440px){
    img{
      width: 40px;
      height: 40px;
    }
    div{
      font-weight: 700;
      font-size: 16px;
    }
  }
  @media (max-width: 414px){
    img{
      width: 30px;
      height: 30px;
    }
    div{
      font-weight: 700;
      font-size: 14px;
    }
  }
  @media (max-width: 283px){
    img{
      width: 20px;
      height: 20px;
    }
    div{
      font-weight: 500;
      font-size: 12px;
    }
  }
`,cz=c.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 85%; */
  flex: 1 0 100px;
  @media (max-width:768px) {
    flex: 0.5;
    align-items: flex-end;
    height: 65px;
  }
  width: 80%;
`,fz=c.div`
  display: none;
  @media (max-width: 1000px) {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    /* background-color: blue; */
    cursor: pointer;    
  }
`,ms=c.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: gold;
  height: 30px;
  cursor: pointer;
  margin-left: 10px;

  span {
    margin-left: 10px;
    position: relative;
    bottom: -3px;
  }
  :nth-child(1) {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  :nth-child(3) {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  :nth-child(4) {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }

  @media (max-width: 414px){
    div{
      display: none;
    }
  }
`,hz=()=>y("div",{children:[s(XL,{}),s(WL,{}),s(F$,{})]}),Ve=({children:e})=>{const t=JSON.parse(localStorage.getItem("user"));return(t==null?void 0:t.isSeller)===!0?e:s(jC,{to:"/"})},Lr=({pr:e,da:t,ti:n,bg:r,sales:i,name:o,sales1:a,id:l})=>{function u(d){return d>=1e6?(d/1e6).toFixed(1)+"M":d>=1e3?(d/1e3).toFixed(1)+"K":d}return s(ro,{children:y(bz,{children:[y(xz,{children:[s(pz,{}),y(mz,{children:[s(vz,{children:s("span",{children:o})}),y(yz,{children:[a&&y(U3,{children:["₦",u(a)]}),i&&s(U3,{children:u(i)})]})]})]}),s(gz,{cl:"#7c7eff",bg:"#e5e1ff",children:e})]})})};c.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  margin: 10px;
`;c.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;c.div`
  width: 85%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;c.div`
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;c.div`
  font-size: 16px;
`;c.div`
  font-size: 16px;
`;c.div`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
`;c.div`
  background-color: yellow;
  width: 60%;
  height: 100%;
`;c.div`
  color: black;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 60%;

  span {
    color: yellow;
    font-size: 13px;
    font-weight: bold;
  }
  h1 {
    color: skyblue;
    font-size: 13px;
    font-weight: bold;
  }
  h2 {
    color: red;
    font-size: 13px;
    font-weight: bold;
  }
  h3 {
    color: purple;
    font-size: 13px;
    font-weight: bold;
  }
`;const pz=c.div`
    width: 5px;
    height: 110px;
    background-color: blue;
    border-radius: 10px;
    /* margin-left: 10px; */
`,gz=c.div`
    /* width: 20px; */
    height: 20px;
    padding: 10px 15px;
    background-color: ${({bg:e})=>e};
    color: ${({cl:e})=>e};
    font-size: 20px;
    border-radius: 5px; 
`,mz=c.div`
    margin-left: 20px;
`;c.div`
    font-weight: 500;
    font-size: 14px;
`;const U3=c.div`
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 20px;
`,yz=c.div`
    display: flex;
    flex-direction: column;
`,vz=c.div`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #8f9099;
`,xz=c.div`
    display: flex;
`,bz=c.div`
    /* height: 200px; */
    width: 300px;
    display: flex;
    justify-content: space-between;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin: 10px;
    padding: 20px;

    @media (max-width: 768px){
        width: 100%;
    }
`,rt=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(!1);return s(Oz,{children:s(Pz,{children:y(Cz,{children:[y(B3,{children:[y(vs,{onClick:()=>{t(!0)},children:[s("span",{children:s(YS,{fontSize:"25px",color:"#9661cb"})}),s(ys,{children:"Product"}),s("span",{children:s(cn,{})})]}),e?y(Sz,{onClick:()=>{t(!1)},children:[s(on,{to:"/seller-dashboard/all-product",children:"All Products"}),s(on,{to:"/seller-dashboard/live-product",children:"Live Products"}),s(on,{to:"/seller-dashboard/sold-product",children:"Sold Out"}),s(on,{to:"/seller-dashboard/rejected-product",children:"Rejected Products"})]}):null,y(vs,{onClick:()=>{r(!0)},children:[s("span",{children:s(US,{fontSize:"25px",color:"brown"})}),s(ys,{children:"Orders"}),s("span",{children:s(cn,{})})]}),n?y(wz,{onClick:()=>{r(!1)},children:[s(on,{to:"/seller-dashboard/all-orders",children:"All Orders"}),s(on,{to:"/seller-dashboard/pending-orders",children:"Pending Orders"}),s(on,{to:"/seller-dashboard/ready-to-ship",children:"Ready to Ship"}),s(on,{to:"/seller-dashboard/shipped",children:"Shipped"})]}):null,y(vs,{onClick:()=>{o(!0)},children:[s("span",{children:s(BS,{fontSize:"25px",color:"#c05f3e"})}),s(ys,{children:"Completed"}),s("span",{children:s(cn,{})})]}),i?y($z,{onClick:()=>{o(!1)},children:[s(on,{to:"/seller-dashboard/delivered-orders",children:"Delivard"}),s(on,{to:"/seller-dashboard/cancelled-orders",children:"Cancelled"}),s(on,{to:"/seller-dashboard/failed-orders",children:"Failed"}),s(on,{to:"/seller-dashboard/returned-orders",children:"Returned"})]}):null]}),y(B3,{children:[s(be,{to:"/seller-dashboard/uploads",style:{textDecoration:"none",color:"black"},children:y(vs,{children:[s("span",{children:s(WS,{fontSize:"25px",color:"#47390f"})}),s(ys,{children:"Upload Items"}),s("span",{children:s(cn,{})})]})}),s(be,{to:"/seller-dashboard/transactions",style:{textDecoration:"none",color:"black"},children:y(vs,{children:[s("span",{children:s(HS,{fontSize:"25px",color:"gray"})}),s(ys,{children:"Transactions"}),s("span",{children:s(cn,{})})]})})]})]})})})},B3=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  width: 100%;

  @media (max-width: 600px){
    flex-direction: column;
  }

  /* flex-wrap: wrap; */
`,on=c(be)`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  color: black;

  :hover {
    background-color: lightgray;
  }
`,$z=c.div`
  width: 200px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 200px;
  right: 30px;
  z-index: 1111;

  @media (max-width: 768px){
    top: 215px;
  }
  @media (max-width: 600px){
    right: 30px;
    top: 380px;
  }
`,wz=c.div`
  width: 200px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 200px;
  right: 500px;
  /* left: 150px; */
  z-index: 1111;

  @media (max-width: 900px){
    right: 300px;
  }
  @media (max-width: 768px){
    right: 300px;
    top: 215px;
  }
  @media (max-width: 600px){
    right: 30px;
    top: 290px;
  }
`,Sz=c.div`
  width: 200px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 200px;
  left: 40px;
  z-index: 1111;

  @media (max-width: 768px){
    top: 215px;
  }
 
`,ys=c.div`
  font-size: 12px;
  font-weight: 700;
`,vs=c.div`
  width: 120px;
  height: 40px;
  border-radius: 50px;
  padding: 0 20px;
  /* margin: 30px 100px; */
  /* background-color: black; */
  span {
    position: relative;
    bottom: -3px;
  }
  div {
    position: relative;
    bottom: -1px;
    cursor: pointer;
  }
  border: 1.8px solid #d975c0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 20px;
  }
`;c.div`
  width: 95%;
  height: 75px;
  /* min-height: 100%; */
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  min-height: 150px;

  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;const Cz=c.div`
  /* background-color: gold; */
  width: 90%;
  /* padding: 0 10px; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`,Pz=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`,Oz=c.div`
  width: 100%;
  /* height: 60px; */
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 20px; */
`,_z=()=>{const t=JSON.parse(localStorage.getItem("user"))._id,{data:n}=Ke({queryKey:["products"],queryFn:()=>Ql(t)}),{data:r}=Ke({queryKey:["orders"],queryFn:nr}),i=r==null?void 0:r.filter(x=>{var w;return((w=x==null?void 0:x.products)==null?void 0:w.filter(b=>b.sellerID===t)).length>0}),o=n==null?void 0:n.filter(x=>x.status==="pending").length,a=n==null?void 0:n.filter(x=>x.status==="approved").length,l=n==null?void 0:n.filter(x=>x.status==="cancled").length,u=n==null?void 0:n.filter(x=>x.quantity>0).length,d=i==null?void 0:i.filter(x=>x.delivery_status==="returned").length;new Date().toLocaleDateString(),i==null||i.reduce((x,v)=>x+(v==null?void 0:v.products.reduce((w,b)=>w+b.price*b.quantity,0)),0);const f=()=>{let x=0;if(i==null)console.log(i);else for(const v of i)for(const w of v.products)x+=w.price*w.qty;return x},h=f();C.useEffect(()=>{f()},[]);var m=Intl.NumberFormat();return y(Nz,{children:[s(rt,{}),y(kz,{children:[s(Lr,{pr:s(eL,{}),da:"Mar 16",ti:"Today",bg:"#3d3dee",sales1:m.format(h),name:"Totals Sales"}),s(Lr,{pr:s(Ii,{}),da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:o,name:"Pending Products"}),s(Lr,{pr:s(Ii,{}),da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:u,name:"Live Products"}),s(Lr,{pr:s(Ii,{}),da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:o,name:"Pending Products"}),s(Lr,{pr:s(Ii,{}),da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:a,name:"Approved Products"}),s(Lr,{pr:s(Ii,{}),da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:l,name:"Cancled Products"}),s(Lr,{pr:s(Ii,{}),da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:i==null?void 0:i.length,name:"Orders"}),s(Lr,{pr:s(Ii,{}),da:"Mar 16",ti:"Today",bg:"#3d3dee",sales:d,name:"Returned Products"})]})]})},kz=c.div`
  width: 87%;
  border-top: 1.8px solid grey;
  /* padding: 30px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f7f8f9;
`,Nz=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`,If=({avatar:e,index:t,name:n,price:r,tag:i,created:o,quantity:a,active:l,rejected:u})=>{const[d,f]=C.useState(!1);return console.log(d),y(Mz,{children:[s(sr,{children:y(Dz,{children:[s("span",{children:s(Rz,{src:e})}),n]})}),i&&y(sr,{children:[" ",s(zr,{children:i})]}),o&&y(sr,{children:[" ",s(zr,{children:o})," "]}),r&&y(sr,{children:[s(zr,{children:r})," "]}),a&&s(sr,{children:s(zr,{children:a})}),u&&s(sr,{children:s(zr,{children:u})}),a>0&&s(sr,{children:s(zr,{children:y(H3,{bg:"fff",children:[s(Az,{}),s("span",{children:"ON"})]})})}),a<=0&&s(sr,{children:s(zr,{children:y(H3,{bg:"",children:[s("span",{children:"OFF"}),s(Tz,{})]})})}),s(sr,{children:y(zr,{children:[" ",y(Iz,{onClick:()=>{f(!0)},children:[s(Fz,{children:"Edit"}),s("span",{children:s(cn,{})})]}),d?y(Ez,{onClick:()=>{f(!1)},children:[s(be,{to:"/seller-dashboard/edit-image",children:s(O0,{children:"Edit Image"})}),s(be,{to:"/seller-dashboard/edit-image",children:s(O0,{children:"Edit Context"})}),s(O0,{children:"Delete"})]}):null]})})]},t)},O0=c.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  color: black;
`,Ez=c.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: sticky;
  bottom: -120px;
  right: 40px;
  /* z-index: 11; */
`,Iz=c.div`
  display: flex;
  align-items: flex-end;
`,H3=c.div`
  width: 100px;
  height: 40px;
  background-color: ${({bg:e})=>e?"#0ebb0e":"red"};
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: white;

  span{
    margin-left: 10px;
  }
`,Tz=c.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
  margin-left: 10px;
`,Az=c.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
`,Rz=c.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: gold;
  margin-right: 10px;
`,Fz=c.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;c.div``;const zr=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Dz=c.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`,sr=c.td`
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 400;
  border-left: 1.5px solid #d0d1d2;
`,Mz=c.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`;//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Q5;function te(){return Q5.apply(null,arguments)}function jz(e){Q5=e}function jn(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function no(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function _e(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Km(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(_e(e,t))return!1;return!0}function Lt(e){return e===void 0}function Nr(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Zl(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function K5(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function Jr(e,t){for(var n in t)_e(t,n)&&(e[n]=t[n]);return _e(t,"toString")&&(e.toString=t.toString),_e(t,"valueOf")&&(e.valueOf=t.valueOf),e}function rr(e,t,n,r){return b9(e,t,n,r,!0).utc()}function Lz(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function ye(e){return e._pf==null&&(e._pf=Lz()),e._pf}var K1;Array.prototype.some?K1=Array.prototype.some:K1=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function Zm(e){if(e._isValid==null){var t=ye(e),n=K1.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function Tf(e){var t=rr(NaN);return e!=null?Jr(ye(t),e):ye(t).userInvalidated=!0,t}var W3=te.momentProperties=[],_0=!1;function Jm(e,t){var n,r,i,o=W3.length;if(Lt(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Lt(t._i)||(e._i=t._i),Lt(t._f)||(e._f=t._f),Lt(t._l)||(e._l=t._l),Lt(t._strict)||(e._strict=t._strict),Lt(t._tzm)||(e._tzm=t._tzm),Lt(t._isUTC)||(e._isUTC=t._isUTC),Lt(t._offset)||(e._offset=t._offset),Lt(t._pf)||(e._pf=ye(t)),Lt(t._locale)||(e._locale=t._locale),o>0)for(n=0;n<o;n++)r=W3[n],i=t[r],Lt(i)||(e[r]=i);return e}function Jl(e){Jm(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),_0===!1&&(_0=!0,te.updateOffset(this),_0=!1)}function Ln(e){return e instanceof Jl||e!=null&&e._isAMomentObject!=null}function Z5(e){te.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function xn(e,t){var n=!0;return Jr(function(){if(te.deprecationHandler!=null&&te.deprecationHandler(null,e),n){var r=[],i,o,a,l=arguments.length;for(o=0;o<l;o++){if(i="",typeof arguments[o]=="object"){i+=`
[`+o+"] ";for(a in arguments[0])_e(arguments[0],a)&&(i+=a+": "+arguments[0][a]+", ");i=i.slice(0,-2)}else i=arguments[o];r.push(i)}Z5(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Y3={};function J5(e,t){te.deprecationHandler!=null&&te.deprecationHandler(e,t),Y3[e]||(Z5(t),Y3[e]=!0)}te.suppressDeprecationWarnings=!1;te.deprecationHandler=null;function ir(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function zz(e){var t,n;for(n in e)_e(e,n)&&(t=e[n],ir(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Z1(e,t){var n=Jr({},e),r;for(r in t)_e(t,r)&&(no(e[r])&&no(t[r])?(n[r]={},Jr(n[r],e[r]),Jr(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)_e(e,r)&&!_e(t,r)&&no(e[r])&&(n[r]=Jr({},n[r]));return n}function Xm(e){e!=null&&this.set(e)}var J1;Object.keys?J1=Object.keys:J1=function(e){var t,n=[];for(t in e)_e(e,t)&&n.push(t);return n};var Uz={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Bz(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return ir(r)?r.call(t,n):r}function er(e,t,n){var r=""+Math.abs(e),i=t-r.length,o=e>=0;return(o?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var ey=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Tu=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,k0={},Oa={};function pe(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(Oa[e]=i),t&&(Oa[t[0]]=function(){return er(i.apply(this,arguments),t[1],t[2])}),n&&(Oa[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function Hz(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Wz(e){var t=e.match(ey),n,r;for(n=0,r=t.length;n<r;n++)Oa[t[n]]?t[n]=Oa[t[n]]:t[n]=Hz(t[n]);return function(i){var o="",a;for(a=0;a<r;a++)o+=ir(t[a])?t[a].call(i,e):t[a];return o}}function dd(e,t){return e.isValid()?(t=X5(t,e.localeData()),k0[t]=k0[t]||Wz(t),k0[t](e)):e.localeData().invalidDate()}function X5(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(Tu.lastIndex=0;n>=0&&Tu.test(e);)e=e.replace(Tu,r),Tu.lastIndex=0,n-=1;return e}var Yz={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Vz(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(ey).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var qz="Invalid date";function Gz(){return this._invalidDate}var Qz="%d",Kz=/\d{1,2}/;function Zz(e){return this._ordinal.replace("%d",e)}var Jz={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Xz(e,t,n,r){var i=this._relativeTime[n];return ir(i)?i(e,t,n,r):i.replace(/%d/i,e)}function eU(e,t){var n=this._relativeTime[e>0?"future":"past"];return ir(n)?n(t):n.replace(/%s/i,t)}var Ws={};function Nt(e,t){var n=e.toLowerCase();Ws[n]=Ws[n+"s"]=Ws[t]=e}function bn(e){return typeof e=="string"?Ws[e]||Ws[e.toLowerCase()]:void 0}function ty(e){var t={},n,r;for(r in e)_e(e,r)&&(n=bn(r),n&&(t[n]=e[r]));return t}var e9={};function Et(e,t){e9[e]=t}function tU(e){var t=[],n;for(n in e)_e(e,n)&&t.push({unit:n,priority:e9[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function Af(e){return e%4===0&&e%100!==0||e%400===0}function dn(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function xe(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=dn(t)),n}function ts(e,t){return function(n){return n!=null?(t9(this,e,n),te.updateOffset(this,t),this):xc(this,e)}}function xc(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function t9(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&Af(e.year())&&e.month()===1&&e.date()===29?(n=xe(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Lf(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function nU(e){return e=bn(e),ir(this[e])?this[e]():this}function rU(e,t){if(typeof e=="object"){e=ty(e);var n=tU(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=bn(e),ir(this[e]))return this[e](t);return this}var n9=/\d/,tn=/\d\d/,r9=/\d{3}/,ny=/\d{4}/,Rf=/[+-]?\d{6}/,Be=/\d\d?/,i9=/\d\d\d\d?/,o9=/\d\d\d\d\d\d?/,Ff=/\d{1,3}/,ry=/\d{1,4}/,Df=/[+-]?\d{1,6}/,ns=/\d+/,Mf=/[+-]?\d+/,iU=/Z|[+-]\d\d:?\d\d/gi,jf=/Z|[+-]\d\d(?::?\d\d)?/gi,oU=/[+-]?\d+(\.\d{1,3})?/,Xl=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,bc;bc={};function ue(e,t,n){bc[e]=ir(t)?t:function(r,i){return r&&n?n:t}}function aU(e,t){return _e(bc,e)?bc[e](t._strict,t._locale):new RegExp(sU(e))}function sU(e){return qt(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,o){return n||r||i||o}))}function qt(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var X1={};function Re(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),Nr(t)&&(r=function(o,a){a[t]=xe(o)}),i=e.length,n=0;n<i;n++)X1[e[n]]=r}function eu(e,t){Re(e,function(n,r,i,o){i._w=i._w||{},t(n,i._w,i,o)})}function lU(e,t,n){t!=null&&_e(X1,e)&&X1[e](t,n._a,n,e)}var _t=0,vr=1,Gn=2,ut=3,An=4,xr=5,Ji=6,uU=7,dU=8;function cU(e,t){return(e%t+t)%t}var et;Array.prototype.indexOf?et=Array.prototype.indexOf:et=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Lf(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=cU(t,12);return e+=(t-n)/12,n===1?Af(e)?29:28:31-n%7%2}pe("M",["MM",2],"Mo",function(){return this.month()+1});pe("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});pe("MMMM",0,0,function(e){return this.localeData().months(this,e)});Nt("month","M");Et("month",8);ue("M",Be);ue("MM",Be,tn);ue("MMM",function(e,t){return t.monthsShortRegex(e)});ue("MMMM",function(e,t){return t.monthsRegex(e)});Re(["M","MM"],function(e,t){t[vr]=xe(e)-1});Re(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[vr]=i:ye(n).invalidMonth=e});var fU="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),a9="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),s9=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,hU=Xl,pU=Xl;function gU(e,t){return e?jn(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||s9).test(t)?"format":"standalone"][e.month()]:jn(this._months)?this._months:this._months.standalone}function mU(e,t){return e?jn(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[s9.test(t)?"format":"standalone"][e.month()]:jn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function yU(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)o=rr([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(o,"").toLocaleLowerCase();return n?t==="MMM"?(i=et.call(this._shortMonthsParse,a),i!==-1?i:null):(i=et.call(this._longMonthsParse,a),i!==-1?i:null):t==="MMM"?(i=et.call(this._shortMonthsParse,a),i!==-1?i:(i=et.call(this._longMonthsParse,a),i!==-1?i:null)):(i=et.call(this._longMonthsParse,a),i!==-1?i:(i=et.call(this._shortMonthsParse,a),i!==-1?i:null))}function vU(e,t,n){var r,i,o;if(this._monthsParseExact)return yU.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=rr([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function l9(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=xe(t);else if(t=e.localeData().monthsParse(t),!Nr(t))return e}return n=Math.min(e.date(),Lf(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function u9(e){return e!=null?(l9(this,e),te.updateOffset(this,!0),this):xc(this,"Month")}function xU(){return Lf(this.year(),this.month())}function bU(e){return this._monthsParseExact?(_e(this,"_monthsRegex")||d9.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(_e(this,"_monthsShortRegex")||(this._monthsShortRegex=hU),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function $U(e){return this._monthsParseExact?(_e(this,"_monthsRegex")||d9.call(this),e?this._monthsStrictRegex:this._monthsRegex):(_e(this,"_monthsRegex")||(this._monthsRegex=pU),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function d9(){function e(a,l){return l.length-a.length}var t=[],n=[],r=[],i,o;for(i=0;i<12;i++)o=rr([2e3,i]),t.push(this.monthsShort(o,"")),n.push(this.months(o,"")),r.push(this.months(o,"")),r.push(this.monthsShort(o,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=qt(t[i]),n[i]=qt(n[i]);for(i=0;i<24;i++)r[i]=qt(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}pe("Y",0,0,function(){var e=this.year();return e<=9999?er(e,4):"+"+e});pe(0,["YY",2],0,function(){return this.year()%100});pe(0,["YYYY",4],0,"year");pe(0,["YYYYY",5],0,"year");pe(0,["YYYYYY",6,!0],0,"year");Nt("year","y");Et("year",1);ue("Y",Mf);ue("YY",Be,tn);ue("YYYY",ry,ny);ue("YYYYY",Df,Rf);ue("YYYYYY",Df,Rf);Re(["YYYYY","YYYYYY"],_t);Re("YYYY",function(e,t){t[_t]=e.length===2?te.parseTwoDigitYear(e):xe(e)});Re("YY",function(e,t){t[_t]=te.parseTwoDigitYear(e)});Re("Y",function(e,t){t[_t]=parseInt(e,10)});function Ys(e){return Af(e)?366:365}te.parseTwoDigitYear=function(e){return xe(e)+(xe(e)>68?1900:2e3)};var c9=ts("FullYear",!0);function wU(){return Af(this.year())}function SU(e,t,n,r,i,o,a){var l;return e<100&&e>=0?(l=new Date(e+400,t,n,r,i,o,a),isFinite(l.getFullYear())&&l.setFullYear(e)):l=new Date(e,t,n,r,i,o,a),l}function wl(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function $c(e,t,n){var r=7+t-n,i=(7+wl(e,0,r).getUTCDay()-t)%7;return-i+r-1}function f9(e,t,n,r,i){var o=(7+n-r)%7,a=$c(e,r,i),l=1+7*(t-1)+o+a,u,d;return l<=0?(u=e-1,d=Ys(u)+l):l>Ys(e)?(u=e+1,d=l-Ys(e)):(u=e,d=l),{year:u,dayOfYear:d}}function Sl(e,t,n){var r=$c(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,o,a;return i<1?(a=e.year()-1,o=i+wr(a,t,n)):i>wr(e.year(),t,n)?(o=i-wr(e.year(),t,n),a=e.year()+1):(a=e.year(),o=i),{week:o,year:a}}function wr(e,t,n){var r=$c(e,t,n),i=$c(e+1,t,n);return(Ys(e)-r+i)/7}pe("w",["ww",2],"wo","week");pe("W",["WW",2],"Wo","isoWeek");Nt("week","w");Nt("isoWeek","W");Et("week",5);Et("isoWeek",5);ue("w",Be);ue("ww",Be,tn);ue("W",Be);ue("WW",Be,tn);eu(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=xe(e)});function CU(e){return Sl(e,this._week.dow,this._week.doy).week}var PU={dow:0,doy:6};function OU(){return this._week.dow}function _U(){return this._week.doy}function kU(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function NU(e){var t=Sl(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}pe("d",0,"do","day");pe("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});pe("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});pe("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});pe("e",0,0,"weekday");pe("E",0,0,"isoWeekday");Nt("day","d");Nt("weekday","e");Nt("isoWeekday","E");Et("day",11);Et("weekday",11);Et("isoWeekday",11);ue("d",Be);ue("e",Be);ue("E",Be);ue("dd",function(e,t){return t.weekdaysMinRegex(e)});ue("ddd",function(e,t){return t.weekdaysShortRegex(e)});ue("dddd",function(e,t){return t.weekdaysRegex(e)});eu(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:ye(n).invalidWeekday=e});eu(["d","e","E"],function(e,t,n,r){t[r]=xe(e)});function EU(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function IU(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function iy(e,t){return e.slice(t,7).concat(e.slice(0,t))}var TU="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),h9="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),AU="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),RU=Xl,FU=Xl,DU=Xl;function MU(e,t){var n=jn(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?iy(n,this._week.dow):e?n[e.day()]:n}function jU(e){return e===!0?iy(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function LU(e){return e===!0?iy(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function zU(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)o=rr([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(o,"").toLocaleLowerCase();return n?t==="dddd"?(i=et.call(this._weekdaysParse,a),i!==-1?i:null):t==="ddd"?(i=et.call(this._shortWeekdaysParse,a),i!==-1?i:null):(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null):t==="dddd"?(i=et.call(this._weekdaysParse,a),i!==-1||(i=et.call(this._shortWeekdaysParse,a),i!==-1)?i:(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null)):t==="ddd"?(i=et.call(this._shortWeekdaysParse,a),i!==-1||(i=et.call(this._weekdaysParse,a),i!==-1)?i:(i=et.call(this._minWeekdaysParse,a),i!==-1?i:null)):(i=et.call(this._minWeekdaysParse,a),i!==-1||(i=et.call(this._weekdaysParse,a),i!==-1)?i:(i=et.call(this._shortWeekdaysParse,a),i!==-1?i:null))}function UU(e,t,n){var r,i,o;if(this._weekdaysParseExact)return zU.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=rr([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function BU(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=EU(e,this.localeData()),this.add(e-t,"d")):t}function HU(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function WU(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=IU(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function YU(e){return this._weekdaysParseExact?(_e(this,"_weekdaysRegex")||oy.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(_e(this,"_weekdaysRegex")||(this._weekdaysRegex=RU),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function VU(e){return this._weekdaysParseExact?(_e(this,"_weekdaysRegex")||oy.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(_e(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=FU),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function qU(e){return this._weekdaysParseExact?(_e(this,"_weekdaysRegex")||oy.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(_e(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=DU),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function oy(){function e(f,h){return h.length-f.length}var t=[],n=[],r=[],i=[],o,a,l,u,d;for(o=0;o<7;o++)a=rr([2e3,1]).day(o),l=qt(this.weekdaysMin(a,"")),u=qt(this.weekdaysShort(a,"")),d=qt(this.weekdays(a,"")),t.push(l),n.push(u),r.push(d),i.push(l),i.push(u),i.push(d);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ay(){return this.hours()%12||12}function GU(){return this.hours()||24}pe("H",["HH",2],0,"hour");pe("h",["hh",2],0,ay);pe("k",["kk",2],0,GU);pe("hmm",0,0,function(){return""+ay.apply(this)+er(this.minutes(),2)});pe("hmmss",0,0,function(){return""+ay.apply(this)+er(this.minutes(),2)+er(this.seconds(),2)});pe("Hmm",0,0,function(){return""+this.hours()+er(this.minutes(),2)});pe("Hmmss",0,0,function(){return""+this.hours()+er(this.minutes(),2)+er(this.seconds(),2)});function p9(e,t){pe(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}p9("a",!0);p9("A",!1);Nt("hour","h");Et("hour",13);function g9(e,t){return t._meridiemParse}ue("a",g9);ue("A",g9);ue("H",Be);ue("h",Be);ue("k",Be);ue("HH",Be,tn);ue("hh",Be,tn);ue("kk",Be,tn);ue("hmm",i9);ue("hmmss",o9);ue("Hmm",i9);ue("Hmmss",o9);Re(["H","HH"],ut);Re(["k","kk"],function(e,t,n){var r=xe(e);t[ut]=r===24?0:r});Re(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});Re(["h","hh"],function(e,t,n){t[ut]=xe(e),ye(n).bigHour=!0});Re("hmm",function(e,t,n){var r=e.length-2;t[ut]=xe(e.substr(0,r)),t[An]=xe(e.substr(r)),ye(n).bigHour=!0});Re("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[ut]=xe(e.substr(0,r)),t[An]=xe(e.substr(r,2)),t[xr]=xe(e.substr(i)),ye(n).bigHour=!0});Re("Hmm",function(e,t,n){var r=e.length-2;t[ut]=xe(e.substr(0,r)),t[An]=xe(e.substr(r))});Re("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[ut]=xe(e.substr(0,r)),t[An]=xe(e.substr(r,2)),t[xr]=xe(e.substr(i))});function QU(e){return(e+"").toLowerCase().charAt(0)==="p"}var KU=/[ap]\.?m?\.?/i,ZU=ts("Hours",!0);function JU(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var m9={calendar:Uz,longDateFormat:Yz,invalidDate:qz,ordinal:Qz,dayOfMonthOrdinalParse:Kz,relativeTime:Jz,months:fU,monthsShort:a9,week:PU,weekdays:TU,weekdaysMin:AU,weekdaysShort:h9,meridiemParse:KU},He={},xs={},Cl;function XU(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function V3(e){return e&&e.toLowerCase().replace("_","-")}function eB(e){for(var t=0,n,r,i,o;t<e.length;){for(o=V3(e[t]).split("-"),n=o.length,r=V3(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=zf(o.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&XU(o,r)>=n-1)break;n--}t++}return Cl}function tB(e){return e.match("^[^/\\\\]*$")!=null}function zf(e){var t=null,n;if(He[e]===void 0&&typeof vd<"u"&&vd&&vd.exports&&tB(e))try{t=Cl._abbr,n=require,n("./locale/"+e),pi(t)}catch{He[e]=null}return He[e]}function pi(e,t){var n;return e&&(Lt(t)?n=Ar(e):n=sy(e,t),n?Cl=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Cl._abbr}function sy(e,t){if(t!==null){var n,r=m9;if(t.abbr=e,He[e]!=null)J5("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=He[e]._config;else if(t.parentLocale!=null)if(He[t.parentLocale]!=null)r=He[t.parentLocale]._config;else if(n=zf(t.parentLocale),n!=null)r=n._config;else return xs[t.parentLocale]||(xs[t.parentLocale]=[]),xs[t.parentLocale].push({name:e,config:t}),null;return He[e]=new Xm(Z1(r,t)),xs[e]&&xs[e].forEach(function(i){sy(i.name,i.config)}),pi(e),He[e]}else return delete He[e],null}function nB(e,t){if(t!=null){var n,r,i=m9;He[e]!=null&&He[e].parentLocale!=null?He[e].set(Z1(He[e]._config,t)):(r=zf(e),r!=null&&(i=r._config),t=Z1(i,t),r==null&&(t.abbr=e),n=new Xm(t),n.parentLocale=He[e],He[e]=n),pi(e)}else He[e]!=null&&(He[e].parentLocale!=null?(He[e]=He[e].parentLocale,e===pi()&&pi(e)):He[e]!=null&&delete He[e]);return He[e]}function Ar(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Cl;if(!jn(e)){if(t=zf(e),t)return t;e=[e]}return eB(e)}function rB(){return J1(He)}function ly(e){var t,n=e._a;return n&&ye(e).overflow===-2&&(t=n[vr]<0||n[vr]>11?vr:n[Gn]<1||n[Gn]>Lf(n[_t],n[vr])?Gn:n[ut]<0||n[ut]>24||n[ut]===24&&(n[An]!==0||n[xr]!==0||n[Ji]!==0)?ut:n[An]<0||n[An]>59?An:n[xr]<0||n[xr]>59?xr:n[Ji]<0||n[Ji]>999?Ji:-1,ye(e)._overflowDayOfYear&&(t<_t||t>Gn)&&(t=Gn),ye(e)._overflowWeeks&&t===-1&&(t=uU),ye(e)._overflowWeekday&&t===-1&&(t=dU),ye(e).overflow=t),e}var iB=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,oB=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,aB=/Z|[+-]\d\d(?::?\d\d)?/,Au=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],N0=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],sB=/^\/?Date\((-?\d+)/i,lB=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,uB={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function y9(e){var t,n,r=e._i,i=iB.exec(r)||oB.exec(r),o,a,l,u,d=Au.length,f=N0.length;if(i){for(ye(e).iso=!0,t=0,n=d;t<n;t++)if(Au[t][1].exec(i[1])){a=Au[t][0],o=Au[t][2]!==!1;break}if(a==null){e._isValid=!1;return}if(i[3]){for(t=0,n=f;t<n;t++)if(N0[t][1].exec(i[3])){l=(i[2]||" ")+N0[t][0];break}if(l==null){e._isValid=!1;return}}if(!o&&l!=null){e._isValid=!1;return}if(i[4])if(aB.exec(i[4]))u="Z";else{e._isValid=!1;return}e._f=a+(l||"")+(u||""),dy(e)}else e._isValid=!1}function dB(e,t,n,r,i,o){var a=[cB(e),a9.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return o&&a.push(parseInt(o,10)),a}function cB(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function fB(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function hB(e,t,n){if(e){var r=h9.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return ye(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function pB(e,t,n){if(e)return uB[e];if(t)return 0;var r=parseInt(n,10),i=r%100,o=(r-i)/100;return o*60+i}function v9(e){var t=lB.exec(fB(e._i)),n;if(t){if(n=dB(t[4],t[3],t[2],t[5],t[6],t[7]),!hB(t[1],n,e))return;e._a=n,e._tzm=pB(t[8],t[9],t[10]),e._d=wl.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),ye(e).rfc2822=!0}else e._isValid=!1}function gB(e){var t=sB.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(y9(e),e._isValid===!1)delete e._isValid;else return;if(v9(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:te.createFromInputFallback(e)}te.createFromInputFallback=xn("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Jo(e,t,n){return e??t??n}function mB(e){var t=new Date(te.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function uy(e){var t,n,r=[],i,o,a;if(!e._d){for(i=mB(e),e._w&&e._a[Gn]==null&&e._a[vr]==null&&yB(e),e._dayOfYear!=null&&(a=Jo(e._a[_t],i[_t]),(e._dayOfYear>Ys(a)||e._dayOfYear===0)&&(ye(e)._overflowDayOfYear=!0),n=wl(a,0,e._dayOfYear),e._a[vr]=n.getUTCMonth(),e._a[Gn]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[ut]===24&&e._a[An]===0&&e._a[xr]===0&&e._a[Ji]===0&&(e._nextDay=!0,e._a[ut]=0),e._d=(e._useUTC?wl:SU).apply(null,r),o=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ut]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==o&&(ye(e).weekdayMismatch=!0)}}function yB(e){var t,n,r,i,o,a,l,u,d;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(o=1,a=4,n=Jo(t.GG,e._a[_t],Sl(Ue(),1,4).year),r=Jo(t.W,1),i=Jo(t.E,1),(i<1||i>7)&&(u=!0)):(o=e._locale._week.dow,a=e._locale._week.doy,d=Sl(Ue(),o,a),n=Jo(t.gg,e._a[_t],d.year),r=Jo(t.w,d.week),t.d!=null?(i=t.d,(i<0||i>6)&&(u=!0)):t.e!=null?(i=t.e+o,(t.e<0||t.e>6)&&(u=!0)):i=o),r<1||r>wr(n,o,a)?ye(e)._overflowWeeks=!0:u!=null?ye(e)._overflowWeekday=!0:(l=f9(n,r,i,o,a),e._a[_t]=l.year,e._dayOfYear=l.dayOfYear)}te.ISO_8601=function(){};te.RFC_2822=function(){};function dy(e){if(e._f===te.ISO_8601){y9(e);return}if(e._f===te.RFC_2822){v9(e);return}e._a=[],ye(e).empty=!0;var t=""+e._i,n,r,i,o,a,l=t.length,u=0,d,f;for(i=X5(e._f,e._locale).match(ey)||[],f=i.length,n=0;n<f;n++)o=i[n],r=(t.match(aU(o,e))||[])[0],r&&(a=t.substr(0,t.indexOf(r)),a.length>0&&ye(e).unusedInput.push(a),t=t.slice(t.indexOf(r)+r.length),u+=r.length),Oa[o]?(r?ye(e).empty=!1:ye(e).unusedTokens.push(o),lU(o,r,e)):e._strict&&!r&&ye(e).unusedTokens.push(o);ye(e).charsLeftOver=l-u,t.length>0&&ye(e).unusedInput.push(t),e._a[ut]<=12&&ye(e).bigHour===!0&&e._a[ut]>0&&(ye(e).bigHour=void 0),ye(e).parsedDateParts=e._a.slice(0),ye(e).meridiem=e._meridiem,e._a[ut]=vB(e._locale,e._a[ut],e._meridiem),d=ye(e).era,d!==null&&(e._a[_t]=e._locale.erasConvertYear(d,e._a[_t])),uy(e),ly(e)}function vB(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function xB(e){var t,n,r,i,o,a,l=!1,u=e._f.length;if(u===0){ye(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<u;i++)o=0,a=!1,t=Jm({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],dy(t),Zm(t)&&(a=!0),o+=ye(t).charsLeftOver,o+=ye(t).unusedTokens.length*10,ye(t).score=o,l?o<r&&(r=o,n=t):(r==null||o<r||a)&&(r=o,n=t,a&&(l=!0));Jr(e,n||t)}function bB(e){if(!e._d){var t=ty(e._i),n=t.day===void 0?t.date:t.day;e._a=K5([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),uy(e)}}function $B(e){var t=new Jl(ly(x9(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function x9(e){var t=e._i,n=e._f;return e._locale=e._locale||Ar(e._l),t===null||n===void 0&&t===""?Tf({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Ln(t)?new Jl(ly(t)):(Zl(t)?e._d=t:jn(n)?xB(e):n?dy(e):wB(e),Zm(e)||(e._d=null),e))}function wB(e){var t=e._i;Lt(t)?e._d=new Date(te.now()):Zl(t)?e._d=new Date(t.valueOf()):typeof t=="string"?gB(e):jn(t)?(e._a=K5(t.slice(0),function(n){return parseInt(n,10)}),uy(e)):no(t)?bB(e):Nr(t)?e._d=new Date(t):te.createFromInputFallback(e)}function b9(e,t,n,r,i){var o={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(no(e)&&Km(e)||jn(e)&&e.length===0)&&(e=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=i,o._l=n,o._i=e,o._f=t,o._strict=r,$B(o)}function Ue(e,t,n,r){return b9(e,t,n,r,!1)}var SB=xn("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ue.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Tf()}),CB=xn("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ue.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Tf()});function $9(e,t){var n,r;if(t.length===1&&jn(t[0])&&(t=t[0]),!t.length)return Ue();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function PB(){var e=[].slice.call(arguments,0);return $9("isBefore",e)}function OB(){var e=[].slice.call(arguments,0);return $9("isAfter",e)}var _B=function(){return Date.now?Date.now():+new Date},bs=["year","quarter","month","week","day","hour","minute","second","millisecond"];function kB(e){var t,n=!1,r,i=bs.length;for(t in e)if(_e(e,t)&&!(et.call(bs,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[bs[r]]){if(n)return!1;parseFloat(e[bs[r]])!==xe(e[bs[r]])&&(n=!0)}return!0}function NB(){return this._isValid}function EB(){return Un(NaN)}function Uf(e){var t=ty(e),n=t.year||0,r=t.quarter||0,i=t.month||0,o=t.week||t.isoWeek||0,a=t.day||0,l=t.hour||0,u=t.minute||0,d=t.second||0,f=t.millisecond||0;this._isValid=kB(t),this._milliseconds=+f+d*1e3+u*6e4+l*1e3*60*60,this._days=+a+o*7,this._months=+i+r*3+n*12,this._data={},this._locale=Ar(),this._bubble()}function cd(e){return e instanceof Uf}function eg(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function IB(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0,a;for(a=0;a<r;a++)(n&&e[a]!==t[a]||!n&&xe(e[a])!==xe(t[a]))&&o++;return o+i}function w9(e,t){pe(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+er(~~(n/60),2)+t+er(~~n%60,2)})}w9("Z",":");w9("ZZ","");ue("Z",jf);ue("ZZ",jf);Re(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=cy(jf,e)});var TB=/([\+\-]|\d\d)/gi;function cy(e,t){var n=(t||"").match(e),r,i,o;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(TB)||["-",0,0],o=+(i[1]*60)+xe(i[2]),o===0?0:i[0]==="+"?o:-o)}function fy(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Ln(e)||Zl(e)?e.valueOf():Ue(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),te.updateOffset(n,!1),n):Ue(e).local()}function tg(e){return-Math.round(e._d.getTimezoneOffset())}te.updateOffset=function(){};function AB(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=cy(jf,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=tg(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?P9(this,Un(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,te.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:tg(this)}function RB(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function FB(e){return this.utcOffset(0,e)}function DB(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(tg(this),"m")),this}function MB(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=cy(iU,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function jB(e){return this.isValid()?(e=e?Ue(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function LB(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function zB(){if(!Lt(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Jm(e,this),e=x9(e),e._a?(t=e._isUTC?rr(e._a):Ue(e._a),this._isDSTShifted=this.isValid()&&IB(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function UB(){return this.isValid()?!this._isUTC:!1}function BB(){return this.isValid()?this._isUTC:!1}function S9(){return this.isValid()?this._isUTC&&this._offset===0:!1}var HB=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,WB=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Un(e,t){var n=e,r=null,i,o,a;return cd(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Nr(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=HB.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:xe(r[Gn])*i,h:xe(r[ut])*i,m:xe(r[An])*i,s:xe(r[xr])*i,ms:xe(eg(r[Ji]*1e3))*i}):(r=WB.exec(e))?(i=r[1]==="-"?-1:1,n={y:Ti(r[2],i),M:Ti(r[3],i),w:Ti(r[4],i),d:Ti(r[5],i),h:Ti(r[6],i),m:Ti(r[7],i),s:Ti(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(a=YB(Ue(n.from),Ue(n.to)),n={},n.ms=a.milliseconds,n.M=a.months),o=new Uf(n),cd(e)&&_e(e,"_locale")&&(o._locale=e._locale),cd(e)&&_e(e,"_isValid")&&(o._isValid=e._isValid),o}Un.fn=Uf.prototype;Un.invalid=EB;function Ti(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function q3(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function YB(e,t){var n;return e.isValid()&&t.isValid()?(t=fy(t,e),e.isBefore(t)?n=q3(e,t):(n=q3(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function C9(e,t){return function(n,r){var i,o;return r!==null&&!isNaN(+r)&&(J5(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=r,r=o),i=Un(n,r),P9(this,i,e),this}}function P9(e,t,n,r){var i=t._milliseconds,o=eg(t._days),a=eg(t._months);e.isValid()&&(r=r??!0,a&&l9(e,xc(e,"Month")+a*n),o&&t9(e,"Date",xc(e,"Date")+o*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&te.updateOffset(e,o||a))}var VB=C9(1,"add"),qB=C9(-1,"subtract");function O9(e){return typeof e=="string"||e instanceof String}function GB(e){return Ln(e)||Zl(e)||O9(e)||Nr(e)||KB(e)||QB(e)||e===null||e===void 0}function QB(e){var t=no(e)&&!Km(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,o,a=r.length;for(i=0;i<a;i+=1)o=r[i],n=n||_e(e,o);return t&&n}function KB(e){var t=jn(e),n=!1;return t&&(n=e.filter(function(r){return!Nr(r)&&O9(e)}).length===0),t&&n}function ZB(e){var t=no(e)&&!Km(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,o;for(i=0;i<r.length;i+=1)o=r[i],n=n||_e(e,o);return t&&n}function JB(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function XB(e,t){arguments.length===1&&(arguments[0]?GB(arguments[0])?(e=arguments[0],t=void 0):ZB(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Ue(),r=fy(n,this).startOf("day"),i=te.calendarFormat(this,r)||"sameElse",o=t&&(ir(t[i])?t[i].call(this,n):t[i]);return this.format(o||this.localeData().calendar(i,this,Ue(n)))}function eH(){return new Jl(this)}function tH(e,t){var n=Ln(e)?e:Ue(e);return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function nH(e,t){var n=Ln(e)?e:Ue(e);return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function rH(e,t,n,r){var i=Ln(e)?e:Ue(e),o=Ln(t)?t:Ue(t);return this.isValid()&&i.isValid()&&o.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(o,n):!this.isAfter(o,n))):!1}function iH(e,t){var n=Ln(e)?e:Ue(e),r;return this.isValid()&&n.isValid()?(t=bn(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function oH(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function aH(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function sH(e,t,n){var r,i,o;if(!this.isValid())return NaN;if(r=fy(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=bn(t),t){case"year":o=fd(this,r)/12;break;case"month":o=fd(this,r);break;case"quarter":o=fd(this,r)/3;break;case"second":o=(this-r)/1e3;break;case"minute":o=(this-r)/6e4;break;case"hour":o=(this-r)/36e5;break;case"day":o=(this-r-i)/864e5;break;case"week":o=(this-r-i)/6048e5;break;default:o=this-r}return n?o:dn(o)}function fd(e,t){if(e.date()<t.date())return-fd(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,o;return t-r<0?(i=e.clone().add(n-1,"months"),o=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),o=(t-r)/(i-r)),-(n+o)||0}te.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";te.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function lH(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function uH(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?dd(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):ir(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",dd(n,"Z")):dd(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function dH(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,o;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]',this.format(n+r+i+o)}function cH(e){e||(e=this.isUtc()?te.defaultFormatUtc:te.defaultFormat);var t=dd(this,e);return this.localeData().postformat(t)}function fH(e,t){return this.isValid()&&(Ln(e)&&e.isValid()||Ue(e).isValid())?Un({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function hH(e){return this.from(Ue(),e)}function pH(e,t){return this.isValid()&&(Ln(e)&&e.isValid()||Ue(e).isValid())?Un({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function gH(e){return this.to(Ue(),e)}function _9(e){var t;return e===void 0?this._locale._abbr:(t=Ar(e),t!=null&&(this._locale=t),this)}var k9=xn("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function N9(){return this._locale}var wc=1e3,_a=60*wc,Sc=60*_a,E9=(365*400+97)*24*Sc;function ka(e,t){return(e%t+t)%t}function I9(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-E9:new Date(e,t,n).valueOf()}function T9(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-E9:Date.UTC(e,t,n)}function mH(e){var t,n;if(e=bn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?T9:I9,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ka(t+(this._isUTC?0:this.utcOffset()*_a),Sc);break;case"minute":t=this._d.valueOf(),t-=ka(t,_a);break;case"second":t=this._d.valueOf(),t-=ka(t,wc);break}return this._d.setTime(t),te.updateOffset(this,!0),this}function yH(e){var t,n;if(e=bn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?T9:I9,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Sc-ka(t+(this._isUTC?0:this.utcOffset()*_a),Sc)-1;break;case"minute":t=this._d.valueOf(),t+=_a-ka(t,_a)-1;break;case"second":t=this._d.valueOf(),t+=wc-ka(t,wc)-1;break}return this._d.setTime(t),te.updateOffset(this,!0),this}function vH(){return this._d.valueOf()-(this._offset||0)*6e4}function xH(){return Math.floor(this.valueOf()/1e3)}function bH(){return new Date(this.valueOf())}function $H(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function wH(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function SH(){return this.isValid()?this.toISOString():null}function CH(){return Zm(this)}function PH(){return Jr({},ye(this))}function OH(){return ye(this).overflow}function _H(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}pe("N",0,0,"eraAbbr");pe("NN",0,0,"eraAbbr");pe("NNN",0,0,"eraAbbr");pe("NNNN",0,0,"eraName");pe("NNNNN",0,0,"eraNarrow");pe("y",["y",1],"yo","eraYear");pe("y",["yy",2],0,"eraYear");pe("y",["yyy",3],0,"eraYear");pe("y",["yyyy",4],0,"eraYear");ue("N",hy);ue("NN",hy);ue("NNN",hy);ue("NNNN",jH);ue("NNNNN",LH);Re(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?ye(n).era=i:ye(n).invalidEra=e});ue("y",ns);ue("yy",ns);ue("yyy",ns);ue("yyyy",ns);ue("yo",zH);Re(["y","yy","yyy","yyyy"],_t);Re(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[_t]=n._locale.eraYearOrdinalParse(e,i):t[_t]=parseInt(e,10)});function kH(e,t){var n,r,i,o=this._eras||Ar("en")._eras;for(n=0,r=o.length;n<r;++n){switch(typeof o[n].since){case"string":i=te(o[n].since).startOf("day"),o[n].since=i.valueOf();break}switch(typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":i=te(o[n].until).startOf("day").valueOf(),o[n].until=i.valueOf();break}}return o}function NH(e,t,n){var r,i,o=this.eras(),a,l,u;for(e=e.toUpperCase(),r=0,i=o.length;r<i;++r)if(a=o[r].name.toUpperCase(),l=o[r].abbr.toUpperCase(),u=o[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(l===e)return o[r];break;case"NNNN":if(a===e)return o[r];break;case"NNNNN":if(u===e)return o[r];break}else if([a,l,u].indexOf(e)>=0)return o[r]}function EH(e,t){var n=e.since<=e.until?1:-1;return t===void 0?te(e.since).year():te(e.since).year()+(t-e.offset)*n}function IH(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function TH(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function AH(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function RH(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-te(i[e].since).year())*n+i[e].offset;return this.year()}function FH(e){return _e(this,"_erasNameRegex")||py.call(this),e?this._erasNameRegex:this._erasRegex}function DH(e){return _e(this,"_erasAbbrRegex")||py.call(this),e?this._erasAbbrRegex:this._erasRegex}function MH(e){return _e(this,"_erasNarrowRegex")||py.call(this),e?this._erasNarrowRegex:this._erasRegex}function hy(e,t){return t.erasAbbrRegex(e)}function jH(e,t){return t.erasNameRegex(e)}function LH(e,t){return t.erasNarrowRegex(e)}function zH(e,t){return t._eraYearOrdinalRegex||ns}function py(){var e=[],t=[],n=[],r=[],i,o,a=this.eras();for(i=0,o=a.length;i<o;++i)t.push(qt(a[i].name)),e.push(qt(a[i].abbr)),n.push(qt(a[i].narrow)),r.push(qt(a[i].name)),r.push(qt(a[i].abbr)),r.push(qt(a[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}pe(0,["gg",2],0,function(){return this.weekYear()%100});pe(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Bf(e,t){pe(0,[e,e.length],0,t)}Bf("gggg","weekYear");Bf("ggggg","weekYear");Bf("GGGG","isoWeekYear");Bf("GGGGG","isoWeekYear");Nt("weekYear","gg");Nt("isoWeekYear","GG");Et("weekYear",1);Et("isoWeekYear",1);ue("G",Mf);ue("g",Mf);ue("GG",Be,tn);ue("gg",Be,tn);ue("GGGG",ry,ny);ue("gggg",ry,ny);ue("GGGGG",Df,Rf);ue("ggggg",Df,Rf);eu(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=xe(e)});eu(["gg","GG"],function(e,t,n,r){t[r]=te.parseTwoDigitYear(e)});function UH(e){return A9.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function BH(e){return A9.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function HH(){return wr(this.year(),1,4)}function WH(){return wr(this.isoWeekYear(),1,4)}function YH(){var e=this.localeData()._week;return wr(this.year(),e.dow,e.doy)}function VH(){var e=this.localeData()._week;return wr(this.weekYear(),e.dow,e.doy)}function A9(e,t,n,r,i){var o;return e==null?Sl(this,r,i).year:(o=wr(e,r,i),t>o&&(t=o),qH.call(this,e,t,n,r,i))}function qH(e,t,n,r,i){var o=f9(e,t,n,r,i),a=wl(o.year,0,o.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}pe("Q",0,"Qo","quarter");Nt("quarter","Q");Et("quarter",7);ue("Q",n9);Re("Q",function(e,t){t[vr]=(xe(e)-1)*3});function GH(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}pe("D",["DD",2],"Do","date");Nt("date","D");Et("date",9);ue("D",Be);ue("DD",Be,tn);ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});Re(["D","DD"],Gn);Re("Do",function(e,t){t[Gn]=xe(e.match(Be)[0])});var R9=ts("Date",!0);pe("DDD",["DDDD",3],"DDDo","dayOfYear");Nt("dayOfYear","DDD");Et("dayOfYear",4);ue("DDD",Ff);ue("DDDD",r9);Re(["DDD","DDDD"],function(e,t,n){n._dayOfYear=xe(e)});function QH(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}pe("m",["mm",2],0,"minute");Nt("minute","m");Et("minute",14);ue("m",Be);ue("mm",Be,tn);Re(["m","mm"],An);var KH=ts("Minutes",!1);pe("s",["ss",2],0,"second");Nt("second","s");Et("second",15);ue("s",Be);ue("ss",Be,tn);Re(["s","ss"],xr);var ZH=ts("Seconds",!1);pe("S",0,0,function(){return~~(this.millisecond()/100)});pe(0,["SS",2],0,function(){return~~(this.millisecond()/10)});pe(0,["SSS",3],0,"millisecond");pe(0,["SSSS",4],0,function(){return this.millisecond()*10});pe(0,["SSSSS",5],0,function(){return this.millisecond()*100});pe(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});pe(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});pe(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});pe(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});Nt("millisecond","ms");Et("millisecond",16);ue("S",Ff,n9);ue("SS",Ff,tn);ue("SSS",Ff,r9);var Xr,F9;for(Xr="SSSS";Xr.length<=9;Xr+="S")ue(Xr,ns);function JH(e,t){t[Ji]=xe(("0."+e)*1e3)}for(Xr="S";Xr.length<=9;Xr+="S")Re(Xr,JH);F9=ts("Milliseconds",!1);pe("z",0,0,"zoneAbbr");pe("zz",0,0,"zoneName");function XH(){return this._isUTC?"UTC":""}function eW(){return this._isUTC?"Coordinated Universal Time":""}var Z=Jl.prototype;Z.add=VB;Z.calendar=XB;Z.clone=eH;Z.diff=sH;Z.endOf=yH;Z.format=cH;Z.from=fH;Z.fromNow=hH;Z.to=pH;Z.toNow=gH;Z.get=nU;Z.invalidAt=OH;Z.isAfter=tH;Z.isBefore=nH;Z.isBetween=rH;Z.isSame=iH;Z.isSameOrAfter=oH;Z.isSameOrBefore=aH;Z.isValid=CH;Z.lang=k9;Z.locale=_9;Z.localeData=N9;Z.max=CB;Z.min=SB;Z.parsingFlags=PH;Z.set=rU;Z.startOf=mH;Z.subtract=qB;Z.toArray=$H;Z.toObject=wH;Z.toDate=bH;Z.toISOString=uH;Z.inspect=dH;typeof Symbol<"u"&&Symbol.for!=null&&(Z[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});Z.toJSON=SH;Z.toString=lH;Z.unix=xH;Z.valueOf=vH;Z.creationData=_H;Z.eraName=IH;Z.eraNarrow=TH;Z.eraAbbr=AH;Z.eraYear=RH;Z.year=c9;Z.isLeapYear=wU;Z.weekYear=UH;Z.isoWeekYear=BH;Z.quarter=Z.quarters=GH;Z.month=u9;Z.daysInMonth=xU;Z.week=Z.weeks=kU;Z.isoWeek=Z.isoWeeks=NU;Z.weeksInYear=YH;Z.weeksInWeekYear=VH;Z.isoWeeksInYear=HH;Z.isoWeeksInISOWeekYear=WH;Z.date=R9;Z.day=Z.days=BU;Z.weekday=HU;Z.isoWeekday=WU;Z.dayOfYear=QH;Z.hour=Z.hours=ZU;Z.minute=Z.minutes=KH;Z.second=Z.seconds=ZH;Z.millisecond=Z.milliseconds=F9;Z.utcOffset=AB;Z.utc=FB;Z.local=DB;Z.parseZone=MB;Z.hasAlignedHourOffset=jB;Z.isDST=LB;Z.isLocal=UB;Z.isUtcOffset=BB;Z.isUtc=S9;Z.isUTC=S9;Z.zoneAbbr=XH;Z.zoneName=eW;Z.dates=xn("dates accessor is deprecated. Use date instead.",R9);Z.months=xn("months accessor is deprecated. Use month instead",u9);Z.years=xn("years accessor is deprecated. Use year instead",c9);Z.zone=xn("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",RB);Z.isDSTShifted=xn("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",zB);function tW(e){return Ue(e*1e3)}function nW(){return Ue.apply(null,arguments).parseZone()}function D9(e){return e}var ke=Xm.prototype;ke.calendar=Bz;ke.longDateFormat=Vz;ke.invalidDate=Gz;ke.ordinal=Zz;ke.preparse=D9;ke.postformat=D9;ke.relativeTime=Xz;ke.pastFuture=eU;ke.set=zz;ke.eras=kH;ke.erasParse=NH;ke.erasConvertYear=EH;ke.erasAbbrRegex=DH;ke.erasNameRegex=FH;ke.erasNarrowRegex=MH;ke.months=gU;ke.monthsShort=mU;ke.monthsParse=vU;ke.monthsRegex=$U;ke.monthsShortRegex=bU;ke.week=CU;ke.firstDayOfYear=_U;ke.firstDayOfWeek=OU;ke.weekdays=MU;ke.weekdaysMin=LU;ke.weekdaysShort=jU;ke.weekdaysParse=UU;ke.weekdaysRegex=YU;ke.weekdaysShortRegex=VU;ke.weekdaysMinRegex=qU;ke.isPM=QU;ke.meridiem=JU;function Cc(e,t,n,r){var i=Ar(),o=rr().set(r,t);return i[n](o,e)}function M9(e,t,n){if(Nr(e)&&(t=e,e=void 0),e=e||"",t!=null)return Cc(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Cc(e,r,n,"month");return i}function gy(e,t,n,r){typeof e=="boolean"?(Nr(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Nr(t)&&(n=t,t=void 0),t=t||"");var i=Ar(),o=e?i._week.dow:0,a,l=[];if(n!=null)return Cc(t,(n+o)%7,r,"day");for(a=0;a<7;a++)l[a]=Cc(t,(a+o)%7,r,"day");return l}function rW(e,t){return M9(e,t,"months")}function iW(e,t){return M9(e,t,"monthsShort")}function oW(e,t,n){return gy(e,t,n,"weekdays")}function aW(e,t,n){return gy(e,t,n,"weekdaysShort")}function sW(e,t,n){return gy(e,t,n,"weekdaysMin")}pi("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=xe(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});te.lang=xn("moment.lang is deprecated. Use moment.locale instead.",pi);te.langData=xn("moment.langData is deprecated. Use moment.localeData instead.",Ar);var lr=Math.abs;function lW(){var e=this._data;return this._milliseconds=lr(this._milliseconds),this._days=lr(this._days),this._months=lr(this._months),e.milliseconds=lr(e.milliseconds),e.seconds=lr(e.seconds),e.minutes=lr(e.minutes),e.hours=lr(e.hours),e.months=lr(e.months),e.years=lr(e.years),this}function j9(e,t,n,r){var i=Un(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function uW(e,t){return j9(this,e,t,1)}function dW(e,t){return j9(this,e,t,-1)}function G3(e){return e<0?Math.floor(e):Math.ceil(e)}function cW(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,o,a,l,u;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=G3(ng(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=dn(e/1e3),r.seconds=i%60,o=dn(i/60),r.minutes=o%60,a=dn(o/60),r.hours=a%24,t+=dn(a/24),u=dn(L9(t)),n+=u,t-=G3(ng(u)),l=dn(n/12),n%=12,r.days=t,r.months=n,r.years=l,this}function L9(e){return e*4800/146097}function ng(e){return e*146097/4800}function fW(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=bn(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+L9(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(ng(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function hW(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+xe(this._months/12)*31536e6:NaN}function Rr(e){return function(){return this.as(e)}}var pW=Rr("ms"),gW=Rr("s"),mW=Rr("m"),yW=Rr("h"),vW=Rr("d"),xW=Rr("w"),bW=Rr("M"),$W=Rr("Q"),wW=Rr("y");function SW(){return Un(this)}function CW(e){return e=bn(e),this.isValid()?this[e+"s"]():NaN}function mo(e){return function(){return this.isValid()?this._data[e]:NaN}}var PW=mo("milliseconds"),OW=mo("seconds"),_W=mo("minutes"),kW=mo("hours"),NW=mo("days"),EW=mo("months"),IW=mo("years");function TW(){return dn(this.days()/7)}var fr=Math.round,ga={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function AW(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function RW(e,t,n,r){var i=Un(e).abs(),o=fr(i.as("s")),a=fr(i.as("m")),l=fr(i.as("h")),u=fr(i.as("d")),d=fr(i.as("M")),f=fr(i.as("w")),h=fr(i.as("y")),m=o<=n.ss&&["s",o]||o<n.s&&["ss",o]||a<=1&&["m"]||a<n.m&&["mm",a]||l<=1&&["h"]||l<n.h&&["hh",l]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(m=m||f<=1&&["w"]||f<n.w&&["ww",f]),m=m||d<=1&&["M"]||d<n.M&&["MM",d]||h<=1&&["y"]||["yy",h],m[2]=t,m[3]=+e>0,m[4]=r,AW.apply(null,m)}function FW(e){return e===void 0?fr:typeof e=="function"?(fr=e,!0):!1}function DW(e,t){return ga[e]===void 0?!1:t===void 0?ga[e]:(ga[e]=t,e==="s"&&(ga.ss=t-1),!0)}function MW(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=ga,i,o;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},ga,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),o=RW(this,!n,r,i),n&&(o=i.pastFuture(+this,o)),i.postformat(o)}var E0=Math.abs;function Oo(e){return(e>0)-(e<0)||+e}function Hf(){if(!this.isValid())return this.localeData().invalidDate();var e=E0(this._milliseconds)/1e3,t=E0(this._days),n=E0(this._months),r,i,o,a,l=this.asSeconds(),u,d,f,h;return l?(r=dn(e/60),i=dn(r/60),e%=60,r%=60,o=dn(n/12),n%=12,a=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=l<0?"-":"",d=Oo(this._months)!==Oo(l)?"-":"",f=Oo(this._days)!==Oo(l)?"-":"",h=Oo(this._milliseconds)!==Oo(l)?"-":"",u+"P"+(o?d+o+"Y":"")+(n?d+n+"M":"")+(t?f+t+"D":"")+(i||r||e?"T":"")+(i?h+i+"H":"")+(r?h+r+"M":"")+(e?h+a+"S":"")):"P0D"}var Se=Uf.prototype;Se.isValid=NB;Se.abs=lW;Se.add=uW;Se.subtract=dW;Se.as=fW;Se.asMilliseconds=pW;Se.asSeconds=gW;Se.asMinutes=mW;Se.asHours=yW;Se.asDays=vW;Se.asWeeks=xW;Se.asMonths=bW;Se.asQuarters=$W;Se.asYears=wW;Se.valueOf=hW;Se._bubble=cW;Se.clone=SW;Se.get=CW;Se.milliseconds=PW;Se.seconds=OW;Se.minutes=_W;Se.hours=kW;Se.days=NW;Se.weeks=TW;Se.months=EW;Se.years=IW;Se.humanize=MW;Se.toISOString=Hf;Se.toString=Hf;Se.toJSON=Hf;Se.locale=_9;Se.localeData=N9;Se.toIsoString=xn("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Hf);Se.lang=k9;pe("X",0,0,"unix");pe("x",0,0,"valueOf");ue("x",Mf);ue("X",oU);Re("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});Re("x",function(e,t,n){n._d=new Date(xe(e))});//! moment.js
te.version="2.29.4";jz(Ue);te.fn=Z;te.min=PB;te.max=OB;te.now=_B;te.utc=rr;te.unix=tW;te.months=rW;te.isDate=Zl;te.locale=pi;te.invalid=Tf;te.duration=Un;te.isMoment=Ln;te.weekdays=oW;te.parseZone=nW;te.localeData=Ar;te.isDuration=cd;te.monthsShort=iW;te.weekdaysMin=sW;te.defineLocale=sy;te.updateLocale=nB;te.locales=rB;te.weekdaysShort=aW;te.normalizeUnits=bn;te.relativeTimeRounding=FW;te.relativeTimeThreshold=DW;te.calendarFormat=JB;te.prototype=Z;te.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const jW=[{_id:"1",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"David",tag_No:"123",created:"2 may 2022",quantity:0,active:!1,price:100},{_id:"2",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:0,active:!1,price:100},{_id:"3",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"4",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"5",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"6",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"7",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"1",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100},{_id:"8",avatar:"https://res.cloudinary.com/dmrqqaapc/image/upload/v1682106707/ufjws2jzvx4lf75yi2m6.pdf",name:"name",tag_No:"123",created:"2 may 2022",quantity:2,active:!0,price:100}];var rg={},LW={get exports(){return rg},set exports(e){rg=e}};(function(e,t){(function(n,r){e.exports=r(C)})(G9,n=>(()=>{var r={703:(l,u,d)=>{var f=d(414);function h(){}function m(){}m.resetWarningCache=h,l.exports=function(){function x(b,p,g,$,S,P){if(P!==f){var N=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw N.name="Invariant Violation",N}}function v(){return x}x.isRequired=x;var w={array:x,bigint:x,bool:x,func:x,number:x,object:x,string:x,symbol:x,any:x,arrayOf:v,element:x,elementType:x,instanceOf:v,node:x,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:m,resetWarningCache:h};return w.PropTypes=w,w}},697:(l,u,d)=>{l.exports=d(703)()},414:l=>{l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:l=>{l.exports=n}},i={};function o(l){var u=i[l];if(u!==void 0)return u.exports;var d=i[l]={exports:{}};return r[l](d,d.exports,o),d.exports}o.n=l=>{var u=l&&l.__esModule?()=>l.default:()=>l;return o.d(u,{a:u}),u},o.d=(l,u)=>{for(var d in u)o.o(u,d)&&!o.o(l,d)&&Object.defineProperty(l,d,{enumerable:!0,get:u[d]})},o.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a={};return(()=>{o.r(a),o.d(a,{default:()=>se});var l=o(98),u=o.n(l),d=o(697),f=o.n(d);function h(){return h=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var X=arguments[j];for(var F in X)Object.prototype.hasOwnProperty.call(X,F)&&(M[F]=X[F])}return M},h.apply(this,arguments)}var m=function(M){var j=M.pageClassName,X=M.pageLinkClassName,F=M.page,ee=M.selected,re=M.activeClassName,z=M.activeLinkClassName,_=M.getEventListener,k=M.pageSelectedHandler,U=M.href,D=M.extraAriaContext,H=M.pageLabelBuilder,V=M.rel,ie=M.ariaLabel||"Page "+F+(D?" "+D:""),I=null;return ee&&(I="page",ie=M.ariaLabel||"Page "+F+" is your current page",j=j!==void 0?j+" "+re:re,X!==void 0?z!==void 0&&(X=X+" "+z):X=z),u().createElement("li",{className:j},u().createElement("a",h({rel:V,role:U?void 0:"button",className:X,href:U,tabIndex:ee?"-1":"0","aria-label":ie,"aria-current":I,onKeyPress:k},_(k)),H(F)))};m.propTypes={pageSelectedHandler:f().func.isRequired,selected:f().bool.isRequired,pageClassName:f().string,pageLinkClassName:f().string,activeClassName:f().string,activeLinkClassName:f().string,extraAriaContext:f().string,href:f().string,ariaLabel:f().string,page:f().number.isRequired,getEventListener:f().func.isRequired,pageLabelBuilder:f().func.isRequired,rel:f().string};const x=m;function v(){return v=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var X=arguments[j];for(var F in X)Object.prototype.hasOwnProperty.call(X,F)&&(M[F]=X[F])}return M},v.apply(this,arguments)}var w=function(M){var j=M.breakLabel,X=M.breakAriaLabel,F=M.breakClassName,ee=M.breakLinkClassName,re=M.breakHandler,z=M.getEventListener,_=F||"break";return u().createElement("li",{className:_},u().createElement("a",v({className:ee,role:"button",tabIndex:"0","aria-label":X,onKeyPress:re},z(re)),j))};w.propTypes={breakLabel:f().oneOfType([f().string,f().node]),breakAriaLabel:f().string,breakClassName:f().string,breakLinkClassName:f().string,breakHandler:f().func.isRequired,getEventListener:f().func.isRequired};const b=w;function p(M){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return M??j}function g(M){return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},g(M)}function $(){return $=Object.assign?Object.assign.bind():function(M){for(var j=1;j<arguments.length;j++){var X=arguments[j];for(var F in X)Object.prototype.hasOwnProperty.call(X,F)&&(M[F]=X[F])}return M},$.apply(this,arguments)}function S(M,j){for(var X=0;X<j.length;X++){var F=j[X];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(M,F.key,F)}}function P(M,j){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(X,F){return X.__proto__=F,X},P(M,j)}function N(M,j){if(j&&(g(j)==="object"||typeof j=="function"))return j;if(j!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(M)}function T(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function R(M){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(j){return j.__proto__||Object.getPrototypeOf(j)},R(M)}function W(M,j,X){return j in M?Object.defineProperty(M,j,{value:X,enumerable:!0,configurable:!0,writable:!0}):M[j]=X,M}var L=function(M){(function(_,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(k&&k.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),k&&P(_,k)})(z,M);var j,X,F,ee,re=(F=z,ee=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var _,k=R(F);if(ee){var U=R(this).constructor;_=Reflect.construct(k,arguments,U)}else _=k.apply(this,arguments);return N(this,_)});function z(_){var k,U;return function(D,H){if(!(D instanceof H))throw new TypeError("Cannot call a class as a function")}(this,z),W(T(k=re.call(this,_)),"handlePreviousPage",function(D){var H=k.state.selected;k.handleClick(D,null,H>0?H-1:void 0,{isPrevious:!0})}),W(T(k),"handleNextPage",function(D){var H=k.state.selected,V=k.props.pageCount;k.handleClick(D,null,H<V-1?H+1:void 0,{isNext:!0})}),W(T(k),"handlePageSelected",function(D,H){if(k.state.selected===D)return k.callActiveCallback(D),void k.handleClick(H,null,void 0,{isActive:!0});k.handleClick(H,null,D)}),W(T(k),"handlePageChange",function(D){k.state.selected!==D&&(k.setState({selected:D}),k.callCallback(D))}),W(T(k),"getEventListener",function(D){return W({},k.props.eventListener,D)}),W(T(k),"handleClick",function(D,H,V){var ie=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},I=ie.isPrevious,G=I!==void 0&&I,Y=ie.isNext,Oe=Y!==void 0&&Y,me=ie.isBreak,ge=me!==void 0&&me,he=ie.isActive,Ne=he!==void 0&&he;D.preventDefault?D.preventDefault():D.returnValue=!1;var De=k.state.selected,fe=k.props.onClick,O=V;if(fe){var E=fe({index:H,selected:De,nextSelectedPage:V,event:D,isPrevious:G,isNext:Oe,isBreak:ge,isActive:Ne});if(E===!1)return;Number.isInteger(E)&&(O=E)}O!==void 0&&k.handlePageChange(O)}),W(T(k),"handleBreakClick",function(D,H){var V=k.state.selected;k.handleClick(H,D,V<D?k.getForwardJump():k.getBackwardJump(),{isBreak:!0})}),W(T(k),"callCallback",function(D){k.props.onPageChange!==void 0&&typeof k.props.onPageChange=="function"&&k.props.onPageChange({selected:D})}),W(T(k),"callActiveCallback",function(D){k.props.onPageActive!==void 0&&typeof k.props.onPageActive=="function"&&k.props.onPageActive({selected:D})}),W(T(k),"getElementPageRel",function(D){var H=k.state.selected,V=k.props,ie=V.nextPageRel,I=V.prevPageRel,G=V.selectedPageRel;return H-1===D?I:H===D?G:H+1===D?ie:void 0}),W(T(k),"pagination",function(){var D=[],H=k.props,V=H.pageRangeDisplayed,ie=H.pageCount,I=H.marginPagesDisplayed,G=H.breakLabel,Y=H.breakClassName,Oe=H.breakLinkClassName,me=H.breakAriaLabels,ge=k.state.selected;if(ie<=V)for(var he=0;he<ie;he++)D.push(k.getPageElement(he));else{var Ne=V/2,De=V-Ne;ge>ie-V/2?Ne=V-(De=ie-ge):ge<V/2&&(De=V-(Ne=ge));var fe,O,E=function(q){return k.getPageElement(q)},A=[];for(fe=0;fe<ie;fe++){var oe=fe+1;if(oe<=I)A.push({type:"page",index:fe,display:E(fe)});else if(oe>ie-I)A.push({type:"page",index:fe,display:E(fe)});else if(fe>=ge-Ne&&fe<=ge+(ge===0&&V>1?De-1:De))A.push({type:"page",index:fe,display:E(fe)});else if(G&&A.length>0&&A[A.length-1].display!==O&&(V>0||I>0)){var K=fe<ge?me.backward:me.forward;O=u().createElement(b,{key:fe,breakAriaLabel:K,breakLabel:G,breakClassName:Y,breakLinkClassName:Oe,breakHandler:k.handleBreakClick.bind(null,fe),getEventListener:k.getEventListener}),A.push({type:"break",index:fe,display:O})}}A.forEach(function(q,ae){var ve=q;q.type==="break"&&A[ae-1]&&A[ae-1].type==="page"&&A[ae+1]&&A[ae+1].type==="page"&&A[ae+1].index-A[ae-1].index<=2&&(ve={type:"page",index:q.index,display:E(q.index)}),D.push(ve.display)})}return D}),_.initialPage!==void 0&&_.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(_.initialPage,") and forcePage (").concat(_.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),U=_.initialPage?_.initialPage:_.forcePage?_.forcePage:0,k.state={selected:U},k}return j=z,(X=[{key:"componentDidMount",value:function(){var _=this.props,k=_.initialPage,U=_.disableInitialCallback,D=_.extraAriaContext,H=_.pageCount,V=_.forcePage;k===void 0||U||this.callCallback(k),D&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(H)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(H,"). Did you forget a Math.ceil()?")),k!==void 0&&k>H-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(k," > ").concat(H-1,").")),V!==void 0&&V>H-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(V," > ").concat(H-1,")."))}},{key:"componentDidUpdate",value:function(_){this.props.forcePage!==void 0&&this.props.forcePage!==_.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(_.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var _=this.state.selected,k=this.props,U=k.pageCount,D=_+k.pageRangeDisplayed;return D>=U?U-1:D}},{key:"getBackwardJump",value:function(){var _=this.state.selected-this.props.pageRangeDisplayed;return _<0?0:_}},{key:"getElementHref",value:function(_){var k=this.props,U=k.hrefBuilder,D=k.pageCount,H=k.hrefAllControls;if(U)return H||_>=0&&_<D?U(_+1,D,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(_){var k=_===this.state.selected;if(this.props.ariaLabelBuilder&&_>=0&&_<this.props.pageCount){var U=this.props.ariaLabelBuilder(_+1,k);return this.props.extraAriaContext&&!k&&(U=U+" "+this.props.extraAriaContext),U}}},{key:"getPageElement",value:function(_){var k=this.state.selected,U=this.props,D=U.pageClassName,H=U.pageLinkClassName,V=U.activeClassName,ie=U.activeLinkClassName,I=U.extraAriaContext,G=U.pageLabelBuilder;return u().createElement(x,{key:_,pageSelectedHandler:this.handlePageSelected.bind(null,_),selected:k===_,rel:this.getElementPageRel(_),pageClassName:D,pageLinkClassName:H,activeClassName:V,activeLinkClassName:ie,extraAriaContext:I,href:this.getElementHref(_),ariaLabel:this.ariaLabelBuilder(_),page:_+1,pageLabelBuilder:G,getEventListener:this.getEventListener})}},{key:"render",value:function(){var _=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&_!==void 0)return _&&_(this.props);var k=this.props,U=k.disabledClassName,D=k.disabledLinkClassName,H=k.pageCount,V=k.className,ie=k.containerClassName,I=k.previousLabel,G=k.previousClassName,Y=k.previousLinkClassName,Oe=k.previousAriaLabel,me=k.prevRel,ge=k.nextLabel,he=k.nextClassName,Ne=k.nextLinkClassName,De=k.nextAriaLabel,fe=k.nextRel,O=this.state.selected,E=O===0,A=O===H-1,oe="".concat(p(G)).concat(E?" ".concat(p(U)):""),K="".concat(p(he)).concat(A?" ".concat(p(U)):""),q="".concat(p(Y)).concat(E?" ".concat(p(D)):""),ae="".concat(p(Ne)).concat(A?" ".concat(p(D)):""),ve=E?"true":"false",le=A?"true":"false";return u().createElement("ul",{className:V||ie,role:"navigation","aria-label":"Pagination"},u().createElement("li",{className:oe},u().createElement("a",$({className:q,href:this.getElementHref(O-1),tabIndex:E?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ve,"aria-label":Oe,rel:me},this.getEventListener(this.handlePreviousPage)),I)),this.pagination(),u().createElement("li",{className:K},u().createElement("a",$({className:ae,href:this.getElementHref(O+1),tabIndex:A?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":le,"aria-label":De,rel:fe},this.getEventListener(this.handleNextPage)),ge)))}}])&&S(j.prototype,X),Object.defineProperty(j,"prototype",{writable:!1}),z}(l.Component);W(L,"propTypes",{pageCount:f().number.isRequired,pageRangeDisplayed:f().number,marginPagesDisplayed:f().number,previousLabel:f().node,previousAriaLabel:f().string,prevPageRel:f().string,prevRel:f().string,nextLabel:f().node,nextAriaLabel:f().string,nextPageRel:f().string,nextRel:f().string,breakLabel:f().oneOfType([f().string,f().node]),breakAriaLabels:f().shape({forward:f().string,backward:f().string}),hrefBuilder:f().func,hrefAllControls:f().bool,onPageChange:f().func,onPageActive:f().func,onClick:f().func,initialPage:f().number,forcePage:f().number,disableInitialCallback:f().bool,containerClassName:f().string,className:f().string,pageClassName:f().string,pageLinkClassName:f().string,pageLabelBuilder:f().func,activeClassName:f().string,activeLinkClassName:f().string,previousClassName:f().string,nextClassName:f().string,previousLinkClassName:f().string,nextLinkClassName:f().string,disabledClassName:f().string,disabledLinkClassName:f().string,breakClassName:f().string,breakLinkClassName:f().string,extraAriaContext:f().string,ariaLabelBuilder:f().func,eventListener:f().string,renderOnZeroPageCount:f().func,selectedPageRel:f().string}),W(L,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(M){return M},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const se=L})(),a})())})(LW);const nn=lb(rg),zW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Ql(t)}),[r,i]=C.useState(0),o=6,a=r*o,l=Math.ceil((n==null?void 0:n.length)/o),u=n==null?void 0:n.slice(a,a+o),d=({selected:b})=>{i(b)};console.log(n);const[f,h]=C.useState(""),m=["name","brand","tag"],x=b=>{const p=b==null?void 0:b.filter(g=>m.some($=>{const S=g[$];return typeof S=="string"&&S.toLowerCase().includes(f)}));return f?p!=null&&p.length?p:null:b},v=x(u);var w=Intl.NumberFormat();return y(HW,{children:[s(rt,{}),y(WW,{children:[s(YW,{children:"All Products"}),y(UW,{children:[s("input",{placeholder:"Search by name or brand",value:f,onChange:b=>h(b.target.value)}),s("button",{onClick:x,children:s(Kl,{})})]})]}),s(BW,{children:y(qW,{children:[y(VW,{children:[s(Ri,{children:s(Ai,{children:"Product "})}),s(Ri,{children:s(Ai,{children:"Tag "})}),s(Ri,{children:s(Ai,{children:"Created"})}),s(Ri,{children:s(Ai,{children:"Price"})}),s(Ri,{children:s(Ai,{children:"Aval / Qty "})}),s(Ri,{children:s(Ai,{children:"Active "})}),y(Ri,{children:[s(Ai,{children:"Action "})," "]})]}),v==null?void 0:v.map((b,p)=>s(If,{index:p,avatar:b==null?void 0:b.avatar[0].url,name:b.name,tag:b.tag_No,created:te(b.createdAt).format("D MMM YYYY"),quantity:b.quantity,active:b.active,price:w.format(b.price)},p))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:l,onPageChange:d,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},UW=c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`,BW=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,HW=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,WW=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,YW=c.div`
  border-bottom: 2px solid blue;
`,Ai=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Ri=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,VW=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,qW=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,GW=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Ql(t)}),r=n.filter(b=>b.active===!0),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),f=({selected:b})=>{o(b)};console.log(n);const[h,m]=C.useState("");console.log(h);const x=["name","brand","tag"],v=b=>{const p=b==null?void 0:b.filter(g=>x.some($=>{const S=g[$];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:b};v(d);var w=Intl.NumberFormat();return y(ZW,{children:[s(rt,{}),y(JW,{children:[s(XW,{children:"Live Products"}),y(QW,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:b=>m(b.target.value)}),s("button",{onClick:v,children:s(Kl,{})})]})]}),s(KW,{children:y(tY,{children:[y(eY,{children:[s(Di,{children:s(Fi,{children:"Product "})}),s(Di,{children:s(Fi,{children:"Tag "})}),s(Di,{children:s(Fi,{children:"Created"})}),s(Di,{children:s(Fi,{children:"Price"})}),s(Di,{children:s(Fi,{children:"Aval / Qty "})}),s(Di,{children:s(Fi,{children:"Active "})}),y(Di,{children:[s(Fi,{children:"Action "})," "]})]}),d==null?void 0:d.map((b,p)=>s(If,{index:p,avatar:b==null?void 0:b.avatar[0].url,name:b.name,tag:b.tag_No,created:te(b.createdAt).format("D MMM YYYY"),quantity:b.quantity,active:b.active,price:w.format(b.price)},p))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})},QW=c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`,KW=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,ZW=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,JW=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,XW=c.div`
  border-bottom: 2px solid blue;
`,Fi=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Di=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,eY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,tY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,nY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Ql(t)}),r=n.filter(p=>p.active===!1),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),f=({selected:p})=>{o(p)};console.log(n);const[h,m]=C.useState("");console.log(h);const x=["name","brand","tag"],v=p=>{const g=p==null?void 0:p.filter($=>x.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(h)}));return h?g!=null&&g.length?g:null:p},w=v(d);var b=Intl.NumberFormat();return y(oY,{children:[s(rt,{}),y(aY,{children:[s(sY,{children:"Sold Out"}),y(rY,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:p=>m(p.target.value)}),s("button",{onClick:v,children:s(Kl,{})})]})]}),s(iY,{children:y(uY,{children:[y(lY,{children:[s(ji,{children:s(Mi,{children:"Product "})}),s(ji,{children:s(Mi,{children:"Tag "})}),s(ji,{children:s(Mi,{children:"Created"})}),s(ji,{children:s(Mi,{children:"Price"})}),s(ji,{children:s(Mi,{children:"Aval / Qty "})}),s(ji,{children:s(Mi,{children:"Active "})}),y(ji,{children:[s(Mi,{children:"Action "})," "]})]}),w==null?void 0:w.map((p,g)=>s(If,{index:g,avatar:p==null?void 0:p.avatar[0].url,name:p.name,tag:p.tag_No,created:te(p.createdAt).format("D MMM YYYY"),quantity:p.quantity,active:p.active,price:b.format(p.price)},g))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},rY=c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`,iY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,oY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,aY=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,sY=c.div`
  border-bottom: 2px solid blue;
`,Mi=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,ji=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,lY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,uY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,dY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["posts"],queryFn:()=>Ql(t)}),r=jW.filter(b=>b.rejected),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),f=({selected:b})=>{o(b)};console.log(n);const[h,m]=C.useState("");console.log(h);const x=["name","brand","tag"],v=b=>{const p=b==null?void 0:b.filter(g=>x.some($=>{const S=g[$];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:b},w=v(d);return y(hY,{children:[s(rt,{}),y(pY,{children:[s(gY,{children:"Rejected Products"}),y(cY,{children:[s("input",{placeholder:"Search by name or brand",value:h,onChange:b=>m(b.target.value)}),s("button",{onClick:v,children:s(Kl,{})})]})]}),s(fY,{children:y(yY,{children:[y(mY,{children:[s(ws,{children:s($s,{children:"Product "})}),s(ws,{children:s($s,{children:"Tag "})}),s(ws,{children:s($s,{children:"Created"})}),s(ws,{children:s($s,{children:"Reason for Rejection"})}),y(ws,{children:[s($s,{children:"Action "})," "]})]}),w==null?void 0:w.map((b,p)=>s(If,{index:p,avatar:b==null?void 0:b.avatar[0].url,name:b.name,tag:b.tag_No,created:te(b.createdAt).format("D MMM YYYY"),rejected},p))]})}),s(nn,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active"})]})},cY=c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`,fY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,hY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,pY=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,gY=c.div`
  border-bottom: 2px solid blue;
`,$s=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,ws=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,mY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,yY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,Fr=({avatar:e,index:t,order_No:n,price:r,pending_days:i,created:o,delivery_status:a,payment_method:l,tag_No:u,name:d,payment_status:f,quantity:h,amount:m,products:x})=>{const v=JSON.parse(localStorage.getItem("user"));C.useState(!1);const w=x==null?void 0:x.filter(b=>b.sellerID===v._id);return y(bY,{children:[n&&y(Sn,{children:[" ",s(Yn,{children:n})]}),i&&y(Sn,{children:[" ",s(Yn,{children:i})]}),o&&y(Sn,{children:[" ",s(Yn,{children:o})," "]}),u&&y(Sn,{children:[" ",s(Yn,{children:u})," "]}),x&&s(Sn,{children:w==null?void 0:w.map(b=>{var p;return y(xY,{children:[s("span",{children:s(vY,{src:(p=b.productID)==null?void 0:p.avatar[0].url})}),b.productID.name]})})}),x&&s(Sn,{children:w==null?void 0:w.map(b=>s(Yn,{children:b.price}))}),h&&y(Sn,{children:[s(Yn,{children:h})," "]}),m&&s(Sn,{children:s(Yn,{children:m})}),l&&s(Sn,{children:s(Yn,{children:l})}),f&&s(Sn,{children:s(Yn,{children:f})}),a&&s(Sn,{children:s(Yn,{className:`${a}`,children:a})})]},t)};c.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
  margin-left: 10px;
`;c.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
`;const vY=c.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  /* background-color: gold; */
  margin-right: 10px;
`;c.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;c.div``;const Yn=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,xY=c.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`,Sn=c.td`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
  border-left: 1.5px solid #d0d1d2;
`,bY=c.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`,$Y=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(b=>{var g;return((g=b==null?void 0:b.products)==null?void 0:g.filter($=>$.sellerID===t)).length>0}),[i,o]=C.useState(0),a=6,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),f=({selected:b})=>{o(b)},[h,m]=C.useState(""),x=["order_No","delivery_status"],w=(b=>{const p=b==null?void 0:b.filter(g=>x.some($=>{const S=g[$];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:b})(d);return y(SY,{children:[s(rt,{}),s(CY,{children:s(PY,{children:"All Orders"})}),s(wY,{children:y(_Y,{children:[y(OY,{children:[s(ko,{children:s(_o,{children:"Order Number "})}),s(ko,{children:s(_o,{children:"Pending Days"})}),s(ko,{children:s(_o,{children:"Order Date"})}),s(ko,{children:s(_o,{children:"Price"})}),s(ko,{children:s(_o,{children:"Payment Method"})}),s(ko,{children:s(_o,{children:"Status "})})]}),w==null?void 0:w.map((b,p)=>{var g;return s(Fr,{index:p,delivery_status:b.delivery_status,order_No:b.order_No,created:te(b.createdAt).format("D MMM YYYY"),payment_method:b.payment_method,pending_days:b.pending_days,amount:(g=b.products)==null?void 0:g.filter($=>$.sellerID===e._id).reduce(($,S)=>$+S.price*S.qty,0)},p)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const wY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,SY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,CY=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
`,PY=c.div`
  border-bottom: 2px solid blue;
`,_o=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,ko=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,OY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,_Y=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,kY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="pending"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,x]=C.useState("");console.log(m);const v=["order_No","delivery_status"],b=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(EY,{children:[s(rt,{}),s(IY,{children:s(TY,{children:"Pending Orders"})}),s(NY,{children:y(RY,{children:[y(AY,{children:[s(Cs,{children:s(Ss,{children:"Order Number "})}),s(Cs,{children:s(Ss,{children:"Order Date"})}),s(Cs,{children:s(Ss,{children:"Price"})}),s(Cs,{children:s(Ss,{children:"Payment Method"})}),s(Cs,{children:s(Ss,{children:"Status "})})]}),b==null?void 0:b.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const NY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,EY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,IY=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,TY=c.div`
  border-bottom: 2px solid blue;
`,Ss=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Cs=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,AY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,RY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,FY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="ready to ship"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,x]=C.useState(""),v=["order_No","delivery_status"],b=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(MY,{children:[s(rt,{}),s(jY,{children:s(LY,{children:"Ready To Ship Orders"})}),s(DY,{children:y(UY,{children:[y(zY,{children:[s(Os,{children:s(Ps,{children:"Order Number "})}),s(Os,{children:s(Ps,{children:"Order Date"})}),s(Os,{children:s(Ps,{children:"Price"})}),s(Os,{children:s(Ps,{children:"Payment Method"})}),s(Os,{children:s(Ps,{children:"Status "})})]}),b==null?void 0:b.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const DY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,MY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,jY=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,LY=c.div`
  border-bottom: 2px solid blue;
`,Ps=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Os=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,zY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,UY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,BY=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="shipped"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,x]=C.useState(""),v=["order_No","delivery_status"],b=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(WY,{children:[s(rt,{}),s(YY,{children:s(VY,{children:"Shipped"})}),s(HY,{children:y(GY,{children:[y(qY,{children:[s(Eo,{children:s(No,{children:"Order Number "})}),s(Eo,{children:s(No,{children:"Pending Days"})}),s(Eo,{children:s(No,{children:"Order Date"})}),s(Eo,{children:s(No,{children:"Price"})}),s(Eo,{children:s(No,{children:"Payment Method"})}),s(Eo,{children:s(No,{children:"Status "})})]}),b==null?void 0:b.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const HY=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,WY=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,YY=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,VY=c.div`
  border-bottom: 2px solid blue;
`,No=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Eo=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,qY=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,GY=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,QY="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA6LSURBVHgB7Z0JrFxVHca/ebVQQNk3sUADZRGIQkGhKjuKUVyIIS4xMRJwjRIUlMREE1RUMGJUgonGgIoGELFBMVK1hhTRCkKRLQXbIpS2tNAWui/v+f8492TOu2/m9NHO3N7/ne+XfJnlzbzcOed853/We1oYDFqmIdNepoNNx5ummY4xHWnax7Rz8bkWBpcRhN+/xbTGtMg03/SQ6d+mx02LTatMmzEANLkwxN/GTH+j6fRCbzIdlPy91eV7g8hI5r2NpidN/zTNMv3FtDTzPVFjYiHf0/RxhAxdhlAzUsPJIzUiddRwkmYUo8Ym00LTb01nmCYiROdBrlhcwYxipp1u+oPpeYSM3ozRxvBSSOtmlpiWfM5K5zrTYUnaixrDmmxv0+cRMk+Roj9GidpUPM41nYdQMckkNYUZs5/pMtMLaNdyMkd/jRKbXo+Z3mvaCQ0yyQQ0A0aO3U1fKvRqtNvF5ZGpkQ7fl4HGqlNatTo8j+m7B8LI4P8QOvOd0tkdTXA6fwONfhVC9GDGDBWPOWMMF5/j6Mx6hJqwEZnaI9hcmlQ8Mq3SiqZcbmK68XMc2fqC6ebic67T1LtB4vWfYZph2i15v5s5+JymWIhQ01HM1PUQhOnDCodpOQWhA05xaDwdreqUvjH6zDOdhZCuqnR2IMwkTvT9CZ37G2mHMv79XtOlppNNB6LdzGxJYyoWRpDJCIWdEXpRKY1z6f090y4QOwxmJPsdPzatxNjh2zSzGB2YuV8zHYr6zZqn11Kn6yLxetj5Ptb0C9OL6D4AEoeBl5s+YHoVxA6B4f400wKEDMmNsjxq+ghCZtVxUisWwqFEdbvGoeJxf9O1aI8UdosiTPdbTIcn33WH11EsFh6G/0+YzsXoZhJJ28QrTBcj9FHIMOoH14KdY3oHwjoxGpkFcBPqQ0zTdaZ/IESU00qfKUe/AxCGfx+G+iKVw5qMi+fS5SPlphU741egXTvXEQ6P/gqhQ7saofnCgYNvIjQh6xjtmJZcxnMbxqZ/zIP4/o0Ii0TdRhFvxAJzAUaboRziaY7fmF6HekbK2K5nmz7OSqfrnvhbPoP69UkivKajEJqvuQESrv6dCqd4dTUz59TieXm+gzBjlphuNT2LkIF1hM2pt6M9tJqage+x3zQJ9Wye8DqfMt2OfPqymTUN9TV6Fo8GYWHh8OFJmc8wI+aYZqPeHIEwERcNUB5qPQRhbVkdC1aM0jMRmoflvl0reW86nOLRIEx4TlpNTl5HYnjnsC4Nshj17hxy41FslkTS5+wQr0d9fwOvi5up5qOzieN7R2H0EhY3eG1i0RxsesQlEJH4fIPpAXRuftWJexAGGmIfKW2/kzsRRrPq+ht4rbw+7jbcgO5rt9gP3AMO8WoQjmDFa+9U+zKzFqH+cAj666YnMLqGZZuezcPri9d1rnlpAi5Q5CBDt+ukOXaFwz6I11lOJna3kanY9l1TvK5z84TcbbrIdL7pRNNahHY9523mw0ezhEbv1lHn9U8s5A6vBtla5Cu36+sM+xhcH/YgwhIY/raXEDrAXn7DeG7g4C56EK2TqQcsYGsKdduLIXYAMkh9qOMSmIFH0/9CZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBm8GaTTHciF6BteI0hdbwQnGoa3HYXc+H8wwpkg8U6EQvQNbwb5NsKZE7yNDM8hlEFEX/FiEN5q9IemCzH6Np11vzGccI6XPgjPzWDkYN+jfBqTEH3Di0F4o+p4tDORMUQleDFI7G9oiFdUiheDyBRih6CZdCEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkEFEFnOh1uUxIBhH9hobgIlMuF5oEZ8ggop/EaLGf6cumT5qmwlEUkUFEP4l7d3h674dM3zL92nQonCCDiH7SKj3fyTTNdAWcoFNuRb/ptLntSDjBSwRhJ0/nh/vG5S5QLwZZYtoInSUuKsaLQWaYFqF9owZFE5+4iyJeDDLPdLnpvwhRRMYQleCpk84ostR0puldppMRrl+3/hF9w9so1hzT/aZlpmNNu0ND1aKPeCtcjBZxREtRQ/QdbxFEnXNRKWqeCJFBBhEigwwiRAaPJ0zJ1KIyPBW2OIuu5SaiMjyNYvFaeQzCh03TEeZAdDNr0Ve8GISR7iLTlaa9oGaWqAgvBe0Y0yWmPdFuagGKHt5wN3/lJYK8xzSleK5mlX/cGMWLQQ5AuFY1rfzjKop43HKr6OGPsik2wwmqkUU/iZvbWKkNoz1EPxNO0E0bRD+J0Z4mWYmwTeFm0zVwggwi+klsWtEc3zHda3oAjpBBRL+hSdYhRI5n4KyTrj6IqIp0/soNMoioGkUQIZqCDCJEBhlEiAwyiBAZZBAhMsggQmSQQYTIIIMIkcGjQXRXRVEZXgyyCqOPPZBJRCV4McifTcuhW/6IivFikH+ZfoD29bpc+Cb84WW5+wbTTxBM8THTYQhHCuvuJqKveIkgNMILpqsRbgF0Kdr9EiH6hqdRrLi3mde8AUJUgLdhXh3gKSpFE4VCZJBBhMgggwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZJBBhMgggwiRQQYRIoMMIkQGGUT0mkattpZBRC/g/QJ4MGdqjnS351rTGuh8EDGg8Gi1R00Titdx307c8flH0/NwuDVaBhG9gNufv2Gah9FRYovpHtN1xWt3EURnFIrtJRb62aaLTe83nYRwLuFdphmm+XDaN5FBRK9Yj/YptpMQWicvmTbCccddBhG9hB31tYXICJyPaskgotc06lZM6qQLkUEGESKDDCJEBvVBRK9poT0hqE66EAmcSZ9o2s20CWHol48a5hUDD++2f4rpfaajEYZ8OYt+h+mJ4rWoAIbvC00rEBI9rvuJa3+op02HQMciVEFM47eY7kOIGFsKrUYwyBQ4zQt10sX2woppV9NXTdMw+pCjnU3nmj6VvOcKGURsLyz0pyGsvxrG6E46+yRsxp9v2hcOkUFEL9gdo6NDq/Sanfad4RAZRPSCBQj9wfLwbhy9WmJaCW2YEgMICz1X8N6Oduc8vk/xNLAbEXYUuuuDaJhX9AKa4hrTa03TTXsi9EeWmX5n+im0H0QMONwU9WnT2abDEfaB3G+ag7B5yiUyiOgFMTosNv0SYTad77mfHJRBRC+JRtmIhqBOuhAZZBAhMsggQmSQQYTIIIOIXlJeYlJ+7Q4ZRPQKGiGOYnGi8DXQjkIhXobmYGX7NtPnTFMR5kD+arrJNBeiMrRhqp5wJ+FzCMtO0rx4xHQCtGFKDCgs+AchbJjap3hvJHl8vemLcIoMInrBcaZDEQyRdszjIzdT7QvtKBQDyv4YW5bSvSHssO8Kh8ggotc0qt8ngwiRQQYRIoMMIkQGGUSIDDKIEBlkECEyyCBCZPBqEBlbVILXgqZFiL6Iq33doZpYiAwyiBAZZBAhMsggQmSQQYTIIIMIkUEGESKDDCJEBhlEiAwyiBAZmmqQVpfnore4v7Xo1miqQXYyTS4eZZD+wbTlEc9M64loYFo37daj8f6wPLf7+6a7EA6R5Cmsw8VnXN8rtgZEE/A2Pmea3m06xzQJDaxwm2aQWPh5aP0009Gm802zEQ6U/A/Cmd6r0TaMGB8sK3sgHNDJtH2r6XiEk22Z3rFyalQUaWIEIcwo1mYM/zQJb395cfF3nttNg2yGosl4YVrSBLwBXGqAkeTvjTMHaerd3WNtFjMuvVcs+yV7Q2wraaXS6TajjaLJxx+kGaeOeu8YqLTUPIgQGWQQURUu+3tem1gj4/x7fEybW43sTFZAmpa59M191x1eDdJtiDbNMJ50NFT6TmoOmeSVkZpiCGPTdmsjWYogNYCZw8ziUO7PEOY/TkUYr+fkISe3OKEVZ31lkvERj1Tj0Pi6QktN95keMl1iOhEa5q0NudqImUQD0BCcSb/ZdADCmYUHIpx0tEvxGTE+mN6bTC+alpueNS00rTKdgpDWMbKUcW0arwZhDba1mXDO9J5uut20BKHGI5oc3D7SAs+I/E7Twcj379jc3QRRCcwANptY4ONseCoahxmy0XQbQsSYADWpekVMR0aLN5seRkjv9LTh8qnDDyJEGVEBzJwpCGuqYgaMoHPmrDV9Nvme6A2scLj05Aa0K6RO+RDfvwOiMljQmTkz0c6cbjUX//YMwgH38bti+2DkYB/ucoQoHU1QNkjs1PPxSiiCV0ZMaJ7Lnau9YqYxk7iS94LiexMgtgUaI+7/oDnigs9uUTy+z77HORCVwozi0C1HVbbWzIomWWH6CsKIFk0SMzz9n9LYmj6+ZtSearqpSM/NSRrnIvicIs1dRg+vtSkLN2swLmU/Nnm/nAmt5PNcxXuW6Q3Fa2beGoRmQpz48lJ4qzIIy8c+RRp/0PRd0xnF38czMcjRxutNs+B0/41LVxdwHuM8048Q5jfib+n0m0ZKz9ebHjM9aXoEYWx/PTQETGLhZz+Dc0dHIFREUxDSfKj02ZQ0/WgIGoOTiI9DBqkcXjuHDq81fRTtoVxgfCaJE1uMILEtLQLRJDQE58riUpLyZ8rENObnnzNdZroVjjeneV5qwgRnH+Qq034Ie6NztJLvDSXPYyFQ9GhTrmhY+WxtkWe6VoufuwHOzdEEYnv5OIT95lvQfdhR6p/STjkf7zTthbEDIWIHcrZpLtqjVjHjPBU0r8aIw7lM91tMx6Ahw+lNmhNYgNDhnlyoU+2l2qw3jHR4vtL0c4T5qacQool7mjZp9rTp9wjL3TmyxU58NEqaqTLKtlE2BsXlPH83XWO6GmGF73Dps25pYkHhb2LHmxOJnMHlfbFOQLtjHs0ik7wyYprFgs85pL8hVEizECJ441bsNrmQxPticSk212KdZJpuOgrt0TuZZHxEczBacPUuI8bdCH0+7g3ZkHyuUfwfh/SKqT1n13AAAAAASUVORK5CYII=",KY="/assets/Fashion-71a7f00e.png",ZY="/assets/Computer-be5aa3f3.png",JY="/assets/Food (1)-e1af81f4.png",XY=()=>y(tV,{children:[s(rt,{}),y(eV,{children:[y(Fu,{to:"/seller-dashboard/uploading",children:[s(Ru,{src:QY}),s("span",{children:"Mobiles"})]}),y(Fu,{to:"/seller-dashboard/upload-cloths",children:[s(Ru,{src:KY}),s("span",{children:"Clothings"})]}),y(Fu,{to:"/seller-dashboard/upload-electronics",children:[s(Ru,{src:ZY}),s("span",{children:"Electronics"})]}),y(Fu,{to:"/seller-dashboard/upload-foods",children:[s(Ru,{src:JY}),s("span",{children:"Foods And Groceries"})]})]})]}),Ru=c.img`

`,Fu=c(be)`
  width: 360px;
  height: 365px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background: rgba(47, 128, 237, 0.37);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-decoration: none;
  justify-content: center;
  @media (max-width: 320px) {
    width: 300px;
  }
  flex-direction: column;
  margin: 20px 20px;
  span {
    font-size: 19px;
    font-weight: 500;
    margin-top: 15px;
  }
`,eV=c.div`
  width: 87%;
  border-top: 1.8px solid grey;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  } */
`,tV=c.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`,nV=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[f,h]=C.useState(""),[m,x]=C.useState(""),[v,w]=C.useState(""),[b,p]=C.useState(""),[g,$]=C.useState(""),[S,P]=C.useState(""),[N,T]=C.useState(),[R,W]=C.useState("phone"),[L,se]=C.useState(!1),M=nt(),j=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);t(U),l(k)},X=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);r(U),d(k)},F=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);o(U),h(k)},ee=$t({mutationFn:sD,onSuccess:()=>{M("/seller-dashboard/variation")},onError:_=>{alert(_.message)}}),re=JSON.parse(localStorage.getItem("user"));return y(uV,{children:[s(rt,{}),y(lV,{onSubmit:_=>{_.preventDefault();const k=re._id;(m.length==0||b.length==0||v.length==0||S.length==0||g.length==0||!N||a.length==0||u.length==0)&&(se(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",m),U.append("ram",b),U.append("condition",g),U.append("brand",v),U.append("description",S),U.append("category",R),U.append("price",N),f&&U.append("avatar",a),u&&U.append("avatar",u),f&&U.append("avatar",f),ee.mutate({id:k,formData:U})},children:[y(sV,{children:[s("span",{children:"Upload Product Image *"}),y(aV,{children:[y(R0,{style:L?{border:"1px solid red"}:null,children:[a?null:s(T0,{fontSize:"25px"}),s(I0,{type:"file",onChange:j}),a?s(A0,{src:e}):null]}),y(R0,{style:L?{border:"1px solid red"}:null,children:[u?null:s(T0,{fontSize:"25px"}),s(I0,{type:"file",onChange:X}),u?s(A0,{src:n}):null]}),y(R0,{children:[f?null:s(T0,{fontSize:"25px"}),s(I0,{type:"file",onChange:F}),f?s(A0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(oV,{children:[y(Io,{children:[s(Ao,{children:"Name*"}),y(To,{children:[s("input",{placeholder:"name",value:m,onChange:_=>x(_.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(Io,{children:[s(Ao,{children:"Brand*"}),y(To,{children:[s("input",{placeholder:"brand",value:v,onChange:_=>w(_.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(Io,{children:[s(Ao,{children:"RAM*"}),y(To,{children:[s("input",{placeholder:"RAM",value:b,onChange:_=>p(_.target.value)}),s("span",{children:"kindly specify RAM of product"})]})]}),y(Io,{children:[s(Ao,{children:"Price*"}),y(To,{children:[s("input",{placeholder:"price",type:"number",value:N,onChange:_=>T(_.target.value)}),s("span",{children:"kindly specify RAM of product"})]})]}),y(Io,{children:[s(Ao,{children:"Condition*"}),y(To,{children:[y("select",{placeholder:"Select condition",value:g,onChange:_=>$(_.target.value),children:[s("option",{children:"Select Condition"}),s("option",{children:"New"}),s("option",{children:"Used"})]}),s("span",{children:"kindly specify condition of product"})]})]}),y(Io,{children:[s(Ao,{children:"Description*"}),y(To,{children:[s("textarea",{placeholder:"description",value:S,onChange:_=>P(_.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(iV,{children:s(rV,{type:"submit",disabled:ee.status==="loading",children:ee.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},I0=c.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,T0=c(Ef)`
  font-size: 25px;
  position: absolute;
`,A0=c.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,rV=c.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`,iV=c.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Io=c.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,To=c.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
  }
  select {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 5px;
  }

  textarea{
    height: 300px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }

  @media (max-width: 680px){
    width: 100%;
  }
`,Ao=c.div`
  font-size: 15px;
  font-weight: 500;
`,oV=c.div`
  width: 100%;
`,aV=c.div`
  display: flex;
  padding: 10px 0;
`,R0=c.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  @media (max-width: 450px){
    height: 100px;
  }
`,sV=c.div`
  width: 97%;
  border-top: 1.7px solid grey;
  padding: 10px 0;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  div {
    font-size: 15px;
    font-weight: lighter;
  }
`,lV=c.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,uV=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,dV=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(!0),f=nt(),h=JSON.parse(localStorage.getItem("product")),m=$t({mutationFn:cD,onSuccess:()=>{f("/seller-dashboard/success")},onError:v=>{console.log(v.message),alert(v.message)}});return y(mV,{children:[s(rt,{}),y(gV,{onSubmit:v=>{v.preventDefault();const w=h._id;m.mutate({id:w,tag_No:e,quantity:n,startDate:i,endDate:a,active:u})},children:[s(cV,{children:"Product Variation"}),y(pV,{children:[y(Du,{children:[s(ju,{children:"TAG No.*"}),y(Mu,{children:[s("input",{placeholder:"C1000",value:e,onChange:v=>t(v.target.value)}),s("span",{children:"kindly a unique number"})]})]}),y(Du,{children:[s(ju,{children:"Qty*"}),s(Mu,{children:s("input",{placeholder:"2",type:"number",value:n,onChange:v=>r(v.target.value)})})]}),y(Du,{children:[s(ju,{children:"start date*"}),s(Mu,{children:s("input",{placeholder:"11/01/23",type:"date",value:i,onChange:v=>o(v.target.value)})})]}),y(Du,{children:[s(ju,{children:"End date*"}),s(Mu,{children:s("input",{placeholder:"26/09/23",type:"date",value:a,onChange:v=>l(v.target.value)})})]})]}),s(hV,{children:s(fV,{type:"submit",disabled:m.status==="loading",children:m.status==="loading"?"Loading...":"Upload"})})]})]})},cV=c.div`
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 500;
`,fV=c.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`,hV=c.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Du=c.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Mu=c.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
  }
  select {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 5px;
  }

  textarea{
    height: 300px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }

  @media (max-width: 680px){
    width: 100%;
  }
`,ju=c.div`
  font-size: 15px;
  font-weight: 500;
`,pV=c.div`
  width: 100%;
`,gV=c.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,mV=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,yV=()=>s(vV,{children:y(xV,{children:[s(bV,{children:s(Va,{fontSize:"50px",color:"green"})}),y(wV,{children:["You have successfully",s("br",{})," uploaded an item, your ",s("br",{})," product will be approved soon."]}),s($V,{to:"/seller-dashboard",children:s("button",{children:"Dashboard"})})]})}),vV=c.div`
  width: 100%;
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`,xV=c.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  margin-bottom: 50px;
`,bV=c.div``,$V=c(Bl)`
  width: 40%;
  margin-top: 15px;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,wV=c.div`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
`,SV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="delivered"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,x]=C.useState(""),v=["order_No","delivery_status"],b=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return console.log(b),y(PV,{children:[s(rt,{}),s(OV,{children:s(_V,{children:"Delivered"})}),s(CV,{children:y(NV,{children:[y(kV,{children:[s(Fo,{children:s(Ro,{children:"Order Number "})}),s(Fo,{children:s(Ro,{children:"Pending Days"})}),s(Fo,{children:s(Ro,{children:"Order Date"})}),s(Fo,{children:s(Ro,{children:"Price"})}),s(Fo,{children:s(Ro,{children:"Payment Method"})}),s(Fo,{children:s(Ro,{children:"Status "})})]}),b==null?void 0:b.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const CV=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,PV=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,OV=c.div`
width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,_V=c.div`
  border-bottom: 2px solid blue;
`,Ro=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Fo=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,kV=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,NV=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,EV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="cancelled"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,x]=C.useState(""),v=["order_No","delivery_status"],b=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(TV,{children:[s(rt,{}),s(AV,{children:s(RV,{children:"Cancelled"})}),s(IV,{children:y(DV,{children:[y(FV,{children:[s(Mo,{children:s(Do,{children:"Order Number "})}),s(Mo,{children:s(Do,{children:"Pending Days"})}),s(Mo,{children:s(Do,{children:"Order Date"})}),s(Mo,{children:s(Do,{children:"Price"})}),s(Mo,{children:s(Do,{children:"Payment Method"})}),s(Mo,{children:s(Do,{children:"Status "})})]}),b==null?void 0:b.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const IV=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,TV=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,AV=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,RV=c.div`
  border-bottom: 2px solid blue;
`,Do=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Mo=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,FV=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,DV=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,MV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="failed"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,x]=C.useState(""),v=["order_No","delivery_status"],b=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(LV,{children:[s(rt,{}),s(zV,{children:s(UV,{children:"Failed"})}),s(jV,{children:y(HV,{children:[y(BV,{children:[s(Lo,{children:s(jo,{children:"Order Number "})}),s(Lo,{children:s(jo,{children:"Pending Days"})}),s(Lo,{children:s(jo,{children:"Order Date"})}),s(Lo,{children:s(jo,{children:"Price"})}),s(Lo,{children:s(jo,{children:"Payment Method"})}),s(Lo,{children:s(jo,{children:"Status "})})]}),b==null?void 0:b.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const jV=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,LV=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,zV=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,UV=c.div`
  border-bottom: 2px solid blue;
`,jo=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Lo=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,BV=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,HV=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,WV=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(p=>{var $;return(($=p==null?void 0:p.products)==null?void 0:$.filter(S=>S.sellerID===t)).length>0}),i=r==null?void 0:r.filter(p=>p.delivery_status==="returned"),[o,a]=C.useState(0),l=6,u=o*l,d=Math.ceil((i==null?void 0:i.length)/l),f=i==null?void 0:i.slice(u,u+l),h=({selected:p})=>{a(p)},[m,x]=C.useState(""),v=["order_No","delivery_status"],b=(p=>{const g=p==null?void 0:p.filter($=>v.some(S=>{const P=$[S];return typeof P=="string"&&P.toLowerCase().includes(m)}));return m?g!=null&&g.length?g:null:p})(f);return y(VV,{children:[s(rt,{}),s(qV,{children:s(GV,{children:"Returned"})}),s(YV,{children:y(KV,{children:[y(QV,{children:[s(Uo,{children:s(zo,{children:"Order Number "})}),s(Uo,{children:s(zo,{children:"Pending Days"})}),s(Uo,{children:s(zo,{children:"Order Date"})}),s(Uo,{children:s(zo,{children:"Price"})}),s(Uo,{children:s(zo,{children:"Payment Method"})}),s(Uo,{children:s(zo,{children:"Status "})})]}),b==null?void 0:b.map((p,g)=>{var $;return s(Fr,{index:g,delivery_status:p.delivery_status,order_No:p.order_No,created:te(p.createdAt).format("D MMM YYYY"),payment_method:p.payment_method,pending_days:p.pending_days,amount:($=p.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0)},g)})]})}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:d,onPageChange:h,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const YV=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,VV=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,qV=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,GV=c.div`
  border-bottom: 2px solid blue;
`,zo=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,Uo=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,QV=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,KV=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  overflow-x: auto;
`,ZV=()=>{const[e,t]=C.useState(),[n,r]=C.useState(),[i,o]=C.useState(),[a,l]=C.useState(""),[u,d]=C.useState(""),[f,h]=C.useState(""),[m,x]=C.useState(""),[v,w]=C.useState(""),[b,p]=C.useState(""),[g,$]=C.useState(""),[S,P]=C.useState(""),[N,T]=C.useState(),[R,W]=C.useState(!1),[L,se]=C.useState("clothing"),M=nt(),j=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);t(U),l(k)},X=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);r(U),d(k)},F=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);o(U),h(k)},ee=$t({mutationFn:lD,onSuccess:()=>{M("/seller-dashboard/variation")},onError:_=>{alert(_.message)}}),re=JSON.parse(localStorage.getItem("user"));return console.log(m.length),y(iq,{children:[s(rt,{}),y(rq,{onSubmit:_=>{_.preventDefault();const k=re._id;(m.length==0||b.length==0||g.length==0||v.length==0||S.length==0||!N||a.length==0||u.length==0)&&(W(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",m),U.append("type",b),U.append("gender",g),U.append("brand",v),U.append("description",S),U.append("price",N),U.append("category",L),a&&U.append("avatar",a),u&&U.append("avatar",u),f&&U.append("avatar",f),ee.mutate({id:k,formData:U})},children:[y(nq,{children:[s("span",{children:"Upload Product Image *"}),y(tq,{children:[y(j0,{style:R?{border:"1px solid red"}:null,children:[a?null:s(D0,{fontSize:"25px"}),s(F0,{type:"file",onChange:j}),a?s(M0,{src:e}):null]}),y(j0,{style:R?{border:"1px solid red"}:null,children:[u?null:s(D0,{fontSize:"25px"}),s(F0,{type:"file",onChange:X}),u?s(M0,{src:n}):null]}),y(j0,{children:[f?null:s(D0,{fontSize:"25px"}),s(F0,{type:"file",onChange:F}),f?s(M0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(eq,{children:[y(Bo,{children:[s(Wo,{children:"Name*"}),y(Ho,{children:[s("input",{placeholder:"name",value:m,onChange:_=>x(_.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(Bo,{children:[s(Wo,{children:"Brand*"}),y(Ho,{children:[s("input",{placeholder:"brand",value:v,onChange:_=>w(_.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(Bo,{children:[s(Wo,{children:"Type*"}),y(Ho,{children:[s("input",{placeholder:"type",value:b,onChange:_=>p(_.target.value)}),s("span",{children:"kindly specify type of product"})]})]}),y(Bo,{children:[s(Wo,{children:"Gender*"}),y(Ho,{children:[y("select",{placeholder:"Select condition",value:g,onChange:_=>$(_.target.value),children:[s("option",{children:"Select Gender"}),s("option",{children:"Male"}),s("option",{children:"Female"})]}),s("span",{children:"kindly specify gender of product"})]})]}),y(Bo,{children:[s(Wo,{children:"Price*"}),y(Ho,{children:[s("input",{placeholder:"Price",type:"number",value:N,onChange:_=>T(_.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(Bo,{children:[s(Wo,{children:"Description*"}),y(Ho,{children:[s("textarea",{placeholder:"description",value:S,onChange:_=>P(_.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(XV,{children:s(JV,{type:"submit",disabled:ee.status==="loading",children:ee.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},F0=c.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,D0=c(Ef)`
  font-size: 25px;
  position: absolute;
`,M0=c.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,JV=c.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`,XV=c.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Bo=c.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Ho=c.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
  }
  select {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 5px;
  }

  textarea{
    height: 300px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }

  @media (max-width: 680px){
    width: 100%;
  }
`,Wo=c.div`
  font-size: 15px;
  font-weight: 500;
`,eq=c.div`
  width: 100%;
`,tq=c.div`
  display: flex;
  padding: 10px 0;
`,j0=c.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  @media (max-width: 450px){
    height: 100px;
  }
`,nq=c.div`
  width: 97%;
  border-top: 1.7px solid grey;
  padding: 10px 0;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  div {
    font-size: 15px;
    font-weight: lighter;
  }
`,rq=c.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,iq=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,oq=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[f,h]=C.useState(""),[m,x]=C.useState(""),[v,w]=C.useState(""),[b,p]=C.useState(""),[g,$]=C.useState(""),[S,P]=C.useState(""),[N,T]=C.useState(),[R,W]=C.useState("electronics"),[L,se]=C.useState(!1),M=nt(),j=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);t(U),l(k)},X=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);r(U),d(k)},F=_=>{const k=_.target.files[0],U=URL.createObjectURL(k);o(U),h(k)},ee=$t({mutationFn:uD,onSuccess:()=>{M("/seller-dashboard/variation")},onError:_=>{alert(_.message)}}),re=JSON.parse(localStorage.getItem("user"));return y(fq,{children:[s(rt,{}),y(cq,{onSubmit:_=>{_.preventDefault();const k=re._id;(m.length==0||b.length==0||g.length==0||v.length==0||S.length==0||!N||a.length==0||u.length==0)&&(se(!0),alert("All inputs most be filed "));const U=new FormData;U.append("name",m),U.append("model",b),U.append("condition",g),U.append("brand",v),U.append("description",S),U.append("price",N),U.append("category",R),a&&U.append("avatar",a),u&&U.append("avatar",u),f&&U.append("avatar",f),ee.mutate({id:k,formData:U})},children:[y(dq,{children:[s("span",{children:"Upload Product Image *"}),y(uq,{children:[y(B0,{style:L?{border:"1px solid red"}:null,children:[a?null:s(z0,{fontSize:"25px"}),s(L0,{type:"file",onChange:j}),a?s(U0,{src:e}):null]}),y(B0,{style:L?{border:"1px solid red"}:null,children:[u?null:s(z0,{fontSize:"25px"}),s(L0,{type:"file",onChange:X}),u?s(U0,{src:n}):null]}),y(B0,{children:[f?null:s(z0,{fontSize:"25px"}),s(L0,{type:"file",onChange:F}),f?s(U0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(lq,{children:[y(Yo,{children:[s(qo,{children:"Name*"}),y(Vo,{children:[s("input",{placeholder:"name",value:m,onChange:_=>x(_.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(Yo,{children:[s(qo,{children:"Brand*"}),y(Vo,{children:[s("input",{placeholder:"brand",value:v,onChange:_=>w(_.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(Yo,{children:[s(qo,{children:"Model*"}),y(Vo,{children:[s("input",{placeholder:"type",value:b,onChange:_=>p(_.target.value)}),s("span",{children:"kindly specify type of product"})]})]}),y(Yo,{children:[s(qo,{children:"Condition*"}),y(Vo,{children:[y("select",{placeholder:"Select condition",value:g,onChange:_=>$(_.target.value),children:[s("option",{children:"Select Condition"}),s("option",{children:"New"}),s("option",{children:"Used"})]}),s("span",{children:"kindly specify condition of product"})]})]}),y(Yo,{children:[s(qo,{children:"Price*"}),y(Vo,{children:[s("input",{placeholder:"Price",type:"number",value:N,onChange:_=>T(_.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(Yo,{children:[s(qo,{children:"Description*"}),y(Vo,{children:[s("textarea",{placeholder:"description",value:S,onChange:_=>P(_.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(sq,{children:s(aq,{type:"submit",disabled:ee.status==="loading",children:ee.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},L0=c.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,z0=c(Ef)`
  font-size: 25px;
  position: absolute;
`,U0=c.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,aq=c.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`,sq=c.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Yo=c.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,Vo=c.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
  }
  select {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 5px;
  }

  textarea{
    height: 300px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }

  @media (max-width: 680px){
    width: 100%;
  }
`,qo=c.div`
  font-size: 15px;
  font-weight: 500;
`,lq=c.div`
  width: 100%;
`,uq=c.div`
  display: flex;
  padding: 10px 0;
`,B0=c.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  @media (max-width: 450px){
    height: 100px;
  }
`,dq=c.div`
  width: 97%;
  border-top: 1.7px solid grey;
  padding: 10px 0;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  div {
    font-size: 15px;
    font-weight: lighter;
  }
`,cq=c.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,fq=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,hq=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(""),[f,h]=C.useState(""),[m,x]=C.useState(""),[v,w]=C.useState(""),[b,p]=C.useState(""),[g,$]=C.useState(),[S,P]=C.useState("food"),[N,T]=C.useState(!1),R=nt(),W=F=>{const ee=F.target.files[0],re=URL.createObjectURL(ee);t(re),l(ee)},L=F=>{const ee=F.target.files[0],re=URL.createObjectURL(ee);r(re),d(ee)},se=F=>{const ee=F.target.files[0],re=URL.createObjectURL(ee);o(re),h(ee)},M=$t({mutationFn:dD,onSuccess:()=>{R("/seller-dashboard/variation")},onError:F=>{alert(F.message)}}),j=JSON.parse(localStorage.getItem("user"));return y(bq,{children:[s(rt,{}),y(xq,{onSubmit:F=>{F.preventDefault();const ee=j._id;(m.length==0||v.length==0||b.length==0||!g||a.length==0||u.length==0)&&(T(!0),alert("All inputs most be filed "));const re=new FormData;re.append("name",m),re.append("brand",v),re.append("description",b),re.append("price",g),re.append("category",S),a&&re.append("avatar",a),u&&re.append("avatar",u),f&&re.append("avatar",f),M.mutate({id:ee,formData:re})},children:[y(vq,{children:[s("span",{children:"Upload Product Image *"}),y(yq,{children:[y(V0,{style:N?{border:"1px solid red"}:null,children:[a?null:s(W0,{fontSize:"25px"}),s(H0,{type:"file",onChange:W}),a?s(Y0,{src:e}):null]}),y(V0,{style:N?{border:"1px solid red"}:null,children:[u?null:s(W0,{fontSize:"25px"}),s(H0,{type:"file",onChange:L}),u?s(Y0,{src:n}):null]}),y(V0,{children:[f?null:s(W0,{fontSize:"25px"}),s(H0,{type:"file",onChange:se}),f?s(Y0,{src:i}):null]})]}),s("div",{children:"Upload at least 2 photos"})]}),y(mq,{children:[y(Lu,{children:[s(Uu,{children:"Name*"}),y(zu,{children:[s("input",{placeholder:"name",value:m,onChange:F=>x(F.target.value)}),s("span",{children:"kindly specify name of product"})]})]}),y(Lu,{children:[s(Uu,{children:"Brand*"}),y(zu,{children:[s("input",{placeholder:"brand",value:v,onChange:F=>w(F.target.value)}),s("span",{children:"kindly specify brand of product"})]})]}),y(Lu,{children:[s(Uu,{children:"Price*"}),y(zu,{children:[s("input",{placeholder:"Price",type:"number",value:g,onChange:F=>$(F.target.value)}),s("span",{children:"kindly specify price of product"})]})]}),y(Lu,{children:[s(Uu,{children:"Description*"}),y(zu,{children:[s("textarea",{placeholder:"description",value:b,onChange:F=>p(F.target.value)}),s("span",{children:"kindly specify description of product"})]})]})]}),s(gq,{children:s(pq,{type:"submit",disabled:M.status==="loading",children:M.status==="loading"?"Loading...":"Enter Product Variation"})})]})]})},H0=c.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`,W0=c(Ef)`
  font-size: 25px;
  position: absolute;
`,Y0=c.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`,pq=c.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`,gq=c.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`,Lu=c.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`,zu=c.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
  }
  select {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 5px;
  }

  textarea{
    height: 300px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }

  @media (max-width: 680px){
    width: 100%;
  }
`,Uu=c.div`
  font-size: 15px;
  font-weight: 500;
`,mq=c.div`
  width: 100%;
`,yq=c.div`
  display: flex;
  padding: 10px 0;
`,V0=c.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  @media (max-width: 450px){
    height: 100px;
  }
`,vq=c.div`
  width: 97%;
  border-top: 1.7px solid grey;
  padding: 10px 0;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  div {
    font-size: 15px;
    font-weight: lighter;
  }
`,xq=c.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,bq=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,$q=()=>{const e=JSON.parse(localStorage.getItem("user"));Mt();const t=e._id,{data:n}=Ke({queryKey:["orders"],queryFn:nr}),r=n==null?void 0:n.filter(b=>{var g;return((g=b==null?void 0:b.products)==null?void 0:g.filter($=>$.sellerID===t)).length>0}),[i,o]=C.useState(0),a=10,l=i*a,u=Math.ceil((r==null?void 0:r.length)/a),d=r==null?void 0:r.slice(l,l+a),f=({selected:b})=>{o(b)},[h,m]=C.useState(""),x=["order_No","delivery_status"],w=(b=>{const p=b==null?void 0:b.filter(g=>x.some($=>{const S=g[$];return typeof S=="string"&&S.toLowerCase().includes(h)}));return h?p!=null&&p.length?p:null:b})(d);return y(Sq,{children:[s(rt,{}),y(wq,{children:[s(Cq,{children:s(Pq,{children:"Transactions"})}),y(_q,{children:[y(Oq,{children:[s(zi,{children:s(Li,{children:"Tag"})}),s(zi,{children:s(Li,{children:"Date"})}),s(zi,{children:s(Li,{children:"Product"})}),s(zi,{children:s(Li,{children:"Price"})}),s(zi,{children:s(Li,{children:"QTY"})}),s(zi,{children:s(Li,{children:"Amount "})}),s(zi,{children:s(Li,{children:"Action "})})]}),w==null?void 0:w.map((b,p)=>{var g,$;return s(Fr,{index:p,delivery_status:b.delivery_status,order_No:b.order_No,created:te(b.createdAt).format("D MMM YYYY"),amount:(g=b.products)==null?void 0:g.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.price*P.qty,0),quantity:($=b.products)==null?void 0:$.filter(S=>S.sellerID===e._id).reduce((S,P)=>S+P.qty,0),products:b.products},p)})]})]}),s(nn,{breakLabel:"...",previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"pagination_link",nextLinkClassName:"pagination_link",disabledClassName:"pagination_link_disable",activeClassName:"pagination_link_active",renderOnZeroPageCount:null})]})};c.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;const wq=c.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`,Sq=c.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Cq=c.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,Pq=c.div`
  border-bottom: 2px solid blue;
`,Li=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`,zi=c.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`,Oq=c.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`,_q=c.table`
  width: 78rem;
  /* padding: 0px 20px; */
  /* text-align: center; */
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`,kq=()=>s(Aq,{children:y(Tq,{children:[y(Iq,{children:[s("img",{src:"/Frame 113.png"}),s("span",{children:"Manel"})]}),y(Nq,{children:[s(Eq,{children:"Account Info"}),y(G0,{children:[y("span",{children:[" ",s(Bj,{fontSize:"18px"})]}),s(q0,{children:"Manel"})]}),y(G0,{children:[y("span",{children:[" ",s(Lj,{fontSize:"18px"})]}),s(q0,{children:"Manel@test.com"})]}),y(G0,{children:[y("span",{children:[" ",s(Uj,{fontSize:"18px"})]}),s(q0,{children:"09012075964"})]})]})]})}),q0=c.div`
  cursor: pointer;
  margin-bottom: 8px;
`,G0=c.div`
  /* width: 200px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 13px;
  span {
    margin-right: 7px;
    padding: 5px 0;
  }
  /* background-color: red; */
`,Nq=c.div`
  font-weight: 500;
  font-size: 14px;
  margin-left: 18px;
`,Eq=c.div`
  padding: 7px 0;
`,Iq=c.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  width: 100px;
  padding: 20px 0;

  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
  }
`,Tq=c.div`
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,Aq=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Rq=()=>s(Mq,{children:y(Dq,{children:[s(Fq,{children:"Settings"}),s(kq,{})]})}),Fq=c.div`
  font-size: 15px;
  font-weight: 700;
  padding: 8px 0;
`,Dq=c.div`
  width: 95%;
`,Mq=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,jq=()=>{const[e,t]=C.useState();return s(Uq,{children:y(Wq,{children:[s(Hq,{children:s(Bq,{children:" Personal Details"})}),y(Yq,{children:[s(Lq,{children:y(Z0,{children:[s(K0,{children:"First Name"}),s(Q0,{children:s(Q3,{placeholder:"First Name"})})]})}),y(zq,{children:[y(Z0,{children:[s(K0,{children:"Last Name"}),s(Q0,{children:s(Q3,{placeholder:"Last Name"})})]}),y(Z0,{children:[s(K0,{children:"Country"}),s(Q0,{children:s(vm,{className:"phone",defaultCountry:"NG",placeholder:"Country",value:e,onChange:t})})]})]})]})]})})},Lq=c.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,zq=c.div`
  flex-direction: column;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Uq=c.div`
  /* background-color: #1e1b1b; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
`,Bq=c.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  /* margin-bottom: 20px; */
  /* border-bottom: 1.9px solid grey; */
  padding: 0 24px;
`,Hq=c.div`
  width: 100%;
  border-bottom: 1.9px solid grey;
  padding: 4px 0;
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: flex-start;
`,Wq=c.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  flex-wrap: wrap;
`;c.button`
    width: 360px;
    height: 50px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;
`;c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`;c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;const Q0=c.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    .PhoneInputInput {
    width: 300px;
    height: 30px;
    outline: none;
    border: 0px;
  }
`,Q3=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,K0=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Z0=c.div`
    margin-bottom: 10px;
`,Yq=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Vq=()=>(C.useState(),s(Qq,{children:y(Jq,{children:[s(Zq,{children:s(Kq,{children:" Change Password"})}),y(eG,{children:[y(qq,{children:[y(tp,{children:[s(ep,{children:"Current Password"}),s(J0,{children:s(X0,{placeholder:"Current Password"})})]}),y(tp,{children:[s(ep,{children:"New Password"}),s(J0,{children:s(X0,{placeholder:"New Password"})})]})]}),y(Gq,{children:[y(tp,{children:[s(ep,{children:"Confirm New Password"}),s(J0,{children:s(X0,{placeholder:"Confirm New Password"})})]}),s(Xq,{children:"Save Password"})]})]})]})})),qq=c.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Gq=c.div`
  flex-direction: column;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Qq=c.div`
  /* background-color: #1e1b1b; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
`,Kq=c.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  /* margin-bottom: 20px; */
  /* border-bottom: 1.9px solid grey; */
  padding: 0 24px;
`,Zq=c.div`
  width: 100%;
  border-bottom: 1.9px solid grey;
  padding: 4px 0;
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: flex-start;
`,Jq=c.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  flex-wrap: wrap;
`,Xq=c.button`
    width: 360px;
    height: 50px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;
`;c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`;c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;const J0=c.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    .PhoneInputInput {
    width: 300px;
    height: 30px;
    outline: none;
    border: 0px;
  }
`,X0=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,ep=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,tp=c.div`
    margin-bottom: 10px;
`,eG=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,tG=()=>s("div",{children:y(nG,{children:[s(rt,{}),s(Rq,{}),s(jq,{}),s(Vq,{})]})}),nG=c.div`
  width: 100%;
  /* background-color: gold; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,rG=()=>cm([{path:"/",children:[{index:!0,element:s(Ve,{children:s(_z,{})})},{path:"all-product",element:s(Ve,{children:s(zW,{})})},{path:"live-product",element:s(Ve,{children:s(GW,{})})},{path:"sold-product",element:s(Ve,{children:s(nY,{})})},{path:"rejected-product",element:s(Ve,{children:s(dY,{})})},{path:"all-orders",element:s(Ve,{children:s($Y,{})})},{path:"pending-orders",element:s(Ve,{children:s(kY,{})})},{path:"ready-to-ship",element:s(Ve,{children:s(FY,{})})},{path:"transactions",element:s(Ve,{children:s($q,{})})},{path:"shipped",element:s(Ve,{children:s(BY,{})})},{path:"uploads",element:s(Ve,{children:s(XY,{})})},{path:"uploading",element:s(Ve,{children:s(nV,{})})},{path:"upload-cloths",element:s(Ve,{children:s(ZV,{})})},{path:"upload-electronics",element:s(Ve,{children:s(oq,{})})},{path:"upload-foods",element:s(Ve,{children:s(hq,{})})},{path:"variation",element:s(Ve,{children:s(dV,{})})},{path:"success",element:s(Ve,{children:s(yV,{})})},{path:"delivered-orders",element:s(Ve,{children:s(SV,{})})},{path:"cancelled-orders",element:s(Ve,{children:s(EV,{})})},{path:"failed-orders",element:s(Ve,{children:s(MV,{})})},{path:"returned-orders",element:s(Ve,{children:s(WV,{})})},{path:"settings",element:s(Ve,{children:s(tG,{})})}]}]),iG=()=>{C.useState(!1),C.useState(!1);const[e,t]=C.useState(!1);return JSON.parse(localStorage.getItem("user")),C.useRef(),console.log(e),s("div",{children:s(oG,{children:y(aG,{children:[y(sG,{children:[s("img",{src:"/logo 1.png"}),s("div",{children:"Cross Africa"})]}),s(lG,{to:"/seller-dashboard",children:"Dashboard"})]})})})},oG=c.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;
`,aG=c.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,sG=c.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  flex: 0.2 0.3 auto;
  /* background: gold; */
  /* margin-bottom: 10px; */

  img {
    height: 60px;
    width: 60px;
  }

  div {
    font-weight: 700;
    font-size: 20px;
  }
`,lG=c(be)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: black;
`,uG=()=>y("div",{children:[s(iG,{}),s(rG,{})]}),dG=()=>{var x,v,w,b,p,g;const[e,t]=C.useState(),[n,r]=C.useState(!0),i=n!==!0,o=nt(),a=Yl({firstName:Ot().required("This field cannot be empty"),lastName:Ot().required("This field cannot be empty"),email:Ot().email("this is not a valid email").required("This field cannot be empty"),phoneNum:Em().required("This field cannot be empty"),password:Ot().required("This field cannot be empty"),isAdmin:e5(),confirmPassword:Ot().oneOf([Xw("password"),null],"Password must match")}).required(),{handleSubmit:l,formState:{errors:u},reset:d,register:f}=gf({resolver:mf(a)}),h=$t({mutationKey:["createUser"],mutationFn:dI,onSuccess:$=>{console.log($),o("/login-user")},onError:$=>{alert($.message)}}),m=l($=>{$.isAdmin=!1,h.mutate($)});return s("div",{children:s(yG,{children:y(mG,{children:[s(gG,{children:"Create Account"}),s(pG,{children:"Please enter every necessary information"}),y(hG,{onSubmit:m,children:[y(Zo,{children:[s(Ko,{children:"First Name"}),s(Qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(_s,{placeholder:"First Name",...f("firstName")})}),s(Go,{children:(u==null?void 0:u.firstName)&&((x=u==null?void 0:u.firstName)==null?void 0:x.message)})]}),y(Zo,{children:[s(Ko,{children:"Last Name"}),s(Qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(_s,{placeholder:"Last Name",...f("lastName")})}),s(Go,{children:(u==null?void 0:u.lastName)&&((v=u==null?void 0:u.lastName)==null?void 0:v.message)})]}),y(Zo,{children:[s(Ko,{children:"Email Address"}),s(Qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(_s,{placeholder:"Email Address",...f("email")})}),s(Go,{children:(u==null?void 0:u.email)&&((w=u==null?void 0:u.email)==null?void 0:w.message)})]}),y(Zo,{children:[s(Ko,{children:"Phone Number"}),s(Qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:s(vm,{className:"phone",defaultCountry:"NG",...f("phoneNum"),placeholder:"Phone Number",value:e,onChange:t})}),s(Go,{children:(u==null?void 0:u.phoneNum)&&((b=u==null?void 0:u.phoneNum)==null?void 0:b.message)})]}),y(Zo,{children:[s(Ko,{children:"Password"}),y(Qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(_s,{placeholder:"Password",type:n?"password":"text",id:"pass",...f("password")}),s(K3,{onClick:()=>{r(i)},children:n===!1?s(La,{}):s(ja,{})})]}),s(Go,{children:(u==null?void 0:u.password)&&((p=u==null?void 0:u.password)==null?void 0:p.message)})]}),y(Zo,{children:[s(Ko,{children:"Confirm Password"}),y(Qo,{style:{border:`${u!=null&&u.firstName?"1px solid red":"1px solid lightgray"}`},children:[s(_s,{placeholder:"Confirm Password",type:n?"password":"text",id:"pass",...f("confirmPassword")}),s(K3,{onClick:()=>{r(i)},children:n===!1?s(La,{}):s(ja,{})})]}),s(Go,{children:(u==null?void 0:u.confirmPassword)&&((g=u==null?void 0:u.confirmPassword)==null?void 0:g.message)})]}),s(fG,{type:"submit",disabled:h.status==="loading",children:h.status==="loading"?"Loading...":"Continue"}),y(cG,{children:["Already have an account?"," ",s(be,{to:"/login-user",style:{textDecoration:"none"},children:s("span",{children:"LogIn"})})]})]})]})})})};c.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`;const cG=c.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,fG=c.button`
    width: 360px;
    height: 40px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
        font-size: 16px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,Go=c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,K3=c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,Qo=c.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    .PhoneInputInput {
    width: 300px;
    height: 30px;
    outline: none;
    border: 0px;
  }

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,_s=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,Ko=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,Zo=c.div`
    margin-bottom: 10px;
`,hG=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,pG=c.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,gG=c.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,mG=c.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
    /* background-color: gold; */

    /* @media (max-width: 370px){
        width: 90%;
    } */
`,yG=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,vG=()=>{var h,m;const e=nt(),t=Yl({email:Ot().email("this is not a valid email").required("This field cannot be empty"),password:Ot().required("This field cannot be empty")}).required(),[n,r]=C.useState(!0),i=n!==!0,{handleSubmit:o,formState:{errors:a},reset:l,register:u}=gf({resolver:mf(t)}),d=$t({mutationKey:["Admin"],mutationFn:cI,onSuccess:x=>{e("/")},onError:x=>{console.log(x.message)}}),f=o(x=>{d.mutate(x)});return s("div",{children:s(_G,{children:y(OG,{children:[s(PG,{children:"Create Account"}),s(CG,{children:"Please enter every necessary information"}),y(SG,{onSubmit:f,children:[y(tb,{children:[s(eb,{children:"Email Address"}),s(J3,{style:{border:`${a!=null&&a.email?"1px solid red":"1px solid lightgray"}`},children:s(X3,{placeholder:"Email Address",type:"email",...u("email")})}),s(Z3,{children:(a==null?void 0:a.email)&&((h=a==null?void 0:a.email)==null?void 0:h.message)})]}),y(tb,{children:[s(eb,{children:"Password"}),y(J3,{style:{border:`${a!=null&&a.password?"1px solid red":"1px solid lightgray"}`},children:[s(X3,{placeholder:"Password",type:n?"password":"text",id:"pass",...u("password")}),s(wG,{onClick:()=>{r(i)},children:n===!1?s(La,{}):s(ja,{})})]}),s(Z3,{children:(a==null?void 0:a.password)&&((m=a==null?void 0:a.password)==null?void 0:m.message)})]}),s(xG,{children:"Forget Password?"}),s($G,{type:"submit",children:d.status==="loading"?"Loading...":"Log In"}),y(bG,{children:["Don't have an account? ",s(be,{to:"/signup-user",style:{textDecoration:"none"},children:s("span",{children:"Sign Up"})})]})]})]})})})},xG=c.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,bG=c.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`,$G=c.button`
    width: 360px;
    height: 40px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
        font-size: 16px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,Z3=c.div`
    font-size: 15px;
    font-weight: 700;
    color: #ff0000;
`,wG=c.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,J3=c.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`,X3=c.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`,eb=c.div`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
`,tb=c.div`
    margin-bottom: 10px;
`,SG=c.form`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 370px){
        width: 350px;
    }
`,CG=c.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`,PG=c.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`,OG=c.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
    /* background-color: gold; */

    /* @media (max-width: 370px){
        width: 90%;
    } */
`,_G=c.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`,kG=()=>{const e=nt(),[t,n]=C.useState(""),r=JSON.parse(localStorage.getItem("user")),i=$t({mutationFn:hI,onSuccess:()=>{e("/login-user")},onError:()=>{alert("Invalid OTP")}});return s(NG,{children:y(EG,{children:[s(IG,{children:"OTP Verification!"}),s(AG,{children:"Please enter the OTP you received"}),s(G5,{style:{border:"1px solid gold"},value:t,onChange:n,numInputs:6,renderSeparator:s("span",{children:" "}),renderInput:a=>s("input",{...a}),containerStyle:"containerStyle",inputStyle:"inputStyle",width:"70px"}),s(TG,{children:s("button",{onClick:()=>{const a=r==null?void 0:r._id;i.mutate({id:a,otp:t})},children:"Enter"})})]})})},NG=c.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`,EG=c.div`
  /* width: 280px; */
  /* height: 150px; */
  /* border: 1.8px solid #d975c0; */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;

  .just-display{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,IG=c.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`,TG=c.div`
  width: 40%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`,AG=c.div`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;c.input`
  width: 2rem;
  height: 2rem;
  border: 2px solid #d975c0;
  outline: none;
  margin: 5px;

  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  ::-webkit-outer-spin-button{
    appearance: none;
  }
  ::-webkit-inner-spin-button{
    appearance: none;
  }

`;const RG=()=>s("div",{children:y(zC,{children:[s(Hi,{path:"/*",element:s(hz,{})}),s(Hi,{path:"/signup-user",element:s(dG,{})}),s(Hi,{path:"/login-user",element:s(vG,{})}),s(Hi,{path:"/otp-user",element:s(kG,{})}),s(Hi,{path:"/seller-page",element:s(dP,{})}),s(Hi,{path:"/seller-dashboard/*",element:s(Ve,{children:s(uG,{})})})]})}),FG="modulepreload",DG=function(e){return"/"+e},nb={},MG=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=DG(o),o in nb)return;nb[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const h=i[f];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":FG,a||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),a)return new Promise((f,h)=>{d.addEventListener("load",f),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},jG=e=>{e&&e instanceof Function&&MG(()=>import("./web-vitals-60d3425a.js"),[]).then(({getCLS:t,getFID:n,getFCP:r,getLCP:i,getTTFB:o})=>{t(e),n(e),r(e),i(e),o(e)})};var my="persist:",yy="persist/FLUSH",Wf="persist/REHYDRATE",vy="persist/PAUSE",xy="persist/PERSIST",by="persist/PURGE",$y="persist/REGISTER",LG=-1;function hd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hd=function(n){return typeof n}:hd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hd(e)}function rb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function zG(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rb(n,!0).forEach(function(r){UG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rb(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function UG(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function BG(e,t,n,r){r.debug;var i=zG({},n);return e&&hd(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function HG(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:my).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(P){return P}:typeof e.serialize=="function"?l=e.serialize:l=WG;var u=e.writeFailHandler||null,d={},f={},h=[],m=null,x=null,v=function(P){Object.keys(P).forEach(function(N){p(N)&&d[N]!==P[N]&&h.indexOf(N)===-1&&h.push(N)}),Object.keys(d).forEach(function(N){P[N]===void 0&&p(N)&&h.indexOf(N)===-1&&d[N]!==void 0&&h.push(N)}),m===null&&(m=setInterval(w,i)),d=P};function w(){if(h.length===0){m&&clearInterval(m),m=null;return}var S=h.shift(),P=r.reduce(function(N,T){return T.in(N,S,d)},d[S]);if(P!==void 0)try{f[S]=l(P)}catch(N){console.error("redux-persist/createPersistoid: error serializing state",N)}else delete f[S];h.length===0&&b()}function b(){Object.keys(f).forEach(function(S){d[S]===void 0&&delete f[S]}),x=a.setItem(o,l(f)).catch(g)}function p(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function g(S){u&&u(S)}var $=function(){for(;h.length!==0;)w();return x||Promise.resolve()};return{update:v,flush:$}}function WG(e){return JSON.stringify(e)}function YG(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:my).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=VG,r.getItem(n).then(function(o){if(o)try{var a={},l=i(o);return Object.keys(l).forEach(function(u){a[u]=t.reduceRight(function(d,f){return f.out(d,u,l)},i(l[u]))}),a}catch(u){throw u}else return})}function VG(e){return JSON.parse(e)}function qG(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:my).concat(e.key);return t.removeItem(n,GG)}function GG(e){}function ib(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ur(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ib(n,!0).forEach(function(r){QG(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ib(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QG(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KG(e,t){if(e==null)return{};var n=ZG(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ZG(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var JG=5e3;function XG(e,t){var n=e.version!==void 0?e.version:LG;e.debug;var r=e.stateReconciler===void 0?BG:e.stateReconciler,i=e.getStoredState||YG,o=e.timeout!==void 0?e.timeout:JG,a=null,l=!1,u=!0,d=function(h){return h._persist.rehydrated&&a&&!u&&a.update(h),h};return function(f,h){var m=f||{},x=m._persist,v=KG(m,["_persist"]),w=v;if(h.type===xy){var b=!1,p=function(R,W){b||(h.rehydrate(e.key,R,W),b=!0)};if(o&&setTimeout(function(){!b&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),u=!1,a||(a=HG(e)),x)return ur({},t(w,h),{_persist:x});if(typeof h.rehydrate!="function"||typeof h.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return h.register(e.key),i(e).then(function(T){var R=e.migrate||function(W,L){return Promise.resolve(W)};R(T,n).then(function(W){p(W)},function(W){p(void 0,W)})},function(T){p(void 0,T)}),ur({},t(w,h),{_persist:{version:n,rehydrated:!1}})}else{if(h.type===by)return l=!0,h.result(qG(e)),ur({},t(w,h),{_persist:x});if(h.type===yy)return h.result(a&&a.flush()),ur({},t(w,h),{_persist:x});if(h.type===vy)u=!0;else if(h.type===Wf){if(l)return ur({},w,{_persist:ur({},x,{rehydrated:!0})});if(h.key===e.key){var g=t(w,h),$=h.payload,S=r!==!1&&$!==void 0?r($,f,g,e):g,P=ur({},S,{_persist:ur({},x,{rehydrated:!0})});return d(P)}}}if(!x)return t(f,h);var N=t(w,h);return N===w?f:d(ur({},N,{_persist:x}))}}function ob(e){return nQ(e)||tQ(e)||eQ()}function eQ(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function tQ(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function nQ(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function ab(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ig(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ab(n,!0).forEach(function(r){rQ(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ab(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rQ(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z9={registry:[],bootstrapped:!1},iQ=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:z9,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case $y:return ig({},t,{registry:[].concat(ob(t.registry),[n.key])});case Wf:var r=t.registry.indexOf(n.key),i=ob(t.registry);return i.splice(r,1),ig({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function oQ(e,t,n){var r=n||!1,i=Vm(iQ,z9,t&&t.enhancer?t.enhancer:void 0),o=function(d){i.dispatch({type:$y,key:d})},a=function(d,f,h){var m={type:Wf,payload:f,err:h,key:d};e.dispatch(m),i.dispatch(m),r&&l.getState().bootstrapped&&(r(),r=!1)},l=ig({},i,{purge:function(){var d=[];return e.dispatch({type:by,result:function(h){d.push(h)}}),Promise.all(d)},flush:function(){var d=[];return e.dispatch({type:yy,result:function(h){d.push(h)}}),Promise.all(d)},pause:function(){e.dispatch({type:vy})},persist:function(){e.dispatch({type:xy,register:o,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var wy={},Sy={};Sy.__esModule=!0;Sy.default=lQ;function pd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pd=function(n){return typeof n}:pd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pd(e)}function np(){}var aQ={getItem:np,setItem:np,removeItem:np};function sQ(e){if((typeof self>"u"?"undefined":pd(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function lQ(e){var t="".concat(e,"Storage");return sQ(t)?self[t]:aQ}wy.__esModule=!0;wy.default=cQ;var uQ=dQ(Sy);function dQ(e){return e&&e.__esModule?e:{default:e}}function cQ(e){var t=(0,uQ.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var U9=void 0,fQ=hQ(wy);function hQ(e){return e&&e.__esModule?e:{default:e}}var pQ=(0,fQ.default)("local");U9=pQ;const gQ={key:"root",version:1,storage:U9},mQ=XG(gQ,fF),B9=JR({reducer:{reducers:mQ},middleware:e=>e({serializableCheck:{ignoredActions:[yy,Wf,vy,xy,by,$y]}})});function gd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?gd=function(n){return typeof n}:gd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gd(e)}function yQ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sb(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vQ(e,t,n){return t&&sb(e.prototype,t),n&&sb(e,n),e}function xQ(e,t){return t&&(gd(t)==="object"||typeof t=="function")?t:md(e)}function og(e){return og=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},og(e)}function md(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bQ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ag(e,t)}function ag(e,t){return ag=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ag(e,t)}function yd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H9=function(e){bQ(t,e);function t(){var n,r;yQ(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=xQ(this,(n=og(t)).call.apply(n,[this].concat(o))),yd(md(r),"state",{bootstrapped:!1}),yd(md(r),"_unsubscribe",void 0),yd(md(r),"handlePersistorState",function(){var l=r.props.persistor,u=l.getState(),d=u.bootstrapped;d&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return vQ(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(C.PureComponent);yd(H9,"defaultProps",{children:null,loading:null});const $Q=new zT;let wQ=oQ(B9);const SQ=ip.createRoot(document.getElementById("root"));SQ.render(s(ne.StrictMode,{children:s(YC,{children:s(yR,{store:B9,children:s(H9,{persistor:wQ,children:s(eA,{client:$Q,children:s(RG,{})})})})})}));jG()});export default CQ();
