export const crudOptions = (vm) => {
  return {
    pageOptions: {
      compact: false
    },
    searchOptions:{
      show: false
    },
    options: {
      height: '100%'
    },
    viewOptions: {
      componentType: 'row'
    },
    formOptions: {
      defaultSpan: 12, // 默认的表单 span
      appendToBody: true
    },
    columns: [
      // {
      //   title: 'ID',
      //   key: 'id',
      //   width: 60,
      //   sortable: true
      // },
      {
        title: '报价单id',
        key: 'offer_id',
        type: 'text',
        disabled: true,
        form:{
          component:{
            value:vm.offerGuid,
            readonly: true,
            show: false,
          }
        },
      },
      // {
      //   title: '报价单guid',
      //   key: 'offer_guid',
      //   sortable: true,
      //   search: { show: true },
      //   disabled: true,
      //   form:{
      //     component:{
      //       value:vm.offerGuid,
      //       readonly: true,
      //       show: false,
      //     }
      //   },
      //   width: 150,
      // },

      {
        title: '沟通日期',
        key: 'connect_date',
        type: 'datetime',
        width: 140,
        form:{
          component:{
            props:{
              valueFormat:"yyyy-MM-dd HH-mm-ss"
            }
          }
        }
      },
      {
        title: '沟通内容',
        key: 'connect_content',
        type: 'text-area',
      },
      {
        title: '沟通结果',
        key: 'connect_result',
        type: 'text-area'
      },
    ]
  }
}
