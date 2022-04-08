import {ref,computed} from 'vue'
export default function useDataTable(employees){
    const searchKey = ref('')
    const filterTableData =ref('ALL')

    const tableRows = computed(()=>{
        if(employees.length<=0) return []
         return  employees.filter((employee)=>{
           if(filterTableData.value==='ALL'){
             return employee
           }
         return employee.country === filterTableData.value
         }).filter((rowOfEmployee)=>{
          return Object.keys(rowOfEmployee).some((key)=>{
            console.log(key)
             return (String(rowOfEmployee[key])
             .toLowerCase()
             .indexOf(searchKey.value) > -1)
           })
         })
      })

      const tableHeader = computed(()=>{
        return Object.keys(employees[0]).map((header,index)=>{
          return{
            index: index,
           identifier: header,
          }
        })
     })

    return{
        searchKey,
        tableHeader,
        tableRows,
        filterTableData
    }
}