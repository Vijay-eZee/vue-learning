<template>
  <div class="outer border-2 rounded-md border-gray-400">
  <h3>Vue Teleport Example</h3>
  <div>
    <Dialog />
  </div>
</div>
<div class="border-2 rounded-md border-gray-400 h-2/5 w-full absolute"><button @click="handleClick">clickME</button></div>
</template>
<script>

import Dialog from './Dialog.vue'
export default {
    name:'GeneralCase',
    components:{
        Dialog
    },

methods:{
    handleClick(){
        alert('test')
       
    }
}
}
</script>
