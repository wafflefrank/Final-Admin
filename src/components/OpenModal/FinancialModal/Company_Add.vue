<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">公司出入款帳戶新增</h5>
        </div>
        <div class="modal-body">
          <!-- 組設置  上半部分-->
          <el-row class="mb-4 mt-4">
            <el-col :span="24">
              <div class="bg-dark-gray">
                <h5 class="text-start mb-4 ms-2 mustType text-dark">銀行訊息</h5>
                <!-- 資料表單 -->
                <div>
                  <el-form
                    ref="ruleFormRef3"
                    :model="addCompany_detail"
                    :rules="addCompany_rules"
                    class="demo-ruleForm"
                  >
                    <!-- 第一列 -->
                    <el-row>
                      <!-- 銀行類型 & 幣別 & 縮圖 -->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 銀行類型 🌭-->
                        <el-form-item label="銀行類型" prop="bank_type" class="ms-4">
                          <el-select
                            class="companyAdd_style"
                            v-model="addCompany_detail.bank_type"
                            placeholder="選擇銀行類型"
                          >
                            <el-option label="銀行" value="Bank"></el-option>
                            <el-option label="三方" value="Third"></el-option>
                          </el-select>
                        </el-form-item>
                        <!-- 幣別💎 -->
                        <el-form-item class="ms-4" label="幣別" prop="currency">
                          <el-select
                            class="companyAdd_style"
                            v-model="addCompany_detail.currency"
                            placeholder="選擇幣別"
                          >
                            <el-option label="台幣" value="TWD"></el-option>
                            <el-option label="越南盾" value="VND"></el-option>
                            <el-option label="日幣" value="JPD"></el-option>
                            <el-option label="美金" value="USD"></el-option>
                          </el-select>
                        </el-form-item>
                        <!-- 縮圖 -->
                        <el-form-item class="ms-4" label="縮圖" prop="">
                          <el-select
                            class="companyAdd_style"
                            v-model="addCompany_detail.currency"
                            placeholder="選擇幣別"
                          >
                            <el-option label="台幣" value="TWD"></el-option>
                            <el-option label="越南盾" value="VND"></el-option>
                            <el-option label="日幣" value="JPD"></el-option>
                            <el-option label="美金" value="USD"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第二列 -->
                    <el-row class="mt-3">
                      <!-- 銀行名稱 & 帳戶名稱 & 銀行帳號 & 銀行分行 & 銀行地址-->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 銀行名稱 🌭-->
                        <el-form-item label="銀行名稱" prop="bank" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.bank"
                          ></el-input>
                        </el-form-item>
                        <!-- 帳戶名稱 -->
                        <el-form-item class="ms-4" label="帳戶名稱" prop="">
                          <el-select
                            class="companyAdd_style"
                            v-model="addCompany_detail.branch"
                            placeholder="選擇帳戶名稱"
                          >
                            <el-option label="台幣" value="TWD"></el-option>
                            <el-option label="越南盾" value="VND"></el-option>
                            <el-option label="日幣" value="JPD"></el-option>
                            <el-option label="美金" value="USD"></el-option>
                          </el-select>
                        </el-form-item>
                        <!-- 銀行帳號 -->
                        <el-form-item class="ms-4" label="銀行帳號" prop="account">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.account"
                          ></el-input>
                        </el-form-item>
                        <!-- 銀行分行 -->
                        <el-form-item class="ms-4" label="銀行分行" prop="branch">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.branch"
                          ></el-input>
                        </el-form-item>
                        <!-- 銀行地址 -->
                        <el-form-item class="ms-4" label="銀行地址" prop="bank_address">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.bank_address"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第三列 -->
                    <el-row class="mt-3">
                      <!-- IFSC_code -->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- IFSC_code 🌭-->
                        <el-form-item label="IFSC_code" prop="IFSC_code" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.IFSC_code"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第四列 -->
                    <el-row class="mt-3">
                      <!-- 顯示名稱 & zh-CN & en-US -->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 顯示名稱 🌭-->
                        <el-form-item label="顯示名稱(越南)" prop="title_vn" class="ms-4">
                          <el-input
                            placeholder="顯示越南文"
                            class="companyAdd_style"
                            v-model="addCompany_detail.title_vn"
                          ></el-input>
                        </el-form-item>
                        <!-- zh-CN -->
                        <el-form-item class="ms-4" label="顯示名稱(簡體)" prop="title_cn">
                          <el-input
                            placeholder="顯示簡體字"
                            class="companyAdd_style"
                            v-model="addCompany_detail.title_cn"
                          ></el-input>
                        </el-form-item>
                        <!-- en-US -->
                        <el-form-item class="ms-4" label="顯示名稱(英文)" prop="title_us">
                          <el-input
                            placeholder="顯示英文字"
                            class="companyAdd_style"
                            v-model="addCompany_detail.title_us"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第五列 -->
                    <el-row class="mt-3">
                      <!-- 備註 -->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- IFSC_code 🌭-->
                        <el-form-item label="備註" prop="remark" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.remark"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </div></div
            ></el-col>
          </el-row>
          <!-- 組設置  中半部分-->
          <el-row class="mb-4 mt-4">
            <el-col :span="24">
              <div class="bg-dark-gray">
                <h5 class="text-start mb-4 ms-2 mustType text-dark">收款設定</h5>
                <!-- 資料表單 -->
                <div>
                  <el-form
                    ref="ruleFormRef3"
                    :model="addCompany_detail"
                    :rules="addCompany_rules"
                    class="demo-ruleForm"
                  >
                    <!-- 第一列 -->
                    <el-row>
                      <!-- 狀態 & 凍結 &  -->
                      <!-- 狀態 🌭-->
                      <el-col :span="12" class="add_left_style_1">
                        <el-form-item class="ms-3 el-form-style" label="狀態" prop="status">
                          <el-radio-group
                            v-model="addCompany_detail.status"
                            size="small"
                            class="radio-group"
                            @change="changeStatus($event)"
                          >
                            <el-radio label="啟動" class="radio-no">啟動</el-radio>
                            <el-radio label="備用">備用</el-radio>
                            <el-radio label="停用">停用</el-radio>
                            <el-radio label="關閉">關閉</el-radio>
                          </el-radio-group>
                        </el-form-item>
                      </el-col>
                      <!-- 凍結 🌭-->
                      <el-col :span="12" class="add_left_style_1">
                        <el-form-item class="ms-3 el-form-style" label="凍結" prop="freeze">
                          <el-radio-group
                            v-model="addCompany_detail.status"
                            size="small"
                            class="radio-group"
                            @change="changeStatus($event)"
                          >
                            <el-radio label="是">是</el-radio>
                            <el-radio label="否" class="radio-no">否</el-radio>
                          </el-radio-group>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第二列 -->
                    <el-row class="mt-3">
                      <!-- Vip 等級 & 允許第三方-->
                      <el-col :span="12" class="add_left_style_1">
                        <!-- Vip等級 🌭-->
                        <el-form-item label="Vip等級" prop="bank" class="ms-4">
                          <el-select
                            class="companyAdd_style"
                            v-model="addCompany_detail.currency"
                            placeholder="選擇vip等級"
                          >
                            <el-option label="台幣" value="TWD"></el-option>
                            <el-option label="越南盾" value="VND"></el-option>
                            <el-option label="日幣" value="JPD"></el-option>
                            <el-option label="美金" value="USD"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12" class="add_left_style_1">
                        <!-- 是否允許第三方 🌭-->
                        <el-form-item label="" prop="bank" class="mt-4 ms-4">
                          <el-checkbox v-model="addCompany_detail.third_card"
                            >允許用於第三方銀行卡轉帳</el-checkbox
                          >
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第三列 -->
                    <el-row class="mt-3">
                      <!-- 單日存款額上限 & 累計存款額上限 & 最低存款額  & 最高存款額  -->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 單日存款額上限 🌭-->
                        <el-form-item label="單日存款額上限" prop="deposit_max_day" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.deposit_max_day"
                          ></el-input>
                        </el-form-item>
                        <!-- 累計存款額上限 🌭-->
                        <el-form-item label="累計存款額上限" prop="deposit_max_total" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.deposit_max_total"
                          ></el-input>
                        </el-form-item>
                        <!-- 最低存款額 🌭-->
                        <el-form-item label="最低存款額" prop="deposit_max" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.deposit_max"
                          ></el-input>
                        </el-form-item>
                        <!-- 最高存款額 🌭-->
                        <el-form-item label="最高存款額" prop="deposit_min" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.deposit_min"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第四列 -->
                    <el-row class="mt-3">
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 二維碼縮圖 🌭-->
                        <el-form-item label="二維碼縮圖" prop="qrcode" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.qrcode"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第五列 -->
                    <el-row class="mt-3">
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 建議金額 🌭-->
                        <el-form-item label="建議金額" prop="suggest" class="ms-4">
                          <el-radio-group
                            v-model="addCompany_detail.suggest"
                            size="small"
                            class="radio-group"
                            @change="changeStatus($event)"
                          >
                            <el-radio label="關閉" class="radio-no">否</el-radio>
                            <el-radio label="開啟">是</el-radio>
                          </el-radio-group>
                        </el-form-item>
                        <!-- 建議金額-是下拉選單 -->
                        <div class="d-flex w-75 ms-2">
                          <el-form-item
                            v-if="addCompany_detail.suggest === '開啟'"
                            label="新增金額 :"
                            class="ms-3"
                            prop="suggest_amount"
                          >
                            <el-input
                              placeholder="請輸入金額"
                              class="domain_style me-3"
                              v-model="addCompany_detail.suggest_amount"
                            ></el-input>
                          </el-form-item>
                        </div>
                      </el-col>
                    </el-row>
                  </el-form>
                </div></div
            ></el-col>
          </el-row>
          <!-- 組設置  下半部分-->
          <el-row class="mb-4 mt-4">
            <el-col :span="24">
              <div class="bg-dark-gray">
                <h5 class="text-start mb-4 ms-2 mustType text-dark">出款設定</h5>
                <!-- 資料表單 -->
                <div>
                  <el-form
                    ref="ruleFormRef3"
                    :model="addCompany_detail"
                    :rules="addCompany_rules"
                    class="demo-ruleForm"
                  >
                    <!-- 第一列 -->
                    <el-row>
                      <!-- 狀態 & 凍結 &  -->
                      <!-- 狀態 🌭-->
                      <el-col :span="24" class="add_left_style_1">
                        <el-form-item
                          class="ms-3 el-form-style"
                          label="狀態"
                          prop="dispensing_status"
                        >
                          <el-radio-group
                            v-model="addCompany_detail.dispensing_status"
                            size="small"
                            class="radio-group"
                            @change="changeStatus($event)"
                          >
                            <el-radio label="啟動">啟動</el-radio>
                            <el-radio label="停用" class="radio-no">停用</el-radio>
                            <el-radio label="關閉">關閉</el-radio>
                          </el-radio-group>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第二列 -->
                    <el-row class="mt-3">
                      <!-- 最低出款額 & 最高出款額 & 最低餘額 & 手續費-->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 最低出款額 🌭-->
                        <el-form-item label="最低出款額" prop="dispensing_min" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.dispensing_min"
                          ></el-input>
                        </el-form-item>
                        <!-- 最高出款額 🌭-->
                        <el-form-item label="最高出款額" prop="dispensing_max" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.dispensing_max"
                          ></el-input>
                        </el-form-item>
                        <!-- 最低餘額 🌭-->
                        <el-form-item label="最低餘額" prop="balance_min" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.balance_min"
                          ></el-input>
                        </el-form-item>
                        <!-- 手續費 🌭-->
                        <el-form-item label="手續費" prop="fee" class="ms-4">
                          <div class="d-flex">
                            <el-input class="fee_style" v-model="addCompany_detail.fee"></el-input>
                            <span class="ms-2 me-2">%</span> +
                            <span class="ms-2">{{ this.addCompany_detail.fee2 }}</span>
                          </div>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </div>
              </div></el-col
            >
          </el-row>
          <!--層級設置 下半部分  -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click.prevent="resetForm()">重置</button>
          <button type="button" class="btn btn-primary" @click="doRegister()">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
