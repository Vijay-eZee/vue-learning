<template>
    <div class="flex flex-1 items-center justify-center">
        <div class="flex flex-col items-center bg-white border border-gray-200 p-6 rounded-lg">
            <h1 class="text-gray-400 font-semibold text-lg mb-2">Signup</h1>
            <div class="flex flex-col">
                <Form @submit="submitUserData" v-slot="{meta}" test="frmtest">
                <base-input placeHolder='First name'
                 v-model="userData.fName"
                 inputName="inputFName"
                 label="first name"
                 validationRules="required"
                 />
                <div>
                 <base-radio-button
                 rbtnId="rbtnMale"
                 inputName="rbtnGender"
                 v-model="userData.gender"
                 inputValue="Male"
                 >Male</base-radio-button>

                <base-radio-button
                 rbtnId="rbtnFemale"
                 inputName="rbtnGender"
                 v-model="userData.gender"
                 inputValue="Female"
                 >Female</base-radio-button>
                </div>
                <base-input placeHolder='Email'
                v-model="userData.email"
                inputName="inputEmail"
                label="email"
                validationRules="required|email"/>

                <base-input placeHolder='Password'
                 v-model="userData.password"
                 inputName="inputPassword"
                 label="password"
                 validationRules="required|min:6"/>
                 
                 <base-input placeHolder='confirm password'
                 v-model="userData.cnfPassword"
                 inputName="inputCnfPassword"
                 label="confirm password"
                 validationRules="required|min:6|confirmed:password"/>
                <base-button :isDisable="!meta.valid">Submit</base-button> 
                </Form>
            </div>
        </div>
    </div>
</template>
<script>
import {reactive} from 'vue'
import userApi from '@/services/api/user.api'
import {Form} from 'vee-validate'
import { useRouter } from 'vue-router'

export default {
    components:{
        Form
    },
    setup(_,context){
        const userData = reactive({
        fName:'',
        gender:'',
        email:'',
        password:'',
        cnfPassword:'',
        });
     console.log(context)
     const router = useRouter()
      async function submitUserData(){
        const res =   await userApi.registerUser(userData)
        if(res.status===201 && res.statusText==='Created')
         router.push({name:'login'})
       }
        return{
         userData,
          submitUserData
        }
    }
}
</script>