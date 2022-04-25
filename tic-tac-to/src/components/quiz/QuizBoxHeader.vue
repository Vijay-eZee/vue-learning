<template>
  <div class="flex relative items-center justify-center w-full p-2">
    <div class="absolute right-1"><LocalTimer /></div>
  </div>
</template>
<script>
import LocalTimer from "../quiz/LocalTimer.vue";
export default {
  name: "QuizBoxHeader",
  components: {
    LocalTimer,
  },
};
</script>