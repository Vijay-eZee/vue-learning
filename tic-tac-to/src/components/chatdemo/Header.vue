<template>
  <div class="bg-blue-300 text-white font-bold">
    <NavBar :tabs="tabs">
      <template v-slot:tab="{ tabTitle }">
        <button @click="$emit('active-tab', { currentTab: tabTitle })">
          {{ tabTitle }}
        </button>
      </template>
    </NavBar>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
export default {
  name: "Header",
  components: {
    NavBar,
  },
  data() {
    return {
      tabs: ["Visitors", "Chat", "JoinRoom"],
    };
  },
};
</script>
