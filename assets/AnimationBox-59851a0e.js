import{a as g,b as t,i as m,c as f}from"./main-a16b68a8.js";import{d as p,a as h,an as _,o as B,v as C,_ as R,f as w,h as x}from"./vue-router.esm-bundler-de96f312.js";const b=p({name:"AnimationBox",setup(){const e=h(),a=new MutationObserver(s);g.attrs=_(),B(()=>{t.value=e.value,e.value&&a.observe(e.value,{childList:!0}),m.value<=2&&(m.value+=1)});function s(n){var l,r,c,d,v;if(!n.length||!e.value)return;const o=(l=t.value)==null?void 0:l.getBoundingClientRect(),u=i(e.value);f.value=u?o:{top:(((r=t.value)==null?void 0:r.getBoundingClientRect().top)||0)+window.scrollY,left:((c=t.value)==null?void 0:c.getBoundingClientRect().left)||0,width:((d=t.value)==null?void 0:d.getBoundingClientRect().width)||0,height:((v=t.value)==null?void 0:v.getBoundingClientRect().height)||0}}function i(n,o=document.body){return window.getComputedStyle(n,null).position==="fixed"?!0:n===o?!1:i(n.parentElement||document.body)}return C(()=>{a.disconnect(),e.value=void 0,t.value=void 0,f.value=void 0}),{varletLogoAnimationRef:e}}}),A={ref:"varletLogoAnimationRef"};function E(e,a,s,i,n,o){return w(),x("div",A,null,512)}const L=R(b,[["render",E]]);export{L as A};
