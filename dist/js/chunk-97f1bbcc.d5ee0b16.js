(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97f1bbcc","chunk-10f1a704","chunk-5cd789ee","chunk-145c2c1e","chunk-2d230beb","chunk-2d20ee04","chunk-2d0c80c0","chunk-2d217498","chunk-2d0c0cb2","chunk-2d2073a7"],{"2b94":function(t,e,o){},"2e0c":function(t,e,o){},"42fd":function(t,e,o){"use strict";o.r(e),o.d(e,"crudOptions",(function(){return c}));var c=function(t){return{rowHandle:{fixed:"right"},pageOptions:{compact:!1},searchOptions:{show:!1},options:{height:"300px",highlightCurrentRow:!0,rowKey:"id"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12,appendToBody:!0},columns:[{title:"ID",key:"id",width:60,sortable:!0,form:{disabled:!0}},{title:"报价单guid",key:"offer_guid",sortable:!0,form:{component:{value:t.offerGuid,readonly:!0,show:!1,on:{focus:function(t){t.props.value="666",console.log(t,9999)}}}},type:"text",width:150},{title:"物料编码",key:"matter_code",type:"text"},{title:"产品名称",key:"product_name",type:"text"},{title:"产品大类名称",key:"class_name",type:"text"},{title:"规格",key:"specs_value",type:"text",width:200},{title:"图号",key:"product_draw",type:"text"},{title:"开票名称",key:"billing_name",type:"text"},{title:"价格",key:"price",type:"text"},{title:"单位",key:"unit",type:"text"},{title:"数量",key:"count",type:"text"},{title:"简单描述",key:"explain",type:"text",width:400},{title:"复杂描述",key:"describe",type:"text",width:400},{title:"项目日期",key:"project_date",type:"datetime",form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}}]}}},"52e2":function(t,e,o){"use strict";o.r(e),o.d(e,"crudOptions",(function(){return c}));var c=function(t){return{pageOptions:{compact:!1},searchOptions:{show:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12},columns:[{title:"报价单guid",key:"offer_guid",sortable:!0,search:{show:!0},form:{component:{value:t.offerGuid,readonly:!0,show:!1}},width:150},{title:"沟通内容",key:"connect_content",type:"text"},{title:"沟通结果",key:"connect_result"},{title:"沟通日期",key:"connect_date",type:"datetime",width:80,form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}}]}}},"5b20":function(t,e,o){"use strict";o.r(e);var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("d2-container",{class:{"page-compact":t.crud.pageOptions.compact}},[o("template",{on:{click:t.chooseList},slot:"header"},[t._v("报价管理")]),o("d2-crud-x",t._g(t._b({ref:"d2Crud",on:{productDetail:t.getProductDetail,recordCommunication:t.getRecordCommunication}},"d2-crud-x",t._crudProps,!1),t._crudListeners),[o("div",{attrs:{slot:"header"},slot:"header"},[o("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),o("el-button-group",[o("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[o("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),o("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)]),t.dialogShow?o("product-Detail",{ref:"dialog",attrs:{offerGuid:t.offer_guid,productDetail:t.productDetail},on:{closeProductDetail:t.closeProductDetail}}):t._e(),t.commShow?o("communication",{ref:"comm",attrs:{offerGuid:t.offer_guid},on:{closeCommunicationDialog:t.closeCommunicationDialog}}):t._e(),t.listDialogShow?o("list-Dialog",{ref:"listDialogRef",attrs:{changeItemName:t.changeItemName,listDialogShow:t.listDialogShow}}):t._e()],2)},n=[],i=(o("b0c0"),o("ee1f")),r=o("a046"),a=o("1fbf"),s=(o("22ce"),o("70de")),u=o("f593"),d=o("db2e"),l={name:"formSelect",mixins:[a["d2CrudPlus"].crud],components:{productDetail:s["default"],communication:u["default"],listDialog:d["default"]},data:function(){return{dialogShow:!1,commShow:!1,listDialogShow:!1,offer_guid:null,productDetail:null,itemName:""}},methods:{getCrudOptions:function(){return Object(r["crudOptions"])(this)},pageRequest:function(t){return i["GetList"](t)},addRequest:function(t){return console.log("api",i),i["AddObj"](t)},updateRequest:function(t){return console.log("----",t),i["UpdateObj"](t)},delRequest:function(t){return i["DelObj"](t.id)},getProductDetail:function(t,e){var o=this,c=(t.index,t.row);this.offer_guid=c.offer_guid,this.productDetail=c,this.dialogShow=!0,this.$nextTick((function(){o.$refs.dialog.productDialog=!0}))},getRecordCommunication:function(t,e){var o=this,c=t.index,n=t.row;console.log(c,7777,n),this.offer_guid=n.offer_guid,this.commShow=!0,this.$nextTick((function(){o.$refs.comm.communicationDialog=!0}))},nestIdSelected:function(t,e){console.log("nestIdSelected",t,e),this.$emit("selected",t),e.nestId=t.id,this.currentNestName=t.name},closeCommunicationDialog:function(){this.commShow=!1},closeProductDetail:function(){this.dialogShow=!1},chooseList:function(){var t=this;console.log(123456),this.listDialogShow=!0,this.$nextTick((function(){t.$refs.listDialogRef.listDialog=!0}))},changeItemName:function(t){console.log(this.$refs.d2Crud,1e3,Object(r["crudOptions"])(this).columns[3].form.component.value),this.itemName=t,console.log(this.itemName,777)}},watch:{itemName:function(){console.log(this.itemName,999888),Object(r["crudOptions"])(this)}}},f=l,p=o("2877"),m=Object(p["a"])(f,c,n,!1,null,null,null);e["default"]=m.exports},"70de":function(t,e,o){"use strict";o.r(e);var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.productDialog?o("div",{staticClass:"productdetailBox"},[o("div",{staticClass:"productDetail"},[o("div",{staticClass:"dialog-header"},[o("h2",[t._v("产品详情")]),o("div",{staticClass:"close"},[o("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[o("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),o("div",{staticClass:"dialog-content"},[o("ul",t._l(t.productDetail,(function(e,c){return o("li",{key:c},[o("p",{staticClass:"first"},[t._v(t._s(t.detailKey[c])+":")]),o("p",[t._v(t._s(e))])])})),0)]),o("d2-container",{class:{"page-compact":t.crud.pageOptions.compact},attrs:{type:"ghost"}},[o("d2-crud-x",t._g(t._b({ref:"d2Crud"},"d2-crud-x",t._crudProps,!1),t._crudListeners),[o("div",{attrs:{slot:"header"},slot:"header"},[o("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),o("el-button-group",[o("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[o("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),o("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns,storage:"productDetail"},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)])],1)],1)]):t._e()},n=[],i=o("c5a1"),r=o("42fd"),a=o("1fbf"),s={name:"productDetail",mixins:[a["d2CrudPlus"].crud],data:function(){return{productDialog:!0,offer_guid:null,detailKey:{id:"id",offer_date:"报价日期",project_code:"项目编号",project_name:"项目名称",project_date:"项目创建时间",offer_guid:"报价单guid",offer_draw:"报价编号",offer_company:"报价单位",contacts_name:"报价人",contacts_phone:"报价人电话",contacts_email:"报价人邮箱",customer_company:"客户公司",customer_contacts:"联系人",customer_phone:"联系电话",customer_email:"邮箱",project_price:"项目总价"},code:"lalala"}},props:["offerGuid","productDetail"],methods:{getCrudOptions:function(){return Object(r["crudOptions"])(this)},pageRequest:function(t){return t.offer_guid=this.offerGuid,console.log(777,t.offer_guid,this.offerGuid),i["GetList"](t)},addRequest:function(t){return console.log("api",i),i["AddObj"](t)},updateRequest:function(t){return console.log("----",t),i["UpdateObj"](t)},delRequest:function(t){return i["DelObj"](t.id)},close:function(){this.productDialog=!1,this.$emit("closeProductDetail")},doLoad:function(){}},mounted:function(){this.doRefresh()},watch:{}},u=s,d=(o("f792"),o("2877")),l=Object(d["a"])(u,c,n,!1,null,"69cc8f1f",null);e["default"]=l.exports},a046:function(t,e,o){"use strict";o.r(e),o.d(e,"crudOptions",(function(){return c}));var c=function(t){return{rowHandle:{fixed:"right",width:340,custom:[{text:"产品明细",type:"success",size:"small",emit:"productDetail"},{text:"沟通",type:"primary",size:"small",emit:"recordCommunication"}],view:{show:function(t,e){return!1}}},pageOptions:{compact:!1},options:{height:"100%",events:{"expand-change":function(t){console.log(t,6666)}}},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12},columns:[{title:"ID",key:"id",width:60,sortable:!0,form:{disabled:!0}},{title:"报价日期",key:"offer_date",type:"datetime",width:140,form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}},{title:"项目编号",key:"project_code",sortable:!0,width:120,search:{show:!0},type:"text"},{title:"项目名称",key:"project_name",type:"text",search:{show:!0},form:{component:{value:t.itemName,on:{focus:function(e){t.chooseList(),console.log(e,9999)},blur:function(e){t.changeItemName(),console.log(e,9999222),e.component.value=t.itemName},change:function(t){console.log(t,1234560)}}}}},{title:"项目创建时间",key:"project_date",type:"datetime",width:140,form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}},{title:"报价编号",key:"offer_draw",type:"text",width:120,search:{show:!0}},{title:"报价单位",key:"offer_company",type:"text",width:210},{title:"报价人",key:"contacts_name",type:"text"},{title:"报价人电话",key:"contacts_phone",type:"text",width:100},{title:"报价人邮箱",key:"contacts_email",type:"text",width:100},{title:"客户公司",key:"customer_company",type:"text",width:200,search:{show:!0}},{title:"联系人",key:"customer_contacts",type:"text"},{title:"联系电话",key:"customer_phone",type:"text",width:100},{title:"邮箱",key:"customer_email",type:"text",width:100},{title:"项目总价",key:"project_price",type:"text"}]}}},aaa2:function(t,e,o){"use strict";var c=o("2b94"),n=o.n(c);n.a},b0dd:function(t,e,o){"use strict";o.r(e),o.d(e,"GetList",(function(){return n})),o.d(e,"AddObj",(function(){return i})),o.d(e,"UpdateObj",(function(){return r})),o.d(e,"DelObj",(function(){return a})),o.d(e,"GetCascadeData",(function(){return s}));var c=o("22ce");function n(t){return console.log(t,888222),Object(c["b"])({url:"project.offer_connect/index",method:"post",data:{page:t.current,limit:t.size,offer_guid:t.offer_guid}}).then((function(e){console.log(e,9999,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var o=e.data;for(var c in o)delete o[c].create_time,delete o[c].update_time,delete o[c].delete_time;return e.data.records=o,e}))}function i(t){return Object(c["b"])({url:"project.offer_connect/add",method:"post",data:t})}function r(t){return Object(c["b"])({url:"project.offer_connect/edit",method:"post",data:t})}function a(t){return Object(c["b"])({url:"project.offer_connect/delete",method:"post",data:{id:t}})}function s(){return Object(c["b"])({url:"/select/cascadeData",method:"get"})}},c5a1:function(t,e,o){"use strict";o.r(e),o.d(e,"GetList",(function(){return n})),o.d(e,"AddObj",(function(){return i})),o.d(e,"UpdateObj",(function(){return r})),o.d(e,"DelObj",(function(){return a})),o.d(e,"GetCascadeData",(function(){return s}));var c=o("22ce");function n(t){return console.log(t,888),Object(c["b"])({url:"project.offer_product/index",method:"post",data:{page:t.current,limit:t.size,offer_guid:t.offer_guid}}).then((function(e){console.log(e,9999,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var o=e.data;for(var c in o)delete o[c].requirementl,delete o[c].color,delete o[c].create_time,delete o[c].update_time,delete o[c].delete_time;return e.data.records=o,e}))}function i(t){return Object(c["b"])({url:"project.offer_product/add",method:"post",data:t})}function r(t){return Object(c["b"])({url:"project.offer_product/edit",method:"post",data:t})}function a(t){return Object(c["b"])({url:"project.offer_product/delete",method:"post",data:{id:t}})}function s(){return Object(c["b"])({url:"/select/cascadeData",method:"get"})}},db2e:function(t,e,o){"use strict";o.r(e);var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.listDialog?o("div",{staticClass:"productdetailBox"},[o("div",{staticClass:"productDetail"},[o("div",{staticClass:"dialog-header"},[o("h2",[t._v("项目名称")]),o("div",{staticClass:"close"},[o("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[o("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),o("div",{staticClass:"dialog-content"},[o("ul",t._l(t.itemList,(function(e,c){return o("li",{key:c,on:{click:function(o){return t.chooseItem(e)}}},[t._v(" "+t._s(e.project_name)+" ")])})),0)])])]):t._e()},n=[],i=o("22ce"),r={name:"productDetail",data:function(){return{listDialog:!0,productDialog:!0,itemList:null}},props:["itemName","listDialogShow","changeItemName"],methods:{getProjectList:function(t){var e=this;return Object(i["b"])({url:"project/getProjectList",method:"post",data:{kw:t}}).then((function(t){e.itemList=t.data}))},chooseItem:function(t){this.changeItemName(t.project_name),this.close()},close:function(){this.listDialog=!1}},mounted:function(){this.getProjectList()},watch:{}},a=r,s=(o("f4ba"),o("2877")),u=Object(s["a"])(a,c,n,!1,null,"609632a5",null);e["default"]=u.exports},ee1f:function(t,e,o){"use strict";o.r(e),o.d(e,"GetList",(function(){return n})),o.d(e,"AddObj",(function(){return i})),o.d(e,"UpdateObj",(function(){return r})),o.d(e,"DelObj",(function(){return a})),o.d(e,"GetCascadeData",(function(){return s}));var c=o("22ce");function n(t){return console.log(t,888),Object(c["b"])({url:"project.offer/index",method:"post",data:{page:t.current,limit:t.size,offer_draw:t.offer_draw,project_name:t.project_name,project_code:t.project_code,customer_company:t.customer_company}}).then((function(e){console.log(e,9999,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var o=e.data;for(var c in o)delete o[c].province,delete o[c].customer_qq,delete o[c].customer_wechat,delete o[c].create_time,delete o[c].update_time,delete o[c].delete_time;return e.data.records=o,console.log(e,"res"),e}))}function i(t){return Object(c["b"])({url:"project.offer/add",method:"post",data:t})}function r(t){return Object(c["b"])({url:"project.offer/edit",method:"post",data:t})}function a(t){return Object(c["b"])({url:"project.offer/delete",method:"post",data:{id:t}})}function s(){return Object(c["b"])({url:"/select/cascadeData",method:"get"})}},f20b:function(t,e,o){},f4ba:function(t,e,o){"use strict";var c=o("2e0c"),n=o.n(c);n.a},f593:function(t,e,o){"use strict";o.r(e);var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.communicationDialog?o("div",{staticClass:"productdetailBox"},[o("div",{staticClass:"productDetail"},[o("div",{staticClass:"dialog-header"},[o("h2",[t._v("沟通记录")]),o("div",{staticClass:"close"},[o("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[o("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),o("d2-container",{class:{"page-compact":t.crud.pageOptions.compact},attrs:{type:"ghost"}},[o("d2-crud-x",t._g(t._b({ref:"d2Crud"},"d2-crud-x",t._crudProps,!1),t._crudListeners),[o("div",{attrs:{slot:"header"},slot:"header"},[o("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),o("el-button-group",[o("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[o("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),o("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns,storage:"productDetail"},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)])],1)],1)]):t._e()},n=[],i=o("b0dd"),r=o("52e2"),a=o("1fbf"),s={name:"communication",mixins:[a["d2CrudPlus"].crud],data:function(){return{communicationDialog:!0,offer_guid:null}},props:["offerGuid"],methods:{getCrudOptions:function(){return Object(r["crudOptions"])(this)},pageRequest:function(t){return t.offer_guid=this.offerGuid,console.log(777222,t.offer_guid,this.offerGuid),i["GetList"](t)},addRequest:function(t){return console.log("api",i,t),i["AddObj"](t)},updateRequest:function(t){return console.log("----",t),i["UpdateObj"](t)},delRequest:function(t){return i["DelObj"](t.id)},close:function(){this.communicationDialog=!1,this.$emit("closeCommunicationDialog")},doLoad:function(){}},mounted:function(){this.doRefresh()},watch:{}},u=s,d=(o("aaa2"),o("2877")),l=Object(d["a"])(u,c,n,!1,null,"20051a6e",null);e["default"]=l.exports},f792:function(t,e,o){"use strict";var c=o("f20b"),n=o.n(c);n.a}}]);