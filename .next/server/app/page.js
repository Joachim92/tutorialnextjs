(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9300:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var n=r(7096),i=r(6132),o=r(7284),s=r.n(o),a=r(2564),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3982)),"/Users/Joaquin/WebstormProjects/tutorialnextjs/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,5345)),"/Users/Joaquin/WebstormProjects/tutorialnextjs/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/Joaquin/WebstormProjects/tutorialnextjs/app/page.tsx"],c="/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3335:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3579,23)),Promise.resolve().then(r.t.bind(r,619,23)),Promise.resolve().then(r.t.bind(r,1459,23)),Promise.resolve().then(r.t.bind(r,3456,23)),Promise.resolve().then(r.t.bind(r,847,23)),Promise.resolve().then(r.t.bind(r,7303,23))},831:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8469,23)),Promise.resolve().then(r.t.bind(r,7490,23))},7016:()=>{},8469:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return Image}});let n=r(143),i=r(2212),o=i._(r(4218)),s=n._(r(3638)),a=n._(r(724)),l=r(288),d=r(8564),u=r(9863);r(7966);let c=r(3102),f=n._(r(4572)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,i,o){let s=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===s)return;e["data-loaded-src"]=s;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function g(e){let[t,r]=o.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let h=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:s,width:a,decoding:l,className:d,style:u,fetchPriority:c,placeholder:f,loading:p,unoptimized:h,fill:b,onLoadRef:v,onLoadingCompleteRef:x,setBlurComplete:y,setShowAltText:w,onLoad:_,onError:j,...P}=e;return o.default.createElement("img",{...P,...g(c),loading:p,width:a,height:s,decoding:l,"data-nimg":b?"fill":"1",className:d,style:u,sizes:i,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&m(e,f,v,x,y,h))},[r,f,v,x,y,j,h,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,v,x,y,h)},onError:e=>{w(!0),"empty"!==f&&y(!0),j&&j(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,n),null):o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let Image=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(c.RouterContext),n=(0,o.useContext)(u.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=p||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:s,onLoadingComplete:a}=e,m=(0,o.useRef)(s);(0,o.useEffect)(()=>{m.current=s},[s]);let g=(0,o.useRef)(a);(0,o.useEffect)(()=>{g.current=a},[a]);let[v,x]=(0,o.useState)(!1),[y,w]=(0,o.useState)(!1),{props:_,meta:j}=(0,l.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:v,showAltText:y});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{..._,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:x,setShowAltText:w,ref:t}),j.priority?o.default.createElement(b,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2126:(e,t,r)=>{"use strict";e.exports=r(2337).vendored.contexts.AmpContext},4004:(e,t,r)=>{"use strict";e.exports=r(2337).vendored.contexts.HeadManagerContext},9863:(e,t,r)=>{"use strict";e.exports=r(2337).vendored.contexts.ImageConfigContext},3489:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},288:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(7966);let n=r(6127),i=r(8564);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:b,height:v,fill:x=!1,style:y,onLoad:w,onLoadingComplete:_,placeholder:j="empty",blurDataURL:P,fetchPriority:S,layout:C,objectFit:E,objectPosition:O,lazyBoundary:M,lazyRoot:z,...I}=e,{imgConf:k,showAltText:A,blurComplete:N,defaultLoader:R}=t,D=k||i.imageConfigDefault;if("allSizes"in D)a=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);a={...D,allSizes:e,deviceSizes:t}}let q=I.loader||R;delete I.loader,delete I.srcSet;let G="__next_img_default"in q;if(G){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=q;q=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let U="",L=s(b),W=s(v);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,P=P||e.blurDataURL,U=e.src,!x){if(L||W){if(L&&!W){let t=L/e.width;W=Math.round(e.height*t)}else if(!L&&W){let t=W/e.height;L=Math.round(e.width*t)}}else L=e.width,W=e.height}}let T=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:U)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,T=!1),a.unoptimized&&(f=!0),G&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(S="high");let B=s(h),F=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:O}:{},A?{}:{color:"transparent"},y),V=N||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:L,heightInt:W,blurWidth:l,blurHeight:d,blurDataURL:P||"",objectFit:F.objectFit})+'")':'url("'+j+'")',J=V?{backgroundSize:F.objectFit||"cover",backgroundPosition:F.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},H=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:s,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,s),u=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:a({config:t,src:r,quality:o,width:l[u]})}}({config:a,src:u,unoptimized:f,width:L,quality:B,sizes:c,loader:q}),$={...I,loading:T?"lazy":m,fetchPriority:S,width:L,height:W,decoding:"async",className:g,style:{...F,...J},sizes:H.sizes,srcSet:H.srcSet,src:H.src},Y={unoptimized:f,priority:p,placeholder:j,fill:x};return{props:$,meta:Y}}},724:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return u},default:function(){return m}});let n=r(143),i=r(2212),o=i._(r(4218)),s=n._(r(7343)),a=r(2126),l=r(4004),d=r(3489);function u(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7966);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(c,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,s=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){s=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!s)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(a.AmpStateContext),n=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,d.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6127:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:s}=e,a=n?40*n:t,l=i?40*i:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},8564:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},4572:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},7343:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(4218),i=()=>{},o=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function a(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},7966:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},5345:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(4656);r(5832);var i=r(5254),o=r.n(i);function s({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:`${o().className} antialiased`,children:e})})}},3982:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(4656),i=r(8132),o=r(4353),s=r.n(o),a=r(8639),l=r.n(a);function d(){return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col p-6",children:[n.jsx("div",{className:"flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52",children:n.jsx(i.Z,{})}),(0,n.jsxs)("div",{className:"mt-4 flex grow flex-col gap-4 md:flex-row",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20",children:[n.jsx("div",{className:"h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"}),(0,n.jsxs)("p",{className:"text-xl text-gray-800 md:text-3xl md:leading-normal",children:[n.jsx("strong",{children:"Welcome to Acme."})," This is the example for the"," ",n.jsx("a",{href:"https://nextjs.org/learn/",className:"text-blue-500",children:"Next.js Learn Course"}),", brought to you by Vercel."]}),n.jsx(s(),{href:"/login",className:"flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base",children:n.jsx("span",{children:"Log in"})})]}),(0,n.jsxs)("div",{className:"flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12",children:[n.jsx(l(),{src:"/hero-desktop.png",width:1e3,height:760,className:"hidden md:block",alt:"Screenshots of the dashboard project showing desktop version"}),n.jsx(l(),{src:"/hero-mobile.png",width:560,height:620,className:"block md:hidden",alt:"Screenshots of the dashboard project showing mobile version"})]})]})]})}},8132:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(4656),i=r(6070),o=r(3861),s=r.n(o);function a(){return(0,n.jsxs)("div",{className:`${s().className} flex flex-row items-center leading-none text-white`,children:[n.jsx(i.Z,{className:"h-12 w-12 rotate-[15deg]"}),n.jsx("p",{className:"text-[44px]",children:"Acme"})]})}},8849:(e,t,r)=>{"use strict";let{createProxy:n}=r(5153);e.exports=n("/Users/Joaquin/WebstormProjects/tutorialnextjs/node_modules/next/dist/client/image-component.js")},3144:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(9968);let n=r(1083),i=r(8684);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:b,height:v,fill:x=!1,style:y,onLoad:w,onLoadingComplete:_,placeholder:j="empty",blurDataURL:P,fetchPriority:S,layout:C,objectFit:E,objectPosition:O,lazyBoundary:M,lazyRoot:z,...I}=e,{imgConf:k,showAltText:A,blurComplete:N,defaultLoader:R}=t,D=k||i.imageConfigDefault;if("allSizes"in D)a=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);a={...D,allSizes:e,deviceSizes:t}}let q=I.loader||R;delete I.loader,delete I.srcSet;let G="__next_img_default"in q;if(G){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=q;q=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let U="",L=s(b),W=s(v);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,P=P||e.blurDataURL,U=e.src,!x){if(L||W){if(L&&!W){let t=L/e.width;W=Math.round(e.height*t)}else if(!L&&W){let t=W/e.height;L=Math.round(e.width*t)}}else L=e.width,W=e.height}}let T=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:U)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,T=!1),a.unoptimized&&(f=!0),G&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(S="high");let B=s(h),F=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:O}:{},A?{}:{color:"transparent"},y),V=N||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:L,heightInt:W,blurWidth:l,blurHeight:d,blurDataURL:P||"",objectFit:F.objectFit})+'")':'url("'+j+'")',J=V?{backgroundSize:F.objectFit||"cover",backgroundPosition:F.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},H=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:s,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,s),u=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:a({config:t,src:r,quality:o,width:l[u]})}}({config:a,src:u,unoptimized:f,width:L,quality:B,sizes:c,loader:q}),$={...I,loading:T?"lazy":m,fetchPriority:S,width:L,height:W,decoding:"async",className:g,style:{...F,...J},sizes:H.sizes,srcSet:H.srcSet,src:H.src},Y={unoptimized:f,priority:p,placeholder:j,fill:x};return{props:$,meta:Y}}},1083:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:s}=e,a=n?40*n:t,l=i?40*i:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},8684:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5234:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return l},default:function(){return d}});let n=r(5196),i=r(3144),o=r(9968),s=r(8849),a=n._(r(5542)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},d=s.Image},5542:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9968:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},8639:(e,t,r)=>{"use strict";e.exports=r(5234)},5832:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[393,103],()=>r(9300));module.exports=n})();