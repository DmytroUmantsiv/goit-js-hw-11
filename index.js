import{a as p,S as y,i as s}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="42527564-74a028b633bc3aa43e87a48a1",h="https://pixabay.com/api/";async function b(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(h,{params:r})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function w(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:f,downloads:m})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${o}" alt="${e}" loading="lazy" />
      </a>
      <ul class="info">
        <li><b>Likes:</b> ${t}</li>
        <li><b>Views:</b> ${a}</li>
        <li><b>Comments:</b> ${f}</li>
        <li><b>Downloads:</b> ${m}</li>
      </ul>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){c.innerHTML=""}function q(){u.classList.remove("hidden")}function P(){u.classList.add("hidden")}const d=document.querySelector(".form"),l=d.querySelector("input[name='search-text']");d.addEventListener("submit",async i=>{i.preventDefault();const r=l.value.trim();if(!r){s.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}S(),q();try{const o=await b(r);if(o.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(o.hits)}catch(o){s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}finally{P(),l.value=""}});
//# sourceMappingURL=index.js.map
