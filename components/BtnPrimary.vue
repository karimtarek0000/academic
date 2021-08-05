<template>
  <nuxt-link
    class="
      btn
      width-148
      height-55
      d-flex
      justify-content-center
      align-items-center
      radius-21
    "
    :to="{ name: to }"
    >{{ title }}</nuxt-link
  >
</template>

<script>
export default {
  name: 'BtnPrimary',
  props: {
    title: {
      type: String,
      default: 'click',
    },
    to: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
