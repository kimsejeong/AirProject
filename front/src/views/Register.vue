<template>
  <div>
    <label>用户名</label>
    <div>
      <input type="text" v-model.trim="name" placeholder="请输入用户名" autocomplete="off" />
    </div>
    <label>昵称</label>
    <div>
      <input type="text" v-model.trim="nickname" placeholder="请输入昵称" autocomplete="off" />
    </div>

    <label>密码</label>
    <div>
      <input type="password" v-model="password" placeholder="请输入密码" autocomplete="off" />
    </div>
    <label>确认密码</label>
    <div>
      <input type="password" v-model="passwordConfirm" placeholder="请输入密码" autocomplete="off" />
    </div>

    <label>验证码</label>
    <div>
      <input type="text" v-model="code" placeholder="请输入验证码" autocomplete="off" />
    </div>
    <div @click="getCaptcha()" v-html="svg"></div>
    <button type="button" @click="registerForm">立即注册</button>
    <a>忘记密码</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      svg: "",
      name: "",
      nickname: "",
      password: "",
      passwordConfirm: "",
      code: ""
    };
  },
  mounted() {
    this.getCaptcha();
  },
  methods: {
    getCaptcha() {
      axios.get("http://localhost:3001/getCaptcha").then(res => {
        if (res.status === 200) {
          let obj = res.data;
          if (obj.code === 200) {
            this.svg = obj.data;
          }
        }
      });
    },
    registerForm() {}
  }
};
</script>

<style>
</style>