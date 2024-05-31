(()=>{"use strict";var n={21:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),i=t.n(o),r=t(645),a=t.n(r),s=t(667),c=t.n(s),l=new URL(t(783),t.b),d=a()(i()),u=c()(l);d.push([n.id,`* {\n    box-sizing: border-box !important;\n}\n\nbody {\n    font-size: 14px;\n    background-color: #222222;\n    color: #fff;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n#app {\n    padding-bottom: 48px;\n}\n\n*:focus {\n    outline: none;\n}\n.item-view,\n.item-test {\n    width: 100%;\n}\n\n.item-view {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 1200px;\n    margin: 0 auto;\n}\n\n.item-view h2 {\n    font-size: 2rem;\n    font-weight: bold;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\n\n.item-list {\n    display: grid;\n    margin: 48px 0;\n    grid-template-columns: repeat(4, 180px);\n    grid-column-gap: 160px;\n    grid-row-gap: 48px;\n}\n\n.skeleton-list {\n    display: grid;\n    margin: 48px 0;\n    grid-template-columns: repeat(4, 180px);\n    grid-column-gap: 160px;\n    grid-row-gap: 48px;\n}\n\n.item-card {\n    display: flex;\n    flex-direction: column;\n}\n\n.item-thumbnail {\n    border-radius: 8px;\n    width: 180px;\n    height: 270px;\n    background-size: contain;\n}\n\n.item-title {\n    margin-top: 16px;\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n.item-score {\n    margin-top: 16px;\n    font-size: 1.2rem;\n    display: flex;\n    align-items: end;\n    gap: 7px;\n}\n\n.item-score::after {\n    margin-left: 8px;\n}\n\n.item-title.skeleton::after,\n.item-score.skeleton::after {\n    font-size: 0;\n    content: 'loading';\n}\n\n.full-width {\n    width: 100%;\n}\n\n.last-item {\n    margin-top: 48px;\n}\n\nbutton.btn {\n    border: 0;\n    border-radius: 8px;\n    height: 30px;\n    color: #fff;\n}\n\nbutton.primary {\n    background: #f33f3f;\n}\n\n.item-card .skeleton {\n    background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\n    background-size: 400%;\n    -webkit-animation: skeleton-animation 5s infinite ease-out;\n    animation: skeleton-animation 5s infinite ease-out;\n    border-radius: 8px;\n}\n\n@-webkit-keyframes skeleton-animation {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n@keyframes skeleton-animation {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\nheader {\n    width: 100%;\n    min-width: 1200px;\n    height: 72px;\n    background-color: #222;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n    border-bottom: 1px solid white;\n    margin-bottom: 48px;\n}\n\nheader h1 {\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    font-size: 2rem;\n    font-weight: bold;\n    letter-spacing: -0.1rem;\n    color: #f33f3f;\n}\n\nheader > .search-box {\n    background: #fff;\n    padding: 8px;\n    border-radius: 4px;\n}\n\nheader .search-box > input {\n    border: 0;\n}\n\nheader .search-box > .search-button {\n    width: 14px;\n    border: 0;\n    text-indent: -1000rem;\n    background: url(${u}) transparent no-repeat 0 1px;\n    background-size: contain;\n}\n\n.modal {\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 20px;\n    background-color: white;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n    color: black;\n    border-radius: 12px;\n    width: 400px;\n    height: 200px;\n}\n\n.modal-content {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n`,""]);const p=d},434:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=t(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var m=i(h,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var c=o(n,i),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},783:(n,e,t)=>{n.exports=t.p+"f1bd4269f4446ceae306.png"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),r=t(569),a=t.n(r),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),h=t(434),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var g=t(21),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),e()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;class v{#n=!1;#e="";#t=document.createElement("div");toggle(){this.#n=!this.#n,console.log("this.#visibility",this.#n),this.#t.style.display=this.#n?"block":"none"}set content(n){this.#e=n}get rendered(){return this.#t.classList.add("modal"),this.toggle(),this.#t.innerHTML=`\n      <div class="modal-content">\n        ${this.#e}\n        <button class="close-button">close</button>\n      </div>\n    `,this.#t.querySelector(".close-button").addEventListener("click",(()=>{console.log("test"),this.toggle()})),this.#t}}function b(n){return Number.isNaN(n)?"ConverError에 입력하신 Code가 숫자가 아닙니다.":{1:"성공.",2:"유효하지 않은 서비스: 이 서비스는 존재하지 않습니다.",3:"인증 실패: 서비스에 접근할 권한이 없습니다.",4:"유효하지 않은 형식: 이 형식으로 된 서비스는 존재하지 않습니다.",5:"유효하지 않은 매개변수: 요청 매개변수가 잘못되었습니다.",6:"유효하지 않은 ID: 사전 조건 ID가 유효하지 않거나 찾을 수 없습니다.",7:"유효하지 않은 API 키: 유효한 키가 필요합니다.",8:"중복 항목: 제출하려는 데이터가 이미 존재합니다.",9:"서비스 오프라인: 이 서비스는 일시적으로 오프라인입니다. 나중에 다시 시도하십시오.",10:"정지된 API 키: 계정 접근이 정지되었습니다. TMDB에 문의하십시오.",11:"내부 오류: 문제가 발생했습니다. TMDB에 문의하십시오.",12:"항목/기록이 성공적으로 업데이트되었습니다.",13:"항목/기록이 성공적으로 삭제되었습니다.",14:"인증 실패.",15:"실패.",16:"장치 거부됨.",17:"세션 거부됨.",18:"검증 실패.",19:"유효하지 않은 Accept 헤더.",20:"유효하지 않은 날짜 범위: 범위는 최대 14일이어야 합니다.",21:"항목을 찾을 수 없습니다: 수정하려는 항목을 찾을 수 없습니다.",22:"유효하지 않은 페이지: 페이지는 1부터 시작하며 최대 500까지 가능합니다. 페이지는 정수여야 합니다.",23:"유효하지 않은 날짜: 형식은 YYYY-MM-DD이어야 합니다.",24:"백엔드 서버에 대한 요청이 시간 초과되었습니다. 다시 시도하십시오.",25:"요청 횟수(#)가 허용된 한도(40)를 초과했습니다.",26:"사용자 이름과 비밀번호를 제공해야 합니다.",27:"응답 객체에 너무 많은 추가: 최대 원격 호출 수는 20입니다.",28:"유효하지 않은 시간대: 유효한 시간대에 대한 문서를 참조하십시오.",29:"이 작업을 확인해야 합니다: confirm=true 매개변수를 제공하십시오.",30:"유효하지 않은 사용자 이름 및/또는 비밀번호: 유효한 로그인을 제공하지 않았습니다.",31:"계정 비활성화됨: 계정이 더 이상 활성화되지 않았습니다. 오류인 경우 TMDB에 문의하십시오.",32:"이메일 확인되지 않음: 이메일 주소가 확인되지 않았습니다.",33:"유효하지 않은 요청 토큰: 요청 토큰이 만료되었거나 유효하지 않습니다.",34:"요청한 리소스를 찾을 수 없습니다.",35:"유효하지 않은 토큰.",36:"이 토큰에는 사용자가 쓰기 권한을 부여하지 않았습니다.",37:"요청한 세션을 찾을 수 없습니다.",38:"이 리소스를 편집할 권한이 없습니다.",39:"이 리소스는 비공개입니다.",40:"업데이트할 항목이 없습니다.",41:"이 요청 토큰은 사용자가 승인하지 않았습니다.",42:"이 요청 방법은 이 리소스에 지원되지 않습니다.",43:"백엔드 서버에 연결할 수 없습니다.",44:"ID가 유효하지 않습니다.",45:"이 사용자는 정지되었습니다.",46:"API가 유지 보수 중입니다. 나중에 다시 시도하십시오.",47:"입력이 유효하지 않습니다."}[n]}class y{#o="";#i="";#r="";#a="";#s="";#c=[];#l="";#d="";#u="";#p="";#h="";#m="";#g="";#f="";constructor({title:n="",poster_path:e="",vote_average:t="",adult:o="",backdrop_path:i="",genre_ids:r=[],id:a="",original_language:s="",original_title:c="",overview:l="",popularity:d="",release_date:u="",video:p="",vote_count:h=""}){this.#o=n,this.#i=e,this.#r=t,this.#a=o,this.#s=i,this.#c=r,this.#l=a,this.#d=s,this.#u=c,this.#p=l,this.#h=d,this.#m=u,this.#g=p,this.#f=h}getTitle(){return this.#o}getPosterPath(){return this.#i}getVoteAverage(){return this.#r}getAdult(){return this.#a}getBackdropPath(){return this.#s}getGenreIds(){return this.#c}getId(){return this.#l}getOriginalLanguage(){return this.#d}getOriginalTitle(){return this.#u}getOverview(){return this.#p}getPopularity(){return this.#h}getReleaseDate(){return this.#m}getVideo(){return this.#g}getVoteCount(){return this.#f}}const x=t.p+"6328741810b732410eec.png",w=t.p+"2e162b4fefb34cd7ed8d.png",k=async function(n){try{const e=new URL("https://api.themoviedb.org/3/search/movie"),t={query:n,api_key:"cd45ff31f728c6222a2830fc1fb7f44e"};e.search=new URLSearchParams(t).toString();const o=await fetch(e,{method:"GET"}).then((n=>n.json()));if(!1===o.success){const n=new Error;throw n.name=o.status_code,n.message=o.status_message,n}return o}catch(n){console.log()}},_=function(n){document.querySelector(".item-view h2").innerText=n},M=document.getElementById("more-movies"),T=new class{#v=[];page=1;#b=document.querySelector(".item-list");#y=document.querySelector(".skeleton-list");setMovies(n){this.#v=n}showMovies(){const n=this.#v.map((n=>`\n              <li>\n                <a href="#">\n                  <div class="item-card">\n                    <img\n                      class="item-thumbnail"\n                      src="https://image.tmdb.org/t/p/w500${n.getPosterPath()}"\n                      loading="lazy"\n                      alt="${n.title}"\n                    />\n                    <p class="item-title">${n.getTitle()}</p>\n                    <p class="item-score">\n                    ${n.getVoteAverage()} <img src="${x}" alt="별점" /> \n                    </p>\n                  </div>\n                </a>\n              </li>\n            `)).join("");this.#b.innerHTML+=n}resetMovies(){this.#b.innerHTML=""}showSkeleton(n){if(!0===n){const n=Array(20).fill('            \n          <li>\n            <a href="#">\n              <div class="item-card">\n                <div class="item-thumbnail skeleton"></div>\n                <div class="item-title skeleton"></div>\n                <div class="item-score skeleton"></div>\n              </div>\n            </a>\n          </li>').join("");this.#y.innerHTML=n}else this.#y.innerHTML=""}};async function L(n){try{T.showSkeleton(!0);const e=await async function(n){try{const e=new URL("https://api.themoviedb.org/3//movie/popular"),t={api_key:"cd45ff31f728c6222a2830fc1fb7f44e",page:n,language:"ko-KR"};e.search=new URLSearchParams(t).toString();const o=await fetch(e,{method:"GET"}).then((n=>n.json()));if(!1===o.success){const n=new Error;throw n.name=o.status_code,n.message=o.status_message,n}return o}catch(n){console.log("error",n)}}(n);if(!1!==e.success){const n=e.results.map((n=>new y(n)));T.setMovies(n),T.showMovies()}else M.style.display="none"}catch(n){const e=new v;e.content=`${b(n.name)}`,document.querySelector("body").appendChild(e.rendered),M.style.display="none"}finally{T.showSkeleton(!1)}}addEventListener("DOMContentLoaded",(()=>{var n;n=` <h1><img src="${w}" alt="MovieList 로고" /></h1>`,document.querySelector(".header").innerHTML=`\n    ${n}\n    \n        <div class="search-box">\n        <input id="search-input" type="text" placeholder="검색" />\n        <button class="search-button">검색</button>\n    </div>\n        \n    `,L(T.page),_("지금 인기 있는 영화");const e=document.querySelector(".search-button"),t=document.getElementById("search-input");e.addEventListener("click",(async()=>{try{if(t.value){const n=(await k(t.value)).results.map((n=>new y(n)));T.resetMovies(),_(`"${t.value}" 검색 결과`),T.setMovies(n),T.showMovies()}}catch(n){const e=new v;e.content=`${b(n.name)}`,document.querySelector("body").appendChild(e.rendered),M.style.display="none"}})),t.addEventListener("keydown",(async({key:n})=>{if("Enter"===n)try{if(t.value){const n=(await k(t.value)).results.map((n=>new y(n)));T.resetMovies(),_(`"${t.value}" 검색 결과`),T.setMovies(n),T.showMovies()}}catch(n){const e=new v;e.content=`${b(n.name)}`,document.querySelector("body").appendChild(e.rendered),M.style.display="none"}}))})),M.addEventListener("click",(()=>{T.page+=1,L(T.page)}))})()})();