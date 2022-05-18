<template>
    <div>
        <button class="bg-red-500" v-bind="$attrs">
            <slot name="btnName"></slot>
        </button>
    </div>
</template>
<script>
export default {
    name:'Button'
}
</script>