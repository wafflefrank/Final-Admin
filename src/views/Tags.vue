<template>
  <!-- header顯示 -->
  <!-- 組設置  上半部分-->
  <el-row class="mb-4 mt-4">
    <el-col :span="24">
      <div class="group_set_content bg-purple-dark">
        <!-- 資料表單 -->
        <div>
          <el-form ref="searchOption1" :model="searchOption" :rules="rules" class="demo-ruleForm">
            <el-row>
              <!-- 左半邊 -->
              <el-col :span="10">
                <!-- 日期 -->
                <el-row>
                  <el-col :span="24" class="add_left_style_1">
                    <!-- 日期1 🌭-->
                    <el-form-item label="日期" class="ms-2 dateStyle" prop="date1">
                      <!-- value-format="MMMM Do YYYY, h:mm:ss a" -->
                      <el-date-picker
                        v-model="searchOption.date1"
                        type="daterange"
                        range-separator="-"
                        start-placeholder="起始日期"
                        end-placeholder="結束日期"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 會員帳號 -->
                <el-row>
                  <el-col :span="24" class="add_left_style_2">
                    <el-form-item
                      label="會員帳號"
                      class="ms-2 groupName_style"
                      prop="memberAccount"
                    >
                      <el-select
                        v-model="searchOption.memberAccount"
                        placeholder="選擇帳號"
                        @change="chooseAccount(searchOption.memberAccount)"
                      >
                        <el-option
                          v-for="item in searchOption.accountOptions"
                          :key="item.id"
                          :label="item.account"
                          :value="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item class="ms-2 groupName_style">
                      <el-input disabled v-model="searchOption.memberAccount"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
              <!-- 中間 -->
              <el-col :span="5">
                <!-- 幣別 -->
                <el-row>
                  <el-col :span="24" class="add_left_style_1">
                    <el-form-item label="幣別" class="groupName_style" prop="currency"
                      ><el-select
                        v-model="searchOption.currency"
                        placeholder="選擇幣別"
                        @change="chooseCurrency(searchOption.currency)"
                      >
                        <el-option
                          v-for="item in searchOption.currencyOptions"
                          :key="item.id"
                          :label="item.currency"
                          :value="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>

                <!-- 操作人員 -->
                <el-row>
                  <el-col :span="24" class="add_left_style_1">
                    <el-form-item label="操作人員" class="groupName_style"
                      ><el-input disabled></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
              <!-- 右半邊 -->
              <el-col :span="9">
                <!-- 調整前層級 -->
                <el-row>
                  <el-col :span="24" class="add_left_style_1">
                    <el-form-item label="調整前層級" class="groupName_style" prop="g_original"
                      ><el-select
                        v-model="searchOption.g_original"
                        placeholder="選擇前層級"
                        @change="chooseG_original(searchOption.g_original)"
                      >
                        <el-option
                          v-for="item in searchOption.g_originalOptions"
                          :key="item.id"
                          :label="item.g_original"
                          :value="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <!-- 調整後層級 -->
                    <el-form-item label="調整後層級" class="ms-2 groupName_style" prop="g_new">
                      <el-select
                        v-model="searchOption.g_new"
                        placeholder="選擇後層級"
                        @change="chooseG_new(searchOption.g_new)"
                      >
                        <el-option
                          v-for="item in searchOption.g_newOptions"
                          :key="item.id"
                          :label="item.g_new"
                          :value="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 調整類型 -->
                <el-row>
                  <el-col :span="24" class="add_left_style_1">
                    <el-form-item label="調整類型" class="groupName_style" prop="adjust_type"
                      ><el-select
                        v-model="searchOption.adjust_type"
                        placeholder="選擇類型"
                        @change="chooseAdjust_type(searchOption.adjust_type)"
                      >
                        <el-option
                          v-for="item in searchOption.adjust_typeOptions"
                          :key="item.id"
                          :label="item.adjust_type"
                          :value="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <div class="text-center justify-content-between pb-2">
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

  <!-- body顯示 -->
  <el-table :data="newMemberList" border stripe style="width: 100%">
    <el-table-column prop="newMember" label="代理(舊)" />
    <el-table-column label="代理團隊"> </el-table-column>
    <el-table-column label="老帶新" />
    <el-table-column label="會員帳號" />
    <el-table-column label="真實姓名" />
    <el-table-column sortable label="標籤名稱" />

    <el-table-column label="存款金額" />
    <el-table-column label="目前餘額" />
    <el-table-column label="註冊時間" />
    <el-table-column label="註冊IP位置" />
    <el-table-column label="操作"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      // 上方搜尋區間
      searchOption: {
        tagName: '',
        updateTime: '',
      },
      // 下方標籤列表
      tagsTable: [],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.group_set_content {
  padding: 10px 0 0;
  border-radius: 10px;
  flex-wrap: wrap;
  //   min-height: 36px;
}
.bg-purple-dark {
  background: #eff3f8;
}
</style>
