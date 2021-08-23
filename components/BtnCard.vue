<template>
  <button
    type="button"
    class="btn d-flex justify-content-center align-items-center"
    @click.stop="s"
    v-text="title"
  />
</template>

<script>
export default {
  name: 'BtnCard',
  props: {
    title: {
      type: String,
      default: 'اضف الي السلة',
    },
  },
  methods: {
    s() {},
  },
}
</script>

<style></style>
