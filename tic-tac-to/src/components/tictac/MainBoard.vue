<template>
  <div class="bg-blue-200 h-screen flex justify-center items-center">
    {{ clientId }}
    <div class="flex bg-gray-200 p-10 w-96 h-72 justify-center items-center">
      <!-- <input placeholder="type here..." v-model="message" />
      <button @click="sendMessage">send</button> -->
      <div v-if="isPlay" class="flex">
        <Board @set-current-player="setCurrentPlayer" @set-result="setResult" />
        <SideMenu :currentPlayer="currentPlayer"> </SideMenu>
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
      <div v-else-if="isExit || !isPlay" class="flex flex-col">
        <!-- <base-core-button
          class="bg-blue-400 p-2 w-28 hover:bg-green-400 rounded-full"
          @custom-click="handlePlayAction"
        >
          <template v-slot:text> play </template>
        </base-core-button> -->
        <base-core-button
          class="
            bg-blue-400
            p-2
            hover:bg-green-400
            rounded-full
            text-white
            font-bold
          "
          @custom-click="createNewGame"
        >
          <template v-slot:text> Create New Game </template>
        </base-core-button>
        <base-core-button
          class="
            bg-blue-400
            p-2
            hover:bg-green-400
            rounded-full
            text-white
            font-bold
          "
          @custom-click="handlePlayAction"
        >
          <template v-slot:text>Joined By Group Id</template>
        </base-core-button>
      </div>
    </div>
  </div>
</template>
<script>
import BaseCoreButton from "../core/BaseCoreButton.vue";
import Board from "./Board.vue";
import SideMenu from "./SideMenu.vue";
import { io } from "socket.io-client";
//import { nanoid } from "nanoid";

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
      socket: null,
      message: "",
      clientId: "",
      gameId: "",
    };
  },
  mounted() {
    this.socket = io("http://localhost:5000");
    this.socket.on("clientConnect", (payload) => {
      this.clientId = JSON.parse(payload).clientId;
    });
    this.socket.on("create", (payload) => {
      console.log(payload);
      //  this.clientId = JSON.parse(payload).clientId;
    });
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
    createNewGame() {
      const payLoad = {
        clientId: this.clientId,
      };
      this.socket.emit("create", JSON.stringify(payLoad));
    },
    joinGameById() {},
  },
};
</script>