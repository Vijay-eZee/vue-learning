<template>
  <div class="outer border-2 rounded-md border-gray-400">
  <h3>Vue Teleport Example</h3>
  <h3>{{$translate('greetings.hello')}}</h3>
  <h3>{{$translate('greetings.good')}}</h3>
   <h3>{{$fact('india')}}</h3>
  <button v-btnText>Test</button>
  <button-component/>
  <input  v-placeholder class="outline-none focus:border-blue-300 border-2 focus:ring-blue-300 focus:ring-1"/>
  <!-- <input  v-placeholder="{placeholder:'enter text 12 ',color:'red',fontStyle: 'oblique'}" class="outline-none focus:border-blue-300 border-2 focus:ring-blue-300 focus:ring-1"/> -->
</div>
</template>
<script>

import { inject } from "vue";


export default {
  
    name:'GeneralCase',
    date(){
    return{
      test:''
    }
  },
mounted(){
  console.log(this)
const logger = inject("logger");
    logger("hello");
},
  methods:{
    
  }
}
</script>
