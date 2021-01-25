import{j as e,aH as t,aI as i,d as n,b5 as o,u as s,r,bT as a,h as d,o as l,i as c,w as p,l as m}from"./index.50e8b5dc.js";import{D as u,M as j}from"./index.c5668e8a.js";import"./index.bed999aa.js";import{u as f}from"./index.83e0220c.js";import"./index.a4b4ad38.js";import"./RightOutlined.bad02d13.js";import"./types.b7a21d2a.js";import"./isEqual.9055b911.js";import"./toInteger.d50f777e.js";import"./index.049f6bbf.js";import"./responsiveObserve.c545f1cc.js";import"./index.b8a80e42.js";import"./findIndex.b67caeba.js";import"./_baseProperty.74f89655.js";import"./index.c1a51e2c.js";import"./index.4d32c4f3.js";import"./SearchOutlined.f21918b7.js";import"./DownOutlined.511c1f73.js";import"./CheckOutlined.6b085d0a.js";import"./index.b4d537fa.js";import"./index.581cccd4.js";import"./UpOutlined.9e8a689d.js";import"./index.93fd3c0b.js";import"./EyeOutlined.82f0228d.js";import"./index.1eb09ce2.js";import"./colors.ecead0c8.js";import"./Tree.3f8e42fc.js";import"./util.69d03ed7.js";import"./useAttrs.69eb42c1.js";import"./index.1cccff52.js";import"./uuid.ea3aa4d9.js";import"./index.42611e40.js";import"./index.da8886dc.js";import"./useTimeout.7a6cd11a.js";import"./useWindowSizeFn.0f9e7345.js";import"./index.1be6d046.js";import"./index.e6824e1f.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./RightOutlined.656a20b0.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./FullscreenOutlined.5c535d53.js";import"./index.d00232d0.js";import"./index.b7a80bfd.js";import"./LeftOutlined.1c66b0ce.js";import"./download.9c02ebfa.js";var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"}}]},name:"column-height",theme:"outlined"};function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var y=function(n,o){var s=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){g(e,t,i[t])}))}return e}({},n,o.attrs);return e(i,t(s,{icon:b}),null)};y.displayName="ColumnHeightOutlined",y.inheritAttrs=!1;var x=n({name:"SizeSetting",components:{ColumnHeightOutlined:y,Tooltip:o,Dropdown:u,Menu:j,MenuItem:j.Item},setup(){const e=f(),{t:t}=s(),i=r([e.getSize()]);return{handleTitleClick:function({key:t}){i.value=[t],e.setProps({size:t})},selectedKeysRef:i,getPopupContainer:a,t:t}}});x.render=function(t,i,n,o,s,r){const a=d("ColumnHeightOutlined"),u=d("MenuItem"),j=d("Menu"),f=d("Dropdown"),b=d("Tooltip");return l(),c(b,{placement:"top"},{title:p((()=>[e("span",null,m(t.t("component.table.settingDens")),1)])),default:p((()=>[e(f,{placement:"bottomCenter",trigger:["click"],getPopupContainer:t.getPopupContainer},{overlay:p((()=>[e(j,{onClick:t.handleTitleClick,selectable:"",selectedKeys:t.selectedKeysRef,"onUpdate:selectedKeys":i[1]||(i[1]=e=>t.selectedKeysRef=e)},{default:p((()=>[e(u,{key:"default"},{default:p((()=>[e("span",null,m(t.t("component.table.settingDensDefault")),1)])),_:1}),e(u,{key:"middle"},{default:p((()=>[e("span",null,m(t.t("component.table.settingDensMiddle")),1)])),_:1}),e(u,{key:"small"},{default:p((()=>[e("span",null,m(t.t("component.table.settingDensSmall")),1)])),_:1})])),_:1},8,["onClick","selectedKeys"])])),default:p((()=>[e(a)])),_:1},8,["getPopupContainer"])])),_:1})};export default x;