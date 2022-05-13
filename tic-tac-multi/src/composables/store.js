import { reactive } from "vue";

const companies = reactive({
  list: [
    { companyName: "BEL", price: 190, qty: 0, isIncluded: false },
    { companyName: "AWL", price: 616, qty: 0, isIncluded: false },
    { companyName: "Wipro", price: 480, qty: 0, isIncluded: false },
    { companyName: "TATA cofee", price: 200, qty: 0, isIncluded: false },
    { companyName: "Relience", price: 1200, qty: 0, isIncluded: false },
    { companyName: "Infy", price: 700, qty: 0, isIncluded: false },
    { companyName: "TCS", price: 2000, qty: 0, isIncluded: false },
    { companyName: "LG", price: 150, qty: 0, isIncluded: false },
  ],
});

export { companies };
