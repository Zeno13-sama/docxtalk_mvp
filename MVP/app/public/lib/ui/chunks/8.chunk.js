(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1406:function(o,t,e){var n=e(28),r=e(1520);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[o.i,r,""]]);var i={insert:function(o){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(o);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function o(t,e=document){const n=[];return e.querySelectorAll(t).forEach(o=>n.push(o)),e.querySelectorAll("*").forEach(e=>{e.shadowRoot&&n.push(...o(t,e.shadowRoot))}),n}("apryse-webviewer"));const e=[];for(let n=0;n<t.length;n++){const r=t[n];if(0===n)r.shadowRoot.appendChild(o),o.onload=function(){e.length>0&&e.forEach(t=>{t.innerHTML=o.innerHTML})};else{const t=o.cloneNode(!0);r.shadowRoot.appendChild(t),e.push(t)}}},singleton:!1};n(r,i);o.exports=r.locals||{}},1424:function(o,t,e){"use strict";e.d(t,"b",(function(){return m}));e(16),e(44),e(35),e(26),e(27),e(12),e(14),e(8),e(25),e(22),e(33),e(32),e(54),e(23),e(24),e(56),e(55),e(60),e(13),e(9),e(10),e(11),e(65),e(66),e(67),e(68),e(36),e(42),e(15),e(43),e(64);var n=e(0),r=e(6),i=e(2),a=e(4),l=e.n(a);function u(o){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return o};var o={},t=Object.prototype,e=t.hasOwnProperty,n=Object.defineProperty||function(o,t,e){o[t]=e.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function s(o,t,e){return Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),o[t]}try{s({},"")}catch(o){s=function(o,t,e){return o[t]=e}}function d(o,t,e,r){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),l=new S(r||[]);return n(a,"_invoke",{value:E(o,e,l)}),a}function b(o,t,e){try{return{type:"normal",arg:o.call(t,e)}}catch(o){return{type:"throw",arg:o}}}o.wrap=d;var f={};function p(){}function k(){}function m(){}var h={};s(h,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(P([])));v&&v!==t&&e.call(v,i)&&(h=v);var y=m.prototype=p.prototype=Object.create(h);function w(o){["next","throw","return"].forEach((function(t){s(o,t,(function(o){return this._invoke(t,o)}))}))}function x(o,t){var r;n(this,"_invoke",{value:function(n,i){function a(){return new t((function(r,a){!function n(r,i,a,l){var c=b(o[r],o,i);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==u(d)&&e.call(d,"__await")?t.resolve(d.__await).then((function(o){n("next",o,a,l)}),(function(o){n("throw",o,a,l)})):t.resolve(d).then((function(o){s.value=o,a(s)}),(function(o){return n("throw",o,a,l)}))}l(c.arg)}(n,i,r,a)}))}return r=r?r.then(a,a):a()}})}function E(o,t,e){var n="suspendedStart";return function(r,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw i;return D()}for(e.method=r,e.arg=i;;){var a=e.delegate;if(a){var l=O(a,e);if(l){if(l===f)continue;return l}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=b(o,t,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function O(o,t){var e=t.method,n=o.iterator[e];if(void 0===n)return t.delegate=null,"throw"===e&&o.iterator.return&&(t.method="return",t.arg=void 0,O(o,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var r=b(n,o.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var i=r.arg;return i?i.done?(t[o.resultName]=i.value,t.next=o.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(o){var t={tryLoc:o[0]};1 in o&&(t.catchLoc=o[1]),2 in o&&(t.finallyLoc=o[2],t.afterLoc=o[3]),this.tryEntries.push(t)}function j(o){var t=o.completion||{};t.type="normal",delete t.arg,o.completion=t}function S(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(L,this),this.reset(!0)}function P(o){if(o){var t=o[i];if(t)return t.call(o);if("function"==typeof o.next)return o;if(!isNaN(o.length)){var n=-1,r=function t(){for(;++n<o.length;)if(e.call(o,n))return t.value=o[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:D}}function D(){return{value:void 0,done:!0}}return k.prototype=m,n(y,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:k,configurable:!0}),k.displayName=s(m,l,"GeneratorFunction"),o.isGeneratorFunction=function(o){var t="function"==typeof o&&o.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},o.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,m):(o.__proto__=m,s(o,l,"GeneratorFunction")),o.prototype=Object.create(y),o},o.awrap=function(o){return{__await:o}},w(x.prototype),s(x.prototype,a,(function(){return this})),o.AsyncIterator=x,o.async=function(t,e,n,r,i){void 0===i&&(i=Promise);var a=new x(d(t,e,n,r),i);return o.isGeneratorFunction(e)?a:a.next().then((function(o){return o.done?o.value:a.next()}))},w(y),s(y,l,"Generator"),s(y,i,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),o.keys=function(o){var t=Object(o),e=[];for(var n in t)e.push(n);return e.reverse(),function o(){for(;e.length;){var n=e.pop();if(n in t)return o.value=n,o.done=!1,o}return o.done=!0,o}},o.values=P,S.prototype={constructor:S,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!o)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var o=this.tryEntries[0].completion;if("throw"===o.type)throw o.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var t=this;function n(e,n){return a.type="throw",a.arg=o,t.next=e,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(o,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&e.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===o||"continue"===o)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=o,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(o,t){if("throw"===o.type)throw o.arg;return"break"===o.type||"continue"===o.type?this.next=o.arg:"return"===o.type?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):"normal"===o.type&&t&&(this.next=t),f},finish:function(o){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===o)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(o){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===o){var n=e.completion;if("throw"===n.type){var r=n.arg;j(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(o,t,e){return this.delegate={iterator:P(o),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},o}function s(o,t,e,n,r,i,a){try{var l=o[i](a),u=l.value}catch(o){return void e(o)}l.done?t(u):Promise.resolve(u).then(n,r)}function d(o){return function(){var t=this,e=arguments;return new Promise((function(n,r){var i=o.apply(t,e);function a(o){s(i,n,r,a,l,"next",o)}function l(o){s(i,n,r,a,l,"throw",o)}a(void 0)}))}}function b(o,t){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.push.apply(e,n)}return e}function f(o){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?b(Object(e),!0).forEach((function(t){p(o,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(e,t))}))}return o}function p(o,t,e){return(t=function(o){var t=function(o,t){if("object"!==u(o)||null===o)return o;var e=o[Symbol.toPrimitive];if(void 0!==e){var n=e.call(o,t||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(o)}(o,"string");return"symbol"===u(t)?t:String(t)}(t))in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var k=function(o,t,e){return{icon:t,label:e,title:e,option:o,dataElement:"".concat(o[0].toUpperCase()+o.slice(1),"Button")}},m={OPENFILE:"openFile",RENAME:"rename",SETDEST:"setDestination",DOWNLOAD:"download",DELETE:"delete"},h=[k(m.OPENFILE,"icon-portfolio-file","portfolio.openFile"),k(m.RENAME,"ic_edit_page_24px","action.rename"),k(m.SETDEST,"icon-thumbtack","action.setDestination"),k(m.DOWNLOAD,"icon-download","action.download"),k(m.DELETE,"icon-delete-line","action.delete")],g=function(o){var t=o.type,e=o.handleOnClick,a=o.currentFlyout,l=o.flyoutSelector,u=o.shouldHideDeleteButton,s=Object(r.d)();return Object(n.useLayoutEffect)((function(){var o={dataElement:l,className:"MoreOptionsContextMenuFlyout",items:h.map((function(o){var n=o.option,r=!1;return n===m.DELETE?r=u:n===m.DOWNLOAD||n===m.OPENFILE?r="portfolio"!==t:n===m.SETDEST&&(r="outline"!==t),f(f({},o),{},{hidden:r,dataElement:"".concat(t).concat(o.dataElement),onClick:function(){return e(o.option)}})}))};function n(){return(n=d(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s(a?i.a.updateFlyout(o.dataElement,o):i.a.addFlyout(o));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),null};g.propTypes={type:l.a.oneOf(["bookmark","outline","portfolio"]).isRequired,handleOnClick:l.a.func,currentFlyout:l.a.object,flyoutSelector:l.a.string,shouldHideDeleteButton:l.a.bool},t.a=g},1520:function(o,t,e){(o.exports=e(29)(!1)).push([o.i,".bookmark-outline-panel{display:flex;padding-left:var(--padding);padding-right:var(--padding-small)}.bookmark-outline-control-button{width:auto}.bookmark-outline-control-button span{color:inherit}.bookmark-outline-control-button,.bookmark-outline-control-button.disabled,.bookmark-outline-control-button[disabled]{color:var(--secondary-button-text)}.bookmark-outline-control-button.disabled,.bookmark-outline-control-button[disabled]{opacity:.5}.bookmark-outline-control-button.disabled span,.bookmark-outline-control-button[disabled] span{color:inherit}.bookmark-outline-control-button:not(.disabled):active,.bookmark-outline-control-button:not(.disabled):hover,.bookmark-outline-control-button:not([disabled]):active,.bookmark-outline-control-button:not([disabled]):hover{color:var(--secondary-button-hover)}.bookmark-outline-panel-header{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;padding:var(--padding-tiny);border-bottom:1px solid var(--divider)}.bookmark-outline-panel-header .header-title{font-size:16px}.bookmark-outline-row{flex-grow:1;overflow-y:auto}.msg-no-bookmark-outline{color:var(--placeholder-text);text-align:center}.bookmark-outline-single-container{display:flex;flex-flow:row nowrap;align-items:flex-start;border-radius:4px;margin-left:2px;margin-right:2px}.bookmark-outline-single-container.default{padding:var(--padding-tiny);border:1px solid transparent}.bookmark-outline-single-container.default.hover,.bookmark-outline-single-container.default:hover,.bookmark-outline-single-container.default[focus-within]{cursor:pointer}.bookmark-outline-single-container.default.hover,.bookmark-outline-single-container.default:focus-within,.bookmark-outline-single-container.default:hover{cursor:pointer}.bookmark-outline-single-container.default.hover .bookmark-outline-more-button,.bookmark-outline-single-container.default:hover .bookmark-outline-more-button,.bookmark-outline-single-container.default[focus-within] .bookmark-outline-more-button{display:flex;background-color:transparent}.bookmark-outline-single-container.default.hover .bookmark-outline-more-button,.bookmark-outline-single-container.default:focus-within .bookmark-outline-more-button,.bookmark-outline-single-container.default:hover .bookmark-outline-more-button{display:flex;background-color:transparent}.bookmark-outline-single-container.default:hover{outline:1px solid var(--hover-border)}.bookmark-outline-single-container.default.hover,.bookmark-outline-single-container.default.selected{background-color:var(--popup-button-active)}.bookmark-outline-single-container.default[focus-within]{border-color:transparent;outline:1px solid var(--hover-border)}.bookmark-outline-single-container.default:focus-within{border-color:transparent;outline:1px solid var(--hover-border)}.bookmark-outline-single-container.default.selected{background-color:var(--outline-selected);outline:1px solid var(--bookmark-outline-hover-border)}.bookmark-outline-single-container.default .bookmark-outline-label-row{overflow:hidden}.bookmark-outline-single-container.default.focus-visible,.bookmark-outline-single-container.default:focus-visible{outline:var(--focus-visible-outline)!important}.bookmark-outline-single-container.editing{background-color:var(--faded-component-background);padding:var(--padding-medium) 20px}.bookmark-outline-single-container.editing.focus-visible,.bookmark-outline-single-container.editing:focus-visible{outline:var(--focus-visible-outline)!important}.bookmark-outline-single-container.preview{display:inline-flex;margin-top:0;padding:var(--padding-small);background-color:var(--component-background);box-shadow:0 0 3px var(--note-box-shadow)}.bookmark-outline-single-container .bookmark-outline-checkbox{flex-grow:0;flex-shrink:0;margin-top:2px;margin-bottom:2px;margin-right:var(--padding-small)}.bookmark-outline-single-container .bookmark-outline-label-row{flex-grow:1;flex-shrink:1;display:flex;flex-flow:row wrap;align-items:flex-start;position:relative;overflow:hidden}.bookmark-outline-single-container .bookmark-outline-label{font-weight:600;flex-grow:1;flex-shrink:1;margin-bottom:var(--padding-small)}.bookmark-outline-single-container .bookmark-outline-input,.bookmark-outline-single-container .bookmark-outline-text{flex-grow:1;flex-shrink:1;flex-basis:calc(100% - 22px);margin-top:2px;margin-bottom:2px}.bookmark-outline-single-container .bookmark-text-input{margin-left:var(--padding-large)}.bookmark-outline-single-container .bookmark-outline-input{color:var(--text-color);width:calc(100% - var(--padding-large));padding:var(--padding-small);border:1px solid var(--border)}.bookmark-outline-single-container .bookmark-outline-input:focus{border-color:var(--outline-color)}.bookmark-outline-single-container .bookmark-outline-input::-moz-placeholder{color:var(--placeholder-text)}.bookmark-outline-single-container .bookmark-outline-input::placeholder{color:var(--placeholder-text)}.bookmark-outline-single-container .bookmark-outline-more-button{display:none;flex-grow:0;flex-shrink:0;width:16px;height:16px;margin:2px 2px 2px var(--padding-tiny)}.bookmark-outline-single-container .bookmark-outline-more-button .Icon{width:14px;height:14px}.bookmark-outline-single-container .bookmark-outline-more-button.icon-only:hover:not(:disabled):not(.disabled){box-shadow:none;outline:solid 1px var(--hover-border)}.bookmark-outline-single-container .bookmark-outline-more-button[focus-within].icon-only{border:none;box-shadow:none}.bookmark-outline-single-container .bookmark-outline-more-button:focus-within.icon-only{border:none;box-shadow:none}.bookmark-outline-single-container .bookmark-outline-more-button[focus-within] .Icon{color:var(--focus-border)}.bookmark-outline-single-container .bookmark-outline-more-button:focus-within .Icon{color:var(--focus-border)}.bookmark-outline-single-container .bookmark-outline-editing-controls{padding:2px;flex-basis:100%;display:flex;flex-flow:row wrap;justify-content:flex-end;align-items:center;margin-top:var(--padding-medium)}.bookmark-outline-single-container .bookmark-outline-cancel-button,.bookmark-outline-single-container .bookmark-outline-save-button{width:auto;padding:6px var(--padding)}.bookmark-outline-single-container .bookmark-outline-cancel-button{color:var(--secondary-button-text)}.bookmark-outline-single-container .bookmark-outline-cancel-button:hover{color:var(--secondary-button-hover)}.bookmark-outline-single-container .bookmark-outline-save-button{color:var(--primary-button-text);background-color:var(--primary-button);margin-left:var(--padding-tiny);border-radius:4px}.bookmark-outline-single-container .bookmark-outline-save-button:hover{background-color:var(--primary-button-hover)}.bookmark-outline-single-container .bookmark-outline-save-button.disabled,.bookmark-outline-single-container .bookmark-outline-save-button:disabled{background-color:var(--primary-button)!important;opacity:.5}.bookmark-outline-single-container .bookmark-outline-save-button.disabled span,.bookmark-outline-single-container .bookmark-outline-save-button:disabled span{color:var(--primary-button-text)}.bookmark-outline-footer{border-top:1.5px solid var(--gray-4);padding-top:var(--padding-medium);padding-bottom:var(--padding-medium);display:flex;justify-content:center;align-items:center}.bookmark-outline-footer .add-new-button .Icon{width:14px;height:14px;margin-right:var(--padding-tiny);color:inherit;fill:currentColor}.bookmark-outline-footer .add-new-button.disabled .Icon.disabled,.bookmark-outline-footer .add-new-button.disabled .Icon.disabled path,.bookmark-outline-footer .add-new-button[disabled] .Icon.disabled,.bookmark-outline-footer .add-new-button[disabled] .Icon.disabled path{color:inherit;fill:currentColor}.bookmark-outline-footer .multi-selection-button{width:auto;padding:7px}.bookmark-outline-footer .multi-selection-button .Icon{width:18px;height:18px}.bookmark-outline-footer .multi-selection-button:not(:first-child){margin-left:var(--padding-tiny)}.bookmark-outline-footer .multi-selection-button:hover{background-color:transparent}.bookmark-outline-footer .multi-selection-button.disabled:hover,.bookmark-outline-footer .multi-selection-button:disabled:hover{box-shadow:none}",""])}}]);
//# sourceMappingURL=8.chunk.js.map