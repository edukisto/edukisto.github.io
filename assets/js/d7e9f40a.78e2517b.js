"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[905],{68:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var a=r(5893),l=r(1151),s=r(425),t=r(3992);const i={},c="Laravel",o={id:"webdev/1-setup/example/4-laravel",title:"Laravel",description:"1. \u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043c \u0432\xa0\u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430:",source:"@site/docs/webdev/1-setup/example/4-laravel.mdx",sourceDirName:"webdev/1-setup/example",slug:"/webdev/1-setup/example/4-laravel",permalink:"/webdev/1-setup/example/4-laravel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Composer",permalink:"/webdev/1-setup/example/3-composer"},next:{title:"VS Code",permalink:"/webdev/1-setup/example/5-vs-code"}},u={},d=[];function h(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"laravel",children:"Laravel"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043c \u0432\xa0\u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"composer global require laravel/installer\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u041f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044f \u0436\u0443\u0440\u043d\u0430\u043b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e ",(0,a.jsx)("i",{lang:"en",children:"Composer"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e ",(0,a.jsx)("i",{lang:"en",children:"PHP"}),". \u0415\u0441\u043b\u0438 \u043d\u0435\u0442, \u0443\u0434\u0430\u043b\u0438\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442 (",(0,a.jsx)(n.code,{children:"composer global remove laravel/installer"}),"), \u043f\u0435\u0440\u0435\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0438\xa0\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u0414\u043e\u0431\u0430\u0432\u0438\u043c \u0438\u043d\u0441\u0442\u0430\u043b\u043b\u044f\u0442\u043e\u0440 ",(0,a.jsx)("i",{lang:"en",children:"Laravel"})," \u0432\xa0",(0,a.jsx)(n.code,{children:"PATH"})]}),"\n",(0,a.jsxs)(t.Z,{groupId:"laravel-installer-os",children:[(0,a.jsxs)(s.Z,{attributes:{className:"fa-brands fa-windows"},label:"Windows (OSPanel)",value:"windows-ospanel",children:[(0,a.jsxs)(n.p,{children:["\u0418\u043d\u0441\u0442\u0430\u043b\u043b\u044f\u0442\u043e\u0440 ",(0,a.jsx)("i",{lang:"en",children:"Laravel"})," \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 ",(0,a.jsx)(n.code,{children:"userdata\\composer\\vendor\\bin"}),". \u041a\xa0\u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u0438\u043d\u0441\u0442\u0430\u043b\u043b\u044f\u0442\u043e\u0440 \u0438\u0437 \u043a\u043e\u043d\u0441\u043e\u043b\u0438 \u043f\u043e \u0438\u043c\u0435\u043d\u0438 \u0444\u0430\u0439\u043b\u0430 \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\xa0\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f: \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430."]}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,a.jsx)("i",{lang:"en",children:"Open Server Panel"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0444\u0430\u0439\u043b ",(0,a.jsx)(n.code,{children:"path.txt"})," \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 ",(0,a.jsx)(n.code,{children:"userdata\\config"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u0412\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\xa0\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u043f\u0443\u0442\u044c \u043a\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443, \u0432\xa0\u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0438\u043d\u0441\u0442\u0430\u043b\u043b\u044f\u0442\u043e\u0440 ",(0,a.jsx)("i",{lang:"en",children:"Laravel"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-batch",children:"%realprogdir%\\userdata\\composer\\vendor\\bin\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u0412\xa0\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 ",(0,a.jsx)("i",{lang:"en",children:"Open Server Panel"})," \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \xab\u0421\u0435\u0440\u0432\u0435\u0440\xbb \u0438\u0437 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \xab\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 ",(0,a.jsx)("i",{lang:"en",children:"Path"}),"\xbb \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \xab\u0421\u0432\u043e\u0439 ",(0,a.jsx)("i",{lang:"en",children:"Path"}),"\xa0+ ",(0,a.jsx)(n.code,{children:"userdata/config/path.txt"}),"\xbb."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 ",(0,a.jsx)(n.strong,{children:"\u0438\xa0\u043a\u043e\u043d\u0441\u043e\u043b\u044c"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u0412\xa0\u043a\u043e\u043d\u0441\u043e\u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-batch",children:"echo %realprogdir%\\userdata\\composer\\vendor\\bin\necho %PATH%\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u043a\u0430\u0442\u0430\u043b\u043e\u0433, \u0432\xa0\u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0438\u043d\u0441\u0442\u0430\u043b\u043b\u044f\u0442\u043e\u0440 ",(0,a.jsx)("i",{lang:"en",children:"Laravel"}),", \u0443\u043a\u0430\u0437\u0430\u043d \u0432\xa0\u043f\u0435\u0440\u0435\u0447\u043d\u0435."]}),"\n"]}),"\n"]})]}),(0,a.jsxs)(s.Z,{attributes:{className:"fa-brands fa-windows"},label:"Windows (XAMPP)",value:"windows-xampp",children:[(0,a.jsxs)(n.p,{children:["\u0418\u043d\u0441\u0442\u0430\u043b\u043b\u044f\u0442\u043e\u0440 ",(0,a.jsx)("i",{lang:"en",children:"Laravel"})," \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 ",(0,a.jsx)(n.code,{children:"%APPDATA%\\Composer\\vendor\\bin"}),". \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432\u043d\u0435\u0441\u0451\u043d \u0432\xa0",(0,a.jsx)(n.code,{children:"PATH"}),", \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432 \u0432\xa0\u043a\u043e\u043d\u0441\u043e\u043b\u0438:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-batch",children:"echo %APPDATA%\\Composer\\vendor\\bin\n\necho %PATH%\n"})})]}),(0,a.jsx)(s.Z,{attributes:{className:"fa-brands fa-ubuntu"},label:"Ubuntu",value:"ubuntu",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"echo 'PATH=\"$HOME/.config/composer/vendor/bin/:$PATH\"' >> ~/.profile\n\n. ~/.profile\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433, \u0433\u0434\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"}),"\n",(0,a.jsxs)(t.Z,{groupId:"project-os",children:[(0,a.jsx)(s.Z,{attributes:{className:"fa-brands fa-windows"},label:"Windows (OSPanel)",value:"windows-ospanel",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-batch",children:"cd domains/localhost\n"})})}),(0,a.jsx)(s.Z,{attributes:{className:"fa-brands fa-windows"},label:"Windows (XAMPP)",value:"windows-xampp",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-batch",children:"cd htdocs\n"})})}),(0,a.jsx)(s.Z,{attributes:{className:"fa-brands fa-ubuntu"},label:"Ubuntu",value:"ubuntu",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd ~\n"})})}),(0,a.jsx)(s.Z,{attributes:{className:"fa-brands fa-apple"},label:"macOS",value:"macos",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"cd ~\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 \u0431\u0430\u0437\u0435 ",(0,a.jsx)("i",{lang:"en",children:"Laravel"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# \u0423\u0431\u0435\u0434\u0438\u043c\u0441\u044f, \u0447\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0438\u043d\u0441\u0442\u0430\u043b\u043b\u044f\u0442\u043e\u0440 \u0441\u0430\u043c\u043e\u0439 \u0441\u0432\u0435\u0436\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438.\nlaravel -V\n\n# \u0412\u044b\u0432\u0435\u0434\u0435\u043c \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u043a\u043e\u043c\u0430\u043d\u0434 \u0438\u043d\u0441\u0442\u0430\u043b\u043b\u044f\u0442\u043e\u0440\u0430 Laravel.\nlaravel list\n\n# \u041d\u0430\u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 new. \u0412\u044b\u0432\u043e\u0434\u0438\u043c \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\xa0\u043d\u0435\u0439.\nlaravel new --help\n\n# \u0420\u0430\u0437\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c project \u043d\u0430 \u0431\u0430\u0437\u0435 \u043a\u0430\u0440\u043a\u0430\u0441\u0430 \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 Laravel.\nlaravel new project\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u043c \u043f\u0440\u043e\u0435\u043a\u0442."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# \u0421\u043f\u0443\u0441\u043a\u0430\u0435\u043c\u0441\u044f \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433 project, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 Composer\u2019\u043e\u043c.\ncd project\n\n# \u0412\u044b\u0432\u043e\u0434\u0438\u043c \u043d\u043e\u043c\u0435\u0440 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 Laravel.\nphp artisan -V\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u043c \u0432\xa0",(0,a.jsx)("i",{lang:"en",children:"PHP"})," \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u043e\u043c \u0432\u0435\u0431\xad\u2011\u0441\u0435\u0440\u0432\u0435\u0440\u0435."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"php artisan serve\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u0412\xa0\u043e\u043a\u043d\u043e \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0441\xa0",(0,a.jsx)("i",{lang:"en",children:"IP"}),"\xad\u2011\u0430\u0434\u0440\u0435\u0441\u043e\u043c \u0438\xa0\u043f\u043e\u0440\u0442\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u043d\u044f\u043b \u0432\u0435\u0431\xad\u2011\u0441\u0435\u0440\u0432\u0435\u0440. \u041e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e ",(0,a.jsx)(n.a,{href:"http://127.0.0.1:8000",children:"http://127.0.0.1:8000"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438\xa0\u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u0432\u0435\u0431\xad\u2011\u0430\u0434\u0440\u0435\u0441\u0443."}),"\n",(0,a.jsxs)(n.p,{children:["\u0412\xa0\u043e\u043a\u043d\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0432\u0435\u0431\xad\u2011\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 ",(0,a.jsx)("i",{lang:"en",children:"Laravel"}),"."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},425:function(e,n,r){r.d(n,{Z:function(){return t}});r(7294);var a=r(512),l={tabItem:"tabItem_Ymn6"},s=r(5893);function t(e){let{children:n,hidden:r,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,t),hidden:r,children:n})}},3992:function(e,n,r){r.d(n,{Z:function(){return N}});var a=r(7294),l=r(512),s=r(2957),t=r(6550),i=r(1270),c=r(5238),o=r(3609),u=r(2560);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:l}}=e;return{value:n,label:r,attributes:a,default:l}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const l=(0,t.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,s=h(e),[t,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[o,d]=x({queryString:r,groupId:l}),[b,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,u.Nk)(r);return[l,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:l}),m=(()=>{const e=o??b;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,s]),tabValues:s}}var j=r(1048),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},f=r(5893);function v(e){let{className:n,block:r,selectedValue:a,selectValue:t,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),l=i[r].value;l!==a&&(o(n),t(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,l.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:l}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,l.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(g,{...e,...n})]})}function N(e){const n=(0,j.Z)();return(0,f.jsx)(w,{...e,children:d(e.children)},String(n))}},1151:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var a=r(7294);const l={},s=a.createContext(l);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);