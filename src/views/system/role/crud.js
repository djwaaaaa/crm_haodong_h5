export const crudOptions = (vm) => {
  return {
    rowHandle:{
      fixed: 'right',
      width: 360,
      view: {
        thin: true,
        disabled () {
          return !vm.hasPermissions('system.auth/add')
        }
      },
      edit: {
        thin: true,
        disabled: () => {
          return !vm.hasPermissions('system.auth/edit')
        }
      },
      remove: {
        thin: true,
        disabled: () => {
          return !vm.hasPermissions('system.auth/delete')
        }
      },
      custom: [
        {
          thin: true,
          text: "授权",
          type: 'warning',
          size: 'small',
          emit: 'authz',
          icon: 'el-icon-s-flag',
          disabled () {
            return !vm.hasPermissions('system.auth/authorize')
          }
        }
      ]
    },
    pageOptions: {
      compact: false
    },
    options: {
      height: '100%',
      // maxHeight:"10%"
    },
    viewOptions: {
      componentType: 'row'
    },
    formOptions: {
      defaultSpan: 12 // 默认的表单 span
    },
    columns: [
      {
        title: 'ID',
        key: 'id',
        width: 60,
        sortable: true,
        form:{
          disabled:true
        },
      },
      {
        title: '排序',
        key: 'sort',
        sortable: true,
        type: 'text',
        width: 60,
      },
      {
        title: '角色名称',
        key: 'title',
        type: 'text',
        form:{
          rules:[
            {
              required: true,
              message:"请输入角色名称"
            }
          ]
        }
      },
      {
        title: '备注信息',
        key: 'remark',
        type: 'text',
      },
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
      component: {
        // disabled (context) {
        //   return !context.form.number
        // }
      }
      },
      {
        title: '创建日期',
        key: 'create_time',
        form:{
          disabled:true
        },
      },
    ]
  }
}
