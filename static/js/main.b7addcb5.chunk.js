(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{48:function(e){e.exports=JSON.parse('{"school":[{"name":"BTS SIO","location":"Lyc\xe9e Louis Armand","year":"2019 - 2021"},{"name":"CPGE MPSI","location":"Lyc\xe9e Michelet","year":"2018 - 2019"},{"name":"BAC S","location":"Lyc\xe9e Politzer","year":"2018"}],"work":[{"name":"Front end dev","location":"WOODY","year":"2021 (8 weeks)"},{"name":"Mobile dev","location":"Uballers","year":"2020 (8 weeks)"}]}')},49:function(e){e.exports=JSON.parse('{"School":[{"title":"Sephora Lips","img":"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/033b81b839890e8e47434f5aee579e02","url":""},{"title":"AC19","img":"https://raw.githubusercontent.com/deromeem/AC19/master/images/ac19/logo_ac19.png","url":""}],"Pro":[{"title":"File Browser","img":"https://chonky.io/chonky-sphere-v2.png","url":""},{"title":"Uballers Mobile App","img":"https://uballers.com/assets/img/brand/BallonRouge.png","url":""}],"Games":[{"title":"Voltventure","img":"https://img.itch.zone/aW1nLzQ0MDAyOTQucG5n/315x250%23c/QrWZaG.png","url":""},{"title":"Cupgrade","img":"https://img.itch.zone/aW1nLzM3MjMwMDcucG5n/315x250%23c/FRfmbU.png","url":""},{"title":"Train your mind","img":"https://img.itch.zone/aW1nLzM1OTk5MzAucG5n/315x250%23c/5IOjSk.png","url":""},{"title":"Island Invasion","img":"https://img.itch.zone/aW1nLzM0MzAxMDkucG5n/315x250%23c/zfBCp1.png","url":""},{"title":"Crazy lights","img":"https://img.itch.zone/aW1nLzMzMzY5MTMucG5n/315x250%23c/%2FEjA15.png","url":""}],"Web":[{"title":"Tindog","img":"https://raw.githubusercontent.com/AntoninJuquel/tindog/master/images/dog-img.jpg","url":""},{"title":"Drumkit","img":"https://raw.githubusercontent.com/AntoninJuquel/drumkit/master/images/kick.png","url":""},{"title":"Simon","img":"https://raw.githubusercontent.com/AntoninJuquel/simon/master/simonIco.png","url":""},{"title":"Finger dice","img":"https://raw.githubusercontent.com/AntoninJuquel/fingerdice/master/images/dice.png","url":""}],"Mobile":[{"title":"Cheat Alleycat","img":"https://raw.githubusercontent.com/AntoninJuquel/Cheat_Alleycat/master/assets/icon.png","url":""}]}')},72:function(e,t,a){e.exports=a(88)},77:function(e,t,a){},78:function(e){e.exports=JSON.parse('{"about":{"title":"About me","hire":"Hire me","cv":"Download CV","story":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},"blog":{"title":"Blog"},"contact":{"title":"Contact me","firstName":"First Name","lastName":"Last Name","email":"Email","subject":"Subject","message":"Message","send":"Send"},"experience":{"title":"My experience","school":"School","pro":"Pro"},"introduction":{"who":"I\'m Antonin","what":"An Independant Developper"},"navbar":{"about":"About","experience":"Experience","projects":"Projects","blog":"Blog","contact":"Contact"},"projects":{"school":"School","pro":"Pro","games":"Games","web":"Web","mobiles":"Mobiles"}}')},79:function(e){e.exports=JSON.parse('{"about":{"title":"\xc0 props de moi","hire":"Recrutez moi !","cv":"T\xe9l\xe9charger mon CV","story":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},"blog":{"title":"Blog"},"contact":{"title":"Me contacter","firstName":"Pr\xe9nom","lastName":"Nom de famille","email":"Email","subject":"Sujet","message":"Message","send":"Envoyer"},"experience":{"title":"Mon experience","school":"Ecole","pro":"Pro"},"introduction":{"who":"Je suis Antonin","what":"Un developper ind\xe9pendant"},"navbar":{"about":"\xc0 propos","experience":"Experience","projects":"Projects","blog":"Blog","contact":"Contact"},"projects":{"school":"Ecole","pro":"Pro","games":"Jeux","web":"Web","mobiles":"Mobiles"}}')},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=(a(77),a(137)),i=a(27),s=a(138),m=a(29),u=Object(n.createContext)(null);function p(e){var t=e.children,l=Object(n.useState)("francais"),o=Object(m.a)(l,2),c=o[0],i=o[1],s={english:a(78),francais:a(79)},p=Object(n.useCallback)((function(){return s[c]}),[c,s]),g=Object(n.useMemo)((function(){return{language:c,setLanguage:i,GetLanguageFile:p}}),[c,i,p]);return r.a.createElement(u.Provider,{value:g},t)}var g=a(141),f=a(118),h=Object(n.forwardRef)((function(e,t){var a=Object(n.useState)(null),l=Object(m.a)(a,2),o=l[0],c=l[1],i=e.classes;return Object(n.useImperativeHandle)(t,(function(){return{setModal:c}})),r.a.createElement(g.a,{open:null!==o,onClose:function(){return c(null)}},r.a.createElement(f.a,{className:i.modal},o))})),d=Object(n.createContext)(null);function E(e){var t=e.children,a=e.classes,l=Object(n.useRef)(null),o=Object(n.useMemo)((function(){return{modalRef:l}}),[l]);return r.a.createElement(d.Provider,{value:o},r.a.createElement(h,{ref:l,classes:a}),t)}var b=function(){return Object(n.useContext)(d).modalRef},y=a(120),v=Object(y.a)({title:{fontWeight:"bold",fontSize:52},subTitle:{fontSize:32},container:{marginTop:250,marginBottom:250},textField:{background:"linear-gradient(90deg, #cccccc,#FFFFFF, #cccccc)",border:0,borderRadius:3},buttonWrapper:{marginTop:10},modal:{textAlign:"center",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",outline:"none"},paper:{padding:"6px 16px",color:"white",width:"100%"},navbar:{backgroundColor:"#121212",color:"white"},brand:{flexGrow:1},brandText:{cursor:"pointer"}}),w=a(61),x=a(121),k=a(122),j=Object(w.a)({palette:{primary:{main:x.a[900]},secondary:{main:k.a[500]},background:{default:"#121212",paper:x.a[900]},text:{primary:"#000"}}}),M=a(123),O=a(62),A=a(142),C=a(124),z=a(125),S=a(140),N=a(126),P=a(13);var L=function(e){var t=e.sections,a=e.classes,n=e.isMobile,l=r.a.useState(null),o=Object(m.a)(l,2),c=o[0],i=o[1],s=Boolean(c),u=function(e){i(e.currentTarget)},p=function(e){window.scrollTo({behavior:"smooth",top:t[e].ref.current.offsetTop-64}),i(null)};return r.a.createElement(C.a,{className:a.navbar},r.a.createElement(z.a,null,r.a.createElement(S.a,{className:a.brand},r.a.createElement(N.a,{display:"inline",variant:"h4",className:a.brandText,onClick:function(){return window.scrollTo({behavior:"smooth",top:0})}},"Antonin J.")),n?r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:u},r.a.createElement(P.a,null)),r.a.createElement(O.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:function(){return i(null)}},Object.keys(t).map((function(e,t){return r.a.createElement(A.a,{key:t,onClick:function(){return p(e)}},e)})))):Object.keys(t).map((function(e,t){return r.a.createElement(M.a,{color:"inherit",key:t,onClick:function(){return p(e)}},e)}))))},I=a(127);var F=function(e){var t=e.title,a=e.subTitle,n=e.center,l=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{variant:"h1",className:l.title,style:n&&{textAlign:"center"}},t),r.a.createElement(N.a,{variant:"h4",paragraph:!0,style:n&&{textAlign:"center"}},a))};var T=function(e){var t=e.classes,a=[{icon:function(e){return r.a.createElement(P.f,e)},url:"https://www.linkedin.com/in/antonin-juquel/"},{icon:function(e){return r.a.createElement(P.e,e)},url:"https://somindras.itch.io"},{icon:function(e){return r.a.createElement(P.d,e)},url:"https://github.com/AntoninJuquel"},{icon:function(e){return r.a.createElement(P.c,e)},url:"https://www.facebook.com/AntoninJuquel/"},{icon:function(e){return r.a.createElement(P.h,e)},url:"https://twitter.com/Somindras"},{icon:function(e){return r.a.createElement(P.i,e)},url:"https://www.youtube.com/channel/UCsgdfHWgax10z-av8KwzLlw"}];function n(){return a.map((function(e,t){return r.a.createElement("a",{style:{margin:"0px 5px 15px"},key:t,target:"_blank",href:e.url,rel:"noopener noreferrer"},r.a.createElement(e.icon,{style:{fontSize:28,color:"white"}}))}))}return r.a.createElement(f.a,{className:t.container},r.a.createElement(I.a,{container:!0},r.a.createElement(I.a,{item:!0,sm:12,lg:6},r.a.createElement(F,{classes:t,title:"I'm Antonin",subTitle:"Indie Developper"}),r.a.createElement(I.a,{container:!0},r.a.createElement(n,null))),r.a.createElement(I.a,{item:!0,sm:12,lg:6},r.a.createElement("img",{alt:"MyImage",src:"https://ih0.redbubble.net/image.725661211.7020/flat,1000x1000,075,f.jpg",width:"100%"}))))},J=a(128);var W=function(e){var t=e.classes,a=Object(n.useContext)(u).GetLanguageFile;return r.a.createElement(f.a,{ref:e.refProp,className:t.container},r.a.createElement(F,{classes:t,title:a().about.title,subTitle:a().about.story}),r.a.createElement(I.a,{container:!0,spacing:10,className:t.buttonWrapper},r.a.createElement(I.a,{item:!0},r.a.createElement(J.a,{color:"primary",variant:"contained",size:"large",onClick:function(){return window.scrollTo({top:e.contactRef.current.offsetTop-64})}},r.a.createElement("strong",null,a().about.hire))),r.a.createElement(I.a,{item:!0},r.a.createElement(J.a,{color:"primary",variant:"contained",size:"large"},r.a.createElement("strong",null,a().about.cv)))))},B=a(129),R=a(130),q=a(131),G=a(132),D=a(133),_=a(134),U=a(135),Q=a(64),H=a(91),V=a(48);var Y=function(e){var t=b(),a=e.classes;function n(e){return r.a.createElement(f.a,null,r.a.createElement(N.a,{style:{textAlign:"center"},variant:"h4"},e.title),r.a.createElement(B.a,e,e.experiences.map((function(n,o){return r.a.createElement(R.a,{key:o},r.a.createElement(q.a,null,r.a.createElement(N.a,{color:"inherit"},n.year)),r.a.createElement(G.a,null,r.a.createElement(D.a,{color:"inherit",variant:"outlined"},e.icon),r.a.createElement(_.a,null)),r.a.createElement(U.a,null,r.a.createElement(Q.a,{style:{width:"100%",height:"100%"},onClick:function(){return t.current.setModal(r.a.createElement(l,{experience:n}))}},r.a.createElement(H.a,{elevation:3,className:a.paper},r.a.createElement(N.a,{variant:"h6",component:"h1"},n.name),r.a.createElement(N.a,null,n.location)))))}))))}function l(e){var t=e.experience;return r.a.createElement(r.a.Fragment,null,t.name,t.location,t.year)}return r.a.createElement(f.a,{ref:e.refProp,className:a.container},r.a.createElement(F,{classes:a,title:"My Experiences"}),r.a.createElement(I.a,{container:!0},r.a.createElement(I.a,{item:!0,sm:12,lg:6},r.a.createElement(n,{title:"School",align:"right",experiences:V.school,icon:r.a.createElement(P.g,null)})),r.a.createElement(I.a,{item:!0,sm:12,lg:6},r.a.createElement(n,{title:"Pro",align:"left",experiences:V.work,icon:r.a.createElement(P.b,null)}))))},K=a(49);var Z=function(e){var t=b(),a=e.classes,n=e.isMobile;function l(){return Object.keys(K).map((function(e,t){return r.a.createElement(f.a,{key:t},r.a.createElement(F,{classes:a,title:e}),r.a.createElement(I.a,{style:{justifyContent:n?"center":"normal"},container:!0},r.a.createElement(o,{category:e})))}))}function o(e){var n=e.category;return K[n].map((function(e,n){return r.a.createElement(I.a,{item:!0,lg:3,md:6,sm:12,key:n,style:{textAlign:"center"}},r.a.createElement(Q.a,null,r.a.createElement("img",{src:e.img,width:"250",alt:e.title,onClick:function(){return t.current.setModal(r.a.createElement(c,{project:e}))}})),r.a.createElement(F,{classes:a,subTitle:e.title,center:!0}))}))}function c(e){var t=e.project;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,t.title),r.a.createElement("img",{src:t.img,width:"250",alt:t.title}))}return r.a.createElement(f.a,{ref:e.refProp,className:a.container},r.a.createElement(F,{classes:a,title:"My Projects"}),r.a.createElement(l,null))},$=a(136),X=a(139),ee=a(60),te=a.n(ee);var ae=function(e){var t=b(),a=e.classes;function n(e){return r.a.createElement(X.a,Object.assign({color:"primary",variant:"filled",fullWidth:!0,className:a.textField},e))}return r.a.createElement(f.a,{ref:e.refProp,className:a.container},r.a.createElement(F,{classes:a,title:"Contact Me"}),r.a.createElement("form",{onSubmit:function(e){var a=e.target;e.preventDefault(),t.current.setModal(r.a.createElement($.a,{color:"inherit"})),te.a.sendForm("service_outlook","template_contact",a,"user_l1Qb3tJvE4nAlYoJdTisr").then((function(e){t.current.setModal(r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{variant:"h6"},"Email Sent !"),r.a.createElement(J.a,{variant:"contained",size:"large",onClick:function(){return t.current.setModal(null)}},"OK"))),console.log(e.text),a.reset()}),(function(e){console.log(e)}))}},r.a.createElement(I.a,{container:!0,spacing:3},r.a.createElement(I.a,{item:!0,xs:12,lg:6},r.a.createElement(n,{required:!0,name:"first_name",label:"First Name"})),r.a.createElement(I.a,{item:!0,xs:12,lg:6},r.a.createElement(n,{name:"last_name",label:"Last Name"})),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(n,{required:!0,name:"email",label:"Email",type:"email"})),r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(n,{required:!0,name:"subject",label:"Subject"})),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(n,{required:!0,multiline:!0,rows:10,name:"message",label:"Message"})),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(J.a,{color:"primary",type:"submit",variant:"contained",size:"large"},r.a.createElement("strong",null,"SEND"))))))};var ne=function(e){var t=e.classes;return r.a.createElement(f.a,{ref:e.refProp,className:t.container},r.a.createElement(F,{classes:t,title:"Blog"}))};var re=function(){var e=v(),t=Object(c.a)(Object(i.a)().breakpoints.down("sm")),a=Object(n.useRef)(null),l=Object(n.useRef)(null),o=Object(n.useRef)(null),m=Object(n.useRef)(null),u=Object(n.useRef)(null),g={About:{ref:a},Experience:{ref:l},Projects:{ref:o},Blog:{ref:u},Contact:{ref:m}};return r.a.createElement(p,null,r.a.createElement(s.a,{theme:j},r.a.createElement(E,{classes:e},r.a.createElement(L,{sections:g,classes:e,isMobile:t}),r.a.createElement(T,{classes:e}),r.a.createElement(W,{refProp:a,contactRef:m,classes:e}),r.a.createElement(Y,{refProp:l,classes:e}),r.a.createElement(Z,{refProp:o,classes:e,isMobile:t}),r.a.createElement(ne,{refProp:u,classes:e}),r.a.createElement(ae,{refProp:m,classes:e}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(87);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.b7addcb5.chunk.js.map