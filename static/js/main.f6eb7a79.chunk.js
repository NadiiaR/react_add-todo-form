(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),s=(a(9),a(1)),r=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function l(e){return r.find((t=>t.id===e))||null}var o=a(0);const d=e=>{let{onSubmit:t}=e;const[a,n]=Object(s.useState)(""),[i,d]=Object(s.useState)(!1),[c,m]=Object(s.useState)(0),[u,h]=Object(s.useState)(!1),j=()=>{n(""),m(0),d(!1),h(!1)};return Object(o.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:e=>{e.preventDefault(),d(!a),h(!c),a&&c&&(t({id:0,title:a,userId:c,completed:!1,user:l(c)}),j())},onReset:j,children:[Object(o.jsx)("label",{className:"field",htmlFor:"todo-title",children:"Title:\xa0\xa0"}),Object(o.jsx)("input",{id:"todo-title",type:"text","data-cy":"titleInput",placeholder:"Add title here",defaultValue:a,onChange:e=>{n(e.target.value),d(!1)},onBlur:()=>{d(!a)}}),i&&Object(o.jsx)("span",{className:"error",children:"Please enter a title"}),Object(o.jsx)("div",{className:"field",children:Object(o.jsxs)("label",{htmlFor:"user-id",children:["User:\xa0\xa0",Object(o.jsxs)("select",{"data-cy":"userSelect",required:!0,defaultValue:c,onChange:e=>{m(+e.target.value),h(!1)},children:[Object(o.jsx)("option",{value:"0",children:"Choose a user"}),r.map((e=>Object(o.jsx)("option",{value:e.id,children:e.name},e.id)))]}),u&&Object(o.jsx)("span",{className:"error",children:"Please choose a user"})]})}),Object(o.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})};var c=a(4),m=a.n(c);const u=e=>{let{todos:t}=e;return Object(o.jsx)("section",{className:"TodoList",children:t.map((e=>{var t,a;return Object(o.jsxs)("article",{"data-id":e.id,className:m()("TodoInfo",{"TodoInfo--completed":e.completed}),children:[Object(o.jsx)("h2",{className:"TodoInfo__title",children:e.title}),Object(o.jsx)("a",{className:"UserInfo",href:null===(t=e.user)||void 0===t?void 0:t.email,children:null===(a=e.user)||void 0===a?void 0:a.name})]})}))})},h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((e=>({...e,user:l(e.userId)})));function j(e){return Math.max(...e.map((e=>e.id)))+1}const b=()=>{const[e,t]=Object(s.useState)(h);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Add todo form"}),Object(o.jsx)(d,{onSubmit:a=>{const n={...a,id:j(e)};t((e=>[n,...e]))}}),Object(o.jsx)(u,{todos:e})]})};i.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.f6eb7a79.chunk.js.map