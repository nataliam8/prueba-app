(this["webpackJsonpprueba-app"]=this["webpackJsonpprueba-app"]||[]).push([[0],{146:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),o=t(8),m=t(13),s=t(51),i=t(14),u="[ui] Open modal",d="[ui] Close modal",E={modalOpen:!1},b=Object(m.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case d:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}}}),p="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,f=Object(m.e)(b,p(Object(m.a)(s.a))),N=t(11),v=t(3),g=t(4),h=t(23),O=t.n(h),j=t(22),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(n.useState)(e),t=Object(g.a)(a,2),l=t[0],r=t[1],c=function(){r(e)},o=function(e){var a=e.target;r(Object(i.a)(Object(i.a)({},l),{},Object(j.a)({},a.name,a.value)))};return[l,o,c]},w=(t(19),function(){var e=C({correo:"",password:""}),a=Object(g.a)(e,2),t=a[0],r=a[1],c=t.correo,o=t.password,m=Object(n.useState)(!0),s=Object(g.a)(m,2),i=s[0],u=s[1],d=Object(n.useState)(!0),E=Object(g.a)(d,2),b=E[0],p=E[1],f=function(){return O.a.isEmail(c)?(u(!0),!0):u(!1)},v=function(){return o.length<5?p(!1):(p(!0),!0)};return l.a.createElement("div",{className:"container login-container"},l.a.createElement("div",{className:"login-form-1"},l.a.createElement("h3",null,"Login"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f()&&v()&&console.log("Formulario correcto")}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control ".concat(!i&&"is-invalid"),placeholder:"Correo",autoComplete:"off",name:"correo",value:c,onChange:r}),!i&&l.a.createElement("label",{className:"alert"},"El correo no es v\xe1lido")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",className:"form-control ".concat(!b&&"is-invalid"),placeholder:"Contrase\xf1a",name:"password",value:o,onChange:r}),!b&&l.a.createElement("label",{className:"alert"},"La contrase\xf1a requiere al menos 5 caracteres")),l.a.createElement("div",{className:"form-group centrar"},l.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})),l.a.createElement(N.b,{to:"/registro",className:"link1 centrar"},"Crear una nueva cuenta"))))}),y=function(){var e=C({nombre:"",correo:"",password:"",password2:""}),a=Object(g.a)(e,2),t=a[0],r=a[1],c=t.nombre,o=t.correo,m=t.password,s=t.password2,i=Object(n.useState)(!0),u=Object(g.a)(i,2),d=u[0],E=u[1],b=Object(n.useState)(!0),p=Object(g.a)(b,2),f=p[0],v=p[1],h=Object(n.useState)(!0),j=Object(g.a)(h,2),w=j[0],y=j[1],S=function(){return 0===c.trim().length?E(!1):(E(!0),!0)},x=function(){return O.a.isEmail(o)?(v(!0),!0):v(!1)},k=function(){return m!==s||m.length<5?y(!1):(y(!0),!0)};return l.a.createElement("div",{className:"container login-container"},l.a.createElement("div",{className:"login-form-2"},l.a.createElement("h3",null,"Registro"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),S()&&x()&&k()&&console.log("Formulario correcto")}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control ".concat(!d&&"is-invalid"),placeholder:"Nombre",autoComplete:"off",name:"nombre",value:c,onChange:r}),!d&&l.a.createElement("label",{className:"alert2"},"El nombre es requerido")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control ".concat(!f&&"is-invalid"),placeholder:"Correo",autoComplete:"off",name:"correo",value:o,onChange:r}),!f&&l.a.createElement("label",{className:"alert2"},"El correo no es v\xe1lido")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",className:"form-control ".concat(!w&&"is-invalid"),placeholder:"Contrase\xf1a",name:"password",value:m,onChange:r}),!w&&l.a.createElement("label",{className:"alert2"},"La contrase\xf1a requiere al menos 5 caracteres")),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",className:"form-control ".concat(!w&&"is-invalid"),placeholder:"Repita la contrase\xf1a",name:"password2",value:s,onChange:r}),!w&&l.a.createElement("label",{className:"alert2"},"La contrase\xf1a requiere al menos 5 caracteres")),l.a.createElement("div",{className:"form-group centrar"},l.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})),l.a.createElement(N.b,{to:"/login",className:"link2 centrar"},"Ya est\xe1s registrado?"))))},S=t(15),x=t.n(S),k=(t(49),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}}),_=function(){return{type:u}},A=function(){return{type:d}};x.a.setAppElement("#root");var D=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,a=Object(o.b)(),t=C({nombre:"",descripcion:""}),r=Object(g.a)(t,2),c=r[0],m=r[1],s=c.nombre,i=c.descripcion,u=Object(n.useState)(!0),d=Object(g.a)(u,2),E=d[0],b=d[1],p=Object(n.useState)(!0),f=Object(g.a)(p,2),N=f[0],v=f[1],h=function(){return 0===s.trim().length?b(!1):(b(!0),!0)},O=function(){return i.length<5?v(!1):(v(!0),!0)};return l.a.createElement(x.a,{isOpen:e,style:k,closeTimeoutMS:200,className:"modal modal2",overlayClassName:"modal-fondo"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",{className:"col-10 centrar"}," Agregar categor\xeda "),l.a.createElement("div",{className:"col-2 right"},l.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){a(A())}},"X"))),l.a.createElement("hr",null),l.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault(),h()&&O()&&console.log("Formulario correcto")}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nombre"),l.a.createElement("input",{type:"text",className:"form-control ".concat(!E&&"is-invalid"),placeholder:"Nombre de la categor\xeda",name:"nombre",autoComplete:"off",value:s,onChange:m})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"mt-0"},"Descripci\xf3n"),l.a.createElement("textarea",{type:"text",className:"form-control ".concat(!N&&"is-invalid"),placeholder:"Descripci\xf3n de la categor\xeda",rows:"2",name:"descripcion",value:i,onChange:m})),l.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},l.a.createElement("i",{className:"far fa-save"}),l.a.createElement("span",null," Guardar"))))},L=function(){var e=Object(o.b)();return l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",{className:"col-6"},"Lista de categorias "),l.a.createElement("div",{className:"col-6 right"},l.a.createElement("button",{className:"btn btn-warning btn-lg right",onClick:function(a){e(_())}},l.a.createElement("i",{className:"fas fa-plus"})," Agregar categor\xeda"))),l.a.createElement("hr",null),l.a.createElement("div",{className:"card mt-3",style:{width:"20rem"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Categoria"),l.a.createElement("p",{className:"card-text"},"With supporting text below as a natural lead-in to additional content."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-7"},l.a.createElement("button",{className:"btn btn-primary"},l.a.createElement("i",{className:"fas fa-search-plus"})," Ver productos")),l.a.createElement("div",{className:"col-5 right"},l.a.createElement("button",{className:"btn btn-success"},l.a.createElement("i",{className:"fas fa-edit"})),l.a.createElement("button",{className:"btn btn-danger ml-1"},l.a.createElement("i",{className:"far fa-trash-alt"})))))),l.a.createElement(D,null))};x.a.setAppElement("#root");var T=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,a=Object(o.b)(),t=C({nombre:"",tipo:"",precio:"",cantidad:""}),r=Object(g.a)(t,2),c=r[0],m=r[1],s=c.nombre,i=c.tipo,u=c.precio,d=c.cantidad,E=Object(n.useState)(!0),b=Object(g.a)(E,2),p=b[0],f=b[1],N=Object(n.useState)(!0),v=Object(g.a)(N,2),h=v[0],O=v[1],j=Object(n.useState)(!0),w=Object(g.a)(j,2),y=w[0],S=w[1],_=Object(n.useState)(!0),D=Object(g.a)(_,2),L=D[0],T=D[1],P=function(){return 0===s.length?f(!1):(f(!0),!0)},q=function(){return 0===i.length?O(!1):(O(!0),!0)},F=function(){return 0===u.length||u<0?S(!1):(S(!0),!0)},R=function(){return 0===d.length||d<0?T(!1):(T(!0),!0)};return l.a.createElement(x.a,{isOpen:e,style:k,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",{className:"col-10 centrar"}," Agregar producto "),l.a.createElement("div",{className:"col-2 right"},l.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){a(A())}},"X"))),l.a.createElement("hr",null),l.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault(),P()&&q()&&F()&&R()&&console.log("Formulario correcto")}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nombre"),l.a.createElement("input",{type:"text",className:"form-control ".concat(!p&&"is-invalid"),placeholder:"Nombre del producto",name:"nombre",autoComplete:"off",value:s,onChange:m})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Tipo o categor\xeda"),l.a.createElement("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"),placeholder:"Categor\xeda del producto",name:"tipo",value:i,onChange:m})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Precio"),l.a.createElement("input",{type:"number",className:"form-control ".concat(!y&&"is-invalid"),placeholder:"Precio del producto",name:"precio",value:u,onChange:m})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Cantidad"),l.a.createElement("input",{type:"number",className:"form-control ".concat(!L&&"is-invalid"),placeholder:"Cantidad",name:"cantidad",value:d,onChange:m})),l.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},l.a.createElement("i",{className:"far fa-save"}),l.a.createElement("span",null," Guardar"))))},P=function(){var e=Object(o.b)();return l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",{className:"col-6"},"Lista de productos "),l.a.createElement("div",{className:"col-6 right"},l.a.createElement("button",{className:"btn btn-warning btn-lg right",onClick:function(a){e(_())}},l.a.createElement("i",{className:"fas fa-plus"})," Agregar producto"))),l.a.createElement("hr",null),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"Nombre"),l.a.createElement("th",{scope:"col"},"Tipo"),l.a.createElement("th",{scope:"col"},"Precio"),l.a.createElement("th",{scope:"col"},"Cantidad"),l.a.createElement("th",{scope:"col"},"Tools"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Televisor"),l.a.createElement("td",null,"Electrodom\xe9stico"),l.a.createElement("td",null,"1000000"),l.a.createElement("td",null,"100"),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-success"},l.a.createElement("i",{className:"fas fa-edit"})),l.a.createElement("button",{className:"btn btn-danger ml-1"},l.a.createElement("i",{className:"far fa-trash-alt"})))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Papel Higinieco"),l.a.createElement("td",null,"Aseo"),l.a.createElement("td",null,"10000"),l.a.createElement("td",null,"100"),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-success"},l.a.createElement("i",{className:"fas fa-edit"})),l.a.createElement("button",{className:"btn btn-danger ml-1"},l.a.createElement("i",{className:"far fa-trash-alt"})))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Arroz"),l.a.createElement("td",null,"Abarrotes"),l.a.createElement("td",null,"30000"),l.a.createElement("td",null,"100"),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-success"},l.a.createElement("i",{className:"fas fa-edit"})),l.a.createElement("button",{className:"btn btn-danger ml-1"},l.a.createElement("i",{className:"far fa-trash-alt"})))))),l.a.createElement(T,null))},q=function(){return l.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},l.a.createElement(N.b,{className:"navbar-brand",to:"/"},"ProductosApp"),l.a.createElement("div",{className:"navbar-collapse"},l.a.createElement("div",{className:"navbar-nav"},l.a.createElement(N.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/categorias"},"Categor\xedas"),l.a.createElement(N.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/productos"},"Productos"))),l.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("span",{className:"nav-item nav-link text-info"}," Natalia "),l.a.createElement("button",{className:"btn btn-outline-danger"},l.a.createElement("i",{className:"fas fa-sign-out-alt"}),l.a.createElement("span",null," Salir")))))},F=function(){return l.a.createElement("div",null,l.a.createElement(q,null),l.a.createElement("div",{className:"auth__main"},l.a.createElement("div",{className:"auth__box-container"},l.a.createElement(v.d,null,l.a.createElement(v.b,{exact:!0,path:"/productos",component:P}),l.a.createElement(v.b,{exact:!0,path:"/categorias",component:L}),l.a.createElement(v.a,{to:"/categorias"})))))},R=function(){return l.a.createElement(N.a,null,l.a.createElement("div",null,l.a.createElement(v.d,null,l.a.createElement(v.b,{exact:!0,path:"/login",component:w}),l.a.createElement(v.b,{exact:!0,path:"/registro",component:y}),l.a.createElement(v.b,{path:"/",component:F}),l.a.createElement(v.a,{to:"/login"}))))},X=function(){return l.a.createElement(o.a,{store:f},l.a.createElement(R,null))};c.a.render(l.a.createElement(X,null),document.getElementById("root"))},19:function(e,a,t){},49:function(e,a,t){},52:function(e,a,t){e.exports=t(146)}},[[52,1,2]]]);
//# sourceMappingURL=main.15c4ecab.chunk.js.map