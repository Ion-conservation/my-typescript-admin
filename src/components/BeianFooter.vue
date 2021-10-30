<template>
  <a-layout-footer class="footer" style="text-align: center">
    <a
      target="_blank"
      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060402002080"
    >
      <img src="@/assets/备案图标.png" style="float: left" />
      <p>粤公网安备 44060402002080号</p>
    </a>
    <a target="_blank" href="https://beian.miit.gov.cn">
      <p>粤ICP备2021039208号</p>
    </a>
  </a-layout-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BeianFooter extends Vue {}
</script>

<style lang="less" scoped>
.footer {
  background-color: #fff;
  a {
    display: inline-block;
    text-decoration: none;
    height: 20px;
    line-height: 20px;
    p {
      float: left;
      height: 20px;
      line-height: 20px;
      margin: 0px 0px 0px 5px;
      color: #939393;
    }
  }
}
</style>
