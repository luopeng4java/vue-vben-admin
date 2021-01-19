import{a as e}from"./index.763e570f.js";import{d as n,h as o,i as s,o as a,j as r,w as l,k as t,n as c}from"./index.871a73d0.js";import{_ as i}from"./index.472abbb9.js";import"./index.3ab8cadf.js";import"./domUtils.f6df7058.js";import"./RightOutlined.726ff22e.js";import"./index.8d91dadc.js";import"./useTimeout.da8cb4b6.js";import"./useScrollTo.25bb0b32.js";import"./animation.36cf3c57.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.9fbd6c39.js";import"./usePageContext.8b8441ee.js";var d=n({components:{CollapseContainer:e,PageWrapper:i},setup(){const{createMessage:e,createConfirm:n,createSuccessModal:s,createInfoModal:a,createErrorModal:r,createWarningModal:l,notification:t}=o(),{info:c,success:i,warning:d,error:f}=e;return{infoMsg:c,successMsg:i,warningMsg:d,errorMsg:f,handleLoading:function(){e.loading("Loading...")},handleConfirm:function(e){n({iconType:e,title:"Tip",content:"content message..."})},handleSuccessModal:function(){s({title:"Tip",content:"content message..."})},handleErrorModal:function(){r({title:"Tip",content:"content message..."})},handleWarningModal:function(){l({title:"Tip",content:"content message..."})},handleInfoModal:function(){a({title:"Tip",content:"content message..."})},handleNotify:function(){t.success({message:"Tip",description:"content message..."})}}}});const f=c(" Info "),m=c(" Success "),u=c(" Warning "),g=c(" Error "),p=c(" Loading "),C=c("Info"),h=c("Warning"),M=c("Success"),k=c("Error"),_=c("Info"),b=c("Success"),w=c("Error"),j=c("Warning"),x=c("Success");d.render=function(e,n,o,c,i,d){const S=s("a-button"),T=s("CollapseContainer"),W=s("PageWrapper");return a(),r(W,{title:"消息示例"},{default:l((()=>[t(T,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Message"},{default:l((()=>[t(S,{onClick:n[1]||(n[1]=n=>e.infoMsg("Info message")),class:"mr-2"},{default:l((()=>[f])),_:1}),t(S,{onClick:n[2]||(n[2]=n=>e.successMsg("Success message")),class:"mr-2",color:"success"},{default:l((()=>[m])),_:1}),t(S,{onClick:n[3]||(n[3]=n=>e.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:l((()=>[u])),_:1}),t(S,{onClick:n[4]||(n[4]=n=>e.errorMsg("Error message")),class:"mr-2",color:"error"},{default:l((()=>[g])),_:1}),t(S,{onClick:e.handleLoading,class:"mr-2",type:"primary"},{default:l((()=>[p])),_:1},8,["onClick"])])),_:1}),t(T,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Comfirm"},{default:l((()=>[t(S,{onClick:n[5]||(n[5]=n=>e.handleConfirm("info")),class:"mr-2"},{default:l((()=>[C])),_:1}),t(S,{onClick:n[6]||(n[6]=n=>e.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:l((()=>[h])),_:1}),t(S,{onClick:n[7]||(n[7]=n=>e.handleConfirm("success")),color:"success",class:"mr-2"},{default:l((()=>[M])),_:1}),t(S,{onClick:n[8]||(n[8]=n=>e.handleConfirm("error")),color:"error",class:"mr-2"},{default:l((()=>[k])),_:1})])),_:1}),t(T,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Modal"},{default:l((()=>[t(S,{onClick:e.handleInfoModal,class:"mr-2"},{default:l((()=>[_])),_:1},8,["onClick"]),t(S,{onClick:e.handleSuccessModal,color:"success",class:"mr-2"},{default:l((()=>[b])),_:1},8,["onClick"]),t(S,{onClick:e.handleErrorModal,color:"error",class:"mr-2"},{default:l((()=>[w])),_:1},8,["onClick"]),t(S,{onClick:e.handleWarningModal,color:"warning",class:"mr-2"},{default:l((()=>[j])),_:1},8,["onClick"])])),_:1}),t(T,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Notification 用法与上面一致"},{default:l((()=>[t(S,{onClick:e.handleNotify,color:"success",class:"mr-2"},{default:l((()=>[x])),_:1},8,["onClick"])])),_:1})])),_:1})};export default d;