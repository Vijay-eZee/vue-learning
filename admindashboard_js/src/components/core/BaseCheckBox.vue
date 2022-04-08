<template>
    <input 
    type="checkbox" 
    :id="rbtnId" 
    :value="inputValue"
    :name="inputName"
     @input="$emit('update:modelValue', $event.target.value)" 
    /> <slot/>
</template>
<script>
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
        }

    }
    
}
</script>