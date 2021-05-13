<template>
  <a-layout class="layout" theme="light">
    <a-layout-header class="header">
      <my-header></my-header>
    </a-layout-header>
    <a-layout-content class="content">
      <my-content></my-content>
    </a-layout-content>
  </a-layout>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyContent from "./components/MyContent";

export default {
  components: {
    MyHeader,
    MyContent,
  },
};
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
}
.header {
  background-color: #fff;
  box-shadow: 0 0 5px 2px #ccc;
}
.content {
  height: 100%;
}
</style>

