(this["webpackJsonpmildew-react-landing"]=this["webpackJsonpmildew-react-landing"]||[]).push([[0],{32:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a,i,c,r,s,o,l,d,b,m,j,h,p,u,x,g,f,O,w,v=t(0),y=t.n(v),_=t(20),k=t.n(_),N=(t(32),t.p,t.p,t(2)),C=t(3),z=t.p+"static/media/mildew.a49efbbf.png",R=t(1),E=C.b.img(a||(a=Object(N.a)(["\n  margin: 150px 30% 10px;\n  width: 40%;\n\n  @media only screen and (max-width: 900px) {\n    margin: 130px 25% 10px;\n    width: 50%;\n  }\n\n  @media only screen and (max-width: 680px) {\n    margin: 120px 15% 0;\n    width: 70%;\n  }\n\n  @media only screen and (max-width: 420px) {\n    margin: 100px 10% 0;\n    width: 80%;\n  }\n"]))),S=function(){return Object(R.jsx)("div",{children:Object(R.jsx)(E,{src:z})})},I=t(15),q=t(4),B=C.b.div(i||(i=Object(N.a)(["\n  margin: 0 auto;\n  width: fit-content;\n"]))),L=C.b.h4(c||(c=Object(N.a)(["\n  margin: 20px;\n  font-size: 48px;\n\n  @media only screen and (max-width: 1100px) {\n    font-size: 38px;\n  }\n\n  @media only screen and (max-width: 680px) {\n    font-size: 26px;\n  }\n\n  @media only screen and (max-width: 400px) {\n    font-size: 20px;\n  }\n"]))),M=C.b.p(r||(r=Object(N.a)(["\n  margin: 0px auto;\n  width: fit-content;\n  max-width: 60%;\n  font-size: 22px;\n\n  @media only screen and (max-width: 400px) {\n    font-size: 16px;\n  }\n"]))),T=C.b.a(s||(s=Object(N.a)(["\n  color: #E0ECC6;\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),F=function(){var e={marginTop:20};return Object(R.jsx)("div",{className:"content-container",children:Object(R.jsxs)("div",{children:[Object(R.jsx)(M,{style:e,children:"Mildew is a secondhand fashion magazine published in print twice a year."}),Object(R.jsx)(M,{style:e,children:"Mildew is the voice of the new-to-you fashion ecosystem, shaping perspectives around the possibilities for used clothes through forward-looking editorials, playful storytelling, and how-to\u2019s for ethical and experimental dressing. As an inclusive and artful print platform for secondhand fashion, each issue is a radical guide to reveling in the decay of fashion as we knew it."}),Object(R.jsx)(M,{style:e,children:"Not new, but original."}),Object(R.jsx)(M,{style:e,children:"In print Spring 2022."})]})})},H=function(){var e={marginTop:20};return Object(R.jsx)("div",{className:"content-container",children:Object(R.jsxs)("div",{children:[Object(R.jsx)(B,{children:Object(R.jsx)(L,{children:"Contact Mildew!"})}),Object(R.jsx)(M,{style:e,children:Object(R.jsx)(T,{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/mildewmag",children:"@mildewmag"})}),Object(R.jsx)(M,{style:e,children:Object(R.jsx)(T,{rel:"noreferrer",target:"_blank",href:"mailto:mildewmag@gmail.com",children:"mildewmag@gmail.com"})})]})})},V=t(26),A=t(27),J=C.b.input(o||(o=Object(N.a)(["\n    cursor: text;\n    border: none;\n    background: #E0ECC6;\n    min-height: 40px;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    padding-left: 10px;\n    justify-content: space-evenly;\n    &:focus-visible{\n        outline: none;\n    }\n"]))),D=C.b.input(l||(l=Object(N.a)(["\n\n    cursor: pointer;\n    background: #6EB0CC;\n    min-height: 40px;\n    width: fit-content;\n    padding: 10px 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    color: black;\n    border: none;\n    &:hover{\n        background: #319686\n    }\n"]))),P=function(e){var n;return"submit"===e.type?Object(R.jsx)(D,{className:"primaryBtn primaryBtn--big g__justify-self-center",type:"submit",value:e.label,disabled:(n=e.formValues,!(!n.some((function(e){return""===e}))&&-1!==n[0].indexOf("@")))}):"textarea"===e.type?Object(R.jsxs)("label",{className:"inputField__label",children:[e.label,Object(R.jsx)("textarea",{onChange:function(n){return e.onChangeHandler(n.target.value)},placeholder:e.placeholder,value:e.value,required:e.isRequired,className:"inputField__field",rows:7,name:e.name})]}):Object(R.jsxs)("label",{className:"inputField__label",children:[e.label,Object(R.jsx)(J,{onChange:function(n){return e.onChangeHandler(n.target.value)},type:e.type,placeholder:e.placeholder,value:e.value,required:e.isRequired,className:"inputField__field",name:e.name})]})},W=C.b.form(d||(d=Object(N.a)(["\n    margin: auto;\n    width: fit-content;\n    display: flex;\n"]))),Y=function(e){var n=e.status,t=(e.message,e.onValidated),a=Object(v.useState)(""),i=Object(V.a)(a,2),c=i[0],r=i[1];Object(v.useEffect)((function(){"success"===n&&s()}),[n]);var s=function(){r("")};return Object(R.jsxs)("div",{className:"mc__form",onSubmit:function(e){return function(e){e.preventDefault(),c&&c.indexOf("@")>-1&&t({EMAIL:c})}(e)},children:[Object(R.jsxs)(W,{children:[Object(R.jsx)("div",{className:"mc__field-container",children:Object(R.jsx)(P,{onChangeHandler:r,type:"email",value:c,placeholder:"Email address",isRequired:!0})}),Object(R.jsx)(P,{className:"Input-submit",label:"See You Soon",type:"submit",formValues:[c]})]}),"sending"===n&&Object(R.jsx)("div",{className:"mc__alert mc__alert--sending",children:"Subscribing..."}),"error"===n&&Object(R.jsx)("div",{className:"mc__alert mc__alert--error",children:"Please try a different email!"}),"success"===n&&Object(R.jsx)("div",{className:"mc__alert mc__alert--success",children:"Woo hoo!"})]})},G=function(e){return Object(R.jsx)("div",{className:"mc__form-container",children:Object(R.jsx)(A.a,{url:"https://mildewmag.us20.list-manage.com/subscribe/post?u=037b6a8670c6cce5814bcd8ba&amp;id=8789398a33",render:function(e){var n=e.subscribe,t=e.status,a=e.message;return Object(R.jsx)(Y,{status:t,message:a,onValidated:function(e){return n(e)}})}})})},K=C.b.span(b||(b=Object(N.a)(["\n    @media (min-width: 800px){\n        display: none;\n    }\n"]))),Q=function(){var e={marginTop:20},n={marginBottom:20};return Object(R.jsxs)("div",{className:"content-container",children:[Object(R.jsxs)("div",{children:[Object(R.jsx)(B,{children:Object(R.jsx)(L,{children:" The secondhand fashion magazine."})}),Object(R.jsx)(M,{style:n,children:" In print Spring 2022. "})]}),Object(R.jsx)(M,{style:n,children:" Stay in the loop:"}),Object(R.jsx)(G,{}),Object(R.jsxs)(K,{children:[Object(R.jsx)(M,{style:e,children:Object(R.jsx)(T,{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/mildewmag",children:"@mildewmag"})}),Object(R.jsx)(M,{style:e,children:Object(R.jsx)(T,{rel:"noreferrer",target:"_blank",href:"mailto:mildewmag@gmail.com",children:"mildewmag@gmail.com"})})]})]})},U=t.p+"static/media/nav1white.132b6e6e.png",X=t.p+"static/media/nav1color.27c1cf22.png",Z=t.p+"static/media/nav2white.9e5f972e.png",$=t.p+"static/media/nav2color.d32da9fc.png",ee=t.p+"static/media/nav3white.63a4b626.png",ne=t.p+"static/media/nav3color.a381fdda.png",te=t.p+"static/media/nav4white.09d0259e.png",ae=t.p+"static/media/nav4color.ef8e4338.png",ie=C.b.div(m||(m=Object(N.a)(['\n  background: transparent;\n  background-size: cover;\n  color: black;\n  font-family: "TwCen";\n  font-size: 22px;\n  margin: 30px 40px;\n  position: fixed;\n  text-decoration: none;\n  width: 180px;\n  height: 120px;\n  &:hover {\n    color: white;\n  }\n  @media only screen and (max-width: 800px) {\n    display: none;\n  }\n\n\n  ',";\n\n  ",";\n\n  ",";\n\n  ",";\n"])),(function(e){return e.topLeft&&Object(C.a)(j||(j=Object(N.a)(["\n    background-image: url(",");\n      top: 0;\n      left: 0;\n      &:hover {\n        background-image: url(",");\n        transform: rotate(-15deg);\n      }\n    "])),U,X)}),(function(e){return e.topRight&&Object(C.a)(h||(h=Object(N.a)(["\n      background-image: url(",");\n      top: 0;\n      right: 0;\n      &:hover {\n        background-image: url(",");\n        transform: rotate(15deg);\n      }\n    "])),Z,$)}),(function(e){return e.bottomLeft&&Object(C.a)(p||(p=Object(N.a)(["\n      background-image: url(",");\n      bottom: 0;\n      left: 0;\n      &:hover {\n        background-image: url(",");\n        transform: rotate(15deg);\n      }\n    "])),ee,ne)}),(function(e){return e.bottomRight&&Object(C.a)(u||(u=Object(N.a)(["\n      background-image: url(",");\n      bottom: 0;\n      right: 0;\n      width: 210px;\n      padding-bottom: 20px;\n      &:hover {\n        background-image: url(",");\n        transform: rotate(-15deg);\n      }\n    "])),te,ae)})),ce=Object(C.b)(I.b)(x||(x=Object(N.a)(["\n  top: 50%;\n  left: 50%;\n  padding: 50px 50px;\n  position: absolute;\n  text-decoration: none;\n  transform: translate(-50%, -50%);\n  &:hover {\n    color: white;\n  }\n\n  ","\n"])),(function(e){return e.bR&&Object(C.a)(g||(g=Object(N.a)(["\n    top: 57%;\n    "])))})),re=C.b.div(f||(f=Object(N.a)(["\n  position: absolute;\n  top: 0;\n  right: -50;\n  max-width: 1px;\n\n"]))),se=C.b.img(O||(O=Object(N.a)(["\n  max-width: 100%;\n"]))),oe=C.b.div(w||(w=Object(N.a)(["\n"]))),le=function(){return Object(R.jsxs)(oe,{children:[Object(R.jsxs)(I.a,{children:[Object(R.jsx)(ie,{topLeft:!0,children:Object(R.jsx)(ce,{id:"green",to:"/",children:"Home"})}),Object(R.jsx)(ie,{topRight:!0,children:Object(R.jsx)(ce,{id:"pink",to:"/about",children:"About"})}),Object(R.jsx)(ie,{bottomLeft:!0,children:Object(R.jsx)(ce,{bR:!0,id:"teal",to:"/contact",children:"Contact"})}),Object(R.jsx)(ie,{bottomRight:!0,children:Object(R.jsx)(ce,{bR:!0,id:"blue",target:"_blank",to:{pathname:"https://www.instagram.com/mildewmag/"},children:"Instagram"})}),Object(R.jsxs)(q.d,{children:[Object(R.jsx)(q.b,{exact:!0,path:"/",component:Q}),Object(R.jsx)(q.b,{exact:!0,path:"/about",component:F}),Object(R.jsx)(q.b,{exact:!0,path:"/contact",component:H}),Object(R.jsx)(q.b,{path:"*",children:Object(R.jsx)(q.a,{to:"/"})})]})]}),Object(R.jsxs)(re,{children:[Object(R.jsx)(se,{src:X}),Object(R.jsx)(se,{src:$}),Object(R.jsx)(se,{src:ne}),Object(R.jsx)(se,{src:ae})]})]})};var de=function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(S,{}),Object(R.jsx)(le,{})]})};k.a.render(Object(R.jsx)(y.a.StrictMode,{children:Object(R.jsx)(de,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.87673697.chunk.js.map