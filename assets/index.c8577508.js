import{d as e,I as s,aP as o,i as t,o as l,j as a,w as r,k as i,n as c}from"./index.871a73d0.js";import"./index.61099513.js";import{a as n}from"./index.763e570f.js";import{_ as d}from"./index.472abbb9.js";import"./index.3ab8cadf.js";import"./domUtils.f6df7058.js";import"./RightOutlined.726ff22e.js";import"./index.8d91dadc.js";import"./useTimeout.da8cb4b6.js";import"./useScrollTo.25bb0b32.js";import"./animation.36cf3c57.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.9fbd6c39.js";import"./usePageContext.8b8441ee.js";var m=e({name:"TabsDemo",components:{CollapseContainer:n,PageWrapper:d,[s.name]:s},setup(){const{closeAll:e,closeLeft:s,closeRight:t,closeOther:l,closeCurrent:a,refreshPage:r}=o();return{closeAll:e,closeLeft:s,closeRight:t,closeOther:l,closeCurrent:a,refreshPage:r}}});const f=c("关闭所有"),p=c("关闭左侧"),u=c("关闭右侧"),C=c("关闭其他"),j=c("关闭当前"),b=c("刷新当前");m.render=function(e,s,o,c,n,d){const m=t("a-input"),k=t("CollapseContainer"),h=t("a-button"),x=t("PageWrapper");return l(),a(x,{title:"标签页操作示例"},{default:r((()=>[i(k,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:r((()=>[i(m,{placeholder:"请输入"})])),_:1}),i(k,{class:"mt-4",title:"标签页操作"},{default:r((()=>[i(h,{class:"mr-2",onClick:e.closeAll},{default:r((()=>[f])),_:1},8,["onClick"]),i(h,{class:"mr-2",onClick:e.closeLeft},{default:r((()=>[p])),_:1},8,["onClick"]),i(h,{class:"mr-2",onClick:e.closeRight},{default:r((()=>[u])),_:1},8,["onClick"]),i(h,{class:"mr-2",onClick:e.closeOther},{default:r((()=>[C])),_:1},8,["onClick"]),i(h,{class:"mr-2",onClick:e.closeCurrent},{default:r((()=>[j])),_:1},8,["onClick"]),i(h,{class:"mr-2",onClick:e.refreshPage},{default:r((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})};export default m;