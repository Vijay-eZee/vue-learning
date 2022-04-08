<template>
<div class="flex flex-col p-2">
    <input :placeholder="placeHolder"
    :name="inputName"
    :value="inputValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="p-2 border border-gray-300 rounded-lg overflow-hidden focus:outline-none"/>
    <p class="text-red-600 text-sm">{{errorMessage}}</p>
</div>
</template>
<script>
import {useField} from 'vee-validate'
import {watchEffect} from 'vue'
export default {
    props:{
        placeHolder:{
            type:String,
            required:true,
            default:'enter input'
        },
         modelValue:{
             type:String,
             required:true,
             default:''
         } ,
         inputName:{
             type:String,
             required:false,
             default:''
         },
         validationRules:{
             type:String,
             required:false,
             default:''
         },
         label:{
             type:String,
             required:false,
             default:''
         }
    },
    
    emits:['update:modelValue'],
    
    setup(props){
        let { errorMessage,value: inputValue } = useField(props.label,props.validationRules);
       watchEffect(() => {
      inputValue.value = props.modelValue
    })
        return{
            inputValue,
            errorMessage
        }
    }
}
</script>