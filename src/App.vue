<template>
  <v-app>
    <NavBar />

    <Hello />

    <Defisca/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Hello from "./components/Hello.vue";
import NavBar from "./components/NavBar.vue";
import Defisca from "./components/Defisca.vue"
export default Vue.extend({
  name: "App",

  components: {
    Hello,
    NavBar,
    Defisca,
  },

  data: () => ({
    //
  }),
});
</script>
<style>
@font-face {
  font-family: "HkBold";
  src: local("NotoSansHK-Bold"),
    url(./fonts/NotoSansHK-Bold.otf) format("truetype");
  
  font-family: "HkLight";
  src: local("NotoSansHK-Light"),
    url(./fonts/NotoSansHK-Light.otf) format("truetype");
}
