<template>
    <d2-container  :class="{'page-compact':crud.pageOptions.compact}">
      <template slot="header">项目管理
      <!-- <productdetail></productdetail> -->
      </template>
      <d2-crud-x
          ref="d2Crud"
          v-bind="_crudProps"
          v-on="_crudListeners"
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
      </d2-crud-x>
       <!-- <div class="productdetailBox">
         <productdetail></productdetail>
       </div> -->
    </d2-container>
</template>

<script>
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
import { productdetail } from './components/productDetail/index.vue'
export default {
  name: 'pm-projectManagement',
  mixins: [d2CrudPlus.crud],
  components:{
    productdetail: () => import('./components/productDetail/index.vue')
  },
  data () {
    return {
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
    }
  },
  mounted(){
    // this.$refs.abc.productDialog = true;
  }
}
</script>
<style lang="scss">
// .productdetailBox{
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background:rgba(0,0,0,0.6);
//   z-index:99999;
// }
</style>
