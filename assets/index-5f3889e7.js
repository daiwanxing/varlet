import{c as m}from"./index-0f09af22.js";/* empty css               */import{s as b}from"./elements-f00c3e04.js";import{c as w}from"./components-e9444427.js";const{n:h}=w("ripple"),v=250;function k(e){const{zIndex:t,position:o}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",o==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function x(e,t){const{top:o,left:n}=e.getBoundingClientRect(),{clientWidth:p,clientHeight:i}=e,s=Math.sqrt(p**2+i**2)/2,c=s*2,r=t.touches[0].clientX-n,l=t.touches[0].clientY-o,a=(p-s*2)/2,d=(i-s*2)/2,_=r-s,R=l-s;return{x:_,y:R,centerX:a,centerY:d,size:c}}function f(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker)return;const o=()=>{t.tasker=null;const{x:n,y:p,centerX:i,centerY:s,size:c}=x(this,e),r=document.createElement("div");r.classList.add(h()),r.style.opacity="0",r.style.transform=`translate(${n}px, ${p}px) scale3d(.3, .3, .3)`,r.style.width=`${c}px`,r.style.height=`${c}px`,t.color&&(r.style.backgroundColor=t.color),r.dataset.createdAt=String(performance.now()),k(this),this.appendChild(r),window.setTimeout(()=>{r.style.transform=`translate(${i}px, ${s}px) scale3d(1, 1, 1)`,r.style.opacity=".25"},20)};t.tasker=window.setTimeout(o,60)}function u(){const e=this._ripple,t=()=>{const o=this.querySelectorAll(`.${h()}`);if(!o.length)return;const n=o[o.length-1],p=v-performance.now()+Number(n.dataset.createdAt);setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{var i;return(i=n.parentNode)==null?void 0:i.removeChild(n)},v)},p)};e.tasker?setTimeout(t,60):t()}function y(){const e=this._ripple;b()&&e.touchmoveForbid&&(e.tasker&&window.clearTimeout(e.tasker),e.tasker=null)}function E(e,t){var o;e._ripple={tasker:null,...t.value??{},touchmoveForbid:((o=t.value)==null?void 0:o.touchmoveForbid)??m.touchmoveForbid,removeRipple:u.bind(e)},e.addEventListener("touchstart",f,{passive:!0}),e.addEventListener("touchmove",y,{passive:!0}),e.addEventListener("dragstart",u,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})}function L(e){e.removeEventListener("touchstart",f),e.removeEventListener("touchmove",y),e.removeEventListener("dragstart",u),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)}function T(e,t){var p,i,s,c,r,l,a,d;const o={touchmoveForbid:((p=t.value)==null?void 0:p.touchmoveForbid)??m.touchmoveForbid,color:(i=t.value)==null?void 0:i.color,disabled:(s=t.value)==null?void 0:s.disabled};(o.touchmoveForbid!==((c=e._ripple)==null?void 0:c.touchmoveForbid)||o.color!==((r=e._ripple)==null?void 0:r.color)||o.disabled!==((l=e._ripple)==null?void 0:l.disabled))&&(e._ripple={tasker:o.disabled?null:(a=e._ripple)==null?void 0:a.tasker,removeRipple:(d=e._ripple)==null?void 0:d.removeRipple,...o})}const g={mounted:E,unmounted:L,updated:T,install(e){e.directive("ripple",this)}},C=g;export{C as v};
