<template>
  <div class="flex flex-wrap px-4 items-center">
    <div v-for="(company, index) in companies.list" :key="index">
      <info-box v-if="company.holding">
        <template v-slot:header>
          <info-header class="bg-green-300 text-gray-600">
            <template v-slot:title>{{ company.companyName }}</template>
            <template v-slot:price
              ><span class="text-xs">price:{{ company.price }}</span></template
            >
            <template v-slot:qty
              ><span class="text-xs">
                | Quantity:{{ company.holding }}</span
              ></template
            >
          </info-header>
        </template>
        <template v-slot:body>
          <input-comp v-model="company.qty" /><button-comp
            class="absolute right-2"
            :class="{
              'bg-green-500': company.qty > 0 && company.qty <= company.holding,
              'bg-green-300': company.qty <= 0 || company.qty > company.holding,
            }"
            :disabled="!(company.qty > 0 && company.qty <= company.holding)"
            @click="handleSellAction(company.cId)"
            >Sell</button-comp
          >
        </template>
      </info-box>
    </div>
  </div>
</template>
<script setup>
import { companies, availableFunds } from "../composables/store";
function handleSellAction(cId) {
  companies.list.forEach((company) => {
    if (company.cId === cId) {
      const availFunds = availableFunds.value + company.price * company.qty;
      //if (availFunds <= availableFunds) {
      availableFunds.value = availFunds;
      company.holding = company.holding - company.qty;
      //}

      company.qty = 0;
    }
  });
}
</script>
