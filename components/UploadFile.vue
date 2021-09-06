<template>
  <!--  -->
  <div class="upload-file" role="upload-file">
    <!--  -->
    <label
      for="uploadFile"
      class="
        d-flex
        flex-column
        justify-content-center
        align-items-center
        cursor-pointer
      "
    >
      <slot />
    </label>
    <!--  -->
    <input
      id="uploadFile"
      :accept="accept"
      class="d-none"
      type="file"
      @change="getFile"
    />
  </div>
</template>

<script>
export default {
  name: 'UploadFile',
  props: {
    accept: {
      type: String,
      default: '*',
    },
  },
  methods: {
    getFile(e) {
      const file = e.target.files[0]
      if (file) {
        this.$emit('uploadFile', file)
      }
    },
  },
}
</script>

<style></style>
