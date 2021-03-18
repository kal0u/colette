<template>
  <v-app>
    <NavBar />
    <Hello />
    <Defisca/>
    <HowTo/>
    <Caroussel/>
    <Simulateur/>
    <Contact/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Hello from "./components/Hello.vue";
import NavBar from "./components/NavBar.vue";
import Defisca from "./components/Defisca.vue"
import HowTo from "./components/HowTo.vue"
import Caroussel from './components/Caroussel.vue'
import Simulateur from "./components/Simulateur.vue"
import Contact from './components/Contact.vue'
export default Vue.extend({
  name: "App",

  components: {
    Hello,
    NavBar,
    Defisca,
    HowTo,
    Caroussel,
    Simulateur,
    Contact
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
