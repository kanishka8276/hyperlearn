(this.webpackJsonphyp=this.webpackJsonphyp||[]).push([[0],{23:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(25),r=n.n(a),i=(n(31),n(16)),l=n(2),h=n(3),j=n(18),o=n(5),d=n(4),b=(n(23),n.p+"static/media/hyperlearn.f8c0421a.png"),u=n(0),O=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsxs)("center",{children:[Object(u.jsxs)("h1",{children:[" ",Object(u.jsx)("span",{style:{color:"#ff751a"},children:"</hyper"}),Object(u.jsx)("span",{style:{color:"#8000ff"},children:"Learn"}),Object(u.jsx)("span",{style:{color:"#ff751a"},children:">"})]}),Object(u.jsx)("img",{src:b,alt:"hyp",class:"hypimg"}),Object(u.jsx)("h1",{children:"Welcome Back!"}),Object(u.jsx)("h2",{style:{padding:"1rem 7rem",color:"#333333"},children:"hyperLearn helps you connect and learn with the best mentors out there"})]})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsx)("h1",{children:"Your details"})})]})}}]),n}(s.a.Component),p=(n(33),n(13)),x=n(15),m=n(42),f=n(17).BrowserRouter,y=n(17).Route,w=n(17).Link,g=n(17).Switch,v=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).handleChange=function(e){c.form.validateFields(e.target)},c.contactSubmit=function(e){e.preventDefault(),c.form.validateFields(),c.form.isValid()?console.log("form is valid: submit"):console.log("form is invalid: do not submit")},c.state={type:"password"},c.showHide=c.showHide.bind(Object(j.a)(c)),c}return Object(h.a)(n,[{key:"showHide",value:function(e){this.setState({type:"text"===this.state.type?"password":"text"})}},{key:"render",value:function(){var e,t=this;return Object(u.jsxs)(f,{children:[Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsxs)("center",{children:[Object(u.jsxs)("h1",{children:[" ",Object(u.jsx)("span",{style:{color:"#ff751a"},children:"</hyper"}),Object(u.jsx)("span",{style:{color:"#8000ff"},children:"Learn"}),Object(u.jsx)("span",{style:{color:"#ff751a"},children:">"})]}),Object(u.jsx)("img",{src:b,alt:"hyp",class:"hypimg"}),Object(u.jsx)("h1",{children:"Welcome Back!"}),Object(u.jsx)("h2",{style:{padding:"1rem 7rem",color:"#333333"},children:"hyperLearn helps you connect and learn with the best mentors out there"})]})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsxs)("center",{children:[Object(u.jsx)("h1",{children:"Create New Account"}),Object(u.jsxs)(p.a,{ref:function(e){return t.form=e},onSubmit:this.contactSubmit,noValidate:!0,children:[Object(u.jsx)("label",{children:"Full name"}),Object(u.jsx)("input",{type:"text",name:"name",required:!0,onChange:this.handleChange}),Object(u.jsx)(x.a,{for:"name",children:Object(u.jsx)(m.a,{when:"*"})}),Object(u.jsx)("label",{children:"Email address"}),Object(u.jsx)("input",{type:"email",name:"email",onChange:this.handleChange,required:!0}),Object(u.jsx)(x.a,{for:"email",children:Object(u.jsx)(m.a,{when:"*"})}),Object(u.jsx)("label",{children:"Phone Number"}),Object(u.jsx)("input",{type:"text",name:"phone",title:"Enter valid phone number with 10 digits",onChange:this.handleChange,required:!0,pattern:".{10}"}),Object(u.jsxs)(x.a,{for:"phone",children:[Object(u.jsx)(m.a,{when:function(e){return/\W/.test(e)},warning:!0,children:"Should contain number only"}),Object(u.jsx)(m.a,{when:function(e){return/[A-Z]/.test(e)},warning:!0,children:"Should contain numbers only."}),Object(u.jsx)(m.a,{when:function(e){return/[a-z]/.test(e)},warning:!0,children:"Should contain numbers only."}),Object(u.jsx)(m.a,{when:"patternMismatch",children:"Should be a valid Indian number with 10 digits"}),Object(u.jsx)(m.a,{when:"*"})]}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",(e={type:this.state.type,name:"password",onChange:this.handleChange,required:!0,pattern:".{8,}"},Object(i.a)(e,"required",!0),Object(i.a)(e,"style",{width:"87%"}),e)),Object(u.jsx)("span",{className:"password__show",style:{fontSize:"1.5rem",color:"#333333"},onClick:this.showHide,children:"text"===this.state.type?Object(u.jsx)("i",{className:"fa fa-eye-slash"}):Object(u.jsx)("i",{className:"fa fa-eye"})}),Object(u.jsxs)(x.a,{for:"password",children:[Object(u.jsx)(m.a,{when:"patternMismatch",children:"Should be at least 8 characters long"}),Object(u.jsx)(m.a,{when:"*"}),Object(u.jsx)(m.a,{when:function(e){return!/\d/.test(e)},warning:!0,children:"Should contain numbers"}),Object(u.jsx)(m.a,{when:function(e){return!/[A-Z]/.test(e)},warning:!0,children:"Should contain capital letters"}),Object(u.jsx)(m.a,{when:function(e){return!/\W/.test(e)},warning:!0,children:"Should contain special characters"})]}),Object(u.jsx)(w,{to:"/home",children:Object(u.jsx)("input",{type:"submit",value:"Sign Up",id:"signup"})}),Object(u.jsx)("h4",{style:{color:"#333333"},children:"Already have an Account?"}),Object(u.jsx)("button",{id:"signin",children:" Sign In"})]})]})})]}),Object(u.jsx)(g,{children:Object(u.jsx)(y,{path:"/home",exact:!0,component:O})})]})}}]),n}(s.a.Component);r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2ed22dab.chunk.js.map