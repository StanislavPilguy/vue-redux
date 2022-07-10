<template>
  <div>
    <h5>
      {{ post.title }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: [
      'post'
  ]
}

</script>

<style scoped>

</style>