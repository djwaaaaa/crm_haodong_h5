import { request } from '@/api/service'
export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right', // 右边固定列
      width: 180,
      view:{
        show:false
      }
    },
    searchOptions:{
      show: false
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
        type: 'text',
        form:{
          disabled:true,
          show:false
        }
      },
      {
        title: 'pid',
        key: 'pid',
        type: 'text',
        form:{
          disabled:true,
          show:false
        }
      },
      {
        title: '名称',
        key: 'title',
        type: 'text',
      },
      {
        title: '分钟',
        key: 'minutes',
        type: 'text',
      },
      {
        title: '调试/分钟',
        key: 'debug',
        type: 'text',
      },
      {
        title: '单件/分钟',
        key: 'singleton',
        type: 'text',
      },
      {
        title: '状态',
        key: 'status',
        type: 'dict-switch', // 区别在于这个是包装组件，支持dict，并且单元格使用tag展示
        dict: { data: [{ value: 1, label: '开启' }, { value: 0, label: '关闭' }] },
        form: {
          component: {
            show (context) {
              return !context.form.number
            }
          }
        },
        component: {
          disabled (context) {
            return !context.form.number
          }
        }
      },
    ]
  }
}
