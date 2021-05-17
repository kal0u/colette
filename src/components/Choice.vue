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
      <p v-if="questionIndex == 0" style="text-align: center" class="orangeText mt-12">Vous êtes plutôt....</p>
      <p v-if="questionIndex == 1" style="text-align: center" class="orangeText mt-12">Vous préférez :</p>
      <p v-if="questionIndex == 2" style="text-align: center" class="orangeText mt-12">Pour exposer...</p>
      <p v-if="questionIndex == 3" style="text-align: center" class="orangeText mt-12">Allez-vous plutôt...</p>
      <p v-if="questionIndex == 4" style="text-align: center" class="orangeText mt-12">Pour quel type d’occasion ?</p>
      <p v-if="questionIndex == 5" style="text-align: center" class="orangeText mt-12">Pour un événement ?</p>
      <p v-if="questionIndex == 6" style="text-align: center" class="orangeText mt-12">Vous préférez :</p>
      <p v-if="questionIndex == 7" style="text-align: center" class="orangeText mt-12">En utilisant une stratégie...</p>
      <p v-if="questionIndex == 8" style="text-align: center" class="orangeText mt-12">Vous désirez briller aux yeux de :</p>
      <p v-if="questionIndex == 9" style="text-align: center" class="orangeText mt-12">Vous voulez...</p>
      <p v-if="questionIndex == 10" style="text-align: center" class="orangeText mt-12">Comment préférez-vous les éblouir ?</p>
      <p v-if="questionIndex == 11" style="text-align: center" class="orangeText mt-12">Plutôt sur...</p>
      <p v-if="questionIndex == 12" style="text-align: center" class="orangeText mt-12">Allez-vous plutôt...</p>


      

      <div class="qstCont">
        <div v-if="questionIndex == 0" @click="questionIndex += 1" class="orangeBtn">
          Décoration </div>
          <div v-if="questionIndex == 0"  @click="questionIndex += 6" class="orangeBtn">Communication</div>


          <div @click="questionIndex += 1" v-if="questionIndex == 1" class="orangeBtn">UNE DÉCO PROVISOIRE</div> 
          <div  @click="questionIndex += 2" v-if="questionIndex == 1" class="orangeBtn">UNE DÉCO PÉRENNE</div> 


        <div @click="questionIndex += 2" v-if="questionIndex == 2" class="orangeBtn">DANS VOS LOCAUX</div>
        <div @click="questionIndex += 3" v-if="questionIndex == 2" class="orangeBtn">AILLEURS</div>

        <div v-if="questionIndex == 3" class="orangeBtn">ACHETER</div>
        <div v-if="questionIndex == 3" class="orangeBtn">LOUER</div>
        <div v-if="questionIndex == 3" class="orangeBtn">JE NE SAIS PAS</div>

        <div v-if="questionIndex == 4" class="orangeBtn">ÉVÉNEMENT</div>
        <div v-if="questionIndex == 4" class="orangeBtn">TOURNAGE</div>
        <div v-if="questionIndex == 4" class="orangeBtn">AUTRE</div>

        <div v-if="questionIndex == 5" class="orangeBtn">OUI</div>
        <div v-if="questionIndex == 5" class="orangeBtn">NON</div>



        <div  @click="questionIndex += 1" v-if="questionIndex == 6" class="orangeBtn">MARQUER LE COUP</div>
        <div @click="questionIndex += 2" v-if="questionIndex == 6" class="orangeBtn">AVOIR L’AIR COOL</div>

        <div v-if="questionIndex == 7" class="orangeBtn">100% DIGITALE</div>
        <div v-if="questionIndex == 7" class="orangeBtn">ÉVÉNEMENTIELLE</div>

        <div @click="questionIndex += 1" v-if="questionIndex == 8" class="orangeBtn">VOS CLIENTS</div>
        <div @click="questionIndex += 2"  v-if="questionIndex == 8" class="orangeBtn">VOS SALARIÉS</div>

        <div v-if="questionIndex == 9" class="orangeBtn">ATTEINDRE UNE NOUVELLE CIBLE</div>
        <div v-if="questionIndex == 9" class="orangeBtn">CHOYER VOS CLIENTS FIDÈLES</div>

        <div v-if="questionIndex == 10" class="orangeBtn">AVEC UN ÉVÉNEMENT</div>
        <div @click="questionIndex += 1" v-if="questionIndex == 10" class="orangeBtn">AVEC UNE OEUVRE D’ART</div>

        <div v-if="questionIndex == 11" class="orangeBtn">UNE COURTE DURÉE</div>
        <div @click="questionIndex += 1" v-if="questionIndex == 11" class="orangeBtn">UNE LONGUE DURÉE</div>

        <div v-if="questionIndex == 12" class="orangeBtn">ACHETER</div>
        <div v-if="questionIndex == 12" class="orangeBtn">LOUER</div>
        
      </div>
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
      questionIndex: 0,
      firstQuestion: {
        entry1: {
          id: "q1",
          title: "Décoration",
          questions: [
            {
              id: 0,
              title: "Vous préferez : ",
              isSubQuest: true,

              responses: [
                {
                  id: "a1",
                  title: "Une déco provisoire",
                  isSubQuest: true,
                  subQuest: [
                    {
                      id: 0,
                      title: "Pour exposer ....",
                      responses: [
                        {
                          id: "c1",
                          title: "Dans vos locaux",
                          isSubSubQuest: true,
                          subSubQuest: [
                            {
                              id: 0,
                              title: "Pour quel type d'occasion ?",
                              responses: [
                                {
                                  id: "d1",
                                  title: "événement",
                                },
                                {
                                  id: "d2",
                                  title: "Tournage",
                                },
                                {
                                  id: "d3",
                                  title: "Autre",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: "c2",
                          title: "Ailleurs",
                          isSubSubQuest: true,
                          subSubQuest: [
                            {
                              id: 0,
                              title: "Pour un évenement ?",
                              responses: [
                                {
                                  id: "d1",
                                  title: "oui",
                                },
                                {
                                  id: "d2",
                                  title: "non",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "a2",
                  title: "Une déco pérenne",
                  isSubQuest: true,
                  subQuest: [
                    {
                      id: 0,
                      title: "Allez vous plutôt ....",
                      responses: [
                        {
                          id: "b1",
                          title: "Achat",
                          isSubQuest: false,
                        },
                        {
                          id: "b2",
                          title: "Louer",
                          isSubQuest: false,
                        },
                        {
                          id: "b3",
                          title: "Je ne sais pas",
                          isSubQuest: false,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        entry2: {
          id: "q2",
          title: "Communication",
          questions: [
            {
              id: 0,
              title: "Vous préferez : ",
              isSubQuest: true,

              responses: [
                {
                  id: "a1",
                  title: "Marquer le coup",
                  isSubQuest: true,
                  subQuest: [
                    {
                      id: 0,
                      title: "En utilisant une stratégie...",
                      responses: [
                        {
                          id: "c1",
                          title: "100 % digitale",
                          isSubSubQuest: false,
                        },
                        {
                          id: "c2",
                          title: "évenementielle",
                          isSubSubQuest: false,
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "a2",
                  title: "Avoir l'air cool",
                  isSubQuest: true,
                  subQuest: [
                    {
                      id: 0,
                      title: "Vous désirez briller aux yeux de : ",
                      responses: [
                        {
                          id: "b1",
                          title: "Vos clients",
                          isSubQuest: true,
                          subQuest: [
                            {
                              id: 0,
                              title: "Vous voulez...",
                              responses: [
                                {
                                  id: "c1",
                                  title: "Atteindre une nouvelle cible",
                                  isSubSubQuest: false,
                                },
                                {
                                  id: "c2",
                                  title: "Choyer vos clients fidéles",
                                  isSubSubQuest: false,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: "b2",
                          title: "Vos salariés",
                          isSubQuest: true,
                          subSubQuest: [
                            {
                              id: 0,
                              title: "Comment préférez-vous les éblouir ?",
                              responses: [
                                {
                                  id: "c1",
                                  title: "Avec un événement",
                                  isSubSubQuest: false,
                                },
                                {
                                  id: "c2",
                                  title: "Avec une oeuvre d'art",
                                  isSubSubQuest: true,
                                  subSubQuest: [
                                    {
                                      id: 0,
                                      title: "Plutôt sur...",
                                      responses: [
                                        {
                                          id: "c1",
                                          title: "Une courte durée",
                                          isSubSubQuest: false,
                                        },
                                        {
                                          id: "c2",
                                          title: "Une longue durée",
                                          isSubSubQuest: true,
                                          subSubQuest: [
                                            {
                                              id: 0,
                                              title: "Allez-vous plutôt...",
                                              responses: [
                                                {
                                                  id: "c1",
                                                  title: "Acheter",
                                                  isSubSubQuest: false,
                                                },
                                                {
                                                  id: "c2",
                                                  title: "Louer",
                                                  isSubSubQuest: true,
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
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
.qstCont {
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
}
.orangeText {
  font-family: "Space Mono", monospace;
  color: #eb562e;
  font-weight: bold;
  font-style: italic;
}
</style>
