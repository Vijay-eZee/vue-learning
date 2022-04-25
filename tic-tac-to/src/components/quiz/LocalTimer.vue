<template>
  <div class="p-2">
    <span class="text-blue-400"
      >Time left: <label>{{ timeLeft }}</label></span
    >
  </div>
</template>
<script>
export default {
  name: "LocalTimer",
  inject: ["timeLeft"],
};
</script>