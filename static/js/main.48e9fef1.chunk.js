(this["webpackJsonpmain-spa"]=this["webpackJsonpmain-spa"]||[]).push([[0],{15:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(16),a=n.n(r),i=(n(28),n(15),n(8)),s=n.p+"static/media/logo.46fcc523.png",l=(n(29),n(1)),d=function(){return Object(l.jsxs)("header",{className:"MainSpa-header",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:s,className:"logo",alt:"logo"}),Object(l.jsx)("h1",{children:"Main SPA"})]}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ol",{className:"center-column",children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/main-spa",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/main-spa/micro-x",children:"Micro App X"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/main-spa/micro-y",children:"Micro App Y"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/main-spa/about",children:"About"})})]})})]})},p=n(3),h=n.p+"static/media/triunfador.9629e99e.jpg",m=function(){return document.title="Main SPA | Home",Object(l.jsx)("div",{children:Object(l.jsxs)("header",{className:"Home-header",children:[Object(l.jsx)("img",{src:"".concat(h),className:"App-logo",alt:"logo"}),Object(l.jsxs)("p",{children:["Edit ",Object(l.jsx)("code",{children:"src/pages/Home.tsx"})," and save to reload."]}),Object(l.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(l.jsx)("a",{className:"App-link",href:"https://martinfowler.com/articles/micro-frontends.html",target:"_blank",rel:"noopener noreferrer",children:"...and Micro-Frontends Concepts!"})]})})},j=function(){return document.title="Main SPA | About",Object(l.jsx)("main",{className:"About-main",children:Object(l.jsxs)("div",{className:"About-container",children:[Object(l.jsx)("h2",{children:"About this site"}),Object(l.jsxs)("p",{children:["Main SPA was created by"," ",Object(l.jsx)("a",{className:"App-link",href:"https://www.linkedin.com/in/gabrielcerutti/",children:"Gabriel Cerutti"})," ","to demonstrate just one way that micro frontends can be implemented. Inspired by"," ",Object(l.jsx)("a",{className:"App-link",href:"https://twitter.com/thecamjackson",children:"Cam Jackson"})," ","demo, check out the"," ",Object(l.jsx)("a",{className:"App-link",href:"https://martinfowler.com/articles/micro-frontends.html",children:"long-form article that Cam wrote for martinfowler.com"}),"."]}),Object(l.jsx)("p",{children:"Micro frontends is an architectural style where independently deliverable frontend applications are composed into a greater whole. It's useful for breaking up monolithic frontend codebases into smaller, simpler applications that can be delivered to production by multiple teams independently."}),Object(l.jsxs)("p",{children:["If you just want to read the source code for yourself, it's all available on Github at"," ",Object(l.jsx)("a",{className:"App-link",href:"https://github.com/gabrielcerutti/main-spa",children:"https://github.com/gabrielcerutti/main-spa"}),"."]}),Object(l.jsxs)("p",{children:["Also, check out the CRA microfrontend-typescript template, it's available on npm registry at"," ",Object(l.jsx)("a",{className:"App-link",href:"https://www.npmjs.com/package/cra-template-microfrontend-typescript",children:"https://www.npmjs.com/package/cra-template-microfrontend-typescript"}),"."]})]})})},u=n(7),b=n(17),f=n(18),O=n(21),x=n(20),g=n(49),v=n(50),y=n(51),w=n(13);function k(e){var t=new URL(e),n=""!==t.port?":"+t.port:"";return"".concat(t.protocol,"//").concat(t.hostname).concat(n)}var A=Object(y.a)((function(){return{loading:{margin:"0",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},loadingIndicator:{color:"#282c34"},error:{margin:"0",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),M=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var o;return Object(b.a)(this,n),(o=t.call(this,e)).renderMicroFrontend=function(){o.setState(Object(u.a)(Object(u.a)({},o.state),{},{status:"done"}))},document.title="Main SPA | "+e.name,o.state={status:"loading"},o}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.id,o=t.host,c=t.document,r=k(o);console.log("Host is ".concat(r));var a="micro-frontend-script-".concat(n);if(this.setState(Object(u.a)({},this.state)),c.getElementById(a))this.renderMicroFrontend();else if("not-optimized"===this.props.loadType)fetch("".concat(o,"/asset-manifest.json")).then((function(e){return e.json()})).then((function(t){var n=c.createElement("script");n.id=a,n.crossOrigin="",n.src="".concat(r).concat(t.files["main.js"]),n.onload=e.renderMicroFrontend,c.head.appendChild(n);var o=c.createElement("link");o.rel="stylesheet",o.href="".concat(r).concat(t.files["main.css"]),c.head.appendChild(o)})).catch((function(t){console.error("Error loading micro-frontend ".concat(n," - ").concat(t.message)),e.setState(Object(u.a)(Object(u.a)({},e.state),{},{status:"error"}))}));else if("optimized"===this.props.loadType)fetch("".concat(o,"/asset-manifest.json")).then((function(e){return e.json()})).then((function(t){var n=-1;Object.keys(t.files).filter((function(e){return e.endsWith(".js")})).forEach((function(o,i,s){n<0&&(n=s.length);var l="".concat(r).concat(t.files[o]),d=c.createElement("script");"main.js"===o&&(d.id=a),d.onload=function(){0===--n&&e.renderMicroFrontend()},d.src=l,c.head.appendChild(d)}))})).catch((function(t){console.error("Error loading micro-frontend ".concat(n," - ").concat(t.message)),e.setState(Object(u.a)(Object(u.a)({},e.state),{},{status:"error"}))}));else{if("bundle"!==this.props.loadType)throw new Error("You must define a loadType.");var i=c.createElement("script");i.id=a,i.src=o,c.body.appendChild(i),i.onload=this.renderMicroFrontend}}},{key:"componentDidUpdate",value:function(){if("done"===this.state.status){var e=this.props,t=e.microId,n=e.window,o=e.history,c=e.basePath,r=k(e.host);console.log("Host is ".concat(r)),"regular"===this.props.buildMode?n["render".concat(t)]("".concat(t,"-container"),o,{basePath:c,host:r}):n[t].render("".concat(t,"-container"),o,{basePath:c,host:r})}}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.microId,n=e.window,o="micro-frontend-script-".concat(t),c=document.getElementById(o);c&&c.removeEventListener("load",this.renderMicroFrontend),"regular"===this.props.buildMode?n["unmount".concat(t)]&&n["unmount".concat(t)]("".concat(t,"-container")):n[t]&&n[t].unMount("".concat(t,"-container"))}},{key:"shouldComponentUpdate",value:function(e,t){return t.status!==this.state.status}},{key:"render",value:function(){var e=this.props.classes;return"loading"===this.state.status?Object(l.jsx)("div",{className:e.loading,children:Object(l.jsx)(g.a,{className:e.loadingIndicator})}):"done"===this.state.status?Object(l.jsx)("main",{id:"".concat(this.props.microId,"-container")}):"error"===this.state.status?Object(l.jsx)("div",{className:e.error,children:Object(l.jsx)(v.a,{variant:"overline",display:"block",gutterBottom:!0,children:"Oops! An error occurred loading the micro-app, please refresh the page."})}):Object(l.jsx)("div",{className:e.error,children:Object(l.jsx)(v.a,{variant:"overline",display:"block",gutterBottom:!0,children:"Oops!An unexpected error occurred, please try refreshing the page."})})}}]),n}(c.a.Component);M.defaultProps={document:document,window:window,buildMode:"library"};var N,C,E=Object(w.a)(A)(M),I=null!==(N="https://gabrielcerutti.github.io/micro-frontend-x")?N:"",P=null!==(C="http://localhost:5000")?C:"",S=function(){return Object(l.jsx)(E,{id:1,name:"Micro-frontend A",microId:"MicroAppX",host:I,basePath:"main-spa/micro-x",loadType:"not-optimized",buildMode:"library"})},F=function(){return Object(l.jsx)(E,{id:2,name:"Micro-frontend B",microId:"MicroAppX",host:P,basePath:"main-spa/micro-y",loadType:"not-optimized",buildMode:"library"})};var T=function(){return console.log("Environment is ".concat("production")),console.log("Public URL is ".concat("/main-spa")),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(p.c,{basename:"/main-spa",children:[Object(l.jsx)(p.a,{path:"/about",element:Object(l.jsx)(j,{})}),Object(l.jsx)(p.a,{path:"/micro-x",element:Object(l.jsx)(S,{})}),Object(l.jsx)(p.a,{path:"/micro-y",element:Object(l.jsx)(F,{})}),Object(l.jsx)(p.a,{path:"/*",element:Object(l.jsx)(m,{})})]})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),B()}},[[35,1,2]]]);
//# sourceMappingURL=main.48e9fef1.chunk.js.map