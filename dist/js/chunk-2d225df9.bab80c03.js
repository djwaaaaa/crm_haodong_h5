(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225df9"],{e5f9:function(t,e,a){"use strict";a.r(e),a.d(e,"GetList",(function(){return r})),a.d(e,"AddObj",(function(){return d})),a.d(e,"UpdateObj",(function(){return c})),a.d(e,"DelObj",(function(){return o})),a.d(e,"GetCascadeData",(function(){return u}));var n=a("22ce");function r(t){return console.log(t,8887),Object(n["b"])({url:"contract.sale_product/index",method:"post",data:{page:t.current,limit:t.size,sale_id:t.sale_id}}).then((function(e){e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var a=e.data;for(var n in a)delete a[n].create_time,delete a[n].update_time,delete a[n].delete_time;return e.data.records=a,e}))}function d(t){return Object(n["b"])({url:"contract.sale_product/add",method:"post",data:t})}function c(t){return Object(n["b"])({url:"contract.sale_product/edit",method:"post",data:t})}function o(t){return Object(n["b"])({url:"contract.sale_product/delete",method:"post",data:{id:t}})}function u(){return Object(n["b"])({url:"/select/cascadeData",method:"get"})}}}]);