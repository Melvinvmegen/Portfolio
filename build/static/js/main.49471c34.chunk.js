(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,a){e.exports={TagList:"Tag_TagList__3PBn_",Tag:"Tag_Tag__3omdR"}},26:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/royalbrinkman.d69ed0c6.png"},33:function(e,t,a){e.exports=a.p+"static/media/mindseed.5ec6cee7.png"},34:function(e,t,a){e.exports=a.p+"static/media/goboat.13ece6c3.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/thomaskrief.c7ffe691.png"},39:function(e,t,a){e.exports=a(50)},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(28),i=a.n(l),r=(a(26),a(13)),c=a(14),o=a(17),m=a(15),d=a(18),u=(a(44),a(9)),p=a(1),E=a(2),h=a(4),f=a(3),g=a(5),v=function(){return s.a.createElement("div",{className:"main-header-left"},s.a.createElement("h1",null,s.a.createElement("a",{href:"/"},"MVM")))},b=a(29),N=s.a.createContext({main:[{id:1,name:"Developpeur Front-end"},{id:2,name:"Back-end"},{id:3,name:"Marketeur Digital"},{id:4,name:"Mes Projets"}]}),j=a(8),k=function(){var e=Object(n.useContext)(N);return s.a.createElement("div",{className:"main-header-center"},s.a.createElement(j.Breakpoint,{large:!0,up:!0,className:"nav-menu"},e.main.map((function(e){return s.a.createElement("div",Object(b.a)({className:"nav-menu-item",key:e.id},"className","http://localhost:3000/#"+e.name.replace(/ /g,"-")===document.URL?"nav-anim":""),s.a.createElement("a",{href:"#"+e.name.replace(/ /g,"-")},s.a.createElement("span",{className:"text"},e.name),s.a.createElement("span",{className:"line -bottom"})))}))),s.a.createElement(j.Breakpoint,{medium:!0,down:!0,className:"nav-menu-mobile"},e.main.map((function(e){return s.a.createElement("div",{className:"nav-menu-item",key:e.id},s.a.createElement("a",{href:"#"+e.name.replace(/ /g,"-"),className:""},s.a.createElement("span",{className:"text"},e.name)),s.a.createElement("span",{className:"line -bottom"}))}))))},w=function(e){return s.a.createElement("div",{className:"header-hire-me"},s.a.createElement("span",null,s.a.createElement("a",{className:"cta-button",id:e.id?e.id:"sticky-hire-me",href:"mailto:melvin.vmegen@gmail.com",title:"hire-me"},"\u25ba ",e.action?e.action:"Recrutez-moi")))},y=function(e){return s.a.createElement("div",{className:"main-header-right"},s.a.createElement("div",{className:"header-user d-none d-sm-none d-md-none d-lg-flex"},s.a.createElement(w,{action:e.action})))},x=a(16),O=function(){var e=Object(n.useState)(!1),t=Object(x.a)(e,2),a=t[0],l=t[1],i=0,r=function(){i=window.pageYOffset,l(i>=496)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",(function(){return r}))}}),[]),s.a.createElement("div",{id:a?"sticky-header":"",className:"sticky-header-wrapper"},s.a.createElement("div",{className:"sticky-header-container"},s.a.createElement(v,null),s.a.createElement(k,null),s.a.createElement(y,null)))},S=function(e){return s.a.createElement("div",{className:"menu-toggle",onClick:e.toggle},s.a.createElement("div",{className:"line"}),s.a.createElement("div",{className:"line"}),s.a.createElement("div",{className:"line"}))},R=function(e){return s.a.createElement("div",{className:"mobile mobile-menu"},s.a.createElement("div",{className:"mobile-header"},s.a.createElement(v,null),s.a.createElement(S,{toggle:e.toggle}),e.show?s.a.createElement("div",{className:"mobile-nav"},s.a.createElement("div",{className:"mobile-header"},s.a.createElement(v,null),s.a.createElement(S,{toggle:e.toggle})),s.a.createElement(j.BreakpointProvider,null,s.a.createElement(k,null),s.a.createElement("div",{className:"hire-me-mobile"},s.a.createElement(w,null)))):null))},T=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).state={action:"Recrutez-moi !",show:!1},a.toggleMenu=function(){var e=a.state.show;a.setState({show:!e})},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"site-header"},s.a.createElement("div",{className:"site-header-wrapper"},s.a.createElement("header",{className:"main-header d-none d-sm-none d-md-none d-lg-flex"},s.a.createElement(v,null),s.a.createElement(k,null),s.a.createElement(y,{action:this.state.action})),s.a.createElement(R,{show:this.state.show,toggle:this.toggleMenu})),s.a.createElement(O,null))}}]),t}(n.Component),M=a(30),C=a.n(M),q=function(){return s.a.createElement("div",{className:"home-text"},s.a.createElement("p",null,"D\xe9veloppeur Web passionn\xe9, je suis constamment \xe0 la recherche d'am\xe9liorations, que ce soit \xe0 des fins personnelles ou professionnelles. Dans un monde pouss\xe9 par l'innovation, la lecture quotidienne et la curiosit\xe9 semblent obligatoires mais, pour moi c'est inn\xe9. J'ai toujours aim\xe9 plonger au plus profond des sujets qui me passionnent."))},B=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).state={action:"Recrutez-moi !",id:"hire-me"},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"typed-container"},s.a.createElement(C.a,{strings:["Je fais du Front-end sur React.js","Je fais du Back-end sur Rails","Je fais du PostgreSQL","Je fais du Marketing Digital","Je fais du SEO","Mais aussi du SEA"],typeSpeed:40,backSpeed:50,loop:!0,className:"typing"})),s.a.createElement("div",{id:"cta-wrapper-home"},s.a.createElement(q,null),s.a.createElement(w,{id:this.state.id,action:this.state.action})))}}]),t}(n.Component),A=a(31),D=a.n(A),L=function(){return s.a.createElement(D.a,{className:"d-none d-sm-block col-sm-3 col-md-3 align-center",params:{particles:{line_linked:{enable:!0,distance:100,color:"#3CA9D1",opacity:.6,width:1}}},style:{width:"100%"}})},P=function(){return s.a.createElement("div",{id:"section-home",className:"section-home"},s.a.createElement("div",{className:"blocks-hero",id:"first-child"},s.a.createElement("div",{className:"main-container"},s.a.createElement("div",{className:"home-face"},s.a.createElement(B,null),s.a.createElement(L,null)))))},I=function(e){return s.a.createElement(n.Fragment,null,s.a.createElement("h2",{className:"title-bold"},e.blabla.title),s.a.createElement("h3",{className:"featured-item-subheader italic"},e.blabla.subtitle),s.a.createElement("p",{className:"featured-item-body"},e.blabla.text))},J=function(e){return s.a.createElement("div",{className:"line-anim"},s.a.createElement("a",{href:"#my-projects"},s.a.createElement("span",{className:"text"},"\u25ba ",e.text),s.a.createElement("span",{className:"line -right"}),s.a.createElement("span",{className:"line -top"}),s.a.createElement("span",{className:"line -left"}),s.a.createElement("span",{className:"line -bottom"})))},F=function(e){return s.a.createElement(n.Fragment,null,s.a.createElement("span",{className:"circle"}),s.a.createElement("div",{className:"image-show-off"},e.inputs.map((function(e){return s.a.createElement("div",{className:"clipped-border",key:e.id},s.a.createElement("img",{src:e.img,alt:e.alt,id:"clipped"}))}))))},_=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).state={blabla:{id:1,title:"DEVELOPPEUR FRONT-END",subtitle:"React.js, Freelance",text:"Gr\xe2ce \xe0 mon exp\xe9rience professionnelle, j'ai pu suivre de multiples cours sur les languages suivants : HTML, CSS, Javascript. Et ainsi \xe9tendre mes comp\xe9tences digitale. Certifi\xe9 du Wagon apr\xe8s deux mois de bootcamp, j'ai d\xe9cider d'\xe9tendre mes comp\xe9tences en Javascript. Language \xe0 l'aide duquel je me sp\xe9cialise dans le front-end avec pour framework : React.js."},inputs:[{id:1,alt:"Javascript",img:"https://icn.lycee-valin.fr/projets2018/seconde14/eleve12/images/javascript.png"},{id:2,alt:"React",img:"https://oneteamsolutions.in/images/upload/post-33.png"},{id:3,alt:"CSS3",img:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"}],btnText:"D\xe9couvrez mes projets"},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"section-one",className:"section-one"},s.a.createElement("a",{href:"/",id:"Developpeur-Front-end",className:"section-anchor"}," "),s.a.createElement("div",{className:"section-wrapper"},s.a.createElement("div",{className:"section-left col-xs-12 col-sm-6 col-md-6"},s.a.createElement(I,{blabla:this.state.blabla}),s.a.createElement(J,{text:this.state.btnText})),s.a.createElement("div",{className:"section-right d-none d-sm-block col-sm-6 col-md-6 align-center"},s.a.createElement("div",{className:"section-wrapper-right"},s.a.createElement(F,{inputs:this.state.inputs})))))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).state={blabla:{id:1,title:"DEVELOPPEUR BACK-END",subtitle:"Ruby on Rails, Freelance",text:"Certifi\xe9 du Wagon apr\xe8s un bootcamp de deux mois, o\xf9 j'ai pu compl\xe9ter mes comp\xe9tences par un language suppl\xe9mentaire, Ruby et son framework, Rails. Le Wagon m'a \xe9galement initi\xe9 \xe0 la gestion de base de donn\xe9es avec son language SQL et des outils tel que MongoDB ou encore PostgreSQL."},inputs:[{id:1,alt:"Ruby",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRys5UJSddG96thCcHEDNaEElhTCYfDAty0xeZnLVxvODmGZ3b6PA&s"},{id:2,alt:"Rails",img:"https://img2.freepng.fr/20180824/gfo/kisspng-ruby-on-rails-logo-software-framework-unicorn-ruby-on-rails-5-5b804d22a1d260.3011829915351350106628.jpg"},{id:3,alt:"PostgreSQL",img:"https://p7.hiclipart.com/preview/396/90/545/postgresql-database-logo-computer-icons-replication-software-developer.jpg"}],btnText:"D\xe9couvrez mes projets"},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"section-two",className:"section-two"},s.a.createElement("a",{href:"/",id:"Back-end",className:"section-anchor"}," "),s.a.createElement("div",{className:"section-wrapper"},s.a.createElement("div",{className:"section-left d-none d-sm-block col-sm-6 col-md-6 align-center"},s.a.createElement("div",{className:"section-wrapper-left"},s.a.createElement(F,{inputs:this.state.inputs}))),s.a.createElement("div",{className:"section-right col-xs-12 col-sm-6 col-md-6"},s.a.createElement(I,{blabla:this.state.blabla}),s.a.createElement(J,{text:this.state.btnText}))))}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).state={blabla:{id:1,title:"MARKETEUR DIGITAL",subtitle:"Bachelor, sp\xe9cialisation Marketing",text:"Etudes r\xe9alis\xe9es \xe0 Kedge Business School ou j'ai eu la chance de d\xe9velopper mes comp\xe9tences num\xe9riques \xe0 travers de nombreux stages et exp\xe9riences. J'ai \xe9galement pass\xe9 2 ans en tant que responsable de la transition digitale pour le march\xe9 fran\xe7ais au sein de l'entreprise, Royal Brinkman. Au cours de cette exp\xe9rience j'ai appris \xe0 ma\xeetriser diff\xe9rents outils tels que Mailchimp, Unbounce, Hotjar, Google Analytics, ahrefs ainsi que Joomla."},inputs:[{id:1,alt:"MailChimp",img:"https://www.dexigner.com/images/news/xxi/31385.jpg"},{id:2,alt:"Ahrefs",img:"https://cdn.ahrefs.com/images/mediakit/logo_monochrome@2x.png"},{id:3,alt:"AdWords",img:"https://3x5yp62s8loz3jw8273enqos16xh-wpengine.netdna-ssl.com/wp-content/uploads/icon360-Analytics.png"}],btnText:"D\xe9couvrez mes projets"},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"section-three",className:"section-three"},s.a.createElement("a",{href:"/",id:"Marketeur-Digital",className:"section-anchor"}," "),s.a.createElement("div",{className:"section-wrapper"},s.a.createElement("div",{className:"section-left col-xs-12 col-sm-6 col-md-6"},s.a.createElement(I,{blabla:this.state.blabla}),s.a.createElement(J,{text:this.state.btnText})),s.a.createElement("div",{className:"section-right d-none d-sm-block col-sm-6 col-md-6 align-center"},s.a.createElement("div",{className:"section-wrapper-right"},s.a.createElement(F,{inputs:this.state.inputs})))))}}]),t}(n.Component),z=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"section-main"},s.a.createElement(_,null),s.a.createElement(G,null),s.a.createElement(H,null))}}]),t}(n.Component),W=a(11),K=a(32),Q=a.n(K),U=a(33),V=a.n(U),Y=a(34),Z=a.n(Y),X=a(35),$=a.n(X),ee=function(e){return s.a.createElement("div",{className:"gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8"},s.a.createElement("img",{src:e.img,alt:e.alt,className:"img-gallery"}))},te=function(e){return s.a.createElement(n.Fragment,null,s.a.createElement("h2",{className:"title-slide"},e.title),s.a.createElement("p",{className:"description-slide"},e.desc))},ae=a(22),ne=a.n(ae),se=function(e){return s.a.createElement("ul",{className:ne.a.TagList},e.tags.map((function(e){return s.a.createElement("li",{key:e.id,className:ne.a.Tag},e.name)})))},le=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={images:[{img:Q.a,alt:"Royal Brinkman"},{img:Z.a,alt:"Goboat"},{img:V.a,alt:"Mindseed"},{img:$.a,alt:"ThomasKrief"}],content:[{title:"ROYAL BRINKMAN",desc:"La boutique de devis en ligne pour l'horticulture professionnelle. O\xf9 vous pouvez trouver produits, connaissances et conseils personnalis\xe9s li\xe9s \xe0 l'horticulture. Projet de deux ans en tant que responsable de la transition digitale. Mes deux ann\xe9es de contribution ont une meilleure pr\xe9sence digitale avec une boutique en ligne professionnelle."},{title:"GOBOAT",desc:"Projet de 5 jours r\xe9alis\xe9 au cours du Bootcamp propos\xe9 par la formation de d\xe9veloppeur web Full-Stack, le Wagon. Avec comme rep\xe8re Airbnb nous avons cr\xe9\xe9 une plateforme de location de bateau. Email : admin@gmail.com, Password : password "},{title:"MINDSEED",desc:"Projet de deux semaines r\xe9alis\xe9 au cours du Bootcamp propos\xe9 par la formation de d\xe9veloppeur web Full-Stack, le Wagon. Nous avons cr\xe9\xe9 un site d'aide \xe0 l'apprentissage avec un syst\xe8me de flashcards pouss\xe9. Celui-ci est \xe0 destination des \xe9tudiants, professeurs ou simple curieux avare d'apprentissage. Email : melvin@gmail.com, Password : password"},{title:"THOMAS KRIEF",desc:"Projet de cr\xe9ation d'un site vitrine pour l'ancien skieur professionnel et nouvel artiste : Thomas Krief. L'objectif rechercher, mettre en avant ses derni\xe8res cr\xe9ations et inviter les visiteurs \xe0 se diriger vers son Instagram pour en savoir plus."}],tagsRB:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:4,name:"Joomla"}],tagsGB:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:6,name:"Ruby"},{id:7,name:"Rails"},{id:9,name:"Heroku"}],tagsMS:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:6,name:"Ruby"},{id:7,name:"Rails"},{id:9,name:"Heroku"}],tagsTK:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:4,name:"React.js"},{id:5,name:"Heroku"}],btnText:"Se rendre sur le site",nextIcon:s.a.createElement("span",{"aria-hidden":"true",className:"fa fa-chevron-right"}),prevIcon:s.a.createElement("span",{"aria-hidden":"true",className:"fa fa-chevron-left"})},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"section-slide"},s.a.createElement("a",{href:"/",id:"Mes-Projets",className:"section-anchor"}," "),s.a.createElement("div",{className:"section-wrapper-gallery"},s.a.createElement("div",null,s.a.createElement("div",{className:"section-title","data-aos":"zoom-in-up"},s.a.createElement("h2",{className:"title-bold align-center"},"MES PROJETS"),s.a.createElement("h3",{className:"featured-item-subheader italic align-center"},"D\xe9couvrez un exemple concret de tout ce qui pr\xe9c\xe8de")),s.a.createElement(W.a,{className:"gallery-content",interval:"1000000",nextIcon:this.state.nextIcon,prevIcon:this.state.prevIcon},s.a.createElement(W.a.Item,{className:"myslides fade-slide first-slide","data-aos":"fade-up"},s.a.createElement(ee,{img:this.state.images[0].img,alt:this.state.images[0].alt}),s.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},s.a.createElement(te,{title:this.state.content[0].title,desc:this.state.content[0].desc}),s.a.createElement(se,{tags:this.state.tagsRB}),s.a.createElement(J,{text:this.state.btnText}))),s.a.createElement(W.a.Item,{className:"myslides fade-slide first-slide","data-aos":"fade-up"},s.a.createElement(ee,{img:this.state.images[1].img,alt:this.state.images[1].alt}),s.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},s.a.createElement(te,{title:this.state.content[1].title,desc:this.state.content[1].desc}),s.a.createElement(se,{tags:this.state.tagsGB}),s.a.createElement(J,{text:this.state.btnText}))),s.a.createElement(W.a.Item,{className:"myslides fade-slide first-slide","data-aos":"fade-up"},s.a.createElement(ee,{img:this.state.images[2].img,alt:this.state.images[2].alt}),s.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},s.a.createElement(te,{title:this.state.content[2].title,desc:this.state.content[2].desc}),s.a.createElement(se,{tags:this.state.tagsMS}),s.a.createElement(J,{text:this.state.btnText}))),s.a.createElement(W.a.Item,{className:"myslides fade-slide first-slide","data-aos":"fade-up"},s.a.createElement(ee,{img:this.state.images[3].img,alt:this.state.images[3].alt}),s.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},s.a.createElement(te,{title:this.state.content[3].title,desc:this.state.content[3].desc}),s.a.createElement(se,{tags:this.state.tagsTK}),s.a.createElement(J,{text:this.state.btnText})))))))}}]),t}(n.Component),ie=function(e){var t=Object(n.useState)(!1),a=Object(x.a)(t,2),l=a[0],i=a[1],r=0,c=function(){r=window.pageYOffset,i(r>=4e3),console.log(r)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",(function(){return c}))}}),[]),s.a.createElement(n.Fragment,null,s.a.createElement(j.Breakpoint,{medium:!0,up:!0,className:"testimonials-list"},e.testimonials.map((function(e){return s.a.createElement("div",{className:l?"testimonials-slide col-xs-12 col-sm-4 col-md-4 d-sm-flex show-on-scroll is-visible":"testimonials-slide col-xs-12 col-sm-4 col-md-4 d-sm-flex show-on-scroll",key:e.id},s.a.createElement("div",{className:"slide-container card-testimonial testimonials"},s.a.createElement("div",{className:"testimonials-content"},s.a.createElement("div",{className:"testimonial-infos"},s.a.createElement("div",{className:"testimonials-bloc-images"},s.a.createElement("div",{className:"testimonial-picture"},s.a.createElement("img",{className:"avatar-large",alt:e.name,src:e.avatar}))),s.a.createElement("div",{className:"testimonial-text"},s.a.createElement("p",null,e.name,s.a.createElement("span",null,e.company)))),s.a.createElement("div",{className:"testimonial-quote"},s.a.createElement("blockquote",null,'"',e.quote,'"')))))}))),s.a.createElement(j.Breakpoint,{small:!0,down:!0,className:"testimonials-list"},s.a.createElement("div",{className:"testimonials-slide col-xs-12 col-sm-4 col-md-4 d-sm-flex show-on-scroll is-visible",key:e.testimonials[2].id},s.a.createElement("div",{className:"slide-container card-testimonial testimonials"},s.a.createElement("div",{className:"testimonials-content"},s.a.createElement("div",{className:"testimonial-infos"},s.a.createElement("div",{className:"testimonials-bloc-images"},s.a.createElement("div",{className:"testimonial-picture"},s.a.createElement("img",{className:"avatar-large",alt:e.testimonials[2].name,src:e.testimonials[2].avatar}))),s.a.createElement("div",{className:"testimonial-text"},s.a.createElement("p",null,e.testimonials[2].name,s.a.createElement("span",null,e.testimonials[2].company)))),s.a.createElement("div",{className:"testimonial-quote"},s.a.createElement("blockquote",null,'"',e.testimonials[2].quote,'"')))))))},re=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).state={testimonials:[{id:1,avatar:"https://media.licdn.com/dms/image/C4D03AQGW-JP_-b78zQ/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=R12qVgJftT4HTSBvDIVeQCTwljB0lWWrbXQGFI4qTw4",name:"Rob Helderman",company:"E-commerce Manager, Royal Brinkman",quote:"Il prend des mesures g\xe9n\xe9rales visant tous les facteurs environnementaux de la partie digitale.De la gestion d'articles, CRM, aux campagnes e-mail, en passant par le r\xe9f\xe9rencement naturel et le SEA."},{id:2,avatar:"https://www.platonformation.com/wp-content/uploads/2019/09/jonathan-chaffenjeon.png",name:"Jonathan Chaffanjon",company:"G\xe9rant, Platon Formation",quote:"S\xe9rieux et impliqu\xe9 dans les projets, nous avons collobor\xe9 sur plusieurs projets dont un de r\xe9f\xe9rencement naturelle ( Platonformation.com ) ainsi que mon logiciel de gestion de base de donn\xe9es. Travail en autonomie."},{id:3,avatar:"https://media-exp1.licdn.com/dms/image/C5603AQHx3Z4lmjRR3g/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=k4f-EvGIO1qB8k07C7FFG-psOBqPNFcdd7-MSjXcxc8",name:"Lucas Jamelin",company:"Label Manager, 6K RIO RECORDS",quote:"Il a \xe9t\xe9 de bons conseils et surtout tr\xe8s volontaire et force de proposition. Ses qualit\xe9s strat\xe9giques ne peuvent qu\u2019optimiser son travail et ses rendus qui sont toujours bien ficell\xe9s et accompagn\xe9s d\u2019une justification de ses choix toujours tr\xe8s pertinente."}]},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"section-testimonial"},s.a.createElement("div",null,s.a.createElement("div",{className:"section-title title-center","data-aos":"zoom-in-up"},s.a.createElement("h2",{className:"title-bold"},"Ils m'ont fait confiance")),s.a.createElement("div",{className:"row-fluid"},s.a.createElement("div",{className:"section-testimonials"},s.a.createElement(j.BreakpointProvider,null,s.a.createElement(ie,{testimonials:this.state.testimonials}))))))}}]),t}(n.Component),ce=function(e){return s.a.createElement("ul",{className:"social-links"},e.links.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement("a",{href:e.href,className:"icon fa "+e.icon},s.a.createElement("p",{className:"social-link"},e.name)))})))},oe=function(){return s.a.createElement("div",{className:"footer-newsletter d-none d-sm-block"},s.a.createElement("p",{className:"menu-item-newsletter"},s.a.createElement("span",null,"Rejoingnez ma newsletter")),s.a.createElement("form",{className:"newsletter-form"},s.a.createElement("input",{className:"newsletter-input",type:"text",name:"Email",placeholder:"name@website.com","aria-required":"true"}),s.a.createElement("button",{type:"submit",value:"subscribe",name:"subscribe",className:"button-newsletter"},"S'inscrire")))},me=function(e){return s.a.createElement("ul",{className:"menu-items"},e.links.map((function(e){return s.a.createElement("li",{id:"menu-item",className:"menu-item-has-children",key:e.id},s.a.createElement("a",{href:"/",className:"menu-item-title"},e.title),e.links.map((function(e){return s.a.createElement("ul",{className:"sub-menu",key:e.id},s.a.createElement("li",{id:"menu-item-6",className:"menu-item-nav-footer"},s.a.createElement("a",{href:"/",className:"footer-link"},e.name)))})))})))},de=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).state={socialLinks:[{id:1,name:"LinkedIn",icon:"fa-linkedin",ahref:"https://www.linkedin.com/in/melvin-van-megen/"},{id:2,name:"Twitter",icon:"fa-twitter",ahref:""},{id:3,name:"Skype",icon:"fa-skype",ahref:""},{id:4,name:"Github",icon:"fa-github",ahref:"https://github.com/Melvinvmegen"}],front:[{id:1,title:"D\xe9veloppeur Front-End",links:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"},{id:4,name:"React"}]}],linksMar:[{id:1,title:"D\xe9veloppeur Back-End",links:[{id:1,name:"Ruby"},{id:2,name:"Rails"},{id:3,name:"SQL"},{id:4,name:"MongoDB"}]}],linksTra:[{id:1,title:"Marketing Digital",links:[{id:1,name:"SEO"},{id:2,name:"SEA"},{id:3,name:"Email Marketing"},{id:4,name:"Marketing de contenu"}]}]},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"component-footer"},s.a.createElement("div",{className:"footer-full-row"},s.a.createElement("div",{className:"footer-inner"},s.a.createElement("div",{className:"footer-header"},s.a.createElement("div",{className:"footer-header-inner"},s.a.createElement("div",{className:"footer-header-inner-left"},s.a.createElement("h1",null,s.a.createElement("a",{href:"/"},"Contact me"))),s.a.createElement("div",{className:"footer-header-inner-right"},s.a.createElement(ce,{links:this.state.socialLinks}))),s.a.createElement("div",{className:"footer-main"},s.a.createElement(oe,null),s.a.createElement("div",{className:"footer-nav"},s.a.createElement("nav",{className:"nav-footer-nav"},s.a.createElement(me,{links:this.state.front}),s.a.createElement(me,{links:this.state.linksMar}),s.a.createElement(me,{links:this.state.linksTra})))),s.a.createElement("div",{className:"footer-bottom"},s.a.createElement("p",null,"Copyright @2019 Mvmegen. All rights reserved"))))))}}]),t}(n.Component),ue=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(n.Fragment,null,s.a.createElement(N.Provider,{value:{main:[{id:1,name:"Developpeur Front-end"},{id:2,name:"Back-end"},{id:3,name:"Marketeur Digital"},{id:4,name:"Mes Projets"}]}},s.a.createElement(T,null),s.a.createElement(P,null),s.a.createElement(z,null)),s.a.createElement(le,null),s.a.createElement(re,null),s.a.createElement(de,null))}}]),t}(n.Component),pe=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("This is the process.env","/portfolio"),s.a.createElement("div",{className:"App"},s.a.createElement(u.a,{path:"/",component:ue}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(21);console.log("This is the process.env","/portfolio");var he=s.a.createElement(Ee.a,{basename:"/portfolio"},s.a.createElement(pe,null));i.a.render(he,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.49471c34.chunk.js.map