(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d696f"],{"72ca":function(t,e,o){"use strict";o.r(e),o.d(e,"crudOptions",(function(){return s}));var i=o("22ce"),s=function(t){return{rowHandle:{fixed:"right",width:440,custom:[{text:"产品信息",type:"success",size:"small",emit:"productDetail"},{text:"对比查看",type:"success",size:"small",emit:"comparison"}]},pageOptions:{compact:!1},options:{height:"100%"},viewOptions:{componentType:"row",disabled:!1},formOptions:{defaultSpan:12},columns:[{title:"ID",key:"id",width:60,type:"text",form:{disabled:!0}},{title:"订单编号",key:"order_code",sortable:!0,type:"text",width:100},{title:"订单名称",key:"order_name",type:"text"},{title:"下单日期",key:"order_date",type:"datetime",width:150,form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}},{title:"销售员",key:"contacts_name",type:"text",search:{show:!0}},{title:"电话",key:"contacts_phone",type:"text"},{title:"订单状态",key:"status",type:"text"},{title:"计划交货日期",key:"delivery_date",type:"datetime",width:150,form:{component:{props:{valueFormat:"yyyy-MM-dd HH-mm-ss"}}}},{title:"客户号",key:"customer_no",type:"text"},{title:"客户公司",key:"customer_company",type:"text",search:{show:!0}},{title:"项目编号",key:"project_code",search:{show:!0},form:{disabled:!0},type:"text"},{title:"项目名称",key:"project_name",type:"select",dict:{url:"/dicts/getProjectList",getData:function(t,e){return Object(i["b"])({url:"project/getProjectList",method:"post"}).then((function(t){for(var e=t.data,o=[{value:"",label:"请选择"}],i=0;i<e.length;i++)o.push({value:e[i].project_name,label:e[i].project_name});return o}))}}},{title:"合计",key:"total_count",type:"text"}]}}}}]);