import{T as e,U as t,V as n,W as r,d as o,O as i,Z as a,P as c,v as s,p as l,z as u,j as f,y as d,D as h,a5 as p,a6 as v,J as y,I as b}from"./index.50e8b5dc.js";var g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"},m=Object.defineProperty({default:g},"__esModule",{value:!0}),k=e((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n),i=c(m),a=c(t);function c(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},e,t.attrs);return o.createVNode(a.default,o.mergeProps(n,{icon:i.default}),null)};u.displayName="FileOutlined",u.inheritAttrs=!1;var f=u;r.default=f})),O=r(e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=k)&&n.__esModule?n:{default:n};var o=r.default||r;t.default=o,e.exports=o})));function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!h(e)}function x(){}var C=o({name:"TreeNode",mixins:[i],inheritAttrs:!1,__ANT_TREE_NODE:!0,props:a({eventKey:c.oneOfType([c.string,c.number]),prefixCls:c.string,root:c.object,expanded:c.looseBool,selected:c.looseBool,checked:c.looseBool,loaded:c.looseBool,loading:c.looseBool,halfChecked:c.looseBool,title:c.any,pos:c.string,dragOver:c.looseBool,dragOverGapTop:c.looseBool,dragOverGapBottom:c.looseBool,isLeaf:c.looseBool,checkable:c.looseBool,selectable:c.looseBool,disabled:c.looseBool,disableCheckbox:c.looseBool,icon:c.any,dataRef:c.object,switcherIcon:c.any,label:c.any,value:c.any},{}),setup:function(){return{vcTree:s("vcTree",{}),vcTreeNode:s("vcTreeNode",{})}},data:function(){return this.children=null,{dragNodeHighlight:!1}},created:function(){l("vcTreeNode",this)},mounted:function(){var e=this.eventKey,t=this.vcTree.registerTreeNode;this.syncLoadData(this.$props),t&&t(e,this)},updated:function(){this.syncLoadData(this.$props)},beforeUnmount:function(){var e=this.eventKey,t=this.vcTree.registerTreeNode;t&&t(e,null)},methods:{onSelectorClick:function(e){(0,this.vcTree.onNodeClick)(e,this),this.isSelectable()?this.onSelect(e):this.onCheck(e)},onSelectorDoubleClick:function(e){(0,this.vcTree.onNodeDoubleClick)(e,this)},onSelect:function(e){if(!this.isDisabled()){var t=this.vcTree.onNodeSelect;e.preventDefault(),t(e,this)}},onCheck:function(e){if(!this.isDisabled()){var t=this.disableCheckbox,n=this.checked,r=this.vcTree.onNodeCheck;if(this.isCheckable()&&!t)e.preventDefault(),r(e,this,!n)}},onMouseEnter:function(e){(0,this.vcTree.onNodeMouseEnter)(e,this)},onMouseLeave:function(e){(0,this.vcTree.onNodeMouseLeave)(e,this)},onContextMenu:function(e){(0,this.vcTree.onNodeContextMenu)(e,this)},onDragStart:function(e){var t=this.vcTree.onNodeDragStart;e.stopPropagation(),this.setState({dragNodeHighlight:!0}),t(e,this);try{e.dataTransfer.setData("text/plain","")}catch(n){}},onDragEnter:function(e){var t=this.vcTree.onNodeDragEnter;e.preventDefault(),e.stopPropagation(),t(e,this)},onDragOver:function(e){var t=this.vcTree.onNodeDragOver;e.preventDefault(),e.stopPropagation(),t(e,this)},onDragLeave:function(e){var t=this.vcTree.onNodeDragLeave;e.stopPropagation(),t(e,this)},onDragEnd:function(e){var t=this.vcTree.onNodeDragEnd;e.stopPropagation(),this.setState({dragNodeHighlight:!1}),t(e,this)},onDrop:function(e){var t=this.vcTree.onNodeDrop;e.preventDefault(),e.stopPropagation(),this.setState({dragNodeHighlight:!1}),t(e,this)},onExpand:function(e){(0,this.vcTree.onNodeExpand)(e,this)},setSelectHandle:function(e){this.selectHandle=e},getNodeChildren:function(){var e=this.children,t=R(e);return e.length,t.length,t},getNodeState:function(){var e=this.expanded;return this.isLeaf2()?null:e?"open":"close"},isLeaf2:function(){var e=this.isLeaf,t=this.loaded,n=this.vcTree.loadData,r=0!==this.getNodeChildren().length;return!1!==e&&(e||!n&&!r||n&&t&&!r)},isDisabled:function(){var e=this.disabled,t=this.vcTree.disabled;return!1!==e&&!(!t&&!e)},isCheckable:function(){var e=this.$props.checkable,t=this.vcTree.checkable;return!(!t||!1===e)&&t},syncLoadData:function(e){var t=e.expanded,n=e.loading,r=e.loaded,o=this.vcTree,i=o.loadData,a=o.onNodeLoad;n||i&&t&&!this.isLeaf2()&&(0!==this.getNodeChildren().length||r||a(this))},isSelectable:function(){var e=this.selectable,t=this.vcTree.selectable;return"boolean"==typeof e?e:t},renderSwitcher:function(){var e=this.expanded,t=this.vcTree.prefixCls,n=u(this,"switcherIcon",{},!1)||u(this.vcTree,"switcherIcon",{},!1);if(this.isLeaf2())return f("span",{key:"switcher",class:d("".concat(t,"-switcher"),"".concat(t,"-switcher-noop"))},["function"==typeof n?n(T(T(T({},this.$props),this.$props.dataRef),{isLeaf:!0})):n]);var r=d("".concat(t,"-switcher"),"".concat(t,"-switcher_").concat(e?"open":"close"));return f("span",{key:"switcher",onClick:this.onExpand,class:r},["function"==typeof n?n(T(T(T({},this.$props),this.$props.dataRef),{isLeaf:!1})):n])},renderCheckbox:function(){var e=this.checked,t=this.halfChecked,n=this.disableCheckbox,r=this.vcTree.prefixCls,o=this.isDisabled(),i=this.isCheckable();if(!i)return null;var a="boolean"!=typeof i?i:null;return f("span",{key:"checkbox",class:d("".concat(r,"-checkbox"),e&&"".concat(r,"-checkbox-checked"),!e&&t&&"".concat(r,"-checkbox-indeterminate"),(o||n)&&"".concat(r,"-checkbox-disabled")),onClick:this.onCheck},w(a)?a:{default:function(){return[a]}})},renderIcon:function(){var e=this.loading,t=this.vcTree.prefixCls;return f("span",{key:"icon",class:d("".concat(t,"-iconEle"),"".concat(t,"-icon__").concat(this.getNodeState()||"docu"),e&&"".concat(t,"-icon_loading"))},null)},renderSelector:function(){var e,t=this.selected,n=this.loading,r=this.dragNodeHighlight,o=u(this,"icon",{},!1),i=this.vcTree,a=i.prefixCls,c=i.showIcon,s=i.icon,l=i.draggable,h=i.loadData,p=this.isDisabled(),v=u(this,"title",{},!1),y="".concat(a,"-node-content-wrapper");if(c){var b=o||s;e=b?f("span",{class:d("".concat(a,"-iconEle"),"".concat(a,"-icon__customize"))},["function"==typeof b?b(T(T({},this.$props),this.$props.dataRef)):b]):this.renderIcon()}else h&&n&&(e=this.renderIcon());var g=v,m=f("span",{class:"".concat(a,"-title")},g?["function"==typeof g?g(T(T({},this.$props),this.$props.dataRef)):g]:w("---")?"---":{default:function(){return["---"]}});return f("span",{key:"selector",ref:this.setSelectHandle,title:"string"==typeof v?v:"",class:d("".concat(y),"".concat(y,"-").concat(this.getNodeState()||"normal"),!p&&(t||r)&&"".concat(a,"-node-selected"),!p&&l&&"draggable"),draggable:!p&&l||void 0,"aria-grabbed":!p&&l||void 0,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onContextmenu:this.onContextMenu,onClick:this.onSelectorClick,onDblclick:this.onSelectorDoubleClick,onDragstart:l?this.onDragStart:x},[e,m])},renderChildren:function(){var e=this.expanded,t=this.pos,n=this.vcTree,r=n.prefixCls,o=n.openTransitionName,i=n.openAnimation,a=n.renderTreeNode,c={};o?c=p(o):"object"===S(i)&&(c=T(T(T({},i),{css:!1}),c));var s,l=this.getNodeChildren();return 0===l.length?null:(e&&(s=f("ul",{class:d("".concat(r,"-child-tree"),e&&"".concat(r,"-child-tree-open")),"data-expanded":e,role:"group"},[G(l,(function(e,n){return a(e,n,t)}))])),f(v,c,w(s)?s:{default:function(){return[s]}}))}},render:function(){var e;this.children=y(this);var t=this.$props,n=t.dragOver,r=t.dragOverGapTop,o=t.dragOverGapBottom,i=t.isLeaf,a=t.expanded,c=t.selected,s=t.checked,l=t.halfChecked,u=t.loading,d=this.vcTree,h=d.prefixCls,p=d.filterTreeNode,v=d.draggable,b=this.isDisabled(),g=ee(T(T({},this.$props),this.$attrs)),m=this.$attrs,k=m.class,O=m.style;return f("li",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({class:(e={className:k},D(e,"".concat(h,"-treenode-disabled"),b),D(e,"".concat(h,"-treenode-switcher-").concat(a?"open":"close"),!i),D(e,"".concat(h,"-treenode-checkbox-checked"),s),D(e,"".concat(h,"-treenode-checkbox-indeterminate"),l),D(e,"".concat(h,"-treenode-selected"),c),D(e,"".concat(h,"-treenode-loading"),u),D(e,"drag-over",!b&&n),D(e,"drag-over-gap-top",!b&&r),D(e,"drag-over-gap-bottom",!b&&o),D(e,"filter-node",p&&p(this)),e),style:O,role:"treeitem",onDragenter:v?this.onDragEnter:x,onDragover:v?this.onDragOver:x,onDragleave:v?this.onDragLeave:x,onDrop:v?this.onDrop:x,onDragend:v?this.onDragEnd:x},g),[this.renderSwitcher(),this.renderCheckbox(),this.renderSelector(),this.renderChildren()])}});function N(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||M(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||M(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=M(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function M(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}C.isTreeNode=1;function B(e,t){var n=e.slice(),r=n.indexOf(t);return r>=0&&n.splice(r,1),n}function I(e,t){var n=e.slice();return-1===n.indexOf(t)&&n.push(t),n}function $(e){return e.split("-")}function H(e,t){return"".concat(e,"-").concat(t)}function K(e){return e.type&&e.type.isTreeNode}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.filter(K)}function z(e){var t=b(e)||{},n=t.disabled,r=t.disableCheckbox,o=t.checkable;return!(!n&&!r)||!1===o}function V(e,t){!function n(r,o,i){var a=r?y(r):e,c=r?H(i.pos,o):0,s=R(a);if(r){var l=r.key;l||null!=l||(l=c);var u={node:r,index:o,pos:c,key:l,parentPos:i.node?i.pos:null};t(u)}s.forEach((function(e,t){n(e,t,{node:r,pos:c})}))}(null)}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.map(t);return 1===n.length?n[0]:n}function W(e,t){var n=b(t),r=n.eventKey,o=n.pos,i=[];return V(e,(function(e){var t=e.key;i.push(t)})),i.push(r||o),i}function F(e,t){var n=e.clientY,r=t.selectHandle.getBoundingClientRect(),o=r.top,i=r.bottom,a=r.height,c=Math.max(.25*a,2);return n<=o+c?-1:n>=i-c?1:0}function U(e,t){if(e)return t.multiple?e.slice():e.length?[e[0]]:e}var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return A(A({},e),{class:e.class||e.className,style:e.style,key:e.key})};function Y(e,t){if(!e)return[];var n=(t||{}).processProps,r=void 0===n?J:n;return(Array.isArray(e)?e:[e]).map((function(e){var n,o=e.children,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["children"]),a=Y(o,t);return f(C,r(i),"function"==typeof(n=a)||"[object Object]"===Object.prototype.toString.call(n)&&!h(n)?a:{default:function(){return[a]}})}))}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.initWrapper,r=t.processEntity,o=t.onProcessFinished,i=new Map,a=new Map,c={posEntities:i,keyEntities:a};return n&&(c=n(c)||c),V(e,(function(e){var t=e.node,n=e.index,o=e.pos,s=e.key,l=e.parentPos,u={node:t,index:n,key:s,pos:o};i.set(o,u),a.set(s,u),u.parent=i.get(l),u.parent&&(u.parent.children=u.parent.children||[],u.parent.children.push(u)),r&&r(u,c)})),o&&o(c),c}function q(e){if(!e)return null;var t;if(Array.isArray(e))t={checkedKeys:e,halfCheckedKeys:void 0};else{if("object"!==L(e))return null;t={checkedKeys:e.checked||void 0,halfCheckedKeys:e.halfChecked||void 0}}return t}function Q(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new Map,i=new Map;function a(e){if(o.get(e)!==t){var r=n.get(e);if(r){var c=r.children,s=r.parent;if(!z(r.node)){var l=!0,u=!1;(c||[]).filter((function(e){return!z(e.node)})).forEach((function(e){var t=e.key,n=o.get(t),r=i.get(t);(n||r)&&(u=!0),n||(l=!1)})),t?o.set(e,l):o.set(e,!1),i.set(e,u),s&&a(s.key)}}}}function c(e){if(o.get(e)!==t){var r=n.get(e);if(r){var i=r.children;z(r.node)||(o.set(e,t),(i||[]).forEach((function(e){c(e.key)})))}}}function s(e){var r=n.get(e);if(r){var i=r.children,s=r.parent,l=r.node;o.set(e,t),z(l)||((i||[]).filter((function(e){return!z(e.node)})).forEach((function(e){c(e.key)})),s&&a(s.key))}}(r.checkedKeys||[]).forEach((function(e){o.set(e,!0)})),(r.halfCheckedKeys||[]).forEach((function(e){i.set(e,!0)})),(e||[]).forEach((function(e){s(e)}));var l,u=[],f=[],d=E(o);try{for(d.s();!(l=d.n()).done;){var h=P(l.value,2),p=h[0],v=h[1];v&&u.push(p)}}catch(O){d.e(O)}finally{d.f()}var y,b=E(i);try{for(b.s();!(y=b.n()).done;){var g=P(y.value,2),m=g[0],k=g[1];!o.get(m)&&k&&f.push(m)}}catch(O){b.e(O)}finally{b.f()}return{checkedKeys:u,halfCheckedKeys:f}}function X(e,t){var n=new Map;function r(e){if(!n.get(e)){var o=t.get(e);if(o){n.set(e,!0);var i=o.parent,a=o.node,c=b(a);c&&c.disabled||i&&r(i.key)}}}return(e||[]).forEach((function(e){r(e)})),N(n.keys())}function ee(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)||(t[n]=e[n]),t}),{})}export{O as F,C as T,Z as a,Q as b,Y as c,X as d,U as e,B as f,W as g,F as h,I as i,$ as j,ee as k,H as l,G as m,R as n,q as p};