<template>
  <div class="myCont">
    <div class="textContent">
      <h1 id="textTitle">QUE CHERCHEZ-VOUS ?</h1>
      <div class="btnCont">
        <div class="orangeBtn">J’ai une idée précise</div>
        <div class="orangeBtn">Inspirez-moi !</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data() {
    return {};
  },
});
</script>
<style scoped>
.myCont {
  width: 100vw;
  height: auto;
}
.textContent {
  padding-top: 5%;
  width: 100vw;
  padding-bottom: 5%;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: #e9cadb;
}
#textTitle {
  text-align: center;
  font-family: "Space Mono", monospace;
  color: #041c96;
  font-size: 40px;
  font-weight: 700;
}
.btnCont {
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
}
.orangeBtn {
  width: 210px;
  height: 50px;
  position: relative;
  border: 2px solid #eb562e;
  background-color: white;
  box-shadow: 6px 6px 0px 1px #eb562e;
  color: #eb562e;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
