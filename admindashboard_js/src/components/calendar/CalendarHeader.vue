<template>
    <div class="flex justify-between">
    <div class="flex items-center justify-between">
    </div>
    <div class="px-6 py-4">
        <base-drop-down v-model:selected="calanderView" :items="options" label="Calendar view"/>
    </div>
</div>
</template>
<script>
import {ref} from 'vue'
export default {
    props:{
        currentMonthName:{
            type:String,
            required:true,
            default:''
        },
          currentYear:{
            type:String,
            required:true,
            default:''
        },
        options:{
         type:Array
        },
    },
    setup(){
        const calanderView=ref("Month")
        return{
            calanderView
        }
    }
}
</script>