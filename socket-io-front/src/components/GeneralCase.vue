<template>
  <div class="outer border-2 rounded-md border-gray-400">
  <input v-model="namespace"  v-placeholder="{placeholder:'enter namespace ',color:'red',fontStyle: 'oblique'}" class="outline-none focus:border-blue-300 border-2 focus:ring-blue-300 focus:ring-1"/>
   <button-component class="p-2" @click="createNewConne">
     <template v-slot:btnName>connect</template>
   </button-component>
 
</div>
</template>
<script>

export default {  
    name:'GeneralCase',
    inject: ['eventListener','sendEvent'],
    data(){
      return{
        socket:null,
        namespace:''
      }  
    },
    mounted(){
     console.log(this)      
    },
methods:{
  createNewConne(){
    this.eventListener({
        namespace:this.namespace,
        type: 'message',
        callback:(message)=>{
          console.log(message)
        }
      })
  }
}
}
</script>
