<template>
<div class="flex items-center justify-center p-2">
    <button class="bg-blue-400 p-2 w-full rounded-lg text-white" :class="{'disabled:opacity-50':isDisable}" :disabled="isDisable">
        <slot/>
    </button>
</div>
</template>
<script>
export default {
    props:{
        isDisable:{
            type:Boolean,
            required:true,
            default:false
        },
       
    },
}
</script>