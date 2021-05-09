<template>
  <div class="myCont">
    <div class="textContent">
      <h1 id="textTitle">QUE CHERCHEZ-VOUS ?</h1>
      <div class="btnCont">
        <div @click="isHidden = !isHidden" class="orangeBtn">
          J’ai une idée précise
        </div>
        <div class="orangeBtn">Inspirez-moi !</div>
      </div>
    </div>
    <div v-if="!isHidden" class="textContent mt-12">
      <div class="btnCont mt-0">
        <div class="blueBtn">J’AI UNE IDÉE PRÉCISE</div>
      </div>
      <p class="textPara mt-12">
        Fantastique ! Racontez-nous tout ci-dessous.<br />
        Nous vous répondrons en moins de 24 heures*.<br />
        * (sauf en cas de force très majeure, type ‘fin du monde’)
      </p>
      <div class="container">
        <form action="action_page.php">
          <label for="fname">Dénomination</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Prénom Nom2famille"
          />

          <label for="lname">Adresse e-mail</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="rené.francishuster@entreprisenulle.fr"
          />

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style="height: 200px"
          ></textarea>

          <input type="submit" value="ENVOYER" />
        </form>
      </div>
    </div>
    <div class="textContent mt-12">
              <div class="blueBtn">INSPIREZ-MOI</div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data() {
    return {
      isHidden: true,
    };
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
.blueBtn {
  width: 40%;
  height: 80px;
  position: relative;
  margin: 0 auto; /* centre l'élément block */
  border: 2px solid #041c96;
  background-color: white;
  box-shadow: 18px 18px 0px 1px #041c96;
  color: #041c96;
  font-family: "Space Mono", monospace;
  font-size: 28px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.textPara {
  text-align: center;
  font-family: monospace;
  color: #eb562e;
  font-style: italic;
  font-size: 18px;
}
/* Style inputs with type="text", select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #041c96; /* Gray border */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}
label {
  background-color: #041c96;
  text-transform: uppercase;
  color: white;
}
/* Style the submit button with a specific background color etc */
input[type="submit"] {
  background-color: #eb562e;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  left: 80%;
  font-weight: bold;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type="submit"]:hover {
  background-color: #eb562e;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 40%;
  border: 2px solid #eb562e;
  font-family: "Space Mono", monospace;
  box-shadow: 18px 18px 0px 1px #eb562e;
}
</style>
