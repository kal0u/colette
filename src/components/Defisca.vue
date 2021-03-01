<template>
  <v-container>
    <div class="textCont">
      <h2>Entreprises, investissez dans de l’art</h2>
      <p class="mt-6">
        Faites entrer une oeuvre d’art<br />
        dans vos locaux et déduisez<br />
        sa valeur de vos impôts.<br />
        SAS, SARL, EI, BNC, BIC, etc...<br />
        Financez facilement grâce à l’achat<br />
        ou au leasing.
      </p>
    </div>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
declare const require: any;
export default Vue.extend({
  name: "Defisca",
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
.textCont {
  text-align: center;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/cosmos.jpg") ;
    background-size: cover;
}

</style>
