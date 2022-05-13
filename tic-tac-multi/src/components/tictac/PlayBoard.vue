<script setup>
import BoardSquare from "../tictac/BoardSquare.vue";
defineProps(["matrix"]);
</script>
<template>
  <div class="flex flex-col">
    <div v-for="(row, index) in matrix" :key="index" class="flex">
      <div
        class="border-black border-solid"
        v-for="(col, idx) in row"
        :key="idx"
        :class="{
          'border-r-2': (idx + 1) % 3 === 0,
          'border-b-2': (index + 1) % 3 === 0,
        }"
      >
        <BoardSquare :matrix="matrix" :rowIndex="index" :colIndex="idx" />
      </div>
    </div>
  </div>
</template>
