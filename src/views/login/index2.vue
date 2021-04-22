<template>
  <div class="login-container">
    <!-- @submit="handleSubmit" -->
    <a-form class="login-form" :wrapper-col="{ span: 24 }">
      <div class="title-container">
        <div class="title">系统登录</div>
        <svg-icon name="language" class="language" />
      </div>
      <a-form-item :validate-status="username.status" :help="username.tips">
        <a-input
          placeholder="Username"
          :value="username.value"
          @change="() => handleUsernameChange(username.value)"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-input type="password" placeholder="Password"></a-input>
      </a-form-item>
      <a-button type="primary" html-type="submit" :autoInsertSpaceInButton="false" block
        >登录</a-button
      >
    </a-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import '@/icons/svgjs/language';

// type Form = { userName: String; password: String; [key: string]: string };
interface usernameValInfo {
  // value: String;
  status: string;
  tips: string;
}

function validateUsername(value: string): usernameValInfo {
  console.log('value', value);
  if (value === 'admin') {
    return {
      status: 'Warning',
      tips: '名字输入正确',
    };
  } else {
    return {
      status: 'Error',
      tips: '名字输入错误',
    };
  }
}

@Component
export default class Login extends Vue {
  // data 对象
  private form = {};

  username = {
    value: 'admin1',
    status: 'success',
    tips: '',
  };

  public handleUsernameChange(value: string) {
    console.log('handleUsernameChange', value);
    this.username = {
      ...validateUsername(value),
      value,
    };
  }

  public handleSubmit(e: any): void {
    e.preventDefault();
    // console.log(this.form);
    // this.form.validateFields((err, values) => {
    //   if (!err) {
    //     axios.get('http://localhost:8081/login').then((res: any) => {
    //       if (res.data.code === 800) {
    //         this.$message.success(res.data.msg);
    //         this.$router.push({ path: '/' });
    //       }
    //     });
    //   }
    // });
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