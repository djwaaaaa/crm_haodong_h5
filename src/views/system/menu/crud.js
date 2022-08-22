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
        sortable: true
      },
      {
        title: '排序',
        key: 'sort',
        sortable: true,
        type: 'text',
        width: 100,
      },
      {
        title: '角色名称',
        key: 'title',
        type: 'text',
      },
      {
        title: '备注信息',
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
        key: 'project_date',
      },
    ]
  }
}
