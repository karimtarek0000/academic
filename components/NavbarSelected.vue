<template>
  <nav
    ref="navbarSelected"
    role="category"
    class="
      d-flex
      align-items-center
      justify-content-center
      navbar-selected__wrapper
      overflow-hidden
    "
    @mousedown="mouseDown"
    @touchstart="touchStart"
    @mousemove="mouseMove"
    @touchmove="touchMove"
    @mouseleave="mouseLeave"
    @mouseup="mouseUp"
  >
    <!--  -->
    <ul
      role="items"
      class="
        navbar-selected__items
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
  name: 'NavbarSelected',
  data() {
    return {
      status: false,
      startDownX: null,
      scrollLeft: null,
    }
  },
  methods: {
    mouseDown(e) {
      // 1
      this.status = true
      // 2
      this.startDownX = e.pageX - this.$refs.navbarSelected.offsetLeft
      // 3
      this.scrollLeft = this.$refs.navbarSelected.scrollLeft
    },
    mouseMove(e) {
      // 1
      if (!this.status) return
      // 2
      const startMoveX = e.pageX - this.$refs.navbarSelected.offsetLeft
      const div = startMoveX - this.startDownX
      this.$refs.navbarSelected.scrollLeft = this.scrollLeft - div
    },
    mouseLeave() {
      // 1
      this.status = false
    },
    mouseUp() {
      // 1
      this.status = false
    },
    touchStart(e) {
      // 1
      this.status = true
      // 2
      this.startDownX =
        e.touches[0].pageX - this.$refs.navbarSelected.offsetLeft
      // 3
      this.scrollLeft = this.$refs.navbarSelected.scrollLeft
    },
    touchMove(e) {
      // 1
      if (!this.status) return
      // 2
      const startMoveX =
        e.touches[0].pageX - this.$refs.navbarSelected.offsetLeft
      const div = startMoveX - this.startDownX
      this.$refs.navbarSelected.scrollLeft = this.scrollLeft - div
    },
  },
}
</script>

<style lang="scss">
//
.navbar-selected {
  //
  &__wrapper {
    max-width: 99%;
    margin-left: auto;
    margin-right: auto;
    //
    @media only screen and (max-width: 992px) {
      max-width: 78vw;
    }
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

    &:not(:last-of-type) {
      margin-left: 2rem;
    }
  }
}
</style>
