import{B as e}from"./index.81bc119f.js";import{d as s,r as t,g as c,cr as l,cs as a,h as n,o as i,i as r,j as u,bz as o,m as d}from"./index.50e8b5dc.js";import{_ as m}from"./index.705ab234.js";import{B as p}from"./BugOutlined.16d51a05.js";import{R as f}from"./RightOutlined.656a20b0.js";import"./index.99adaa1b.js";import"./index.c5668e8a.js";import"./RightOutlined.bad02d13.js";import"./types.b7a21d2a.js";import"./isEqual.9055b911.js";import"./toInteger.d50f777e.js";import"./DownOutlined.511c1f73.js";import"./index.bed999aa.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";var b=s({components:{BasicDragVerify:e,BugOutlined:p,RightOutlined:f,PageWrapper:m},setup(){const{createMessage:e}=c();return{handleSuccess:function(s){const{time:t}=s;e.success(`校验成功,耗时${t}秒`)},el1:t(null),el2:t(null),el3:t(null),el4:t(null),el5:t(null),handleBtnClick:function(e){e&&e.resume()}}}});const y=o("data-v-5ebbb404");l("data-v-5ebbb404");const g={class:"flex justify-center p-4 items-center bg-gray-700"},j=d("还原"),h={class:"flex justify-center p-4 items-center bg-gray-700"},x=d("还原"),S={class:"flex justify-center p-4 items-center bg-gray-700"},k=d("还原"),B={class:"flex justify-center p-4 items-center bg-gray-700"},C=d("还原"),v={class:"flex justify-center p-4 items-center bg-gray-700"},_={key:0},O=d(" 成功 "),R={key:1},D=d(" 拖动 "),I=d("还原");a();const P=y(((e,s,t,c,l,a)=>{const o=n("BasicDragVerify"),d=n("a-button"),m=n("BugOutlined"),p=n("RightOutlined"),f=n("PageWrapper");return i(),r(f,{title:"拖动校验示例"},{default:y((()=>[u("div",g,[u(o,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),u(d,{type:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:y((()=>[j])),_:1})]),u("div",h,[u(o,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),u(d,{type:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:y((()=>[x])),_:1})]),u("div",S,[u(o,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{background:"#018ffb"}},null,8,["onSuccess"]),u(d,{type:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:y((()=>[k])),_:1})]),u("div",B,[u(o,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:y((e=>[e?(i(),r(m,{key:0})):(i(),r(p,{key:1}))])),_:1},8,["onSuccess"]),u(d,{type:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:y((()=>[C])),_:1})]),u("div",v,[u(o,{ref:"el5",onSuccess:e.handleSuccess},{text:y((e=>[e?(i(),r("div",_,[u(m),O])):(i(),r("div",R,[D,u(p)]))])),_:1},8,["onSuccess"]),u(d,{type:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:y((()=>[I])),_:1})])])),_:1})}));b.render=P,b.__scopeId="data-v-5ebbb404";export default b;