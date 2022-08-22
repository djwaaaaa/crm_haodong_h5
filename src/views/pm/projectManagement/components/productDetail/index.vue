<template>
  <!-- <el-dialog title="详情" v-if="productDialog" :visible.sync="productDialog"
    top="0" custom-class="" :close-on-click-modal="false" > -->
  <div class="productDetail">
    <d2-container type="ghost"  :class="{'page-compact':crud.pageOptions.compact}">
      <template slot="header">项目管理</template>
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

    </d2-container>
  </div>
  <!-- </el-dialog> -->
</template>

<script>
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
export default {
  // name: 'pm-projectManagement',
  mixins: [d2CrudPlus.crud],
  data () {
    return {
      productDialog:true
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
  }
}
</script>
<style lang="scss" scoped="scoped">
.productDetail{
  width: 75%;
  height: 75%;
}
</style>
