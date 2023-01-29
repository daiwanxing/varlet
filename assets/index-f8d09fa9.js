import{F as Z,u as G}from"./provide-42b5b9b7.js";import{I as H}from"./index-edb3b75f.js";import{d as u,i as J,f as i,c as K}from"./components-e9444427.js";import{d as X,a as F,t as Y,b as c,aO as b,o as x,Z as _,n as ee,_ as ae,p as z,f as m,h as f,M as p,N as d,O as P,j as V,R as g,Q as le,i as ne,q as oe}from"./vue-router.esm-bundler-de96f312.js";function se(e){return["text","password","number"].includes(e)}const re={modelValue:{type:String},modelModifiers:{type:Object,default:()=>({})},type:{type:String,default:"text",validator:se},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},onFocus:u(),onBlur:u(),onClick:u(),onClear:u(),onInput:u(),onChange:u(),"onUpdate:modelValue":u()},{n:k,classes:de}=K("input"),ie=X({name:"VarInput",components:{VarIcon:H,VarFormDetails:Z},props:re,setup(e){const l=F(`var-input-${Y().uid}`),y=F(null),h=F(!1),M=c(()=>{const{maxlength:a,modelValue:s}=e;return a?b(s)?`0 / ${a}`:`${String(s).length}/${a}`:""}),{bindForm:T,form:n}=G(),{errorMessage:v,validateWithTrigger:o,validate:R,resetValidation:C}=J(),t=a=>{ee(()=>{const{validateTrigger:s,rules:r,modelValue:B}=e;o(s,a,r,B)})},U=()=>{const{hint:a,modelValue:s}=e;if(!a&&!b(s))return k("--placeholder-hidden");if(a&&(!b(s)||h.value))return k("--placeholder-hint")},E=a=>{h.value=!0,i(e.onFocus,a),t("onFocus")},O=a=>{h.value=!1,i(e.onBlur,a),t("onBlur")},j=a=>{const s=a.target;let{value:r}=s;r=w(S(r)),s.value=r,i(e["onUpdate:modelValue"],r),i(e.onInput,r,a),t("onInput")},A=a=>{const s=a.target;let{value:r}=s;r=w(S(r)),s.value=r,i(e.onChange,r,a),t("onChange")},W=()=>{const{disabled:a,readonly:s,clearable:r,onClear:B}=e;n!=null&&n.disabled.value||n!=null&&n.readonly.value||a||s||!r||(i(e["onUpdate:modelValue"],""),i(B,""),t("onClear"))},q=a=>{const{disabled:s,onClick:r}=e;n!=null&&n.disabled.value||s||(i(r,a),t("onClick"))},S=a=>e.modelModifiers.trim?a.trim():a,w=a=>e.maxlength?a.slice(0,_(e.maxlength)):a,L=a=>{const{disabled:s,readonly:r}=e;n!=null&&n.disabled.value||n!=null&&n.readonly.value||s||r||a.stopPropagation()},D=()=>{i(e["onUpdate:modelValue"],""),C()},$=()=>R(e.rules,e.modelValue),N=()=>{var a;(a=y.value)==null||a.focus()},Q=()=>{y.value.blur()};return i(T,{reset:D,validate:$,resetValidation:C}),x(()=>{e.autofocus&&N()}),{el:y,id:l,isFocus:h,errorMessage:v,maxlengthText:M,formDisabled:n==null?void 0:n.disabled,formReadonly:n==null?void 0:n.readonly,n:k,classes:de,isEmpty:b,computePlaceholderState:U,handleFocus:E,handleBlur:O,handleInput:j,handleChange:A,handleClear:W,handleClick:q,handleTouchstart:L,validate:$,resetValidation:C,reset:D,focus:N,blur:Q}}});const ue=["id","disabled","type","value","maxlength","rows"],te=["id","disabled","type","value","maxlength"],me=["for"];function pe(e,l,y,h,M,T){const n=z("var-icon"),v=z("var-form-details");return m(),f("div",{class:d(e.classes(e.n(),e.n("$--box"),[e.disabled,e.n("--disabled")])),onClick:l[10]||(l[10]=(...o)=>e.handleClick&&e.handleClick(...o))},[p("div",{class:d(e.classes(e.n("controller"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:g({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[p("div",{class:d(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[P(e.$slots,"prepend-icon")],2),p("div",{class:d(e.classes(e.n("wrap"),[!e.hint,e.n("--non-hint")]))},[e.type==="password"?(m(),f("input",{key:0,class:d(e.n("autocomplete"))},null,2)):V("",!0),e.textarea?(m(),f("textarea",{key:1,class:d(e.classes(e.n("input"),e.n("--textarea"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,rows:e.rows,style:g({color:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor,resize:e.resize?"vertical":"none"}),onFocus:l[0]||(l[0]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:l[1]||(l[1]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onInput:l[2]||(l[2]=(...o)=>e.handleInput&&e.handleInput(...o)),onChange:l[3]||(l[3]=(...o)=>e.handleChange&&e.handleChange(...o)),onTouchstart:l[4]||(l[4]=(...o)=>e.handleTouchstart&&e.handleTouchstart(...o))},`
        `,46,ue)):(m(),f("input",{key:2,class:d(e.classes(e.n("input"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,style:g({color:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor}),onFocus:l[5]||(l[5]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:l[6]||(l[6]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onInput:l[7]||(l[7]=(...o)=>e.handleInput&&e.handleInput(...o)),onChange:l[8]||(l[8]=(...o)=>e.handleChange&&e.handleChange(...o)),onTouchstart:l[9]||(l[9]=(...o)=>e.handleTouchstart&&e.handleTouchstart(...o))},null,46,te)),p("label",{class:d(e.classes(e.n("$--ellipsis"),[e.isFocus,e.n("--focus")],[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--error")],[e.textarea,e.n("textarea-placeholder"),e.n("placeholder")],e.computePlaceholderState(),[!e.hint,e.n("--placeholder-non-hint")])),style:g({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor}),for:e.id},le(e.placeholder),15,me)],2),p("div",{class:d(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[P(e.$slots,"append-icon",{},()=>[e.clearable&&!e.isEmpty(e.modelValue)?(m(),ne(n,{key:0,class:d(e.n("clear-icon")),"var-input-cover":"",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["class","onClick"])):V("",!0)])],2)],6),e.line?(m(),f("div",{key:0,class:d(e.classes(e.n("line"),[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:g({background:e.errorMessage?void 0:e.blurColor})},[p("div",{class:d(e.classes(e.n("dot"),[e.isFocus,e.n("--spread")],[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:g({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):V("",!0),oe(v,{"error-message":e.errorMessage,"extra-message":e.maxlengthText},null,8,["error-message","extra-message"])],2)}const I=ae(ie,[["render",pe]]);I.install=function(e){e.component(I.name,I)};export{I};
