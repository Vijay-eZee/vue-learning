<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="
        relative
        bg-gray-200
        border-2 border-gray-400
        h-2/3
        max-w-2xl
        rounded-2xl
        w-full
        p-4
      "
    >
      {{ localTime }}
      <QuizBoxHeader />
      <div v-if="!isQuizCompleted">
        <QuizQue>
          <template v-slot:que-no>{{ currentQuestionNo + 1 }}</template>
          <template v-slot:que-seprator>:</template>
          <template v-slot:que-text>{{ getQuestion.que }}</template>
        </QuizQue>
        <QuizOpt v-for="(opt, index) in getQuestion.opts" :key="index">
          <template v-slot:pre-icon
            ><input
              type="radio"
              :id="index"
              :value="opt.optId"
              v-model="selectedAns"
          /></template>
          <template v-slot:content>{{ opt.opt }}</template>
        </QuizOpt>
        <div class="absolute bottom-8">
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
import { ref, computed, provide, watch, onMounted } from "vue";
import QuizQue from "./QuizQue.vue";
import QuizOpt from "../quiz/QuizOpt.vue";
import QuizBoxFooter from "../quiz/QuizBoxFooter.vue";
import quizData from "../../constant/quiz";
import FinishFooter from "../quiz/FinishFooter.vue";
import QuizBoxHeader from "../quiz/QuizBoxHeader.vue";

export default {
  name: "QuizBox",
  components: {
    QuizQue,
    QuizOpt,
    QuizBoxFooter,
    FinishFooter,
    QuizBoxHeader,
  },
  setup() {
    const questions = ref(quizData);
    const currentQuestionNo = ref(0);
    const isQuizCompleted = ref(false);
    const selectedAns = ref("");
    const localTime = ref(5);
    let timerId = null;
    provide("timeLeft", localTime.value);
    const getQuestion = computed(() => {
      if (questions.value[currentQuestionNo.value]) {
        console.log(questions.value[currentQuestionNo.value]);
        return questions.value[currentQuestionNo.value];
      } else {
        return [];
      }
    });
    onMounted(() => {
      startlocalTimer();
    });
    watch(currentQuestionNo, (newQueNo, prevQue) => {
      if (newQueNo === 0 && prevQue > newQueNo) {
        isQuizCompleted.value = true;
      }
    });

    function incrementQuestionNo() {
      currentQuestionNo.value++;
      currentQuestionNo.value =
        currentQuestionNo.value % questions.value.length;
    }

    function startlocalTimer() {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }

      timerId = setTimeout(function tick() {
        decrementTimer();
        timerId = setTimeout(tick, 1000);
      }, 1000);
    }

    function decrementTimer() {
      localTime.value--;
      if (!localTime.value < 0) {
        clearTimeout(timerId);
        timerId = null;
      }
    }
    // function replaceIndexWithAlph(indx) {
    //   switch (indx) {
    //     case 0:
    //       return "A";
    //     case 1:
    //       return "B";
    //     case 2:
    //       return "C";
    //     case 3:
    //       return "D";
    //   }
    // }
    return {
      currentQuestionNo,
      isQuizCompleted,
      selectedAns,
      localTime,
      incrementQuestionNo,
      getQuestion,
    };
  },
};
</script>