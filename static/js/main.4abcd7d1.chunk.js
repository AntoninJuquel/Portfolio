(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{42:function(e,t,n){e.exports={brand:"NavBar_brand__1IJeO",brandText:"NavBar_brandText__2hHr8"}},43:function(e,t,n){e.exports={url:"Introduction_url__3d4EL",icon:"Introduction_icon__3t5D_"}},52:function(e,t,n){e.exports={buttonWrapper:"About_buttonWrapper__3yKZL"}},53:function(e,t,n){e.exports={paper:"Experience_paper__u4m_3"}},54:function(e,t,n){e.exports={container:"Projects_container__4_WjJ"}},69:function(e,t,n){e.exports=n(83)},74:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),i=n.n(l),c=(n(74),n(57)),o=n(26),m=n(112),s=n(113),u=n(56),p=n(131),g=n(115),E=n(116),f=n(130),d=n(117),h=n(13),b=n(42),y=n.n(b);var v=function(e){var t=e.sections,n=Object(o.a)(),a=Object(m.a)(n.breakpoints.down("sm")),l=r.a.useState(null),i=Object(c.a)(l,2),b=i[0],v=i[1],w=Boolean(b),k=function(e){v(e.currentTarget)},x=function(e){window.scrollTo({top:t[e].ref.current.offsetTop-64}),v(null)};return r.a.createElement(g.a,{color:"default",style:{backgroundColor:"#121212",color:"white"}},r.a.createElement(E.a,null,r.a.createElement(f.a,{className:y.a.brand},r.a.createElement(d.a,{display:"inline",variant:"h4",className:y.a.brandText,onClick:function(){return window.scrollTo({top:0})}},"Antonin J.")),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:k},r.a.createElement(h.a,null)),r.a.createElement(u.a,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:w,onClose:function(){return v(null)}},Object.keys(t).map((function(e,t){return r.a.createElement(p.a,{key:t,onClick:function(){return x(e)}},e)})))):Object.keys(t).map((function(e,t){return r.a.createElement(s.a,{color:"inherit",key:t,onClick:function(){return x(e)}},e)}))))},w=n(118),k=n(119);var x=function(e){var t=e.title,n=e.subTitle,a=e.center;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title",style:a&&{textAlign:"center"}},t),r.a.createElement("p",{className:"subTitle",style:a&&{textAlign:"center"}},n))},_=n(43),A=n.n(_);var M=function(){var e=[{icon:function(e){return r.a.createElement(h.f,e)},url:"https://www.linkedin.com/in/antonin-juquel/"},{icon:function(e){return r.a.createElement(h.e,e)},url:"https://somindras.itch.io"},{icon:function(e){return r.a.createElement(h.d,e)},url:"https://github.com/AntoninJuquel"},{icon:function(e){return r.a.createElement(h.c,e)},url:"https://www.facebook.com/AntoninJuquel/"},{icon:function(e){return r.a.createElement(h.h,e)},url:"https://twitter.com/Somindras"},{icon:function(e){return r.a.createElement(h.i,e)},url:"https://www.youtube.com/channel/UCsgdfHWgax10z-av8KwzLlw"}];return r.a.createElement(w.a,{className:"container"},r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,sm:12,lg:6},r.a.createElement(x,{title:"I'm Antonin",subTitle:"Indie Developper"}),r.a.createElement(k.a,{container:!0},e.map((function(e,t){return r.a.createElement("a",{className:A.a.url,key:t,target:"_blank",href:e.url,rel:"noopener noreferrer"},r.a.createElement(e.icon,{className:A.a.icon}))})))),r.a.createElement(k.a,{item:!0,sm:12,lg:6},r.a.createElement("img",{alt:"MyImage",src:"https://ih0.redbubble.net/image.725661211.7020/flat,1000x1000,075,f.jpg",width:"100%"}))))},z=n(120),j=n(52),N=n.n(j);var F=function(e){return r.a.createElement(w.a,{ref:e.refProp,className:"container"},r.a.createElement(x,{title:"About me",subTitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),r.a.createElement(k.a,{container:!0,spacing:10,className:N.a.buttonWrapper},r.a.createElement(k.a,{item:!0},r.a.createElement(z.a,{variant:"contained",size:"large",onClick:function(){return window.scrollTo({top:e.contactRef.current.offsetTop-64})}},r.a.createElement("strong",null,"HIRE ME"))),r.a.createElement(k.a,{item:!0},r.a.createElement(z.a,{variant:"contained",size:"large"},r.a.createElement("strong",null,"DOWNLOAD CV")))))},O=n(121),T=n(122),W=n(123),C=n(124),I=n(125),L=n(126),P=n(127),S=n(86),q=n(53),J=n.n(q);var B=function(e){var t=function(e){return r.a.createElement(w.a,null,r.a.createElement(d.a,{style:{textAlign:"center"},variant:"h4"},e.title),r.a.createElement(O.a,e,e.experiences.map((function(t,n){return r.a.createElement(T.a,{key:n},r.a.createElement(W.a,null,r.a.createElement(d.a,{color:"inherit"},t.year)),r.a.createElement(C.a,null,r.a.createElement(I.a,{color:"inherit",variant:"outlined"},e.icon),r.a.createElement(L.a,null)),r.a.createElement(P.a,null,r.a.createElement(S.a,{elevation:3,className:J.a.paper},r.a.createElement(d.a,{variant:"h6",component:"h1"},t.name),r.a.createElement(d.a,null,t.location))))}))))};return r.a.createElement(w.a,{ref:e.refProp},r.a.createElement(x,{title:"My Experiences"}),r.a.createElement(k.a,{container:!0},r.a.createElement(k.a,{item:!0,sm:12,lg:6},r.a.createElement(t,{title:"School",align:"right",experiences:[{name:"BTS SIO",location:"Lyc\xe9e Louis Armand",year:"2019 - 2021"},{name:"CPGE MPSI",location:"Lyc\xe9e Michelet",year:"2018 - 2019"},{name:"BAC S",location:"Lyc\xe9e Politzer",year:"2018"}],icon:r.a.createElement(h.g,null)})),r.a.createElement(k.a,{item:!0,sm:12,lg:6},r.a.createElement(t,{title:"Pro",align:"left",experiences:[{name:"Front end dev",location:"WOODY",year:"2021 (2 months)"},{name:"Mobile dev",location:"Uballers",year:"2020 (2 months)"}],icon:r.a.createElement(h.b,null)}))))},D={School:[{title:"Sephora Lips",img:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/033b81b839890e8e47434f5aee579e02",url:""},{title:"AC19",img:"https://raw.githubusercontent.com/deromeem/AC19/master/images/ac19/logo_ac19.png",url:""}],Pro:[{title:"File Browser",img:"https://chonky.io/chonky-sphere-v2.png",url:""},{title:"Uballers Mobile App",img:"https://uballers.com/assets/img/brand/BallonRouge.png",url:""}],Games:[{title:"Voltventure",img:"https://img.itch.zone/aW1nLzQ0MDAyOTQucG5n/315x250%23c/QrWZaG.png",url:""},{title:"Cupgrade",img:"https://img.itch.zone/aW1nLzM3MjMwMDcucG5n/315x250%23c/FRfmbU.png",url:""},{title:"Train your mind",img:"https://img.itch.zone/aW1nLzM1OTk5MzAucG5n/315x250%23c/5IOjSk.png",url:""},{title:"Island Invasion",img:"https://img.itch.zone/aW1nLzM0MzAxMDkucG5n/315x250%23c/zfBCp1.png",url:""},{title:"Crazy lights",img:"https://img.itch.zone/aW1nLzMzMzY5MTMucG5n/315x250%23c/%2FEjA15.png",url:""}],Web:[{title:"Tindog",img:"https://raw.githubusercontent.com/AntoninJuquel/tindog/master/images/dog-img.jpg",url:""},{title:"Drumkit",img:"https://raw.githubusercontent.com/AntoninJuquel/drumkit/master/images/kick.png",url:""},{title:"Simon",img:"https://raw.githubusercontent.com/AntoninJuquel/simon/master/simonIco.png",url:""},{title:"Finger dice",img:"https://raw.githubusercontent.com/AntoninJuquel/fingerdice/master/images/dice.png",url:""}],Mobile:[{title:"Cheat Alleycat",img:"https://raw.githubusercontent.com/AntoninJuquel/Cheat_Alleycat/master/assets/icon.png",url:""}]},R=n(54),G=n.n(R);var Q=function(e){var t=function(e){var t=e.category;return D[t].map((function(e,t){return r.a.createElement(k.a,{item:!0,lg:3,md:6,sm:12,key:t},r.a.createElement(w.a,{className:G.a.container},r.a.createElement("img",{src:e.img,width:"250",alt:e.title}),r.a.createElement(x,{subTitle:e.title,center:!0})))}))},n=function(){return Object.keys(D).map((function(e,n){return r.a.createElement(w.a,{key:n},r.a.createElement(x,{title:e}),r.a.createElement(k.a,{container:!0},r.a.createElement(t,{category:e})))}))};return r.a.createElement(w.a,{ref:e.refProp,className:"container"},r.a.createElement(x,{title:"My Projects"}),r.a.createElement(n,null))},U=n(128),H=n(129),Y=n(55),K=n.n(Y),V=Object(U.a)({textField:{background:"linear-gradient(90deg, #cccccc 10%,#FFFFFF 40%, #cccccc 90%)",border:0,borderRadius:3,color:"white"}});var Z=function(e){var t=V();return r.a.createElement(w.a,{ref:e.refProp,className:"container"},r.a.createElement(x,{title:"Contact Me"}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),K.a.sendForm("service_outlook","template_contact",e.target,"user_l1Qb3tJvE4nAlYoJdTisr").then((function(e){console.log(e.text)}),(function(e){console.log(e)}))}},r.a.createElement(k.a,{container:!0,spacing:3},r.a.createElement(k.a,{item:!0,xs:12,lg:6},r.a.createElement(H.a,{variant:"filled",label:"First Name",fullWidth:!0,className:t.textField,name:"first_name",required:!0})),r.a.createElement(k.a,{item:!0,xs:12,lg:6},r.a.createElement(H.a,{variant:"filled",label:"Last Name",fullWidth:!0,className:t.textField,name:"last_name"})),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(H.a,{variant:"filled",label:"Email",fullWidth:!0,className:t.textField,name:"email",required:!0})),r.a.createElement(k.a,{item:!0,xs:6},r.a.createElement(H.a,{variant:"filled",label:"Subject",fullWidth:!0,className:t.textField,name:"subject",required:!0})),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(H.a,{variant:"filled",label:"Message",multiline:!0,fullWidth:!0,rows:10,className:t.textField,name:"message",required:!0})),r.a.createElement(k.a,{item:!0,xs:12},r.a.createElement(z.a,{type:"submit",variant:"contained",size:"large"},r.a.createElement("strong",null,"SEND"))))))};var $=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(null),l=Object(a.useRef)(null),i={About:{ref:e},Experience:{ref:t},Projects:{ref:n},Blog:{},Contact:{ref:l}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{sections:i}),r.a.createElement(M,null),r.a.createElement(F,{refProp:e,contactRef:l}),r.a.createElement(B,{refProp:t}),r.a.createElement(Q,{refProp:n}),r.a.createElement(Z,{refProp:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(82);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.4abcd7d1.chunk.js.map