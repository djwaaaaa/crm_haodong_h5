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
      // {
      //   title: 'ID',
      //   key: 'id',
      //   width: 60,
      //   sortable: true
      // },
      {
        title: '项目编号',
        key: 'project_code',
        sortable: true,
        search: { show: true },
        type: 'text',
        width: 150,
      },
      {
        title: '项目名称',
        key: 'project_name',
        type: 'text',
      },
      {
        title: '项目日期',
        key: 'project_date',
        type: 'datetime',
        form:{
          component:{
            props:{
              valueFormat:"yyyy-MM-dd HH-mm-ss"
            }
          }
        }
      },
    ]
  }
}
