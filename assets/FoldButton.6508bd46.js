import{d as e,b5 as n,aN as o,aQ as t,a1 as s,e as a,aV as d,h as c,o as i,i as r,j as l}from"./index.50e8b5dc.js";import"./index.bed999aa.js";import{d as u}from"./useHeaderSetting.0c2c4971.js";import{R as p}from"./RedoOutlined.57de4c70.js";var f=e({name:"FoldButton",components:{RedoOutlined:p,Tooltip:n,Icon:o},setup(){const{prefixCls:e}=t("multiple-tabs-content"),{getShowMenu:n,setMenuSetting:o}=d(),{getShowHeader:c,setHeaderSetting:i}=u(),r=s((()=>!a(n)&&!a(c)));return{prefixCls:e,getIcon:s((()=>a(r)?"codicon:screen-normal":"codicon:screen-full")),handleFold:function(){const e=!a(n)&&!a(c);o({show:e,hidden:!e}),i({show:e})}}}});f.render=function(e,n,o,t,s,a){const d=c("Icon");return i(),r("span",{class:`${e.prefixCls}__extra-fold`,onClick:n[1]||(n[1]=(...n)=>e.handleFold&&e.handleFold(...n))},[l(d,{icon:e.getIcon},null,8,["icon"])],2)};export default f;