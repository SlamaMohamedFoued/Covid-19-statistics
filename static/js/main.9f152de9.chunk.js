(this["webpackJsonpcovid-stats"]=this["webpackJsonpcovid-stats"]||[]).push([[0],{11:function(e,t,a){e.exports={stat:"cards_stat__1i9ha",infected:"cards_infected__1d90A",recovered:"cards_recovered__v-88O",deaths:"cards_deaths__zKszO",infectedStat:"cards_infectedStat__3iAr8",recoveredStat:"cards_recoveredStat__2hVgy",deathsStat:"cards_deathsStat__4NGb-"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),s=(a(91),a(6)),u=a.n(s),i=a(10),l=a(72),d=a(73),m=a(83),f=a(82),p=a(74),v=a.n(p),h=a(224),b=a(228),E=a(225),y=a(226),g=a(32),x=a.n(g),_=a(33),w=a.n(_),S=a(11),O=a.n(S),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",null,r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:w()(O.a.stat,O.a.infectedStat)},r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0,className:O.a.infected},"infected"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(x.a,{end:a.value,duration:2.75,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Numbet of active"))),r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:w()(O.a.stat,O.a.recoveredStat)},r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0,className:O.a.recovered},"recovered"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(x.a,{end:n.value,duration:2.75,separator:","})),r.a.createElement(y.a,{color:"textSecondary"}," ",new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Number of recovered"))),r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:w()(O.a.stat,O.a.deathsStat)},r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0,className:O.a.deaths},"Deaths"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(x.a,{end:c.value,duration:2.75,separator:","})),r.a.createElement(y.a,{color:"textSecondary"}," ",new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"},"Numbet of deaths"))))):r.a.createElement("div",null)},k=a(31),N=a(34),C=a.n(N),D="https://covid19.mathdro.id/api",B=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,C.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,console.log(a),n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),console.log(n),e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=a(45),z=a(80),G=a.n(z),J=function(e){var t=e.data,a=e.country;console.log(t.confirmed);var c=Object(n.useState)([]),o=Object(k.a)(c,2),s=o[0],l=o[1];Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(s),e()}),[]);var d=s.length?r.a.createElement(U.b,{data:{labels:s.map((function(e){return e.date})),datasets:[{data:s.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:s.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgb(255 , 0 , 0 , 0.5)",fill:!0}]}}):null,m=t.confirmed?r.a.createElement(U.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["orange","green","red"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return r.a.createElement("div",{className:G.a.container},a?m:d)},M=a(229),W=a(227),H=a(81),K=a.n(H),P=function(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),r.a.createElement(M.a,{className:K.a.form},r.a.createElement(W.a,{onChange:function(t){return e.handleCountry(t.target.value)}},r.a.createElement("option",{value:""},"Global"),c.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},R=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountry=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(a);case 2:n=t.sent,e.setState({country:a,data:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,this.setState({data:t}),console.log(t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:v.a.container},r.a.createElement(j,{data:this.state.data}),r.a.createElement(P,{handleCountry:function(t){return e.handleCountry(t)}}),r.a.createElement(J,{data:this.state.data,country:this.state.country}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports={container:"App_container__1iDuH"}},80:function(e,t,a){e.exports={container:"chart_container__YvwBx"}},81:function(e,t,a){e.exports={form:"CountryPicker_form__y6pAI"}},86:function(e,t,a){e.exports=a(207)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.9f152de9.chunk.js.map