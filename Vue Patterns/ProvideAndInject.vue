<!-- ChildComponent5 -->
<template>
  <div>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
  import { inject } from "vue";
  const data = inject("data");
</script>
<!--  ------------- -->

<!-- ChildComponent4 -->
<template>
  <ChildComponent5 />
</template>

<script setup>
  import ChildComponent5 from "./ChildComponent5";
</script>
<!--  ------------- -->

<!-- ChildComponent3 -->
<template>
  <ChildComponent4 />
</template>

<script setup>
  import ChildComponent4 from "./ChildComponent4";
</script>
<!--  ------------- -->

<!-- ChildComponent2 -->
<template>
  <ChildComponent3 />
</template>

<script setup>
  import ChildComponent3 from "./ChildComponent3";
</script>
<!--  ------------- -->

<!-- ChildComponent -->
<template>
  <ChildComponent2 />
</template>

<script setup>
  import ChildComponent2 from "./ChildComponent2";
</script>
<!--  ------------- -->

<!-- App -->
<template>
  <div id="app">
    <ChildComponent />
  </div>
</template>

<script setup>
  import { provide } from "vue";
  import ChildComponent from "./components/ChildComponent";

  provide("data", "Data from parent!");
</script>
<!--  ------------- -->