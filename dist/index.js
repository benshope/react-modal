!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=react},function(e,t){e.exports=react-dom},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(1),u=r.n(a);function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f={position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:10,transform:"translateZ(0)",backgroundColor:"rgba(0, 0, 0, 0.2)"},d={position:"fixed",padding:"2.5rem 1.5rem 1.5rem 1.5rem",backgroundColor:"white",boxShadow:"0 0 10px 3px rgba(0, 0, 0, 0.1)",overflowY:"auto",left:"50%",top:"50%",height:"auto",transform:"translate(-50%, -50%)",maxWidth:"30em",borderRadius:"0.25rem",maxHeight:"calc(100% - 1em)"};t.default=function(e,t,r){var n,a;return[o.a.createElement(function(){var c=l(o.a.useState(!1),2),s=c[0],p=c[1];n=function(){return p(!0),new Promise(function(e){a=e})};var b=o.a.useRef();return s?u.a.createPortal(o.a.createElement("div",{className:"modal-background",onClick:function(e){b.current&&!b.current.contains(e.target)&&p(!1)},style:i({},f,r&&r.backdrop||{})},o.a.createElement("div",{className:"modal-wrapper",ref:b,style:i({},d,r&&r.modal||{})},e(function(e){return t=e,p(!1),void a(t);var t}))),t||document.body):null}),function(){return n()}]}}]);