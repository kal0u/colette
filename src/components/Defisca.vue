<template>
  <!-- <v-container> -->
  <div class="myMain">
    <div class="textCont">
      <div class="topComp">
        <p class="pt-4 ml-2 mr-2 firstText">
          Exposez une oeuvre d’art <br />dans vos locaux et défiscalisez.
        </p>
      </div>
      <div class="cardContainer">
        <div class="card1">
          <p class="title">Sublimez votre image</p>
          <p class="cardText">
            Une entreprise qui acquiert de l’art est une entreprise cultivée. En
            plus d’afficher son soutien aux artistes, votre société bénificiera
            de tous les avantages que procure l’art : inspiration,
            communication, événements, esthétique, valeurs...
          </p>
        </div>
        <div class="card2">
          <p class="title">Brillez, inspirez.</p>
          <p class="cardText">
            Offrez à vos collaborateurs, clients ou patients une attention
            remarquable avec de l’art. Personnalisez vos locaux en les rendant
            uniques (inspirants, relaxants, ou raffinés...), et faites forte
            impression.
          </p>
        </div>
        <div class="card3">
          <p class="title">Payez moins d’impôts.</p>
          <p class="cardText">
            En cas d’achat, vous pouvez défiscaliser jusqu’à 100% de la valeur
            de l’oeuvre pendant 5 ans. Si vous optez pour le leasing, déduisez
            les loyers de votre résultat : acquérir de l’art, c’est réduire vos
            impôts.
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="textCont2">
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
    </div> -->
  </div>
  <!-- </v-container> -->
</template>
<script lang="ts">
import Vue from "vue";
// declare const require: any;
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
  padding-top: 150px;
}
.textCont {
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1200px;
  background-image: url("../assets/img/cosmos.jpg");
  background-size: cover;
  background-attachment: fixed;

  position: relative;
}
.topComp {
  position: absolute;
  margin-top: 20%;
  /* top: 15%;
  left: 35%; */
  background-color: #fbfbf3;
  border-radius: 25px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
}
.firstText {
  font-size: 25px;
  font-weight: bold;
}
.card1 {
  background-color: #fbfbf3;
  width: 30%;
  height: 18%;
  border-radius: 25px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
}
.card2 {
  background-color: #fbfbf3;
  width: 30%;
  height: 18%;
  border-radius: 25px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
}
.card3 {
  background-color: #fbfbf3;
  width: 30%;
  height: 18%;
  border-radius: 25px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
}
.cardContainer {
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 55%;
}
.textCont2 {
  text-align: center;
  /* padding-top: -4px; */
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1200px;
  background-image: url("https://images.unsplash.com/photo-1576495169018-bd2414046c6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1894&q=80");
  background-size: cover;
  position: relative;
}
</style>
