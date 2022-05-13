<template>
  <input
    :value="modelValue"
    type="number"
    placeholder="Quantity"
    class="font-light text-sm focus:outline-none p-1 border-gray-400 rounded-md border w-40 overflow-hidden ring ring-gray-300 ring-opacity-20 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-10"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  name: "InputField",
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
