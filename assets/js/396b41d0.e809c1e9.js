"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[3979],{3678:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=t(5893),s=t(1151),a=t(425),l=t(3992);const i={},o="PHP",u={id:"webdev/1-setup/example/1-php",title:"PHP",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Open Server Panel \u0438\u043b\u0438 XAMPP.",source:"@site/docs/webdev/1-setup/example/1-php.mdx",sourceDirName:"webdev/1-setup/example",slug:"/webdev/1-setup/example/1-php",permalink:"/webdev/1-setup/example/1-php",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f",permalink:"/webdev/1-setup/example/"},next:{title:"MySQL",permalink:"/webdev/1-setup/example/2-mysql"}},c={},d=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"php",children:"PHP"}),"\n",(0,r.jsxs)(l.Z,{groupId:"php-os",children:[(0,r.jsx)(a.Z,{attributes:{className:"fa-brands fa-windows"},label:"Windows",value:"windows",children:(0,r.jsxs)(n.p,{children:["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 ",(0,r.jsx)("i",{lang:"en",children:"Open Server Panel"})," \u0438\u043b\u0438 ",(0,r.jsx)("i",{lang:"en",children:"XAMPP"}),"."]})}),(0,r.jsxs)(a.Z,{attributes:{className:"fa-brands fa-ubuntu"},label:"Ubuntu\xa022.04.3",value:"ubuntu",children:[(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{children:(0,r.jsx)(n.code,{children:"sudo"})}),(0,r.jsxs)(n.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u0430 ",(0,r.jsx)(n.code,{children:"sudo"})," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432\xa0\u0440\u0430\u043c\u043a\u0430\u0445 \u0441\u0435\u0441\u0441\u0438\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430. \u0412\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0435\u0433\u043e \u043f\u0430\u0440\u043e\u043b\u044c. \u0410\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u043e \u043d\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0433\u043e \u0432\xa0\u043e\u043a\u043d\u0435 \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430 \u0438\xa0\u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,r.jsx)(n.code,{children:"Enter"}),". \u0411\u0443\u0434\u044c\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u044b: \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043d\u0435\xa0\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f."]})]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043c \u043f\u0430\u043a\u0435\u0442\u044b."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# \u0412\u043d\u0435\u0441\u0451\u043c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0432\xa0\u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432 \u0434\u043b\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 apt.\nsudo LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php\n\n# \u041e\u0431\u043d\u043e\u0432\u0438\u043c \u0438\u043d\u0434\u0435\u043a\u0441 \u043f\u0430\u043a\u0435\u0442\u043e\u0432.\nsudo apt update\n\n# \u0423\u0431\u0435\u0434\u0438\u043c\u0441\u044f, \u0447\u0442\u043e \u043f\u0430\u043a\u0435\u0442\u044b PHP \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438.\napt search php8.3\n\n# \u0414\u043b\u044f\xa0\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438\u043c\u0438\u0442\u0438\u0440\u0443\u0435\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u043f\u0430\u043a\u0435\u0442\u0430 \u0441\xa0\u043f\u043e\u043a\u0430\u0437\u043e\u043c \u043f\u043e\u043b\u043d\u044b\u0445 \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0432\u0435\u0440\u0441\u0438\u0439.\nsudo apt install -s php8.3\n\n# \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043c \u043f\u0430\u043a\u0435\u0442.\nsudo apt install php8.3\n\n# \u0414\u043b\u044f\xa0\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432\u044b\u0432\u0435\u0434\u0435\u043c \u043d\u043e\u043c\u0435\u0440 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438.\nphp --version\n\nphp -m\n\n# \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f.\nsudo apt install \\\n  php-curl \\\n  php-mysql \\\n  php-xml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u0417\u0430\u043c\u0435\u043d\u0438\u043c \u0444\u0430\u0439\u043b\u044b \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438\u0438 ",(0,r.jsx)("i",{lang:"en",children:"PHP"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# php --ini\nwget https://www.php.net/distributions/php-8.3.2.tar.xz\ntar xf php-8.3.2.tar.xz\ncd php-8.3.2\nsudo cp php.ini-development /etc/php/8.3/apache2/php.ini\nsudo cp php.ini-development /etc/php/8.3/cli/php.ini\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u0412\xa0\u0441\u0442\u0440\u043e\u043a\u0435 ",(0,r.jsx)("i",{lang:"en",children:"Loaded configuration file"})," \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d \u043f\u0443\u0442\u044c \u043a\xa0\u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u043e\u043c\u0443 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c\u0443 \u0444\u0430\u0439\u043b\u0443 ",(0,r.jsx)("i",{lang:"en",children:"PHP"}),". \u041e\u0442\u043a\u0440\u043e\u0435\u043c \u0435\u0433\u043e \u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sudoedit /etc/php/8.3/apache2/php.ini\nsudoedit /etc/php/8.3/cli/php.ini\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0423\u0431\u0435\u0434\u0438\u043c\u0441\u044f, \u0447\u0442\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u044b \u043d\u0435\xa0\u0437\u0430\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0438\xa0\u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043a\xa0\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"; \u0427\u0430\u0441\u043e\u0432\u0430\u044f \u0437\u043e\u043d\u0430 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 IANA.\ndate.timezone = Europe/Moscow\n\n; \u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0430\u0445 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u044c \u0432\xa0\u043f\u043e\u0442\u043e\u043a stdout (\u0432\xa0\u0431\u0440\u0430\u0443\u0437\u0435\u0440).\ndisplay_errors = On\n\n; \u0412\u044b\u0432\u043e\u0434\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0430\u0445 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 PHP.\ndisplay_startup_errors = On\n\n; \u0414\u043e\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0430\u0445, \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f\u0445 \u0438\xa0\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f\u0445.\nerror_reporting = E_ALL\n\n; \u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0430\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043c\u0438 HTML.\nhtml_errors = On\n\n; \u0412\u0435\u0441\u0442\u0438 \u043b\u043e\u0433 \u043e\u0448\u0438\u0431\u043e\u043a.\nlog_errors = On\n"})}),"\n"]}),"\n"]})]}),(0,r.jsxs)(a.Z,{attributes:{className:"fa-brands fa-linux"},label:"Linux",value:"linux",children:[(0,r.jsx)(n.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,r.jsxs)(n.p,{children:["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 ",(0,r.jsx)("i",{lang:"en",children:"PHP"})," \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0435\u0433\u043e \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u044f \u0438\xa0\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0430."]})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0435\u043c \u0441\xa0\u0432\u0435\u0431\xad\u2011\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b ",(0,r.jsx)(n.a,{href:"https://www.php.net/downloads",children:"https://www.php.net/downloads"})," \u0433\u0438\u043f\u0435\u0440\u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0430\u0440\u0445\u0438\u0432 \u0441\xa0\u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 ",(0,r.jsx)("i",{lang:"en",children:"PHP"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u0421\u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u043c, \u0441\u043a\u043e\u043c\u043f\u043e\u043d\u0443\u0435\u043c \u0438\xa0\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043c ",(0,r.jsx)("i",{lang:"en",children:"PHP"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"wget https://www.php.net/distributions/php-8.3.2.tar.xz\n\ntar xf php-8.3.2.tar.xz\n\ncd php-8.3.2\n\nsudo apt install \\\n  build-essential \\\n  libcurl4-gnutls-dev \\\n  libonig-dev \\\n  libsqlite3-dev \\\n  libssl-dev \\\n  libxml2-dev \\\n  pkg-config \\\n  zlib1g-dev\n\n# ./configure --help\n\n./configure \\\n  --enable-mbstring \\\n  --with-curl \\\n  --with-openssl \\\n  --with-pdo-mysql\n\nmake -j 4\n\nmake test\n\nsudo make install\n\nsudo cp php.ini-development /usr/local/lib/php.ini\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u0435\u0433\u043e \u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sudoedit /usr/local/lib/php.ini\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0423\u0431\u0435\u0434\u0438\u043c\u0441\u044f, \u0447\u0442\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u044b \u043d\u0435\xa0\u0437\u0430\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0438\xa0\u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043a\xa0\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"; \u0427\u0430\u0441\u043e\u0432\u0430\u044f \u0437\u043e\u043d\u0430 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 IANA.\ndate.timezone = Europe/Moscow\n"})}),"\n"]}),"\n"]})]}),(0,r.jsx)(a.Z,{attributes:{className:"fa-brands fa-apple"},label:"macOS",value:"macos",children:(0,r.jsxs)(n.p,{children:["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 ",(0,r.jsx)("i",{lang:"en",children:"XAMPP"}),"."]})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},425:function(e,n,t){t.d(n,{Z:function(){return l}});t(7294);var r=t(512),s={tabItem:"tabItem_Ymn6"},a=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},3992:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(7294),s=t(512),a=t(2957),l=t(6550),i=t(1270),o=t(5238),u=t(3609),c=t(2560);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,d]=m({queryString:t,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=u??f;return h({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=t(1048),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},j=t(5893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==r&&(u(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(n))}},1151:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var r=t(7294);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);