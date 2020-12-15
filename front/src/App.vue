<template>
  <div>
    <label>用户名</label>
    <div>
      <input type="text" v-model.trim="name" placeholder="请输入标题" autocomplete="off" />
    </div>

    <label>密码</label>
    <div>
      <input type="password" v-model="password" placeholder="请输入密码" autocomplete="off" />
    </div>

    <label>验证码</label>
    <div>
      <input type="text" v-model="code" placeholder="请输入验证码" autocomplete="off" />
    </div>

    <button type="button" @click="checkForm">点击登陆</button>
    <a>忘记密码</a>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
