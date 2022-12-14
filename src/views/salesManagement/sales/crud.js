export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right', // 右边固定列
      width: 360,
      custom: [
        {
          text: '产品信息',
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
      edit:{
        show:false
      }
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
        sortable: true,
        type: 'text',
        width: 100,
        search: { show: true },
      },
      {
        title: '供方公司名称',
        key: 'company',
        type: 'text',
      },
      {
        title: '供方单位名称',
        key: 'company_name',
        type: 'text',
      },
      {
        title: '供方工厂地址',
        key: 'address',
        type: 'text',
      },
      {
        title: '供方法定代表人',
        key: 'legal_representative',
        type: 'text',
      },
      {
        title: '供方委托代理人',
        key: 'agent',
        type: 'text',
      },
      {
        title: '供方手机',
        key: 'phone',
        type: 'text',
      },
      {
        title: '供方电话',
        key: 'telephone',
        type: 'text',
      },
      {
        title: '供方传真',
        key: 'fax',
        type: 'text',
      },
      {
        title: '供方电邮',
        key: 'email',
        type: 'text',
      },
      {
        title: '供方开户银行',
        key: 'bank',
        type: 'text',
      },
      {
        title: '供方账号',
        key: 'account',
        type: 'text',
      },
      {
        title: '需方公司名称',
        key: 'customer_company',
        type: 'text',
        search: { show: true },
      },
      {
        title: '需方单位名称',
        key: 'customer_company_name',
        type: 'text',
      },
      {
        title: '需方单位地址',
        key: 'customer_address',
        type: 'text',
      },
      {
        title: '需方法定代表人',
        key: 'customer_legal_representative',
        type: 'text',
      },
      {
        title: '需方委托代理人',
        key: 'customer_agent',
        type: 'text',
      },
      {
        title: '需方手机',
        key: 'customer_phone',
        type: 'text',
      },
      {
        title: '需方电话',
        key: 'customer_telephone',
        type: 'text',
      },
      {
        title: '需方传真',
        key: 'customer_fax',
        type: 'text',
      },
      {
        title: '需方电邮',
        key: 'customer_email',
        type: 'text',
      },
      {
        title: '需方开户银行',
        key: 'customer_bank',
        type: 'text',
      },
      {
        title: '需方账号',
        key: 'customer_account',
        type: 'text',
      },
      {
        title: '合同类型',
        key: 'contract_type',
        type: 'text',
        search: { show: true },
      },
      {
        title: '合同状态',
        key: 'contract_status',
        type: 'text',
        search: { show: true },
      },
      {
        title: '项目编号',
        key: 'project_code',
        type: 'text',
        form:{
          disabled:true
        }
      },
      {
        title: '项目名称',
        key: 'project_name',
        type: 'text',
        search: { show: true },
      },
      {
        title: '签订日期',
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
        title: '交货日期',
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
        title: '合同总金额',
        key: 'total_price',
        type: 'text',
      },
      {
        title: '预付款比例',
        key: 'advance_payment_rate',
        type: 'text',
      },
      {
        title: '是否开票',
        key: 'invoice_flag',
        type: 'text',
      },
      {
        title: '合同说明',
        key: 'contract_description',
        type: 'text',
      },
    ]
  }
}
