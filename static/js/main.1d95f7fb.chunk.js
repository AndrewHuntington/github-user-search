(this["webpackJsonpgithub-user-search-app"]=this["webpackJsonpgithub-user-search-app"]||[]).push([[0],{31:function(e,c,a){},54:function(e,c,a){},56:function(e,c,a){},57:function(e,c,a){},58:function(e,c,a){},59:function(e,c,a){},60:function(e,c,a){},61:function(e,c,a){},62:function(e,c,a){},63:function(e,c,a){"use strict";a.r(c);var t=a(1),s=a.n(t),n=a(23),i=a.n(n),o=(a(31),a(3)),r=a(26),l=a(13),d=a(25),j=a.p+"static/media/icon-search.0cc0c984.svg",b=(a(54),a(0));function m(e){var c=e.setUsername,a=e.isDarkMode,s=e.error,n=Object(d.a)(),i=n.register,r=n.handleSubmit,m=(n.reset,Object(t.useState)(!0)),u=Object(o.a)(m,2),h=u[0],O=u[1],p=Object(t.useState)(!1),x=Object(o.a)(p,2),f=x[0],v=x[1],N=function(){var e=document.querySelector("button");(null===e||void 0===e?void 0:e.classList.contains("opaque"))&&f?null===e||void 0===e||e.classList.remove("opaque"):null===e||void 0===e||e.classList.add("opaque")};return Object(b.jsx)("form",{onSubmit:r((function(e){c(e.userSearch)})),children:Object(b.jsxs)("div",{className:"Input-container ".concat(a&&"semi-dark"),children:[Object(b.jsxs)("div",{className:"Input-search-container",onMouseEnter:N,onMouseLeave:N,children:[Object(b.jsx)("img",{src:j,alt:"magnifying glass"}),Object(b.jsx)("input",Object(l.a)(Object(l.a)({className:"".concat(a&&"semi-dark"),type:"text"},i("userSearch")),{},{placeholder:"Search GitHub username\u2026",onFocus:function(){O(!0),v(!1)},onBlur:function(){O(!1),v(!0)},autoFocus:!0})),s&&Object(b.jsx)("div",{className:"Input-error-msg"})]}),Object(b.jsx)("button",{type:"submit",className:h?"opaque":"",children:"Search"})]})})}a(56);function u(e){var c=e.login,a=e.avatar_url,t=e.name,s=e.created_at,n=e.isDarkMode;return Object(b.jsxs)("header",{className:"InfoDisplayHeader",children:[Object(b.jsx)("div",{className:"InfoDisplayHeader-col-1",children:Object(b.jsx)("img",{className:"InfoDisplayHeader-img",src:a,alt:""})}),Object(b.jsxs)("div",{className:"InfoDisplayHeader-col-2",children:[Object(b.jsxs)("div",{className:"InfoDisplayHeader-col-2-sub-col-1",children:[Object(b.jsx)("h1",{className:"InfoDisplayHeader-name",children:t||c}),Object(b.jsxs)("h3",{className:"InfoDisplayHeader-login",children:["@",c]})]}),Object(b.jsx)("div",{className:"InfoDisplayHeader-col-2-sub-col-2",children:Object(b.jsxs)("p",{className:"InfoDisplayHeader-date ".concat(n&&"semi-dark"),children:["Joined ",function(e){if(!e)return"Not Available";var c=e.slice(0,e.indexOf("T")).split("-"),a=Object(o.a)(c,3),t=a[0],s=a[1],n=a[2];return s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(s)-1],"".concat(n," ").concat(s," ").concat(t)}(s)]})})]})]})}a(57);function h(e){var c=e.bio,a=e.public_repos,t=e.followers,s=e.following,n=e.isDarkMode;return Object(b.jsxs)("div",{className:"InfoDisplayBody",children:[Object(b.jsx)("div",{className:"InfoDisplayBody-bio",children:c?Object(b.jsx)("p",{children:c}):Object(b.jsx)("p",{className:"transparent",children:"This profile has no bio"})}),Object(b.jsx)("div",{className:"InfoDisplayBody-stat-block && ".concat(n&&"dark"),children:Object(b.jsxs)("div",{className:"InfoDisplayBody-columns",children:[Object(b.jsxs)("div",{className:"col-1",children:[Object(b.jsx)("div",{className:"stat-block-title",children:Object(b.jsx)("h4",{children:"Repos"})}),Object(b.jsx)("div",{className:"stat-block-value",children:Object(b.jsx)("h2",{children:a})})]}),Object(b.jsxs)("div",{className:"col-2",children:[Object(b.jsx)("div",{className:"stat-block-title",children:Object(b.jsx)("h4",{children:"Followers"})}),Object(b.jsx)("div",{className:"stat-block-value",children:Object(b.jsx)("h2",{children:t})})]}),Object(b.jsxs)("div",{className:"col-3",children:[Object(b.jsx)("div",{className:"stat-block-title",children:Object(b.jsx)("h4",{children:"Following"})}),Object(b.jsx)("div",{className:"stat-block-value",children:Object(b.jsx)("h2",{children:s})})]})]})})]})}a(58),a(59);function O(e){var c=e.location,a=e.blog,t=e.twitter_username,s=e.company,n=e.isDarkMode;return Object(b.jsxs)("div",{className:"InfoDisplayBottom",children:[Object(b.jsxs)("div",{className:"InfoDisplayBottom-col-1",children:[Object(b.jsxs)("div",{className:"InfoDisplayBottom-line ".concat(c?"":"transparent"),children:[Object(b.jsx)("div",{className:"icon loc-icon ".concat(n&&"icon-dark")}),Object(b.jsx)("p",{children:c||"Not Available"})]}),Object(b.jsx)("a",{className:"InfoDisplayBottom-link ".concat(n&&"semi-dark","  ").concat(a?"":"inactive"),href:"http://".concat(a),target:"_blank",rel:"noopener noreferrer",children:Object(b.jsxs)("div",{className:"InfoDisplayBottom-line ".concat(a?"":"transparent"),children:[Object(b.jsx)("div",{className:"icon link-icon ".concat(n&&"icon-dark")}),Object(b.jsx)("p",{children:a||"Not Available"})]})})]}),Object(b.jsxs)("div",{className:"InfoDisplayBottom-col-2",children:[Object(b.jsx)("a",{className:"InfoDisplayBottom-link ".concat(n&&"semi-dark"," ").concat(t?"":"inactive"),href:"https://twitter.com/".concat(t),target:"_blank",rel:"noopener noreferrer",children:Object(b.jsxs)("div",{className:"InfoDisplayBottom-line ".concat(t?"":"transparent"),children:[Object(b.jsx)("div",{className:"icon twitter-icon ".concat(n&&"icon-dark")}),Object(b.jsx)("p",{children:t||"Not Available"})]})}),Object(b.jsx)("a",{className:"InfoDisplayBottom-link ".concat(n&&"semi-dark"," ").concat(s?"":"inactive"),href:"https://github.com/".concat(null===s||void 0===s?void 0:s.slice(1,s.length)),target:"_blank",rel:"noopener noreferrer",children:Object(b.jsxs)("div",{className:"InfoDisplayBottom-line ".concat(s?"":"transparent"),children:[Object(b.jsx)("div",{className:"icon company-icon ".concat(n&&"icon-dark")}),Object(b.jsx)("p",{children:s||"Not Available"})]})})]})]})}a(60);function p(e){var c=e.data,a=e.loading,t=e.error,s=e.isDarkMode;return a?Object(b.jsx)("p",{children:"Loading..."}):t?Object(b.jsx)("p",{}):Object(b.jsxs)("div",{className:"InfoDisplay ".concat(s&&"semi-dark"),children:[Object(b.jsx)(u,{name:c.name,login:c.login,created_at:c.created_at,avatar_url:c.avatar_url,isDarkMode:s}),Object(b.jsxs)("div",{className:"InfoDisplay-desktop-helper",children:[Object(b.jsx)(h,{bio:c.bio,public_repos:c.public_repos,followers:c.followers,following:c.following,isDarkMode:s}),Object(b.jsx)(O,{location:c.location,blog:c.blog,twitter_username:c.twitter_username,company:c.company,isDarkMode:s})]})]})}var x=a.p+"static/media/icon-moon.cce754ce.svg",f=a.p+"static/media/icon-sun.f28a8996.svg";a(61);function v(e){var c=e.isDarkMode,a=e.setDarkMode;return Object(b.jsxs)("header",{className:"Header",children:[Object(b.jsx)("h1",{className:"Header-title ".concat(c&&"dark"),children:"devfinder"}),Object(b.jsx)("div",{className:"Header-toggle ".concat(c&&"reverse-trans-effect"),onClick:function(){return a(!c)},children:c?Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("span",{className:"dark",children:"LIGHT"})," ",Object(b.jsx)("img",{src:f,alt:"sun"})," "]}):Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("span",{children:"DARK"})," ",Object(b.jsx)("img",{src:x,alt:"moon"})," "]})})]})}a(62);var N=window.matchMedia("(prefers-color-scheme: dark)").matches;var g=function(){var e=Object(t.useState)("octocat"),c=Object(o.a)(e,2),a=c[0],s=c[1],n=Object(t.useState)(!1),i=Object(o.a)(n,2),l=i[0],d=i[1],j=Object(r.a)("".concat("https://api.github.com/users/").concat(a)),u=Object(o.a)(j,1)[0],h=u.data,O=u.loading,x=u.error,f=Object(t.useRef)(!0);return Object(t.useEffect)((function(){if(f.current)return f.current=!1,void d(!!N);document.body.classList.toggle("dark",l)}),[l]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(v,{isDarkMode:l,setDarkMode:d}),Object(b.jsx)(m,{setUsername:s,isDarkMode:l,error:x}),Object(b.jsx)(p,{isDarkMode:l,data:h,loading:O,error:x})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(c){var a=c.getCLS,t=c.getFID,s=c.getFCP,n=c.getLCP,i=c.getTTFB;a(e),t(e),s(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),k()}},[[63,1,2]]]);
//# sourceMappingURL=main.1d95f7fb.chunk.js.map