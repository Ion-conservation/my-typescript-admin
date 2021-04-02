<template>
  <a-layout-footer class="footer" style="text-align: center">
    <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2021039208号-1</a>
  </a-layout-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BeianFooter extends Vue {
}
</script>

<style lang="less" scoped>
.footer {
  background-color: #fff;
}
</style>
