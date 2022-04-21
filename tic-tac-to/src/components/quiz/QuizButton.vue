<template>
  <div class="mr-4">
    <button v-bind="$attrs">
      <slot name="btn-name"></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "QuizButton",
  inheritAttrs: false,
};
</script>