<template>
  <div class="row slider flex-column align-items-center">
    <VueSlickCarousel ref="carousel" class="row" v-bind="settings">
      <!--  -->
      <slot />
    </VueSlickCarousel>
    <!--  -->
    <div
      class="
        row
        margin-top-20
        width-148
        align-items-center
        justify-content-center
        slider__actions
      "
    >
      <button
        style="width: 4.8rem; height: 4.8rem"
        class="
          arrow arrow--next
          shape shape__Voodoo
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
          shape shape__Voodoo
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
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
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
</style>
