(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57223dd9","chunk-174b5493","chunk-144855b6","chunk-7ee1e1c9","chunk-2d230beb","chunk-2d20ee04","chunk-2d0c80c0","chunk-2d217498","chunk-2d0c0cb2","chunk-2d2073a7"],{"28d4":function(t,e,o){},"42fd":function(t,e,o){"use strict";o.r(e),o.d(e,"crudOptions",(function(){return n}));var n=function(t){return{rowHandle:{fixed:"right",edit:{thin:!0,disabled:function(){return!t.hasPermissions("project.offer_product/edit")}},remove:{thin:!0,disabled:function(){return!t.hasPermissions("project.offer_product/delete")}}},pageOptions:{compact:!1},searchOptions:{show:!1},options:{height:"300px",highlightCurrentRow:!0,rowKey:"id"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12,appendToBody:!0},columns:[{title:"ID",key:"id",width:60,sortable:!0,form:{disabled:!0}},{title:"报价单id",key:"offer_id",type:"text",disabled:!0,form:{component:{value:t.offerGuid,readonly:!0,show:!1}}},{title:"物料编码",key:"matter_code",type:"text"},{title:"产品名称",key:"product_name",type:"text"},{title:"产品大类名称",key:"class_name",type:"text"},{title:"规格",key:"specs_value",type:"text",width:200},{title:"图号",key:"product_draw",type:"text"},{title:"开票名称",key:"billing_name",type:"text"},{title:"价格",key:"price",type:"text"},{title:"单位",key:"unit",type:"text"},{title:"数量",key:"count",type:"text"},{title:"简单描述",key:"explain",type:"text-area",width:400,form:{component:{span:24}}},{title:"复杂描述",key:"describe",type:"text-area",width:400}]}}},"52e2":function(t,e,o){"use strict";o.r(e),o.d(e,"crudOptions",(function(){return n}));var n=function(t){return{pageOptions:{compact:!1},rowHandle:{edit:{thin:!0,disabled:function(){return!t.hasPermissions("project.offer_connect/edit")}},remove:{thin:!0,disabled:function(){return!t.hasPermissions("project.offer_connect/delete")}}},searchOptions:{show:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12,appendToBody:!0},columns:[{title:"报价单id",key:"offer_id",type:"text",disabled:!0,form:{component:{value:t.offerGuid,readonly:!0,show:!1}}},{title:"沟通日期",key:"connect_date",type:"datetime",width:140,form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}},{title:"沟通内容",key:"connect_content",type:"text-area"},{title:"沟通结果",key:"connect_result",type:"text-area"}]}}},"5b20":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("d2-container",{class:{"page-compact":t.crud.pageOptions.compact}},[o("template",{slot:"header"},[t._v("报价管理")]),o("d2-crud-x",t._g(t._b({ref:"d2Crud",on:{"form-data-change":t.handleFormDataChange,productDetail:t.getProductDetail,recordCommunication:t.getRecordCommunication}},"d2-crud-x",t._crudProps,!1),t._crudListeners),[o("div",{attrs:{slot:"header"},slot:"header"},[o("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),o("el-button-group",[o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"project.offer/add",expression:"'project.offer/add'"}],attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[o("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),o("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)]),t.dialogShow?o("product-Detail",{ref:"dialog",attrs:{offerGuid:t.offer_guid,productDetail:t.productDetail},on:{closeProductDetail:t.closeProductDetail}}):t._e(),t.commShow?o("communication",{ref:"comm",attrs:{offerGuid:t.offer_guid,productDetail:t.productDetail},on:{closeCommunicationDialog:t.closeCommunicationDialog}}):t._e(),t.listDialogShow?o("list-Dialog",{ref:"listDialogRef",attrs:{listDialogShow:t.listDialogShow},on:{changeItemName:t.changeItemName}}):t._e()],2)},r=[],c=(o("b0c0"),o("ee1f")),i=o("a046"),a=o("1fbf"),s=o("22ce"),d=o("70de"),u=o("f593"),l=o("db2e"),p={name:"formSelect",mixins:[a["d2CrudPlus"].crud],components:{productDetail:d["default"],communication:u["default"],listDialog:l["default"]},data:function(){return{dialogShow:!1,commShow:!1,listDialogShow:!1,offer_guid:null,productDetail:null,itemName:"123",projectList:[]}},methods:{initAfter:function(){},handleFormDataChange:function(t){t.key,t.value},getCrudOptions:function(){return Object(i["crudOptions"])(this)},pageRequest:function(t){return c["GetList"](t)},addRequest:function(t){return c["AddObj"](t)},updateRequest:function(t){return c["UpdateObj"](t)},delRequest:function(t){return c["DelObj"](t.id)},getProductDetail:function(t,e){var o=this,n=(t.index,t.row);this.offer_guid=n.id,this.productDetail=n,this.dialogShow=!0,this.$nextTick((function(){o.$refs.dialog.productDialog=!0}))},getRecordCommunication:function(t,e){var o=this,n=t.index,r=t.row;console.log(n,7777,r),this.offer_guid=r.id,this.commShow=!0,this.$nextTick((function(){o.$refs.comm.communicationDialog=!0}))},nestIdSelected:function(t,e){console.log("nestIdSelected",t,e),this.$emit("selected",t),e.nestId=t.id,this.currentNestName=t.name},closeCommunicationDialog:function(){this.commShow=!1},closeProductDetail:function(){this.dialogShow=!1},chooseList:function(){this.itemName="就是你"},changeItemName:function(t){this.itemName="就是你",this.crud.addTemplate.project_name.value="777777"},getProjectList:function(t){return Object(s["b"])({url:"project/getProjectList",method:"post",data:{kw:t}}).then((function(t){console.log(t.data,333);for(var e=t.data,o=[{value:"",label:"请选择"}],n=0;n<e.length;n++)o.push({value:e[n].project_name,label:e[n].project_name});console.log(o)}))}},mounted:function(){this.getProjectList()},watch:{itemName:function(){this.getCrudOptions()}}},f=p,m=o("2877"),h=Object(m["a"])(f,n,r,!1,null,null,null);e["default"]=h.exports},"70de":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.productDialog?o("div",{staticClass:"productdetailBox"},[o("div",{staticClass:"productDetail"},[o("div",{staticClass:"dialog-header"},[o("h2",[t._v("产品详情")]),o("div",{staticClass:"close"},[o("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[o("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),o("div",{staticClass:"dialog-content"},[o("ul",t._l(t.productDetail,(function(e,n){return o("li",{key:n},[o("p",{staticClass:"first"},[t._v(t._s(t.detailKey[n])+":")]),o("p",[t._v(t._s(e))])])})),0)]),o("d2-container",{class:{"page-compact":t.crud.pageOptions.compact},attrs:{type:"ghost"}},[o("d2-crud-x",t._g(t._b({ref:"d2Crud"},"d2-crud-x",t._crudProps,!1),t._crudListeners),[o("div",{attrs:{slot:"header"},slot:"header"},[o("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),o("el-button-group",[o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"project.offer_product/add",expression:"'project.offer_product/add'"}],attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[o("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),o("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns,storage:"productDetail"},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)])],1)],1)]):t._e()},r=[],c=o("c5a1"),i=o("42fd"),a=o("1fbf"),s={name:"productDetail",mixins:[a["d2CrudPlus"].crud],data:function(){return{productDialog:!0,offer_guid:null,detailKey:{id:"id",offer_date:"报价日期",project_code:"项目编号",project_name:"项目名称",project_date:"项目创建时间",offer_guid:"报价单guid",offer_draw:"报价编号",offer_company:"报价单位",contacts_name:"报价人",contacts_phone:"报价人电话",contacts_email:"报价人邮箱",customer_company:"客户公司",customer_contacts:"联系人",customer_phone:"联系电话",customer_email:"邮箱",project_price:"项目总价"},code:"lalala"}},props:["offerGuid","productDetail"],methods:{getCrudOptions:function(){return Object(i["crudOptions"])(this)},pageRequest:function(t){return t.offer_guid=this.offerGuid,console.log(777,t.offer_guid,this.offerGuid),c["GetList"](t)},addRequest:function(t){return console.log("api",c),c["AddObj"](t)},updateRequest:function(t){return console.log("----",t),c["UpdateObj"](t)},delRequest:function(t){return c["DelObj"](t.id)},close:function(){this.productDialog=!1,this.$emit("closeProductDetail")},doLoad:function(){}},mounted:function(){this.doRefresh()},watch:{}},d=s,u=(o("a415"),o("2877")),l=Object(u["a"])(d,n,r,!1,null,"5f865f5c",null);e["default"]=l.exports},"80ec":function(t,e,o){},a046:function(t,e,o){"use strict";o.r(e),o.d(e,"crudOptions",(function(){return r}));var n=o("22ce"),r=function(t){return{rowHandle:{fixed:"right",width:340,custom:[{text:"产品明细",type:"success",size:"small",emit:"productDetail",disabled:function(){return!t.hasPermissions("project.offer_product/index")}},{text:"沟通",type:"primary",size:"small",emit:"recordCommunication",disabled:function(){return!t.hasPermissions("project.offer_connect/index")}}],view:{show:function(t,e){return!1}},edit:{thin:!0,disabled:function(){return!t.hasPermissions("project.offer/edit")}},remove:{thin:!0,disabled:function(){return!t.hasPermissions("project.offer/delete")}}},pageOptions:{compact:!1},options:{height:"100%",events:{"expand-change":function(t){console.log(t,6666e3)}}},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12},columns:[{title:"ID",key:"id",width:60,sortable:!0,form:{disabled:!0}},{title:"报价日期",key:"offer_date",type:"datetime",width:140,form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}},{title:"项目编号",key:"project_code",sortable:!0,width:120,search:{show:!0},type:"text"},{title:"项目名称",key:"project_name",width:200,search:{show:!0,component:{props:{elProps:{}}}},type:"select",dict:{url:"/dicts/getProjectList",getData:function(t,e){return Object(n["b"])({url:"project/getProjectList",method:"post"}).then((function(t){for(var e=t.data,o=[{value:"",label:"请选择"}],n=0;n<e.length;n++)o.push({value:e[n].project_name,label:e[n].project_name});return o}))}},form:{component:{value:"",on:{focus:function(t){console.log(t,9999)},blur:function(t){console.log(t,9999222)},change:function(t){console.log(t,1234560)}}}}},{title:"项目创建时间",key:"project_date",type:"datetime",width:140,form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}},{title:"报价编号",key:"offer_draw",type:"text",width:120,search:{show:!0}},{title:"报价单位",key:"offer_company",type:"text",width:210},{title:"报价人",key:"contacts_name",type:"text"},{title:"报价人电话",key:"contacts_phone",type:"text",width:100},{title:"报价人邮箱",key:"contacts_email",type:"text",width:100},{title:"客户公司",key:"customer_company",type:"text",width:200,search:{show:!0}},{title:"联系人",key:"customer_contacts",type:"text"},{title:"联系电话",key:"customer_phone",type:"text",width:100},{title:"邮箱",key:"customer_email",type:"text",width:100},{title:"项目总价",key:"project_price",type:"text"}]}}},a415:function(t,e,o){"use strict";var n=o("a72c"),r=o.n(n);r.a},a72c:function(t,e,o){},b0dd:function(t,e,o){"use strict";o.r(e),o.d(e,"GetList",(function(){return r})),o.d(e,"AddObj",(function(){return c})),o.d(e,"UpdateObj",(function(){return i})),o.d(e,"DelObj",(function(){return a})),o.d(e,"GetCascadeData",(function(){return s}));var n=o("22ce");function r(t){return console.log(t,888222),Object(n["b"])({url:"project.offer_connect/index",method:"post",data:{page:t.current,limit:t.size,offer_guid:t.offer_guid}}).then((function(e){console.log(e,9999,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var o=e.data;for(var n in o)delete o[n].create_time,delete o[n].update_time,delete o[n].delete_time;return e.data.records=o,e}))}function c(t){return Object(n["b"])({url:"project.offer_connect/add",method:"post",data:t})}function i(t){return Object(n["b"])({url:"project.offer_connect/edit",method:"post",data:t})}function a(t){return Object(n["b"])({url:"project.offer_connect/delete",method:"post",data:{id:t}})}function s(){return Object(n["b"])({url:"/select/cascadeData",method:"get"})}},c5a1:function(t,e,o){"use strict";o.r(e),o.d(e,"GetList",(function(){return r})),o.d(e,"AddObj",(function(){return c})),o.d(e,"UpdateObj",(function(){return i})),o.d(e,"DelObj",(function(){return a})),o.d(e,"GetCascadeData",(function(){return s}));var n=o("22ce");function r(t){return console.log(t,888),Object(n["b"])({url:"project.offer_product/index",method:"post",data:{page:t.current,limit:t.size,offer_guid:t.offer_guid}}).then((function(e){console.log(e,9999,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var o=e.data;for(var n in o)delete o[n].requirementl,delete o[n].color,delete o[n].create_time,delete o[n].update_time,delete o[n].delete_time;return e.data.records=o,e}))}function c(t){return Object(n["b"])({url:"project.offer_product/add",method:"post",data:t})}function i(t){return Object(n["b"])({url:"project.offer_product/edit",method:"post",data:t})}function a(t){return Object(n["b"])({url:"project.offer_product/delete",method:"post",data:{id:t}})}function s(){return Object(n["b"])({url:"/select/cascadeData",method:"get"})}},d61d:function(t,e,o){"use strict";var n=o("80ec"),r=o.n(n);r.a},db2e:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.listDialog?o("div",{staticClass:"productdetailBox"},[o("div",{staticClass:"productDetail"},[o("div",{staticClass:"dialog-header"},[o("h2",[t._v("项目名称")]),o("div",{staticClass:"close"},[o("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[o("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),o("div",{staticClass:"dialog-content"},[o("ul",t._l(t.itemList,(function(e,n){return o("li",{key:n,on:{click:function(o){return t.chooseItem(e)}}},[t._v(" "+t._s(e.project_name)+" ")])})),0)])])]):t._e()},r=[],c=o("22ce"),i={name:"productDetail",data:function(){return{listDialog:!0,productDialog:!0,itemList:null,item:null}},props:["itemName","listDialogShow","changeItemName"],methods:{getProjectList:function(t){var e=this;return Object(c["b"])({url:"project/getProjectList",method:"post",data:{kw:t}}).then((function(t){e.itemList=t.data}))},chooseItem:function(t){console.log(2),this.item=t,this.$emit("changeItemName",t.project_name),this.close()},close:function(){this.listDialog=!1}},mounted:function(){this.getProjectList()},watch:{}},a=i,s=(o("d61d"),o("2877")),d=Object(s["a"])(a,n,r,!1,null,"1e739f1a",null);e["default"]=d.exports},df05:function(t,e,o){"use strict";var n=o("28d4"),r=o.n(n);r.a},ee1f:function(t,e,o){"use strict";o.r(e),o.d(e,"GetList",(function(){return r})),o.d(e,"AddObj",(function(){return c})),o.d(e,"UpdateObj",(function(){return i})),o.d(e,"DelObj",(function(){return a})),o.d(e,"GetCascadeData",(function(){return s}));var n=o("22ce");function r(t){return console.log(t,888),Object(n["b"])({url:"project.offer/index",method:"post",data:{page:t.current,limit:t.size,offer_draw:t.offer_draw,project_name:t.project_name,project_code:t.project_code,customer_company:t.customer_company}}).then((function(e){console.log(e,9999,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var o=e.data;for(var n in o)delete o[n].province,delete o[n].customer_qq,delete o[n].customer_wechat,delete o[n].create_time,delete o[n].update_time,delete o[n].delete_time;return e.data.records=o,console.log(e,"res"),e}))}function c(t){return Object(n["b"])({url:"project.offer/add",method:"post",data:t})}function i(t){return Object(n["b"])({url:"project.offer/edit",method:"post",data:t})}function a(t){return Object(n["b"])({url:"project.offer/delete",method:"post",data:{id:t}})}function s(){return Object(n["b"])({url:"/select/cascadeData",method:"get"})}},f593:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.communicationDialog?o("div",{staticClass:"productdetailBox"},[o("div",{staticClass:"productDetail"},[o("div",{staticClass:"dialog-header"},[o("h2",[t._v("沟通记录")]),o("div",{staticClass:"close"},[o("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[o("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),o("d2-container",{class:{"page-compact":t.crud.pageOptions.compact},attrs:{type:"ghost"}},[o("d2-crud-x",t._g(t._b({ref:"d2Crud"},"d2-crud-x",t._crudProps,!1),t._crudListeners),[o("div",{attrs:{slot:"header"},slot:"header"},[o("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),o("el-button-group",[o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"project.offer_connect/add",expression:"'project.offer_connect/add'"}],attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[o("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),o("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns,storage:"productDetail"},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)])],1)],1)]):t._e()},r=[],c=o("b0dd"),i=o("52e2"),a=o("1fbf"),s={name:"communication",mixins:[a["d2CrudPlus"].crud],data:function(){return{communicationDialog:!0,offer_guid:null}},props:["offerGuid"],methods:{getCrudOptions:function(){return Object(i["crudOptions"])(this)},pageRequest:function(t){return t.offer_guid=this.offerGuid,console.log(777222,t.offer_guid,this.offerGuid),c["GetList"](t)},addRequest:function(t){return console.log("api",c,t),c["AddObj"](t)},updateRequest:function(t){return console.log("----",t),c["UpdateObj"](t)},delRequest:function(t){return c["DelObj"](t.id)},close:function(){this.communicationDialog=!1,this.$emit("closeCommunicationDialog")},doLoad:function(){}},mounted:function(){this.doRefresh()},watch:{}},d=s,u=(o("df05"),o("2877")),l=Object(u["a"])(d,n,r,!1,null,"4dad98d8",null);e["default"]=l.exports}}]);