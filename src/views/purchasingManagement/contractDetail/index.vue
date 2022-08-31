<template>
  <d2-container>
    <div class="contractDetail">
      <table border="2">
        <tr>
          <th colspan="19" class="h">
            <div class="header">
              <h1>{{row.customer_company}}销售合同</h1>
            </div>
          </th>
        </tr>
        <tr>
          <td colspan="2" class="g tr">所属销售合同：</td>
          <td colspan="10">
            <el-select v-model="row.contract_code" placeholder="请选择销售合同编号" popper-class="project" class="project">
              <el-option v-for="(item,index) in projectList" :key="index" :label="item.contract_code"
                :value="item.contract_code" @click.native="selectProject(item.contract_code,item.project_code)">
              </el-option>
            </el-select>
          </td>
          <td colspan="2" class="g tr">签订日期：</td>
          <td colspan="5">
            <el-date-picker
                  v-model="row.sign_date"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd HH-mm-ss"
                  :disabled="enterStatus"
                  @change="changeEdmit"
                  >
                </el-date-picker>
            <!-- <el-input type="text" v-model="row.sign_date" @change="changeEdmit" :disabled="enterStatus"></el-input> -->
          </td>
        </tr>

        <tr>
          <td colspan="2" class="g tr">供方：</td>
          <td colspan="17"><el-input type="text" v-model="row.company_name" @change="changeEdmit"
              :disabled="enterStatus" ></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="g tr">需方：</td>
          <td colspan="17"><el-input type="text" v-model="row.customer_company_name" @change="changeEdmit"
              :disabled="enterStatus"></el-input></td>
        </tr>
        <tr>
          <td colspan="12">一、订货内容</td>
          <td colspan="2" class="g tr">合同编号：</td>
          <td colspan="5"><el-input type="text" v-model="row.purchase_code" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
        </tr>
        <tr>
          <th colspan="2">序号</th>
          <th colspan="3">产品名称</th>
          <th colspan="2">单位</th>
          <th colspan="3">数量</th>
          <th colspan="2">单价</th>
          <th colspan="3">总价</th>
          <th colspan="3">备注</th>
          <th colspan="1">
            <div class="addProduct" @click="addProduct">新增</div>
          </th>
        </tr>
        <tr v-for="(info,index) in contractArr" :key="index">
          <td colspan="2" class="g tc">{{index+1}}</td>
          <td colspan="3"><el-input type="text" v-model="info.product_name" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td colspan="2"><el-input type="text" v-model="info.unit" @change="edmit(info)" :disabled="enterStatus"></el-input>
          </td>
          <td colspan="3"><el-input type="text" v-model="info.count" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td colspan="2"><el-input type="text" v-model="info.price" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td colspan="3"><el-input type="text" v-model="info.total_price" @change="edmit(info)" :disabled="enterStatus"></el-input></td>
          <td colspan="3" :rowspan="contractArr.length" v-if="index == 0"><el-input type="textarea" v-model="info.remark" @change="edmit(info)" :disabled="enterStatus" :rowspan="contractArr.length"></el-input></td>
          <td>
            <div class="addProduct delete" @click="deleteProduct(info)">删除</div>
          </td>
        </tr>
        <tr>
          <td colspan="19">合计(元)：¥{{amount}}</td>
        </tr>
        <!-- <tr>
          <td colspan="19">合计人民币金额（大写）：{{amount}}</td>
        </tr> -->
        <tr>
          <td colspan="19" class="g">合同说明：</td>
        </tr>
        <tr>
          <td colspan="19"> <el-input type="textarea" cols="30" rows="10" @change="changeEdmit"
              :disabled="enterStatus" v-model="row.explain"></el-input></td>
        </tr>
        </tr>
        <tr>
          <td colspan="10" class="tl">供方(盖章):</td>
          <td colspan="9" class="tl">需方(盖章):</td>
        </tr>
        <tr>
          <td colspan="2" class="tl">单位名称∶</td>
          <td colspan="8"><el-input type="text" v-model="row.company_name" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
          <td colspan="2" class="tl">单位名称∶</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_company_name" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="tl">单位地址:</td>
          <td colspan="8"><el-input type="text" v-model="row.address" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tl">单位地址∶</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_address" @change="changeEdmit"
              :disabled="enterStatus"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="tl">委托代理人(签章):</td>
          <td colspan="8"><el-input type="text" v-model="row.contacts" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tl">委托代理人(签章):</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_contacts" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="tl">电话:</td>
          <td colspan="8"><el-input type="text" v-model="row.phone" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tl">电话:</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_phone" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
        </tr>

        <tr>
          <td colspan="2" class="tl">传真:</td>
          <td colspan="8"><el-input type="text" v-model="row.fax" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tl">传真:</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_fax" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="tl">开户名称:</td>
          <td colspan="8"><el-input type="text" v-model="row.account_name" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tl">开户名称:</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_account_name" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="tl">开户银行:</td>
          <td colspan="8"><el-input type="text" v-model="row.bank_name" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tl">开户银行:</td>
          <td colspan="7"><el-input type="text" v-model="row.customer_bank" @change="changeEdmit" :disabled="enterStatus"></el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="tl">货款账号:</td>
          <td colspan="8"><el-input type="text" v-model="row.account" @change="changeEdmit" :disabled="enterStatus"></el-input></td>
          <td colspan="2" class="tl">货款账号:</td>
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
    name: 'purchasingManagement-contractDetail',
    data() {
      return {
        projectList: [],
        projectName: '',
        productDialog: true,
        order_code: null,
        contractArr: [
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
        contractStatus:"add",
        addId:null,
      }
    },
    created() {
      console.log(this.$route.query, 66610)
    },
    methods: {
      getList() {
        let _this = this;
        return request({
          url: 'contract.purchase_product/index',
          method: 'post',
          data: {
            purchase_id: this.row.purchase_code
          }
        }).then(ret => {
          let res = ret.data;
          _this.amount = 0;
          _this.total = 0;
          for (const key in res) {
            _this.amount = _this.amount + (res[key].total_price - 0);
            _this.total = _this.total + (res[key].count - 0);
            delete res[key].matter_code;
            delete res[key].specs_x;
            delete res[key].specs_y;
            delete res[key].specs_z;
            delete res[key].specs_type;
            delete res[key].specs_value;
            delete res[key].product_draw;
            delete res[key].explain;
            delete res[key].requirementl;
            delete res[key].color;
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
        if(!this.row.purchase_code){
          this.$message({
            message: "请先输入合同编号",
            type: 'error'
          });
        }else{
          return request({
            url: 'contract.purchase_product/add',
            method: 'post',
            data: {
              purchase_code: this.row.purchase_code,
              purchase_id: this.row.purchase_code
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
          url: 'contract.purchase_product/delete',
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
        info.purchase_id = this.row.id;
        return request({
          url: 'contract.purchase_product/edit',
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
      contractEdit(name,code){
        if(name){
         this.row.contract_code = name;
        }
        if(code){
          this.row.contract_code = code;
        }
        return request({
          url: 'contract.purchase/edit',
          method: 'post',
          data: this.row
        }).then(ret => {
          this.$message({
            message: ret.msg,
            type: 'success'
          });
        })
      },
      contractAdd(name,code){
        return request({
          url: 'contract.purchase/add',
          method: 'post',
          data: this.row
        }).then(ret => {
          this.row = ret.data;
          this.addId = ret.data.id;
          this.enterStatus = false;
          this.contractStatus = "edit"
          this.$message({
            message: ret.msg,
            type: 'success'
          });
        }).catch(ret => {
          this.row.project_code = '';
          this.enterStatus = true;
          this.contractStatus = "add"
          this.$message({
            message: ret.msg,
            type: 'error'
          });
        })
        console.log(this.contractStatus,77777111)
      },
      changeEdmit() {
        let _this = this;
        console.log(this.contractStatus,77777)
        if (this.contractStatus == "edit") {
          this.contractEdit();
        } else if(this.contractStatus == "add") {
          this.contractAdd();
        }
      },
      close() {
        this.productDialog = false;
        this.$emit("closeProductDetail");
      },
      //销售合同
      getProjectList(kw) {
        let _this = this;
        return request({
          url: 'contract.sale/getSaleList',
          method: 'post',
          data: {
            kw: kw
          }
        }).then(ret => {
          this.projectList = ret.data;
          console.log("销售合同", ret.data)
        })
      },
      selectProject(data, index) {
        if (this.contractStatus == "edit") {
          this.contractEdit(data, index);
        } else if(this.contractStatus == "add") {
          this.contractAdd(data, index);
        }
        console.log("选中", data, index)
      }
    },
    mounted() {
      if (!this.$route.query.add) {
        this.row = JSON.parse(this.$route.query.info);
        if(this.row.contract_code){
          this.getList();
        }
        this.enterStatus = false;
        this.contractStatus = "edit";
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
        height: 40px;
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
