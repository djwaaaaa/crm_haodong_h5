(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94fadbf2","chunk-0f62de2a","chunk-2d7777ce","chunk-2d216f05","chunk-2d225069","chunk-2d21a35c","chunk-2d0b2b07","chunk-2d237c56","chunk-2d0d696f"],{"0ae1":function(t,e,r){"use strict";var o=r("26eb"),c=r.n(o);c.a},"24d3":function(t,e,r){"use strict";r.r(e),r.d(e,"GetList",(function(){return c})),r.d(e,"AddObj",(function(){return a})),r.d(e,"UpdateObj",(function(){return s})),r.d(e,"DelObj",(function(){return n})),r.d(e,"GetCascadeData",(function(){return i}));var o=r("22ce");function c(t){return console.log(t,888),Object(o["b"])({url:"order.product/index",method:"post",data:{page:t.current,limit:t.size,order_code:t.order_code}}).then((function(e){return e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count,e.data.records=e.data,console.log(e,22222,e.data),e}))}function a(t){return Object(o["b"])({url:"order.product/add",method:"post",data:t})}function s(t){return Object(o["b"])({url:"order.product/edit",method:"post",data:t})}function n(t){return Object(o["b"])({url:"order.product/delete",method:"post",data:{id:t}})}function i(){return Object(o["b"])({url:"/select/cascadeData",method:"get"})}},"26eb":function(t,e,r){},"4e72":function(t,e,r){"use strict";var o=r("baa0"),c=r.n(o);c.a},"56ca":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.checkDialog?r("div",{staticClass:"productdetailBox"},[r("div",{staticClass:"productDetail"},[r("div",{staticClass:"dialog-header"},[r("div",{staticClass:"tabs"},[r("div",{staticClass:"btn",class:{check:t.choose},on:{click:t.chooseInfo}},[t._v("基本信息对比")]),r("div",{staticClass:"btn ",class:{check:!t.choose},on:{click:t.chooseInfo}},[t._v("产品数据对比")])]),r("div",{staticClass:"close"},[r("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[r("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),r("div",{staticClass:"dialog-content"},[t.choose?r("div",{staticClass:"itemDetail"},[t._l(t.contractArr,(function(e,o){return r("div",{staticClass:"item"},[r("div",{staticClass:"header"},[t.contractArr.length<2?r("div",{staticClass:"name"},[t._v("销售合同基本信息")]):t._e(),o?r("div",{staticClass:"name"},[t._v("销售合同(增补合同)基本信息")]):t._e(),r("div",{staticClass:"code"},[t._v("项目编号："),r("span",[t._v(t._s(t.project_code))])])]),r("div",{staticClass:"details"},[r("ul",t._l(e,(function(e,o){return r("li",{key:o},[r("p",{staticClass:"first"},[t._v(t._s(t.contract[o])+":")]),r("p",[t._v(t._s(e))])])})),0)])])})),t._l(t.orderArr,(function(e,o){return r("div",{staticClass:"item"},[r("div",{staticClass:"header"},[t.orderArr.length<2?r("div",{staticClass:"name"},[t._v("生产订单基本信息")]):t._e(),t.orderArr.length>=2?r("div",{staticClass:"name"},[t._v("生产订单"+t._s(o+1)+"基本信息")]):t._e(),r("div",{staticClass:"code"},[t._v("项目编号："),r("span",[t._v(t._s(t.project_code))])])]),r("div",{staticClass:"details"},[r("ul",t._l(e,(function(e,o){return r("li",{key:o},[r("p",{staticClass:"first"},[t._v(t._s(t.order[o])+":")]),r("p",[t._v(t._s(e))])])})),0)])])})),t._l(t.purchaseArr,(function(e,o){return r("div",{key:o,staticClass:"item"},[r("div",{staticClass:"header"},[t.purchaseArr.length<2?r("div",{staticClass:"name"},[t._v("采购合同基本信息")]):t._e(),t.purchaseArr.length>=2?r("div",{staticClass:"name"},[t._v("采购合同"+t._s(o+1)+"基本信息")]):t._e(),r("div",{staticClass:"code"},[t._v("项目编号："),r("span",[t._v(t._s(t.project_code))])])]),r("div",{staticClass:"details"},[r("ul",t._l(e,(function(e,o){return r("li",{key:o},[r("p",{staticClass:"first"},[t._v(t._s(t.purchase[o])+":")]),r("p",[t._v(t._s(e))])])})),0)])])}))],2):t._e(),t.choose?t._e():r("div",{staticClass:"itemDetail"},[t._l(t.contractDetailArr,(function(e,o){return r("div",{key:o,staticClass:"item"},[r("div",{staticClass:"header"},[o?t._e():r("div",{staticClass:"name"},[t._v("销售合同产品信息")]),o?r("div",{staticClass:"name"},[t._v("销售合同(增补合同)产品信息")]):t._e()]),r("div",{staticClass:"details"},[r("ul",t._l(e,(function(e,o){return r("li",{key:o},[r("p",{staticClass:"first"},[t._v(t._s(t.contract[o])+":")]),r("p",[t._v(t._s(e))])])})),0)])])})),t._l(t.orderDetailArr,(function(e,o){return r("div",{key:o,staticClass:"item"},[r("div",{staticClass:"header"},[t.orderDetailArr.length<2?r("div",{staticClass:"name"},[t._v("生产订单产品信息")]):t._e(),t.orderDetailArr.length>=2?r("div",{staticClass:"name"},[t._v("生产订单"+t._s(o+1)+"产品信息")]):t._e()]),r("div",{staticClass:"details"},[r("table",{attrs:{border:"1",width:"100%"}},[r("tbody",[t._m(0,!0),t._l(e,(function(e,o){return r("tr",{key:o},[r("td",[t._v(t._s(o))]),r("td",[t._v(t._s(e.matter_code))]),r("td",[t._v(t._s(e.product_name))]),r("td",[t._v(t._s(e.specs_value))]),r("td",[t._v(t._s(e.product_draw))]),r("td",[t._v(t._s(e.unit))]),r("td",[t._v(t._s(e.count))]),r("td",[t._v(t._s(e.explain))]),r("td",[t._v(t._s(e.requirement))]),r("td",[t._v(t._s(e.color))])])}))],2)])])])})),t._l(t.purchaseDetailArr,(function(e,o){return r("div",{key:o,staticClass:"item"},[r("div",{staticClass:"header"},[t.purchaseDetailArr.length<2?r("div",{staticClass:"name"},[t._v("采购合同产品信息")]):t._e(),t.purchaseDetailArr.length>=2?r("div",{staticClass:"name"},[t._v("采购合同"+t._s(o+1)+"产品信息")]):t._e()]),r("div",{staticClass:"details"},[r("ul",t._l(e,(function(e,o){return r("li",{key:o},[r("p",{staticClass:"first"},[t._v(t._s(t.purchaseDetail[o])+":")]),r("p",[t._v(t._s(e))])])})),0)])])}))],2)])])]):t._e()},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("序号")]),r("th",[t._v("物料编码")]),r("th",[t._v("产品名称")]),r("th",[t._v("规格")]),r("th",[t._v("图号")]),r("th",[t._v("单位")]),r("th",[t._v("数量")]),r("th",[t._v("产品说明")]),r("th",[t._v("客户要求")]),r("th",[t._v("颜色")])])}],a=r("ade3"),s=(r("c530"),r("e349"),r("1fbf"),r("22ce")),n={name:"productDetail",data:function(){var t;return{checkDialog:!0,offer_guid:null,choose:!0,detailKey:{id:"id",offer_date:"报价日期",project_code:"项目编号",project_name:"项目名称",project_date:"项目创建时间",offer_guid:"报价单guid",offer_draw:"报价编号",offer_company:"报价单位",contacts_name:"报价人",contacts_phone:"报价人电话",contacts_email:"报价人邮箱",customer_company:"客户公司",customer_contacts:"联系人",customer_phone:"联系电话",customer_email:"邮箱",project_price:"项目总价"},contract:(t={id:"ID",contract_code:"销售合同编号",company:"供方公司名称",company_name:"供方单位名称",address:"供方工厂地址",legal_representative:"供方法定代表人",agent:"供方委托代理人",phone:"供方手机",telephone:"供方电话",fax:"供方传真",email:"供方电邮",bank:"供方开户银行",account:"供方账号",customer_company:"供方"},Object(a["a"])(t,"company","需方公司名称"),Object(a["a"])(t,"customer_company_name","需方单位名称"),Object(a["a"])(t,"customer_address","需方单位地址"),Object(a["a"])(t,"customer_legal_representative","需方法定代表人"),Object(a["a"])(t,"customer_agent","需方委托代理人"),Object(a["a"])(t,"customer_phone","需方手机"),Object(a["a"])(t,"customer_telephone","需方电话"),Object(a["a"])(t,"customer_fax","需方传真"),Object(a["a"])(t,"customer_email","需方电邮"),Object(a["a"])(t,"customer_bank","需方开户银行"),Object(a["a"])(t,"customer_account","需方账号"),Object(a["a"])(t,"contract_type","合同类型"),Object(a["a"])(t,"contract_status","合同状态"),Object(a["a"])(t,"project_code","项目编号"),Object(a["a"])(t,"project_name","项目名称"),Object(a["a"])(t,"sign_date","签订日期"),Object(a["a"])(t,"delivery_date","交货日期"),Object(a["a"])(t,"total_price","合同总金额"),Object(a["a"])(t,"advance_payment_rate","预付款比例"),Object(a["a"])(t,"invoice_flag","是否开票(1:是,2:否)"),Object(a["a"])(t,"contract_description","合同说明"),t),contractDetail:{id:1,sale_id:"销售合同ID",contract_code:"销售合同编号",product_name:"产品名称",customer_product_name:"客户产品名称",tax_code:"税码",invoice_product_name:"开票产品名称",product_img:"产品图片",specs_value:"规格",color:"颜色",technical_param:"技术参数",unit:"单位",count:"数量",no_tax_price:"不含税单价",no_tax_total_price:"不含税总单价",tax_rate:"税率",tax_amount:"税额",tax_price:"含税单价",tax_total_price:"含税总价",remark:"备注"},order:{id:"ID",order_id:"订单ID",order_code:"订单编号",order_name:"订单名称",order_date:"下单日期",contract_code:"销售合同编号",contacts_name:"销售员",contacts_phone:"电话",sign_date:"合同签订日期",sign_flag:"是否签订合同(1:是,0:否)",status:"订单状态",delivery_date:"计划交货日期",customer_no:"客户号",customer_company:"客户公司",project_code:"项目编号",project_name:"项目名称",total_count:"合计"},orderDetail:{id:1,order_code:"订单编号",matter_code:"物料编码",product_name:"产品名称",specs_x:"规格单位x",specs_y:"规格单位y",specs_z:"规格单位z",specs_type:"规格类型",specs_value:"规格",product_draw:"图号",unit:"单位",count:"数量",explain:"说明",requirementl:"客户要求",color:"颜色"},purchase:{id:1,contract_code:"销售合同编号",company:"供方公司名称",address:"供方公司地址",contacts:"供方联系人",phone:"供方联系电话",purchase_code:"采购合同编号",sign_date:"合同签订日期",total_price:"合计金额",account:"供方货款账号",bank_name:"供方开户行",account_name:"供方开户名称",explain:"合同说明",status:"采购状态(1:采购中,2:已入库)",project_code:"项目编号"},purchaseDetail:{id:1,purchase_id:"采购合同ID",purchase_code:"采购合同编号",product_name:"产品名称",unit:"单位",count:"数量",price:"单价",total_price:"总价",remark:"备注"},contractArr:[],contractDetailArr:[],orderArr:[],orderDetailArr:[],purchaseArr:[],purchaseDetailArr:[]}},props:["project_code"],methods:{close:function(){this.checkDialog=!1,this.$emit("closeDialog")},chooseInfo:function(){this.choose=!this.choose},getContractSale:function(){var t=this;return Object(s["b"])({url:"contract.sale/comparison",method:"post",data:{project_code:this.project_code}}).then((function(e){e.data.list.length?t.contractArr=e.data.list:t.contractArr=[[]],e.data.product_list.length?t.contractDetailArr=e.data.product_list:t.contractDetailArr=[[]],console.log(e,99979)}))},getOrder:function(){var t=this;return Object(s["b"])({url:"order/comparison",method:"post",data:{project_code:this.project_code}}).then((function(e){e.data.list.length?t.orderArr=e.data.list:t.orderArr=[[]];for(var r=0;r<t.orderArr.length;r++)console.log(t.orderArr[r],6663),1==t.orderArr[r].status?t.orderArr[r].status="制作中":2==t.orderArr[r].status?t.orderArr[r].status="收货中":t.orderArr[r].status="已收货",delete t.orderArr[r].contract_code,delete t.orderArr[r].order_id,delete t.orderArr[r].sign_date,delete t.orderArr[r].sign_flag,delete t.orderArr[r].create_time,delete t.orderArr[r].update_time,delete t.orderArr[r].delete_time;e.data.product_list.length?t.orderDetailArr=e.data.product_list:t.orderDetailArr=[[]],console.log(e,8888)}))},getContractPurchase:function(){var t=this;return Object(s["b"])({url:"/contract.purchase/comparison",method:"post",data:{project_code:this.project_code}}).then((function(e){e.data.list.length?t.purchaseArr=e.data.list:t.purchaseArr=[[]],e.data.product_list.length?t.purchaseDetailArr=e.data.product_list:t.purchaseDetailArr=[[]],console.log(e,333)}))}},mounted:function(){this.getContractSale(),this.getOrder(),this.getContractPurchase()},watch:{checkDialog:function(){this.checkDialog&&console.log(123456)}}},i=n,d=(r("0ae1"),r("2877")),l=Object(d["a"])(i,o,c,!1,null,"a441b12c",null);e["default"]=l.exports},7025:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("d2-container",{class:{"page-compact":t.crud.pageOptions.compact}},[r("template",{slot:"header"},[t._v("生产订单")]),r("d2-crud-x",t._g(t._b({ref:"d2Crud",on:{productDetail:t.getProductDetail,comparison:t.getComparisonCheck}},"d2-crud-x",t._crudProps,!1),t._crudListeners),[r("div",{attrs:{slot:"header"},slot:"header"},[r("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),r("el-button-group",[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[r("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),r("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)]),t.dialogShow?r("product-Detail",{ref:"dialog",attrs:{orderCode:t.order_code},on:{closeProductDetail:t.closeProductDetail}}):t._e(),t.checkShow?r("comparison-Check",{ref:"check",attrs:{project_code:t.project_code},on:{closeDialog:t.closeDialog}}):t._e()],2)},c=[],a=r("bb17"),s=r("72ca"),n=r("1fbf"),i=r("840b"),d=r("56ca"),l={name:"formSelect",mixins:[n["d2CrudPlus"].crud],components:{productDetail:i["default"],comparisonCheck:d["default"]},data:function(){return{dialogShow:!1,order_code:null,checkShow:!1,project_code:null}},methods:{getCrudOptions:function(){return Object(s["crudOptions"])(this)},pageRequest:function(t){return a["GetList"](t)},addRequest:function(t){return console.log("api",a),a["AddObj"](t)},updateRequest:function(t){return console.log("----",t),a["UpdateObj"](t)},delRequest:function(t){return a["DelObj"](t.id)},getProductDetail:function(t,e){var r=this,o=(t.index,t.row);console.log(o,789),this.dialogShow=!0,this.order_code=o.order_code,this.$nextTick((function(){r.$refs.dialog.productDialog=!0}))},getComparisonCheck:function(t,e){var r=this,o=(t.index,t.row);this.checkShow=!0,this.project_code=o.project_code,console.log(o,1e3),this.$nextTick((function(){r.$refs.check.checkDialog=!0}))},closeDialog:function(){this.checkShow=!1},closeProductDetail:function(){this.dialogShow=!1}}},u=l,p=r("2877"),_=Object(p["a"])(u,o,c,!1,null,null,null);e["default"]=_.exports},"72ca":function(t,e,r){"use strict";r.r(e),r.d(e,"crudOptions",(function(){return o}));var o=function(t){return{rowHandle:{fixed:"right",width:440,custom:[{text:"产品信息",type:"success",size:"small",emit:"productDetail"},{text:"对比查看",type:"success",size:"small",emit:"comparison"}]},pageOptions:{compact:!1},options:{height:"100%"},viewOptions:{componentType:"row",disabled:!1},formOptions:{defaultSpan:12},columns:[{title:"ID",key:"id",width:60,type:"text",form:{disabled:!0}},{title:"订单编号",key:"order_code",sortable:!0,type:"text",width:100},{title:"订单名称",key:"order_name",type:"text"},{title:"下单日期",key:"order_date",type:"datetime",width:150,form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}},{title:"销售员",key:"contacts_name",type:"text",search:{show:!0}},{title:"电话",key:"contacts_phone",type:"text"},{title:"订单状态",key:"status",type:"text"},{title:"计划交货日期",key:"delivery_date",type:"datetime",width:150,form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}},{title:"客户号",key:"customer_no",type:"text"},{title:"客户公司",key:"customer_company",type:"text",search:{show:!0}},{title:"项目编号",key:"project_code",search:{show:!0},form:{disabled:!0}},{title:"项目名称",key:"project_name",type:"text"},{title:"合计",key:"total_count",type:"text"}]}}},"840b":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.productDialog?r("div",{staticClass:"productdetailBox"},[r("div",{staticClass:"productDetail"},[r("div",{staticClass:"dialog-header"},[r("h2",[t._v("产品信息")]),r("div",{staticClass:"close"},[r("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[r("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])])]),r("d2-container",{class:{"page-compact":t.crud.pageOptions.compact},attrs:{type:"ghost"}},[r("d2-crud-x",t._g(t._b({ref:"d2Crud"},"d2-crud-x",t._crudProps,!1),t._crudListeners),[r("div",{attrs:{slot:"header"},slot:"header"},[r("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),r("el-button-group",[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[r("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),r("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns,storage:"productDetail"},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)])],1)],1)]):t._e()},c=[],a=r("24d3"),s=r("fd13"),n=r("1fbf"),i={name:"productDetail",mixins:[n["d2CrudPlus"].crud],data:function(){return{productDialog:!0,order_code:null}},props:["orderCode"],methods:{getCrudOptions:function(){return Object(s["crudOptions"])(this)},pageRequest:function(t){return t.order_code=this.orderCode,console.log(789951,this.order_code),a["GetList"](t)},addRequest:function(t){return console.log("api",a),a["AddObj"](t)},updateRequest:function(t){return console.log("----",t),a["UpdateObj"](t)},delRequest:function(t){return a["DelObj"](t.id)},close:function(){this.productDialog=!1,this.$emit("closeProductDetail")},doLoad:function(){}},mounted:function(){this.doRefresh()},watch:{productDialog:function(){}}},d=i,l=(r("4e72"),r("2877")),u=Object(l["a"])(d,o,c,!1,null,"4207387a",null);e["default"]=u.exports},baa0:function(t,e,r){},bb17:function(t,e,r){"use strict";r.r(e),r.d(e,"GetList",(function(){return c})),r.d(e,"AddObj",(function(){return a})),r.d(e,"UpdateObj",(function(){return s})),r.d(e,"DelObj",(function(){return n})),r.d(e,"GetCascadeData",(function(){return i}));var o=r("22ce");function c(t){return Object(o["b"])({url:"order/index",method:"post",data:{page:t.current,limit:t.size,project_code:t.project_code,contacts_name:t.contacts_name,customer_company:t.customer_company}}).then((function(e){e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var r=e.data;for(var o in r)delete r[o].order_id,delete r[o].contract_code,delete r[o].sign_date,delete r[o].sign_flag,delete r[o].create_time,delete r[o].update_time,delete r[o].delete_time;return e.data.records=r,console.log(777,e),e}))}function a(t){return Object(o["b"])({url:"order/add",method:"post",data:t})}function s(t){return Object(o["b"])({url:"order/edit",method:"post",data:t})}function n(t){return Object(o["b"])({url:"order/delete",method:"post",data:{id:t}})}function i(){return Object(o["b"])({url:"/select/cascadeData",method:"get"})}},c530:function(t,e,r){"use strict";r.r(e),r.d(e,"GetList",(function(){return c})),r.d(e,"AddObj",(function(){return a})),r.d(e,"UpdateObj",(function(){return s})),r.d(e,"DelObj",(function(){return n})),r.d(e,"GetCascadeData",(function(){return i}));var o=r("22ce");function c(t){return console.log(t,888),Object(o["b"])({url:"project.offer_product/index",method:"post",data:{page:t.current,limit:t.size,offer_guid:t.offer_guid}}).then((function(e){console.log(e,9999,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var r=e.data;for(var o in r)delete r[o].requirementl,delete r[o].color,delete r[o].create_time,delete r[o].update_time,delete r[o].delete_time;return e.data.records=r,e}))}function a(t){return Object(o["b"])({url:"project/add",method:"post",data:t})}function s(t){return Object(o["b"])({url:"project/edit",method:"post",data:t})}function n(t){return Object(o["b"])({url:"project/delete",method:"post",data:{id:t}})}function i(){return Object(o["b"])({url:"/select/cascadeData",method:"get"})}},e349:function(t,e,r){"use strict";r.r(e),r.d(e,"crudOptions",(function(){return o}));var o=function(t){return{rowHandle:{fixed:"right"},pageOptions:{compact:!1},options:{height:"300px",highlightCurrentRow:!0,rowKey:"id"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12,appendToBody:!0},columns:[{title:"ID",key:"id",width:60,sortable:!0,form:{disabled:!0}},{title:"报价单guid",key:"offer_guid",sortable:!0,search:{show:!0},type:"text",width:150},{title:"物料编码",key:"matter_code",type:"text"},{title:"产品名称",key:"product_name",type:"text"},{title:"产品大类名称",key:"class_name",type:"text"},{title:"规格",key:"specs_value",type:"text",width:200},{title:"图号",key:"product_draw",type:"text"},{title:"开票名称",key:"billing_name",type:"text"},{title:"价格",key:"price",type:"text"},{title:"单位",key:"unit",type:"text"},{title:"数量",key:"count",type:"text"},{title:"简单描述",key:"explain",type:"text",width:400},{title:"复杂描述",key:"describe",type:"text",width:400},{title:"项目日期",key:"project_date",type:"datetime",form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}}]}}},fd13:function(t,e,r){"use strict";r.r(e),r.d(e,"crudOptions",(function(){return o}));var o=function(t){return{rowHandle:{fixed:"right"},pageOptions:{compact:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12,appendToBody:!0},columns:[{title:"ID",key:"id",width:60,sortable:!0,form:{disabled:!0}},{title:"订单编号",key:"order_code",sortable:!0,search:{show:!0},type:"text",width:150,form:{disabled:!0}},{title:"物料编码",key:"matter_code",type:"text"},{title:"产品名称",key:"product_name",type:"text"},{title:"规格",key:"specs_value",type:"text"},{title:"图号",key:"product_draw",type:"text"},{title:"单位",key:"unit",type:"text"},{title:"数量",key:"count",type:"text"},{title:"说明",key:"explain",type:"text",width:300},{title:"客户要求",key:"requirementl",type:"text"},{title:"颜色",key:"color",type:"text"}]}}}}]);