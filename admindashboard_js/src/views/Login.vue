<template>

    <div class="flex flex-1 items-center justify-center">
        <div class="flex flex-col items-center bg-white border border-gray-200 p-6 rounded-lg">
            <h1 class="text-gray-400 font-semibold text-lg mb-2">Login</h1>
            <div class="flex flex-col">
               <Form @submit="authorizeUser" v-slot="{meta}" ref='form'>
                <base-input 
                placeHolder="Your email address" 
                v-model="userLoginInfo.email" 
                inputName="inputEmail"
                label="email" 
                validationRules="required|email" />

                <base-input 
                placeHolder='Enter password' 
                v-model="userLoginInfo.password" 
                inputName="inputPassword"
                label="password"
                validationRules="required|min:6"/>
                <base-button :isDisable="!meta.valid">Submit</base-button>
               </Form>
            </div>
            <div class="mt-2">
                <p class="text-xs text-gray-400">Do you have an account? <router-link to='/signup' class="font-bold">Register here</router-link></p>
            </div>
        </div>
    </div>

</template>
<script>
 import {Form,useIsFormValid} from 'vee-validate'
 import {reactive} from 'vue'
 import userApi from '@/services/api/user.api'
 import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components:{
      Form,
  },
    setup(){
        const userLoginInfo=reactive({
        email:'',
        password:''
        })
        const store = useStore()
         const router = useRouter()
         const isValid = useIsFormValid();
        console.log(isValid)
        function validateUser(users){
            let isUserExist=false
           users.forEach(user => {
               if(userLoginInfo.email === user.email && userLoginInfo.password === user.password){
                   isUserExist=true
               }
           });
           isValid.value=false
           return isUserExist
        }
      async function authorizeUser(){
             const users =await userApi.getUsers()
             if(validateUser(users.data)){
                 store.commit('setAuthFlag',true)
                 router.push('/admin')
             }
       }
        return{
            userLoginInfo,
            authorizeUser
        }
    }
}  

</script>