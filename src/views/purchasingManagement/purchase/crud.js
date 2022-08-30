import { request } from '@/api/service'
export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right', // 右边固定列
      width: 360,
      custom: [
        {
          text: '产品明细',
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
        title: '所属项目',
        key: 'project_code',
        width: 200,
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
        // form: {
        //   component:{
        //     value:null,
        //   }
        // }
      },
      {
        title: '销售合同编号',
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
              console.log(123456,ret)
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
      {
        title: '供方公司名称',
        key: 'company',
        type: 'text',
        search: { show: true },
      },
      {
        title: '供方联系人',
        key: 'contacts',
        type: 'text',
      },
      {
        title: '供方联系电话',
        key: 'phone',
        type: 'text',
      },
      {
        title: '采购合同编号',
        key: 'purchase_code',
        type: 'text',
        search: { show: true },
      },
      {
        title: '合同签订日期',
        key: 'sign_date',
        type: 'date',
        width: 150,
        form:{
          component:{
            props:{
              valueFormat:"yyyy-MM-dd"
            }
          }
        }
      },
      {
        title: '合计金额',
        key: 'total_price',
        type: 'text',
      },
      {
        title: '供方货款账号',
        key: 'account',
        type: 'text',
      },
      {
        title: '供方开户行',
        key: 'bank_name',
        type: 'text',
      },
      {
        title: '供方开户行',
        key: 'account_name',
        type: 'text',
      },

      {
        title: '采购状态',
        key: 'status',
        search: { show: true },
        type: 'select',
          dict: {
             data: [
              { value: 1, label: '采购中',},
              { value: 2, label: '已入库',},
            ]
          },
        form: {
          component: {
            value: 1 // 默认值
          }
        },
      },
      {
        title: '供方单位名称',
        key: 'company_name',
        type: 'text',
      },
      {
        title: '供方传真',
        key: 'fax',
        type: 'text',
      },
      {
        title: '需方公司名称',
        key: 'customer_company',
        type: 'text',
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
        title: '需方委托代理人',
        key: 'customer_contacts',
        type: 'text',
      },
      {
        title: '需方电话',
        key: 'customer_phone',
        type: 'text',
      },
      {
        title: '需方传真',
        key: 'customer_fax',
        type: 'text',
      },
      {
        title: '需方货款账号',
        key: 'customer_account',
        type: 'text',
      },
      {
        title: '开户行',
        key: 'customer_bank',
        type: 'text',
      },
      {
        title: '需方开户名称',
        key: 'customer_account_name',
        type: 'text',
      },
      {
        title: '合同说明',
        key: 'explain',
        width: 500,
        type: 'text-area',
        viewForm: {
          component: {
            name: null,
            render (h, scope) {
              // console.log(scope.9666)
              return <div>{scope.value}</div>
            }
          }
        }
      },
    ]
  }
}
