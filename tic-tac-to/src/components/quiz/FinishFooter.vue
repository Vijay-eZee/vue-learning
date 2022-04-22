<template>
  <div class="flex">
    <QuizButton class="border-0 bg-blue-400 rounded-full py-2 px-4 w-28">
      <template v-slot:btn-name>Continue</template>
    </QuizButton>
    <QuizButton class="border-0 bg-blue-400 rounded-full py-2 px-4 w-28">
      <template v-slot:btn-name>Exit</template>
    </QuizButton>
  </div>
</template>
<script>
import QuizButton from "../quiz/QuizButton.vue";
export default {
  name: "FinishFooter",
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