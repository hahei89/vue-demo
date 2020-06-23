<template>
  <div class="home">
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input type="text" placeholder="Enter your name">
    </template>
    <template v-if="loginType === 'email'">
      <label>Email</label>
      <input type="text" placeholder="Enter your email address">
    </template>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
    data () {
      return {
        loginType: 'username'
      }
    },
    mounted () {
      setTimeout(() => {
        this.loginType = this.loginType === 'username' ? 'email' : 'username'
      }, 2000)
    }
  }
</script>
