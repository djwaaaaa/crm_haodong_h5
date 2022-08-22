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
        title: '采购合同编号',
        key: 'contract_code',
        sortable: true,
        type: 'text',
        width: 100,
      },
      {
        title: '供方公司名称',
        key: 'company',
        type: 'text',
      },
      {
        title: '付款方式',
        key: 'pay_type',
        type: 'text',
      },
      {
        title: '合同金额',
        key: 'contract_price',
        type: 'text',
      },
      {
        title: '合同签订日期',
        key: 'sign_date',
        type: 'text',
      },
      {
        title: '应付金额',
        key: 'payable_price',
        type: 'text',
      },
      {
        title: '已付金额',
        key: 'paid_price',
        type: 'text',
      },
      {
        title: '未付金额',
        key: 'unpaid_price',
        type: 'text',
      },
      {
        title: '备注',
        key: 'remark',
        type: 'text',
      },
    ]
  }
}
