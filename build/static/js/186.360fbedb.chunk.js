"use strict";(self.webpackChunkfe_client=self.webpackChunkfe_client||[]).push([[186],{3460:function(n,e,i){i.d(e,{Nl:function(){return s},Nn:function(){return c},XQ:function(){return l}});var t=i(9699),l=function(){return(0,t.mR)("/api/v1/topic/list")},s=function(){return(0,t.mR)("/api/v1/topic/full-list")},c=function(){return(0,t.mR)("/api/v1/topic/full-with-deleted")}},7380:function(n,e,i){i.r(e);var t=i(5861),l=i(9439),s=i(7757),c=i.n(s),o=i(3174),r=i(4483),a=i(506),d=i(8875),u=i(2340),v=i(8164),h=i(6880),m=i(3460),f=i(2791),p=i(4090),x=i(9271),j=i(184);e.default=function(){var n,e,i,s,N,b=(0,f.useState)(""),g=(0,l.Z)(b,2),w=g[0],Z=g[1],_=(0,x.useParams)().slugTopic;(0,f.useEffect)((function(){(0,t.Z)(c().mark((function n(){var e,i,t,l,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.Nl)();case 3:200===(null===(e=n.sent)||void 0===e?void 0:e.status)&&(void 0===(s=null===e||void 0===e||null===(i=e.data)||void 0===i||null===(t=i.topic)||void 0===t||null===(l=t.filter((function(n){return n._id===_&&"public"===n.status})))||void 0===l?void 0:l[0])?window.location="/404":Z(s)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"pageBanner_def",style:{backgroundImage:"url(".concat(h,")")},children:(0,j.jsx)("div",{className:"container_common",children:(0,j.jsx)("div",{className:"content_common",children:(0,j.jsx)("div",{className:"ifm",children:(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(a.Z,{span:18,children:(0,j.jsx)(u.Z,{className:"site-page-header",title:null===w||void 0===w?void 0:w.title,breadcrumbRender:function(){return(0,j.jsxs)(v.Z,{children:[(0,j.jsx)(v.Z.Item,{children:"Home"}),(0,j.jsx)(v.Z.Item,{children:(0,j.jsx)("a",{href:"/studyRoad",children:"Learning Path"})}),(0,j.jsx)(v.Z.Item,{children:(0,j.jsx)(v.Z.Item,{children:"Topic"})})]})}})})})})})})}),void 0!==(null===w||void 0===w?void 0:w._id)&&(0,j.jsxs)(d.Z,{className:"container-card",children:[(0,j.jsxs)("div",{className:"layout-container-top module",children:[(0,j.jsx)("h1",{className:"title",children:w.title}),void 0!==(null===w||void 0===w?void 0:w.description)&&(0,j.jsx)("div",{className:"sub-title",dangerouslySetInnerHTML:{__html:decodeURIComponent(escape(window.atob(null===w||void 0===w?void 0:w.description)))}}),(0,j.jsx)("h3",{className:"what-learning-title",children:"What you'll learn ?"}),(0,j.jsx)("div",{className:"what-learning-title-container",children:null===w||void 0===w||null===(n=w.objective)||void 0===n?void 0:n.map((function(n){return(0,j.jsxs)("div",{className:"what-learning-item",children:[(0,j.jsx)(r.G,{icon:o.iiS}),(0,j.jsx)("span",{children:n})]})}))})]}),(0,j.jsxs)("div",{className:"layout-container-body module",children:[(0,j.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,j.jsx)("h3",{className:"what-learning-title",children:"Topic Content"}),(0,j.jsxs)("span",{className:"total-sections",children:[null===w||void 0===w||null===(e=w.sections)||void 0===e||null===(i=e.filter((function(n){return"public"===n.status})))||void 0===i?void 0:i.length," ","sections"]}),(0,j.jsx)("span",{className:"icon-circle",children:"\u2022"}),(0,j.jsxs)("span",{className:"total-lectures",children:[function(){if(void 0!==(null===w||void 0===w?void 0:w._id)){var n,e,i=0;return null===w||void 0===w||null===(n=w.sections)||void 0===n||null===(e=n.filter((function(n){return"public"===n.status})))||void 0===e||e.map((function(n){return i+=n.lessons.length})),i}return 0}()," lessons"]})]}),(0,j.jsx)(p.Z,{children:null===w||void 0===w||null===(s=w.sections)||void 0===s||null===(N=s.filter((function(n){return"public"===n.status})))||void 0===N?void 0:N.map((function(n,e){var i;return(0,j.jsxs)(p.Z.Item,{eventKey:n._id,children:[(0,j.jsx)(p.Z.Header,{children:"".concat(e+1,". ").concat(n.title)}),(0,j.jsx)(p.Z.Body,{children:null===n||void 0===n||null===(i=n.lessons)||void 0===i?void 0:i.map((function(n,i){return(0,j.jsx)("a",{href:"/lessons/".concat(n._id),children:"".concat(e+1,".").concat(i+1," ").concat(n.title)})}))})]},n._id)}))})]})]})]})}}}]);
//# sourceMappingURL=186.360fbedb.chunk.js.map