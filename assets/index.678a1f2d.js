import{d as a,r as e,cr as s,cs as t,h as i,o,i as r,j as n,bv as l,H as d,bc as p,bz as c,m}from"./index.50e8b5dc.js";import{a as u}from"./index.4d32c4f3.js";import{_ as v}from"./index.705ab234.js";import{F as S,S as b,a as j,b as f,c as x,d as T,e as R,f as X,g as h,h as Y,i as g,E as _,j as y}from"./index.e6824e1f.js";import"./SearchOutlined.f21918b7.js";import"./DownOutlined.511c1f73.js";import"./CheckOutlined.6b085d0a.js";import"./index.99adaa1b.js";import"./index.c5668e8a.js";import"./RightOutlined.bad02d13.js";import"./types.b7a21d2a.js";import"./isEqual.9055b911.js";import"./toInteger.d50f777e.js";import"./index.bed999aa.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";const E=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((a=>({label:a,value:a,key:a})));var k=a({components:{Select:u,PageWrapper:v,FadeTransition:S,ScaleTransition:b,SlideYTransition:j,ScrollYTransition:f,SlideYReverseTransition:x,ScrollYReverseTransition:T,SlideXTransition:R,ScrollXTransition:X,SlideXReverseTransition:h,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:_,ExpandTransition:y},setup(){const a=e("Fade"),s=e(!0);return{options:E,value:a,start:function(){s.value=!1,setTimeout((()=>{s.value=!0}),300)},show:s}}});const w=c("data-v-51fb1392");s("data-v-51fb1392");const C={class:"flex"},F=m(" start "),O={class:"box"};t();const P=w(((a,e,s,t,c,m)=>{const u=i("Select"),v=i("a-button"),S=i("PageWrapper");return o(),r(S,{title:"动画组件示例"},{default:w((()=>[n("div",C,[n(u,{options:a.options,value:a.value,"onUpdate:value":e[1]||(e[1]=e=>a.value=e),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),n(v,{type:"primary",class:"ml-4",onClick:a.start},{default:w((()=>[F])),_:1},8,["onClick"])]),(o(),r(l(`${a.value}Transition`),null,{default:w((()=>[d(n("div",O,null,512),[[p,a.show]])])),_:1}))])),_:1})}));k.render=P,k.__scopeId="data-v-51fb1392";export default k;