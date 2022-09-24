export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right' ,// 右边固定列
      edit: {
        thin: true,
        text: null,
        disabled: () => {
          return !vm.hasPermissions('project.offer_product/edit')
        }
      },
      remove: {
        thin: true,
        text: null,
        disabled: () => {
          return !vm.hasPermissions('project.offer_product/delete')
        }
      },
    },
    pageOptions: {
      compact: false,
    },
    searchOptions:{
      show: false
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
        title: '报价单id',
        key: 'offer_id',
        type: 'text',
        disabled: true,
        form:{
          component:{
            value:vm.offerGuid,
            readonly: true,
            show: false,
          }
        },
      },
      // {
      //   title: '报价单guid',
      //   key: 'offer_guid',
      //   sortable: true,
      //   disabled: true,
      //   form:{
      //     component:{
      //       value:vm.offerGuid,
      //       readonly: true,
      //       show: false,
      //       on:{ //除input change事件外，更多组件事件监听
      //         focus(event){
      //           event.props.value="666";
      //           console.log(event,9999)
      //         } //监听表单组件的select事件
      //       },
      //     }
      //   },
      //   type: 'text',
      //   width: 150,
      // },
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
        type: 'text-area',
        width: 400,
        form:{
          component:{
            span:24
          }
        }
      },
      {
        title: '复杂描述',
        key: 'describe',
        type: 'text-area',
        width: 400,
      },
      // {
      //   title: '项目日期',
      //   key: 'project_date',
      //   type: 'datetime',
      //   form:{
      //     component:{
      //       props:{
      //         valueFormat:"yyyy-MM-dd HH-mm-ss"
      //       }
      //     }
      //   }
      // },
    ]
  }
}
