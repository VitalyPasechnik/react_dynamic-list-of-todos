(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(5),n=c.n(s),r=c(2),a=c(1),i=(c(10),c(11),c(4)),o=c.n(i),l=(c(12),c(0)),u=function(e){var t=e.todos,c=e.selectUser,s=e.selectedUserId,n=Object(a.useState)(t),i=Object(r.a)(n,2),u=i[0],d=i[1],j=Object(a.useState)(""),b=Object(r.a)(j,2),h=b[0],O=b[1],f=Object(a.useState)("all"),p=Object(r.a)(f,2),m=p[0],x=p[1];return Object(a.useEffect)((function(){d(function(){switch(m){case"all":default:return t;case"active":return t.filter((function(e){return!e.completed}));case"completed":return t.filter((function(e){return e.completed}))}}().filter((function(e){return e.title.toLocaleLowerCase().includes(h.toLocaleLowerCase())})))}),[h,m,t]),Object(l.jsxs)("div",{className:"TodoList",children:[Object(l.jsx)("h2",{children:"Todos:"}),Object(l.jsxs)("div",{className:"TodoList__sidebar",children:[Object(l.jsx)("input",{type:"text","data-cy":"filterByTitle",className:"input-field",placeholder:"Enter title of the task",value:h,onChange:function(e){return O(e.target.value)}}),Object(l.jsxs)("select",{title:"select",value:m,onChange:function(e){return x(e.target.value)},children:[Object(l.jsx)("option",{value:"all",selected:!0,children:"All"}),Object(l.jsx)("option",{value:"active",children:"Active"}),Object(l.jsx)("option",{value:"completed",children:"Completed"})]})]}),Object(l.jsx)("div",{className:"TodoList__list-container",children:Object(l.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:u.map((function(e){return Object(l.jsxs)("li",{className:o()("TodoList__item",{"TodoList__item--unchecked":!e.completed},"TodoList__item--checked"),children:[Object(l.jsxs)("label",{children:[e.completed?Object(l.jsx)("input",{type:"checkbox",readOnly:!0,checked:!0}):Object(l.jsx)("input",{type:"checkbox",readOnly:!0}),Object(l.jsx)("p",{children:e.title})]}),Object(l.jsxs)("button",{className:o()("TodoList__user-button","button",{"TodoList__user-button--selected":e.userId===s}),"data-cy":"userButton",type:"button",onClick:function(){return c(e.userId)},children:["User\xa0",e.userId]})]},e.id)}))})})]})},d=function(e){return fetch("".concat("https://mate.academy/students-api/").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," ").concat(e.statusText));return e.json()}))},j=(c(14),function(e){var t=e.selectedUserId,c=e.clearUser,s=Object(a.useState)(null),n=Object(r.a)(s,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){var e;(e=t,d("/users/".concat(e))).then((function(e){return o(e)}))}),[t]),Object(l.jsx)(l.Fragment,{children:i&&Object(l.jsxs)("div",{className:"CurrentUser",children:[Object(l.jsx)("button",{type:"button",onClick:c,children:"Clear"}),Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsxs)("span",{children:["Selected user: \xa0",i.id]})}),Object(l.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:i.name}),Object(l.jsx)("p",{className:"CurrentUser__email",children:i.email}),Object(l.jsx)("p",{className:"CurrentUser__phone",children:i.phone})]})})}),b=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(0),i=Object(r.a)(n,2),o=i[0],b=i[1];return Object(a.useEffect)((function(){d("/todos").then((function(e){return s(e)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(u,{todos:c,selectedUserId:o,selectUser:function(e){return b(e)}})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)("div",{className:"App__content-container",children:o?Object(l.jsx)(j,{selectedUserId:o,clearUser:function(){return b(0)}}):"No user selected"})})]})};n.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.574fed22.chunk.js.map