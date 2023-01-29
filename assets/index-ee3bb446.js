import{d as S,a as N,b as g,Z as f,w as $,V as C,_ as y,f as O,h as w,O as P,N as h,R as v}from"./vue-router.esm-bundler-de96f312.js";import{d as z,b as R,e as j,f as k,c as L}from"./components-e9444427.js";import{a as U,b as B}from"./index-c6629020.js";import{a as E}from"./elements-f00c3e04.js";function V(e){return["row","column"].includes(e)}const D={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},direction:{type:String,default:"row",validator:V},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]},onClick:z()};function I(){const{parentProvider:e,bindParent:n}=R(U),{index:s}=j(B);return(!e||!n||!s)&&console.warn("col must in row"),{index:s,row:e,bindRow:n}}const{n:i,classes:K}=L("col"),W=S({name:"VarCol",props:D,setup(e){const n=N({left:0,right:0}),s=g(()=>f(e.span)),p=g(()=>f(e.offset)),{row:r,bindRow:u}=I(),l={setPadding(t){n.value=t}},b=(t,o)=>{const a=[];if(o==null)return a;if(C(o)){const{offset:m,span:c}=o;Number(c)>=0&&a.push(i(`--span-${t}-${c}`)),m&&a.push(i(`--offset-${t}-${m}`))}else Number(o)>=0&&a.push(i(`--span-${t}-${o}`));return a};return $([()=>e.span,()=>e.offset],()=>{r==null||r.computePadding()}),k(u,l),{n:i,classes:K,padding:n,toNumber:f,toSizeUnit:E,getSize:b,span:s,offset:p}}});function Y(e,n,s,p,r,u){return O(),w("div",{class:h(e.classes(e.n(),e.n("$--box"),[e.span>=0,e.n(`--span-${e.span}`)],[e.offset,e.n(`--offset-${e.offset}`)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:v({flexDirection:e.direction,paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...l)=>e.onClick&&e.onClick(...l))},[P(e.$slots,"default")],6)}const d=y(W,[["render",Y]]);d.install=function(e){e.component(d.name,d)};export{d as C};
