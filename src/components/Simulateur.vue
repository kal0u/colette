<template>
  <div class="myMain">
    <div class="textCont">
      <div class="topComp">
        <p class="pt-4 ml-2 mr-2 firstText">
          Trouvez le meilleur financement
          </p>
          <p class="mt-8">
            Découvrez la solution idéale pour faire rentrer l’art dans votre
            entreprise grâce à notre - fantastique - simulateur :</p>
          <p class="mt-8 ml-2 mr-2">
            Presque comme un devis émis en moins de deux minutes, il vous évite
            un suspense inutiles. Grâce à lui, vous saurez combien vous pourrez
            investir et comment défiscaliser de la meilleure façon. Fantastique,
            donc.</p
          >
        
      </div>
      <div class="carCont">
        <v-btn large color="black" class="myBtn #fbfbf3--text"
          >JE TESTE LE<br />
          SIMULATEUR</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import "vueperslides/dist/vueperslides.css";

export default Vue.extend({
  name: "Carousel",
  components: {},
  data: () => ({}),
  created() {
    function getImage(path: string) {
      return require("../assets/img/" + path);
    }
  },
});
</script>
<style scoped>
.carCont {
  position: absolute;
  top: 45%;
  width: 80%;
}
.myMain {
  width: 100%;
  height: auto;
}
.textCont {
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1200px;
  background-image: url("https://images.unsplash.com/photo-1575396574188-ccf23d32d4b8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=705&q=80");
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

.topComp {
  position: absolute;
  margin-top: 10%;
  /* top: 15%;
  left: 35%; */
  background-color: #fbfbf3;
  border-radius: 25px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
  display: block;
  width: 30%;
}
.firstText {
  font-size: 25px;
  font-weight: bold;
}

.vueperslides__arrow svg {
  stroke-width: 8;
}
.myBtn {
  margin-top: 15%;
  background-color: black;
  color: #fbfbf3;
}
.blackTransition {
  background-color: black;
  color: #fbfbf3;
  width: 100%;
  text-align: center;
  height: 150px;
}
</style>
