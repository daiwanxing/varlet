import{p as g,I as b}from"./index-33db06d9.js";import{p as k,d as B,c as N,b as S}from"./components-02edd959.js";import{d as v,b as p,_ as V,p as z,f as d,i as I,S as P,M as u,O as r,N as m,h as w,q as E,j as T,m as j,E as q}from"./vue-router.esm-bundler-0d52b99f.js";function A(e){return["default","primary","info","success","warning","danger"].includes(e)}function L(e){return["normal","mini","small","large"].includes(e)}const M={type:{type:String,default:"default",validator:A},size:{type:String,default:"normal",validator:L},color:{type:String},textColor:{type:String},iconName:k(g,"name"),plain:{type:Boolean,default:!1},round:{type:Boolean,default:!0},block:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},onClose:B()},{n:o,classes:O}=N("chip"),D=v({name:"VarChip",components:{VarIcon:b},inheritAttrs:!1,props:M,setup(e){const l=p(()=>{const{plain:s,textColor:a,color:n}=e;return s?{color:a||n,borderColor:n}:{color:a,background:n}}),c=p(()=>{const{size:s,block:a,type:n,plain:t,round:C}=e,$=o(a?"$--flex":"$--inline-flex"),y=t?`${o("plain")} ${o(`plain-${n}`)}`:o(`--${n}`),h=C?o("--round"):null;return[o(`--${s}`),$,y,h]});return{n:o,classes:O,chipStyles:l,contentClass:c,handleClose:s=>{S(e.onClose,s)}}}});function F(e,l,c,f,s,a){const n=z("var-icon");return d(),I(q,{name:e.n("$-fade")},{default:P(()=>[u("span",j({class:e.classes(e.n(),e.n("$--box"),...e.contentClass),style:e.chipStyles},e.$attrs),[r(e.$slots,"left"),u("span",{class:m(e.n(`text-${e.size}`))},[r(e.$slots,"default")],2),r(e.$slots,"right"),e.closable?(d(),w("span",{key:0,class:m(e.n("--close")),onClick:l[0]||(l[0]=(...t)=>e.handleClose&&e.handleClose(...t))},[E(n,{name:`${e.iconName?e.iconName:"close-circle"}`},null,8,["name"])],2)):T("",!0)],16)]),_:3},8,["name"])}const i=V(D,[["render",F]]);i.install=function(e){e.component(i.name,i)};export{i as C};
