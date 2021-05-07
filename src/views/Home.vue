<template>
  <div class="home">
    <Hello />
    <Card />
    <Choice />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hello from "../components/Hello.vue";
import Card from "../components/Card.vue";
import Choice from "../components/Choice.vue";
export default Vue.extend({
  name: "Home",
  components: {
    Hello,
    Card,
    Choice,
    // HowTo,
    // Caroussel,
    // Simulateur,
    // Contact
  },
});
</script>
