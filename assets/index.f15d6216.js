import{d as e,h as i,o as t,i as r,bz as s,j as o}from"./index.50e8b5dc.js";import{D as a}from"./index.d00232d0.js";import{D as d}from"./index.a9d31f1f.js";import{_ as m}from"./index.89f31739.js";import{_ as n}from"./index.705ab234.js";import{refundSchema as p,refundData as c,personSchema as j,personData as l,refundTableData as u,refundTableSchema as b,refundTimeTableSchema as f,refundTimeTableData as x}from"./data.8bbd785f.js";import{u as g}from"./useTable.f7427da6.js";import"./index.5a0d5197.js";import"./responsiveObserve.c545f1cc.js";import"./index.1be6d046.js";import"./index.e6824e1f.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./RightOutlined.656a20b0.js";import"./index.bed999aa.js";import"./useTimeout.7a6cd11a.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./index.4d32c4f3.js";import"./SearchOutlined.f21918b7.js";import"./DownOutlined.511c1f73.js";import"./CheckOutlined.6b085d0a.js";import"./index.83e0220c.js";import"./index.049f6bbf.js";import"./index.b8a80e42.js";import"./findIndex.b67caeba.js";import"./isEqual.9055b911.js";import"./_baseProperty.74f89655.js";import"./toInteger.d50f777e.js";import"./index.c1a51e2c.js";import"./index.b4d537fa.js";import"./index.581cccd4.js";import"./UpOutlined.9e8a689d.js";import"./index.93fd3c0b.js";import"./EyeOutlined.82f0228d.js";import"./index.1eb09ce2.js";import"./colors.ecead0c8.js";import"./RightOutlined.bad02d13.js";import"./index.c5668e8a.js";import"./types.b7a21d2a.js";import"./Tree.3f8e42fc.js";import"./util.69d03ed7.js";import"./useAttrs.69eb42c1.js";import"./index.1cccff52.js";import"./uuid.ea3aa4d9.js";import"./index.42611e40.js";import"./index.da8886dc.js";import"./useWindowSizeFn.0f9e7345.js";import"./FullscreenOutlined.5c535d53.js";import"./index.a4b4ad38.js";import"./index.b7a80bfd.js";import"./LeftOutlined.1c66b0ce.js";import"./download.9c02ebfa.js";import"./index.abeff14e.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.10f2064e.js";import"./scrollTo.c9242ea7.js";import"./transButton.469a8bab.js";import"./clickOutside.2cfeb44d.js";import"./useSortable.64f7b683.js";import"./CheckOutlined.3e897063.js";import"./SettingOutlined.85983b83.js";import"./useExpose.b44b7c0b.js";import"./useForm.e966d398.js";import"./index.99adaa1b.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./index.ea22f9ec.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:d,BasicTable:m,PageWrapper:n,[a.name]:a},setup(){const[e]=g({title:"退货商品",dataSource:u,columns:b,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,t=0;return e.forEach((e=>{i+=e.t5,t+=e.t6})),[{t1:"总计",t5:i,t6:t}]}}),[i]=g({title:"退货进度",columns:f,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:p,refundData:c,personSchema:j,personData:l}}});const T=s("data-v-ada482fc"),O=T(((e,s,a,d,m,n)=>{const p=i("Description"),c=i("a-divider"),j=i("BasicTable"),l=i("PageWrapper");return t(),r(l,{title:"基础详情页",contentBackground:""},{default:T((()=>[o(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),o(c),o(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),o(c),o(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),o(c),o(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=O,h.__scopeId="data-v-ada482fc";export default h;