<template>
  <AppLayout>
    <router-view></router-view>
  </AppLayout>
</template>

<script>
//import { mapGetters } from "vuex";
import AppLayout from "./layouts/AppLayout.vue";
export default {
  name: "App",
  components: {
    AppLayout,
  },
  // computed: {
  //   ...mapGetters({ isValid: "isAuthenticate" }),
  // },
  mounted() {
    console.log(this.$route);
  },
};
</script>

