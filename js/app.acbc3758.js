(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],p=0,v=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&v.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/colette/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"0742":function(t,e,s){t.exports=s.p+"img/cosmos.2380f3e9.jpg"},2419:function(t,e,s){},"362f":function(t,e,s){"use strict";s("3fc6")},"38e4":function(t,e,s){},"39fe":function(t,e,s){},"3fc6":function(t,e,s){},"45d9":function(t,e,s){"use strict";s("8509")},"46ff":function(t,e,s){"use strict";s("8bb2")},"4b7e":function(t,e,s){},6108:function(t,e,s){"use strict";s("39fe")},7474:function(t,e,s){"use strict";s("4b7e")},"7c6f":function(t,e,s){},8509:function(t,e,s){},"8bb2":function(t,e,s){},"8bbb":function(t,e,s){"use strict";s("38e4")},"8f93":function(t,e,s){"use strict";s("a0a7")},9611:function(t,e,s){"use strict";s("b913")},a0a7:function(t,e,s){},a16c:function(t,e,s){t.exports=s.p+"img/header.81148130.png"},b732:function(t,e,s){"use strict";s("7c6f")},b913:function(t,e,s){},bb6e:function(t,e,s){var n={"./cosmos.jpg":"0742","./header.png":"a16c","./insta.png":"e007"};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id="bb6e"},bf7d:function(t,e,s){"use strict";s("2419")},cd49:function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("NavBar"),s("Hello"),s("Defisca"),s("HowTo"),s("Caroussel"),s("Simulateur"),s("Contact")],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("div",{staticClass:"textContent"},[s("p",{attrs:{id:"welcome"}})]),s("p",{staticClass:"hello"},[t._v(" Bienvenue chez Mousch,"),s("br"),t._v(" la nouvelle galerie d’art"),s("br"),t._v(" dédiée aux professionnels. ")])])},o=[],c=(s("4160"),s("d81d"),s("d3b7"),s("159b"),s("2909")),l=n["a"].extend({name:"HelloWorld",data:function(){return{}},created:function(){var t="Inspirer, décorer, défiscaliser.",e=function(t,e){return Object(c["a"])(t).map((function(s,n){return new Promise((function(s){setTimeout((function(){console.log(t),s(t.substring(0,n+1))}),e*n)}))}))};e(t,140).forEach((function(t){t.then((function(t){console.log(t),document.querySelector("p").innerHTML=t}))}))}}),u=l,p=(s("9611"),s("2877")),v=s("6544"),d=s.n(v),f=s("a523"),m=Object(p["a"])(u,r,o,!1,null,"46937925",null),_=m.exports;d()(m,{VContainer:f["a"]});var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myMain mt-2"},[s("div",{staticClass:"row-full"},[s("img",{staticClass:"myImage",attrs:{src:t.getImage("header.png")}})])])},b=[],g=n["a"].extend({data:function(){return{}},methods:{getImage:function(t){return s("bb6e")("./"+t)}}}),h=g,x=(s("6108"),Object(p["a"])(h,C,b,!1,null,"20120124",null)),y=x.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myMain"},[s("div",{staticClass:"textCont"},[s("div",{staticClass:"topComp"},[s("p",{staticClass:"pt-4 pl-4 pr-4 firstText"},[t._v(" Exposez une oeuvre d’art "),s("br"),t._v("dans vos locaux et défiscalisez. ")])]),s("div",{staticClass:"cardContainer"},[s("div",{staticClass:"card1 pb-4 pr-2 pl-2"},[s("p",{staticClass:"myTitle"},[t._v("Sublimez votre image")]),s("p",{staticClass:"cardText"},[t._v(" Une entreprise qui acquiert de l’art est une entreprise cultivée. En plus d’afficher son soutien aux artistes, votre société bénificiera de tous les avantages que procure l’art : inspiration, communication, événements, esthétique, valeurs... ")])]),s("div",{staticClass:"card2 pb-4 pr-2 pl-2"},[s("p",{staticClass:"myTitle"},[t._v("Brillez, inspirez.")]),s("p",{staticClass:"cardText"},[t._v(" Offrez à vos collaborateurs, clients ou patients une attention remarquable avec de l’art. Personnalisez vos locaux en les rendant uniques (inspirants, relaxants, ou raffinés...), et faites forte impression. ")])]),s("div",{staticClass:"card3 pb-4 pr-2 pl-2"},[s("p",{staticClass:"myTitle"},[t._v("Payez moins d’impôts.")]),s("p",{staticClass:"cardText"},[t._v(" En cas d’achat, vous pouvez défiscaliser jusqu’à 100% de la valeur de l’oeuvre pendant 5 ans. Si vous optez pour le leasing, déduisez les loyers de votre résultat : acquérir de l’art, c’est réduire vos impôts. ")])])])])])}],E=n["a"].extend({name:"Defisca",data:function(){return{}},methods:{getImage:function(t){return s("bb6e")("./"+t)}}}),j=E,w=(s("362f"),Object(p["a"])(j,T,O,!1,null,"474e43ce",null)),z=w.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myMain"},[s("div",{staticClass:"textCont"},[s("div",{staticClass:"topComp"},[s("p",{staticClass:"pt-4 ml-2 mr-2 firstText"},[t._v("Comment ça marche ?")])]),s("div",{staticClass:"cardContainer"},[s("div",{staticClass:"card1 pb-4 pr-2 pl-2"},[s("p",{staticClass:"myTitle"},[t._v("1.Choisissez")]),s("p",{staticClass:"cardText"},[t._v(" Sélectionnez le style ou l’artiste qui vous convient le mieux dans notre catalogue."),s("br"),t._v(" Un doute, une question ? Contactez notre service client qui vous accompagnera pour éclairer toutes vos lanternes, avec (beaucoup) d’amour. ")])]),s("div",{staticClass:"card2 pb-4 pr-2 pl-2"},[s("p",{staticClass:"myTitle"},[t._v("2. Financez")]),s("p",{staticClass:"cardText"},[t._v(" Achat ou leasing ? En fonction de votre somme de départ, de vos désirs et de votre statut juridique, une solution sera plus avantageuse que l’autre. Essayez notre simulateur pour en avoir le coeur net. ")])]),s("div",{staticClass:"card3 pb-4 pr-2 pl-2"},[s("p",{staticClass:"myTitle"},[t._v("3. Défiscalisez")]),s("p",{staticClass:"cardText"},[t._v(" Nous faisons livrer et installer l’oeuvre directement dans vos locaux, sous vos yeux ébahis. Si besoin, nous vous soufflerons quelques suggestions pour vous aider à comprendre la défiscalisation (c’est bien plus simple qu’on ne le pense, promis). ")])])])])])}],$=n["a"].extend({name:"Defisca",data:function(){return{}},methods:{getImage:function(t){return s("bb6e")("./"+t)}}}),M=$,I=(s("8bbb"),Object(p["a"])(M,q,S,!1,null,"98f353f2",null)),A=I.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myMain"},[s("div",{staticClass:"textCont"},[t._m(0),s("div",{staticClass:"carCont"},[s("vueper-slides",{attrs:{"visible-slides":3,bullets:!1,"slide-multiple":"",infinite:!1,gap:3,"slide-ratio":1/4,"dragging-distance":200,breakpoints:{800:{visibleSlides:2,slideMultiple:2}}}},t._l(t.slides,(function(t){return s("vueper-slide",{key:t.name,attrs:{title:t.title,image:t.content}})})),1)],1),t._m(1)]),t._m(2)])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topComp"},[s("p",{staticClass:"pt-4 ml-2 mr-2 firstText"},[t._v(" Découvrez notre sélection léchée "),s("br"),t._v(" d’artistes talentueux. ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btnCont"},[s("div",{staticClass:"myBtn"},[s("span",[t._v("C")]),s("span",[t._v("H")]),s("span",[t._v("O")]),s("span",[t._v("I")]),s("span",[t._v("S")]),s("span",[t._v("I")]),s("span",[t._v("R")]),s("br"),s("span",[t._v(" M")]),s("span",[t._v("O")]),s("span",[t._v("N")]),s("span",[t._v(" A")]),s("span",[t._v("R")]),s("span",[t._v("T")]),s("span",[t._v("I")]),s("span",[t._v("S")]),s("span",[t._v("T")]),s("span",[t._v("E")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blackTransition"},[s("p",{staticClass:"pt-12"},[t._v(" « Gagner de l’argent est un art, travailler est un art, et faire de bonnes affaires est le plus bel art qui soit. » "),s("br"),s("span",{staticClass:"ml-8"},[t._v("Andy WARLOL")])])])}],L=s("b1b5"),B=(s("2ec8"),n["a"].extend({name:"Carousel",components:{VueperSlides:L["VueperSlides"],VueperSlide:L["VueperSlide"]},data:function(){return{slides:[{content:"https://i.imgur.com/LGjrKAv.png"},{content:"https://i.imgur.com/ACb7OCH.png"},{content:"https://i.imgur.com/2wnyvGd.png"},{content:"https://i.imgur.com/LGjrKAv.png"},{content:"https://i.imgur.com/2wnyvGd.png"},{content:"https://i.imgur.com/ACb7OCH.png"}]}},created:function(){}})),D=B,N=(s("8f93"),s("7474"),Object(p["a"])(D,H,P,!1,null,"7c1e8c0c",null)),k=N.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myMain"},[s("div",{staticClass:"textCont"},[s("div",{staticClass:"topComp"},[s("p",{staticClass:"pt-4 ml-2 mr-2 firstText"},[t._v("Trouvez le meilleur financement")]),s("p",{staticClass:"mt-8 mr-4 ml-4 secondText"},[t._v(" Découvrez la solution idéale pour faire rentrer l’art dans votre entreprise grâce à notre - fantastique - simulateur : ")]),s("p",{staticClass:"mt-8 mr-4 ml-4 s secondText"},[t._v(" Presque comme un devis émis en moins de deux minutes, il vous évite un suspense inutiles. Grâce à lui, vous saurez combien vous pourrez investir et comment défiscaliser de la meilleure façon. Fantastique, donc. ")])]),s("div",{staticClass:"carCont"},[s("div",{staticClass:"myBtn"},[s("span",[t._v("J")]),s("span",[t._v("E")]),s("span",[t._v(" T")]),s("span",[t._v("E")]),s("span",[t._v("S")]),s("span",[t._v("T")]),s("span",[t._v(" L")]),s("span",[t._v("E")]),s("span",[t._v(" S")]),s("span",[t._v("I")]),s("span",[t._v("M")]),s("span",[t._v("U")]),s("span",[t._v("L")]),s("span",[t._v("A")]),s("span",[t._v("T")]),s("span",[t._v("E")]),s("span",[t._v("U")]),s("span",[t._v("R")])])])])])}],G=n["a"].extend({name:"Carousel",components:{},data:function(){return{}},created:function(){}}),R=G,F=(s("45d9"),s("b732"),Object(p["a"])(R,U,V,!1,null,"a121eef2",null)),J=F.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myMain"},[t._m(0),s("div",{staticClass:"whiteTransition pt-12"},[s("div",{staticClass:"logoCont"},[s("img",{staticClass:"logo",attrs:{src:t.getImage("header.png")}})]),s("p",{staticClass:"pt-1 ml-2"},[t._v("Mousch")])]),s("div",{staticClass:"contactInfo"},[s("p",{staticClass:"mt-6"},[t._v("hello@mousch.com")]),t._m(1),s("div",{staticClass:"whiteTransition"},[s("div",{staticClass:"instaLogo"},[s("img",{staticClass:"logo",attrs:{src:t.getImage("insta.png")}})])])])])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"textCont"},[s("div",{staticClass:"topComp"},[s("p",{staticClass:"pt-4 ml-2 mr-2 firstText"},[t._v(" Une question ? Besoin d’un conseil ? ")]),s("p",{staticClass:"mt-8 mr-4 ml-4 secondText"},[t._v(" Notre équipe se fera un plaisir d’échanger avec vous. Attention, vous pourriez vous attacher (nous vous aimons déjà). ")])]),s("div",{staticClass:"carCont"},[s("div",{staticClass:"myBtn"},[s("span",[t._v("C")]),s("span",[t._v("O")]),s("span",[t._v("N")]),s("span",[t._v("T")]),s("span",[t._v("A")]),s("span",[t._v("C")]),s("span",[t._v("T")]),s("span",[t._v("E")]),s("span",[t._v("Z")]),s("span",[t._v("-")]),s("span",[t._v("N")]),s("span",[t._v("O")]),s("span",[t._v("U")]),s("span",[t._v("S")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt-6"},[t._v(" 5 rue de Belfort "),s("br"),t._v(" 69004 Lyon ")])}],Z=n["a"].extend({name:"Carousel",components:{},data:function(){return{}},methods:{getImage:function(t){return s("bb6e")("./"+t)}}}),Q=Z,X=(s("46ff"),s("bf7d"),Object(p["a"])(Q,K,W,!1,null,"4b0a1ad2",null)),Y=X.exports,tt=n["a"].extend({name:"App",components:{Hello:_,NavBar:y,Defisca:z,HowTo:A,Caroussel:k,Simulateur:J,Contact:Y},data:function(){return{}}}),et=tt,st=s("7496"),nt=Object(p["a"])(et,a,i,!1,null,null,null),at=nt.exports;d()(nt,{VApp:st["a"]});var it=s("8c4f"),rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:s("cf05")}})])}],ct=n["a"].extend({name:"Home",components:{}}),lt=ct,ut=Object(p["a"])(lt,rt,ot,!1,null,null,null),pt=ut.exports;n["a"].use(it["a"]);var vt=[{path:"/",name:"Home",component:pt}],dt=new it["a"]({mode:"history",base:"/colette/",routes:vt}),ft=dt,mt=s("f309");n["a"].use(mt["a"]);var _t=new mt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:ft,vuetify:_t,render:function(t){return t(at)}}).$mount("#app")},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},e007:function(t,e,s){t.exports=s.p+"img/insta.c975b429.png"}});
//# sourceMappingURL=app.acbc3758.js.map