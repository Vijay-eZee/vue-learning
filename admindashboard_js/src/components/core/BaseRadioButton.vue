<template>
    <input 
    type="radio" 
    :id="rbtnId" 
    :value="inputValue"
    :name="inputName"
     @input="$emit('update:modelValue', $event.target.value)" 
    /> <slot/>
</template>
<script>
import {watchEffect} from 'vue'
import {useField} from 'vee-validate'
export default {
    props:{
        rbtnId:{
            type:String,
            require:true,
            default:''
        },
        inputValue:{
            type:String,
            require:true,
            default:''
        },
        inputName:{
            type:String,
            require:true,
            default:''
        },
        modelValue:{
            type:String,
            require:true,
            default:''
        },
    },
    emits:['update:modelValue'],
    etup(props){
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