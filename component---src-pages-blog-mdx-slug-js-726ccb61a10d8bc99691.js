(self.webpackChunkmonroelpin_org=self.webpackChunkmonroelpin_org||[]).push([[853],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function u(t,r,c){return o()?(e.exports=u=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),u=r(379),c=r(8206);e.exports=function(e){return n(e)||o(e)||u(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},7618:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(7294),o=r(1955),u=r(9308),c=r(5616),a=r(710),l=function(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement(a.Z,null),n.createElement(c.Z,{maxWidth:"sm",sx:{paddingTop:4}},n.createElement("main",null,t)))},p=function(e){var t=e.data.mdx,r=t.body,c=t.frontmatter,a=c.title,p=c.date,s=c.author;return n.createElement(l,null,n.createElement(u.Z,{component:"h1",variant:"h1"},a),n.createElement(u.Z,{component:"p",variant:"subtitle1",sx:{marginBottom:4}},s," | ",p),n.createElement(o.MDXRenderer,null,r))}},1955:function(e,t,r){var n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(9100),o=r(319),u=r(9713),c=r(7316),a=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),i=r(4983).mdx,f=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=c(e,a),l=f(t),d=s.useMemo((function(){if(!r)return null;var e=p({React:s,mdx:i},l),t=Object.keys(e),u=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,t]);return s.createElement(d,p({},u))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-js-726ccb61a10d8bc99691.js.map