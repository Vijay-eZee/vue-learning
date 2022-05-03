<template>
  <div>
    about{{ $store.state.auth.authToken }}
    <div>about###{{ token }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "About",
  mounted() {
    console.log(this.$store.state.auth.authToken);
    console.log("token-->" + this.token);
  },
  computed: mapState({
    token: (state) => state.auth.authToken,
  }),
};
</script>