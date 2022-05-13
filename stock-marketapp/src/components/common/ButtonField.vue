<template>
  <button
    class="w-14 text-gray-100 font-normal border rounded-md p-1 overflow-hidden"
  >
    <slot name="caption"></slot>
    <slot>Buy</slot>
  </button>
</template>
<script>
export default {
  name: "ButtonField",
};
</script>
