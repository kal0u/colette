<template>
  <v-container>
    <div class="container" style="width: 750px; margin: 0 auto;">
      <div class="row-full">
        <div class="titleContent">
          <div class="textContent">
            <p>
              Découvrez notre sélection concise <br />
              et léchée de créatifs talentueux.
            </p>
          </div>
        </div>
      </div>
    </div>
    <vueper-slides
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
    </vueper-slides>
  </v-container>
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
        title: "Test1",
        content: "https://i.imgur.com/LGjrKAv.png",
      },
      {
        title: "Test2",
        content: "https://i.imgur.com/ACb7OCH.png",
      },
      {
        title: "Test3",
        content: "https://i.imgur.com/2wnyvGd.png",
      },
      {
        title: "Test4",
        content: "https://i.imgur.com/LGjrKAv.png",
      },
      {
        title: "Test5",
        content: "https://i.imgur.com/2wnyvGd.png",
      },
      {
        title: "Test6",
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
.row-full {
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  height: 300px;
  margin-top: 10px;
  left: 50%;
  background-color: #e2e6dc;
}
.titleContent {
  position: absolute;
  border-radius: 25px;
  height: 100px;
  width: 40%;
  right: 30%;
  left: 30%;
  top: 40%;
  background-color: white;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
}

.textContent {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  text-align: center;
}

.vueperslide {
  /* Make the image rounded. */
  border-radius: 35px;
}
</style>
