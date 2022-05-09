<template>
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
          <h5 class="modal-title" id="exampleModalLabel">更新銀行詳細資料</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- 個人訊息 -->
          <!-- 修改銀行資料彈窗 -->
          <el-dialog v-model="tagsNameVisible" title="新銀行名稱表單">
            <el-form :model="tagsNewNameForm">
              <el-form-item label="新銀行名稱 :">
                <el-input class="memberIdStyle" v-model="tagsNewNameForm.bank"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="tagsNameVisible = false">取消</el-button>
                <el-button type="primary" @click="newTags_Name()">確認</el-button>
              </span>
            </template>
          </el-dialog>
          <!-- 新銀行類型彈窗 -->
          <el-dialog v-model="tagsContentVisible" title="新銀行類型">
            <el-form :model="tagsNewNameForm">
              <el-form-item label="新銀行類型 :">
                <el-input class="memberIdStyle" v-model="tagsNewNameForm.bank_type"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="tagsContentVisible = false">取消</el-button>
                <el-button type="primary" @click="newTags_Content()">確認</el-button>
              </span>
            </template>
          </el-dialog>
          <!-- 新簡中名稱 -->
          <el-dialog v-model="tagsRemarkVisible" title="新簡中名稱">
            <el-form :model="tagsNewNameForm">
              <el-form-item label="新簡中名稱 :">
                <el-input class="memberIdStyle" v-model="tagsNewNameForm.bank_cn"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="tagsRemarkVisible = false">取消</el-button>
                <el-button type="primary" @click="newTags_Remark()">確認</el-button>
              </span>
            </template>
          </el-dialog>
          <!-- 新預設語系名稱-->
          <el-dialog v-model="tagsDomainVisible" title="新預設語系名稱">
            <el-form :model="tagsNewNameForm">
              <el-form-item label="新預設語系名稱 :">
                <el-input class="memberIdStyle" v-model="tagsNewNameForm.bank_preset"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="tagsDomainVisible = false">取消</el-button>
                <el-button type="primary" @click="newTags_Domain()">確認</el-button>
              </span>
            </template>
          </el-dialog>
          <!-- 新圖片彈窗 -->
          <el-dialog v-model="tagsDomainNameVisible" title="新圖片">
            <el-form :model="tagsNewNameForm">
              <el-form-item label="新圖片 :">
                <el-input class="memberIdStyle" v-model="tagsNewNameForm.img"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="tagsDomainNameVisible = false">取消</el-button>
                <el-button type="primary" @click="newTags_Domain_Name()">確認</el-button>
              </span>
            </template>
          </el-dialog>
          <!-- 新網銀網址彈窗 -->
          <el-dialog v-model="bankUrlVisible" title="新網銀網址">
            <el-form :model="tagsNewNameForm">
              <el-form-item label="新網銀網址 :">
                <el-input class="memberIdStyle" v-model="tagsNewNameForm.url"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="tagsDomainNameVisible = false">取消</el-button>
                <el-button type="primary" @click="newTags_Domain_Name()">確認</el-button>
              </span>
            </template>
          </el-dialog>
          <el-row class="mb-4">
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <h5 class="text-start mb-4 ms-2 mustType text-dark">銀行資訊</h5>
                <!-- 資料表單 -->
                <div>
                  <el-row>
                    <el-col :span="12">
                      <el-input disabled v-model="tempProduct.id">
                        <template #prepend>銀行ID</template>
                      </el-input>
                      <el-input disabled v-model="tempProduct.bank">
                        <template #prepend>銀行名稱</template>
                        <template #suffix>
                          <el-button class="editBtn" size="small" @click="tagsNameVisible = true"
                            ><el-icon class="edit"> <Edit></Edit></el-icon>
                          </el-button>
                        </template>
                      </el-input>
                      <el-input disabled v-model="tempProduct.bank_type">
                        <template #prepend>銀行類型</template>
                        <template #suffix>
                          <el-button class="editBtn" size="small" @click="tagsContentVisible = true"
                            ><el-icon class="edit"> <Edit></Edit></el-icon>
                          </el-button>
                        </template>
                      </el-input>
                      <el-input disabled v-model="tempProduct.bank_cn">
                        <template #prepend>簡中名稱</template>
                        <template #suffix>
                          <el-button class="editBtn" size="small" @click="tagsRemarkVisible = true"
                            ><el-icon class="edit"> <Edit></Edit></el-icon>
                          </el-button>
                        </template>
                      </el-input>
                    </el-col>
                    <el-col :span="12">
                      <el-input disabled v-model="tempProduct.bank_preset">
                        <template #prepend>預設語系名稱</template>
                        <template #suffix>
                          <el-button class="editBtn" size="small" @click="tagsDomainVisible = true"
                            ><el-icon class="edit"> <Edit></Edit></el-icon>
                          </el-button>
                        </template>
                      </el-input>
                      <el-input disabled v-model="tempProduct.img">
                        <template #prepend>圖片</template>
                        <template #suffix>
                          <el-button
                            class="editBtn"
                            size="small"
                            @click="tagsDomainNameVisible = true"
                            ><el-icon class="edit"> <Edit></Edit></el-icon>
                          </el-button>
                        </template>
                      </el-input>
                      <el-input disabled v-model="tempProduct.url">
                        <template #prepend>網銀網址</template>
                        <template #suffix>
                          <el-button class="editBtn" size="small" @click="bankUrlVisible = true"
                            ><el-icon class="edit"> <Edit></Edit></el-icon>
                          </el-button>
                        </template>
                      </el-input>
                      <!-- <el-input v-model="tempProduct.city">
                        <template #prepend>城市</template>
                      </el-input>
                      <el-input v-model="tempProduct.pic2">
                        <template #prepend>PIC2</template>
                        <template #suffix>
                          <el-button class="editBtn" size="small"></el-button
                        ></template>
                      </el-input>  -->
                    </el-col>
                  </el-row>
                </div>
              </div></el-col
            >
          </el-row>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click.prevent="hideModal()">取消</button>
          <button type="button" class="btn btn-primary" @click="editConfirm()">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import { Edit } from '@element-plus/icons';

