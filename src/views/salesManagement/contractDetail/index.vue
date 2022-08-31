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
          <td colspan="2" class="g tr">项目名称：</td>
          <td colspan="10">
            <el-select v-model="row.project_code" placeholder="请选择项目" popper-class="project" class="project">
              <el-option v-for="(item,index) in projectList" :key="index" :label="item.project_name"
                :value="item.project_code" @click.native="selectProject(item.project_code,item.project_name)">
              </el-option>
            </el-select>
          </td>
          <td colspan="2" class="g tr">合同编号：</td>
          <td colspan="5">
            <el-input type="text" v-model="row.contract_code" @change="changeEdmit('purchase_code')"
              :disabled="enterStatus || contractCodeDisabled"></el-input>
            <!-- <div v-if="row.contract_code" class="code">{{row.contract_code}}</div> -->
          </td>
        </tr>

        <tr>
          <td colspan="2" class="g tr">供方：</td>
          <td colspan="10"><el-input type="text" v-model="row.company_name" @change="changeEdmit"
              :disabled="enterStatus" ></el-input></td>
          <td colspan="2" class="g tr">签订日期：</td>
          <td colspan="5">
            <!-- <el-input type="text" v-model="row.sign_date" @change="changeEdmit" :disabled="enterStatus"></el-input> -->
            <el-date-picker
                  v-model="row.sign_date"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  :disabled="enterStatus"
                  @change="changeEdmit"
                  >
            </el-date-picker>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="g tr">需方：</td>
          <td colspan="10"><el-input type="text" v-model="row.customer_company_name" @change="changeEdmit"
              :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="g tr">交货日期：</td>
          <td colspan="5">
 
            <el-date-picker
                  v-model="row.delivery_date"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  :disabled="enterStatus"
                  @change="changeEdmit"
                  >
            </el-date-picker>
          </td>
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
          <th>
            <div class="addProduct" @click="addProduct">新增</div>
          </th>
        </tr>
        <tr v-for="(info,index) in contractArr" :key="index">
          <td class="g tc">{{index+1}}</td>
          <td><el-input type="text" v-model="info.product_name" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.customer_product_name" @change="edmit(info)" :disabled="enterStatus"></el-input>
          </td>
          <td><el-input type="text" v-model="info.tax_code" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.invoice_product_name" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.product_img" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.specs_value" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.color" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.technical_param" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.unit" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.count" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.no_tax_price" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.no_tax_total_price" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.tax_rate" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.tax_amount" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.tax_price" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.tax_total_price" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td><el-input type="text" v-model="info.remark" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td>
            <div class="addProduct delete" @click="deleteProduct(info)">删除</div>
          </td>
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
          <td colspan="19"> <el-input type="textarea" cols="30" rows="10" @change="changeEdmit"
              :disabled="enterStatus" v-model="row.contract_description"></el-input></td>
        </tr>
        </tr>
        <tr>
          <td colspan="10" class="tc">供方信息:</td>
          <td colspan="9" class="tc">需方信息:</td>
        </tr>
        <tr>
          <td colspan="2" class="tr">单位名称(章)∶</td>
          <td colspan="8"><el-input type="text" v-model="row.company_name" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
          <td colspan="2" class="tr">单位名称(章)∶</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_company_name" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="tr">工厂地址:</td>
          <td colspan="8"><el-input type="text" v-model="row.address" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tr">单位地址∶</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_address" @change="changeEdmit"
              :disabled="enterStatus"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="tr">法定代表人:</td>
          <td colspan="8"><el-input type="text" v-model="row.legal_representative" @change="changeEdmit"
              :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tr">法定代表人:</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_legal_representative" @change="changeEdmit"
              :disabled="enterStatus" ></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="tr">委托代理人(签章):</td>
          <td colspan="8"><el-input type="text" v-model="row.agent" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tr">委托代理人(签章):</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_agent" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="tr">手机:</td>
          <td colspan="8"><el-input type="text" v-model="row.phone" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tr">手机:</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_phone" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="tr">电话:</td>
          <td colspan="8"><el-input type="text" v-model="row.telephone" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tr">电话:</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_telephone" @change="changeEdmit"
              :disabled="enterStatus"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="tr">传真:</td>
          <td colspan="8"><el-input type="text" v-model="row.fax" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tr">传真:</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_fax" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="tr">电邮:</td>
          <td colspan="8"><el-input type="text" v-model="row.email" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tr">电邮:</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_email" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="tr">开户银行:</td>
          <td colspan="8"><el-input type="text" v-model="row.bank" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tr">开户银行:</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_bank" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="tr">帐号:</td>
          <td colspan="8"><el-input type="text" v-model="row.account" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tr">帐号:</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_account" @change="changeEdmit"
              :disabled="enterStatus"></el-input></td>
        </tr>
      </table>
    </div>
  </d2-container>
</template>

