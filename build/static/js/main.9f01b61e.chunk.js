(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports={TagList:"Tag_TagList__3PBn_",Tag:"Tag_Tag__3omdR"}},,function(e,a,t){},,,,function(e,a,t){e.exports=t.p+"static/media/royalbrinkman.d69ed0c6.png"},function(e,a,t){e.exports=t.p+"static/media/mindseed.5ec6cee7.png"},function(e,a,t){e.exports=t.p+"static/media/goboat.13ece6c3.jpg"},function(e,a,t){e.exports=t.p+"static/media/thomaskrief.c7ffe691.png"},,,function(e,a,t){e.exports=t(28)},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(13),i=t.n(l),r=(t(12),t(1)),c=t(2),m=t(4),o=t(3),d=t(5),u=function(){return s.a.createElement("div",{className:"main-header-left"},s.a.createElement("h1",null,s.a.createElement("a",{href:"/"},"MVM")))},p=s.a.createContext({main:[{id:1,name:"Developpeur Front-end"},{id:2,name:"Back-end"},{id:3,name:"Marketeur Digital"},{id:4,name:"Mes Projets"}]}),E=t(6),g=function(){var e=Object(n.useContext)(p);return s.a.createElement("div",{className:"main-header-center"},s.a.createElement(E.Breakpoint,{large:!0,up:!0,className:"nav-menu"},e.main.map((function(e){return s.a.createElement("div",{className:"nav-menu-item-first",key:e.id},s.a.createElement("a",{href:"#"+e.name.replace(/ /g,"-")},s.a.createElement("span",{className:"text"},e.name)),s.a.createElement("span",{className:"line -bottom"}))}))),s.a.createElement(E.Breakpoint,{medium:!0,down:!0,className:"nav-menu-mobile"},e.main.map((function(e){return s.a.createElement("div",{className:"nav-menu-item",key:e.id},s.a.createElement("a",{href:"#"+e.name.replace(/ /g,"-")},s.a.createElement("span",{className:"text"},e.name)),s.a.createElement("span",{className:"line -bottom"}))}))))},h=function(e){return s.a.createElement("div",{className:"header-hire-me"},s.a.createElement("span",null,s.a.createElement("a",{className:"cta-button",id:e.id?e.id:"sticky-hire-me",href:"mailto:melvin.vmegen@gmail.com",title:"hire-me"},"\u25ba ",e.action?e.action:"Recrutez-moi")))},f=function(e){return s.a.createElement("div",{className:"main-header-right"},s.a.createElement("div",{className:"header-user d-none d-sm-none d-md-none d-lg-flex"},s.a.createElement(h,{action:e.action})))},v=(t(21),function(e){return s.a.createElement("div",{className:"menu-toggle",onClick:e.toggle},s.a.createElement("div",{className:"line"}),s.a.createElement("div",{className:"line"}),s.a.createElement("div",{className:"line"}))}),b=function(e){return s.a.createElement("div",{className:"mobile mobile-menu"},s.a.createElement("div",{className:"mobile-header"},s.a.createElement(u,null),s.a.createElement(v,{toggle:e.toggle}),e.show?s.a.createElement("div",{className:"mobile-nav"},s.a.createElement("div",{className:"mobile-header"},s.a.createElement(u,null),s.a.createElement(v,{toggle:e.toggle})),s.a.createElement(E.BreakpointProvider,null,s.a.createElement(g,null),s.a.createElement("div",{className:"hire-me-mobile"},s.a.createElement(h,null)))):null))},N=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={action:"Recrutez-moi !",show:!1},t.toggleMenu=function(){var e=t.state.show;t.setState({show:!e})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"site-header"},s.a.createElement("div",{className:"site-header-wrapper"},s.a.createElement("header",{className:"main-header d-none d-sm-none d-md-none d-lg-flex"},s.a.createElement(u,null),s.a.createElement(g,null),s.a.createElement(f,{action:this.state.action})),s.a.createElement(b,{show:this.state.show,toggle:this.toggleMenu})))}}]),a}(n.Component),k=t(14),j=t.n(k),y=function(){return s.a.createElement("div",{className:"home-text"},s.a.createElement("p",null,"D\xe9veloppeur Web passionn\xe9, je suis constamment \xe0 la recherche d'am\xe9liorations, que ce soit \xe0 des fins personnelles ou professionnelles. Dans un monde pouss\xe9 par l'innovation, la lecture quotidienne et la curiosit\xe9 semblent obligatoires mais, pour moi c'est inn\xe9. J'ai toujours aim\xe9 plonger au plus profond des sujets qui me passionnent."))},w=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={action:"Recrutez-moi !",id:"hire-me"},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"typed-container"},s.a.createElement(j.a,{strings:["Je fais du Front-end sur React.js","Je fais du Back-end sur Rails","Je fais du PostgreSQL","Je fais du Marketing Digital","Je fais du SEO","Mais aussi du SEA"],typeSpeed:40,backSpeed:50,loop:!0,className:"typing"})),s.a.createElement("div",{id:"cta-wrapper-home"},s.a.createElement(y,null),s.a.createElement(h,{id:this.state.id,action:this.state.action})))}}]),a}(n.Component),x=t(15),O=t.n(x),R=function(){return s.a.createElement(O.a,{className:"d-none d-sm-block col-sm-4 col-md-4 align-center",params:{particles:{line_linked:{enable:!0,distance:100,color:"#3CA9D1",opacity:.6,width:1}}},style:{width:"100%"}})},S=function(){return s.a.createElement("div",{id:"section-home",className:"section-home"},s.a.createElement("div",{className:"blocks-hero",id:"first-child"},s.a.createElement("div",{className:"main-container"},s.a.createElement("div",{className:"home-face"},s.a.createElement(w,null),s.a.createElement(R,null)))))},T=function(e){return s.a.createElement(n.Fragment,null,s.a.createElement("h2",{className:"title-bold"},e.blabla.title),s.a.createElement("h3",{className:"featured-item-subheader italic"},e.blabla.subtitle),s.a.createElement("p",{className:"featured-item-body"},e.blabla.text))},M=function(e){return s.a.createElement("div",{className:"line-anim"},s.a.createElement("a",{href:"#my-projects"},s.a.createElement("span",{className:"text"},"\u25ba ",e.text),s.a.createElement("span",{className:"line -right"}),s.a.createElement("span",{className:"line -top"}),s.a.createElement("span",{className:"line -left"}),s.a.createElement("span",{className:"line -bottom"})))},C=function(e){return s.a.createElement(n.Fragment,null,s.a.createElement("span",{className:"circle"}),s.a.createElement("div",{className:"image-show-off"},e.inputs.map((function(e){return s.a.createElement("div",{className:"clipped-border",key:e.id},s.a.createElement("img",{src:e.img,alt:e.alt,id:"clipped"}))}))))},q=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={blabla:{id:1,title:"DEVELOPPEUR FRONT-END",subtitle:"React.js, Freelance",text:"Gr\xe2ce \xe0 mon exp\xe9rience professionnelle, j'ai pu suivre de multiples cours sur les languages suivants : HTML, CSS, Javascript. Et ainsi \xe9tendre mes comp\xe9tences digitale. Certifi\xe9 du Wagon apr\xe8s deux mois de bootcamp, j'ai d\xe9cider d'\xe9tendre mes comp\xe9tences en Javascript. Language \xe0 l'aide duquel je me sp\xe9cialise dans le front-end avec pour framework : React.js."},inputs:[{id:1,alt:"Javascript",img:"https://icn.lycee-valin.fr/projets2018/seconde14/eleve12/images/javascript.png"},{id:2,alt:"React",img:"https://oneteamsolutions.in/images/upload/post-33.png"},{id:3,alt:"CSS3",img:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"}],btnText:"D\xe9couvrez mes projets"},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{id:"section-one",className:"section-one"},s.a.createElement("a",{href:"/",id:"Developpeur-Front-end",className:"section-anchor"}," "),s.a.createElement("div",{className:"section-wrapper"},s.a.createElement("div",{className:"section-left col-xs-12 col-sm-6 col-md-6"},s.a.createElement(T,{blabla:this.state.blabla}),s.a.createElement(M,{text:this.state.btnText})),s.a.createElement("div",{className:"section-right d-none d-sm-block col-sm-6 col-md-6 align-center"},s.a.createElement("div",{className:"section-wrapper-right"},s.a.createElement(C,{inputs:this.state.inputs})))))}}]),a}(n.Component),B=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={blabla:{id:1,title:"DEVELOPPEUR BACK-END",subtitle:"Ruby on Rails, Freelance",text:"Certifi\xe9 du Wagon apr\xe8s un bootcamp de deux mois, o\xf9 j'ai pu compl\xe9ter mes comp\xe9tences par un language suppl\xe9mentaire, Ruby et son framework, Rails. Le Wagon m'a \xe9galement initi\xe9 \xe0 la gestion de base de donn\xe9es avec son language SQL et des outils tel que MongoDB ou encore PostgreSQL."},inputs:[{id:1,alt:"Ruby",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRys5UJSddG96thCcHEDNaEElhTCYfDAty0xeZnLVxvODmGZ3b6PA&s"},{id:2,alt:"Rails",img:"https://img2.freepng.fr/20180824/gfo/kisspng-ruby-on-rails-logo-software-framework-unicorn-ruby-on-rails-5-5b804d22a1d260.3011829915351350106628.jpg"},{id:3,alt:"PostgreSQL",img:"https://p7.hiclipart.com/preview/396/90/545/postgresql-database-logo-computer-icons-replication-software-developer.jpg"}],btnText:"D\xe9couvrez mes projets"},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{id:"section-two",className:"section-two"},s.a.createElement("a",{href:"/",id:"Back-end",className:"section-anchor"}," "),s.a.createElement("div",{className:"section-wrapper"},s.a.createElement("div",{className:"section-left d-none d-sm-block col-sm-6 col-md-6 align-center"},s.a.createElement("div",{className:"section-wrapper-left"},s.a.createElement(C,{inputs:this.state.inputs}))),s.a.createElement("div",{className:"section-right col-xs-12 col-sm-6 col-md-6"},s.a.createElement(T,{blabla:this.state.blabla}),s.a.createElement(M,{text:this.state.btnText}))))}}]),a}(n.Component),A=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={blabla:{id:1,title:"MARKETEUR DIGITAL",subtitle:"Bachelor, sp\xe9cialisation Marketing",text:"Etudes r\xe9alis\xe9es \xe0 Kedge Business School ou j'ai eu la chance de d\xe9velopper mes comp\xe9tences num\xe9riques \xe0 travers de nombreux stages et exp\xe9riences. J'ai \xe9galement pass\xe9 2 ans en tant que responsable de la transition digitale pour le march\xe9 fran\xe7ais au sein de l'entreprise, Royal Brinkman. Au cours de cette exp\xe9rience j'ai appris \xe0 ma\xeetriser diff\xe9rents outils tels que Mailchimp, Unbounce, Hotjar, Google Analytics, ahrefs ainsi que Joomla."},inputs:[{id:1,alt:"MailChimp",img:"https://www.dexigner.com/images/news/xxi/31385.jpg"},{id:2,alt:"Ahrefs",img:"https://cdn.ahrefs.com/images/mediakit/logo_monochrome@2x.png"},{id:3,alt:"AdWords",img:"https://3x5yp62s8loz3jw8273enqos16xh-wpengine.netdna-ssl.com/wp-content/uploads/icon360-Analytics.png"}],btnText:"D\xe9couvrez mes projets"},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{id:"section-three",className:"section-three"},s.a.createElement("a",{href:"/",id:"Marketeur-Digital",className:"section-anchor"}," "),s.a.createElement("div",{className:"section-wrapper"},s.a.createElement("div",{className:"section-left col-xs-12 col-sm-6 col-md-6"},s.a.createElement(T,{blabla:this.state.blabla}),s.a.createElement(M,{text:this.state.btnText})),s.a.createElement("div",{className:"section-right d-none d-sm-block col-sm-6 col-md-6 align-center"},s.a.createElement("div",{className:"section-wrapper-right"},s.a.createElement(C,{inputs:this.state.inputs})))))}}]),a}(n.Component),D=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"section-main"},s.a.createElement(q,null),s.a.createElement(B,null),s.a.createElement(A,null))}}]),a}(n.Component),L=t(8),P=t(16),J=t.n(P),F=t(17),I=t.n(F),_=t(18),G=t.n(_),H=t(19),z=t.n(H),W=function(e){return s.a.createElement("div",{className:"gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8"},s.a.createElement("img",{src:e.img,alt:e.alt,className:"img-gallery"}))},K=function(e){return s.a.createElement(n.Fragment,null,s.a.createElement("h2",{className:"title-slide"},e.title),s.a.createElement("p",{className:"description-slide"},e.desc))},Q=t(10),V=t.n(Q),U=function(e){return s.a.createElement("ul",{className:V.a.TagList},e.tags.map((function(e){return s.a.createElement("li",{key:e.id,className:V.a.Tag},e.name)})))},Z=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={images:[{img:J.a,alt:"Royal Brinkman"},{img:G.a,alt:"Goboat"},{img:I.a,alt:"Mindseed"},{img:z.a,alt:"ThomasKrief"}],content:[{title:"ROYAL BRINKMAN",desc:"La boutique de devis en ligne pour l'horticulture professionnelle. O\xf9 vous pouvez trouver produits, connaissances et conseils personnalis\xe9s li\xe9s \xe0 l'horticulture. Projet de deux ans en tant que responsable de la transition digitale. Mes deux ann\xe9es de contribution ont une meilleure pr\xe9sence digitale avec une boutique en ligne professionnelle."},{title:"GOBOAT",desc:"Projet de 5 jours r\xe9alis\xe9 au cours du Bootcamp propos\xe9 par la formation de d\xe9veloppeur web Full-Stack, le Wagon. Avec comme rep\xe8re Airbnb nous avons cr\xe9\xe9 une plateforme de location de bateau. Email : admin@gmail.com, Password : password "},{title:"MINDSEED",desc:"Projet de deux semaines r\xe9alis\xe9 au cours du Bootcamp propos\xe9 par la formation de d\xe9veloppeur web Full-Stack, le Wagon. Nous avons cr\xe9\xe9 un site d'aide \xe0 l'apprentissage avec un syst\xe8me de flashcards pouss\xe9. Celui-ci est \xe0 destination des \xe9tudiants, professeurs ou simple curieux avare d'apprentissage. Email : melvin@gmail.com, Password : password"},{title:"THOMAS KRIEF",desc:"Projet de cr\xe9ation d'un site vitrine pour l'ancien skieur professionnel et nouvel artiste : Thomas Krief. L'objectif rechercher, mettre en avant ses derni\xe8res cr\xe9ations et inviter les visiteurs \xe0 se diriger vers son Instagram pour en savoir plus."}],tagsRB:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:4,name:"Joomla"}],tagsGB:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:6,name:"Ruby"},{id:7,name:"Rails"},{id:9,name:"Heroku"}],tagsMS:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:6,name:"Ruby"},{id:7,name:"Rails"},{id:9,name:"Heroku"}],tagsTK:[{id:1,name:"HTML5"},{id:2,name:"CSS3"},{id:3,name:"Javascript"},{id:4,name:"React.js"},{id:5,name:"Heroku"}],btnText:"Se rendre sur le site"},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"section-slide"},s.a.createElement("a",{href:"/",id:"Mes-Projets",className:"section-anchor"}," "),s.a.createElement("div",{className:"section-wrapper-gallery"},s.a.createElement("div",null,s.a.createElement("div",{className:"section-title","data-aos":"zoom-in-up"},s.a.createElement("h2",{className:"title-bold align-center"},"MES PROJETS"),s.a.createElement("h3",{className:"featured-item-subheader italic align-center"},"D\xe9couvrez un exemple concret de tout ce qui pr\xe9c\xe8de")),s.a.createElement(L.a,{className:"gallery-content",interval:"1000000"},s.a.createElement(L.a.Item,{className:"myslides fade-slide first-slide","data-aos":"fade-up"},s.a.createElement(W,{img:this.state.images[0].img,alt:this.state.images[0].alt}),s.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},s.a.createElement(K,{title:this.state.content[0].title,desc:this.state.content[0].desc}),s.a.createElement(U,{tags:this.state.tagsRB}),s.a.createElement(M,{text:this.state.btnText}))),s.a.createElement(L.a.Item,{className:"myslides fade-slide first-slide","data-aos":"fade-up"},s.a.createElement(W,{img:this.state.images[1].img,alt:this.state.images[1].alt}),s.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},s.a.createElement(K,{title:this.state.content[1].title,desc:this.state.content[1].desc}),s.a.createElement(U,{tags:this.state.tagsGB}),s.a.createElement(M,{text:this.state.btnText}))),s.a.createElement(L.a.Item,{className:"myslides fade-slide first-slide","data-aos":"fade-up"},s.a.createElement(W,{img:this.state.images[2].img,alt:this.state.images[2].alt}),s.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},s.a.createElement(K,{title:this.state.content[2].title,desc:this.state.content[2].desc}),s.a.createElement(U,{tags:this.state.tagsMS}),s.a.createElement(M,{text:this.state.btnText}))),s.a.createElement(L.a.Item,{className:"myslides fade-slide first-slide","data-aos":"fade-up"},s.a.createElement(W,{img:this.state.images[3].img,alt:this.state.images[3].alt}),s.a.createElement("div",{className:"gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4"},s.a.createElement(K,{title:this.state.content[3].title,desc:this.state.content[3].desc}),s.a.createElement(U,{tags:this.state.tagsTK}),s.a.createElement(M,{text:this.state.btnText})))))))}}]),a}(n.Component),X=function(e){return s.a.createElement(n.Fragment,null,s.a.createElement(E.Breakpoint,{medium:!0,up:!0,className:"testimonials-list"},e.testimonials.map((function(e){return s.a.createElement("div",{className:"testimonials-slide col-xs-12 col-sm-4 col-md-4 d-sm-flex show-on-scroll is-visible",key:e.id},s.a.createElement("div",{className:"slide-container card-testimonial testimonials"},s.a.createElement("div",{className:"testimonials-content"},s.a.createElement("div",{className:"testimonial-infos"},s.a.createElement("div",{className:"testimonials-bloc-images"},s.a.createElement("div",{className:"testimonial-picture"},s.a.createElement("img",{className:"avatar-large",alt:e.name,src:e.avatar}))),s.a.createElement("div",{className:"testimonial-text"},s.a.createElement("p",null,e.name,s.a.createElement("span",null,e.company)))),s.a.createElement("div",{className:"testimonial-quote"},s.a.createElement("blockquote",null,'"',e.quote,'"')))))}))),s.a.createElement(E.Breakpoint,{small:!0,down:!0,className:"testimonials-list"},s.a.createElement("div",{className:"testimonials-slide col-xs-12 col-sm-4 col-md-4 d-sm-flex show-on-scroll is-visible",key:e.testimonials[2].id},s.a.createElement("div",{className:"slide-container card-testimonial testimonials"},s.a.createElement("div",{className:"testimonials-content"},s.a.createElement("div",{className:"testimonial-infos"},s.a.createElement("div",{className:"testimonials-bloc-images"},s.a.createElement("div",{className:"testimonial-picture"},s.a.createElement("img",{className:"avatar-large",alt:e.testimonials[2].name,src:e.testimonials[2].avatar}))),s.a.createElement("div",{className:"testimonial-text"},s.a.createElement("p",null,e.testimonials[2].name,s.a.createElement("span",null,e.testimonials[2].company)))),s.a.createElement("div",{className:"testimonial-quote"},s.a.createElement("blockquote",null,'"',e.testimonials[2].quote,'"')))))))},Y=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={testimonials:[{id:1,avatar:"https://media.licdn.com/dms/image/C4D03AQGW-JP_-b78zQ/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=R12qVgJftT4HTSBvDIVeQCTwljB0lWWrbXQGFI4qTw4",name:"Rob Helderman",company:"E-commerce Manager, Royal Brinkman",quote:"Il prend des mesures g\xe9n\xe9rales visant tous les facteurs environnementaux de la partie digitale.De la gestion d'articles, CRM, aux campagnes e-mail, en passant par le r\xe9f\xe9rencement naturel et le SEA."},{id:2,avatar:"https://www.platonformation.com/wp-content/uploads/2019/09/jonathan-chaffenjeon.png",name:"Jonathan Chaffanjon",company:"G\xe9rant, Platon Formation",quote:"S\xe9rieux et impliqu\xe9 dans les projets, nous avons collobor\xe9 sur plusieurs projets dont un de r\xe9f\xe9rencement naturelle ( Platonformation.com ) ainsi que mon logiciel de gestion de base de donn\xe9es. Travail en autonomie."},{id:3,avatar:"https://media-exp1.licdn.com/dms/image/C5603AQHx3Z4lmjRR3g/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=k4f-EvGIO1qB8k07C7FFG-psOBqPNFcdd7-MSjXcxc8",name:"Lucas Jamelin",company:"Label Manager, 6K RIO RECORDS",quote:"Il a \xe9t\xe9 de bons conseils et surtout tr\xe8s volontaire et force de proposition. Ses qualit\xe9s strat\xe9giques ne peuvent qu\u2019optimiser son travail et ses rendus qui sont toujours bien ficell\xe9s et accompagn\xe9s d\u2019une justification de ses choix toujours tr\xe8s pertinente."}]},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"section-testimonial"},s.a.createElement("div",null,s.a.createElement("div",{className:"section-title title-center","data-aos":"zoom-in-up"},s.a.createElement("h2",{className:"title-bold"},"Ils m'ont fait confiance")),s.a.createElement("div",{className:"row-fluid"},s.a.createElement("div",{className:"section-testimonials"},s.a.createElement(E.BreakpointProvider,null,s.a.createElement(X,{testimonials:this.state.testimonials}))))))}}]),a}(n.Component),$=function(e){return s.a.createElement("ul",{className:"social-links"},e.links.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement("a",{href:e.href,className:"icon fa "+e.icon},s.a.createElement("p",{className:"social-link"},e.name)))})))},ee=function(){return s.a.createElement("div",{className:"footer-newsletter d-none d-sm-block"},s.a.createElement("p",{className:"menu-item-newsletter"},s.a.createElement("span",null,"Rejoingnez ma newsletter")),s.a.createElement("form",{className:"newsletter-form"},s.a.createElement("input",{className:"newsletter-input",type:"text",name:"Email",placeholder:"name@website.com","aria-required":"true"}),s.a.createElement("button",{type:"submit",value:"subscribe",name:"subscribe",className:"button-newsletter"},"S'inscrire")))},ae=function(e){return s.a.createElement("ul",{className:"menu-items"},e.links.map((function(e){return s.a.createElement("li",{id:"menu-item",className:"menu-item-has-children",key:e.id},s.a.createElement("a",{href:"/",className:"menu-item-title"},e.title),e.links.map((function(e){return s.a.createElement("ul",{className:"sub-menu",key:e.id},s.a.createElement("li",{id:"menu-item-6",className:"menu-item-nav-footer"},s.a.createElement("a",{href:"/",className:"footer-link"},e.name)))})))})))},te=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={socialLinks:[{id:1,name:"LinkedIn",icon:"fa-linkedin",ahref:"https://www.linkedin.com/in/melvin-van-megen/"},{id:2,name:"Twitter",icon:"fa-twitter",ahref:""},{id:3,name:"Skype",icon:"fa-skype",ahref:""},{id:4,name:"Github",icon:"fa-github",ahref:"https://github.com/Melvinvmegen"}],front:[{id:1,title:"D\xe9veloppeur Front-End",links:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"},{id:4,name:"React"}]}],linksMar:[{id:1,title:"D\xe9veloppeur Back-End",links:[{id:1,name:"Ruby"},{id:2,name:"Rails"},{id:3,name:"SQL"},{id:4,name:"MongoDB"}]}],linksTra:[{id:1,title:"Marketing Digital",links:[{id:1,name:"SEO"},{id:2,name:"SEA"},{id:3,name:"Email Marketing"},{id:4,name:"Marketing de contenu"}]}]},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"component-footer"},s.a.createElement("div",{className:"footer-full-row"},s.a.createElement("div",{className:"footer-inner"},s.a.createElement("div",{className:"footer-header"},s.a.createElement("div",{className:"footer-header-inner"},s.a.createElement("div",{className:"footer-header-inner-left"},s.a.createElement("h1",null,s.a.createElement("a",{href:"/"},"Contact me"))),s.a.createElement("div",{className:"footer-header-inner-right"},s.a.createElement($,{links:this.state.socialLinks}))),s.a.createElement("div",{className:"footer-main"},s.a.createElement(ee,null),s.a.createElement("div",{className:"footer-nav"},s.a.createElement("nav",{className:"nav-footer-nav"},s.a.createElement(ae,{links:this.state.front}),s.a.createElement(ae,{links:this.state.linksMar}),s.a.createElement(ae,{links:this.state.linksTra})))),s.a.createElement("div",{className:"footer-bottom"},s.a.createElement("p",null,"Copyright @2019 Mvmegen. All rights reserved"))))))}}]),a}(n.Component),ne=(t(27),function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p.Provider,{value:{main:[{id:1,name:"Developpeur Front-end"},{id:2,name:"Back-end"},{id:3,name:"Marketeur Digital"},{id:4,name:"Mes Projets"}]}},s.a.createElement(N,null),s.a.createElement(S,null),s.a.createElement(D,null)),s.a.createElement(Z,null),s.a.createElement(Y,null),s.a.createElement(te,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[22,1,2]]]);
//# sourceMappingURL=main.9f01b61e.chunk.js.map