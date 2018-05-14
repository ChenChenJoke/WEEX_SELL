// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";var r=n(1),o=n(5);new Vue(Vue.util.extend({el:"#root",router:r},o)),r.push("/")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(2),i=r(o),a=n(3),u=r(a);Vue.use(i.default),t.exports=new i.default({routes:[{path:"/",name:"HelloWorld",component:u.default}]})},function(t,e,n){"use strict";/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
function r(t,e){if(!t)throw new Error("[vue-router] "+e)}function o(t,e){process.env.NODE_ENV}function i(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function a(t,e){switch(void 0===e?"undefined":qt(e)){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:"production"!==process.env.NODE_ENV&&o(!1,'props in "'+t.path+'" is a '+(void 0===e?"undefined":qt(e))+", expecting an object, function or boolean.")}}function u(t,e){for(var n in e)t[n]=e[n];return t}function s(t,e,n){void 0===e&&(e={});var r,i=n||c;try{r=i(t||"")}catch(t){"production"!==process.env.NODE_ENV&&o(!1,t.message),r={}}for(var a in e)r[a]=e[a];return r}function c(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=It(n.shift()),o=n.length>0?It(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function p(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return Ft(e);if(Array.isArray(n)){var r=[];return n.forEach(function(t){void 0!==t&&(null===t?r.push(Ft(e)):r.push(Ft(e)+"="+Ft(t)))}),r.join("&")}return Ft(e)+"="+Ft(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function f(t,e,n,r){var o=r&&r.options.stringifyQuery,i=e.query||{};try{i=h(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:d(e,o),matched:t?l(t):[]};return n&&(a.redirectedFrom=d(n,o)),Object.freeze(a)}function h(t){if(Array.isArray(t))return t.map(h);if(t&&"object"===(void 0===t?"undefined":qt(t))){var e={};for(var n in t)e[n]=h(t[n]);return e}return t}function l(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function d(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;void 0===o&&(o="");var i=e||p;return(n||"/")+i(r)+o}function v(t,e){return e===zt?t===e:!!e&&(t.path&&e.path?t.path.replace(Bt,"")===e.path.replace(Bt,"")&&t.hash===e.hash&&y(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&y(t.query,e.query)&&y(t.params,e.params)))}function y(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){var r=t[n],o=e[n];return"object"===(void 0===r?"undefined":qt(r))&&"object"===(void 0===o?"undefined":qt(o))?y(r,o):String(r)===String(o)})}function m(t,e){return 0===t.path.replace(Bt,"/").indexOf(e.path.replace(Bt,"/"))&&(!e.hash||t.hash===e.hash)&&g(t.query,e.query)}function g(t,e){for(var n in e)if(!(n in t))return!1;return!0}function b(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){if(/\b_blank\b/i.test(t.currentTarget.getAttribute("target")))return}return t.preventDefault&&t.preventDefault(),!0}}function w(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=w(e.children)))return e}}function _(t){if(!_.installed||Dt!==t){_.installed=!0,Dt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",Pt),t.component("router-link",Jt);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}function E(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function x(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function O(t){return t.replace(/\/\//g,"/")}function k(t,e){for(var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(n=ee.exec(t));){var s=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+s.length,c)a+=c[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],v=n[5],y=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===y||"*"===y,w="?"===y||"*"===y,_=n[2]||u,E=d||v;r.push({name:l||o++,prefix:h||"",delimiter:_,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:E?A(E):m?".*":"[^"+N(_)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function R(t,e){return S(k(t,e))}function j(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function C(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function S(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===qt(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},u=a.pretty?j:encodeURIComponent,s=0;s<t.length;s++){var c=t[s];if("string"!=typeof c){var p,f=i[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Wt(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[s].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?C(f):u(f),!e[s].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}function N(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function T(t,e){return t.keys=e,t}function $(t){return t.sensitive?"":"i"}function V(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return T(t,e)}function D(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(L(t[o],e,n).source);return T(new RegExp("(?:"+r.join("|")+")",$(n)),e)}function q(t,e,n){return P(k(t,n),e,n)}function P(t,e,n){Wt(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=N(u);else{var s=N(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")",i+=c}}var p=N(n.delimiter||"/"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+p+"|$)",T(new RegExp("^"+i,$(n)),e)}function L(t,e,n){return Wt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?V(t,e):Wt(t)?D(t,e,n):q(t,e,n)}function U(t,e,n){try{return(ne[t]||(ne[t]=Qt.compile(t)))(e||{},{pretty:!0})}catch(t){return"production"!==process.env.NODE_ENV&&o(!1,"missing param for "+n+": "+t.message),""}}function M(t,e,n,r){var o=e||[],i=n||Object.create(null),a=r||Object.create(null);t.forEach(function(t){F(o,i,a,t)});for(var u=0,s=o.length;u<s;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),s--,u--);return{pathList:o,pathMap:i,nameMap:a}}function F(t,e,n,i,a,u){var s=i.path,c=i.name;"production"!==process.env.NODE_ENV&&(r(null!=s,'"path" is required in a route configuration.'),r("string"!=typeof i.component,'route config "component" for path: '+String(s||c)+" cannot be a string id. Use an actual component instead."));var p=i.pathToRegexpOptions||{},f=B(s,a,p.strict);"boolean"==typeof i.caseSensitive&&(p.sensitive=i.caseSensitive);var h={path:f,regex:I(f,p),components:i.components||{default:i.component},instances:{},name:c,parent:a,matchAs:u,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&("production"!==process.env.NODE_ENV&&i.name&&!i.redirect&&i.children.some(function(t){return/^\/?$/.test(t.path)})&&o(!1,"Named Route '"+i.name+"' has a default child route. When navigating to this named route (:to=\"{name: '"+i.name+"'\"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead."),i.children.forEach(function(r){var o=u?O(u+"/"+r.path):void 0;F(t,e,n,r,h,o)})),void 0!==i.alias){(Array.isArray(i.alias)?i.alias:[i.alias]).forEach(function(r){var o={path:r,children:i.children};F(t,e,n,o,a,h.path||"/")})}e[h.path]||(t.push(h.path),e[h.path]=h),c&&(n[c]?"production"===process.env.NODE_ENV||u||o(!1,'Duplicate named routes definition: { name: "'+c+'", path: "'+h.path+'" }'):n[c]=h)}function I(t,e){var n=Qt(t,[],e);if("production"!==process.env.NODE_ENV){var r=Object.create(null);n.keys.forEach(function(e){o(!r[e.name],'Duplicate param keys in route with path: "'+t+'"'),r[e.name]=!0})}return n}function B(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]?t:null==e?t:O(e.path+"/"+t)}function z(t,e,n,r){var i="string"==typeof t?{path:t}:t;if(i.name||i._normalized)return i;if(!i.path&&i.params&&e){i=H({},i),i._normalized=!0;var a=H(H({},e.params),i.params);if(e.name)i.name=e.name,i.params=a;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;i.path=U(u,a,"path "+e.path)}else"production"!==process.env.NODE_ENV&&o(!1,"relative params navigation requires a current route.");return i}var c=x(i.path||""),p=e&&e.path||"/",f=c.path?E(c.path,p,n||i.append):p,h=s(c.query,i.query,r&&r.options.parseQuery),l=i.hash||c.hash;return l&&"#"!==l.charAt(0)&&(l="#"+l),{_normalized:!0,path:f,query:h,hash:l}}function H(t,e){for(var n in e)t[n]=e[n];return t}function X(t,e){function n(t){M(t,p,h,l)}function i(t,n,r){var i=z(t,n,!1,e),a=i.name;if(a){var u=l[a];if("production"!==process.env.NODE_ENV&&o(u,"Route with name '"+a+"' does not exist"),!u)return s(null,i);var c=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!==qt(i.params)&&(i.params={}),n&&"object"===qt(n.params))for(var f in n.params)!(f in i.params)&&c.indexOf(f)>-1&&(i.params[f]=n.params[f]);if(u)return i.path=U(u.path,i.params,'named route "'+a+'"'),s(u,i,r)}else if(i.path){i.params={};for(var d=0;d<p.length;d++){var v=p[d],y=h[v];if(J(y.regex,i.path,i.params))return s(y,i,r)}}return s(null,i)}function a(t,n){var a=t.redirect,u="function"==typeof a?a(f(t,n,null,e)):a;if("string"==typeof u&&(u={path:u}),!u||"object"!==(void 0===u?"undefined":qt(u)))return"production"!==process.env.NODE_ENV&&o(!1,"invalid redirect option: "+JSON.stringify(u)),s(null,n);var c=u,p=c.name,h=c.path,d=n.query,v=n.hash,y=n.params;if(d=c.hasOwnProperty("query")?c.query:d,v=c.hasOwnProperty("hash")?c.hash:v,y=c.hasOwnProperty("params")?c.params:y,p){var m=l[p];return"production"!==process.env.NODE_ENV&&r(m,'redirect failed: named route "'+p+'" not found.'),i({_normalized:!0,name:p,query:d,hash:v,params:y},void 0,n)}if(h){var g=K(h,t);return i({_normalized:!0,path:U(g,y,'redirect route with path "'+g+'"'),query:d,hash:v},void 0,n)}return"production"!==process.env.NODE_ENV&&o(!1,"invalid redirect option: "+JSON.stringify(u)),s(null,n)}function u(t,e,n){var r=U(n,e.params,'aliased route with path "'+n+'"'),o=i({_normalized:!0,path:r});if(o){var a=o.matched,u=a[a.length-1];return e.params=o.params,s(u,e)}return s(null,e)}function s(t,n,r){return t&&t.redirect?a(t,r||n):t&&t.matchAs?u(t,n,t.matchAs):f(t,n,r,e)}var c=M(t),p=c.pathList,h=c.pathMap,l=c.nameMap;return{match:i,addRoutes:n}}function J(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof r[o]?decodeURIComponent(r[o]):r[o];a&&(n[a.name]=u)}return!0}function K(t,e){return E(t,e.parent?e.parent.path:"/",!0)}function W(){window.history.replaceState({key:at()},""),window.addEventListener("popstate",function(t){Y(),t.state&&t.state.key&&ut(t.state.key)})}function Q(t,e,n,o){if(t.app){var i=t.options.scrollBehavior;i&&("production"!==process.env.NODE_ENV&&r("function"==typeof i,"scrollBehavior must be a function"),t.app.$nextTick(function(){var t=G(),a=i(e,n,o?t:null);a&&("function"==typeof a.then?a.then(function(e){ot(e,t)}).catch(function(t){"production"!==process.env.NODE_ENV&&r(!1,t.toString())}):ot(a,t))}))}}function Y(){var t=at();t&&(re[t]={x:window.pageXOffset,y:window.pageYOffset})}function G(){var t=at();if(t)return re[t]}function Z(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-r.left-e.x,y:o.top-r.top-e.y}}function tt(t){return rt(t.x)||rt(t.y)}function et(t){return{x:rt(t.x)?t.x:window.pageXOffset,y:rt(t.y)?t.y:window.pageYOffset}}function nt(t){return{x:rt(t.x)?t.x:0,y:rt(t.y)?t.y:0}}function rt(t){return"number"==typeof t}function ot(t,e){var n="object"===(void 0===t?"undefined":qt(t));if(n&&"string"==typeof t.selector){var r=document.querySelector(t.selector);if(r){var o=t.offset&&"object"===qt(t.offset)?t.offset:{};o=nt(o),e=Z(r,o)}else tt(t)&&(e=et(t))}else n&&tt(t)&&(e=et(t));e&&window.scrollTo(e.x,e.y)}function it(){return ie.now().toFixed(3)}function at(){return ae}function ut(t){ae=t}function st(t,e){Y();var n=window.history;try{e?n.replaceState({key:ae},"",t):(ae=it(),n.pushState({key:ae},"",t))}catch(n){window.location[e?"replace":"assign"](t)}}function ct(t){st(t,!0)}function pt(t,e,n){!function r(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)}(0)}function ft(t){return function(e,n,r){var a=!1,u=0,s=null;ht(t,function(t,e,n,c){if("function"==typeof t&&void 0===t.cid){a=!0,u++;var p,f=vt(function(e){dt(e)&&(e=e.default),t.resolved="function"==typeof e?e:Dt.extend(e),n.components[c]=e,--u<=0&&r()}),h=vt(function(t){var e="Failed to resolve async component "+c+": "+t;"production"!==process.env.NODE_ENV&&o(!1,e),s||(s=i(t)?t:new Error(e),r(s))});try{p=t(f,h)}catch(t){h(t)}if(p)if("function"==typeof p.then)p.then(f,h);else{var l=p.component;l&&"function"==typeof l.then&&l.then(f,h)}}}),a||r()}}function ht(t,e){return lt(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function lt(t){return Array.prototype.concat.apply([],t)}function dt(t){return t.__esModule||ue&&"Module"===t[Symbol.toStringTag]}function vt(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}function yt(t){if(!t)if(Kt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function mt(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function gt(t,e,n,r){var o=ht(t,function(t,r,o,i){var a=bt(t,e);if(a)return Array.isArray(a)?a.map(function(t){return n(t,r,o,i)}):n(a,r,o,i)});return lt(r?o.reverse():o)}function bt(t,e){return"function"!=typeof t&&(t=Dt.extend(t)),t.options[e]}function wt(t){return gt(t,"beforeRouteLeave",Et,!0)}function _t(t){return gt(t,"beforeRouteUpdate",Et)}function Et(t,e){if(e)return function(){return t.apply(e,arguments)}}function xt(t,e,n){return gt(t,"beforeRouteEnter",function(t,r,o,i){return Ot(t,o,i,e,n)})}function Ot(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&r.push(function(){kt(t,e.instances,n,o)})})}}function kt(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){kt(t,e,n,r)},16)}function Rt(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function jt(t){var e=Rt(t);if(!/^\/#/.test(e))return window.location.replace(O(t+"/#"+e)),!0}function Ct(){var t=St();return"/"===t.charAt(0)||(Tt("/"+t),!1)}function St(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function Nt(t){var e=window.location.href,n=e.indexOf("#");return(n>=0?e.slice(0,n):e)+"#"+t}function At(t){oe?st(Nt(t)):window.location.hash=t}function Tt(t){oe?ct(Nt(t)):window.location.replace(Nt(t))}function $t(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Vt(t,e,n){var r="hash"===n?"#"+e:e;return t?O(t+"/"+r):r}Object.defineProperty(e,"__esModule",{value:!0});var Dt,qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pt={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var s=o.$createElement,c=n.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;o&&o._routerRoot!==o;)o.$vnode&&o.$vnode.data.routerView&&h++,o._inactive&&(l=!0),o=o.$parent;if(i.routerViewDepth=h,l)return s(f[c],i,r);var d=p.matched[h];if(!d)return f[c]=null,s();var v=f[c]=d.components[c];i.registerRouteInstance=function(t,e){var n=d.instances[c];(e&&n!==t||!e&&n===t)&&(d.instances[c]=e)},(i.hook||(i.hook={})).prepatch=function(t,e){d.instances[c]=e.componentInstance};var y=i.props=a(p,d.props&&d.props[c]);if(y){y=i.props=u({},y);var m=i.attrs=i.attrs||{};for(var g in y)v.props&&g in v.props||(m[g]=y[g],delete y[g])}return s(v,i,r)}},Lt=/[!'()*]/g,Ut=function(t){return"%"+t.charCodeAt(0).toString(16)},Mt=/%2C/g,Ft=function(t){return encodeURIComponent(t).replace(Lt,Ut).replace(Mt,",")},It=decodeURIComponent,Bt=/\/?$/,zt=f(null,{path:"/"}),Ht=[String,Object],Xt=[String,Array],Jt={name:"router-link",props:{to:{type:Ht,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:Xt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.location,a=o.route,u=o.href,s={},c=n.options.linkActiveClass,p=n.options.linkExactActiveClass,h=null==c?"router-link-active":c,l=null==p?"router-link-exact-active":p,d=null==this.activeClass?h:this.activeClass,y=null==this.exactActiveClass?l:this.exactActiveClass,g=i.path?f(null,i,null,n):a;s[y]=v(r,g),s[d]=this.exact?s[y]:m(r,g);var _=function(t){b(t)&&(e.replace?n.replace(i):n.push(i))},E={click:b};Array.isArray(this.event)?this.event.forEach(function(t){E[t]=_}):E[this.event]=_;var x={class:s};if("a"===this.tag)x.on=E,x.attrs={href:u};else{var O=w(this.$slots.default);if(O){O.isStatic=!1;var k=Dt.util.extend;(O.data=k({},O.data)).on=E;(O.data.attrs=k({},O.data.attrs)).href=u}else x.on=E}return t(this.tag,x,this.$slots.default)}},Kt="undefined"!=typeof window,Wt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Qt=L,Yt=k,Gt=R,Zt=S,te=P,ee=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Qt.parse=Yt,Qt.compile=Gt,Qt.tokensToFunction=Zt,Qt.tokensToRegExp=te;var ne=Object.create(null),re=Object.create(null),oe=Kt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),ie=Kt&&window.performance&&window.performance.now?window.performance:Date,ae=it(),ue="function"==typeof Symbol&&"symbol"===qt(Symbol.toStringTag),se=function(t,e){this.router=t,this.base=yt(e),this.current=zt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};se.prototype.listen=function(t){this.cb=t},se.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},se.prototype.onError=function(t){this.errorCbs.push(t)},se.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach(function(t){t(o)}))},function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach(function(e){e(t)}))})},se.prototype.confirmTransition=function(t,e,n){var r=this,a=this.current,u=function(t){i(t)&&(r.errorCbs.length?r.errorCbs.forEach(function(e){e(t)}):o(!1,"uncaught error during route navigation:")),n&&n(t)};if(v(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),u();var s=mt(this.current.matched,t.matched),c=s.updated,p=s.deactivated,f=s.activated,h=[].concat(wt(p),this.router.beforeHooks,_t(c),f.map(function(t){return t.beforeEnter}),ft(f));this.pending=t;var l=function(e,n){if(r.pending!==t)return u();try{e(t,a,function(t){!1===t||i(t)?(r.ensureURL(!0),u(t)):"string"==typeof t||"object"===(void 0===t?"undefined":qt(t))&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"===(void 0===t?"undefined":qt(t))&&t.replace?r.replace(t):r.push(t)):n(t)})}catch(t){u(t)}};pt(h,l,function(){var n=[];pt(xt(f,n,function(){return r.current===t}).concat(r.router.resolveHooks),l,function(){if(r.pending!==t)return u();r.pending=null,e(t),r.router.app&&r.router.app.$nextTick(function(){n.forEach(function(t){t()})})})})},se.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var ce=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;o&&W();var i=Rt(this.base);window.addEventListener("popstate",function(t){var n=r.current,a=Rt(r.base);r.current===zt&&a===i||r.transitionTo(a,function(t){o&&Q(e,t,n,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){st(O(r.base+t.fullPath)),Q(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){ct(O(r.base+t.fullPath)),Q(r.router,t,i,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(Rt(this.base)!==this.current.fullPath){var e=O(this.base+this.current.fullPath);t?st(e):ct(e)}},e.prototype.getCurrentLocation=function(){return Rt(this.base)},e}(se),pe=function(t){function e(e,n,r){t.call(this,e,n),r&&jt(this.base)||Ct()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router,n=e.options.scrollBehavior,r=oe&&n;r&&W(),window.addEventListener(oe?"popstate":"hashchange",function(){var e=t.current;Ct()&&t.transitionTo(St(),function(n){r&&Q(t.router,n,e,!0),oe||Tt(n.fullPath)})})},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){At(t.fullPath),Q(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){Tt(t.fullPath),Q(r.router,t,i,!1),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;St()!==e&&(t?At(e):Tt(e))},e.prototype.getCurrentLocation=function(){return St()},e}(se),fe=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(se),he=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=X(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!oe&&!1!==t.fallback,this.fallback&&(e="hash"),Kt||(e="abstract"),this.mode=e,e){case"history":this.history=new ce(this,t.base);break;case"hash":this.history=new pe(this,t.base,this.fallback);break;case"abstract":this.history=new fe(this,t.base);break;default:"production"!==process.env.NODE_ENV&&r(!1,"invalid mode: "+e)}},le={currentRoute:{configurable:!0}};he.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},le.currentRoute.get=function(){return this.history&&this.history.current},he.prototype.init=function(t){var e=this;if("production"!==process.env.NODE_ENV&&r(_.installed,"not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance."),this.apps.push(t),!this.app){this.app=t;var n=this.history;if(n instanceof ce)n.transitionTo(n.getCurrentLocation());else if(n instanceof pe){var o=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),o,o)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},he.prototype.beforeEach=function(t){return $t(this.beforeHooks,t)},he.prototype.beforeResolve=function(t){return $t(this.resolveHooks,t)},he.prototype.afterEach=function(t){return $t(this.afterHooks,t)},he.prototype.onReady=function(t,e){this.history.onReady(t,e)},he.prototype.onError=function(t){this.history.onError(t)},he.prototype.push=function(t,e,n){this.history.push(t,e,n)},he.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},he.prototype.go=function(t){this.history.go(t)},he.prototype.back=function(){this.go(-1)},he.prototype.forward=function(){this.go(1)},he.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},he.prototype.resolve=function(t,e,n){var r=z(t,e||this.history.current,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath;return{location:r,route:o,href:Vt(this.history.base,i,this.mode),normalizedTo:r,resolved:o}},he.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==zt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(he.prototype,le),he.install=_,he.version="3.0.1",Kt&&window.Vue&&window.Vue.use(he),e.default=he},function(t,e,n){var r,o,i=[],a=n(4);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{staticClass:["message"]},[t._v("Now, let's use Vue.js to build your Weex app.")])},staticRenderFns:[]}},function(t,e,n){var r,o,i=[];i.push(n(6)),r=n(7);var a=n(8);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-87e8334e",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},function(t,e){t.exports={wrapper:{justifyContent:"center",alignItems:"center"},logo:{width:"424",height:"200"},greeting:{textAlign:"center",marginTop:"70",fontSize:"50",color:"#FF00ff"},message:{marginTop:"30",marginRight:"30",marginBottom:"30",marginLeft:"30",fontSize:"32",color:"#727272"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"App",data:function(){return{logo:"https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png"}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("image",{staticClass:["logo"],attrs:{src:t.logo}}),n("text",{staticClass:["greeting"]},[t._v("The environment is ready!")]),t._m(0),n("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:["greeting"],attrs:{href:"../dist/index.shop.web.js"}},[n("text",[t._v(" 热更新app 到商城代码 ")])])}]}}]);