<template>
  <nav
    ref="newCourses"
    role="category"
    class="
      d-flex
      align-items-center
      justify-content-center
      show-swip
      new-courses__wrapper
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
        new-courses__items
        margin-0
        d-flex
        align-items-center
        list-unstyled
      "
    >
      <li
        v-for="item in items"
        :key="item"
        :class="[
          'new-courses__item user-select-none cursor-pointer d-flex align-items-center justify-content-center width-155 height-55 radius-18 text-13  margin-end-20 flex-shrink-0 weight-br-300',
          {
            'new-courses__active': item === selected,
            'text-black': item !== selected,
          },
        ]"
        @click="sendNewSelected(item)"
        v-text="item"
      />
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarSelectedCategory',
  model: {
    prop: 'selected',
    event: 'changeSelected',
  },
  props: {
    selected: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      status: false,
      startDownX: null,
      scrollLeft: null,
      items: [
        'التصميم',
        'إدارة الاعمال',
        'البرمجة',
        'التصوير',
        'التسويق',
        'الميديا',
      ],
    }
  },
  methods: {
    // 1
    mouseDown(e) {
      // 1
      this.status = true
      // 2
      this.startDownX = e.pageX - this.$refs.newCourses.offsetLeft
      // 3
      this.scrollLeft = this.$refs.newCourses.scrollLeft
    },
    // 2
    mouseMove(e) {
      // 1
      if (!this.status) return
      // 2
      const startMoveX = e.pageX - this.$refs.newCourses.offsetLeft
      const div = startMoveX - this.startDownX
      this.$refs.newCourses.scrollLeft = this.scrollLeft - div
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
      this.startDownX = e.touches[0].pageX - this.$refs.newCourses.offsetLeft
      // 3
      this.scrollLeft = this.$refs.newCourses.scrollLeft
    },
    touchMove(e) {
      // 1
      if (!this.status) return
      // 2
      const startMoveX = e.touches[0].pageX - this.$refs.newCourses.offsetLeft
      const div = startMoveX - this.startDownX
      this.$refs.newCourses.scrollLeft = this.scrollLeft - div
    },
    sendNewSelected(newName) {
      this.$emit('changeSelected', newName)
    },
  },
}
</script>

<style lang="scss">
.show-swip {
  border-radius: 13px;
  //
  @media only screen and (max-width: 900px) {
    background-image: linear-gradient(
      to right,
      transparent,
      rgba($chardonnay, 0.5) 100%
    );
  }
}

.new-courses {
  &__active {
    font-weight: 400;
    background-color: var(--coral);
    color: var(--white);
  }
}
</style>
