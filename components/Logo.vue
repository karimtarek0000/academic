<template>
  <nuxt-link
    to="/"
    :class="[
      'weight-br-400 d-flex align-items-center',
      { 'text-20': !small, 'text-16': small },
    ]"
  >
    <img
      :class="['margin-end-5', { 'small-logo': small }]"
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
      default: 'text-light',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.small-logo {
  width: 2.8rem;
}
</style>
