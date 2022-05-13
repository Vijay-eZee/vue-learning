/* eslint-disable prettier/prettier */
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex justify-center items-center mt-10">
    <div class="flex-col w-full max-w-4xl">
      <header v-if="false">
        <div
          class="flex justify-between bg-gray-100 py-3 px-2 w-full border-2 font-light text-md text-gray-400"
        >
          <nav>
            <RouterLink to="/home" class="mr-2 hover:text-amber-600"
              >Home</RouterLink
            >
            <RouterLink to="/portfolio" class="mr-2 hover:text-amber-600"
              >Portfolio</RouterLink
            >
            <RouterLink to="/stocks" class="mr-2 hover:text-amber-600"
              >Stocks</RouterLink
            >
          </nav>
          <div><span class="text-md font-semibold">Funds:</span>$9000</div>
        </div>
      </header>
      <RouterView />
    </div>
  </div>
</template>
