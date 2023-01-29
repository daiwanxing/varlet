import{M as ae}from"./index-02c39691.js";import{v as le}from"./index-5f3889e7.js";import{I as se}from"./index-edb3b75f.js";import{C as ie}from"./index-1b33fa4a.js";import{I as ne}from"./index-f8d09fa9.js";import{d as q,c as oe,f as w}from"./components-e9444427.js";import{d as te,a as y,Z as t,b as N,w as K,X as H,_ as ue,p as C,ag as re,f as m,h as f,D as I,N as u,O,q as P,aP as Q,M as B,P as S,Q as g,F as R,ai as j,S as D,i as de,j as L}from"./vue-router.esm-bundler-de96f312.js";import{p as me}from"./index-ed871f6d.js";const pe={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},maxPagerCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function},onChange:q(),"onUpdate:current":q(),"onUpdate:size":q()},{n:ve,classes:fe}=oe("pagination"),ge=te({name:"VarPagination",components:{VarMenu:ae,VarIcon:se,VarCell:ie,VarInput:ne},directives:{Ripple:le},props:pe,setup(e){const s=y(!1),T=y(""),h=y("1"),z=y(!1),$=y(!1),i=y(t(e.current)||1),p=y(t(e.size)||10),M=y([]),c=N(()=>Math.ceil(e.maxPagerCount/2)),r=N(()=>Math.ceil(t(e.total)/t(p.value))),l=N(()=>{const a=p.value*(i.value-1)+1,o=Math.min(p.value*i.value,t(e.total));return[a,o]}),k=N(()=>e.showTotal?e.showTotal(t(e.total),l.value):""),U=(a,o)=>H(a)?!1:o===1?z.value:$.value,A=(a,o)=>H(a)?"basic":o===1?"head":"tail",X=(a,o)=>{a===i.value||e.disabled||(H(a)?i.value=a:a==="prev"?i.value>1&&(i.value-=1):a==="next"?i.value<r.value&&(i.value+=1):a==="..."&&(o===1?i.value=Math.max(i.value-e.maxPagerCount,1):i.value=Math.min(i.value+e.maxPagerCount,r.value)))},Z=()=>{e.disabled||(s.value=!0)},G=a=>{p.value=a,s.value=!1},J=a=>/^[1-9][0-9]*$/.test(a),W=(a,o,b)=>{if(b.target.blur(),J(o)){let V=t(o);V>r.value&&(V=r.value,h.value=`${V}`),V!==i.value&&(i.value=V)}a==="quick"&&(T.value=""),a==="simple"&&!J(o)&&(h.value=`${i.value}`)};return K([()=>e.current,()=>e.size],([a,o])=>{i.value=t(a)||1,p.value=t(o||10)}),K([i,p,r],([a,o,b],[V,Y])=>{let d=[];const{maxPagerCount:v,total:x,onChange:_}=e,ee=Math.ceil(t(x)/t(Y)),E=b-(v-c.value)-1;if(h.value=`${a}`,b-2>v){if(V===void 0||b!==ee)for(let n=2;n<v+2;n++)d.push(n);if(a<=v&&a<E){d=[];for(let n=1;n<v+1;n++)d.push(n+1);z.value=!0,$.value=!1}if(a>v&&a<E){d=[];for(let n=1;n<v+1;n++)d.push(a+n-c.value);z.value=a===2&&v===1,$.value=!1}if(a>=E){d=[];for(let n=1;n<v+1;n++)d.push(b-(v-n)-1);z.value=!1,$.value=!0}d=[1,"...",...d,"...",b]}else for(let n=1;n<=b;n++)d.push(n);M.value=d,V!==void 0&&b>0&&w(_,a,o),w(e["onUpdate:current"],a),w(e["onUpdate:size"],o)},{immediate:!0}),{n:ve,classes:fe,pack:me,current:i,menuVisible:s,size:p,pageCount:r,pageList:M,inputValue:T,simpleValue:h,totalText:k,getMode:A,isHideEllipsis:U,clickItem:X,showMenu:Z,clickSize:G,setPage:W,toNumber:t}}});const be=["item-mode","onClick"];function ke(e,s,T,h,z,$){const i=C("var-icon"),p=C("var-input"),M=C("var-cell"),c=C("var-menu"),r=re("ripple");return m(),f("ul",{class:u(e.n())},[I((m(),f("li",{class:u(e.classes(e.n("item"),e.n("prev"),[e.current<=1||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--simple"),e.n("$-elevation--2")])),onClick:s[0]||(s[0]=l=>e.clickItem("prev"))},[O(e.$slots,"prev",{},()=>[P(i,{name:"chevron-left"})])],2)),[[r,{disabled:e.current<=1||e.disabled}]]),e.simple?(m(),f("li",{key:0,class:u(e.classes(e.n("simple"),[e.disabled,e.n("item--disabled")]))},[P(p,{modelValue:e.simpleValue,"onUpdate:modelValue":s[1]||(s[1]=l=>e.simpleValue=l),disabled:e.disabled,"var-pagination-cover":"",onBlur:s[2]||(s[2]=l=>e.setPage("simple",e.simpleValue,l)),onKeydown:s[3]||(s[3]=Q(l=>e.setPage("simple",e.simpleValue,l),["enter"]))},null,8,["modelValue","disabled"]),B("span",null,[S(" / "+g(e.pageCount)+" ",1),B("div",{class:u(e.n("simple-line"))},null,2)])],2)):(m(!0),f(R,{key:1},j(e.pageList,(l,k)=>I((m(),f("li",{key:e.toNumber(l)+k,"item-mode":e.getMode(l,k),class:u(e.classes(e.n("item"),e.n("$-elevation--2"),[l===e.current&&!e.disabled,e.n("item--active")],[e.isHideEllipsis(l,k),e.n("item--hide")],[e.disabled,e.n("item--disabled")],[l===e.current&&e.disabled,e.n("item--disabled--active")])),onClick:U=>e.clickItem(l,k)},[S(g(l),1)],10,be)),[[r,{disabled:e.disabled}]])),128)),I((m(),f("li",{class:u(e.classes(e.n("item"),e.n("next"),[e.current>=e.pageCount||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--simple"),e.n("$-elevation--2")])),onClick:s[4]||(s[4]=l=>e.clickItem("next"))},[O(e.$slots,"next",{},()=>[P(i,{name:"chevron-right"})])],2)),[[r,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(m(),f("li",{key:2,class:u(e.classes(e.n("size"),[e.disabled,e.n("item--disabled")]))},[P(c,{show:e.menuVisible,"onUpdate:show":s[6]||(s[6]=l=>e.menuVisible=l),"offset-x":-4},{menu:D(()=>[(m(!0),f(R,null,j(e.sizeOption,(l,k)=>I((m(),de(M,{class:u(e.classes(e.n("list"),[e.size===l,e.n("list--active")])),key:k,onClick:U=>e.clickSize(l)},{default:D(()=>[S(g(l)+g(e.pack.paginationItem)+" / "+g(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"])),[[r]])),128))]),default:D(()=>[B("div",{class:u(e.classes(e.n("size--open"),[e.current<=1||e.disabled,e.n("size--open--disabled")])),onClick:s[5]||(s[5]=(...l)=>e.showMenu&&e.showMenu(...l))},[B("span",null,g(e.size)+g(e.pack.paginationItem)+" / "+g(e.pack.paginationPage),1),P(i,{class:u(e.n("size--open-icon")),"var-pagination-cover":"",name:"menu-down"},null,8,["class"])],2)]),_:1},8,["show"])],2)):L("",!0),e.showQuickJumper&&!e.simple?(m(),f("li",{key:3,class:u(e.classes(e.n("quickly"),[e.disabled,"item--disabled"]))},[S(g(e.pack.paginationJump)+" ",1),P(p,{modelValue:e.inputValue,"onUpdate:modelValue":s[7]||(s[7]=l=>e.inputValue=l),disabled:e.disabled,"var-pagination-cover":"",onBlur:s[8]||(s[8]=l=>e.setPage("quick",e.inputValue,l)),onKeydown:s[9]||(s[9]=Q(l=>e.setPage("quick",e.inputValue,l),["enter"]))},null,8,["modelValue","disabled"])],2)):L("",!0),e.totalText?(m(),f("li",{key:4,class:u(e.n("total"))},g(e.totalText),3)):L("",!0)],2)}const F=ue(ge,[["render",ke]]);F.install=function(e){e.component(F.name,F)};export{F as P};
