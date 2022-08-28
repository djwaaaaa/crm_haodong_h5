export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right' // 右边固定列
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
      // {
      //   title: 'ID',
      //   key: 'id',
      //   width: 60,
      //   sortable: true
      // },
      {
        title: '发票类型',
        key: 'invoice_type',
        sortable: true,
        type: 'select',
        width: 120,
        dict: {
          data: [
            { value: 1, label: '增值税专用发票' },
            { value: 2, label: '增值税普通发票' },
            { value: 3, label: '普通发票' }
          ]
        }
      },
      {
        title: '发票所属合同编号',
        key: 'contract_code',
        type: 'text',
        form: {
          disabled: true
        }
      },
      // {
      //   title: '申请人ID',
      //   key: 'admin_id',
      //   type: 'text',
      // },
      {
        title: '申请人',
        key: 'realname',
        type: 'text',
        form: {
          disabled: true
        }
      },
      {
        title: '发票内容',
        key: 'invoice_content',
        type: 'text'
      },
      {
        title: '发票金额',
        key: 'invoice_price',
        type: 'text'
      },
      {
        title: '状态',
        key: 'status',
        type: 'select',
        dict: {
          data: [
            { value: 1, label: '申请中' },
            { value: 2, label: '已通过' },
            { value: 3, label: '已驳回' }
          ]
        }
      },
      {
        title: '申请时间',
        key: 'add_date',
        type: 'datetime',
        width: 150,
        form: {
          disabled: true
        }
      },
      {
        title: '处理时间',
        key: 'handle_date',
        type: 'datetime',
        width: 150,
        form: {
          disabled: true
          // component: {
          //   props: {
          //     valueFormat: 'yyyy-MM-dd HH-mm-ss'
          //   }
          // }
        }
      },
    ]
  }
}
