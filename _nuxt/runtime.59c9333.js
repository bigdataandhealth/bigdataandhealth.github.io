!function(e){function t(data){for(var t,r,l=data[0],f=data[1],d=data[2],i=0,h=[];i<l.length;i++)r=l[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(t in f)Object.prototype.hasOwnProperty.call(f,t)&&(e[t]=f[t]);for(v&&v(data);h.length;)h.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,i=0;i<c.length;i++){for(var t=c[i],n=!0,r=1;r<t.length;r++){var f=t[r];0!==o[f]&&(n=!1)}n&&(c.splice(i--,1),e=l(l.s=t[0]))}return e}var r={},o={9:0},c=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,l.nc&&script.setAttribute("nonce",l.nc),script.src=function(e){return l.p+""+({2:"components/global/Author",3:"components/global/TopicsList",4:"components/global/infoBox",5:"content/plugin.js",6:"pages/_slug",7:"pages/about",8:"pages/index"}[e]||e)+"."+{2:"acba52d",3:"9358a19",4:"092eb74",5:"11dbf9a",6:"1b8a72f",7:"cda827f",8:"13605c2",10:"c59b033"}[e]+".js"}(e);var f=new Error;c=function(t){script.onerror=script.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},l.p="/_nuxt/",l.oe=function(e){throw console.error(e),e};var f=window.webpackJsonp=window.webpackJsonp||[],d=f.push.bind(f);f.push=t,f=f.slice();for(var i=0;i<f.length;i++)t(f[i]);var v=d;n()}([]);