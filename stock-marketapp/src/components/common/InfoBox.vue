<template>
  <div class="flex flex-col w-64 border rounded-md justify-center mr-4 mt-4">
    <slot name="header"></slot>
    <div class="flex p-3 relative">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoBox",
};
</script>
