"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[793],{6033:(e,r,t)=>{t.d(r,{D:()=>u,f:()=>i});var o=t(79),s=t(8511),a=t(5250);const n=Symbol("EmptyContext"),l=o.createContext(n);function u(e){let{children:r}=e;const[t,s]=(0,o.useState)(null),n=(0,o.useMemo)((()=>({expandedItem:t,setExpandedItem:s})),[t]);return(0,a.jsx)(l.Provider,{value:n,children:r})}function i(){const e=(0,o.useContext)(l);if(e===n)throw new s.i6("DocSidebarItemsExpandedStateProvider");return e}},1738:(e,r,t)=>{t.d(r,{a:()=>n});var o=t(79),s=t(4928),a=t(717);function n(e){let{threshold:r}=e;const[t,n]=(0,o.useState)(!1),l=(0,o.useRef)(!1),{startScroll:u,cancelScroll:i}=(0,s.Ct)();return(0,s.RF)(((e,t)=>{let{scrollY:o}=e;const s=t?.scrollY;s&&(l.current?l.current=!1:o>=s?(i(),n(!1)):o<r?n(!1):o+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,a.S)((e=>{e.location.hash&&(l.current=!0,n(!1))})),{shown:t,scrollToTop:()=>u(0)}}},8284:(e,r,t)=>{t.r(r),t.d(r,{Collapsible:()=>p.z,ErrorBoundaryError:()=>R.aG,ErrorBoundaryErrorMessageFallback:()=>R.Ac,ErrorBoundaryTryAgainButton:()=>R.Cw,ErrorCauseBoundary:()=>R.QW,HtmlClassNameProvider:()=>S.FG,NavbarSecondaryMenuFiller:()=>P.Zo,PageMetadata:()=>S.d,ReactContextError:()=>C.i6,SkipToContentFallbackId:()=>j.u,SkipToContentLink:()=>j.l,ThemeClassNames:()=>f.k,ThemedComponent:()=>s.Z,UnlistedBannerMessage:()=>A.eU,UnlistedBannerTitle:()=>A.cI,UnlistedMetadata:()=>A.T$,composeProviders:()=>C.Qc,createStorageSlot:()=>a.WA,duplicates:()=>D.l,filterDocCardListItems:()=>l.MN,isMultiColumnFooterLinks:()=>x.a,isRegexpStringMatch:()=>I.F,listStorageKeys:()=>a._f,listTagsByLetters:()=>B,prefersReducedMotion:()=>b.n,processAdmonitionProps:()=>N.X,translateTagsPageTitle:()=>E,uniq:()=>D.j,useCollapsible:()=>p.u,useColorMode:()=>v.I,useContextualSearchFilters:()=>n._q,useCurrentSidebarCategory:()=>l.jA,useDocsPreferredVersion:()=>L.J,useEvent:()=>C.zX,usePluralForm:()=>h,usePrevious:()=>C.D9,usePrismTheme:()=>w.p,useSearchLinkCreator:()=>V,useSearchQueryString:()=>F,useStorageSlot:()=>a.Nk,useThemeConfig:()=>o.L,useWindowSize:()=>T.i});var o=t(4878),s=t(3264),a=t(1616),n=t(4359),l=t(5649),u=t(79),i=t(6079);const c=["zero","one","two","few","many","other"];function d(e){return c.filter((r=>e.includes(r)))}const m={locale:"en",pluralForms:d(["one","other"]),select:e=>1===e?"one":"other"};function g(){const{i18n:{currentLocale:e}}=(0,i.default)();return(0,u.useMemo)((()=>{try{return function(e){const r=new Intl.PluralRules(e);return{locale:e,pluralForms:d(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${r.message}\n`),m}}),[e])}function h(){const e=g();return{selectMessage:(r,t)=>function(e,r,t){const o=e.split("|");if(1===o.length)return o[0];o.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const s=t.select(r),a=t.pluralForms.indexOf(s);return o[Math.min(a,o.length-1)]}(t,r,e)}}var p=t(7929),f=t(2999),b=t(334),C=t(8511),S=t(9435),v=t(7662),P=t(3775),T=t(949),y=t(6513);const E=()=>(0,y.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function B(e){const r={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);r[t]??=[],r[t].push(e)})),Object.entries(r).sort(((e,r)=>{let[t]=e,[o]=r;return t.localeCompare(o)})).map((e=>{let[r,t]=e;return{letter:r,tags:t.sort(((e,r)=>e.label.localeCompare(r.label)))}}))}var M=t(9902);const k="q";function F(){return(0,M.Nc)(k)}function V(){const{siteConfig:{baseUrl:e,themeConfig:r}}=(0,i.default)(),{algolia:{searchPagePath:t}}=r;return(0,u.useCallback)((r=>`${e}${t}?${k}=${encodeURIComponent(r)}`),[e,t])}var x=t(6566),I=t(268),D=t(3254),w=t(5716),L=t(5795),N=t(3324),j=t(266),A=t(7167),R=t(9954)},6593:(e,r,t)=>{t.r(r),t.d(r,{AnnouncementBarProvider:()=>p.pl,BlogPostProvider:()=>m,Collapsible:()=>o.Collapsible,ColorModeProvider:()=>F.S,DEFAULT_SEARCH_TAG:()=>I.HX,DocProvider:()=>l.b,DocSidebarItemsExpandedStateProvider:()=>s.D,DocsPreferredVersionContextProvider:()=>h.L5,DocsSidebarProvider:()=>n.b,DocsVersionProvider:()=>a.q,ErrorBoundaryError:()=>o.ErrorBoundaryError,ErrorBoundaryErrorMessageFallback:()=>o.ErrorBoundaryErrorMessageFallback,ErrorBoundaryTryAgainButton:()=>o.ErrorBoundaryTryAgainButton,ErrorCauseBoundary:()=>o.ErrorCauseBoundary,HtmlClassNameProvider:()=>o.HtmlClassNameProvider,NavbarProvider:()=>q.V,NavbarSecondaryMenuFiller:()=>o.NavbarSecondaryMenuFiller,PageMetadata:()=>o.PageMetadata,PluginHtmlClassNameProvider:()=>$.VC,ReactContextError:()=>o.ReactContextError,ScrollControllerProvider:()=>A.OC,SkipToContentFallbackId:()=>o.SkipToContentFallbackId,SkipToContentLink:()=>o.SkipToContentLink,ThemeClassNames:()=>o.ThemeClassNames,ThemedComponent:()=>o.ThemedComponent,UnlistedBannerMessage:()=>o.UnlistedBannerMessage,UnlistedBannerTitle:()=>o.UnlistedBannerTitle,UnlistedMetadata:()=>o.UnlistedMetadata,composeProviders:()=>o.composeProviders,containsLineNumbers:()=>x.nt,createStorageSlot:()=>o.createStorageSlot,docVersionSearchTag:()=>I.os,duplicates:()=>o.duplicates,filterDocCardListItems:()=>o.filterDocCardListItems,findFirstSidebarItemLink:()=>D.LM,findSidebarCategory:()=>D.em,getPrismCssVariables:()=>x.QC,isActiveSidebarItem:()=>D._F,isDocsPluginEnabled:()=>D.cE,isMultiColumnFooterLinks:()=>o.isMultiColumnFooterLinks,isRegexpStringMatch:()=>o.isRegexpStringMatch,isSamePath:()=>R.Mg,isVisibleSidebarItem:()=>D.pC,keyboardFocusedClassName:()=>z.h,listStorageKeys:()=>o.listStorageKeys,listTagsByLetters:()=>o.listTagsByLetters,parseCodeBlockTitle:()=>x.bc,parseLanguage:()=>x.Vo,parseLines:()=>x.nZ,prefersReducedMotion:()=>o.prefersReducedMotion,processAdmonitionProps:()=>o.processAdmonitionProps,sanitizeTabsChildren:()=>P,splitNavbarItems:()=>q.A,translateTagsPageTitle:()=>o.translateTagsPageTitle,uniq:()=>o.uniq,useAlternatePageUtils:()=>V.l,useAnnouncementBar:()=>p.nT,useBackToTopButton:()=>W.a,useBlogPost:()=>g,useCodeWordWrap:()=>Q.F,useCollapsible:()=>o.useCollapsible,useColorMode:()=>o.useColorMode,useContextualSearchFilters:()=>o.useContextualSearchFilters,useCurrentSidebarCategory:()=>o.useCurrentSidebarCategory,useDoc:()=>l.k,useDocById:()=>D.xz,useDocRootMetadata:()=>D.SN,useDocSidebarItemsExpandedState:()=>s.f,useDocsPreferredVersion:()=>o.useDocsPreferredVersion,useDocsPreferredVersionByPluginId:()=>h.Oh,useDocsSidebar:()=>n.V,useDocsVersion:()=>a.E,useDocsVersionCandidates:()=>D.lO,useEvent:()=>o.useEvent,useFilteredAndTreeifiedTOC:()=>j.b,useHideableNavbar:()=>O.c,useHistoryPopHandler:()=>C.Rb,useHistorySelector:()=>C.xL,useHomePageRoute:()=>R.Ns,useKeyboardNavigation:()=>z.t,useLayoutDoc:()=>D.vY,useLayoutDocsSidebar:()=>D.oz,useLocalPathname:()=>N.b,useLocationChange:()=>L.S,useLockBodyScroll:()=>_.N,useNavbarMobileSidebar:()=>M.e,useNavbarSecondaryMenu:()=>k.Y,usePluralForm:()=>o.usePluralForm,usePrevious:()=>o.usePrevious,usePrismTheme:()=>o.usePrismTheme,useQueryStringValue:()=>C._X,useScrollController:()=>A.sG,useScrollPosition:()=>A.RF,useScrollPositionBlocker:()=>A.o5,useSearchLinkCreator:()=>o.useSearchLinkCreator,useSearchQueryString:()=>o.useSearchQueryString,useSidebarBreadcrumbs:()=>D.s1,useSmoothScrollTo:()=>A.Ct,useStorageSlot:()=>o.useStorageSlot,useTOCHighlight:()=>U.S,useTabs:()=>B,useThemeConfig:()=>o.useThemeConfig,useTitleFormatter:()=>w.p,useTreeifiedTOC:()=>j.a,useVisibleBlogSidebarItems:()=>H,useVisibleSidebarItems:()=>D.f,useWindowSize:()=>o.useWindowSize});var o=t(8284),s=t(6033),a=t(7368),n=t(9875),l=t(7100),u=t(79),i=t(8511),c=t(5250);const d=u.createContext(null);function m(e){let{children:r,content:t,isBlogPostPage:o=!1}=e;const s=function(e){let{content:r,isBlogPostPage:t}=e;return(0,u.useMemo)((()=>({metadata:r.metadata,frontMatter:r.frontMatter,assets:r.assets,toc:r.toc,isBlogPostPage:t})),[r,t])}({content:t,isBlogPostPage:o});return(0,c.jsx)(d.Provider,{value:s,children:r})}function g(){const e=(0,u.useContext)(d);if(null===e)throw new i.i6("BlogPostProvider");return e}var h=t(5795),p=t(3629),f=t(7911),b=t(3321),C=t(9902),S=t(3254),v=t(1616);function P(e){return u.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,u.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function T(e){const{values:r,children:t}=e;return(0,u.useMemo)((()=>{const e=r??function(e){return P(e).map((e=>{let{props:{value:r,label:t,attributes:o,default:s}}=e;return{value:r,label:t,attributes:o,default:s}}))}(t);return function(e){const r=(0,S.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function y(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function E(e){let{queryString:r=!1,groupId:t}=e;const o=(0,f.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,C._X)(s),(0,u.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(o.location.search);r.set(s,e),o.replace({...o.location,search:r.toString()})}),[s,o])]}function B(e){const{defaultValue:r,queryString:t=!1,groupId:o}=e,s=T(e),[a,n]=(0,u.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!y({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:s}))),[l,i]=E({queryString:t,groupId:o}),[c,d]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,s]=(0,v.Nk)(t);return[o,(0,u.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),m=(()=>{const e=l??c;return y({value:e,tabValues:s})?e:null})();(0,b.Z)((()=>{m&&n(m)}),[m]);return{selectedValue:a,selectValue:(0,u.useCallback)((e=>{if(!y({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);n(e),i(e),d(e)}),[i,d,s]),tabValues:s}}var M=t(962),k=t(6169),F=t(7662),V=t(2273),x=t(9639),I=t(4359),D=t(5649),w=t(8524),L=t(717),N=t(9114),j=t(3517),A=t(4928),R=t(1455),$=t(9435),q=t(7195),U=t(5672);function H(e){const{pathname:r}=(0,f.TH)();return(0,u.useMemo)((()=>e.filter((e=>function(e,r){return!(e.unlisted&&!(0,R.Mg)(e.permalink,r))}(e,r)))),[e,r])}var O=t(3986),z=t(6703),_=t(6389),Q=t(575),W=t(1738)},6330:(e,r,t)=>{const o=t(5250);r.Footer=function(){return o.jsxs("footer",{className:"tsd-footer",children:["Powered by"," ",o.jsx("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api",children:"docusaurus-plugin-typedoc-api"})," ","and ",o.jsx("a",{href:"https://typedoc.org/",children:"TypeDoc"})]})}},8277:(e,r,t)=>{const o=t(79),s=t(6682),a=t(3741),n=t(8284),l=t(6593),u=t(5250),i=(e=>e&&e.__esModule?e:{default:e})(s);r.VersionBanner=function(){const e=l.useDocsVersion(),r=e.banner,t=e.docs,s=e.pluginId,c=e.version,d=a.useDocVersionSuggestions(s).latestVersionSuggestion,m=n.useDocsPreferredVersion(s).savePreferredVersionName,g=o.useCallback((()=>{m(d.name)}),[d.name,m]);if(!r||!d)return null;const h=t[d.label];return u.jsx("div",{className:`${n.ThemeClassNames.docs.docVersionBanner} alert alert--warning margin-bottom--md`,role:"alert",children:u.jsxs("div",{children:["unreleased"===r&&u.jsx(u.Fragment,{children:"This is documentation for an unreleased version."}),"unmaintained"===r&&u.jsxs(u.Fragment,{children:["This is documentation for version ",u.jsx("b",{children:c}),"."]})," ","For the latest API, see version"," ",u.jsx("b",{children:u.jsx(i.default,{to:h.id,onClick:g,children:h.title})}),"."]})})}}}]);