<template>
  <div class="myMain">
    <div class="textCont">
      <div class="topComp">
        <p class="pt-4 ml-2 mr-2 firstText">
          Exposez une oeuvre d’art <br />dans vos locaux et défiscalisez.
        </p>
      </div>
      <div class="carCont">
        <!-- <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
      >
        <vueper-slide
          v-for="img in slides"
          :key="img.name"
          :title="img.title"
          :image="img.content"
        />
      </vueper-slides> -->

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

        <v-btn large color="black" class="myBtn white--text">CHOISIR<br/>
MON ARTISTE</v-btn>
      </div>
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
  position: relative;
}

.topComp {
  position: absolute;
  margin-top: 20%;
  /* top: 15%;
  left: 35%; */
  background-color: white;
  border-radius: 25px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
  display: block;
}
.firstText {
  font-size: 25px;
  font-weight: bold;
}

.vueperslides__arrow svg  {
  stroke-width: 8;
}
.myBtn {
  margin-top: 15%;
  background-color: black;
  color: white;
}
</style>
