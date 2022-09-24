<template>
  <!-- <el-dialog title="详情" v-if="productDialog" :visible.sync="productDialog"
    top="0" custom-class="customDialog" :close-on-click-modal="false" :destroy-on-close="true" @close="withdrawDialogClose"> -->
  <div class="productdetailBox" v-if="productDialog">
  <div class="productDetail">
    <div class="dialog-header">
      <h2>产品详情</h2>
      <div class="close">
        <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click="close"><i class="el-dialog__close el-icon el-icon-close"></i></button>
      </div>
    </div>
    <div class="dialog-content">
        <ul>
        	<li v-for="(detail,index) in productDetail" :key="index">
            <p class="first">{{detailKey[index]}}:</p>
            <p>{{detail}}</p>
          </li>
        </ul>
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
            <el-button size="small" v-permission="'project.offer_product/add'" type="primary" @click="addRow"><i class="el-icon-plus"/> 新增</el-button>
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
  name: 'productDetail',
  mixins: [d2CrudPlus.crud],
  data () {
    return {
      productDialog:true,
      offer_guid:null,
      detailKey:{"id":"id","offer_date":"报价日期","project_code":'项目编号',"project_name":'项目名称',"project_date":'项目创建时间',"offer_guid":"报价单guid","offer_draw":'报价编号',"offer_company":'报价单位',"contacts_name":'报价人',"contacts_phone":'报价人电话',"contacts_email":'报价人邮箱',"customer_company":'客户公司',"customer_contacts":'联系人',"customer_phone":'联系电话',"customer_email":'邮箱',"project_price":'项目总价'},
      code:"lalala"
    }
  },
  props: ['offerGuid',"productDetail"],
  methods: {
    getCrudOptions () {
      return crudOptions(this)
    },
    pageRequest (query) {
      query.offer_guid= this.offerGuid;
      console.log(777,query.offer_guid,this.offerGuid)
      return api.GetList(query)
    },
    addRequest (row) {
      console.log('api', api)
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
      this.productDialog = false;
      this.$emit('closeProductDetail');
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
   //     this.pageRequest({current:1,size:20,offer_guid:this.offer_guid});
   //   }
   // },
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
  // display: flex;
  // flex-direction:column;
  overflow-y: scroll;
  .container-component{
    height: 70%;
    // flex:1;
    position: relative !important;
    .el-dialog__wrapper{
    }
  }
  .close .fullscreen{
    right: 55px;
  }
  .dialog-content{
    ul{
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      li{
        width: 33%;
        margin-bottom: 10px;
        list-style: none;
        display: flex;
        p{
          padding: 0;
          margin: 0;
          margin-right: 20px;
          color: #333333;
          font-size:14px;
        }
        .first{
          margin-right: 20px;
          color: #909090;
        }
      }
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
