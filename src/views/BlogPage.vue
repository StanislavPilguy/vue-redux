<template>
  <div>
    <h1>{{ name }}</h1>
    <div v-if="getLoadingPosts">
      loading...
    </div>
    <div v-else>
      <Post  v-for="post in getPosts.rows" :key="post.id" :post="post"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Post from "@/components/Post";

export default {
  data() {
    return {
      name: "Blog Page"
    }
  },
  computed: {
    ...mapGetters([
        'getPosts', 'getLoadingPosts'
    ])
  },
  methods: {
    ...mapActions([
        'fetchPostsPaginate'
    ])
  },
  mounted() {
    this.fetchPostsPaginate()
  },
  components: {
    Post
  }
}
</script>

<style scoped>

</style>