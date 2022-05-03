<template>
  <table>
    {{
      userDetail
    }}
    <thead class="border-b-2">
      <th v-for="(title, index) in Object.keys(userDetail[0])" :key="index">
        {{ title }}
      </th>
    </thead>
    <tbody>
      <tr v-for="(user, index) in userDetail" :key="index">
        <td v-for="(col, indx) in user" :key="indx" class="border-2 p-2">
          {{ col }}
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
      this.visitors = JSON.parse(payLoad);
      console.log(this.visitors);
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