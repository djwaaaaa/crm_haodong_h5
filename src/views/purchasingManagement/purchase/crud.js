export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right', // 右边固定列
      width: 440,
      custom: [
        {
          text: '产品明细',
          type: 'success',
          size: 'small',
          emit: 'productDetail',
        },
        {
          text: '对比查看',
          type: 'success',
          size: 'small',
          emit: 'comparison',
        },
      ],
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
        type: 'text',
        form:{
          disabled:true
        }
      },
      {
        title: '销售合同编号',
        key: 'contract_code',
        type: 'text',
        width: 100,
        search: { show: true },
      },
      {
        title: '供方公司名称',
        key: 'company',
        type: 'text',
        search: { show: true },
      },
      {
        title: '供方联系人',
        key: 'contacts',
        type: 'text',
      },
      {
        title: '供方联系电话',
        key: 'phone',
        type: 'text',
      },
      {
        title: '采购合同编号',
        key: 'purchase_code',
        type: 'text',
        search: { show: true },
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
        title: '合计金额',
        key: 'total_price',
        type: 'text',
      },
      {
        title: '供方货款账号',
        key: 'account',
        type: 'text',
      },
      {
        title: '供方开户行',
        key: 'bank_name',
        type: 'text',
      },
      {
        title: '供方开户行',
        key: 'account_name',
        type: 'text',
      },
      {
        title: '合同说明',
        key: 'explain',
        type: 'text',
      },
      {
        title: '采购状态',
        key: 'status',
        search: { show: true },
        type: 'select',
          dict: {
             data: [
              { value: 1, label: '采购中',},
              { value: 2, label: '已入库',},
            ]
          },
        form: {
          component: {
            value: 1 // 默认值
          }
        },
      },
      {
        title: '项目编号',
        key: 'project_code',
        type: 'text',
        form:{
          disabled:true
        }
      },
    ]
  }
}
