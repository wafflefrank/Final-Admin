<template>
  <!-- 組設置  上半部分-->
  <el-row>
    <el-col :span="24">
      <div class="mb-4 bg-purple-dark withdraw_content">
        <!-- 資料表單 -->
        <div>
          <el-form ref="bankList_form" :model="searchOption" class="demo-ruleForm">
            <el-row>
              <!-- 左半邊 -->
              <el-col :span="12" class="add_left_style_1">
                <!-- 搜尋 🍖-->
                <el-form-item label="銀行名稱" class="bankName_style me-2" prop="search">
                  <el-select
                    v-model="searchOption.search"
                    placeholder="選擇時區..."
                    @change="chooseBank_name(searchOption.bankName)"
                  >
                    <el-option
                      v-for="item in searchOption.tagNameOptions"
                      :key="item.id"
                      :label="item.title"
                      :value="item"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="搜尋" class="bankList_style me-2" prop="search">
                  <el-select
                    v-model="searchOption.search"
                    placeholder="選擇時區..."
                    @change="chooseTagsName(searchOption.bankName)"
                  >
                    <el-option
                      v-for="item in searchOption.tagNameOptions"
                      :key="item.id"
                      :label="item.title"
                      :value="item"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <!-- 右半邊 -->
              <el-col :span="12" class="add_left_style_1">
                <el-form-item label="搜尋" class="bankList_style me-2" prop="search">
                  <el-select
                    v-model="searchOption.search"
                    placeholder="選擇時區..."
                    @change="chooseTagsName(searchOption.bankName)"
                  >
                    <el-option
                      v-for="item in searchOption.tagNameOptions"
                      :key="item.id"
                      :label="item.title"
                      :value="item"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="搜尋" class="bankList_style me-2" prop="search">
                  <el-select
                    v-model="searchOption.search"
                    placeholder="選擇時區..."
                    @change="chooseTagsName(searchOption.bankName)"
                  >
                    <el-option
                      v-for="item in searchOption.tagNameOptions"
                      :key="item.id"
                      :label="item.title"
                      :value="item"
                    ></el-option>
                  </el-select>
                </el-form-item>
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
  <!-- 提款紀錄 下半部份 -->
  <h5 class="text-start mb-4 ms-2 mustType text-dark">提款紀錄</h5>
  <el-table
    ref="bankList_table"
    :data="bankList.bankList_table"
    style="width: 100%"
    :header-cell-class-name="classNameFunc"
    class="tags_table_style"
  >
    <el-table-column prop="id" label="#" align="center" width="50" />
    <el-table-column prop="bank" width="110" label="銀行名稱" sortable align="center">
    </el-table-column>
    <el-table-column prop="agency_team" label="熱門" align="center" />
    <el-table-column prop="bank_cn" label="顯示名稱" align="center">
      <template v-slot="{ row }">
        <el-tag :type="row.hierarchy === 'D_group' ? 'success' : 'danger'">
          {{ row.hierarchy }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="Createuser" width="90" label="銀行類型" align="center" />
    <el-table-column prop="" width="90" label="幣別" align="center" />
    <el-table-column prop="" label="網銀網址" align="center" />
    <el-table-column prop="img" label="圖片" width="120" align="center"> </el-table-column>

    <el-table-column sortable width="110" prop="withdraw_amount" label="操作" align="center" />
    <el-table-column sortable width="110" prop="withdraw_amount" label="轉出銀行" align="center" />
    <el-table-column width="110" prop="withdraw_amount" label="綁定銀行卡" align="center" />
  </el-table>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      // 上方搜尋區間
      searchOption: {
        bankName: '',
        bankType: '',
        bank_transfer: '', // 銀行轉出
        bank_link: '', // 銀行綁定
        bankType_options: [], // 銀行類型下拉選項
        bankTransfer_options: [], // 銀行轉出下拉選項
        bankLink_options: [], // 綁定銀行卡顯示下拉選項
      },
      //  下方提款紀錄 table
      bankList: {
        skip: '0', // 跳過幾筆
        limit: '20', // 一次幾筆
        order: 'ASC', // ID排序方式(DESC , ASC )
        orderType: 'id', // 餘額排序( 輸入... money )
        bankList_table: [],
      },
    };
  },
  methods: {
    // 取得提款列表🍳
    getBank_list() {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.isLoading = true;
      this.$http
        .get(
          `${testapi}/backend/financ/bankList?skip=${this.bankList.skip}&limit=${this.bankList.limit}&order=${this.bankList.order}&orderType`,
        )
        .then((res) => {
          this.isLoading = false;
          if (res.data.code === 200) {
            console.log(res.data.data);
            this.bankList.bankList_table = res.data.data.list;
            _.forEach(this.bankList.bankList_table, (item, key) => {
              console.log(item, key);
            });
            // console.log(this.withdrawList.withdrawTable);
          }
        });
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
    chooseBank_name() {},
    // 重置搜尋表單
    resetForm() {
      this.$refs.bankList_form.resetFields();
      // this.$refs.rankSetting.resetFields();
      this.getBank_list();
    },
  },
  created() {
    this.getBank_list();
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
.bankName_style .el-input__inner {
  width: 100%;
  padding: 0 160px 0 10px;
  border: 1px solid #dcdfe6;
  &:focus {
    border-color: #409eff !important;
  }
}
.bankList_style .el-input__inner {
  width: 100%;
  padding: 0 160px 0 10px;
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
</style>
