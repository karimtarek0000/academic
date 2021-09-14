<template>
  <!--  -->
  <div class="upload-file" role="upload-file">
    <!--  -->
    <label
      :for="id"
      class="
        d-flex
        flex-column
        justify-content-center
        align-items-center
        cursor-pointer
        width-100
        height-100
      "
    >
      <slot />
    </label>
    <!--  -->
    <input
      :id="id"
      :accept="accept"
      class="d-none"
      type="file"
      @change="getFile"
    />
  </div>
</template>

<script>
export default {
  name: 'AppAppUploadFile',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    value: {
      required: true,
    },
    accept: {
      type: String,
      default: '*',
    },
    id: {
      type: String,
      default: 'image',
    },
  },
  methods: {
    getFile(e) {
      const file = e.target.files[0]
      if (file) {
        this.$emit('input', file)
      }
    },
  },
}
</script>

<style></style>
