import{C as g}from"./index-b42f9d6f.js";import{C as r}from"./index-a970a6ad.js";import{I as y}from"./index-edb3b75f.js";import{B as C}from"./index-b3c6abbd.js";import{_ as M,r as I,aH as N,ac as z,az as B,f as $,h as w,q as a,S as u,ap as e,aI as n,M as _,Q as l,F as D,P as d,aA as c,al as P,am as R}from"./vue-router.esm-bundler-de96f312.js";import{d as E}from"./index-2ba6d771.js";import{u as F,c as L,a as S,_ as T,b as q}from"./index-ed871f6d.js";import"./provide-42b5b9b7.js";import"./components-e9444427.js";import"./index-5f3889e7.js";import"./index-0f09af22.js";/* empty css               */import"./elements-f00c3e04.js";import"./shared-f14f9930.js";import"./index-eb1687e0.js";const H={basicUsage:"基本使用",currentValue:"当前的值:",setState:"设置状态值",setStyle:"修改图标和颜色",disabled:"禁用",readonly:"只读",eat:"吃饭",sleep:"睡觉",checkAll:"全选",inverseAll:"反选",checkboxGroup:"复选框组",checkboxValidate:"复选框字段校验",checkboxGroupValidate:"复选框组字段校验",checkboxValidateMessage:"请勾选",checkboxGroupValidateMessage:"请全选"},Q={basicUsage:"Basic Usage",currentValue:"Current value:",setState:"Set State value",setStyle:"Modify the icon and color",disabled:"Disabled",readonly:"Readonly",eat:"Eat",sleep:"Sleep",checkAll:"Check All",inverseAll:"Inverse All",checkboxGroup:"CheckboxGroup",checkboxValidate:"Checkbox validation",checkboxGroupValidate:"CheckboxGroup validate",checkboxValidateMessage:"Please check your choices",checkboxGroupValidateMessage:"Please check all"},{add:U,use:j,pack:o,packs:ve,merge:fe}=F(),J=p=>{L(p),j(p)};S("zh-CN",T);S("en-US",q);U("zh-CN",H);U("en-US",Q);const K=p=>(P("data-v-e9599e27"),p=p(),R(),p),O={class:"relation"},W={class:"relation"},X=K(()=>_("div",{class:"space"},null,-1)),Y={setup(p){const A=I({value:!1,value2:0,value3:!1,value4:!1,value5:!1,value6:[],value7:!1,value8:[],group:null}),{value:i,value2:m,value3:v,value4:f,value5:V,value6:k,value7:h,value8:b,group:G}=N(A);return z(J),B(E),(x,s)=>($(),w(D,null,[a(e(c),null,{default:u(()=>[d(l(e(o).basicUsage),1)]),_:1}),a(e(r),{modelValue:e(i),"onUpdate:modelValue":s[0]||(s[0]=t=>n(i)?i.value=t:null)},{default:u(()=>[d(l(e(o).currentValue)+" "+l(e(i)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:u(()=>[d(l(e(o).setState),1)]),_:1}),a(e(r),{"unchecked-value":0,"checked-value":1,modelValue:e(m),"onUpdate:modelValue":s[1]||(s[1]=t=>n(m)?m.value=t:null)},{default:u(()=>[d(l(e(o).currentValue)+" "+l(e(m)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:u(()=>[d(l(e(o).setStyle),1)]),_:1}),a(e(r),{"unchecked-color":"#e99eb4","checked-color":"#f44336",modelValue:e(v),"onUpdate:modelValue":s[2]||(s[2]=t=>n(v)?v.value=t:null)},{"unchecked-icon":u(()=>[a(e(y),{name:"heart-half-full",size:"24px"})]),"checked-icon":u(()=>[a(e(y),{name:"heart",size:"24px"})]),default:u(()=>[d(l(e(o).currentValue)+" "+l(e(v)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:u(()=>[d(l(e(o).disabled),1)]),_:1}),a(e(r),{disabled:"",modelValue:e(f),"onUpdate:modelValue":s[3]||(s[3]=t=>n(f)?f.value=t:null)},{default:u(()=>[d(l(e(o).currentValue)+" "+l(e(f)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:u(()=>[d(l(e(o).readonly),1)]),_:1}),a(e(r),{readonly:"",modelValue:e(V),"onUpdate:modelValue":s[4]||(s[4]=t=>n(V)?V.value=t:null)},{default:u(()=>[d(l(e(o).currentValue)+" "+l(e(V)),1)]),_:1},8,["modelValue"]),a(e(c),null,{default:u(()=>[d(l(e(o).checkboxGroup),1)]),_:1}),a(e(g),{ref_key:"group",ref:G,modelValue:e(k),"onUpdate:modelValue":s[7]||(s[7]=t=>n(k)?k.value=t:null)},{default:u(()=>[a(e(r),{"checked-value":0},{default:u(()=>[d(l(e(o).eat),1)]),_:1}),a(e(r),{"checked-value":1},{default:u(()=>[d(l(e(o).sleep),1)]),_:1}),a(e(C),{class:"button",type:"primary",onClick:s[5]||(s[5]=t=>x.$refs.group.checkAll())},{default:u(()=>[d(l(e(o).checkAll),1)]),_:1}),a(e(C),{class:"button",type:"primary",onClick:s[6]||(s[6]=t=>x.$refs.group.inverseAll())},{default:u(()=>[d(l(e(o).inverseAll),1)]),_:1})]),_:1},8,["modelValue"]),_("div",O,l(e(o).currentValue)+" "+l(e(k)),1),a(e(c),null,{default:u(()=>[d(l(e(o).checkboxValidate),1)]),_:1}),a(e(r),{modelValue:e(h),"onUpdate:modelValue":s[8]||(s[8]=t=>n(h)?h.value=t:null),rules:[t=>t||e(o).checkboxValidateMessage]},{default:u(()=>[d(l(e(o).currentValue)+" "+l(e(h)),1)]),_:1},8,["modelValue","rules"]),a(e(c),null,{default:u(()=>[d(l(e(o).checkboxGroupValidate),1)]),_:1}),a(e(g),{modelValue:e(b),"onUpdate:modelValue":s[9]||(s[9]=t=>n(b)?b.value=t:null),rules:[t=>t.length===2||e(o).checkboxGroupValidateMessage]},{default:u(()=>[a(e(r),{"checked-value":0},{default:u(()=>[d(l(e(o).eat),1)]),_:1}),a(e(r),{"checked-value":1},{default:u(()=>[d(l(e(o).sleep),1)]),_:1})]),_:1},8,["modelValue","rules"]),_("div",W,l(e(o).currentValue)+" "+l(e(b)),1),X],64))}},Ve=M(Y,[["__scopeId","data-v-e9599e27"]]);export{Ve as default};
