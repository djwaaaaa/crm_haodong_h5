export const crudOptions = (vm) => {
  return {
    rowHandle:{
      fixed: 'right',
      width: 360,
      edit: {
        thin: true,
        disabled: () => {
          return !vm.hasPermissions('system.admin/edit')
        }
      },
      remove: {
        thin: true,
        disabled: () => {
          return !vm.hasPermissions('system.admin/delete')
        }
      },
      custom: [
        {
          thin: true,
          text: "设置密码",
          type: 'success',
          size: 'small',
          emit: 'setPassword',
          icon: 'el-icon-setting',
          disabled () {
            return !vm.hasPermissions('system.admin/password')
          }
        },
        {
          thin: true,
          text: "授权",
          type: 'warning',
          size: 'small',
          emit: 'authz',
          icon: 'el-icon-s-flag',
          disabled () {
            return !vm.hasPermissions('system.admin/edit')
          }
        }
      ],
      view:{
        show:false
      }
    },
    pageOptions: {
      compact: false
    },
    options: {
      height: '100%'
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
        // search: { show: true },
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
        sortable: true
      },
      {
        title: '用户名',
        key: 'username',
        type: 'text',
      },
      {
        title: '真实姓名',
        key: 'realname',
        type: 'text',
      },
      {
        title: '头像',
        key: 'head_img',
        type: 'avatar-uploader',
      },
      {
        title: '手机',
        key: 'phone',
        type: 'text',
      },
      {
        title: '登陆次数',
        key: 'login_num',
        type: 'text',
        form:{
          disabled:true
        },
      },
      {
        title: '备注',
        key: 'remark',
        type: 'text',
      },
      {
        title: '状态',
        key: 'status',
        type: 'text',
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
        title: '创建日期',
        key: 'create_time',
        type: 'text',
        width: 150,
        form:{
          disabled:true
        },
      },
    ]
  }
}
