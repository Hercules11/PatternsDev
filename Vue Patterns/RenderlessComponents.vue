<!-- 就是把组件划分为业务组件和视图组件，无渲染组件就是业务组件专门处理数据逻辑 -->

<!-- 提取开关的业务逻辑 -->
<!-- import { ref } from "vue";

export function useCheckboxToggle() {
  const checkbox = ref(false);

  const toggleCheckbox = () => {
    checkbox.value = !checkbox.value;
  };

  return {
    checkbox,
    toggleCheckbox,
  };
} -->


<!-- A toggle component: -->

<template>
  <div class="comp">
    <label class="switch">
      <input type="checkbox" :value="checkbox" @click="toggleCheckbox" />
      <div class="slider rounded" :class="checkbox ? 'active' : ''"></div>
    </label>
  </div>
</template>

<script setup>
  import { useCheckboxToggle } from "./composables/useCheckboxToggle";

  const { checkbox, toggleCheckbox } = useCheckboxToggle();
</script>


 <!-- renderless component -->
<template>
  <slot :checkbox="checkbox" :toggleCheckbox="toggleCheckbox"></slot>
  <!-- 父组件提供的模板内容 -->
</template>

<script setup>
  import { ref } from "vue";

  const checkbox = ref(false);

  const toggleCheckbox = () => {
    checkbox.value = !checkbox.value;
  };
</script>

<template>
  <!-- Toggle element 1 -->
  <ToggleComponent v-slot="{ checkbox, toggleCheckbox }">
    <div class="comp">
      <label class="switch">
        <input type="checkbox" :value="checkbox" @click="toggleCheckbox" />
        <div class="slider rounded" :class="checkbox ? 'active' : ''"></div>
      </label>
    </div>
  </ToggleComponent>

  <!-- Toggle element 2 -->
  <ToggleComponent v-slot="{ checkbox, toggleCheckbox }">
    <div class="comp">
      <button class="toggle-button" @click="toggleCheckbox">
        Toggle | <span>{{ checkbox ? "Yes 😀" : "No 😔" }}</span>
      </button>
    </div>
  </ToggleComponent>

  <!-- Toggle element 3 -->
  <ToggleComponent v-slot="{ checkbox, toggleCheckbox }">
    <div class="comp">
      <button
        :class="['tab-button', { active: checkbox }]"
        @click="toggleCheckbox"
      >
        On
      </button>
      <button
        :class="['tab-button', { active: !checkbox }]"
        @click="toggleCheckbox"
      >
        Off
      </button>
    </div>
  </ToggleComponent>
</template>

<script setup>
  import ToggleComponent from "./components/ToggleComponent";
</script>