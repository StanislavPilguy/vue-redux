<template>

  <div>
    <input type="email" v-model="user.email">
    <br>
    <input type="password" v-model="user.password">
    <br>
    <button @click="onLogin">Login</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        email: 'admin@admin.com',
        password: 'admin1'
      }
    }
  },
  methods: {
    ...mapActions(['fetchLogin']),
    onLogin() {
      this.fetchLogin(this.user)
    }
  }
}
</script>

<style scoped>

</style>