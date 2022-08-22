<template>
  <div class="productdetailBox" v-if="productDialog">
  <div class="productDetail">
    <div class="dialog-header">
      <h2>销售产品信息</h2>
      <div class="close">
        <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click="close"><i class="el-dialog__close el-icon el-icon-close"></i></button>
      </div>
    </div>
    <d2-container type="ghost"   :class="{'page-compact':crud.pageOptions.compact}">
      <!-- <template slot="header">销售产品信息</template> -->
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
                        storage="productDetail"
                        @columns-filter-changed="handleColumnsFilterChanged"
                        />

        </div>
      </d2-crud-x>

    </d2-container>
  </div>
  </div>
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
      order_code:null,
    }
  },
  created() {
    console.log(this.$route.query,66610)
  },
  props: ['offerGuid'],
  methods: {
    getCrudOptions () {
      return crudOptions(this)
    },
    pageRequest (query) {
      console.log(999,this.offerGuid)
      query.sale_id = this.offerGuid;
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
      this.$emit("closeProductDetail");
    },
    doLoad () {
          //覆盖为空方法
    },
  },
  mounted(){ //mounted里面调用刷新方法
    this.doRefresh();
    console.log(this.$route.query,666)
  },
  watch:{

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
