<template>
  <!-- <el-dialog title="详情" v-if="productDialog" :visible.sync="productDialog"
    top="0" custom-class="customDialog" :close-on-click-modal="false" :destroy-on-close="true" @close="withdrawDialogClose"> -->
  <div class="productdetailBox" v-if="checkDialog">
  <div class="productDetail">
    <div class="dialog-header">
      <div class="tabs">
        <div class="btn" :class="{'check':choose}" @click="chooseInfo">基本信息对比</div>
        <div class="btn " :class="{'check':!choose}" @click="chooseInfo">产品数据对比</div>
      </div>
      <div class="close">
        <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click="close"><i class="el-dialog__close el-icon el-icon-close"></i></button>
      </div>
    </div>
    <div class="dialog-content">
      <div class="itemDetail" v-if="choose">
        <!-- 销售合同 -->
        <div class="item" v-for="(contracts,index) in contractArr" :key="index">
          <div class="header">
            <div class="name" v-if="contractArr.length < 2">销售合同基本信息</div>
            <div class="name" v-if="index">销售合同(增补合同)基本信息</div>
            <div class="code">项目编号：<span>{{project_code}}</span></div>
          </div>
          <div class="details">
            <ul>
            	<li v-for="(detail,x) in contracts" :key="x" :class="{'all':contract[x] == '合同说明'}">
                <p class="first">{{contract[x]}}:</p>
                <p>{{detail}}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 生产订单 -->
        <div class="item" v-for="(orders,index) in orderArr" :key="index">
          <div class="header">
            <div class="name" v-if="orderArr.length < 2">生产订单基本信息</div>
            <div class="name" v-if="orderArr.length >= 2">生产订单{{index+1}}基本信息</div>
            <div class="code">项目编号：<span>{{project_code}}</span></div>
          </div>
          <div class="details">
            <ul>
            	<li v-for="(detail,x) in orders" :key="x" >
                <p class="first">{{order[x]}}:</p>
                <p>{{detail}}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 采购合同 -->
        <div class="item" v-for="(purchases,index) in purchaseArr" :key='index'>
          <div class="header">
            <div class="name" v-if="purchaseArr.length < 2">采购合同基本信息</div>
            <div class="name" v-if="purchaseArr.length >= 2">采购合同{{index+1}}基本信息</div>
            <div class="code">项目编号：<span>{{project_code}}</span></div>
          </div>
          <div class="details">
            <ul>
            	<li v-for="(detail,x) in purchases" :key="x" :class="{'all':purchase[x] == '合同说明'}">
                <p class="first">{{purchase[x]}}:</p>
                <p>{{detail}}</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div class="itemDetail" v-if="!choose">
        <!-- 销售合同 -->
        <div class="item" v-for="(contracts,index) in contractDetailArr" :key='index'>
          <div class="header">
            <div class="name" v-if="!index">销售合同产品信息</div>
            <div class="name" v-if="index">销售合同(增补合同)产品信息</div>
          </div>
          <div class="details">
            <table border="1" width="100%">
              <tbody>
                <tr>
                	<th>序号</th>
                  <th>产品名称</th>
                  <th>(客户)产品名称</th>
                  <th>税码</th>
                  <th>开票产品名称</th>
                  <th>产品图片</th>
                  <th>规格尺寸</th>
                  <th>款式颜色</th>
                  <th>技术参数</th>
                  <th>单位</th>
                  <th>数量</th>
                  <th>不含税单价</th>
                  <th>不含税总价</th>
                  <th>税率</th>
                  <th>税额</th>
                  <th>含税单价</th>
                  <th>含税总价</th>
                  <th>备注</th>
                </tr>
                <tr v-for="(detail,x) in contracts" :key="x">
                	<td>{{x}}</td>
                  <td>{{detail.product_name}}</td>
                  <td>{{detail.customer_product_name}}</td>
                  <td>{{detail.tax_code}}</td>
                  <td>{{detail.invoice_product_name}}</td>
                  <td>{{detail.product_img}}</td>
                  <td>{{detail.specs_value}}</td>
                  <td>{{detail.color}}</td>
                  <td>{{detail.technical_param}}</td>
                  <td>{{detail.unit}}</td>
                  <td>{{detail.count}}</td>
                  <td>{{detail.no_tax_price}}</td>
                  <td>{{detail.no_tax_total_price}}</td>
                  <td>{{detail.tax_rate}}</td>
                  <td>{{detail.tax_amount}}</td>
                  <td>{{detail.tax_price}}</td>
                  <td>{{detail.tax_total_price}}</td>
                  <td>{{detail.remark}}</td>
                </tr>
                <tr><td colspan="18">合计（元）:￥{{purchaseTotal(contracts,2)}}</td></tr>
                <tr><td colspan="18">合计人民币金额大写：{{dealBigMoney(purchaseTotal(contracts,2))}}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 生产订单 -->
        <div class="item" v-for="(orders,index) in orderDetailArr" :key='index'>
          <div class="header">
            <div class="name" v-if="orderDetailArr.length < 2">生产订单产品信息</div>
            <div class="name" v-if="orderDetailArr.length >= 2">生产订单{{index+1}}产品信息</div>
          </div>
          <div class="details">
            <table border="1" width="100%">
              <tbody>
                <tr>
                	<th>序号</th>
                  <th>物料编码</th>
                  <th>产品名称</th>
                  <th>规格</th>
                  <th>图号</th>
                  <th>单位</th>
                  <th>数量</th>
                  <th>产品说明</th>
                  <th>客户要求</th>
                  <th>颜色</th>
                </tr>
                <tr v-for="(detail,x) in orders" :key="x">
                	<td>{{x}}</td>
                  <td>{{detail.matter_code}}</td>
                  <td>{{detail.product_name}}</td>
                  <td>{{detail.specs_value}}</td>
                  <td>{{detail.product_draw}}</td>
                  <td>{{detail.unit}}</td>
                  <td>{{detail.count}}</td>
                  <td>{{detail.explain}}</td>
                  <td>{{detail.requirement}}</td>
                  <td>{{detail.color}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 采购合同 -->
        <div class="item" v-for="(purchases,index) in purchaseDetailArr" :key='index'>
          <div class="header">
            <div class="name" v-if="purchaseDetailArr.length < 2">采购合同产品信息</div>
            <div class="name" v-if="purchaseDetailArr.length >= 2">采购合同{{index+1}}产品信息</div>
          </div>
          <div class="details">
            <table border="1" width="100%">
              <tbody>
                <tr>
                	<th>序号</th>
                  <th>产品名称</th>
                  <th>单位</th>
                  <th>数量</th>
                  <th>单价</th>
                  <th>总价</th>
                  <th>备注</th>
                </tr>
                <tr v-for="(detail,x) in purchases" :key="x">
                	<td>{{x}}</td>
                  <td>{{detail.product_name}}</td>
                  <td>{{detail.unit}}</td>
                  <td>{{detail.count}}</td>
                  <td>{{detail.price}}</td>
                  <td>{{detail.total_price}}</td>
                  <td>{{detail.remark}}</td>
                </tr>
                <tr><td colspan="7">合计（元）:￥{{purchaseTotal(purchases,1)}}</td></tr>
                <tr><td colspan="7">合计人民币金额大写：{{dealBigMoney(purchaseTotal(purchases,1))}}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!-- </el-dialog> -->
</template>

<script>
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
import { request } from '@/api/service'
export default {
  name: 'productDetail',
  data () {
    return {
      checkDialog:true,
      offer_guid:null,
      choose:true,
      detailKey:{"id":"id","offer_date":"报价日期","project_code":'项目编号',"project_name":'项目名称',"project_date":'项目创建时间',"offer_guid":"报价单guid","offer_draw":'报价编号',"offer_company":'报价单位',"contacts_name":'报价人',"contacts_phone":'报价人电话',"contacts_email":'报价人邮箱',"customer_company":'客户公司',"customer_contacts":'联系人',"customer_phone":'联系电话',"customer_email":'邮箱',"project_price":'项目总价'},
      contract:{
            "id":"ID",
            "contract_code":"销售合同编号",
            "company":"供方公司名称",
            "company_name":"供方单位名称",
            "address":"供方工厂地址",
            "legal_representative":"供方法定代表人",
            "agent":"供方委托代理人",
            "phone":"供方手机",
            "telephone":"供方电话",
            "fax":"供方传真",
            "email":"供方电邮",
            "bank":"供方开户银行",
            "account":"供方账号",
            "customer_company":"供方",
            "company":"需方公司名称",
            "customer_company_name":"需方单位名称",
            "customer_address":"需方单位地址",
            "customer_legal_representative":"需方法定代表人",
            "customer_agent":"需方委托代理人",
            "customer_phone":"需方手机",
            "customer_telephone":"需方电话",
            "customer_fax":"需方传真",
            "customer_email":"需方电邮",
            "customer_bank":"需方开户银行",
            "customer_account":"需方账号",
            "contract_type":"合同类型",
            "contract_status":"合同状态",
            "project_code":"项目编号",
            "project_name":"项目名称",
            "sign_date":"签订日期",
            "delivery_date":"交货日期",
            "total_price":"合同总金额",
            "advance_payment_rate":"预付款比例",
            "invoice_flag":"是否开票(1:是,2:否)",
            "contract_description":"合同说明",
        },
      contractDetail:{
            "id":1,
            "sale_id":"销售合同ID",
            "contract_code":"销售合同编号",
            "product_name":"产品名称",
            "customer_product_name":"客户产品名称",
            "tax_code":"税码",
            "invoice_product_name":"开票产品名称",
            "product_img":"产品图片",
            "specs_value":"规格",
            "color":"颜色",
            "technical_param":"技术参数",
            "unit":"单位",
            "count":"数量",
            "no_tax_price":"不含税单价",
            "no_tax_total_price":"不含税总单价",
            "tax_rate":"税率",
            "tax_amount":"税额",
            "tax_price":"含税单价",
            "tax_total_price":"含税总价",
            "remark":"备注",
        },
       order: {
           "id":"ID",
            "order_id":"订单ID",	// 无视该字段
            "order_code":"订单编号",
            "order_name":"订单名称",
            "order_date":"下单日期",
            "contract_code":"销售合同编号",	// 无视该字段
            "contacts_name":"销售员",
            "contacts_phone":"电话",
            "sign_date":"合同签订日期",		// 无视该字段
            "sign_flag":"是否签订合同(1:是,0:否)",		// 无视该字段
            "status":"订单状态",
            "delivery_date":"计划交货日期",
            "customer_no":"客户号",
            "customer_company":"客户公司",
            "project_code":"项目编号",		// 不显示
            "project_name":"项目名称",
            "total_count":"合计",
        },
       orderDetail:{
            "id":1,
            "order_code":"订单编号",
            "matter_code":"物料编码",
            "product_name":"产品名称",
            "specs_x":"规格单位x",	// 存储数据，不显示
            "specs_y":"规格单位y",	// 存储数据，不显示
            "specs_z":"规格单位z",	// 存储数据，不显示
            "specs_type":"规格类型",	// 存储数据，不显示 1.长宽高 2.XYZ 3.XY 4.宽高 5.高长 6.规格长度 7.规格
            "specs_value":"规格",
            "product_draw":"图号",
            "unit":"单位",
            "count":"数量",
            "explain":"说明",
            "requirementl":"客户要求",
            "color":"颜色",
        },
       purchase: {
            "id":1,
            "contract_code":"销售合同编号",
            "company":"供方公司名称",
            "address":"供方公司地址",
            "contacts":"供方联系人",
            "phone":"供方联系电话",
            "purchase_code":"采购合同编号",
            "sign_date":"合同签订日期",
            "total_price":"合计金额",
            "account":"供方货款账号",
            "bank_name":"供方开户行",
            "account_name":"供方开户名称",
            "explain":"合同说明",
            "status":"采购状态(1:采购中,2:已入库)",
"project_code":"项目编号",
        },
       purchaseDetail:{
            "id":1,
            "purchase_id":"采购合同ID",
            "purchase_code":"采购合同编号",
            "product_name":"产品名称",
            "unit":"单位",
            "count":"数量",
            "price":"单价",
            "total_price":"总价",
            "remark":"备注",
        },
      contractArr:[],
      contractDetailArr:[],
      orderArr:[],
      orderDetailArr:[],
      purchaseArr:[],
      purchaseDetailArr:[]
    }
  },
  props: ['project_code'],
  methods: {
    close(){
      this.checkDialog = false;
      this.$emit('closeDialog');
    },
    chooseInfo(){
      this.choose = !this.choose;
    },
    getContractSale(){
      let _this= this;
      return request({
        url: 'contract.sale/comparison',
        method: 'post',
        data: {
          project_code:this.project_code,
        }
      }).then(ret => {
        if(!ret.data.list.length){
          _this.contractArr = [[]];
        }else{
          _this.contractArr = ret.data.list;
        }
        if(!ret.data.product_list.length){
          _this.contractDetailArr = [[]];
        }else{
         _this.contractDetailArr = ret.data.product_list;
        }
        console.log(ret,99979)
      })
    },
    getOrder(){
      let _this= this;
      return request({
        url: 'order/comparison',
        method: 'post',
        data: {
          project_code:this.project_code,
        }
      }).then(ret => {
        if(!ret.data.list.length){
          _this.orderArr = [[]];
        }else{
          _this.orderArr = ret.data.list;
        }
        for (let i = 0; i < _this.orderArr.length; i++) {
          console.log(_this.orderArr[i],6663)
          if(_this.orderArr[i].status == 1){
            _this.orderArr[i].status = "制作中";
          }else if(_this.orderArr[i].status == 2){
            _this.orderArr[i].status = "收货中";
          }else{
            _this.orderArr[i].status = "已收货";
          }
          delete _this.orderArr[i].contract_code;
          delete _this.orderArr[i].order_id;
          delete _this.orderArr[i].sign_date;
          delete _this.orderArr[i].sign_flag;
          delete _this.orderArr[i].create_time;
          delete _this.orderArr[i].update_time;
          delete _this.orderArr[i].delete_time;
        }
        if(!ret.data.product_list.length){
          _this.orderDetailArr = [[]];
        }else{
          _this.orderDetailArr = ret.data.product_list;
        }
      })
    },
    getContractPurchase(){
      let _this= this;
      return request({
        url: '/contract.purchase/comparison',
        method: 'post',
        data: {
          project_code:this.project_code,
        }
      }).then(ret => {
        if(!ret.data.list.length){
          _this.purchaseArr = [[]];
        }else{
          _this.purchaseArr = ret.data.list;
        }
        if(!ret.data.product_list.length){
          _this.purchaseDetailArr = [[]];
        }else{
         _this.purchaseDetailArr = ret.data.product_list;

        }
      })
    },
    purchaseTotal(list,type){
      let total = 0;
      for (let i = 0; i < list.length; i++) {
        if(type == 1){
          total+=(list[i].total_price -0)
        }else{
          total+=(list[i].tax_total_price -0)
        }
      }
      return total
    },
    dealBigMoney(n){
        var fraction = ['角', '分'];
        var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        var unit = [ ['元', '万', '亿'], ['', '拾', '佰', '仟']  ];
        var head = n < 0? '负': '';
        n = Math.abs(n);

        var s = '';

        for (var i = 0; i < fraction.length; i++)
        {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);

        for (var i = 0; i < unit[0].length && n > 0; i++)
        {
            var p = '';
            for (var j = 0; j < unit[1].length && n > 0; j++)
            {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')  + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
    }
  },
  mounted(){
    this.getContractSale();
    this.getOrder();
    this.getContractPurchase();
  },
  watch:{
    checkDialog(){
      if(this.checkDialog){
      }
    }
  }
}
</script>
<style lang="scss" scoped="scoped">
  .productdetailBox{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.6);
    z-index:999;
  }
.productDetail{
  width: 75%;
  height: 75%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin:auto;
  padding:40px;
  background:#FFFFFF;
  // display: flex;
  // flex-direction:column;
  overflow-y: scroll;
  .tabs{
    display: flex;
    justify-content: center;
    .btn{
      width: 160px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius:5px;
      background:#999999;
      margin: 40px;
      color:#FFFFFF;
      cursor: pointer;
      &.check{
        background:#409EFF;
      }
    }
  }
  .itemDetail{
    .item{
      margin-bottom: 40px;
      .header{
        display: flex;
        align-items:center;
        justify-content: space-between;
        font-size:16px;
        color:#666666;
        .name{
          font-size:20px;
          color:#333333;
          font-weight:bold;
        }
      }
      .details{
        table{
          border-collapse: collapse;
          margin-top: 20px;
          td{
            text-align: center;
            padding: 0 10px;
          }
        }
      }
    }
  }
  .close .fullscreen{
    right: 55px;
  }
  .dialog-content{
    ul{
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      li{
        width: 25%;
        margin-bottom: 10px;
        list-style: none;
        display: flex;
        &.all{
          width: 100%;
        }
        p{
          padding: 0;
          margin: 0;
          margin-right: 20px;
          color: #333333;
          font-size:14px;
        }
        .first{
          margin-right: 20px;
          color: #909090;
        }
      }
    }
  }
}
.customDialog{
 width: 75%;
 height: 75%;
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 margin:auto;
}
</style>
