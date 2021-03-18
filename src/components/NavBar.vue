<template>
  <div class="container" style="width: 750px; margin: 0 auto;">
    <div class="row-full">
      <img :src="getImage('header.png')"/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return { }
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
  display: flex;
  justify-content: center;
}
</style>
