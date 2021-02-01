<template>
  <v-app>
    <NavBar />

    <Hello />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Hello from "./components/Hello.vue";
import NavBar from "./components/NavBar.vue";

export default Vue.extend({
  name: "App",

  components: {
    Hello,
    NavBar,
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
