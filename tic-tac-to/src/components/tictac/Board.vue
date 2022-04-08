<template>
<div class="flex flex-col">
  <div
    v-for="(row,index) in matrix"
    :key="index"
    class="flex"
    
   
  ><div class="border-black border-solid" v-for="(col,idx) in row" :key="idx" :class="{'border-r-2' : (idx+1) % 3 === 0,'border-b-2' : (index+1) % 3 === 0}" >
      <Square :matrix="matrix" :rowIndex="index" :colIndex="idx" @checked-box-clicked="handleCheckBoxClicked"/>
  </div>
    
  </div>
  </div>
</template>
<script>
import Square from './Square.vue'
export default {
  name: "Board",
  components: {
    Square,
  },
  data(){
    return{
      player1:true,
      player2:false,
      matrix:[
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ]
    }
  },
  methods:{
    handleCheckBoxClicked(matrixIndex){
      if(this.player1){
        this.matrix[matrixIndex.rowIndex][matrixIndex.colIndex]=1
        this.player1=false
        this.player2=true
        return
      }
      if(this.player2){
        this.matrix[matrixIndex.rowIndex][matrixIndex.colIndex]=2
        this.player1=true
        this.player2=false
        return
      }
     this.checkWinningCondition()
    },
    checkWinningCondition(){

    }
  }
};
</script>