<template>
  <render />
</template>

<script setup>
  import { h } from "vue";

  /* eslint-disable-next-line no-undef, no-unused-vars */
  const { message } = defineProps(["message"]);

  /* eslint-disable-next-line no-unused-vars */
  const render = () => {
    return h(
      "div",
      {
        class: "render-card",
      },
      [
        h(
          "header",
          {
            class: "card-header card-header-title",
          },
          message
        ),
      ]
    );
  };
</script>

<!-- h is short for hyperscript which is a term often used in virtual DOM implementations to denote JavaScript syntax that produces HTML -->


<!-- 使用 Babel 插件 babel-plugin-jsx，可以将 JSX 编译成标准的 JS -->
<template>
  <render />
</template>

<script setup lang="jsx">
  const { message } = defineProps(["message"]);

  const render = (
    <div class="render-card">
      <header class="card-header card-header-title">{message}</header>
    </div>
  );
</script>