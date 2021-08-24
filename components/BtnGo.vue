<template>
  <nuxt-link
    class="btn d-flex justify-content-center align-items-center radius-21"
    :to="{ name: to }"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'BtnGo',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
