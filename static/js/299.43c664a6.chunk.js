/*! For license information please see 299.43c664a6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkTaste_Trekker=self.webpackChunkTaste_Trekker||[]).push([[299],{3299:function(t,r,e){e.r(r);var n=e(74165),o=e(15861),i=e(29439),c=e(72791),a=e(31243),s=e(78983),u=e(80184);r.default=function(){var t=(0,c.useState)([]),r=(0,i.Z)(t,2),e=r[0],h=r[1];function l(t,r){(0,a.Z)({method:"put",url:"https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/order/status/".concat(t),data:{tracking:r}}).then((function(e){console.log(t,r),alert("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng"),f()})).catch((function(t){console.log(t),alert("\u0110\xe3 x\u1ea3y ra l\u1ed7i, vui l\xf2ng th\u1eed l\u1ea1i")}))}(0,c.useEffect)((function(){f()}),[]);var f=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.Z.get("https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/order/").then((function(t){var r=t.data.data;h(r)})).catch((function(t){console.log(t.response)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,u.jsx)(s.rb,{children:(0,u.jsx)(s.b7,{xs:12,children:(0,u.jsxs)(s.xH,{className:"mb-4",children:[(0,u.jsx)(s.bn,{children:(0,u.jsx)("strong",{children:"Theo d\xf5i \u0111\u01a1n h\xe0ng"})}),(0,u.jsxs)(s.sl,{children:[(0,u.jsxs)(s.E7,{className:"justify-content-center","aria-label":"Page navigation example",children:[(0,u.jsx)(s.tn,{active:!0,children:"T\u1ea5t c\u1ea3"}),(0,u.jsx)(s.tn,{children:"\u0110ang ch\u1edd"}),(0,u.jsx)(s.tn,{children:"\u0110ang giao"}),(0,u.jsx)(s.tn,{children:"Th\xe0nh c\xf4ng"}),(0,u.jsx)(s.tn,{children:"\u0110\xe3 hu\u1ef7"})]}),null===e||void 0===e?void 0:e.map((function(t){return(0,u.jsx)(s.xH,{style:{width:"100",margin:"20px"},children:"cart"!==t.status&&(0,u.jsxs)(s.sl,{children:[(0,u.jsxs)(s.tj,{children:["\u0110\u01a1n h\xe0ng: ",t.orderid]}),(0,u.jsx)(s.uS,{children:(0,u.jsxs)(s.Sx,{striped:!0,children:[(0,u.jsx)(s.V,{children:(0,u.jsxs)(s.T6,{children:[(0,u.jsx)(s.is,{scope:"col",style:{width:"500px"},children:"T\xean s\u1ea3n ph\u1ea9m"}),(0,u.jsx)(s.is,{scope:"col",children:"H\xecnh \u1ea3nh"}),(0,u.jsx)(s.is,{scope:"col",children:"S\u1ed1 l\u01b0\u1ee3ng"}),(0,u.jsx)(s.is,{scope:"col",children:"\u0110\u01a1n gi\xe1"})]})}),(0,u.jsx)(s.NR,{children:t.OrderDetails.map((function(t){return(0,u.jsxs)(s.T6,{children:[(0,u.jsx)(s.NN,{scope:"row",children:t.Product.name}),(0,u.jsx)(s.NN,{children:(0,u.jsx)(s.pX,{orientation:"top",src:t.Product.mainimg,style:{width:"50px"}})}),(0,u.jsx)(s.NN,{children:t.quantity}),(0,u.jsx)(s.NN,{children:t.Product.price})]},t.Product.productid)}))})]})}),(0,u.jsxs)(s.Bt,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,u.jsxs)(s.uS,{children:["T\u1ed5ng ti\u1ec1n: ",t.totalmoney]}),(0,u.jsxs)(s.uS,{children:["Tr\u1ea1ng th\xe1i:"," ","Pending"===t.status?"\u0110ang giao":"checking"===t.status?"\u0110ang ch\u1edd":"done"===t.status?"\u0110\xe3 nh\u1eadn":"\u0110\xe3 hu\u1ef7"]}),(0,u.jsxs)(s.w5,{children:[(0,u.jsx)(s.SQ,{color:"primary",children:"Chuy\u1ec3n tr\u1ea1ng th\xe1i"}),(0,u.jsxs)(s.$H,{children:[(0,u.jsx)(s.$f,{onClick:function(){return l(t.orderid,"Pending")},children:"\u0110ang giao"}),(0,u.jsx)(s.$f,{onClick:function(){return l(t.orderid,"cancel")},children:"\u0110\xe3 hu\u1ef7"}),(0,u.jsx)(s.$f,{onClick:function(){return l(t.orderid,"done")},children:"Th\xe0nh c\xf4ng"})]})]})]})]})},t.orderid)}))]})]})})})}},15861:function(t,r,e){function n(t,r,e,n,o,i,c){try{var a=t[i](c),s=a.value}catch(u){return void e(u)}a.done?r(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var c=t.apply(r,e);function a(t){n(c,o,i,a,s,"next",t)}function s(t){n(c,o,i,a,s,"throw",t)}a(void 0)}))}}e.d(r,{Z:function(){return o}})},74165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(71002);function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(O){h=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,c=Object.create(o.prototype),a=new T(n||[]);return i(c,"_invoke",{value:L(t,e,a)}),c}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var d={};function p(){}function v(){}function y(){}var g={};h(g,a,(function(){return this}));var x=Object.getPrototypeOf,m=x&&x(x(_([])));m&&m!==r&&e.call(m,a)&&(g=m);var w=y.prototype=p.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(i,c,a,s){var u=f(t[i],t,c);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==(0,n.Z)(l)&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):r.resolve(l).then((function(t){h.value=t,a(h)}),(function(t){return o("throw",t,a,s)}))}s(u.arg)}var c;i(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return c=c?c.then(n,n):n()}})}function L(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var a=E(c,e);if(a){if(a===d)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var s=f(t,r,e);if("normal"===s.type){if(n=e.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n="completed",e.method="throw",e.arg=s.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),d;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function _(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=h(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},j(b.prototype),h(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var c=new b(l(r,e,n,o),i);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(w),h(w,u,"Generator"),h(w,a,(function(){return this})),h(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return c.type="throw",c.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:_(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}}}]);
//# sourceMappingURL=299.43c664a6.chunk.js.map