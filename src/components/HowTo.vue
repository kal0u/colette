<template>
  <div class="myMain">
    <div class="textCont">
      <div class="topComp">
        <p class="pt-4 ml-2 mr-2 firstText">Comment ça marche ?</p>
      </div>
      <div class="cardContainer">
        <div class="card1">
          <p class="title">1.Choisissez</p>
          <p class="cardText">
            Sélectionnez le style ou l’artiste qui vous convient le mieux dans
            notre catalogue. Un doute, une question ? Contactez notre service
            client qui vous accompagnera pour éclairer toutes vos lanternes,
            avec (beaucoup) d’amour.
          </p>
        </div>
        <div class="card2">
          <p class="title">2. Financez</p>
          <p class="cardText">
            Achat ou leasing ? En fonction de votre somme de départ, de vos
            désirs et de votre statut juridique, une solution sera plus
            avantageuse que l’autre. Essayez notre simulateur pour en avoir le
            coeur net.
          </p>
        </div>
        <div class="card3">
          <p class="title">3. Défiscalisez</p>
          <p class="cardText">
            Nous faisons livrer et installer l’oeuvre directement dans vos
            locaux, sous vos yeux ébahis. Si besoin, nous vous soufflerons
            quelques suggestions pour vous aider à comprendre la défiscalisation
            (c’est bien plus simple qu’on ne le pense, promis).
          </p>
        </div>
      </div>
    </div>
  </div>
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
.myMain {
  width: 100%;
  height: auto;
}
.textCont {
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: -4px;
  width: 100%;
  height: 1200px;
  background-image: url("https://images.unsplash.com/photo-1576495169018-bd2414046c6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1894&q=80");
  background-size: cover;
  background-attachment: fixed;

  position: relative;
}
.topComp {
  position: absolute;
  top: 15%;
  /* left: 35%; */
  background-color: white;
  border-radius: 15px;
}
.firstText {
  font-size: 25px;
  font-weight: bold;
}
.card1 {
  background-color: white;
  width: 30%;
  height: 18%;
  border-radius: 25px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
}
.card2 {
  background-color: white;
  width: 30%;
  height: 18%;
  border-radius: 25px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
}
.card3 {
  background-color: white;
  width: 30%;
  height: 18%;
  border-radius: 25px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
}
.cardContainer {
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 45%;
}
</style>
