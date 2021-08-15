<template>
  <section class="sub-section margin-top-50 border-top-whiteDark padding-y-30">
    <h2 class="text-22 text-dark margin-bottom-30">الأقسام الفرعية</h2>
    <!--  -->
    <div class="wrapper">
      <Slider :add-settings="settings">
        <div
          v-for="item in items"
          :key="item.id"
          class="
            bg-whiteDark
            radius-27
            d-flex
            align-items-center
            justify-content-center
            padding-y-20 padding-x-10
          "
          dir="rtl"
        >
          <GSvg class="svg-37" :name-icon="item.icon" />
          <p
            class="text-15 margin-start-5 margin-bottom-0"
            v-text="item.name"
          />
        </div>
      </Slider>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionSubSections',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      settings: {
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
.sub-section {
  //
  .slider__actions {
    position: absolute;
    @include position('rt', $moveT: 0, $moveR: 0);
    width: 100%;
    height: 100%;
    margin: 0 !important;
    justify-content: space-between !important;
    pointer-events: none;
    z-index: 9999;
    padding: 0 20px;
  }

  //
  .arrow {
    pointer-events: all;
    &--prev {
      transform: translateX(-50px);
    }
    &--next {
      transform: translateX(50px);
    }
  }

  //
  .slick-slide {
    padding: 0 2rem;
  }

  //
  .wrapper {
    margin: 0 auto;
    max-width: 88vw;
    @media only screen and (max-width: 1200px) {
      max-width: 80vw;
    }
  }
}
</style>
