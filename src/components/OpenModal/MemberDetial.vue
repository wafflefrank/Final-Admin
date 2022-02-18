<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <!-- 請同學自行新增 v-model -->
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>會員訊息</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- 會員停用/啟用 -->
          <el-button
            type="danger"
            size="default"
            v-if="tempProduct.status === 'enable'"
            @click="memberStatus_Off()"
            >會員停用</el-button
          >
          <el-button type="primary" size="default" v-else @click="memberStatus_On()"
            >會員起用</el-button
          >
          <!-- 密碼重置 -->
          <el-button class="newPwd" size="default" @click="newRwdVisible()">密碼重置</el-button>
          <!-- 會員狀態 -->
          會員狀態:{{ this.tempProduct.status }}
          <!-- 密碼重置彈窗 -->
          <el-dialog v-model="rwdFormVisible" title="密碼重置">
            <el-form :model="rwdValue" :rules="rwdValue.rules" ref="rwdFormRef1">
              <el-form-item label="新密碼 :" prop="pwd">
                <el-input class="memberIdStyle" v-model="rwdValue.pwd" type="password"></el-input>
              </el-form-item>
              <el-form-item label="確認新密碼 :" prop="pwd_check">
                <el-input
                  class="memberIdStyle"
                  v-model="rwdValue.pwd_check"
                  type="password"
                ></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="rwdFormVisible = false">取消</el-button>
                <el-button type="primary" @click="doResetRwd()">確認</el-button>
              </span>
            </template>
          </el-dialog>
          <!-- 老帶新下拉彈窗 -->
          <el-dialog v-model="FormVisible" title="老帶新列表">
            <el-form :model="teacherForm">
              <el-form-item label="會員帳號 :">
                <el-select
                  v-model="selectValue.account"
                  placeholder="請選擇帳號"
                  @change="chooseStudentAccount(selectValue.account)"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.account"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="會員ID :">
                <el-input disabled class="memberIdStyle" v-model="selectValue.id"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="FormVisible = false">取消</el-button>
                <el-button type="primary" @click="doTeacher()">確認</el-button>
              </span>
            </template>
          </el-dialog>
          <!-- VIP彈窗 -->
          <el-dialog v-model="vipVisible" title="VIP列表">
            <el-form :model="vipForm">
              <el-form-item label="會員ID :">
                <el-select
                  v-model="vipValue.id"
                  placeholder="請選擇帳號"
                  @change="chooseVipId(vipValue.id)"
                >
                  <el-option
                    v-for="item in vipOptions"
                    :key="item.name"
                    :label="item.id"
                    :value="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="VIP名稱 :">
                <el-input disabled class="memberIdStyle" v-model="vipValue.name"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="FormVisible = false">取消</el-button>
                <el-button type="primary" @click="doVip()">確認</el-button>
              </span>
            </template>
          </el-dialog>
          <!-- 註冊資料 -->
          <el-row class="mb-4 mt-4">
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <h5 class="text-start mb-4 ms-2 mustType text-dark">註冊資料</h5>
                <!-- 資料表單 -->
                <div>
                  <el-row>
                    <el-col :span="12">
                      <!-- 會員帳號 -->
                      <el-input disabled v-model="tempProduct.account">
                        <template #prepend>會員帳號</template>
                      </el-input>
                      <!-- 註冊時間 -->
                      <el-input disabled v-model="tempProduct.Createtime">
                        <template #prepend>註冊時間</template>
                      </el-input>
                      <!-- 註冊IP -->
                      <el-input>
                        <template #prepend>註冊 IP</template>
                      </el-input>
                      <!-- 在線/離線 -->
                      <el-input v-model="tempProduct.online_status">
                        <template #prepend>在線/離線</template>
                        <template #suffix>
                          <el-button type="danger" size="small" @click="kickOut">踢出</el-button>
                        </template>
                      </el-input>
                      <!-- 老待新上線 -->
                      <el-input v-model="tempProduct.teacher">
                        <template #prepend>老帶新上線</template>
                        <template #suffix>
                          <el-button class="editBtn" size="small" @click="teacherFormVisible()"
                            ><el-icon class="edit"> <Edit></Edit></el-icon>
                          </el-button>
                        </template>
                      </el-input>
                      <!-- 代理團隊 -->
                      <el-input>
                        <template #prepend>代理團隊</template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <!-- 上次登入時間 -->
                      <el-input disabled v-model="tempProduct.Lasttime">
                        <template #prepend>上次登入時間</template>
                      </el-input>
                      <!-- IP位置 -->
                      <el-input>
                        <template #prepend>IP位置</template>
                      </el-input>
                      <!-- 標籤名稱 -->
                      <el-input disabled v-model="tempProduct.tagsTitle">
                        <template #prepend>標籤名稱</template>
                      </el-input>
                      <!-- VIP群組 -->
                      <el-input v-model="tempProduct.group_title">
                        <template #prepend>VIP群組</template>
                        <template #suffix>
                          <el-button class="editBtn" size="small" @click="vipFormVisible()"
                            ><el-icon class="edit"> <Edit></Edit></el-icon>
                          </el-button>
                        </template>
                      </el-input>
                      <!-- 老帶新代碼 -->
                      <el-input v-model="tempProduct.teacher_code">
                        <template #prepend>老帶新代碼</template>
                        <template #suffix>
                          <el-button class="teacher" size="small" @click="addTeacherNumber()"
                            >成為老帶新</el-button
                          >
                        </template>
                      </el-input>
                      <el-input>
                        <template #prepend></template>
                      </el-input>
                    </el-col>
                  </el-row>
                </div></div
            ></el-col>
          </el-row>
          <!-- 個人訊息 -->
          <el-row class="mb-4">
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <h5 class="text-start mb-4 ms-2 mustType text-dark">個人訊息</h5>
                <!-- 資料表單 -->
                <div>
                  <el-row>
                    <el-col :span="12">
                      <el-input v-model="tempProduct.name">
                        <template #prepend>名子</template>
                      </el-input>
                      <el-input v-model="tempProduct.email">
                        <template #prepend>電子郵件</template>
                      </el-input>
                      <el-input>
                        <template #prepend>IM1</template>
                      </el-input>
                      <el-input v-model="tempProduct.country">
                        <template #prepend>國家</template>
                      </el-input>
                      <el-input v-model="tempProduct.name">
                        <template #prepend>PIC1</template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="tempProduct.birthday">
                        <template #prepend>生日日期</template>
                      </el-input>
                      <el-input v-model="tempProduct.phone">
                        <template #prepend>手機號碼</template>
                      </el-input>
                      <el-input v-model="tempProduct.IM2">
                        <template #prepend>IM2</template>
                      </el-input>
                      <el-input v-model="tempProduct.city">
                        <template #prepend>城市</template>
                      </el-input>
                      <el-input>
                        <template #prepend>PIC2</template>
                      </el-input>
                    </el-col>
                  </el-row>
                </div>
              </div></el-col
            >
          </el-row>
          <!-- 錢包資料 -->
          <el-row class="mb-4">
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <h5 class="text-start mb-4 ms-2 mustType text-dark">錢包資訊</h5>
                <!-- 資料表單 -->
                <div>
                  <el-row>
                    <el-col :span="12">
                      <el-input v-model="tempProduct.name">
                        <template #prepend>名子</template>
                      </el-input>
                      <el-input v-model="tempProduct.email">
                        <template #prepend>電子郵件</template>
                      </el-input>
                      <el-input>
                        <template #prepend>IM1</template>
                      </el-input>
                      <el-input v-model="tempProduct.country">
                        <template #prepend>國家</template>
                      </el-input>
                      <el-input>
                        <template #prepend>PIC1</template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input v-model="tempProduct.birthday">
                        <template #prepend>生日日期</template>
                      </el-input>
                      <el-input v-model="tempProduct.phone">
                        <template #prepend>手機號碼</template>
                      </el-input>
                      <el-input v-model="tempProduct.IM2">
                        <template #prepend>IM2</template>
                      </el-input>
                      <el-input v-model="tempProduct.city">
                        <template #prepend>城市</template>
                      </el-input>
                      <el-input>
                        <template #prepend>PIC2</template>
                      </el-input>
                    </el-col>
                  </el-row>
                </div>
              </div></el-col
            >
          </el-row>
          <!-- 取款銀行卡列表 -->
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <h5 class="text-start mb-4 ms-2 mustType text-dark">取款銀行卡列表</h5>
                <!-- 資料表單 -->
                <div>
                  <el-row>
                    <el-col :span="24">
                      <el-table :data="bankCard" style="width: 100%">
                        <el-table-column prop="name" label="銀行名稱" width="150" />

                        <el-table-column prop="branch" label="支行名稱" width="120" />

                        <el-table-column prop="state" label="銀行卡名稱" width="120" />
                        <el-table-column prop="account" label="銀行帳號" width="120" />
                        <el-table-column prop="open_city" label="開戶省分/城市" />
                        <el-table-column prop="phone" label="銀行預留手機號碼" width="120" />
                        <el-table-column prop="address" label="電子郵件" />
                        <el-table-column prop="address" label="銀行開戶驗證號" />
                        <el-table-column prop="address" label="創建時間" />
                        <el-table-column prop="address" label="更新人員" />
                        <el-table-column prop="address" label="更新時間" />
                        <el-table-column prop="address" label="狀態" />
                        <el-table-column prop="address" label="操作" />
                      </el-table>
                    </el-col>
                  </el-row>
                </div></div
            ></el-col>
          </el-row>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-member', tempProduct)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Edit } from '@element-plus/icons';
