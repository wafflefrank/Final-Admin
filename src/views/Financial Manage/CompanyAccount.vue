<template>
  <!-- 載入讀取 -->
  <Loading :active="isLoading"></Loading>
  <div class="text-end mb-3">
    <button type="button" class="btn hotSort btn-sm me-3">帳戶紀錄</button>
    <button type="button" class="btn addBank_btn btn-sm" @click="addBank_visible = true">
      新增
    </button>
    <!-- 新增標籤談窗 -->
    <!-- <TagsAdd ref="tagsAddModal"></TagsAdd> -->
  </div>
  <!-- 組設置  上半部分-->
  <el-row>
    <el-col :span="24">
      <div class="mb-4 bg-purple-dark withdraw_content">
        <!-- 資料表單 -->
        <div>
          <el-form ref="search_form" :model="searchOption" class="demo-ruleForm">
            <el-row>
              <!-- 資料內容 -->
              <el-col :span="24" class="add_left_style_1">
                <div class="d-flex justify-content-between">
                  <!-- 銀行類型 🍖-->
                  <el-form-item label="銀行類型" class="companyAccount_style me-2" prop="bankType">
                    <el-select
                      v-model="searchOption.bankType"
                      placeholder="選擇銀行類型"
                      @change="chooseBank_type(searchOption.bankType)"
                    >
                      <el-option
                        v-for="item in searchOption.bankType_options"
                        :key="item.id"
                        :label="item.bank_type"
                        :value="item"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <!-- 銀行名稱 🍖-->
                  <el-form-item label="銀行名稱" class="companyAccount_style me-2" prop="bankName">
                    <el-select
                      v-model="searchOption.bankName"
                      placeholder="選擇銀行"
                      @change="chooseBank_name(searchOption.bankName)"
                    >
                      <el-option
                        v-for="item in searchOption.bankName_options"
                        :key="item.id"
                        :label="item.bank"
                        :value="item"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <!-- 幣別 🍖-->
                  <el-form-item label="幣別" class="companyAccount_style me-2" prop="bankName">
                    <el-select
                      v-model="searchOption.bankName"
                      placeholder="選擇幣別"
                      @change="chooseBank_name(searchOption.bankName)"
                    >
                      <el-option
                        v-for="item in searchOption.bankName_options"
                        :key="item.id"
                        :label="item.bank"
                        :value="item"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <!-- 收款狀態 🍖 -->
                  <el-form-item
                    label="收款狀態"
                    class="companyAccount_style me-2"
                    prop="bank_transfer"
                  >
                    <el-select
                      v-model="searchOption.bank_transfer"
                      placeholder="選擇轉出銀行"
                      @change="chooseBank_transfer(searchOption.bank_transfer)"
                    >
                      <el-option
                        v-for="item in searchOption.bankTransfer_options"
                        :key="item.id"
                        :label="item.bank_cn"
                        :value="item"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <!-- 出款狀態 🍖 -->
                  <el-form-item label="出款狀態" class="companyAccount_style me-2" prop="bank_link">
                    <el-select
                      v-model="searchOption.bank_link"
                      placeholder="選擇綁定銀行卡"
                      @change="chooseBank_link(searchOption.bank_link)"
                    >
                      <el-option
                        v-for="item in searchOption.bankLink_options"
                        :key="item.id"
                        :label="item.bank_preset"
                        :value="item"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <div class="text-center justify-content-between mt-3">
              <button type="button" class="btn btn-secondary me-1" @click.prevent="resetForm()">
                重置
              </button>
              <el-button class="editBtn ms-1" size="large" @click="imtScreen()">
                <el-icon class="Search fs-4"> <Search></Search></el-icon>
                搜尋
              </el-button>
            </div>
          </el-form>
        </div>
      </div></el-col
    >
  </el-row>
  <!-- 公司出入款帳戶 下半部份 -->
  <div class="d-flex justify-content-between">
    <h5 class="text-start mb-4 ms-2 mustType text-dark">公司出入款帳戶</h5>
  </div>
  <el-table
    ref="bankList_table"
    :data="companyList.bankList_table"
    style="width: 100%"
    :header-cell-class-name="classNameFunc"
    class="tags_table_style"
  >
    <el-table-column prop="id" label="#" align="center" width="50" />
    <el-table-column prop="bank" width="110" label="銀行名稱" sortable align="center">
    </el-table-column>
    <el-table-column prop="bank_cn" label="顯示名稱" align="center"> </el-table-column>
    <el-table-column prop="bank_type" width="90" label="銀行類型" align="center" />
    <el-table-column prop="bank" label="帳戶名稱" align="center">
      <template v-slot="{ row }">
        <el-tag :type="row.bank === 'CTBC' ? 'danger' : 'success'">
          {{ 'V' }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="" width="90" label="幣別" align="center" />
    <el-table-column prop="url" label="網銀網址" align="center" />
    <el-table-column prop="img" label="圖片" width="200" align="center" class="image_size">
      <!--插入圖片-->
      <template v-slot="scope" class="image_size">
        <img class="image_size" :src="imageUrl + scope.row.img" alt="" />
      </template>
    </el-table-column>

    <el-table-column width="110" prop="" label="操作" align="center">
      <template #default="scope">
        <el-button class="editBtn2" size="small" @click="openModal(scope.row)"
          ><el-icon class="edit"> <Edit></Edit></el-icon>
        </el-button>
      </template>
    </el-table-column>
    <el-table-column sortable width="110" prop="withdraw_amount" label="轉出銀行" align="center" />
    <el-table-column width="110" prop="withdraw_amount" label="綁定銀行卡" align="center" />
  </el-table>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      isLoading: false, // 轉圈讀條
      // 上方搜尋區間
      searchOption: {
        bankName: '',
        bankType: '',
        bank_transfer: '', // 銀行轉出顯示
        bank_link: '', // 銀行綁定
        bankName_options: [], // 銀行類型下拉選項
        bankType_options: [], // 銀行類型下拉選項
        bankTransfer_options: [], // 銀行轉出顯示下拉選項
        bankLink_options: [], // 綁定銀行卡顯示下拉選項
      },
      //  下方table
      companyList: {
        skip: '0', // 跳過幾筆
        limit: '20', // 一次幾筆
        order: 'ASC', // ID排序方式(DESC , ASC )
        orderType: 'id', // 餘額排序( 輸入... money )
        companyList_table: [], // 銀行列表資料顯示
        filterTableData: [], // 篩選後儲存資料的地方
      },
    };
  },
  methods: {
    // 取得提款列表🍳
    getCompany_list() {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.isLoading = true;
      this.$http
        .get(
          `${testapi}/backend/financ/financeAccount?skip=${this.companyList.skip}&limit=${this.companyList.limit}&order=${this.companyList.order}&orderType`,
        )
        .then((res) => {
          this.isLoading = false;
          if (res.data.code === 200) {
            console.log(res.data.data);
            this.companyList.companyList_table = res.data.data.list;
            // this.searchOption.bankName_options = res.data.data.list;
            // this.searchOption.bankType_options = res.data.data.list;
            // this.searchOption.bankTransfer_options = res.data.data.list;
            // this.searchOption.bankLink_options = res.data.data.list;
            _.forEach(this.companyList.companyList_table, (item, key) => {
              console.log(item, key);
            });
            // console.log(this.withdrawList.withdrawTable);

            // 篩選重複的銀行名
            this.searchOption.bankName_options = _.uniqBy(
              this.searchOption.bankName_options,
              (item) => item.bank_cn,
            );
            // 篩選重複的銀行類型
            this.searchOption.bankType_options = _.uniqBy(
              this.searchOption.bankType_options,
              (item) => item.bank_type,
            );
            // 篩選轉出的銀行顯示
            this.searchOption.bankTransfer_options = _.uniqBy(
              this.searchOption.bankTransfer_options,
              (item) => item.bank,
            );
            // 篩選綁定的銀行顯示
            this.searchOption.bankLink_options = _.uniqBy(
              this.searchOption.bankLink_options,
              (item) => item.bank,
            );
          }
        });
    },
    // 重置搜尋表單
    resetForm() {
      this.$refs.search_form.resetFields(); // el.form.item裡面的prop一定要不一樣
      this.getBank_list();
    },
  },
  created() {
    this.getCompany_list();
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
.bg-purple-dark {
  background: #eff3f8;
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
.companyAccount_style .el-input__inner {
  width: 100%;
  padding: 0 100px 0 10px;
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
.bankDetail_style .el-input__inner {
  border: none;
  border-bottom: 1px solid #dcdfe6;
  padding: 20px 0;
}
.image_size {
  width: 100%;
  height: 50px;
  object-fit: cover;
}
</style>
