(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,a){e.exports={Input:"Input_Input__2MHHb",Label:"Input_Label__1LLod",InputElement:"Input_InputElement__3_77R"}},21:function(e,t,a){e.exports={TagList:"Tag_TagList__3PBn_",Tag:"Tag_Tag__3omdR"}},25:function(e,t,a){},36:function(e,t,a){e.exports={Modal:"Modal_Modal__3ihEg"}},37:function(e,t,a){e.exports={BackDrop:"BackDrop_BackDrop__1WDul"}},41:function(e,t,a){e.exports=a.p+"static/media/PostGreSQL.6d0f480e.png"},42:function(e,t,a){e.exports=a.p+"static/media/Rails.fb17ec15.png"},43:function(e,t,a){e.exports=a.p+"static/media/Ruby.b4f35fb5.png"},44:function(e,t,a){e.exports=a.p+"static/media/royalbrinkman.d69ed0c6.png"},45:function(e,t,a){e.exports=a.p+"static/media/mindseed.5ec6cee7.png"},46:function(e,t,a){e.exports=a.p+"static/media/goboat.13ece6c3.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/thomaskrief.c7ffe691.png"},52:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(35),i=a.n(s),r=(a(25),a(2)),c=a(3),o=a(5),m=a(4),d=a(6),u=(a(57),function(){return l.a.createElement("div",{className:"main-header-left"},l.a.createElement("h1",null,l.a.createElement("a",{href:"/"},"MVM")))}),p=a(15),h=a(51),f=l.a.createContext({main:[{id:1,name:"Developpeur Front-end",active:!1},{id:2,name:"Back-end",active:!1},{id:3,name:"Marketeur Digital",active:!1},{id:4,name:"Mes Projets",active:!1}]}),E=a(8),g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).toggleActive=function(e){var t=Object(h.a)(a.context.main),n=t.filter((function(e){return!0===e.active}));n.length>0?(n[0].active=!1,t[e].active=!t[e].active,a.context.main=t):(t[e].active=!t[e].active,a.context.main=t)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"main-header-center"},l.a.createElement(E.Breakpoint,{large:!0,up:!0,className:"nav-menu"},this.context.main.map((function(t,a){return l.a.createElement("div",Object(p.a)({className:"nav-menu-item",key:t.id,onClick:function(){return e.toggleActive(a)}},"className",t.active?"nav-anim":""),l.a.createElement("a",{href:"#"+t.name.replace(/ /g,"-"),"data-target":t.id},l.a.createElement("span",{className:"text","data-target":t.id},t.name),l.a.createElement("span",{className:"line -bottom"})))}))),l.a.createElement(E.Breakpoint,{medium:!0,down:!0,className:"nav-menu-mobile"},this.context.main.map((function(e){return l.a.createElement("div",{className:"nav-menu-item",key:e.id},l.a.createElement("a",{href:"#"+e.name.replace(/ /g,"-"),className:""},l.a.createElement("span",{className:"text"},e.name)),l.a.createElement("span",{className:"line -bottom"}))}))))}}]),t}(n.Component);g.contextType=f;var v=g,b=function(e){return l.a.createElement("div",{className:"header-hire-me",onClick:e.modal},l.a.createElement("span",null,l.a.createElement("a",{className:"cta-button",id:e.id?e.id:"sticky-hire-me",title:"hire-me"},"\u25ba ",e.action?e.action:"Recrutez-moi")))},N=function(e){return l.a.createElement("div",{className:"main-header-right"},l.a.createElement("div",{className:"header-user d-none d-sm-none d-md-none d-lg-flex"},l.a.createElement(b,{action:e.action,modal:e.modal})))},k=a(16),j=function(e){return l.a.createElement("div",{className:"menu-toggle",onClick:e.toggle},l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"line"}))},y=function(e){return l.a.createElement("div",{className:"mobile mobile-menu"},l.a.createElement("div",{className:"mobile-header"},l.a.createElement(u,null),l.a.createElement(j,{toggle:e.toggle}),e.show?l.a.createElement("div",{className:"mobile-nav"},l.a.createElement("div",{className:"mobile-header"},l.a.createElement(u,null),l.a.createElement(j,{toggle:e.toggle})),l.a.createElement(E.BreakpointProvider,null,l.a.createElement(v,null),l.a.createElement("div",{className:"hire-me-mobile"},l.a.createElement(b,null)))):null))},w=function(e){var t=Object(n.useState)(!1),a=Object(k.a)(t,2),s=a[0],i=a[1],r=0,c=function(){r=window.pageYOffset,i(r>=496)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",(function(){return c}))}}),[]),l.a.createElement("div",{id:s?"sticky-header":"",className:"sticky-header-wrapper"},l.a.createElement(E.Breakpoint,{large:!0,up:!0,className:"sticky-header-container"},l.a.createElement(u,null),l.a.createElement(v,null),l.a.createElement(N,{modal:e.modal})),l.a.createElement(E.Breakpoint,{medium:!0,down:!0,className:"sticky-header-container"},l.a.createElement(y,{show:e.show,toggle:e.toggle})))},x=a(36),O=a.n(x),C=a(37),S=a.n(C),M=function(e){return e.show?l.a.createElement("div",{className:S.a.BackDrop,onClick:e.clicked}):null},T=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(M,{show:e.show,clicked:e.modalClosed}),l.a.createElement("div",{className:O.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},R=a(20),B=a(12),L=a.n(B),A=function(e){var t=null;switch(e.inputType){case"input":case"texarea":default:t=l.a.createElement("input",Object.assign({className:L.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}))}return l.a.createElement("div",{className:L.a.Input},l.a.createElement("label",{className:L.a.Label},e.label),t)},D=a(38),I=a.n(D).a.create({baseURL:"https://portfolio-d0aec.firebaseio.com/"}),q=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:""},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your street"},value:""},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:""},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Your country"},value:""},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Name"},value:""}}},a.inputChangedHandler=function(e,t){var n=Object(R.a)({},a.state.orderForm),l=Object(R.a)({},n[t]);l.value=e.target.value,n[t]=l,a.setState({orderForm:n})},a.contactHandler=function(e){e.preventDefault(),console.log("jsuis la");var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var l={contactData:t};I.post("/contacts.json",l).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});return l.a.createElement("form",{onSubmit:this.contactHandler},t.map((function(t){return l.a.createElement(A,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),l.a.createElement(b,null))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={action:"Recrutez-moi !",show:!1,visible:!1},a.toggleMenu=function(){var e=a.state.show;a.setState({show:!e})},a.modalHandler=function(){a.setState({visible:!0})},a.modalClosing=function(){a.setState({visible:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"site-header"},l.a.createElement(T,{show:this.state.visible,modalClosed:this.modalClosing},l.a.createElement(q,null)),l.a.createElement("div",{className:"site-header-wrapper"},l.a.createElement("header",{className:"main-header d-none d-sm-none d-md-none d-lg-flex"},l.a.createElement(u,null),l.a.createElement(v,null),l.a.createElement(N,{action:this.state.action,modal:this.modalHandler})),l.a.createElement(y,{show:this.state.show,toggle:this.toggleMenu})),l.a.createElement(E.BreakpointProvider,null,l.a.createElement(w,{show:this.state.show,toggle:this.toggleMenu,modal:this.modalHandler})))}}]),t}(n.Component),P=a(39),_=a.n(P),H=function(){return l.a.createElement("div",{className:"home-text"},l.a.createElement("p",null,"D\xe9veloppeur Web passionn\xe9, je suis constamment \xe0 la recherche d'am\xe9liorations, que ce soit \xe0 des fins personnelles ou professionnelles. Dans un monde pouss\xe9 par l'innovation, la lecture quotidienne et la curiosit\xe9 semblent obligatoires mais, pour moi c'est inn\xe9. J'ai toujours aim\xe9 plonger au plus profond des sujets qui me passionnent."))},J=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={action:"Recrutez-moi !",id:"hire-me"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"typed-container"},l.a.createElement(_.a,{strings:["Je fais du Front-end sur React.js","Je fais du Back-end sur Rails","Je fais du PostgreSQL","Je fais du Marketing Digital","Je fais du SEO","Mais aussi du SEA"],typeSpeed:40,backSpeed:50,loop:!0,className:"typing"})),l.a.createElement("div",{id:"cta-wrapper-home"},l.a.createElement(H,null),l.a.createElement(b,{id:this.state.id,action:this.state.action})))}}]),t}(n.Component),z=a(40),G=a.n(z),K=function(){return l.a.createElement(G.a,{className:"d-none d-sm-block col-sm-3 col-md-3 align-center",params:{particles:{line_linked:{enable:!0,distance:100,color:"#254A5D",opacity:.6,width:1}}},style:{width:"100%"}})},W=function(){return l.a.createElement("div",{id:"section-home",className:"section-home"},l.a.createElement("div",{className:"blocks-hero",id:"first-child"},l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"home-face"},l.a.createElement(J,null),l.a.createElement(K,null)))))},Y=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("h2",{className:"title-bold"},e.blabla.title),l.a.createElement("h3",{className:"featured-item-subheader italic"},e.blabla.subtitle),l.a.createElement("p",{className:"featured-item-body"},e.blabla.text))},Q=function(e){return l.a.createElement("div",{className:"line-anim"},l.a.createElement("a",{href:e.href},l.a.createElement("span",{className:"text"},"\u25ba ",e.text),l.a.createElement("span",{className:"line -right"}),l.a.createElement("span",{className:"line -top"}),l.a.createElement("span",{className:"line -left"}),l.a.createElement("span",{className:"line -bottom"})))},U=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("span",{className:"circle"}),l.a.createElement("div",{className:"image-show-off"},e.inputs.map((function(e){return l.a.createElement("div",{className:"clipped-border",key:e.id},l.a.createElement("img",{src:e.img,alt:e.alt,id:"clipped"}))}))))},V=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={blabla:{id:1,title:"DEVELOPPEUR FRONT-END",subtitle:"React.js, Freelance",text:"Gr\xe2ce \xe0 mon exp\xe9rience professionnelle, j'ai pu suivre de multiples cours sur les languages suivants : HTML, CSS, Javascript. Et ainsi \xe9tendre mes comp\xe9tences digitale. Certifi\xe9 du Wagon apr\xe8s deux mois de bootcamp, j'ai d\xe9cider d'\xe9tendre mes comp\xe9tences en Javascript. Language \xe0 l'aide duquel je me sp\xe9cialise dans le front-end avec pour framework : React.js."},inputs:[{id:1,alt:"Javascript",img:"https://icn.lycee-valin.fr/projets2018/seconde14/eleve12/images/javascript.png"},{id:2,alt:"React",img:"https://oneteamsolutions.in/images/upload/post-33.png"},{id:3,alt:"CSS3",img:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"}],btnText:"D\xe9couvrez mes projets",href:"#Mes-Projets"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"section-one",className:"section-one"},l.a.createElement("div",{className:"section-main"},l.a.createElement("a",{href:"/",id:"Developpeur-Front-end",className:"section-anchor"}," "),l.a.createElement("div",{className:"section-wrapper"},l.a.createElement("div",{className:"section-left col-xs-12 col-sm-6 col-md-6"},l.a.createElement(Y,{blabla:this.state.blabla}),l.a.createElement(Q,{text:this.state.btnText,href:this.state.href})),l.a.createElement("div",{className:"section-right d-none d-sm-block col-sm-6 col-md-6 align-center"},l.a.createElement("div",{className:"section-wrapper-right"},l.a.createElement(U,{inputs:this.state.inputs}))))))}}]),t}(n.Component),Z=a(41),X=a.n(Z),$=a(42),ee=a.n($),te=a(43),ae=a.n(te),ne=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={blabla:{id:1,title:"DEVELOPPEUR BACK-END",subtitle:"Ruby on Rails, Freelance",text:"Certifi\xe9 du Wagon apr\xe8s un bootcamp de deux mois, o\xf9 j'ai pu compl\xe9ter mes comp\xe9tences par un language suppl\xe9mentaire, Ruby et son framework, Rails. Le Wagon m'a \xe9galement initi\xe9 \xe0 la gestion de base de donn\xe9es avec son language SQL et des outils tel que MongoDB ou encore PostgreSQL."},inputs:[{id:1,alt:"Ruby",img:X.a},{id:2,alt:"Rails",img:ae.a},{id:3,alt:"PostgreSQL",img:ee.a}],btnText:"D\xe9couvrez mes projets",href:"#Mes-Projets"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"section-two",className:"section-two"},l.a.createElement("div",{className:"section-main"},l.a.createElement("a",{href:"/",id:"Back-end",className:"section-anchor"}," "),l.a.createElement("div",{className:"section-wrapper"},l.a.createElement("div",{className:"section-left d-none d-sm-block col-sm-6 col-md-6 align-center"},l.a.createElement("div",{className:"section-wrapper-left"},l.a.createElement(U,{inputs:this.state.inputs}))),l.a.createElement("div",{className:"section-right col-xs-12 col-sm-6 col-md-6"},l.a.createElement(Y,{blabla:this.state.blabla}),l.a.createElement(Q,{text:this.state.btnText,href:this.state.href})))))}}]),t}(n.Component),le=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={blabla:{id:1,title:"MARKETEUR DIGITAL",subtitle:"Bachelor, sp\xe9cialisation Marketing",text:"Etudes r\xe9alis\xe9es \xe0 Kedge Business School ou j'ai eu la chance de d\xe9velopper mes comp\xe9tences num\xe9riques \xe0 travers de nombreux stages et exp\xe9riences. J'ai \xe9galement pass\xe9 2 ans en tant que responsable de la transition digitale pour le march\xe9 fran\xe7ais au sein de l'entreprise, Royal Brinkman. Au cours de cette exp\xe9rience j'ai appris \xe0 ma\xeetriser diff\xe9rents outils tels que Mailchimp, Unbounce, Hotjar, Google Analytics, ahrefs ainsi que Joomla."},inputs:[{id:1,alt:"MailChimp",img:"https://www.dexigner.com/images/news/xxi/31385.jpg"},{id:2,alt:"Ahrefs",img:"https://cdn.ahrefs.com/images/mediakit/logo_monochrome@2x.png"},{id:3,alt:"AdWords",img:"https://3x5yp62s8loz3jw8273enqos16xh-wpengine.netdna-ssl.com/wp-content/uploads/icon360-Analytics.png"}],btnText:"D\xe9couvrez mes projets",href:"#Mes-Projets"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"section-three",className:"section-three"},l.a.createElement("div",{className:"section-main"},l.a.createElement("a",{href:"/",id:"Marketeur-Digital",className:"section-anchor"}," "),l.a.createElement("div",{className:"section-wrapper"},l.a.createElement("div",{className:"section-left col-xs-12 col-sm-6 col-md-6"},l.a.createElement(Y,{blabla:this.state.blabla}),l.a.createElement(Q,{text:this.state.btnText,href:this.state.href})),l.a.createElement("div",{className:"section-right d-none d-sm-block col-sm-6 col-md-6 align-center"},l.a.createElement("div",{className:"section-wrapper-right"},l.a.createElement(U,{inputs:this.state.inputs}))))))}}]),t}(n.Component),se=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(V,null),l.a.createElement(ne,null),l.a.createElement(le,null))}}]),t}(n.Component),ie=a(13),re=a(44),ce=a.n(re),oe=a(45),me=a.n(oe),de=a(46),ue=a.n(de),pe=a(47),he=a.n(pe),fe=function(e){return l.a.createElement("div",{className:"gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8"},l.a.createElement("a",{href:e.href},l.a.createElement("img",{src:e.img,alt:e.alt,className:"img-gallery"})))},Ee=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("h2",{className:"title-slide"},e.title),l.a.createElement("p",{className:"description-slide"},e.desc))},ge=a(21),ve=a.n(ge),be=function(e){return l.a.createElement("ul",{className:ve.a.TagList},e.tags.map((function(e){return l.a.createElement("li",{key:e.id,className:ve.a.Tag},e.name)})))},Ne=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={images:[{img:ce.a,alt:"Royal Brinkman",href:"https://royalbrinkman.fr/"},{img:ue.a,alt:"Goboat",href:"https://goboat.herokuapp.com/"},{img:me.a,alt:"Mindseed",href:"https://www.mindseed.app/"},{img:he.a,alt:"ThomasKrief",href:"http://www.thomaskrief.fr/"}],content:[{title:"ROYAL BRINKMAN",desc:"La boutique de devis en ligne pour l'horticulture professionnelle. O\xf9 vous pouvez trouver produits, connaissances et conseils personnalis\xe9s li\xe9s \xe0 l'horticulture. Projet de deux ans en tant que responsable de la transition digitale. Mes deux ann\xe9es de contribution ont une meilleure pr\xe9sence digitale avec une boutique en ligne professionnelle."},{title:"GOBOAT",desc:"Projet de 5 jours r\xe9alis\xe9 au cours du Bootcamp propos\xe9 par la formation de d\xe9veloppeur web Full-Stack, le Wagon. Avec comme rep\xe8re Airbnb nous avons cr\xe9\xe9 une plateforme de location de bateau. Email : admin@gmail.com, Password : password "},{title:"MINDSEED",desc:"Projet de deux semaines r\xe9alis\xe9 au cours du Bootcamp propos\xe9 par la formation de d\xe9veloppeur web Full-Stack, le Wagon. Nous avons cr\xe9\xe9 un site d'aide \xe0 l'apprentissage avec un syst\xe8me de flashcards pouss\xe9. Celui-ci est \xe0 destination des \xe9tudiants, professeurs ou simple curieux avare d'apprentissage. Email : melvin@gmail.com, Password : password"},{title:"THOMAS KRIEF",desc:"Projet de cr\xe9ation d'un site vitrine pour l'ancien skieur professionnel et nouvel artiste : Thomas Krief. L'objectif rechercher, mettre en avant ses derni\xe8res cr\xe9ations et inviter les visiteurs \xe0 se diriger vers son Instagram pour en savoir plus."}],href:[{href:"https://royalbrinkman.fr/"},{href:"https://goboat.herokuapp.com/"},{href:"https://www.mindseed.app/"},{href:"http://www.thomaskrief.fr/"}],tagsRB:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:4,name:"Joomla"}],tagsGB:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:6,name:"Ruby"},{id:7,name:"Rails"},{id:9,name:"Heroku"}],tagsMS:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:6,name:"Ruby"},{id:7,name:"Rails"},{id:9,name:"Heroku"}],tagsTK:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:4,name:"React.js"},{id:5,name:"Heroku"}],btnText:"Se rendre sur le site",nextIcon:l.a.createElement("span",{"aria-hidden":"true",className:"fa fa-chevron-right"}),prevIcon:l.a.createElement("span",{"aria-hidden":"true",className:"fa fa-chevron-left"})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"gallery-full"},l.a.createElement("div",{className:"section-slide"},l.a.createElement("a",{href:"/",id:"Mes-Projets",className:"section-anchor"}," "),l.a.createElement("div",{className:"section-wrapper-gallery"},l.a.createElement("div",null,l.a.createElement("div",{className:"section-title","data-aos":"zoom-in-up"},l.a.createElement("h2",{className:"title-bold align-center"},"MES PROJETS"),l.a.createElement("h3",{className:"featured-item-subheader italic align-center"},"D\xe9couvrez un exemple concret de tout ce qui pr\xe9c\xe8de")),l.a.createElement(ie.a,{className:"gallery-content",interval:"1000000",nextIcon:this.state.nextIcon,prevIcon:this.state.prevIcon},l.a.createElement(ie.a.Item,{className:"myslides fade-slide","data-aos":"fade-up"},l.a.createElement(fe,{img:this.state.images[0].img,alt:this.state.images[0].alt,href:this.state.images[0].href}),l.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},l.a.createElement(Ee,{title:this.state.content[0].title,desc:this.state.content[0].desc}),l.a.createElement(be,{tags:this.state.tagsRB}),l.a.createElement(Q,{text:this.state.btnText,href:this.state.href[0].href}))),l.a.createElement(ie.a.Item,{className:"myslides fade-slide","data-aos":"fade-up"},l.a.createElement(fe,{img:this.state.images[1].img,alt:this.state.images[1].alt,href:this.state.images[1].href}),l.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},l.a.createElement(Ee,{title:this.state.content[1].title,desc:this.state.content[1].desc}),l.a.createElement(be,{tags:this.state.tagsGB}),l.a.createElement(Q,{text:this.state.btnText,href:this.state.href[1].href}))),l.a.createElement(ie.a.Item,{className:"myslides fade-slide","data-aos":"fade-up"},l.a.createElement(fe,{img:this.state.images[2].img,alt:this.state.images[2].alt,href:this.state.images[2].href}),l.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},l.a.createElement(Ee,{title:this.state.content[2].title,desc:this.state.content[2].desc}),l.a.createElement(be,{tags:this.state.tagsMS}),l.a.createElement(Q,{text:this.state.btnText,href:this.state.href[2].href}))),l.a.createElement(ie.a.Item,{className:"myslides fade-slide","data-aos":"fade-up"},l.a.createElement(fe,{img:this.state.images[3].img,alt:this.state.images[3].alt,href:this.state.images[3].href}),l.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},l.a.createElement(Ee,{title:this.state.content[3].title,desc:this.state.content[3].desc}),l.a.createElement(be,{tags:this.state.tagsTK}),l.a.createElement(Q,{text:this.state.btnText,href:this.state.href[3].href}))))))))}}]),t}(n.Component),ke=function(e){var t=Object(n.useState)(!1),a=Object(k.a)(t,2),s=a[0],i=a[1],r=0,c=function(){r=window.pageYOffset,i(r>=4e3)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",(function(){return c}))}}),[]),l.a.createElement(n.Fragment,null,l.a.createElement(E.Breakpoint,{medium:!0,up:!0,className:"testimonials-list"},e.testimonials.map((function(e){return l.a.createElement("div",{className:s?"testimonials-slide col-xs-12 col-sm-4 col-md-4 d-sm-flex show-on-scroll is-visible":"testimonials-slide col-xs-12 col-sm-4 col-md-4 d-sm-flex show-on-scroll",key:e.id},l.a.createElement("div",{className:"slide-container card-testimonial testimonials"},l.a.createElement("div",{className:"testimonials-content"},l.a.createElement("div",{className:"testimonial-infos"},l.a.createElement("div",{className:"testimonials-bloc-images"},l.a.createElement("div",{className:"testimonial-picture"},l.a.createElement("img",{className:"avatar-large",alt:e.name,src:e.avatar}))),l.a.createElement("div",{className:"testimonial-text"},l.a.createElement("p",null,e.name,l.a.createElement("span",null,e.company)))),l.a.createElement("div",{className:"testimonial-quote"},l.a.createElement("blockquote",null,'"',e.quote,'"')))))}))),l.a.createElement(E.Breakpoint,{small:!0,down:!0,className:"testimonials-list"},l.a.createElement("div",{className:"testimonials-slide col-xs-12 col-sm-4 col-md-4 d-sm-flex show-on-scroll is-visible",key:e.testimonials[2].id},l.a.createElement("div",{className:"slide-container card-testimonial testimonials"},l.a.createElement("div",{className:"testimonials-content"},l.a.createElement("div",{className:"testimonial-infos"},l.a.createElement("div",{className:"testimonials-bloc-images"},l.a.createElement("div",{className:"testimonial-picture"},l.a.createElement("img",{className:"avatar-large",alt:e.testimonials[2].name,src:e.testimonials[2].avatar}))),l.a.createElement("div",{className:"testimonial-text"},l.a.createElement("p",null,e.testimonials[2].name,l.a.createElement("span",null,e.testimonials[2].company)))),l.a.createElement("div",{className:"testimonial-quote"},l.a.createElement("blockquote",null,'"',e.testimonials[2].quote,'"')))))))},je=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={testimonials:[{id:1,avatar:"https://royalbrinkman.com/content/files/images/foto's/Sarah/mensen/rob.helderman@royalbrinkman.com.png",name:"Rob Helderman",company:"E-commerce Manager, Royal Brinkman",quote:"Il prend des mesures g\xe9n\xe9rales visant tous les facteurs environnementaux de la partie digitale.De la gestion d'articles, CRM, aux campagnes e-mail, en passant par le r\xe9f\xe9rencement naturel et le SEA."},{id:2,avatar:"https://www.platonformation.com/wp-content/uploads/2019/09/jonathan-chaffenjeon.png",name:"Jonathan Chaffanjon",company:"G\xe9rant, Platon Formation",quote:"S\xe9rieux et impliqu\xe9 dans les projets, nous avons collobor\xe9 sur plusieurs projets dont un de r\xe9f\xe9rencement naturelle ( Platonformation.com ) ainsi que mon logiciel de gestion de base de donn\xe9es. Travail en autonomie."},{id:3,avatar:"https://media-exp1.licdn.com/dms/image/C5603AQHx3Z4lmjRR3g/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=k4f-EvGIO1qB8k07C7FFG-psOBqPNFcdd7-MSjXcxc8",name:"Lucas Jamelin",company:"Label Manager, 6K RIO RECORDS",quote:"Il a \xe9t\xe9 de bons conseils et surtout tr\xe8s volontaire et force de proposition. Ses qualit\xe9s strat\xe9giques ne peuvent qu\u2019optimiser son travail et ses rendus qui sont toujours bien ficell\xe9s et accompagn\xe9s d\u2019une justification de ses choix toujours tr\xe8s pertinente."}]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"section-testimonial"},l.a.createElement("div",{className:"section-main-testimonials"},l.a.createElement("div",{className:"section-title title-center","data-aos":"zoom-in-up"},l.a.createElement("h2",{className:"title-bold"},"ILS M'ONT FAIT CONFIANCE"),l.a.createElement("h3",{className:"featured-item-subheader italic align-center"},"Pour leurs projets de d\xe9veloppement d'application web")),l.a.createElement("div",{className:"row-fluid"},l.a.createElement("div",{className:"section-testimonials"},l.a.createElement(E.BreakpointProvider,null,l.a.createElement(ke,{testimonials:this.state.testimonials}))))))}}]),t}(n.Component),ye=function(e){return l.a.createElement("ul",{className:"social-links"},e.links.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.href},l.a.createElement("i",{className:"icon fa "+e.icon}),l.a.createElement("p",{className:"social-link"},e.name)))})))},we=function(){return l.a.createElement("div",{className:"footer-newsletter d-none d-sm-block"},l.a.createElement("p",{className:"menu-item-newsletter"},l.a.createElement("span",null,"Rejoingnez ma newsletter")),l.a.createElement("form",{className:"newsletter-form"},l.a.createElement("input",{className:"newsletter-input",type:"text",name:"Email",placeholder:"name@website.com","aria-required":"true"}),l.a.createElement("button",{type:"submit",value:"subscribe",name:"subscribe",className:"button-newsletter"},"S'inscrire")))},xe=function(e){return l.a.createElement("ul",{className:"menu-items"},e.links.map((function(e){return l.a.createElement("li",{id:"menu-item",className:"menu-item-has-children",key:e.id},l.a.createElement("a",{href:"/",className:"menu-item-title"},e.title),e.links.map((function(e){return l.a.createElement("ul",{className:"sub-menu",key:e.id},l.a.createElement("li",{id:"menu-item-6",className:"menu-item-nav-footer"},l.a.createElement("a",{href:"/",className:"footer-link"},e.name)))})))})))},Oe=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={socialLinks:[{id:1,name:"LinkedIn",icon:"fa-linkedin",ahref:"https://www.linkedin.com/in/melvin-van-megen/"},{id:2,name:"Twitter",icon:"fa-twitter",ahref:""},{id:3,name:"Skype",icon:"fa-skype",ahref:""},{id:4,name:"Github",icon:"fa-github",ahref:"https://github.com/Melvinvmegen"}],front:[{id:1,title:"D\xe9veloppeur Front-End",links:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"},{id:4,name:"React"}]}],linksMar:[{id:1,title:"Back-End",links:[{id:1,name:"Ruby"},{id:2,name:"Rails"},{id:3,name:"SQL"},{id:4,name:"MongoDB"}]}],linksTra:[{id:1,title:"Marketing Digital",links:[{id:1,name:"SEO"},{id:2,name:"SEA"},{id:3,name:"Email Marketing"},{id:4,name:"Marketing de contenu"}]}]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"component-footer"},l.a.createElement("div",{className:"footer-full-row"},l.a.createElement("div",{className:"footer-inner"},l.a.createElement("div",{className:"footer-header"},l.a.createElement("div",{className:"footer-header-inner"},l.a.createElement("div",{className:"footer-header-inner-left"},l.a.createElement("h1",{className:"logo_footer"},l.a.createElement("a",{href:"/"},"Contact me"))),l.a.createElement("div",{className:"footer-header-inner-right"},l.a.createElement(ye,{links:this.state.socialLinks}))),l.a.createElement("div",{className:"footer-main"},l.a.createElement(we,null),l.a.createElement("div",{className:"footer-nav"},l.a.createElement("nav",{className:"nav-footer-nav"},l.a.createElement(xe,{links:this.state.front}),l.a.createElement(xe,{links:this.state.linksMar}),l.a.createElement(xe,{links:this.state.linksTra})))),l.a.createElement("div",{className:"footer-bottom"},l.a.createElement("p",null,"Copyright @2019 Mvmegen. All rights reserved"))))))}}]),t}(n.Component),Ce=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(f.Provider,{value:{main:[{id:1,name:"Developpeur Front-end",active:!1},{id:2,name:"Back-end",active:!1},{id:3,name:"Marketeur Digital",active:!1},{id:4,name:"Mes Projets",active:!1}]}},l.a.createElement(F,null),l.a.createElement(W,null),l.a.createElement(se,null)),l.a.createElement(Ne,null),l.a.createElement(je,null),l.a.createElement(Oe,null))}}]),t}(n.Component),Se=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(Ce,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=a(19),Te=l.a.createElement(Me.a,{basename:"/Portfolio"},l.a.createElement(Se,null));i.a.render(Te,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.e487c083.chunk.js.map