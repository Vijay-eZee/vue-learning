/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <div class="flex flex-wrap px-4 items-center">
    <div v-for="(company, index) in companies.list" :key="index">
      <info-box v-if="company.isIncluded">
        <template v-slot:header>
          <info-header class="bg-green-300 text-gray-600">
            <template v-slot:title>{{ company.companyName }}</template>
            <template v-slot:price
              ><span class="text-xs">price:{{ company.price }}</span></template
            >
            <template v-slot:qty
              ><span class="text-xs">
                | Quantity:{{ company.qty }}</span
              ></template
            >
          </info-header>
        </template>
        <template v-slot:body>
          <input-comp class="" /><button-comp class="absolute right-2" />
        </template>
      </info-box>
    </div>
  </div>
</template>
<script setup>
import { companies } from "../composables/store";
</script>
