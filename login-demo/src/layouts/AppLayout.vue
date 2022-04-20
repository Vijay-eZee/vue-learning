<template>
  <!-- {{ component }} -->
  <component :is="component">
    <slot />
  </component>
</template>
<script>
import DefaultLayout from "./DefaultLayout.vue";
import { shallowRef } from "vue";
export default {
  name: "AppLayout",
  data() {
    return {
      defaultLayout: shallowRef(DefaultLayout),
    };
  },
  computed: {
    component() {
      console.log(this.$route.meta.layout);
      return this.$route.meta.layout || this.defaultLayout;
    },
  },
  // watch: {
  //   "this.$route.meta.layout": {
  //     handler(layout) {
  //       alert(layout);
  //       console.log(this.$route.meta.layout);
  //       try {
  //         console.log(this.$route.meta.layout);
  //         const component = require(`./${layout}.vue`);
  //         this.layout = component || DefaultLayout;
  //       } catch (error) {
  //         console.log(error);
  //         this.layout = DefaultLayout;
  //       }
  //     },
  //     deep: true,
  //   },
  // },
};
</script>