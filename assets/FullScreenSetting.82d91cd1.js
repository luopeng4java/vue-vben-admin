import{d as e,ab as i,u as n,i as t,o as s,j as o,w as l,k as r,m as d}from"./index.871a73d0.js";import"./index.8d91dadc.js";import{u as c}from"./index.c1fdb1c2.js";import{u as m}from"./useFullScreen.175540c2.js";import{F as u,a as p}from"./FullscreenOutlined.e76c502b.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.fe97cbc4.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.ebf495ed.js";import"./useTimeout.da8cb4b6.js";import"./useWindowSizeFn.78593242.js";import"./index.763e570f.js";import"./index.3ab8cadf.js";import"./domUtils.f6df7058.js";import"./RightOutlined.726ff22e.js";import"./useScrollTo.25bb0b32.js";import"./animation.36cf3c57.js";import"./index.a45b2b74.js";import"./index.2fc715fb.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.2fd06b65.js";var a=e({name:"FullScreenSetting",components:{FullscreenExitOutlined:u,FullscreenOutlined:p,Tooltip:i},setup(){const e=c(),{t:i}=n(),{toggleFullscreen:t,isFullscreenRef:s}=m(e.wrapRef);return{handleFullScreen:function(){t()},isFullscreenRef:s,t:i}}});a.render=function(e,i,n,c,m,u){const p=t("FullscreenOutlined"),a=t("FullscreenExitOutlined"),j=t("Tooltip");return s(),o(j,{placement:"top"},{title:l((()=>[r("span",null,d(e.t("component.table.settingFullScreen")),1)])),default:l((()=>[e.isFullscreenRef?(s(),o(a,{key:1,onClick:e.handleFullScreen},null,8,["onClick"])):(s(),o(p,{key:0,onClick:e.handleFullScreen},null,8,["onClick"]))])),_:1})};export default a;