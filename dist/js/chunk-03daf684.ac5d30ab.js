(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03daf684","chunk-2d2172b9","chunk-2d0b3a59"],{"13c9":function(t,e,r){"use strict";r.r(e);var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.productDialog?r("div",{staticClass:"productdetailBox"},[r("div",{staticClass:"productDetail"},[r("div",{staticClass:"dialog-header"},[r("h2",[t._v("产品信息")]),r("div",{staticClass:"close"},[r("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[r("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),r("d2-container",{class:{"page-compact":t.crud.pageOptions.compact},attrs:{type:"ghost"}},[r("d2-crud-x",t._g(t._b({ref:"d2Crud"},"d2-crud-x",t._crudProps,!1),t._crudListeners),[r("div",{attrs:{slot:"header"},slot:"header"},[r("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),r("el-button-group",[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[r("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),r("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns,storage:"productDetail"},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)])],1)],1)]):t._e()},o=[],n=r("c61a"),a=r("28eb"),u=r("1fbf"),d={name:"productDetail",mixins:[u["d2CrudPlus"].crud],data:function(){return{productDialog:!0,order_code:null}},props:["purchasedID"],methods:{getCrudOptions:function(){return Object(a["crudOptions"])(this)},pageRequest:function(t){return t.purchase_id=this.purchasedID,console.log(789951,this.order_code),n["GetList"](t)},addRequest:function(t){return console.log("api",n),n["AddObj"](t)},updateRequest:function(t){return console.log("----",t),n["UpdateObj"](t)},delRequest:function(t){return n["DelObj"](t.id)},close:function(){this.productDialog=!1,this.$emit("closeProductDetail")},doLoad:function(){}},mounted:function(){this.doRefresh()},watch:{productDialog:function(){}}},s=d,i=(r("b31d"),r("2877")),l=Object(i["a"])(s,c,o,!1,null,"542845c7",null);e["default"]=l.exports},"28eb":function(t,e,r){"use strict";r.r(e),r.d(e,"crudOptions",(function(){return c}));var c=function(t){return{rowHandle:{fixed:"right"},pageOptions:{compact:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12,appendToBody:!0},columns:[{title:"ID",key:"id",width:60,sortable:!0,form:{disabled:!0}},{title:"采购合同ID",key:"purchase_id",sortable:!0,search:{show:!0},type:"text",width:150},{title:"采购合同编号",key:"purchase_code",type:"text"},{title:"产品名称",key:"product_name",type:"text"},{title:"单位",key:"unit",type:"text"},{title:"数量",key:"count",type:"text"},{title:"单价",key:"price",type:"text"},{title:"总价",key:"total_price",type:"text"},{title:"备注",key:"remark",width:500,type:"text-area",viewForm:{component:{name:null,render:function(t,e){return t("div",[e.value])}}}}]}}},"295e":function(t,e,r){},b31d:function(t,e,r){"use strict";var c=r("295e"),o=r.n(c);o.a},c61a:function(t,e,r){"use strict";r.r(e),r.d(e,"GetList",(function(){return o})),r.d(e,"AddObj",(function(){return n})),r.d(e,"UpdateObj",(function(){return a})),r.d(e,"DelObj",(function(){return u})),r.d(e,"GetCascadeData",(function(){return d}));var c=r("22ce");function o(t){return console.log(t,888),Object(c["b"])({url:"contract.purchase_product/index",method:"post",data:{page:t.current,limit:t.size,purchase_id:t.purchase_id}}).then((function(e){return e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count,e.data.records=e.data,console.log(e,22222,e.data),e}))}function n(t){return Object(c["b"])({url:"contract.purchase_product/add",method:"post",data:t})}function a(t){return Object(c["b"])({url:"contract.purchase_product/edit",method:"post",data:t})}function u(t){return Object(c["b"])({url:"contract.purchase_product/delete",method:"post",data:{id:t}})}function d(){return Object(c["b"])({url:"/select/cascadeData",method:"get"})}}}]);