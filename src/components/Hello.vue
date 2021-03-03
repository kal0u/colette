<template>
  <v-container>
    <div class="textContent">
      <p id="welcome">
        Inspirer, décorer, défiscaliser.
      </p>
    </div>
          <p  class="hello">Bienvenue chez Mousch,<br/>
la nouvelle galerie d’art<br/>
dédiée aux professionnels.</p>
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
  background-color: white;
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
  padding-top: 5%;
  font-size: 30px;
  font-weight: bold;
}
.hello {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 5%;

}
</style>
