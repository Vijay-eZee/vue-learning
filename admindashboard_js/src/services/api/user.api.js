import apiServices from '@/services/api.service'
export default{
     getUsers(){
      return apiServices.get('/users')
    },
    registerUser(data){
        return apiServices.post('/users',data)
    }
}