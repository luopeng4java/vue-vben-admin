import{I as e}from"./index.937e9041.js";import{_ as t}from"./index.39235e88.js";import{_ as s}from"./index.472abbb9.js";import{d as i,r as o,i as r,o as a,j as d,w as n,k as c,Q as m,S as p,n as u}from"./index.871a73d0.js";import"./index.47fbc714.js";import"./index.c1fdb1c2.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.fe97cbc4.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.ebf495ed.js";import"./useTimeout.da8cb4b6.js";import"./useWindowSizeFn.78593242.js";import"./index.763e570f.js";import"./index.3ab8cadf.js";import"./domUtils.f6df7058.js";import"./RightOutlined.726ff22e.js";import"./useScrollTo.25bb0b32.js";import"./animation.36cf3c57.js";import"./FullscreenOutlined.e76c502b.js";import"./index.a45b2b74.js";import"./index.2fc715fb.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.2fd06b65.js";import"./index.27bb0464.js";import"./clickOutside.8866c869.js";import"./CheckOutlined.75872468.js";import"./useSortable.3bcb7928.js";import"./SettingOutlined.19405a5f.js";import"./useExpose.a20cf1d1.js";import"./useForm.abc982be.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.8b8441ee.js";var l=i({components:{BasicTable:t,ImpExcel:e,PageWrapper:s},setup(){const e=o([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:i,meta:{sheetName:o}}=s,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:i,columns:r})}},tableListRef:e}}});const j=u("导入Excel");l.render=function(e,t,s,i,o,u){const l=r("a-button"),f=r("ImpExcel"),b=r("BasicTable"),x=r("PageWrapper");return a(),d(x,{title:"excel数据导入示例"},{default:n((()=>[c(f,{onSuccess:e.loadDataSuccess},{default:n((()=>[c(l,{class:"m-3"},{default:n((()=>[j])),_:1})])),_:1},8,["onSuccess"]),(a(!0),d(m,null,p(e.tableListRef,((e,t)=>(a(),d(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default l;