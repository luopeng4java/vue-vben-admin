var o=Object.assign;import{du as a,e,d as n,bw as t,r as i,a as s,aF as l,h as p,bD as r,H as d,o as u,i as c,w as m,j as g,m as f}from"./index.50e8b5dc.js";import{A as b}from"./index.1cccff52.js";import{_ as y}from"./index.705ab234.js";import"./index.99adaa1b.js";import"./index.c5668e8a.js";import"./RightOutlined.bad02d13.js";import"./types.b7a21d2a.js";import"./isEqual.9055b911.js";import"./toInteger.d50f777e.js";import"./DownOutlined.511c1f73.js";import"./index.bed999aa.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";function j(o){let n,t=document.body;if(Reflect.has(o,"target")||Reflect.has(o,"props")){const a=o;n=a.props||{},t=a.target||document.body}else n=o;const i=a(n);return[()=>{const o=e(t);o&&i.open(o)},()=>{i.close()}]}var L=n({components:{Loading:t,PageWrapper:y,[b.name]:b},setup(){const a=i(null),e=i(!1),n=s({absolute:!1,loading:!1,tip:"加载中..."}),[t,p]=j({tip:"加载中..."}),[r,d]=j({target:a,props:{tip:"加载中...",absolute:!0}});function u(o){n.absolute=o,n.loading=!0,setTimeout((()=>{n.loading=!1}),2e3)}return o({openCompFullLoading:function(){u(!1)},openFnFullLoading:function(){t(),setTimeout((()=>{p()}),2e3)},openFnWrapLoading:function(){r(),setTimeout((()=>{d()}),2e3)},openCompAbsolute:function(){u(!0)},wrapEl:a,loadingRef:e,openDirectiveLoading:function(){e.value=!0,setTimeout((()=>{e.value=!1}),2e3)}},l(n))}});const C=f("全屏 Loading"),k=f("容器内 Loading"),x=f("全屏 Loading"),F=f("容器内 Loading"),_=f(" 打开指令Loading ");L.render=function(o,a,e,n,t,i){const s=p("a-alert"),l=p("a-button"),f=p("Loading"),b=p("PageWrapper"),y=r("loading");return d((u(),c(b,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:m((()=>[g(s,{message:"组件方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openCompFullLoading},{default:m((()=>[C])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:o.openCompAbsolute},{default:m((()=>[k])),_:1},8,["onClick"]),g(f,{loading:o.loading,absolute:o.absolute,tip:o.tip},null,8,["loading","absolute","tip"]),g(s,{message:"函数方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openFnFullLoading},{default:m((()=>[x])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:o.openFnWrapLoading},{default:m((()=>[F])),_:1},8,["onClick"]),g(s,{message:"指令方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openDirectiveLoading},{default:m((()=>[_])),_:1},8,["onClick"])])),_:1},512)),[[y,o.loadingRef]])};export default L;