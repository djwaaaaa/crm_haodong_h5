<template>
  <d2-container  :class="{'page-compact':crud.pageOptions.compact}">
    <template slot="header">用户管理</template>
    <d2-crud-x
        ref="d2Crud"
        v-bind="_crudProps"
        v-on="_crudListeners"
        @authz="authzHandle"
        @setPassword="setPasswordFun"
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
    <el-dialog title="授予角色" :visible.sync="dialogPermissionVisible">
      <el-checkbox-group v-model="checkedRoleIds">
        <el-checkbox class="d2-mb-10" v-for="option in roleList" :key="option.id" :label="option.id">{{option.title}}
        </el-checkbox>
      </el-checkbox-group>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updatePermession(currentUserId)">确定
        </el-button>
      </div>
    </el-dialog>

    <el-dialog title="设置密码" :visible.sync="dialogPasswordVisible">
      <div class="passwordForm">
        <div class="formItem">
          <p>用户名称：</p><el-input v-model="userName" :disabled='true'></el-input>
        </div>
        <div class="formItem">
          <p class="name">登录密码：</p><el-input placeholder="请输入登录密码" show-password	v-model="password" :class="{'passwordError':passwordError}"></el-input>
        </div>
        <div class="formItem">
          <p class="name">确认密码：</p><el-input placeholder="请输入确认密码" show-password	 v-model="confirmPassword" :class="{'confirmPasswordError':confirmPasswordError}"></el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updatePassword(userId)">确定
        </el-button>
      </div>
    </el-dialog>
  </d2-container>
</template>

<script>
import { request } from '@/api/service'
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
export default {
  name: 'formSelect',
  mixins: [d2CrudPlus.crud],
  data () {
    return {
      roleList: [],
      checkedRoleIds: [],
      dialogPermissionVisible: false,
      currentUserId: undefined,
      dialogPasswordVisible:false,
      userId:null,
      userName:null,
      password:"",
      confirmPassword:"",
      passwordError:false,
      confirmPasswordError:false,
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
    authzHandle(event) {
      let _this = this;
      return request({
        url: 'system.auth/index?page=1&limit=',
        method: 'get',
      }).then(ret => {
        console.log(ret,"角色",event)
        const roleList = ret.data
        let userRoles = event.row.auth_ids;
        console.log(userRoles,"用户信息")
        if (!userRoles) {
          userRoles = []
        }
        const checkedRoleIds = roleList.map(item => item.id).filter(item => userRoles.indexOf(item) >= 0)
        this.$set(this, 'checkedRoleIds', checkedRoleIds)
        this.$set(this, 'roleList', roleList)
        this.currentUserId = event.row.id
        this.dialogPermissionVisible = true
        // _this.$message({
        //  message: "授予成功",
        //  type: 'success'
        // });
      })
      // api.GetRoleList().then(ret => {
        // const roleList = ret.data
        // let userRoles = event.row.roles
        // if (userRoles == null) {
        //   userRoles = []
        // }
        // const checkedRoleIds = roleList.map(item => item.id).filter(item => userRoles.indexOf(item) >= 0)
        // this.$set(this, 'checkedRoleIds', checkedRoleIds)
        // this.$set(this, 'roleList', roleList)
        // this.currentUserId = event.row.id
        // this.dialogPermissionVisible = true
      // })
    },
    updatePermession(userId) {
      api.DoAuthz(userId, this.checkedRoleIds).then(ret => {
        this.dialogPermissionVisible = false
        this.doRefresh()
      })
    },
    setPasswordFun(event){
      console.log(123,event)
      let _this = this;
      this.userName = event.row.username;
      this.userId = event.row.id;
      this.dialogPasswordVisible = true;
    },
    updatePassword(userId){
      let _this = this;
      if(this.password == ""){
        this.passwordError = true;
        return false;
      }
      if(this.confirmPassword == ""){
        this.confirmPasswordError = true;
        return false;
      }
      if(this.password != this.confirmPassword){
        this.confirmPasswordError = true;
        return false;
      }
      return request({
        url: 'system.admin/password?id='+userId,
        method: 'post',
        data:{
          username: this.userName,
          password: this.password,
          password_again: this.confirmPassword
        }
      }).then(ret => {
        _this.dialogPasswordVisible = false;
        _this.$message({
         message: "设置成功",
         type: 'success'
        });
      })
    }
  }
}
</script>
<style lang="scss">
  .formItem{
    display:flex;
    margin-bottom: 20px;
    p{
      width: 20%;
      &.name:before{
        content: "*";
       color: #f56c6c;
       margin-right: 4px;
      }
    }
    .passwordError .el-input__inner{
      border:1px solid #F56C6C;
    }
    .confirmPasswordError .el-input__inner{
      border:1px solid #F56C6C;
    }
  }
</style>
