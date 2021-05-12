<template>
  <div class="login-container">
    <a-form-model
      ref="loginForm"
      class="login-form"
      :model="form"
      :rules="rules"
      :wrapper-col="{ span: 20 }"
    >
      <div class="title-container">
        <div class="title">系统登录</div>
        <svg-icon name="language" class="language" />
      </div>
      <a-form-model-item prop="username">
        <a-input placeholder="Username" v-model="form.username"></a-input>
      </a-form-model-item>
      <a-form-model-item prop="password">
        <a-input placeholder="Password" v-model="form.password"></a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
          :autoInsertSpaceInButton="false"
          block
          @click="handleSubmit"
          >登录</a-button
        >
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import axios from 'axios';
import '@/icons/svgjs/language';

interface UserInfo {
  username: string;
  password: string;
}

@Component
export default class Login extends Vue {
  // data 对象
  private form: UserInfo = {
    username: '',
    password: '',
  };

  private rules = {
    username: [{ required: true, message: 'Please input username', trigger: 'blur' }],
    password: [{ required: true, message: 'Please input password', trigger: 'blur' }],
  };

  private handleSubmit(e: any): void {
    (this.$refs.loginForm as any).validate((valid: boolean) => {
      if (valid) {
        axios
          .post('http://localhost:8081/login', {
            params: {
              ...this.form,
            },
          })
          .then((res: any) => {
            if (res.data.code === 800) {
              this.$message.success(res.data.msg);
              this.$router.push({ path: '/portal' });
            } else {
              this.$message.error(res.data.msg);
            }
          });
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
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