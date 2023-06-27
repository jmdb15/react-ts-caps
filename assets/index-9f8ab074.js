function Cm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Rm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bd={exports:{}},Bo={},Fd={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),Pm=Symbol.for("react.portal"),Nm=Symbol.for("react.fragment"),Am=Symbol.for("react.strict_mode"),Om=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),xm=Symbol.for("react.forward_ref"),Mm=Symbol.for("react.suspense"),Um=Symbol.for("react.memo"),bm=Symbol.for("react.lazy"),Lu=Symbol.iterator;function Fm(t){return t===null||typeof t!="object"?null:(t=Lu&&t[Lu]||t["@@iterator"],typeof t=="function"?t:null)}var $d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zd=Object.assign,jd={};function tr(t,e,n){this.props=t,this.context=e,this.refs=jd,this.updater=n||$d}tr.prototype.isReactComponent={};tr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};tr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bd(){}Bd.prototype=tr.prototype;function ml(t,e,n){this.props=t,this.context=e,this.refs=jd,this.updater=n||$d}var vl=ml.prototype=new Bd;vl.constructor=ml;zd(vl,tr.prototype);vl.isPureReactComponent=!0;var Du=Array.isArray,Vd=Object.prototype.hasOwnProperty,gl={current:null},Hd={key:!0,ref:!0,__self:!0,__source:!0};function Wd(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Vd.call(e,r)&&!Hd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ai,type:t,key:o,ref:s,props:i,_owner:gl.current}}function $m(t,e){return{$$typeof:ai,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yl(t){return typeof t=="object"&&t!==null&&t.$$typeof===ai}function zm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xu=/\/+/g;function vs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zm(""+t.key):e.toString(36)}function zi(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ai:case Pm:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+vs(s,0):r,Du(i)?(n="",t!=null&&(n=t.replace(xu,"$&/")+"/"),zi(i,e,n,"",function(u){return u})):i!=null&&(yl(i)&&(i=$m(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(xu,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Du(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+vs(o,a);s+=zi(o,e,n,l,i)}else if(l=Fm(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+vs(o,a++),s+=zi(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ei(t,e,n){if(t==null)return t;var r=[],i=0;return zi(t,r,"","",function(o){return e.call(n,o,i++)}),r}function jm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ye={current:null},ji={transition:null},Bm={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:ji,ReactCurrentOwner:gl};F.Children={map:Ei,forEach:function(t,e,n){Ei(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ei(t,function(){e++}),e},toArray:function(t){return Ei(t,function(e){return e})||[]},only:function(t){if(!yl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=tr;F.Fragment=Nm;F.Profiler=Om;F.PureComponent=ml;F.StrictMode=Am;F.Suspense=Mm;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bm;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zd({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=gl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Vd.call(e,l)&&!Hd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ai,type:t.type,key:i,ref:o,props:r,_owner:s}};F.createContext=function(t){return t={$$typeof:Dm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lm,_context:t},t.Consumer=t};F.createElement=Wd;F.createFactory=function(t){var e=Wd.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:xm,render:t}};F.isValidElement=yl;F.lazy=function(t){return{$$typeof:bm,_payload:{_status:-1,_result:t},_init:jm}};F.memo=function(t,e){return{$$typeof:Um,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=ji.transition;ji.transition={};try{t()}finally{ji.transition=e}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(t,e){return ye.current.useCallback(t,e)};F.useContext=function(t){return ye.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return ye.current.useDeferredValue(t)};F.useEffect=function(t,e){return ye.current.useEffect(t,e)};F.useId=function(){return ye.current.useId()};F.useImperativeHandle=function(t,e,n){return ye.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return ye.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return ye.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return ye.current.useMemo(t,e)};F.useReducer=function(t,e,n){return ye.current.useReducer(t,e,n)};F.useRef=function(t){return ye.current.useRef(t)};F.useState=function(t){return ye.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return ye.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return ye.current.useTransition()};F.version="18.2.0";Fd.exports=F;var S=Fd.exports;const Kd=Rm(S),Vm=Cm({__proto__:null,default:Kd},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm=S,Wm=Symbol.for("react.element"),Km=Symbol.for("react.fragment"),Gm=Object.prototype.hasOwnProperty,qm=Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jm={key:!0,ref:!0,__self:!0,__source:!0};function Gd(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Gm.call(e,r)&&!Jm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Wm,type:t,key:o,ref:s,props:i,_owner:qm.current}}Bo.Fragment=Km;Bo.jsx=Gd;Bo.jsxs=Gd;bd.exports=Bo;var O=bd.exports,ra={},qd={exports:{}},Ne={},Jd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,x){var U=P.length;P.push(x);e:for(;0<U;){var ee=U-1>>>1,se=P[ee];if(0<i(se,x))P[ee]=x,P[U]=se,U=ee;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var x=P[0],U=P.pop();if(U!==x){P[0]=U;e:for(var ee=0,se=P.length,wi=se>>>1;ee<wi;){var tn=2*(ee+1)-1,ms=P[tn],nn=tn+1,Ii=P[nn];if(0>i(ms,U))nn<se&&0>i(Ii,ms)?(P[ee]=Ii,P[nn]=U,ee=nn):(P[ee]=ms,P[tn]=U,ee=tn);else if(nn<se&&0>i(Ii,U))P[ee]=Ii,P[nn]=U,ee=nn;else break e}}return x}function i(P,x){var U=P.sortIndex-x.sortIndex;return U!==0?U:P.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,m=3,v=!1,_=!1,g=!1,T=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=P)r(u),x.sortIndex=x.expirationTime,e(l,x);else break;x=n(u)}}function y(P){if(g=!1,p(P),!_)if(n(l)!==null)_=!0,hs(k);else{var x=n(u);x!==null&&ps(y,x.startTime-P)}}function k(P,x){_=!1,g&&(g=!1,h(A),A=-1),v=!0;var U=m;try{for(p(x),f=n(l);f!==null&&(!(f.expirationTime>x)||P&&!ze());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,m=f.priorityLevel;var se=ee(f.expirationTime<=x);x=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(l)&&r(l),p(x)}else r(l);f=n(l)}if(f!==null)var wi=!0;else{var tn=n(u);tn!==null&&ps(y,tn.startTime-x),wi=!1}return wi}finally{f=null,m=U,v=!1}}var R=!1,N=null,A=-1,z=5,M=-1;function ze(){return!(t.unstable_now()-M<z)}function cr(){if(N!==null){var P=t.unstable_now();M=P;var x=!0;try{x=N(!0,P)}finally{x?dr():(R=!1,N=null)}}else R=!1}var dr;if(typeof d=="function")dr=function(){d(cr)};else if(typeof MessageChannel<"u"){var Ou=new MessageChannel,Tm=Ou.port2;Ou.port1.onmessage=cr,dr=function(){Tm.postMessage(null)}}else dr=function(){T(cr,0)};function hs(P){N=P,R||(R=!0,dr())}function ps(P,x){A=T(function(){P(t.unstable_now())},x)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,hs(k))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(m){case 1:case 2:case 3:var x=3;break;default:x=m}var U=m;m=x;try{return P()}finally{m=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,x){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=m;m=P;try{return x()}finally{m=U}},t.unstable_scheduleCallback=function(P,x,U){var ee=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ee+U:ee):U=ee,P){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=U+se,P={id:c++,callback:x,priorityLevel:P,startTime:U,expirationTime:se,sortIndex:-1},U>ee?(P.sortIndex=U,e(u,P),n(l)===null&&P===n(u)&&(g?(h(A),A=-1):g=!0,ps(y,U-ee))):(P.sortIndex=se,e(l,P),_||v||(_=!0,hs(k))),P},t.unstable_shouldYield=ze,t.unstable_wrapCallback=function(P){var x=m;return function(){var U=m;m=x;try{return P.apply(this,arguments)}finally{m=U}}}})(Qd);Jd.exports=Qd;var Qm=Jd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=S,Pe=Qm;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xd=new Set,Fr={};function wn(t,e){Kn(t,e),Kn(t+"Capture",e)}function Kn(t,e){for(Fr[t]=e,t=0;t<e.length;t++)Xd.add(e[t])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ia=Object.prototype.hasOwnProperty,Ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mu={},Uu={};function Xm(t){return ia.call(Uu,t)?!0:ia.call(Mu,t)?!1:Ym.test(t)?Uu[t]=!0:(Mu[t]=!0,!1)}function Zm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ev(t,e,n,r){if(e===null||typeof e>"u"||Zm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _e(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){de[t]=new _e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];de[e]=new _e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){de[t]=new _e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){de[t]=new _e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){de[t]=new _e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){de[t]=new _e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){de[t]=new _e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){de[t]=new _e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){de[t]=new _e(t,5,!1,t.toLowerCase(),null,!1,!1)});var _l=/[\-:]([a-z])/g;function wl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_l,wl);de[e]=new _e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_l,wl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_l,wl);de[e]=new _e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!1,!1)});de.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){de[t]=new _e(t,1,!1,t.toLowerCase(),null,!0,!0)});function Il(t,e,n,r){var i=de.hasOwnProperty(e)?de[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ev(e,n,i,r)&&(n=null),r||i===null?Xm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var yt=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ki=Symbol.for("react.element"),Cn=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),El=Symbol.for("react.strict_mode"),oa=Symbol.for("react.profiler"),Zd=Symbol.for("react.provider"),ef=Symbol.for("react.context"),kl=Symbol.for("react.forward_ref"),sa=Symbol.for("react.suspense"),aa=Symbol.for("react.suspense_list"),Sl=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),tf=Symbol.for("react.offscreen"),bu=Symbol.iterator;function fr(t){return t===null||typeof t!="object"?null:(t=bu&&t[bu]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,gs;function wr(t){if(gs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gs=e&&e[1]||""}return`
`+gs+t}var ys=!1;function _s(t,e){if(!t||ys)return"";ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{ys=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wr(t):""}function tv(t){switch(t.tag){case 5:return wr(t.type);case 16:return wr("Lazy");case 13:return wr("Suspense");case 19:return wr("SuspenseList");case 0:case 2:case 15:return t=_s(t.type,!1),t;case 11:return t=_s(t.type.render,!1),t;case 1:return t=_s(t.type,!0),t;default:return""}}function la(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rn:return"Fragment";case Cn:return"Portal";case oa:return"Profiler";case El:return"StrictMode";case sa:return"Suspense";case aa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ef:return(t.displayName||"Context")+".Consumer";case Zd:return(t._context.displayName||"Context")+".Provider";case kl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sl:return e=t.displayName||null,e!==null?e:la(t.type)||"Memo";case Et:e=t._payload,t=t._init;try{return la(t(e))}catch{}}return null}function nv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return la(e);case 8:return e===El?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rv(t){var e=nf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Si(t){t._valueTracker||(t._valueTracker=rv(t))}function rf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=nf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ao(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ua(t,e){var n=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fu(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function of(t,e){e=e.checked,e!=null&&Il(t,"checked",e,!1)}function ca(t,e){of(t,e);var n=Wt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?da(t,e.type,n):e.hasOwnProperty("defaultValue")&&da(t,e.type,Wt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $u(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function da(t,e,n){(e!=="number"||ao(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ir=Array.isArray;function Fn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zu(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Ir(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wt(n)}}function sf(t,e){var n=Wt(e.value),r=Wt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ju(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function af(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ha(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?af(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ti,lf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ti=Ti||document.createElement("div"),Ti.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ti.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $r(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iv=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(t){iv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rr[e]=Rr[t]})});function uf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rr.hasOwnProperty(t)&&Rr[t]?(""+e).trim():e+"px"}function cf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ov=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(t,e){if(e){if(ov[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function ma(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function Tl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ga=null,$n=null,zn=null;function Bu(t){if(t=ci(t)){if(typeof ga!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Go(e),ga(t.stateNode,t.type,e))}}function df(t){$n?zn?zn.push(t):zn=[t]:$n=t}function ff(){if($n){var t=$n,e=zn;if(zn=$n=null,Bu(t),e)for(t=0;t<e.length;t++)Bu(e[t])}}function hf(t,e){return t(e)}function pf(){}var ws=!1;function mf(t,e,n){if(ws)return t(e,n);ws=!0;try{return hf(t,e,n)}finally{ws=!1,($n!==null||zn!==null)&&(pf(),ff())}}function zr(t,e){var n=t.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var ya=!1;if(ft)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){ya=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{ya=!1}function sv(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Pr=!1,lo=null,uo=!1,_a=null,av={onError:function(t){Pr=!0,lo=t}};function lv(t,e,n,r,i,o,s,a,l){Pr=!1,lo=null,sv.apply(av,arguments)}function uv(t,e,n,r,i,o,s,a,l){if(lv.apply(this,arguments),Pr){if(Pr){var u=lo;Pr=!1,lo=null}else throw Error(w(198));uo||(uo=!0,_a=u)}}function In(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vu(t){if(In(t)!==t)throw Error(w(188))}function cv(t){var e=t.alternate;if(!e){if(e=In(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Vu(i),t;if(o===r)return Vu(i),e;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function gf(t){return t=cv(t),t!==null?yf(t):null}function yf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yf(t);if(e!==null)return e;t=t.sibling}return null}var _f=Pe.unstable_scheduleCallback,Hu=Pe.unstable_cancelCallback,dv=Pe.unstable_shouldYield,fv=Pe.unstable_requestPaint,te=Pe.unstable_now,hv=Pe.unstable_getCurrentPriorityLevel,Cl=Pe.unstable_ImmediatePriority,wf=Pe.unstable_UserBlockingPriority,co=Pe.unstable_NormalPriority,pv=Pe.unstable_LowPriority,If=Pe.unstable_IdlePriority,Vo=null,Xe=null;function mv(t){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Vo,t,void 0,(t.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:yv,vv=Math.log,gv=Math.LN2;function yv(t){return t>>>=0,t===0?32:31-(vv(t)/gv|0)|0}var Ci=64,Ri=4194304;function Er(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Er(a):(o&=s,o!==0&&(r=Er(o)))}else s=n&~i,s!==0?r=Er(s):o!==0&&(r=Er(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-We(e),i=1<<n,r|=t[n],e&=~i;return r}function _v(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-We(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=_v(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function wa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ef(){var t=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),t}function Is(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function li(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-We(e),t[e]=n}function Iv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-We(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Rl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-We(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function kf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sf,Pl,Tf,Cf,Rf,Ia=!1,Pi=[],Dt=null,xt=null,Mt=null,jr=new Map,Br=new Map,St=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wu(t,e){switch(t){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":jr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(e.pointerId)}}function pr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=ci(e),e!==null&&Pl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kv(t,e,n,r,i){switch(e){case"focusin":return Dt=pr(Dt,t,e,n,r,i),!0;case"dragenter":return xt=pr(xt,t,e,n,r,i),!0;case"mouseover":return Mt=pr(Mt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return jr.set(o,pr(jr.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Br.set(o,pr(Br.get(o)||null,t,e,n,r,i)),!0}return!1}function Pf(t){var e=an(t.target);if(e!==null){var n=In(e);if(n!==null){if(e=n.tag,e===13){if(e=vf(n),e!==null){t.blockedOn=e,Rf(t.priority,function(){Tf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ea(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);va=r,n.target.dispatchEvent(r),va=null}else return e=ci(n),e!==null&&Pl(e),t.blockedOn=n,!1;e.shift()}return!0}function Ku(t,e,n){Bi(t)&&n.delete(e)}function Sv(){Ia=!1,Dt!==null&&Bi(Dt)&&(Dt=null),xt!==null&&Bi(xt)&&(xt=null),Mt!==null&&Bi(Mt)&&(Mt=null),jr.forEach(Ku),Br.forEach(Ku)}function mr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ia||(Ia=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Sv)))}function Vr(t){function e(i){return mr(i,t)}if(0<Pi.length){mr(Pi[0],t);for(var n=1;n<Pi.length;n++){var r=Pi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dt!==null&&mr(Dt,t),xt!==null&&mr(xt,t),Mt!==null&&mr(Mt,t),jr.forEach(e),Br.forEach(e),n=0;n<St.length;n++)r=St[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)Pf(n),n.blockedOn===null&&St.shift()}var jn=yt.ReactCurrentBatchConfig,ho=!0;function Tv(t,e,n,r){var i=B,o=jn.transition;jn.transition=null;try{B=1,Nl(t,e,n,r)}finally{B=i,jn.transition=o}}function Cv(t,e,n,r){var i=B,o=jn.transition;jn.transition=null;try{B=4,Nl(t,e,n,r)}finally{B=i,jn.transition=o}}function Nl(t,e,n,r){if(ho){var i=Ea(t,e,n,r);if(i===null)Os(t,e,r,po,n),Wu(t,r);else if(kv(i,t,e,n,r))r.stopPropagation();else if(Wu(t,r),e&4&&-1<Ev.indexOf(t)){for(;i!==null;){var o=ci(i);if(o!==null&&Sf(o),o=Ea(t,e,n,r),o===null&&Os(t,e,r,po,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Os(t,e,r,null,n)}}var po=null;function Ea(t,e,n,r){if(po=null,t=Tl(r),t=an(t),t!==null)if(e=In(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return po=t,null}function Nf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hv()){case Cl:return 1;case wf:return 4;case co:case pv:return 16;case If:return 536870912;default:return 16}default:return 16}}var Nt=null,Al=null,Vi=null;function Af(){if(Vi)return Vi;var t,e=Al,n=e.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Vi=i.slice(t,1<r?1-r:void 0)}function Hi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ni(){return!0}function Gu(){return!1}function Ae(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ni:Gu,this.isPropagationStopped=Gu,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),e}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Ae(nr),ui=X({},nr,{view:0,detail:0}),Rv=Ae(ui),Es,ks,vr,Ho=X({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vr&&(vr&&t.type==="mousemove"?(Es=t.screenX-vr.screenX,ks=t.screenY-vr.screenY):ks=Es=0,vr=t),Es)},movementY:function(t){return"movementY"in t?t.movementY:ks}}),qu=Ae(Ho),Pv=X({},Ho,{dataTransfer:0}),Nv=Ae(Pv),Av=X({},ui,{relatedTarget:0}),Ss=Ae(Av),Ov=X({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lv=Ae(Ov),Dv=X({},nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xv=Ae(Dv),Mv=X({},nr,{data:0}),Ju=Ae(Mv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fv[t])?!!e[t]:!1}function Ll(){return $v}var zv=X({},ui,{key:function(t){if(t.key){var e=Uv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(t){return t.type==="keypress"?Hi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jv=Ae(zv),Bv=X({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qu=Ae(Bv),Vv=X({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),Hv=Ae(Vv),Wv=X({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Ae(Wv),Gv=X({},Ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=Ae(Gv),Jv=[9,13,27,32],Dl=ft&&"CompositionEvent"in window,Nr=null;ft&&"documentMode"in document&&(Nr=document.documentMode);var Qv=ft&&"TextEvent"in window&&!Nr,Of=ft&&(!Dl||Nr&&8<Nr&&11>=Nr),Yu=String.fromCharCode(32),Xu=!1;function Lf(t,e){switch(t){case"keyup":return Jv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pn=!1;function Yv(t,e){switch(t){case"compositionend":return Df(e);case"keypress":return e.which!==32?null:(Xu=!0,Yu);case"textInput":return t=e.data,t===Yu&&Xu?null:t;default:return null}}function Xv(t,e){if(Pn)return t==="compositionend"||!Dl&&Lf(t,e)?(t=Af(),Vi=Al=Nt=null,Pn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Of&&e.locale!=="ko"?null:e.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zv[t.type]:e==="textarea"}function xf(t,e,n,r){df(r),e=mo(e,"onChange"),0<e.length&&(n=new Ol("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ar=null,Hr=null;function eg(t){Wf(t,0)}function Wo(t){var e=On(t);if(rf(e))return t}function tg(t,e){if(t==="change")return e}var Mf=!1;if(ft){var Ts;if(ft){var Cs="oninput"in document;if(!Cs){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),Cs=typeof ec.oninput=="function"}Ts=Cs}else Ts=!1;Mf=Ts&&(!document.documentMode||9<document.documentMode)}function tc(){Ar&&(Ar.detachEvent("onpropertychange",Uf),Hr=Ar=null)}function Uf(t){if(t.propertyName==="value"&&Wo(Hr)){var e=[];xf(e,Hr,t,Tl(t)),mf(eg,e)}}function ng(t,e,n){t==="focusin"?(tc(),Ar=e,Hr=n,Ar.attachEvent("onpropertychange",Uf)):t==="focusout"&&tc()}function rg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wo(Hr)}function ig(t,e){if(t==="click")return Wo(e)}function og(t,e){if(t==="input"||t==="change")return Wo(e)}function sg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ge=typeof Object.is=="function"?Object.is:sg;function Wr(t,e){if(Ge(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ia.call(e,i)||!Ge(t[i],e[i]))return!1}return!0}function nc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rc(t,e){var n=nc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nc(n)}}function bf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ff(){for(var t=window,e=ao();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ao(t.document)}return e}function xl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ag(t){var e=Ff(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bf(n.ownerDocument.documentElement,n)){if(r!==null&&xl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=rc(n,o);var s=rc(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lg=ft&&"documentMode"in document&&11>=document.documentMode,Nn=null,ka=null,Or=null,Sa=!1;function ic(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||Nn==null||Nn!==ao(r)||(r=Nn,"selectionStart"in r&&xl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&Wr(Or,r)||(Or=r,r=mo(ka,"onSelect"),0<r.length&&(e=new Ol("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Nn)))}function Ai(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var An={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},Rs={},$f={};ft&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Ko(t){if(Rs[t])return Rs[t];if(!An[t])return t;var e=An[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $f)return Rs[t]=e[n];return t}var zf=Ko("animationend"),jf=Ko("animationiteration"),Bf=Ko("animationstart"),Vf=Ko("transitionend"),Hf=new Map,oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(t,e){Hf.set(t,e),wn(e,[t])}for(var Ps=0;Ps<oc.length;Ps++){var Ns=oc[Ps],ug=Ns.toLowerCase(),cg=Ns[0].toUpperCase()+Ns.slice(1);qt(ug,"on"+cg)}qt(zf,"onAnimationEnd");qt(jf,"onAnimationIteration");qt(Bf,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(Vf,"onTransitionEnd");Kn("onMouseEnter",["mouseout","mouseover"]);Kn("onMouseLeave",["mouseout","mouseover"]);Kn("onPointerEnter",["pointerout","pointerover"]);Kn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dg=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function sc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,uv(r,e,void 0,t),t.currentTarget=null}function Wf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;sc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;sc(i,a,u),o=l}}}if(uo)throw t=_a,uo=!1,_a=null,t}function W(t,e){var n=e[Na];n===void 0&&(n=e[Na]=new Set);var r=t+"__bubble";n.has(r)||(Kf(e,t,2,!1),n.add(r))}function As(t,e,n){var r=0;e&&(r|=4),Kf(n,t,r,e)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function Kr(t){if(!t[Oi]){t[Oi]=!0,Xd.forEach(function(n){n!=="selectionchange"&&(dg.has(n)||As(n,!1,t),As(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oi]||(e[Oi]=!0,As("selectionchange",!1,e))}}function Kf(t,e,n,r){switch(Nf(e)){case 1:var i=Tv;break;case 4:i=Cv;break;default:i=Nl}n=i.bind(null,e,n,t),i=void 0,!ya||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Os(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=an(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}mf(function(){var u=o,c=Tl(n),f=[];e:{var m=Hf.get(t);if(m!==void 0){var v=Ol,_=t;switch(t){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":v=jv;break;case"focusin":_="focus",v=Ss;break;case"focusout":_="blur",v=Ss;break;case"beforeblur":case"afterblur":v=Ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Hv;break;case zf:case jf:case Bf:v=Lv;break;case Vf:v=Kv;break;case"scroll":v=Rv;break;case"wheel":v=qv;break;case"copy":case"cut":case"paste":v=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Qu}var g=(e&4)!==0,T=!g&&t==="scroll",h=g?m!==null?m+"Capture":null:m;g=[];for(var d=u,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,h!==null&&(y=zr(d,h),y!=null&&g.push(Gr(d,y,p)))),T)break;d=d.return}0<g.length&&(m=new v(m,_,null,n,c),f.push({event:m,listeners:g}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==va&&(_=n.relatedTarget||n.fromElement)&&(an(_)||_[ht]))break e;if((v||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?an(_):null,_!==null&&(T=In(_),_!==T||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(g=qu,y="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(g=Qu,y="onPointerLeave",h="onPointerEnter",d="pointer"),T=v==null?m:On(v),p=_==null?m:On(_),m=new g(y,d+"leave",v,n,c),m.target=T,m.relatedTarget=p,y=null,an(c)===u&&(g=new g(h,d+"enter",_,n,c),g.target=p,g.relatedTarget=T,y=g),T=y,v&&_)t:{for(g=v,h=_,d=0,p=g;p;p=Tn(p))d++;for(p=0,y=h;y;y=Tn(y))p++;for(;0<d-p;)g=Tn(g),d--;for(;0<p-d;)h=Tn(h),p--;for(;d--;){if(g===h||h!==null&&g===h.alternate)break t;g=Tn(g),h=Tn(h)}g=null}else g=null;v!==null&&ac(f,m,v,g,!1),_!==null&&T!==null&&ac(f,T,_,g,!0)}}e:{if(m=u?On(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var k=tg;else if(Zu(m))if(Mf)k=og;else{k=rg;var R=ng}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=ig);if(k&&(k=k(t,u))){xf(f,k,n,c);break e}R&&R(t,m,u),t==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&da(m,"number",m.value)}switch(R=u?On(u):window,t){case"focusin":(Zu(R)||R.contentEditable==="true")&&(Nn=R,ka=u,Or=null);break;case"focusout":Or=ka=Nn=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,ic(f,n,c);break;case"selectionchange":if(lg)break;case"keydown":case"keyup":ic(f,n,c)}var N;if(Dl)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Pn?Lf(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Of&&n.locale!=="ko"&&(Pn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Pn&&(N=Af()):(Nt=c,Al="value"in Nt?Nt.value:Nt.textContent,Pn=!0)),R=mo(u,A),0<R.length&&(A=new Ju(A,t,null,n,c),f.push({event:A,listeners:R}),N?A.data=N:(N=Df(n),N!==null&&(A.data=N)))),(N=Qv?Yv(t,n):Xv(t,n))&&(u=mo(u,"onBeforeInput"),0<u.length&&(c=new Ju("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=N))}Wf(f,e)})}function Gr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zr(t,n),o!=null&&r.unshift(Gr(t,o,i)),o=zr(t,e),o!=null&&r.push(Gr(t,o,i))),t=t.return}return r}function Tn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ac(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=zr(n,o),l!=null&&s.unshift(Gr(n,l,a))):i||(l=zr(n,o),l!=null&&s.push(Gr(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var fg=/\r\n?/g,hg=/\u0000|\uFFFD/g;function lc(t){return(typeof t=="string"?t:""+t).replace(fg,`
`).replace(hg,"")}function Li(t,e,n){if(e=lc(e),lc(t)!==e&&n)throw Error(w(425))}function vo(){}var Ta=null,Ca=null;function Ra(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pa=typeof setTimeout=="function"?setTimeout:void 0,pg=typeof clearTimeout=="function"?clearTimeout:void 0,uc=typeof Promise=="function"?Promise:void 0,mg=typeof queueMicrotask=="function"?queueMicrotask:typeof uc<"u"?function(t){return uc.resolve(null).then(t).catch(vg)}:Pa;function vg(t){setTimeout(function(){throw t})}function Ls(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vr(e)}function Ut(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var rr=Math.random().toString(36).slice(2),Ye="__reactFiber$"+rr,qr="__reactProps$"+rr,ht="__reactContainer$"+rr,Na="__reactEvents$"+rr,gg="__reactListeners$"+rr,yg="__reactHandles$"+rr;function an(t){var e=t[Ye];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ht]||n[Ye]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cc(t);t!==null;){if(n=t[Ye])return n;t=cc(t)}return e}t=n,n=t.parentNode}return null}function ci(t){return t=t[Ye]||t[ht],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function On(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Go(t){return t[qr]||null}var Aa=[],Ln=-1;function Jt(t){return{current:t}}function G(t){0>Ln||(t.current=Aa[Ln],Aa[Ln]=null,Ln--)}function H(t,e){Ln++,Aa[Ln]=t.current,t.current=e}var Kt={},me=Jt(Kt),Ee=Jt(!1),hn=Kt;function Gn(t,e){var n=t.type.contextTypes;if(!n)return Kt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ke(t){return t=t.childContextTypes,t!=null}function go(){G(Ee),G(me)}function dc(t,e,n){if(me.current!==Kt)throw Error(w(168));H(me,e),H(Ee,n)}function Gf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,nv(t)||"Unknown",i));return X({},n,r)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kt,hn=me.current,H(me,t),H(Ee,Ee.current),!0}function fc(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Gf(t,e,hn),r.__reactInternalMemoizedMergedChildContext=t,G(Ee),G(me),H(me,t)):G(Ee),H(Ee,n)}var rt=null,qo=!1,Ds=!1;function qf(t){rt===null?rt=[t]:rt.push(t)}function _g(t){qo=!0,qf(t)}function Qt(){if(!Ds&&rt!==null){Ds=!0;var t=0,e=B;try{var n=rt;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rt=null,qo=!1}catch(i){throw rt!==null&&(rt=rt.slice(t+1)),_f(Cl,Qt),i}finally{B=e,Ds=!1}}return null}var Dn=[],xn=0,_o=null,wo=0,Le=[],De=0,pn=null,ot=1,st="";function rn(t,e){Dn[xn++]=wo,Dn[xn++]=_o,_o=t,wo=e}function Jf(t,e,n){Le[De++]=ot,Le[De++]=st,Le[De++]=pn,pn=t;var r=ot;t=st;var i=32-We(r)-1;r&=~(1<<i),n+=1;var o=32-We(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ot=1<<32-We(e)+i|n<<i|r,st=o+t}else ot=1<<o|n<<i|r,st=t}function Ml(t){t.return!==null&&(rn(t,1),Jf(t,1,0))}function Ul(t){for(;t===_o;)_o=Dn[--xn],Dn[xn]=null,wo=Dn[--xn],Dn[xn]=null;for(;t===pn;)pn=Le[--De],Le[De]=null,st=Le[--De],Le[De]=null,ot=Le[--De],Le[De]=null}var Re=null,Ce=null,q=!1,He=null;function Qf(t,e){var n=xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Re=t,Ce=Ut(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Re=t,Ce=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pn!==null?{id:ot,overflow:st}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Re=t,Ce=null,!0):!1;default:return!1}}function Oa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function La(t){if(q){var e=Ce;if(e){var n=e;if(!hc(t,e)){if(Oa(t))throw Error(w(418));e=Ut(n.nextSibling);var r=Re;e&&hc(t,e)?Qf(r,n):(t.flags=t.flags&-4097|2,q=!1,Re=t)}}else{if(Oa(t))throw Error(w(418));t.flags=t.flags&-4097|2,q=!1,Re=t}}}function pc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Re=t}function Di(t){if(t!==Re)return!1;if(!q)return pc(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ra(t.type,t.memoizedProps)),e&&(e=Ce)){if(Oa(t))throw Yf(),Error(w(418));for(;e;)Qf(t,e),e=Ut(e.nextSibling)}if(pc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ce=Ut(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ce=null}}else Ce=Re?Ut(t.stateNode.nextSibling):null;return!0}function Yf(){for(var t=Ce;t;)t=Ut(t.nextSibling)}function qn(){Ce=Re=null,q=!1}function bl(t){He===null?He=[t]:He.push(t)}var wg=yt.ReactCurrentBatchConfig;function Be(t,e){if(t&&t.defaultProps){e=X({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Io=Jt(null),Eo=null,Mn=null,Fl=null;function $l(){Fl=Mn=Eo=null}function zl(t){var e=Io.current;G(Io),t._currentValue=e}function Da(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bn(t,e){Eo=t,Fl=Mn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ie=!0),t.firstContext=null)}function be(t){var e=t._currentValue;if(Fl!==t)if(t={context:t,memoizedValue:e,next:null},Mn===null){if(Eo===null)throw Error(w(308));Mn=t,Eo.dependencies={lanes:0,firstContext:t}}else Mn=Mn.next=t;return e}var ln=null;function jl(t){ln===null?ln=[t]:ln.push(t)}function Xf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jl(e)):(n.next=i.next,i.next=n),e.interleaved=n,pt(t,r)}function pt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kt=!1;function Bl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ct(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function bt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,pt(t,n)}return i=r.interleaved,i===null?(e.next=e,jl(r)):(e.next=i.next,i.next=e),r.interleaved=e,pt(t,n)}function Wi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rl(t,n)}}function mc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ko(t,e,n,r){var i=t.updateQueue;kt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,g=a;switch(m=e,v=n,g.tag){case 1:if(_=g.payload,typeof _=="function"){f=_.call(v,f,m);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,m=typeof _=="function"?_.call(v,f,m):_,m==null)break e;f=X({},f,m);break e;case 2:kt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=f):c=c.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);vn|=s,t.lanes=s,t.memoizedState=f}}function vc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var eh=new Yd.Component().refs;function xa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:X({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jo={isMounted:function(t){return(t=t._reactInternals)?In(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ge(),i=$t(t),o=ct(r,i);o.payload=e,n!=null&&(o.callback=n),e=bt(t,o,i),e!==null&&(Ke(e,t,i,r),Wi(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ge(),i=$t(t),o=ct(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=bt(t,o,i),e!==null&&(Ke(e,t,i,r),Wi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ge(),r=$t(t),i=ct(n,r);i.tag=2,e!=null&&(i.callback=e),e=bt(t,i,r),e!==null&&(Ke(e,t,r,n),Wi(e,t,r))}};function gc(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Wr(n,r)||!Wr(i,o):!0}function th(t,e,n){var r=!1,i=Kt,o=e.contextType;return typeof o=="object"&&o!==null?o=be(o):(i=ke(e)?hn:me.current,r=e.contextTypes,o=(r=r!=null)?Gn(t,i):Kt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function yc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jo.enqueueReplaceState(e,e.state,null)}function Ma(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=eh,Bl(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=be(o):(o=ke(e)?hn:me.current,i.context=Gn(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(xa(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Jo.enqueueReplaceState(i,i.state,null),ko(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function gr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===eh&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function xi(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _c(t){var e=t._init;return e(t._payload)}function nh(t){function e(h,d){if(t){var p=h.deletions;p===null?(h.deletions=[d],h.flags|=16):p.push(d)}}function n(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=zt(h,d),h.index=0,h.sibling=null,h}function o(h,d,p){return h.index=p,t?(p=h.alternate,p!==null?(p=p.index,p<d?(h.flags|=2,d):p):(h.flags|=2,d)):(h.flags|=1048576,d)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,d,p,y){return d===null||d.tag!==6?(d=zs(p,h.mode,y),d.return=h,d):(d=i(d,p),d.return=h,d)}function l(h,d,p,y){var k=p.type;return k===Rn?c(h,d,p.props.children,y,p.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&_c(k)===d.type)?(y=i(d,p.props),y.ref=gr(h,d,p),y.return=h,y):(y=Yi(p.type,p.key,p.props,null,h.mode,y),y.ref=gr(h,d,p),y.return=h,y)}function u(h,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=js(p,h.mode,y),d.return=h,d):(d=i(d,p.children||[]),d.return=h,d)}function c(h,d,p,y,k){return d===null||d.tag!==7?(d=fn(p,h.mode,y,k),d.return=h,d):(d=i(d,p),d.return=h,d)}function f(h,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=zs(""+d,h.mode,p),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ki:return p=Yi(d.type,d.key,d.props,null,h.mode,p),p.ref=gr(h,null,d),p.return=h,p;case Cn:return d=js(d,h.mode,p),d.return=h,d;case Et:var y=d._init;return f(h,y(d._payload),p)}if(Ir(d)||fr(d))return d=fn(d,h.mode,p,null),d.return=h,d;xi(h,d)}return null}function m(h,d,p,y){var k=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(h,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ki:return p.key===k?l(h,d,p,y):null;case Cn:return p.key===k?u(h,d,p,y):null;case Et:return k=p._init,m(h,d,k(p._payload),y)}if(Ir(p)||fr(p))return k!==null?null:c(h,d,p,y,null);xi(h,p)}return null}function v(h,d,p,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(p)||null,a(d,h,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ki:return h=h.get(y.key===null?p:y.key)||null,l(d,h,y,k);case Cn:return h=h.get(y.key===null?p:y.key)||null,u(d,h,y,k);case Et:var R=y._init;return v(h,d,p,R(y._payload),k)}if(Ir(y)||fr(y))return h=h.get(p)||null,c(d,h,y,k,null);xi(d,y)}return null}function _(h,d,p,y){for(var k=null,R=null,N=d,A=d=0,z=null;N!==null&&A<p.length;A++){N.index>A?(z=N,N=null):z=N.sibling;var M=m(h,N,p[A],y);if(M===null){N===null&&(N=z);break}t&&N&&M.alternate===null&&e(h,N),d=o(M,d,A),R===null?k=M:R.sibling=M,R=M,N=z}if(A===p.length)return n(h,N),q&&rn(h,A),k;if(N===null){for(;A<p.length;A++)N=f(h,p[A],y),N!==null&&(d=o(N,d,A),R===null?k=N:R.sibling=N,R=N);return q&&rn(h,A),k}for(N=r(h,N);A<p.length;A++)z=v(N,h,A,p[A],y),z!==null&&(t&&z.alternate!==null&&N.delete(z.key===null?A:z.key),d=o(z,d,A),R===null?k=z:R.sibling=z,R=z);return t&&N.forEach(function(ze){return e(h,ze)}),q&&rn(h,A),k}function g(h,d,p,y){var k=fr(p);if(typeof k!="function")throw Error(w(150));if(p=k.call(p),p==null)throw Error(w(151));for(var R=k=null,N=d,A=d=0,z=null,M=p.next();N!==null&&!M.done;A++,M=p.next()){N.index>A?(z=N,N=null):z=N.sibling;var ze=m(h,N,M.value,y);if(ze===null){N===null&&(N=z);break}t&&N&&ze.alternate===null&&e(h,N),d=o(ze,d,A),R===null?k=ze:R.sibling=ze,R=ze,N=z}if(M.done)return n(h,N),q&&rn(h,A),k;if(N===null){for(;!M.done;A++,M=p.next())M=f(h,M.value,y),M!==null&&(d=o(M,d,A),R===null?k=M:R.sibling=M,R=M);return q&&rn(h,A),k}for(N=r(h,N);!M.done;A++,M=p.next())M=v(N,h,A,M.value,y),M!==null&&(t&&M.alternate!==null&&N.delete(M.key===null?A:M.key),d=o(M,d,A),R===null?k=M:R.sibling=M,R=M);return t&&N.forEach(function(cr){return e(h,cr)}),q&&rn(h,A),k}function T(h,d,p,y){if(typeof p=="object"&&p!==null&&p.type===Rn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ki:e:{for(var k=p.key,R=d;R!==null;){if(R.key===k){if(k=p.type,k===Rn){if(R.tag===7){n(h,R.sibling),d=i(R,p.props.children),d.return=h,h=d;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&_c(k)===R.type){n(h,R.sibling),d=i(R,p.props),d.ref=gr(h,R,p),d.return=h,h=d;break e}n(h,R);break}else e(h,R);R=R.sibling}p.type===Rn?(d=fn(p.props.children,h.mode,y,p.key),d.return=h,h=d):(y=Yi(p.type,p.key,p.props,null,h.mode,y),y.ref=gr(h,d,p),y.return=h,h=y)}return s(h);case Cn:e:{for(R=p.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(h,d.sibling),d=i(d,p.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else e(h,d);d=d.sibling}d=js(p,h.mode,y),d.return=h,h=d}return s(h);case Et:return R=p._init,T(h,d,R(p._payload),y)}if(Ir(p))return _(h,d,p,y);if(fr(p))return g(h,d,p,y);xi(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,p),d.return=h,h=d):(n(h,d),d=zs(p,h.mode,y),d.return=h,h=d),s(h)):n(h,d)}return T}var Jn=nh(!0),rh=nh(!1),di={},Ze=Jt(di),Jr=Jt(di),Qr=Jt(di);function un(t){if(t===di)throw Error(w(174));return t}function Vl(t,e){switch(H(Qr,e),H(Jr,t),H(Ze,di),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ha(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ha(e,t)}G(Ze),H(Ze,e)}function Qn(){G(Ze),G(Jr),G(Qr)}function ih(t){un(Qr.current);var e=un(Ze.current),n=ha(e,t.type);e!==n&&(H(Jr,t),H(Ze,n))}function Hl(t){Jr.current===t&&(G(Ze),G(Jr))}var Q=Jt(0);function So(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xs=[];function Wl(){for(var t=0;t<xs.length;t++)xs[t]._workInProgressVersionPrimary=null;xs.length=0}var Ki=yt.ReactCurrentDispatcher,Ms=yt.ReactCurrentBatchConfig,mn=0,Y=null,ie=null,ae=null,To=!1,Lr=!1,Yr=0,Ig=0;function fe(){throw Error(w(321))}function Kl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ge(t[n],e[n]))return!1;return!0}function Gl(t,e,n,r,i,o){if(mn=o,Y=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ki.current=t===null||t.memoizedState===null?Tg:Cg,t=n(r,i),Lr){o=0;do{if(Lr=!1,Yr=0,25<=o)throw Error(w(301));o+=1,ae=ie=null,e.updateQueue=null,Ki.current=Rg,t=n(r,i)}while(Lr)}if(Ki.current=Co,e=ie!==null&&ie.next!==null,mn=0,ae=ie=Y=null,To=!1,e)throw Error(w(300));return t}function ql(){var t=Yr!==0;return Yr=0,t}function Qe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?Y.memoizedState=ae=t:ae=ae.next=t,ae}function Fe(){if(ie===null){var t=Y.alternate;t=t!==null?t.memoizedState:null}else t=ie.next;var e=ae===null?Y.memoizedState:ae.next;if(e!==null)ae=e,ie=t;else{if(t===null)throw Error(w(310));ie=t,t={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?Y.memoizedState=ae=t:ae=ae.next=t}return ae}function Xr(t,e){return typeof e=="function"?e(t):e}function Us(t){var e=Fe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((mn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Y.lanes|=c,vn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Ge(r,e.memoizedState)||(Ie=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Y.lanes|=o,vn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bs(t){var e=Fe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Ge(o,e.memoizedState)||(Ie=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function oh(){}function sh(t,e){var n=Y,r=Fe(),i=e(),o=!Ge(r.memoizedState,i);if(o&&(r.memoizedState=i,Ie=!0),r=r.queue,Jl(uh.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Zr(9,lh.bind(null,n,r,i,e),void 0,null),le===null)throw Error(w(349));mn&30||ah(n,e,i)}return i}function ah(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lh(t,e,n,r){e.value=n,e.getSnapshot=r,ch(e)&&dh(t)}function uh(t,e,n){return n(function(){ch(e)&&dh(t)})}function ch(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ge(t,n)}catch{return!0}}function dh(t){var e=pt(t,1);e!==null&&Ke(e,t,1,-1)}function wc(t){var e=Qe();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:t},e.queue=t,t=t.dispatch=Sg.bind(null,Y,t),[e.memoizedState,t]}function Zr(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fh(){return Fe().memoizedState}function Gi(t,e,n,r){var i=Qe();Y.flags|=t,i.memoizedState=Zr(1|e,n,void 0,r===void 0?null:r)}function Qo(t,e,n,r){var i=Fe();r=r===void 0?null:r;var o=void 0;if(ie!==null){var s=ie.memoizedState;if(o=s.destroy,r!==null&&Kl(r,s.deps)){i.memoizedState=Zr(e,n,o,r);return}}Y.flags|=t,i.memoizedState=Zr(1|e,n,o,r)}function Ic(t,e){return Gi(8390656,8,t,e)}function Jl(t,e){return Qo(2048,8,t,e)}function hh(t,e){return Qo(4,2,t,e)}function ph(t,e){return Qo(4,4,t,e)}function mh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vh(t,e,n){return n=n!=null?n.concat([t]):null,Qo(4,4,mh.bind(null,e,t),n)}function Ql(){}function gh(t,e){var n=Fe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yh(t,e){var n=Fe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _h(t,e,n){return mn&21?(Ge(n,e)||(n=Ef(),Y.lanes|=n,vn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ie=!0),t.memoizedState=n)}function Eg(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=Ms.transition;Ms.transition={};try{t(!1),e()}finally{B=n,Ms.transition=r}}function wh(){return Fe().memoizedState}function kg(t,e,n){var r=$t(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ih(t))Eh(e,n);else if(n=Xf(t,e,n,r),n!==null){var i=ge();Ke(n,t,r,i),kh(n,e,r)}}function Sg(t,e,n){var r=$t(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ih(t))Eh(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ge(a,s)){var l=e.interleaved;l===null?(i.next=i,jl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Xf(t,e,i,r),n!==null&&(i=ge(),Ke(n,t,r,i),kh(n,e,r))}}function Ih(t){var e=t.alternate;return t===Y||e!==null&&e===Y}function Eh(t,e){Lr=To=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rl(t,n)}}var Co={readContext:be,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Tg={readContext:be,useCallback:function(t,e){return Qe().memoizedState=[t,e===void 0?null:e],t},useContext:be,useEffect:Ic,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gi(4194308,4,mh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gi(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gi(4,2,t,e)},useMemo:function(t,e){var n=Qe();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qe();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kg.bind(null,Y,t),[r.memoizedState,t]},useRef:function(t){var e=Qe();return t={current:t},e.memoizedState=t},useState:wc,useDebugValue:Ql,useDeferredValue:function(t){return Qe().memoizedState=t},useTransition:function(){var t=wc(!1),e=t[0];return t=Eg.bind(null,t[1]),Qe().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Y,i=Qe();if(q){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),le===null)throw Error(w(349));mn&30||ah(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Ic(uh.bind(null,r,o,t),[t]),r.flags|=2048,Zr(9,lh.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Qe(),e=le.identifierPrefix;if(q){var n=st,r=ot;n=(r&~(1<<32-We(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yr++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ig++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Cg={readContext:be,useCallback:gh,useContext:be,useEffect:Jl,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:yh,useReducer:Us,useRef:fh,useState:function(){return Us(Xr)},useDebugValue:Ql,useDeferredValue:function(t){var e=Fe();return _h(e,ie.memoizedState,t)},useTransition:function(){var t=Us(Xr)[0],e=Fe().memoizedState;return[t,e]},useMutableSource:oh,useSyncExternalStore:sh,useId:wh,unstable_isNewReconciler:!1},Rg={readContext:be,useCallback:gh,useContext:be,useEffect:Jl,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:yh,useReducer:bs,useRef:fh,useState:function(){return bs(Xr)},useDebugValue:Ql,useDeferredValue:function(t){var e=Fe();return ie===null?e.memoizedState=t:_h(e,ie.memoizedState,t)},useTransition:function(){var t=bs(Xr)[0],e=Fe().memoizedState;return[t,e]},useMutableSource:oh,useSyncExternalStore:sh,useId:wh,unstable_isNewReconciler:!1};function Yn(t,e){try{var n="",r=e;do n+=tv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Fs(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ua(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Pg=typeof WeakMap=="function"?WeakMap:Map;function Sh(t,e,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Po||(Po=!0,Ka=r),Ua(t,e)},n}function Th(t,e,n){n=ct(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ua(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ua(t,e),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Ec(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Pg;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Bg.bind(null,t,e,n),e.then(t,t))}function kc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ct(-1,1),e.tag=2,bt(n,e,1))),n.lanes|=1),t)}var Ng=yt.ReactCurrentOwner,Ie=!1;function ve(t,e,n,r){e.child=t===null?rh(e,null,n,r):Jn(e,t.child,n,r)}function Tc(t,e,n,r,i){n=n.render;var o=e.ref;return Bn(e,i),r=Gl(t,e,n,r,o,i),n=ql(),t!==null&&!Ie?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mt(t,e,i)):(q&&n&&Ml(e),e.flags|=1,ve(t,e,r,i),e.child)}function Cc(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!iu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Ch(t,e,o,r,i)):(t=Yi(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Wr,n(s,r)&&t.ref===e.ref)return mt(t,e,i)}return e.flags|=1,t=zt(o,r),t.ref=e.ref,t.return=e,e.child=t}function Ch(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Wr(o,r)&&t.ref===e.ref)if(Ie=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ie=!0);else return e.lanes=t.lanes,mt(t,e,i)}return ba(t,e,n,r,i)}function Rh(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(bn,Te),Te|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,H(bn,Te),Te|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(bn,Te),Te|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,H(bn,Te),Te|=r;return ve(t,e,i,n),e.child}function Ph(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ba(t,e,n,r,i){var o=ke(n)?hn:me.current;return o=Gn(e,o),Bn(e,i),n=Gl(t,e,n,r,o,i),r=ql(),t!==null&&!Ie?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mt(t,e,i)):(q&&r&&Ml(e),e.flags|=1,ve(t,e,n,i),e.child)}function Rc(t,e,n,r,i){if(ke(n)){var o=!0;yo(e)}else o=!1;if(Bn(e,i),e.stateNode===null)qi(t,e),th(e,n,r),Ma(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=be(u):(u=ke(n)?hn:me.current,u=Gn(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yc(e,s,r,u),kt=!1;var m=e.memoizedState;s.state=m,ko(e,r,s,i),l=e.memoizedState,a!==r||m!==l||Ee.current||kt?(typeof c=="function"&&(xa(e,n,c,r),l=e.memoizedState),(a=kt||gc(e,n,a,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Zf(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Be(e.type,a),s.props=u,f=e.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=be(l):(l=ke(n)?hn:me.current,l=Gn(e,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&yc(e,s,r,l),kt=!1,m=e.memoizedState,s.state=m,ko(e,r,s,i);var _=e.memoizedState;a!==f||m!==_||Ee.current||kt?(typeof v=="function"&&(xa(e,n,v,r),_=e.memoizedState),(u=kt||gc(e,n,u,r,m,_,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),s.props=r,s.state=_,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Fa(t,e,n,r,o,i)}function Fa(t,e,n,r,i,o){Ph(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&fc(e,n,!1),mt(t,e,o);r=e.stateNode,Ng.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Jn(e,t.child,null,o),e.child=Jn(e,null,a,o)):ve(t,e,a,o),e.memoizedState=r.state,i&&fc(e,n,!0),e.child}function Nh(t){var e=t.stateNode;e.pendingContext?dc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dc(t,e.context,!1),Vl(t,e.containerInfo)}function Pc(t,e,n,r,i){return qn(),bl(i),e.flags|=256,ve(t,e,n,r),e.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function za(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ah(t,e,n){var r=e.pendingProps,i=Q.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),H(Q,i&1),t===null)return La(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Zo(s,r,0,null),t=fn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=za(n),e.memoizedState=$a,t):Yl(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ag(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=zt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=zt(a,o):(o=fn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?za(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=$a,r}return o=t.child,t=o.sibling,r=zt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yl(t,e){return e=Zo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mi(t,e,n,r){return r!==null&&bl(r),Jn(e,t.child,null,n),t=Yl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ag(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Fs(Error(w(422))),Mi(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Zo({mode:"visible",children:r.children},i,0,null),o=fn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Jn(e,t.child,null,s),e.child.memoizedState=za(s),e.memoizedState=$a,o);if(!(e.mode&1))return Mi(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(w(419)),r=Fs(o,r,void 0),Mi(t,e,s,r)}if(a=(s&t.childLanes)!==0,Ie||a){if(r=le,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,pt(t,i),Ke(r,t,i,-1))}return ru(),r=Fs(Error(w(421))),Mi(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Vg.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ce=Ut(i.nextSibling),Re=e,q=!0,He=null,t!==null&&(Le[De++]=ot,Le[De++]=st,Le[De++]=pn,ot=t.id,st=t.overflow,pn=e),e=Yl(e,r.children),e.flags|=4096,e)}function Nc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Da(t.return,e,n)}function $s(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Oh(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(ve(t,e,r.children,n),r=Q.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nc(t,n,e);else if(t.tag===19)Nc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(H(Q,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&So(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$s(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&So(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$s(e,!0,n,null,o);break;case"together":$s(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qi(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=zt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Og(t,e,n){switch(e.tag){case 3:Nh(e),qn();break;case 5:ih(e);break;case 1:ke(e.type)&&yo(e);break;case 4:Vl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;H(Io,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(H(Q,Q.current&1),e.flags|=128,null):n&e.child.childLanes?Ah(t,e,n):(H(Q,Q.current&1),t=mt(t,e,n),t!==null?t.sibling:null);H(Q,Q.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Oh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Q,Q.current),r)break;return null;case 22:case 23:return e.lanes=0,Rh(t,e,n)}return mt(t,e,n)}var Lh,ja,Dh,xh;Lh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ja=function(){};Dh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,un(Ze.current);var o=null;switch(n){case"input":i=ua(t,i),r=ua(t,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=fa(t,i),r=fa(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vo)}pa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};xh=function(t,e,n,r){n!==r&&(e.flags|=4)};function yr(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function he(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lg(t,e,n){var r=e.pendingProps;switch(Ul(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(e),null;case 1:return ke(e.type)&&go(),he(e),null;case 3:return r=e.stateNode,Qn(),G(Ee),G(me),Wl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Di(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,He!==null&&(Ja(He),He=null))),ja(t,e),he(e),null;case 5:Hl(e);var i=un(Qr.current);if(n=e.type,t!==null&&e.stateNode!=null)Dh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return he(e),null}if(t=un(Ze.current),Di(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Ye]=e,r[qr]=o,t=(e.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<kr.length;i++)W(kr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Fu(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":zu(r,o),W("invalid",r)}pa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Li(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Li(r.textContent,a,t),i=["children",""+a]):Fr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&W("scroll",r)}switch(n){case"input":Si(r),$u(r,o,!0);break;case"textarea":Si(r),ju(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=af(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Ye]=e,t[qr]=r,Lh(t,e,!1,!1),e.stateNode=t;e:{switch(s=ma(n,r),n){case"dialog":W("cancel",t),W("close",t),i=r;break;case"iframe":case"object":case"embed":W("load",t),i=r;break;case"video":case"audio":for(i=0;i<kr.length;i++)W(kr[i],t);i=r;break;case"source":W("error",t),i=r;break;case"img":case"image":case"link":W("error",t),W("load",t),i=r;break;case"details":W("toggle",t),i=r;break;case"input":Fu(t,r),i=ua(t,r),W("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),W("invalid",t);break;case"textarea":zu(t,r),i=fa(t,r),W("invalid",t);break;default:i=r}pa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?cf(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lf(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$r(t,l):typeof l=="number"&&$r(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&W("scroll",t):l!=null&&Il(t,o,l,s))}switch(n){case"input":Si(t),$u(t,r,!1);break;case"textarea":Si(t),ju(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wt(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Fn(t,!!r.multiple,o,!1):r.defaultValue!=null&&Fn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return he(e),null;case 6:if(t&&e.stateNode!=null)xh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=un(Qr.current),un(Ze.current),Di(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ye]=e,(o=r.nodeValue!==n)&&(t=Re,t!==null))switch(t.tag){case 3:Li(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Li(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=e,e.stateNode=r}return he(e),null;case 13:if(G(Q),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&Ce!==null&&e.mode&1&&!(e.flags&128))Yf(),qn(),e.flags|=98560,o=!1;else if(o=Di(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(w(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Ye]=e}else qn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;he(e),o=!1}else He!==null&&(Ja(He),He=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Q.current&1?oe===0&&(oe=3):ru())),e.updateQueue!==null&&(e.flags|=4),he(e),null);case 4:return Qn(),ja(t,e),t===null&&Kr(e.stateNode.containerInfo),he(e),null;case 10:return zl(e.type._context),he(e),null;case 17:return ke(e.type)&&go(),he(e),null;case 19:if(G(Q),o=e.memoizedState,o===null)return he(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)yr(o,!1);else{if(oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=So(t),s!==null){for(e.flags|=128,yr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return H(Q,Q.current&1|2),e.child}t=t.sibling}o.tail!==null&&te()>Xn&&(e.flags|=128,r=!0,yr(o,!1),e.lanes=4194304)}else{if(!r)if(t=So(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return he(e),null}else 2*te()-o.renderingStartTime>Xn&&n!==1073741824&&(e.flags|=128,r=!0,yr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=te(),e.sibling=null,n=Q.current,H(Q,r?n&1|2:n&1),e):(he(e),null);case 22:case 23:return nu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Te&1073741824&&(he(e),e.subtreeFlags&6&&(e.flags|=8192)):he(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function Dg(t,e){switch(Ul(e),e.tag){case 1:return ke(e.type)&&go(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qn(),G(Ee),G(me),Wl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hl(e),null;case 13:if(G(Q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));qn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(Q),null;case 4:return Qn(),null;case 10:return zl(e.type._context),null;case 22:case 23:return nu(),null;case 24:return null;default:return null}}var Ui=!1,pe=!1,xg=typeof WeakSet=="function"?WeakSet:Set,C=null;function Un(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(t,e,r)}else n.current=null}function Ba(t,e,n){try{n()}catch(r){Z(t,e,r)}}var Ac=!1;function Mg(t,e){if(Ta=ho,t=Ff(),xl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++u===i&&(a=s),m===o&&++c===r&&(l=s),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ca={focusedElem:t,selectionRange:n},ho=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,T=_.memoizedState,h=e.stateNode,d=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Be(e.type,g),T);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){Z(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return _=Ac,Ac=!1,_}function Dr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ba(e,n,o)}i=i.next}while(i!==r)}}function Yo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Va(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mh(t){var e=t.alternate;e!==null&&(t.alternate=null,Mh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ye],delete e[qr],delete e[Na],delete e[gg],delete e[yg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uh(t){return t.tag===5||t.tag===3||t.tag===4}function Oc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ha(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vo));else if(r!==4&&(t=t.child,t!==null))for(Ha(t,e,n),t=t.sibling;t!==null;)Ha(t,e,n),t=t.sibling}function Wa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wa(t,e,n),t=t.sibling;t!==null;)Wa(t,e,n),t=t.sibling}var ue=null,Ve=!1;function _t(t,e,n){for(n=n.child;n!==null;)bh(t,e,n),n=n.sibling}function bh(t,e,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:pe||Un(n,e);case 6:var r=ue,i=Ve;ue=null,_t(t,e,n),ue=r,Ve=i,ue!==null&&(Ve?(t=ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ve?(t=ue,n=n.stateNode,t.nodeType===8?Ls(t.parentNode,n):t.nodeType===1&&Ls(t,n),Vr(t)):Ls(ue,n.stateNode));break;case 4:r=ue,i=Ve,ue=n.stateNode.containerInfo,Ve=!0,_t(t,e,n),ue=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ba(n,e,s),i=i.next}while(i!==r)}_t(t,e,n);break;case 1:if(!pe&&(Un(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,e,a)}_t(t,e,n);break;case 21:_t(t,e,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,_t(t,e,n),pe=r):_t(t,e,n);break;default:_t(t,e,n)}}function Lc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xg),e.forEach(function(r){var i=Hg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function je(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ve=!1;break e;case 3:ue=a.stateNode.containerInfo,Ve=!0;break e;case 4:ue=a.stateNode.containerInfo,Ve=!0;break e}a=a.return}if(ue===null)throw Error(w(160));bh(o,s,i),ue=null,Ve=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Z(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fh(e,t),e=e.sibling}function Fh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(je(e,t),Je(t),r&4){try{Dr(3,t,t.return),Yo(3,t)}catch(g){Z(t,t.return,g)}try{Dr(5,t,t.return)}catch(g){Z(t,t.return,g)}}break;case 1:je(e,t),Je(t),r&512&&n!==null&&Un(n,n.return);break;case 5:if(je(e,t),Je(t),r&512&&n!==null&&Un(n,n.return),t.flags&32){var i=t.stateNode;try{$r(i,"")}catch(g){Z(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&of(i,o),ma(a,s);var u=ma(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?cf(i,f):c==="dangerouslySetInnerHTML"?lf(i,f):c==="children"?$r(i,f):Il(i,c,f,u)}switch(a){case"input":ca(i,o);break;case"textarea":sf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Fn(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?Fn(i,!!o.multiple,o.defaultValue,!0):Fn(i,!!o.multiple,o.multiple?[]:"",!1))}i[qr]=o}catch(g){Z(t,t.return,g)}}break;case 6:if(je(e,t),Je(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(g){Z(t,t.return,g)}}break;case 3:if(je(e,t),Je(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(e.containerInfo)}catch(g){Z(t,t.return,g)}break;case 4:je(e,t),Je(t);break;case 13:je(e,t),Je(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(eu=te())),r&4&&Lc(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(pe=(u=pe)||c,je(e,t),pe=u):je(e,t),Je(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(C=t,c=t.child;c!==null;){for(f=C=c;C!==null;){switch(m=C,v=m.child,m.tag){case 0:case 11:case 14:case 15:Dr(4,m,m.return);break;case 1:Un(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Z(r,n,g)}}break;case 5:Un(m,m.return);break;case 22:if(m.memoizedState!==null){xc(f);continue}}v!==null?(v.return=m,C=v):xc(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uf("display",s))}catch(g){Z(t,t.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Z(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:je(e,t),Je(t),r&4&&Lc(t);break;case 21:break;default:je(e,t),Je(t)}}function Je(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Uh(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($r(i,""),r.flags&=-33);var o=Oc(t);Wa(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Oc(t);Ha(t,a,s);break;default:throw Error(w(161))}}catch(l){Z(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ug(t,e,n){C=t,$h(t)}function $h(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ui;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||pe;a=Ui;var u=pe;if(Ui=s,(pe=l)&&!u)for(C=i;C!==null;)s=C,l=s.child,s.tag===22&&s.memoizedState!==null?Mc(i):l!==null?(l.return=s,C=l):Mc(i);for(;o!==null;)C=o,$h(o),o=o.sibling;C=i,Ui=a,pe=u}Dc(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):Dc(t)}}function Dc(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pe||Yo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Be(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&vc(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vc(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Vr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}pe||e.flags&512&&Va(e)}catch(m){Z(e,e.return,m)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function xc(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function Mc(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yo(4,e)}catch(l){Z(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Z(e,i,l)}}var o=e.return;try{Va(e)}catch(l){Z(e,o,l)}break;case 5:var s=e.return;try{Va(e)}catch(l){Z(e,s,l)}}}catch(l){Z(e,e.return,l)}if(e===t){C=null;break}var a=e.sibling;if(a!==null){a.return=e.return,C=a;break}C=e.return}}var bg=Math.ceil,Ro=yt.ReactCurrentDispatcher,Xl=yt.ReactCurrentOwner,Me=yt.ReactCurrentBatchConfig,$=0,le=null,ne=null,ce=0,Te=0,bn=Jt(0),oe=0,ei=null,vn=0,Xo=0,Zl=0,xr=null,we=null,eu=0,Xn=1/0,nt=null,Po=!1,Ka=null,Ft=null,bi=!1,At=null,No=0,Mr=0,Ga=null,Ji=-1,Qi=0;function ge(){return $&6?te():Ji!==-1?Ji:Ji=te()}function $t(t){return t.mode&1?$&2&&ce!==0?ce&-ce:wg.transition!==null?(Qi===0&&(Qi=Ef()),Qi):(t=B,t!==0||(t=window.event,t=t===void 0?16:Nf(t.type)),t):1}function Ke(t,e,n,r){if(50<Mr)throw Mr=0,Ga=null,Error(w(185));li(t,n,r),(!($&2)||t!==le)&&(t===le&&(!($&2)&&(Xo|=n),oe===4&&Tt(t,ce)),Se(t,r),n===1&&$===0&&!(e.mode&1)&&(Xn=te()+500,qo&&Qt()))}function Se(t,e){var n=t.callbackNode;wv(t,e);var r=fo(t,t===le?ce:0);if(r===0)n!==null&&Hu(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hu(n),e===1)t.tag===0?_g(Uc.bind(null,t)):qf(Uc.bind(null,t)),mg(function(){!($&6)&&Qt()}),n=null;else{switch(kf(r)){case 1:n=Cl;break;case 4:n=wf;break;case 16:n=co;break;case 536870912:n=If;break;default:n=co}n=Gh(n,zh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zh(t,e){if(Ji=-1,Qi=0,$&6)throw Error(w(327));var n=t.callbackNode;if(Vn()&&t.callbackNode!==n)return null;var r=fo(t,t===le?ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ao(t,r);else{e=r;var i=$;$|=2;var o=Bh();(le!==t||ce!==e)&&(nt=null,Xn=te()+500,dn(t,e));do try{zg();break}catch(a){jh(t,a)}while(1);$l(),Ro.current=o,$=i,ne!==null?e=0:(le=null,ce=0,e=oe)}if(e!==0){if(e===2&&(i=wa(t),i!==0&&(r=i,e=qa(t,i))),e===1)throw n=ei,dn(t,0),Tt(t,r),Se(t,te()),n;if(e===6)Tt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Fg(i)&&(e=Ao(t,r),e===2&&(o=wa(t),o!==0&&(r=o,e=qa(t,o))),e===1))throw n=ei,dn(t,0),Tt(t,r),Se(t,te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:on(t,we,nt);break;case 3:if(Tt(t,r),(r&130023424)===r&&(e=eu+500-te(),10<e)){if(fo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ge(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pa(on.bind(null,t,we,nt),e);break}on(t,we,nt);break;case 4:if(Tt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-We(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bg(r/1960))-r,10<r){t.timeoutHandle=Pa(on.bind(null,t,we,nt),r);break}on(t,we,nt);break;case 5:on(t,we,nt);break;default:throw Error(w(329))}}}return Se(t,te()),t.callbackNode===n?zh.bind(null,t):null}function qa(t,e){var n=xr;return t.current.memoizedState.isDehydrated&&(dn(t,e).flags|=256),t=Ao(t,e),t!==2&&(e=we,we=n,e!==null&&Ja(e)),t}function Ja(t){we===null?we=t:we.push.apply(we,t)}function Fg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ge(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tt(t,e){for(e&=~Zl,e&=~Xo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-We(e),r=1<<n;t[n]=-1,e&=~r}}function Uc(t){if($&6)throw Error(w(327));Vn();var e=fo(t,0);if(!(e&1))return Se(t,te()),null;var n=Ao(t,e);if(t.tag!==0&&n===2){var r=wa(t);r!==0&&(e=r,n=qa(t,r))}if(n===1)throw n=ei,dn(t,0),Tt(t,e),Se(t,te()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,on(t,we,nt),Se(t,te()),null}function tu(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(Xn=te()+500,qo&&Qt())}}function gn(t){At!==null&&At.tag===0&&!($&6)&&Vn();var e=$;$|=1;var n=Me.transition,r=B;try{if(Me.transition=null,B=1,t)return t()}finally{B=r,Me.transition=n,$=e,!($&6)&&Qt()}}function nu(){Te=bn.current,G(bn)}function dn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pg(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(Ul(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&go();break;case 3:Qn(),G(Ee),G(me),Wl();break;case 5:Hl(r);break;case 4:Qn();break;case 13:G(Q);break;case 19:G(Q);break;case 10:zl(r.type._context);break;case 22:case 23:nu()}n=n.return}if(le=t,ne=t=zt(t.current,null),ce=Te=e,oe=0,ei=null,Zl=Xo=vn=0,we=xr=null,ln!==null){for(e=0;e<ln.length;e++)if(n=ln[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ln=null}return t}function jh(t,e){do{var n=ne;try{if($l(),Ki.current=Co,To){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}To=!1}if(mn=0,ae=ie=Y=null,Lr=!1,Yr=0,Xl.current=null,n===null||n.return===null){oe=1,ei=e,ne=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=kc(s);if(v!==null){v.flags&=-257,Sc(v,s,a,o,e),v.mode&1&&Ec(o,u,e),e=v,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){Ec(o,u,e),ru();break e}l=Error(w(426))}}else if(q&&a.mode&1){var T=kc(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Sc(T,s,a,o,e),bl(Yn(l,a));break e}}o=l=Yn(l,a),oe!==4&&(oe=2),xr===null?xr=[o]:xr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Sh(o,l,e);mc(o,h);break e;case 1:a=l;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ft===null||!Ft.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=Th(o,a,e);mc(o,y);break e}}o=o.return}while(o!==null)}Hh(n)}catch(k){e=k,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function Bh(){var t=Ro.current;return Ro.current=Co,t===null?Co:t}function ru(){(oe===0||oe===3||oe===2)&&(oe=4),le===null||!(vn&268435455)&&!(Xo&268435455)||Tt(le,ce)}function Ao(t,e){var n=$;$|=2;var r=Bh();(le!==t||ce!==e)&&(nt=null,dn(t,e));do try{$g();break}catch(i){jh(t,i)}while(1);if($l(),$=n,Ro.current=r,ne!==null)throw Error(w(261));return le=null,ce=0,oe}function $g(){for(;ne!==null;)Vh(ne)}function zg(){for(;ne!==null&&!dv();)Vh(ne)}function Vh(t){var e=Kh(t.alternate,t,Te);t.memoizedProps=t.pendingProps,e===null?Hh(t):ne=e,Xl.current=null}function Hh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Dg(n,e),n!==null){n.flags&=32767,ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{oe=6,ne=null;return}}else if(n=Lg(n,e,Te),n!==null){ne=n;return}if(e=e.sibling,e!==null){ne=e;return}ne=e=t}while(e!==null);oe===0&&(oe=5)}function on(t,e,n){var r=B,i=Me.transition;try{Me.transition=null,B=1,jg(t,e,n,r)}finally{Me.transition=i,B=r}return null}function jg(t,e,n,r){do Vn();while(At!==null);if($&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Iv(t,o),t===le&&(ne=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bi||(bi=!0,Gh(co,function(){return Vn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var s=B;B=1;var a=$;$|=4,Xl.current=null,Mg(t,n),Fh(n,t),ag(Ca),ho=!!Ta,Ca=Ta=null,t.current=n,Ug(n),fv(),$=a,B=s,Me.transition=o}else t.current=n;if(bi&&(bi=!1,At=t,No=i),o=t.pendingLanes,o===0&&(Ft=null),mv(n.stateNode),Se(t,te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Po)throw Po=!1,t=Ka,Ka=null,t;return No&1&&t.tag!==0&&Vn(),o=t.pendingLanes,o&1?t===Ga?Mr++:(Mr=0,Ga=t):Mr=0,Qt(),null}function Vn(){if(At!==null){var t=kf(No),e=Me.transition,n=B;try{if(Me.transition=null,B=16>t?16:t,At===null)var r=!1;else{if(t=At,At=null,No=0,$&6)throw Error(w(331));var i=$;for($|=4,C=t.current;C!==null;){var o=C,s=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var c=C;switch(c.tag){case 0:case 11:case 15:Dr(8,c,o)}var f=c.child;if(f!==null)f.return=c,C=f;else for(;C!==null;){c=C;var m=c.sibling,v=c.return;if(Mh(c),c===u){C=null;break}if(m!==null){m.return=v,C=m;break}C=v}}}var _=o.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var T=g.sibling;g.sibling=null,g=T}while(g!==null)}}C=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,C=s;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Dr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,C=h;break e}C=o.return}}var d=t.current;for(C=d;C!==null;){s=C;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,C=p;else e:for(s=d;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yo(9,a)}}catch(k){Z(a,a.return,k)}if(a===s){C=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,C=y;break e}C=a.return}}if($=i,Qt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Vo,t)}catch{}r=!0}return r}finally{B=n,Me.transition=e}}return!1}function bc(t,e,n){e=Yn(n,e),e=Sh(t,e,1),t=bt(t,e,1),e=ge(),t!==null&&(li(t,1,e),Se(t,e))}function Z(t,e,n){if(t.tag===3)bc(t,t,n);else for(;e!==null;){if(e.tag===3){bc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){t=Yn(n,t),t=Th(e,t,1),e=bt(e,t,1),t=ge(),e!==null&&(li(e,1,t),Se(e,t));break}}e=e.return}}function Bg(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ge(),t.pingedLanes|=t.suspendedLanes&n,le===t&&(ce&n)===n&&(oe===4||oe===3&&(ce&130023424)===ce&&500>te()-eu?dn(t,0):Zl|=n),Se(t,e)}function Wh(t,e){e===0&&(t.mode&1?(e=Ri,Ri<<=1,!(Ri&130023424)&&(Ri=4194304)):e=1);var n=ge();t=pt(t,e),t!==null&&(li(t,e,n),Se(t,n))}function Vg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wh(t,n)}function Hg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Wh(t,n)}var Kh;Kh=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ee.current)Ie=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ie=!1,Og(t,e,n);Ie=!!(t.flags&131072)}else Ie=!1,q&&e.flags&1048576&&Jf(e,wo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qi(t,e),t=e.pendingProps;var i=Gn(e,me.current);Bn(e,n),i=Gl(null,e,r,t,i,n);var o=ql();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ke(r)?(o=!0,yo(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bl(e),i.updater=Jo,e.stateNode=i,i._reactInternals=e,Ma(e,r,t,n),e=Fa(null,e,r,!0,o,n)):(e.tag=0,q&&o&&Ml(e),ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qi(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Kg(r),t=Be(r,t),i){case 0:e=ba(null,e,r,t,n);break e;case 1:e=Rc(null,e,r,t,n);break e;case 11:e=Tc(null,e,r,t,n);break e;case 14:e=Cc(null,e,r,Be(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Be(r,i),ba(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Be(r,i),Rc(t,e,r,i,n);case 3:e:{if(Nh(e),t===null)throw Error(w(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Zf(t,e),ko(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Yn(Error(w(423)),e),e=Pc(t,e,r,n,i);break e}else if(r!==i){i=Yn(Error(w(424)),e),e=Pc(t,e,r,n,i);break e}else for(Ce=Ut(e.stateNode.containerInfo.firstChild),Re=e,q=!0,He=null,n=rh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),r===i){e=mt(t,e,n);break e}ve(t,e,r,n)}e=e.child}return e;case 5:return ih(e),t===null&&La(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Ra(r,i)?s=null:o!==null&&Ra(r,o)&&(e.flags|=32),Ph(t,e),ve(t,e,s,n),e.child;case 6:return t===null&&La(e),null;case 13:return Ah(t,e,n);case 4:return Vl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Jn(e,null,r,n):ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Be(r,i),Tc(t,e,r,i,n);case 7:return ve(t,e,e.pendingProps,n),e.child;case 8:return ve(t,e,e.pendingProps.children,n),e.child;case 12:return ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,H(Io,r._currentValue),r._currentValue=s,o!==null)if(Ge(o.value,s)){if(o.children===i.children&&!Ee.current){e=mt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ct(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Da(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(w(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Da(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bn(e,n),i=be(i),r=r(i),e.flags|=1,ve(t,e,r,n),e.child;case 14:return r=e.type,i=Be(r,e.pendingProps),i=Be(r.type,i),Cc(t,e,r,i,n);case 15:return Ch(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Be(r,i),qi(t,e),e.tag=1,ke(r)?(t=!0,yo(e)):t=!1,Bn(e,n),th(e,r,i),Ma(e,r,i,n),Fa(null,e,r,!0,t,n);case 19:return Oh(t,e,n);case 22:return Rh(t,e,n)}throw Error(w(156,e.tag))};function Gh(t,e){return _f(t,e)}function Wg(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(t,e,n,r){return new Wg(t,e,n,r)}function iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Kg(t){if(typeof t=="function")return iu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kl)return 11;if(t===Sl)return 14}return 2}function zt(t,e){var n=t.alternate;return n===null?(n=xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yi(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")iu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Rn:return fn(n.children,i,o,e);case El:s=8,i|=8;break;case oa:return t=xe(12,n,e,i|2),t.elementType=oa,t.lanes=o,t;case sa:return t=xe(13,n,e,i),t.elementType=sa,t.lanes=o,t;case aa:return t=xe(19,n,e,i),t.elementType=aa,t.lanes=o,t;case tf:return Zo(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zd:s=10;break e;case ef:s=9;break e;case kl:s=11;break e;case Sl:s=14;break e;case Et:s=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=xe(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function fn(t,e,n,r){return t=xe(7,t,r,e),t.lanes=n,t}function Zo(t,e,n,r){return t=xe(22,t,r,e),t.elementType=tf,t.lanes=n,t.stateNode={isHidden:!1},t}function zs(t,e,n){return t=xe(6,t,null,e),t.lanes=n,t}function js(t,e,n){return e=xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Is(0),this.expirationTimes=Is(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Is(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ou(t,e,n,r,i,o,s,a,l){return t=new Gg(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=xe(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bl(o),t}function qg(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qh(t){if(!t)return Kt;t=t._reactInternals;e:{if(In(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(ke(n))return Gf(t,n,e)}return e}function Jh(t,e,n,r,i,o,s,a,l){return t=ou(n,r,!0,t,i,o,s,a,l),t.context=qh(null),n=t.current,r=ge(),i=$t(n),o=ct(r,i),o.callback=e??null,bt(n,o,i),t.current.lanes=i,li(t,i,r),Se(t,r),t}function es(t,e,n,r){var i=e.current,o=ge(),s=$t(i);return n=qh(n),e.context===null?e.context=n:e.pendingContext=n,e=ct(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=bt(i,e,s),t!==null&&(Ke(t,i,s,o),Wi(t,i,s)),s}function Oo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function su(t,e){Fc(t,e),(t=t.alternate)&&Fc(t,e)}function Jg(){return null}var Qh=typeof reportError=="function"?reportError:function(t){console.error(t)};function au(t){this._internalRoot=t}ts.prototype.render=au.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));es(t,e,null,null)};ts.prototype.unmount=au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gn(function(){es(null,t,null,null)}),e[ht]=null}};function ts(t){this._internalRoot=t}ts.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<St.length&&e!==0&&e<St[n].priority;n++);St.splice(n,0,t),n===0&&Pf(t)}};function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ns(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $c(){}function Qg(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Oo(s);o.call(u)}}var s=Jh(e,r,t,0,null,!1,!1,"",$c);return t._reactRootContainer=s,t[ht]=s.current,Kr(t.nodeType===8?t.parentNode:t),gn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Oo(l);a.call(u)}}var l=ou(t,0,!1,null,null,!1,!1,"",$c);return t._reactRootContainer=l,t[ht]=l.current,Kr(t.nodeType===8?t.parentNode:t),gn(function(){es(e,l,n,r)}),l}function rs(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Oo(s);a.call(l)}}es(e,s,t,i)}else s=Qg(n,e,t,i,r);return Oo(s)}Sf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Er(e.pendingLanes);n!==0&&(Rl(e,n|1),Se(e,te()),!($&6)&&(Xn=te()+500,Qt()))}break;case 13:gn(function(){var r=pt(t,1);if(r!==null){var i=ge();Ke(r,t,1,i)}}),su(t,1)}};Pl=function(t){if(t.tag===13){var e=pt(t,134217728);if(e!==null){var n=ge();Ke(e,t,134217728,n)}su(t,134217728)}};Tf=function(t){if(t.tag===13){var e=$t(t),n=pt(t,e);if(n!==null){var r=ge();Ke(n,t,e,r)}su(t,e)}};Cf=function(){return B};Rf=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};ga=function(t,e,n){switch(e){case"input":if(ca(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Go(r);if(!i)throw Error(w(90));rf(r),ca(r,i)}}}break;case"textarea":sf(t,n);break;case"select":e=n.value,e!=null&&Fn(t,!!n.multiple,e,!1)}};hf=tu;pf=gn;var Yg={usingClientEntryPoint:!1,Events:[ci,On,Go,df,ff,tu]},_r={findFiberByHostInstance:an,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Xg={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gf(t),t===null?null:t.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||Jg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Vo=Fi.inject(Xg),Xe=Fi}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yg;Ne.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lu(e))throw Error(w(200));return qg(t,e,null,n)};Ne.createRoot=function(t,e){if(!lu(t))throw Error(w(299));var n=!1,r="",i=Qh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ou(t,1,!1,null,null,n,!1,r,i),t[ht]=e.current,Kr(t.nodeType===8?t.parentNode:t),new au(e)};Ne.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=gf(e),t=t===null?null:t.stateNode,t};Ne.flushSync=function(t){return gn(t)};Ne.hydrate=function(t,e,n){if(!ns(e))throw Error(w(200));return rs(null,t,e,!0,n)};Ne.hydrateRoot=function(t,e,n){if(!lu(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Qh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Jh(e,null,t,1,n??null,i,!1,o,s),t[ht]=e.current,Kr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ts(e)};Ne.render=function(t,e,n){if(!ns(e))throw Error(w(200));return rs(null,t,e,!1,n)};Ne.unmountComponentAtNode=function(t){if(!ns(t))throw Error(w(40));return t._reactRootContainer?(gn(function(){rs(null,null,t,!1,function(){t._reactRootContainer=null,t[ht]=null})}),!0):!1};Ne.unstable_batchedUpdates=tu;Ne.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ns(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return rs(t,e,n,!1,r)};Ne.version="18.2.0-next-9e3b772b8-20220608";function Yh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yh)}catch(t){console.error(t)}}Yh(),qd.exports=Ne;var Zg=qd.exports,zc=Zg;ra.createRoot=zc.createRoot,ra.hydrateRoot=zc.hydrateRoot;const ey="/react-ts-caps/assets/react-35ef61ed.svg",ty="/react-ts-caps/vite.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ny=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Zh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(m=64)),r.push(n[c],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ny(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new ry;const m=o<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ry extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iy=function(t){const e=Xh(t);return Zh.encodeByteArray(e,!0)},ep=function(t){return iy(t).replace(/\./g,"")},uu=function(t){try{return Zh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=()=>oy().__FIREBASE_DEFAULTS__,ay=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ly=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uu(t[1]);return e&&JSON.parse(e)},cu=()=>{try{return sy()||ay()||ly()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uy=t=>{var e,n;return(n=(e=cu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tp=()=>{var t;return(t=cu())===null||t===void 0?void 0:t.config},np=t=>{var e;return(e=cu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(V())}function ip(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function op(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sp(){const t=V();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dy(){try{return typeof indexedDB=="object"}catch{return!1}}function fy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="FirebaseError";class qe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hy,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yt.prototype.create)}}class Yt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?py(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new qe(i,a,r)}}function py(t,e){return t.replace(my,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const my=/\{\$([^}]+)}/g;function vy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(jc(o)&&jc(s)){if(!Lo(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Tr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ap(t,e){const n=new gy(t,e);return n.subscribe.bind(n)}class gy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Bs),i.error===void 0&&(i.error=Bs),i.complete===void 0&&(i.complete=Bs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Iy(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wy(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wy(t){return t===sn?void 0:t}function Iy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _y(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const ky={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Sy=j.INFO,Ty={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Cy=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ty[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class du{constructor(e){this.name=e,this._logLevel=Sy,this._logHandler=Cy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ky[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Ry=(t,e)=>e.some(n=>t instanceof n);let Bc,Vc;function Py(){return Bc||(Bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ny(){return Vc||(Vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lp=new WeakMap,Qa=new WeakMap,up=new WeakMap,Vs=new WeakMap,fu=new WeakMap;function Ay(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(jt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&lp.set(n,t)}).catch(()=>{}),fu.set(e,t),e}function Oy(t){if(Qa.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Qa.set(t,e)}let Ya={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||up.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ly(t){Ya=t(Ya)}function Dy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hs(this),e,...n);return up.set(r,e.sort?e.sort():[e]),jt(r)}:Ny().includes(t)?function(...e){return t.apply(Hs(this),e),jt(lp.get(this))}:function(...e){return jt(t.apply(Hs(this),e))}}function xy(t){return typeof t=="function"?Dy(t):(t instanceof IDBTransaction&&Oy(t),Ry(t,Py())?new Proxy(t,Ya):t)}function jt(t){if(t instanceof IDBRequest)return Ay(t);if(Vs.has(t))return Vs.get(t);const e=xy(t);return e!==t&&(Vs.set(t,e),fu.set(e,t)),e}const Hs=t=>fu.get(t);function My(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=jt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(jt(s.result),l.oldVersion,l.newVersion,jt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Uy=["get","getKey","getAll","getAllKeys","count"],by=["put","add","delete","clear"],Ws=new Map;function Hc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ws.get(e))return Ws.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=by.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Uy.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ws.set(e,o),o}Ly(t=>({...t,get:(e,n,r)=>Hc(e,n)||t.get(e,n,r),has:(e,n)=>!!Hc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($y(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $y(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",Wc="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new du("@firebase/app"),zy="@firebase/app-compat",jy="@firebase/analytics-compat",By="@firebase/analytics",Vy="@firebase/app-check-compat",Hy="@firebase/app-check",Wy="@firebase/auth",Ky="@firebase/auth-compat",Gy="@firebase/database",qy="@firebase/database-compat",Jy="@firebase/functions",Qy="@firebase/functions-compat",Yy="@firebase/installations",Xy="@firebase/installations-compat",Zy="@firebase/messaging",e0="@firebase/messaging-compat",t0="@firebase/performance",n0="@firebase/performance-compat",r0="@firebase/remote-config",i0="@firebase/remote-config-compat",o0="@firebase/storage",s0="@firebase/storage-compat",a0="@firebase/firestore",l0="@firebase/firestore-compat",u0="firebase",c0="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="[DEFAULT]",d0={[Xa]:"fire-core",[zy]:"fire-core-compat",[By]:"fire-analytics",[jy]:"fire-analytics-compat",[Hy]:"fire-app-check",[Vy]:"fire-app-check-compat",[Wy]:"fire-auth",[Ky]:"fire-auth-compat",[Gy]:"fire-rtdb",[qy]:"fire-rtdb-compat",[Jy]:"fire-fn",[Qy]:"fire-fn-compat",[Yy]:"fire-iid",[Xy]:"fire-iid-compat",[Zy]:"fire-fcm",[e0]:"fire-fcm-compat",[t0]:"fire-perf",[n0]:"fire-perf-compat",[r0]:"fire-rc",[i0]:"fire-rc-compat",[o0]:"fire-gcs",[s0]:"fire-gcs-compat",[a0]:"fire-fst",[l0]:"fire-fst-compat","fire-js":"fire-js",[u0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,el=new Map;function f0(t,e){try{t.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(el.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;el.set(e,t);for(const n of Do.values())f0(n,t);return!0}function cp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bt=new Yt("app","Firebase",h0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=c0;function dp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Za,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Bt.create("bad-app-name",{appName:String(i)});if(n||(n=tp()),!n)throw Bt.create("no-options");const o=Do.get(i);if(o){if(Lo(n,o.options)&&Lo(r,o.config))return o;throw Bt.create("duplicate-app",{appName:i})}const s=new Ey(i);for(const l of el.values())s.addComponent(l);const a=new p0(n,r,s);return Do.set(i,a),a}function m0(t=Za){const e=Do.get(t);if(!e&&t===Za&&tp())return dp();if(!e)throw Bt.create("no-app",{appName:t});return e}function Vt(t,e,n){var r;let i=(r=d0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(a.join(" "));return}_n(new Gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="firebase-heartbeat-database",g0=1,ti="firebase-heartbeat-store";let Ks=null;function fp(){return Ks||(Ks=My(v0,g0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ti)}}}).catch(t=>{throw Bt.create("idb-open",{originalErrorMessage:t.message})})),Ks}async function y0(t){try{return await(await fp()).transaction(ti).objectStore(ti).get(hp(t))}catch(e){if(e instanceof qe)yn.warn(e.message);else{const n=Bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function Kc(t,e){try{const r=(await fp()).transaction(ti,"readwrite");await r.objectStore(ti).put(e,hp(t)),await r.done}catch(n){if(n instanceof qe)yn.warn(n.message);else{const r=Bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(r.message)}}}function hp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=1024,w0=30*24*60*60*1e3;class I0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=w0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gc(),{heartbeatsToSend:n,unsentEntries:r}=E0(this._heartbeatsCache.heartbeats),i=ep(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gc(){return new Date().toISOString().substring(0,10)}function E0(t,e=_0){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),qc(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class k0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dy()?fy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await y0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qc(t){return ep(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t){_n(new Gt("platform-logger",e=>new Fy(e),"PRIVATE")),_n(new Gt("heartbeat",e=>new I0(e),"PRIVATE")),Vt(Xa,Wc,t),Vt(Xa,Wc,"esm2017"),Vt("fire-js","")}S0("");var T0="firebase",C0="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(T0,C0,"app");const R0={firebaseConfig:{apiKey:"AIzaSyB8QHDRg9-xeM88RIh2mg49xkps1TS-vgE",authDomain:"react-ts-caps.firebaseapp.com",projectId:"react-ts-caps",storageBucket:"react-ts-caps.appspot.com",messagingSenderId:"279690855932",appId:"1:279690855932:web:e63a30d0bb544f47749e79"}};/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ni.apply(this,arguments)}var Ot;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ot||(Ot={}));const Jc="popstate";function P0(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return tl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xo(i)}return A0(e,n,null,t)}function re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function hu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function N0(){return Math.random().toString(36).substr(2,8)}function Qc(t,e){return{usr:t.state,key:t.key,idx:e}}function tl(t,e,n,r){return n===void 0&&(n=null),ni({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ir(e):e,{state:n,key:e&&e.key||r||N0()})}function xo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ir(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function A0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ot.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(ni({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=Ot.Pop;let T=c(),h=T==null?null:T-u;u=T,l&&l({action:a,location:g.location,delta:h})}function m(T,h){a=Ot.Push;let d=tl(g.location,T,h);n&&n(d,T),u=c()+1;let p=Qc(d,u),y=g.createHref(d);try{s.pushState(p,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}o&&l&&l({action:a,location:g.location,delta:1})}function v(T,h){a=Ot.Replace;let d=tl(g.location,T,h);n&&n(d,T),u=c();let p=Qc(d,u),y=g.createHref(d);s.replaceState(p,"",y),o&&l&&l({action:a,location:g.location,delta:0})}function _(T){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof T=="string"?T:xo(T);return re(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let g={get action(){return a},get location(){return t(i,s)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Jc,f),l=T,()=>{i.removeEventListener(Jc,f),l=null}},createHref(T){return e(i,T)},createURL:_,encodeLocation(T){let h=_(T);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:v,go(T){return s.go(T)}};return g}var Yc;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yc||(Yc={}));function O0(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ir(e):e,i=pu(r.pathname||"/",n);if(i==null)return null;let o=pp(t);L0(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=j0(o[a],H0(i));return s}function pp(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ht([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(re(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pp(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:$0(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of mp(o.path))i(o,s,l)}),e}function mp(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=mp(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function L0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:z0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const D0=/^:\w+$/,x0=3,M0=2,U0=1,b0=10,F0=-2,Xc=t=>t==="*";function $0(t,e){let n=t.split("/"),r=n.length;return n.some(Xc)&&(r+=F0),e&&(r+=M0),n.filter(i=>!Xc(i)).reduce((i,o)=>i+(D0.test(o)?x0:o===""?U0:b0),r)}function z0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function j0(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=B0({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:Ht([i,c.pathname]),pathnameBase:q0(Ht([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Ht([i,c.pathnameBase]))}return o}function B0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=V0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let m=a[f]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[c]=W0(a[f]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:t}}function V0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),hu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function H0(t){try{return decodeURI(t)}catch(e){return hu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function W0(t,e){try{return decodeURIComponent(t)}catch(n){return hu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function pu(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function K0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ir(t):t;return{pathname:n?n.startsWith("/")?n:G0(n,e):e,search:J0(r),hash:Q0(i)}}function G0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gs(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function gp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ir(t):(i=ni({},t),re(!i.pathname||!i.pathname.includes("?"),Gs("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),Gs("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),Gs("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=e.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=K0(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ht=t=>t.join("/").replace(/\/\/+/g,"/"),q0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),J0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Q0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Y0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const yp=["post","put","patch","delete"];new Set(yp);const X0=["get",...yp];new Set(X0);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mo.apply(this,arguments)}const mu=S.createContext(null),Z0=S.createContext(null),or=S.createContext(null),is=S.createContext(null),En=S.createContext({outlet:null,matches:[],isDataRoute:!1}),_p=S.createContext(null);function e_(t,e){let{relative:n}=e===void 0?{}:e;fi()||re(!1);let{basename:r,navigator:i}=S.useContext(or),{hash:o,pathname:s,search:a}=Ip(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Ht([r,s])),i.createHref({pathname:l,search:a,hash:o})}function fi(){return S.useContext(is)!=null}function os(){return fi()||re(!1),S.useContext(is).location}function wp(t){S.useContext(or).static||S.useLayoutEffect(t)}function vu(){let{isDataRoute:t}=S.useContext(En);return t?h_():t_()}function t_(){fi()||re(!1);let t=S.useContext(mu),{basename:e,navigator:n}=S.useContext(or),{matches:r}=S.useContext(En),{pathname:i}=os(),o=JSON.stringify(vp(r).map(l=>l.pathnameBase)),s=S.useRef(!1);return wp(()=>{s.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=gp(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ht([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,o,i,t])}function Ip(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(En),{pathname:i}=os(),o=JSON.stringify(vp(r).map(s=>s.pathnameBase));return S.useMemo(()=>gp(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function n_(t,e){return r_(t,e)}function r_(t,e,n){fi()||re(!1);let{navigator:r}=S.useContext(or),{matches:i}=S.useContext(En),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=os(),u;if(e){var c;let g=typeof e=="string"?ir(e):e;a==="/"||(c=g.pathname)!=null&&c.startsWith(a)||re(!1),u=g}else u=l;let f=u.pathname||"/",m=a==="/"?f:f.slice(a.length)||"/",v=O0(t,{pathname:m}),_=l_(v&&v.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:Ht([a,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?a:Ht([a,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,n);return e&&_?S.createElement(is.Provider,{value:{location:Mo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ot.Pop}},_):_}function i_(){let t=f_(),e=Y0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,o)}const o_=S.createElement(i_,null);class s_ extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(En.Provider,{value:this.props.routeContext},S.createElement(_p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function a_(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(mu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(En.Provider,{value:e},r)}function l_(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||re(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||o_);let m=e.concat(o.slice(0,u+1)),v=()=>{let _;return c?_=f:l.route.Component?_=S.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,S.createElement(a_,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(s_,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()},null)}var nl;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(nl||(nl={}));var ri;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ri||(ri={}));function u_(t){let e=S.useContext(mu);return e||re(!1),e}function c_(t){let e=S.useContext(Z0);return e||re(!1),e}function d_(t){let e=S.useContext(En);return e||re(!1),e}function Ep(t){let e=d_(),n=e.matches[e.matches.length-1];return n.route.id||re(!1),n.route.id}function f_(){var t;let e=S.useContext(_p),n=c_(ri.UseRouteError),r=Ep(ri.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function h_(){let{router:t}=u_(nl.UseNavigateStable),e=Ep(ri.UseNavigateStable),n=S.useRef(!1);return wp(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Mo({fromRouteId:e},o)))},[t,e])}function Xi(t){re(!1)}function p_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ot.Pop,navigator:o,static:s=!1}=t;fi()&&re(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=ir(r));let{pathname:u="/",search:c="",hash:f="",state:m=null,key:v="default"}=r,_=S.useMemo(()=>{let g=pu(u,a);return g==null?null:{location:{pathname:g,search:c,hash:f,state:m,key:v},navigationType:i}},[a,u,c,f,m,v,i]);return _==null?null:S.createElement(or.Provider,{value:l},S.createElement(is.Provider,{children:n,value:_}))}function m_(t){let{children:e,location:n}=t;return n_(rl(e),n)}var Zc;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Zc||(Zc={}));new Promise(()=>{});function rl(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let o=[...e,i];if(r.type===S.Fragment){n.push.apply(n,rl(r.props.children,o));return}r.type!==Xi&&re(!1),!r.props.index||!r.props.children||re(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=rl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},il.apply(this,arguments)}function v_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function g_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function y_(t,e){return t.button===0&&(!e||e==="_self")&&!g_(t)}const __=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],w_="startTransition",ed=Vm[w_];function I_(t){let{basename:e,children:n,future:r,window:i}=t,o=S.useRef();o.current==null&&(o.current=P0({window:i,v5Compat:!0}));let s=o.current,[a,l]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=S.useCallback(f=>{u&&ed?ed(()=>l(f)):l(f)},[l,u]);return S.useLayoutEffect(()=>s.listen(c),[s,c]),S.createElement(p_,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}const E_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qs=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=e,f=v_(e,__),{basename:m}=S.useContext(or),v,_=!1;if(typeof u=="string"&&k_.test(u)&&(v=u,E_))try{let d=new URL(window.location.href),p=u.startsWith("//")?new URL(d.protocol+u):new URL(u),y=pu(p.pathname,m);p.origin===d.origin&&y!=null?u=y+p.search+p.hash:_=!0}catch{}let g=e_(u,{relative:i}),T=S_(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function h(d){r&&r(d),d.defaultPrevented||T(d)}return S.createElement("a",il({},f,{href:v||g,onClick:_||o?r:h,ref:n,target:l}))});var td;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(td||(td={}));var nd;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(nd||(nd={}));function S_(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=vu(),l=os(),u=Ip(t,{relative:s});return S.useCallback(c=>{if(y_(c,n)){c.preventDefault();let f=r!==void 0?r:xo(l)===xo(u);a(t,{replace:f,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,t,o,s])}var ol=function(t,e){return ol=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},ol(t,e)};function J(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ol(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var K=function(){return K=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K.apply(this,arguments)};function sr(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function I(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{u(r.next(c))}catch(f){s(f)}}function l(c){try{u(r.throw(c))}catch(f){s(f)}}function u(c){c.done?o(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function E(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Ue(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}function kp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T_=kp,Sp=new Yt("auth","Firebase",kp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new du("@firebase/auth");function C_(t,...e){Uo.logLevel<=j.WARN&&Uo.warn(`Auth (${Zt}): ${t}`,...e)}function Zi(t,...e){Uo.logLevel<=j.ERROR&&Uo.error(`Auth (${Zt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,...e){throw gu(t,...e)}function et(t,...e){return gu(t,...e)}function Tp(t,e,n){const r=Object.assign(Object.assign({},T_()),{[e]:n});return new Yt("auth","Firebase",r).create(e,{appName:t.name})}function R_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&$e(t,"argument-error"),Tp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sp.create(t,...e)}function D(t,e,...n){if(!t)throw gu(e,...n)}function at(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zi(e),new Error(e)}function vt(t,e){t||at(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function P_(){return rd()==="http:"||rd()==="https:"}function rd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P_()||ip()||"connection"in navigator)?navigator.onLine:!0}function A_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,vt(n>e,"Short delay should be less than long delay!"),this.isMobile=rp()||op()}get(){return N_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e){vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cp=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=new hi(3e4,6e4);function ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lr(t,e,n,r,i={}){return Rp(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Xt(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Cp.fetch()(Pp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Rp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},O_),e);try{const i=new D_(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw $i(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $i(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw $i(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw $i(t,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Tp(t,c,u);$e(t,c)}}catch(i){if(i instanceof qe)throw i;$e(t,"network-request-failed",{message:String(i)})}}async function pi(t,e,n,r,i={}){const o=await lr(t,e,n,r,i);return"mfaPendingCredential"in o&&$e(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Pp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yu(t.config,i):`${t.config.apiScheme}://${i}`}let D_=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),L_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function $i(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=et(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(t,e){return lr(t,"POST","/v1/accounts:delete",e)}async function M_(t,e){return lr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function U_(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=_u(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ur(Js(i.auth_time)),issuedAtTime:Ur(Js(i.iat)),expirationTime:Ur(Js(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Js(t){return Number(t)*1e3}function _u(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zi("JWT malformed, contained fewer than 3 sections"),null;try{const i=uu(n);return i?JSON.parse(i):(Zi("Failed to decode base64 JWT payload"),null)}catch(i){return Zi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function b_(t){const e=_u(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qe&&F_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function F_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $_=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Np=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ur(this.lastLoginAt),this.creationTime=Ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ii(t,M_(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?B_(o.providerUserInfo):[],a=j_(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Np(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function z_(t){const e=Oe(t);await bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function B_(t){return t.map(e=>{var{providerId:n}=e,r=sr(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(t,e){const n=await Rp(t,{},async()=>{const r=Xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Pp(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id=class al{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):b_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await V_(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new al;return r&&(D(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(D(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new al,this.toJSON())}_performRefresh(){return at("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let ll=class eo{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=sr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Np(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return U_(this,e)}reload(){return z_(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new eo(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ii(this,x_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:y,isAnonymous:k,providerData:R,stsTokenManager:N}=n;D(p&&N,e,"internal-error");const A=id.fromJSON(this.name,N);D(typeof p=="string",e,"internal-error"),wt(f,e.name),wt(m,e.name),D(typeof y=="boolean",e,"internal-error"),D(typeof k=="boolean",e,"internal-error"),wt(v,e.name),wt(_,e.name),wt(g,e.name),wt(T,e.name),wt(h,e.name),wt(d,e.name);const z=new eo({uid:p,auth:e,email:m,emailVerified:y,displayName:f,isAnonymous:k,photoURL:_,phoneNumber:v,tenantId:g,stsTokenManager:A,createdAt:h,lastLoginAt:d});return R&&Array.isArray(R)&&(z.providerData=R.map(M=>Object.assign({},M))),T&&(z._redirectEventId=T),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new id;i.updateFromServerResponse(n);const o=new eo({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bo(o),o}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Map;function lt(t){vt(t instanceof Function,"Expected a class definition");let e=od.get(t);return e?(vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,od.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ap=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};Ap.type="NONE";const sd=Ap;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t,e,n){return`firebase:${t}:${e}:${n}`}let ad=class no{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=to(this.userKey,i.apiKey,o),this.fullPersistenceKey=to("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ll._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new no(lt(sd),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||lt(sd);const s=to(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=ll._fromJSON(e,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new no(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new no(o,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Op(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mp(e))return"Blackberry";if(Up(e))return"Webos";if(wu(e))return"Safari";if((e.includes("chrome/")||Lp(e))&&!e.includes("edge/"))return"Chrome";if(xp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Op(t=V()){return/firefox\//i.test(t)}function wu(t=V()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lp(t=V()){return/crios\//i.test(t)}function Dp(t=V()){return/iemobile/i.test(t)}function xp(t=V()){return/android/i.test(t)}function Mp(t=V()){return/blackberry/i.test(t)}function Up(t=V()){return/webos/i.test(t)}function ss(t=V()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function H_(t=V()){var e;return ss(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function W_(){return sp()&&document.documentMode===10}function bp(t=V()){return ss(t)||xp(t)||Up(t)||Mp(t)||/windows phone/i.test(t)||Dp(t)}function K_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t,e=[]){let n;switch(t){case"Browser":n=ld(V());break;case"Worker":n=`${ld(V())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zt}/${r}`}async function $p(t,e){return lr(t,"GET","/v2/recaptchaConfig",ar(t,e))}function ud(t){return t!==void 0&&t.enterprise!==void 0}let zp=class{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=et("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",G_().appendChild(r)})}function q_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const J_="https://www.google.com/recaptcha/enterprise.js?render=",Q_="recaptcha-enterprise",Y_="NO_RECAPTCHA";let Bp=class{constructor(e){this.type=Q_,this.auth=kn(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{$p(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new zp(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;ud(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(Y_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&ud(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}jp(J_+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}};async function Fo(t,e,n,r=!1){const i=new Bp(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X_=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z_=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cd(this),this.idTokenSubscription=new cd(this),this.beforeStateQueue=new X_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ad.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}async initializeRecaptchaConfig(){const e=await $p(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new zp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Bp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await ad.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return D(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&C_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}};function kn(t){return Oe(t)}let cd=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=ap(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t,e){const n=cp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Lo(o,e??{}))return i;$e(i,"already-initialized")}return n.initialize({options:e})}function tw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nw(t,e,n){const r=kn(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Vp(e),{host:s,port:a}=rw(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||iw()}function Vp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rw(t){const e=Vp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:dd(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:dd(s)}}}function dd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,n){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}};async function ow(t,e){return lr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(t,e){return pi(t,"POST","/v1/accounts:signInWithPassword",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(t,e){return pi(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}async function aw(t,e){return pi(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Iu{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new oi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Fo(e,r,"signInWithPassword");return Qs(e,i)}else return Qs(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await Fo(e,r,"signInWithPassword");return Qs(e,o)}else return Promise.reject(i)});case"emailLink":return sw(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ow(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aw(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e){return pi(t,"POST","/v1/accounts:signInWithIdp",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="http://localhost";let as=class ul extends Iu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ul(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=sr(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ul(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Hn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hn(e,n)}buildRequest(){const e={requestUri:lw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xt(n)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cw(t){const e=Sr(Tr(t)).link,n=e?Sr(Tr(e)).deep_link_id:null,r=Sr(Tr(t)).deep_link_id;return(r?Sr(Tr(r)).link:null)||r||n||e||t}class Eu{constructor(e){var n,r,i,o,s,a;const l=Sr(Tr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=uw((i=l.mode)!==null&&i!==void 0?i:null);D(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=cw(e);try{return new Eu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.providerId=ur.PROVIDER_ID}static credential(e,n){return oi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Eu.parseLink(n);return D(r,"argument-error"),oi._fromEmailAndCode(e,r.code,r.tenantId)}}ur.PROVIDER_ID="password";ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi=class extends ku{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends mi{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return it.credential(n,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends mi{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends mi{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e){return pi(t,"POST","/v1/accounts:signUp",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls=class cl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await ll._fromIdTokenResponse(e,r,i),s=fd(r);return new cl({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fd(r);return new cl({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function fd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dw=class dl extends qe{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dl.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dl(e,n,r,i)}};function Hp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?dw._fromErrorAndOperation(t,o,e,r):o})}async function fw(t,e,n=!1){const r=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await ii(t,Hp(r,i,e,t),n);D(o.idToken,r,"internal-error");const s=_u(o.idToken);D(s,r,"internal-error");const{sub:a}=s;return D(t.uid===a,r,"user-mismatch"),ls._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(t,e,n=!1){const r="signIn",i=await Hp(t,r,e),o=await ls._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function pw(t,e){return Wp(kn(t),e)}async function mw(t,e,n){var r;const i=kn(t),o={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Fo(i,o,"signUpPassword");s=Ys(i,u)}else s=Ys(i,o).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Fo(i,o,"signUpPassword");return Ys(i,c)}else return Promise.reject(u)});const a=await s.catch(u=>Promise.reject(u)),l=await ls._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function vw(t,e,n){return pw(Oe(t),ur.credential(e,n))}function gw(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function yw(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function _w(t){return Oe(t).signOut()}const $o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(){const t=V();return wu(t)||ss(t)}const Iw=1e3,Ew=10;class Gp extends Kp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ww()&&K_(),this.fallbackToPolling=bp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);W_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ew):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gp.type="LOCAL";const kw=Gp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp extends Kp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qp.type="SESSION";const Jp=qp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new us(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Sw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}us.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Su("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function Cw(t){tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Rw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Nw(){return Qp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="firebaseLocalStorageDb",Aw=1,zo="firebaseLocalStorage",Xp="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cs(t,e){return t.transaction([zo],e?"readwrite":"readonly").objectStore(zo)}function Ow(){const t=indexedDB.deleteDatabase(Yp);return new vi(t).toPromise()}function fl(){const t=indexedDB.open(Yp,Aw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zo,{keyPath:Xp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zo)?e(r):(r.close(),await Ow(),e(await fl()))})})}async function hd(t,e,n){const r=cs(t,!0).put({[Xp]:e,value:n});return new vi(r).toPromise()}async function Lw(t,e){const n=cs(t,!1).get(e),r=await new vi(n).toPromise();return r===void 0?null:r.value}function pd(t,e){const n=cs(t,!0).delete(e);return new vi(n).toPromise()}const Dw=800,xw=3;class Zp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=us._getInstance(Nw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Rw(),!this.activeServiceWorker)return;this.sender=new Tw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fl();return await hd(e,$o,"1"),await pd(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Lw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=cs(i,!1).getAll();return new vi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zp.type="LOCAL";const Mw=Zp;new hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t,e){return e?lt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu=class extends Iu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function Uw(t){return Wp(t.auth,new Tu(t),t.bypassAuthState)}function bw(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),hw(n,new Tu(t),t.bypassAuthState)}async function Fw(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),fw(n,new Tu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tm=class{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uw;case"linkViaPopup":case"linkViaRedirect":return Fw;case"reauthViaPopup":case"reauthViaRedirect":return bw;default:$e(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new hi(2e3,1e4);async function zw(t,e,n){const r=kn(t);R_(t,e,ku);const i=em(r,n);return new cn(r,"signInViaPopup",e,i).executeNotNull()}class cn extends tm{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=Su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$w.get())};e()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="pendingRedirect",ro=new Map;class Bw extends tm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ro.get(this.auth._key());if(!e){try{const r=await Vw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ro.set(this.auth._key(),e)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vw(t,e){const n=Kw(e),r=Ww(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Hw(t,e){ro.set(t._key(),e)}function Ww(t){return lt(t._redirectPersistence)}function Kw(t){return to(jw,t.config.apiKey,t.name)}async function Gw(t,e,n=!1){const r=kn(t),i=em(r,e),s=await new Bw(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=10*60*1e3;let Jw=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qw&&this.cachedEventUids.clear(),this.cachedEventUids.has(md(e))}saveEventToCache(e){this.cachedEventUids.add(md(e)),this.lastProcessedEventTime=Date.now()}};function md(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(t,e={}){return lr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zw=/^https?/;async function eI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yw(t);for(const n of e)try{if(tI(n))return}catch{}$e(t,"unauthorized-domain")}function tI(t){const e=sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Zw.test(n))return!1;if(Xw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new hi(3e4,6e4);function vd(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rI(t){return new Promise((e,n)=>{var r,i,o;function s(){vd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vd(),n(et(t,"network-request-failed"))},timeout:nI.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=tt().gapi)===null||o===void 0)&&o.load)s();else{const a=q_("iframefcb");return tt()[a]=()=>{gapi.load?s():n(et(t,"network-request-failed"))},jp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw io=null,e})}let io=null;function iI(t){return io=io||rI(t),io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new hi(5e3,15e3),sI="__/auth/iframe",aI="emulator/auth/iframe",lI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cI(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yu(e,aI):`https://${t.config.authDomain}/${sI}`,r={apiKey:e.apiKey,appName:t.name,v:Zt},i=uI.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Xt(r).slice(1)}`}async function dI(t){const e=await iI(t),n=tt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:cI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lI,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=et(t,"network-request-failed"),a=tt().setTimeout(()=>{o(s)},oI.get());function l(){tt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hI=500,pI=600,mI="_blank",vI="http://localhost";class gd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gI(t,e,n,r=hI,i=pI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fI),{width:r.toString(),height:i.toString(),top:o,left:s}),u=V().toLowerCase();n&&(a=Lp(u)?mI:n),Op(u)&&(e=e||vI,l.scrollbars="yes");const c=Object.entries(l).reduce((m,[v,_])=>`${m}${v}=${_},`,"");if(H_(u)&&a!=="_self")return yI(e||"",a),new gd(null);const f=window.open(e||"",a,c);D(f,t,"popup-blocked");try{f.focus()}catch{}return new gd(f)}function yI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="__/auth/handler",wI="emulator/auth/handler",II=encodeURIComponent("fac");async function yd(t,e,n,r,i,o){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zt,eventId:i};if(e instanceof ku){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",vy(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(e instanceof mi){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${II}=${encodeURIComponent(l)}`:"";return`${EI(t)}?${Xt(a).slice(1)}${u}`}function EI({config:t}){return t.emulator?yu(t,wI):`https://${t.authDomain}/${_I}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="webStorageSupport";class kI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jp,this._completeRedirectFn=Gw,this._overrideRedirectResult=Hw}async _openPopup(e,n,r,i){var o;vt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await yd(e,n,r,sl(),i);return gI(e,s,Su())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await yd(e,n,r,sl(),i);return Cw(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(vt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dI(e),r=new Jw(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xs,{type:Xs},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Xs];s!==void 0&&n(!!s),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bp()||wu()||ss()}}const SI=kI;var _d="@firebase/auth",wd="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TI=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RI(t){_n(new Gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;D(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fp(t)},u=new Z_(r,i,o,l);return tw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new Gt("auth-internal",e=>{const n=kn(e.getProvider("auth").getImmediate());return(r=>new TI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(_d,wd,CI(t)),Vt(_d,wd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=5*60,NI=np("authIdTokenMaxAge")||PI;let Id=null;const AI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NI)return;const i=n==null?void 0:n.token;Id!==i&&(Id=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ds(t=m0()){const e=cp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ew(t,{popupRedirectResolver:SI,persistence:[Mw,kw,Jp]}),r=np("authTokenSyncURL");if(r){const o=AI(r);yw(n,o,()=>o(n.currentUser)),gw(n,s=>o(s))}const i=uy("auth");return i&&nw(n,`http://${i}`),n}RI("Browser");const OI=()=>{const t=ds();return O.jsxs(O.Fragment,{children:[O.jsx("div",{children:"Homepage"}),O.jsx("button",{onClick:()=>_w(t),children:"Sign out"})]})},LI=()=>{const t=ds(),e=vu(),[n,r]=S.useState(!1),[i,o]=S.useState(""),[s,a]=S.useState(""),l=c=>{c.preventDefault(),vw(t,i,s).then(f=>{console.log(f)}).catch(f=>{console.log(f)})},u=async()=>{r(!0),zw(t,new it).then(c=>{console.log(c.user.uid),e("/react-ts-caps/homepage")}).catch(c=>{console.log(c),r(!1)})};return O.jsxs(O.Fragment,{children:[O.jsx("div",{children:"Login"}),O.jsxs("form",{method:"post",onSubmit:l,children:[O.jsx("input",{type:"text",onChange:c=>o(c.target.value),value:i,className:"hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto"}),O.jsx("input",{type:"password",onChange:c=>a(c.target.value),value:s,className:"hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto"}),O.jsx("button",{type:"submit",className:"border-neutral-200 mb-4",children:"Log in"})]}),O.jsx("button",{onClick:()=>{u()},disabled:n,children:"Sign in with Google"})]})};var Ed="__sak";function rm(){var t;return t={},t["dependent-sdk-initialized-before-auth"]="Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",t}var DI=rm,hl=new Yt("auth","Firebase",rm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wn=new du("@firebase/auth");function xI(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];Wn.logLevel<=j.WARN&&Wn.warn.apply(Wn,Ue(["Auth (".concat(Zt,"): ").concat(t)],e,!1))}function oo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];Wn.logLevel<=j.ERROR&&Wn.error.apply(Wn,Ue(["Auth (".concat(Zt,"): ").concat(t)],e,!1))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];throw Cu.apply(void 0,Ue([t],e,!1))}function fs(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return Cu.apply(void 0,Ue([t],e,!1))}function MI(t,e,n){var r,i=K(K({},DI()),(r={},r[e]=n,r)),o=new Yt("auth","Firebase",i);return o.create(e,{appName:t.name})}function Cu(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(typeof t!="string"){var i=n[0],o=Ue([],n.slice(1),!0);return o[0]&&(o[0].appName=t.name),(e=t._errorFactory).create.apply(e,Ue([i],o,!1))}return hl.create.apply(hl,Ue([t],n,!1))}function b(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!t)throw Cu.apply(void 0,Ue([e],n,!1))}function ut(t){var e="INTERNAL ASSERTION FAILED: "+t;throw oo(e),new Error(e)}function Zn(t,e){t||ut(e)}function UI(){return kd()==="http:"||kd()==="https:"}function kd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UI()||ip()||"connection"in navigator)?navigator.onLine:!0}function FI(){if(typeof navigator>"u")return null;var t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $I=function(){function t(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=rp()||op()}return t.prototype.get=function(){return bI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t,e){Zn(t.emulator,"Emulator should always be set here");var n=t.emulator.url;return e?"".concat(n).concat(e.startsWith("/")?e.slice(1):e):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var im=function(){function t(){}return t.initialize=function(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)},t.fetch=function(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.headers=function(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t.response=function(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,jI=(L={},L.CREDENTIAL_MISMATCH="custom-token-mismatch",L.MISSING_CUSTOM_TOKEN="internal-error",L.INVALID_IDENTIFIER="invalid-email",L.MISSING_CONTINUE_URI="internal-error",L.INVALID_PASSWORD="wrong-password",L.MISSING_PASSWORD="missing-password",L.EMAIL_EXISTS="email-already-in-use",L.PASSWORD_LOGIN_DISABLED="operation-not-allowed",L.INVALID_IDP_RESPONSE="invalid-credential",L.INVALID_PENDING_TOKEN="invalid-credential",L.FEDERATED_USER_ID_ALREADY_LINKED="credential-already-in-use",L.MISSING_REQ_TYPE="internal-error",L.EMAIL_NOT_FOUND="user-not-found",L.RESET_PASSWORD_EXCEED_LIMIT="too-many-requests",L.EXPIRED_OOB_CODE="expired-action-code",L.INVALID_OOB_CODE="invalid-action-code",L.MISSING_OOB_CODE="internal-error",L.CREDENTIAL_TOO_OLD_LOGIN_AGAIN="requires-recent-login",L.INVALID_ID_TOKEN="invalid-user-token",L.TOKEN_EXPIRED="user-token-expired",L.USER_NOT_FOUND="user-token-expired",L.TOO_MANY_ATTEMPTS_TRY_LATER="too-many-requests",L.INVALID_CODE="invalid-verification-code",L.INVALID_SESSION_INFO="invalid-verification-id",L.INVALID_TEMPORARY_PROOF="invalid-credential",L.MISSING_SESSION_INFO="missing-verification-id",L.SESSION_EXPIRED="code-expired",L.MISSING_ANDROID_PACKAGE_NAME="missing-android-pkg-name",L.UNAUTHORIZED_DOMAIN="unauthorized-continue-uri",L.INVALID_OAUTH_CLIENT_ID="invalid-oauth-client-id",L.ADMIN_ONLY_OPERATION="admin-restricted-operation",L.INVALID_MFA_PENDING_CREDENTIAL="invalid-multi-factor-session",L.MFA_ENROLLMENT_NOT_FOUND="multi-factor-info-not-found",L.MISSING_MFA_ENROLLMENT_ID="missing-multi-factor-info",L.MISSING_MFA_PENDING_CREDENTIAL="missing-multi-factor-session",L.SECOND_FACTOR_EXISTS="second-factor-already-in-use",L.SECOND_FACTOR_LIMIT_EXCEEDED="maximum-second-factor-count-exceeded",L.BLOCKING_FUNCTION_ERROR_RESPONSE="internal-error",L.RECAPTCHA_NOT_ENABLED="recaptcha-not-enabled",L.MISSING_RECAPTCHA_TOKEN="missing-recaptcha-token",L.INVALID_RECAPTCHA_TOKEN="invalid-recaptcha-token",L.INVALID_RECAPTCHA_ACTION="invalid-recaptcha-action",L.MISSING_CLIENT_TYPE="missing-client-type",L.MISSING_RECAPTCHA_VERSION="missing-recaptcha-version",L.INVALID_RECAPTCHA_VERSION="invalid-recaptcha-version",L.INVALID_REQ_TYPE="invalid-req-type",L);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var BI=new $I(3e4,6e4);function en(t,e){return t.tenantId&&!e.tenantId?K(K({},e),{tenantId:t.tenantId}):e}function gi(t,e,n,r,i){return i===void 0&&(i={}),I(this,void 0,void 0,function(){var o=this;return E(this,function(s){return[2,om(t,i,function(){return I(o,void 0,void 0,function(){var a,l,u,c;return E(this,function(f){switch(f.label){case 0:return a={},l={},r&&(e==="GET"?l=r:a={body:JSON.stringify(r)}),u=Xt(K({key:t.config.apiKey},l)).slice(1),[4,t._getAdditionalHeaders()];case 1:return c=f.sent(),c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),[2,im.fetch()(sm(t,t.config.apiHost,n,u),K({method:e,headers:c,referrerPolicy:"no-referrer"},a))]}})})})]})})}function om(t,e,n){return I(this,void 0,void 0,function(){var r,i,o,s,a,l,u,c,f,m;return E(this,function(v){switch(v.label){case 0:t._canInitEmulator=!1,r=K(K({},jI),e),v.label=1;case 1:return v.trys.push([1,4,,5]),i=new VI(t),[4,Promise.race([n(),i.promise])];case 2:return o=v.sent(),i.clearNetworkTimeout(),[4,o.json()];case 3:if(s=v.sent(),"needConfirmation"in s)throw Cr(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return[2,s];if(a=o.ok?s.errorMessage:s.error.message,l=a.split(" : "),u=l[0],c=l[1],u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cr(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw Cr(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw Cr(t,"user-disabled",s);if(f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-"),c)throw MI(t,f,c);return gt(t,f),[3,5];case 4:if(m=v.sent(),m instanceof qe)throw m;return gt(t,"network-request-failed",{message:String(m)}),[3,5];case 5:return[2]}})})}function Sn(t,e,n,r,i){return i===void 0&&(i={}),I(this,void 0,void 0,function(){var o;return E(this,function(s){switch(s.label){case 0:return[4,gi(t,e,n,r,i)];case 1:return o=s.sent(),"mfaPendingCredential"in o&&gt(t,"multi-factor-auth-required",{_serverResponse:o}),[2,o]}})})}function sm(t,e,n,r){var i="".concat(e).concat(n,"?").concat(r);return t.config.emulator?zI(t.config,i):"".concat(t.config.apiScheme,"://").concat(i)}var VI=function(){function t(e){var n=this;this.auth=e,this.timer=null,this.promise=new Promise(function(r,i){n.timer=setTimeout(function(){return i(fs(n.auth,"network-request-failed"))},BI.get())})}return t.prototype.clearNetworkTimeout=function(){clearTimeout(this.timer)},t}();function Cr(t,e,n){var r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=fs(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t,e){return I(this,void 0,void 0,function(){return E(this,function(n){return[2,gi(t,"POST","/v1/accounts:delete",e)]})})}function WI(t,e){return I(this,void 0,void 0,function(){return E(this,function(n){return[2,gi(t,"POST","/v1/accounts:lookup",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){if(t)try{var e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}function KI(t,e){return e===void 0&&(e=!1),I(this,void 0,void 0,function(){var n,r,i,o,s;return E(this,function(a){switch(a.label){case 0:return n=Oe(t),[4,n.getIdToken(e)];case 1:return r=a.sent(),i=Ru(r),b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error"),o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider,[2,{claims:i,token:r,authTime:br(Zs(i.auth_time)),issuedAtTime:br(Zs(i.iat)),expirationTime:br(Zs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}]}})})}function Zs(t){return Number(t)*1e3}function Ru(t){var e=t.split("."),n=e[0],r=e[1],i=e[2];if(n===void 0||r===void 0||i===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{var o=uu(r);return o?JSON.parse(o):(oo("Failed to decode base64 JWT payload"),null)}catch(s){return oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function GI(t){var e=Ru(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t,e,n){return n===void 0&&(n=!1),I(this,void 0,void 0,function(){var r;return E(this,function(i){switch(i.label){case 0:if(n)return[2,e];i.label=1;case 1:return i.trys.push([1,3,,6]),[4,e];case 2:return[2,i.sent()];case 3:return r=i.sent(),r instanceof qe&&qI(r)?t.auth.currentUser!==t?[3,5]:[4,t.auth.signOut()]:[3,5];case 4:i.sent(),i.label=5;case 5:throw r;case 6:return[2]}})})}function qI(t){var e=t.code;return e==="auth/".concat("user-disabled")||e==="auth/".concat("user-token-expired")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var JI=function(){function t(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t.prototype._start=function(){this.isRunning||(this.isRunning=!0,this.schedule())},t.prototype._stop=function(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))},t.prototype.getInterval=function(e){var n;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;var i=(n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0,r=i-Date.now()-3e5;return Math.max(0,r)}},t.prototype.schedule=function(e){var n=this;if(e===void 0&&(e=!1),!!this.isRunning){var r=this.getInterval(e);this.timerId=setTimeout(function(){return I(n,void 0,void 0,function(){return E(this,function(i){switch(i.label){case 0:return[4,this.iteration()];case 1:return i.sent(),[2]}})})},r)}},t.prototype.iteration=function(){return I(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.user.getIdToken(!0)];case 1:return n.sent(),[3,3];case 2:return e=n.sent(),(e==null?void 0:e.code)==="auth/".concat("network-request-failed")&&this.schedule(!0),[2];case 3:return this.schedule(),[2]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var am=function(){function t(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}return t.prototype._initializeTime=function(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)},t.prototype._copy=function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()},t.prototype.toJSON=function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){var e;return I(this,void 0,void 0,function(){var n,r,i,o,s,a,l,u,c,f;return E(this,function(m){switch(m.label){case 0:return n=t.auth,[4,t.getIdToken()];case 1:return r=m.sent(),[4,si(t,WI(n,{idToken:r}))];case 2:return i=m.sent(),b(i==null?void 0:i.users.length,n,"internal-error"),o=i.users[0],t._notifyReloadListener(o),s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?XI(o.providerUserInfo):[],a=YI(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new am(o.createdAt,o.lastLoginAt),isAnonymous:c},Object.assign(t,f),[2]}})})}function QI(t){return I(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return e=Oe(t),[4,jo(e)];case 1:return n.sent(),[4,e.auth._persistUserIfCurrent(e)];case 2:return n.sent(),e.auth._notifyListenersIfCurrent(e),[2]}})})}function YI(t,e){var n=t.filter(function(r){return!e.some(function(i){return i.providerId===r.providerId})});return Ue(Ue([],n,!0),e,!0)}function XI(t){return t.map(function(e){var n=e.providerId,r=sr(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e){return I(this,void 0,void 0,function(){var n,r=this;return E(this,function(i){switch(i.label){case 0:return[4,om(t,{},function(){return I(r,void 0,void 0,function(){var o,s,a,l,u,c;return E(this,function(f){switch(f.label){case 0:return o=Xt({grant_type:"refresh_token",refresh_token:e}).slice(1),s=t.config,a=s.tokenApiHost,l=s.apiKey,u=sm(t,a,"/v1/token","key=".concat(l)),[4,t._getAdditionalHeaders()];case 1:return c=f.sent(),c["Content-Type"]="application/x-www-form-urlencoded",[2,im.fetch()(u,{method:"POST",headers:c,body:o})]}})})})];case 1:return n=i.sent(),[2,{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sd=function(){function t(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return Object.defineProperty(t.prototype,"isExpired",{get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4},enumerable:!1,configurable:!0}),t.prototype.updateFromServerResponse=function(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");var n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):GI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)},t.prototype.getToken=function(e,n){return n===void 0&&(n=!1),I(this,void 0,void 0,function(){return E(this,function(r){switch(r.label){case 0:return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?[2,this.accessToken]:this.refreshToken?[4,this.refresh(e,this.refreshToken)]:[3,2];case 1:return r.sent(),[2,this.accessToken];case 2:return[2,null]}})})},t.prototype.clearRefreshToken=function(){this.refreshToken=null},t.prototype.refresh=function(e,n){return I(this,void 0,void 0,function(){var r,i,o,s;return E(this,function(a){switch(a.label){case 0:return[4,ZI(e,n)];case 1:return r=a.sent(),i=r.accessToken,o=r.refreshToken,s=r.expiresIn,this.updateTokensAndExpiration(i,o,Number(s)),[2]}})})},t.prototype.updateTokensAndExpiration=function(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3},t.fromJSON=function(e,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,s=new t;return r&&(b(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(b(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s},t.prototype.toJSON=function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}},t.prototype._assign=function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime},t.prototype._clone=function(){return Object.assign(new t,this.toJSON())},t.prototype._performRefresh=function(){return ut("not implemented")},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var pl=function(){function t(e){var n=e.uid,r=e.auth,i=e.stsTokenManager,o=sr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?Ue([],o.providerData,!0):[],this.metadata=new am(o.createdAt||void 0,o.lastLoginAt||void 0)}return t.prototype.getIdToken=function(e){return I(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return[4,si(this,this.stsTokenManager.getToken(this.auth,e))];case 1:return n=r.sent(),b(n,this.auth,"internal-error"),this.accessToken===n?[3,3]:(this.accessToken=n,[4,this.auth._persistUserIfCurrent(this)]);case 2:r.sent(),this.auth._notifyListenersIfCurrent(this),r.label=3;case 3:return[2,n]}})})},t.prototype.getIdTokenResult=function(e){return KI(this,e)},t.prototype.reload=function(){return QI(this)},t.prototype._assign=function(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(function(n){return K({},n)}),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))},t.prototype._clone=function(e){var n=new t(K(K({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n},t.prototype._onReload=function(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)},t.prototype._notifyReloadListener=function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e},t.prototype._startProactiveRefresh=function(){this.proactiveRefresh._start()},t.prototype._stopProactiveRefresh=function(){this.proactiveRefresh._stop()},t.prototype._updateTokensIfNecessary=function(e,n){return n===void 0&&(n=!1),I(this,void 0,void 0,function(){var r;return E(this,function(i){switch(i.label){case 0:return r=!1,e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n?[4,jo(this)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[4,this.auth._persistUserIfCurrent(this)];case 3:return i.sent(),r&&this.auth._notifyListenersIfCurrent(this),[2]}})})},t.prototype.delete=function(){return I(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return[4,this.getIdToken()];case 1:return e=n.sent(),[4,si(this,HI(this.auth,{idToken:e}))];case 2:return n.sent(),this.stsTokenManager.clearRefreshToken(),[2,this.auth.signOut()]}})})},t.prototype.toJSON=function(){return K(K({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(function(e){return K({},e)}),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})},Object.defineProperty(t.prototype,"refreshToken",{get:function(){return this.stsTokenManager.refreshToken||""},enumerable:!1,configurable:!0}),t._fromJSON=function(e,n){var r,i,o,s,a,l,u,c,f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,p=n.uid,y=n.emailVerified,k=n.isAnonymous,R=n.providerData,N=n.stsTokenManager;b(p&&N,e,"internal-error");var A=Sd.fromJSON(this.name,N);b(typeof p=="string",e,"internal-error"),It(f,e.name),It(m,e.name),b(typeof y=="boolean",e,"internal-error"),b(typeof k=="boolean",e,"internal-error"),It(v,e.name),It(_,e.name),It(g,e.name),It(T,e.name),It(h,e.name),It(d,e.name);var z=new t({uid:p,auth:e,email:m,emailVerified:y,displayName:f,isAnonymous:k,photoURL:_,phoneNumber:v,tenantId:g,stsTokenManager:A,createdAt:h,lastLoginAt:d});return R&&Array.isArray(R)&&(z.providerData=R.map(function(M){return K({},M)})),T&&(z._redirectEventId=T),z},t._fromIdTokenResponse=function(e,n,r){return r===void 0&&(r=!1),I(this,void 0,void 0,function(){var i,o;return E(this,function(s){switch(s.label){case 0:return i=new Sd,i.updateFromServerResponse(n),o=new t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r}),[4,jo(o)];case 1:return s.sent(),[2,o]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Td=new Map;function Lt(t){Zn(t instanceof Function,"Expected a class definition");var e=Td.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Td.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eE=function(){function t(){this.type="NONE",this.storage={}}return t.prototype._isAvailable=function(){return I(this,void 0,void 0,function(){return E(this,function(e){return[2,!0]})})},t.prototype._set=function(e,n){return I(this,void 0,void 0,function(){return E(this,function(r){return this.storage[e]=n,[2]})})},t.prototype._get=function(e){return I(this,void 0,void 0,function(){var n;return E(this,function(r){return n=this.storage[e],[2,n===void 0?null:n]})})},t.prototype._remove=function(e){return I(this,void 0,void 0,function(){return E(this,function(n){return delete this.storage[e],[2]})})},t.prototype._addListener=function(e,n){},t.prototype._removeListener=function(e,n){},t.type="NONE",t}(),Cd=eE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t,e,n){return"".concat("firebase",":").concat(t,":").concat(e,":").concat(n)}var Rd=function(){function t(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;var i=this.auth,o=i.config,s=i.name;this.fullUserKey=so(this.userKey,o.apiKey,s),this.fullPersistenceKey=so("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t.prototype.setCurrentUser=function(e){return this.persistence._set(this.fullUserKey,e.toJSON())},t.prototype.getCurrentUser=function(){return I(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return[4,this.persistence._get(this.fullUserKey)];case 1:return e=n.sent(),[2,e?pl._fromJSON(this.auth,e):null]}})})},t.prototype.removeCurrentUser=function(){return this.persistence._remove(this.fullUserKey)},t.prototype.savePersistenceForRedirect=function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)},t.prototype.setPersistence=function(e){return I(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return this.persistence===e?[2]:[4,this.getCurrentUser()];case 1:return n=r.sent(),[4,this.removeCurrentUser()];case 2:return r.sent(),this.persistence=e,n?[2,this.setCurrentUser(n)]:[2]}})})},t.prototype.delete=function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)},t.create=function(e,n,r){return r===void 0&&(r="authUser"),I(this,void 0,void 0,function(){var i,o,s,a,l,u,c,f,m,v,_=this;return E(this,function(g){switch(g.label){case 0:return n.length?[4,Promise.all(n.map(function(T){return I(_,void 0,void 0,function(){return E(this,function(h){switch(h.label){case 0:return[4,T._isAvailable()];case 1:return h.sent()?[2,T]:[2,void 0]}})})}))]:[2,new t(Lt(Cd),e,r)];case 1:i=g.sent().filter(function(T){return T}),o=i[0]||Lt(Cd),s=so(r,e.config.apiKey,e.name),a=null,l=0,u=n,g.label=2;case 2:if(!(l<u.length))return[3,7];c=u[l],g.label=3;case 3:return g.trys.push([3,5,,6]),[4,c._get(s)];case 4:return f=g.sent(),f?(m=pl._fromJSON(e,f),c!==o&&(a=m),o=c,[3,7]):[3,6];case 5:return g.sent(),[3,6];case 6:return l++,[3,2];case 7:return v=i.filter(function(T){return T._shouldAllowMigration}),!o._shouldAllowMigration||!v.length?[2,new t(o,e,r)]:(o=v[0],a?[4,o._set(s,a.toJSON())]:[3,9]);case 8:g.sent(),g.label=9;case 9:return[4,Promise.all(n.map(function(T){return I(_,void 0,void 0,function(){return E(this,function(h){switch(h.label){case 0:if(T===o)return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,T._remove(s)];case 2:return h.sent(),[3,4];case 3:return h.sent(),[3,4];case 4:return[2]}})})}))];case 10:return g.sent(),[2,new t(o,e,r)]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t){var e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(um(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dm(e))return"Blackberry";if(fm(e))return"Webos";if(lm(e))return"Safari";if((e.includes("chrome/")||nE(e))&&!e.includes("edge/"))return"Chrome";if(cm(e))return"Android";var n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);return(r==null?void 0:r.length)===2?r[1]:"Other"}function tE(t){return t===void 0&&(t=V()),/firefox\//i.test(t)}function lm(t){t===void 0&&(t=V());var e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nE(t){return t===void 0&&(t=V()),/crios\//i.test(t)}function um(t){return t===void 0&&(t=V()),/iemobile/i.test(t)}function cm(t){return t===void 0&&(t=V()),/android/i.test(t)}function dm(t){return t===void 0&&(t=V()),/blackberry/i.test(t)}function fm(t){return t===void 0&&(t=V()),/webos/i.test(t)}function hm(t){return t===void 0&&(t=V()),/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rE(){return sp()&&document.documentMode===10}function iE(t){return t===void 0&&(t=V()),hm(t)||cm(t)||fm(t)||dm(t)||/windows phone/i.test(t)||um(t)}function oE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){e===void 0&&(e=[]);var n;switch(t){case"Browser":n=Pd(V());break;case"Worker":n="".concat(Pd(V()),"-").concat(t);break;default:n=t}var r=e.length?e.join(","):"FirebaseCore-web";return"".concat(n,"/").concat("JsCore","/").concat(Zt,"/").concat(r)}function mm(t,e){return I(this,void 0,void 0,function(){return E(this,function(n){return[2,gi(t,"GET","/v2/recaptchaConfig",en(t,e))]})})}function Nd(t){return t!==void 0&&t.enterprise!==void 0}var vm=function(){function t(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(function(n){return n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF"})}return t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function aE(t){return new Promise(function(e,n){var r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=function(i){var o=fs("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",sE().appendChild(r)})}var lE="https://www.google.com/recaptcha/enterprise.js?render=",uE="recaptcha-enterprise",cE="NO_RECAPTCHA",gm=function(){function t(e){this.type=uE,this.auth=ym(e)}return t.prototype.verify=function(e,n){return e===void 0&&(e="verify"),n===void 0&&(n=!1),I(this,void 0,void 0,function(){function r(s){return I(this,void 0,void 0,function(){var a=this;return E(this,function(l){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return[2,s._agentRecaptchaConfig.siteKey];if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return[2,s._tenantRecaptchaConfigs[s.tenantId].siteKey]}return[2,new Promise(function(u,c){return I(a,void 0,void 0,function(){return E(this,function(f){return mm(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(function(m){if(m.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{var v=new vm(m);return s.tenantId==null?s._agentRecaptchaConfig=v:s._tenantRecaptchaConfigs[s.tenantId]=v,u(v.siteKey)}}).catch(function(m){c(m)}),[2]})})})]})})}function i(s,a,l){var u=window.grecaptcha;Nd(u)?u.enterprise.ready(function(){u.enterprise.execute(s,{action:e}).then(function(c){a(c)}).catch(function(){a(cE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}var o=this;return E(this,function(s){return[2,new Promise(function(a,l){r(o.auth).then(function(u){if(!n&&Nd(window.grecaptcha))i(u,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}aE(lE+u).then(function(){i(u,a,l)}).catch(function(c){l(c)})}}).catch(function(u){l(u)})})]})})},t}();function Ad(t,e,n,r){return r===void 0&&(r=!1),I(this,void 0,void 0,function(){var i,o,s;return E(this,function(a){switch(a.label){case 0:i=new gm(t),a.label=1;case 1:return a.trys.push([1,3,,5]),[4,i.verify(n)];case 2:return o=a.sent(),[3,5];case 3:return a.sent(),[4,i.verify(n,!0)];case 4:return o=a.sent(),[3,5];case 5:return s=K({},e),r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),[2,s]}})})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dE=function(){function t(e){this.auth=e,this.queue=[]}return t.prototype.pushCallback=function(e,n){var r=this,i=function(s){return new Promise(function(a,l){try{var u=e(s);a(u)}catch(c){l(c)}})};i.onAbort=n,this.queue.push(i);var o=this.queue.length-1;return function(){r.queue[o]=function(){return Promise.resolve()}}},t.prototype.runMiddleware=function(e){return I(this,void 0,void 0,function(){var n,r,i,o,s,a,l,u;return E(this,function(c){switch(c.label){case 0:if(this.auth.currentUser===e)return[2];n=[],c.label=1;case 1:c.trys.push([1,6,,7]),r=0,i=this.queue,c.label=2;case 2:return r<i.length?(o=i[r],[4,o(e)]):[3,5];case 3:c.sent(),o.onAbort&&n.push(o.onAbort),c.label=4;case 4:return r++,[3,2];case 5:return[3,7];case 6:for(s=c.sent(),n.reverse(),a=0,l=n;a<l.length;a++){u=l[a];try{u()}catch{}}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message});case 7:return[2]}})})},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fE=function(){function t(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Od(this),this.idTokenSubscription=new Od(this),this.beforeStateQueue=new dE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}return t.prototype._initializeWithPersistence=function(e,n){var r=this;return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(function(){return I(r,void 0,void 0,function(){var i,o,s;return E(this,function(a){switch(a.label){case 0:return this._deleted?[2]:(i=this,[4,Rd.create(this,e)]);case 1:if(i.persistenceManager=a.sent(),this._deleted)return[2];if(!(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively))return[3,5];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this._popupRedirectResolver._initialize(this)];case 3:return a.sent(),[3,5];case 4:return a.sent(),[3,5];case 5:return[4,this.initializeCurrentUser(n)];case 6:return a.sent(),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,this._deleted?[2]:(this._isInitialized=!0,[2])}})})}),this._initializationPromise},t.prototype._onStorageEvent=function(){return I(this,void 0,void 0,function(){var e;return E(this,function(n){switch(n.label){case 0:return this._deleted?[2]:[4,this.assertedPersistence.getCurrentUser()];case 1:return e=n.sent(),!this.currentUser&&!e?[2]:this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),[4,this.currentUser.getIdToken()]):[3,3];case 2:return n.sent(),[2];case 3:return[4,this._updateCurrentUser(e,!0)];case 4:return n.sent(),[2]}})})},t.prototype.initializeCurrentUser=function(e){var n;return I(this,void 0,void 0,function(){var r,i,o,s,a,l,u;return E(this,function(c){switch(c.label){case 0:return[4,this.assertedPersistence.getCurrentUser()];case 1:return r=c.sent(),i=r,o=!1,e&&this.config.authDomain?[4,this.getOrInitRedirectPersistenceManager()]:[3,4];case 2:return c.sent(),s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,[4,this.tryRedirectSignIn(e)];case 3:l=c.sent(),(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0),c.label=4;case 4:if(!i)return[2,this.directlySetCurrentUser(null)];if(i._redirectEventId)return[3,9];if(!o)return[3,8];c.label=5;case 5:return c.trys.push([5,7,,8]),[4,this.beforeStateQueue.runMiddleware(i)];case 6:return c.sent(),[3,8];case 7:return u=c.sent(),i=r,this._popupRedirectResolver._overrideRedirectResult(this,function(){return Promise.reject(u)}),[3,8];case 8:return i?[2,this.reloadAndSetCurrentUserOrClear(i)]:[2,this.directlySetCurrentUser(null)];case 9:return b(this._popupRedirectResolver,this,"argument-error"),[4,this.getOrInitRedirectPersistenceManager()];case 10:return c.sent(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?[2,this.directlySetCurrentUser(i)]:[2,this.reloadAndSetCurrentUserOrClear(i)]}})})},t.prototype.tryRedirectSignIn=function(e){return I(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:n=null,r.label=1;case 1:return r.trys.push([1,3,,5]),[4,this._popupRedirectResolver._completeRedirectFn(this,e,!0)];case 2:return n=r.sent(),[3,5];case 3:return r.sent(),[4,this._setRedirectUser(null)];case 4:return r.sent(),[3,5];case 5:return[2,n]}})})},t.prototype.reloadAndSetCurrentUserOrClear=function(e){return I(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,jo(e)];case 1:return r.sent(),[3,3];case 2:return n=r.sent(),(n==null?void 0:n.code)!=="auth/".concat("network-request-failed")?[2,this.directlySetCurrentUser(null)]:[3,3];case 3:return[2,this.directlySetCurrentUser(e)]}})})},t.prototype.useDeviceLanguage=function(){this.languageCode=FI()},t.prototype._delete=function(){return I(this,void 0,void 0,function(){return E(this,function(e){return this._deleted=!0,[2]})})},t.prototype.updateCurrentUser=function(e){return I(this,void 0,void 0,function(){var n;return E(this,function(r){return n=e?Oe(e):null,n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),[2,this._updateCurrentUser(n&&n._clone(this))]})})},t.prototype._updateCurrentUser=function(e,n){return n===void 0&&(n=!1),I(this,void 0,void 0,function(){var r=this;return E(this,function(i){switch(i.label){case 0:return this._deleted?[2]:(e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n?[3,2]:[4,this.beforeStateQueue.runMiddleware(e)]);case 1:i.sent(),i.label=2;case 2:return[2,this.queue(function(){return I(r,void 0,void 0,function(){return E(this,function(o){switch(o.label){case 0:return[4,this.directlySetCurrentUser(e)];case 1:return o.sent(),this.notifyAuthListeners(),[2]}})})})]}})})},t.prototype.signOut=function(){return I(this,void 0,void 0,function(){return E(this,function(e){switch(e.label){case 0:return[4,this.beforeStateQueue.runMiddleware(null)];case 1:return e.sent(),this.redirectPersistenceManager||this._popupRedirectResolver?[4,this._setRedirectUser(null)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2,this._updateCurrentUser(null,!0)]}})})},t.prototype.setPersistence=function(e){var n=this;return this.queue(function(){return I(n,void 0,void 0,function(){return E(this,function(r){switch(r.label){case 0:return[4,this.assertedPersistence.setPersistence(Lt(e))];case 1:return r.sent(),[2]}})})})},t.prototype.initializeRecaptchaConfig=function(){return I(this,void 0,void 0,function(){var e,n,r;return E(this,function(i){switch(i.label){case 0:return[4,mm(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"})];case 1:return e=i.sent(),n=new vm(e),this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&(r=new gm(this),r.verify()),[2]}})})},t.prototype._getRecaptchaConfig=function(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]},t.prototype._getPersistence=function(){return this.assertedPersistence.persistence.type},t.prototype._updateErrorMap=function(e){this._errorFactory=new Yt("auth","Firebase",e())},t.prototype.onAuthStateChanged=function(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)},t.prototype.beforeAuthStateChanged=function(e,n){return this.beforeStateQueue.pushCallback(e,n)},t.prototype.onIdTokenChanged=function(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)},t.prototype.toJSON=function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}},t.prototype._setRedirectUser=function(e,n){return I(this,void 0,void 0,function(){var r;return E(this,function(i){switch(i.label){case 0:return[4,this.getOrInitRedirectPersistenceManager(n)];case 1:return r=i.sent(),[2,e===null?r.removeCurrentUser():r.setCurrentUser(e)]}})})},t.prototype.getOrInitRedirectPersistenceManager=function(e){return I(this,void 0,void 0,function(){var n,r,i;return E(this,function(o){switch(o.label){case 0:return this.redirectPersistenceManager?[3,3]:(n=e&&Lt(e)||this._popupRedirectResolver,b(n,this,"argument-error"),r=this,[4,Rd.create(this,[Lt(n._redirectPersistence)],"redirectUser")]);case 1:return r.redirectPersistenceManager=o.sent(),i=this,[4,this.redirectPersistenceManager.getCurrentUser()];case 2:i.redirectUser=o.sent(),o.label=3;case 3:return[2,this.redirectPersistenceManager]}})})},t.prototype._redirectUserForId=function(e){var n,r;return I(this,void 0,void 0,function(){var i=this;return E(this,function(o){switch(o.label){case 0:return this._isInitialized?[4,this.queue(function(){return I(i,void 0,void 0,function(){return E(this,function(s){return[2]})})})]:[3,2];case 1:o.sent(),o.label=2;case 2:return((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?[2,this._currentUser]:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?[2,this.redirectUser]:[2,null]}})})},t.prototype._persistUserIfCurrent=function(e){return I(this,void 0,void 0,function(){var n=this;return E(this,function(r){return e===this.currentUser?[2,this.queue(function(){return I(n,void 0,void 0,function(){return E(this,function(i){return[2,this.directlySetCurrentUser(e)]})})})]:[2]})})},t.prototype._notifyListenersIfCurrent=function(e){e===this.currentUser&&this.notifyAuthListeners()},t.prototype._key=function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)},t.prototype._startProactiveRefresh=function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()},t.prototype._stopProactiveRefresh=function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()},Object.defineProperty(t.prototype,"_currentUser",{get:function(){return this.currentUser},enumerable:!1,configurable:!0}),t.prototype.notifyAuthListeners=function(){var e,n;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}},t.prototype.registerStateListener=function(e,n,r,i){var o=this;if(this._deleted)return function(){};var s=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return b(a,this,"internal-error"),a.then(function(){return s(o.currentUser)}),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)},t.prototype.directlySetCurrentUser=function(e){return I(this,void 0,void 0,function(){return E(this,function(n){switch(n.label){case 0:return this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?[4,this.assertedPersistence.setCurrentUser(e)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,this.assertedPersistence.removeCurrentUser()];case 3:n.sent(),n.label=4;case 4:return[2]}})})},t.prototype.queue=function(e){return this.operations=this.operations.then(e,e),this.operations},Object.defineProperty(t.prototype,"assertedPersistence",{get:function(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager},enumerable:!1,configurable:!0}),t.prototype._logFramework=function(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pm(this.config.clientPlatform,this._getFrameworks()))},t.prototype._getFrameworks=function(){return this.frameworks},t.prototype._getAdditionalHeaders=function(){var e;return I(this,void 0,void 0,function(){var n,r,i,o;return E(this,function(s){switch(s.label){case 0:return n=(o={},o["X-Client-Version"]=this.clientVersion,o),this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId),[4,(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader()];case 1:return r=s.sent(),r&&(n["X-Firebase-Client"]=r),[4,this._getAppCheckToken()];case 2:return i=s.sent(),i&&(n["X-Firebase-AppCheck"]=i),[2,n]}})})},t.prototype._getAppCheckToken=function(){var e;return I(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return[4,(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken()];case 1:return n=r.sent(),n!=null&&n.error&&xI("Error while retrieving App Check token: ".concat(n.error)),[2,n==null?void 0:n.token]}})})},t}();function ym(t){return Oe(t)}var Od=function(){function t(e){var n=this;this.auth=e,this.observer=null,this.addObserver=ap(function(r){return n.observer=r})}return Object.defineProperty(t.prototype,"next",{get:function(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)},enumerable:!1,configurable:!0}),t}();function hE(t,e){var n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yi=function(){function t(e,n){this.providerId=e,this.signInMethod=n}return t.prototype.toJSON=function(){return ut("not implemented")},t.prototype._getIdTokenResponse=function(e){return ut("not implemented")},t.prototype._linkToIdToken=function(e,n){return ut("not implemented")},t.prototype._getReauthenticationResolver=function(e){return ut("not implemented")},t}();function pE(t,e){return I(this,void 0,void 0,function(){return E(this,function(n){return[2,gi(t,"POST","/v1/accounts:update",e)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t,e){return I(this,void 0,void 0,function(){return E(this,function(n){return[2,Sn(t,"POST","/v1/accounts:signInWithPassword",en(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e){return I(this,void 0,void 0,function(){return E(this,function(n){return[2,Sn(t,"POST","/v1/accounts:signInWithEmailLink",en(t,e))]})})}function vE(t,e){return I(this,void 0,void 0,function(){return E(this,function(n){return[2,Sn(t,"POST","/v1/accounts:signInWithEmailLink",en(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(n,r,i,o){o===void 0&&(o=null);var s=t.call(this,"password",i)||this;return s._email=n,s._password=r,s._tenantId=o,s}return e._fromEmailAndPassword=function(n,r){return new e(n,r,"password")},e._fromEmailAndCode=function(n,r,i){return i===void 0&&(i=null),new e(n,r,"emailLink",i)},e.prototype.toJSON=function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null},e.prototype._getIdTokenResponse=function(n){var r;return I(this,void 0,void 0,function(){var i,o,s,a=this;return E(this,function(l){switch(l.label){case 0:switch(i=this.signInMethod,i){case"password":return[3,1];case"emailLink":return[3,4]}return[3,5];case 1:return o={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled?[4,Ad(n,o,"signInWithPassword")]:[3,3];case 2:return s=l.sent(),[2,ea(n,s)];case 3:return[2,ea(n,o).catch(function(u){return I(a,void 0,void 0,function(){var c;return E(this,function(f){switch(f.label){case 0:return u.code!=="auth/".concat("missing-recaptcha-token")?[3,2]:(console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),[4,Ad(n,o,"signInWithPassword")]);case 1:return c=f.sent(),[2,ea(n,c)];case 2:return[2,Promise.reject(u)]}})})})];case 4:return[2,mE(n,{email:this._email,oobCode:this._password})];case 5:gt(n,"internal-error"),l.label=6;case 6:return[2]}})})},e.prototype._linkToIdToken=function(n,r){return I(this,void 0,void 0,function(){return E(this,function(i){switch(this.signInMethod){case"password":return[2,pE(n,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password})];case"emailLink":return[2,vE(n,{idToken:r,email:this._email,oobCode:this._password})];default:gt(n,"internal-error")}return[2]})})},e.prototype._getReauthenticationResolver=function(n){return this._getIdTokenResponse(n)},e})(yi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){return I(this,void 0,void 0,function(){return E(this,function(n){return[2,Sn(t,"POST","/v1/accounts:signInWithIdp",en(t,e))]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gE="http://localhost",er=function(t){J(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.pendingToken=null,n}return e._fromParams=function(n){var r=new e(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(r.idToken=n.idToken),n.accessToken&&(r.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(r.nonce=n.nonce),n.pendingToken&&(r.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(r.accessToken=n.oauthToken,r.secret=n.oauthTokenSecret):gt("argument-error"),r},e.prototype.toJSON=function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,o=r.signInMethod,s=sr(r,["providerId","signInMethod"]);if(!i||!o)return null;var a=new e(i,o);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a},e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return dt(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,dt(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,dt(n,r)},e.prototype.buildRequest=function(){var n={requestUri:gE,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{var r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),n.postBody=Xt(r)}return n},e}(yi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ta;function yE(t,e){return I(this,void 0,void 0,function(){return E(this,function(n){return[2,Sn(t,"POST","/v1/accounts:signInWithPhoneNumber",en(t,e))]})})}function _E(t,e){return I(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return[4,Sn(t,"POST","/v1/accounts:signInWithPhoneNumber",en(t,e))];case 1:if(n=r.sent(),n.temporaryProof)throw Cr(t,"account-exists-with-different-credential",n);return[2,n]}})})}var wE=(ta={},ta.USER_NOT_FOUND="user-not-found",ta);function IE(t,e){return I(this,void 0,void 0,function(){var n;return E(this,function(r){return n=K(K({},e),{operation:"REAUTH"}),[2,Sn(t,"POST","/v1/accounts:signInWithPhoneNumber",en(t,n),wE)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(n){var r=t.call(this,"phone","phone")||this;return r.params=n,r}return e._fromVerification=function(n,r){return new e({verificationId:n,verificationCode:r})},e._fromTokenResponse=function(n,r){return new e({phoneNumber:n,temporaryProof:r})},e.prototype._getIdTokenResponse=function(n){return yE(n,this._makeVerificationRequest())},e.prototype._linkToIdToken=function(n,r){return _E(n,K({idToken:r},this._makeVerificationRequest()))},e.prototype._getReauthenticationResolver=function(n){return IE(n,this._makeVerificationRequest())},e.prototype._makeVerificationRequest=function(){var n=this.params,r=n.temporaryProof,i=n.phoneNumber,o=n.verificationId,s=n.verificationCode;return r&&i?{temporaryProof:r,phoneNumber:i}:{sessionInfo:o,code:s}},e.prototype.toJSON=function(){var n={providerId:this.providerId};return this.params.phoneNumber&&(n.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(n.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(n.verificationCode=this.params.verificationCode),this.params.verificationId&&(n.verificationId=this.params.verificationId),n},e.fromJSON=function(n){typeof n=="string"&&(n=JSON.parse(n));var r=n,i=r.verificationId,o=r.verificationCode,s=r.phoneNumber,a=r.temporaryProof;return!o&&!i&&!s&&!a?null:new e({verificationId:i,verificationCode:o,phoneNumber:s,temporaryProof:a})},e})(yi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _m=function(){function t(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}return t.prototype.setDefaultLanguage=function(e){this.defaultLanguageCode=e},t.prototype.setCustomParameters=function(e){return this.customParameters=e,this},t.prototype.getCustomParameters=function(){return this.customParameters},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _i=function(t){J(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.scopes=[],n}return e.prototype.addScope=function(n){return this.scopes.includes(n)||this.scopes.push(n),this},e.prototype.getScopes=function(){return Ue([],this.scopes,!0)},e}(_m);(function(t){J(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.credentialFromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n;return b("providerId"in r&&"signInMethod"in r,"argument-error"),er._fromParams(r)},e.prototype.credential=function(n){return this._credential(K(K({},n),{nonce:n.rawNonce}))},e.prototype._credential=function(n){return b(n.idToken||n.accessToken,"argument-error"),er._fromParams(K(K({},n),{providerId:this.providerId,signInMethod:this.providerId}))},e.credentialFromResult=function(n){return e.oauthCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.oauthCredentialFromTaggedObject(n.customData||{})},e.oauthCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,o=i.oauthIdToken,s=i.oauthAccessToken,a=i.oauthTokenSecret,l=i.pendingToken,u=i.nonce,c=i.providerId;if(!s&&!a&&!o&&!l||!c)return null;try{return new e(c)._credential({idToken:o,accessToken:s,nonce:u,pendingToken:l})}catch{return null}},e})(_i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(){return t.call(this,"facebook.com")||this}return e.credential=function(n){return er._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.FACEBOOK_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.FACEBOOK_SIGN_IN_METHOD="facebook.com",e.PROVIDER_ID="facebook.com",e})(_i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(){var n=t.call(this,"google.com")||this;return n.addScope("profile"),n}return e.credential=function(n,r){return er._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,o=i.oauthIdToken,s=i.oauthAccessToken;if(!o&&!s)return null;try{return e.credential(o,s)}catch{return null}},e.GOOGLE_SIGN_IN_METHOD="google.com",e.PROVIDER_ID="google.com",e})(_i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(){return t.call(this,"github.com")||this}return e.credential=function(n){return er._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.GITHUB_SIGN_IN_METHOD,accessToken:n})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return e.credential(r.oauthAccessToken)}catch{return null}},e.GITHUB_SIGN_IN_METHOD="github.com",e.PROVIDER_ID="github.com",e})(_i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var EE="http://localhost",Ld=function(t){J(e,t);function e(n,r){var i=t.call(this,n,n)||this;return i.pendingToken=r,i}return e.prototype._getIdTokenResponse=function(n){var r=this.buildRequest();return dt(n,r)},e.prototype._linkToIdToken=function(n,r){var i=this.buildRequest();return i.idToken=r,dt(n,i)},e.prototype._getReauthenticationResolver=function(n){var r=this.buildRequest();return r.autoCreate=!1,dt(n,r)},e.prototype.toJSON=function(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}},e.fromJSON=function(n){var r=typeof n=="string"?JSON.parse(n):n,i=r.providerId,o=r.signInMethod,s=r.pendingToken;return!i||!o||!s||i!==o?null:new e(i,s)},e._create=function(n,r){return new e(n,r)},e.prototype.buildRequest=function(){return{requestUri:EE,returnSecureToken:!0,pendingToken:this.pendingToken}},e}(yi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kE="saml.";(function(t){J(e,t);function e(n){return b(n.startsWith(kE),"argument-error"),t.call(this,n)||this}return e.credentialFromResult=function(n){return e.samlCredentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.samlCredentialFromTaggedObject(n.customData||{})},e.credentialFromJSON=function(n){var r=Ld.fromJSON(n);return b(r,"argument-error"),r},e.samlCredentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,o=i.pendingToken,s=i.providerId;if(!o||!s)return null;try{return Ld._create(s,o)}catch{return null}},e})(_m);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(){return t.call(this,"twitter.com")||this}return e.credential=function(n,r){return er._fromParams({providerId:e.PROVIDER_ID,signInMethod:e.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:r})},e.credentialFromResult=function(n){return e.credentialFromTaggedObject(n)},e.credentialFromError=function(n){return e.credentialFromTaggedObject(n.customData||{})},e.credentialFromTaggedObject=function(n){var r=n._tokenResponse;if(!r)return null;var i=r,o=i.oauthAccessToken,s=i.oauthTokenSecret;if(!o||!s)return null;try{return e.credential(o,s)}catch{return null}},e.TWITTER_SIGN_IN_METHOD="twitter.com",e.PROVIDER_ID="twitter.com",e})(_i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pu=function(){function t(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}return t._fromIdTokenResponse=function(e,n,r,i){return i===void 0&&(i=!1),I(this,void 0,void 0,function(){var o,s,a;return E(this,function(l){switch(l.label){case 0:return[4,pl._fromIdTokenResponse(e,r,i)];case 1:return o=l.sent(),s=Dd(r),a=new t({user:o,providerId:s,_tokenResponse:r,operationType:n}),[2,a]}})})},t._forOperation=function(e,n,r){return I(this,void 0,void 0,function(){var i;return E(this,function(o){switch(o.label){case 0:return[4,e._updateTokensIfNecessary(r,!0)];case 1:return o.sent(),i=Dd(r),[2,new t({user:e,providerId:i,_tokenResponse:r,operationType:n})]}})})},t}();function Dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var SE=function(t){J(e,t);function e(n,r,i,o){var s=this,a;return s=t.call(this,r.code,r.message)||this,s.operationType=i,s.user=o,Object.setPrototypeOf(s,e.prototype),s.customData={appName:n.name,tenantId:(a=n.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:i},s}return e._fromErrorAndOperation=function(n,r,i,o){return new e(n,r,i,o)},e}(qe);function wm(t,e,n,r){var i=e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(function(o){throw o.code==="auth/".concat("multi-factor-auth-required")?SE._fromErrorAndOperation(t,o,e,r):o})}function TE(t,e,n){return n===void 0&&(n=!1),I(this,void 0,void 0,function(){var r,i,o,s,a,l;return E(this,function(u){switch(u.label){case 0:return i=si,o=[t],a=(s=e)._linkToIdToken,l=[t.auth],[4,t.getIdToken()];case 1:return[4,i.apply(void 0,o.concat([a.apply(s,l.concat([u.sent()])),n]))];case 2:return r=u.sent(),[2,Pu._forOperation(t,"link",r)]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e,n){return n===void 0&&(n=!1),I(this,void 0,void 0,function(){var r,i,o,s,a,l;return E(this,function(u){switch(u.label){case 0:r=t.auth,i="reauthenticate",u.label=1;case 1:return u.trys.push([1,3,,4]),[4,si(t,wm(r,i,e,t),n)];case 2:return o=u.sent(),b(o.idToken,r,"internal-error"),s=Ru(o.idToken),b(s,r,"internal-error"),a=s.sub,b(t.uid===a,r,"user-mismatch"),[2,Pu._forOperation(t,i,o)];case 3:throw l=u.sent(),(l==null?void 0:l.code)==="auth/".concat("user-not-found")&&gt(r,"user-mismatch"),l;case 4:return[2]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e,n){return n===void 0&&(n=!1),I(this,void 0,void 0,function(){var r,i,o;return E(this,function(s){switch(s.label){case 0:return r="signIn",[4,wm(t,r,e)];case 1:return i=s.sent(),[4,Pu._fromIdTokenResponse(t,r,i)];case 2:return o=s.sent(),n?[3,4]:[4,t._updateCurrentUser(o.user)];case 3:s.sent(),s.label=4;case 4:return[2,o]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Im=function(){function t(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}return t._fromServerResponse=function(e,n){return"phoneInfo"in n?PE._fromServerResponse(e,n):"totpInfo"in n?NE._fromServerResponse(e,n):gt(e,"internal-error")},t}(),PE=function(t){J(e,t);function e(n){var r=t.call(this,"phone",n)||this;return r.phoneNumber=n.phoneInfo,r}return e._fromServerResponse=function(n,r){return new e(r)},e}(Im),NE=function(t){J(e,t);function e(n){return t.call(this,"totp",n)||this}return e._fromServerResponse=function(n,r){return new e(r)},e}(Im),Nu=function(){function t(e,n,r){r===void 0&&(r={}),this.isNewUser=e,this.providerId=n,this.profile=r}return t}(),Em=function(t){J(e,t);function e(n,r,i,o){var s=t.call(this,n,r,i)||this;return s.username=o,s}return e}(Nu);(function(t){J(e,t);function e(n,r){return t.call(this,n,"facebook.com",r)||this}return e})(Nu);(function(t){J(e,t);function e(n,r){return t.call(this,n,"github.com",r,typeof(r==null?void 0:r.login)=="string"?r==null?void 0:r.login:null)||this}return e})(Em);(function(t){J(e,t);function e(n,r){return t.call(this,n,"google.com",r)||this}return e})(Nu);(function(t){J(e,t);function e(n,r,i){return t.call(this,n,"twitter.com",r,i)||this}return e})(Em);function AE(t,e,n,r){return Oe(t).onAuthStateChanged(e,n,r)}var xd="@firebase/auth",Md="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var OE=function(){function t(e){this.auth=e,this.internalListeners=new Map}return t.prototype.getUid=function(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null},t.prototype.getToken=function(e){return I(this,void 0,void 0,function(){var n;return E(this,function(r){switch(r.label){case 0:return this.assertAuthConfigured(),[4,this.auth._initializationPromise];case 1:return r.sent(),this.auth.currentUser?[4,this.auth.currentUser.getIdToken(e)]:[2,null];case 2:return n=r.sent(),[2,{accessToken:n}]}})})},t.prototype.addAuthTokenListener=function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var n=this.auth.onIdTokenChanged(function(r){e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}},t.prototype.removeAuthTokenListener=function(e){this.assertAuthConfigured();var n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())},t.prototype.assertAuthConfigured=function(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")},t.prototype.updateProactiveRefresh=function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function DE(t){_n(new Gt("auth",function(e,n){var r=n.options,i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),a=i.options,l=a.apiKey,u=a.authDomain;b(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});var c={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pm(t)},f=new fE(i,o,s,c);return hE(f,r),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(function(e,n,r){var i=e.getProvider("auth-internal");i.initialize()})),_n(new Gt("auth-internal",function(e){var n=ym(e.getProvider("auth").getImmediate());return function(r){return new OE(r)}(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(xd,Md,LE(t)),Vt(xd,Md,"esm5")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var km=function(){function t(e,n){this.storageRetriever=e,this.type=n}return t.prototype._isAvailable=function(){try{return this.storage?(this.storage.setItem(Ed,"1"),this.storage.removeItem(Ed),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}},t.prototype._set=function(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()},t.prototype._get=function(e){var n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)},t.prototype._remove=function(e){return this.storage.removeItem(e),Promise.resolve()},Object.defineProperty(t.prototype,"storage",{get:function(){return this.storageRetriever()},enumerable:!1,configurable:!0}),t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){var t=V();return lm(t)||hm(t)}var ME=1e3,UE=10;(function(t){J(e,t);function e(){var n=t.call(this,function(){return window.localStorage},"LOCAL")||this;return n.boundEventHandler=function(r,i){return n.onStorageEvent(r,i)},n.listeners={},n.localCache={},n.pollTimer=null,n.safariLocalStorageNotSynced=xE()&&oE(),n.fallbackToPolling=iE(),n._shouldAllowMigration=!0,n}return e.prototype.forAllChangedKeys=function(n){for(var r=0,i=Object.keys(this.listeners);r<i.length;r++){var o=i[r],s=this.storage.getItem(o),a=this.localCache[o];s!==a&&n(o,a,s)}},e.prototype.onStorageEvent=function(n,r){var i=this;if(r===void 0&&(r=!1),!n.key){this.forAllChangedKeys(function(u,c,f){i.notifyListeners(u,f)});return}var o=n.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var s=this.storage.getItem(o);if(n.newValue!==s)n.newValue!==null?this.storage.setItem(o,n.newValue):this.storage.removeItem(o);else if(this.localCache[o]===n.newValue&&!r)return}var a=function(){var u=i.storage.getItem(o);!r&&i.localCache[o]===u||i.notifyListeners(o,u)},l=this.storage.getItem(o);rE()&&l!==n.newValue&&n.newValue!==n.oldValue?setTimeout(a,UE):a()},e.prototype.notifyListeners=function(n,r){this.localCache[n]=r;var i=this.listeners[n];if(i)for(var o=0,s=Array.from(i);o<s.length;o++){var a=s[o];a(r&&JSON.parse(r))}},e.prototype.startPolling=function(){var n=this;this.stopPolling(),this.pollTimer=setInterval(function(){n.forAllChangedKeys(function(r,i,o){n.onStorageEvent(new StorageEvent("storage",{key:r,oldValue:i,newValue:o}),!0)})},ME)},e.prototype.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},e.prototype.attachListener=function(){window.addEventListener("storage",this.boundEventHandler)},e.prototype.detachListener=function(){window.removeEventListener("storage",this.boundEventHandler)},e.prototype._addListener=function(n,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(r)},e.prototype._removeListener=function(n,r){this.listeners[n]&&(this.listeners[n].delete(r),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())},e.prototype._set=function(n,r){return I(this,void 0,void 0,function(){return E(this,function(i){switch(i.label){case 0:return[4,t.prototype._set.call(this,n,r)];case 1:return i.sent(),this.localCache[n]=JSON.stringify(r),[2]}})})},e.prototype._get=function(n){return I(this,void 0,void 0,function(){var r;return E(this,function(i){switch(i.label){case 0:return[4,t.prototype._get.call(this,n)];case 1:return r=i.sent(),this.localCache[n]=JSON.stringify(r),[2,r]}})})},e.prototype._remove=function(n){return I(this,void 0,void 0,function(){return E(this,function(r){switch(r.label){case 0:return[4,t.prototype._remove.call(this,n)];case 1:return r.sent(),delete this.localCache[n],[2]}})})},e.type="LOCAL",e})(km);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){J(e,t);function e(){return t.call(this,function(){return window.sessionStorage},"SESSION")||this}return e.prototype._addListener=function(n,r){},e.prototype._removeListener=function(n,r){},e.type="SESSION",e})(km);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Au=function(t){J(e,t);function e(n){var r=t.call(this,"custom","custom")||this;return r.params=n,r}return e.prototype._getIdTokenResponse=function(n){return dt(n,this._buildIdpRequest())},e.prototype._linkToIdToken=function(n,r){return dt(n,this._buildIdpRequest(r))},e.prototype._getReauthenticationResolver=function(n){return dt(n,this._buildIdpRequest())},e.prototype._buildIdpRequest=function(n){var r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(r.idToken=n),r},e}(yi);function bE(t){return RE(t.auth,new Au(t),t.bypassAuthState)}function FE(t){var e=t.auth,n=t.user;return b(n,e,"internal-error"),CE(n,new Au(t),t.bypassAuthState)}function $E(t){return I(this,void 0,void 0,function(){var e,n;return E(this,function(r){return e=t.auth,n=t.user,b(n,e,"internal-error"),[2,TE(n,new Au(t),t.bypassAuthState)]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zE=function(){function t(e,n,r,i,o){o===void 0&&(o=!1),this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return t.prototype.execute=function(){var e=this;return new Promise(function(n,r){return I(e,void 0,void 0,function(){var i,o;return E(this,function(s){switch(s.label){case 0:this.pendingPromise={resolve:n,reject:r},s.label=1;case 1:return s.trys.push([1,4,,5]),i=this,[4,this.resolver._initialize(this.auth)];case 2:return i.eventManager=s.sent(),[4,this.onExecution()];case 3:return s.sent(),this.eventManager.registerConsumer(this),[3,5];case 4:return o=s.sent(),this.reject(o),[3,5];case 5:return[2]}})})})},t.prototype.onAuthEvent=function(e){return I(this,void 0,void 0,function(){var n,r,i,o,s,a,l,u,c;return E(this,function(f){switch(f.label){case 0:if(n=e.urlResponse,r=e.sessionId,i=e.postBody,o=e.tenantId,s=e.error,a=e.type,s)return this.reject(s),[2];l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState},f.label=1;case 1:return f.trys.push([1,3,,4]),u=this.resolve,[4,this.getIdpTask(a)(l)];case 2:return u.apply(this,[f.sent()]),[3,4];case 3:return c=f.sent(),this.reject(c),[3,4];case 4:return[2]}})})},t.prototype.onError=function(e){this.reject(e)},t.prototype.getIdpTask=function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bE;case"linkViaPopup":case"linkViaRedirect":return $E;case"reauthViaPopup":case"reauthViaRedirect":return FE;default:gt(this.auth,"internal-error")}},t.prototype.resolve=function(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()},t.prototype.reject=function(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()},t.prototype.unregisterAndCleanUp=function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()},t}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jE="pendingRedirect",na=new Map;(function(t){J(e,t);function e(n,r,i){i===void 0&&(i=!1);var o=t.call(this,n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i)||this;return o.eventId=null,o}return e.prototype.execute=function(){return I(this,void 0,void 0,function(){var n,r,i,o,s;return E(this,function(a){switch(a.label){case 0:if(n=na.get(this.auth._key()),n)return[3,8];a.label=1;case 1:return a.trys.push([1,6,,7]),[4,BE(this.resolver,this.auth)];case 2:return r=a.sent(),r?[4,t.prototype.execute.call(this)]:[3,4];case 3:return o=a.sent(),[3,5];case 4:o=null,a.label=5;case 5:return i=o,n=function(){return Promise.resolve(i)},[3,7];case 6:return s=a.sent(),n=function(){return Promise.reject(s)},[3,7];case 7:na.set(this.auth._key(),n),a.label=8;case 8:return this.bypassAuthState||na.set(this.auth._key(),function(){return Promise.resolve(null)}),[2,n()]}})})},e.prototype.onAuthEvent=function(n){return I(this,void 0,void 0,function(){var r;return E(this,function(i){switch(i.label){case 0:return n.type==="signInViaRedirect"?[2,t.prototype.onAuthEvent.call(this,n)]:n.type==="unknown"?(this.resolve(null),[2]):n.eventId?[4,this.auth._redirectUserForId(n.eventId)]:[3,2];case 1:if(r=i.sent(),r)return this.user=r,[2,t.prototype.onAuthEvent.call(this,n)];this.resolve(null),i.label=2;case 2:return[2]}})})},e.prototype.onExecution=function(){return I(this,void 0,void 0,function(){return E(this,function(n){return[2]})})},e.prototype.cleanUp=function(){},e})(zE);function BE(t,e){return I(this,void 0,void 0,function(){var n,r,i;return E(this,function(o){switch(o.label){case 0:return n=HE(e),r=VE(t),[4,r._isAvailable()];case 1:return o.sent()?[4,r._get(n)]:[2,!1];case 2:return i=o.sent()==="true",[4,r._remove(n)];case 3:return o.sent(),[2,i]}})})}function VE(t){return Lt(t._redirectPersistence)}function HE(t){return so(jE,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var WE=10*60*1e3,KE=function(){function t(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t.prototype.registerConsumer=function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)},t.prototype.unregisterConsumer=function(e){this.consumers.delete(e)},t.prototype.onEvent=function(e){var n=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach(function(i){n.isEventForConsumer(e,i)&&(r=!0,n.sendToConsumer(e,i),n.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GE(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r},t.prototype.sendToConsumer=function(e,n){var r;if(e.error&&!Sm(e)){var i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fs(this.auth,i))}else n.onAuthEvent(e)},t.prototype.isEventForConsumer=function(e,n){var r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r},t.prototype.hasEventBeenHandled=function(e){return Date.now()-this.lastProcessedEventTime>=WE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ud(e))},t.prototype.saveEventToCache=function(e){this.cachedEventUids.add(Ud(e)),this.lastProcessedEventTime=Date.now()},t}();function Ud(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(function(e){return e}).join("-")}function Sm(t){var e=t.type,n=t.error;return e==="unknown"&&(n==null?void 0:n.code)==="auth/".concat("no-auth-event")}function GE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sm(t);default:return!1}}(function(t){J(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.passiveListeners=new Set,n.initPromise=new Promise(function(r){n.resolveInialized=r}),n}return e.prototype.addPassiveListener=function(n){this.passiveListeners.add(n)},e.prototype.removePassiveListener=function(n){this.passiveListeners.delete(n)},e.prototype.resetRedirect=function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1},e.prototype.onEvent=function(n){return this.resolveInialized(),this.passiveListeners.forEach(function(r){return r(n)}),t.prototype.onEvent.call(this,n)},e.prototype.initialized=function(){return I(this,void 0,void 0,function(){return E(this,function(n){switch(n.label){case 0:return[4,this.initPromise];case 1:return n.sent(),[2]}})})},e})(KE);DE("Cordova");const qE=t=>{const{children:e}=t,n=ds(),r=vu(),[i,o]=S.useState(!1);return S.useEffect(()=>{const s=AE(n,a=>{a?o(!1):(console.log("unauthorized"),r("/react-ts-caps/login"))});return()=>s()},[n]),i?O.jsx("p",{children:"Loading..."}):O.jsx(O.Fragment,{children:e})},JE=()=>{const t=ds(),[e,n]=S.useState({}),[r,i]=S.useState(""),[o,s]=S.useState(""),a=u=>{u.preventDefault(),mw(t,r,o).then(c=>{console.log(c)}).catch(c=>{console.log(c)})},l=u=>{const c=u.target.name,f=u.target.value;n(m=>({...m,[c]:f})),console.log(e)};return O.jsxs("form",{method:"POST",onSubmit:a,className:"border-solid border-neutral-400 border-2 rounded-lg",children:[O.jsx("h2",{className:"mb-4 font-bold text-2xl",children:"Sign up"}),O.jsx("label",{htmlFor:"name",children:"Name"}),O.jsx("input",{type:"text",id:"name",name:"name",onChange:l,className:"hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto"}),O.jsx("label",{htmlFor:"email",children:"Email"}),O.jsx("input",{type:"email",id:"email",name:"email",onChange:u=>i(u.target.value),className:"hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto"}),O.jsx("label",{htmlFor:"pass",children:"Password"}),O.jsx("input",{type:"password",id:"pass",name:"password",onChange:u=>s(u.target.value),className:"hover:border-neutral-700 active:border-neutral-700 border-solid border-2 rounded-md border-neutral-300 block mb-4 mx-auto"}),O.jsx("input",{type:"submit",className:"hover:bg-neutral-100 hover:border-neutral-700 cursor-pointer border-solid border-2 rounded-md border-neutral-300 block mb-4 py-2 px-4 mx-auto"})]})};dp(R0.firebaseConfig);const QE=()=>{const[t,e]=S.useState(0);return O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"bg-slate-400 flex justify-between",children:[O.jsx("a",{href:"https://vitejs.dev",target:"_blank",children:O.jsx("img",{src:ty,className:"logo",alt:"Vite logo"})}),O.jsx("a",{href:"https://react.dev",target:"_blank",children:O.jsx("img",{src:ey,className:"logo react",alt:"React logo"})})]}),O.jsx("h1",{children:"Vite + React"}),O.jsxs("div",{className:"card",children:[O.jsxs("button",{onClick:()=>e(n=>n+=1),children:["count is ",t]}),O.jsxs("p",{children:["Edit ",O.jsx("code",{children:"src/App.tsx"})," and save to test HMR"]})]}),O.jsxs(I_,{children:[O.jsxs("ul",{className:"my-6 flex justify-around w-full",children:[O.jsx("li",{children:O.jsx(qs,{to:"react-ts-caps/homepage",children:"Homepage"})}),O.jsx("li",{children:O.jsx(qs,{to:"react-ts-caps/login",children:"Login"})}),O.jsx("li",{children:O.jsx(qs,{to:"react-ts-caps/signup",children:"Signup"})})]}),O.jsxs(m_,{children:[O.jsx(Xi,{path:"react-ts-caps/homepage",element:O.jsx(qE,{children:O.jsx(OI,{})})}),O.jsx(Xi,{path:"react-ts-caps/login",element:O.jsx(LI,{})}),O.jsx(Xi,{index:!0,path:"react-ts-caps/signup",element:O.jsx(JE,{})})]})]})]})};ra.createRoot(document.getElementById("root")).render(O.jsx(Kd.StrictMode,{children:O.jsx(QE,{})}));
