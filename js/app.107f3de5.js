(function(t){function a(a){for(var s,n,l=a[0],r=a[1],c=a[2],d=0,u=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);m&&m(a);while(u.length)u.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,n=1;n<e.length;n++){var r=e[n];0!==i[r]&&(s=!1)}s&&(o.splice(a--,1),t=l(l.s=e[0]))}return t}var s={},i={app:0},o=[];function n(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e3d24c91"}[t]+".js"}function l(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var a=[],e=i[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise((function(a,s){e=i[t]=[a,s]}));a.push(e[2]=s);var o,r=document.createElement("script");r.charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.src=n(t);var c=new Error;o=function(a){r.onerror=r.onload=null,clearTimeout(d);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",c.name="ChunkLoadError",c.type=s,c.request=o,e[1](c)}i[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:r})}),12e4);r.onerror=r.onload=o,document.head.appendChild(r)}return Promise.all(a)},l.m=t,l.c=s,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)l.d(e,s,function(a){return t[a]}.bind(null,s));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/",l.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var d=0;d<r.length;d++)a(r[d]);var m=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0662":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABmCAMAAAC5kC4yAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAilBMVEUAAAD7rkL7rkL7rkL7rkL7rkL7rkL7rkL7rkL7rkLisUn7rkL7rkL7rkL7rkL7rkL7rkLxr0Xtr0ZpSJ1pSJ1pSJ1pSJ1pSJ1pSJ1pSJ1pSJ1pSJ1pSJ1pSJ1pSJ1pSJ1pSJ1pSJ2ye3DosEeaan9+V5Dur0Xmn0/emlT7rkJpSJ3yr0XXlVn///+vPcMKAAAAKXRSTlMAEECAUDBwz++vYI/fYJ+/IO+vEJ/fv4AgzzDvYFBAr3CPQICPcL/f79GWLAEAAAABYktHRC3N2kE9AAAAB3RJTUUH5QoEDCElgQ6XpwAAAAFvck5UAc+id5oAAAc9SURBVHja7Ztpl6o4EIZdu3VsG+ayqigwu8z8/983Agr1Vqog3tZWz6G+GZbUk9QSKnE0GmSQQQYZZJBBBrmljCfTWmbzR6vyFYq392Mri+Uvj1boJzFWiyOTj9mjlfoJmRkYpSzHj9brWlkdZXl/MRKN49VI1kddPh+t3BUyXnSAHF/I4z+7OI4fj1bPWsbHbnmZfPLWA7J8tIK24oAhreej+WwJJK8SuKRoC3HsRdx9TlReNINPA8D00SrayYSovGpa3ddzkjfZiEhuceB+dzJdObWspjP30eq3MiUgk7aZhIBf29b56oOnmemzxAIK4oogx3PT+I1T1I719mgEE4Q0myBrdSXzHOsxS5D5+1GXpyBRQD6xmYaEk5c7DpI8wzJGAcHmFstZn29YU4dZPIHHW4CMl02MInFtTI1tfXW/jwBpxv4HDDxNpe82XXl+EEbxd4DM5WbNp+mU2NjWpigl8u4PMpGbtdhEP/UtVpZRUctm+1gQ03roGrl/ZentziDF7i4ktiAL13iUOsmP3o4uE1KS3MNRFBCjQiQMOQVx+vppJ6T0k+8DcfiECN58FUhSPAeI6APXgATPASKn7itA9pSjOHwfCFuxi8vC8RUgKeXY3YEDQMjaj1nWRHrUtQeJYUL8e4O04z5DDqXcaA8SAchd8gjU55o1CnORlfysPQi4enAPDoihx8WZhJeDlQWINQi6enYXEBdVXr5NZkaF4V/lWWsQH0DutAAWKwqM7ksg8QEnZHOo5OaL4M9+EK1OYgWCs3HHiZn1g0yUR21AIo2juPmU9NuW9qQFCKwV75xM1n0c6mhb3HPQODbChGyzPAzDKLnW6A7RSRJvJJSslrQap5atbGYkilJGEEZRHmaeeWebbDZJh9pJFNGMmjTv938zaogL2I/7/QsgI8vliRehDQZ77XVheTm8oOxpqt39wUhOedHG1y1B4EtEcfEDpP4CdBXfVn8ueyF76E+IweXJDYrmfg0ETCsVb5FDmy9BX1QvSbYm/ta9pPOPz2qZIlTjO0H+Um/yoCPJ+L20kGXnG7PS2mngbYWIGI7K01onuYy+vD+ig+hVFLAs6UvE27BgQPULWBksJzeKkZ2jOzZWYwUCwy24OnKkcVmRBDC4Oyh6hH9F/30zEBg3MxYhRyKoS61xb2ru78HHQnz94T+LNGIFAhlRsKxU0hmcn46xsXDb1Z//Koj/n81g24DktFvTskDlXBx4AuJxjsv6QAOJi5uBgOUYlgXzFcrNWXt7onDEGkh+MxBM6/yqB3m5jU8wTyQOsTgdXJ5IFJDTkvVWIDCGRjYEhcl0UXskX/jMstpiOHGdiPVuAzKxAAHv5NkQposOJbXHvG1mlpU1FwIFJLgdCARSvjz3lYsw8qplteRb0kqLmKWr2YDM+kFoFyy1sQmhAY2OvG5ZLSG1RDpYviXItB8koz3n7KI2ITDyxFQwGxJyOu3kNRW4DQjdQ1GW+mAMLPjCANM4ECuAWlGJTjv1tMwWxOkHARdhq/JEg6SxbKO9jEyILzfXIcMGhHAclb83dLkIDU2wdqGrMxLowN+oUyt7YfX9BEQp/MLZO+WbBTI0W59YuTqdRfA3Mip7ha+eqH/6V7+0/K2U60GnrOMatSxqQdR1UuVlSsyoC1E+dWTlMMDy2AvrK4Nl6KUNPE2hO1lhdB3+ni0NrfJBE6h+K36k9GHoRQzF0/QFF9ko7SHrO4AcIQ837MTL+w5d3yLgIiTD5Iq+6rZwJoPszy8GNaXY6kIJSbY+ZZFu9p/Jj0AKhcoPWbf4MmB4nlHYyJKmBPa0lMNBXSBgdY37ePhNvlfeRc00FEHiy4zCRpbgJbgZoew7HMQ+zAlpQdinbBsDkJAOCjyQ4IvKn6DoguU7fsLRvRYk3okgiEfdCgnpu8QX1RNSfaqx7dBpq6u75scirErxdBRZKevSP/+SbR/J8UJvvg9bFxP+jfFeHr+WTpuubUCIncSM46wY52hBGAdNSVvhRZeZrYJ33/9j+tP6iOWwJksnRomwKiJkhdF8nj+jpEqXn3AhpyNyXvdY7C12ROdasDhdv/gQFqYEWXJu3lHKauQTs7pI+4Cr1Wf8ZUTO2dRdWHKsVA4eTYMoiTZFt2zBrfMoF4qkcOIAzW6XN/tFTRLq+8/SxXO6zmWqO29FIhMlUlWUC6SkWLmJ7O1ZGVfPXy4TuZeTCUgKVwVQsU6dUj/B3BppPYyuIXH6zsmKJEHZSyo3i4Q+tLJFguR07ADotAfD5i8Xe3MbI61mnSeTc7MZbIvdHtVlIJ55JmHDK09zpwvD7k8wvJ9mnxN3AMn2JzOWeguO3G1ULDM2WNJRQ3cl/+HCWdn/Gy72244C+q3UZhRoHm0Jot8MbhMfIqEHMn++tk8/nqyb/1WdZDmdNjt0tuIlaVhKvuXtVbNvHHKMs+pCivvx27xqlDZJ4ywt6Td+cqcj64MMMsggg3yP/A95rcS1i9KsuwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0wNFQxMjozMjo1NSswMDowMNB+tjEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMDRUMTI6MzI6NTUrMDA6MDChIw6NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg=="},"0d87":function(t,a,e){t.exports=e.p+"img/science2.123ab875.jpg"},1979:function(t,a,e){t.exports=e.p+"img/team-5.9afdae64.jpg"},"1d75":function(t,a,e){t.exports=e.p+"img/Ergo.7131c568.png"},"1e9f":function(t,a,e){},"250c":function(t,a,e){t.exports=e.p+"img/team-1.8122f428.jpg"},"262e":function(t,a,e){t.exports=e.p+"img/icon.6bfd7068.png"},2837:function(t,a,e){},"2eef":function(t,a,e){t.exports=e.p+"img/team-2.c6544481.jpg"},"399e":function(t,a,e){t.exports=e.p+"img/ergo1.4fc2cb1f.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("a026"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view"),e("Footer")],1)},o=[],n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"fixed-top d-flex align-items-center",attrs:{id:"header"}},[s("div",{staticClass:"container d-flex justify-content-between"},[s("div",{staticClass:"logo"},[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("0662"),alt:""}})])]),s("nav",{staticClass:"navbar",attrs:{id:"navbar"}},[s("ul",[s("li",[s("a",{staticClass:"nav-link scrollto active",attrs:{href:"/#discover"}},[t._v("DISCOVER")])]),s("li",[s("a",{staticClass:"nav-link scrollto",attrs:{href:"/#team"}},[t._v("TEAM")])]),s("li",[s("a",{staticClass:"nav-link scrollto",attrs:{href:"/#contact"}},[t._v("CONTACT")])]),s("li",[s("a",{staticClass:"nav-link scrollto ",attrs:{href:"Play"}},[t._v("PLAY GAME")])])]),s("i",{staticClass:"bi bi-list mobile-nav-toggle"})])])])}],r=e("2877"),c={},d=Object(r["a"])(c,n,l,!1,null,null,null),m=d.exports,u=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid bg-light pt-5 pb-0 mb-0 justify-content-center text-color"},[s("footer",{attrs:{id:"contact-footer "}},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-3  col-md-6 col-sm-4 my-auto mx-auto a text-center"},[s("img",{attrs:{src:e("0662"),alt:"Tan90 logo"}})]),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-4 col-12 footer-tab-address footer-paddig-left"},[s("h6",{staticClass:"mb-2 mb-lg-2 text-muted bold-text mt-sm-0 mt-5"},[s("b",[t._v("ADDRESS")])]),s("p",{staticClass:"mb-1 pt-3"},[t._v("No. 259, 4th Cross, 1st Main Road,")]),s("p",{staticClass:"mb-1"},[t._v(" BSK 3rd Stage, 3rd Phase ")]),s("p",{staticClass:"mb-0"},[t._v("Bangalore, Karnataka - 560085")])]),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-4 footer-tab-mgn footer-paddig-left"},[s("h6",{staticClass:"mb-2 mb-lg-2  pb-3 text-muted bold-text mt-sm-0 mt-5"},[s("b",[t._v("CONTACT")])]),s("small",[s("span",[s("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})]),t._v("+91 70420 06389 ")]),s("br"),s("small",[s("span",[s("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})]),t._v(" hello@tan-ninety.com ")])]),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-4 footer-paddig-left"},[s("h6",{staticClass:"mb-2 pb-3 mb-lg-2 text-muted bold-text mt-sm-0 mt-5"},[s("b",[t._v("FOLLOW US")])]),s("div",{staticClass:"social-links "},[s("a",{staticClass:"linkedin",attrs:{href:"https://in.linkedin.com/in/medha-krishnan-a3044457"}},[s("i",{staticClass:"icofont-linkedin icon-size"})])])])])]),s("a",{staticClass:"back-to-top d-flex align-items-center justify-content-center",attrs:{href:"#"}},[s("i",{staticClass:"bi bi-arrow-up-short"})]),s("div",{attrs:{id:"preloader"}}),s("div",{staticClass:"row pt-3 pb-3"},[s("div",{staticClass:"col-lg-12 text-center"},[t._v(" © Copyright "),s("strong",[s("span",[t._v("Tan90")])]),t._v(". All Rights Reserved | "),s("a",{staticClass:"ft-600",attrs:{href:"Privacypolicy"}},[t._v(" Privacy Policy ")])])])])}],v={},p=Object(r["a"])(v,u,g,!1,null,null,null),f=p.exports,h={name:"App",components:{Header:m,Footer:f}},b=h,C=Object(r["a"])(b,i,o,!1,null,null,null),w=C.exports,A=(e("d3b7"),e("3ca3"),e("ddb0"),e("8c4f")),y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),e("Team"),e("Contact")],1)},k=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"clearfix",attrs:{id:"hero"}},[e("div",{staticClass:"container",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"hero-info",attrs:{"data-aos":"zoom-in","data-aos-delay":"100"}},[e("h2",[t._v("Helping high schoolers level up to their maximum potential")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{attrs:{id:"about"}},[s("div",{staticClass:"container",attrs:{"data-aos":"fade-up"}},[s("header",{staticClass:"section-header"},[s("p",[t._v("In today’s hyper-connected world, democratizing access to educational resources that help learners think rather than cram continues to remain a challenge.")]),s("p",[t._v("At Tan90, we are focused on building an affordable platform solution that will ensure no high school student is left behind, especially in mathematics.")])]),s("div",{staticClass:"row about-container"}),s("div",{staticClass:"row justify-content-center about-extra"},[s("div",{staticClass:"col-lg-2",attrs:{"data-aos":"fade-right"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("262e"),width:"80%",alt:""}})]),s("div",{staticClass:"col-lg-10 pt-5 pt-lg-0",attrs:{"data-aos":"fade-left"}},[s("h4",[t._v("VISION")]),s("p",[t._v(" Help high schoolers overcome their fear of Mathematics by providing them access to customized resources and building personalised learning journeys. ")])])]),s("div",{staticClass:"row justify-content-center about-extra"},[s("div",{staticClass:"col-lg-2 order-1 order-lg-2",attrs:{"data-aos":"fade-left"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("262e"),width:"80%",alt:""}})]),s("div",{staticClass:"col-lg-10 pt-4 pt-lg-0 order-2 order-lg-1",attrs:{"data-aos":"fade-right"}},[s("h4",[t._v("MISSION")]),s("p",[t._v(" Leverage technology to build an ecosystem of resources and services that help high schoolers become thinkers who rely on conceptual clarity rather than muscle memory for academic success. ")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:" text-white services section-bg section-product",attrs:{id:"discover"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-title1"},[s("p",{staticClass:"text-center text-white"},[t._v("Discover")])]),s("div",{staticClass:"mt-5 row justify-content-md-center"},[s("div",{staticClass:"col-lg-6 col-md-6 align-items-stretch",attrs:{"data-aos":"zoom-in","data-aos-delay":"200"}},[s("h3",{staticClass:"mt-5 vision-title"},[t._v("Mobile App")]),s("h5",{staticClass:"mt-4 ft-26"},[t._v(" Build a Solid Foundation and Ace your Exams")]),s("p",{staticClass:"mt-4 text-vision-mission text-justify ft-24"},[t._v(" We believe that the right way to learn is by doing not just watching. Our mobile app allows you to explore and watch different hands-on model making videos so that you can build and learn Math and Science concepts simultaneously. We don’t let you rote learn, instead, we show you how the world of Math and Science work! ")])]),s("div",{staticClass:"col-lg-6 col-md-6 align-items-center",attrs:{"data-aos":"zoom-in","data-aos-delay":"200"}},[s("img",{staticClass:"mx-auto d-block",attrs:{src:e("e8cc"),width:"100%"}}),s("div",{staticClass:"mx-auto mt-5"},[s("button",{staticClass:"btn-style1 mx-auto d-block "},[t._v("Download the App")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"services section-product",attrs:{id:"science-kit"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center mt-4"},[s("div",{staticClass:"col-lg-6 col-md-6 align-items-stretch",attrs:{"data-aos":"zoom-in","data-aos-delay":"200"}},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-md-9 mx-auto "},[s("a",{staticClass:"col-md-4",attrs:{href:"assets/img/discover/science2.jpg","data-toggle":"lightbox","data-gallery":"gallery"}},[s("img",{staticClass:"img-fluid rounded",attrs:{src:e("0d87"),width:"100%"}})])])]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-lg-6 col-md-6"},[s("a",{staticClass:"col-md-4",attrs:{href:"assets/img/discover/science1.jpg","data-toggle":"lightbox","data-gallery":"gallery"}},[s("img",{staticClass:"img-fluid rounded",attrs:{src:e("eeda")}})])]),s("div",{staticClass:"col-lg-6 col-md-6"},[s("a",{staticClass:"col-md-4",attrs:{href:"assets/img/discover/science3.jpg","data-toggle":"lightbox","data-gallery":"gallery"}},[s("img",{staticClass:"img-fluid rounded",attrs:{src:e("b9c7")}})])])])]),s("div",{staticClass:"col-lg-6 col-md-6 align-items-stretch ",attrs:{"data-aos":"zoom-in","data-aos-delay":"200"}},[s("h3",{staticClass:"vision-title float-left"},[t._v("Science KIT")]),s("h5",[t._v("Experience how concepts come to life with our Science Kits")]),s("p",{staticClass:"text-vision-mission"},[t._v(" Our motivation to learn is the highest only when they are allowed to tinker, experiment and bring to life the concepts in their textbooks! Introducing our unique range of Makers Studios and DIY Science kits for everyone age 8 and above. We design these experiments keeping in mind the NCERT curricula (Grades 6 to 10) ")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"text-white services section-bg section-product",attrs:{id:"ergo"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-lg-6 col-md-6 align-items-center",attrs:{"data-aos":"zoom-in","data-aos-delay":"200"}},[s("h3",{staticClass:"mt-5 vision-title"},[t._v("ERGO Project")]),s("h5",{staticClass:"mt-4"},[t._v(" Get hands on with mathematical concepts digitally")]),s("p",{staticClass:"text-vision-mission"},[t._v(" Doing mathematics doesn't have to be only about working out with pen and paper or making physical representative models. Ergo envisions mathematical concepts as digital interactive lessons which you can play with and learn from ")])]),s("div",{staticClass:"col-lg-6 col-md-6 align-items-stretch",attrs:{"data-aos":"zoom-in","data-aos-delay":"200"}},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-6 col-md-6 align-items-center"},[s("a",{staticClass:"col-md-4",attrs:{href:"assets/img/discover/ergo1.png","data-toggle":"lightbox","data-gallery":"gallery"}},[s("img",{staticClass:"img-fluid rounded",attrs:{src:e("399e")}})])]),s("div",{staticClass:"col-lg-6 col-md-6 align-items-center"},[s("a",{staticClass:"col-md-4",attrs:{href:"assets/img/discover/ergo2.png","data-toggle":"lightbox","data-gallery":"gallery"}},[s("img",{staticClass:"img-fluid rounded",attrs:{src:e("f49b")}})])])]),s("div",{staticClass:" mt-3 col-lg-9 col-md-10 align-items-center"},[s("a",{staticClass:"col-md-4",attrs:{href:"assets/img/discover/Ergo.png","data-toggle":"lightbox","data-gallery":"gallery"}},[s("img",{staticClass:"img-fluid rounded",attrs:{src:e("1d75"),width:"100%"}})])])])])])])])}],x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"contact bg-light section-contact",attrs:{id:"contact"}},[e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row justify-content-center",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[e("div",{staticClass:"col-lg-8"},[e("form",{staticClass:"validate-form needs-validation php-email-form contact-from",attrs:{role:"form",name:"contact-us-form",id:"contact-us-form",method:"POST",autocomplete:"off",validate:""},on:{submit:t.submit}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"Name",id:"Name","aria-describedby":"Name",placeholder:"Your Name",required:""},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),e("div",{staticClass:"invalid-feedback"},[t._v(" Please enter your name. ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control mt-4",attrs:{type:"text",name:"Email",id:"Email","aria-describedby":"email",placeholder:"Your Email",pattern:"[a-zA-Z0-9._]+@[a-z0-9.-]+\\.[a-zA-Z]{2,4}",required:""},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),e("div",{staticClass:"invalid-feedback"},[t._v(" Please enter a valid email address. ")])]),e("div",{staticClass:"col-lg-6 form-group"},[e("div",{staticClass:"form-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{id:"Message",rows:"4",name:"Message",required:""},domProps:{value:t.message},on:{input:function(a){a.target.composing||(t.message=a.target.value)}}}),e("div",{staticClass:"invalid-feedback"},[t._v(" Write us your message. ")])])])]),t._m(1)])])])])])},_=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section-title"},[e("p",{staticClass:"text-center"},[t._v("Contact Us")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-3 row justify-content-center"},[e("div",{staticClass:"col-lg-4 text-center"},[e("button",{staticClass:"btn-style",attrs:{type:"submit",id:"btn-send",value:"Send Message"}},[t._v("Send Message")])])])}],E=(e("b0c0"),e("bc3a")),S=e.n(E),M={name:"Contact",data:function(){return{name:"",email:"",message:""}},methods:{submit:function(){var t=this,a="https://script.google.com/macros/s/AKfycbwpzDN5ngA2BM-yN2Cx_NbAPGAgy2BNeTtnk8vxLWXqGr7qBWs/exec",e=new FormData;e.append("Name",this.name),e.append("Email",this.email),e.append("Message",this.message),S.a.post(a,e).then((function(a){return t.onReset(),alert("Thank you for submitting the form "),a})).catch((function(t){console.error(t)}))},onReset:function(){this.name="",this.email="",this.message=""}}},j=M,J=Object(r["a"])(j,x,_,!1,null,null,null),L=J.exports,O=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"team team-pb",attrs:{id:"team"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-title"},[s("p",{staticClass:"text-center"},[t._v("TEAM")])]),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"bg-white rounded team-image-padding"},[s("img",{staticClass:"img-fluid rounded-circle img-thumbnail",attrs:{src:e("c09c"),alt:"wrapkit"}}),s("div",{},[s("h5",{staticClass:"mt-2 font-weight-medium mb-0"},[t._v("Umesh SM")]),s("h6",{staticClass:"subtitle mb-1"},[t._v(" Content Designer")]),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://in.linkedin.com/in/dr-umesh-sm-623515a9",target:"_blank"}},[s("i",{staticClass:"icofont-linkedin icon-size"})])])])])])])]),s("div",{staticClass:"col-lg-4 text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"bg-white rounded team-image-padding"},[s("img",{staticClass:"img-fluid rounded-circle img-thumbnail",attrs:{src:e("e4c5"),alt:"wrapkit"}}),s("div",{},[s("h5",{staticClass:"mt-2 font-weight-medium mb-0"},[t._v("Scindhia Siddharthan")]),s("h6",{staticClass:"subtitle mb-1"},[t._v("Content Designer")]),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://in.linkedin.com/in/scindhia-siddharthan-168823b5",target:"_blank"}},[s("i",{staticClass:"icofont-linkedin icon-size"})])])])])])])]),s("div",{staticClass:"col-lg-4 text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"bg-white rounded team-image-padding"},[s("img",{staticClass:"img-fluid rounded-circle img-thumbnail",attrs:{src:e("1979"),alt:"wrapkit"}}),s("div",{},[s("h5",{staticClass:"mt-2 font-weight-medium mb-0"},[t._v("Sarath Babu M")]),s("h6",{staticClass:"subtitle mb-1"},[t._v("Product Lead")]),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://in.linkedin.com/in/sarathbabum",target:"_blank"}},[s("i",{staticClass:"icofont-linkedin icon-size"})])])])])])])])]),s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-lg-4 text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"bg-white rounded team-image-padding"},[s("img",{staticClass:"img-fluid rounded-circle img-thumbnail",attrs:{src:e("250c"),alt:"wrapkit"}}),s("div",{},[s("h5",{staticClass:"mt-2 font-weight-medium mb-0"},[t._v("Santosh More")]),s("h6",{staticClass:"subtitle mb-1"},[t._v(" Co Founder")]),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://in.linkedin.com/in/santosh-more-19716417",target:"_blank"}},[s("i",{staticClass:"icofont-linkedin icon-size"})])])])])])])]),s("div",{staticClass:"col-lg-4 text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"bg-white rounded team-image-padding"},[s("img",{staticClass:"img-fluid rounded-circle img-thumbnail",attrs:{src:e("2eef"),alt:"wrapkit"}}),s("div",{},[s("h5",{staticClass:"mt-2 font-weight-medium mb-0"},[t._v("Medha Krishnan")]),s("h6",{staticClass:"subtitle mb-1"},[t._v("Co Founder")]),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://in.linkedin.com/in/medha-krishnan-a3044457",target:"_blank"}},[s("i",{staticClass:"icofont-linkedin icon-size"})])])])])])])]),s("div",{staticClass:"col-lg-4 text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"bg-white rounded team-image-padding"},[s("img",{staticClass:"img-fluid rounded-circle img-thumbnail",attrs:{src:e("c62a"),alt:"wrapkit"}}),s("div",{},[s("h5",{staticClass:"mt-2 font-weight-medium mb-0"},[t._v("Mahalaxmi Jairam")]),s("h6",{staticClass:"subtitle mb-1"},[t._v("UI/UX Design Consultant")]),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://www.linkedin.com/in/mahalaxmijairam/\n                     ",target:"_blank"}},[s("i",{staticClass:"icofont-linkedin icon-size"})])])])])])])])]),s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-lg-4 text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"bg-white rounded team-image-padding"},[s("img",{staticClass:"img-fluid rounded-circle img-thumbnail",attrs:{src:e("5afd"),alt:"wrapkit"}}),s("div",{},[s("h5",{staticClass:"mt-2 font-weight-medium mb-0"},[t._v("Jonah Filmore")]),s("h6",{staticClass:"subtitle mb-1"},[t._v(" Media Lead")]),s("div",{staticClass:"social"},[s("a",{attrs:{href:"https://in.linkedin.com/in/jonah-filmore-92295b183?trk=people-guest_people_search-card",target:"_blank"}},[s("i",{staticClass:"icofont-linkedin icon-size"})])])])])])])])])])])])}],T={name:"Team"},I=T,P=Object(r["a"])(I,O,D,!1,null,null,null),R=P.exports,B={name:"Home",components:{Contact:L,Team:R}},z=B,U=Object(r["a"])(z,y,k,!1,null,null,null),W=U.exports;s["a"].use(A["a"]);var N=[{path:"/",name:"Home",component:W},{path:"/play",name:"Play",component:function(){return e.e("about").then(e.bind(null,"8363"))}},{path:"/privacypolicy",name:"Privacypolicy",component:function(){return e.e("about").then(e.bind(null,"747c"))}},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],H=new A["a"]({mode:"history",base:"/",routes:N}),F=H;e("2837"),e("ac63"),e("d40f"),e("1e9f"),e("6672"),e("74ee");s["a"].config.productionTip=!1,new s["a"]({router:F,render:function(t){return t(w)}}).$mount("#app"),s["a"].config.productionTip=!1,new s["a"]({el:"#app",router:F,template:"<App/>",components:{App:w}})},"5afd":function(t,a,e){t.exports=e.p+"img/team-8.81a23ec0.png"},6672:function(t,a,e){},"74ee":function(t,a,e){var s=e("448a").default;e("498a"),e("d3b7"),e("159b"),function(){"use strict";var t=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=t.trim(),a?s(document.querySelectorAll(t)):document.querySelector(t)},a=function(a,e,s){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=t(e,i);o&&(i?o.forEach((function(t){return t.addEventListener(a,s)})):o.addEventListener(a,s))},e=function(t,a){t.addEventListener("scroll",a)},i=t("#navbar .scrollto",!0),o=function(){var a=window.scrollY+200;i.forEach((function(e){if(e.hash){var s=t(e.hash);s&&(a>=s.offsetTop&&a<=s.offsetTop+s.offsetHeight?e.classList.add("active"):e.classList.remove("active"))}}))};window.addEventListener("load",o),e(document,o);var n=function(a){var e=t("#header"),s=e.offsetHeight;e.classList.contains("header-scrolled")||(s-=20);var i=t(a).offsetTop;window.scrollTo({top:i-s,behavior:"smooth"})},l=t("#header");if(l){var r=function(){window.scrollY>100?l.classList.add("header-scrolled"):l.classList.remove("header-scrolled")};window.addEventListener("load",r),e(document,r)}var c=t(".back-to-top");if(c){var d=function(){window.scrollY>100?c.classList.add("active"):c.classList.remove("active")};window.addEventListener("load",d),e(document,d)}a("click",".mobile-nav-toggle",(function(a){t("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")})),a("click",".navbar .dropdown > a",(function(a){t("#navbar").classList.contains("navbar-mobile")&&(a.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))}),!0),a("click",".scrollto",(function(a){if(t(this.hash)){a.preventDefault();var e=t("#navbar");if(e.classList.contains("navbar-mobile")){e.classList.remove("navbar-mobile");var s=t(".mobile-nav-toggle");s.classList.toggle("bi-list"),s.classList.toggle("bi-x")}n(this.hash)}}),!0),window.addEventListener("load",(function(){window.location.hash&&t(window.location.hash)&&n(window.location.hash)})),window.addEventListener("load",(function(){var e=t(".portfolio-container");if(e){var s=new Isotope(e,{itemSelector:".portfolio-item"}),i=t("#portfolio-flters li",!0);a("click","#portfolio-flters li",(function(t){t.preventDefault(),i.forEach((function(t){t.classList.remove("filter-active")})),this.classList.add("filter-active"),s.arrange({filter:this.getAttribute("data-filter")}),s.on("arrangeComplete",(function(){AOS.refresh()}))}),!0)}}));GLightbox({selector:".portfolio-lightbox"});new Swiper(".portfolio-details-slider",{speed:400,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),window.addEventListener("load",(function(){AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})}))}()},ac63:function(t,a,e){},b9c7:function(t,a,e){t.exports=e.p+"img/science3.1875ada1.jpg"},c09c:function(t,a,e){t.exports=e.p+"img/team-3.5d0a19b0.jpg"},c62a:function(t,a,e){t.exports=e.p+"img/team-4.8a007f81.png"},d40f:function(t,a,e){},e4c5:function(t,a,e){t.exports=e.p+"img/team-6.3f47e216.jpg"},e8cc:function(t,a,e){t.exports=e.p+"img/mobile-app.2662a788.png"},eeda:function(t,a,e){t.exports=e.p+"img/science1.29f4b54a.jpg"},f49b:function(t,a,e){t.exports=e.p+"img/ergo2.af9a7d6c.png"}});
//# sourceMappingURL=app.107f3de5.js.map