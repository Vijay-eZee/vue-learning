<template>
<div class="flex flex-col h-screen bg-gray-200 flex-1">
<nav-bar/>
<div class="flex flex-1"><slot/></div>
</div>


    
</template>
<script>
import  NavBar from '@/components/TheNavBar.vue'
export default {
    components:{
        NavBar
    }
    
}
</script>