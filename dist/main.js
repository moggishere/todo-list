(()=>{"use strict";var r,n,e,t,o,a,i,c,l,s,d,u,p,f,m={426:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600;1,700&family=Roboto+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),i.push([r.id,":root {\r\n    --ff-head: 'Playfair Display', 'Times New Roman';\r\n    --ff-main: 'Roboto Serif', 'Times New Roman', 'Noto Serif';\r\n    --color-back: hsl(60, 11%, 85%);\r\n    --color-main: hsl(0, 0%, 20%);\r\n    --color-secondary: hsl(0, 0%, 95%);\r\n    --color-accent-underline: hsl(9, 40%, 63%);\r\n    --color-accent: hsl(10, 33%, 79%);\r\n    --font-color: hsl(0, 0%, 90%);\r\n    --font-support-color: hsl(0, 0%, 15%);\r\n}\r\n\r\nbody {\r\n    background-color: var(--color-back);\r\n}\r\n\r\n.title {\r\n    font-family: var(--ff-head);\r\n    font-weight: 300;\r\n    font-style: italic;\r\n    margin-left: 0.25em;\r\n    margin-top: 0.25em;\r\n    color: var(--color-main);\r\n    text-decoration-line: underline;\r\n    text-decoration-color: var(--color-accent-underline);\r\n    overflow-x: hidden;\r\n}\r\n\r\n.title::after {\r\n    content: '';\r\n    display: block;\r\n    background: var(--color-accent-underline);\r\n    height: 0.1em;\r\n    width: 2em;\r\n}\r\n\r\n#container {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.main-body {\r\n    border: 3px;\r\n    border-style: solid;\r\n    border-radius: 1em;\r\n    border-color: var(--color-main);\r\n    background-color: var(--color-secondary);\r\n}\r\n\r\n#content {\r\n    position: absolute;\r\n    top: 10%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 1em;\r\n    max-width: 85%;\r\n    max-height: 80%;\r\n}\r\n\r\n#left-content {\r\n    min-width: 25%;\r\n\r\n}\r\n\r\n#right-content {\r\n    min-width: 25%;\r\n}\r\n\r\n#entry-right {\r\n    overflow-y: scroll;\r\n    max-height: 80%;\r\n\r\n}\r\n\r\n#entry-left {\r\n    overflow-y: scroll;\r\n    max-height: 80%;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 0.5em;\r\n    background-color: var(--color-accent);\r\n}\r\n\r\n#example {\r\n    background-color: var(--color-accent);\r\n}\r\n\r\n.btn-example {\r\n    opacity: 0%;\r\n}\r\n\r\n.btn-example:hover {\r\n    opacity: 100%;\r\n}",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<r.length;s++){var d=[].concat(r[s]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var l=r[c],s=t.base?l[0]+t.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=e(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var l=t(r,o),s=0;s<a.length;s++){var d=e(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=l}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},h={};function v(r){var n=h[r];if(void 0!==n)return n.exports;var e=h[r]={id:r,exports:{}};return m[r](e,e.exports,v),e.exports}v.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return v.d(n,{a:n}),n},v.d=(r,n)=>{for(var e in n)v.o(n,e)&&!v.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},v.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r=v(379),n=v.n(r),e=v(795),t=v.n(e),o=v(569),a=v.n(o),i=v(565),c=v.n(i),l=v(216),s=v.n(l),d=v(589),u=v.n(d),p=v(426),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=s(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,document.body.appendChild(void 0)})();