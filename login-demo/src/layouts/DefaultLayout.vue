<template>
  <div class="bg-gray-500 h-screen">
    <Header />
    <slot />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  name: "DefaultLayout",
  components: {
    Header,
  },
};
</script>