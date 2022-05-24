<template>
  <!-- 載入讀取 -->
  <Loading :active="isLoading"></Loading>
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
                  <!-- 日期 🥙-->
                  <el-form-item label="紀錄期間" class="thirdPay_dateStyle" prop="updateTime">
                    <!-- <div class="block"> -->
                    <!-- <span class="demonstration">Default</span> -->
                    <el-date-picker
                      v-model="searchOption.updateTime"
                      type="datetimerange"
                      range-separator="-"
                      start-placeholder="起始時間"
                      end-placeholder="結束時間"
                    />
                    <!-- </div> -->
                  </el-form-item>
                  <!-- 第三方平台🍖 -->
                  <el-form-item
                    label="第三方平台"
                    class="thirdPay_style me-2"
                    prop="deposit_status"
                  >
                    <el-select
                      v-model="searchOption.deposit_status"
                      placeholder="選擇狀態"
                      @change="chooseBank_status(searchOption.deposit_status)"
                    >
                      <el-option
                        v-for="item in searchOption.depositStatus_options"
                        :key="item.id"
                        :label="item.status"
                        :value="item"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <!-- 幣別 🍖-->
                  <el-form-item label="幣別" class="thirdPay_style me-2" prop="currency">
                    <el-select
                      v-model="searchOption.currency"
                      placeholder="選擇幣別"
                      @change="chooseBank_currency(searchOption.currency)"
                    >
                      <el-option
                        v-for="item in searchOption.currency_options"
                        :key="item.id"
                        :label="item.currency"
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
  <!-- 第三方 下半部份 -->
  <div class="d-flex justify-content-between">
    <h5 class="text-start mb-4 ms-2 mustType text-dark">第三方支付平台紀錄</h5>
  </div>
  <el-table
    ref="bankList_table"
    :data="companyList.companyList_table"
    style="width: 100%"
    :header-cell-class-name="classNameFunc"
    class="tags_table_style"
  >
    <el-table-column prop="id" label="#" align="center" width="50" />
    <el-table-column prop="bank" width="110" label="銀行名稱" sortable align="center">
    </el-table-column>
    <el-table-column prop="title_cn" width="110" label="顯示名稱" align="center"> </el-table-column>
    <el-table-column prop="bank_type" width="90" label="銀行類型" align="center" />
    <el-table-column prop="account" width="130" label="帳戶名稱" align="center"> </el-table-column>
    <el-table-column prop="currency" width="100" label="幣別" align="center">
      <template v-slot="{ row }">
        <el-tag :type="row.currency === '越南盾' ? 'danger' : 'success'">
          {{ row.currency }}
        </el-tag>
      </template>
    </el-table-column>
    <!-- 收款 -->
    <el-table-column label="收款">
      <el-table-column prop="vip_level" label="VIP等級" align="center" />
      <el-table-column
        prop="deposit_max_day"
        label="單日存款額上限"
        width="200"
        align="center"
        class="image_size"
      >
      </el-table-column>
      <el-table-column
        prop="deposit_max_total"
        width="200"
        label="累計存款上限"
        align="center"
        :formatter="stateFormat"
      />
      <el-table-column sortable prop="status" label="狀態" align="center">
        <template v-slot="{ row }">
          <el-tag :type="row.status === 'enable' ? 'success' : 'danger'">
            {{ '啟動' }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table-column>

    <!-- 出款 -->
    <el-table-column label="出款">
      <el-table-column
        :formatter="stateFormat"
        width="110"
        prop="dispensing_amount"
        label="金額"
        align="center"
      >
      </el-table-column>
      <el-table-column sortable width="110" prop="dispensing_status" label="狀態" align="center">
        <template v-slot="{ row }">
          <el-tag :type="row.dispensing_status === 'enable' ? 'success' : 'danger'">
            {{ '啟動' }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column sortable width="150" prop="balance_min" align="center">
      <template #header>
        <div>
          <div>餘額</div>
          <div>最低餘額</div>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="remark" label="備註" align="center" />
    <el-table-column sortable width="110" prop="updataUser" label="更新人員" align="center" />
    <el-table-column sortable width="110" prop="updateTime" label="更新時間" align="center" />
    <el-table-column width="110" prop="" label="操作" align="center">
      <template #default="scope">
        <el-button class="editBtn2" size="small" @click="openModal(scope.row)"
          ><el-icon class="edit"> <Edit></Edit></el-icon>
        </el-button>
      </template>
    </el-table-column>
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
        currency: '', // 幣別
        deposit_status: '', // 收款狀態
        dispensing_status: '', // 出款狀態
        currency_options: [], // 幣別下拉選項
        bankName_options: [], // 銀行名稱下拉選項
        bankType_options: [], // 銀行類型下拉選項
        depositStatus_options: [], // 收款狀態顯示下拉選項
        dispensingStatus_options: [], // 出款狀態顯示下拉選項
      },
      //  下方table
      thirdPay_list: {
        skip: '0', // 跳過幾筆
        limit: '20', // 一次幾筆
        order: 'ASC', // ID排序方式(DESC , ASC )
        orderType: 'id', // 餘額排序( 輸入... money )
        thirdPayList_table: [], // 銀行列表資料顯示
        filterTableData: [], // 篩選後儲存資料的地方
      },
    };
  },
  methods: {
    // 客製欄位樣式
    classNameFunc({ rowIndex, columnIndex }) {
      console.log(rowIndex, columnIndex);
      if (
        (columnIndex === 0 && rowIndex === 0)
        || (columnIndex === 2 && rowIndex === 0)
        || (columnIndex === 4 && rowIndex === 0)
        || (columnIndex === 6 && rowIndex === 0)
        || (columnIndex === 10 && rowIndex === 0)
      ) {
        return 'header_title_dark';
      }
      if (columnIndex === 8 && rowIndex === 0) {
        return 'text-second';
      }
      if (columnIndex === 7 && rowIndex === 1) {
        return 'image_size';
      }
      return 'header_title_light';
    },
    // 取得提款列表🍳
    getCompany_list() {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.isLoading = true;
      this.$http.get(`${testapi}/backend/financ/thirdPlatform`).then((res) => {
        this.isLoading = false;
        if (res.data.code === 200) {
          console.log(res.data.data);
          this.thirdPay_list.thirdPayList_table = res.data.data.list;
          // this.searchOption.depositStatus_options = res.data.data.list;
          // this.searchOption.dispensingStatus_options = res.data.data.list;
          // _.forEach(this.thirdPay_list.thirdPayList_table, (item, key) => {
          //   console.log(item, key);
          //   if (item.status === 'enable') {
          //     this.searchOption.depositStatus_options.push('啟動');
          //   } else if (item.status === 'disable') {
          //     this.searchOption.depositStatus_options.push('關閉');
          //   }
          //   if (item.dispensing_status === 'enable') {
          //     this.searchOption.dispensingStatus_options.push('啟動');
          //   } else if (item.dispensing_status === 'disable') {
          //     this.searchOption.dispensingStatus_options.push('關閉');
          //   }
          //   return true;
          // });
          // 🌭將收款狀態 enable改成啟動
          // _.forEach(this.searchOption.depositStatus_options, (item, key) => {
          //   console.log(item, key);
          //   if (item.status === 'enable') {
          //     return item.status === '啟動';
          //   }
          //   if (item.status === 'disable') {
          //     return item.status === '關閉';
          //   }
          //   return false;
          // });
          // console.log(this.withdrawList.withdrawTable);

          // 篩選重複的銀行名
          this.searchOption.bankName_options = _.uniqBy(
            this.searchOption.bankName_options,
            (item) => item.bank,
          );
          // 篩選重複的銀行類型
          this.searchOption.bankType_options = _.uniqBy(
            this.searchOption.bankType_options,
            (item) => item.bank_type,
          );
          // 篩選轉出的銀行顯示
          this.searchOption.bankTransfer_options = _.uniqBy(
            this.searchOption.bankTransfer_options,
            (item) => item.bank_cn,
          );
          // 篩選轉出的幣別
          this.searchOption.currency_options = _.uniqBy(
            this.searchOption.currency_options,
            (item) => item.currency,
          );
          // 篩選收款狀態的銀行顯示
          this.searchOption.depositStatus_options = _.uniqBy(
            this.searchOption.depositStatus_options,
            (item) => item.status,
          );
          // 篩選出款狀態的銀行顯示
          this.searchOption.dispensingStatus_options = _.uniqBy(
            this.searchOption.dispensingStatus_options,
            (item) => item.dispensing_status,
          );
        }
      });
    },
  },
};
</script>

<style lang="scss">
.thirdPay_style .el-input__inner {
  width: 100%;
  padding: 0 100px 0 10px;
  border: 1px solid #dcdfe6;
  &:focus {
    border-color: #409eff !important;
  }
}
.thirdPay_dateStyle .el-input__inner {
  width: 100%;
  padding: 0 50px 0 50px;
  border: 1px solid #dcdfe6;
  &:focus {
    border-color: #409eff !important;
  }
}
</style>
