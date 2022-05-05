<template>
  <div>
    about{{ $store.state.auth.authToken }}
    <div>about###{{ token }}</div>
    <div>{{ token }}</div>
    <div>{{ isAuthorize }}</div>
    <header-component />
  </div>
</template>
<script>
import { mapState } from "vuex";
import { inject } from "vue";
export default {
  name: "About",
  mounted() {
    console.log(this);
    console.log(this.$store.state.auth.authToken);
    console.log("token-->" + this.token);
    const logout = inject("logger");
    logout("hello");
  },
  computed: {
    isAuthorize() {
      return this.$store.state.auth.authToken !== "" ? true : false;
    },
    ...mapState({
      token: (state) => state.auth.authToken,
    }),
  },
};
</script>