<template>
  <div
    v-for="i in 3"
    :key="i"
    class="border-t-2 border-l-2 border-solid border-black"
  >
    <Square />
  </div>
</template>
<script>
import Square from "./Square.vue";
export default {
  name: "SquareRow",
  components: {
    Square,
  },
};
</script>