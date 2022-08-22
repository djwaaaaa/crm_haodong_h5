export const crudOptions = (vm) => {
  return {
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
        sortable: true
      },
      {
        title: '排序',
        key: 'sort',
        sortable: true,
        type: 'text',
        width: 100,
        sortable: true
      },
      {
        title: '用户名',
        key: 'username',
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
      },
      {
        title: '创建日期',
        key: 'create_time',
        type: 'text',
        width: 150,
      },
    ]
  }
}
