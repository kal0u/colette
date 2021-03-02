<template>
  <v-container>
    <!-- <div class="textCont" style="width: 750px; margin: 0 auto"> -->
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
  height: 1000px;
  background-image: url("../assets/img/cosmos.jpg");
  background-size: cover;
  position: relative;
}
.topComp {
  position: absolute;
  top: 15%;
  left: 35%;
  background-color: white;
  border-radius: 25px;
}
.firstText {
  font-size: 25px;
  font-weight: bold;
}
.card1 {
  background-color: white;
  /* position: relative;
  top: 55%;
  left: 5%; */
  width: 30%;
  border-radius: 25px;
}
.card2 {
  background-color: white;
  /* position: relative;
  top: %;
  left: 35%;*/
  width: 30%;
  border-radius: 25px;
}
.card3 {
  background-color: white;
  /* position: relative;
  top: %;
  left: 35%;*/
  width: 30%;
  border-radius: 25px;
}
.cardContainer {
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 55%;
}
</style>
