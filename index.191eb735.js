!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire1134;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire1134=o),o.register("2ufDr",(function(t,n){var r=o("bpxeT"),a=o("2TvXO"),i=o("7svdd");o("gxg06");var c="58fde9f9a3392c3dbee86a1f2142354e",d=Math.floor(20*Math.random())+0,l=o("dIxxU").default,s={heroDiv:document.getElementById("hero-div"),heroTitle:document.getElementById("hero-title"),heroOverview:document.getElementById("hero-overview"),heroBtnDiv:document.getElementById("hero-btn-div"),heroFilmDataEl:document.querySelector(".hero-info-wrap")};function u(){return(u=e(r)(e(a).mark((function t(){var n;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),p(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(e,t,n){s.heroDiv.style.backgroundImage="linear-gradient(79.39deg, #111111 32.37%, rgba(17, 17, 17, 0) 72.02%), \n  url(".concat(e,")"),s.heroTitle.textContent="".concat(t),s.heroOverview.textContent="".concat(n)}function p(e){s.heroDiv.classList.add("hero-container-bg");var t;f("../images/default-bgimage.jpg","Let’s Make Your Own Cinema","Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience."),(t=document.createElement("button")).textContent="Get Started",t.classList.add("css-btn-trailer"),t.setAttribute("type","button"),s.heroBtnDiv.append(t)}window.addEventListener("load",(function(){(function(){return u.apply(this,arguments)})().then((function(e){var t,n,r=e.data.results[d],o=r.backdrop_path,a='"https://image.tmdb.org/t/p/original/'.concat(o,'"'),c=r.title,l=r.overview,u=r.id,p=r.vote_average;f(a,c,l),function(e){var t=document.createElement("button");t.textContent="Watch Trailer",t.classList.add("css-btn-trailer","watch-trailer-button"),t.setAttribute("type","button"),t.setAttribute("trailer-id","".concat(e)),s.heroBtnDiv.append(t);var n=document.createElement("button");n.textContent="More Details",n.classList.add("css-bnt-info"),n.setAttribute("type","button"),n.setAttribute("data-id",e),s.heroBtnDiv.append(n)}(u),t=u,n=p,s.heroFilmDataEl.dataset.id=t,s.heroFilmDataEl.dataset.rating=n,(0,i.default)({voteAverage:p,isHero:!0})}))}))})),o.register("gxg06",(function(t,n){var r=e(o("aVLdj")),a=!1;function i(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=41b8f9437bf3f899281f8a3f9bdc0891&language=en-US");fetch(t).then((function(e){return e.json()})).then((function(e){var t=e.results[0].key,n="https://www.youtube.com/embed/".concat(t,"?rel=0&amp;controls=1&amp;showinfo=0"),r=document.createElement("iframe");r.src=n,r.width="560",r.height="315",r.frameBorder="0",r.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",r.allowFullscreen="";var o=document.createElement("span");o.className="close-button",o.innerHTML='\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 10.5" width="10.5px" height="10.5px">\n            <path fill="#FFFFFF" d="M9.2,1.3L8.2,0.3L5.25,3.25L2.3,0.3L1.3,1.3L4.25,4.25L1.3,7.2L2.3,8.2L5.25,5.25L8.2,8.2L9.2,7.2L6.25,4.25z"/>\n          </svg>\n        ',o.addEventListener("click",(function(){d()}));var a=document.querySelector(".modal-content");a.innerHTML="",a.appendChild(r),a.appendChild(o);document.getElementById("modal");c()})).catch((function(){!function(){var e=document.querySelector(".modal-content");e.innerHTML='\n      <div class="error-content">\n        <p class="error-message">OOPS... <br>We are very sorry!<br>\n        But we couldn’t find the trailer.</p>\n         <img class="error-image" src=\''.concat(r,'\' alt="Error!">\n        <button class="close-button">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 10.5" width="10.5px" height="10.5px">\n            <path fill="#FFFFFF" d="M9.2,1.3L8.2,0.3L5.25,3.25L2.3,0.3L1.3,1.3L4.25,4.25L1.3,7.2L2.3,8.2L5.25,5.25L8.2,8.2L9.2,7.2L6.25,4.25z"/>\n          </svg>\n        </button>\n      </div>\n    '),c();var t=e.querySelector(".close-button");t.addEventListener("click",(function(){d()})),t.classList.add("close-button"),e.querySelector(".error-content").classList.add("error-content")}()}))}function c(){document.getElementById("modal").style.display="block",document.body.style.overflow="hidden",a=!0}function d(){var e=document.getElementById("modal");document.querySelector(".modal-content").innerHTML="",e.style.display="none",document.body.style.overflow="auto",a=!1}window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".hero-btn-wrap"),t=document.querySelector(".close-button"),n=document.getElementById("modal");e.addEventListener("click",(function(e){var t=e.target.closest(".watch-trailer-button");t&&i(t.getAttribute("trailer-id"))})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&a&&d()})),window.addEventListener("click",(function(e){e.target===n&&a&&d()})),t.addEventListener("click",(function(){d()}))}))})),o.register("aVLdj",(function(e,t){e.exports=o("aNJCr").getBundleURL("hfX1u")+o("iE7OH").resolve("iNwWb")})),o.register("4R5zJ",(function(e,t){var n=o("VuQ7E"),r=o("fC9Qi");window.addEventListener("click",(function(e){var t=document.querySelector(".css-bnt-info"),o=(document.querySelector(".watch-trailer-button"),document.querySelector(".btn")),a=e.target.dataset.id;switch(e.target){case t:(0,n.openModalAboutFilm)(a);break;case o:(0,r.handleFilm)(e)}}))})),o("iE7OH").register(JSON.parse('{"hfX1u":"index.191eb735.js","iNwWb":"default.8ee56845.jpg"}'))}();
//# sourceMappingURL=index.191eb735.js.map
