import{d,u as f,a as m,c as g,b as p}from"./components-02edd959.js";import{t as C}from"./elements-b6d7a45c.js";import{d as _,b as v,w as u,_ as y,f as h,h as b,O,N as R,R as k}from"./vue-router.esm-bundler-0d52b99f.js";function w(e){return["flex-start","flex-end","center","space-between","space-around"].includes(e)}function N(e){return["flex-start","center","flex-end"].includes(e)}const S={gutter:{type:[String,Number],default:0},justify:{type:String,default:"flex-start",validator:w},align:{type:String,default:"flex-start",validator:N},onClick:d()},$=Symbol("ROW_BIND_COL_KEY"),E=Symbol("ROW_COUNT_COL_KEY");function P(){const{bindChildren:e,childProviders:t}=f($),{length:n}=m(E);return{length:n,cols:t,bindCols:e}}const{n:L,classes:j}=g("row"),B=_({name:"VarRow",props:S,setup(e){const{cols:t,bindCols:n,length:i}=P(),s=v(()=>C(e.gutter)/2),a=()=>{t.forEach(o=>{o.setPadding({left:s.value,right:s.value})})},r=o=>{p(e.onClick,o)},c={computePadding:a};return u(()=>i.value,a),u(()=>e.gutter,a),n(c),{n:L,classes:j,average:s,handleClick:r}}});function K(e,t,n,i,s,a){return h(),b("div",{class:R(e.classes(e.n(),e.n("$--box"))),style:k({justifyContent:e.justify,alignItems:e.align,margin:e.average?`0 -${e.average}px`:void 0}),onClick:t[0]||(t[0]=(...r)=>e.handleClick&&e.handleClick(...r))},[O(e.$slots,"default")],6)}const l=y(B,[["render",K]]);l.install=function(e){e.component(l.name,l)};export{l as R,$ as a,E as b};
