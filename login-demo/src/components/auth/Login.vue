<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <base-text-input v-model="userName">
     <template v-slot:prepend-icon>
        <span class="material-icons-outlined"> account_circle </span>
      </template></base-text-input>
    <base-text-input v-model="emailId">
      <template v-slot:prepend-icon>
        <span class="material-icons-outlined"> email </span>
      </template>
    </base-text-input>
    <base-core-button>
    <template v-slot:text>
     validate
    </template>
    </base-core-button>
  </div>
</template>
<script>
import BaseCoreButton from '../core/BaseCoreButton.vue';
import BaseTextInput from '../core/BaseTextInput.vue';



export default {
  components: { BaseTextInput, BaseCoreButton },
  name: "Login",
  data() {
    return {
      userName: "",
      emailId: "",
    };
  },
};
</script>