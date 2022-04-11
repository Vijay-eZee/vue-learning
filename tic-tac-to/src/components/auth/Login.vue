<template>
  <div class="flex items-center justify-center h-screen">
    <base-vselect :items="country" :selectItem="country[0]">
      <template v-slot:select="{ selectedItem }">
        <div class="flex">
          <div
            class="
              flex
              justify-center
              items-center
              w-8
              h-8
              rounded-full
              bg-blue-400
              mr-2
              font-bold
            "
          >
            {{ selectedItem.name.charAt(0) }}
          </div>
          <span> {{ selectedItem.name }}</span>
        </div>
      </template>
      <template v-slot:content="{ item }">
        <div class="flex">
          <!-- <div
            class="
              flex
              justify-center
              items-center
              w-8
              h-8
              rounded-full
              bg-blue-400
              mr-2
              font-bold
            "
          >
            {{ item.name.charAt(0) }}
          </div> -->
          <div class="flex justify-center items-center w-8 h-8 mr-2 font-bold">
            <input type="checkbox" />
          </div>
          <span>{{ item.name }}</span>
        </div>
      </template>
    </base-vselect>
  </div>
</template>
<script>
import BaseVselect from "../core/BaseVselect.vue";
export default {
  components: { BaseVselect },
  name: "Login",
  data() {
    return {
      country: [
        { id: "IN", name: "India" },
        { id: "USA", name: "USA" },
        { id: "UAE", name: "UAE" },
        { id: "IN", name: "India" },
        { id: "USA", name: "USA" },
        { id: "UAE", name: "UAE" },
        { id: "IN", name: "India" },
        { id: "USA", name: "USA" },
        { id: "UAE", name: "UAE" },
        { id: "IN", name: "India" },
        { id: "USA", name: "USA" },
        { id: "UAE", name: "UAE" },
      ],
      selectedCountry: { id: "IN", name: "India" },
    };
  },
};
</script>