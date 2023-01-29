import{Z as h,d as re,a as M,b as G,w as J,_ as me,f as D,h as z,M as j,N as p,R as K,F as ee,ai as se,Q as L,j as x,r as ne,p as Ue,q as R,S as Y,i as Ve,E as Ie,ac as Ne,az as Ae,ap as d,P as E,aA as Q}from"./vue-router.esm-bundler-de96f312.js";import{d as q}from"./index-36588e9f.js";import{d as ue,c as de,f as le}from"./components-e9444427.js";import{p as te}from"./shared-f14f9930.js";import{d as Pe}from"./index-2ba6d771.js";import{u as Re,c as Be,a as ce,_ as De,b as ze}from"./index-ed871f6d.js";const B=["12","1","2","3","4","5","6","7","8","9","10","11"],V=["00","13","14","15","16","17","18","19","20","21","22","23"],ie=["00","05","10","15","20","25","30","35","40","45","50","55"];function Le(e){return["ampm","24hr"].includes(e)}const je={modelValue:{type:String},elevation:{type:Boolean,default:!1},color:{type:String},headerColor:{type:String},format:{type:String,default:"ampm",validator:Le},allowedTime:{type:Object},min:{type:String},max:{type:String},useSeconds:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},"onUpdate:modelValue":ue(),onChange:ue()},fe=(e,n)=>e==="24hr"||n==="am",oe=(e,n,w)=>{const c=B.findIndex(s=>h(s)===h(w)),v=fe(e,n)?w:V[c];return{hourStr:v,hourNum:h(v)}},N=e=>{const[n,w,c]=e.split(":");return{hour:h(n),minute:h(w),second:h(c)}},ve=e=>{var H,I;const{time:n,format:w,ampm:c,hour:v,max:s,min:o,disableHour:r}=e,{hourStr:F,hourNum:A}=oe(w,c,v);let $=!1,T=!1;if(r.includes(F))return!0;if(s&&!o){const{hour:P,minute:t}=N(s);$=P===A&&n>t}if(!s&&o){const{hour:P,minute:t}=N(o);$=P===A&&n<t}if(s&&o){const{hour:P,minute:t}=N(s),{hour:a,minute:i}=N(o);$=a===A&&n<i||P===A&&n>t}return(H=e.allowedTime)!=null&&H.minutes&&(T=(I=e.allowedTime)==null?void 0:I.minutes(n)),$||T},he=e=>{var I,P;const{time:n,format:w,ampm:c,hour:v,minute:s,max:o,min:r,disableHour:F}=e,{hourStr:A,hourNum:$}=oe(w,c,v);let T=!1,H=!1;if(F.includes(A))return!0;if(o&&!r){const{hour:t,minute:a,second:i}=N(o);T=t===$&&a<s||a===s&&n>i}if(!o&&r){const{hour:t,minute:a,second:i}=N(r);T=t===$&&a>s||a===s&&n>i}if(o&&r){const{hour:t,minute:a,second:i}=N(o),{hour:l,minute:g,second:k}=N(r);T=t===$&&a<s||l===$&&g>s||t===$&&a===s&&n>i||l===$&&g===s&&n<k}return(I=e.allowedTime)!=null&&I.seconds&&(H=(P=e.allowedTime)==null?void 0:P.seconds(n)),T||H},{n:Fe,classes:qe}=de("time-picker"),Oe=re({name:"Clock",props:{isInner:{type:Boolean,required:!0},rad:{type:Number},format:{type:String,default:"ampm"},allowedTime:{type:Object},time:{type:Object,required:!0},useSeconds:{type:Boolean,default:!1},preventNextUpdate:{type:Boolean,default:!1},type:{type:String,default:"hour"},ampm:{type:String,default:"am"},color:{type:String},min:{type:String},max:{type:String}},emits:["update","change-prevent-update"],setup(e,{emit:n}){const w=M(null),c=M([]),v=M([]),s=G(()=>({transform:`rotate(${h(e.rad)}deg)`,height:e.isInner&&e.type==="hour"?"calc(50% - 40px)":"calc(50% - 4px)",backgroundColor:A(),borderColor:A()})),o=G(()=>{if(e.rad===void 0)return;const t=e.rad/30;return t>=0?t:t+12}),r=G(()=>e.type==="hour"?B:ie),F=(t,a)=>{t=t??(e.type==="minute"?e.time.minute:e.time.second);const i=e.type==="minute"?ve:he,l={time:h(t),format:e.format,ampm:e.ampm,hour:e.time.hour,minute:h(e.time.minute),max:e.max,min:e.min,allowedTime:e.allowedTime,disableHour:c.value};return a&&e.type==="minute"&&Reflect.deleteProperty(l,"minute"),i(l)},A=()=>{if(o.value===void 0)return e.color;const t=e.isInner?V[o.value]:r.value[o.value];return r.value===ie?F()?"#bdbdbd":e.color:T(t)?"#bdbdbd":e.color},$=(t,a)=>a?o.value===t&&e.isInner:o.value===t&&(!e.isInner||e.type!=="hour"),T=t=>{if(e.type==="hour"){if(fe(e.format,e.ampm))return c.value.includes(t);const a=B.findIndex(i=>i===t);return v.value.includes(a)}return F(t,!0)},H=(t,a,i)=>{const l=2*Math.PI/12*t-Math.PI/2,g=50*(1+Math.cos(l)),k=50*(1+Math.sin(l)),y=()=>$(t,i)?T(a)?{backgroundColor:"#bdbdbd",color:"#fff"}:{backgroundColor:e.color,color:void 0}:{backgroundColor:void 0,color:void 0},{backgroundColor:U,color:_}=y();return{left:`${g}%`,top:`${k}%`,backgroundColor:U,color:_}},I=()=>{const{width:t,height:a}=w.value.getBoundingClientRect();return{width:t,height:a}},P=()=>{if(o.value===void 0)return;const t=e.ampm==="am"?B:V;return te(t[o.value],2,"0")};return J([o,()=>e.isInner],([t,a],[i,l])=>{if(t===i&&a===l||e.type!=="hour"||o.value===void 0)return;const k=a?V[o.value]:P(),y=e.useSeconds?`:${e.time.second}`:"",U=`${k}:${e.time.minute}${y}`;e.preventNextUpdate||n("update",U),n("change-prevent-update")}),J(()=>e.rad,(t,a)=>{if(e.type==="hour"||t===void 0||a===void 0)return;const i=t/6>=0?t/6:t/6+60,l=a/6>=0?a/6:a/6+60;if(i===l)return;let g;const{hourStr:k}=oe(e.format,e.ampm,e.time.hour);if(e.type==="minute"){const y=q().minute(i).format("mm"),U=e.useSeconds?`:${e.time.second}`:"";g=`${k}:${y}${U}`}if(e.type==="second"){const y=q().second(i).format("ss"),U=e.useSeconds?`:${y}`:"";g=`${k}:${e.time.minute}${U}`}n("update",g)}),J([()=>e.max,()=>e.min,()=>e.allowedTime],([t,a,i])=>{if(c.value=[],t&&!a){const{hour:l}=N(t),g=B.filter(y=>h(y)>l),k=V.filter(y=>h(y)>l);c.value=[...g,...k]}if(!t&&a){const{hour:l}=N(a),g=B.filter(y=>h(y)<l),k=V.filter(y=>h(y)<l);c.value=[...g,...k]}if(t&&a){const{hour:l}=N(t),{hour:g}=N(a),k=B.filter(U=>h(U)<g||h(U)>l),y=V.filter(U=>h(U)<g||h(U)>l);c.value=[...k,...y]}if(i!=null&&i.hours){const{hours:l}=i,g=B.filter(y=>!l(h(y))),k=V.filter(y=>!l(h(y)));c.value=[...new Set([...c.value,...g,...k])]}v.value=c.value.map(l=>V.findIndex(g=>l===g)).filter(l=>l>=0)},{immediate:!0}),{n:Fe,classes:qe,hours24:V,timeScales:r,inner:w,handStyle:s,disableHour:c,isActive:$,isDisable:T,getSize:I,getStyle:H,activeItemIndex:o}}});function Xe(e,n,w,c,v,s){return D(),z("div",{class:p(e.n("clock"))},[j("div",{class:p(e.n("clock-hand")),style:K(e.handStyle)},null,6),(D(!0),z(ee,null,se(e.timeScales,(o,r)=>(D(),z("div",{class:p(e.classes(e.n("clock-item"),[e.isActive(r,!1),e.n("clock-item--active")],[e.isDisable(o),e.n("clock-item--disable")])),key:o,style:K(e.getStyle(r,o,!1))},L(o),7))),128)),e.format==="24hr"&&e.type==="hour"?(D(),z("div",{key:0,class:p(e.n("clock-inner")),ref:"inner"},[(D(!0),z(ee,null,se(e.hours24,(o,r)=>(D(),z("div",{class:p(e.classes(e.n("clock-item"),[e.isActive(r,!0),e.n("clock-item--active")],[e.isDisable(o),e.n("clock-item--disable")])),key:o,style:K(e.getStyle(r,o,!0))},L(o),7))),128))],2)):x("",!0)],2)}const Ye=me(Oe,[["render",Xe]]),{n:Ee,classes:Qe}=de("time-picker"),We=re({name:"VarTimePicker",components:{Clock:Ye},props:je,setup(e){const n=M(null),w=M(null),c=M(null),v=M(!1),s=M(!1),o=M(!1),r=M(!1),F=M(!1),A=M(void 0),$=M(0),T=M(0),H=M("hour"),I=M("am"),P=M(!1),t=M(!1),a=M({hour:"00",minute:"00",second:"00"}),i=ne({x:0,y:0}),l=ne({x:[],y:[]}),g=G(()=>H.value==="hour"?A.value:H.value==="minute"?$.value:T.value),k=u=>{le(e["onUpdate:modelValue"],u),le(e.onChange,u)},y=u=>u*57.29577951308232,U=u=>{r.value=!1,t.value=!1,H.value=u},_=u=>{const{disableHour:m}=c.value,f=B.findIndex(S=>h(S)===h(a.value.hour)),b=u==="am"?B:V;return[...b.slice(f),...b.slice(0,f)].find((S,X)=>(s.value=X!==0,!m.includes(S)))},ge=u=>{if(e.readonly)return;I.value=u;const m=_(u);if(!m)return;const f=e.useSeconds?`:${a.value.second}`:"",b=`${te(m,2,"0")}:${a.value.minute}${f}`;k(b)},ae=(u,m)=>{const f=u>=l.x[0]&&u<=l.x[1],b=m>=l.y[0]&&m<=l.y[1];return f&&b},be=u=>{const m=e.format==="24hr"?"HH":"hh",{hour:f,minute:b,second:C}=N(u);return{hour:q().hour(f).format(m),minute:q().minute(b).format("mm"),second:q().second(C).format("ss")}},Se=u=>{const m=u/30;return m>=0?m:m+12},He=()=>{const{width:u,height:m}=c.value.getSize(),f=i.x-u/2-8,b=i.x+u/2+8,C=i.y-m/2-8,S=i.y+m/2+8;return{rangeXMin:f,rangeXMax:b,rangeYMin:C,rangeYMax:S}},ke=(u,m,f)=>{const{disableHour:b}=c.value;o.value=ae(u,m);const C=Math.round(f/30)*30+90,S=Se(C),X=v.value?B[S]:V[S];if(b.includes(X)||(v.value=e.format==="24hr"?ae(u,m):!1),v.value!==o.value)return;const Z=v.value||I.value==="pm"?V[S]:B[S];P.value=b.includes(Z),!P.value&&(A.value=C,r.value=!0)},Me=u=>{const{disableHour:m}=c.value,f=Math.round(u/6)*6+90,C={time:f/6>=0?f/6:f/6+60,format:e.format,ampm:I.value,hour:a.value.hour,max:e.max,min:e.min,disableHour:m,allowedTime:e.allowedTime};t.value=ve(C),!t.value&&($.value=f,F.value=!0)},$e=u=>{const{disableHour:m}=c.value,f=Math.round(u/6)*6+90,C={time:f/6>=0?f/6:f/6+60,format:e.format,ampm:I.value,hour:a.value.hour,minute:h(a.value.minute),max:e.max,min:e.min,disableHour:m,allowedTime:e.allowedTime};he(C)||(T.value=f)},Ce=()=>{const{left:u,top:m,width:f,height:b}=n.value.getBoundingClientRect();if(i.x=u+f/2,i.y=m+b/2,H.value==="hour"&&e.format==="24hr"){const{rangeXMin:C,rangeXMax:S,rangeYMin:X,rangeYMax:Z}=He();l.x=[C,S],l.y=[X,Z]}},we=u=>{if(u.preventDefault(),e.readonly)return;Ce();const{clientX:m,clientY:f}=u.touches[0],b=m-i.x,C=f-i.y,S=Math.round(y(Math.atan2(C,b)));H.value==="hour"?ke(m,f,S):H.value==="minute"?Me(S):$e(S)},pe=()=>{if(!e.readonly){if(H.value==="hour"&&r.value){H.value="minute";return}H.value==="minute"&&e.useSeconds&&F.value&&(H.value="second")}},Te=()=>{s.value=!1};return J(()=>e.modelValue,u=>{if(u){const{hour:m,minute:f,second:b}=N(u),C=q().hour(m).format("hh"),S=q().hour(m).format("HH"),X=q().minute(f).format("mm"),Z=q().second(b).format("ss");A.value=(C==="12"?0:h(C))*30,$.value=h(X)*6,T.value=h(Z)*6,a.value=be(u),e.format!=="24hr"&&(I.value=te(`${m}`,2,"0")===S&&V.includes(S)?"pm":"am"),v.value=e.format==="24hr"&&V.includes(S)}},{immediate:!0}),{n:Ee,classes:Qe,getRad:g,time:a,container:n,inner:c,picker:w,isInner:v,type:H,ampm:I,isPreventNextUpdate:s,moveHand:we,checkPanel:U,checkAmpm:ge,end:pe,update:k,changePreventUpdate:Te}}});const Ze=j("span",null,":",-1),Ge={key:0};function Je(e,n,w,c,v,s){const o=Ue("clock");return D(),z("div",{class:p(e.classes(e.n(),[e.elevation,e.n("$-elevation--2")])),ref:"picker"},[j("div",{class:p(e.n("title")),style:K({background:e.headerColor||e.color})},[j("div",{class:p(e.n("title-time"))},[j("div",{class:p(e.classes(e.n("title-btn"),[e.type==="hour",e.n("title-btn--active")])),onClick:n[0]||(n[0]=r=>e.checkPanel("hour"))},L(e.time.hour),3),Ze,j("div",{class:p(e.classes(e.n("title-btn"),[e.type==="minute",e.n("title-btn--active")])),onClick:n[1]||(n[1]=r=>e.checkPanel("minute"))},L(e.time.minute),3),e.useSeconds?(D(),z("span",Ge,":")):x("",!0),e.useSeconds?(D(),z("div",{key:1,class:p(e.classes(e.n("title-btn"),[e.type==="second",e.n("title-btn--active")])),onClick:n[2]||(n[2]=r=>e.checkPanel("second"))},L(e.time.second),3)):x("",!0)],2),e.format==="ampm"?(D(),z("div",{key:0,class:p(e.n("title-ampm"))},[j("div",{class:p(e.classes(e.n("title-btn"),[e.ampm==="am",e.n("title-btn--active")])),onClick:n[3]||(n[3]=r=>e.checkAmpm("am"))},"AM",2),j("div",{class:p(e.classes(e.n("title-btn"),[e.ampm==="pm",e.n("title-btn--active")])),onClick:n[4]||(n[4]=r=>e.checkAmpm("pm"))},"PM",2)],2)):x("",!0)],6),j("div",{class:p(e.n("body"))},[j("div",{class:p(e.n("clock-container")),onTouchstart:n[5]||(n[5]=(...r)=>e.moveHand&&e.moveHand(...r)),onTouchmove:n[6]||(n[6]=(...r)=>e.moveHand&&e.moveHand(...r)),onTouchend:n[7]||(n[7]=(...r)=>e.end&&e.end(...r)),ref:"container"},[R(Ie,{name:`${e.n()}-panel-fade`},{default:Y(()=>[(D(),Ve(o,{key:e.type,ref:"inner",type:e.type,ampm:e.ampm,color:e.color,"is-inner":e.isInner,format:e.format,"allowed-time":e.allowedTime,rad:e.getRad,time:e.time,"prevent-next-update":e.isPreventNextUpdate,"use-seconds":e.useSeconds,max:e.max,min:e.min,onUpdate:e.update,onChangePreventUpdate:e.changePreventUpdate},null,8,["type","ampm","color","is-inner","format","allowed-time","rad","time","prevent-next-update","use-seconds","max","min","onUpdate","onChangePreventUpdate"]))]),_:1},8,["name"])],34)],2)],2)}const O=me(We,[["render",Je]]);O.install=function(e){e.component(O.name,O)};const Ke={basicUsage:"基本使用",hour24:"24小时格式",readonly:"只读",timeLimit:"时间限制",custom:"自定义",showSecond:"显示秒"},xe={basicUsage:"Basic Usage",hour24:"24hr Format",readonly:"Readonly",timeLimit:"Time Limit",custom:"Custom",showSecond:"show-seconds"},{add:ye,use:_e,pack:W,packs:ln,merge:rn}=Re(),en=e=>{Be(e),_e(e)};ce("zh-CN",De);ce("en-US",ze);ye("zh-CN",Ke);ye("en-US",xe);const mn={setup(e){const n=ne({date:"11:20",date1:"15:10",date2:"07:10",date3:"07:10:12",date4:"05:10",date5:"17:36:22"}),w={hours:v=>v%2===0,minutes:v=>v%15!==0,seconds:v=>v%2!==0};function c(v){console.log(v)}return Ne(en),Ae(Pe),(v,s)=>(D(),z(ee,null,[R(d(Q),null,{default:Y(()=>[E(L(d(W).basicUsage),1)]),_:1}),R(d(O),{modelValue:d(n).date,"onUpdate:modelValue":s[0]||(s[0]=o=>d(n).date=o)},null,8,["modelValue"]),R(d(Q),null,{default:Y(()=>[E(L(d(W).hour24),1)]),_:1}),R(d(O),{modelValue:d(n).date1,"onUpdate:modelValue":s[1]||(s[1]=o=>d(n).date1=o),format:"24hr",elevation:""},null,8,["modelValue"]),R(d(Q),null,{default:Y(()=>[E(L(d(W).showSecond),1)]),_:1}),R(d(O),{modelValue:d(n).date5,"onUpdate:modelValue":s[2]||(s[2]=o=>d(n).date5=o),format:"24hr","use-seconds":""},null,8,["modelValue"]),R(d(Q),null,{default:Y(()=>[E(L(d(W).readonly),1)]),_:1}),R(d(O),{modelValue:d(n).date2,"onUpdate:modelValue":s[3]||(s[3]=o=>d(n).date2=o),readonly:"",elevation:""},null,8,["modelValue"]),R(d(Q),null,{default:Y(()=>[E(L(d(W).timeLimit),1)]),_:1}),R(d(O),{modelValue:d(n).date3,"onUpdate:modelValue":s[4]||(s[4]=o=>d(n).date3=o),format:"24hr","use-seconds":"",min:"2:28:38",max:"19:40:22","allowed-time":w},null,8,["modelValue"]),R(d(Q),null,{default:Y(()=>[E(L(d(W).custom),1)]),_:1}),R(d(O),{modelValue:d(n).date4,"onUpdate:modelValue":s[5]||(s[5]=o=>d(n).date4=o),elevation:"","header-color":"purple",color:"#7bb872",min:"2:28:38",max:"19:40:22",onChange:c},null,8,["modelValue"])],64))}};export{mn as default};
