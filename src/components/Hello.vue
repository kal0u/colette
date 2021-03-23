<template>
  <v-container>
    <div class="textContent">
      <p id="welcome"></p>
    </div>
    <p class="hello">
      Bienvenue chez Mousch,<br />
      la nouvelle galerie d’art<br />
      dédiée aux professionnels.
    </p>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data() {
    return {};
  },
  created() {
    const message = "Inspirer, décorer, défiscaliser.";

    const typingPromises = (message: any, timeout: any) =>
      [...message].map(
        (ch, i) =>
          new Promise<any>((resolve) => {
            setTimeout(() => {
              console.log(message);

              resolve(message.substring(0, i + 1));
            }, timeout * i);
          })
      );

    typingPromises(message, 140).forEach((promise) => {
      promise.then((portion) => {
        console.log(portion);
        document.querySelector("p")!.innerHTML = portion;
      });
    });
  },
});
</script>
<style scoped>
.textContent {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
#welcome {
  padding-top: 5%;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.hello {
  text-align: center;
  font-size: 20px;
  padding-bottom: 5%;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
