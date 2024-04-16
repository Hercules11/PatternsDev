<template>
  <div class="demo">
    <button
      v-for="(_, tab) in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]" class="tab"></component>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Home from "./components/Home.vue";
  import Feed from "./components/Feed.vue";
  import History from "./components/History.vue";

  // eslint-disable-next-line no-unused-vars
  const currentTab = ref("Home");

  // eslint-disable-next-line no-unused-vars
  const tabs = {
    Home,
    Feed,
    History,
  };
</script>

<!-- Preserving state -->
<template>
  <div class="demo">
    <!--  -->
    <KeepAlive>
      <component :is="tabs[currentTab]" class="tab"></component>
    </KeepAlive>
  </div>
</template>

<script setup>
  // ...
</script>