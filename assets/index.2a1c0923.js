import{d as o,au as t,u as e,Y as s,N as i,s as a,as as r,f as n,at as d,br as l,bs as p,i as c,o as m,j as u,k as f,m as j,l as b,aJ as x}from"./index.871a73d0.js";import"./index.d1d6fa0e.js";import{D as _,G as C,S as F}from"./siteSetting.2daee9f0.js";import{G as S}from"./GithubFilled.8f9277c5.js";import"./index.673364b0.js";import"./index.8d91dadc.js";import"./useTimeout.da8cb4b6.js";import"./useHeaderSetting.49bf9640.js";import"./domUtils.f6df7058.js";import"./index.763e570f.js";import"./index.3ab8cadf.js";import"./RightOutlined.726ff22e.js";import"./useScrollTo.25bb0b32.js";import"./animation.36cf3c57.js";import"./index.1cb49f92.js";import"./useWindowSizeFn.78593242.js";import"./usePageContext.8b8441ee.js";import"./index.6f7c662f.js";import"./clickOutside.8866c869.js";import"./index.a0e9bc88.js";import"./index.2fc715fb.js";import"./useSortable.3bcb7928.js";var h=o({name:"LayoutFooter",components:{Footer:t.Footer,GithubFilled:S},setup(){const{t:o}=e(),{getShowFooter:t}=d(),{currentRoute:l}=s(),{prefixCls:p}=i("layout-footer");return{getShowLayoutFooter:a((()=>{var o;return n(t)&&!(null==(o=n(l).meta)?void 0:o.hiddenFooter)})),prefixCls:p,t:o,DOC_URL:_,GITHUB_URL:C,SITE_URL:F,openWindow:r}}});const g=x("data-v-47369c67");l("data-v-47369c67");const v=f("div",null,"Copyright ©2020 Vben Admin",-1);p();const w=g(((o,t,e,s,i,a)=>{const r=c("GithubFilled"),n=c("Footer");return o.getShowLayoutFooter?(m(),u(n,{key:0,class:o.prefixCls},{default:g((()=>[f("div",{class:`${o.prefixCls}__links`},[f("a",{onClick:t[1]||(t[1]=t=>o.openWindow(o.SITE_URL))},j(o.t("layout.footer.onlinePreview")),1),f(r,{onClick:t[2]||(t[2]=t=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),f("a",{onClick:t[3]||(t[3]=t=>o.openWindow(o.DOC_URL))},j(o.t("layout.footer.onlineDocument")),1)],2),v])),_:1},8,["class"])):b("",!0)}));h.render=w,h.__scopeId="data-v-47369c67";export default h;