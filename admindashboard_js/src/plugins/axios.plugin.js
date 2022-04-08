import axios from 'axios'
import apiService from '@/services/api.service'
export default {
    install:()=>{
       const apiClient = axios.create({
            baseURL:'http://localhost:3000',
            withCredentials:false,
            headers:{
                Accept:'applcation/json',
                'Contetn-Type':'application/json'
            }
        })
        apiClient.interceptors.request.use((config)=>{
            console.log('request data.....')
            return config
        })
        apiClient.interceptors.response.use((res)=>{
            console.log('received data ....')
            return res
         })
        apiService.initialize(apiClient)
    
}

}       
