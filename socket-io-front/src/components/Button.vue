<template>
        <button class="bg-red-500" v-bind="$attrs">
            <slot name="btnName"></slot>
        </button>
</template>
<script>
export default {
    name:'Button'
}
</script>