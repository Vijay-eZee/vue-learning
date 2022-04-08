<template>
      <div class="overflow-hidden bg-white min-w-full align-middle border-gray-200 rounded-lg">
                      <table class="w-full ">
                          <thead>
                              <tr>
                              <th @click="sortBy(header.identifier)" v-for="(header,index) in tblHeader" :key="index" :header="header" class="bg-gray-100 border-gray-200 px-6 py-3 border-b text-left uppercase font-medium text-gray-500 text-xs" >
                               <td class="cursor-pointer">{{header.identifier}}
                                   <span :class="{'text-blue-500': sortOrders[header.identifier]>0}" style="font-size:15px" class="material-icons-outlined text-gray-400 ">arrow_upward</span>
                                   <span :class="{'text-blue-500': sortOrders[header.identifier]<0}"  style="font-size:15px" class="material-icons-outlined text-gray-400">arrow_downward</span>
                                   </td>
                              </th>
                              </tr>
                          </thead>
                          <tr v-for ="(row,index) in filterRowData" :key="index">
                              <!-- <td class="px-6 py-3 border-b border-gray-200">
                                      <img class="rounded-full w-10 h-10" :src="emp['avatar']"/>
                              </td> -->
                              <td v-for="(cell,index) in row" :key="index" class="px-6 py-3 border-b border-gray-200">
                                  {{cell}}
                              </td>  
                          </tr>
                      </table>
                      <div class="flex flex-col p-5 justify-center items-center">
                          <span>Showing 1 to 4 of 50 Entries</span>
                          <div class="inline-flex mt-2 bg-gray-300 rounded-lg">
                              <button class="px-4 py-2 text-sm font-semibold hover:bg-gray-500 rounded">Prev</button>
                              <button class="px-4 py-2 text-sm font-semibold hover:bg-gray-500 rounded">Next</button>
                          </div>
                      </div>
                  </div>
</template>
<script>
import { computed, onMounted, reactive,ref } from 'vue'
export default {
    props:{
        tblHeader:Array,
        tblRows:Array,
    },
    setup(props){
         const sortOrders = reactive({})
         const sortKey = ref('')
         onMounted(()=>{
            initializeColumnSortingOrder()
         })
        const filterRowData=  computed(()=>{
            if(sortKey.value){
                 const temp = props.tblRows
                temp.sort(GetSortOrder(sortKey.value))
            return temp
            }
             return props.tblRows
         })
         function GetSortOrder(prop) {    
            return function(a, b) {    
                if (a[prop] > b[prop]) {    
                    return 1 * sortOrders[prop];    
                } else if (a[prop] < b[prop]) {    
                    return -1 * sortOrders[prop];    
                }    
                return 0;    
            }    
        }  
         function initializeColumnSortingOrder(){
            props.tblHeader.forEach(key => {
                sortOrders[key.identifier]=1
            }); 
         }
        function sortBy(key){
            sortKey.value = key
            sortOrders[key]=sortOrders[key] * -1
        }
        return{
            sortBy,
            filterRowData,
            sortOrders
        }
    }

}
</script>