(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{469:function(e,t,n){var content=n(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("461ac184",content,!0,{sourceMap:!1})},475:function(e,t,n){"use strict";n(469)},476:function(e,t,n){var o=n(18)(!1);o.push([e.i,"#default-toc ul{list-style-type:none}#default-toc li{border-left:2px solid #e5e5e5}#default-toc li.router-link-active{border-left-color:currentColor}#default-toc .v-toc-link{color:inherit}#default-toc.theme--dark li:not(.router-link-active){border-left-color:hsla(0,0%,100%,.5)}",""]),e.exports=o},481:function(e,t,n){var content=n(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("4f89acd8",content,!0,{sourceMap:!1})},482:function(e,t,n){"use strict";n.r(t);var o=n(471),d=n.n(o),r={name:"PdfView",props:{url:{type:String,required:!0}},mounted:function(){d.a.embed(this.url,"#pdf-page",{pdfOpenParams:{navpanes:1,toolbar:1,statusbar:1,pagemode:"none",view:"FitH"},PDFJS_URL:"/pdfjs/viewer.html"})}},l=n(35),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("article",{staticClass:"fill-height"},[t("div",{staticClass:"fill-height",attrs:{id:"pdf-page"}})])}],!1,null,null,null);t.default=component.exports},483:function(e,t,n){"use strict";n.r(t);var o=n(53),d=(n(22),n(6),n(52));function r(path,e){var t=e[path];return null===t.parent?[]:[].concat(Object(o.a)(r(t.parent,e)),[t])}var l={name:"BreadCrumbs",computed:{pages:Object(d.b)("pages/pages"),breadcrumbs:function(){var e=r("/".concat(this.$i18n.locale,"/").concat(this.$route.params.pathMatch),this.pages),t=[{text:this.$t("home"),disabled:!1,href:this.localePath("/")}];return e.forEach((function(e){t.push({text:e.title,href:e.stub?"#":e.path+"/",disabled:!0===e.stub})})),t}}},c=n(35),m=n(42),y=n.n(m),f=n(510),w=n(474),x=n(204),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-breadcrumbs",{staticClass:"px-0 pt-0",attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[n("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0},{key:"item",fn:function(t){var o=t.item;return[n("v-breadcrumbs-item",{attrs:{to:o.href,exact:"",disabled:o.disabled,nuxt:""}},[e._v("\n      "+e._s(o.text)+"\n    ")])]}}])})}),[],!1,null,null,null);t.default=component.exports;y()(component,{VBreadcrumbs:f.a,VBreadcrumbsItem:w.a,VIcon:x.a})},484:function(e,t,n){"use strict";n.r(t);n(5),n(4),n(7),n(10),n(6),n(11),n(17),n(27),n(44),n(32),n(41),n(55),n(36);var o=n(14),d=n(2),r=(n(54),n(29),n(61),n(33),n(170),n(56),n(52));function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,r=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){l=!0,d=e},f:function(){try{r||null==n.return||n.return()}finally{if(l)throw d}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"TableOfContent",props:{toc:{type:Array,default:function(){return[]}}},data:function(){return{offsets:[],timeout:null,drawer:null}},computed:y(y({},Object(r.b)("route",["hash","path"])),{},{scrolling:Object(r.d)("ui/scrolling")}),methods:{onClick:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e="#"+e,t.hash!==e){n.next=3;break}return n.abrupt("return");case 3:return t.scrolling=!0,t.$router.replace({path:t.path,hash:e}),n.next=7,t.$vuetify.goTo(e);case 7:t.scrolling=!1;case 8:case"end":return n.stop()}}),n)})))()},setOffsets:function(){var e,t=[],n=l(this.toc.slice().reverse());try{for(n.s();!(e=n.n()).done;){var o=e.value,section=document.getElementById(o.id);section&&t.push(section.offsetTop-40)}}catch(e){n.e(e)}finally{n.f()}this.offsets=t},findActiveIndex:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,d,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.toc,0!==(o=window.pageYOffset||document.documentElement.offsetTop||0)){t.next=5;break}return e.hash&&e.$router.replace({path:e.path}),t.abrupt("return");case 5:if(e.offsets.length!==n.length&&e.setOffsets(),d=e.offsets.findIndex((function(e){return e<o})),r=d>-1?e.offsets.length-1-d:0,o+window.innerHeight===document.documentElement.offsetHeight&&(r=e.toc.length-1),(l="#"+e.toc[r].id)!==e.hash){t.next=12;break}return t.abrupt("return");case 12:return e.scrolling=!0,t.next=15,e.$router.replace({path:e.path,hash:l});case 15:e.scrolling=!1;case 16:case"end":return t.stop()}}),t)})))()},onScroll:function(){clearTimeout(this.timeout),!this.scrolling&&this.toc.length&&(this.timeout=setTimeout(this.findActiveIndex,17))}}},w=(n(475),n(35)),x=n(42),h=n.n(x),z=n(220),k=n(204),v=n(466),S=n(477),M=n.n(S),A=n(236),component=Object(w.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-navigation-drawer",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}],staticClass:"py-4 pr-4 pl-3",attrs:{id:"default-toc",app:"",clipped:"",right:"",floating:"",width:"250",color:e.$vuetify.breakpoint.mobile?void 0:"rgb(0, 0, 0, 0)"},scopedSlots:e._u([e.toc.length?{key:"prepend",fn:function(){return[n("div",{staticClass:"mb-2 text-h6 font-weight-medium text--primary"},[e._v(e._s(e.$t("tos"))+"\n      ")])]},proxy:!0}:null],null,!0),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[e._v(" "),n("ul",{staticClass:"mb-6"},e._l(e.toc,(function(t){var o=t.id,d=t.depth,text=t.text;return n("router-link",{key:text,attrs:{to:"#"+o,exact:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.href,l=t.isActive;return[n("li",{staticClass:"pl-3 text-body-2 py-1 font-weight-regular",class:{"primary--text router-link-active":l,"text--disabled":!l,"pl-6":3===d,"pl-9":4===d,"pl-12":5===d}},[n("a",{staticClass:"v-toc-link d-block transition-swing text-decoration-none",attrs:{href:r},domProps:{textContent:e._s(text)},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.onClick(o)}}})])]}}],null,!0)})})),1)]),e._v(" "),e.toc.length>0?n("v-btn",{staticClass:"hidden-lg-and-up",attrs:{color:"accent",elevation:"6",fab:"",bottom:"",right:"",rounded:"",fixed:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[n("v-icon",[e._v("mdi-table-of-contents")])],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:z.a,VIcon:k.a,VNavigationDrawer:v.a}),M()(component,{Scroll:A.b})},490:function(e,t,n){"use strict";n(481)},491:function(e,t,n){var o=n(18)(!1);o.push([e.i,'.article{max-width:1200px;margin-left:auto;margin-right:auto}.article p{margin:.5rem 0}.article blockquote{border-left:5px solid #eee;padding:8px 0 8px 24px!important}.article hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.article .heading-link{content:"#"}',""]),e.exports=o},520:function(e,t,n){"use strict";n.r(t);var o=n(14),d=(n(54),n(22),n(4),n(41),{"en/dormitories/index.md":"Wed Sep 22 02:22:38 2021 +0200","en/first-steps/index.md":"Tue Aug 10 16:03:54 2021 +0200","en/help/disability-support-service/index.md":"Wed Sep 22 13:18:23 2021 +0200","en/help/disciplinary-matters/index.md":"Wed Sep 22 13:23:37 2021 +0200","en/help/index.md":"Wed Sep 22 02:35:39 2021 +0200","en/help/safety-and-equal-treatment/index.md":"Wed Sep 22 03:10:40 2021 +0200","en/help/sowa/index.md":"Wed Sep 22 13:19:49 2021 +0200","en/mobility/index.md":"Wed Sep 22 02:33:51 2021 +0200","en/student-activities/index.md":"Wed Sep 22 02:30:25 2021 +0200","en/student-activities/science-societies/index.md":"Wed Sep 22 02:32:19 2021 +0200","en/student-activities/sport/index.md":"Wed Sep 22 02:32:52 2021 +0200","en/students-self-government/index.md":"Wed Sep 22 23:04:05 2021 +0200","modificationDates.js":"Sat Aug 28 19:04:11 2021 +0200","pl/akademiki/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/dzialalnosc-studencka/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/dzialalnosc-studencka/kola-naukowe/dofinansowania/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/dzialalnosc-studencka/kola-naukowe/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/dzialalnosc-studencka/kola-naukowe/lista-kol-naukowych/index.md":"Tue Aug 10 20:34:41 2021 +0200","pl/dzialalnosc-studencka/kola-naukowe/rada-kol-naukowych/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/dzialalnosc-studencka/sport/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/manual/index.md":"Thu Sep 16 01:36:00 2021 +0200","pl/mobilnosc/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/mobilnosc/jezyki/index.md":"Thu Sep 16 22:18:31 2021 +0200","pl/mobilnosc/jezyki/jcj/index.md":"Thu Sep 16 22:19:39 2021 +0200","pl/mobilnosc/jezyki/skj/index.md":"Thu Sep 16 22:20:49 2021 +0200","pl/mobilnosc/kontakty/esn/index.md":"Thu Sep 16 22:21:57 2021 +0200","pl/mobilnosc/kontakty/index.md":"Thu Sep 16 22:21:16 2021 +0200","pl/mobilnosc/una-europa/index.md":"Thu Sep 16 20:56:05 2021 +0200","pl/mobilnosc/wydarzenia-wprowadzajace/index.md":"Thu Sep 16 20:36:24 2021 +0200","pl/mobilnosc/wydarzenia-wprowadzajace/intro-days/index.md":"Thu Sep 16 20:52:57 2021 +0200","pl/mobilnosc/wydarzenia-wprowadzajace/orientation-week/index.md":"Thu Sep 16 20:44:42 2021 +0200","pl/mobilnosc/wymiany-collegium-medicum/erasmus/index.md":"Thu Sep 16 22:08:41 2021 +0200","pl/mobilnosc/wymiany-collegium-medicum/index.md":"Thu Sep 16 22:12:28 2021 +0200","pl/mobilnosc/wymiany/bilateralne/index.md":"Thu Sep 16 22:16:48 2021 +0200","pl/mobilnosc/wymiany/erasmus/index.md":"Thu Sep 16 22:10:31 2021 +0200","pl/mobilnosc/wymiany/index.md":"Thu Sep 16 21:21:46 2021 +0200","pl/mobilnosc/wymiany/most/index.md":"Thu Sep 16 22:13:44 2021 +0200","pl/mobilnosc/wymiany/sylff/index.md":"Thu Sep 16 22:17:55 2021 +0200","pl/pierwsze-kroki/index.md":"Thu Sep 16 01:36:00 2021 +0200","pl/pomoc/bezpieczenstwo-i-rowne-traktowanie/index.md":"Wed Sep 15 13:27:55 2021 +0200","pl/pomoc/don/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/pomoc/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/pomoc/sowa/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/pomoc/sprawy-dyscyplinarne/index.md":"Wed Sep 8 22:42:40 2021 +0200","pl/samorzad-studentow/collegium-medicum/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/dolacz-do-nas/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/o-nas/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-uczelniane/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/mish/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wbbib/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wbiol/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wchem/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wfais/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wfarm/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wfilol/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wfiloz/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wgig/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wh/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wl/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wmii/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wnoz/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wpia/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wpol/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wsmip/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/samorzad-studentow/organy-wydzialowe/wziks/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/studia/dydaktyka/ects/index.md":"Mon Sep 20 20:28:04 2021 +0200","pl/studia/dydaktyka/egzamin/index.md":"Mon Sep 20 20:15:33 2021 +0200","pl/studia/dydaktyka/elearning/index.md":"Mon Sep 20 20:06:27 2021 +0200","pl/studia/dydaktyka/index.md":"Mon Sep 20 19:44:18 2021 +0200","pl/studia/dydaktyka/indywidualna_organizacja/index.md":"Mon Sep 20 19:58:32 2021 +0200","pl/studia/dydaktyka/legitymacja/index.md":"Mon Sep 20 19:52:51 2021 +0200","pl/studia/dydaktyka/odpowiedzialnosc_dyscyplinarna/index.md":"Mon Sep 20 20:32:10 2021 +0200","pl/studia/dydaktyka/organizacja_roku/index.md":"Mon Sep 20 19:52:19 2021 +0200","pl/studia/dydaktyka/powtarzanie_roku/index.md":"Mon Sep 20 20:37:50 2021 +0200","pl/studia/dydaktyka/prawa_studenta/index.md":"Mon Sep 20 20:33:38 2021 +0200","pl/studia/dydaktyka/program_studiow/index.md":"Mon Sep 20 19:56:57 2021 +0200","pl/studia/dydaktyka/rejestracja/index.md":"Mon Sep 20 20:06:16 2021 +0200","pl/studia/dydaktyka/rozliczenie_roku/index.md":"Mon Sep 20 20:16:13 2021 +0200","pl/studia/dydaktyka/skreslenie/index.md":"Mon Sep 20 20:29:05 2021 +0200","pl/studia/dydaktyka/srednia_ocen/index.md":"Mon Sep 20 20:34:56 2021 +0200","pl/studia/dydaktyka/sylabus/index.md":"Mon Sep 20 19:57:23 2021 +0200","pl/studia/dydaktyka/trzeci_termin/index.md":"Mon Sep 20 20:36:55 2021 +0200","pl/studia/dydaktyka/ukonczenie_studiow/index.md":"Mon Sep 20 20:43:32 2021 +0200","pl/studia/dydaktyka/urlopy/index.md":"Mon Sep 20 20:27:36 2021 +0200","pl/studia/dydaktyka/usosweb/index.md":"Mon Sep 20 19:54:12 2021 +0200","pl/studia/dydaktyka/wifi/index.md":"Mon Sep 20 19:56:07 2021 +0200","pl/studia/dydaktyka/wnioski/index.md":"Mon Sep 20 20:36:11 2021 +0200","pl/studia/dydaktyka/wznowienie/index.md":"Mon Sep 20 20:29:47 2021 +0200","pl/studia/dydaktyka/zwolnienie_z_oplat/index.md":"Mon Sep 20 20:35:45 2021 +0200","pl/studia/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/stypendia/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/uczelnia/biblioteka/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/uczelnia/historia/index.md":"Sat Aug 28 01:58:04 2021 +0200","pl/uczelnia/index.md":"Mon Aug 9 18:56:08 2021 +0200","pl/uczelnia/kodeks-etyki-studenta/index.md":"Sat Aug 28 01:58:04 2021 +0200","pl/uczelnia/kodeks-wartosci/index.md":"Sat Aug 28 01:58:04 2021 +0200","pl/uczelnia/statut/index.md":"Sat Aug 28 01:58:04 2021 +0200","pl/uczelnia/wladze/index.md":"Wed Aug 25 17:20:15 2021 +0200","pl/uczelnia/wladze/kolegium-rektorskie/index.md":"Fri Aug 27 16:48:05 2021 +0200","pl/uczelnia/wladze/rada-uczelni/index.md":"Sat Aug 28 01:58:04 2021 +0200","pl/uczelnia/wladze/rektor/index.md":"Fri Aug 27 16:48:05 2021 +0200","pl/uczelnia/wladze/senat/index.md":"Sat Aug 28 01:58:04 2021 +0200","pl/uczelnia/wydzialy/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/mish/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wbbib/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wbiol/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wchem/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wfais/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wfarm/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wfilol/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wfiloz/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wgig/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wh/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wl/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wmii/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wnoz/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wpia/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wpol/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wsmip/index.md":"Thu Sep 16 18:00:57 2021 +0200","pl/uczelnia/wydzialy/wziks/index.md":"Thu Sep 16 18:00:57 2021 +0200"}),r={name:"ContentView",asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,l,path,c,m,article,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,o=e.app,r=e.params,l=e.error,path="".concat(o.i18n.locale,"/").concat(r.pathMatch,"/index"),c="".concat(o.i18n.locale,"/").concat(r.pathMatch,"/index.md"),m="".concat(r.pathMatch,"/index"),t.prev=4,t.next=7,n(path).where({stub:{$ne:!0}}).fetch();case 7:if(article=t.sent){t.next=10;break}return t.abrupt("return",l({statusCode:404,message:"Article not found"}));case 10:return y=void 0!==d[c]?d[c]:article.updatedAt,t.abrupt("return",{article:article,modificationDate:y,pathInCollection:m});case 14:return t.prev=14,t.t0=t.catch(4),t.abrupt("return",l({statusCode:404,message:"Article not found"}));case 17:case"end":return t.stop()}}),t,null,[[4,14]])})))()},data:function(){return{}},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description}]}},computed:{editLink:function(){return"/edit/#/collections/pages_".concat(this.$i18n.locale,"/entries/").concat(this.pathInCollection)}}},l=(n(490),n(35)),c=n(42),m=n.n(c),y=n(220),f=n(514),w=n(515),x=n(204),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.article.pdf?n("PdfView",{attrs:{url:e.article.pdf}}):n("div",{staticClass:"fill-height d-flex flex-wrap flex-column justify-space-between"},[n("div",{staticClass:"article pa-4 pa-sm-6 pa-md-8",staticStyle:{width:"100%"}},[n("bread-crumbs"),e._v(" "),n("article",[n("h1",{staticClass:"text-h2 mb-5"},[e._v(e._s(e.article.title))]),e._v(" "),n("nuxt-content",{attrs:{document:e.article}}),e._v(" "),n("table-of-content",{attrs:{toc:e.article.toc}}),e._v(" "),n("div",{staticClass:"d-flex flex-column flex-md-row justify-space-between mt-3"},[n("div",{staticClass:"text-caption align-self-center mt-2"},[e._v("\n          "+e._s(e.$t("pageLastUpdated"))+": "+e._s(new Date(e.modificationDate).toISOString().split("T")[0])+"\n        ")]),e._v(" "),n("v-btn",{staticClass:"mt-2",attrs:{outlined:"",color:"primary",href:e.editLink,small:""}},[n("v-icon",{attrs:{left:""}},[e._v("\n            mdi-pencil\n          ")]),e._v("\n          "+e._s(e.$t("proposeChanges"))+"\n        ")],1)],1)],1)],1),e._v(" "),n("v-footer",{staticClass:"mb-2",attrs:{padless:"",color:"rgba(0, 0, 0, 0)"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v("\n      "+e._s((new Date).getFullYear())+" — "),n("strong",[n("a",{staticClass:"text-decoration-none",attrs:{href:"https://samorzad.uj.edu.pl/"}},[e._v("\n      "+e._s(e.$t("ssuj")))])])])],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{PdfView:n(482).default,BreadCrumbs:n(483).default,TableOfContent:n(484).default}),m()(component,{VBtn:y.a,VCol:f.a,VFooter:w.a,VIcon:x.a})}}]);