<template>
 <GeneralCase v-if="true"/>
 <!-- <NewWindow v-if="false"/>
 <TeleportCase v-if="true"/> -->
</template>

<script>

import GeneralCase from './components/GeneralCase.vue'
// import NewWindow from './components/NewWindow.vue'
// import TeleportCase from './components/TeleportCase.vue'
export default {
  name: 'App',
  components: {
       GeneralCase,
      //  NewWindow,
      //  TeleportCase
  }
}
</script>

