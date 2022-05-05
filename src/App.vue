<template>
  <!-- Modal -->
  <router-view />
</template>

<style lang="scss">
@import './assets/all.scss';
.add_left_style_1 {
  & .el-form-item {
    display: inline-block; //el-form-item的標題顯示再輸入框上面
    margin-bottom: 10px;
    text-align: left;
  }
}
.el-select-dropdown__item.selected {
  color: #3d8ed5;
  font-weight: 700;
  &:hover {
    color: white;
    background: #3d8ed5;
    transition: 0.5s;
    font-weight: bold;
  }
}
</style>
