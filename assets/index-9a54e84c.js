import{v as A}from"./index-73a91f38.js";import{I as Q}from"./index-33db06d9.js";import{B as Y}from"./index-fafad675.js";import{d as H,c as Z,b as F}from"./components-02edd959.js";import{a as y,d as G}from"./elements-b6d7a45c.js";import{u as J}from"./zIndex-2017f19f.js";import{u as K}from"./lock-e6232335.js";import{d as X,a as o,b as _,w as x,n as ee,_ as oe,p as L,ag as te,D as ae,f as n,h as i,M as I,O as r,N as t,R as c,j as u,Q as T,q as V,S as le,ah as ne}from"./vue-router.esm-bundler-0d52b99f.js";function ie(e){return["fill","contain","cover","none","scale-down"].includes(e)}const se={src:{type:String},fit:{type:String,validator:ie,default:"cover"},imageHeight:{type:[String,Number]},imageWidth:{type:[String,Number]},outline:{type:Boolean,default:!1},layout:{type:String,default:"column"},floating:{type:Boolean,default:!1},floatingDuration:{type:Number,default:250},alt:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},elevation:{type:[Number,String]},ripple:{type:Boolean,default:!1},onClick:H(),"onUpdate:floating":H()},{n:re,classes:ue}=Z("card"),de=500,fe=X({name:"VarCard",directives:{Ripple:A},components:{VarIcon:Q,VarButton:Y},props:se,setup(e){const m=o(null),R=o(null),d=o("auto"),f=o("auto"),v=o("100%"),s=o("100%"),a=o("auto"),l=o("auto"),g=o(void 0),w=o("hidden"),$=o("0px"),b=o("0"),k=_(()=>e.layout==="row"),C=o(!1),S=o(!1),{zIndex:W}=J(()=>e.floating,1);K(()=>e.floating,()=>!k.value);let D="auto",B="auto",z=null;const p=o(null),P=async()=>{clearTimeout(p.value),clearTimeout(z),p.value=null,p.value=setTimeout(async()=>{const{width:h,height:j,left:M,top:q}=m.value.getBoundingClientRect();d.value=y(h),f.value=y(j),v.value=d.value,s.value=f.value,a.value=y(q),l.value=y(M),g.value="fixed",D=a.value,B=l.value,C.value=!0,await G(),a.value="0",l.value="0",v.value="100vw",s.value="100vh",$.value="auto",b.value="1",w.value="auto",S.value=!0},e.ripple?de:0)},U=()=>{clearTimeout(z),clearTimeout(p.value),p.value=null,v.value=d.value,s.value=f.value,a.value=D,l.value=B,$.value="0px",b.value="0",C.value=!1,z=setTimeout(()=>{d.value="auto",f.value="auto",v.value="100%",s.value="100%",a.value="auto",l.value="auto",D="auto",B="auto",w.value="hidden",g.value=void 0,S.value=!1},e.floatingDuration)},E=()=>{F(e["onUpdate:floating"],!1)},O=h=>{F(e.onClick,h)};return x(()=>e.floating,h=>{k.value||ee(()=>{h?P():U()})},{immediate:!0}),{n:re,classes:ue,toSizeUnit:y,card:m,cardFloater:R,holderWidth:d,holderHeight:f,floater:p,floaterWidth:v,floaterHeight:s,floaterTop:a,floaterLeft:l,floaterPosition:g,floaterOverflow:w,contentHeight:$,opacity:b,zIndex:W,isRow:k,close:E,showFloatingButtons:C,floated:S,handleClick:O}}});const ve=["src","alt"];function pe(e,m,R,d,f,v){const s=L("var-icon"),a=L("var-button"),l=te("ripple");return ae((n(),i("div",{ref:"card",class:t(e.classes(e.n(),[e.isRow,e.n("--layout-row")],[e.outline,e.n("--outline")],[e.elevation,e.n(`$-elevation--${e.elevation}`),e.n("$-elevation--1")])),style:c({zIndex:e.floated?e.zIndex:void 0}),onClick:m[0]||(m[0]=(...g)=>e.handleClick&&e.handleClick(...g))},[I("div",{ref:"cardFloater",class:t(e.n("floater")),style:c({width:e.floaterWidth,height:e.floaterHeight,top:e.floaterTop,left:e.floaterLeft,overflow:e.floaterOverflow,position:e.floaterPosition,transition:e.floated?`background-color ${e.floatingDuration}ms, color ${e.floatingDuration}ms, width ${e.floatingDuration}ms, height ${e.floatingDuration}ms, top ${e.floatingDuration}ms, left ${e.floatingDuration}ms`:void 0})},[r(e.$slots,"image",{},()=>[e.src?(n(),i("img",{key:0,class:t(e.n("image")),style:c({objectFit:e.fit,height:e.toSizeUnit(e.imageHeight),width:e.toSizeUnit(e.imageWidth)}),src:e.src,alt:e.alt},null,14,ve)):u("",!0)]),I("div",{class:t(e.n("container"))},[r(e.$slots,"title",{},()=>[e.title?(n(),i("div",{key:0,class:t(e.n("title"))},T(e.title),3)):u("",!0)]),r(e.$slots,"subtitle",{},()=>[e.subtitle?(n(),i("div",{key:0,class:t(e.n("subtitle"))},T(e.subtitle),3)):u("",!0)]),r(e.$slots,"description",{},()=>[e.description?(n(),i("div",{key:0,class:t(e.n("description"))},T(e.description),3)):u("",!0)]),e.$slots.extra?(n(),i("div",{key:0,class:t(e.n("footer"))},[r(e.$slots,"extra")],2)):u("",!0),e.$slots["floating-content"]&&!e.isRow?(n(),i("div",{key:1,class:t(e.n("floating-content")),style:c({height:e.contentHeight,opacity:e.opacity,transition:`opacity ${e.floatingDuration*2}ms`})},[r(e.$slots,"floating-content")],6)):u("",!0)],2),e.showFloatingButtons?(n(),i("div",{key:0,class:t(e.classes(e.n("floating-buttons"),e.n("$--box"))),style:c({zIndex:e.zIndex,opacity:e.opacity,transition:`opacity ${e.floatingDuration*2}ms`})},[r(e.$slots,"close-button",{},()=>[V(a,{"var-card-cover":"",round:"",class:t(e.classes(e.n("close-button"),e.n("$-elevation--6"))),onClick:ne(e.close,["stop"])},{default:le(()=>[V(s,{"var-card-cover":"",name:"window-close",class:t(e.n("close-button-icon"))},null,8,["class"])]),_:1},8,["class","onClick"])])],6)):u("",!0)],6),I("div",{class:t(e.n("holder")),style:c({width:e.holderWidth,height:e.holderHeight})},null,6)],6)),[[l,{disabled:!e.ripple||e.floater}]])}const N=oe(fe,[["render",pe]]);N.install=function(e){e.component(N.name,N)};export{N as C};
