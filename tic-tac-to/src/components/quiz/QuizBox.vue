<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="
        relative
        bg-gray-200
        border-2 border-gray-400
        h-2/4
        max-w-2xl
        rounded-2xl
        w-full
        p-4
      "
    >
      <QuizQue>
        <template v-slot:que-no>1</template>
        <template v-slot:que-seprator>:</template>
        <template v-slot:que-text
          >What are the advantages of using Vue.js?</template
        >
      </QuizQue>
      <QuizOpt>
        <template v-slot:pre-icon>2</template>
        <template v-slot:content
          >Small in size — The size is 18 to 21KB. It requires no time for
          theuser to download and apply it.</template
        >
      </QuizOpt>
      <QuizOpt>
        <template v-slot:pre-icon>3</template>
        <template v-slot:content>Small in size — </template>
      </QuizOpt>
      <QuizOpt>
        <template v-slot:pre-icon>4</template>
        <template v-slot:content
          >Small in size — The size is 18 to 21KB.</template
        >
      </QuizOpt>
      <QuizOpt>
        <template v-slot:pre-icon>1</template>
        <template v-slot:content
          >The size is 18 to 21KB. It requires no time for theuser to download
          and apply it.</template
        >
      </QuizOpt>
      <div class="absolute bottom-2">
        <QuizBoxFooter />
      </div>
    </div>
  </div>
</template>
<script>
import QuizQue from "./QuizQue.vue";
import QuizOpt from "../quiz/QuizOpt.vue";
import QuizBoxFooter from "../quiz/QuizBoxFooter.vue";
export default {
  name: "QuizBox",
  components: {
    QuizQue,
    QuizOpt,
    QuizBoxFooter,
  },
};
</script>