"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[469],{5162:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(7294),l=t(6010),r={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:t},a)}},4866:function(e,a,t){t.d(a,{Z:function(){return v}});var n=t(7462),l=t(7294),r=t(6010),o=t(2466),i=t(6550),s=t(1980),p=t(7392),u=t(12);function m(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function c(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??m(t);return function(e){const a=(0,p.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function k(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function b(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=c(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!k({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[s,p]=d({queryString:t,groupId:n}),[m,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,u.Nk)(t);return[n,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),N=(()=>{const e=s??m;return k({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{N&&i(N)}),[N]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!k({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),b(e)}),[p,b,r]),tabValues:r}}var N=t(2389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),c=e=>{const a=e.currentTarget,t=u.indexOf(a),n=p[t].value;n!==i&&(m(a),s(n))},k=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},p.map((e=>{let{value:a,label:t,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>u.push(e),onKeyDown:k,onClick:c},o,{className:(0,r.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===a})}),t??a)})))}function h(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function x(e){const a=b(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(g,(0,n.Z)({},e,a)),l.createElement(h,(0,n.Z)({},e,a)))}function v(e){const a=(0,N.Z)();return l.createElement(x,(0,n.Z)({key:String(a)},e))}},2713:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return b}});var n=t(7462),l=(t(7294),t(3905)),r=t(814),o=t(5162),i=t(4866),s='<VirtualHost *:80>\n    ServerName blog.bank.example\n    DocumentRoot "/var/www/blog.bank.example/"\n</VirtualHost>\n',p='<VirtualHost *:80>\n    ServerName online.bank.example\n    DocumentRoot "/var/www/online.bank.example/"\n</VirtualHost>\n',u='<VirtualHost *:80>\n    ServerName blog.bank.example\n    DocumentRoot "C:\\xampp\\htdocs\\blog.bank.example"\n</VirtualHost>\n\n<VirtualHost *:80>\n    ServerName online.bank.example\n    DocumentRoot "C:\\xampp\\htdocs\\online.bank.example"\n</VirtualHost>\n';const m={},c="\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f",k={unversionedId:"infosec/02-csrf/example",id:"infosec/02-csrf/example",title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f",description:"1. \u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u0432\u0435\u0431\xad\u2011\u0441\u0430\u0439\u0442\u043e\u0432.",source:"@site/docs/infosec/02-csrf/example.mdx",sourceDirName:"infosec/02-csrf",slug:"/infosec/02-csrf/example",permalink:"/infosec/02-csrf/example",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0422\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f",permalink:"/infosec/02-csrf/theory"},next:{title:"09.02.07\u2011\u0412\u0414. \u041c\u0414\u041a.09.01",permalink:"/laravel/"}},d={},b=[],N={toc:b},f="wrapper";function g(e){let{components:a,...t}=e;return(0,l.kt)(f,(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u0437\u0430\u0434\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u0432\u0435\u0431\xad\u2011\u0441\u0430\u0439\u0442\u043e\u0432."),(0,l.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,l.kt)(o.Z,{attributes:{className:"fa-brands fa-windows"},default:!0,label:"Windows",value:"windows",mdxType:"TabItem"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u0443\u044e \u043f\u0430\u043d\u0435\u043b\u044c ",(0,l.kt)("i",{lang:"en"},"XAMPP"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041d\u0430\u0436\u043c\u0451\u043c \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,l.kt)("i",{lang:"en"},"Explorer"),". \u0411\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442\u0430 \u043f\u0430\u043f\u043a\u0430, \u0432\xa0\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d ",(0,l.kt)("i",{lang:"en"},"XAMPP"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u043f\u0430\u043f\u043a\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"htdocs")," \u0438\xa0\u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043d\u0435\u0451 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"blog.bank.example")," \u0438\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"online.bank.example"),".")))),(0,l.kt)(o.Z,{attributes:{className:"fa-brands fa-ubuntu"},label:"Ubuntu",value:"ubuntu",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"li"},"\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0435\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"blog.bank.example")," \u0438\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"online.bank.example")," \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/www/"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo cp -R blog.bank.example /var/www/\nsudo cp -R online.bank.example /var/www/\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0445\u043e\u0441\u0442\u044b."),(0,l.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,l.kt)(o.Z,{attributes:{className:"fa-brands fa-windows"},default:!0,label:"Windows",value:"windows",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"li"},"\u041d\u0430\u0439\u0434\u0451\u043c \u0432\xa0\u043f\u0430\u043f\u043a\u0435, \u0432\xa0\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d ",(0,l.kt)("i",{lang:"en"},"XAMPP"),", \u0444\u0430\u0439\u043b ",(0,l.kt)("inlineCode",{parentName:"p"},"apache\\conf\\extra\\httpd-vhosts.conf")," \u0438\xa0\u0434\u043e\u0431\u0430\u0432\u0438\u043c \u0432\xa0\u043d\u0435\u0433\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e."),(0,l.kt)(r.Z,{language:"apache",showLineNumbers:!0,title:"\u0424\u0430\u0439\u043b apache\\conf\\extra\\httpd-vhosts.conf \u0432\xa0\u043f\u0430\u043f\u043a\u0435 XAMPP",mdxType:"CodeBlock"},u)),(0,l.kt)(o.Z,{attributes:{className:"fa-brands fa-ubuntu"},label:"Ubuntu",value:"ubuntu",mdxType:"TabItem"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043c \u0444\u0430\u0439\u043b\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"blog.bank.example.conf")," \u0438\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"online.bank.example.conf"),"."),(0,l.kt)(r.Z,{language:"apache",showLineNumbers:!0,title:"\u0424\u0430\u0439\u043b /etc/apache2/sites-available/blog.bank.example.conf",mdxType:"CodeBlock"},s),(0,l.kt)(r.Z,{language:"apache",showLineNumbers:!0,title:"\u0424\u0430\u0439\u043b /etc/apache2/sites-available/online.bank.example.conf",mdxType:"CodeBlock"},p)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0420\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u043c \u0444\u0430\u0439\u043b\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"blog.bank.example.conf")," \u0438\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"online.bank.example.conf")," \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/apache2/sites-available/"),"."))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo cp blog.bank.example.conf /etc/apache2/sites-available/\nsudo cp online.bank.example.conf /etc/apache2/sites-available/\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043c ",(0,l.kt)("i",{lang:"en"},"Apache")," \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u0430\u0432\u043a\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438."),(0,l.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,l.kt)(o.Z,{attributes:{className:"fa-brands fa-windows"},default:!0,label:"Windows",value:"windows",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"li"},"\u041d\u0430\xa0\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438 ",(0,l.kt)("i",{lang:"en"},"XAMPP")," \u043d\u0430\u0436\u043c\u0451\u043c \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,l.kt)("i",{lang:"en"},"Start")," \u043d\u0430\u043f\u0440\u043e\u0442\u0438\u0432 ",(0,l.kt)("i",{lang:"en"},"Apache"),".")),(0,l.kt)(o.Z,{attributes:{className:"fa-brands fa-ubuntu"},label:"Ubuntu",value:"ubuntu",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo a2ensite blog.bank.example.conf\nsudo a2ensite online.bank.example.conf\nsudo systemctl reload apache2\n")))),(0,l.kt)("admonition",{parentName:"li",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u0421\u0438\u043c\u0432\u043e\u043b, \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0439 \u0438\u043c\u0435\u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\xa0\u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u0443\u0442\u0438, \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b (\u041e\u0421):"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u0432\xa0\u041e\u0421, \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u043d\u0430 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043e\u0432 ",(0,l.kt)("i",{lang:"en"},"POSIX"),", \u0432\xa0\u0442.\xa0\u0447. ",(0,l.kt)("i",{lang:"en"},"Linux")," \u0438\xa0",(0,l.kt)("i",{lang:"en"},"macOS"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043a\u043e\u0441\u0443\u044e \u0447\u0435\u0440\u0442\u0443 (\xab/\xbb; \u0430\u043d\u0433\u043b. ",(0,l.kt)("i",{lang:"en"},"slash"),");"),(0,l.kt)("li",{parentName:"ul"},"\u0432\xa0",(0,l.kt)("i",{lang:"en"},"Windows")," \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",(0,l.kt)("em",{parentName:"li"},"\u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f")," \u043a\u043e\u0441\u0430\u044f \u0447\u0435\u0440\u0442\u0430 (\xab\\\xbb; \u0430\u043d\u0433\u043b. ",(0,l.kt)("i",{lang:"en"},"backslash"),"), \u0430\xa0\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c (\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u043c)\xa0\u2014 \u043e\u0431\u044b\u0447\u043d\u0430\u044f \u043a\u043e\u0441\u0430\u044f \u0447\u0435\u0440\u0442\u0430.")),(0,l.kt)("p",{parentName:"admonition"},"\u041f\u0443\u0442\u044c \u043a\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443 (\u043f\u0430\u043f\u043a\u0435) \u043f\u0440\u0438\u043d\u044f\u0442\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0442\u044c \u044d\u0442\u0438\u043c\xa0\u0436\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Windows\\"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/")," \u0438\xa0\u0442.\xa0\u043f. \u041e\u0434\u043d\u0430\u043a\u043e ",(0,l.kt)("span",null,"\u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u043a\u043e\u0441\u0430\u044f \u0447\u0435\u0440\u0442\u0430 \u0432\xa0\u043a\u043e\u043d\u0446\u0435 \u0441\u0442\u0440\u043e\u043a\u0438"),", \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0449\u0435\u0439 \u043f\u0443\u0442\u044c \u0432\xa0\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 ",(0,l.kt)("i",{lang:"en"},"Apache"),", \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u043e\u0439:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"AH00526: Syntax error... DocumentRoot must be a directory\n")),(0,l.kt)("p",{parentName:"admonition"},"\u0418\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443 \u043c\u043e\u0436\u043d\u043e \u0434\u0432\u0443\u043c\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u043a\u043e\u0441\u0443\u044e \u0447\u0435\u0440\u0442\u0443 (\xab\\\xbb), \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d\u043d\u0443\u044e \u0432\xa0\u043a\u043e\u043d\u0446\u0435 \u0441\u0442\u0440\u043e\u043a\u0438;"),(0,l.kt)("li",{parentName:"ul"},"\u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0435 \u043a\u043e\u0441\u044b\u0435 \u0447\u0435\u0440\u0442\u044b\u0301 (\xab\\\xbb) \u0432\xa0\u0441\u0442\u0440\u043e\u043a\u0435 \u043d\u0430 \u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u043a\u043e\u0441\u044b\u0435 \u0447\u0435\u0440\u0442\u044b\u0301 (\xab/\xbb).")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b, \u0441\u043e\u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0438\u0439 ",(0,l.kt)("i",{lang:"en"},"IP"),"\xad\u2011\u0430\u0434\u0440\u0435\u0441\u0430 \u0441\xa0\u0434\u043e\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u0438\u043c\u0435\u043d\u0430\u043c\u0438."),(0,l.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,l.kt)(o.Z,{attributes:{className:"fa-brands fa-windows"},default:!0,label:"Windows",value:"windows",mdxType:"TabItem"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \xab\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430\xbb ",(0,l.kt)("strong",{parentName:"p"},"\u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041f\u043e\u0434\u0430\u0434\u0438\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bat"},'Notepad "%SystemRoot%\\System32\\drivers\\etc\\hosts"\n')),(0,l.kt)("p",{parentName:"li"},"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0431\u043b\u043e\u043d\u0443 \u0444\u0430\u0439\u043b (\u043e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Windows\\System32\\drivers\\etc\\hosts"),") \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442 \u0432\xa0\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 \xab\u0411\u043b\u043e\u043a\u043d\u043e\u0442\xbb.")))),(0,l.kt)(o.Z,{attributes:{className:"fa-brands fa-ubuntu"},label:"Ubuntu",value:"ubuntu",mdxType:"TabItem"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041f\u043e\u0434\u0430\u0434\u0438\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/hosts\n")),(0,l.kt)("p",{parentName:"li"},"\u0424\u0430\u0439\u043b ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442 \u0432\xa0\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 ",(0,l.kt)("i",{lang:"en"},"nano"),", \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u043c \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0441\u0443\u043f\u0435\u0440\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0414\u043e\u0431\u0430\u0432\u0438\u043c \u0432\xa0\u043a\u043e\u043d\u0435\u0446 \u0444\u0430\u0439\u043b\u0430:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"127.0.0.1 blog.bank.example\n127.0.0.1 online.bank.example\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u043c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\xa0\u0437\u0430\u043a\u0440\u043e\u0435\u043c \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041f\u043e\u0434\u0430\u0434\u0438\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u044b:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"ping blog.bank.example\nping online.bank.example\n")),(0,l.kt)("p",{parentName:"li"},"\u041f\u0440\u0438\xa0\u043e\u0431\u043c\u0435\u043d\u0435 \u043f\u0430\u043a\u0435\u0442\u0430\u043c\u0438 \u0441\xa0\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u0443\u0437\u043b\u0430\u043c\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d ",(0,l.kt)("i",{lang:"en"},"IP"),"\xad\u2011\u0430\u0434\u0440\u0435\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,l.kt)("admonition",{parentName:"li",type:"caution"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"ping")," \u0432\u043c\u0435\u0441\u0442\u043e ",(0,l.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"nslookup")),(0,l.kt)("p",{parentName:"admonition"},"\u0423\u0442\u0438\u043b\u0438\u0442\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"nslookup")," \u0432\xa0",(0,l.kt)("i",{lang:"en"},"Windows")," (\u0432\xa0\u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 ",(0,l.kt)("i",{lang:"en"},"Linux"),") \u043e\u0431\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043a\xa0",(0,l.kt)("i",{lang:"en"},"DNS"),", \u043d\u0435\xa0\u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"hosts"),", \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043d\u0430 \u043d\u0435\xa0\u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u0434\u043b\u044f \u043d\u0430\u0448\u0438\u0445 \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u043e\u0432."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0432\xa0\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0432\u043a\u043b\u0430\u0434\u043a\u0438 \u0441\xa0",(0,l.kt)("a",{parentName:"p",href:"http://blog.bank.example/"},"http://blog.bank.example/")," \u0438\xa0",(0,l.kt)("a",{parentName:"p",href:"http://online.bank.example/"},"http://online.bank.example/"),"."))))}g.isMDXComponent=!0}}]);