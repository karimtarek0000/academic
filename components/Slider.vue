<template>
  <div class="row slider flex-column align-items-center position-relative">
    <VueSlickCarousel ref="carousel" class="row g-0" v-bind="settings">
      <!--  -->
      <slot />
    </VueSlickCarousel>
    <!--  -->
    <div
      class="
        row
        margin-top-20
        align-items-center
        justify-content-center
        slider__actions
      "
    >
      <button
        style="width: 4.8rem; height: 4.8rem"
        class="
          arrow arrow--next
          shape shape__voodoo
          position-relative
          rounded-circle
          bg-voodoo-light
          margin-end-20
        "
        @click="next"
      >
        <GSvg class="svg-20" name-icon="arrow-next" title="التالي" />
      </button>
      <button
        style="width: 4.8rem; height: 4.8rem"
        class="
          arrow arrow--prev
          shape shape__voodoo
          position-relative
          rounded-circle
          bg-voodoo-light
        "
        @click="prev"
      >
        <GSvg class="svg-20" name-icon="arrow-prev" title="السابق" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    addSettings: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      settings: {
        lazyLoad: 'ondemand',
        rtl: true,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...this.addSettings,
        // autoplay: true,
        // autoplaySpeed: 3000,
      },
    }
  },
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>

<style lang="scss">
.arrow {
  svg {
    position: relative;
    z-index: 2;
  }
}

.slider__actions {
  width: 14.8rem;
}
</style>
