<template>
  <div class="flex flex-col">
    <div v-for="(row, index) in matrix" :key="index" class="flex">
      <div
        class="border-black border-solid"
        v-for="(col, idx) in row"
        :key="idx"
        :class="{
          'border-r-2': (idx + 1) % 3 === 0,
          'border-b-2': (index + 1) % 3 === 0,
        }"
      >
        <Square
          :matrix="matrix"
          :rowIndex="index"
          :colIndex="idx"
          :preventCurrent="preventCurrent"
          @checked-box-clicked="handleCheckBoxClicked"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Square from "./Square.vue";
import { io } from "socket.io-client";
export default {
  name: "Board",
  components: {
    Square,
  },
  mounted() {
    this.socket = io("http://localhost:5000");
    this.socket.on("update-state", (payload) => {
      this.matrix = payload.matrix;
      this.player1 = payload.nextTurn.player1;
      this.player2 = payload.nextTurn.player2;
      this.$emit("set-current-player", {
        currentPlayer: payload.player.currentPlayer,
      });
      //console.log(this.matrix);
    });
    this.socket.on("update-result", (payload) => {
      this.$emit("set-result", payload);
    });
  },
  data() {
    return {
      socket: null,
      preventCurrent: false,
      player1: true,
      player2: false,
      matrix: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    };
  },
  methods: {
    handleCheckBoxClicked(matrixIndex) {
      if (this.player1) {
        this.matrix[matrixIndex.rowIndex][matrixIndex.colIndex] = 1;
        this.player1 = false;
        this.player2 = true;
        this.checkWinningCondition(1);
        //  this.$emit("set-current-player", { currentPlayer: 2 });
        this.socket.emit("user_played", {
          matrix: this.matrix,
          nextTurn: { player1: this.player1, player2: this.player2 },
          player: { currentPlayer: 2 },
        });

        return;
      }
      if (this.player2) {
        this.matrix[matrixIndex.rowIndex][matrixIndex.colIndex] = 2;
        this.player1 = true;
        this.player2 = false;
        this.checkWinningCondition(2);
        // this.$emit("set-current-player", { currentPlayer: 1 });
        this.socket.emit("user_played", {
          matrix: this.matrix,
          nextTurn: { player1: this.player1, player2: this.player2 },
          player: { currentPlayer: 1 },
        });
        return;
      }
    },
    checkWinningCondition(player) {
      let cntNonZeroPos = 0;
      //check winning in row
      for (let i = 0; i < 3; i++) {
        if (
          this.matrix[i][0] === player &&
          this.matrix[i][1] === player &&
          this.matrix[i][2] === player
        ) {
          this.socket.emit("declare-winner", { result: player });
          // this.$emit("set-result", { result: player });
          break;
        }
      }
      //check winning in column
      for (let j = 0; j < 3; j++) {
        if (
          this.matrix[0][j] === player &&
          this.matrix[1][j] === player &&
          this.matrix[2][j] === player
        ) {
          this.socket.emit("declare-winner", { result: player });
          //  this.$emit("set-result", { result: player });
          break;
        }
      }

      for (let i = 0; i < 1; i++) {
        if (
          this.matrix[i][i] === player &&
          this.matrix[i + 1][i + 1] === player &&
          this.matrix[i + 2][i + 2] === player
        ) {
          this.socket.emit("declare-winner", { result: player });
          //  this.$emit("set-result", { result: player });
          break;
        }
      }
      for (let i = 2; i > 1; i--) {
        if (
          this.matrix[i][0] === player &&
          this.matrix[i - 1][1] === player &&
          this.matrix[i - 2][2] === player
        ) {
          this.socket.emit("declare-winner", { result: player });
          //this.$emit("set-result", { result: player });
          break;
        }
      }
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this.matrix[i][j] !== 0) {
            cntNonZeroPos++;
          }
        }
      }
      console.log(cntNonZeroPos);
      if (cntNonZeroPos === 9) {
        this.socket.emit("declare-winner", { result: -1 });
        //  this.$emit("set-result", { result: -1 });
      }
    },
  },
};
</script>