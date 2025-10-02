import{a as p,S as g,i as s}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="42527564-74a028b633bc3aa43e87a48a1",h="https://pixabay.com/api/";async function b(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(h,{params:r})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function v(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${o}" alt="${e}" loading="lazy" />
        <div class="image-overlay">
          <ul class="info">
            <li><b>Likes:</b> ${t}</li>
            <li><b>Views:</b> ${n}</li>
            <li><b>Comments:</b> ${f}</li>
            <li><b>Downloads:</b> ${m}</li>
          </ul>
        </div>
      </a>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){c.innerHTML=""}function w(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const d=document.querySelector(".form"),l=d.querySelector("input[name='search-text']");d.addEventListener("submit",i=>{i.preventDefault();const r=l.value.trim();if(!r){s.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}S(),w(),b(r).then(o=>{if(o.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(o.hits)}).catch(o=>{s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}).finally(()=>{q(),l.value=""})});
//# sourceMappingURL=index.js.map
