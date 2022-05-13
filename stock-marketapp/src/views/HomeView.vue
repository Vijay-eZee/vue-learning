<template>
  <div class="flex justify-center mt-8">
    <div class="max-w-sm">
      <div class="w-full">
        <input
          placeholder="search.."
          class="p-2 focus:outline-none border-b-2"
        />
      </div>
      <div class="max-h-44 w-full overflow-y-auto">
        <div
          v-for="(company, index) in companies.list"
          :key="index"
          class="flex hover:bg-gray-100 cursor-pointer border-b-2 border-gray-100"
        >
          <div class="flex justify-center p-1">
            <span>
              <input
                type="checkbox"
                id="checkbox"
                v-model="company.isIncluded"
                class="mr-2"
              />
              <label for="checkbox" class="font-light text-gray-400">{{
                company.companyName
              }}</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { companies } from "../composables/store";
</script>
