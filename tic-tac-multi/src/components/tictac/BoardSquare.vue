<script setup>
defineProps(["rowIndex", "colIndex", "matrix"]);
</script>
<template>
  <div
    ref="fs"
    class="bg-white h-14 w-14 font-bold text-2xl flex justify-center items-center border-2 border-r-0 border-b-0 border-solid border-black"
    :class="{
      'disable-click': matrix[rowIndex][colIndex] !== 0,
    }"
    @click="
      $emit('checked-box-clicked', { rowIndex: rowIndex, colIndex: colIndex })
    "
  >
    <span
      v-if="matrix[rowIndex][colIndex] === 1"
      class="material-icons-outlined"
    >
      done
    </span>
    <span
      v-if="matrix[rowIndex][colIndex] === 2"
      class="material-icons-outlined"
    >
      close
    </span>
    <span
      v-if="matrix[rowIndex][colIndex] === 0"
      class="material-icons-outlined"
    >
      check_box_outline_blank
    </span>
  </div>
</template>
