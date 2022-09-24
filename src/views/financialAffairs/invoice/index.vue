<template>
  <d2-container  :class="{'page-compact':crud.pageOptions.compact}">
    <template slot="header">发票</template>
    <d2-crud-x
        ref="d2Crud"
        v-bind="_crudProps"
        v-on="_crudListeners"
        @passApplyFor="passApplyFor"
        @rejectApplyFor="rejectApplyFor"
    >
      <div slot="header">
        <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch"  />
        <el-button-group>
          <el-button size="small" v-permission="'credit.invoice/add'" type="primary" @click="addRow"><i class="el-icon-plus"/> 新增</el-button>
        </el-button-group>
        <crud-toolbar :search.sync="crud.searchOptions.show"
                      :compact.sync="crud.pageOptions.compact"
                      :columns="crud.columns"
                      @refresh="doRefresh()"
                      @columns-filter-changed="handleColumnsFilterChanged"/>

      </div>
    </d2-crud-x>
    <el-dialog title="通过" :visible.sync="dialogApplyFor">
      <p class="info">确认通过吗？</p>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="close">取消
        </el-button>
        <el-button type="primary"  size="small" @click="passApply">确定
        </el-button>
      </div>
    </el-dialog>
    <el-dialog title="驳回" :visible.sync="dialogRejectApplyFor">
      <p class="info">确认驳回吗？</p>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="close">取消
        </el-button>
        <el-button type="primary"  size="small" @click="rejectApply">确定
        </el-button>
      </div>
    </el-dialog>
  </d2-container>
</template>

<script>
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
import { request } from '@/api/service'
export default {
  name: 'formSelect',
  mixins: [d2CrudPlus.crud],
  data () {
    return {
      dialogApplyFor:false,
      dialogRejectApplyFor:false,
      id:null
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
    passApplyFor({index, row }, done){
      this.id = row.id;
      this.dialogApplyFor = true;
    },
    passApply(id){
      return request({
        url: 'credit.invoice/adopt',
        method: 'post',
        data:{
          id:this.id
        }
      }).then(ret => {
        this.dialogApplyFor = false;
        this.$message({
          message: ret.msg,
          type: 'success'
        });
        this.doRefresh();
      })
    },
    close(){
      this.dialogApplyFor = false;
      this.dialogRejectApplyFor = false;
    },
    rejectApplyFor({index, row }, done){
      this.id = row.id;
      this.dialogRejectApplyFor = true;
    },
    rejectApply(){
      return request({
        url: 'credit.invoice/reject',
        method: 'post',
        data:{
          id:this.id
        }
      }).then(ret => {
        this.dialogRejectApplyFor = false;
        this.$message({
          message: ret.msg,
          type: 'success'
        });
        this.doRefresh();
      })
    }
  }
}
</script>
<style lang="scss" scoped="">
  .info{
    text-align: center;
    font-size: 16px;
    color: #303133;
  }
</style>
