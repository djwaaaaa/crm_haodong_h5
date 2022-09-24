import { request } from '@/api/service'
export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right', // 右边固定列
      edit: {
        thin: true,
        text: null,
        disabled: () => {
          return !vm.hasPermissions('credit.payable/edit')
        }
      },
      remove: {
        thin: true,
        text: null,
        disabled: () => {
          return !vm.hasPermissions('credit.payable/delete')
        }
      },
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
      //   sortable: true
      // },
      // {
      //   title: '项目编号',
      //   key: 'project_code',
      //   sortable: true,
      //   type: 'text',
      //   search: { show: true },
      //   width: 120,
      //   form: {
      //     disabled: true
      //   }
      // },
      {
        title: '项目名称',
        key: 'project_code',
        width: 150,
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
          rules:[
            {
              required: true,
              message:"请选择项目"
            }
          ],
          component:{
            value: null,
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
          url: '/dicts/getPurchaseList', // 配置url，可以缓存字典数据
          getData (url, dict) { // 覆盖全局获取字典请求配置
            return request({
              url: "contract.purchase/getPurchaseList",
              method: 'post'
            }).then(ret => {
              let projectList = ret.data;
              let arr = [{ value: null, label: '请选择'}];
              for (let i = 0; i < projectList.length; i++) {
                arr.push({value:projectList[i].purchase_code,label:projectList[i].purchase_code})
              }
              return arr
            })
          }
        },
        form:{
          rules:[
            {
              required: true,
              message:"请选择合同编号"
            }
          ],
          component:{
            value:null,
          }
        }
      },
      {
        title: '付款方式',
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
        title: '供方公司',
        key: 'company',
        type: 'text',
      },
      {
        title: '合同签订日期',
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
        key: 'end_date',
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
        type: 'text',
      },
      {
        title: '已付金额',
        key: 'paid_price',
        type: 'text',
      },
      {
        title: '未付金额',
        key: 'unpaid_price',
        type: 'text',
      },
      {
        title: '收款明细',
        key: 'detail',
        type: 'textarea'
      },
      {
        title: '备注',
        key: 'remark',
        type: 'textarea'
      },
    ]
  }
}
