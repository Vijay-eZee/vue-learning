<template>
    <div class="flex justify-between items-center bg-indigo-900 text-white py-4 px-6">
        <div class="sm:hidden"> <button @click="toggleSideMenu(true)">
               <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </button></div>
           <div class="flex justify-center items-center "> 
            <button>
                <img class="rounded-full h-10 w-10 " src="@/assets/andriod.png"/>
            </button>
          </div>
        <!-- <div class="hidden sm:flex sm:tems-center sm:justify-center">           
             <router-link to="/" class="mr-2">Home</router-link>
            <router-link to="/signup" class="mr-2">SignUp</router-link>
            <router-link to="/login" class="mr-2">Login</router-link>
        </div> -->
    </div>
</template>