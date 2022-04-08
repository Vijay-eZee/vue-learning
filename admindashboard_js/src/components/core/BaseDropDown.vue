/* eslint-disable vue/no-parsing-error */
<template>
    <div>{{optionValue}}
            <select 
            :value="selected"
            @input="$emit('update:selected', $event.target.value)"
             class="px-4 py-2 bg-gray-200 border-gray-700 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
                <option value="ALL">{{label}}</option>
                <option v-for ="(optionValue,index) in items" :key="index" :value="optionValue">{{optionValue}}</option>
            </select>
    </div>
</template>
<script>
import { } from 'vue'
export default {
     props:{
        items:Array,
        selected: {
            type: String,
            default: '',
            required: true
        },
        label:{
            type:String,
            default:'Filter by country',
            required:true
        }
    },
    emits: ['update:selected'],  
}
</script>