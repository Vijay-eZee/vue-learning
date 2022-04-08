import {ref,onMounted} from 'vue'
export default function useCountries(employees){
    const countries=ref([])
    onMounted(()=>{
        prepareCountryList()
      })
      function prepareCountryList(){
        employees.forEach(employee => {
            if(countries.value.indexOf(employee.country)===-1){
               countries.value.push(employee.country)
            }
        });
      }
    return{
        countries
    }
}