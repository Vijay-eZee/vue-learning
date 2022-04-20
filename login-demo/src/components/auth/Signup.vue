<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <base-text-input v-model="userName">
      <template v-slot:prepend-icon>
        <span class="material-icons-outlined"> account_circle </span>
      </template>
    </base-text-input>
    <base-text-input v-model="emailId">
      <template v-slot:prepend-icon>
        <span class="material-icons-outlined"> email </span>
      </template>
    </base-text-input>
  </div>
</template>
<script>

export default {
  name: "Signup",
  data() {
    return {
      userName: "",
      emailId: "",
    };
  },
};
</script>