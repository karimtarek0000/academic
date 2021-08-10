<template>
  <button
    type="button"
    class="btn d-flex justify-content-center align-items-center"
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
}
</script>

<style></style>
