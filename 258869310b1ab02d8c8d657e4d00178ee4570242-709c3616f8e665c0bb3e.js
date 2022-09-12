"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[214],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return w},P:function(){return b},S:function(){return z},_:function(){return s},a:function(){return l},b:function(){return c},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(4811),a(5697)),i=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,s,o){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);var u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,d=["children"],p=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,d);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,o=void 0===i?"":i,c=e.shouldLoad,u=s(e,h);return r.createElement("img",l({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:o}))},y=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,o=void 0===i||i,c=s(e,f),u=c.sizes||(null==t?void 0:t.sizes),m=r.createElement(v,l({},c,t,{sizes:u,shouldLoad:o}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:u})})),m):m};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var E=["fallback"],b=function(e){var t=e.fallback,a=s(e,E);return t?r.createElement(y,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(m=y.propTypes)?void 0:m.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var w=function(e){return r.createElement(r.Fragment,null,r.createElement(y,l({},e)),r.createElement("noscript",null,r.createElement(y,l({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=y.propTypes;var N,C,L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:L},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],q=new Set,T=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,m=e.className,d=e.class,p=e.onStartLoad,g=e.onLoad,h=e.onError,f=s(e,S),v=i.width,y=i.height,E=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(v,y,E),w=b.style,L=b.className,x=s(b,k),T=(0,r.useRef)(),A=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);d&&(m=d);var I=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,v,y);return(0,r.useEffect)((function(){N||(N=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=T.current.querySelector("[data-gatsby-image-ssr]");return r&&o()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void q.add(A)):C&&q.has(A)?void 0:(N.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;T.current&&(T.current.innerHTML=r(l({isLoading:!0,isLoaded:q.has(A),image:i},f)),q.has(A)||(e=requestAnimationFrame((function(){T.current&&(t=n(T.current,A,q,c,p,g,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){q.has(A)&&C&&(T.current.innerHTML=C(l({isLoading:q.has(A),isLoaded:q.has(A),image:i},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,l({},x,{style:l({},w,c,{backgroundColor:u}),className:L+(m?" "+m:""),ref:T,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));A.propTypes=x,A.displayName="GatsbyImage";var I,O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],_=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:L,width:_,height:_,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},z=(I=A,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,O);return n&&console.warn(n),a?r.createElement(I,l({image:a},i)):(console.warn("Image not loaded",t),null)});z.displayName="StaticImage",z.propTypes=R},5006:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(){return r.createElement("div",{className:"w3ls"},r.createElement("div",{className:"container"},r.createElement("div",{className:"col-md-4 w3ls-right"},r.createElement("h3",null,"Contact Us"),r.createElement("p",{className:"para"},"Corrupti quos dolores et quas molestias excepturi ."),r.createElement("ul",{className:"con-icons"},r.createElement("li",null,r.createElement("span",{className:"glyphicon glyphicon-phone","aria-hidden":"true"}),"+123 456 7890"),r.createElement("li",null,r.createElement("a",{href:"mailto:info@example.com"},r.createElement("span",{className:"glyphicon glyphicon-envelope","aria-hidden":"true"}),"info@example.com")),r.createElement("li",null,r.createElement("span",{className:"glyphicon glyphicon-map-marker","aria-hidden":"true"}),"London, Jasmin Road"))),r.createElement("div",{className:"col-md-4 w3ls-left"},r.createElement("h3",null,"Information"),r.createElement("p",{className:"para"},"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti at que corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt.")),r.createElement("div",{className:"col-md-4 w3ls-right"},r.createElement("h3",null,"Follow Us"),r.createElement("p",{className:"para"},"voluptatum deleniti at que corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt."),r.createElement("ul",{className:"fb_icons"},r.createElement("li",{className:"hvr-rectangle-out"},r.createElement("a",{className:"fb",href:"#"})),r.createElement("li",{className:"hvr-rectangle-out"},r.createElement("a",{className:"twit",href:"#"})),r.createElement("li",{className:"hvr-rectangle-out"},r.createElement("a",{className:"goog",href:"#"})),r.createElement("li",{className:"hvr-rectangle-out"},r.createElement("a",{className:"pin",href:"#"})),r.createElement("li",{className:"hvr-rectangle-out"},r.createElement("a",{className:"drib",href:"#"})))),r.createElement("div",{className:"clearfix"}),r.createElement("p",{className:"copy-right"},"Copyright © 2016.Company name All rights reserved.",r.createElement("a",{target:"_blank",href:"http://guantaow.taobao.com/"},"Turing&Basquiat Tech Community"),r.createElement("a",{target:"_blank",href:"http://www.moobnn.com"},"网页模板"))))}},3017:function(e,t,a){a.d(t,{Z:function(){return l}});var r,n=a(7294),i=a(1597);function l(){var e=(0,n.useState)(r.About.toString());e[0],e[1];return n.createElement("div",null,n.createElement("div",{className:"banner-1 agileinfo-2"},n.createElement("div",{className:"container"},n.createElement("div",{className:"header"},n.createElement("nav",{className:"navbar navbar-default"},n.createElement("div",{className:"navbar-header"},n.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"},n.createElement("span",{className:"sr-only"},"Toggle navigation"),n.createElement("span",{className:"icon-bar"}),n.createElement("span",{className:"icon-bar"}),n.createElement("span",{className:"icon-bar"})),n.createElement("h1",null,n.createElement("a",{href:"/"},"Cognate"))),n.createElement("div",null,n.createElement("ul",{className:"nav navbar-nav navbar-right"},n.createElement("li",null,n.createElement(i.rU,{to:"/"},"Home")),n.createElement("li",null,n.createElement(i.rU,{to:"/about"},"About")),n.createElement("li",null,n.createElement(i.rU,{to:"/services"},"Services")),n.createElement("li",null,n.createElement(i.rU,{to:"/gallery"},"Gallery")),n.createElement("li",null,n.createElement(i.rU,{to:"/contact"},"Contact"))),n.createElement("div",{className:"clearfix"}," "))),n.createElement("div",{className:"cd-main-header"},n.createElement("ul",{className:"cd-header-buttons"},n.createElement("li",null,n.createElement("a",{className:"cd-search-trigger",href:"#cd-search"}," ",n.createElement("span",null))))),n.createElement("div",{id:"cd-search",className:"cd-search"},n.createElement("form",{action:"#",method:"post"},n.createElement("input",{name:"Search",type:"search",placeholder:"Search..."})))))))}!function(e){e[e.About=0]="About",e[e.Services=1]="Services",e[e.Gallery=2]="Gallery",e[e.Contact=3]="Contact"}(r||(r={}))}}]);
//# sourceMappingURL=258869310b1ab02d8c8d657e4d00178ee4570242-709c3616f8e665c0bb3e.js.map