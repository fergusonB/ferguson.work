import{S as t,i as s,s as e,j as a,m as r,o as c,v as o,r as n,w as l,e as i,t as f,k as h,c as m,a as d,g as p,d as g,n as $,b as u,f as v,D as w,h as x,l as b,F as E}from"./vendor-0f67a7a5.js";import{R as j}from"./rear-white-panel-6247b72c.js";function k(t,s,e){const a=t.slice();return a[1]=s[e],a}function D(t){let s,e,a,r,c,o,n,l,b,E,j,k,D,I=t[1].title+"",y=t[1].description+"";return{c(){s=i("a"),e=i("div"),a=i("div"),r=f(I),c=h(),o=i("img"),b=h(),E=i("span"),j=f(y),k=h(),this.h()},l(t){s=m(t,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var n=d(s);e=m(n,"DIV",{class:!0});var l=d(e);a=m(l,"DIV",{class:!0});var i=d(a);r=p(i,I),i.forEach(g),c=$(l),o=m(l,"IMG",{class:!0,src:!0,alt:!0}),b=$(l),E=m(l,"SPAN",{class:!0});var f=d(E);j=p(f,y),f.forEach(g),l.forEach(g),k=$(n),n.forEach(g),this.h()},h(){u(a,"class","font-bold"),u(o,"class"," m-auto max-h-24"),o.src!==(n=t[1].image)&&u(o,"src",n),u(o,"alt",l=t[1].title+" "+t[1].description),u(E,"class","overflow-hidden"),u(e,"class","m-3 bg-gradient-to-b from-white to-gray-300  rounded-md text-center drop-shadow-md "),u(s,"class","transform transition hover:scale-105  focus:scale-105"),u(s,"sveltekit:prefetch",""),u(s,"href",D=t[1].href)},m(t,n){v(t,s,n),w(s,e),w(e,a),w(a,r),w(e,c),w(e,o),w(e,b),w(e,E),w(E,j),w(s,k)},p(t,e){1&e&&I!==(I=t[1].title+"")&&x(r,I),1&e&&o.src!==(n=t[1].image)&&u(o,"src",n),1&e&&l!==(l=t[1].title+" "+t[1].description)&&u(o,"alt",l),1&e&&y!==(y=t[1].description+"")&&x(j,y),1&e&&D!==(D=t[1].href)&&u(s,"href",D)},d(t){t&&g(s)}}}function I(t){let s,e=t[0],a=[];for(let r=0;r<e.length;r+=1)a[r]=D(k(t,e,r));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();s=b()},l(t){for(let s=0;s<a.length;s+=1)a[s].l(t);s=b()},m(t,e){for(let s=0;s<a.length;s+=1)a[s].m(t,e);v(t,s,e)},p(t,r){if(1&r){let c;for(e=t[0],c=0;c<e.length;c+=1){const o=k(t,e,c);a[c]?a[c].p(o,r):(a[c]=D(o),a[c].c(),a[c].m(s.parentNode,s))}for(;c<a.length;c+=1)a[c].d(1);a.length=e.length}},d(t){E(a,t),t&&g(s)}}}function y(t){let s,e;return s=new j({props:{grid:!0,$$slots:{default:[I]},$$scope:{ctx:t}}}),{c(){a(s.$$.fragment)},l(t){r(s.$$.fragment,t)},m(t,a){c(s,t,a),e=!0},p(t,[e]){const a={};17&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){e||(o(s.$$.fragment,t),e=!0)},o(t){n(s.$$.fragment,t),e=!1},d(t){l(s,t)}}}function A(t,s,e){let{items:a}=s;return t.$$set=t=>{"items"in t&&e(0,a=t.items)},[a]}class M extends t{constructor(t){super(),s(this,t,A,y,e,{items:0})}}export{M};