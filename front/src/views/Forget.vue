<template>
  <div>
    <label>用户名</label>
    <div>
      <input type="text" v-model.trim="name" placeholder="请输入用户名" autocomplete="off" />
    </div>
    <label>验证码</label>
    <div>
      <input type="text" v-model="code" placeholder="请输入验证码" autocomplete="off" />
    </div>
    <div @click="getCaptcha()" v-html="svg"></div>
    <button type="button" @click="submitForm">提交</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      svg: "",
      name: "",
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
    submitForm() {}
  }
};
</script>

<style>
</style>