import{_ as e}from"./index.39235e88.js";import"./index.937e9041.js";import{c as i,d as t,j as s}from"./data.55b0b42c.js";import{_ as o}from"./index.472abbb9.js";import{d,i as a,o as r,j as n,w as m,k as c,n as p}from"./index.871a73d0.js";import"./index.47fbc714.js";import"./index.c1fdb1c2.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.fe97cbc4.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.ebf495ed.js";import"./useTimeout.da8cb4b6.js";import"./useWindowSizeFn.78593242.js";import"./index.763e570f.js";import"./index.3ab8cadf.js";import"./domUtils.f6df7058.js";import"./RightOutlined.726ff22e.js";import"./useScrollTo.25bb0b32.js";import"./animation.36cf3c57.js";import"./FullscreenOutlined.e76c502b.js";import"./index.a45b2b74.js";import"./index.2fc715fb.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.2fd06b65.js";import"./index.27bb0464.js";import"./clickOutside.8866c869.js";import"./CheckOutlined.75872468.js";import"./useSortable.3bcb7928.js";import"./SettingOutlined.19405a5f.js";import"./useExpose.a20cf1d1.js";import"./useForm.abc982be.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.8b8441ee.js";var j=d({components:{BasicTable:e,PageWrapper:o},setup:()=>({defaultHeader:function(){s({data:t,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){s({data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:t})});const u=p("导出：默认头部"),b=p("导出：自定义头部");j.render=function(e,i,t,s,o,d){const p=a("a-button"),j=a("BasicTable"),f=a("PageWrapper");return r(),n(f,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[c(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[c(p,{onClick:e.defaultHeader},{default:m((()=>[u])),_:1},8,["onClick"]),c(p,{onClick:e.customHeader},{default:m((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default j;