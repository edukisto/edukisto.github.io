"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[4087],{9969:function(e,n,s){s.r(n),s.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return t},metadata:function(){return h},toc:function(){return x}});var l=s(4848),a=s(8453),r=s(2250),i="FROM ghcr.io/digininja/dvwa:latest\nCOPY config.inc.php config/\n",c=s(7227),d=s(9489);const t={sidebar_custom_props:{number:"1"},title:"DVWA"},o="DVWA",h={id:"infosec/sqli/example/dvwa",title:"DVWA",description:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0411\u0414",source:"@site/docs/infosec/1-sqli/example/dvwa.mdx",sourceDirName:"infosec/1-sqli/example",slug:"/infosec/sqli/example/dvwa",permalink:"/infosec/sqli/example/dvwa",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_custom_props:{number:"1"},title:"DVWA"},sidebar:"mySidebar",previous:{title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f",permalink:"/infosec/sqli/example/"},next:{title:"09.02.07\u2011\u0411\u0414. \u041c\u0414\u041a\xa002.01",permalink:"/swe/"}},u={},x=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0411\u0414",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0431\u0434",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a",id:"\u0437\u0430\u043f\u0443\u0441\u043a",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2}];function j(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"dvwa",children:(0,l.jsx)("i",{lang:"en",children:"DVWA"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0431\u0434",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0411\u0414"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0423\u0431\u0435\u0434\u0438\u043c\u0441\u044f, \u0447\u0442\u043e \u0441\u0435\u0440\u0432\u0435\u0440 ",(0,l.jsx)("i",{lang:"en",children:"MySQL"})," \u0437\u0430\u043f\u0443\u0449\u0435\u043d."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u043a\u043b\u0438\u0435\u043d\u0442 ",(0,l.jsx)("i",{lang:"en",children:"MySQL"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mysql --user=root --password\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0411\u0443\u0434\u0435\u0442 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043a\u043e \u0432\u0432\u043e\u0434\u0443 \u043f\u0430\u0440\u043e\u043b\u044f."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"Enter password:\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u0412\u0432\u0435\u0434\u0451\u043c \u043f\u0430\u0440\u043e\u043b\u044c. \u0411\u0443\u0434\u0435\u0442 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043a\u043e \u0432\u0432\u043e\u0434\u0443 \u043a\u043e\u043c\u0430\u043d\u0434."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"mysql>\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0438\u043b\u0438"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"MariaDB [(none)]>\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0411\u0414 ",(0,l.jsx)(n.code,{children:"dvwa"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE SCHEMA dvwa;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0411\u0414."}),"\n",(0,l.jsxs)(d.A,{defaultValue:"other",groupId:"dbms-platform",children:[(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-docker"},label:"Docker",value:"docker",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE USER 'pentester'@'172.17.0.2' IDENTIFIED BY '\u041f\u0420\u0418\u0414\u0423\u041c\u0410\u0419\u0422\u0415_\u041f\u0410\u0420\u041e\u041b\u042c';\nGRANT ALL PRIVILEGES ON dvwa.* TO 'pentester'@'172.17.0.2';\n"})})}),(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-microsoft"},label:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",value:"other",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE USER 'pentester'@'127.0.0.1' IDENTIFIED BY '\u041f\u0420\u0418\u0414\u0423\u041c\u0410\u0419\u0422\u0415_\u041f\u0410\u0420\u041e\u041b\u042c';\nGRANT ALL PRIVILEGES ON dvwa.* TO 'pentester'@'127.0.0.1';\n"})})})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043c \u043a\u043b\u0438\u0435\u043d\u0442 ",(0,l.jsx)("i",{lang:"en",children:"MySQL"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"EXIT;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0411\u0443\u0434\u0435\u0442 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"Bye\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"}),"\n",(0,l.jsxs)(d.A,{defaultValue:"windows",groupId:"download-platform",children:[(0,l.jsxs)(c.A,{attributes:{className:"fa-brands fa-docker"},label:"Docker",value:"docker",children:[(0,l.jsx)(n.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0438\xa0\u0437\u0430\u0439\u0434\u0451\u043c \u0432\xa0\u043d\u0435\u0433\u043e."}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"mkdir DVWA && cd DVWA\n"})})]}),(0,l.jsxs)(c.A,{attributes:{className:"fa-brands fa-git-alt"},label:"Git",value:"git",children:[(0,l.jsxs)(n.p,{children:["\u041a\u043b\u043e\u043d\u0438\u0440\u0443\u0435\u043c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,l.jsx)(n.code,{children:"DVWA"}),"."]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone --depth=1 https://github.com/digininja/DVWA.git DVWA\n"})})]}),(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-linux"},label:"Linux",value:"linux",children:(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0421\u043a\u0430\u0447\u0430\u0435\u043c \u0430\u0440\u0445\u0438\u0432, \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u043c \u0435\u0433\u043e \u043a\u0430\u043a ",(0,l.jsx)(n.code,{children:"DVWA.zip"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"wget -O DVWA.zip https://codeload.github.com/digininja/DVWA/zip/refs/heads/master\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0420\u0430\u0441\u043f\u0430\u043a\u0443\u0435\u043c \u0430\u0440\u0445\u0438\u0432 \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,l.jsx)(n.code,{children:"DVWA-master"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"unzip -q DVWA.zip\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u0443\u0435\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,l.jsx)(n.code,{children:"DVWA-master"})," \u0432\xa0",(0,l.jsx)(n.code,{children:"DVWA"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mv DVWA-master DVWA\n"})}),"\n"]}),"\n"]})}),(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-microsoft"},label:"Windows\xa011",value:"windows",children:(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0421\u043a\u0430\u0447\u0430\u0435\u043c \u0430\u0440\u0445\u0438\u0432, \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u043c \u0435\u0433\u043e \u043a\u0430\u043a ",(0,l.jsx)(n.code,{children:"DVWA.zip"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-batch",children:"curl --output DVWA.zip https://codeload.github.com/digininja/DVWA/zip/refs/heads/master\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0420\u0430\u0441\u043f\u0430\u043a\u0443\u0435\u043c \u0430\u0440\u0445\u0438\u0432 \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,l.jsx)(n.code,{children:"DVWA-master"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-batch",children:"tar -xf DVWA.zip\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u0443\u0435\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,l.jsx)(n.code,{children:"DVWA-master"})," \u0432\xa0",(0,l.jsx)(n.code,{children:"DVWA"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-batch",children:"rename DVWA-master DVWA\n"})}),"\n"]}),"\n"]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u041f\u0435\u0440\u0435\u0439\u0434\u0451\u043c \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,l.jsx)(n.code,{children:"DVWA"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd DVWA\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0438\xa0\u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u043c \u043a\xa0\u0435\u0433\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e."}),"\n",(0,l.jsxs)(d.A,{defaultValue:"windows",groupId:"configuration-platform",children:[(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-docker"},label:"Docker",value:"docker",children:(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0421\u043a\u0430\u0447\u0430\u0435\u043c ",(0,l.jsx)(n.a,{href:"https://raw.githubusercontent.com/digininja/DVWA/master/config/config.inc.php.dist",children:"\u0448\u0430\u0431\u043b\u043e\u043d \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u0443\u0435\u043c \u0444\u0430\u0439\u043b \u0432\xa0",(0,l.jsx)(n.code,{children:"config.inc.php"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u043a\u043e\u043f\u0438\u044e \u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\xa0",(0,l.jsx)("i",{lang:"en",children:"VS Code"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"code config.inc.php\n"})}),"\n"]}),"\n"]})}),(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-linux"},label:"Linux",value:"linux",children:(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0435\u043c \u0448\u0430\u0431\u043b\u043e\u043d \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cp config/config.inc.php.dist config/config.inc.php\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u043a\u043e\u043f\u0438\u044e \u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\xa0",(0,l.jsx)("i",{lang:"en",children:"VS Code"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"code config/config.inc.php\n"})}),"\n"]}),"\n"]})}),(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-microsoft"},label:"Windows\xa011",value:"windows",children:(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0435\u043c \u0448\u0430\u0431\u043b\u043e\u043d \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-batch",children:"copy /v /b config\\config.inc.php.dist config\\config.inc.php\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u043a\u043e\u043f\u0438\u044e \u043d\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\xa0",(0,l.jsx)("i",{lang:"en",children:"VS Code"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-batch",children:"code config\\config.inc.php\n"})}),"\n"]}),"\n"]})})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u0423\u043a\u0430\u0436\u0435\u043c \u0445\u043e\u0441\u0442, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 \u0421\u0423\u0411\u0414."}),"\n",(0,l.jsxs)(d.A,{defaultValue:"other",groupId:"db-server-platform",children:[(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-docker"},label:"Docker",value:"docker",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"// \u0423\u0434\u0430\u043b\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443.\n$_DVWA[ 'db_server' ]   = getenv('DB_SERVER') ?: '127.0.0.1';\n// \u0414\u043e\u0431\u0430\u0432\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443.\n$_DVWA[ 'db_server' ]   = getenv('DB_SERVER') ?: 'host.docker.internal';\n"})})}),(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-microsoft"},label:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",value:"other",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"// \u0414\u043e\u0431\u0430\u0432\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443.\n$_DVWA[ 'db_server' ]   = getenv('DB_SERVER') ?: '127.0.0.1';\n"})})})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u043c \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\xa0\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"// \u0423\u0434\u0430\u043b\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443.\n$_DVWA[ 'default_security_level' ] = 'impossible';\n// \u0414\u043e\u0431\u0430\u0432\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443.\n$_DVWA[ 'default_security_level' ] = 'low';\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u043c \u0432\u0435\u0431\xad\u2011\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"// \u0423\u0434\u0430\u043b\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443.\n$_DVWA[ 'disable_authentication' ] = false;\n// \u0414\u043e\u0431\u0430\u0432\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443.\n$_DVWA[ 'disable_authentication' ] = true;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u043c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\xa0\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a",children:"\u0417\u0430\u043f\u0443\u0441\u043a"}),"\n",(0,l.jsxs)(d.A,{defaultValue:"other",groupId:"launch-platform",children:[(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-docker"},label:"Docker",value:"docker",children:(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b ",(0,l.jsx)(n.code,{children:"Dockerfile"}),"."]}),"\n",(0,l.jsx)(r.A,{language:"docker",showLineNumbers:!0,title:"Dockerfile",children:i}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u0421\u043e\u0431\u0435\u0440\u0451\u043c \u043e\u0431\u0440\u0430\u0437 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u044b."}),"\n",(0,l.jsx)(n.admonition,{title:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u0431\u044a\u0451\u043c \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\xad\u2011\u0442\u0440\u0430\u0444\u0438\u043a\u0430!",type:"warning"}),"\n",(0,l.jsxs)(d.A,{defaultValue:"windows",groupId:"docker-installation-platform",children:[(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-linux"},label:"Linux",value:"linux",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo docker build \\\n  --tag=dvwa \\\n  .\n"})})}),(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-microsoft"},label:"Windows\xa011",value:"windows",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo docker build ^\n  --tag=dvwa ^\n  .\n"})})})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u0423\u0431\u0435\u0434\u0438\u043c\u0441\u044f, \u0447\u0442\u043e \u043e\u0431\u0440\u0430\u0437 \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0432\xa0\u043f\u0435\u0440\u0435\u0447\u043d\u0435."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker image ls\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"REPOSITORY   TAG       IMAGE ID       CREATED          SIZE\ndvwa         latest    ...            ...              ...\n"})}),"\n",(0,l.jsxs)(d.A,{defaultValue:"windows",groupId:"docker-launch-platform",children:[(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-linux"},label:"Linux",value:"linux",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo docker run \\\n  --add-host=host.docker.internal:host-gateway \\\n  --detach \\\n  --name=dvwa \\\n  --publish=127.0.0.1:4280:80/tcp \\\n  dvwa\n"})})}),(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-microsoft"},label:"Windows\xa011",value:"windows",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo docker run ^\n  --add-host=host.docker.internal:host-gateway ^\n  --detach ^\n  --name=dvwa ^\n  --publish=127.0.0.1:4280:80/tcp ^\n  dvwa\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f \u043a\xa0\u0444\u043b\u0430\u0433\u0430\u043c:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--detach"})," \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0432\xa0\u0444\u043e\u043d\u043e\u0432\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435, \u0447\u0442\u043e\u0431\u044b \u043d\u0435\xa0\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0432\u043e\u0434 \u0441\xa0\u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044b, \u0438\xa0\u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430;"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--publish 127.0.0.1:4280:80/tcp"})," \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u043e\u0440\u0442\xa080 \u0433\u043e\u0441\u0442\u0435\u0432\u043e\u0439 \u041e\u0421 \u043a\xa0\u043f\u043e\u0440\u0442\u0443\xa04280 \u0445\u043e\u0441\u0442\u043e\u0432\u043e\u0439 \u041e\u0421."]}),"\n"]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsxs)(n.mdxAdmonitionTitle,{children:[(0,l.jsx)(n.code,{children:"--expose"})," \u0438\u043b\u0438 ",(0,l.jsx)(n.code,{children:"--publish"}),"?"]}),(0,l.jsxs)(n.p,{children:["\u0424\u043b\u0430\u0433 ",(0,l.jsx)(n.code,{children:"--expose"})," \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u043f\u043e\u0440\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 ",(0,l.jsx)("i",{lang:"en",children:"Docker"}),", \u0442\u043e\u0433\u0434\u0430 \u043a\u0430\u043a ",(0,l.jsx)(n.code,{children:"--publish"}),"\xa0\u2014 \u0434\u043b\u044f \u043b\u044e\u0431\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439."]})]}),"\n"]}),"\n"]})}),(0,l.jsx)(c.A,{attributes:{className:"fa-brands fa-microsoft"},label:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",value:"other",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"php -S 127.0.0.1:4280\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0432\xa0\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0432\u0435\u0431\xad\u2011\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 ",(0,l.jsx)(n.a,{href:"http://127.0.0.1:4280/",children:"http://127.0.0.1:4280"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0412\xa0\u0431\u043e\u043a\u043e\u0432\u043e\u043c \u043c\u0435\u043d\u044e \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0443\u043d\u043a\u0442 ",(0,l.jsx)("i",{lang:"en",children:"Setup/reset DB"}),". \u0411\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ",(0,l.jsx)("i",{lang:"en",children:"Database setup"}),". \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,l.jsx)("i",{lang:"en",children:"Create/reset database"}),", \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c (\u0438\u043b\u0438 \u0432\u043e\u0441\u0441\u043e\u0437\u0434\u0430\u0442\u044c) \u0411\u0414."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"Database has been created.\n...\nSetup successful!\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0412\xa0\u0431\u043e\u043a\u043e\u0432\u043e\u043c \u043c\u0435\u043d\u044e \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0443\u043d\u043a\u0442 ",(0,l.jsx)("i",{lang:"en",children:"SQL injection"}),"."]}),"\n",(0,l.jsx)(n.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,l.jsxs)(n.p,{children:["\u041f\u0443\u043d\u043a\u0442 ",(0,l.jsx)("i",{lang:"en",children:"SQL injection"}),", \u0430\xa0\u043d\u0435\xa0",(0,l.jsx)("i",{lang:"en",children:"SQL injection (blind)"}),"!"]})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u0434\u0451\u043c \u0432\xa0\u043f\u043e\u043b\u0435 ",(0,l.jsx)("i",{lang:"en",children:"User ID"})," (\xab\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\xbb) \u0446\u0438\u0444\u0440\u044b\xa00\u2013\u20606. \u041f\u0435\u0440\u0435\u0431\u043e\u0440 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0432\u044b\u044f\u0441\u043d\u0438\u0442\u044c, \u0447\u0442\u043e \u0432\xa0\u0411\u0414 ",(0,l.jsx)(n.em,{children:"\u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c"})," \u043f\u044f\u0442\u044c \u0443\u0447\u0451\u0442\u043d\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"ID: 1\nFirst name: admin\nSurname: admin\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"ID: 2\nFirst name: Gordon\nSurname: Brown\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"ID: 3\nFirst name: Hack\nSurname: Me\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"ID: 4\nFirst name: Pablo\nSurname: Picasso\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"ID: 5\nFirst name: Bob\nSurname: Smith\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u0412\u0432\u0435\u0434\u0451\u043c \u0432\xa0\u043f\u043e\u043b\u0435 ",(0,l.jsx)("i",{lang:"en",children:"User ID"})," \u0441\u0438\u043c\u0432\u043e\u043b \xab",(0,l.jsx)(n.code,{children:"'"}),"\xbb (\u044d\u0442\u043e ",(0,l.jsx)(n.code,{children:"U+0027 APOSTROPHE"}),", \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0448\u0435 \u0441\xa0\u0431\u0443\u043a\u0432\u043e\u0439 \xab\u044d\xbb)."]}),"\n",(0,l.jsxs)(n.p,{children:["\u0411\u0443\u0434\u0435\u0442 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\xa0\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0435, \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u043e\u0431 \u0443\u044f\u0437\u0432\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0411\u0414 \u043a\xa0",(0,l.jsx)("i",{lang:"en",children:"SQL"}),"\xad\u2011\u0438\u043d\u044a\u0435\u043a\u0446\u0438\u044f\u043c."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '''''...\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u043c \u0432\u0432\u0435\u0441\u0442\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u0441\u0442\u0438\u043d\u043d\u043e:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"' OR 1 = 1 #\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u043c \u0432\u0432\u0435\u0441\u0442\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u044e\u0449\u0435\u0435 \u043a\u043e\u0440\u0442\u0435\u0436\u0438:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"' UNION SELECT NULL, \u0438\u043c\u044f_\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 FROM \u0438\u043c\u044f_\u0442\u0430\u0431\u043b\u0438\u0446 #\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u042d\u0442\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447. \u041d\u043e \u043a\u0430\u043a \u0443\u0437\u043d\u0430\u0442\u044c \u0438\u043c\u0435\u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438\xa0\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432?"}),"\n",(0,l.jsxs)(n.p,{children:["\u0412\xa0",(0,l.jsx)("i",{lang:"en",children:"MySQL"})," \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u044f \u0411\u0414 ",(0,l.jsx)(n.code,{children:"information_schema"}),". \u0412\xa0\u043d\u0435\u0439 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0438\u043c\u0435\u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446, \u0438\u0445 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432 \u0438\xa0\u0442.\xa0\u0434. \u041c\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043c \u0437\u0430\u043f\u0440\u043e\u0441 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u0411\u0414."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DESCRIBE information_schema.columns;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:"+--------------------------+----------------------------+------+-----+---------+-------+\n| Field                    | Type                       | Null | Key | Default | Extra |\n+--------------------------+----------------------------+------+-----+---------+-------+\n| TABLE_SCHEMA             | varchar(64)                | NO   |     | NULL    |       |\n| TABLE_NAME               | varchar(64)                | NO   |     | NULL    |       |\n| COLUMN_NAME              | varchar(64)                | YES  |     | NULL    |       |\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0418\u0442\u0430\u043a, \u0437\u0430\u043f\u0440\u043e\u0441"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SELECT table_name FROM information_schema.tables WHERE table_schema = "\u0418\u041c\u042f_\u0411\u0414";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u0438\u043c\u0435\u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446 \u0432\xa0\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0411\u0414, \u0430\xa0\u0437\u0430\u043f\u0440\u043e\u0441"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SELECT table_name, column_name FROM information_schema.columns WHERE table_schema = "\u0418\u041c\u042f_\u0411\u0414" AND table_name = "\u0418\u041c\u042f_\u0422\u0410\u0411\u041b\u0418\u0426\u042b";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u0438\u043c\u0435\u043d\u0430 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0411\u0414."}),"\n",(0,l.jsxs)(n.p,{children:["\u042d\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043c\u043e\u0436\u043d\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\xa0\u0437\u0430\u043f\u0440\u043e\u0441 \u0441\xa0",(0,l.jsx)(n.code,{children:"UNION"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"' UNION SELECT table_name, column_name... #\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0438\u043c\u044f \u0411\u0414 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"' UNION SELECT NULL, SCHEMA(); #\n"})}),"\n"]}),"\n"]}),"\n"]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},7227:function(e,n,s){s.d(n,{A:function(){return i}});s(6540);var l=s(4164),a={tabItem:"tabItem_Ymn6"},r=s(4848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,i),hidden:s,children:n})}},9489:function(e,n,s){s.d(n,{A:function(){return A}});var l=s(6540),a=s(4164),r=s(4245),i=s(6347),c=s(4113),d=s(2814),t=s(5167),o=s(1269);function h(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:l,default:a}}=e;return{value:n,label:s,attributes:l,default:a}}))}(s);return function(e){const n=(0,t.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const a=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,r=u(e),[i,d]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=s.find((e=>e.default))??s[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:r}))),[t,h]=j({queryString:s,groupId:a}),[p,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,o.Dv)(s);return[a,(0,l.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:a}),g=(()=>{const e=t??p;return x({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{g&&d(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=s(1062),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=s(4848);function f(e){let{className:n,block:s,selectedValue:l,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:t}=(0,r.a_)(),o=e=>{const n=e.currentTarget,s=d.indexOf(n),a=c[s].value;a!==l&&(t(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>d.push(e),onKeyDown:h,onClick:o,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":l===n}),children:s??n},n)}))})}function N(e){let{lazy:n,children:s,selectedValue:a}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(N,{...e,...n})]})}function A(e){const n=(0,m.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}}}]);