import Modal from 'bootstrap/js/dist/modal';
// import { ref } from 'vue';
import { ElMessage } from 'element-plus';

export default {
  props: {
    memberData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    memberData() {
      this.tempProduct = this.memberData; // 內層等於外層
      this.getBankCard();
    },
  },
  data() {
    //   新密碼重置規則
    const checkPwd = (rule, value, callback) => {
      const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;
      if (!reg.test(value)) {
        callback(new Error('密碼必須大於8碼並且小於12碼 密碼只能為半形並含有大小寫英文字母與數字'));
      } else {
        callback();
      }
    };
    //  新密碼重置-確認新密碼規則
    const checkPwd3 = (rule, value, callback) => {
      if (value.trim().length === 0) {
        callback(new Error('確認密碼不能為空'));
      } else if (value !== this.rwdValue.pwd) {
        callback(new Error('請與輸入密碼一致'));
      } else {
        callback();
      }
    };
    return {
      orderType: 'ASC', // ID排序方式(DESC , ASC )
      orderBy: '', // 餘額排序( 輸入... money )
      modal: {},
      tempProduct: {},
      // 上線/下線資料
      online_Status: {
        member_id: '',
      },
      // 會員啟用/停用
      member_status: {
        id: '',
        status: '',
      },
      // 老帶新視窗專用
      teacherForm: [],
      FormVisible: false,
      // 老帶新-下拉選項
      selectValue: {
        account: '', // 會員帳號
        id: '', // 會員ID
      },
      // 老帶新-更改確認表單
      confirmTeacher: {
        member_id: '',
        teacher_id: '',
      },
      // 密碼重置視窗展開
      rwdFormVisible: false,
      // 密碼重置表單選項
      rwdValue: {
        member_id: '',
        rwd: '', // 會員密碼
        pwd_check: '', // 會員新密碼
        rules: {
          pwd: [
            {
              required: true,
              message: '請輸入密碼',
              trigger: 'blur',
            },
            {
              validator: checkPwd,
              trigger: 'blur',
              // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$"
            },
          ],
          checkPass: [{ validator: checkPwd3, trigger: 'blur' }],
        },
      },

      selectId: '',
      options: [],

      // VIP群組視窗專用
      vipForm: [],
      vipVisible: false,
      vipOptions: [],
      vipValue: {
        // VIP下拉選項
        name: '',
        id: '',
      },
      // Vip群組-更改確認表單
      confirmVip: {
        member_id: '',
        vip_id: '',
      },
      // 銀行卡
      bankCard: [],
      bankId: '',
    };
  },
  methods: {
    //   新增會員視窗
    showModal() {
      this.modal.show();
    },
    // 隱藏會員視窗
    hideModal() {
      this.modal.hide();
    },
    // 取得會員列表
    getUserinfo(limit = 20, skip = 0) {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.isLoading = true;
      this.$http
        .get(
          `${testapi}/backend/members/members?skip=${skip}&limit=${limit}&order=${this.orderType}&orderType`,
        )
        .then((res) => {
          this.isLoading = false;
          if (res.data.code === 200) {
            console.log(res.data);
            this.bankId = res.data.data.list.account;
            // console.log(this.bankId);
          }
          // console.log(res.data);
        });
    },
    // 取得銀行卡列表
    getBankCard(limit = 40, skip = 0) {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.isLoading = true;
      // console.log(this.tempProduct.account);
      this.$http
        .get(
          `${testapi}/backend/members/membersBankCard?skip=${skip}&limit=${limit}&order=${this.orderType}&orderBy&member_id=${this.tempProduct.id}`,
        )
        .then((res) => {
          this.isLoading = false;
          if (res.data.code === 200) {
            console.log(this.tempProduct.account);
            this.bankCard = res.data.data.list;
            // console.log(res.data.data.list);
            console.log(this.tempProduct);
          }
          // console.log(res.data);
        });
    },
    // 會員狀態啟用
    memberStatus_On() {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.isLoading = true;
      // console.log(this.tempProduct.account);
      this.member_status.id = this.tempProduct.id;
      this.member_status.status = 'enable';
      // console.log(this.tempProduct.id, this.online_Status.member_id);
      this.$http
        .post(`${testapi}/backend/members/members_status`, this.member_status)
        .then((res) => {
          this.isLoading = false;
          if (res.data.code === 200) {
            ElMessage({
              showClose: true,
              message: '更改成功 , 會員已啟用!',
              type: 'success',
            });
            this.$swal.fire('啟用成功!', `${res.data.msg}`, 'success');
            // console.log(res.data.data.list);
            this.hideModal();
            this.showModal();
            console.log(this.tempProduct.status);
          }
          // console.log(res.data);
        });
    },
    // 會員狀態停用
    memberStatus_Off() {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.isLoading = true;
      // console.log(this.tempProduct.account);
      this.member_status.id = this.tempProduct.id;
      this.member_status.status = 'disable';
      // console.log(this.tempProduct.id, this.online_Status.member_id);
      this.$http
        .post(`${testapi}/backend/members/members_status`, this.member_status)
        .then((res) => {
          this.isLoading = false;
          if (res.data.code === 200) {
            ElMessage({
              showClose: true,
              message: '更改成功 , 會員已停用!',
              type: 'warning',
            });
            this.$swal.fire('停用成功!', `${res.data.msg}`, 'success');
            // console.log(res.data.data.list);
            this.hideModal();
            this.showModal();
            console.log(this.tempProduct.status);
          }
          // console.log(res.data);
        });
    },
    // 踢出線上狀態/線下
    kickOut() {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.isLoading = true;
      // console.log(this.tempProduct.account);
      this.online_Status.member_id = this.tempProduct.id;
      // console.log(this.tempProduct.id, this.online_Status.member_id);
      this.$http
        .post(`${testapi}/backend/members/members_stateDel`, this.online_Status)
        .then((res) => {
          this.isLoading = false;
          if (res.data.code === 200) {
            this.$swal.fire('Welcome!', `${res.data.data}`, 'success');
            // console.log(res.data.data.list);
            this.hideModal();
            console.log(this.tempProduct.id);
          }
          // console.log(res.data);
        });
    },
    // 新增老帶新代碼
    addTeacherNumber() {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.$confirm('是否新增為老帶新會員?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning',
      })
        .then(() => {
          // this.$message({
          //   type: 'success',
          //   message: '新增成功!',
          // });
          // 點擊'是'之後傳送老帶新
          this.online_Status.member_id = this.tempProduct.id;
          this.$http
            .post(`${testapi}/backend/members/members_layeStart`, this.online_Status)
            .then((res) => {
              if (res.data.code === 200) {
                ElMessage({
                  showClose: true,
                  message: '老帶新啟用!',
                  type: 'success',
                });
                this.$swal.fire('啟用成功!', `${res.data.msg}`, 'success');
                // console.log(res.data.data.list);
                this.hideModal();
                console.log(this.tempProduct.status);
              } else {
                ElMessage({
                  showClose: true,
                  message: '啟用失敗!',
                  type: 'error',
                });
                this.$swal.fire('該帳號已激活', `${res.data.msg}`, 'error');
                console.log(res.data);
              }
              // console.log(res.data);
            });
          this.value = !this.value;
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消改變！',
          });
        });
    },
    // 編輯老帶新視窗
    teacherFormVisible() {
      this.FormVisible = true;
      this.online_Status.member_id = this.tempProduct.id;
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.$http
        .get(
          `${testapi}/backend/members/members_teacherList?member_id=${this.online_Status.member_id}`,
        )
        .then((res) => {
          if (res.data.code === 200) {
            // console.log(res.data.data);
            this.teacherform = res.data.data;
            this.options = res.data.data;
            // console.log(this.tableData);
          }
          // console.log(res.data);
        });
    },
    // 選擇老帶新成員帳號
    chooseStudentAccount(selectValue) {
      console.log(selectValue.account, this.options);
      this.selectValue.account = selectValue.account;
      const forEachIt = this.options.forEach((item) => {
        console.log(item);
        if (selectValue.account === item.account) {
          console.log(item.id);
          this.selectId = item.id;
          this.selectValue.id = this.selectId;
        } else {
          console.log('沒有撈到');
        }
      });
      console.log(forEachIt);
      // if (selectValue.account === ) {
      //   this.selectValue.id = this.tempProduct.id;
      //   console.log(this.selectValue.id, this.tempProduct.id);
      // } else if (selectValue.account === 'Option2') {
      //   this.orderType = 'DESC';
      //   console.log('選項2');
      // } else {
      //   this.orderType = 'DESC';
      //   this.orderBy = 'money';
      //   console.log('選項3');
      // }
    },
    // 送出老帶新表單
    doTeacher() {
      this.isLoading = true;
      // this.tempProduct.teacher = this.selectValue.account;
      this.confirmTeacher.member_id = this.tempProduct.id;
      this.confirmTeacher.teacher_id = this.selectValue.id;
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.$http
        .post(`${testapi}/backend/members/members_layer`, this.confirmTeacher)
        .then((res) => {
          this.isLoading = false;
          if (res.data.code === 200) {
            this.$swal.fire('老帶新已更改!', `${res.data.msg}`, 'success');
            this.tempProduct.teacher = this.selectValue.account;
            // this.hideModal();
            // console.log(this.tempProduct.id);
          }
          // console.log(res.data);
        });
      this.FormVisible = false;
    },
    // 密碼重置視窗
    newRwdVisible() {
      this.rwdFormVisible = true;
      this.rwdValue.member_id = this.tempProduct.id;
    },
    // 送出重置密碼表單
    doResetRwd() {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      // 執行校驗
      this.$refs.rwdFormRef1.validate((valid) => {
        // 沒通過校驗
        if (!valid) {
          console.log('變更失敗,表單格式不正缺');
          return false;
        }
        // 驗證通過為true，有一個不通過就是false
        console.log('可以變更');
        // 通過校驗
        // 登入處理
        // ....
        // axios
        this.$http
          .post(`${testapi}/backend/members/members_pwdReset`, this.rwdValue)
          .then((response) => {
            if (response.data.code === 200) {
              this.$swal.fire('變更成功!', '密碼已變更', 'success');
              console.log(response.data.msg);
            } else {
              this.$swal.fire('變更失敗!', `${response.data.msg}`, 'error');
              console.log(response.data);
            }
          })
          .catch((error) => {
            console.log(error);
            console.log('變更失敗 , 密碼重置失敗');
          });

        return true;
      });
      //   resetForm(); // 把表單重置成預設值
    },
    // 編輯VIP視窗
    vipFormVisible(limit = 20, skip = 0) {
      this.vipVisible = true;
      this.orderBy = 'id';
      // this.online_Status.member_id = this.tempProduct.id;
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.$http
        .get(
          `${testapi}/backend/members/groupDetail_list?skip=${skip}&limit=${limit}&order=${this.orderType}&orderBy=${this.orderBy}`,
        )
        .then((res) => {
          if (res.data.code === 200) {
            console.log(res.data.data.list);
            this.vipForm = res.data.data.list;
            this.vipOptions = res.data.data.list;
            // console.log(this.tableData);
          }
          // console.log(res.data);
        });
    },
    // 選擇vip id
    chooseVipId(vipValue) {
      console.log(vipValue.id, this.vipOptions);
      // this.vipValue.name = vipValue.name;
      const forEachIt = this.vipOptions.forEach((item) => {
        console.log(item);
        if (vipValue.id === item.id) {
          console.log(item.id, item.name);
          this.vipValue.id = item.id;
          this.vipValue.name = item.name;
        } else {
          console.log('沒有撈到');
        }
        console.log(forEachIt);
      });
      // if (selectValue.account === ) {
      //   this.selectValue.id = this.tempProduct.id;
      //   console.log(this.selectValue.id, this.tempProduct.id);
      // } else if (selectValue.account === 'Option2') {
      //   this.orderType = 'DESC';
      //   console.log('選項2');
      // } else {
      //   this.orderType = 'DESC';
      //   this.orderBy = 'money';
      //   console.log('選項3');
      // }
    },
    // vip群組表單更改送出
    doVip() {
      this.isLoading = true;
      // this.tempProduct.teacher = this.selectValue.account;
      this.confirmVip.member_id = this.tempProduct.id;
      this.confirmVip.vip_id = this.vipValue.id;
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.$http.post(`${testapi}/backend/members/members_vip`, this.confirmVip).then((res) => {
        this.isLoading = false;
        if (res.data.code === 200) {
          this.$swal.fire('Vip群組已更改!', `${res.data.msg}`, 'success');
          this.tempProduct.group_title = this.vipValue.name;
          // this.hideModal();
          // console.log(this.tempProduct.id);
        }
        // console.log(res.data);
      });
      this.vipVisible = false;
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    // this.modal.show();
    // console.log(this.tempProduct.account);
  },
  created() {
    // this.getUserinfo();
    console.log(this.tempProduct);
    console.log(this.bankId);
    // this.getBankCard();
  },
  components: {
    Edit,
  },
};
</script>

