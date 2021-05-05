<template>
  <div class="myCont">
    <div class="cardContainer mt-16">
      <div class="card1 pb-4 pr-2 pl-2">
        <p class="myTitle">ACQUÉREZ DE L’ART</p>
        <p class="cardText">
          En achetant ou en louant de l’art, vous pouvez
          <router-link
            :to="'/defi'"
            target="_blank"
            style="
              text-decoration: underline;
              font-weight: bold;
              cursor: pointer;
            "
            >défiscaliser</router-link
          >
          la totalité ou une partie du montant de l’oeuvre et embellir vos
          locaux tout en soutenant un artiste !
        </p>
      </div>
      <div class="card2 pb-4 pr-2 pl-2">
        <p class="myTitle">EXTERNALISEZ VOS COUPS DE COM’</p>
        <p class="cardText">
          Vous cherchez à effectuer une campagne de communication exceptionnelle
          et spécifique ? Faites appel à notre expertise et notre réseau
          d’artistes.
        </p>
      </div>
      <div class="card3 pb-4 pr-2 pl-2">
        <p class="myTitle">SUBLIMEZ VOTRE IMAGE</p>
        <p class="cardText">
          Une fresque dans un parking ou sur une rame de métro, une édition
          limitée de votre produit signée de la main d’un artiste... Nous avons
          plein, plein d‘idées.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
// declare const require: any;
export default Vue.extend({
  name: "Defisca",
  data() {
    return {};
  },
});
</script>
<style scoped>
.myCont {
  width: 100vw;
  height: 500px;
}
.card1 {
  background-color: #041c96;
  width: 20%;
  height: 23%;
  overflow: auto;
  box-shadow: 18px 18px 0px 4px #e9cadb;
  text-align: center;
  color: white;
  font-family: "Space Mono", monospace;
}
.card2 {
  background-color: #041c96;
  width: 20%;
  height: 23%;
  overflow: auto;
  box-shadow: 18px 18px 0px 4px #e9cadb;
  text-align: center;
  color: white;
  font-family: "Space Mono", monospace;
}
.card3 {
  background-color: #041c96;
  width: 20%;
  height: 23%;
  overflow: auto;
  box-shadow: 18px 18px 0px 4px #e9cadb;
  text-align: center;
  color: white;
  font-family: "Space Mono", monospace;
}
.cardContainer {
  display: flex;
  justify-content: space-around;
}
.myTitle {
  font-family: "Space Mono", monospace;
  font-weight: 700;
  color: #eb562e;
  text-transform: uppercase;
  margin-top: 5%;
}
@media screen and (max-width: 600px) {
  .card1 {
    width: calc(32% - 20px);
  }
  .card2 {
    width: calc(32% - 20px);
  }
  .card3 {
    width: calc(32% - 20px);
  }
  .cardText {
    font-size: 10px;
  }
  .myTitle {
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-top: 12px;
  }
}
</style>
