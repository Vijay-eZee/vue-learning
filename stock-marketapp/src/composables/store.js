import { reactive, ref } from "vue";
const availableFunds = ref(10000);
const companies = reactive({
  list: [
    {
      cId: 1,
      companyName: "BEL",
      price: 10,
      qty: 0,
      holding: 0,
      isIncluded: false,
    },
    {
      cId: 2,
      companyName: "AWL",
      price: 616,
      qty: 0,
      holding: 0,
      isIncluded: false,
    },
    {
      cId: 3,
      companyName: "Wipro",
      price: 480,
      qty: 0,
      holding: 0,
      isIncluded: false,
    },
    {
      cId: 4,
      companyName: "TATA cofee",
      price: 200,
      qty: 0,
      holding: 0,
      isIncluded: false,
    },
    {
      cId: 5,
      companyName: "Relience",
      price: 1200,
      qty: 0,
      holding: 0,
      isIncluded: false,
    },
    {
      cId: 6,
      companyName: "Infy",
      price: 700,
      qty: 0,
      holding: 0,
      isIncluded: false,
    },
    {
      cId: 7,
      companyName: "TCS",
      price: 2000,
      qty: 0,
      holding: 0,
      isIncluded: false,
    },
    {
      cId: 8,
      companyName: "LG",
      price: 150,
      qty: 0,
      holding: 0,
      isIncluded: false,
    },
  ],
});

export { companies, availableFunds };
