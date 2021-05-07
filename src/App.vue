<template>
  <v-app>
    <router-view></router-view>
    <!-- <Hello />
    <Card />
    <Choice /> -->
    <!-- <HowTo/>
    <Caroussel/>
    <Simulateur/>
    <Contact/>  -->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import Hello from "./components/Hello.vue";
// import Card from "./components/Card.vue"
// import Choice from "./components/Choice.vue"
// import HowTo from "./components/HowTo.vue"
// import Caroussel from './components/Caroussel.vue'
// import Simulateur from "./components/Simulateur.vue"
// import Contact from './components/Contact.vue'
export default Vue.extend({
  name: "App",

  // components: {
  //   Hello,
  //   Card,
  //   Choice
  //   // HowTo,
  //   // Caroussel,
  //   // Simulateur,
  //   // Contact
  // },

  data: () => ({
    //
  }),
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
@font-face {
  font-family: "MonoBold";
  src: local("SpaceMono-Bold"),
    url(./fonts/SpaceMono-Bold.ttf) format("truetype");
  
  font-family: "MonoReg";
  src: local("SpaceMono-Regular"),
    url(./fonts/SpaceMono-Regular.ttf) format("truetype");
}
