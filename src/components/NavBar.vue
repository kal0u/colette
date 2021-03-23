<template>
  <div class="myMain mt-2">
    <div class="row-full">
      <img class="myImage" :src="getImage('header.png')" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    getImage(path: string) {
      return require("../assets/img/" + path);
    },
  },
});
</script>
<style scoped>
.row-full {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
.myMain {
  width: 100%;
  height: auto;
}
@media screen and (max-width: 600px) {
  .myImage {
    width: 20%;
    height: 20%;
  }
}
</style>
