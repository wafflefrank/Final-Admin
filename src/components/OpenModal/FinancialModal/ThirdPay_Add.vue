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
          <h5 class="modal-title" id="exampleModalLabel">新增第三方支付平台</h5>
        </div>
        <div class="modal-body bg-deep-light">
          <!-- 組設置  上半部分-->
          <el-row class="mb-4 mt-4">
            <el-col :span="24">
              <div class="bg-dark-light">
                <h5 class="text-start mb-4 ms-2 mustType text-dark">第三方資訊</h5>
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
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 第三方平台 🌭-->
                        <el-form-item label="第三方平台" prop="bank_type" class="ms-4">
                          <div class="thirdPlate_name mb-2">
                            <el-button color="#626aef" plain>1SPAY</el-button>
                            <el-button color="#626aef" plain>777PAY</el-button>
                            <el-button color="#626aef" plain>APPayVND</el-button>
                            <el-button color="#626aef" plain>C3Xltc</el-button>
                            <el-button color="#626aef" plain>CardHub</el-button>
                            <el-button color="#626aef" plain>Co Pay</el-button>
                            <el-button color="#626aef" plain>DT支付</el-button>
                            <el-button color="#626aef" plain>DT支付2.0</el-button>
                            <el-button color="#626aef" plain>EeziePay</el-button>
                            <el-button color="#626aef" plain>ET Pay</el-button>
                          </div>
                          <div class="thirdPlate_name mb-2">
                            <el-button color="#626aef" plain>Eyny Pay</el-button>
                            <el-button color="#626aef" plain>FaFa Pay</el-button>
                            <el-button color="#626aef" plain>Fasts Pay</el-button>
                            <el-button color="#626aef" plain>Fly Pay</el-button>
                            <el-button color="#626aef" plain>G7Pay</el-button>
                            <el-button color="#626aef" plain>GE Pay</el-button>
                            <el-button color="#626aef" plain>Global Pay</el-button>
                            <el-button color="#626aef" plain>G7Pay</el-button>
                            <el-button color="#626aef" plain>G7Pay</el-button>
                            <el-button color="#626aef" plain>G7Pay</el-button>
                            <el-button color="#626aef" plain>G7Pay</el-button>
                          </div>
                          <div class="thirdPlate_name mb-2">
                            <el-button color="#626aef" plain>Eyny Pay</el-button>
                            <el-button color="#626aef" plain>FaFa Pay</el-button>
                            <el-button color="#626aef" plain>Fasts Pay</el-button>
                            <el-button color="#626aef" plain>Fly Pay</el-button>
                            <el-button color="#626aef" plain>G7Pay</el-button>
                            <el-button color="#626aef" plain>GE Pay</el-button>
                            <el-button color="#626aef" plain>Global Pay</el-button>
                            <el-button color="#626aef" plain>G7Pay</el-button>
                            <el-button color="#626aef" plain>G7Pay</el-button>
                            <el-button color="#626aef" plain>G7Pay</el-button>
                            <el-button color="#626aef" plain>G7Pay</el-button>
                          </div>
                        </el-form-item>
                      </el-col>

                      <!-- 顯示名稱-->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 顯示名稱 🌭-->
                        <el-form-item label="顯示名稱" prop="bank" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.bank"
                          ></el-input>
                        </el-form-item>
                        <!-- 帳戶名稱 -->
                        <el-form-item class="ms-4" label="" prop="">
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
                        <el-form-item class="ms-4" label="" prop="account">
                          <el-input
                            class="companyAdd_style"
                            type="password"
                            v-model="addCompany_detail.account"
                            show-password
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第三列 -->
                    <el-row class="mt-3">
                      <!-- 商戶資料-->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 商戶編號 🌭-->
                        <el-form-item label="商戶編號" prop="bank" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.bank"
                          ></el-input>
                        </el-form-item>
                        <!-- 商戶密鑰 -->
                        <el-form-item class="ms-4" label="商戶密鑰" prop="">
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
                        <!-- 存款API網址 -->
                        <el-form-item class="ms-4" label="存款API網址" prop="account">
                          <el-input
                            class="companyAdd_style"
                            type="password"
                            v-model="addCompany_detail.account"
                            show-password
                          ></el-input>
                        </el-form-item>
                        <!-- 提款API網址 -->
                        <el-form-item class="ms-4" label="提款API網址" prop="branch">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.branch"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第四列 -->
                    <el-row class="mt-3">
                      <!-- 平台 -->
                      <el-col :span="24" class="add_left_style_1">
                        <el-form-item class="ms-4 el-form-style" label="平台" prop="status">
                          <el-radio-group
                            v-model="addCompany_detail.status"
                            size="small"
                            class="radio-group"
                            @change="changeStatus($event)"
                          >
                            <el-radio label="全部" value="all" class="radio-no">全部</el-radio>
                            <el-radio label="手機" value="phone">手機</el-radio>
                            <el-radio label="桌機" value="desktop">桌機</el-radio>
                          </el-radio-group>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </div>
              </div></el-col
            >
          </el-row>
          <!-- 組設置  中半部分-->
          <el-row class="mb-4 mt-4">
            <el-col :span="24">
              <div class="bg-dark-light">
                <h5 class="text-start mb-4 ms-2 mustType text-dark">收款設定 越南盾</h5>
                <!-- 資料表單 -->
                <div>
                  <el-form
                    ref="ruleFormRef4"
                    :model="addCompany_detail"
                    :rules="addCompany_rules"
                    class="demo-ruleForm"
                  >
                    <!-- 第一列 -->
                    <el-row>
                      <!-- 幣別 & 狀態    -->
                      <!-- 幣別 🌭-->
                      <el-col :span="12" class="add_left_style_1">
                        <el-form-item label="幣別" class="ms-4 me-2" prop="currency">
                          <el-select
                            v-model="addCompany_detail.currency"
                            placeholder="選擇幣別"
                            class="companyAdd_style"
                            @change="choose_currency(addCompany_detail.currency)"
                          >
                            <el-option label="全部" value="all"></el-option>
                            <el-option
                              v-for="item in addCompany_detail.currency_options"
                              :key="item.id"
                              :label="item.currency"
                              :value="item"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <!-- 狀態 🌭-->
                      <el-col :span="12" class="add_left_style_1">
                        <el-form-item class="ms-3 el-form-style" label="狀態" prop="freeze">
                          <el-radio-group
                            v-model="addCompany_detail.freeze"
                            size="small"
                            class="radio-group"
                            @change="changeFreeze_status($event)"
                          >
                            <el-radio label="啟動" value="close">啟動</el-radio>
                            <el-radio label="備用" value="close" class="radio-no">備用</el-radio>
                            <el-radio label="停用" value="close" class="radio-no">停用</el-radio>
                          </el-radio-group>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第二列 -->
                    <el-row class="mt-3">
                      <!-- Vip 等級 & 單日存款額上限 & 累計存款額上限-->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- Vip等級 🌭-->
                        <el-form-item label="Vip等級" prop="vip_level" class="ms-4">
                          <el-select
                            class="companyAdd_style"
                            v-model="addCompany_detail.vip_level"
                            placeholder="選擇vip等級"
                          >
                            <el-option label="1,3" value="13"></el-option>
                            <el-option label="1,4" value="14"></el-option>
                            <el-option label="2,6" value="26"></el-option>
                            <el-option label="3,4" value="34"></el-option>
                          </el-select>
                        </el-form-item>
                        <!-- 單日存款額上限 🌭-->
                        <el-form-item label="單日存款額上限" prop="bank" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.bank"
                          ></el-input>
                        </el-form-item>
                        <!-- 累計存款額上限 🌭-->
                        <el-form-item label="累計存款額上限" prop="bank" class="ms-4">
                          <el-input
                            class="companyAdd_style"
                            v-model="addCompany_detail.bank"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <!-- 第三列 -->
                    <el-row class="mt-3">
                      <!-- 建議金額  -->
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 建議金額 🌭-->
                        <el-form-item label="建議金額" prop="suggest" class="ms-4">
                          <el-radio-group
                            v-model="addCompany_detail.suggest"
                            size="small"
                            class="radio-group"
                            @change="changeMoney_status($event)"
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
                    <!-- 第四列 -->
                    <el-row class="mt-3">
                      <el-col :span="24">
                        <el-form
                          ref="payType_set"
                          :model="payType_set"
                          :rules="payType_set.botRules"
                          ><el-table
                            ref="payType_set"
                            :data="payType_set.tableData"
                            style="width: 100%"
                            :header-cell-class-name="classNameFunc"
                            class="rank_table_style"
                          ></el-table>
                          <!-- 勾選框 -->
                          <el-table-column label="勾選框" width="80" prop="checkBox">
                            <template v-slot="scope">
                              <el-form-item
                                :prop="`tableData[${scope.$index}].checkBox`"
                                :rules="payType_set.botRules.checkBox"
                              >
                                <el-checkbox v-model="scope.row.checkBox"
                                  >允許用於第三方銀行卡轉帳</el-checkbox
                                >
                              </el-form-item>
                            </template>
                          </el-table-column></el-form
                        ></el-col
                      ></el-row
                    >
                    <!-- 第五列 -->
                    <el-row class="mt-3">
                      <el-col :span="24" class="add_left_style_1">
                        <!-- 代付狀態 🌭-->
                        <el-form-item class="ms-4 el-form-style" label="代付狀態" prop="freeze">
                          <el-radio-group
                            v-model="addCompany_detail.freeze"
                            size="small"
                            class="radio-group"
                            @change="changeFreeze_status($event)"
                          >
                            <el-radio label="啟用" value="close">啟用</el-radio>
                            <el-radio label="停用" value="close" class="radio-no">停用</el-radio>
                          </el-radio-group>
                        </el-form-item>
                        <!-- 代付費 -->
                        <el-form-item label="代付費" prop="fee" class="ms-5">
                          <div class="d-flex">
                            <el-input
                              class="payAnother_style"
                              v-model="addCompany_detail.fee"
                            ></el-input>
                            <span class="ms-2 me-2">%</span> +
                          </div>
                        </el-form-item>
                        <el-form-item label="" prop="fee" class="ms-2">
                          <el-input
                            class="payAnother_style"
                            v-model="addCompany_detail.fee"
                          ></el-input>
                        </el-form-item>
                        <!-- 最低代付額 -->
                        <el-form-item label="最低代付額" prop="fee" class="ms-5">
                          <el-input
                            placeholder=">=300"
                            class="companyAdd_style"
                            v-model="addCompany_detail.bank"
                          ></el-input>
                        </el-form-item>
                        <!-- 最高代付額 -->
                        <el-form-item label="最高代付額" prop="fee" class="ms-5">
                          <el-input
                            placeholder="<=200000"
                            class="companyAdd_style"
                            v-model="addCompany_detail.bank"
                          ></el-input>
                        </el-form-item> </el-col
                    ></el-row>
                    <!-- 第六列 -->
                    <el-row class="mt-3">
                      <el-col :span="24" class="add_left_style_1">
                        <el-form-item label="描述" prop="content" class="ms-4">
                          <el-input
                            class="remark_style"
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 8 }"
                            placeholder="請輸入内容(選填)"
                            v-model="addCompany_detail.bank"
                          >
                          </el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </div></div
            ></el-col>
          </el-row>
          <!-- 組設置  下半部分-->
          <el-row class="mb-4 mt-4">
            <el-col :span="24">
              <div class="bg-dark-light">
                <h5 class="text-start mb-4 ms-2 mustType text-dark">出款設定</h5>
                <!-- 資料表單 -->
                <div>
                  <el-form
                    ref="ruleFormRef5"
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
                            @change="changeDispensing_status($event)"
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
                        <!-- 代付費 🌭-->
                        <el-form-item label="代付費" prop="fee" class="ms-4">
                          <div class="d-flex">
                            <el-input
                              class="payAnother_style"
                              v-model="addCompany_detail.fee"
                            ></el-input>
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

