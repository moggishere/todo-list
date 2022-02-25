(()=>{"use strict";var r,n,o,e,t,a,i,c,l,s,d,u,f,p,m={426:(r,n,o)=>{o.d(n,{Z:()=>c});var e=o(81),t=o.n(e),a=o(645),i=o.n(a)()(t());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600;1,700&family=Roboto+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),i.push([r.id,":root {\r\n    --ff-head: 'Playfair Display', 'Times New Roman';\r\n    --ff-main: 'Roboto Serif', 'Times New Roman';\r\n    --ff-button: 'Roboto Mono', 'sans-serif';\r\n    --color-back: hsl(60, 11%, 85%);\r\n    --color-main: hsl(0, 0%, 20%);\r\n    --color-secondary: hsl(0, 0%, 95%);\r\n    --color-accent-underline: hsl(9, 40%, 63%);\r\n    --color-accent: hsl(10, 33%, 79%);\r\n    --font-color: hsl(0, 0%, 90%);\r\n    --font-support-color: hsl(0, 0%, 15%);\r\n}\r\n\r\nbody {\r\n    background-color: var(--color-back);\r\n}\r\n\r\n.title {\r\n    font-family: var(--ff-head);\r\n    font-weight: 300;\r\n    font-style: italic;\r\n    margin-left: 0.25em;\r\n    margin-top: 0.25em;\r\n    color: var(--color-main);\r\n    text-decoration-line: underline;\r\n    text-decoration-color: var(--color-accent-underline);\r\n    overflow-x: hidden;\r\n}\r\n\r\n.title::after {\r\n    content: '';\r\n    display: block;\r\n    background: var(--color-accent-underline);\r\n    height: 0.1em;\r\n    width: 2em;\r\n}\r\n\r\n#container {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.main-body {\r\n    border: 0.125em;\r\n    border-style: solid;\r\n    border-radius: 1em;\r\n    border-color: var(--color-main);\r\n    background-color: var(--color-secondary);\r\n    box-shadow: 0.325em 0.250em;\r\n}\r\n\r\n.content-buttons {\r\n    margin-right: 1em;\r\n    margin-bottom: 1em;\r\n    text-align: right;\r\n}\r\n\r\n.buttons-main {\r\n    background-color: var(--color-secondary);\r\n    color: var(--color-main);\r\n    font-family: var(--ff-button);\r\n    font-weight: 700;\r\n    font-style: bold;\r\n    border-radius: 1em;\r\n    border-color: var(--color-main);\r\n    box-shadow: 0.15em 0.1em;\r\n}\r\n\r\n.buttons-main:hover {\r\n    background-color: var(--color-main);\r\n    color: var(--color-accent);\r\n    transition: 0.3s;\r\n}\r\n\r\n.buttons-main:active {\r\n    box-shadow: 0 0;\r\n    background-color: var(--color-secondary);\r\n    transition: 0.1s;\r\n}\r\n\r\n#content {\r\n    position: absolute;\r\n    top: 10%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 1em;\r\n    max-width: 85%;\r\n    max-height: 80%;\r\n}\r\n\r\n#left-content {\r\n    min-width: 25%;\r\n\r\n}\r\n\r\n#right-content {\r\n    min-width: 25%;\r\n}\r\n\r\n#entry-right {\r\n    overflow-y: scroll;\r\n    max-height: 80%;\r\n\r\n}\r\n\r\n#entry-left {\r\n    overflow-y: scroll;\r\n    max-height: 80%;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 0.5em;\r\n    background-color: var(--color-accent);\r\n}\r\n\r\n#example {\r\n    background-color: var(--color-accent);\r\n}\r\n\r\n.btn-example {\r\n    opacity: 0%;\r\n}\r\n\r\n.btn-example:hover {\r\n    opacity: 100%;\r\n}",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var o="",e=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),e&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=r(n),e&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(r,o,e,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(e)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<r.length;s++){var d=[].concat(r[s]);e&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function o(r){for(var o=-1,e=0;e<n.length;e++)if(n[e].identifier===r){o=e;break}return o}function e(r,e){for(var a={},i=[],c=0;c<r.length;c++){var l=r[c],s=e.base?l[0]+e.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var f=o(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=t(p,e);e.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function t(r,n){var o=n.domAPI(n);return o.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;o.update(r=n)}else o.remove()}}r.exports=function(r,t){var a=e(r=r||[],t=t||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=o(a[i]);n[c].references--}for(var l=e(r,t),s=0;s<a.length;s++){var d=o(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=l}}},569:r=>{var n={};r.exports=function(r,o){var e=function(r){if(void 0===n[r]){var o=document.querySelector(r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(r){o=null}n[r]=o}return n[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,o)=>{r.exports=function(r){var n=o.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(o){!function(r,n,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var t=void 0!==o.layer;t&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,t&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(e,r,n.options)}(n,r,o)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},h={};function v(r){var n=h[r];if(void 0!==n)return n.exports;var o=h[r]={id:r,exports:{}};return m[r](o,o.exports,v),o.exports}v.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return v.d(n,{a:n}),n},v.d=(r,n)=>{for(var o in n)v.o(n,o)&&!v.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},v.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r=v(379),n=v.n(r),o=v(795),e=v.n(o),t=v(569),a=v.n(t),i=v(565),c=v.n(i),l=v(216),s=v.n(l),d=v(589),u=v.n(d),f=v(426),(p={}).styleTagTransform=u(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=e(),p.insertStyleElement=s(),n()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals,document.body.appendChild(void 0)})();