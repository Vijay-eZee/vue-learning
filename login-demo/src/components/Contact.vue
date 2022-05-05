<template>
  <div>
    <button @click="isModalOpen = true">Open Modal</button>
    <Teleport to="body">
      <div v-if="isModalOpen" class="modal bg-green-400">
        <p>Hello from the modal!</p>
        <button @click="isModalOpen = false">Close</button>
      </div>
    </Teleport>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      isModalOpen: false,
    };
  },
};
</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>