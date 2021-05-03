<template>
  <v-app>
    <Hello />
    <!-- <Defisca/>
    <HowTo/>
    <Caroussel/>
    <Simulateur/>
    <Contact/> -->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Hello from "./components/Hello.vue";
// import Defisca from "./components/Defisca.vue"
// import HowTo from "./components/HowTo.vue"
// import Caroussel from './components/Caroussel.vue'
// import Simulateur from "./components/Simulateur.vue"
// import Contact from './components/Contact.vue'
export default Vue.extend({
  name: "App",

  components: {
    Hello,
    // Defisca,
    // HowTo,
    // Caroussel,
    // Simulateur,
    // Contact
  },

  data: () => ({
    //
  }),
});
</script>
<style>
@font-face {
  font-family: "MonoBold";
  src: local("SpaceMono-Bold"),
    url(./fonts/SpaceMono-Bold.ttf) format("truetype");
  
  font-family: "MonoReg";
  src: local("SpaceMono-Regular"),
    url(./fonts/SpaceMono-Regular.ttf) format("truetype");
}
