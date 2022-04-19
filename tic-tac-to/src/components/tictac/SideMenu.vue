<template>
  <div class="flex justify-center">
    <div class="p-8">
      <div class="mt-2" :class="{ 'text-red-400': currentPlayer === 1 }">
        player 1
      </div>
      <div class="mt-2" :class="{ 'text-red-400': currentPlayer === 2 }">
        player 2
      </div>

      <div>
        <slot name="result"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideMenu",

  props: {
    currentPlayer: {
      type: Number,
      default: 1,
    },
  },
};
</script>