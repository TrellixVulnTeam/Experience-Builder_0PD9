"use strict";function _interopNamespace(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(s){if("default"!==s){var n=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,n.get?n:{enumerable:!0,get:function(){return e[s]}})}})),t.default=e,Object.freeze(t)}const NAMESPACE="stencil-components";let scopeId,hostTagName,isSvgMode=!1,queuePending=!1;const win="undefined"!=typeof window?window:{},doc=win.document||{head:{}},plt={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n),ce:(e,t)=>new CustomEvent(e,t)},promiseResolve=e=>Promise.resolve(e),supportsConstructibleStylesheets=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),addHostEventListeners=(e,t,s,n)=>{s&&s.map((([s,n,o])=>{const l=getHostListenerTarget(e,s),a=hostListenerProxy(t,o),r=hostListenerOpts(s);plt.ael(l,n,a,r),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>plt.rel(l,n,a,r)))}))},hostListenerProxy=(e,t)=>s=>{try{256&e.$flags$?e.$lazyInstance$[t](s):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,s])}catch(e){consoleError(e)}},getHostListenerTarget=(e,t)=>8&t?win:e,hostListenerOpts=e=>0!=(2&e),HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}",createTime=(e,t="")=>()=>{},uniqueTime=(e,t)=>()=>{},rootAppliedStyles=new WeakMap,registerStyle=(e,t,s)=>{let n=styles.get(e);supportsConstructibleStylesheets&&s?(n=n||new CSSStyleSheet,n.replace(t)):n=t,styles.set(e,n)},addStyle=(e,t,s,n)=>{let o=getScopeId(t),l=styles.get(o);if(e=11===e.nodeType?e:doc,l)if("string"==typeof l){e=e.head||e;let t,s=rootAppliedStyles.get(e);s||rootAppliedStyles.set(e,s=new Set),s.has(o)||(t=doc.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(o))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return o},attachStyles=e=>{const t=e.$cmpMeta$,s=e.$hostElement$,n=t.$flags$,o=(t.$tagName$,()=>{}),l=addStyle(s.shadowRoot?s.shadowRoot:s.getRootNode(),t);10&n&&(s["s-sc"]=l,s.classList.add(l+"-h")),o()},getScopeId=(e,t)=>"sc-"+e.$tagName$,EMPTY_OBJ={},SVG_NS="http://www.w3.org/2000/svg",HTML_NS="http://www.w3.org/1999/xhtml",isDef=e=>null!=e,isComplexType=e=>"object"==(e=typeof e)||"function"===e,h=(e,t,...s)=>{let n=null,o=!1,l=!1,a=[];const r=t=>{for(let s=0;s<t.length;s++)n=t[s],Array.isArray(n)?r(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!isComplexType(n))&&(n=String(n)),o&&l?a[a.length-1].$text$+=n:a.push(o?newVNode(null,n):n),l=o)};if(r(s),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const $=newVNode(e,null);return $.$attrs$=t,a.length>0&&($.$children$=a),$},newVNode=(e,t)=>({$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null}),Host={},isHost=e=>e&&e.$tag$===Host,setAccessor=(e,t,s,n,o,l)=>{if(s!==n){let a=isMemberInElement(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,o=parseClassList(s),l=parseClassList(n);t.remove(...o.filter((e=>e&&!l.includes(e)))),t.add(...l.filter((e=>e&&!o.includes(e))))}else{const r=isComplexType(n);if((a||r&&null!==n)&&!o)try{if(e.tagName.includes("-"))e[t]=n;else{let o=null==n?"":n;"list"===t?a=!1:null!=s&&e[t]==o||(e[t]=o)}}catch(e){}null==n||!1===n?!1===n&&""!==e.getAttribute(t)||e.removeAttribute(t):(!a||4&l||o)&&!r&&(n=!0===n?"":n,e.setAttribute(t,n))}}},parseClassListRegex=/\s/,parseClassList=e=>e?e.split(parseClassListRegex):[],updateElement=(e,t,s,n)=>{const o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||EMPTY_OBJ,a=t.$attrs$||EMPTY_OBJ;for(n in l)n in a||setAccessor(o,n,l[n],void 0,s,t.$flags$);for(n in a)setAccessor(o,n,l[n],a[n],s,t.$flags$)},createElm=(e,t,s,n)=>{let o,l,a=t.$children$[s],r=0;if(isSvgMode||(isSvgMode="svg"===a.$tag$),o=a.$elm$=doc.createElementNS(isSvgMode?SVG_NS:HTML_NS,a.$tag$),isSvgMode&&"foreignObject"===a.$tag$&&(isSvgMode=!1),updateElement(null,a,isSvgMode),null!=scopeId&&o["s-si"]!==scopeId&&o.classList.add(o["s-si"]=scopeId),a.$children$)for(r=0;r<a.$children$.length;++r)l=createElm(e,a,r),l&&o.appendChild(l);return"svg"===a.$tag$?isSvgMode=!1:"foreignObject"===o.tagName&&(isSvgMode=!0),o},addVnodes=(e,t,s,n,o,l)=>{let a,r=e;for(r.shadowRoot&&r.tagName===hostTagName&&(r=r.shadowRoot);o<=l;++o)n[o]&&(a=createElm(null,s,o),a&&(n[o].$elm$=a,r.insertBefore(a,t)))},removeVnodes=(e,t,s,n,o)=>{for(;t<=s;++t)(n=e[t])&&n.$elm$.remove()},updateChildren=(e,t,s,n)=>{let o,l=0,a=0,r=t.length-1,$=t[0],i=t[r],c=n.length-1,d=n[0],p=n[c];for(;l<=r&&a<=c;)null==$?$=t[++l]:null==i?i=t[--r]:null==d?d=n[++a]:null==p?p=n[--c]:isSameVnode($,d)?(patch($,d),$=t[++l],d=n[++a]):isSameVnode(i,p)?(patch(i,p),i=t[--r],p=n[--c]):isSameVnode($,p)?(patch($,p),e.insertBefore($.$elm$,i.$elm$.nextSibling),$=t[++l],p=n[--c]):isSameVnode(i,d)?(patch(i,d),e.insertBefore(i.$elm$,$.$elm$),i=t[--r],d=n[++a]):(o=createElm(t&&t[a],s,a),d=n[++a],o&&$.$elm$.parentNode.insertBefore(o,$.$elm$));l>r?addVnodes(e,null==n[c+1]?null:n[c+1].$elm$,s,n,a,c):a>c&&removeVnodes(t,l,r)},isSameVnode=(e,t)=>e.$tag$===t.$tag$,patch=(e,t)=>{const s=t.$elm$=e.$elm$,n=e.$children$,o=t.$children$,l=t.$tag$;isSvgMode="svg"===l||"foreignObject"!==l&&isSvgMode,updateElement(e,t,isSvgMode),null!==n&&null!==o?updateChildren(s,n,t,o):null!==o?addVnodes(s,null,t,o,0,o.length-1):null!==n&&removeVnodes(n,0,n.length-1),isSvgMode&&"svg"===l&&(isSvgMode=!1)},renderVdom=(e,t)=>{const s=e.$hostElement$,n=e.$vnode$||newVNode(null,null),o=(l=t)&&l.$tag$===Host?t:h(null,null,t);var l;hostTagName=s.tagName,o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=n.$elm$=s.shadowRoot||s,scopeId=s["s-sc"],patch(n,o)},getElement=e=>getHostRef(e).$hostElement$,createEvent=(e,t,s)=>{const n=getElement(e);return{emit:e=>emitEvent(n,t,{bubbles:!!(4&s),composed:!!(2&s),cancelable:!!(1&s),detail:e})}},emitEvent=(e,t,s)=>{const n=plt.ce(t,s);return e.dispatchEvent(n),n},attachToAncestor=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},scheduleUpdate=(e,t)=>{if(e.$flags$|=16,!(4&e.$flags$))return attachToAncestor(e,e.$ancestorComponent$),writeTask((()=>dispatchHooks(e,t)));e.$flags$|=512},dispatchHooks=(e,t)=>{const s=(e.$cmpMeta$.$tagName$,()=>{}),n=e.$lazyInstance$;let o;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>safeCall(n,e,t))),e.$queuedListeners$=null),o=safeCall(n,"componentWillLoad")),s(),then(o,(()=>updateComponent(e,n,t)))},updateComponent=async(e,t,s)=>{const n=e.$hostElement$,o=(e.$cmpMeta$.$tagName$,()=>{}),l=n["s-rc"];s&&attachStyles(e);const a=(e.$cmpMeta$.$tagName$,()=>{});callRender(e,t),l&&(l.map((e=>e())),n["s-rc"]=void 0),a(),o();{const t=n["s-p"],s=()=>postUpdateComponent(e);0===t.length?s():(Promise.all(t).then(s),e.$flags$|=4,t.length=0)}},callRender=(e,t,s)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,renderVdom(e,t)}catch(t){consoleError(t,e.$hostElement$)}return null},postUpdateComponent=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,s=e.$lazyInstance$,n=e.$ancestorComponent$;64&e.$flags$||(e.$flags$|=64,addHydratedFlag(t),safeCall(s,"componentDidLoad"),e.$onReadyResolve$(t),n||appDidLoad()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&nextTick((()=>scheduleUpdate(e,!1))),e.$flags$&=-517},appDidLoad=e=>{addHydratedFlag(doc.documentElement),nextTick((()=>emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})))},safeCall=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(e){consoleError(e)}},then=(e,t)=>e&&e.then?e.then(t):t(),addHydratedFlag=e=>e.classList.add("hydrated"),parsePropertyValue=(e,t)=>null==e||isComplexType(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e,getValue=(e,t)=>getHostRef(e).$instanceValues$.get(t),setValue=(e,t,s,n)=>{const o=getHostRef(e),l=o.$hostElement$,a=o.$instanceValues$.get(t),r=o.$flags$,$=o.$lazyInstance$;var i,c;if(i=s,c=n.$members$[t][0],s=null==i||isComplexType(i)?i:4&c?"false"!==i&&(""===i||!!i):2&c?parseFloat(i):1&c?String(i):i,!(8&r&&void 0!==a||s===a)&&(o.$instanceValues$.set(t,s),$)){if(n.$watchers$&&128&r){const e=n.$watchers$[t];e&&e.map((e=>{try{$[e](s,a,t)}catch(e){consoleError(e,l)}}))}2==(18&r)&&scheduleUpdate(o,!1)}},proxyComponent=(e,t,s)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const n=Object.entries(t.$members$),o=e.prototype;if(n.map((([e,[n]])=>{31&n||2&s&&32&n?Object.defineProperty(o,e,{get(){return t=e,getHostRef(this).$instanceValues$.get(t);var t},set(s){setValue(this,e,s,t)},configurable:!0,enumerable:!0}):1&s&&64&n&&Object.defineProperty(o,e,{value(...t){const s=getHostRef(this);return s.$onInstancePromise$.then((()=>s.$lazyInstance$[e](...t)))}})})),1&s){const t=new Map;o.attributeChangedCallback=function(e,s,n){plt.jmp((()=>{const s=t.get(e);if(this.hasOwnProperty(s))n=this[s],delete this[s];else if(o.hasOwnProperty(s)&&"number"==typeof this[s]&&this[s]==n)return;this[s]=(null!==n||"boolean"!=typeof this[s])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,s])=>{const n=s[1]||e;return t.set(n,e),n}))}}return e},initializeComponent=async(e,t,s,n,o)=>{if(0==(32&t.$flags$)){{if(t.$flags$|=32,(o=loadModule(s)).then){const e=()=>{};o=await o,e()}o.isProxied||(s.$watchers$=o.watchers,proxyComponent(o,s,2),o.isProxied=!0);const e=(s.$tagName$,()=>{});t.$flags$|=8;try{new o(t)}catch(e){consoleError(e)}t.$flags$&=-9,t.$flags$|=128,e()}if(o.style){let e=o.style;const t=getScopeId(s);if(!styles.has(t)){const n=(s.$tagName$,()=>{});registerStyle(t,e,!!(1&s.$flags$)),n()}}}const l=t.$ancestorComponent$,a=()=>scheduleUpdate(t,!0);l&&l["s-rc"]?l["s-rc"].push(a):a()},connectedCallback=e=>{if(0==(1&plt.$flags$)){const t=getHostRef(e),s=t.$cmpMeta$,n=(s.$tagName$,()=>{});if(1&t.$flags$)addHostEventListeners(e,t,s.$listeners$);else{t.$flags$|=1;{let s=e;for(;s=s.parentNode||s.host;)if(s["s-p"]){attachToAncestor(t,t.$ancestorComponent$=s);break}}s.$members$&&Object.entries(s.$members$).map((([t,[s]])=>{if(31&s&&e.hasOwnProperty(t)){const s=e[t];delete e[t],e[t]=s}})),initializeComponent(0,t,s)}n()}},disconnectedCallback=e=>{if(0==(1&plt.$flags$)){const t=getHostRef(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}},bootstrapLazy=(e,t={})=>{const s=[],n=t.exclude||[],o=win.customElements,l=doc.head,a=l.querySelector("meta[charset]"),r=doc.createElement("style"),$=[];let i,c=!0;Object.assign(plt,t),plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href,e.map((e=>{e[1].map((t=>{const l={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};l.$members$=t[2],l.$listeners$=t[3],l.$watchers$={};const a=l.$tagName$,r=class extends HTMLElement{constructor(e){super(e),registerHost(e=this,l),1&l.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){i&&(clearTimeout(i),i=null),c?$.push(this):plt.jmp((()=>connectedCallback(this)))}disconnectedCallback(){plt.jmp((()=>disconnectedCallback(this)))}componentOnReady(){return getHostRef(this).$onReadyPromise$}};l.$lazyBundleId$=e[0],n.includes(a)||o.get(a)||(s.push(a),o.define(a,proxyComponent(r,l,1)))}))})),r.innerHTML=s+HYDRATED_CSS,r.setAttribute("data-styles",""),l.insertBefore(r,a?a.nextSibling:l.firstChild),c=!1,$.length?$.map((e=>e.connectedCallback())):plt.jmp((()=>i=setTimeout(appDidLoad,30)))},hostRefs=new WeakMap,getHostRef=e=>hostRefs.get(e),registerInstance=(e,t)=>hostRefs.set(t.$lazyInstance$=e,t),registerHost=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return s.$onInstancePromise$=new Promise((e=>s.$onInstanceResolve$=e)),s.$onReadyPromise$=new Promise((e=>s.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],addHostEventListeners(e,s,t.$listeners$),hostRefs.set(e,s)},isMemberInElement=(e,t)=>t in e,consoleError=(e,t)=>(0,console.error)(e,t),cmpModules=new Map,loadModule=(e,t,s)=>{const n=e.$tagName$.replace(/-/g,"_"),o=e.$lazyBundleId$,l=cmpModules.get(o);return l?l[n]:Promise.resolve().then((function(){return _interopNamespace(require(`./${o}.entry.js`))})).then((e=>(cmpModules.set(o,e),e[n])),consoleError)},styles=new Map,queueDomReads=[],queueDomWrites=[],queueTask=(e,t)=>s=>{e.push(s),queuePending||(queuePending=!0,t&&4&plt.$flags$?nextTick(flush):plt.raf(flush))},consume=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){consoleError(e)}e.length=0},flush=()=>{consume(queueDomReads),consume(queueDomWrites),(queuePending=queueDomReads.length>0)&&plt.raf(flush)},nextTick=e=>promiseResolve().then(e),writeTask=queueTask(queueDomWrites,!0);exports.bootstrapLazy=bootstrapLazy,exports.createEvent=createEvent,exports.getElement=getElement,exports.h=h,exports.promiseResolve=promiseResolve,exports.registerInstance=registerInstance;