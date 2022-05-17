<template>
  <div class="test" id="sample">
      <Teleport to="body">
        <slot />
      </Teleport>
  </div>
</template>

<script>
export default {
  name: 'teleport-window',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
    containerEl:document.getElementById('sample'),
      windowRef: null,
    }
  },
  mounted() {
   this.windowRef = window.open("", "", "width=600,height=400,left=200,top=200");
    this.windowRef.document.body.appendChild(this.containerEl);
  },
 
}
</script>