import{d as e,u as o,aW as t,aQ as i,a1 as s,bj as r,e as a,bk as n,cr as d,cs as p,h as l,o as m,i as c,j as u,l as j,k as b,bz as f}from"./index.50e8b5dc.js";import{L as x}from"./index.47ac2701.js";import{D as _,G as g,S as h}from"./siteSetting.2daee9f0.js";import{G as C}from"./GithubFilled.769245fc.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.bad02d13.js";import"./LeftOutlined.1c66b0ce.js";import"./index.c5668e8a.js";import"./types.b7a21d2a.js";import"./isEqual.9055b911.js";import"./toInteger.d50f777e.js";import"./index.bed999aa.js";import"./useTimeout.7a6cd11a.js";import"./useHeaderSetting.0c2c4971.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./useSortable.64f7b683.js";import"./index.1be6d046.js";import"./index.e6824e1f.js";import"./RightOutlined.656a20b0.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./index.1b71887f.js";import"./useWindowSizeFn.0f9e7345.js";import"./usePageContext.555c8737.js";import"./index.ebd4a750.js";import"./clickOutside.2cfeb44d.js";import"./index.58671857.js";import"./UpOutlined.9e8a689d.js";import"./DownOutlined.511c1f73.js";import"./index.a4b4ad38.js";var F=e({name:"LayoutFooter",components:{Footer:x.Footer,GithubFilled:C},setup(){const{t:e}=o(),{getShowFooter:d}=n(),{currentRoute:p}=t(),{prefixCls:l}=i("layout-footer");return{getShowLayoutFooter:s((()=>{var e;return a(d)&&!(null==(e=a(p).meta)?void 0:e.hiddenFooter)})),prefixCls:l,t:e,DOC_URL:_,GITHUB_URL:g,SITE_URL:h,openWindow:r}}});const L=f("data-v-47369c67");d("data-v-47369c67");const S=u("div",null,"Copyright ©2020 Vben Admin",-1);p();const w=L(((e,o,t,i,s,r)=>{const a=l("GithubFilled"),n=l("Footer");return e.getShowLayoutFooter?(m(),c(n,{key:0,class:e.prefixCls},{default:L((()=>[u("div",{class:`${e.prefixCls}__links`},[u("a",{onClick:o[1]||(o[1]=o=>e.openWindow(e.SITE_URL))},j(e.t("layout.footer.onlinePreview")),1),u(a,{onClick:o[2]||(o[2]=o=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),u("a",{onClick:o[3]||(o[3]=o=>e.openWindow(e.DOC_URL))},j(e.t("layout.footer.onlineDocument")),1)],2),S])),_:1},8,["class"])):b("",!0)}));F.render=w,F.__scopeId="data-v-47369c67";export default F;