(this.webpackJsonpblogspot=this.webpackJsonpblogspot||[]).push([[0],{21:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),l=c.n(n),s=c(14),a=c.n(s),j=(c(21),c(7)),i=c(0),o=function(){return Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("h1",{children:"The Rahul`s Blog"}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)(j.b,{to:"/",children:"Home"}),Object(i.jsx)(j.b,{to:"/create",className:"newBlog",children:"New Blog"})]})]})},r=c(9),b=function(e){var t=e.blogs,c=e.title;return Object(i.jsxs)("div",{className:"blog-list",children:[Object(i.jsxs)("h2",{children:[c,"!"]}),t.map((function(e,t){return Object(i.jsx)("div",{className:"blog-preview",children:Object(i.jsxs)(j.b,{to:"/blogs/".concat(e.id),children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))]})},h=function(){var e=l.a.useState(null),t=Object(r.a)(e,2),c=t[0],n=t[1];return l.a.useEffect((function(){fetch("http://localhost:8000/blogs").then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.log(e.massage)}))}),[]),Object(i.jsx)("div",{className:"home",children:c?Object(i.jsx)(b,{blogs:c,title:"All Blogs"}):Object(i.jsx)("p",{children:"LoadingData..."})})},d=c(2),u=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],l=t[1],s=Object(n.useState)(""),a=Object(r.a)(s,2),j=a[0],o=a[1],b=Object(n.useState)("Rahul"),h=Object(r.a)(b,2),u=h[0],O=h[1],x=Object(d.f)();return Object(i.jsxs)("div",{className:"create",children:[Object(i.jsx)("h2",{children:"Add a new Blog"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:j,author:u};fetch("http://localhost:8000/blogs",{mathod:"POST",header:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("New blog added")})),x.push("/")},children:[Object(i.jsx)("label",{children:"Blog title:"}),Object(i.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return l(e.target.value)}}),Object(i.jsx)("label",{children:"Blog body:"}),Object(i.jsx)("textarea",{required:!0,value:j,onChange:function(e){return o(e.target.value)}}),Object(i.jsx)("label",{children:"Blog author:"}),Object(i.jsxs)("select",{value:u,onChange:function(e){return O(e.target.value)},children:[Object(i.jsx)("option",{value:"Rahul",children:"Rahul"}),Object(i.jsx)("option",{value:"Rohit",children:"Rohit"})]}),Object(i.jsx)("button",{children:"Add Blog"})]})]})},O=function(){var e=Object(d.g)().id,t=Object(d.f)();return Object(i.jsxs)("div",{className:"blog-detail",children:[Object(i.jsxs)("h2",{children:["BlogDetail-",e]}),Object(i.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs"+e,{method:"DELETE"}).then((function(e){t.push("/")}))},children:"delete"})]})};var x=function(){return Object(i.jsx)(j.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)(d.c,{children:Object(i.jsx)(d.a,{exact:!0,path:"/",children:Object(i.jsx)(h,{})})}),Object(i.jsx)(d.c,{children:Object(i.jsx)(d.a,{path:"/create",children:Object(i.jsx)(u,{})})}),Object(i.jsx)(d.c,{children:Object(i.jsx)(d.a,{path:"/blogs/:id",children:Object(i.jsx)(O,{})})})]})]})})};a.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.0c15155e.chunk.js.map