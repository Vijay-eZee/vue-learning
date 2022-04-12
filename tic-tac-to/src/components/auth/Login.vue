<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <base-input v-model="userName">
      <template v-slot:prepend-icon>
        <span class="material-icons-outlined"> account_circle </span>
      </template>
    </base-input>
    <base-input v-model="emailId">
      <template v-slot:prepend-icon>
        <span class="material-icons-outlined"> email </span>
      </template>
    </base-input>
  </div>
</template>
<script>


export default {
  name: "Login",
  components: {
    
  },
  data() {
    return {
      userName: "",
      emailId: "",
    };
  },
};
</script>