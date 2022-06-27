"use strict";(self.webpackChunkfe_client=self.webpackChunkfe_client||[]).push([[923],{1923:function(a,e,r){r.r(e);r(2791);var n=r(4483),t=r(3174),s=r(7022),c=r(9743),i=r(2677),o=r(9089),l=r(2592),d=r(6157),f=r(1523),u=r(1576),v=r(792),m=r(184);e.default=function(){return(0,m.jsx)("main",{children:(0,m.jsx)("section",{className:"vh-100 d-flex align-items-center justify-content-center",children:(0,m.jsx)(s.Z,{children:(0,m.jsx)(c.Z,{children:(0,m.jsx)(i.Z,{xs:12,className:"text-center d-flex align-items-center justify-content-center",children:(0,m.jsxs)("div",{children:[(0,m.jsx)(o.Z.Link,{as:f.rU,to:u.Z.HomePage.path,children:(0,m.jsx)(l.Z,{src:v.Z,className:"img-fluid w-75"})}),(0,m.jsx)("h1",{className:"text-primary mt-5",children:"Verification email was sent"}),(0,m.jsx)("p",{className:"lead my-4",children:"We was sent to your email a verify link. You need to active your account by click on this link"}),(0,m.jsxs)(d.Z,{as:f.rU,variant:"primary",className:"animate-hover",to:u.Z.HomePage.path,children:[(0,m.jsx)(n.G,{icon:t.A35,className:"animate-left-3 me-3 ms-2"}),"Go back home"]})]})})})})})})}},6157:function(a,e,r){r.d(e,{Z:function(){return b}});var n=r(1413),t=r(9439),s=r(5987),c=r(1694),i=r.n(c),o=r(2791),l=r(184),d=["as","disabled"];function f(a){var e=a.tagName,r=a.disabled,n=a.href,t=a.target,s=a.rel,c=a.onClick,i=a.tabIndex,o=void 0===i?0:i,l=a.type;e||(e=null!=n||null!=t||null!=s?"a":"button");var d={tagName:e};if("button"===e)return[{type:l||"button",disabled:r},d];var f=function(a){(r||"a"===e&&function(a){return!a||"#"===a.trim()}(n))&&a.preventDefault(),r?a.stopPropagation():null==c||c(a)};return"a"===e&&(n||(n="#"),r&&(n=void 0)),[{role:"button",disabled:void 0,tabIndex:r?void 0:o,href:n,target:"a"===e?t:void 0,"aria-disabled":r||void 0,rel:"a"===e?s:void 0,onClick:f,onKeyDown:function(a){" "===a.key&&(a.preventDefault(),f(a))}},d]}var u=o.forwardRef((function(a,e){var r=a.as,n=a.disabled,s=function(a,e){if(null==a)return{};var r,n,t={},s=Object.keys(a);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(t[r]=a[r]);return t}(a,d),c=f(Object.assign({tagName:r,disabled:n},s)),i=(0,t.Z)(c,2),o=i[0],u=i[1].tagName;return(0,l.jsx)(u,Object.assign({},s,o,{ref:e}))}));u.displayName="Button";var v=r(162),m=["as","bsPrefix","variant","size","active","className"],x=o.forwardRef((function(a,e){var r=a.as,c=a.bsPrefix,o=a.variant,d=a.size,u=a.active,x=a.className,b=(0,s.Z)(a,m),p=(0,v.vE)(c,"btn"),Z=f((0,n.Z)({tagName:r},b)),N=(0,t.Z)(Z,2),h=N[0],y=N[1].tagName;return(0,l.jsx)(y,(0,n.Z)((0,n.Z)((0,n.Z)({},h),b),{},{ref:e,className:i()(x,p,u&&"active",o&&"".concat(p,"-").concat(o),d&&"".concat(p,"-").concat(d),b.href&&b.disabled&&"disabled")}))}));x.displayName="Button",x.defaultProps={variant:"primary",active:!1,disabled:!1};var b=x},9089:function(a,e,r){r.d(e,{Z:function(){return O}});var n=r(1413),t=r(5987),s=r(1694),c=r.n(s),i=r(2791),o=r(162),l=r(4462),d=r(184),f=function(a){return i.forwardRef((function(e,r){return(0,d.jsx)("div",(0,n.Z)((0,n.Z)({},e),{},{ref:r,className:c()(e.className,a)}))}))},u=["bsPrefix","className","variant","as"],v=i.forwardRef((function(a,e){var r=a.bsPrefix,s=a.className,i=a.variant,l=a.as,f=void 0===l?"img":l,v=(0,t.Z)(a,u),m=(0,o.vE)(r,"card-img");return(0,d.jsx)(f,(0,n.Z)({ref:e,className:c()(i?"".concat(m,"-").concat(i):m,s)},v))}));v.displayName="CardImg";var m=v,x=i.createContext(null);x.displayName="CardHeaderContext";var b=x,p=["bsPrefix","className","as"],Z=i.forwardRef((function(a,e){var r=a.bsPrefix,s=a.className,l=a.as,f=void 0===l?"div":l,u=(0,t.Z)(a,p),v=(0,o.vE)(r,"card-header"),m=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,d.jsx)(b.Provider,{value:m,children:(0,d.jsx)(f,(0,n.Z)((0,n.Z)({ref:e},u),{},{className:c()(s,v)}))})}));Z.displayName="CardHeader";var N=Z,h=["bsPrefix","className","bg","text","border","body","children","as"],y=f("h5"),j=f("h6"),g=(0,l.Z)("card-body"),P=(0,l.Z)("card-title",{Component:y}),w=(0,l.Z)("card-subtitle",{Component:j}),C=(0,l.Z)("card-link",{Component:"a"}),k=(0,l.Z)("card-text",{Component:"p"}),R=(0,l.Z)("card-footer"),E=(0,l.Z)("card-img-overlay"),H=i.forwardRef((function(a,e){var r=a.bsPrefix,s=a.className,i=a.bg,l=a.text,f=a.border,u=a.body,v=a.children,m=a.as,x=void 0===m?"div":m,b=(0,t.Z)(a,h),p=(0,o.vE)(r,"card");return(0,d.jsx)(x,(0,n.Z)((0,n.Z)({ref:e},b),{},{className:c()(s,p,i&&"bg-".concat(i),l&&"text-".concat(l),f&&"border-".concat(f)),children:u?(0,d.jsx)(g,{children:v}):v}))}));H.displayName="Card",H.defaultProps={body:!1};var O=Object.assign(H,{Img:m,Title:P,Subtitle:w,Body:g,Link:C,Text:k,Header:N,Footer:R,ImgOverlay:E})},2677:function(a,e,r){var n=r(9439),t=r(1413),s=r(5987),c=r(1694),i=r.n(c),o=r(2791),l=r(162),d=r(184),f=["as","bsPrefix","className"],u=["className"];var v=o.forwardRef((function(a,e){var r=function(a){var e=a.as,r=a.bsPrefix,n=a.className,c=(0,s.Z)(a,f);r=(0,l.vE)(r,"col");var o=(0,l.pi)(),d=[],u=[];return o.forEach((function(a){var e,n,t,s=c[a];delete c[a],"object"===typeof s&&null!=s?(e=s.span,n=s.offset,t=s.order):e=s;var i="xs"!==a?"-".concat(a):"";e&&d.push(!0===e?"".concat(r).concat(i):"".concat(r).concat(i,"-").concat(e)),null!=t&&u.push("order".concat(i,"-").concat(t)),null!=n&&u.push("offset".concat(i,"-").concat(n))})),[(0,t.Z)((0,t.Z)({},c),{},{className:i().apply(void 0,[n].concat(d,u))}),{as:e,bsPrefix:r,spans:d}]}(a),c=(0,n.Z)(r,2),o=c[0],v=o.className,m=(0,s.Z)(o,u),x=c[1],b=x.as,p=void 0===b?"div":b,Z=x.bsPrefix,N=x.spans;return(0,d.jsx)(p,(0,t.Z)((0,t.Z)({},m),{},{ref:e,className:i()(v,!N.length&&Z)}))}));v.displayName="Col",e.Z=v},7022:function(a,e,r){var n=r(1413),t=r(5987),s=r(1694),c=r.n(s),i=r(2791),o=r(162),l=r(184),d=["bsPrefix","fluid","as","className"],f=i.forwardRef((function(a,e){var r=a.bsPrefix,s=a.fluid,i=a.as,f=void 0===i?"div":i,u=a.className,v=(0,t.Z)(a,d),m=(0,o.vE)(r,"container"),x="string"===typeof s?"-".concat(s):"-fluid";return(0,l.jsx)(f,(0,n.Z)((0,n.Z)({ref:e},v),{},{className:c()(u,s?"".concat(m).concat(x):m)}))}));f.displayName="Container",f.defaultProps={fluid:!1},e.Z=f},9743:function(a,e,r){var n=r(1413),t=r(5987),s=r(1694),c=r.n(s),i=r(2791),o=r(162),l=r(184),d=["bsPrefix","className","as"],f=i.forwardRef((function(a,e){var r=a.bsPrefix,s=a.className,i=a.as,f=void 0===i?"div":i,u=(0,t.Z)(a,d),v=(0,o.vE)(r,"row"),m=(0,o.pi)(),x="".concat(v,"-cols"),b=[];return m.forEach((function(a){var e,r=u[a];delete u[a],e=null!=r&&"object"===typeof r?r.cols:r;var n="xs"!==a?"-".concat(a):"";null!=e&&b.push("".concat(x).concat(n,"-").concat(e))})),(0,l.jsx)(f,(0,n.Z)((0,n.Z)({ref:e},u),{},{className:c().apply(void 0,[s,v].concat(b))}))}));f.displayName="Row",e.Z=f},4462:function(a,e,r){r.d(e,{Z:function(){return v}});var n=r(1413),t=r(5987),s=r(1694),c=r.n(s),i=r(5714),o=r(2791),l=r(162),d=r(184),f=["className","bsPrefix","as"],u=function(a){return a[0].toUpperCase()+(0,i.Z)(a).slice(1)};function v(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.displayName,s=void 0===r?u(a):r,i=e.Component,v=e.defaultProps,m=o.forwardRef((function(e,r){var s=e.className,o=e.bsPrefix,u=e.as,v=void 0===u?i||"div":u,m=(0,t.Z)(e,f),x=(0,l.vE)(o,a);return(0,d.jsx)(v,(0,n.Z)({ref:r,className:c()(s,x)},m))}));return m.defaultProps=v,m.displayName=s,m}}}]);
//# sourceMappingURL=923.5513ee84.chunk.js.map