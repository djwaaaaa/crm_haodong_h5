(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79f3e61e","chunk-2d0deb32","chunk-2d230817"],{"0fdd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",{class:{"page-compact":t.crud.pageOptions.compact}},[n("template",{slot:"header"},[t._v("发票")]),n("d2-crud-x",t._g(t._b({ref:"d2Crud"},"d2-crud-x",t._crudProps,!1),t._crudListeners),[n("div",{attrs:{slot:"header"},slot:"header"},[n("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),n("el-button-group",[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[n("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),n("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)])],2)},a=[],c=n("8785"),u=n("ed24"),d=n("1fbf"),o={name:"formSelect",mixins:[d["d2CrudPlus"].crud],data:function(){return{}},methods:{getCrudOptions:function(){return Object(u["crudOptions"])(this)},pageRequest:function(t){return c["GetList"](t)},addRequest:function(t){return console.log("api",c),c["AddObj"](t)},updateRequest:function(t){return console.log("----",t),c["UpdateObj"](t)},delRequest:function(t){return c["DelObj"](t.id)}}},i=o,s=n("2877"),l=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=l.exports},8785:function(t,e,n){"use strict";n.r(e),n.d(e,"GetList",(function(){return a})),n.d(e,"AddObj",(function(){return c})),n.d(e,"UpdateObj",(function(){return u})),n.d(e,"DelObj",(function(){return d})),n.d(e,"GetCascadeData",(function(){return o}));var r=n("22ce");function a(t){return Object(r["b"])({url:"credit.invoice/index",method:"post",data:{page:t.current,limit:t.size}}).then((function(e){return console.log(e,9999,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count,e.data.records=e.data,e}))}function c(t){return Object(r["b"])({url:"credit.invoice/add",method:"post",data:t})}function u(t){return Object(r["b"])({url:"credit.invoice/edit",method:"post",data:t})}function d(t){return Object(r["b"])({url:"credit.invoice/delete",method:"post",data:{id:t}})}function o(){return Object(r["b"])({url:"/select/cascadeData",method:"get"})}},ed24:function(t,e,n){"use strict";n.r(e),n.d(e,"crudOptions",(function(){return a}));var r=n("22ce"),a=function(t){return{rowHandle:{fixed:"right"},pageOptions:{compact:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12},columns:[{title:"发票类型",key:"invoice_type",sortable:!0,type:"select",width:120,dict:{data:[{value:1,label:"增值税专用发票"},{value:2,label:"增值税普通发票"},{value:3,label:"普通发票"}]},form:{rules:[{required:!0,message:"请选择发票类型"}]}},{title:"销售合同编号",key:"contract_code",width:100,search:{show:!0},type:"select",dict:{url:"/dicts/getSaleList",getData:function(t,e){return Object(r["b"])({url:"contract.sale/getSaleList",method:"post"}).then((function(t){for(var e=t.data,n=[{value:null,label:"请选择"}],r=0;r<e.length;r++)n.push({value:e[r].contract_code,label:e[r].contract_code});return n}))}},form:{rules:[{required:!0,message:"请选择销售合同编号"}]}},{title:"申请人",key:"admin_id",width:100,search:{show:!0},type:"select",dict:{url:"/dicts/getAdminList",getData:function(t,e){return Object(r["b"])({url:"system.admin/getAdminList",method:"post"}).then((function(t){for(var e=t.data,n=[{value:null,label:"请选择"}],r=0;r<e.length;r++)n.push({value:e[r].id,label:e[r].realname});return n}))}},form:{rules:[{required:!0,message:"请选择申请人"}],component:{value:null}}},{title:"发票内容",key:"invoice_content",type:"text"},{title:"发票金额",key:"invoice_price",type:"text"},{title:"状态",key:"status",type:"select",dict:{data:[{value:1,label:"申请中"},{value:2,label:"已通过"},{value:3,label:"已驳回"}]}},{title:"申请时间",key:"add_date",type:"datetime",width:150,form:{disabled:!0}},{title:"处理时间",key:"handle_date",type:"datetime",width:150,form:{disabled:!0}}]}}}}]);