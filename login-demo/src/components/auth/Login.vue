<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <base-text-input v-model="userName">
      <template v-slot:prepend-icon>
        <span class="material-icons-outlined"> account_circle </span>
      </template></base-text-input
    >
    <base-text-input v-model="pass">
      <template v-slot:prepend-icon>
        <span class="material-icons-outlined"> email </span>
      </template>
    </base-text-input>
    <base-core-button
      class="bg-blue-400 text-white font-bold rounded-full px-2 py-1"
      @click="validadteUser"
    >
      <template v-slot:text> validate </template>
    </base-core-button>
  </div>
</template>
<script>
import BaseCoreButton from "../core/BaseCoreButton.vue";
import BaseTextInput from "../core/BaseTextInput.vue";

export default {
  components: { BaseTextInput, BaseCoreButton },
  name: "Login",
  data() {
    return {
      userName: "",
      pass: "",
    };
  },
  methods: {
    validadteUser() {
      if (this.userName === "test" && this.pass === "test@1234") {
        this.$store.dispatch("setAuthToken", "test");
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>