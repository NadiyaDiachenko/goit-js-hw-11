import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const d=document.querySelector(".gallery");function p(r){return r.map(({webformatURL:t,likes:n,views:o,comments:e,downloads:s,largeImageURL:i,tags:l})=>`<li class="item-image">
    <a class="gallery-link" href="${i}" download="false">
    <img class="image" src="${t}" data-source="${i}" alt="${l}" width="360" />
    <ul class="list-content">
    <li class="item-content"><p class="type">Likes</p>
    <span class="quantity">${n}</span></li>
    <li class="item-content"><p class="type">Views</p>
    <span class="quantity">${o}</span></li>
    <li class="item-content"><p class="type">Comments</p>
    <span class="quantity">${e}</span></li>
    <li class="item-content"><p class="type">Downloads</p>
    <span class="quantity">${s}</span></li>
    </ul>
</a>
    </li>`).join(" ")}function f(r){d.innerHTML=r}const m="43312683-2385dcaf90e6cbdc78ebf8a65";function y(r){fetch(`https://pixabay.com/api/?key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(({total:t,hits:n})=>(t===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red"}),p(n))).then(t=>{document.querySelector(".lds-ring").remove(),f(t),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()})}const a=document.querySelector("form");function h(r){r.preventDefault();const t=a.elements.card.value;a.insertAdjacentHTML("afterend",'<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'),y(t)}a.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
