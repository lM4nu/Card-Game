(this["webpackJsonpcard-game"]=this["webpackJsonpcard-game"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(9),c=n.n(a),i=(n(15),n(2)),l=n(3),o=n(6),u=n(5),d=n(4),h=(n(16),n(0)),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"status",children:[Object(h.jsxs)("h1",{children:["Score: ",this.props.score," "]}),Object(h.jsxs)("h1",{children:["Best: ",this.props.best," "]})]})}}]),n}(s.Component),b=n(8),j=n.n(b),f=n(10),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).capitalize=function(e){return e[0].toUpperCase()+e.slice(1)},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:this.props.id,className:"poke-item",onClick:this.props.clickHandler,children:[Object(h.jsx)("img",{src:this.props.src,alt:""}),Object(h.jsx)("h2",{children:this.capitalize(this.props.name)})]})}}]),n}(s.Component),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={list:[],usedNumbers:[],clicked:[]},s.getData=s.getData.bind(Object(o.a)(s)),s.clickHandler=s.clickHandler.bind(Object(o.a)(s)),s}return Object(l.a)(n,[{key:"getData",value:function(){var e=Object(f.a)(j.a.mark((function e(t){var n,s,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t)){e.next=21;break}for(e.prev=2,s=parseInt(799*Math.random()+1);this.state.usedNumbers.includes(s);)s=parseInt(799*Math.random()+1);return this.state.usedNumbers.push(s),e.next=8,fetch("https://pokeapi.co/api/v2/pokemon/".concat(s,"/"));case 8:return r=e.sent,e.next=11,r.json();case 11:a=e.sent,this.state.list.push([a.sprites.front_default,a.name,s]),this.setState((function(e){return{list:e.list}})),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(2);case 18:n++,e.next=1;break;case 21:case"end":return e.stop()}}),e,this,[[2,16]])})));return function(t){return e.apply(this,arguments)}}()},{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),s=[e[n],e[t]];e[t]=s[0],e[n]=s[1]}}},{key:"componentDidMount",value:function(){this.getData(5*this.props.level)}},{key:"clickHandler",value:function(e){var t;t="DIV"!==e.target.tagName?e.target.parentElement:e.target,console.log(t.id),this.state.clicked.includes(t.id)?(this.props.lvlHandler("Reset"),this.props.scoreHandler("Reset")):(this.state.clicked.push(t.id),this.props.scoreHandler("inc"),this.shuffleArray(this.state.list),this.setState((function(e){return{list:e.list,clicked:e.clicked}}))),this.state.clicked.length===5*this.props.level&&this.props.lvlHandler("Up")}},{key:"render",value:function(){var e=this,t=this.state.list.map((function(t){return Object(h.jsx)(v,{clicked:e.state.clicked,src:t[0],name:t[1],id:t[2],clickHandler:e.clickHandler},t[2])}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"poke-container",children:t})]})}}]),n}(s.Component),k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).lvlHandler=function(t){"Up"===t?e.setState((function(e){return{level:e.level+1,render:!1}}),(function(){e.setState({render:!0})})):e.setState((function(e){return{level:1,render:!1}}),(function(){e.setState({render:!0})}))},e.scoreHandler=function(t){"inc"===t?e.setState((function(e){return{score:e.score+1}}),(function(){e.state.score>e.state.best&&e.setState({best:e.state.score},(function(){return localStorage.setItem("Best",e.state.best)}))})):e.setState({score:0})},e.state={level:1,render:!0,score:0,best:localStorage.getItem("Best")?localStorage.getItem("Best"):0},e.lvlHandler=e.lvlHandler.bind(Object(o.a)(e)),e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{score:this.state.score,best:this.state.best}),this.state.render?Object(h.jsx)(O,{level:this.state.level,lvlHandler:this.lvlHandler,scoreHandler:this.scoreHandler}):null]})}}]),n}(s.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),m()}},[[19,1,2]]]);
//# sourceMappingURL=main.c30b762d.chunk.js.map