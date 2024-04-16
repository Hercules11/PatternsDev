<!-- DogImages.vue -->

<template>
  <img v-for="(dog, index) in dogs" :src="dog" :key="index" alt="Dog" />
</template>

<script setup>
  import { defineProps } from "vue";
  const { dogs } = defineProps(["dogs"]);
</script>



<!-- DogImagesContainer.vue -->

<template>
  <DogImages :dogs="dogs" />
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import DogImages from "./DogImages.vue";

  const dogs = ref([]);

  onMounted(async () => {
    const response = await fetch(
      "https://dog.ceo/api/breed/labrador/images/random/6"
    );
    const { message } = await response.json();
    dogs.value = message;
  });
</script>


// Hook useDogImages.js
<!-- import { ref, onMounted } from "vue";

export default function useDogImages() {
  const dogs = ref([]);

  onMounted(async () => {
    const response = await fetch(
      "https://dog.ceo/api/breed/labrador/images/random/6"
    );
    const { message } = await response.json();
    dogs.value = message;
  });

  return { dogs };
} -->