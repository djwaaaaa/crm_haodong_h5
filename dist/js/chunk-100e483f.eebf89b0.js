(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-100e483f"],{"18d0":function(t,e,i){},a908:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d2p-ueditor"},[i("script",{ref:"script",attrs:{name:t.name,type:"text/plain"}})])},o=[];i("fb6a"),i("b64b"),i("d3b7"),i("25f0");function s(){this.listeners={},this.on=function(t,e){void 0===this.listeners[t]&&(this.listeners[t]=[]),this.listeners[t].push(e)},this.emit=function(t){this.listeners[t]&&this.listeners[t].forEach(t=>t())}}var d=s,r=i("0e00"),a=i("73c5"),c={name:"d2p-ueditor",mixins:[r["a"].inputBase],props:{value:{type:String,default:""},config:{type:Object,default:function(){return{}}},name:{type:String,default:""}},data:function(){return{editor:void 0,mixedConfig:{}}},watch:{disabled:function(t){this.editor&&(t?this.editor.setDisabled():this.editor.setEnabled())},value:function(t){this.dispatch&&this.dispatch("ElFormItem","el.form.blur"),this.$emit("change",t),this.editor.getContent()!==t&&this.setValue(t)}},created:function(){this.initValue=this.value},mounted:function(){var t=this;Object.assign(this.mixedConfig,a["a"]),Object.assign(this.mixedConfig,this.config),this._checkDependencies().then((function(){t.$refs.script?t._initEditor():t.$nextTick((function(){return t._initEditor()}))}))},methods:{onInput:function(t){this.currentValue=t,this.$emit("input",t)},onChange:function(t){this.$emit("change",t)},_initEditor:function(){var t=this;this.$refs.script.id=this.id="editor_"+Math.random().toString(16).slice(-6),this.$emit("beforeInit",this.id,this.mixedConfig),this.editor=window.UE.getEditor(this.id,this.mixedConfig),this.editor.addListener("ready",(function(){2===t.status?t.editor.setContent(t.value):(t.status=2,t.$emit("ready",{vm:t,editor:t.editor}),t.initValue&&t.editor.setContent(t.initValue)),t.editor&&(t.disabled?t.editor.setDisabled():t.editor.setEnabled()),t.editor.addListener("contentChange",t.contentChangeHandler)}))},_checkDependencies:function(){var t=this;return new Promise((function(e,i){var n=!!window.UE&&!!window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length&&!!window.UE.getEditor;n?e():window.$loadEnv?window.$loadEnv.on("scriptsLoaded",(function(){e()})):(window.$loadEnv=new d,t._loadConfig().then((function(){return t._loadCore()})).then((function(){e(),window.$loadEnv.emit("scriptsLoaded")})))}))},_loadConfig:function(){var t=this;return new Promise((function(e,i){if(window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length)e();else{var n=document.createElement("script");n.type="text/javascript",n.src=t.mixedConfig.UEDITOR_HOME_URL+"ueditor.config.js",document.getElementsByTagName("head")[0].appendChild(n),n.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length?e():console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",n.src)}}}))},_loadCore:function(){var t=this;return new Promise((function(e,i){if(window.UE&&window.UE.getEditor)e();else{var n=document.createElement("script");n.type="text/javascript",n.src=t.mixedConfig.UEDITOR_HOME_URL+"ueditor.all.min.js",document.getElementsByTagName("head")[0].appendChild(n),n.onload=function(){window.UE&&window.UE.getEditor?e():console.error("加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",n.src)}}}))},contentChangeHandler:function(){this.$emit("input",this.editor.getContent())},_setContent:function(t){t!==this.editor.getContent()&&this.editor.setContent(t)},setValue:function(t){switch(this.status){case 0:case 1:this.initValue=t;break;case 2:this._setContent(t);break}}},beforeDestroy:function(){this.editor&&this.editor.destroy&&this.editor.destroy()}},u=c,h=(i("ea45"),i("2877")),l=Object(h["a"])(u,n,o,!1,null,null,null);e["default"]=l.exports},ea45:function(t,e,i){"use strict";var n=i("18d0"),o=i.n(n);o.a}}]);