(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2ce483e"],{d512:function(e,t,s){},fefd:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-register"},[s("div",{staticClass:"explain"}),s("div",{staticClass:"top"},[s("div",{staticClass:"content"},[s("h4",{staticClass:"mi-title"},[e._v("欢迎登录小米有品")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.loginandregister,expression:"loginandregister"}],staticClass:"login"},[s("div",{staticClass:"inpu"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.loginnumber,expression:"loginnumber",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"邮箱/手机号码/小米ID"},domProps:{value:e.loginnumber},on:{input:function(t){t.target.composing||(e.loginnumber=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"inpu"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.loginpassword,expression:"loginpassword",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.loginpassword},on:{input:function(t){t.target.composing||(e.loginpassword=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"login-buttom",on:{click:e.login}},[e._v("登录")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.loginandregister,expression:"!loginandregister"}],staticClass:"register"},[s("div",{staticClass:"inpu"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.redisternumber,expression:"redisternumber",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"手机号码"},domProps:{value:e.redisternumber},on:{input:function(t){t.target.composing||(e.redisternumber=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"inpu"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.redisterpassword,expression:"redisterpassword",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"注册密码"},domProps:{value:e.redisterpassword},on:{input:function(t){t.target.composing||(e.redisterpassword=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"register-buttom",on:{click:e.register}},[e._v("立即注册")])]),s("div",{staticClass:"switchover",on:{click:e.switchover}},[e._v(e._s(e.switchovers))]),s("div",{staticClass:"way"},[s("van-divider",{style:{color:"#666",borderColor:"#1989fa",padding:"0 16px"}},[e._v(" 其他登录方式 ")])],1),e._m(0)])]),s("div",{staticClass:"bottom"})])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mode"},[s("div",{staticClass:"mode-one"},[s("a",{attrs:{href:"#"}})]),s("div",{staticClass:"mode-two"},[s("a",{attrs:{href:"#"}})]),s("div",{staticClass:"mode-three"},[s("a",{attrs:{href:"#"}})]),s("div",{staticClass:"mode-fore"},[s("a",{attrs:{href:"#"}})])])}],a=(s("4160"),s("159b"),s("d512"),{data:function(){return{loginandregister:!0,switchovers:"手机号码注册",redisternumber:"",redisterpassword:"",loginnumber:"",loginpassword:"",leave:""}},methods:{switchover:function(){this.loginandregister=!this.loginandregister,this.switchovers=1==this.loginandregister?"手机号码注册":"登录"},login:function(){var e=this,t=JSON.parse(sessionStorage.getItem("key"));t.forEach((function(t){t.redisternumber==e.loginnumber&&t.redisterpassword==e.loginpassword?(e.$notify({type:"success",message:"登录成功"}),sessionStorage.setItem("loginstate","true"),sessionStorage.setItem("loginnickname",e.loginnumber),e.$router.go(-1)):e.$dialog.alert({message:"账号或密码错误"}).then((function(){}))}))},register:function(){if(""==this.redisternumber||""==this.redisterpassword)this.$dialog.alert({message:"请输入注册账号或密码"});else{var e=JSON.parse(sessionStorage.getItem("key"));e.push({redisternumber:this.redisternumber,redisterpassword:this.redisterpassword}),sessionStorage.setItem("key",JSON.stringify(e)),this.loginandregister=!this.loginandregister,this.$notify({type:"success",message:"注册成功"})}}}}),o=a,n=s("2877"),d=Object(n["a"])(o,i,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-a2ce483e.7179d75b.js.map