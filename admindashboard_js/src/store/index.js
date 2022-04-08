import {createStore} from 'vuex'
const store = createStore({
    state(){
        return{
          isLogin:false
        }
    },
    mutations:{
      setAuthFlag(state,val){
      state.isLogin = val
      }
    }
})
export default store