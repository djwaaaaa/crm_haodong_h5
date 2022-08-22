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
      {
        title: 'ID',
        key: 'id',
        width: 60,
        sortable: true
      },
      {
        title: '发票类型',
        key: 'invoice_type',
        sortable: true,
        type: 'text',
        width: 100,
      },
      {
        title: '发票所属合同编号',
        key: 'contract_code',
        type: 'text',
      },
      {
        title: '申请人ID',
        key: 'admin_id',
        type: 'text',
      },
      {
        title: '申请人',
        key: 'admin_name',
        type: 'text',
      },
      {
        title: '发票内容',
        key: 'invoice_content',
        type: 'text',
      },
      {
        title: '发票金额',
        key: 'invoice_price',
        type: 'text',
      },
      {
        title: '状态',
        key: 'status',
        type: 'text',
      },
      {
        title: '申请时间',
        key: 'add_date',
        type: 'text',
        width: 150,
      },
      {
        title: '处理时间',
        key: 'handle_date',
        type: 'text',
        width: 150,
      },
    ]
  }
}
