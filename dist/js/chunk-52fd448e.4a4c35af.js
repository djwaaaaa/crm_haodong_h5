(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52fd448e"],{"1c13":function(t,e,i){},"3ed0":function(t,e,i){"use strict";var o=i("1c13"),s=i.n(o);s.a},db2e:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.listDialog?i("div",{staticClass:"productdetailBox"},[i("div",{staticClass:"productDetail"},[i("div",{staticClass:"dialog-header"},[i("h2",[t._v("项目名称")]),i("div",{staticClass:"close"},[i("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[i("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),i("div",{staticClass:"dialog-content"},[i("ul",t._l(t.itemList,(function(e,o){return i("li",{key:o,on:{click:function(i){return t.chooseItem(e)}}},[t._v(" "+t._s(e.project_name)+" ")])})),0)])])]):t._e()},s=[],c=i("22ce"),a={name:"productDetail",data:function(){return{listDialog:!0,productDialog:!0,itemList:null,item:null}},props:["itemName","listDialogShow","changeItemName"],methods:{getProjectList:function(t){var e=this;return Object(c["b"])({url:"project/getProjectList",method:"post",data:{kw:t}}).then((function(t){e.itemList=t.data}))},chooseItem:function(t){console.log(2),this.item=t,this.$emit("changeItemName",t.project_name),this.close()},close:function(){this.listDialog=!1}},mounted:function(){this.getProjectList()},watch:{}},n=a,l=(i("3ed0"),i("2877")),r=Object(l["a"])(n,o,s,!1,null,"15b40ab7",null);e["default"]=r.exports}}]);