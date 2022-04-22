<template>
  <div class="flex">
    <QuizButton class="border-0 bg-blue-400 rounded-full py-1 px-4">
      <template v-slot:btn-name>Flip</template>
    </QuizButton>
    <QuizButton
      class="border-0 bg-blue-400 rounded-full py-1 px-4"
      @click="fetchNextQue"
    >
      <template v-slot:btn-name>Next</template>
    </QuizButton>
  </div>
</template>
<script>
import QuizButton from "../quiz/QuizButton.vue";
export default {
  name: "QuizBoxFooter",
  components: {
    QuizButton,
  },
  props: {
    fetchNextQue: {
      type: Function,
    },
  },
};
</script>