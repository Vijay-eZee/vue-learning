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
            <!-- <template v-slot:qty
              ><span class="text-xs">
                | Quantity:{{ company.qty }}</span
              ></template
            > -->
          </info-header>
        </template>
        <template v-slot:body>
          <input-comp v-model="company.qty" /><button-comp
            class="absolute right-2"
            :class="{
              'bg-green-500': company.qty > 0,
              'bg-green-300': company.qty <= 0,
            }"
            @click="handleByuAction(company.cId)"
          />
        </template>
      </info-box>
    </div>
  </div>
</template>
<script setup>
import { companies, availableFunds } from "../composables/store";
function handleByuAction(cId) {
  companies.list.forEach((company) => {
    if (company.cId === cId) {
      const remainFund = availableFunds.value - company.price * company.qty;
      if (remainFund > 0) {
        availableFunds.value =
          availableFunds.value - company.price * company.qty;
        company.holding = company.holding + parseInt(company.qty);
      } else {
        alert("Fund is not sufficient");
      }

      company.qty = 0;
    }
  });
  console.log(companies);
}
</script>
