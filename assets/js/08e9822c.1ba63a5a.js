"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[4346],{28453:function(e,n,t){t.d(n,{R:function(){return c},x:function(){return o}});var r=t(96540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}},85575:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return a},frontMatter:function(){return c},metadata:function(){return r},toc:function(){return d}});var r=JSON.parse('{"id":"swe/metrics/task","title":"\u0417\u0430\u0434\u0430\u043d\u0438\u0435","description":"1. \u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043e\u0434\u043d\u043e\u0439, \u0434\u0432\u0443\u0445 \u0438\u043b\u0438 \u0442\u0440\u0451\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 (\u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \xab3\xbb, \xab4\xbb, \xab5\xbb \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e), \u043a\u043e\u0442\u043e\u0440\u044b\u0439","source":"@site/docs/swe/9-metrics/task.mdx","sourceDirName":"swe/9-metrics","slug":"/swe/metrics/task","permalink":"/swe/metrics/task","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_custom_props":{"number":"9"},"title":"\u0417\u0430\u0434\u0430\u043d\u0438\u0435"},"sidebar":"mySidebar","previous":{"title":"\u0426\u0435\u043b\u044c \u0440\u0430\u0431\u043e\u0442\u044b","permalink":"/swe/metrics/purpose"},"next":{"title":"\u0422\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f","permalink":"/swe/metrics/theory"}}'),s=t(74848),i=t(28453);const c={sidebar_custom_props:{number:"9"},title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435"},o="\u0417\u0430\u0434\u0430\u043d\u0438\u0435",l={},d=[];function u(e){const n={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u0437\u0430\u0434\u0430\u043d\u0438\u0435",children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043e\u0434\u043d\u043e\u0439, \u0434\u0432\u0443\u0445 \u0438\u043b\u0438 \u0442\u0440\u0451\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 (\u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \xab3\xbb, \xab4\xbb, \xab5\xbb \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e), \u043a\u043e\u0442\u043e\u0440\u044b\u0439"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0449\u0435\u043c \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 (\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f ",(0,s.jsx)("i",{lang:"en",children:"Python"}),");"]}),"\n",(0,s.jsx)(n.li,{children:"\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u0430\u0440\u0430\u0434\u0438\u0433\u043c\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f;"}),"\n",(0,s.jsxs)(n.li,{children:["\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0443\u0441\u043b\u043e\u0432\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,s.jsx)(n.code,{children:"if"}),"...",(0,s.jsx)(n.code,{children:"else"}),") \u0438\xa0\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0446\u0438\u043a\u043b\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,s.jsx)(n.code,{children:"for"}),", ",(0,s.jsx)(n.code,{children:"while"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u0414\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u043d\u0435\u0435."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u0412\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c ",(0,s.jsx)("i",{lang:"en",children:"PSS"}),", ",(0,s.jsx)("i",{lang:"en",children:"LSS"}),", \u0438\u043d\u0434\u0435\u043a\u0441 \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u0435\u043c\u043e\u0441\u0442\u0438."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u0412\xa0\u0446\u0435\u043b\u044f\u0445 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u0430 \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u0435\u043c\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 (\u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u0443) \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u0421\u0440\u0430\u0432\u043d\u0438\u0442\u044c \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0434\u043e \u0438\xa0\u043f\u043e\u0441\u043b\u0435 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0430."}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);