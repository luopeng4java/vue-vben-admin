import{c0 as e,r as t,cG as i,e as n,d as a,q as s,o,i as r,b4 as c,bZ as d,h as u,j as l,l as p,bz as m}from"./index.50e8b5dc.js";import{_ as f}from"./index.705ab234.js";import"./index.99adaa1b.js";import"./index.c5668e8a.js";import"./RightOutlined.bad02d13.js";import"./types.b7a21d2a.js";import"./isEqual.9055b911.js";import"./toInteger.d50f777e.js";import"./DownOutlined.511c1f73.js";import"./index.bed999aa.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";var k=a({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(a,{emit:o}){const r=t(null);return function(a,s,o="click"){if(e)return;const r=t(!1);function c(e){if("touchend"===e.type&&(r.value=!0),"click"===e.type&&n(r))return;const t=a.value;t&&e.target&&!t.contains(e.target)&&s(e)}i({el:document,name:"touchend",listener:c,options:!0}),i({el:document,name:o,listener:c,options:!0})}(r,(()=>{o("clickOutside")})),s((()=>{o("mounted")})),{wrap:r}}});const j={ref:"wrap"};k.render=function(e,t,i,n,a,s){return o(),r("div",j,[c(e.$slots,"default")],512)},d(k);var C=a({components:{ClickOutSide:k,PageWrapper:f},setup(){const e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const b=m("data-v-7a637453"),x=b(((e,t,i,n,a,s)=>{const c=u("ClickOutSide"),d=u("PageWrapper");return o(),r(d,{title:"点内外部触发事件"},{default:b((()=>[l(c,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:b((()=>[l("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},p(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));C.render=x,C.__scopeId="data-v-7a637453";export default C;