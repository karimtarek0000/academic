<template>
  <p
    v-if="typeError === 'num'"
    role="error"
    class="margin-y-10 text-12 text-dark"
  >
    يجب ادخال ارقام فقط
  </p>
  <p v-else role="error" class="margin-y-10 text-12 text-dark">خطا</p>
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
