(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)i=o[u],n[i]&&p.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},n={app:0},r=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4a603ad4"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise(function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"ba588abd"}[t]+".css",n=l.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===s||u===n))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){c=p[o],u=c.getAttribute("data-href");if(u===s||u===n)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete i[t],d.parentNode.removeChild(d),a(r)},d.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){i[t]=0}));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise(function(e,a){s=n[t]=[e,a]});e.push(s[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t),c=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+s+": "+i+")");r.type=s,r.request=i,a[1](r)}n[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0775":function(t,e,a){},"0eea":function(t,e,a){"use strict";var s=a("d1e8"),i=a.n(s);i.a},1254:function(t,e,a){"use strict";var s=a("dd88"),i=a.n(s);i.a},"238b":function(t,e,a){"use strict";var s=a("0775"),i=a.n(s);i.a},"26b4":function(t,e,a){"use strict";var s=a("4422"),i=a.n(s);i.a},"2ab6":function(t,e,a){"use strict";var s=a("66ae"),i=a.n(s);i.a},"2d66":function(t,e,a){"use strict";var s=a("b645"),i=a.n(s);i.a},3183:function(t,e,a){"use strict";var s=a("9930"),i=a.n(s);i.a},"3eb6":function(t,e,a){},4422:function(t,e,a){},"457d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("456d"),a("ac6a"),a("5df3"),a("1c4c"),a("7514"),a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header",{attrs:{links:t.links}}),a("router-view"),a("app-footer",{attrs:{links:t.links}})],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"top-line"},[a("router-link",{staticClass:"logo logo-litera",attrs:{to:"/",tag:"a"}},[t._v("PhotoLib")]),a("div",{staticClass:"mobile-menu-button",on:{click:t.toggleMobileNav}},[a("i",{staticClass:"fa fa-bars"}),t._v(" Меню")]),a("nav",{staticClass:"main-menu top-menu",class:{active:t.toggleNav}},[a("ul",{staticClass:"main-menu__list",on:{click:t.hideNavBar}},t._l(t.links,function(e){return a("router-link",{key:e.title,staticClass:"main-menu__item",attrs:{to:e.url,tag:"li"}},[a("a",{staticClass:"main-menu__link"},[t._v(t._s(e.title))]),e.sublinks?a("ul",{staticClass:"main-menu__sub-menu"},t._l(e.sublinks,function(e,s){return a("router-link",{key:s,staticClass:"main-menu__item-sub",attrs:{to:e.url,tag:"li"}},[a("a",{staticClass:"main-menu__link"},[t._v(t._s(e.title))])])}),1):t._e()])}),1)])],1)},o=[],l={name:"Header",props:{links:Array},data:function(){return{toggleNav:!1}},methods:{toggleMobileNav:function(){this.toggleNav=!this.toggleNav},hideNavBar:function(){this.toggleNav=!1}}},c=l,u=(a("238b"),a("2877")),p=Object(u["a"])(c,r,o,!1,null,"15040715",null),d=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{staticClass:"main-footer"},[a("nav",{staticClass:"main-menu footer-menu"},[a("ul",t._l(t.links,function(e){return a("router-link",{key:e.title,attrs:{to:e.url,tag:"li"}},[a("a",[t._v(t._s(e.title))])])}),1)]),t._m(0)]),t._m(1)])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"soc"},[a("ul",[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-vk"})])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-facebook"})])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-instagram"})])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-odnoklassniki"})])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-rss"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"bottom-footer"},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"footer-copy"},[t._v("2019 © "),a("span",{staticClass:"logo-footera"},[t._v("PhotoLib")])])])])}],g={name:"Footer",props:{links:Array}},f=g,v=(a("3183"),Object(u["a"])(f,m,h,!1,null,"7e8ebf50",null)),k=v.exports,b={name:"App",data:function(){return{links:[{title:"Головна",url:"/"},{title:"Картинки",url:"/",sublinks:[{title:"Пейзажі",url:"/category/Пейзажі"},{title:"Авто",url:"/category/Авто"},{title:"Тварини",url:"/category/Тварини"}]},{title:"Добавити фото",url:"/new-post"},{title:"Контакти",url:"/about"}]}},components:{"app-header":d,"app-footer":k}},C=b,y=(a("1254"),Object(u["a"])(C,i,n,!1,null,null,null)),w=y.exports,L=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("slider",{attrs:{posts:t.getTopPost}}),a("div",{staticClass:"container"},[a("h1",{staticClass:"page-title"},[t._v("Найкраші фото")]),a("div",{staticClass:"input-group"},[a("label",{attrs:{for:"searchVal"}},[t._v("Пошук")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],staticClass:"input",attrs:{id:"searchVal",type:"text"},domProps:{value:t.searchVal},on:{input:function(e){e.target.composing||(t.searchVal=e.target.value)}}})]),a("div",{staticClass:"post-wrapper"},t._l(t.collected,function(t,e){return a("post-item",{key:e,attrs:{post:t}})}),1),a("div",{staticClass:"text-center"},[a("ul",{staticClass:"pagination"},t._l(t.pagination.pages,function(e){return a("li",{staticClass:"pagination__item"},[a("a",{staticClass:"pagination__link",attrs:{href:"#"},on:{click:function(a){return t.setPage(e)}}},[t._v(t._s(e))])])}),0)])])],1)},P=[],j=(a("6762"),a("2fdb"),a("55dd"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post"},[a("div",{staticClass:"post__author"},[a("span",{staticClass:"post__author-name"},[t._v(t._s(t.post.username))])]),a("router-link",{attrs:{to:"/post-page/"+t.post.id}},[a("div",{staticClass:"post__image",style:"background-image: url("+t.post.postImage+")",attrs:{title:t.post.caption}})]),a("div",{staticClass:"post__content"},[a("div",{staticClass:"post__heart"},[a("i",{staticClass:"fa",class:[this.post.hasBeenLiked?"fa-heart":"fa-heart-o"],on:{click:t.like}}),a("span",{staticClass:"post__likes"},[t._v(t._s(t.post.likes)+" подобається")])]),a("div",{staticClass:"post__category"},[a("b",[t._v("Категорія:")]),a("span",{staticClass:"post__category-link"},[t._v(" "+t._s(t.post.category))])]),a("span",{staticClass:"post__author-name"},[t._v(t._s(t.post.username)+":")]),a("span",{staticClass:"post__caption"},[t._v(t._s(t.post.caption))])])],1)}),B=[],A={name:"PostItem",props:{post:Object},methods:{like:function(){this.post.hasBeenLiked?this.post.likes--:this.post.likes++,this.post.hasBeenLiked=!this.post.hasBeenLiked}}},x=A,O=(a("8c6b"),Object(u["a"])(x,j,B,!1,null,"d54c44a0",null)),z=O.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider-wrapper"},[a("button",{staticClass:"arrow arrow-prev",on:{click:t.prevSlide}},[a("i",{staticClass:"fa fa-arrow-circle-o-left",attrs:{"aria-hidden":"true"}})]),a("button",{staticClass:"arrow arrow-next",on:{click:t.nextSlide}},[a("i",{staticClass:"fa fa-arrow-circle-o-right",attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"slider js-slider"},[a("div",{staticClass:"slider__body",style:{left:t.sliderOffsetLeft+"px"}},t._l(t.posts,function(e){return a("div",{staticClass:"slider__slide js-slide",style:"background-image: url("+e.postImage+")"},[a("div",{staticClass:"slider__content"},[a("div",{staticClass:"slider__title"},[t._v("Розділ:"+t._s(e.category))]),a("div",{staticClass:"slider__text"},[t._v("Автор:"+t._s(e.username))]),a("div",{staticClass:"slider__text"},[t._v("Опис:"+t._s(e.caption))]),a("div",{staticClass:"slider__text"},[t._v("Лайків:"+t._s(e.likes))]),a("router-link",{staticClass:"button",attrs:{to:"/post-page/"+e.id}},[t._v("Перейти")])],1)])}),0)])])},S=[],E={name:"Slider",props:{posts:Array},data:function(){return{sliderAllCount:0,sliderActive:1,sliderOffsetLeft:0,sliderOffsetStep:0}},methods:{initSlider:function(){var t=this.$el.querySelector(".js-slider"),e=t.querySelectorAll(".js-slide");this.sliderOffsetStep=t.clientWidth,this.sliderAllCount=e.length},openSlide:function(t){t>0&&t<=this.sliderAllCount&&(this.sliderActive=t,this.sliderOffsetLeft=-(this.sliderActive*this.sliderOffsetStep-this.sliderOffsetStep))},nextSlide:function(){this.sliderActive<this.sliderAllCount&&(this.sliderActive+=1,this.openSlide(this.sliderActive))},prevSlide:function(){this.sliderActive>1&&(this.sliderActive-=1,this.openSlide(this.sliderActive))}},mounted:function(){var t=this;this.initSlider(),window.addEventListener("resize",function(){t.initSlider(),t.openSlide(t.sliderActive)})}},T=E,$=(a("0eea"),Object(u["a"])(T,D,S,!1,null,"43d978f4",null)),N=$.exports,M=a("725c"),V={name:"home",data:function(){return{posts:M["a"],searchVal:"",perPage:12,pagination:{}}},computed:{getTopPost:function(){var t=this.posts.sort(function(t,e){return e.likes-t.likes});return t.slice(0,3)},searchPicture:function(){var t=this.searchVal.toLowerCase();return this.posts.filter(function(e){return""===e||(e.caption.toLowerCase().includes(t)||e.category.toLowerCase().includes(t))})},collected:function(){return this.paginate(this.searchPicture)}},methods:{setPage:function(t){this.pagination=this.paginator(this.searchPicture.length,t)},paginate:function(t){return _.slice(t,this.pagination.startIndex,this.pagination.endIndex+1)},paginator:function(t,e){var a=(e-1)*this.perPage,s=Math.min(a+this.perPage-1,t-1);return{currentPage:e,startIndex:a,endIndex:s,pages:_.range(1,Math.ceil(t/this.perPage)+1)}}},created:function(){this.setPage(1)},components:{"post-item":z,slider:N}},q=V,H=(a("26b4"),Object(u["a"])(q,I,P,!1,null,null,null)),F=H.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category"},[a("div",{staticClass:"category-header",style:"background-image: url("+t.getHeaderImage.postImage+")"},[a("h1",{staticClass:"category-header__heading"},[t._v("\n            Категорія: "+t._s(t.getHeaderImage.category)+"\n        ")]),a("div",{staticClass:"category-header__descr"},[t._v("\n            Кількіть фото: "+t._s(t.getCategoryPost.length)+"\n        ")])]),a("nav",{staticClass:"breadcrumbs"},[a("ul",{staticClass:"breadcrumbs-list"},[a("li",{staticClass:"breadcrumbs-list__item"},[a("router-link",{staticClass:"breadcrumbs-list__link",attrs:{to:"/"}},[t._v("Головна")]),a("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})],1),a("li",{staticClass:"breadcrumbs-list__item"},[a("span",{staticClass:"breadcrumbs-list__link breadcrumbs-list__link--current"},[t._v(t._s(t.getHeaderImage.category))])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"post-wrapper"},t._l(t.getCategoryPost,function(t,e){return a("post-item",{key:e,attrs:{post:t}})}),1)])])},J=[],K={name:"Category",data:function(){return{posts:M["a"]}},computed:{getCategoryPost:function(){var t=this;return M["a"].filter(function(e){return e.category===t.$route.params.id})},getHeaderImage:function(){return this.getCategoryPost.slice(0,1)[0]}},components:{"post-item":z}},W=K,R=(a("ba95"),Object(u["a"])(W,G,J,!1,null,"487ee158",null)),U=R.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("div",{staticClass:"about-header-wrapper"},[a("div",{staticClass:"about-header"},[a("h1",[t._v("Контакты")]),a("ul",{staticClass:"contact"},[a("li",{staticClass:"contact__item"},[a("b",[t._v("Телефон:")]),a("a",{staticClass:"contact__link",attrs:{href:"tel:380982767757"}},[t._v("+380982767757")])]),a("li",{staticClass:"contact__item"},[a("b",[t._v("Email:")]),a("a",{staticClass:"contact__link",attrs:{href:"mailto:admin@photolib.com"}},[t._v("admin@photolib.com")])]),a("li",{staticClass:"contact__item"},[a("b",[t._v("Адреса:")]),t._v(" м.Вінниця вул. Космонавтів 5, кв.40")])])])]),a("iframe",{attrs:{width:"100%",height:"440",src:"https://maps.google.com/maps?width=700&height=440&hl=en&q=%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F%2C%20%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82%D1%96%D0%B2%205+(%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D0%B0)&ie=UTF8&t=&z=14&iwloc=B&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}})])}],Q=(a("2d66"),{}),Y=Object(u["a"])(Q,X,Z,!1,null,"e889a81e",null),tt=Y.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-page"},[a("div",{staticClass:"post-header"},[a("div",{staticClass:"post-header__content"},[a("div",{staticClass:"post-header__category"},[a("b",[t._v("Категорія:")]),a("span",{staticClass:"post-header__category-link"},[t._v("\n                    "+t._s(t.getPost.category))])]),a("span",{staticClass:"post-header__author-name"},[a("b",[t._v("Автор:")]),t._v(" "+t._s(t.getPost.username))]),a("div",{staticClass:"post-header__caption"},[a("b",[t._v("Опис:")]),t._v(" "+t._s(t.getPost.caption))]),a("div",{staticClass:"post-header__heart"},[a("i",{staticClass:"fa",class:[t.getPost.hasBeenLiked?"fa-heart":"fa-heart-o"],on:{click:t.like}}),a("span",{staticClass:"post-header__likes"},[t._v(t._s(t.getPost.likes)+" подобається")])])])]),a("nav",{staticClass:"breadcrumbs"},[a("ul",{staticClass:"breadcrumbs-list"},[a("li",{staticClass:"breadcrumbs-list__item"},[a("router-link",{staticClass:"breadcrumbs-list__link",attrs:{to:"/"}},[t._v("Головна")]),a("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})],1),a("li",{staticClass:"breadcrumbs-list__item"},[a("router-link",{staticClass:"breadcrumbs-list__link",attrs:{to:"/category/"+t.getPost.category}},[t._v(t._s(t.getPost.category))]),a("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})],1),t._m(0)])]),a("div",{staticClass:"post"},[a("div",{staticClass:"post__author"},[a("span",{staticClass:"post__author-name"},[t._v("Автор: "+t._s(t.getPost.username))])]),a("img",{staticClass:"post__image",attrs:{src:t.getPost.postImage,alt:t.getPost.caption},on:{dblclick:t.like}})])])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"breadcrumbs-list__item"},[a("span",{staticClass:"breadcrumbs-list__link breadcrumbs-list__link--current"},[t._v("Картинка")])])}],st={name:"PostPage",data:function(){return{posts:M["a"]}},computed:{getPost:function(){var t=this.$route.params.id,e=this.posts.filter(function(e){return e.id===t});return e[0]}},methods:{like:function(){this.getPost.hasBeenLiked?this.getPost.likes--:this.getPost.likes++,this.getPost.hasBeenLiked=!this.getPost.hasBeenLiked}}},it=st,nt=(a("2ab6"),Object(u["a"])(it,et,at,!1,null,"6abadef7",null)),rt=nt.exports;s["a"].use(L["a"]);var ot=new L["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:F,meta:{title:"Головна сторінка - PhotoLib"}},{path:"/about",name:"about",component:tt,meta:{title:"Про сайт - PhotoLib"}},{path:"/new-post",name:"new-post",component:function(){return a.e("about").then(a.bind(null,"1358"))},meta:{title:"Добавити фото"}},{path:"/category/:id",component:U,meta:{title:"Розділ категорії - PhotoLib"}},{path:"/post-page/:id",component:rt,meta:{title:"Перегляд фотографії - PhotoLib"}}]}),lt=a("2ef0"),ct=a.n(lt);s["a"].config.productionTip=!1,ot.beforeEach(function(t,e,a){var s=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.title}),i=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.metaTags});e.matched.slice().reverse().find(function(t){return t.meta&&t.meta.metaTags});if(s&&(document.title=s.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(function(t){return t.parentNode.removeChild(t)}),!i)return a();i.meta.metaTags.map(function(t){var e=document.createElement("meta");return Object.keys(t).forEach(function(a){e.setAttribute(a,t[a])}),e.setAttribute("data-vue-router-controlled",""),e}).forEach(function(t){return document.head.appendChild(t)}),a()}),new s["a"]({router:ot,_:ct.a,render:function(t){return t(w)}}).$mount("#app")},"66ae":function(t,e,a){},"725c":function(t,e,a){"use strict";e["a"]=[{id:"1",username:"socleansofreshh",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg",likes:36,category:"Пейзажі",hasBeenLiked:!1,caption:"When you're ready for summer '18 ☀️",filter:"perpetua"},{id:"2",username:"djirdehh",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",likes:20,category:"Пейзажі",hasBeenLiked:!1,caption:"Views from the six...",filter:"clarendon"},{id:"3",username:"puppers",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",likes:49,category:"Тварини",hasBeenLiked:!1,caption:"Current mood 🐶",filter:"lofi"},{id:"4",username:"puppers",postImage:"https://cameralabs.org/media/k2/items/cache/b19561bfe5acb7716f4100f417429700_L.jpg",likes:20,category:"Пейзажі",hasBeenLiked:!1,caption:"Потрясающая красота живописных пейзажей Китая"},{id:"5",username:"Philipp Göllne",postImage:"https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/06.10/1detian-falls-china.jpg",likes:10,category:"Пейзажі",hasBeenLiked:!1,caption:"Водопад Детиан (Detian), расположенный на китайско-вьетнамской границе. "},{id:"6",username:"Wu Sha",postImage:"https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/06.10/2sunset-over-great-wall-of-china.jpg",likes:10,category:"Пейзажі",hasBeenLiked:!1,caption:"Красивый закат над Великой китайской стеной"},{id:"7",username:"Валерий Щербина",postImage:"https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/06.10/4fields-of-china.jpg",likes:13,category:"Пейзажі",hasBeenLiked:!1,caption:"Тихая прибрежная деревня на юге Китая."},{id:"8",username:"Валерий Щербина",postImage:"https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/06.10/outside-ningde-fujian-china.jpg",likes:23,category:"Пейзажі",hasBeenLiked:!1,caption:"Фермер в провинции Фуцзянь."},{id:"9",username:"Хань Дун Цзя",postImage:"https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/06.10/6sunset-clamming-china.jpg",likes:23,category:"Пейзажі",hasBeenLiked:!1,caption:"Рыбаки на золотом закате."},{id:"10",username:"Марина Томич",postImage:"https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/06.10/7rice-worker-china.jpg",likes:33,category:"Пейзажі",hasBeenLiked:!1,caption:"Рабочий на рисовом поле."},{id:"11",username:"Христиан Ортис",postImage:"https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/06.10/8hidden-mountain-village-in-china.jpg",likes:33,category:"Пейзажі",hasBeenLiked:!1,caption:"Скрытая горная деревня на юге Китая."},{id:"12",username:"Цзя Ми",postImage:"https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/06.10/9red-beach-panjin-china.jpg",likes:21,category:"Пейзажі",hasBeenLiked:!1,caption:"Красный берег, Паньцзинь, Китай."},{id:"13",username:"AutoLike",postImage:"https://www.kolesa.ru/uploads/2019/03/DSC_0124_cr-980x0-c-default.jpg",likes:27,category:"Авто",hasBeenLiked:!1,caption:"Рождённый плавать: «Ягуар»"},{id:"14",username:"AutoLike",postImage:"https://www.kolesa.ru/uploads/2018/12/zaglavnaya-Tagaz-Aquila-1-935x600.jpg",likes:17,category:"Авто",hasBeenLiked:!1,caption:"Tagaz Aquila"},{id:"15",username:"AutoLike",postImage:"https://www.kolesa.ru/uploads/2018/08/Jaguar-XKR-glavnaya-935x600.jpg",likes:26,category:"Авто",hasBeenLiked:!1,caption:"Идет как аристократ, орет как хулиган"},{id:"16",username:"AutoLike",postImage:"https://www.kolesa.ru/uploads/2018/08/Jaguar-XKR-glavnaya-935x600.jpg",likes:35,category:"Авто",hasBeenLiked:!1,caption:"Идет как аристократ, орет как хулиган"},{id:"17",username:"AutoLike",postImage:"https://www.kolesa.ru/uploads/2018/06/GAZ-6-1870x1200.jpg",likes:35,category:"Авто",hasBeenLiked:!1,caption:"Почувствуй себя нэпманом: седан ГАЗ-6"},{id:"18",username:"AutoLike",postImage:"https://www.kolesa.ru/uploads/2018/05/Hyundai-Genesis-Coupe-glavnaya-1870x1200.jpg",likes:18,category:"Авто",hasBeenLiked:!1,caption:"Hyundai Genesis Coupe"},{id:"19",username:"AutoLike",postImage:"https://www.kolesa.ru/uploads/2018/02/main-4-935x600.jpg",likes:32,category:"Авто",hasBeenLiked:!1,caption:"ЛАЗ-42021"},{id:"20",username:"AnimalPlanet",postImage:"https://o-prirode.ru/wp-content/uploads/2019/03/slide9.jpg",likes:27,category:"Тварини",hasBeenLiked:!1,caption:"Тигр амурский"},{id:"21",username:"AutoLike",postImage:"https://www.kolesa.ru/uploads/2018/02/zaglaaavn-935x600.jpg",likes:36,category:"Авто",hasBeenLiked:!1,caption:"Tesla Model 3"},{id:"22",username:"AnimalPlanet",postImage:"https://o-prirode.ru/wp-content/uploads/2018/10/1600x1000-03.jpg",likes:25,category:"Тварини",hasBeenLiked:!1,caption:"Свинья Парнокопытное крупных размеров"},{id:"23",username:"AnimalPlanet",postImage:"https://fishki.net/picsw/042013/18/post/zhivotnie/zhivotnie-0004.jpg",likes:25,category:"Тварини",hasBeenLiked:!1,caption:"Писец"},{id:"24",username:"AnimalPlanet",postImage:"https://fishki.net/picsw/042013/18/post/zhivotnie/zhivotnie-0002.jpg",likes:25,category:"Тварини",hasBeenLiked:!1,caption:"Лев"},{id:"25",username:"AnimalPlanet",postImage:"https://fishki.net/picsw/042013/18/post/zhivotnie/zhivotnie-0015.jpg",likes:25,category:"Тварини",hasBeenLiked:!1,caption:"Китовая акула"},{id:"26",username:"AnimalPlanet",postImage:"https://fishki.net/picsw/042013/18/post/zhivotnie/zhivotnie-0018.jpg",likes:23,category:"Тварини",hasBeenLiked:!1,caption:"Котик на балконе"},{id:"27",username:"AnimalPlanet",postImage:"https://fishki.net/picsw/042013/18/post/zhivotnie/zhivotnie-0021.jpg",likes:21,category:"Тварини",hasBeenLiked:!1,caption:"Красная панда"},{id:"28",username:"AnimalPlanet",postImage:"https://fishki.net/picsw/042013/18/post/zhivotnie/zhivotnie-0022.jpg",likes:30,category:"Тварини",hasBeenLiked:!1,caption:"Черепаха в море"},{id:"29",username:"AnimalPlanet",postImage:"https://fishki.net/picsw/042013/18/post/zhivotnie/zhivotnie-0025.jpg",likes:34,category:"Тварини",hasBeenLiked:!1,caption:"Медуза"},{id:"30",username:"AnimalPlanet",postImage:"https://fishki.net/picsw/042013/18/post/zhivotnie/zhivotnie-0027.jpg",likes:34,category:"Тварини",hasBeenLiked:!1,caption:"Косуля"},{id:"31",username:"AnimalPlanet",postImage:"https://fishki.net/picsw/042013/18/post/zhivotnie/zhivotnie-0028.jpg",likes:26,category:"Тварини",hasBeenLiked:!1,caption:"Морской ската на мелководии"},{id:"32",username:"AnimalPlanet",postImage:"https://fishki.net/picsw/042013/18/post/zhivotnie/zhivotnie-0033.jpg",likes:26,category:"Тварини",hasBeenLiked:!1,caption:"Олень посреди леса"}]},"8c6b":function(t,e,a){"use strict";var s=a("3eb6"),i=a.n(s);i.a},9930:function(t,e,a){},b645:function(t,e,a){},ba95:function(t,e,a){"use strict";var s=a("457d"),i=a.n(s);i.a},d1e8:function(t,e,a){},dd88:function(t,e,a){}});
//# sourceMappingURL=app.51648d30.js.map