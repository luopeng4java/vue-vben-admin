import{d as e,bf as s,bK as a,dE as o,dF as t,cr as r,cs as i,h as d,bD as n,o as c,i as m,bz as l,j as u,l as p,k as f,H as _,m as x}from"./index.50e8b5dc.js";import{D as j}from"./index.d00232d0.js";import{A as y}from"./index.1cccff52.js";import b from"./CurrentPermissionMode.4535c1f7.js";import{_ as P}from"./index.2604d676.js";import{_ as h}from"./index.705ab234.js";import"./index.99adaa1b.js";import"./index.c5668e8a.js";import"./RightOutlined.bad02d13.js";import"./types.b7a21d2a.js";import"./isEqual.9055b911.js";import"./toInteger.d50f777e.js";import"./DownOutlined.511c1f73.js";import"./index.bed999aa.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";var g=e({components:{Alert:y,PageWrapper:h,CurrentPermissionMode:b,Divider:j,Authority:P},setup(){const{hasPermission:e}=o();async function r(e){const a=await t({userId:e});s.commitPermCodeListState(a)}return r("1"),{hasPermission:e,permissionStore:s,changePermissionCode:r,PermissionModeEnum:a}}});const C=l("data-v-beeadad6");r("data-v-beeadad6");const v=x(" 当前拥有的code列表: "),k=x(" 点击切换按钮权限(用户id为2) "),A=x(" 点击切换按钮权限(用户id为1,默认) "),D=x("组件方式判断权限"),w=x("拥有code ['1000']权限可见"),M=x("拥有code ['2000']权限可见"),S=x("拥有code ['1000','2000']角色权限可见"),E=x("函数方式方式判断权限"),I=x(" 拥有code ['1000']权限可见 "),B=x(" 拥有code ['2000']权限可见 "),L=x(" 拥有code ['1000','2000']角色权限可见 "),O=x("指令方式方式判断权限(该方式不能动态修改权限.)"),W=x(" 拥有code ['1000']权限可见 "),q=x(" 拥有code ['2000']权限可见 "),z=x(" 拥有code ['1000','2000']角色权限可见 ");i();const F=C(((e,s,a,o,t,r)=>{const i=d("Alert"),l=d("CurrentPermissionMode"),x=d("Divider"),j=d("a-button"),y=d("Authority"),b=d("PageWrapper"),P=n("auth");return c(),m(b,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:C((()=>[u(i,{message:"刷新后会还原","show-icon":""}),u(l),u("p",null,[v,u("a",null,p(e.permissionStore.getPermCodeListState),1)]),u(x),u(i,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),u(x),u(j,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:C((()=>[k])),_:1}),u(j,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:C((()=>[A])),_:1}),u(x,null,{default:C((()=>[D])),_:1}),u(y,{value:"1000"},{default:C((()=>[u(j,{type:"primary",class:"mx-4"},{default:C((()=>[w])),_:1})])),_:1}),u(y,{value:"2000"},{default:C((()=>[u(j,{color:"success",class:"mx-4"},{default:C((()=>[M])),_:1})])),_:1}),u(y,{value:["1000","2000"]},{default:C((()=>[u(j,{color:"error",class:"mx-4"},{default:C((()=>[S])),_:1})])),_:1}),u(x,null,{default:C((()=>[E])),_:1}),e.hasPermission("1000")?(c(),m(j,{key:0,type:"primary",class:"mx-4"},{default:C((()=>[I])),_:1})):f("",!0),e.hasPermission("2000")?(c(),m(j,{key:1,color:"success",class:"mx-4"},{default:C((()=>[B])),_:1})):f("",!0),e.hasPermission(["1000","2000"])?(c(),m(j,{key:2,color:"error",class:"mx-4"},{default:C((()=>[L])),_:1})):f("",!0),u(x,null,{default:C((()=>[O])),_:1}),_(u(j,{type:"primary",class:"mx-4"},{default:C((()=>[W])),_:1},512),[[P,"1000"]]),_(u(j,{color:"success",class:"mx-4"},{default:C((()=>[q])),_:1},512),[[P,"2000"]]),_(u(j,{color:"error",class:"mx-4"},{default:C((()=>[z])),_:1},512),[[P,["1000","2000"]]])])),_:1})}));g.render=F,g.__scopeId="data-v-beeadad6";export default g;