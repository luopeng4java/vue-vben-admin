import{_ as e}from"./index.89f31739.js";import{getBasicColumns as i}from"./tableData.7aa0192c.js";import{d as t}from"./table.6ab425e3.js";import{d as s,h as o,o as r,i as d,j as p,w as a,l as m}from"./index.50e8b5dc.js";import{u as n}from"./useTable.f7427da6.js";import"./index.4d32c4f3.js";import"./SearchOutlined.f21918b7.js";import"./DownOutlined.511c1f73.js";import"./CheckOutlined.6b085d0a.js";import"./index.83e0220c.js";import"./index.049f6bbf.js";import"./responsiveObserve.c545f1cc.js";import"./index.b8a80e42.js";import"./findIndex.b67caeba.js";import"./isEqual.9055b911.js";import"./_baseProperty.74f89655.js";import"./toInteger.d50f777e.js";import"./index.c1a51e2c.js";import"./index.b4d537fa.js";import"./index.581cccd4.js";import"./UpOutlined.9e8a689d.js";import"./index.93fd3c0b.js";import"./EyeOutlined.82f0228d.js";import"./index.1eb09ce2.js";import"./colors.ecead0c8.js";import"./RightOutlined.bad02d13.js";import"./index.c5668e8a.js";import"./types.b7a21d2a.js";import"./Tree.3f8e42fc.js";import"./util.69d03ed7.js";import"./useAttrs.69eb42c1.js";import"./index.bed999aa.js";import"./index.1cccff52.js";import"./uuid.ea3aa4d9.js";import"./index.42611e40.js";import"./index.da8886dc.js";import"./useTimeout.7a6cd11a.js";import"./useWindowSizeFn.0f9e7345.js";import"./index.1be6d046.js";import"./index.e6824e1f.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./RightOutlined.656a20b0.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./FullscreenOutlined.5c535d53.js";import"./index.d00232d0.js";import"./index.a4b4ad38.js";import"./index.b7a80bfd.js";import"./LeftOutlined.1c66b0ce.js";import"./download.9c02ebfa.js";import"./index.abeff14e.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.10f2064e.js";import"./scrollTo.c9242ea7.js";import"./transButton.469a8bab.js";import"./clickOutside.2cfeb44d.js";import"./useSortable.64f7b683.js";import"./CheckOutlined.3e897063.js";import"./SettingOutlined.85983b83.js";import"./useExpose.b44b7c0b.js";import"./useForm.e966d398.js";var j=s({components:{BasicTable:e},setup(){const[e]=n({title:"可展开表格",api:t,titleHelpMessage:"不能与scroll共用",columns:i(),rowKey:"id",canResize:!1});return{registerTable:e}}});const c={class:"p-4"};j.render=function(e,i,t,s,n,j){const b=o("BasicTable");return r(),d("div",c,[p(b,{onRegister:e.registerTable},{expandedRowRender:a((({record:e})=>[p("span",null,"No: "+m(e.no),1)])),_:1},8,["onRegister"])])};export default j;