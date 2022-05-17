<template>
   <button @click="open = !open" class="bg-green-300 p-2 rounded-md">Open Modal</button>
<Teleport to="body">
  <div v-if="open" class="modal border-gray-400 border-2 p-2">
    <p>Hello from the modal!</p>
    <button @click="open = false" class="bg-blue-300 p-2 rounded-md">Close</button>
  </div>
</Teleport>
</template>
<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>
<style scoped>
.modal {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>