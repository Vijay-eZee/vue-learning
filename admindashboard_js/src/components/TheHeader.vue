<template>
     <div class="bg-white border-b-4 border-blue-700 flex justify-between items-center px-6 py-4">
          <div class="flex items-center">
              <button @click="toggleSideMenu(true)" class="lg:hidden">
               <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </button>
          <BaseInputSearch/>
          </div>
          <div class="flex items-center">
           <button class="flex items-center mx-4 text-gray-600"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
           <div class="h-10 w-10 text-gray-200 font-semibold bg-blue-600 flex items-center justify-center rounded-full">VR</div>
          </div>
      </div>
</template>
<script>
import {isSideMenuOpen,toggleSideMenu} from '@/composable/useSideBar.js'
export default{
    setup(){
        // const {isSideMenuOpen} = useSideBar()
        return{
            isSideMenuOpen,
            toggleSideMenu
        }
    }
}

</script>