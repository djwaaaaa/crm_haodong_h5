export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right' ,// 右边固定列
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
        title: '订单编号',
        key: 'order_code',
        sortable: true,
        search: { show: true },
        type: 'text',
        width: 150,
        form: {
          disabled: true,
        }
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
      // {
      //   title: '规格单位x',
      //   key: 'specs_x',
      // },
      // {
      //   title: '规格单位y',
      //   key: 'specs_y',
      // },
      // {
      //   title: '规格单位z',
      //   key: 'specs_z',
      // },
      // {
      //   title: '规格类型',
      //   key: 'specs_type',//1.长宽高 2.XYZ 3.XY 4.宽高 5.高长 6.规格长度 7.规格
      // },
      {
        title: '规格',
        key: 'specs_value',
        type: 'text',
      },
      {
        title: '图号',
        key: 'product_draw',
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
        title: '说明',
        key: 'explain',
        type: 'text',
        width:300
      },
      {
        title: '客户要求',
        key: 'requirementl',
        type: 'text',
      },
      {
        title: '颜色',
        key: 'color',
        type: 'text',
      },
    ]
  }
}
