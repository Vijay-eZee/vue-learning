<template>
  <Header @active-tab="setActiveTab" />
  <div class="flex items-center justify-center bg-white">
    <div class="max-w-2xl w-full h-screen">
      <component :is="currentTab"></component>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Visitors from "./LiveVisitors.vue";
import Chat from "./PublicChat.vue";
import JoinRoom from "./RoomChat.vue";
import { ref } from "vue";
export default {
  name: "MainBoard",
  components: {
    Header,
    Visitors,
    Chat,
    JoinRoom,
  },
  setup() {
    const currentTab = ref("Visitors");
    function setActiveTab(tab) {
      currentTab.value = tab.currentTab;
    }
    return {
      currentTab,
      setActiveTab,
    };
  },
};
</script>
