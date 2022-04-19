<template>
  <div class="flex border-gray-300 rounded-lg mt-2">
    <slot name="prepend-icon"></slot>
    <button v-bind="$attrs" @click="$emit('custom-click')">
      <slot name="text"></slot>
    </button>
    <slot name="post-icon"></slot>
  </div>
</template>
<script>
export default {
  name: "BaseCoreButton",
  inheritAttrs: false,
  props: {
    bgColor: {
      type: String,
      default: "bg-gray-600",
    },
  },
};
</script>