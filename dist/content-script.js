"use strict";(()=>{var u="activeState";var M="stat",l="all_stat";var d="hide_mode",m="rules";var x={id:"default",user:"*",onlyNegativeBalance:!0,hideFrom:!1,hideTo:!1};var E=async(e,t)=>{await chrome.storage.sync.set({[M]:{processed:e,total:t}});let o=await chrome.storage.sync.get([l]),s=(o?.[l]?.processed??0)+e,r=(o?.[l]?.total??0)+t;await chrome.storage.sync.set({[l]:{processed:s,total:r}})};var H=async e=>{!e||e.length===0||e.forEach(t=>{t.classList.remove("hide-comment"),t.classList.remove("hide-comment-blur"),t.classList.remove("hide-comment-overlay"),t.classList.remove("hide-comment-collapse");let o=t.querySelector(".hide-comment-content");o&&o.remove()})};var w=(e,t)=>{let o=e;for(;o&&!o.classList.contains(t);)o=o.parentElement;return o},f=e=>{if(e.preventDefault(),!e?.target)return!1;let t=e.target,o=w(t,"hide-comment-content"),s=w(t,"hide-comment");if(!s||!o)return!1;Array.from(s.classList).filter(a=>a.startsWith("hide-comment")).forEach(a=>{s.classList.remove(a)}),o.remove()},N=()=>{let e=document.createElement("div");e.classList.add("hide-comment-content"),e.classList.add("hide-comment-content-default");let t=document.createElement("span");return t.classList.add("hide-comment-content-handler"),t.innerHTML='<i class="gg-eye"></i>',t.onclick=o=>f(o),e.append(t),e},F=e=>{let t=document.createElement("div");t.classList.add("hide-comment-content"),t.classList.add("hide-comment-content-overlay");let o=document.createElement("span");o.classList.add("hide-comment-content-handler"),o.innerHTML='<i class="gg-eye"></i>',o.onclick=r=>f(r),t.append(o);let s=document.createElement("div");return s.classList.add("hide-comment-overlay-content"),s.innerHTML=`<div class="hide-comment-content-brief">
            <span class="hide-comment-content-user">${e.user}${e.toUser?" \u2192 "+e.toUser:""}</span>
            ${e.dateStr?'<span class="hide-comment-content-date">'+e.dateStr+"</span>":""}
            <span class="hide-comment-content-minus">-${e.minus}</span>|
            <span class="hide-comment-content-plus">+${e.plus}</span>
        </div>`,t.append(s),t},R=e=>{let t=document.createElement("div");t.classList.add("hide-comment-content"),t.classList.add("hide-comment-content-collapse");let o=document.createElement("div");o.classList.add("hide-comment-content-brief"),o.innerHTML=`<span class="hide-comment-content-user">${e.user}${e.toUser?" \u2192 "+e.toUser:""}</span>
            ${e.dateStr?'<span class="hide-comment-content-date">'+e.dateStr+"</span>":""}
            <span class="hide-comment-content-minus">-${e.minus}</span>|
            <span class="hide-comment-content-plus">+${e.plus}</span>`;let s=document.createElement("span");return s.classList.add("hide-comment-content-handler"),s.innerHTML='<i class="gg-eye"></i>',s.onclick=r=>f(r),o.prepend(s),t.append(o),t},b=(e,t)=>e==="overlay"?F(t):e==="collapse"?R(t):N();var T=async e=>{let t=document.querySelector(".comments-list");if(!t)return;let o=t.querySelectorAll(".comments-item");if(!o||o.length===0||(await H(o),!e.on)||e.rules.length===0)return;let s=e.rules.some(n=>n.user==="*"),r=0,a=e.hideMode==="default"?"hide-comment-blur":e.hideMode==="overlay"?"hide-comment-overlay":e.hideMode==="collapse"?"hide-comment-collapse":"";o.forEach(n=>{let c=(n.querySelector("a.profile-link:not(.reply-to)")?.textContent||"").trim(),h=(n.querySelector("a.reply-to")?.textContent||"").trim(),P=(n.querySelector("span.plus-value")?.textContent||"").trim(),C=(n.querySelector("span.minus-value")?.textContent||"").trim(),K=(n.querySelector(".blog-item-date")?.textContent||"").trim(),y=parseInt(P,10),v=parseInt(C,10),S=y-v<0,g=s&&S;if(!g){let i=e.rules.find(L=>L.user===c||L.user===h);i&&(c===i.user&&i.hideFrom||h===i.user&&i.hideTo)&&(g=!i.onlyNegativeBalance||i.onlyNegativeBalance&&S)}g&&(n.classList.add("hide-comment"),n.classList.add(a),n.appendChild(b(e.hideMode,{user:c,toUser:h,plus:y,minus:v,dateStr:K})),r++)}),await E(r,o.length)};var p={on:!1,hideMode:"default",rules:[]};async function $(){let e=async()=>{let a=await chrome.storage.sync.get([u]);p.on=a[u]!=="off"},t=async()=>{let a=await chrome.storage.sync.get([m]),n=[];try{n=a[m]?JSON.parse(a[m]):[{...x}]}catch{}n&&(p.rules=n)},o=async()=>{let a=await chrome.storage.sync.get([d]),n="default";a[d]==="collapse"&&(n="collapse"),a[d]==="overlay"&&(n="overlay"),p.hideMode=n},s=async()=>{await e(),await t(),await o(),await T(p)},r=(a,n)=>{let c=!1;n==="sync"&&(a?.[u]?.newValue||a?.[d]?.newValue||a?.[m]?.newValue)&&(c=!0),c&&s()};chrome.storage.onChanged.addListener(r),s()}$();})();
