(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,n){e.exports=n(47)},24:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(11),r=n.n(l),c=(n(24),n(3)),i=n.n(c),s=n(12),u=n(13),d=n(16),m=n(14),p=n(17),f=n(15),g=n.n(f),v=(n(27),n(4)),h=n.n(v),E=new Map,w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=Object(s.a)(i.a.mark(function e(){var t,a,o,l,r,c,s,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.setState({isLoading:!0}),e.next=4,h.a.get("http://localhost:1337/content");case 4:return t=e.sent,a=t.data.content,e.next=8,h.a.get("http://localhost:1337/streamers");case 8:for(o=e.sent,l=o.data.streamers,r=0;r<l.length;r++)c=l[r].role.toLowerCase(),s=l[r].name.toLowerCase(),E.has(c)?(u=E.get(c).add(s),E.set(c,u)):E.set(c,new Set([s]));n.setState({fullContent:a,isLoading:!1}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}},e,null,[[0,14]])})),n.filterByContentType=function(e,t){return"all"===e?t:t.filter(function(t){return t.type===e})},n.filterByRole=function(e,t){return"all"===e?t:t.filter(function(t){return E.get(e).has(t.creatorName.toLowerCase())})},n.render=function(){if(n.state.isLoading)return n.renderLoading();var e=n.state.fullContent,t=n.state.selectedContentType,a=n.state.selectedRole;return e=n.filterByContentType(t,e),e=n.filterByRole(a,e),n.renderResults(e)},n.renderResults=function(e){return o.a.createElement("div",null,o.a.createElement("select",{name:"selectedContentType",value:n.state.selectedContentType,onChange:function(e){n.setState({selectedContentType:e.target.value})}},o.a.createElement("option",{value:"all"},"All"),o.a.createElement("option",{value:"youtube-video"},"Youtube Video"),o.a.createElement("option",{value:"twitch-clip"},"Twitch Clip")),o.a.createElement("select",{name:"selectedRole",value:n.state.selectedRole,onChange:function(e){n.setState({selectedRole:e.target.value})}},o.a.createElement("option",{value:"all"},"All"),o.a.createElement("option",{value:"top"},"top"),o.a.createElement("option",{value:"jg"},"jg"),o.a.createElement("option",{value:"mid"},"mid"),o.a.createElement("option",{value:"adc"},"adc"),o.a.createElement("option",{value:"sup"},"sup")),o.a.createElement("ul",{id:"content_unordered_list"},e.map(function(e){return o.a.createElement("li",{key:e.videoId},o.a.createElement("iframe",{src:e.embedLink,height:"390",width:"640",frameBorder:"10",scrolling:"no"},"allowFullScreen>"),o.a.createElement("h3",null,e.title),o.a.createElement("ul",{id:"content_unordered_list"},o.a.createElement("li",null,"Creator: ",e.creatorName),o.a.createElement("li",null,"Content Type: ",e.type.replace("-"," ")),o.a.createElement("li",null,"Creation Date: ",e.createdAt.split(":")[0])))})))},n.renderLoading=function(){return o.a.createElement("div",{style:{backgroundColor:"#141414"}},o.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}))},n.state={fullContent:[],selectedContentType:"all",selectedRole:"all",isLoading:!1},n}return Object(p.a)(t,e),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.b7a33f81.chunk.js.map