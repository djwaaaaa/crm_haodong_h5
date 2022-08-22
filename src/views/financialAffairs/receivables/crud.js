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
      //   type: 'text',
      //   // search: { show: true },
      //   sortable: true
      // },
      {
        title: '项目编号',
        key: 'project_code',
        sortable: true,
        type: 'text',
        width: 100,
      },
      {
        title: '项目名称',
        key: 'project_name',
        type: 'text',
      },
      {
        title: '销售合同编号',
        key: 'contract_code',
        type: 'text',
      },
      {
        title: '合同类型',
        key: 'contract_type',
        type: 'text',
      },
      {
        title: '甲方公司名称',
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
        type: 'datetime',
        width: 150,
        form:{
          component:{
            props:{
              valueFormat:"yyyy-MM-dd HH-mm-ss"
            }
          }
        }
      },
      {
        title: '合同交货日期',
        key: 'delivery_date',
        type: 'datetime',
        width: 150,
        form:{
          component:{
            props:{
              valueFormat:"yyyy-MM-dd HH-mm-ss"
            }
          }
        }
      },
      {
        title: '应收金额',
        key: 'receivable_price',
        type: 'text',
      },
      {
        title: '已收金额',
        key: 'received_price',
        type: 'text',
      },
      {
        title: '未收金额',
        key: 'uncollected_price',
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
