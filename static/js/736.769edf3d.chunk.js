"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var t,a,u,c,s=r(5861),i=r(9439),o=r(4687),p=r.n(o),f=r(1362),l=r(2791),d=r(7689),h=r(9818),g=r(168),v=r(5706),m=v.Z.ul(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-left: 25px;\n"]))),x=v.Z.li(a||(a=(0,g.Z)(["\n  width: 200px;\n  background-color: #fde2f3;\n  border-radius: 7px;\n  overflow: hidden;\n"]))),w=v.Z.div(u||(u=(0,g.Z)(["\n  padding: 10px;\n"]))),Z=v.Z.p(c||(c=(0,g.Z)(["\n  margin-bottom: 3px;\n  font-size: 18px;\n  font-weight: 500;\n"]))),k=r(184),b=function(){var n=(0,d.UO)().movieId,e=(0,l.useState)([]),r=(0,i.Z)(e,2),t=r[0],a=r[1],u=(0,l.useState)(!1),c=(0,i.Z)(u,2),o=c[0],g=c[1],v=(0,l.useState)(null),b=(0,i.Z)(v,2),y=b[0],_=b[1],j=(0,l.useRef)();return(0,l.useEffect)((function(){var e=function(){var e=(0,s.Z)(p().mark((function e(){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.current&&j.current.abort(),j.current=new AbortController,e.prev=2,g(!0),_(null),e.next=7,(0,h.IQ)(n,j.current.signal);case 7:r=e.sent,a(r),_(null),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),"ERR_CANCELED"!==e.t0.code&&_(e.t0.message);case 15:return e.prev=15,g(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,k.jsxs)(k.Fragment,{children:[o&&(0,k.jsx)(f.Z,{}),y&&(0,k.jsx)("p",{children:y}),(0,k.jsx)(m,{children:t.map((function(n){var e=n.id,r=n.profile_path,t=n.original_name,a=n.name,u=n.character;return(0,k.jsxs)(x,{children:[(0,k.jsx)("img",{width:"200px",src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://placehold.jp/200x300.png",alt:t}),(0,k.jsxs)(w,{children:[(0,k.jsx)(Z,{children:a}),(0,k.jsxs)("p",{children:["Character: ",u]})]})]},e)}))})]})}},9818:function(n,e,r){r.d(e,{Hg:function(){return i},IQ:function(){return f},Jh:function(){return l},TP:function(){return p},Wf:function(){return o}});var t=r(5861),a=r(4687),u=r.n(a),c=r(1243),s="8e3d28baa799955af466d58215154f9d";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day",{signal:e,params:{api_key:s,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{signal:r,params:{api_key:s,language:"en-US",query:e,include_adult:!1,page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e),{signal:r,params:{api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits"),{signal:r,params:{api_key:s,language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews"),{signal:r,params:{api_key:s,language:"en-US",page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.769edf3d.chunk.js.map