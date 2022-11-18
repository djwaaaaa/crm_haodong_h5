import { request } from '@/api/service'
export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right', // 右边固定列
      width: 360,
      custom: [
        {
          text: '产品信息',
          type: 'success',
          size: 'small',
          emit: 'productDetail',
          // disabled: () => {
          //   return !vm.hasPermissions('contract.sale/detail')
          // }
        },
        {
          text: '对比查看',
          type: 'success',
          size: 'small',
          emit: 'comparison',
          // disabled: () => {
          //   return !vm.hasPermissions('contract.sale/comparison')
          // }
        },
      ],
      view:{
        show:false
      },
      edit: {
        thin: true,
        disabled: () => {
          return !vm.hasPermissions('contract.sale/edit')
        }
      },
      remove: {
        thin: true,
        disabled: () => {
          return !vm.hasPermissions('contract.sale/delete')
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
        title: '项目编号',
        key: 'project_code',
        sortable: true,
        type: 'text',
        width: 120,
        form: {
          disabled: true
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
        sortable: true,
        type: 'text',
        width: 100,
        search: { show: true },
      },
      {
        title: '供方公司名称',
        key: 'company',
        type: 'text',
      },
      {
        title: '供方单位名称',
        key: 'company_name',
        type: 'text',
      },
      {
        title: '供方工厂地址',
        key: 'address',
        type: 'text',
      },
      {
        title: '供方法定代表',
        key: 'legal_representative',
        type: 'text',
      },
      {
        title: '供方委托代理',
        key: 'agent',
        type: 'text',
      },
      {
        title: '供方手机',
        key: 'phone',
        type: 'text',
      },
      {
        title: '供方电话',
        key: 'telephone',
        type: 'text',
      },
      {
        title: '供方传真',
        key: 'fax',
        type: 'text',
      },
      {
        title: '供方电邮',
        key: 'email',
        type: 'text',
      },
      {
        title: '供方开户银行',
        key: 'bank',
        type: 'text',
      },
      {
        title: '供方账号',
        key: 'account',
        type: 'text',
      },
      {
        title: '需方公司名称',
        key: 'customer_company',
        type: 'text',
        search: { show: true },
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
        title: '需方法定代表',
        key: 'customer_legal_representative',
        type: 'text',
      },
      {
        title: '需方委托代理',
        key: 'customer_agent',
        type: 'text',
      },
      {
        title: '需方手机',
        key: 'customer_phone',
        type: 'text',
      },
      {
        title: '需方电话',
        key: 'customer_telephone',
        type: 'text',
      },
      {
        title: '需方传真',
        key: 'customer_fax',
        type: 'text',
      },
      {
        title: '需方电邮',
        key: 'customer_email',
        type: 'text',
      },
      {
        title: '需方开户银行',
        key: 'customer_bank',
        type: 'text',
      },
      {
        title: '需方账号',
        key: 'customer_account',
        type: 'text',
      },
      {
        title: '合同类型',
        key: 'contract_type',
        search: { show: true },
        type: 'select',
        dict: {
           data: [
            { value: 1, label: '原始合同',},
            { value: 2, label: '增补合同',},
          ]
        },
        form: {
          disabled: true
        }
      },
      {
        title: '合同状态',
        key: 'contract_status',
        search: { show: true },
        type: 'select',
        dict: {
           data: [
            { value: 1, label: '生效中',},
            { value: 2, label: '已失效',},
            { value: 2, label: '已完成',},
          ]
        },
        form: {
          component: {
            value: 1 // 默认值
          }
        },
      },
      {
        title: '签订日期',
        key: 'sign_date',
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
        title: '交货日期',
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
        title: '合同总金额',
        key: 'total_price',
        type: 'text',
      },
      {
        title: '预付款比例',
        key: 'advance_payment_rate',
        type: 'text',
      },
      // {
      //   title: '是否开票',
      //   key: 'invoice_flag',
      //   type: 'select',
      //   dict: {
      //     data: [
      //       { value: 1, label: '是' },
      //       { value: 2, label: '否' }
      //     ]
      //   }
      // },
      {
        title: '合同说明',
        key: 'contract_description',
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
