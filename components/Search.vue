<template>
  <form
    class="
      input-search input--object-1
      custom-input custom-input--object-1
      radius-21
      height-55
      overflow-hidden
      position-relative
    "
  >
    <div class="position-absolute input-search__icon cursor-pointer">
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

<style lang="scss">
//
.input {
  &-search {
    //
    &__icon {
      @include position('rt', $moveR: '20px', $moveT: '50%');
    }
  }
}

//  width-349
// height-55
</style>
