(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43dbe045","chunk-2d22c35e","chunk-2d21a7c5"],{"6d1f":function(e,t,n){"use strict";var r=n("fe41"),o=n.n(r);o.a},"70eb":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",{class:{"page-compact":e.crud.pageOptions.compact}},[n("template",{slot:"header"},[e._v("角色管理")]),n("d2-crud-x",e._g(e._b({ref:"d2Crud",on:{authz:e.authzHandle}},"d2-crud-x",e._crudProps,!1),e._crudListeners),[n("div",{attrs:{slot:"header"},slot:"header"},[n("crud-search",{ref:"search",attrs:{options:e.crud.searchOptions},on:{submit:e.handleSearch}}),n("el-button-group",[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addRow}},[n("i",{staticClass:"el-icon-plus"}),e._v(" 新增")])],1),n("crud-toolbar",{attrs:{search:e.crud.searchOptions.show,compact:e.crud.pageOptions.compact,columns:e.crud.columns},on:{"update:search":function(t){return e.$set(e.crud.searchOptions,"show",t)},"update:compact":function(t){return e.$set(e.crud.pageOptions,"compact",t)},refresh:function(t){return e.doRefresh()},"columns-filter-changed":e.handleColumnsFilterChanged}})],1)]),n("el-dialog",{attrs:{title:"分配权限",visible:e.dialogPermissionVisible,"custom-class":"permission"},on:{"update:visible":function(t){e.dialogPermissionVisible=t}}},[n("el-tree",{ref:"menuTree",staticClass:"filter-tree",attrs:{data:e.treeData,"default-checked-keys":e.checkedKeys,"check-strictly":!1,"node-key":"id","highlight-current":"",props:{label:"title",value:"id"},"show-checkbox":"","default-expand-all":""}}),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updatePermession(e.roleId)}}},[e._v("更 新 ")])],1)],1)],2)},o=[],a=(n("99af"),n("c975"),n("22ce")),s=n("f1eb"),i=n("bc5c"),c=n("1fbf"),d={name:"formSelect",mixins:[c["d2CrudPlus"].crud],data:function(){return{dsScopeData:[],treeData:[],checkedKeys:[],checkedDsScope:[],menuIds:"",list:[],listLoading:!0,form:{},roleId:void 0,rolesOptions:void 0,dialogPermissionVisible:!1}},methods:{getCrudOptions:function(){return Object(i["crudOptions"])(this)},pageRequest:function(e){return s["GetList"](e)},addRequest:function(e){return console.log("api",s),s["AddObj"](e)},updateRequest:function(e){return console.log("----",e),s["UpdateObj"](e)},delRequest:function(e){return s["DelObj"](e.id)},getAllCheckedLeafNodeId:function(e,t,n){for(var r=0;r<e.length;r++){var o=e[r];o.children&&0!==o.children.length?this.getAllCheckedLeafNodeId(o.children,t,n):-1!==t.indexOf(o.id)&&n.push(o.id)}return n},authzHandle:function(e){var t=this;return console.log("authz",e),Object(a["b"])({url:"system.auth/authorize?id=1",method:"get"}).then((function(n){console.log(n,"角色",e),t.$set(t,"treeData",n.data),t.$set(t,"checkedKeys",[]),t.roleId=e.row.id})).then((function(){t.dialogPermissionVisible=!0}))},updateChecked:function(e){var t=this;return s["GetPermission"](e).then((function(e){var n=e.data;n=t.getAllCheckedLeafNodeId(t.treeData,n,[]),console.log("all leaf ",n),t.$set(t,"checkedKeys",n)}))},updatePermession:function(e){var t=this;this.menuIds=this.$refs.menuTree.getCheckedKeys().concat(this.$refs.menuTree.getHalfCheckedKeys()),s["DoAuthz"](e,this.menuIds).then((function(){t.dialogPermissionVisible=!1,t.updateChecked(e)}))}}},u=d,l=(n("6d1f"),n("2877")),h=Object(l["a"])(u,r,o,!1,null,null,null);t["default"]=h.exports},bc5c:function(e,t,n){"use strict";n.r(t),n.d(t,"crudOptions",(function(){return r}));var r=function(e){return{rowHandle:{fixed:"right",width:360,custom:[{thin:!0,text:"授权",type:"warning",size:"small",emit:"authz",icon:"el-icon-s-flag",disabled:function(){}}]},pageOptions:{compact:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12},columns:[{title:"ID",key:"id",width:60,sortable:!0,form:{disabled:!0}},{title:"排序",key:"sort",sortable:!0,type:"text",width:60},{title:"角色名称",key:"title",type:"text",form:{rules:[{required:!0,message:"请输入角色名称"}]}},{title:"备注信息",key:"remark",type:"text"},{title:"状态",key:"status",type:"dict-switch",dict:{data:[{value:1,label:"开启"},{value:0,label:"关闭"}]},form:{component:{value:1,show:function(e){return!0}}},component:{}},{title:"创建日期",key:"create_time",form:{disabled:!0}}]}}},f1eb:function(e,t,n){"use strict";n.r(t),n.d(t,"GetList",(function(){return o})),n.d(t,"AddObj",(function(){return a})),n.d(t,"UpdateObj",(function(){return s})),n.d(t,"DelObj",(function(){return i})),n.d(t,"GetCascadeData",(function(){return c}));var r=n("22ce");function o(e){return Object(r["b"])({url:"system.auth/index",method:"get",data:{page:e.current,limit:e.size}}).then((function(t){return console.log(t,9999,t.data),t.data=t.data?t.data:{},t.data.current=e.current,t.data.size=e.size,t.data.total=t.count,t.data.records=t.data,t}))}function a(e){return Object(r["b"])({url:"system.auth/add",method:"post",data:e})}function s(e){return Object(r["b"])({url:"system.auth/edit",method:"post",data:e})}function i(e){return Object(r["b"])({url:"system.auth/delete",method:"post",data:{id:e}})}function c(){return Object(r["b"])({url:"/select/cascadeData",method:"get"})}},fe41:function(e,t,n){}}]);