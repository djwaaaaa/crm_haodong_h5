(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cf59c28","chunk-5469e570","chunk-9a66e432","chunk-7a4159e1","chunk-93f067fc","chunk-2d0b2240","chunk-2d0cef4e","chunk-2d0a4f32","chunk-2d0dacc7","chunk-2d0bfe94"],{"092e":function(t,e,s){t.exports=s.p+"img/we.2ee17284.png"},"0c07":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("d2-container",{staticClass:"page"},[s("div",{staticClass:"content"},[t._v("浩东净化")])])},n=[],r=s("c8a3"),a=s("7ae8"),c=s("617a"),l={components:{D2HelpBtn:r["default"],D2Badge:a["default"],D2PageCover:c["default"]}},u=l,o=(s("2792"),s("2877")),d=Object(o["a"])(u,i,n,!1,null,"f1a174c4",null);e["default"]=d.exports},"239b":function(t,e,s){"use strict";s.r(e),e["default"]={crud:"  columns: [\n    {\n      title: '日期', //字段名称\n      key: 'date', //字段key\n      type: 'date', //字段类型，添加、修改、查询将自动生成相应表单组件\n    },\n    {\n      title: '状态',\n      key: 'status',\n      type: 'select', //选择框，默认单选\n      dict: { url: '/dicts/OpenStatusEnum' }//远程数据字典\n    },\n    {\n      title: '地区',\n      key: 'province',\n      type: 'select', //选择框\n      form: { //表单组件自定义配置，此处配置选择框为多选\n        component: { //支持任何v-model组件\n          props: { filterable: true, multiple: true, clearable: true }\n        }\n      },\n      dict: {\n        data: [ //本地数据字典\n          { value: 'sz', label: '深圳' },\n          { value: 'gz', label: '广州' },\n          { value: 'wh', label: '武汉' },\n          { value: 'sh', label: '上海' }\n        ]\n      }\n    }\n  ]\n  "}},2792:function(t,e,s){"use strict";var i=s("8712"),n=s.n(i);n.a},4013:function(t,e,s){t.exports=s.p+"img/gif.2ae7c530.webp"},"5d49":function(t,e,s){"use strict";var i=s("d465"),n=s.n(i);n.a},"617a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d2-page-cover"},[s("p",{staticClass:"d2-page-cover__title",on:{click:function(e){return t.$open("https://github.com/greper/d2-crud-plus")}}},[s("d2-icon-svg",{staticClass:"logo",attrs:{name:"d2-admin"}}),t._v(" d2-crud-plus "+t._s(t.$version))],1),s("p",{staticClass:"d2-page-cover__sub-title"},[t._v("d2-crud加强版，简化d2-crud配置，定义字段类型，快速开发crud功能")]),t._m(0),s("p",{staticClass:"d2-page-cover__build-time"},[t._v("FINAL BUILD TIME "+t._s(t.$buildTime))]),t._t("footer"),t._m(1)],2)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"exampleBox"},[i("div",{staticClass:"right"},[i("img",{attrs:{src:s("4013")}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("div",{staticClass:"toStar"},[t._v("喜欢就去star一下吧 "),i("i",{staticClass:"fa fa-hand-o-right"})]),i("a",{attrs:{target:"blank",href:"https://github.com/greper/d2-crud-plus"}},[i("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0","vertical-align":"top",width:"150px"},attrs:{src:s("6cae"),alt:"Fork me on GitHub"}})])])}],r=s("239b"),a={data:function(){return{helper:r["default"]}}},c=a,l=(s("d6c3"),s("2877")),u=Object(l["a"])(c,i,n,!1,null,"426e979f",null);e["default"]=u.exports},6251:function(t,e,s){t.exports=s.p+"img/d2-help-button@2x.f2b91bcb.png"},"6cae":function(t,e,s){t.exports=s.p+"img/darkblue@2x.6dc8e790.png"},"6fc0":function(t,e,s){"use strict";s.r(e);var i=s("0c07");e["default"]=i["default"]},"7ae8":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d2-badge"},[s("p",{attrs:{align:"center"}},[s("a",[s("img",{attrs:{src:"https://img.shields.io/github/forks/greper/d2-crud-plus.svg"}})]),s("a",[s("img",{attrs:{src:"https://img.shields.io/github/stars/greper/d2-crud-plus.svg"}})]),s("a",[s("img",{attrs:{src:"https://img.shields.io/github/issues/greper/d2-crud-plus.svg"}})]),s("a",[s("img",{attrs:{src:"https://img.shields.io/github/issues-closed/greper/d2-crud-plus.svg"}})]),s("a",[s("img",{attrs:{src:"https://img.shields.io/github/issues-pr/greper/d2-crud-plus.svg"}})]),s("a",[s("img",{attrs:{src:"https://img.shields.io/github/issues-pr-closed/greper/d2-crud-plus.svg"}})])]),s("p",{attrs:{align:"center"}},[s("a",[s("img",{attrs:{src:"https://img.shields.io/github/last-commit/greper/d2-crud-plus.svg"}})]),s("a",[s("img",{attrs:{src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg"}})])])])}],r=(s("5d49"),s("2877")),a={},c=Object(r["a"])(a,i,n,!1,null,"2780e236",null);e["default"]=c.exports},8712:function(t,e,s){},c8a3:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{staticStyle:{width:"138px"},attrs:{src:s("6251")},on:{click:function(e){t.dialogVisible=!0}}}),i("el-dialog",{attrs:{title:"帮助",width:"800px",visible:t.dialogVisible,"append-to-body":!0},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticStyle:{"margin-top":"-25px","margin-bottom":"-25px"}},[i("el-button-group",{staticClass:"d2-mb"},[i("el-button",{on:{click:function(e){return t.$open("https://github.com/greper/d2-crud-plus")}}},[i("d2-icon",{staticClass:"d2-mr-5 ",attrs:{name:"github"}}),t._v(" 主页 ")],1),i("el-button",{on:{click:function(e){return t.$open("http://qiniu.veryreader.com/D2CrudPlusExample/index.html")}}},[i("d2-icon",{staticClass:"d2-mr-5",attrs:{name:"book"}}),t._v(" 示例 ")],1),i("el-button",{on:{click:function(e){return t.$open("https://greper.github.io/d2-crud-plus/")}}},[i("d2-icon",{staticClass:"d2-mr-5",attrs:{name:"book"}}),t._v(" 文档(Git) ")],1),i("el-button",{on:{click:function(e){return t.$open("http://greper.gitee.io/d2-crud-plus/")}}},[i("d2-icon",{staticClass:"d2-mr-5",attrs:{name:"book"}}),t._v(" 文档(码云) ")],1),i("el-button",{on:{click:function(e){return t.$open("https://fairyever.com/d2-admin/doc/zh/")}}},[i("d2-icon",{staticClass:"d2-mr-5",attrs:{name:"book"}}),t._v(" d2-admin 文档 ")],1),i("el-button",{on:{click:function(e){return t.$open("https://fairyever.com/d2-admin/doc/zh/ecosystem-d2-crud/")}}},[i("d2-icon",{staticClass:"d2-mr-5",attrs:{name:"book"}}),t._v(" d2-crud 文档 ")],1)],1),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("el-alert",{staticClass:"d2-mb",attrs:{closable:!1,type:"info",title:"微信加作者好友寻求帮助"}}),i("img",{staticStyle:{width:"100%"},attrs:{src:s("092e")}})],1)],1)],1)])],1)},n=[],r={data:function(){return{dialogVisible:!1}}},a=r,c=s("2877"),l=Object(c["a"])(a,i,n,!1,null,null,null);e["default"]=l.exports},cd6a:function(t,e,s){},d465:function(t,e,s){},d6c3:function(t,e,s){"use strict";var i=s("cd6a"),n=s.n(i);n.a}}]);