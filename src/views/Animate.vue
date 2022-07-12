<template>
  <div class="parent" :style="{ 'flex-direction': currentDirection}" >
    <select @input="onDir">
      <option v-for="dir in direction">
        {{ dir }}
      </option>
    </select>
    <div class="cube"></div>
    <div class="cube"></div>

    <div class="cube" :style="{
      background: background,
      width: width + 'px',
      height: height + 'px',
      transform: 'translateX(' + translateX + 'px) translateY(' + translateY + 'px) scale(' + scale + ')'
    }"></div>
    <br>
    <input type="color" v-model="background">
    <br>
    <input type="range" min="0" max="500" step="1" v-model="height">
    <br>
    <input type="range" min="0" max="500" step="1" v-model="width">
    <br>
    <input type="range" min="0" max="500" step="1" v-model="translateX">
    <br>
    <input type="range" min="0" max="500" step="1" v-model="translateY">
    <br>
    <input type="range" min="0" max="3" step="0.01" v-model="scale">
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: '#2c3e50',
      width: 150,
      height: 150,
      translateX: 0,
      translateY: 0,
      scale: 1,
      direction: ['row', 'column'],
      currentDirection: 'row',
    }
  },
  methods: {
    onDir(e) {
      this.currentDirection = e.target.value;
      console.log(e.target.value)
    }
  }

}
</script>

<style scoped>
  .parent {
    display: flex;
    transition: all 1s ease-in;
  }

  .cube {
    width: 150px;
    height: 150px;
    background-color: #2c3e50;
    transition: all 1s ease-in;
    margin: 20px;
  }

</style>