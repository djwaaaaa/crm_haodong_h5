(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb1180c6","chunk-2d0ba4f9","chunk-2d0b347f"],{2869:function(e,t,r){"use strict";r.r(t),r.d(t,"crudOptions",(function(){return a}));var n=r("22ce"),a=function(e){return{rowHandle:{fixed:"right",edit:{thin:!0,text:null,disabled:function(){return!e.hasPermissions("credit.receivable/edit")}},remove:{thin:!0,text:null,disabled:function(){return!e.hasPermissions("credit.receivable/delete")}}},pageOptions:{compact:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12},columns:[{title:"项目名称",key:"project_code",width:150,search:{show:!0},type:"select",dict:{url:"/dicts/getProjectList",getData:function(e,t){return Object(n["b"])({url:"project/getProjectList",method:"post"}).then((function(e){for(var t=e.data,r=[{value:null,label:"请选择"}],n=0;n<t.length;n++)r.push({value:t[n].project_code,label:t[n].project_name});return r}))}},form:{rules:[{required:!0,message:"请选择项目"}],component:{value:null}}},{title:"合同编号",key:"contract_code",width:100,search:{show:!0},type:"select",dict:{url:"/dicts/getSaleList",getData:function(e,t){return Object(n["b"])({url:"contract.sale/getSaleList",method:"post"}).then((function(e){for(var t=e.data,r=[{value:null,label:"请选择"}],n=0;n<t.length;n++)r.push({value:t[n].contract_code,label:t[n].contract_code});return r}))}},form:{rules:[{required:!0,message:"请选择合同编号"}],component:{value:null}}},{title:"收款方式",key:"pay_type",type:"select",width:80,dict:{data:[{value:1,label:"现金"},{value:2,label:"银行转账"},{value:3,label:"汇款"},{value:4,label:"支票"},{value:5,label:"本票"}]}},{title:"客户名称",key:"company",type:"text"},{title:"合同生效日期",key:"sign_date",type:"date",width:100,form:{component:{props:{valueFormat:"yyyy-MM-dd"}}}},{title:"合同终止日期",key:"delivery_date",type:"date",width:100,form:{component:{props:{valueFormat:"yyyy-MM-dd"}}}},{title:"账款状态",key:"account_status",type:"select",width:120,dict:{data:[{value:1,label:"合同期内未结清"},{value:2,label:"已过合同期未结清"},{value:3,label:"已结清"}]},search:{show:!0}},{title:"合同金额",key:"contract_price",type:"text"},{title:"已收金额",key:"received_price",type:"text"},{title:"未收金额",key:"uncollected_price",type:"text"},{title:"收款明细",key:"detail",type:"textarea"},{title:"备注",key:"remark",width:500,type:"text-area",viewForm:{component:{name:null,render:function(e,t){return e("div",[t.value])}}}}]}}},3754:function(e,t,r){"use strict";r.r(t),r.d(t,"GetList",(function(){return a})),r.d(t,"AddObj",(function(){return c})),r.d(t,"UpdateObj",(function(){return o})),r.d(t,"DelObj",(function(){return u})),r.d(t,"GetCascadeData",(function(){return i}));var n=r("22ce");function a(e){return Object(n["b"])({url:"credit.receivable/index",method:"post",data:{page:e.current,limit:e.size}}).then((function(t){return console.log(t,9999,t.data),t.data=t.data?t.data:{},t.data.current=e.current,t.data.size=e.size,t.data.total=t.count,t.data.records=t.data,t}))}function c(e){return Object(n["b"])({url:"credit.receivable/add",method:"post",data:e})}function o(e){return Object(n["b"])({url:"credit.receivable/edit",method:"post",data:e})}function u(e){return Object(n["b"])({url:"credit.receivable/delete",method:"post",data:{id:e}})}function i(){return Object(n["b"])({url:"/select/cascadeData",method:"get"})}},"5fb2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("d2-container",{class:{"page-compact":e.crud.pageOptions.compact}},[r("template",{slot:"header"},[e._v("应收结算")]),r("d2-crud-x",e._g(e._b({ref:"d2Crud"},"d2-crud-x",e._crudProps,!1),e._crudListeners),[r("div",{attrs:{slot:"header"},slot:"header"},[r("crud-search",{ref:"search",attrs:{options:e.crud.searchOptions},on:{submit:e.handleSearch}}),r("el-button-group",[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"credit.receivable/add",expression:"'credit.receivable/add'"}],attrs:{size:"small",type:"primary"},on:{click:e.addRow}},[r("i",{staticClass:"el-icon-plus"}),e._v(" 新增")])],1),r("crud-toolbar",{attrs:{search:e.crud.searchOptions.show,compact:e.crud.pageOptions.compact,columns:e.crud.columns},on:{"update:search":function(t){return e.$set(e.crud.searchOptions,"show",t)},"update:compact":function(t){return e.$set(e.crud.pageOptions,"compact",t)},refresh:function(t){return e.doRefresh()},"columns-filter-changed":e.handleColumnsFilterChanged}})],1)])],2)},a=[],c=r("3754"),o=r("2869"),u=r("1fbf"),i={name:"formSelect",mixins:[u["d2CrudPlus"].crud],data:function(){return{}},methods:{getCrudOptions:function(){return Object(o["crudOptions"])(this)},pageRequest:function(e){return c["GetList"](e)},addRequest:function(e){return console.log("api",c),c["AddObj"](e)},updateRequest:function(e){return console.log("----",e),c["UpdateObj"](e)},delRequest:function(e){return c["DelObj"](e.id)}}},l=i,d=r("2877"),s=Object(d["a"])(l,n,a,!1,null,null,null);t["default"]=s.exports}}]);