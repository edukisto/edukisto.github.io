"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[9177],{4111:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return h}});var t=r(4848),a=r(8453),s=r(2250),l=(r(7227),r(9489),"<?php\n\ndeclare(strict_types=1);\n\nfunction decrypt(string $message, string $key): string\n{\n    $data = base64_decode($message, true);\n    if ($data === false) {\n        throw new ValueError('\u0428\u0438\u0444\u0440 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0437\u0430\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d \u0432 Base64!');\n    }\n\n    // \u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f.\n    $cipherAlgo = 'aes-256-cbc';\n\n    $ivLength = openssl_cipher_iv_length($cipherAlgo);\n    if ($ivLength === false) {\n        throw new ValueError('\u0414\u043b\u0438\u043d\u0430 \u0432\u0435\u043a\u0442\u043e\u0440\u0430 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430!');\n    }\n\n    // \u0420\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0430 \u0432\u0435\u043a\u0442\u043e\u0440 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, HMAC \u0438\xa0\u0448\u0438\u0444\u0440.\n    $iv = substr($data, 0, $ivLength);\n    $userHmac = substr($data, $ivLength, 32);\n    $ciphertext = substr($data, $ivLength + 32);\n\n    // \u0414\u0435\u0448\u0438\u0444\u0440\u0443\u0435\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u0435\u043a\u0442\u043e\u0440 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\xa0\u043a\u043b\u044e\u0447.\n    $plaintext = openssl_decrypt($ciphertext, $cipherAlgo, $key, OPENSSL_RAW_DATA, $iv);\n    if ($plaintext === false) {\n        throw new ValueError('\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c!');\n    }\n\n    // \u0417\u0430\u043d\u043e\u0432\u043e \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c HMAC, \u0445\u0435\u0448\u0438\u0440\u0443\u044f \u0448\u0438\u0444\u0440 \u0438 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447.\n    $knownHmac = hash_hmac('sha256', $ciphertext, $key, true);\n\n    // \u0421\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0435\u043c \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u044b\u0439 \u0438\xa0\u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 HMAC.\n    // hash_equals \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 timing attack.\n    if (!hash_equals($knownHmac, $userHmac)) {\n        throw new ValueError('\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0430 \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u044c \u0448\u0438\u0444\u0440\u0430!');\n    }\n\n    // \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0440\u0430\u0441\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442.\n    return $plaintext;\n}\n"),i="<?php\n\ndeclare(strict_types=1);\n\nfunction encrypt(string $plaintext, string $key): string\n{\n    // \u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f.\n    $algo = 'aes-256-cbc';\n\n    // \u041d\u0430\u0445\u043e\u0434\u0438\u043c \u0434\u043b\u0438\u043d\u0443 \u0432\u0435\u043a\u0442\u043e\u0440\u0430 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f.\n    $ivLength = openssl_cipher_iv_length($algo);\n\n    // \u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u043c \u0432\u0435\u043a\u0442\u043e\u0440 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0434\u043b\u0438\u043d\u044b.\n    $iv = openssl_random_pseudo_bytes($ivLength);\n\n    // \u0428\u0438\u0444\u0440\u0443\u0435\u043c \u0442\u0435\u043a\u0441\u0442, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u0435\u043a\u0442\u043e\u0440 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\xa0\u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447.\n    $ciphertext = openssl_encrypt($plaintext, $algo, $key, OPENSSL_RAW_DATA, $iv);\n\n    // \u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0442\u043e...\n    if ($ciphertext === false) {\n        // ...\u0441\u043e\u0437\u0434\u0430\u0451\u043c \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e.\n        throw new ValueError('\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435!');\n    }\n\n    // HMAC \u2014 \u043a\u043e\u0434 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 (\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u0438) \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0430 \u0431\u0430\u0437\u0435 \u0445\u0435\u0448\u0430.\n    // \u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 HMAC \u2014 \u044d\u0442\u043e \u0445\u0435\u0448 \u043e\u0442 \u0448\u0438\u0444\u0440\u0430 \u0438 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430.\n    $hmac = hash_hmac('sha256', $ciphertext, $key, true);\n\n    // \u0421\u043e\u0437\u0434\u0430\u0451\u043c \u0441\u0442\u0440\u043e\u043a\u0443, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0443\u044e \u0432\u0435\u043a\u0442\u043e\u0440 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, HMAC \u0438 \u0448\u0438\u0444\u0440.\n    // \u041a\u043e\u0434\u0438\u0440\u0443\u0435\u043c \u044d\u0442\u0443 \u0441\u0442\u0440\u043e\u043a\u0443 \u0432 Base64 (\u0442\u043e\u043b\u044c\u043a\u043e A \u2014 z, 0\u20139, -, _, =) \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c.\n    return base64_encode(\"{$iv}{$hmac}{$ciphertext}\");\n}\n";const o={sidebar_custom_props:{number:"7"},title:"\u0428\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},c="\u0428\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435",u={id:"retake/cookie/theory/encryption",title:"\u0428\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:"\u0420\u0430\u0437\u0443\u043c\u0435\u0435\u0442\u0441\u044f, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 cookie \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u0432\u044b\u0441\u043e\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u0443\u044e \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u044c\xa0\u2014 \u0432\u043e\u0441\u043f\u0440\u0435\u043f\u044f\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043f\u044b\u0442\u043a\u0430\u043c \u0437\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440, \u0441\u0440\u043e\u043a \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\xa0\u0442.\xa0\u043f.",source:"@site/docs/retake/4-cookie/theory/7-encryption.mdx",sourceDirName:"retake/4-cookie/theory",slug:"/retake/cookie/theory/encryption",permalink:"/retake/cookie/theory/encryption",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_custom_props:{number:"7"},title:"\u0428\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},sidebar:"mySidebar",previous:{title:"\u041f\u0440\u0435\u0444\u0438\u043a\u0441\u044b \u0438\u043c\u0451\u043d",permalink:"/retake/cookie/theory/name-prefix"},next:{title:"09.02.07\u2011\u0411\u0414. \u041c\u0414\u041a\xa002.01",permalink:"/swe/"}},d={},h=[];function p(e){const n={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435",children:"\u0428\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})}),"\n",(0,t.jsxs)(n.p,{children:["\u0420\u0430\u0437\u0443\u043c\u0435\u0435\u0442\u0441\u044f, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,t.jsx)("i",{lang:"en",children:"cookie"})," \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0435\u0433\u043e \u0432\u044b\u0441\u043e\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u0443\u044e \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u044c\xa0\u2014 \u0432\u043e\u0441\u043f\u0440\u0435\u043f\u044f\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043f\u044b\u0442\u043a\u0430\u043c \u0437\u043b\u043e\u0443\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440, \u0441\u0440\u043e\u043a \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\xa0\u0442.\xa0\u043f."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b ",(0,t.jsx)(n.code,{children:".key.txt"})," \u0441\xa0\u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c. \u0414\u043b\u044f\xa0\u044d\u0442\u043e\u0433\u043e \u043c\u044b \u043f\u0435\u0440\u0435\u0439\u0434\u0451\u043c \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0441\xa0\u0432\u0435\u0431\xad\u2011\u0441\u0430\u0439\u0442\u043e\u043c \u0438\xa0\u0432\u044b\u0437\u043e\u0432\u0435\u043c \u0438\u0437 \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430 \u0442\u0440\u0430\u043d\u0441\u043b\u044f\u0442\u043e\u0440 ",(0,t.jsx)("i",{lang:"en",children:"PHP"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"php -r \"file_put_contents('.key.txt', base64_encode(openssl_random_pseudo_bytes(128)));\"\n"})}),"\n",(0,t.jsxs)(n.p,{children:["(\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,t.jsx)(n.code,{children:"openssl_random_pseudo_bytes"})," \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0442\u043e\u0439\u043a\u043e\u0435 \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 128\xad\u2011\u0431\u0438\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e, \u0430\xa0",(0,t.jsx)(n.code,{children:"file_put_contents"})," \u0437\u0430\u043f\u0438\u0448\u0435\u0442 \u0435\u0433\u043e \u0432\xa0\u0444\u0430\u0439\u043b ",(0,t.jsx)(n.code,{children:".key.txt"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0432\xa0\u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435.)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b ",(0,t.jsx)(n.code,{children:"encrypt.php"})," \u0441\xa0\u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f."]}),"\n",(0,t.jsx)(s.A,{language:"php",showLineNumbers:!0,title:"\u0424\u0430\u0439\u043b encrypt.php",children:i}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b ",(0,t.jsx)(n.code,{children:"decrypt.php"})," \u0441\xa0\u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u0434\u0435\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f."]}),"\n",(0,t.jsx)(s.A,{language:"php",showLineNumbers:!0,title:"\u0424\u0430\u0439\u043b decrypt.php",children:l}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u0412\xa0\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 (\u0432\xa0\u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u043c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0437\u0430\u043f\u0438\u0441\u0438 \u043e\xa0\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435 \u0438\u0437 \u0411\u0414) \u0434\u043e\u0431\u0430\u0432\u0438\u043c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"require_once 'encrypt.php';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u0438\xa0\u0437\u0430\u0448\u0438\u0444\u0440\u0443\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,t.jsx)("i",{lang:"en",children:"cookie"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$encryptedValue = encrypt($value);\n// \u0417\u0430\u0442\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c $encryptedValue \u043a\u0430\u043a 2\u2011\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 setcookie.\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u0412\xa0\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438, \u0437\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c, \u043f\u0440\u0435\u0434\u044a\u044f\u0432\u0438\u0432\u0448\u0438\u043c ",(0,t.jsx)("i",{lang:"en",children:"cookie"})," (\u044d\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0438\u0437 \u0411\u0414), \u0434\u043e\u0431\u0430\u0432\u0438\u043c"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"require_once 'decrypt.php';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u0438\xa0\u0434\u0435\u0448\u0438\u0444\u0440\u0443\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,t.jsx)("i",{lang:"en",children:"cookie"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$decryptedValue = decrypt($_COOKIE['\u0438\u043c\u044f']);\n// \u0417\u0430\u0442\u0435\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 $decryptedValue.\n"})}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},7227:function(e,n,r){r.d(n,{A:function(){return l}});r(6540);var t=r(4164),a={tabItem:"tabItem_Ymn6"},s=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:r,children:n})}},9489:function(e,n,r){r.d(n,{A:function(){return _}});var t=r(6540),a=r(4164),s=r(4245),l=r(6347),i=r(4113),o=r(2814),c=r(5167),u=r(9900);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(1062),x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=r(4848);function y(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),a=i[r].value;a!==t&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function $(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)($,{...n,...e})]})}function _(e){const n=(0,b.A)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(n))}}}]);