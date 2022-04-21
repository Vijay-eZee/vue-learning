<template>
  <div class="border-2 border-gray-300 p-2 rounded w-full font-normal">
    <span class="mr-1">
      <slot name="que-no"></slot>
    </span>
    <span class="mr-1"><slot name="que-seprator"></slot></span>
    <span><slot name="que-text"></slot></span>
  </div>
</template>
<script>
export default {
  name: "QuizQue",
};
</script>