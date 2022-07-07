<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About US</router-link> |
      <router-link to="/schedule">Schedule</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/contacts">Contacts</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/registration">Register</router-link> |
      <router-link to="/admin">Admin</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
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

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
