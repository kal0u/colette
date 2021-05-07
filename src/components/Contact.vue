<template>
  <div class="myMain">
    <div class="textCont">
      <div class="topComp">
        <p class="pt-4 ml-2 mr-2 firstText">
          Une question ? Besoin d’un conseil ?
        </p>
        <p class="mt-8 mr-4 ml-4 secondText">
          Notre équipe se fera un plaisir d’échanger avec vous. Attention, vous
          pourriez vous attacher (nous vous aimons déjà).
        </p>
      </div>
      <div class="carCont">
        <div class="myBtn">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
          <span>E</span>
          <span>Z</span>
          <span>-</span>
          <span>N</span>
          <span>O</span>
          <span>U</span>
          <span>S</span>
        </div>
      </div>
    </div>
    <div class="whiteTransition pt-12">
      <div class="logoCont">
        <img class="logo" :src="getImage('header.png')" />
      </div>
      <p class="pt-1 ml-2">Mousch</p>
    </div>
    <div class="contactInfo">
      <p class="mt-6">hello@mousch.com</p>
      <p class="mt-6">
        5 rue de Belfort <br />
        69004 Lyon
      </p>
      <div class="whiteTransition">
        <div class="instaLogo">
          <img class="logo" :src="getImage('insta.png')" />
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
  methods: {
    getImage(path: string) {
      return require("../assets/img/" + path);
    },
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
  background-image: url("https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80");
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

.whiteTransition {
  background-color: #fbfbf3;
  color: black;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
}
.logoCont {
  width: 20px;
  height: 20px;
}
.logo {
  width: 100%;
  height: auto;
}
.contactInfo {
  text-align: center;
}
.instaLogo {
  width: 80px;
  height: 80px;
}
.secondText {
  font-family: "Helvetica";
}
.carCont {
  display: flex;
  justify-content: center;
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
