<template>
  <div class="flex border-2 border-gray-300 rounded font-normal mt-2 w-3/4">
    <div class="flex items-center justify-center bg-gray-300 px-2">
      <slot name="pre-icon"></slot>
    </div>
    <div class="p-2 overflow-y-auto h-10"><slot name="content"></slot></div>
  </div>
</template>
<script>
export default {
  name: "QuizOpt",
};
</script>