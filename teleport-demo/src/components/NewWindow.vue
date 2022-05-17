<template>
    <div class="flex flex-col  items-center justify-center h-screen">
        <button class="bg-red-500  p-2 rounded-md text-white" @click="isOpen=true">clickMe</button>
        <WindowPortal :isOpen="isOpen">
        <Dialog/>
        </WindowPortal>
    </div>
</template>
<script>

import Dialog from './Dialog.vue'
import WindowPortal from './WindowPortal.vue'
export default {
    name:'NewWindow',
    components:{
        Dialog,
        WindowPortal
    },
data(){
    return{
        isOpen:false,
        
    }
}
}
</script>
