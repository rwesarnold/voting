(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],p=0,h=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0138":function(t,e,n){"use strict";n("14d7")},"034f":function(t,e,n){"use strict";n("85ec")},"14d7":function(t,e,n){},"3b7d":function(t,e,n){},"3c2d":function(t,e,n){"use strict";n("3b7d")},"53c5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"menu"}},[n("div",{attrs:{id:"center"}},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"menu-item"},[n("p",[t._v("Voting Poll")])])]),n("router-link",{attrs:{to:"/Overall_Results"}},[n("div",{staticClass:"menu-item"},[n("p",[t._v("Overall Results")])])]),n("router-link",{attrs:{to:"/Sorted_Results"}},[n("div",{staticClass:"menu-item"},[n("p",[t._v("Sorted Results")])])])],1)]),n("router-view"),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gitlink"},[n("a",{attrs:{id:"gitlink_text",href:"https://github.com/rwesarnold/Voting_Poll"}},[n("i",[t._v("github")])])])}],i=(n("034f"),n("2877")),s={},c=Object(i["a"])(s,a,r,!1,null,null,null),l=c.exports,u=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Voting",{attrs:{photos:t.photos}})],1)},h=[],m=(n("4de4"),n("d3b7"),n("ac1f"),n("841c"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"photos"},t._l(t.photos,(function(e){return n("div",{key:e.id,staticClass:"photo"},[n("div",{staticClass:"vote"},[n("button",{on:{click:function(n){return t.voteForPhoto(e)}}},[t._v("Vote for this Photo")])]),n("div",{staticClass:"info"},[n("h1",[t._v("Photo Name: "+t._s(e.name))])]),n("div",{staticClass:"image"},[n("img",{attrs:{src:"/images/"+e.image}})]),n("div",{staticClass:"info"},[n("p",[t._v("Photographer: "+t._s(e.photographer))]),n("p",[t._v("Location: "+t._s(e.location))])])])})),0)])}),d=[],f={name:"Voting",props:{photos:Array},methods:{voteForPhoto:function(t){t.numVotes++}}},g=f,v=(n("0138"),Object(i["a"])(g,m,d,!1,null,"01a75c91",null)),_=v.exports,C={name:"Home",components:{Voting:_},data:function(){return{searchText:""}},computed:{photos:function(){var t=this;return this.$root.$data.photos.filter((function(e){return e.name.toLowerCase().search(t.searchText.toLowerCase())>=0}))}}},b=C,k=(n("9a8d"),Object(i["a"])(b,p,h,!1,null,"d7b55aaa",null)),w=k.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"win"},[1===t.numWinning?n("div",{staticClass:"winner"},[n("p",[t._v("The photo with the highest number of votes is "+t._s(t.winning.name)+", with "+t._s(t.winning.numVotes)+" votes.")]),n("img",{attrs:{src:"/images/"+t.winning.image}}),n("p",{staticClass:"split"},[t._v("Overall Results are shown below:")])]):n("div",{staticClass:"winners"},[n("p",[t._v("There is more than one winner.")])])]),n("Results",{attrs:{photos:t.photos}})],1)},V=[],j=(n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"photos"},t._l(t.photos,(function(e){return n("div",{key:e.id,staticClass:"photo"},[n("div",{staticClass:"info"},[n("h1",[t._v("Photo Name: "+t._s(e.name))])]),n("div",{staticClass:"image"},[n("img",{attrs:{src:"/images/"+e.image}})]),n("div",{staticClass:"info"},[n("h1",[t._v("Votes: "+t._s(e.numVotes))])])])})),0)])}),$=[],O={name:"Voting",props:{photos:Array}},S=O,W=(n("3c2d"),Object(i["a"])(S,j,$,!1,null,"fccc03e2",null)),x=W.exports,P={name:"Overall_Results",components:{Results:x},data:function(){return{searchText:""}},computed:{photos:function(){var t=this;return this.$root.$data.photos.filter((function(e){return e.name.toLowerCase().search(t.searchText.toLowerCase())>=0}))},numWinning:function(){var t=1,e=this.$root.$data.photos[0];return this.$root.$data.photos.forEach((function(n){e==n?e=n:e.numVotes<n.numVotes?(e=n,t=1):e.numVotes==n.numVotes&&t++})),t},winning:function(){var t=this.$root.$data.photos[0];return this.$root.$data.photos.forEach((function(e){t.numVotes<e.numVotes&&(t=e)})),t}}},A=P,R=(n("abcc"),Object(i["a"])(A,y,V,!1,null,"b3345b62",null)),M=R.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"pure-menu pure-menu-horizontal"},[n("p",[t._v("Sort by Location")]),n("ul",{staticClass:"pure-menu-list-L"},[n("li",{staticClass:"pure-menu-item"},[n("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("United States")}}},[t._v("United States")])]),n("li",{staticClass:"pure-menu-item"},[n("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("Canada")}}},[t._v("Canada")])]),n("li",{staticClass:"pure-menu-item"},[n("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("Greenland")}}},[t._v("Greenland")])]),n("li",{staticClass:"pure-menu-item"},[n("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("Antarctica")}}},[t._v("Antarctica")])])]),n("p",[t._v("Sort by Photographer")]),n("ul",{staticClass:"pure-menu-list-L"},[n("li",{staticClass:"pure-menu-item"},[n("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("Jason Borne")}}},[t._v("Jason Borne")])]),n("li",{staticClass:"pure-menu-item"},[n("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("Mike Wazowski")}}},[t._v("Mike Wazowski")])]),n("li",{staticClass:"pure-menu-item"},[n("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(e){return t.select("Wesley Arnold")}}},[t._v("Wesley Arnold")])])])]),n("Results",{attrs:{photos:t.photos}})],1)},B=[],E={name:"Sorted_Results",components:{Results:x},data:function(){return{location:"",photographer:""}},computed:{photos:function(){var t=this,e="";return""!=this.locaiton&&(e=this.$root.$data.photos.filter((function(e){return e.location===t.location}))),""!=this.photographer&&(e=this.$root.$data.photos.filter((function(e){return e.photographer===t.photographer}))),e}},methods:{select:function(t){this.location="",this.photographer="","United States"==t&&(this.location=t),"Canada"==t&&(this.location=t),"Greenland"==t&&(this.location=t),"Antarctica"==t&&(this.location=t),"Jason Borne"==t&&(this.photographer=t),"Mike Wazowski"==t&&(this.photographer=t),"Wesley Arnold"==t&&(this.photographer=t)}}},J=E,T=(n("6fe2"),Object(i["a"])(J,z,B,!1,null,"4af3157c",null)),G=T.exports;o["a"].use(u["a"]);var L=[{path:"/",name:"Home",component:w},{path:"/Overall_Results",name:"Overall_Results",component:M},{path:"/Sorted_Results",name:"Sorted_Results",component:G}],U=new u["a"]({mode:"history",base:"/",routes:L}),F=U,I=[{id:1,name:"Ice Slide",location:"United States",photographer:"Jason Borne",image:"glacier1.jpg",numVotes:0},{id:2,name:"Great Wall",location:"Canada",photographer:"Mike Wazowski",image:"glacier2.jpg",numVotes:0},{id:3,name:"Ice Arch",location:"United States",photographer:"Jason Borne",image:"glacier3.jpg",numVotes:0},{id:4,name:"White Peak",location:"United States",photographer:"Wesley Arnold",image:"glacier4.jpg",numVotes:0},{id:5,name:"Winter's Froth",location:"Canada",photographer:"Mike Wazowski",image:"glacier5.jpg",numVotes:0},{id:6,name:"Glacier Valley",location:"Greenland",photographer:"Jason Borne",image:"glacier6.jpg",numVotes:0},{id:7,name:"Crumbling Fortress",location:"Antarctica",photographer:"Mike Wazowski",image:"glacier7.jpg",numVotes:0},{id:8,name:"Ice Front",location:"Canada",photographer:"Wesley Arnold",image:"glacier8.jpg",numVotes:0},{id:9,name:"Deep Blue",location:"United States",photographer:"Wesley Arnold",image:"glacier9.jpg",numVotes:0},{id:10,name:"Frozen Turtle",location:"Greenland",photographer:"Wesley Arnold",image:"glacier10.jpg",numVotes:0},{id:11,name:"Swimming Cloud",location:"Antarctica",photographer:"Mike Wazowski",image:"glacier11.jpg",numVotes:0},{id:12,name:"Bear's Den",location:"Canada",photographer:"Jason Borne",image:"glacier12.jpg",numVotes:0},{id:13,name:"Mashed Ice",location:"Greenland",photographer:"Mike Wazowski",image:"glacier13.jpg",numVotes:0}],D=I,H={photos:D,results:[]};new o["a"]({router:F,data:H,render:function(t){return t(l)}}).$mount("#app")},"6fe2":function(t,e,n){"use strict";n("9b0e")},"70c0":function(t,e,n){},"85ec":function(t,e,n){},"9a8d":function(t,e,n){"use strict";n("70c0")},"9b0e":function(t,e,n){},abcc:function(t,e,n){"use strict";n("53c5")}});
//# sourceMappingURL=app.a622433a.js.map