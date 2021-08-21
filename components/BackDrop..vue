<template>
  <div
    v-if="toggle"
    class="backdrop d-flex justify-content-center align-items-center"
    @click="closeBackDrop"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BackDrop',
  props: {
    toggle: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    toggle(value) {
      if (value) return (document.body.style.overflowY = 'hidden')
      document.body.style.overflowY = 'visible'
    },
  },
  mounted() {
    document.addEventListener('keydown', this.closeKeyDown)
  },
  methods: {
    closeKeyDown(e) {
      if (e.key === 'Escape') this.closeBackDrop()
    },
    //
    closeBackDrop() {
      this.$emit('toggleBackDrop', false)
    },
  },
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.459);
  z-index: 9999;
}
</style>
