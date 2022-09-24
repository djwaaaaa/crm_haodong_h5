export const crudOptions = (vm) => {
  return {
    pageOptions: {
      compact: false
    },
    rowHandle:{
      edit: {
        thin: true,
        text: null,
        disabled: () => {
          return !vm.hasPermissions('project/edit')
        }
      },
      remove: {
        thin: true,
        text: null,
        disabled: () => {
          return !vm.hasPermissions('project/delete')
        }
      },
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
        type: 'text',
        form:{
          disabled:true
        },

      },
      {
        title: '项目编号',
        key: 'project_code',
        sortable: true,
        search: { show: true },
        type: 'text',
        width: 150,
        form:{
          rules:[
            {
              required: true,
              message:"请输入项目编号"
            }
          ]
        }
      },
      {
        title: '项目名称',
        key: 'project_name',
        type: 'text',
        search: { show: true },
        form:{
          rules:[
            {
              required: true,
              message:"请输入项目名称"
            }
          ]
        }
      },
      {
        title: '项目日期',
        key: 'project_date',
        type: 'datetime',
        form:{
          rules:[
            {
              required: true,
              message:"请输入项目日期"
            }
          ],
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
