import{d as s,e,bK as r,bW as t,bk as n,dE as a,bZ as o}from"./index.50e8b5dc.js";var u=s({name:"Authority",props:{value:{type:[Number,Array,String],default:""}},setup(s,{slots:o}){const{getPermissionMode:u}=n(),{hasPermission:i}=a();return()=>{const n=e(u);return n===r.ROLE?function(){const{value:e}=s;return e?i(e)?t(o):null:t(o)}():n===r.BACK?function(){const{value:e}=s;return e?i(e)?t(o):null:t(o)}():t(o)}}});o(u);export{u as _};