<template>
  <p role="error" class="margin-y-10 text-12 text-dark">
    <template v-if="typeError === 'num'"> يجب ادخال ارقام فقط </template>
    <template v-if="typeError === 'email'"> ادخل الايميل بشكل صحيح </template>
    <template v-else> خطا </template>
  </p>
</template>

<script>
export default {
  name: 'AppMessageInputError',
  props: {
    typeError: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
