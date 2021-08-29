<template>
  <button
    type="button"
    class="btn d-flex justify-content-center align-items-center"
    @click.stop="$emit('clicked')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BtnPrimary',
}
</script>

<style></style>
