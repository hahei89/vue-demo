<template>
  <div class="home">
    <!-- <template v-if="loginType === 'username'">
      <label>Username</label>
      <input type="text" placeholder="Enter your name">
    </template>
    <template v-if="loginType === 'email'">
      <label>Email</label>
      <input type="text" placeholder="Enter your email address">
    </template> -->
    <external-update @hook:mounted="$_externalUpdate" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import externalUpdate from './external-update.vue'
  export default {
    name: 'Home',
    components: {
      externalUpdate
    },
    data () {
      return {
        loginType: 'username'
      }
    },
    mounted () {
      setTimeout(() => {
        this.loginType = this.loginType === 'username' ? 'email' : 'username'
      }, 2000)
    },
    methods: {
      $_externalUpdate () {
        console.log('external watch update')
      }
    }
  }
</script>
