<template>
  <nuxt-link to="/" class="weight-br-400 text-20 d-flex">
    <img
      class="margin-end-10"
      src="~/assets/images/global/logos/logo.svg"
      alt="logo"
    />
    <span :class="color">أكاديمي</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    color: {
      type: String,
      default: 'text-white',
    },
  },
}
</script>

<style></style>
