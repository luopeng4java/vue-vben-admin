import{r as e,e as n}from"./index.50e8b5dc.js";function l(l=e(document.documentElement),u){const t=e(!1),r=document.documentElement;let s="requestFullscreen",c="exitFullscreen",i="fullscreenElement";if("webkitRequestFullScreen"in r)s="webkitRequestFullScreen",c="webkitExitFullscreen",i="webkitFullscreenElement";else if("msRequestFullscreen"in r)s="msRequestFullscreen",c="msExitFullscreen",i="msFullscreenElement";else if("mozRequestFullScreen"in r)s="mozRequestFullScreen",c="mozCancelFullScreen",i="mozFullScreenElement";else if(!("requestFullscreen"in r))throw new Error("当前浏览器不支持Fullscreen API !");function m(){return t.value=!0,n(l)[s](u)}function o(){return t.value=!1,document[c]()}function F(){return n(l)===document[i]}return{toggleFullscreen:async function(){if(n(l))return F()?o():m()},exitFullscreen:o,isFullscreen:F,enterFullscreen:m,isFullscreenRef:t}}export{l as u};