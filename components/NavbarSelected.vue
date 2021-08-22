<template>
  <nav
    ref="navbarSelected"
    role="category"
    class="
      d-flex
      align-items-center
      justify-content-center
      show-swip
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
      <template v-if="statusRender">
        <li
          v-for="item in items"
          :key="item"
          :class="[
            'navbar-selected__item user-select-none cursor-pointer d-flex align-items-center justify-content-center text-dark width-155 height-55 radius-18 text-13 flex-shrink-0 weight-br-300',
            {
              'navbar-selected__active': item === selected,
            },
          ]"
          @click="sendNewSelected(item)"
          v-text="item"
        />
      </template>
      <!--  -->
      <template v-else>
        <li
          v-for="item in items"
          :key="item.name"
          :class="[
            'navbar-selected__item overflow-hidden radius-18 user-select-none cursor-pointer d-flex align-items-center justify-content-center  width-155 height-55 text-13 flex-shrink-0 weight-br-300',
            {
              'navbar-selected__active': item.name === selected,
            },
          ]"
        >
          <a
            v-smooth-scroll
            class="
              text-dark
              d-flex
              align-items-center
              justify-content-center
              width-100
              height-100
            "
            :href="`#${item.id}`"
            v-text="item.name"
          />
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarSelected',
  model: {
    prop: 'selected',
    event: 'changeSelected',
  },
  props: {
    selected: {
      type: String,
      default: '',
    },
    statusRender: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      status: false,
      startDownX: null,
      scrollLeft: null,
    }
  },
  inject: ['items'],
  methods: {
    // 1
    mouseDown(e) {
      // 1
      this.status = true
      // 2
      this.startDownX = e.pageX - this.$refs.navbarSelected.offsetLeft
      // 3
      this.scrollLeft = this.$refs.navbarSelected.scrollLeft
    },
    // 2
    mouseMove(e) {
      // 1
      if (!this.status) return
      // 2
      const startMoveX = e.pageX - this.$refs.navbarSelected.offsetLeft
      const div = startMoveX - this.startDownX
      this.$refs.navbarSelected.scrollLeft = this.scrollLeft - div
    },
    //
    mouseLeave() {
      // 1
      this.status = false
    },
    //
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
    sendNewSelected(newName) {
      this.$emit('changeSelected', newName)
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
