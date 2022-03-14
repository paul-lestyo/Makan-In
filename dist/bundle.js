!function(t){function e(e){for(var r,o,u=e[0],c=e[1],s=e[2],l=0,v=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(d&&d(e);v.length;)v.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={3:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var d=c;i.push([14,0,1,2]),n()}({14:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(5),i=n(6),o=n(7),u=(n(12),{init:function(t){var e=this,n=t.button,r=t.drawer,a=t.content;n.addEventListener("click",(function(t){e._toggleDrawer(t,r)})),a.addEventListener("click",(function(t){e._closeDrawer(t,r)}))},_toggleDrawer:function(t,e){t.stopPropagation(),e.classList.toggle("nav-mobile")},_closeDrawer:function(t,e){t.stopPropagation(),e.classList.remove("nav-mobile")}}),c={parseActiveUrlWithCombiner:function(){var t=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(t);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var t=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(t)},_urlSplitter:function(t){var e=t.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(t){return(t.resource?"/".concat(t.resource):"/")+(t.id?"/:id":"")+(t.verb?"/".concat(t.verb):"")}},s={BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images/small/",LARGE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images/large/",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"restaurant-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants",WEB_SOCKET_SERVER:"wss://stormy-badlands-06326.herokuapp.com"},d={HOME:"".concat(s.BASE_URL,"list"),DETAIL:function(t){return"".concat(s.BASE_URL,"detail/").concat(t)},REVIEW:"".concat(s.BASE_URL,"review")};function l(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){l(i,r,a,o,u,"next",t)}function u(t){l(i,r,a,o,u,"throw",t)}o(void 0)}))}}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r,a,i,o;return e=t,n=null,r=[{key:"Home",value:(o=v(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d.HOME);case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.restaurants);case 7:case"end":return t.stop()}}),t)}))),function(){return o.apply(this,arguments)})},{key:"detailRestaurant",value:(i=v(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d.DETAIL(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.restaurant);case 7:case"end":return t.stop()}}),t)}))),function(t){return i.apply(this,arguments)})},{key:"sendReview",value:(a=v(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d.REVIEW,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":"12345"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.customerReviews);case 7:case"end":return t.stop()}}),t)}))),function(t){return a.apply(this,arguments)})}],n&&f(e.prototype,n),r&&f(e,r),t}(),m=function(t){return'\n\t<div class="restaurant detail" style="background-image: url(\''.concat(s.LARGE_IMAGE_URL+t.pictureId,'\');">\n\t<div class="wrapper-detail">\n\t\t<div class="restaurant-img">\n\t\t\t<img id="img-restaurant" src="').concat(s.BASE_IMAGE_URL+t.pictureId,'" alt="').concat(t.name,'">\n\t\t\t<div class="categories">\n\t\t\t<span>Kategori Menu</span>\n\t\t\t<ul>\n\t\t\t\t').concat(t.categories.map((function(t){return"<li>".concat(t.name,"</li>")})).join(""),'\n\t\t\t</ul>\n\t\t</div>\n\t\t</div>\n\t\t<div class="desc">\n\t\t\t<h1 id="title">').concat(t.name,'</h1>\n\t\t\t<h2 id="city">Kota: ').concat(t.city,'</h2>\n\t\t\t<h2 id="address">Alamat: ').concat(t.address,'</h2>\n\t\t\t<h2 id="rating">Rating : ').concat(t.rating,'</h2>\n\t\t\t<h3 id="overview">Description: <br> ').concat(t.description,'</h3> \n\t\t</div>\n\n\t\t\n\t</div>\n\t</div>\n\n\t<div class="more-details">\n\t<div class="foods">\n\t\t<h1>Food</h1>\n\t\t<ul>\n\t\t\t').concat(t.menus.foods.map((function(t){return"<li>".concat(t.name,"</li>")})).join(""),'\n\t\t</ul>\n\t</div>\n\t<div class="drinks">\n\t\t<h1>Drinks</h1>\n\t\t<ul>\n\t\t\t').concat(t.menus.drinks.map((function(t){return"<li>".concat(t.name,"</li>")})).join(""),'\n\t\t</ul>\n\t</div>\n\t<div class="customer-review">\n\t\t<h1>Customers Review</h1>\n\t\t<div id="reviews">\n\t\t').concat(t.customerReviews.map((function(t){return'<div class="review">\n\t\t<div class="avatar">\n\t\t\t<i class="fa fa-user-circle" aria-hidden="true"></i>\n\t\t\t<span class="name-reviewer">'.concat(t.name,'</span>\n\t\t</div>\n\t\t<div class="comment">\n\t\t\t<p>').concat(t.review,'</p> <br>\n\t\t\t<span class="date">').concat(t.date,"</span>\n\t\t</div>\n\t</div>")})).join(""),'\n  </div>\n\t<h2>Berikan Komentar Anda</h2>\n\t<form name="reviewForm" onsubmit="return false;">\n\t\t<input type="hidden" name="id" value="').concat(t.id,'">\n\t\t<input type="text" name="name" placeholder="Masukkan Nama Anda">\n\t\t<textarea name="review" row="1" placeholder="Masukkan Review Anda"></textarea>\n\t\t<input type="submit" name="submit" value="Kirim">\n\t</form>\n\t\t\n\t</div>\n\t</div>\n')},h=function(t){return'\n\t\t\t<div class="card">\n                <div class="image">\n                    <div class="badge">\n                        <span>Kota '.concat(t.city,'</span>\n                    </div>\n                    <img class="lazyload" data-src="').concat(s.BASE_IMAGE_URL+t.pictureId,'" alt="').concat(t.name,'">\n                </div>\n                <div class="detail">\n                    <div class="rating">\n                        Rating: ').concat(t.rating,'\n                    </div>\n                    <div class="title">\n                        <a href="',"/#/detail/".concat(t.id),'">').concat(t.name,'</a>\n                    </div>\n                    <div class="desc">\n                        ').concat(t.description,"\n                    </div>\n                </div>\n            </div>\n  ")};function w(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){w(i,r,a,o,u,"next",t)}function u(t){w(i,r,a,o,u,"throw",t)}o(void 0)}))}}var R={init:function(t){var e=this;return g(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.likeButtonContainer,a=t.favoriteRestaurant,i=t.restaurant,e._likeButtonContainer=r,e._restaurant=i,e._favoriteRestaurant=a,n.next=6,e._renderButton();case 6:case"end":return n.stop()}}),n)})))()},_renderButton:function(){var t=this;return g(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t._restaurant.id,e.next=3,t._isRestaurantExist(n);case 3:if(!e.sent){e.next=7;break}t._renderLiked(),e.next=8;break;case 7:t._renderLike();case 8:case"end":return e.stop()}}),e)})))()},_isRestaurantExist:function(t){var e=this;return g(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e._favoriteRestaurant.getRestaurant(t);case 2:return r=n.sent,n.abrupt("return",!!r);case 4:case"end":return n.stop()}}),n)})))()},_renderLike:function(){var t=this;return g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._likeButtonContainer.innerHTML='\n  <button aria-label="like this Restaurant" id="likeButton" class="like">\n     <i class="far fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._favoriteRestaurant.putRestaurant(t._restaurant);case 2:t._renderButton();case 3:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})))()},_renderLiked:function(){var t=this;return g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this Restaurant" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._favoriteRestaurant.deleteRestaurant(t._restaurant.id);case 2:t._renderButton();case 3:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})))()}};function b(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function k(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){b(i,r,a,o,u,"next",t)}function u(t){b(i,r,a,o,u,"throw",t)}o(void 0)}))}}var y={init:function(t){var e=this;return k(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.formContainer,e._formContainer=r,r.submit.addEventListener("click",(function(t){e._sendReview(t)}));case 3:case"end":return n.stop()}}),n)})))()},_sendReview:function(t){var e=this;return k(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.stopPropagation(),r={id:e._formContainer.id.value,name:e._formContainer.name.value,review:e._formContainer.review.value},n.prev=2,n.next=5,p.sendReview(r);case 5:a=n.sent,e._updateReviews(a),e._formContainer.reset(),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),console.log(n.t0),alert("Failed to Send Review");case 14:case"end":return n.stop()}}),n,null,[[2,10]])})))()},_updateReviews:function(t){var e;document.querySelector("#reviews").innerHTML+=(e=t.pop(),'\n<div class="review">\n\t<div class="avatar">\n\t\t<i class="fa fa-user-circle" aria-hidden="true"></i>\n\t\t<span class="name-reviewer">'.concat(e.name,'</span>\n\t</div>\n\t<div class="comment">\n\t\t<p>').concat(e.review,'</p> <br>\n\t\t<span class="date">').concat(e.date,"</span>\n\t</div>\n\t</div>\n"))}},_=n(8);function x(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function E(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){x(i,r,a,o,u,"next",t)}function u(t){x(i,r,a,o,u,"throw",t)}o(void 0)}))}}var A=s.DATABASE_NAME,S=s.DATABASE_VERSION,L=s.OBJECT_STORE_NAME,P=Object(_.a)(A,S,{upgrade:function(t){t.createObjectStore(L,{keyPath:"id"})}}),C={getRestaurant:function(t){return E(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,P;case 4:return e.abrupt("return",e.sent.get(L,t));case 5:case"end":return e.stop()}}),e)})))()},getAllRestaurants:function(){return E(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P;case 2:return t.abrupt("return",t.sent.getAll(L));case 3:case"end":return t.stop()}}),t)})))()},putRestaurant:function(t){return E(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasOwnProperty("id")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,P;case 4:return e.abrupt("return",e.sent.put(L,t));case 5:case"end":return e.stop()}}),e)})))()},deleteRestaurant:function(t){return E(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P;case 2:return e.abrupt("return",e.sent.delete(L,t));case 3:case"end":return e.stop()}}),e)})))()}};function M(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function T(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){M(i,r,a,o,u,"next",t)}function u(t){M(i,r,a,o,u,"throw",t)}o(void 0)}))}}function B(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function O(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){B(i,r,a,o,u,"next",t)}function u(t){B(i,r,a,o,u,"throw",t)}o(void 0)}))}}function j(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function H(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){j(i,r,a,o,u,"next",t)}function u(t){j(i,r,a,o,u,"throw",t)}o(void 0)}))}}var I={render:function(){return H(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n\t\t<div class="jumbotron">\n\t\t\t<h1>Tempat Mencari Restaurant di Berbagai Negara</h1>\n\t\t\t<h2>Pilihlah Restaurant Terbaik Untukmu</h2>\n\t\t</div>\n\t\t<h1 class="title-main">Explore Restaurant</h1> \n\t\t<div class="container">\n\t\t\t<div class="skeleton"></div>\n\t\t\t<div class="skeleton"></div>\n\t\t\t<div class="skeleton"></div>\n\t\t\t<div class="skeleton"></div>\n\t\t\t<div class="skeleton"></div>\n\t\t\t<div class="skeleton"></div>\n\t\t</div>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return H(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector(".container"),t.prev=1,t.next=4,p.Home();case 4:n=t.sent,e.innerHTML="",n.length>0?n.forEach((function(t){e.innerHTML+=h(t)})):e.innerHTML+='\n\t<div class="empty-data">\n\t\t\t<img src="./images/no-data.png" width="200">\n\t\t\t<h1>Data Not Found</h1>\n\t</div>\n',t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),e.innerHTML="",e.innerHTML='\n\t<div class="empty-data no-internet-detail">\n\t\t<img src="./images/no-internet.png" width="200">\n\t\t<h1>No Internet</h1>\n\t</div>\n';case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},D={"/":I,"/home":I,"/favorite":{render:function(){return O(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n\t\t<div class="jumbotron jumbotron-favorite">\n\t\t\t<h1>Favorite Restaurant</h1>\n\t\t</div>\n\t\t<div class="container">\n\t\t\t<div class="loader"></div>\n\t\t</div>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return O(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.getAllRestaurants();case 2:e=t.sent,document.querySelector(".loader").remove(),n=document.querySelector(".container"),e.length>0?e.forEach((function(t){n.innerHTML+=h(t)})):n.innerHTML+='\n\t<div class="empty-data">\n\t\t\t<img src="./images/no-data.png" width="200">\n\t\t\t<h1>Data Not Found</h1>\n\t</div>\n';case 7:case"end":return t.stop()}}),t)})))()}},"/detail/:id":{render:function(){return T(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n\t<div class="loader loader-detail"></div>\n\t<div id="likeButtonContainer"></div>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return T(regeneratorRuntime.mark((function t(){var e,n,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.parseActiveUrlWithoutCombiner(),n=document.querySelector(".loader"),r=document.querySelector("#mainContent"),t.prev=3,t.next=6,p.detailRestaurant(e.id);case 6:a=t.sent,n.remove(),r.innerHTML+=m(a),y.init({formContainer:document.reviewForm}),R.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),favoriteRestaurant:C,restaurant:a}),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(3),console.log(t.t0),n.remove(),r.innerHTML='\n\t<div class="empty-data no-internet-detail">\n\t\t<img src="./images/no-internet.png" width="200">\n\t\t<h1>No Internet</h1>\n\t</div>\n';case 18:case"end":return t.stop()}}),t,null,[[3,13]])})))()}}};function U(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var q=function(){function t(e){var n=e.button,r=e.drawer,a=e.content;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._button=n,this._drawer=r,this._content=a,this._initialAppShell()}var e,n,r,a,i;return e=t,(n=[{key:"_initialAppShell",value:function(){u.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(a=regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.parseActiveUrlWithCombiner(),n=D[e],t.next=4,n.render();case 4:return this._content.innerHTML=t.sent,t.next=7,n.afterRender();case 7:case"end":return t.stop()}}),t,this)})),i=function(){var t=this,e=arguments;return new Promise((function(n,r){var i=a.apply(t,e);function o(t){U(i,n,r,o,u,"next",t)}function u(t){U(i,n,r,o,u,"throw",t)}o(void 0)}))},function(){return i.apply(this,arguments)})}])&&N(e.prototype,n),r&&N(e,r),t}(),W=n(4),F=n.n(W);function G(t,e,n,r,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}var K=function(){var t,e=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("serviceWorker"in navigator)){t.next=4;break}return t.next=3,F.a.register();case 3:return t.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){G(i,r,a,o,u,"next",t)}function u(t){G(i,r,a,o,u,"throw",t)}o(void 0)}))});return function(){return e.apply(this,arguments)}}();n(13);r.b.add(a.faHeart,i.faUserCircle,o.faHeart),r.a.watch();var J=new q({button:document.querySelector("#menu"),drawer:document.querySelector("nav"),content:document.querySelector("#mainContent")});window.addEventListener("hashchange",(function(){J.renderPage()})),window.addEventListener("load",(function(){J.renderPage(),K()}))}});