"use strict";(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[8286],{2034:function(n,e,t){t.r(e),t.d(e,{assets:function(){return x},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return j}});var r=t(5893),s=t(1151),c="import { ProductList } from '../ProductList/ProductList.jsx';\n\nfunction App() {\n  // \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u043e\u0442\u0440\u0435\u043d\u0434\u0435\u0440\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ProductList.\n  return (\n    <ProductList />\n  );\n}\n\n// \u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e App.\n// \u0422\u0435\u043f\u0435\u0440\u044c \u0435\u0451 \u043c\u043e\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c import.\nexport {\n  App,\n};\n",o='import React from \'react\';\n\n// \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \xab\u041a\u043d\u043e\u043f\u043a\u0430\xbb.\nfunction Button(props) {\n\n  // \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 props \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b \u0438\xa0\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b, \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 JSX.\n  // \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0437 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438 <Button a="1" b="2">c</Button> \u0432\xa0props \u043f\u043e\u043f\u0430\u0434\u0451\u0442\n  // {\n  //   "a": "1",\n  //   "b": "2",\n  //   "children": "c"\n  // }\n\n  // \u0421\u043e\u043e\u0431\u0449\u0430\u0435\u043c, \u0447\u0442\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 Button \u043f\u0440\u0438 \u0440\u0435\u043d\u0434\u0435\u0440\u0435 \u0441\u0442\u0430\u043d\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c HTML button.\n  // \u0412\u0441\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b \u0438\xa0\u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u044b \u0432\xa0button.\n  // \u0424\u0438\u0433\u0443\u0440\u043d\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0432\xa0JSX\xa0\u2014 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0432\u044b\u0432\u043e\u0434\u0430.\n  // \u041c\u043d\u043e\u0433\u043e\u0442\u043e\u0447\u0438\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0440\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430.\n  return (\n    <button {...props}>{props.children}</button>\n  );\n}\n\n// \u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e/\u2060\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 Button.\n// \u0422\u0435\u043f\u0435\u0440\u044c Button \u043c\u043e\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c import.\nexport {\n  Button,\n};\n',i=t(7416),d='<!DOCTYPE html>\n<html lang="ru-luna1918">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport"\n        content="width=device-width, initial-scale=1.0">\n  <title>\u041c\u0430\u0433\u0430\u0437\u0438\u043d</title>\n</head>\n<body>\n  <noscript>\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 JavaScript.</noscript>\n  <div id="my-app-root"></div>\n</body>\n</html>\n',l="import { App } from '../src/components/App/App.jsx';\nimport { createRoot } from 'react-dom/client';\n\n// @ts-check\n\nwindow.addEventListener('load', function () {\n  // \u041d\u0430\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\xa0\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u043c id, \u0440\u0430\u0432\u043d\u044b\u043c my-app-root.\n  const container = document.getElementById('my-app-root');\n\n  // \u0417\u0430\u0434\u0430\u0451\u043c \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 React.\n  const root = createRoot(container);\n\n  // \u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 App.\n  root.render(<App />);\n});\n",a="import { Button } from '../Button/Button.jsx';\n\n// \u0424\u0443\u043d\u043a\u0446\u0438\u044f, \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u043d\u0430\u0436\u0430\u0442\u0438\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443.\nfunction handleClick(id) {\n  if (confirm(`\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442 ${id}?`)) {\n    console.log(`\u041f\u0440\u043e\u0434\u0443\u043a\u0442 \u0441\xa0\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c ${id} \u0443\u0434\u0430\u043b\u0451\u043d.`);\n  }\n}\n\n// \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \xab\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0442\u043e\u0432\u0430\u0440\u0430\xbb.\nfunction ProductItem({ product }) {\n\n  // \u0412\xa0ProductItem, \u043a\u0430\u043a \u0438\xa0\u0432\xa0Button, \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 props,\n  // \u043d\u043e \u0437\u0434\u0435\u0441\u044c \u043c\u044b \u0440\u0435\u0448\u0438\u043b\u0438 \u0438\u0437\u0432\u043b\u0435\u0447\u044c \u0438\u0437 props \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e \u043f\u043e\u043b\u0435\xa0\u2014 product.\n  // \u041c\u044b \u043e\u0436\u0438\u0434\u0430\u0435\u043c, \u0447\u0442\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:\n  // <ProductItem product={{\n  //   id: 123,\n  //   name: '\u041c\u043e\u043b\u043e\u043a\u043e',\n  //   price: 100.99,\n  // }} />\n\n  // \u0421\u043e\u043e\u0431\u0449\u0430\u0435\u043c, \u0447\u0442\u043e ProductItem \u043f\u0440\u0438 \u0440\u0435\u043d\u0434\u0435\u0440\u0435 \u0441\u0442\u0430\u0432\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u043c HTML,\n  // \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u043c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a, \u0446\u0435\u043d\u0443 \u0438\xa0\u043a\u043d\u043e\u043f\u043a\u0443 \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430 \u0438\u0437 \u0411\u0414.\n  return (\n    <>\n      <h1>{product.name}</h1>\n      <p>\u0426\u0435\u043d\u0430: {product.price}\xa0\u0440\u0443\u0431.</p>\n      <Button onClick={() => {\n        handleClick(product.id);\n      }}>\u0423\u0434\u0430\u043b\u0438\u0442\u044c</Button>\n    </>\n  );\n}\n\n// \u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e/\u2060\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ProductItem.\n// \u0422\u0435\u043f\u0435\u0440\u044c ProductItem \u043c\u043e\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c import.\nexport {\n  ProductItem,\n};\n",p="import { useEffect, useState } from 'react';\nimport { ProductItem } from '../ProductItem/ProductItem.jsx';\n\n// \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \xab\u0412\u0438\u0442\u0440\u0438\u043d\u0430\xbb.\nfunction ProductList() {\n  // \u041e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f products\n  // \u0438\xa0\u0444\u0443\u043d\u043a\u0446\u0438\u044e\xad\u2011\u043c\u0443\u0442\u0430\u0442\u043e\u0440 setProducts \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0435\u0451 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f.\n  const [products, setProducts] = useState([]);\n\n  // \u0424\u0443\u043d\u043a\u0446\u0438\u044f useEffect \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\xa0\u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439\n  // (\u0432\xa0\u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435\xa0\u2014 \u0441\xa0\u0411\u0414 \u0447\u0435\u0440\u0435\u0437 JSON API \u043d\u0430 Laravel).\n  useEffect(() => {\n\n    // \u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0449\u0430\u044f \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u0442\u043e\u0432\u0430\u0440\u043e\u0432\n    // \u0438\xa0\u043e\u0431\u043d\u043e\u0432\u043b\u044f\u044e\u0449\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e products \u0447\u0435\u0440\u0435\u0437 \u0432\u044b\u0437\u043e\u0432 setProducts.\n    async function fetchProducts() {\n      const response = await fetch('http://127.0.0.1:8000/api/products/');\n      const json = await response.json();\n      setProducts(json.data);\n    };\n\n    // \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a.\n    fetchProducts().catch(console.error);\n  }, []);\n\n  // \u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043c\u0430\u0441\u0441\u0438\u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 HTML article, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432.\n  // \u0412\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 key \u043d\u0443\u0436\u0435\u043d React \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u0440\u0438\u0441\u043e\u0432\u043a\u0438.\n  const items = products.map(function (product) {\n    return (\n      <article key={product.id}>\n        <ProductItem product={product} />\n      </article>\n    );\n  });\n\n  return (\n    <>\n      {items}\n    </>\n  );\n}\n\n// \u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e/\u2060\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ProductList.\n// \u0422\u0435\u043f\u0435\u0440\u044c ProductList \u043c\u043e\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c import.\nexport {\n  ProductList,\n};\n";const u={},h="\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f",m={id:"laravel/02/example",title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 React",source:"@site/docs/laravel/02/example.mdx",sourceDirName:"laravel/02",slug:"/laravel/02/example",permalink:"/laravel/02/example",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435",permalink:"/laravel/02/task"},next:{title:"09.02.07\u2011\u0411\u0414. \u041c\u0414\u041a.02.01. \u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f",permalink:"/swe/"}},x={},j=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 <i>React</i>",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-react",level:2},{value:"\u041a\u043e\u0434",id:"\u043a\u043e\u0434",level:2}];function f(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u0437\u0430\u0434\u0430\u043d\u0438\u044f",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f"}),"\n",(0,r.jsxs)(e.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-react",children:["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 ",(0,r.jsx)("i",{lang:"en",children:"React"})]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"mkdir react-shop\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442 ",(0,r.jsx)("i",{lang:"en",children:"Node.js"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"npm init\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u0412\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0444\u0430\u0439\u043b ",(0,r.jsx)(e.code,{children:"package.json"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043c \u043f\u0430\u043a\u0435\u0442\u044b, \u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043d\u0430\u0448 \u043f\u0430\u043a\u0435\u0442."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"npm install react react-dom react-scripts\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u044b \u0432\xa0\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 ",(0,r.jsx)(e.code,{children:"node_modules"})," \u0438\xa0\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432\xa0\u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(e.code,{children:"package.json"}),", \u0432\xa0\u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,r.jsx)(e.code,{children:"dependencies"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043f\u0430\u043a\u0435\u0442\u0430."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"mkdir public\nmkdir src\nmkdir src/components\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"echo '' > src/index.js\necho '' > public/index.html\necho '' > src/components/App.js\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u043a\u043e\u0434",children:"\u041a\u043e\u0434"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0448\u0430\u0431\u043b\u043e\u043d \u0432\u0435\u0431\xad\u2011\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b."}),"\n",(0,r.jsx)(i.Z,{language:"html",showLineNumbers:!0,title:"react-shop/public/index.html",children:d}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,r.jsx)(e.code,{children:"Button"}),"."]}),"\n",(0,r.jsx)(i.Z,{language:"jsx",showLineNumbers:!0,title:"react-shop/src/components/Button/Button.jsx",children:o}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,r.jsx)(e.code,{children:"ProductItem"}),"."]}),"\n",(0,r.jsx)(i.Z,{language:"jsx",showLineNumbers:!0,title:"react-shop/src/components/ProductItem/ProductItem.jsx",children:a}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,r.jsx)(e.code,{children:"ProductList"}),"."]}),"\n",(0,r.jsx)(i.Z,{language:"jsx",showLineNumbers:!0,title:"react-shop/src/components/ProductList/ProductList.jsx",children:p}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,r.jsx)(e.code,{children:"App"}),"."]}),"\n",(0,r.jsx)(i.Z,{language:"jsx",showLineNumbers:!0,title:"react-shop/src/components/App/App.jsx",children:c}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0432\u0435\u0431\xad\u2011\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(i.Z,{language:"jsx",showLineNumbers:!0,title:"react-shop/src/index.jsx",children:l}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"npm run start\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u041e\u0442\u043a\u0440\u043e\u0435\u043c \u0432\xa0\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0432\u0435\u0431\xad\u2011\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, ",(0,r.jsx)("i",{lang:"en",children:"URL"})," \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b\u0432\u0435\u0434\u0435\u043d \u0432\xa0\u043a\u043e\u043d\u0441\u043e\u043b\u044c."]}),"\n"]}),"\n"]})]})}function g(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(f,{...n})}):f(n)}}}]);