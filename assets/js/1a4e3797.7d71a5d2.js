"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[920],{7917:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(9231),r=a(8113),s=a(8196),c=a(4119),l=a(5875),u=a(8535),o=a(9409),h=a(9111);const m=function(){const e=(0,o.k6)(),t=(0,o.TH)(),{siteConfig:{baseUrl:a}}=(0,r.default)();return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var p=a(6387),i=a(3763);function d(){}let f;var _=a(8661),g=a(9031),E=a(2098),y=a(2976);function S(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}var I=a(4137);const v={searchQueryInput:"searchQueryInput_TKjs",searchResultItem:"searchResultItem_lioH",searchResultItemPath:"searchResultItemPath_bLFx",searchResultItemSummary:"searchResultItemSummary_ddJj"};function R(e){let{searchResult:{document:t,type:a,page:r,tokens:s,metadata:c}}=e;const l=0===a,o=2===a,h=(l?t.b:r.b).slice(),m=o?t.s:t.t;return l||h.push(r.t),n.createElement("article",{className:v.searchResultItem},n.createElement("h2",null,n.createElement(u.default,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,_.C)(m,s):(0,g.o)(m,(0,E.m)(c,"t"),s,100)}})),h.length>0&&n.createElement("p",{className:v.searchResultItemPath},h.join(" \u203a ")),o&&n.createElement("p",{className:v.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,g.o)(t.t,(0,E.m)(c,"t"),s,100)}}))}const w=function(){const{siteConfig:{baseUrl:e}}=(0,r.default)(),{indexHash:t,removeDefaultStopWordFilter:a,translations:u}=(0,s.eZ)("docusaurus-plugin-search-local"),{searchValue:o,updateSearchPath:h}=m(),[_,g]=(0,n.useState)(o),[E,w]=(0,n.useState)(),[k,b]=(0,n.useState)(),q=(0,n.useMemo)((()=>_?S(u.search_results_for,{keyword:_}):u.search_the_documentation),[_,u.search_results_for,u.search_the_documentation]);(0,n.useEffect)((()=>{h(_),E&&(_?E(_,(e=>{b(e)})):b(void 0))}),[_,E]);const C=(0,n.useCallback)((e=>{g(e.target.value)}),[]);return(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:n}=await(0,p.w)(e,t);w((()=>(0,i.v)({wrappedIndexes:n,removeDefaultStopWordFilter:a,resultsLimit:100,onResults:(f||("undefined"!=typeof _paq&&_paq&&_paq?.push&&(f=function(e,t){_paq.push(["trackSiteSearch",e,!1,(t||[]).length])}),"undefined"!=typeof gtag&&"function"==typeof gtag&&(f=function(e){gtag("event","search",{search_term:e})}),"undefined"!=typeof appInsights&&(f=function(e){appInsights.trackEvent({name:"search",properties:{search_term:e}})})),f||d)})))}()}),[e,t,a]),n.createElement(c.Z,null,n.createElement(l.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"})),n.createElement(I.Z,null,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,q),n.createElement("input",{type:"search",name:"q",className:v.searchQueryInput,"aria-label":"Search",onChange:C,value:_,autoComplete:"off",autoFocus:!0}),!E&&_&&n.createElement("div",null,n.createElement(y.Z,null)),k&&(k.length>0?n.createElement("p",null,S(1===k.length?u.count_documents_found:u.count_documents_found_plural,{count:k.length})):n.createElement("p",null,u.no_documents_were_found)),n.createElement("section",null,k&&k.map((e=>n.createElement(R,{key:e.document.i,searchResult:e})))))))}}}]);