<style lang="scss">
.edit {
  font-size: 20px;
}
.grid-content {
  padding: 10px 0 0;
  border-radius: 10px;
  flex-wrap: wrap;
  //   min-height: 36px;
}
.bg-purple-dark {
  background: #eff3f8;
}
.el-table {
  border-radius: 10px;
}
.el-input-group__prepend {
  width: 200px;
  padding: 10px 0 10px 10px;
  border: none;
  border-bottom: 1px solid #dcdfe6;
  border-radius: 0;
}
.el-input__inner {
  border: none;
  border-bottom: 1px solid #dcdfe6;
  padding: 20px 0;
}
.el-input__suffix-inner {
  align-items: center;
  & .el-button {
    background: #f56c6c;
    color: rgb(255, 255, 255);
  }
}
.el-input__suffix-inner .teacher {
  background: #409eff;
  color: rgb(255, 255, 255);
}
.el-input__suffix-inner .editBtn {
  background: none;
  color: #409eff;
  &:hover {
    transition: 0.5s;
    background: #236aa5;
    color: #fff;
  }
}
.member_open {
  background: #236aa5 !important;
  border: none;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
.el-form-item {
  align-items: center;
}
.el-form-item__content .memberIdStyle {
  width: 200px;
}
.el-input.is-disabled .el-input__inner {
  background: none;
}
.newPwd {
  background: #7c2e46;
  color: #fff;
  &:hover {
    color: #ffffff;
    background: #7c2e45ab;
  }
}
</style>
