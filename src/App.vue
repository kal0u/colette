<template>
  <v-app>
    <NavBar />

    <Hello />

    <Defisca/>

    <!-- <HowTo/> -->
    <Caroussel/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Hello from "./components/Hello.vue";
import NavBar from "./components/NavBar.vue";
import Defisca from "./components/Defisca.vue"
import Caroussel from './components/Caroussel.vue'
import HowTo from './components/HowTo.vue'
export default Vue.extend({
  name: "App",

  components: {
    Hello,
    NavBar,
    Defisca,
    Caroussel
    // HowTo
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
