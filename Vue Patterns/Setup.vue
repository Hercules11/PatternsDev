<template>
  <button @click="closeButton">Button Text</button>
</template>

<script setup lang="ts">
  const emit = defineEmits<{ (e: "close"): void }>(["close"]);
  const closeButton = () => emit("close");
</script>