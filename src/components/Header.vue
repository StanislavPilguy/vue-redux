<template>
  <nav>
    <div v-if="getUser.email">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About US</router-link> |
      <router-link to="/schedule">Schedule</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/contacts">Contacts</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <a href="">Welcome {{ getUser.email }}</a> |
      <button @click="onLogout">
        Logout
      </button>
    </div>
    <div v-else>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About US</router-link> |
      <router-link to="/schedule">Schedule</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/contacts">Contacts</router-link> |
      <router-link to="/admin/login">Login</router-link> |
      <router-link to="/admin/registration">Register</router-link> |
    </div>
  </nav>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(
        ['getUser']
    )
  },
  methods: {
    ...mapMutations(['logout']),
    onLogout() {
      this.logout()
    }
  }
}
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>