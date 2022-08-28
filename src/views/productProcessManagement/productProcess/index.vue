<template>
  <d2-container  :class="{'page-compact':crud.pageOptions.compact}">
    <el-row :gutter="20" style="height:100%">
      <el-col :span="6" style="height:100%" class="leftTable">
        <div>
          <div class="addBox" @click="addNode">
            <div class="el-icon-plus"></div>
          </div>
          <el-tree
                :data="data"
                node-key="id"
                :expand-on-click-node="true"
                @node-click="click"
                :props="treeProps"
                v-if="treeShow"
                >
                <span class="custom-tree-node show-hide" slot-scope="{ node, data }" >
                  <template v-if="data.isEdit==1">
                    <input ref="input"
                      @blur="() => submitEdit(node,data)"
                      v-model="newApiGroupName"
                      class="nodeInput"
                      style="height:24px line-height:24px"></input>
                  </template>

                  <span v-else class="nodeLabel">{{node.label}}</span>
                  <span style="display:none">
                    <el-button
                      type="text"
                      size="mini"
                      @click.stop.prevent="() => append(data)">
                      <div class="node-icon el-icon-plus"></div>
                    </el-button>
                    <el-button
                      type="text"
                      size="mini"
                      @click.stop.prevent="() => edit(node,data)">
                      <div class="node-icon el-icon-edit"></div>
                    </el-button>
                    <el-button
                      type="text"
                      size="mini"
                      @click.stop.prevent="() => remove(node, data)">
                      <div class="node-icon el-icon-delete"></div>
                    </el-button>
                  </span>
                </span>
              </el-tree>
        </div>
      </el-col>
      <el-col :span="18" style="height:100%" class="rightTable">
        <template slot="header">产品工艺</template>
        <d2-crud-x
            ref="d2Crud"
            v-bind="_crudProps"
            v-on="_crudListeners"
        >
          <div slot="header">
            <div class="processName">{{processName}}</div>
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
      </el-col>
    </el-row>

  </d2-container>
</template>

<script>
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
import { request } from '@/api/service'
let id = 1000;
export default {
  name: 'productProcess',
  mixins: [d2CrudPlus.crud],
  data () {
      return {
        treeShow:false,
        data:[],
        nodeId:0,
        processName:null,
        newApiGroupName: '',
        treeProps:{
          label:"title"
        }
      }
  },
  methods: {
    doLoad () {
    },
    getCrudOptions () {
      return crudOptions(this)
    },
    pageRequest (query) {
      query.nodeId = this.nodeId;
      return api.GetList(query)
    },
    addRequest (row) {
      console.log('api', api)
      row.pid = this.nodeId;
      return api.AddObj(row)
    },
    updateRequest (row) {
      console.log('----', row)
      return api.UpdateObj(row)
    },
    delRequest (row) {
      return api.DelObj(row.id)
    },
    getNodeList(){
      let _this = this;
      return request({
        url: 'technique/productList',
        method: 'post',
      }).then(ret => {
        console.log(ret,30000)
        let arr = ret.data;
        for (let i = 0; i < arr.length; i++) {
          arr[i].lable = arr[i].title;
        }
        console.log(arr,300001)
        _this.data = arr;
        _this.treeShow = true;
        // _this.itemList = ret.data;
      })
    },
    addNode(){
     this.appendFun({pid:0,title: '未命名',});
    },
    appendFun(data){
      let _this = this;
      return request({
        url: 'technique/addProduct',
        method: 'post',
        data:data,
      }).then(ret => {
        _this.$message({
         message: "添加成功",
         type: 'success'
        });
        _this.getNodeList();
      })
    },
    append(data) {
      console.log(data,777)
      this.appendFun({pid:data.id,title: '未命名',});
        // const newChild = { id: id++, title: '未命名', children: [] };
        // if (!data.children) {
        //   this.$set(data, 'children', []);
        // }
        // data.children.push(newChild);
      },

    edit(node, data) {
      console.log(data,600)
      this.$set(data, 'isEdit', 1)
      this.newApiGroupName = data.title
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },

    remove(node, data) {
       let _this = this;
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        this.$confirm("是否确认删除此节点?", "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(function () {
            return request({
              url: 'technique/deleteProduct',
              method: 'post',
              data:{id:data.id},
            }).then(ret => {
              _this.$message({
               message: "删除成功",
               type: 'success'
              });
              children.splice(index, 1);
            }).catch(function (ret) {
              _this.$message({
                message: ret.msg,
                type: 'warning'
              });
            });
          })
      },

    submitEdit(node, data) {
      // console.log('点击了保存按钮')
      let _this = this;
      console.log(node,data,this.newApiGroupName)
      if (data.title == this.newApiGroupName) {
        console.log('没有修改')
        this.newApiGroupName = ''
        this.$set(data, 'isEdit', 0)
      } else {
        _this.$set(data, 'isEdit', 0);
        _this.$set(data, 'title', this.newApiGroupName);
        return request({
          url: 'technique/editProduct',
          method: 'post',
          data:data,
        }).then(ret => {
          _this.getNodeList();
          _this.newApiGroupName = '';
          _this.$message({
           message: "编辑成功",
           type: 'success'
          });
        }).catch(function (ret) {
          _this.$message({
            message: ret.msg,
            type: 'warning'
          });
        });
        // console.log('after:', data.id, data.apiGroupName)
        // console.log(this.data)
        // this.updateApiGroup(this.data)
      }
    },

     click(x,y,z){
       console.log(x,y,z,"llala");
      if(!x.children){
        this.nodeId = x.id;
        this.processName = x.title;
        this.doRefresh();
      }
     },
    handleNodeClick(){

    },
    // 新增树节点
    appendNode(node, data) { },
    // 删除树节点
    removeNode(node, data) {
      // 判断该节点是否有子节点
      if(node.childNodes.length != 0){
        this.$message({
          message: '该节点下存在子节点，不允许直接删除',
          type: 'warning'
        });
        return;
      }
      this.$confirm("是否确认删除此节点?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(function () {
          return delNatureTreeNode(data.id);
        })
        .then(response => {
          if (response.code === 200){
            this.getTreeselect();
            this.msgSuccess("删除成功");
          } else {
            this.$message({
              message: response.msg,
              type: 'warning'
            });
            return;
          }
        })
        .catch(function () {});
    },
    // 编辑树节点
    editNode(node, data) {
      this.resetNodeForm();
      getNatureTreeNode(data.id).then(response =>{
        if(response.code === 200){
          this.nodeForm = response.data;
          this.nodeTitle = "编辑节点";
          this.parentTreeName = node.parent.title;
          this.dialogNodeFormVisible = true;
        }
      });
    }
  },
  mounted() {
    this.doRefresh();
    this.getNodeList();
  }
}
</script>
<style lang="scss" scoped="scoped">
  .processName{
    margin-bottom: 20px;
    color:#606266;
  }
  .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }

  .show-hide:hover :nth-child(2) {
      display: inline-block !important;
  }
  .el-tree{
    .nodeLabel{
      font-size:16px;
    }
  }
  .el-tree-node__content {
    line-height: 50px;
  }
  .node-icon{
    font-size:15px;
  }
  .nodeInput{
    border:none;
  }
  .nodeInput:focus{
    outline:1px solid #66b1ff;
  }
  .addBox{
    width: 30px;
    height: 30px;
    border:1px solid #606266;
    text-align: center;
    line-height: 30px;
  }
</style>
