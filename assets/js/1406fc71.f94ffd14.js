"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[5935],{9145:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return l},frontMatter:function(){return s},metadata:function(){return r},toc:function(){return d}});var r=JSON.parse('{"id":"webdev/dal/index","title":"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0421\u043b\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a\xa0\u0434\u0430\u043d\u043d\u044b\u043c \u0438\xa0\u0441\u043b\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441\xad\u2011\u043b\u043e\u0433\u0438\u043a\u0438","description":"\u0423\u0414\u041a\xa0004.02","source":"@site/docs/webdev/3-dal/index.mdx","sourceDirName":"webdev/3-dal","slug":"/webdev/dal/","permalink":"/webdev/dal/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_custom_props":{"number":"3"},"title":"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0421\u043b\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a\xa0\u0434\u0430\u043d\u043d\u044b\u043c \u0438\xa0\u0441\u043b\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441\xad\u2011\u043b\u043e\u0433\u0438\u043a\u0438"},"sidebar":"mySidebar","previous":{"title":"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f","permalink":"/webdev/db/example"},"next":{"title":"\u0426\u0435\u043b\u044c \u0440\u0430\u0431\u043e\u0442\u044b","permalink":"/webdev/dal/purpose"}}'),o=t(4848),i=t(8453);const s={sidebar_custom_props:{number:"3"},title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0421\u043b\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a\xa0\u0434\u0430\u043d\u043d\u044b\u043c \u0438\xa0\u0441\u043b\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441\xad\u2011\u043b\u043e\u0433\u0438\u043a\u0438"},u="\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0421\u043b\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a\xa0\u0434\u0430\u043d\u043d\u044b\u043c \u0438\xa0\u0441\u043b\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441\xad\u2011\u043b\u043e\u0433\u0438\u043a\u0438",c={},d=[];function a(e){const n={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u0432\u0435\u0431\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0441\u043b\u043e\u0439-\u0434\u043e\u0441\u0442\u0443\u043f\u0430-\u043a\u0434\u0430\u043d\u043d\u044b\u043c-\u0438\u0441\u043b\u043e\u0439-\u0431\u0438\u0437\u043d\u0435\u0441\u043b\u043e\u0433\u0438\u043a\u0438",children:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0421\u043b\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a\xa0\u0434\u0430\u043d\u043d\u044b\u043c \u0438\xa0\u0441\u043b\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441\xad\u2011\u043b\u043e\u0433\u0438\u043a\u0438"})}),"\n",(0,o.jsx)(n.p,{children:"\u0423\u0414\u041a\xa0004.02"}),"\n",(0,o.jsx)(n.p,{children:"\xa9\xa0\u041a\u0430\u0440\u0430\u0432\u0430\u0435\u0432\xa0\u0421.\xa0\u0412., 2023"})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:function(e,n,t){t.d(n,{R:function(){return s},x:function(){return u}});var r=t(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);