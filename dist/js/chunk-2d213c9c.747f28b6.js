(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213c9c"],{adbe:function(t,e,o){"use strict";o.r(e),o.d(e,"crudOptions",(function(){return a}));var c=o("22ce"),a=function(t){return{rowHandle:{fixed:"right",width:440,custom:[{text:"产品明细",type:"success",size:"small",emit:"productDetail"},{text:"对比查看",type:"success",size:"small",emit:"comparison"}]},pageOptions:{compact:!1},options:{height:"100%"},viewOptions:{componentType:"row"},formOptions:{defaultSpan:12},columns:[{title:"ID",key:"id",width:60,type:"text",form:{disabled:!0}},{title:"销售合同编号",key:"contract_code",width:100,search:{show:!0},type:"select",dict:{url:"/dicts/getSaleList",getData:function(t,e){return Object(c["b"])({url:"contract.sale/getSaleList",method:"post"}).then((function(t){console.log(123456,t);for(var e=t.data,o=[{value:null,label:"请选择"}],c=0;c<e.length;c++)o.push({value:e[c].contract_code,label:e[c].contract_code});return o}))}},form:{component:{value:null}}},{title:"供方公司名称",key:"company",type:"text",search:{show:!0}},{title:"供方联系人",key:"contacts",type:"text"},{title:"供方联系电话",key:"phone",type:"text"},{title:"采购合同编号",key:"purchase_code",type:"text",search:{show:!0}},{title:"合同签订日期",key:"sign_date",type:"date",width:150,form:{component:{props:{valueFormat:"yyyy-MM-dd"}}}},{title:"合计金额",key:"total_price",type:"text"},{title:"供方货款账号",key:"account",type:"text"},{title:"供方开户行",key:"bank_name",type:"text"},{title:"供方开户行",key:"account_name",type:"text"},{title:"合同说明",key:"explain",type:"text"},{title:"采购状态",key:"status",search:{show:!0},type:"select",dict:{data:[{value:1,label:"采购中"},{value:2,label:"已入库"}]},form:{component:{value:1}}},{title:"项目编号",key:"project_code",type:"text",form:{disabled:!0}}]}}}}]);