import{_ as $e}from"./preload-helper-6b8a655d.js";import{Y as Ee,S as z,i as P,s as G,F as De,l as w,a as K,m as y,n as k,c as V,h,p as m,b as D,J as v,M as O,g as C,t as E,d as B,f as b,G as Ke,H as Ve,I as je,U as Ie,Z as T,r as j,_ as U,u as I,K as Q,$ as Ce,E as X,a0 as Be,a1 as Le,O as me,X as Te,P as ve,N as ge,a2 as F,e as H,w as S,x as M,y as N,B as R,V as ke,v as Y,a3 as Ue,o as Ae,Q as He,a4 as Oe,a5 as Se}from"./index-b75fe2cf.js";import{s as q}from"./Index-67f3ebd3.js";import{E as Me}from"./EncodingSelector-613e6e3f.js";import"./index-09de7b82.js";import"./events-24eb7459.js";import"./index-0b458772.js";const ee=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],Ne=new Array(256);for(let s=0;s<256;s++)Ne[s]=`${ee[s>>>4&15]}${ee[s&15]}`;function Re(s){const t=s-1;return t*t*t+1}function W(s){return--s*s*s*s*s+1}function be(s,{delay:t=0,duration:l=400,easing:e=Ee}={}){const o=+getComputedStyle(s).opacity;return{delay:t,duration:l,easing:e,css:r=>`opacity: ${r*o}`}}function J(s,{delay:t=0,duration:l=400,easing:e=Re}={}){const o=getComputedStyle(s),r=+o.opacity,d=parseFloat(o.height),p=parseFloat(o.paddingTop),u=parseFloat(o.paddingBottom),i=parseFloat(o.marginTop),n=parseFloat(o.marginBottom),c=parseFloat(o.borderTopWidth),f=parseFloat(o.borderBottomWidth);return{delay:t,duration:l,easing:e,css:a=>`overflow: hidden;opacity: ${Math.min(a*20,1)*r};height: ${a*d}px;padding-top: ${a*p}px;padding-bottom: ${a*u}px;margin-top: ${a*i}px;margin-bottom: ${a*n}px;border-top-width: ${a*c}px;border-bottom-width: ${a*f}px;`}}const Fe=s=>({}),te=s=>({copy:s[2]});function We(s){let t,l,e,o,r,d,p,u;return{c(){t=w("div"),l=T("svg"),e=T("title"),o=j("Copy to clipboard"),r=T("path"),this.h()},l(i){t=y(i,"DIV",{});var n=k(t);l=U(n,"svg",{class:!0,viewBox:!0,version:!0,width:!0,height:!0,"aria-hidden":!0,stroke:!0});var c=k(l);e=U(c,"title",{});var f=k(e);o=I(f,"Copy to clipboard"),f.forEach(h),r=U(c,"path",{"fill-rule":!0,d:!0}),k(r).forEach(h),c.forEach(h),n.forEach(h),this.h()},h(){m(r,"fill-rule","evenodd"),m(r,"d","M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"),m(l,"class","octicon octicon-clippy svelte-lulnfx"),m(l,"viewBox","0 0 14 16"),m(l,"version","1.1"),m(l,"width","14"),m(l,"height","16"),m(l,"aria-hidden","true"),m(l,"stroke","currentColor")},m(i,n){D(i,t,n),v(t,l),v(l,e),v(e,o),v(l,r),p||(u=O(l,"click",s[2]),p=!0)},p(i,n){s=i},i(i){d||Q(()=>{d=Ce(t,be,{duration:0,delay:we}),d.start()})},o:X,d(i){i&&h(t),p=!1,u()}}}function Je(s){let t,l,e,o;return{c(){t=w("div"),l=j("\u2714\uFE0FCopied")},l(r){t=y(r,"DIV",{});var d=k(t);l=I(d,"\u2714\uFE0FCopied"),d.forEach(h)},m(r,d){D(r,t,d),v(t,l),o=!0},p(r,d){},i(r){o||(e&&e.end(1),o=!0)},o(r){e=Be(t,be,{duration:we}),o=!1},d(r){r&&h(t),r&&e&&e.end()}}}function ze(s){let t,l,e,o,r,d,p,u;const i=[Je,We],n=[];function c(_,g){return _[1]?0:1}l=c(s),e=n[l]=i[l](s);const f=s[5].default,a=De(f,s,s[4],te);return{c(){t=w("div"),e.c(),o=K(),r=w("div"),a&&a.c(),this.h()},l(_){t=y(_,"DIV",{class:!0});var g=k(t);e.l(g),o=V(g),r=y(g,"DIV",{class:!0});var $=k(r);a&&a.l($),$.forEach(h),g.forEach(h),this.h()},h(){m(r,"class","Clipboard svelte-lulnfx"),m(t,"class","Clipboard-Container svelte-lulnfx")},m(_,g){D(_,t,g),n[l].m(t,null),v(t,o),v(t,r),a&&a.m(r,null),s[6](r),d=!0,p||(u=O(t,"click",s[2]),p=!0)},p(_,[g]){let $=l;l=c(_),l===$?n[l].p(_,g):(C(),E(n[$],1,1,()=>{n[$]=null}),B(),e=n[l],e?e.p(_,g):(e=n[l]=i[l](_),e.c()),b(e,1),e.m(t,o)),a&&a.p&&(!d||g&16)&&Ke(a,f,_,_[4],d?je(f,_[4],g,Fe):Ve(_[4]),te)},i(_){d||(b(e),b(a,_),d=!0)},o(_){E(e),E(a,_),d=!1},d(_){_&&h(t),n[l].d(),a&&a.d(_),s[6](null),p=!1,u()}}}let we=2e3;function Pe(s,t,l){let{$$slots:e={},$$scope:o}=t,{value:r=null}=t,d,p;async function u(){var n=navigator.clipboard.writeText(d.innerHTML);await n,l(3,r=n),l(1,p=!0),setTimeout(()=>l(1,p=!1),1)}function i(n){Ie[n?"unshift":"push"](()=>{d=n,l(0,d)})}return s.$$set=n=>{"value"in n&&l(3,r=n.value),"$$scope"in n&&l(4,o=n.$$scope)},[d,p,u,r,o,e,i]}class ye extends z{constructor(t){super(),P(this,t,Pe,ze,G,{value:3})}}const Ge=(s,t)=>{const l=URL.createObjectURL(s),e=document.createElement("a");e.href=l,e.download=t,e.style.display="none",document.body.appendChild(e),e.click(),URL.revokeObjectURL(l),e.remove()};function le(s){let t,l,e,o,r,d,p,u,i,n,c,f,a,_=s[1]&&oe(s);return{c(){t=w("div"),l=w("div"),e=w("div"),o=T("svg"),r=T("path"),d=K(),p=w("div"),u=j("Download Arweave KeyFile"),i=K(),_&&_.c(),this.h()},l(g){t=y(g,"DIV",{class:!0});var $=k(t);l=y($,"DIV",{class:!0});var L=k(l);e=y(L,"DIV",{class:!0});var A=k(e);o=U(A,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var Z=k(o);r=U(Z,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),k(r).forEach(h),Z.forEach(h),A.forEach(h),d=V(L),p=y(L,"DIV",{class:!0});var x=k(p);u=I(x,"Download Arweave KeyFile"),x.forEach(h),L.forEach(h),i=V($),_&&_.l($),$.forEach(h),this.h()},h(){m(r,"stroke-linecap","round"),m(r,"stroke-linejoin","round"),m(r,"stroke-width","2"),m(r,"d","M19 13l-7 7-7-7m14-8l-7 7-7-7"),m(o,"xmlns","http://www.w3.org/2000/svg"),m(o,"class","h-6 w-6 m-2"),m(o,"fill","none"),m(o,"viewBox","0 0 24 24"),m(o,"stroke","currentColor"),m(e,"class","flex-1"),m(p,"class","flex-1"),m(l,"class","flex flex-row"),m(t,"class","card relative cursor-pointer text-toxic p-4 border border-toxic shadow-md shadow-toxic/50 rounded-lg w-auto bg-neutral-800")},m(g,$){D(g,t,$),v(t,l),v(l,e),v(e,o),v(o,r),v(l,d),v(l,p),v(p,u),v(t,i),_&&_.m(t,null),c=!0,f||(a=O(t,"click",ge(s[4])),f=!0)},p(g,$){s=g,s[1]?_?(_.p(s,$),$&2&&b(_,1)):(_=oe(s),_.c(),b(_,1),_.m(t,null)):_&&(C(),E(_,1,1,()=>{_=null}),B())},i(g){c||(b(_),Q(()=>{n||(n=F(t,J,{delay:100,duration:300,easing:W},!0)),n.run(1)}),c=!0)},o(g){E(_),n||(n=F(t,J,{delay:100,duration:300,easing:W},!1)),n.run(0),c=!1},d(g){g&&h(t),_&&_.d(),g&&n&&n.end(),f=!1,a()}}}function oe(s){let t,l,e,o,r,d,p,u;return{c(){t=w("div"),l=j(`\u26A0\uFE0F Warning: Do not give your key file to anyone, these are your secret keys!\r
\r
					\r
					`),e=w("button"),o=j("Understood, Start Download"),this.h()},l(i){t=y(i,"DIV",{class:!0});var n=k(t);l=I(n,`\u26A0\uFE0F Warning: Do not give your key file to anyone, these are your secret keys!\r
\r
					\r
					`),e=y(n,"BUTTON",{class:!0});var c=k(e);o=I(c,"Understood, Start Download"),c.forEach(h),n.forEach(h),this.h()},h(){m(e,"class","my-4 border border-toxic rounded-lg bg-green-500 text-white"),m(t,"class","text-yellow-400 w-full cursor-default")},m(i,n){D(i,t,n),v(t,l),v(t,e),v(e,o),d=!0,p||(u=O(e,"click",ge(s[3])),p=!0)},p(i,n){s=i},i(i){d||(Q(()=>{r||(r=F(t,J,{delay:50,duration:200,easing:W},!0)),r.run(1)}),d=!0)},o(i){r||(r=F(t,J,{delay:50,duration:200,easing:W},!1)),r.run(0),d=!1},d(i){i&&h(t),i&&r&&r.end(),p=!1,u()}}}function Xe(s){let t,l,e,o,r,d,p,u,i,n,c=s[0]&&le(s);return{c(){t=w("div"),l=w("button"),e=w("div"),o=T("svg"),r=T("path"),d=K(),c&&c.c(),this.h()},l(f){t=y(f,"DIV",{class:!0});var a=k(t);l=y(a,"BUTTON",{class:!0});var _=k(l);e=y(_,"DIV",{class:!0});var g=k(e);o=U(g,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var $=k(o);r=U($,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),k(r).forEach(h),$.forEach(h),g.forEach(h),_.forEach(h),d=V(a),c&&c.l(a),a.forEach(h),this.h()},h(){m(r,"stroke-linecap","round"),m(r,"stroke-linejoin","round"),m(r,"stroke-width","2"),m(r,"d","M4 6h16M4 12h16M4 18h16"),m(o,"xmlns","http://www.w3.org/2000/svg"),m(o,"class","h-6 w-6"),m(o,"fill","none"),m(o,"viewBox","0 0 24 24"),m(o,"stroke","currentColor"),m(e,"class","p-6 flex flex-row-reverse"),m(l,"class","m-auto w-full"),m(t,"class","absolute m-2 w-48 right-0 text-toxic")},m(f,a){D(f,t,a),v(t,l),v(l,e),v(e,o),v(o,r),v(t,d),c&&c.m(t,null),u=!0,i||(n=[O(l,"click",s[2]),Le(p=qe.call(null,t,{enabled:s[0],cb:s[5]}))],i=!0)},p(f,[a]){f[0]?c?(c.p(f,a),a&1&&b(c,1)):(c=le(f),c.c(),b(c,1),c.m(t,null)):c&&(C(),E(c,1,1,()=>{c=null}),B()),p&&me(p.update)&&a&1&&p.update.call(null,{enabled:f[0],cb:f[5]})},i(f){u||(b(c),u=!0)},o(f){E(c),u=!1},d(f){f&&h(t),c&&c.d(),i=!1,Te(n)}}}function qe(s,{enabled:t,cb:l}){const e=({target:r})=>{s.contains(r)||l()};function o({enabled:r}){r?window.addEventListener("click",e):window.removeEventListener("click",e)}return o({enabled:t}),{update:o,destroy(){window.removeEventListener("click",e)}}}function Qe(s,t,l){let e;ve(s,q,n=>l(6,e=n));let o=!1,r=!1;function d(){l(1,r=!1),l(0,o=!o)}function p(){var a;if(l(1,r=!1),!(e!=null&&e.rsajwk)){console.log("No RSA key found");return}const n=JSON.stringify(e.rsajwk),c=new TextEncoder().encode(n),f=new Blob([c],{type:"application/json;charset=utf-8"});Ge(f,`arweave-keyfile-${((a=e==null?void 0:e.rsajwk)==null?void 0:a.kid)||"noname"}.json`),console.log("export keyfile")}return[o,r,d,p,n=>l(1,r=!0),()=>l(0,o=!1)]}class Ye extends z{constructor(t){super(),P(this,t,Qe,Xe,G,{})}}function re(s,t,l){const e=s.slice();return e[3]=t[l],e}function se(s,t,l){const e=s.slice();return e[7]=t[l],e}function ne(s){let t,l,e,o=s[0].filter(de).length,r,d=s[0].filter(fe),p;t=new Ye({});let u=o&&ie(s),i=d&&ce(s);return{c(){S(t.$$.fragment),l=K(),e=w("div"),u&&u.c(),r=K(),i&&i.c(),this.h()},l(n){M(t.$$.fragment,n),l=V(n),e=y(n,"DIV",{class:!0});var c=k(e);u&&u.l(c),r=V(c),i&&i.l(c),c.forEach(h),this.h()},h(){m(e,"class","card text-toxic shadow-md shadow-toxic/50 rounded-lg p-4 m-4 w-auto bg-neutral-800")},m(n,c){N(t,n,c),D(n,l,c),D(n,e,c),u&&u.m(e,null),v(e,r),i&&i.m(e,null),p=!0},p(n,c){c&1&&(o=n[0].filter(de).length),o?u?(u.p(n,c),c&1&&b(u,1)):(u=ie(n),u.c(),b(u,1),u.m(e,r)):u&&(C(),E(u,1,1,()=>{u=null}),B()),c&1&&(d=n[0].filter(fe)),d?i?(i.p(n,c),c&1&&b(i,1)):(i=ce(n),i.c(),b(i,1),i.m(e,null)):i&&(C(),E(i,1,1,()=>{i=null}),B())},i(n){p||(b(t.$$.fragment,n),b(u),b(i),p=!0)},o(n){E(t.$$.fragment,n),E(u),E(i),p=!1},d(n){R(t,n),n&&h(l),n&&h(e),u&&u.d(),i&&i.d()}}}function ie(s){let t,l,e,o,r,d,p,u=s[0].filter(_e),i=[];for(let c=0;c<u.length;c+=1)i[c]=ae(se(s,u,c));const n=c=>E(i[c],1,1,()=>{i[c]=null});return{c(){t=w("div"),l=w("div"),e=w("span"),o=j("Arweave"),r=K(),d=w("div");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){t=y(c,"DIV",{class:!0});var f=k(t);l=y(f,"DIV",{class:!0});var a=k(l);e=y(a,"SPAN",{});var _=k(e);o=I(_,"Arweave"),_.forEach(h),a.forEach(h),r=V(f),d=y(f,"DIV",{class:!0});var g=k(d);for(let $=0;$<i.length;$+=1)i[$].l(g);g.forEach(h),f.forEach(h),this.h()},h(){m(l,"class","row left svelte-mj0gtk"),m(d,"class","row list-group svelte-mj0gtk"),m(t,"class","keylist overflow-hidden svelte-mj0gtk")},m(c,f){D(c,t,f),v(t,l),v(l,e),v(e,o),v(t,r),v(t,d);for(let a=0;a<i.length;a+=1)i[a].m(d,null);p=!0},p(c,f){if(f&7){u=c[0].filter(_e);let a;for(a=0;a<u.length;a+=1){const _=se(c,u,a);i[a]?(i[a].p(_,f),b(i[a],1)):(i[a]=ae(_),i[a].c(),b(i[a],1),i[a].m(d,null))}for(C(),a=u.length;a<i.length;a+=1)n(a);B()}},i(c){if(!p){for(let f=0;f<u.length;f+=1)b(i[f]);p=!0}},o(c){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)E(i[f]);p=!1},d(c){c&&h(t),ke(i,c)}}}function Ze(s){let t=s[7].publicKeyJWK.kid+"",l;return{c(){l=j(t)},l(e){l=I(e,t)},m(e,o){D(e,l,o)},p(e,o){o&1&&t!==(t=e[7].publicKeyJWK.kid+"")&&Y(l,t)},d(e){e&&h(l)}}}function ae(s){let t,l,e=s[7].name+"",o,r,d,p,u,i,n,c;return i=new ye({props:{$$slots:{default:[Ze]},$$scope:{ctx:s}}}),{c(){t=w("div"),l=w("div"),o=j(e),d=K(),p=w("div"),u=j("Base64URL: "),S(i.$$.fragment),n=K(),this.h()},l(f){t=y(f,"DIV",{class:!0});var a=k(t);l=y(a,"DIV",{class:!0});var _=k(l);o=I(_,e),_.forEach(h),d=V(a),p=y(a,"DIV",{class:!0});var g=k(p);u=I(g,"Base64URL: "),M(i.$$.fragment,g),g.forEach(h),n=V(a),a.forEach(h),this.h()},h(){m(l,"class",r=(s[2]&&s[1]!=s[7].kid?"hide":"")+" list-group-item list-group-item-action svelte-mj0gtk"),m(p,"class","flex-1"),m(t,"class","flex flex-col")},m(f,a){D(f,t,a),v(t,l),v(l,o),v(t,d),v(t,p),v(p,u),N(i,p,null),v(t,n),c=!0},p(f,a){(!c||a&1)&&e!==(e=f[7].name+"")&&Y(o,e),(!c||a&1&&r!==(r=(f[2]&&f[1]!=f[7].kid?"hide":"")+" list-group-item list-group-item-action svelte-mj0gtk"))&&m(l,"class",r);const _={};a&1025&&(_.$$scope={dirty:a,ctx:f}),i.$set(_)},i(f){c||(b(i.$$.fragment,f),c=!0)},o(f){E(i.$$.fragment,f),c=!1},d(f){f&&h(t),R(i)}}}function ce(s){let t,l,e,o,r,d,p,u,i=s[0].filter(pe),n=[];for(let f=0;f<i.length;f+=1)n[f]=ue(re(s,i,f));const c=f=>E(n[f],1,1,()=>{n[f]=null});return{c(){t=w("div"),l=w("div"),e=w("span"),o=j("Ed25519"),r=K(),d=w("div"),p=w("ul");for(let f=0;f<n.length;f+=1)n[f].c();this.h()},l(f){t=y(f,"DIV",{class:!0});var a=k(t);l=y(a,"DIV",{class:!0});var _=k(l);e=y(_,"SPAN",{});var g=k(e);o=I(g,"Ed25519"),g.forEach(h),_.forEach(h),r=V(a),d=y(a,"DIV",{class:!0});var $=k(d);p=y($,"UL",{class:!0});var L=k(p);for(let A=0;A<n.length;A+=1)n[A].l(L);L.forEach(h),$.forEach(h),a.forEach(h),this.h()},h(){m(l,"class","row left svelte-mj0gtk"),m(p,"class","svelte-mj0gtk"),m(d,"class","row list-group svelte-mj0gtk"),m(t,"class","keylist svelte-mj0gtk")},m(f,a){D(f,t,a),v(t,l),v(l,e),v(e,o),v(t,r),v(t,d),v(d,p);for(let _=0;_<n.length;_+=1)n[_].m(p,null);u=!0},p(f,a){if(a&65){i=f[0].filter(pe);let _;for(_=0;_<i.length;_+=1){const g=re(f,i,_);n[_]?(n[_].p(g,a),b(n[_],1)):(n[_]=ue(g),n[_].c(),b(n[_],1),n[_].m(p,null))}for(C(),_=i.length;_<n.length;_+=1)c(_);B()}},i(f){if(!u){for(let a=0;a<i.length;a+=1)b(n[a]);u=!0}},o(f){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)E(n[a]);u=!1},d(f){f&&h(t),ke(n,f)}}}function xe(s){let t=s[6]+"",l;return{c(){l=j(t)},l(e){l=I(e,t)},m(e,o){D(e,l,o)},p(e,o){o&64&&t!==(t=e[6]+"")&&Y(l,t)},d(e){e&&h(l)}}}function et(s){let t,l,e;return t=new ye({props:{$$slots:{default:[xe]},$$scope:{ctx:s}}}),{c(){S(t.$$.fragment),l=K()},l(o){M(t.$$.fragment,o),l=V(o)},m(o,r){N(t,o,r),D(o,l,r),e=!0},p(o,r){const d={};r&1088&&(d.$$scope={dirty:r,ctx:o}),t.$set(d)},i(o){e||(b(t.$$.fragment,o),e=!0)},o(o){E(t.$$.fragment,o),e=!1},d(o){R(t,o),o&&h(l)}}}function ue(s){let t,l;return t=new Me({props:{pubkey:new Uint8Array(s[3].publicKey),$$slots:{default:[et,({encoded:e})=>({6:e}),({encoded:e})=>e?64:0]},$$scope:{ctx:s}}}),{c(){S(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,o){N(t,e,o),l=!0},p(e,o){const r={};o&1&&(r.pubkey=new Uint8Array(e[3].publicKey)),o&1088&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){l||(b(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){R(t,e)}}}function tt(s){let t,l,e=s[0]&&s[0].length>0&&ne(s);return{c(){e&&e.c(),t=H()},l(o){e&&e.l(o),t=H()},m(o,r){e&&e.m(o,r),D(o,t,r),l=!0},p(o,[r]){o[0]&&o[0].length>0?e?(e.p(o,r),r&1&&b(e,1)):(e=ne(o),e.c(),b(e,1),e.m(t.parentNode,t)):e&&(C(),E(e,1,1,()=>{e=null}),B())},i(o){l||(b(e),l=!0)},o(o){E(e),l=!1},d(o){e&&e.d(o),o&&h(t)}}}const fe=s=>s.publicKeyJWK.crv=="Ed25519",de=s=>s.publicKeyJWK.kty=="RSA",_e=s=>s.publicKeyJWK.kty=="RSA",pe=s=>s.publicKeyJWK.crv=="Ed25519";function lt(s,t,l){let{keys:e}=t,o,r;return s.$$set=d=>{"keys"in d&&l(0,e=d.keys)},[e,o,r]}class ot extends z{constructor(t){super(),P(this,t,lt,tt,G,{keys:0})}}function he(s){let t,l,e,o;const r=[st,rt],d=[];function p(u,i){var n,c;return u[0]!=null&&u[0]==null||!((n=u[0])!=null&&n.mnemonic)||!((c=u[0])!=null&&c.rsajwk)?0:1}return t=p(s),l=d[t]=r[t](s),{c(){l.c(),e=H()},l(u){l.l(u),e=H()},m(u,i){d[t].m(u,i),D(u,e,i),o=!0},p(u,i){let n=t;t=p(u),t===n?d[t].p(u,i):(C(),E(d[n],1,1,()=>{d[n]=null}),B(),l=d[t],l?l.p(u,i):(l=d[t]=r[t](u),l.c()),b(l,1),l.m(e.parentNode,e))},i(u){o||(b(l),o=!0)},o(u){E(l),o=!1},d(u){d[t].d(u),u&&h(e)}}}function rt(s){let t,l;return t=new ot({props:{keys:s[3]}}),{c(){S(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,o){N(t,e,o),l=!0},p(e,o){const r={};o&8&&(r.keys=e[3]),t.$set(r)},i(e){l||(b(t.$$.fragment,e),l=!0)},o(e){E(t.$$.fragment,e),l=!1},d(e){R(t,e)}}}function st(s){let t,l,e,o,r,d,p;return{c(){t=w("div"),l=w("button"),e=j("Create New Keypairs"),o=K(),r=new Oe(!1),this.h()},l(u){t=y(u,"DIV",{class:!0});var i=k(t);l=y(i,"BUTTON",{class:!0});var n=k(l);e=I(n,"Create New Keypairs"),n.forEach(h),o=V(i),r=Se(i,!1),i.forEach(h),this.h()},h(){m(l,"class","bg-green-500 rounded shadow-lg shadow-slate-600/50 p-4 w-fit m-4 text-white"),r.a=null,m(t,"class","submit flex flex-col text-black bg-yellow-300 shadow p-8 m-4 rounded w-fit svelte-1klozpc")},m(u,i){D(u,t,i),v(t,l),v(l,e),v(t,o),r.m(s[2],t),d||(p=O(l,"click",function(){me(s[1])&&s[1].apply(this,arguments)}),d=!0)},p(u,i){s=u,i&4&&r.p(s[2])},i:X,o:X,d(u){u&&h(t),d=!1,p()}}}function nt(s){let t,l,e=s[1]&&he(s);return{c(){e&&e.c(),t=H()},l(o){e&&e.l(o),t=H()},m(o,r){e&&e.m(o,r),D(o,t,r),l=!0},p(o,[r]){o[1]?e?(e.p(o,r),r&2&&b(e,1)):(e=he(o),e.c(),b(e,1),e.m(t.parentNode,t)):e&&(C(),E(e,1,1,()=>{e=null}),B())},i(o){l||(b(e),l=!0)},o(o){E(e),l=!1},d(o){e&&e.d(o),o&&h(t)}}}function it(s,t,l){let e;ve(s,q,a=>l(0,e=a));const o=Ue();let r=null,d="",p,u,i,n,c;Ae(async()=>{l(4,{generateMnemonic:u,generateRsaJwk:i,loadSecrets:n,getLoadedKeys:c}=await $e(()=>import("./index-39b011a7.js"),["_app/immutable/chunks/index-39b011a7.js","_app/immutable/chunks/Index-67f3ebd3.js","_app/immutable/assets/Index-dd4df61b.css","_app/immutable/chunks/index-09de7b82.js","_app/immutable/chunks/events-24eb7459.js","_app/immutable/chunks/preload-helper-6b8a655d.js","_app/immutable/chunks/index-b75fe2cf.js","_app/immutable/chunks/index-0b458772.js"]),n,l(5,c)),l(1,r=async()=>{l(2,d="Creating keypairs...");const a=await u(),_=await i();He(q,e={...e,mnemonic:a,rsajwk:_},e),l(2,d+="<br/>Created mnemonic."),l(2,d+=`<br/>${a}`),l(2,d+="<br/>Creating master keypair (type ed25519)...")})});async function f(){await n({mnemonic:e.mnemonic,rsajwk:e.rsajwk}),o("loadedKeys","details"),l(3,p=c())}return s.$$.update=()=>{s.$$.dirty&49&&!!n&&!!c&&e&&e.mnemonic&&f()},[e,r,d,p,n,c]}class ht extends z{constructor(t){super(),P(this,t,it,nt,G,{})}}export{ht as default};
//# sourceMappingURL=GetKeys-8abaf7df.js.map