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
              <div class="group_set_content bg-purple-dark">
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
                          <el-input
                            class="groupName_style"
                            v-model="addCompany_detail.bank_type"
                          ></el-input>
                        </el-form-item>
                        <!-- 幣別💎 -->
                        <el-form-item class="ms-4" label="幣別" prop="currency">
                          <el-select
                            class="groupName_style"
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
                            class="groupName_style"
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
                    <el-row>
                      <!-- 銀行名稱 & 帳戶名稱 & 銀行帳號 & 銀行分行 & 銀行地址-->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 銀行名稱 🌭-->
                        <el-form-item label="銀行名稱" prop="bank" class="ms-4">
                          <el-input
                            class="groupName_style"
                            v-model="addCompany_detail.bank"
                          ></el-input>
                        </el-form-item>
                        <!-- 帳戶名稱 -->
                        <el-form-item class="ms-4" label="帳戶名稱" prop="">
                          <el-select
                            class="groupName_style"
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
                          <el-select
                            class="groupName_style"
                            v-model="addCompany_detail.account"
                            placeholder="選擇銀行帳號"
                          >
                            <el-option label="台幣" value="TWD"></el-option>
                            <el-option label="越南盾" value="VND"></el-option>
                            <el-option label="日幣" value="JPD"></el-option>
                            <el-option label="美金" value="USD"></el-option>
                          </el-select>
                        </el-form-item>
                        <!-- 銀行分行 -->
                        <el-form-item class="ms-4" label="銀行分行" prop="branch">
                          <el-select
                            class="groupName_style"
                            v-model="addCompany_detail.branch"
                            placeholder="選擇銀行分行"
                          >
                            <el-option label="台幣" value="TWD"></el-option>
                            <el-option label="越南盾" value="VND"></el-option>
                            <el-option label="日幣" value="JPD"></el-option>
                            <el-option label="美金" value="USD"></el-option>
                          </el-select>
                        </el-form-item>
                        <!-- 銀行地址 -->
                        <el-form-item class="ms-4" label="銀行地址" prop="bank_address">
                          <el-select
                            class="groupName_style"
                            v-model="addCompany_detail.bank_address"
                            placeholder="選擇銀行地址"
                          >
                            <el-option label="台幣" value="TWD"></el-option>
                            <el-option label="越南盾" value="VND"></el-option>
                            <el-option label="日幣" value="JPD"></el-option>
                            <el-option label="美金" value="USD"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第三列 -->
                    <el-row>
                      <!-- IFSC_code -->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- IFSC_code 🌭-->
                        <el-form-item label="IFSC_code" prop="IFSC_code" class="ms-4">
                          <el-input
                            class="groupName_style"
                            v-model="addCompany_detail.IFSC_code"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第四列 -->
                    <el-row>
                      <!-- 顯示名稱 & zh-CN & en-US -->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 顯示名稱 🌭-->
                        <el-form-item label="顯示名稱(越南)" prop="title_vn" class="ms-4">
                          <el-input
                            class="groupName_style"
                            v-model="addCompany_detail.title_vn"
                          ></el-input>
                        </el-form-item>
                        <!-- zh-CN -->
                        <el-form-item class="ms-4" label="顯示名稱(簡體)" prop="title_cn">
                          <el-select
                            class="groupName_style"
                            v-model="addCompany_detail.title_cn"
                            placeholder="選擇幣別"
                          >
                            <el-option label="台幣" value="TWD"></el-option>
                            <el-option label="越南盾" value="VND"></el-option>
                            <el-option label="日幣" value="JPD"></el-option>
                            <el-option label="美金" value="USD"></el-option>
                          </el-select>
                        </el-form-item>
                        <!-- en-US -->
                        <el-form-item class="ms-4" label="顯示名稱(英文)" prop="title_us">
                          <el-select
                            class="groupName_style"
                            v-model="addCompany_detail.title_us"
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
                    <!-- 第五列 -->
                    <el-row>
                      <!-- 備註 -->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- IFSC_code 🌭-->
                        <el-form-item label="備註" prop="remark" class="ms-4">
                          <el-input
                            class="groupName_style"
                            v-model="addCompany_detail.remark"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </div></div
            ></el-col>
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
        fee2: '',
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
        bank_cn: [
          {
            required: true,
            message: '請輸入銀行簡中名稱',
            trigger: 'blur',
          },
        ],
        bank_preset: [
          {
            required: true,
            message: '請輸入預設語系',
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
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    // this.modal.show();
  },
};
</script>
