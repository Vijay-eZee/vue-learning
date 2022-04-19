<template>
  <div class="bg-blue-200 h-screen flex justify-center items-center">
    <div class="flex bg-gray-200 p-10 w-96 h-72 justify-center items-center">
      <div v-if="isPlay" class="flex">
        <Board @set-current-player="setCurrentPlayer" @set-result="setResult" />
        <SideMenu :currentPlayer="currentPlayer"> </SideMenu>
      </div>
      <div v-else-if="!isPlay && isExit" class="flex">
        <base-core-button
          class="bg-blue-400 p-2 w-28 hover:bg-green-400 rounded-full"
          @custom-click="handlePlayAction"
        >
          <template v-slot:text> play </template>
        </base-core-button>
      </div>
      <div v-else-if="isGameOver" class="flex flex-col">
        <p v-if="result !== -1" class="mt-2 text-green-400 break-all">
          player {{ result }} won the game !!!
        </p>
        <p v-else class="mt-2 text-red-700 break-all">Game over !!!</p>
        <div class="flex mt-4">
          <base-core-button
            class="bg-blue-200 p-2 w-28 hover:bg-green-400 rounded-full mr-2"
            @custom-click="handleContinueAction"
          >
            <template v-slot:text> Continue </template>
          </base-core-button>
          <base-core-button
            class="bg-blue-200 p-2 w-28 hover:bg-green-400 rounded-full"
            @custom-click="handleExitAction"
          >
            <template v-slot:text> Exit </template>
          </base-core-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseCoreButton from "../core/BaseCoreButton.vue";
import Board from "./Board.vue";
import SideMenu from "./SideMenu.vue";
export default {
  name: "MainBoard",
  components: {
    Board,
    SideMenu,
    BaseCoreButton,
  },
  data() {
    return {
      currentPlayer: 1,
      result: "",
      isPlay: 0,
      isGameOver: 0,
      isExit: 0,
    };
  },
  methods: {
    setCurrentPlayer(payload) {
      this.currentPlayer = payload.currentPlayer;
    },
    setResult(payload) {
      this.isPlay = 0;
      this.isExit = 0;
      this.isGameOver = 1;
      this.result = payload.result;
    },
    handlePlayAction() {
      this.isPlay = 1;
      this.isExit = 0;
      this.isGameOver = 0;
    },
    handleContinueAction() {
      this.isPlay = 1;
      this.isExit = 0;
      this.isGameOver = 0;
    },
    handleExitAction() {
      this.isPlay = 0;
      this.isExit = 1;
      this.isGameOver = 0;
    },
  },
};
</script>