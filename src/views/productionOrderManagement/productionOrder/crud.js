export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right' ,// 右边固定列
      width: 440,
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
      ]
    },
    pageOptions: {
      compact: false
    },
    options: {
      height: '100%',
      // fetchDetail(index,row,mode){
      //   console.log(100,index,row,mode)
      // }
    },
    viewOptions: {
      componentType: 'row',
      disabled: false // 开启view
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
        title: '订单编号',
        key: 'order_code',
        sortable: true,
        type: 'text',
        width: 100,
      },
      {
        title: '订单名称',
        key: 'order_name',
        type: 'text',
      },
      {
        title: '下单日期',
        key: 'order_date',
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
        title: '销售员',
        key: 'contacts_name',
        type: 'text',
        search: { show: true },
      },
      {
        title: '电话',
        key: 'contacts_phone',
        type: 'text',
      },
      {
        title: '订单状态',
        key: 'status',
        type: 'text',
        // type: 'select',
        // dict: {
        //   url: '/dicts/OpenStatusEnum'
        // },
        // view: { // 查看时的该字段单独配置
        //   component: { span: 18 }
        // }
      },
      {
        title: '计划交货日期',
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
        title: '客户号',
        key: 'customer_no',
        type: 'text',
      },
      {
        title: '客户公司',
        key: 'customer_company',
        type: 'text',
        search: { show: true },
      },
      {
        title: '项目编号',
        key: 'project_code',
        search: { show: true },
        form:{
          disabled:true
        }
      },
      {
        title: '项目名称',
        key: 'project_name',
        type: 'text',
      },
      {
        title: '合计',
        key: 'total_count',
        type: 'text',
      },
    ]
  }
}
