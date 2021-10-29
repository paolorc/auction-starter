(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{142:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(37),o=n.n(a),r=n(204),l=n(14),s=n(96),d=n(10),u=n(191),j=n(217),h=n(209),b=n(206),O=n(202),x=n(205),v=n(199),g=n(218),m=n(192),p=n(193),f=n(19),w=n(92),y=n.n(w).a.create({baseURL:"https://auction-now.herokuapp.com/api/",headers:{"Content-Type":"application/json"}}),C=function(){return window.sessionStorage.getItem("jwt")},A=function(){return window.sessionStorage.removeItem("jwt")};function S(){var e={loading:!1,error:!1,jwt:Object(i.useCallback)(C,[])(),account:{}},t=Object(i.useState)(e),n=Object(d.a)(t,2),c=n[0],a=n[1],o=Object(i.useCallback)((function(e){a(Object(f.a)(Object(f.a)({},c),{},{loading:!0})),function(e){return y({url:"/accounts/login",method:"POST",data:e}).then((function(e){return e.data}))}(e).then((function(e){var t;t=null===e||void 0===e?void 0:e.accessToken,window.sessionStorage.setItem("jwt",t),a(Object(f.a)(Object(f.a)({},c),{},{loading:!1,jwt:null===e||void 0===e?void 0:e.accessToken,account:null===e||void 0===e?void 0:e.account}))})).catch((function(e){A(),a(Object(f.a)(Object(f.a)({},c),{},{loading:!1,error:!0,jwt:""})),console.error(e)}))}),[]);return{fetchAccount:Object(i.useCallback)((function(){a(Object(f.a)(Object(f.a)({},c),{},{loading:!0})),y({url:"/accounts/me",method:"POST",headers:{Authorization:"Bearer ".concat(C())}}).then((function(e){return e.data})).then((function(e){a(Object(f.a)(Object(f.a)({},c),{},{loading:!1,account:e})),a(Object(f.a)(Object(f.a)({},c),{},{account:e}))})).catch((function(e){A(),a(Object(f.a)(Object(f.a)({},c),{},{loading:!1,error:!0,jwt:""})),console.error(e)}))}),[]),login:o,logout:function(){a(Object(f.a)(Object(f.a)({},c),{},{loading:!0})),a(Object(f.a)(Object(f.a)({},e),{},{jwt:""})),A()},account:c.account,isLoggedIn:Boolean(c.jwt),loginLoading:c.loading,loginError:c.error}}var _=n(198),I=n(197),N=n(208),E=n(201),k=n(210),T=n(211),B=n(203),W=n(212),L=n(213),P=n(214),z=n(215),D=n(216),U=n(42),G=n(186);function q(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)({}),o=Object(d.a)(a,2),r=o[0],l=o[1];return{creating:n,setCreating:c,auctionCreated:r,setAuctionCreated:l,publishAuction:function(e){return c(!0),function(e){return y({url:"/auctions/publish",method:"POST",data:e,headers:{Authorization:"Bearer ".concat(C())}}).then((function(e){return e.data}))}(e).then((function(e){l(e),c(!1)}))},unpublishAuction:function(e){return c(!0),function(e){return y({url:"/auctions/unpublish",method:"POST",data:e,headers:{Authorization:"Bearer ".concat(C())}}).then((function(e){return e.data}))}(e).then((function(e){c(!1)}))},updateAuction:function(e,t){return c(!0),function(e,t){return y({url:"/auctions/".concat(e),method:"POST",data:t,headers:{Authorization:"Bearer ".concat(C())}}).then((function(e){return e.data}))}(e,t).then((function(e){l(e),c(!1)}))},setWinner:function(e,t){return c(!0),function(e,t){return y({url:"/auctions/".concat(e,"/winner"),method:"POST",data:{winnerId:t},headers:{Authorization:"Bearer ".concat(C())}}).then((function(e){return e.data}))}(e,t).then((function(e){l(e),c(!1)}))},applyAuction:function(e){return c(!0),function(e){return y({url:"/auctions/".concat(e,"/apply"),method:"POST",headers:{Authorization:"Bearer ".concat(C())}}).then((function(e){return e.data}))}(e).then((function(e){l(e),c(!1)}))},discardAuction:function(e){return c(!0),function(e){return y({url:"/auctions/".concat(e,"/discard"),method:"POST",headers:{Authorization:"Bearer ".concat(C())}}).then((function(e){return e.data}))}(e).then((function(e){l(e),c(!1)}))}}}function H(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),o=Object(d.a)(a,2),r=o[0],l=o[1],s=Object(i.useState)({}),u=Object(d.a)(s,2),j=u[0],h=u[1];return{loading:n,auctions:r,auction:j,setAuction:h,setAuctions:l,getAuctions:function(e){c(!0),function(e){return y({url:"/auctions",method:"GET",params:e,headers:{Authorization:"Bearer ".concat(C())}}).then((function(e){return e.data}))}(e).then((function(e){l(e),c(!1)}))},getAccountAuctions:function(e){c(!0),function(e){return y({url:"/auctions/me",method:"GET",params:e,headers:{Authorization:"Bearer ".concat(C())}}).then((function(e){return e.data}))}(e).then((function(e){l(e),c(!1)}))},getAuctionById:function(e){c(!0),function(e){return y({url:"/auctions/".concat(e),method:"GET"}).then((function(e){return e.data}))}(e).then((function(e){h(e),c(!1)}))}}}var Y=n(0);function R(e){var t=e.account,n=H(),c=n.loading,a=n.auctions,o=n.getAuctions,r=(n.setAuctions,q()),l=r.creating,s=r.auctionCreated,u=r.publishAuction,j=r.setCreating,v=r.applyAuction,g=r.discardAuction,m=Object(i.useState)(""),p=Object(d.a)(m,2),f=p[0],w=p[1],y=Object(i.useState)(!1),C=Object(d.a)(y,2),A=C[0],S=C[1],R=Object(i.useState)(""),J=Object(d.a)(R,2),M=J[0],K=J[1],F=Object(i.useState)(""),Q=Object(d.a)(F,2),V=Q[0],X=Q[1],Z=Object(i.useState)(""),$=Object(d.a)(Z,2),ee=$[0],te=$[1],ne=Object(i.useState)(""),ie=Object(d.a)(ne,2),ce=ie[0],ae=ie[1];Object(i.useEffect)((function(){o({showcased:!0,status:"active"})}),[s]);var oe=function(){S((function(e){return!e})),ae(""),te(""),X(""),K("")};return Object(Y.jsx)("div",{children:Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",alignItems:"center",children:Object(Y.jsx)(O.a,{item:!0,xs:12,children:c?Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",children:Object(Y.jsx)(x.a,{color:"secondary"})}):Object(Y.jsxs)(G.a,{sx:{width:"100%"},flexGrow:1,children:[Object(Y.jsx)(_.a,{open:A,onClose:oe,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(Y.jsxs)(G.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[Object(Y.jsx)(b.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Please complete the fields"}),Object(Y.jsx)("div",{children:Object(Y.jsx)(I.a,{fullWidth:!0,required:!0,label:"Tilte",margin:"normal",onChange:function(e){return K(e.target.value)},value:M})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(I.a,{fullWidth:!0,required:!0,label:"Description",margin:"normal",onChange:function(e){return X(e.target.value)},value:V})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(I.a,{fullWidth:!0,required:!0,label:"Category",margin:"normal",onChange:function(e){return te(e.target.value)},value:ee})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(I.a,{fullWidth:!0,label:"Imagen URL (if not, default is applied)",margin:"normal",onChange:function(e){return ae(e.target.value)},value:ce})}),Object(Y.jsx)(G.a,{marginTop:"10",children:Object(Y.jsx)(N.a,{disabled:l,fullWidth:!0,variant:"contained",color:"info",onClick:function(){w(""),j(!0),u({title:M,description:V,category:ee,imageUrl:ce}).then((function(){j(!1),oe()})).catch((function(e){j(!1),w(e.message),console.log(e.message),oe()}))},children:"Create Auction!"})})]})}),Object(Y.jsxs)("div",{style:{width:"100%"},children:[Object(Y.jsx)("div",{style:{padding:"20px"},children:Object(Y.jsx)(b.a,{id:"modal-modal-title",children:"Here we have our popular Auctions listed!"})}),Boolean(f)&&Object(Y.jsx)("div",{children:Object(Y.jsx)(E.a,{severity:"error",children:f})}),Object(Y.jsx)("div",{style:{padding:"20px"},children:Object(Y.jsx)(N.a,{variant:"outlined",color:"info",onClick:oe,children:"Create New Auction"})}),a.length>0?a.map((function(e){var n,i,c=null===(n=e.appliers)||void 0===n?void 0:n.includes(t._id),a=e.owner._id===t._id;return console.log(a),Object(Y.jsxs)(k.a,{sx:{maxWidth:345,marginBottom:4},children:[Object(Y.jsx)(T.a,{avatar:Object(Y.jsxs)(B.a,{sx:{bgcolor:U.a[500]},"aria-label":"recipe",children:[e.owner.firstName.slice(0,1),e.owner.lastName.slice(0,1)]}),title:e.title,subheader:new Date(e.createdAt).toLocaleString()}),Object(Y.jsx)(W.a,{component:"img",height:"100",image:e.imageUrl||"https://cdn.hswstatic.com/gif/yard-sale-1.jpg",loading:"lazy",alt:"Sell"}),Object(Y.jsx)(L.a,{children:Object(Y.jsxs)(b.a,{variant:"body2",color:"text.secondary",children:[e.description,Object(Y.jsx)(P.a,{}),Object(Y.jsxs)("b",{children:["Total people applied: ",null===(i=e.appliers)||void 0===i?void 0:i.length]})]})}),Object(Y.jsxs)(z.a,{disableSpacing:!0,children:[a&&Object(Y.jsx)(b.a,{variant:"body2",color:"text.secondary",children:"Share your listing with your friends!"}),!c&&e.owner._id!==t._id&&Object(Y.jsx)(N.a,{variant:"contained",color:"success",onClick:function(t){return n=null===e||void 0===e?void 0:e._id,j(!0),void v(n).then((function(e){j(!1)}));var n},children:"Apply now =D"}),c&&e.owner._id!==t._id&&Object(Y.jsx)(N.a,{variant:"contained",color:"warning",onClick:function(t){return n=null===e||void 0===e?void 0:e._id,j(!0),void g(n).then((function(e){j(!1)}));var n},children:"Discard now =("}),Object(Y.jsx)(h.a,{"aria-label":"share"})]}),Object(Y.jsx)(D.a,{timeout:"auto",unmountOnExit:!0,children:Object(Y.jsxs)(L.a,{children:[Object(Y.jsx)(b.a,{paragraph:!0,children:"Method:"}),Object(Y.jsx)(b.a,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]},e._id)})):Object(Y.jsx)("div",{style:{padding:"20px"},children:Object(Y.jsxs)(b.a,{id:"modal-modal-title",children:["Upss It seems that nobody have something to drop off here, start creating!",Object(Y.jsx)(G.a,{marginTop:"10",paddingTop:"30",children:Object(Y.jsx)(N.a,{fullWidth:!0,variant:"contained",color:"info",children:"Create Auction!"})})]})})]})]})})})})}function J(e){var t=e.account,n=H(),c=n.loading,a=n.auctions,o=n.getAuctions,r=q().auctionCreated;return Object(i.useEffect)((function(){o({showcased:!0,winners:!0})}),[r]),Object(Y.jsx)("div",{children:Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",alignItems:"center",children:Object(Y.jsx)(O.a,{item:!0,xs:12,children:c?Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",children:Object(Y.jsx)(x.a,{color:"secondary"})}):Object(Y.jsx)(G.a,{sx:{width:"100%"},flexGrow:1,children:Object(Y.jsxs)("div",{style:{width:"100%"},children:[Object(Y.jsx)("div",{style:{padding:"20px"},children:Object(Y.jsx)(b.a,{id:"modal-modal-title",children:"Congrats our winners!"})}),a.length>0?a.map((function(e){null===(n=e.appliers)||void 0===n||n.includes(t._id);var n,i,c,a,o,r,l,s,d,u=e.owner._id===t._id;return console.log(u),Object(Y.jsxs)(k.a,{sx:{maxWidth:345,marginBottom:4},children:[Object(Y.jsx)(T.a,{avatar:Object(Y.jsxs)(B.a,{sx:{bgcolor:U.a[500]},"aria-label":"recipe",children:[e.owner.firstName.slice(0,1),e.owner.lastName.slice(0,1)]}),title:e.title,subheader:new Date(e.createdAt).toLocaleString()}),Object(Y.jsx)(W.a,{component:"img",height:"100",image:e.imageUrl,loading:"lazy",alt:"Sell"}),Object(Y.jsx)(L.a,{children:Object(Y.jsxs)(b.a,{variant:"body2",color:"text.secondary",children:[e.description,Object(Y.jsx)(P.a,{}),(null===e||void 0===e||null===(i=e.winner)||void 0===i?void 0:i._id)===(null===t||void 0===t?void 0:t._id)?Object(Y.jsx)("b",{children:"Amazing you won! Please contact with auction responsible. Thank you!"}):Object(Y.jsxs)("b",{children:[null===e||void 0===e||null===(c=e.winner)||void 0===c?void 0:c.firstName," ",null===e||void 0===e||null===(a=e.winner)||void 0===a?void 0:a.lastName," Won!"]})]})}),(null===e||void 0===e||null===(o=e.winner)||void 0===o?void 0:o._id)===(null===t||void 0===t?void 0:t._id)&&Object(Y.jsx)(D.a,{style:{backgroundColor:"skyblue"},in:!0,timeout:"auto",unmountOnExit:!0,children:Object(Y.jsx)(L.a,{children:Object(Y.jsxs)(b.a,{children:["Email: ",null===e||void 0===e||null===(r=e.owner)||void 0===r||null===(l=r.profile)||void 0===l?void 0:l.email,"Phone: ",null===e||void 0===e||null===(s=e.owner)||void 0===s||null===(d=s.profile)||void 0===d?void 0:d.phone]})})},null===e||void 0===e?void 0:e._id)]},e._id)})):Object(Y.jsx)("div",{style:{padding:"20px"},children:Object(Y.jsx)(b.a,{id:"modal-modal-title",children:"Upss It seems that nobody have won yet, start creating and applying some listings!"})})]})})})})})}var M="auctions",K="winners";function F(){var e=S(),t=e.account,n=e.fetchAccount,c=e.isLoggedIn,a=e.loginLoading,o=e.logout,r=Object(i.useState)(M),s=Object(d.a)(r,2),f=s[0],w=s[1];if(Object(i.useEffect)((function(){!c||t.firstName||a||(console.log("fetching missing account data!"),n())}),[c,t,n]),!c)return console.log("Needed to log!"),Object(Y.jsx)(l.a,{to:"/login"});return Object(Y.jsxs)(u.a,{height:"150",children:[Object(Y.jsx)(j.a,{position:"static",children:Object(Y.jsxs)(u.a,{display:"flex",flexDirection:"row",alignItems:"center",children:[Object(Y.jsxs)(h.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",href:"/account",color:"inherit",children:[Object(Y.jsx)(m.a,{})," ",Object(Y.jsxs)(b.a,{variant:"h6",component:"div",children:[t.firstName," ",t.lastName]})]}),Object(Y.jsx)("div",{style:{width:"90%"}}),Object(Y.jsx)(h.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){o()},color:"inherit",children:Object(Y.jsx)(p.a,{})})]})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",alignItems:"center",children:Object(Y.jsx)(O.a,{item:!0,xs:12,children:a?Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",children:Object(Y.jsx)(x.a,{color:"secondary"})}):Object(Y.jsxs)(u.a,{sx:{width:"100%"},flexGrow:1,children:[Object(Y.jsxs)(v.a,{value:f,onChange:function(e,t){w(t)},textColor:"secondary",indicatorColor:"secondary",children:[Object(Y.jsx)(g.a,{value:M,label:"Auctions"}),Object(Y.jsx)(g.a,{value:K,label:"Winners"})]}),f===M?Object(Y.jsx)(R,{account:t}):Object(Y.jsx)(J,{account:t})]})})})})]})}function Q(){var e=Object(i.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(""),o=Object(d.a)(a,2),r=o[0],s=o[1],j=S(),h=j.login,v=j.loginError,g=j.loginLoading;if(j.isLoggedIn&&!g)return console.log("logged in, go Home!"),Object(Y.jsx)(l.a,{to:"/home"});var m=function(){h({email:n,password:r})};return Object(Y.jsx)("div",{children:Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",alignItems:"center",children:Object(Y.jsxs)(O.a,{item:!0,xs:12,children:[Object(Y.jsx)(b.a,{variant:"h3",align:"center",color:"secondary",children:"Auctions Now!"}),Object(Y.jsx)(b.a,{variant:"h6",align:"center",color:"secondary",children:"Login"}),g&&Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",children:Object(Y.jsx)(x.a,{color:"secondary"})}),!g&&Object(Y.jsxs)(u.a,{component:"form",children:[Object(Y.jsx)("div",{children:Object(Y.jsx)(I.a,{fullWidth:!0,required:!0,id:"outlined-required",label:"Email",onChange:function(e){return c(e.target.value)},value:n})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(I.a,{fullWidth:!0,required:!0,type:"password",id:"password",label:"Password",margin:"normal",onChange:function(e){return s(e.target.value)},value:r,onKeyDown:function(e){var t=e.which;console.log(t),13===t&&m()}})}),Object(Y.jsx)(u.a,{marginTop:"10",children:Object(Y.jsx)(N.a,{fullWidth:!0,variant:"contained",color:"success",onClick:m,children:"GO"})}),Object(Y.jsx)(u.a,{children:v&&Object(Y.jsx)(b.a,{id:"modal-modal-title",children:"Invalid user, try again please."})})]})]})})})}var V=n(76),X=Object(V.a)({palette:{primary:{main:"#757575"},secondary:{main:"#01579b"}}}),Z=n(195);function $(e){var t=e.account,n=H(),c=n.loading,a=n.auctions,o=n.getAuctions,r=q(),l=r.auctionCreated,s=r.discardAuction,d=r.setCreating;Object(i.useEffect)((function(){o({applied:!0})}),[l]);return Object(Y.jsx)("div",{children:Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",alignItems:"center",children:Object(Y.jsx)(O.a,{item:!0,xs:12,children:c?Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",children:Object(Y.jsx)(x.a,{color:"secondary"})}):Object(Y.jsx)(G.a,{sx:{width:"100%"},flexGrow:1,children:Object(Y.jsxs)("div",{style:{width:"100%"},children:[Object(Y.jsx)("div",{style:{padding:"20px"},children:Object(Y.jsx)(b.a,{id:"modal-modal-title",children:"Your applies!"})}),a.length>0?a.map((function(e){var n,i,c,a,o,r,l,u=(null===e||void 0===e||null===(n=e.winner)||void 0===n?void 0:n._id)===t._id;return Object(Y.jsxs)(k.a,{sx:{maxWidth:345,marginBottom:4},children:[Object(Y.jsx)(T.a,{avatar:Object(Y.jsxs)(B.a,{sx:{bgcolor:U.a[500]},"aria-label":"recipe",children:[e.owner.firstName.slice(0,1),e.owner.lastName.slice(0,1)]}),title:e.title,subheader:new Date(e.createdAt).toLocaleString()}),Object(Y.jsx)(W.a,{component:"img",height:"100",image:e.imageUrl,loading:"lazy",alt:"Sell"}),Object(Y.jsx)(L.a,{children:Object(Y.jsxs)(b.a,{variant:"body2",color:"text.secondary",children:[e.description,Object(Y.jsx)(P.a,{}),u&&Object(Y.jsx)("b",{color:"blue",children:"Amazing you won! Please contact with the person below"}),(null===e||void 0===e?void 0:e.winner)&&Object(Y.jsxs)("b",{children:[null===e||void 0===e||null===(i=e.winner)||void 0===i?void 0:i.firstName," ",null===e||void 0===e||null===(c=e.winner)||void 0===c?void 0:c.lastName," Won!"]}),!u&&!(null===e||void 0===e?void 0:e.winner)&&Object(Y.jsxs)("div",{children:[Object(Y.jsx)("br",{}),Object(Y.jsx)(N.a,{variant:"contained",color:"warning",onClick:function(t){return n=null===e||void 0===e?void 0:e._id,d(!0),void s(n).then((function(e){d(!1)}));var n},children:"Discard now =("})]})]})}),u&&Object(Y.jsx)(D.a,{in:!0,timeout:"auto",unmountOnExit:!0,children:Object(Y.jsxs)(L.a,{children:[Object(Y.jsxs)(b.a,{children:["Email: ",null===e||void 0===e||null===(a=e.owner)||void 0===a||null===(o=a.profile)||void 0===o?void 0:o.email]}),Object(Y.jsxs)(b.a,{children:["Phone: ",null===e||void 0===e||null===(r=e.owner)||void 0===r||null===(l=r.profile)||void 0===l?void 0:l.phone]})]})},null===e||void 0===e?void 0:e._id)]},e._id)})):Object(Y.jsx)("div",{style:{padding:"20px"},children:Object(Y.jsx)(b.a,{id:"modal-modal-title",children:"Upss It seems that you dont have any apply to a recent auction... Got and get some"})})]})})})})})}var ee=n(196),te=n(194);function ne(e){var t=e.account,n=H(),c=n.loading,a=n.auctions,o=n.getAccountAuctions,r=q(),l=r.auctionCreated,s=r.setCreating,u=r.setWinner,j=r.creating,v=r.unpublishAuction,g=Object(i.useState)(""),m=Object(d.a)(g,2),p=m[0],f=m[1];Object(i.useEffect)((function(){o({})}),[l,j]);return Object(Y.jsx)("div",{children:Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",alignItems:"center",children:Object(Y.jsx)(O.a,{item:!0,xs:12,children:c?Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",children:Object(Y.jsx)(x.a,{color:"secondary"})}):Object(Y.jsx)(G.a,{sx:{width:"100%"},flexGrow:1,children:Object(Y.jsxs)("div",{style:{width:"100%"},children:[Object(Y.jsx)("div",{style:{padding:"20px"},children:Object(Y.jsx)(b.a,{id:"modal-modal-title",children:"Here we have our popular Auctions listed!"})}),Boolean(p)&&Object(Y.jsx)("div",{children:Object(Y.jsx)(E.a,{severity:"error",children:p})}),a.length>0?a.map((function(e){null===(n=e.appliers)||void 0===n||n.includes(null===t||void 0===t?void 0:t._id);var n,i,c,a,o,r,l,d,j=e.owner._id===t._id;return console.log(j),Object(Y.jsxs)(k.a,{sx:{maxWidth:345,marginBottom:4,padding:2},children:[Object(Y.jsx)(T.a,{avatar:Object(Y.jsxs)(B.a,{sx:{bgcolor:U.a[500]},"aria-label":"recipe",children:[e.owner.firstName.slice(0,1),e.owner.lastName.slice(0,1)]}),action:Object(Y.jsx)(b.a,{variant:"body2",color:"text.secondary",children:Object(Y.jsx)("b",{children:e.status.toUpperCase()})}),title:e.title,subheader:new Date(e.createdAt).toLocaleString()}),Object(Y.jsx)(W.a,{component:"img",height:"100",image:e.imageUrl||"https://cdn.hswstatic.com/gif/yard-sale-1.jpg",loading:"lazy",alt:"Sell"}),Object(Y.jsx)(L.a,{children:Object(Y.jsxs)(b.a,{variant:"body2",color:"text.secondary",children:[e.description,Object(Y.jsx)(P.a,{}),Object(Y.jsxs)("b",{children:["Total people applied: ",null===(i=e.appliers)||void 0===i?void 0:i.length]})]})}),Object(Y.jsx)(z.a,{disableSpacing:!0,children:Object(Y.jsx)(ee.a,{title:"Delete",children:Object(Y.jsx)(h.a,{onClick:function(){return t=null===e||void 0===e?void 0:e._id,s(!0),void v({auctionId:t}).then((function(e){s(!1)})).catch((function(e){s(!1),f(e.message),console.log(e.message)}));var t},children:Object(Y.jsx)(te.a,{})})})}),Object(Y.jsxs)(D.a,{in:!0,timeout:"auto",unmountOnExit:!0,children:[(null===e||void 0===e?void 0:e.appliers)&&"finished"!==(null===e||void 0===e?void 0:e.status)&&(null===e||void 0===e||null===(c=e.appliers)||void 0===c?void 0:c.length)>0&&e.appliers.map((function(t){var n,i;return Object(Y.jsxs)(k.a,{style:{marginBottom:10},children:[Object(Y.jsxs)(L.a,{children:[Object(Y.jsxs)(b.a,{children:["Email: ",null===t||void 0===t||null===(n=t.profile)||void 0===n?void 0:n.email]}),Object(Y.jsxs)(b.a,{children:["Phone: ",null===t||void 0===t||null===(i=t.profile)||void 0===i?void 0:i.phone]})]}),Object(Y.jsx)(N.a,{variant:"contained",color:"primary",onClick:function(n){return i=null===e||void 0===e?void 0:e._id,c=null===t||void 0===t?void 0:t._id,s(!0),void u(i,c).then((function(e){s(!1)})).catch((function(e){s(!1),f(e.message),console.log(e.message)}));var i,c},children:"SELECT WINNER!"})]},null===t||void 0===t?void 0:t._id)})),(null===e||void 0===e?void 0:e.winner)&&"finished"===(null===e||void 0===e?void 0:e.status)&&Object(Y.jsxs)(k.a,{children:[Object(Y.jsx)(L.a,{children:Object(Y.jsxs)(b.a,{paragraph:!0,children:["You choose ",null===e||void 0===e||null===(a=e.winner)||void 0===a?void 0:a.firstName," as the winner!"]})}),Object(Y.jsxs)(L.a,{children:[Object(Y.jsx)(b.a,{paragraph:!0,children:"Contact Details:"}),Object(Y.jsxs)(b.a,{children:["Email: ",null===e||void 0===e||null===(o=e.winner)||void 0===o||null===(r=o.profile)||void 0===r?void 0:r.email]}),Object(Y.jsxs)(b.a,{children:["Phone: ",null===e||void 0===e||null===(l=e.winner)||void 0===l||null===(d=l.profile)||void 0===d?void 0:d.phone]})]})]})]},null===e||void 0===e?void 0:e._id)]},e._id)})):Object(Y.jsx)("div",{style:{padding:"20px"},children:Object(Y.jsx)(b.a,{id:"modal-modal-title",children:"Upss It seems that nobody have something to drop off here, start creating!"})})]})})})})})}var ie="applied",ce="listings",ae=function(e,t){return{applied:Object(Y.jsx)($,{account:e}),finished:Object(Y.jsx)($,{account:e}),listings:Object(Y.jsx)(ne,{account:e})}[t]};function oe(){var e=S(),t=e.account,n=e.fetchAccount,c=e.isLoggedIn,a=e.loginLoading,o=e.logout,r=Object(i.useState)(ce),s=Object(d.a)(r,2),m=s[0],f=s[1];if(Object(i.useEffect)((function(){!c||t.firstName||a||(console.log("fetching missing account data!"),n())}),[c,t,n]),!c)return console.log("Needed to log!"),Object(Y.jsx)(l.a,{to:"/login"});return Object(Y.jsxs)(u.a,{height:"150",children:[Object(Y.jsx)(j.a,{position:"static",children:Object(Y.jsxs)(u.a,{display:"flex",flexDirection:"row",alignItems:"center",children:[Object(Y.jsxs)(h.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",href:"/home",color:"inherit",children:[Object(Y.jsx)(Z.a,{}),Object(Y.jsxs)(b.a,{variant:"h6",component:"div",children:["Back Home ",t.firstName," ",t.lastName]})]}),Object(Y.jsx)("div",{style:{width:"90%"}}),Object(Y.jsx)(h.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){o()},color:"inherit",children:Object(Y.jsx)(p.a,{})})]})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",alignItems:"center",children:Object(Y.jsx)(O.a,{item:!0,xs:12,children:a?Object(Y.jsx)(O.a,{container:!0,direction:"column",alignContent:"center",children:Object(Y.jsx)(x.a,{color:"secondary"})}):Object(Y.jsxs)(u.a,{sx:{width:"100%"},flexGrow:1,children:[Object(Y.jsxs)(v.a,{value:m,onChange:function(e,t){f(t)},textColor:"secondary",indicatorColor:"secondary",children:[Object(Y.jsx)(g.a,{value:ce,label:"Your Listings"}),Object(Y.jsx)(g.a,{value:ie,label:"Your Applies"})]}),ae(t,m)]})})})})]})}var re=function(){return Object(Y.jsx)(l.a,{to:"/home"})};var le=function(){return Object(Y.jsx)(r.a,{theme:X,children:Object(Y.jsx)(s.a,{children:Object(Y.jsxs)(l.d,{children:[Object(Y.jsx)(l.b,{exact:!0,path:"/login",component:Q}),Object(Y.jsx)(l.b,{exact:!0,path:"/home",component:F}),Object(Y.jsx)(l.b,{exact:!0,path:"/account",component:oe}),Object(Y.jsx)(l.b,{component:re})]})})})};o.a.render(Object(Y.jsx)(c.a.StrictMode,{children:Object(Y.jsx)(le,{})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.c988da95.chunk.js.map