<template>
  <ul class="flex justify-center space-x-4 py-2">
    <li class="inline">
      <router-link :to="{ name: 'home' }">Home</router-link>
    </li>
    <li class="inline">
      <router-link :to="{ name: 'tictac' }">TicTac</router-link>
    </li>
    <li class="inline">
      <router-link :to="{ name: 'quiz' }">Quiz</router-link>
    </li>
    <li class="inline">
      <router-link :to="{ name: 'chat' }">Chatdemo</router-link>
    </li>
    <li class="inline">
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "NavBar",
};
</script>