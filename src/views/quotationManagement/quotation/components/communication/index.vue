<template>
  <!-- <el-dialog title="详情" v-if="productDialog" :visible.sync="productDialog"
    top="0" custom-class="customDialog" :close-on-click-modal="false" :destroy-on-close="true" @close="withdrawDialogClose"> -->
  <div class="productdetailBox" v-if="communicationDialog">
  <div class="productDetail">
    <div class="dialog-header">
      <h2>沟通记录</h2>
      <div class="close">
        <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click="close"><i class="el-dialog__close el-icon el-icon-close"></i></button>
      </div>
    </div>
    <d2-container type="ghost"  :class="{'page-compact':crud.pageOptions.compact}">
      <d2-crud-x
          ref="d2Crud"
          v-bind="_crudProps"
          v-on="_crudListeners"
      >
        <div slot="header">
          <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch"  />
          <el-button-group>
            <el-button size="small" v-permission="'project.offer_connect/add'" type="primary" @click="addRow"><i class="el-icon-plus"/> 新增</el-button>
          </el-button-group>
          <crud-toolbar :search.sync="crud.searchOptions.show"
                        :compact.sync="crud.pageOptions.compact"
                        :columns="crud.columns"
                        @refresh="doRefresh()"
                        storage="productDetail"
                        @columns-filter-changed="handleColumnsFilterChanged"/>

        </div>
      </d2-crud-x>

    </d2-container>
  </div>
  </div>
  <!-- </el-dialog> -->
</template>

<script>
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
export default {
  name: 'communication',
  mixins: [d2CrudPlus.crud],
  data () {
    return {
      communicationDialog:true,
      offer_guid:null
    }
  },
  props: ['offerGuid'],
  methods: {
    getCrudOptions () {
      return crudOptions(this)
    },
    pageRequest (query) {
      query.offer_guid= this.offerGuid;
      console.log(777222,query.offer_guid,this.offerGuid)
      // if(this.productDialog){
        return api.GetList(query)
      // }
    },
    addRequest (row) {
      console.log('api', api,row)
      return api.AddObj(row)
    },
    updateRequest (row) {
      console.log('----', row)
      return api.UpdateObj(row)
    },
    delRequest (row) {
      return api.DelObj(row.id)
    },
    close(){
      this.communicationDialog = false;
      this.$emit('closeCommunicationDialog');
    },
    doLoad () {
          //覆盖为空方法
    },
  },
  mounted(){ //mounted里面调用刷新方法
    this.doRefresh()
  },
  watch:{
   // productDialog(){
   //   if(this.productDialog){
   //     api.GetList({current:1,size:20,offer_guid:this.offer_guid});
   //   }
   // }
  }
}
</script>
<style lang="scss" scoped="scoped">
  .productdetailBox{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.6);
    z-index:999;
  }
.productDetail{
  width: 75%;
  height: 75%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin:auto;
  padding:20px;
  background:#FFFFFF;
  overflow-y: scroll;
  .container-component{
    height: 90%;
    position: relative !important;
    .el-dialog__wrapper{
    }
  }
}
.customDialog{
 width: 75%;
 height: 75%;
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 margin:auto;
}
</style>
