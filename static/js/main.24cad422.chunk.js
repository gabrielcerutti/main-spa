(this["webpackJsonpmain-spa"]=this["webpackJsonpmain-spa"]||[]).push([[0],{15:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(16),a=n.n(o),i=(n(28),n(15),n(8)),s=n.p+"static/media/logo_triunfador.2f042067.jpg",l=(n(29),n(1)),d=function(){return Object(l.jsxs)("header",{className:"MainSpa-header",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:s,className:"logo",alt:"logo"}),Object(l.jsx)("h1",{children:"Main SPA"})]}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ol",{className:"center-column",children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/main-spa",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/main-spa/micro-x",children:"Micro App X"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/main-spa/micro-y",children:"Micro App Y"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/main-spa/about",children:"About"})})]})})]})},h=n(3),p=n.p+"static/media/triunfador.9629e99e.jpg",m=function(){return document.title="Main SPA | Home",Object(l.jsx)("div",{children:Object(l.jsxs)("header",{className:"Home-header",children:[Object(l.jsx)("a",{href:"https://open.spotify.com/album/26vh26M3hPs7BMelYSQ6iH?si=p0WL7xmcRMyHs_bswRhp9Q&dl_branch=1",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{src:p,className:"Home-logo",alt:"logo"})}),Object(l.jsxs)("p",{children:["Edit ",Object(l.jsx)("code",{children:"src/pages/Home.tsx"})," and save to reload."]}),Object(l.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(l.jsx)("a",{className:"App-link",href:"https://martinfowler.com/articles/micro-frontends.html",target:"_blank",rel:"noopener noreferrer",children:"And Micro-Frontends Concepts!"})]})})},j=function(){return document.title="Main SPA | About",Object(l.jsx)("main",{className:"About-main",children:Object(l.jsxs)("div",{className:"About-container",children:[Object(l.jsx)("h2",{children:"About this site"}),Object(l.jsxs)("p",{children:["Main SPA was created by"," ",Object(l.jsx)("a",{className:"App-link",href:"https://www.linkedin.com/in/gabrielcerutti/",children:"Gabriel Cerutti"})," ","to demonstrate just one way that micro frontends can be implemented. Inspired by"," ",Object(l.jsx)("a",{className:"App-link",href:"https://twitter.com/thecamjackson",children:"Cam Jackson"})," ","demo, check out the"," ",Object(l.jsx)("a",{className:"App-link",href:"https://martinfowler.com/articles/micro-frontends.html",children:"long-form article that Cam wrote for martinfowler.com"}),"."]}),Object(l.jsx)("p",{children:"Micro frontends is an architectural style where independently deliverable frontend applications are composed into a greater whole. It's useful for breaking up monolithic frontend codebases into smaller, simpler applications that can be delivered to production by multiple teams independently."}),Object(l.jsxs)("p",{children:["If you just want to read the source code for yourself, it's all available on Github at",Object(l.jsxs)("ul",{className:"About-list",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"App-link",href:"https://github.com/gabrielcerutti/main-spa",children:"https://github.com/gabrielcerutti/main-spa"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"App-link",href:"https://github.com/gabrielcerutti/micro-frontend-x",children:"https://github.com/gabrielcerutti/micro-frontend-x"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"App-link",href:"https://github.com/gabrielcerutti/micro-frontend-y",children:"https://github.com/gabrielcerutti/micro-frontend-y"})})]})]}),Object(l.jsxs)("p",{children:["Also, check out the CRA microfrontend-typescript template, it's available on npm registry at"," ",Object(l.jsx)("a",{className:"App-link",href:"https://www.npmjs.com/package/cra-template-microfrontend-typescript",children:"https://www.npmjs.com/package/cra-template-microfrontend-typescript"}),"."]})]})})},u=n(7),b=n(17),f=n(18),O=n(21),x=n(20),g=n(49),y=n(50),v=n(51),w=n(13);function M(e){var t=new URL(e),n=""!==t.port?":"+t.port:"";return"".concat(t.protocol,"//").concat(t.hostname).concat(n)}var k=Object(v.a)((function(){return{loading:{margin:"0",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},loadingIndicator:{color:"#282c34"},error:{margin:"0",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),A=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).renderMicroFrontend=function(){r.setState(Object(u.a)(Object(u.a)({},r.state),{},{status:"done"}))},document.title="Main SPA | "+e.name,r.state={status:"loading"},r}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.id,r=t.host,c=t.document,o=M(r);console.log("Host is ".concat(o));var a="micro-frontend-script-".concat(n);if(this.setState(Object(u.a)({},this.state)),c.getElementById(a))this.renderMicroFrontend();else if("not-optimized"===this.props.loadType)fetch("".concat(r,"/asset-manifest.json")).then((function(e){return e.json()})).then((function(t){var n=c.createElement("script");n.id=a,n.crossOrigin="",n.src="".concat(o).concat(t.files["main.js"]),n.onload=e.renderMicroFrontend,c.head.appendChild(n);var r=c.createElement("link");r.rel="stylesheet",r.href="".concat(o).concat(t.files["main.css"]),c.head.appendChild(r)})).catch((function(t){console.error("Error loading micro-frontend ".concat(n," - ").concat(t.message)),e.setState(Object(u.a)(Object(u.a)({},e.state),{},{status:"error"}))}));else if("optimized"===this.props.loadType)fetch("".concat(r,"/asset-manifest.json")).then((function(e){return e.json()})).then((function(t){var n=-1;Object.keys(t.files).filter((function(e){return e.endsWith(".js")})).forEach((function(r,i,s){n<0&&(n=s.length);var l="".concat(o).concat(t.files[r]),d=c.createElement("script");"main.js"===r&&(d.id=a),d.onload=function(){0===--n&&e.renderMicroFrontend()},d.src=l,c.head.appendChild(d)}))})).catch((function(t){console.error("Error loading micro-frontend ".concat(n," - ").concat(t.message)),e.setState(Object(u.a)(Object(u.a)({},e.state),{},{status:"error"}))}));else{if("bundle"!==this.props.loadType)throw new Error("You must define a loadType.");var i=c.createElement("script");i.id=a,i.src=r,c.body.appendChild(i),i.onload=this.renderMicroFrontend}}},{key:"componentDidUpdate",value:function(){if("done"===this.state.status){var e=this.props,t=e.microId,n=e.window,r=e.history,c=e.basePath,o=M(e.host);console.log("Host is ".concat(o)),"regular"===this.props.buildMode?n["render".concat(t)]("".concat(t,"-container"),r,{basePath:c,host:o}):n[t].render("".concat(t,"-container"),r,{basePath:c,host:o})}}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.microId,n=e.window,r="micro-frontend-script-".concat(t),c=document.getElementById(r);c&&c.removeEventListener("load",this.renderMicroFrontend),"regular"===this.props.buildMode?n["unmount".concat(t)]&&n["unmount".concat(t)]("".concat(t,"-container")):n[t]&&n[t].unMount("".concat(t,"-container"))}},{key:"shouldComponentUpdate",value:function(e,t){return t.status!==this.state.status}},{key:"render",value:function(){var e=this.props.classes;return"loading"===this.state.status?Object(l.jsx)("div",{className:e.loading,children:Object(l.jsx)(g.a,{className:e.loadingIndicator})}):"done"===this.state.status?Object(l.jsx)("main",{id:"".concat(this.props.microId,"-container")}):"error"===this.state.status?Object(l.jsx)("div",{className:e.error,children:Object(l.jsx)(y.a,{variant:"overline",display:"block",gutterBottom:!0,children:"Oops! An error occurred loading the micro-app, please refresh the page."})}):Object(l.jsx)("div",{className:e.error,children:Object(l.jsx)(y.a,{variant:"overline",display:"block",gutterBottom:!0,children:"Oops!An unexpected error occurred, please try refreshing the page."})})}}]),n}(c.a.Component);A.defaultProps={document:document,window:window,buildMode:"library"};var N,P,C=Object(w.a)(k)(A),E=null!==(N="https://gabrielcerutti.github.io/micro-frontend-x")?N:"",I=null!==(P="http://localhost:4000/micro-frontend-y")?P:"",S=function(){return Object(l.jsx)(C,{id:1,name:"Micro-frontend A",microId:"MicroAppX",host:E,basePath:"main-spa/micro-x",loadType:"not-optimized",buildMode:"library"})},F=function(){return Object(l.jsx)(C,{id:2,name:"Micro-frontend B",microId:"MicroAppY",host:I,basePath:"main-spa/micro-y",loadType:"not-optimized",buildMode:"library"})};var H=function(){return console.log("Environment is ".concat("production")),console.log("Public URL is ".concat("/main-spa")),Object(l.jsx)("div",{className:"Main-Spa",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(h.c,{basename:"/main-spa",children:[Object(l.jsx)(h.a,{path:"/about",element:Object(l.jsx)(j,{})}),Object(l.jsx)(h.a,{path:"/micro-x",element:Object(l.jsx)(S,{})}),Object(l.jsx)(h.a,{path:"/micro-y",element:Object(l.jsx)(F,{})}),Object(l.jsx)(h.a,{path:"/*",element:Object(l.jsx)(m,{})})]})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(H,{})}),document.getElementById("root")),B()}},[[35,1,2]]]);
//# sourceMappingURL=main.24cad422.chunk.js.map