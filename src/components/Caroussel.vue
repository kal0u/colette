<template>
  <div class="myMain">
    <div class="textCont">
      <div class="topComp">
        <p class="pt-4 ml-2 mr-2 firstText">
          Découvrez notre sélection léchée
          <br />
          d’artistes talentueux.
        </p>
      </div>
      <div class="carCont">
        <vueper-slides
          :visible-slides="3"
          :bullets="false"
          slide-multiple
          :infinite="false"
          :gap="3"
          :slide-ratio="1 / 4"
          :dragging-distance="200"
          :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        >
          <vueper-slide
            v-for="img in slides"
            :key="img.name"
            :title="img.title"
            :image="img.content"
          />
        </vueper-slides>
      </div>

      <div class="btnCont">
        <div class="myBtn">
          <span>C</span>
          <span>H</span>
          <span>O</span>
          <span>I</span>
          <span>S</span>
          <span>I</span>
          <span>R</span>
          <br/>
          <span> M</span>
          <span>O</span>
          <span>N</span>
          <span> A</span>
          <span>R</span>
          <span>T</span>
          <span>I</span>
          <span>S</span>
          <span>T</span>
          <span>E</span>
        </div>
      </div>
    </div>
    <div class="blackTransition">
      <p class="pt-12">
        « Gagner de l’argent est un art, travailler est un art, et faire de
        bonnes affaires est le plus bel art qui soit. » <br />
        <span class="ml-8">Andy WARLOL</span>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default Vue.extend({
  name: "Carousel",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    slides: [
      {
        content: "https://i.imgur.com/LGjrKAv.png",
      },
      {
        content: "https://i.imgur.com/ACb7OCH.png",
      },
      {
        content: "https://i.imgur.com/2wnyvGd.png",
      },
      {
        content: "https://i.imgur.com/LGjrKAv.png",
      },
      {
        content: "https://i.imgur.com/2wnyvGd.png",
      },
      {
        content: "https://i.imgur.com/ACb7OCH.png",
      },
    ],
  }),
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
.btnCont {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 75%;
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
  background-image: url("https://images.unsplash.com/photo-1579762593131-b8945254345c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1122&q=80");
  background-size: cover;
  background-attachment: fixed;

  position: relative;
}

.topComp {
  position: absolute;
  margin-top: 20%;
  width: 40%;

  background-color: #fbfbf3;
  border-radius: 25px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
  display: block;
}
.firstText {
  font-size: 20px;
  font-family: "Helvetica";
}

.vueperslides__arrow svg {
  stroke-width: 8;
}
.myBtn {
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
  }
}

</style>