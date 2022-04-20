<template>
  <div class="relative h-52 w-52 bg-blue-800 mr-4 mt-4">
    <slot name="id"></slot>
    <slot name="title"></slot>
    <div class="absolute bottom-5 left-20">
      <slot name="btn"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
};
</script>