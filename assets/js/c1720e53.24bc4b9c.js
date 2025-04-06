"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[7069],{1470:function(e,n,r){r.d(n,{A:function(){return k}});var l=r(6540),s=r(4164),t=r(3104),i=r(6347),a=r(205),c=r(7485),o=r(1682),d=r(679);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:s}}=e;return{value:n,label:r,attributes:l,default:s}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(t),(0,l.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,t=h(e),[i,c]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:t}))),[o,u]=m({queryString:r,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,d.Dv)(r);return[s,(0,l.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:s}),f=(()=>{const e=o??x;return p({value:e,tabValues:t})?e:null})();(0,a.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,t]),tabValues:t}}var j=r(2303),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=r(4848);function g(e){let{className:n,block:r,selectedValue:l,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),s=a[r].value;s!==l&&(o(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...t,className:(0,s.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(y,{...n,...e})]})}function k(e){const n=(0,j.A)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(n))}},1783:function(e,n,r){r.d(n,{D:function(){return s},$:function(){return t}});r(6540);var l=r(4848);function s(e){let{children:n}=e;return(0,l.jsx)("figure",{children:n})}function t(e){let{children:n}=e;return(0,l.jsx)("figcaption",{children:n})}},8453:function(e,n,r){r.d(n,{R:function(){return i},x:function(){return a}});var l=r(6540);const s={},t=l.createContext(s);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(t.Provider,{value:n},e.children)}},8726:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var l=JSON.parse('{"id":"webdev/docker/example/mysql","title":"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f MySQL","description":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 pdo_mysql","source":"@site/docs/webdev/0-docker/example/3-mysql.mdx","sourceDirName":"webdev/0-docker/example","slug":"/webdev/docker/example/mysql","permalink":"/webdev/docker/example/mysql","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_custom_props":{"number":"3"},"title":"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f MySQL"},"sidebar":"mySidebar","previous":{"title":"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f PHP","permalink":"/webdev/docker/example/php"},"next":{"title":"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f phpMyAdmin","permalink":"/webdev/docker/example/phpmyadmin"}}'),s=r(4848),t=r(8453),i=(r(1783),r(9365)),a=r(1470);const c={sidebar_custom_props:{number:"3"},title:"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f MySQL"},o="\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f MySQL",d={},u=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 <code>pdo_mysql</code>",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-pdo_mysql",level:2},{value:"\u0421\u0431\u043e\u0440\u043a\u0430 \u043e\u0431\u0440\u0430\u0437\u0430 <i>MySQL</i>",id:"\u0441\u0431\u043e\u0440\u043a\u0430-\u043e\u0431\u0440\u0430\u0437\u0430-mysql",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f-mysql",children:["\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f ",(0,s.jsx)("i",{lang:"en",children:"MySQL"})]})}),"\n",(0,s.jsxs)(n.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-pdo_mysql",children:["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 ",(0,s.jsx)(n.code,{children:"pdo_mysql"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u0412\xa0\u0433\u043e\u0441\u0442\u0435\u0432\u043e\u0439 \u041e\u0421 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0441\xa0\u043c\u043e\u0434\u0443\u043b\u0435\u043c ",(0,s.jsx)("i",{lang:"en",children:"PHP"})," ",(0,s.jsx)(n.code,{children:"pdo_mysql"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0434\u0440\u0430\u0439\u0432\u0435\u0440, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0439 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 ",(0,s.jsx)("i",{lang:"en",children:"PDO"})," \u0441\xa0",(0,s.jsx)("i",{lang:"en",children:"MySQL"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u0412\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c ",(0,s.jsx)(n.a,{href:"https://pkgs.alpinelinux.org/packages?name=*pdo_mysql",children:"\u043f\u043e\u0438\u0441\u043a\u043e\u043c"})," \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0434\u043b\u044f \u041e\u0421 ",(0,s.jsx)("i",{lang:"en",children:"Alpine Linux"}),", \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0439\u0442\u0438 \u043f\u0430\u043a\u0435\u0442 ",(0,s.jsx)(n.code,{children:"pdo_mysql"})," \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0439 \u043d\u0430\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u0438 ",(0,s.jsx)("i",{lang:"en",children:"PHP"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0421\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 ",(0,s.jsx)(n.code,{children:"php84-pdo_mysql"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u041f\u0440\u0438\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u0439\u043b ",(0,s.jsx)(n.code,{children:"php/Dockerfile"})," \u043a\xa0\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u0432\u0438\u0434\u0443:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Dockerfile",metastring:'title="\u0424\u0430\u0439\u043b php/Dockerfile" {5-8}',children:'FROM php:8.4-fpm-alpine\n\nRUN cp "${PHP_INI_DIR}/php.ini-development" "${PHP_INI_DIR}/php.ini"\n\nRUN sed -i \'s/max_execution_time = 30/max_execution_time = 180/\' "${PHP_INI_DIR}/php.ini"\n\nRUN apk add --no-cache -- \\\n        php84-pdo_mysql \\\n    && docker-php-ext-install \\\n        pdo_mysql\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f ",(0,s.jsx)(n.code,{children:"RUN"})," \u0432\xa0",(0,s.jsx)(n.code,{children:"Dockerfile"})," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432\xa0\u0433\u043e\u0441\u0442\u0435\u0432\u043e\u0439 \u041e\u0421 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u043e\u0431\u0440\u0430\u0437\u0430. \u0412\xa0\u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\xa0",(0,s.jsx)("i",{lang:"en",children:"Alpine Linux"})," \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 ",(0,s.jsx)(n.code,{children:"apk"})," \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d (",(0,s.jsx)(n.code,{children:"add"}),") \u043f\u0430\u043a\u0435\u0442 ",(0,s.jsx)(n.code,{children:"php84-pdo_mysql"}),". \u042d\u0442\u043e\u0442 \u043f\u0430\u043a\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043c\u043e\u0434\u0443\u043b\u044c ",(0,s.jsx)("i",{lang:"en",children:"PHP"})," ",(0,s.jsx)(n.code,{children:"pdo_mysql"}),". \u0427\u0442\u043e\u0431\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\xa0\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u0441\u044f \u0443\u0442\u0438\u043b\u0438\u0442\u043e\u0439 ",(0,s.jsx)(n.code,{children:"docker-php-ext-install"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u0432\xa0\u043e\u0431\u0440\u0430\u0437\u044b ",(0,s.jsx)(n.code,{children:"php"}),". \u041a\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e (",(0,s.jsx)(n.code,{children:"--no-cache"}),"), \u0447\u0442\u043e\u0431\u044b ",(0,s.jsx)(n.code,{children:"apk"})," \u0441\u043a\u0430\u0447\u0430\u043b \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438\u0437 \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430, \u043d\u043e \u043d\u0435\xa0\u043a\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043b \u0435\u0433\u043e \u0438\xa0\u043d\u0435\xa0\u0440\u0430\u0437\u0434\u0443\u0432\u0430\u043b \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u043e\u0431\u044a\u0451\u043c \u043e\u0431\u0440\u0430\u0437\u0430."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u041f\u0435\u0440\u0435\u0441\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0431\u0440\u0430\u0437."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker image remove project:php\ndocker image build --tag=project:php -- ./php\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u0441\u0431\u043e\u0440\u043a\u0430-\u043e\u0431\u0440\u0430\u0437\u0430-mysql",children:["\u0421\u0431\u043e\u0440\u043a\u0430 \u043e\u0431\u0440\u0430\u0437\u0430 ",(0,s.jsx)("i",{lang:"en",children:"MySQL"})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u0412\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,s.jsx)(n.code,{children:"mysql"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u0412\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 ",(0,s.jsx)(n.code,{children:"mysql"})," \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0444\u0430\u0439\u043b ",(0,s.jsx)(n.code,{children:"Dockerfile"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432\xa0",(0,s.jsx)(n.code,{children:"Dockerfile"})," \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e ",(0,s.jsx)(n.code,{children:"FROM"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Dockerfile",metastring:'title="\u0424\u0430\u0439\u043b mysql/Dockerfile"',children:"FROM mysql:8.4\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u0434\u0430\u0439\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043d\u0430 \u0441\u0431\u043e\u0440\u043a\u0443 \u043d\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u0440\u0430\u0437\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u044b. \u041e\u0431\u0440\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d \u043d\u0430 \u043d\u043e\u0441\u0438\u0442\u0435\u043b\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker image build --tag=project:mysql -- ./mysql/\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u0434\u0430\u0439\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043d\u0430 \u0437\u0430\u043f\u0443\u0441\u043a \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430."}),"\n",(0,s.jsxs)(a.A,{defaultValue:"windows",groupId:"cli",children:[(0,s.jsx)(i.A,{attributes:{className:"fa-brands fa-apple"},label:"macOS",value:"macos",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker container run \\\n  --detach \\\n  --env=MYSQL_ROOT_PASSWORD=1 \\\n  --name=project-mysql \\\n  --publish=3306:3306 \\\n  -- \\\n  project:mysql\n"})})}),(0,s.jsx)(i.A,{attributes:{className:"fa-brands fa-ubuntu"},label:"Ubuntu",value:"ubuntu",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker container run \\\n  --detach \\\n  --env=MYSQL_ROOT_PASSWORD=1 \\\n  --name=project-mysql \\\n  --publish=3306:3306 \\\n  -- \\\n  project:mysql\n"})})}),(0,s.jsx)(i.A,{attributes:{className:"fa-brands fa-microsoft"},label:"Windows\xa011",value:"windows",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-batch",children:"docker container run ^\n  --detach ^\n  --env=MYSQL_ROOT_PASSWORD=1 ^\n  --name=project-mysql ^\n  --publish=3306:3306 ^\n  -- ^\n  project:mysql\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u041e\u043f\u0446\u0438\u044f ",(0,s.jsx)(n.code,{children:"--env"})," \u0437\u0430\u0434\u0430\u0451\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0432\xa0\u0433\u043e\u0441\u0442\u0435\u0432\u043e\u0439 \u041e\u0421. \u0422\u0430\u043a\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f ",(0,s.jsx)(n.code,{children:"MYSQL_ROOT_PASSWORD"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0421\u0423\u0411\u0414, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c \u0441\u0443\u043f\u0435\u0440\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."]}),"\n",(0,s.jsxs)(n.p,{children:["\u041e\u043f\u0446\u0438\u0438 ",(0,s.jsx)(n.code,{children:"--rm"})," \u043d\u0430 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u043d\u0435\u0442."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["\u041a\u043e\u0433\u0434\u0430 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 ",(0,s.jsx)(n.code,{children:"--rm"}),"?"]}),(0,s.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0431\u0435\u0437 \u043e\u043f\u0446\u0438\u0438 ",(0,s.jsx)(n.code,{children:"--rm"}),", \u0435\u0441\u043b\u0438 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u043c\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0432\xa0\u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0433\u043e\u0441\u0442\u0435\u0432\u043e\u0439 \u041e\u0421 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0430 \u0411\u0414."]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\xa0",(0,s.jsx)("i",{lang:"en",children:"PHP"})," \u0438\xa0\u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0438\u0437 \u043d\u0435\u0433\u043e \u043a\xa0\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0443 ",(0,s.jsx)("i",{lang:"en",children:"MySQL"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"<?php\n$dsn = 'mysql:host=172.17.0.1;port=3306;dbname=information_schema';\n$username = 'root';\n$password = '1';\n\n$connection = new PDO($dsn, $username, $password);\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:function(e,n,r){r.d(n,{A:function(){return i}});r(6540);var l=r(4164),s={tabItem:"tabItem_Ymn6"},t=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(s.tabItem,i),hidden:r,children:n})}}}]);