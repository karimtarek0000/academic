<template>
  <nav
    ref="AppNavbarToGo"
    role="category"
    class="
      d-flex
      align-items-center
      justify-content-center
      padding-0
      navbar-selected__wrapper
      change-scrollbar-x
      custom-container
    "
  >
    <!--  -->
    <ul
      role="items"
      class="
        navbar-selected__items
        position-relative
        margin-0
        d-flex
        align-items-center
        list-unstyled
      "
    >
      <slot />
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbarToGo',
}
</script>

<style lang="scss">
//
.navbar-selected {
  //
  &__wrapper {
    margin-left: auto;
    margin-right: auto;
    overflow-x: auto;
  }
  //
  &__items {
    max-width: 100%;
  }

  //
  &__active {
    font-weight: 400;
    pointer-events: none;
  }

  //
  &__item {
    transition: all 0.1s ease;

    @include DetectHover {
      &:hover {
        font-weight: 400;
      }
    }
  }
}
</style>
