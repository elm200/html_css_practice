(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(30),s=n.n(i),u=(n(94),n(27)),a=n(80),o=function(e){return(t=2,n=e,Object(a.a)(Array(n).keys()).slice(t)).filter((function(e){for(var t=2;t*t<=e;t++)if(e%t===0)return!1;return!0}));var t,n},l=function(e){var t=Object(c.useState)(e),n=Object(u.a)(t,2),r=n[0],i=n[1],s=Object(c.useMemo)((function(){return o(e)}),[e]),a=Object(c.useRef)(),l=function(){return i((function(e){return e-1}))},j=function(){a.current&&clearInterval(a.current)},b=Object(c.useCallback)((function(){j(),a.current=setInterval(l,1e3),i(e)}),[e]);return Object(c.useEffect)((function(){return b(),j}),[b]),Object(c.useEffect)((function(){0===r&&b()}),[r,b]),[r,s.includes(r),b]},j=n(119),b=n(122),d=n(120),f=n(46),O=(n(95),n(4)),m=function(e){var t=e.limit,n=void 0===t?60:t,c=e.timeLeft,r=void 0===c?0:c,i=e.isPrime,s=void 0!==i&&i,u=e.reset,a=void 0===u?function(){}:u;return Object(O.jsxs)(j.a,{children:[Object(O.jsxs)("div",{className:"ui two statistics",children:[Object(O.jsxs)(b.a,{className:"number-board",children:[Object(O.jsx)(b.a.Label,{children:"limit"}),Object(O.jsx)(b.a.Value,{children:n})]}),Object(O.jsxs)(b.a,{className:"number-board",children:[Object(O.jsx)(b.a.Label,{children:"time"}),Object(O.jsx)(b.a.Value,{className:s?"prime-number":void 0,children:r})]})]}),Object(O.jsx)(j.a.Content,{children:Object(O.jsxs)(d.a,{color:"red",fluid:!0,onClick:a,children:[Object(O.jsx)(f.a,{name:"redo"}),"Reset"]})})]})},h=function(e){var t=e.limit,n=l(t),c=Object(u.a)(n,3),r=c[0],i=c[1],s=c[2];return Object(O.jsx)(m,{limit:t,timeLeft:r,isPrime:i,reset:s})},x=(n(103),function(e){var t=e.title,n=void 0===t?"count":t,r=e.initialCount,i=void 0===r?0:r,s=e.countObserver,a=void 0===s?function(e){return console.log(e)}:s,o=Object(c.useState)(i),l=Object(u.a)(o,2),f=l[0],m=l[1];return Object(O.jsxs)(j.a,{children:[Object(O.jsxs)(b.a,{className:"number-board",children:[Object(O.jsx)(b.a.Label,{children:n}),Object(O.jsx)(b.a.Value,{children:f})]}),Object(O.jsx)(j.a.Content,{children:Object(O.jsxs)("div",{className:"ui three buttons",children:[Object(O.jsx)(d.a,{color:"red",onClick:function(){return a(f)},children:"Set"}),Object(O.jsx)(d.a,{color:"green",onClick:function(){return m((function(e){return e+1}))},children:"+1"}),Object(O.jsx)(d.a,{color:"blue",onClick:function(){return m((function(e){return e>=1?e-1:0}))},children:"-1"})]})})]})}),v=(n(104),function(){var e=Object(c.useState)(60),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{className:"container wrapper",children:[Object(O.jsx)(x,{title:"limit",initialCount:n,countObserver:function(e){r(e)}}),Object(O.jsx)(h,{limit:n})]})}),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};n(105);s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),p()},94:function(e,t,n){},95:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.9d253d2e.chunk.js.map