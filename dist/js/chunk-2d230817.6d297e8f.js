(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230817"],{ed24:function(e,t,i){"use strict";i.r(t),i.d(t,"crudOptions",(function(){return n}));var l=i("22ce"),n=function(e){return{rowHandle:{fixed:"right",width:400,edit:{thin:!0,text:null,disabled:function(){return!e.hasPermissions("credit.invoice/edit")}},remove:{thin:!0,text:null,disabled:function(){return!e.hasPermissions("credit.invoice/delete")}},custom:[{text:"通过",type:"success",size:"small",emit:"passApplyFor",disabled:function(){return!e.hasPermissions("credit.invoice/adopt")}},{text:"驳回",type:"danger",size:"small",emit:"rejectApplyFor",disabled:function(){return!e.hasPermissions("credit.invoice/reject")}}]},pageOptions:{compact:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12},columns:[{title:"发票类型",key:"invoice_type",sortable:!0,type:"select",width:120,dict:{data:[{value:1,label:"增值税专用发票"},{value:2,label:"增值税普通发票"},{value:3,label:"普通发票"}]},form:{rules:[{required:!0,message:"请选择发票类型"}]}},{title:"销售合同编号",key:"contract_code",width:100,search:{show:!0},type:"select",dict:{url:"/dicts/getSaleList",getData:function(e,t){return Object(l["b"])({url:"contract.sale/getSaleList",method:"post"}).then((function(e){for(var t=e.data,i=[{value:null,label:"请选择"}],l=0;l<t.length;l++)i.push({value:t[l].contract_code,label:t[l].contract_code});return i}))}},form:{rules:[{required:!0,message:"请选择销售合同编号"}]}},{title:"申请人",key:"admin_id",width:100,search:{show:!0},type:"select",dict:{url:"/dicts/getAdminList",getData:function(e,t){return Object(l["b"])({url:"system.admin/getAdminList",method:"post"}).then((function(e){for(var t=e.data,i=[{value:null,label:"请选择"}],l=0;l<t.length;l++)i.push({value:t[l].id,label:t[l].realname});return i}))}},form:{rules:[{required:!0,message:"请选择申请人"}],component:{value:null}}},{title:"发票内容",key:"invoice_content",type:"text"},{title:"发票金额",key:"invoice_price",type:"text"},{title:"状态",key:"status",type:"select",dict:{data:[{value:1,label:"申请中"},{value:2,label:"已通过"},{value:3,label:"已驳回"}]}},{title:"申请时间",key:"add_date",type:"datetime",width:150,form:{disabled:!0}},{title:"处理时间",key:"handle_date",type:"datetime",width:150,form:{disabled:!0}}]}}}}]);