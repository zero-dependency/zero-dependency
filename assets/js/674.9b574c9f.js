(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[674],{7100:(e,t,n)=>{"use strict";n.d(t,{b:()=>o,k:()=>i});var r=n(79),s=n(8511),c=n(5250);const a=r.createContext(null);function o(e){let{children:t,content:n}=e;const s=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,c.jsx)(a.Provider,{value:s,children:t})}function i(){const e=(0,r.useContext)(a);if(null===e)throw new s.i6("DocProvider");return e}},575:(e,t,n)=>{"use strict";n.d(t,{F:()=>o});var r=n(79),s=n(8511);const c={attributes:!0,characterData:!0,childList:!0,subtree:!0};function a(e,t){const[n,a]=(0,r.useState)(),o=(0,r.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,r.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=c);const a=(0,s.zX)(t),o=(0,s.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function o(){const[e,t]=(0,r.useState)(!1),[n,s]=(0,r.useState)(!1),c=(0,r.useRef)(null),o=(0,r.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),i=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");s(n)}),[c]);return a(c,i),(0,r.useEffect)((()=>{i()}),[e,i]),(0,r.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:o}}},5716:(e,t,n)=>{"use strict";n.d(t,{p:()=>c});var r=n(7662),s=n(4878);function c(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,c=e.darkTheme||n;return"dark"===t?c:n}},5672:(e,t,n)=>{"use strict";n.d(t,{S:()=>i});var r=n(79),s=n(4878);function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function a(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>c(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function o(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function i(e){const t=(0,r.useRef)(void 0),n=o();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:s,minHeadingLevel:c,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let s=t;s<=n;s+=1)r.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:c,maxHeadingLevel:o}),l=a(i,{anchorTopOffset:n.current}),u=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}},3324:(e,t,n)=>{"use strict";n.d(t,{X:()=>c});var r=n(79),s=n(5250);function c(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),c=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:c.length>0?(0,s.jsx)(s.Fragment,{children:c}):null}}(e.children),c=e.title??t;return{...e,...c&&{title:c},children:n}}},9639:(e,t,n)=>{"use strict";n.d(t,{QC:()=>p,Vo:()=>f,bc:()=>d,nZ:()=>h,nt:()=>m});var r=n(6494),s=n.n(r);const c=/title=(?<quote>["'])(?<title>.*?)\1/,a=/\{(?<range>[\d,-]+)\}/,o={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},i={...o,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},l=Object.keys(o);function u(e,t){const n=e.map((e=>{const{start:n,end:r}=i[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function d(e){return e?.match(c)?.groups.title??""}function m(e){return Boolean(e?.includes("showLineNumbers"))}function f(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function h(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:c,metastring:o}=t;if(o&&a.test(o)){const e=o.match(a).groups.range;if(0===c.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=c[0].className,r=s()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return u(["js","jsBlock"],t);case"jsx":case"tsx":return u(["js","jsBlock","jsx"],t);case"html":return u(["js","jsBlock","html"],t);case"python":case"py":case"bash":return u(["bash"],t);case"markdown":case"md":return u(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return u(["tex"],t);case"lua":case"haskell":case"sql":return u(["lua"],t);case"wasm":return u(["wasm"],t);case"vb":case"vba":case"visual-basic":return u(["vb","rem"],t);case"vbnet":return u(["vbnet","rem"],t);case"batch":return u(["rem"],t);case"basic":return u(["rem","f90"],t);case"fsharp":return u(["js","ml"],t);case"ocaml":case"sml":return u(["ml"],t);case"fortran":return u(["f90"],t);case"cobol":return u(["cobol"],t);default:return u(l,t)}}(r,c),d=n.split("\n"),m=Object.fromEntries(c.map((e=>[e.className,{start:0,range:""}]))),f=Object.fromEntries(c.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),h=Object.fromEntries(c.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(c.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let s=0;s<d.length;){const e=d[s].match(i);if(!e){s+=1;continue}const t=e.slice(1).find((e=>void 0!==e));f[t]?m[f[t]].range+=`${s},`:h[t]?m[h[t]].start=s:p[t]&&(m[p[t]].range+=`${m[p[t]].start}-${s-1},`),d.splice(s,1)}n=d.join("\n");const b={};return Object.entries(m).forEach((e=>{let[t,{range:n}]=e;s()(n).forEach((e=>{b[e]??=[],b[e].push(t)}))})),{lineClassNames:b,code:n}}function p(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,s]=e;const c=t[r];c&&"string"==typeof s&&(n[c]=s)})),n}},3517:(e,t,n)=>{"use strict";n.d(t,{a:()=>c,b:()=>o});var r=n(79);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):r.push(s)})),r}function c(e){return(0,r.useMemo)((()=>s(e)),[e])}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:c}=e;return(0,r.useMemo)((()=>a({toc:s(t),minHeadingLevel:n,maxHeadingLevel:c})),[t,n,c])}},7167:(e,t,n)=>{"use strict";n.d(t,{T$:()=>i,cI:()=>a,eU:()=>o});n(79);var r=n(6513),s=n(6872),c=n(5250);function a(){return(0,c.jsx)(r.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,c.jsx)(r.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function i(){return(0,c.jsx)(s.Z,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}},6494:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,s,c]=t;if(r&&c){r=parseInt(r),c=parseInt(c);const e=r<c?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(c+=e);for(let t=r;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);