<template>
  <button
    type="button"
    class="btn d-flex justify-content-center align-items-center"
    @click.stop="s"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BtnPrimary',
  methods: {
    s() {},
  },
}
</script>

<style></style>
