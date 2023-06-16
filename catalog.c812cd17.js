function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=e.parcelRequire1134;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},e.parcelRequire1134=i),i("kyEFX").register(JSON.parse('{"9NLH0":"catalog.c812cd17.js","bfHyM":"default.8ee56845.jpg","7adTC":"library.59b9124d.js","co8kk":"index.c3469de8.js"}')),i("jQEWr"),i("2jcRC"),i("6q4Ta");const r={searchForm:document.getElementById("movieSearchForm"),searchInput:document.getElementById("movieInput"),catalogList:document.getElementById("movieList"),errorContainer:document.querySelector(".error-container"),searchBtn:document.querySelector(".search-button"),cancelBtn:document.querySelector(".cancel-button"),paginationContainer:document.querySelector(".pagination-pages-list"),paginationButton:document.querySelector(".pagination-button"),nextPageBtn:document.querySelector(".next-button"),prevPageBtn:document.querySelector(".prev-button")};class s{static BASE_URL="https://api.themoviedb.org/3";static API_KEY="41b8f9437bf3f899281f8a3f9bdc0891";constructor(){this.searchQuery="",this.page=1,this.totalAmount=0}async getMovies(){const t={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${s.API_KEY}`}};let e="";e=this.searchQuery?`${s.BASE_URL}/search/movie?api_key=${s.API_KEY}&query=${this.searchQuery}&include_adult=false&language=en-US&page=${this.page}`:`${s.BASE_URL}/trending/all/week?api_key=${s.API_KEY}&language=en-US&page=${this.page}`;try{const n=await fetch(e,t);return await n.json()}catch(t){console.error(t)}}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(t){this.searchQuery=t}get total(){return this.totalAmount}set total(t){this.totalAmount=t}resetTotal(){this.totalAmount=0}}let o=!1;const c=()=>{if(o)return;const t=document.createElement("div");t.innerHTML='<p class="error-information">OOPS...</p>\n  <p class="error-information">We are very sorry!</p>\n  <p class="error-information">\n    We don’t have any results matching your search.\n  </p>',r.errorContainer.appendChild(t),o=!0};var l;l=new URL(i("kyEFX").resolve("bfHyM"),import.meta.url).toString();var d=i("7DS8N"),u=i("5bV6Z"),p=i("a3ItO");async function g(e){const n=JSON.parse(localStorage.getItem("genres")),a=e.results.map((async e=>{const{poster_path:a,id:i,release_date:r,genre_ids:s,vote_average:o,original_title:c,original_name:p,first_air_date:g}=e;return`<li class="card-item" data-id="${i}">\n        <img class="film-poster" src="${a?`https://image.tmdb.org/t/p/w500${a}`:`${t(l)}`}" alt="${c||p}" />\n        <div class="overlay">\n          <div class="film-info">\n            <p class="film-title">${c||p}</p>\n            <div class="film-details">\n              <span class="film-description">${(0,u.validateGenres)(s,n)} | ${new Date(r).getFullYear()||new Date(g).getFullYear()}</span>\n    <div class="stars-container">${(0,d.default)({voteAverage:o,isHero:!1})}</div>            \n      \x3c!-- <span class="film-rating">${o.toFixed(1)}</span> --\x3e\n            </div>\n          </div>\n        </div>\n      </li>`})),i=await Promise.all(a);r.catalogList.innerHTML=i.join("");document.querySelector(".listListener").addEventListener("click",(t=>{const e=t.target.closest(".card-item").getAttribute("data-id");(0,p.openModalAboutFilm)(e)}))}const m=new s,f=document.querySelector(".pagination-wrapper");let h=1,v=0;function y(t){m.getMovies(t).then(b).catch(_)}function b(t){var e;v=t.total_pages,v>30&&(v=30),g(t),e=t.total_pages,h===e&&r.nextPageBtn.setAttribute("disabled","disabled"),E(v,h)}function _(t){r.catalogList.innerHTML="",c(),console.error("An error occurred:",t)}function L(){r.catalogList.innerHTML="",r.errorContainer.classList.remove("is-hidden"),f.classList.add("is-hidden"),c()}function E(t,e){let n="",a=e+1,i=e-1,s="";t>5&&e>2&&(n+='<li class="pagination-item">\n        <button type="button" class="pagination-button">1</button>\n      </li>',e>3&&(n+='<li class="pagination-item">\n          <button type="button" class="pagination-dots">...</button>\n        </li>')),(e==t||e==t-1)&&(i-=1),(1==e||2==e)&&(a+=1);for(let r=i;r<=a;r++)r>t||r<1||(s=e==r?"is-active":"",n+=`<li class="pagination-item">\n      <button type="button" class="pagination-button ${s}">${r}</button>\n    </li>`);return t>5&&e<t-1&&(e<t-2&&(n+='<li class="pagination-item">\n        <button type="button" class="pagination-dots">...</button>\n      </li>'),n+=`<li class="pagination-item">\n      <button type="button" class="pagination-button">${t}</button>\n    </li>`),r.paginationContainer.innerHTML=n,n}r.searchForm.addEventListener("submit",(function(t){t.preventDefault(),r.paginationContainer.classList.remove("is-hidden"),r.errorContainer.classList.add("is-hidden");const e=r.searchInput.value.trim();m.query=e,m.resetPage(),m.resetTotal(),""===e?L():async function(){try{const t=await m.getMovies();0===t.total_results?L():(v=t.total_pages,v>30&&(v=30),f.classList.remove("is-hidden"),m.total=t.total_results,g(t),h=t.page,E(v,h)),r.searchInput.value=""}catch(t){_(t)}}()})),r.cancelBtn.addEventListener("click",(function(){r.cancelBtn.classList.add("is-hidden"),r.searchInput.value=""})),r.searchInput.addEventListener("input",(function(t){t.currentTarget.value.trim()?r.cancelBtn.classList.remove("is-hidden"):r.cancelBtn.classList.add("is-hidden")})),r.nextPageBtn.addEventListener("click",(function(){h<v&&(h+=1,m.incrementPage(),y(h))})),r.prevPageBtn.addEventListener("click",(function(){h>1&&(h-=1,m.decrementPage(),y(h))})),r.paginationContainer.addEventListener("click",(function(t){if("BUTTON"===t.target.tagName){const e=parseInt(t.target.textContent);isNaN(e)||e===h||(h=e,m.page=e,y(h))}})),r.errorContainer.classList.add("is-hidden"),r.cancelBtn.classList.add("is-hidden"),y(h),i("4E5Dt"),i("haKcb"),i("3AqJ6");
//# sourceMappingURL=catalog.c812cd17.js.map
