import { request } from '@/api/service'
export const crudOptions = (vm) => {
  return {
    rowHandle: {
      fixed: 'right' ,// 右边固定列
      width: 340,
      custom: [
        {
          text: '产品明细',
          type: 'success',
          size: 'small',
          emit: 'productDetail',
          disabled: () => {
            return !vm.hasPermissions('project.offer_product/index')
          }
        },
        {
          text: '沟通',
          type: 'primary',
          size: 'small',
          emit: 'recordCommunication',
          disabled: () => {
            return !vm.hasPermissions('project.offer_connect/index')
          }
        }
      ],
      view:{
        show (index, row) {
          return false
        },
      },
      edit: {
        thin: true,
        text: null,
        disabled: () => {
          return !vm.hasPermissions('project.offer/edit')
        }
      },
      remove: {
        thin: true,
        text: null,
        disabled: () => {
          return !vm.hasPermissions('project.offer/delete')
        }
      },
    },
    pageOptions: {
      compact: false
    },
    options: {
      height: '100%',
      events:{
        'expand-change':(event)=>{
          console.log(event,6666000)
        }
      }
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
        sortable: true,
        form:{
          disabled:true
        }
      },
      {
        title: '报价日期',
        key: 'offer_date',
        type: 'datetime',
        width: 140,
        form:{
          component:{
            props:{
              valueFormat:"yyyy-MM-dd HH-mm-ss"
            }
          }
        }
      },
      {
        title: '项目编号',
        key: 'project_code',
        sortable: true,
        width: 120,
        search: { show: true },
        type: 'text',
      },
      {
        title: '项目名称',
        key: 'project_name',
        width: 200,
        search: {
          show: true,
          component:{
            props: {
              elProps: {
                // filterable: false
              }
            },
          }
        },
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
                arr.push({value:projectList[i].project_name,label:projectList[i].project_name})
              }
              return arr
            })
          }
        },
        form:{
          component:{
            value:"",
            on:{ //除input change事件外，更多组件事件监听
              focus(event){
                // vm.chooseList();
                console.log(event,9999)
                // event.component.value=vm.itemName;
              }, //监听表单组件的select事件
              blur(event){
                // vm.changeItemName("kkk");
                console.log(event,9999222)
                // event.component.value=vm.itemName;
              },
              change(event){
                console.log(event,1234560)
                // event.component.value=vm.itemName;
              },
            },
          },
        },
      },
      {
        title: '项目创建时间',
        key: 'project_date',
        type: 'datetime',
        width: 140,
        form:{
          component:{
            props:{
              valueFormat:"yyyy-MM-dd HH-mm-ss"
            }
          }
        }
      },
      {
        title: '报价编号',
        key: 'offer_draw',
        type: 'text',
        width: 120,
        search: { show: true },
      },
      {
        title: '报价单位',
        key: 'offer_company',
        type: 'text',
        width: 210,
      },
      {
        title: '报价人',
        key: 'contacts_name',
        type: 'text',
      },
      {
        title: '报价人电话',
        key: 'contacts_phone',
        type: 'text',
        width: 100,
      },
      {
        title: '报价人邮箱',
        key: 'contacts_email',
        type: 'text',
        width: 100,
      },
      {
        title: '客户公司',
        key: 'customer_company',
        type: 'text',
        width: 200,
        search: { show: true },
      },
      {
        title: '联系人',
        key: 'customer_contacts',
        type: 'text',
      },
      {
        title: '联系电话',
        key: 'customer_phone',
        type: 'text',
        width: 100,
      },
      {
        title: '邮箱',
        key: 'customer_email',
        type: 'text',
        width: 100,
      },
      {
        title: '项目总价',
        key: 'project_price',
        type: 'text',
      },
    ]
  }
}
