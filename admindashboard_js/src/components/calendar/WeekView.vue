<template>
<div class="px-6 py-4 font-bold">{{currentYear}}</div>
        <div class="flex justify-between">
            <button @click="getPreviousWeek">
                <span class="material-icons">chevron_left</span>
            </button>
            <button @click="getNextWeek">
                <span class="material-icons">chevron_right</span>
            </button>
        </div>
    <div class="grid grid-cols-8 border-l-2">
        <div class="flex border-t-2 border-r-2" >
            <div class="flex items-center justify-center w-full p2-8">
            </div>
        </div>
        <div v-for ="(day,idx) in days" :key="idx" class="flex border-t-2 border-r-2" >
            <div class="flex items-center justify-center w-full p2-8">
                {{day}}
            </div>
        </div>
    </div>
    <div class="grid grid-cols-8 border-l-2">
        <div class="flex border-r-2 border-b-2">
        <div class="flex items-center justify-center w-full py-8">
        </div>
    </div>
    <div class="flex border-r-2 border-b-2" v-for="(dayOfWeek,index) in weekDayDate" :key="index">
        <div class="flex items-center justify-center w-full py-8">
        {{dayOfWeek[currentWeek]?dayOfWeek[currentWeek]:''}}
        </div>
    </div>
    </div>
<div class="grid grid-cols-8 border-l-2">
    <div class="border-l-2">
        <div v-for="i in 7" :key=i class="border-b-2">test</div>
    </div>
    <div class="border-l-2"><div v-for="i in 7" :key=i class="border-b-2">test</div></div>
    <div class="border-l-2"><div v-for="i in 7" :key=i class="border-b-2">test</div></div>
    <div class="border-l-2"><div v-for="i in 7" :key=i class="border-b-2">test</div></div>
    <div class="border-l-2"><div v-for="i in 7" :key=i class="border-b-2">test</div></div>
    <div class="border-l-2"> <div v-for="i in 7" :key=i class="border-b-2">test</div></div>
    <div class="border-l-2"><div v-for="i in 7" :key=i class="border-b-2">test</div></div>
    <div class="border-l-2 border-r-2"><div v-for="i in 7" :key=i class="border-b-2">test</div></div>
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
    },
    setup(props){
    const days=ref(['Sun','Mon','Tue','Wed','Thu','Fri','Sat'])
    const weekDayDate={
        "Sun":[],
        "Mon":[],
        "Tue":[],
        "Wed":[],
        "Thu":[],
        "Fri":[],
        "Sat":[]
    }
    let currentWeek=ref(getWeekOfMonth())
    const startDayOfMonth = computed(()=>{
        return new Date(props.currentYear,props.currentMonth).getDay() 
   }) 
    const totalDaysOfMonth= computed(()=>{
      return new Date(props.currentYear,props.currentMonth+1,0).getDate()
    }) 
    const lastDayOfMonth = computed(()=>{
        return new Date(props.currentYear,props.currentMonth+1,0).getDay() 
    })
    let cnt=0
     for(let inx=0; inx<startDayOfMonth.value; inx++){
          weekDayDate[days.value[cnt]].push(0)
        cnt++
        }
    for (let index = 1; index <= totalDaysOfMonth.value; index++) {
        if(cnt==7){
            cnt=0
        }
        weekDayDate[days.value[cnt]].push(index)
        cnt++
    }
    console.log(weekDayDate)
    function getPreviousWeek(){
      currentWeek.value--
   }
    function getNextWeek(){
       currentWeek.value++
   } 
   function getWeekOfMonth() {
       const todaysDate= new Date()
    let adjustedDate = todaysDate.getDate()+todaysDate.getDay()
    let prefixes = ['0', '1', '2', '3', '4', '5'];
    return (parseInt(prefixes[0 | adjustedDate / 7]));
}
     return{
           days,
            totalDaysOfMonth,
            startDayOfMonth,
            lastDayOfMonth,
            currentWeek,
            weekDayDate,
            getPreviousWeek,
            getNextWeek
     }
    }
    
}
</script>