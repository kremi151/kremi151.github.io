(this["webpackJsonpkremi151.github.io"]=this["webpackJsonpkremi151.github.io"]||[]).push([[0],{143:function(A,e,t){},148:function(A,e,t){},149:function(A,e,t){},201:function(A,e,t){"use strict";t.r(e);var n,a=t(0),r=t.n(a),c=t(10),i=t.n(c),o=(t(143),t(17)),s=t(31),l=t(113),g=t(236),d=t(237),u=t(9);!function(A){A[A.DEFAULT=0]="DEFAULT",A[A.PRODUCT=1]="PRODUCT"}(n||(n={}));var j=t(59),p=t(2);t(148);var b=r.a.createContext({setDarkMode:function(){},setAppBarTitle:function(){},setSidebarEntries:function(){},darkMode:!1,appBarTitle:void 0,sidebarEntries:void 0}),h=b.Provider;b.Consumer;function O(){return Object(a.useContext)(b)}function E(A){var e=Object(a.useContext)(b).setAppBarTitle;Object(a.useEffect)((function(){return document.title="".concat(A," | kremi151"),e(A),function(){document.title="kremi151",e(void 0)}}),[e,A])}function C(A){var e=Object(a.useContext)(b).setSidebarEntries;Object(a.useEffect)((function(){return e(A),function(){e(void 0)}}),[e,A])}var B=t(43);t(149);function I(A){var e=A.appPackageName;return Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{href:"https://play.google.com/store/apps/details?id=".concat(e,"&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"),children:Object(p.jsx)("img",{className:"playStoreBadge",alt:"Get it on Google Play",src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"})}),Object(p.jsx)(j.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Google Play and the Google Play logo are trademarks of Google LLC."})]})}var m=t(122),x=t.n(m),f=Object(l.a)((function(A){return{carouselItemRoot:{display:"flex",flexDirection:"column",alignItems:"center"},carouselCaption:{marginTop:8},carouselNavButton:{backgroundColor:"".concat(A.palette.secondary.main," !important")},carouselActiveIndicator:{color:A.palette.secondary.main}}})),v=[{src:"/screenshots/print_adjuster/Screenshot_1617986827.png",description:"Move and resize pictures on a page"},{src:"/screenshots/print_adjuster/Screenshot_1617984502.png",description:"Multiple pictures are supported as well"},{src:"/screenshots/print_adjuster/Screenshot_1617984342.png",description:"Chose from a variety of options"},{src:"/screenshots/print_adjuster/Screenshot_1617984353.png",description:"Crop pictures from within the app"},{src:"/screenshots/print_adjuster/Screenshot_1617984377.png",description:"Apply predefined filters to your pictures"},{src:"/screenshots/print_adjuster/Screenshot_1617986748.png",description:"Add texts to your page"},{src:"/screenshots/print_adjuster/Screenshot_1617986979.png",description:"Create multiple pages"},{src:"/screenshots/print_adjuster/Screenshot_1617987065.png",description:"Print your work"}];function Q(A){var e=f(),t=A.src,n=A.description;return Object(p.jsxs)("div",{className:e.carouselItemRoot,children:[Object(p.jsx)("img",{src:t,height:500,width:250,alt:n}),Object(p.jsx)(j.a,{className:e.carouselCaption,children:n})]})}function y(){var A=f(),e=Object(a.useMemo)((function(){return{className:A.carouselNavButton}}),[A]),t=Object(a.useMemo)((function(){return{className:A.carouselActiveIndicator}}),[A]);return Object(p.jsxs)("div",{children:[Object(p.jsx)(x.a,{navButtonsProps:e,activeIndicatorIconButtonProps:t,children:v.map((function(A,e){return Object(a.createElement)(Q,Object(B.a)(Object(B.a)({},A),{},{key:"scr_".concat(e)}))}))}),Object(p.jsx)(j.a,{variant:"h5",children:"Get the app"}),Object(p.jsx)(I,{appPackageName:"lu.kremi151.printresizer"})]})}var w,S=t(130),k=t(229);!function(A){A[A.LOADING=0]="LOADING",A[A.LOADED=1]="LOADED",A[A.ERROR=2]="ERROR"}(w||(w={}));var P=t(80),N=t.n(P),D=t(240),T=t(241),L=t(227),M=t(228),G=Object(l.a)((function(A){return{root:{flexGrow:1},heading:{fontSize:A.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:A.typography.pxToRem(15),color:A.palette.text.secondary},details:{flexDirection:"column"},loadingRoot:{flexGrow:1,display:"flex",flexDirection:"column",alignItems:"center"},changeList:{marginTop:A.spacing(1)},warningContent:{whiteSpace:"pre-wrap"},pageTitle:{marginBottom:A.spacing(1)}}}));function R(A){var e,t=G(),n=A.expanded,r=A.onToggleExpanded,c=A.version,i=Object(a.useCallback)((function(A,e){return r(c,e)}),[r,c]);return Object(p.jsxs)(T.a,{expanded:n,onChange:i,children:[Object(p.jsxs)(L.a,{expandIcon:Object(p.jsx)(N.a,{}),children:[Object(p.jsx)(j.a,{className:t.heading,children:"Version ".concat(c.version)}),n||Object(p.jsx)(j.a,{className:t.secondaryHeading,children:"Build ".concat(c.build,", released on ").concat(c.date)})]}),Object(p.jsxs)(M.a,{className:t.details,children:[Object(p.jsxs)(j.a,{children:[Object(p.jsx)("span",{children:"Build ".concat(c.build,", released on ").concat(c.date)}),Object(p.jsx)("ul",{className:t.changeList,children:c.changes.map((function(A,e){return Object(p.jsx)("li",{children:A},"change_".concat(c.build,"_").concat(e))}))})]}),null===(e=c.warnings)||void 0===e?void 0:e.map((function(A,e){return Object(p.jsx)(D.a,{severity:"warning",children:Object(p.jsx)("span",{className:t.warningContent,children:A})},"warn_".concat(c.build,"_").concat(e))}))]})]})}function Y(){var A=G(),e=Object(a.useState)(w.LOADING),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({versions:[]}),i=Object(o.a)(c,2),l=i[0],g=i[1],d=Object(a.useState)({}),u=Object(o.a)(d,2),b=u[0],h=u[1],O=Object(a.useCallback)((function(A,e){h((function(t){return Object(B.a)(Object(B.a)({},t),{},Object(s.a)({},A.build,e))}))}),[h]);switch(Object(a.useEffect)((function(){fetch("https://raw.githubusercontent.com/kremi151/kremi151.github.io/master/changelogs/printadjuster.json").then((function(A){return A.json()})).then((function(A){var e;if(g(A),r(w.LOADED),null===(e=A.versions)||void 0===e?void 0:e.length){var t=Math.max.apply(Math,Object(S.a)(A.versions.map((function(A){return A.build}))));h((function(A){return Object(B.a)(Object(B.a)({},A),{},Object(s.a)({},t,!0))}))}})).catch((function(A){console.error("Could not load changelog",A),r(w.ERROR)}))}),[]),n){case w.LOADING:return Object(p.jsx)("div",{className:A.loadingRoot,children:Object(p.jsx)(k.a,{})});case w.ERROR:return Object(p.jsx)("div",{className:A.loadingRoot,children:Object(p.jsx)(D.a,{severity:"error",children:"The changelog could not be loaded"})});case w.LOADED:return Object(p.jsxs)("div",{className:A.root,children:[Object(p.jsx)(j.a,{variant:"h4",className:A.pageTitle,children:"Changelog"}),l.versions.map((function(A){return Object(p.jsx)(R,{version:A,expanded:!!b[A.build],onToggleExpanded:O},"changelog_".concat(A.build))}))]})}}var q=t(123),W=t.n(q),F=t(230),z=Object(l.a)((function(A){return{root:{flexGrow:1},loadingRoot:{flexGrow:1,display:"flex",flexDirection:"column",alignItems:"center"},details:{flexDirection:"column"},pageTitle:{marginBottom:A.spacing(1)},inlineLink:{display:"inline-block"}}}));function J(A){var e,t=A.faq,n=A.defaultLang,a=A.linkMapper,r=A.styles;return Object(p.jsxs)(T.a,{children:[Object(p.jsx)(L.a,{expandIcon:Object(p.jsx)(N.a,{}),children:Object(p.jsx)(j.a,{children:t.question[n]})}),Object(p.jsx)(M.a,{className:r.details,children:Object(p.jsx)(j.a,{children:null===(e=t.answer[n])||void 0===e?void 0:e.map((function(A){return Object(p.jsx)("p",{children:Object(p.jsx)(W.a,{componentDecorator:a,children:A})})}))})})]})}function X(){var A=z(),e=Object(a.useState)(w.LOADING),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({defaultLang:"en",faqs:[]}),i=Object(o.a)(c,2),s=i[0],l=i[1],g=Object(a.useCallback)((function(e,t){return Object(p.jsx)(F.a,{display:"block",variant:"body1",href:e,className:A.inlineLink,children:t})}),[A]);switch(Object(a.useEffect)((function(){fetch("https://raw.githubusercontent.com/kremi151/kremi151.github.io/master/faqs/printadjuster.json").then((function(A){return A.json()})).then((function(A){l(A),r(w.LOADED)})).catch((function(A){console.error("Could not load FAQs",A),r(w.ERROR)}))}),[]),n){case w.LOADING:return Object(p.jsx)("div",{className:A.loadingRoot,children:Object(p.jsx)(k.a,{})});case w.ERROR:return Object(p.jsx)("div",{className:A.loadingRoot,children:Object(p.jsx)(D.a,{severity:"error",children:"The changelog could not be loaded"})});case w.LOADED:return Object(p.jsxs)("div",{className:A.root,children:[Object(p.jsx)(j.a,{variant:"h4",className:A.pageTitle,children:"Frequently asked questions"}),s.faqs.map((function(e,t){return Object(p.jsx)(J,{faq:e,defaultLang:s.defaultLang,linkMapper:g,styles:A},"faq_".concat(t))}))]})}}function H(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(j.a,{variant:"h5",children:"Become a Beta tester"}),Object(p.jsxs)(j.a,{paragraph:!0,children:["You can subscribe to become a Beta tester of Print adjuster.",Object(p.jsx)("br",{}),"As a Beta tester, you will receive new updates earlier and you can help evaluating them before the official release.",Object(p.jsx)("br",{}),"You can subscribe ",Object(p.jsx)(F.a,{href:"https://play.google.com/apps/testing/lu.kremi151.printresizer",children:"here"}),", and any feedback is welcome via ",Object(p.jsx)(F.a,{href:"mailto:kremi151dev@gmail.com",children:"email"}),"."]}),Object(p.jsx)(j.a,{variant:"h5",children:"Got ideas for improvements or new features?"}),Object(p.jsxs)(j.a,{paragraph:!0,children:["Send me an ",Object(p.jsx)(F.a,{href:"mailto:kremi151dev@gmail.com",children:"email"}),"."]})]})}function U(A){var e=A.appName;return Object(p.jsxs)("div",{children:[Object(p.jsxs)(j.a,{variant:"h5",children:["Privacy Policy for ",e]}),Object(p.jsx)(j.a,{paragraph:!0,children:"We are committed to protecting the privacy of our users. This Privacy Policy outlines how we handle and safeguard any personal information collected or processed through our mobile application."}),Object(p.jsx)(j.a,{variant:"h6",children:"Information Collection:"}),Object(p.jsxs)(j.a,{paragraph:!0,children:[e," does not collect any personal data or information from you while using our app. We do not collect, store, or share any identifiable information about our users."]}),Object(p.jsx)(j.a,{variant:"h6",children:"Usage Data:"}),Object(p.jsxs)(j.a,{paragraph:!0,children:["While using ",e,", we do not collect or track any usage data, including but not limited to your device information, IP address, or location data. We respect your privacy and believe in providing a safe and anonymous user experience."]}),Object(p.jsx)(j.a,{variant:"h6",children:"Third-Party Services:"}),Object(p.jsx)(j.a,{paragraph:!0,children:"We do not integrate any third-party services or libraries that may collect personal information through our app. Rest assured that your privacy remains protected within our application environment."}),Object(p.jsx)(j.a,{variant:"h6",children:"Advertising:"}),Object(p.jsxs)(j.a,{paragraph:!0,children:[e," does not display any third-party advertisements, and therefore, we do not share any user information with advertisers or ad networks."]}),Object(p.jsx)(j.a,{variant:"h6",children:"Updates to the Privacy Policy:"}),Object(p.jsxs)(j.a,{paragraph:!0,children:["As we continue to improve and enhance ",e,", there may be occasional updates to this privacy policy. We encourage you to review this policy periodically for any changes. However, please note that our commitment to not collecting any user data will remain unchanged."]}),Object(p.jsx)(j.a,{variant:"h6",children:"Contact Us:"}),Object(p.jsxs)(j.a,{paragraph:!0,children:["If you have any questions, concerns, or suggestions regarding our privacy policy or the practices of ",e,", please contact us at ",Object(p.jsx)(F.a,{href:"mailto:kremi151dev@gmail.com",children:"kremi151dev@gmail.com"}),"."]})]})}var V="/changelog",Z="/faqs",K="/contribute",_="/privacy-policy",$=Object(l.a)((function(A){return{root:{flexGrow:1,display:"flex",flexDirection:"column"}}}));var AA=t.p+"static/media/logo.004c5509.png",eA="/privacy-policy",tA=Object(l.a)((function(A){return{root:{flexGrow:1,display:"flex",flexDirection:"column"}}}));var nA=t(231),aA=[{path:"/print-adjuster",component:function(){E("Print adjuster");var A=$(),e=Object(u.h)().path;return C(Object(a.useMemo)((function(){return[{title:"About",route:e},{title:"Changelog",route:"".concat(e).concat(V)},{title:"FAQs",route:"".concat(e).concat(Z)},{title:"Contribute",route:"".concat(e).concat(K)},{title:"Privacy policy",route:"".concat(e).concat(_)}]}),[e])),Object(p.jsx)("div",{className:A.root,children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:e,children:Object(p.jsx)(y,{})}),Object(p.jsx)(u.a,{path:"".concat(e).concat(V),children:Object(p.jsx)(Y,{})}),Object(p.jsx)(u.a,{path:"".concat(e).concat(Z),children:Object(p.jsx)(X,{})}),Object(p.jsx)(u.a,{path:"".concat(e).concat(K),children:Object(p.jsx)(H,{})}),Object(p.jsx)(u.a,{path:"".concat(e).concat(_),children:Object(p.jsx)(U,{appName:"Print adjuster"})})]})})},drawer:{category:n.PRODUCT,title:"Print adjuster",logo:function(A){return Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAT9UlEQVR42u3djVMbdRrAcf///8IAkQAthsC00lZNUEQCwQYt1Q7gCy8qRLBQUaD92Wcd725uKgN188Lm88x8Zm7ubhxn97ebL9nN7jvvvvtuAgCGyzs2AgAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAACAALAhAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAABAANgIACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEwO03Pz+fWq1Warfb9EGz2UyTk5PWYkHEvlxZWbG2+yTOZXFOsxYFANcQB8zx8XE6OzujDw4PD1OtVrMWCyL2ZafTsbb7JM5lcU6zFgUA17C+vp4dOKY/c3Jykubm5qzFgoh9eXp6amH3aeJcFuc0a1EAIAAEAAJAACAAEAACAAEgABAACAABgAAQAAgAAWAEAAJAACAABIARAAgAAYAAEABGACAABAACQAAYAYAAEAAIAAFgBAACQAAgAASAEQACwAgABIAAMAJAABgBIABsCAFgBIAAMAJAACAABIAAEABGAAgABIAAQAAYASAAEAACAAFgBIAAQAAIAASAEQACAAEgABAARgAIAASAAEAACAABIAAQAAIAASAAEAAIAAGAABAACAAEgABAAAgABIAAcOYQAAgAAYAAEABGACAABAACQAAYAYAAEAAIAAFgBAACQAAgAASAEQAIAAGAABAARgAIACMAEAADr91u9zwAtre30/LyclpcXBx69Xo9VSoVa7EgYl82Gg1r+7U4xuNY73UAxDnNWhQADGgAtFqtNDU1lcrlMq+VSiVrsSBiX1rTf4ljPI51AYAAcAngP9NsNtP4+LjtDwUWx3gc6y4BIAAEgAAAASAABAACQACAABAAAgABAAgAASAAEACAABAAAgABAAgAASAAEACAABAAAgABAAgAASAAEACAAEAAIAAAAYAAQAAAAgABgAAABAACQAAIAEAAIAAEgAAABAACQAAIAEAAIAAEgAAABAACQAAIAEAAIAAEgAAAASAAEAACQACAABAAAgABIABAAAgAAYAAAASAABAACABAAAgAAYAAAASAABAACABAAAgAAYAAAASAABAACABAANj+AgABAAgABAACABAACAAEACAAEAACQAAAAgABIAAEACAAEAACQAAAAgABIAAEACAAEAACQAAAAgABIAAEAAgAAYAAEAACAASAABAACAAB8F8jIyPpzp07qVqtUgCxL2OfWtsCAAEgAATAlSqVStrY2Ei7u7sUQOzL2KfWtgBAAAgAAXCl+Ivx4OAgmWJM7MvYp9a2AEAACAABIAAEgAAQAALARhAAAkAACAABIAAEAAJAAAgAASAABIAAQAAIACMABIAAEAAIAAFgBIAAEAACAAEgAIwAEAACQAAgAASAEQACQAAIAASAADACQAAIAAGAABAARgAIAAQAAkAAGAEgABAACAABYASAAEAACAABIACMABAACAABIAAEgBEAAgABIAAEgAAwAkAAIAAEgAAQAEYACAAEgAAQAALACAABgAAQAAJAAAgAASAAEAACQAAIAAEgAAQAAkAACAABIAAEgAAQAAgA218ACAABIAAEAAJAABgBIAAEgABAAAgAIwAEgAAQAAgAAWAEgAAQAAIAASAAjAAQAAJAACAABIARAAJAAAgABIAAMAJAACAAuNLS0lLa399PnU6nZxYWFlK5XLb9BYAAKLA4xuNY7+W5Jc5lcU6z/QUA1zAxMZGq1Wqq1Wo9U6lUUqlUsv0FgAAosDjG41jv5bklzmVxTrP9BQAIACMAQACAADACAAQACAAjAEAAgAAwAgAEAAgAIwBAAIAAMAIABAAIACMAQACAADACAAQAXFs8KOXx48dpa2uLAoh9GfvU2gYBAFcaGRlJU1NTaXp6mgKIfRn71NoGAQAAAsBGAAABAAAIAABAAAAAAgAAEAAAgACA/iqVSml0dDSNjY2l9957L42Pj6eJiQn4R7FGYq3Emom14zhCAMAt+cCPE3ecyOMBMLOzs+nh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CAAEgABAAAgABIAAEAACAAEgABAAAsAIAASAAEAACAAjABAAAgABIACMAEAACAAEgAAwAgABIAAQAALACAABIAAEAAJAABgBIACMAEAACAAjAASAEQACAAFgBIAAMAJAACAABAACwAgAAYAAEAAIACMABAACQAAgAIwAEAAIAAGAADACQAAgAAQAAsAIAAGAABAACAABgABAAAgABIAAQAAgAAQAAkAAIAAQAAIAASAAEAACwAgABIAAQAAIACMAEAACAAEgAIwAQAAIAASAADACAAEgABAAAsAIAASAAEAA3BqtVisdHx9nBw69d3h4mGq1mrVYELEvO52Otd0ncS6Lc5q1KAC4hvn5+eyAabfb9EGz2UyTk5PWYkHEvlxZWbG2+yTOZXFOsxYFAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAANgQACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAAAgAGwEABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAQADYEAAgAAAAAQAACAAAQAAAALfQn96DR02b/6c7AAAAAElFTkSuQmCC",width:A.width,height:A.height})}}},{path:"/3dttt",component:function(){E("3D Tic Tac Toe");var A=tA(),e=Object(u.h)().path;return C(Object(a.useMemo)((function(){return[{title:"About",route:e},{title:"Privacy policy",route:"".concat(e).concat(eA)}]}),[e])),Object(p.jsx)("div",{className:A.root,children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:e,children:Object(p.jsx)("div",{})}),Object(p.jsx)(u.a,{path:"".concat(e).concat(eA),children:Object(p.jsx)(U,{appName:"3D Tic Tac Toe"})})]})})},drawer:{category:n.PRODUCT,title:"3D Tic Tac Toe",logo:function(A){return Object(p.jsx)("img",{src:AA,width:A.width,height:A.height})}}},{path:"/",component:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j.a,{paragraph:!0,children:"This page is under construction"}),Object(p.jsx)(j.a,{paragraph:!0,children:"Please come back and check again later!"})]})},drawer:{category:n.DEFAULT,title:"Home",logo:function(){return Object(p.jsx)(nA.a,{})},priority:999}}],rA=t(128),cA=t.n(rA),iA=t(127),oA=t.n(iA),sA=t(126),lA=t.n(sA),gA=t(125),dA=t.n(gA),uA=t(95),jA=t(232),pA=t(81),bA=t.n(pA),hA=t(124),OA=t.n(hA),EA=t(96),CA=t.n(EA),BA=t(129),IA=t.n(BA),mA=t(233),xA=t(234),fA=t(235),vA=bA()((function(A){return{toolbar:{borderBottom:"1px solid ".concat(A.palette.divider)},toolbarDrawerContainer:{width:96},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-around",overflowX:"auto"},toolbarLink:{cursor:"pointer",padding:A.spacing(1),flexShrink:0}}}));function QA(A){var e=A.title,t=A.sections,n=CA()().breakpoints,r=vA(),c=O(),i=c.darkMode,s=c.setDarkMode,l=Object(u.f)(),g=OA()(n.down("xs")),d=Object(a.useState)(!1),b=Object(o.a)(d,2),h=b[0],E=b[1],C=Object(a.useCallback)((function(){E(!0)}),[E]),B=Object(a.useCallback)((function(){E(!1)}),[E]);Object(a.useEffect)((function(){g||B()}),[g,B]);var I=i?dA.a:lA.a,m=Object(a.useCallback)((function(){s(!i)}),[i,s]),x=Object(a.useMemo)((function(){var A=t.map((function(A){return{title:A.title,priority:A.priority||0,onClick:function(){E(!1),l.push(A.route)}}}));return A.sort((function(A,e){return e.priority-A.priority})),A}),[t,l,E]);return Object(p.jsxs)("div",{children:[Object(p.jsxs)(jA.a,{className:r.toolbar,children:[g?Object(p.jsx)("div",{className:r.toolbarDrawerContainer,children:Object(p.jsx)(uA.a,{onClick:C,children:Object(p.jsx)(oA.a,{})})}):Object(p.jsx)(uA.a,{onClick:m,children:Object(p.jsx)(I,{})}),Object(p.jsx)(j.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:r.toolbarTitle,children:e}),g&&Object(p.jsx)(uA.a,{onClick:m,children:Object(p.jsx)(I,{})}),Object(p.jsx)(uA.a,{href:"https://github.com/kremi151",children:Object(p.jsx)(cA.a,{})})]}),g?Object(p.jsx)(IA.a,{anchor:"left",open:h,onClose:B,children:Object(p.jsx)(mA.a,{children:x.map((function(A){var e=A.title,t=A.onClick;return Object(p.jsx)(xA.a,{button:!0,onClick:t,children:Object(p.jsx)(fA.a,{primary:e})},e)}))})}):Object(p.jsx)(jA.a,{component:"nav",variant:"dense",className:r.toolbarSecondary,children:x.map((function(A){var e=A.title,t=A.onClick;return Object(p.jsx)(F.a,{color:"inherit",noWrap:!0,variant:"body2",className:r.toolbarLink,onClick:t,children:e},e)}))})]})}var yA=t(238),wA=t(35),SA=bA()((function(A){return{container:{padding:A.spacing(2),userSelect:"none"},title:{marginBottom:A.spacing(1)}}}));function kA(A){var e=A.entries,t=SA(),n=Object(u.g)().pathname;return Object(p.jsxs)("div",{className:t.container,children:[Object(p.jsx)(j.a,{display:"block",variant:"h5",className:t.title,children:"Navigation"}),e.map((function(A){var e=A.title,t=A.route;return n===t?Object(p.jsx)(j.a,{display:"block",variant:"body1",children:e}):Object(p.jsx)(F.a,{component:wA.b,display:"block",variant:"body1",to:t,children:e},e)}))]})}var PA=240,NA=Object(l.a)((function(A){var e;return{root:{display:"flex",userSelect:"none",position:"absolute",left:0,top:0,right:0,bottom:0},appBar:{zIndex:A.zIndex.drawer+1,transition:A.transitions.create(["width","margin"],{easing:A.transitions.easing.sharp,duration:A.transitions.duration.leavingScreen})},appBarShift:{marginLeft:PA,width:"calc(100% - ".concat(PA,"px)"),transition:A.transitions.create(["width","margin"],{easing:A.transitions.easing.sharp,duration:A.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:PA,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:PA,transition:A.transitions.create("width",{easing:A.transitions.easing.sharp,duration:A.transitions.duration.enteringScreen})},drawerClose:(e={transition:A.transitions.create("width",{easing:A.transitions.easing.sharp,duration:A.transitions.duration.leavingScreen}),overflowX:"hidden",width:A.spacing(7)+1},Object(s.a)(e,A.breakpoints.up("sm"),{width:A.spacing(9)+1}),Object(s.a)(e,A.breakpoints.down("xs"),{width:0}),e),content:{flexGrow:1,paddingTop:A.spacing(1),display:"flex",flexDirection:"column"},mainContent:{padding:A.spacing(1)},sidenavIcon:Object(s.a)({},A.breakpoints.up("sm"),{marginLeft:A.spacing(1)})}}));function DA(){var A=NA(),e=O(),t=e.appBarTitle,n=e.sidebarEntries,c=Object(a.useMemo)((function(){return aA.map((function(A){var e,t;return{title:(null===(e=A.drawer)||void 0===e?void 0:e.title)||"Missing title",route:A.path,priority:null===(t=A.drawer)||void 0===t?void 0:t.priority}}))}),[]),i=Object(a.useMemo)((function(){return aA.map((function(A){var e=A.path,t=A.component;return Object(p.jsx)(u.a,{path:e,render:function(){return r.a.createElement(t,{})}},"route_".concat(e))}))}),[]);return Object(p.jsxs)("div",{className:A.root,children:[Object(p.jsx)(g.a,{}),Object(p.jsxs)(d.a,{maxWidth:"lg",children:[Object(p.jsx)(QA,{title:t||"kremi151",sections:c}),Object(p.jsx)("main",{className:A.content,children:Object(p.jsxs)(yA.a,{container:!0,children:[Object(p.jsx)(yA.a,{xs:12,md:n?10:12,className:A.mainContent,children:Object(p.jsx)(u.c,{children:i})}),n&&Object(p.jsx)(yA.a,{item:!0,xs:12,md:2,children:Object(p.jsx)(kA,{entries:n})})]})})]})]})}var TA=t(51),LA=t(226),MA=t(83),GA=t(239);function RA(){var A=Object(a.useState)(),e=Object(o.a)(A,2),t=e[0],n=e[1],r=Object(a.useState)(),c=Object(o.a)(r,2),i=c[0],s=c[1],l=Object(GA.a)("(prefers-color-scheme: dark)"),g=Object(a.useState)((function(){return l||"dark"===window.localStorage.getItem("theme")})),d=Object(o.a)(g,2),u=d[0],j=d[1],b=Object(a.useCallback)((function(A){window.localStorage.setItem("theme",A?"dark":"light"),j(A)}),[j]),O=Object(a.useMemo)((function(){return Object(TA.a)({palette:{type:u?"dark":"light",primary:{main:MA.a[600]},secondary:{main:MA.a[400]}}})}),[u]),E=Object(a.useMemo)((function(){return{setDarkMode:b,setAppBarTitle:n,setSidebarEntries:s,darkMode:u,appBarTitle:t,sidebarEntries:i}}),[u,t,i,b,n,s]);return Object(p.jsx)(h,{value:E,children:Object(p.jsx)(LA.a,{theme:O,children:Object(p.jsx)(wA.a,{children:Object(p.jsx)(DA,{})})})})}var YA=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,242)).then((function(e){var t=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;t(A),n(A),a(A),r(A),c(A)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(RA,{})}),document.getElementById("root")),YA()}},[[201,1,2]]]);
//# sourceMappingURL=main.5e52182a.chunk.js.map