export default {
  props: {
    // 外層傳進來的資料(每次點擊資料都會不同 要寫在watch裡面)
    bankList_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    bankList_data() {
      this.tempProduct = this.bankList_data; // 內層等於外層
      //   this.getBankCard();
      //   this.getWalletInfo();
    },
  },
  data() {
    return {
      tempProduct: {},
      // 老帶新視窗專用
      tagsNewNameForm: {
        bank_type: '',
        bank: '',
        bank_cn: '',
        bank_preset: '',
        img: '',
        url: '',
      },
      tagsNameVisible: false,
      tagsContentVisible: false,
      tagsRemarkVisible: false,
      tagsDomainVisible: false,
      tagsDomainNameVisible: false,
      bankUrlVisible: false,
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
      this.$refs.tagsForm3.resetFields();
    },
    // 新標籤名稱
    newTags_Name() {
      this.tempProduct.title = this.tagsNewNameForm.title;
      this.tagsNameVisible = false;
    },
    // 新描述
    newTags_Content() {
      this.tempProduct.content = this.tagsNewNameForm.content;
      this.tagsContentVisible = false;
    },
    // 新備註
    newTags_Remark() {
      this.tempProduct.remark = this.tagsNewNameForm.remark;
      this.tagsRemarkVisible = false;
    },
    // 新域名綁定
    newTags_Domain() {
      this.tempProduct.domain = this.tagsNewNameForm.domain;
      this.tagsDomainVisible = false;
    },
    // 域名綁定更改
    changeStatus(item) {
      console.log(item);
      if (item === '是') {
        this.tagsNewNameForm.domain = '是'; // 狀態開啟
        // this.tagsNewNameForm.domain = this.tempProduct.domain;
      } else if (item === '否') {
        this.tagsNewNameForm.domain = '否'; // 狀態關閉
        // this.tagsNewNameForm.domain = this.tempProduct.domain;
      }
    },
    // 新域名稱
    newTags_Domain_Name() {
      this.tempProduct.domain_name = this.tagsNewNameForm.domain_name;
      this.tagsDomainNameVisible = false;
    },
    // 編輯完成送出
    editConfirm() {
      this.isLoading = true;
      // this.tagsNewNameForm.id = this.tempProduct.id;
      this.tagsNewNameForm.id = this.tempProduct.id;
      this.tagsNewNameForm.title = this.tempProduct.title;
      this.tagsNewNameForm.content = this.tempProduct.content;
      this.tagsNewNameForm.remark = this.tempProduct.remark;
      this.tagsNewNameForm.domain = this.tempProduct.domain;
      this.tagsNewNameForm.domain_name = this.tempProduct.domain_name;
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.$http
        .post(`${testapi}/backend/members/tags_update`, this.tagsNewNameForm)
        .then((res) => {
          this.isLoading = false;
          if (res.data.code === 200) {
            this.$swal.fire('標籤已修改!', `${res.data.msg}`, 'success');
            // this.tempProduct.teacher = this.selectValue.account;
            // this.hideModal();
            // console.log(this.tempProduct.id);
          } else {
            console.log(res.data);
          }
        });
      this.hideModal();
    },
  },
  components: {
    Edit,
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    // this.modal.show();
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
.el-input__suffix-inner .editBtn {
  background: none;
  color: #409eff;
  &:hover {
    transition: 0.5s;
    background: #236aa5;
    color: #fff;
  }
}
.el-input__suffix-inner {
  align-items: center;
}
.el-input.is-disabled .el-input__inner {
  background: none;
}
</style>
