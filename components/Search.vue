<template>
  <form
    class="
      navbar__search
      input--object-1
      width-349
      height-55
      custom-input custom-input--object-1
      radius-21
      overflow-hidden
      position-relative
    "
  >
    <div class="position-absolute navbar__search-icon cursor-pointer">
      <GSvg name-icon="search-line" class="svg-20" title="بحث" />
    </div>
    <input
      class="
        padding-start-27
        bg-whiteDark
        text-13 text-Voodoo
        width-100
        height-100
        weight-br-300
      "
      type="text"
      placeholder="بحث"
      autocomplete="off"
    />
  </form>
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style></style>
