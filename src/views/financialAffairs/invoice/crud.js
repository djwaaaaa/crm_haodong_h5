import { request } from '@/api/service'
export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right',
      width: 400,
      edit: {
        thin: true,
        text: null,
        disabled: () => {
          return !vm.hasPermissions('credit.invoice/edit')
        }
      },
      remove: {
        thin: true,
        text: null,
        disabled: () => {
          return !vm.hasPermissions('credit.invoice/delete')
        }
      },
      custom: [
        {
          text: '通过',
          type: 'success',
          size: 'small',
          emit: 'passApplyFor',
          disabled: () => {
            return !vm.hasPermissions('credit.invoice/adopt')
          }
        },
        {
          text: '驳回',
          type: 'danger',
          size: 'small',
          emit: 'rejectApplyFor',
          disabled: () => {
            return !vm.hasPermissions('credit.invoice/reject')
          }
        },
      ],
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
      {
        title: '发票类型',
        key: 'invoice_type',
        sortable: true,
        type: 'select',
        width: 120,
        dict: {
          data: [
            { value: 1, label: '增值税专用发票' },
            { value: 2, label: '增值税普通发票' },
            { value: 3, label: '普通发票' }
          ]
        },
        form: {
          rules: [
            {
              required: true,
              message: '请选择发票类型'
            }
          ],
        }
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
              let projectList = ret.data;
              let arr = [{ value: null, label: '请选择'}];
              for (let i = 0; i < projectList.length; i++) {
                arr.push({value:projectList[i].contract_code,label:projectList[i].contract_code})
              }
              return arr
            })
          }
        },
        form: {
          rules: [
            {
              required: true,
              message: '请选择销售合同编号'
            }
          ],
        }
      },
      {
        title: '申请人',
        key: 'admin_id',
        width: 100,
        search: { show: true },
        type: 'select',
        dict: {
          url: '/dicts/getAdminList', // 配置url，可以缓存字典数据
          getData (url, dict) { // 覆盖全局获取字典请求配置
            return request({
              url: "system.admin/getAdminList",
              method: 'post'
            }).then(ret => {
              let projectList = ret.data;
              let arr = [{ value: null, label: '请选择'}];
              for (let i = 0; i < projectList.length; i++) {
                arr.push({value:projectList[i].id,label:projectList[i].realname})
              }
              return arr
            })
          }
        },
        form: {
          rules: [
            {
              required: true,
              message: '请选择申请人'
            }
          ],
          component: {
            value: null
          }
        }
      },
      // {
      //   title: '申请人',
      //   key: 'realname',
      //   type: 'text',
      //   form: {
      //     disabled: true
      //   }
      // },
      {
        title: '发票内容',
        key: 'invoice_content',
        type: 'text'
      },
      {
        title: '发票金额',
        key: 'invoice_price',
        type: 'text'
      },
      {
        title: '状态',
        key: 'status',
        type: 'select',
        dict: {
          data: [
            { value: 1, label: '申请中' },
            { value: 2, label: '已通过' },
            { value: 3, label: '已驳回' }
          ]
        }
      },
      {
        title: '申请时间',
        key: 'add_date',
        type: 'datetime',
        width: 150,
        form: {
          disabled: true
        }
      },
      {
        title: '处理时间',
        key: 'handle_date',
        type: 'datetime',
        width: 150,
        form: {
          disabled: true
          // component: {
          //   props: {
          //     valueFormat: 'yyyy-MM-dd HH-mm-ss'
          //   }
          // }
        }
      },
    ]
  }
}
