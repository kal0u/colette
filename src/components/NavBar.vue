<template>
  <div class="container" style="width: 750px; margin: 0 auto;">
    <div class="row-full">
      <div class="btnContainer">
        <v-btn elevation="2" large>Concept</v-btn
        ><v-btn elevation="2" large>Artistes</v-btn
        ><v-btn elevation="2" large>Simulateur</v-btn
        ><v-btn elevation="2" large>Contact</v-btn>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style scoped>
.row-full {
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  height: 100px;
  margin-top: 0;
  left: 50%;
  background-color: #e2e6dc;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
}
.btnContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
button {
  font-family: "NotoHkLight";
}
</style>
