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
        title: '项目编号',
        key: 'project_code',
        sortable: true,
        type: 'text',
        search: { show: true },
        width: 120,
        form: {
          disabled: true
        }
      },
      {
        title: '项目名称',
        key: 'project_name',
        type: 'text',
        form: {
          disabled: true
        }
      },
      {
        title: '合同编号',
        key: 'contract_code',
        search: { show: true },
        sortable: true,
        type: 'text',
        width: 100
      },
      {
        title: '付款方式',
        key: 'pay_type',
        type: 'select',
        width: 80,
        dict: {
          data: [
            { value: 1, label: '现金' },
            { value: 2, label: '银行转账' },
            { value: 3, label: '汇款' },
            { value: 4, label: '支票' },
            { value: 5, label: '本票' }
          ]
        }
      },
      {
        title: '供方公司',
        key: 'company',
        type: 'text',
      },
      {
        title: '合同签订日期',
        key: 'sign_date',
        type: 'date',
        // search: { show: true },
        width: 100,
        form: {
          component: {
            props: {
              valueFormat: 'yyyy-MM-dd'
            }
          }
        }
      },
      {
        title: '合同终止日期',
        key: 'end_date',
        type: 'date',
        // search: { show: true },
        width: 100,
        form: {
          component: {
            props: {
              valueFormat: 'yyyy-MM-dd'
            }
          }
        }
      },
      {
        title: '账款状态',
        key: 'account_status',
        type: 'select',
        width: 120,
        dict: {
          data: [
            { value: 1, label: '合同期内未结清' },
            { value: 2, label: '已过合同期未结清' },
            { value: 3, label: '已结清' }
          ]
        },
        search: { show: true }
      },
      {
        title: '合同金额',
        key: 'contract_price',
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
        title: '收款明细',
        key: 'detail',
        type: 'textarea'
      },
      {
        title: '备注',
        key: 'remark',
        type: 'textarea'
      },
    ]
  }
}
