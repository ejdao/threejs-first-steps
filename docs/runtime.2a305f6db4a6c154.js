(()=>{"use strict";var e,v={},m={};function r(e){var o=m[e];if(void 0!==o)return o.exports;var t=m[e]={exports:{}};return v[e](t,t.exports,r),t.exports}r.m=v,e=[],r.O=(o,t,i,f)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,i,f]=e[n],d=!0,u=0;u<t.length;u++)(!1&f||a>=f)&&Object.keys(r.O).every(b=>r.O[b](t[u]))?t.splice(u--,1):(d=!1,f<a&&(a=f));if(d){e.splice(n--,1);var l=i();void 0!==l&&(o=l)}}return o}f=f||0;for(var n=e.length;n>0&&e[n-1][2]>f;n--)e[n]=e[n-1];e[n]=[t,i,f]},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((o,t)=>(r.f[t](e,o),o),[])),r.u=e=>e+".b9a0427c9d0a10f0.js",r.miniCssF=e=>{},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={},o="threejs-first-steps:";r.l=(t,i,f,n)=>{if(e[t])e[t].push(i);else{var a,d;if(void 0!==f)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var s=u[l];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==o+f){a=s;break}}a||(d=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+f),a.src=r.tu(t)),e[t]=[i];var c=(h,b)=>{a.onerror=a.onload=null,clearTimeout(p);var g=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),g&&g.forEach(_=>_(b)),h)return h(b)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),d&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:o=>o},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(i,f)=>{var n=r.o(e,i)?e[i]:void 0;if(0!==n)if(n)f.push(n[2]);else if(666!=i){var a=new Promise((s,c)=>n=e[i]=[s,c]);f.push(n[2]=a);var d=r.p+r.u(i),u=new Error;r.l(d,s=>{if(r.o(e,i)&&(0!==(n=e[i])&&(e[i]=void 0),n)){var c=s&&("load"===s.type?"missing":s.type),p=s&&s.target&&s.target.src;u.message="Loading chunk "+i+" failed.\n("+c+": "+p+")",u.name="ChunkLoadError",u.type=c,u.request=p,n[1](u)}},"chunk-"+i,i)}else e[i]=0},r.O.j=i=>0===e[i];var o=(i,f)=>{var u,l,[n,a,d]=f,s=0;if(n.some(p=>0!==e[p])){for(u in a)r.o(a,u)&&(r.m[u]=a[u]);if(d)var c=d(r)}for(i&&i(f);s<n.length;s++)r.o(e,l=n[s])&&e[l]&&e[l][0](),e[l]=0;return r.O(c)},t=self.webpackChunkthreejs_first_steps=self.webpackChunkthreejs_first_steps||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})()})();