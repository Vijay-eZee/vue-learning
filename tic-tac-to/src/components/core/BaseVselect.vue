<template>
  <div class="flex-col w-48">
    <div
      class="flex p-1 border-b-2 cursor-pointer justify-between"
      @click="isOpen = true"
    >
      <slot name="select" :selectedItem="selItem"></slot>
      <span class="material-icons-outlined"> arrow_drop_down </span>
    </div>
    <div class="max-h-44 overflow-y-auto" :class="{ hidden: !isOpen }">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex hover:bg-gray-100 cursor-pointer"
      >
        <div class="flex justify-center p-1" @click="updateSelectedItem(item)">
          <slot name="content" :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseSelect",
  props: {
    items: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: String,
    },
    selectItem: {
      type: String,
    },
  },
  data() {
    return {
      selItem: this.selectItem,
      isOpen: false,
    };
  },
  methods: {
    updateSelectedItem(item) {
      this.selItem = item;
      this.isOpen = false;
      console.log(this.selItem);
    },
  },
};
</script>