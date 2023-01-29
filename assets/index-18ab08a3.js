import{v as E}from"./index-5f3889e7.js";import{v as $}from"./index-a3a74808.js";import{d as _,c as B,f}from"./components-e9444427.js";import{a as I}from"./elements-f00c3e04.js";import{d as F,_ as N,ag as k,D as C,f as y,h as w,N as b,R as L,ac as M,q as a,S as n,ap as t,F as V,P as p,Q as c,aA as m,M as l,al as D,am as T}from"./vue-router.esm-bundler-de96f312.js";import{R as U}from"./index-c6629020.js";import{u as A,c as P,a as R,_ as q,b as Q}from"./index-ed871f6d.js";import"./index-0f09af22.js";/* empty css               */import"./shared-f14f9930.js";function G(e){return["fill","contain","cover","none","scale-down"].includes(e)}const H={src:{type:String},fit:{type:String,validator:G,default:"fill"},alt:{type:String},title:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:_(),onLoad:_(),onError:_()},{n:J,classes:K}=B("image"),O=F({name:"VarImage",directives:{Lazy:$,Ripple:E},props:H,setup(e){return{n:J,classes:K,toSizeUnit:I,handleLoad:r=>{const d=r.currentTarget,{lazy:v,onLoad:h,onError:z}=e;v?(d._lazy.state==="success"&&f(h,r),d._lazy.state==="error"&&f(z,r)):f(h,r)},handleError:r=>{const{lazy:d,onError:v}=e;!d&&f(v,r)}}}});const W=["alt","title","lazy-error","lazy-loading"],X=["alt","title","src"];function Y(e,i,S,r,d,v){const h=k("lazy"),z=k("ripple");return C((y(),w("div",{class:b(e.classes(e.n(),e.n("$--box"),[!e.block,e.n("$--inline-block")])),style:L({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?C((y(),w("img",{key:0,class:b(e.n("image")),alt:e.alt,title:e.title,"lazy-error":e.error,"lazy-loading":e.loading,style:L({objectFit:e.fit}),onLoad:i[0]||(i[0]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[1]||(i[1]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[2]||(i[2]=(...o)=>e.onClick&&e.onClick(...o))},null,46,W)),[[h,e.src]]):(y(),w("img",{key:1,class:b(e.n("image")),alt:e.alt,title:e.title,style:L({objectFit:e.fit}),src:e.src,onLoad:i[3]||(i[3]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[4]||(i[4]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[5]||(i[5]=(...o)=>e.onClick&&e.onClick(...o))},null,46,X))],6)),[[z,{disabled:!e.ripple}]])}const s=N(O,[["render",Y]]);s.install=function(e){e.component(s.name,s)};const Z={basicUsage:"基本使用",fitMode:"填充模式",setRadius:"设置圆角",useRipple:"开启水波",useLazyLoad:"开启懒加载"},x={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"},{add:j,use:ee,pack:g,packs:Le,merge:Se}=A(),te=e=>{P(e),ee(e)};R("zh-CN",q);R("en-US",Q);j("zh-CN",Z);j("en-US",x);const u=e=>(D("data-v-b6cd487f"),e=e(),T(),e),ae={class:"image-example-fit-item"},ie=u(()=>l("div",{class:"image-example-margin-bottom"},"fill",-1)),se={class:"image-example-fit-item"},oe=u(()=>l("div",{class:"image-example-margin-bottom"},"cover",-1)),le={class:"image-example-fit-item"},re=u(()=>l("div",{class:"image-example-margin-bottom"},"contain",-1)),ne={class:"image-example-fit-item"},de=u(()=>l("div",{class:"image-example-margin-bottom"},"none",-1)),pe={class:"image-example-fit-item"},ce=u(()=>l("div",{class:"image-example-margin-bottom"},"scale-down",-1)),me={setup(e){return M(te),(i,S)=>(y(),w(V,null,[a(t(m),null,{default:n(()=>[p(c(t(g).basicUsage),1)]),_:1}),a(t(s),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),a(t(m),null,{default:n(()=>[p(c(t(g).fitMode),1)]),_:1}),a(t(U),null,{default:n(()=>[l("div",ae,[a(t(s),{width:"22.666vw",height:"22.666vw",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ie]),l("div",se,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),oe]),l("div",le,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),re]),l("div",ne,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),de]),l("div",pe,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ce])]),_:1}),a(t(m),null,{default:n(()=>[p(c(t(g).setRadius),1)]),_:1}),a(t(U),null,{default:n(()=>[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",class:"image-example-fit-item"}),a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})]),_:1}),a(t(m),null,{default:n(()=>[p(c(t(g).useRipple),1)]),_:1}),a(t(s),{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),a(t(m),null,{default:n(()=>[p(c(t(g).useLazyLoad),1)]),_:1}),a(t(s),{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64))}},ke=N(me,[["__scopeId","data-v-b6cd487f"]]);export{ke as default};
