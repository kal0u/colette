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
    <div class="mt-10 imgCard">
      <div class="cardText">
        <h3 class="">Des locaux (vraiment) personnalisés</h3>
        <span class="">
          Marque-employeur, bien-être des salariés Inspiration Communication,
          events...
        </span>
      </div>
      <img :src="getImage('img1.png')" />
    </div>
    <div class="mt-10 imgCard">
      <img :src="getImage('img2.png')" />
      <div class="cardText">
        <h3 class="">Soutenir l’art contemporain</h3>
        <span class="">
          Faire une bonne action tout ça, Corde sensible, image de l’entreprise
        </span>
      </div>
    </div>
    <div class="mt-10 textCont">
      <h2>Défiscalisation</h2>
      <p class="mt-6">
        C’est quand même pour ça qu’ils vont<br />
        se motiver à le faire au final, on va pas<br />
        faire genre.
      </p>
      <v-btn color="black" class="mt-8" dark large>
        Comment <br />
        Défiscaliser ?
      </v-btn>
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
}
.imgCard {
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgCard img {
  margin-right: 40px;
  display: block;
  width: 100%;
  max-width: 400px;
  height: auto;
}
.imgCard h3 {
  margin: 0;
}
.cardText {
  padding-bottom: 55px;
}
</style>
