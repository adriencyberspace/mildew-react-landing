(this["webpackJsonpmildew-react-landing"]=this["webpackJsonpmildew-react-landing"]||[]).push([[0],{62:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n),t.d(n,"client",(function(){return cn}));var a,c,i,r,s,o,l,u=t(2),d=t(41),m=t.n(d),b=(t(62),t.p,t.p,t(10)),j=t(6),h=t(21),p=t(17),O=Object(p.a)(a||(a=Object(j.a)(["\n  fragment CheckoutFragment on Checkout {\n    id\n    webUrl\n    totalTax\n    subtotalPrice\n    totalPrice\n    lineItems(first: 250) {\n      edges {\n        node {\n          id\n          title\n          variant {\n            id\n            title\n            image {\n              src\n            }\n            price\n          }\n          quantity\n        }\n      }\n    }\n  }\n"]))),f=Object(p.a)(c||(c=Object(j.a)(["\n  mutation checkoutCreate($input: CheckoutCreateInput!) {\n    checkoutCreate(input: $input) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"])),O),x=Object(p.a)(i||(i=Object(j.a)(["\n  mutation checkoutLineItemsAdd(\n    $checkoutId: ID!\n    $lineItems: [CheckoutLineItemInput!]!\n  ) {\n    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"])),O),g=Object(p.a)(r||(r=Object(j.a)(["\n  mutation checkoutLineItemsUpdate(\n    $checkoutId: ID!\n    $lineItems: [CheckoutLineItemUpdateInput!]!\n  ) {\n    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"])),O),v=Object(p.a)(s||(s=Object(j.a)(["\n  mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {\n    checkoutLineItemsRemove(\n      checkoutId: $checkoutId\n      lineItemIds: $lineItemIds\n    ) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"])),O),C=Object(p.a)(o||(o=Object(j.a)(["\n  mutation checkoutCustomerAssociate(\n    $checkoutId: ID!\n    $customerAccessToken: String!\n  ) {\n    checkoutCustomerAssociate(\n      checkoutId: $checkoutId\n      customerAccessToken: $customerAccessToken\n    ) {\n      userErrors {\n        field\n        message\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ","\n"])),O);function _(e,n,t){Object(u.useEffect)((function(){e&&e[n]&&e[n].checkout&&t(e[n].checkout)}),[e])}var k,w,I,N,y,A,L,T,P,S,E,$=Object(p.a)(l||(l=Object(j.a)(["\n  query ($id: ID!) {\n    node(id: $id) {\n      ...CheckoutFragment\n    }\n  }\n  ","\n"])),O),q=t(1),F=Object(p.a)(k||(k=Object(j.a)(["\n  query query {\n    collections(first: 10) {\n      edges {\n        node {\n          id\n          title\n          description\n          handle\n          products(first: 250) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                id\n                title\n                descriptionHtml\n                options {\n                  id\n                  name\n                  values\n                }\n                variants(first: 250) {\n                  pageInfo {\n                    hasNextPage\n                    hasPreviousPage\n                  }\n                  edges {\n                    node {\n                      id\n                      title\n\n                      selectedOptions {\n                        name\n                        value\n                      }\n                      image {\n                        src\n                      }\n                      price\n                      compareAtPrice\n                      availableForSale\n                    }\n                  }\n                }\n                images(first: 250) {\n                  pageInfo {\n                    hasNextPage\n                    hasPreviousPage\n                  }\n                  edges {\n                    node {\n                      src\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    shop {\n      name\n      description\n      products(first: 250) {\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n        }\n        edges {\n          node {\n            id\n            title\n            descriptionHtml\n            options {\n              id\n              name\n              values\n            }\n            variants(first: 250) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  id\n                  title\n\n                  selectedOptions {\n                    name\n                    value\n                  }\n                  image {\n                    src\n                  }\n                  price\n                  compareAtPrice\n                  availableForSale\n                }\n              }\n            }\n            images(first: 250) {\n              pageInfo {\n                hasNextPage\n                hasPreviousPage\n              }\n              edges {\n                node {\n                  src\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),R=Object(u.createContext)(),M=function(e){var n=e.children,t=Object(u.useState)(!1),a=Object(b.a)(t,2),c=a[0],i=a[1],r=Object(u.useState)(!1),s=Object(b.a)(r,2),o=s[0],l=(s[1],Object(u.useState)(!1)),d=Object(b.a)(l,2),m=d[0],j=d[1],p=Object(u.useState)(!1),O=Object(b.a)(p,2),k=(O[0],O[1]),w=Object(u.useState)({lineItems:{edges:[]}}),I=Object(b.a)(w,2),N=I[0],y=I[1],A=Object(u.useState)(null),L=Object(b.a)(A,2),T=L[0],P=(L[1],Object(h.a)(f)),S=Object(b.a)(P,2),E=S[0],$=S[1],M=$.data,D=($.loading,$.error,Object(h.a)(x)),V=Object(b.a)(D,2),z=V[0],U=V[1],B=U.data,H=(U.loading,U.error,Object(h.a)(g)),J=Object(b.a)(H,2),W=J[0],Y=J[1],X=Y.data,G=(Y.loading,Y.error,Object(h.a)(v)),K=Object(b.a)(G,2),Q=K[0],Z=K[1],ee=Z.data,ne=(Z.loading,Z.error,Object(h.a)(C)),te=Object(b.a)(ne,2),ae=te[0],ce=te[1],ie=ce.data,re=(ce.loading,ce.error,Object(h.b)(F)),se=re.loading,oe=re.error,le=re.data;Object(u.useEffect)((function(){E({variables:{input:{}}}).then((function(e){console.log(e)}),(function(e){console.log("create checkout error",e)}))}),[]),_(M,"checkoutCreate",y),_(B,"checkoutLineItemsAdd",y),_(X,"checkoutLineItemsUpdate",y),_(ee,"checkoutLineItemsRemove",y),_(ie,"checkoutCustomerAssociate",y);return Object(q.jsx)(R.Provider,{value:{isCartOpen:c,setCartOpen:i,removeLineItemInCart:function(e){var n={checkoutId:N.id,lineItemIds:[e]};Q({variables:n})},lineItemRemoveData:ee,checkout:N,setCheckout:y,updateLineItemInCart:function(e,n){var t={checkoutId:N.id,lineItems:[{id:e,quantity:parseInt(n,10)}]};W({variables:t})},lineItemUpdateMutation:W,lineItemUpdateData:X,createCheckoutMutation:E,createCheckoutData:M,shopLoading:se,shopError:oe,closeCustomerAuth:function(){j(!1)},isCustomerAuthOpen:m,isNewCustomer:o,associateCustomerCheckout:function(e){var n={checkoutId:N.id,customerAccessToken:e};ae({variables:n}).then((function(e){j(!1)}))},accountVerificationMessage:function(){k(!0),setTimeout((function(){k(!1)}),5e3)},shopData:le,addVariantToCart:function(e,n){var t={checkoutId:N.id,lineItems:[{variantId:e,quantity:parseInt(n,10)}]};localStorage.setItem("shopify_checkout_id",t.checkoutId),z({variables:t}).then((function(e){i(!0)}))},handleCartClose:function(){i(!1)},customerAccessToken:T,query:F},children:n})},D=t(8),V=t.p+"static/media/mildew.a49efbbf.png",z=D.b.img(w||(w=Object(j.a)(["\n  margin: 150px 30% 10px;\n  width: 40%;\n\n  @media only screen and (max-width: 900px) {\n    margin: 130px 25% 10px;\n    width: 50%;\n  }\n\n  @media only screen and (max-width: 680px) {\n    margin: 40px 15% 0;\n    width: 70%;\n  }\n\n  @media only screen and (max-width: 420px) {\n    margin: 40px 10% 0;\n    width: 80%;\n  }\n"]))),U=function(){return Object(q.jsx)("div",{children:Object(q.jsx)(z,{src:V})})},B=t(25),H=t(11),J=D.b.div(I||(I=Object(j.a)(["\n  margin: 0 auto;\n  width: fit-content;\n"]))),W=D.b.h4(N||(N=Object(j.a)(["\n  margin: 20px;\n  font-size: 48px;\n\n  @media only screen and (max-width: 1100px) {\n    font-size: 38px;\n  }\n\n  @media only screen and (max-width: 680px) {\n    font-size: 26px;\n  }\n\n  @media only screen and (max-width: 400px) {\n    font-size: 20px;\n  }\n"]))),Y=D.b.p(y||(y=Object(j.a)(["\n  margin: 0px auto;\n  width: fit-content;\n  max-width: 60%;\n  font-size: 22px;\n\n  @media only screen and (max-width: 700px) {\n    max-width: 70%;\n    text-align: center;\n  }\n\n  @media only screen and (max-width: 400px) {\n    font-size: 16px;\n  }\n"]))),X=D.b.a(A||(A=Object(j.a)(["\n  color: #E0ECC6;\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),G=D.b.span(L||(L=Object(j.a)(["\n    @media (min-width: 800px){\n        display: none;\n    }\n"]))),K=Object(D.b)(B.b)(T||(T=Object(j.a)(["\n    color: #D7B7E1;\n    text-decoration: none;\n\n    &:hover {\n    text-decoration: underline;\n    }\n"]))),Q=t(56),Z=D.b.input(P||(P=Object(j.a)(["\n    cursor: text;\n    border: none;\n    background: #E0ECC6;\n    min-height: 40px;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    padding-left: 10px;\n    justify-content: space-evenly;\n    -webkit-appearance: none;\n    -webkit-border-radius: 0;\n    &:focus-visible{\n        outline: none;\n    }\n    &:focus{\n        outline: none;\n    }\n    @media (max-width: 900px){\n        width: 200px;\n    }\n"]))),ee=D.b.input(S||(S=Object(j.a)(["\n\n    cursor: pointer;\n    background: #6EB0CC;\n    min-height: 40px;\n    width: fit-content;\n    padding: 10px 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    color: black;\n    border: none;\n    -webkit-appearance: none;\n    -webkit-border-radius: 0;\n    &:hover{\n        background: #319686\n    }\n"]))),ne=function(e){var n;return"submit"===e.type?Object(q.jsx)(ee,{className:"primaryBtn primaryBtn--big g__justify-self-center",type:"submit",value:e.label,disabled:(n=e.formValues,!(!n.some((function(e){return""===e}))&&-1!==n[0].indexOf("@")))}):"textarea"===e.type?Object(q.jsxs)("label",{className:"inputField__label",children:[e.label,Object(q.jsx)("textarea",{onChange:function(n){return e.onChangeHandler(n.target.value)},placeholder:e.placeholder,value:e.value,required:e.isRequired,className:"inputField__field",rows:7,name:e.name})]}):Object(q.jsxs)("label",{className:"inputField__label",children:[e.label,Object(q.jsx)(Z,{onChange:function(n){return e.onChangeHandler(n.target.value)},type:e.type,placeholder:e.placeholder,value:e.value,required:e.isRequired,className:"inputField__field",name:e.name})]})},te=D.b.form(E||(E=Object(j.a)(["\n    margin: auto;\n    width: fit-content;\n    display: flex;\n"]))),ae=function(e){var n=e.status,t=(e.message,e.onValidated),a=Object(u.useState)(""),c=Object(b.a)(a,2),i=c[0],r=c[1];Object(u.useEffect)((function(){"success"===n&&s()}),[n]);var s=function(){r("")};return Object(q.jsxs)("div",{className:"mc__form",onSubmit:function(e){return function(e){e.preventDefault(),i&&i.indexOf("@")>-1&&t({EMAIL:i})}(e)},children:[Object(q.jsxs)(te,{children:[Object(q.jsx)("div",{className:"mc__field-container",children:Object(q.jsx)(ne,{onChangeHandler:r,type:"email",value:i,placeholder:"Email address",isRequired:!0})}),Object(q.jsx)(ne,{className:"Input-submit",label:"See You Soon",type:"submit",formValues:[i]})]}),"sending"===n&&Object(q.jsx)("div",{className:"mc__alert mc__alert--sending",children:"Subscribing..."}),"error"===n&&Object(q.jsx)("div",{className:"mc__alert mc__alert--error",children:"Please try a different email!"}),"success"===n&&Object(q.jsx)("div",{className:"mc__alert mc__alert--success",children:"Woo hoo!"})]})},ce=function(e){return Object(q.jsx)("div",{className:"mc__form-container",children:Object(q.jsx)(Q.a,{url:"https://mildewmag.us20.list-manage.com/subscribe/post?u=037b6a8670c6cce5814bcd8ba&amp;id=8789398a33",render:function(e){var n=e.subscribe,t=e.status,a=e.message;return Object(q.jsx)(ae,{status:t,message:a,onValidated:function(e){return n(e)}})}})})},ie=function(){var e={marginTop:20};return Object(q.jsx)("div",{className:"content-container",children:Object(q.jsxs)("div",{children:[Object(q.jsx)(Y,{style:{marginTop:40},children:"Mildew is an annual print magazine about secondhand fashion and creative reuse, featuring art and writing that inspires us to think about old clothes in new ways. Mildew is a guide to dressing in the spirit of our times and reveling in the decay of fashion as we knew it."}),Object(q.jsx)(Y,{style:e,children:"Not new, but original."}),Object(q.jsx)(Y,{style:e,children:"See our Instagram for a list of stockists near you!"}),Object(q.jsx)(Y,{style:{marginTop:20,marginBottom:20},children:" Stay in the loop:"}),Object(q.jsx)(ce,{}),Object(q.jsxs)(G,{children:[Object(q.jsx)(Y,{style:e,children:Object(q.jsx)(X,{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/mildewmag",children:"@mildewmag"})}),Object(q.jsx)(Y,{style:e,children:Object(q.jsx)(X,{rel:"noreferrer",target:"_blank",href:"mailto:mildewmag@gmail.com",children:"mildewmag@gmail.com"})}),Object(q.jsx)(Y,{style:e,children:Object(q.jsx)(K,{to:"/about",children:"About Mildew"})})]}),Object(q.jsx)(G,{children:Object(q.jsx)(Y,{style:e,children:Object(q.jsx)(K,{to:"/",children:"Home"})})})]})})},re=t(30),se=t.n(re),oe=t(39),le=t(54);var ue=function(e){var n=e.product,t=e.variantImage,a=e.secondaryImages,c=Object(u.useRef)(),i=Object(u.useRef)(),r=function(e){return i.current=e},s=function e(){i.current&&(c.current.scrollTop=c.current.scrollTop+10,requestAnimationFrame(e))},o=function e(){i.current&&(c.current.scrollTop=c.current.scrollTop-10,requestAnimationFrame(e))};return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)("div",{className:"Product__scroll",ref:c,children:[n.images.edges.length?Object(q.jsx)("img",{className:"Product__image",src:t.src,alt:"".concat(n.title," product shot")}):null,Object(q.jsx)("div",{children:a.map((function(e){return Object(q.jsx)("img",{src:e.node.src})}))})]}),Object(q.jsxs)("div",{className:"Scroll-buttons",children:[Object(q.jsxs)("button",{className:"button button__up",id:"bg-teal",onMouseDown:function(){r(!0),o()},onMouseUp:function(){return r(!1)},onTouchStart:function(){r(!0),o()},onTouchEnd:function(){return r(!1)},children:["  ","UP","  "]}),Object(q.jsx)("button",{className:"button",id:"bg-teal",onMouseDown:function(){r(!0),s()},onMouseUp:function(){return r(!1)},onTouchStart:function(){r(!0),s()},onTouchEnd:function(){return r(!1)},children:"DOWN"})]})]})};var de,me,be=function(e){var n={};e.product.options.forEach((function(e){n[e.name]=e.values[0]}));var t=Object(le.a)(e.product.images.edges);t.shift();var a=Object(u.useState)(e.product.images.edges[0].node),c=Object(b.a)(a,2),i=c[0],r=(c[1],Object(u.useState)(e.product.variants.edges[0].node)),s=Object(b.a)(r,2),o=s[0],l=(s[1],Object(u.useState)(1)),d=Object(b.a)(l,2),m=d[0];return d[1],Object(q.jsxs)("div",{className:"container",children:[Object(q.jsxs)("div",{className:"Product",children:[Object(q.jsx)("div",{className:"Product__left",children:Object(q.jsx)(ue,{product:e.product,variantImage:i,secondaryImages:t})}),Object(q.jsxs)("div",{className:"Product__right",children:[Object(q.jsx)("h5",{className:"Product__title",children:e.product.title}),Object(q.jsxs)("span",{className:"Product__price",children:["$",o.price]}),Object(q.jsx)("button",{className:"Product__buy button rotate",onClick:function(){return e.addVariantToCart(o.id,m)},children:"Add to Cart"})]})]}),Object(q.jsx)("span",{className:"Product",children:Object(q.jsx)("div",{dangerouslySetInnerHTML:{__html:e.product.descriptionHtml}})})]})},je=t(77),he=t(51);var pe=Object(p.a)(de||(de=Object(j.a)(["\n  mutation customerCreate($input: CustomerCreateInput!) {\n    customerCreate(input: $input) {\n      userErrors {\n        field\n        message\n      }\n      customer {\n        id\n      }\n    }\n  }\n"]))),Oe=Object(p.a)(me||(me=Object(j.a)(["\n  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {\n    customerAccessTokenCreate(input: $input) {\n      userErrors {\n        field\n        message\n      }\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n    }\n  }\n"]))),fe=Object(he.flowRight)(Object(je.a)(pe,{name:"customerCreate"}),Object(je.a)(Oe,{name:"customerAccessTokenCreate"}))((function(e){var n=Object(u.useState)(""),t=Object(b.a)(n,2),a=t[0],c=t[1],i=Object(u.useState)(""),r=Object(b.a)(i,2),s=r[0],o=r[1],l=Object(u.useState)(null),d=Object(b.a)(l,2),m=d[0],j=d[1],h=Object(u.useState)(null),p=Object(b.a)(h,2),O=p[0],f=p[1],x=Object(u.useState)(null),g=Object(b.a)(x,2),v=g[0],C=g[1],_=function(){j(null),f(null),C(null)},k=function(n,t){var a={email:n,password:t};e.customerCreate({variables:{input:a}}).then((function(n){n.data.customerCreate.customer?(e.closeCustomerAuth(),e.showAccountVerificationMessage()):n.data.customerCreate.userErrors.forEach((function(e){e.field&&"email"===e.field?f(e.message):e.field&&"password"===e.field?C(e.message):j(e.message)}))}))},w=function(n,t){var a={email:n,password:t};e.customerAccessTokenCreate({variables:{input:a}}).then((function(n){n.data.customerAccessTokenCreate.customerAccessToken?e.associateCustomerCheckout(n.data.customerAccessTokenCreate.customerAccessToken.accessToken):n.data.customerAccessTokenCreate.userErrors.forEach((function(e){e.field&&"email"===e.field?f(e.message):e.field&&"password"===e.field?C(e.message):j(e.message)}))}))};return Object(q.jsxs)("div",{className:"CustomerAuth ".concat(e.isCustomerAuthOpen?"CustomerAuth--open":""),children:[Object(q.jsx)("button",{onClick:function(){e.closeCustomerAuth(),_(),o(""),c("")},className:"CustomerAuth__close",children:"\xd7"}),Object(q.jsxs)("div",{className:"CustomerAuth__body",children:[Object(q.jsx)("h2",{className:"CustomerAuth__heading",children:e.newCustomer?"Create your Account":"Log in to your account"}),m&&Object(q.jsx)("div",{className:"error",children:m}),Object(q.jsxs)("label",{className:"CustomerAuth__credential",children:[Object(q.jsx)("input",{className:"CustomerAuth__input",type:"email",placeholder:"Email",name:"email",value:a,onChange:function(e){c(e.target.value)}}),O&&Object(q.jsx)("div",{className:"error",children:O})]}),Object(q.jsxs)("label",{className:"CustomerAuth__credential",children:[Object(q.jsx)("input",{className:"CustomerAuth__input",type:"password",placeholder:"Password",name:"password",value:s,onChange:function(e){return o(e.target.value)}}),v&&Object(q.jsx)("div",{className:"error",children:v})]}),Object(q.jsx)("button",{className:"CustomerAuth__submit button",type:"submit",onClick:function(){_(),e.newCustomer?k(a,s):w(a,s)},children:e.newCustomer?"Create Account":"Log in"})]})]})}));var xe=function(){var e=Object(u.useContext)(R),n=e.shopLoading,t=e.shopError,a=e.closeCustomerAuth,c=e.isCustomerAuthOpen,i=e.isNewCustomer,r=e.associateCustomerCheckout,s=e.accountVerificationMessage,o=e.shopData,l=e.addVariantToCart,d=e.checkout,m=e.setCheckout,b=e.createCheckoutMutation,j=(e.query,function(){var e=Object(oe.a)(se.a.mark((function e(n){var t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,cn.query({query:$,variables:{id:n}});case 2:return t=e.sent,e.abrupt("return",t.data.node);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());return Object(u.useEffect)((function(){console.log("render"),function(){var e=Object(oe.a)(se.a.mark((function e(){var n,t,a;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("shopify_checkout_id"),t=function(e){localStorage.setItem("shopify_checkout_id",e.id),m(e)},!n){e.next=15;break}return e.prev=3,e.next=6,j(n);case 6:if((a=e.sent).completedAt){e.next=10;break}return t(a),e.abrupt("return");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),localStorage.setItem("shopify_checkout_id",null);case 15:b({variables:{input:{}}}).then((function(e){console.log(e)}),(function(e){console.log("create checkout error",e)}));case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}()()}),[d]),t?Object(q.jsx)("p",{children:t.message}):Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)(fe,{closeCustomerAuth:a,isCustomerAuthOpen:c,newCustomer:i,associateCustomerCheckout:r,showAccountVerificationMessage:s}),Object(q.jsx)("div",{className:"Product-wrapper",children:n?Object(q.jsx)("p",{children:"Loading..."}):Object(q.jsx)(q.Fragment,{children:o.shop.products.edges.map((function(e){return Object(q.jsx)(be,{addVariantToCart:l,checkout:d,product:e.node},e.node.id.toString())}))})})]})},ge=function(){var e={marginTop:20};return Object(q.jsxs)("div",{className:"content-container",children:[Object(q.jsx)("div",{children:Object(q.jsx)(J,{children:Object(q.jsx)(W,{children:" The secondhand fashion magazine."})})}),Object(q.jsx)(xe,{}),Object(q.jsxs)(G,{children:[Object(q.jsx)(Y,{style:e,children:Object(q.jsx)(X,{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/mildewmag",children:"@mildewmag"})}),Object(q.jsx)(Y,{style:e,children:Object(q.jsx)(X,{rel:"noreferrer",target:"_blank",href:"mailto:mildewmag@gmail.com",children:"mildewmag@gmail.com"})}),Object(q.jsx)(Y,{style:{marginTop:20,marginBottom:40,paddingBottom:40},children:Object(q.jsx)(K,{to:"/about",children:"About Mildew"})})]})]})};var ve=function(e){return Object(q.jsxs)("li",{className:"Line-item",children:[Object(q.jsx)("div",{className:"Line-item__img",children:e.line_item.variant.image?Object(q.jsx)("img",{src:e.line_item.variant.image.src,alt:"".concat(e.line_item.title," product shot")}):null}),Object(q.jsxs)("div",{className:"Line-item__content",children:[Object(q.jsxs)("div",{className:"Line-item__content-row",children:[Object(q.jsx)("div",{className:"Line-item__variant-title",children:e.line_item.variant.title}),Object(q.jsx)("span",{className:"Line-item__title",children:e.line_item.title})]}),Object(q.jsxs)("div",{className:"Line-item__content-row",children:[Object(q.jsxs)("div",{className:"Line-item__quantity-container",children:[Object(q.jsx)("button",{className:"Line-item__quantity-update",onClick:function(){return function(n){var t=e.line_item.quantity-1;e.updateLineItemInCart(n,t)}(e.line_item.id)},children:"-"}),Object(q.jsx)("span",{className:"Line-item__quantity",children:e.line_item.quantity}),Object(q.jsx)("button",{className:"Line-item__quantity-update",onClick:function(){return function(n){var t=e.line_item.quantity+1;e.updateLineItemInCart(n,t)}(e.line_item.id)},children:"+"})]}),Object(q.jsxs)("span",{className:"Line-item__price",children:[Object(q.jsx)("span",{className:"spacer"}),"$"," ",parseInt((e.line_item.quantity*e.line_item.variant.price).toFixed(2),10)]}),Object(q.jsx)("button",{className:"Line-item__remove",onClick:function(){return e.removeLineItemInCart(e.line_item.id)},children:"\xd7"})]})]})]})};var Ce,_e,ke,we,Ie,Ne,ye,Ae,Le,Te,Pe,Se,Ee=function(){var e=Object(u.useContext)(R),n=e.isCartOpen,t=e.removeLineItemInCart,a=e.checkout,c=e.updateLineItemInCart,i=e.handleCartClose,r=a.lineItems.edges.map((function(e){return Object(q.jsx)(ve,{removeLineItemInCart:t,updateLineItemInCart:c,line_item:e.node},e.node.id.toString())}));return Object(q.jsxs)("div",{className:"Cart ".concat(n?"Cart--open":""),children:[Object(q.jsxs)("header",{className:"Cart__header",children:[Object(q.jsx)("h2",{className:"Cart__title",children:"Your cart"}),Object(q.jsx)("button",{onClick:i,className:"Cart__close",children:"\xd7"})]}),Object(q.jsx)("ul",{className:"Cart__line-items",children:r}),Object(q.jsxs)("footer",{className:"Cart__footer",children:[Object(q.jsxs)("div",{className:"Cart-info clearfix",children:[Object(q.jsx)("div",{className:"Cart-info__total Cart-info__small",children:"Subtotal"}),Object(q.jsx)("div",{className:"Cart-info__pricing",children:Object(q.jsxs)("span",{className:"pricing",children:["$ ",a.subtotalPrice]})})]}),Object(q.jsxs)("div",{className:"Cart-info clearfix",children:[Object(q.jsx)("div",{className:"Cart-info__total Cart-info__small",children:"Taxes"}),Object(q.jsx)("div",{className:"Cart-info__pricing",children:Object(q.jsxs)("span",{className:"pricing",children:["$ ",a.totalTax]})})]}),Object(q.jsxs)("div",{className:"Cart-info clearfix",children:[Object(q.jsx)("div",{className:"Cart-info__total Cart-info__small",children:"Total"}),Object(q.jsx)("div",{className:"Cart-info__pricing",children:Object(q.jsxs)("span",{className:"pricing",children:["$ ",a.totalPrice]})})]}),Object(q.jsx)("button",{className:"Cart__checkout button",onClick:function(){window.open(a.webUrl)},children:"Checkout"})]})]})},$e=t.p+"static/media/nav1white.132b6e6e.png",qe=t.p+"static/media/nav1color.27c1cf22.png",Fe=t.p+"static/media/nav2white.9e5f972e.png",Re=t.p+"static/media/nav2color.d32da9fc.png",Me=t.p+"static/media/nav3white.63a4b626.png",De=t.p+"static/media/nav3color.a381fdda.png",Ve=t.p+"static/media/nav4white.09d0259e.png",ze=t.p+"static/media/nav4color.ef8e4338.png",Ue=D.b.div(Ce||(Ce=Object(j.a)(['\n  background: transparent;\n  background-size: cover;\n  color: black;\n  font-family: "TwCen";\n  font-size: 22px;\n  margin: 30px 40px;\n  position: fixed;\n  text-decoration: none;\n  width: 180px;\n  height: 120px;\n  &:hover {\n    color: white;\n  }\n  @media only screen and (max-width: 800px) {\n    display: none;\n  }\n\n  ',";\n\n  ",";\n\n  ",";\n\n  ",";\n"])),(function(e){return e.topLeft&&Object(D.a)(_e||(_e=Object(j.a)(["\n      background-image: url(",");\n      top: 0;\n      left: 0;\n      &:hover {\n        background-image: url(",");\n        transform: rotate(-15deg);\n      }\n    "])),$e,qe)}),(function(e){return e.topRight&&Object(D.a)(ke||(ke=Object(j.a)(["\n      background-image: url(",");\n      top: 0;\n      right: 0;\n      &:hover {\n        background-image: url(",");\n        transform: rotate(15deg);\n      }\n    "])),Fe,Re)}),(function(e){return e.bottomLeft&&Object(D.a)(we||(we=Object(j.a)(["\n      background-image: url(",");\n      bottom: 0;\n      left: 0;\n      &:hover {\n        background-image: url(",");\n        transform: rotate(15deg);\n      }\n    "])),Me,De)}),(function(e){return e.bottomRight&&Object(D.a)(Ie||(Ie=Object(j.a)(["\n      background-image: url(",");\n      bottom: 0;\n      right: 0;\n      width: 210px;\n      padding-bottom: 20px;\n      &:hover {\n        background-image: url(",");\n        transform: rotate(-15deg);\n      }\n    "])),Ve,ze)})),Be=Object(D.b)(B.b)(Ne||(Ne=Object(j.a)(["\n  top: 50%;\n  left: 50%;\n  padding: 50px 50px;\n  position: absolute;\n  text-decoration: none;\n  transform: translate(-50%, -50%);\n  &:hover {\n    color: white;\n  }\n\n  ","\n"])),(function(e){return e.bR&&Object(D.a)(ye||(ye=Object(j.a)(["\n      top: 57%;\n    "])))})),He=D.b.div(Ae||(Ae=Object(j.a)(["\n  top: 50%;\n  left: 50%;\n  padding: 50px 10px;\n  position: absolute;\n  text-decoration: none;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  &:hover {\n    color: white;\n  }\n\n  ","\n"])),(function(e){return e.bR&&Object(D.a)(Le||(Le=Object(j.a)(["\n      top: 57%;\n    "])))})),Je=D.b.div(Te||(Te=Object(j.a)(["\n  position: absolute;\n  top: 0;\n  right: -50;\n  max-width: 1px;\n"]))),We=D.b.img(Pe||(Pe=Object(j.a)(["\n  max-width: 100%;\n"]))),Ye=D.b.div(Se||(Se=Object(j.a)([""]))),Xe=function(e){var n=Object(u.useContext)(R),t=n.isCartOpen,a=n.setCartOpen,c=n.checkout.lineItems.edges.length;return Object(q.jsxs)(Ye,{children:[Object(q.jsx)(Ue,{topLeft:!0,children:Object(q.jsx)(Be,{id:"green",to:"/",children:"Shop"})}),Object(q.jsx)(Ue,{topRight:!0,children:!t&&Object(q.jsx)("div",{children:Object(q.jsxs)(He,{id:"pink",onClick:function(){a(!t)},children:["Cart ",c>0&&"(".concat(c,")")]})})}),Object(q.jsx)(Ue,{bottomLeft:!0,children:Object(q.jsx)(Be,{bR:!0,id:"teal",to:"/about",children:"About"})}),Object(q.jsx)(Ue,{bottomRight:!0,children:Object(q.jsx)(Be,{bR:!0,id:"blue",target:"_blank",to:{pathname:"https://www.instagram.com/mildewmag/"},children:"Instagram"})}),Object(q.jsxs)(H.d,{children:[Object(q.jsx)(H.b,{exact:!0,path:"/",component:ge}),Object(q.jsx)(H.b,{exact:!0,path:"/about",component:ie}),Object(q.jsx)(H.b,{path:"*",children:Object(q.jsx)(H.a,{to:"/"})})]}),Object(q.jsxs)(Je,{children:[Object(q.jsx)(We,{src:qe}),Object(q.jsx)(We,{src:Re}),Object(q.jsx)(We,{src:De}),Object(q.jsx)(We,{src:ze})]}),Object(q.jsx)(Ee,{})]})};var Ge=function(){return Object(q.jsxs)(M,{children:[Object(q.jsx)(U,{}),Object(q.jsx)(Xe,{})]})},Ke=t(23),Qe=t(55),Ze=t(52),en=t(53),nn=t(7),tn=Object(Qe.a)({uri:"https://mildew-magazine.myshopify.com/api/graphql"}),an=Object(Ze.a)((function(){return{headers:{"X-Shopify-Storefront-Access-Token":"129221aad42cfe6398aba443afb14187"}}})),cn=new Ke.a({link:an.concat(tn),cache:new en.a});m.a.render(Object(q.jsx)(B.a,{children:Object(q.jsx)(nn.b,{client:cn,children:Object(q.jsx)(Ge,{client:cn})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.6fc356bd.chunk.js.map