<template>
  <DataProvider v-slot="{ data, loading }">
    <div class="joke-section">
      <p v-if="loading">Joke is loading...</p>
      <p v-if="!loading">{{ data.setup }}</p>
      <p v-if="!loading">{{ data.punchline }}</p>
    </div>
  </DataProvider>

  <DataProvider v-slot="{ data, loading }">
    <p v-if="loading">Hold on one sec...</p>
    <div v-else class="joke-section">
      <details>
        <summary>{{ data.setup }}</summary>
        <p>
          {{ data.punchline }}
        </p>
      </details>
    </div>
  </DataProvider>
</template>

<script setup>
/* eslint-disable-next-line no-unused-vars */
import DataProvider from "./components/DataProvider.vue";
</script>

<!--  插槽，组件把数据赋值给插槽，然后通过 v-slot 指令声明一下，就可以获取里面的数据传给子组件 -->

<!-- DataProvider.vue -->
<template>
  <slot :data="data" :loading="loading"></slot>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref, reactive } from "vue";

const API_ENDPOINT_URL = "https://official-joke-api.appspot.com/random_joke";

const data = reactive({
  setup: null,
  punchline: null,
});
const loading = ref(false);

const fetchJoke = async () => {
  loading.value = true;

  const response = await fetch(API_ENDPOINT_URL);
  const responseData = await response.json();

  data.setup = responseData.setup;
  data.punchline = responseData.punchline;
  loading.value = false;
};

fetchJoke();
</script>