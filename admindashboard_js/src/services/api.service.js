let apiClient=null
export default {
    initialize (app) {
        apiClient=app
      },    
    get(url){
        return apiClient.get(url)
    },
    post(url,data){
        return apiClient.post(url,data)
    }
}