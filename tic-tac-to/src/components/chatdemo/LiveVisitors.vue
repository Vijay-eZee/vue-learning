<template>
  <table>
    <thead class="border-b-2">
      <th>User Name</th>
      <th>Email</th>
    </thead>
    <tbody>
      <tr v-for="(user, index) in visitors" :key="index">
        <td class="border-2 p-2">
          {{ JSON.parse(user).userName }}
        </td>
        <td class="border-2 p-2">
          {{ JSON.parse(user).email }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import userData from "../../constant/users";
import { io } from "socket.io-client";
export default {
  name: "LiveVisitors",
  data() {
    return {
      myUsers: userData,
      socket: null,
      visitors: [],
    };
  },
  mounted() {
    this.socket = io("http://localhost:5000");
    let ind = Math.floor(Math.random() * this.myUsers.length + 1);
    const payLoad = {
      userName: this.myUsers[ind].username,
      email: this.myUsers[0].email,
    };
    this.socket.emit("new_visitor", JSON.stringify(payLoad));
    this.socket.on("visitors", (payLoad) => {
      this.visitors = payLoad;
    });
  },
  computed: {
    userDetail() {
      console.log(this.visitors);
      return this.visitors;
    },
  },
};
</script>