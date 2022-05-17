<script setup>
import { onMounted, ref } from "vue";
import PlayBoard from "../tictac/PlayBoard.vue";
import { io } from "socket.io-client";

const matrix = ref([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);
const baseURL = "http://localhost:5001";
let clientId = null;
let gameId = ref(null);
let socket = null;

onMounted(() => {
  socket = io(baseURL);
  socket.on("connected", handleSocketConnected);
  socket.on("created", handleGameInstance);
});
function handleGameInstance(payload) {
  gameId = payload.gameId;
  console.log("gameid-->" + gameId.value);
}
function handleSocketConnected(payload) {
  clientId = payload.clientId;
  console.log("clientid-->" + clientId);
}
function createNewGame() {
  socket.emit("create", { clientId: clientId });
}
function joinById() {
  const request = {
    clientId: clientId,
    gameId: gameId.value,
  };

  console.log(request);
  socket.emit("join", request);
}
</script>
<template>
  <div class="bg-blue-200 h-screen flex justify-center items-center">
    <div class="flex bg-gray-200 p-10 w-96 h-72 justify-center items-center">
      <div v-if="true" class="flex-col justify-center items-center">
        <div>
          <span>{{ gameId }}</span>
        </div>
        <button-comp @click="createNewGame">create game</button-comp>
        <p>OR</p>
        <input-comp v-model="gameId" /><button-comp @click="joinById"
          >Join by id</button-comp
        >
      </div>
      <div v-else class="flex">
        <PlayBoard :matrix="matrix" />
      </div>
    </div>
  </div>
</template>
