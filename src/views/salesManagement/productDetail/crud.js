export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right', // 右边固定列
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
      defaultSpan: 12, // 默认的表单 span
      appendToBody: true
    },
    columns: [
      {
        title: 'ID',
        key: 'id',
        width: 60,
        sortable: true,
        form: {//form表单的配置
          disabled: true, //禁止添加输入与修改输入【可选】默认false
        }
      },
      {
        title: '销售合同ID',
        key: 'sale_id',
        sortable: true,
        search: { show: true },
        type: 'text',
        width: 150,
        form: {
          disabled: true,
        }
      },
      {
        title: '销售合同编号',
        key: 'contract_code',
        type: 'text',
        search: { show: true },
        width: 150,
      },
      {
        title: '产品名称',
        key: 'product_name',
        type: 'text',
      },
      {
        title: '客户产品名称',
        key: 'customer_product_name',
        type: 'text',
      },
      {
        title: '税码',
        key: 'tax_code',
        type: 'text',
      },
      {
        title: '开票产品名称',
        key: 'invoice_product_name',
        type: 'text',
      },
      {
        title: '产品图片',
        key: 'product_img',
        type: 'text',
      },
      {
        title: '规格',
        key: 'specs_value',
        type: 'text',
      },
      {
        title: '颜色',
        key: 'color',
        type: 'text',
      },
      {
        title: '技术参数',
        key: 'technical_param',
        type: 'text',
      },
      {
        title: '单位',
        key: 'unit',
        type: 'text',
      },
      {
        title: '数量',
        key: 'count',
        type: 'text',
      },
      {
        title: '不含税单价',
        key: 'no_tax_price',
        type: 'text',
      },
      {
        title: '不含税总单价',
        key: 'no_tax_total_price',
        type: 'text',
      },
      {
        title: '税率',
        key: 'tax_rate',
        type: 'text',
      },
      {
        title: '税额',
        key: 'tax_amount',
        type: 'text',
      },
      {
        title: '含税单价',
        key: 'tax_price',
        type: 'text',
      },
      {
        title: '含税总价',
        key: 'tax_total_price',
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
