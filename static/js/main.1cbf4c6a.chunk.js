(this["webpackJsonpkremi151.github.io"]=this["webpackJsonpkremi151.github.io"]||[]).push([[0],{138:function(A,e,t){},143:function(A,e,t){},144:function(A,e,t){},184:function(A,e,t){"use strict";t.r(e);var n,a=t(0),r=t.n(a),c=t(10),i=t.n(c),o=(t(138),t(28)),s=t(31),g=t(111),l=t(222),u=t(223),d=t(9);!function(A){A[A.DEFAULT=0]="DEFAULT",A[A.PRODUCT=1]="PRODUCT"}(n||(n={}));var j=t(58),E=t(2);t(143);var b=r.a.createContext({setDarkMode:function(){},setAppBarTitle:function(){},setSidebarEntries:function(){},darkMode:!1,appBarTitle:void 0,sidebarEntries:void 0}),B=b.Provider;b.Consumer;function C(){return Object(a.useContext)(b)}var I=t(42);t(144);function p(A){var e=A.appPackageName;return Object(E.jsxs)("div",{children:[Object(E.jsx)("a",{href:"https://play.google.com/store/apps/details?id=".concat(e,"&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"),children:Object(E.jsx)("img",{className:"playStoreBadge",alt:"Get it on Google Play",src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"})}),Object(E.jsx)(j.a,{variant:"caption",display:"block",gutterBottom:!0,children:"Google Play and the Google Play logo are trademarks of Google LLC."})]})}var h=t(120),O=t.n(h),m=Object(g.a)((function(A){return{carouselItemRoot:{display:"flex",flexDirection:"column",alignItems:"center"},carouselCaption:{marginTop:8},carouselNavButton:{backgroundColor:"".concat(A.palette.secondary.main," !important")},carouselActiveIndicator:{color:A.palette.secondary.main}}})),x=[{src:"/screenshots/print_adjuster/Screenshot_1617986827.png",description:"Move and resize pictures on a page"},{src:"/screenshots/print_adjuster/Screenshot_1617984502.png",description:"Multiple pictures are supported as well"},{src:"/screenshots/print_adjuster/Screenshot_1617984342.png",description:"Chose from a variety of options"},{src:"/screenshots/print_adjuster/Screenshot_1617984353.png",description:"Crop pictures from within the app"},{src:"/screenshots/print_adjuster/Screenshot_1617984377.png",description:"Apply predefined filters to your pictures"},{src:"/screenshots/print_adjuster/Screenshot_1617986748.png",description:"Add texts to your page"},{src:"/screenshots/print_adjuster/Screenshot_1617986979.png",description:"Create multiple pages"},{src:"/screenshots/print_adjuster/Screenshot_1617987065.png",description:"Print your work"}];function f(A){var e=m(),t=A.src,n=A.description;return Object(E.jsxs)("div",{className:e.carouselItemRoot,children:[Object(E.jsx)("img",{src:t,height:500,width:250,alt:n}),Object(E.jsx)(j.a,{className:e.carouselCaption,children:n})]})}function Q(){var A=m(),e=Object(a.useMemo)((function(){return{className:A.carouselNavButton}}),[A]),t=Object(a.useMemo)((function(){return{className:A.carouselActiveIndicator}}),[A]);return Object(E.jsxs)("div",{children:[Object(E.jsx)(O.a,{navButtonsProps:e,activeIndicatorIconButtonProps:t,children:x.map((function(A,e){return Object(a.createElement)(f,Object(I.a)(Object(I.a)({},A),{},{key:"scr_".concat(e)}))}))}),Object(E.jsx)(j.a,{variant:"h5",children:"Get the app"}),Object(E.jsx)(p,{appPackageName:"lu.kremi151.printresizer"})]})}var v,S=t(128),w=t(215),k=t(121),y=t.n(k),P=t(226),M=t(227),N=t(213),L=t(214),D=Object(g.a)((function(A){return{root:{flexGrow:1},heading:{fontSize:A.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:A.typography.pxToRem(15),color:A.palette.text.secondary},details:{flexDirection:"column"},loadingRoot:{flexGrow:1,display:"flex",flexDirection:"column",alignItems:"center"},changeList:{marginTop:A.spacing(1)},warningContent:{whiteSpace:"pre-wrap"}}}));function G(A){var e,t=D(),n=A.expanded,r=A.onToggleExpanded,c=A.version,i=Object(a.useCallback)((function(A,e){return r(c,e)}),[r,c]);return Object(E.jsxs)(M.a,{expanded:n,onChange:i,children:[Object(E.jsxs)(N.a,{expandIcon:Object(E.jsx)(y.a,{}),children:[Object(E.jsx)(j.a,{className:t.heading,children:"Version ".concat(c.version)}),n||Object(E.jsx)(j.a,{className:t.secondaryHeading,children:"Build ".concat(c.build,", released on ").concat(c.date)})]}),Object(E.jsxs)(L.a,{className:t.details,children:[Object(E.jsxs)(j.a,{children:[Object(E.jsx)("span",{children:"Build ".concat(c.build,", released on ").concat(c.date)}),Object(E.jsx)("ul",{className:t.changeList,children:c.changes.map((function(A,e){return Object(E.jsx)("li",{children:A},"change_".concat(c.build,"_").concat(e))}))})]}),null===(e=c.warnings)||void 0===e?void 0:e.map((function(A,e){return Object(E.jsx)(P.a,{severity:"warning",children:Object(E.jsx)("span",{className:t.warningContent,children:A})},"warn_".concat(c.build,"_").concat(e))}))]})]})}function T(){var A=D(),e=Object(a.useState)(v.LOADING),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({versions:[]}),i=Object(o.a)(c,2),g=i[0],l=i[1],u=Object(a.useState)({}),d=Object(o.a)(u,2),j=d[0],b=d[1],B=Object(a.useCallback)((function(A,e){b((function(t){return Object(I.a)(Object(I.a)({},t),{},Object(s.a)({},A.build,e))}))}),[b]);switch(Object(a.useEffect)((function(){fetch("https://raw.githubusercontent.com/kremi151/kremi151.github.io/master/changelogs/printadjuster.json").then((function(A){return A.json()})).then((function(A){var e;if(l(A),r(v.LOADED),null===(e=A.versions)||void 0===e?void 0:e.length){var t=Math.max.apply(Math,Object(S.a)(A.versions.map((function(A){return A.build}))));b((function(A){return Object(I.a)(Object(I.a)({},A),{},Object(s.a)({},t,!0))}))}})).catch((function(A){console.error("Could not load changelog",A),r(v.ERROR)}))}),[]),n){case v.LOADING:return Object(E.jsx)("div",{className:A.loadingRoot,children:Object(E.jsx)(w.a,{})});case v.ERROR:return Object(E.jsx)("div",{className:A.loadingRoot,children:Object(E.jsx)(P.a,{severity:"error",children:"The changelog could not be loaded"})});case v.LOADED:return Object(E.jsx)("div",{className:A.root,children:g.versions.map((function(A){return Object(E.jsx)(G,{version:A,expanded:!!j[A.build],onToggleExpanded:B},"changelog_".concat(A.build))}))})}}!function(A){A[A.LOADING=0]="LOADING",A[A.LOADED=1]="LOADED",A[A.ERROR=2]="ERROR"}(v||(v={}));var Y=t(216);function R(){return Object(E.jsxs)("div",{children:[Object(E.jsx)(j.a,{variant:"h5",children:"Become a Beta tester"}),Object(E.jsxs)(j.a,{paragraph:!0,children:["You can subscribe to become a Beta tester of Print adjuster.",Object(E.jsx)("br",{}),"As a Beta tester, you will receive new updates earlier and you can help evaluating them before the official release.",Object(E.jsx)("br",{}),"You can subscribe ",Object(E.jsx)(Y.a,{href:"https://play.google.com/apps/testing/lu.kremi151.printresizer",children:"here"}),", and any feedback is welcome via ",Object(E.jsx)(Y.a,{href:"mailto:kremi151dev@gmail.com",children:"email"}),"."]}),Object(E.jsx)(j.a,{variant:"h5",children:"Got ideas for improvements or new features?"}),Object(E.jsxs)(j.a,{paragraph:!0,children:["Send me an ",Object(E.jsx)(Y.a,{href:"mailto:kremi151dev@gmail.com",children:"email"}),"."]})]})}var F="/changelog",W="/contribute",z=Object(g.a)((function(A){return{root:{flexGrow:1,display:"flex",flexDirection:"column"}}}));var J=t(217),X=[{path:"/print-adjuster",component:function(){!function(A){var e=Object(a.useContext)(b).setAppBarTitle;Object(a.useEffect)((function(){return document.title="".concat(A," | kremi151"),e(A),function(){document.title="kremi151",e(void 0)}}),[e,A])}("Print adjuster");var A=z(),e=Object(d.h)().path;return function(A){var e=Object(a.useContext)(b).setSidebarEntries;Object(a.useEffect)((function(){return e(A),function(){e(void 0)}}),[e,A])}(Object(a.useMemo)((function(){return[{title:"About",route:e},{title:"Changelog",route:"".concat(e).concat(F)},{title:"Contribute",route:"".concat(e).concat(W)}]}),[e])),Object(E.jsx)("div",{className:A.root,children:Object(E.jsxs)(d.c,{children:[Object(E.jsx)(d.a,{exact:!0,path:e,children:Object(E.jsx)(Q,{})}),Object(E.jsx)(d.a,{path:"".concat(e).concat(F),children:Object(E.jsx)(T,{})}),Object(E.jsx)(d.a,{path:"".concat(e).concat(W),children:Object(E.jsx)(R,{})})]})})},drawer:{category:n.PRODUCT,title:"Print adjuster",logo:function(A){return Object(E.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAT9UlEQVR42u3djVMbdRrAcf///8IAkQAthsC00lZNUEQCwQYt1Q7gCy8qRLBQUaD92Wcd725uKgN188Lm88x8Zm7ubhxn97ebL9nN7jvvvvtuAgCGyzs2AgAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAACAALAhAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAABAANgIACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEwO03Pz+fWq1Warfb9EGz2UyTk5PWYkHEvlxZWbG2+yTOZXFOsxYFANcQB8zx8XE6OzujDw4PD1OtVrMWCyL2ZafTsbb7JM5lcU6zFgUA17C+vp4dOKY/c3Jykubm5qzFgoh9eXp6amH3aeJcFuc0a1EAIAAEAAJAACAAEAACAAEgABAACAABgAAQAAgAAWAEAAJAACAABIARAAgAAYAAEABGACAABAACQAAYAYAAEAAIAAFgBAACQAAgAASAEQACwAgABIAAMAJAABgBIABsCAFgBIAAMAJAACAABIAAEABGAAgABIAAQAAYASAAEAACAAFgBIAAQAAIAASAEQACAAEgABAARgAIAASAAEAACAABIAAQAAIAASAAEAAIAAGAABAACAAEgABAAAgABIAAcOYQAAgAAYAAEABGACAABAACQAAYAYAAEAAIAAFgBAACQAAgAASAEQAIAAGAABAARgAIACMAEAADr91u9zwAtre30/LyclpcXBx69Xo9VSoVa7EgYl82Gg1r+7U4xuNY73UAxDnNWhQADGgAtFqtNDU1lcrlMq+VSiVrsSBiX1rTf4ljPI51AYAAcAngP9NsNtP4+LjtDwUWx3gc6y4BIAAEgAAAASAABAACQACAABAAAgABAAgAASAAEACAABAAAgABAAgAASAAEACAABAAAgABAAgAASAAEACAAEAAIAAAAYAAQAAAAgABgAAABAACQAAIAEAAIAAEgAAABAACQAAIAEAAIAAEgAAABAACQAAIAEAAIAAEgAAAASAAEAACQACAABAAAgABIABAAAgAAYAAAASAABAACABAAAgAAYAAAASAABAACABAAAgAAYAAAASAABAACABAANj+AgABAAgABAACABAACAAEACAAEAACQAAAAgABIAAEACAAEAACQAAAAgABIAAEACAAEAACQAAAAgABIAAEAAgAAYAAEAACAASAABAACAAB8F8jIyPpzp07qVqtUgCxL2OfWtsCAAEgAATAlSqVStrY2Ei7u7sUQOzL2KfWtgBAAAgAAXCl+Ivx4OAgmWJM7MvYp9a2AEAACAABIAAEgAAQAALARhAAAkAACAABIAAEAAJAAAgAASAABIAAQAAIACMABIAAEAAIAAFgBIAAEAACAAEgAIwAEAACQAAgAASAEQACQAAIAASAADACQAAIAAGAABAARgAIAAQAAkAAGAEgABAACAABYASAAEAACAABIACMABAACAABIAAEgBEAAgABIAAEgAAwAkAAIAAEgAAQAEYACAAEgAAQAALACAABgAAQAAJAAAgAASAAEAACQAAIAAEgAAQAAkAACAABIAAEgAAQAAgA218ACAABIAAEAAJAABgBIAAEgABAAAgAIwAEgAAQAAgAAWAEgAAQAAIAASAAjAAQAAJAACAABIARAAJAAAgABIAAMAJAACAAuNLS0lLa399PnU6nZxYWFlK5XLb9BYAAKLA4xuNY7+W5Jc5lcU6z/QUA1zAxMZGq1Wqq1Wo9U6lUUqlUsv0FgAAosDjG41jv5bklzmVxTrP9BQAIACMAQACAADACAAQACAAjAEAAgAAwAgAEAAgAIwBAAIAAMAIABAAIACMAQACAADACAAQAXFs8KOXx48dpa2uLAoh9GfvU2gYBAFcaGRlJU1NTaXp6mgKIfRn71NoGAQAAAsBGAAABAAAIAABAAAAAAgAAEAAAgACA/iqVSml0dDSNjY2l9957L42Pj6eJiQn4R7FGYq3Emom14zhCAMAt+cCPE3ecyOMBMLOzs+nh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CAAEgABAAAgABIAAEAACAAEgABAAAsAIAASAAEAACAAjABAAAgABIACMAEAACAAEgAAwAgABIAAQAALACAABIAAEAAJAABgBIACMAEAACAAjAASAEQACAAFgBIAAMAJAACAABAACwAgAAYAAEAAIACMABAACQAAgAIwAEAAIAAGAADACQAAgAAQAAsAIAAGAABAACAABgABAAAgABIAAQAAgAAQAAkAAIAAQAAIAASAAEAACwAgABIAAQAAIACMAEAACAAEgAIwAQAAIAASAADACAAEgABAAAsAIAASAAEAA3BqtVisdHx9nBw69d3h4mGq1mrVYELEvO52Otd0ncS6Lc5q1KAC4hvn5+eyAabfb9EGz2UyTk5PWYkHEvlxZWbG2+yTOZXFOsxYFAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAANgQACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAAAgAGwEABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAQADYEAAgAAAAAQAACAAAQAAAALfQn96DR02b/6c7AAAAAElFTkSuQmCC",width:A.width,height:A.height})}}},{path:"/",component:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(j.a,{paragraph:!0,children:"This page is under construction"}),Object(E.jsx)(j.a,{paragraph:!0,children:"Please come back and check again later!"})]})},drawer:{category:n.DEFAULT,title:"Home",logo:function(){return Object(E.jsx)(J.a,{})},priority:999}}],q=t(126),H=t.n(q),U=t(125),V=t.n(U),Z=t(124),K=t.n(Z),_=t(123),$=t.n(_),AA=t(93),eA=t(218),tA=t(80),nA=t.n(tA),aA=t(122),rA=t.n(aA),cA=t(94),iA=t.n(cA),oA=t(127),sA=t.n(oA),gA=t(219),lA=t(220),uA=t(221),dA=nA()((function(A){return{toolbar:{borderBottom:"1px solid ".concat(A.palette.divider)},toolbarDrawerContainer:{width:96},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-around",overflowX:"auto"},toolbarLink:{cursor:"pointer",padding:A.spacing(1),flexShrink:0}}}));function jA(A){var e=A.title,t=A.sections,n=iA()().breakpoints,r=dA(),c=C(),i=c.darkMode,s=c.setDarkMode,g=Object(d.f)(),l=rA()(n.down("xs")),u=Object(a.useState)(!1),b=Object(o.a)(u,2),B=b[0],I=b[1],p=Object(a.useCallback)((function(){I(!0)}),[I]),h=Object(a.useCallback)((function(){I(!1)}),[I]);Object(a.useEffect)((function(){l||h()}),[l,h]);var O=i?$.a:K.a,m=Object(a.useCallback)((function(){s(!i)}),[i,s]),x=Object(a.useMemo)((function(){var A=t.map((function(A){return{title:A.title,priority:A.priority||0,onClick:function(){I(!1),g.push(A.route)}}}));return A.sort((function(A,e){return e.priority-A.priority})),A}),[t,g,I]);return Object(E.jsxs)("div",{children:[Object(E.jsxs)(eA.a,{className:r.toolbar,children:[l?Object(E.jsx)("div",{className:r.toolbarDrawerContainer,children:Object(E.jsx)(AA.a,{onClick:p,children:Object(E.jsx)(V.a,{})})}):Object(E.jsx)(AA.a,{onClick:m,children:Object(E.jsx)(O,{})}),Object(E.jsx)(j.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:r.toolbarTitle,children:e}),l&&Object(E.jsx)(AA.a,{onClick:m,children:Object(E.jsx)(O,{})}),Object(E.jsx)(AA.a,{href:"https://github.com/kremi151",children:Object(E.jsx)(H.a,{})})]}),l?Object(E.jsx)(sA.a,{anchor:"left",open:B,onClose:h,children:Object(E.jsx)(gA.a,{children:x.map((function(A){var e=A.title,t=A.onClick;return Object(E.jsx)(lA.a,{button:!0,onClick:t,children:Object(E.jsx)(uA.a,{primary:e})},e)}))})}):Object(E.jsx)(eA.a,{component:"nav",variant:"dense",className:r.toolbarSecondary,children:x.map((function(A){var e=A.title,t=A.onClick;return Object(E.jsx)(Y.a,{color:"inherit",noWrap:!0,variant:"body2",className:r.toolbarLink,onClick:t,children:e},e)}))})]})}var EA=t(224),bA=t(43),BA=nA()((function(A){return{container:{padding:A.spacing(2),userSelect:"none"},title:{marginBottom:A.spacing(1)}}}));function CA(A){var e=A.entries,t=BA(),n=Object(d.g)().pathname;return Object(E.jsxs)("div",{className:t.container,children:[Object(E.jsx)(j.a,{display:"block",variant:"h5",className:t.title,children:"Navigation"}),e.map((function(A){var e=A.title,t=A.route;return n===t?Object(E.jsx)(j.a,{display:"block",variant:"body1",children:e}):Object(E.jsx)(Y.a,{component:bA.b,display:"block",variant:"body1",to:t,children:e},e)}))]})}var IA=240,pA=Object(g.a)((function(A){var e;return{root:{display:"flex",userSelect:"none",position:"absolute",left:0,top:0,right:0,bottom:0},appBar:{zIndex:A.zIndex.drawer+1,transition:A.transitions.create(["width","margin"],{easing:A.transitions.easing.sharp,duration:A.transitions.duration.leavingScreen})},appBarShift:{marginLeft:IA,width:"calc(100% - ".concat(IA,"px)"),transition:A.transitions.create(["width","margin"],{easing:A.transitions.easing.sharp,duration:A.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:IA,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:IA,transition:A.transitions.create("width",{easing:A.transitions.easing.sharp,duration:A.transitions.duration.enteringScreen})},drawerClose:(e={transition:A.transitions.create("width",{easing:A.transitions.easing.sharp,duration:A.transitions.duration.leavingScreen}),overflowX:"hidden",width:A.spacing(7)+1},Object(s.a)(e,A.breakpoints.up("sm"),{width:A.spacing(9)+1}),Object(s.a)(e,A.breakpoints.down("xs"),{width:0}),e),content:{flexGrow:1,paddingTop:A.spacing(1),display:"flex",flexDirection:"column"},mainContent:{padding:A.spacing(1)},sidenavIcon:Object(s.a)({},A.breakpoints.up("sm"),{marginLeft:A.spacing(1)})}}));function hA(){var A=pA(),e=C(),t=e.appBarTitle,n=e.sidebarEntries,c=Object(a.useMemo)((function(){return X.map((function(A){var e,t;return{title:(null===(e=A.drawer)||void 0===e?void 0:e.title)||"Missing title",route:A.path,priority:null===(t=A.drawer)||void 0===t?void 0:t.priority}}))}),[]),i=Object(a.useMemo)((function(){return X.map((function(A){var e=A.path,t=A.component;return Object(E.jsx)(d.a,{path:e,render:function(){return r.a.createElement(t,{})}},"route_".concat(e))}))}),[]);return Object(E.jsxs)("div",{className:A.root,children:[Object(E.jsx)(l.a,{}),Object(E.jsxs)(u.a,{maxWidth:"lg",children:[Object(E.jsx)(jA,{title:t||"kremi151",sections:c}),Object(E.jsx)("main",{className:A.content,children:Object(E.jsxs)(EA.a,{container:!0,children:[Object(E.jsx)(EA.a,{xs:12,md:n?10:12,className:A.mainContent,children:Object(E.jsx)(d.c,{children:i})}),n&&Object(E.jsx)(EA.a,{item:!0,xs:12,md:2,children:Object(E.jsx)(CA,{entries:n})})]})})]})]})}var OA=t(50),mA=t(212),xA=t(82),fA=t(225);function QA(){var A=Object(a.useState)(),e=Object(o.a)(A,2),t=e[0],n=e[1],r=Object(a.useState)(),c=Object(o.a)(r,2),i=c[0],s=c[1],g=Object(fA.a)("(prefers-color-scheme: dark)"),l=Object(a.useState)((function(){return g||"dark"===window.localStorage.getItem("theme")})),u=Object(o.a)(l,2),d=u[0],j=u[1],b=Object(a.useCallback)((function(A){window.localStorage.setItem("theme",A?"dark":"light"),j(A)}),[j]),C=Object(a.useMemo)((function(){return Object(OA.a)({palette:{type:d?"dark":"light",primary:{main:xA.a[600]},secondary:{main:xA.a[400]}}})}),[d]),I=Object(a.useMemo)((function(){return{setDarkMode:b,setAppBarTitle:n,setSidebarEntries:s,darkMode:d,appBarTitle:t,sidebarEntries:i}}),[d,t,i,b,n,s]);return Object(E.jsx)(B,{value:I,children:Object(E.jsx)(mA.a,{theme:C,children:Object(E.jsx)(bA.a,{children:Object(E.jsx)(hA,{})})})})}var vA=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,228)).then((function(e){var t=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;t(A),n(A),a(A),r(A),c(A)}))};i.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(QA,{})}),document.getElementById("root")),vA()}},[[184,1,2]]]);
//# sourceMappingURL=main.1cbf4c6a.chunk.js.map