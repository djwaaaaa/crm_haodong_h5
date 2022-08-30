<template>
  <d2-container  :class="{'page-compact':crud.pageOptions.compact}">
    <template slot="header">采购合同</template>
    <d2-crud-x
        ref="d2Crud"
        v-bind="_crudProps"
        v-on="_crudListeners"
        @productDetail='getProductDetail'
        @comparison="getComparisonCheck"
    >
      <div slot="header">
        <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch"  />
        <el-button-group>
          <el-button size="small" type="primary" @click="addSalesContract"><i class="el-icon-plus"/> 新增</el-button>
          <!-- <el-button size="small" type="primary" @click="addRow"><i class="el-icon-plus"/> 新增</el-button> -->
        </el-button-group>
        <crud-toolbar :search.sync="crud.searchOptions.show"
                      :compact.sync="crud.pageOptions.compact"
                      :columns="crud.columns"
                      @refresh="doRefresh()"
                      @columns-filter-changed="handleColumnsFilterChanged"/>

      </div>
    </d2-crud-x>
    <product-Detail ref="dialog" v-if="dialogShow" :purchasedID="purchase_id"  @closeProductDetail="closeProductDetail"></product-Detail>
    <comparison-Check ref="check" v-if="checkShow" :project_code="project_code" @closeDialog="closeDialog"></comparison-Check>
  </d2-container>
</template>

<script>
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
import productDetail from './components/productDetail'
import comparisonCheck from '../../comparisonCheck'
export default {
  name: 'formSelect',
  mixins: [d2CrudPlus.crud],
  components:{
    productDetail,
    comparisonCheck
  },
  data () {
    return {
      dialogShow:false,
      checkShow:false,
      project_code:null,
      purchase_id:null
    }
  },
  methods: {
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
    getComparisonCheck({ index, row }, done){
      this.checkShow=true;
      this.project_code = row.project_code;
      console.log(row,1000)
      this.$nextTick(()=>{
        this.$refs.check.checkDialog = true;
      })
    },
    closeDialog(){
      this.checkShow=false;
    },
    getProductDetail({ index, row }, done){
      console.log(row,999)
      this.purchase_id = row.purchase_code;
      this.dialogShow = true;
      this.$nextTick(()=>{
        this.$refs.dialog.productDialog = true;
      })
    },
    closeProductDetail(){
      this.dialogShow=false;
    },
    addSalesContract(){
      this.$router.push({
        path: '/salesManagement/contractDetail',
        query: {
          add: 1,
        }
      });
    },
  }
}
</script>
