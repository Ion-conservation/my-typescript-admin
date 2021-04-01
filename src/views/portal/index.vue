<template>
  <a-layout class="layout" theme="light">
    <a-layout-header class="header">
      <my-header></my-header>
    </a-layout-header>
    <a-layout-content class="content">
      <my-content></my-content>
    </a-layout-content>
    <beian-footer />
  </a-layout>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyContent from "./components/MyContent";
import BeianFooter from "@/components/BeianFooter";

export default {
  components: {
    MyHeader,
    MyContent,
    BeianFooter,
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

