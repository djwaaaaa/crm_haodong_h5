import store from '@/store'
import { getPermissions } from './store/api'
import util from '@/libs/util'
import Vue from 'vue'
import permissionDirective from './directive/permission'
import storeModule from './store/permission.store'
import router from '@/router'

function isInited () {
  if (!isEnabled) {
    console.warn('PM is disabled')
    return true
  }
  return store.getters['permission/inited']
}

function registerRouterHook () {
  // 注册路由beforeEach钩子，在第一次加载路由页面时，加载权限
  router.beforeEach(async (to, from, next) => {
    if (!isEnabled || isInited()) {
      next()
      return
    }
    const token = util.cookies.get('token')
    if (!token || token === 'undefined') {
      next()
      return
    }

    // 初始化动态路由
    try {
      console.log('PM is enabled')
      const menuTreeRes = await getPermissions()
      console.log('获取权限数据成功：', menuTreeRes)
      const menuTree = menuTreeRes;

      const menuTree1 = [
          {
              "id": 1,
              "name": "system",
              "title": "系统管理",
              "permission": null,
              "path": "/system",
              "component": "layoutHeaderAside",
              "icon": null,
              "sort": -10001,
              "type": 1,
              "parentId": 0,
              "delFlag": false,
              "createTime": null,
              "updateTime": null,
              "children": [
                  {
                      "id": 7,
                      "name": "permission",
                      "title": "权限管理",
                      "permission": "",
                      "path": "",
                      "component": "",
                      "icon": "",
                      "sort": 1,
                      "type": 1,
                      "parentId": 1,
                      "delFlag": false,
                      "createTime": "2020-02-14T14:05:01.000+0000",
                      "updateTime": "2020-02-14T14:05:01.000+0000",
                      "children": [
                          {
                              "id": 8,
                              "name": "resource",
                              "title": "资源管理",
                              "permission": "permission:resource:view",
                              "path": "/permission/resource",
                              "component": "/permission/views/resource",
                              "icon": "address-book",
                              "sort": 90,
                              "type": 1,
                              "parentId": 7,
                              "delFlag": false,
                              "createTime": "2020-02-14T14:13:00.000+0000",
                              "updateTime": "2020-02-14T14:13:00.000+0000",
                              "children": [
                                  {
                                      "id": 15,
                                      "name": "viewResource",
                                      "title": "查看资源",
                                      "permission": "permission:resource:view",
                                      "path": null,
                                      "component": null,
                                      "icon": "eye",
                                      "sort": 90,
                                      "type": 2,
                                      "parentId": 8,
                                      "delFlag": false,
                                      "createTime": "2020-02-18T10:09:44.000+0000",
                                      "updateTime": "2020-02-18T10:09:44.000+0000",
                                      "children": []
                                  },
                                  {
                                      "id": 12,
                                      "name": "addResource",
                                      "title": "添加资源",
                                      "permission": "permission:resource:add",
                                      "path": null,
                                      "component": null,
                                      "icon": null,
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 8,
                                      "delFlag": false,
                                      "createTime": "2020-02-15T10:53:48.000+0000",
                                      "updateTime": "2020-02-15T10:53:48.000+0000",
                                      "children": []
                                  },
                                  {
                                      "id": 13,
                                      "name": "editResource",
                                      "title": "修改资源",
                                      "permission": "permission:resource:edit",
                                      "path": null,
                                      "component": null,
                                      "icon": null,
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 8,
                                      "delFlag": false,
                                      "createTime": "2020-02-15T10:54:18.000+0000",
                                      "updateTime": "2020-02-15T10:54:18.000+0000",
                                      "children": []
                                  },
                                  {
                                      "id": 14,
                                      "name": "delResource",
                                      "title": "删除资源",
                                      "permission": "permission:resource:del",
                                      "path": null,
                                      "component": null,
                                      "icon": null,
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 8,
                                      "delFlag": false,
                                      "createTime": "2020-02-15T10:54:50.000+0000",
                                      "updateTime": "2020-02-15T10:54:50.000+0000",
                                      "children": []
                                  }
                              ]
                          },
                          {
                              "id": 9,
                              "name": "role",
                              "title": "角色管理",
                              "permission": "permission:role:view",
                              "path": "/permission/role",
                              "component": "/permission/views/role",
                              "icon": null,
                              "sort": 100,
                              "type": 1,
                              "parentId": 7,
                              "delFlag": false,
                              "createTime": "2020-02-15T09:26:39.000+0000",
                              "updateTime": "2020-02-15T09:26:39.000+0000",
                              "children": [
                                  {
                                      "id": 26,
                                      "name": "viewRole",
                                      "title": "查看角色",
                                      "permission": "permission:role:view",
                                      "path": "",
                                      "component": "",
                                      "icon": "eye",
                                      "sort": 90,
                                      "type": 2,
                                      "parentId": 9,
                                      "delFlag": false,
                                      "createTime": "2020-02-18T10:09:44.000+0000",
                                      "updateTime": "2020-02-18T10:09:44.000+0000",
                                      "children": []
                                  },
                                  {
                                      "id": 23,
                                      "name": "addRole",
                                      "title": "添加角色",
                                      "permission": "permission:role:add",
                                      "path": "",
                                      "component": "",
                                      "icon": "",
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 9,
                                      "delFlag": false,
                                      "createTime": "2020-02-15T10:53:48.000+0000",
                                      "updateTime": "2020-02-15T10:53:48.000+0000",
                                      "children": []
                                  },
                                  {
                                      "id": 24,
                                      "name": "editRole",
                                      "title": "修改角色",
                                      "permission": "permission:role:edit",
                                      "path": "",
                                      "component": "",
                                      "icon": "",
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 9,
                                      "delFlag": false,
                                      "createTime": "2020-02-15T10:54:18.000+0000",
                                      "updateTime": "2020-02-15T10:54:18.000+0000",
                                      "children": []
                                  },
                                  {
                                      "id": 25,
                                      "name": "delRole",
                                      "title": "删除角色",
                                      "permission": "permission:role:del",
                                      "path": "",
                                      "component": "",
                                      "icon": "",
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 9,
                                      "delFlag": false,
                                      "createTime": "2020-02-15T10:54:50.000+0000",
                                      "updateTime": "2020-02-15T10:54:50.000+0000",
                                      "children": []
                                  },
                                  {
                                      "id": 27,
                                      "name": "roleAuthz",
                                      "title": "角色授权",
                                      "permission": "permission:role:authz",
                                      "path": null,
                                      "component": null,
                                      "icon": null,
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 9,
                                      "delFlag": false,
                                      "createTime": "2020-03-02T10:04:52.000+0000",
                                      "updateTime": "2020-03-02T10:04:52.000+0000",
                                      "children": []
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "id": 10,
                      "name": "usersphere",
                      "title": "用户中心",
                      "permission": null,
                      "path": null,
                      "component": null,
                      "icon": null,
                      "sort": 1,
                      "type": 1,
                      "parentId": 1,
                      "delFlag": false,
                      "createTime": "2020-02-15T10:46:44.000+0000",
                      "updateTime": "2020-02-15T10:46:44.000+0000",
                      "children": [
                          {
                              "id": 11,
                              "name": "user",
                              "title": "用户管理",
                              "permission": "usersphere:user:view",
                              "path": "/usersphere/user",
                              "component": "/usersphere/views/user",
                              "icon": null,
                              "sort": null,
                              "type": 1,
                              "parentId": 10,
                              "delFlag": false,
                              "createTime": "2020-02-15T10:47:32.000+0000",
                              "updateTime": "2020-02-15T10:47:32.000+0000",
                              "children": [
                                  {
                                      "id": 28,
                                      "name": "usersphere_user_view",
                                      "title": "用户查看",
                                      "permission": "usersphere:user:view",
                                      "path": null,
                                      "component": null,
                                      "icon": null,
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 11,
                                      "delFlag": false,
                                      "createTime": "2020-02-28T05:27:39.000+0000",
                                      "updateTime": "2020-02-28T05:27:39.000+0000",
                                      "children": []
                                  },
                                  {
                                      "id": 29,
                                      "name": "usersphere_user_add",
                                      "title": "用户新增",
                                      "permission": "usersphere:user:add",
                                      "path": null,
                                      "component": null,
                                      "icon": null,
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 11,
                                      "delFlag": false,
                                      "createTime": "2020-02-28T05:27:39.000+0000",
                                      "updateTime": "2020-02-28T05:27:39.000+0000",
                                      "children": []
                                  },
                                  {
                                      "id": 30,
                                      "name": "usersphere_user_edit",
                                      "title": "用户修改",
                                      "permission": "usersphere:user:edit",
                                      "path": null,
                                      "component": null,
                                      "icon": null,
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 11,
                                      "delFlag": false,
                                      "createTime": "2020-02-28T05:27:39.000+0000",
                                      "updateTime": "2020-02-28T05:27:39.000+0000",
                                      "children": []
                                  },
                                  {
                                      "id": 31,
                                      "name": "usersphere_user_del",
                                      "title": "用户删除",
                                      "permission": "usersphere:user:del",
                                      "path": null,
                                      "component": null,
                                      "icon": null,
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 11,
                                      "delFlag": false,
                                      "createTime": "2020-02-28T05:27:39.000+0000",
                                      "updateTime": "2020-02-28T05:27:39.000+0000",
                                      "children": []
                                  },
                                  {
                                      "id": 32,
                                      "name": "usersphere_user_authz",
                                      "title": "用户授予角色",
                                      "permission": "usersphere:user:authz",
                                      "path": null,
                                      "component": null,
                                      "icon": null,
                                      "sort": 100,
                                      "type": 2,
                                      "parentId": 11,
                                      "delFlag": false,
                                      "createTime": "2020-02-28T05:27:39.000+0000",
                                      "updateTime": "2020-02-28T05:27:39.000+0000",
                                      "children": []
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }
      ]
      // 加载动态路由
      await store.dispatch('permission/generateRoutes', { menuTree })
      console.log('PM load success')
      next({ path: to.path, replace: true })
    } catch (e) {
      console.error('加载动态路由失败', e)
      next()
    }
  })
}

const isEnabled = process.env.VUE_APP_PM_ENABLED === 'true'
// 开启权限模块
if (isEnabled) {
  // 注册v-permission指令, 用于控制按钮权限
  Vue.use(permissionDirective)
  // 注册权限的store模块，用于存储当前权限数据
  store.registerModule('permission', storeModule)
  // 注册路由钩子
  // 通过路由守卫，在登录成功后拦截路由，从后台加载权限数据
  // 然后将权限数据转化为菜单和路由，添加到系统中
  registerRouterHook()
}

export default {
  isEnabled,
  isInited
}
