(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49524ac8"],{"0b6f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",[a("div",{staticClass:"contractDetail"},[a("table",{attrs:{border:"2"}},[a("tr",[a("th",{staticClass:"h",attrs:{colspan:"19"}},[a("div",{staticClass:"header"},[a("h1",[t._v(t._s(t.row.customer_company)+"销售合同")])])])]),a("tr",[a("td",{staticClass:"g tr",attrs:{colspan:"2"}},[t._v("所属销售合同：")]),a("td",{attrs:{colspan:"10"}},[a("el-select",{staticClass:"project",attrs:{placeholder:"请选择销售合同编号","popper-class":"project"},model:{value:t.row.contract_code,callback:function(e){t.$set(t.row,"contract_code",e)},expression:"row.contract_code"}},t._l(t.projectList,(function(e,s){return a("el-option",{key:s,attrs:{label:e.contract_code,value:e.contract_code},nativeOn:{click:function(a){return t.selectProject(e.contract_code,e.project_code)}}})})),1)],1),a("td",{staticClass:"g tr",attrs:{colspan:"2"}},[t._v("签订日期：")]),a("td",{attrs:{colspan:"5"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.sign_date,callback:function(e){t.$set(t.row,"sign_date",e)},expression:"row.sign_date"}})],1)]),a("tr",[a("td",{staticClass:"g tr",attrs:{colspan:"2"}},[t._v("供方：")]),a("td",{attrs:{colspan:"17"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.company_name,callback:function(e){t.$set(t.row,"company_name",e)},expression:"row.company_name"}})],1)]),a("tr",[a("td",{staticClass:"g tr",attrs:{colspan:"2"}},[t._v("需方：")]),a("td",{attrs:{colspan:"17"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.customer_company_name,callback:function(e){t.$set(t.row,"customer_company_name",e)},expression:"row.customer_company_name"}})],1)]),a("tr",[a("td",{attrs:{colspan:"12"}},[t._v("一、订货内容")]),a("td",{staticClass:"g tr",attrs:{colspan:"2"}},[t._v("合同编号：")]),a("td",{attrs:{colspan:"5"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.purchase_code,callback:function(e){t.$set(t.row,"purchase_code",e)},expression:"row.purchase_code"}})],1)]),a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("序号")]),a("th",{attrs:{colspan:"3"}},[t._v("产品名称")]),a("th",{attrs:{colspan:"2"}},[t._v("单位")]),a("th",{attrs:{colspan:"3"}},[t._v("数量")]),a("th",{attrs:{colspan:"2"}},[t._v("单价")]),a("th",{attrs:{colspan:"3"}},[t._v("总价")]),a("th",{attrs:{colspan:"3"}},[t._v("备注")]),a("th",{attrs:{colspan:"1"}},[a("div",{staticClass:"addProduct",on:{click:t.addProduct}},[t._v("新增")])])]),t._l(t.contractArr,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"g tc",attrs:{colspan:"2"}},[t._v(t._s(s+1))]),a("td",{attrs:{colspan:"3"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:function(a){return t.edmit(e)}},model:{value:e.product_name,callback:function(a){t.$set(e,"product_name",a)},expression:"info.product_name"}})],1),a("td",{attrs:{colspan:"2"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:function(a){return t.edmit(e)}},model:{value:e.unit,callback:function(a){t.$set(e,"unit",a)},expression:"info.unit"}})],1),a("td",{attrs:{colspan:"3"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:function(a){return t.edmit(e)}},model:{value:e.count,callback:function(a){t.$set(e,"count",a)},expression:"info.count"}})],1),a("td",{attrs:{colspan:"2"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:function(a){return t.edmit(e)}},model:{value:e.price,callback:function(a){t.$set(e,"price",a)},expression:"info.price"}})],1),a("td",{attrs:{colspan:"3"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:function(a){return t.edmit(e)}},model:{value:e.total_price,callback:function(a){t.$set(e,"total_price",a)},expression:"info.total_price"}})],1),0==s?a("td",{attrs:{colspan:"3",rowspan:t.contractArr.length}},[a("el-input",{attrs:{type:"textarea",disabled:t.enterStatus,rowspan:t.contractArr.length},on:{change:function(a){return t.edmit(e)}},model:{value:e.remark,callback:function(a){t.$set(e,"remark",a)},expression:"info.remark"}})],1):t._e(),a("td",[a("div",{staticClass:"addProduct delete",on:{click:function(a){return t.deleteProduct(e)}}},[t._v("删除")])])])})),a("tr",[a("td",{attrs:{colspan:"19"}},[t._v("合计(元)：¥"+t._s(t.amount))])]),a("tr",[a("td",{staticClass:"g",attrs:{colspan:"19"}},[t._v("合同说明：")])]),a("tr",[a("td",{attrs:{colspan:"19"}},[a("el-input",{attrs:{type:"textarea",cols:"30",rows:"10",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.explain,callback:function(e){t.$set(t.row,"explain",e)},expression:"row.explain"}})],1)]),a("tr",[a("td",{staticClass:"tl",attrs:{colspan:"10"}},[t._v("供方(盖章):")]),a("td",{staticClass:"tl",attrs:{colspan:"9"}},[t._v("需方(盖章):")])]),a("tr",[a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("单位名称∶")]),a("td",{attrs:{colspan:"8"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.company_name,callback:function(e){t.$set(t.row,"company_name",e)},expression:"row.company_name"}})],1),a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("单位名称∶")]),a("td",{attrs:{colspan:"7"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.customer_company_name,callback:function(e){t.$set(t.row,"customer_company_name",e)},expression:"row.customer_company_name"}})],1)]),a("tr",[a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("单位地址:")]),a("td",{attrs:{colspan:"8"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.address,callback:function(e){t.$set(t.row,"address",e)},expression:"row.address"}})],1),a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("单位地址∶")]),a("td",{attrs:{colspan:"7"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.customer_address,callback:function(e){t.$set(t.row,"customer_address",e)},expression:"row.customer_address"}})],1)]),a("tr",[a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("委托代理人(签章):")]),a("td",{attrs:{colspan:"8"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.contacts,callback:function(e){t.$set(t.row,"contacts",e)},expression:"row.contacts"}})],1),a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("委托代理人(签章):")]),a("td",{attrs:{colspan:"7"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.customer_contacts,callback:function(e){t.$set(t.row,"customer_contacts",e)},expression:"row.customer_contacts"}})],1)]),a("tr",[a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("电话:")]),a("td",{attrs:{colspan:"8"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.phone,callback:function(e){t.$set(t.row,"phone",e)},expression:"row.phone"}})],1),a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("电话:")]),a("td",{attrs:{colspan:"7"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.customer_phone,callback:function(e){t.$set(t.row,"customer_phone",e)},expression:"row.customer_phone"}})],1)]),a("tr",[a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("传真:")]),a("td",{attrs:{colspan:"8"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.fax,callback:function(e){t.$set(t.row,"fax",e)},expression:"row.fax"}})],1),a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("传真:")]),a("td",{attrs:{colspan:"7"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.customer_fax,callback:function(e){t.$set(t.row,"customer_fax",e)},expression:"row.customer_fax"}})],1)]),a("tr",[a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("开户名称:")]),a("td",{attrs:{colspan:"8"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.account_name,callback:function(e){t.$set(t.row,"account_name",e)},expression:"row.account_name"}})],1),a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("开户名称:")]),a("td",{attrs:{colspan:"7"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.customer_account_name,callback:function(e){t.$set(t.row,"customer_account_name",e)},expression:"row.customer_account_name"}})],1)]),a("tr",[a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("开户银行:")]),a("td",{attrs:{colspan:"8"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.bank_name,callback:function(e){t.$set(t.row,"bank_name",e)},expression:"row.bank_name"}})],1),a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("开户银行:")]),a("td",{attrs:{colspan:"7"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.customer_bank,callback:function(e){t.$set(t.row,"customer_bank",e)},expression:"row.customer_bank"}})],1)]),a("tr",[a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("货款账号:")]),a("td",{attrs:{colspan:"8"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.account,callback:function(e){t.$set(t.row,"account",e)},expression:"row.account"}})],1),a("td",{staticClass:"tl",attrs:{colspan:"2"}},[t._v("货款账号:")]),a("td",{attrs:{colspan:"7"}},[a("el-input",{attrs:{type:"text",disabled:t.enterStatus},on:{change:t.changeEdmit},model:{value:t.row.customer_account,callback:function(e){t.$set(t.row,"customer_account",e)},expression:"row.customer_account"}})],1)])],2)])])},c=[],n=a("22ce"),o={name:"purchasingManagement-contractDetail",data:function(){return{projectList:[],projectName:"",productDialog:!0,order_code:null,contractArr:[],row:{id:0,contract_code:"",company:"",company_name:"",address:"",legal_representative:"",agent:"",phone:"",telephone:"",fax:"",email:"",bank:"",account:"",customer_company:"",customer_company_name:"",customer_address:"",customer_legal_representative:"",customer_agent:"",customer_phone:"",customer_telephone:"",customer_fax:"",customer_email:"",customer_bank:"",customer_account:"",contract_type:2,contract_status:1,project_code:"",project_name:"",sign_date:"",delivery_date:"",total_price:"",advance_payment_rate:"",invoice_flag:1,contract_description:""},amount:null,total:null,enterStatus:!0,contractStatus:"add",addId:null}},created:function(){console.log(this.$route.query,66610)},methods:{getList:function(){var t=this;return Object(n["b"])({url:"contract.purchase_product/index",method:"post",data:{purchase_id:this.row.id}}).then((function(e){var a=e.data;for(var s in t.amount=0,t.total=0,a)t.amount=t.amount+(a[s].total_price-0),t.total=t.total+(a[s].count-0),delete a[s].matter_code,delete a[s].specs_x,delete a[s].specs_y,delete a[s].specs_z,delete a[s].specs_type,delete a[s].specs_value,delete a[s].product_draw,delete a[s].explain,delete a[s].requirementl,delete a[s].color,delete a[s].create_time,delete a[s].update_time,delete a[s].delete_time;t.row.total_price!=t.amount&&(t.row.total_price=t.amount,t.changeEdmit()),t.contractArr=a}))},addProduct:function(){var t=this;if(console.log(this.$route.query.offerGuid,this.row.contract_code),this.row.purchase_code)return Object(n["b"])({url:"contract.purchase_product/add",method:"post",data:{purchase_code:this.row.purchase_code,purchase_id:this.row.id}}).then((function(e){t.getList(),t.$message({message:e.msg,type:"success"})}));this.$message({message:"请先输入合同编号",type:"error"})},deleteProduct:function(t){var e=this;return Object(n["b"])({url:"contract.purchase_product/delete",method:"post",data:t}).then((function(t){e.getList(),e.$message({message:t.msg,type:"success"})}))},edmit:function(t){var e=this;return t.purchase_id=this.row.id,Object(n["b"])({url:"contract.purchase_product/edit",method:"post",data:t}).then((function(t){e.getList(),e.$message({message:t.msg,type:"success"})}))},contractEdit:function(t,e){var a=this;return t&&(this.row.contract_code=t),e&&(this.row.contract_code=e),Object(n["b"])({url:"contract.purchase/edit",method:"post",data:this.row}).then((function(t){a.$message({message:t.msg,type:"success"})}))},contractAdd:function(t,e){var a=this;return Object(n["b"])({url:"contract.purchase/add",method:"post",data:this.row}).then((function(t){a.row=t.data,a.addId=t.data.id,a.enterStatus=!1,a.contractStatus="edit",a.$message({message:t.msg,type:"success"})})).catch((function(t){a.row.project_code="",a.enterStatus=!0,a.contractStatus="add",a.$message({message:t.msg,type:"error"})}))},changeEdmit:function(){console.log(this.contractStatus,77777),"edit"==this.contractStatus?this.contractEdit():"add"==this.contractStatus&&this.contractAdd()},close:function(){this.productDialog=!1,this.$emit("closeProductDetail")},getProjectList:function(t){var e=this;return Object(n["b"])({url:"contract.sale/getSaleList",method:"post",data:{kw:t}}).then((function(t){e.projectList=t.data,console.log("销售合同",t.data)}))},selectProject:function(t,e){"edit"==this.contractStatus?this.contractEdit(t,e):"add"==this.contractStatus&&this.contractAdd(t,e),console.log("选中",t,e)}},mounted:function(){this.$route.query.add||(this.row=JSON.parse(this.$route.query.info),this.row.contract_code&&this.getList(),this.enterStatus=!1,this.contractStatus="edit"),this.getProjectList()},watch:{}},r=o,l=(a("6956"),a("2877")),d=Object(l["a"])(r,s,c,!1,null,"5933763a",null);e["default"]=d.exports},6956:function(t,e,a){"use strict";var s=a("e95f"),c=a.n(s);c.a},e95f:function(t,e,a){}}]);