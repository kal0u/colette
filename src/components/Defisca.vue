<template>
  <div class="myCont">
    <div class="topBtn mt-12">Déduire ou défiscaliser ?</div>

    <div class="textContent">
      <p class="upText">
        EN FONCTION DE VOTRE STATUT JURIDIQUE ET DU TYPE D’OEUVRE<br />
        QUE VOUS SOUHAITEZ ACQUÉRIR, IL EST POSSIBLE DE DÉFISCALISER<br />
        OU DE DÉDUIRE TOUT OU UNE PARTIE DU MONTANT DE L’OEUVRE.
      </p>
    </div>
    <div class="imageCont">
      .
      <div class="titleText">
        <p>
          Il y a deux façons d’acquérir <br />
          de l’art en entreprise :
        </p>
      </div>
      <div class="myImg">
        <img :src="getImage('fleche.png')" />
      </div>
    </div>
    <div class="liContainer">
      <div id="firstLi">
        <div class="botBtn mt-12">Achat</div>
        <p class="elemLi mt-12 ml-6">
          <span style="background-color: white; font-weight: bold">
            Pour vous si :</span
          >
          votre société est soumise à l’impôt sur les sociétés, par exemple :
          SAS, SARL, SASU...
        </p>
        <p class="elemLi mt-8 ml-6">
          <span style="background-color: white; font-weight: bold">
            Avantages :</span
          >
          100% de la valeur de l’oeuvre entre en défiscalisation
          extra-comptable, et la TVA est récupérable. Les frais annexes liés à
          l’acquisition sont 100% déductibles.
        </p>
        <p class="elemLi mt-8 ml-6">
          <span style="background-color: white; font-weight: bold">
            Comptabilisation :</span
          >
          Pas de compte à imputer (défiscalisation extra-comptable). La fraction
          annuelle de déduction (20% de l’oeuvre/an) est affectée à un compte de
          réserve spécial qui se trouve au passif du bilan.
        </p>
        <p class="elemLi mt-8 ml-6">
          <span style="background-color: white; font-weight: bold"
            >Conditions :</span
          >
          L’oeuvre doit être une création originale réalisée par un artiste
          vivant, et exposée dans un endroit accessible au public, qui doit en
          être clairement informé (affiches, communication). Le montant de
          l’oeuvre ne doit pas dépasser 0,05% du CA annuel ou XXXX€
        </p>
      </div>
      <div id="firstLi">
        <div class="botBtn mt-12">Leasing</div>
        <p class="elemLi mt-12 ml-6">
          <span style="background-color: white; font-weight: bold"
            >Pour vous si :</span
          >
          vous êtes au régime BNC ou BIC, soumis à l’impôt sur le revenu. Aussi
          pour vous si vous êtes en société soumise à l’impôt sur les sociétés.
          Le leasing est accessible à tous·tes
        </p>
        <p class="elemLi mt-8 ml-6">
          <span style="background-color: white; font-weight: bold"
            >Pour vous si :</span
          >
          votre société est soumise à l’impôt sur les sociétés, par exemple :
          SAS, SARL, SASU...
        </p>
        <p class="elemLi mt-8 ml-6">
          <span style="background-color: white; font-weight: bold">
            Avantages :</span
          >
          règlement en plusieurs loyers - donc pour toutes les bourses ;
          possibilité d’acheter l’oeuvre à l’issue du leasing pour un faible
          montant (le reste de sa valeur); pas de conditions d’exposition ou
          d’achat, donc liberté totale.
        </p>
        <p class="elemLi mt-8 ml-6">
          <span style="background-color: white; font-weight: bold"
            >Comptabilisation :</span
          >
          606800 ou 6063 ? À confirmer avec votre comptable ou votre AGA
        </p>
        <p class="elemLi mt-8 ml-6">
          <span style="background-color: white; font-weight: bold">
            Conditions :</span
          >
          Aucune.
        </p>
      </div>
    </div>
    <div class="textContent"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

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
.myCont {
  width: 100vw;
  height: auto;
  background-color: #e9cadb;
  display: block;
}
.textContent {
  padding-top: 5%;
  width: 100vw;
  height: auto;
  justify-content: center;
  align-items: center;
}
.upText {
  font-family: "Space Mono", monospace;
  color: #041c96;
  text-align: center;
  font-size: 18px;
}
.titleText {
  font-family: "Space Mono", monospace;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  margin-top: 10%;
}
.imageCont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-left: 5%;
}
img {
  width: 150px;
  height: auto;
  left: 5%;
  position: relative;
}
.subTitle {
  text-align: center;
  font-family: MonoReg;
  color: white;
  font-size: 14px;
}
.topBtn {
  width: 40%;
  height: 80px;
  position: relative;
  margin: 0 auto; /* centre l'élément block */
  border: 2px solid #eb562e;
  background-color: white;
  box-shadow: 18px 18px 0px 1px #eb562e;
  color: #eb562e;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.botBtn {
  width: 40%;
  height: 80px;
  position: relative;
  margin: 0 auto; /* centre l'élément block */
  border: 2px solid #041c96;
  background-color: white;
  box-shadow: 18px 18px 0px 1px #041c96;
  color: #041c96;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.liContainer {
  display: flex;
  width: 100vw;
  height: auto;
}
#firstLi {
  flex: 1;
}
#firstLi:first-child {
  margin-right: 20px;
}
.elemLi {
  font-family: "Space Mono", monospace;
  color: #041c96;
  text-align: left;
  font-size: 18px;
}
</style>

