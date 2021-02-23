<template>
  <div class="login-container">
    <a-form
      class="login-form"
      :form="form"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      @submit="handleSubmit"
    >
      <a-form-item label="Username">
        <a-input placeholder="Username"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input type="password" placeholder="Password"> </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox>Remember me</a-checkbox>
        <a href="">Forgot password</a>
        <a-button
          type="primary"
          html-type="submit"
          :autoInsertSpaceInButton="false"
          >Log in</a-button
        >
        <a href="">register now!</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
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
    handleSubmit() {
      console.log("submit");
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
    background-color: yellow;
    width: 520px;
    min-width: 400px;
  }
}
</style>