<template>
  <div class="myCont">
    <div class="textContent">
      <h1 id="welcome">Frannie</h1>
      <p class="subTitle">
        Dealer d’art pour les professionnels <br />
        Dealer de communication artistique
      </p>
    </div>
    <div class="orangeBtn">Découvrir</div>
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
  height: 100vh;
  position: absolute;
}
.textContent {
  padding-top: 15%;
  width: 100vw;
  padding-bottom: 15%;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: #e9cadb;
}
#welcome {
  text-align: center;
  font-family: MonoBold;
  color: #041c96;
  font-size: 60px;
  font-weight: 700;
}
.subTitle {
  text-align: center;
  font-family: MonoReg;
  color: white;
  font-size: 14px;
}
.orangeBtn {
  width: 210px;
  height: 50px;
  position: relative;
  left: 45%;
  top: -2%;
  border: 2px solid #eb562e;
  background-color: white;
  box-shadow: 6px 6px 0px 1px #eb562e;
  font-family: MonoBold;
  color: #eb562e;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
