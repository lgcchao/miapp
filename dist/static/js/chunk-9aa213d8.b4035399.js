(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9aa213d8"],{a8e0:function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"purchase"},[e("div",[e("div",{staticClass:"heat"},[e("div",{staticClass:"purchase-tetle"},[e("img",{attrs:{src:"https://m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_arrow_left_darkgray.png",alt:""},on:{click:s.goBack}}),s._v(" 确认订单 ")]),e("div",{staticClass:"take-site",on:{click:s.selectAddress}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.state,expression:"state"}],staticClass:"select-site"},[s._v("请选择收货地址")]),e("img",{attrs:{src:"https://m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_arrow_left_darkgray.png",alt:""}}),e("div",{directives:[{name:"show",rawName:"v-show",value:!s.state,expression:"!state"}],staticClass:"site-hurdle"},[e("span",{staticClass:"recipients"},[s._v(s._s(s.site.name))]),e("span",{staticClass:"call-number"},[s._v(s._s(s.site.tel))]),e("div",{staticClass:"site-text"},[s._v(s._s(s.site.address))])])]),e("van-popup",{staticClass:"popup",style:{height:"70%"},attrs:{closeable:"","close-icon":"close",position:"bottom"},model:{value:s.showa,callback:function(t){s.showa=t},expression:"showa"}},[e("div",{staticClass:"site-telter"},[s._v("配送地址")]),e("van-address-list",{staticClass:"sites",attrs:{list:s.list,"default-tag-text":"默认","add-button-text":"选择其他配送地址"},on:{select:s.onSelect},model:{value:s.chosenAddressId,callback:function(t){s.chosenAddressId=t},expression:"chosenAddressId"}})],1)],1),e("div",{staticClass:"commodity-box"},[e("div",{staticClass:"commodity-hurdle"},s._l(s.purchase,(function(s){return e("van-card",{key:s.gid,attrs:{num:s.count,price:s.price_min/100+".00",desc:s.stlie,title:s.name,thumb:s.pic_url}})})),1)]),e("van-submit-bar",{attrs:{price:s.totalPrices,"button-text":"立即支付"},on:{submit:s.onSubmit}})],1)])},a=[],o=(e("4160"),e("159b"),e("fe38"),{data:function(){return{site:"",state:!0,commodity:"",list:[],chosenAddressId:"1",showa:!1,purchase:""}},created:function(){this.list=JSON.parse(sessionStorage.getItem("list")),this.purchase=JSON.parse(sessionStorage.getItem("purchase"))},methods:{goBack:function(){this.$router.go(-1)},onSelect:function(s,t){this.state=!1,this.chosenAddressId=t,this.site=this.list[this.chosenAddressId],this.showa=!this.showa},onSubmit:function(){""!==this.site?(this.$toast("支付成功"),this.$router.go(-1)):this.$toast("请选择地址")},selectAddress:function(){this.showa=!0,""==this.list?this.state=!1:this.state=!0}},computed:{totalPrices:function(){var s=0;return this.purchase.forEach((function(t){s+=t.price_min*t.count})),s}}}),c=o,n=e("2877"),r=Object(n["a"])(c,i,a,!1,null,null,null);t["default"]=r.exports},fe38:function(s,t,e){}}]);
//# sourceMappingURL=chunk-9aa213d8.b4035399.js.map