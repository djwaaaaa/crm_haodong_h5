(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f8f4"],{b3c0:function(t,e,a){"use strict";a.r(e),a.d(e,"GetList",(function(){return n})),a.d(e,"AddObj",(function(){return r})),a.d(e,"UpdateObj",(function(){return o})),a.d(e,"DelObj",(function(){return d})),a.d(e,"GetCascadeData",(function(){return u}));var c=a("22ce");function n(t){return Object(c["b"])({url:"contract.sale/index",method:"post",data:{page:t.current,limit:t.size,customer_company:t.customer_company,contract_code:t.contract_code,contract_status:t.contract_status,project_code:t.project_code,contract_type:t.contract_type}}).then((function(e){console.log(e,200,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var a=e.data;for(var c in a)delete a[c].create_time,delete a[c].update_time,delete a[c].delete_time;return e.data.records=a,console.log(e,300,e.data),e}))}function r(t){return Object(c["b"])({url:"contract.sale/add",method:"post",data:t})}function o(t){return Object(c["b"])({url:"contract.sale/edit",method:"post",data:t})}function d(t){return Object(c["b"])({url:"contract.sale/delete",method:"post",data:{id:t}})}function u(){return Object(c["b"])({url:"/select/cascadeData",method:"get"})}}}]);