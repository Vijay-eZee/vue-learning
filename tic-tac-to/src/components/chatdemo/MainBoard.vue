<template>
  <div>
    <Header @active-tab="setActiveTab" />
    <div class="flex items-center justify-center bg-white">
      <div class="max-w-2xl w-full h-screen">
        <div v-show="currentTab === 'Visitors'">
          <Visitors />
        </div>
        <div v-show="currentTab === 'Chat'">
          <Chat />
        </div>
        <div v-show="currentTab === 'JoinRoom'">
          <JoinRoom />
        </div>
        <!-- <component :is="currentTab"></component> -->
      </div>
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
