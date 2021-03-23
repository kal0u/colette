<template>
  <div class="myMain">
    <div class="textCont">
      <div class="topComp">
        <p class="pt-4 ml-2 mr-2 firstText">Trouvez le meilleur financement</p>
        <p class="mt-8 mr-4 ml-4 secondText">
          Découvrez la solution idéale pour faire rentrer l’art dans votre
          entreprise grâce à notre - fantastique - simulateur :
        </p>
        <p class="mt-8 mr-4 ml-4 s secondText">
          Presque comme un devis émis en moins de deux minutes, il vous évite un
          suspense inutiles. Grâce à lui, vous saurez combien vous pourrez
          investir et comment défiscaliser de la meilleure façon. Fantastique,
          donc.
        </p>
      </div>
      <div class="carCont">
        <div class="myBtn">
          <span>J</span>
          <span>E</span>
          <span> T</span>
          <span>E</span>
          <span>S</span>
          <span>T</span>
          <span> L</span>
          <span>E</span>
          <span> S</span>
          <span>I</span>
          <span>M</span>
          <span>U</span>
          <span>L</span>
          <span>A</span>
          <span>T</span>
          <span>E</span>
          <span>U</span>
          <span>R</span>
        </div>
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
  display: flex;
  justify-content: center;
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
  overflow: auto;
}
.firstText {
  font-size: 20px;
  font-weight: bold;
  font-family: "Helvetica";
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
.secondText {
  font-family: "Helvetica";
}
</style>
<style lang="scss" scoped>
.myBtn {
  margin-top: 5%;
  padding: 2% 2% 2% 2%;
  font-size: 16px;
  width: 200px;
  border-radius: 15px;
  background-color: black;
  color: #fbfbf3;
}

.myBtn:hover {
  background-color: white;
  span {
    transition: all ease 1s;
    &:first-child {
      color: cyan;
    }
    &:nth-child(2) {
      color: #ea4335;
    }
    &:nth-child(3) {
      color: blue;
    }
    &:nth-child(4) {
      color: pink;
    }
    &:nth-child(5) {
      color: rgb(177, 177, 32);
    }
    &:nth-child(6) {
      color: green;
    }
    &:nth-child(7) {
      color: orange;
    }
    &:nth-child(8) {
      color: #ea4335;
    }
    &:nth-child(9) {
      color: pink;
    }
    &:nth-child(10) {
      color: rgb(177, 177, 32);
    }
    &:nth-child(11) {
      color: green;
    }
    &:nth-child(12) {
      color: orange;
    }
    &:nth-child(13) {
      color: cyan;
    }
    &:nth-child(14) {
      color: #ea4335;
    }
    &:nth-child(15) {
      color: pink;
    }
    &:nth-child(16) {
      color: rgb(177, 177, 32);
    }
    &:nth-child(17) {
      color: green;
    }
    &:nth-child(18) {
      color: orange;
    }
  }
}
@media screen and (max-width: 600px) {
  .firstText {
    font-size: 12px;
    font-family: "Helvetica";
    font-weight: bold;
  }
  .secondText {
    font-size: 10px;
  }
}
</style>