// import { ElMessage } from 'element-plus';

export default {
  data() {
    return {
      // 公司出入款帳戶彈窗詳細資料
      addCompany_detail: {
        bank_type: '',
        bank: '',
        currency: '',
        account: '',
        branch: '',
        bank_address: '',
        IFSC_code: '',
        title_cn: '',
        title_vn: '',
        title_us: '',
        remark: '',
        status: '',
        freeze: '',
        vip_level: '',
        third_card: '',
        deposit_max_day: '',
        deposit_max_total: '',
        deposit_max: '',
        deposit_min: '',
        qrcode: '',
        suggest: '',
        suggest_amount: '',
        dispensing_status: '',
        dispensing_min: '',
        dispensing_max: '',
        fee: '',
        fee2: '0.5',
      },
      // 新增公司出入款帳戶規則
      addCompany_rules: {
        bank_type: [
          {
            required: true,
            message: '請輸入銀行類型',
            trigger: 'blur',
          },
        ],
        bank: [
          {
            required: true,
            message: '請輸入銀行名稱',
            trigger: 'blur',
          },
        ],
        currency: [
          {
            required: true,
            message: '請選擇幣別',
            trigger: 'change',
          },
        ],
        // 缺縮圖
        // 缺帳戶名稱
        account: [
          {
            required: true,
            message: '請輸入帳號',
            trigger: 'true',
          },
        ],
        branch: [
          {
            required: true,
            message: '請輸入分行',
            trigger: 'true',
          },
        ],
        bank_address: [
          {
            required: true,
            message: '請輸入銀行地址',
            trigger: 'true',
          },
        ],
        IFSC_code: [
          {
            required: false,
            message: '隨意輸入',
            trigger: 'false',
          },
        ],
        title_vn: [
          {
            required: true,
            message: '請輸入(越南)顯示名稱',
            trigger: 'blur',
          },
        ],
        title_cn: [
          {
            required: true,
            message: '請輸入(簡體)顯示名稱',
            trigger: 'blur',
          },
        ],
        title_us: [
          {
            required: true,
            message: '請輸入(英文)顯示名稱',
            trigger: 'blur',
          },
        ],
        remark: [
          {
            required: false,
            message: '隨意輸入',
            trigger: 'false',
          },
        ],
        status: [
          {
            required: true,
            message: '請至少選擇一種',
            trigger: 'change',
          },
        ],
        freeze: [
          {
            required: true,
            message: '請至少選擇一種',
            trigger: 'change',
          },
        ],
        vip_level: [
          {
            required: true,
            message: '請至少選擇一種',
            trigger: 'change',
          },
        ],
        third_card: [
          {
            required: false,
            message: '隨意勾選',
            trigger: 'false',
          },
        ],
        deposit_max_day: [
          {
            required: true,
            message: '請輸入單日存款額',
            trigger: 'blur',
          },
        ],
        deposit_max_total: [
          {
            required: true,
            message: '請輸入累計存款額',
            trigger: 'blur',
          },
        ],
        deposit_max: [
          {
            required: true,
            message: '請輸入最低存款額',
            trigger: 'blur',
          },
        ],
        deposit_min: [
          {
            required: true,
            message: '請輸入最高存款額',
            trigger: 'blur',
          },
        ],
        qrcode: [
          {
            required: false,
            message: '隨意輸入',
            trigger: 'blur',
          },
        ],
        suggest: [
          {
            required: true,
            message: '請至少選擇一種',
            trigger: 'change',
          },
        ],
        suggest_amount: [
          {
            required: true,
            message: '請輸入金額',
            trigger: 'blur',
          },
        ],
        dispensing_status: [
          {
            required: true,
            message: '請至少選擇一種',
            trigger: 'change',
          },
        ],
        dispensing_min: [
          {
            required: true,
            message: '請輸入金額',
            trigger: 'blur',
          },
        ],
        dispensing_max: [
          {
            required: true,
            message: '請輸入金額',
            trigger: 'blur',
          },
        ],
        balance_min: [
          {
            required: true,
            message: '請輸入餘額',
            trigger: 'blur',
          },
        ],
        fee: [
          {
            required: true,
            message: '請輸入手續費',
            trigger: 'blur',
          },
        ],
        url: [
          {
            required: true,
            message: '請輸入網銀網址',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    // 隱藏會員視窗
    hideModal() {
      this.modal.hide();
    },
    // 重置會員表單
    resetForm() {
      this.$refs.ruleFormRef3.resetFields();
      this.$refs.rankSetting.resetFields();
    },
    // 送出新增會員表單
    doRegister() {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      // 執行校驗
      this.$refs.ruleFormRef3.validate((valid) => {
        // 沒通過校驗
        if (!valid) {
          console.log('驗證失敗,表單格式不正缺');
          return false;
        }
        // 驗證通過為true，有一個不通過就是false
        console.log('可以註冊');
        // 通過校驗
        // 登入處理
        // ....
        // axios
        this.$http
          .post(`${testapi}/backend/members/group_add`, this.addRuleForm)
          .then((response) => {
            if (response.data.code === 200) {
              this.$swal.fire('新增成功!', `'${response.data.msg}`, 'success');
              this.modal.hide();
              this.$router.push('grouplist');

              console.log(response.data);
            } else {
              this.$swal.fire('註冊失敗', `${response.data.msg}`, 'error');
              console.log(response.data);
            }
          })
          .catch((error) => {
            console.log(error);
            console.log('新增失敗');
          });

        return true;
      });
      //   resetForm(); // 把表單重置成預設值
    },
    // 狀態修改
    changeStatus(item) {
      console.log(item);
      if (item === '是') {
        this.addCompany_detail.suggest = '開啟'; // 狀態開啟
      } else if (item === '否') {
        this.addCompany_detail.suggest = '關閉'; // 狀態關閉
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    // this.modal.show();
  },
};
</script>
<style lang="scss">
.withdraw_content {
  padding: 25px 15px 25px;
  border-radius: 10px;
  flex-wrap: wrap;
  // min-height: 36px;
}
.bg-dark-gray {
  padding: 10px 0;
  border-radius: 10px;
  background: #d3cdcdcd;
}
.editBtn {
  background: #0b5ed7;
  color: #fff;
  &:hover {
    transition: 0.5s;
    background: #236aa5;
    color: #fff;
  }
}
.companyAdd_style .el-input__inner {
  width: 100%;
  padding: 0 30px 0 10px;
  border: 1px solid #dcdfe6;

  &:focus {
    border-color: #409eff !important;
  }
}
.el-select-dropdown__item {
  color: #3d8ed5;
  font-weight: 700;
  &:hover {
    color: white;
    background: #3d8ed5;
    transition: 0.5s;
    font-weight: bold;
  }
}
.fee_style .el-input__inner {
  width: 80px;
  padding: 0 10px 0 10px;
  border: 1px solid #dcdfe6;
  &:focus {
    border-color: #409eff !important;
  }
}
.input_disable_style .el-input.is-disabled .el-input__inner {
  width: 100%;
  padding: 0 50px;
  background: #f5f7fa;
  color: #c0c4cc;
  border: 1px solid #dcdfe6;
  &:focus {
    border-color: #409eff !important;
  }
}
.header_title_dark {
  background: #575656 !important;
  color: white;
  text-align: center !important;
}
.header_title_light {
  background: #888686 !important;
  color: white;
  text-align: center !important;
}
.tags_table_style {
  border-radius: 10px;
}
// 新增銀行按鈕樣式
.addBank_btn,
.hotSort {
  background: #2f2f2f;
  color: #fff;
  &:hover {
    background: #0f0f0f !important;
    color: white;
  }
}
</style>
