<template>
<div class="bg-gray-100 p-4">
    <CalendarHeader
     :options="options"
    />
    <CalendarBody
    currentView="Week"
    />
</div>
</template>
<script>
import  {ref} from 'vue'
import CalendarHeader from '@/components/calendar/CalendarHeader.vue'
import CalendarBody from '@/components/calendar/CalendarBody.vue'
export default {
  components:{CalendarHeader,CalendarBody},
setup(){
    const options=ref(['Month','Week'])
    return {
        options,
    }
}    
}
</script>