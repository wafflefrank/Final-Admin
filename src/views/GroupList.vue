<template>
  <!-- body顯示 -->
  <el-table :data="groupDetail" border stripe style="width: 100%">
    <el-table-column prop="group_name" label="組別名稱" />
    <el-table-column prop="currency" label="幣別"> </el-table-column>
    <el-table-column sortable prop="status" label="狀態" />
    <el-table-column label="層級" />
    <el-table-column label="玩家數" />
    <el-table-column label="存款">
      <el-table-column label="存款帳戶" />
      <el-table-column label="存款限額" />
    </el-table-column>
    <el-table-column label="取款">
      <el-table-column label="取款限額" />
      <el-table-column label="取款行政費(%)" />
      <el-table-column label="手續費" />
    </el-table-column>
    <el-table-column prop="createtime" label="更新時間" />
    <el-table-column label="更新人員" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" type="warning" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <!-- 分頁套件 -->
  <div class="block">
    <el-pagination
      background
      @current-change="handleCurrentChange"
      @size-change="sizechange"
      :current-page="currentPage"
      :page-sizes="pagesizes"
      :page-size="pagesize"
      layout="prev, pager, next, sizes"
      :total="total"
      style="margin: 10px 0px"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupDetail: [],

      total: 60, // 總共多少頁數
      currentPage: 1, // 當前頁數
      pagesize: 10, // 當前頁顯示多少條
      pagesizes: [10, 20, 30, 50],
      search: '',

      orderType: 'ASC', // ID排序方式(DESC , ASC )
      orderBy: '', // 餘額排序( 輸入... money )
    };
  },
  methods: {
    getGroupDetail(limit = 20, skip = 0) {
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.isLoading = true;
      this.$http
        .get(
          `${testapi}/backend/members/group_list?skip=${skip}&limit=${limit}&order=${this.orderType}&orderType`,
        )
        .then((res) => {
          this.isLoading = false;
          console.log(res.data);
          if (res.data.code === 200) {
            //   console.log(res.data.message);
            this.groupDetail = res.data.data.list;
            // console.log(this.newMember);
            // console.log(this.newMemberList);
          }
          // console.log(res.data);
        });
    },
    // 變換當前頁數
    handleCurrentChange(skip) {
      this.currentPage = skip; // 定義當前頁數 等於 skip
      if (skip <= 1) {
        // 若當前頁數 等於或小於1頁時
        this.getGroupDetail(this.pagesize);
      } else if (skip > 1) {
        // 若當前頁數等於2.3.4.5頁.....
        this.getGroupDetail(this.pagesize, this.pagesize * (skip - 1));
      }
    },
    // 變換每頁的項目數量
    sizechange(limit) {
      this.pagesize = limit;
      this.getGroupDetail(limit);
      this.currentPage = 1;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
  },
  created() {
    this.getGroupDetail();
    // this.getAddValue()
  },
};
</script>

<style lang="scss">
.el-table_1_column_6 .cell {
  text-align: center;
  color: rgb(212, 185, 28);
}
.el-table_1_column_9 .cell {
  text-align: center;
  color: rgb(212, 185, 28);
}
</style>
