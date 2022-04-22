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
      <div v-if="!isQuizCompleted">
        <QuizQue>
          <template v-slot:que-no>{{ currentQuestionNo + 1 }}</template>
          <template v-slot:que-seprator>:</template>
          <template v-slot:que-text>{{ getQuestion.que }}</template>
        </QuizQue>
        <QuizOpt v-for="(opt, index) in getQuestion.opts" :key="index">
          <template v-slot:pre-icon>{{ replaceIndexWithAlph(index) }}</template>
          <template v-slot:content>{{ opt.opt }}</template>
        </QuizOpt>
        <div class="absolute bottom-2">
          <QuizBoxFooter :fetchNextQue="incrementQuestionNo" />
        </div>
      </div>
      <div v-else class="flex justify-center items-center h-full">
        <FinishFooter />
      </div>
    </div>
  </div>
</template>
<script>
import QuizQue from "./QuizQue.vue";
import QuizOpt from "../quiz/QuizOpt.vue";
import QuizBoxFooter from "../quiz/QuizBoxFooter.vue";
import quizData from "../../constant/quiz";
import FinishFooter from "../quiz/FinishFooter.vue";
export default {
  name: "QuizBox",
  components: {
    QuizQue,
    QuizOpt,
    QuizBoxFooter,
    FinishFooter,
  },
  data() {
    return {
      questions: quizData,
      currentQuestionNo: 0,
      isQuizCompleted: false,
    };
  },

  computed: {
    getQuestion() {
      console.log(this.questions[this.currentQuestionNo]);
      if (this.questions[this.currentQuestionNo]) {
        return this.questions[this.currentQuestionNo];
      } else {
        return [];
      }
    },
  },
  watch: {
    currentQuestionNo(newQueNo, prevQue) {
      if (newQueNo === 0 && prevQue > newQueNo) {
        this.isQuizCompleted = true;
      }
    },
  },
  methods: {
    incrementQuestionNo() {
      this.currentQuestionNo++;
      this.currentQuestionNo = this.currentQuestionNo % this.questions.length;
    },
    replaceIndexWithAlph(indx) {
      switch (indx) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
      }
    },
  },
};
</script>