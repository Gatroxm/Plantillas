(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"8b/h":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),r=n("q1tI"),i=n.n(r),l=n("76ZC"),o=n.n(l),s=n("FWZJ"),c=n("z/o8"),u=n("nOHt"),m=i.a.createElement;function d(e){var t=e.description,n=e.mainHeading,l=e.variations,d=void 0===l?{usa:"",uae:"",uk:""}:l,v=e.image,p=void 0===v?{featuredImage:"",altText:""}:v,g=e.title,f=void 0===g?"":g,b=e.subtitle;"undefined"===typeof t&&(t=void 0===b?"":b);var h=Object(r.useRef)(c.b.timeline({paused:!0})),y=Object(u.useRouter)().query,N=function(){var e=d[y.lang],a={title:f,description:t,mainHeading:n};if("undefined"===typeof e)return a;for(var r in a)e[r]||(e[r]=a[r]);return e}(),x=Object(r.useState)(!1),k=x[0],w=x[1],O=Object(r.useRef)(0),j=Object(r.useRef)(0),_=Object(r.useRef)(0);return Object(r.useEffect)((function(){h.current.to(O.current,{scale:1.2,ease:"power4.out",duration:1}),h.current.to([j.current,_.current?_.current:null].filter((function(e){return Boolean})),{y:0,opacity:1,stagger:.1,duration:1,ease:"power4.out"},"-=0.5"),setTimeout((function(){h.current.play()}),500)}),[]),Object(r.useEffect)((function(){k&&h.current.play()}),[k]),m(i.a.Fragment,null,m("section",{className:Object(s.c)("intro-section_service",k&&"loaded")},m("div",{className:"background"},m("div",{className:"background_overlay"}),m("img",Object(a.a)({onLoad:function(){return w(!0)},ref:function(e){if(O.current=e,e){var t=e,n=function(){w(!0)};t.onload=n,t.complete&&n()}},style:{transform:"scale(1)"},alt:null===p||void 0===p?void 0:p.altText,src:null===p||void 0===p?void 0:p.sourceUrl},"alt",""))),m("div",{className:"wrapper"},m("div",{className:"intro-section_service_inner"},m("h2",{ref:j,style:{opacity:0,transform:"translate(0,100%)"}},o()((null===N||void 0===N?void 0:N.title)||"")),Boolean(null===N||void 0===N?void 0:N.description)&&m("h1",{ref:_,style:{opacity:0,transform:"translate(0,100%)"}},o()(Object(s.g)((null===N||void 0===N?void 0:N.description)||"")||""))))))}},Rn3k:function(e,t,n){"use strict";n.d(t,"a",(function(){return D})),n.d(t,"b",(function(){return C}));var a=n("wx14"),r=n("o0o1"),i=n.n(r),l=n("rePB"),o=n("HaE+"),s=n("h4VS"),c=n("ODXe"),u=n("q1tI"),m=n.n(u),d=n("76ZC"),v=n.n(d),p=n("YFqc"),g=n.n(p),f=n("g9Ae"),b=n("7l9Y"),h=n.n(b),y=n("UqWo"),N=n("KYPV"),x=n("UGp+"),k=(n("LvDl"),n("lTCR")),w=n.n(k),O=n("UwMZ"),j=n("FWZJ"),_=n("wEEd"),T=n("iEE2"),B=n("bdgK"),I=n("nOHt"),q=n("0iCA"),S=m.a.createElement;function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(){var e=Object(s.a)(['\n  mutation careerForm(\n    $name: String\n    $email: String\n    $phone: String\n    $message: String\n  ) {\n    __typename\n    insightForm(\n      input: {\n        clientMutationId: "MUTATION_INSIGHT_FORM"\n        email: $email\n        name: $name\n        phone: $phone\n        message: $message\n      }\n    ) {\n      message\n      success\n      clientMutationId\n      debug\n    }\n  }\n']);return E=function(){return e},e}var P=function(e){var t=e.faqSingle,n=(e.i,Object(u.useState)(!1)),a=n[0],r=n[1],i=Object(T.a)({polyfill:B.a}),l=Object(c.a)(i,2),o=l[0],s=l[1],m=Object(_.c)({height:a?(null===s||void 0===s?void 0:s.height)+64+"px":"0px",padding:a?"32px 0rem":"0px 0rem"}),d=G({content:t,key:"content"}),v=d.title,p=d.content;return S("div",{style:{display:t.content&&t.title?"block":"none"},className:Object(j.c)("faq-single",a&&"open")},S("div",{onClick:function(){return r((function(e){return!e}))},className:"faq-title"},S("div",{className:"icon"},S(A,null)),S("h3",null,v)),S(_.a.div,{style:m,className:"faq-content"},S(_.a.div,{ref:o,className:"faq-content_inner",dangerouslySetInnerHTML:{__html:p}})))};w()(E());function M(){var e=Object(u.useState)({loading:!1,message:""}),t=e[0],n=t.loading,a=t.message,r=e[1],l=Object(u.useRef)(0),s=Object(N.a)({initialValues:{name:"",email:"",subject:"",honey:"",message:"",title:"INSIGHTS PAGE"},validationSchema:x.a({name:x.b().min(2,"There's not enough letters in your name!").max(25,"There's a lot of letters in your name!").required("You have to enter a name!"),subject:x.b().min(2,"There's not enough letters in your subject!").max(25,"There's a lot of letters in your subject!").required("You have to enter a subject!"),email:x.b().email("That doesn't look like an email?").required("You have to enter a email!"),message:x.b().min(2,"There's not enough letters in your message!").max(256,"There's a lot of letters in your message!").required("You have to enter a first name!")}),onSubmit:function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in e.prev=0,r((function(e){return F(F({},e),{},{loading:!0})})),n=new FormData,t)n.append(a,t[a]);if(""===t.honey){e.next=6;break}throw new Error("It's probably a bot");case 6:return e.next=8,l.current.executeAsync();case 8:return e.sent,e.next=11,Object(O.f)("wp-json/wp/v2/sendCarrer",n);case 11:(o=e.sent).result&&r((function(e){return F(F({},e),{},{message:o.result})})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),r((function(e){return F(F({},e),{},{message:"Something went wrong"})}));case 18:return e.prev=18,r((function(e){return F(F({},e),{},{loading:!1})})),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})));return function(t){return e.apply(this,arguments)}}()});return S(y.FormikContext.Provider,{value:{formik:s}},S("form",{onSubmit:s.handleSubmit},S("div",{className:"form-group"},S(y.Input,{name:"name",placeholder:"Name"})),S("div",{className:"form-group"},S(y.Input,{name:"email",placeholder:"E-Mail"})),S("div",{className:"form-group"},S(y.Input,{name:"subject",placeholder:"Subject"})),S("div",{className:"form-group"},S(y.Input,{name:"message",placeholder:"Message"})),S(y.Input,{name:"honey",style:{display:"none"},placeholder:"This is only visible by bots, so don't write anything here!"}),Boolean(a)&&S("div",{className:"response form-group"},S("h3",{style:{color:"black"}},a)),S(q.a,{ref:l,size:"invisible",sitekey:"6Leh8dIZAAAAAP-Tqa929QYT5sqMiUh-RaG9ox3y"}),S("div",{className:"form-group"},S("button",{disabled:n,type:"submit",className:"primary"},"Submit"))))}function R(e){var t=e.textGroup,n=void 0===t?[]:t,a=e.title,r=void 0===a?"":a,i=e.includeForm,l=void 0!==i&&i;return n&&Boolean(n.length)&&Boolean(r)&&S("div",{className:"service-insight_top"},S("div",{className:"wrapper"},S("h2",null,v()(r||"")),S("div",{className:"small-wrapper"},n.map((function(e,t){var n=e.text;return n&&S("div",{className:"right m-b-2",key:t+"textGroup"},S("h4",null,v()(n||"")))})),l&&S(M,null))))}function A(){return S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"14",fill:"none",viewBox:"0 0 23 14"},S("path",{fill:"#000",fillRule:"evenodd",d:"M11.37 10.885L21.29.964l1.415 1.414L11.37 13.713.035 2.378 1.449.964l9.92 9.92z",clipRule:"evenodd"}))}var G=function(e){var t=e.content,n=e.key,a=void 0===n?null:n,r=Object(I.useRouter)().query;return Object(u.useMemo)((function(){var e=t;try{["usa","uk","uae"].includes(r.lang)&&(a?e[a]=t.languageVariations[r.lang]:e=t.languageVariations[r.lang])}catch(n){return t}return e}),[r.lang,t])};var D={GeneralText:function(e){var t=e.text,n=e.centered,a=void 0!==n&&n;return Boolean(t)&&S("div",{className:"service-insight_top"},S("div",{className:"wrapper"},Boolean(!a)&&S("div",{className:"leftMarg"}),S("div",{className:"small-wrapper",style:a?{margin:"0 auto"}:{}},S("div",{className:"right"},S("h4",null,v()(t||""))))))},FAQ:function(e){var t=e.faq,n=void 0===t?{faq:[],titleFaq:titleFaq}:t;return function(){var e=n.faq,t=n.titleFaq;return S("div",{className:"bg-white",style:F({padding:"5rem 0"},e&&e.length?{}:{display:"none"})},Boolean(t)&&S("div",{className:"wrapper faq-big-title",style:{margin:"0 auto",width:"90%"}},S("h2",null,t)),S("div",{className:"small-wrapper",style:{margin:"0 auto",width:"90%"}},S("div",{className:"faq"},Boolean(e&&e.length)&&e.map((function(e,t){return S(P,{faqSingle:e,key:t+"faqSingle",i:t})})))))}()},TextWithTitleAndButton:function(e){var t=e.textGroup,n=void 0===t?[]:t,a=e.title,r=void 0===a?"":a,i=e.button,l=void 0===i?{title:"",url:""}:i;return n&&Boolean(n.length)&&S("div",{className:"service-insight_top"},S("div",{className:"wrapper"},S("h2",null,v()(r||"")),S("div",{className:"small-wrapper"},n.map((function(e,t){var n=e.text;return n&&S("div",{className:"right m-b-2",key:t+"textGroup"},S("h4",null,v()(n||"")))})),Boolean(l.url)&&S(g.a,{href:l.url},S("a",{className:"button primary"},l.title)))))},MarqueeText:function(e){var t=e.className,n=void 0===t?"huge":t,a=e.text;return a&&S("h2",{className:n},S("span",{className:"no-wrap overwrap"},S("span",{className:"repeat-first"},S("span",{className:"text-pink"},v()(a||"")),S("span",{className:"text-black"},v()(a||""))),S("span",{className:"original"},S("span",{className:"text-pink"},v()(a||"")),S("span",{className:"text-black"},v()(a||""))),S("span",{className:"repeat-last"},S("span",{className:"text-pink"},v()(a||"")),S("span",{className:"text-black"},v()(a||"")))))},TextImage:function(e){var t=e.text,n=e.image;return t&&n&&S("div",{className:"text-image"},S("img",{alt:null===n||void 0===n?void 0:n.altText,src:null===n||void 0===n?void 0:n.sourceUrl}),t&&S("p",null,v()(t||"")))},ImpressionsReachEngagement:function(e){var t=e.box,n=void 0===t?[]:t;return Boolean(n.length)&&S("section",{className:"case-study_numbers bg-pink"},S("div",{className:"case-study_numbers_inner"},n.map((function(e,t){var n=e.counter,a=e.title;return S("div",{key:t+"impressions",className:"case-study_numbers_inner_column"},S("h3",null,v()(n)),S("h4",null,v()(a)))}))))},Jumbotron:function(e){var t=e.background,n=e.subtitle,a=e.title;return(null===t||void 0===t?void 0:t.sourceUrl)&&S("section",{className:"intro-section_service"},S("div",{className:"background"},S("img",Object(l.a)({alt:null===t||void 0===t?void 0:t.altText,src:null===t||void 0===t?void 0:t.sourceUrl},"alt",""))),S("div",{className:"wrapper"},S("div",{className:"intro-section_service_inner"},S("h2",null,a),S("h4",null,n))))},Gallery:function(e){var t=e.gallery;return t&&Boolean(t.length)&&S("section",{className:"case-study_insight"},S("div",{className:"case-study_insight_inner"},t.map((function(e,t){var n,a,r,i,l,o=Boolean(e.text),s=Boolean(e.linkToPdf);e.text=e.imageText?e.imageText:e.text;var c=e.hover,u=void 0===c?{active:!1,text:"",link:""}:c;return S("div",{key:"singleGal"+t+"xXx",className:"case-study_insight_inner_column"},Boolean(e.title)&&Boolean(e.description)&&S("div",{className:"gallery-pdf"},S("a",{target:"_blank",onClick:s?null:function(e){return e.preventDefault()},href:s?null===(n=e.linkToPdf)||void 0===n?void 0:n.mediaItemUrl:"#"},S("span",{className:"title"},e.title)," ",S("span",{className:"description"},e.description))),Boolean(e.video)&&S("div",{className:"video-element"},S(h.a,{muted:!0,playing:!1,loop:!0,url:null===(a=e.videoObject)||void 0===a?void 0:a.mediaItemUrl,style:{objectFit:"cover"},controls:!0})),Boolean(u.active)&&Boolean(u.link)&&S("div",{className:"case-study_insight_inner_column_hover"},Boolean(u.text)&&S("h3",null,v()(u.text)),S("a",{className:"button black-opaque",href:u.link},"Find out more ",S("span",null,"\ud83d\udc49"))),o&&S("div",{className:"imageText"},S("div",{className:"imageText_inner",dangerouslySetInnerHTML:{__html:e.text}})),Boolean(null===(r=e.image)||void 0===r?void 0:r.sourceUrl)&&S("img",{alt:null===(i=e.image)||void 0===i?void 0:i.altText,src:null===(l=e.image)||void 0===l?void 0:l.sourceUrl}))}))))},BigTextWithParallaxBackground:function(e){var t=e.background,n=e.text,a=e.centered,r=void 0!==a&&a;return(null===t||void 0===t?void 0:t.sourceUrl)&&S("div",{className:"service-insight bg-white"},S("div",{className:"clip-section"},S("div",{className:"wrapper"},S("div",{className:"clip-section_inner",style:{backgroundImage:"url(".concat(null===t||void 0===t?void 0:t.sourceUrl,")")}},S("span",{className:"huge",style:r?{textAlign:"center"}:{}},v()(n||""))))))||S(m.a.Fragment,null)},TextWithTitle:R,TextWithButton:function(e){var t=e.buttons,n=void 0===t?[]:t,a=e.text;return n?Boolean(n.length)&&S("div",{className:"service-insight_top"},S("div",{className:"wrapper"},S("div",{className:"leftMarg"}),S("div",{className:"small-wrapper small-wrapper-laptop"},S("h4",null,v()(a||"")),n.map((function(e,t){var n=e.buttonText,a=e.buttonUrl;return S(g.a,{key:t+a,href:"#"===a?"/":a||"/"},S("a",{className:"button pink"},v()(n||"")," ",S("span",null,"\ud83d\udc49")))}))))):S("div",null)},Tabs:function(e){var t=e.tabs,n=void 0===t?[{tabName:"",tabDescription:"",tabBackground:{}}]:t;return Boolean(n.length)&&S(f.a,{tabs:!0,listItems:n.map((function(e){return{title:e.tabName,excerpt:e.tabDescription,featuredImage:e.tabBackground||e.tabImage}}))})},ClientLogos:function(e){var t=e.logos,n=void 0===t?[{logo:logo}]:t;return Boolean(n.length)&&S("div",{className:"client-logos"},n.map((function(e,t){var n;return S("div",{key:t+"clientLogo",className:"client-logos-single"},S("img",{src:null===(n=e.logo)||void 0===n?void 0:n.sourceUrl,alt:e.logo.altText}))})))},FullscreenVideo:function(e){var t=e.embedded,n=e.video,a=void 0===n?{mimeType:mimeType,mediaItemUrl:mediaItemUrl}:n,r=e.embed,i=void 0===r?"":r;return S("div",{className:"video-player"},S(h.a,{width:"100%",height:"100vh",url:t?i:a.mediaItemUrl,controls:!0}))},VariedTextWithTitle:function(e){var t=G({content:e});return S(R,t)}};function C(e){var t=e.blocks;return S("section",{className:"case-study_challenge bg-white"},(void 0===t?[]:t).map((function(e,t){try{var n=D[e.fieldGroupName.split("Blocks_Blocks_")[1]];return n?S(n,Object(a.a)({key:"block"+t},e)):null}catch(e){return console.log(e)}})))}}}]);