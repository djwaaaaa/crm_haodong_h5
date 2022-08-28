<template>
  <d2-container>
    <div class="contractDetail">
      <table border="2">
          <tr>
            <th colspan="19" class="h">
              <div class="header">
                <img src="./images/logo.png" alt="">
                <h1>常州浩东净化承揽加工合同</h1>
              </div>
            </th>
          </tr>
          <tr>
          	<td colspan="2" class="g tr">供方：</td>
            <td colspan="10"><input type="text" v-model="row.company_name" @change="changeEdmit"/></td>
            <td colspan="2" class="g tr">合同编号：</td>
            <td colspan="5"><input type="text" name="" id="" v-model="row.contract_code" @change="changeEdmit" /></td>
          </tr>
          <tr>
          	<td colspan="2" class="g tr">需方：</td>
            <td colspan="10"><input type="text" v-model="row.customer_company_name" @change="changeEdmit" ></td>
            <td colspan="2"class="g tr">签订日期：</td>
            <td colspan="5"><input type="text" v-model="row.sign_date" @change="changeEdmit"></td>
          </tr>
          <tr>
          	<td colspan="2" class="g tr">项目名称：</td>
            <td colspan="10"><input type="text" v-model="row.project_name" @change="changeEdmit"></td>
            <td colspan="2" class="g tr">交货日期：</td>
            <td colspan="5"><input type="text" v-model="row.delivery_date" @change="changeEdmit"></td>
          </tr>
          <tr>
          	<th>序号</th>
            <th>产品名称</th>
            <th>(客户) 产品名称</th>
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
            <th><div class="addProduct" @click="addProduct">新增</div></th>
          </tr>
          <tr v-for="(info,index) in contractArr" :key="index">
            <td class="g tc">{{index+1}}</td>
            <td><input type="text" v-model="info.product_name" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.customer_product_name" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.tax_code" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.invoice_product_name" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.product_img" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.specs_value" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.color" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.technical_param" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.unit" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.count" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.no_tax_price" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.no_tax_total_price" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.tax_rate" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.tax_amount" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.tax_price" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.tax_total_price" @change="edmit(info)"></td>
            <td><input type="text" v-model="info.remark" @change="edmit(info)"></td>
            <td><div class="addProduct delete" @click="deleteProduct(info)">删除</div></td>
          </tr>
          <tr>
          	<td colspan="2" class="g tr">金额：</td>
            <td colspan="13">{{amount}}</td>
            <td colspan="1" class="g tr">合计：</td>
            <td colspan="3">{{total}}</td>
          </tr>
          <tr>
            <td colspan="19" class="g">合同说明：</td>
          </tr>
          <tr>
            <td colspan="19"> <textarea name="" id="" cols="30" rows="10" @change="changeEdmit">{{row.contract_description}}</textarea></td>
          </tr>
          </tr>
          <tr>
            <td colspan="10" class="tc">供方信息:</td>
            <td colspan="9" class="tc">需方信息:</td>
          </tr>
          <tr>
            <td colspan="2" class="tr">单位名称(章)∶</td>
            <td colspan="8"><input type="text"   v-model="row.company_name" @change="changeEdmit"></td>
            <td colspan="2" class="tr">单位名称(章)∶</td>
            <td colspan="7"><input type="text" v-model="row.company" @change="changeEdmit"></td>
          </tr>
          <tr>
            <td colspan="2" class="tr">工厂地址:</td>
            <td colspan="8"><input type="text"  v-model="row.address" @change="changeEdmit"></td>
            <td colspan="2" class="tr">单位地址∶</td>
            <td colspan="7"><input type="text" v-model="row.customer_address" @change="changeEdmit"></td>
          </tr>
          <tr>
            <td colspan="2" class="tr">法定代表人:</td>
            <td colspan="8"><input type="text"   v-model="row.legal_representative" @change="changeEdmit"></td>
            <td colspan="2" class="tr">法定代表人:</td>
            <td colspan="7"><input type="text" v-model="row.customer_legal_representative" @change="changeEdmit"></td>
          </tr>
          <tr>
            <td colspan="2" class="tr">委托代理人(签章):</td>
            <td colspan="8"><input type="text" v-model="row.agent" @change="changeEdmit"></td>
            <td colspan="2" class="tr">委托代理人(签章):</td>
            <td colspan="7"><input type="text" v-model="row.customer_agent" @change="changeEdmit"></td>
          </tr>
          <tr>
            <td colspan="2" class="tr">手机:</td>
            <td colspan="8"><input type="text" v-model="row.phone" @change="changeEdmit"></td>
            <td colspan="2" class="tr">手机:</td>
            <td colspan="7"><input type="text" v-model="row.customer_phone" @change="changeEdmit"></td>
          </tr>
          <tr>
            <td colspan="2" class="tr">电话:</td>
            <td colspan="8"><input type="text" v-model="row.telephone" @change="changeEdmit"></td>
            <td colspan="2" class="tr">电话:</td>
            <td colspan="7"><input type="text" v-model="row.customer_telephone" @change="changeEdmit"></td>
          </tr>
          <tr>
            <td colspan="2" class="tr">传真:</td>
            <td colspan="8"><input type="text" v-model="row.fax" @change="changeEdmit"></td>
            <td colspan="2" class="tr">传真:</td>
            <td colspan="7"><input type="text" v-model="row.customer_fax" @change="changeEdmit"></td>
          </tr>
          <tr>
            <td colspan="2" class="tr">电邮:</td>
            <td colspan="8"><input type="text" v-model="row.email" @change="changeEdmit"></td>
            <td colspan="2" class="tr">电邮:</td>
            <td colspan="7"><input type="text" v-model="row.customer_email" @change="changeEdmit"></td>
          </tr>
          <tr>
            <td colspan="2" class="tr">开户银行:</td>
            <td colspan="8"><input type="text" v-model="row.bank" @change="changeEdmit"></td>
            <td colspan="2" class="tr">开户银行:</td>
            <td colspan="7"><input type="text" v-model="row.customer_bank" @change="changeEdmit"></td>
          </tr>
          <tr>
            <td colspan="2" class="tr">帐号:</td>
            <td colspan="8"><input type="text" v-model="row.account" @change="changeEdmit"></td>
            <td colspan="2" class="tr">帐号:</td>
            <td colspan="7"><input type="text" v-model="row.customer_account" @change="changeEdmit"></td>
          </tr>
      </table>
    </div>
  </d2-container>
