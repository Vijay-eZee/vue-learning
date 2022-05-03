<template>
  <ul class="flex justify-center space-x-4 py-2">
    <li v-for="(tab, index) in tabs" :key="index">
      <slot name="tab" :tabTitle="tab"></slot>
    </li>
  </ul>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    tabs: {
      type: Array,
    },
  },
};
</script>