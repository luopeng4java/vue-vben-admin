import{d as a,Y as e,s as r,f as s,i as t,o as n,j as o,w as p,n as i,m,k as d}from"./index.871a73d0.js";import{_ as u}from"./index.472abbb9.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.8d91dadc.js";import"./index.9fbd6c39.js";import"./usePageContext.8b8441ee.js";var l=a({name:"TestTab",components:{PageWrapper:u},setup(){const{currentRoute:a}=e();return{params:r((()=>s(a).params))}}});const b=d("br",null,null,-1),c=i(" Keep Alive "),j=d("input",null,null,-1);l.render=function(a,e,r,s,d,u){const l=t("PageWrapper");return n(),o(l,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:p((()=>[i(" Current Param : "+m(a.params)+" ",1),b,c,j])),_:1})};export default l;