<template>
  <div class="login-container">

  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import '@/icons/svgjs/language';


}
</script>
<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #2d3a4b;
  .login-form {
    margin: 200px auto;
    width: 520px;
    min-width: 400px;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: #fff;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .language {
      width: 18px;
      font-size: 18px;
      position: absolute;
      right: 0px;
      top: 0px;
    }
  }
}
</style>