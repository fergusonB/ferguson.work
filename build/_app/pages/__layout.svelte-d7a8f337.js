import{S as t,i as s,s as n,e,t as a,c as l,a as r,g as o,d as c,b as i,f,D as h,h as u,E as $,j as g,m,o as p,v as d,r as v,w as b,B as k,u as w,F as x,G as j,k as E,n as y,H as A}from"../chunks/vendor-bd31e268.js";function B(t){let s,n,g,m=t[0].name[0]+"";return{c(){s=e("a"),n=a(m),this.h()},l(t){s=l(t,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var e=r(s);n=o(e,m),e.forEach(c),this.h()},h(){i(s,"sveltekit:prefetch",""),i(s,"class","transition bg-opacity-90 bg-white rounded-md h-10 w-10 hover:scale-125 shadow-md hover:shadow-xl"),i(s,"href",g=t[0].link)},m(t,e){f(t,s,e),h(s,n)},p(t,[e]){1&e&&m!==(m=t[0].name[0]+"")&&u(n,m),1&e&&g!==(g=t[0].link)&&i(s,"href",g)},i:$,o:$,d(t){t&&c(s)}}}function D(t,s,n){let{button:e}=s;return t.$$set=t=>{"button"in t&&n(0,e=t.button)},[e]}class V extends t{constructor(t){super(),s(this,t,D,B,n,{button:0})}}function z(t,s,n){const e=t.slice();return e[1]=s[n],e}function I(t){let s,n;return s=new V({props:{button:t[1]}}),{c(){g(s.$$.fragment)},l(t){m(s.$$.fragment,t)},m(t,e){p(s,t,e),n=!0},p:$,i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){v(s.$$.fragment,t),n=!1},d(t){b(s,t)}}}function _(t){let s,n,a=t[0],o=[];for(let e=0;e<a.length;e+=1)o[e]=I(z(t,a,e));const h=t=>v(o[t],1,1,(()=>{o[t]=null}));return{c(){s=e("nav");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){s=l(t,"NAV",{class:!0});var n=r(s);for(let s=0;s<o.length;s+=1)o[s].l(n);n.forEach(c),this.h()},h(){i(s,"class","flex justify-around bg-gray-200 p-2")},m(t,e){f(t,s,e);for(let n=0;n<o.length;n+=1)o[n].m(s,null);n=!0},p(t,[n]){if(1&n){let e;for(a=t[0],e=0;e<a.length;e+=1){const l=z(t,a,e);o[e]?(o[e].p(l,n),d(o[e],1)):(o[e]=I(l),o[e].c(),d(o[e],1),o[e].m(s,null))}for(k(),e=a.length;e<o.length;e+=1)h(e);w()}},i(t){if(!n){for(let t=0;t<a.length;t+=1)d(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)v(o[s]);n=!1},d(t){t&&c(s),x(o,t)}}}function C(t){return[[{name:"Apps",link:"/app"},{name:"Blog",link:"/blog"},{name:"Contact",link:"/contact"}]]}class F extends t{constructor(t){super(),s(this,t,C,_,n,{})}}function G(t){let s,n,a,o,u;a=new F({});const $=t[1].default,k=j($,t,t[0],null);return{c(){s=e("div"),n=e("div"),g(a.$$.fragment),o=E(),k&&k.c(),this.h()},l(t){s=l(t,"DIV",{class:!0});var e=r(s);n=l(e,"DIV",{class:!0});var i=r(n);m(a.$$.fragment,i),o=y(i),k&&k.l(i),i.forEach(c),e.forEach(c),this.h()},h(){i(n,"class","z-10"),i(s,"class","landing__space z-0 fixed bg-gray-700 svelte-7fj7vj")},m(t,e){f(t,s,e),h(s,n),p(a,n,null),h(n,o),k&&k.m(n,null),u=!0},p(t,[s]){k&&k.p&&(!u||1&s)&&A(k,$,t,t[0],u?s:-1,null,null)},i(t){u||(d(a.$$.fragment,t),d(k,t),u=!0)},o(t){v(a.$$.fragment,t),v(k,t),u=!1},d(t){t&&c(s),b(a),k&&k.d(t)}}}function H(t,s,n){let{$$slots:e={},$$scope:a}=s;return t.$$set=t=>{"$$scope"in t&&n(0,a=t.$$scope)},[a,e]}export default class extends t{constructor(t){super(),s(this,t,H,G,n,{})}}