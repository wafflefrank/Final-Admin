<template>
  <Loading :active="isLoading"></Loading>
  <!-- 依搜尋客戶名稱 -->
  <el-row class="mb-2">
    <el-col :span="19" :offset="0"></el-col>
    <el-col :span="5" :offset="0" class="text-end">
      <el-input
        class="text-end"
        v-model="search"
        size="small"
        placeholder="請輸入帳號名稱搜尋..."
      />
    </el-col>
  </el-row>

  <!-- 資料表單 -->
  <el-table
    :data="
      tableData.filter(
        (data) => !search || data.account.toLowerCase().includes(search.toLowerCase()),
      )
    "
    border
    stripe
    style="width: 100%"
    :header-cell-class-name="'member_title_dark'"
  >
    <el-table-column label="會員訊息">
      <el-table-column prop="account" sortable label="會員帳號"/>
      <el-table-column prop="Createtime" sortable label="註冊時間"/>
    </el-table-column>
    <el-table-column label="錢包訊息">
      <el-table-column prop="btcAmount" sortable label="BTC" :formatter="stateFormat" />
      <el-table-column prop="ethAmount" sortable label="ETH" :formatter="stateFormat" />
      <el-table-column prop="usdtAmount" sortable label="USDT" :formatter="stateFormat"/>
    </el-table-column>
    <el-table-column label="上級訊息">
      <el-table-column prop="teacher_id" sortable label="上級ID"/>
      <el-table-column prop="teacher_code" sortable label="上級邀請碼"/>
    </el-table-column>
  </el-table>

  <!-- 分頁套件 -->
  <div class="titleSt yle">
    <el-pagination
      class="pageStyle"
      background
      @current-change="handleCurrentChange"
      @size-change="sizeChange"
      :current-page="currentPage"
      :page-sizes="pageSizeInfo"
      :page-size="pageSize"
      layout="prev, pager, next, sizes"
      :total="total"
      :small="small"
      style="margin: 10px 0px"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Member',
  data() {
    return {
      small: true, // 分頁樣式大小
      total: 60, // 總共多少頁數
      currentPage: 1, // 當前頁數
      pageSize: 10, // 當前頁顯示多少條
      pageSizeInfo: [10, 20, 30, 50],
      search: '',
      tableData: [],
      pagination: [],
    };
  },
  components: {},
  methods: {
    getUserInfo(limit = 20, skip = 0) {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.isLoading = true;
      this.$http
        .get(
          `${testapi}/backend/members/members?skip=${skip}&limit=${limit}`,
        )
        .then((res) => {
          this.isLoading = false;
          if (res.data.code === 200) {
            this.tableData = res.data.data.list;
          }
        });
    },
    // 變換當前頁數
    handleCurrentChange(skip) {
      this.currentPage = skip; // 定義當前頁數 等於 skip
      if (skip <= 1) {
        // 若當前頁數 等於或小於1頁時
        this.getUserInfo(this.pageSize);
      } else if (skip > 1) {
        // 若當前頁數等於2.3.4.5頁.....
        this.getUserInfo(this.pageSize, this.pageSize * (skip - 1));
      }
    },
    // 變換每頁的項目數量
    sizeChange(limit) {
      this.pageSize = limit;
      this.getUserInfo(limit);
      this.currentPage = 1;
    },
    // 千分位
    stateFormat(row, column, cellValue) {
      if (cellValue) {
        let bellValue = cellValue;
        bellValue += '';
        if (!bellValue.includes('.')) bellValue += '.';
        return bellValue.replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => `${$1},`).replace(/\.$/, '');
      }

      return 0;
    },
  },
  created() {
    this.getUserInfo();
  },
};
</script>

<style lang="scss">
.titleStyle {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}
.selectStyle {
  margin-right: 20px;
}
.el-pager + button.btn-next[type='button'] {
  margin-right: 20px;
}
.member_title_dark {
  color: rgb(212, 185, 28) !important;
  text-align: center !important;
}
.member_title_light {
  color: rgb(212, 185, 28) !important;
  text-align: center !important;
}
</style>
