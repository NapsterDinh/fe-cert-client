"use strict";(self.webpackChunkfe_client=self.webpackChunkfe_client||[]).push([[600],{6077:function(e,n,i){i.d(n,{EG:function(){return r},IV:function(){return o},ZF:function(){return s}});var t=i(9699),r=function(e){return(0,t.d8)("/api/v1/exam/create-random-session",e)},s=function(e){return(0,t.d8)("/api/v1/exam/create-random-topic-session",e)},o=function(e){return(0,t.mR)("/api/v1/exam/current-random-session?type=".concat(e))}},3460:function(e,n,i){i.d(n,{Nl:function(){return s},Nn:function(){return o},XQ:function(){return r}});var t=i(9699),r=function(){return(0,t.mR)("/api/v1/topic/list")},s=function(){return(0,t.mR)("/api/v1/topic/full-list")},o=function(){return(0,t.mR)("/api/v1/topic/full-with-deleted")}},4600:function(e,n,i){i.r(n),i.d(n,{default:function(){return L}});var t=i(5861),r=i(9439),s=i(7757),o=i.n(s),a=i(8875),l=i(506),c=i(7661),u=i(3460),d=i(2791),m=i(1413),v=i(1265),f=i(505),x=i(6161),h=i(85),p=i(6675),j=i(9440),b=i(177),g=i(9220),Z=i(6038),y=i(7083),N=i(1333),w=i(6077),k=i(1134),q=i(9271),Q=i(6030),P=i(7942),T=i(184),E=(x.Z.Text,h.Z.Option),O=(c.Z.TabPane,P.Ry({objectives:P.IX().required().min(1,"You need to choose 1 categories!!!"),numberOfQuestions:P.Rx().typeError("Must be a number").min(20,"Number of question must be greate than 20").required("Please Enter Number of questions!"),timeLimited:P.Rx().typeError("Must be a number").min(10,"Limited Time > 60").required("Please Enter Limited Time")}).required()),I=function(e){var n,i,t=e.item,r=e.index,s=e.showModalPracticeOneTopic;return(0,T.jsxs)("div",{className:"practice-item",id:"exams-item".concat(r),children:[(0,T.jsx)("h4",{children:null===t||void 0===t?void 0:t.title}),(0,T.jsxs)("div",{className:"d-flex justify-content-between practice-item-top",children:[(0,T.jsxs)("div",{className:"practice-count-question",children:["Questions (En):",null===t||void 0===t||null===(n=t.questions.filter((function(e){return!e.isDeleted})))||void 0===n?void 0:n.length," questions"]}),(0,T.jsx)("div",{className:"practice-count-question"}),(0,T.jsx)(f.Z,{variant:"secondary",className:"practice-now",onClick:function(){return s(t)},children:"Practice"})]}),(0,T.jsx)(N.Z,{}),null===t||void 0===t||null===(i=t.sections)||void 0===i?void 0:i.map((function(e,n){var i;return(0,T.jsxs)("div",{children:[(0,T.jsxs)("h5",{children:[n+1,". ",null===e||void 0===e?void 0:e.title]}),(0,T.jsx)("ul",{children:null===e||void 0===e||null===(i=e.lessons)||void 0===i?void 0:i.map((function(e){return(0,T.jsx)("li",{children:null===e||void 0===e?void 0:e.title},null===e||void 0===e?void 0:e.id)}))})]},null===e||void 0===e?void 0:e.id)}))]})},C=function(e){var n,i=e.allTopic,s=(0,q.useHistory)(),a=(0,d.useState)(!1),l=(0,r.Z)(a,2),c=l[0],u=l[1],x=(0,Q.v9)((function(e){var n;return null===(n=e.persist.user)||void 0===n?void 0:n.user})),P=(0,Q.v9)((function(e){var n;return null===e||void 0===e||null===(n=e.exam)||void 0===n?void 0:n.currentDoingExam})),C=p.Z.useForm(),F=(0,r.Z)(C,1)[0],L=(0,k.cI)({resolver:(0,v.X)(O),defaultValues:{objectives:[],numberOfQuestions:20,timeLimited:900}}),S=L.control,R=L.handleSubmit,_=L.isSubmitting,M=L.setValue,V=L.reset,Y=L.getValues,D=L.setError,X=L.clearErrors,A=L.formState.errors,H=function(e){M("objectives",[e._id]),u(!0)},z=function(){X(),V(),u(!1)},B=function(){var e=(0,t.Z)(o().mark((function e(n){var t,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""===x&&(window.location="/login"),!((null===n||void 0===n?void 0:n.numberOfQuestions)>i.find((function(e){return(null===e||void 0===e?void 0:e._id)===n.objectives[0]})).questions.length)){e.next=5;break}return D("numberOfQuestions",{message:"Number of question is more than number of valid questions"}),e.abrupt("return");case 5:return e.next=7,(0,w.ZF)({topics:n.objectives,numberOfQuestions:n.numberOfQuestions,time:n.timeLimited});case 7:null!==(t=e.sent)&&void 0!==t&&t.data?s.push("/exams/".concat(null===t||void 0===t||null===(r=t.data)||void 0===r||null===(a=r.exam)||void 0===a?void 0:a.exam,"/attempt")):alert(t.error),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(j.Z,{title:"Practice Information",visible:c,onCancel:z,footer:null,children:(0,T.jsxs)(p.Z,{className:"form-practice",layout:"vertical",form:F,initialValues:{layout:"vertical"},onFinish:R(B),children:[(0,T.jsx)(p.Z.Item,{label:"*Pick Objectives:",children:(0,T.jsx)(k.Qr,{name:"objectives",style:{width:"104%"},control:S,render:function(e){var n,t=e.field,r=(0,m.Z)({},t);return delete r.value,(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h.Z,(0,m.Z)((0,m.Z)({status:A.objectives&&"error",mode:"multiple",allowClear:!0,style:{width:"100%"}},r),{},{showArrow:!0,placeholder:"Please select",value:Y("objectives"),children:null===i||void 0===i?void 0:i.map((function(e){return(0,T.jsx)(E,{children:e.title},e._id)}))})),A.objectives&&(0,T.jsx)("span",{className:"error-message",children:null===(n=A.objectives)||void 0===n?void 0:n.message})]})}})}),(0,T.jsxs)("div",{className:"d-flex justify-content-between form-practice-bottom",children:[(0,T.jsx)(p.Z.Item,{label:"*Number of question:",className:"form-number-of-questions",children:(0,T.jsx)(k.Qr,{name:"numberOfQuestions",control:S,render:function(e){var n,i=e.field;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(b.Z,(0,m.Z)((0,m.Z)({},i),{},{status:A.numberOfQuestions&&"error"})),A.numberOfQuestions&&(0,T.jsx)("span",{className:"error-message",children:null===(n=A.numberOfQuestions)||void 0===n?void 0:n.message})]})}})}),(0,T.jsx)(p.Z.Item,{label:"*Time limited to do test:",className:"form-timer",children:(0,T.jsx)(k.Qr,{name:"timeLimited",control:S,render:function(e){var n,i=e.field;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(b.Z,(0,m.Z)((0,m.Z)({},i),{},{status:A.timeLimited&&"error"})),A.timeLimited&&(0,T.jsx)("span",{className:"error-message",children:null===(n=A.timeLimited)||void 0===n?void 0:n.message})]})}})})]}),(0,T.jsxs)("div",{className:"form-item-button",children:[(0,T.jsx)(f.Z,{type:"button",variant:"secondary",className:"mx-4",onClick:z,children:"Cancel"}),void 0!==(null===P||void 0===P?void 0:P.exam)?(0,T.jsx)(g.Z,{title:"You need to complete the previous test before taking this test again",children:(0,T.jsx)(f.Z,{disabled:_,variant:"primary",children:"Submit"})}):""===x?(0,T.jsx)(Z.Z,{title:"You need to login to use this feature. Login now ?",onConfirm:function(){return window.location="/login"},okText:"Yes",cancelText:"No",children:(0,T.jsx)(f.Z,{disabled:_||void 0!==(null===P||void 0===P?void 0:P.exam),type:"submit",variant:"primary",children:"Submit"})}):(0,T.jsx)(f.Z,{disabled:_||void 0!==(null===P||void 0===P?void 0:P.exam),type:"submit",variant:"primary",children:"Submit"})]})]})}),(0,T.jsxs)(y.Z,{className:"sping-practice",spinning:0===i.length,tip:"Loading...",style:{minHeight:"400px"},children:[(0,T.jsx)("div",{className:"practice-with-each-section",children:null===i||void 0===i||null===(n=i.filter((function(e){return"public"===(null===e||void 0===e?void 0:e.status)})))||void 0===n?void 0:n.map((function(e,n){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(I,{item:e,index:n,showModalPracticeOneTopic:H},"PracticeItem".concat(e._id)),(0,T.jsx)(N.Z,{})]})}))}),0!==i.length&&(0,T.jsx)("div",{className:"text-center mb-4 my-4",children:(0,T.jsx)(f.Z,{variant:"primary",className:"make-full",onClick:function(){M("objectives",null===i||void 0===i?void 0:i.map((function(e){return e._id}))),u(!0)},children:"Make full practice"})})]})]})},F=c.Z.TabPane,L=function(){var e=(0,d.useState)([]),n=(0,r.Z)(e,2),i=n[0],s=n[1];(0,d.useEffect)((function(){(0,t.Z)(o().mark((function e(){var n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Nl)();case 3:i=e.sent,s(null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n.topic),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]);return(0,T.jsx)(a.Z,{className:"d-flex container-card justify-content-center",children:(0,T.jsxs)(l.Z,{className:"layout-container-top exam mx-3",children:[(0,T.jsxs)("div",{children:[(0,T.jsx)("h1",{className:"text-center",children:"Basic Information Technology Engineer Pass Question"}),(0,T.jsx)("div",{className:"d-flex justify-content-center my-4",children:(0,T.jsx)("img",{src:"https://www.fe-siken.com/img/doujoulogo.png",alt:"doujou-logo"})}),(0,T.jsxs)("pre",{className:"description-practice",children:['"Fundamental Information Technology Engineer Examination Past Question Dojo" is a collection of Web questions with complete explanations that are randomly selected from the past questions (2560 questions) of the Fundamental Information Technology Engineer Examination.',"\n","It is possible to work on past exercises by utilizing the gap time, free of charge, compatible with PC / smartphone / tablet, and management of learning history.","\n",'Please use it as a test preparation."']})]}),(0,T.jsx)(c.Z,{className:"tab-practice",defaultActiveKey:"1",onChange:function(e){console.log(e)},destroyInactiveTabPane:!0,children:(0,T.jsx)(F,{tab:"Questions by specifying a field",children:(0,T.jsx)(C,{allTopic:i})},"2")})]})})}}}]);
//# sourceMappingURL=600.4b21e846.chunk.js.map