export default {
  data() {
    return {
      // 公司出入款新增頁彈窗詳細資料
      addCompany_detail: {
        platform: '',
        title: '',
        title_cn: '',
        title_vn: '',
        merchant_nunber: '',
        merchant_key: '',
        deposit_url: '',
        withdrawal_url: '',
        platform_type: '',
        currency: '',
        currency_options: [],
        income_status: '',
        hierarchy_detail_id: '',
        deposit_limit_day: '',
        deposit_limit_total: '',
        sug_money: '',
        momo_pay: '',
        momo_deposit_min: '',
        momo_deposit_max: '',
        momo_handfee: '',
        momo_handfee2: '',
        momo_thirdfee: '',
        debit_card: '',
        debit_deposit_min: '',
        debit_deposit_max: '',
        debit_handfee: '',
        debit_handfee2: '',
        debit_thirdfee: '',
        debit_thirdfee2: '',
        bank_qr: '',
        qr_deposit_min: '',
        qr_deposit_max: '',
        qr_handfee: '',
        qr_handfee2: '',
        qr_thirdfee: '',
        qr_thirdfee2: '',
        zalo_pay: '',
        zalo_deposit_min: '',
        zalo_deposit_max: '',
        zalo_handfee: '',
        zalo_handfee2: '',
        zalo_thirdfee: '',
        zalo_thirdfee2: '',
        viettel_pay: '',
        viettel_deposit_min: '',
        viettel_deposit_max: '',
        viettel_thirdfee: '',
        viettel_thirdfee2: '',
        scratchcard: '',
        payment_status: '',
        payment_cost: '',
        payment_cost2: '',
        payment_min: '0.5',
        payment_max: '0.5',
        remark: '0.5',
      },
      // 支付類型及設定
      payType_set: {
        tableData: [
          {
            checkBox: '',
            payType: 'MoMo',
          },
          {
            checkBox: '',
            payType: '網銀掃碼',
          },
          {
            checkBox: '',
            payType: 'Zalo',
          },
          {
            checkBox: '',
            payType: '借記卡',
          },
          {
            checkBox: '',
            payType: 'Viettel Pay',
          },
        ],
        botRules: {
          checkBox: [
            {
              required: true,
              message: '勾選框必須勾選',
              trigger: 'blur',
            },
          ],
          payType: [
            {
              required: true,
              message: '請填入層級顯示',
              trigger: 'blur',
            },
          ],
        },
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
            trigger: 'blur',
          },
        ],
        branch: [
          {
            required: true,
            message: '請輸入分行',
            trigger: 'blur',
          },
        ],
        bank_address: [
          {
            required: true,
            message: '請輸入銀行地址',
            trigger: 'blur',
          },
        ],
        IFSC_code: [
          {
            required: false,
            message: '隨意輸入',
            trigger: 'blur',
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
    // 客製欄位樣式
    classNameFunc({ rowIndex, columnIndex }) {
      console.log(rowIndex, columnIndex);
      if (
        (columnIndex === 0 && rowIndex === 0)
        || (columnIndex === 2 && rowIndex === 0)
        || (columnIndex === 4 && rowIndex === 0)
        || (columnIndex === 6 && rowIndex === 0)
        || (columnIndex === 8 && rowIndex === 0)
        || (columnIndex === 10 && rowIndex === 0)
      ) {
        return 'header_title_dark';
      }
      if (
        (rowIndex === 1 && columnIndex === 0)
        || (rowIndex === 1 && columnIndex === 1)
        || (rowIndex === 2 && columnIndex === 2)
      ) {
        return 'header_title_dark';
      }
      return 'header_title_light';
    },
    // 重置會員表單
    resetForm() {
      this.$refs.ruleFormRef3.resetFields();
      this.$refs.ruleFormRef4.resetFields();
      this.$refs.ruleFormRef5.resetFields();
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
          .post(`${testapi}/backend/financ/financeAccountAdd`, this.addCompany_detail)
          .then((response) => {
            if (response.data.code === 200) {
              this.$swal.fire('新增成功!', `'${response.data.msg}`, 'success');
              this.modal.hide();
              this.$router.push('companyaccount');

              console.log(response.data);
            } else {
              this.$swal.fire('新增失敗', `${response.data.msg}`, 'error');
              console.log(response.data);
            }
          })
          .catch((error) => {
            console.log(error);
            console.log('新增失敗');
          });
        this.reload();
        return true;
      });
      //   resetForm(); // 把表單重置成預設值
    },
    // 收款狀態修改
    changeStatus(item) {
      console.log(item);
      if (item === '啟動') {
        this.addCompany_detail.status = '啟動'; // 狀態開啟
        console.log(this.addCompany_detail.status);
      } else if (item === '備用') {
        this.addCompany_detail.status = '備用'; // 狀態關閉
        console.log(this.addCompany_detail.status);
      } else if (item === '停用') {
        this.addCompany_detail.status = '停用'; // 狀態關閉
        console.log(this.addCompany_detail.status);
      } else if (item === '關閉') {
        this.addCompany_detail.status = '關閉'; // 狀態關閉
        console.log(this.addCompany_detail.status);
      }
    },
    // 凍結狀態修改
    changeFreeze_status(item) {
      console.log(item);
      if (item === '是') {
        this.addCompany_detail.freeze = '是'; // 狀態開啟
        console.log(this.addCompany_detail.freeze);
      } else if (item === '否') {
        this.addCompany_detail.freeze = '否'; // 狀態關閉
        console.log(this.addCompany_detail.freeze);
      }
    },
    // 建議金額狀態開啟
    changeMoney_status(item) {
      console.log(item);
      if (item === '是') {
        this.addCompany_detail.suggest = '是'; // 狀態開啟
        console.log(this.addCompany_detail.suggest);
      } else if (item === '否') {
        this.addCompany_detail.suggest = '否'; // 狀態關閉
        console.log(this.addCompany_detail.suggest);
      }
    },
    // 出款狀態修改
    changeDispensing_status(item) {
      console.log(item);
      if (item === '啟動') {
        this.addCompany_detail.dispensing_status = '啟動'; // 狀態開啟
        console.log(this.addCompany_detail.dispensing_status);
      } else if (item === '停用') {
        this.addCompany_detail.dispensing_status = '停用'; // 狀態關閉
        console.log(this.addCompany_detail.dispensing_status);
      } else if (item === '關閉') {
        this.addCompany_detail.dispensing_status = '關閉'; // 狀態關閉
        console.log(this.addCompany_detail.dispensing_status);
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
.bg-dark-light {
  padding: 10px 0;
  border-radius: 10px;
  background: #ebebebdf;
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
.remark_style .el-textarea__inner {
  width: 300px;
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
.payAnother_style .el-input__inner {
  width: 120px;
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
