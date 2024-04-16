<!-- import { ref } from "vue";
import { defineStore } from "pinia";

export const useNumbersStore = defineStore("numbers", () => {
  const numbers = ref([1, 2, 3]);

  function addNumber(newNumber) {
    this.numbers.push(newNumber);
  }

  return { numbers, addNumber };
});

 -->


 <!-- import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./styles.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app"); -->


<template>
  <div>
    <input v-model="numberInput" type="number" />
    <button @click="store.addNumber(numberInput)">Add new number</button>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useNumbersStore } from "../store";

  const store = useNumbersStore();
  const numberInput = ref(0);
</script>



<!-- Simple Store
Pro: Relatively easy to establish.
Con: State and possible state changes aren’t explicitly defined.
Pinia
Pro: Devtools support, plugins + typescript + server-side rendering support
Con: Additional boilerplate. -->