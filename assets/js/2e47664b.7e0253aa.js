"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[4637],{106:function(n,e,s){s.r(e),s.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return a},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return d}});var t=s(4848),i=s(8453);const r={sidebar_custom_props:{number:"3"},title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435"},c="\u0417\u0430\u0434\u0430\u043d\u0438\u0435",o={id:"infosec/xss/task",title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435",description:"1. \u0418\u0437\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f.",source:"@site/docs/infosec/3-xss/task.mdx",sourceDirName:"infosec/3-xss",slug:"/infosec/xss/task",permalink:"/infosec/xss/task",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_custom_props:{number:"3"},title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435"},sidebar:"mySidebar",previous:{title:"\u0426\u0435\u043b\u044c \u0440\u0430\u0431\u043e\u0442\u044b",permalink:"/infosec/xss/purpose"},next:{title:"\u0422\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f",permalink:"/infosec/xss/theory"}},l={},d=[];function u(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u0437\u0430\u0434\u0430\u043d\u0438\u0435",children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u0418\u0437\u0443\u0447\u0438\u0442\u044c ",(0,t.jsx)(e.a,{href:"/infosec/xss/theory",children:"\u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u0412\xa0",(0,t.jsx)("i",{lang:"en",children:"DVWA"})," \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u044f ",(0,t.jsx)("i",{lang:"en",children:"XSS (reflected)"})," \u0438\xa0",(0,t.jsx)("i",{lang:"en",children:"XSS (stored)"})," \u0434\u043b\u044f \u0442\u0440\u0451\u0445 \u043d\u0438\u0436\u043d\u0438\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 (",(0,t.jsx)("i",{lang:"en",children:"low"}),", ",(0,t.jsx)("i",{lang:"en",children:"medium"}),", ",(0,t.jsx)("i",{lang:"en",children:"high"}),"). \u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 ",(0,t.jsx)("i",{lang:"en",children:"DVWA security"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u0423\u0441\u0442\u0440\u0430\u043d\u0438\u0442\u044c \u0443\u044f\u0437\u0432\u0438\u043c\u043e\u0441\u0442\u0438 \u0434\u043b\u044f ",(0,t.jsx)("i",{lang:"en",children:"XSS"})," \u043d\u0430 \u0432\u0435\u0431\xad\u2011\u0441\u0430\u0439\u0442\u0435, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u043d\u0435\u0435 \u0432\xa0\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\xa0\u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u0434\u0430\u043d\u0438\u0435\u043c. \u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0441\xa0\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445, \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u043c\u044b\u0445 \u0438\u0437 \u0411\u0414 (\u0444\u0430\u0439\u043b\u044b ",(0,t.jsx)(e.code,{children:"index.php"}),", ",(0,t.jsx)(e.code,{children:"edit.php"}),")."]}),"\n",(0,t.jsx)(e.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"caution",children:(0,t.jsxs)(e.p,{children:["\u0414\u043b\u044f\xa0\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \xab4\xbb (\xab\u0445\u043e\u0440\u043e\u0448\u043e\xbb) \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u043d\u0435\u0434\u0440\u0438\u0442\u044c \u0437\u0430\u0449\u0438\u0442\u0443 \u043e\u0442 ",(0,t.jsx)("i",{lang:"en",children:"XSS"})," \u043a\u0430\u043a \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u044f\u0437\u044b\u043a\u0430 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438 (",(0,t.jsx)(e.code,{children:"<\u0438\u043c\u044f_\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430>"}),(0,t.jsx)(e.strong,{children:"\u0437\u0434\u0435\u0441\u044c"}),(0,t.jsx)(e.code,{children:"</\u0438\u043c\u044f_\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430>"}),"), \u0442\u0430\u043a \u0438\xa0\u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432  (",(0,t.jsx)(e.code,{children:'<\u0438\u043c\u044f_\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0438\u043c\u044f_\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430="'}),(0,t.jsx)(e.strong,{children:"\u0437\u0434\u0435\u0441\u044c"}),(0,t.jsx)(e.code,{children:'">...</\u0438\u043c\u044f_\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430>'}),"). \u0414\u043b\u044f\xa0\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u0449\u0438\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\xa0\u043f\u043e\u043b\u044f\u043c\u0438 \u0432\u0432\u043e\u0434\u0430 (",(0,t.jsx)(e.code,{children:"<input>"}),"), \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0438\u0437 \u0411\u0414."]})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u0414\u043b\u044f\xa0\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \xab5\xbb (\xab\u043e\u0442\u043b\u0438\u0447\u043d\u043e\xbb) \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\xa0\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\xa0\u0432\u044b\u0448\u0435\u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u043c \u0437\u0430\u0434\u0430\u043d\u0438\u044f\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c 6\xa0\u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u043d\u0430 \u0432\u0435\u0431\xad\u2011\u0441\u0430\u0439\u0442\u0435 ",(0,t.jsx)(e.a,{href:"https://xss-game.appspot.com/",children:"XSS game"}),"."]}),"\n"]}),"\n"]}),"\n","\n","\n","\n"]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},8453:function(n,e,s){s.d(e,{R:function(){return c},x:function(){return o}});var t=s(6540);const i={},r=t.createContext(i);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);