<template>
 <div class="flex h-screen bg-gray-200">
     <SideMenu />
     <div class="flex-1 flex flex-col">
       <Header/>
       <Content/>
     </div>
</div>
</template>
<script>
import SideMenu from '@/components/TheSideMenu.vue'
import Header from '@/components/TheHeader.vue'
import Content from '@/components/Content.vue'
export default {
  name: 'App',
  components: {
    SideMenu,
     Header,
     Content
  },
   data(){
        return{
            
        }
    }

}
</script>