<template>
  <div id="app">
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
        <router-link to="/login">Login</router-link> |
        <router-link to="/registration">Register</router-link> |
      </div>
    </nav>
    <router-view/>
  </div>
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

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
