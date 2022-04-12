<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <BaseInput v-model.capitalize="userName">
      <template v-slot:prepend-icon>
        <span class="material-icons-outlined"> account_circle </span>
      </template>
    </BaseInput>
    <BaseInput v-model="emailId">
      <template v-slot:prepend-icon>
        <span class="material-icons-outlined"> email </span>
      </template>
    </BaseInput>
  </div>
</template>
<script>
import BaseInput from "../core/BaseInput.vue";
export default {
  name: "Signup",
  components: {
    BaseInput,
  },
  data() {
    return {
      userName: "",
      emailId: "",
    };
  },
};
</script>