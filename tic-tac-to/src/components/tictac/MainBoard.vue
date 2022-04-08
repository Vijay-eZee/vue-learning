<template>
  <div class="bg-blue-200 h-screen flex justify-center items-center">
    <Board />
  </div>
</template>
<script>
import Board from "./Board.vue";
export default {
  name: "MainBoard",
  components: {
    Board,
  },
};
</script>