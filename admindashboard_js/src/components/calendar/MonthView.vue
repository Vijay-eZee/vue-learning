<template>
<div class="px-6 py-4 font-bold">{{currentMonthName}} {{currentYear}}</div>
        <div class="flex justify-between">
            <button @click="$emit('previous')">
                <span class="material-icons">chevron_left</span>
            </button>
            <button @click="$emit('next')">
                <span class="material-icons">chevron_right</span>
            </button>
        </div>
    <div class="grid grid-cols-7 border-l-2">
 <div v-for ="(day,idx) in days" :key="idx" class="flex border-t-2 border-r-2" >
     <div class="flex items-center justify-center w-full p2-8">
         {{day}}
     </div>
</div>
</div>
<div class="grid grid-cols-7 border-l-2">
    <div class="flex border-r-2 border-b-2"  v-for ="(day,index) in startDayOfMonth" :key="index">
        <div class="flex items-center justify-center w-full py-8"></div>
    </div>
 <div class="flex border-r-2 border-b-2" v-for="(dayOfMonth,index) in totalDaysOfMonth" :key="index">
     <div class="flex items-center justify-center w-full py-8">
       {{dayOfMonth}}
     </div>
    </div>
    <div class="flex border-r-2 border-b-2"  v-for ="(day,index) in 7-lastDayOfMonth-1" :key="index">
        <div class="flex items-center justify-center w-full py-8"></div>
    </div>
</div>
</template>
<script>
import  {computed, ref} from 'vue'
export default {
     props:{
        currentYear:{
            type:String,
        },
         currentMonth:{
            type:Number,
        },
        currentMonthName:{
            type:String,
        }
    },
    setup(props){
    const days=ref(['Sun','Mon','Tue','Wed','Thu','Fri','Sat'])
    const startDayOfMonth = computed(()=>{
        return new Date(props.currentYear,props.currentMonth).getDay() 
   }) 
    const totalDaysOfMonth= computed(()=>{
      return new Date(props.currentYear,props.currentMonth+1,0).getDate()
    }) 
    const lastDayOfMonth = computed(()=>{
        return new Date(props.currentYear,props.currentMonth+1,0).getDay() 
    })
       
     return{
           days,
            totalDaysOfMonth,
            startDayOfMonth,
            lastDayOfMonth,
     }
    }
    
}
</script>