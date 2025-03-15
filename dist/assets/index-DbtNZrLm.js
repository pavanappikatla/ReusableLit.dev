(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=globalThis,Xr=De.ShadowRoot&&(De.ShadyCSS===void 0||De.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zr=Symbol(),wo=new WeakMap;let wi=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==Zr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Xr&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=wo.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&wo.set(r,e))}return e}toString(){return this.cssText}};const Sn=t=>new wi(typeof t=="string"?t:t+"",void 0,Zr),W=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new wi(r,t,Zr)},An=(t,e)=>{if(Xr)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),i=De.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}},xo=Xr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return Sn(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:En,defineProperty:Pn,getOwnPropertyDescriptor:zn,getOwnPropertyNames:On,getOwnPropertySymbols:Tn,getPrototypeOf:In}=Object,Dt=globalThis,Co=Dt.trustedTypes,Ln=Co?Co.emptyScript:"",br=Dt.reactiveElementPolyfillSupport,ge=(t,e)=>t,ne={toAttribute(t,e){switch(e){case Boolean:t=t?Ln:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Jr=(t,e)=>!En(t,e),ko={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:Jr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Dt.litPropertyMetadata??(Dt.litPropertyMetadata=new WeakMap);let te=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ko){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Pn(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){const{get:i,set:n}=zn(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);n.call(this,s),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ko}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;const e=In(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){const r=this.properties,o=[...On(r),...Tn(r)];for(const i of o)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)r.unshift(xo(i))}else e!==void 0&&r.push(xo(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return An(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var o;return(o=r.hostConnected)==null?void 0:o.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EC(e,r){var n;const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const s=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:ne).toAttribute(r,o.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){var n;const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=o.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:ne;this._$Em=i,this[i]=a.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??Jr)(this[e],r))return;this.P(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,s]of i)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],s)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(o=this._$EO)==null||o.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};te.elementStyles=[],te.shadowRootOptions={mode:"open"},te[ge("elementProperties")]=new Map,te[ge("finalized")]=new Map,br==null||br({ReactiveElement:te}),(Dt.reactiveElementVersions??(Dt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=globalThis,Ke=ve.trustedTypes,$o=Ke?Ke.createPolicy("lit-html",{createHTML:t=>t}):void 0,xi="$lit$",Rt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ci="?"+Rt,Rn=`<${Ci}>`,Kt=document,we=()=>Kt.createComment(""),xe=t=>t===null||typeof t!="object"&&typeof t!="function",Qr=Array.isArray,Nn=t=>Qr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",gr=`[ 	
\f\r]`,he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,So=/-->/g,Ao=/>/g,jt=RegExp(`>|${gr}(?:([^\\s"'>=/]+)(${gr}*=${gr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Eo=/'/g,Po=/"/g,ki=/^(?:script|style|textarea|title)$/i,Dn=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),E=Dn(1),bt=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),zo=new WeakMap,qt=Kt.createTreeWalker(Kt,129);function $i(t,e){if(!Qr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return $o!==void 0?$o.createHTML(e):e}const Bn=(t,e)=>{const r=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=he;for(let a=0;a<r;a++){const c=t[a];let u,l,h=-1,m=0;for(;m<c.length&&(s.lastIndex=m,l=s.exec(c),l!==null);)m=s.lastIndex,s===he?l[1]==="!--"?s=So:l[1]!==void 0?s=Ao:l[2]!==void 0?(ki.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=jt):l[3]!==void 0&&(s=jt):s===jt?l[0]===">"?(s=i??he,h=-1):l[1]===void 0?h=-2:(h=s.lastIndex-l[2].length,u=l[1],s=l[3]===void 0?jt:l[3]==='"'?Po:Eo):s===Po||s===Eo?s=jt:s===So||s===Ao?s=he:(s=jt,i=void 0);const p=s===jt&&t[a+1].startsWith("/>")?" ":"";n+=s===he?c+Rn:h>=0?(o.push(u),c.slice(0,h)+xi+c.slice(h)+Rt+p):c+Rt+(h===-2?a:p)}return[$i(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};let Tr=class Si{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const a=e.length-1,c=this.parts,[u,l]=Bn(e,r);if(this.el=Si.createElement(u,o),qt.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=qt.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(xi)){const m=l[s++],p=i.getAttribute(h).split(Rt),b=/([.?@])?(.*)/.exec(m);c.push({type:1,index:n,name:b[2],strings:p,ctor:b[1]==="."?Fn:b[1]==="?"?Vn:b[1]==="@"?Hn:or}),i.removeAttribute(h)}else h.startsWith(Rt)&&(c.push({type:6,index:n}),i.removeAttribute(h));if(ki.test(i.tagName)){const h=i.textContent.split(Rt),m=h.length-1;if(m>0){i.textContent=Ke?Ke.emptyScript:"";for(let p=0;p<m;p++)i.append(h[p],we()),qt.nextNode(),c.push({type:2,index:++n});i.append(h[m],we())}}}else if(i.nodeType===8)if(i.data===Ci)c.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(Rt,h+1))!==-1;)c.push({type:7,index:n}),h+=Rt.length-1}n++}}static createElement(e,r){const o=Kt.createElement("template");return o.innerHTML=e,o}};function se(t,e,r=t,o){var s,a;if(e===bt)return e;let i=o!==void 0?(s=r._$Co)==null?void 0:s[o]:r._$Cl;const n=xe(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??(r._$Co=[]))[o]=i:r._$Cl=i),i!==void 0&&(e=se(t,i._$AS(t,e.values),i,o)),e}let Mn=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=((e==null?void 0:e.creationScope)??Kt).importNode(r,!0);qt.currentNode=i;let n=qt.nextNode(),s=0,a=0,c=o[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new to(n,n.nextSibling,this,e):c.type===1?u=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(u=new Un(n,this,e)),this._$AV.push(u),c=o[++a]}s!==(c==null?void 0:c.index)&&(n=qt.nextNode(),s++)}return qt.currentNode=Kt,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},to=class Ai{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=se(this,e,r),xe(e)?e===D||e==null||e===""?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==bt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Nn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==D&&xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Kt.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Tr.createElement($i(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(r);else{const s=new Mn(i,this),a=s.u(this.options);s.p(r),this.T(a),this._$AH=s}}_$AC(e){let r=zo.get(e.strings);return r===void 0&&zo.set(e.strings,r=new Tr(e)),r}k(e){Qr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of e)i===r.length?r.push(o=new Ai(this.O(we()),this.O(we()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}};class or{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=D}_$AI(e,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)e=se(this,e,r,0),s=!xe(e)||e!==this._$AH&&e!==bt,s&&(this._$AH=e);else{const a=e;let c,u;for(e=n[0],c=0;c<n.length-1;c++)u=se(this,a[o+c],r,c),u===bt&&(u=this._$AH[c]),s||(s=!xe(u)||u!==this._$AH[c]),u===D?e=D:e!==D&&(e+=(u??"")+n[c+1]),this._$AH[c]=u}s&&!i&&this.j(e)}j(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let Fn=class extends or{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===D?void 0:e}},Vn=class extends or{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==D)}},Hn=class extends or{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=se(this,e,r,0)??D)===bt)return;const o=this._$AH,i=e===D&&o!==D||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==D&&(o===D||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}},Un=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){se(this,e)}};const vr=ve.litHtmlPolyfillSupport;vr==null||vr(Tr,to),(ve.litHtmlVersions??(ve.litHtmlVersions=[])).push("3.2.1");const jn=(t,e,r)=>{const o=(r==null?void 0:r.renderBefore)??e;let i=o._$litPart$;if(i===void 0){const n=(r==null?void 0:r.renderBefore)??null;o._$litPart$=i=new to(e.insertBefore(we(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pt=class extends te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jn(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return bt}};var _i;pt._$litElement$=!0,pt.finalized=!0,(_i=globalThis.litElementHydrateSupport)==null||_i.call(globalThis,{LitElement:pt});const yr=globalThis.litElementPolyfillSupport;yr==null||yr({LitElement:pt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wn={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:Jr},qn=(t=Wn,e,r)=>{const{kind:o,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,c,t)},init(a){return a!==void 0&&this.P(s,void 0,t),a}}}if(o==="setter"){const{name:s}=r;return function(a){const c=this[s];e.call(this,a),this.requestUpdate(s,c,t)}}throw Error("Unsupported decorator location: "+o)};function f(t){return(e,r)=>typeof r=="object"?qn(t,e,r):((o,i,n)=>{const s=i.hasOwnProperty(n);return i.constructor.createProperty(n,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(t){return f({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(t,e){return(r,o,i)=>{const n=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(t))??null};return Ei(r,o,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kn(t){return(e,r)=>{const{slot:o,selector:i}=t??{},n="slot"+(o?`[name=${o}]`:":not([name])");return Ei(e,r,{get(){var c;const s=(c=this.renderRoot)==null?void 0:c.querySelector(n),a=(s==null?void 0:s.assignedElements(t))??[];return i===void 0?a:a.filter(u=>u.matches(i))}})}}var Yn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,Pi=(t,e,r,o)=>{for(var i=o>1?void 0:o?Gn(e,r):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&Yn(e,r,i),i};let Ye=class extends pt{constructor(){super(...arguments),this.name="Lit Poc"}render(){return E`<h1>Hello, ${this.name}</h1>`}};Ye.styles=[W`
            :host {
                display: block;
            }
        `];Pi([f()],Ye.prototype,"name",2);Ye=Pi([Ht("lit-app")],Ye);function q(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i<3?s(n):i>3?s(e,r,n):s(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xn extends pt{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return E`<span class="shadow"></span>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Zn=W`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ir=class extends Xn{};Ir.styles=[Zn];Ir=q([Ht("md-elevation")],Ir);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zi=Symbol("attachableController");let Be;Be=new MutationObserver(t=>{var e;for(const r of t)(e=r.target[zi])==null||e.hostConnected()});class Oi{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,r){this.host=e,this.onControlChange=r,this.currentControl=null,e.addController(this),e[zi]=this,Be==null||Be.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Jn=["focusin","focusout","pointerdown"];class eo extends pt{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Oi(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){var r;if(!e[Oo]){switch(e.type){default:return;case"focusin":this.visible=((r=this.control)==null?void 0:r.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Oo]=!0}}onControlChange(e,r){for(const o of Jn)e==null||e.removeEventListener(o,this),r==null||r.addEventListener(o,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}q([f({type:Boolean,reflect:!0})],eo.prototype,"visible",void 0);q([f({type:Boolean,reflect:!0})],eo.prototype,"inward",void 0);const Oo=Symbol("handledByFocusRing");/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qn=W`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Lr=class extends eo{};Lr.styles=[Qn];Lr=q([Ht("md-focus-ring")],Lr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ro=t=>(...e)=>({_$litDirective$:t,values:e});let oo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=ro(class extends oo{constructor(t){var e;if(super(t),t.type!==Lt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||(i=this.nt)!=null&&i.has(n)||(s?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return bt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ts={STANDARD:"cubic-bezier(0.2, 0, 0, 1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const es=450,To=225,rs=.2,os=10,is=75,ns=.35,ss="::after",as="forwards";var rt;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(rt||(rt={}));const ls=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],cs=150,_r=window.matchMedia("(forced-colors: active)");class Se extends pt{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=rt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Oi(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return E`<div class="surface ${nt(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==rt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===rt.HOLDING){this.state=rt.WAITING_FOR_CLICK;return}if(this.state===rt.TOUCH_DELAY){this.state=rt.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=rt.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=rt.TOUCH_DELAY,await new Promise(r=>{setTimeout(r,cs)}),this.state===rt.TOUCH_DELAY&&(this.state=rt.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===rt.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===rt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:r}=this.getBoundingClientRect(),o=Math.max(e,r),i=Math.max(ns*o,is),n=Math.floor(o*rs),a=Math.sqrt(r**2+e**2)+os;this.initialSize=n,this.rippleScale=`${(a+i)/n}`,this.rippleSize=`${n}px`}getNormalizedPointerEventCoords(e){const{scrollX:r,scrollY:o}=window,{left:i,top:n}=this.getBoundingClientRect(),s=r+i,a=o+n,{pageX:c,pageY:u}=e;return{x:c-s,y:u-a}}getTranslationCoordinates(e){const{height:r,width:o}=this.getBoundingClientRect(),i={x:(o-this.initialSize)/2,y:(r-this.initialSize)/2};let n;return e instanceof PointerEvent?n=this.getNormalizedPointerEventCoords(e):n={x:o/2,y:r/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2},{startPoint:n,endPoint:i}}startPressAnimation(e){var s;if(!this.mdRoot)return;this.pressed=!0,(s=this.growAnimation)==null||s.cancel(),this.determineRippleSize();const{startPoint:r,endPoint:o}=this.getTranslationCoordinates(e),i=`${r.x}px, ${r.y}px`,n=`${o.x}px, ${o.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${n}) scale(${this.rippleScale})`]},{pseudoElement:ss,duration:es,easing:ts.STANDARD,fill:as})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=rt.INACTIVE;const e=this.growAnimation;let r=1/0;if(typeof(e==null?void 0:e.currentTime)=="number"?r=e.currentTime:e!=null&&e.currentTime&&(r=e.currentTime.to("ms").value),r>=To){this.pressed=!1;return}await new Promise(o=>{setTimeout(o,To-r)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const r=e.buttons===1;return this.isTouch(e)||r}inBounds({x:e,y:r}){const{top:o,left:i,bottom:n,right:s}=this.getBoundingClientRect();return e>=i&&e<=s&&r>=o&&r<=n}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){if(!(_r!=null&&_r.matches))switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,r){for(const o of ls)e==null||e.removeEventListener(o,this),r==null||r.addEventListener(o,this)}}q([f({type:Boolean,reflect:!0})],Se.prototype,"disabled",void 0);q([Y()],Se.prototype,"hovered",void 0);q([Y()],Se.prototype,"pressed",void 0);q([Q(".surface")],Se.prototype,"mdRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const us=W`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Rr=class extends Se{};Rr.styles=[us];Rr=q([Ht("md-ripple")],Rr);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ti=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],ds=Ti.map(Ii);function wr(t){return ds.includes(t)}function Ii(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Te=Symbol("privateIgnoreAttributeChangesFor");function hs(t){var e;class r extends t{constructor(){super(...arguments),this[e]=new Set}attributeChangedCallback(i,n,s){if(!wr(i)){super.attributeChangedCallback(i,n,s);return}if(this[Te].has(i))return;this[Te].add(i),this.removeAttribute(i),this[Te].delete(i);const a=Dr(i);s===null?delete this.dataset[a]:this.dataset[a]=s,this.requestUpdate(Dr(i),n)}getAttribute(i){return wr(i)?super.getAttribute(Nr(i)):super.getAttribute(i)}removeAttribute(i){super.removeAttribute(i),wr(i)&&(super.removeAttribute(Nr(i)),this.requestUpdate())}}return e=Te,ps(r),r}function ps(t){for(const e of Ti){const r=Ii(e),o=Nr(r),i=Dr(r);t.createProperty(e,{attribute:r,noAccessor:!0}),t.createProperty(Symbol(o),{attribute:o,noAccessor:!0}),Object.defineProperty(t.prototype,e,{configurable:!0,enumerable:!0,get(){return this.dataset[i]??null},set(n){const s=this.dataset[i]??null;n!==s&&(n===null?delete this.dataset[i]:this.dataset[i]=n,this.requestUpdate(e,s))}})}}function Nr(t){return`data-${t}`}function Dr(t){return t.replace(/-\w/,e=>e[1].toUpperCase())}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const io=Symbol("internals"),xr=Symbol("privateInternals");function fs(t){class e extends t{get[io](){return this[xr]||(this[xr]=this.attachInternals()),this[xr]}}return e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ms(t){t.addInitializer(e=>{const r=e;r.addEventListener("click",async o=>{const{type:i,[io]:n}=r,{form:s}=n;if(!(!s||i==="button")&&(await new Promise(a=>{setTimeout(a)}),!o.defaultPrevented)){if(i==="reset"){s.reset();return}s.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>r})},{capture:!0,once:!0}),n.setFormValue(r.value),s.requestSubmit()}})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function bs(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function gs(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!vs(t)}function vs(t){const e=Br;return e&&(t.preventDefault(),t.stopImmediatePropagation()),ys(),e}let Br=!1;async function ys(){Br=!0,await null,Br=!1}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const _s=hs(fs(pt));class ut extends _s{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[io].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){var i;const e=!this.href&&(this.disabled||this.softDisabled),r=this.href?this.renderLink():this.renderButton(),o=this.href?"link":"button";return E`
      ${(i=this.renderElevationOrOutline)==null?void 0:i.call(this)}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${o}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${o}
        ?disabled="${e}"></md-ripple>
      ${r}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:r,ariaExpanded:o}=this;return E`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||D}
      aria-label="${e||D}"
      aria-haspopup="${r||D}"
      aria-expanded="${o||D}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:r,ariaExpanded:o}=this;return E`<a
      id="link"
      class="button"
      aria-label="${e||D}"
      aria-haspopup="${r||D}"
      aria-expanded="${o||D}"
      href=${this.href}
      target=${this.target||D}
      >${this.renderContent()}
    </a>`}renderContent(){const e=E`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return E`
      <span class="touch"></span>
      ${this.trailingIcon?D:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:D}
    `}handleClick(e){if(!this.href&&this.softDisabled){e.stopImmediatePropagation(),e.preventDefault();return}!gs(e)||!this.buttonElement||(this.focus(),bs(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}ms(ut);ut.formAssociated=!0;ut.shadowRootOptions={mode:"open",delegatesFocus:!0};q([f({type:Boolean,reflect:!0})],ut.prototype,"disabled",void 0);q([f({type:Boolean,attribute:"soft-disabled",reflect:!0})],ut.prototype,"softDisabled",void 0);q([f()],ut.prototype,"href",void 0);q([f()],ut.prototype,"target",void 0);q([f({type:Boolean,attribute:"trailing-icon",reflect:!0})],ut.prototype,"trailingIcon",void 0);q([f({type:Boolean,attribute:"has-icon",reflect:!0})],ut.prototype,"hasIcon",void 0);q([f()],ut.prototype,"type",void 0);q([f({reflect:!0})],ut.prototype,"value",void 0);q([Q(".button")],ut.prototype,"buttonElement",void 0);q([Kn({slot:"icon",flatten:!0})],ut.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ws extends ut{renderElevationOrOutline(){return E`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const xs=W`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Cs=W`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ks=W`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Mr=class extends ws{};Mr.styles=[ks,Cs,xs];Mr=q([Ht("md-filled-button")],Mr);var $s=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,Ut=(t,e,r,o)=>{for(var i=o>1?void 0:o?Ss(e,r):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&$s(e,r,i),i};let zt=class extends pt{constructor(){super(...arguments),this.name="",this.subtitle="",this.link1="",this.link2="",this.link1text="",this.link2text="",this.cardDescription=""}render(){return E`
        <head><link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
        </head>
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${this.subtitle}</h6>
                            <p class="card-text">${this.cardDescription}</p>
                            <a href="${this.link1}" class="card-link">${this.link1text}</a>
                            <a href="${this.link2}" class="card-link">${this.link2text}</a>
                        </div>
                    </div>
                   
                    `}};Ut([f()],zt.prototype,"name",2);Ut([f()],zt.prototype,"subtitle",2);Ut([f()],zt.prototype,"link1",2);Ut([f()],zt.prototype,"link2",2);Ut([f()],zt.prototype,"link1text",2);Ut([f()],zt.prototype,"link2text",2);Ut([f()],zt.prototype,"cardDescription",2);zt=Ut([Ht("card-component")],zt);function As(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,typeof(i=function(n,s){if(typeof n!="object"||n===null)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var c=a.call(n,"string");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(o.key))=="symbol"?i:String(i),o)}var i}function tt(t,e,r){return e&&As(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function I(){return I=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},I.apply(this,arguments)}function K(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Fr(t,e)}function Fr(t,e){return Fr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Fr(t,e)}function Io(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Lo(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function ot(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(i,n){if(i){if(typeof i=="string")return Lo(i,n);var s=Object.prototype.toString.call(i).slice(8,-1);return s==="Object"&&i.constructor&&(s=i.constructor.name),s==="Map"||s==="Set"?Array.from(i):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Lo(i,n):void 0}}(t))||e){r&&(t=r);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lt;(function(t){t[t.Init=0]="Init",t[t.Loading=1]="Loading",t[t.Loaded=2]="Loaded",t[t.Rendered=3]="Rendered",t[t.Error=4]="Error"})(lt||(lt={}));var ir,S,Li,Ri,ye,Ro,Ni,Ge={},Di=[],Es=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Nt(t,e){for(var r in e)t[r]=e[r];return t}function Bi(t){var e=t.parentNode;e&&e.removeChild(t)}function w(t,e,r){var o,i,n,s={};for(n in e)n=="key"?o=e[n]:n=="ref"?i=e[n]:s[n]=e[n];if(arguments.length>2&&(s.children=arguments.length>3?ir.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)s[n]===void 0&&(s[n]=t.defaultProps[n]);return Me(t,s,o,i,null)}function Me(t,e,r,o,i){var n={type:t,props:e,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Li};return i==null&&S.vnode!=null&&S.vnode(n),n}function Ct(t){return t.children}function Fe(t,e){this.props=t,this.context=e}function Ce(t,e){if(e==null)return t.__?Ce(t.__,t.__.__k.indexOf(t)+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?Ce(t):null}function Mi(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return Mi(t)}}function Vr(t){(!t.__d&&(t.__d=!0)&&ye.push(t)&&!Xe.__r++||Ro!==S.debounceRendering)&&((Ro=S.debounceRendering)||setTimeout)(Xe)}function Xe(){for(var t;Xe.__r=ye.length;)t=ye.sort(function(e,r){return e.__v.__b-r.__v.__b}),ye=[],t.some(function(e){var r,o,i,n,s,a;e.__d&&(s=(n=(r=e).__v).__e,(a=r.__P)&&(o=[],(i=Nt({},n)).__v=n.__v+1,no(a,n,i,r.__n,a.ownerSVGElement!==void 0,n.__h!=null?[s]:null,o,s??Ce(n),n.__h),Ui(o,n),n.__e!=s&&Mi(n)))})}function Fi(t,e,r,o,i,n,s,a,c,u){var l,h,m,p,b,y,v,g=o&&o.__k||Di,C=g.length;for(r.__k=[],l=0;l<e.length;l++)if((p=r.__k[l]=(p=e[l])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?Me(null,p,null,null,p):Array.isArray(p)?Me(Ct,{children:p},null,null,null):p.__b>0?Me(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)!=null){if(p.__=r,p.__b=r.__b+1,(m=g[l])===null||m&&p.key==m.key&&p.type===m.type)g[l]=void 0;else for(h=0;h<C;h++){if((m=g[h])&&p.key==m.key&&p.type===m.type){g[h]=void 0;break}m=null}no(t,p,m=m||Ge,i,n,s,a,c,u),b=p.__e,(h=p.ref)&&m.ref!=h&&(v||(v=[]),m.ref&&v.push(m.ref,null,p),v.push(h,p.__c||b,p)),b!=null?(y==null&&(y=b),typeof p.type=="function"&&p.__k===m.__k?p.__d=c=Vi(p,c,t):c=Hi(t,p,m,g,b,c),typeof r.type=="function"&&(r.__d=c)):c&&m.__e==c&&c.parentNode!=t&&(c=Ce(m))}for(r.__e=y,l=C;l--;)g[l]!=null&&Wi(g[l],g[l]);if(v)for(l=0;l<v.length;l++)ji(v[l],v[++l],v[++l])}function Vi(t,e,r){for(var o,i=t.__k,n=0;i&&n<i.length;n++)(o=i[n])&&(o.__=t,e=typeof o.type=="function"?Vi(o,e,r):Hi(r,o,o,i,o.__e,e));return e}function Hi(t,e,r,o,i,n){var s,a,c;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(r==null||i!=n||i.parentNode==null)t:if(n==null||n.parentNode!==t)t.appendChild(i),s=null;else{for(a=n,c=0;(a=a.nextSibling)&&c<o.length;c+=1)if(a==i)break t;t.insertBefore(i,n),s=n}return s!==void 0?s:i.nextSibling}function No(t,e,r){e[0]==="-"?t.setProperty(e,r):t[e]=r==null?"":typeof r!="number"||Es.test(e)?r:r+"px"}function Ie(t,e,r,o,i){var n;t:if(e==="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)r&&e in r||No(t.style,e,"");if(r)for(e in r)o&&r[e]===o[e]||No(t.style,e,r[e])}else if(e[0]==="o"&&e[1]==="n")n=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=r,r?o||t.addEventListener(e,n?Bo:Do,n):t.removeEventListener(e,n?Bo:Do,n);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=r??"";break t}catch{}typeof r=="function"||(r==null||r===!1&&e.indexOf("-")==-1?t.removeAttribute(e):t.setAttribute(e,r))}}function Do(t){this.l[t.type+!1](S.event?S.event(t):t)}function Bo(t){this.l[t.type+!0](S.event?S.event(t):t)}function no(t,e,r,o,i,n,s,a,c){var u,l,h,m,p,b,y,v,g,C,_,k,L,V,P,x=e.type;if(e.constructor!==void 0)return null;r.__h!=null&&(c=r.__h,a=e.__e=r.__e,e.__h=null,n=[a]),(u=S.__b)&&u(e);try{t:if(typeof x=="function"){if(v=e.props,g=(u=x.contextType)&&o[u.__c],C=u?g?g.props.value:u.__:o,r.__c?y=(l=e.__c=r.__c).__=l.__E:("prototype"in x&&x.prototype.render?e.__c=l=new x(v,C):(e.__c=l=new Fe(v,C),l.constructor=x,l.render=zs),g&&g.sub(l),l.props=v,l.state||(l.state={}),l.context=C,l.__n=o,h=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),x.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Nt({},l.__s)),Nt(l.__s,x.getDerivedStateFromProps(v,l.__s))),m=l.props,p=l.state,h)x.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(x.getDerivedStateFromProps==null&&v!==m&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,C),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,C)===!1||e.__v===r.__v){for(l.props=v,l.state=l.__s,e.__v!==r.__v&&(l.__d=!1),l.__v=e,e.__e=r.__e,e.__k=r.__k,e.__k.forEach(function(U){U&&(U.__=e)}),_=0;_<l._sb.length;_++)l.__h.push(l._sb[_]);l._sb=[],l.__h.length&&s.push(l);break t}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,C),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(m,p,b)})}if(l.context=C,l.props=v,l.__v=e,l.__P=t,k=S.__r,L=0,"prototype"in x&&x.prototype.render){for(l.state=l.__s,l.__d=!1,k&&k(e),u=l.render(l.props,l.state,l.context),V=0;V<l._sb.length;V++)l.__h.push(l._sb[V]);l._sb=[]}else do l.__d=!1,k&&k(e),u=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++L<25);l.state=l.__s,l.getChildContext!=null&&(o=Nt(Nt({},o),l.getChildContext())),h||l.getSnapshotBeforeUpdate==null||(b=l.getSnapshotBeforeUpdate(m,p)),P=u!=null&&u.type===Ct&&u.key==null?u.props.children:u,Fi(t,Array.isArray(P)?P:[P],e,r,o,i,n,s,a,c),l.base=e.__e,e.__h=null,l.__h.length&&s.push(l),y&&(l.__E=l.__=null),l.__e=!1}else n==null&&e.__v===r.__v?(e.__k=r.__k,e.__e=r.__e):e.__e=Ps(r.__e,e,r,o,i,n,s,c);(u=S.diffed)&&u(e)}catch(U){e.__v=null,(c||n!=null)&&(e.__e=a,e.__h=!!c,n[n.indexOf(a)]=null),S.__e(U,e,r)}}function Ui(t,e){S.__c&&S.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){S.__e(o,r.__v)}})}function Ps(t,e,r,o,i,n,s,a){var c,u,l,h=r.props,m=e.props,p=e.type,b=0;if(p==="svg"&&(i=!0),n!=null){for(;b<n.length;b++)if((c=n[b])&&"setAttribute"in c==!!p&&(p?c.localName===p:c.nodeType===3)){t=c,n[b]=null;break}}if(t==null){if(p===null)return document.createTextNode(m);t=i?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,m.is&&m),n=null,a=!1}if(p===null)h===m||a&&t.data===m||(t.data=m);else{if(n=n&&ir.call(t.childNodes),u=(h=r.props||Ge).dangerouslySetInnerHTML,l=m.dangerouslySetInnerHTML,!a){if(n!=null)for(h={},b=0;b<t.attributes.length;b++)h[t.attributes[b].name]=t.attributes[b].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===t.innerHTML)||(t.innerHTML=l&&l.__html||""))}if(function(y,v,g,C,_){var k;for(k in g)k==="children"||k==="key"||k in v||Ie(y,k,null,g[k],C);for(k in v)_&&typeof v[k]!="function"||k==="children"||k==="key"||k==="value"||k==="checked"||g[k]===v[k]||Ie(y,k,v[k],g[k],C)}(t,m,h,i,a),l)e.__k=[];else if(b=e.props.children,Fi(t,Array.isArray(b)?b:[b],e,r,o,i&&p!=="foreignObject",n,s,n?n[0]:r.__k&&Ce(r,0),a),n!=null)for(b=n.length;b--;)n[b]!=null&&Bi(n[b]);a||("value"in m&&(b=m.value)!==void 0&&(b!==t.value||p==="progress"&&!b||p==="option"&&b!==h.value)&&Ie(t,"value",b,h.value,!1),"checked"in m&&(b=m.checked)!==void 0&&b!==t.checked&&Ie(t,"checked",b,h.checked,!1))}return t}function ji(t,e,r){try{typeof t=="function"?t(e):t.current=e}catch(o){S.__e(o,r)}}function Wi(t,e,r){var o,i;if(S.unmount&&S.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||ji(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){S.__e(n,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&Wi(o[i],e,r||typeof t.type!="function");r||t.__e==null||Bi(t.__e),t.__=t.__e=t.__d=void 0}function zs(t,e,r){return this.constructor(t,r)}function _e(t,e,r){var o,i,n;S.__&&S.__(t,e),i=(o=!1)?null:e.__k,n=[],no(e,t=e.__k=w(Ct,null,[t]),i||Ge,Ge,e.ownerSVGElement!==void 0,i?null:e.firstChild?ir.call(e.childNodes):null,n,i?i.__e:e.firstChild,o),Ui(n,t)}function qi(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return(t=="x"?e:3&e|8).toString(16)})}ir=Di.slice,S={__e:function(t,e,r,o){for(var i,n,s;e=e.__;)if((i=e.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(t)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,o||{}),s=i.__d),s)return i.__E=i}catch(a){t=a}throw t}},Li=0,Ri=function(t){return t!=null&&t.constructor===void 0},Fe.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Nt({},this.state),typeof t=="function"&&(t=t(Nt({},r),this.props)),t&&Nt(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),Vr(this))},Fe.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Vr(this))},Fe.prototype.render=Ct,ye=[],Xe.__r=0,Ni=0;var nr=function(){function t(e){this._id=void 0,this._id=e||qi()}return tt(t,[{key:"id",get:function(){return this._id}}]),t}();function Os(t){return w(t.parentElement||"span",{dangerouslySetInnerHTML:{__html:t.content}})}function Ki(t,e){return w(Os,{content:t,parentElement:e})}var J,so=function(t){function e(o){var i;return(i=t.call(this)||this).data=void 0,i.update(o),i}K(e,t);var r=e.prototype;return r.cast=function(o){return o instanceof HTMLElement?Ki(o.outerHTML):o},r.update=function(o){return this.data=this.cast(o),this},e}(nr),Cr=function(t){function e(o){var i;return(i=t.call(this)||this)._cells=void 0,i.cells=o||[],i}K(e,t);var r=e.prototype;return r.cell=function(o){return this._cells[o]},r.toArray=function(){return this.cells.map(function(o){return o.data})},e.fromCells=function(o){return new e(o.map(function(i){return new so(i.data)}))},tt(e,[{key:"cells",get:function(){return this._cells},set:function(o){this._cells=o}},{key:"length",get:function(){return this.cells.length}}]),e}(nr),sr=function(t){function e(r){var o;return(o=t.call(this)||this)._rows=void 0,o._length=void 0,o.rows=r instanceof Array?r:r instanceof Cr?[r]:[],o}return K(e,t),e.prototype.toArray=function(){return this.rows.map(function(r){return r.toArray()})},e.fromRows=function(r){return new e(r.map(function(o){return Cr.fromCells(o.cells)}))},e.fromArray=function(r){return new e((r=function(o){return!o[0]||o[0]instanceof Array?o:[o]}(r)).map(function(o){return new Cr(o.map(function(i){return new so(i)}))}))},tt(e,[{key:"rows",get:function(){return this._rows},set:function(r){this._rows=r}},{key:"length",get:function(){return this._length||this.rows.length},set:function(r){this._length=r}}]),e}(nr),ao=function(){function t(){this.callbacks=void 0}var e=t.prototype;return e.init=function(r){this.callbacks||(this.callbacks={}),r&&!this.callbacks[r]&&(this.callbacks[r]=[])},e.listeners=function(){return this.callbacks},e.on=function(r,o){return this.init(r),this.callbacks[r].push(o),this},e.off=function(r,o){var i=r;return this.init(),this.callbacks[i]&&this.callbacks[i].length!==0?(this.callbacks[i]=this.callbacks[i].filter(function(n){return n!=o}),this):this},e.emit=function(r){var o=arguments,i=r;return this.init(i),this.callbacks[i].length>0&&(this.callbacks[i].forEach(function(n){return n.apply(void 0,[].slice.call(o,1))}),!0)},t}();function Ve(t,e){if(typeof t!=typeof e)return!1;if(t===null&&e===null)return!0;if(typeof t!="object")return t===e;if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!Ve(t[r],e[r]))return!1;return!0}if(t.hasOwnProperty("constructor")&&e.hasOwnProperty("constructor")&&t.hasOwnProperty("props")&&e.hasOwnProperty("props")&&t.hasOwnProperty("key")&&e.hasOwnProperty("key")&&t.hasOwnProperty("ref")&&e.hasOwnProperty("ref")&&t.hasOwnProperty("type")&&e.hasOwnProperty("type"))return Ve(t.props,e.props);var o=Object.keys(t),i=Object.keys(e);if(o.length!==i.length)return!1;for(var n=0,s=o;n<s.length;n++){var a=s[n];if(!e.hasOwnProperty(a)||!Ve(t[a],e[a]))return!1}return!0}(function(t){t[t.Initiator=0]="Initiator",t[t.ServerFilter=1]="ServerFilter",t[t.ServerSort=2]="ServerSort",t[t.ServerLimit=3]="ServerLimit",t[t.Extractor=4]="Extractor",t[t.Transformer=5]="Transformer",t[t.Filter=6]="Filter",t[t.Sort=7]="Sort",t[t.Limit=8]="Limit"})(J||(J={}));var At=function(t){function e(o){var i;return(i=t.call(this)||this).id=void 0,i._props=void 0,i._props={},i.id=qi(),o&&i.setProps(o),i}K(e,t);var r=e.prototype;return r.process=function(){var o=[].slice.call(arguments);this.validateProps instanceof Function&&this.validateProps.apply(this,o),this.emit.apply(this,["beforeProcess"].concat(o));var i=this._process.apply(this,o);return this.emit.apply(this,["afterProcess"].concat(o)),i},r.setProps=function(o){var i=I({},this._props,o);return Ve(i,this._props)||(this._props=i,this.emit("propsUpdated",this)),this},tt(e,[{key:"props",get:function(){return this._props}}]),e}(ao),Ts=function(t){function e(){return t.apply(this,arguments)||this}return K(e,t),e.prototype._process=function(r){return this.props.keyword?(o=String(this.props.keyword).trim(),i=this.props.columns,n=this.props.ignoreHiddenColumns,s=r,a=this.props.selector,o=o.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),new sr(s.rows.filter(function(c,u){return c.cells.some(function(l,h){if(!l||n&&i&&i[h]&&typeof i[h]=="object"&&i[h].hidden)return!1;var m="";if(typeof a=="function")m=a(l.data,u,h);else if(typeof l.data=="object"){var p=l.data;p&&p.props&&p.props.content&&(m=p.props.content)}else m=String(l.data);return new RegExp(o,"gi").test(m)})}))):r;var o,i,n,s,a},tt(e,[{key:"type",get:function(){return J.Filter}}]),e}(At);function T(){var t="gridjs";return""+t+[].slice.call(arguments).reduce(function(e,r){return e+"-"+r},"")}function H(){return[].slice.call(arguments).map(function(t){return t?t.toString():""}).filter(function(t){return t}).reduce(function(t,e){return(t||"")+" "+e},"").trim()}var Ae,j,kr,Mo,Fo=function(t){function e(){return t.apply(this,arguments)||this}return K(e,t),e.prototype._process=function(r){if(!this.props.keyword)return r;var o={};return this.props.url&&(o.url=this.props.url(r.url,this.props.keyword)),this.props.body&&(o.body=this.props.body(r.body,this.props.keyword)),I({},r,o)},tt(e,[{key:"type",get:function(){return J.ServerFilter}}]),e}(At),ke=0,Yi=[],He=[],Vo=S.__b,Ho=S.__r,Uo=S.diffed,jo=S.__c,Wo=S.unmount;function ar(t,e){S.__h&&S.__h(j,t,ke||e),ke=0;var r=j.__H||(j.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({__V:He}),r.__[t]}function Bt(t){return ke=1,function(e,r,o){var i=ar(Ae++,2);if(i.t=e,!i.__c&&(i.__=[Ko(void 0,r),function(s){var a=i.__N?i.__N[0]:i.__[0],c=i.t(a,s);a!==c&&(i.__N=[c,i.__[1]],i.__c.setState({}))}],i.__c=j,!j.u)){j.u=!0;var n=j.shouldComponentUpdate;j.shouldComponentUpdate=function(s,a,c){if(!i.__c.__H)return!0;var u=i.__c.__H.__.filter(function(h){return h.__c});if(u.every(function(h){return!h.__N}))return!n||n.call(this,s,a,c);var l=!1;return u.forEach(function(h){if(h.__N){var m=h.__[0];h.__=h.__N,h.__N=void 0,m!==h.__[0]&&(l=!0)}}),!(!l&&i.__c.props===s)&&(!n||n.call(this,s,a,c))}}return i.__N||i.__}(Ko,t)}function ct(t,e){var r=ar(Ae++,3);!S.__s&&Xi(r.__H,e)&&(r.__=t,r.i=e,j.__H.__h.push(r))}function Ee(t){return ke=5,Gi(function(){return{current:t}},[])}function Gi(t,e){var r=ar(Ae++,7);return Xi(r.__H,e)?(r.__V=t(),r.i=e,r.__h=t,r.__V):r.__}function Is(){for(var t;t=Yi.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Ue),t.__H.__h.forEach(Hr),t.__H.__h=[]}catch(e){t.__H.__h=[],S.__e(e,t.__v)}}S.__b=function(t){j=null,Vo&&Vo(t)},S.__r=function(t){Ho&&Ho(t),Ae=0;var e=(j=t.__c).__H;e&&(kr===j?(e.__h=[],j.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=He,r.__N=r.i=void 0})):(e.__h.forEach(Ue),e.__h.forEach(Hr),e.__h=[])),kr=j},S.diffed=function(t){Uo&&Uo(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Yi.push(e)!==1&&Mo===S.requestAnimationFrame||((Mo=S.requestAnimationFrame)||Ls)(Is)),e.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==He&&(r.__=r.__V),r.i=void 0,r.__V=He})),kr=j=null},S.__c=function(t,e){e.some(function(r){try{r.__h.forEach(Ue),r.__h=r.__h.filter(function(o){return!o.__||Hr(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],S.__e(o,r.__v)}}),jo&&jo(t,e)},S.unmount=function(t){Wo&&Wo(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{Ue(o)}catch(i){e=i}}),r.__H=void 0,e&&S.__e(e,r.__v))};var qo=typeof requestAnimationFrame=="function";function Ls(t){var e,r=function(){clearTimeout(o),qo&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(r,100);qo&&(e=requestAnimationFrame(r))}function Ue(t){var e=j,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),j=e}function Hr(t){var e=j;t.__c=t.__(),j=e}function Xi(t,e){return!t||t.length!==e.length||e.some(function(r,o){return r!==t[o]})}function Ko(t,e){return typeof e=="function"?e(t):e}function st(){return function(t){var e=j.context[t.__c],r=ar(Ae++,9);return r.c=t,e?(r.__==null&&(r.__=!0,e.sub(j)),e.props.value):t.__}(Qi)}var Rs={search:{placeholder:"Type a keyword..."},sort:{sortAsc:"Sort column ascending",sortDesc:"Sort column descending"},pagination:{previous:"Previous",next:"Next",navigate:function(t,e){return"Page "+t+" of "+e},page:function(t){return"Page "+t},showing:"Showing",of:"of",to:"to",results:"results"},loading:"Loading...",noRecordsFound:"No matching records found",error:"An error happened while fetching the data"},Ns=function(){function t(r){this._language=void 0,this._defaultLanguage=void 0,this._language=r,this._defaultLanguage=Rs}var e=t.prototype;return e.getString=function(r,o){if(!o||!r)return null;var i=r.split("."),n=i[0];if(o[n]){var s=o[n];return typeof s=="string"?function(){return s}:typeof s=="function"?s:this.getString(i.slice(1).join("."),s)}return null},e.translate=function(r){var o,i=this.getString(r,this._language);return(o=i||this.getString(r,this._defaultLanguage))?o.apply(void 0,[].slice.call(arguments,1)):r},t}();function lr(){var t=st();return function(e){var r;return(r=t.translator).translate.apply(r,[e].concat([].slice.call(arguments,1)))}}var Yo=function(t){return function(e){return I({},e,{search:{keyword:t}})}};function le(){return st().store}function kt(t){var e=le(),r=Bt(t(e.getState())),o=r[0],i=r[1];return ct(function(){return e.subscribe(function(){var n=t(e.getState());o!==n&&i(n)})},[]),o}function Ds(){var t,e=Bt(void 0),r=e[0],o=e[1],i=st(),n=i.search,s=lr(),a=le().dispatch,c=kt(function(p){return p.search});ct(function(){r&&r.setProps({keyword:c==null?void 0:c.keyword})},[c,r]),ct(function(){o(n.server?new Fo({keyword:n.keyword,url:n.server.url,body:n.server.body}):new Ts({keyword:n.keyword,columns:i.header&&i.header.columns,ignoreHiddenColumns:n.ignoreHiddenColumns||n.ignoreHiddenColumns===void 0,selector:n.selector})),n.keyword&&a(Yo(n.keyword))},[n]),ct(function(){if(r)return i.pipeline.register(r),function(){return i.pipeline.unregister(r)}},[i,r]);var u,l,h,m=function(p,b){return ke=8,Gi(function(){return p},b)}((u=function(p){p.target instanceof HTMLInputElement&&a(Yo(p.target.value))},l=r instanceof Fo?n.debounceTimeout||250:0,function(){var p=arguments;return new Promise(function(b){h&&clearTimeout(h),h=setTimeout(function(){return b(u.apply(void 0,[].slice.call(p)))},l)})}),[n,r]);return w("div",{className:T(H("search",(t=i.className)==null?void 0:t.search))},w("input",{type:"search",placeholder:s("search.placeholder"),"aria-label":s("search.placeholder"),onInput:m,className:H(T("input"),T("search","input")),defaultValue:(c==null?void 0:c.keyword)||""}))}var Go=function(t){function e(){return t.apply(this,arguments)||this}K(e,t);var r=e.prototype;return r.validateProps=function(){if(isNaN(Number(this.props.limit))||isNaN(Number(this.props.page)))throw Error("Invalid parameters passed")},r._process=function(o){var i=this.props.page;return new sr(o.rows.slice(i*this.props.limit,(i+1)*this.props.limit))},tt(e,[{key:"type",get:function(){return J.Limit}}]),e}(At),Xo=function(t){function e(){return t.apply(this,arguments)||this}return K(e,t),e.prototype._process=function(r){var o={};return this.props.url&&(o.url=this.props.url(r.url,this.props.page,this.props.limit)),this.props.body&&(o.body=this.props.body(r.body,this.props.page,this.props.limit)),I({},r,o)},tt(e,[{key:"type",get:function(){return J.ServerLimit}}]),e}(At);function Bs(){var t=st(),e=t.pagination,r=e.server,o=e.summary,i=o===void 0||o,n=e.nextButton,s=n===void 0||n,a=e.prevButton,c=a===void 0||a,u=e.buttonsCount,l=u===void 0?3:u,h=e.limit,m=h===void 0?10:h,p=e.page,b=p===void 0?0:p,y=e.resetPageOnUpdate,v=y===void 0||y,g=Ee(null),C=Bt(b),_=C[0],k=C[1],L=Bt(0),V=L[0],P=L[1],x=lr();ct(function(){return r?(g.current=new Xo({limit:m,page:_,url:r.url,body:r.body}),t.pipeline.register(g.current)):(g.current=new Go({limit:m,page:_}),t.pipeline.register(g.current)),g.current instanceof Xo?t.pipeline.on("afterProcess",function(R){return P(R.length)}):g.current instanceof Go&&g.current.on("beforeProcess",function(R){return P(R.length)}),t.pipeline.on("updated",U),t.pipeline.on("error",function(){P(0),k(0)}),function(){t.pipeline.unregister(g.current),t.pipeline.off("updated",U)}},[]);var U=function(R){v&&R!==g.current&&(k(0),g.current.props.page!==0&&g.current.setProps({page:0}))},O=function(){return Math.ceil(V/m)},X=function(R){if(R>=O()||R<0||R===_)return null;k(R),g.current.setProps({page:R})};return w("div",{className:H(T("pagination"),t.className.pagination)},w(Ct,null,i&&V>0&&w("div",{role:"status","aria-live":"polite",className:H(T("summary"),t.className.paginationSummary),title:x("pagination.navigate",_+1,O())},x("pagination.showing")," ",w("b",null,x(""+(_*m+1)))," ",x("pagination.to")," ",w("b",null,x(""+Math.min((_+1)*m,V)))," ",x("pagination.of")," ",w("b",null,x(""+V))," ",x("pagination.results"))),w("div",{className:T("pages")},c&&w("button",{tabIndex:0,role:"button",disabled:_===0,onClick:function(){return X(_-1)},title:x("pagination.previous"),"aria-label":x("pagination.previous"),className:H(t.className.paginationButton,t.className.paginationButtonPrev)},x("pagination.previous")),function(){if(l<=0)return null;var R=Math.min(O(),l),et=Math.min(_,Math.floor(R/2));return _+Math.floor(R/2)>=O()&&(et=R-(O()-_)),w(Ct,null,O()>R&&_-et>0&&w(Ct,null,w("button",{tabIndex:0,role:"button",onClick:function(){return X(0)},title:x("pagination.firstPage"),"aria-label":x("pagination.firstPage"),className:t.className.paginationButton},x("1")),w("button",{tabIndex:-1,className:H(T("spread"),t.className.paginationButton)},"...")),Array.from(Array(R).keys()).map(function(N){return _+(N-et)}).map(function(N){return w("button",{tabIndex:0,role:"button",onClick:function(){return X(N)},className:H(_===N?H(T("currentPage"),t.className.paginationButtonCurrent):null,t.className.paginationButton),title:x("pagination.page",N+1),"aria-label":x("pagination.page",N+1)},x(""+(N+1)))}),O()>R&&O()>_+et+1&&w(Ct,null,w("button",{tabIndex:-1,className:H(T("spread"),t.className.paginationButton)},"..."),w("button",{tabIndex:0,role:"button",onClick:function(){return X(O()-1)},title:x("pagination.page",O()),"aria-label":x("pagination.page",O()),className:t.className.paginationButton},x(""+O()))))}(),s&&w("button",{tabIndex:0,role:"button",disabled:O()===_+1||O()===0,onClick:function(){return X(_+1)},title:x("pagination.next"),"aria-label":x("pagination.next"),className:H(t.className.paginationButton,t.className.paginationButtonNext)},x("pagination.next"))))}function Ms(t,e){return typeof t=="string"?t.indexOf("%")>-1?e/100*parseInt(t,10):parseInt(t,10):t}function $r(t){return t?Math.floor(t)+"px":""}function Fs(t){var e=t.tableRef.cloneNode(!0);return e.style.position="absolute",e.style.width="100%",e.style.zIndex="-2147483640",e.style.visibility="hidden",w("div",{ref:function(r){r&&r.appendChild(e)}})}function Vs(t){if(!t)return"";var e=t.split(" ");return e.length===1&&/([a-z][A-Z])+/g.test(t)?t:e.map(function(r,o){return o==0?r.toLowerCase():r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}).join("")}var Yt,gt=new(function(){function t(){}var e=t.prototype;return e.format=function(r,o){return"[Grid.js] ["+o.toUpperCase()+"]: "+r},e.error=function(r,o){o===void 0&&(o=!1);var i=this.format(r,"error");if(o)throw Error(i);console.error(i)},e.warn=function(r){console.warn(this.format(r,"warn"))},e.info=function(r){console.info(this.format(r,"info"))},t}());(function(t){t[t.Header=0]="Header",t[t.Footer=1]="Footer",t[t.Cell=2]="Cell"})(Yt||(Yt={}));var Zo=function(){function t(){this.plugins=void 0,this.plugins=[]}var e=t.prototype;return e.get=function(r){return this.plugins.find(function(o){return o.id===r})},e.add=function(r){return r.id?this.get(r.id)?(gt.error("Duplicate plugin ID: "+r.id),this):(this.plugins.push(r),this):(gt.error("Plugin ID cannot be empty"),this)},e.remove=function(r){var o=this.get(r);return o&&this.plugins.splice(this.plugins.indexOf(o),1),this},e.list=function(r){var o;return o=r!=null||r!=null?this.plugins.filter(function(i){return i.position===r}):this.plugins,o.sort(function(i,n){return i.order&&n.order?i.order-n.order:1})},t}();function cr(t){var e=this,r=st();if(t.pluginId){var o=r.plugin.get(t.pluginId);return o?w(Ct,{},w(o.component,I({plugin:o},t.props))):null}return t.position!==void 0?w(Ct,{},r.plugin.list(t.position).map(function(i){return w(i.component,I({plugin:i},e.props.props))})):null}var oe=function(t){function e(){var o;return(o=t.call(this)||this)._columns=void 0,o._columns=[],o}K(e,t);var r=e.prototype;return r.adjustWidth=function(o,i,n){var s=o.container,a=o.autoWidth;if(!s)return this;var c=s.clientWidth,u={};i.current&&a&&(_e(w(Fs,{tableRef:i.current}),n.current),u=function(p){var b=p.querySelector("table");if(!b)return{};var y=b.className,v=b.style.cssText;b.className=y+" "+T("shadowTable"),b.style.tableLayout="auto",b.style.width="auto",b.style.padding="0",b.style.margin="0",b.style.border="none",b.style.outline="none";var g=Array.from(b.parentNode.querySelectorAll("thead th")).reduce(function(C,_){var k;return _.style.width=_.clientWidth+"px",I(((k={})[_.getAttribute("data-column-id")]={minWidth:_.clientWidth},k),C)},{});return b.className=y,b.style.cssText=v,b.style.tableLayout="auto",Array.from(b.parentNode.querySelectorAll("thead th")).reduce(function(C,_){return C[_.getAttribute("data-column-id")].width=_.clientWidth,C},g)}(n.current));for(var l,h=ot(e.tabularFormat(this.columns).reduce(function(p,b){return p.concat(b)},[]));!(l=h()).done;){var m=l.value;m.columns&&m.columns.length>0||(!m.width&&a?m.id in u&&(m.width=$r(u[m.id].width),m.minWidth=$r(u[m.id].minWidth)):m.width=$r(Ms(m.width,c)))}return i.current&&a&&_e(null,n.current),this},r.setSort=function(o,i){for(var n,s=ot(i||this.columns||[]);!(n=s()).done;){var a=n.value;a.columns&&a.columns.length>0?a.sort=void 0:a.sort===void 0&&o?a.sort={}:a.sort?typeof a.sort=="object"&&(a.sort=I({},a.sort)):a.sort=void 0,a.columns&&this.setSort(o,a.columns)}},r.setResizable=function(o,i){for(var n,s=ot(i||this.columns||[]);!(n=s()).done;){var a=n.value;a.resizable===void 0&&(a.resizable=o),a.columns&&this.setResizable(o,a.columns)}},r.setID=function(o){for(var i,n=ot(o||this.columns||[]);!(i=n()).done;){var s=i.value;s.id||typeof s.name!="string"||(s.id=Vs(s.name)),s.id||gt.error('Could not find a valid ID for one of the columns. Make sure a valid "id" is set for all columns.'),s.columns&&this.setID(s.columns)}},r.populatePlugins=function(o,i){for(var n,s=ot(i);!(n=s()).done;){var a=n.value;a.plugin!==void 0&&o.add(I({id:a.id},a.plugin,{position:Yt.Cell}))}},e.fromColumns=function(o){for(var i,n=new e,s=ot(o);!(i=s()).done;){var a=i.value;if(typeof a=="string"||Ri(a))n.columns.push({name:a});else if(typeof a=="object"){var c=a;c.columns&&(c.columns=e.fromColumns(c.columns).columns),typeof c.plugin=="object"&&c.data===void 0&&(c.data=null),n.columns.push(a)}}return n},e.createFromConfig=function(o){var i=new e;return o.from?i.columns=e.fromHTMLTable(o.from).columns:o.columns?i.columns=e.fromColumns(o.columns).columns:!o.data||typeof o.data[0]!="object"||o.data[0]instanceof Array||(i.columns=Object.keys(o.data[0]).map(function(n){return{name:n}})),i.columns.length?(i.setID(),i.setSort(o.sort),i.setResizable(o.resizable),i.populatePlugins(o.plugin,i.columns),i):null},e.fromHTMLTable=function(o){for(var i,n=new e,s=ot(o.querySelector("thead").querySelectorAll("th"));!(i=s()).done;){var a=i.value;n.columns.push({name:a.innerHTML,width:a.width})}return n},e.tabularFormat=function(o){var i=[],n=o||[],s=[];if(n&&n.length){i.push(n);for(var a,c=ot(n);!(a=c()).done;){var u=a.value;u.columns&&u.columns.length&&(s=s.concat(u.columns))}s.length&&(i=i.concat(this.tabularFormat(s)))}return i},e.leafColumns=function(o){var i=[],n=o||[];if(n&&n.length)for(var s,a=ot(n);!(s=a()).done;){var c=s.value;c.columns&&c.columns.length!==0||i.push(c),c.columns&&(i=i.concat(this.leafColumns(c.columns)))}return i},e.maximumDepth=function(o){return this.tabularFormat([o]).length-1},tt(e,[{key:"columns",get:function(){return this._columns},set:function(o){this._columns=o}},{key:"visibleColumns",get:function(){return this._columns.filter(function(o){return!o.hidden})}}]),e}(nr),Zi=function(){},Jo=function(t){function e(o){var i;return(i=t.call(this)||this).data=void 0,i.set(o),i}K(e,t);var r=e.prototype;return r.get=function(){try{return Promise.resolve(this.data()).then(function(o){return{data:o,total:o.length}})}catch(o){return Promise.reject(o)}},r.set=function(o){return o instanceof Array?this.data=function(){return o}:o instanceof Function&&(this.data=o),this},e}(Zi),Ji=function(t){function e(o){var i;return(i=t.call(this)||this).options=void 0,i.options=o,i}K(e,t);var r=e.prototype;return r.handler=function(o){return typeof this.options.handle=="function"?this.options.handle(o):o.ok?o.json():(gt.error("Could not fetch data: "+o.status+" - "+o.statusText,!0),null)},r.get=function(o){var i=I({},this.options,o);return typeof i.data=="function"?i.data(i):fetch(i.url,i).then(this.handler.bind(this)).then(function(n){return{data:i.then(n),total:typeof i.total=="function"?i.total(n):void 0}})},e}(Zi),Hs=function(){function t(){}return t.createFromConfig=function(e){var r=null;return e.data&&(r=new Jo(e.data)),e.from&&(r=new Jo(this.tableElementToArray(e.from)),e.from.style.display="none"),e.server&&(r=new Ji(e.server)),r||gt.error("Could not determine the storage type",!0),r},t.tableElementToArray=function(e){for(var r,o,i=[],n=ot(e.querySelector("tbody").querySelectorAll("tr"));!(r=n()).done;){for(var s,a=[],c=ot(r.value.querySelectorAll("td"));!(s=c()).done;){var u=s.value;u.childNodes.length===1&&u.childNodes[0].nodeType===Node.TEXT_NODE?a.push((o=u.innerHTML,new DOMParser().parseFromString(o,"text/html").documentElement.textContent)):a.push(Ki(u.innerHTML))}i.push(a)}return i},t}(),Qo=typeof Symbol<"u"?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function it(t,e,r){if(!t.s){if(r instanceof ee){if(!r.s)return void(r.o=it.bind(null,t,e));1&e&&(e=r.s),r=r.v}if(r&&r.then)return void r.then(it.bind(null,t,e),it.bind(null,t,2));t.s=e,t.v=r;var o=t.o;o&&o(t)}}var ee=function(){function t(){}return t.prototype.then=function(e,r){var o=new t,i=this.s;if(i){var n=1&i?e:r;if(n){try{it(o,1,n(this.v))}catch(s){it(o,2,s)}return o}return this}return this.o=function(s){try{var a=s.v;1&s.s?it(o,1,e?e(a):a):r?it(o,1,r(a)):it(o,2,a)}catch(c){it(o,2,c)}},o},t}();function ti(t){return t instanceof ee&&1&t.s}var Us=function(t){function e(o){var i;return(i=t.call(this)||this)._steps=new Map,i.cache=new Map,i.lastProcessorIndexUpdated=-1,o&&o.forEach(function(n){return i.register(n)}),i}K(e,t);var r=e.prototype;return r.clearCache=function(){this.cache=new Map,this.lastProcessorIndexUpdated=-1},r.register=function(o,i){if(i===void 0&&(i=null),!o)throw Error("Processor is not defined");if(o.type===null)throw Error("Processor type is not defined");if(this.findProcessorIndexByID(o.id)>-1)throw Error("Processor ID "+o.id+" is already defined");return o.on("propsUpdated",this.processorPropsUpdated.bind(this)),this.addProcessorByPriority(o,i),this.afterRegistered(o),o},r.tryRegister=function(o,i){i===void 0&&(i=null);try{return this.register(o,i)}catch{}},r.unregister=function(o){if(o&&this.findProcessorIndexByID(o.id)!==-1){var i=this._steps.get(o.type);i&&i.length&&(this._steps.set(o.type,i.filter(function(n){return n!=o})),this.emit("updated",o))}},r.addProcessorByPriority=function(o,i){var n=this._steps.get(o.type);if(!n){var s=[];this._steps.set(o.type,s),n=s}if(i===null||i<0)n.push(o);else if(n[i]){var a=n.slice(0,i-1),c=n.slice(i+1);this._steps.set(o.type,a.concat(o).concat(c))}else n[i]=o},r.getStepsByType=function(o){return this.steps.filter(function(i){return i.type===o})},r.getSortedProcessorTypes=function(){return Object.keys(J).filter(function(o){return!isNaN(Number(o))}).map(function(o){return Number(o)})},r.process=function(o){try{var i=function(l){return n.lastProcessorIndexUpdated=a.length,n.emit("afterProcess",c),c},n=this,s=n.lastProcessorIndexUpdated,a=n.steps,c=o,u=function(l,h){try{var m=function(p,b,y){if(typeof p[Qo]=="function"){var v,g,C,_=p[Qo]();if(function P(x){try{for(;!(v=_.next()).done;)if((x=b(v.value))&&x.then){if(!ti(x))return void x.then(P,C||(C=it.bind(null,g=new ee,2)));x=x.v}g?it(g,1,x):g=x}catch(U){it(g||(g=new ee),2,U)}}(),_.return){var k=function(P){try{v.done||_.return()}catch{}return P};if(g&&g.then)return g.then(k,function(P){throw k(P)});k()}return g}if(!("length"in p))throw new TypeError("Object is not iterable");for(var L=[],V=0;V<p.length;V++)L.push(p[V]);return function(P,x,U){var O,X,R=-1;return function et(N){try{for(;++R<P.length;)if((N=x(R))&&N.then){if(!ti(N))return void N.then(et,X||(X=it.bind(null,O=new ee,2)));N=N.v}O?it(O,1,N):O=N}catch(Ot){it(O||(O=new ee),2,Ot)}}(),O}(L,function(P){return b(L[P])})}(a,function(p){var b=n.findProcessorIndexByID(p.id),y=function(){if(b>=s)return Promise.resolve(p.process(c)).then(function(v){n.cache.set(p.id,c=v)});c=n.cache.get(p.id)}();if(y&&y.then)return y.then(function(){})})}catch(p){return h(p)}return m&&m.then?m.then(void 0,h):m}(0,function(l){throw gt.error(l),n.emit("error",c),l});return Promise.resolve(u&&u.then?u.then(i):i())}catch(l){return Promise.reject(l)}},r.findProcessorIndexByID=function(o){return this.steps.findIndex(function(i){return i.id==o})},r.setLastProcessorIndex=function(o){var i=this.findProcessorIndexByID(o.id);this.lastProcessorIndexUpdated>i&&(this.lastProcessorIndexUpdated=i)},r.processorPropsUpdated=function(o){this.setLastProcessorIndex(o),this.emit("propsUpdated"),this.emit("updated",o)},r.afterRegistered=function(o){this.setLastProcessorIndex(o),this.emit("afterRegister"),this.emit("updated",o)},tt(e,[{key:"steps",get:function(){for(var o,i=[],n=ot(this.getSortedProcessorTypes());!(o=n()).done;){var s=this._steps.get(o.value);s&&s.length&&(i=i.concat(s))}return i.filter(function(a){return a})}}]),e}(ao),js=function(t){function e(){return t.apply(this,arguments)||this}return K(e,t),e.prototype._process=function(r){try{return Promise.resolve(this.props.storage.get(r))}catch(o){return Promise.reject(o)}},tt(e,[{key:"type",get:function(){return J.Extractor}}]),e}(At),Ws=function(t){function e(){return t.apply(this,arguments)||this}return K(e,t),e.prototype._process=function(r){var o=sr.fromArray(r.data);return o.length=r.total,o},tt(e,[{key:"type",get:function(){return J.Transformer}}]),e}(At),qs=function(t){function e(){return t.apply(this,arguments)||this}return K(e,t),e.prototype._process=function(){return Object.entries(this.props.serverStorageOptions).filter(function(r){return typeof r[1]!="function"}).reduce(function(r,o){var i;return I({},r,((i={})[o[0]]=o[1],i))},{})},tt(e,[{key:"type",get:function(){return J.Initiator}}]),e}(At),Ks=function(t){function e(){return t.apply(this,arguments)||this}K(e,t);var r=e.prototype;return r.castData=function(o){if(!o||!o.length)return[];if(!this.props.header||!this.props.header.columns)return o;var i=oe.leafColumns(this.props.header.columns);return o[0]instanceof Array?o.map(function(n){var s=0;return i.map(function(a,c){return a.data!==void 0?(s++,typeof a.data=="function"?a.data(n):a.data):n[c-s]})}):typeof o[0]!="object"||o[0]instanceof Array?[]:o.map(function(n){return i.map(function(s,a){return s.data!==void 0?typeof s.data=="function"?s.data(n):s.data:s.id?n[s.id]:(gt.error("Could not find the correct cell for column at position "+a+`.
                          Make sure either 'id' or 'selector' is defined for all columns.`),null)})})},r._process=function(o){return{data:this.castData(o.data),total:o.total}},tt(e,[{key:"type",get:function(){return J.Transformer}}]),e}(At),Ys=function(){function t(){}return t.createFromConfig=function(e){var r=new Us;return e.storage instanceof Ji&&r.register(new qs({serverStorageOptions:e.server})),r.register(new js({storage:e.storage})),r.register(new Ks({header:e.header})),r.register(new Ws),r},t}(),Gs=function(t){var e=this;this.state=void 0,this.listeners=[],this.isDispatching=!1,this.getState=function(){return e.state},this.getListeners=function(){return e.listeners},this.dispatch=function(r){if(typeof r!="function")throw new Error("Reducer is not a function");if(e.isDispatching)throw new Error("Reducers may not dispatch actions");e.isDispatching=!0;var o=e.state;try{e.state=r(e.state)}finally{e.isDispatching=!1}for(var i,n=ot(e.listeners);!(i=n()).done;)(0,i.value)(e.state,o);return e.state},this.subscribe=function(r){if(typeof r!="function")throw new Error("Listener is not a function");return e.listeners=[].concat(e.listeners,[r]),function(){return e.listeners=e.listeners.filter(function(o){return o!==r})}},this.state=t},Qi=function(t,e){var r={__c:e="__cC"+Ni++,__:null,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,n;return this.getChildContext||(i=[],(n={})[e]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&i.some(Vr)},this.sub=function(s){i.push(s);var a=s.componentWillUnmount;s.componentWillUnmount=function(){i.splice(i.indexOf(s),1),a&&a.call(s)}}),o.children}};return r.Provider.__=r.Consumer.contextType=r}(),Xs=function(){function t(){Object.assign(this,t.defaultConfig())}var e=t.prototype;return e.assign=function(r){return Object.assign(this,r)},e.update=function(r){return r?(this.assign(t.fromPartialConfig(I({},this,r))),this):this},t.defaultConfig=function(){return{store:new Gs({status:lt.Init,header:void 0,data:null}),plugin:new Zo,tableRef:{current:null},width:"100%",height:"auto",processingThrottleMs:100,autoWidth:!0,style:{},className:{}}},t.fromPartialConfig=function(r){var o=new t().assign(r);return typeof r.sort=="boolean"&&r.sort&&o.assign({sort:{multiColumn:!0}}),o.assign({header:oe.createFromConfig(o)}),o.assign({storage:Hs.createFromConfig(o)}),o.assign({pipeline:Ys.createFromConfig(o)}),o.assign({translator:new Ns(o.language)}),o.plugin=new Zo,o.search&&o.plugin.add({id:"search",position:Yt.Header,component:Ds}),o.pagination&&o.plugin.add({id:"pagination",position:Yt.Footer,component:Bs}),o.plugins&&o.plugins.forEach(function(i){return o.plugin.add(i)}),o},t}();function tn(t){var e,r=st();return w("td",I({role:t.role,colSpan:t.colSpan,"data-column-id":t.column&&t.column.id,className:H(T("td"),t.className,r.className.td),style:I({},t.style,r.style.td),onClick:function(o){t.messageCell||r.eventEmitter.emit("cellClick",o,t.cell,t.column,t.row)}},(e=t.column)?typeof e.attributes=="function"?e.attributes(t.cell.data,t.row,t.column):e.attributes:{}),t.column&&typeof t.column.formatter=="function"?t.column.formatter(t.cell.data,t.row,t.column):t.column&&t.column.plugin?w(cr,{pluginId:t.column.id,props:{column:t.column,cell:t.cell,row:t.row}}):t.cell.data)}function lo(t){var e=st(),r=kt(function(o){return o.header});return w("tr",{className:H(T("tr"),e.className.tr),onClick:function(o){t.messageRow||e.eventEmitter.emit("rowClick",o,t.row)}},t.children?t.children:t.row.cells.map(function(o,i){var n=function(s){if(r){var a=oe.leafColumns(r.columns);if(a)return a[s]}return null}(i);return n&&n.hidden?null:w(tn,{key:o.id,cell:o,row:t.row,column:n})}))}function Sr(t){return w(lo,{messageRow:!0},w(tn,{role:"alert",colSpan:t.colSpan,messageCell:!0,cell:new so(t.message),className:H(T("message"),t.className?t.className:null)}))}function Zs(){var t=st(),e=kt(function(s){return s.data}),r=kt(function(s){return s.status}),o=kt(function(s){return s.header}),i=lr(),n=function(){return o?o.visibleColumns.length:0};return w("tbody",{className:H(T("tbody"),t.className.tbody)},e&&e.rows.map(function(s){return w(lo,{key:s.id,row:s})}),r===lt.Loading&&(!e||e.length===0)&&w(Sr,{message:i("loading"),colSpan:n(),className:H(T("loading"),t.className.loading)}),r===lt.Rendered&&e&&e.length===0&&w(Sr,{message:i("noRecordsFound"),colSpan:n(),className:H(T("notfound"),t.className.notfound)}),r===lt.Error&&w(Sr,{message:i("error"),colSpan:n(),className:H(T("error"),t.className.error)}))}var Js=function(t){function e(){return t.apply(this,arguments)||this}K(e,t);var r=e.prototype;return r.validateProps=function(){for(var o,i=ot(this.props.columns);!(o=i()).done;){var n=o.value;n.direction===void 0&&(n.direction=1),n.direction!==1&&n.direction!==-1&&gt.error("Invalid sort direction "+n.direction)}},r.compare=function(o,i){return o>i?1:o<i?-1:0},r.compareWrapper=function(o,i){for(var n,s=0,a=ot(this.props.columns);!(n=a()).done;){var c=n.value;if(s!==0)break;var u=o.cells[c.index].data,l=i.cells[c.index].data;s|=typeof c.compare=="function"?c.compare(u,l)*c.direction:this.compare(u,l)*c.direction}return s},r._process=function(o){var i=[].concat(o.rows);i.sort(this.compareWrapper.bind(this));var n=new sr(i);return n.length=o.length,n},tt(e,[{key:"type",get:function(){return J.Sort}}]),e}(At),ei=function(t,e,r,o){return function(i){var n,s=(n=i.sort)!=null&&n.columns?i.sort.columns.map(function(y){return I({},y)}):[],a=s.length,c=s.find(function(y){return y.index===t}),u=!1,l=!1,h=!1,m=!1;if(c!==void 0?r?c.direction===-1?h=!0:m=!0:a===1?m=!0:a>1&&(l=!0,u=!0):a===0?u=!0:a>0&&!r?(u=!0,l=!0):a>0&&r&&(u=!0),l&&(s=[]),u)s.push({index:t,direction:e,compare:o});else if(m){var p=s.indexOf(c);s[p].direction=e}else if(h){var b=s.indexOf(c);s.splice(b,1)}return I({},i,{sort:{columns:s}})}},en=function(t,e,r){return function(o){var i=(o.sort?[].concat(o.sort.columns):[]).find(function(n){return n.index===t});return I({},o,i?ei(t,i.direction===1?-1:1,e,r)(o):ei(t,1,e,r)(o))}},Qs=function(t){function e(){return t.apply(this,arguments)||this}return K(e,t),e.prototype._process=function(r){var o={};return this.props.url&&(o.url=this.props.url(r.url,this.props.columns)),this.props.body&&(o.body=this.props.body(r.body,this.props.columns)),I({},r,o)},tt(e,[{key:"type",get:function(){return J.ServerSort}}]),e}(At);function ta(t){var e=st(),r=le().dispatch,o=lr(),i=Bt(0),n=i[0],s=i[1],a=e.sort,c=kt(function(h){return h.sort}),u=typeof(a==null?void 0:a.server)=="object"?J.ServerSort:J.Sort,l=function(){var h=e.pipeline.getStepsByType(u);if(h.length)return h[0]};return ct(function(){var h=l()||(u===J.ServerSort?new Qs(I({columns:c?c.columns:[]},a.server)):new Js({columns:c?c.columns:[]}));return e.pipeline.tryRegister(h),function(){return e.pipeline.unregister(h)}},[e]),ct(function(){if(c){var h,m=c.columns.find(function(p){return p.index===t.index});m?(n===0&&(m.direction=(h=t.direction)!=null?h:1),s(m.direction)):s(0)}},[c]),ct(function(){var h=l();h&&c&&h.setProps({columns:c.columns})},[c]),w("button",{tabIndex:-1,"aria-label":o("sort.sort"+(n===1?"Desc":"Asc")),title:o("sort.sort"+(n===1?"Desc":"Asc")),className:H(T("sort"),T("sort",function(h){return h===1?"asc":h===-1?"desc":"neutral"}(n)),e.className.sort),onClick:function(h){h.preventDefault(),h.stopPropagation(),r(en(t.index,h.shiftKey===!0&&a.multiColumn,t.compare))}})}var rn=function(t,e){var r;e===void 0&&(e=100);var o=Date.now(),i=function(){o=Date.now(),t.apply(void 0,[].slice.call(arguments))};return function(){var n=[].slice.call(arguments),s=Date.now(),a=s-o;a>=e?i.apply(void 0,n):(r&&clearTimeout(r),r=setTimeout(function(){i.apply(void 0,n),r=null},e-a))}};function ea(t){var e,r=function(s){return s instanceof MouseEvent?Math.floor(s.pageX):Math.floor(s.changedTouches[0].pageX)},o=function(s){s.stopPropagation();var a=parseInt(t.thRef.current.style.width,10)-r(s);e=rn(function(c){return i(c,a)},10),document.addEventListener("mouseup",n),document.addEventListener("touchend",n),document.addEventListener("mousemove",e),document.addEventListener("touchmove",e)},i=function(s,a){s.stopPropagation();var c=t.thRef.current;a+r(s)>=parseInt(c.style.minWidth,10)&&(c.style.width=a+r(s)+"px")},n=function s(a){a.stopPropagation(),document.removeEventListener("mouseup",s),document.removeEventListener("mousemove",e),document.removeEventListener("touchmove",e),document.removeEventListener("touchend",s)};return w("div",{className:H(T("th"),T("resizable")),onMouseDown:o,onTouchStart:o,onClick:function(s){return s.stopPropagation()}})}function ra(t){var e=st(),r=Ee(null),o=Bt({}),i=o[0],n=o[1],s=le().dispatch;ct(function(){if(e.fixedHeader&&r.current){var l=r.current.offsetTop;typeof l=="number"&&n({top:l})}},[r]);var a,c=function(){return t.column.sort!=null},u=function(l){l.stopPropagation(),c()&&s(en(t.index,l.shiftKey===!0&&e.sort.multiColumn,t.column.sort.compare))};return w("th",I({ref:r,"data-column-id":t.column&&t.column.id,className:H(T("th"),c()?T("th","sort"):null,e.fixedHeader?T("th","fixed"):null,e.className.th),onClick:u,style:I({},e.style.th,{minWidth:t.column.minWidth,width:t.column.width},i,t.style),onKeyDown:function(l){c()&&l.which===13&&u(l)},rowSpan:t.rowSpan>1?t.rowSpan:void 0,colSpan:t.colSpan>1?t.colSpan:void 0},(a=t.column)?typeof a.attributes=="function"?a.attributes(null,null,t.column):a.attributes:{},c()?{tabIndex:0}:{}),w("div",{className:T("th","content")},t.column.name!==void 0?t.column.name:t.column.plugin!==void 0?w(cr,{pluginId:t.column.plugin.id,props:{column:t.column}}):null),c()&&w(ta,I({index:t.index},t.column.sort)),t.column.resizable&&t.index<e.header.visibleColumns.length-1&&w(ea,{column:t.column,thRef:r}))}function oa(){var t,e=st(),r=kt(function(o){return o.header});return r?w("thead",{key:r.id,className:H(T("thead"),e.className.thead)},(t=oe.tabularFormat(r.columns)).map(function(o,i){return function(n,s,a){var c=oe.leafColumns(r.columns);return w(lo,null,n.map(function(u){return u.hidden?null:function(l,h,m,p){var b=function(y,v,g){var C=oe.maximumDepth(y),_=g-v;return{rowSpan:Math.floor(_-C-C/_),colSpan:y.columns&&y.columns.length||1}}(l,h,p);return w(ra,{column:l,index:m,colSpan:b.colSpan,rowSpan:b.rowSpan})}(u,s,c.indexOf(u),a)}))}(o,i,t.length)})):null}var ri=function(t){return function(e){return I({},e,{header:t})}};function ia(){var t=st(),e=Ee(null),r=le().dispatch;return ct(function(){e&&r(function(o){return function(i){return I({},i,{tableRef:o})}}(e))},[e]),w("table",{ref:e,role:"grid",className:H(T("table"),t.className.table),style:I({},t.style.table,{height:t.height})},w(oa,null),w(Zs,null))}function na(){var t=Bt(!0),e=t[0],r=t[1],o=Ee(null),i=st();return ct(function(){o.current.children.length===0&&r(!1)},[o]),e?w("div",{ref:o,className:H(T("head"),i.className.header),style:I({},i.style.header)},w(cr,{position:Yt.Header})):null}function sa(){var t=Ee(null),e=Bt(!0),r=e[0],o=e[1],i=st();return ct(function(){t.current.children.length===0&&o(!1)},[t]),r?w("div",{ref:t,className:H(T("footer"),i.className.footer),style:I({},i.style.footer)},w(cr,{position:Yt.Footer})):null}function aa(){var t=st(),e=le().dispatch,r=kt(function(a){return a.status}),o=kt(function(a){return a.data}),i=kt(function(a){return a.tableRef}),n={current:null},s=rn(function(){try{e(function(c){return I({},c,{status:lt.Loading})});var a=function(c,u){try{var l=Promise.resolve(t.pipeline.process()).then(function(h){e(function(m){return function(p){return m?I({},p,{data:m,status:lt.Loaded}):p}}(h)),setTimeout(function(){e(function(m){return m.status===lt.Loaded?I({},m,{status:lt.Rendered}):m})},0)})}catch(h){return u(h)}return l&&l.then?l.then(void 0,u):l}(0,function(c){gt.error(c),e(function(u){return I({},u,{data:null,status:lt.Error})})});return Promise.resolve(a&&a.then?a.then(function(){}):void 0)}catch(c){return Promise.reject(c)}},t.processingThrottleMs);return ct(function(){return e(ri(t.header)),s(),t.pipeline.on("updated",s),function(){return t.pipeline.off("updated",s)}},[]),ct(function(){t.header&&r===lt.Loaded&&o!=null&&o.length&&e(ri(t.header.adjustWidth(t,i,n)))},[o,t,n]),w("div",{role:"complementary",className:H("gridjs",T("container"),r===lt.Loading?T("loading"):null,t.className.container),style:I({},t.style.container,{width:t.width})},r===lt.Loading&&w("div",{className:T("loading-bar")}),w(na,null),w("div",{className:T("wrapper"),style:{height:t.height}},w(ia,null)),w(sa,null),w("div",{ref:n,id:"gridjs-temp",className:T("temp")}))}var la=function(t){function e(o){var i;return(i=t.call(this)||this).config=void 0,i.plugin=void 0,i.config=new Xs().assign({instance:Io(i),eventEmitter:Io(i)}).update(o),i.plugin=i.config.plugin,i}K(e,t);var r=e.prototype;return r.updateConfig=function(o){return this.config.update(o),this},r.createElement=function(){return w(Qi.Provider,{value:this.config,children:w(aa,{})})},r.forceRender=function(){return this.config&&this.config.container||gt.error("Container is empty. Make sure you call render() before forceRender()",!0),this.destroy(),_e(this.createElement(),this.config.container),this},r.destroy=function(){this.config.pipeline.clearCache(),_e(null,this.config.container)},r.render=function(o){return o||gt.error("Container element cannot be null",!0),o.childNodes.length>0?(gt.error("The container element "+o+" is not empty. Make sure the container is empty and call render() again"),this):(this.config.container=o,_e(this.createElement(),o),this)},e}(ao),ca=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,co=(t,e,r,o)=>{for(var i=o>1?void 0:o?ua(e,r):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&ca(e,r,i),i};let Ze=class extends pt{constructor(){super(...arguments),this.columns="",this.data=""}render(){return E`
    <head>
    <link rel="stylesheet" href = "/node_modules/gridjs/dist/theme/mermaid.css"></head>
      <div id="grid" class="gridjs-container" style="width:50rem"></div>
    `}updated(t){var i;const e=JSON.parse(this.columns),r=JSON.parse(this.data),o=(i=this.shadowRoot)==null?void 0:i.querySelector("#grid");o&&new la({data:r}).updateConfig({columns:e}).render(o)}};co([f()],Ze.prototype,"columns",2);co([f()],Ze.prototype,"data",2);Ze=co([Ht("grid-component")],Ze);var da=W`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,uo=(t="value")=>(e,r)=>{const o=e.constructor,i=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(n,s,a){var c;const u=o.getPropertyOptions(t),l=typeof u.attribute=="string"?u.attribute:t;if(n===l){const h=u.converter||ne,p=(typeof h=="function"?h:(c=h==null?void 0:h.fromAttribute)!=null?c:ne.fromAttribute)(a,u.type);this[t]!==p&&(this[r]=p)}i.call(this,n,s,a)}},ur=W`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,on=Object.defineProperty,ha=Object.defineProperties,pa=Object.getOwnPropertyDescriptor,fa=Object.getOwnPropertyDescriptors,oi=Object.getOwnPropertySymbols,ma=Object.prototype.hasOwnProperty,ba=Object.prototype.propertyIsEnumerable,nn=t=>{throw TypeError(t)},ii=(t,e,r)=>e in t?on(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Zt=(t,e)=>{for(var r in e||(e={}))ma.call(e,r)&&ii(t,r,e[r]);if(oi)for(var r of oi(e))ba.call(e,r)&&ii(t,r,e[r]);return t},dr=(t,e)=>ha(t,fa(e)),d=(t,e,r,o)=>{for(var i=o>1?void 0:o?pa(e,r):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&on(e,r,i),i},sn=(t,e,r)=>e.has(t)||nn("Cannot "+r),ga=(t,e,r)=>(sn(t,e,"read from private field"),e.get(t)),va=(t,e,r)=>e.has(t)?nn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),ya=(t,e,r,o)=>(sn(t,e,"write to private field"),e.set(t,r),r),pe=new WeakMap,fe=new WeakMap,me=new WeakMap,Ar=new WeakSet,Le=new WeakMap,Pe=class{constructor(t,e){this.handleFormData=r=>{const o=this.options.disabled(this.host),i=this.options.name(this.host),n=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!s&&typeof i=="string"&&i.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(a=>{r.formData.append(i,a.toString())}):r.formData.append(i,n.toString()))},this.handleFormSubmit=r=>{var o;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=pe.get(this.form))==null||o.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Le.set(this.host,[])},this.handleInteraction=r=>{const o=Le.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Zt({form:r=>{const o=r.form;if(o){const n=r.getRootNode().querySelector(`#${o}`);if(n)return n}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Le.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Le.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,pe.has(this.form)?pe.get(this.form).add(this.host):pe.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),fe.has(this.form)||(fe.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),me.has(this.form)||(me.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=pe.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),fe.has(this.form)&&(this.form.reportValidity=fe.get(this.form),fe.delete(this.form)),me.has(this.form)&&(this.form.checkValidity=me.get(this.form),me.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Ar.add(t):Ar.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const r=document.createElement("button");r.type=t,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&(r.name=e.name,r.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{e.hasAttribute(o)&&r.setAttribute(o,e.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,r=!!Ar.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&r),e.toggleAttribute("data-user-valid",t&&r)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},ho=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(dr(Zt({},ho),{valid:!1,valueMissing:!0}));Object.freeze(dr(Zt({},ho),{valid:!1,customError:!0}));var ze=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=r=>{const o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const Ur=new Set,re=new Map;let Wt,po="ltr",fo="en";const an=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(an){const t=new MutationObserver(cn);po=document.documentElement.dir||"ltr",fo=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ln(...t){t.map(e=>{const r=e.$code.toLowerCase();re.has(r)?re.set(r,Object.assign(Object.assign({},re.get(r)),e)):re.set(r,e),Wt||(Wt=e)}),cn()}function cn(){an&&(po=document.documentElement.dir||"ltr",fo=document.documentElement.lang||navigator.language),[...Ur.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let _a=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ur.add(this.host)}hostDisconnected(){Ur.delete(this.host)}dir(){return`${this.host.dir||po}`.toLowerCase()}lang(){return`${this.host.lang||fo}`.toLowerCase()}getTranslationData(e){var r,o;const i=new Intl.Locale(e.replace(/_/g,"-")),n=i==null?void 0:i.language.toLowerCase(),s=(o=(r=i==null?void 0:i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",a=re.get(`${n}-${s}`),c=re.get(n);return{locale:i,language:n,region:s,primary:a,secondary:c}}exists(e,r){var o;const{primary:i,secondary:n}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[e]||n&&n[e]||r.includeFallback&&Wt&&Wt[e])}term(e,...r){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(i&&i[e])n=i[e];else if(Wt&&Wt[e])n=Wt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...r):n}date(e,r){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),r).format(e)}number(e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),r).format(e)}relativeTime(e,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,r)}};var un={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ln(un);var wa=un,Jt=class extends _a{};ln(wa);var jr="";function ni(t){jr=t}function xa(t=""){if(!jr){const e=[...document.getElementsByTagName("script")],r=e.find(o=>o.hasAttribute("data-shoelace"));if(r)ni(r.getAttribute("data-shoelace"));else{const o=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let i="";o&&(i=o.getAttribute("src")),ni(i.split("/").slice(0,-1).join("/"))}}return jr.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Ca={name:"default",resolver:t=>xa(`assets/icons/${t}.svg`)},ka=Ca,si={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},$a={name:"system",resolver:t=>t in si?`data:image/svg+xml,${encodeURIComponent(si[t])}`:""},Sa=$a,Aa=[ka,Sa],Wr=[];function Ea(t){Wr.push(t)}function Pa(t){Wr=Wr.filter(e=>e!==t)}function ai(t){return Aa.find(e=>e.name===t)}var za=W`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function Z(t,e){const r=Zt({waitUntilFirstUpdate:!1},e);return(o,i)=>{const{update:n}=o,s=Array.isArray(t)?t:[t];o.update=function(a){s.forEach(c=>{const u=c;if(a.has(u)){const l=a.get(u),h=this[u];l!==h&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](l,h)}}),n.call(this,a)}}}var wt=W`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,je,at=class extends pt{constructor(){super(),va(this,je,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const r=new CustomEvent(t,Zt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(r),r}static define(t,e=this,r={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,r)}catch{customElements.define(t,class extends e{},r)}return}let i=" (unknown version)",n=i;"version"in e&&e.version&&(i=" v"+e.version),"version"in o&&o.version&&(n=" v"+o.version),!(i&&n&&i===n)&&console.warn(`Attempted to register <${t}>${i}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,r){ga(this,je)||(this.constructor.elementProperties.forEach((o,i)=>{o.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),ya(this,je,!0)),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}};je=new WeakMap;at.version="2.20.1";at.dependencies={};d([f()],at.prototype,"dir",2);d([f()],at.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oa=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,Ta=t=>t.strings===void 0,Ia={},La=(t,e=Ia)=>t._$AH=e;var be=Symbol(),Re=Symbol(),Er,Pr=new Map,dt=class extends at{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var r;let o;if(e!=null&&e.spriteSheet)return this.svg=E`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?be:Re}catch{return Re}try{const i=document.createElement("div");i.innerHTML=await o.text();const n=i.firstElementChild;if(((r=n==null?void 0:n.tagName)==null?void 0:r.toLowerCase())!=="svg")return be;Er||(Er=new DOMParser);const a=Er.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):be}catch{return be}}connectedCallback(){super.connectedCallback(),Ea(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Pa(this)}getIconSource(){const t=ai(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:r}=this.getIconSource(),o=r?ai(this.library):void 0;if(!e){this.svg=null;return}let i=Pr.get(e);if(i||(i=this.resolveIcon(e,o),Pr.set(e,i)),!this.initialRender)return;const n=await i;if(n===Re&&Pr.delete(e),e===this.getIconSource().url){if(Oa(n)){if(this.svg=n,o){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&s&&o.mutator(s)}return}switch(n){case Re:case be:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};dt.styles=[wt,za];d([Y()],dt.prototype,"svg",2);d([f({reflect:!0})],dt.prototype,"name",2);d([f()],dt.prototype,"src",2);d([f()],dt.prototype,"label",2);d([f({reflect:!0})],dt.prototype,"library",2);d([Z("label")],dt.prototype,"handleLabelChange",1);d([Z(["name","src","library"])],dt.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=t=>t??D;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=ro(class extends oo{constructor(t){if(super(t),t.type!==Lt.PROPERTY&&t.type!==Lt.ATTRIBUTE&&t.type!==Lt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ta(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===bt||e===D)return e;const r=t.element,o=t.name;if(t.type===Lt.PROPERTY){if(e===r[o])return bt}else if(t.type===Lt.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(o))return bt}else if(t.type===Lt.ATTRIBUTE&&r.getAttribute(o)===e+"")return bt;return La(t),e}});var A=class extends at{constructor(){super(...arguments),this.formControlController=new Pe(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ze(this,"help-text","label"),this.localize=new Jt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,o="preserve"){const i=e??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(t,i,n,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,o=this.helpText?!0:!!e,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return E`
      <div
        part="form-control"
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${nt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${$(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${$(this.placeholder)}
              minlength=${$(this.minlength)}
              maxlength=${$(this.maxlength)}
              min=${$(this.min)}
              max=${$(this.max)}
              step=${$(this.step)}
              .value=${Je(this.value)}
              autocapitalize=${$(this.autocapitalize)}
              autocomplete=${$(this.autocomplete)}
              autocorrect=${$(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${$(this.pattern)}
              enterkeyhint=${$(this.enterkeyhint)}
              inputmode=${$(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?E`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?E`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?E`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:E`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};A.styles=[wt,ur,da];A.dependencies={"sl-icon":dt};d([Q(".input__control")],A.prototype,"input",2);d([Y()],A.prototype,"hasFocus",2);d([f()],A.prototype,"title",2);d([f({reflect:!0})],A.prototype,"type",2);d([f()],A.prototype,"name",2);d([f()],A.prototype,"value",2);d([uo()],A.prototype,"defaultValue",2);d([f({reflect:!0})],A.prototype,"size",2);d([f({type:Boolean,reflect:!0})],A.prototype,"filled",2);d([f({type:Boolean,reflect:!0})],A.prototype,"pill",2);d([f()],A.prototype,"label",2);d([f({attribute:"help-text"})],A.prototype,"helpText",2);d([f({type:Boolean})],A.prototype,"clearable",2);d([f({type:Boolean,reflect:!0})],A.prototype,"disabled",2);d([f()],A.prototype,"placeholder",2);d([f({type:Boolean,reflect:!0})],A.prototype,"readonly",2);d([f({attribute:"password-toggle",type:Boolean})],A.prototype,"passwordToggle",2);d([f({attribute:"password-visible",type:Boolean})],A.prototype,"passwordVisible",2);d([f({attribute:"no-spin-buttons",type:Boolean})],A.prototype,"noSpinButtons",2);d([f({reflect:!0})],A.prototype,"form",2);d([f({type:Boolean,reflect:!0})],A.prototype,"required",2);d([f()],A.prototype,"pattern",2);d([f({type:Number})],A.prototype,"minlength",2);d([f({type:Number})],A.prototype,"maxlength",2);d([f()],A.prototype,"min",2);d([f()],A.prototype,"max",2);d([f()],A.prototype,"step",2);d([f()],A.prototype,"autocapitalize",2);d([f()],A.prototype,"autocorrect",2);d([f()],A.prototype,"autocomplete",2);d([f({type:Boolean})],A.prototype,"autofocus",2);d([f()],A.prototype,"enterkeyhint",2);d([f({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],A.prototype,"spellcheck",2);d([f()],A.prototype,"inputmode",2);d([Z("disabled",{waitUntilFirstUpdate:!0})],A.prototype,"handleDisabledChange",1);d([Z("step",{waitUntilFirstUpdate:!0})],A.prototype,"handleStepChange",1);d([Z("value",{waitUntilFirstUpdate:!0})],A.prototype,"handleValueChange",1);A.define("sl-input");var Ra=W`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Na=W`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dn=Symbol.for(""),Da=t=>{if((t==null?void 0:t.r)===dn)return t==null?void 0:t._$litStatic$},Qe=(t,...e)=>({_$litStatic$:e.reduce((r,o,i)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[i+1],t[0]),r:dn}),li=new Map,Ba=t=>(e,...r)=>{const o=r.length;let i,n;const s=[],a=[];let c,u=0,l=!1;for(;u<o;){for(c=e[u];u<o&&(n=r[u],(i=Da(n))!==void 0);)c+=i+e[++u],l=!0;u!==o&&a.push(n),s.push(c),u++}if(u===o&&s.push(e[o]),l){const h=s.join("$$lit$$");(e=li.get(h))===void 0&&(s.raw=s,li.set(h,e=s)),r=a}return t(e,...r)},We=Ba(E);var mt=class extends at{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Qe`a`:Qe`button`;return We`
      <${e}
        part="base"
        class=${nt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${$(t?void 0:this.disabled)}
        type=${$(t?void 0:"button")}
        href=${$(t?this.href:void 0)}
        target=${$(t?this.target:void 0)}
        download=${$(t?this.download:void 0)}
        rel=${$(t&&this.target?"noreferrer noopener":void 0)}
        role=${$(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${$(this.name)}
          library=${$(this.library)}
          src=${$(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};mt.styles=[wt,Na];mt.dependencies={"sl-icon":dt};d([Q(".icon-button")],mt.prototype,"button",2);d([Y()],mt.prototype,"hasFocus",2);d([f()],mt.prototype,"name",2);d([f()],mt.prototype,"library",2);d([f()],mt.prototype,"src",2);d([f()],mt.prototype,"href",2);d([f()],mt.prototype,"target",2);d([f()],mt.prototype,"download",2);d([f()],mt.prototype,"label",2);d([f({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);var Qt=class extends at{constructor(){super(...arguments),this.localize=new Jt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return E`
      <span
        part="base"
        class=${nt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?E`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Qt.styles=[wt,Ra];Qt.dependencies={"sl-icon-button":mt};d([f({reflect:!0})],Qt.prototype,"variant",2);d([f({reflect:!0})],Qt.prototype,"size",2);d([f({type:Boolean,reflect:!0})],Qt.prototype,"pill",2);d([f({type:Boolean})],Qt.prototype,"removable",2);var Ma=W`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function Fa(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}function Va(t,e,r="vertical",o="smooth"){const i=Fa(t,e),n=i.top+e.scrollTop,s=i.left+e.scrollLeft,a=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,u=e.scrollTop,l=e.scrollTop+e.offsetHeight;(r==="horizontal"||r==="both")&&(s<a?e.scrollTo({left:s,behavior:o}):s+t.clientWidth>c&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:o})),(r==="vertical"||r==="both")&&(n<u?e.scrollTo({top:n,behavior:o}):n+t.clientHeight>l&&e.scrollTo({top:n-e.offsetHeight+t.clientHeight,behavior:o}))}var Ha=W`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Mt=Math.min,ht=Math.max,tr=Math.round,Ne=Math.floor,$t=t=>({x:t,y:t}),Ua={left:"right",right:"left",bottom:"top",top:"bottom"},ja={start:"end",end:"start"};function qr(t,e,r){return ht(t,Mt(e,r))}function ce(t,e){return typeof t=="function"?t(e):t}function Ft(t){return t.split("-")[0]}function ue(t){return t.split("-")[1]}function hn(t){return t==="x"?"y":"x"}function mo(t){return t==="y"?"height":"width"}function Gt(t){return["top","bottom"].includes(Ft(t))?"y":"x"}function bo(t){return hn(Gt(t))}function Wa(t,e,r){r===void 0&&(r=!1);const o=ue(t),i=bo(t),n=mo(i);let s=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=er(s)),[s,er(s)]}function qa(t){const e=er(t);return[Kr(t),e,Kr(e)]}function Kr(t){return t.replace(/start|end/g,e=>ja[e])}function Ka(t,e,r){const o=["left","right"],i=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:o:e?o:i;case"left":case"right":return e?n:s;default:return[]}}function Ya(t,e,r,o){const i=ue(t);let n=Ka(Ft(t),r==="start",o);return i&&(n=n.map(s=>s+"-"+i),e&&(n=n.concat(n.map(Kr)))),n}function er(t){return t.replace(/left|right|bottom|top/g,e=>Ua[e])}function Ga(t){return{top:0,right:0,bottom:0,left:0,...t}}function pn(t){return typeof t!="number"?Ga(t):{top:t,right:t,bottom:t,left:t}}function rr(t){const{x:e,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:e,right:e+o,bottom:r+i,x:e,y:r}}function ci(t,e,r){let{reference:o,floating:i}=t;const n=Gt(e),s=bo(e),a=mo(s),c=Ft(e),u=n==="y",l=o.x+o.width/2-i.width/2,h=o.y+o.height/2-i.height/2,m=o[a]/2-i[a]/2;let p;switch(c){case"top":p={x:l,y:o.y-i.height};break;case"bottom":p={x:l,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:h};break;case"left":p={x:o.x-i.width,y:h};break;default:p={x:o.x,y:o.y}}switch(ue(e)){case"start":p[s]-=m*(r&&u?-1:1);break;case"end":p[s]+=m*(r&&u?-1:1);break}return p}const Xa=async(t,e,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:s}=r,a=n.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:l,y:h}=ci(u,o,c),m=o,p={},b=0;for(let y=0;y<a.length;y++){const{name:v,fn:g}=a[y],{x:C,y:_,data:k,reset:L}=await g({x:l,y:h,initialPlacement:o,placement:m,strategy:i,middlewareData:p,rects:u,platform:s,elements:{reference:t,floating:e}});l=C??l,h=_??h,p={...p,[v]:{...p[v],...k}},L&&b<=50&&(b++,typeof L=="object"&&(L.placement&&(m=L.placement),L.rects&&(u=L.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):L.rects),{x:l,y:h}=ci(u,m,c)),y=-1)}return{x:l,y:h,placement:m,strategy:i,middlewareData:p}};async function go(t,e){var r;e===void 0&&(e={});const{x:o,y:i,platform:n,rects:s,elements:a,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:l="viewport",elementContext:h="floating",altBoundary:m=!1,padding:p=0}=ce(e,t),b=pn(p),v=a[m?h==="floating"?"reference":"floating":h],g=rr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(v)))==null||r?v:v.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:u,rootBoundary:l,strategy:c})),C=h==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,_=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),k=await(n.isElement==null?void 0:n.isElement(_))?await(n.getScale==null?void 0:n.getScale(_))||{x:1,y:1}:{x:1,y:1},L=rr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:C,offsetParent:_,strategy:c}):C);return{top:(g.top-L.top+b.top)/k.y,bottom:(L.bottom-g.bottom+b.bottom)/k.y,left:(g.left-L.left+b.left)/k.x,right:(L.right-g.right+b.right)/k.x}}const Za=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:i,rects:n,platform:s,elements:a,middlewareData:c}=e,{element:u,padding:l=0}=ce(t,e)||{};if(u==null)return{};const h=pn(l),m={x:r,y:o},p=bo(i),b=mo(p),y=await s.getDimensions(u),v=p==="y",g=v?"top":"left",C=v?"bottom":"right",_=v?"clientHeight":"clientWidth",k=n.reference[b]+n.reference[p]-m[p]-n.floating[b],L=m[p]-n.reference[p],V=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let P=V?V[_]:0;(!P||!await(s.isElement==null?void 0:s.isElement(V)))&&(P=a.floating[_]||n.floating[b]);const x=k/2-L/2,U=P/2-y[b]/2-1,O=Mt(h[g],U),X=Mt(h[C],U),R=O,et=P-y[b]-X,N=P/2-y[b]/2+x,Ot=qr(R,N,et),Pt=!c.arrow&&ue(i)!=null&&N!==Ot&&n.reference[b]/2-(N<R?O:X)-y[b]/2<0,xt=Pt?N<R?N-R:N-et:0;return{[p]:m[p]+xt,data:{[p]:Ot,centerOffset:N-Ot-xt,...Pt&&{alignmentOffset:xt}},reset:Pt}}}),Ja=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:i,middlewareData:n,rects:s,initialPlacement:a,platform:c,elements:u}=e,{mainAxis:l=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:y=!0,...v}=ce(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const g=Ft(i),C=Gt(a),_=Ft(a)===a,k=await(c.isRTL==null?void 0:c.isRTL(u.floating)),L=m||(_||!y?[er(a)]:qa(a)),V=b!=="none";!m&&V&&L.push(...Ya(a,y,b,k));const P=[a,...L],x=await go(e,v),U=[];let O=((o=n.flip)==null?void 0:o.overflows)||[];if(l&&U.push(x[g]),h){const N=Wa(i,s,k);U.push(x[N[0]],x[N[1]])}if(O=[...O,{placement:i,overflows:U}],!U.every(N=>N<=0)){var X,R;const N=(((X=n.flip)==null?void 0:X.index)||0)+1,Ot=P[N];if(Ot)return{data:{index:N,overflows:O},reset:{placement:Ot}};let Pt=(R=O.filter(xt=>xt.overflows[0]<=0).sort((xt,Tt)=>xt.overflows[1]-Tt.overflows[1])[0])==null?void 0:R.placement;if(!Pt)switch(p){case"bestFit":{var et;const xt=(et=O.filter(Tt=>{if(V){const It=Gt(Tt.placement);return It===C||It==="y"}return!0}).map(Tt=>[Tt.placement,Tt.overflows.filter(It=>It>0).reduce((It,$n)=>It+$n,0)]).sort((Tt,It)=>Tt[1]-It[1])[0])==null?void 0:et[0];xt&&(Pt=xt);break}case"initialPlacement":Pt=a;break}if(i!==Pt)return{reset:{placement:Pt}}}return{}}}};async function Qa(t,e){const{placement:r,platform:o,elements:i}=t,n=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=Ft(r),a=ue(r),c=Gt(r)==="y",u=["left","top"].includes(s)?-1:1,l=n&&c?-1:1,h=ce(e,t);let{mainAxis:m,crossAxis:p,alignmentAxis:b}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof b=="number"&&(p=a==="end"?b*-1:b),c?{x:p*l,y:m*u}:{x:m*u,y:p*l}}const tl=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:i,y:n,placement:s,middlewareData:a}=e,c=await Qa(e,t);return s===((r=a.offset)==null?void 0:r.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:n+c.y,data:{...c,placement:s}}}}},el=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:i}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:v=>{let{x:g,y:C}=v;return{x:g,y:C}}},...c}=ce(t,e),u={x:r,y:o},l=await go(e,c),h=Gt(Ft(i)),m=hn(h);let p=u[m],b=u[h];if(n){const v=m==="y"?"top":"left",g=m==="y"?"bottom":"right",C=p+l[v],_=p-l[g];p=qr(C,p,_)}if(s){const v=h==="y"?"top":"left",g=h==="y"?"bottom":"right",C=b+l[v],_=b-l[g];b=qr(C,b,_)}const y=a.fn({...e,[m]:p,[h]:b});return{...y,data:{x:y.x-r,y:y.y-o,enabled:{[m]:n,[h]:s}}}}}},rl=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:i,rects:n,platform:s,elements:a}=e,{apply:c=()=>{},...u}=ce(t,e),l=await go(e,u),h=Ft(i),m=ue(i),p=Gt(i)==="y",{width:b,height:y}=n.floating;let v,g;h==="top"||h==="bottom"?(v=h,g=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(g=h,v=m==="end"?"top":"bottom");const C=y-l.top-l.bottom,_=b-l.left-l.right,k=Mt(y-l[v],C),L=Mt(b-l[g],_),V=!e.middlewareData.shift;let P=k,x=L;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(x=_),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(P=C),V&&!m){const O=ht(l.left,0),X=ht(l.right,0),R=ht(l.top,0),et=ht(l.bottom,0);p?x=b-2*(O!==0||X!==0?O+X:ht(l.left,l.right)):P=y-2*(R!==0||et!==0?R+et:ht(l.top,l.bottom))}await c({...e,availableWidth:x,availableHeight:P});const U=await s.getDimensions(a.floating);return b!==U.width||y!==U.height?{reset:{rects:!0}}:{}}}};function hr(){return typeof window<"u"}function de(t){return fn(t)?(t.nodeName||"").toLowerCase():"#document"}function ft(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Et(t){var e;return(e=(fn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function fn(t){return hr()?t instanceof Node||t instanceof ft(t).Node:!1}function yt(t){return hr()?t instanceof Element||t instanceof ft(t).Element:!1}function St(t){return hr()?t instanceof HTMLElement||t instanceof ft(t).HTMLElement:!1}function ui(t){return!hr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ft(t).ShadowRoot}function Oe(t){const{overflow:e,overflowX:r,overflowY:o,display:i}=_t(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(i)}function ol(t){return["table","td","th"].includes(de(t))}function pr(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function fr(t){const e=vo(),r=yt(t)?_t(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function il(t){let e=Vt(t);for(;St(e)&&!ae(e);){if(fr(e))return e;if(pr(e))return null;e=Vt(e)}return null}function vo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ae(t){return["html","body","#document"].includes(de(t))}function _t(t){return ft(t).getComputedStyle(t)}function mr(t){return yt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Vt(t){if(de(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ui(t)&&t.host||Et(t);return ui(e)?e.host:e}function mn(t){const e=Vt(t);return ae(e)?t.ownerDocument?t.ownerDocument.body:t.body:St(e)&&Oe(e)?e:mn(e)}function $e(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=mn(t),n=i===((o=t.ownerDocument)==null?void 0:o.body),s=ft(i);if(n){const a=Yr(s);return e.concat(s,s.visualViewport||[],Oe(i)?i:[],a&&r?$e(a):[])}return e.concat(i,$e(i,[],r))}function Yr(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function bn(t){const e=_t(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=St(t),n=i?t.offsetWidth:r,s=i?t.offsetHeight:o,a=tr(r)!==n||tr(o)!==s;return a&&(r=n,o=s),{width:r,height:o,$:a}}function yo(t){return yt(t)?t:t.contextElement}function ie(t){const e=yo(t);if(!St(e))return $t(1);const r=e.getBoundingClientRect(),{width:o,height:i,$:n}=bn(e);let s=(n?tr(r.width):r.width)/o,a=(n?tr(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const nl=$t(0);function gn(t){const e=ft(t);return!vo()||!e.visualViewport?nl:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function sl(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==ft(t)?!1:e}function Xt(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),n=yo(t);let s=$t(1);e&&(o?yt(o)&&(s=ie(o)):s=ie(t));const a=sl(n,r,o)?gn(n):$t(0);let c=(i.left+a.x)/s.x,u=(i.top+a.y)/s.y,l=i.width/s.x,h=i.height/s.y;if(n){const m=ft(n),p=o&&yt(o)?ft(o):o;let b=m,y=Yr(b);for(;y&&o&&p!==b;){const v=ie(y),g=y.getBoundingClientRect(),C=_t(y),_=g.left+(y.clientLeft+parseFloat(C.paddingLeft))*v.x,k=g.top+(y.clientTop+parseFloat(C.paddingTop))*v.y;c*=v.x,u*=v.y,l*=v.x,h*=v.y,c+=_,u+=k,b=ft(y),y=Yr(b)}}return rr({width:l,height:h,x:c,y:u})}function _o(t,e){const r=mr(t).scrollLeft;return e?e.left+r:Xt(Et(t)).left+r}function vn(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(r?0:_o(t,o)),n=o.top+e.scrollTop;return{x:i,y:n}}function al(t){let{elements:e,rect:r,offsetParent:o,strategy:i}=t;const n=i==="fixed",s=Et(o),a=e?pr(e.floating):!1;if(o===s||a&&n)return r;let c={scrollLeft:0,scrollTop:0},u=$t(1);const l=$t(0),h=St(o);if((h||!h&&!n)&&((de(o)!=="body"||Oe(s))&&(c=mr(o)),St(o))){const p=Xt(o);u=ie(o),l.x=p.x+o.clientLeft,l.y=p.y+o.clientTop}const m=s&&!h&&!n?vn(s,c,!0):$t(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-c.scrollLeft*u.x+l.x+m.x,y:r.y*u.y-c.scrollTop*u.y+l.y+m.y}}function ll(t){return Array.from(t.getClientRects())}function cl(t){const e=Et(t),r=mr(t),o=t.ownerDocument.body,i=ht(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=ht(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+_o(t);const a=-r.scrollTop;return _t(o).direction==="rtl"&&(s+=ht(e.clientWidth,o.clientWidth)-i),{width:i,height:n,x:s,y:a}}function ul(t,e){const r=ft(t),o=Et(t),i=r.visualViewport;let n=o.clientWidth,s=o.clientHeight,a=0,c=0;if(i){n=i.width,s=i.height;const u=vo();(!u||u&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:n,height:s,x:a,y:c}}function dl(t,e){const r=Xt(t,!0,e==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,n=St(t)?ie(t):$t(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,c=i*n.x,u=o*n.y;return{width:s,height:a,x:c,y:u}}function di(t,e,r){let o;if(e==="viewport")o=ul(t,r);else if(e==="document")o=cl(Et(t));else if(yt(e))o=dl(e,r);else{const i=gn(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return rr(o)}function yn(t,e){const r=Vt(t);return r===e||!yt(r)||ae(r)?!1:_t(r).position==="fixed"||yn(r,e)}function hl(t,e){const r=e.get(t);if(r)return r;let o=$e(t,[],!1).filter(a=>yt(a)&&de(a)!=="body"),i=null;const n=_t(t).position==="fixed";let s=n?Vt(t):t;for(;yt(s)&&!ae(s);){const a=_t(s),c=fr(s);!c&&a.position==="fixed"&&(i=null),(n?!c&&!i:!c&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Oe(s)&&!c&&yn(t,s))?o=o.filter(l=>l!==s):i=a,s=Vt(s)}return e.set(t,o),o}function pl(t){let{element:e,boundary:r,rootBoundary:o,strategy:i}=t;const s=[...r==="clippingAncestors"?pr(e)?[]:hl(e,this._c):[].concat(r),o],a=s[0],c=s.reduce((u,l)=>{const h=di(e,l,i);return u.top=ht(h.top,u.top),u.right=Mt(h.right,u.right),u.bottom=Mt(h.bottom,u.bottom),u.left=ht(h.left,u.left),u},di(e,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function fl(t){const{width:e,height:r}=bn(t);return{width:e,height:r}}function ml(t,e,r){const o=St(e),i=Et(e),n=r==="fixed",s=Xt(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const c=$t(0);if(o||!o&&!n)if((de(e)!=="body"||Oe(i))&&(a=mr(e)),o){const m=Xt(e,!0,n,e);c.x=m.x+e.clientLeft,c.y=m.y+e.clientTop}else i&&(c.x=_o(i));const u=i&&!o&&!n?vn(i,a):$t(0),l=s.left+a.scrollLeft-c.x-u.x,h=s.top+a.scrollTop-c.y-u.y;return{x:l,y:h,width:s.width,height:s.height}}function zr(t){return _t(t).position==="static"}function hi(t,e){if(!St(t)||_t(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Et(t)===r&&(r=r.ownerDocument.body),r}function _n(t,e){const r=ft(t);if(pr(t))return r;if(!St(t)){let i=Vt(t);for(;i&&!ae(i);){if(yt(i)&&!zr(i))return i;i=Vt(i)}return r}let o=hi(t,e);for(;o&&ol(o)&&zr(o);)o=hi(o,e);return o&&ae(o)&&zr(o)&&!fr(o)?r:o||il(t)||r}const bl=async function(t){const e=this.getOffsetParent||_n,r=this.getDimensions,o=await r(t.floating);return{reference:ml(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function gl(t){return _t(t).direction==="rtl"}const qe={convertOffsetParentRelativeRectToViewportRelativeRect:al,getDocumentElement:Et,getClippingRect:pl,getOffsetParent:_n,getElementRects:bl,getClientRects:ll,getDimensions:fl,getScale:ie,isElement:yt,isRTL:gl};function wn(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function vl(t,e){let r=null,o;const i=Et(t);function n(){var a;clearTimeout(o),(a=r)==null||a.disconnect(),r=null}function s(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),n();const u=t.getBoundingClientRect(),{left:l,top:h,width:m,height:p}=u;if(a||e(),!m||!p)return;const b=Ne(h),y=Ne(i.clientWidth-(l+m)),v=Ne(i.clientHeight-(h+p)),g=Ne(l),_={rootMargin:-b+"px "+-y+"px "+-v+"px "+-g+"px",threshold:ht(0,Mt(1,c))||1};let k=!0;function L(V){const P=V[0].intersectionRatio;if(P!==c){if(!k)return s();P?s(!1,P):o=setTimeout(()=>{s(!1,1e-7)},1e3)}P===1&&!wn(u,t.getBoundingClientRect())&&s(),k=!1}try{r=new IntersectionObserver(L,{..._,root:i.ownerDocument})}catch{r=new IntersectionObserver(L,_)}r.observe(t)}return s(!0),n}function yl(t,e,r,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,u=yo(t),l=i||n?[...u?$e(u):[],...$e(e)]:[];l.forEach(g=>{i&&g.addEventListener("scroll",r,{passive:!0}),n&&g.addEventListener("resize",r)});const h=u&&a?vl(u,r):null;let m=-1,p=null;s&&(p=new ResizeObserver(g=>{let[C]=g;C&&C.target===u&&p&&(p.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var _;(_=p)==null||_.observe(e)})),r()}),u&&!c&&p.observe(u),p.observe(e));let b,y=c?Xt(t):null;c&&v();function v(){const g=Xt(t);y&&!wn(y,g)&&r(),y=g,b=requestAnimationFrame(v)}return r(),()=>{var g;l.forEach(C=>{i&&C.removeEventListener("scroll",r),n&&C.removeEventListener("resize",r)}),h==null||h(),(g=p)==null||g.disconnect(),p=null,c&&cancelAnimationFrame(b)}}const _l=tl,wl=el,xl=Ja,pi=rl,Cl=Za,kl=(t,e,r)=>{const o=new Map,i={platform:qe,...r},n={...i.platform,_c:o};return Xa(t,e,{...i,platform:n})};function $l(t){return Sl(t)}function Or(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Sl(t){for(let e=t;e;e=Or(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Or(t);e;e=Or(e)){if(!(e instanceof Element))continue;const r=getComputedStyle(e);if(r.display!=="contents"&&(r.position!=="static"||fr(r)||e.tagName==="BODY"))return e}return null}function Al(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var F=class extends at{constructor(){super(...arguments),this.localize=new Jt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let o=0,i=0,n=0,s=0,a=0,c=0,u=0,l=0;r?t.top<e.top?(o=t.left,i=t.bottom,n=t.right,s=t.bottom,a=e.left,c=e.top,u=e.right,l=e.top):(o=e.left,i=e.bottom,n=e.right,s=e.bottom,a=t.left,c=t.top,u=t.right,l=t.top):t.left<e.left?(o=t.right,i=t.top,n=e.left,s=e.top,a=t.right,c=t.bottom,u=e.left,l=e.bottom):(o=e.right,i=e.top,n=t.left,s=t.top,a=e.right,c=e.bottom,u=t.left,l=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${l}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Al(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=yl(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[_l({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(pi({apply:({rects:r})=>{const o=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${r.reference.width}px`:"",this.popup.style.height=i?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(xl({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(wl({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(pi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Cl({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?r=>qe.getOffsetParent(r,$l):qe.getOffsetParent;kl(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:dr(Zt({},qe),{getOffsetParent:e})}).then(({x:r,y:o,middlewareData:i,placement:n})=>{const s=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${r}px`,top:`${o}px`}),this.arrow){const c=i.arrow.x,u=i.arrow.y;let l="",h="",m="",p="";if(this.arrowPlacement==="start"){const b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";l=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=s?b:"",p=s?"":b}else if(this.arrowPlacement==="end"){const b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=s?"":b,p=s?b:"",m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",l=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof c=="number"?`${c}px`:"",l=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:l,right:h,bottom:m,left:p,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return E`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${nt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${nt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?E`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};F.styles=[wt,Ha];d([Q(".popup")],F.prototype,"popup",2);d([Q(".popup__arrow")],F.prototype,"arrowEl",2);d([f()],F.prototype,"anchor",2);d([f({type:Boolean,reflect:!0})],F.prototype,"active",2);d([f({reflect:!0})],F.prototype,"placement",2);d([f({reflect:!0})],F.prototype,"strategy",2);d([f({type:Number})],F.prototype,"distance",2);d([f({type:Number})],F.prototype,"skidding",2);d([f({type:Boolean})],F.prototype,"arrow",2);d([f({attribute:"arrow-placement"})],F.prototype,"arrowPlacement",2);d([f({attribute:"arrow-padding",type:Number})],F.prototype,"arrowPadding",2);d([f({type:Boolean})],F.prototype,"flip",2);d([f({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],F.prototype,"flipFallbackPlacements",2);d([f({attribute:"flip-fallback-strategy"})],F.prototype,"flipFallbackStrategy",2);d([f({type:Object})],F.prototype,"flipBoundary",2);d([f({attribute:"flip-padding",type:Number})],F.prototype,"flipPadding",2);d([f({type:Boolean})],F.prototype,"shift",2);d([f({type:Object})],F.prototype,"shiftBoundary",2);d([f({attribute:"shift-padding",type:Number})],F.prototype,"shiftPadding",2);d([f({attribute:"auto-size"})],F.prototype,"autoSize",2);d([f()],F.prototype,"sync",2);d([f({type:Object})],F.prototype,"autoSizeBoundary",2);d([f({attribute:"auto-size-padding",type:Number})],F.prototype,"autoSizePadding",2);d([f({attribute:"hover-bridge",type:Boolean})],F.prototype,"hoverBridge",2);var xn=new Map,El=new WeakMap;function Pl(t){return t??{keyframes:[],options:{duration:0}}}function fi(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Cn(t,e){xn.set(t,Pl(e))}function mi(t,e,r){const o=El.get(t);if(o!=null&&o[e])return fi(o[e],r.dir);const i=xn.get(e);return i?fi(i,r.dir):{keyframes:[],options:{duration:0}}}function bi(t,e){return new Promise(r=>{function o(i){i.target===t&&(t.removeEventListener(e,o),r())}t.addEventListener(e,o)})}function gi(t,e,r){return new Promise(o=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=t.animate(e,dr(Zt({},r),{duration:zl()?0:r.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function zl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function vi(t){return Promise.all(t.getAnimations().map(e=>new Promise(r=>{e.cancel(),requestAnimationFrame(r)})))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gr extends oo{constructor(e){if(super(e),this.it=D,e.type!==Lt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===D||e==null)return this._t=void 0,this.it=e;if(e===bt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Gr.directiveName="unsafeHTML",Gr.resultType=1;const Ol=ro(Gr);var z=class extends at{constructor(){super(...arguments),this.formControlController=new Pe(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ze(this,"help-text","label"),this.localize=new Jt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>E`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,r=e.closest(".select__clear")!==null,o=e.closest("sl-icon-button")!==null;if(!(r||o)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const i=this.getAllOptions(),n=i.indexOf(this.currentOption);let s=Math.max(0,n);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(s=n+1,s>i.length-1&&(s=0)):t.key==="ArrowUp"?(s=n-1,s<0&&(s=i.length-1)):t.key==="Home"?s=0:t.key==="End"&&(s=i.length-1),this.setCurrentOption(i[s])}if(t.key&&t.key.length===1||t.key==="Backspace"){const i=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const n of i)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const r=t.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const r=t.target.closest("sl-option"),o=this.value;r&&!r.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==o&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,r=Array.isArray(e)?e:[e],o=[];t.forEach(i=>o.push(i.value)),this.setSelectedOptions(t.filter(i=>r.includes(i.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),r=Array.isArray(t)?t:[t];e.forEach(o=>o.selected=!1),r.length&&r.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,r;const o=this.getAllOptions();this.selectedOptions=o.filter(n=>n.selected);const i=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(n=>n.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const n=this.selectedOptions[0];this.value=(t=n==null?void 0:n.value)!=null?t:"",this.displayLabel=(r=(e=n==null?void 0:n.getTextLabel)==null?void 0:e.call(n))!=null?r:""}this.valueHasChanged=i,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(t,e);return E`<div @sl-remove=${o=>this.handleTagRemove(o,t)}>
          ${typeof r=="string"?Ol(r):r}
        </div>`}else if(e===this.maxOptionsVisible)return E`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return E``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),t==="value"){const o=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=o}}handleValueChange(){if(!this.valueHasChanged){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(r=>e.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await vi(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=mi(this,"select.show",{dir:this.localize.dir()});await gi(this.popup.popup,t,e),this.currentOption&&Va(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await vi(this);const{keyframes:t,options:e}=mi(this,"select.hide",{dir:this.localize.dir()});await gi(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,bi(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,bi(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,o=this.helpText?!0:!!e,i=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value&&this.value.length<=0;return E`
      <div
        part="form-control"
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${nt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?E`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i?E`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};z.styles=[wt,ur,Ma];z.dependencies={"sl-icon":dt,"sl-popup":F,"sl-tag":Qt};d([Q(".select")],z.prototype,"popup",2);d([Q(".select__combobox")],z.prototype,"combobox",2);d([Q(".select__display-input")],z.prototype,"displayInput",2);d([Q(".select__value-input")],z.prototype,"valueInput",2);d([Q(".select__listbox")],z.prototype,"listbox",2);d([Y()],z.prototype,"hasFocus",2);d([Y()],z.prototype,"displayLabel",2);d([Y()],z.prototype,"currentOption",2);d([Y()],z.prototype,"selectedOptions",2);d([Y()],z.prototype,"valueHasChanged",2);d([f()],z.prototype,"name",2);d([Y()],z.prototype,"value",1);d([f({attribute:"value"})],z.prototype,"defaultValue",2);d([f({reflect:!0})],z.prototype,"size",2);d([f()],z.prototype,"placeholder",2);d([f({type:Boolean,reflect:!0})],z.prototype,"multiple",2);d([f({attribute:"max-options-visible",type:Number})],z.prototype,"maxOptionsVisible",2);d([f({type:Boolean,reflect:!0})],z.prototype,"disabled",2);d([f({type:Boolean})],z.prototype,"clearable",2);d([f({type:Boolean,reflect:!0})],z.prototype,"open",2);d([f({type:Boolean})],z.prototype,"hoist",2);d([f({type:Boolean,reflect:!0})],z.prototype,"filled",2);d([f({type:Boolean,reflect:!0})],z.prototype,"pill",2);d([f()],z.prototype,"label",2);d([f({reflect:!0})],z.prototype,"placement",2);d([f({attribute:"help-text"})],z.prototype,"helpText",2);d([f({reflect:!0})],z.prototype,"form",2);d([f({type:Boolean,reflect:!0})],z.prototype,"required",2);d([f()],z.prototype,"getTag",2);d([Z("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1);d([Z(["defaultValue","value"],{waitUntilFirstUpdate:!0})],z.prototype,"handleValueChange",1);d([Z("open",{waitUntilFirstUpdate:!0})],z.prototype,"handleOpenChange",1);Cn("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Cn("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});z.define("sl-select");var Tl=W`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,vt=class extends at{constructor(){super(...arguments),this.localize=new Jt(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(e+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(e+=r.textContent)}),e.trim()}render(){return E`
      <div
        part="base"
        class=${nt({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};vt.styles=[wt,Tl];vt.dependencies={"sl-icon":dt};d([Q(".option__label")],vt.prototype,"defaultSlot",2);d([Y()],vt.prototype,"current",2);d([Y()],vt.prototype,"selected",2);d([Y()],vt.prototype,"hasHover",2);d([f({reflect:!0})],vt.prototype,"value",2);d([f({type:Boolean,reflect:!0})],vt.prototype,"disabled",2);d([Z("disabled")],vt.prototype,"handleDisabledChange",1);d([Z("selected")],vt.prototype,"handleSelectedChange",1);d([Z("value")],vt.prototype,"handleValueChange",1);vt.define("sl-option");var Il=W`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,B=class extends at{constructor(){super(...arguments),this.formControlController=new Pe(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ze(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,o="preserve"){const i=e??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(t,i,n,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,o=this.helpText?!0:!!e;return E`
      <div
        part="form-control"
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${nt({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${$(this.name)}
              .value=${Je(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${$(this.placeholder)}
              rows=${$(this.rows)}
              minlength=${$(this.minlength)}
              maxlength=${$(this.maxlength)}
              autocapitalize=${$(this.autocapitalize)}
              autocorrect=${$(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${$(this.spellcheck)}
              enterkeyhint=${$(this.enterkeyhint)}
              inputmode=${$(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};B.styles=[wt,ur,Il];d([Q(".textarea__control")],B.prototype,"input",2);d([Q(".textarea__size-adjuster")],B.prototype,"sizeAdjuster",2);d([Y()],B.prototype,"hasFocus",2);d([f()],B.prototype,"title",2);d([f()],B.prototype,"name",2);d([f()],B.prototype,"value",2);d([f({reflect:!0})],B.prototype,"size",2);d([f({type:Boolean,reflect:!0})],B.prototype,"filled",2);d([f()],B.prototype,"label",2);d([f({attribute:"help-text"})],B.prototype,"helpText",2);d([f()],B.prototype,"placeholder",2);d([f({type:Number})],B.prototype,"rows",2);d([f()],B.prototype,"resize",2);d([f({type:Boolean,reflect:!0})],B.prototype,"disabled",2);d([f({type:Boolean,reflect:!0})],B.prototype,"readonly",2);d([f({reflect:!0})],B.prototype,"form",2);d([f({type:Boolean,reflect:!0})],B.prototype,"required",2);d([f({type:Number})],B.prototype,"minlength",2);d([f({type:Number})],B.prototype,"maxlength",2);d([f()],B.prototype,"autocapitalize",2);d([f()],B.prototype,"autocorrect",2);d([f()],B.prototype,"autocomplete",2);d([f({type:Boolean})],B.prototype,"autofocus",2);d([f()],B.prototype,"enterkeyhint",2);d([f({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],B.prototype,"spellcheck",2);d([f()],B.prototype,"inputmode",2);d([uo()],B.prototype,"defaultValue",2);d([Z("disabled",{waitUntilFirstUpdate:!0})],B.prototype,"handleDisabledChange",1);d([Z("rows",{waitUntilFirstUpdate:!0})],B.prototype,"handleRowsChange",1);d([Z("value",{waitUntilFirstUpdate:!0})],B.prototype,"handleValueChange",1);B.define("sl-textarea");var Ll=W`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,G=class extends at{constructor(){super(...arguments),this.formControlController=new Pe(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new ze(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return E`
      <div
        class=${nt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${nt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${$(this.value)}
            .indeterminate=${Je(this.indeterminate)}
            .checked=${Je(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?E`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?E`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};G.styles=[wt,ur,Ll];G.dependencies={"sl-icon":dt};d([Q('input[type="checkbox"]')],G.prototype,"input",2);d([Y()],G.prototype,"hasFocus",2);d([f()],G.prototype,"title",2);d([f()],G.prototype,"name",2);d([f()],G.prototype,"value",2);d([f({reflect:!0})],G.prototype,"size",2);d([f({type:Boolean,reflect:!0})],G.prototype,"disabled",2);d([f({type:Boolean,reflect:!0})],G.prototype,"checked",2);d([f({type:Boolean,reflect:!0})],G.prototype,"indeterminate",2);d([uo("checked")],G.prototype,"defaultChecked",2);d([f({reflect:!0})],G.prototype,"form",2);d([f({type:Boolean,reflect:!0})],G.prototype,"required",2);d([f({attribute:"help-text"})],G.prototype,"helpText",2);d([Z("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);d([Z(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],G.prototype,"handleStateChange",1);G.define("sl-checkbox");var Rl=W`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,kn=class extends at{constructor(){super(...arguments),this.localize=new Jt(this)}render(){return E`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};kn.styles=[wt,Rl];var Nl=W`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,M=class extends at{constructor(){super(...arguments),this.formControlController=new Pe(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ze(this,"[default]","prefix","suffix"),this.localize=new Jt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ho}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Qe`a`:Qe`button`;return We`
      <${e}
        part="base"
        class=${nt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${$(t?void 0:this.disabled)}
        type=${$(t?void 0:this.type)}
        title=${this.title}
        name=${$(t?void 0:this.name)}
        value=${$(t?void 0:this.value)}
        href=${$(t&&!this.disabled?this.href:void 0)}
        target=${$(t?this.target:void 0)}
        download=${$(t?this.download:void 0)}
        rel=${$(t?this.rel:void 0)}
        role=${$(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?We` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?We`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};M.styles=[wt,Nl];M.dependencies={"sl-icon":dt,"sl-spinner":kn};d([Q(".button")],M.prototype,"button",2);d([Y()],M.prototype,"hasFocus",2);d([Y()],M.prototype,"invalid",2);d([f()],M.prototype,"title",2);d([f({reflect:!0})],M.prototype,"variant",2);d([f({reflect:!0})],M.prototype,"size",2);d([f({type:Boolean,reflect:!0})],M.prototype,"caret",2);d([f({type:Boolean,reflect:!0})],M.prototype,"disabled",2);d([f({type:Boolean,reflect:!0})],M.prototype,"loading",2);d([f({type:Boolean,reflect:!0})],M.prototype,"outline",2);d([f({type:Boolean,reflect:!0})],M.prototype,"pill",2);d([f({type:Boolean,reflect:!0})],M.prototype,"circle",2);d([f()],M.prototype,"type",2);d([f()],M.prototype,"name",2);d([f()],M.prototype,"value",2);d([f()],M.prototype,"href",2);d([f()],M.prototype,"target",2);d([f()],M.prototype,"rel",2);d([f()],M.prototype,"download",2);d([f()],M.prototype,"form",2);d([f({attribute:"formaction"})],M.prototype,"formAction",2);d([f({attribute:"formenctype"})],M.prototype,"formEnctype",2);d([f({attribute:"formmethod"})],M.prototype,"formMethod",2);d([f({attribute:"formnovalidate",type:Boolean})],M.prototype,"formNoValidate",2);d([f({attribute:"formtarget"})],M.prototype,"formTarget",2);d([Z("disabled",{waitUntilFirstUpdate:!0})],M.prototype,"handleDisabledChange",1);M.define("sl-button");var Dl=Object.getOwnPropertyDescriptor,Bl=(t,e,r,o)=>{for(var i=o>1?void 0:o?Dl(e,r):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(i)||i);return i};let yi=class extends pt{handleSubmit(t){var s;t.preventDefault();const e=(s=this.shadowRoot)==null?void 0:s.querySelector("#loginForm"),r=new FormData(e),o=r.get("name"),i=r.get("password"),n=r.get("comment");this.dispatchEvent(new CustomEvent("formSubmit",{detail:{name:o,password:i,comment:n},bubbles:!0,composed:!0}))}render(){return E`
    <form id = "loginForm" class="input-validation-required" @submit= ${this.handleSubmit} style="width:30rem;">
  <sl-input id= "name" name="name" label="Name" required></sl-input>
  <br />
  <sl-input id = "password" name="password" label="Password" type="password" password-toggle required></sl-input>
  <br />
  <sl-textarea id = "comment" name="comment" label="Comment" required></sl-textarea>
  <br />
  <sl-checkbox required>I agree to terms and conditions</sl-checkbox>
  <br /><br />
  <sl-button type="submit" variant="primary">Submit</sl-button>
</form>
`}};yi=Bl([Ht("loginform-component")],yi);
