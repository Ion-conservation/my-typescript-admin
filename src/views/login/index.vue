<template>
  <div class="login-container">
    <a-form
      class="login-form"
      :form="form"
      :wrapper-col="{ span: 24 }"
      @submit="handleSubmit"
    >
      <div class="title-container">
        <div class="title">系统登录</div>
        <svg-icon name="language" class="language" />
      </div>

      <a-form-item>
        <a-input placeholder="Username"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input type="password" placeholder="Password"> </a-input>
      </a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :autoInsertSpaceInButton="false"
        block
        >登录</a-button
      >
    </a-form>
  </div>
</template>

<script>
import axios from "axios";
import "@/icons/svgjs/language";
export default {
  data() {
    return {
      form: {},
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      // const data = {
      //   params: {
      //     username: "zouzou",
      //     password: "bilibili",
      //   },
      // };
      // axios.post("http://localhost:8081/login", data).then((res) => {
      //   console.log("res", res);
      // });
      axios.get("http://localhost:8081/login/name/zou/age/18").then((res) => {
        console.log("res", res);
      });
    },
  },
};
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