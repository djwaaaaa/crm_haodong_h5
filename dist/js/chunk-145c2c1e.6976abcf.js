(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-145c2c1e"],{"2e0c":function(t,e,i){},db2e:function(t,e,i){"use strict";i.r(e);var c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.listDialog?i("div",{staticClass:"productdetailBox"},[i("div",{staticClass:"productDetail"},[i("div",{staticClass:"dialog-header"},[i("h2",[t._v("项目名称")]),i("div",{staticClass:"close"},[i("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[i("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),i("div",{staticClass:"dialog-content"},[i("ul",t._l(t.itemList,(function(e,c){return i("li",{key:c,on:{click:function(i){return t.chooseItem(e)}}},[t._v(" "+t._s(e.project_name)+" ")])})),0)])])]):t._e()},o=[],a=i("22ce"),s={name:"productDetail",data:function(){return{listDialog:!0,productDialog:!0,itemList:null}},props:["itemName","listDialogShow","changeItemName"],methods:{getProjectList:function(t){var e=this;return Object(a["b"])({url:"project/getProjectList",method:"post",data:{kw:t}}).then((function(t){e.itemList=t.data}))},chooseItem:function(t){this.changeItemName(t.project_name),this.close()},close:function(){this.listDialog=!1}},mounted:function(){this.getProjectList()},watch:{}},n=s,l=(i("f4ba"),i("2877")),r=Object(l["a"])(n,c,o,!1,null,"609632a5",null);e["default"]=r.exports},f4ba:function(t,e,i){"use strict";var c=i("2e0c"),o=i.n(c);o.a}}]);