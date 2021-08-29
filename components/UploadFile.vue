<template>
  <!--  -->
  <div class="uploadVideo" role="upload-file">
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
    <input id="uploadFile" class="d-none" type="file" @change="getFile" />
  </div>
</template>

<script>
export default {
  name: 'UploadFile',
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
