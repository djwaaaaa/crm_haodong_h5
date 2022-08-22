export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right' ,// 右边固定列
    },
    pageOptions: {
      compact: false,
    },
    options: {
      // height: '100%',
      height: '300px',
      highlightCurrentRow: true,
      rowKey: 'id'
    },
    viewOptions: {
      componentType: 'row'
    },
    formOptions: {
      defaultSpan: 12, // 默认的表单 span
      appendToBody: true // 子表格必须 否则弹出对话框无法显示最顶层
    },
    columns: [
      {
        title: 'ID',
        key: 'id',
        width: 60,
        sortable: true,
        form: { disabled: true }
      },
      {
        title: '报价单guid',
        key: 'offer_guid',
        sortable: true,
        search: { show: true },
        type: 'text',
        width: 150,
      },
      {
        title: '物料编码',
        key: 'matter_code',
        type: 'text',
      },
      {
        title: '产品名称',
        key: 'product_name',
        type: 'text',
      },
      {
        title: '产品大类名称',
        key: 'class_name',
        type: 'text',
      },
      {
        title: '规格',
        key: 'specs_value',
        type: 'text',
        width: 200,
      },
      {
        title: '图号',
        key: 'product_draw',
        type: 'text',
      },
      {
        title: '开票名称',
        key: 'billing_name',
        type: 'text',
      },
      {
        title: '价格',
        key: 'price',
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
        title: '简单描述',
        key: 'explain',
        type: 'text',
        width: 400,
      },
      {
        title: '复杂描述',
        key: 'describe',
        type: 'text',
        width: 400,
      },
      {
        title: '项目日期',
        key: 'project_date',
        type: 'datetime',
        form:{
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
