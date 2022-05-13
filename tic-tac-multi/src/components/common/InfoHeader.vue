<template>
  <div class="p-1" v-bind="$attrs">
    <span class="text-sm font-semibold"><slot name="title"></slot></span>
    <span class="text-xs">(</span>
    <slot name="price" class="inline-block align-bottom"></slot>
    <slot name="qty" class="inline-block align-bottom"></slot>
    <span class="text-xs">)</span>
  </div>
</template>
<script>
export default {
  name: "InfoHeader",
};
</script>
