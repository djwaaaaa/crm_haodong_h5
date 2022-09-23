<template>
  <d2-container :class="{'page-compact':crud.pageOptions.compact}">
    <template slot="header">角色管理</template>
    <d2-crud-x ref="d2Crud" v-bind="_crudProps" v-on="_crudListeners" @authz="authzHandle">
      <div slot="header">
        <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch" />
        <el-button-group>
          <el-button size="small" type="primary" @click="addRow"><i class="el-icon-plus" /> 新增</el-button>
        </el-button-group>
        <crud-toolbar :search.sync="crud.searchOptions.show" :compact.sync="crud.pageOptions.compact"
          :columns="crud.columns" @refresh="doRefresh()" @columns-filter-changed="handleColumnsFilterChanged" />

      </div>
    </d2-crud-x>
    <el-dialog title="分配权限" :visible.sync="dialogPermissionVisible" custom-class="permission">
      <el-tree class="filter-tree permissionTree" :data="treeData" :default-checked-keys="checkedKeys" :check-strictly="false"
        node-key="id" highlight-current :props="{label: 'title', value: 'id'}" show-checkbox ref="menuTree"
        default-expand-all>
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updatePermession(roleId,userTitle)">更 新
        </el-button>
      </div>
    </el-dialog>
  </d2-container>
</template>

<script>
  import {
    request
  } from '@/api/service'
  import * as api from './api'
  import {
    crudOptions
  } from './crud'
  import {
    d2CrudPlus
  } from 'd2-crud-plus'
  export default {
    name: 'formSelect',
    mixins: [d2CrudPlus.crud],
    data() {
      return {
        dsScopeData: [],
      treeData: [],
      checkedKeys: [],
      checkedDsScope: [],
      menuIds: '',
      list: [],
      listLoading: true,
      form: {},
      roleId: undefined,
      rolesOptions: undefined,
      dialogPermissionVisible: false
      }
    },
    methods: {
      getCrudOptions() {
        return crudOptions(this)
      },
      pageRequest(query) {
        return api.GetList(query)
      },
      addRequest(row) {
        console.log('api', api)
        return api.AddObj(row)
      },
      updateRequest(row) {
        console.log('----', row)
        return api.UpdateObj(row)
      },
      delRequest(row) {
        return api.DelObj(row.id)
      },
      getAllCheckedLeafNodeId (tree, checkedIds, temp) {
      for (let i = 0; i < tree.length; i++) {
        const item = tree[i]
        if (item.children && item.children.length !== 0) {
          this.getAllCheckedLeafNodeId(item.children, checkedIds, temp)
        } else {
          if(item.checked){
            temp.push(item.id)
          }
          // if (checkedIds.indexOf(item.id) !== -1) {
          //   temp.push(item.id)
          // }
        }
      }
      return temp
    },
    authzHandle ({ index, row }, done) {
      console.log('authz', row)
      return request({
        url: 'system.auth/authorize?id='+row.id,
        method: 'get',
      }).then(ret => {
        console.log(ret,"角色",event)
        this.$set(this, 'treeData', ret.data);
        this.$set(this, 'checkedKeys', []);
        this.roleId = row.id;
        this.userTitle = row.title;
        this.dialogPermissionVisible = true
        return this.updateChecked();
        }) 
      // resourceApi.GetTree().then(ret => {
      //   this.$set(this, 'treeData', ret.data)
      //   this.$set(this, 'checkedKeys', [])
      //   // this.treeData = ret.data
      //   this.roleId = event.row.id
      //   return this.updateChecked(event.row.id)
      // }).then(() => {
      //   this.dialogPermissionVisible = true
      // })
    },
    updateChecked (id) {
      // return api.GetPermission(id).then(ret => {
        // let checkedIds = ret.data
        // 找出所有的叶子节点
       let checkedIds = this.getAllCheckedLeafNodeId(this.treeData, checkedIds, [])
        console.log('all leaf ', checkedIds)
        this.$set(this, 'checkedKeys', checkedIds)
        this.$nextTick(() => {
          this.$refs.menuTree.setCheckedKeys(checkedIds)
        })
      // })
    },
    func(a,b){
    	return a-b;
    },
    updatePermession (roleId,title) {
      this.menuIds = this.$refs.menuTree.getCheckedKeys().concat(this.$refs.menuTree.getHalfCheckedKeys());
      // this.menuIds = this.menuIds.sort(this.func);
      console.log("从属",this.menuIds);
      return request({
        url: 'system.auth/saveAuthorize',
        method: 'post',
        data:{
          id:roleId,
          title:title,
          node:this.menuIds
        }
      }).then(ret => {
         this.updateChecked();
         this.dialogPermissionVisible = false;
      })
      // api.DoAuthz(roleId, this.menuIds).then(() => {
      //   this.updateChecked(roleId)
      // })
    }
    }
  }
</script>
<style lang="scss">
  .permission{
    height: 70%;
    overflow-y: hidden;
  }
.permissionTree{
  height: 500px;
  overflow-y: scroll;
}
</style>
