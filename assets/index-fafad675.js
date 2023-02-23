import{v as C}from"./index-73a91f38.js";import{p as r,L as h}from"./index-bec81594.js";import{p as d,d as v,u as $,a as z,e as N,f as k,c as O,b as g}from"./components-02edd959.js";import{d as U,a as P,b as S,at as R,_ as G,p as L,ag as V,D,f as m,h as E,i as A,N as u,j as K,M as Y,O as I,R as w}from"./vue-router.esm-bundler-0d52b99f.js";function j(e){return["default","primary","info","success","warning","danger"].includes(e)}function M(e){return["normal","mini","small","large"].includes(e)}function q(e){return["button","reset","submit"].includes(e)}const F={type:{type:String,validator:j},nativeType:{type:String,default:"button",validator:q},size:{type:String,validator:M},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},autoLoading:{type:Boolean,default:!1},loadingRadius:{type:[Number,String]},loadingType:d(r,"type"),loadingSize:d(r,"size"),loadingColor:{...d(r,"color"),default:"currentColor"},onClick:v(),onTouchstart:v()},b=Symbol("BUTTON_GROUP_BIND_BUTTON_KEY"),B=Symbol("BUTTON_GROUP_COUNT_BUTTON_KEY");function te(){const{bindChildren:e,childProviders:n}=$(b),{length:a}=z(B);return{length:a,buttons:n,bindButtons:e}}function H(){const{bindParent:e,parentProvider:n}=N(b),{index:a}=k(B);return{index:a,buttonGroup:n,bindButtonGroup:e}}const{n:J,classes:Q}=O("button"),W=U({name:"VarButton",components:{VarLoading:h},directives:{Ripple:C},props:F,setup(e){const n=P(!1),{buttonGroup:a}=H(),f=S(()=>{if(!a)return{elevation:2,type:e.type!=null?e.type:"default",size:e.size!=null?e.size:"normal",color:e.color,text:e.text,textColor:e.textColor,outline:e.outline};const{type:t,size:o,color:s,textColor:l,mode:y}=a;return{elevation:0,type:e.type!=null?e.type:t.value,size:e.size!=null?e.size:o.value,color:e.color!=null?e.color:s.value,textColor:e.textColor!=null?e.textColor:l.value,text:y.value!=="normal",outline:y.value==="outline"}}),i=t=>{e.autoLoading&&(n.value=!0,t=R(t)?t:[t],Promise.all(t).then(()=>{n.value=!1}).catch(()=>{n.value=!1}))};return{n:J,classes:Q,pending:n,states:f,handleClick:t=>{const{loading:o,disabled:s,onClick:l}=e;!l||o||s||n.value||i(g(l,t))},handleTouchstart:t=>{const{loading:o,disabled:s,onTouchstart:l}=e;!l||o||s||n.value||i(g(l,t))}}}});const X=["type","disabled"];function Z(e,n,a,f,i,T){const c=L("var-loading"),t=V("ripple");return D((m(),E("button",{class:u(e.classes(e.n(),e.n("$--box"),e.n(`--${e.states.size}`),[e.block,`${e.n("$--flex")} ${e.n("--block")}`,e.n("$--inline-flex")],[e.disabled,e.n("--disabled")],[e.states.text,`${e.n(`--text-${e.states.type}`)} ${e.n("--text")}`,`${e.n(`--${e.states.type}`)} ${e.n(`$-elevation--${e.states.elevation}`)}`],[e.states.text&&e.disabled,e.n("--text-disabled")],[e.round,e.n("--round")],[e.states.outline,e.n("--outline")])),style:w({color:e.states.textColor,background:e.states.color}),type:e.nativeType,disabled:e.disabled,onClick:n[0]||(n[0]=(...o)=>e.handleClick&&e.handleClick(...o)),onTouchstart:n[1]||(n[1]=(...o)=>e.handleTouchstart&&e.handleTouchstart(...o))},[e.loading||e.pending?(m(),A(c,{key:0,class:u(e.n("loading")),"var-button-cover":"",color:e.loadingColor,type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius},null,8,["class","color","type","size","radius"])):K("",!0),Y("div",{class:u(e.classes(e.n("content"),[e.loading||e.pending,e.n("--hidden")]))},[I(e.$slots,"default")],2)],46,X)),[[t,{disabled:e.disabled||!e.ripple}]])}const p=G(W,[["render",Z]]);p.install=function(e){e.component(p.name,p)};export{p as B,te as u};
