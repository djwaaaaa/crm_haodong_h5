(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c730def4","chunk-2d20fe69","chunk-2d0c06f5"],{2446:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",{class:{"page-compact":t.crud.pageOptions.compact}},[a("template",{slot:"header"},[t._v("应付结算")]),a("d2-crud-x",t._g(t._b({ref:"d2Crud"},"d2-crud-x",t._crudProps,!1),t._crudListeners),[a("div",{attrs:{slot:"header"},slot:"header"},[a("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),a("el-button-group",[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[a("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),a("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)])],2)},n=[],c=a("b632"),o=a("4289"),d=a("1fbf"),u={name:"formSelect",mixins:[d["d2CrudPlus"].crud],data:function(){return{}},methods:{getCrudOptions:function(){return Object(o["crudOptions"])(this)},pageRequest:function(t){return c["GetList"](t)},addRequest:function(t){return console.log("api",c),c["AddObj"](t)},updateRequest:function(t){return console.log("----",t),c["UpdateObj"](t)},delRequest:function(t){return c["DelObj"](t.id)}}},i=u,l=a("2877"),s=Object(l["a"])(i,r,n,!1,null,null,null);e["default"]=s.exports},4289:function(t,e,a){"use strict";a.r(e),a.d(e,"crudOptions",(function(){return r}));var r=function(t){return{rowHandle:{fixed:"right"},pageOptions:{compact:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12},columns:[{title:"项目编号",key:"project_code",sortable:!0,type:"text",search:{show:!0},width:120,form:{disabled:!0}},{title:"项目名称",key:"project_name",type:"text",form:{disabled:!0}},{title:"合同编号",key:"contract_code",search:{show:!0},sortable:!0,type:"text",width:100},{title:"付款方式",key:"pay_type",type:"select",width:80,dict:{data:[{value:1,label:"现金"},{value:2,label:"银行转账"},{value:3,label:"汇款"},{value:4,label:"支票"},{value:5,label:"本票"}]}},{title:"供方公司",key:"company",type:"text"},{title:"合同签订日期",key:"sign_date",type:"date",width:100,form:{component:{props:{valueFormat:"yyyy-MM-dd"}}}},{title:"合同终止日期",key:"end_date",type:"date",width:100,form:{component:{props:{valueFormat:"yyyy-MM-dd"}}}},{title:"账款状态",key:"account_status",type:"select",width:120,dict:{data:[{value:1,label:"合同期内未结清"},{value:2,label:"已过合同期未结清"},{value:3,label:"已结清"}]},search:{show:!0}},{title:"合同金额",key:"contract_price",type:"text"},{title:"已付金额",key:"paid_price",type:"text"},{title:"未付金额",key:"unpaid_price",type:"text"},{title:"收款明细",key:"detail",type:"textarea"},{title:"备注",key:"remark",type:"textarea"}]}}},b632:function(t,e,a){"use strict";a.r(e),a.d(e,"GetList",(function(){return n})),a.d(e,"AddObj",(function(){return c})),a.d(e,"UpdateObj",(function(){return o})),a.d(e,"DelObj",(function(){return d})),a.d(e,"GetCascadeData",(function(){return u}));var r=a("22ce");function n(t){return Object(r["b"])({url:"credit.payable/index",method:"post",data:{page:t.current,limit:t.size}}).then((function(e){return console.log(e,9999,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count,e.data.records=e.data,e}))}function c(t){return Object(r["b"])({url:"credit.payable/add",method:"post",data:t})}function o(t){return Object(r["b"])({url:"credit.payable/edit",method:"post",data:t})}function d(t){return Object(r["b"])({url:"credit.payable/delete",method:"post",data:{id:t}})}function u(){return Object(r["b"])({url:"/select/cascadeData",method:"get"})}}}]);