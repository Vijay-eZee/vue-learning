<template>
  <div class="flex border-2 mt-1 border-gray-300 rounded-lg overflow-hidden">
    <div class="flex items-center justify-center bg-gray-400 w-8">
      <slot name="prepend-icon"></slot>
    </div>
    <input
      :value="modelValue"
      class="p-2 focus:outline-none"
      v-bind="$attrs"
      @input="updateInput"
    />
  </div>
</template>
<script>
export default {
  name: "BaseTextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    updateInput($event) {
      const newstr = $event.target.value;
        this.$emit("update:modelValue", newstr);
    },
  },
};
</script>