(self.webpackChunk_edukisto_tlm=self.webpackChunk_edukisto_tlm||[]).push([[2053],{7416:function(e,t,n){"use strict";n.d(t,{Z:function(){return H}});var o=n(7294),s=n(1048),c=n(6010),r=n(9200),a=n(107);function l(){const{prism:e}=(0,a.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var i=n(3702),u=n(7594),d=n.n(u);const m=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function b(e,t){const n=e.map((e=>{const{start:n,end:o}=f[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function h(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:c}=t;if(c&&p.test(c)){const e=c.match(p).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return b(["tex"],t);case"lua":case"haskell":case"sql":return b(["lua"],t);case"wasm":return b(["wasm"],t);default:return b(Object.keys(f).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(o,s),a=n.split("\n"),l=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<a.length;){const e=a[d].match(r);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${d},`:u[t]?l[u[t]].start=d:m[t]&&(l[m[t]].range+=`${l[m[t]].start}-${d-1},`),a.splice(d,1)}n=a.join("\n");const h={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}var g={codeBlockContainer:"codeBlockContainer_Ckt0"},k=n(5893);function x(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const c=t[o];c&&"string"==typeof s&&(n[c]=s)})),n}(l());return(0,k.jsx)(t,{...n,style:o,className:(0,c.Z)(n.className,g.codeBlockContainer,i.k.common.codeBlock)})}var B={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function j(e){let{children:t,className:n}=e;return(0,k.jsx)(x,{as:"pre",tabIndex:0,className:(0,c.Z)(B.codeBlockStandalone,"thin-scrollbar",n),children:(0,k.jsx)("code",{className:B.codeBlockLines,children:t})})}var y=n(3768);const v={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,s]=(0,o.useState)(),c=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=v);const s=(0,y.zX)(t),c=(0,y.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,c),()=>t.disconnect()}),[e,s,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var N=n(2573),w={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function L(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=s({line:t,className:(0,c.Z)(n,o&&w.codeLine)}),l=t.map(((e,t)=>(0,k.jsx)("span",{...r({token:e,key:t})},t)));return(0,k.jsxs)("span",{...a,children:[o?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:w.codeLineNumber}),(0,k.jsx)("span",{className:w.codeLineContent,children:l})]}):l,(0,k.jsx)("br",{})]})}var E=n(7325);function I(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function _(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}var S={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function A(e){let{code:t,className:n}=e;const[s,r]=(0,o.useState)(!1),a=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const c=document.getSelection(),r=c.rangeCount>0&&c.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),r&&(c.removeAllRanges(),c.addRange(r)),s&&s.focus()}(t),r(!0),a.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,k.jsx)("button",{type:"button","aria-label":s?(0,E.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,S.copyButton,s&&S.copyButtonCopied),onClick:l,children:(0,k.jsxs)("span",{className:S.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(I,{className:S.copyButtonIcon}),(0,k.jsx)(_,{className:S.copyButtonSuccessIcon})]})})}function T(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}var $={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function W(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,E.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,o&&$.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,k.jsx)(T,{className:$.wordWrapButtonIcon,"aria-hidden":"true"})})}function Z(e){let{children:t,className:n="",metastring:s,title:r,showLineNumbers:i,language:u}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,a.L)(),f=function(e){return e?.toLowerCase()}(u??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),b=l(),g=function(){const[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),c=(0,o.useRef)(null),r=(0,o.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),a=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");s(n)}),[c]);return C(c,a),(0,o.useEffect)((()=>{a()}),[e,a]),(0,o.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:r}}(),j=function(e){return e?.match(m)?.groups.title??""}(s)||r,{lineClassNames:y,code:v}=h(t,{metastring:s,language:f,magicComments:p}),w=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(s);return(0,k.jsxs)(x,{as:"div",className:(0,c.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`),children:[j&&(0,k.jsx)("div",{className:B.codeBlockTitle,children:j}),(0,k.jsxs)("div",{className:B.codeBlockContent,children:[(0,k.jsx)(N.y$,{theme:b,code:v,language:f??"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:s,getTokenProps:r}=e;return(0,k.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,c.Z)(t,B.codeBlock,"thin-scrollbar"),style:n,children:(0,k.jsx)("code",{className:(0,c.Z)(B.codeBlockLines,w&&B.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,k.jsx)(L,{line:e,getLineProps:s,getTokenProps:r,classNames:y[t],showLineNumbers:w},t)))})})}}),(0,k.jsxs)("div",{className:B.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,k.jsx)(W,{className:B.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,k.jsx)(A,{className:B.codeButton,code:v})]})]})]})}function H(e){let{children:t,...n}=e;const c=(0,s.Z)(),r=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof r?Z:j;return(0,k.jsx)(a,{...n,children:r},String(c))}},7594:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,c]=t;if(o&&c){o=parseInt(o),c=parseInt(c);const e=o<c?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(c+=e);for(let t=o;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},a:function(){return r}});var o=n(7294);const s={},c=o.createContext(s);function r(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);