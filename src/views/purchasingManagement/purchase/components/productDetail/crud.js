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
        title: '采购合同ID',
        key: 'purchase_id',
        sortable: true,
        search: { show: true },
        type: 'text',
        width: 150,
      },
      {
        title: '采购合同编号',
        key: 'purchase_code',
        type: 'text',
      },
      {
        title: '产品名称',
        key: 'product_name',
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
        title: '单价',
        key: 'price',
        type: 'text',
      },
      {
        title: '总价',
        key: 'total_price',
        type: 'text',
      },
      {
        title: '备注',
        key: 'remark',
        width: 300,
        type: 'text-area',
        showOverflowTooltip:true,
        viewForm: {
          component: {
            name: null,
            render (h, scope) {
              // console.log(scope.9666)
              return <div>{scope.value}</div>
            }
          }
        }
      }
    ]
  }
}
