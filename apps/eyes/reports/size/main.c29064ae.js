"use strict";(()=>{(self.webpackChunkweb=self.webpackChunkweb||[]).push([["main"],{21:function(b,c,o){o.r(c);var s=o(7294),f=o.n(s),d=o(2667),m=o(8443),v=o(3123);c.default=function(){return f().createElement(d.default,{id:"app-container"},f().createElement(v.default,null),f().createElement(m.default,null))}},2667:function(b,c,o){o.r(c);var s=o(7294),f=o.n(s);c.default=function(d){var m=d.id,v=d.children;return f().createElement("div",{id:m!=null?m:void 0,className:"container mf-grid mf-min-h-screen mf-min-w-full mf-grid-cols-2 mf-gap-0"},v)}},5740:function(b,c,o){o.r(c);var s=o(7294),f=o.n(s);c.default=function(d){var m=d.headerTag,v=d.headerContent,_=d.primary,S=d.children,P="".concat(m),R="mf-text-black mf-border-white dark:mf-text-white"+"".concat(_?"mf-border-purple":"mf-border-gold");return f().createElement(P,{"data-testid":"header",className:R},v||S)}},8443:function(b,c,o){o.r(c);var s=o(7294),f=o.n(s),d=o(5740);c.default=function(){return f().createElement("div",{className:"mf-bg-slate-800 mf-ring-slate-900/5 mf-rounded-lg mf-bg-black mf-p-8 mf-px-6 mf-py-8 mf-text-white mf-shadow-xl mf-ring-1"},f().createElement(d.default,{primary:!0,headerContent:"Files",headerTag:"h1"}))}},3123:function(b,c,o){o.r(c);var s=o(7294),f=o.n(s),d=o(5740);function m(u){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},m(u)}function v(){v=function(){return u};var u={},l=Object.prototype,y=l.hasOwnProperty,E=Object.defineProperty||function(e,t,n){e[t]=n.value},x=typeof Symbol=="function"?Symbol:{},L=x.iterator||"@@iterator",j=x.asyncIterator||"@@asyncIterator",O=x.toStringTag||"@@toStringTag";function p(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(e){p=function(t,n,a){return t[n]=a}}function B(e,t,n,a){var r=t&&t.prototype instanceof D?t:D,i=Object.create(r.prototype),h=new J(a||[]);return E(i,"_invoke",{value:X(e,n,h)}),i}function z(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(a){return{type:"throw",arg:a}}}u.wrap=B;var k={};function D(){}function I(){}function N(){}var M={};p(M,L,function(){return this});var q=Object.getPrototypeOf,Y=q&&q(q(K([])));Y&&Y!==l&&y.call(Y,L)&&(M=Y);var C=N.prototype=D.prototype=Object.create(M);function U(e){["next","throw","return"].forEach(function(t){p(e,t,function(n){return this._invoke(t,n)})})}function A(e,t){function n(r,i,h,g){var w=z(e[r],e,i);if(w.type!=="throw"){var F=w.arg,G=F.value;return G&&m(G)=="object"&&y.call(G,"__await")?t.resolve(G.__await).then(function(T){n("next",T,h,g)},function(T){n("throw",T,h,g)}):t.resolve(G).then(function(T){F.value=T,h(F)},function(T){return n("throw",T,h,g)})}g(w.arg)}var a;E(this,"_invoke",{value:function(r,i){function h(){return new t(function(g,w){n(r,i,g,w)})}return a=a?a.then(h,h):h()}})}function X(e,t,n){var a="suspendedStart";return function(r,i){if(a==="executing")throw new Error("Generator is already running");if(a==="completed"){if(r==="throw")throw i;return W()}for(n.method=r,n.arg=i;;){var h=n.delegate;if(h){var g=V(h,n);if(g){if(g===k)continue;return g}}if(n.method==="next")n.sent=n._sent=n.arg;else if(n.method==="throw"){if(a==="suspendedStart")throw a="completed",n.arg;n.dispatchException(n.arg)}else n.method==="return"&&n.abrupt("return",n.arg);a="executing";var w=z(e,t,n);if(w.type==="normal"){if(a=n.done?"completed":"suspendedYield",w.arg===k)continue;return{value:w.arg,done:n.done}}w.type==="throw"&&(a="completed",n.method="throw",n.arg=w.arg)}}}function V(e,t){var n=t.method,a=e.iterator[n];if(a===void 0)return t.delegate=null,n==="throw"&&e.iterator.return&&(t.method="return",t.arg=void 0,V(e,t),t.method==="throw")||n!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),k;var r=z(a,e.iterator,t.arg);if(r.type==="throw")return t.method="throw",t.arg=r.arg,t.delegate=null,k;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,t.method!=="return"&&(t.method="next",t.arg=void 0),t.delegate=null,k):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,k)}function Z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function H(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function J(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(Z,this),this.reset(!0)}function K(e){if(e){var t=e[L];if(t)return t.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(y.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return a.next=a}}return{next:W}}function W(){return{value:void 0,done:!0}}return I.prototype=N,E(C,"constructor",{value:N,configurable:!0}),E(N,"constructor",{value:I,configurable:!0}),I.displayName=p(N,O,"GeneratorFunction"),u.isGeneratorFunction=function(e){var t=typeof e=="function"&&e.constructor;return!!t&&(t===I||(t.displayName||t.name)==="GeneratorFunction")},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,N):(e.__proto__=N,p(e,O,"GeneratorFunction")),e.prototype=Object.create(C),e},u.awrap=function(e){return{__await:e}},U(A.prototype),p(A.prototype,j,function(){return this}),u.AsyncIterator=A,u.async=function(e,t,n,a,r){r===void 0&&(r=Promise);var i=new A(B(e,t,n,a),r);return u.isGeneratorFunction(t)?i:i.next().then(function(h){return h.done?h.value:i.next()})},U(C),p(C,O,"Generator"),p(C,L,function(){return this}),p(C,"toString",function(){return"[object Generator]"}),u.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function r(){for(;n.length;){var i=n.pop();if(i in t)return r.value=i,r.done=!1,r}return r.done=!0,r}},u.values=K,J.prototype={constructor:J,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(H),!e)for(var t in this)t.charAt(0)==="t"&&y.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(w,F){return i.type="throw",i.arg=e,t.next=w,F&&(t.method="next",t.arg=void 0),!!F}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],i=r.completion;if(r.tryLoc==="root")return n("end");if(r.tryLoc<=this.prev){var h=y.call(r,"catchLoc"),g=y.call(r,"finallyLoc");if(h&&g){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(h){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!g)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&y.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&(e==="break"||e==="continue")&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,k):this.complete(i)},complete:function(e,t){if(e.type==="throw")throw e.arg;return e.type==="break"||e.type==="continue"?this.next=e.arg:e.type==="return"?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):e.type==="normal"&&t&&(this.next=t),k},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),H(n),k}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if(a.type==="throw"){var r=a.arg;H(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:K(e),resultName:t,nextLoc:n},this.method==="next"&&(this.arg=void 0),k}},u}function _(u,l,y,E,x,L,j){try{var O=u[L](j),p=O.value}catch(B){return void y(B)}O.done?l(p):Promise.resolve(p).then(E,x)}function S(u){return function(){var l=this,y=arguments;return new Promise(function(E,x){var L=u.apply(l,y);function j(p){_(L,E,x,j,O,"next",p)}function O(p){_(L,E,x,j,O,"throw",p)}j(void 0)})}}function P(){return(P=S(v().mark(function u(){return v().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:throw new TypeError("You are the man Techdeus!!!!");case 1:case"end":return l.stop()}},u)}))).apply(this,arguments)}var R=function(u,l){var y=u/l;if(l===0)throw new EvalError("You cannot divide by zero dumb ass!");return y};function Q(){return(Q=S(v().mark(function u(l,y){var E;return v().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:try{E=Math.floor(R(l,y)),console.log(E)}catch(L){console.log(L)}case 1:case"end":return x.stop()}},u)}))).apply(this,arguments)}c.default=function(){return f().createElement("div",{className:"mf-bg-white mf-p-8 mf-text-black mf-shadow-xl mf-ring-1"},f().createElement(d.default,{primary:!0,headerContent:"Gamer",headerTag:"h1"}),f().createElement("button",{onClick:function(){return function(){return P.apply(this,arguments)}()}},"Break the world"),";",f().createElement("button",{onClick:function(){return function(u,l){return Q.apply(this,arguments)}(2,0)}},"Break the world"),";")}},3135:function(b,c,o){o.r(c),c.default=function(s){s&&s instanceof Function&&o.e("vendors").then(o.bind(o,8085)).then(function(f){var d=f.getCLS,m=f.getFID,v=f.getFCP,_=f.getLCP,S=f.getTTFB;d(s),m(s),v(s),_(s),S(s)})}},3681:function(b,c,o){o.r(c),o(7562);var s=o(7923),f=o(7914),d=o(7294),m=o.n(d),v=o(745),_=o(3135),S=o(21);o(8835),s.init({dsn:"https://9725c4a44bde45fd8383a2e7877239f1@o4504788985053184.ingest.sentry.io/4504788987936768",integrations:[new f.BrowserTracing],tracesSampleRate:1});var P=document.getElementById("root");(0,v.createRoot)(P).render(m().createElement(S.default,null)),(0,_.default)()},8835:function(b,c,o){o.r(c)}},function(b){var c=function(o){return b(b.s=o)};b.O(0,["vendors"],function(){return c(9484),c(3681)}),b.O()}]);})();
/*! For license information please see main.c29064ae.js.LICENSE.txt */
