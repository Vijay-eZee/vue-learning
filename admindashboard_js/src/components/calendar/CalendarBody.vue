<template>
<MonthView
v-if="currentView==='Month'"
:currentYear="currentYear"
:currentMonth="currentMonth"
:currentMonthName="currentMonthName"
 @previous="getPreviousMonth()"
 @next="getNextMonth()"
/>
<WeekView
v-if="currentView==='Week'"
:currentYear="currentYear"
:currentMonth="currentMonth"
/>
</template>
<script>
import MonthView from '@/components/calendar/MonthView.vue'
import WeekView from '@/components/calendar/WeekView.vue'
import  {ref,computed} from 'vue'
export default {
    props:{
        currentView:{
         type:String,
        }
    },
    components:{MonthView,WeekView},
    setup(){
    const currentMonth=ref(new Date().getMonth())
    const currentYear=ref(new Date().getFullYear())
     const currentMonthName=computed(()=>{
     return new Date(currentYear.value,currentMonth.value).toLocaleString("default",{month:'long'})
    })
    function getPreviousMonth(){
       if(currentMonth.value===0){
           currentMonth.value=11
           currentYear.value--
       }else{
        currentMonth.value--
       }
   }
    function getNextMonth(){
        if(currentMonth.value===11){
           currentMonth.value=0
           currentYear.value++
       }else{
        currentMonth.value++
       }
   }
        return{
        currentMonth,
        currentYear,
        currentMonthName,
        getPreviousMonth,
        getNextMonth,
        }
    }
}
</script>