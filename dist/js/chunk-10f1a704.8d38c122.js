(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10f1a704","chunk-2d20ee04","chunk-2d0c80c0"],{"2b94":function(t,e,o){},"52e2":function(t,e,o){"use strict";o.r(e),o.d(e,"crudOptions",(function(){return n}));var n=function(t){return{pageOptions:{compact:!1},searchOptions:{show:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12,appendToBody:!0},columns:[{title:"报价单id",key:"offer_id",type:"text",disabled:!0,form:{component:{value:t.offerGuid,readonly:!0,show:!1}}},{title:"沟通内容",key:"connect_content",type:"text"},{title:"沟通结果",key:"connect_result"},{title:"沟通日期",key:"connect_date",type:"datetime",width:80,form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}}]}}},aaa2:function(t,e,o){"use strict";var n=o("2b94"),c=o.n(n);c.a},b0dd:function(t,e,o){"use strict";o.r(e),o.d(e,"GetList",(function(){return c})),o.d(e,"AddObj",(function(){return r})),o.d(e,"UpdateObj",(function(){return a})),o.d(e,"DelObj",(function(){return i})),o.d(e,"GetCascadeData",(function(){return u}));var n=o("22ce");function c(t){return console.log(t,888222),Object(n["b"])({url:"project.offer_connect/index",method:"post",data:{page:t.current,limit:t.size,offer_guid:t.offer_guid}}).then((function(e){console.log(e,9999,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var o=e.data;for(var n in o)delete o[n].create_time,delete o[n].update_time,delete o[n].delete_time;return e.data.records=o,e}))}function r(t){return Object(n["b"])({url:"project.offer_connect/add",method:"post",data:t})}function a(t){return Object(n["b"])({url:"project.offer_connect/edit",method:"post",data:t})}function i(t){return Object(n["b"])({url:"project.offer_connect/delete",method:"post",data:{id:t}})}function u(){return Object(n["b"])({url:"/select/cascadeData",method:"get"})}},f593:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.communicationDialog?o("div",{staticClass:"productdetailBox"},[o("div",{staticClass:"productDetail"},[o("div",{staticClass:"dialog-header"},[o("h2",[t._v("沟通记录")]),o("div",{staticClass:"close"},[o("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[o("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),o("d2-container",{class:{"page-compact":t.crud.pageOptions.compact},attrs:{type:"ghost"}},[o("d2-crud-x",t._g(t._b({ref:"d2Crud"},"d2-crud-x",t._crudProps,!1),t._crudListeners),[o("div",{attrs:{slot:"header"},slot:"header"},[o("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),o("el-button-group",[o("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[o("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),o("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns,storage:"productDetail"},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)])],1)],1)]):t._e()},c=[],r=o("b0dd"),a=o("52e2"),i=o("1fbf"),u={name:"communication",mixins:[i["d2CrudPlus"].crud],data:function(){return{communicationDialog:!0,offer_guid:null}},props:["offerGuid"],methods:{getCrudOptions:function(){return Object(a["crudOptions"])(this)},pageRequest:function(t){return t.offer_guid=this.offerGuid,console.log(777222,t.offer_guid,this.offerGuid),r["GetList"](t)},addRequest:function(t){return console.log("api",r,t),r["AddObj"](t)},updateRequest:function(t){return console.log("----",t),r["UpdateObj"](t)},delRequest:function(t){return r["DelObj"](t.id)},close:function(){this.communicationDialog=!1,this.$emit("closeCommunicationDialog")},doLoad:function(){}},mounted:function(){this.doRefresh()},watch:{}},d=u,s=(o("aaa2"),o("2877")),l=Object(s["a"])(d,n,c,!1,null,"20051a6e",null);e["default"]=l.exports}}]);