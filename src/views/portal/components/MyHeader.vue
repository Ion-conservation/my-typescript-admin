<template>
  <a-row type="flex" justify="space-between">
    <a-col :span="12" style="text-align: left">
      <img
        :src="require('@/assets/logo.png')"
        height="64px"
        alt=""
        style="vertical-align: top"
      />
    </a-col>
    <a-col :span="12" style="text-align: right">
      <a-dropdown>
        <a>芝麻 <a-icon type="down" /></a>
        <a-menu slot="overlay">
          <a-menu-item> 修改密码 </a-menu-item>
          <a-menu-item> 退出登录 </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-col>
  </a-row>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>