import{r as o,bb as a,f as t,a1 as r}from"./index.871a73d0.js";import{r as s}from"./animation.36cf3c57.js";function n({el:n,to:c,duration:l=500,callback:i}){const e=o(!1),u=(o=>o.scrollTop)(n),f=c-u;let p=0;l=a(l)?500:l;const m=function(){if(!t(e))return;p+=20;const o=(a=p,c=u,b=f,(a/=l/2)<1?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c);var a,c,b;((o,a)=>{o.scrollTop=a})(n,o),p<l&&t(e)?s(m):i&&r(i)&&i()};return{start:()=>{e.value=!0,m()},stop:()=>{e.value=!1}}}export{n as u};