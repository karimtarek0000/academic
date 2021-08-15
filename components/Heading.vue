<template>
  <!--  -->
  <div role="title-section" class="text-center margin-bottom-30">
    <h5 class="text-coral text-16" v-text="h5" />
    <h2 class="text-dark text-30" v-text="h2" />
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    h5: {
      type: String,
      required: true,
    },
    h2: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
