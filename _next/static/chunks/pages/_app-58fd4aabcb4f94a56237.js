_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"+dYQ":function(e,n,o){"use strict";o.d(n,"b",(function(){return c}));var r=o("7DA+"),t=o("wKoh"),a="SET_SD",c=function(e){return{type:a,val:e}};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.a:return n.payload.currentSeasonData;case a:return n.val;default:return e}}},0:function(e,n,o){o("GcxT"),e.exports=o("nOHt")},"0p7O":function(e){e.exports=JSON.parse('["2021 Summer","2021 Winter","2020 Summer"]')},"1TCz":function(e,n,o){"use strict";o.r(n);var r=o("o0o1"),t=o.n(r),a=o("HaE+");function c(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var s=o("nKUr"),i=o("7DA+"),l=o("ANjH"),m=(o("5HXA"),o("zmuQ")),u=o("+dYQ"),p=o("9olT"),h=o("HwGp"),d=o("BbF2"),f=o("kcSG"),w=Object(l.combineReducers)({currentSeasonIdx:m.a,currentSeasonData:u.a,seasonList:p.a,currentYear:h.a,currentSeason:d.a,isNavClicked:f.a});o("6Fm8"),o("npd2"),o("q6Ig"),o("G2a7"),o("CCrm"),o("kxKB");function b(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}var v=function(e){var n=e.Component,o=e.pageProps;e.store;return Object(s.jsx)(n,function(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?b(Object(o),!0).forEach((function(n){c(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}({},o))};v.getInitialProps=function(){var e=Object(a.a)(t.a.mark((function e(n){var o,r,a;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.ctx,r=n.Component,a={},!r.getInitialProps){e.next=6;break}return e.next=5,n.Component.getInitialProps(o);case 5:a=e.sent;case 6:return e.abrupt("return",{pageProps:a});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=Object(i.b)((function(e){var n=Object(l.compose)(l.applyMiddleware.apply(void 0,[]));if(!e.router||"/suapc"!==e.router.pathname&&"/halloffame"!==e.router.pathname&&"/campcontest"!==e.router.pathname)return Object(l.createStore)(w,n);var r=e.router.pathname;"/campcontest"===r&&(r="/halloffame");var t=o("r7OT")("./".concat(r.substring(1),"/").concat("2021 Summer.json")),a=o("WlY1")("./".concat(r.substring(1),"/list.json")),c={currentSeasonData:t,currentYear:t.year,currentSeason:t.season,currentSeasonIdx:a.indexOf("2021 Summer"),seasonList:a,isNavClicked:!1};return Object(l.createStore)(w,c,n)})).withRedux(v)},"5HXA":function(e,n,o){"use strict";var r=o("ANjH").compose;n.__esModule=!0,n.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},n.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"6Fm8":function(e,n,o){},"824O":function(e){e.exports=JSON.parse('{"year":2021,"season":"Winter","date":"2021\ub144 2\uc6d4 28\uc77c \uc624\ud6c4 12\uc2dc ~ \uc624\ud6c4 5\uc2dc","awards":[{"div":null,"winner":[{"prize":1,"solved":12,"team":"Supported by LKY","school":"\uc5f0\uc138\ub300\ud559\uad50","member":"\uc724\uc778\uc12d, \ud669\uc900\ud638, \ub0a8\ud604\uc6b0"},{"prize":2,"solved":9,"team":151719,"school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uc804\ud574\uc131, \uc815\uc7ac\ud6c8, \uc774\uc900\uc11d"},{"prize":3,"solved":9,"team":"NO ORANGE CANT WIN","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uae40\uad00\uc6b0, \ubc15\uc7ac\ud615, \uc774\uc724\uc81c"},{"prize":4,"solved":8,"team":"TERRA","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uc774\ub3d9\uc8fc, \uc774\ubbfc\ud76c, \uc870\uc6d0\ube48"},{"prize":5,"solved":8,"team":"\ud32c\ucf00\uc774\ud06c\ub9db \ucfe0\ud0a4","school":"\uc5f0\uc138\ub300\ud559\uad50","member":"\ubc15\uc120\uc885, \uae40\ud0dc\uc724, \uae40\ubbfc\uc7ac"},{"prize":6,"solved":7,"team":"APP","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uac15\ubb38\ud574, \uac15\ub2e4\ud61c, \uc804\ubbfc\uc218"},{"prize":7,"solved":7,"team":"\uc804\uc0dd\ud588\ub354\ub2c8 \ubc15\uac74\uc774\uc5c8\ub358 \uac74\uc5d0 \ub300\ud558\uc5ec","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uac15\ud6a8\uaddc, \ubc15\uac74, \uc190\uae30\ub839"},{"prize":8,"solved":6,"team":"\uc11c\uc218\uc0bc","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\ud64d\uc11c\uc900, \uc720\ud638\uc601, \uc624\uc7ac\uc11d"},{"prize":9,"solved":6,"team":"\ub3d9\ub3d9\ubc15","school":"\uc5f0\uc138\ub300\ud559\uad50","member":"\uad8c\ub3d9\uc6b1, \ub3d9\uc6a9\ud6c8, \ubc15\uc601\ud55c"},{"prize":10,"solved":6,"team":"\uc0c1\uae08\ud0c0\uc11c\uc18c\uace0\uae30\uc0ac\uba39\uc790","school":"\ud64d\uc775\ub300\ud559\uad50","member":"\uc815\uc724\uc11d, \uae40\uc885\uc6b1, \uc11c\uc601\uc9c4"}]}],"examiner":[{"name":"\uc774\uad6d\ub82c","school":"\uc5f0\uc138\ub300\ud559\uad50"},{"name":"\uc815\uc5f0\ub450","school":"\ud64d\uc775\ub300\ud559\uad50"},{"name":"\ubc15\uc218\ud604","school":"\uc11c\uac15\ub300\ud559\uad50"},{"name":"\uc815\uae30\uc6c5","school":"\uc5f0\uc138\ub300\ud559\uad50"},{"name":"\uc774\uc0c1\uc6d0","school":"\uc11c\uac15\ub300\ud559\uad50"}],"checker":[{"name":"\ucd5c\uc7ac\ubbfc","school":"KAIST"},{"name":"\uc870\uacbd\uc644","school":"\uc22d\uc2e4\ub300\ud559\uad50"},{"name":"\ub0a8\ud604\uc6b1","school":"Team Samoyed"},{"name":"\uad8c\uc77c\uc6b0","school":"\uc778\ucc9c\ub300\ud559\uad50"}],"sponser":["kakao","naver","mnsoft","jetbrains","hanbit","jpub","youngjin","startlink"]}')},"9olT":function(e,n,o){"use strict";o.d(n,"b",(function(){return a}));o("im6/");var r=o("7DA+"),t="SET_SL",a=function(e){return{type:t,val:e}};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.a:return n.payload.seasonList;case t:return n.val;default:return e}}},BbF2:function(e,n,o){"use strict";o.d(n,"b",(function(){return c}));o("/MKj");var r=o("7DA+"),t=o("824O"),a="SET_SEASON",c=function(e){return{type:a,val:e}};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.season,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.a:return n.payload.currentSeason;case a:return n.val;default:return e}}},CCrm:function(e,n,o){},G2a7:function(e,n,o){},GcxT:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o("1TCz")}])},"HaE+":function(e,n,o){"use strict";function r(e,n,o,r,t,a,c){try{var s=e[a](c),i=s.value}catch(l){return void o(l)}s.done?n(i):Promise.resolve(i).then(r,t)}function t(e){return function(){var n=this,o=arguments;return new Promise((function(t,a){var c=e.apply(n,o);function s(e){r(c,t,a,s,i,"next",e)}function i(e){r(c,t,a,s,i,"throw",e)}s(void 0)}))}}o.d(n,"a",(function(){return t}))},HwGp:function(e,n,o){"use strict";o.d(n,"b",(function(){return c}));var r=o("7DA+"),t=o("824O"),a="SET_YEAR",c=function(e){return{type:a,val:e}};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.year,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.a:return n.payload.currentYear;case a:return n.val;default:return e}}},WlY1:function(e,n,o){var r={"./halloffame/list.json":"im6/","./suapc/list.json":"0p7O"};function t(e){var n=a(e);return o(n)}function a(e){if(!o.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}t.keys=function(){return Object.keys(r)},t.resolve=a,e.exports=t,t.id="WlY1"},gPUI:function(e){e.exports=JSON.parse('{"year":2021,"season":"Summer","date":"2021\ub144 8\uc6d4 21\uc77c \uc624\ud6c4 2\uc2dc ~ \uc624\ud6c4 5\uc2dc","hasPDF":true,"links":["https://www.acmicpc.net/category/499","https://www.acmicpc.net/contest/spotboard/676","https://www.acmicpc.net/contest/spotboard/677"],"studies":[{"topic":"\ucd08\uae09","lecturers":[{"name":"\ubc15\uc7ac\ud615","school":"\uc11c\uac15\ub300","handle":"pjh6792"},{"name":"\uc724\uc778\uc12d","school":"\uc5f0\uc138\ub300","handle":"pinebananais"}],"mentors":[{"name":"\uac15\ud6a8\uaddc","school":"\uc11c\uac15\ub300","handle":"djs100201"},{"name":"\uad8c\ucc2c","school":"\ud64d\uc775\ub300","handle":"kckc0608"},{"name":"\uae40\uc608\uc740","school":"\uc774\ud654\uc5ec\ub300","handle":"ye1111k"},{"name":"\uae40\ud0dc\uc724","school":"\uc5f0\uc138\ub300","handle":"ystaeyoon113"},{"name":"\ub0a8\uc720\uc9c4","school":"\uc5f0\uc138\ub300","handle":"youx"},{"name":"\uc1a1\ud61c\ubbfc","school":"\uc219\uba85\uc5ec\ub300","handle":"songfox00"},{"name":"\uc784\uc9c0\ud658","school":"\uc11c\uac15\ub300","handle":"raararaara"}],"curriculum":["C\uc5b8\uc5b4 \ub9ac\ubdf0, C++ \uae30\ubcf8","\uc2dc\uac04\ubcf5\uc7a1\ub3c4, Sorting","Stack, Queue, Deque","BackTracking, BruteForce","\ub3d9\uc801 \uacc4\ud68d\ubc95(DP)","Greedy Algorithm","\ubd84\ud560\uc815\ubcf5, \uc774\ubd84\ud0d0\uc0c9","Graph, Tree","DFS, BFS","Union-Find, MST","\uc6b0\uc120\uc21c\uc704 \ud050, \ub2e4\uc775\uc2a4\ud2b8\ub77c \uc54c\uace0\ub9ac\uc998"],"contests":[{"contest_name":"Camp Contest","organizer_type":"\ucd9c\uc81c\uc790","problem_list":[{"problem_name":"\uc774\uc9c4\uc218 \ub098\ub217\uc148","link":"https://www.acmicpc.net/problem/22950","organizer":{"name":"\uae40\ub3c4\uc740","school":"\uc219\uba85\uc5ec\ub300"}},{"problem_name":"\uc1a1\uc774\uc758 \uce74\ub4dc \uac8c\uc784","link":"https://www.acmicpc.net/problem/22951","organizer":{"name":"\uc1a1\ud61c\ubbfc","school":"\uc219\uba85\uc5ec\ub300"}},{"problem_name":"permutation making","link":"https://www.acmicpc.net/problem/22952","organizer":{"name":"\uac15\ud6a8\uaddc","school":"\uc11c\uac15\ub300"}},{"problem_name":"\ub3c4\ub3c4\uc758 \uc74c\uc2dd \uc900\ube44","link":"https://www.acmicpc.net/problem/22953","organizer":{"name":"\uae40\ub3c4\ud604","school":"\ud64d\uc775\ub300"}},{"problem_name":"\uadf8\ub798\ud504 \ud2b8\ub9ac \ubd84\ud560","link":"https://www.acmicpc.net/problem/22954","organizer":{"name":"\uac15\ud6a8\uaddc","school":"\uc11c\uac15\ub300"}},{"problem_name":"\uace0\uc591\uc774 \ub3c4\ub3c4\uc758 \ud0c8\ucd9c\uae30","link":"https://www.acmicpc.net/problem/22955","organizer":{"name":"\uae40\ub3c4\uc740","school":"\uc219\uba85\uc5ec\ub300"}},{"problem_name":"\uc18c\ub098\uae30","link":"https://www.acmicpc.net/problem/22956","organizer":{"name":"\uae40\ub3c4\ud604","school":"\ud64d\uc775\ub300"}}],"awards":[{"prize":1,"name":"\uae40\ucc3d\ubbfc","school":"\uc11c\uac15\ub300","handle":"jakads"},{"prize":2,"name":"\uc804\uc7ac\ud604","school":"\uc5f0\uc138\ub300","handle":"chrisj67"},{"prize":3,"name":"\uae40\uc131\ud604","school":"\uc11c\uac15\ub300","handle":"dart"}]}]},{"topic":"\uc911\uae09","lecturers":[{"name":"\uc774\uad6d\ub82c","school":"\uc5f0\uc138\ub300","handle":"lky7674"},{"name":"\uc804\ud574\uc131","school":"\uc11c\uac15\ub300","handle":"seastar105"}],"mentors":[{"name":"\uac15\ud6a8\uaddc","school":"\uc11c\uac15\ub300","handle":"djs100201"},{"name":"\ub0a8\uc720\uc9c4","school":"\uc5f0\uc138\ub300","handle":"youx"},{"name":"\uc774\uc0c1\uc6d0","school":"\uc11c\uac15\ub300","handle":"gumgood"},{"name":"\uc784\uc9c0\ud658","school":"\uc11c\uac15\ub300","handle":"raararaara"},{"name":"\uc870\uc6d0\ube48","school":"\uc11c\uac15\ub300","handle":"wbcho0504"}],"curriculum":["Dynamic Programming 1","Divide & Conquer","\uae30\ucd08 \uc815\uc218\ub860(\uc5ed\uc6d0, \ud655\uc7a5 \uc720\ud074\ub9ac\ub4dc)","SCC & \uc704\uc0c1 \uc815\ub82c","Segment Tree","2-SAT","Dynamic Programming 2","DFS Tree & BCC","\uae30\ud558","\uc774\uad6d\ub82c\uc758 Flow 1","\uc774\uad6d\ub82c\uc758 Flow 2"],"contests":[{"contest_name":"Camp Contest","organizer_type":"\ucd9c\uc81c\uc790","problem_list":[{"problem_name":"permutation making","link":"https://www.acmicpc.net/problem/22952","organizer":{"name":"\uac15\ud6a8\uaddc","school":"\uc11c\uac15\ub300"}},{"problem_name":"\uc9dd\uc218\uc2eb\uc5b4\uc218","link":"https://www.acmicpc.net/problem/22957","organizer":{"name":"\uae40\ub3c4\ud604","school":"\ud64d\uc775\ub300"}},{"problem_name":"\uc548\uc0b0 \ud0d0\uc9c0\uae30","link":"https://www.acmicpc.net/problem/22958","organizer":{"name":"\uc774\uad6d\ub82c","school":"\uc5f0\uc138\ub300"}},{"problem_name":"\uc2e0\ucd0c\uc758 \uc218\uc5f4\uacfc \ucffc\ub9ac","link":"https://www.acmicpc.net/problem/22959","organizer":{"name":"\uac15\ud6a8\uaddc","school":"\uc11c\uac15\ub300"}},{"problem_name":"\ubbf8\ud305","link":"https://www.acmicpc.net/problem/22960","organizer":{"name":"\uc774\uad6d\ub82c","school":"\uc5f0\uc138\ub300"}},{"problem_name":"\uc5ec\ud589\uc0ac \uc6b4\uc601\ud558\uae30","link":"https://www.acmicpc.net/problem/22961","organizer":{"name":"\uc804\ud574\uc131","school":"\uc11c\uac15\ub300"}},{"problem_name":"\uc2e0\ucd0c\ubc29\uc704\ubcf8\ubd80","link":"https://www.acmicpc.net/problem/22962","organizer":{"name":"\uc774\uad6d\ub82c","school":"\uc5f0\uc138\ub300"}}],"awards":[{"prize":1,"name":"\uc870\uc6d0\ube48","school":"\uc11c\uac15\ub300","handle":"wbcho0504"},{"prize":2,"name":"\uae40\uc885\ubbfc","school":"\uc5f0\uc138\ub300","handle":"luciaholic"},{"prize":3,"name":"\uae40\uae30\ud604","school":"\uc5f0\uc138\ub300","handle":"surface_03"}]}]}]}')},"im6/":function(e){e.exports=JSON.parse('["2021 Summer","2021 Winter","2020 Summer","2020 Winter"]')},kxKB:function(e,n,o){},npd2:function(e,n,o){},q6Ig:function(e,n,o){},r7OT:function(e,n,o){var r={"./halloffame/2021 Summer.json":"gPUI","./suapc/2021 Summer.json":"wKoh"};function t(e){var n=a(e);return o(n)}function a(e){if(!o.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}t.keys=function(){return Object.keys(r)},t.resolve=a,e.exports=t,t.id="r7OT"},wKoh:function(e){e.exports=JSON.parse('{"year":2021,"season":"Summer","date":"2021\ub144 8\uc6d4 28\uc77c \uc624\ud6c4 12\uc2dc ~ \uc624\ud6c4 5\uc2dc","sponser":["kakao","autoever","naver","furiosa","hanbit","youngjin","easys","startlink","solvedac"],"awards":[{"div":null,"winner":[{"prize":1,"solved":8,"team":"\ub610\ub610 \ub098\ub9cc \ubaa8\ub974\ub294 \uc6f0\ub178\uc6b4 \ub0b8\ub2e4","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uac15\ud6a8\uaddc, \uc774\uc0c1\uc6d0, \uc870\uc6d0\ube48"},{"prize":2,"solved":8,"team":"\uc2a4\ud30c\ub974\ud0c0Rebro\ud074\ub7fd","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\ubc15\uc7ac\ud615, \uc624\uc7ac\uc11d, \uc9c4\uc0c1\uc6b0"},{"prize":3,"solved":8,"team":"Order of One","school":"\uc5f0\uc138\ub300\ud559\uad50","member":"\uae40\uae30\ud604, \uae40\uc885\ubbfc, \uc815\ud638\uc6a9"},{"prize":4,"solved":8,"team":"\ud22c\uba38\uce58\ucf54\ub354","school":"\uc5f0\uc138\ub300\ud559\uad50","member":"\uae40\ud615\uc9c4, \ub3d9\uc6a9\ud6c8, \uc774\uc2b9\uc7ac"},{"prize":5,"solved":7,"team":"\uc0dd\uc218","school":"\ud64d\uc775\ub300\ud559\uad50","member":"\uae40\uae30\uc120, \uae40\ud6a8\uc6d0, \uc815\uc7ac\ud604"},{"prize":6,"solved":6,"team":"\uc6b0\uc2b9\ubabb\ud558\uba742\ud559\uae30\ud734\ud559\ud568","school":"\ud64d\uc775\ub300\ud559\uad50","member":"\uad8c\ucc2c, \uae40\ub3c4\ud604, \ubc15\uac74\ud718"},{"prize":7,"solved":5,"team":"\uc0c1\uae08 \ubabb \ubc1b\uc73c\uba74 \ud68c\uc2dd \ubabb\ud574\uc694 \u3160\u3160","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uae40\uc815\ubaa8, \uae40\uc900\uc6b0, \ubc15\uc900\uc11c"},{"prize":8,"solved":5,"team":"philmath12","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uae40\ubbfc\ud615, \uc774\ud638\ud604, \ud55c\uc0c1\ud544"},{"prize":9,"solved":5,"team":"ECM","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uad8c\uc9c0\uc740, \uae40\uc131\ud604, \uae40\ucc3d\ubbfc"},{"prize":10,"solved":5,"team":"\uc7ac\uad6d\uc774\uc640 \uc544\uc774\ub458","school":"\uc11c\uac15\ub300\ud559\uad50","member":"\uc870\uc720\ud654, \uc870\uc7ac\uad6d, \ud55c\ub355\uaddc"}]}],"examiner":[{"name":"\uae40\uaddc\uc9c4","school":"\uc11c\uac15\ub300\ud559\uad50"},{"name":"\ubc15\uc218\ud604","school":"\uc11c\uac15\ub300\ud559\uad50"},{"name":"\uc774\uad6d\ub82c","school":"\uc5f0\uc138\ub300\ud559\uad50"},{"name":"\uc774\ud61c\uc544","school":"KAIST"},{"name":"\uc804\ud574\uc131","school":"\uc11c\uac15\ub300\ud559\uad50"}],"checker":[{"name":"\uae40\ucc44\uc644","school":"\uc120\ub9b0\uc778\ud130\ub137\uace0\ub4f1\ud559\uad50"},{"name":"\uae40\ud0dc\uc601","school":"KAIST"},{"name":"\uc815\uce58\ud6c8","school":"\uc778\ud558\ub300\ud559\uad50"},{"name":"\uc815\ud604\uc11c","school":"\uc11c\uc6b8\ub300\ud559\uad50"},{"name":"\ud64d\uc740\uae30","school":"\uc0bc\uc131\uc804\uc790"}]}')},zmuQ:function(e,n,o){"use strict";o.d(n,"b",(function(){return c}));var r=o("7DA+"),t=o("0p7O"),a="SET_IDX",c=function(e){return{type:a,val:e}};n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.indexOf("2021 Summer"),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.a:return n.payload.currentSeasonIdx;case a:return n.val;default:return e}}}},[[0,1,2,0,3]]]);