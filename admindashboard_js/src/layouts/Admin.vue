<template>
 <div class="flex h-screen bg-gray-200">
     <side-menu />
     <div class="flex-1 flex flex-col">
       <admin-header/>
           <slot/>
     </div>
</div>
</template>
<script>
import SideMenu from '@/components/TheSideMenu.vue'
import AdminHeader from '@/components/TheHeader.vue'
export default {
  name: 'App',
  components: {
     SideMenu,
     AdminHeader,
  },
   data(){
        return{
            
        }
    }

}
</script>