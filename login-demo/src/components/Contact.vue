<template>
  <div>
    <button @click="handleCLick">Open Modal</button>
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
  methods: {
    handleCLick() {
    //  isModalOpen = true;
      this.windowRef = window.open(
        "",
        "",
        "width=600,height=400,left=200,top=200"
      );
    },
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