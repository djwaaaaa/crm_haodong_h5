(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216f05"],{c530:function(t,e,r){"use strict";r.r(e),r.d(e,"GetList",(function(){return d})),r.d(e,"AddObj",(function(){return a})),r.d(e,"UpdateObj",(function(){return o})),r.d(e,"DelObj",(function(){return c})),r.d(e,"GetCascadeData",(function(){return u}));var n=r("22ce");function d(t){return console.log(t,888),Object(n["b"])({url:"project.offer_product/index",method:"post",data:{page:t.current,limit:t.size,offer_guid:t.offer_guid}}).then((function(e){console.log(e,9999,e.data),e.data=e.data?e.data:{},e.data.current=t.current,e.data.size=t.size,e.data.total=e.count;var r=e.data;for(var n in r)delete r[n].requirementl,delete r[n].color,delete r[n].create_time,delete r[n].update_time,delete r[n].delete_time;return e.data.records=r,e}))}function a(t){return Object(n["b"])({url:"project/add",method:"post",data:t})}function o(t){return Object(n["b"])({url:"project/edit",method:"post",data:t})}function c(t){return Object(n["b"])({url:"project/delete",method:"post",data:{id:t}})}function u(){return Object(n["b"])({url:"/select/cascadeData",method:"get"})}}}]);