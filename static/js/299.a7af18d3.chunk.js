/*! For license information please see 299.a7af18d3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkTaste_Trekker=self.webpackChunkTaste_Trekker||[]).push([[299],{3299:function(t,n,e){e.r(n);var r=e(74165),i=e(15861),o=e(29439),c=e(72791),a=e(31243),s=e(78983),l=e(80184);n.default=function(){var t=(0,c.useState)([]),n=(0,o.Z)(t,2),e=n[0],u=n[1],h=(0,c.useState)("all"),d=(0,o.Z)(h,2),f=d[0],p=d[1];function g(t,n){(0,a.Z)({method:"put",url:"https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/order/status/".concat(t),data:{tracking:n}}).then((function(e){console.log(t,n),alert("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng"),x()})).catch((function(t){console.log(t),alert("\u0110\xe3 x\u1ea3y ra l\u1ed7i, vui l\xf2ng th\u1eed l\u1ea1i")}))}(0,c.useEffect)((function(){x()}),[f]);var x=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.Z.get("https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/order/").then((function(t){var n=t.data.data;u(n)})).catch((function(t){console.log(t.response)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,l.jsx)(s.rb,{children:(0,l.jsx)(s.b7,{xs:12,children:(0,l.jsxs)(s.xH,{className:"mb-4",children:[(0,l.jsx)(s.bn,{children:(0,l.jsx)("strong",{children:"Theo d\xf5i \u0111\u01a1n h\xe0ng"})}),(0,l.jsxs)(s.sl,{children:[(0,l.jsxs)(s.E7,{className:"justify-content-center","aria-label":"Page navigation example",children:[(0,l.jsx)(s.tn,{className:"all"===f?"active":"",onClick:function(){return p("all")},children:"T\u1ea5t c\u1ea3"}),(0,l.jsx)(s.tn,{className:"checking"===f?"active":"",onClick:function(){return p("checking")},children:"\u0110ang ch\u1edd"}),(0,l.jsx)(s.tn,{className:"Pending"===f?"active":"",onClick:function(){return p("Pending")},children:"\u0110ang giao"}),(0,l.jsx)(s.tn,{className:"done"===f?"active":"",onClick:function(){return p("done")},children:"Th\xe0nh c\xf4ng"}),(0,l.jsx)(s.tn,{className:"cancel"===f?"active":"",onClick:function(){return p("cancel")},children:"\u0110\xe3 hu\u1ef7"})]}),null===e||void 0===e?void 0:e.map((function(t){return"all"!==f?t.status===f&&(0,l.jsx)(s.xH,{style:{width:"100",margin:"20px"},children:(0,l.jsxs)(s.sl,{children:[(0,l.jsxs)(s.tj,{children:["\u0110\u01a1n h\xe0ng: ",t.orderid]}),(0,l.jsxs)(s.uS,{children:[(0,l.jsx)("b",{children:"Kh\xe1ch h\xe0ng:"})," ",t.Customer.name," - ",t.Customer.email," -"," ",t.Customer.phone]}),(0,l.jsxs)(s.uS,{children:[(0,l.jsx)("b",{children:"\u0110\u1ecba ch\u1ec9 nh\u1eadn h\xe0ng:"})," ",t.Customer.address]}),(0,l.jsx)(s.uS,{children:(0,l.jsxs)(s.Sx,{striped:!0,children:[(0,l.jsx)(s.V,{children:(0,l.jsxs)(s.T6,{children:[(0,l.jsx)(s.is,{scope:"col",style:{width:"500px"},children:"T\xean s\u1ea3n ph\u1ea9m"}),(0,l.jsx)(s.is,{scope:"col",children:"H\xecnh \u1ea3nh"}),(0,l.jsx)(s.is,{scope:"col",children:"S\u1ed1 l\u01b0\u1ee3ng"}),(0,l.jsx)(s.is,{scope:"col",children:"\u0110\u01a1n gi\xe1"})]})}),(0,l.jsx)(s.NR,{children:t.OrderDetails.map((function(t){return(0,l.jsxs)(s.T6,{children:[(0,l.jsx)(s.NN,{scope:"row",children:t.Product.name}),(0,l.jsx)(s.NN,{children:(0,l.jsx)(s.pX,{orientation:"top",src:t.Product.mainimg,style:{width:"50px"}})}),(0,l.jsx)(s.NN,{children:t.quantity}),(0,l.jsx)(s.NN,{children:t.Product.price})]},t.Product.productid)}))})]})}),(0,l.jsxs)(s.Bt,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,l.jsxs)(s.uS,{children:["T\u1ed5ng ti\u1ec1n: ",t.totalmoney]}),(0,l.jsxs)(s.uS,{children:["Tr\u1ea1ng th\xe1i:"," ","Pending"===t.status?"\u0110ang giao":"checking"===t.status?"\u0110ang ch\u1edd":"done"===t.status?"\u0110\xe3 nh\u1eadn":"\u0110\xe3 hu\u1ef7"]}),(0,l.jsxs)(s.w5,{children:[(0,l.jsx)(s.SQ,{color:"primary",children:"Chuy\u1ec3n tr\u1ea1ng th\xe1i"}),(0,l.jsxs)(s.$H,{children:[(0,l.jsx)(s.$f,{onClick:function(){return g(t.orderid,"Pending")},children:"\u0110ang giao"}),(0,l.jsx)(s.$f,{onClick:function(){return g(t.orderid,"cancel")},children:"\u0110\xe3 hu\u1ef7"}),(0,l.jsx)(s.$f,{onClick:function(){return g(t.orderid,"done")},children:"Th\xe0nh c\xf4ng"})]})]})]})]})},t.orderid):"cart"!==t.status&&(0,l.jsx)(s.xH,{style:{width:"100",margin:"20px"},children:(0,l.jsxs)(s.sl,{children:[(0,l.jsxs)(s.tj,{children:["\u0110\u01a1n h\xe0ng: ",t.orderid]}),(0,l.jsxs)(s.uS,{children:[(0,l.jsx)("b",{children:"Kh\xe1ch h\xe0ng:"})," ",t.Customer.name," - ",t.Customer.email," -"," ",t.Customer.phone]}),(0,l.jsxs)(s.uS,{children:[(0,l.jsx)("b",{children:"\u0110\u1ecba ch\u1ec9 nh\u1eadn h\xe0ng:"})," ",t.Customer.address]}),(0,l.jsx)(s.uS,{children:(0,l.jsxs)(s.Sx,{striped:!0,children:[(0,l.jsx)(s.V,{children:(0,l.jsxs)(s.T6,{children:[(0,l.jsx)(s.is,{scope:"col",style:{width:"500px"},children:"T\xean s\u1ea3n ph\u1ea9m"}),(0,l.jsx)(s.is,{scope:"col",children:"H\xecnh \u1ea3nh"}),(0,l.jsx)(s.is,{scope:"col",children:"S\u1ed1 l\u01b0\u1ee3ng"}),(0,l.jsx)(s.is,{scope:"col",children:"\u0110\u01a1n gi\xe1"})]})}),(0,l.jsx)(s.NR,{children:t.OrderDetails.map((function(t){return(0,l.jsxs)(s.T6,{children:[(0,l.jsx)(s.NN,{scope:"row",children:t.Product.name}),(0,l.jsx)(s.NN,{children:(0,l.jsx)(s.pX,{orientation:"top",src:t.Product.mainimg,style:{width:"50px"}})}),(0,l.jsx)(s.NN,{children:t.quantity}),(0,l.jsx)(s.NN,{children:t.Product.price})]},t.Product.productid)}))})]})}),(0,l.jsxs)(s.Bt,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,l.jsxs)(s.uS,{children:["T\u1ed5ng ti\u1ec1n: ",t.totalmoney]}),(0,l.jsxs)(s.uS,{children:["Tr\u1ea1ng th\xe1i:"," ","Pending"===t.status?"\u0110ang giao":"checking"===t.status?"\u0110ang ch\u1edd":"done"===t.status?"\u0110\xe3 nh\u1eadn":"\u0110\xe3 hu\u1ef7"]}),(0,l.jsxs)(s.w5,{children:[(0,l.jsx)(s.SQ,{color:"primary",children:"Chuy\u1ec3n tr\u1ea1ng th\xe1i"}),(0,l.jsxs)(s.$H,{children:[(0,l.jsx)(s.$f,{onClick:function(){return g(t.orderid,"Pending")},children:"\u0110ang giao"}),(0,l.jsx)(s.$f,{onClick:function(){return g(t.orderid,"cancel")},children:"\u0110\xe3 hu\u1ef7"}),(0,l.jsx)(s.$f,{onClick:function(){return g(t.orderid,"done")},children:"Th\xe0nh c\xf4ng"})]})]})]})]})},t.orderid)}))]})]})})})}},15861:function(t,n,e){function r(t,n,e,r,i,o,c){try{var a=t[o](c),s=a.value}catch(l){return void e(l)}a.done?n(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var c=t.apply(n,e);function a(t){r(c,i,o,a,s,"next",t)}function s(t){r(c,i,o,a,s,"throw",t)}a(void 0)}))}}e.d(n,{Z:function(){return i}})},74165:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(71002);function i(){i=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(T){u=function(t,n,e){return t[n]=e}}function h(t,n,e,r){var i=n&&n.prototype instanceof p?n:p,c=Object.create(i.prototype),a=new S(r||[]);return o(c,"_invoke",{value:k(t,e,a)}),c}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(T){return{type:"throw",arg:T}}}t.wrap=h;var f={};function p(){}function g(){}function x(){}var v={};u(v,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(E([])));m&&m!==n&&e.call(m,a)&&(v=m);var j=x.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function b(t,n){function i(o,c,a,s){var l=d(t[o],t,c);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==(0,r.Z)(h)&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){i("next",t,a,s)}),(function(t){i("throw",t,a,s)})):n.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,s)}))}s(l.arg)}var c;o(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){i(t,e,n,r)}))}return c=c?c.then(r,r):r()}})}function k(t,n,e){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return P()}for(e.method=i,e.arg=o;;){var c=e.delegate;if(c){var a=N(c,e);if(a){if(a===f)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=d(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}function N(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,N(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var i=d(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,f;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function C(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return g.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=u(x,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(n,e,r,i,o){void 0===o&&(o=Promise);var c=new b(h(n,e,r,i),o);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},w(j),u(j,l,"Generator"),u(j,a,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return c.type="throw",c.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=e.call(o,"catchLoc"),s=e.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=n,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;C(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}}}]);
//# sourceMappingURL=299.a7af18d3.chunk.js.map