import{d as e,f as t,dD as a,a1 as s,dE as o,cr as n,cs as r,h as i,o as d,i as l,bz as u,j as p,l as m,m as c}from"./index.50e8b5dc.js";import{A as f}from"./index.1cccff52.js";import j from"./CurrentPermissionMode.4535c1f7.js";import{_ as R}from"./index.705ab234.js";import"./index.d00232d0.js";import"./index.99adaa1b.js";import"./index.c5668e8a.js";import"./RightOutlined.bad02d13.js";import"./types.b7a21d2a.js";import"./isEqual.9055b911.js";import"./toInteger.d50f777e.js";import"./DownOutlined.511c1f73.js";import"./index.bed999aa.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";var g=e({components:{Alert:f,CurrentPermissionMode:j,PageWrapper:R},setup(){const{changeRole:e}=o();return{userStore:t,RoleEnum:a,isSuper:s((()=>t.getRoleListState.includes(a.SUPER))),isTest:s((()=>t.getRoleListState.includes(a.TEST))),changeRole:e}}});const E=u("data-v-9a73aaae");n("data-v-9a73aaae");const S=c(" 当前角色: "),b={class:"mt-4"},x=c(" 权限切换(请先切换权限模式为前端角色权限模式): ");r();const y=E(((e,t,a,s,o,n)=>{const r=i("CurrentPermissionMode"),u=i("Alert"),f=i("a-button"),j=i("a-button-group"),R=i("PageWrapper");return d(),l(R,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:E((()=>[p(r),p("p",null,[S,p("a",null,m(e.userStore.getRoleListState),1)]),p(u,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),p("div",b,[x,p(j,null,{default:E((()=>[p(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:E((()=>[c(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),p(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:E((()=>[c(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));g.render=y,g.__scopeId="data-v-9a73aaae";export default g;