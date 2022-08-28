import { request } from '@/api/service'
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
        type: 'select',
        dict: {
          data: [
            { value: 1, label: '制作中' },
            { value: 2, label: '收货中' },
            { value: 3, label: '已收货' }
          ]
        }
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
        },
        type: 'text',
      },
      {
        title: '项目名称',
        key: 'project_name',
        type: 'select',
        dict: {
          url: '/dicts/getProjectList', // 配置url，可以缓存字典数据
          getData (url, dict) { // 覆盖全局获取字典请求配置
            return request({
              url: "project/getProjectList",
              method: 'post'
            }).then(ret => {
              let projectList = ret.data;
              let arr = [{ value: "", label: '请选择'}];
              for (let i = 0; i < projectList.length; i++) {
                arr.push({value:projectList[i].project_code,label:projectList[i].project_name})
              }
              return arr
            })
          }
        },
      },
      {
        title: '合计',
        key: 'total_count',
        type: 'text',
      },
    ]
  }
}
