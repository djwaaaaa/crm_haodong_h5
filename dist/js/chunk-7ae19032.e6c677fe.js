(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ae19032","chunk-2d0f0fc0","chunk-2d2094f5"],{"5acc":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",{class:{"page-compact":t.crud.pageOptions.compact}},[n("el-row",{staticStyle:{height:"100%"},attrs:{gutter:20}},[n("el-col",{staticClass:"leftTable",staticStyle:{height:"100%"},attrs:{span:6}},[n("div",[n("div",{staticClass:"addBox",on:{click:t.addNode}},[n("div",{staticClass:"el-icon-plus"})]),t.treeShow?n("el-tree",{attrs:{data:t.data,"node-key":"id","expand-on-click-node":!0,props:t.treeProps},on:{"node-click":t.click},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.node,o=e.data;return n("span",{staticClass:"custom-tree-node show-hide"},[1==o.isEdit?[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newApiGroupName,expression:"newApiGroupName"}],ref:"input",staticClass:"nodeInput",staticStyle:{height:"24px line-height:24px"},domProps:{value:t.newApiGroupName},on:{blur:function(){return t.submitEdit(i,o)},input:function(e){e.target.composing||(t.newApiGroupName=e.target.value)}}})]:n("span",{staticClass:"nodeLabel"},[t._v(t._s(i.label))]),n("span",{staticStyle:{display:"none"}},[n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),function(){return t.append(o)}()}}},[n("div",{staticClass:"node-icon el-icon-plus"})]),n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),function(){return t.edit(i,o)}()}}},[n("div",{staticClass:"node-icon el-icon-edit"})]),n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),function(){return t.remove(i,o)}()}}},[n("div",{staticClass:"node-icon el-icon-delete"})])],1)],2)}}],null,!1,425484568)}):t._e()],1)]),n("el-col",{staticClass:"rightTable",staticStyle:{height:"100%"},attrs:{span:18}},[n("template",{slot:"header"},[t._v("产品工艺")]),n("d2-crud-x",t._g(t._b({ref:"d2Crud"},"d2-crud-x",t._crudProps,!1),t._crudListeners),[n("div",{attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"processName"},[t._v(t._s(t.processName))]),n("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),n("el-button-group",[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[n("i",{staticClass:"el-icon-plus"}),t._v(" 新增")])],1),n("crud-toolbar",{attrs:{search:t.crud.searchOptions.show,compact:t.crud.pageOptions.compact,columns:t.crud.columns},on:{"update:search":function(e){return t.$set(t.crud.searchOptions,"show",e)},"update:compact":function(e){return t.$set(t.crud.pageOptions,"compact",e)},refresh:function(e){return t.doRefresh()},"columns-filter-changed":t.handleColumnsFilterChanged}})],1)])],2)],1)],1)},o=[],s=(n("c740"),n("a434"),n("9f63")),a=n("a907"),c=n("1fbf"),r=n("22ce"),d={name:"productProcess",mixins:[c["d2CrudPlus"].crud],data:function(){return{treeShow:!1,data:[],nodeId:0,processName:null,newApiGroupName:"",treeProps:{label:"title"}}},methods:{doLoad:function(){},getCrudOptions:function(){return Object(a["crudOptions"])(this)},pageRequest:function(t){return t.nodeId=this.nodeId,s["GetList"](t)},addRequest:function(t){return console.log("api",s),t.pid=this.nodeId,s["AddObj"](t)},updateRequest:function(t){return console.log("----",t),s["UpdateObj"](t)},delRequest:function(t){return s["DelObj"](t.id)},getNodeList:function(){var t=this;return Object(r["b"])({url:"technique/productList",method:"post"}).then((function(e){console.log(e,3e4);for(var n=e.data,i=0;i<n.length;i++)n[i].lable=n[i].title;console.log(n,300001),t.data=n,t.treeShow=!0}))},addNode:function(){this.appendFun({pid:0,title:"未命名"})},appendFun:function(t){var e=this;return Object(r["b"])({url:"technique/addProduct",method:"post",data:t}).then((function(t){e.$message({message:"添加成功",type:"success"}),e.getNodeList()}))},append:function(t){console.log(t,777),this.appendFun({pid:t.id,title:"未命名"})},edit:function(t,e){var n=this;console.log(e,600),this.$set(e,"isEdit",1),this.newApiGroupName=e.title,this.$nextTick((function(){n.$refs.input.focus()}))},remove:function(t,e){var n=this,i=t.parent,o=i.data.children||i.data,s=o.findIndex((function(t){return t.id===e.id}));this.$confirm("是否确认删除此节点?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(r["b"])({url:"technique/deleteProduct",method:"post",data:{id:e.id}}).then((function(t){n.$message({message:"删除成功",type:"success"}),o.splice(s,1)})).catch((function(t){n.$message({message:t.msg,type:"warning"})}))}))},submitEdit:function(t,e){var n=this;if(console.log(t,e,this.newApiGroupName),e.title!=this.newApiGroupName)return n.$set(e,"isEdit",0),n.$set(e,"title",this.newApiGroupName),Object(r["b"])({url:"technique/editProduct",method:"post",data:e}).then((function(t){n.getNodeList(),n.newApiGroupName="",n.$message({message:"编辑成功",type:"success"})})).catch((function(t){n.$message({message:t.msg,type:"warning"})}));console.log("没有修改"),this.newApiGroupName="",this.$set(e,"isEdit",0)},click:function(t,e,n){console.log(t,e,n,"llala"),t.children||(this.nodeId=t.id,this.processName=t.title,this.doRefresh())},handleNodeClick:function(){},appendNode:function(t,e){},removeNode:function(t,e){var n=this;0==t.childNodes.length?this.$confirm("是否确认删除此节点?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return delNatureTreeNode(e.id)})).then((function(t){200===t.code?(n.getTreeselect(),n.msgSuccess("删除成功")):n.$message({message:t.msg,type:"warning"})})).catch((function(){})):this.$message({message:"该节点下存在子节点，不允许直接删除",type:"warning"})},editNode:function(t,e){var n=this;this.resetNodeForm(),getNatureTreeNode(e.id).then((function(e){200===e.code&&(n.nodeForm=e.data,n.nodeTitle="编辑节点",n.parentTreeName=t.parent.title,n.dialogNodeFormVisible=!0)}))}},mounted:function(){this.doRefresh(),this.getNodeList()}},u=d,l=(n("dc56"),n("2877")),p=Object(l["a"])(u,i,o,!1,null,"786315ea",null);e["default"]=p.exports},"5dd4":function(t,e,n){},"9f63":function(t,e,n){"use strict";n.r(e),n.d(e,"GetList",(function(){return o})),n.d(e,"AddObj",(function(){return s})),n.d(e,"UpdateObj",(function(){return a})),n.d(e,"DelObj",(function(){return c})),n.d(e,"GetCascadeData",(function(){return r}));var i=n("22ce");function o(t){return Object(i["b"])({url:"technique/index/pid/"+t.nodeId,method:"post",data:{page:t.current,limit:t.size}}).then((function(e){console.log(e,200,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var n=e.data;for(var i in n)delete n[i].create_time,delete n[i].update_time,delete n[i].delete_time;return e.data.records=n,console.log(e,300,e.data),e}))}function s(t){return Object(i["b"])({url:"technique/add",method:"post",data:t})}function a(t){return Object(i["b"])({url:"technique/edit",method:"post",data:t})}function c(t){return Object(i["b"])({url:"technique/delete",method:"post",data:{id:t}})}function r(){return Object(i["b"])({url:"/select/cascadeData",method:"get"})}},a907:function(t,e,n){"use strict";n.r(e),n.d(e,"crudOptions",(function(){return i}));n("22ce");var i=function(t){return{rowHandle:{fixed:"right",width:180,view:{show:!1}},searchOptions:{show:!1},pageOptions:{compact:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12},columns:[{title:"ID",key:"id",type:"text",form:{disabled:!0,show:!1}},{title:"pid",key:"pid",type:"text",form:{disabled:!0,show:!1}},{title:"名称",key:"title",type:"text"},{title:"分钟",key:"minutes",type:"text"},{title:"调试/分钟",key:"debug",type:"text"},{title:"单件/分钟",key:"singleton",type:"text"},{title:"状态",key:"status",type:"dict-switch",dict:{data:[{value:1,label:"开启"},{value:0,label:"关闭"}]},form:{component:{show:function(t){return!t.form.number}}},component:{disabled:function(t){return!t.form.number}}}]}}},dc56:function(t,e,n){"use strict";var i=n("5dd4"),o=n.n(i);o.a}}]);