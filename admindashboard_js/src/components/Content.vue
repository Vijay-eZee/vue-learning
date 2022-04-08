<template>
    <main class="flex-1 bg-gray-200 overflow-x-hidden overscroll-y-auto">
          <div class="px-8 py-6">
              <div>
                  <h1 class="text-2xl text-gray-700 font-semibold">Dashboard</h1>
                  <div class="bg-white p-4 rounded-lg">
                        <div class="flex justify-between">
                        <BaseInputSearch v-model:searchText="searchKey"/>
                        <BaseDropDown v-model:selected="filterTableData" :items="countries" />
                  </div>
                  </div>
                  <div class="flex flex-col mt-8 -mx-8 px-8" >
                    <BaseTable :tblRows="tableRows" :tblHeader="tableHeader" />
                  </div>
              </div>
          </div>
      </main>
</template>
<script>
import {} from 'vue'
import data from '@/data/data.json'
import useCountries from '@/composable/useCountries.js'
import useDataTable from '@/composable/useDataTable.js'
export default{
    setup() {
        const employees=JSON.parse(JSON.stringify(data.empData))
         const {countries} = useCountries(employees)
         const{searchKey,tableHeader,tableRows,filterTableData} = useDataTable(employees)
         return{
           countries,
           searchKey,
           tableRows,
           tableHeader,
           filterTableData
         }
    },
}
</script>