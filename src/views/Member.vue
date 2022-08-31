<template>
  <Loading :active="isLoading"></Loading>
  <!-- 新增會員 -->
  <div class="text-end">
    <button
      class="btn btn-primary btn-sm me-2 mb-2"
      type="button"
      @click="$refs.memberModal.showModal"
    >
      新增會員
    </button>
  </div>

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
    :header-cell-class-name="memberTitleFunc"
  >
    <el-table-column label="會員訊息" class="membertitle">
      <el-table-column prop="account" label="會員帳號" />
      <el-table-column prop="tagsTitle" label="標籤名稱" width="100">
        <template v-slot="{ row }">
          <el-tag :type="row.tagsTitle == 'VIP2Tags' ? 'success' : 'danger'">
            {{ row.tagsTitle }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="currency" width="60" label="幣別" />
      <el-table-column prop="email" label="信箱" />
      <el-table-column prop="country" label="城市" />
      <el-table-column prop="Createtime" sortable label="註冊時間" />
    </el-table-column>
    <el-table-column label="錢包訊息">
      <el-table-column prop="amount" sortable label="總餘額" :formatter="stateFormat" />
      <el-table-column prop="deposit" sortable label="總存款" :formatter="stateFormat" />
      <el-table-column prop="deposit_total" label="存款總數" />
      <el-table-column prop="withdraw" sortable label="總提領" :formatter="stateFormat" />
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" type="warning" @click="openModal(scope.row)">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 分頁套件 -->
  <div class="titleSt yle">
    <el-pagination
      class="pageStyle"
      background
      @current-change="handleCurrentChange"
      @size-change="sizechange"
      :current-page="currentPage"
      :page-sizes="pagesizes"
      :page-size="pagesize"
      layout="prev, pager, next, sizes"
      :total="total"
      :small="small"
      style="margin: 10px 0px"
    ></el-pagination>

    <!-- 篩選類別 -->
    <div class="selectStyle">
      <span class="">篩選 </span>
      <el-select size="small" v-model="value" placeholder="篩選方式..." @change="filterItem(value)">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item">
        </el-option>
      </el-select>
    </div>
  </div>

  <!-- ProductModal 新增會員-->
  <ProductModal ref="memberModal"></ProductModal>

  <!-- MemberDetailModal 會員資料-->
  <!-- 1. memberData = props定義的名稱 -->
  <!-- 2. tempProduct = 你這頁的tempProduct-->
  <MemberDetailModal
    ref="memberDetailModal"
    :memberData="tempProduct"
    @update-member="updateMember"
  ></MemberDetailModal>
</template>

<script>
import ProductModal from '../components/OpenModal/ProductsModal.vue';
import MemberDetailModal from '../components/OpenModal/MemberDetial.vue';

export default {
  name: 'Member',
  data() {
    return {
      small: true, // 分頁樣式大小
      total: 60, // 總共多少頁數
      currentPage: 1, // 當前頁數
      pagesize: 10, // 當前頁顯示多少條
      pagesizes: [10, 20, 30, 50],
      search: '',
      orderType: 'ASC', // ID排序方式(DESC , ASC )
      orderBy: '', // 餘額排序( 輸入... money )
      tableData: [],

      // 排序方式相關資料
      options: [
        {
          value: 'Option1',
          label: '依遞增排序ID',
        },
        {
          value: 'Option2',
          label: '依遞減排序ID',
        },
        {
          value: 'Option3',
          label: '依餘額',
        },
      ],

      // 會員資料
      memberDataEdit: {
        account: '',
        id: '',
        name: '',
        country: '',
        city: '',
        birthday: '',
        IM1: '',
        email: '',
        IM2: '',
        phone: '',
        pic1: '',
        pic2: '',
      },

      value: '',
      products: [],
      pagination: [],
      tempProduct: [],
      BankCardID: '',
    };
  },
  components: {
    ProductModal,
    MemberDetailModal,
  },
  methods: {
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
            //   console.log(res.data.message);
            this.tableData = res.data.data.list;
            console.log(this.tableData);
          }
          // console.log(res.data);
        });
    },
    // 變換當前頁數
    handleCurrentChange(skip) {
      this.currentPage = skip; // 定義當前頁數 等於 skip
      if (skip <= 1) {
        // 若當前頁數 等於或小於1頁時
        this.getUserinfo(this.pagesize);
      } else if (skip > 1) {
        // 若當前頁數等於2.3.4.5頁.....
        this.getUserinfo(this.pagesize, this.pagesize * (skip - 1));
      }
    },
    // 變換每頁的項目數量
    sizechange(limit) {
      this.pagesize = limit;
      this.getUserinfo(limit);
      this.currentPage = 1;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 選擇當前篩選類別
    filterItem(value) {
      if (value.value === 'Option1') {
        this.orderType = 'ASC';
        this.getUserinfo();
        console.log('選項1');
      } else if (value.value === 'Option2') {
        this.orderType = 'DESC';
        this.getUserinfo();
        console.log('選項2');
      } else {
        this.orderType = 'DESC';
        this.orderBy = 'money';
        this.getUserinfo();
        console.log('選項3');
      }
    },
    // 打開會員訊息Modal
    openModal(item) {
      // console.log(item);
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      this.$http.get(`${testapi}/backend/members/members_data?member_id=${item.id}`).then((res) => {
        if (res.data.code === 200) {
          console.log(res.data.data);
          this.tempProduct = { ...res.data.data };
        } else {
          this.$swal.fire('讀取失敗!', `${res.data.msg}`, 'error');
          console.log(res.data);
        }
      });
      const productComponent = this.$refs.memberDetailModal;
      productComponent.showModal();
    },
    // 編輯會員訊息
    updateMember(item) {
      console.log(item);
      // this.tempProduct = item;
      this.memberDataEdit.phone = item.phone;
      this.memberDataEdit.name = item.name;
      this.memberDataEdit.account = item.account;
      this.memberDataEdit.id = item.id;
      this.memberDataEdit.country = item.country;
      this.memberDataEdit.city = item.city;
      this.memberDataEdit.email = item.email;
      this.memberDataEdit.birthday = item.birthday;
      this.memberDataEdit.IM1 = item.IM1;
      this.memberDataEdit.IM2 = item.IM2;
      this.memberDataEdit.pic1 = item.pic1;
      this.memberDataEdit.pic2 = item.pic2;
      console.log(item.id, item.account);
      const testapi = `${process.env.VUE_APP_TESTAPI}`;
      const productComponent = this.$refs.memberDetailModal;
      // this.memberDataEdit.phone = item.phone;
      // this.memberDataEdit.tags = item.tags;
      this.$http
        .post(`${testapi}/backend/members/members_update`, this.memberDataEdit)
        .then((res) => {
          if (res.data.code === 200) {
            this.$swal.fire('編輯成功!', '', 'success');
          } else {
            this.$swal.fire('編輯失敗!', `${res.data.msg}`, 'error');
            console.log(res.data);
          }
          productComponent.hideModal();
          this.getUserinfo();
        });
    },
    // 千分位
    stateFormat(row, column, cellValue) {
      let bellValue = cellValue;
      bellValue += '';
      if (!bellValue.includes('.')) bellValue += '.';
      return bellValue.replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => `${$1},`).replace(/\.$/, '');
    },
    // 客製欄位樣式
    memberTitleFunc({
      row, column, rowIndex, columnIndex,
    }) {
      console.log(row, column, rowIndex, columnIndex);
      if ((columnIndex === 0 && rowIndex === 0) || (columnIndex === 1 && rowIndex === 0)) {
        return 'member_title_dark';
      }
      return '';
    },
  },
  created() {
    this.getUserinfo();
    // this.getAddValue()
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
// .el-table_1_column_1 .cell {
//   text-align: center;
//   color: rgb(212, 185, 28);
// }
// .el-table_1_column_8 .cell {
//   text-align: center;
//   color: rgb(212, 185, 28);
// }
.member_title_dark {
  color: rgb(212, 185, 28) !important;
  text-align: center !important;
}
.member_title_light {
  color: rgb(212, 185, 28) !important;
  text-align: center !important;
}
</style>
