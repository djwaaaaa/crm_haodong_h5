import { request } from '@/api/service'
export const crudOptions = (vm) => {
  return {
    pagination: false,
    searchOptions:{
      show: false
    },
    rowHandle: {
      view: {
        thin: true,
        text: null,
        // disabled () {
        //   return !vm.hasPermissions('permission:resource:view')
        // }
      },
      edit: {
        thin: true,
        text: null,
        // disabled: () => {
        //   return !vm.hasPermissions('permission:resource:edit')
        // }
      },
      remove: {
        thin: true,
        text: null,
        // disabled: () => {
        //   return !vm.hasPermissions('permission:resource:del')
        // }
      },
      custom: [
        {
          thin: true,
          text: null,
          type: 'primary',
          size: 'small',
          emit: 'add-sub-resource',
          icon: 'el-icon-plus',
          // disabled: () => {
          //   return !vm.hasPermissions('permission:resource:add')
          // }
        }
      ],
      width: 180,
      fixed: 'right'
    },
    options: {
      highlightCurrentRow: true,
      rowKey: 'id'
    },
    columns: [
      {
        title: '资源名称',
        key: 'title',
        form: {
          component: {
            props: {
              placeholder: '菜单名称'
            }
          }
        },
        width: 200
      },
      {
        title: '图标',
        key: 'icon',
        sortable: false,
        type: 'icon-selector',
        width: 60
      },
      {
        title: '菜单链接',
        key: 'href',
        sortable: true,
        // form: {
        //   component: {
        //     props: {
        //       placeholder: '路由的name'
        //     }
        //   }
        // },
        width: 170
      },
      {
        title: '类型',
        key: 'icon',
        sortable: false,
        type: 'icon-selector',
        width: 60
      },
      // {
      //   title: '权限代码',
      //   key: 'permission',
      //   sortable: true,
      //   search: {},
      //   form: {
      //     component: {
      //       props: {
      //         placeholder: 'aaa:bbb:ccc'
      //       }
      //     }
      //   },
      //   width: 170
      //   // type: 'select',
      //   // search: { disabled: true }, //开启查询
      //   // form: { disabled: true } //表单配置
      //   // disabled: false //是否隐藏列
      // },
      // {
      //   title: '路由地址',
      //   key: 'path',
      //   sortable: true,
      //   search: {},
      //   form: {
      //     component: {
      //       props: {
      //         placeholder: 'permission/resource'
      //       }
      //     }
      //   },
      //   width: 180
      //   // type: 'select',
      //   // search: { disabled: true }, //开启查询
      //   // form: { disabled: true } //表单配置
      //   // disabled: false //是否隐藏列
      // },
      // {
      //   title: '路由组件',
      //   key: 'component',
      //   sortable: true,
      //   search: {},
      //   form: {
      //     component: {
      //       props: {
      //         placeholder: ''
      //       }
      //     },
      //     helper: '最顶层的菜单必须配置为layoutHeaderAside。子菜单配置组件路径，例如/permission/views/resource'
      //   },
      //   width: 180
      //   // type: 'select',
      //   // search: { disabled: true }, //开启查询
      //   // form: { disabled: true } //表单配置
      //   // disabled: false //是否隐藏列
      // },
      {
        title: '排序',
        key: 'sort',
        sortable: true
      },
      // {
      //   title: '资源类型',
      //   key: 'type',
      //   type: 'select',
      //   align: 'center',
      //   width: 100,
      //   search: {},
      //   dict: {
      //     url: '/base/dicts/ResourceTypeEnum',
      //     getData: (url, dict) => { // 配置此参数会覆盖全局的getRemoteDictFunc
      //       return request({ url: url }).then(ret => { return ret.data })
      //     }
      //   },
      //   // search: { disabled: true }, //开启查询
      //   form: {
      //     rules: [{ required: true, message: '请选择资源类型' }]
      //   },
      //   // disabled: false //是否隐藏列
      //   sortable: true
      // },
      {
        title: '状态',
        key: 'status',
        type: 'dict-switch',
        dict: { data: [{ value: 1, label: '开启' }, { value: 0, label: '关闭' }] },
        form: {
          component: {
            value:1,
            show (context) {
              return true
            }
          }
        },
      },
      {
        title: 'id',
        key: 'id',
        // type: 'select',
        // search: { disabled: true }, // 开启查询
        form: { disabled: true }, // 表单配置
        // disabled: false, //是否隐藏列
        sortable: true
      },
      // {
      //   title: '父节点',
      //   key: 'parentId',
      //   sortable: true,
      //   width: 100,
      //   type: 'tree-selector',
      //   dict: {
      //     url: '/permission/manager/resource/tree',
      //     isTree: true,
      //     value: 'id',
      //     label: 'title',
      //     getData: (url, dict) => { // 配置此参数会覆盖全局的getRemoteDictFunc
      //       return request({ url: url }).then(ret => {
      //         return [{ id: 0, title: '根节点', children: ret.data }]
      //       })
      //     }
      //   },
      //   form: {
      //     component: {
      //       props: {
      //         multiple: false,
      //         elProps: {
      //           defaultExpandAll: true
      //         },
      //         dict: { cache: false }
      //       }
      //     }
      //   }
      // }
    ]
  }
}
