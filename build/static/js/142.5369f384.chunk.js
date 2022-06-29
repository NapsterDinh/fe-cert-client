"use strict";(self.webpackChunkfe_client=self.webpackChunkfe_client||[]).push([[142],{4142:function(e,a,r){r.r(a);r(2791);var t=r(4483),s=r(3174),i=r(8875),l=r(7546),n=r(2),o=r(506),c=r(7066),d=r(6787),m=r(505),f=r(1523),u=r(1576),v=r(184);a.default=function(){return(0,v.jsx)("main",{children:(0,v.jsx)("section",{className:"bg-soft d-flex align-items-center my-5 mt-lg-6 mb-lg-5",children:(0,v.jsx)(i.Z,{children:(0,v.jsxs)(l.Z,{className:"justify-content-center",children:[(0,v.jsx)("p",{className:"text-center",children:(0,v.jsxs)(n.Z.Link,{as:f.rU,to:u.Z.LoginPage.path,className:"text-gray-700",children:[(0,v.jsx)(t.G,{icon:s.EyR,className:"me-2"})," Back to sign in"]})}),(0,v.jsx)(o.Z,{xs:12,className:"d-flex align-items-center justify-content-center",children:(0,v.jsxs)("div",{className:"bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500",children:[(0,v.jsx)("h3",{className:"mb-4",children:"Reset password"}),(0,v.jsxs)(c.Z,{children:[(0,v.jsxs)(c.Z.Group,{id:"password",className:"mb-4",children:[(0,v.jsx)(c.Z.Label,{children:"Your new Password"}),(0,v.jsxs)(d.Z,{children:[(0,v.jsx)(d.Z.Text,{children:(0,v.jsx)(t.G,{icon:s.B$L})}),(0,v.jsx)(c.Z.Control,{required:!0,type:"password",placeholder:"Password"})]})]}),(0,v.jsxs)(c.Z.Group,{id:"confirmPassword",className:"mb-4",children:[(0,v.jsx)(c.Z.Label,{children:"Confirm new Password"}),(0,v.jsxs)(d.Z,{children:[(0,v.jsx)(d.Z.Text,{children:(0,v.jsx)(t.G,{icon:s.B$L})}),(0,v.jsx)(c.Z.Control,{required:!0,type:"password",placeholder:"Confirm Password"})]})]}),(0,v.jsx)(m.Z,{variant:"primary",type:"submit",className:"w-100",children:"Reset password"})]})]})})]})})})})}},2:function(e,a,r){r.d(a,{Z:function(){return g}});var t=r(7462),s=r(3366),i=r(1694),l=r.n(i),n=r(2791),o=r(9496),c=r(5633),d=r(2625),m=r(1757),f=n.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,c=e.variant,d=e.as,m=void 0===d?"img":d,f=(0,s.Z)(e,["bsPrefix","className","variant","as"]),u=(0,o.vE)(r,"card-img");return n.createElement(m,(0,t.Z)({ref:a,className:l()(c?u+"-"+c:u,i)},f))}));f.displayName="CardImg",f.defaultProps={variant:null};var u=f,v=(0,d.Z)("h5"),p=(0,d.Z)("h6"),Z=(0,c.Z)("card-body"),x=(0,c.Z)("card-title",{Component:v}),b=(0,c.Z)("card-subtitle",{Component:p}),h=(0,c.Z)("card-link",{Component:"a"}),N=(0,c.Z)("card-text",{Component:"p"}),y=(0,c.Z)("card-header"),w=(0,c.Z)("card-footer"),E=(0,c.Z)("card-img-overlay"),P=n.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,c=e.bg,d=e.text,f=e.border,u=e.body,v=e.children,p=e.as,x=void 0===p?"div":p,b=(0,s.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=(0,o.vE)(r,"card"),N=(0,n.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return n.createElement(m.Z.Provider,{value:N},n.createElement(x,(0,t.Z)({ref:a},b,{className:l()(i,h,c&&"bg-"+c,d&&"text-"+d,f&&"border-"+f)}),u?n.createElement(Z,null,v):v))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=u,P.Title=x,P.Subtitle=b,P.Body=Z,P.Link=h,P.Text=N,P.Header=y,P.Footer=w,P.ImgOverlay=E;var g=P},6556:function(e,a,r){var t=r(7462),s=r(3366),i=r(1694),l=r.n(i),n=r(2791),o=r(2007),c=r.n(o),d={type:c().string,tooltip:c().bool,as:c().elementType},m=n.forwardRef((function(e,a){var r=e.as,i=void 0===r?"div":r,o=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,f=void 0!==m&&m,u=(0,s.Z)(e,["as","className","type","tooltip"]);return n.createElement(i,(0,t.Z)({},u,{ref:a,className:l()(o,d+"-"+(f?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=d,a.Z=m},7066:function(e,a,r){r.d(a,{Z:function(){return I}});var t=r(7462),s=r(3366),i=r(1694),l=r.n(i),n=r(2791),o=r(729),c=(r(2391),r(6556)),d=r(3255),m=r(9496),f=n.forwardRef((function(e,a){var r,i,o,c=e.bsPrefix,f=e.type,u=e.size,v=e.htmlSize,p=e.id,Z=e.className,x=e.isValid,b=void 0!==x&&x,h=e.isInvalid,N=void 0!==h&&h,y=e.plaintext,w=e.readOnly,E=e.as,P=void 0===E?"input":E,g=(0,s.Z)(e,["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),j=(0,n.useContext)(d.Z).controlId;(c=(0,m.vE)(c,"form-control"),y)?((i={})[c+"-plaintext"]=!0,r=i):((o={})[c]=!0,o[c+"-"+u]=u,r=o);return n.createElement(P,(0,t.Z)({},g,{type:f,size:v,ref:a,readOnly:w,id:p||j,className:l()(Z,r,b&&"is-valid",N&&"is-invalid","color"===f&&c+"-color")}))}));f.displayName="FormControl";var u=Object.assign(f,{Feedback:c.Z}),v=n.forwardRef((function(e,a){var r=e.children,i=e.controlId,l=e.as,o=void 0===l?"div":l,c=(0,s.Z)(e,["children","controlId","as"]),m=(0,n.useMemo)((function(){return{controlId:i}}),[i]);return n.createElement(d.Z.Provider,{value:m},n.createElement(o,(0,t.Z)({},c,{ref:a}),r))}));v.displayName="FormGroup";var p=v,Z=r(506),x=n.forwardRef((function(e,a){var r=e.as,i=void 0===r?"label":r,o=e.bsPrefix,c=e.column,f=e.srOnly,u=e.className,v=e.htmlFor,p=(0,s.Z)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),x=(0,n.useContext)(d.Z).controlId;o=(0,m.vE)(o,"form-label");var b="col-form-label";"string"===typeof c&&(b=b+" "+b+"-"+c);var h=l()(u,o,f&&"sr-only",c&&b);return v=v||x,c?n.createElement(Z.Z,(0,t.Z)({as:"label",className:h,htmlFor:v},p)):n.createElement(i,(0,t.Z)({ref:a,className:h,htmlFor:v},p))}));x.displayName="FormLabel",x.defaultProps={column:!1,srOnly:!1};var b=x,h=n.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=(0,s.Z)(e,["bsPrefix","className"]);return r=(0,m.vE)(r,"form-range"),n.createElement("input",(0,t.Z)({},o,{type:"range",ref:a,className:l()(i,r)}))}));h.displayName="FormRange";var N=h,y=n.forwardRef((function(e,a){var r=e.bsPrefix,i=e.size,o=e.htmlSize,c=e.className,d=e.isValid,f=void 0!==d&&d,u=e.isInvalid,v=void 0!==u&&u,p=(0,s.Z)(e,["bsPrefix","size","htmlSize","className","isValid","isInvalid"]);return r=(0,m.vE)(r,"form-select"),n.createElement("select",(0,t.Z)({},p,{size:o,ref:a,className:l()(c,r,i&&r+"-"+i,f&&"is-valid",v&&"is-invalid")}))}));y.displayName="FormSelect";var w=y,E=n.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.as,c=void 0===o?"small":o,d=e.muted,f=(0,s.Z)(e,["bsPrefix","className","as","muted"]);return r=(0,m.vE)(r,"form-text"),n.createElement(c,(0,t.Z)({},f,{ref:a,className:l()(i,r,d&&"text-muted")}))}));E.displayName="FormText";var P=E,g=n.forwardRef((function(e,a){return n.createElement(o.Z,(0,t.Z)({},e,{ref:a,type:"switch"}))}));g.displayName="Switch",g.Input=o.Z.Input,g.Label=o.Z.Label;var j=g,k=n.forwardRef((function(e,a){var r=e.className,i=e.validated,o=e.as,c=void 0===o?"form":o,d=(0,s.Z)(e,["className","validated","as"]);return n.createElement(c,(0,t.Z)({},d,{ref:a,className:l()(r,i&&"was-validated")}))}));k.displayName="Form",k.Group=p,k.Control=u,k.Check=o.Z,k.Switch=j,k.Label=b,k.Text=P,k.Range=N,k.Select=w;var I=k},729:function(e,a,r){r.d(a,{Z:function(){return p}});var t=r(7462),s=r(3366),i=r(1694),l=r.n(i),n=r(2791),o=r(6556),c=r(2611),d=r(3255),m=r(9496),f=n.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.htmlFor,c=(0,s.Z)(e,["bsPrefix","className","htmlFor"]),f=(0,n.useContext)(d.Z).controlId;return r=(0,m.vE)(r,"form-check-label"),n.createElement("label",(0,t.Z)({},c,{ref:a,htmlFor:o||f,className:l()(i,r)}))}));f.displayName="FormCheckLabel";var u=f,v=n.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,f=e.bsSwitchPrefix,v=e.inline,p=void 0!==v&&v,Z=e.disabled,x=void 0!==Z&&Z,b=e.isValid,h=void 0!==b&&b,N=e.isInvalid,y=void 0!==N&&N,w=e.feedbackTooltip,E=void 0!==w&&w,P=e.feedback,g=e.className,j=e.style,k=e.title,I=void 0===k?"":k,C=e.type,R=void 0===C?"checkbox":C,F=e.label,L=e.children,z=e.as,G=void 0===z?"input":z,S=(0,s.Z)(e,["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","as"]);i=(0,m.vE)(i,"form-check"),f=(0,m.vE)(f,"form-switch");var T=(0,n.useContext)(d.Z).controlId,V=(0,n.useMemo)((function(){return{controlId:r||T}}),[T,r]),O=null!=F&&!1!==F&&!L,B=n.createElement(c.Z,(0,t.Z)({},S,{type:"switch"===R?"checkbox":R,ref:a,isValid:h,isInvalid:y,disabled:x,as:G}));return n.createElement(d.Z.Provider,{value:V},n.createElement("div",{style:j,className:l()(g,F&&i,p&&i+"-inline","switch"===R&&f)},L||n.createElement(n.Fragment,null,B,O&&n.createElement(u,{title:I},F),(h||y)&&n.createElement(o.Z,{type:h?"valid":"invalid",tooltip:E},P))))}));v.displayName="FormCheck",v.Input=c.Z,v.Label=u;var p=v},2611:function(e,a,r){var t=r(7462),s=r(3366),i=r(1694),l=r.n(i),n=r(2791),o=r(3255),c=r(9496),d=n.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,d=e.className,m=e.type,f=void 0===m?"checkbox":m,u=e.isValid,v=void 0!==u&&u,p=e.isInvalid,Z=void 0!==p&&p,x=e.as,b=void 0===x?"input":x,h=(0,s.Z)(e,["id","bsPrefix","className","type","isValid","isInvalid","as"]),N=(0,n.useContext)(o.Z).controlId;return i=(0,c.vE)(i,"form-check-input"),n.createElement(b,(0,t.Z)({},h,{ref:a,type:f,id:r||N,className:l()(d,i,v&&"is-valid",Z&&"is-invalid")}))}));d.displayName="FormCheckInput",a.Z=d},3255:function(e,a,r){var t=r(2791).createContext({controlId:void 0});a.Z=t},6787:function(e,a,r){var t=r(3366),s=r(7462),i=r(1694),l=r.n(i),n=r(2791),o=r(5633),c=r(9496),d=r(2611),m=(0,o.Z)("input-group-text",{Component:"span"}),f=n.forwardRef((function(e,a){var r=e.bsPrefix,i=e.size,o=e.className,d=e.as,m=void 0===d?"div":d,f=(0,t.Z)(e,["bsPrefix","size","className","as"]);return r=(0,c.vE)(r,"input-group"),n.createElement(m,(0,s.Z)({ref:a},f,{className:l()(o,r,i&&r+"-"+i)}))}));f.displayName="InputGroup";var u=(0,s.Z)({},f,{Text:m,Radio:function(e){return n.createElement(m,null,n.createElement(d.Z,(0,s.Z)({type:"radio"},e)))},Checkbox:function(e){return n.createElement(m,null,n.createElement(d.Z,(0,s.Z)({type:"checkbox"},e)))}});a.Z=u},7546:function(e,a,r){var t=r(7462),s=r(3366),i=r(1694),l=r.n(i),n=r(2791),o=r(9496),c=["xxl","xl","lg","md","sm","xs"],d=n.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,d=e.noGutters,m=e.as,f=void 0===m?"div":m,u=(0,s.Z)(e,["bsPrefix","className","noGutters","as"]),v=(0,o.vE)(r,"row"),p=v+"-cols",Z=[];return c.forEach((function(e){var a,r=u[e];delete u[e];var t="xs"!==e?"-"+e:"";null!=(a=null!=r&&"object"===typeof r?r.cols:r)&&Z.push(""+p+t+"-"+a)})),n.createElement(f,(0,t.Z)({ref:a},u,{className:l().apply(void 0,[i,v,d&&"no-gutters"].concat(Z))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.Z=d},2625:function(e,a,r){var t=r(7462),s=r(2791),i=r(1694),l=r.n(i);a.Z=function(e){return s.forwardRef((function(a,r){return s.createElement("div",(0,t.Z)({},a,{ref:r,className:l()(a.className,e)}))}))}}}]);
//# sourceMappingURL=142.5369f384.chunk.js.map