</template>

<script>
import { request } from '@/api/service'
export default {
  name: 'productDetail',
  data () {
    return {
      productDialog:true,
      order_code:null,
      contractArr:[
        // {
        //             "id":1,
        //             "sale_id":"3",	// 新增字段
        //             "contract_code":"111111",
        //             "product_name":"产品名称",
        //             "customer_product_name":"客户产品名称",	// 新增字段
        //             "tax_code":"税码",	// 新增字段
        //             "invoice_product_name":"开票产品名称",	// 新增字段
        //             "product_img":"产品图片",	// 新增字段
        //             "specs_value":"规格",
        //             "color":"颜色",
        //             "technical_param":"技术参数",	// 新增字段
        //             "unit":"单位",
        //             "count":"数量",
        //             "no_tax_price":"不含税单价",	// 新增字段
        //             "no_tax_total_price":"不含税总单价",	// 新增字段
        //             "tax_rate":"税率",	// 新增字段
        //             "tax_amount":"税额",	// 新增字段
        //             "tax_price":"含税单价",	// 新增字段
        //             "tax_total_price":"含税总价",	// 新增字段
        //             "remark":"备注",	// 新增字段
        // }
      ],
      row:{
    "contract_code": "",
    "company": "",
    "company_name": "",
    "address": "",
    "legal_representative": "",
    "agent": "",
    "phone": "",
    "telephone": "",
    "fax": "",
    "email": "",
    "bank": "",
    "account": "",
    "customer_company": "",
    "customer_company_name": "",
    "customer_address": "",
    "customer_legal_representative": "",
    "customer_agent": "",
    "customer_phone": "",
    "customer_telephone": "",
    "customer_fax": "",
    "customer_email": "",
    "customer_bank": "",
    "customer_account": "",
    "contract_type": 2,
    "contract_status": 1,
    "project_code": "",
    "project_name": "",
    "sign_date": "",
    "delivery_date": "",
    "total_price": "",
    "advance_payment_rate": '',
    "invoice_flag": 1,
    "contract_description": ""
},
      amount:null,
      total:null
    }
  },
  created() {
    console.log(this.$route.query,66610)
  },
  methods: {
    getList(){
      let _this = this;
      return request({
        url: 'contract.sale_product/index',
        method: 'post',
        data: {
          sale_id:this.$route.query.offerGuid
        }
      }).then(ret => {
        let res = ret.data;
        _this.amount = 0;
        _this.total = 0;
        for (const key in res) {
           _this.amount = _this.amount + (res[key].tax_total_price - 0);
           _this.total = _this.total+ (res[key].count - 0);
           delete res[key].matter_code;
           delete res[key].specs_x;
           delete res[key].specs_y;
           delete res[key].specs_z;
           delete res[key].specs_type;
           delete res[key].product_draw;
           delete res[key].explain;
           delete res[key].requirementl;
           delete res[key].create_time;
           delete res[key].update_time;
           delete res[key].delete_time
        }
        _this.contractArr = res;
      })
    },
    addProduct(){
      let _this = this;
      console.log(this.$route.query.offerGuid,this.row.contract_code)
      return request({
        url: 'contract.sale_product/add',
        method: 'post',
        data: {
          sale_id:this.$route.query.offerGuid,
          contract_code:this.row.contract_code
        }
      }).then(ret => {
        this.getList();
        this.$message({
          message: '添加成功',
          type: 'success'
        });
      })
    },
    deleteProduct(info){
      let _this = this;
      return request({
        url: 'contract.sale_product/delete',
        method: 'post',
        data:info
      }).then(ret => {
        this.getList();
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      })
    },
    edmit(info){
      let _this = this;
      info.sale_id = this.$route.query.offerGuid;
      return request({
        url: 'contract.sale_product/edit',
        method: 'post',
        data: info
      }).then(ret => {
        this.getList();
        this.$message({
          message: '编辑成功',
          type: 'success'
        });
      })
    },
    changeEdmit(){
      let _this = this;
      if(!this.$route.query.add){
        return request({
          url: 'contract.sale/add',
          method: 'post',
          data: obj
        }).then(ret => {
          this.$message({
            message: '编辑成功',
            type: 'success'
          });
        })
      }else{
        return request({
          url: 'contract.sale/edit',
          method: 'post',
          data: this.row
        }).then(ret => {
          this.$message({
            message: '编辑成功',
            type: 'success'
          });
        })
      }
    },
    close(){
      this.productDialog = false;
      this.$emit("closeProductDetail");
    },

  },
  mounted(){
    if(!this.$route.query.add){
      this.row=JSON.parse(this.$route.query.info);
      this.getList();
    }
    console.log(this.$route.query.info,600,this.row)
  },
  watch:{

  }
}
</script>
<style lang="scss" scoped="scoped">
  .contractDetail{
    padding-bottom: 30px;
    table{
      width: 100%;
      border-collapse: collapse;
      .header{
        position: relative;
        img{
          width: 270px;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          margin:auto;
        }
        h1{
          text-align: center;
        }
      }
      td{
        position: relative;
        min-height:32px;
        &.tc{
          text-align: center;
          padding: 5px 0;
        }
        &.tr{
          text-align: right;
          padding: 5px 0;
        }
        &.g{
          padding: 5px 0;
        }
        input{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border:none;
          padding: 0;
          text-indent:8px;
          &:focus{
            outline:1px solid #66b1ff;
          }
        }
        textarea{
          width: 100%;
          border:none;
          padding: 0;
          font-size:16px;
          line-height:34px;
          color:#000000;
          &:focus{
            outline:1px solid #66b1ff;
          }
        }
      }
      th{
        padding:5px;
        background:#d7dbe4;
        &.h{
          background:#FFFFFF;
        }
      }
      .addProduct{
        width: 40px;
        padding: 5px 2px;
        text-align: center;
        background-color: #409EFF;
        border-radius: 4px;
        font-size:12px;
        color:#FFFFFF;
        cursor: pointer;
        margin: auto;
        &.delete{
          background-color: #F56C6C;
        }
      }
    }
  }
</style>
