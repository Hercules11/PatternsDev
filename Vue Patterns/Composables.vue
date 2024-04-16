<!-- Template -->
<!-- Options API  -->
<script>
  export default {
    name: "MyComponent",
    props: {
      // props
    },
    data() {
      // data
    },
    computed: {
      // computed properties
    },
    watch: {
      // properties to watch
    },
    methods: {
      // methods
    },
    created() {
      // lifecyle methods like created
    },
    // ...
  };
</script>

<!-- Styles -->


<template>
  <div class="App">
    <Count :count="count" :increment="increment" :decrement="decrement" />
    <div id="divider" />
    <Width :width="width" />
  </div>
</template>

<script>
  import Count from "./components/Count.vue";
  import Width from "./components/Width.vue";

  export default {
    name: "App",
    data() {
      return {
        count: 0,
        width: 0,
      };
    },
    mounted() {
      this.handleResize();
      window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.handleResize);
    },
    methods: {
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
      handleResize() {
        this.width = window.innerWidth;
      },
    },
    components: {
      Count,
      Width,
    },
  };
</script>


<!-- Composition API -->
<!-- Template -->

<script>
  export default {
    name: "MyComponent",
    setup() {
      // the setup function
    },
  };
</script>

<!-- Styles -->

<template>
  <div class="App">
    <Count :count="count" :increment="increment" :decrement="decrement" />
    <div id="divider" />
    <Width :width="width" />
  </div>
</template>

<script>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import Count from "./components/Count.vue";
  import Width from "./components/Width.vue";

  export default {
    name: "App",
    setup() {
      const count = ref(0);
      const width = ref(0);

      const increment = () => {
        count.value++;
      };

      const decrement = () => {
        count.value--;
      };

      const handleResize = () => {
        width.value = window.innerWidth;
      };

      onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });

      onBeforeUnmount(() => {
        window.removeEventListener("resize", handleResize);
      });

      return {
        count,
        width,
        increment,
        decrement,
      };
    },
    components: {
      Count,
      Width,
    },
  };
</script>