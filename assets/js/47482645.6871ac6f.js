"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[9235],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),f=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),l=f(r),m=o,y=l["".concat(u,".").concat(m)]||l[m]||p[m]||c;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[l]="string"==typeof e?e:o,i[1]=a;for(var f=2;f<c;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return f}});var n=r(7462),o=(r(7294),r(3905));const c={},i="\u0417\u0430\u0434\u0430\u043d\u0438\u0435",a={unversionedId:"infosec/02-csrf/task",id:"infosec/02-csrf/task",title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435",description:"1. \u0423\u0441\u0442\u0440\u0430\u043d\u0438\u0442\u044c \u0443\u044f\u0437\u0432\u0438\u043c\u043e\u0441\u0442\u0438 \u0434\u043b\u044f CSRF \u0432\xa0\u0441\u0432\u043e\u0451\u043c \u0440\u0430\u043d\u0435\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u043e\u043c \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u044f\u0437\u044b\u043a\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u044f\u0437\u044b\u043a\u0430 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438 HTML, web framework\u2019\u0430 \u0438\u043b\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438.",source:"@site/docs/infosec/02-csrf/task.mdx",sourceDirName:"infosec/02-csrf",slug:"/infosec/02-csrf/task",permalink:"/infosec/02-csrf/task",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0426\u0435\u043b\u044c \u0440\u0430\u0431\u043e\u0442\u044b",permalink:"/infosec/02-csrf/purpose"},next:{title:"\u0422\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f",permalink:"/infosec/02-csrf/theory"}},u={},f=[],s={toc:f},l="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0437\u0430\u0434\u0430\u043d\u0438\u0435"},"\u0417\u0430\u0434\u0430\u043d\u0438\u0435"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u0423\u0441\u0442\u0440\u0430\u043d\u0438\u0442\u044c \u0443\u044f\u0437\u0432\u0438\u043c\u043e\u0441\u0442\u0438 \u0434\u043b\u044f ",(0,o.kt)("i",{lang:"en"},"CSRF")," \u0432\xa0\u0441\u0432\u043e\u0451\u043c \u0440\u0430\u043d\u0435\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u043e\u043c \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u044f\u0437\u044b\u043a\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u044f\u0437\u044b\u043a\u0430 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438 ",(0,o.kt)("i",{lang:"en"},"HTML"),", ",(0,o.kt)("i",{lang:"en"},"web framework"),"\u2019\u0430 \u0438\u043b\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438.")))}p.isMDXComponent=!0}}]);