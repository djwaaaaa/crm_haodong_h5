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
      //   type: 'text',
      //   // search: { show: true },
      //   sortable: true
      // },
      {
        title: '项目编号',
        key: 'project_code',
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
        search: { show: true },
        type: 'select',
        dict: {
          url: '/dicts/getProjectList', // 配置url，可以缓存字典数据
          getData (url, dict) { // 覆盖全局获取字典请求配置
            return request({
              url: "project/getProjectList",
              method: 'post'
            }).then(ret => {
              let projectList = ret.data;
              let arr = [{ value: null, label: '请选择'}];
              for (let i = 0; i < projectList.length; i++) {
                arr.push({value:projectList[i].project_code,label:projectList[i].project_name})
              }
              return arr
            })
          }
        },
        form:{
          component:{
            value:null,
          }
        }
      },
      {
        title: '合同编号',
        key: 'contract_code',
        width: 100,
        search: { show: true },
        type: 'select',
        dict: {
          url: '/dicts/getSaleList', // 配置url，可以缓存字典数据
          getData (url, dict) { // 覆盖全局获取字典请求配置
            return request({
              url: "contract.sale/getSaleList",
              method: 'post'
            }).then(ret => {
              let projectList = ret.data;
              let arr = [{ value: null, label: '请选择'}];
              for (let i = 0; i < projectList.length; i++) {
                arr.push({value:projectList[i].contract_code,label:projectList[i].contract_code})
              }
              return arr
            })
          }
        },
        form:{
          component:{
            value:null,
          }
        }
      },
      // {
      //   title: '合同类型',
      //   key: 'contract_type',
      //   type: 'text',
      // },
      {
        title: '收款方式',
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
        title: '客户名称',
        key: 'company',
        type: 'text'
      },
      {
        title: '合同生效日期',
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
        key: 'delivery_date',
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
        type: 'text'
      },
      {
        title: '已收金额',
        key: 'received_price',
        type: 'text'
      },
      {
        title: '未收金额',
        key: 'uncollected_price',
        type: 'text'
      },
      {
        title: '收款明细',
        key: 'detail',
        type: 'textarea'
      },
      {
        title: '备注',
        key: 'remark',
        width: 500,
        type: 'text-area',
        viewForm: {
          component: {
            name: null,
            render (h, scope) {
              return <div>{scope.value}</div>
            }
          }
        }
      }
    ]
  }
}
