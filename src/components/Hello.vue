<template>
  <v-container>
    <div class="container" style="width: 750px; margin: 0 auto;">
      <div class="row-full">
        <div class="titleContent">
          <div class="textContent">
            <p>Colette & Basile</p>
          </div>
        </div>
      </div>
    </div>
    <div class="textContent">
      <p id="welcome">
        Bienvenue dans la nouvelle galerie d’art en ligne dédiée aux
        professionnels.
      </p>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({}),
});
</script>
<style scoped>
.row-full {
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  height: 200px;
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
  top: 75%;
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
  font-size: 50px;
}
#welcome {
  padding-top: 15%;
  padding-bottom: 10%;
  font-size: 30px;
}
</style>