<script>
  import {
    request
  } from '@/api/service'
  export default {
    name: 'salesManagement-contractDetail',
    data() {
      return {
        projectList: [],
        projectName: '',
        productDialog: true,
        order_code: null,
        contractArr: [],
        row: {
          "id": 0,
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
        amount: null,
        total: null,
        enterStatus: true,
        contractCodeDisabled:false,
      }
    },
    created() {
    },
    methods: {
      getList() {
        let _this = this;
        return request({
          url: 'contract.sale_product/index',
          method: 'post',
          data: {
            sale_id: this.row.id
          }
        }).then(ret => {
          let res = ret.data;
          _this.amount = 0;
          _this.total = 0;
          for (const key in res) {
            _this.amount = _this.amount + (res[key].tax_total_price - 0);
            _this.total = _this.total + (res[key].count - 0);
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
          if (_this.row.total_price != _this.amount){
            _this.row.total_price = _this.amount;
            _this.changeEdmit();
          }
          _this.contractArr = res;
        })
      },
      addProduct() {
        let _this = this;
        console.log(this.$route.query.offerGuid, this.row.contract_code)
        if(!this.row.contract_code){
          this.$message({
            message: "请先输入合同编号",
            type: 'error'
          });
        }else{
          return request({
            url: 'contract.sale_product/add',
            method: 'post',
            data: {
              sale_id: this.row.id,
              // contract_code: this.row.contract_code
            }
          }).then(ret => {
            this.getList();
            this.$message({
              message: ret.msg,
              type: 'success'
            });
          })
        }
      },
      deleteProduct(info) {
        let _this = this;
        return request({
          url: 'contract.sale_product/delete',
          method: 'post',
          data: info
        }).then(ret => {
          this.getList();
          this.$message({
            message: ret.msg,
            type: 'success'
          });
        })
      },
      edmit(info) {
        let _this = this;
        return request({
          url: 'contract.sale_product/edit',
          method: 'post',
          data: info
        }).then(ret => {
          this.getList();
          this.$message({
            message: ret.msg,
            type: 'success'
          });
        })
      },
      contractEdit(code,name){
        return request({
          url: 'contract.sale/edit',
          method: 'post',
          data: this.row
        }).then(ret => {
          if(code && name){
            this.enterStatus = false;
          }
          if(code == 'purchase_code'){
            this.contractCodeDisabled = true;
          }
          this.$message({
            message: ret.msg,
            type: 'success'
          });
        })
      },
      changeEdmit() {
        this.contractEdit('purchase_code');
      },

      //项目列表
      getProjectList(kw) {
        let _this = this;
        return request({
          url: 'project/getProjectList',
          method: 'post',
          data: {
            kw: kw
          }
        }).then(ret => {
          this.projectList = ret.data;
          console.log("项目列表", ret.data)
        })
      },
      selectProject(code, name) {
        this.row.contract_code = code;
        this.row.project_name = name;
        this.contractEdit(code, name);
        console.log("选中", data, index)
      },
      getPurchaseContract(id){
        return request({
          url: 'contract.sale/detail',
          method: 'post',
          data: {
            id:id
          }
        }).then(ret => {
          this.row = ret.data;
          console.log(ret.data,"详情")
          if(this.row.contract_code){
            this.getList();
          }
          if(this.row.contract_code){
            this.enterStatus = false;
          }
          if(this.row.contract_code){
            this.contractCodeDisabled = true;
          }
        })
      }
    },
    mounted() {
     // if (!this.$route.query.add) {
     //    this.row = JSON.parse(this.$route.query.info);
     //    if(this.row.contract_code){
     //      this.getList();
     //    }
     //    this.enterStatus = false;
     //    this.contractStatus = "edit";
     //  }
     if (this.$route.query.id) {
       this.getPurchaseContract(this.$route.query.id);
     }
      this.getProjectList();
    },
    watch: {

    }
  }
</script>
<style lang="scss" scoped="scoped">
  .contractDetail {
    padding-bottom: 30px;

    table {
      width: 100%;
      border-collapse: collapse;

      .header {
        position: relative;

        img {
          width: 270px;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
        }

        h1 {
          text-align: center;
        }
      }

      td {
        position: relative;
        min-height: 32px;

        &.tc {
          text-align: center;
          padding: 5px 0;
        }

        &.tr {
          text-align: right;
          padding: 5px 0;
        }

        &.g {
          padding: 5px 0;
        }

        el-input {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border: none;
          padding: 0;
          text-indent: 8px;

          &:focus {
            outline: 1px solid #66b1ff;
          }
        }
        .code{
          color: #606266;
          font-size: inherit;
          padding-left: 10px;
        }

        .project {
          width: 95%;
          height: 100%;
          border: none;
          padding: 0;
          text-indent: 8px;

          &:focus {
            outline: 1px solid #66b1ff;
          }

          .el-el-input__inner {
            height: 32px;
          }
        }

        textarea {
          width: 100%;
          border: none;
          padding: 0;
          font-size: 16px;
          line-height: 34px;
          color: #000000;

          &:focus {
            outline: 1px solid #66b1ff;
          }
        }
      }

      th {
        padding: 5px;
        background: #d7dbe4;

        &.h {
          background: #FFFFFF;
        }
      }

      .addProduct {
        width: 40px;
        padding: 5px 2px;
        text-align: center;
        background-color: #409EFF;
        border-radius: 4px;
        font-size: 12px;
        color: #FFFFFF;
        cursor: pointer;
        margin: auto;

        &.delete {
          background-color: #F56C6C;
        }
      }
    }
  }
</style>
