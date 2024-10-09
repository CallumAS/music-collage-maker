(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function j(){}function A(t,e){for(const n in e)t[n]=e[n];return t}function ht(t){return t()}function et(){return Object.create(null)}function Y(t){t.forEach(ht)}function mt(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ce;function Ne(t,e){return Ce||(Ce=document.createElement("a")),Ce.href=e,t===Ce.href}function wt(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ze(t,e,n,l){if(t){const s=bt(t,e,n,l);return t[0](s)}}function bt(t,e,n,l){return t[1]&&l?A(n.ctx.slice(),t[1](l(e))):n.ctx}function Ee(t,e,n,l){if(t[2]&&l){const s=t[2](l(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],i=Math.max(e.dirty.length,s.length);for(let o=0;o<i;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function Re(t,e,n,l,s,r){if(s){const i=bt(e,n,l,r);t.p(i,s)}}function je(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function x(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function tt(t,e){const n={};e=new Set(e);for(const l in t)!e.has(l)&&l[0]!=="$"&&(n[l]=t[l]);return n}function h(t,e){t.appendChild(e)}function z(t,e,n){t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function Oe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function Q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function he(t){return document.createTextNode(t)}function N(){return he(" ")}function Pe(){return he("")}function R(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function vt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function We(t,e){for(const n in e)a(t,n,e[n])}function K(t){return t===""?null:+t}function kt(t){return Array.from(t.childNodes)}function nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function B(t,e){t.value=e==null?"":e}function X(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function lt(t,e,n){t.classList[n?"add":"remove"](e)}function yt(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,l,e),s}let _e;function me(t){_e=t}function St(){if(!_e)throw new Error("Function called outside component initialization");return _e}function Ct(){const t=St();return(e,n,{cancelable:l=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=yt(e,n,{cancelable:l});return s.slice().forEach(i=>{i.call(t,r)}),!r.defaultPrevented}return!0}}function It(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(l=>l.call(this,e))}const oe=[],$=[];let ue=[];const qe=[],Nt=Promise.resolve();let Te=!1;function Wt(){Te||(Te=!0,Nt.then(pt))}function Je(t){ue.push(t)}function de(t){qe.push(t)}const Me=new Set;let re=0;function pt(){if(re!==0)return;const t=_e;do{try{for(;re<oe.length;){const e=oe[re];re++,me(e),zt(e.$$)}}catch(e){throw oe.length=0,re=0,e}for(me(null),oe.length=0,re=0;$.length;)$.pop()();for(let e=0;e<ue.length;e+=1){const n=ue[e];Me.has(n)||(Me.add(n),n())}ue.length=0}while(oe.length);for(;qe.length;)qe.pop()();Te=!1,Me.clear(),me(t)}function zt(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Je)}}function Et(t){const e=[],n=[];ue.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),ue=e}const Ie=new Set;let ee;function Ae(){ee={r:0,c:[],p:ee}}function Ue(){ee.r||Y(ee.c),ee=ee.p}function k(t,e){t&&t.i&&(Ie.delete(t),t.i(e))}function S(t,e,n,l){if(t&&t.o){if(Ie.has(t))return;Ie.add(t),ee.c.push(()=>{Ie.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function pe(t,e){const n={},l={},s={$$scope:1};let r=t.length;for(;r--;){const i=t[r],o=e[r];if(o){for(const u in i)u in o||(l[u]=1);for(const u in o)s[u]||(n[u]=o[u],s[u]=1);t[r]=o}else for(const u in i)s[u]=1}for(const i in l)i in n||(n[i]=void 0);return n}function Fe(t){return typeof t=="object"&&t!==null?t:{}}function ge(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function q(t){t&&t.c()}function H(t,e,n,l){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),l||Je(()=>{const i=t.$$.on_mount.map(ht).filter(mt);t.$$.on_destroy?t.$$.on_destroy.push(...i):Y(i),t.$$.on_mount=[]}),r.forEach(Je)}function L(t,e){const n=t.$$;n.fragment!==null&&(Et(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(oe.push(t),Wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,n,l,s,r,i,o=[-1]){const u=_e;me(t);const c=t.$$={fragment:null,ctx:[],props:r,update:j,not_equal:s,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:et(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};i&&i(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(p,d,...g)=>{const m=g.length?g[0]:d;return c.ctx&&s(c.ctx[p],c.ctx[p]=m)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](m),f&&Rt(t,p)),d}):[],c.update(),f=!0,Y(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const p=kt(e.target);c.fragment&&c.fragment.l(p),p.forEach(W)}else c.fragment&&c.fragment.c();e.intro&&k(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),pt()}me(u)}class F{$destroy(){L(this,1),this.$destroy=j}$on(e,n){if(!mt(n))return j;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!wt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ie=[];function be(t,e=j){let n;const l=new Set;function s(o){if(M(t,o)&&(t=o,n)){const u=!ie.length;for(const c of l)c[1](),ie.push(c,t);if(u){for(let c=0;c<ie.length;c+=2)ie[c][0](ie[c+1]);ie.length=0}}}function r(o){s(o(t))}function i(o,u=j){const c=[o,u];return l.add(c),l.size===1&&(n=e(s)||j),o(t),()=>{l.delete(c),l.size===0&&n&&(n(),n=null)}}return{set:s,update:r,subscribe:i}}/**
 * @license lucide-svelte v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},st=jt;function rt(t,e,n){const l=t.slice();return l[11]=e[n][0],l[12]=e[n][1],l}function Be(t){let e,n=[t[12]],l={};for(let s=0;s<n.length;s+=1)l=A(l,n[s]);return{c(){e=Q(t[11]),We(e,l)},m(s,r){z(s,e,r)},p(s,r){We(e,l=pe(n,[r&32&&s[12]]))},d(s){s&&W(e)}}}function it(t){let e=t[11],n,l=t[11]&&Be(t);return{c(){l&&l.c(),n=Pe()},m(s,r){l&&l.m(s,r),z(s,n,r)},p(s,r){s[11]?e?M(e,s[11])?(l.d(1),l=Be(s),e=s[11],l.c(),l.m(n.parentNode,n)):l.p(s,r):(l=Be(s),e=s[11],l.c(),l.m(n.parentNode,n)):e&&(l.d(1),l=null,e=s[11])},d(s){s&&W(n),l&&l.d(s)}}}function Ot(t){let e,n,l,s,r,i=t[5],o=[];for(let d=0;d<i.length;d+=1)o[d]=it(rt(t,i,d));const u=t[10].default,c=ze(u,t,t[9],null);let f=[st,t[7],{width:t[2]},{height:t[2]},{stroke:t[1]},{"stroke-width":l=t[4]?Number(t[3])*24/Number(t[2]):t[3]},{class:s=t[6]("lucide-icon","lucide",t[0]?`lucide-${t[0]}`:"",t[8].class)}],p={};for(let d=0;d<f.length;d+=1)p=A(p,f[d]);return{c(){e=Q("svg");for(let d=0;d<o.length;d+=1)o[d].c();n=Pe(),c&&c.c(),We(e,p)},m(d,g){z(d,e,g);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(e,null);h(e,n),c&&c.m(e,null),r=!0},p(d,[g]){if(g&32){i=d[5];let m;for(m=0;m<i.length;m+=1){const y=rt(d,i,m);o[m]?o[m].p(y,g):(o[m]=it(y),o[m].c(),o[m].m(e,n))}for(;m<o.length;m+=1)o[m].d(1);o.length=i.length}c&&c.p&&(!r||g&512)&&Re(c,u,d,d[9],r?Ee(u,d[9],g,null):je(d[9]),null),We(e,p=pe(f,[st,g&128&&d[7],(!r||g&4)&&{width:d[2]},(!r||g&4)&&{height:d[2]},(!r||g&2)&&{stroke:d[1]},(!r||g&28&&l!==(l=d[4]?Number(d[3])*24/Number(d[2]):d[3]))&&{"stroke-width":l},(!r||g&257&&s!==(s=d[6]("lucide-icon","lucide",d[0]?`lucide-${d[0]}`:"",d[8].class)))&&{class:s}]))},i(d){r||(k(c,d),r=!0)},o(d){S(c,d),r=!1},d(d){d&&W(e),Oe(o,d),c&&c.d(d)}}}function Pt(t,e,n){const l=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let s=tt(e,l),{$$slots:r={},$$scope:i}=e,{name:o=void 0}=e,{color:u="currentColor"}=e,{size:c=24}=e,{strokeWidth:f=2}=e,{absoluteStrokeWidth:p=!1}=e,{iconNode:d=[]}=e;const g=(...m)=>m.filter((y,U,P)=>Boolean(y)&&P.indexOf(y)===U).join(" ");return t.$$set=m=>{n(8,e=A(A({},e),x(m))),n(7,s=tt(e,l)),"name"in m&&n(0,o=m.name),"color"in m&&n(1,u=m.color),"size"in m&&n(2,c=m.size),"strokeWidth"in m&&n(3,f=m.strokeWidth),"absoluteStrokeWidth"in m&&n(4,p=m.absoluteStrokeWidth),"iconNode"in m&&n(5,d=m.iconNode),"$$scope"in m&&n(9,i=m.$$scope)},e=x(e),[o,u,c,f,p,d,g,s,e,i,r]}class At extends F{constructor(e){super(),J(this,e,Pt,Ot,M,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const Ge=At;function Ut(t){let e;const n=t[2].default,l=ze(n,t,t[3],null);return{c(){l&&l.c()},m(s,r){l&&l.m(s,r),e=!0},p(s,r){l&&l.p&&(!e||r&8)&&Re(l,n,s,s[3],e?Ee(n,s[3],r,null):je(s[3]),null)},i(s){e||(k(l,s),e=!0)},o(s){S(l,s),e=!1},d(s){l&&l.d(s)}}}function Dt(t){let e,n;const l=[{name:"play"},t[1],{iconNode:t[0]}];let s={$$slots:{default:[Ut]},$$scope:{ctx:t}};for(let r=0;r<l.length;r+=1)s=A(s,l[r]);return e=new Ge({props:s}),{c(){q(e.$$.fragment)},m(r,i){H(e,r,i),n=!0},p(r,[i]){const o=i&3?pe(l,[l[0],i&2&&Fe(r[1]),i&1&&{iconNode:r[0]}]):{};i&8&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){S(e.$$.fragment,r),n=!1},d(r){L(e,r)}}}function Ht(t,e,n){let{$$slots:l={},$$scope:s}=e;const r=[["polygon",{points:"6 3 20 12 6 21 6 3"}]];return t.$$set=i=>{n(1,e=A(A({},e),x(i))),"$$scope"in i&&n(3,s=i.$$scope)},e=x(e),[r,e,l,s]}class Lt extends F{constructor(e){super(),J(this,e,Ht,Dt,M,{})}}const Mt=Lt;function Bt(t){let e;const n=t[2].default,l=ze(n,t,t[3],null);return{c(){l&&l.c()},m(s,r){l&&l.m(s,r),e=!0},p(s,r){l&&l.p&&(!e||r&8)&&Re(l,n,s,s[3],e?Ee(n,s[3],r,null):je(s[3]),null)},i(s){e||(k(l,s),e=!0)},o(s){S(l,s),e=!1},d(s){l&&l.d(s)}}}function qt(t){let e,n;const l=[{name:"search"},t[1],{iconNode:t[0]}];let s={$$slots:{default:[Bt]},$$scope:{ctx:t}};for(let r=0;r<l.length;r+=1)s=A(s,l[r]);return e=new Ge({props:s}),{c(){q(e.$$.fragment)},m(r,i){H(e,r,i),n=!0},p(r,[i]){const o=i&3?pe(l,[l[0],i&2&&Fe(r[1]),i&1&&{iconNode:r[0]}]):{};i&8&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){S(e.$$.fragment,r),n=!1},d(r){L(e,r)}}}function Tt(t,e,n){let{$$slots:l={},$$scope:s}=e;const r=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];return t.$$set=i=>{n(1,e=A(A({},e),x(i))),"$$scope"in i&&n(3,s=i.$$scope)},e=x(e),[r,e,l,s]}class Jt extends F{constructor(e){super(),J(this,e,Tt,qt,M,{})}}const Ft=Jt;function Gt(t){let e;const n=t[2].default,l=ze(n,t,t[3],null);return{c(){l&&l.c()},m(s,r){l&&l.m(s,r),e=!0},p(s,r){l&&l.p&&(!e||r&8)&&Re(l,n,s,s[3],e?Ee(n,s[3],r,null):je(s[3]),null)},i(s){e||(k(l,s),e=!0)},o(s){S(l,s),e=!1},d(s){l&&l.d(s)}}}function Kt(t){let e,n;const l=[{name:"settings"},t[1],{iconNode:t[0]}];let s={$$slots:{default:[Gt]},$$scope:{ctx:t}};for(let r=0;r<l.length;r+=1)s=A(s,l[r]);return e=new Ge({props:s}),{c(){q(e.$$.fragment)},m(r,i){H(e,r,i),n=!0},p(r,[i]){const o=i&3?pe(l,[l[0],i&2&&Fe(r[1]),i&1&&{iconNode:r[0]}]):{};i&8&&(o.$$scope={dirty:i,ctx:r}),e.$set(o)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){S(e.$$.fragment,r),n=!1},d(r){L(e,r)}}}function Vt(t,e,n){let{$$slots:l={},$$scope:s}=e;const r=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]];return t.$$set=i=>{n(1,e=A(A({},e),x(i))),"$$scope"in i&&n(3,s=i.$$scope)},e=x(e),[r,e,l,s]}class Qt extends F{constructor(e){super(),J(this,e,Vt,Kt,M,{})}}const Xt=Qt;function Yt(t){let e,n,l,s,r,i,o,u;return r=new Ft({props:{class:"",size:20}}),{c(){e=b("div"),n=b("input"),l=N(),s=b("button"),q(r.$$.fragment),a(n,"type","text"),a(n,"class","w-full pl-2 text-sm pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out shadow-sm text-gray-700"),a(n,"placeholder","Search for images..."),a(s,"class","absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-2 rounded-full hover:bg-gray-800 transition duration-150 ease-in-out shadow-md"),a(e,"class","relative mb-1 w-full max-w-2xl mx-auto svelte-29z37v")},m(c,f){z(c,e,f),h(e,n),B(n,t[0]),h(e,l),h(e,s),H(r,s,null),i=!0,o||(u=[R(n,"input",t[4]),R(s,"click",t[1])],o=!0)},p(c,[f]){f&1&&n.value!==c[0]&&B(n,c[0])},i(c){i||(k(r.$$.fragment,c),i=!0)},o(c){S(r.$$.fragment,c),i=!1},d(c){c&&W(e),L(r),o=!1,Y(u)}}}function Zt(t,e,n){let{ws:l}=e,{searchResults:s}=e,r="subsonic|https://music.node0.vip/rest|keith|KeithsPassword";function i(){l&&l.readyState===WebSocket.OPEN?l.send(JSON.stringify({action:"search",query:r})):console.error("WebSocket is not open")}function o(){r=this.value,n(0,r)}return t.$$set=u=>{"ws"in u&&n(2,l=u.ws),"searchResults"in u&&n(3,s=u.searchResults)},[r,i,l,s,o]}class xt extends F{constructor(e){super(),J(this,e,Zt,Yt,M,{ws:2,searchResults:3})}}function ot(t,e,n){const l=t.slice();return l[8]=e[n],l}function $t(t){let e;return{c(){e=b("div"),e.innerHTML=`<div class="mx-auto w-full text-center"><p class="mb-4 text-3xl tracking-tight font-bold text-black">No Results</p> 
                <p class="mb-4 text-lg font-light text-gray-500">Please search something else...</p></div>`,a(e,"class","py-8 w-full px-4 mx-auto")},m(n,l){z(n,e,l)},p:j,d(n){n&&W(e)}}}function en(t){let e,n,l,s,r,i=t[2],o=[];for(let u=0;u<i.length;u+=1)o[u]=ut(ot(t,i,u));return{c(){e=b("button"),e.textContent="Add All",n=N(),l=b("div");for(let u=0;u<o.length;u+=1)o[u].c();a(e,"class","mb-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 w-full"),a(l,"class","grid grid-cols-3 gap-2")},m(u,c){z(u,e,c),z(u,n,c),z(u,l,c);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(l,null);s||(r=R(e,"click",t[4]),s=!0)},p(u,c){if(c&12){i=u[2];let f;for(f=0;f<i.length;f+=1){const p=ot(u,i,f);o[f]?o[f].p(p,c):(o[f]=ut(p),o[f].c(),o[f].m(l,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=i.length}},d(u){u&&W(e),u&&W(n),u&&W(l),Oe(o,u),s=!1,r()}}}function ut(t){let e,n,l,s,r,i,o,u;function c(...f){return t[7](t[8],...f)}return{c(){e=b("div"),n=b("img"),s=N(),r=b("div"),r.innerHTML='<span class="text-white">Drag Me</span>',i=N(),Ne(n.src,l=t[8])||a(n,"src",l),a(n,"alt","Search result"),a(n,"class","w-full h-full object-cover"),a(r,"class","absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center svelte-y228go"),a(e,"class","group relative rounded-lg h-36 w-36 overflow-hidden shadow-sm hover:shadow-md cursor-pointer svelte-y228go"),a(e,"draggable","true")},m(f,p){z(f,e,p),h(e,n),h(e,s),h(e,r),h(e,i),o||(u=R(e,"dragstart",c),o=!0)},p(f,p){t=f,p&4&&!Ne(n.src,l=t[8])&&a(n,"src",l)},d(f){f&&W(e),o=!1,u()}}}function tn(t){let e,n,l,s;n=new xt({props:{ws:t[0],searchResults:t[1]}});function r(u,c){return u[2].length>0?en:$t}let i=r(t),o=i(t);return{c(){e=b("div"),q(n.$$.fragment),l=N(),o.c(),a(e,"class","bg-white rounded-xl shadow-md p-2 w-[30rem] h-full overflow-y-auto relative")},m(u,c){z(u,e,c),H(n,e,null),h(e,l),o.m(e,null),s=!0},p(u,[c]){const f={};c&1&&(f.ws=u[0]),c&2&&(f.searchResults=u[1]),n.$set(f),i===(i=r(u))&&o?o.p(u,c):(o.d(1),o=i(u),o&&(o.c(),o.m(e,null)))},i(u){s||(k(n.$$.fragment,u),s=!0)},o(u){S(n.$$.fragment,u),s=!1},d(u){u&&W(e),L(n),o.d()}}}function nn(t,e,n){let l,s=j,r=()=>(s(),s=_t(o,g=>n(2,l=g)),o);t.$$.on_destroy.push(()=>s());let{ws:i}=e,{searchResults:o=[]}=e;r();let{onDragStart:u}=e,{cellImages:c=be([])}=e;function f(g,m){u?u(g,m):g.dataTransfer.setData("text/plain",m)}function p(){let g=0;c.update(m=>m.map(y=>y.map(U=>U===""&&g<l.length?l[g++]:U)))}const d=(g,m)=>f(m,g);return t.$$set=g=>{"ws"in g&&n(0,i=g.ws),"searchResults"in g&&r(n(1,o=g.searchResults)),"onDragStart"in g&&n(5,u=g.onDragStart),"cellImages"in g&&n(6,c=g.cellImages)},[i,o,l,f,p,u,c,d]}class ln extends F{constructor(e){super(),J(this,e,nn,tn,M,{ws:0,searchResults:1,onDragStart:5,cellImages:6})}}function sn(t){let e,n,l,s;return{c(){e=Q("svg"),n=Q("line"),l=Q("line"),s=Q("line"),a(n,"x1","3"),a(n,"y1","12"),a(n,"x2","21"),a(n,"y2","12"),a(l,"x1","3"),a(l,"y1","6"),a(l,"x2","21"),a(l,"y2","6"),a(s,"x1","3"),a(s,"y1","18"),a(s,"x2","21"),a(s,"y2","18"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"class","h-8 w-8"),a(e,"viewBox","0 0 24 24"),a(e,"fill","none"),a(e,"stroke","currentColor"),a(e,"stroke-width","2"),a(e,"stroke-linecap","round"),a(e,"stroke-linejoin","round")},m(r,i){z(r,e,i),h(e,n),h(e,l),h(e,s)},d(r){r&&W(e)}}}function rn(t){let e,n,l;return{c(){e=Q("svg"),n=Q("line"),l=Q("line"),a(n,"x1","18"),a(n,"y1","6"),a(n,"x2","6"),a(n,"y2","18"),a(l,"x1","6"),a(l,"y1","6"),a(l,"x2","18"),a(l,"y2","18"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"class","h-8 w-8"),a(e,"viewBox","0 0 24 24"),a(e,"fill","none"),a(e,"stroke","currentColor"),a(e,"stroke-width","2"),a(e,"stroke-linecap","round"),a(e,"stroke-linejoin","round")},m(s,r){z(s,e,r),h(e,n),h(e,l)},d(s){s&&W(e)}}}function on(t){let e,n,l,s,r,i,o,u,c,f,p,d,g,m,y,U,P,I,E,w,_,C,T,ce,O,Ke,te,we,Ve,G,Qe,ve,ne,De,Xe,He,Ye,ke,ae,le,Ze,ye,fe,se,V,Le,xe;function $e(v,D){return v[7]?rn:sn}let Se=$e(t),Z=Se(t);return le=new Xt({props:{size:20}}),se=new Mt({props:{size:20}}),{c(){e=b("div"),n=b("button"),Z.c(),l=N(),s=b("div"),r=b("div"),i=b("div"),o=b("div"),u=b("label"),u.textContent="Width",c=N(),f=b("input"),p=N(),d=b("div"),g=b("label"),g.textContent="Height",m=N(),y=b("input"),U=N(),P=b("div"),I=b("label"),I.textContent="DPI",E=N(),w=b("input"),_=N(),C=b("div"),T=b("label"),T.textContent="Rows",ce=N(),O=b("input"),Ke=N(),te=b("div"),we=b("label"),we.textContent="Columns",Ve=N(),G=b("input"),Qe=N(),ve=b("div"),ne=b("div"),De=he(t[2]),Xe=he("x"),He=he(t[3]),Ye=N(),ke=b("div"),ae=b("button"),q(le.$$.fragment),Ze=N(),ye=b("div"),fe=b("button"),q(se.$$.fragment),a(n,"class","flex items-center justify-center fixed z-50 left-1 top-1 w-10 h-10 bg-black text-white rounded-full transition duration-300 hover:bg-gray-800"),a(u,"class","floating-label svelte-1k5sz0d"),a(f,"type","number"),a(f,"min","1"),a(f,"class","input-field svelte-1k5sz0d"),a(f,"placeholder"," "),a(o,"class","relative"),a(g,"class","floating-label svelte-1k5sz0d"),a(y,"type","number"),a(y,"min","1"),a(y,"class","input-field svelte-1k5sz0d"),a(y,"placeholder"," "),a(d,"class","relative"),a(I,"class","floating-label svelte-1k5sz0d"),a(w,"type","number"),a(w,"min","1"),a(w,"class","input-field svelte-1k5sz0d"),a(w,"placeholder"," "),a(P,"class","relative"),a(T,"class","floating-label svelte-1k5sz0d"),a(O,"type","number"),a(O,"min","1"),a(O,"class","input-field svelte-1k5sz0d"),a(O,"placeholder"," "),a(C,"class","relative"),a(we,"class","floating-label svelte-1k5sz0d"),a(G,"type","number"),a(G,"min","1"),a(G,"class","input-field svelte-1k5sz0d"),a(G,"placeholder"," "),a(te,"class","relative"),a(ne,"class","bg-gray-50 h-full flex items-center justify-center text-gray-800 py-3 px-4 rounded-lg text-base font-semibold"),a(ve,"class",""),a(ae,"class","btn-black h-full flex items-center justify-center space-x-2 svelte-1k5sz0d"),a(ke,"class",""),a(fe,"class","btn-black flex h-full items-center justify-center space-x-2 svelte-1k5sz0d"),a(ye,"class",""),a(i,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4"),a(r,"class","p-4"),a(s,"class","bg-white fixed z-40 rounded-lg shadow-lg mr-4 transition-all duration-300 ease-in-out overflow-hidden"),X(s,"max-height",t[7]?"800px":"0"),X(s,"opacity",t[7]?1:0),lt(s,"min-height",t[7]?"auto":"0"),a(e,"class","flex w-full")},m(v,D){z(v,e,D),h(e,n),Z.m(n,null),h(e,l),h(e,s),h(s,r),h(r,i),h(i,o),h(o,u),h(o,c),h(o,f),B(f,t[4]),h(i,p),h(i,d),h(d,g),h(d,m),h(d,y),B(y,t[5]),h(i,U),h(i,P),h(P,I),h(P,E),h(P,w),B(w,t[6]),h(i,_),h(i,C),h(C,T),h(C,ce),h(C,O),B(O,t[0]),h(i,Ke),h(i,te),h(te,we),h(te,Ve),h(te,G),B(G,t[1]),h(i,Qe),h(i,ve),h(ve,ne),h(ne,De),h(ne,Xe),h(ne,He),h(i,Ye),h(i,ke),h(ke,ae),H(le,ae,null),h(i,Ze),h(i,ye),h(ye,fe),H(se,fe,null),V=!0,Le||(xe=[R(n,"click",t[10]),R(f,"input",t[13]),R(y,"input",t[14]),R(w,"input",t[15]),R(O,"input",t[16]),R(G,"input",t[17]),R(ae,"click",t[8]),R(fe,"click",t[9])],Le=!0)},p(v,[D]){Se!==(Se=$e(v))&&(Z.d(1),Z=Se(v),Z&&(Z.c(),Z.m(n,null))),D&16&&K(f.value)!==v[4]&&B(f,v[4]),D&32&&K(y.value)!==v[5]&&B(y,v[5]),D&64&&K(w.value)!==v[6]&&B(w,v[6]),D&1&&K(O.value)!==v[0]&&B(O,v[0]),D&2&&K(G.value)!==v[1]&&B(G,v[1]),(!V||D&4)&&nt(De,v[2]),(!V||D&8)&&nt(He,v[3]),(!V||D&128)&&X(s,"max-height",v[7]?"800px":"0"),(!V||D&128)&&X(s,"opacity",v[7]?1:0),(!V||D&128)&&lt(s,"min-height",v[7]?"auto":"0")},i(v){V||(k(le.$$.fragment,v),k(se.$$.fragment,v),V=!0)},o(v){S(le.$$.fragment,v),S(se.$$.fragment,v),V=!1},d(v){v&&W(e),Z.d(),L(le),L(se),Le=!1,Y(xe)}}}function un(t,e,n){let{ws:l}=e,{expectedCellWidth:s}=e,{expectedCellHeight:r}=e,{rows:i=5}=e,{cols:o=5}=e,{cellImages:u=be([])}=e,c=1e3,f=1e3,p=200,d=!0;function g(){l&&l.readyState===WebSocket.OPEN?l.send(JSON.stringify({action:"settings",query:`${i}|${o}|${c}|${f}|${p}`})):console.log("WebSocket is not open")}function m(){const _=u.subscribe(C=>{l&&l.readyState===WebSocket.OPEN?l.send(JSON.stringify({action:"process",query:i+"|"+o+"|"+c+"|"+f+"|"+p,grid:C})):console.log("WebSocket is not open"),console.log(C),_()})}function y(){n(7,d=!d)}function U(){c=K(this.value),n(4,c)}function P(){f=K(this.value),n(5,f)}function I(){p=K(this.value),n(6,p)}function E(){i=K(this.value),n(0,i)}function w(){o=K(this.value),n(1,o)}return t.$$set=_=>{"ws"in _&&n(11,l=_.ws),"expectedCellWidth"in _&&n(2,s=_.expectedCellWidth),"expectedCellHeight"in _&&n(3,r=_.expectedCellHeight),"rows"in _&&n(0,i=_.rows),"cols"in _&&n(1,o=_.cols),"cellImages"in _&&n(12,u=_.cellImages)},[i,o,s,r,c,f,p,d,g,m,y,l,u,U,P,I,E,w]}class cn extends F{constructor(e){super(),J(this,e,un,on,M,{ws:11,expectedCellWidth:2,expectedCellHeight:3,rows:0,cols:1,cellImages:12})}}function an(t){let e,n,l;return{c(){e=b("div"),a(e,"class","relative border border-gray-300 bg-gray-50 rounded-md flex justify-center items-center hover:bg-gray-100 transition-all duration-300 ease-in-out w-full overflow-hidden"),X(e,"background-image","url("+t[0]+")"),X(e,"background-size","cover"),X(e,"background-position","center")},m(s,r){z(s,e,r),n||(l=[R(e,"drop",t[1]),R(e,"dragover",fn)],n=!0)},p(s,[r]){r&1&&X(e,"background-image","url("+s[0]+")")},i:j,o:j,d(s){s&&W(e),n=!1,Y(l)}}}function fn(t){t.preventDefault()}function dn(t,e,n){let{imageUrl:l=""}=e;function s(r){r.preventDefault();const i=r.dataTransfer.getData("text/plain");i&&n(0,l=i)}return t.$$set=r=>{"imageUrl"in r&&n(0,l=r.imageUrl)},[l,s]}class gn extends F{constructor(e){super(),J(this,e,dn,an,M,{imageUrl:0})}}function ct(t,e,n){const l=t.slice();return l[8]=e[n],l[9]=e,l[10]=n,l}function at(t,e,n){const l=t.slice();return l[8]=e[n],l[11]=e,l[12]=n,l}function hn(t){let e;return{c(){e=b("div"),e.textContent=`Error: Invalid cell
                `,a(e,"class","border p-4 h-28 w-full flex justify-center items-center rounded-lg shadow-md bg-red-100 text-red-500")},m(n,l){z(n,e,l)},p:j,i:j,o:j,d(n){n&&W(e)}}}function mn(t){let e,n,l;function s(i){t[6](i,t[10],t[12])}let r={class:"border p-40 w-full flex justify-center items-center rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition"};return t[3][t[10]][t[12]]!==void 0&&(r.imageUrl=t[3][t[10]][t[12]]),e=new gn({props:r}),$.push(()=>ge(e,"imageUrl",s)),{c(){q(e.$$.fragment)},m(i,o){H(e,i,o),l=!0},p(i,o){t=i;const u={};!n&&o&8&&(n=!0,u.imageUrl=t[3][t[10]][t[12]],de(()=>n=!1)),e.$set(u)},i(i){l||(k(e.$$.fragment,i),l=!0)},o(i){S(e.$$.fragment,i),l=!1},d(i){L(e,i)}}}function ft(t){let e,n,l,s;const r=[mn,hn],i=[];function o(u,c){return u[3][u[10]]&&u[3][u[10]][u[12]]!==void 0?0:1}return e=o(t),n=i[e]=r[e](t),{c(){n.c(),l=Pe()},m(u,c){i[e].m(u,c),z(u,l,c),s=!0},p(u,c){let f=e;e=o(u),e===f?i[e].p(u,c):(Ae(),S(i[f],1,1,()=>{i[f]=null}),Ue(),n=i[e],n?n.p(u,c):(n=i[e]=r[e](u),n.c()),k(n,1),n.m(l.parentNode,l))},i(u){s||(k(n),s=!0)},o(u){S(n),s=!1},d(u){i[e].d(u),u&&W(l)}}}function dt(t){let e,n,l=Array(t[1]),s=[];for(let i=0;i<l.length;i+=1)s[i]=ft(at(t,l,i));const r=i=>S(s[i],1,1,()=>{s[i]=null});return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Pe()},m(i,o){for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(i,o);z(i,e,o),n=!0},p(i,o){if(o&10){l=Array(i[1]);let u;for(u=0;u<l.length;u+=1){const c=at(i,l,u);s[u]?(s[u].p(c,o),k(s[u],1)):(s[u]=ft(c),s[u].c(),k(s[u],1),s[u].m(e.parentNode,e))}for(Ae(),u=l.length;u<s.length;u+=1)r(u);Ue()}},i(i){if(!n){for(let o=0;o<l.length;o+=1)k(s[o]);n=!0}},o(i){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)S(s[o]);n=!1},d(i){Oe(s,i),i&&W(e)}}}function _n(t){let e,n,l,s=Array(t[0]),r=[];for(let o=0;o<s.length;o+=1)r[o]=dt(ct(t,s,o));const i=o=>S(r[o],1,1,()=>{r[o]=null});return{c(){e=b("div");for(let o=0;o<r.length;o+=1)r[o].c();a(e,"class","grid gap-2 p-2 border border-gray-200 rounded-lg shadow-sm bg-white w-full mx-auto overflow-y-auto"),a(e,"style",n=`grid-template-columns: repeat(${t[1]}, minmax(0, 1fr));`)},m(o,u){z(o,e,u);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);l=!0},p(o,[u]){if(u&11){s=Array(o[0]);let c;for(c=0;c<s.length;c+=1){const f=ct(o,s,c);r[c]?(r[c].p(f,u),k(r[c],1)):(r[c]=dt(f),r[c].c(),k(r[c],1),r[c].m(e,null))}for(Ae(),c=s.length;c<r.length;c+=1)i(c);Ue()}(!l||u&2&&n!==(n=`grid-template-columns: repeat(${o[1]}, minmax(0, 1fr));`))&&a(e,"style",n)},i(o){if(!l){for(let u=0;u<s.length;u+=1)k(r[u]);l=!0}},o(o){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)S(r[u]);l=!1},d(o){o&&W(e),Oe(r,o)}}}function bn(t,e,n){let l,s=j,r=()=>(s(),s=_t(f,g=>n(3,l=g)),f);t.$$.on_destroy.push(()=>s());let{ws:i}=e,{searchResults:o}=e,{rows:u=5}=e,{cols:c=5}=e,{cellImages:f=be([])}=e;r();function p(){try{if(u<=0||c<=0)throw new Error("Rows and columns must be greater than 0");f.set(Array.from({length:u},()=>Array(c).fill("")))}catch(g){console.error("Error initializing the grid:",g)}}p();function d(g,m,y){t.$$.not_equal(l[m][y],g)&&(l[m][y]=g,f.set(l))}return t.$$set=g=>{"ws"in g&&n(4,i=g.ws),"searchResults"in g&&n(5,o=g.searchResults),"rows"in g&&n(0,u=g.rows),"cols"in g&&n(1,c=g.cols),"cellImages"in g&&r(n(2,f=g.cellImages))},t.$$.update=()=>{var g;t.$$.dirty&11&&(u!==l.length||c!==(((g=l[0])==null?void 0:g.length)||0))&&p()},[u,c,f,l,i,o,d]}class pn extends F{constructor(e){super(),J(this,e,bn,_n,M,{ws:4,searchResults:5,rows:0,cols:1,cellImages:2})}}function wn(t){let e,n,l,s,r,i,o,u;return{c(){e=b("div"),n=b("div"),l=b("img"),r=N(),i=b("button"),i.textContent="Close",Ne(l.src,s=`${t[0]}`)||a(l,"src",s),a(l,"alt","Base64 Image"),a(l,"class","mb-4 rounded-md shadow"),a(i,"class","bg-blue-600 text-white py-2 px-6 rounded-md shadow hover:bg-blue-700"),a(n,"class","modal-content bg-white p-6 rounded-lg shadow-lg transition-transform transform translate-y-0 duration-500 ease-out svelte-1gryy4f"),a(e,"class","fixed inset-0 flex items-center justify-center bg-black bg-opacity-50")},m(c,f){z(c,e,f),h(e,n),h(n,l),h(n,r),h(n,i),o||(u=[R(i,"click",t[1]),R(n,"click",vt(t[2])),R(e,"click",t[1])],o=!0)},p(c,[f]){f&1&&!Ne(l.src,s=`${c[0]}`)&&a(l,"src",s)},i:j,o:j,d(c){c&&W(e),o=!1,Y(u)}}}function vn(t,e,n){let{resultImage:l}=e;const s=Ct();function r(){s("close")}function i(o){It.call(this,t,o)}return t.$$set=o=>{"resultImage"in o&&n(0,l=o.resultImage)},[l,r,i]}class kn extends F{constructor(e){super(),J(this,e,vn,wn,M,{resultImage:0})}}function gt(t){let e,n;return e=new kn({props:{resultImage:t[1]}}),e.$on("close",t[8]),{c(){q(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},p(l,s){const r={};s&2&&(r.resultImage=l[1]),e.$set(r)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){L(e,l)}}}function yn(t){let e,n,l,s,r,i,o,u,c,f,p,d,g,m;function y(_){t[9](_)}function U(_){t[10](_)}function P(_){t[11](_)}function I(_){t[12](_)}let E={ws:t[0],cellImages:t[7]};t[4]!==void 0&&(E.expectedCellWidth=t[4]),t[5]!==void 0&&(E.expectedCellHeight=t[5]),t[2]!==void 0&&(E.rows=t[2]),t[3]!==void 0&&(E.cols=t[3]),n=new cn({props:E}),$.push(()=>ge(n,"expectedCellWidth",y)),$.push(()=>ge(n,"expectedCellHeight",U)),$.push(()=>ge(n,"rows",P)),$.push(()=>ge(n,"cols",I)),f=new ln({props:{ws:t[0],cellImages:t[7],searchResults:t[6]}}),d=new pn({props:{ws:t[0],searchResults:t[6],rows:t[2],cols:t[3],cellImages:t[7]}});let w=t[1]!=""&&gt(t);return{c(){e=b("main"),q(n.$$.fragment),o=N(),u=b("div"),c=b("div"),q(f.$$.fragment),p=N(),q(d.$$.fragment),g=N(),w&&w.c(),a(u,"class","flex"),X(u,"height","-webkit-fill-available"),a(e,"class","p-4 bg-gray-100 min-h-screen")},m(_,C){z(_,e,C),H(n,e,null),h(e,o),h(e,u),h(u,c),H(f,c,null),h(u,p),H(d,u,null),h(e,g),w&&w.m(e,null),m=!0},p(_,[C]){const T={};C&1&&(T.ws=_[0]),!l&&C&16&&(l=!0,T.expectedCellWidth=_[4],de(()=>l=!1)),!s&&C&32&&(s=!0,T.expectedCellHeight=_[5],de(()=>s=!1)),!r&&C&4&&(r=!0,T.rows=_[2],de(()=>r=!1)),!i&&C&8&&(i=!0,T.cols=_[3],de(()=>i=!1)),n.$set(T);const ce={};C&1&&(ce.ws=_[0]),f.$set(ce);const O={};C&1&&(O.ws=_[0]),C&4&&(O.rows=_[2]),C&8&&(O.cols=_[3]),d.$set(O),_[1]!=""?w?(w.p(_,C),C&2&&k(w,1)):(w=gt(_),w.c(),k(w,1),w.m(e,null)):w&&(Ae(),S(w,1,1,()=>{w=null}),Ue())},i(_){m||(k(n.$$.fragment,_),k(f.$$.fragment,_),k(d.$$.fragment,_),k(w),m=!0)},o(_){S(n.$$.fragment,_),S(f.$$.fragment,_),S(d.$$.fragment,_),S(w),m=!1},d(_){_&&W(e),L(n),L(f),L(d),w&&w.d()}}}function Sn(t,e,n){let l,s=be([]);const r="ws://localhost:8080/ws";let i=be([]),o="",u=5,c=3,f=200,p=200;function d(){n(0,l=new WebSocket(r)),n(0,l.onopen=()=>console.log("WebSocket connected"),l),n(0,l.onmessage=I=>{if(I.data instanceof Blob){const E=URL.createObjectURL(I.data);n(1,o=E)}else{const E=JSON.parse(I.data);switch(E.action){case"search":s.set(E.response);break;case"settings":n(4,f=E.width),n(5,p=E.height);break}}},l),n(0,l.onclose=()=>console.log("WebSocket closed"),l),n(0,l.onerror=I=>console.error("WebSocket error:",I),l)}function g(){n(1,o="")}d();function m(I){f=I,n(4,f)}function y(I){p=I,n(5,p)}function U(I){u=I,n(2,u)}function P(I){c=I,n(3,c)}return[l,o,u,c,f,p,s,i,g,m,y,U,P]}class Cn extends F{constructor(e){super(),J(this,e,Sn,yn,M,{})}}new Cn({target:document.getElementById("app")});
