webpackJsonp([101],{3:function(n,a,s){"use strict";s(7),s(6);var t=Math.floor(window.devicePixelRatio||1);t>=2&&document.querySelector("html").classList.add("pixel-ratio-"+t)},6:function(n,a){},7:function(n,a){},130:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function l(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var u=s(1),i=e(u),r=s(253),k=t(r),d=s(25),f=t(d);if("undefined"!=typeof window){var g=function(){return{matches:!1,addListener:function(){},removeListener:function(){}}};window.matchMedia=window.matchMedia||g}var h=function(n){function a(){return o(this,a),c(this,n.apply(this,arguments))}return l(a,n),a.prototype.render=function(){var n=(0,f["default"])({},this.props);"fade"===n.effect&&(n.fade=!0,n.draggable=!1);var a="am-carousel";return n.vertical&&(a+=" am-carousel-vertical"),"banner"===n.mode&&(a+=" am-carousel-banner"),"card"===n.mode&&(a+=" am-carousel-card center slider variable-width",n.centerMode=!0,n.infinite=!0,n.slidesToShow=1,n.slidesToScroll=1,n.variableWidth=!0),i.createElement("div",{className:a},i.createElement(k["default"],n))},a}(i.Component);a["default"]=h,h.defaultProps={dots:!0,arrows:!1},n.exports=a["default"]},131:function(n,a,s){"use strict";s(3),s(141)},141:function(n,a){},749:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(131),s(130)),p=t(e),o=s(1),c=t(o),l=s(4);t(l);n.exports={content:[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],meta:{order:1,title:"\u57fa\u672c",filename:"components/carousel/demo/basic.md",id:"components-carousel-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Carousel <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>a<span class="token punctuation" >,</span> b<span class="token punctuation" >,</span> c<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>a<span class="token punctuation" >,</span> b<span class="token punctuation" >,</span> c<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Carousel</span> <span class="token attr-name" >afterChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span>Pic1<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span>Pic2<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span>Pic3<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span>Pic4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span>Pic5<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Carousel</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,a,s){console.log(n,a,s)}return c["default"].createElement(p["default"],{afterChange:n},c["default"].createElement("div",null,c["default"].createElement("h3",null,"Pic1")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"Pic2")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"Pic3")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"Pic4")),c["default"].createElement("div",null,c["default"].createElement("h3",null,"Pic5")))},style:"\n.am-carousel .slick-slide {\n  text-align: center;\n  height: 120px;\n  line-height: 120px;\n  background: #71B5DE;\n  color: #fff;\n  overflow: hidden;\n}\n.am-carousel h3 {\n  height: 120px;\n}\n.am-carousel-card .slick-slide p, .am-carousel h3 {\n  background: #71B5DE;\n  color: #fff;\n  text-align: center;\n}\n.am-carousel-card .slick-slide p {\n  height: 152px;\n  margin: 0px 10px;\n  line-height: 152px;\n}\n"}}});