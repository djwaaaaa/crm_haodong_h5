<template>
  <d2-container  :class="{'page-compact':crud.pageOptions.compact}">
    <template slot="header" @click="chooseList">报价管理</template>
    <d2-crud-x
        ref="d2Crud"
        v-bind="_crudProps"
        v-on="_crudListeners"
         @form-data-change="handleFormDataChange"
        @productDetail='getProductDetail'
        @recordCommunication="getRecordCommunication"
    >
      <div slot="header">
        <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch"  />
        <el-button-group>
          <el-button size="small" type="primary" @click="addRow"><i class="el-icon-plus"/> 新增</el-button>
        </el-button-group>
        <crud-toolbar :search.sync="crud.searchOptions.show"
                      :compact.sync="crud.pageOptions.compact"
                      :columns="crud.columns"
                      @refresh="doRefresh()"
                      @columns-filter-changed="handleColumnsFilterChanged"/>

      </div>
      <!-- <div slot="nestIdFormSlot" slot-scope="scope"> -->
        <!--  form slot 嵌入子表格，把子表格当做一个普通的组件来用，子表格记得要设置高度 -->
        <!-- form slot 文档 http://d2-crud-plus.docmirror.cn/d2-crud-plus/guide/slot.html -->
        <!-- <sub-table :value="scope.form.nestId" @selected="nestIdSelected($event,scope.form)"></sub-table>
      </div> -->
    </d2-crud-x>
    <product-Detail ref="dialog" v-if="dialogShow" :offerGuid="offer_guid" :productDetail="productDetail" @closeProductDetail="closeProductDetail"></product-Detail>
    <!-- <productdetail ref="dialog" v-if="dialogShow"></productdetail> -->
    <communication ref="comm" v-if="commShow" :offerGuid="offer_guid" @closeCommunicationDialog="closeCommunicationDialog" :productDetail="productDetail"></communication>
    <list-Dialog ref="listDialogRef" v-if="listDialogShow" :changeItemName="changeItemName" :listDialogShow="listDialogShow"></list-Dialog>
  </d2-container>
</template>

<script>
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
import { request } from '@/api/service'
import productDetail from './components/productDetail'
import communication from './components/communication'
import listDialog from '../../components/listDialog'
export default {
  name: 'formSelect',
  mixins: [d2CrudPlus.crud],
  components:{
    productDetail,
    communication,
    listDialog
    // productdetail: () => import('./components/productDetail/index.vue'),
    // communication: () => import('./components/communication/index.vue')
  },
  data () {
    return {
      dialogShow:false,
      commShow:false,
      listDialogShow:false,
      offer_guid:null,
      productDetail:null,
      itemName:"",
      // addTemplate:{
      //   project_name: {
      //     value: '888',
      //   },
      // }
    }
  },
  methods: {

    handleFormDataChange ({ key, value }) {
          console.log(key)
          console.log(value)
        },
    getCrudOptions () {
      return crudOptions(this)
    },
    pageRequest (query) {
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
    getProductDetail({ index, row }, done){
      this.offer_guid = row.offer_guid;
      this.productDetail = row;
      // return crudOptions(this)
      this.dialogShow = true;
      this.$nextTick(()=>{
        this.$refs.dialog.productDialog = true;
      })
    },
    getRecordCommunication({index, row }, done){
      console.log(index,7777,row)
      this.offer_guid = row.offer_guid;
      this.commShow = true;
      this.$nextTick(()=>{
        this.$refs.comm.communicationDialog = true;
      })
      // this.$refs.comm.communicationDialog = true;
      // this.$refs.comm.offer_guid = row.offer_guid;
    },
    nestIdSelected (value, form) {
      console.log('nestIdSelected', value, form)
      this.$emit('selected', value)
      form.nestId = value.id
      this.currentNestName = value.name
    },
    closeCommunicationDialog(){
      this.commShow = false;
    },
    closeProductDetail(){
      this.dialogShow=false;
    },
    chooseList(){
      console.log(123456)
      this.listDialogShow = true;
      this.$nextTick(()=>{
        this.$refs.listDialogRef.listDialog = true;
      })
    },
    changeItemName(name){
      console.log(this.$refs.d2Crud,1000,crudOptions(this).columns[3].form.component.value)
      // crudOptions(this).columns[3].form.component.value = "666777";
      // return name;
      this.itemName = name;
      console.log(this.itemName,777)
      // this.pageRequest({project_name:name});
    }
  },
  watch:{
    itemName(){
      console.log(this.itemName,999888)
      crudOptions(this)
    }
  }
}
</script>
