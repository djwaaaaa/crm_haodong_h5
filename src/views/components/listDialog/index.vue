<template>
  <div class="productdetailBox" v-if="listDialog">
  <div class="productDetail">
    <div class="dialog-header">
      <h2>项目名称</h2>
      <div class="close">
        <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click="close"><i class="el-dialog__close el-icon el-icon-close"></i></button>
      </div>
    </div>
    <div class="dialog-content">
        <ul>
        	<li v-for="(item,index) in itemList" :key="index" @click="chooseItem(item)">
            {{item.project_name}}
          </li>
        </ul>
    </div>
  </div>
  </div>
</template>

<script>
import { request } from '@/api/service'
export default {
  name: 'productDetail',
  data () {
    return {
      listDialog:true,
      productDialog:true,
      itemList:null,
    }
  },
  props: ['itemName',"listDialogShow","changeItemName"],
  methods: {
    getProjectList(kw){
      let _this = this;
      return request({
        url: 'project/getProjectList',
        method: 'post',
        data: {
          kw:kw
        }
      }).then(ret => {
        _this.itemList = ret.data;
      })
    },
    chooseItem(item){
      this.changeItemName(item.project_name);
      this.close();
    },
    close(){
      this.listDialog = false;
      // this.listDialogShow = false;
    },
  },
  mounted(){
    this.getProjectList();
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
    z-index:99999;
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
  .close .fullscreen{
    right: 55px;
  }
  .dialog-content{
    height: 85%;
    overflow-y: scroll;
    ul{
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      li{
        margin-bottom: 20px;
        margin-right: 15px;
        list-style: none;
        display: flex;
        padding:5px 10px;
        background:#67C23A;
        color:#FFFFFF;
        border: 1px solid #67C23A;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
}
</style>
