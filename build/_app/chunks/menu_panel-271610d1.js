import{S as t,i as s,s as e,j as r,m as a,o as n,v as o,r as c,w as l,e as i,t as f,k as h,c as d,a as m,g,d as p,n as u,b as $,f as v,D as w,h as x,l as b,F as E}from"./vendor-66e0e850.js";import{R as j}from"./rear-white-panel-e24a3396.js";function D(t,s,e){const r=t.slice();return r[1]=s[e],r}function I(t){let s,e,r,a,n,o,c,l,b,E,j,D,I,k,y=t[1].title+"",M=t[1].description+"";return{c(){s=i("a"),e=i("div"),r=i("div"),a=f(y),n=h(),o=i("img"),b=h(),E=i("span"),j=f(M),D=h(),this.h()},l(t){s=d(t,"A",{target:!0,class:!0,href:!0});var c=m(s);e=d(c,"DIV",{class:!0});var l=m(e);r=d(l,"DIV",{class:!0});var i=m(r);a=g(i,y),i.forEach(p),n=u(l),o=d(l,"IMG",{class:!0,src:!0,alt:!0}),b=u(l),E=d(l,"SPAN",{class:!0});var f=m(E);j=g(f,M),f.forEach(p),l.forEach(p),D=u(c),c.forEach(p),this.h()},h(){$(r,"class","font-bold"),$(o,"class"," m-auto max-h-24"),o.src!==(c=t[1].image)&&$(o,"src",c),$(o,"alt",l=t[1].title+" "+t[1].description),$(E,"class","overflow-hidden"),$(e,"class","m-3 bg-gradient-to-b from-white to-gray-300  rounded-md text-center drop-shadow-md "),$(s,"target",I=A(t[1])),$(s,"class","transform transition hover:scale-105  focus:scale-105"),$(s,"href",k=t[1].href)},m(t,c){v(t,s,c),w(s,e),w(e,r),w(r,a),w(e,n),w(e,o),w(e,b),w(e,E),w(E,j),w(s,D)},p(t,e){1&e&&y!==(y=t[1].title+"")&&x(a,y),1&e&&o.src!==(c=t[1].image)&&$(o,"src",c),1&e&&l!==(l=t[1].title+" "+t[1].description)&&$(o,"alt",l),1&e&&M!==(M=t[1].description+"")&&x(j,M),1&e&&I!==(I=A(t[1]))&&$(s,"target",I),1&e&&k!==(k=t[1].href)&&$(s,"href",k)},d(t){t&&p(s)}}}function k(t){let s,e=t[0],r=[];for(let a=0;a<e.length;a+=1)r[a]=I(D(t,e,a));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();s=b()},l(t){for(let s=0;s<r.length;s+=1)r[s].l(t);s=b()},m(t,e){for(let s=0;s<r.length;s+=1)r[s].m(t,e);v(t,s,e)},p(t,a){if(1&a){let n;for(e=t[0],n=0;n<e.length;n+=1){const o=D(t,e,n);r[n]?r[n].p(o,a):(r[n]=I(o),r[n].c(),r[n].m(s.parentNode,s))}for(;n<r.length;n+=1)r[n].d(1);r.length=e.length}},d(t){E(r,t),t&&p(s)}}}function y(t){let s,e;return s=new j({props:{grid:!0,$$slots:{default:[k]},$$scope:{ctx:t}}}),{c(){r(s.$$.fragment)},l(t){a(s.$$.fragment,t)},m(t,r){n(s,t,r),e=!0},p(t,[e]){const r={};17&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r)},i(t){e||(o(s.$$.fragment,t),e=!0)},o(t){c(s.$$.fragment,t),e=!1},d(t){l(s,t)}}}function A(t){return t.href&&t.href.includes("https://")?"_blank":"_self"}function M(t,s,e){let{items:r}=s;return t.$$set=t=>{"items"in t&&e(0,r=t.items)},[r]}class N extends t{constructor(t){super(),s(this,t,M,y,e,{items:0})}}export{N as M};